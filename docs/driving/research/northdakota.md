# North Dakota - research note

Bank built 2026-09-07 to `docs/driving/PLAYBOOK.md`. 195 questions in six sets,
470 verbatim excerpts, 372 rendered handbook snippets.

The licensing authority is the **Driver License Division of the North Dakota
Department of Transportation (NDDOT)**, at 608 East Boulevard Avenue, Bismarck.
There is no separate DMV: NDDOT runs driver licensing and its Motor Vehicle
Division runs registration. The handbook publisher is NDDOT itself.

The permit's own name differs between NDDOT's two surfaces, and both are used
here. The manual and NDCC 39-06-04 call it a **Class D instruction permit**;
NDDOT's public page calls it a **learner's permit**. `licenceName` uses the
statutory form.

---

## 1. Sources read

| Source | Publisher | Edition label | URL | Fetched | How |
|---|---|---|---|---|---|
| Noncommercial Driver License Manual, Class D | NDDOT Driver License Division | `2025-2027` on the cover; running footer `Revised 2025` on every page; publication code `DL0126` on page 2 | https://www.dot.nd.gov/sites/www/files/documents/Drivers%20-%20documents/noncommercial-manual.pdf | 2026-09-07 | direct, HTTP 200, 3.36 MB, 56 pages |
| NDCC ch. 39-06 Operators' Licenses | North Dakota Legislative Branch | current online text | https://ndlegis.gov/cencode/t39c06.pdf | 2026-09-07 | direct |
| NDCC ch. 39-06.1 Disposition of Traffic Offenses | North Dakota Legislative Branch | current online text | https://ndlegis.gov/cencode/t39c06-1.pdf | 2026-09-07 | direct |
| NDCC ch. 39-08 Special Offenses | North Dakota Legislative Branch | current online text | https://ndlegis.gov/cencode/t39c08.pdf | 2026-09-07 | direct |
| NDCC ch. 39-09 Speed Restrictions | North Dakota Legislative Branch | current online text | https://ndlegis.gov/cencode/t39c09.pdf | 2026-09-07 | direct |
| NDCC ch. 39-10 Traffic Regulations | North Dakota Legislative Branch | current online text | https://ndlegis.gov/cencode/t39c10.pdf | 2026-09-07 | direct |
| NDCC ch. 39-21 Equipment of Vehicles | North Dakota Legislative Branch | current online text | https://ndlegis.gov/cencode/t39c21.pdf | 2026-09-07 | direct |
| NDAC art. 37-03 Driver's Licensing and Financial Responsibility (ch. 37-03-01 to -05) | North Dakota Legislative Branch | current online text | https://www.ndlegis.gov/information/acdata/pdf/37-03-01.pdf (and -02 to -05) | 2026-09-07 | direct; **read and cited nowhere**, see section 4 |
| How to Apply for a Learner's Permit | NDDOT | undated web page | https://www.dot.nd.gov/driver/how-apply-learners-permit | 2026-09-07 | direct |
| Driver License Requirements | NDDOT | undated web page | https://www.dot.nd.gov/driver/driver-education/driver-license-requirements | 2026-09-07 | direct |
| Driver License Points Reduction and Points Schedule | NDDOT | undated web page | https://www.dot.nd.gov/driver/driver-education/driver-license-points-reduction-and-points-schedule | 2026-09-07 | direct |
| Driver Education | NDDOT | undated web page | https://www.dot.nd.gov/driver/driver-education | 2026-09-07 | direct |
| Driver License / Driver License Types | NDDOT | undated web pages | https://www.dot.nd.gov/driver/driver-license, /driver/driver-license-classes | 2026-09-07 | direct, background only |
| KnowTo Drive North Dakota FAQ | ITI, operating NDDOT's official online exam | undated | https://knowtodrive.com/northdakota-faq/ | 2026-09-07 | direct |
| NDDOT press release, "NDDOT adds two new languages for online driver's license testing", 29 Aug 2022 | NDDOT | archived | Internet Archive capture 2023-02-01 of https://dot.nd.gov/dotnet/news/Public/View/9307 | 2026-09-07 | archive; the live URL now 404s. Used only for background (online testing began December 2021; $10 online fee). Nothing is quoted from it. |
| NDDOT Drivers License FAQ | NDDOT | archived 2022-11-29 | https://www.dot.nd.gov/dotnet2/view/dl-faq.aspx | 2026-09-07 | archive; **answers load via script and could not be read**. The live URL now redirects to /driver. Nothing quoted. |

