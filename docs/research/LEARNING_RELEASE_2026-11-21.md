# Learning release — November 21, 2026

**Published; HTTP, representative post-deploy native browser, and production GA event verification passed.** Source `4ac2369cfbe348f4fbd46b72e5259fcc31ee2a38` was pushed to `origin/master` and `origin/codex/learning-release-2026-11-21`. The GA-enabled production deployment completed at 100%: version `98628c31-92ee-472e-876f-44d472c6918e`, deployment `b0bea87f-f799-40b0-8928-491ee58fea4d`, created `2026-11-21T17:28:59.221308Z`. The browser/GA closure is documented below and in `LEARNING_RELEASE_2026-11-21.analytics.json`.

## Published scope and counts

- The canonical collection is **413 quizzes / 3,304 tasks**. The eight learning-feature quizzes SN-78–85 and the separate daily five MT-36, MU-36, GT-36, SG-36, LW-35 are published. The November 21 daily quota is complete: five published, shortfall zero; do not create another November 21 batch. The next regular batch is November 22.
- `/learn/periodic-table/` covers 118 elements and three practice tracks with 24 steps. These are learning steps, not canonical quizzes. `/learn/anatomy/` links eight anatomy quizzes and includes eight plates, 17 GLBs and four licensed Blausen PNG references.
- The original 400 quiz objects and 400 briefs retain their exact raw bytes and order. All 13 additions preserve their reviewed payloads. The 78-entry group catalog and Worker routing/bindings remain unchanged. The handbook remains on R2 and was stripped from the static export.

## Verification evidence

- Full `npm run verify`: **340 tests, zero failures**. Production export: 999 sitemap URLs, 1,735 GA-covered HTML pages and 17,929 regular files.
- All 15 new routes returned HTTP 200 and matched the verified export, allowing only the known Cloudflare browser-check appendage. The two hubs are learning-resource pages, not canonical quiz nodes. All 13 quiz pages expose eight quiz JSON-LD tasks and methodology links. All 15 routes appear in the sitemap and discovery artifacts.
- The live receipt covers 25 HTTP checks, four representative asset receipts, an immutable PNG handbook sample from R2 (HTTP 200), and the compiled GA loader (HTTP 200). Static GA coverage and loader delivery passed; neither proves that a browser sent or GA received an event.
- Fresh independent GPT merge, camera and label reviews passed; earlier question/science reviews passed. The camera correction aligns the OrbitControls cursor with the fitted model center, with a real Three.js phone/desktop regression. Pre-deploy native QA covered periodic-table search, details, comparison, guided steps and 320/390 layouts; anatomy focus/Escape and image labels; top-level desktop and iPhone SE 375×667 WebGL heart load/rotate/zoom/reset/pick; one complete heart-quiz interaction; daily-five interactions; sharing; and three legacy smoke checks. All 13 gold paths passed. These checks do not constitute 13 full native playthroughs or a post-deploy UI pass. The iframe WebGL harness remained blank; top-level mobile WebGL passed.
- Post-deploy closure: representative SG-36 native playthrough completed all eight checkable tasks for 8/8 credit. The `interactive_quiz_complete` request returned HTTP 204 and Google Analytics Realtime property `545477353` showed one start and one completion; the completion drilldown showed `quiz_id=SG-36`, count 1. This is one internal QA completion, not organic-growth or engagement evidence. The receipt is timestamped `2026-11-21T18:52:08Z`.

## Prior hold — resolved

The contemporaneous daily publication record recorded the post-deploy browser/GA receipt as pending after Chrome returned `CGWindowNotFound`. That hold was subsequently resolved by the representative production playthrough and Realtime receipt above. The verification closes the event-delivery gate for this release; it does not establish that every new quiz received a post-deploy native playthrough.

The anatomy material is source-based educational content, not medical certification. Disclosed image-identification and nonvisual-assessment limits remain; male anatomy coverage is partial. No credentials, privacy settings, advertising, news or outreach changes were made, and no external posts were made.

Machine receipts: `work/combined-release/2026-11-21/{build-receipt.json,live-verification.json,preservation.json,deployments.json}`. Concise merge and camera reports: `.mece/cells/20261121-combine/REPORT.md` and `.mece/cells/20261121-camera/REPORT.md`.
