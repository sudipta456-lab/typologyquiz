/**
 * Render handbook snippet images for jurisdictions whose manual is published as
 * HTML rather than as a croppable PDF.
 *
 * Ontario, New York and Georgia are the odd ones out. The MTO Driver's Handbook
 * and the NYS Driver's Manual (MV-21) are both published free as web pages and
 * neither has a full PDF worth cropping (New York's mv21.pdf is a 4-page stub);
 * Georgia's DDS manual does have a PDF, but every excerpt was quoted from the
 * section pages DDS publishes on dds.georgia.gov, each with its own deep link.
 * So instead of scripts/build-excerpt-snippets.py's PDF path, we load the
 * source page in a real browser, locate the verbatim quote in the rendered
 * text, wrap it in a highlight, and screenshot a tight band around it.
 *
 * Same output contract as the PDF pipeline:
 *   public/handbook/<slug>/<key>.png
 *   src/lib/driving/<slug>/snippets.json  ->  key: {src, page, width, height}
 * `page` is always 0 - a web page has no page numbers, and the UI suppresses
 * the "(p. N)" suffix when page is 0.
 *
 * Each distinct source page is fetched ONCE and every snippet that cites it is
 * rendered from that single load, with a delay between page loads.
 *
 * Usage:
 *   npx tsx scripts/build-html-snippets.mjs <ontario|newyork|georgia> [--only key1,key2]
 */
import { chromium } from "playwright";
import { mkdir, readFile, writeFile } from "node:fs/promises";
import { createHash } from "node:crypto";
import os from "node:os";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");

const PAD_X = 10;
const PAD_ABOVE = 16;
const PAD_BELOW = 12;
const MAX_BAND_CSS = 400; // don't let a runaway match produce a page-tall crop
const PAGE_DELAY_MS = 2500;

/* --------------------------------------------------------- jurisdictions --- */

/**
 * New York's pages are typeset by us, not by the source.
 *
 * dmv.ny.gov sits behind a Cloudflare bot check that 403s every automated
 * client, so the chapters are read from the Internet Archive's capture of the
 * DMV's own whole-manual export (/book/export/html/1551) instead. That export
 * is a Drupal print view: its only stylesheet is a 1KB print sheet that hides
 * chrome and sets nothing about type, so the page arrives as unstyled default
 * serif. This sheet gives it a readable measure and face, sized to land on the
 * same ~802px-wide crop Ontario produces. Only the typography is ours - every
 * word in the band is the DMV's.
 */
const NY_CSS = `
  html { -webkit-font-smoothing: antialiased; }
  body {
    font-family: -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
    font-size: 17px; line-height: 1.6; color: #1a1a1a; background: #fff;
    /* 438px of text + 2x10px crop padding = the same 802px-wide crop Ontario
       produces off ontario.ca, so the two folders drop into the same slot. */
    box-sizing: border-box; max-width: 458px; margin: 0 auto; padding: 0 10px;
  }
  p, li, dd, dt, td, th, blockquote { font-size: 17px; line-height: 1.6; }
  h1, h2, h3, h4, h5, h6 { line-height: 1.3; margin: 1.2em 0 0.5em; }
  h1 { font-size: 27px; } h2 { font-size: 23px; } h3 { font-size: 20px; }
  h4, h5, h6 { font-size: 18px; }
  /* Markers default to the OL's padding, i.e. outside the LI's border box - and
     the crop snaps to that box, so "4." gets sliced off the left of a numbered
     step. Pulling them inside keeps the step number in the picture. */
  ol, ul { padding-left: 0; margin-left: 0; }
  li { margin: 0.35em 0; list-style-position: inside; }
  a { color: #1a5cb0; }
  /* Assets live on the blocked host, so every image is a broken-icon box.
     The crops are text bands, so drop them rather than let one shove the
     paragraph around. */
  img, svg, iframe { display: none !important; }
  table { border-collapse: collapse; width: 100%; }
  td, th { border: 1px solid #d4d4d4; padding: 6px 9px; text-align: left; vertical-align: top; }
  caption { font-weight: 600; padding-bottom: 6px; }
`;

