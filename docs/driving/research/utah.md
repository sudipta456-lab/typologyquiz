# Utah - research note

Bank: `src/lib/driving/utah/`. Slug `utah`, code `UT`, license covered: the
Utah learner permit. `contentDate` 2026-09-06, `handbookEdition` "2026-2027".

## 1. Sources read

| Source | Publisher | Edition label | URL | Fetched | How |
|---|---|---|---|---|---|
| Utah Driver Handbook | Driver License Division, Utah Department of Public Safety | Cover reads "Driver Handbook 2026-2027". No revision code anywhere in the book; the PDF's own metadata is dated 11 May 2026 and page 4 lists the laws effective 6 May 2026. | https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf | 2026-09-06 | Direct download, 115 PDF pages, 104 printed pages. Saved to `tmp/utah-handbook.pdf`. |
| Utah Code Title 41 Chapter 6a (Traffic Code), 29 sections | Utah State Legislature | Each section carries its own amendment line; the newest read here is 41-6a-804, amended by Chapter 405 of the 2026 General Session | https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S601.html and siblings | 2026-09-06 | Direct, but the section text is injected by JavaScript, so `curl` returns only the site chrome. Rendered with headless Chromium and saved to `tmp/utah-statute.txt`. |
| Learner Permit | Driver License Division | undated web page | https://dld.utah.gov/learner-permit/ | 2026-09-06 | Direct |
| Teen Driver Restrictions | Driver License Division | undated web page | https://dld.utah.gov/teen-driver-restrictions/ | 2026-09-06 | Direct |
| Traffic Safety and Trends Exam | Driver License Division | undated web page | https://dld.utah.gov/traffic-safety-and-trends-exam/ | 2026-09-06 | Direct |
| Written Knowledge Practice Test | Driver License Division | undated web page | https://dld.utah.gov/practice-test/ | 2026-09-06 | Direct |
| Utah Points System | Driver License Division | undated web page | https://dld.utah.gov/points-system/ | 2026-09-06 | Direct |

The five web pages were saved as visible text to `tmp/utah-dld-pages.txt`, which
is what `verify-excerpts.py` checks the web quotes against.

Two dead ends worth recording so nobody repeats them:

- `https://dld.utah.gov/wp-content/uploads/sites/28/2024/05/Utah-Driver-Handbook.pdf`
  and `https://dld.utah.gov/driver-handbook/` both 404. The handbook is linked
  only from the Resources page.
- A web search surfaced `Driver-Handbook-REV-3.2026.pdf`, which also 404s. The
  live file is `Driver-Handbook-2026.pdf`, linked from
  https://dld.utah.gov/resources/. Both were downloaded and compared before the
  live one was used.

`officialHosts` in `index.ts` is `["dld.utah.gov", "utah.gov", "le.utah.gov"]`.

## 2. Test format

| Item | Value | Source |
|---|---|---|
| Questions | 50 | Learner Permit page ("Required to pass a 50-question closed-book test") |
| Pass mark | 80 percent, so 40 of 50 | Handbook Section 6.A, page 23 |
| Open or closed book | Closed | Learner Permit page |
| Time limit | None. The handbook says it "generally takes 30 to 45 minutes" | Handbook Section 6.A, page 23 |
| Early stop rule | None stated in any official source | - |
| Attempts | Two written tests per day if the office can facilitate; one fee covers three attempts within 12 months, after which another fee buys three more. A return visit after a failure needs a written retest appointment. | Handbook Section 6.A, page 23 |
| Minimum age | 15 for the permit; 16 for a Division skills test; 15 for a skills test with a third-party tester or high school | Learner Permit page; Handbook Section 6.C, page 23 |
| Score validity | 18 months for an entry-level permit; 12 months for a renewal permit. Renewing or letting the permit expire means retaking the test. | Handbook Section 3.B, page 7 |
| Fee | Learner permit $19.00 | Handbook Section 3.C, page 9 |
| Where taken | A Driver License Division office, by appointment | Handbook Section 4.C, page 12 |
| Second exam | Traffic Safety and Trends Exam: online only, four videos and 40 questions in four sections of ten, 100 percent required, unlimited retakes, permit number needed to register, must be passed before a permanent license is issued | Traffic Safety and Trends Exam page; Handbook Section 6.B, page 23 |
| Official practice test | 30 questions, free, on the Division's own site, described as a format sample rather than the real bank | Written Knowledge Practice Test page |

