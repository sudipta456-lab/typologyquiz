# Nevada - research note

Bank: `src/lib/driving/nevada/`. Slug `nevada`, code `NV`, license `Class C
Instruction Permit`. `contentDate` 2026-09-06, `handbookEdition` "March 2024
(DMV 700)". 195 questions in six sets, 305 excerpts.

---

## 1. Sources read

| # | Source | Publisher | Edition label | URL | Fetched | How |
|---|---|---|---|---|---|---|
| 1 | Nevada Driver's Handbook | Nevada Department of Motor Vehicles | "DMV 700 / March 2024" on the cover; "(c) 2024 Nevada Department of Motor Vehicles" on the inside cover | https://dmv.nv.gov/pdfforms/dlbook.pdf | 2026-09-06 | Direct download, HTTP 200, 3.6 MB, 86 pages |
| 2 | NRS Chapter 483 - Drivers' Licenses | Nevada Legislative Counsel Bureau | "[Rev. 4/15/2026]" | https://www.leg.state.nv.us/NRS/NRS-483.html | 2026-09-06 | Internet Archive snapshot 2026-07-03 of the same official URL |
| 3 | NRS Chapter 484A - Traffic Laws Generally | Legislative Counsel Bureau | "[Rev. 4/15/2026 3:08:58 PM--2025]" | https://www.leg.state.nv.us/NRS/NRS-484A.html | 2026-09-06 | Internet Archive snapshot 2026-06-11 |
| 4 | NRS Chapter 484B - Rules of the Road | Legislative Counsel Bureau | "[Rev. 4/15/2026]" | https://www.leg.state.nv.us/NRS/NRS-484B.html | 2026-09-06 | Internet Archive snapshot 2026-08-25 |
| 5 | NRS Chapter 484C - Driving Under the Influence | Legislative Counsel Bureau | "[Rev. 4/15/2026]" | https://www.leg.state.nv.us/NRS/NRS-484C.html | 2026-09-06 | Internet Archive snapshot 2026-06-07 |
| 6 | NRS Chapter 484D - Equipment, Inspections, Size, Weight and Load | Legislative Counsel Bureau | "[Rev. 4/15/2026 3:10:56 PM--2025]" | https://www.leg.state.nv.us/NRS/NRS-484D.html | 2026-09-06 | Internet Archive snapshot 2026-06-06 |
| 7 | NRS Chapter 484E - Accidents and Accident Reports | Legislative Counsel Bureau | "[Rev. 4/15/2026]" | https://www.leg.state.nv.us/NRS/NRS-484E.html | 2026-09-06 | Internet Archive snapshot 2026 |
| 8 | NRS Chapter 486 - Motorcycles and Similar Vehicles | Legislative Counsel Bureau | "[Rev. 4/15/2026 3:12:05 PM--2025]" | https://www.leg.state.nv.us/NRS/NRS-486.html | 2026-09-06 | Internet Archive snapshot 2026 (read for context; no quote taken) |
| 9 | Driver License Testing | Nevada DMV | undated web page | https://dmv.nv.gov/dltesting.htm | 2026-09-06 | Direct |
| 10 | Get a Teen Instruction Permit | Nevada DMV | undated web page | https://dmv.nv.gov/dlipteens.htm | 2026-09-06 | Direct |
| 11 | Get Your Teen License | Nevada DMV | undated web page | https://dmv.nv.gov/getdlteens.htm | 2026-09-06 | Direct (read for the GDL restrictions; no quote taken) |
| 12 | Driver Education for Teens | Nevada DMV | undated web page | https://dmv.nv.gov/driveeduteens.htm | 2026-09-06 | Direct (read; no quote taken) |
| 13 | Nevada Teen Driving; Driver Handbooks; Demerit Points; Traffic Laws; Suspensions | Nevada DMV | undated web pages | dmv.nv.gov/nvdlteens.htm, dlhandbook.htm, dlpoints.htm, dltrafficlaws.htm, dlsuspension.htm | 2026-09-06 | Direct (read for corroboration; no quote taken) |

