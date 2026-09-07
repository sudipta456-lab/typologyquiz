# Arkansas - research note

Bank built 2026-09-06. Slug `arkansas`, code `AR`, license stage covered:
**Instruction Permit** (the license the knowledge exam actually issues).

A correction to the brief this bank was commissioned under, made before a single
question was written. The brief named the publisher as the "Arkansas Department
of Finance and Administration / Office of Driver Services, dfa.arkansas.gov".
That is wrong, and the split matters to a learner:

- The **Arkansas State Police**, part of the **Arkansas Department of Public
  Safety**, write and publish the study guide, and administer the knowledge and
  skills exams. The guide is served from `media.ark.org`, the state's document
  host, and linked from `dps.arkansas.gov`.
- The **Department of Finance and Administration, Office of Driver Services**
  issues the license afterwards at a revenue office, and collects the $5.00
  examination fee as part of the license cost. DFA publishes the graduated
  license and DUI/DWI administrative material but not the study guide.

The brief also called the target license a "learner's license". In Arkansas that
is a distinct, later stage: the knowledge exam gets you an **Instruction
Permit** (age 14+), and the **Learner's License** (14 to 16) is issued only
after the skills test. `licenceName` is set to Instruction Permit for that
reason.

---

## 1. Sources read

| # | Source | Publisher | Edition label | URL | Fetched | How |
|---|---|---|---|---|---|---|
| 1 | Arkansas Driver License Study Guide | Arkansas State Police (Arkansas Dept of Public Safety) | "VOLUME 1 - EDITION 10, July 2026" (cover build stamp `07222026`) | https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf | 2026-09-06 | direct download, 98 PDF pages, 8.3 MB |
| 2 | Official Arkansas Driver License Practice Test | Arkansas State Police | undated web page | https://quiz.ark.org/quiz/1 | 2026-09-06 | headless browser (page is a JS app; `curl` returns only the title) |
| 3 | Driver Examination | Arkansas State Police / DPS | undated web page | https://dps.arkansas.gov/law-enforcement/arkansas-state-police/services-programs/driver-examination/ | 2026-09-06 | WebFetch only. `curl` and a headless Chromium both get a Cloudflare/nginx block from this machine (HTTP 403, or a "wpewaf.com" interstitial) |
| 4 | "Online scheduling & learning tools available to driver license written test applicants" | Arkansas State Police / DPS | news release | https://dps.arkansas.gov/news/online-scheduling-learning-tools-available-to-driver-license-written-test-applicants/ | 2026-09-06 | WebFetch only, same block for other clients |
| 5 | Driver Services, Licenses IDs & Permits, DUI/DWI Information | Arkansas DFA, Office of Driver Services | undated web pages | https://www.dfa.arkansas.gov/driver-services/ | 2026-09-06 | headless browser |
| 6 | Act 784 of 2019 (maximum speed limits) | Arkansas General Assembly | Act as enrolled | https://www.arkleg.state.ar.us/Home/FTPDocument?path=%2FACTS%2F2019R%2FPublic%2FACT784.pdf | 2026-09-06 | direct download - read, then **not used**, see section 4 |

**Every excerpt in this bank is quoted from source 1 and nothing else.** All 312
quotes were lifted mechanically out of the fetched PDF by `tmp/ar_lift.py`,
which normalizes the extracted text exactly the way `scripts/verify-excerpts.py`
does before searching it, so no quote was ever retyped.

### Why no statute site is cited

The brief expected `arkleg.state.ar.us` in `officialHosts`. The Arkansas General
Assembly does not publish the Arkansas Code on its own site: the "Arkansas Code"
item in its navigation links out to `advance.lexis.com`, the commercial official
publisher. Session Acts are downloadable, but an enrolled Act PDF interleaves
line numbers with the text (`"...highway to The maximum speed limit for a motor
vehicle operated on a 23 controlled-access highway is seventy-five miles per
hour..."`) and carries amended language without the strikethrough that shows
which half survived. Quoting from it verbatim is not possible, and quoting from
it selectively would be a guess about current law.

