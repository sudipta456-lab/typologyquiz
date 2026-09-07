# Nebraska - research note

Bank: `src/lib/driving/nebraska/`. Content date **2026-09-06**. Handbook edition
**January 2025**.

---

## 1. Sources read

| # | Source | Publisher | Edition label | URL | Fetched | How |
|---|---|---|---|---|---|---|
| 1 | Nebraska Driver's Manual (Class O) | **Nebraska Department of Motor Vehicles** | "January 2025", printed on the inside back cover; the file is served as `Class O Drivers Manual-English 1-2025.pdf` | https://dmv.nebraska.gov/sites/default/files/doc/Class%20O%20Drivers%20Manual-English%201-2025.pdf | 2026-09-06 | Direct download |
| 2 | Nebraska Revised Statutes, Chapter 60 (Motor Vehicles) - 108 sections in Articles 4 and 6 | **Nebraska Legislature** | Current text as published, including amendments through Laws 2025 | https://nebraskalegislature.gov/laws/statutes.php?statute=60-6,186 (one URL per section) | 2026-09-06 | Direct fetch, saved to `tmp/nebraska-statutes.txt` |
| 3 | Driver Licensing Examiner Policies and Procedures Manual | **Nebraska Department of Motor Vehicles**, Driver Licensing Services | No edition label; 210 pages | https://dmv.nebraska.gov/sites/dmv.nebraska.gov/files/doc/dls/DLE_Policies_and_Procedures_Manual.pdf | 2026-09-06 | Direct download |
| 4 | Driver's License, ID and Permits pages: Provisional Operator's Permit (POP), Learner's Permit (LPD), School Permit (SCP), School Learner's Permit (LPE), Driver's License, Driver Manuals / Practice Tests, Practice Driver's License Exam | **Nebraska Department of Motor Vehicles** | Undated web pages | https://dmv.nebraska.gov/dl/pop and siblings | 2026-09-06 | Direct fetch, saved to `tmp/nebraska-dmv-web.txt` |

**Publisher check.** The brief's assumption held here, unlike in Arkansas and
New Mexico: Nebraska genuinely has a **Department of Motor Vehicles**, it is a
standalone state agency (301 Centennial Mall South, Lincoln), and it publishes
the driver manual itself. The manual carries a signed letter from Governor Jim
Pillen and the DMV's own vision and mission statements. No revenue or public
safety department is involved.

**License-stage name check.** Nebraska's ordinary learner stage is the
**Learner's Permit, type LPD** - the DMV's own page title is "Learner's Permit
(LPD)" and the statute is titled "LPD-learner's permit". It is not an
"instruction permit". Nebraska issues five pre-license credentials, all with
different names and ages, and the manual names them exactly this way:

| Credential | Type code | Minimum age | Expires |
|---|---|---|---|
| Farm Husbandry Permit | FHP | 13 (living on a farm) or 14 (employed on one) | 16th birthday |
| School Learner's Permit | LPE | 14 | 6 months after issuance |
| School Permit | SCP | 14 years 2 months | 16 years 3 months |
| Learner's Permit | LPD | 15 | 1 year after issuance |
| Provisional Operator's Permit | POP | 16 | 18th birthday |
| Operator's License (Class O) | - | 17 | 21st birthday if under 21 |

---

## 2. Test format

Everything in this section comes from source 3, the DMV's examiner manual,
because **the Driver's Manual never states the format at all**. Its only
sentence on the subject is "There is a separate written test for each class of
license."

