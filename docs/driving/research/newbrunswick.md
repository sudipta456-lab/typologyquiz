# New Brunswick - research note

Bank built 2026-09-07. Slug `newbrunswick`, code `NB`, country `CA`.
195 questions across six sets, 381 handbook and statute excerpts.

New Brunswick is officially bilingual and publishes the handbook and both written
exams in English and French. Everything below is the English edition, which is
published in full; nothing here was taken from the French text.

---

## 1. Sources read

| Source | Publisher | Edition label | URL | Fetched | How |
|---|---|---|---|---|---|
| New Brunswick Driver's Handbook, Part 1: Licensing of Drivers | Government of New Brunswick (distributed by Service New Brunswick for the Department of Public Safety) | none printed; PDF produced 2022-07-19 | https://www.gnb.ca/content/dam/GNB3/t/dt-ct/handbook-manuel/docs/part-1-licensing-of-drivers.pdf | 2026-09-07 | direct |
| ... Part 2: Registration of Vehicles | as above | as above | .../part-2-registration-of-vehicles.pdf | 2026-09-07 | direct |
| ... Part 3: Equipment | as above | as above | .../part-3-equipment.pdf | 2026-09-07 | direct |
| ... Part 4: Traffic on the Highway - Rules of the Road | as above | as above | .../part-4-traffic-on-the-highway-rules-of-the-road.pdf | 2026-09-07 | direct |
| ... Part 5: Safe Driving | as above | as above | .../part-5-safe-driving.pdf | 2026-09-07 | direct |
| ... Part 6: Traffic on the Highway - Sharing the Road | as above | as above | .../part-6-traffic-on-the-highway-sharing-the-road.pdf | 2026-09-07 | direct |
| ... Part 7: Traffic Signs | as above | as above | .../part-7-traffic-signs.pdf | 2026-09-07 | direct |
| ... Part 8: What every motorcyclist must know | as above | as above | .../part-8-what-every-motorcyclist-must-know.pdf | 2026-09-07 | direct |
| ... Part 9: Information for Commercial Vehicle Drivers | as above | as above | .../part-9%20information-for-commercial-vehicle-drivers.pdf | 2026-09-07 | direct |
| Driver's Handbook landing page | gnb.ca | n/a | https://www.gnb.ca/en/topic/driving-transportation/driving-licensing/driver-handbook.html | 2026-09-07 | direct |
| Motor Vehicle Act, RSNB 1973, c M-17 | Government of New Brunswick | page labelled "Current to 1 January 2024" | https://laws.gnb.ca/en/showfulldoc/cs/M-17 | 2026-09-07 | direct |
| General Regulation, NB Reg 83-42 | Government of New Brunswick | consolidated | https://laws.gnb.ca/en/showfulldoc/cr/83-42 | 2026-09-07 | direct (searched for examination fees; none found) |
| Graduated drivers' licences | gnb.ca | n/a | https://www.gnb.ca/en/topic/driving-transportation/driving-licensing/graduated-licences.html | 2026-09-07 | direct |
| Written and road tests for driver's licences | gnb.ca | n/a | https://www.gnb.ca/en/topic/driving-transportation/driving-licensing/written-road-tests.html | 2026-09-07 | direct |
| Driver Examinations | www2.snb.ca | n/a | https://www2.snb.ca/content/snb/en/driving_tests/examinations.html | 2026-09-07 | direct |

### The handbook has no edition label, anywhere

This is the first thing a future editor should know. There is no cover date, no
revision code, no ISBN and no "revised" line in any of the nine part PDFs, and
the landing page carries none either. The only version marker the publisher
leaves is the PDF production timestamp, which is **2022-07-19 11:02 to 11:07
ADT** on all nine files, from Adobe InDesign 17.0. `handbookEdition` therefore
reads "No printed edition label; the nine part PDFs published on gnb.ca were
produced 19 July 2022" rather than inventing one.