That turned out to cost almost nothing, because the study guide **reprints the
operative statutory text for every rule it covers that needs one**:
27-16-606 (residency), 27-16-702 (parent signature), 27-16-704 (vision),
27-15-305 (accessible parking fraud), 27-34-104 (child restraints),
20-27-1903 (smoking), 8-6-404 (littering), 5-10-105 (Isaac's Law),
27-51-216 (county road speed limits), 27-51-301 (left lane),
27-51-310 (approaching a stopped authorised vehicle), 27-51-1501 (no texting),
27-51-1601 (Fewer Distractions Means Safer Driving Act), 12-12-1403 (traffic
stops). Those statutes are quoted from the guide's own reproduction and cited as
such.

---

## 2. Test format

| Item | Value | Where it came from |
|---|---|---|
| Questions | 25 | **Not officially published.** Source 2 says the official practice test "generates 25 questions randomly chosen from a larger group of questions extracted from the Arkansas State Police driver license knowledge test". 25 is also the figure Arkansas applicants report. |
| Pass mark | 20 of 25 (80%) | **Not officially published.** Reported consistently by applicants; no ASP or DFA page states a pass mark. |
| Time limit | none published | - |
| Early stop | applicants report the test can end once enough answers are wrong | Reddit, r/Arkansas 2020 (see section 6). Not confirmed officially, so it is **not** in `officialTest.notes` as fact. |
| Where taken | Arkansas State Police testing sites, all 75 counties; booked through the ASP scheduling tool | Source 3; source 4 for the phased rollout from Troop A (Little Rock) and Troop L (Lowell) |
| Fee | $5.00 per written examination, **added to the license cost and collected by DFA** | Source 1, page 1 (Act 1289 of 2015) |
| Retest wait | not published | Applicants report differing waits; the guide only gives skills-test penalties (two weeks for a repeated category error, 30 days for an automatic failure). |
| Failure rate | "more than 63,000 of the 111,123 written test applicants failed the test" in 2019 | Source 4 |
| Practice test | free, official, at quiz.ark.org; plus an "AR Driver Testing" app | Sources 1 and 2 |

`officialTest.questionCount` and `passCount` are therefore the best-supported
numbers available, and `officialTest.notes[0]` says on the page itself that the
State Police do not publish them. This is stated plainly rather than presented
as an official figure.

The guide's own claim about itself, from source 2, is why this bank quotes the
guide and nothing else: it "is the exclusive fundamental source of information
needed to pass the driver license written test".

---

## 3. Section and page map

The PDF is 98 pages. **Printed page 1 is PDF page 13**, so `PDF page = printed
page + 12` throughout. Excerpt `section` fields give the printed page; excerpt
`url` anchors give the PDF page.

| Printed pages | Section |
|---|---|
| (PDF 1-12) | Cover, littering statute, "What To Do When You Are Stopped by a Law Enforcement Officer", appointment types, table of contents |
| 1 | Introduction; Act 1289 of 2015 exam fee |
| 2 | The Driver's License; proof of residency (27-16-606) |
| 3-5 | Types of Graduated Driver's Licenses: Instruction Permit, Learner's License, Intermediate License, Class D, Class M, Class MD, Motorized Bicycle Certificate; Vision Requirements; Countries Exempt from Testing |
| 6-8 | Accepted Identification List (18 and older; under 18); ASP-33 |
| 9-15 | **Chapter 1: Arkansas Law** - seat belt, child passenger protection, secondhand smoke, littering, unattended children and pets, move over law, school bus law, accessible parking, approaching a stopped law enforcement vehicle |
| 16-30 | **Chapter 2: Arkansas Rules and Regulations** - work zones (16-22), traffic signals (23-24), right on red and traffic control signs (25-26), roadway signs (27), railroad crossings (28-30) |
| 31-42 | **Chapter 3: General Driving** - lanes and pavement markings (31-33), multiple lanes, crosswalks and stop lines (34), right of way (35), roundabouts (36-38), right of way at stop signs (39-40), parking (41-42) |
| 43-50 | **Chapter 4: Safe Driving** - operating the vehicle (43-44), distracted driving (45-47), stay alert (48), changing lanes, blind spots, backing (49-50) |
| 51-63 | **Chapter 5: See and Be Seen** - lights and horn (51-52), signaling (53), adjusting speed (54-55), flow of traffic (56-57), visibility and reaction (58), distance and reaction (59), the safety cushion (60-63), left lane for passing only (63) |
| 64-66 | **Chapter 6: Tractor-Trailer Rigs** |
| 67-70 | **Chapter 7: Sharing the Road with Bicycles and Motorcycles** |
| 71-76 | **Chapter 8: Driving Fitness** - vision, hearing, fatigue, health, drinking and driving (73-75), organ donation (76) |
| 77-81 | **Chapter 9: Emergencies** |
| 82-86 | **Chapter 10: Skills Test Guidelines** |

---

## 4. What the handbook does not say

Arkansas's guide is unusually complete on parking and unusually empty on speed.

| Number a test could ask for | In the guide? | What was done |
|---|---|---|
| Urban district speed limit (30 mph, ACA 27-51-201(c)(1)) | **No** | No question asks it. Act 784 of 2019 carries the line as unamended context, but see below. |
| Rural / other-location default | **No** | No question asks it. |
| Interstate / controlled-access maximum (75 mph cars, 70 mph commercial, ACA 27-51-201(b), Act 784 of 2019 effective 2020-07-01) | **No** | No question asks it. |
| School zone speed limit (25 mph when children are present, ACA 27-51-212) | **No** - the guide illustrates the School Zone warning sign and gives no number | No question asks it. Set 4's work-zone speed question is built on the guide's own rule (obey the posted reduced limit; where none is posted, the normal limit applies), which is true on any reading. |
| County road default where no limit is set | **Yes**, 40 mph, with 27-51-216 reprinted | `ar_s1_18`, `ar_s5_06` |
| Parking distances | **Yes**, complete: 20 ft crosswalk, 30 ft signal/stop/yield sign, 30 ft pedestrian safety zone, 15 ft hydrant, 50 ft railroad crossing, 20 ft fire station driveway, 18 in from curb | `ar_s1_11`, `ar_s2_06`, `ar_s3_19`, `ar_s4_09`, `ar_s5_21`, `ar_s6_14` |
| Signal distance | **Yes**, 100 feet, stated twice | `ar_s1_10`, `ar_s3_15` |
| Following distance | **Yes**, two seconds, four when conditions demand | `ar_s1_04` |
| BAC thresholds | **Yes**, 0.08 / 0.04-0.08 with a crash / 0.02 under 21 | `ar_s1_07`, `ar_s2_19`, `ar_s3_18` |
| Implied consent | **Yes**, including that the officer chooses the test | `ar_s2_07`, `ar_s5_16`, `ar_s6_27` |
| Move-over law | **Yes**, twice, with a conflict - see section 5 | `ar_s1_23`, `ar_s6_25` |

**Why Act 784 of 2019 was read and then not used.** It is the current source of
the 75 mph controlled-access maximum, and the enrolled PDF is on the General
Assembly's own site. But the extracted text interleaves line numbers into every
sentence and the amending strikethrough is lost, so `27-51-201(c)(3)` reads in
plain text as both "Sixty-five miles per hour (65 m.p.h.) on a controlled-access
highway in an urban area" and "for other motor vehicles in other locations" with
no way to tell which half was deleted. A quote from it would not be verifiable
and a paraphrase would be a guess. The bank asks no general speed-limit
question instead, which is the honest option and costs a learner nothing,
because the guide the exam is written from does not contain those numbers
either.

---

## 5. Conflicts

**1. The move-over fine, inside the same document.** Page 11 (Move Over Law):
"If a driver is found guilty of violating this law, they can be fined up to
$1,000, receive jail time or both." Page 15 (Approaching a Law Enforcement
Vehicle with Emergency Lights Turned On), describing the same duty in nearly
identical words: "If a driver is found guilty of this law, they can be fined up
to $500, receive jail time or both." Both sentences are quoted in
`excerpts.ts` (`move-over-penalty`, `approach-penalty`) and **no question in
this bank asks for that number.** The rule itself - move to the farthest lane
away from the stopped vehicle whenever possible, slow down where that is unsafe
or impossible - is stated identically in both places, so `ar_s1_23` and
`ar_s6_25` are built on it and are correct under either reading.

