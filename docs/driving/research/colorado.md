# Colorado - research note

Bank built and checked 2026-09-06. 195 original questions in six sets, 251
verbatim excerpts, 230 rendered snippet images.

## 1. Sources read

| Source | Publisher | Edition label | URL | Fetched | How |
|---|---|---|---|---|---|
| Colorado Driver Handbook | Colorado Department of Revenue, Division of Motor Vehicles | DR 2337 (12/05/24), January 2025 edition | https://dmv.colorado.gov/sites/dmv/files/documents/DR_2337_Jan2025.pdf | 2026-09-05 | Direct PDF download |
| Colorado Revised Statutes 2024, Title 42 | Colorado General Assembly, Office of Legislative Legal Services | 2024 edition | https://content.leg.colorado.gov/sites/default/files/images/olls/crs2024-title-42.pdf | 2026-09-05 | Direct PDF download |
| Permits and First-Time Driver License | Colorado DMV | undated web page | https://dmv.colorado.gov/permits-first-time-driver-license | 2026-09-05 | Direct |
| Adult Permit | Colorado DMV | undated web page | https://dmv.colorado.gov/adult-permit | 2026-09-05 | Direct |
| @Home Driving Knowledge Tests | Colorado DMV | undated web page | https://dmv.colorado.gov/home-driving-knowledge-tests | 2026-09-05 | Direct |
| HB24-1021: Motor Vehicle Minor Driver Education | Colorado DMV | undated web page | https://dmv.colorado.gov/hb24-1021-motor-vehicle-minor-driver-education | 2026-09-05 | Direct |
| Driver Education | Colorado DMV | undated web page | https://dmv.colorado.gov/driver-education | 2026-09-05 | Direct |
| Minor Permit | Colorado DMV | undated web page | https://dmv.colorado.gov/minor-permit | 2026-09-05 | dmv.colorado.gov returned 403 to the automated client for this one page. Read from an Internet Archive capture of the same official URL dated 2026-01-04. The cited `url` remains the live official page. |
| Driver License FAQs | Colorado DMV | undated web page | https://dmv.colorado.gov/driver-license-faqs | 2026-09-05 | Direct |
| Appointment Scheduling | Colorado DMV | undated web page | https://dmv.colorado.gov/appointments | 2026-09-05 | Direct |

The handbook's own edition string is `DR 2337 (12/05/24)`, printed on the last
page of the table of contents; the DMV's news release describes it as the
January 2025 edition. Both are recorded in `handbookEdition`.

Nothing in this bank comes from a practice-test site, an aggregator PDF, or a
question anyone posted from memory of the real exam.

## 2. Test format

| Fact | Value | Where it came from |
|---|---|---|
| Content areas | Road signs, driving under the influence, driving rules, safety rules and legal items | Handbook, Getting a Driver License, p. 1 |
| Question count | 25 (not published by the DMV - see note) | Not on any dmv.colorado.gov page |
| Pass mark | 80%, 20 of 25 (not published by the DMV - see note) | Not on any dmv.colorado.gov page |
| Time limit | 60 minutes on the @Home test | @Home Driving Knowledge Tests |
| Attempts | Unlimited, but only two in one day | @Home Driving Knowledge Tests |
| Retest fee | $11.50 state fee per retest, payable online or at the appointment | Permits and First-Time Driver License, Step 4 |
| Proctoring | Webcam required; random photo captures compared by the technician | @Home Driving Knowledge Tests |
| Under 19 | An adult older than 19 must act as proxy; results are emailed to the proxy | @Home Driving Knowledge Tests |
| In-office cut-off | Written tests are not started within 30 minutes of an office's closing time | Handbook, p. 1 |
| Drive test retake | Next business day at the earliest | Handbook, p. 1 |
| Where taken | A state driver license office, a driving school, or online at home | @Home Driving Knowledge Tests |

**The question count and pass mark are the one soft spot in this bank.** The
Colorado DMV publishes neither figure anywhere on dmv.colorado.gov, and the
handbook says only what the test covers. The 25 questions and 80% used in
`officialTest` are what Colorado driving schools and recent test-takers
consistently report. This is stated plainly in `officialTest.notes` so a
learner is not misled about where the number comes from. Everything else in
the table is on an official page.

## 3. Section and page map

Printed page numbers are the handbook's own. The PDF page is three higher, and
the `#page=` anchors in `excerpts.ts` and the question source links use the PDF
numbering, which is what a browser viewer honors.

