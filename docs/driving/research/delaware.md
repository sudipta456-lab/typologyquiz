# Delaware - research note

Bank built 2026-09-07 to `docs/driving/PLAYBOOK.md`. Slug `delaware`, code `DE`.
195 questions in six sets, 571 verbatim excerpts, 547 rendered snippet images.

## 1. Sources read

| Source | Publisher | Edition label | URL | Fetched | How |
|---|---|---|---|---|---|
| Delaware Driver Manual | Delaware Division of Motor Vehicles | **July 2026** (cover page 1); PDF metadata records creation 2026-06-03, modification 2026-06-05, Adobe InDesign 21.0 | https://dmv.de.gov/forms/driver_serv_forms/pdfs/dr_frm_manual.pdf | 2026-09-07 | Direct download, 17.0 MB, 152 pages, saved to `tmp/delaware-handbook.pdf` |
| Delaware Code, Title 21 (Motor Vehicles) - Chapters 21, 27, 31, 41, 42, 43, 45 | Delaware General Assembly | Online consolidation as published 2026-09-07 | https://delcode.delaware.gov/title21/ | 2026-09-07 | Direct, subchapter index pages, ~1.0 MB of text saved to `tmp/delaware-statute.txt` |
| DMV, Drivers License/Identification Cards - Sample Written Test | Delaware DMV | Undated web page | https://dmv.de.gov/DriverServices/drivers_license/index.shtml?dc=dr_lic_written | 2026-09-07 | Direct, saved to `tmp/delaware-web-written.txt` |
| DMV, Drivers License Examination | Delaware DMV | Undated web page | https://dmv.de.gov/DriverServices/drivers_license/index.shtml?dc=dr_lic_exam | 2026-09-07 | Direct, saved to `tmp/delaware-web-exam.txt` |
| DMV, Frequently Asked Questions (General) | Delaware DMV | Undated web page | https://dmv.de.gov/DriverServices/faqs/index.shtml?dc=dr_faq_general | 2026-09-07 | Direct, saved to `tmp/delaware-web-faq.txt` |
| DMV, Graduated Driver License | Delaware DMV | Undated web page | https://dmv.de.gov/DriverServices/drivers_license/index.shtml?dc=dr_lic_grad_dl | 2026-09-07 | Direct, saved to `tmp/delaware-web-gdl.txt`. **Stale** - see conflicts |
| DMV, Information Regarding Violations (point system) | Delaware DMV | Undated web page | https://dmv.de.gov/DriverServices/drivers_license/index.shtml?dc=dr_lic_violation | 2026-09-07 | Direct, saved to `tmp/delaware-web-points.txt` |
| DMV, Sample Driving Exam (ten-question practice test) | Delaware DMV | Undated web page | https://dmv.de.gov/app/dmvexam/home | 2026-09-07 | Direct; ten questions and their answer key are reproduced on the Sample Written Test page above |

No archive captures were needed. Every official page and the manual itself responded
to a direct request from this machine.

