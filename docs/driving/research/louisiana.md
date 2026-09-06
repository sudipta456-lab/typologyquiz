# Louisiana - research note

Bank: `src/lib/driving/louisiana/`. 195 questions in six sets, 394 verbatim
excerpts. `contentDate` 2026-09-06. `handbookEdition` "DPSMV2052 (R03/2021)",
which is the form number and revision code printed in the guide's own footer.

## 1. Sources read

| Source | Publisher / edition | URL | Fetched | How |
|---|---|---|---|---|
| Class D & E Driver's Guide | Louisiana Department of Public Safety and Corrections, Office of Motor Vehicles. Footer: `DPSMV2052 (R03/2021)`. PDF metadata: created 2025-02-05, modified 2026-06-22. 143 PDF pages, 138 printed. | https://public.powerdms.com/LADPSC/documents/347039 | 2026-09-06 | Direct. See the note on the host below. |
| Louisiana Revised Statutes Title 32 (Motor Vehicles and Traffic Regulation) - 57 sections | Louisiana State Legislature | https://legis.la.gov/legis/Law.aspx?d=&lt;docid&gt; | 2026-09-06 | Direct, with a browser user agent. Doc ids are not guessable; they were harvested from the Title 32 table of contents. |
| Louisiana Revised Statutes Title 14 sections 98, 98.1, 98.6 (operating while impaired) | Louisiana State Legislature | https://legis.la.gov/legis/Law.aspx?d=919569 and neighbours | 2026-09-06 | Direct |
| Class E - Learner's Permit Requirements (minors) | Louisiana OMV handout | https://expresslane.dps.louisiana.gov/CDLForms/CLASS%20E%20Learner%27s%20Permit%20requirements.pdf | 2026-09-06 | Direct |
| Class E - First Time Driver's License, Adults | Louisiana OMV handout | https://expresslane.dps.louisiana.gov/CDLForms/CLASS%20E%20-%20Adults_upd.pdf | 2026-09-06 | Direct |
| Louisiana Graduated Driver's License Laws | Louisiana OMV | https://expresslane.la.gov/omv/media/qa0jml1m/louisiana-graduated-dl-program.pdf | 2026-09-06 | Direct |
| Class E - Intermediate License Requirements | Louisiana OMV handout | https://expresslane.dps.louisiana.gov/CDLForms/Upgrade%20to%20Intermediate%20License.pdf | 2026-09-06 | Direct |
| Graduated Licensing Program (stages sheet) | Louisiana OMV handout | https://expresslane.dps.louisiana.gov/CDLForms/Graduated%20Licensing%20program.pdf | 2026-09-06 | Direct |
| OMV Permits page | Louisiana OMV | https://expresslane.la.gov/omv/drivers/personal-driver-s-licenses/permits/ | 2026-09-06 | Direct |
| OMV Driver Manuals page | Louisiana OMV | https://expresslane.la.gov/omv/resources/driver-manuals/ | 2026-09-06 | Direct |

### Why handbook excerpts cite public.powerdms.com

The OMV does not serve the Class D & E Driver's Guide from a `.gov` host. Its
own Driver Manuals page at `expresslane.la.gov/omv/resources/driver-manuals/`
links the guide to `https://public.powerdms.com/LADPSC/documents/347039`, and
LADPSC is the Louisiana Department of Public Safety and Corrections' own
document portal - OMV staff hand out powerdms links for departmental policy
documents as well. The file downloaded from that URL on 2026-09-06 is
byte-identical to `tmp/louisiana-handbook.pdf`
(sha256 `3b3e094d39d16bb69685c9541db24486fdf1f38d09a4ca1158578a715da9d702`,
7,802,967 bytes), which is what every quote was verified against. `expresslane.org`
now 302-redirects to `expresslane.la.gov`.

`public.powerdms.com` is therefore declared in `officialHosts` in
`index.ts`, alongside the four Louisiana government hosts, so that handbook
quotes can carry a real page-anchored deep link rather than a front page.

## 2. Test format

