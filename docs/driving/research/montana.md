# Montana - research note

Bank built 2026-09-07 to `docs/driving/PLAYBOOK.md`. Slug `montana`, code `MT`,
country `US`. Licensing authority: the **Motor Vehicle Division (MVD)**, a
division of the **Montana Department of Justice**. Montana has no DMV, and the
distinction matters locally - vehicle title and registration is handled by
county treasurer offices, and driver licensing by MVD driver exam stations.

The MVD moved off `dojmt.gov` onto its own domain, `mvdmt.gov`. Every page
footer still reads "©2026 MONTANA DEPARTMENT OF JUSTICE", and the appointment
scheduler is still hosted at `cars.dojmt.gov`.

---

## 1. Sources read

| Source | Publisher | Edition label | URL | Fetched | How |
|---|---|---|---|---|---|
| Montana Driver Manual | MT Motor Vehicle Division, Dept of Justice | **Revised April 2024** (cover); file `25-0100M-...-05.26.pdf`, uploaded May 2026, PDF modDate 2026-05-18 | https://mvdmt.gov/wp-content/uploads/2026/05/25-0100M-Montana-Driver-Manual-English-05.26.pdf | 2026-09-07 | direct (curl with a browser UA; `WebFetch` gets 403 from this host) |
| Montana Code Annotated 2025, Title 61 | Montana Legislature | "Montana Code Annotated 2025" | https://mca.legmt.gov/bills/mca/title_0610/ | 2026-09-07 | direct, section by section |
| Getting a Montana Driver License - Drivers Under 18 | MT MVD | undated web page | https://mvdmt.gov/new-driver-license/drivers-under-18/ | 2026-09-07 | direct |
| Getting a Montana Driver License - New Drivers 18+ | MT MVD | undated web page | https://mvdmt.gov/new-driver-license/adult-driver-license/ | 2026-09-07 | direct |
| Licensing Fees | MT MVD | undated web page | https://mvdmt.gov/licensing-fees/ | 2026-09-07 | direct |
| Frequently Asked Questions | MT MVD | undated web page | https://mvdmt.gov/faqs/ | 2026-09-07 | direct |
| Forms & Manuals: Licensing | MT MVD | undated web page | https://mvdmt.gov/forms-driver-license/ | 2026-09-07 | direct - used to confirm which manual PDF is the current one |
| dojmt.gov/driving/driver-licensing/ (superseded MVD site) | MT DOJ | 2023 capture | https://web.archive.org/web/20230711215121/https://dojmt.gov/driving/driver-licensing/ | 2026-09-07 | Internet Archive snapshot 2023-07-11, used only to check whether the old site ever published the test format. It did not. |

**Manual edition.** The cover reads "Revised April 2024" and that is the
publisher's own label, so it is what `handbookEdition` records. The file itself
was uploaded to `mvdmt.gov` in May 2026 and is the copy the MVD's Forms &
Manuals page links to today. The under-18 page still links to a 2023 filename
that now 404s; the adult page and the forms page both link to the current file.

**Extraction check (done first, per playbook section 6).** 99 pages, 283,436
characters of extracted text. Scanned for the Nebraska/West Virginia broken font
map signature (a digit wedged inside a word, e.g. "traf4c", "of4ce"):
**0 mangled tokens.** The text reads as clean English throughout. Two ordinary
line-break artifacts do exist in the extraction - "intention- ally" and
"four- second", where the hyphen carries a trailing space so de-hyphenation
cannot join them - and quotes were routed around both rather than repaired.

**ARM could not be read.** The Administrative Rules of Montana moved to an
Esper single-page app at `rules.mt.gov`; the legacy `mtrules.org` gateway URLs
now redirect into it and its data endpoints return 403. ARM 23.3 was therefore
not consulted. Nothing in this bank depends on it.

---

## 2. Test format