**Why the statute came from the Internet Archive.** `leg.state.nv.us` sits behind
Cloudflare and returns "Sorry, you have been blocked" to every automated client
from this machine - curl (HTTP 403, 4.5 KB) and a headless Chromium via
Playwright both. The Wayback Machine holds clean captures of the same official
URLs, and those are what were read. The `url` on every statute excerpt is the
live official one. Note that some Wayback captures of these chapters are
themselves captures of the Cloudflare block page (recognizable at ~6 KB); the
timestamps in the table above are captures that carry the real chapter text.

**Handbook edition.** The cover carries the publisher's only label: "OFFICIAL
DRIVER HANDBOOK / DMV 700 / March 2024". The inside cover adds a 2024 copyright
line and a "Key Changes in This Edition" list (page 8 permanent resident cards,
page 20 medical indicators, page 67 blind pedestrians). `dlhandbook.htm` links
`dlbook.pdf` as the current English edition alongside an archived
`dlbook-2021.pdf`, which confirms the March 2024 file is the live one.

**Handbook page numbering.** The printed page number and the PDF page number are
the same throughout - printed page 6 is PDF page 6, printed page 84 is PDF page
84 - so every `#page=N` anchor in the bank points at the page named in the
`section` field. This was checked by extracting the first and last text line of
all 86 pages, not assumed.

---

## 2. Test format

All from https://dmv.nv.gov/dltesting.htm unless noted.

| Item | Value | Source |
|---|---|---|
| Questions | 25 multiple-choice, Class C non-commercial | dltesting.htm, Knowledge (Written) Test |
| Pass mark | 80 percent, i.e. 20 of 25 | dltesting.htm |
| Early stop | "The test will stop when you have reached 20 correct answers or six incorrect." | dltesting.htm |
| Time limit | None stated on any official page | dltesting.htm (absence) |
| Where | DMV office touch screen (English or Spanish, audio available), or online at KnowToDrive Nevada | dltesting.htm |
| Fee | $25 for the first knowledge and skills test, $10 per retest; KnowToDrive charges $6.75 per attempt on top | dltesting.htm, Fees; handbook page 12 and page 23 |
| Retest wait | No waiting period stated on any official page | dltesting.htm (absence) |
| Accommodation | Oral examination on request for anyone with trouble reading; approved interpreter permitted for the written test but never for the drive test | Handbook page 12; dltesting.htm, Interpreters |
| Vision | 20/40 minimum for full privileges; Restriction B if correction is needed | dltesting.htm, Vision Test |
| Result validity | The instruction permit it produces is valid 1 year; expired more than 30 days means retaking the test | dlipteens.htm |
| Permit age | 15 1/2 | dlipteens.htm; handbook page 15 |
| Permit hold | At least 6 months before a license, under 18 | Handbook page 15 |
| Supervised hours | 50, ten at night, within 30 miles of an approved school; 100, ten in the dark, otherwise | Handbook page 14 |
| Under-18 extras | Parent/guardian co-signature, DMV 301 Certification of Attendance dated within 60 days, driver education certificate, DLD-130 log | Handbook pages 13-14; dlipteens.htm |

No official Nevada page states a time limit or a mandatory wait between
attempts. `officialTest.timeLimitMinutes` is therefore omitted rather than
guessed, and the notes say the test stops early in both directions instead.

---

## 3. Section and page map

Printed page = PDF page throughout.