/**
 * dds.georgia.gov is a Drupal site with a wide desktop grid; at a 540px
 * viewport it drops to its single-column layout, which already gives a
 * PDF-column measure. This sheet only trims the site chrome that would
 * otherwise sit inside the crop and pins the text column to the same 438px
 * measure Ontario and New York use, so all three folders crop to 802px wide.
 * Every word inside the band is DDS's own.
 */
const GA_CSS = `
  html { -webkit-font-smoothing: antialiased; }
  .content-page__main, main.content-page__main {
    box-sizing: border-box; max-width: 458px; margin: 0 auto; padding: 0 10px;
    font-size: 17px; line-height: 1.6; color: #1a1a1a; background: #fff;
  }
  .content-page__main p, .content-page__main li, .content-page__main td,
  .content-page__main th, .content-page__main dd, .content-page__main dt {
    font-size: 17px; line-height: 1.6;
  }
  .content-page__main h2 { font-size: 23px; }
  .content-page__main h3 { font-size: 20px; }
  .content-page__main h4, .content-page__main h5 { font-size: 18px; }
  /* Markers default to the list's padding, i.e. outside the LI's border box -
     and the crop snaps to that box, so a step number gets sliced off the left.
     Pulling them inside keeps it in the picture. */
  .content-page__main ol, .content-page__main ul { padding-left: 0; margin-left: 0; }
  .content-page__main li { margin: 0.35em 0; list-style-position: inside; }
  /* Figures are sign artwork sitting mid-paragraph; the crops are text bands,
     and a floated image only shoves the passage sideways. */
  .content-page__main img, .content-page__main figure, .content-page__main iframe {
    display: none !important;
  }
  .content-page__main table { border-collapse: collapse; width: 100%; }
  .content-page__main td, .content-page__main th {
    border: 1px solid #d4d4d4; padding: 6px 9px; text-align: left; vertical-align: top;
  }
`;

const JURISDICTIONS = {
  ontario: {
    module: "../src/lib/driving/ontario/excerpts.ts",
    exportName: "ontarioExcerpts",
    // A narrow viewport puts ontario.ca into its single-column layout, which
    // gives a text measure close to the PDF snippets' column instead of a wide
    // desktop slab. 1.75x device scale keeps it legible on retina, same idea as
    // ZOOM=2 in the PDF pipeline.
    viewport: { width: 540, height: 1400 },
    scale: 1.75,
    // Every Ontario excerpt already carries its own deep link, and ontario.ca
    // serves it to us directly.
    plan: async (items) => groupBy(items, (e) => e.url),
  },
  newyork: {
    module: "../src/lib/driving/newyork/excerpts.ts",
    exportName: "newyorkExcerpts",
    viewport: { width: 540, height: 1400 },
    scale: 1.75,
    css: NY_CSS,
    plan: planNewYork,
    // Download the HTML once, cache it on disk, and feed it to the browser with
    // setContent. archive.org throttles hard, and a run tuned over several
    // passes should not re-fetch a 320KB page each time.
    fetch: "html",
  },
  georgia: {
    module: "../src/lib/driving/georgia/excerpts.ts",
    exportName: "georgiaExcerpts",
    viewport: { width: 540, height: 1400 },
    scale: 1.75,
    css: GA_CSS,
    // DDS serves the manual as ~30 short section pages, one deep link per
    // excerpt, and it answers an ordinary browser request - so each page is
    // loaded once, live, and every excerpt citing it is cut from that load.
    plan: planGeorgia,
  },
};

/**
 * Twelve Georgia excerpts cite the manual PDF rather than a section page,
 * because DDS's HTML edition simply omits those passages - its Section 8 jumps
 * from Fog straight to Carbon Monoxide, skipping Hydroplaning and Skidding
 * entirely. There is no web page to screenshot for them, so they are dropped
 * here rather than sent to a load that could only fail.
 */
const GA_PDF_URL = "https://dds.georgia.gov/document/publication/ga-drivers-manual/download";

async function planGeorgia(items) {
  const web = items.filter((e) => e.url !== GA_PDF_URL);
  const skipped = items.length - web.length;
  if (skipped) {
    process.stdout.write(`georgia: skipping ${skipped} excerpt(s) sourced from the PDF, not a section page\n`);
  }
  return groupBy(web, (e) => e.url);
}

