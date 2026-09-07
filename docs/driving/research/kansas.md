# Kansas - research note

Built 2026-09-06. Slug `kansas`, code `KS`. `contentDate` 2026-09-06.

## 1. Sources read

| Source | Publisher | Edition label | URL | Fetched | How |
|---|---|---|---|---|---|
| Kansas Driving Handbook, Non-Commercial Driver's Manual | Kansas Department of Revenue, Division of Vehicles | "AAMVA 09 Model Test Version (Revised February 2022)" - the only edition label anywhere in the book, printed on the cover | https://www.ksrevenue.gov/pdf/dlhb.pdf | 2026-09-06 | Direct download, 112 pages, 3.2 MB, text layer intact |
| Kansas Statutes chapter 8, articles 15, 17 and 21 | Kansas Office of Revisor of Statutes | Current through the 2026 session as served | https://www.ksrevisor.gov/statutes/chapters/ch08/ | 2026-09-06 | Direct fetch of eight individual section pages; visible text saved to `tmp/kansas-statutes.txt` |
| Kansas Graduated Driver License stages | Kansas Department of Revenue, Division of Vehicles | Undated web page | https://www.ksrevenue.gov/dovgdl.html | 2026-09-06 | Fetched; used only to confirm the four-stage structure, which matches the handbook |

Publisher check, because the brief named it and two recent banks found the brief
wrong: the Kansas handbook IS published by the Kansas Department of Revenue.
The Governor's letter on page 2 signs off referring readers to ksrevenue.gov,
page 9 sends applicants to ksrevenue.gov/dovgdl.html, and the Division of
Vehicles runs Driver Solutions out of Topeka (page 10). No state police
involvement, unlike Arkansas.

Licence-stage check, likewise: the knowledge test in Kansas issues an
**Instruction Permit** (the handbook uses "Instruction Permit" on pages 9 and
94 and "Instructional Permit" as the Section 1 heading on page 12 - the same
credential, spelled two ways in the same book). It is NOT a learner's licence
and NOT a restricted licence; those are later stages. `licenceName` is set to
"Instruction Permit (Class C or M)", which is the handbook's own age-table
wording on page 9.

The handbook's own hierarchy statement, page 10: "Portions of this manual have
been summarized. Kansas law will take precedence over discrepancies or
omissions in the manual. For a complete citation of driver license statutes.
Refer to: Chapter 8, Article 2 of the Kansas Motor Vehicle Act." (The missing
verb after "statutes." is the source's, preserved.)

No third-party practice site, aggregator PDF, Quizlet deck or blog was used for
any fact. Several appear in the forum reading below and are recorded there as
evidence about learners, not about the law.

## 2. Test format

Everything in `officialTest` comes from the handbook, which is unusually
explicit about its own exam.

| Fact | Value | Source |
|---|---|---|
| Question count | 25 multiple choice | Handbook p. 13 and p. 94 (stated twice) |
| Subject matter | Traffic signs, pavement markings, Kansas laws and driving practices; you also identify certain signs by shape, color or symbol | p. 13, p. 94 |
| Pass mark | 80%, i.e. 20 of 25 | p. 94, "You must score an 80% to pass the knowledge test" |
| Time limit | None. "The test is not timed, but generally takes 15 to 20 minutes to finish." | p. 94 |
| Early-stop rule | None published | - |
| Where taken | Any Full-Service Driver License Center, an approved driver's education course, or online at ks.knowtodrive.com | p. 9, p. 94 |
| Retest wait | Next working day, after a $1.50 re-exam fee | p. 14 |
| Attempt limit | 4. After a 4th failure, minimum 6 months from the most recent failed exam | p. 14 and p. 94 (stated twice) |
| What you get | Class C instruction permit, valid 1 year, renewed only by retaking and passing the written exam | p. 12, p. 14 |
| Fee | The handbook gives only the $1.50 re-exam fee. No first-attempt or permit fee is printed anywhere in it, so none is claimed. | p. 14 |

