/**
 * generate-og-cards.mjs
 *
 * Per-page OG social cards (1200x630 PNG) for every quiz page, composited
 * with sharp from an in-script SVG template so the text is always crisp and
 * always correct (see docs/IMAGE_PROMPTS.md section D: programmatic assets,
 * never AI-generated text).
 *
 * Outputs (public/og/):
 *  - test-<slug>.png    one per typology test, headline = SEO title map
 *  - trivia-<slug>.png  one per hand-authored trivia quiz
 *  - trivia-letters.png shared card for all the A-to-Z letter pages
 *  - trivia-hub.png     the /trivia hub
 *  - friend-quiz.png    the friend-quiz builder
 *  - daily.png          the daily page
 *
 * Layout: category-colored left band + corner geometry, wrapped headline,
 * brand mark (inlined from public/assets/typologyquiz-mark.svg) with a
 * typologyquiz.com wordmark footer. Where balanced result art exists the
 * card composites it as a dimmed right-side visual under a gradient so the
 * text always wins.
 *
 * Budget: warn target < 60KB per card, HARD FAIL (exit 1) over 120KB or on
 * any missing title. A content-hash manifest (public/og/.manifest.json)
 * skips regeneration when nothing changed, so repeat builds are instant.
 *
 * Run: npx tsx scripts/generate-og-cards.mjs   (also runs in prebuild)
 */

