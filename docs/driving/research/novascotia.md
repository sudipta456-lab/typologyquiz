# Nova Scotia - research behind the driving bank

Built 2026-09-06. Slug `novascotia`, code `NS`, 195 questions across six sets,
371 verbatim excerpts.

The short version: Nova Scotia's Driver's Handbook is a book from 2000, last
reprinted in 2017, and the Registry of Motor Vehicles has chosen to amend it in
public rather than reset it. There are therefore four layers of official text
that all still apply, and they do not agree. This note records which layer each
fact in the bank came from and why.

---

## 1. Sources read

| Source | Publisher | Edition label | URL | Fetched | How |
|---|---|---|---|---|---|
| Nova Scotia Driver's Handbook, ten chapter PDFs | Province of Nova Scotia, published under the authority of the Minister of Service Nova Scotia and Municipal Relations | Crown copyright 2000; copyright page reads "Reprinted with revisions, 2003, 2004, 2005, 2006, 2007, 2013 and 2017"; ISBN 0-88871-615-X | https://novascotia.ca/sns/rmv/safe/handbook.asp (chapter files at `/sns/rmv/handbook/DH-*.pdf`) | 2026-09-06 | direct, `curl` |
| Important Graduated Driver Licence Changes (four-page supplement, pages V to VIII of the Introduction PDF) | same | undated; describes changes effective 1 April 2015 | https://novascotia.ca/sns/rmv/handbook/DH-1_intro.pdf | 2026-09-06 | direct |
| Registry of Motor Vehicles - Nova Scotia Driver's Handbook page, including its "Please note the following amendments" list | Service Nova Scotia | undated web page, Crown copyright | https://novascotia.ca/sns/rmv/safe/handbook.asp | 2026-09-06 | direct |
| Registry of Motor Vehicles - Graduated Drivers Licence System | Service Nova Scotia | undated web page | https://novascotia.ca/sns/rmv/licence/gradlic.asp | 2026-09-06 | direct |
| Nova Scotia Permits Directory - Learner's (Beginner's) Licence | Service Nova Scotia | undated web page | https://novascotia.ca/sns/paal/RMV/paal378.asp | 2026-09-06 | direct |
| Nova Scotia Permits Directory - Newly Licensed Driver's Licence | Service Nova Scotia | undated web page | https://novascotia.ca/sns/paal/rmv/paal379.asp | 2026-09-06 | direct |
| Nova Scotia Permits Directory - Restricted Individuals with Condition 47 | Service Nova Scotia | undated web page | https://novascotia.ca/sns/paal/rmv/paal607.asp | 2026-09-06 | direct (read, not quoted) |
| Take a driver knowledge test: Learner's Licence (class 7) | Government of Nova Scotia (Service Nova Scotia, Public Works) | undated web page | https://www.novascotia.ca/take-driver-knowledge-test-learners-licence-class-7 | 2026-09-06 | direct, `curl` (WebFetch is refused with HTTP 403 by this host) |
| Driver knowledge tests (index) | Government of Nova Scotia | undated web page | https://www.novascotia.ca/programs-and-services/driver-knowledge-tests | 2026-09-06 | direct, `curl` |
| Motor Vehicle Act, R.S.N.S. 1989, c. 293 | Nova Scotia House of Assembly, Office of the Legislative Counsel | "MAY 1, 2026" running footer on every page; 226-page consolidation | https://nslegislature.ca/sites/default/files/legc/statutes/motor%20vehicle.pdf | 2026-09-06 | direct |

Publisher check, because the brief warned that two recent banks had it wrong:
the handbook's own copyright page says "Published under the authority of the
Minister of Service Nova Scotia and Municipal Relations", and the Registry of
Motor Vehicles is the branch that serves it. The current department name on the
2026 web pages is "Service Nova Scotia, Public Works". `handbookEdition` is set
to the reprint line, which is the only edition label the publisher gives.

Licence-stage name check: the stage a learner is applying for is the
**Learner's Licence (class 7)**, which the Permits Directory notes is
"sometimes called Beginner's". That is what `licenceName` carries. The three
GDL stages are the **Learner's Licence**, the **Newly Licensed Driver's
Licence (Class 5N)**, and the **Restricted Individual stage (Class 5R or 6R
with condition 47)**.

