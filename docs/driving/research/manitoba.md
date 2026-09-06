# Manitoba - research note

Bank slug `manitoba`. Content date **2026-09-06**. Handbook edition
**DVL0019, 02/02/2026**, which is Manitoba Public Insurance's own back-cover
mark on the PDF read here.

## 1. Sources read

| # | Title | Publisher | Edition label | URL | Fetched | How |
|---|---|---|---|---|---|---|
| 1 | Driver's Handbook | Manitoba Public Insurance | `DVL0019` / `02/02/2026` / `25-105-6230`, priced `$5.00` on the back cover | https://www.mpi.mb.ca/en/PDFs/CompleteHandbook.pdf | 2026-09-06 | Direct download to `tmp/manitoba-handbook.pdf` (142 PDF pages, 138 printed pages) |
| 2 | The Highway Traffic Act, C.C.S.M. c. H60 | Manitoba Laws (Legislative Counsel) | Consolidated bilingual version, current to the date fetched | https://web2.gov.mb.ca/laws/statutes/ccsm/h060.php | 2026-09-06 | Direct, saved as `tmp/manitoba-statute.txt` (1.6 MB, English and French in parallel) |
| 3 | Graduated Driver Licensing guide | Manitoba Public Insurance | Undated in the copy fetched; no DVL code found in the extracted text | mpi.mb.ca publication | 2026-09-06 | Direct, saved as `tmp/manitoba-gdl.txt`. **Read for background only. No excerpt is taken from it and no question is keyed on a figure that appears only here** - see the conflict in section 5. |
| 4 | MPI Class 5 licensing / testing web page | Manitoba Public Insurance | n/a | https://www.mpi.mb.ca/testing-for-your-class-5-licence/ | 2026-09-06 | **FAILED.** The saved file `tmp/manitoba-mpi-class5.txt` is a 761-byte Cloudflare block page, not the page content. It contributed nothing. Recorded here so nobody later mistakes it for a source that was read. |
| 5 | 67 Reddit threads | r/Winnipeg, r/Manitoba, r/driving | n/a | see section 6 | 2026-09-06 | `scripts/fetch-reddit.py`, saved as `tmp/manitoba-reddit-*.txt` |

Only sources 1 and 2 are quoted. Every one of the 300 excerpts is a verbatim
substring of one of those two files, proved mechanically (section 8).

## 2. Test format

| Item | Value | Where it came from |
|---|---|---|
| Questions | 30 (Class 5) | **NOT published by MPI.** Two independent Reddit reports, twelve years apart, agree exactly - see section 6. |
| To pass | 24 correct (80%) | Same two reports. |
| Time limit | 30 minutes | Handbook p.10, "General testing information" |
| Open book | No; phones and electronic devices barred from the test area | Handbook p.8 and p.10 |
| Content | Traffic laws, safe driving practices, recognition of road signs | Handbook p.8 |
| Retest wait (knowledge) | 7 days for a GDL driver | Handbook p.10 |
| Retest wait (road test) | 14 days | Handbook p.10 |
| Tests per day | One of the same class | Handbook p.10 |
| Booking | By appointment only, weekdays, through an Autopac agent, up to 8 weeks ahead | Handbook p.9 |
| Languages | English and French, plus more than 20 others for Class 5 on request | Handbook p.9 |
| Fee | See the conflict in section 5. **No question is keyed on it.** | Handbook p.9 vs GDL guide p.23 |

**The question count and the pass mark are the weakest facts in this bank.**
MPI publishes neither. `officialTest.notes` says so in the learner's own words
rather than presenting 30/24 as official.

## 3. Section and page map

Printed page numbers. In the PDF, add 2 (printed p.22 is PDF page 24); the
`hb()` helper in the excerpt and set files does this.