| Item | Value | Source |
|---|---|---|
| Question count | **33 (unconfirmed)** | No official source. See below. |
| Pass mark | **27 of 33, 82% (unconfirmed)** | No official source. See below. |
| Time limit | **None published** | Neither manual nor mvdmt.gov states one |
| Early-stop rule | Not published | - |
| Retest wait | No wait stated; **three attempts per receipt, receipt valid one year, not renewable** | Manual p. 9, "Fees/Receipts" |
| Fee | **$5.00 per year of licence validity** for a Class D or learner licence, plus a 3% administrative fee; full grid by age on the fees page (e.g. age 16 to 21st birthday = $26.27, age 18 = $15.97) | Manual p. 9; https://mvdmt.gov/licensing-fees/ |
| Where taken | MVD driver exam station, **appointment required at all stations** | Manual p. 10 |
| Vision standard | 20/40 in at least one eye, with or without corrective lenses | Manual p. 70 |
| Statutory subject list | "a knowledge test examining the applicant's ability to read and understand highway signs and the applicant's knowledge of the traffic laws of this state" | 61-5-110(2)(a), MCA |

**The question count and pass mark are not published by Montana.** This was
checked, not assumed:

- The manual never states them. It gives the NCLP prerequisites, the fee table
  and the three-attempt receipt rule, and stops there.
- `mvdmt.gov` never states them - not on the under-18 page, not on the adult
  page, not in the Driver License section of its FAQ.
- The superseded `dojmt.gov/driving/driver-licensing/` page did not state them
  either (2023 archive capture, searched for "written", "questions", "pass",
  "score", "attempt").
- ARM is unreadable (section 1).

The 33-question / 27-correct (82%) figure appears only on third-party practice
sites, which the playbook excludes as a source. It is recorded in
`officialTest.notes` **as unconfirmed and labelled as such on the page**, because
`questionCount` and `passCount` are required fields on `Jurisdiction`. This
follows the precedent already in the repo for Alabama, Colorado, South Carolina
and Manitoba. One Montanan on r/Montana (2024) described it as "an 80 percent
pass rate", which is close to but not the same as 82%; that disagreement is
itself the reason to treat the number as unconfirmed.

**Official practice material that does exist.** Every chapter of the manual ends
with a quiz, and the answers are printed on page 85. Montana learners
consistently point new drivers at those rather than at prep sites. Set 5 and set
6 draw on the *subjects* those quizzes test - never on their wording.

---

## 3. Section and page map

Page numbers are the manual's own printed numbers. Add 10 for the PDF page.

| Manual page | Content |
|---|---|
| i-v | Table of contents |
| vi | Save Time - Go Online (online services; notes the standard licence term is now 12 years, 8 with REAL ID) |
| **1-11** | **Chapter 1 - The Driver License.** Quick reference (1); licence types incl. Non-Commercial Learner Permit (2); Motorcycle endorsement (2-3); REAL ID (3); who may apply (3); proof of authorized presence / identity / residence (4-6); REAL ID documentation (7); **Graduated Driver Licensing programme (7-8)**; **Fees/Receipts, incl. the three-attempt rule (8-9)**; renewal (9); lost licences, address and name change (10); exam stations and appointments (10); Chapter 1 quiz (11) |
| **12-21** | **Chapter 2 - Motor Vehicle Equipment.** Trip planning and vehicle checks (12-13); **motor vehicle equipment and the light-distance table (14-15)**; additional equipment on certain vehicles (16-17); disabled-vehicle warning devices (18); slow-moving vehicles (18); windows and mirrors (18-19); **safety belts required (19)**; **child restraints (20)**; Chapter 2 quiz (21) |
| **22-36** | **Chapter 3 - Signs, Signals, & Markings.** Shape and colour (22); regulatory, warning and construction signs (23-28); **school zone standards, incl. the 15 mph floor (29)**; **traffic signals, incl. right and left on red (30-31)**; **roundabouts (32)**; **railroad crossings, incl. the 15-foot stop (33)**; road and pavement markings (34-35); Chapter 3 quiz (36) |
| **37-48** | **Chapter 4 - Driving Rules.** General driving, incl. **the 100/300-foot signal rule (37)**; **speed limit table (38)**; passing (38); turning and the **500-foot U-turn rule (38-39)**; right-of-way, pedestrians, intersections, crosswalks, **emergency vehicles and school buses (39-41)**; funeral processions (42); **bicyclists and motorists (42-44)**; **parking, parallel parking, hills and the no-parking list (44-46)**; **motor vehicle insurance (47)**; Chapter 4 quiz (48) |
| **49-69** | **Chapter 5 - How to Drive Safely.** Distracted driving (49); basic driving (50-51); seeing well and scanning (51-55); night driving (55); communicating and signalling (56-58); **adjusting speed, road conditions, skids and hydroplaning (59-61)**; **sharing space, the three-second rule, passing space (64-68)**; Chapter 5 quiz (69) |
| **70-76** | **Chapter 6 - Physical Requirements.** Vision, hearing and fatigue (70-71); **drinking and driving, BAC, open containers (71-72)**; other drugs (73); health and emotions (73); senior drivers (74-75); Chapter 6 quiz (76) |
| **77-82** | **Chapter 7 - Emergencies, Crashes, & Enforcement Stops.** Vehicle emergencies (77-78); avoiding collisions (78-79); **accidents and reporting thresholds (79-80)**; **driver response to emergency vehicles (80)**; enforcement stops (81); Chapter 7 quiz (82) |
| 83 | Chapter 8 - Penalties & Driving Records |
| 84 | Chapter 9 - Other Services |
| **85** | **Quiz answers** |
| 86 | Additional resources (drowsy driving, railroad ENS, child heatstroke) |
| 87 | REAL ID checklist |
| 88 | History of the Montana licence plate |

