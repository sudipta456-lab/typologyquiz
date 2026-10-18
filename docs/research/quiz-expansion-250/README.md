# 250 new quizzes: research and release

**25 new quizzes in each of ten confirmed categories.** The October 18 implementation contains 250 playable banks and 2,000 tasks. Existing quiz questions and scoring remain intact. See the [release record](RELEASE_2026-10-18.md) for verification and deployment evidence.

[Research and delivery plan](../QUIZ_EXPANSION_250_PLAN_2026-10-18.md) · [Source ledger](SOURCES.md) · [Machine-readable catalog](catalog.json)

[Review and corrections](REVIEW_NOTES.md) · [Validation record](VALIDATION.json)

Each linked category contains full briefs: playable hook, two or three rounds, concrete sample task, result, audience, suggested slug, evidence label and production gate. These files preserve the original concept specifications. The implemented banks in `content/interactive/` are authoritative; titles, round details and outcomes were adapted to the actual player. See [build workflow](BUILD_WORKFLOW.md).

## Browse the categories

| Category | Concepts | Proposed first pilot |
| --- | ---: | --- |
| [Personality & Choices](01-personality-choices.md) | 25 | The Unplanned Saturday |
| [Friends & Social Play](02-friends-social-play.md) | 25 | The Group Plan Rescue |
| [Movies & TV](03-movies-tv.md) | 25 | Film Craft Decoder |
| [Music](04-music.md) | 25 | Build the Opening Three Songs |
| [Geography & Travel](05-geography-travel.md) | 25 | City-Region-Country Relay |
| [Science & Nature](06-science-nature.md) | 25 | Backyard Evidence Lab |
| [History & Culture](07-history-culture.md) | 25 | Museum of Everyday Objects |
| [Food & Everyday Life](08-food-everyday-life.md) | 25 | Build a Home Cafe |
| [Sports & Games](09-sports-games.md) | 25 | Pick Your Co-op Role |
| [Logic & Wordplay](10-logic-wordplay.md) | 25 | The Elevator Schedule |

## Original proposed rollout

The user subsequently authorized implementing and deploying all 250 together. The staged proposal below is historical. AI ideas became local guided reflections; survey ideas became clearly fictional data puzzles or summaries of the player's own choices. Neither external AI nor real respondent data is used.

A: 10 pilots (one per category). B: 40 additions. C: 100. D: 100. A dependency can delay a quiz regardless of wave. Start the movie and personality pilots, then validate the first layered geography experience before expanding.

Evidence labels: **trend-adjacent** = a dated contextual signal; **evergreen** = durable premise or background research; **experimental** = an untested original mechanism. No label establishes engagement for this exact quiz.

## Dependencies identified during planning

| Dependency | Concepts | Required work |
| --- | ---: | --- |
| graph | 10 | New many-to-many edge-set answer contract, explicit accepted edges, false-positive handling, normalized partial credit and accessible graph controls. |
| sequence | 9 | New prerequisite/constraint ordering validator accepting every valid sequence; existing ordering controls may be reused without changing old scoring. |
| grid | 10 | New typed grid-fill or constraint-board controller, keyboard cell controls, explicit domain constraints and solver-backed uniqueness review. |
| base | 74 | Existing choice/order/one-to-one matching controls are candidates for reuse; new content/section composition and validation still required. |
| preference | 46 | New preference scoring, rank/option answer contract and outcome/exposure review; no validated assessment claim. |
| layers | 35 | New relation cardinality, repeated-target support, per-edge partial credit and accessible graph feedback. |
| visual | 24 | Original or rights-cleared visual assets and appropriate controller, plus text/keyboard equivalent. |
| audio | 11 | Original commissioned or explicitly licensed recordings, audio controls and equivalent non-audio path. |
| branch | 12 | Explicit branch graph, all-path review, exposure balance and resumable typed state. |
| social | 15 | Consent, separate participant state, private-until-reveal behavior, safe sharing and multiplayer integration if needed. |
| survey | 2 | HOLD: real opt-in respondents, versioned response counts, sampling dates/method, privacy review and disclosure. |
| ai | 2 | HOLD: optional disclosed AI assistance, explicit data handling, rubric and ordinary non-AI path; no automated diagnostic/scoring verdict. |

A primary dependency is shown in each brief; its production note can impose additional requirements. These describe the original proposal. The release record documents the actual controllers and the disclosed AI/survey adaptations; the collection validator checks each brief’s applicable format contract.

## Quick scan: all 250

### Personality & Choices