| Printed | Section |
|---|---|
| 5 | Establishing your identity |
| 7 | The Class Licence System |
| 8 | Basic Class 5 licensing requirements (incl. knowledge test) |
| 9-10 | Test appointments; key points about your tests |
| 11 | Graduated Driver Licensing; Class 5L, 5I, 5F |
| 13 | Authorized Instruction (A Stage) |
| 14-15 | One-piece licence; renewal; keeping the licence valid; illegal use |
| 16 | Operating heavy and agricultural equipment |
| 17-20 | Occupant restraints: seatbelts, infant and child seats, booster seats |
| 22-38 | 1. Signs and signals (shapes and colours 22, warning 23, construction 26, regulatory 27, guide 29, stop 30, four-way 30, yield 31, signals 31, transit priority 33, pavement markings 34, reserved lanes 35, cycling markings 37) |
| 39-56 | 2. Starting from a parked position, lane changing, curves, turning (hand signals 43, right turns 44, left turns 47, U-turns 55, roundabouts 56) |
| 57-70 | 3. Driving responsibly (speed 57, following 57, passing 58, No-zone 59, expressway 60, right-of-way 61, emergency vehicles 62, school buses 63, transit buses 64, construction zones 67, zipper merge 68, railway crossings 69) |
| 71-75 | 4. Pedestrian safety (crosswalks 71, pedestrian corridors 73, people who are blind 74, school and playground areas 75) |
| 76-79 | 5. Sharing the road: motorists and cyclists |
| 80-82 | 6. Backing up; three-point turn |
| 83-89 | 7. Parking (parallel 83, backing skill test 85, angle 86, hills 88, pointers and illegal parking 89) |
| 90-93 | 8. Vehicle equipment |
| 94-101 | 9. Poor driving conditions (night 95, fatigue 96, distractions 96, gravel 97, winter 98, hills 99, farm equipment 99, animals 100, pilot vehicles 101) |
| 102-107 | 10. Driving emergencies |
| 108-110 | 11. Collisions |
| 112-116 | Section 2.1 Driving while impaired |
| 117-120 | Criminal Code suspensions; driving while suspended; Driver Improvement and Control |
| 122-128 | Driver Safety Rating; safe driving programs; driver training |
| 130-137 | More information; collision report; metric converter |

## 4. What the handbook does not say

Each of these is tested somewhere in the bank and the number comes from The
Highway Traffic Act, not from the book.

| Rule | Statute section | Why the handbook is not enough |
|---|---|---|
| Default speed limits framed by "restricted speed area" | s.94.2, s.95(1)(a) | The handbook gives 50 and 90 but not the legal frame the Act uses, which is the same frame that decides the 5 m / 15 m railway stop. |
| Speeding while under the posted limit | s.95(2) | The handbook says only "poor driving conditions will require you to drive more slowly". The Act makes an unreasonable speed an offence outright. |
| General right-of-way tie-break | s.128 | The handbook gives the rule; the Act gives the "approximately the same time" test the rule depends on. |
| Yielding after a required stop | s.130 | The handbook does not state the duty to yield to an immediate hazard after stopping at a stop sign. |
| Where you stop at a required stop | s.136(1) | Cross-checks the handbook's stop-line / sidewalk / intersecting-highway ladder. |
| Overtaking on the right | s.115(1) | The handbook's list ("when overtaking a vehicle making a left turn / on one-way streets / on streets with marked lanes") is printed with a bullet glyph missing, so it reads as two run-together items. The Act's enumeration is unambiguous. |
| Passing sight distance, 150 m | s.116(3)(a) | Absent from the handbook entirely. |
| Move-over reduced speeds, 40 / 60 km/h | s.109.1(2.1) | The handbook gives the same numbers as "under 80" and "80 or higher". The Act's "more than 40 but not more than 79" wording is the precise version. |
| Parking setbacks incl. bridges and tunnels | s.122(1) | The handbook's illegal-parking list omits the bridge and tunnel ban entirely (tested at `mb_s5_29`). |
| Stopping at railway crossings | s.134(2) | The handbook lists "it's illegal to..." acts; the Act gives the four triggers for a mandatory stop. |
| School bus stop and the divided-highway exception | s.137(2), s.137(3) | Corroborates the handbook's "physical median or ditch" wording. |
| Pedestrian right-of-way in a crosswalk | s.139(1) | The handbook gives the duty; the Act gives the "half of the highway" test behind it. |
| Slow driver presumption, under 30 km/h | s.109(3) | Absent from the handbook. |
| Driving around a rotary traffic island | s.109(4) | Absent from the handbook's roundabout passage. |