No third-party practice site, aggregator or prep bank was used as a source for
any fact. Reddit threads were read for what learners report (section 6) and
nothing is quoted from them.

**KnowTo Drive is on the official-hosts list deliberately, and narrowly.**
NDDOT's own Driver Education page says KnowTo Drive is "the only official online
knowledge testing platform, brought to you by the North Dakota Department of
Transportation"; the manual sends applicants to nd.knowtodrive.com to sit the
Class D knowledge test; and NDCC 39-06-13(2) requires the director to run the
written examination through an online medium and fixes its $10 fee. Five
excerpts are taken from its FAQ - the 60-minute limit, the retake intervals, who
may test, the fee, and the disqualification rules - and nothing else.

### Extraction integrity

Checked early, before any question was written, because two prior jurisdictions
in this project (Nebraska, West Virginia) had broken font maps that produced
gibberish which still verified as a substring.

`fitz.get_text("text")` on `tmp/northdakota-handbook.pdf` produces clean prose
with correct reading order across the manual's two columns. `verify-excerpts.py`
reported **zero MANGLED tokens** across all 470 quotes. The PDF's own
line-wrapping hyphens are the only artefact, and both readings the verifier
produces handle them.

The manual's own typographical slips are preserved verbatim rather than
repaired, because a repaired quote is not a quote: `45 dregree angle`,
`Emercency Notification System`, `When approching multiple tracks`, `the driver
shouldkeep to the right`, `before moving back t normal position`, `May also
operated a Class D vehicle`, and the two-column break that runs `Doors -
function from inside and outside of vehicle` straight into `A horn clearly
audible for 200 feet`.

---

## 2. Test format

| Item | Value | Where it came from |
|---|---|---|
| Question count | **not published by NDDOT** | see below |
| Pass mark | **not published by NDDOT** | see below |
| Time limit | 60 minutes | KnowTo Drive ND FAQ, "Rules and Regulations" |
| Fee, in office | $5 per attempt, one attempt allowed per day | NDDOT, How to Apply for a Learner's Permit |
| Fee, online | $10 per attempt | KnowTo Drive ND FAQ; fixed by NDCC 39-06-13(2) |
| Permit fee | $15 | NDDOT, How to Apply for a Learner's Permit |
| Road test fee | $5 | NDDOT, How to Apply for a Learner's Permit |
| Retake after a failure, online | 24 hours; 5 failures = 1 year lockout from online testing | KnowTo Drive ND FAQ, "Registration" |
| Retake after a disqualification, online | 7 days; 5 disqualifications = 1 year | KnowTo Drive ND FAQ |
| Retake, in office | not the same day as a failure | Manual, Examinations (page 5) |
| Instant fail, in office | bringing a phone, bag, notebook or any electronic device into the testing area; leaving the testing area before the test is finished | Manual, Check List for Testing (page 1) and the unnumbered notice on page 3 of the PDF |
| Languages | 14 (English, Arabic, Spanish, Somali, Russian, Vietnamese, Turkish, Swahili, Nepali, Serbo-Croatian, French, Pashto, Dari, Chinese) | Manual, General Information (page 1); NDDOT permit page |
| ASL and audio | Fargo, Jamestown, Bismarck, Dickinson, Williston, Minot, Devils Lake, Grand Forks | Manual, page 1 |
| Where taken | any driver license site by appointment, or online at nd.knowtodrive.com | Manual, page 3 of the PDF |
| After passing online | you must still book an appointment at a driver license office to collect the permit | Manual, unnumbered reminder page (PDF page 4) |
| Minimum age to apply | 14 | Manual, Permits (page 3); NDCC 39-06-04(1) |

### The question count and pass mark could not be verified. Read this.

**NDDOT publishes neither figure anywhere.** Checked and came up empty:

- the 2025-2027 manual, end to end - it never states a question count, a pass
  mark, or a time limit for the Class D knowledge test;
- every dot.nd.gov page in the Driver section, including the learner-permit
  page, the driver-licence page, the requirements page and the driver-education
  page;
- the KnowTo Drive North Dakota FAQ, which does publish the 60-minute limit, the
  fee and the retake rules but not the length or the score;
