# Staged result assets

All rows processed 2026-08-31 by `scripts/process-result-art.mjs` (sharp):
top ~7% cropped off every source (removes the top-left "Ai" badge zone),
icons 800x800 centre-crop webp q80, backgrounds 1600x900 webp q75, every
output under 250KB. Wired into the results page via `src/lib/result-art.ts`.
Total shipped payload: 25 files, ~1.14 MB.

| Staged file | Source | Output | Status |
|---|---|---|---|
| `icons/kkotmal-forsythia.webp` | 1-forsythia.png | 800x800, 19.0KB | SHIPPED (baked Korean text top-left sits outside the centre crop) |
| `icons/kkotmal-plum.webp` | 2-plum.png | 800x800, 18.3KB | SHIPPED |
| `icons/kkotmal-camellia.webp` | 3-camelia.png | 800x800, 17.7KB | SHIPPED |
| `icons/kkotmal-cosmos.webp` | Cosmos.png | 800x800, 13.9KB | SHIPPED |
| `icons/kkotmal-balanced.webp` | Wildflower-mix.png | 800x800, 20.2KB | SHIPPED |
| `icons/doubutsu-shiba.webp` | 1.shiba.png | 800x800, 26.5KB | SHIPPED |
| `icons/doubutsu-cat.webp` | 2-the cat.png | 800x800, 16.3KB | SHIPPED (badge removed by top crop) |
| `icons/doubutsu-owl.webp` | 3-owl.png | 800x800, 34.5KB | SHIPPED (pillarbox bars cropped: content region x 474..2069, centre 1440-square at left=551) |
| `icons/doubutsu-kitsune.webp` | 4-kitsune.png | 800x800, 34.3KB | SHIPPED |
| `icons/doubutsu-balanced.webp` | 5-shapeshifter.png | 800x800, 36.2KB | SHIPPED |
| `bg/hafez-nightingale.webp` | 1-nightingle.png | 1600x900, 79.5KB | SHIPPED |
| `bg/hafez-sage.webp` | 2-Sage.png | 1600x900, 42.6KB | SHIPPED |
| `bg/hafez-rebel.webp` | 3-rabel.png | 1600x900, 76.9KB | SHIPPED |
| `bg/hafez-cupbearer.webp` | 4-cupbearer.png | 1600x900, 55.3KB | SHIPPED |
| `bg/hafez-balanced.webp` | 5-openpage.png | 1600x900, 67.9KB | SHIPPED |
| `bg/shahnameh-rostam.webp` | Set_5_Shahnameh_Hero_Back...eep_rose_and_indigo_bands1.png | 1600x900, 75.1KB | SHIPPED (split-panel diptych composition, per earlier OK) |
| `bg/shahnameh-gordafarid.webp` | 2-GORDAFRAID.png | 1600x900, 63.4KB | SHIPPED (A-set file; badge removed by top crop) |
| `bg/shahnameh-siyavash.webp` | 3-siyavash.png (B-set alternate) | 1600x900, 46.1KB | SHIPPED — source SWITCHED from bands3 (small baked #232AA hex mid-right, split-panel). 3-siyavash carries its own large "#223A4A" swatch top-left, removed by a 2240x1260 crop at (320,180) |
| `bg/shahnameh-sohrab.webp` | Set_5_Shahnameh_Hero_Back...eep_rose_and_indigo_bands4.png | 1600x900, 64.7KB | SHIPPED |
| `bg/shahnameh-balanced.webp` | Set_5_Shahnameh_Hero_Back...eep_rose_and_indigo_bands5.png | 1600x900, 54.5KB | SHIPPED |
| `bg/fal-qahveh-mountain.webp` | Set_4_Fal_e_Qahveh_Persia...edge_in_warm_neutral_tone1.png | 1600x900, 59.9KB | SHIPPED (content verified: mountain) |
| `bg/fal-qahveh-bird.webp` | Set_4_Fal_e_Qahveh_Persia...edge_in_warm_neutral_tone2.png | 1600x900, 61.2KB | SHIPPED (content verified: birds) |
| `bg/fal-qahveh-path.webp` | Set_4_Fal_e_Qahveh_Persia...edge_in_warm_neutral_tone3.png | 1600x900, 53.7KB | SHIPPED |
| `bg/fal-qahveh-fish.webp` | Set_4_Fal_e_Qahveh_Persia...edge_in_warm_neutral_tone4.png | 1600x900, 46.4KB | SHIPPED |
| `bg/fal-qahveh-balanced.webp` | Set_4_Fal_e_Qahveh_Persia...edge_in_warm_neutral_tone5.png | 1600x900, 82.1KB | SHIPPED |

## Notes
- The raw 2-7MB staged PNGs previously in these folders were deleted (they
  were the unprocessed, badge-carrying originals and must not ship in the
  static export). Sources remain in repo-root `images/` (gitignored).
- Re-run `node scripts/process-result-art.mjs` to regenerate everything.

## Set aside (unused)
- Autum/Spring/summer/winter.png: Personal Color cards with BAKED TYPOS ("Cow & Birast", "Lgw Contrast") - do not ship as-is. **SUPERSEDED 2026-09-01**: the regenerated `icons/personal-color-*` set (batch 2 below) shipped clean, with no baked text. These four sources stay unused.
- Shahnameh A-set (1-ROSTAM..5-Epic Ensemble) NOT staged - kept as alternates; has sidebar/hex artifacts (2-GORDAFRAID is the one A-set file in use)
- Set_5 ...bands2 (superseded by 2-GORDAFRAID) and ...bands3 (superseded by 3-siyavash)

---

# Batch 2 (2026-09-01) - IMAGE_PROMPTS.md sections A, B, C

80 files processed by `scripts/process-new-art.mjs` (sharp). That script is a
SIBLING of `process-result-art.mjs`, which still owns the original 25 assets and
their hand-tuned crops; do not merge them. Re-run with:

```
node scripts/process-new-art.mjs
```

It reads every PNG in `images/icons` and `images/bg` and writes the same
basename as `.webp` under `public/results/`, so the source filenames (already
the final asset names from IMAGE_PROMPTS.md) are the only manifest.

## What changed vs batch 1

- **No blind 7% top crop.** The regeneration prompts banned badges and the
  sources came back clean; a sample of every set was opened and inspected and
  none carries an "Ai" badge, watermark, or signature. Nothing is removed on
  suspicion any more.
- **Adaptive mat detection replaces it.** Border treatment in this batch is
  wildly inconsistent - `mental-age-15` is full-bleed, `naija-church` has a flat
  cream border, `saju-water` sits inside a heavy textured hanji mat whose real
  artwork is only the inner 68%. `sharp.trim()` cannot see the hanji mat (that
  paper is textured, std ~17, not flat). The detector instead builds per-row and
  per-column standard-deviation and brightness profiles on a 128x128 greyscale
  copy, walks in from each edge while the line variance stays under half the
  interior median, then accepts the boundary only if BOTH a variance step
  (>= 2.0x the band's 90th percentile) and a brightness step (>= 18/255) are
  present, capped at 34% per side. A **symmetry gate** then requires all four
  sides to fire, because a one-sided quiet band is nearly always real artwork
  (a dark sky, a blank wall) rather than a mat.
- Measured on the three reference images: `mental-age-15` variance step 1.01,
  brightness step 15.8 -> **rejected, 0% trimmed** (correct, it is full-bleed);
  `naija-church` 26.7 / 89.5 -> **3.9% per side**; `saju-water` 3.31 / 88.0 ->
  **15.6% per side, inner 68.8% kept** (matches the mat by eye).
- Mat found on **13 of 80** sources. The other 67 were left untouched.
- **Backgrounds are never upscaled.** The 1280x720 sources stay 1280x720; the
  three 1568x672 delulu sources crop to 16:9 at 1195x672.
- Icons 800x800 q80 target < 60KB; backgrounds q75 target < 120KB; quality steps
  down in 5s to a q40 floor. WebP `effort: 6` buys ~7% for free on the dense
  textile sources.

## Totals

**80 files, 3.88 MB** (58 icons 2.50 MB, 22 backgrounds 1.38 MB).
Largest: `bg/filmi-balanced.webp` at 119.0 KB. Every background is under the
120KB budget. Six icons miss the 60KB target at the q40 floor (see below).

## Rows

Trim is per-side top / bottom / left / right, as a percentage of the source
edge. `*` marks a hand-measured override rather than a detected mat.
All rows are SHIPPED unless flagged under "Known issues".

| Staged file | Source | Trim T/B/L/R | Area cut | Output | Size | q |
|---|---|---|---|---|---|---|
| `icons/akan-balanced.webp` | 1024x1024 | 3.9 / 3.9 / 3.9 / 3.9 | 15.0% | 800x800 | 55.2 KB | q80 |
| `icons/akan-friday.webp` | 1024x1024 | 3.9 / 3.9 / 4.7 / 4.7 | 16.5% | 800x800 | 57.4 KB | q65 |
| `icons/akan-monday.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 52.3 KB | q75 |
| `icons/akan-saturday.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 58.5 KB | q80 |
| `icons/akan-wednesday.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 58.0 KB | q60 |
| `icons/anansi-balanced.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 59.5 KB | q40 |
| `icons/anansi-hero.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 56.8 KB | q40 |
| `icons/anansi-spider.webp` | 1024x1024 | 6.3 / 6.3 / 6.3 / 6.3 | 23.4% | 800x800 | 75.7 KB | q40  OVER-BUDGET |
| `icons/anansi-tortoise.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 59.2 KB | q65 |
| `icons/anansi-weaver.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 70.0 KB | q40  OVER-BUDGET |
| `icons/dosha-balanced.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 59.6 KB | q80 |
| `icons/dosha-kapha.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 21.1 KB | q80 |
| `icons/dosha-pitta.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 50.5 KB | q75 |
| `icons/dosha-vata.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 56.3 KB | q80 |
| `icons/friend-role-anchor.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 26.4 KB | q80 |
| `icons/friend-role-balanced.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 29.8 KB | q80 |
| `icons/friend-role-comic.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 41.7 KB | q80 |
| `icons/friend-role-listener.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 36.5 KB | q80 |
| `icons/friend-role-planner.webp` | 1024x1024 | 3.9 / 3.9 / 3.9 / 3.9 | 15.0% | 800x800 | 38.5 KB | q80 |
| `icons/friend-role-spark.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 35.9 KB | q80 |
| `icons/groupchat-archivist.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 29.2 KB | q80 |
| `icons/groupchat-balanced.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 25.4 KB | q80 |
| `icons/groupchat-ghost.webp` | 1024x1024 | 10.2 / 10.2 / 8.6 / 8.6 | 34.0% | 800x800 | 37.1 KB | q80 |
| `icons/groupchat-meme.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 35.2 KB | q80 |
| `icons/groupchat-planner.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 28.1 KB | q80 |
| `icons/groupchat-therapist.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 28.2 KB | q80 |
| `icons/humors-balanced.webp` | 1024x1024 | 7.8 / 7.8 / 7.0 / 7.0 | 27.5% | 800x800 | 57.9 KB | q50 |
| `icons/humors-choleric.webp` | 1024x1024 | 13.3 / 13.3 / 13.3 / 13.3 | 46.1% | 800x800 | 56.4 KB | q40 |
| `icons/humors-melancholic.webp` | 1024x1024 | 11.7 / 11.7 / 13.3 / 13.3 | 43.8% | 800x800 | 57.7 KB | q55 |
| `icons/humors-phlegmatic.webp` | 1024x1024 | 11.7 / 11.7 / 11.7 / 11.7 | 41.4% | 800x800 | 57.1 KB | q50 |
| `icons/humors-sanguine.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 48.7 KB | q75 |
| `icons/ketsueki-a.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 28.9 KB | q80 |
| `icons/ketsueki-ab.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 27.8 KB | q80 |
| `icons/ketsueki-b.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 44.4 KB | q80 |
| `icons/ketsueki-balanced.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 59.6 KB | q70 |
| `icons/ketsueki-o.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 54.0 KB | q80 |
| `icons/mental-age-15.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 40.1 KB | q80 |
| `icons/mental-age-19.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 47.3 KB | q80 |
| `icons/mental-age-25.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 39.5 KB | q80 |
| `icons/mental-age-34.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 35.1 KB | q80 |
| `icons/mental-age-47.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 23.6 KB | q80 |
| `icons/mental-age-62.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 54.6 KB | q80 |
| `icons/naija-balanced.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 69.8 KB | q40  OVER-BUDGET |
| `icons/naija-church.webp` | 1024x1024 | 3.9 / 3.9 / 3.9 / 3.9 | 15.0% | 800x800 | 57.4 KB | q45 |
| `icons/naija-matriarch.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 78.0 KB | q40  OVER-BUDGET |
| `icons/naija-preparer.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 65.0 KB | q40  OVER-BUDGET |
| `icons/naija-truthteller.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 75.1 KB | q40  OVER-BUDGET |
| `icons/personal-color-autumn.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 21.9 KB | q80 |
| `icons/personal-color-balanced.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 23.4 KB | q80 |
| `icons/personal-color-spring.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 23.0 KB | q80 |
| `icons/personal-color-summer.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 13.8 KB | q80 |
| `icons/personal-color-winter.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 26.3 KB | q80 |
| `icons/saju-balanced.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 43.7 KB | q80 |
| `icons/saju-earth.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 39.9 KB | q80 |
| `icons/saju-fire.webp` | 1024x1024 | 13.3 / 13.3 / 13.3 / 13.3 | 46.1% | 800x800 | 34.2 KB | q80 |
| `icons/saju-metal.webp` | 1024x1024 | 10.7 / 11.9 / 10.7 / 11.9 * | 40.2% | 800x800 | 30.7 KB | q80 |
| `icons/saju-water.webp` | 1024x1024 | 15.6 / 15.6 / 15.6 / 15.6 | 52.7% | 800x800 | 18.4 KB | q80 |
| `icons/saju-wood.webp` | 1024x1024 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 800x800 | 27.9 KB | q80 |
| `bg/anime-antihero.webp` | 1280x720 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 1280x720 | 76.8 KB | q75 |
| `bg/anime-balanced.webp` | 1280x720 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 1280x720 | 66.3 KB | q75 |
| `bg/anime-magical.webp` | 1280x720 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 1280x720 | 93.7 KB | q75 |
| `bg/anime-shonen.webp` | 1280x720 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 1280x720 | 69.6 KB | q75 |
| `bg/anime-sliceoflife.webp` | 1280x720 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 1280x720 | 95.2 KB | q75 |
| `bg/delulu-1-realist.webp` | 1280x720 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 1280x720 | 27.2 KB | q75 |
| `bg/delulu-2-daydreams.webp` | 1568x672 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 1195x672 | 25.3 KB | q75 |
| `bg/delulu-3-overthinker.webp` | 1568x672 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 1195x672 | 41.1 KB | q75 |
| `bg/delulu-4-cute.webp` | 1280x720 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 1280x720 | 64.4 KB | q75 |
| `bg/delulu-5-anime.webp` | 1568x672 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 1195x672 | 46.5 KB | q75 |
| `bg/filmi-antihero.webp` | 1280x720 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 1280x720 | 57.5 KB | q75 |
| `bg/filmi-balanced.webp` | 1280x720 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 1280x720 | 119.0 KB | q65 |
| `bg/filmi-comic.webp` | 1280x720 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 1280x720 | 87.5 KB | q75 |
| `bg/filmi-hero.webp` | 1280x720 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 1280x720 | 79.1 KB | q75 |
| `bg/filmi-loyal.webp` | 1280x720 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 1280x720 | 92.7 KB | q75 |
| `bg/kdrama-balanced.webp` | 1280x720 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 1280x720 | 59.2 KB | q75 |
| `bg/kdrama-bestfriend.webp` | 1280x720 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 1280x720 | 39.8 KB | q75 |
| `bg/kdrama-genius.webp` | 1280x720 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 1280x720 | 31.5 KB | q75 |
| `bg/kdrama-secondlead.webp` | 1280x720 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 1280x720 | 42.4 KB | q75 |
| `bg/kdrama-sunshine.webp` | 1280x720 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 1280x720 | 52.3 KB | q75 |
| `bg/shahnameh-rostam.webp` | 1280x720 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 1280x720 | 61.6 KB | q75 |
| `bg/shahnameh-sohrab.webp` | 1280x720 | 0.0 / 0.0 / 0.0 / 0.0 | 0.0% | 1280x720 | 83.8 KB | q75 |

`* icons/saju-metal.webp` is the one hand-measured override in the script. Its
hanji panel sits inside a dancheong striped frame - saturated red/blue/green
bands - so the mat's variance is HIGHER than the calm bell it surrounds and no
low-variance rule can ever see it. Frame measured at 9.4% per side (bright-panel
fraction crosses 0.6 at px 96 and back at 944 on both axes); the crop sits just
inside that and clears the residual red rule along the bottom edge. Without it
the bell sat in a striped box, visibly unlike the rest of the saju set.

## Visual check

Outputs from all 16 sets were opened and inspected (icons: personal-color,
friend-role, groupchat, mental-age, saju, ketsueki, anansi, akan, humors, dosha,
naija; backgrounds: delulu, kdrama, anime, filmi, shahnameh).

- **No baked text, watermark, or signature anywhere.** The two near-misses are
  both non-readable: `bg/anime-antihero` has neon shop signage that resolves to
  faux-glyph mush at any zoom, and `icons/saju-metal`'s bell carries abstract
  angular marks on its lower band that are not hanja. Both pass "no letters".
- The golden rules held: group-chat bubbles are empty or carry squiggles, the
  mental-age crossword and notebooks are blank, no numerals appear in the
  mental-age set, and `naija-matriarch`'s phone screen is blank.
- Personal Color came back clean - no repeat of the "Cow & Birast" / "Lgw
  Contrast" typos that killed the first seasonal set.
- Subject centering is good across all 16 sets after the trim pass.

## Known issues (shipped, but flag for regeneration)

- **`bg/delulu-1-realist` and `bg/delulu-2-daydreams` are pillarboxed.** Flat
  lavender bars occupy ~27% of the left edge and ~28% of the right on delulu-1,
  and ~30% each side on delulu-2; the actual scene is a narrow portrait strip.
  The detector correctly declines to trim them: the bars are the same lavender
  as the room wall (brightness step ~5, far under threshold) and the scene runs
  full height, so the symmetry gate blocks it too. Cropping to content would
  yield a 576x324 hero, which is worse than the bars. **Regenerate at a true
  16:9 framing.** delulu-3/4/5 are fine.
- **`bg/shahnameh-rostam` is pillarboxed and framed.** The regen fixed the
  diptych problem - it is one heroic scene now - but the artwork is a portrait
  panel centred in the 16:9 frame with flat rose bars plus ornate vertical
  border strips on both sides, against the prompt's "no borders". Shipped as-is
  because it still beats the split-panel banner it replaces. `shahnameh-sohrab`
  is close to full-bleed and is good.
- **Six icons miss the 60KB target** at the q40 floor: `anansi-spider` 75.7KB,
  `anansi-weaver` 70.0KB, `naija-balanced` 69.8KB, `naija-matriarch` 78.0KB,
  `naija-preparer` 65.0KB, `naija-truthteller` 75.1KB. All six are dense
  full-frame kente or ankara pattern work - the highest-frequency sources in the
  batch. They render at 112px, so q40 costs nothing visible; the alternative was
  dropping below q40, which does. Not treated as a blocker, but the script exits
  non-zero so the miss cannot pass unnoticed.
- **Minor uncorrected borders**, all under ~5% and invisible at icon render
  size, left alone rather than loosening the gate: `naija-matriarch` (patterned
  cream bands on left and right only), `akan-saturday` and `akan-wednesday`
  (one-sided cream edge), `ketsueki-b` (4% inset panel), `personal-color-spring`
  (pale green mat), `mental-age-47` (pink vignette border), `friend-role-comic`
  (3% white edge on two sides).
- **`icons/ketsueki-o` uses a different treatment** from the rest of its set - a
  white torn-paper sticker panel floating on a green field, rather than
  full-bleed. Not a mat the detector can measure cleanly (the outer band is
  green sky above and green grass below, so it is not uniform). Shippable;
  regenerate if set consistency matters.
- `bg/kdrama-*` reads as photographic rather than illustrated, a drift from its
  style block. The five are consistent with each other, so shipped.

## Replacements and supersessions

- `bg/shahnameh-rostam.webp` and `bg/shahnameh-sohrab.webp` **overwrite** the
  batch-1 files of the same names. Those were the split-panel diptych
  compositions from `Set_5_Shahnameh...bands1/bands4`; these are the
  single-scene regenerations. The batch-1 rows for them above are superseded.
- `icons/personal-color-*` (5 files) **shipped**. This is the regenerated
  seasonal set; the batch-1 "Set aside" note about the typo-ridden
  `Autum/Spring/summer/winter.png` cards is now closed - those sources stay
  unused and unshipped, and the replacements carry no baked text.