Numbers the test expects that ARE in the handbook and are easy to miss:
horn audible at 60 m (p.92), brakes stopping from 30 km/h within 7.6 m (p.90),
tread 1.6 mm (p.92), studded tires illegal 30 April to 1 October (p.92), frost-free
windows 1 November to 31 March (p.92), night visibility 30 m low beam / 110 m
high beam (p.95), dimming at 450 m oncoming and 60 m following (p.95), headlights
on when visibility falls to 60 m (p.91), gravel following distance six seconds
(p.97), ice-road recommended speed 15 km/h for 7 tonnes or more (p.98), farm
equipment maximum 40 km/h (p.99), pilot vehicle 100 m to 500 m (p.101), flares
60 m either side (p.105), parallel-park gap 45 cm (p.84), backing skill test
1.85 m x 7.5 m with three attempts or four minutes (p.85), booster seat until
145 cm / 36 kg / nine years (p.19), distracted-driving fine $672 (p.97).

## 5. Conflicts, and how each was resolved

1. **Test and licence fees, and the remedial-instruction ladder.** The
   handbook (p.9, p.10) says a knowledge test costs **$10**, a Class 5 road
   test **$30**, and that **four** unsuccessful Class 5 road tests trigger a
   minimum of **two hours** of professional instruction before a fifth attempt.
   MPI's separately published GDL guide (p.4, p.20, p.23-25) says **$12**,
   **$35**, and **three** failures triggering **five hours**. Both are MPI
   publications and both are undated on the point. **Resolution: no question
   in this bank is keyed on a fee or on that ladder.** The handbook's version
   appears only inside the `context` of `mb_s4_07`, where it is attributed to
   the handbook by name. Both documents say charges are subject to change.
2. **Right turn on red.** The handbook permits it after a complete stop unless
   a sign or traffic and pedestrian conditions say otherwise. Municipal bylaws
   add signed exceptions in particular places. **Resolution:** every item is
   keyed on the stop and on the sign (`mb_s1_08`), never on a claim about a
   particular intersection.
3. **Passing on the right.** The handbook's bulleted list on p.58 is printed
   with a missing bullet glyph, so the extracted text reads "when overtaking a
   vehicle making a left turn on one-way streets" as one item. Read that way it
   states a narrower rule than the Act does. **Resolution:** the excerpt and
   the question (`mb_s5_11`) both use s.115(1), and the handbook page is not
   cited for this rule.
4. **Move-over speeds.** The handbook's "under 80 km/h" and the Act's "more
   than 40 km/h but not more than 79 km/h" describe the same band. **Resolution:**
   the Act's wording is quoted; both questions (`mb_s2_14`, `mb_s5_15`) are set
   at speeds where the two readings agree.
5. **A double solid line is not a physical separation.** The handbook states
   this twice, for school buses (p.63) and for crosswalks (p.71), and s.137(3)
   agrees. There is no conflict here, but it is recorded because it is the
   single most load-bearing sentence in the bank: it decides `mb_s3_05`,
   `mb_s5_08` and `mb_s5_13`.

## 6. What learners report

Sixty-seven threads were fetched. Of those, **21 carried knowledge-test or
graduated-licensing signal**; the rest are road-test experiences, MPI claims
and insurance questions, Driver Z course-registration complaints, or unrelated
provincial-exam threads that the search picked up, and none of those shaped a
question. All paraphrased. No comment text is reproduced and no recalled exam
item was turned into a question.

