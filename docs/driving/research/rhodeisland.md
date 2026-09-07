# Rhode Island: research note

Bank built 2026-09-07 to `docs/driving/PLAYBOOK.md`. Six sets, 195 questions,
463 verbatim excerpts, 353 snippet images.

Licensing authority verified rather than assumed: Rhode Island licensing runs
through the **Rhode Island Division of Motor Vehicles**, which is a division of
the **Department of Revenue**, not a standalone department and not an RMV. The
manual states this on printed page 4. The permit stage is the **Limited
(Learner) Instructional Permit** in the manual's own words - the DMV's current
web pages call it the **Limited Instruction Permit**, and the fee table calls
the 18-and-over version a **Permit Instructional**. All three names refer to
the same credential. The three graduated stages are Learner instructional
permit, Learner provisional license, full operator's license.

---

## 1. Sources read

| Source | Publisher | Edition label | URL | Fetched | How |
|---|---|---|---|---|---|
| Rhode Island Driver's Manual | RI Division of Motor Vehicles | **April 2024** (printed on the cover) | https://dmv.ri.gov/media/966/download?language=en | 2026-09-07 | Internet Archive capture of that same official URL (snapshot 2026-03-08). 87 pages, 5.5 MB. |
| Operator Manuals page | RI DMV | undated web page, "This page last updated on April 9th, 2025" | https://dmv.ri.gov/licenses-permits-ids/permits-tests/operator-manuals | 2026-09-07 | Internet Archive snapshot 2026-07-22 |
| Permits & Tests | RI DMV | undated web page | https://dmv.ri.gov/licenses-permits-ids/permits-tests | 2026-09-07 | Internet Archive snapshot 2026-05-09 |
| Knowledge Exams | RI DMV | undated web page | https://dmv.ri.gov/licenses-permits-ids/permits-tests/knowledge-exams | 2026-09-07 | Internet Archive snapshot 2026-03-08 |
| New License Permits | RI DMV | undated web page | https://dmv.ri.gov/licenses-permits-ids/permits-tests/new-license-permits | 2026-09-07 | Internet Archive snapshot 2026-04-19 |
| Permit Fees | RI DMV | undated web page | https://dmv.ri.gov/licenses-permits-ids/permits-tests/permit-fees | 2026-09-07 | Internet Archive snapshot 2026-05-09 |
| Road Tests | RI DMV | undated web page | https://dmv.ri.gov/licenses-permits-ids/permits-tests/road-tests | 2026-09-07 | Internet Archive snapshot 2026-06-07 |
| Preparing for Your Test | RI DMV | undated web page | https://dmv.ri.gov/licenses-permits-ids/permits-tests/road-tests/preparing-your-test | 2026-09-07 | Internet Archive snapshot 2026-05-09 |
| Rhode Island General Laws, Title 31 | RI General Assembly | current text as published, with per-section amendment history | https://webserver.rilegislature.gov/Statutes/TITLE31/INDEX.HTM | 2026-09-07 | Direct fetch, 535 sections across 21 chapters |
| RI Driver Education & Traffic Safety | Community College of Rhode Island | undated web page | https://www.ccri.edu/workforce/transportation/DriverEd.html | 2026-09-07 | Direct fetch |

### Why the Internet Archive for dmv.ri.gov

`dmv.ri.gov` sits behind a Cloudflare interstitial that refuses automated
clients. `curl` with a browser user agent returns HTTP 403 and a 5.9 KB "Just a
moment..." page; a **headless Chromium session driven through Playwright is
also refused**, returning the same interstitial with the title "Just a
moment..." after a 30-second wait. Every DMV source above was therefore read
from an Internet Archive capture of the same official URL, with the snapshot
date recorded in the table. Every `url` in `excerpts.ts` still points at the
live official page, which is where a learner should read it.

### Which manual is current, and why it matters

`dmv.ri.gov` serves **two** driver's manuals, and picking the wrong one would
have dated this bank by nine years:

- `https://dmv.ri.gov/sites/g/files/xkgbur556/files/documents/manuals/Driver_Manual_FINAL.pdf`
  - 79 pages, first page reads `rev. 08/2015`. This is the file most
    third-party practice sites still link to, and it is the top web-search hit
    for "Rhode Island driver's manual PDF".
