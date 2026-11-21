# Functional anatomy release — November 21, 2026

**Status: REVIEWED / PREPARED — NOT DEPLOYED.** Source commit `4a113d2e80caa80f82ffc9625531d142d7c26e38` is committed and pushed to `origin/codex/functional-anatomy-2026-11-21`. This owner-directed feature is separate from the already-published November 21 daily five.

## Feature and preservation

Origin/master remains `79f69644f489447345f2fc8f71c4db79cf41c853`; production remains 413 interactive quizzes / 3,304 tasks, confirmed from live `llms.txt`. The feature source contains 417 interactive quizzes / 3,336 tasks: four new Science & Nature quizzes, each with eight tasks, two sections, five formats, and an 8/8 gold path.

| ID | Slug |
| --- | --- |
| SN-86 | `heart-cycle-pressure-gates` |
| SN-87 | `breathing-pressure-gas-exchange` |
| SN-88 | `nephron-tracer-filter-recover-secrete` |
| SN-89 | `neuron-signal-threshold-chemical-handoff` |

All 413 prior raw quiz and brief objects, including order, are preserved ([receipt](../../work/functional-anatomy/2026-11-21/preservation.json)). Clearly labeled functional schematics are original teaching models and remain separate from source HRA anatomy; original copyright and external credits are unchanged. This is not a medical-grade or clinical model.

## Review and release evidence

Independent content and code reviews initially held. Corrective changes addressed factual, ambiguity, geometry, accessibility, and flow-contrast findings. Targeted independent GPT closures passed; they are targeted closures, not second full reviews ([content](../../work/functional-anatomy/2026-11-21/content-independent-closure.md), [code](../../work/functional-anatomy/2026-11-21/code-independent-closure.md)).

Full `npm run verify` exited 0: 353 passed, zero failures, skips, or cancellations; four pre-existing image lint warnings. Final typecheck passed. GA-enabled production dry-run exited 0 with 1,003 canonical sitemap URLs, 1,739 active-GA HTML pages, and 17,972 regular exported files after handbook strip ([build receipt](../../work/functional-anatomy/2026-11-21/build-receipt.json)). Worker-first routing and R2 bindings are unchanged; remote group catalog remains 78. Thirteen local URL/asset HTTP 200 and export-byte checks passed. The current baseline R2 PNG returned HTTP 200; the post-deploy R2 check is pending. Test totals: [receipt](../../work/functional-anatomy/2026-11-21/verify-totals.json).

## Remaining release gates

Final native desktop/mobile QA and all new live URL/GA checks are blocked: Chrome and Safari return `cgWindowNotFound` after a JS reset. An async owner question requests Chrome visible on an unlocked desktop; no new scope or deploy approval is needed. Final preview: <http://127.0.0.1:3055/learn/anatomy/#function-heart>. Early heart/rotation/HRA14-to9 and respiratory-pause hash checks are preliminary, not final browser approval. Dev3056 was intentionally stopped; user3034 was untouched. Do not push master or describe the four quizzes as live until browser and release gates pass.