| Item | Value | Where it comes from |
|---|---|---|
| Questions | **25** | Examiner manual p. 33: "Class O Written Test 25 Questions can miss 5 questions" |
| Pass mark | **20 of 25 (80%)** | Examiner manual p. 33: "Applicants must score a minimum of 80% on all written test to pass." |
| Time limit | **None published** | No time limit appears in the examiner manual, the Driver's Manual or any DMV page |
| Early stop | None | Not mentioned |
| Result validity | **6 months** | Examiner manual p. 33 |
| Retest wait | 1 day between tests 1-3; test 4 is current date + 7 days; after a 5th failure the examiner contacts a supervisor; after a **6th** failure, an approved driver training course or 90 days | Examiner manual p. 34 |
| Delivery | Testing tablet, with help and skip buttons; audio headsets available; written and audio in **English and Spanish**; a 24-question **non-verbal picture test** (may miss 4) | Examiner manual pp. 33-34 |
| Same-day retake | Not allowed | Examiner manual p. 32 |
| Cheating | Counts as a failure and puts the applicant on the normal retest ladder | Examiner manual p. 33 |
| Fee (LPD) | $13.00 ($8.00 + $5.00 security fee) | dmv.nebraska.gov/dl/learners-permit |
| Where taken | Any driver licensing office; drive tests in Bellevue, Lincoln and Omaha are appointment only | Driver's Manual p. iv (DMV Tips); examiner manual |
| Drive test scoring | Marks, not percent. **15 marks or less passes**, and there are 12 automatic-failure items | Examiner manual p. 43 |

**Two widely repeated numbers for Nebraska are wrong.** "20 questions" and
"70 percent to pass" both circulate; the state's own examiner manual says 25
and 80.

---

## 3. Section and page map

The manual runs **92 PDF pages carrying 80 printed pages**, and they do not
line up. **Printed page N is PDF page N + 8.** Every `section` field in
`excerpts.ts` gives the printed page; every `#page=` anchor gives the PDF page.