The older www2.gnb.ca handbook paths that circulate in search results
(`.../ps-sp/pdf/drivers_vehicles/driverhandbook/DH_introduction-e.pdf` and the
matching table-of-contents file) now return a 404 page. They are dead and the
nine-part set on `gnb.ca/content/dam/GNB3/...` is the live edition.

### Extraction was checked before anything was built on it

The nine parts were merged into `tmp/newbrunswick-handbook.pdf` with eight blank
pages prepended, so that **merged page N is the handbook's own printed page N**.
The printed numbering is continuous across the nine files (Part 1 starts at
printed page 9 and Part 9 ends at 106), which is what makes the alignment exact,
and it was spot-checked at pages 9, 33, 54, 86 and 106.

The extracted text was then run through the corrupt-font detector before any
quote was written. Result: **one** flagged token in 167,000 characters, `4ths`,
from the handbook's genuine "3/4ths of a second". The font maps are clean and
the PDFs are true text, not scans. No quote in the bank uses the `3/4ths`
sentence; the reaction-time figure is quoted from page 84 instead, where the
handbook writes it out as "three-quarters of a second".

### How the statute text file was produced

`tmp/newbrunswick-statute.txt` is the visible text of the full-document view of
the Act on laws.gnb.ca. That view wraps each paragraph letter in its own element,
so a plain-text render picks up `( a)` where the page displays `(a)`; that one
gap is closed and nothing else is touched. Statute deep links use the
`#se:<section>` anchors the full-document page itself defines. The
`/en/showdoc/cs/M-17/ga:s_140` style of section link that appears in search
results currently returns HTTP 500, so it is not used.

---

## 2. Test format

New Brunswick sets **two separate written exams** for a Class 7 Level 1 licence
and scores them independently.

| Item | Value | Source |
|---|---|---|
| Exam 1 | Road Sign Recognition Exam - 20 signs | Handbook p. 16; gnb.ca Written and road tests |
| Exam 1 pass rule | Must correctly identify **stop, yield and school zone**, and make no more than **four errors on the remaining signs** | Handbook p. 16 |
| Exam 2 | Rules of the Road Non-Commercial Knowledge Exam - 20 multiple choice | Handbook p. 16; gnb.ca Written and road tests |
| Exam 2 pass mark | 16 of 20 | Handbook p. 16 |
| Units | Metric only, although the handbook prints both metric and imperial | Handbook p. 16 |
| Time limit | **None published.** Neither the handbook nor either gnb.ca page states one | see section 9 |
| Delivery | Written or oral; online from home, or at an SNB centre; English or French | Handbook p. 16; gnb.ca Written and road tests |
| Retest wait | None. You buy a retest for the exam(s) you failed and sit it whenever you are ready | gnb.ca Written and road tests |
| After passing online | Minimum **four business days**, then attend any SNB office except Campobello for the vision test | gnb.ca Written and road tests |
| Documents at issue | Proof of identification, proof of residency, Parental Consent Form if under 18, motorcycle course proof where applicable | gnb.ca Written and road tests |
| Result validity | All test results valid for six months | Handbook p. 18 |
| Vision standard | 20/40 best eye for Class 7 | Handbook p. 9 |
| Booking | Online, or Service New Brunswick Teleservices 1-888-762-8600 (1-506-684-7901 outside North America) | gnb.ca Written and road tests |
| Fee | **Not published by the Province in any source read.** The handbook (p. 15) says only that there is a separate fee for the written and road tests and an additional fee for issuing the licence, and directs the reader to Service New Brunswick or SNB.ca | see section 9 |
| Road test course | At least 3 km, in fairly dense traffic where possible | Handbook p. 18 |

`officialTest.sectionedBy` mirrors the two exams: a `signs` section with a pass
count of 16, and a rules section covering the other ten topics with a pass count
of 16. Every set carries at least seven `signs` questions so both halves score.

### Licence stage names, verified rather than assumed

Three official naming systems are in play and all three are current:

- The **handbook** (p. 9) calls it the "Class 7 Graduated Licence (Level I and
  II)" and uses "Level 1" and "Level 2" as headings.