Nothing was fetched from a practice-test site, an aggregator, or Wikipedia.

**No PDF handbook exists as a single file.** The ten chapter PDFs were
downloaded separately and concatenated with PyMuPDF into
`tmp/novascotia-handbook.pdf` so the verification and snippet pipelines could
read one document. The concatenation preserves page order exactly; no page was
altered. Page mapping is in section 3 below.

---

## 2. Test format

All from the Class 7 knowledge test page unless noted.

| Item | Value | Source |
|---|---|---|
| Parts | Two, scored separately: Rules of the Road Test and Road Sign Recognition Test | class 7 page |
| Questions | 20 multiple-choice in each part | class 7 page; handbook page 7 and page 9 agree |
| Pass mark | At least 16 correct in each part; both parts must be passed | class 7 page; handbook page 9 |
| Time limit | 30 minutes per part | class 7 page |
| Fee | $15.03 for the Class 7 Knowledge Test | class 7 page |
| Where | Online from home, or in person at Registry of Motor Vehicles / Access Nova Scotia | class 7 page |
| Online requirements | Desktop or laptop plus a webcam that photographs you throughout; phones and tablets not permitted; English or French | class 7 page |
| Retake | Only the part you failed; both if you failed both | class 7 page |
| Retake wait | None at all online; next day if taken in person | class 7 page |
| After passing | Attend in person for vision test, identification, parent/guardian consent if 16 or 17, fee, photograph | class 7 page |
| Eligibility | 16 or older; written parental consent if 16 or 17; no outstanding fines or reinstatement fees; not suspended or prohibited | class 7 page |
| Oral testing | Available by arrangement with the Registry or by appointment at Access Nova Scotia | class 7 page; handbook page 7 |
| Practice period before road test | 12 months, or 9 months with a recognized driver education or training programme | gradlic.asp; paal379.asp |
| Road test retake wait | At least one week | handbook page 15 |
| Upgrade deadline after passing the road test | Within 6 months, or the road test must be taken again | handbook page 16 |

`officialTest` in `index.ts` is therefore `questionCount: 40`, `passCount: 32`,
`passLabel: "16 of 20 on each of the two parts"`, `timeLimitMinutes: 30`, and
`sectionedBy` with a 16-question pass mark on each half. The `signs` topic maps
to the Road Sign Recognition Test; every other topic maps to the Rules of the
Road Test. Every set carries at least six `signs` questions so both halves can
be scored honestly.

---

## 3. Section and page map

The handbook has one continuous set of printed page numbers running across ten
separately-served PDFs. The concatenated file used for verification maps as
follows, and the `#page=` anchors in the excerpts point into each chapter's own
PDF because that is what a reader's viewer needs.

| Chapter PDF | Merged pages | Printed pages | Printed page to chapter-local page |
|---|---|---|---|
| `DH-1_intro.pdf` | 1-17 | roman I-XVI | local = merged |
| `DH-Chapter1.pdf` - Your Driver's Licence | 18-53 | 1-36 | local = printed |
| `DH-Chapter2.pdf` - Rules of the Road | 54-93 | 37-76 | local = printed - 36 |
| `DH-Chapter3.pdf` - Signs, Pavement Markings and Work Zones | 94-121 | 77-104 | local = printed - 76 |
| `DH-Chapter4.pdf` - Safety | 122-148 | 105-131 | local = printed - 104 |
| `DH-Chapter5.pdf` - Adverse Driving Conditions | 149-166 | 133-150 | local = printed - 132 |
| `DH-Chapter6.pdf` - Driving and Impairment | 167-179 | 151-163 | local = printed - 150 |
| `DH-Chapter7.pdf` - Vehicle Registration and Insurance | 180-191 | 165-176 | local = printed - 164 |
| `DH-Chapter8.pdf` - Motorcycles | 192-219 | 177-204 | local = printed - 176 |
| `DH-Index.pdf` | 220-228 | 205-213 | - |

Headings a future editor will want, with printed page numbers:

- **Front supplement**: Important Graduated Driver Licence Changes V; Exiting
  the GDL program / Learner's Licence Expiry VI; Emergency vehicles VII; Yield
  to transit buses VIII.
- **Chapter 1**: Licensing System 3; Visitors 4; Getting a Learner's Licence
  (called Class 7) 6; How to Apply 7; Expiry 9; Restrictions 10; Driver
  training programs 12; Road Test 13; Newly Licensed Drivers 16; Exiting the
  GDL Program 17; Commonly Asked Questions 18; Renewing 23; Mandatory
  revocation 24; Suspension without conviction 26; Demerit Points 28;
  Probationary Licence 31; Removing demerit points 31; Classes of Licences 33;
  Endorsements 36.
- **Chapter 2**: Traffic signal lights 39; Arrow signals 40; Flashing signals
  40; Lane control signals 41; Crosswalk guards 42; Right of way 42; Unmarked
  crosswalks 42; Emergency vehicles 45; Driving on the right 46; Stopping
  distances 47; Driving too slowly 47; Safety scan 48; Blind spots 48;
  Two-second rule 49; Choosing a safe speed 50; School zone 51; Curves 51;
  Signal lights and horn 53; Turning 54; Following 56; Changing lanes 56;
  Overtaking and passing 57; Passing on the right 59; Being passed 59; Backing
  60; Parking and stopping 61; Parallel parking 62; Angle parking 63; Parking
  on a hill 64; Roundabouts and rotaries 64; Driveways 65; Controlled-access
  highways 66; Large commercial vehicles 67; School buses 68; Motorcycles 69;
  Bicycles 69; Sharing the Road with Bicycles 70; Common car-bike collisions
  71; Cycling strategies 72; Safety equipment 75.
- **Chapter 3**: Regulatory Signs 80 (stop, yield, school zone); Railway
  crossings 81; Other regulatory signs 83; Warning Signs 83; Guidance Signs 83;
  Pavement Markings 84; Climbing lane 86; Continuity lines 86; Two-way-left-turn
  lanes 87; sign galleries 88-93; Construction or Work Zones 94; Lane closures
  96; Work zone signs 97; General Signs 97; Signs with Arrows 98; Specific
  Signs 99; Human Activity Signs 101; Flashing Light Unit 102-103; The Shape of
  a Sign Says What It Means 104.
- **Chapter 4**: Maintaining your vehicle 107; Tires 109; Lighting equipment
  112; Special lights 114; Other vehicle equipment 114; Winter maintenance 115;
  Seat belts, child restraints and the law 117; Air bags 120; Carrying
  passengers 120; Walking on the highway 120; Hitchhiking 120; Driving position
  121; Steering 122; Safe Driving Tips 124; Stopping and braking 125;
  Preventing collisions 126; Driving defensively 127; Highway hypnosis 128;
  Slow-moving vehicles 129; Carrying loads 130; Towing trailers 130; Oversized
  vehicles 131.
- **Chapter 5**: Nighttime driving 136; Rain, snow and fog 137; A trucker's
  blind spots 138; Rain 139; Snow, frost and ice 140; Four-wheel drive 141;
  Emergencies 143; Brake failure 144; Tire blowouts 144; Sticking gas pedal
  145; Vehicle fires 145; Skids 146; Wheels leaving the pavement 146; Animals
  146; Plunging into water 147; Electrical wires 147; Snow plows 148;
  Collisions 149.
- **Chapter 6**: Drinking and driving 153; Getting caught 154; Drug impairment
  155; Penalties for impaired driving 156; Administrative Licence Suspension
  Program 156; 1st to 4th offence 157-158; Vision 162; Driver fatigue 163.
- **Chapter 7**: registration conditions 167; Visitors and new residents 169;
  Permits, plates and validation stickers 170; Temporary permits 172;
  Accessible parking plates and permits 172; Annual Safety Inspection 173;
  Insurance and Financial Responsibility 173-175; glove compartment 176.

