# Iowa - research note

Bank built 2026-09-06. `contentDate: "2026-09-06"`, `handbookEdition: "MM1170, 07/23/2026"`.

## 1. Sources read

| Source | Publisher | Edition label | URL | Fetched | How |
|---|---|---|---|---|---|
| Iowa Driver's License Manual | Iowa Department of Transportation | `MM1170 07/23/2026` (back cover, PDF page 68). There is no other edition label anywhere in the book. | https://iowadot.gov/media/7308/download?inline= | 2026-09-06 | Direct download, 8.6 MB, 68 PDF pages, saved to `tmp/iowa-handbook.pdf` |
| Iowa Code 2026, chapter 321 - Motor Vehicles and Law of the Road | Iowa Legislature | Iowa Code 2026, generated 2025-12-09 | https://www.legis.iowa.gov/docs/code/321.pdf | 2026-09-06 | Direct download |
| Iowa Code 2026, chapter 321J - Operating While Intoxicated | Iowa Legislature | Iowa Code 2026, generated 2025-12-09 | https://www.legis.iowa.gov/docs/code/321J.pdf | 2026-09-06 | Direct download |
| Iowa Administrative Code 761 chapter 604 - License Examination | Iowa Legislature | `IAC 10/1/25`, rules amended by ARC 9578C effective 11/5/25 | https://www.legis.iowa.gov/docs/iac/chapter/761.604.pdf | 2026-09-06 | Direct download |
| Instruction Permit for Under Age 18 | Iowa DOT | undated web page | https://iowadot.gov/drivers-licenses-ids/get-or-renew-drivers-licenses-ids-permits/under-18-permit-license-or-id/instruction-permit-under-age-18 | 2026-09-06 | Direct |
| Intermediate License | Iowa DOT | undated web page | https://iowadot.gov/drivers-licenses-ids/get-or-renew-drivers-licenses-ids-permits/under-18-permit-license-or-id/intermediate-license | 2026-09-06 | Direct |
| Full License | Iowa DOT | undated web page | https://iowadot.gov/drivers-licenses-ids/get-or-renew-drivers-licenses-ids-permits/under-18-permit-license-or-id/full-license | 2026-09-06 | Direct |
| Special Minor's Restricted License | Iowa DOT | undated web page | https://iowadot.gov/drivers-licenses-ids/get-or-renew-drivers-licenses-ids-permits/under-18-permit-license-or-id/special-minors-restricted-license | 2026-09-06 | Direct |
| Online Permit Test (Skip the Trip) | Iowa DOT | undated web page | https://iowadot.gov/drivers-licenses-ids/driver-education/online-permit-test-skip-trip | 2026-09-06 | Direct |
| Prepare for Your Driving Test | Iowa DOT | undated web page | https://iowadot.gov/drivers-licenses-ids/driver-education/manuals-practice-tests/prepare-your-driving-test | 2026-09-06 | Direct |
| Iowa Driver's License Practice Test | Iowa DOT | undated web page | https://iowadot.gov/drivers-licenses-ids/driver-education/manuals-practice-tests/take-practice-test | 2026-09-06 | Direct |

No archive snapshots were needed; every official host answered a direct request.

The three files the verifier reads are `tmp/iowa-handbook.pdf`, `tmp/iowa-statute.txt`
(chapter 321 + chapter 321J + IAC 761-604, concatenated) and `tmp/iowa-dot-pages.txt`
(the seven DOT pages above plus three navigation pages that were read but never
quoted - Driver's License Types Restrictions & Endorsements, Get an Under 18
Driving Permit License or ID, and Manuals & Practice Tests - visible text only).

## 2. Test format