| Section | Printed page |
|---|---|
| Getting a Driver License | 1 |
| Minor Drivers | 2 |
| How You Can Lose Your License | 2 |
| Seat Belt Laws | 3 |
| Driving Under the Influence | 3 |
| Before You Drive | 5 |
| Basic Driving | 6 |
| Traffic Controls | 7 |
| Traffic Signals | 7 |
| Traffic Signs | 7 |
| Pavement Markings | 9 |
| Lane Controls | 9 |
| Right-of-Way | 11 |
| Speed | 12 |
| Turning | 12 |
| Parking | 13 |
| Freeway Driving | 14 |
| Changing Lanes | 15 |
| Passing | 15 |
| Hills and Curves | 16 |
| Night Driving | 16 |
| Weather | 16 |
| Snow and Ice | 16 |
| Seasonal Driving | 17 |
| Mountain Driving | 17 |
| Rural Driving | 17 |
| Construction Zones | 17 |
| Safe Driving Tips | 18 |
| Sharing the Road | 19 |
| Railroad Crossing | 21 |
| Light Rail | 21 |
| Bicyclists | 22 |
| Motorcycles | 23 |
| Pedestrians | 24 |
| Careless/Reckless Driving | 24 |
| Tips to Avoid Becoming an Aggressive Driver | 25 |
| Emergencies | 25 |
| Vehicle Emergencies | 26 |
| Crash Tips | 26 |

## 4. What the handbook does not say

Colorado's handbook is unusually generous with numbers for a 27-page book. It
prints the statutory speed defaults, the 30-foot and 15-foot parking setbacks,
the 100/200-foot signal distances and the 1,000-foot headlight rule. These are
the gaps that remain, and the statute or the DMV web page that fills each one.

| Missing | Value used | Source | Questions |
|---|---|---|---|
| Parking distance from a crosswalk at an intersection | 20 feet | C.R.S. 42-4-1204(2)(c) | co_s5_02 |
| Parking distance from a driveway | 5 feet | C.R.S. 42-4-1204(2)(a) | co_s5_06 |
| Parking distance from the nearest rail of a railroad crossing | 50 feet | C.R.S. 42-4-1204(3)(a) | co_s5_08 |
| Absolute maximum lawful speed anywhere in the state | 75 mph | C.R.S. 42-4-1101(8)(b) | co_s3_01 |
| Under-21 alcohol offense as an offense in its own right | Class A traffic infraction at BAC 0.02 to 0.05 | C.R.S. 42-4-1301(2)(d)(I) | co_s5_05 |
| Headlight rule stated as a visibility test rather than a clock | Not clearly discernible at 1,000 feet | C.R.S. 42-4-204(1) | co_s5_09 |
| Signal distance stated as a statutory duty | 100 feet urban, 200 feet above 40 mph | C.R.S. 42-4-903(2) | co_s3_04 |
| Railroad stop band where a signal requires a stop | 15 to 50 feet from the nearest rail | C.R.S. 42-4-706(1)(a) | context only |
| Permit minimum age | 15 | Permits and First-Time Driver License | co_s5_31 context |
| Permit holding period and validity | Hold 12 months or until 18; valid 3 years or until 21 | Permits and First-Time Driver License | co_s4_17, co_s5_03 |
| Driver education requirement by age | 30-hour course, or 4-hour awareness program from 15 years 6 months | Permits and First-Time Driver License | co_s5_31 |
| Behind-the-wheel rural substitution | 12 hours with a supervisor, total log 62 hours | Permits and First-Time Driver License | co_s5_26 context |
| Adult permit holding period | None | Adult Permit | co_s5_35 |
| Test time limit, retest fee, proxy rule, two-a-day cap | 60 minutes, $11.50, adult over 19, twice daily | @Home page and Permits page | co_s3_35, co_s5_15 |
| The 2027 driver-education change | 30-hour course for ages 15 through 17 before a permit | HB24-1021 page | co_s5_31 |

## 5. Conflicts

**School buses: handbook vs statute.** The handbook (Right-of-Way, p. 11) says
you need not stop where "a median or other physical barrier" separates the bus
from you. C.R.S. 42-4-1903(4) is broader: it excuses a driver on a "highway
with separate roadways", and defines that as a highway divided by "a depressed,
raised, or painted median". A painted median satisfies the statute and does not
obviously satisfy the handbook's "physical barrier".

Resolved by building every school-bus question on a fact pattern where both
readings agree. co_s2_07 and co_s1_05 use a four-lane road with no median at
all, where both sources require a stop. co_s5_04 uses a raised median, which
is a physical barrier and is also expressly within the statutory definition.
No question in this bank turns on a painted median. Both wordings are kept in
`excerpts.ts` (`school-bus-divided-highway`, `school-bus-four-lane-no-median`,
`crs-school-bus-separate-roadways`) so a learner can see the difference.

