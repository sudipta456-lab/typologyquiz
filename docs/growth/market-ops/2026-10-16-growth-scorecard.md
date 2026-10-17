# Daily growth scorecard — 2026-10-16

Run: October 16 evening, America/Edmonton (October 17 UTC). Aggregate report audit, public discovery checks and one bounded analytics correction. No external messages or account/privacy-setting changes.

## Observed results

GA4 property **545477353** visibly identifies TypologyQuiz. The report period is **October 9–15**, not today's partial day. Yesterday's October 8–14 window overlaps it; differences are not evidence of a tactic's effect. Operator/testing traffic was not excluded.

| Signal | Observed value | Limits |
| --- | --- | --- |
| GA4 total / new / returning users | 15 / 12 / 3 | Categories overlap. User-acquisition report uses 100% of available data. |
| First-user source | Google organic: 8 total, 8 new, 1 returning; unattributed: 7 total, 4 new, 2 returning | Two settled rows. First-user acquisition is not session attribution; unlisted sources do not establish zero social/publisher visits. |
| Engagement | 1m17s per active user overall; Google organic 1m52s; unattributed 22s | No causal or learning-benefit claim. |
| Events | 93: page_view 53, session_start 19, first_visit 12, user_engagement 9 | Four rows. No quiz-start/completion row observed; ordinary personality/trivia/driving starts lack the editorial/movie event coverage, so this is not zero gameplay. |
| Linked Search Console | 57 clicks, 530 impressions, 10.75% CTR, average position 6.04 | Same displayed period. Homepage: 51 clicks / 296 impressions. Search clicks and GA users have different definitions and coverage. |
| Publisher / community actions today | 0 sends / 0 contributions in today's records | Approved sender not available in Zoho; fresh replies/Sent/unsubscribes unverified. Owner-sent October 15 GA inquiry remains historically verified; do not resend. Community found no suitable unresolved request. |
| Qualified referrals-to-starts / opt-ins | Not established | No supported source-to-actual-start cross-tabulation or verified new opt-in. Prepared assets, sent mail and traffic are not leads. |
| Technical discovery | 13/13 intended endpoints HTTP 200; 572 sitemap URLs | Public quiz/driving pages checked have matching canonical and index/follow. Group and Live remain noindex/nofollow; Group inherits homepage canonical. No indexing/ranking/citation guarantee. |
| Discovery artifacts | Movies included, private Group omitted, live llms.txt matches local | Public directory returned `{"rooms":[]}`; this does not count visitors or private rooms. |

Evidence outside Git: `/Users/sudiptasarkar/Documents/Codex/2026-09-10/co/work/growth-audit/2026-10-16/` contains aggregate-report JSON, public endpoint checks, TikTok observations and release logs. Python urllib received 403 for every route while curl returned normal responses; no site outage is inferred from that client difference. An operator probe used nonexistent `/trivia/first-20-elements/` and got 404. The actual source-recorded `/trivia/periodic-table-first-20/` returned 200; no product link defect was established.

## Four-role handoff

- **Scout:** National Chemistry Week October 18–24 is a source-checked planning opportunity. Use the three-minute first-20-elements route; no invented trend or invitation. November library games remains a plausible fit, not an interested lead.
- **Publisher:** original building-materials facilitator PDF and transcript are prepared and source-linked. They are not classroom-tested or endorsed. NCGE's classroom-use requirement is still unmet; formatting a companion does not resolve it. Approved-mailbox access blocks a fresh reply audit; no alternate sender or duplicate GA email.
- **Community:** @typologyquiz verified in today's records; no actionable own-post question or appropriate public contribution. Do not place generic promotion in franchise-specific movie asks or app-restricted trivia threads.
- **TikTok:** morning reconciliation confirmed 21 future rows October 16–22 and all seven approved visual replacements. This audit freshly verified @typologyquiz in Studio. Today's alien, following-gap and Fe rows now show due local times, Everyone and 0 views / 0 likes / 0 comments each. The following-gap menu offers published-post controls, including Pin to top; no action was selected. Direct permalink playback was blocked by the browser client, and the signed-in profile also lists future posts, so it is not independent public-playback proof. The 21:00 operator must reconcile final publication states and ledger. October 15 rows now display 1 / 2 / 3 views in slot order. Twelve older queued CTA repairs and seven full-motion Stories remain local-only; no queue mutation in this run.