| Item | Value | Where it came from |
|---|---|---|
| Question count | **Not published by the Iowa DOT.** The bank uses 25, which is the length of the DOT's own practice test, described on that page as "randomly chosen from a larger group of sample questions that includes questions from the real knowledge test given at any Iowa driver's license station or county treasurer's office". | Iowa Driver's License Practice Test page |
| Pass mark | 80 percent. "A score of 80% or higher is needed for a passing score." | Iowa Driver's License Practice Test page |
| Who declares the score | The department. "The department reserves the right to revise a test at any time and will declare the minimum passing score for each test." | 761 IAC 604.9(1) |
| Time limit | None published. | - |
| Early-stop rule | None published. | - |
| Score validity | 180 days. | 761 IAC 604.9(3) |
| Retest wait | None fixed. "An applicant who fails a knowledge test may repeat the test at the discretion of the examiner." | 761 IAC 604.9(4) |
| Oral test | Available on request to an applicant who cannot read or understand the written test; may be given by an examiner or an automated testing device. | 761 IAC 604.9(2) |
| Where taken | DMV or county treasurer's office by appointment; at home with a parent proctoring; or at a participating school under Skip the Trip. | Instruction Permit page; Online Permit Test page |
| At-home conditions | Student within 30 days of their 14th birthday and under 18; parent/guardian with a valid Iowa licence proctors; a computer, not a phone or tablet; application takes 7 to 14 days; emailed link expires after 72 hours. | Online Permit Test page |
| Fee | Not published on the pages read. | - |
| Waivers | The knowledge test may be waived where the applicant has passed the same type of test for another Iowa licence or an equivalent out-of-state licence still valid or expired within the past year, and in four other cases. | 761 IAC 604.10(2) |

**This is the one figure in the bank that could not be verified to the standard
the playbook asks for, and it is stated plainly here rather than smoothed over.**
Widely-circulated prep sites give the real Iowa test as 35 questions with 28 to
pass. Nothing on iowadot.gov, in Iowa Code chapter 321 or in 761 IAC chapter 604
states any question count, and prep sites are not an admissible source under
section 2 of the playbook. Two further routes were tried and produced nothing: a
Wayback CDX sweep of `iowadot.gov/mvd/driverslicense*` for an archived FAQ, and
the two Iowa DOT news releases that a search surfaced (2013 and 2020), both of
which now 301 to `iowadot.gov/news` with the article gone. So `officialTest`
carries the numbers the DOT does publish - 25 and 80 percent - and
`officialTest.notes[0]` says in terms that the DOT does not publish the real
test's length and that 25 is the practice test's figure.

## 3. Section and page map

The printed page number equals the PDF page number on every page of this manual,
so `#page=N` anchors land correctly.

