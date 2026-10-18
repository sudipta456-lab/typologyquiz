# Interactive quizzes: code review, North American research, and delivery plan

Implementation update: all 250 playable quizzes are covered in the [October 18 release record](quiz-expansion-250/RELEASE_2026-10-18.md). This document preserves the research and planning stage; implemented banks and release evidence take precedence.

Prepared October 18, 2026, America/Edmonton. Checkout HEAD: `3a191783`, with pre-existing local operational files preserved. Status: proposed product plan, not an implementation or publication approval. External sources were accessed October 18 unless a different observation date is explicitly stated.

## Confirmed scope — operator clarification, October 18

All proposed formats are for **new questions and new quizzes**. Existing published quizzes retain their questions, formats, scoring, results, URLs and saved-progress behavior. Create separate titles, slugs and versioned content for the additions. Reuse compatible components and verified source facts where useful, but author new question sets; do not convert or replace existing quizzes. Existing-content review findings are separate observations, outside this expansion. This clarification supersedes earlier suggestions to correct or instrument existing quizzes as prerequisites for these pilots.

## Recommendation

Build three recognizable experiences: **a daily challenge, a playful personality journey, and a challenge to send to friends**. Give each a few purposeful interactions and an understandable result. Reuse compatible movie, geography, editorial, and daily-game components. Add separate scenario and forced-choice support for new quizzes while preserving the current assessment engine’s behavior.

The first release should contain **one new mixed-format movie quiz and one new scenario-based Group Chat quiz, both with newly authored questions**, with deliberate-start/completion measurement. Next add a three-layer geography matching game. Evaluate each pilot independently. Expand a pilot into a recurring series only after observing completion, usability, and return play; the two different topics are not an A/B test.

This is a targeted product/architecture review, not a comprehensive security audit, psychometric validation, or factual verification of every question. Registry counts were computed from the current checkout; representative content and core scoring/player paths were inspected. Public trend research prioritizes April–October 18, 2026, with older evidence explicitly marked as background. US and Canada are the initial English-language market; Mexico is included in the research and proposed localization. Evidence does not establish uniform demand across every North American country or demographic.

## What exists today

| Area | Verified inventory | Product implication |
| --- | --- | --- |
| Main assessments | 67 tests; 1,057 authored questions; 1,050 Likert and 7 numeric. 46 use type scoring, 14 spectrum scoring, 7 special scoring paths. | 99.3% of authored questions in this registry use Likert responses. A spectrum **result** is not a slider **question**. These counts exclude the separate interest quizzes. |
| Ordinary trivia | 63 registry entries: 56 type-in and 7 choice-mode map quizzes. Datasets: US states 28, countries 27, Canada 5, planets 1, first-20 elements 1, all elements 1. | Many entries are variants/letter pages over shared banks, not 63 independent subjects. Maps and timed recall are strengths; additional alphabet pages offer less format novelty. |
| Movies | 15 quizzes, 120 questions, 8 per quiz. Original clues, explanations, source records, seeded presentation and group integration. | Strong low-cost starting point for mixed rounds. Existing source facts can support newly authored questions after semantic rechecking; retain all current movie question sets. |
| Editorial | Four implemented question kinds: choice, image-choice, order, match. Matching has tap-pairing and select controls; ordering has move buttons. | Reuse these controls and validators. Dragging is not currently implemented by those controls and is not necessary for the first pilot. |
| Published editorial content | Two legacy editions dated September 10; the format sampler remains a draft. | Engine support must not be described as an already-published mixed-format collection. The live home accurately calls news an archive. |
| Daily | Three date-seeded minis: Anagram, Quick Pick, This or That; plus a daily Likert check-in. | Add a separately identified new daily series alongside the current minis, preserving their banks and rules. This or That tests facts; it is not yet a personality dilemma. |
| Branching | `showIf` follow-ups occur in attachment-style, care-language, procrastination-type and enneagram-lite. | Simple conditional presentation exists. It is not calibrated adaptive assessment. |
| Social | Friend quiz, comparison, group rooms, live host/player/screen flows, sharing and local progress. | Build on existing invitations and seeded rounds. Multi-format live play is additional work, not an automatic consequence of solo support. |
| Driving | 58 jurisdiction summaries. | Established utility category; keep legal facts and jurisdiction checks separate from entertainment experiments. No full driving-bank fact audit was performed. |