| Section | Title | Printed pages |
|---|---|---|
| 1 | Nebraska License to Drive (1A Who must have a license, 1B GDL restrictions, 1C Types of permits and licenses, 1D Obtaining a permit/license/ID, 1E-1P administration, 1Q Suspensions, revocations, impoundments and confiscations) | 1-23 |
| 2 | Important Driver Information (2A Alcohol drugs and driving, 2B Air bags/child restraints/seat belts, 2C Children and pets, 2D Don't Veer for Deer, 2E Health and driving, 2F Nitrous oxide, 2G Pulled over by police, 2H Financial responsibility, 2I-2N equipment, tint, tires) | 24-30 |
| 3 | Signs, Signals and Markings (3A Traffic signals, 3B Traffic signs, 3C Pavement markings) | 31-47 |
| 4 | Rules of the Road (4A Slower traffic keep right, 4B Right-of-way, 4C Speed laws, 4D Passing, 4E Signaling and turning, 4F Parking, 4G Railroad crossings) | 48-59 |
| 5 | Special Driving Conditions (5A Interstate, 5B Night, 5C Adverse weather, 5D Emergencies, 5E Distracted/aggressive, 5F Drowsy, 5G Defensive driving) | 60-67 |
| 6 | Sharing the Road (6A Motorcycles, 6B Bicyclists, 6C Pedestrians, 6D Snow and ice removal, 6E School buses, 6F Large trucks and buses) | 68-72 |
| 7 | If You're Involved in a Crash | 73 |
| - | Driver Licensing Locations | 74 |
| - | Numerical Listing of County Index Numbers | 75 |
| - | **Nebraska Driver's Practice Exam** (25 true/false + 14 multiple choice, with answer key) | 76-77 |
| - | Move Over Law page, back cover, contact details | 78-80 |

### 3a. A defect in the PDF that shaped this bank

The manual's PDF carries a **broken ToUnicode character map**. In most of the
body font the `fi` ligature extracts as the digit **4** and the `fl` and `ffi`
ligatures extract as **nothing at all**. Measured on the fetched file: 210
mangled tokens, 62 of the 92 pages affected, `traf4c` x97, `of4cer` x27,
`of4ce` x15, plus `4ne`, `4ve`, `4rst`, `certi4cation`, `speci4c`,
`identi4cation`, and the vanished-ligature forms `ashing`, `inuence`, `trafc`,
`identication`, `agger`, `conict`, `mufer`, `reectance`.

This is an artifact of the file, not the publisher's prose, so quoting it would
be quoting garbage. `tmp/ne_build_excerpts.py` therefore computes the mangled
token set **from the document itself** (a token T is mangled when inserting a
lost ligature somewhere in T yields another token that also occurs in the same
document) and refuses any candidate quote containing one. Nothing was repaired
by hand.

Consequences worth recording, because a future editor will hit them:

- The whole parking-distance list on printed page 57 is unquotable
  (`Within 30 feet of any ashing signal`, `Within 15 feet of a 4re hydrant`).
  Those distances are quoted from **Neb. Rev. Stat. 60-6,166** instead.
- The four-way-stop courtesy rule on page 49 is unquotable
  (`the driver who stops 4rst`). It IS quotable from the manual's own practice
  exam on page 76, which is set in a font whose ligatures survive.
- The financial-responsibility paragraph in section 2H is unquotable
  (`4nancial`, `twenty-4ve`, `4fty`).
- The Move Over paragraph in 4B-6 is unquotable (`ashing`, `high-way`).
- Signal, sign and markings headings containing "Traffic" are unquotable
  (`3A Trafc Signals`, `3B Trafc Signs`).

**305 of the 400 excerpts are from the manual and 298 of those rendered a
snippet image (97.7%).** Seven did not locate, all of them quotes that cross a
column or page break.

---

## 4. What the handbook does not say

| Rule the test can reach | Manual | Statute that supplies it |
|---|---|---|
| Parking distance from a fire hydrant, crosswalk, stop sign | Printed but unreadable (font defect) | 60-6,166: 15 ft hydrant, 20 ft crosswalk at an intersection, 30 ft flashing signal / stop sign / yield sign / other TCD, 50 ft nearest rail |
| Parking near a **fire station** | Never mentioned | 60-6,166: 20 ft from the driveway entrance, 75 ft opposite when signposted |
| Parking near a **safety zone** | Never mentioned | 60-6,166: not between a safety zone and the adjacent curb, nor within 30 ft opposite its ends |
| Penalty for passing a stopped school bus | "is unlawful", no penalty | 60-6,175(1): Class IV misdemeanor, **$500 fine**, points |
| **Second** exception to the school-bus stop | Only the divided-highway one | 60-6,175(1): also traffic directed to proceed by a sign displayed under subsection (8) |
| Move Over on roads other than controlled-access highways | Never mentioned | 60-6,378.01 |
| Move Over does not apply to an unoccupied stopped vehicle | Never mentioned | 60-6,378(2) |
| **65 mph carve-out** from the 75 mph Interstate limit | Compressed into the word "rural" | 60-6,186(1)(i): 65 mph for the Interstate in **Douglas County**, I-180 in **Lancaster County**, I-129 in **Dakota County** |
| U-turn restrictions | Not covered at all | 60-6,160: no U-turn on a curve or near a hillcrest where you cannot be seen from 500 ft either way, none where signs prohibit, none anywhere on a freeway |
| Backing on a freeway | "Backing up ... is prohibited" (interstate only) | 60-6,169(2): prohibited on any roadway **or shoulder** of a freeway |
| Handheld device ban is **secondary** enforcement | Never says so | 60-6,179.01(4) |
| Passing within 100 ft of a bridge, viaduct or tunnel with obstructed view | Says "hill, curve or bridge" | 60-6,136(1)(c) |
| Conditions under which passing on the right is lawful | Not covered | 60-6,134 |
| Driving on the shoulder | Not covered | 60-6,142 |
| Second point-system revocation in 5 years | "lose their license or privilege for three (3) years" (manual 1Q-2) | 60-4,183 |
| Headlights required when visibility is under 500 ft | Only "sunset to sunrise" | 60-6,219(1) |
| Opening a car door into traffic | Only "look for bicycles" | 60-6,180 |

---

## 5. Conflicts

**Five, all recorded rather than resolved silently.**

1. **Unattended-vehicle wheel direction.** Neb. Rev. Stat. 60-6,168(4)
   requires the front wheels turned **to the curb** whenever a vehicle stands
   unattended on any roadway, with no hill exception. The manual (printed p.
   57, 4F-3) says that facing **uphill where there is a curb** you turn them
   **away** from the curb. The manual's version is also on the DMV's own
   practice exam (item 22, answer True), so it is what the written test is
   written from. `ne_s1_10` asks the manual's hill rule; `ne_s3_33` and
   `ne_s5_14` ask the statute's rule and state the difference explicitly in the
   context block. No question turns on which source you happened to read.

2. **Move Over penalty.** The manual (4B-6) prints "1st offense up to $100.
   2nd and subsequent offenses up to $500 and/or up to 7 days in jail." The
   current text of 60-6,378(1)(d) instead makes a first violation a traffic
   infraction and a second-or-subsequent within five years a Class IIIA
   misdemeanor. The manual's fine schedule appears to be superseded, so **no
   question asks the Move Over penalty**. The questions ask the duty, on which
   both sources agree.

3. **Insurance minimums.** Section 2H states the three statutory figures
   correctly ($25,000 for injury to or death of one person, $50,000 for two or
   more, $25,000 for property). The suspension list at 1Q-1 on printed page 18
   abbreviates the same requirement as "($25,000 property, $50,000 personal
   injury)", which loses the one-person / two-or-more distinction. `ne_s5_03`
   is written so that both readings give the same answer: it asks only what
   figure attaches to **two or more people**, which is $50,000 in both.