| Pages | Contents |
|---|---|
| 1-3 | Cover, message to drivers, service locations, table of contents |
| 4-5 | **Ch 1 Your Driver's License.** 1.1 Who needs one (p4), 1.2 Carrying licence, insurance and registration (p5), 1.3 Required health screenings and tests (p5) |
| 6-11 | **Ch 2 Traffic Signs & Rules of the Road.** 2.1 Traffic signs, colours (p6) and shapes (p7); 2.2 Regulatory signs (p8); 2.3 Warning signs (p9); 2.4 Pedestrian conveyance (p10); 2.5 Slow-moving vehicle sign, 2.6 Guide, 2.7 Service, 2.8 Route signs, 2.9 Traffic signals (all p11) |
| 12-13 | 2.10 Railroad crossings; Operation Lifesaver figure 2.2 (p13) |
| 14 | 2.11 Work zones |
| 15 | 2.12 Pavement markings, 2.13 Yield lines, 2.14 Crosswalks and stop lines, 2.15 Reversible lanes |
| 16 | 2.16 Shared left-turn lane, 2.17 Reserved lanes, 2.18 General lane use |
| 17 | 2.19 Bicycle lanes and pavement markings |
| 18 | 2.20 Bicycle and pedestrian signals, 2.21 Sight-impaired pedestrians, 2.22 Intersections (right of way) |
| 19 | 2.22 continued (controlled and uncontrolled intersections), 2.23 Emergency vehicles |
| 20 | 2.24 School buses (both scenarios, figure 2.14) |
| 21 | 2.25 Parking, 2.26 Parking not allowed, disability parking |
| 22 | 2.27 Move Over or Slow Down law, 2.28 Steer It-Clear It |
| 23-25 | **Ch 3 Preparing to Drive.** 3.1 Maintaining your vehicle (p23-25), 3.2 Adjusting seats and mirrors (p25) |
| 26-33 | 3.3 Advanced driver-assistance systems (permitted-for-testing table on p26) |
| 34-35 | 3.4 Blind spots, 3.5 Seat belts and child restraints (p34-35), 3.6 Securing loose objects (p35) |
| 36 | 3.7 Eliminating distractions, mobile devices, hands-free law |
| 37 | 3.8 Alcohol and drugs, 3.9 Drowsy driving |
| 38 | 3.10 Iowa 511 |
| 39-40 | **Ch 4 Basic Driving Skills.** 4.1 Starting, 4.2 Shifting, 4.3 Accelerating, 4.4 Braking and stopping with the stopping-distance table (p40) |
| 41 | 4.4 continued: following distance, ABS, brake lights, required stops |
| 42 | 4.5 Appropriate speed (unposted limits), 4.6 Steering |
| 43 | 4.7 Backing, 4.8 Turning, turn signals, turns on red |
| 44 | 4.9 Changing lanes |
| 45-46 | 4.10 Passing (p45), illegal passing situations (p46) |
| 47 | 4.11 Defensive driving |
| 48 | 4.12 Driving safely in traffic |
| 49 | 4.13 Communicating: headlights, horn, hazard lights |
| 50-51 | **Ch 5 Applying Your Driving Skills.** 5.1 Intersections (p50), rural four-lane crossing and 5.2 Interstate/highway driving (p51) |
| 52-53 | 5.3 Reduced-conflict intersection, 5.4 Diverging diamond interchange |
| 54-55 | 5.5 Roundabouts (p54, figures p55), 5.6 Rural/gravel road driving (p55-56) |
| 56-57 | 5.7 Night driving (p56), 5.8 Deer, 5.9 Large trucks (p57) |
| 58 | 5.10 Motorcycles, 5.11 Bicyclists and pedestrians |
| 59-61 | 5.12 Closed vehicles on a hot day, 5.13 Inclement weather (p59-61) |
| 62-64 | 5.14 Equipment failure, 5.15 Involvement in a crash (p63), 5.16 Law enforcement interactions (p64) |
| 65-68 | Practice test pointer, blank, nondiscrimination notice, back cover with `MM1170 07/23/2026` |

## 4. What the handbook does not say

| Number the test expects | Manual | Statute or rule that supplies it |
|---|---|---|
| Knowledge test length, pass mark, retest wait, score validity, oral option | Absent. The manual never describes the test; page 5 only says "Pass the knowledge test". | 761 IAC 604.4, 604.9, 604.10; DOT practice-test page |
| The whole graduated licensing system | Absent. Page 5 says "VISIT IOWADOT.GOV TO LEARN ABOUT: ... The Graduated Driver's License Program (for drivers under age 18)." | Iowa Code Section 321.180B; four DOT pages |
| 20 hours of supervised driving with 2 after dark before an intermediate licence | Absent, **and absent from the DOT's Intermediate License page as well** | Iowa Code Section 321.180B(2)(a) |
| 10 hours with 2 after dark before a full licence | Absent | Iowa Code Section 321.180B(4); DOT Full License page states it |
| Permit valid up to four years from the birthday anniversary | Absent | Iowa Code Section 321.180B(1)(a) |
| 12:30 a.m. to 5 a.m. intermediate curfew and the school/work waiver | Absent | Iowa Code Section 321.180B(2)(b); DOT Intermediate page |
| Statutory default speed limit of 55 mph where nothing else applies | Absent (see the conflict in section 5) | Iowa Code Section 321.285(3) |
| 65 mph on fully controlled-access divided multilane highways | Absent | Iowa Code Section 321.285(5)(a) |
| Safety-zone parking distance (10 feet from the ends) and the curb-cut prohibition | Absent from the manual's list | Iowa Code Section 321.358(7) and (15) |
| 75 feet opposite a fire station entrance when signposted | Absent (manual gives only the 20 feet at the entrance) | Iowa Code Section 321.358(9) |
| The parking rule covers stopping and standing, not only parking | The manual's heading is "Parking Not Allowed", which reads narrower than the law | Iowa Code Section 321.358 opening words |
| School bus stop-arm fine of $345 to $930, 30 days' jail, serious misdemeanor on a second offence | Absent; the manual gives only "suspended for up to 180 days" | Iowa Code Section 321.372(5)(b) |
| A bus driver may report a stop-arm violation and a citation may follow days later | Absent | Iowa Code Section 321.372A |
| Amber bus lights come on 300-500 feet ahead (45 mph or more) or 150 feet (below 45) | Absent | Iowa Code Section 321.372(1)(a) |
| The hands-free exception does not cover video, video calls, streaming, gaming data, or reading a notification | Absent; the manual's Hands Free Means list is close but is not the statutory text | Iowa Code Section 321.276(1)(c) |
| Signalling distance stated as a statutory duty rather than advice | Manual states 100/300 feet at 4.8 but nowhere in the signs chapter | Iowa Code Section 321.315 |