Code anchors: `src/lib/types.ts`, `src/lib/tests/registry.ts`, `src/lib/tests/score-utils.ts`, `src/lib/trivia/registry.ts`, `src/lib/trivia/movies.ts`, `src/lib/editorial/{types,score,validate}.ts`, `src/components/editorial/`, `src/lib/minis/daily.ts`, `src/app/daily/page.tsx`, `content/published/index.json`, `src/lib/driving/summary.generated.ts`.

## Findings that affect the plan

1. **Separate review finding — excluded from this expansion.** `src/lib/tests/group-chat-archetype.ts:10` assigns `direction: -1` to “If I don't organize it, it quietly never happens.” Holding the other two Planner answers at 3, changing this answer from 1 to 5 lowers the Planner score from 67 to 33. The behavior is reproduced through `scoreLikertAxes`; its direction conflicts with the wording. Record this for a separate future maintenance decision; do not change the item or make its correction a prerequisite for the new quizzes. A passing structural test cannot establish semantic correctness across the item bank.
2. **Measurement is insufficient for selecting winners.** `src/lib/analytics.ts` explicitly supports editorial and movie events; ordinary personality/trivia/driving starts lack consistent coverage. The October 17 growth record reports 23 users and 67 page views for October 10–16, with operator traffic not excluded and no observed start/completion rows. That is a prior recorded aggregate, not a new GA retrieval or proof of zero gameplay. Instrument the new quizzes from launch; changes to existing quiz measurement are outside this plan.
3. **Main assessment answers are scalar.** `QuestionType` is `likert | numeric`, and answer/scoring paths expect numbers. Rankings, selected option IDs and pair maps need typed contracts and independent scoring. Do not disguise all new interactions as 1–5 values.
4. **Editorial matching and ordering are all-or-nothing.** `scoreQuestion` returns a boolean; the existing matching contract is a complete one-to-one map. Three-layer links, many-to-one buckets and partial credit require explicit new contracts. Do not silently change old editions' scoring.
5. **Content claims need an editorial pass.** Titles such as Mental Age, overthinking and relationship archetypes are entertainment/self-reflection. For all new content, avoid unsupported precision language, deterministic cultural associations and moral labels; a disclaimer does not make an unsupported claim precise. Existing copy review is outside this expansion. Keep research-based source instruments distinguishable from playful original quizzes.
6. **Preserve existing privacy boundaries.** Personality results, answer vectors, reflection text, names and room credentials must not enter general analytics. The existing movie completion event permits a bounded `correct_count`; retain that documented exception for the current movie family. Proposed new measurement collects starts/completions without scores unless separately specified and reviewed. Existing percentiles in trivia are estimated curves; they are not measured population norms. New games should start with score and personal best, not invented “top 1%” claims.

## What the market evidence actually supports

Evidence labels: **engagement** = observed use/return/viewing; **product signal** = a provider launched a format; **interest** = search/survey/ranking evidence; **hypothesis** = our proposed application. These labels are not interchangeable.

