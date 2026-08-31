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
- Autum/Spring/summer/winter.png: Personal Color cards with BAKED TYPOS ("Cow & Birast", "Lgw Contrast") - do not ship as-is
- Shahnameh A-set (1-ROSTAM..5-Epic Ensemble) NOT staged - kept as alternates; has sidebar/hex artifacts (2-GORDAFRAID is the one A-set file in use)
- Set_5 ...bands2 (superseded by 2-GORDAFRAID) and ...bands3 (superseded by 3-siyavash)