## 5. Conflicts

**Speed limits above the four district figures - handbook vs statute. This is a
real conflict and it is not resolved silently.**

Manual page 42, "In the event the speed limit is not posted, the following
general limits have been set", lists:

- 20 mph in any business district
- 25 mph in a residential district or school district
- 45 mph in any suburban district
- 45 mph for any vehicle pulling another vehicle
- 50 mph on unsurfaced secondary roads from sunset until sunrise, and for all trucks on secondary roads at any time of day
- **60 mph on all primary roads, urban interstate highways, and secondary roads, including unpaved roads from sunrise to sunset**
- **70 mph on rural interstate highways**

Iowa Code Section 321.285 says:

- (2)(a): 20 business, 25 residence or school, 45 suburban - **identical**
- (3): "the speed limit for all vehicular traffic shall be **fifty-five** miles per hour" as the fall-back
- (4): unsurfaced secondary roads, not greater than **55** between sunrise and sunset and not greater than **50** between sunset and sunrise
- (5)(a): **65** on fully controlled-access, divided, multilaned highways; **70** on the interstate road system, **with no urban/rural distinction**

So three of the manual's lines are unsupported by chapter 321 as it stands in the
2026 Code: the 60 mph for primary roads, the 60 mph for urban interstates, and
the 60 mph daytime figure for unsurfaced secondary roads (the statute says 55).
The 50 mph night figure for unsurfaced secondary roads matches.

**How it was resolved in the bank.** Every speed question is built only on
figures where the two sources agree: 20 business (`ia_s1_19`, `ia_s6_04`), 25
residence or school (`ia_s1_05`, `ia_s5_03`, `ia_s6_04`), 45 suburban
(`ia_s3_07`), 45 towing (`ia_s4_10`), 40 mph interstate minimum (`ia_s2_13`),
and 70 mph on **rural** interstates (`ia_s4_23`), which both sources give. One
question, `ia_s5_18`, is about the conflict itself: it asks which figure the two
sources agree on, and its context block sets out both readings. No question in
the bank asks for the unposted limit on a primary road, an urban interstate or a
secondary road by day.

**Following distance - manual vs DOT drive-test page.** The manual teaches a 3-
to 4-second rule (page 41) and says two seconds "may be sufficient in normal
conditions for an experienced driver". The DOT's Prepare for Your Driving Test
page tells candidates to "Use the two-second rule". These are reconcilable
rather than contradictory - the two-second figure is the floor the manual gives
for experienced drivers - but a learner meets both on iowadot.gov and is
entitled to be confused. `ia_s5_34` is written on exactly that, and answers it
the way the knowledge test would: the manual's figure governs.

**Question count.** See section 2. Not a conflict between sources, an absence
from all of them.

## 6. What learners report