## What changed

Reproduced a specific attribution gap: exact apex/www referrers from `tiktok.com` and `geography.org.uk` were always reduced to unattributed. Added four fixed table entries, retaining canonical apex source/origin and medium `referral`. Validation, event fields, storage schema/TTL, activation, consent and account controls are unchanged. No raw path, handle, video ID, query or hash is emitted. Missing or unsupported referrers remain unattributed; historical traffic cannot be recovered.

Scope: local shared analytics/site tooling; no consumer API or event-schema change. Touch list completed: `src/lib/analytics.ts`, `tests/analytics.test.ts`, and the existing allowlist paragraph in `docs/growth/GA4_ARCHITECTURE_2026-09-13.md`. Broader quiz-start instrumentation remains separate. Opus reviewed the privacy contract before implementation and the final diff without blocking findings; Sonnet implemented. Its command approval was unavailable, so the root ran all gates directly.

## Gates and release

- Regression first: original 15 analytics tests passed and the two new tests failed on missing attribution; after implementation, all 17 passed.
- Full `./scripts/mac-run.sh npm run verify`: **154 tests passed**, typecheck and lints passed. Existing assessment lint has three image warnings; existing Node module-type warnings remain.
- Production build: **1,310 pages** exported, analytics manifest 1,306 paths, 572 canonical sitemap pages verified. Existing production GA activation IDs retained. Handbook assets stripped only from generated export, as required by the existing R2 deployment protocol.
- Wrangler asset dry-run passed with 15,817 files. Scoped code commit `a1d8b252` pushed to master.
- Deployment confirmed: version `99009438-1368-49b9-ac5a-c668e4477059` on all three existing custom domains. Live homepage references the new analytics chunk; its HTTP 200 bytes match the local export (SHA-256 `df485c654e90b2bf55da388d23ab554422365aa5892cd0a1e76d71a919a0fdb5`) and contain all four domain constants. Homepage plus five post-release smoke endpoints returned 200. Receipt: `live-release.json` in the evidence directory. Previous deployment: `307b8953-dd86-489e-9762-b6c79847dc9a`.

Real GA4 ingestion for either newly allowed source is **not verified**. Unit tests and a deployed bundle establish the bounded mapping, not real referral traffic or third-party request privacy afresh.

## Single next-cycle priority and seven-day decision

Review the smallest privacy-safe **aggregate start event for ordinary personality/trivia/driving play**, then validate actual request payloads and GA receipt before releasing it. The homepage accounts for 51 of 57 observed search clicks; current event coverage cannot answer whether those users start quizzes. Do not add answers, results, names, room identifiers, reflection text or URL parameters.

The available October 12–16 scorecards do not establish qualified conversions; complete October 9–11 growth scorecards are absent, so a complete seven-day conversion comparison is unavailable. Recommend improving measurement and completing eligible, genuinely useful educator resources before expanding outreach volume. Keep existing caps and do not increase posts to compensate for missing data. The three-slot TikTok cadence started October 12 and has not completed seven local days. At that review use actual watch/completion, shares/saves, profile visits and supported site starts, rather than impressions. No cadence or automation change was made.

Private dashboard updated and read back: `growth-operator Reviewed`, `2026-10-17T02:07:28.446Z`, with the observed aggregate figures, deployed mapping and unestablished conversions. No private contact data included. Existing unrelated operational edits and the untracked October 15 scout note were preserved.
