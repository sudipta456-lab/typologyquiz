# South Carolina - research note

Bank built 2026-09-06. Slug `southcarolina`, 195 original questions across six
sets, 300 verbatim excerpts.

---

## 1. Sources read

| Source | Publisher | Edition label | URL | Fetched |
|---|---|---|---|---|
| South Carolina Driver's License Manual (PDF, 141 pages) | SCDMV | No printed edition label on the cover. The PDF is served from the `2026-04` upload path and its embedded creation date is 30 March 2026. The previous edition on the site was marked "Revised 06/2024". | https://dmv.sc.gov/sites/scdmv/files/2026-04/Driver's%20Manual.pdf | 2026-09-06, direct |
| South Carolina Code of Laws, Title 56 Chapter 5 (Uniform Act Regulating Traffic on Highways) | SC Legislative Council | Current through the 2025-2026 session | https://www.scstatehouse.gov/code/t56c005.php | 2026-09-06, direct |
| South Carolina Code of Laws, Title 56 Chapter 1 (Driver's Licenses) | SC Legislative Council | Current through the 2025-2026 session | https://www.scstatehouse.gov/code/t56c001.php | 2026-09-06, direct |
| SCDMV Beginner's Permits page | SCDMV | Live web page | https://dmv.sc.gov/driver-services/drivers-license/beginner-permits | 2026-09-06, direct |
| SCDMV Driving Tests page | SCDMV | Live web page | https://dmv.sc.gov/driver-services/drivers-license/testing | 2026-09-06, direct |
| SCDMV Schedule an Appointment page | SCDMV | Live web page | https://dmv.sc.gov/schedule-appointment | 2026-09-06, direct |
| SCDMV official practice exam | SC.gov | Live web application | https://apps.sc.gov/dlpracticeexam/regdl/startexam | 2026-09-06, direct |
| Hands Free SC | SC Department of Public Safety | Live web page | https://scdps.sc.gov/handsfree | 2026-09-06, direct |
| School Bus Safety | SC Department of Public Safety | Live web page | https://scdps.sc.gov/schoolbus | 2026-09-06, direct |
| Bill 3276 (SC Hands-Free and Distracted Driving Act) | SC Legislature | 126th session, 2025-2026 | https://www.scstatehouse.gov/sess126_2025-2026/bills/3276.htm | 2026-09-06, direct |

**Edition note worth recording.** Two manual PDFs are live on dmv.sc.gov at the
same time and both return HTTP 200: a `2026-01/Drivers%20Manual.pdf` (140 pages)
and a `2026-04/Driver's%20Manual.pdf` (141 pages). The bank is built against the
**April upload**, which is the newer of the two and the one whose embedded
creation date (30 March 2026) matches. Every `sourceUrl` and every excerpt `url`
in this bank points at the April file. A future editor re-verifying quotes must
use the April path, not the January one, or excerpts will miss by a page.

Domains used, for `officialHosts`: `dmv.sc.gov` (the SCDMV's current domain -
`scdmvonline.com` now 301-redirects to it), `scstatehouse.gov`, `sc.gov`,
`scdmvonline.com`.

---

## 2. Test format

| Item | Value used in the bank | Where it came from |
|---|---|---|
| Question count | 30 | **NOT published by SCDMV.** Third-party consensus (epermittest, dmvquestionbank, driving-tests.org). Flagged as unconfirmed in `officialTest.notes`. |
| Pass mark | 24 of 30 (80%) | Same third-party consensus, one 2026 dissent at 25/20. Flagged as unconfirmed. |
| Signs a separate section? | No | Manual section 1-12 and the section 12 sample test describe one test "of traffic laws, road signs, and driving safety rules" and interleave the two. `officialTest.sectionedBy` is therefore not set. |
| Time limit | None published | dmv.sc.gov publishes none. The official online practice exam restarts after three minutes of inactivity, which is not a test time limit. |
| Choices per question | Three (a, b, c) | The manual's own sample test and the official apps.sc.gov practice exam. Our questions use four, which is harder than the real thing and is the house standard. |
| Fees | $2.00 knowledge test, $2.50 permit | SCDMV beginner's permit page; the $2.50 permit fee is also in Code Section 56-1-50(D). |
| Minimum age | 15 | SCDMV beginner's permit page. |
| Where taken | Any SCDMV branch, or an SCDMV-authorised One Stop third-party testing school. No at-home online option exists. | Manual 1-10 and 1-11. |
| Appointment | Not required for the knowledge test, but you must be at a branch before 4 p.m. | SCDMV appointment page and permit page. |
| Automatic failures | Leaving the test area before finishing, talking to anyone, bringing written material or any electronic device into the test area | Manual 1-10. |
| Knowledge-test retest wait | **Not published, and third parties contradict each other** (2 days / 2 weeks / 60 days / none). Deliberately absent from the bank. | See section 5. |
| Skills-test retest wait | 2 business days after a first failure | Manual 1-13. This one IS published and is used in question `sc_s4_04`. |

---

## 3. Section and page map

The manual numbers pages per section, so printed page "6-3" is PDF page 62. The
offsets, confirmed by opening the PDF at each boundary:

| Section | Title | Printed | PDF offset | PDF pages |
|---|---|---|---|---|
| 1 | The Driver's License | 1-1 to 1-25 | +4 | 5 to 28 |
| 2 | State Laws and Rules of the Road | 2-1 to 2-3 | +28 | 29 to 31 |
| 3 | Be in Shape to Drive | 3-1 to 3-11 | +31 | 32 to 42 |
| 4 | Before You Drive | 4-1 to 4-9 | +43 | 44 to 52 |
| 5 | Basic Driving | 5-1 to 5-5 | +53 | 54 to 58 |
| 6 | Rules of the Road | 6-1 to 6-15 | +59 | 60 to 74 |
| 7 | General Driving | 7-1 to 7-18 | +75 | 76 to 93 |
| 8 | Safe Driving Tips | 8-1 to 8-10 | +93 | 94 to 103 |
| 9 | Emergency Situations and Avoiding Collisions | 9-1 to 9-6 | +103 | 104 to 109 |
| 10 | Sharing the Road | 10-1 to 10-16 | +109 | 110 to 125 |
| 11 | Special Driving Situations | 11-1 to 11-13 | +125 | 126 to 138 |
| 12 | Test Your Knowledge | 12-1 to 12-2 | +139 | 140 to 141 |

`sourceUrl` anchors use `#page=N` with the PDF number.

---

## 4. What the handbook does not say

South Carolina's manual is the AAMVA model manual with state material added, and
the model manual is deliberately number-light. Almost every figure a candidate is
expected to recite comes from Title 56 instead. Prep sites publish these numbers
and attribute them to the manual; this bank attributes them to the Code.

| Number the test expects | Manual | Statute that supplies it |
|---|---|---|
| Every speed limit (70 interstate, 60 divided multilane, 55 elsewhere, 40 unpaved, 30 urban district) | Silent. The only speed in the whole book is the 35 mph golf-cart road limit. | 56-5-1520 |
| Parking distances (15 ft hydrant, 20 ft crosswalk, 20 ft fire station driveway, 30 ft stop sign, 50 ft nearest rail, 75 ft opposite a fire station) | Silent beyond the 18-inch kerb rule | 56-5-2530, 56-5-2560 |
| Adult BAC limit of 0.08 | Silent. The manual gives only 0.05-with-drugs and the 0.15 suspension threshold. | 56-5-2933, 56-5-2930 |
| Under-21 threshold of 0.02 | Says "zero tolerance" without the figure | 56-1-286 |
| Headlight hours (half an hour after sunset to half an hour before sunrise, and with wipers for rain, sleet or snow) | Silent | 56-5-4450 |
| Signal distance of 100 feet | Silent | 56-5-2150 |
| School bus fine ($500 minimum) and 6 points | Silent | 56-5-2780, 56-1-720 |
| Point values per violation, and suspension lengths by total | Gives the 6 and 12 thresholds but not the schedule | 56-1-720, 56-1-740 |
| Move-over fine ($300-$500) and which lights trigger it | Describes the duty, not the numbers | 56-5-1538 |
| Hands-free penalties ($100, then $200 and 2 points) | Silent | 56-5-3890 |
| Following fire apparatus (500 feet) | Silent | 56-5-1960 |
| Seat belt fine (max $25, $50 per incident) | Silent | 56-5-6540 |
| Booster seat must use lap AND shoulder belt | Partial | 56-5-6410 |
| 10-day address change deadline | Silent | 56-1-230 |
| Backing prohibited on a controlled-access highway | Silent | 56-5-3810 |
| Left lane reserved for overtaking | Silent | 56-5-1885 |

---

## 5. Conflicts, and how each was resolved

1. **Permit holding period: 180 days vs 30 days.** The manual (section 1-4)
   states a 180-day permit hold before the road test. The SCDMV beginner's
   permit web page states a minimum of 30 days if you are 18 or older, and the
   manual's own section 1-5 excerpt (`permit-holding-period`) says the same
   thing for 18-and-over. Two SCDMV surfaces disagree about whether the 180 days
   applies to everyone. **Resolution: no question is built on the holding
   period.** The bank asks about the 40 practice hours and the age ladder, which
   both sources agree on.
2. **Following distance: 4 seconds vs 3.** The manual says four, twice, and
   repeats it for motorcycles. The most-linked SC "most missed" cheat sheet says
   three. **Resolution: the manual wins**, and it is written up as the bank's
   first `localGotcha` and used in `sc_s4_10`, `sc_s5_05` and `sc_s5_28`.
3. **School bus on multi-lane roads.** The manual carves out oncoming traffic on
   a four-lane or multi-lane highway; national driver-education material and
   SCDPS's own school-bus page state the general "everyone stops" rule without
   the carve-out. **Resolution: the manual's carve-out is the specific SC rule
   and it wins** (`sc_s5_01`); SCDPS is stating the two-lane case, not
   contradicting it.
4. **School bus fine: $500 vs $1,000.** A bill doubling the fine passed the SC
   House but is not law. **Resolution: the enacted $500 minimum is used**
   (`sc_s5_04`), and the trap note says explicitly that the higher figure is a
   proposal.
5. **Special restricted licence curfew.** A 2025 SC teen-driving guide states
   that the special restricted licence removes the time-of-day restrictions. The
   manual says it keeps the same 6 p.m. / 8 p.m. / midnight structure.
   **Resolution: the manual wins** (`sc_s5_15`).
6. **Knowledge-test retest wait.** Unpublished by SCDMV; third parties give 2
   days, 2 weeks, 60 days and "none". **Resolution: nothing is published in the
   bank.** The only retest wait used is the skills-test figure, which the manual
   does publish.
7. **Question count and pass mark.** Not published by SCDMV. **Resolution: the
   30/24 consensus figure is used, and `officialTest.notes[0]` says plainly that
   the SCDMV publishes neither and tells the learner to aim well above it.**

---

## 6. What learners report

**Honest limitation: Reddit could not be reached.** Direct fetches of
`reddit.com`, `www.reddit.com` and `old.reddit.com` were refused by the fetching
tool; a domain-scoped web search against reddit.com returned an API error; three
Reddit front-ends (redlib.catsarch.com, redlib.perennialte.ch, safereddit.com)
returned 403 or a bot challenge. So **r/southcarolina, r/Charleston,
r/columbiasc, r/greenville, r/DMV, r/newdrivers, r/driving and r/drivingtest were
not consulted.** What follows is from learner-authored study decks, prep-site
"most missed" material, SC teen-driving guides, SC news, and the official pages
above. No first-person "I failed my SC permit test" account was found outside
Reddit. This is the weakest section of the note and should be redone if Reddit
becomes reachable.

| Source | Title | Year | URL | Paraphrase of the claim | Shaped |
|---|---|---|---|---|---|
| Quizlet (learner-authored) | "Most missed sc dmv permit test" | undated | https://quizlet.com/867077739/most-missed-sc-dmv-permit-test-flash-cards/ | The author's own misses are almost entirely the alcohol chapter: the under-21 threshold, the adult limit, suspension lengths and implied consent. | sc_s5_20, sc_s5_21, sc_s5_22, sc_s5_23 |
| Quizlet (learner-authored) | "SC Drivers Permit test missed questions" | undated | https://quizlet.com/541711084/sc-drivers-permit-test-missed-questions-flash-cards/ | Misses cluster on the following-interval count, the physical head-turn shoulder check, mirror-then-blind-spot order and the size of a truck's rear blind zone. (Page 403'd; topics read from search snippets, so treat as weak.) | sc_s4_10, sc_s4_12 |
| driving-tests.org | SC DMV Permit Test Cheat Sheet - 50 Most-Missed Answers | 2026 | https://driving-tests.org/cheat-sheet/south-carolina/ | Names distances, BAC, right of way, hill parking and school buses as the most-missed cluster. Its own 3-second following distance conflicts with the manual's 4. | sc_s4_22, sc_s5_33, and conflict 2 above |
| dmvquestionbank.com | South Carolina DMV Permit Test 2026 Guide | 2026 | https://www.dmvquestionbank.com/state-guides/south-carolina | Asserts 30 questions / 24 to pass with no separate signs test; calls the daylight-saving-shifted curfew uniquely South Carolinian and commonly tested. | officialTest, sc_s5_15 |
| epermittest.com | SC DMV Permit Test Simulator | 2026 | https://www.epermittest.com/south-carolina/sc-permit-test-simulator | States 30 questions, 24 correct, weighted towards rules of the road and road signs. Makes no early-termination claim. | officialTest |
| driversed.com | 5 Commonly Missed Teen Driver's Permit Exam Questions | undated | https://driversed.com/trending/commonly-missed-questions-teen-driving-permit-exams/ | Puts the first-time pass rate near 55% and names distances, BAC, right of way, hill parking and school buses. Its "all traffic both directions stops" claim is wrong for SC multi-lane roads. | sc_s5_01 (as the trap) |
| flashpath.app | South Carolina's Teen Driving Laws: A 2025 Guide | 2025 | https://flashpath.app/sc/articles/sc_teen-driving-laws/ | Sets out permit supervision, the two-passengers-under-21 cap and the 40 hours with 10 at night. Incorrectly states the special restricted licence drops time-of-day restrictions. | sc_s4_03, sc_s5_16, sc_s5_15 (as the trap) |
| scdps.sc.gov | Hands Free SC | 2026 | https://scdps.sc.gov/handsfree | The Act took effect 1 September 2025 with a warning period; citations began 28 February 2026; $100 then $200 and 2 points. | sc_s5_24, sc_s5_25 |
| scstatehouse.gov | Bill 3276, SC Hands-Free and Distracted Driving Act | 2025-26 | https://www.scstatehouse.gov/sess126_2025-2026/bills/3276.htm | Statutory text of the prohibitions, the earpiece and wrist-device carve-out, and the penalties. No age or licence-class carve-out. | sc_s5_24, sc_s5_25 |
| scdps.sc.gov | School Bus Safety | 2026 | https://scdps.sc.gov/schoolbus | You must always stop when behind a bus showing red lights with the stop arm out; the page does not spell out the multi-lane distinction. | sc_s5_02 |
| Carolina News and Reporter | House approves doubling fines for passing a stopped school bus | 2025 | https://carolinanewsandreporter.cic.sc.edu/house-approves-doubling-fines-for-passing-a-stopped-school-bus/ | A bill would raise the fine from $500 to $1,000 with higher figures for repeats. Passed the House; not law. | sc_s5_04 (trap note) |
| city-data.com | SC forum: "Knowledge test drivers license" | 2019 | https://www.city-data.com/forum/south-carolina/3090452-knowledge-test-drivers-license.html | About out-of-state licence transfers needing only a vision test. Nothing about the exam itself. | none |
| city-data.com | SC forum: "Drivers licence permit question" | 2006-2016 | https://www.city-data.com/forum/south-carolina/26281-drivers-licence-permit-question.html | Confirms the 21-and-over supervising driver requirement. No description of the written test. | sc_s5_17 (weak corroboration only) |

**Format surprises**, checked against the official pages:

- *No appointment needed, but a hard 4 p.m. cutoff at the branch.* Confirmed on
  both SCDMV pages. This is the highest-value practical warning and it is not in
  `officialTest.notes` because it is about the visit rather than the test - it
  belongs on the jurisdiction page copy if that ever grows a logistics block.
- *No notes, phone, tablet or laptop in the test area; leaving the room or
  talking is an automatic fail.* Confirmed, manual 1-10. Used in `sc_s5_35` and
  in `officialTest.notes`.
- *The test stops early once you can no longer pass.* **Unconfirmed.** Asserted
  by commercial prep sites only, and not on any SCDMV page. Deliberately not in
  the bank.
- *Delivered on a computer rather than on paper.* Not stated by SCDMV either
  way. `officialTest.notes` says "taken on a computer at any SCDMV branch", which
  is a third-party claim - see section 8, unverified items.

**Recent changes** confirmed against statute or an official page:

- Hands-free law in force 1 September 2025, citations from 28 February 2026.
  Confirmed in Bill 3276 and on SCDPS. The bank teaches the law.
- School bus fine increase: proposed only, not law. The bank teaches $500.
- No "super speeder" statute exists in South Carolina. Bills 664, 3149 and 3138
  are pending and none is law; nothing in the bank relies on them.
- The graduated licensing structure is unchanged in the 2026 manual.

---

## 7. Local gotchas

The six in `localGotchas`, and why each catches people:

1. **Four-second following distance, not three.** Every other state's material a
   South Carolina learner will meet online says three, and the state's own
   most-linked cheat sheet says three. The manual says four, and adds one second
   at night and two on an unfamiliar road at night.
2. **The school bus multi-lane carve-out, and amber lights.** Two rules in one
   gotcha. On a two-lane road everyone stops; on a multi-lane road only traffic
   behind the bus stops. And the duty attaches to red *or amber* flashing
   signals, so amber is not a run-up.
3. **The manual states no speed limit at all.** A learner who studies only the
   book will not have seen 70, 60, 55, 40 or 30 anywhere, and the test asks.
4. **Wipers mean headlights** - with one written exception for intermittent use
   in misting rain, sleet or snow, which turns an apparently absolute rule into a
   trick question.
5. **Six points, not twelve, for a young driver.** A permit, conditional or
   special restricted holder is suspended at six. One school-bus or reckless
   conviction reaches it in a single ticket. Points halve after a year, too late
   to help.
6. **Holding a phone has been illegal since 1 September 2025.** Recent enough
   that most study material predates it, and citations only began in February
   2026.

---

## 8. Verification

Run 2026-09-06 against the tree at the time of writing.

```
npx tsx scripts/extract-quotes.mjs southcarolina
  tmp/southcarolina-quotes.json: 300 quotes

python scripts/verify-excerpts.py southcarolina tmp/southcarolina-handbook.pdf \
    tmp/southcarolina-statute.txt tmp/southcarolina-statute-full.txt
  southcarolina: 300/300 quotes verified verbatim against 3 source(s)
```

Note that **three** sources are required, not two. The statute text is saved in
two files because Title 56 Chapter 1 and Chapter 5 are separate pages on
scstatehouse.gov; running the verifier with only `southcarolina-statute.txt`
reports 294/300, with the six Chapter 1 and long-Chapter-5 quotes missing. That
is a source-file issue, not a quote issue.

```
python scripts/build-excerpt-snippets.py southcarolina tmp/southcarolina-handbook.pdf
  southcarolina: 220 snippets rendered, 80 not located

npx tsx scripts/validate-driving.mjs --only southcarolina
  snippets: 220 in manifest, 220/300 excerpts covered (73%)
  quotes verified: 300/300 verbatim against southcarolina-handbook.pdf,
    southcarolina-statute.txt, southcarolina-statute-full.txt
  excerpts: 300 (109 unused), questions wired: 195/195 (100%)
  questions: 195
  answer positions: A:24% B:27% C:27% D:23%
  context: 100%  source links: 100%  starred: 18%
  ERRORS: 0   WARNINGS: 23

npx tsc --noEmit -p .
  clean for southcarolina
```

Of the 80 unrendered snippets, **76 are statute quotes**, which cannot be found
in the handbook PDF by design. Of the 224 handbook quotes, 220 rendered - a
**98.2% handbook render rate**, against the playbook's 80% target. The four that
did not are `hands-free-penalties`, `white-markings`, `school-bus-two-lane` and
`being-passed`; each is a stem-plus-list quote run together under the permitted
normalisation, so its characters are contiguous in the extracted text but not on
a single run of lines the cropper can box. Three rendered PNGs were opened and
checked: `penny-test.png`, `drivers-ed-hours.png` and `adas-not-on-test.png` are
all tight, legible crops with no clipped first letters.

### The 23 validator warnings

All 23 are the same warning, and all are on excerpts, none on questions:
`quote is N chars - trim toward one or two sentences`. The soft advisory point
is 320 characters and the hard cap is 600; the longest here is 475. The affected
keys are `hands-free-prohibitions`, `pavement-markings`, `school-bus-multilane`,
`hill-parking`, `move-over`, `code-speed-urban-30`, `code-speed-reduced`,
`code-slow-keep-right`, `code-pass-on-right`, `code-emergency-vehicle-two-lane`,
`code-implied-consent-refusal`, `code-opening-doors`, `code-hands-free-exceptions`,
`code-headlights-when`, `code-child-booster`, `code-seat-belt-driver`,
`code-seat-belt-fine`, `code-collision-injury-stop`, `code-collision-move-vehicle`,
`code-collision-information`, `code-collision-report`, `code-green-arrow` and
`code-gdl-postpone`.

Twenty of the twenty-three are statute quotes, and South Carolina's statutory
sentences are long: Section 56-5-1520(F) is a single 450-character sentence
listing every circumstance requiring a reduced speed, and cutting it mid-list
would remove exactly the circumstances a learner needs. The three manual quotes
in the list are the same shape - a stem plus its enumerated conditions. **These
were left as they stand**: every one is verified verbatim, every one is under
the hard cap, and shortening them would either break verification or amputate
the operative part of the rule.

### Answer-position correction made during the build

Sets 1 to 3 arrived from the earlier build run with the correct answer in
position B on 62 of 95 questions (65%), which is an automatic validator error and,
worse, a bank a learner could beat by always picking B. Thirty-four items had
their choice order rewritten so the correct answer moved to A, C or D, with the
most tempting distractor kept at or near the front so the intended ordering
survived. Items whose choices form a natural ascending numeric ladder (ages,
speeds, distances, BAC values) were left alone, because reordering those reads as
an error. The bank now sits at A:24% B:27% C:27% D:23%.

### Unverified, stated plainly

- **Question count (30) and pass mark (24)**: not published by the SCDMV
  anywhere I could find. Third-party consensus only. `officialTest.notes[0]`
  says so to the learner.
- **"Taken on a computer"**: third-party claim, not stated by the SCDMV.
- **Knowledge-test retest wait**: unpublished and contradicted between sources.
  Deliberately absent from the bank.
- **Reddit research**: not done, because reddit.com was unreachable by every
  route tried. See section 6.
- **The 180-day vs 30-day permit holding period**: two SCDMV surfaces disagree.
  No question is built on it.
