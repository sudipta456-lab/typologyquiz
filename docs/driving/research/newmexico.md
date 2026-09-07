# New Mexico - research note

Bank built 2026-09-06. Slug `newmexico`, code `NM`, 195 questions in six sets,
317 verbatim excerpts.

## 1. Sources read

| Source | Publisher | Edition label | URL | Fetched | How |
|---|---|---|---|---|---|
| New Mexico Driver Manual (English) | Motor Vehicle Division, New Mexico Taxation and Revenue Department | none printed in the book; the MVD's own file name is `English Drivers Manualver11.19.19.pdf`, recorded here as **Version 11.19.19** | https://realfile.tax.newmexico.gov/English%20Drivers%20Manualver11.19.19.pdf | 2026-09-06 | direct download |
| MVD Driver's License Manuals (the page that links the manual) | MVD | n/a | https://www.mvd.newmexico.gov/mvd-drivers-license-manuals/ | 2026-09-06 | direct |
| Chapter 66 NMSA 1978, Motor Vehicles | New Mexico Compilation Commission, published on NMOneSource.com | 1024-page chapter PDF served by the Commission's own site | https://nmonesource.com/nmos/nmsa/en/4422/1/document.do | 2026-09-06 | direct download (`item/4422` is Chapter 66 in the site's own index) |
| Driver Procedures Manual, Chapter 11 - Road and Written Test Requirements | MVD | Section E revised December 8, 2017 | https://www.mvd.newmexico.gov/chapter-11-road-and-written-test-requirements/ | 2026-09-06 | direct |
| Driver Procedures Manual, Chapter 3 - Instructional Permit | MVD | Section A revised December 5, 2017 | https://www.mvd.newmexico.gov/chapter-3-instructional-permit/ | 2026-09-06 | direct |
| Knowledge (Written) Examination Changes | MVD | Revised May 26, 2016 | https://www.mvd.newmexico.gov/knowledge-written-examination-changes/ | 2026-09-06 | direct |
| Apply for a Learner's Permit (the GDL stage descriptions and fees) | MVD | n/a | https://www.mvd.newmexico.gov/nm-drivers-licenses-ids/drivers-license/apply-for-a-learners-permit/ | 2026-09-06 | direct |

Two things about the sources are worth stating plainly.

**The publisher.** The manual is not published by a Department of Motor
Vehicles. New Mexico's MVD is a division of the **Taxation and Revenue
Department**, and the manual PDF is served from `realfile.tax.newmexico.gov`,
the Department's document host. Both hosts are in `officialHosts`.

**The edition.** The manual carries no edition line, no cover date and no
revision code anywhere in its 43 pages. Its PDF metadata says it was created in
2011 and last modified in 2026, which tells a reader nothing useful. The only
label the publisher itself attaches is in the file name the MVD's Driver's
License Manuals page links, `ver11.19.19`, so `handbookEdition` is
**"Version 11.19.19"** and the excerpts say so. A second copy of the same
document is served at `https://realfile.tax.newmexico.gov/dlm.pdf`; its text is
identical page for page and only the PDF's internal reading order differs, so
the MVD-linked file is the one used throughout.