`python scripts/fetch-reddit.py iowa iowa:"permit test" desmoines:"permit test"
IowaCity:"drivers permit" DMV:"Iowa knowledge test" newdrivers:"Iowa permit"`
saved **35 threads** to `tmp/iowa-reddit-*.txt`. Ten of them were about
California or generic DMV questions and were discarded. The rest are below, as
paraphrases only. No comment text is reproduced, and no recalled exam question
was used - where a thread showed which RULE trips people up, the question was
written from the manual or the Code.

| Sub | Thread (year) | Paraphrase of what people got wrong | Shaped |
|---|---|---|---|
| r/desmoines | "Received a ticket when driving 33 in 25 zone (not residence or school district)" (2023) | The poster believed a 25 mph limit could not apply where the area was not a residence or school district, and that driving with the flow was a defence. Replies were unanimous that neither is true. **Checked: Iowa Code Section 321.285(2)(a)(2) sets 25 for a residence OR school district, and Section 321.285(1) requires a careful and prudent speed regardless. The thread's premise is wrong and became the trap.** | `ia_s5_03`, `ia_s1_05` |
| r/IowaCity | "Passed a school bus - Got a ticket - Scared about the consequences" (2024) | An adult driver with a clean record passed a bus as the stop arm was coming out, was reported by the bus driver, and had a mandatory court appearance. Several replies noted this is a non-scheduled offence with a judge-set fine and that these posts recur. **Checked: Iowa Code Section 321.372A allows the bus driver's report and Section 321.372(5)(b)(1) sets the $345-$930 range.** | `ia_s5_02`, `ia_s1_07`, `ia_s5_24` |
| r/IowaCity | "FYI: Iowa law banning holding cell phone while driving goes into effect tomorrow" (2025) | Multiple commenters believed the conduct was already illegal. One thread participant pointed out that under the earlier law scrolling a music app was outside the definition of an electronic message, and that acquittals had followed on that basis. **Checked: Iowa Code Section 321.276 now turns on holding and manipulating the device, not on the message.** | `ia_s5_05`, `ia_s3_11` |
| r/IowaCity | "FYI: Iowa law banning holding cell phone..." (2025), same thread | A long comment listed the local habits the commenter expects to continue, including treating "merge" and "yield" as meaning existing traffic must let you in, and Iowa having no zipper-merge rule. **Checked: the manual asks main-road traffic to accommodate ramp traffic but gives ramp traffic no right of way, and Iowa Code has no zipper merge provision.** | `ia_s5_16` |
| r/IowaCity | "Dear Out of Town Drivers...." (2025) | Pedestrians report being nearly hit while crossing with a walk signal. One commenter said this had become a monthly occurrence since moving to Iowa. | `ia_s5_04`, `ia_s2_22` |
| r/IowaCity | "What is it with IC Drivers?" (2024) | Drivers not stopping at a clearly signed mid-block pedestrian crossing near a hospital, and getting annoyed at people walking at normal pace. | `ia_s3_06`, `ia_s5_22` |
| r/desmoines | "For you idiot drivers" (2020) | A cyclist was hit by a driver taking a rolling right turn and stopping past the painted stop line. Several replies described drivers ending up half into the intersection before stopping. **Checked: Iowa Code Section 321.257(1) and manual 2.14 both put the stop before the stop line.** | `ia_s5_08`, `ia_s5_06` |
| r/desmoines | "What should i prepare before my test at the dot" (2026) | Replies focused on vehicle inspection failures - lights out, no horn, no wipers, missing front plate, broken passenger seat belt - and on stopping fully before the stop sign rather than at it. | `ia_s2_14`, `ia_s3_19` |
| r/desmoines | "Drivers Test" (2021) and r/IowaCity "Driving test advice" (2019) | Repeated reports of failing for a rolling stop and for going too fast in a pedestrian area. One 2019 reply mentioned parallel parking on that route; the DOT's current page says parallel parking is not required. **Official source wins; the current page governs.** | `ia_s4_29` context |
| r/IowaCity | "To the aggressive driver..." (2025) | A commenter with four-wheel drive noted that it does not give four-wheel stop, only traction to get going. | `ia_s5_21` |
| r/desmoines | "Learners Permit as an Adult?" (2024) | An adult with no prior licence could not find information because everything published is aimed at teenagers, and one reply asserted that over-18s do not need a permit at all. **Checked: 761 IAC 604.10(1)(a) requires an operator's knowledge test for all classes of noncommercial licence, and a permit is what makes practice lawful. A later reply in a different thread made the same correction.** | `ia_s5_17` context |
| r/desmoines | "Parent-Taught Driver Education - has anybody done it?" (2024) | Parents using the parent-taught route and the driving-log requirement that goes with it. **Checked against the DOT's drive-test page, which requires a drive test for anyone who completed the parent-taught programme.** | `ia_s5_09` context |
| r/desmoines | "Driving question" (2024) | A newcomer with no driving experience being pointed at the manual as the study guide for the written test. Confirms the manual is what the test is drawn from. | general |
| r/desmoines | "Speeding ticket via camera" (2022) | Confusion about whether a camera citation is a civil fine that reaches the driving record. Not used - the bank does not test automated enforcement, which is a municipal matter. | not used |
| r/IowaCity | "Question of parking ticket" (2026) | Municipal parking enforcement, tow thresholds and first-ticket forgiveness in Iowa City. Not used - these are city rules, not state law. | not used |
| r/IowaCity | "Wrong way driver" (2025), "Bad Drivers" (2025), "Learn to Drive" (2025) | General complaints: running stop signs and lights, tailgating on unlit curving roads, failing to signal, turning from the wrong lane. Corroborate the manual's own claim that failure to yield is the leading cause of traffic fatalities in Iowa. | `ia_s2_19`, `ia_s6_26` |

