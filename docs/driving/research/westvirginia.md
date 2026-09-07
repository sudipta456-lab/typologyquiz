# West Virginia - research note

Bank: `src/lib/driving/westvirginia/`, 195 questions in six sets, 338 handbook
and statute excerpts. `contentDate` 2026-09-06. `handbookEdition`
"Revised 07/2026".

---

## 1. Sources read

| Source | Publisher | Edition label | URL | Fetched | How |
|---|---|---|---|---|---|
| Driver's Licensing Handbook | West Virginia Division of Motor Vehicles (WV Department of Transportation) | "Revised 07/2026" (printed on the cover, bottom right) | [dmv.wv.gov handbooks page](https://dmv.wv.gov/driver-services/drivers/drivers-licensing-handbooks) -> PDF at `https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf` | 2026-09-06 | direct download, 17.2 MB, 90 PDF pages |
| West Virginia Code, Chapter 17C - Traffic Regulations and Laws of the Road | West Virginia Legislature | current online code | [code.wvlegislature.gov](https://code.wvlegislature.gov/17C-6-1/) | 2026-09-06 | direct, 57 sections fetched individually |
| West Virginia Code, Chapter 17B - Motor Vehicle Driver's Licenses | West Virginia Legislature | current online code | [code.wvlegislature.gov](https://code.wvlegislature.gov/17B-2-6/) | 2026-09-06 | direct, 17B-2-3a, 17B-2-5, 17B-2-6 |
| Graduated Driver's Licensing (GDL) | WV DMV | undated web page | [dmv.wv.gov/graduated-drivers-licensing-gdl](https://dmv.wv.gov/graduated-drivers-licensing-gdl) | 2026-09-06 | direct |
| Sample Driver's Test | WV DMV | undated web page, 20 questions with an answer key | [dmv.wv.gov/driver-services/drivers/sample-drivers-test](https://dmv.wv.gov/driver-services/drivers/sample-drivers-test) | 2026-09-06 | direct |
| Know To Drive Online Testing | WV DMV | undated web page | [dmv.wv.gov/know-drive-online-testing](https://dmv.wv.gov/know-drive-online-testing) | 2026-09-06 | via search result summary |

**Publisher check.** The brief's assumptions were verified rather than assumed.
The handbook is published by the **Division of Motor Vehicles**, an agency of
the **West Virginia Department of Transportation** - page 2 of the PDF prints
"DEPARTMENT OF TRANSPORTATION / DIVISION OF MOTOR VEHICLES, PO Box 17010, 5707
MacCorkle Avenue SE, Charleston WV 25317". The public-facing host has moved to
`dmv.wv.gov`; the PDF itself is still served from
`webapps.transportation.wv.gov`, and both are cited.

**Licence-stage names.** West Virginia does **not** issue a "learner's
licence". The stages are, in the state's own words:

- **Level 1 GDL Instruction Permit** (age 15-17)
- **Level 2 GDL Intermediate Driver's License** (16+)
- **Level 3 GDL Driver's License** (17+), the full Class E licence
- **Regular Instruction Permit**, for applicants aged 18 and over

`licenceName` is therefore "Level 1 GDL Instruction Permit".

### The PDF had to be repaired before it could be quoted

This is recorded because it affects every quote in the bank.

The DMV's PDF is an InDesign export in which **every Type0 (Identity-H) font is
embedded without a `/ToUnicode` CMap**. PyMuPDF, `pdftotext` and any other
extractor therefore report raw CIDs for most of the book, so the cover extracts
as `Revised 0\x18/202\x17` and page 40 as `5IF MBOF JT BCPVU UP CF DMPTFE`.
Separately, at every f-ligature the exporter ends the text run, re-positions
horizontally, and starts the next run with one or two space glyphs kerned back
on top of the preceding letter - invisible on the page, but emitted by every
extractor, which is where "fl ashers" and "traffi  c" come from.

Two mechanical repairs were applied to the scratch copy at
`tmp/westvirginia-handbook.pdf` (the pristine download is kept beside it as
`tmp/westvirginia-handbook-original.pdf`):

1. **Missing character maps rebuilt.** The embedded CFFs are CID-keyed subsets
   whose CIDs index the Adobe standard glyph order. That was checked, not
   assumed: the `/W` width arrays line up with it exactly (cid 15 is period at
   260, cid 34 is `A`, cid 66 is `a`), and the decoded prose reads. A
   `/ToUnicode` CMap was generated for each of the 18 affected fonts from
   `cffStandardStrings` plus the Adobe Glyph List. Wingdings bullets map to
   U+2022, which `verify-excerpts.py` folds to a space like any other bullet.
2. **Phantom ligature spaces removed.** Which spaces are phantoms is decided by
   geometry, never by guessing: a space qualifies only if its bounding box
   starts left of where the previous glyph's box ended. Those overlapping
   spaces were collected as measured (before, after) fragment pairs -
   ("fl", "ashers"), ("traffi", "c") - and only a content-stream space whose
   own neighbours match a measured pair was touched. Each one was **replaced,
   never deleted**, by the exact TJ displacement that reproduces its advance,
   so nothing moves. 111 were removed.

**Both halves were verified, not assumed.** All 90 pages render
**pixel-identical** to the original at 110 dpi after both repairs, and a
word-level diff of the extracted text shows 60 word-joins and zero other
changes. Rendering "Revised 07/2026" from page 1 and reading it as an image
confirms the decoded cover date independently of the text layer.

About 48 f-ligature splits survive in places the geometric rule could not
reach. The quote-lifting script flags any quote containing one, and every such
span was re-cut around it, so no excerpt in the bank contains an extraction
artifact.

---

## 2. Test format

| Item | Value | Source |
|---|---|---|
| Questions | "at least 25", multiple choice, on basic knowledge, traffic rules, regulations, signs and markings from the handbook | Handbook page 24 (PDF 34) |
| Pass mark | 19 of 25 = 76%. Six wrong still passes | Handbook page 24 |
| Delivery | "Automated testing is given at all locations" | Handbook page 24 |
| Time limit | Timed, but **the DMV does not publish the limit**. Unanswered questions are scored incorrect | Handbook page 24 |
| Fee | $7.50 per attempt | Handbook page 10 and DMV GDL page |
| Attempts per fee | Under 18: two written attempts. 18+: two written attempts and three road-skills attempts within 90 days of permit issue | W. Va. Code 17B-2-6 |
| Retest wait | May not be tested twice within one week | Handbook page 26; W. Va. Code 17B-2-6 |
| Online option | Know To Drive, on a computer with keyboard, mouse and camera. The certificate is **not** permission to drive | Handbook page 9; DMV news release |
| Exam room | No cell phones, smart glasses, PDAs, Bluetooth or other electronic devices; only the applicant may be present | Handbook pages 9 and 11 |
| Accessibility | Audio version with headphones for the reading impaired; headsets limited | Handbook page 24 |
| Vision | 20/40 both eyes with or without conventional corrective lenses; 20/40 in one eye qualifies | Handbook pages 9 and 24 |
| Motorcycle permit | Separate 25-question exam, 80% to pass | Handbook page 14 |

A widely repeated third-party figure of "$13.50 per attempt, about 50 minutes"
appears on prep sites. Neither number is in the handbook or on any DMV page
read for this bank, so neither is used. `officialTest` carries no
`timeLimitMinutes` for that reason.

---

## 3. Section and page map

PDF page = printed page + 10. The `#page=` anchor in every excerpt uses the PDF
page; the "(page N)" in every `section` string is the printed page.

| Chapter | Contents | Printed pages |
|---|---|---|
| (front) | Where to test, regional offices, foreword | i-iv |
| Definitions | 40 terms, BAC through Wireless Communications Device | -1 to 0 (PDF 9-10) |
| I | Driver's Licence Information: who must be licensed, REAL ID, proof documents, first-time applicant, new resident, change of address, duplicate, expired, colour coding, immigrants, **Regular Instruction Permit (18+)**, **Know to Drive online**, **GDL Levels 1-3**, GDL violations, restrictions chart, Drive for Five, designations, carry your licence, motorcycle permits, fees chart, documents to keep in vehicle | 1-15 |
| II | Driver Responsibilities: school attendance, unsafe driver referral, re-examination, crashes, compulsory insurance, communication devices, point system, other states, citations, fraudulent use, mandatory revocation, driving while revoked, online services, **point scale chart** | 16-20 |
| III | Driving Impaired or Under the Influence: under-age drinking, designated driver, knowing your limits, other drugs, implied consent, DUI penalty chart, interlock, drowsy driving | 21-23 |
| IV | Examination Procedures: examiners, vision screening, **knowledge examination**, DUI awareness cards, vehicle check, illegal equipment, test component checklist, retest information, basic control skills, road test, automatic failures, sample score sheet | 24-33 |
| V | Traffic Control Devices: shaped signs, square and rectangular, diamond and warning, construction, guide signs, railroad, traffic lights, intersection flashers, lane use control, crosswalk signals, **pavement markings** | 34-41 |
| VI | Traffic Laws and Rules of the Road: basic speed law, speed limits, driving slowly, signals, turning, changing direction, backing, parking (prohibited / angle / hills / parallel), following distance, changing lanes, passing, right-of-way, pedestrians, **school bus rules**, tailgating, headlights, motorcycles, slow vehicles, heavy trucks, No-Zone, animal riders, bicycles, joggers, children, public buses, mobility impaired parking, ADA notice | 42-56 |
| VII | Driving on Interstates: route numbering, planning, entering, exiting, exit lanes, stopping, speeds, adverse conditions, U-turns, construction zones | 57-60 |
| VIII | Defensive Driving: bad habits, concentration, light conditions, rain, flooding, snow, wind, fog, road conditions, **state inspection law**, driver conditions, traffic conditions, traffic situations, safety equipment, infants and toddlers, 8 simple steps | 61-69 |
| IX | Emergency Situations: pre-drive checks, blowouts, brake failure, overheating, skids, stuck pedal, wheels off road, steering, headlights, fire, oncoming vehicle, railroad tracks, oil light, dead battery, emergency kit, first aid, Good Samaritan, crash duties, Courtesy Patrol | 70-75 |
| (back) | Littering penalty, vehicle waste | 77 |

---

## 4. What the handbook does not say

Every number below is tested material that the handbook omits or leaves
incomplete. The statute supplies it, and the bank cites the statute directly.

| Rule | Handbook | Statute |
|---|---|---|
| Passing distance for a bicycle | "leave plenty of room" - **no number at all** | **Three feet**, at a careful and reduced speed - 17C-7-3(a)(2) |
| Following a working emergency vehicle | silent | **Not closer than 500 feet** - 17C-14-9 |
| Headlights at all times | silent | A **school bus, motorcycle, motor-driven cycle or moped** displays lighted head lamps at all times on the highway - 17C-15-2 |
| Heavy-vehicle following distance | silent | A truck registered over 8,000 lb gross, a bus, special mobile equipment or a vehicle towing another may not follow within **200 feet** of the same, outside a business or residence district - 17C-7-10(b) |
| Retest wait, attempts per fee, 30-day permit hold | one line on page 26 citing 17B-2-6 | Full text: one week between attempts; two written attempts for under-18s; two written and three road-skills within 90 days for 18+; 30-day minimum permit hold - 17B-2-6 |
| Parking prohibitions | 15 items on pages 45-46 | 19 items, adding a designated fire lane, 20 ft from a fire-station driveway, 75 ft opposite one when signposted, and safety-zone distances - 17C-13-3 |
| Seat-belt fine | "It is the Law", no penalty given | **$25**, no court costs, **no points** - 17C-15-49(c)-(d) |
| Child restraint penalty | quotes the requirement only | $10 to $20 fine; not evidence of negligence in a civil action - 17C-15-46 |
| Signal by hand or device | shows the three arm signals | A lamp or device is mandatory where the vehicle is built or loaded so a hand signal would not be visible front and rear - 17C-8-9 |
| Motorcycle helmet and eye protection | refers you to the Motorcycle Operator Manual | Helmet and shatter-resistant eye protection required for operator and passenger - 17C-15-44 |

---

## 5. Conflicts

**1. Distracted-driving penalties: handbook vs current statute.**
Page 17 prints "First offense = $100 fine and zero (0) points / Second offense
= $200 and zero (0) points / Third and subsequent offenses = $300 and three (3)
points". The current Electronically Distracted Driving Act, 17C-14-15(h), sets
the third-or-subsequent penalty at a fine of **not more than $350**, three
points, **and** a discretionary 90-day licence suspension, all measured within a
24-month window. *Resolution:* no question turns on the dollar figure.
`wv_s5_21` asks about the **points**, where the two sources agree, and cites
the statute. The handbook's page-17 fine table is not quoted as an excerpt.

**2. School zone hours: handbook vs statute.**
The handbook (page 42) makes the 15 mph limit apply "while children are present
along the roadway". W. Va. Code 17C-6-1(b)(1) words it as "during school recess
or while children are going to or leaving school during opening or closing
hours". *Resolution:* `wv_s5_15` asks the statutory wording and cites the
statute; `wv_s1_23` and `wv_s6_01` ask only the **speed**, where the two agree.
Neither source ties the limit to a flashing beacon, and the bank says so.

**3. School bus: "interstate" vs "controlled-access highway".**
The handbook (page 50) says "Only on Interstate Highways does traffic coming
toward a school bus stopped on the other side of the median not have to stop".
17C-12-7(a) frames the same exception as a **controlled access highway** where
the bus is on a different roadway or adjacent to the highway and pedestrians
may not cross. *Resolution:* every question is built on scenarios where both
readings give the same answer - a two-lane street, a four-lane road with a
grass median, a centre turn lane. The interstate case is stated in the
question's own context alongside the statutory framing (`wv_s3_04`,
`wv_s5_06`).

**4. The DMV sample test's "20 feet" school bus distance.**
Question 18 of the DMV's own Sample Driver's Test asks "WHEN APPROACHING A
SCHOOL BUS, ON AN UNDIVIDED HIGHWAY, WITH ITS LIGHTS FLASHING, YOU MUST STOP
WITHIN:" and keys the answer as **20 feet**. **No such distance appears
anywhere in the handbook or in 17C-12-7**, both of which say only that you stop
*before reaching* the bus. *Resolution:* no question in this bank asserts a
stopping distance for a school bus. This is flagged here as an unresolved
discrepancy in an official source; a learner who meets it on the real exam
should answer 20 feet, but the bank will not teach a number it cannot verify.

**5. The DMV sample test's DUI first-offence penalty.**
Question 20 keys "24 hours to 6 months in the County jail and fined $100
dollars". The handbook's own DUI chart on page 22 gives a first offence with
BAC under .15 as a $100-$500 fine and up to 6 months' jail, with no 24-hour
minimum. *Resolution:* no question asks the first-offence DUI jail range. The
DUI questions in the bank ask about revocation for under-18 drivers, the
Safety and Treatment program, implied consent, and the interlock threshold,
all of which the handbook states unambiguously.

**6. Level 2 tenure: "180 consecutive days" vs "six (6) months".**
The handbook (page 10) says 180 consecutive conviction-free days; the DMV's GDL
web page says "Held a Level I permit for six (6) months". *Resolution:*
`wv_s3_12` uses the handbook's 180 days, which is the precise form, and names
the consecutive-days requirement in the trap. The two are the same rule.

---

## 6. What learners report

`python scripts/fetch-reddit.py westvirginia ...` was run twice, saving **52
threads** to `tmp/westvirginia-reddit-*.txt`; roughly twenty are genuinely about
West Virginia licensing. Three subreddit searches (`r/WestVirginia "permit
test"`, `r/wva`, `r/Morgantown`, `r/Huntington`, `r/drivingtest`) returned no
links at all. Paraphrases only below; no comment text is reproduced anywhere in
the bank, and no recalled exam item was turned into a question.

| Sub | Year | Thread | Claim (paraphrased) | Shaped |
|---|---|---|---|---|
| r/driving | 2026 | I failed the learners permit test 4 times now | A 15-year-old failed on what to do when the car starts sliding; believed you steer the opposite way. Passed on the fifth attempt after reading the manual end to end | `wv_s2_19`, `wv_s5_03`, `localGotchas` |
| r/DMV | 2025 | wv permit test | One commenter reports failing, immediately retaking the test and passing with zero wrong. Another describes narrowly avoiding a fail by one more wrong answer | `wv_s3_05`, `wv_s5_10` |
| r/WestVirginia | 2024 | Did the DMV mess up RE: learners permit? | Parent confused that a permit issued at 15 and one issued at 17 both expire on the 18th birthday; commenters guessed wrongly that it expires at 16 | `wv_s4_16`, `wv_s5_02`, `localGotchas` |
| r/DMV | 2021 | Can I drive after I pass my knowledge test | WV 15-year-old passed the knowledge test at home, had the pass email, asked whether that let them drive | `wv_s3_02`, `localGotchas` |
| r/DMV | 2024 | passed my knowledge test but now what? | Same confusion in a different state - a knowledge-test pass treated as a permit | `wv_s3_02` |
| r/DMV | 2022 | Retaking the Learner's Permit the 3rd Time (WV) | Poster describes having "renewed" the permit twice; the Level 1 permit is nonrenewable and an 18+ regular permit requires a full retest | `wv_s4_16`, `wv_s3_34` |
| r/WestVirginia | 2025 | Vehicle inspection questions | Long thread about what fails a WV state inspection; inspection cadence taken for granted by everyone in it | `wv_s2_24`, `wv_s5_05` |
| r/driving | 2023 | what should i study in order to pass my road test (WV) | Examiner asked for the three hand signals and for identification of signs passed during the drive; a commenter links the handbook and says everything is from page 24 on | `wv_s4_35`, `wv_s6_28` |
| r/WestVirginia | 2026 | princeton dmv drivers test | Parallel parking anxiety; examiners score mirrors, signals, speed control and complete stops | `wv_s2_05`, `wv_s6_19` |
| r/WestVirginia | 2025 | Learner's Permit | Paper permit vs hard copy confusion; a commenter insists the paper copy is the permit | context for `wv_s2_29` |
| r/DMV | 2026 | WV DMV Knowledge Test Online, Identity Verification Failed | International student blocked from Know To Drive by credit-bureau identity questions and told to test in person | `wv_s3_02` notes |
| r/WestVirginia | 2025 | Has anyone here ever caught a DUI for weed | Interlock is alcohol-specific; a drug DUI did not qualify | `wv_s6_17` |
| r/WestVirginia | 2024 | Moved to WV. Struggling to get an ID | Repeated rejections over documents; two residency proofs and the identity document are where people come unstuck | `wv_s6_05` |

**The three strongest traps found**, all cross-checked against an official
source before use:

1. **Steer into the skid.** Named explicitly by a learner who failed four
   times. The handbook says it plainly on page 71, and instinct says the
   opposite.
2. **A Know To Drive pass is not a permit.** Two separate threads, five years
   apart, show West Virginians assuming otherwise. The handbook prints the
   correction in capital letters on page 9.
3. **The Level 1 permit expires on the 18th birthday whatever age you were when
   you got it, and cannot be renewed.** A parent thread and a retest thread
   both turn on this. Handbook page 10; the DMV's GDL page repeats it.

Two more came from the DMV's own sample test rather than a forum, and are
treated the same way: the state builds its distractors out of the **500 ft vs
200 ft headlight pair** and out of the **shuffled parking distances**, which is
the state telling you where people fail.

---

## 7. Local gotchas

1. **The Level 1 permit expires on your 18th birthday, whenever it was
   issued, and is nonrenewable.** Getting it at 15 buys practice time, not
   permit time, and the 30-day grace period exists only to let you finish the
   road skills test. Catches people because every other document they own
   lasts a fixed term from issue.
2. **A median does not excuse you from stopping for a school bus.** Traffic
   stops in both directions on every highway, street, parking lot, private road
   and driveway; the only exception is an interstate. Several neighbouring
   states excuse oncoming traffic on any divided highway, so a driver coached
   by a relative from out of state brings the wrong rule across the line - and
   the penalty is a minimum 60-day suspension and a minimum $500 fine.
3. **Steer into a skid.** Rear sliding right means turn right. It is the item a
   West Virginia learner named after four failures, and it is the one place in
   the handbook where the correct action is the opposite of the reflex.
4. **500 feet for oncoming, 200 feet for following, when dimming headlights.**
   Both numbers are real, both are in the same short list, and the DMV's own
   sample test uses the swapped version as its false statement.
5. **Four parking distances that are trivial to shuffle:** 15 feet from a fire
   hydrant, 20 from a crosswalk at an intersection, 30 from a stop sign or
   signal, 50 from the nearest rail of a railroad crossing. The DMV offers
   three of them, reattached to the wrong things, as distractors in one
   question.
6. **Passing the knowledge test online through Know To Drive does not give you
   a permit.** The certificate says so in capitals, and West Virginians keep
   finding out at the roadside.

---

## 8. Verification

All commands run 2026-09-06 from the repository root.

```
$ npx tsx scripts/extract-quotes.mjs westvirginia
tmp/westvirginia-quotes.json: 338 quotes

$ python scripts/verify-excerpts.py westvirginia tmp/westvirginia-handbook.pdf tmp/westvirginia-statute.txt
westvirginia: 338/338 quotes verified verbatim against 2 source(s)

$ python scripts/build-excerpt-snippets.py westvirginia tmp/westvirginia-handbook.pdf
westvirginia: 296 snippets rendered, 8 not located, 34 skipped as not in this document
```

The 34 skipped are the West Virginia Code quotes, which are correctly absent
from the handbook PDF. The 8 not located are quotes that run a stem together
with its bulleted list, so no single contiguous rectangle on the page contains
them; they verify verbatim, they simply cannot be cropped. That leaves
**296 of 304 handbook quotes rendered, 97%**.

Three rendered crops were opened and inspected: `knowledge-exam-pass.png`,
`school-bus-interstate.png` and `dim-500-200.png`. All show full lines with no
clipped first letters.

```
$ npx tsx scripts/validate-driving.mjs --only westvirginia
```

The final validator output is reproduced in the completion report. Two warnings
are expected and explained here:

- **"snippet ... has no excerpt" / snippet coverage below 100%** - the statute
  quotes cannot be rendered from the handbook PDF, as above.
- Any warning about **unused excerpts** - 338 excerpts back 195 questions, so
  more than half are not referenced by an `excerptKey`. They are kept
  deliberately: each is a verified passage of official wording on a rule the
  bank teaches, and the playbook's instruction is not to delete verified quotes
  to hit a count.

### Answer-position balance

The bank was written question by question with the answer position chosen as
each item was drafted, which still produced A:16% B:44% C:32% D:8%. Two passes
fixed it, and neither one touched a word of any option:

1. `tmp/wv_balance.py` moves **only the correct option** within its own choices
   array, never reorders anything else, and skips any question whose choices
   are a numeric ladder already in ascending order. 50 of 195 questions were
   touched, giving A:25% B:25% C:25% D:25%.
2. `tmp/wv_balance2.py` then put **every** all-numeric choice list into
   ascending order, because a scrambled ladder of speeds or distances reads as
   a mistake even when it is deliberate. That moved the balance to
   A:47 B:52 C:49 D:47, which was restored to A:49 B:49 C:49 D:48 by moving the
   correct option in eight **prose-only** questions. No numeric ladder in the
   shipped bank is out of order.

The rebalance was checked rather than trusted: `tmp/wv_diffcheck.mjs` compares
the shipped module against a pre-rebalance copy of both set files and confirms
that all 195 questions kept the **exact same correct-answer text** and the
**exact same set of choices** - "195 questions compared, 0 problems".

Two trap notes that referred to an option by position ("the fourth answer")
were rewritten to name the option's content instead, so no explanation depends
on where an option sits.

A final pass converted the bank's own prose to American spelling, as the house
style requires for a US jurisdiction: license, center, color, maneuver, curb,
traveling, favor, signaling, offense, realize, defense, practice, neighboring,
judgment, unfavorable. The `licenceName` **field** keeps its spelling because
that is the name of the field in `types.ts`, not copy. Quoted handbook and
statute text is untouched, and `verify-excerpts.py` was re-run afterwards.