- The **Graduated drivers' licences page** calls it a "Class 7 Level 1 Graduated
  Licence", with tables headed "Graduated Driver's Licence - Level 1" and
  "- Level 2". It also notes that a graduated licence is identified with an "L"
  on the front.
- The **Motor Vehicle Act**, section 84, calls the same two periods **stage one**
  and **stage two** of a "learner's licence". The GDL page's own exit row mixes
  the two, reading "at least 12 months in Stage 2".
- **Service New Brunswick's booking pages** use a fourth form, "class 7.1 learners
  permit", with "7.2" appearing for Level 2 on SNB's examination page and in
  everyday New Brunswick usage.

`licenceName` is set to **Class 7 Level 1 Graduated Licence**, the form used on
the Province's own licensing page and closest to the handbook's. The bank uses
Level 1 and Level 2 in question text and names the statutory stage-one and
stage-two wording where it quotes the Act.

The licensing authority is the **Registrar of Motor Vehicles** under the Motor
Vehicle Act, within the **Department of Public Safety**; **Service New Brunswick**
delivers the examinations and issues the licences, and distributes the handbook
on the Department's behalf. That division is stated on the handbook's own first
page and on the gnb.ca pages, and it is why the handbook is a Public Safety
publication while every appointment goes through SNB.

---

## 3. Section and page map

The nine parts share one continuous printed page numbering, 9 to 106. Every
`section` field in `excerpts.ts` cites that printed page, which is the number in
the header of the page a learner lands on.

| Part | PDF | Printed pages |
|---|---|---|
| 1 Licensing of Drivers | part-1-licensing-of-drivers.pdf | 9-23 |
| 2 Registration of Vehicles | part-2-registration-of-vehicles.pdf | 24-27 |
| 3 Equipment | part-3-equipment.pdf | 28-32 |
| 4 Traffic on the Highway - Rules of the Road | part-4-...-rules-of-the-road.pdf | 33-53 |
| 5 Safe Driving | part-5-safe-driving.pdf | 54-76 |
| 6 Traffic on the Highway - Sharing the Road | part-6-...-sharing-the-road.pdf | 77-85 |
| 7 Traffic Signs | part-7-traffic-signs.pdf | 86-95 |
| 8 What every motorcyclist must know | part-8-...-must-know.pdf | 96-105 |
| 9 Information for Commercial Vehicle Drivers | part-9%20information-...pdf | 106 |

Deep links are built as `<part PDF>#page=<printed page - offset>`, offsets 8, 23,
27, 32, 53, 76, 85, 95 and 105 respectively.

### Headings and printed pages

**Part 1** 1.1 Types of Licences 9 - 1.2 List of possible endorsements 14 -
1.3 Learning to drive vehicles requiring higher class licences 15 -
1.4 Examination for learner's licence 15 - 1.5 Examination for driver's licence 16 -
1.6 How you may lose your driving privilege 20 - 1.7 When a re-examination is
required 23. (Level 1 and Level 2 conditions p. 10; Road Sign Recognition Test and
Rules Test p. 16; Restrictions list p. 18-19; Expiry, Change of Address, Change of
Name p. 19; newly licensed driver points p. 20; suspension table p. 21; point-loss
examples p. 22.)

**Part 2** 2.1 Certificate of Registration 24 - 2.2 Licence plates are property of
the Crown 24 - 2.3 Plates must be legible 24 - 2.4 Owner responsible for plates 24 -
2.5 Transfer of plates 24 - 2.6 Offence to alter numbers 25 - 2.7 Non-Residents 25 -
2.8 Transfer of ownership 25 - 2.9 Transit Markers 25 - 2.10 Expiry dates 26 -
2.11 Persons with disabilities 26 - 2.12 Cancellation of Registration 27 -
2.13 Motor Vehicle Safety Inspection 27.

**Part 3** 3.1 Lights 28 - 3.2 Brakes 30 - 3.3 Horn 30 - 3.4 Mirror 30 -
3.5 Windshields and windows 31 - 3.6 Ornaments 31 - 3.7 Windshield wipers 31 -
3.8 Mufflers 31 - 3.9 Speedometer 31 - 3.10 Height, width and length of vehicle 32 -
3.11 Studded tires 32 - 3.12 Safety chain 32.

