# Quiz result sharing audit — 2026-10-28

| Result family | Before | Repaired result sharing |
| --- | --- | --- |
| 280 interactive quizzes (solo and pass-and-play) | Combined share/copy, no network choices or cards | One shared panel in `QuizPlayer`: editable preview, separate copy actions, supported native share, nine network choices, and local story/post cards. Accuracy is added only on request. All 280 use the same player. |
| 15 movie trivia sets | No result sharing | Shared panel after result actions. The link is the canonical movie quiz path with no room, seed, or token query; score is optional preview text. |
| Two interest quizzes, physics curiosity and two rapid rounds | No sharing controls | Same shared panel with clean canonical URLs; descriptive summaries or scores are opt-in. Existing questions, timings, scoring and personal-best storage remain untouched. |
| Friend quiz and fool chain creation/play | Link copy and native share only | Same panel with network choices and separate copy actions. Friend score cards remain available in friend-quiz play. Creation and fool-chain sharing remain text/link based; long encoded URLs are not placed on generic cards. The supplied encoded link remains intact. |
| Geography trivia | Native/copy challenge and existing score cards | Added network choices using the existing encoded challenge URL and score text, preserving ghost semantics and existing controls. |
| Editorial weekly quiz | Native/copy challenge and existing score cards | Added network choices using `editionShare`'s existing versioned challenge URL and complete-result text. No edition content or promotion changed. |
| Older assessments | Network choices and result cards already present | Unchanged. |
| Driving practice | Bespoke stumper/challenge sharing | Unchanged by design. |

The controls disclose that opening a network composer sends the message and supplied URL to that service before any post, including encoded data carried by that URL. Network links open service composers; Discord, TikTok, Instagram, and Snapchat copy text for manual pasting. No action claims to post automatically. Generic cards are made locally on demand from the quiz title, edited preview, and caller-supplied URL only. The clean interactive/movie links contain no result data, but edited text and cards can disclose anything the user chooses to add. Friend and geography links can carry encoded challenge, answer or result information. Editorial links identify the versioned edition with a challenge flag; their score is in the shared text, not the URL. No new tracking events, pixels, dependencies, or server storage were added.

Genuine remaining limits: network services may ignore prefilled message fields or block their share composer; the manual message and link remains available. Native share is browser-dependent. The card export reports a local failure when canvas or image download is unavailable, and warns when long text must be shortened to fit.

Other intentional formats retained: daily minis offer compact spoiler-free copy lines; Most Likely To exports local award collages with participant names; live/group/peer-room interfaces share join links or QR invitations rather than public private-room result reports. These are not converted into assessment reports or public score links. This release standardizes the affected result families above, not every invitation or mini-game control.

The shared full panel now covers 300 published quizzes: 280 interactive, 15 movies, two interest profiles, physics curiosity and two rapid rounds. This dated count is not a ceiling. The dormant legacy NewsQuizClient has no route callers; active edition sharing is handled by EditorialQuizClient. Original legacy fingerprint fixtures remain unchanged: the test reverses only the exact 14 additive sharing UI lines across five legacy components and still compares every original character with the initial fingerprint. Missing/duplicated additions and an injected scoring change are explicitly rejected.

## Verified release

Published October28,2026 at17:33:03UTC (11:33Edmonton). Source `464456287e2cfa3b9c025decfa40c609c3f0a3ec`; Worker `b62c4f7f-a8be-4f83-9be8-08ce05c453c2`, deployment `3536f41a-dfef-4110-adc6-89c7a982873a` at100%. See `QUIZ_SHARING_RELEASE_2026-10-28.json` for receipts.

Full `npm run verify`:311tests passed, no failures;10focused sharing tests and strict legacy protections included. All390 snapshotted content files remain identical, and original identity/legacy fixtures have no diff. Fresh independent GPT review found two issues (composer transmission disclosure and draft formatting); both closed. The final five-specialty-quiz/guard review and word-wrap correction review passed. Normal words now stay whole in exported cards; exceptionally long tokens can wrap.

Production build/discovery/active-GA gates:1600HTML pages,864canonical sitemap URLs; all300 full-panel quiz exports load the shared controls.33live responses, including11sharing chunks and the production analytics loader, match the verified export. Handbook remains inR2; sample200PNG with immutable caching. Worker routing/bindings and privacy controls unchanged.

Browser checks covered interactive, movie, AI-interest, physics, rapid, friend, geography and archived editorial results.320/390mobile layouts had no overflow; measured shared buttons were at least44px high. Production FE29 completed, all sharing controls visible and canonical link copying confirmed with the page focused; no console errors. All such runs are operatorQA. Actual1080×1920 and1080×1080 PNG pixels were inspected with real browser fonts, long titles and a500-character emoji draft. Native filesystem download completion remains unconfirmed because the automation download-event API timed out; the UI truthfully says download requested. Service composers/native sheets remain platform-dependent, and copy-only choices require manual pasting. No external messages or posts were sent.