---

## 4. What the handbook does not say

| Number the test can ask for | Where it actually is |
|---|---|
| **The 25 mph urban district speed limit** - the default on a town street with nothing posted. The manual's speed table covers interstates, urban area highways and two-lane highways only. | 61-8-303(1)(d), MCA |
| The definition of "daytime" for the two-lane day/night split | 61-8-303(5), MCA - half an hour before sunrise to half an hour after sunset |
| The 70/65 default on "any other public highway" (day/night) | 61-8-303(1)(c), MCA |
| The 75/70 default on a four-laned national highway of 10 miles or more | 61-8-303(1)(b), MCA |
| Speeding fine schedule ($20/$40 for 1-10 over, $70 for 11-20, $120 for 21-30, $200 for 31+) and the rule that 10 over by day or 5 over by night is not recorded against the driving record | 61-8-725, MCA |
| The 90 mph ceiling above which the no-record protection stops | 61-8-725(2)(b), MCA |
| **Lane filtering for two-wheeled motorcycles** - legal in Montana, up to 20 mph, past traffic doing 10 mph or less. The manual does not mention it at all. | 61-8-392, MCA |
| The minimum-speed / impeding-traffic offence | 61-8-311, MCA |
| The upper limit on a local authority raising an urban-district limit (65 mph nighttime) | 61-8-310(1)(b), MCA |
| Prima facie failure-to-yield after passing a yield sign | 61-8-342(4), MCA |
| The precise stop position at a stop sign (crosswalk, then stop line, then sightline) | 61-8-344(3), MCA |
| DUI thresholds beyond 0.08 and 0.02 - the 0.04 commercial limit, the 5 ng/ml THC limit, and "any amount" of THC under 21 | 61-8-1002(1)(c)-(e), MCA |
| The current first-offence DUI penalty range | 61-8-1007(1)(a)(i), MCA |
| The open-container penalty ($100 max, not recorded, insurers may not use it) | 61-8-1026(3), MCA |
| The duty to remain at a crash scene until an officer gives express permission | 61-7-105(1)(c), MCA |
| Studded-tyre dates stated as a permission rather than a prohibition (1 October to 31 May) | 61-9-406(3), MCA |

Montana is unusually good on distances - unlike most states it prints the
parking table, the headlight distances and the signalling distances in the
manual itself - so the gaps above are narrower than in a typical bank.

---

## 5. Conflicts

Four, and all four are between the manual and the current statute or between two
official pages. Each is resolved explicitly below and none is resolved silently.