| Chapter / section | Page |
|---|---|
| About this handbook, Key Changes in This Edition | 3 |
| Table of Contents | 4-5 |
| **Ch 1 - Getting Your Nevada Driver's License** | 6 |
| New Nevada Residents | 7 |
| Documents You Will Need | 8 |
| Real ID | 9 |
| Driver Authorization Card (DAC) | 10 |
| Proof of Nevada Residency | 11 |
| Testing (vision, knowledge, skills) | 12 |
| Young Drivers; School Attendance | 13 |
| Driver Education; Behind the Wheel Experience | 14 |
| Instruction Permits; Passenger Restrictions and Curfews | 15 |
| Driver License Classifications; Restrictions | 16 |
| Endorsements; Commercial Driver License | 17 |
| Motorcycle Instruction Permit and License | 18 |
| Renewals; Change of Address or Name; Restricted License | 19 |
| Duplicate License; Identification Cards; Veteran Designation; Medical Indicator | 20 |
| Organ Donors | 21 |
| Human Trafficking | 22 |
| Fees | 23-24 |
| **Ch 2 - Buckle Up**; Unattended Children and Pets | 25 |
| Traveling with Babies and Children | 26 |
| **Ch 3 - Driving Safely**; Getting Ready to Drive; Tire Safety | 27 |
| The Rules of the Road; Signs (shapes and colors) | 28 |
| Signs (stop, yield, regulatory, warning, railroad, route) | 29 |
| Construction signs; Signals | 30 |
| Pedestrian Crossing; Walk and Don't Walk Signals | 31 |
| Highway Markings | 32 |
| Railroad Crossings; School Areas | 33 |
| Right-of-Way; Pedestrian Right-of-Way | 34 |
| Controlling Speed | 35 |
| Freeway Driving; Ramp Meters | 36 |
| Active Traffic Management Signs | 37-38 |
| High-Occupancy Vehicle Lanes | 39 |
| Exiting a Freeway; Anti-Lock Braking Systems | 40 |
| Stopping (stopping distance table) | 41 |
| Defensive Driving Tips | 42 |
| Cell Phones and Texting; If You Are Stopped by Law Enforcement | 43 |
| Roundabouts | 44 |
| Signaling; Turning | 45 |
| Lane Changes; U-Turns | 46 |
| Passing Another Vehicle | 47 |
| Passing Bicyclists; Passing Parked Vehicles; Parking; Colored Curb Markings | 48 |
| Parallel Parking; Parking on a Hill | 49 |
| No Parking Allowed; In an Emergency; International Symbol of Access | 50 |
| **Ch 4 - Advanced Driver Assistance Systems** | 51-55 |
| **Ch 5 - Special Driving Conditions**; Night Driving | 56 |
| Driving in Bad Weather; Skidding; Driving Emergencies | 57 |
| Driving Emergencies (brakes, wipers, accelerator, fire, steering) | 58 |
| Running Off the Pavement; Blowouts; Tips for Driving in a Flash Flood | 59 |
| Flash Flood (cont.); Highway Work Zones | 60 |
| Approaching a Stopped Emergency Vehicle | 61 |
| **Ch 6 - Sharing the Road**; Commercial Vehicles | 62 |
| Front/Rear No-Zones; Wide Right Turns; Motorcycles | 63 |
| Motorcycles (cont.); Mopeds; School Buses | 64 |
| Bicycles | 65 |
| Passengers in the Bed of a Truck; Pedestrians | 66 |
| Pedestrians Who are Blind or Visually Impaired | 67 |
| **Ch 7 - Towing**; Loading and Securing a Trailer | 68 |
| Securing a Trailer | 69 |
| Inspecting Your Trailer; Towing Safely | 70 |
| Backing With a Trailer; Right Turns | 71 |
| Left Turns; Space Needed; Space Overhead and Underneath | 72 |
| Towing Multiple Vehicles | 73-74 |
| **Ch 8 - Insurance and Financial Responsibility** | 75 |
| SR-22; What to Do in a Crash | 76 |
| **Ch 9 - Your Driving Record**; Demerit Point System | 77 |
| Demerit point schedule | 78 |
| **Ch 10 - Driving Under the Influence** | 79 |
| Penalties for DUI | 80 |
| DUI Laws for Young Drivers; Other DUI Laws; Clues | 81 |
| **Ch 11 - License Suspensions and Revocations** | 82 |
| **Ch 12 - New Resident Vehicle Registration Requirements** | 83 |
| **Ch 13 - Office Locations** | 84 |
| Acknowledgements | 85 |

