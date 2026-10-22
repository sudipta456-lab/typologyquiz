# Daily growth scorecard — October 21, 2026

Evening audit, America/Edmonton (October22 UTC). Fresh read-only GA4, linked Search Console, bounded TikTok Studio check, today's role handoffs and public discovery probes. No external communication, account/privacy change, content publication or deployment by this growth run.

## Observed results

Verified TypologyQuiz GA4 property **545477353**, processed period **October14–20**, excluding the current partial day. Reports use 100% of available data. This overlaps yesterday's October13–19 window and known operator QA; differences do not establish a campaign, release or ranking effect. Processed values can still change.

| Signal | Observed value | Limits |
| --- | --- | --- |
| Acquisition | 69 sessions; 45 engaged; 65.22% engagement; 1m02s average engagement/session; 369 events | Sessions are not unique people. |
| Source/medium | Unattributed32 sessions/15 engaged/42s; Google organic35/28/1m02s; DuckDuckGo organic1/1/1m01s; Bing organic1/1/11m30s | No TikTok/publisher row displayed. That does not prove zero actual referrals. |
| Events | page_view182; session_start69; first_visit52; user_engagement50; interactive_quiz_start5; quiz_start4; interactive_quiz_complete2; quiz_complete2; quiz_series_follow2; quiz_share1 | 369 events/54 users overall. Interactive starts cover4 users; interactive completions2 users. Editorial quiz_start remains engine-specific. |
| Interactive source breakdown | 5 starts: unattributed4, Google organic1. Both completions unattributed | Explicit event-count dropdown, settled totals. No Bing/DuckDuckGo interactive event in displayed rows. This is not a matched funnel. |
| New source-attributed play signal | **1 Google-organic interactive start on `/quizzes/who-chose-that/`**; that page shows1 view/1 active user/35s average engagement per active user in the source-filtered report | Pages/screens filter: Session source / medium exactly matches `google / organic`; selected interactive_quiz_start totals1, all on this route. Same source-filtered completion report totals0. A recorded start/resume action, not proof of an independent human, a completed quiz, or an outreach-caused visit. |
| Other interactive page events | `/quizzes/menu-word-decoder/`:2 starts/1 completion; `/quizzes/unplanned-saturday/`:2 starts/1 completion | All-source page report. Known October18 PC-01 operator QA overlaps unplanned-saturday. Do not subtract QA mechanically or label the other events independent audience activity. |
| Linked Search Console | 43 clicks /502 impressions /8.57% CTR /average position7.57 | Same selected dates. First10 landing rows; homepage35/237, countries-of-the-world2/3, Idaho set5 take1/2, friend-role1/15, kkotmal-flower1/5, mini-ipip1/20, texting-style1/8, World Space Week1/2. Definitions/processing differ from GA4. No causal SEO claim. |
| Publisher today | 1 NAMLE public-form fit inquiry submitted confirmed; 0 emails | Success receipt is not a reply, eligibility confirmation, partnership, placement or lead. Final reply-address not independently verified; do not resend to resolve that limitation. Mailbox Sent/replies/opt-outs remain unavailable, not zero. |
| Community today | 0 contributions; both historical public study replies unchanged/no audience response shown | Existing login fails heartbeat's exact brand identity guard. No traffic or interest inferred from comment counts. |
| Today's due TikToks | Olympia10:30, eight planets14:30, Earth18:30 past local times, Everyone, no Alarm indicator | Fresh Studio Profile link exactly @typologyquiz, then explicit Posts reload. Each visible views/likes/comments0/0/0. Publication-state evidence, not independent playback or a complete queue audit. |
| Technical discovery | 13/13 sampled endpoints HTTP200; 834 sitemap URLs, all unique; interactive methodology in sitemap and llms.txt | Indexable samples self-canonical/index-follow. Group/Live noindex/nofollow as intended; Group homepage canonical. Not proof of indexing, ranking or AI citation. |
| Qualified opportunities / opt-in inquiries | **1 source-attributed deliberate interactive-start signal; independent audience qualification unresolved** | No interested publisher reply or opt-in inquiry verified. Do not reconstruct dashboard totals from missing data or claim an outreach conversion. |

