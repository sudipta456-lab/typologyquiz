/**
 * process-new-art.mjs
 *
 * Second-batch art pipeline: turns the 80 raw AI PNGs in <repo>/images/{icons,bg}
 * (gitignored) into shippable webp under public/results/{icons,bg}.
 *
 * Sibling of scripts/process-result-art.mjs, which owns the ORIGINAL 25 assets
 * and their hand-tuned per-file crops. This script owns everything named in
 * docs/IMAGE_PROMPTS.md sections A-C: it reads whatever is in images/icons and
 * images/bg and writes the same basename with a .webp extension. Re-runnable and
 * manifest-free; the source filenames are already the final asset names.
 *
 * Differences from the first batch:
 *  - NO blind 7% top crop. The generator was re-prompted for no badges and the
 *    sources are clean, so nothing is removed on the assumption of a watermark.
 *  - Instead: ADAPTIVE MAT DETECTION, because the border treatment is wildly
 *    inconsistent across this batch:
 *      * icons/mental-age-15.png  full-bleed art, nothing to trim
 *      * icons/naija-church.png   modest flat cream border, ~4% per side
 *      * icons/saju-water.png     heavy textured hanji-paper mat with deckled
 *                                 edges; the real artwork is the inner ~68%
 *    sharp's .trim() only handles a uniform flat border, so it cannot see the
 *    saju mat (that paper is textured, std ~17 not ~0). See detectContentBox().
 *  - Backgrounds are never upscaled: 1280x720 sources stay 1280x720.
 *
 * Sizing:
 *  - icons/*  trim -> centre square -> 800x800  webp q80, target < 60KB
 *  - bg/*     trim -> centre 16:9   -> <= source width, webp q75, target < 120KB
 *
 * Run: node scripts/process-new-art.mjs
 */