Motor Vehicle Act sections used, by PDF page of the May 1 2026 consolidation:
100D cellular telephones (p75), 101 careful and prudent speed (p76), 102 prima
facie speed limit (p76), 103 school area and school bus (pp76-77), 106 maximum
speed limit (p78), 106E speed limit when passing emergency vehicle (p79), 119
signal required (p87), 120 backing and turning around (p87), 122 right of way
or left turn at intersection (p88), 124A duty respecting transit bus (p90), 133
stop sign (p94), 134 yield sign (p94), 135 rotary or roundabout (pp94-95), 70C
novice driver (p59).

---

## 4. What the handbook does not say

Every one of these is tested material that the printed book omits or states
incompletely, with the official source that supplies it.

1. **Hand-held phones and text messaging.** Nothing in the handbook, which was
   written in 2000. Section 100D of the Motor Vehicle Act creates the offence,
   with an exception only for reporting an immediate emergency, and the Act's
   demerit table (item 15) assigns it **four points**. Four points suspends a
   learner outright. Used in `ns_s5_04`.
2. **The statutory speed ceiling and cap.** The handbook says the unposted
   maximum is 80 km/h and stops there. Section 106(1) is the source of the 80;
   Section 106(2) caps anything the Minister may post at **110 km/h**. Used in
   `ns_s3_33` and `ns_s6_02`.
3. **The full 50 km/h list.** The handbook gives it as prose. Section 102(2) is
   the authoritative enumeration, including "in a residence district" and "in a
   business district" as defined terms rather than as descriptions of what a
   street looks like. Used in `ns_s5_11`.
4. **The school-area formula in statutory form.** Section 103(2)(a) gives the
   30-or-50 branch as a duty on the traffic authority. Used in `ns_s5_02`.
5. **The 60 km/h emergency-vehicle rule and its median exception.** Section
   106E. The handbook's chapter 2 does not contain the rule at all; it arrives
   only in the front supplement, and the supplement does not cite the section.
   Used in `ns_s2_18` and `ns_s5_09`.
6. **The transit bus duty.** Section 124A, and the front supplement. Chapter 2
   is silent. Used in `ns_s3_27` and `ns_s6_25`.
7. **The U-turn sight-distance rule.** The handbook says only "never stop,
   park, or make a U-turn in a curve". Section 120(2) supplies the 150 metres
   and the crest-of-grade case. Used in `ns_s3_20`.
8. **The hand-signal directions.** Chapter 2 shows them as illustrations with
   captions; Section 119(3) states them in words, which is what a written test
   can ask. Used in `ns_s2_07`.
9. **The current practice period.** See section 5 - this is the big one.
10. **The knowledge test's time limit, fee, online option and retake rule.**
    None of it is in the book. All from the Class 7 knowledge test page.

---

## 5. Conflicts, and how each was resolved

Four layers of official text are all live at once. Where they disagree the
newest official statement wins, and the disagreement is recorded here and
usually turned into the question's `trap`.

**(a) Road-test waiting period. RESOLVED AGAINST THE HANDBOOK.**
Handbook page 12 and page 13: "Normally, learners have to wait at least six
months before they can take a road test. (However, if you pass a long-course
driver training program, you have to wait only three months.)" Page 20 repeats
it. The Registry's Graduated Drivers Licence System page says "The minimum
practice period is 12 months. The practice period can be reduced to a minimum
of 9 months if the driver completes a recognized driver education or training
program." The Permits Directory entry for the Newly Licensed Driver's Licence
says the same, adding that the approved course must be at least 25 hours of
classroom teaching and 10 hours of driving.
The bank teaches **12 and 9**. `ns_s2_11`, `ns_s5_01` and `ns_s6_07` all key on
it, and it is the first `localGotchas` entry. A 2022 r/NovaScotia thread on
exactly this discrepancy is recorded in section 6; one commenter reported
emailing the Registry and being told the website is right and the handbook is
wrong.

Note that the Permits Directory page is itself internally inconsistent here: it
gives (a) as the nine-month driver-education exception and then carries a
stranded fragment plus a clause (b) offering a three-month waiting period for
Driver Instruction from a certified driving school. The Graduated Drivers
Licence System page knows nothing of a three-month route. **No question in this
bank turns on the three-month clause**; the items ask for the 12 and the 9,
which both pages state and agree on.