---

## 4. What the handbook does not say

Nine numbers the test can reasonably ask for that the March 2024 handbook omits
or states loosely, with the statute that supplies them.

1. **A maximum speed limit.** Page 35 prints a table headed "EXAMPLES OF SPEED
   LIMITS IN NEVADA" and stops at "70+ mph". It never states a ceiling.
   **NRS 484B.613(2)** caps what NDOT may post at 80 mph, and
   **NRS 484B.600(1)(e)** makes any speed over 80 unlawful "in any event".
   Questions `nv_s3_01`, `nv_s5_31`.
2. **The operative signaling rule.** Page 45 says "at least 100 feet ahead ...
   or 300 feet". **NRS 484B.413(2)** states it as a continuous signal for not
   less than the last 100 feet in a business or residential district and not
   less than the last 300 feet elsewhere, "regardless of the weather".
   Question `nv_s3_03`.
3. **Seat belt enforcement and penalty.** Page 25 says only that seat belts
   "are the law". **NRS 484D.495(3)** makes it a secondary offense - a citation
   may issue only where the violation is discovered after the vehicle was halted
   or the driver arrested for something else - with a civil penalty of not more
   than $25, and **(4)(a)** says it is not a moving traffic violation, so no
   demerit points. Question `nv_s5_12`.
4. **The dead-red rule.** Nowhere in the handbook. **NRS 484B.307(8)(d)** lets a
   motorcycle, moped, trimobile, bicycle, electric bicycle or electric scooter
   proceed after waiting two complete signal cycles at a signal that malfunctions
   or fails to detect it. Question `nv_s5_11`.
5. **Who the restricted license is actually for.** Page 19 gives two lines.
   **NRS 483.270(1)(a)** limits the school version to pupils in a county of
   fewer than 55,000 people or a city or town under 25,000, where the district
   does not provide transport; **NRS 483.267** covers the separate medical
   hardship case. Question `nv_s5_04`.
6. **The truck following distance.** Page 42 gives the two-second rule for cars.
   **NRS 484B.127(2)** requires a truck or combination 80 inches or more wide
   following another of the same size to leave 500 feet where conditions permit.
   Question `nv_s5_20`.
7. **The rural daylight speeding band.** Not in the handbook.
   **NRS 484B.617** provides a $25 civil penalty, not recorded on the driving
   record and not a moving violation, for specified daylight overages on rural
   highways. Question `nv_s4_06`.
8. **The school bus penalty ladder.** Page 64 describes the duty and the warning
   letter. **NRS 484B.353(3)(a)** supplies the third-offense-in-two-years figure:
   a fine of not more than $1,000 and suspension for not more than a year.
   Question `nv_s5_33`.
9. **Hit and run.** Page 76 lists what to do at a crash. **NRS 484E.010(3)**
   supplies the penalty for leaving: a category B felony, 2 to 20 years, $2,000
   to $5,000, and a separate offense per person injured or killed.
   Question `nv_s5_16`.

The 25-question format, the 20-correct/6-incorrect stop, the fees, the 20/40
vision standard and the permit expiry rule are on `dltesting.htm` and
`dlipteens.htm` rather than in the handbook. Those pages are quoted directly.

---

## 5. Conflicts