| Subreddit | Thread | Year | Paraphrased claim | Shaped |
|---|---|---|---|---|
| r/Winnipeg | MPI Driver's Knowledge Test Passing Grade | 2013 | A commenter posted a table of every MPI test class; Class 5 is listed as 30 questions, 6 allowed wrong, 24 needed right. A second commenter who had just sat it gave the same 24/30. | `officialTest`, set 6 framing |
| r/Winnipeg | MPI Class 5 Knowledge Test Coming Up, Any Advice? | 2026 (2mo) | A parent of a Driver Z student, twelve years after the thread above, gave the same figure: 30 questions, 24 to pass. Independent corroboration. | `officialTest` |
| r/Winnipeg | Questions about the MPI Knowledge test | 2021 | Several commenters said 30 questions with 6 wrong being a fail. One said the test can end early once enough are answered correctly. | `officialTest.notes` |
| r/Winnipeg | Knowledge test in 5 days, super nervous lol | 2025 | A commenter described finishing at question 16 because the pass threshold was already reached, with time to spare. Another advised memorising "numbers like how far to be parked away from fire hydrant". | `officialTest.notes`; `mb_s1_09`, `mb_s5_04`, `mb_s6_06` |
| r/Winnipeg | How hard is the class 5 knowledge test? | 2021 | A commenter listed exactly what stumped them: anything distance-related (an example given was how far a horn must be heard), how long the Intermediate Stage runs, and how long you have to convert an out-of-province licence. | `mb_s3_11`, `mb_s5_06`, `mb_s3_30`, `mb_s5_03`, whole of set 5 |
| r/Winnipeg | MPI Class 5 Knowledge Test Coming Up (same thread) | 2026 | Advice to "brush up on anything with numbers (how far away to stop from railway tracks, etc.)". A second commenter warned that questions are worded to differ slightly from the practice versions. | `mb_s3_01`, `mb_s5_07`, `mb_s3_02` |
| r/Manitoba | Questions about class 5 knowledge test | 2022 | 30 questions, with wording sometimes altered from the online practice quizzes. | `officialTest` |
| r/Winnipeg | MPI knowledge test | 2024 | Practice quizzes cycle a fixed pool; the real test is similar. | Set 6 shape only |
| r/Winnipeg | Dumb question about my learners license | 2020 | A learner had been told by a parent that only one passenger was allowed. Several commenters corrected this: rear-seat passengers are allowed up to the number of seatbelts, and the confusion came from other provinces. One commenter also said the supervisor needs five years, corrected by another to three. **Checked against the handbook p.11: rear passengers up to functioning seatbelts, supervisor three years at Class 5F.** | `mb_s5_01`, `mb_s3_31`, `localGotchas` |
| r/Winnipeg | Dumb question (same thread) | 2020 | A commenter noted the oddity that the passenger limit begins after you pass the road test, not before. Confirmed: the midnight-to-5 a.m. cap is an Intermediate Stage rule. | `mb_s5_02` |
| r/Manitoba | Question about obtaining a driving licence | 2020 | A commenter laid out the ladder as written test, 9 months Learner, road test, 15 months Intermediate, Full with restrictions, 36 months. Matches the handbook. | `mb_s3_30`, `mb_s5_03`, `mb_s6_09` |
| r/Winnipeg | How long can someone have a learners permit for? | 2023 | Multiple people have held a learner licence for 6 to 16 years without retaking the written test, provided they kept renewing. One commenter said letting it lapse for two years forces a rewrite. **Not tested** - no official source found for the two-year figure. | Nothing; recorded in section 7 |
| r/Winnipeg | MPI Driver's Exam Question about Parallel Parking | 2026 (12d) | A commenter quoted MPI's own testing page: three tries or four minutes, a 1.85 m by 7.5 m space, and finishing within 46 cm of the curb. The handbook's own figures for the same test are 1.85 m x 7.5 m, three attempts or four minutes, and a 45 cm parallel-parking gap. | `mb_s4_12`, `mb_s4_13`, `mb_s4_14` |
| r/Manitoba | .05 to .079 question for a friend | 2025 | Discussion of what happens in that band. Verified against the handbook p.115: Tiered Administrative Licence Suspension. | `mb_s3_28`, `mb_s5_19` |
| r/Manitoba | got a massive speeding ticket... 50+kms over | 2025 | Speeding consequences and the Driver Safety Rating scale. | `mb_s6_24` context |
| r/Manitoba | Forgot my license at home | 2024 | Whether the licence has to be carried. Verified: handbook p.14, it must be in your possession and produced with the registration certificate. | `mb_s1_25` |
| r/Winnipeg | Winnipeg MPI driving test - can I occupy the bike lane when making a right turn? | 2024 | Uncertainty about turning right across a bike lane. Verified against p.35 and p.76: turn as close as practicable to the curb into the first lane, and yield to any cyclist on your right. | `mb_s4_17`, `mb_s5_28` |
| r/Manitoba | Road test: left turns from a street with a stop sign onto a street with a boulevard | 2023 | Confusion about which lane to end up in. Verified against p.50 and p.53. | `mb_s5_10`, `mb_s6_29` |
| r/Winnipeg | Failed road test / Road test vent / Setting up capable drivers to fail | 2024-2025 | Road-test complaints. Deliberately **not used** - road-test process is out of scope for a knowledge-test bank. | Nothing |
| r/driving | Failed my learners permit test today; I failed the learners permit test 4 times now | 2025 | Not Manitoba. Read and discarded. | Nothing |
| r/Winnipeg | Driver Z threads (registration, availability, revamp) | 2025-2026 | Course-access complaints, not test content. Confirms Driver Z is the high-school route referenced at `mb_s1_11`. | Context only |