**(b) School zone speed. RESOLVED AGAINST PAGE 69.**
Page 51 and page 80: 30 km/h where the approaching limit is 50, 50 km/h where
the approaching limit is higher than 50, whatever the time of day. Page 69 of
the same book: "It is illegal for you to exceed 50 km/h in a school zone when
children are present, whatever the time or day." The Registry's amendments list
publishes the page-51 version as the amendment, and Section 103(2)(a) of the
Act carries the same two-branch formula. The bank teaches the **formula**
(`ns_s1_30`, `ns_s5_02`, `ns_s6_16`) and names the page-69 flattening in the
trap on `ns_s1_30`.

**(c) Collision reporting threshold. RESOLVED AGAINST PAGE 149.**
Page 149 body text: "property damage of $1000 or more." A margin note on the
same page reads "$2000 or more." Page 175, in chapter 7, says "property damage
of $2,000 or more". The Registry's amendments list publishes the $2,000 figure.
The bank teaches **$2,000** (`ns_s5_05`) and `ns_s5_33` asks only about the
24-hour deadline, which every layer agrees on.

**(d) Learner's licence validity. RESOLVED AGAINST CHAPTER 1.**
Chapter 1 says one year, twice (page 9 and page 18). The front supplement says
"A learner's licence is valid for a maximum of 2 years (previously 1 year)."
The bank teaches **two years** (`ns_s5_13`).

**(e) Number of GDL stages. RESOLVED AGAINST CHAPTER 1.**
Chapter 1 page 3 describes "3 levels" ending in an ordinary driver's licence,
and page 19's table runs Learner - Newly Licensed - Experienced. The supplement
and the Registry both describe three stages ending in the Restricted Individual
stage, added 1 April 2015, with a further two years at zero alcohol and no
supervising. The bank teaches the **three stages including Restricted
Individual** (`ns_s5_03`, `ns_s5_34`).

**(f) Retaking a failed knowledge test half. RESOLVED AGAINST THE PERMITS
DIRECTORY.**
paal378.asp: "If you fail one part, you have to take the entire test over."
The Class 7 knowledge test page: "You only need to retake the part of the
Knowledge Test you didn't pass". The newer page describes the test as it is now
administered, including online, and it wins. `ns_s5_08` teaches the current
rule and names the older page in its trap.

**(g) Class 5N exit requirement.** The handbook says "successfully complete an
authorized driver training program". The Registry's page offers two routes: a
six-hour Defensive Driving course, or a recognized driver training course of 25
hours theory and 10 hours driving. Both are stated; `ns_s3_04` and `ns_s5_19`
give both and do not turn on either alone.

**(h) A source typo left as-is.** Chapter 6 page 154 states that the liver
breaks down alcohol "at the rate of .015 mg/hr", which is not a coherent unit.
The quote is preserved verbatim in the excerpt library because a quote that has
been tidied is not a quote, and `ns_s5_27` deliberately asks about the "more
than one hour per standard drink" figure from the same paragraph rather than
about the rate. The trap on that question names the problem.

---

## 6. What learners report

`python scripts/fetch-reddit.py novascotia novascotia:"learners test"
halifax:"drivers licence test" CanadaDriving:"Nova Scotia" newdrivers:"Nova
Scotia" halifax:"beginners permit" novascotia:"knowledge test" halifax:"road
test" novascotia:"drivers licence"` saved **35 threads**. Two of the eight
searches (r/CanadaDriving and r/newdrivers) returned nothing for Nova Scotia.

Threads that shaped questions. Paraphrase only; no comment text is reproduced,
and no recalled exam question was used as a question.

