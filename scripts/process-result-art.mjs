/**
 * process-result-art.mjs
 *
 * Turns the raw AI-generated result art in <repo>/images (gitignored,
 * 2560x1440 PNGs) into shippable webp assets under public/results.
 *
 * Rules (see public/results/_STAGING-NOTES.md):
 *  - Every source carries a small "Ai" badge in the top-left; a ~7% crop off
 *    the top edge (full width) removes the badge zone before resizing.
 *  - icons/* -> 800x800 centre-crop webp q80 (rendered as result icons).
 *  - bg/*    -> 1600x900 webp q75 (rendered as result hero backgrounds).
 *  - 3-owl.png has beige pillarbox side bars: crop to the content region
 *    (the badge lives inside the cropped-away left bar, so no top crop).
 *  - shahnameh-siyavash uses the B-set alternate 3-siyavash.png, cropping
 *    away its large "#223A4A" swatch overlay in the top-left corner.
 *  - Every output must land under 250KB; quality steps down until it fits.
 *  - Raw staged PNGs in public/results/{icons,bg} are deleted afterwards so
 *    the unprocessed 2-7MB originals never ship in the static export.
 *
 * Run: node scripts/process-result-art.mjs
 */

import sharp from "sharp";
import { readdir, unlink, mkdir, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const SRC = path.join(root, "images");
const OUT = path.join(root, "public", "results");

const TOP_CROP_RATIO = 0.07; // removes the top-left "Ai" badge zone
const MAX_BYTES = 250 * 1024;

/**
 * @typedef {Object} Job
 * @property {string} src    source filename in images/
 * @property {string} out    output path relative to public/results (webp)
 * @property {"icon"|"bg"} kind
 * @property {{left:number, top:number, width:number, height:number}} [extract]
 *           explicit pre-crop region (replaces the default top crop)
 */

/** @type {Job[]} */
const JOBS = [
  // --- kkotmal icons (regenerated set, generation order 1..5) ---
  { src: "1-forsythia.png", out: "icons/kkotmal-forsythia.webp", kind: "icon" },
  { src: "2-plum.png", out: "icons/kkotmal-plum.webp", kind: "icon" },
  { src: "3-camelia.png", out: "icons/kkotmal-camellia.webp", kind: "icon" },
  { src: "Cosmos.png", out: "icons/kkotmal-cosmos.webp", kind: "icon" },
  { src: "Wildflower-mix.png", out: "icons/kkotmal-balanced.webp", kind: "icon" },

  // --- doubutsu icons ---
  { src: "1.shiba.png", out: "icons/doubutsu-shiba.webp", kind: "icon" },
  { src: "2-the cat.png", out: "icons/doubutsu-cat.webp", kind: "icon" },
  {
    // Beige pillarbox bars: content region is roughly x 474..2069. Centre
    // 1440-square of the content; the "Ai" badge sits inside the removed
    // left bar.
    src: "3-owl.png",
    out: "icons/doubutsu-owl.webp",
    kind: "icon",
    extract: { left: 551, top: 0, width: 1440, height: 1440 },
  },
  { src: "4-kitsune.png", out: "icons/doubutsu-kitsune.webp", kind: "icon" },
  { src: "5-shapeshifter.png", out: "icons/doubutsu-balanced.webp", kind: "icon" },

  // --- hafez hero backgrounds ---
  { src: "1-nightingle.png", out: "bg/hafez-nightingale.webp", kind: "bg" },
  { src: "2-Sage.png", out: "bg/hafez-sage.webp", kind: "bg" },
  { src: "3-rabel.png", out: "bg/hafez-rebel.webp", kind: "bg" },
  { src: "4-cupbearer.png", out: "bg/hafez-cupbearer.webp", kind: "bg" },
  { src: "5-openpage.png", out: "bg/hafez-balanced.webp", kind: "bg" },

  // --- shahnameh hero backgrounds ---
  {
    src: "Set_5_Shahnameh_Hero_Back...eep_rose_and_indigo_bands1.png",
    out: "bg/shahnameh-rostam.webp",
    kind: "bg",
  },
  { src: "2-GORDAFRAID.png", out: "bg/shahnameh-gordafarid.webp", kind: "bg" },
  {
    // B-set alternate. Its "#223A4A" swatch + ornament overlay lives entirely
    // at x<300, y<340; this 16:9 window (2240x1260) excludes it and keeps the
    // warrior, candle and horse composition intact.
    src: "3-siyavash.png",
    out: "bg/shahnameh-siyavash.webp",
    kind: "bg",
    extract: { left: 320, top: 180, width: 2240, height: 1260 },
  },
  {
    src: "Set_5_Shahnameh_Hero_Back...eep_rose_and_indigo_bands4.png",
    out: "bg/shahnameh-sohrab.webp",
    kind: "bg",
  },
  {
    src: "Set_5_Shahnameh_Hero_Back...eep_rose_and_indigo_bands5.png",
    out: "bg/shahnameh-balanced.webp",
    kind: "bg",
  },

  // --- fal-qahveh hero backgrounds ---
  {
    src: "Set_4_Fal_e_Qahveh_Persia...edge_in_warm_neutral_tone1.png",
    out: "bg/fal-qahveh-mountain.webp",
    kind: "bg",
  },
  {
    src: "Set_4_Fal_e_Qahveh_Persia...edge_in_warm_neutral_tone2.png",
    out: "bg/fal-qahveh-bird.webp",
    kind: "bg",
  },
  {
    src: "Set_4_Fal_e_Qahveh_Persia...edge_in_warm_neutral_tone3.png",
    out: "bg/fal-qahveh-path.webp",
    kind: "bg",
  },
  {
    src: "Set_4_Fal_e_Qahveh_Persia...edge_in_warm_neutral_tone4.png",
    out: "bg/fal-qahveh-fish.webp",
    kind: "bg",
  },
  {
    src: "Set_4_Fal_e_Qahveh_Persia...edge_in_warm_neutral_tone5.png",
    out: "bg/fal-qahveh-balanced.webp",
    kind: "bg",
  },
];

// Deliberately NOT processed:
//  - Autum/Spring/summer/winter.png     -> baked typos, do not ship
//  - 1-ROSTAM..5-Epic Ensemble A-set    -> alternates with sidebar/hex
//    artifacts (except 2-GORDAFRAID, mapped above)
//  - Set_5 ...bands2/bands3             -> superseded by 2-GORDAFRAID and
//    3-siyavash respectively

async function processJob(job) {
  const srcPath = path.join(SRC, job.src);
  const outPath = path.join(OUT, job.out);
  await mkdir(path.dirname(outPath), { recursive: true });

  const meta = await sharp(srcPath).metadata();
  const { width, height } = meta;

  let img = sharp(srcPath);
  if (job.extract) {
    img = img.extract(job.extract);
  } else {
    const top = Math.round(height * TOP_CROP_RATIO);
    img = img.extract({ left: 0, top, width, height: height - top });
  }

  const [w, h] = job.kind === "icon" ? [800, 800] : [1600, 900];
  img = img.resize(w, h, { fit: "cover", position: "centre" });

  let quality = job.kind === "icon" ? 80 : 75;
  let buf = await img.webp({ quality }).toBuffer();
  while (buf.length > MAX_BYTES && quality > 40) {
    quality -= 10;
    buf = await img.webp({ quality }).toBuffer();
  }
  if (buf.length > MAX_BYTES) {
    throw new Error(`${job.out} is ${buf.length} bytes even at q${quality}`);
  }

  await sharp(buf).toFile(outPath);
  const size = (await stat(outPath)).size;
  return { out: job.out, dims: `${w}x${h}`, kb: (size / 1024).toFixed(1), quality };
}

async function removeStalePngs() {
  const removed = [];
  for (const dir of ["icons", "bg"]) {
    const abs = path.join(OUT, dir);
    let entries = [];
    try {
      entries = await readdir(abs);
    } catch {
      continue;
    }
    for (const f of entries) {
      if (f.toLowerCase().endsWith(".png")) {
        await unlink(path.join(abs, f));
        removed.push(`${dir}/${f}`);
      }
    }
  }
  return removed;
}

const results = [];
for (const job of JOBS) {
  try {
    results.push(await processJob(job));
  } catch (err) {
    console.error(`FAILED ${job.src} -> ${job.out}: ${err.message}`);
    process.exitCode = 1;
  }
}

const removed = await removeStalePngs();

console.log("\nOutput                              Dims       KB      q");
console.log("-".repeat(60));
let total = 0;
for (const r of results) {
  total += parseFloat(r.kb);
  console.log(
    `${r.out.padEnd(36)}${r.dims.padEnd(11)}${String(r.kb).padEnd(8)}${r.quality}`
  );
}
console.log("-".repeat(60));
console.log(`${results.length} files, total ${(total / 1024).toFixed(2)} MB`);
if (removed.length) {
  console.log(`\nRemoved ${removed.length} stale staged PNGs (raw originals must not ship).`);
}