**Licensing authority, verified rather than assumed.** Delaware licensing is run by
the **Division of Motor Vehicles**, which sits inside the **Delaware Department of
Transportation** - the manual's own message page is signed by Shante Hastings,
Secretary of Transportation, and Amy Anthony, Director of the Division of Motor
Vehicles. The Division publishes the manual itself; the corrections address printed
on page 3 is "Chief of Driver Services, Delaware Division of Motor Vehicles". The
permit stage names were taken from the manual rather than from memory: under 18 it is
a **GDL: Level One Learner's Permit** (Section Two, page 28), and at 18 or over it is
a **Temporary Instruction Permit (Learner's Permit)** (page 30). The licence itself is
a **Class D Operator's License** (page 37).

**Edition check.** Two DMV pages disagree about which manual is current.
`dmv.de.gov/forms/index.shtml` labels the English manual "August 2025", and the older
`dmv.de.gov/menu/forms_manuals.shtml` still labels the same file "Publish Date:
09/25/2015". Neither is right: the file served from that URL on 2026-09-07 carries
**July 2026** on its cover and was produced in June 2026. `handbookEdition` records
the cover date, which is what a learner holding a printed copy can compare against.

## 2. Test format

| Item | Value | Source |
|---|---|---|
| Questions | **32** | DMV Sample Written Test page: "The actual Class D knowledge test consists of 32 questions of which 26 must be answered correctly to pass the test." |
| Correct answers to pass | **26** (81.25%) | Same page |
| Time limit | **None published.** Neither the manual nor any DMV page states one | Manual pages 40-43; DMV exam page |
| Early-stop rule | **None published** | As above |
| Retest wait (knowledge) | **Not published.** The manual's 30-day rule is written for the road exam: "If you fail any part of the road exam ... You must wait at least 30 days before taking the exam or exams again" | Manual page 43 |
| Road exam wait after knowledge exam | 30 days (Class D), 10 days (motorcycle) | Manual page 41 |
| Where taken | Wilmington (New Castle), Delaware City (New Castle), Dover, Georgetown | Manual page 42 |
| Fee | **$50.00 Class D licence fee for an 8-year licence**, paid at application, for a GDL applicant. The manual does not price the knowledge test separately | Manual page 29 |
| Parts of the examination | Manual says **four** (vision screening, Highway Sign and Signal Test, Rules Of The Road Test, road test). The DMV exam web page says **two** | Manual page 40 vs DMV exam page |
| Vision standard | 20/40 with or without lenses; 20/40 to 20/50 may be restricted to daylight driving | Manual pages 40-41 |
| Sample test | Ten questions on the DMV site, with an answer key. Not a subset of the real 32 | DMV Sample Written Test page |

**Not sectioned.** The Highway Sign and Signal Test is a separate part of the driver
examination, but it is delivered by an examiner showing shapes, colours and symbols
and asking what they mean, and no pass count is published for it. `sectionedBy` was
therefore left unset rather than inventing a split. The sign half of the exam is
covered in `officialTest.notes` and by carrying 22 `signs` questions plus 16 `signals`
questions through the bank.

## 3. Section and page map

Printed page numbers and PDF page numbers are identical in this edition, so
`#page=N` deep links land on the printed page N. Verified by spot check: printed
page 11 is PDF page 11.

| Section | Pages |
|---|---|
| Governor's letter, Message For Delaware Drivers | 2-3 |
| Table of contents | 4-10 |
| **Section One - Introduction**: Definitions 11, On-line Services 13, Motor Vehicle Fees 14 | 11-15 |
| **Section Two - Driver License Information** | 16-59 |
| Federal identification standards, documents | 16-17 |
| Driver licence requirements, applying | 18-20 |
| Acceptable identification documents | 21-23 |
| Driving Privilege Card | 24-26 |
| **Graduated Driver License** | 27-30 |
| Requirements for first-time applicants over 18 | 30 |
| Transfers from other jurisdictions (over 18 / under 18) | 30-31 |
| Renewal, restricted, replacement, ID cards, donor, Good Samaritan | 32-36 |
| Driver licence classifications, endorsements | 37-40 |
| **The Driver Examination** (vision, sign test, rules test, road test) | 40-43 |
| Medical information and reporting | 43-44 |
| Licence revocation and suspension, habitual offender | 44-46 |
| **Driver Improvement Problem Driver Program**, point system | 46-49 |
| **Impaired driving**, BAC, distracted driving, drowsy driving | 49-53 |
| **Delaware drinking and driving laws**, DUI penalties, IID | 54-59 |
| **Section Three - Vehicle Equipment, Titles, Registration, Insurance** | 60-68 |
| Required, additional and prohibited equipment; using headlights; belts | 60-63 |
| Insurance, inspection, title, registration | 63-68 |
| **Section Four - Rules of the Road** | 69-104 |
| Right-of-way (intro), signals, arrows | 69-72 |
| Pedestrian signals, APS, HAWK, RRFB, bicycle signals | 72-74 |
| Highway signs: regulatory, warning, guide, information, beacons | 74-78 |
| Work zones | 78-80 |
| Some Important Delaware Laws: cell phones, signaling, overtaking, Move Over | 81-82 |
| Traffic control laws, ENS, highway-rail, pavement markings | 83-85 |
| Reversible and reserved lanes, roundabouts, DDI, shared centre lane | 85-87 |
| General rules (driving, passing, turning), Right-Of-Way list | 87-89 |
| Stopping for school buses, penalties | 89-90 |
| **Parking**, stopping and parking violations | 91-93 |
| **Speed**: general restriction, limits table, minimum speed, speed signs | 93-94 |
| Other highway users: pedestrians 94, bicycles 96, motorcycles 99, mopeds 101, trucks 102 | 94-104 |
| **Section Five - Driving Skills and Safety Tips** | 105-146 |
| Before you drive, load, glass, seat, mirrors, belts, child restraints | 105-111 |
| Traffic stops and legal rights | 112-113 |
| Basic driving, braking, seeing well, scanning, lights | 113-119 |
| Communicating (horn, signals, emergency signals) | 120-122 |
| Adjusting speed, night driving, drive defensively, how well can you see | 123-127 |
| Sharing space (ahead, behind, side, merge, cross, pass) | 127-132 |
| Be in shape to drive (vision, hearing, fatigue, health, emotions) | 133-135 |
| Vehicle emergencies, avoiding collisions, skids | 136-139 |
| Protect yourself in collisions, crashes, reporting | 139-142 |
| Crash reporting form | 145-146 |
| Index | 147-151 |

## 4. What the handbook does not say

Delaware's manual is unusually complete. It prints the full speed table (page 93),
the full parking-distance list (pages 92-93), the 300-foot signalling distance
(pages 81 and 122), the crash-reporting thresholds (page 141) and the headlight
rules (page 62) - all figures most state manuals leave to their statute. The gaps
that remain:

| Gap | Where the bank gets it |
|---|---|
| How many questions the knowledge test has, and the pass mark | DMV Sample Written Test page: 32 questions, 26 correct. Excerpt `exam-32-questions`, used by `de_s1_28` and `de_s6_30` |
| Time limit, early-stop rule, knowledge-test retest wait | **Nowhere official.** Stated as unpublished in `officialTest.notes` rather than guessed |
| How far below the limit the Move Over law requires you to slow | Manual says only "reduce to a safe speed" (page 82). Title 21 Section 4134(b)(2)b: at least 20 mph below the posted limit where that limit is 50 mph or above. Excerpt `moveover-20-under`, used by `de_s5_08` |
| The exact terms of the bicycle stop-sign yield | Manual gives one line (page 96). Title 21 Section 4196A: full stop where the intersecting road has 3+ lanes, or where a vehicle is already stopped at the same sign; slow-and-yield on 2 or fewer lanes. Excerpts `bike-statute-3lanes`, `bike-statute-2lanes`, `bike-statute-vehicle-stopped`, used by `de_s5_09` |
| Whether the school-bus four-lane exception needs a divider | Title 21 Section 4166(d)(1) - see conflicts. Excerpt `bus-statute-stop`, used by `de_s5_03` |
| Statutory wording of the speed defaults | Title 21 Sections 4168 and 4169. Excerpts `speed-statute-limits`, `speed-statute-lanes`, `speed-statute-general`, `speed-statute-special` |
| The definition of "when children are present" for a school zone | The manual's own footnote on page 93 says it "is defined in Title 21 of Delaware Code", but Section 4169(a)(3) only says such conditions "may include when children are present or while 1 or more warning lights flash" and gives no further definition. **Not resolved.** No question in the bank turns on it; the school-zone questions are built on the posted 20 mph sign instead |

## 5. Conflicts

1. **Knowledge test length: 32/26 vs 30/24.** The DMV's Sample Written Test page says
   "The actual Class D knowledge test consists of 32 questions of which 26 must be
   answered correctly to pass the test." The DMV's General FAQ page says "There are 30
   questions on the knowledge test of which at least 24 must be answered correctly to
   pass" - and links to the Sample Written Test page as its own authority.
   **Resolved in favour of 32/26**, because the FAQ cites the other page. Both figures
   are recorded in `officialTest.notes` and both are quoted as excerpts
   (`exam-32-questions`, `exam-answers-in-manual`) so a learner can see the
   disagreement. Either way the pass mark is about 81%.

2. **School bus, four or more lanes: divided or not.** Manual page 81 says "except
   when you are on the opposite side of a highway having four or more lanes"; manual
   page 95 says "except when you are on the opposite side of a **divided** highway
   having four or more lanes"; Title 21 Section 4166(d)(1) says "On roadway or roadways
   with 4 or more lanes, the driver approaching from the front shall not stop", with no
   divider requirement. **Not resolved silently.** The two questions that turn on it
   (`de_s3_18`, `de_s5_03`) are built on roads where all three readings agree:
   `de_s3_18` states plainly four lanes of traffic, and `de_s5_03` uses a road with two
   lanes each way plus a centre turn lane, which fails every reading and therefore
   requires a stop. `de_s6_08` asks the general rule and takes its answer from the
   manual's page 81 wording, which is the version the exam is written from.

3. **How many parts the driver examination has.** Manual page 40: "The examination
   consists of four parts." DMV Drivers License Examination page: "The examination
   consists of two parts." The manual then describes four (vision, sign and signal,
   rules of the road, road test) while the web page describes two before its content
   ends. **Resolved in favour of the manual**, which is the document the exam is drawn
   from; recorded in `officialTest.notes`.