| Sub | Thread | Year | What it showed | Questions it shaped |
|---|---|---|---|---|
| r/NovaScotia | "Is the Driver's Handbook Accurate?" | 2022 | A learner noticed the book's six-month road-test wait disagrees with the government website's twelve. Several replies confirmed the website; one said they had emailed the Registry and been told the book is wrong and has been since April 2016. Another reply pointed at the Registry's own list of changes since the last printing. | `ns_s2_11`, `ns_s5_01`, `ns_s6_07`, gotcha 1 |
| r/NovaScotia | same thread | 2022 | A commenter singled out the handbook's requirement to honk your horn before passing as the passage they found most absurd. | `ns_s2_02`, `ns_s5_06`, `ns_s6_05`, gotcha 2 |
| r/NovaScotia | same thread | 2022 | A driver described failing a road test in one town for slowing to 30 in a school zone when children were boarding buses, and being told the zone speed only applies within a set distance of the roadway. | `ns_s1_30`, `ns_s5_02` |
| r/halifax | "for anyone nervous about their road test :)" | 2024 | The same school-zone confusion, from the other direction: a driver failed once for going too slowly in a school zone and again in a different town for going too fast, and only passed after asking the examiner to clarify the rule before starting. A second commenter described a similar contradiction between their driving instructor and the examiner. | `ns_s1_30`, `ns_s5_02`, `ns_s6_16`, gotcha 3 |
| r/halifax | "for anyone nervous about their road test :)" | 2024 | A parent recounted an examiner explaining that the correct way past a parked vehicle on a two-way street is a full pass - check, signal, move completely into the oncoming lane, pass, signal, shoulder check, return - and describing straddling the line as one of the leading reasons people fail. | `ns_s5_12` |
| r/halifax | "Those that took their beginners driving test recently" | 2024 | Several replies converged on the same study list for the written test: signs, distances, right of way, emergency vehicles, school buses, passing, speed limits, hand signals, high beams, construction and parking. One added scenario topics: bad weather, parking uphill and downhill, following distance, what to do after a collision. | shape of sets 1, 2 and 6 |
| r/halifax | "Those that took their beginners driving test recently" | 2024 | Confirmation that the online option is real and that a webcam is required. Cross-checked against the Class 7 knowledge test page, which states the same. | `officialTest.notes` |
| r/halifax | "Ways to help boost the chances of passing the driver's test" | 2023 | A long checklist of road-test manoeuvres named construction zones, playground zones, school zones, roundabouts, uphill and downhill parking, hand signals, and low beams versus high beams. | `ns_s2_04`, `ns_s2_07`, `ns_s4_12`, `ns_s5_20`, `ns_s6_23` |
| r/halifax | "Driving test tips?" | 2023 | Repeated emphasis on shoulder checks before and after signalling, and on the vehicle needing a valid inspection sticker, insurance and permit before an examiner will accept it. | `ns_s4_35`, `ns_s4_02` |
| r/NovaScotia | "How to upgrade from 5N to 5R?" | 2025 | A 5N driver did not know the Restricted Individual stage existed or what ended the 5N stage. | `ns_s3_04`, `ns_s5_03`, `ns_s5_19`, gotcha 5 |
| r/NovaScotia | "Requirements for getting the N removed from my license?" | 2018 | The same gap, seven years earlier: a driver assumed the N came off automatically at two years. | `ns_s3_04`, `ns_s5_19` |
| r/NovaScotia | "A question about Access Nova Scotias GDL program." | 2018 | Questions about the curfew and what counts as an experienced supervising driver. | `ns_s1_07`, `ns_s5_22`, `ns_s5_34` |
| r/NovaScotia | "Question about Learners licence" and "Transferring Learners License" | 2024 | Confusion about what a learner may and may not do, and about how long the licence lasts. | `ns_s5_13`, `ns_s5_29` |
| r/NovaScotia | "How exactly do you get an access code when taking your beginners test online?" | 2024 | The online flow: pay, get a confirmation email with an access code, sit the test then or later. Matches the Class 7 page. | `officialTest.notes` |
| r/halifax | "What happens if I fail the road test twice?" and r/NovaScotia "Retesting process (drivers licence)" | 2025, 2024 | Uncertainty about waiting periods after a failure. Resolved from official pages: no wait online for the knowledge test, next day in person, one week for a road test. | `officialTest.notes`, `ns_s5_08` |

Two things learners said that were NOT used, and why:

- Several posters gave a specific claim about the distance from the roadway
  within which "children are present" applies in a school zone. No official
  source states any such distance - not the handbook, not the amendments page,
  not Section 103 of the Act, which fixes the zone by signs at its beginning
  and end. The claim is not in any question. What is in the bank is the rule
  the Province actually publishes, and the confusion itself is named in
  gotcha 3.
- Multiple posters said an examiner will fail you for any speed over the posted
  limit. That is a road-test scoring practice, not a rule any official page
  states, and the knowledge test does not ask about it.

Beyond Reddit: the Registry's own amendments list on the handbook page is the
closest thing Nova Scotia publishes to a "what has changed" page, and it is
worth more than any forum. Nova Scotia publishes no official practice test and
no statute listing the subjects the knowledge test must cover, so neither of
those routes was available.

---

## 7. Local gotchas

The six entries in `localGotchas`, and why each catches people.

1. **The book is older than the learner and the Registry amends it in public.**
   Four layers of official text, all live. A learner who studies only the
   printed chapters will answer the practice period, the learner's licence
   validity, the number of GDL stages, the emergency-vehicle rule and the
   transit-bus rule wrong. This is the single most important thing about
   studying in Nova Scotia and it is invisible unless you read the RMV page.
2. **You must sound your horn before passing.** Stated twice in chapter 2, once
   as the requirement and once in the passing checklist, and it is the rule
   Nova Scotians joke about because nobody does it. That combination - real
   law, universally ignored - is exactly what a knowledge test likes.
3. **The school zone speed is a formula.** 30 where the approach was 50, 50
   where the approach was higher. The same book contradicts itself on page 69.
   Nova Scotians have failed road tests in both directions on it.
4. **The default is 80, not 50.** The 50 is a list of defined places, not an
   urban default that follows the buildings. Learners arriving from a province
   with a statutory 50 km/h city rule get it backwards.
5. **Three GDL stages, and the last one is invisible.** Restricted Individual,
   Class 5R or 6R with condition 47, two more years at zero alcohol and no
   supervising. Drivers who hand in the 5N think they are done and are two
   years short.
6. **The handbook has no cellphone rule.** Section 100D of the Act carries the
   offence and four demerit points, which is enough on its own to suspend a
   learner.

---

## 8. Verification

Run 2026-09-06 against the tree as built.

```
$ npx tsx scripts/extract-quotes.mjs novascotia
tmp/novascotia-quotes.json: 371 quotes

$ python scripts/verify-excerpts.py novascotia tmp/novascotia-handbook.pdf \
      tmp/novascotia-mva.pdf tmp/ns-class7.txt tmp/ns-rmv-handbook-page.txt \
      tmp/nsr-gradlic.txt tmp/nsr-paal378.txt tmp/nsr-paal379.txt
novascotia: 371/371 quotes verified verbatim against 7 source(s)
```

Zero quotes matched only in a non-official file, because no non-official file
was passed or used. Every quote was lifted mechanically as a substring of the
same normalised text `verify-excerpts.py` reads (`tmp/ns-build-excerpts.py`
generates `excerpts.ts` from a table of start and end phrases), so no quote in
this bank was ever retyped.

Snippet rendering and the final validator run are recorded at the end of this
section.

### Warnings and what was done about them

- Three quotes exceed the 320-character soft cap and stay: `statute-school-area`
  (376) is a single two-branch statutory provision that means nothing if either
  branch is cut; `roadside-warn` (367) is the pass/warn/fail sequence, which is
  one rule stated as three outcomes; `paal-consent-withdraw` (338) is the
  consent-withdrawal rule, which needs its second sentence to say how it is
  done. All three are well under the 600-character hard cap.
- 199 of the 371 excerpts are not referenced by a question. They are kept
  because they are verified official wording on rules adjacent to what is
  asked, and the playbook's instruction is to delete a verified quote only when
  nothing references it AND another excerpt already covers the same rule.
- Answer positions were rebalanced once with `tmp/ns-rebalance.py`, which moves
  only the correct option and slides the others along in the order they were
  written, and which skips any question whose choices form an ascending numeric
  ladder. Twenty ladder questions were left untouched. Before: A 15%, B 61%,
  C 24%, D 1%. After: 25% each.