**(a) Interstate speed limit. Manual "75/80" vs statute "80".**
The manual's Chapter 4 table prints "75/80" in both the day and night columns
for interstate highways. 61-8-303(1)(a), MCA sets a flat **80 mph** outside an
urbanized area of 50,000 or more and **65 mph** inside one. Resolution: the
statute governs. Set 4 q07 asks the urban-area figure (65 - and the manual's own
"Urban Area Highways" row agrees). Set 5 q01 asks the rural interstate figure
directly and **names the conflict in its trap note**. Set 1 q04 and set 6 q05 use
the two-lane row, where the manual and statute agree.

**(b) Move-over speed. Manual "20 below on any road posted 50+" vs statute's
three-way grid.** The manual (p. 80) says vehicles in a lane next to a stationary
emergency vehicle on a highway posted 50 mph or more must slow to at least 20
mph below the limit. 61-8-388, MCA now requires 20 below on the **interstate** if
you can change lanes and half the limit if you cannot; 30 below on a **state
highway or county road** if you can change lanes and half the limit if you
cannot; and half the limit on **any other road**. Resolution: statute. Set 3 q01
and set 5 q03 both cite 61-8-388, and both trap notes say the manual is out of
date. `localGotchas` carries it too.

**(c) First-offence DUI penalty. Manual "$300-$1,000 and 1-60 days" vs statute
"$600-$1,000 and 24 hours-6 months".** The manual (p. 72) prints the older
figures. 61-8-1007(1)(a)(i), MCA sets not less than $600 and not more than
$1,000, with imprisonment of not less than 24 consecutive hours and not more
than 6 months. Resolution: statute, cited in set 5 q04. The BAC numbers in the
manual (0.08, 0.02 under 21) are current and agree with 61-8-1002.

**(d) Learner permit age. Manual vs mvdmt.gov - two official sources
disagreeing with each other.** The manual (pp. 2 and 8) says an NCLP may be
issued at a driver exam station to an applicant who is **16** without traffic
education **or 15 with an approved course completed**. The MVD's own under-18
page describes a "Learner Permit" for "Students that are 15 years and older and
have not attended a Driver Training Class", issued at a driver exam station.
Both agree on the third route (14 1/2 while participating in or having completed
an approved course). Neither page has been amended to match the other.
Resolution: **not picked silently.** Set 5 q08 asks about the disagreement
itself, quotes both, and both readings are in the excerpt library
(`lic-nclp-eligibility`, `mvd-permit-15-plus`). No other question turns on it.

One further internal inconsistency in the manual is recorded but not tested,
because it is not a rule a learner is examined on: p. 3 says a standard licence
is valid for 12 years and a REAL ID for 8, while p. 8's fee section says a
licence for a holder aged 21 to 75 expires "eight years or less" after issuance.
The MVD fee table's "Length of License" column says 12 for ages 21-63. Nothing
in the bank depends on it.

---

## 6. What learners report

`python scripts/fetch-reddit.py montana montana:"permit test"
montana:"knowledge test failed" Bozeman:"DMV written test" Missoula:"permit
test" DMV:"Montana knowledge test" newdrivers:"Montana permit"
drivingtest:"Montana" Montana:"drivers license test" billings:"drivers license"`

**49 threads saved, 0 rejected as block pages.** Two of the nine searches
returned nothing (`r/newdrivers` and `r/drivingtest` have no Montana threads
matching). Of the 49, roughly a dozen are on-topic; the rest are Montana threads
about vehicle registration, plates or politics that the search swept up. Threads
actually used, with a one-line paraphrase of the claim and the question ids they
shaped. No comment text is reproduced.