**a. Marijuana per se limits. Handbook vs statute - flagged, not used.**
Page 79 states flatly that "it is still unlawful for any person to drive ...
with an amount of marijuana ... greater than two nanograms per milliliter of
blood (five nanograms per milliliter of blood for marijuana metabolite)". Since
the 2021 amendment those figures sit in **NRS 484C.110(4)**, which by its own
terms applies only to violations punishable under NRS 484C.400(1)(c),
484C.410, 484C.430 or 484C.440 - the felony-level offenses. The general
prohibition in subsection 2 is impairment-based, and marijuana does not appear
in the subsection 3 per se table at all. **Resolution:** no question in this
bank turns on the marijuana numbers. The impairment questions are built on
0.08 (`nv_s1_29`, `nv_s6_08`), the under-21 0.02 threshold (`nv_s1_08`,
`nv_s5_13`), implied consent (`nv_s2_12`, `nv_s5_23`) and the penalty schedule
(`nv_s3_08`, `nv_s4_09`, `nv_s4_31`, `nv_s6_18`), all of which read the same way
under the handbook and the statute. The excerpt `dui-marijuana` is kept in the
library, quoting the handbook accurately, but no question references it.

**b. Two effective versions of several statutes.** NRS 484B.307, 484B.363,
484B.450, 484B.165, 484B.270, 484B.600 and 484C.110 each appear twice or more in
the published chapter, marked "[Effective through June 30, 2026]" and
"[Effective July 1, 2026]". On 2026-09-06 the July 1 reading is the operative
one. Where the two differ, the quote in `excerpts.ts` is taken from the July 1
text; where they are word-for-word identical (which is the case for every number
this bank uses) the distinction does not bite. NRS 484C.110 additionally carries
conditional 0.10 versions keyed to a repeal of the federal 0.08 highway-funding
mandate that has not happened; the 0.08 reading is the one in force and the one
quoted.

**c. School zone speed: 15 or 25?** Handbook page 33 says "either 15 or 25 mph"
and leaves it to the sign. NRS 484B.363(1) states 15 mph for a school zone.
There is no real conflict once the statute is read in full: NRS 484B.363(1)
sets 15 mph in a school **zone** and NRS 484B.363(2) sets 25 mph in a school
**crossing zone**, which is precisely the pair the handbook collapses into
"either 15 or 25". The bank asks the two separately and says which source it is
asking from: `nv_s1_05` asks what the
handbook gives (either 15 or 25), `nv_s5_10` asks what the statute provides (15).

**d. Handbook internal slip.** Page 25 reads "must be in an approved child
restraint system pursuant per NRS 484B.157". The words "pursuant per" are the
handbook's, and the excerpt `child-restraint` preserves them. Page 14 reads
"Nevada teens within a 30 miles of a DMV-approved driver's education school",
preserved in `bhw-50-hours`. Page 64 reads "Nevada defines these difference
based on motor size", preserved in `moped-def`. Page 21 prints "comes frst",
"fnancial" and "identifcation" where the ligature failed; no quote spans those
words.

---

## 6. What learners report

`python scripts/fetch-reddit.py nevada ...` was run twice, with 14 searches
across r/Nevada, r/vegas, r/LasVegas, r/Reno, r/DMV, r/driving, r/drivingtest,
r/newdrivers and r/Teenagers. It saved 101 threads to `tmp/nevada-reddit-*.txt`.
Most are about DMV appointment waits and vehicle registration; the threads below
are the ones that bear on the knowledge test. Paraphrase only - no comment text
is reproduced anywhere in this repo, and no recalled exam item was turned into a
question.

