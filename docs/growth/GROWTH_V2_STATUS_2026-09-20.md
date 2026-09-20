# Growth Plan v2 status — September 20, 2026

This is a working status record. It distinguishes shipped behaviour from drafts, external dependencies, and research that has not begun. A preparation task, a staged asset, or a successful build is not public publication by itself.

## Shipped and verified

| Area | Status | Evidence |
| --- | --- | --- |
| Mobile-first discovery and navigation | Live | Compact home discovery, grouped navigation, friends hub, search/filter improvements, light/dark contrast work, and mobile browser checks are recorded in `docs/ux/MOBILE_REDESIGN_2026-09-11.md`. |
| Editorial play and sharing foundation | Live | The four-format player, immutable editions, saved progress, score-grid cards, local follows, calendar files, and prediction infrastructure are recorded in `docs/editorial/GROWTH_STEP2_RELEASE.md`. |
| Assessment claims and private reflection | Live | Evidence labels, release versions, corrected Mini-IPIP scoring/anchors, methodology, and browser-local reflections are recorded in `docs/research/ASSESSMENT_GROWTH_RELEASE.md`. This is not empirical validation of any site measure. |
| Search and LLM discovery basics | Live | Canonicals, noindex boundaries, sitemap validation, and generated `llms.txt` are recorded in `docs/growth/DISCOVERY_RELEASE_2026-09-13.md` and `GROWTH_PLAN.md`. |
| Privacy-bounded GA4 | Live and browser-checked | The active stream, stripped page locations, consent defaults, and network capture are recorded in `docs/growth/GA4_ACCOUNT_CHECK_2026-09-13.md`. Reporting data remains too small to support performance claims. |
| Publisher outreach | In progress | One invited form submission and one individual inquiry are recorded in `docs/growth/OUTREACH_2026-09-13.md`. Neither is a confirmed listing or referral. |
| TikTok pilot | In progress | The account setup, original asset batches, schedule receipts, and operating rules are in `docs/growth/tiktok/`. Scheduling and metrics collection require an unlocked Mac and native TikTok Studio access. |

## Remaining work

### Ready for autonomous product work

1. Audit the ten existing high-share personality results and ship the highest-value missing share/compare/next-play improvement. The first slice replaces the generic result-page "Try another" trio with deliberate companion quizzes for those ten results; it uses existing test pages, deduplicates options, guarantees three choices, and keeps a generic fallback for every other result.
2. Collect a clean baseline from GA4 and Search Console once enough independent traffic exists. Compare qualified visits, starts, completions, shares, challenge opens, and returns. Do not use operator traffic as a growth result.
3. Reconcile TikTok Studio before preparing more posts. Count only native scheduled or published rows, avoid duplicate content, and record missing metrics as `null`.

### Needs exact-content review or external evidence

1. Earth and Space sampler: finish source-body, date, media-rights, and diagram review; create a hash-bound readable approval package. The draft cannot be promoted until exact content has the required editorial approval.
2. World, US, and Canada recurring editions: finish independent sourcing and salience review, then use the same approval gate. Existing regional drafts remain held.
3. Real prediction pilot: choose a specific family-suitable event only after official schedule, rating, questions, cutoff, settlement source, review record, and revision-history handling are all complete.
4. Publisher follow-through: confirm the SPN email if it arrives; do not resubmit while pending. Becoming Sigma needs a real telephone number. Do not send bulk campaigns, comments, or automated follow-ups.

### Needs a research programme, rights resolution, or specialist review

1. Resolve reproduction/permission status for CRT and VVIQ before expanding or promoting them.
2. Assessment Q3–Q5: separately consented research, privacy/deletion lifecycle, sample design, cognitive interviews, calibration, retest/validation, and a controlled benefit study. Browser-local reflections are not research collection and cannot establish accuracy or outcome improvement.
3. Adaptive scoring, population percentiles, and accuracy claims stay out of production until version-specific evidence supports them.

## Work routing and review protocol