**The license-stage names, checked rather than assumed.** New Mexico's stage one
is the **Instructional Permit** - that is the manual's heading, the statutory
term in Section 66-5-8 and the MVD's own Stage 1 name. The manual notes it is
"also known as a 'learners permit'", and the MVD's public page is titled "Apply
for a Learner's Permit", but the credential's name is Instructional Permit, so
that is `licenceName`. Stage two is the **Provisional License** and stage three
is the **Unrestricted Driver License** (MVD's page calls stage three the "Full
License").

## 2. Test format

| Fact | Value | Where it came from |
|---|---|---|
| Pass mark | 70% | Driver Procedures Manual Ch.11 Section E: "All class D and M written test scores must be 70% or better to pass." |
| Question count | **not published by MVD** | see below |
| Time limit | none published | - |
| Retest wait | twice per week, and twice on the same day; after a third failure, six months from the date of the FIRST examination | Knowledge (Written) Examination Changes, MVD |
| Score validity | five years | same page |
| Languages | English, Spanish, Tagalog, Italian, German, French, Vietnamese, Chinese | Ch.11 Section E |
| Fees | instructional permit $10.00; provisional $18.00; unrestricted $18.00 (4 yr) or $34.00 (8 yr) | Apply for a Learner's Permit |
| Where taken | MVD field office, or an MVD-contracted driver education school | Ch.3 Section A |

MVD publishes the pass mark and not the length. `questionCount` is set to 25 and
`passCount` to 18, which is 70% of 25 rounded up, and `officialTest.notes` says
in as many words that 25 is the figure applicants report and not an MVD
publication. Nothing in the bank depends on the number being right.

Two format facts worth flagging to a learner and both are in the notes: the
six-month bar after a third failure runs from the FIRST attempt, not the third,
and a passing knowledge score keeps for five years, so the written exam can be
cleared long before the road test.

## 3. Section and page map

The manual has 43 PDF pages. Front matter is numbered i to iii, so **printed
page N is PDF page N + 3**. Every `section` field in `excerpts.ts` gives the
printed page and every `url` anchors the PDF page.

| Printed page | Section |
|---|---|
| i - iii | Table of Contents |
| 1 | The Driver License; Types of Driver Licenses - Graduated License System; Instructional Permit; Provisional License |
| 2 | Provisional License (cont.); Unrestricted Driver License; Driver License Renewal; Keeping the Driver License |
| 3 | Safety Belts and Child Restraints; Rules of the Road; Traffic Control Devices; Traffic Signals |
| 4 | Traffic Signals (cont.); Traffic Signs; Warning Signs |
| 5 - 6 | Railroad Crossing Warning Signs; Work Area Signs; Regulatory Signs; Speed Limit Signs |
| 7 | Speed Limit Signs (cont.); Lane Use Control Signs; No Passing Signs; Stop Sign; Yield Sign; Do Not Enter Sign; Slow Moving Vehicle |
| 8 | Destination, Service and Route Number Signs; Pavement Markings |
| 9 | Other Lane Controls - Reversible Lanes, Reserved Lanes, Shared Center Lane; General Rules |
| 10 - 11 | General Rules (driving, passing, turning); Right-of-Way |
| 12 | Right-of-Way (cont.); One-Way Streets and Circles; Speed Limits |
| 13 | Speed Limits (cont.); Parking; No-Parking Zones |
| 14 | Curb colors; Traffic Violations; Safe Driving Tips; Basic Driving |
| 15 - 17 | Speeding; Stopping; Scanning |
| 17 - 18 | Use Your Lights; Communicating; Letting Others Know You Are There |
| 19 - 20 | Letting Others Know What You Are Doing; Adjusting to Road Conditions |
| 21 | Wildlife on the roadway; Adjusting to Traffic |
| 22 - 23 | How Well Can You See?; Sharing Space |
| 23 - 25 | Space Ahead, Behind, to the Side, to Merge, to Cross or Enter, to Pass |
| 25 - 26 | Sharing the Road - Bicycles Are Vehicles; sharrows |
| 27 | LARGE TUCKS AND RVS (the heading's own spelling); Trucker's Blind Spots |
| 28 - 30 | Be in Shape to Drive - Vision, Fatigue, Drinking and Driving, Other Drugs, Health, Emotions, Cellular Phone Usage |
| 31 - 33 | Emergencies; Avoiding Collisions; Dealing with Skids; Protect Yourself in Collisions |
| 33 - 35 | Accidents and the Financial Responsibility Law |
| 35 - 39 | Motorcycles |
| 40 | Motorcycle Safety Foundation contact |

The statute PDF pages used are recorded in each statute excerpt's `section`
field, so a future editor can re-open the same page of the chapter PDF.

## 4. What the handbook does not say

The manual is forty printed pages and five of those are motorcycles, so it
leaves a lot to Chapter 66. Every gap below is filled from the statute and
labeled as statute in the bank.

| Rule the exam can still test | Manual | Statute |
|---|---|---|
| Move over for a stopped emergency, recovery or repair vehicle | **silent - no move-over rule anywhere** | Section 66-7-332(B): change out of the adjacent lane if reasonably safe, slow to a reasonable and prudent speed either way |
| Distance you stop short of a school bus | requires the stop, gives no distance | Section 66-7-347(A): at least ten feet |
| Age for an unrestricted license | never states it | Section 66-5-5(A)(3): sixteen years and six months |
| Statutory speed defaults as enacted | prints a four-line table | Section 66-7-301(A): 15 school zone, 30 business/residence, 55 unposted county road, 75 general maximum |
| Texting and handheld typing | "illegal in some towns ... unless you are using a hands-free device" | Section 66-7-374: statewide ban since 1 July 2014, and "driving" includes being stopped at a light |
| Following distance in a motorcade or between trucks outside a business or residence district | silent | Section 66-7-318(B),(C): three hundred feet |
| Revocation length after a positive test | says only that refusal costs a year | Section 66-8-111(C): six months at 21 or older, one year under 21 |
| Seat belt coverage | "illegal to drive without wearing safety belts" | Section 66-7-372: every occupant of a vehicle of 10,000 lb or less, belted whenever moving |
| Motorcycle helmet | says under 18 must | Section 66-7-356: same, with the secretary's standards, and autocycles exempted |
| Signal duration | "at least 100 feet" | Section 66-7-325(B): continuously during not less than the last one hundred feet |

## 5. Conflicts, and how each was handled

Five real conflicts. In every case the manual and the statute are both quoted in
`excerpts.ts`, no question asks for the disputed figure, and the bank is built
on a scenario where both readings give the same answer.

1. **Parking distance from a crosswalk.** Manual (printed page 13): do not park
   "within 25 ft. of a crosswalk at an intersection". Section 66-7-351(A)(6):
   "within twenty feet of a crosswalk at an intersection". No question asks for
   the crosswalk distance. The parking questions use the hydrant (15 ft, both
   agree), the signal and stop sign (30 ft, both agree), the railroad crossing
   (50 ft, both agree), the fire station driveway (20 and 75 ft, both agree),
   double parking and the 18-inch curb distance.
2. **Yield signs in the parking list.** The manual's 30-foot rule names "a
   traffic signal, stop sign or yield sign"; the statute's paragraph names "any
   flashing beacon, stop sign or traffic-control signal" and no yield sign. Set
   6 question 6 asks the manual's version and is sourced to the manual;
   set 3 question 11 asks the statute's version and is sourced to the statute.
   Neither question turns on whether a yield sign is in the list.
3. **Ninety-day clean record before a provisional license.** The manual (printed
   page 2) says the applicant "must have not been convicted of a traffic
   violation in the 90 days prior". The 2011 amendment to Section 66-5-8
   deleted that and replaced it with a bar on applying with a citation
   *pending*, plus thirty days added to the six-month permit period per
   violation. MVD's own Apply for a Learner's Permit page still prints the
   ninety-day version. No question asks about the ninety days; set 5 question 25
   asks about the alcohol-and-drug condition, which the manual and Section
   66-5-5 state identically.
4. **Child restraints.** The manual's paragraph ("children under the age of 24
   months, or weighing less than 60 pounds") predates the 2005 rewrite of
   Section 66-7-369, which now requires every passenger under eighteen to be
   restrained, rear-facing in the rear seat under one year, a restraint device
   one through four or under forty pounds, and a booster five through six or
   under sixty pounds. Set 6 question 26 asks only about the seating position -
   rear seat, never the front passenger side with an air bag - which the manual
   and the statute agree on, and its trap note records the lag.
5. **Speed limits, statute versus table.** The manual prints "55 mph on public
   highways, unless posted otherwise" and "75 mph on rural interstate highways".
   Section 66-7-301(A) reads differently: 55 applies specifically to a county
   road without a posted limit, and 75 is the general statutory maximum, with no
   line about "public highways" at all. Set 5 question 5 is built on the
   unposted county road, where both readings give 55, and its trap note states
   the difference. The 15 mph school zone and 30 mph business or residence
   figures are identical in both.

One conflict is between two official sources rather than between the manual and
the statute: MVD's Apply for a Learner's Permit page says a BAC of .02 "could
result in a 6-month license revocation for drivers under age 21", while Section
66-8-111(C)(2) provides one year for a driver under twenty-one. Set 5 question
10 follows the statute and is sourced to it.

## 6. What learners report

`python scripts/fetch-reddit.py newmexico ...` was run twice, with eleven
searches across r/NewMexico, r/Albuquerque, r/SantaFe, r/DMV, r/driving,
r/drivingtest, r/newdrivers, r/LasCruces and r/Teenagers. It saved 27 threads to
`tmp/newmexico-reddit-*.txt`. Nine were about New Mexico licensing or the
knowledge exam; the rest were off-topic hits (food inspections, homeowner
permits, a towing dispute) or about other states' tests, and were not used.

Nothing below supplied a question. A forum post is evidence about what confuses
people and never about what the law says, so every rule was re-checked against
the manual or the statute and the confusion became the trap.

| Sub | Thread | Year | Claim, paraphrased | Shaped |
|---|---|---|---|---|
| r/NewMexico | Instructional permit | 2025 | A parent moving from a state with no driver-education requirement could not work out how a 15-year-old can be "enrolled in driving school" before holding a permit; replies explained the school supplies the paperwork and administers the rules-of-the-road test part way through the classroom course | `nm_s5_01`, gotcha 1, `officialTest.notes` |
| r/NewMexico | Written Drivers test | 2025 | Poster had failed twice, faced an eight-day wait, and understood that a third failure meant six months | `officialTest.notes` (confirmed against MVD's Knowledge Examination Changes page, which puts the six months from the date of the FIRST exam) |
| r/NewMexico | Passing my Permit Test In New Mexico | 2026 | Only substantive reply was about the percentage needed to pass | pass mark checked against Ch.11 Section E, which says 70% |
| r/NewMexico | In New Mexico, can someone in their early twenties get a learners permit if they've never been licensed? | 2024 | Several people insisted adults are simply given the road test and that "you don't need a permit"; others reported being issued one in their forties | `officialTest.notes`; the manual and Section 66-5-8 both make the instruction permit available from 15 upward with no upper age |
| r/Albuquerque | adult in 30s trying to get drivers license | 2026 | Poster passed the written test, was told by three MVD staff they could not drive, and then told to "just do it, be careful"; a reply explained the permit exists precisely so an insurer will cover a learner | same |
| r/NewMexico | 32 yo never had a DL, what are the requirements? | 2025 | Poster believed a permit was unavailable at that age | same |
| r/SantaFe | DMV driving test advice? | 2025 | Road test route reported as very short, with the score sheet listing "parallel park on hill" as a graded item; one reply's aside was that New Mexicans forget their turn signals a few years after driver's ed | signal questions `nm_s1_27`, `nm_s5_29`, `nm_s6_14`; road-test scoring left out of the bank, which is a knowledge-test bank |
| r/DMV | New Mexico - how is this fair? | 2025 | Poster's language was not among the eight offered and MVD would not allow an interpreter or an electronic translator | `officialTest.notes` (confirmed against Ch.11 Section E's language list) |
| r/Albuquerque | Need to get a driver's license. Is the New Mexico driving test hard? | 2020 | General reassurance, nothing testable | not used |

Two searches for New Mexico "most missed questions" and an official practice
test found neither: MVD publishes no practice test and no missed-question list,
unlike Arkansas or Minnesota. Set 5 is therefore built on the manual's own
buried rules, the statute's silences, and the confusions above.

## 7. Local gotchas

1. **Driver education comes before the permit.** Section 66-5-8(E) only lets the
   division issue an instruction permit to someone fifteen or older who is
   already enrolled in and attending, or has completed, a Traffic Safety Bureau
   approved course. Families arriving from states where the permit comes first
   and the class comes after cannot make the ordering work, and it is the single
   most-repeated confusion in the New Mexico threads.
2. **Three seconds, four seconds, and four seconds again.** New Mexico teaches a
   three-second following distance, a four-second distance for six named
   situations, a four-second merging gap, and a separate Four Second Sight
   Distance Rule that is about visibility rather than about following. Four
   rules, three numbers, and questions that look alike.
3. **The manual has no move-over rule.** A learner who reads the book cover to
   cover will never meet Section 66-7-332(B), and will answer that nothing is
   required beyond staying in lane.
4. **The provisional curfew and the passenger limit are separate.** Midnight to
   5:00 a.m. is the curfew; the one-non-family-passenger-under-21 limit applies
   at every hour. Both lift with a licensed driver 21 or older in the car, and
   people assume clearing one clears the other.
5. **The manual never states the unrestricted license age.** It describes the
   twelve-month provisional period and stops. Sixteen and a half comes from
   Section 66-5-5, and it is a question the exam can still ask.
6. **Yellow X twice.** A flashing yellow X over a reversible lane means turns
   only; a steady yellow X means get out of the lane. It is the most-missed pair
   in the lane-control section and the difference is only whether it flashes.

## 8. Verification

Run 2026-09-06, against the tree at the time of writing.

```
npx tsx scripts/extract-quotes.mjs newmexico
tmp/newmexico-quotes.json: 317 quotes

python scripts/verify-excerpts.py newmexico tmp/newmexico-handbook.pdf tmp/nm-ch66.pdf
newmexico: 317/317 quotes verified verbatim against 2 source(s)

python scripts/build-excerpt-snippets.py newmexico tmp/newmexico-handbook.pdf
newmexico: 282 snippets rendered, 1 not located, 34 skipped as not in this document

npx tsx scripts/validate-driving.mjs --only newmexico
ERRORS: 0   WARNINGS: 7
```

The 34 skipped snippets are the statute quotes, which are correctly absent from
the handbook PDF. The one not located is `curb-colors`, a stem-plus-list quote
whose four color lines the renderer could not bracket; the quote itself
verifies verbatim, so it is shown as text without a picture.

Three rendered PNGs were opened and checked by eye - `three-second-rule.png`,
`speed-school-zone.png` and `school-bus-stop.png`. All three crop cleanly with
the full first character of every line inside the frame.

The seven warnings are all the same warning: seven quotes run past 320
characters. Each is a stem plus its enumerated list, and cutting any of them
would cut the list in half and change what the quote says - the six four-second
situations, the four statutory speed maximums, the two limbs of the move-over
rule, the sight-distance procedure, the passing sight distance, the emergency
approach duty, and the instruction permit's supervision conditions. All seven
are well under the 600-character hard cap and none is a paraphrase.

`npx tsc --noEmit -p .` reports no errors in `src/lib/driving/newmexico/`.

Bank statistics from the validator: 195 questions, answer positions
A 23% / B 26% / C 27% / D 25%, context on 100%, source links on 100%, 15% starred
as commonly missed, 195/195 questions wired to an excerpt that resolves, all
eleven topics covered (safety 24, rules 23, signals 20, sharing 19, signs 18,
right of way 18, speed 16, impairment 16, licensing 15, parking 14, emergencies
12).
