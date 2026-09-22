# TikTok production brief — September 22, 2026

This is a prepared, unposted batch for `@typologyquiz`. It responds to the
September 21 Studio review: the question and both choices appear on the first
frame, with no intro or logo animation before the prompt. The clips are
silent, 16-second, original type-and-shape graphics. They point to related
live quizzes; they do not claim that the on-site quiz contains the same
multiple-choice item.

## What was prepared

Ten 1080×1920 H.264 videos are in
`/Users/sudiptasarkar/Documents/Codex/2026-09-10/co/work/tiktok-launch/2026-09-22/`.
Each has an original source PNG sequence, exact caption, SHA-256 digest,
decoded reveal frame and encoder sidecar. `asset-index.json` is the source of
truth for upload filenames and captions. `contact-sheet.jpg` is review-only.

| ID | Prompt → answer | Quiz destination | Fact check |
|---|---|---|---|
| 0922-01 | Na → Sodium | First 20 elements | [NIST sodium data](https://physics.nist.gov/PhysRefData/Handbook/Tables/sodiumtable1.htm) |
| 0922-02 | Atomic number 14 → Silicon | First 20 elements | [NIST periodic table](https://www.nist.gov/pml/periodic-table-elements) |
| 0922-03 | Montpelier → Vermont | US state capitals | [Vermont state government](https://www.vermont.gov/) |
| 0922-04 | Cheyenne → Wyoming | US state capitals | [Wyoming state government](https://wyoming.gov/) |
| 0922-05 | Dover → Delaware | US state capitals | [Delaware state government](https://delaware.gov/) |
| 0922-06 | Madison → Wisconsin | US state capitals | [Wisconsin state government](https://www.wisconsin.gov/) |
| 0922-07 | Olympia → Washington | US state capitals | [Washington state government](https://wa.gov/) |
| 0922-08 | Eight planets orbit the Sun | Planets | [NASA solar-system facts](https://science.nasa.gov/solar-system/) |
| 0922-09 | Liquid surface water → Earth | Planets | [NASA Earth facts](https://science.nasa.gov/earth/facts/) |
| 0922-10 | The Sun → a star | Planets | [NASA Sun facts](https://science.nasa.gov/sun/facts/) |

The three destination routes returned HTTP 200 during production:
`/trivia/periodic-table-first-20/`, `/trivia/us-state-capitals/`, and
`/trivia/planets/`.

## Editorial and media QA

The batch tests a clearer first second while keeping the established timing:
question and two choices at 0–8 seconds, answer/explanation at 8–13 seconds,
and a single destination cue at 13–16 seconds. The low 2.02-second average
watch time from the prior top post supports improving the first frame; it does
not yet support a claim about a winning topic or a cadence change.

Native encoder sidecars confirm ten silent H.264 clips, each 1080×1920 at
30 fps, 480 frames and 16 seconds (4,800 frames / 160 seconds total). A
decoded-frame contact sheet was visually checked for contrast and safe text
placement. The artwork is made from original Pillow/vector graphics and the
existing TypologyQuiz mark; it has no third-party footage, music, voices,
likenesses or generative-image assets. An AI-content label is therefore not
applicable. Use TikTok's **Your brand / Promotional content** disclosure at
publication.

## Publication state

No upload, scheduling or posting was attempted. At the 06:00 production run,
the Mac was locked, so TikTok Studio's queue could not be reconciled. The
ledger deliberately has no September 22 entries until Studio confirms the
actual scheduled items and their times. Before any schedule action, reconcile
the native queue to prevent duplicate posts, then obtain the action-time
confirmation required for the final public scheduling step.