`officialTest` in `index.ts` records 50 / 40 / "40 of 50 (80%)" with no
`timeLimitMinutes`, and the five notes carry the closed-book point, the attempt
limits, the Traffic Safety and Trends Exam, the 18-month validity and the
official practice test.

## 3. Section and page map

Printed page numbers, from the handbook's own table of contents on printed pages
i to iv (PDF pages 8 to 10). **Printed page N is PDF page N + 10**, which is what
every `#page=` anchor in `excerpts.ts` and every `sourceUrl` uses.

| Section | Printed pages |
|---|---|
| 1. Definitions | 1 |
| 2. Licensing Requirements (A Residents, B Driver License Compact) | 4-5 |
| 3. Driver Education and Permits (A Driver Education, B Learner Permit, C Fees) | 6-9 |
| 4. License Types, ID Card, Required Documentation (A-I) | 10-19 |
| 5. Vision and Health (A Health Conditions, B Medical Forms, C Review Examination) | 20-22 |
| 6. Examinations (A Written Knowledge Test, B Traffic Safety and Trends Exam, C Driving Skills Test) | 23-26 |
| 7. Preparing Your Vehicle (A Seat, B Mirrors, C Safety Belts, D Car Seats, E Air Bags) | 27-29 |
| 8. Basic Driving (A Starting, B Backing, C Lane Changes, D Parking, E Passing, F Signaling, G Steering, H Stopping, I Turns) | 30-38 |
| 9. Rules of the Road (A Flex Lanes, B Freeway Driving, C Intersections, D Pavement Markings, E Speed, F Roundabouts, G Traffic Controls, H Traffic Signals, I Traffic Signs, J Yielding Right-of-Way) | 39-50 |
| 10. Alcohol/Drugs and Driving (A-H) | 51-55 |
| 11. Distractions and Driving Challenges (A-O) | 56-64 |
| 12. Crashes and Insurance (A-E) | 65-69 |
| 13. Suspensions and Your Record (A-F) | 70-73 |
| 14. Sharing the Road (A Bicycles, B Emergency Vehicles, C Large Trucks, D Mobility Vehicles, E Motor-Assisted Scooters, F Motorcycles, G Pedestrians, H Pedestrian Vehicles, I Police/Traffic Stops, J Slow Moving Vehicles, K Street Legal All-Terrain, L Trains and Railroad Crossings) | 74-89 |
| 15. Vehicle Equipment | 90-92 |
| 16. Towing | 93-94 |
| Appendix A Optional Information | 95-96 |
| Appendix B Identity Fraud and Detection | 97 |
| Appendix C Vehicle Registration | 98 |
| Appendix D Your Car and Clean Air | 99-101 |
| Sample Test Questions | 102 |
| Driver License Field Offices | 103 |

The handbook's own sample questions are on printed page 102. They were read to
calibrate the style of the real exam - true/false and three-option multiple
choice, drawn one or two per section - and no question in this bank is derived
from them.

## 4. What the handbook does not say

| Number the test expects | Where the handbook stops | Section that supplies it |
|---|---|---|
| How many questions are on the written test | Gives the 80 percent pass mark and the 30-to-45-minute estimate, never the length | Learner Permit page: 50, closed book |
| The statutory speed where nothing is posted | Prints 20 / 25 / 55 / 65-80 as a list of "permitted" speeds without saying they apply in the absence of a sign | 41-6a-601(2): 20 in a reduced speed school zone, 25 in any urban district, 55 in other locations |
| That the two-second following rule is law | Presents it as a safe driving tip | 41-6a-711(2)(b), with the exception for funeral processions and traffic already below 35 mph in (3)(a) |
| Signaling as a legal duty and its exact terms | "Signals are required: for two seconds before turning" | 41-6a-804(1)(c): continuously for at least the last two seconds before the movement begins |
| The roundabout signaling exemption | Silent. Page 4 lists HB 128 as a 2026 law removing the requirement, and the rules chapter was never updated | 41-6a-804(5), amended by Chapter 405, 2026 General Session |
| Which road users the three-foot passing rule protects | Says "any bicyclist or vulnerable user of the highway", and defines vulnerable user in Section 14 | 41-6a-706.5(1), re-enacted by Chapter 334, 2026 General Session |
| That the 90-second dead-red allowance is an affirmative defense, not a right | States it as a note under motorcycles | 41-6a-305(7) |
| The minimum-speed offense | Says a peace officer may cite you for impeding traffic | 41-6a-605, including the side-by-side evidence rule in (2) |
| Where exactly to stop at a stop sign | Says stop behind the stop line, crosswalk or sign, whichever comes first | 41-6a-902(2)(a), which adds the "point nearest the intersecting roadway where the operator has a view" fallback |
| The minimum penalty for passing a stopped school bus | "Fines can run up to $3000" | 41-6a-1302(6)(a): minimum $1,000 and 10 hours of compensatory service for a first offense |
| When a school bus must switch on its amber lights | Not stated | 41-6a-1301(3): at least 100 feet and not more than 500 feet before the stop |
| Parking distances as enacted | Prints the full list, and it matches | 41-6a-1401 confirms 15 ft hydrant, 20 ft crosswalk, 20 ft / 75 ft fire station, 30 ft sign or signal, 50 ft rail |
| The 200-foot return after passing | Prints it, worded loosely as "no less than 200 feet from oncoming vehicles" | 41-6a-706(2)(b): before coming within 200 feet of any vehicle approaching from the opposite direction |
| Passenger and night restrictions AFTER licensing | The youthful-driver table on page 8 covers permit holders and the licensed 16-year-old case in a cell that is hard to read once the PDF's text is extracted | Teen Driver Restrictions page: midnight to 5 am, and no non-immediate-family passengers for six months or until 18 |

