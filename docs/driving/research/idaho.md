# Idaho - research note

Bank: `src/lib/driving/idaho/`. `contentDate` 2026-09-06. Everything below was
checked on that date.

## 1. Sources read

| Source | Publisher | Edition label | URL | Fetched |
|---|---|---|---|---|
| Idaho Driver's Handbook | Idaho Transportation Department, Division of Motor Vehicles | "DRIVER'S HANDBOOK JULY 2026" (cover) | https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf | 2026-09-06, direct download (139 pages, 2.6 MB) |
| Idaho Code Title 49 (Motor Vehicles), chapters 3, 6, 7, 8, 9, 14 | Idaho State Legislature | Statutes updated to the website 1 July following the session | https://legislature.idaho.gov/statutesrules/idstat/Title49/ | 2026-09-06, headless browser (the page renders its text client-side) |
| Idaho Code 18-8004 (DUI) | Idaho State Legislature | as above | https://legislature.idaho.gov/statutesrules/idstat/Title18/T18CH80/SECT18-8004/ | 2026-09-06 |
| Idaho Code 25-2118 (animals on open range) | Idaho State Legislature | as above | https://legislature.idaho.gov/statutesrules/idstat/Title25/T25CH21/SECT25-2118/ | 2026-09-06 |
| Taking the Driver's Test (guide) | ITD | undated web page | https://itd.idaho.gov/guide/taking-the-drivers-test/ | 2026-09-06 |
| Young Drivers | ITD | undated web page | https://itd.idaho.gov/dmv/young-drivers/ | 2026-09-06 |
| Drivers Licenses & ID Cards | ITD | undated web page | https://itd.idaho.gov/dmv/drivers-licenses-id-cards/ | 2026-09-06 |
| Idaho Sample Class D Driver Written Test (60 questions) | ITD | undated web app, footer "© 2025 Idaho Transportation Department" | https://apps.itd.idaho.gov/apps/dmv-practice-tests/sampletest.html | 2026-09-06 |

Nothing was fetched from an archive; every source answered directly. The
statute pages needed a headless browser rather than curl, because the section
text is injected by script and a plain fetch returns the WordPress shell with
no statute in it. The `wp-json` REST route is blocked (HTTP 000).

### Things the brief got wrong, corrected here

- **The publication is the Idaho Driver's *Handbook*, not the Idaho Driver's
  Manual.** The cover reads "DRIVER'S HANDBOOK", the back cover reads "IDAHO
  DRIVER'S HANDBOOK", and page 2 calls it "The Idaho Driver's Handbook". The
  file it is served as happens to be `driver_manual.pdf`, which is where the
  wrong name comes from.
- **The publisher is the Idaho Transportation Department, Division of Motor
  Vehicles** (back cover, page 139). But **licences are not issued by ITD**:
  page 14 says Idaho driver's licenses, ID cards and instruction permits are
  issued through the *county sheriff's driver's license offices*. Skills tests
  are run by third-party contractors, not by the state or the county.
- **The licence stage is an "instruction permit", not a learner's licence, and
  Idaho has four of them**: the Driver Training permit (DT), the class D
  Supervised Instruction Permit (SIP), the class D Instruction Permit (IP) and
  the Motorcycle Instruction Permit (MIP). The SIP is named in the fee table on
  page 5, in the lost-or-stolen list on page 31 and throughout Idaho Code
  49-303 and 49-305, but it has no heading of its own in the handbook - the
  GDL section on page 19 describes it without naming it. `licenceName` is set
  to "Class D Instruction Permit", the permit the knowledge test directly
  earns for a candidate 17 or older.
- **The current edition is July 2026.** The URL under `/2025/03/` still serves
  the July 2024 edition and is what several search results point at. The
  `/2016/06/` and `/2026/04/` paths serve byte-identical copies of the July
  2026 file (md5 037bf87eca091cecf37761603e073710); the link on ITD's own
  Drivers Licenses page is the `/2026/04/` one, so that is the URL cited.