**Part 4** 4.1 Collisions 33 - 4.2 Speed restrictions 34 - 4.3 Slow drivers 35 -
4.4 Passing a vehicle 35 - 4.5 School zones, school buses and construction zones 36 -
4.6 Drive on right half of highway 37 - 4.7 Laned traffic and pavement markings 37 -
4.8 Blind spots 38 - 4.9 Passing 38 - 4.10 Signalling 39 - 4.11 Right of Way 40 -
4.12 Railway crossings 41 - 4.13 Yield sign 42 - 4.14 Stop sign 42 - 4.15 Traffic
control signals 43 - 4.16 Peace Officer 44 - 4.17 Crosswalk guard 44 - 4.18 Turning
at intersections 44 - 4.19 Passing on multi-lane streets 47 - 4.20 Parking 47 -
4.21 Backing 50 - 4.22 Miscellaneous traffic provisions 50 - 4.23 Pedestrians 51 -
4.24 Traffic on the highway 52 - 4.25 Horseback riding 53. (Parking regulations
list p. 48; parallel parking p. 49.)

**Part 5** 5.1 The vehicle 54 - 5.2 Check your vehicle 55 - 5.3 Seat belts save
lives 55 - 5.4 Penalties for seat belt infractions 56 - 5.5 Preparing your vehicle
for winter driving 57 - 5.6 The driver 58 - 5.7 White cane 62 - 5.8 Crash 62 -
5.9 Impaired driving 64 - 5.10 Some rules for safe driving 67 - 5.11 Highway,
weather and visibility conditions 69 - 5.12 Intersections 72 - 5.13 Tire blow-out 73 -
5.14 Running off the pavement 73 - 5.15 Curves 73 - 5.16 Driving at night 74 -
5.17 Driving in fog 74 - 5.18 Limited access highway 75. (Distracted driving p. 58;
Following and the two-second interval p. 61; impoundment tables p. 65-66; zipper
merge p. 76.)

**Part 6** 6.1 Drivers helping other drivers 77 - 6.2 Drivers and large commercial
vehicles 78 - 6.3 Drivers and motorcycles 78 - 6.4 Drivers and bicycles 79 -
6.5 Drivers and pedestrians 80 - 6.6 Drivers and school buses 81 - 6.7 Drivers and
emergency vehicles 81 - 6.8 Drivers and farm vehicles 82 - 6.9 Sharing the road with
large trucks 83.

**Part 7** 7.1 Six basic sign shapes every driver must know 86 - 7.2 Standard sign
colours 87 - 7.3 Regulatory Signs 88 - 7.4 Warning signs 90 - 7.5 Railway
Crossings 94 - 7.6 Guide Signs 95 - 7.7 Information Signs 95.

**Part 8** 8.1 Motorcycle driver's licence 96 - 8.2 Equipment 96 - 8.3 Safe driving
rules 97 - 8.4 Motorcycle safety check 98 - 8.5 Starting 99 - 8.6 Stopping 99 -
8.7 Passengers 100 - 8.8 Driving techniques 101 - 8.9 Defensive driving 101 -
8.10 Shoulder checks 102 - 8.11 Following other vehicles 102 - 8.12 Emergencies
when riding 103.

**Part 9** Information for commercial vehicle drivers 106 (single page: clearance
lamps and reflectors, portable reflector units, safe driving).

---

## 4. What the handbook does not say

The New Brunswick handbook is unusually complete on distances - it gives the
hydrant, crosswalk, railway and fire-station parking distances, the 30-metre
signal distance and the 150-metre passing sight line, all of which other
provinces leave to the statute. What it omits is mostly penalty machinery and
the rules added since 2022.

