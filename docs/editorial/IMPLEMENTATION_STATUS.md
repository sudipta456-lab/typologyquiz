# Migration complete; Windows contents removed — 2026-09-10

Primary project: /Users/sudiptasarkar/dev/typologyquiz. All contents of C:/dev/funproject/typologyquiz were removed at the operator’s explicit request; its empty directory remains held open by a Windows terminal/task after checksum verification,33 passing tests and full1,245-route build on Mac. Recovery sources remain separately on Mac; no deployment or editorial approval occurred. See MAC_MIGRATION_RESULT.json and WINDOWS_CLEANUP_RECEIPT.json for exact results. Git on Mac uses repository-local core.autocrlf=input to handle the copied CRLF files without spurious diffs.

Continue with a fresh Mac task attached only to this folder. First read this handoff and use ./scripts/mac-run.sh for Node/npm commands. Do not refer to the deleted Windows checkout as an active source. Earlier Windows checkpoints below are historical.

---

# Current checkpoint — Mac migration, September 10, 2026

The later implementation supersedes the first-slice status below:

- Four-format player and schema2 progress migration are implemented.
- Publication gate/review supports all four formats, reviewed image rights, and honest evergreen dates for the format-sampler series. No sampler is published.
- Prediction Worker lifecycle and /predictions UI are implemented with an empty production event registry. No secret or real event was activated.
- US and Canada have eight-question candidate drafts on HOLD for independent review; World research leads are saved, not a completed draft.
- Final combined `npm run verify` passed:24 editorial tests,9 Worker tests, registry validation, TypeScript, editorial lint and prediction lint. `git diff --check` passed before the documentation checkpoint.
- Independent final code review of these later changes and browser checks of new formats/predictions are pending. Full static export still blocked by Windows ENOSPC.
- User requested transfer to MacBook Air. No transfer, deletion, deployment, commit or push has occurred. See MAC_MIGRATION.md and .agents/HANDOFF.md for preservation and next steps.

---
# Editorial first slice — September 10, 2026

Implemented in C:/dev/funproject/typologyquiz; not deployed or committed.

## Included

- Two exact, pinned legacy news snapshots, 11 questions each. Their original
  factual content is preserved, not newly approved or fact-checked.
- /weekly/ archive, every immutable edition/version route, latest-version
  aliases, and the two existing trivia/news aliases using the same player.
- Choice-question play, keyboard operation, locked answers, explanations and
  sources, versioned local resume, results, native/copy/manual share actions,
  and square/portrait canvas score cards. Shares include the exact version.
- Build-time publication validation, per-source evidence, readable full-content
  reviews, independent reviewer metadata, explicit external human attestation,
  and immutable promotion. New content cannot use the pinned legacy exemption.
- All four core question/scoring contracts are recovered and unit-tested;
  only choice questions are enabled for publication and in the player.

## Verification

- npm run verify:editorial: passed (20 tests, full TypeScript, scoped ESLint).
- npm run validate:editorial: passed (two pinned legacy editions only).
- git diff --check: clean; unrelated pre-existing work preserved.
- Independent Astra review: first-slice code accepted after fixing promotion
  path/hash identity, legacy bypasses, malformed inputs, review previews and
  cross-platform line endings. .gitattributes pins legacy JSON to LF.
- Local browser: archive/edition rendering, keyboard answer/next, locked reveal,
  reload and resume, complete 11-question round, result grid, manual exact-version
  sharing text, and restart checked. Native share transport, actual clipboard
  transfer, and downloaded-image file inspection were not exercised.
- Full build: compilation and TypeScript passed, but static generation failed
  with ENOSPC among the 1,244 routes, both inside and outside the sandbox.
  No successful full export and no deployment claim.
- Selective-build attempts are NOT a passing gate. Next 16.2.10's documented
  path categorizer ignores src/app paths; a local internal-API diagnostic also
  did not produce expected edition HTML. tmp/editorial-static-build.cjs is a
  disposable diagnostic, not a supported build command or production fix.
- out/ and .next/ contain incomplete generated output. Do not deploy it.

Used npm --ignore-scripts run build to preserve the operator's pre-existing
root files 0, 5 and a.setNumber; the normal prebuild sweep deletes them. Other
prebuild generators were therefore not rerun. Vermont/Wyoming work and the
recovery copy's node_modules junction were not changed.

## Editorial feedback and remaining work

The operator's test is a reasonable person who watches/reads news for 1–2
hours a week feeling comfortable answering every question. Original North
America question 4 (court dissent) was reasonable and question 7 (interest
rate) was perfect. Keep prominent details and numbers when memorable; avoid
specialist or incidental trivia. Do not make the whole round basic.

The updated playbook and HEADLINE_RECALL_REVIEW.md record the audit. A
four-question Canada wording pool is in content/drafts/; it is not a finished
edition, is too narrow/short to publish, and has no independent review or
operator approval. Rate-level wording reflects the operator's positive example.

Next: obtain enough disk space for a full verified static export; complete
balanced World/US/Canada draft editions using the audience test and independent
source review; obtain operator approval before promotion; then the four-format
sampler and prediction pilot. No Worker code, secret bindings, scheduler,
automation, new edition publication, or deployment was changed in this slice.