**Snow plows: two statements, two conditions.** The handbook forbids passing a
plow "working in a formation in which the plows are staggered diagonally"
(p. 11) and separately forbids passing a plow "working with its yellow lights
flashing and is driving in tandem with one or more other snow plows" (p. 17).
These are not in conflict but they are stated with different conditions.
co_s3_06 is built on the staggered-diagonal formation, which satisfies both.

**Question count and pass mark.** Covered in section 2. Not a conflict between
sources so much as an absence from all of them, and it is disclosed in
`officialTest.notes` rather than presented as an official figure.

No conflict was resolved silently.

## 6. What learners report

Reddit threads and comments read for this bank. Paraphrases only; no comment
text is reproduced. Where a claim was used, it was used to identify which
RULE gets tested or misremembered, and the question was then written from the
handbook or the statute.

| Source | Title | Year | Paraphrase | Shaped |
|---|---|---|---|---|
| r/driving | Is it illegal to pass an officer? What did she do? (comment) | 2025 | A Colorado driver asserts the written test itself states that exceeding the limit while passing on a two-lane road is legal, so long as you return to the limit afterward. | co_s5_01 |
| r/MildlyBadDrivers | Truck driver deserves a medal of honor (comment) | 2024 | A Coloradan describes the permit process and gives the logged-driving requirement as 60 hours. | co_s5_03 |
| r/boulder | Green lights, merging lanes - why are they so scary (comment) | 2025 | A driver who moved from California reports seeing frequent red-light running, crossing of solid stripes, and sudden U-turns in the middle of four-lane highways or close to a signalized intersection. | co_s5_27, co_s6_12, co_s6_23 |
| r/Denver | Why is the zipper merge not used by more drivers? | 2024 | Local drivers argue about whether merging early or merging at the closure point is correct. | co_s4_29 |
| r/boulder | Adult learning permit (comment) | 2024 | An adult applicant describes taking the knowledge test online, then scheduling a DMV appointment and bringing the certificate of completion to collect the permit. | co_s4_17, co_s5_15 |
| r/driving | Failed my driver's test but moving states in a week (comment) | 2024 | A test-taker passed the written test online and then found the earliest appointment to collect the permit was weeks away. | co_s5_15 trap |
| r/DMV | CA to CO (comment) | 2024 | A commenter explains that a Colorado permit permits everything a license does except driving alone, and that a qualifying licensed adult must be in the front passenger seat. | co_s1_08, co_s5_35 context |
| r/Denver | Does anywhere do walk in license test anymore (comment) | 2024 | Sets out the local sequence: written test, permit the same day, drive test at a third-party site, results entered, then the license issued in office or online. | officialTest.notes |
| r/ColoradoSprings | Yes, another driving rant (comment) | 2024 | Describes the Colorado written test as weighted toward road-sign identification, with retries available and few genuinely hard items. | Set 6 sign weighting |
| r/ChildSupport4Men | Reinstatement of driver's license after a year, and the cost of it | 2025 | Itemizes the DMV costs on a reinstatement, including a separate written-test fee and permit fee, and notes appointment-only scheduling months out. | co_s5_15, officialTest.notes |
| r/dui | CO DMV written test | 2022 | An adult returning to licensing asks whether the Colorado written test needs study or is common knowledge for an experienced driver. | Set 4 breadth |
| r/AskAnAmerican | How do Americans learn to drive (comment) | 2024 | A Coloradan describes the sequence as written test first, then an on-site drive test, with the actual learning done by parents. | co_s5_03 context |
| r/AskAnAmerican | Is the DMV really that bad (comment) | 2025 | Reports wide variation between Colorado offices, with some offering an immediate drive test after the permit test. | officialTest.notes |
| r/Longmont | Drivers ed recommendation (comment) | 2024 | Parents discussing which driver education provider satisfies the state requirement for a 15-year-old. | co_s5_26 |
| r/TheFrontRange | New bill would make Colorado teens take drivers ed | 2023 | Discussion of the legislative push that became HB24-1021, and what it would require of 15- to 17-year-olds. | co_s5_31 |
| r/DMV | Can I still transfer my license (comment) | 2025 | A commenter states Colorado allows 30 days to surrender an out-of-state license after moving. | co_s4_01, distinguished from the 30-day address-change duty |

Sixteen threads used. The three strongest traps that came out of this:

1. **The passing-speed myth.** The belief that the posted limit is suspended
   while you complete a pass, stated publicly by a Colorado driver as something
   the written test teaches. The handbook lists exceeding the posted speed limit
   when passing in a three-item list of illegal passing behaviors. co_s5_01.
2. **The 60-hour driving log.** The real figure is 50 hours with 10 at night.
   The inflated figure circulates locally, and the night hours are what people
   forget to log at all. co_s5_03.
3. **"Online test means I have a permit."** Passing the @Home test produces a
   certificate of completion, not a permit. The appointment, the documents and
   (for a minor) the signed Affidavit of Liability all still have to happen,
   and appointments run weeks out. Recorded in `officialTest.notes` and used as
   the trap on co_s5_15.

Reddit's own domain refused the automated search client during this session, so
the forum material was read from the capture set gathered for this bank in
`tmp/colorado-reddit-digest.txt` and `tmp/colorado-pp*.json` rather than
re-fetched live. No claim from those captures was used as a fact; each was used
only to decide which handbook rule to write a question about.

## 7. Local gotchas

The five rules in `localGotchas`, and why each one catches people:

1. **The under-21 limit is 0.02, not 0.08, and a possession conviction alone
   costs the license.** Zero tolerance gets read either as literally zero or as
   the adult figure. One standard drink can reach 0.02, and the offense exists
   even where the driving was flawless. A conviction for buying or possessing
   alcohol under 21 revokes the driving privilege with no car involved.
2. **On a steep, narrow mountain road the downhill driver yields.** The
   intuition runs the other way, because the downhill driver has momentum and
   the uphill driver is the one struggling. Colorado gives the uphill vehicle
   the right-of-way and expects the downhill driver to back up to a turnout.
3. **Headlights are a visibility test, not a clock, and the signal distance
   doubles above 40 mph.** Drivers treat both as fixed. A dust storm or heavy
   snow can require headlights at noon, and on a four-lane road posted above
   40 mph the signal goes on 200 feet ahead rather than 100.
4. **A school bus stops traffic in both directions on any undivided road,
   including a four-lane road with no median.** People count lanes. Lane count
   is not the test; a median is. And where you do stop, it is 20 feet back.
5. **Passing does not suspend the speed limit.** See section 6, trap 1.

## 8. Verification

All run 2026-09-06 against the tree as committed.

```
$ npx tsx scripts/extract-quotes.mjs colorado
tmp/colorado-quotes.json: 251 quotes

$ python scripts/verify-excerpts.py colorado tmp/colorado-handbook.pdf \
    tmp/colorado-statute-full.txt tmp/colorado-statute-sections2.txt \
    tmp/colorado-page-home-driving-knowledge-tests.txt \
    tmp/colorado-page-minor-permit.txt tmp/colorado-page-adult-permit.txt \
    tmp/colorado-page-hb1021.txt tmp/colorado-page-permits-first-time.txt \
    tmp/colorado-page-driver-education.txt
colorado: 251/251 quotes verified verbatim against 9 source(s)

$ python scripts/build-excerpt-snippets.py colorado tmp/colorado-handbook.pdf
colorado: 230 snippets rendered, 21 not located
```

The 21 that did not render are the 10 statute quotes and the 11
dmv.colorado.gov web quotes. Neither is in the handbook PDF, so a miss is the
expected result; 230 of the 240 handbook quotes rendered, which is 96%.

Three rendered images were opened and inspected: `illegal-passing-list.png`,
`stopping-55-200-feet.png` and `parking-uphill-curb.png`. All three are tight,
legible crops with the first character of every line intact.

The validator's final line, and every warning it printed, are recorded in the
completion report for this bank. All five warnings are quote-length warnings,
on quotes between 320 and 444 characters: `mountain-road-downhill-yields`,
`lane-filtering-15-mph`, `crs-signal-distance`,
`crs-school-bus-separate-roadways` and `crs-lamps-1000-feet`. Each is a single
statutory sentence or a single
handbook sentence whose operative clause cannot be cut without changing what
the rule says, and all six are well inside the 600-character hard cap. They
are left as they are deliberately.

### A note on answer positions

Sets 1 to 3 were drafted with the correct answer in the second position 60% of
the time, which the validator correctly flagged as an error: a learner could
have cleared those three sets by always picking B. Thirty-five individual items
were re-ordered to fix it, each by moving the correct choice to a new slot
while leaving the other three in their existing relative order, so the tempting
distractor that had been placed first stays first. No wording was changed in
any question, explanation, context or trap. The bank now sits at A:25% B:25%
C:25% D:25%.