**2. Publisher vs the commissioning brief.** Resolved in favor of the document
itself: Arkansas State Police / DPS, not DFA. See the header of this note.

**3. Guide typos left standing.** These are preserved verbatim in the quotes and
no question is built on the mistaken half:

- Page 9: the seat belt law permits a stop "based on the primary violation of a
  motor vehicle driver or the front-seat passenger **who is buckled up**". The
  next sentence makes the intent plain - it is the unbelted driver who is
  stopped. `ar_s1_28` tests the primary/secondary enforcement point, which both
  readings support.
- Page 46: "18 years of age or older may use a hands-free device, even though
  it's not recommended **to a cell phone** while driving." A verb is missing.
- Page 75: "0.02%breath or blood alcohol concentration", no space.
- Page 55: "On packed, snow you should cut your speed in half."
- Page 13: "Drivers who fail to obey  this law" (double space, collapsed by the
  agreed whitespace normalization).

**4. Vision figures stated twice, differently framed.** Page 5 gives 20/40
uncorrected for an unrestricted license and 20/70 corrected for a restricted
one; page 71 says "at least twenty-seventy (20/70) vision in at least one eye,
with or without corrective lenses". These are the same scheme described from two
angles rather than a contradiction. `ar_s3_03` uses the page 5 framing, which is
the operative one.