4. **Speed limit at 70 mph.** The manual runs statutory subdivisions (g) and
   (h) together as "70 MPH on expressways or super-two-highways and freeways
   that are part of the state highway system". 60-6,186 splits them, and adds
   that the freeway figure applies to a freeway "not part of the National
   System of Interstate and Defense Highways". Same number either way; the
   split is noted in `ne_s6_23`.

5. **"Rural interstate" vs Douglas County.** Covered in section 4 above. The
   manual is not wrong, it is compressed. Posted signs govern in either
   reading, which is what `ne_s3_01` and `ne_s5_07` say.

Two of the manual's own internal slips are preserved verbatim in the excerpts
rather than tidied: the heading "4B-3 At intersectisons with two-way stops",
"Railroad Emergency Notication System (ENS)", "preceeding" in the POP
requirements, "Safey Recall" as a section title, and the missing space in
"established.Trains do not blow the horn at this location."

---

## 6. What learners report

`python scripts/fetch-reddit.py nebraska ...` was run twice, with 18 searches
across r/Nebraska, r/Omaha, r/lincoln, r/DMV, r/driving, r/drivingtest,
r/newdrivers and r/Teenagers. **104 threads were saved** to
`tmp/nebraska-reddit-*.txt`. Subreddit ambiguity was checked: r/lincoln is
Lincoln, Nebraska (its DMV, driving-test and city-government threads confirm
it), and r/DMV threads were filtered by hand because that sub is dominated by
New York and California.

Every claim below was verified against the manual or the statute before it
shaped a question. No comment text is reproduced.