- NDCC 39-06-13 and 39-06-04, which describe the examination's *contents*
  ("eyesight; ability to read and understand highway signs regulating, warning,
  and directing traffic; and knowledge of the traffic laws of this state") but
  set no length or threshold;
- NDAC article 37-03, the department's own driver-licensing rules, chapters
  37-03-01 through 37-03-05, all five read in full;
- the archived NDDOT Drivers License FAQ (capture 2022-11-29), whose answers
  load by script and could not be retrieved as text.

`officialTest` therefore carries **25 questions, 20 to pass (80%)** because the
sets need a target and that is the figure every North Dakota testing and study
source uses. It is *not* an NDDOT figure, and the first entry in
`officialTest.notes` says so in the learner's own reading, in those words. The
only corroboration outside third-party prep sites is a 2020 r/northdakota
comment from a resident describing the process ("Take 25 question written test
and get 20 questions right"), which is a learner report and is treated as one.

What was done instead of inventing confidence: the note tells the learner to
study the whole manual rather than to a pass mark, and the one exam parameter
that *is* officially published - the 60-minute limit - is labelled as such.

### Road test

Waivable. Presenting a North Dakota Driving School Certificate of Course
Completion, or a Department of Public Instruction Student Completion
Certificate, certifying 30 hours of classroom and six hours of behind-the-wheel
training approved by the NDDOT director, waives the Class D road test (manual,
page 4). Applicants furnish their own vehicle, which is inspected first;
**self-parking vehicles are barred** and the feature must be deactivated or a
different vehicle used. Passengers, pets and electronic devices are not allowed
in the car during the test.

---

## 3. Section and page map

The manual's printed page numbers run **four behind the PDF page numbers**
(printed page 20 = PDF page 24). Snippet manifest pages are PDF pages.

Table of contents, printed pages:

| Chapter | Printed page |
|---|---|
| Your Operator's License | 2 |
| Signs, Signals, and Road Markings | 9 |
| Rules of the Road | 19 |
| Driving Skills and Emergency Situations | 27 |
| Drinking, Drugs, and Driving | 35 |
| Pedestrian Traffic and Recreational Vehicles | 37 |
| Parent/Guardian Driver Coaching Tips | 40 |
| Supervised Driving Log | 45 |

Section-level map used for the excerpt `section` fields, printed pages:

| Section | Page |
|---|---|
| Driver License Offices, General Information, Check List for Testing | 1 |
| Road Test Items, Vehicle Inspection, Your Operator's License | 2 |
| Exemptions, People Who Cannot Get a License, Permits | 3 |
| Road Test Waiver, Applying for a License or Permit | 4 |
| Proof of SSN, Proof of Address, Examinations | 5 |
| Organ, Tissue, and Eye Donation; Minors Driver License | 6 |
| Restrictions, Renewals, Duplicate Licenses/Permits | 7 |
| Change of Name or Address, Registering Your Motor Vehicle, Classes of Licenses | 8 |
| Signs; Regulatory Signs | 9-10 |
| Warning Signs | 11-12 |
| Channelizing Devices, Flashing Arrow Panels, Construction and Maintenance Devices | 13 |
| Flagpersons, Work Zone Safety Tips, Guide Signs | 14 |
| Signals; Traffic Signals; Flashing Indications | 15 |
| Turn Indications, Pavement Markings | 16 |
| Divided Roadways, Two-Way Left Turn Lane, Stop Intersections | 17 |
| Railroad Crossings, Types of Crossings, ENS | 18 |
| Hand Signals, Rules of the Road, Right of Way | 19 |
| Right of Way (cont.), Speed Limits | 20 |
| Passing, Lane Changes, Following and Stopping Distances | 21 |
| Turning, three-second rule | 22 |
| Roundabouts, Interstate Driving | 23 |
| Interchanges, Night Driving | 24 |
| Parallel Parking, Parking on a Hill | 25 |
| Leaving a Parking Space, Emergency Parking, Do Not Park, Towing, Coasting Prohibited | 26 |
| Backing, Littering, Crash Reports, Liability Insurance, Winter Driving | 27 |
| Winter Driving (cont.), Meeting Snow Removal Equipment | 28 |
| Skids, Rain, Flooding | 29 |
| Flat Tire or Blowouts, Running off the Pavement, Equipment Failure, Reading the Road, Distracted Driving, Driving Posture, Fatigue | 30 |
| Sharing the Road with Trucks | 31 |
| Trucks (cont.), Move Over, Sharing the Road with Motorcycles | 32 |
| Motorcycles (cont.), Sharing the Road with Bicycles, Seat Belts | 33 |
| Wear Your Belt Correctly, Air Bags, Child Restraints | 34 |
| Heatstroke, Drinking Drugs and Driving, Alcohol | 35 |
| Effects of Alcohol, Implied Consent, Driving While Under the Influence | 36 |
| DUI penalties (cont.), Open Container Law, Minor in Possession, Drugs, Pedestrians | 37 |
| Bicycles and Motorized Bicycles, Off-Highway Vehicles | 38 |
| Off-Highway Vehicles Rules, Snowmobiles | 39 |
| Point System, Withdrawal of Parental Consent, Driving Risks | 40 |
| High-Risk Driving Conditions, Tips for Supervising Teen Driving | 41 |
| Driving Rules/Guidelines for Your Family, Impose Consequences | 42 |
| Teen-Driver Training Orientation, Top 11 Driving Errors, Aggressive Driving | 43 |
| Blind spot exercise | 44 |
| Supervised Driving Log | 45 |
| Index | printed pages unnumbered, PDF 52-54 |

---

## 4. What the handbook does not say

North Dakota's manual is better than most at printing its own numbers - all
eight speed limits, all the parking distances it uses, the 100-foot signalling
rule, and the flat fines for littering, work zones, uninsured driving and child
restraints. The gaps are narrower and, correspondingly, easier to fall into.

| Number or rule the test can reach | Where it actually lives |
|---|---|
| 20 mph when the driver's view of the highway ahead is obstructed within 100 feet - a **ninth** speed limit missing from the manual's list of eight | NDCC 39-09-02(1)(d) |
| The definition of "obstructed" for the railway (400 ft each way in the last 200 ft) and intersection (200 ft in the last 50 ft) speed rules | NDCC 39-09-02(1)(a), (c) |
| The basic-speed rule - not faster than is reasonable and prudent under the conditions | NDCC 39-09-01(1) |
| **The school-bus exception**: no duty to stop on a highway with separate roadways when the bus is on a different roadway, or on a controlled-access highway where the bus is in a loading zone pedestrians may not cross to | NDCC 39-10-46(5) |
| The 300-to-500-foot window in which a bus driver may switch on amber caution lights | NDCC 39-10-46(3) |
| That a bus running for a non-school purpose must cover its SCHOOLBUS markings | NDCC 39-10-46(2) |
| That passing a stopped school bus is **6 points** | NDCC 39-06.1-10(22) |
| **A driver under 18 is cancelled above five points**, not suspended at twelve | NDCC 39-06-01.1(1); NDDOT points page, "6 or more points" |
| That the 100-foot signal applies to moving right or left on a roadway and to merging, not only to turns; and that you must signal before stopping or suddenly slowing | NDCC 39-10-38(2), (3) |
| No parking within 15 feet of the nearest rail of a railroad crossing | NDCC 39-10-49(9) |
| No parking within 20 feet of a fire station driveway, or 75 feet opposite it where signposted | NDCC 39-10-49(10) |
| That the 3-foot bicycle clearance must be **maintained until safely clear** | NDCC 39-10-11.1 |
| That the seat belt law is now **primary enforcement** | NDCC 39-21-41.5 repealed by S.L. 2023 ch. 362 s. 2, leaving 39-21-41.4 standing alone |
| The seat belt exemptions (documented medical condition, rural mail carriers on duty, farm vehicles and implements of husbandry, EMS during patient care, all belts already in use) | NDCC 39-21-41.4 |
| What the texting ban actually covers - calls, dialling, navigation and hands-free use are all excluded; a temporary halt at a signal or sign still counts as "traffic" | NDCC 39-08-23(2)(a), (2)(b), (3) |
| That a licensed 16- or 17-year-old may not use an electronic communication device at all | NDCC 39-08-24 |
| That an instruction-permit holder of **any age** may not use one at all | NDCC 39-06-04(5) |
| The $50 fee for an open-container violation, and that a glove or utility compartment counts as occupied space | NDCC 39-08-18(1) |
| That a parent or guardian must certify they monitored an online examination before a permit issues | NDCC 39-06-13(2)(b) |
| The $10 online examination fee | NDCC 39-06-13(2) |
| That a restricted Class D holder may not carry more passengers than the manufacturer's suggested capacity | NDCC 39-06-17(4)(b) |
| That an electronic operator's licence satisfies the carry requirement, and the 14-day cure with the prosecutor | NDCC 39-06-16 |
| Studded tires may be used on **school buses at any time of year** | NDCC 39-21-40(3) |
| Retest required if the licence has been expired more than one year | NDDOT, Driver License Requirements |
| That the minimum driving age is 16 and a non-resident under 16 may not drive in ND at all | NDDOT, Driver License Requirements; manual, Exemptions |

NDAC article 37-03 was read in full and supplied nothing the statute did not
already give. It is listed in section 1 as read, and is cited nowhere.

---

## 5. Conflicts

**No flat contradictions were found between the manual and the statute.** Every
divergence is the manual being silent or being less specific, not being wrong.
Four are worth recording:

1. **School bus, both directions.** The manual (page 20) says "drivers
   approaching from both directions must stop", with no exception. NDCC
   39-10-46(5) supplies one for a highway with separate roadways. Resolution:
   `nd_s5_01` tests the statutory exception explicitly and names the manual's
   silence in its own explanation, so a learner who has read only the manual is
   not left thinking the question is a trick. The undivided-road questions
   (`nd_s1_21`, `nd_s6_29`) are set on roads where both readings agree.

2. **Point threshold for a minor.** The manual's Point System chapter (page 40)
   gives only the adult figure, 12. NDDOT's points page gives "6 or more points"
   for a driver under 18 and NDCC 39-06-01.1(1) gives "in excess of five
   points". Resolution: both figures are taught and labelled - `nd_s4_01` is the
   adult 12, `nd_s5_03` is the minor 6 - and the minor question cites NDDOT's
   page rather than the manual.

3. **Seat belt enforcement.** The manual says the law "requires all occupants to
   wear seat belts in all seating positions" and is silent on enforcement.
   NDCC 39-21-41.5 (Secondary enforcement) was repealed in 2023. Resolution:
   `nd_s5_04` is built on the repeal and cites the statute; `nd_s1_10` teaches
   the manual's rule, which is unaffected.

4. **Permit terminology.** The manual and NDCC 39-06-04 say "Class D instruction
   permit"; NDDOT's public page says "learner's permit". Both are official and
   both refer to the same document. Resolution: `licenceName` uses the statutory
   form and the bank uses both, since a learner will meet both.

One further note on a possible reading conflict rather than a real one: the
manual gives "Use your headlights from sunset to sunrise" while NDCC 39-21-01(1)
adds "and every farm tractor ... from a half hour after sunset to a half hour
before sunrise". The half-hour figures belong to farm tractors and to the
parking-lamp rule, not to ordinary driving. `nd_s2_13` is written so both
readings give the same answer, and its trap note names the confusion.

---

## 6. What learners report

`python scripts/fetch-reddit.py northdakota northdakota:"permit test"
northdakota:"knowledge test failed" fargo:"DMV written test" DMV:"North Dakota
knowledge test" newdrivers:"North Dakota permit" drivingtest:"North Dakota"
northdakota:"drivers license test" bismarck:"drivers license"` saved **55
threads** to `tmp/northdakota-reddit-*.txt`. Fourteen carried usable material;
the rest were about registration, plates, politics or car repair. No verbatim
comment text is reproduced anywhere in the bank, and nothing anyone recalled
from a real exam was used as a question - only the RULE they named, rewritten
from the manual.

| Sub | Thread | Year | What it says (paraphrase) | Shaped |
|---|---|---|---|---|
| r/fargo | "Any tips or advice on Fargos Road Test?" | 2020 | Repeated, independent reports that **any** amount over the limit costs you: docked for 27 in a 25, failed for 40 in a 35, failed for 2 mph over after picking up speed in an underpass dip. Also: stop *before* crosswalks; exaggerate head movements at intersections; look left, right, left again; check the bulbs and horn before you go. | `nd_s5_08`, `nd_s5_20`, `nd_s4_33`, `nd_s3_35`, `nd_s2_29` |
| r/northdakota | "Driving Test" | 2025 | A poster failed the road test for **23 mph in a school zone**. Others: do not speed at all, complete stops at every sign and light, never stop in a crosswalk, and "actually read and study the information for the written test - it's the main reason people fail to get a license on the first try". | `nd_s5_08`, `nd_s5_20`, `nd_s1_08` |
| r/fargo | "Driving road test" | 2024 | The examiner who administers the tests says the **most common infraction is forgetting the turn signal when leaving a parallel parking space**. Also: the road right around the Fargo site is 25 mph; six hours of behind-the-wheel driver ed waives the road test. | `nd_s5_13`, `nd_s2_30`, `nd_s1_07` |
| r/northdakota | "Driving" | 2025 | Winter rant with two concrete complaints: drivers running only daytime running lights in a snowstorm so their tail lamps are dark, and drivers **stopping inside roundabouts** in the Bismarck / Mandan / Lincoln area. | `nd_s5_07`, `nd_s5_14`, `nd_s2_14` |
| r/northdakota | "License requirements for 15 yr old" | 2023 | Parents confused about whether the driver-ed certificate waives the state road test (it can), about the restricted licence's night restriction, and about the passenger limit - correctly described as "if the car has 5 seat belts, there can only be 5 people". | `nd_s3_17`, `nd_s5_12`, `nd_s5_35` |
| r/northdakota | "Who needs a 'permit' for driving?" | 2023 | Adults arguing about whether a permit is needed at all before the road test. It is: you cannot take the road test without one, and the examiner asks for it before getting in the car. Adults simply have no minimum holding period. | `nd_s1_11`, `nd_s5_06` |
| r/northdakota | "Asking for Advice for a 24 year old with a learning permit" | 2026 | An adult permit holder with no one to supervise. Confirms the supervising-driver requirement bites at any age, which is the same reason the permit phone ban bites at any age. | `nd_s1_12`, `nd_s5_06` |
| r/northdakota | "What are the steps an adult takes to get a driver's license for the first time?" | 2020 | A resident describing the process states 25 questions, 20 to pass, and no waiting period between the written and road tests for adults. **Treated as a learner report, not as a source** - see section 2. | `officialTest` notes |
| r/northdakota | "Quick question about different driver's licenses" | 2023 | Temporary operator's permits for new arrivals whose documents are still being verified. | background |
| r/fargo | "Anxious about taking Written and Driving Test" | 2024 | New resident required to take both tests again; several replies that the permit test is short and easy, and that parallel parking is sometimes done behind a single parked car rather than between two. | background |
| r/fargo | "Does anyone know how the drivers test in Fargo works?" | 2025 | The Fargo route has been stable for years and includes a parallel park on 10th. | background |
| r/northdakota | "Jamestown Driver's Road Test" | 2024 | You can fail the parallel park and still pass overall if everything else is clean. | background |
| r/fargo | "New License Question" / r/bismarck "Is the DMV really appointment only?" | 2025 | Appointment availability is the practical obstacle rather than the test. Cancellations open up if you check repeatedly; smaller offices (Grand Forks, Devils Lake) are quicker than Fargo. | `officialTest` notes |
| r/northdakota | "Getting a license without an address" | 2025 | Proof-of-address requirements are what stops people, not the exam - two documents, no PO boxes. | `officialTest` notes |

### The three strongest traps found

1. **The school-zone limit is 20, not 25.** Two independent posters describe
   losing road-test marks or failing outright at 23 mph in a school zone, and
   the reason is structural: a school zone sits inside a residential district,
   whose default is 25, so the number most drivers are carrying is the wrong
   one by five. `nd_s5_08` and `nd_s1_08`.

2. **The signal when leaving a parallel parking space.** A Fargo poster reports
   being told by the person who administers the tests that this is the single
   most common infraction. Drivers treat pulling out as a parking manoeuvre
   rather than as entering traffic, so the signal - which the manual puts second
   in a four-step sequence - is the step that gets dropped. `nd_s5_13`.

3. **Daytime running lights are not headlights in a ground blizzard.** The
   single most-upvoted complaint about North Dakota winter driving is cars
   invisible from behind because the driver assumed the running lights were
   doing the job. NDCC 39-21-01 requires lighted headlamps *and taillamps*
   whenever snow leaves a vehicle not clearly discernible at 1,000 feet, at any
   hour of the day. `nd_s5_07`.

---

## 7. Local gotchas

The eight entries in `localGotchas`, and why each catches people:

1. **School zone 20 mph, not 25.** The forum-reported failure above. The two
   numbers are five apart and the zones overlap geographically.
2. **Under 18 is cancelled at six points, not suspended at twelve.** The manual
   prints only the adult figure, so a teenager studying from the book alone gets
   a threshold that is wrong by half for them. One school-bus violation is six
   points on its own, and cancellation is worse than suspension - the driver is
   deemed never to have held a licence and starts again from a permit, with the
   point total *not* reset.
3. **Parking distances are 10 and 15, not 15 and 30.** ND uses 10 feet for a
   hydrant and 10 for a crosswalk at an intersection, and 15 for a stop sign,
   beacon or signal. Most states use 15 for the hydrant. Any practice bank that
   lifts a generic parking question gets North Dakota wrong.
4. **The school-bus divided-highway exception is statutory, not in the manual.**
   Section 4 above.
5. **Seat belts became primary enforcement in 2023 and the manual is silent.**
   Section 5 above.
6. **Three different phone rules, and the strictest applies to permit holders of
   any age.** An adult with a full licence may lawfully hold a phone to a call
   but not text; a licensed 16- or 17-year-old may not use a device at all; and
   anyone on an instruction permit, including a 40-year-old new resident, may
   not use one at all. That last one surprises adults who have driven legally
   elsewhere for years.
7. **Unposted paved two-lane county and township roads are 55, not 65.** The 65
   entry in the manual's list carries "if posted for that speed", and North
   Dakota county roads frequently carry no sign for miles. The statute also adds
   a 20 mph limit whenever the view ahead is blocked within 100 feet, which the
   manual omits from its list of eight.
8. **Daytime running lights are not headlights.** Section 6 above.

---

## 8. Verification

Run 2026-09-07.

```
$ npx tsx scripts/extract-quotes.mjs northdakota
tmp/northdakota-quotes.json: 470 quotes

$ python scripts/verify-excerpts.py northdakota tmp/northdakota-handbook.pdf \
      tmp/northdakota-statute.txt tmp/northdakota-webpages.txt
northdakota: 470/470 quotes verified verbatim against 3 source(s)
```

Zero MISS, zero NON-OFFICIAL, zero MANGLED. Receipt at
`tmp/northdakota-verify.json`, fingerprinted over the exact key+quote pairs
checked.

`tmp/northdakota-statute.txt` is the concatenated PyMuPDF text of NDCC chapters
39-06, 39-06.1, 39-08, 39-09, 39-10 and 39-21.
`tmp/northdakota-webpages.txt` is the visible main-content text of the four
dot.nd.gov pages plus the KnowTo Drive North Dakota FAQ and landing page.

```
$ python scripts/build-excerpt-snippets.py northdakota tmp/northdakota-handbook.pdf
northdakota: 372 snippets rendered, 31 not located, 67 skipped as not in this document
```

The 67 skipped are the 48 statute quotes and the 19 web-page quotes, which are
correctly not in the manual PDF. Of the 403 manual quotes, **372 rendered, or
92%**. The 31 not located are quotes that span a column or page break in a way
`search_for` cannot anchor. Three rendered PNGs were opened and inspected
(`speed-school`, `row-four-way-stop`, `park-hydrant-10`): the crop snaps to the
text column, no line has its first letter shaved, and the highlight sits on the
quoted sentence.

```
$ npx tsx scripts/validate-driving.mjs --only northdakota

=== North Dakota (ND) - 6 sets ===
  snippets: 372 in manifest, 372/470 excerpts covered (79%)
  quotes verified: 470/470 verbatim against northdakota-handbook.pdf, northdakota-statute.txt, northdakota-webpages.txt (2026-09-07)
  excerpts: 470 (287 unused), questions wired: 195/195 (100%), quoted total: 65.8k chars
  questions: 195
  answer positions: A:25% B:28% C:25% D:23%
  context: 100%  source links: 100%  starred: 19%
  topics: licensing:25 rules:23 signs:19 safety:19 emergencies:19 sharing:18 rightOfWay:16 impairment:15 signals:14 speed:14 parking:13

==================================================
ERRORS: 0   WARNINGS: 0
```

```
$ npx tsc --noEmit -p .
(no output)
```

### On the 287 unused excerpts

The library is larger than the questions strictly need. That is deliberate and
follows the playbook's own instruction not to delete a verified quote to hit a
count: 403 of the 470 are the manual's operative sentences, section by section,
so a learner reading the excerpt library gets the book's rules in the book's own
words rather than only the 183 the questions happen to reference. Every one is
verified verbatim and every one carries a section and a deep link.