4. **GDL licence fee: $50 vs $40.** Manual page 29: "$50.00 Class D license fee for an
   8-year license". DMV Graduated Driver License web page: "$40.00 class D license fee
   ... All new licenses will be 8 year licenses." The web page is otherwise visibly
   older than the manual (it names a Department of Education contact the manual has
   replaced, and a different fax number). **Resolved in favour of the manual**, whose
   edition date is known. No question turns on the fee.

5. **Forms page edition labels.** `dmv.de.gov/forms/index.shtml` says "August 2025";
   `dmv.de.gov/menu/forms_manuals.shtml` says "Publish Date: 09/25/2015"; the file
   itself says July 2026. **Resolved in favour of the file.**

## 6. What learners report

Reddit was collected with `python scripts/fetch-reddit.py delaware ...` across two
runs (fourteen queries in total, against `Delaware`, `wilmington`, `DMV`,
`newdrivers`, `drivingtest`, `driving` and `Teenagers`). **92 threads were saved** to
`tmp/delaware-reddit-*.txt`. Most are noise - vehicle inspection, DMV queues, and
threads where the DMV-subreddit query surfaced California or Texas posts. The
Delaware-specific, test-relevant ones are listed below. Paraphrases only; no verbatim
comment text, and no question was taken from anyone's memory of the real exam.