- `https://dmv.ri.gov/media/966/download?language=en`
  - 87 pages, cover reads **April 2024**. This is the only manual linked from
    the DMV's own Operator Manuals page, where it is labelled "Rhode Island
    Driver's Manual PDF file, about 5 mb".

**Every quote in this bank comes from the April 2024 file.** The two differ
substantively: the 2024 edition adds the litter section, the roundabout
diagram, the HAWK signal, the Dutch Reach, shared-lane markings, the Move Over
law and the full DUI penalty tables, and it drops the old $25 road-test fee
paragraph.

### PDF text extraction check

Checked before anything was built on it, because two prior jurisdictions in
this project (Nebraska, West Virginia) had broken font maps that produced
gibberish which still verified as a substring match.

The April 2024 file extracts cleanly. Across 250,734 characters PyMuPDF found
**0 tokens matching the mangled-font pattern** (`\b[a-z]{2,}\d[a-z]+\b`) and
**1 matching the word-start pattern**, which is `1mbmegabytes` from the DMV
page furniture rather than the PDF. Non-ASCII characters are ordinary
typography: 849 ellipses, 416 bullets, 334 curly apostrophes, 189 square
bullets, 182 en dashes. No repair or hand-editing of any quote was needed.

Two extraction artifacts are worth recording because they shaped which quotes
were possible:

1. **Line-break hyphens.** The extractor's de-hyphenation joins `three-\nsecond`
   into `threesecond` and `right-of-\nway` into `rightof-way`. Quotes that
   would have crossed such a break were re-cut to avoid it rather than
   repaired. That is why, for example, the flashing-red excerpt is taken from
   the signal panel on page 42 rather than from the bullet on page 41.
2. **Prime marks.** The statute writes feet as `(100′)` with a U+2032 prime,
   which the shared normaliser does not fold. Statutory quotes therefore
   contain the prime exactly as published.

---

## 2. Test format

| Fact | Value | Official source |
|---|---|---|
| Questions | 40 multiple choice | Manual p.10: "The computerized knowledge exam has a 90-minute maximum and consist of forty (40) multiple choice questions." |
| Time limit | 90 minutes maximum | Same sentence, manual p.10 |
| Pass mark | 70 percent, i.e. 28 of 40 | **CCRI only.** "Yes. The final exam serves as the Rhode Island DMV Knowledge Test. Students must earn a passing score of 70%." (ccri.edu Driver Education FAQ) |
| Retest wait | at least 8 days | DMV Knowledge Exams: "Applicants that fail to pass the knowledge exam must wait at least 8 days before retaking the exam." |
| Where | DMV headquarters, 600 New London Avenue, Cranston | DMV Knowledge Exams; DMV Permits & Tests |
| When | Monday to Friday, 8:30 am to 2:45 pm, reservation only | DMV Permits & Tests |
| Languages | English, Spanish, Portuguese on the computer; any other language as a printed exam booked separately | DMV Knowledge Exams |
| Vision | 20/40 with corrective lenses, screened at the same appointment | Manual p.11; DMV Permits & Tests |
| Fee | $13.50 under 18; $8.50 at 18 or over (both include the $3.50 technology surcharge) | DMV Permit Fees |
| Early-stop rule | **none published** | Searched all seven DMV pages and the manual; no source states one |
| Study material | the manual; there is no official RI practice test and no published question bank | DMV Knowledge Exams: "Be sure to prepare for the exam by studying the entire contents of the Rhode Island Driver's Manual" |