## 2. Test format

| Fact | Value | Source |
|---|---|---|
| Questions | 40 | Handbook p. 32 |
| Allowed wrong | 6 ("you can miss up to six (6) questions before failing") | Handbook p. 32 |
| Pass mark | 34 of 40 (85%) | derived from the two above |
| Time limit | none stated anywhere | Handbook p. 32; ITD guide |
| Source of questions | "taken directly from information included in the Driver's Handbook" | Handbook p. 32 |
| Sectioned? | No. No separate signs test. | Handbook p. 32 |
| Retest wait | 3 days, and the fee again | Handbook p. 32 |
| Fee | $5.00 | Handbook p. 5; ITD Young Drivers fee table |
| Where | county sheriff's driver's license offices | Handbook p. 14 |
| Languages | English, Arabic, Chinese, Farsi, French, Korean, Russian, Serbo-Croatian, Spanish, Swahili, Vietnamese, plus ASL | Handbook p. 32; ITD guide (written and aural) |
| Minimum age to test | 15 | Handbook p. 32 |
| Not allowed in the room | phones, smart watches, cameras, tablets, laptops, headphones, earbuds, driver manuals, notes; no talking; no leaving except to an examiner | ITD guide, "Testing guidelines" |
| Official practice test | ITD publishes a 60-question sample Class D test and an answer sheet | apps.itd.idaho.gov; handbook p. 32 endorses it and warns off all others |
| Skills test | 12 or fewer errors passes; any critical driving error is an instant fail; five errors of the same skill IS a critical driving error | Handbook pp. 33, 36-37; ITD guide |

Order of tests: the handbook says it is beneficial to pass the knowledge test
first but that the tests may be taken in either order (p. 33). The ITD guide is
firmer and says you must pass the knowledge test before the skills test, except
for under-17s on a supervised instruction permit. That is a difference in
strictness rather than a contradiction, and no question turns on it.

## 3. Section and page map

The printed page number IS the PDF page number throughout, so the two never
need translating.

| Pages | Section |
|---|---|
| 3-4 | Introduction; New Residents; Students; U.S. Military |
| 5 | Fees |
| 6-10 | Table of contents |
| 11 | Practice test answers |
| 12-14 | One Driver One License One Record; Real ID; Star Card; misuse; where to get a credential |
| 15-20 | Types of credentials; Class A/B/C; Class D; Driver Training Permits; Class D Instruction Permits; restrictions under 16 and under 17; foreign licences; Motorcycle Instruction Permits; **GDL program**; Driver Training; Motorcycle Endorsement |
| 21-31 | Requirements for a licence; documents; Tables 1 and 2; residency; lawful presence; medical; liability signer; VOC; Star Card; designations; name and address change; renewals; duplicates; extensions |
| 32-37 | **Required Testing**: medical/visual, knowledge test, skills test, scheduling, documents, passengers, vehicle inspection, driving skills, critical driving errors, results |
| 38-43 | Vehicle Equipment & Safety: required equipment, child restraints, seat belts, equipment not allowed, other laws, antique vehicles |
| 44-67 | Highway & Vehicle Knowledge: traffic signs (44-45), turn prohibition and lane control (45), work zones (46-48), school safety patrols (48), warning signs (49-53), guide signs (53), barricades (54), traffic signals (55-56), pedestrian crossings (56-57), pavement markings (58-60), intersections incl. railroad crossings, roundabouts, thru-turn, SPUI, DDI (60-66), map (67) |
| 68-86 | Traffic Laws & the Rules of the Road: speed limits (68-69), stopping (69-71), turns (72-74), keep to the right (74), right-of-way and yield (74-76), passing (76-78), funeral processions (78), slow-moving vehicles (79), following distances (79-80), space cushion (80), parking (80-82), backing (82), freeway driving (83-86) |
| 86-94 | The Driving Task: starting out, mood, problem drivers, defensive driving, distracted driving, cell phones, fatigue, unattended vehicles, Alive at 25 |
| 95-116 | Sharing the Road: emergency vehicles, pedestrians, children, horseback riders, bicyclists (98-102), motorcycles (103-104), large vehicles (104-106), 511, mountain driving, wildlife, **open range (108)**, night driving, snow removal, fog, rain and hydroplaning, flash floods, winter driving, stranded, skidding, stopping quickly |
| 117-121 | Be Prepared: car trouble, avoiding crashes, unattended vehicle, uninsured driver, oncoming car, blowouts, running off the road, at the scene, crashes and the law |
| 122-133 | Driving privilege and record: compact, points, suspensions, GDL penalties, ALS, test refusal, restricted permit, interlock, reinstatement, alcohol, open container, drugs, DUI, traffic stops |
| 134-138 | 20 practice test questions (answers on page 11) |
| 139 | Back cover, publisher imprint |