function groupBy(items, keyOf) {
  const by = new Map();
  for (const e of items) {
    const k = keyOf(e);
    if (!by.has(k)) by.set(k, []);
    by.get(k).push(e);
  }
  return [...by].map(([url, group]) => ({ url, label: url, items: group }));
}

/**
 * Newest archived capture of `original`, as a raw (`id_`) Wayback URL so we get
 * the DMV's original bytes with no archive toolbar and no rewritten links.
 */
async function waybackUrls(original) {
  const api =
    "http://web.archive.org/cdx/search/cdx?output=json&filter=statuscode:200&limit=-4&url=" +
    encodeURIComponent(original);
  // The CDX endpoint throttles aggressively and answers 503 under load; it
  // clears in a few seconds, so back off rather than failing the whole run.
  let last = "";
  for (let attempt = 0; attempt < 5; attempt++) {
    if (attempt) await new Promise((r) => setTimeout(r, 4000 * attempt));
    try {
      const res = await fetch(api);
      if (!res.ok) {
        last = `cdx ${res.status}`;
        continue;
      }
      const rows = JSON.parse(await res.text());
      if (rows.length < 2) throw new Error(`no archived capture for ${original}`);
      // Newest first. Not every capture actually replays - some 503 forever -
      // so hand back a few and let the loader take the first that serves.
      return rows
        .slice(1)
        .reverse()
        .map(([, ts]) => `https://web.archive.org/web/${ts}id_/${original}`);
    } catch (err) {
      last = err.message;
    }
  }
  throw new Error(`${last} (${original})`);
}

const CACHE_DIR = path.join(os.tmpdir(), "handbook-html-snippets-cache");

/** Download `url` once and keep the bytes on disk for later runs. */
async function fetchHtmlCached(url) {
  await mkdir(CACHE_DIR, { recursive: true });
  const file = path.join(CACHE_DIR, createHash("sha1").update(url).digest("hex") + ".html");
  try {
    const hit = await readFile(file, "utf-8");
    if (hit.length > 2000) return { html: hit, cached: true };
  } catch {
    /* not cached yet */
  }
  let last = "";
  for (let attempt = 0; attempt < 3; attempt++) {
    if (attempt) await new Promise((r) => setTimeout(r, 5000 * attempt));
    try {
      const res = await fetch(url, {
        headers: {
          "user-agent":
            "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
          accept: "text/html,application/xhtml+xml",
        },
      });
      const body = await res.text();
      if (!res.ok || body.length < 2000) {
        last = `http ${res.status} (${body.length} bytes)`;
        continue;
      }
      await writeFile(file, body, "utf-8");
      return { html: body, cached: false };
    } catch (err) {
      last = err.message;
    }
  }
  throw new Error(`fetch failed: ${last}`);
}

/**
 * New York's twelve manual chapters all live inside one DMV export page, so
 * they collapse to a single load; the two DMV policy pages keep their own.
 */
async function planNewYork(items) {
  const MANUAL_EXPORT = "https://dmv.ny.gov/book/export/html/1551";
  const isChapter = (e) => e.url.includes("/new-york-state-drivers-manual-practice-tests/");
  const groups = groupBy(items, (e) => (isChapter(e) ? MANUAL_EXPORT : e.url));
  for (const g of groups) {
    g.label = g.url;
    g.candidates = await waybackUrls(g.url);
    g.url = g.candidates[0];
  }
  return groups;
}

/* -------------------------------------------------------------- in-page --- */
/**
 * Runs inside the page. Finds `quote` in the rendered text, wraps it in
 * <mark data-hb>, and returns the document-space band to crop.
 *
 * Text nodes are walked once into a normalised string (curly punctuation
 * folded, whitespace collapsed) with a char -> (node, offset) map, so a quote
 * is still found when it spans <strong>, a link, or two block elements.
 */