| Thread | Sub | Year | Paraphrase of the claim | Verified against | Shaped |
|---|---|---|---|---|---|
| "Permit Test" | r/Nevada | 2022 | A former DMV employee says the test is not timed, is 25 questions, needs 80 percent, and that questions may be skipped and returned to without penalty. Another commenter says their test ended the moment they gave a 20th correct answer. | dltesting.htm confirms 25 questions, 80 percent and the stop at 20 correct or six incorrect. No official page states a time limit. | `officialTest.notes`, `nv_s5_01` |
| "Permit Test" | r/Nevada | 2022 | A commenter reports missing a question on the minimum age to ride in the bed of a pickup, having assumed it was illegal for everyone; the answer was 18. | Handbook page 66: under 18 may not ride in a pickup bed on a paved highway, with parade and farm exceptions. | `nv_s4_32` |
| "Permit Test" | r/Nevada | 2022 | Two separate commenters name distance questions as the ones they got wrong, and a third names a sign-identification question. | Handbook pages 33, 45, 47, 50, 56 carry the distance set. | The distance battery in set 5 (`nv_s5_06` to `nv_s5_09`, `nv_s5_20`) and `nv_s5_34` |
| "DMV Written Test" | r/Nevada | 2024 | Poster is confused because the third-party practice tests they are using have 50 questions while the DMV site says 25. One replying commenter asserts the test is 50 questions needing 40 correct. | dltesting.htm: 25 questions, 80 percent. The 50-question claim is wrong. | `nv_s5_01`, and the reason the bank's intro states the count explicitly |
| "DMV Written Test" | r/Nevada | 2024 | A commenter repeats the skip-and-return strategy: skipped questions come back at the end, so skipping beats guessing early. | Consistent with the official early-stop rule (six wrong ends the test); the skip mechanic itself is not documented on any official page, so it is not asserted anywhere in the bank. | `officialTest.notes` phrasing only |
| "under 18 drivers permit" | r/Reno | 2022 | Several commenters disagree about whether driver education must be completed before the permit. The original poster resolves it by quoting the DMV: the course is not required for the permit, it is required for the license. | driveeduteens.htm and handbook page 13: the Certificate of Completion is presented when applying for the license. | `nv_s5_02` |
| "New Teen Driver DMV Test Question" | r/Reno | 2023 | A former DMV employee says a teen does not sit a second written test between permit and license as long as the permit has not expired by more than 30 days. | dlipteens.htm: permit valid 1 year, retake required if expired over 30 days. | `nv_s5_03` |
| "How long does a passed written knowledge test stay valid ... in Nevada" (two near-duplicate threads) and "Passed Nevada written drivers test" | r/DMV | 2023 | Repeatedly asked, never answered on the forum. | dlipteens.htm supplies it: one year, 30-day grace. | `nv_s5_03` |
| "Teen driving on permit" | r/Reno | 2024 | Commenters say Nevada has a restricted license from age 14 but that it excludes public school students in Carson City, Clark, Douglas and Washoe counties, and that it used to turn on living more than 15 miles from school. | NRS 483.270(1)(a) uses population thresholds - county under 55,000, or city/town under 25,000 - not a named-county list and not a distance. The named counties are the practical consequence, not the test. The official source wins and the distance belief becomes the trap. | `nv_s5_04` |
| "Teen driving on permit" | r/Reno | 2024 | One commenter states flatly that a Nevada permit holder must have a licensed driver aged 21 or over in the car at all times, with no school-run exception. | Handbook page 15 confirms 21 or over, one year of experience, seated beside the driver. | `nv_s5_05` |
| "(Nevada) Limit on Learner Permit" | r/DMV | 2025 | A commenter notes the DMV page states permits are valid one year and renewed in person, and says nothing about a cap on renewals, so there is probably none. | dlipteens.htm says the same. No cap is asserted anywhere in the bank, because none is documented. | Nothing - recorded so a later editor does not invent one |
| "Teen permit question" | r/Reno | 2025 | A parent whose teen passed the online test is unsure whether the teen may drive before the in-person DMV appointment. | dlipteens.htm: the permit is issued at the office after the vision test and documents; an interim paper permit is handed over then. | `officialTest.notes` |
| "DMV - Teen Driving Permit" | r/Reno | 2026 | Parents report the DMV 301 Certification of Attendance reverting to a paper form the school principal must sign, and appointments being lost to it. | dlipteens.htm requires the DMV 301, valid 60 days, signed by a school official. | `officialTest.notes` |
| "How valid is a passed written/knowledge test on KnowToDrive.com" | r/DMV | 2023 | Asked whether a KnowToDrive pass is accepted by the DMV. No useful answer on the thread. | dltesting.htm: results are transmitted to the DMV automatically for the purpose of issuing permits and licenses. | `officialTest.notes` |