| Sub | Thread | Year | Paraphrase of the claim | Verified against | Shaped |
|---|---|---|---|---|---|
| r/Omaha | "Make the driving test harder or hire cops" | 2025 | A parent who had recently helped a teen study said the state practice exam was dominated by blood alcohol limits, seat belt rules, insurance requirements and school/work permit restrictions | Manual 2A, 2B, 2H, 1C | `ne_s5_01`, `ne_s5_02`, `ne_s5_03`, `ne_s5_05`, `ne_s5_11` |
| r/Nebraska | "How do 50% of drivers not know or follow this law?" | 2023 | A long argument about which lane a left turn must finish in; several commenters believed turning into the far lane is legal, one insisted Nebraska requires the closest lane in the direction of the turn | Manual 4E-4 (printed p. 55): left from the left lane lawfully available, INTO the left lane lawfully available. The commenters who thought the far lane was fine are wrong | `ne_s2_05`, `ne_s6_03` |
| r/Nebraska | "Driver's license help please" | 2023 | An adult who had never been licensed asked whether a learner's permit is required first; commenters said it is needed only to practice legally, not as a precondition for the tests | Manual 1C-6 (5): an 18+ first-time applicant takes vision, written and drive tests. The 90-day LPD rule attaches to failing **three successive drive tests** | `ne_s5_09` |
| r/Nebraska | "re-acquiring a learner's permit" | 2024 | An expired LPD holder asked what carries over; the correct answer is that the written test is waived if the permit expired no more than a year ago | Manual 1C-4, 1C-6; 60-4,123(1) | `ne_s2_16`, `ne_s4_18` |
| r/Nebraska | "please answer!!" / "I have a question about a learner's permit" | 2024 | A teen who had completed driver's ed but held the permit under six months asked whether the course removes the six-month wait; the answer given, correctly, was that it is an AND requirement | 60-4,120.01(1)(b)(i); manual 1C-5 | `ne_s2_29`, `ne_s3_05`, `ne_s5_18` |
| r/Nebraska | "permit test" | 2024 | A candidate scoring 95% on the DMV's own online practice test asked if that was enough; a recent passer said most practice questions appear near-verbatim. The same commenter said "you get three tries before having to take a class" | **Wrong.** The examiner manual's written-test ladder allows six attempts before the course-or-90-days requirement; three successive failures is the **drive** test rule | `ne_s3_12`, `ne_s5_09` |
| r/Nebraska | "Does anybody have advice for the writing test for drivers license?" | 2025 | A 19-year-old who kept failing was told repeatedly to work through nebraska.gov/dmv/practice until the question pool repeats, and that chapter 3 to the end of the manual is the material | Manual sections 3-7; DMV practice exam page | Weighting across sets 2-4 |
| r/lincoln | "If you haven't been to the DMV in a while - from your local DMV examiner" | 2023 | A DMV driver licensing examiner posted that every requirement for every permit is on the DMV website, that people arrive without the documents, and that appointments are only available in Douglas, Sarpy and Lancaster counties | Manual 1D-1; DMV Tips page; permit pages | `officialTest.notes` |
| r/Omaha | "Car Insurance and POP" | 2025 | A parent was told by an insurer that a POP is "technically a permit, not a license" and their 16-year-old need not be added as a driver | POP is indeed a permit expiring on the 18th birthday (60-4,120.01), but this is an insurance-underwriting claim, not a rule. No question built on it | - |
| r/lincoln | "Drivers test" / "I failed my driving test any tips?" | 2024-2025 | Repeated drive-test failures for not signaling out of a parking space, rolling a stop, changing lanes in an intersection, and crossing a double yellow on the way back into the DMV lot | Manual 4E-3 ("DO NOT change lanes in an intersection"), 3C-1, 3B-3 | `ne_s2_24`, `ne_s1_19` |
| r/Omaha | "horizontal learners permits?" | 2026 | Commenters discussed under-21 documents being portrait rather than landscape | **Not verifiable in any official source read.** The manual and the DMV pages describe the expiry rule but say nothing about card orientation. A question drafted on this was **replaced** with one on the under-21 expiry, which is in the manual at 1L | `ne_s6_27` (rewritten) |

**The honest limitation.** Nebraska's forums are dominated by the DRIVE test,
not the knowledge test. Threads about the written exam are thin and mostly
procedural ("can I walk in", "how many tries"). The strongest single signal
about written-test content came from one 2025 r/Omaha comment, and it is
corroborated by the state's own practice exam, whose 39 items skew heavily to
alcohol, restraints and permit rules. Where the forums and the official
sources disagreed - the "three tries" claim and the card-orientation claim -
the official source won and the confusion became the trap.

### Two official sources that beat any forum

- **The manual's own practice exam** (printed pages 76-77), provided by AAA
  Nebraska and the Cornhusker Motor Club Foundation with the DMV's
  cooperation, printed with a full answer key and a page reference on every
  item. Its choices are a direct statement of what the state thinks is worth
  testing, and several are quoted in `excerpts.ts` (`practice-four-way-stop`,
  `practice-solid-yellow`, `practice-white-lines`, `practice-hand-signal-left`,
  `practice-flagpersons`, `practice-airbag-risk`, `practice-bac-by-age`,
  `practice-ped-green-light`, `practice-motorcycle-position`,
  `practice-bicycle-merge`, `practice-no-speeding-passing`).