**The pass mark is the one number with a provenance caveat, and it is stated
plainly in the bank rather than smoothed over.** The DMV publishes the question
count and the clock but never a pass mark, on any of the seven pages read.
CCRI is a state community college that the manual itself names as the body
that administers the RI DMV Knowledge examination for its driver-education
students (manual p.10: "All applicants who take the thirty-three (33) hour
driver education course with CCRI take the RI DMV Knowledge examination (Permit
test) through CCRI"), and its FAQ states 70 percent. That is why `ccri.edu` is
in `officialHosts`; it supplies two excerpts and the driver-education facts and
nothing else. Third-party practice sites split between 70 percent and 80
percent, which is exactly why none of them were used.

Related but distinct, and easy to confuse on the exam:

- Road test after failure: 30 days after the first, 90 after the second, 180
  after a third or later (DMV Road Tests).
- Permit hold before a first road test: six months under 18, 30 days at 18 or
  over (DMV Road Tests; manual p.12).
- The skills test has been a **closed-course test with the examiner outside the
  vehicle since June 2020** (DMV Road Tests, "Important Information Regarding
  Closed Course Testing").

---

## 3. Section and page map

Printed page numbers and PDF page numbers agree one for one, so `#page=N`
anchors land on the printed page named below.

| Section | Printed page |
|---|---|
| Table of Contents | 8-9 |
| I. Applying For a Rhode Island Driver's License | 10 |
| - Before Getting a Limited Learner Permit (exam format, driver ed) | 10 |
| - Limited Learner Permit (supervising driver, vision) | 11 |
| - Learner Provisional License (skills test, restrictions) | 12-14 |
| - Full Operator's License | 14 |
| - Summary: Rhode Island's Graduated Licensing System | 15-16 |
| - Out-of-State Drivers | 16 |
| II. Distractions, Drowsiness and Emotions | 17-25 |
| - Distracted Driving | 17-19 |
| - Drowsy Driving | 20-22 |
| - Emotions / Aggressive Driving and Road Rage | 22-25 |
| III. Basic Driving Skills and Safety Rules | 26-37 |
| - Before Starting The Engine | 26 |
| - Safety Belt / Child Restraint Law | 26-27 |
| - Stopping Your Vehicle (stopping distance, hydroplaning) | 28 |
| - How To Turn | 28-30 |
| - Turnabouts | 30-31 |
| - Stopping and Parking (three-second stop, no-parking list) | 31-33 |
| - Starting on a Hill / Lane Change / Entering the Roadway | 33 |
| - Passing Another Vehicle | 33-34 |
| - Proper Backing Procedures | 34 |
| - Freeway / Highway Driving | 34-35 |
| - Safe Driving on the Highway (speeds, Move Over, Basic Speed Law) | 35-36 |
| - Cellular Phone Usage | 36-37 |
| IV. Signals and Roadway Markings | 38-42 |
| - Signals (100 feet, hand signals) | 38 |
| - Roadway Markings | 38-39 |
| - Rotary / Roundabout | 40-41 |
| - Traffic Lights / Signals | 41-42 |
| V. Driving Emergencies | 43-47 |
| VI. Motorcycles | 48-49 |
| VII. Systems for Safe, Courteous and Defensive Driving | 50-51 |
| VIII. Sharing the Road Safely | 52-57 |
| IX. Laws You Must Know / fine schedule | 58-59 |
| X. Drinking / Drugs and Driving | 60-64 |
| XI. In Case of a Collision | 65-66 |
| XII. When Stopped by a Law Enforcement Officer | 67 |
| XIII. Equipment You Must Inspect | 68 |
| XIV. Organ and Tissue Donor Program | 69 |
| XV. Passing Your Driver Skills Test | 70 |
| XVI. One Final Word | 71 |
| XVII. Appendices (misc laws, work zones, CCRI, online, ID documents) | 72-83 |
| DMV Locations and Hours | 84 |
| SIGNS - Regulatory and Guide | 85 |
| SIGNS - Warning | 86 |

Note that the sign pages are picture pages: the extractable text is only the
caption under each sign. The bank's sign questions are therefore built on the
signs the manual actually names, plus the rules those signs enforce, rather
than on shape-and-color prose the manual does not contain.

---

## 4. What the handbook does not say

The manual is 87 pages and chatty, but on numbers it is thin. Everything below
is testable ("The computerized knowledge exam questions are based on the motor
vehicle laws and the rules of the road", manual p.11) and absent from the book.

| Rule the exam can ask about | Manual | Statute that supplies it |
|---|---|---|
| Unposted limit, business/residence district: 25 mph | states 25 for "residential areas" only | 31-14-2 |
| Unposted limit elsewhere, daytime: 50 mph | absent | 31-14-2 |
| **Unposted limit elsewhere, nighttime: 45 mph** | absent | 31-14-2 |
| Daytime = half hour before sunrise to half hour after sunset | absent | 31-14-2 |
| **School zone: 20 mph, within 300 feet, daytime, school days, signed** | absent entirely | 31-14-2 |
| Prima facie meaning (presumption, not absolute) | absent | 31-14-1, 31-14-2 |
| Places requiring reduced speed with no sign | Basic Speed Law only | 31-14-3 |
| Minimum speed / impeding traffic | absent | 31-14-9 |
| Slow traffic keeps right | "slow traffic must always keep to the right" | 31-15-2 |
| Return 100 feet before an oncoming vehicle when passing | absent | 31-15-6 |
| No passing within 100 feet of intersection, RR crossing, bridge | "at an intersection", no distance | 31-15-7 |
| Center lane of a three-lane road | absent | 31-15-11 |
| Emergency breakdown lane: no travel | "beware of vehicles traveling wrongfully in it" | 31-15-16 |
| Signal before stopping or slowing suddenly | absent | 31-16-7 |
| **Railroad stop: within 50 feet, no closer than 15 feet** | "stop, look and listen", no distance | 31-20-1 |
| **50-foot minimum following a school bus** | absent | 31-20-12 |
| Parking: bicycle lane, disability access aisle | absent | 31-21-4 |
| Open-highway stopping: 200-foot sight line | absent | 31-21-1 |
| **Hands-free law as amended 2 July 2025** | framed as a texting ban | 31-22-30 |
| Interior lights: half hour after sunset to half hour before sunrise | "at night" | 31-22-24 |
| Tail lamp visible 500 feet | absent | 31-24-7 |
| Earphone fines: $100 / $110 / $140 | ban stated, no fines | 31-23-51 |
| Bicycle: two abreast, keep right, 100-foot signal | two abreast and keep right given | 31-19-6, 31-19-7, 31-19-14 |
| Bicycle helmet 15 and younger, CPSC standard | age given, standard absent | 31-19-2.1 |
| Aggressive driving as a stacking offense | behavioral definition only | 31-27.1-3 |
| Through-highway stop and yield | absent | 31-17-3 |
| Sidewalk right of way | absent | 31-18-18 |
| Pedestrian outside a crosswalk yields; driver still owes due care | "the driver must always yield" | 31-18-5, 31-18-8 |
| Bridle path stops | absent | 31-20-15, 31-20-16 |

And three things no statute supplies either, which came from DMV pages:

- the 8-day knowledge-exam retest wait (Knowledge Exams);
- the road-test failure ladder of 30 / 90 / 180 days (Road Tests);
- the permit fees (Permit Fees).

---

## 5. Conflicts, and how each was resolved

**1. School bus penalty - manual vs statute.**
Manual p.54: "A fine between $250 to $500 and/or suspension of your driver's
license for a period up to thirty (30) days will be imposed for the **first**
violation of this law." Section 31-20-12: a first offense is a fine "not to
exceed three hundred dollars ($300)" and/or suspension up to 30 days, and the
$300-to-$500 mandatory band with a one-year revocation belongs to **subsequent**
offenses. These cannot both be right about the first offense.
*Resolution:* no question in the bank asks for a school-bus fine. The three
school-bus questions (`ri_s1_11`, `ri_s5_06`, `ri_s6_08`) are built on the
duty - stop from either direction, including private roads and parking lots,
with a divided-highway exception - which the manual and 31-20-12/31-20-13 state
identically. The manual's penalty sentence is kept as an excerpt
(`school-bus-penalty-manual`) but no question keys to it.

**2. Cell phones - the manual has been overtaken by the law.**
Manual pp.36-37 presents the adult rule as a texting ban ("TEXTING WHILE
DRIVING IS FORBIDDEN IN THE STATE OF RHODE ISLAND!"), which was correct when
the April 2024 edition went to press. Section 31-22-30 was amended by P.L.
2025 ch. 401 and ch. 402, **effective July 2, 2025**, to prohibit using a
wireless handset "to compose, read, or send text messages, **or for any other
purpose** while driving", with a hands-free exception, and to define "driving"
so that it includes being "temporarily stationary because of traffic, a traffic
light or stop sign".
*Resolution:* the questions follow the LAW (`ri_s3_04`, `ri_s5_09`) and say in
their trap notes that the manual has not caught up. The manual's texting
excerpts are retained and labelled as the manual's wording. The under-18 rule
is unaffected: no phone use at all, hands-free included, in both sources.

**3. Permit validity - manual vs DMV page.**
Manual p.12: "The permit is valid until the permit holder turns 18 years of
age. This permit can be renewed a maximum of two (2) times." DMV New License
Permits: "This permit is valid for one year or until the applicant turns 18,
whichever is greater", plus "If your permit is expired two years or more, you
need to retake the learner's permit test."
*Resolution:* `ri_s3_15` is built on the renewal ceiling of two, which both
sources give, and its context note states the difference outright rather than
picking a side.

**4. The manual contradicts itself on the permit's term.**
Page 12 says the permit runs until 18; page 12 also says "Be sure to schedule
your Driving Skills test with the DMV before the one (1) year Limited Learner
Permit expires." No question turns on this.

**5. Driver education fee.**
Manual p.10 gives $120.00 with a footnote that CCRI fees are subject to
change. CCRI's current page gives $145 tuition plus a $10 non-refundable
registration fee plus the AAA *How to Drive* textbook at roughly $39.95.
*Resolution:* no question asks the fee; the manual's footnote already warns it
moves.

**6. Road-test failure wait - manual vs DMV page.**
Manual p.14 and p.70 both give a flat 30 days. The DMV Road Tests page gives a
ladder: 30 days after the first failure, 90 after the second, 180 after a third
or later.
*Resolution:* `ri_s5_29` follows the DMV page, which is more specific and more
recent, and `ri_s2_12` uses the first rung (30 days) where the two agree.

---

## 6. What learners report

`python scripts/fetch-reddit.py rhodeisland rhodeisland:"permit test"
rhodeisland:"knowledge test failed" providence:"DMV written test"
RhodeIsland:"permit test" DMV:"Rhode Island knowledge test" newdrivers:"Rhode
Island permit" drivingtest:"Rhode Island"` saved **30 threads** to
`tmp/rhodeisland-reddit-*.txt`.

Be honest about the yield: Rhode Island's forum material is dominated by the
**road test** and by the difficulty of getting a **reservation**, not by the
knowledge exam. Roughly 13 of the 30 threads were on-topic for RI licensing,
and only about half of those touched the written exam at all. Several returns
were noise from the search terms (`r/RhodeIsland` "PPA written exam" is a
firefighter's physical performance assessment; "Zeppole Blind Taste Test";
"Contractor didn't pull permit"), and several `r/DMV` hits were about New York,
Texas, Florida or New Jersey. Nothing from those was used.

| Source | Thread | Year | What they said (paraphrase) | Shaped |
|---|---|---|---|---|
| r/RhodeIsland | Pursuing my license as an adult? | 2020 | A commenter listing what to actually memorize names three things: the 3 second rule, how far to park from a corner, and how far from a hydrant. Also: stop 100 percent at all stop signs, watch every sign because the examiner may quiz you on it, keep right because left is for passing, hazard lights while reversing. | `ri_s5_02`, `ri_s5_04`, `ri_s5_01`, `ri_s2_09`, `ri_s1_19` |
| r/RhodeIsland | RI driver's test question | 2026 | Two things. A joke that "if you're making a left and the light just turned green, you have the right of way" is corrected in-thread as a genuinely common local misconception - "oncoming traffic going straight has right of way and left hand turn has to yield", and described as confusing to out-of-state drivers. And: "Make sure you stop at every stop sign, even when the instructions you're given don't necessarily imply the expectation", plus "make sure to not do rolling stops". | `ri_s5_05`, `ri_s2_14`, `ri_s5_01`, `ri_s1_01` |
| r/RhodeIsland | Advice for drivers test? | 2025 | First-hand account of the closed-course test six weeks earlier: examiner stays outside the car, tells your passenger not to speak, checks lights and blinkers, then stations for parallel parking, three-point turn, reversing. The specific warning: after the last station they tell you to drive forward and meet them "following all the rules of the road", and there are stop signs on the way that are not at intersections which people drive straight through. | `ri_s5_01`, `ri_s3_26` |
| r/RhodeIsland | Failed my first road test | 2026 | Failed about two minutes in by hitting a cone while backing up. Multiple replies say this is the single most common failure and recommend practising with cones in a parking lot. | `ri_s3_26` |
| r/RhodeIsland | 33 and failed road test | 2026 | Failed while backing, told by the examiner to use the mirrors more; had practised in a different car from the one used on the day. A reply insists on looking rather than relying on mirrors or cameras. | `ri_s2_09`, `ri_s6_24` |
| r/RhodeIsland | Road test | 2026 | Confirms the test is a parking-lot course, that parallel parking has been added since 2018, and that there is no time limit. | `officialTest.notes` |
| r/RhodeIsland | DMV has no permit test reservations? | 2023 | Nobody could find a permit-test slot all summer. The workable advice: new appointments appear just before 8:30 am on weekdays, cancellations appear through the day, and you must pick the reservation option that covers a written or computerized permit test rather than a licence transaction. | `officialTest.notes` |
| r/RhodeIsland | Two questions about obtaining driving permit for 16yo | 2025 | A 16-year-old passed the exam the week before his birthday; the permit itself can be collected at any DMV location with an available appointment, not only Cranston. | `officialTest.notes` |
| r/RhodeIsland | Taking DMV knowledge computerized written exam test for my learner's permit tomorrow | 2023 | Procedural nerves; the answer is that there is a separate licences section at the Cranston building and you check in there. | background only |
| r/RhodeIsland | Rhode Island Permit Test | 2025 | A freshly 18-year-old with no driver education asks where to start. Every reply points at generic third-party practice sites; **nobody names an official Rhode Island practice test, because there is not one.** | `officialTest.notes` |
| r/RhodeIsland | Question about driving permit test | 2019 | Parental accompaniment for the permit application is an under-18 requirement only. | background only |
| r/DMV | I failed my knowledge test twice | 2024 | Not Rhode Island (California), but the recurring point is general and worth repeating: online practice questions are not the exam's questions, and reading the manual in sections beats drilling a third-party bank. | `officialTest.notes` |

### The three strongest traps this surfaced

1. **The rolling stop, against a three-second standard.** Rhode Island's manual
   is one of very few that puts a clock on a stop: "drivers should completely
   cease all forward motion for a minimum of three seconds." Learners
   independently report failing on stop signs, and one thread describes the
   specific setup - stop signs on the course that are not at any intersection,
   reached after being told the test is finished. `ri_s1_01`, `ri_s5_01`.
2. **The measured distances, none of which match the neighbouring states.**
   A Rhode Island commenter naming what to memorize picks out the hydrant and
   the corner. The figures are 8 feet from a hydrant (most of the country uses
   15), 20 feet from a crosswalk at an intersection, 30 feet from a stop sign
   or signal, 50 feet from a railroad rail. `ri_s1_08`, `ri_s5_02`, `ri_s2_03`.
3. **The left turn on a fresh green.** A 2026 thread makes the joke and then
   corrects it in as many words, describing the habit as something out-of-state
   drivers find confusing and locals do daily. The law is unambiguous: a
   circular green permits the left turn but the turning driver yields to
   oncoming traffic close enough to be an immediate hazard (31-13-6, 31-17-2).
   `ri_s2_14`, `ri_s5_05`.

Beyond Reddit: no Rhode Island "most missed questions" page exists, the DMV
publishes no practice test, and there is no statute listing the subjects the
knowledge test must cover. Both of the official props that carried Minnesota's
set 5 are simply absent here, which is why set 5 leans on the statute-versus-
manual gaps instead.

---

## 7. Local gotchas

The seven in `localGotchas`, and why each catches people.

1. **A stop is three seconds long.** The manual states it as a minimum, in
   numbers, which almost no other state does. A learner who has practised
   "come to a complete stop" from a generic source stops for well under a
   second and reads as rolling to an examiner counting.
2. **8 feet from a hydrant.** Fifteen feet is the figure in most states and in
   every generic practice bank. Rhode Island's manual and 31-21-4 both say 8,
   and the rest of its distances (20 / 30 / 50 / 20 / 75) are equally specific.
3. **The unposted limit falls to 45 mph at night.** The manual prints one
   speed sentence and it does not include this. The statutory day/night split
   is unusual, and the boundary is clock-based - half an hour after sunset,
   which in a Rhode Island December is mid-afternoon.
4. **20 mph in a school zone, within 300 feet, only where signed.** Absent from
   the manual entirely. The conditional part catches people in both directions:
   they either assume no school-zone limit exists, or assume it applies
   wherever a school does.
5. **The manual's phone section is a year out of date.** It reads as a texting
   ban for adults. Since 2 July 2025 the statute bars hand-held use for any
   purpose, hands-free excepted, and counts you as driving while stopped at a
   light. Under 18, hands-free is banned too - the exception does not reach
   minors.
6. **Signal 100 feet ahead**, for turns and for lane changes, and the same 100
   feet limits how early you may enter a centre two-way left-turn lane. Drivers
   who signal as they begin the turn have given no warning at all.
7. **School buses: both directions, private roads and parking lots.** The duty
   is wider than drivers expect and the only exception is a genuine divided
   highway. The related 50-foot minimum following distance behind a bus is in
   the statute and not in the manual.

---

## 8. Verification

Run 2026-09-07.

```
$ npx tsx scripts/extract-quotes.mjs rhodeisland
tmp/rhodeisland-quotes.json: 463 quotes

$ python scripts/verify-excerpts.py rhodeisland tmp/rhodeisland-handbook.pdf \
    tmp/rhodeisland-statute.txt tmp/rhodeisland-arch-*.txt tmp/rhodeisland-ccri-drivered.txt
rhodeisland: 463/463 quotes verified verbatim against 8 source(s)

$ python scripts/build-excerpt-snippets.py rhodeisland tmp/rhodeisland-handbook.pdf
rhodeisland: 353 snippets rendered, 4 not located, 106 skipped as not in this document

$ npx tsc --noEmit -p .
(no output)

$ npx tsx scripts/validate-driving.mjs --only rhodeisland
  snippets: 353 in manifest, 353/463 excerpts covered (76%)
  quotes verified: 463/463 verbatim against [8 sources] (2026-09-07T11:37:48-06:00)
  excerpts: 463 (283 unused), questions wired: 195/195 (100%), quoted total: 81.5k chars
  questions: 195
  answer positions: A:26% B:25% C:24% D:25%
  context: 100%  source links: 100%  starred: 20%
  topics: rules:28 safety:26 rightOfWay:20 sharing:19 signals:18 signs:16 speed:15 impairment:15 parking:13 licensing:13 emergencies:12
ERRORS: 0   WARNINGS: 5
```

### The five warnings, and why each stands

All five are the same warning: `quote is N chars - trim toward one or two
sentences`, which fires above 320 characters. The hard cap is 600 and none is
near it. Each is a single indivisible unit of source text that loses its
meaning if cut:

| Key | Chars | Why it is not trimmed |
|---|---|---|
| `underage-transport-alcohol` | 505 | One sentence of R.I.G.L. 3-8-9. Cutting it either loses the "opened or unopened, in any part of the vehicle" clause, which is the whole point, or loses the 30-day suspension, which is the consequence. |
| `rigl-unattended-vehicle` | 447 | One sentence of 31-26-4. It carries both branches of the duty - locate the owner, or leave a written notice - and half of it is not the rule. |
| `turn-abcd` | 343 | The manual's four-part A-B-C-D turn mnemonic. Quoting three quarters of a mnemonic is worse than quoting all of it. |
| `rigl-school-bus-stop` | 343 | One sentence of 31-20-12. It must carry the list of places (street, highway, private way, parking area) and the duty (stop before reaching the bus) together, because the places are the surprising half. |
| `vehicle-height-four-inches` | 332 | One sentence of R.I.G.L. 31-23-13.1 as reproduced in the manual's appendix. The four-inch limit is meaningless without the 10,000 lb GVWR qualifier that precedes it. |

### The four snippets not located

`collision-common-causes`, `drowsy-ineffective`, `minor-phone-penalties` and
`texting-penalties` are bulleted or tabular passages whose lines are laid out
across columns in the PDF, so the renderer cannot draw one tight band around
them. All four **verify verbatim**; only the picture is missing. 353 of the
357 manual quotes rendered, which is 99 percent.

### What could not be verified, and what was done instead

1. **A DMV-published pass mark.** None exists on any of the seven DMV pages
   read, or in the manual. CCRI's 70 percent is used, its provenance is stated
   in `officialTest.notes` on the jurisdiction page itself, and the learner is
   told to treat 28 of 40 as a floor rather than a target.
2. **Whether the live dmv.ri.gov pages differ from the archived captures.**
   Cloudflare refuses both `curl` and headless Chromium, so the live pages
   could not be read from this machine. The captures are between 2 and 6 months
   old at time of writing and every cited URL is the live official one.
3. **Whether the knowledge exam has an early-stop rule** (some states end the
   test once failure is arithmetically certain). No official source states one
   either way, so `officialTest.notes` says nothing about it rather than
   guessing.
4. **Any exam content.** There is no official Rhode Island practice test, no
   published question bank, and no statute listing required subjects. Set 5 is
   therefore built from the manual-versus-statute gaps and from what learners
   report, not from any reconstruction of exam items. No question anywhere in
   this bank is derived from anybody's recollection of a real exam question.
