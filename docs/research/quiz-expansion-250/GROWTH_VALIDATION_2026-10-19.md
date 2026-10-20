# Interactive collection growth validation — October 19, 2026

The owner clarified that 250 quizzes / 25 per category was the initial batch, not an ongoing ceiling. Current publishing checks use the reviewed manifest's total and per-category counts. Categories can grow unevenly while the existing ten-category roster remains enforced.

The original quiz IDs, slugs and categories are recorded as historical identities, separate from the live collection's size. Schema, source membership, distinct prompts, task-format contracts, duplicate detection, existing legacy fingerprints and analytics privacy checks remain in place. No quiz content, answer key, gameplay, route, analytics policy or original release record changed.

## Verified behavior

- An isolated temporary copy accepts 251 quizzes and a separate unequal 253-quiz collection (PC 26, FS 27, all other categories 25), including complete structural validation and fresh catalogues.
- Manifest counts must match the actual briefs. Missing declared quizzes, duplicate IDs/slugs, unknown categories and stale catalogues fail.
- Draft batch 06 can hold the single 26th quiz. Invalid batch numbers, alias duplicates, wrong IDs/lengths and malformed JSON fail before writing.
- Synthetic scenarios are pinned to the historical initial identities, so future live additions do not freeze the tests at today's count.
- Catalogue order follows the same category and canonical-bank order as the registry. Appending briefs at the end of the manifest cannot put analytics/discovery identities in a conflicting order. New draft entries retain deterministic import order within their canonical bank.

## Final checks

`./scripts/mac-run.sh npm run verify` passed: **294 tests**, zero failures, clean typecheck, zero lint errors; three pre-existing legacy image warnings remain. Independent Opus review found no remaining blockers after the future-fixture, corrupt-draft and ordering corrections.

A separate synthetic 253-quiz root regenerated the catalogue, analytics manifest and discovery summary, then passed `verify:interactive`, `test:discovery-summary` and `test:analytics`. The temporary copy was removed. None of those synthetic quizzes was imported into the real repository or published.

All ten canonical banks, `briefs.json` and the generated interactive catalogue remained byte-identical to their pre-change hashes. The protected legacy fingerprint test also passed. These modules are used only by publishing scripts/tests; no product output changed, so no production deployment was necessary. Full build/deploy was not run.

See [the current authoring workflow](BUILD_WORKFLOW.md). This change does not create new quizzes or a daily publishing automation. Local QA logs and the temporary-root harness are retained in the shared Codex workspace under `work/interactive-growth-validation/2026-10-19/`.
