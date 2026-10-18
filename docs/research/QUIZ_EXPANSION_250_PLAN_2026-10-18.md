# 250 new quizzes: research, catalog and release plan

Implementation update: all 250 playable quizzes are covered in the [October 18 release record](quiz-expansion-250/RELEASE_2026-10-18.md). This document preserves the research and planning stage; implemented banks and release evidence take precedence.

**Status:** proposed additions, October 18, 2026. The operator confirmed ten topic categories with exactly 25 new quizzes each. This is a product and content plan, not 250 authored question banks or a release. Existing questions, quizzes, scoring, results, URLs and saved progress remain unchanged.

The detailed catalog is in [quiz-expansion-250/README.md](quiz-expansion-250/README.md). It contains 250 distinct briefs, grouped into ten readable files, plus a machine-readable catalog. Each brief specifies the hook, round sequence, example task, audience, result, research rationale and production dependency. The examples are authoring seeds, not verified answer keys.

This expands the [code review and interaction strategy](INTERACTIVE_QUIZ_STRATEGY_2026-10-18.md). Where its smaller pilot list differs from this catalog, use the catalog for the 250-content roadmap and retain the earlier report's implementation findings and preservation requirements.

## What to build

Make the new collection recognizable through three promises: **discover something about your choices, solve something surprising, or play something with someone else**. A quiz should feel like a little experience with a beginning, a change of pace and a satisfying reveal.

| Category | New quizzes | Editorial direction |
| --- | ---: | --- |
| Personality & Choices | 25 | Trade-offs, scenarios, values and taste; playful self-reflection |
| Friends & Social Play | 25 | Cooperative decisions, prediction and consensual reveals |
| Movies & TV | 25 | Film craft, scene inference, adaptation and viewing knowledge |
| Music | 25 | Fan knowledge, listening choices, scenes and musical structure |
| Geography & Travel | 25 | Connected places, routes, environment and spatial inference |
| Science & Nature | 25 | Predict, connect evidence and explain everyday phenomena |
| History & Culture | 25 | Objects, archives, changing places and cultural exchange |
| Food & Everyday Life | 25 | Flavor, tools, ingredients and everyday problem-solving |
| Sports & Games | 25 | Rules, tactics, tabletop mechanics and cooperative play |
| Logic & Wordplay | 25 | Original small puzzles with clear, checkable solutions |
| **Total** | **250** | **New banks and separate slugs throughout** |

Categories are navigation topics, not separate engines. A matching controller can support movie craft, city networks, food webs and museum objects. However, a topic swap alone does not earn another catalog entry: each brief needs a different inference, decision or social payoff.

## Research conclusions

The research window prioritizes April–October 18, 2026. Earlier observations and 2025 survey behavior are labeled as background. Sources were checked October 18. US, Canadian and Mexican signals are distinguished; global platform statistics are not presented as North American measurements. This is a directional desk study, not a representative survey of all North American quiz users.