| Sub | Thread | Year | Claim (paraphrased) | Shaped |
|---|---|---|---|---|
| r/Montana | "Why why do I keep failing my permit test" | 2024 | OP failed three times having studied; a commenter states the pass mark is "an 80 percent pass rate"; another says the questions they miss are the ones asking for a **specific number**, and that choosing the safer-sounding larger figure (their example: 500 ft vs 300 ft) is still marked wrong; a third says the questions are worded to trick you and must be read carefully. | `officialTest.notes` pass-mark note; `localGotchas` signalling entry; mt_s1_12, mt_s5_02, mt_s1_07, mt_s2_03, mt_s3_06, mt_s5_05 |
| r/Bozeman | "Passing score for Montana Road test?" | 2025 | A commenter tells the OP to read the manual and do the practice questions printed on each page, saying "those are the questions". Another describes the road test as unforgiving on parallel parking. | `officialTest.notes` chapter-quiz note; mt_s3_29 |
| r/Bozeman | "Driving test nerves..." | 2023 | A commenter failed first time for turning right on red **without coming to a full stop**; another was marked down for not signalling when pulling away from the kerb; a third for a rolling stop in a manual car; several describe a school zone on the test route. | mt_s1_02, mt_s2_09 context, mt_s1_27 |
| r/Bozeman | "Yellow lights" | 2025 | A long argument about what a steady yellow requires, with two commenters quoting 61-8-207(2)(a) at each other and disagreeing about whether it means stop or means do not enter once red shows. | mt_s1_22, mt_s5_06 |
| r/Bozeman | "Recent driving test experiences?" | 2025 | Several accounts of the Bozeman road test route; parallel parking named repeatedly as the part people fail. | mt_s3_29 |
| r/Montana | "Driving Test" | 2023 | Multiple Montanans report appointment waits of weeks to months, and that some stations no longer take walk-ins. | `officialTest.notes` appointment note |
| r/Montana | "Best driver test app?" | 2023 | Commenters point at the chapter questions at the end of each manual section with answers in the back, and at a state-published practice app. | `officialTest.notes` chapter-quiz note |
| r/Bozeman | "Drivers license question" | 2021 | Describes the driver-education route: the course tests students, and only a random subset is retested at the counter - which matches 61-5-110(4)'s cooperative driver testing program. | mt_s5_18, mt_s4_25 |
| r/Bozeman | "Montana does not have a DMV" exchange inside the same thread | 2021 | A Montanan corrects "DMV" to "Motor Vehicle Division", and points out that county treasurer offices are not driver licensing offices. | `intro` |
| r/Bozeman | "Best way to learn how to drive as an adult living near Bozeman?" | 2026 | Adult learners report that driver education outside high school is nearly non-existent in Montana and that the **written test is manageable by self-study**. | `officialTest.notes` |
| r/missoula | "Looking for info on driving practice & taking dl test" | 2026 | Practical requirements for bringing your own car to the road test - registration and insurance current, all lights and signals working, no windscreen crack in the driver's line of sight. | mt_s4_06 context |
| r/Montana | "Getting a Driver's License as an Adult in Montana" | 2019 | Adult route confirmed as permit first, then road test after practice; no course required over 18. | `intro` |

**The three strongest traps found**

1. **Exact-distance questions, where the safer-sounding number is wrong.** Named
   explicitly by a Montana commenter in 2024 and consistent with the manual's
   content: Montana prints more distances than most states (100/300 ft signal,
   15/20/30/50 ft parking, 15 ft rail, 30 ft school bus, 500 ft U-turn and
   headlight visibility, 1000/500 ft high beam) and several of them sit close
   enough together to be swapped under pressure. Seven questions in this bank
   are built on that, and set 5 leads with two of them.
2. **Right on red without an actual stop.** Reported as a first-attempt failure
   on the Bozeman test. It is the default permission in Montana, which is
   precisely why the stop gets dropped.
3. **What a steady yellow requires.** A live argument among Montana drivers,
   with the statute cited on both sides. The manual's rule (do not enter unless
   too close to stop safely) and 61-8-207(2)(a) (may not enter once red is
   exhibited) are complementary, and knowing both is what settles it.

---

## 7. Local gotchas

The seven entries in `localGotchas`, and why each catches people.

1. **The speed table is not the whole law.** The manual never prints the 25 mph
   urban district default, and its interstate row has been overtaken by the
   statute. A learner who studies only the book has no answer for "no sign on a
   residential street".
2. **Signalling is 100 feet in town and 300 feet on a rural road.** Two numbers
   for one rule. The commenter quoted above named this class of question as the
   one that fails people, and the trap is that the larger figure feels safer.