| Sub | Thread | Year | What it says | Shaped |
|---|---|---|---|---|
| r/Delaware | Question on the Delaware DMV written test | 2022 | A commenter names the four-way stop as "the only question that I remember being a zinger" and gives the right-hand rule as the answer; a second commenter pushes back, saying arrival order is what actually governs. A third lists three rules from memory: a flashing arrow permits a turn on red after a stop, headlights must be on any time the wipers are used, and you need not stop for a bus on the opposite side only where there are two full driving lanes each way. Several commenters push the DMV's own sample test as sufficient preparation | `de_s1_03`, `de_s5_01`, `de_s6_13` (four-way stop); `de_s5_02` (wipers); `de_s2_22`, `de_s3_19`, `de_s5_05` (arrows); `de_s3_18`, `de_s5_03`, `de_s6_08` (bus) |
| r/Delaware | Advice on taking the written test again | 2026 | Poster failed with seven wrong after studying the DMV sample exam, and reports being surprised by topics the sample never touched. Commenters say the sample is a fraction of the manual and that Delaware pulls from the whole book | `officialTest.notes` (sample test is not a subset); `de_s1_28`, `de_s6_30` |
| r/Delaware | What do I need to know for my Driver's test? | 2023 | Commenters flag Delaware-versus-other-state differences by name, including seat belt law and "we don't have to stop on 4 lane roads". Another says signals should request an opening rather than confirm one already taken. Another: yield signs are not stop signs and stop signs are not yield signs - know the shapes and meanings | `de_s1_14` (belts, all occupants); `de_s3_18`, `de_s6_08` (bus); `de_s1_05`, `de_s5_04`, `de_s6_15` (signal distance); `de_s1_13`, `de_s6_17` (shapes) |
| r/Delaware | Getting drivers license as an adult? | 2021 | A commenter warns that the test is easy but "they try to trick you on 4 way stop questions". Another confirms the manual is available free at the front desk of any DMV | `de_s1_03`, `de_s5_01` |
| r/Delaware | Hi I'm trying to get my license I'm over 18 ... third attempt | 2024 | Commenters report that the questions change between attempts and appear randomised | `officialTest.notes` (study the book, not one form) |
| r/Delaware | Permit before license? | 2024 | Over-21 poster asks whether a learner's permit is needed before a road test. Answer: yes, unless you already hold an out-of-state licence | `de_s2_30`, `de_s4_25` |
| r/Delaware | How to convert out-of-state provisional license | 2024 | A commenter states that Delaware has no "provisional" licence - a graduated system for teenagers, then a full licence. Confirmed against the manual's classification list | `de_s6_19` (GDL auto-conversion) |
| r/Delaware | Driving Test Wilmington Tips? | 2026 | Road-test experience: parallel parking is done in the DMV lot **before** the road portion, and failing it ends the test. Another describes the route including a school zone | `officialTest.notes`; `de_s2_18` (12 inches from the curb) |
| r/Delaware | Delaware driving test/permit | 2022 | Road-test experience: parallel parking and a three-point turn, roughly fifteen minutes | Background only |
| r/Delaware | Driver's license for 17yo homeschooler | 2026 | Homeschooled students need a Department of Education-approved driver education course to enter the GDL programme; commenters point to free options | `de_s3_10` context, `officialTest.notes` |
| r/DMV | what is the Delaware road test at the DMV like? | 2024 | Points at the DMV's own road-test page. No independent claims | Background only |
| r/DMV | Taking a permit test (Delaware) | 2023 | Question asked, **no comments**. Recorded so the count is honest | Nothing |