1. **Music is an especially timely format opportunity.** Spotify expanded its Music Quiz in October across these markets, mixing different question modes. That is strong evidence that a major platform is investing in the format; it does not disclose quiz completion or retention. Start with original text-based music knowledge and choices; audio licensing is a separate gate. [R01: Spotify](https://newsroom.spotify.com/2026-10-06/music-quiz-expansion/)
2. **Repeatable puzzles have actual engagement evidence, with a major transfer limitation.** LinkedIn reported millions of daily players and 86% next-day return in March. It is a global, company-reported result on an established network, not a realistic target for this site. The useful hypothesis is a common short challenge with an understandable share result. [R02: LinkedIn](https://news.linkedin.com/2026/LinkedIn-Announces-Patches-A-New-Thinking-Oriented-Game-Inspired-by-Zip/LinkedIn-Announces-Patches-A-New-Thinking-Oriented-Game-Inspired-by-Zip)
3. **Sports provide a large recent Canadian audience.** Bell's July report records 30.5 million unique Canadian viewers for World Cup coverage, using preliminary Numeris data. This supports testing accessible rules and fan knowledge, not assuming those viewers want quizzes. The tournament is over; any recap must be dated. [R04: Bell Media](https://www.bellmedia.ca/the-lede/press/bell-media-smashes-records-with-canadas-biggest-fifa-world-cup-ever-as-fifa-world-cup-2026-reaches-more-than-30-million-canadians-on-tsn-rds-ctv-noovo-and-crave/)
4. **Cozy hobbies and creative identity supply good preference prompts.** Pinterest's August report highlights tactile hobbies, miniature projects, home cafés and nature journaling. Treat these as platform search themes rather than population traits. Our original activities should explore choices, not infer a diagnosis from a décor preference. [R07: Pinterest](https://newsroom.pinterest.com/news/2026-pinterest-hobbies-trend-report/?change_language=true)
5. **Movie nostalgia and eerie/cozy contrasts have current seasonal support.** Google's October reports highlight nostalgic Halloween viewing searches; its Canadian report also identifies interest in liminal spaces and whimsy. Use enduring scene-reading mechanics that can survive the season. Do not rush an October 31 release just to capture a short window. [R05: Google](https://blog.google/products-and-platforms/products/search/frightgeist-halloween-trends-2026/), [R06: Google Canada](https://blog.google/intl/en-ca/products/explore-get-answers/halloween26/)
6. **Books and games broaden the audience beyond teen fandom.** BookNet's 2026 report surveyed 1,278 adult English-speaking Canadians about 2025; weekly gaming participation rose from 41% to 47%. ESA's June US report estimates 67% of people ages 5–90 play games at least an hour weekly and identifies puzzles as a leading mobile genre. These are broad participation signals, not quiz-specific conversion evidence. [R08: BookNet Canada](https://booknetcanada.ca/research/canadian-leisure-reading-study-2025/), [R10: ESA](https://www.theesa.com/two-thirds-of-americans-play-video-games-every-week-according-tonew-report-from-the-entertainment-software-association/)
7. **Mexico needs its own editorial input.** TikTok and FIL Guadalajara announced Mexico's first Book Awards edition in September. This is a local cultural initiative; the reported BookTok post count is global, not Mexican. Build book, music and place concepts with Mexican contributors and Spanish adaptation rather than simply translating US references. [R09: TikTok/FIL](https://newsroom.tiktok.com/tiktok-y-la-fil-guadalajara-celebran-la-literatura-con-la-primera-edicin-de-los-tiktok-book-awards-en-mxico?lang=es-419)

8. **There is direct quiz-play evidence for matching and compact comparisons.** JetPunk’s dated September 8 leaderboard records 7,937 takes for its capital-memory matching game and 12,832 for its ABBA/Queen comparison. These are single-day site-reported takes, not unique players, completion rates, North American-only counts or evidence of growth. They support testing connected matching and approachable music contrasts without copying those quizzes. [R14: JetPunk, September 8](https://www.jetpunk.com/top-quizzes-by-day/2026-09-08)

None of these sources proves that a specific proposed quiz will perform well. Personality format conversion, many-to-one matching completion and this site's audience preferences remain unmeasured. No arbitrary keyword volume, social-share uplift or “viral potential” score has been invented.

## How to read the evidence labels

- **Trend-adjacent:** a dated topic or format signal supports trying the idea. It is not proof of demand for this exact quiz.
- **Evergreen:** durable educational or entertainment appeal; no verified recent growth claim.
- **Experimental:** an original interaction or social hypothesis that especially needs usability testing.

Each brief has one evidence reference. R01–R14 are research context; E00 and X00 explicitly identify editorial hypotheses. A trend source is not a citation for an eventual correct answer. Question authors must build a separate source record for every factual claim.

The [source ledger](quiz-expansion-250/SOURCES.md) records dates, geography, evidence type and limitations. The earlier strategy contains additional assessment, accessibility and rights research.

## The player experience

Most new quizzes should take **3–6 minutes**, with **6–12 scored tasks** across two or three sections. A task can contain multiple links; count interactions and reading load during testing instead of advertising eight questions that actually require 40 actions. Small logic grids may use fewer, deeper tasks. Timings in the plan are targets, not measured durations.

Use a simple rhythm: an approachable opening, one deeper connection round, then a short synthesis or reveal. Explain the interaction when it first appears. Allow backtracking before submission unless the puzzle's rules explicitly require a locked choice. Offer an untimed path by default; speed rounds are optional and labeled separately.

### Signature format: cross-layer matching

For a city → region → country round, show four cities, four regions and three countries. City-to-region links can be one-to-one while several regions share a country. Make each relation explicit; do not force a bijection just because the existing matcher does.

Score edges independently, with one normalized task weight across the graph. An incorrect first-layer link must not automatically invalidate a correct second-layer link. Show separate layer feedback and the corrected graph after submission. Progress should persist stable entity IDs, never screen positions. Provide tap/select and keyboard controls alongside any dragging.

Some food webs, ingredient menus and genre tags need **many-to-many** links rather than one choice per item. Declare that cardinality explicitly. Penalize false-positive links so selecting everything cannot earn full credit. One candidate rubric is `clamp((correct selected links - incorrect selected links) / expected links, 0, 1)`, normalized to one task; an unanswered task scores zero. Review penalties and valid alternatives for each task before adopting this rubric. Counts and scores are explanatory content, not population norms.

Apply the same structure only where the subject supports it: instrument → sound-production mechanism → ensemble role; organism → food source → habitat; object → use → historical context. Many concepts allow multiple valid relationships, so answer keys must declare cardinality and alternatives instead of pretending every association is unique.

### Personality and preference results

Use balanced choices and two or three interpretable dimensions. A result can say “You favored exploration over routine in these situations” and show which decisions contributed. It should not predict job success, relationship quality, mental health or an immutable personality. Forced-choice methods need suitable design and scoring; their use alone does not establish validity. See the assessment research in the earlier strategy.

Knowledge and preference must remain separate in hybrid quizzes: “7/9 connections correct” and “Your viewing choices leaned toward mystery” are separate outputs. Do not reward one taste as more intelligent or combine taste with accuracy into a single percentile.

Maintain a result-dimension registry during authoring. A music opening can describe Slow Build versus Immediate Hook and Smooth Transitions versus Sharp Contrasts; a co-op game can describe Information versus Coordination and Prevention versus Recovery. Write the items to measure those choices directly. Repeating Plan versus Improvise and Solo versus Shared across unrelated quizzes produces repetitive results even when the artwork changes. Reuse a broad axis only deliberately, and keep its context visible.

## Delivery order and capacity

The 250 entries are a fully enumerated backlog, not a promise to release 250 immediately. Use four content waves:

| Wave | Per category | Total | Purpose |
| --- | ---: | ---: | --- |
| A | 1 | 10 | One pilot per category; stage these rather than launching all at once |
| B | 4 | 40 | Establish a useful five-quiz category after reviewing the pilot |
| C | 10 | 100 | Grow successful experiences; introduce richer controllers selectively |
| D | 10 | 100 | Complete each category to 25; dependent ideas remain gated until ready |
| **Total** | **25** | **250** | Waves are content priority; dependencies can delay an individual item |

The catalog assigns a provisional wave by editorial rank, not by ID number. **A dependency always overrides its wave.** Survey-answer games cannot ship with invented answers; audio games cannot ship without cleared recordings; live multiplayer cannot ship merely because a solo renderer works. Reorder within a category if a later base-format concept is ready sooner. Retain the final 25-per-category objective while changing production order.

Start with **MT-03 Film Craft Decoder** and **PC-01 The Unplanned Saturday**. They test factual mixed rounds and new preference scoring respectively. Next introduce **GT-02 City-Region-Country Relay** as the first layered-matching trial, followed by one at a time from the other categories. These are different product tests, not an A/B experiment. The more interpretive Continuity Detective remains in Wave B with an explicit sequence-scoring gate.

Capacity scenarios, excluding foundation work and rework: at five reviewed quizzes per week, 250 requires 50 publishing weeks; at ten per week, 25 weeks. Begin with a two-week production sample to measure research, writing, review and QA time, then estimate staffing and dates. Five per week is a planning scenario, not an established team capacity. Approximately 2,000 scored tasks would result at eight per quiz; neither that average nor the full question count is committed yet.

### Build in reusable increments

1. **New-content foundation:** new identity/version scheme, separate progress namespace, section navigation, typed answer contracts and an explicit-start event for new quizzes. Reuse compatible choice, one-to-one match and ordering controls.
2. **Preference interactions:** option vectors, forced pairs, rank-three and bipolar sliders with keyboard alternatives. Define possible and tie outcomes before writing copy. Check exposure balance and all result paths.
3. **Layered relations:** many-to-one links, independent partial credit, clear correction graphs and persistence. Validate cardinality and allowable alternatives.
4. **Optional visual and social layers:** rights-cleared diagrams, image choices, hotspots with text equivalents, versioned share payloads and consent-based friend reveals. Start with a single-device party option before synchronized rooms.
5. **Deferred experiments:** original audio/video, real-survey answer boards, rich branching and optional AI reflections. These are selected additions, not prerequisites for the 250-concept plan.

Do not implement all 19 requested formats before launching. Dense matrices are suitable for a small optional comparison, not a mobile default. Category boards need original branding, scoring and art. AI interpretation should never silently decide correctness or personality; an optional generated reflection would require a clear rubric, user correction, privacy design and an ordinary non-AI path. Do not add AI merely to tick a format box.

Grid-fill and prerequisite-ordering puzzles also need explicit contracts. A grid controller is new work even when an existing matching UI looks similar. A recipe or build sequence can have several correct topological orders: reuse ordering controls, but introduce a new constraint validator for these additions rather than inheriting the old all-or-nothing exact-order score.

## Codebase fit and preservation contract

The reviewed checkout has 67 main assessments (1,050 Likert and seven numeric items), 63 ordinary trivia entries, 15 movie quizzes, daily minis and separate interest/social/driving paths. Existing trivia counts include variants over shared datasets. The expansion adds topics and behaviors rather than increasing those counts with more letter variants.

| Existing area | Use for new work | Boundary |
| --- | --- | --- |
| `src/lib/editorial/types.ts`, `score.ts`, `validate.ts` | Reference contracts, validators and factual task handling | Existing boolean scoring and one-to-one matching stay intact |
| `src/components/editorial/` | Reuse compatible choice/match/order controls | New drag, graph and partial-credit behavior must be explicit |
| `src/lib/types.ts`, `src/lib/tests/` | Reference existing assessment behavior | Scalar numeric answers cannot represent maps/rankings; no blanket conversion |
| `src/lib/trivia/movies.ts` | Source provenance and existing topic exclusion list | All 120 current questions remain; write new sets |
| `src/lib/minis/daily.ts` | Learn from deterministic sessions | New series, IDs and banks; retain current minis |
| `src/lib/analytics.ts` | Follow privacy and allowlist conventions | Instrument new quizzes only in this plan; no answer/result leakage |
| `src/lib/rooms.ts`, share/result helpers | Review reusable invitations and rendering | Mixed-format live play is a separate integration task |
| Static export configuration | Pre-render content and category routes | Server-dependent features require explicit architecture work |

Before implementation, inventory all existing route slugs, including the separate interest catalog, and compare the new proposed slugs and premise summaries. Route prefixes in this plan are not a final API. Freeze a baseline manifest of existing IDs, bank hashes, scoring fixtures and saved-progress versions; after each release, compare that manifest. Shared components are reusable only if legacy behavior is covered. Scope any implementation across quiz-engine, editorial-content, site-tooling, social or worker-services explicitly; this planning work changes documentation only.

## Editorial production standard

For each catalog brief:

1. Confirm the premise has no substantive duplicate in existing content or the new slate. “Same topic, new interaction” is insufficient when it asks the same things.
2. Create a source dossier: primary source URL, claim, checked date, edition/version, rights and regional ambiguity. Museum/archive sources suit history; NASA/CSA/NOAA and research institutions suit science; official leagues/federations suit sports. These are sourcing directions, not blanket evidence approval.
3. Author the full round and explanations together. Use plausible distractors. Explicitly identify subjective questions and accepted alternatives. No “which is most popular” without a real dated survey and sample description.
4. Review independently for factual accuracy, distractor ambiguity, representation, scoring direction and originality. Use local cultural reviewers for community-specific traditions and human adaptation for French/Spanish. Do not infer cultural traits from nationality.
5. Check mobile, keyboard, touch alternatives, readable contrast, reduced motion, text equivalents, small screens, refresh/resume, backward navigation, empty answers, repeated submission and ties.
6. For logic: independently solve the puzzle, verify every clue is needed or useful, and mechanically check uniqueness where possible. For layers: test legitimate repeated targets and no cascading penalties. For preferences: inspect every outcome and balance option exposure across branches.
7. Publish a versioned new entry with a spoiler-free result card and source explanations; monitor the new content. The existing editorial review requirements still apply if a concept is implemented as an initial news edition.

No production stills, album covers, song clips or lyrics are assumed licensed. Original diagrams and commissioned sounds are the default. Some history and food origins are disputed or shared: write those questions around well-supported evidence rather than forcing a single-country origin answer.

## Measurement and decisions

The latest previously recorded site sample was 23 users and 67 page views for October 10–16; it is too small to validate these ideas and includes no established operator exclusion. This plan does not represent a fresh analytics retrieval.

For **new quizzes**, record bounded aggregate events for deliberate start, section completion, finish, restart and share action; an additional new-quiz visit or challenge-open event can support a denominator if privacy review permits. No names, raw answers, personality axes, free text, room tokens or full query strings. Track share actions as actions, not proof that a recipient received or played the link. A returned visit requires a permitted measurement design; do not quietly create persistent cross-device profiles.

Use completion = finished valid sessions / deliberate valid starts, broken down by quiz version and device class. Also inspect section drop-off, technical failures, median active duration and repeat plays. Treat missing instrumentation as unknown. Exclude operator/QA traffic through a documented test mode before interpreting results.

Initial gate: no critical scoring, factual, privacy or accessibility defects; observe five to eight recruited usability sessions spanning phone and keyboard use; all participants should be able to operate the mechanics without coaching after the introduction. This is a qualitative usability sample, not proof of market fit.

After roughly 50 genuine starts per pilot, review completion and feedback with uncertainty and small denominators visible. This is an operational checkpoint, not statistical power for A/B claims. Fix the clearest friction, then decide whether to expand. Establish site-specific baselines before setting growth targets. Large-platform engagement figures are inspiration, not acceptance thresholds.

Do not let low traffic stop content preparation indefinitely. Continue researching and authoring later briefs while pilots run. A modest expansion can proceed after usability and editorial gates, with engagement explicitly still unproven; the 50-start checkpoint is not a requirement to stop all writing or wait for statistical significance.

## What remains after this plan

The 250 premises, interaction sequences and authoring seeds are planned. Full question banks, answer-level citations, rights clearances, scoring weights, UI implementation, cultural/localization review, user testing and publication are future work. Preserve the existing catalog throughout. The source ledger explicitly distinguishes retrieved evidence from hypotheses and from sources that need rechecking.

## Review and verification

The final catalog contains 250 unique IDs, titles and suggested slugs, with exactly 25 per category and waves of 10/40/100/100. Each category has one Wave A, four B, ten C and ten D entries. Evidence references, document links, anchors and dependency labels were checked; proposed slugs have no collision against the 572 URLs in the current exported sitemap. Four complete small logic examples were checked mechanically. These checks do not replace full question-bank authoring and review.

The independent supplied-brief review and resulting corrections are documented in [review notes](quiz-expansion-250/REVIEW_NOTES.md). The [validation record](quiz-expansion-250/VALIDATION.json) includes the catalog hash and counts. `./scripts/mac-run.sh npm run verify` passed: 154 tests, typecheck and lint; three existing image warnings and existing Node module-type warnings remain. This turn changed planning documents and the local memory inbox only; application code and existing quizzes were not changed or deployed.
