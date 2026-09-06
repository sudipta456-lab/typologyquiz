# Alabama - research note

Bank built 2026-09-05 and 2026-09-06. `contentDate` 2026-09-06.
Slug `alabama`, code `AL`, 6 sets, 195 questions, 350 excerpts.

## 1. Sources read

| # | Source | Publisher | Edition label | URL | Fetched | How |
|---|---|---|---|---|---|---|
| 1 | Alabama Driver Manual (92 pp PDF) | Alabama Law Enforcement Agency, Driver License Division | **November 2024** (printed alone on the cover page) | https://www.alea.gov/sites/default/files/ALEA%20DL%20Manual.pdf | 2026-09-06 | direct download |
| 2 | Code of Alabama 1975, Title 32 (Motor Vehicles and Traffic) - Chapters 5, 5A, 5B and 6 | Alabama Legislature | current through the 2026 regular session | https://alison.legislature.state.al.us/code-of-alabama | 2026-09-06 | direct, section text saved to `tmp/alabama-statute.txt` |
| 3 | Alabama Administrative Code, Chapter 760-X-1 (ALEA Driver License Division rules) | Alabama Legislative Services Agency | current chapter as published | https://www.alabamaadministrativecode.state.al.us/docs/dps/760-X-1.pdf | 2026-09-06 | direct download, text in `tmp/alabama-admincode-760-X-1.txt` |
| 4 | ALEA, "Driver License Information" | ALEA | undated web page | https://www.alea.gov/dps/driver-license/driver-license-information | 2026-09-06 | direct (HTTP 200) |
| 5 | ALEA, "License and ID Cards" and "Document Requirements and Fees" | ALEA | undated web pages | https://www.alea.gov/dps/driver-license/license-and-id-cards | 2026-09-06 | direct |

`handbookEdition` is recorded as **"November 2024"** because that is the entire
edition statement the publisher prints - page 1 of the PDF carries those two
words and nothing else. There is no revision code and no version number.

The manual is unusually complete for a state handbook. It prints the statutory
speed limits, the four parking distances, the 100-foot signal rule, the 20-foot
school bus distance, the 500-foot rule behind emergency vehicles and the whole
point schedule. What it does not print is the format of its own test.

## 2. Test format

| Fact | Value | Source |
|---|---|---|
| Fee | **$5.00 per knowledge test, no checks accepted** | Manual, Chapter 1 "Knowledge Test", printed page 11. Corroborated on ALEA's "License and ID Cards" and "Document Requirements and Fees" pages. |
| Content | Alabama traffic laws, road signs and rules of safe driving, "taken from material found in this booklet" | Manual, printed page 11 |
| Delivery | Automated (computer) testing available to all applicants | Manual, printed page 11 |
| Accessibility | Oral examinations for applicants who cannot read and comprehend the written test | Manual, printed page 9 |
| Languages | Arabic, Chinese, Farsi, French, German, Japanese, Korean, Russian, Spanish, Thai, Vietnamese | Manual, printed page 9 |
| Sequence | Vision screening first; failing it stops the rest of the testing until an eye specialist clears you | Manual, printed page 11 |
| Where | Driver License Examining Office | Manual, Chapter 1 |
| Licence fee on passing | $36.25 | ALEA "Document Requirements and Fees" |
| **Question count** | **not published** | see below |
| **Pass mark** | **not published** | see below |
| **Time limit** | **not published** | see below |
| **Retest wait** | **not published** | see below |

**The question count and the pass mark are not stated anywhere on alea.gov or
in the manual.** I searched the manual text, ALEA's driver licence pages and
the administrative code chapter that governs the Driver License Division;
760-X-1 covers licensing procedure, the point schedule and equipment rules but
says nothing about the examination's length or scoring.

The bank ships `questionCount: 30, passCount: 24` (80%) because that is what
every Alabama driving school, test-prep publisher and testing-office FAQ
reports, and `officialTest.notes[0]` says in the product itself that ALEA does
not publish it and that the figure is unconfirmed. One publisher
(permit-tests.com) contradicts the consensus with 20 questions and a 70% pass
mark; it is a lone claim against roughly eight agreeing sources, and I have not
repeated either number as official anywhere in the bank.

Also unpublished by ALEA and therefore **not** asserted in the bank: any time
limit, the widely repeated "three attempts within a 90-day application window",
the waiting period between attempts (one third-party page alone claims an
escalating next-day / 7-day / 30-day ladder and itself says local offices set
their own policy), and any re-examination fee distinct from the $5.