| Work | Primary model | Reviewer | Required check |
| --- | --- | --- | --- |
| Reconnaissance, backlog triage, small inventories | GPT-5.6 Luna | Maintainer | Evidence links and exact file paths |
| Routine implementation | Claude Code Sonnet | Claude Code Opus | Scope gate, tests, typecheck, lint, humanizer pass for public copy |
| Complex architecture, measurement/privacy decisions | Fable only when needed | Astra/Opus | Written decision record and threat/edge-case review |
| Independent code, security, or quality review | Claude Code Opus | Maintainer | Review findings resolved or recorded |
| Targeted research and creative second opinions | Grok 4.6 | Source check by maintainer | Primary sources, no invented trend metrics |
| Images and video | Codex ImageGen or Grok | Visual/mobile QA | Rights, safe-area, contrast, and disclosure checks |
| Economical bulk/fallback work | OpenCode Go | Sonnet or Opus for consequential changes | No secrets, private results, or unreviewed copy passed to providers |

All public copy receives the Humanizer pass: concrete claims, specific sources where claims matter, natural sentence rhythm, no inflated importance, no invented authority, no generic calls to action, no unsupported psychology language, and no emoji or em-dash styling where it conflicts with the house style.

## Release discipline

- Treat each implementation as one scoped change. Record the scope, touch list, and its defined verification gate before editing.
- Preserve unrelated Vermont/Wyoming driving-bank work and do not stage it with Growth Plan commits.
- Run `./scripts/mac-run.sh npm run verify` after code changes. Build and verify run sequentially because the build regenerates route types.
- Push only verified commits. Deploy only when the commit changes the public application; social operations documents and local media do not need a website deployment.
- Record actual deployment version, live checks, and unresolved limits. Do not call a draft, a queued social asset, a short test, or a report snapshot a success metric.

## September 20 release: result next-play paths

The ten named high-share result pages now receive three related existing quizzes instead of the same generic next-play trio. The mapping is keyed by test, keeps the generic fallback for every other result, removes duplicates, and fills from the fallback so three options remain visible. The work adds no score changes, network calls, analytics fields, or new claims.

Claude Opus reviewed the implementation and found no release blocker. Its naming, fallback, label-consistency, and cultural-fit feedback was incorporated. TypeScript passed, assessment lint completed with no errors, all 16 assessment-quality tests passed, and a direct registry check confirmed all 27 curated destination routes. A local browser check of a Group Chat Archetype result showed Friend Role, Texting Style, and Social Battery as the three links, with HTTP 200.

The original working tree's first full run stopped at `test:analytics`: its tracked GA4 route manifest is stale because unrelated uncommitted Vermont/Wyoming driving additions alter the source route inventory. It was not regenerated or staged. A clean worktree at the release commit then passed the complete gate: 31 editorial, 10 Worker, 2 prediction-client, 16 assessment, 14 analytics, and 3 discovery tests. The only lint findings were three pre-existing raw-image warnings.

The same clean worktree built 1,248 static routes, passed the 536-route sitemap/discovery check, and deployed to both domains. Cloudflare version `5220a6dd-f428-42f0-9fd8-e12a69bdd377` is the release receipt. A live Group Chat Archetype result request returned HTTP 200 and the deployed client bundle contained the new Texting Style recommendation path.

## Search Console baseline: September 20

Google Search Console's available performance chart covered September 1–18, 2026. It reported 27 web-search clicks, 914 impressions, a 3% click-through rate, and an average position of 37.9. The short window and low volume make this a baseline, not a verdict on growth work.

The home page led recorded clicks (9 from 158 impressions). Other early entry points included Massachusetts driving (5 from 10), Doubutsu Uranai (3 from 22), CRT-7 (2 from 45), and Quebec driving (2 from 7). Queries with visible demand but no click included “what is my mental age” (17 impressions), “how old am i mentally” (10), and “vata pitta kapha test” (8). Any future page changes should start with an editorial and evidence review of the relevant page, rather than copying the query into generic SEO text.

Indexing reported 587 indexed and 28 not indexed URLs. Twelve alternate-canonical URLs, nine redirects, and two noindex URLs match the established discovery boundaries. The two “discovered, currently not indexed” examples were a West Virginia driving take route and the Conflict Style test; neither had a recorded crawl date. The two “crawled, currently not indexed” examples were `favicon.ico` and `manifest.webmanifest`, which do not need index coverage. No validation request was submitted because no proven defect was identified.