## 5. Conflicts, and how each was resolved

1. **Left turn on red.** The handbook (page 46) offers the one-way-to-one-way
   left turn only as an escape from a red ARROW that will not change. Section
   41-6a-305(4)(c)(i)(A) allows the same movement from any steady circular red
   after a stop. The statute is broader. Both readings agree on the stranded
   red-arrow case, so `ut_s3_22` and `ut_s5_08` are built on that scenario and
   both give the same answer under either source. Neither source permits a left
   on red from a two-way street, and both questions say so.

2. **Point schedule.** The handbook's table on page 72 prints "Speeding
   (depending on severity) 35-75" and omits careless driving, negligent
   collision and impeding traffic. The Points System web page splits speeding
   into 35 / 55 / 75 and adds careless driving 50, negligent collision 50 and
   impeding traffic 50. The web page is the more recent and more complete of the
   two. `ut_s5_18` is built only on the entries where the two agree (red light
   50, stop sign 50, failure to yield 60, following too closely 60, reckless 80,
   other moving violations 40), and the context note gives the speeding figure
   as the range both sources support.

3. **Class 2 electric-assisted bicycle.** The handbook (page 76) defines a Class
   2 e-bike as one whose motor "is not capable of providing assistance when the
   bicycle reaches the speed of 28 MPH", where the standard three-class model
   and Utah's own Class 1 definition use 20 mph for a throttle-driven machine.
   This looks like an error in the book. No question in the bank asks about
   Class 2; `ut_s4_06` asks only about the age limits and the Class 1 and Class
   3 speeds, which are internally consistent.

4. **DUI pleas held in abeyance.** The handbook (page 52) describes what happens
   when a court holds a guilty or no-contest DUI plea in abeyance: it stays off
   the ordinary record, disqualifies a CDL privilege, and counts as a prior
   offense afterwards. Section 41-6a-502(7), as amended by Chapter 197 of the
   2024 General Session, now says a guilty or no contest plea to that offense
   may not be held in abeyance at all. The statute wins, and the handbook is
   describing a mechanism the law has closed. A draft question on the handbook's
   version was written and then **removed** rather than shipped, because there
   is no scenario in which the two readings agree. `ut_s3_18` now tests the
   Extreme DUI definition instead, which appears in the handbook and nowhere
   conflicts with the Code.

5. **Which 2026 bill changed the roundabout rule.** The handbook's 2026 laws
   page (page 4) credits House Bill 128 with removing the requirement to signal
   when navigating a roundabout, effective 6 May 2026. The Legislature's copy of
   41-6a-804 carries the new subsection (5) and an amendment line naming Chapter
   405 of the 2026 General Session. Whether Chapter 405 is HB 128 or a later
   bill touching the same section is not something either source states, so
   `ut_s5_09` and `ut_s3_12` assert only what each source says: the statute now
   contains the exemption, and the handbook credits HB 128 with it.

6. **Liability limits.** Not used. The handbook's insurance chapter describes
   coverage types without printing dollar limits, so nothing was built on them.

7. **Handbook wording preserved verbatim.** Two of the handbook's own slips are
   quoted as they stand rather than corrected: page 36's "is only required for
   the vehicle's in both lanes behind the school bus", and page 82's "Rules for
   motorcycles, e-bikes, mopes, scooters vary from city to city". The book also
   sets much of its body text with discretionary hyphens, so extracted text
   contains "infor mation", "vehic ular", "corre sponds", "com mits" and similar.
   Those are the source's line breaks and are left alone.