Due post receipts: [Olympia](https://www.tiktok.com/@typologyquiz/video/7697488146484727056), [eight planets](https://www.tiktok.com/@typologyquiz/video/7697487985692003592), [Earth](https://www.tiktok.com/@typologyquiz/video/7697487830892809490). Tomorrow's Sun10:30, Budapest14:30 and Lisbon18:30 rows remain future, Everyone, with Alarm indicators and distinct permalinks. Bounded first7 post rows only; no upload, edit, delete, retry, ledger mutation or comment action. The 21:00 TikTok operator retains full reconciliation and comment review.

## Four-role handoff and seven-day recommendation

- Scout completed its one daily pass. NAMLE Media Literacy Week October26–30 and EU Code Week October10–25 are researched activity fits, not verified demand, creator eligibility or partnerships. Preserve the toolkit's stale2024 wording and unverified Padlet rules; the Code Week feedback form is not a lesson-submission channel.
- Publisher submitted one NAMLE fit question on its official public contact form. Preserve the receipt and reply-address verification limit; no repeat submission. AAG's October20 inquiry and SciTech's pending review remain awaiting outcomes; retain earlier GA/SPN/Personality Pedagogy records and three held proposals. Approved sender access and inbound replies remain unknown.
- Community reviewed the two existing map/graph study answers; no audience response shown. Exact brand guard still fails. No public mutation or account change, and no repeated request to the owner.
- TikTok morning reconciled six future rows throughOctober22; this audit freshly verifies today's three publication states and tomorrow's three future rows only. Seven motion Stories remain local pending audio/rights/final encoded QA. Matched-age watch time/completion, saves and site-attribution evidence remain insufficient for a winner or cadence change. Retain three daily slots and outreach caps provisionally; improve the first-second question and visual clarity before increasing volume.
- The daily five-quiz automation was activated in a separate owner-authorized turn. This is not evidence that a five-quiz batch was authored or deployed today. Existing ten categories remain the scope; initial250/25 per category was a one-time batch, not a ceiling. Publishing frequency alone is not a ranking guarantee.

## Correction assessment and next cycle's single priority

No evidence-supported on-site correction found. Public discovery checks and expected canonical/robots states pass. No protected result data, released banks, pending editorial content, analytics privacy controls or application code changed. No build/test/deploy is needed for this records-only audit. Last recorded production version3cb37a7b-5993-40dd-a3ff-1625622feca8 remains historical; allocation was not freshly queried.

**Highest-leverage next action: review a bounded legacy play-event coverage patch before implementing it.** Today's organic interactive start is useful progress, but legacy play/result page activity still cannot establish deliberate starts or completions. The source assessment now narrows the work:

| Engine | Existing action boundary to assess | Proposed measurement boundary for review |
| --- | --- | --- |
| Legacy trivia | `TriviaPlayClient.start` and guarded `finishRun` | One deliberate start per actual run; distinguish successful completion from timeout/lives/give-up. Do not infer completion from a results render. |
| Driving | `TakeDrivingClient` and guarded `finish` | Account for direct take-page entry/resume; record completion only after valid scoring, before result navigation. Page load alone is not a deliberate start. |
| Assessments | `TestIntroClient` start/resume links; `TakeTestClient.finishTest` after successful scoring | Define direct-entry semantics and deduplication before adding events. Do not dispatch encoded results, extras, type labels or answers. |

Use a narrow centrally validated event contract with registry-known static identifiers, deduplication and failure-safe transport. Keep editorial, movie and interactive event meanings unchanged. Review the minimum new fields/event names and any privacy-disclosure implications before implementation; this note is a proposal, not an approved schema. Do not collect scores, answers, names, room IDs, raw URLs/queries, reflection data or arbitrary text. Meaningful verification should cover direct entry, resume, replay, invalid scoring, repeated finish/render and allowed canonical context, with stubbed analytics first and the existing production network/receipt gate if released. No analytics activation/account/privacy changes in this audit.

The interactive source check also confirms `trackStart` is called by begin/resume actions and completion has a duplicate guard (`src/components/interactive/QuizPlayer.tsx`); the new Google event is more specific than a pageview, while audience identity and attribution causality remain unproved.

## Evidence and operations dashboard

Evidence directory: `/Users/sudiptasarkar/Documents/Codex/2026-09-10/co/work/growth-audit/2026-10-21/`. Aggregate report snapshots include acquisition, event totals, source-event selections, all-source page breakdowns, the Google-organic filtered start/completion pages, linked Search Console, due-row indicators and public health JSON. No participant answers or private contact data retained. Temporary audit tabs closed; report filters were not saved as report or collection changes.

Dashboard report initially aborted on remote-read401 before writing. One identical bounded retry succeeded; fresh remote JSON readback confirmed the exact Reviewed summary. No authentication/credential change, initialization, counter reconstruction or field-preservation/atomic-write guarantee claimed.