| Opportunity | Dated evidence and geography | Strength and limitation | Application |
| --- | --- | --- | --- |
| Mixed music/fandom quizzes | Spotify launched expanded Music Quiz October 6, 2026, including the US and Canada; its October 15 update adds Spanish rollout including Mexico. More than 2,000 artists; trivia, artwork reveals, audio recognition and sharing. [Spotify announcement](https://newsroom.spotify.com/2026-10-06/music-quiz-expansion/) | Very recent, directly relevant **product signal**. No completion, retention or quiz-play counts disclosed. | Artist knowledge and fan challenges; begin with original text questions, then cleared media. |
| Short daily games with a social comparison | LinkedIn's March 18 Patches announcement reports millions playing daily and 86% returning the next day. [LinkedIn](https://news.linkedin.com/2026/LinkedIn-Announces-Patches-A-New-Thinking-Oriented-Game-Inspired-by-Zip/LinkedIn-Announces-Patches-A-New-Thinking-Oriented-Game-Inspired-by-Zip) | Direct platform-reported **engagement**, global and earlier than the main window; cohort methodology not provided. Not a retention target for a small independent site. | Existing daily minis deserve a clearer entry point and versioned friend challenges. |
| Daily puzzle habit at scale | January 21 AP reporting gives over 11.2 billion NYT Games plays in 2025 and 4.2 billion Wordle plays. [AP via Spectrum News](https://ny1.com/nyc/all-boroughs/ap-top-news/2026/01/21/this-just-in-from-the-new-york-times-its-first-2-player-game-and-an-evolving-business-model0) | Strong historical **engagement** background; worldwide play counts, not unique people or recent North American growth. | Borrow short rounds, a common daily challenge and spoiler-free sharing; do not clone puzzles or forecast comparable traffic. |
| Animated-film familiarity and nostalgia | Netflix's October 5–11 country lists place Ice Age fourth in the US, fifth in Canada and second in Mexico; several sequels also appear. [US](https://www.netflix.com/tudum/top10/united-states), [Canada](https://www.netflix.com/tudum/top10/canada), [Mexico](https://www.netflix.com/tudum/top10/mexico) | Recent country-specific viewing **interest**; rankings do not give quiz conversion or prove organic growth independent of catalog availability. Pages change weekly. | Pilot animated friendships, character-to-world matching and release ordering using general-audience source material. Recheck the list before producing topical copy. |
| Sports geography and fandom | Bell Media's July 21 report says World Cup coverage reached 30.5 million unique Canadians, with 1.6 million average viewers per match, over 50% above 2022. Preliminary Numeris data. [Bell Media](https://www.bellmedia.ca/the-lede/press/bell-media-smashes-records-with-canadas-biggest-fifa-world-cup-ever-as-fifa-world-cup-2026-reaches-more-than-30-million-canadians-on-tsn-rds-ctv-noovo-and-crave/) | Recent local **engagement in sport**, not in quizzes. Tournament is over; do not pitch it as an upcoming event. | Host-city maps, tournament recap and sports vocabulary. Prefer evergreen geography with a dated recap edition. |
| Regional differences within that fandom | A March 2026 Léger survey reported World Cup awareness of 88% in Mexico, 69% Canada and 57% US. [Original report](https://leger360.com/wp-content/uploads/2026/03/LEGER_World_Cup_Survey_CAN-US-MEX_March2026.pdf) | Pre-event, country-specific **interest**, not current engagement. Older context, not a forecast. | Avoid treating the three markets as one audience; review Spanish vocabulary and local sports emphasis. |
| Visual identity, aesthetic and cozy-season choices | Pinterest's October 6 Beauty report describes personal aesthetic specificity, nostalgic scents, autumn colors and expressive choices. [Pinterest](https://newsroom.pinterest.com/news/beauty-trend-report-2026/) | Recent platform **interest** signal. Retrieved text does not establish country-specific denominators for reported search changes; do not label them US/Canada statistics. | Original illustrated “Build your cozy weekend” and moodboard preference games. Describe taste, not inferred biology or psychological diagnosis. |
| Campus/room identity | Google's July 16 US report records a 525% rise in “dorm designer” searches over the preceding month. [Google](https://blog.google/products-and-platforms/products/shopping/back-to-school-trends/) | Country-specific **search interest**, seasonal; not ongoing October growth or quiz engagement. | Roommate scenarios, room-style card sorting, study-break choices. Keep as a seasonal template for future campus cycles. |
| Food, travel and seasonal entertainment | Google's June 23 US Summergeist reports vacation-book searches up 110% and summerween-movie interest more than doubling over the preceding month. [Google](https://blog.google/products-and-platforms/products/search/summergeist-google-trends/) | Recent-season **search interest**, now historical. Does not establish today's top quiz topic. | Travel preferences, bookish/cinema dilemmas, general-audience seasonal rounds; refresh seasonal facts. |
| Fandom across formats | Deloitte's March 2026 report finds 55% of fans engage across platforms, about 70% among Gen Z/millennials. Survey: 3,575 US consumers, fielded October–November 2025. [Deloitte, including methodology](https://www.deloitte.com/us/en/insights/industry/technology/digital-media-trends-consumption-habits-survey.html) | Representative weighted US survey **background**; not a study of quizzes and not recent-month fieldwork. | Connect knowledge rounds and optional fan-role journeys while keeping their scoring separate. |
| Scenario and visual personality formats | BuzzFeed’s current quiz hub features scenario-based personality and visual-recognition formats. [Quiz hub](https://www.buzzfeed.com/quizzes) | Qualitative competitor observation only; no representative engagement rates. | Supports prototyping, not copying questions or claiming proven uplift. |

There is no defensible public dataset here ranking all quiz formats by recent US/Canada/Mexico engagement. Forced choice, sliders, matching and AI analysis cannot honestly be ranked by conversion from this evidence. The priority below combines evidence relevance, existing assets, effort and testability. It is a product judgment.

## Prioritized content slate

| Order | Proposed experience | Audience and interactions | Why now / reusable foundation |
| --- | --- | --- | --- |
| 1 | **Movie Night: Match the Story** | Three short sections: 3 original clue choices, 1 four-pair character/world match, 1 three-item chronology puzzle. Target 2–3 minutes. | Current animated-film signal; new movie questions using compatible four-format editorial controls. Start with a single coherent topic. |
| 2 | **Your Group Chat Under Pressure** | 4 scenarios, 3 forced-choice pairs, 1 ranking of three actions. Target 2–3 minutes. | Strong fit to the brand and social sharing; create an independent question set and result definitions; preserve the existing Group Chat Archetype quiz. Engagement benefit remains a hypothesis. |
| 3 | **North America: Connect the Three** | Link city → state/province → country; then locate a city on a map. Target 90–150 seconds, untimed default. | Existing geography data/maps plus the user's layered-matching idea. Add verified Mexico data rather than imply it exists today. |
| 4 | **Build Your Cozy Weekend** | Pick original scene cards, rank priorities, choose between two social plans, place two semantic sliders. | Visual identity/seasonal hypothesis; useful prototype for image selection and rankings. Rename/refresh the theme after the season. |
| 5 | **Fan Knowledge + Fan Role** | First complete a short music/movie knowledge section; optionally take a separate scenario journey about how you participate in fandom. | Recent Spotify format signal. Keep knowledge score and preference profile visibly distinct. |
| 6 | **Daily Five** | A curated 5-task mixed round inside the existing daily destination; 3 choices, 1 matching or sorting task, 1 ordering task. | Daily engagement background; one reliable series is more valuable than many unsupported daily promises. Start twice weekly while building a reviewed backlog. |
| 7 | **Road Trip Co-Pilot** | Destination cards, ranking, navigation/social scenarios, optional map knowledge section. | Combines existing geography with approachable preference choices. Separate preferences from navigation knowledge. |
| 8 | **Party Categories** | Original category/points board using newly authored, reviewed general knowledge and movie questions, initially local host-led. | Uses existing group/live foundations; increased room/scoring complexity makes it a later slice. |

Reserve list: everyday-science sorting, a new timeline-ordering series, sports team/city grids, book-club dilemmas, food-region matching, work-style scenarios. These are plausible evergreen topics, not all verified current trends. Halloween is close to the research date: use it only if the small pilot can clear QA in time; do not rush a new engine for a two-week window.

## Decisions for every requested format

P1 = first pilots; P2 = after evidence from pilots; P3 = defer until a concrete need. Effort is relative to this repository, not a delivery quote.

| Format | Decision | Implementation/scoring requirement |
| --- | --- | --- |
| Forced-choice pairs/triplets | P1; medium | New option-ID answer and outcome weights. Begin with pairs; add most/least triplets only after testing comprehension. |
| Scenario/situational choice | P1; medium | Short scene and 3–4 equally plausible actions. Preference choices have no correct answer; knowledge scenarios use sourced keys. |
| Spectrum slider | P2; medium | Explicitly chosen value, labeled poles and keyboard/tap controls. Do not silently submit a default midpoint. |
| Semantic differential | P2; medium | Same accessible range primitive with genuinely opposing concepts. “Calm/energetic” may describe context, not an exclusive trait. |
| Drag categorization | P2; medium | New many-to-one bucket contract; tap item then bucket, plus keyboard alternative. Define capacities and whether items may remain unassigned. |
| Drag matching | P1 for existing tap matching; P2 for drag | Existing one-to-one match is reusable. Drag is optional enhancement. Layered/many-to-many matching needs a distinct type. |
| Hotspot | P2; medium/high | Normalized coordinates/regions, responsive hit testing and equivalent nonvisual task. Do not put the answer in alt text. |
| Would You Rather | P1; medium | Reuse forced-choice primitive; show trade-offs. No claim of “what most people chose” without real response evidence. |
| Matrix/grid ratings | P3; low/medium | Dense on phones; small progressive groups instead of a wide spreadsheet. Preserve per-item labels. |
| Card sorting/ranking | P1 short ranking; P2 buckets | Reuse ordering presentation but use preference scoring, not a correct-order key. Limit early rankings to 3–4 items. |
| Image/visual matching | P1 image-choice; P2 image-pairs | Reuse provenance-aware image options; matching must explicitly support media. Use original/cleared visuals and text alternatives. |
| Branching/adaptive | P2; medium/high | Rule-based branches first, with exhaustive reachability and stale-answer cleanup. Do not call it computerized adaptive testing. |
| Video/audio stimulus | P3; high | Cleared assets, explicit play, captions/transcript or equivalent alternative, mobile bandwidth controls. |
| Map click | P1 existing maps | Reuse region geometry, keyboard/list alternative, sufficient small-region targets. New city coordinates/Mexico coverage need research. |
| Table/grid fill | P2; medium | Typed cells, accepted aliases, per-cell feedback; responsive row-by-row mode. Distinct from rating matrices. |
| Jeopardy-style board | P3; high | Use an original category-board identity. Host turn order, point values, reveal/lock/rejoin states; solo version before multiplayer. |
| Family Feud-style guessing | P3; high | Requires actual survey question, sample, date and answer normalization. A host-authored list must be labeled as such, never “survey says.” |
| Timed/speed rounds | Existing; P1 reuse | Optional challenge mode; ordinary personality journeys untimed. Compare scores only under equivalent rules. |
| Open-ended + AI analysis | P3; high | Keep private reflection available without AI. Any later AI mode needs explicit data handling, stable rubric/version, evaluation and low-confidence fallback. Never infer diagnosis or objective personality truth. |

All drag interactions need a simple non-drag pointer alternative in addition to keyboard operation. [W3C guidance](https://www.w3.org/WAI/WCAG22/Understanding/dragging-movements.html)

## A concrete layered-matching design

**Connect the Three — practice example:** three shuffled columns: four city cards, four region cards, and three reusable country cards. The explanation table repeats Canada to show two paths; the interactive board has one Canada target.

| Cities | Regions | Countries |
| --- | --- | --- |
| Vancouver | British Columbia | Canada |
| Austin | Texas | United States |
| Guadalajara | Jalisco | Mexico |
| Toronto | Ontario | Canada |

The table above is the answer explanation, not the starting layout. Country targets are reusable: Canada has two incoming links. This is deliberately **many-to-one**, which the existing editorial `match` validator cannot express. The MVP can first ship four city→region pairs with the existing one-to-one player; the full three-column board is the next slice.

Interaction: tap a city, tap its region, then tap its country; show the assembled path below the board. Allow undo until “Check links.” On narrow phones, use two sequential pairing steps and a readable path list rather than crossing lines across three tiny columns. Keyboard and select controls offer the same task. Mistakes remain visible with a short source-backed explanation.

Store two maps keyed by source node: city→region (one-to-one, each region used once) and region→country (many-to-one, each region has exactly one country). Display chains by traversing these maps, rather than storing independent chains that could contradict each other. Score each of eight edges independently, maximum 8, and display city/region accuracy and region/country accuracy separately so the easier layer is visible. Report complete chains as a separate descriptive count, not extra points. The four-pair MVP has a forced last pair by elimination; label it as a warm-up rather than claiming four independent knowledge observations. Distractors or weighted layers require a later version and usability/difficulty testing. A wrong city→region link must not automatically erase an independently correct region→country link. Do not reveal corrections until submission; otherwise label the next step as practice and exclude it from competitive comparison. Version the scoring policy and pin shared challenges to the same content, rules and shuffled seed.

Follow-up thematic versions: character → story world → film; inventor → invention → era; food → region → country. These need explicit relations and ambiguity review. Shared settings, adaptations, disputed origins and remakes can make apparently simple answer keys unfair.

## A concrete personality journey

**Your Group Chat Under Pressure** uses three sections, eight tasks, and no Agree/Disagree screen:

1. **What happens next?** Four short scenarios. Example: “Saturday plans are still undecided at 5 pm. What do you do first?” Options: propose two times and a place; message the quiet friend; make the indecision funny; ask who is still interested. No option is framed as the only caring or responsible choice.
2. **Pick your trade-off.** Three pairs. Example: “Keep a loose plan with room for surprises” versus “Set a plan so everyone can relax.” Use contexts that do not merely repeat the first section.
3. **Choose your priorities.** Rank three actions for a friend arriving late: keep the group informed, check that the friend is okay, adjust the plan. This captures relative priorities, not a test of friendship quality.

Result: a playful leading role, a secondary tendency when supported, two concrete observations tied to the chosen situations, and one optional reflection prompt. If scores are close, show a mixed result. No percentages presented as probabilities or population standing. Sharing is user-initiated and previews the exact public card; raw answers remain private.

Scoring proposal: each option has a reviewed vector of outcome contributions, totaling one point per task. A three-card ranking allocates 2/3, 1/3 and 0 across the cards’ declared outcome vectors, still totaling one point. Weight tasks equally, not sections; section totals are therefore 4:3:1. Review equal attainable minimum/maximum and comparable exposure for each archetype across the complete form, not just whether every result can be reached. Normalize each outcome against its declared attainable range. Provisional rule: show a leading role only with at least two supporting tasks and a lead of 0.10 over the next normalized score; otherwise show a mixed result. Show a secondary tendency only with at least two supporting tasks and normalized score of at least 0.50. Do not display those internal values as percentages. These thresholds are editorial hypotheses, not measurement precision. Eight tasks provide only a lightweight reflection; if the content cannot support balanced exposures, reduce the number of roles or increase tasks rather than force a confident label. Check option-position invariance, all outcomes, ties, thresholds and contradictions with hand-computed fixtures.

Forced choice is useful but not intrinsically more valid. A 2019 meta-analysis found reduced faking under suitable design/scoring; a 2026 synthesis of 49 samples highlights trade-offs between relative scores, validity and faking resistance. These studies concern assessment conditions, not conversion improvements on a casual quiz site. [Cao & Drasgow](https://pubmed.ncbi.nlm.nih.gov/31070382/), [Speer et al.](https://onlinelibrary.wiley.com/doi/10.1111/ijsa.70053)

Scenario answers are still reports of intended behavior. Sliders do not automatically create more precise measurement. Preserve established instrument wording/anchors and versions; release new playful scenario quizzes separately from all existing assessments, including Mini-IPIP.

## Engineering plan

The current Next.js configuration is static export (`next.config.ts`). The installed Next 16.2.10 static-export guide was consulted. Build-time content and client-side play fit this architecture. Live room authority, survey aggregates or future AI processing belong behind the existing Worker boundary with explicit services; do not assume a runtime Next API route is available.

Avoid a rewrite into one giant engine. Establish shared **interaction controls**, with separate **knowledge correctness**, **preference outcome**, and **research-assessment** scoring. Keep specialist map, live and driving engines behind adapters where useful. A session layer may compose sections once two pilots prove the common needs.

Suggested new contracts: stable content ID/version, sections, discriminated item/answer types, per-item score policy, media provenance, locale, source/check date and explicit branching rules. New answer envelopes carry a kind tag; progress includes content/scoring version and seed. Validate against the exact item definition, not just the envelope. Do not reuse numeric `AnswerMap` or Likert-range `ShowIf` for option-ID preferences. Keep old editorial progress readers working instead of reinterpreting their untagged answers. Do not change any existing Group Chat content, scoring or report version as part of this expansion. Historical score-only links must continue to render their saved scores without rescoring or silently adopting new labels. Test versioned and unversioned legacy links. Publish the new scenario experience under a distinct proposed slug, `group-chat-scenarios`, with its own initial versions. A new route or mixed format also changes metadata, discovery manifests, sharing and possibly group catalogs; account for those integration costs.

| Slice / owner scope | Proposed touch list | Done when |
| --- | --- | --- |
| A: measurement for new quizzes / site-tooling + quiz-engine | Additive events in `src/lib/analytics.ts`, new-quiz manifest entries, new player deliberate-start handlers and analytics tests. | Event names/validators/allowlists specified; operator/test traffic excluded or separately segmented; start/resume/restart semantics verified; network payload and GA receipt checked separately. Establish each new quiz’s own baseline after launch; no changes to existing quiz content or handlers required. |
| B: mixed knowledge pilot / quiz-engine + editorial-content + site-tooling | Existing editorial controls/scorer/validation; a new reviewed pilot edition under `content/`; route/hub/discovery and analytics wiring. | Proposed series `movie-night-mixed`, route `/trivia/mixed/movie-night/`, page group `trivia`, and new validated `mixed_quiz_start`/`mixed_quiz_complete` events. Do not route it through the news archive or the eight-question movie event contract. Five-task round passes phone/keyboard, sources, rights, versioned resume, locking and exact-version sharing. |
| C: preference pilot / quiz-engine + social + site-tooling | New preference item/answer/outcome module and controls; new Group Chat Under Pressure question/result data; take/result/share adapters and tests. | All outcomes reachable; scoring stable under option shuffling; unknown answers rejected; mixed results handled; old assessment links still resolve. |
| D: layered matching / quiz-engine + editorial-content | Distinct layered-link type, edge validator/scorer and responsive control; geography data with provenance. | Reusable targets, invalid/duplicate edges, undo, partial credit and same-seed comparison verified. |
| E: recurring/social additions / social + site-tooling, worker-services only if necessary | New daily-series content, versioned generator/storage namespace and discovery entry; compatible sharing and new-quiz group/live adapters if justified. | Existing daily banks, rules and progress are unchanged; new reset policy is explicit; old challenges replay correctly; no repeated reward credit; group rules remain identical for participants. |

These are proposed future cross-cutting touch lists, not edits performed in this review. Scope changes should be separate reviewable releases. Use `./scripts/mac-run.sh` for commands. Verify each affected scope, then full `npm run verify`, then build/discovery checks sequentially before a release. For interaction changes, include mobile Safari/Chrome, keyboard/screen reader, reduced motion, blocked storage, interrupted/resumed runs and expired/mismatched versions. New live formats additionally need authoritative scoring and reconnect/late-join testing.

## Suggested sequencing and effort

Estimates assume one implementer plus editorial/review time; they are planning ranges, not commitments. User recruitment and rights clearance are outside engineering estimates.

- **Week 1, 3–5 engineering days:** measurement for new quizzes, new-content source/rights shortlist and two small interaction prototypes. Recruit 8 testers across mobile/desktop and US/Canada; gather Spanish-language comprehension feedback before a Mexico pilot.
- **Weeks 2–3, 6–10 days:** mixed movie pilot and preference-engine pilot; review original content and scoring; small release after checks. Do not migrate all 67 assessments.
- **Weeks 4–5, 5–8 days:** layered matching, only if earlier pilots are usable; refine results/sharing based on observed confusion.
- **Weeks 6–8, 5–10 days:** strengthen daily discovery and cadence; add one further edition only where evidence supports it. This is an engineering window, not a promised statistical decision date: at the recorded traffic level, 100 eligible starts per pilot may take months. If samples remain small, continue moderated iteration and hold expansion. Hosted boards, survey-answer games and AI remain separate later estimates.

Capacity rule: maintain approximately 70% evergreen content, 20% refreshed seasonal/fandom topics and 10% format experiments. This is a proposed allocation, not a measured industry benchmark. Begin with at most two new reviewed experiences per week; require a backlog before promising daily editorial production.

## Measurement and decisions

At the current recorded traffic level, conventional A/B tests will take time. Start with moderated observation and descriptive cohorts; do not declare a winner after ten visits. Compare the same topic, difficulty, promotion source and device distribution where possible. A change in topic and format together cannot isolate a format effect.

| Metric | Definition / decision use |
| --- | --- |
| Start rate | Deliberate starts / eligible landing visits; never infer from a route mount. |
| Completion | Completed runs / started runs, with resume/replay rules fixed before counting. |
| Section friction | Fixed section-index progress, time buckets and observed usability failures; collect no chosen options or inferred traits in analytics. |
| Return play | Returning active visitors over a fixed 7-day window using existing permitted measurement; private local streaks can remain local. Do not introduce fingerprinting. |
| Sharing | Share-button intent, successful transport where observable, and friend challenge starts as distinct measures. A copied link is not a verified share or friend conversion. |
| Content quality | Ambiguous item reports, source failures, misleading results and time to correct; independent of dwell time. |

Proposed early operating gates, **not external benchmarks**: at least 7 of 8 moderated testers can complete each key control without instruction; no unresolved critical accessibility/scoring issue; after roughly 100 eligible starts per experience, review completion against a provisional 65% minimum and inspect uncertainty/source mix. Revise or retire a confusing format even if it increases time spent. Expand only after acceptable quality and evidence of completion or repeat interest. A 100-start sample is a descriptive checkpoint, not sufficient power for small conversion improvements.

New analytics schemas should allow only approved static quiz/format IDs, fixed section indices, mode and bounded coarse timing. These parameters are proposed, not currently supported: each event requires a validator, appropriate manifest/allowlist support and tests. No raw answer, personality result/trait label, new score field, reflection, nickname, room token or full query/referrer. Preserve the existing movie family’s bounded `correct_count` contract rather than silently changing its semantics. Respect existing collection controls. Observing a browser event dispatch is separate from confirming ingestion.

## Editorial, media and regional requirements

- Original questions and explanations; source per factual claim. Record publication/event/access dates separately for current affairs. Source keyword checks are a lint aid, not factual verification.
- Maintain a topic/source/locale/rights/scoring manifest for each new edition. Use native-language editorial review for Spanish and French, including US/Canada/Mexico terminology and culturally ambiguous answers.
- Prefer original diagrams and illustrations. Existing `MediaProvenance` is a useful foundation for images, with analogous fields required for audio/video. Spotify's ability to play licensed music is not permission for TypologyQuiz to reuse it. A short clip is not automatically exempt; the Copyright Office specifies no fixed safe quantity. [Copyright Office](https://www.copyright.gov/help/faq/faq-fairuse.html) Follow the project's existing `MOVIE_AND_MUSIC_RIGHTS_2026-10-15.md` decision.
- Human review for initial news editions remains required under `docs/newsquiz/PLAYBOOK.md`. No news content was promoted in this task; the archived September editions remain intact. General-audience suitability takes precedence over a title's position in a trend chart.
- Avoid appearance-based personality claims, ethnicity guessing, clinical labels and unsupported compatibility percentages. A visual preference quiz reports the choices a player made.
- Survey-answer party games must report the actual sample/date and cannot imply representativeness without evidence. AI-generated popular answers are not a survey.

## Verification and boundaries of this review

`./scripts/mac-run.sh npm run verify` completed successfully: **154 tests passed**, TypeScript passed, configured lint tasks passed with **3 existing image warnings**. Node also emitted existing module-type warnings. Registry counts and the Group Chat scoring example were executed locally. The live homepage and country trend pages were read, but a full browser interaction/accessibility audit and a full source-by-source audit of all question banks were not performed. No application code, published content, analytics settings or deployment changed.

A Claude Opus review of the plan plus supplied source excerpts completed. Its corrections on measurement, routing, matching cardinality, preference exposure balance and historical versions are incorporated. An earlier repository-reading attempt exhausted its 24-turn limit without a final report; the completed excerpt review is not a full independent code/security audit.

Graphiti tools were unavailable; project-local handoff and memory inbox were consulted. The user’s requirement that varied sections and layered matching apply to new questions/quizzes only is durable; the recommendations above remain proposals and should not be recorded as adopted architecture.

October 18 scope revision: documentation only. The earlier verification results describe the reviewed application baseline; no application changes or new test run were needed for this clarification.