## 6. What learners report

Fetched with `python scripts/fetch-reddit.py utah utah:"permit test"
SaltLakeCity:"permit test" DMV:"Utah knowledge test" newdrivers:"Utah permit"
utah:"drivers test failed" utah:"written test" driving:"Utah knowledge test"
Teenagers:"Utah permit test"`, which saved 23 threads to `tmp/utah-reddit-*.txt`.
Nine of those are Utah-specific; the rest were returned by the cross-state subs
and concern California, and were not used. **Paraphrases only below; no comment
text is reproduced anywhere in the bank, and no recalled exam item was turned
into a question.**

| Sub | Thread title | Year | Paraphrase of the claim | Shaped |
|---|---|---|---|---|
| r/SaltLakeCity | License Transfer - Written Test? | 2026 | Several replies agree that the transfer test is open book and roughly 25 to 30 questions, and one says a licensed driver moving in needs no skills test. | ut_s5_01 |
| r/SaltLakeCity | Driving skills test when moving to Utah | 2021 | The original poster quotes the department's own site describing a 25-question open-book test for an existing license holder, and a reply confirms taking exactly that with no skills test. | ut_s5_01 |
| r/SaltLakeCity | Anyone familiar with the driver's license test here in UT? | 2019 | Two replies describe the written test as open book and advise against studying. | ut_s5_01 |
| r/SaltLakeCity | Driving skills test when moving to Utah | 2021 | One reply says the only thing they had to look up was a Utah-specific point about what speed applies when no limit is posted. | ut_s5_12, ut_s2_08 |
| r/Utah | Tips to passing driving permit test? | 2025 | The accepted advice is to run the Division's own practice test repeatedly and not to sit the real one until scoring in the nineties; the poster returned to say the real questions matched that style. Another reply says to practice all the turn types because a three-point turn came up unprepared. | index.ts note on the practice test; ut_s4_15 |
| r/DMV | Utah test | 2025 | The poster complains that several Utah items turn on a definition rather than on driving, singling out what "withdrawal of a driving privilege" means; replies argue over the everyday versus the handbook meaning of "withdrawal". | ut_s3_05, ut_s5_03 |
| r/Utah | Questions about UT Driving Test | 2022 | A long reply from a recent test-taker lists what was scored: signaling before and after every parking maneuver, signals on all three legs of a three-point turn, visible head checks about once a block, push-pull steering, and parallel parking between cones rather than cars. Another says points were deducted for relying on a reversing camera instead of looking over the shoulder. | ut_s5_13, ut_s5_21, ut_s2_13, ut_s4_02 |
| r/SaltLakeCity | What skills are tested on the road test? | 2025 | The poster asks whether a backup camera may be used; replies stress constant mirror use and pausing after signaling before changing lanes, and one says the only deduction they received was for insufficient rearview mirror use. | ut_s5_21, ut_s2_02 |
| r/SaltLakeCity | Anyone familiar with the driver's license test here in UT? | 2019 | Two replies say third-party testers watch particularly for head checks when turning or pulling over, and one reports failing for not checking the blind spot on a right turn. | ut_s5_21 |
| r/SaltLakeCity | Driving question | 2024 | A thread about local driving standards; several people describe drivers refusing to allow a zipper merge. | ut_s2_09 |

Where a thread contradicted the official source, the official source won and the
confusion became the trap. The open-book claim is the clearest case: it is true
of the exam an already-licensed out-of-state driver sits, and false of the
first-time learner permit test, which the Division's own Learner Permit page
calls a 50-question closed-book test. `ut_s5_01` tests the official rule and its
trap note names the misconception.

The Division's own practice test (30 questions,
https://dld.utah.gov/practice-test/) and the handbook's own sample questions
(printed page 102) were both read for style calibration. Neither supplied a
question.

## 7. Local gotchas

The five in `index.ts`, and why each catches people:

1. **Two-second following distance.** Utah teaches two seconds where Wisconsin
   teaches four and most states teach three, and it repeats the same two seconds
   for the freeway and for following a motorcycle. Learners who studied a
   neighboring state's book answer three.
2. **0.05 BAC.** Utah has been at 0.05 since December 2018 and is still the only
   state there. Every film, statistic and generic study guide says 0.08.
3. **Two-second signals, and none in a roundabout.** Utah times signals rather
   than measuring them in feet, and since 6 May 2026 requires no signal at all
   entering or leaving a roundabout - a change the handbook's rules chapter has
   not absorbed.