| ID | Title | Wave | Build dependency | Rationale |
| --- | --- | --- | --- | --- |
| PC-01 | [The Unplanned Saturday](01-personality-choices.md#pc-01) | A | preference | evergreen / E00 |
| PC-02 | [Your Tiny Decision Constitution](01-personality-choices.md#pc-02) | B | preference | experimental / X00 |
| PC-03 | [Lost in a Cozy Bookshop](01-personality-choices.md#pc-03) | B | preference | evergreen / R08 |
| PC-04 | [The Curiosity Detour](01-personality-choices.md#pc-04) | B | preference | experimental / X00 |
| PC-05 | [Deadline Triage: Village Festival Edition](01-personality-choices.md#pc-05) | B | preference | experimental / X00 |
| PC-06 | [Values Auction](01-personality-choices.md#pc-06) | C | preference | experimental / X00 |
| PC-07 | [What Makes a Place Feel Like Yours](01-personality-choices.md#pc-07) | C | layers | evergreen / E00 |
| PC-08 | [Build a Pocket-Sized World](01-personality-choices.md#pc-08) | C | preference | trend-adjacent / R07 |
| PC-09 | [The Midnight Train Crossroads](01-personality-choices.md#pc-09) | C | branch | experimental / X00 |
| PC-10 | [Exception Court](01-personality-choices.md#pc-10) | C | layers | experimental / X00 |
| PC-11 | [One Bag, One Unknown Door](01-personality-choices.md#pc-11) | C | preference | experimental / X00 |
| PC-12 | [The Now-or-Later Bazaar](01-personality-choices.md#pc-12) | C | preference | experimental / X00 |
| PC-13 | [Advice Swap](01-personality-choices.md#pc-13) | C | layers | evergreen / E00 |
| PC-14 | [Keep, Lend, or Let Go](01-personality-choices.md#pc-14) | C | layers | experimental / X00 |
| PC-15 | [The Small Courage Ladder](01-personality-choices.md#pc-15) | C | preference | evergreen / E00 |
| PC-16 | [The Open Door Floor Plan](01-personality-choices.md#pc-16) | D | visual | experimental / X00 |
| PC-17 | [Sound Bed Decisions](01-personality-choices.md#pc-17) | D | audio | experimental / X00 |
| PC-18 | [Your Week in Opposites](01-personality-choices.md#pc-18) | D | preference | experimental / X00 |
| PC-19 | [Borrowed Superpower Tradeoffs](01-personality-choices.md#pc-19) | D | preference | experimental / X00 |
| PC-20 | [Split-Decision Poll Walk](01-personality-choices.md#pc-20) | D | survey | experimental / X00 |
| PC-21 | [Your One-Sentence Adventure](01-personality-choices.md#pc-21) | D | ai | experimental / X00 |
| PC-22 | [Name That Decision Trap](01-personality-choices.md#pc-22) | D | preference | evergreen / E00 |
| PC-23 | [Four Neighbors, Four Tiebreakers](01-personality-choices.md#pc-23) | D | grid | experimental / X00 |
| PC-24 | [Ten-Minute Gap Planner](01-personality-choices.md#pc-24) | D | preference | evergreen / E00 |
| PC-25 | [Town Council of Your Wants](01-personality-choices.md#pc-25) | D | layers | experimental / X00 |

### Friends & Social Play

| ID | Title | Wave | Build dependency | Rationale |
| --- | --- | --- | --- | --- |
| FS-01 | [The Group Plan Rescue](02-friends-social-play.md#fs-01) | A | preference | experimental / X00 |
| FS-02 | [Silent Consensus](02-friends-social-play.md#fs-02) | B | social | experimental / X00 |
| FS-03 | [Pack the Group Picnic](02-friends-social-play.md#fs-03) | B | layers | experimental / X00 |
| FS-04 | [Rebuild the Weekend Together](02-friends-social-play.md#fs-04) | B | sequence | experimental / X00 |
| FS-05 | [Two Truths and a Plot Twist](02-friends-social-play.md#fs-05) | B | base | experimental / X00 |
| FS-06 | [Who Chose That?](02-friends-social-play.md#fs-06) | C | social | experimental / X00 |
| FS-07 | [Friendship Time Capsule](02-friends-social-play.md#fs-07) | C | social | evergreen / E00 |
| FS-08 | [The Everyone-Wins Tournament](02-friends-social-play.md#fs-08) | C | social | experimental / X00 |
| FS-09 | [Carpool Seat Puzzle](02-friends-social-play.md#fs-09) | C | layers | experimental / X00 |
| FS-10 | [Gift Swap Roundtable](02-friends-social-play.md#fs-10) | C | layers | experimental / X00 |
| FS-11 | [Crew Roles Backstage](02-friends-social-play.md#fs-11) | C | layers | evergreen / E00 |
| FS-12 | [Surprise Party Timeline](02-friends-social-play.md#fs-12) | C | sequence | evergreen / E00 |
| FS-13 | [Roommate Treaty Table](02-friends-social-play.md#fs-13) | C | preference | evergreen / E00 |
| FS-14 | [Spot the Unspoken Assumption](02-friends-social-play.md#fs-14) | C | base | experimental / X00 |
| FS-15 | [Pass the Plot Pen](02-friends-social-play.md#fs-15) | C | branch | experimental / X00 |
| FS-16 | [Five-Minute Group Quest](02-friends-social-play.md#fs-16) | D | branch | trend-adjacent / R10 |
| FS-17 | [Spot It Together](02-friends-social-play.md#fs-17) | D | visual | experimental / X00 |
| FS-18 | [Group Photo Staging Puzzle](02-friends-social-play.md#fs-18) | D | visual | experimental / X00 |
| FS-19 | [Pass the Prompt Postcard](02-friends-social-play.md#fs-19) | D | social | experimental / X00 |
| FS-20 | [Guess the Opt-In Crowd](02-friends-social-play.md#fs-20) | D | survey | experimental / X00 |
| FS-21 | [Invitation Relay](02-friends-social-play.md#fs-21) | D | base | experimental / X00 |
| FS-22 | [Split It Squad](02-friends-social-play.md#fs-22) | D | preference | evergreen / E00 |
| FS-23 | [Party Role Draft](02-friends-social-play.md#fs-23) | D | social | experimental / X00 |
| FS-24 | [Icebreaker Ladder](02-friends-social-play.md#fs-24) | D | social | experimental / X00 |
| FS-25 | [Everyone Gets Something Swap](02-friends-social-play.md#fs-25) | D | base | experimental / X00 |

### Movies & TV

| ID | Title | Wave | Build dependency | Rationale |
| --- | --- | --- | --- | --- |
| MT-01 | [Continuity Detective](03-movies-tv.md#mt-01) | B | sequence | evergreen / E00 |
| MT-02 | [Your Rewatch Ritual Style](03-movies-tv.md#mt-02) | B | preference | evergreen / E00 |
| MT-03 | [Film Craft Decoder](03-movies-tv.md#mt-03) | A | base | evergreen / E00 |
| MT-04 | [Adaptation Switchboard](03-movies-tv.md#mt-04) | B | graph | evergreen / R08 |
| MT-05 | [Cozy or Creepy Scene Lab](03-movies-tv.md#mt-05) | B | preference | trend-adjacent / R06 |
| MT-06 | [The Unreliable Narrator Files](03-movies-tv.md#mt-06) | C | base | experimental / X00 |
| MT-07 | [Cinema Across Three Borders](03-movies-tv.md#mt-07) | C | graph | evergreen / E00 |
| MT-08 | [A Movie in Three Timelines](03-movies-tv.md#mt-08) | C | base | evergreen / E00 |
| MT-09 | [Animation Technique Lab](03-movies-tv.md#mt-09) | C | visual | evergreen / E00 |
| MT-10 | [Writers' Room Relay](03-movies-tv.md#mt-10) | C | social | experimental / X00 |
| MT-11 | [Trailer Grammar](03-movies-tv.md#mt-11) | C | base | evergreen / E00 |
| MT-12 | [Read the Rating Label](03-movies-tv.md#mt-12) | C | layers | evergreen / E00 |
| MT-13 | [One Actor, Three Worlds](03-movies-tv.md#mt-13) | C | graph | evergreen / E00 |
| MT-14 | [TV Episode Anatomy](03-movies-tv.md#mt-14) | C | base | evergreen / E00 |
| MT-15 | [Season Shape Preference](03-movies-tv.md#mt-15) | C | preference | evergreen / E00 |
| MT-16 | [Sound Design Ear Test](03-movies-tv.md#mt-16) | D | audio | experimental / X00 |
| MT-17 | [Fan Theory Evidence Board](03-movies-tv.md#mt-17) | D | base | experimental / X00 |
| MT-18 | [Wardrobe Story Reader](03-movies-tv.md#mt-18) | D | base | evergreen / E00 |
| MT-19 | [Movie Tech Problem Solvers](03-movies-tv.md#mt-19) | D | base | evergreen / E00 |
| MT-20 | [Showrunner's Season Planner](03-movies-tv.md#mt-20) | D | branch | experimental / X00 |
| MT-21 | [Three Ways to Follow the Dialogue](03-movies-tv.md#mt-21) | D | base | evergreen / E00 |
| MT-22 | [How Scares Work](03-movies-tv.md#mt-22) | D | base | trend-adjacent / R05 |
| MT-23 | [Documentary, Docudrama, or Mockumentary?](03-movies-tv.md#mt-23) | D | base | evergreen / E00 |
| MT-24 | [Story Shapes: Telenovela to Anthology](03-movies-tv.md#mt-24) | D | base | evergreen / E00 |
| MT-25 | [Poster Grammar Lab](03-movies-tv.md#mt-25) | D | visual | evergreen / E00 |

### Music

| ID | Title | Wave | Build dependency | Rationale |
| --- | --- | --- | --- | --- |
| MU-01 | [Build the Opening Three Songs](04-music.md#mu-01) | A | preference | experimental / X00 |
| MU-02 | [Festival Route Planner](04-music.md#mu-02) | B | base | experimental / X00 |
| MU-03 | [Behind the Album Credits](04-music.md#mu-03) | B | base | evergreen / E00 |
| MU-04 | [Sample or Cover? Concepts Edition](04-music.md#mu-04) | B | base | evergreen / E00 |
| MU-05 | [Your Mixtape Without Songs](04-music.md#mu-05) | B | preference | experimental / X00 |
| MU-06 | [Instrument, Sound, Role Links](04-music.md#mu-06) | C | layers | evergreen / E00 |
| MU-07 | [Music Scene Passport](04-music.md#mu-07) | C | layers | evergreen / E00 |
| MU-08 | [Genre Family Tree Builder](04-music.md#mu-08) | C | graph | evergreen / E00 |
| MU-09 | [Build the Touring Crew](04-music.md#mu-09) | C | layers | evergreen / E00 |
| MU-10 | [Music Terms Without the Panic](04-music.md#mu-10) | C | base | evergreen / E00 |
| MU-11 | [Studio Trick Translator](04-music.md#mu-11) | C | base | evergreen / E00 |
| MU-12 | [Rehearsal Cue Chain](04-music.md#mu-12) | C | base | experimental / X00 |
| MU-13 | [Format Shift: Order the Listening Tech](04-music.md#mu-13) | C | base | evergreen / E00 |
| MU-14 | [Music Myth Checkpoint](04-music.md#mu-14) | C | base | evergreen / E00 |
| MU-15 | [Small Venue Survival Guide](04-music.md#mu-15) | C | preference | evergreen / E00 |
| MU-16 | [Read the Room DJ](04-music.md#mu-16) | D | preference | experimental / X00 |
| MU-17 | [Garage Band Crossroads](04-music.md#mu-17) | D | branch | experimental / X00 |
| MU-18 | [Road Trip Playlist Treaty](04-music.md#mu-18) | D | social | experimental / X00 |
| MU-19 | [Predict My Mood Duet](04-music.md#mu-19) | D | social | experimental / X00 |
| MU-20 | [Your Music Discovery Trail](04-music.md#mu-20) | D | preference | evergreen / E00 |
| MU-21 | [Describe That Sound Out Loud](04-music.md#mu-21) | D | ai | experimental / X00 |
| MU-22 | [The Rhythm Switch](04-music.md#mu-22) | D | audio | experimental / X00 |
| MU-23 | [Loop Layer Lab](04-music.md#mu-23) | D | audio | experimental / X00 |
| MU-24 | [Mood Loops: Pick Your Pulse](04-music.md#mu-24) | D | audio | experimental / X00 |
| MU-25 | [Stage Plot Hotspot Hunt](04-music.md#mu-25) | D | visual | evergreen / E00 |

### Geography & Travel

| ID | Title | Wave | Build dependency | Rationale |
| --- | --- | --- | --- | --- |
| GT-01 | [Rain Shadow Road Trip](05-geography-travel.md#gt-01) | B | base | evergreen / E00 |
| GT-02 | [City-Region-Country Relay](05-geography-travel.md#gt-02) | A | layers | trend-adjacent / R14 |
| GT-03 | [The Time-Zone Rendezvous](05-geography-travel.md#gt-03) | B | grid | evergreen / E00 |
| GT-04 | [Postcard Perspective Puzzle](05-geography-travel.md#gt-04) | B | visual | experimental / X00 |
| GT-05 | [Mexico Beyond the Beach](05-geography-travel.md#gt-05) | B | base | evergreen / E00 |
| GT-06 | [Borderless Watersheds](05-geography-travel.md#gt-06) | C | layers | evergreen / E00 |
| GT-07 | [One River, Three Clues](05-geography-travel.md#gt-07) | C | base | evergreen / E00 |
| GT-08 | [The Missing Transit Stop](05-geography-travel.md#gt-08) | C | grid | experimental / X00 |
| GT-09 | [Seven-Hour Layover Lab](05-geography-travel.md#gt-09) | C | preference | experimental / X00 |
| GT-10 | [Twin Cities Across the Line](05-geography-travel.md#gt-10) | C | visual | evergreen / E00 |
| GT-11 | [Mexico's Altitude Ladder](05-geography-travel.md#gt-11) | C | layers | evergreen / E00 |
| GT-12 | [Midnight Sun or Mild Evening?](05-geography-travel.md#gt-12) | C | base | evergreen / E00 |
| GT-13 | [Chinooks, Santa Anas, and Lake Snow](05-geography-travel.md#gt-13) | C | base | evergreen / E00 |
| GT-14 | [Same Distance, Different Numbers](05-geography-travel.md#gt-14) | C | base | evergreen / E00 |
| GT-15 | [Wayfinding Style: Landmarks or Lines](05-geography-travel.md#gt-15) | C | preference | experimental / X00 |
| GT-16 | [Landscape Knowledge, Landscape Taste](05-geography-travel.md#gt-16) | D | preference | experimental / X00 |
| GT-17 | [Fair Midpoint Meetup](05-geography-travel.md#gt-17) | D | social | experimental / X00 |
| GT-18 | [Detour Diary: Prairie to Pacific](05-geography-travel.md#gt-18) | D | branch | experimental / X00 |
| GT-19 | [Names Layered on North America's Map](05-geography-travel.md#gt-19) | D | layers | evergreen / E00 |
| GT-20 | [Seen From Orbit: Why It Looks That Way](05-geography-travel.md#gt-20) | D | visual | evergreen / E00 |
| GT-21 | [Read the Climate Chart](05-geography-travel.md#gt-21) | D | visual | evergreen / E00 |
| GT-22 | [Hear the Landscape](05-geography-travel.md#gt-22) | D | audio | experimental / X00 |
| GT-23 | [Passenger Seat Rules](05-geography-travel.md#gt-23) | D | preference | experimental / X00 |
| GT-24 | [Itinerary Sanity Check](05-geography-travel.md#gt-24) | D | sequence | experimental / X00 |
| GT-25 | [Flat Map, Round World](05-geography-travel.md#gt-25) | D | visual | evergreen / E00 |

### Science & Nature

| ID | Title | Wave | Build dependency | Rationale |
| --- | --- | --- | --- | --- |
| SN-01 | [Backyard Evidence Lab](06-science-nature.md#sn-01) | A | base | trend-adjacent / R07 |
| SN-02 | [Moon Mission Control](06-science-nature.md#sn-02) | B | base | trend-adjacent / R11 |
| SN-03 | [Scale Shock](06-science-nature.md#sn-03) | B | base | evergreen / E00 |
| SN-04 | [Weather Without the Forecast](06-science-nature.md#sn-04) | B | base | evergreen / E00 |
| SN-05 | [Mystery Material](06-science-nature.md#sn-05) | B | base | evergreen / E00 |
| SN-06 | [Build a Food Web](06-science-nature.md#sn-06) | C | layers | evergreen / E00 |
| SN-07 | [Where Was the Light?](06-science-nature.md#sn-07) | C | visual | experimental / X00 |
| SN-08 | [The Sound You Cannot See](06-science-nature.md#sn-08) | C | audio | experimental / X00 |
| SN-09 | [The Pollinator Shift](06-science-nature.md#sn-09) | C | branch | evergreen / E00 |
| SN-10 | [Cause Chain Courtroom](06-science-nature.md#sn-10) | C | layers | experimental / X00 |
| SN-11 | [Field Notebook Style](06-science-nature.md#sn-11) | C | preference | trend-adjacent / R07 |
| SN-12 | [Tiny Terrarium Logic](06-science-nature.md#sn-12) | C | layers | trend-adjacent / R07 |
| SN-13 | [Where Did the Energy Go](06-science-nature.md#sn-13) | C | base | evergreen / E00 |
| SN-14 | [Fair Test Designer](06-science-nature.md#sn-14) | C | base | experimental / X00 |
| SN-15 | [Rock Cycle Road Trip](06-science-nature.md#sn-15) | C | branch | evergreen / E00 |
| SN-16 | [Night Sky Clue Hunt](06-science-nature.md#sn-16) | D | visual | evergreen / E00 |
| SN-17 | [Who Passed Through Here?](06-science-nature.md#sn-17) | D | visual | evergreen / E00 |
| SN-18 | [Season Reasoning Gauntlet](06-science-nature.md#sn-18) | D | base | evergreen / E00 |
| SN-19 | [Follow the Drop](06-science-nature.md#sn-19) | D | sequence | evergreen / E00 |
| SN-20 | [Species Under Pressure](06-science-nature.md#sn-20) | D | preference | evergreen / E00 |
| SN-21 | [Pickles to Pond Osmosis](06-science-nature.md#sn-21) | D | base | evergreen / E00 |
| SN-22 | [Freeze-Thaw Pothole Predictor](06-science-nature.md#sn-22) | D | layers | evergreen / E00 |
| SN-23 | [Predict, Reveal, Revise](06-science-nature.md#sn-23) | D | branch | experimental / X00 |
| SN-24 | [Spot the Weak Science Claim](06-science-nature.md#sn-24) | D | base | experimental / X00 |
| SN-25 | [Citizen Science Team Builder](06-science-nature.md#sn-25) | D | social | experimental / X00 |

### History & Culture

| ID | Title | Wave | Build dependency | Rationale |
| --- | --- | --- | --- | --- |
| HC-01 | [Museum of Everyday Objects](07-history-culture.md#hc-01) | A | base | evergreen / E00 |
| HC-02 | [Before the First iPhone](07-history-culture.md#hc-02) | B | base | evergreen / E00 |
| HC-03 | [The Archive Has a Missing Page](07-history-culture.md#hc-03) | B | base | experimental / X00 |
| HC-04 | [Fact, Source Claim, or Interpretation?](07-history-culture.md#hc-04) | B | layers | evergreen / E00 |
| HC-05 | [A City in Three Eras](07-history-culture.md#hc-05) | B | layers | evergreen / E00 |
| HC-06 | [How a Word Crossed Borders](07-history-culture.md#hc-06) | C | layers | evergreen / E00 |
| HC-07 | [Book, Place, Era: Connect the Three](07-history-culture.md#hc-07) | C | layers | evergreen / R08 |
| HC-08 | [Trade Routes Behind a Breakfast](07-history-culture.md#hc-08) | C | layers | evergreen / E00 |
| HC-09 | [Two Sources, One Event](07-history-culture.md#hc-09) | C | layers | evergreen / E00 |
| HC-10 | [The Graphic Novel Workshop](07-history-culture.md#hc-10) | C | visual | trend-adjacent / R09 |
| HC-11 | [Whose Voice Is Missing?](07-history-culture.md#hc-11) | C | preference | evergreen / E00 |
| HC-12 | [Time Capsule Packing Dilemma](07-history-culture.md#hc-12) | C | preference | experimental / X00 |
| HC-13 | [Design the Local History Museum](07-history-culture.md#hc-13) | C | preference | experimental / X00 |
| HC-14 | [The Festival Calendar Has a Gap](07-history-culture.md#hc-14) | C | grid | experimental / X00 |
| HC-15 | [Pack the Pack Train](07-history-culture.md#hc-15) | C | grid | experimental / X00 |
| HC-16 | [What the Railroad Changed](07-history-culture.md#hc-16) | D | base | evergreen / E00 |
| HC-17 | [Street Names: Clue or Overreach?](07-history-culture.md#hc-17) | D | base | evergreen / E00 |
| HC-18 | [Made by Hand: Order the Steps](07-history-culture.md#hc-18) | D | base | evergreen / E00 |
| HC-19 | [Living Cultures on the Museum Wall](07-history-culture.md#hc-19) | D | base | evergreen / E00 |
| HC-20 | [Many Hands Made This](07-history-culture.md#hc-20) | D | social | experimental / X00 |
| HC-21 | [Letters Across the Border](07-history-culture.md#hc-21) | D | branch | experimental / X00 |
| HC-22 | [The Map Was Updated](07-history-culture.md#hc-22) | D | visual | experimental / X00 |
| HC-23 | [Soundscapes of Everyday Life](07-history-culture.md#hc-23) | D | audio | experimental / X00 |
| HC-24 | [The Cropped Photograph](07-history-culture.md#hc-24) | D | visual | evergreen / E00 |
| HC-25 | [Footnote Treasure Hunt](07-history-culture.md#hc-25) | D | base | experimental / X00 |

### Food & Everyday Life

| ID | Title | Wave | Build dependency | Rationale |
| --- | --- | --- | --- | --- |
| FE-01 | [Build a Home Cafe](08-food-everyday-life.md#fe-01) | A | preference | trend-adjacent / R07 |
| FE-02 | [Kitchen Tool Detective](08-food-everyday-life.md#fe-02) | B | base | evergreen / E00 |
| FE-03 | [Flavor Triangle](08-food-everyday-life.md#fe-03) | B | preference | evergreen / E00 |
| FE-04 | [Fridge-to-Meal Puzzle](08-food-everyday-life.md#fe-04) | B | grid | experimental / X00 |
| FE-05 | [Grocery Aisle Time Machine](08-food-everyday-life.md#fe-05) | B | base | evergreen / E00 |
| FE-06 | [Pantry Swap Laboratory](08-food-everyday-life.md#fe-06) | C | graph | evergreen / E00 |
| FE-07 | [The Lunchbox Across Three Borders](08-food-everyday-life.md#fe-07) | C | graph | evergreen / E00 |
| FE-08 | [Texture Tournament](08-food-everyday-life.md#fe-08) | C | preference | experimental / X00 |
| FE-09 | [Menu Word Decoder](08-food-everyday-life.md#fe-09) | C | base | evergreen / E00 |
| FE-10 | [Mise en Place Race](08-food-everyday-life.md#fe-10) | C | sequence | evergreen / E00 |
| FE-11 | [Receipt Riddles](08-food-everyday-life.md#fe-11) | C | grid | experimental / X00 |
| FE-12 | [Dinner on a Deadline](08-food-everyday-life.md#fe-12) | C | sequence | experimental / X00 |
| FE-13 | [Sauce Family Tree](08-food-everyday-life.md#fe-13) | C | layers | evergreen / E00 |
| FE-14 | [Spice Passport](08-food-everyday-life.md#fe-14) | C | graph | evergreen / E00 |
| FE-15 | [Cookware Casting Call](08-food-everyday-life.md#fe-15) | C | base | evergreen / E00 |
| FE-16 | [Weeknight Dinner Dilemma](08-food-everyday-life.md#fe-16) | D | branch | experimental / X00 |
| FE-17 | [Potluck Without Doubles](08-food-everyday-life.md#fe-17) | D | social | experimental / X00 |
| FE-18 | [Kitchen Sound Guess](08-food-everyday-life.md#fe-18) | D | audio | evergreen / E00 |
| FE-19 | [Counter Hotspot Hunt](08-food-everyday-life.md#fe-19) | D | visual | experimental / X00 |
| FE-20 | [Plating Style Match](08-food-everyday-life.md#fe-20) | D | visual | experimental / X00 |
| FE-21 | [Dish Rack Logic](08-food-everyday-life.md#fe-21) | D | grid | experimental / X00 |
| FE-22 | [Seven Guests, Four Servings](08-food-everyday-life.md#fe-22) | D | grid | evergreen / E00 |
| FE-23 | [Watch Party Snack Table](08-food-everyday-life.md#fe-23) | D | preference | trend-adjacent / R12 |
| FE-24 | [Reading Night Snacks](08-food-everyday-life.md#fe-24) | D | preference | evergreen / R08 |
| FE-25 | [Gadget Drawer Verdict](08-food-everyday-life.md#fe-25) | D | preference | experimental / X00 |

### Sports & Games

| ID | Title | Wave | Build dependency | Rationale |
| --- | --- | --- | --- | --- |
| SG-01 | [Pick Your Co-op Role](09-sports-games.md#sg-01) | A | preference | experimental / X00 |
| SG-02 | [Watch-Party Rulebook](09-sports-games.md#sg-02) | B | preference | trend-adjacent / R04 |
| SG-03 | [Soccer Words Across Borders](09-sports-games.md#sg-03) | B | base | evergreen / E00 |
| SG-04 | [Board Game Mechanic Mixer](09-sports-games.md#sg-04) | B | layers | evergreen / E00 |
| SG-05 | [Sports Equipment Evolution](09-sports-games.md#sg-05) | B | base | evergreen / E00 |
| SG-06 | [Stadium-City-Country Links](09-sports-games.md#sg-06) | C | layers | evergreen / E00 |
| SG-07 | [Replay the Turning Point](09-sports-games.md#sg-07) | C | base | trend-adjacent / R04 |
| SG-08 | [The Court Is a Diagram](09-sports-games.md#sg-08) | C | visual | evergreen / E00 |
| SG-09 | [Name the Game by Its Rules](09-sports-games.md#sg-09) | C | graph | trend-adjacent / R10 |
| SG-10 | [The Scorekeeper's Dictionary](09-sports-games.md#sg-10) | C | graph | evergreen / E00 |
| SG-11 | [Boss Fight Logic Grid](09-sports-games.md#sg-11) | C | grid | experimental / X00 |
| SG-12 | [What Survives the Reload?](09-sports-games.md#sg-12) | C | base | evergreen / E00 |
| SG-13 | [Table Rules Lawyer](09-sports-games.md#sg-13) | C | base | experimental / X00 |
| SG-14 | [Adaptive Sports Rules Primer](09-sports-games.md#sg-14) | C | base | evergreen / E00 |
| SG-15 | [Women’s Sports Milestone Relay](09-sports-games.md#sg-15) | C | base | evergreen / E00 |
| SG-16 | [Pickup Game Temperament](09-sports-games.md#sg-16) | D | preference | evergreen / E00 |
| SG-17 | [Rule Designer's Dilemma](09-sports-games.md#sg-17) | D | preference | experimental / X00 |
| SG-18 | [Game Accessibility Toolkit](09-sports-games.md#sg-18) | D | graph | evergreen / E00 |
| SG-19 | [Console Controllers Through the Decades](09-sports-games.md#sg-19) | D | base | evergreen / E00 |
| SG-20 | [Your Session Zero Wish List](09-sports-games.md#sg-20) | D | preference | experimental / X00 |
| SG-21 | [Referee Signal Decoder](09-sports-games.md#sg-21) | D | visual | evergreen / E00 |
| SG-22 | [The Missing Point](09-sports-games.md#sg-22) | D | base | experimental / X00 |
| SG-23 | [Games From the Americas, Played Today](09-sports-games.md#sg-23) | D | base | evergreen / E00 |
| SG-24 | [What Is That Game Sound Telling You?](09-sports-games.md#sg-24) | D | audio | experimental / X00 |
| SG-25 | [The Last Move Mystery](09-sports-games.md#sg-25) | D | sequence | experimental / X00 |

### Logic & Wordplay

| ID | Title | Wave | Build dependency | Rationale |
| --- | --- | --- | --- | --- |
| LW-01 | [The Elevator Schedule](10-logic-wordplay.md#lw-01) | A | base | evergreen / E00 |
| LW-02 | [One Rule Is Wrong](10-logic-wordplay.md#lw-02) | B | base | experimental / X00 |
| LW-03 | [A Message With Missing Punctuation](10-logic-wordplay.md#lw-03) | B | base | evergreen / E00 |
| LW-04 | [The Two-Way Clue](10-logic-wordplay.md#lw-04) | B | base | evergreen / E00 |
| LW-05 | [The Helpful Red Herring](10-logic-wordplay.md#lw-05) | B | base | evergreen / E00 |
| LW-06 | [The Three-Layer Alibi](10-logic-wordplay.md#lw-06) | C | layers | experimental / X00 |
| LW-07 | [The Museum Label Mix-Up](10-logic-wordplay.md#lw-07) | C | layers | experimental / X00 |
| LW-08 | [Repair the Transit Diagram](10-logic-wordplay.md#lw-08) | C | visual | experimental / X00 |
| LW-09 | [The Awkward Seating Chart](10-logic-wordplay.md#lw-09) | C | base | experimental / X00 |
| LW-10 | [Ask One Better Question](10-logic-wordplay.md#lw-10) | C | branch | experimental / X00 |
| LW-11 | [The Unreliable Lighthouse Log](10-logic-wordplay.md#lw-11) | C | layers | experimental / X00 |
| LW-12 | [Fold, Punch, Unfold](10-logic-wordplay.md#lw-12) | C | visual | experimental / X00 |
| LW-13 | [Homophone Radio Relay](10-logic-wordplay.md#lw-13) | C | audio | evergreen / E00 |
| LW-14 | [Mirror Sign Reader](10-logic-wordplay.md#lw-14) | C | visual | experimental / X00 |
| LW-15 | [Words Hiding Between Words](10-logic-wordplay.md#lw-15) | C | base | evergreen / E00 |
| LW-16 | [Change One Letter, Fix the Sentence](10-logic-wordplay.md#lw-16) | D | base | evergreen / E00 |
| LW-17 | [Half-Clue Handoff](10-logic-wordplay.md#lw-17) | D | social | experimental / X00 |
| LW-18 | [Hunch or Proof](10-logic-wordplay.md#lw-18) | D | preference | experimental / X00 |
| LW-19 | [The Rule Sorting Machine](10-logic-wordplay.md#lw-19) | D | layers | experimental / X00 |
| LW-20 | [Build Order: What Comes First?](10-logic-wordplay.md#lw-20) | D | sequence | experimental / X00 |
| LW-21 | [Double Duty Words](10-logic-wordplay.md#lw-21) | D | base | evergreen / E00 |
| LW-22 | [Which Weighing Settles It?](10-logic-wordplay.md#lw-22) | D | base | experimental / X00 |
| LW-23 | [Guess the Gatekeeper's Rule](10-logic-wordplay.md#lw-23) | D | base | experimental / X00 |
| LW-24 | [Read the Fine Print Conditionals](10-logic-wordplay.md#lw-24) | D | layers | evergreen / E00 |
| LW-25 | [Shift Note Decoder](10-logic-wordplay.md#lw-25) | D | base | evergreen / E00 |