import sharp from "sharp";
import { createHash } from "node:crypto";
import { mkdir, readFile, readdir, stat, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

import { TESTS } from "../src/lib/tests/registry.ts";
import { SEO_TITLES } from "../src/lib/seo-titles.ts";
import { CATEGORY_META } from "../src/lib/types.ts";
import { TRIVIA_QUIZZES } from "../src/lib/trivia/registry.ts";
import { getShowcaseArtSrc } from "../src/lib/result-art.ts";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const OUT = path.join(root, "public", "og");
const MANIFEST_PATH = path.join(OUT, ".manifest.json");
const RESULTS_DIR = path.join(root, "public", "results");
const MARK_PATH = path.join(root, "public", "assets", "typologyquiz-mark.svg");

// Bump when the template itself changes so every card regenerates.
const TEMPLATE_VERSION = "og-v3";

const W = 1200;
const H = 630;
const BG = "#14141f";
const TARGET_BYTES = 60 * 1024;
const HARD_LIMIT_BYTES = 120 * 1024;

// librsvg resolves the first installed family in the stack; on Windows that
// is Arial, on most Linux CI images DejaVu Sans. Both are metrically close
// enough for a 24-chars/line wrap.
const FONT_STACK = "DejaVu Sans, Arial, sans-serif";

// Balanced-art composites come straight from the results-page art tables, so
// adding art to a quiz lights up its social card with no edit here. Returns a
// public path like "/results/icons/x.webp"; we want it relative to RESULTS_DIR.
function testArtRel(slug) {
  const src = getShowcaseArtSrc(slug);
  return src ? src.replace(/^\/results\//, "") : null;
}

// Trivia accent colors by dataset, drawn from the brand-mark palette.
const TRIVIA_COLORS = {
  "us-states": "#0795EA",
  canada: "#F9684D",
  countries: "#07AD9C",
  planets: "#F47A9E",
  elements: "#b8873b",
};

function esc(s) {
  return s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;");
}

function sha1(data) {
  return createHash("sha1").update(data).digest("hex");
}

/** Greedy word wrap at ~maxChars per line. Overlong single words get their own line. */
function wrapWords(text, maxChars) {
  const lines = [];
  let line = "";
  for (const word of text.split(/\s+/)) {
    if (line === "") line = word;
    else if ((line + " " + word).length <= maxChars) line += " " + word;
    else {
      lines.push(line);
      line = word;
    }
  }
  if (line) lines.push(line);
  return lines;
}

/** Pick font size + wrapped lines: step the size down until it fits 3 lines. */
function layoutTitle(title) {
  const steps = [
    [64, 22],
    [56, 26],
    [48, 30],
    [42, 34],
  ];
  for (const [size, chars] of steps) {
    const lines = wrapWords(title, chars);
    if (lines.length <= 3 && lines.every((l) => l.length <= chars + 3)) {
      return { size, lines };
    }
  }
  // Last resort: hard-clamp to 3 lines at the smallest size.
  return { size: 42, lines: wrapWords(title, 34).slice(0, 3) };
}

let markInner = ""; // inner SVG of the brand mark, set in main()

/**
 * The card template. `hasArt` widens the right-side fade window that dims
 * the composited art; without art the right side gets subtle brand-geometry
 * corner squares instead.
 */
function cardSvg({ title, eyebrow, color, hasArt }) {
  const { size, lines } = layoutTitle(title);
  const lineHeight = Math.round(size * 1.18);
  const blockH = lines.length * lineHeight;
  const textLeft = 76;
  const textRight = hasArt ? 660 : 1080;
  const y0 = Math.round((196 + 496) / 2 - blockH / 2 + size * 0.82);

  const titleLines = lines
    .map(
      (l, i) =>
        `<text x="${textLeft}" y="${y0 + i * lineHeight}" font-family="${FONT_STACK}" font-size="${size}" font-weight="bold" fill="#f4f4f8">${esc(l)}</text>`
    )
    .join("\n  ");

  // Right-side treatment: gradient dim over art, or corner geometry.
  const rightSide = hasArt
    ? `<rect x="600" y="0" width="600" height="630" fill="url(#fade)"/>`
    : `<g opacity="0.16">
        <rect x="1010" y="-60" width="150" height="150" rx="30" fill="${color}"/>
        <rect x="1090" y="110" width="190" height="190" rx="38" fill="${color}"/>
        <rect x="960" y="480" width="130" height="130" rx="26" fill="${color}"/>
      </g>`;

  return `<svg width="${W}" height="${H}" viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <linearGradient id="fade" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0" stop-color="${BG}" stop-opacity="1"/>
      <stop offset="0.35" stop-color="${BG}" stop-opacity="0.82"/>
      <stop offset="1" stop-color="${BG}" stop-opacity="0.3"/>
    </linearGradient>
  </defs>
  ${hasArt ? `<rect x="0" y="0" width="640" height="630" fill="${BG}"/>` : `<rect x="0" y="0" width="${W}" height="${H}" fill="${BG}"/>`}
  ${rightSide}
  <rect x="0" y="0" width="18" height="630" fill="${color}"/>
  <rect x="18" y="0" width="4" height="630" fill="${color}" opacity="0.35"/>
  <text x="${textLeft}" y="150" font-family="${FONT_STACK}" font-size="26" font-weight="bold" letter-spacing="6" fill="${color}">${esc(eyebrow.toUpperCase())}</text>
  ${titleLines}
  <g transform="translate(${textLeft}, 524) scale(${48 / 94})">
    ${markInner}
  </g>
  <text x="${textLeft + 66}" y="558" font-family="${FONT_STACK}" font-size="30" font-weight="bold" fill="#c9c9d4">typologyquiz.com</text>
  <rect x="0" y="0" width="${W}" height="${H}" fill="none"/>
  <!-- text-right guide: ${textRight} -->
</svg>`;
}

async function fileHashOrNull(p) {
  try {
    return sha1(await readFile(p));
  } catch {
    return null;
  }
}

/** Encode to PNG under the size budget: palette quantization, stepping down. */
async function encodePng(pipeline) {
  const attempts = [
    { palette: true, quality: 80, compressionLevel: 9 },
    { palette: true, quality: 60, compressionLevel: 9 },
    // Dithering is what balloons photographic art in palette PNGs; the art is
    // blurred anyway, so banding from low dither is invisible.
    { palette: true, quality: 60, dither: 0.3, compressionLevel: 9 },
    { palette: true, quality: 50, colors: 128, dither: 0.1, compressionLevel: 9 },
    { palette: true, quality: 40, colors: 64, dither: 0, compressionLevel: 9 },
  ];
  let buf = null;
  for (const opts of attempts) {
    buf = await pipeline.png(opts).toBuffer();
    if (buf.length <= TARGET_BYTES) return buf;
  }
  return buf; // over target; caller enforces the hard limit
}

async function main() {
  await mkdir(OUT, { recursive: true });

  const markSvg = await readFile(MARK_PATH, "utf8");
  markInner = markSvg.replace(/^[\s\S]*?<svg[^>]*>/, "").replace(/<\/svg>\s*$/, "");
  const markHash = sha1(markSvg);

  // ---- font sanity: does the stack render as a real face (not tofu)? -----
  const probe = (family) =>
    sharp(
      Buffer.from(
        `<svg width="300" height="60" xmlns="http://www.w3.org/2000/svg"><text x="10" y="40" font-family="${family}" font-size="30">Quiz OG 123</text></svg>`
      )
    )
      .png()
      .toBuffer();
  const [stackBuf, arialBuf, dejavuBuf] = await Promise.all([
    probe(FONT_STACK),
    probe("Arial"),
    probe("DejaVu Sans"),
  ]);
  let renderedFont = "generic sans-serif fallback";
  if (stackBuf.equals(dejavuBuf) && !dejavuBuf.equals(arialBuf)) renderedFont = "DejaVu Sans";
  else if (stackBuf.equals(arialBuf)) renderedFont = "Arial (DejaVu Sans not installed)";
  console.log(`Font stack "${FONT_STACK}" renders as: ${renderedFont}`);

  // ---- build the card plan ------------------------------------------------
  /** @type {{file:string, title:string, eyebrow:string, color:string, artRel:string|null}[]} */
  const plan = [];
  const problems = [];

  for (const test of TESTS) {
    const title = SEO_TITLES[test.slug];
    if (!title) {
      problems.push(`MISSING TITLE: test "${test.slug}" has no entry in src/lib/seo-titles.ts`);
      continue;
    }
    const meta = CATEGORY_META[test.category];
    const artRel = testArtRel(test.slug);
    plan.push({
      file: `test-${test.slug}.png`,
      title,
      eyebrow: `${meta.label} quiz`,
      color: meta.hex,
      artRel,
    });
  }

  for (const quiz of TRIVIA_QUIZZES) {
    if (quiz.filterLetter !== undefined) continue; // letter pages share one card
    if (!quiz.title) {
      problems.push(`MISSING TITLE: trivia "${quiz.slug}" has an empty title`);
      continue;
    }
    plan.push({
      file: `trivia-${quiz.slug}.png`,
      title: quiz.title,
      eyebrow: "Trivia quiz",
      color: TRIVIA_COLORS[quiz.dataset] ?? "#0795EA",
      artRel: null,
    });
  }

  plan.push(
    {
      file: "trivia-letters.png",
      title: "States and Countries, One Letter at a Time",
      eyebrow: "A to Z trivia",
      color: "#0795EA",
      artRel: null,
    },
    {
      file: "trivia-hub.png",
      title: "Trivia Quizzes: Geography and Science",
      eyebrow: "Trivia",
      color: "#07AD9C",
      artRel: null,
    },
    {
      file: "friend-quiz.png",
      title: "How Well Do Your Friends Actually Know You?",
      eyebrow: "Friend quiz",
      color: "#F9684D",
      artRel: null,
    },
    {
      file: "daily.png",
      title: "The Daily Quiz: One Question, Every Day",
      eyebrow: "Daily streak",
      color: "#F47A9E",
      artRel: null,
    }
  );

  if (problems.length) {
    for (const p of problems) console.error(p);
    process.exit(1);
  }

  // ---- manifest (skip unchanged cards) ------------------------------------
  let manifest = {};
  try {
    manifest = JSON.parse(await readFile(MANIFEST_PATH, "utf8"));
  } catch {
    manifest = {};
  }
  const nextManifest = {};
  const rows = [];
  let generated = 0;
  let skipped = 0;
  let failed = false;

  for (const card of plan) {
    const artPath = card.artRel ? path.join(RESULTS_DIR, card.artRel) : null;
    const artHash = artPath ? await fileHashOrNull(artPath) : null;
    if (card.artRel && artHash === null) {
      console.warn(`note: art ${card.artRel} not found; ${card.file} renders without art`);
    }
    const hasArt = artHash !== null;
    const hash = sha1(
      JSON.stringify([TEMPLATE_VERSION, markHash, card.title, card.eyebrow, card.color, artHash])
    );
    const outPath = path.join(OUT, card.file);

    let bytes;
    const prev = manifest[card.file];
    const exists = await stat(outPath).then((s) => s.size, () => null);
    if (prev && prev.hash === hash && exists !== null && exists === prev.bytes) {
      bytes = prev.bytes;
      skipped++;
    } else {
      const svg = Buffer.from(
        cardSvg({ title: card.title, eyebrow: card.eyebrow, color: card.color, hasArt })
      );
      let pipeline;
      if (hasArt) {
        // Soft visual by design: a slight blur + dim keeps the text winning
        // and lets the palette PNG land under the size target.
        const art = await sharp(artPath)
          .resize(560, 630, { fit: "cover", position: "centre" })
          .modulate({ brightness: 0.82 })
          .blur(2)
          .toBuffer();
        pipeline = sharp({
          create: { width: W, height: H, channels: 4, background: BG },
        }).composite([
          { input: art, left: W - 560, top: 0 },
          { input: svg, left: 0, top: 0 },
        ]);
      } else {
        pipeline = sharp(svg).flatten({ background: BG });
      }
      const buf = await encodePng(pipeline);
      await writeFile(outPath, buf);
      bytes = buf.length;
      generated++;
    }

    if (bytes > HARD_LIMIT_BYTES) {
      console.error(`FAIL: ${card.file} is ${(bytes / 1024).toFixed(1)}KB (> 120KB hard limit)`);
      failed = true;
    }
    nextManifest[card.file] = { hash, bytes };
    rows.push({ file: card.file, kb: bytes / 1024, art: hasArt });
  }

  // Prune cards no longer in the plan so removed quizzes don't ship stale art.
  const planned = new Set(plan.map((c) => c.file));
  for (const f of await readdir(OUT)) {
    if (f.endsWith(".png") && !planned.has(f)) {
      await unlink(path.join(OUT, f));
      console.log(`pruned stale card: ${f}`);
    }
  }

  await writeFile(MANIFEST_PATH, JSON.stringify(nextManifest, null, 2) + "\n");

  // ---- size table ----------------------------------------------------------
  rows.sort((a, b) => a.file.localeCompare(b.file));
  console.log("\nCard".padEnd(46) + "KB".padStart(8) + "  art");
  console.log("-".repeat(62));
  let total = 0;
  for (const r of rows) {
    total += r.kb;
    const flag = r.kb > TARGET_BYTES / 1024 ? " *over 60KB target*" : "";
    console.log(r.file.padEnd(45) + r.kb.toFixed(1).padStart(8) + (r.art ? "  yes" : "  -") + flag);
  }
  console.log("-".repeat(62));
  console.log(
    `${rows.length} cards (${generated} generated, ${skipped} unchanged), total ${(total / 1024).toFixed(2)} MB`
  );

  if (failed) process.exit(1);
}

await main();