4. **The school-bus matrix.** Four lanes with no median and five lanes with a
   shared center turn lane sound alike and give opposite answers. The trigger is
   the median or the fifth lane, not the lane count alone.
5. **The Traffic Safety and Trends Exam.** A second, separate, online exam that
   demands 100 percent and blocks the permanent license. Nothing in the permit
   process advertises it until you have a permit number.

## 8. Verification

Run 2026-09-06 against `src/lib/driving/utah/` at 341 excerpts and 195 questions.
The 341 break down as 273 from the handbook, 55 from Title 41 Chapter 6a and 13
from the five Division web pages.

```
$ npx tsx scripts/extract-quotes.mjs utah
tmp/utah-quotes.json: 341 quotes

$ python scripts/verify-excerpts.py utah tmp/utah-handbook.pdf tmp/utah-statute.txt tmp/utah-dld-pages.txt
utah: 341/341 quotes verified verbatim against 3 source(s)

$ python scripts/build-excerpt-snippets.py utah tmp/utah-handbook.pdf
utah: 263 snippets rendered, 78 not located
```

The 78 not located are statute and web-page quotes, which are not in the
handbook PDF and cannot be cropped from it. Of the 273 handbook quotes, 256
rendered, which is 94 percent.

The other seven of the 263 were **false positives and were deleted**. The
snippet builder falls back to the first twelve, then the first six, words of a
quote when the whole thing will not match, which is right for a quote that
crosses a column break and wrong for a statute quote whose opening clause also
appears somewhere in the handbook. `uca-seat-belt-driver` cropped the handbook's
cover page and highlighted the words "the operator of a motor vehicle" out of a
sentence about bicycles. All seven (`uca-basic-speed`, `uca-minimum-speed`,
`uca-parking-hydrant-crosswalk`, `uca-parking-prohibited`,
`uca-parking-railroad-50`, `uca-school-bus-red`, `uca-seat-belt-driver`) were
removed from `snippets.json` and their PNGs deleted, leaving a manifest of 256
that contains handbook quotes only. Anyone re-running the pipeline needs to redo
that prune, or the seven come back.

Three PNGs were opened and checked by eye (`school-bus-stop`, `two-second-rule`,
`bac-005`), plus `left-turn-three-indications` after the second pass: tight
crops, full lines, no clipped first letters.

Every quote was extracted mechanically from the same normalized text stream the
verifier reads - `tmp/ut_build_excerpts.py` takes an opening and a closing phrase
per excerpt and lifts the substring between them - so no quote could drift
through retyping.

```
$ npx tsx scripts/validate-driving.mjs --only utah
=== Utah (UT) - 6 sets ===
  snippets: 256 in manifest, 256/341 excerpts covered (75%)
  quotes verified: 341/341 verbatim against utah-handbook.pdf, utah-statute.txt, utah-dld-pages.txt
  excerpts: 341 (165 unused), questions wired: 195/195 (100%), quoted total: 54.7k chars
  questions: 195
  answer positions: A:25% B:25% C:25% D:25%
  context: 100%  source links: 100%  starred: 14%
  topics: rules:25 sharing:19 licensing:19 safety:19 signs:17 parking:17 signals:16 speed:16 impairment:16 emergencies:16 rightOfWay:15
ERRORS: 0   WARNINGS: 0

$ npx tsc --noEmit -p .
(exit 0, no errors anywhere)
```

Zero warnings, so there is nothing in this section to explain away. The 165
unused excerpts are deliberate: they are verified official wording that no
question happens to key off yet, and the playbook says more of that is a better
bank rather than a worse one. Nothing was deleted to reach a number.

Every question's `sourceUrl` page anchor was cross-checked against the page
anchor of the excerpt it cites (`tmp/ut_pagecheck.py`), because the excerpt
pages are derived from the extraction and the question links were typed. That
found seven mismatches, all since fixed - one was a genuinely wrong page
(`ut_s4_01` linked printed page 20, Vision and Health, for a question about
license classes on printed page 10) and six were questions pointing at a
neighboring excerpt rather than the passage they test.

Answer positions across the whole bank: A 49, B 49, C 49, D 48 - 25 percent
each. Every set is between 8 and 10 out of 30 or 35 on its heaviest letter.
Coverage: 100 percent of questions carry a resolving `excerptKey`, 100 percent
carry a `context` block, a `trap` and a `sourceUrl`, and 28 of 195 (14 percent)
are marked `commonlyMissed`. All eleven `DrivingTopic` values are used; the
heaviest topic in any one set is 7 of 30.