**The three strongest traps the forum research produced**, all verified back to
the handbook before use:

1. **Learner passenger rules run backwards from other provinces.** People
   police a Manitoba learner harder than the law does (rear seats are allowed,
   full, up to the seatbelt count) and then relax at exactly the stage where
   the cap actually starts. `mb_s5_01`, `mb_s5_02`.
2. **The distance and duration questions.** Named unprompted across four
   threads spanning five years: hydrant, railway rail, horn, stage lengths.
   Set 5 is built on this and set 3 reinforces it.
3. **The supervising-driver figure.** "Five years" is repeated confidently on
   the forums; the handbook says three years at Class 5F. `mb_s3_31`.

## 7. Local gotchas

The five in `localGotchas`, and why each catches people:

1. **A learner may fill the back seat.** Manitoba lets a Class 5L carry
   rear-seat passengers up to the number of working seatbelts, with the
   supervisor as the only front-seat passenger. Most provinces allow nobody.
   Families arriving from elsewhere over-restrict at the Learner Stage and then
   under-restrict at the Intermediate Stage, which is where the real cap sits.
2. **Zero tolerance runs about five years.** Nine months Learner, 15 months
   Intermediate, then 36 months of the Full Stage. The Full Stage licence looks
   like the end of the restrictions and is not.
3. **The school-bus divided-highway exception needs a physical divider.** Two
   handbook pages say a double solid line is not a physical separation, and
   s.137(3) agrees. Drivers apply it to any wide road.
4. **The horn and muffler standards.** 60 metres audible, muffler capable of
   preventing excessive noise. Named on the forums as exactly the kind of item
   that appeared and caught someone out.
5. **Stage time is only earned while the licence is valid.** The annual charge
   falls on an anniversary date four months less a day after your birthday.
   Missing it suspends the licence, and the months do not count.

## 8. Verification

Run on **2026-09-06**, against the tree as it stands.

```
$ npx tsx scripts/extract-quotes.mjs manitoba
tmp/manitoba-quotes.json: 300 quotes

$ python scripts/verify-excerpts.py manitoba tmp/manitoba-handbook.pdf tmp/manitoba-statute.txt
manitoba: 300/300 quotes verified verbatim against 2 source(s)
```