function highlightInPage({ quote, padX, padAbove, padBelow, maxBand }) {
  const fold = (s) =>
    s
      .replace(/[‘’ʼ]/g, "'")
      .replace(/[“”]/g, '"')
      .replace(/[–—]/g, "-")
      .replace(/­/g, "")
      .replace(/ /g, " ");

  const BLOCK = "p,li,td,th,h1,h2,h3,h4,h5,h6,dd,dt,figcaption,blockquote,div";

  // Collapse anything that would hide or distort the band.
  document.querySelectorAll("details").forEach((d) => (d.open = true));
  document.querySelectorAll("*").forEach((el) => {
    const pos = getComputedStyle(el).position;
    if (pos === "fixed" || pos === "sticky") el.style.setProperty("display", "none", "important");
  });

  const root = document.querySelector("main") || document.body;
  const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
  const nodes = [];
  for (let n = walker.nextNode(); n; n = walker.nextNode()) {
    const tag = n.parentElement && n.parentElement.tagName;
    if (!tag || tag === "SCRIPT" || tag === "STYLE" || tag === "NOSCRIPT") continue;
    nodes.push(n);
  }

  let text = "";
  const map = []; // parallel to text: {node, offset} or null for synthetic gaps
  let prevBlock = null;
  for (const node of nodes) {
    const block = node.parentElement.closest(BLOCK);
    if (prevBlock && block !== prevBlock && text && !text.endsWith(" ")) {
      text += " ";
      map.push(null);
    }
    prevBlock = block;
    const raw = node.nodeValue;
    for (let i = 0; i < raw.length; i++) {
      const ch = fold(raw[i]);
      if (!ch) continue;
      if (/\s/.test(ch)) {
        if (text.endsWith(" ") || text === "") continue;
        text += " ";
        map.push({ node, offset: i });
      } else {
        text += ch;
        map.push({ node, offset: i });
      }
    }
  }

  const target = fold(quote).replace(/\s+/g, " ").trim();
  const hay = text.toLowerCase();
  const hits = [];
  let partial = false;

  const whole = hay.indexOf(target.toLowerCase());
  if (whole > -1) {
    hits.push([whole, whole + target.length]);
  } else {
    // The quote is verbatim, but the page may split it across two paragraphs or
    // a list, so it isn't one contiguous run of rendered text. Fall back to
    // matching sentence by sentence and highlight each piece where it lands.
    partial = true;
    const sentences = target
      .split(/(?<=[.:!?])\s+/)
      .filter((s) => s.split(" ").length >= 4);
    let cursor = 0;
    for (const s of sentences) {
      const i = hay.indexOf(s.toLowerCase(), cursor);
      if (i < 0) continue;
      hits.push([i, i + s.length]);
      cursor = i + s.length;
    }
    if (!hits.length) {
      // Last resort: the opening clause, which still anchors the passage.
      const words = target.split(" ");
      for (const n of [14, 8]) {
        if (words.length <= n) continue;
        const i = hay.indexOf(words.slice(0, n).join(" ").toLowerCase());
        if (i > -1) {
          hits.push([i, i + words.slice(0, n).join(" ").length]);
          break;
        }
      }
    }
  }
  if (!hits.length) return { ok: false, reason: "quote-not-found" };

  // Group the matched characters by their owning text node so each node is
  // split exactly once (splitting invalidates offsets within that node only).
  const byNode = new Map();
  for (const [from, to] of hits) {
    for (let i = from; i < to; i++) {
      const m = map[i];
      if (!m) continue;
      const cur = byNode.get(m.node);
      if (!cur) byNode.set(m.node, { from: m.offset, to: m.offset });
      else {
        cur.from = Math.min(cur.from, m.offset);
        cur.to = Math.max(cur.to, m.offset);
      }
    }
  }

  const marks = [];
  for (const [node, span] of byNode) {
    const len = node.nodeValue.length;
    const from = Math.max(0, span.from);
    const to = Math.min(len, span.to + 1);
    if (to <= from) continue;
    let piece = node;
    if (from > 0) piece = piece.splitText(from);
    if (to - from < piece.nodeValue.length) piece.splitText(to - from);
    const mark = document.createElement("mark");
    mark.setAttribute("data-hb", "1");
    mark.style.background = "#ffeb3b";
    mark.style.color = "inherit";
    mark.style.padding = "1px 0";
    mark.style.borderRadius = "2px";
    mark.style.boxDecorationBreak = "clone";
    piece.parentNode.insertBefore(mark, piece);
    mark.appendChild(piece);
    marks.push(mark);
  }
  if (!marks.length) return { ok: false, reason: "no-marks" };

  // Union of every line box the highlight occupies, in document coords.
  const sx = window.scrollX;
  const sy = window.scrollY;
  let x0 = Infinity;
  let y0 = Infinity;
  let x1 = -Infinity;
  let y1 = -Infinity;
  for (const mark of marks) {
    for (const r of mark.getClientRects()) {
      if (r.width === 0 && r.height === 0) continue;
      x0 = Math.min(x0, r.left + sx);
      y0 = Math.min(y0, r.top + sy);
      x1 = Math.max(x1, r.right + sx);
      y1 = Math.max(y1, r.bottom + sy);
    }
  }
  if (!isFinite(x0)) return { ok: false, reason: "zero-size" };

  // Snap the horizontal crop to the text column, not to the glyphs, so wrapped
  // lines aren't shaved on the left. Same idea as the PDF pipeline.
  let colL = x0;
  let colR = x1;
  let blockTop = y0;
  let blockBottom = y1;
  for (const mark of marks) {
    const block = mark.parentElement && mark.parentElement.closest(BLOCK);
    if (!block) continue;
    const b = block.getBoundingClientRect();
    if (b.width === 0) continue;
    colL = Math.min(colL, b.left + sx);
    colR = Math.max(colR, b.right + sx);
    blockTop = Math.min(blockTop, b.top + sy);
    blockBottom = Math.max(blockBottom, b.bottom + sy);
  }

  // Snap the band to whole LINE boxes instead of padding by a fixed number of
  // pixels. A raw pad reaches up into the heading above and slices its
  // descenders, or leaves the top half of the previous line stranded - both
  // read as a broken crop. Line snapping gives at most one full line of
  // context above and never cuts a line in half.
  const lineRects = (block) => {
    const r = document.createRange();
    r.selectNodeContents(block);
    // Merge OVERLAPPING rects into one row. Bucketing by rounded top splits a
    // single visual line in two whenever the <mark> fragment sits a pixel off
    // the plain-text fragment beside it, and the phantom row then puts the cut
    // through the middle of the last line.
    const raw = [];
    for (const rc of r.getClientRects()) {
      if (rc.height === 0 || rc.width === 0) continue;
      raw.push({ top: rc.top + sy, bottom: rc.bottom + sy });
    }
    raw.sort((a, b) => a.top - b.top);
    const rows = [];
    for (const rc of raw) {
      const last = rows[rows.length - 1];
      if (last && rc.top < last.bottom - 2) {
        last.top = Math.min(last.top, rc.top);
        last.bottom = Math.max(last.bottom, rc.bottom);
      } else rows.push({ ...rc });
    }
    return rows;
  };
  const blockOf = (mark) => mark.parentElement && mark.parentElement.closest(BLOCK);
  const nearest = (lines, y, edge) => {
    let best = -1;
    let dist = Infinity;
    lines.forEach((l, i) => {
      const d = Math.abs(l[edge] - y);
      if (d < dist) {
        dist = d;
        best = i;
      }
    });
    return best;
  };

  let top = Math.max(y0 - padAbove, blockTop - 6);
  let bottom = Math.min(y1 + padBelow, blockBottom + 6);

  // Cut through the middle of the leading between two lines. Chromium's range
  // rects hug the glyphs, not the line box, so trimming a few px off a line's
  // own top still leaves a sliver of the descenders above it.
  const firstBlock = blockOf(marks[0]);
  if (firstBlock) {
    const lines = lineRects(firstBlock);
    const i = nearest(lines, y0, "top");
    if (i > -1) {
      const j = Math.max(0, i - 1); // one line of context above, if there is one
      top = j > 0 ? (lines[j - 1].bottom + lines[j].top) / 2 : lines[j].top - 6;
    }
  }
  const lastBlock = blockOf(marks[marks.length - 1]);
  if (lastBlock) {
    const lines = lineRects(lastBlock);
    const k = nearest(lines, y1, "bottom");
    if (k > -1) {
      bottom =
        k < lines.length - 1
          ? (lines[k].bottom + lines[k + 1].top) / 2
          : lines[k].bottom + 6;
    }
  }
  top = Math.max(0, top);
  if (bottom - top < 40) bottom = top + 40;

  return {
    ok: true,
    partial,
    box: {
      x: Math.max(0, colL - padX),
      y: top,
      width: Math.max(80, colR - colL + padX * 2),
      height: Math.max(40, Math.min(bottom - top, maxBand)),
    },
  };
}