## 3. Section and page map

Printed page numbers from the manual's own table of contents (PDF page = printed
page + 2; `hb(p)` in the source files takes the PDF page index).

| Chapter | Section | Printed page |
|---|---|---|
| 1 - Your License to Drive | License Requirements | 5 |
| | Who Cannot Be Licensed | 6 |
| | Identification Requirements | 6 |
| | Learner License / Restricted License | 9 |
| | Vision Screening | 11 |
| | Knowledge Test | 11 |
| | Road Test | 11 |
| | Before You Drive | 12 |
| | Re-Examination | 12 |
| | Identification Cards (Non-Driver) | 12 |
| | Renewing / Duplicating Your License | 13 |
| | Change of Name, Address | 14 |
| | Class of License | 14 |
| | Appointment / Fees | 16 |
| | Present Your License | 16 |
| | Alabama's Hands-Free Law | 16 |
| 2 - You May Lose Your License | Cancellation | 17 |
| | Revocation | 17 |
| | Suspension | 18 |
| | Alabama Point System | 18 |
| 3 - The Driving Task | Good Driving Habits | 20 |
| | Turns | 21 |
| | Sharing the Road with Bicycles | 23 |
| | Sharing the Road with Motorcycles | 25 |
| | Sharing the Road with Large Vehicles | 27 |
| | Parking | 28 |
| | Safety Belt and Child Restraint Laws | 30 |
| 4 - The Driver | Your Personality Affects Your Driving | 31 |
| | Cellular Phone / Texting Usage | 32 |
| | Highway Hypnosis and Fatigue | 32 |
| | Drinking and Driving | 32 |
| | Drugs | 35 |
| | How to Avoid Rear-End Collisions | 36 |
| | Stopping Distance | 36 |
| | What To Do If You Have A Crash | 37 |
| | Railroad Crossings | 38 |
| 5 - Signs, Signals and Road Markings | Traffic Signs | 41 |
| | Regulatory Signs | 42 |
| | Warning Signs | 44 |
| | Informational or Guide Signs | 51 |
| | Pavement Markings | 52 |
| | Traffic Signals | 54 |
| | Driving Through Roundabouts | 57 |
| 6 - Traffic Laws | Speed Limits | 59 |
| | Stopping | 60 |
| | School Buses | 62 |
| | Right of Way and Yielding | 62 |
| | Passing | 64 |
| | Pedestrians | 65 |
| | Following Emergency Vehicles | 65 |
| | Other Traffic Laws | 66 |
| | Changing Lanes | 66 |
| | Loads Must Conform to Law | 67 |
| | What to Expect at Traffic Stops | 67 |
| | Documents Required at Traffic Stops | 68 |
| | Mandatory Liability Insurance Law | 68 |
| | Window Tinting | 68 |
| | Move Over Law | 68 |
| 7 - Adjust to Driving Conditions | Night Driving | 69 |
| | Winter Driving | 70 |
| | Windshield Wipers / Headlights | 71 |
| | Slippery Roads Are Hazardous | 71 |
| | Skidding | 71 |
| | Hydroplaning | 72 |
| | Driving in Fog, Snow | 73 |
| | Driving in Hilly Country | 73 |
| | Carbon Monoxide | 73 |
| | Driving Emergencies | 73 |
| 8 - Driving the Freeways | Entering the Freeway | 76 |
| | Interchanges | 77 |
| | Leaving the Freeway | 78 |
| 9 - Your Vehicle | Maintaining Your Vehicle | 79 |
| Additional Information | Parent Teen Driving Agreement | 82 |
| | GDL Summary | 84 |
| | Web Site or Contact | 85 |

## 4. What the handbook does not say

Numbers the test can reasonably ask about that the manual omits, and the statute
section that supplies each. All of these are cited to the Code in the bank, not
to the manual.