Two official sources were worth more than any of them, exactly as the playbook
predicts. The manual's own **Rules Of The Road Test** paragraph (page 41) names five
subjects the exam asks about - the two-lane speed limit, what to do at a flashing red
signal, when not to pass, what to do in a skid, and how far from a fire hydrant you may
park. All five are in the bank (`de_s1_04`/`de_s6_07`, `de_s1_10`/`de_s6_26`,
`de_s3_05`/`de_s5_11`, `de_s1_27`, `de_s1_08`/`de_s6_23`). And the Division's own
**ten-question sample test** shows the style and the rules it favours: lane-change
shoulder check, left turn yielding to oncoming traffic, the $500 crash-report
threshold, pulling right for an emergency vehicle, the four-way stop, bridges freezing
first, parking downhill, making room for merging traffic, following distance in bad
weather, and low beams in fog. Set 6 tests those same rules in our own words.

### The three strongest traps

1. **The four-way stop tie-breaker.** Named by two separate Delaware threads as the
   item that catches people, and the wrong answer given in the thread itself is the
   right-hand rule applied to a case that is not a tie. Delaware's manual states both
   halves in one sentence on page 88: first to arrive goes first, and the vehicle on
   the right goes first only when more than one arrives together. `de_s1_03` asks the
   ordinary case, `de_s5_01` asks the tie, `de_s6_13` asks it in the DMV's own phrasing.

2. **The school-bus four-lane exception.** Delaware is one of the few states where you
   may pass a stopped school bus coming the other way, and only on a road with four or
   more lanes. Commenters repeat it as a rule of thumb without the lane condition, and
   the manual and the statute word the condition differently. A first offence costs
   $115-$230 and a one-month suspension during which no driving authority at all is
   permitted (manual page 90).

3. **The 300-foot signal.** Delaware requires the signal 300 feet before the movement,
   three times the 100 feet taught in Maryland, Pennsylvania and New Jersey - the three
   states most new Delaware drivers arrive from. Stated twice in the manual (pages 81
   and 122) and in Title 21 Section 4155(b) as "not less than the last 300 feet or more
   than 1 / 2 mile". Tested at `de_s1_05`, `de_s5_04` and `de_s6_15`.

## 7. Local gotchas

The five in `localGotchas`, and why each catches people:

1. **300-foot signalling distance.** The single number most likely to be wrong in the
   head of a driver moving in from a neighbouring state, and it is stated in feet
   rather than seconds so speed does not change it.
2. **Four-way stop: arrival order first, right-hand rule only for ties.** Two Delaware
   threads name this as the exam's trick question, and the wrong answer is the half of
   the rule everyone remembers.
3. **School bus, four or more lanes.** A genuine Delaware exception that drivers
   over-apply. Counting a centre turn lane to reach four lanes is the specific error;
   the penalty for getting it wrong on the road is a month with no driving authority.
4. **Wipers on means headlights on.** Stated three times in the manual (pages 60, 119
   and 120) and forgotten in daytime rain. Daytime running lights do not satisfy it,
   because on most cars they leave the tail lights dark.
5. **Cyclists may lawfully yield at a stop sign.** The Bicycle Friendly Delaware Act
   changed the rule and Section 4196A sets its limits. A driver who pulls out because
   the approaching bicycle "has to stop" is the one at fault on a two-lane street.

## 8. Verification

Run 2026-09-07, in this order.