| Missing from the handbook | Where it comes from |
|---|---|
| The current school-zone speed limit | MVA s. 140.1(1), replaced by 2023, c.7 - 30 km/h in a municipality, 50 km/h in a rural community, regional municipality or rural district |
| The roadside licence-suspension ladder | MVA s. 310.01(4) - 7 days first, 15 days second within five years, 30 days third or later. Added by 2024, c.16, in force 1 January 2025 |
| The novice roadside suspension | MVA s. 310.02(6) - seven days |
| The right to a second breath analysis on a "Warn" | MVA s. 310.01(6)(a) and (7.1) - different device, lower reading governs |
| The section numbers behind the phone ban | MVA ss. 265.02, 265.03, 265.04, and 265.041 which doubles the minimum fine |
| The precise hands-free exception | MVA s. 265.03(c) - voice commands, one touch to start or accept, one to end |
| The speeding offence bands and their impoundments | MVA s. 140(1.1) and (1.4) - seven days over 50 km/h, 30 days over 80 km/h |
| That the construction-zone default applies only when a worker is present | MVA s. 142.01(1) |
| The prohibition on driving faster than is reasonable and prudent | MVA s. 140(2) |
| The U-turn prohibitions where no sign exists | MVA s. 162(1) - curve, obscured crest within 150 m, traffic control device |
| The general following-distance rule | MVA s. 157(1) - no more closely than is reasonable and prudent |
| The statutory definition of night | MVA s. 1 - half an hour after sunrise to half an hour before sunset is day; night is any other time |
| The exam fee | Not published in any Province source read (see section 9) |
| Any time limit for either written exam | Not published in any Province source read (see section 9) |

The handbook also predates the removal of licence-plate validation stickers by
Bill 17 (2025). No question in this bank turns on stickers, and the one plate
excerpt used (`plates-legible`) covers only fastening, legibility and the rear
plate light, which are unchanged.

---

## 5. Conflicts, and how each was resolved

### Conflict 1 - the school-zone speed limit. RESOLVED IN FAVOUR OF THE ACT, WITH BOTH TAUGHT

The handbook says 50 km/h twice:

- p. 36: "The speed limit for school zones is 50 km/h in an urban district unless
  a different rate of speed has been posted."
- p. 87: "The maximum speed permitted is 50 km/h unless otherwise posted."

Section 140.1(1) of the Act, as replaced by 2023, c.7, s.6, says 30 km/h in a
municipality and 50 km/h in a rural community, regional municipality or rural
district. Municipalities may set a higher figure by by-law, but not more than
20 km/h below the limit on the road before the zone, and s. 140.1(2.2) forbids
anything below 30. The City of Saint John's own traffic pages describe 30 km/h as
the default in all City school zones.

Handled three ways rather than by picking a side silently:

- **nb_s1_28** asks about the **hours**, 7:30 a.m. to 4:00 p.m. on days school is
  in session, which both sources state identically. That is the "both readings
  give the same answer" question the playbook asks for, and it is where a
  learner's first exposure lands.
- **nb_s5_01** asks the number directly, states the Act's 30 km/h, cites
  s. 140.1(1), and says in its own trap note that the handbook still prints 50 on
  pages 36 and 87.
- The first entry in `localGotchas` sets it out in full.

### Conflict 2 - "urban district" versus "municipality"

The handbook's speed section (p. 35) uses "urban district": 50 km/h in any urban
district, 80 km/h elsewhere. The Act uses "local authority" and "rural district"
in s. 140(1), and "municipality", "rural community", "regional municipality" and
"rural district" in ss. 140.1 and 142.01. Section 140(1)(a) further splits an
area inside a local authority into a "local highway" as defined by the Highway
Act at 80 km/h and any other highway at 50 km/h.

No question is built on that split. **nb_s1_07** asks the default outside town and
answers 80 km/h in the handbook's own terms, which both sources agree on.

### Conflict 3 - the statute page's own consolidation label

The laws.gnb.ca full-document view is labelled "Current to 1 January 2024", yet
the amendment histories inside the same text cite chapters up to 2025, c.47. The
label is behind the content it describes. Every section this bank quotes
(84, 119, 140, 140.1, 142.01, 149, 157, 162, 168, 168.1, 188, 188.1, 200.1, 207,
265.02-265.041, 310.01, 310.02) carries an amendment history ending no later than
2024, so the discrepancy does not touch anything quoted here. Recorded because a
future editor will notice it and should not assume the text is stale.

