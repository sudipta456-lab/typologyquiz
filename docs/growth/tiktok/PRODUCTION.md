# TikTok launch production — 2026-09-13

## Current visual-production override — October 14, 2026

The owner approved the new cinematic fictional-alien artwork direction. Use built-in GPT Image for original raster artwork and keep all text separately editable. Figma storyboard: https://www.figma.com/design/NESCr28KI53zt6AYyREcEQ . HeyGen's connected subscription is being tested with one five-second image animation (`bdcff6e82d4045d9aed5a8ac1ef0ba28`); the last observed status is processing, not completed. CapCut's official Codex integration is documented at https://www.capcut.com/tools/capcut-x-codex but has not been installed or authorized by this task.

`scripts/social/layout.py` provides measured text fitting and independent-region collision checks. The revised geography/driving renderers and `render-visual-pilot.py` default to separate local revision folders and fail on unapproved overwrites. New work must pass layout checks, decoded-frame inspection and source/caption checks before scheduling. The legacy launch instructions below describe the original batch and do not establish that later renderers passed the same gates.

The October 14 audit confirmed ten clipped CTA frames in the September 23 geography batch. Six driving and ten geography clips have corrected local exports in `work/tiktok-launch/2026-10-14-layout-v2/`; the nine geography clips still queued in Studio are marked `quality_review.replacement_required` in the ledger. The corrected files are not uploaded replacements. Reconcile and replace them through the supported native workflow without adding duplicates. Keep original publication receipts and media hashes intact until Studio confirms the replacement.

The separate `work/tiktok-launch/2026-10-14-gpt-visual/` folder contains the original GPT image, prompt provenance in the repository's `2026-10-14-visual-refresh.json`, the local 16-second pilot, storyboard/contact frames and typography/native-video QA. The pilot is a hypothetical fictional prompt, not a quoted site item or claimed assessment result. No TikTok upload or publication is claimed for it.

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