| Item | Value | Where it came from |
|---|---|---|
| Questions | 40 | OMV Class E handouts (minors and adults), both: "A 40 question test with a minimum score of 80% is required." |
| Pass mark | 80 percent, i.e. 32 of 40 | Same handouts; the guide gives only the percentage |
| Format | Multiple choice, on a computer in most offices, drawn from the guide | Guide, Chapter 1, Knowledge Test |
| Who administers it | The driver education provider, in most cases. OMV only for students at a secondary school that does not test. | OMV Class E handouts, Tests |
| Time limit | None published | Not stated in the guide, the handouts or the OMV site. Left unset. |
| Retest wait | None published | Not stated in any official source read. See section 9. |
| Fee | $32.25 basic licence fee (learner's permit or first adult licence), plus a service fee of up to $6.00 at some offices. Upgrading to intermediate or permanent is $13.00 plus the same service fee. | OMV handouts; the guide's fee table gives the same $32.25 |
| Vision | 20/40 in one or both eyes | OMV handouts; the guide says "minimum standards (20/40)" |
| Prerequisite | Temporary Instructional Permit (TIP) before the knowledge test, any behind-the-wheel instruction, or a road skills test | OMV Graduated Driver's License Laws sheet |
| Statutory syllabus | Rules of the road, signs and signals, sharing the road with motorcycles and tractor/trailer trucks, distracted driving, trailer safety, conduct when stopped by an officer, accessible parking and access aisles, and "not less than two questions relative to railroad and highway grade railroad safety" | R.S. 32:407(A)(2) |

Driver education, which gates the test:

- 15 to 17: 30 hours classroom plus 8 hours behind the wheel (the OMV also calls
  this the "38-hour" course).
- 18 and over, never licensed: either the 30+8 course, or 6 hours pre-licensing
  classroom plus 8 hours behind the wheel.
- 14: classroom only, if in at least eighth grade and within 90 days of turning
  15. No behind-the-wheel until 15. (R.S. 32:402.1)

## 3. Section and page map

Printed page numbers. In the PDF, add 5 (printed page 1 is PDF page 6); the
`hb()` helper in the sets files and the `#page=` anchors in `excerpts.ts` do that.

| Chapter | Section | Printed page |
|---|---|---|
| 1 | Getting a Driver's License | 1 |
| 1 | Who Must Have a Driver's License? | 1 |
| 1 | Classes of License | 1 |
| 1 | Identification Requirements | 2 |
| 1 | Age Requirement (R.S. 32:408) | 4 |
| 1 | Graduated Licensing Program | 6 |
| 1 | Proof of Insurance | 7 |
| 1 | Driver's License Tests | 8 |
| 1 | Road Skills (Driving) Test | 9 |
| 1 | License Renewals / Change of Address | 10 |
| 1 | Your Driving Record | 11 |
| 1 | Revocation of Your License | 12 |
| 1 | Put the Brakes on Litter (Keep Louisiana Beautiful insert) | 13-14 |
| 1 | Organ Donation / Voter Registration | 15-16 |
| 2 | Highway Transportation System | 17 |
| 2 | Number and Types of Highways | 20 |
| 3 | Signs, Traffic Lights, and Pavement Markings | 22 |
| 3 | Traffic Signs (shapes) | 22-23 |
| 3 | Traffic Signs (colors) | 24 |
| 3 | Warning Signs | 25-26 |
| 3 | Regulatory Signs | 26-29 |
| 3 | Guide Signs / Incident Signs | 29-30 |
| 3 | Signs in Construction Areas / Work Zones | 31-32 |
| 3 | Flag Persons | 33 |
| 3 | Traffic Signals | 33-34 |
| 3 | Lane Markings | 34-36 |
| 3 | Roundabouts | 37 |
| 4 | Basic Driving and Safety | 38 |
| 4 | Use of Safety Belts | 39 |
| 4 | Young Children (R.S. 32:295) | 40-41 |
| 4 | Air Bags | 41-42 |
| 4 | Preparing to Drive | 44 |
| 4 | Starting and Stopping | 46 |
| 4 | Steering / Steering Methods | 48-49 |
| 4 | Seasonal Changes | 51-53 |
| 5 | Safe Driving Habits | 54 |
| 5 | Defensive Driving Techniques (SIPDE) | 55 |
| 5 | Driver Fatigue / Drowsy Driving | 56-57 |
| 5 | Illness and Driving | 58 |
| 5 | Aggressive Driving / Road Rage | 59-60 |
| 5 | Looking and Scanning Ahead | 61-63 |
| 5 | Rear View Mirrors and Blind Spots | 64 |
| 5 | Stopping Distances | 64-65 |
| 5 | Following Distances | 65-66 |
| 5 | Turning Around / Three-Point Turnabout | 66-67 |
| 5 | Parking Brake / Parking on Hills | 67-68 |
| 5 | Angle and Parallel Parking | 68-69 |
| 5 | Parking (R.S. 32:143 list, painted curbs) | 70 |
| 5 | Accessible Parking | 70-71 |
| 5 | Passing on the Left / on the Right | 71-72 |
| 5 | Safety Tips on Passing | 72-73 |
| 5 | Backing | 73 |
| 5 | Driving on Wet Pavement / Hydroplaning | 74 |
| 5 | Night Driving | 75 |
| 5 | Pedestrian Safety / Visually Impaired Pedestrians | 76-77 |
| 5 | Cellular Phones | 77-78 |
| 5 | Peer Pressure / Older Drivers | 78-79 |
| 5 | Sharing the Road with Bicycles | 80-81 |
| 5 | Sharing the Road with Motorcycles | 81-82 |
| 5 | Sharing the Road with Big Trucks | 83-85 |
| 6 | Traffic Laws and Regulations | 86 |
| 6 | Speed / Speed Limits / Drag Racing | 86-87 |
| 6 | Lane Changing | 87-88 |
| 6 | Stopped School Buses | 88-89 |
| 6 | Intersections / Rules for Turning | 89-90 |
| 6 | Shared Center Left Turn Lane | 90-91 |
| 6 | Roundabouts and Traffic Circles | 91-92 |
| 6 | Signaling | 92-93 |
| 6 | Right of Way | 93 |
| 6 | Railroad Grade Crossing / Track Facts | 94-96 |
| 6 | Other Laws You Should Know | 96-97 |
| 6 | Insurance / repair / theft fraud | 98-99 |
| 7 | Interstate Driving and Rural Roads | 100 |
| 7 | Entering / Space to Merge / Right-Hand Lane | 100-101 |
| 7 | Exiting | 102 |
| 7 | Rural Roads | 103-104 |
| 7 | Animals | 104-105 |
| 7 | Slow Moving Vehicles | 105-106 |
| 7 | Weather Changes / At Night | 106-107 |
| 7 | Trip Planning | 108-109 |
| 8 | Driving Hazards and Emergencies | 110 |
| 8 | Distracted Driving | 110-111 |
| 8 | Risks and Teenage Drivers | 111-112 |
| 8 | Avoiding Collisions | 112-113 |
| 8 | Protecting Yourself in a Crash / Rollovers | 114-115 |
| 8 | Other Vehicle Emergencies (skids, blowout, brakes, fire) | 115-118 |
| 8 | Driving in Adverse Weather / Flooded Roadways | 119 |
| 8 | Becoming Submerged in Water | 119-120 |
| 8 | Traffic Crashes | 120-121 |
| 8 | Approach of an Authorized Emergency Vehicle | 121 |
| 9 | Driving Offenses / Alcohol | 122 |
| 9 | Blood Alcohol Concentration | 123-124 |
| 9 | Penalty for DWI | 124-125 |
| 9 | Drugs / Marijuana | 125 |
| 9 | Vehicular homicide, negligent injury, reckless, hit and run | 125-126 |
| 9 | Administrative Per Se (implied consent) | 126 |
| 9 | Losing Your Driving Privileges | 127 |
| 10 | Class D Chauffeur's License / Vehicle Size / Loads / Driving | 128-129 |
| 10 | Air Brakes | 130-132 |
| 10-A | Trailer Safety | 133-134 |
| 11 | Motor Vehicle Registration and Title | 135-137 |

## 4. What the handbook does not say

Every number below is testable, absent from the guide, and supplied by the
statute or an OMV handout. These are the questions in set 3 and set 5 that a
learner cannot answer from the book alone.

| Rule | Guide | Supplied by |
|---|---|---|
| Default maximum speed where nothing is posted: 55 mph | Silent. Prints only "Maximum speed for any vehicle in Louisiana is 70 mph" (p128) | R.S. 32:61(A) |
| Multi-lane divided highway with partial or no access control: 65 mph | Silent | R.S. 32:61(A)(2) |
| Number of knowledge test questions: 40 | Silent; gives 80 percent only (p8) | OMV Class E handouts |
| Subjects the knowledge test must cover, incl. two railroad questions | Silent | R.S. 32:407(A)(2) |
| Minimum liability limits: $15,000 / $30,000 / $25,000 | Silent; only says a vehicle must be insured | R.S. 32:900(B)(2) |
| Crash reporting threshold: injury, death, or property damage over $500 | Silent; lists duties but no threshold | R.S. 32:398(A) |
| Learner's permit restriction 02: no cell phone at all, hands-free included | Silent | OMV Graduated Driver's License Laws sheet |
| Statewide hands-free requirement and its penalties ($250 primary offence in a school or work zone, $100 secondary elsewhere) | Points the reader at R.S. 32:59 for exceptions but gives no penalties | R.S. 32:59, as enacted by Acts 2025 No. 288 |
| Four-way stop order: first to stop proceeds first, then left yields to right | Gives only the "vehicle on the right" tie-break (p93) | R.S. 32:123(C) |
| Uncontrolled intersection: left yields to right | Implied in the right-of-way list | R.S. 32:121(A) |
| Flashing yellow arrow duty to yield | Silent (only steady yellow arrow) | R.S. 32:232(4) |
| School bus: no stop needed on a 4 or 5 lane road split by a two-way left turn lane; but a 1-lane-each-way road with such a lane is NOT divided | Guide gives the second half only (p89) | R.S. 32:80(C) |
| Move-over law wording and the $200 fine | One sentence under Incident Signs (p30) and a paraphrase on p121 | R.S. 32:125(B), (D) |
| Underage BAC offence at 0.02 is a distinct crime | Gives the 0.02 threshold but not the offence | R.S. 14:98.6 |
| Parking: no stopping where it obscures a traffic control device | Not in the guide's list | R.S. 32:143(A)(15) |
| Parked vehicle must show signal lights between sunset and sunrise | Silent | R.S. 32:141(C) |
| U-turn prohibited where you cannot be seen from 500 feet | Given (p90) but attributed to no section | R.S. 32:102 |

## 5. Conflicts, and how each was resolved

**a. Parking distance from the curb: 18 inches vs 2 feet, inside the same guide.**
The guide's Parking section (p70) says "the vehicle's right wheels must be
within 18 inches of the right-hand curb". Six lines earlier, its summary of
R.S. 32:143 lists "More than 2 feet from the curb" as prohibited. R.S. 32:143
itself contains no curb distance at all - subsection (B) only bars moving a
vehicle "away from a curb such a distance as is unlawful", leaving the number to
local ordinance. Resolution: `la_s5_11` puts the conflict to the learner
directly and the correct answer is 18 inches, which satisfies both readings.
`la_s1_23` asks the 18-inch figure and its `trap` names the discrepancy.

**b. Child restraint stages: age in the guide, manufacturer limits in the
statute.** The guide (p40) gives a clean age ladder: rear-facing to 2,
forward-facing 2-4, booster 4-9, adult belt from 9, rear seat under 13.
R.S. 32:295(A) keys every step to reaching the manufacturer's height or weight
limit *as well as* the age. Resolution: no question turns on a boundary age.
`la_s2_19` asks the rear-seat-under-13 rule, which both sources state the same
way, and its `context` records that the statute adds the manufacturer limits.

**c. Cell phones: the guide cites a repealed statute.** The guide's Cellular
Phones page (p78) states the current hands-free rule correctly and refers the
reader to R.S. 32:59 for exceptions, which is right. But Acts 2025 No. 288
repealed R.S. 32:300.5 through 32:300.8, the old texting and handheld sections,
and rewrote 32:59. Anything elsewhere citing 32:300.5 is stale. Resolution: all
cell-phone questions cite 32:59 or the OMV GDL sheet, never 32:300.5.

**d. Driver education hours: 30+8, 38-hour, or 6+8.** The guide (p7) says a
learner's permit needs "thirty (30) hours classroom instruction and eight (8)
hours behind-the-wheel", and separately mentions a "thirty-eight (38) hour
driver's education course" for 18-year-olds. The OMV's GDL sheet calls the
15-year-old requirement a "38-hour driver's education course" - the same 30+8,
totalled. The adult handout gives the alternative 6+8 pre-licensing route.
Resolution: `la_s5_03` asks the adult route (6+8) and its context records that
30+8 is the alternative, not an additional requirement. No question asks for
"38" as a number.

**e. Speed: the guide's single 70 mph headline vs the statute's three tiers.**
Not a contradiction so much as an omission, since 70 is correct on an interstate.
Resolution: `la_s1_05` asks the interstate figure, where both agree.
`la_s3_01` and `la_s5_04` ask the 55 and 65 tiers and cite the statute directly.

**f. Refusal and submission suspension periods.** Checked for conflict and found
none: the guide's 365 / 730 days for a first and second refusal match
R.S. 32:667(B)(2)'s one year and two years, and its 180 days / two years for
0.08-0.149 and 0.15+ match R.S. 32:667(B)(1).

## 6. What learners report

`python scripts/fetch-reddit.py` had already saved 75 threads to
`tmp/louisiana-reddit-*.txt` before this bank was written; all 75 were read
before set 5 was drafted. Paraphrases only below - no comment text is
reproduced anywhere in this repo, and no question is derived from anyone's
recollection of a real exam item.

**A caveat that materially shrank the usable set:** the fetch pulled in
`r/lafayette`, which on Reddit is Lafayette, **Indiana**, not Lafayette,
Louisiana. Roughly a dozen threads (`1tiraej`, `1hz7lpa`, `1tonbku`, `1kvk2x9`,
`1hvy5lh`, `1pdhz8j`, `1v6eelh`, `1vo6qaw`, `1opp43h`, `1jv8ai5`, `194swyz`,
`13h1wrm`) are Indiana and were discarded - several link `in.gov` manuals.
Similarly, five `r/DMV` and `r/driving` threads (`1ce1xrc`, `1eah2lq`,
`1jslfoo`, `1o5dk45`, `1v1adnf`) turned out to be California, New Jersey, Texas
or Washington and were discarded. `1ce1xrc`, the thread titled "I failed my
knowledge test twice", is California, so despite its title it carries no
Louisiana signal.

| Thread | Sub | Year | One-line paraphrase | Shaped |
|---|---|---|---|---|
| `6j2ur9` "Some questions regarding getting my LA drivers license" | r/Louisiana | 2017 | New arrival unsure whether the deadline to switch a licence is 30 days or 90; commenters disagree in the same thread | `la_s2_16`, `la_s5_08` |
| `2hxxnp` "Question about driving permit/license" | r/Louisiana | 2014 | Confusion over whether a second course is needed between permit and full licence, and at what ages each stage starts | `la_s1_09`, `la_s3_14` |
| `pxa62w` "What's the process for getting a license when you're 25" | r/Louisiana | 2021 | Adult first-time applicant unsure whether driver ed applies over 18; a commenter separately corrects another that a blinking yellow does not mean prepare for a red, it means yield | `la_s5_03`, `la_s1_16`, `la_s5_01` |
| `p6v5ff` "First time adult driver's license" | r/Louisiana | 2021 | Adult route described as a 6-hour class plus 8 hours in the vehicle, with a TIP obtained first | `la_s5_03`, `la_s4_03` |
| `bdx9cx` "How does an adult get their first driver's license?" | r/batonrouge | 2019 | Same adult-route question, same 6+8 answer | `la_s5_03` |
| `lvtd90` "Driving Schools and Temporary Instruction Permits" | r/NewOrleans | 2021 | Asks whether a written test is needed to get the TIP card; answer is no, documents only | `la_s4_03` |
| `1hwoehg` "TIP Info" | r/Louisiana | 2025 | Converting a TIP to a licence at no extra cost | `la_s4_03` |
| `1dsbguf` "Getting Driver's License" | r/Louisiana | 2025 | Out-of-state permit holder asks who must accompany them in Louisiana; answer is a licensed adult of 21 | `la_s5_24` |
| `o5lru4` "acquiring a driver's license in New Orleans" | r/NewOrleans | 2021 | Out-of-state permit holder, 21, asks what carries over | `la_s5_24` |
| `1g5hizx` "Driver's license question" | r/Louisiana | 2024 | Student finished 8 hours behind the wheel, did not realise the school still administers the test | `la_s5_32` |
| `1ejzzlg` "Louisiana drivers license question" | r/Louisiana | 2024 | Adult holds a licence carrying the 02 restriction (must drive with a licensed adult) and does not know a skills test lifts it | `la_s5_06`, `la_s5_32` |
| `1m1tb8j` "License restriction" | r/Louisiana | 2025 | Same 02 restriction confusion after a failed road test | `la_s5_06` |
| `wd7c1w` "How long do driving test results last in Louisiana" | r/DMV | 2022 | Sealed driving-school test results held for years; nobody knows how long they stay valid | recorded under section 9, no question written |
| `1dmvhgp` "questions about the drivers license process in LA" | r/Louisiana | 2024 | Parent unsure whether the road-test vehicle needs an inspection sticker, registration and insurance | `la_s4_16` |
| `1npnz1i` "Do you need an appointment for first time license at the OMV?" | r/Louisiana | 2025 | Walk-in vs appointment; expired licence and whether retesting applies | context for `la_s6_26` |
| `a9i4d7` "Driver's license renewal past 180 days?" | r/Louisiana | 2018 | The 180-day renewal window misread as a grace period after expiry | `la_s6_26` |
| `1d61rpz` "Drivers license" | r/Louisiana | 2024 | International student told the classroom/BTW hours in the wrong order; a second commenter corrects the order | `la_s5_03` |
| `1cubt6z` "Moving from Ontario to Louisiana (Driver License)" | r/Louisiana | 2024 | Canadian licence holder assumes a straight exchange; commenters say tests still apply | `la_s5_03` |
| `1jocueg` "Moving to Louisiana from Canada" | r/Louisiana | 2025 | Same, with OMV pointing the poster at policy documents rather than answering | `la_s5_03` |
| `14a3gdm` "transferring to LA licence from Australian licence" | r/Louisiana | 2023 | A certified instructor states in-thread that a foreign licence cannot be transferred and the course is required | `la_s5_03` |
| `oxmd18` "Traffic Violation: No Proof of Insurance" | r/shreveport | 2021 | Driver had valid cover but an outdated card in the vehicle and was cited anyway; thread quotes R.S. 32:863.1 | `la_s5_09` |
| `1btmmqo` "Measure to eliminate inspection stickers" | r/Louisiana | 2024 | Inspection sticker still required; a 2024 bill to narrow it had not passed | `la_s4_16` |
| `1egffe1` "does lousiana driving school teach people not to use their turn signals?" | r/shreveport | 2024 | Long complaint thread about unsignalled turns and lane changes; roundabouts and median misuse both raised | `la_s5_12`, `la_s5_21`, `la_s5_30` |
| `1tdca86` "Please Learn to Drive" | r/batonrouge | 2026 | Drivers turning left into a four-lane road and taking the wrong lane, then honking at the driver who was correct; also braking at DO NOT STOP signs | `la_s5_02`, `la_s2_02`, `la_s4_15` |
| `1v2drcp` "You people can't drive to save your life" | r/batonrouge | 2026 | Stop signs, traffic lights, roundabouts, four-way stops and railroad crossings all named as things drivers get wrong locally | `la_s1_03`, `la_s5_30`, `la_s6_03` |
| `1ladynz` "the secret to bad Baton Rouge drivers" | r/batonrouge | 2025 | Rolling stops, sitting through greens, driving far under the limit, illegal U-turns and tailgating listed as the local pattern | `la_s1_01`, `la_s5_10`, `la_s3_22` |
| `1fwlhkz` "Got a ticket for failing to yield to oncoming traffic" | r/Louisiana | 2024 | Young driver ticketed for failing to yield while turning left, then collided | `la_s3_11`, `la_s6_24` |
| `1k6v53y`, `1f0fmk7`, `1ab750g` | r/Louisiana, r/batonrouge | 2021-2025 | Adults getting a first or reinstated licence; recurring uncertainty about which course, which permit and which test | `la_s5_03`, `la_s5_32` |

The three strongest traps found, in the order they recurred:

1. **The two clocks for new arrivals.** 30 days as a resident, 90 days as a
   visitor, one paragraph apart in the guide. Multiple threads argue about it and
   at least one gets it wrong in a top-level comment.
2. **Turning left into a multi-lane road and taking the outside lane.** Named
   explicitly and repeatedly in the Baton Rouge threads, including by a driver who
   was hit by someone doing it.
3. **Flashing yellow read as "prepare for red".** Corrected in-thread by another
   commenter, which is exactly the shape of a testable misconception. The correct
   answer came from the guide, not the thread.

Beyond Reddit, two official sources did more work than any forum. R.S. 32:407
publishes the syllabus the knowledge test must cover, including the guaranteed
two railroad questions, and the OMV's Class E handouts publish the question count
and pass mark that the guide itself omits. Both were used directly for set 3 and
set 5. The OMV publishes no "most missed questions" page.

## 7. Local gotchas

The five in `localGotchas`, and why each catches people:

1. **The guide prints one speed number and the statute has three.** A learner who
   studies only the book comes away believing 70 mph is the answer to every
   unposted road. Off the interstate the statutory fall-back is 55, with 65 for a
   multi-lane divided highway that has partial or no control of access.
2. **School bus: 30 feet, both directions, and a two-way left turn lane is not a
   divider.** The exception people reach for is "it's a wide road". The statute
   says a road with one lane each way plus a centre turn lane is not divided at
   all, so you stop.
3. **The shared centre left-turn lane, capped at 200 feet.** Local threads
   describe drivers using it as a travel lane when the through lanes back up. It
   is used from both directions, which is what makes that head-on rather than
   merely illegal.
4. **Cell phones have three tiers and the strictest is the learner's.** No phone
   at all on a permit, hands-free included; no talk or text under 18; hands-free
   for everyone since Acts 2025 No. 288, with a $250 primary-offence fine in a
   school or work zone.
5. **30 days versus 90 days.** See the forum research above. It is the single
   most repeated confusion in the Louisiana threads.

## 8. Answer position distribution

Chosen while writing, not shuffled afterwards. Two questions (`la_s3_05`,
`la_s5_04`) had their options reordered afterwards for one reason only: their
numeric ladders were not ascending, and the ascending order moved the key.
Across the 195 questions:
A 41 (21.0%), B 52 (26.7%), C 58 (29.7%), D 44 (22.6%). Every numeric option
ladder is left in ascending order, which constrains where the correct answer can
sit and is the main reason the spread is not flatter.

## 9. What could not be verified

- **Retest waiting period.** No official Louisiana source read here publishes a
  minimum wait between knowledge test attempts, or a cap on attempts. The guide,
  the OMV handouts and the OMV site are all silent, and because the driver
  education provider normally administers the test it may be provider policy
  rather than state policy. Not asserted anywhere in the bank, and
  `officialTest` carries no retest note.
- **Time limit.** Same: nothing official states one. `timeLimitMinutes` is left
  unset rather than guessed.
- **How long a passed knowledge or skills test stays valid.** Raised in thread
  `wd7c1w` and unanswered there. No official source found. No question written.
- **Whether the OMV publishes a separate signs test.** Nothing in the guide, the
  handouts or the site suggests Louisiana splits the test the way Wisconsin or
  Ontario do, so `sectionedBy` is unset. Stated as an absence of evidence rather
  than as evidence of absence.
- **Fee currency.** The fee figures in the guide's table (p2) and in the OMV
  handouts agree at $32.25, but licensing fees change more often than the manual
  is reissued. They are recorded here and in `officialTest.notes` with their
  source, and no question turns on a fee.
- **Statutory currency.** Title 32 was read from legis.la.gov on 2026-09-06,
  which serves the current text. R.S. 32:61 and 32:64 carry 2025 amendments and
  R.S. 32:59 is a 2025 enactment, so the statutory half of this bank is newer
  than the R03/2021 guide. Where they differ the bank follows the law and says so.

## 10. Verification

Run 2026-09-06, against the tree as committed.

```
$ npx tsx scripts/extract-quotes.mjs louisiana
tmp/louisiana-quotes.json: 394 quotes

$ python scripts/verify-excerpts.py louisiana tmp/louisiana-handbook.pdf tmp/louisiana-statute.txt tmp/louisiana-omv.txt
louisiana: 394/394 quotes verified verbatim against 3 source(s)
```

`tmp/louisiana-omv.txt` is the extracted text of the five OMV handout PDFs
listed in section 1, concatenated with a header line naming each source and its
URL; it is passed as a third source so that the sixteen OMV quotes are verified
against the documents they cite rather than falsely reported as misses.

Snippet render and validator output are recorded in section 11 below.

## 11. Verification, 2026-09-06

```
$ python scripts/build-excerpt-snippets.py louisiana tmp/louisiana-handbook.pdf
louisiana: 314 snippets rendered, 80 not located
```

Of the 80 not located, 79 are expected: 64 statute quotes and 15 OMV handout
quotes, none of which appear in the handbook PDF the renderer searches. The two
genuine handbook misses are `three-distractions` and `vehicle-size-limits`, both
of which span a column or list break the renderer cannot bridge; their quotes
are still verified verbatim and still carry a page-anchored link. That leaves
313 of the 315 handbook quotes rendered, 99.4 percent.

Three PNGs were opened and inspected: `school-bus-30-feet.png`,
`parking-hydrant-railroad.png` and `keep-right-law.png`. All three are tight
crops with the quoted band highlighted, the leading character of every line
intact, and enough surrounding context to place the passage.

```
$ npx tsx scripts/validate-driving.mjs --only louisiana
=== Louisiana (LA) - 6 sets ===
  snippets: 314 in manifest, 314/394 excerpts covered (80%)
  quotes verified: 394/394 verbatim against louisiana-handbook.pdf, louisiana-statute.txt, louisiana-omv.txt (2026-09-06T12:49:03-06:00)
  excerpts: 394 (219 unused), questions wired: 195/195 (100%), quoted total: 73.6k chars
  questions: 195
  answer positions: A:21% B:27% C:30% D:23%
  context: 100%  source links: 100%  starred: 17%
  topics: rules:27 signs:21 signals:21 safety:20 licensing:19 sharing:17 parking:16 speed:15 rightOfWay:13 impairment:13 emergencies:13
ERRORS: 0   WARNINGS: 9

$ npx tsc --noEmit -p .
(no output)
```

All nine warnings are the same class: an excerpt quote over the 320-character
soft limit. Each is a single unbroken sentence in its source that cannot be cut
without breaking the contiguous-substring rule verification depends on, and each
is well under the 600-character hard cap.

| Key | Chars | Why it cannot be shortened |
|---|---|---|
| `stat-driveway-yield` | 444 | R.S. 32:124 is one sentence: stop before the sidewalk, yield to pedestrians, yield to approaching vehicles. Cutting it drops one of the three duties. |
| `stat-gdl-test-content` | 400 | The statutory list of knowledge-test subjects is one sentence, and the two-railroad-questions clause is at its end. |
| `bicycle-helmet-under-12` | 378 | One sentence naming the duty-holder, the age, and the fit requirement. |
| `licence-misuse` | 375 | One sentence listing six separate licence offences. |
| `child-restraint-stages` | 365 | A bulleted list with no internal sentence boundary. |
| `stat-insurance-limits` | 363 | The three limits are one sentence in three lettered clauses. |
| `stat-underage-002` | 354 | R.S. 14:98.6(A) is a single definition. |
| `gdl-fifty-hours` | 333 | One sentence covering the attestation, the 50 hours and who may supervise. |
| `stat-obey-devices` | 324 | R.S. 32:231(A) is one sentence including its emergency-vehicle exception. |

An automatic trim pass already cut every other over-length quote back to a
sentence boundary; these nine are what remains.
