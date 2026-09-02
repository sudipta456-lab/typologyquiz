# TypologyQuiz Growth Plan — Trivia Diversification & Traffic

**Date:** 2026-08-30 · Research base: deep passes on Sporcle, JetPunk, Quizly, QuizBreaker + adjacent (Kahoot, Blooket, Gimkit, Psych, BuddyMeter), with live numbers pulled 2026-08-30 · Repo baseline: 65+ typology quizzes, driving-test engine (22 US states + AB/BC/ON), share cards, URL-snapshot rooms, daily/streaks/badges, fully static on Cloudflare.

---

## 1. The strategic read

**What the research says, in five facts:**

1. **Geography trivia is the genre's evergreen traffic engine.** ~12 of Sporcle's top-25 all-time quizzes are geography; the US States family alone has ~175M plays there, and JetPunk's US States type-in has 17.5M takes (avg score 74% — high enough to feel close, low enough to force a retake). These quizzes are 15+ years old and still top the daily charts.
2. **One dataset → many SKUs.** JetPunk turns one 50-state list into 10+ separate quizzes (typed, map-click, 1-minute sprint, 30-second borders, sudden-death, first-two-letters…), each its own URL with millions of takes. Sporcle's #1 quiz ever (84.6M plays) is just "US States + two difficulty modifiers" — and it's user-created.
3. **Habit beats social.** Sporcle is 52–66% direct traffic (avg session ~20 min), JetPunk 53% direct, Quizly 26% direct with 7:25 sessions from a streaks/gems/pets loop. Daily date-seeded content + streaks converts search visitors into daily regulars. We already have `/daily`, streaks, and badges — they need trivia fuel.
4. **The teen viral loop is the friend quiz.** "How well do you know me?" (BuddyMeter genre, QuizBreaker's paid version for teams) is the highest-share mechanic in reach — and it is almost perfectly buildable on our existing URL-snapshot architecture, no backend.
5. **Every top mechanic is static-friendly.** All 10 Sporcle game types and all 7 JetPunk creation types run client-side. The only things that truly need a server are live counters/percentiles, real-time matches, and open UGC publishing — all deferrable, and the counter piece fits a tiny Cloudflare Worker + KV on our existing stack when we want it.

**Our unfair advantages:** the driving-test engine is already a timed right/wrong trivia engine with per-jurisdiction registries and SEO structured data; the share-card/sticker/rooms layer is ahead of what Sporcle/JetPunk offer; static Next.js export is the ideal machine for the "hundreds of variant pages" SEO play; and our design is mobile-first and modern where Sporcle/JetPunk are dated and ad-heavy — that gap is the wedge.

---

## 2. New quiz FORMATS to add (the diversification list)

Ranked. Feasibility: **[static]** = pure client-side today · **[static+URL]** = client-side with state carried in share URLs · **[worker-later]** = wants a tiny Cloudflare Worker/KV eventually.

| # | Format | Stolen from | Why | Feasibility |
|---|--------|-------------|-----|-------------|
| 1 | **Timed type-in ("Name all 50…")** — keystroke-registration matching (no Enter key), alias dictionary, live counter, give-up reveal | Sporcle Classic / JetPunk Text | The core engine of both giants; zero friction between brain and score | [static] |
| 2 | **Map quizzes** — type-to-fill-the-map + click-the-named-region, SVG-based | Sporcle Map/Picture Click, JetPunk maps | Geography = the traffic anchor; pairs with existing driving-state pages | [static] |
| 3 | **Sudden-death / minefield modifiers** — one wrong (or 3 lives) ends the run; forced order; no-outlines maps | Sporcle Minefield, JetPunk Sudden Death | Cheapest replay multiplier that exists: hard variants get ~2x the plays of friendly ones | [static] |
| 4 | **Speed sprints** — same data, 60s/30s timers ("50 states in one minute") | JetPunk remixes | Each sprint is a new URL + a speedrun leaderboard against yourself | [static] |
| 5 | **Multiple-choice trivia** with speed-weighted scoring | JetPunk Daily Trivia, Kahoot points | We already have this engine (driving); reskin for entertainment topics | [static] |
| 6 | **Picture quizzes** — flag grids, logo grids, name-the-image | Sporcle Picture Box, JetPunk Picture | Flags of the World = 13.8M plays; image sets are teen-friendly | [static] |
| 7 | **Daily minis** — word ladder, anagram, quick-pick, this-or-that (3–4 per day, date-seeded) | Sporcle Daily Dose | The streak fuel; ≤5 min each; ships as build-time content | [static] |
| 8 | **Friend quiz builder** ("How well do you know me?") — 10 prompts → answers compressed into a share URL → friends guess → scored → result link back | BuddyMeter genre, QuizBreaker mechanic | Highest viral coefficient available for ages 10–21; content = the players themselves | [static+URL] |
| 9 | **Ghost rematch** — record per-question timing locally, replay as a "ghost" opponent; encode compact ghost into challenge URLs ("beat my ghost") | Kahoot Rematch | Makes single-player feel multiplayer with zero infra | [static+URL] |
| 10 | **Chest luck layer** — after correct answers pick 1-of-3 chests (points/double/lose) | Blooket Gold Quest | Keeps weaker players competitive; makes score screenshots unpredictable → shareable | [static] |
| 11 | **Fool-your-friends** — write a fake answer, friends must spot the truth among fakes; chains via URL | Psych! | Bridges trivia and the friend-quiz loop; ~3–5 hop chains within URL limits | [static+URL] |
| 12 | **Order/sort/tile-select** — sequence events, bucket items, click-all-that-match | Sporcle Order Up/Sortable, JetPunk Tile | Cheap authoring variety for series content | [static] |
| 13 | **"Most Likely To" group cards** — vote among friend names → share-card collage | Party genre | Zero correctness logic; pure share fodder; keep room URLs noindex | [static+URL] |
| 14 | **Per-quiz stats: "you beat ~X% of players"** — baked percentile tables first, real counters later | Sporcle Stats, JetPunk results | The single biggest replay hook; upgrade path = Worker + KV on our own Cloudflare | [static → worker-later] |

---

## 3. US States + Canada (the anchor content ask)

Build the **variant ladder**, not one quiz — every rung is its own URL and search result:

**US States ladder** (one `states.json` dataset + alias dictionary):
1. Name all 50 US States — type-in, 4:00, live map fill (JetPunk's version: 17.5M takes)
2. Click the US States — map-click, 7:00
3. US State Capitals — type-in + map
4. 50 States in One Minute — sprint
5. US States Sudden Death — 3 lives / minefield one-strike
6. No-Outlines States — click blind geography (Sporcle's #1 ever, 84.6M plays)
7. US States by First Two Letters — 30s novelty
8. 20 Random States on a Map — infinite replay variant
9. Long-tail generated pages: "States that start with M/N/…", "States that border Texas" (JetPunk's never-featured "Countries that Start with O" has 324K takes on title-as-search-query alone)

**Canada ladder** — same engine, right-sized: provinces & territories type-in (13 answers, 3:00), map-click, capitals, flags, sudden death, + a `/ca` greatest-hits lander (JetPunk's Canada quiz = ~2% of US States' takes, so this is long-tail, not a second pillar — but it's near-uncontested and pairs perfectly with our existing AB/BC/ON driving-test pages for internal linking both ways).

**Then the same ladder pattern for:** Countries of the World (49M takes on JetPunk), Europe/Africa/Asia maps, Flags, World Capitals — and teen-skewed finite sets: 151 original Pokémon, MCU movies in order, NBA/NFL teams, periodic table, K-pop groups, anime protagonists (ties into our existing anime/kdrama quizzes).

---

## 4. Content production plan (traffic growth)

**Cadence target:** 2–3 new pieces/week minimum (Quizly's exact cadence on a 4,000-quiz archive), on fixed days — plus one **named weekly drop** (e.g. "Friday Drop") and a **new badge every week** (Sporcle ships badges every Tuesday as a content beat).

**Series manufacturing** (Quizly's production trick — a series is a template that stamps out dozens of SEO pages):
- Alphabet trivia (26 quizzes), planets (8+), decades nostalgia (60s–2010s), "only 90s/2000s kids know" nostalgia
- Per-fandom sets: anime, K-pop, Marvel, Premier League, NBA
- Geography ladders above (~40+ pages from 4 datasets)
- Reference/data pages that rank on their own and link into quizzes (JetPunk's `/info/` pattern)

**SEO machinery (build once, compounds forever):**
- Title grammar: keyword in the slug, hook in the `<title>`: "Only 1 in 10 Can…", "If You Can Get 18/20…", "Can you name the…?" (Sporcle's description formula matches how people actually search: "name all the states")
- One URL per variant; format hubs (`/trivia`, `/maps`, `/daily`) + topic hubs + tag pages + an all-time-popular page; dense related-quiz cross-links ("Play Next")
- Question counts in category meta titles ("2,000+ Movie Trivia Questions & Answers" — Quizly's SERP-CTR trick)
- Generate sitemap from registries at build time (already a known gap in SUMMARY.md)
- Do the existing P0s first: Search Console verification + Cloudflare Web Analytics — we cannot steer traffic we cannot see

**Retention loop (converts search → direct):**
- Daily minis wired into the existing streak system; streak-saver token earned by sharing
- Weekly featured drop + weekly badge
- Gems + collectible companions shown on share cards (Quizly pets / Blooket blooks pattern) — localStorage only
- Baked "you beat ~X%" percentiles; later real counters via a ~50-line Worker + KV

---

## 5. Create-your-own-quiz (the UGC ask)

The static-safe path, in three steps — deliberately NOT open publishing (JetPunk's moderation ladder and Sporcle's curation apparatus exist because open UGC is a moderation tax; at our scale, curation wins):

1. **Friend quiz builder first** (format #8 above) — "creation" that needs no moderation because it travels only inside friend groups via URL. Curated teen-safe prompt packs; creator answers; link carries everything; each friend's score returns as a link; the group chat is the leaderboard.
2. **General quiz maker, URL-carried** — a form that builds a real quiz definition (MC or type-in, up to ~20 questions), compresses it (lz-string) into a share URL, and plays entirely client-side. Creations never touch our servers; room/creation URLs are noindex.
3. **"Submit for featuring"** — a simple form/mailto that sends us a creation link; we review and, if good, bake it into the next static build with credit ("by @name"). That's Sporcle's human-curation model at static scale. Only if this pipeline overflows do we consider accounts + a real backend — and JetPunk's nomination/spotlight ladder is the blueprint then.

---

## 6. Catalog QA workstream (existing content)

Some newer quizzes were authored by a non-Claude LLM; spot-checks confirm the schema and scoring discipline held up (reverse-keyed items, terms glossaries, disclaimers all present) but **house style drifted**: emoji in result labels (e.g. `naija-aunty.ts` typeMeta: ⛪💼🥘📢) and em-dashes in item copy, both of which the anti-slop pass explicitly banned ("no em-dashes in product copy"; text-code chips, not emoji).

- Sweep all `isNew` 2026 quizzes for: emoji in labels, em-dashes, tone drift, straight-lining resistance (every axis needs reverse-keyed items), cultural-sensitivity review on the international sets
- Write `docs/QUIZ_STYLE.md` — the authoring contract any LLM (or human) must follow: schema, tone, banned patterns, reverse-key requirements, disclaimer norms. Cheap insurance now that multiple models write content here
- Add a lint script that greps quiz files for em-dashes/emoji in labels so drift can't recur silently

---

## 7. Phased roadmap

**Phase 0 — Foundations (week 1–2)**
Type-in engine component (keystroke matcher + alias dictionary + timer) · SVG map component (US/Canada/world) · `/trivia` section with its own registry (mirror the driving pattern) · sitemap from registries · Search Console + Web Analytics · catalog QA sweep + style guide.

**Phase 1 — Geography anchors (week 2–4)**
US States ladder (8–9 pages) · Canada ladder + `/ca` lander · Countries of the World + Europe · Flags picture quiz · cross-links with driving pages · "you beat ~X%" baked stats.

**Phase 2 — Breadth + habit (week 4–8)**
Daily minis (date-seeded) into streaks · named weekly drop · sudden-death/sprint modifiers everywhere · 3–4 series launched (alphabet, Pokémon, decades, one fandom) · headline-grammar retitle pass on the existing 65 quizzes · long-tail generated pages.

**Phase 3 — Viral loops (week 6–10, overlaps 2)**
Friend quiz builder · challenge links with encoded scores (extends `/compare`) · ghost rematch · fool-your-friends chains · Most Likely To cards · group result poster (already on the P1 wishlist).

**Phase 4 — Retention sugar + light backend (when traffic justifies)**
Chests/gems/companions · badge expansion as back-catalog router · Worker + KV take-counters and real percentiles · only then revisit accounts/UGC publishing.

**Measurement:** weekly — organic clicks (Search Console), uniques + direct share (Cloudflare), streak retention (localStorage beacon later), share-link opens. The July baseline is ~1.0K uniques/week; the mechanisms above are the same ones that carry Sporcle to 16M visits/mo and JetPunk to ~24M takes/mo with a two-person team.

---

## Status: 2026-08-31, plan implemented

All four phases shipped across three build waves (see git history 2026-08-31):

- **Phase 0-1**: type-in engine + US/Canada SVG maps + 7-quiz ladder; catalog QA (173 emoji, 435 em-dashes fixed) + `docs/QUIZ_STYLE.md` + lint gate; result art shipped (25 webp) and wired.
- **Phase 2**: countries/planets/elements datasets, random + sudden-death variants, 43 letter pages (58 trivia URLs total), weekly featured drop, daily minis wired into streaks, SEO headline titles for all 67 tests, per-page OG cards (86, generated in prebuild).
- **Phase 3**: friend quiz builder, ghost rematch, fool-your-friends chains, Most Likely To, group result poster; all URL-fragment based, personal pages noindexed.
- **Phase 4 (client side)**: gems + 8 companions, threshold unlock notices; no purchases or timers.
- **Live play counters (2026-09-01)**: `worker/index.js` is now the Workers entry point, serving `/api/stats/<slug>` over a KV-backed per-quiz histogram and falling through to the static assets for everything else. A finished run reports its score and gets back the share of recorded runs it beat. Real numbers appear once a quiz has 25 samples; below that, and on any failure (offline, blocked, KV write quota), the screen keeps its baked estimate. KV has no atomic increment and the free tier allows about 1000 writes a day, so these are approximate stats by design.
- **Art (2026-09-01)**: all 80 prompts in `docs/IMAGE_PROMPTS.md` sets A/B/C were generated and shipped through `scripts/process-new-art.mjs`. 20 quizzes now carry result art, including the first spectrum-band art (mental-age, delulu-level). Social cards derive their art from the same tables, so new art lights them up automatically.
- **Still worth doing**: regenerate `delulu-1-realist`, `delulu-2-daydreams` and `shahnameh-rostam` (pillarboxed), and the `kdrama` set (photographic rather than illustrated).

---

*Research inputs: three parallel deep-dives (Sporcle; JetPunk; Quizly + QuizBreaker + Kahoot/Blooket/Gimkit/Psych/BuddyMeter) with live site data pulled 2026-08-30; repo review of registry/types/driving engines and traffic screenshot. Numbers cited (play counts, traffic splits, cadences) are from those passes — vendor-reported or third-party estimates, directional not audited.*
