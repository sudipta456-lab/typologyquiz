REVISE

All **29 scored tasks have correct supplied keys**, but audience-fit and FS delivery issues block approval.

**Required corrections**

| Severity | Quiz/task | Finding and required correction |
|---|---|---|
| High | FS-27, overall/q1–q8 | The promised shared investigation conflicts with the actual player. `pass-and-play` requires 2–4 people to complete the entire quiz privately, then compares their answers; it does not rotate readers within one shared attempt and offers no solo selection. Adapt the candidate’s instructions, reader labels, creative turns, description and brief to that existing behavior. Remove the solo promise and clarify whether five minutes means per player. Do not change the engine. |
| Medium | FS-27 q2–q7 | The mystery remains too close to the rejected packet’s instructional pattern: q2 transcribes explicit sequencing; q3 copies named credits; q4 identifies Mara; q6 and q7 revisit essentially the same omission. Rework this progression so later scored tasks yield distinct discoveries requiring simple inference from supplied evidence. Replace q6’s obviously ineffective gestures with credible alternatives. Preserve eight tasks and the authored resolution. |
| Medium | SN-27 q6–q7 | “Every cactus seed,” a closed flower shelter, and a nest built from cactus spines make the correct options conspicuous without bat knowledge. Replace these with plausible, source-distinguishable distractors while retaining the worthwhile maternity-roost and woodpecker-hole discoveries. |
| Medium | FE-27 q7 | Ordering labels already dated 1923, 1950s and 1962 tests date sorting rather than a wrapper discovery. Rework this task to test the meaningful distinction between holiday packaging and individual foil, retaining accessible evidence and a unique answer. Merely hiding the dates would turn it into obscure recall. |

The FS behavior is explicit in [QuizPlayer.tsx](/Users/sudiptasarkar/.codex/worktrees/quiz-expansion-250/typologyquiz/src/components/interactive/QuizPlayer.tsx:846), including the [private handoff instruction](/Users/sudiptasarkar/.codex/worktrees/quiz-expansion-250/typologyquiz/src/components/interactive/QuizPlayer.tsx:951).

**Independently derived answers**

These derive from the disclosed fictional evidence or the supplied primary-source snapshots. All match the packet’s keys.

| Quiz/task | Complete answer |
|---|---|
| FS q2 | `test → delivery → photo` |
| FS q3 | `mara → coat`; `elin → lantern`; `miles → sea` |
| FS q4 | **b** — Mara Roe |
| FS q6 | `credit=yes`; `gift=no`; `wearer=no` |
| FS q7 | **c** — Avoid assuming every worker is credited |
| SN q1 | **a** — Reject “echolocation means blind” |
| SN q2 | **b** — Prey-generated sounds |
| SN q3 | `feed → dust → next` |
| SN q4 | **c** — Increasing grooming |
| SN q5 | **b** — Seeds pass intact and disperse |
| SN q6 | **a** — Birth and raising pups |
| SN q7 | **c** — Woodpecker hole in a saguaro |
| SN q8 | `brown → beetles`; `tongue → nectar`; `pallid → scorpion` |
| HC q1 | **a** — Turnip |
| HC q2 | **b** — Entertainment in disguise |
| HC q3 | `cross → hang`; `mask → wear`; `needle → travel` |
| HC q4 | `water=emigrate`; `ring=marry`; `clay=death`; `food=wealth` |
| HC q5 | **c** — Dream of a future spouse |
| HC q6 | **a** — Discourage eating damaged fruit after that date |
| HC q7 | **b** — Regional variation and change over time |
| HC q8 | **c** — Next to marry |
| FE q1 | **b** — Candy corn |
| FE q2 | **c** — Failed attempt at perfectly round caramels |
| FE q3 | **a** — Founder’s daughter |
| FE q4 | `us → smarties`; `ca → rockets` |
| FE q5 | **b** — Identification before unwrapping |
| FE q6 | **c** — Foil rationing |
| FE q7 | `christmas → halloween → colour` |
| FE q8 | **a** — Several explanations; origin uncertain |