### Not a conflict, but worth flagging - Class 5 at 17

The GDL page says a driver gets a Class 5 licence after 24 months at Levels 1 and
2 combined, with no road test. The handbook's Class 5 requirements (p. 10) say an
applicant must be at least 18. A driver who entered Level 1 at 16 with driver
training can complete 24 months before turning 18. Neither source explains how the
two fit together, so **no question was written on it** and it is recorded in
section 9 as unverified.

---

## 6. What learners report

Reddit was collected with `scripts/fetch-reddit.py`. The first run used
`newbrunswick:` as a subreddit and returned nothing from it - **the province's
subreddit is `r/newbrunswickcanada`, not `r/newbrunswick`** - so a second run was
made against the correct sub. 78 threads were saved in total across
`r/newbrunswickcanada`, `r/fredericton`, `r/moncton`, `r/DMV`, `r/driving` and
`r/newdrivers`; roughly 25 of them are New Brunswick driving threads and the rest
are other jurisdictions the search surfaced. The threads that shaped questions:

| Sub | Thread | Year | What it says (paraphrase) | Shaped |
|---|---|---|---|---|
| r/moncton | NB Beginners driving test | 2020 | A third-time candidate asks what is tricky. A commenter warns to expect questions on things you skimmed, naming the time frame to update your licence after a change of address; another guesses 30 days and is corrected to 10. | nb_s3_15, nb_s5_26 |
| r/moncton | NB Beginners driving test | 2020 | Same thread: a commenter says a common mistake is turning into the wrong lane from a stop or lights, and that you should go to the lane closest to you and then signal to change. | nb_s3_16 |
| r/fredericton | People who've messed up on the driving test at Service NB, what was the mistake you made? | 2020 | Top comment: pulled past the stop sign to see around snowbanks and was failed for it - "always stop behind the stop sign then pull up so you can see". Another failed for pulling out from behind parked trucks into a car they could not see. | nb_s1_29, nb_s5_17 |
| r/fredericton | Drop some tips and tricks for the NB Driver's Test (mirrored in r/newbrunswickcanada) | 2022 | Failures listed include not turning into the first lane from King onto Queen, and changing lanes as soon as instructed instead of shoulder-checking first. | nb_s3_16, nb_s1_18 |
| r/fredericton | New Brunswick Online Written Test | 2023 | Several people report the online Road Sign Recognition Exam coming back "under review" with a five-business-day wait instead of an instant result, and being asked to redo the signs in person. | `officialTest.notes`, nb_s5_08 |
| r/newbrunswickcanada | Passing lane signage and markings on Hwy 11 | 2024 | A commenter states that New Brunswick has no province-wide keep-right law, only a situational one where signs are posted. The handbook in fact states the lane-nearest-the-right rule generally (p. 37). | nb_s5_05 |
| r/newbrunswickcanada | Passenger limit with 7.2 | 2023 | A Level 2 holder does not know how long the three-passenger limit lasts; the answer given is the 12-month or 8-month upgrade path and the age requirement. | nb_s5_16, nb_s5_35 |
| r/newbrunswickcanada | License Questions | 2022 | An under-18 asks whether turning 18 shortens the one-year Level 1 wait. Two commenters say it does not: "they don't care if you're 18 or 81, you still gotta wait that year". | nb_s3_27 |
| r/newbrunswickcanada | Drivers licensing question | 2013 | An incoming BC driver is told New Brunswick's programme is 24 months in two 12-month levels, supervisor with 3+ years for Level 1, up to three other occupants and no midnight-to-5 driving at Level 2, with school and work exceptions, and zero alcohol tolerance. | nb_s1_08, nb_s5_35 |
| r/newbrunswickcanada | Impaired driving rules set to change in N.B. | 2024 | News that new impaired-driving legislation took effect 1 January 2025 with penalties for lower amounts of alcohol. Prompted the check of MVA s. 310.01, which the handbook does not carry. | nb_s5_03 |
| r/fredericton | Does SNB penalize you for not showing up to a written test? | 2022 | Hours on hold with Teleservices trying to cancel; a commenter points out the test can simply be written online. | `officialTest.notes` |
| r/newbrunswickcanada | I am told to wait 7 days for my test, i found a test that's on the 7th day | 2020 | A candidate got two different answers from SNB about a retest wait. The current gnb.ca page says there is no waiting period to retake a written test. | `officialTest.notes` |
| r/fredericton | Class 4 Written Test | 2024 | Confirms the online written option does not extend to Class 4. | `officialTest.notes` context |
| r/moncton | Written Test Reviewer for Class 5 Driver's License | 2022 | A newcomer asks what to study; the answers point only to the official handbook and the SNB new-residents page. | none - source check |
| r/newbrunswickcanada | How long do you have to complete your written driver's license test? | 2025 | A candidate cannot find how long an online access code stays valid, and is told to look at a page that does not say. Neither could this build. | section 9 |
| r/newbrunswickcanada | Act to amend the Motor Vehicles Act | 2026 | Bill 17 removed licence-plate validation stickers; carry a printed registration renewal instead. | no question written; section 4 |