## 4. What the handbook does not say

| Number the test can ask for | Handbook | Statute that supplies it |
|---|---|---|
| Fine for passing a stopped school bus | silent | 49-1422(1): $300 infraction first offense; $600-$1,000 and/or up to 6 months for a second within 5 years |
| Fine for a seat-belt violation, and how it is enforced | silent | 49-673(3)(b): $10, no points; 49-673(5): secondary enforcement only |
| Fine for using a phone | silent (the handbook does not name the current offense at all - see §5) | 49-1401A(4): $75 / $150 / $300; (9) primary offense; (5) up to 90-day suspension after 3 convictions in 3 years |
| The 500-foot visibility trigger for lights, stated as a general rule | only stated for daytime fog (p. 110) and for night driving (p. 109) | 49-903: sunset to sunrise, and any time persons and vehicles are not clearly discernible at 500 feet |
| The exact scope of the 5-second signal | "on freeways or highways" (p. 72) | 49-808(2): controlled-access highways **and before turning from a parked position**; 100 feet in all other instances |
| Motorcycle at a signal that cannot detect it | silent | 49-802(3)(e): full stop, then proceed with due caution if the signal fails after one cycle |
| Whether the livestock owner owes you anything | says the owner is not liable (p. 108) | 25-2118 states it as law and defines "open range" |
| Statutory wording of the unposted 35 mph | gives the number (p. 68) | 49-654(2)(a)(i) |
| The under-17 licensing chain in legal terms | describes it (pp. 15-19) | 49-303(1)-(2) and 49-305(1)(a): "class D supervised instruction permit" is the statutory name |
| Motorcycle instruction permit restrictions | silent on passengers, night and interstates | 49-305(4): no passenger, daylight only, not on the interstate system |

## 5. Conflicts, and how each was resolved

1. **Cell phones. The handbook is out of date and the statute governs.**
   Page 92 says only that "reading, writing, or sending of written
   communication (text messaging) while driving is illegal and considered an
   infraction", which describes Idaho's pre-2020 texting ban. Idaho Code
   49-1401A, effective 1 July 2020 and amended in 2021, prohibits operating a
   motor vehicle *while using a mobile electronic device* at all, defines
   "operate" to include being temporarily stationary at a light, makes it a
   primary offense, and sets fines of $75/$150/$300. **Resolution:** questions
   follow the statute (`id_s5_04`), the handbook's narrower sentence is quoted
   as the trap, both quotes are in the excerpt library
   (`texting-illegal`, `code-distracted-driving`), and the lag is named in
   `localGotchas`.

2. **The school-bus exception is worded two ways.** Handbook p. 70: you need
   not stop when travelling the opposite direction "on highways with four or
   more lanes if two lanes are going in each direction". Idaho Code 49-1422(1):
   "Oncoming traffic on a highway of more than three (3) lanes is not required
   to stop." The statute has no two-each-way condition, so on a four-lane road
   with three lanes one way and one the other, the statute exempts oncoming
   traffic and the handbook does not. **Resolution:** every school-bus question
   in the bank (`id_s1_07`, `id_s5_07`) is set on a road where both readings
   give the same answer - a plain two-lane street, or a four-lane road split
   two and two. Neither reading is presented as the whole rule.