/**
 * Element screenshots handle scrolling for us, so drop a transparent overlay of
 * exactly the band's size and shoot that. Cheaper than reasoning about whether
 * a clip rect is viewport- or document-relative.
 */
function placeOverlay(box) {
  const old = document.getElementById("__hb_overlay");
  if (old) old.remove();
  const d = document.createElement("div");
  d.id = "__hb_overlay";
  d.style.cssText = `position:absolute;left:${box.x}px;top:${box.y}px;width:${box.width}px;height:${box.height}px;pointer-events:none;background:transparent;z-index:2147483647;`;
  document.body.appendChild(d);
}

/**
 * Chromium writes 24-bit PNGs. These crops are black text, one yellow and a
 * white ground, so a 128-colour palette is visually identical and roughly
 * halves the bytes - which is what keeps these folders in the same weight
 * class as the PDF-derived ones. Dimensions are untouched, so the manifest
 * stays correct. Skipped with a warning if Pillow isn't around.
 */
async function shrinkPngs(outDir) {
  const py = `
import sys, os, glob
from PIL import Image
before = after = 0
for p in glob.glob(os.path.join(sys.argv[1], "*.png")):
    before += os.path.getsize(p)
    im = Image.open(p).convert("RGB")
    im.quantize(colors=128, method=Image.MEDIANCUT, dither=Image.NONE).save(
        p, "PNG", optimize=True
    )
    after += os.path.getsize(p)
print("  %.1f MB -> %.1f MB" % (before / 1e6, after / 1e6))
`;
  const { spawn } = await import("node:child_process");
  await new Promise((resolve) => {
    const p = spawn("python", ["-c", py, outDir], { stdio: ["ignore", "inherit", "pipe"] });
    let err = "";
    p.stderr.on("data", (d) => (err += d));
    p.on("error", () => {
      process.stdout.write("  (skipped: python not found)\n");
      resolve();
    });
    p.on("close", (code) => {
      if (code) process.stdout.write(`  (skipped: ${err.trim().split("\n").pop()})\n`);
      resolve();
    });
  });
}