No thread was used as a source of exam questions and no comment text is
reproduced anywhere in the bank. Two threads that read like recalled exam items
were deliberately not used for anything beyond identifying which rule was being
tested.

Beyond the forums, the Province publishes no "most missed questions" page and no
official practice test, so the two stronger official sources the playbook
mentions were not available here. The Act's own list of what the examination must
cover is thin: s. 89 requires an acceptable knowledge of road signs, rules of the
road and safe driving practices, which is the same sentence the handbook prints
on p. 15.

---

## 7. Local gotchas

The five in `localGotchas`, and why each catches people:

1. **The school-zone speed in the book is the old one.** Handbook 50, Act 30 in a
   municipality since 2023. A learner who studies only the book will drive a city
   school zone 20 km/h too fast, and the fine for it is doubled.
2. **Three signs on the sign exam are compulsory.** Stop, yield and school zone
   must all be right; four errors are allowed on the other seventeen. Someone who
   treats it as a flat 16 out of 20 can score sixteen and still fail.
3. **The point system counts downwards for four years.** A newly licensed driver
   is credited with four points, not assessed against ten. Distracted driving is
   five points on its own, so one phone ticket in year one is a suspension - the
   same ticket to a fully licensed driver is not.
4. **Move over means half the posted limit.** Section 168.1 sets a fraction, not a
   feeling, and on a road with two or more lanes on your side you must change lane
   as well. Past a 100 zone that is 50 km/h, which is far slower than drivers
   expect, and it applies to tow trucks and utility vehicles as much as to police
   and ambulances.
5. **You are still supposed to sound your horn before passing.** Page 68 lists it
   among the safe-driving rules and page 35 makes the other half a legal duty: the
   overtaken driver must move right on hearing an audible signal and must not
   speed up. Nobody does the first half on a real New Brunswick road, which is
   exactly why it is on the exam.

---

## 8. Verification

Run 2026-09-07 from `C:\dev\funproject\typologyquiz`.

```
npx tsx scripts/extract-quotes.mjs newbrunswick
tmp/newbrunswick-quotes.json: 381 quotes

python scripts/verify-excerpts.py newbrunswick tmp/newbrunswick-handbook.pdf \
    tmp/newbrunswick-statute.txt tmp/newbrunswick-web.txt
newbrunswick: 381/381 quotes verified verbatim against 3 source(s)

python scripts/build-excerpt-snippets.py newbrunswick tmp/newbrunswick-handbook.pdf
newbrunswick: 322 snippets rendered, 3 not located, 56 skipped as not in this document
```

Of the 381 quotes, 325 were matched in the handbook PDF, 44 in the Motor Vehicle
Act text and 12 in the gnb.ca page text. The 56 the snippet builder skipped are
exactly those 44 statute and 12 web quotes, which correctly do not appear in the
handbook. The three not located - `yellow-lines`,
`child-seat-thresholds` and `skid-causes` - are verified verbatim but cross a
column or page break in a way `search_for` cannot match contiguously; they carry
no picture. Handbook-quote render rate is 322 of 325, or 99%.

