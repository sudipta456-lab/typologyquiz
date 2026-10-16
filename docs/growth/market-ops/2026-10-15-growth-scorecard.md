# Daily growth scorecard — 2026-10-15

Run: approximately 19:59–20:03 America/Edmonton (October 16 UTC). Read-only production audit; no external communication, tracking-setting change, site correction or deployment.

## Observed results

GA4 property 545477353 visibly identifies TypologyQuiz. Reporting period below is **October 8–14**, not today's partial day. These fresh report observations supersede the earlier access-unavailable state; they are not a before/after growth comparison.

| Signal | Observed value | Evidence and limits |
| --- | --- | --- |
| GA4 total / new / returning users | 11 / 9 / 3 | User-acquisition report, 100% available data. These categories overlap and must not be added together. Operator/testing traffic has not been excluded by this audit. |
| First-user sources | google / organic: 6 total users, 6 new; unattributed / unattributed: 5 total, 3 new | All two rows visible. First-user source is not session attribution, and unlisted TikTok/publisher sources do not prove no such visits. |
| Engagement | 50s average engagement per active user overall; Google organic row 1m23s | No causal performance or learning-benefit claim. |
| GA4 event report | 51 events: 25 page_view, 13 session_start, 9 first_visit, 4 user_engagement | Four of four event rows visible. No quiz_start, quiz_complete or movie events are listed in this period. This does not prove zero gameplay. |
| Google Search Console report | 51 clicks, 517 impressions, 9.86% CTR, 6.17 average position | Linked Search Console report for the same displayed seven-day period; these are search metrics, not GA4 sessions or qualified leads. Homepage: 44 clicks and 290 impressions. Search clicks and GA users use different definitions/coverage and are not expected to match one-for-one. |
| Publisher work today | 1 owner-sent GA inquiry verified in Sent; 0 agent sends in the final continuation | Today's publisher receipt supersedes its earlier pending states. No matching inbound reply was observed at that check. No new mailbox check in this run; delivery, placement, later replies and opt-ins remain unverified. Do not resend. |
| Community work today | 0 confirmed contributions in today's records | At 17:02 the contributor verified @typologyquiz, found no new actionable own-post question, and declined unsuitable/redundant public discussions. No fresh community interaction in this audit. |
| Qualified referral-to-quiz opportunities / opt-in inquiries | Not established | No supported cross-tabulation of referral and actual quiz start, and no verified opt-in. Do not convert traffic, a sent email or prepared content into a lead count. |
| Live discovery endpoints | 12/12 intended endpoints returned HTTP 200 | robots.txt, sitemap.xml, llms.txt, Countries of the World, Planets, Alberta, Vermont, movie hub, animated movie set, Group, Live Events, and source-confirmed `/api/groups/public`. |
| Discovery artifacts | 572 sitemap URLs; movie route included; private Group excluded; live llms.txt matches local bytes | Public quiz/driving pages inspected carry their matching canonical and index/follow. Group and Live carry noindex/nofollow. Availability/artifact checks do not prove crawler indexing or AI citation. |
| Public directory | `{"rooms":[]}` | Only public lobby listings, not absence of visitors or private rooms. |
| Local verification | 15 analytics tests + 4 discovery tests passed | Analytics manifest current for 1,306 paths. No new browser-network ingestion/privacy verification was performed. |

Evidence directory outside Git: `/Users/sudiptasarkar/Documents/Codex/2026-09-10/co/work/growth-audit/2026-10-15/` contains the public-endpoint JSON and aggregate report text/screenshots. An initial mistaken probe to `/api/group/rooms` received HTML; source inspection identified `/api/groups/public`, which returned valid JSON. This operator probe error is not an application outage.

## Four-role handoff

- **Scout:** November library-games use is a plausible planning fit, not a verified submission invitation or interested lead. World Space Week is over. The GA prospect is already contacted; do not duplicate it.
- **Publisher:** owner-sent GA inquiry now has a verified Sent receipt. No automatic follow-up; NCGE/astroEDU need the reviewed companion. No additional external contact is warranted from this audit.
- **Community:** retain jurisdiction-specific driving language and answer only actual unresolved requests. Irish practical-test experiences do not justify Alberta knowledge-test promotion.
- **TikTok production:** seven new videos and thirteen corrected exports passed local QA; the queued old copies were not replaced. Mobile reconnection and the existing exact batch confirmation remain outstanding. The planned October 15 18:30 slot is now past: never apply that deletion/replacement plan blindly. Reconcile publication first; a due scheduled row is not a publication receipt. The next TikTok run owns that live check.
- **Growth:** aggregate analytics and Search Console are readable again. This improves measurement access, but still does not identify qualified social/publisher conversions.

## Highest-leverage next action

Review and close the **aggregate quiz-start measurement gap** for the existing homepage-to-personality/trivia paths (the homepage accounts for 44 of 51 observed search clicks). Source inspection shows `quiz_start`/`quiz_complete` currently cover editorial editions, while movies use separate movie events; those movie quizzes launched after this reporting window. The current event table cannot represent every quiz family's starts. Prepare the smallest reviewed allowlisted event contract and verification for ordinary quiz entry, retaining the current exclusions for answers, results, nicknames, notes, room codes and query/hash data. Obtain the required architecture/privacy review before implementing; do not change property privacy controls or infer a broken tag from this low-volume report.

## Conversion friction and seven-day decision

No observed technical defect warrants an on-site release today. The outstanding TikTok media replacements and absent profile Website field are already recorded account/workflow friction; a URL painted into video cannot create a clickable link. No repeated user alert or account conversion was performed.

The three-slot TikTok cadence began October 12 and has not completed seven local days. Keep requested targets; do not increase posting/outreach volume to compensate for missing conversion data. At the seven-day review, compare actual watch time/completion, saves/shares, profile visits and supported site starts. Today's Search Console and GA4 totals are a baseline, not proof of a tactic's success or a reason to change cadence.

Dashboard: `growth-operator Reviewed` — GA4/Search Console observed, discovery healthy, qualified conversions not established; next action is reviewed aggregate quiz-start coverage.