Two Iowa-specific official sources were also read, as section 3 of the playbook
recommends: 761 IAC chapter 604, which is the rule governing what the
examination consists of, and the DOT's own practice test page, which is the only
place the department states a pass mark.

## 7. Local gotchas

1. **The school bus figure is 15 feet, and meeting a bus on amber means 20 mph.**
   Neighbouring states use 20 or 25 feet behind a bus, and Iowa's number is
   smaller. The 20 that Iowa does use is a speed, not a distance, and it applies
   before the bus has even stopped. Swapping the two is the single most common
   Iowa school bus error.
2. **You may pass a stopped school bus in exactly one case, and lane count
   decides it.** Four or more lanes, and you are meeting it. A two-lane road with
   a centre turn lane is three lanes and you stop. A median is irrelevant here -
   which is the reverse of the emergency vehicle rule, where a median is exactly
   what releases you.
3. **Iowa's parking distances are its own.** Five feet from a hydrant and ten
   from a stop sign are both shorter than most states teach, and fifty feet from
   the nearest rail is longer. And Iowa Code Section 321.358 says "stop, stand,
   or park", so a two-minute stop with the flashers on is caught.
4. **At an uncontrolled intersection the driver on the left yields.** Iowa's
   gravel road network is full of them, there is no sign to remind you, and the
   manual prints the rule in capitals in its rural driving section for exactly
   that reason.
5. **The following distance is 3 to 4 seconds in the manual and 2 on the DOT's
   drive-test page.** Both are official Iowa pages. The knowledge test is written
   from the manual.
6. **Since July 2025 you may not hold a phone at all.** The previous law reached
   only messaging, so scrolling music genuinely was outside it, and that history
   is why people still believe it is allowed.

## 8. Verification

All run on 2026-09-06 against the tree as it stands.