Two official sources were worth more than any of the above, and both were used:
the DMV's own **Driver License Testing** page, which states the format the
handbook never mentions, and the **Get a Teen Instruction Permit** page, which
carries the permit validity and the 30-day rule.

### The three strongest traps found

1. **The test is 25 questions, not 50.** Third-party practice sites serve
   50-question tests and at least one forum commenter repeated that as fact.
   With only 25 real questions the margin is five wrong answers, and the test
   ends at six.
2. **Riding in a pickup bed is legal in Nevada at 18.** A commenter reported
   losing a question by assuming a blanket ban.
3. **Distances.** Named independently by three people as the hardest category,
   and Nevada's set is unusually varied: 15 or 20 feet from a hydrant depending
   on the parking layout, 20 feet from a crosswalk, 20 and 75 feet from a fire
   station driveway, 30 feet from a signal, 50 feet from a rail, 15 feet from
   the tracks when a train is coming, 100 and 300 feet for signals, 200 and 50
   feet in a center turn lane, 200 feet of visibility for a U-turn, 500 and 300
   feet for dimming high beams.

---

## 7. Local gotchas

The five in `jurisdiction.localGotchas`, and why each one catches people.

1. **School zones are 15 or 25 mph and the window is clock-based.** The limit
   runs from a half hour before school opens to a half hour after it closes on
   school days. Drivers wait to see a child before slowing, and the rule does
   not work that way. Handbook page 33; NRS 484B.363.
2. **The school bus exception is about division, not lane count.** Nevada
   requires a stop from either direction at any location. The only escape is a
   divided highway, and then only if you are traveling the other way. A
   four-lane undivided road releases nobody. Handbook page 64; NRS 484B.353.
3. **Signal distances are asked by the number.** 100 feet on city streets, 300
   feet on open highway, for turns, lane changes and passing alike. People know
   the rule and not the figures. Handbook pages 45-47; NRS 484B.413(2).
4. **Riding in a pickup bed is legal at 18.** Under-18s are barred on a paved
   highway, with parade and farming exceptions. Nearly everyone assumes a
   blanket ban, and a forum commenter reported failing exactly this item.
   Handbook page 66.
5. **No Nevada speed limit may exceed 80 mph.** The handbook's table stops at
   "70+" and never states a ceiling, so 70 looks like the answer. NDOT may not
   post above 80 and driving above 80 is unlawful in any event.
   NRS 484B.613(2), NRS 484B.600(1)(e).

---

## 8. Verification

Run 2026-09-06, in this order.

```
$ npx tsx scripts/extract-quotes.mjs nevada
tmp/nevada-quotes.json: 305 quotes

$ python scripts/verify-excerpts.py nevada tmp/nevada-handbook.pdf \
      tmp/nevada-statute.txt tmp/nevada-dmv-pages.txt
nevada: 305/305 quotes verified verbatim against 3 source(s)

$ python scripts/build-excerpt-snippets.py nevada tmp/nevada-handbook.pdf
nevada: 267 snippets rendered, 38 not located

$ python tmp/_prune_snippets.py
dropped ['nrs-bike-3-feet', 'nrs-follow-prudent', 'nrs-park-hydrant'] -> 264 snippets

$ npx tsx scripts/validate-driving.mjs --only nevada
=== Nevada (NV) - 6 sets ===
  snippets: 264 in manifest, 264/305 excerpts covered (87%)
  quotes verified: 305/305 verbatim against nevada-handbook.pdf, nevada-statute.txt, nevada-dmv-pages.txt
  excerpts: 305 (124 unused), questions wired: 195/195 (100%), quoted total: 46.0k chars
  questions: 195
  answer positions: A:25% B:25% C:26% D:24%
  context: 100%  source links: 100%  starred: 18%
  topics: rules:28 parking:19 licensing:18 safety:18 signs:17 signals:17
          rightOfWay:17 speed:17 sharing:16 impairment:15 emergencies:13
ERRORS: 0   WARNINGS: 0

$ npx tsc --noEmit -p .
(no output)
```