**PDF extraction check, done before any quote was written.** The July 2026 manual
extracts cleanly with PyMuPDF: 404,057 characters, no broken font map, and
`verify-excerpts.py`'s mangled-token detector finds nothing but `4yr`, `5yr` and `8yr`
(which are genuine text in the licence-duration tables). What it does have is a
localised InDesign spacing artefact that inserts a space after an fi/fl/ffi ligature
and before some full stops - "traffi c", "infl uence", "10-15 mph .". It is confined to
the front matter (pages 2-3), the contents and index (4-10, 147-150), and a handful of
body pages (21, 50, 55, 56, 57, 67, 86). Counted across the whole document: 6
occurrences of "traffi c" against 222 clean "traffic", 1 "infl uence" against 15 clean
"influence". Page 86 (roundabouts and the diverging diamond) is the one body page
badly affected, so the roundabout entry-yield rule is quoted from the clean page 85
text and the page 77 warning-sign caption instead, and the one page-86 quote used
(`roundabout-speed`) stops short of the trailing " ." artefact. No quote in the bank
runs through a corrupted token.

```
$ npx tsx scripts/extract-quotes.mjs delaware
tmp/delaware-quotes.json: 571 quotes

$ python scripts/verify-excerpts.py delaware tmp/delaware-handbook.pdf \
      tmp/delaware-statute.txt tmp/delaware-web-written.txt \
      tmp/delaware-web-faq.txt tmp/delaware-web-exam.txt
delaware: 571/571 quotes verified verbatim against 5 source(s)

$ python scripts/build-excerpt-snippets.py delaware tmp/delaware-handbook.pdf
delaware: 547 snippets rendered, 8 not located, 16 skipped as not in this document

$ npx tsx scripts/validate-driving.mjs --only delaware
=== Delaware (DE) - 6 sets ===
  snippets: 547 in manifest, 547/571 excerpts covered (96%)
  quotes verified: 571/571 verbatim against delaware-handbook.pdf, delaware-statute.txt,
    delaware-web-written.txt, delaware-web-faq.txt, delaware-web-exam.txt
  excerpts: 571 (405 unused), questions wired: 195/195 (100%), quoted total: 83.5k chars
  questions: 195
  answer positions: A:25% B:25% C:25% D:25%
  context: 100%  source links: 100%  starred: 18%
  topics: rules:30 safety:29 signs:22 sharing:20 rightOfWay:19 signals:16 speed:13
          parking:13 impairment:13 licensing:11 emergencies:9
==================================================
ERRORS: 0   WARNINGS: 0

$ npx tsc --noEmit -p .
(clean)
```

The 16 skipped snippets are the 13 statute quotes and 3 web-page quotes, which are not
in the PDF and are expected to miss. The 8 handbook quotes that rendered no image are
ones whose text crosses a column or a bulleted list in a way the crop cannot follow:
`cell-exemptions`, `park-sidewalk-driveway`, `ped-has-row-when`, `ped-must-yield-when`,
`emerg-off-pavement-no-brakes`, `avoid-abs-stop`, `exam-road-bring`,
`exam-road-back-50-feet`. All eight are still verified verbatim; only the picture is
missing, and each has a page-anchored deep link. Snippet coverage of handbook quotes is
547 of 555, or 98.6%.

Three rendered PNGs were opened and checked by eye (`red-right-turn.png`,
`speed-table.png`, `park-hydrant-15.png`): the highlight lands on the quoted text and
no letters are clipped at the left margin.

**Answer positions.** The bank was drafted question by question and came out at
A:18% B:34% C:30% D:17%, which is outside the playbook's tolerance. Rather than
shuffling the options - which would destroy the deliberate ordering of the
distractors - `tmp/_de_rebalance.py` lifts only the correct choice out of each named
question and reinserts it at a target position, leaving the distractors in the order
they were written. 127 of the 195 questions were adjusted that way, giving
A:25% B:25% C:25% D:25%.

## 9. Not verified

- **Knowledge-test time limit, early-stop rule and retest wait.** Not published by the
  Division anywhere I could find, and not in the manual. One 2026 Reddit poster who
  failed the permit test describes having to wait ten days before retaking it; that is
  a single uncorroborated report and it is **not** used anywhere in the bank. The
  manual's 30-day figure is stated in `officialTest.notes` for what it actually
  covers, which is the road exam.
- **The statutory definition of "when children are present".** The manual's page 93
  footnote points at Title 21 for a definition; Section 4169(a)(3) offers the phrase but
  no definition. No question depends on it.
- **Knowledge-test fee.** The manual prices the Class D licence at $50.00 for eight
  years but does not separately price the knowledge test, and the DMV Fee Guide page's
  figures did not render in the fetched text. Not stated in the bank.
