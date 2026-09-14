# TikTok launch production — 2026-09-13

Ten finished original quiz videos for @typologyquiz. This is an asset manifest, not a posting/scheduling ledger. No account actions or publication were performed by the production renderer.

## Deliverables

All media lives outside the website at `/Users/sudiptasarkar/Documents/Codex/2026-09-10/co/work/tiktok-launch/`. Each post has an H.264 `.mp4`, an actual decoded reveal `.decoded.png`, native video metadata `.qa.json`, and a directory containing question/countdown/reveal/CTA PNGs, exact caption, timeline and typography bounds. `asset-index.json` contains absolute file paths, captions and SHA-256 hashes; `qa-report.json` records the checks. `contact-sheet.jpg` is review-only and must not be uploaded as a video.

Each video is 1080×1920 at 30 fps, 16 seconds / 480 frames. The first 3 seconds show the question; 3–9 seconds hold it with a six-step countdown; 9–13 seconds reveal and explain; 13–16 seconds invite another quiz. Text stays in a conservative central safe area. Subjects and design families vary across capital choices, a space duel, a chemical tile, planetary order, a count, a nucleus illustration, a flag, a notebook calculation and missing-vowel letters.

The clips are intentionally silent and fully understandable without sound. No third-party music, footage, stock images, model/API calls or paid assets were used. Graphics are original vector shapes and type, plus the existing TypologyQuiz SVG mark rendered through the project’s installed Sharp library. System Arial/Georgia/Andale fonts are rendered locally; font files are not redistributed. No synthetic voice or human likeness is used.

## Content and provenance

Exact question, options, reveal, explanation, caption, quiz URL, timestamps, source URL and supported fact are in [launch-manifest.json](launch-manifest.json). The arithmetic item is an original promotional question linked to the general trivia hub; it is not represented as an existing assessment item. There are no diagnosis, intelligence, accuracy, success-rate or popularity claims. Source instruments with unresolved reproduction rights are not promoted.

| Asset | Question / answer | Fact source |
|---|---|---|
| 01-bc-capital.mp4 | British Columbia. What’s the capital? → **Victoria** | [Source](https://www.canada.ca/en/intergovernmental-affairs/services/provinces-territories.html) |
| 02-hottest-planet.mp4 | Which planet is hotter? → **Venus** | [Source](https://science.nasa.gov/venus/venus-facts/) |
| 03-name-na.mp4 | Name this element. → **Sodium** | [Source](https://periodic-table.rsc.org/element/11/sodium) |
| 04-missing-planet.mp4 | Which planet fills the gap? → **Mars** | [Source](https://science.nasa.gov/solar-system/planets/) |
| 05-new-york-capital.mp4 | New York State. Name its capital. → **Albany** | [Source](https://www.nysenate.gov/legislation/laws/STL/1-A) |
| 06-canada-territories.mp4 | Canada has 10 provinces. How many territories? → **3 territories** | [Source](https://www.canada.ca/en/immigration-refugees-citizenship/corporate/publications-manuals/discover-canada/read-online/canadas-regions.html) |
| 07-element-eight.mp4 | 8 protons. Name the element. → **Oxygen** | [Source](https://periodic-table.rsc.org/element/8/oxygen) |
| 08-flag-japan.mp4 | Which country is this? → **Japan** | [Source](https://www.mofa.go.jp/mofaj/files/100573336.pdf) |
| 09-notebook-math.mp4 | 3 notebooks cost $12. What do 5 cost? → **$20** | Original arithmetic: 12 ÷ 3 × 5 = 20 |
| 10-canberra-vowels.mp4 | Australia’s capital. Fill in the vowels. → **Canberra** | [Source](https://www.nca.gov.au/) |

## Reproduce locally

No new packages were installed. The bundled Python has Pillow; this Mac has Swift and AVFoundation. FFmpeg was unavailable, so the renderer uses a small native H.264 encoder. Run from the repository through the isolated project command wrapper:

```sh
./scripts/mac-run.sh /Users/sudiptasarkar/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3 scripts/social/render-launch.py --skip-existing
./scripts/mac-run.sh /Users/sudiptasarkar/.cache/codex-runtimes/codex-primary-runtime/dependencies/python/bin/python3 scripts/social/verify-launch.py
```

Use `--only 01-bc-capital` for a single clip; omit `--skip-existing` to deliberately replace rendered files. `--frames-only` prepares review frames without encoding. `--output /absolute/path` writes elsewhere. Re-running a clip invalidates any previously recorded media hash, so do not overwrite media already selected for upload without checking the upload ledger.

## QA

All ten native video reports must show 1080×1920, 30 fps, 16 seconds, 480 written frames, and zero audio tracks. Verification checks H.264/MP4 markers, an actual decoded frame for every video, image sizes, scene durations, contiguous scripted beats, caption/manifest agreement and bounded text rectangles. The renderer fails immediately if critical text exceeds its safe box. Visual review checks the question/reveal/CTA compositions at phone scale; contrast on the teal/coral CTA variants was corrected before final delivery. The first clip was handed to the main task early and was not overwritten during the remaining render.

Swift emits deprecation warnings for synchronous metadata/frame APIs on this installed macOS SDK; encoding and decoded-frame verification complete successfully. Those warnings are recorded as a maintainability limitation, not a media failure. No website code, live accounts, source questions, scoring, site build, deployment or git history were changed by this production task.


Final checks: media verification passed for all 10 clips (4,800 encoded frames, 160 seconds total); question/reveal/CTA sheets visually reviewed; actual decoded reveal frames generated for every MP4. Repository `npm run verify` passed all 76 tests, typecheck and configured lints, with the same three pre-existing native-image warnings. `git diff --check` passed. The repository gate does not replace the native media verifier.
