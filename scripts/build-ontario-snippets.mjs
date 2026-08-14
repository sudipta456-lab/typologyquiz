/**
 * Render handbook snippet images for the Ontario driving bank.
 *
 * Ontario is the odd one out: the Official MTO Driver's Handbook is published
 * free as HTML on ontario.ca (the printed edition is sold), so there is no PDF
 * to crop the way scripts/build-excerpt-snippets.py does for the other three
 * jurisdictions. Instead we load the excerpt's own deep link in a real browser,
 * locate the verbatim quote in the rendered text, wrap it in a highlight, and
 * screenshot a tight band around it.
 *
 * Same output contract as the PDF pipeline:
 *   public/handbook/ontario/<key>.png
 *   src/lib/driving/ontario/snippets.json  ->  key: {src, page, width, height}
 * `page` is always 0 - ontario.ca has no page numbers, and the UI suppresses
 * the "(p. N)" suffix when page is 0.
 *
 * Each distinct URL is fetched ONCE and every snippet that cites it is rendered
 * from that single load, with a delay between page loads.
 *
 * Usage:
 *   npx tsx scripts/build-ontario-snippets.mjs [--only key1,key2]
 */
import { chromium } from "playwright";
import { mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { ontarioExcerpts } from "../src/lib/driving/ontario/excerpts.ts";

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT_DIR = path.join(ROOT, "public", "handbook", "ontario");
const MANIFEST = path.join(ROOT, "src", "lib", "driving", "ontario", "snippets.json");

// A narrow viewport puts ontario.ca into its single-column layout, which gives
// a text measure close to the PDF snippets' column instead of a wide desktop
// slab. 2x device scale keeps it legible on retina, same as ZOOM=2 in the PDF
// pipeline.
const VIEWPORT = { width: 540, height: 1400 };
const SCALE = 1.75;
const PAD_X = 10;
const PAD_ABOVE = 16;
const PAD_BELOW = 12;
const MAX_BAND_CSS = 400; // don't let a runaway match produce a page-tall crop
const PAGE_DELAY_MS = 2500;

const onlyArg = process.argv.indexOf("--only");
const only =
  onlyArg > -1 ? new Set(process.argv[onlyArg + 1].split(",")) : null;

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
  const words = target.split(" ");
  const attempts = [target];
  if (words.length > 14) attempts.push(words.slice(0, 14).join(" "));
  if (words.length > 8) attempts.push(words.slice(0, 8).join(" "));

  let start = -1;
  let used = null;
  const hay = text.toLowerCase();
  for (const a of attempts) {
    const idx = hay.indexOf(a.toLowerCase());
    if (idx > -1) {
      start = idx;
      used = a;
      break;
    }
  }
  if (start < 0) return { ok: false, reason: "quote-not-found" };

  const end = start + used.length; // exclusive
  const partial = used !== target;

  // Group the matched characters by their owning text node so each node is
  // split exactly once (splitting invalidates offsets within that node only).
  const byNode = new Map();
  for (let i = start; i < end; i++) {
    const m = map[i];
    if (!m) continue;
    const cur = byNode.get(m.node);
    if (!cur) byNode.set(m.node, { from: m.offset, to: m.offset });
    else {
      cur.from = Math.min(cur.from, m.offset);
      cur.to = Math.max(cur.to, m.offset);
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
    matched: used,
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

/* ----------------------------------------------------------------- main --- */
async function main() {
  const items = ontarioExcerpts.filter((e) => !only || only.has(e.key));
  const byUrl = new Map();
  for (const e of items) {
    if (!byUrl.has(e.url)) byUrl.set(e.url, []);
    byUrl.get(e.url).push(e);
  }

  await mkdir(OUT_DIR, { recursive: true });
  const browser = await chromium.launch();
  const ctx = await browser.newContext({
    viewport: VIEWPORT,
    deviceScaleFactor: SCALE,
    userAgent:
      "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36",
  });
  const page = await ctx.newPage();

  const manifest = {};
  const failures = [];
  let urlNo = 0;

  for (const [url, group] of byUrl) {
    urlNo += 1;
    if (urlNo > 1) await page.waitForTimeout(PAGE_DELAY_MS);
    process.stdout.write(`\n[${urlNo}/${byUrl.size}] ${url}  (${group.length})\n`);
    try {
      await page.goto(url, { waitUntil: "domcontentloaded", timeout: 60000 });
      await page.waitForTimeout(1200);
    } catch (err) {
      for (const e of group) failures.push({ key: e.key, reason: `load: ${err.message}` });
      continue;
    }

    // Snapshot the clean DOM once, then restore it before each excerpt so one
    // excerpt's <mark> never bleeds into the next (the PDF script reopens the
    // document per excerpt for the same reason).
    const clean = await page.evaluate(() => document.body.innerHTML);

    for (const e of group) {
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
        const file = path.join(OUT_DIR, `${e.key}.png`);
        const buf = await overlay.screenshot();
        await writeFile(file, buf);
        manifest[e.key] = {
          src: `/handbook/ontario/${e.key}.png`,
          page: 0,
          // Read straight off the PNG IHDR - the rendered size can differ from
          // the requested box by a rounding pixel.
          width: buf.readUInt32BE(16),
          height: buf.readUInt32BE(20),
        };
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

  const sorted = {};
  for (const k of Object.keys(manifest).sort()) sorted[k] = manifest[k];
  await writeFile(MANIFEST, JSON.stringify(sorted, null, 2) + "\n", "utf-8");

  process.stdout.write(
    `\nontario: ${Object.keys(manifest).length} snippets rendered, ${failures.length} not located\n`
  );
  for (const f of failures) process.stdout.write(`  - ${f.key}: ${f.reason}\n`);
}

main().catch((e) => {
  console.error(e);
  process.exit(1);
});