/* ----------------------------------------------------------------- main --- */
export async function buildSnippets(slug, { only = null } = {}) {
  const cfg = JURISDICTIONS[slug];
  if (!cfg) throw new Error(`unknown jurisdiction "${slug}"`);

  const outDir = path.join(ROOT, "public", "handbook", slug);
  const manifestPath = path.join(ROOT, "src", "lib", "driving", slug, "snippets.json");

  const mod = await import(cfg.module);
  const all = mod[cfg.exportName];
  const items = all.filter((e) => !only || only.has(e.key));
  const groups = await cfg.plan(items);

  await mkdir(outDir, { recursive: true });
  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    viewport: cfg.viewport,
    deviceScaleFactor: cfg.scale,
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
  });
  const page = await ctx.newPage();

  const manifest = {};
  const failures = [];
  const partials = [];
  let urlNo = 0;

  for (const group of groups) {
    urlNo += 1;
    process.stdout.write(
      `\n[${urlNo}/${groups.length}] ${group.label} (${group.items.length})\n`
    );
    try {
      if (cfg.fetch === "html") {
        let got = null;
        let lastErr = "";
        for (const candidate of group.candidates || [group.url]) {
          try {
            got = { ...(await fetchHtmlCached(candidate)), url: candidate };
            break;
          } catch (err) {
            lastErr = err.message;
            process.stdout.write(`        ${candidate} -> ${err.message}\n`);
          }
        }
        if (!got) throw new Error(lastErr);
        group.url = got.url;
        if (!got.cached && urlNo > 1) await page.waitForTimeout(PAGE_DELAY_MS);
        process.stdout.write(
          `        ${got.url}\n        ${got.html.length} bytes${got.cached ? " (cached)" : ""}\n`
        );
        await page.setContent(got.html, { waitUntil: "domcontentloaded", timeout: 120000 });
      } else {
        if (urlNo > 1) await page.waitForTimeout(PAGE_DELAY_MS);
        await page.goto(group.url, { waitUntil: "domcontentloaded", timeout: 120000 });
      }
      await page.waitForTimeout(1200);
      if (cfg.css) await page.addStyleTag({ content: cfg.css });
      await page.waitForTimeout(400);
    } catch (err) {
      for (const e of group.items) failures.push({ key: e.key, reason: `load: ${err.message}` });
      process.stdout.write(`  LOAD FAILED: ${err.message}\n`);
      continue;
    }

    // Snapshot the clean DOM once, then restore it before each excerpt so one
    // excerpt's <mark> never bleeds into the next (the PDF script reopens the
    // document per excerpt for the same reason).
    const clean = await page.evaluate(() => document.body.innerHTML);

    for (const e of group.items) {
      try {
        await page.evaluate((html) => {
          document.body.innerHTML = html;
        }, clean);
        const res = await page.evaluate(highlightInPage, {
          quote: e.quote,
          padX: PAD_X,
          padAbove: PAD_ABOVE,
          padBelow: PAD_BELOW,
          maxBand: MAX_BAND_CSS,
        });
        if (!res.ok) {
          failures.push({ key: e.key, reason: res.reason });
          process.stdout.write(`  MISS ${e.key} (${res.reason})\n`);
          continue;
        }
        await page.evaluate(placeOverlay, res.box);
        const overlay = await page.$("#__hb_overlay");
        const file = path.join(outDir, `${e.key}.png`);
        const buf = await overlay.screenshot();
        await writeFile(file, buf);
        manifest[e.key] = {
          src: `/handbook/${slug}/${e.key}.png`,
          page: 0,
          // Read straight off the PNG IHDR - the rendered size can differ from
          // the requested box by a rounding pixel.
          width: buf.readUInt32BE(16),
          height: buf.readUInt32BE(20),
        };
        if (res.partial) partials.push(e.key);
        process.stdout.write(
          `  ok   ${e.key} ${manifest[e.key].width}x${manifest[e.key].height}${res.partial ? " (opening clause only)" : ""}\n`
        );
      } catch (err) {
        failures.push({ key: e.key, reason: err.message });
        process.stdout.write(`  ERR  ${e.key} ${err.message}\n`);
      }
    }
  }

  await browser.close();

  // A --only run patches the manifest instead of replacing it, so re-rendering
  // one snippet can't quietly delete the rest.
  let merged = manifest;
  if (only) {
    try {
      merged = { ...JSON.parse(await readFile(manifestPath, "utf-8")), ...manifest };
    } catch {
      /* no manifest yet */
    }
  }
  const sorted = {};
  for (const k of Object.keys(merged).sort()) sorted[k] = merged[k];
  await writeFile(manifestPath, JSON.stringify(sorted, null, 2) + "\n", "utf-8");

  process.stdout.write("\nshrinking PNGs\n");
  await shrinkPngs(outDir);

  process.stdout.write(
    `\n${slug}: ${Object.keys(manifest).length}/${items.length} snippets rendered, ${failures.length} not located, ${partials.length} highlighted on the opening clause only\n`
  );
  for (const f of failures) process.stdout.write(`  - ${f.key}: ${f.reason}\n`);
  for (const p of partials) process.stdout.write(`  ~ ${p}\n`);

  return { manifest, failures, partials };
}

/* ------------------------------------------------------------------ cli --- */
const invokedDirectly =
  process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url);

if (invokedDirectly) {
  const slug = process.argv[2];
  if (!slug || !JURISDICTIONS[slug]) {
    console.error(
      `usage: npx tsx scripts/build-html-snippets.mjs <${Object.keys(JURISDICTIONS).join("|")}> [--only key1,key2]`
    );
    process.exit(2);
  }
  const onlyArg = process.argv.indexOf("--only");
  const only = onlyArg > -1 ? new Set(process.argv[onlyArg + 1].split(",")) : null;
  buildSnippets(slug, { only }).catch((e) => {
    console.error(e);
    process.exit(1);
  });
}