FS q1/q5 are explicitly unscored; q8 is optional reflection. PC has no correctness keys. No unresolved alternative correct answer emerged, including all match/grid entries. Original fictional clues are available before their associated answers are required. Knowledge questions appropriately test knowledge rather than requiring prior disclosure of every fact.

**PC dimension audit**

Here, the weight pair is `(atmosphere, participation)`.

| Task | Mapping |
|---|---|
| q1 | a `(-1,0)` welcoming; b `(1,0)` uncanny |
| q2 | a `(-1,-1)`; b `(-1,1)`; c `(1,-1)`; d `(1,1)` — all four scene descriptions fit |
| q3 | a `(0,-1)` watching; b `(0,1)` participating |
| q4 | Slider 0→100 maps welcoming→uncanny |
| q5 | Each row: watch `(0,-1)`, join `(0,1)`; reuse supported |
| q6 | a `(-1,1)` welcoming/participating; b `(1,-1)` uncanny/watching |
| q7 | Same four quadrants as q2; descriptions fit |
| q8 | Slider 0→100 maps watching→participating |

**Pass.** Constant zero dimensions contribute nothing, rather than a misleading midpoint. Rankings normalize positional preferences; q5 averages its three selections into one task contribution. Atmosphere receives five task contributions, participation six. The explicit q6 tradeoff is honest. No diagnosis, validation, bravery hierarchy or moral labeling is claimed.

**Audience-fit verdicts**

| Quiz | Verdict |
|---|---|
| PC | **PASS.** Title, opening choice and descriptive payoff align. Repeated dimensions are appropriate to this preference exercise; choices provide meaningful agency. |
| FS | **REVISE.** A distinct theatrical setting and maker-versus-wearer premise improve on *The Open Window*, but repeated literal credit checks still underdeliver a mystery. Clearly distinct from FS-15’s branching, weighted story preferences; that distinction does not resolve the delivery mismatch. |
| SN | **REVISE, narrowly.** Strong variety: senses, pollination, social behavior, dispersal and shelter. Replace the conspicuously implausible distractors. |
| HC | **PASS with optional improvements.** Specific objects and recorded beliefs provide worthwhile discoveries. q7’s absolute distractors are weak; q8 repeats marriage symbolism from q4. Improving these would strengthen the finish, but the overall experience remains substantive. |
| FE | **REVISE, narrowly.** Naming, cross-border branding, identification and wartime packaging offer useful surprises. q7 is mechanical filler within an otherwise coherent quiz. |

Optional wording improvement: FE q4 should say **product/brand name**, not “company name.”

**Sources and integration**

The supplied NMI, NPS, study, manufacturer, archive and museum snapshots support the keyed factual claims at question level. The bat study supports the bounded captive-study claim; excluded conservation/population fields were not imported. Folklore remains attributed belief, and manufacturer naming accounts remain attributed accounts. The Kisses-name origin remains explicitly unknown. No animal-handling, medical or dietary advice was introduced.

The **append-only architecture passes**. The current checkout already contains all five candidates, matching the reviewed packet exactly. Semantic comparison against `HEAD` found:

- All **260 existing quiz objects and 260 existing briefs unchanged**.
- Exactly five new quiz IDs.
- PC/FS/SN/HC/FE counts increased to 27; other categories remain 26.
- Candidate schema checks, manifest validation, assembly `--check`, and collection validation passed: **265 quizzes / 2,120 tasks**.
- Every candidate has eight tasks, 2–3 sections and at least two formats.

Existing controls support labeled radios/selects, keyboard order buttons, confirmed sliders and optional reflection. Reflection is ungraded, excluded from persistence and excluded from group comparison. Browser accessibility remains unverified.

Use the existing assembly, analytics and discovery generators after corrections. The group-catalog generator reads trivia/movie registries, so these interactive additions should not require a Worker catalog change. The working diff also includes `HALLOWEEN_2026_PLAN.md`; exclude that from the narrowly authorized integration unless separately authorized.

This was an **independent GPT AI-assisted, read-only review**. No files were changed, other providers invoked, agents spawned, full suite/build run, or browser/live QA performed. No human user study or visitor engagement evidence was collected. Blocking findings above remain unresolved.