3. **The 5-second signal.** Handbook p. 72 pairs "100 feet (in business or
   residential areas)" with "five seconds (on freeways or highways)". Idaho
   Code 49-808(2) says five seconds on *controlled-access* highways and before
   turning from a parked position, and 100 feet in all other instances. An
   ordinary two-lane state highway is a "highway" under the handbook and not a
   controlled-access one under the statute. **Resolution:** `id_s1_28` is set
   on a freeway, where both give five seconds. `id_s5_03` asks the
   parked-position case, which only the statute covers, and is sourced to the
   statute. `id_s6_14` asks the 100-foot business/residential case, where both
   agree.

4. **Knowledge test before skills test.** Handbook p. 33 says either order is
   allowed; the ITD guide says the knowledge test must come first except for
   under-17s on a SIP. **Resolution:** no question turns on the order. The
   excerpt library carries both (`skills-test-score`,
   `itd-knowledge-before-skills`).

5. **Studded tire dates appear twice with the same numbers** (pp. 42 and 113),
   October 1 to April 30, with a note that ITD adjusts them in some years. The
   skills-test vehicle inspection on p. 36 gives the complementary window,
   "not allowed May 1 to September 30". No conflict; recorded because the two
   look different at a glance.

6. **Page 2 tells you the handbook is a paraphrase**: "The Idaho Driver's
   Handbook paraphrases the language of Idaho statutes. Courts go by the actual
   language of the statutes, not this text." That is ITD's own instruction to
   prefer the statute, and it is the basis on which conflicts 1 and 3 were
   resolved.

## 6. What learners report

`python scripts/fetch-reddit.py idaho ...` with eight searches saved **37
threads** (14 further results were rejected by the script as block pages).
Threads that shaped questions:

| Sub | Thread (year) | Paraphrase of the claim | Checked against | Shaped |
|---|---|---|---|---|
| r/Idaho | "idahoans what was one question you got wrong on your dmv test that you remember" (2023) | Several people independently name the open-range livestock question as the one they missed; one names funeral processions and could not find it in the book afterwards; three separately say they guessed 25 mph for the unposted town limit and it was 35 | Handbook pp. 49, 78, 68; Idaho Code 25-2118 | `id_s1_29`, `id_s5_01`, `id_s5_35`, `id_s2_30`, `id_s1_03`, `id_s5_02` |
| r/Idaho | "Permit test help?" (2025) | Poster failed by two questions; commenters say the livestock/open-range item is what catches people, and add "don't pass snow plows" | Handbook pp. 108, 110 | `id_s5_01`, `id_s2_18`, `id_s5_21` |
| r/Boise | "New resident questions about getting Idaho driver's license" (2025) | A driver who had just taken the new-resident test lists the obscure ones: school crossing sign is the two figures with a lunch box, not the pedestrian crossing; the orange triangle goes on slow-moving vehicles; 35 mph if not posted; you are at fault for hitting livestock; you must yield to a funeral procession; **"You must signal 5 seconds before changing lanes in Idaho. This one most people don't know about"** | Handbook pp. 51, 47, 68, 108, 78, 72; Idaho Code 49-808 | `id_s2_10`, `id_s5_06`, `id_s2_16`, `id_s1_28`, `id_s5_03`, `id_s6_14` |
| r/Idaho | "Getting an Idaho drivers license" (2025) | New arrival surprised to be told to take a written test; a commenter who moved from Washington says he nearly failed on the differences - headlights at sunset in Idaho versus 30 minutes after sunset in WA, and 15 over while passing in Idaho versus 10 in WA | Handbook pp. 43, 77; Idaho Code 49-903, 49-654(2)(b) | `id_s1_23`, `id_s3_01`, `id_s2_28` |
| r/idahofalls | "Drivers License Test?" (2023) | New resident with a current Maryland licence asked whether a written test was needed; the answer was yes, and the poster reported the test contained "phenomenally crafted questions to confuse" | Handbook p. 12 | `id_s2_28` |
| r/idahofalls | "Mystery Solved.....can I turn left on red if my car is in the intersection" (2026) | An insurance agent reports that Idaho Falls drivers routinely edge into the intersection to turn left and then go once the light is red, believing it legal, and that it is not | Handbook p. 56; Idaho Code 49-802(3)(a), 49-804 | `id_s5_08` |
| r/Idaho | "Written DMV test" (2026) | Someone passed the written test and then found it did not let them practise with a licensed passenger; the answer was "it really depends on age" | Handbook pp. 15-19, 32 | `id_s5_05`, `id_s1_14` |
| r/idahofalls | "Driving test questions" (2024) | An over-18 permit holder asks whether the written test is repeated for the licence; commenter says a different version of the knowledge test is taken around the same time as the skills test | Handbook pp. 19, 33 | `id_s5_05` |
| r/Boise | "Boise Has Some of the Worst Drivers I Have Ever Seen" (2023) and "Dear Boise drivers..." (2019) | Repeated complaints about drivers well under the limit in the passing lane, hesitancy at four-way stops, and merging onto ramps below traffic speed | Handbook pp. 68, 69, 75, 84 | `id_s5_17`, `id_s2_22`, `id_s3_32`, `id_s1_04` |
| r/Idaho | "Gonna take my drivers written test next week..." (2022) and "What do you do if you have failed the Idaho Drivers Permit test THREE times?" (2023) | Both posters were pointed at the ITD sample test; one asked whether it is the same as the real exam | Handbook p. 32 (ITD's sample is the only endorsed one) | `id_s5_24`, `officialTest.notes` |
| r/Boise | "Proof of residency for child's learner's permit?" (2024) | Parents told the school compliance slip doubles as proof of residency for a minor | Handbook p. 26 (VOC) | background for `id_s4_19`, no question turns on it |
| r/Boise | "Good Driving Instructors?" (2026), "I need advice for getting my drivers license" (2024) | 22-year-old had passed the written test four times; another 19-year-old passed the written test and got a "learning permit" | Handbook p. 16 (IP valid one year) | background for `id_s1_14` |

Threads read and NOT used: the r/DMV results were overwhelmingly California
and Utah (the sub is about the Washington DC/Maryland/Virginia area and the
generic term), and several r/Boise and r/idahofalls hits were about building
permits, licence plates and parking tickets rather than driving tests. They are
on disk as `tmp/idaho-reddit-*.txt` but shaped nothing.

**No recalled exam question was reproduced anywhere in the bank, and no comment
text is quoted.** Every forum claim above was verified against the handbook or
the statute before it became a question, and in the one case where a forum
belief was wrong (the left-turn-on-red-from-the-intersection belief in Idaho
Falls) the official source won and the belief became the trap.

Two official sources did more work than the forums. ITD's own **60-question
sample Class D test** is effectively a blueprint for what is tested - it
samples parking distance, passing on the right, passing in an intersection,
the school-bus exception, the basic rule, the power-outage four-way stop,
dashed white lines, the greasy-first-rain rule, the three-second rule,
the white cane, the merge, the blind-spot head check and the warning-sign
color. The bank's weighting follows it. And the **20 practice questions printed
at the back of the handbook** (pp. 134-138, answers on p. 11) overlap it
heavily, which is a second signal from ITD about what matters.

## 7. Local gotchas

The six in `localGotchas`, and why each catches people:

1. **Open range livestock have the right of way and the owner owes you
   nothing.** More Idaho drivers name this as the question they missed than
   any other, and the reason is that it is counter-intuitive twice over: the
   animal has priority, and the fence you can see does not mean the animals
   are behind it. Handbook pp. 49 and 108; Idaho Code 25-2118.
2. **35 mph, not 25 mph, in an unposted residential, business or urban
   district.** Every neighbouring state a new Idaho driver is likely to have
   come from uses 25. Three separate people describe guessing it. Handbook
   p. 68; Idaho Code 49-654(2)(a)(i).
3. **Five seconds of signal before a lane change on a freeway or highway, and
   before pulling out of a parked space.** Named by an Idaho driver as the one
   most people do not know about. Handbook p. 72; Idaho Code 49-808(2).
4. **The handbook's phone rule is stale.** Page 92 describes only the texting
   ban; 49-1401A has covered any hand-held use since 1 July 2020 and is a
   primary offense at $75. Anyone who studies only the handbook will get a
   modern phone question wrong.
5. **Funeral processions have the right of way, including through a green
   light.** It is one paragraph on page 78 and almost nobody expects it to be
   examinable. Two forum posters named it.
6. **Headlights at sunset, not 30 minutes after.** Washington uses the later
   trigger, and a driver who moved from there reports nearly failing on it.
   Handbook p. 43; Idaho Code 49-903.

## 8. Verification

Run 2026-09-06, in this order.

```
$ npx tsx scripts/extract-quotes.mjs idaho
tmp/idaho-quotes.json: 380 quotes

$ python scripts/verify-excerpts.py idaho tmp/idaho-handbook.pdf <22 more sources>
idaho: 380/380 quotes verified verbatim against 23 source(s)

$ python scripts/build-excerpt-snippets.py idaho tmp/idaho-handbook.pdf
idaho: 319 snippets rendered, 4 not located, 57 skipped as not in this document

$ npx tsx scripts/validate-driving.mjs --only idaho
  snippets: 319 in manifest, 319/380 excerpts covered (84%)
  quotes verified: 380/380 verbatim against ... (2026-09-06)
  excerpts: 380 (207 unused), questions wired: 195/195 (100%), quoted total: 62.0k chars
  questions: 195
  answer positions: A:19% B:24% C:31% D:25%
  context: 100%  source links: 100%  starred: 18%
  topics: safety:24 rules:24 signs:22 sharing:21 licensing:19 signals:18 speed:16 rightOfWay:14 emergencies:14 parking:12 impairment:11
ERRORS: 0   WARNINGS: 0

$ npx tsc --noEmit -p .
(no idaho errors)
```

The 57 "skipped as not in this document" are the statute and web-page quotes,
which are correctly absent from the handbook PDF. The 4 "not located" are
handbook quotes the snippet builder could not crop because the passage runs
across a column or page break; all four were still verified verbatim by
`verify-excerpts.py`, which is the check that matters.

Three rendered PNGs were opened and inspected: `max-speed-urban.png`,
`open-range-liability.png` and `four-way-stop.png`. The first two are clean,
tight crops with the full quote highlighted and no letters clipped. The third
is legible with the first letters intact but the crop stops one line short of
the end of the quote, which is a limitation of the shared snippet builder
(`scripts/build-excerpt-snippets.py` is out of this bank's scope to change);
the page-anchored link beside it goes to the right page.

### A method note worth keeping

No quote in this bank was retyped. `tmp/build_idaho_excerpts.py` lifts each one
mechanically as the substring between a start phrase and an end phrase, out of
the same normalised text `verify-excerpts.py` reads, and generates
`excerpts.ts`. Two things that came out of doing it that way:

- The verifier deliberately produces two readings of a PDF, one joining
  hyphenated line breaks and one preserving them, and accepts a quote matching
  either. Taking the first match printed **"fourway stop"** into the library.
  Only five quotes in this bank differ between the readings, and every one is a
  real hyphenated compound (violation-free, brake-operated, four-way, two-way,
  over-confidence), so the builder now searches the preserving reading first -
  after each of the five was read by eye.
- The handbook's own slips are preserved. Among them: the stray space in "At
  four-way stops , the first vehicle to arrive" (p. 75), and Idaho Code's
  spelling of "uninclosed lands" in 25-2118.