Five numeric questions had their choice ladders re-sorted into ascending order
after the first validator pass (`nv_s1_29`, `nv_s3_02`, `nv_s3_11`, `nv_s5_08`,
`nv_s5_21`), and four non-numeric questions had their choices reordered to keep
the answer-position balance even afterwards (`nv_s1_14`, `nv_s4_08`, `nv_s5_15`,
`nv_s6_22`). Final key distribution is A 49, B 48, C 51, D 47 of 195. Nothing was
shuffled blindly; each reorder was chosen so the remaining distractors still read
in a sensible order.

**How the quotes were produced.** Every quote was extracted mechanically from
the same normalized text `scripts/verify-excerpts.py` reads, using a start
phrase and an end phrase, rather than retyped. For the handbook the extractor
additionally required the span to be identical under both of the de-hyphenation
readings the verifier tries, so no quote can contain a line-break hyphen that
would resolve one way here and another way there. One candidate quote (the smog
check sentence on page 83) was rejected on that basis - it spans
"gasoline-\npowered" - and a different sentence from the same paragraph was used
instead. `tmp/nevada-verify.json` is the audit trail and its `quotesSha256`
matches the current `excerpts.ts`, which is what the validator's "quotes
verified" line is asserting.

**Snippets.** 38 of the 305 quotes did not render a picture. 35 of those are
statute or DMV web-page quotes with no handbook page to crop, which is expected.
The remaining four - `signs-stop`, `headlights-required`, `crash-steps` and
`dui-clues` - are handbook quotes that run a stem into a bulleted list, and
`search_for` cannot match across the bullets contiguously; the page-anchored link
still points at the right page. That is 263 of 267 handbook quotes rendered, or
98.5 percent.

Three further snippets were **deleted after the build**, and this is deliberate.
`build-excerpt-snippets.py` falls back to the longest plain word-run when a quote
does not match whole. Three NRS quotes - `nrs-bike-3-feet`, `nrs-follow-prudent`
and `nrs-park-hydrant` - contain phrases the handbook paraphrases closely enough
to match, so they rendered a picture of the *handbook* while the excerpt cites
the *statute*. A snippet is a receipt, and a receipt showing the wrong document
is worse than none, so those three entries were deleted from
`snippets.json` and their PNGs removed. The rule to reapply after any rebuild is
simply this: drop every snippet whose excerpt cites something other than
`dlbook.pdf`, since the builder only ever searches the handbook PDF. The scratch
helper that did it is `tmp/_prune_snippets.py` (tmp/ is gitignored, so treat the
rule rather than the file as the durable part).

**Unused excerpts.** 124 of the 305 excerpts are not referenced by a question.
They were kept rather than deleted: they are verified official wording covering
rules adjacent to the ones tested (the full parking list, the DUI penalty ladder,
towing, the ADAS chapter, license documents), the playbook's rule is that
coverage matters and a verified quote is never removed to hit a count, and the
questions that do carry a key resolve at 100 percent.

**Not verified.** Two things could not be checked and are stated plainly rather
than papered over:

- **No official Nevada page states a knowledge-test time limit or a retest
  waiting period.** A forum commenter who said they worked at the DMV described
  the test as untimed. That is not an official source, so the bank asserts
  neither a limit nor a wait; `officialTest.timeLimitMinutes` is omitted and the
  notes describe only the documented early-stop rule.
- **The statute text came from the Internet Archive**, not from a live fetch of
  `leg.state.nv.us`, because that host blocks automated clients from this
  machine. The captures used are dated in section 1 and each carries the
  Legislative Counsel Bureau's own "[Rev. 4/15/2026]" revision stamp, which is
  the edition label the excerpts cite.