`tmp/manitoba-verify.json` records `nonOfficial: 0`. Both sources are official:
the MPI handbook PDF and the Manitoba Laws consolidation of the Act.

```
$ python scripts/build-excerpt-snippets.py manitoba tmp/manitoba-handbook.pdf
271 snippets rendered to public/handbook/manitoba/
```

Of the 300 excerpts, **271 (90%) have a rendered page image**. The 29 without
one are the 25 statute quotes, which do not appear in the handbook PDF and
report MISS by design, plus four handbook quotes whose passage crosses a column
or page break. Three snippets were opened and checked by eye
(`school-bus-five-metres`, `parking-hydrant-three-metres`, `horn-60-metres`):
tight crops, the quoted sentence highlighted, no character clipped at the left
margin.

```
$ npx tsx scripts/validate-driving.mjs --only manitoba
=== Manitoba (MB) - 6 sets ===
  WARN    excerpt passing-on-right: quote is 337 chars - trim toward one or two sentences
  snippets: 271 in manifest, 271/300 excerpts covered (90%)
  quotes verified: 300/300 verbatim against manitoba-handbook.pdf, manitoba-statute.txt
  excerpts: 300 (125 unused), questions wired: 195/195 (100%), quoted total: 42.3k chars
  questions: 195
  answer positions: A:25% B:25% C:25% D:25%
  context: 100%  source links: 100%  starred: 18%
  topics: safety:31 rules:30 licensing:19 parking:18 signals:17 sharing:16 emergencies:16 signs:14 rightOfWay:12 impairment:12 speed:10
ERRORS: 0   WARNINGS: 1
```

**The one warning, and why it stands.** `passing-on-right` quotes s.115(1) of
the Act at 337 characters, 17 over the 320-character soft warning (the hard cap
is 600). It is a single statutory sentence with an enumerated list, and the
question that uses it (`mb_s5_11`) turns on the second limb, so trimming to the
first limb would leave a receipt that does not support the answer. The handbook's
own version of the same rule cannot be substituted, because the printed bullet
glyph is missing there and the extracted text reads as a narrower rule than the
law states (section 5, conflict 3).

Two other over-length warnings were fixed rather than explained:
`railway-illegal-acts` was re-cut to the first limb of s.134(2), and
`move-over-speeds` was deleted outright as an unused duplicate of
`hta-move-over-speeds`, which states the same rule more briefly.

```
$ npx tsc --noEmit -p .
(no errors in src/lib/driving/manitoba)
```

## 9. What could not be verified

- **Question count and pass mark.** MPI does not publish either. The 30/24
  figure rests on two independent Reddit reports twelve years apart that agree
  exactly, plus two weaker corroborations. `officialTest.notes` states plainly
  that it is not an official figure. The `mpi.mb.ca` licensing page that might
  have settled it returned a Cloudflare block page.
- **The early-stop behaviour and the skip-and-return behaviour.** Three
  learners describe the test ending once enough answers are correct, and one
  describes skipping and returning. Neither appears in any MPI document. Both
  are in `officialTest.notes`, attributed to learners and marked as
  undocumented.
- **The two-year lapse rule for a learner licence.** Several r/Winnipeg
  commenters say a learner licence lapsed for two years forces a knowledge-test
  rewrite. No official source was found. **Not tested anywhere in the bank.**
- **Out-of-province licence conversion window.** Named on the forums as a test
  topic ("how long do you have to convert"). The handbook does not state a
  window and the GDL guide describes only credit for time held elsewhere. **Not
  tested.**
- **Which MPI publication is current on fees.** The handbook and the GDL guide
  disagree and neither carries a date on the point. No question depends on it.
- **Whether the GDL guide fetched is the current edition.** The extracted text
  carries no DVL code or revision date. It is used for background only.