3. **The move-over rule in the manual is out of date.** One figure in the book,
   a three-way grid in the statute, and the grid is what is enforced.
4. **No statewide texting or handheld ban.** Montana is one of very few states
   without one. The manual says only that most Montana cities have their own
   ordinances, so the legal position changes town by town - which also means a
   learner cannot answer "is it legal here?" from the book.
5. **Lane filtering is legal.** Two-wheeled motorcycles may pass stopped or
   slow-moving traffic within the lane, up to 20 mph, past traffic doing 10 mph
   or less. The manual does not mention it, and drivers arriving from almost
   any neighboring state assume it is prohibited.
6. **Three attempts per receipt, and the receipt is not renewable.** Most states
   let you retake indefinitely for a fee. Montana caps it, the cap runs with a
   one-year receipt, and exam stations require appointments that Montanans
   report waiting weeks or months for.
7. **The manual's first-offence DUI figures are stale.** $300 in the book,
   $600 in the statute.

---

## 8. Verification

All run 2026-09-07 against the tree as committed.

```
$ npx tsx scripts/extract-quotes.mjs montana
tmp/montana-quotes.json: 429 quotes

$ python scripts/verify-excerpts.py montana tmp/montana-handbook.pdf \
      tmp/montana-statute.txt tmp/montana-mvd.txt
montana: 429/429 quotes verified verbatim against 3 source(s)

$ python scripts/build-excerpt-snippets.py montana tmp/montana-handbook.pdf
montana: 354 snippets rendered, 1 not located, 74 skipped as not in this document

$ npx tsx scripts/validate-driving.mjs --only montana
  snippets: 354 in manifest, 354/429 excerpts covered (83%)
  quotes verified: 429/429 verbatim against montana-handbook.pdf, montana-statute.txt, montana-mvd.txt
  excerpts: 429 (245 unused), questions wired: 195/195 (100%)
  questions: 195
  answer positions: A:29% B:25% C:25% D:21%
  context: 100%  source links: 100%  starred: 20%
ERRORS: 0   WARNINGS: 0
```

Notes on those numbers:

- **74 skipped as not in this document** are the 64 Montana Code Annotated
  quotes and the 10 mvdmt.gov quotes. They are not in the handbook PDF, so no
  snippet can be cropped from it. That is expected. Of the 355 handbook quotes,
  354 rendered - **99.7%**, comfortably above the playbook's 80% target. Three
  rendered PNGs were opened and checked: `stop-sign-octagon`,
  `speed-table-interstate` and `lic-three-attempts`. All three crop cleanly with
  no clipped first letters.
- **245 unused excerpts.** The library was built to cover the manual and the
  statute sections a learner needs, not only the 195 questions. Per the
  playbook, verified official wording is not deleted to hit a count; every
  question that carries an `excerptKey` resolves, and coverage is 100%.
- **Answer positions.** Written with varied positions, then evened out by
  rotating the option order on 38 questions whose options are short and
  order-neutral (numbers, distances, short noun phrases). The rotation is
  cyclic, so the remaining options keep their relative order, and the script
  asserts the correct answer TEXT is unchanged. Questions whose options were
  ordered deliberately (most tempting wrong answer first) were left alone.
- **Topic spread.** safety 23, signs 22, rules 22, signals 18, licensing 18,
  rightOfWay 16, speed 16, parking 16, sharing 15, emergencies 15, impairment
  14. All eleven `DrivingTopic` values are covered, and no set is dominated by
  one topic.

### Could not be verified

- **The knowledge test's question count and pass mark.** Montana publishes
  neither, in any official source checked (section 2). The bank ships 33/27 with
  an explicit note on the page saying it is unconfirmed, matching the repo's
  existing practice for Alabama, Colorado, South Carolina and Manitoba.
- **Any time limit or early-stop rule.** Not published; the note says so rather
  than guessing.
- **ARM 23.3.** Unreadable behind a single-page app (section 1). Nothing in the
  bank rests on it.
- **The learner-permit age at an exam station for a 15-year-old with no course.**
  Two official Montana sources disagree (section 5d). Both are quoted; neither
  is presented as the answer.