import sharp from "sharp";
import { readdir, mkdir, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(root, "images");
const OUT = path.join(root, "public", "results");

const ICON_EDGE = 800;
const ICON_QUALITY = 80;
const ICON_MAX_BYTES = 60 * 1024;

const BG_QUALITY = 75;
const BG_MAX_BYTES = 120 * 1024;
const BG_ASPECT = 16 / 9;

const MIN_QUALITY = 40;

// --- mat detection tuning -------------------------------------------------
const PROFILE_N = 128; // analysis is done on a 128x128 greyscale copy
const MAX_TRIM_RATIO = 0.34; // never remove more than 34% from any one side
const FLAT_THRESHOLD_RATIO = 0.5; // "flat" = below half the interior's variance
const MIN_STD_RATIO = 2.0; // variance must at least double at the boundary
const MIN_MEAN_STEP = 18; // ...and brightness must jump (0-255 scale)
const MIN_TRIM_PX = 2; // ignore sub-pixel noise on the 128px profile

/**
 * Hand-measured exceptions. The detector finds mats that are QUIETER than the
 * artwork; it is structurally blind to a mat that is LOUDER. Keep this map
 * tiny - anything that lands here is really a note that the source should be
 * regenerated.
 *
 * saju-metal: the hanji panel sits inside a dancheong striped frame - saturated
 * red/blue/green bands, so the border's variance is HIGHER than the calm bell
 * scene it surrounds and no low-variance rule can see it. Frame measured at
 * 9.4% per side (bright-panel fraction crosses 0.6 at px 96 and back at 944 on
 * both axes); the crop below sits just inside that and clears the residual red
 * rule along the bottom edge.
 */
const OVERRIDES = {
  "icons/saju-metal.png": { left: 110, top: 110, width: 792, height: 792 },
};

function quantile(values, p) {
  if (!values.length) return 0;
  const sorted = [...values].sort((a, b) => a - b);
  return sorted[Math.min(sorted.length - 1, Math.floor(p * (sorted.length - 1)))];
}

/**
 * Walk in from one edge of a 1-D profile and decide how deep the mat runs.
 *
 * `std` is per-line standard deviation (edge energy) and `mean` is per-line
 * brightness, both ordered so index 0 is the outermost line of the side being
 * examined.
 *
 * A mat is accepted only when BOTH signals agree at the boundary:
 *   1. variance step - the first interior line is >= MIN_STD_RATIO times the
 *      90th percentile of the candidate band. This is what tells a mat (flat or
 *      evenly textured all the way through its depth) apart from art that
 *      merely fades toward a soft edge, where the profile ramps instead of
 *      stepping. Measured: naija-church 26.7, saju-water 3.3, mental-age-15 1.0.
 *   2. brightness step - the band's mean differs from the interior's by at
 *      least MIN_MEAN_STEP. A paper mat or a cream border is a different colour
 *      from the picture; flat in-picture background is not. Measured:
 *      naija-church 89.5, saju-water 88.0, mental-age-15 15.8.
 *
 * Requiring both is deliberately conservative: a missed mat leaves art slightly
 * small, but a false positive eats the artwork itself.
 *
 * @returns {{depth:number, stdRatio:number, meanStep:number}} depth in profile units
 */
function matDepth(std, mean, interiorStd) {
  const cap = Math.floor(PROFILE_N * MAX_TRIM_RATIO);
  const flat = FLAT_THRESHOLD_RATIO * interiorStd;

  // Greedy: how many lines from the edge are quiet?
  let d = 0;
  while (d < cap && std[d] < flat) d++;

  // Step back until the boundary shows a genuine step, so a mat with a soft
  // transition line still resolves to the largest defensible depth.
  for (let cand = d; cand >= MIN_TRIM_PX; cand--) {
    if (std[cand] < flat) continue; // the line we'd keep must itself be interior
    const band = std.slice(0, cand);
    const bandQ90 = quantile(band, 0.9);
    const stdRatio = std[cand] / (bandQ90 + 1);

    const bandMean = mean.slice(0, cand).reduce((a, b) => a + b, 0) / cand;
    const probe = Math.max(4, Math.round(PROFILE_N * 0.1));
    const innerSlice = mean.slice(cand, cand + probe);
    const innerMean = innerSlice.reduce((a, b) => a + b, 0) / innerSlice.length;
    const meanStep = Math.abs(bandMean - innerMean);

    if (stdRatio >= MIN_STD_RATIO && meanStep >= MIN_MEAN_STEP) {
      return { depth: cand, stdRatio, meanStep };
    }
  }
  return { depth: 0, stdRatio: 0, meanStep: 0 };
}

/**
 * Find the inner artwork rectangle, ignoring any flat or evenly-textured mat.
 * Returns a sharp extract region in SOURCE pixel coordinates plus a per-side
 * audit trail.
 */
async function detectContentBox(srcPath, width, height) {
  const { data } = await sharp(srcPath)
    .greyscale()
    .resize(PROFILE_N, PROFILE_N, { fit: "fill" })
    .raw()
    .toBuffer({ resolveWithObject: true });

  const rowStd = [];
  const rowMean = [];
  const colStd = [];
  const colMean = [];
  for (let y = 0; y < PROFILE_N; y++) {
    let s = 0;
    let s2 = 0;
    for (let x = 0; x < PROFILE_N; x++) {
      const v = data[y * PROFILE_N + x];
      s += v;
      s2 += v * v;
    }
    const m = s / PROFILE_N;
    rowMean.push(m);
    rowStd.push(Math.sqrt(Math.max(0, s2 / PROFILE_N - m * m)));
  }
  for (let x = 0; x < PROFILE_N; x++) {
    let s = 0;
    let s2 = 0;
    for (let y = 0; y < PROFILE_N; y++) {
      const v = data[y * PROFILE_N + x];
      s += v;
      s2 += v * v;
    }
    const m = s / PROFILE_N;
    colMean.push(m);
    colStd.push(Math.sqrt(Math.max(0, s2 / PROFILE_N - m * m)));
  }

  const lo = Math.round(PROFILE_N * 0.3);
  const hi = Math.round(PROFILE_N * 0.7);
  const interiorRow = quantile(rowStd.slice(lo, hi), 0.5);
  const interiorCol = quantile(colStd.slice(lo, hi), 0.5);

  const rev = (a) => [...a].reverse();
  const top = matDepth(rowStd, rowMean, interiorRow);
  const bottom = matDepth(rev(rowStd), rev(rowMean), interiorRow);
  const left = matDepth(colStd, colMean, interiorCol);
  const right = matDepth(rev(colStd), rev(colMean), interiorCol);

  // SYMMETRY GATE. A mat is a frame: it surrounds the artwork on all four
  // sides. A one-sided "mat" is almost always real artwork that happens to be
  // quiet near one edge - a dark sky, an empty wall, a gradient falloff - and
  // trimming it amputates the composition. Requiring all four sides to fire
  // independently, then taking the shallower depth of each opposite pair, is
  // what pins mental-age-15 (quiet lower and left edges only) to zero trim
  // while leaving saju-water's four-sided hanji mat fully detected.
  const framed =
    top.depth > 0 && bottom.depth > 0 && left.depth > 0 && right.depth > 0;
  const vDepth = framed ? Math.min(top.depth, bottom.depth) : 0;
  const hDepth = framed ? Math.min(left.depth, right.depth) : 0;

  const toPx = (d, extent) => Math.round((d / PROFILE_N) * extent);
  const t = toPx(vDepth, height);
  const b = toPx(vDepth, height);
  const l = toPx(hDepth, width);
  const r = toPx(hDepth, width);

  const region = {
    left: l,
    top: t,
    width: Math.max(1, width - l - r),
    height: Math.max(1, height - t - b),
  };
  const sides = { top, bottom, left, right };
  const pct = {
    top: (t / height) * 100,
    bottom: (b / height) * 100,
    left: (l / width) * 100,
    right: (r / width) * 100,
  };
  const areaTrimmed = 100 * (1 - (region.width * region.height) / (width * height));
  return { region, sides, pct, areaTrimmed };
}

/** Centre-crop a region to a target aspect ratio (never grows it). */
function cropToAspect(region, aspect) {
  let { left, top, width, height } = region;
  if (width / height > aspect) {
    const w = Math.round(height * aspect);
    left += Math.round((width - w) / 2);
    width = w;
  } else {
    const h = Math.round(width / aspect);
    top += Math.round((height - h) / 2);
    height = h;
  }
  return { left, top, width, height };
}

async function encodeUnder(pipeline, startQuality, maxBytes) {
  // effort 6 (default 4) buys a free 6-9% off these dense textile/poster
  // sources, which is worth several quality steps on the stubborn ones.
  const enc = (quality) => pipeline.clone().webp({ quality, effort: 6 }).toBuffer();
  let quality = startQuality;
  let buf = await enc(quality);
  while (buf.length > maxBytes && quality > MIN_QUALITY) {
    quality -= 5;
    buf = await enc(quality);
  }
  return { buf, quality, overBudget: buf.length > maxBytes };
}

async function processOne(kind, file) {
  const srcPath = path.join(SRC, kind, file);
  const base = path.basename(file, path.extname(file));
  const outRel = `${kind}/${base}.webp`;
  const outPath = path.join(OUT, kind, `${base}.webp`);
  await mkdir(path.dirname(outPath), { recursive: true });

  const meta = await sharp(srcPath).metadata();
  const { width, height } = meta;

  const override = OVERRIDES[`${kind}/${file}`];
  const detect = override
    ? {
        region: override,
        sides: null,
        pct: {
          top: (override.top / height) * 100,
          bottom: ((height - override.top - override.height) / height) * 100,
          left: (override.left / width) * 100,
          right: ((width - override.left - override.width) / width) * 100,
        },
        areaTrimmed: 100 * (1 - (override.width * override.height) / (width * height)),
        manual: true,
      }
    : await detectContentBox(srcPath, width, height);

  let region;
  let outW;
  let outH;
  if (kind === "icons") {
    region = cropToAspect(detect.region, 1);
    outW = ICON_EDGE;
    outH = ICON_EDGE;
  } else {
    region = cropToAspect(detect.region, BG_ASPECT);
    // Never upscale: cap the output at the cropped region's own width.
    outW = Math.min(region.width, 1600);
    outH = Math.round(outW / BG_ASPECT);
  }

  const pipeline = sharp(srcPath)
    .extract(region)
    .resize(outW, outH, { fit: "cover", position: "centre" });

  const { buf, quality, overBudget } = await encodeUnder(
    pipeline,
    kind === "icons" ? ICON_QUALITY : BG_QUALITY,
    kind === "icons" ? ICON_MAX_BYTES : BG_MAX_BYTES
  );

  // Write the encoded buffer verbatim. Round-tripping it through
  // sharp(buf).toFile() would silently RE-ENCODE at sharp's default q80 and
  // undo the whole step-down loop (that is how filmi-balanced landed at 135KB
  // after the loop had already settled on a 112KB encode).
  await writeFile(outPath, buf);
  const size = buf.length;

  return {
    out: outRel,
    src: `${width}x${height}`,
    trim: detect.pct,
    areaTrimmed: detect.areaTrimmed,
    sides: detect.sides,
    dims: `${outW}x${outH}`,
    kb: size / 1024,
    quality,
    overBudget,
    manual: Boolean(detect.manual),
  };
}

async function listSources(kind) {
  let entries = [];
  try {
    entries = await readdir(path.join(SRC, kind));
  } catch {
    return [];
  }
  return entries.filter((f) => /\.(png|jpe?g)$/i.test(f)).sort();
}

const results = [];
for (const kind of ["icons", "bg"]) {
  for (const file of await listSources(kind)) {
    try {
      results.push(await processOne(kind, file));
    } catch (err) {
      console.error(`FAILED ${kind}/${file}: ${err.message}`);
      process.exitCode = 1;
    }
  }
}

const pad = (s, n) => String(s).padEnd(n);
const num = (v, n, dp = 1) => String(v.toFixed(dp)).padStart(n);

console.log(
  `\n${pad("Output", 36)}${pad("Source", 11)}${pad("Trim T/B/L/R %", 26)}${pad("Area%", 7)}${pad("Out dims", 11)}${pad("KB", 8)}q`
);
console.log("-".repeat(106));
let totalKb = 0;
let largest = { kb: 0 };
for (const r of results) {
  totalKb += r.kb;
  if (r.kb > largest.kb) largest = r;
  const t =
    `${num(r.trim.top, 4)}/${num(r.trim.bottom, 4)}/${num(r.trim.left, 4)}/${num(r.trim.right, 4)}` +
    (r.manual ? " *" : "");
  console.log(
    `${pad(r.out, 36)}${pad(r.src, 11)}${pad(t, 26)}${pad(num(r.areaTrimmed, 5), 7)}${pad(r.dims, 11)}${pad(num(r.kb, 6), 8)}${r.quality}${r.overBudget ? "  OVER-BUDGET" : ""}`
  );
}
console.log("-".repeat(106));
const icons = results.filter((r) => r.out.startsWith("icons/"));
const bgs = results.filter((r) => r.out.startsWith("bg/"));
console.log(
  `${results.length} files (${icons.length} icons, ${bgs.length} bg), total ${(totalKb / 1024).toFixed(2)} MB, largest ${largest.out} at ${largest.kb.toFixed(1)}KB`
);
const trimmed = results.filter((r) => r.areaTrimmed > 0.5);
const manual = results.filter((r) => r.manual);
if (manual.length) {
  console.log(`* = hand-measured override: ${manual.map((r) => r.out).join(", ")}`);
}
console.log(
  `Mat detected on ${trimmed.length}/${results.length}; heaviest: ` +
    trimmed
      .sort((a, b) => b.areaTrimmed - a.areaTrimmed)
      .slice(0, 5)
      .map((r) => `${r.out} ${r.areaTrimmed.toFixed(0)}%`)
      .join(", ")
);
const over = results.filter((r) => r.overBudget);
if (over.length) {
  console.log(`WARNING: ${over.length} over budget: ${over.map((r) => r.out).join(", ")}`);
  process.exitCode = 1;
}
