# Growth Step 2 release — September 11, 2026 UTC

## Verified scope

- Weekly hub and immutable legacy edition routes, four-format player, answer locking, saved progress and shared results.
- Fixed dropdown-only matching correction; full local interaction fixture finished at 4/4, covering tap matching, ordering, image-choice rendering/credits, text choice, and locked reveals. Earlier matching reload/resume passed.
- Added browser-local series follows and Thursday calendar reminders derived from publication policy. Legacy North America has no invented cadence. Seven regression tests cover storage failure/corruption, local dates, stable UID, escaping and UTF-8 folding.
- Prediction receipts now persist separately by event/revision; an older receipt cannot block a new round. Saved-receipt selection clears prior results and asynchronous checks reject stale responses. Reviewed terminal settlements close signing even before the original cutoff.
- Mac development uses Watchpack polling to avoid file watcher exhaustion.

## Gates

`npm run verify` passed through scripts/mac-run.sh: 31 editorial tests, 10 Worker tests, 2 prediction-client tests; TypeScript and scoped lints passed. Final full static build passed for 1,245 routes. Temporary local fixture removed before final build. Handbook assets stripped from generated out/ using the existing deployment script, retaining source assets and R2 serving. Independent review found no blocker for this empty-event-registry release.

## Remaining Step 2 work

The Earth and Space sampler draft and original SVG diagrams exist under content/drafts, not public output. Complete source-body/date/rights checks and exact-content operator review before promotion. US/Canada drafts remain held; World research remains unfinished. No real prediction event, signing keys, new scheduler, or editorial approval has been invented. Before a real pilot, preserve historical event identities so earlier revision receipts remain verifiable; the current registry has one revision per ID. Live browser follow, reload persistence, and unfollow passed. Calendar file generation has automated coverage; calendar-app import was not exercised.

## Deployment

Cloudflare deployment succeeded to typologyquiz.com and www.typologyquiz.com. Version: 3c40e713-edd6-4162-adf6-8f4a1a20aa69. Previous version: f1b0af7f-e844-4fbd-a77a-30b05df8d6a2. Live HTTP checks: weekly hub, immutable World edition, legacy World alias, predictions page and empty events API all 200; representative Alberta handbook image 200 with immutable R2 cache header; temporary fixture 404; invalid no-write POST probes to stats and short endpoints returned their Worker JSON 400 responses (not platform 405). Live browser follow/reload/unfollow passed. No new editorial drafts were promoted. No commit or push performed.