| Rule | Value | Statute |
|---|---|---|
| Urban district speed limit | 30 mph | 32-5A-171 |
| Interstate / other four-lane speed limits | 70 / 65 mph | 32-5A-171 |
| Absolute following distance floor | 20 feet per 10 mph | 32-5A-89 |
| Left lane occupancy on an interstate | 1.5 miles without completing a pass | 32-5A-80 |
| Signal distance before a turn | 100 feet | 32-5A-133 |
| Railroad stop range | within 50 ft, not less than 15 ft of the nearest rail | 32-5A-150 |
| School bus passing fine | $150 to $300 first conviction | 32-5A-154 |
| Move Over fine, and coverage of refuse collection vehicles | $100 first violation | 32-5A-58.2 |
| Under-21 suspension for BAC 0.02 to 0.08 | 30 days, first violation | 32-5A-191 |
| Child restraint fine | $25 per offense | 32-5-222 |
| GDL behind-the-wheel practice requirement | 50 hours, or an approved driver education course | 32-6-7.2 |
| GDL hunting/fishing exception to the night restriction | - | 32-6-7.2 |
| Passing: back in lane before | 200 feet of an approaching vehicle | 32-5A-84 |
| No passing within | 100 feet of an intersection or railroad crossing | 32-5A-85 |
| Parking near a fire station | 20 ft from the driveway, 75 ft opposite | 32-5A-137 |
| Headlights required whenever wipers run for rain, sleet or snow | - | 32-5-240 |
| Rear-seat belt violation is secondary | - | 32-5B-4 |
| Yield-sign collision is prima facie failure to yield | - | 32-5A-112 |
| Texting enforceable as a primary offense | - | 32-5A-350 |
| Emergency light colors; amber confers no right of way | - | 32-5A-115 |
| Passing on the right when the vehicle ahead turns left | - | 32-5A-83 |
| U-turn banned on a curve or crest without 500 ft view | - | 32-5A-131 |
| Center lane of a three-lane two-way road | passing only | 32-5A-88 |

## 5. Conflicts

**GDL restriction penalties - manual vs statute.** The manual's GDL Summary
(printed page 84) says no points will be assessed for violating a graduated
licence restriction, and that a violation extends the restricted period by six
months or until the driver turns 18. Section 32-6-7.2(h) now provides a fine,
court costs and a two-point entry. *Resolution:* no question in the bank is
built on the penalty for a GDL restriction violation. The questions cover the
restrictions themselves and the six-month extension, which both sources state
identically. Questions `al_s5_05` and `al_s6_26` sit on the restrictions and the
suspension trigger, not on the penalty.

**Following distance - manual vs statute.** The manual teaches a two-second
rule (four to five seconds in rain or behind a large vehicle). Section 32-5A-89
sets a statutory floor of 20 feet per 10 mph. These are not contradictory so
much as differently framed; the bank's question on the statutory floor says
explicitly that the figure is the statute's.

**Parking distances - Alabama's list vs the generic list.** The widely
circulated national cheat-sheet numbers (12 inches from the curb, 25 feet from
an intersection) are not Alabama's. The manual's four distances are 15 feet from
a hydrant, 20 from a crosswalk, 30 from a stop sign, signal or flashing beacon,
and 50 from the nearest rail of a railroad crossing. Every parking question in
the bank uses the manual's figures. This mismatch is itself a trap, and
`al_s5_04` uses it - the fire-station distances are in the statute and in
neither list.

**Language list.** At least one test-prep publisher lists four languages
(English, Spanish, Hindi, Vietnamese). The manual lists eleven and does not
include Hindi. The jurisdiction note follows the manual.

## 6. What learners report