**Deliberate omission.** The Division of Vehicles publishes no separate "test
format" web page that this build could find, and the GDL page carries no
question count or pass mark. Every figure above therefore comes from the
handbook itself rather than from a page that changes more often, which is a
weaker position than most banks. If the format changes, the handbook is where
it will show up.

**Self-quiz material.** Kansas is the only state in this collection whose
manual quizzes the reader on its own content and then says the questions may
appear on the exam. Each of the twelve sections ends with a "Test Your
Knowledge" block (pp. 15, 19, 25, 29, 32, 55, 72, 78, 89, 93) whose closing
line is "These questions may be on the test", and Section 11 prints 13 more
sample questions with an answer key (pp. 94-95). That is the closest thing to
an official blueprint any jurisdiction here publishes, and it is why several
questions in this bank test the same rule the handbook tests, in different
words. Questions ks_s1_15, ks_s1_21, ks_s1_26, ks_s2_16, ks_s2_17, ks_s2_27,
ks_s3_13, ks_s3_27, ks_s3_29, ks_s3_32, ks_s3_33, ks_s4_01, ks_s4_30, ks_s5_01
and ks_s6_03 all sit on rules the state quizzes itself.

## 3. Section and page map

The handbook's printed page numbers are identical to the PDF's page numbers
throughout, so every `#page=N` deep link in this bank lands on the printed page
N. Table of contents, pp. 3-5:

| Pages | Content |
|---|---|
| 6-10 | Required Documents List; Real ID; Age Requirements (driver licences, instruction permits, driver's education, appointments, online knowledge exam); Contact and disclaimer |
| 11-15 | **Section 1 - The Driver's License.** About this manual (11); types of licence and permit, farm permit (11); instructional permit, restricted licence, driving restrictions by age (12-13); required tests: vision, knowledge, driving, GDL (13); unsuccessful examinations, renewal, loss of driving privileges (14); revocation grounds, out-of-state licences, Test Your Knowledge (15) |
| 16-19 | **Section 2 - State Laws and Rules of the Road.** Basic speed law, speed limits, minimum speed, seatbelts, child restraints (16); signalling, turns on multi-lane roads, U-turns, passing, following (17); following, stopping, school buses, right-of-way, move over (18); parking, cell phones, aggressive drivers, Test Your Knowledge (19) |
| 20-25 | **Section 3 - Be in Shape to Drive.** Vision, hearing, fatigue (20-21); distractions (21-22); aggressive driving, alcohol and drugs (22); effects, alcohol and the law (23); implied consent, penalties, other drugs (24); health, emotions, Test Your Knowledge (25) |
| 26-29 | **Section 4 - Before You Drive.** Seat and mirrors (26); safety belts, air bags (27-28); child passenger safety laws (28); Test Your Knowledge (29) |
| 30-32 | **Section 5 - Basic Driving.** Starting, accelerating, stopping, steering (30); steering methods (31); backing, Test Your Knowledge (32) |
| 33-55 | **Section 6 - Rules of the Road.** Right-of-way (33-34); traffic signals (34-35); warning signs (35-36); railroad crossings and ENS (36-38); work zone signs (38-39); regulatory signs (39-41); guide signs (42); incident signs and pavement markings (43); crosswalks, stop lines, shared centre lane (44); reversible and reserved lanes, general rules (45); lane use, passing, turning (46-47); turnabouts (47-48); U-turns and roundabouts (49-50); school buses (50-52); parking (52-55); Test Your Knowledge (55) |
| 56-72 | **Section 7 - Safe Driving Tips.** Visual search (56-58); speed management and stopping distances (58-62); traction technology (62); space management (62-67); communicating (67-70); driver awareness and decision making (70-72) |
| 73-78 | **Section 8 - Avoiding Collisions and Emergency Situations.** Braking, steering, skids, collision protection (73-74); emergencies (75); drop-offs and rollovers (76); vision limitations (77); Test Your Knowledge (78) |
| 79-89 | **Section 9 - Sharing the Road.** Pedestrians (79-80); bicyclists (80-83); motorcycles, scooters, mopeds (83-84); emergency vehicles, traffic stops, move-over (84-85); commercial vehicles and the No-Zone (85-87); public transportation (87-88); slow-moving vehicles (88); Test Your Knowledge (89) |
| 90-93 | **Section 10 - Special Driving Situations.** Rural roads, night driving (90-91); adverse weather, work zones (91-92); animals (92-93) |
| 94-107 | **Section 11 - How to Prepare for Your Driver License.** Knowledge test and 13 sample questions (94-95); pre-trip inspection (96-99); basic control skills test and scoring (100-103); road test and how you will be tested (104-106); automatic failures (107) |
| 108-112 | **Section 12 - Optional Information.** Trip planning (108); winter and hot weather (109-110); tornadoes, lightning, flood (110); address changes (111); organ donation (112) |

## 4. What the handbook does not say

| Gap | Where the number came from | Used in |
|---|---|---|
| **When headlights are legally required.** The handbook gives exactly one trigger, on p. 67: Kansas requires headlights whenever the wipers are in use. It never states the sunset-to-sunrise rule, and it never gives the visibility threshold. | K.S.A. 8-1703(a): lamps required (1) from sunset to sunrise, (2) when persons and vehicles are not clearly discernible at 1,000 feet, (3) when wipers are in continuous use because of rain, sleet or snow. Subsection (c) also directs officers to issue a *warning* citation for the wipers trigger specifically. | ks_s1_29, excerpts `st-lamps-required`, `st-lamps-warning` |
| **Fines for a work-zone or school-zone violation.** The handbook has one bracketed aside on p. 39 - "[Fines for speeding in a work zone are doubled.]" - and nothing about school zones or school buses. | K.S.A. 8-2118(e): all uniform fines doubled for a moving violation in a road construction zone. 8-2118(g): speeding fines doubled in a school zone authorised under 8-1560(a)(4). 8-2118(h): $750 for a second school-bus passing violation within five years, $1,000 for a third and each after. | ks_s4_16, excerpts `st-work-zone-double`, `st-school-zone-double`, `st-bus-escalating` |
| **The 20 mph school-zone floor.** The handbook lists 20 mph for a "properly marked" school zone but does not say who sets it or when it applies. | K.S.A. 8-1560(a)(4): a local authority may decrease the limit in an urban-district school zone to not less than 20 mph, applying only during the hours students are normally en route to or from school. | ks_s1_28 context, excerpt `st-school-zone-20` |
| **Open container.** The handbook lists transporting an open container as a suspension ground (p. 14) but never says where a container may lawfully be carried. | K.S.A. 8-1599(b): original unopened container; or locked rear trunk or locked outside compartment inaccessible while in motion; or, in a vehicle with no trunk, behind the last upright seat. | ks_s5_28, excerpt `st-open-container` |
| **Securing an unattended vehicle.** The handbook gives good practice on p. 52 but no legal requirement. | K.S.A. 8-1573(a): stop the engine, lock the ignition, remove the key, set the brake, and on any grade turn the front wheels to the curb or side of the highway. | ks_s4_05, excerpt `st-unattended` |
| **The DUI threshold as law.** The handbook gives 0.08 in prose. | K.S.A. 8-1567(a)(1)-(2). Quoted for the exact statutory wording; the handbook is the operative source in the bank. | excerpt `st-dui-008` |
| **Statutory wording of the speed limits and the school-bus rule.** Both appear in the handbook. | K.S.A. 8-1558 and 8-1556 are quoted alongside so a learner can see the legislature's own phrasing, especially 8-1556(d)'s separate-roadways exception. | ks_s2_07, ks_s5_04 context |
| **Number of hours a learner must log at 15 vs 16.** Fully covered by the handbook (pp. 9, 12), no statute needed. | - | ks_s4_02 |

Nothing in this bank rests on a number the handbook and the statute do not
agree on. Where a question needed a number neither gives - a first-attempt
test fee, for instance - the question was not written.

## 5. Conflicts

Three, all internal to the handbook, and none of them decides an answer here.

1. **The parking list is printed twice in different units.** Page 19
   (Section 2) gives "Within 15 feet of a fire hydrant" and "More than 12"
   from a curb"; page 54 (Section 6) gives "Within 15 ft. of a fire hydrant"
   and "More than 1 ft. from the curb". Same distances, different notation,
   and page 54 adds items page 19 omits (bridges, overpasses, tunnels, parking
   against traffic flow) while page 19 has the safety-zone and double-parking
   entries. **Resolution:** both lists are quoted as separate excerpts
   (`park-hydrant-curb`, `park-30-feet-signal`, `park-railroad-50`,
   `park-fire-station`, `park-safety-zone`, `park-double` from p. 19;
   `no-park-list`, `no-park-against-traffic` from p. 54), and question
   ks_s1_23's trap note tells the learner the two are the same rule.
2. **Two different "look ahead" distances a sentence apart** (p. 56): "In the
   city, you should look at least two blocks or two traffic signals ahead. In
   an urban area, you should look at least three blocks or three traffic
   signals ahead." The handbook never defines the difference between a "city"
   and an "urban area", and elsewhere it uses "urban district" as a legal term
   for the 30 mph limit. **Resolution:** ks_s3_01 asks the city case, which is
   the one the handbook words first and the one a Kansas learner reported
   being tested on; the context field gives all three figures so neither
   reading can be missed.
3. **Following-distance minimums differ between sections.** Section 2 (p. 17)
   gives the two-second rule with four seconds in adverse conditions. Section 7
   gives "a minimum following distance of two seconds with an additional second
   for any unusual weather or traffic conditions" (p. 62), and then a "minimum
   3 second following interval" in the vision-limitations passage (p. 77).
   **Resolution:** every question is built on the two-second baseline and the
   four-second adverse rule, which are the figures the handbook states as
   rules rather than in passing. ks_s2_05 and ks_s1_06 both use them.

The handbook and the statute do not conflict anywhere this bank touches. The
one place they could - the maximum speed list - reads "65 miles per hour on any
State or Federal Highway" in the handbook and "on all other highways, 65 miles
per hour" in K.S.A. 8-1558(a)(4). Both give 65 for the road in ks_s2_07, so no
question is built on the difference.

## 6. What learners report

`python scripts/fetch-reddit.py kansas kansas:"permit test" kansascity:"drivers permit" wichita:"permit test" DMV:"Kansas knowledge test" newdrivers:"Kansas permit" kansas:"written test" kansas:"drivers license test" driving:"Kansas permit test"` saved **70 threads** and rejected 3 as block pages. r/newdrivers returned nothing for "Kansas permit". The threads below are the ones that carried usable evidence; the rest were about vehicle registration, licence renewal, Real ID or driving schools.

**A warning about r/kansascity.** That subreddit spans the Missouri state line and most of its licensing threads are about Missouri procedure - one 2025 thread's entire comment section is about the Missouri State Highway Patrol and testing at Harrisonville, Missouri. Nothing from that subreddit was used unless a commenter named Kansas explicitly, and every claim was still checked against the handbook.

| Subreddit | Thread | Year | Claim, paraphrased | Shaped |
|---|---|---|---|---|
| r/kansas | Written drivers test study resources? | 2024 | Poster scored 17/25 and describes the test as "a mess" with "random number stuff". A commenter recounts being asked how many traffic signals ahead you should look, answering three, and being told the answer was two. | ks_s3_01, and the decision to weight this bank heavily toward distances |
| r/kansas | How hard is the written drivers test | 2025 | A commenter says to know when deer are most active (dusk and dawn) because that question was on a family member's test; the original poster confirms it appeared on theirs and on none of their practice tests. Another says to review alcohol information and distances. | ks_s5_12, ks_s5_07 |
| r/kansas | Just moved to kansas, question about my teenagers permit | 2025 | A family moving from Missouri finds a nearly complete Missouri permit year does not transfer; the DMV told them one year of Kansas permit driving is required. Also discussion of lying on a farm-permit affidavit. | ks_s3_17, ks_s5_27 |
| r/kansas | HELP!! Study Resources for Kansas DMV Written Test | 2025 | Poster failed the permit written test, calls the questions confusing, asks for anything other than the PDF handbook. | Confirms the handbook is the only official study source; drove the decision to cite page-anchored deep links on every question |
| r/kansas | Resources for passing written permit test | 2023 | Poster failed twice using online practice tests and was told at the DMV that those are not reliable. | Reinforced the rule that no question here is written from a practice site |
| r/kansas | Teen driver question | 2023 | Confusion over whether an instruction-permit holder may carry sibling passengers; a driver's-ed instructor had told the family no. The handbook's actual rule is about the FRONT seat. | ks_s2_11 |
| r/kansas | Drivers Test | 2023 | A commenter identifying as a DMV employee points to ksrevenue.gov practice tests and to the quizzes at the end of every handbook section. | Confirmed the Test Your Knowledge blocks are treated as study material by staff |
| r/wichita | First time taking my Drivers Test in Wichita Kansas what should I know? | 2026 | A local driving-school administrator says you can test four times in six months and after a fourth failure must wait six months; parallel parking is no longer required on the road test. A parent says their daughter needed 4-5 attempts at the written portion and found the questions misleading. | ks_s5_14 (four attempts confirmed against p. 94; the parallel-parking claim is NOT used - the handbook still lists left- and right-side parallel park among the basic control skills exercises on p. 100) |
| r/wichita | Is there any site or app that helps you study for the learners permit/license? | 2023 | Commenters point to the handbook and note the test can be taken online, after which you go in to collect the permit. | ks_s1_19 notes, `officialTest.notes` |
| r/wichita | Can I get my Kansas learners permit online? | 2024 | Discussion of the online knowledge exam; one commenter claims that failing online more than once forces you into the DMV. | The online-exam route is used (handbook p. 9); the "fail twice online" claim is NOT used - no official source states it |
| r/kansascity | What can I expect from the drivers test? | 2020 | A commenter states the written test is 25 multiple-choice questions and that getting five wrong means coming back. The question count is right; the five-wrong claim is wrong - 20 of 25 is exactly 80% and passes. | **ks_s5_02**, written specifically to correct this |

Three strongest traps found, all now questions:

1. **The pass-mark folklore.** "Five wrong and you're done" is repeated in
   Kansas threads and is off by one. 20/25 is exactly the 80% the handbook
   requires. ks_s5_02.
2. **The two-blocks / three-blocks pair.** A learner named this as the item
   that beat them, and the handbook really does put both figures in adjacent
   sentences without defining the difference. ks_s3_01.
3. **Permit time does not cross state lines.** The most repeated question in
   Kansas driving threads, and the handbook answers it twice (p. 12, p. 94):
   under 17, a Kansas-issued permit held a full year, and driver's-education
   permit slip time does not count. ks_s3_17.

No question in this bank reproduces anything a poster recalled from a real
exam. Where a thread named a rule, the rule was looked up in the handbook and
a new question written from the handbook's own statement of it. No comment text
is quoted anywhere in the bank.

## 7. Local gotchas

The six in `localGotchas`, and why each one catches people:

1. **Two look-ahead distances.** Two blocks in the city, three in an urban
   area, a quarter mile on the highway. The handbook never defines city vs
   urban area, and picking the bigger number because it sounds safer is
   exactly how a 2024 poster lost the item.
2. **Four unposted maximum speeds, not one.** 30 / 55 / 65 / 75, plus 20 in a
   marked school zone or business district. Most states have two or three
   defaults; Kansas has four and they are distinguished by road class, not by
   how the road looks. The 75 mph figure in particular is restricted to a
   separated multilane highway *designated and posted by the Secretary of
   Transportation*, which is a much narrower category than "big road".
3. **School bus stops from either direction unless there is a physical
   barrier.** Kansas spends three pages (50-52) saying you stop for two solid
   yellow lines, a centre turning lane, a multi-lane highway and an
   intersection, and one sentence saying you do not stop for a median. People
   read a painted centre lane as a divider; it is not.
4. **Phone law is split by licence stage.** For an adult, talking and dialling
   are "not specifically illegal" (the handbook's own words, p. 19) but
   writing, sending or reading a written communication is banned. Under an
   instruction permit, a farm permit or a restricted licence there is no
   wireless device use at all. A learner who studies the adult rule gets their
   own restriction wrong.
5. **Wipers on means headlights on** - and that is the only headlight trigger
   the handbook gives. A learner who reads only the manual will not know the
   sunset-to-sunrise rule or the 1,000-foot visibility rule exists.
6. **Out-of-state permit time does not carry over.** Under 17 means a
   Kansas-issued permit held a full year, and driver's-education slip time
   does not count toward it. This is the single most repeated question in
   Kansas driving forums and it costs families a year they thought they had.

## 8. Verification

Run 2026-09-06.

```
$ npx tsx scripts/extract-quotes.mjs kansas
tmp/kansas-quotes.json: 407 quotes

$ python scripts/verify-excerpts.py kansas tmp/kansas-handbook.pdf tmp/kansas-statutes.txt
kansas: 407/407 quotes verified verbatim against 2 source(s)

$ python scripts/build-excerpt-snippets.py kansas tmp/kansas-handbook.pdf
kansas: 392 snippets rendered, 2 not located, 13 skipped as not in this document

$ npx tsx scripts/validate-driving.mjs --only kansas
=== Kansas (KS) - 6 sets ===
  snippets: 392 in manifest, 392/407 excerpts covered (96%)
  quotes verified: 407/407 verbatim against kansas-handbook.pdf, kansas-statutes.txt
  excerpts: 407 (222 unused), questions wired: 195/195 (100%)
  questions: 195
  answer positions: A:24% B:23% C:27% D:26%
  context: 100%  source links: 100%  starred: 19%
ERRORS: 0   WARNINGS: 0
```

**Method note.** No quote in `excerpts.ts` was typed by hand. Each one is
specified as a start phrase and an end phrase in `tmp/ks_specs.py` and lifted
mechanically by `tmp/ks_excerpts_build.py` as a contiguous substring of the
same normalised text `scripts/verify-excerpts.py` reads, then emitted to TypeScript.
One bug this caught is worth recording: the first emitter wrapped long quotes
with Python's `textwrap.wrap`, whose `break_on_hyphens` defaults to True. It
split five quotes at a hyphen and re-joined them with a space, turning
"front-seat" into "front- seat". All five were caught by `verify-excerpts.py`
as tail mismatches rather than shipping silently.

**The 13 statute quotes report "NOT IN THIS DOCUMENT" from the snippet
builder.** That is correct, not a failure - the builder refuses to render a
quote it cannot find in the PDF it was given, and those quotes come from
ksrevisor.gov. The 2 handbook quotes it could not locate (`restricted-age-15`,
`unrestricted-17`) are both from tabular layouts on pages 9 and 13 where the
text stream and the visual layout diverge; the quotes themselves verified
verbatim and simply have no picture. 392 of 394 handbook quotes rendered, which
is 99.5%.

**Warnings:** none.

**Not verified.** The Division of Vehicles publishes no separate exam-format
page, so every test-format figure in `officialTest` rests on the handbook alone
rather than on a page that is updated more often. The GDL page at
ksrevenue.gov/dovgdl.html was fetched and confirms the four-stage structure but
carries no question count, pass mark or fee. No first-attempt testing fee or
permit issuance fee is claimed anywhere in this bank, because no official source
read here states one.