---

## 6. What learners report

`python scripts/fetch-reddit.py arkansas ...` was run twice, with twelve
searches across r/Arkansas, r/LittleRock, r/DMV, r/driving, r/drivingtest,
r/newdrivers and r/teenagers. **43 threads saved** to `tmp/arkansas-reddit-*.txt`.
Roughly half were off-topic (the script's search returns some noise) or about
other states; ten were genuinely about Arkansas testing and are listed below.
Paraphrases only - no comment text is reproduced anywhere in the bank or here,
and no recalled exam question was used.

Subreddit ambiguity was checked: r/LittleRock is Little Rock, Arkansas, and
r/Arkansas is the state. r/NWArkansas and r/fayettevillear returned nothing.

| Sub | Thread | Year | Paraphrase of the claim | Shaped |
|---|---|---|---|---|
| r/Arkansas | "Things that I 100% need to know to pass Arkansas Driver's Test?" | 2020 | A commenter says anything in the study guide is fair game, that the test asks about fines, offences and braking distances, and that it is adaptive and ends early if you miss too many. | The whole bank's decision to treat the guide as the single source; the penalty and stopping-distance questions `ar_s3_01`, `ar_s3_06`, `ar_s4_04`, `ar_s6_06`, `ar_s6_18`; the early-stop line in section 2 (recorded as unconfirmed) |
| r/Arkansas | "Drivers Test" | 2024 | Several commenters describe the examiner checking lights, blinkers, hazards, wipers and mirrors before the drive, and one recounts a candidate failing immediately for not knowing where the hazard-light button was. | `ar_s5_01`, `ar_s5_02` |
| r/Arkansas | "Arkansas Learner Permit Fee" | 2025 | The poster cannot reconcile the $5 in the manual with figures found online; commenters say the test itself cost them nothing and the money is paid later for the license. | `ar_s2_26`, `ar_s5_13`, `officialTest.notes` |
| r/LittleRock | "What is usually tested on drivers test in Little Rock" | 2023 | Commenters describe failures for misreading a No Left Turn sign at the exit, not knowing the headlight controls, being quizzed on the speed limit in a neighbourhood, and not checking over the shoulder. | `ar_s5_01`, `ar_s5_02`, `ar_s2_16` |
| r/LittleRock | "Driver's license test?" | 2025 | Commenters repeat two failure causes: watching your speed on a downhill, and turning your head over your shoulder when changing lanes. | `ar_s2_16`, `ar_s5_03` |
| r/LittleRock | "Do I need to use right on red to pass the driving test in little rock?" | 2023 | A commenter warns to check for No Turn On Red signs at specific local junctions where visibility is poor. | `ar_s1_02`, `ar_s5_25` |
| r/LittleRock | "Does anyone know how long you need to wait between drivers skill test tries" | 2023 | The poster cannot find a published retest wait; the thread ends with the poster's own update that it is at the examiner's discretion. One commenter separately claims five days between written attempts. | Section 2 "retest wait: not published" - deliberately left out of `officialTest.notes` |
| r/Arkansas | "How long do I have to wait to take drivers test after my written test?" | 2024 | Commenters give conflicting waits by age and note the permit now lasts two years where it used to be six months. | `ar_s3_12` |
| r/Arkansas | "Question regarding motorcycle learners permit in Arkansas" | 2025 | Riders explain there is no motorcycle learner permit, and that passing an MSF course substitutes for the skills exam. | `ar_s3_12` context (the 90-day MSF certificate deadline) |
| r/driving | "Made a driving error" | 2023 | A driver new to the US describes a near-miss caused by using a centre turn lane to reach a business, having not understood how the lane works. | `ar_s2_02`, `ar_s5_04` |

Two official sources did more work than the forums, as the playbook predicts.
Source 2, the State Police's own practice test, settled the 25-question figure
and stated that the guide is the exclusive source. Source 4 supplied the failure
rate that justifies how hard set 5 is pitched.

---

## 7. Local gotchas

1. **Testing starts at 14, and "instruction permit" and "Learner's License" are
   two different things.** Every other bank on this site uses the words
   interchangeably. Arkansas issues the permit at 14 after the knowledge and
   vision tests, and the Learner's License only after the skills test - so a
   learner searching for "Arkansas learner's permit test" is looking for the
   instruction permit exam.
2. **Under 18 there is no phone use at all, hands-free included.** Nearly
   everyone assumes hands-free is the teenage exemption. In Arkansas it is
   explicitly not, and texting is banned at every age.
3. **The school bus median threshold is twenty feet.** Drivers translate
   "divided highway" into "I don't have to stop". Most urban medians are a
   painted strip or a narrow kerb, and below twenty feet every lane stops.
4. **The centre left-turn lane is never an acceleration lane.** The guide
   permits it as part of a left turn and forbids the run-up in the same
   sentence. Both directions use that lane, so a driver building speed in it is
   closing head-on with someone doing the same thing.
5. **An unposted county road is 40 mph, and 15 over is a misdemeanor.** The
   only speed number in the whole guide, and it carries a criminal threshold
   that a rural road tempts you across.
6. **Wipers on means headlights on, by law.** The trigger people forget is
   daytime rain, when it feels bright enough to skip.

---

## 8. Verification

All three run 2026-09-06, against the tree as committed.

```
$ npx tsx scripts/extract-quotes.mjs arkansas
tmp/arkansas-quotes.json: 312 quotes

$ python scripts/verify-excerpts.py arkansas tmp/arkansas-handbook.pdf
arkansas: 312/312 quotes verified verbatim against 1 source(s)

$ python scripts/build-excerpt-snippets.py arkansas tmp/arkansas-handbook.pdf
arkansas: 311 snippets rendered, 1 not located, 0 skipped as not in this document
```

Only one source is passed to `verify-excerpts.py` because only one source is
quoted; nothing is cited from a statute site or a web page, so nothing reports a
false failure. `nonOfficial` is 0.

The one quote with no rendered snippet is `curb-colors` (printed page 42),
which runs two separate captioned bullets together - "Red curb means fire zone."
and "Yellow curb means a loading zone or other restriction." - with a figure
between them on the page, so the snippet builder cannot find them as one
contiguous span to crop. The quote itself verifies verbatim against the PDF;
only the picture is missing.

Three rendered PNGs were opened and checked by eye: `right-on-red.png`,
`dwi-008.png` and `no-parking-distances.png`. Crops are tight, legible and not
clipping the first letter of each line. `no-parking-distances.png` highlights
only the first bullet of a stem-plus-list quote, which is the known behaviour of
the snippet builder for run-together list quotes; the crop is still readable and
shows the surrounding list.

```
$ npx tsx scripts/validate-driving.mjs --only arkansas
=== Arkansas (AR) - 6 sets ===
  snippets: 311 in manifest, 311/312 excerpts covered (100%)
  quotes verified: 312/312 verbatim against arkansas-handbook.pdf
  excerpts: 312 (135 unused), questions wired: 195/195 (100%), quoted total: 47.5k chars
  questions: 195
  answer positions: A:25% B:25% C:25% D:25%
  context: 100%  source links: 100%  starred: 19%
  topics: safety:27 rules:22 licensing:20 signs:18 rightOfWay:18 sharing:17
          impairment:16 emergencies:15 signals:14 parking:14 speed:14
ERRORS: 0   WARNINGS: 0
```

135 excerpts are not referenced by any question. None were deleted: they are
verified official wording for rules a learner may look up from a neighbouring
question, and the playbook is explicit that a verified quote is never removed to
hit a count.