**This section is materially incomplete and the gap is stated plainly rather
than papered over.** Reddit is unreachable from this environment: `reddit.com`
is blocked at the search-tool level ("The following domains are not accessible
to our user agent"), `old.reddit.com` and `www.reddit.com` both refuse
WebFetch, the browser pane refuses old.reddit.com by policy, and four
third-party mirrors (redlib.catsarch.com, redlib.perennialte.ch,
safereddit.com, teddit.net) returned 403, an Anubis interstitial or a DNS
failure. DuckDuckGo HTML/Lite served CAPTCHAs and Mojeek returned 403, so no
alternative index was available either. **No r/Alabama, r/Birmingham,
r/Huntsville, r/Auburn, r/MobileAL, r/DMV, r/newdrivers or r/driving material
informed this bank.** A future editor with an ordinary browser should redo this
pass.

I also looked for an ALEA "most missed questions" page. There is none. ALEA
publishes a Road Test Study Guide
(https://www.alea.gov/dps/driver-license/license-and-id-cards/road-test-study-guide)
but it covers the driving test, not the knowledge test.

What follows is therefore from driving schools and test-prep publishers, which
the playbook admits as "reliable blogs" but which are weaker evidence than
learner accounts. Each is one line, paraphrased.

| # | Source | Title | Year | Claim (paraphrased) | Shaped |
|---|---|---|---|---|---|
| 1 | driving-tests.org | "Alabama DMV Permit Test Cheat Sheet: 50 Most-Missed Answers" | 2026 | Ranks the most-missed concepts from a large body of practice answers; fixed distances, headlights-with-wipers and steady-yellow dominate | al_s5_04, al_s5_15, al_s5_30 |
| 2 | usadmvpermitpracticetest.com | "Alabama DMV Permit Test: Most Commonly Missed Questions" | 2025 | A ranked top ten: right of way, unposted speed defaults, school bus, emergency vehicles, headlight hours, sign colour and shape, under-21 BAC, merging, railroad crossings, phone use on a permit | al_s5_01, al_s5_02, al_s5_03, al_s5_07, al_s5_10, al_s5_23, al_s5_25 |
| 3 | zutobi.com | "How to Get Your Alabama Learner's Permit" and the AL permit test simulator | 2026 | Reports 24 of 30 to pass; names right-of-way traps and look-alike signs as the recurring themes; states the move-over 15 mph rule and the under-21 .02 limit | al_s4_34, al_s5_07, al_s5_35 |
| 4 | drive-safely.net | "Taking Your Alabama Permit Test" | 2026 | 30 questions, 80%, untimed in practice, three attempts inside a 90-day window, $5 per attempt | officialTest.notes |
| 5 | policysurfer.com | "Alabama Driving Test and Written Exam FAQs" | 2026 | 30 / 24 / 80%, six mistakes allowed, in person only, fee payable even on a fail | officialTest.notes |
| 6 | permit-tests.com | "Alabama DPS Teen Driver FAQ" | 2026 | Dissents: claims 20 questions at 70%. Recorded as a conflict, not used | nothing |
| 7 | epermittest.com | Alabama practice permit test and road signs pages | 2026 | Asserts roughly a third of the test is road signs, and that signs are the hardest section | set 6 signs weighting |
| 8 | driving-tests.org | Alabama hub, written test and signs pages | 2026 | Source of the repeated "about 49% fail on the first attempt" figure; lists school zones, railroad crossings, no-passing zones, pavement markings and signals as the sign topics tested | al_s4_27, al_s5_10, al_s6_14 |
| 9 | nextdoordriving.com | Alabama practice tests and road signs test | 2026 | 80% pass standard; frames the failure themes as right-of-way traps and look-alike signs | al_s5_01, al_s5_21, al_s5_28 |
| 10 | idrivesafely.com | "Getting an Alabama Learner's Permit" | 2026 | $5 test fee plus $36.25 licence fee; under-19 applicants need school enrolment or graduation proof | officialTest.notes, al_s6_06 |
| 11 | drivecar.org | "How to Get Your Alabama Driver's License (2026)" | 2026 | The only source claiming an escalating retest ladder, and it says offices set their own policy | not used |

The failure-rate figures circulating (about 49%, or "over 50%") trace back to
test-prep marketing pages that cite no retrievable ALEA dataset. They are not
quoted anywhere in the bank.

### Three strongest traps found

1. **Sign colour and shape, and look-alike warning signs** - the most frequently
   named failure area across sources 1, 3, 7, 8 and 9. Alabama's fluorescent
   yellow-green for pedestrian crossings and school zones is the specific
   confusion, because people reach for orange. Shaped `al_s5_01` and `al_s6_01`.
2. **The school bus rule on a wide undivided road** - people learn "four or more
   lanes means oncoming traffic keeps going", which is another state's rule.
   Alabama releases you only when the highway is *divided*, and requires the stop
   on a four-to-six lane undivided highway. Shaped `al_s5_02`.
3. **Which rung of a numeric ladder** - Alabama states six speed limits, four
   parking distances, four BAC thresholds, four DUI convictions and five point
   bands. Sources 1 and 2 both put pure-recall numbers near the top of the
   missed list. The 45 mph paved county road, the 65 mph four-lane and the 0.02
   school bus threshold are the specific rungs people skip. Shaped `al_s5_03`,
   `al_s5_14`, `al_s5_18`, `al_s5_20`.

## 7. Local gotchas

The six in `localGotchas`, and why each catches people:

1. **The six-rung speed ladder** (30 / 35 / 45 / 55 / 65 / 70). Learners memorise
   the interstate figure and the town figure and guess the middle. The 45 mph
   paved county road is the rung nobody expects, because most states have no
   separate county-road default at all.
2. **School bus on a four-to-six lane undivided highway.** Lane count is the
   trigger in several neighbouring states; in Alabama the trigger is whether the
   road is divided. Getting it wrong is a 5-point offense and a fine from $150.
3. **Hands-free since June 2024, and a total handheld ban under 18.** Two
   separate rules arriving years apart - the texting ban is much older - so
   people answer with whichever one they learned.
4. **Four points suspends a GDL; twelve suspends a full licence.** The point
   schedule table in the manual prints the twelve-point ladder, so that is the
   number that sticks. A single failure-to-yield conviction is 5 points and ends
   a young driver's licence on its own.
5. **The learner supervision rule changes at the sixteenth birthday.** At 15 it
   must be a parent, guardian or someone 21 or over in the adjacent seat; from 16
   any licensed driver in that seat will do. People learn one half.
6. **Headlights whenever the wipers run, and no coasting in neutral downhill.**
   Both are statute, both are easy to break without noticing, and the wiper rule
   is one of the most-cited missed items in the test-prep sources.

## 8. Verification

All run 2026-09-06 against the working tree.

```
$ npx tsx scripts/extract-quotes.mjs alabama
tmp/alabama-quotes.json: 350 quotes

$ python scripts/verify-excerpts.py alabama tmp/alabama-handbook.pdf tmp/alabama-statute.txt tmp/alabama-admincode-760-X-1.txt
alabama: 350/350 quotes verified verbatim against 3 source(s)

$ python scripts/build-excerpt-snippets.py alabama tmp/alabama-handbook.pdf
alabama: 315 snippets rendered, 35 not located

$ npx tsx scripts/validate-driving.mjs --only alabama
ERRORS: 0   WARNINGS: 0

$ npx tsc --noEmit -p .
src/lib/driving/wisconsin/index.ts(3,35): error TS2307: Cannot find module './sets-4-6'
tmp/sc-sets13.bak.ts(1,37): error TS2307: Cannot find module '../types'
```

Zero of those typecheck errors are in Alabama's files. Both belong to other
builders working in parallel - Wisconsin's `index.ts` references a `sets-4-6.ts`
that does not exist yet, and `tmp/sc-sets13.bak.ts` is a South Carolina scratch
file. Both are outside the paths this build is permitted to touch, so they were
left alone.

Of the 350 excerpts, 323 are handbook quotes and 27 are statute or
administrative-code quotes. Of the 35 that did not render, 26 are statute quotes
that cannot render against the handbook PDF, which is expected. The remaining
nine are handbook quotes whose passage the cropper could not locate as one
contiguous block - `corrective-lenses`, `bac-08`, `roundabout-def`, `red-x`,
`drivers-must-pedestrians`, `pedestrians-yield`, `hand-signals`,
`documents-stop`, `gdl-handheld`. Each of those is a quote that runs a stem into
a bulleted list or crosses a column break in the PDF's layout. **Handbook quotes
rendered: 314 of 323 (97.2%)**, against the playbook's 80% target. Three
rendered PNGs (`statutory-speeds`, `school-bus-divided`, `parking-hydrant-15`)
were opened and checked: tight crops, all four edges clear of the glyphs, no
clipped first letters.

Bank shape at that run: 195 questions across 6 sets (30 / 30 / 35 / 35 / 35 /
30), 350 excerpts of which 191 are referenced by a question, questions wired
195/195 (100%), context 100%, source links 100%, starred 19%, answer positions
A 25% / B 25% / C 25% / D 25%.

Answer positions were balanced by rewriting the choice ordering on 23
individual items after the first validator run, not by shuffling the bank.

### Not verified

- **Question count, pass mark, time limit, retest wait and attempt cap.** ALEA
  publishes none of them. The bank ships the reported 30 / 24 / 80% and says so
  in `officialTest.notes[0]`; one publisher dissents with 20 / 70%.
- **Learner accounts.** Reddit was unreachable (section 6). The forum half of
  playbook section 3 is unmet and the set 5 material rests on driving-school and
  test-prep sources plus the rules the manual itself flags.
- **First-attempt failure rate.** No primary ALEA statistic exists; the
  circulating figures are unsourced and are not used.