- **The DMV's online practice test** at nebraska.gov/dmv/practice, which every
  local thread points newcomers to.

---

## 7. Local gotchas

1. **The PDF's broken font.** A learner reading the official manual on screen
   will see "traf4c", "of4ce", "4ne" and "ashing" and may assume their reader
   is broken. It is the file. It matters because it makes the parking-distance
   list on page 57 unreadable, and those distances are testable.
2. **Business is lower than residential.** 20 mph in a business district, 25 in
   a residential one. Almost everyone guesses the other way round.
3. **75 mph is not 75 mph in Omaha.** The manual says "75 MPH on rural
   interstate highways"; 60-6,186(1)(i) sets 65 for the Interstate in Douglas
   County, I-180 in Lancaster County and I-129 in Dakota County.
4. **Median, not center line.** The only school-bus exception the manual gives
   is oncoming traffic on a roadway divided by a MEDIAN. Four lanes of paint is
   not a median. The statute's penalty - Class IV misdemeanor, $500, points -
   is not in the manual at all.
5. **Uphill with a curb turns the wheels AWAY.** Every other parking situation
   turns them toward the curb, and the statute has no hill exception. This is
   on the DMV's own practice exam.
6. **The texting ban is secondary for adults and absolute for permit
   holders.** An officer cannot stop an adult for it alone; a permit holder may
   not use any type of interactive wireless communication device at all.
7. **Move Over is two statutes.** The manual describes only the
   controlled-access one.

---

## 8. Verification

Run 2026-09-06 against the tree as it stands.

```
npx tsx scripts/extract-quotes.mjs nebraska
tmp/nebraska-quotes.json: 400 quotes

python scripts/verify-excerpts.py nebraska tmp/nebraska-handbook.pdf \
    tmp/ne-dle-policies.pdf tmp/nebraska-statutes.txt tmp/nebraska-dmv-web.txt
nebraska: 400/400 quotes verified verbatim against 4 source(s)

python scripts/build-excerpt-snippets.py nebraska tmp/nebraska-handbook.pdf
nebraska: 298 snippets rendered, 7 not located, 95 skipped as not in this document

npx tsx scripts/validate-driving.mjs --only nebraska
  snippets: 298 in manifest, 298/400 excerpts covered (75%)
  quotes verified: 400/400 verbatim against nebraska-handbook.pdf,
    ne-dle-policies.pdf, nebraska-statutes.txt, nebraska-dmv-web.txt
  excerpts: 400 (225 unused), questions wired: 193/195 (99%)
  questions: 195
  answer positions: A:25% B:25% C:26% D:24%
  context: 100%  source links: 100%  starred: 21%
  topics: rules:26 licensing:23 safety:23 sharing:18 signs:17 signals:15
          speed:15 impairment:15 parking:15 rightOfWay:14 emergencies:14
ERRORS: 0   WARNINGS: 0

npx tsc --noEmit -p .
no nebraska errors
```

The 95 "skipped as not in this document" are the statute, examiner-manual and
DMV web quotes, which are correctly absent from the Driver's Manual PDF. The 7
"not located" are handbook quotes that cross a column or page break, so the
loose locator could not fix a single rectangle for them; all 7 are verified
verbatim by `verify-excerpts.py`.

Three PNGs were opened and checked by eye (`shape-octagon`, `bus-must-stop`,
`right-turn-on-red`): the highlight lands on the quoted passage and no crop
cuts the first letter off a line.

225 of the 400 excerpts are not referenced by a question. They were kept rather
than deleted: each is verified official wording that a learner reading around a
rule will want, and the playbook's rule for deletion (no question references it
AND another excerpt already covers the same rule) is satisfied for very few of
them.