Snippet crops were opened and checked: `stop-sign-shape` (p. 86),
`parking-hydrant` (p. 48), `two-second-rule` (p. 61) and `move-over` (p. 34) all
show the full highlighted passage with no clipped first characters. Because the
merged PDF is aligned to the printed page numbering, the `page` value in
`snippets.json` is the handbook's own printed page - `licence-carry` reads page 9
and `commercial-following-60m` reads page 106.

Validator, final run:

```
npx tsx scripts/validate-driving.mjs --only newbrunswick
=== New Brunswick (NB) - 6 sets ===
  snippets: 322 in manifest, 322/381 excerpts covered (85%)
  quotes verified: 381/381 verbatim against newbrunswick-handbook.pdf,
    newbrunswick-statute.txt, newbrunswick-web.txt
  excerpts: 381 (192 unused), questions wired: 195/195 (100%), quoted total: 56.5k chars
  questions: 195
  answer positions: A:25% B:26% C:26% D:24%
  context: 100%  source links: 100%  starred: 21%
  topics: signs:44 rules:25 safety:25 licensing:19 sharing:17 rightOfWay:16
          signals:13 speed:13 parking:9 impairment:7 emergencies:7
ERRORS: 0   WARNINGS: 0
```

`npx tsc --noEmit -p .` reports no error in any `src/lib/driving/newbrunswick`
file. It does report one pre-existing error outside this bank -
`src/lib/driving/rhodeisland/index.ts(3,37): Cannot find module './sets-4-6'` -
which belongs to another jurisdiction being built in parallel and was not touched.

### On the excerpt count

381 is above the playbook's rough 150-350 range and 192 of them are not
referenced by any question. Nothing was deleted to bring the number down: the
playbook's rule is that a verified quote goes only when no question uses it AND
another excerpt already covers the same rule, and the unreferenced ones are almost
all individual sign captions from Part 7 - the official meaning of the checkerboard,
the added lane, the reverse curve and so on - which nothing else duplicates and
which are exactly what a learner revising for the Road Sign Recognition Exam wants
to read. Coverage, the figure that matters, is 100% of questions wired to a
resolving key.

---

## 9. What could not be verified

- **The fee for either written exam.** The handbook declines to state it and
  points at Service New Brunswick. The gnb.ca Written and road tests page and the
  SNB Driver Examinations page describe the payment methods but give no amounts,
  and a search of NB Reg 83-42, the General Regulation under the Act, turned up
  registration and refund fees but no driver-examination fee. Third-party sites
  quote $25 plus HST for the full written test and $15 for a retest; that is not
  an official source and it is not stated anywhere in this bank.
  `officialTest.notes` says instead that the handbook does not publish the fee and
  directs the learner to SNB, which is what the Province itself says.
- **A time limit for either written exam.** None is published. Nova Scotia
  publishes 30 minutes per part; New Brunswick publishes nothing, so
  `officialTest.timeLimitMinutes` is omitted rather than guessed.
- **How long an online access code remains valid.** Asked on r/newbrunswickcanada
  in 2025 and unanswered there; not stated on the gnb.ca or SNB pages either. No
  question or note asserts anything about it.
- **How a 17-year-old completing 24 months of GDL obtains a Class 5 licence**, given
  that the handbook's Class 5 requirements state a minimum age of 18 while the GDL
  page's exit condition mentions only the 24 months. No question was written on the
  point. See section 5.
- **The Province's own count of what the sign exam draws from.** The handbook says
  twenty signs but does not say the exam is drawn only from Part 7, and no official
  source lists the sign pool. Sign questions are written from Part 7 only, which is
  the section the handbook itself calls the source of the exam.
- **French-edition wording.** Only the English edition was read. New Brunswick
  publishes both, the exams are available in both, and nothing in this bank turns
  on a difference between them - but no cross-check against the French text was
  done.