```
$ npx tsx scripts/extract-quotes.mjs iowa
tmp/iowa-quotes.json: 339 quotes

$ python scripts/verify-excerpts.py iowa tmp/iowa-handbook.pdf tmp/iowa-statute.txt tmp/iowa-dot-pages.txt
iowa: 339/339 quotes verified verbatim against 3 source(s)

$ python scripts/build-excerpt-snippets.py iowa tmp/iowa-handbook.pdf
iowa: 262 snippets rendered, 76 not located

$ npx tsx scripts/validate-driving.mjs --only iowa
ERRORS: 0   WARNINGS: 7

$ npx tsc --noEmit -p .
(no output; no Iowa errors)
```

Of the 339 excerpts, 267 come from the handbook and 72 from Iowa Code, the Iowa
Administrative Code and the DOT web pages. The snippet builder only searches the
handbook PDF, so those 72 report MISS by design; 262 of the 267 handbook quotes
rendered, which is 98 percent of what could render.

Six PNGs were opened and inspected: `bus-rear-15-feet.png`,
`no-park-hydrant-5.png`, `speed-unposted-list.png`,
`signal-flashing-yellow-arrow.png`, `bicycle-change-lanes.png` and
`gravel-left-yields.png`. All are tight, legible crops with the quoted run
highlighted and no letters clipped at the left margin, including the
reverse-video capitals of the uncontrolled-intersection box on page 55.

### Warnings, and why each stands

All seven are the same warning - a quote over the 320-character soft cap, none
anywhere near the 600-character hard cap. Each is a single statutory sentence or
a single stem-plus-list that cannot be cut without changing what the rule says:

| Key | Chars | Why it is not trimmed |
|---|---|---|
| `hands-free-means` | 373 | The manual's "Hands Free Means" list is the operative enumeration; dropping any item would misstate what is prohibited. |
| `code-parking-list` | 469 | Iowa Code Section 321.358's stem plus its first five numbered prohibitions. The stem carries the "stop, stand, or park" wording that gotcha 3 turns on, and the numbered items are what the questions cite. |
| `code-move-over` | 426 | Section 321.323A(1)(a) and (b) are a single either/or rule; quoting only (a) would leave out the slow-down alternative. |
| `code-lighted-lamps` | 332 | Section 321.384(1) states the clock trigger and the 500-foot visibility trigger in one sentence. |
| `code-signal-red-turn` | 326 | Section 321.257(2)(a): the stop, and the right-on-red carve-out, are one sentence. |
| `code-signal-yellow` | 326 | Section 321.257(2)(b): the warning and the "if the stop cannot be made in safety" escape are one sentence. |
| `code-permit-supervision` | 339 | Section 321.180B(1)(c)(1) lists who may supervise; a shorter cut would name only the parent. |

### Other numbers the validator printed

- 195 questions: 30 / 30 / 35 / 35 / 35 / 30.
- Answer positions A:24% B:25% C:26% D:25%.
- Context 100%, source links 100%, commonly-missed 18% (35 questions).
- Excerpts 339, of which 168 are unused by any question. They were kept
  deliberately: the playbook says never to delete a verified quote to hit a
  count, and they are the surrounding paragraphs of rules the questions do test,
  so a learner following an excerpt key into the library finds neighbours.
- Questions wired to an excerpt: 195/195 (100%).
- Topic spread: rules 25, safety 25, signs 22, sharing 21, signals 18, right of
  way 18, speed 15, parking 14, impairment 13, licensing 13, emergencies 11. All
  eleven `DrivingTopic` values are covered and no topic exceeds 50% of any set.

### Answer position rebalancing

The bank was written with positions chosen per question, and came out at
A:19% B:54% C:25% D:2%, which the validator rejects. Rather than shuffling every
question's options, only the **correct** option was relocated in 55 questions
that are not numeric ladders, leaving the wrong answers in their original order
so the "most tempting distractor first" placement survives. Numeric ladders were
excluded from the move entirely. The script that did it is `tmp/iowa_balance.py`.

Five ladders were also put into ascending order by hand, because they had been
written out of order: `ia_s1_07` (bus stopping distance), `ia_s1_08` and
`ia_s6_08` (BAC thresholds), `ia_s2_07` (stopping distances) and `ia_s6_30`
(licensing ages). Every numeric ladder in the bank now ascends.
