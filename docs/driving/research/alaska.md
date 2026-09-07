# Alaska - research note

Bank: `src/lib/driving/alaska/`. Content date **2026-09-07**. Handbook edition
**REV.10/2025**.

Licensing authority: **Alaska Division of Motor Vehicles (DMV)**, a division of
the **Alaska Department of Administration**. Verified from the manual's own
cover page ("PREPARED BY ALASKA DEPARTMENT OF ADMINISTRATION / DIVISION OF
MOTOR VEHICLES") and from the department banner on every dmv.alaska.gov page.
The first credential is the **instruction permit** (class IP for non-commercial
motor vehicles), then a **provisional license** at 16-17, then a full **Class D**
driver license. Alaska has no "learner license" or "graduated licensing"
branding; the DMV's own pages use *instruction permit* and *provisional
license*, and this bank uses the same words.

Note on the old host: `doa.alaska.gov/dmv/...` URLs still circulate widely and
now 301 to `dmv.alaska.gov`. The live host is `dmv.alaska.gov`, and that is what
is cited.

---

## 1. Sources read

| Source | Publisher | Edition label | URL | Fetched | How |
|---|---|---|---|---|---|
| Alaska Driver Manual (95 pp PDF) | Alaska Dept of Administration, Division of Motor Vehicles | `REV.10/2025` (printed on preface page 1; PDF created 2025-10-08) | https://dmv.alaska.gov/media/t5ef5vi2/dlman.pdf | 2026-09-07 | direct download (`curl`), saved to `tmp/alaska-handbook.pdf` |
| Sample Knowledge Test | Alaska DMV (online services host) | undated web page | https://online.dmv.alaska.gov/practiceknowledgetest/ | 2026-09-07 | direct (`curl`), text in `tmp/alaska-dmv.txt` |
| Instruction Permit | Alaska DMV | undated web page | https://dmv.alaska.gov/credential-services/instruction-permit/ | 2026-09-07 | direct (`curl`), text in `tmp/alaska-dmv.txt` |
| Provisional License | Alaska DMV | undated web page | https://dmv.alaska.gov/credential-services/provisional-license/ | 2026-09-07 | direct (`curl`), text in `tmp/alaska-dmv.txt` |
| Your First Alaska Driver's License | Alaska DMV | undated web page | https://dmv.alaska.gov/credential-services/your-first-alaska-drivers-license/ | 2026-09-07 | direct (`curl`), text in `tmp/alaska-dmv.txt` |
| Road Test | Alaska DMV | undated web page | https://dmv.alaska.gov/credential-services/road-test/ | 2026-09-07 | direct (`curl`), text in `tmp/alaska-dmv.txt` |
| Alaska Statutes Title 28 (chapters 28.05, 28.15, 28.22, 28.35, 28.90) | Alaska State Legislature | **no edition or currency stamp** - the BASIS print view carries none; it is the Legislature's live published text as served on 2026-09-07 | https://www.akleg.gov/basis/statutes.asp | 2026-09-07 | direct (`urllib`, print view), text in `tmp/alaska-statute.txt` |

Fetch notes worth recording:

- `dmv.alaska.gov/home/` returns **403** to every automated client tried
  (curl, urllib, headless Chromium). The *content* pages under
  `/credential-services/` and the `online.dmv.alaska.gov` host serve fine, so
  no archive capture was needed. No Internet Archive snapshot was used
  anywhere in this bank.
- Reddit was fetched with `scripts/fetch-reddit.py` in two batches; every
  thread used is listed in section 6.

**Extraction check, done before anything was built on the PDF.** Two prior
jurisdictions in this project (Nebraska, West Virginia) had broken font maps
that produced gibberish which still verified as a substring. The Alaska manual
was checked first: 95 pages, 166,817 characters extracted, and the
mangled-token scan (`[a-z]{2,}\d[a-z]+` and digit-initial words) found exactly
**two** hits in the whole document - `1Traffic`, which is a footnote marker run
into the following word on page 29, and `iti4dmv`, which is part of the real URL
`k2do-ak.iti4dmv.com`. Neither is corruption. Non-ASCII characters are ordinary
typographic ones (curly quotes, bullets, en and em dashes, a handful of
mathematical italics in the kinetic-energy formula on printed page 56). The PDF
was produced by Acrobat PDFMaker 25 from Word, and its text layer is clean.
`verify-excerpts.py` reported **0 MANGLED** warnings across all 540 quotes.

---

## 2. Test format

| Item | Value | Source |
|---|---|---|
| Questions | 20 | Sample Knowledge Test page: "General Knowledge Test at Alaska DMV: 25 minutes allowed, 20 questions, 16 correct answers to pass." |
| Pass mark | 16 of 20 (80%) | same line |
| Time limit | 25 minutes | same line |
| Early-stop rule | none published | - |
| Retest wait | next day ("If failed, the test may be retaken the following day") | Manual, Examinations - Written, printed p. 7 |
| Where taken | DMV office, DMV Business Partner, or **online from home** via Alaska KnowTo Drive (`ak.knowtodrive.com`) | Manual, printed pp. 4, 7, 8 |
| Scope | "The written test covers only information found in this manual, including traffic laws, safe driving practices, and highway sign recognition." | Manual, printed p. 7 |
| Manual during test | not permitted ("THIS MANUAL MAY NOT BE USED DURING THE TEST") | Manual, preface p. 3 |
| Reader allowed | yes, if you understand English but cannot read it; you must answer yourself | Manual, printed p. 7 |
| Permit fee | $15 ($35 federally compliant) | Manual printed p. 9; DMV Instruction Permit page |
| Road test fee | $15 through DMV; third-party testers vary | Manual, printed p. 7 |
| Road test retake | normally two business days | Manual, printed p. 7 |

**The manual states none of the first three figures.** The DMV's Sample
Knowledge Test page is the only official Alaska source found that gives the
question count, the pass mark and the clock, and it gives all three in a single
sentence. That sentence is quoted as excerpt `test-format`.

Sections: the Alaska test is **not** sectioned (no separate signs half), so
`officialTest.sectionedBy` is not set.

---

## 3. Section and page map

The manual's printed page numbers and the PDF page numbers differ, and the
printed numbers are not unique - **printed pages 54 to 59 appear twice**, once
for the pavement-markings and railroad-crossing run and again for the
night-driving to weather-conditions run. That is a defect in the publisher's
own numbering, not in our extraction. Because of it, every citation in
`excerpts.ts` and every `sourceUrl` uses the **PDF page** in a `#page=N`
anchor, which is unambiguous. The table below maps both.

| Chapter / heading | Printed p. | PDF p. |
|---|---|---|
| Preface, index, "may not be used during the test" | prefaces 1-3 | 2-4 |
| Online services | 1 | 5 |
| Who must have a license; exemptions; classes and permits; identification | 2 | 6 |
| Proof of date of birth; parental consent | 3 | 7 |
| Non-commercial instruction permit | 4 | 8 |
| Driver's license requirements; provisional licenses | 5 | 9 |
| Provisional restrictions; examinations (vision) | 6 | 10 |
| Examinations (written, driving) | 7 | 11 |
| Alaska KnowTo Drive; road test booking; third-party testers | 8 | 12 |
| Other information: photograph, fees, duplicates, address/name change, records, organ donation, voter registration | 9 | 13 |
| Financial responsibility and mandatory insurance | 10 | 14 |
| What to do in case of every crash; a word about points | 11 | 15 |
| Driver's license point assignment | 12 | 16 |
| Suspensions and revocations | 13 | 17 |
| Implied consent | 14 | 18 |
| Alcohol, drugs, driving - DUI cost list | 15 | 19 |
| Administrative revocations; under-21 violations | 16 | 20 |
| Administrative hearing; court revocations | 17 | 21 |
| Facts you should know about alcohol; know your limits | 18 | 22 |
| Ignition interlock device; how drinking affects a driver; BAC chart | 19 | 23 |
| Drugs | (unnumbered) | 24 |
| Facts you should know about safety belts | 20 | 25 |
| Safety belts continued; belt law; child restraints | 21 | 26 |
| Seat-belt exceptions and fines; child passenger safety | 22 | 27 |
| Child passenger safety (AAP recommendations) | 23 | 28 |
| Distracted driving | 24 | 29 |
| Control of vehicle; drivers to exercise due care | 25 | 30 |
| Backing; obstruction to driver's view; TV, laptops, texting | 26 | 31 |
| Following; four-second rule; how to keep from being struck | 27 | 32 |
| Speed, impact and braking distance | 28 | 33 |
| Speed laws; speed limitation law; traffic safety corridors | 29 | 34 |
| Signaling; towing | 30 | 35 |
| Turns (two-way to one-way, one-way to two-way, left turn) | 31 | 36 |
| Turns continued; three point turn | 32 | 37 |
| Intersections; uncontrolled intersections; right of way law | 33 | 38 |
| Roundabouts | 34 | 39 |
| You must yield in these situations | 35 | 40 |
| Passing safely; stops required | 36 | 41 |
| Do not pass | 37 | 42 |
| Signs: how signs help; regulatory, stop, yield | 38 | 43 |
| Signs: do not enter, warning, guide, construction, school, service | 39 | 44 |
| Sign gallery (regulatory and warning) | 40 | 45 |
| Sign gallery (warning, construction, roundabout, caribou) | 41 | 46 |
| Signs within work areas | 42 | 47 |
| Sharing the roadway; vulnerable road users | 43 | 48 |
| Pedestrian responsibilities; bicycles (motorist) | 44 | 49 |
| Bicyclists; hand signals | 45 | 50 |
| Motorcycles | 46 | 51 |
| Motorcycles continued | 47 | 52 |
| Overtaking / meeting a school bus | 48 | 53 |
| Slow moving vehicles (SMV emblem) | 49 | 54 |
| Traffic signals: red, yellow, green ball; red and yellow arrow | 50 | 55 |
| Traffic signals: green arrow, flashing red and yellow | 51 | 56 |
| Unlit signal head; pedestrian signals | 52 | 57 |
| Pedestrian signals; lane control; two-way left turn arrows | 53 | 58 |
| Pavement markings (introduction) | 54 (first) | 59 |
| Pavement markings gallery (restricted, divided, shared centre, reversible) | 55 | 60 |
| Pavement markings (yellow and white lines, legends, crosswalks) | 56 | 61 |
| Pavement markings (wrong lane to turn) | 57 | 62 |
| Railroad crossings | 58 | 63 |
| Railroad crossings (stuck on the tracks, ENS) | 59 | 64 |
| Railroad emergency notification numbers | (unnumbered) | 65 |
| Night driving and lighting; glare recovery | 54 (second) | 66 |
| Use of lighting equipment; lighting law | 55 (second) | 67 |
| Major roads; check vehicle; emergencies; drowsy; speed | 56 (second) | 68 |
| Controlled access multi-laned; blind spots; following; passing; changing lanes | 57 (second) | 69 |
| Highways: entering and leaving the expressway | 58 (second) | 70 |
| Weather conditions | 59 (second) | 71 |
| Animals | 60 | 72 |
| Skids: prevention and recovery | 61 | 73 |
| Parking; parallel parking | 62 | 74 |
| Parking on a hill; leaving a parking space | 63 | 75 |
| Emergency vehicles; approaching and stationary; following | 64 | 76 |
| Fire hoses; stop by law enforcement | 65 | 77 |
| Emergencies: blowout, fire, wet brakes, jammed accelerator, disabled vehicle, brake failure, head-on | 66 | 78 |
| Safety tips: wheels off roadway, coasting, turning around, backing | 67 | 79 |
| Required equipment | 68 | 80 |
| Horn, mufflers, suggested safety equipment, carbon monoxide | 69 | 81 |
| Large trucks and buses; the No-Zone | 70 | 82 |
| Trucks: tailgating, wide right turns | 71 | 83 |
| Flooding | 72 | 84 |
| Smart driving (driving habits) | 73 | 85 |
| Check your driving habits (two-second rule, reaction, ABS) | 74 | 86 |
| Maintenance practices (tire tread, pressure) | 75 | 87 |
| Stay informed; additional resources | 76 | 88 |
| Maintenance safety tips for teens | 77 | 89 |
| Maintenance safety tips (fluids) | 78 | 90 |
| Littering; unsecured loads | 79 | 91 |
| Motor vehicle contacts (DMV field offices) | 80 | 92 |
| Mailing addresses; online services | 81 | 93 |
| Driving involves many issues (closing summary) | 89 | 94 |

---

## 4. What the handbook does not say

Alaska's manual is unusually complete on numbers - it prints the statutory
speed defaults, the parking distances, the 100-foot signal rule and the
headlight dimming distances, which most state handbooks leave to the statute.
The genuine gaps are narrow, and all of them are filled from Alaska Statutes
Title 28:

| Number the test can ask for | Where the manual is silent | Statute used |
|---|---|---|
| How far back to stop for a school bus | Manual says stop, never gives a distance (printed p. 48) | **AS 28.35.145(a)** - "shall stop not less than 30 feet from the school bus" |
| Penalty for passing a stopped school bus | not stated | **AS 28.35.145(d)** - class B misdemeanor, mandatory six demerit points |
| The DUI sentence a court must impose | manual gives a *cost* list ("3 Days in Jail: $270", "Court Fines: $1,500") rather than the statutory minimum | **AS 28.35.030(b)(1)(A)-(F)** - class A misdemeanor; not less than 72 consecutive hours and $1,500 for a first, rising to 360 days and $7,000 |
| When DUI becomes a felony | not stated | **AS 28.35.030(n)** - class C felony with two or more prior convictions in the preceding 10 years; fine not less than $10,000 |
| Open containers of alcohol | **not mentioned anywhere in the manual** | **AS 28.35.029** - infraction; lawful in the trunk, behind the last upright seat if enclosed, or behind a solid partition |
| Statutory basis for the liability minimums | manual states 50/100/25 but not that it is a statutory policy requirement | **AS 28.22.101(d)** |
| Penalty for not pulling over with five vehicles behind | manual states the duty, not the penalty | **AS 28.35.140(b)** - infraction, fine of at least $100 |
| Move-over duties by lane count, and their penalties | manual summarises; does not give the two-tier structure or the penalty | **AS 28.35.185(a)-(b)** - vacate the lane where two or more lanes run your way, otherwise slow; infraction, or class A misdemeanor if personal injury results |
| The seat-belt rule as statute | manual paraphrases | **AS 28.05.095(a)-(b)** |
| Instruction permit statutory basis and the renewal limit | manual states both; statute confirms | **AS 28.15.051(a)** |
| Provisional passenger and curfew restrictions as law | manual and DMV page word them differently (see section 5) | **AS 28.15.057(b)** |
| Statutory penalty for breaking a provisional restriction | not in the manual | **AS 28.15.057(d)** (infraction) + DMV Provisional License page ($200 and 2 points) |
| Failure to stop for a peace officer | manual states the duty | **AS 28.35.182(b)** |
| Court revocation periods | manual lists the offenses, not the lengths | **AS 28.15.181(a)-(b)** |
| Electronic-device offense in full | manual gives a two-line summary and points at the statute | **AS 28.35.161(a), (c)** |

The **knowledge test format** is the other gap, and it is filled from the DMV's
Sample Knowledge Test page rather than from the statute (section 2).

---

## 5. Conflicts, and how each was resolved

**a) Provisional passengers - three wordings, one rule.**

- Manual (printed p. 6): "MAY NOT carry passengers unless one of the passengers
  is a parent, legal guardian, or a person at least 21 years of age" and
  separately "MAY carry, without a parent in the vehicle, passengers if they are
  siblings."
- DMV Provisional License page: "You may not carry passengers under the age of
  21, except siblings."
- AS 28.15.057(b)(1): may not carry passengers "(A) except a passenger who is a
  parent, legal guardian, sibling, or a person at least 21 years of age; or (B)
  unless at least one of the passengers is a parent, legal guardian, or person
  at least 21 years of age."

Read together they agree that a sibling is always allowed and that a person 21
or over is always allowed. They differ on the edge case of a lone passenger aged
18-20 who is not a sibling: the manual's first clause forbids it, the DMV page
appears to forbid it too, and the statute's clause (A) would allow a passenger
"at least 21" only - so all three in fact forbid it. **Resolution:** the two
questions that touch this (`ak_s3_22`, and the context in `ak_s5_21`) are built
on a same-age friend, which every reading forbids, and the explanation quotes
the statute's list. No question is built on the 18-20 edge.

**b) Following distance - four seconds or two?**

The manual teaches the Four-Second Rule (printed p. 27) and then prints a
footnote on the same page and the next: "While this chart recommends the use of
the 4 second rule, 13 AAC 02.090 requires at a minimum the 2 second rule." Later
(printed p. 74) it reproduces a Harvard Law School eco-driving text that teaches
the two-second rule and cites the same regulation. **Resolution:** the bank
asks which interval the *manual teaches* (`ak_s1_04`) and states the two-second
floor in the trap and context, so a learner who meets either wording on the real
test can answer it. No question asks which is "correct".

**c) School-bus stop on a divided highway - manual vs statute.**

Manual (printed p. 48): a driver "upon a highway with separated roadways
providing two or more lanes in each direction need not stop". AS 28.35.145(c):
a driver "on a highway with separate roadways is not required to stop when
meeting or passing a school bus that is on a different roadway" - with no
two-lanes-each-way requirement. The statute is broader. **Resolution:**
`ak_s5_11` is built on a four-lane divided highway with a physical median, which
satisfies both readings, and the trap makes the point that a painted centerline
is not a divided highway.

**d) Duplicate printed page numbers 54-59.** Recorded in section 3. All
citations use PDF page anchors, so nothing in the bank depends on the ambiguous
printed numbering.

**e) `doa.alaska.gov` vs `dmv.alaska.gov`.** The old host 301-redirects. Every
URL in the bank points at the live `dmv.alaska.gov` or `online.dmv.alaska.gov`
host.

---

## 6. What learners report

`scripts/fetch-reddit.py` was run twice for this bank (queries:
`alaska:"permit test"`, `alaska:"knowledge test failed"`,
`Anchorage:"DMV written test"`, `Fairbanks:"permit test"`,
`DMV:"Alaska knowledge test"`, `newdrivers:"Alaska permit"`, then
`anchorage:"DMV"`, `Anchorage:"drivers license"`, `alaska:"written test"`,
`alaska:"DMV test"`, `driving:"Alaska"`, `newdrivers:"Alaska"`,
`alaska:"road test"`, `alaska:"moose"`). It saved **100 threads** to
`tmp/alaska-reddit-*.txt`. Most are off-topic (PFD applications, moose photos,
vehicle registration); **13** carried usable claims about the knowledge or road
test and are listed below. Nothing was copied: forum posts were used only to
learn which *rules* get tested, and each claim was then confirmed against the
manual, the statute or the DMV before a question was written from the source.

| Sub | Thread | Year | Claim (paraphrased) | Shaped |
|---|---|---|---|---|
| r/alaska | Driver's License Written Test | 2021 | Several posters independently: know the DUI penalties - maximum fine, jail time - because there are a few questions on them. One says they lost two questions to exactly that. | `ak_s3_07`, `ak_s5_01`, `ak_s5_23`, `ak_s5_13` |
| r/alaska | Do I need to take a test to get an Alaskan DL? | 2023 | A valid out-of-state license does not exempt you from the written test; "a few Alaska specific questions like insurance minimums"; another poster: "heavily based on insurance and DUI penalties when I took it, also RxR crossings". | `ak_s3_11`, `ak_s5_34`, `ak_s1_28`, `ak_s5_02`, `ak_s3_04`, `ak_s3_05` |
| r/alaska | Do I need to take a test to get an Alaskan DL? | 2023 | A poster recalls being asked whether you lose your license if you are found *not guilty* of a DUI, and the answer being yes. | `ak_s3_01`, `ak_s5_17`, `ak_s1_19` |
| r/alaska | Do I need to take a test to get an Alaskan DL? | 2023 | The general knowledge test can only be taken once per day until you pass. | `ak_s2_16` |
| r/alaska | Do I need to take a test to get an Alaskan DL? | 2023 | "The main points are DUI and the fines associated with them." | set 5 shape overall |
| r/alaska | From Alaska Driver's Permit Practice Test. Explain. | 2024 | A commenter notes the official alaska.gov practice test is only 20 questions - independent corroboration of the 20-question format from a local. Also: third-party practice tests circulating for Alaska contain wrong answers. | `ak_s1_24`, and the officialTest note recommending the manual over practice tools |
| r/alaska | From Alaska Driver's Permit Practice Test. Explain. | 2024 | One parent reports a child failing first time on a signal-meaning question around 2010. | `ak_s1_09`, `ak_s6_15` |
| r/alaska | Drivers road test | 2024 | "Look up the insurance requirements. That's always on the test." | `ak_s5_02` |
| r/alaska | Drivers road test | 2024 | On the road test, do not creep into the crosswalk to see whether you can turn right on red. | `ak_s1_02`, `ak_s4_21` |
| r/alaska | For those who have taken the Alaska road driving test... | 2016 | Parallel parking is tested with cones and the examiner may get out and measure; one candidate failed at 8 inches from the curb. | `ak_s6_17` |
| r/alaska | Age 14 to drive in Alaska? | 2020 | Confirms a 14-year-old may practice with a permit and a licensed adult - the fact people search for most about Alaska licensing. | `ak_s1_08` |
| r/alaska | People who drive 50mph on the hwy... | 2020 | Long thread on slow drivers who speed up in passing zones on the Seward and Kenai highways; the pull-over duty is a live local grievance. | `ak_s2_09`, `ak_s4_04` |
| r/driving | I take my alaska driving test in 15 days any tips | 2013 | Road-test basics: seatbelts, signals, parallel parking technique. | background only |

No Alaska-specific "most missed questions" page is published by the DMV, and no
Alaska statute enumerating the knowledge test's subject matter was found - the
manual's own "covers only information found in this manual" line is the nearest
equivalent, and it is quoted in `officialTest.notes`.

Two format claims from the forums were **not** adopted because no official
source confirms them: that skipping a question is not scored as wrong, and that
the real test's items are drawn verbatim from the DMV practice tool. The second
is asserted by several posters across a decade; it is plausible and it is not
something this bank should state as fact, so `officialTest.notes` instead tells
learners to use the practice tool *and* the manual.

---

## 7. Local gotchas (the `localGotchas` array)

1. **Four seconds, not three.** Alaska's manual teaches a four-second following
   interval, six or more when towing or on a wet surface. Every neighboring
   state's material says three, and 13 AAC 02.090 says two is the legal floor,
   so a learner meets three conflicting numbers and has to know which one the
   manual is asking about.
2. **The DMV can take your license when the court lets you go.** A 0.08 breath
   result or a refusal brings a 90-day administrative revocation on a first
   offense, and the manual states in terms that it happens even if the charge is
   dismissed or you are acquitted. Under 21 the trigger is *any* measurable
   alcohol and the first revocation is 30 days. Alaska learners name this as the
   item that catches people, because the intuition is that an acquittal restores
   everything.
3. **The DUI figures are examinable, not just the principle.** Multiple
   independent posters report being asked for the fine, the jail time and the
   points. First offense: class A misdemeanor, not less than 72 consecutive
   hours, not less than $1,500, six months of interlock, ten points, and the
   conviction stays on the record permanently.
4. **50/100/25.** Alaska's liability minimums are $50,000 per person, $100,000
   per accident, $25,000 property. Out-of-state transfers say this is the
   question they get wrong, because every state's numbers differ and generic
   practice apps use somebody else's.
5. **Stop 30 feet back from a school bus.** The manual never prints the
   distance; AS 28.35.145 does, and it applies from either direction. Class B
   misdemeanor, mandatory six points. The only excuse is a highway with separate
   roadways when the bus is on the other one - a painted centerline is not a
   divided highway.
6. **Low, specific unposted limits.** 15 in an alley, 20 in a business district
   *and* in a school zone, 25 residential, 55 everywhere else. Most states put
   business districts above residential ones; Alaska puts them below. Inside a
   designated Traffic Safety Corridor every traffic fine is doubled.
7. **A permit at 14, but with a clock.** Two years, renewable exactly once. At
   16-17 you must hold it six full months with no traffic conviction in the last
   six before a provisional license issues, and breaking a provisional
   restriction is an infraction worth $200 and two points.

---

## 8. Verification

Run on **2026-09-07**, in this order, against the tree as it now stands.

```
$ npx tsx scripts/extract-quotes.mjs alaska
tmp/alaska-quotes.json: 540 quotes

$ python scripts/verify-excerpts.py alaska tmp/alaska-handbook.pdf \
      tmp/alaska-statute.txt tmp/alaska-dmv.txt
alaska: 540/540 quotes verified verbatim against 3 source(s)

$ python scripts/build-excerpt-snippets.py alaska tmp/alaska-handbook.pdf
alaska: 479 snippets rendered, 17 not located, 44 skipped as not in this document

$ npx tsx scripts/validate-driving.mjs --only alaska
=== Alaska (AK) - 6 sets ===
  snippets: 479 in manifest, 479/540 excerpts covered (89%)
  quotes verified: 540/540 verbatim against alaska-handbook.pdf, alaska-statute.txt, alaska-dmv.txt
  excerpts: 540 (362 unused), questions wired: 195/195 (100%), quoted total: 78.9k chars
  questions: 195
  answer positions: A:22% B:27% C:29% D:22%
  context: 100%  source links: 100%  starred: 18%
  topics: rules:26 safety:26 impairment:22 signs:18 signals:18 licensing:17 sharing:17 rightOfWay:16 speed:14 emergencies:11 parking:10
ERRORS: 0   WARNINGS: 0

$ npx tsc --noEmit -p .
(clean)
```

Notes on those numbers:

- **44 skipped** are the statute and DMV-page quotes, which are correctly not
  found in the handbook PDF. **17 not located** are handbook quotes the snippet
  locator could not crop, almost all of them spanning a column or page break or
  sitting inside a figure caption; they still verified as verbatim, they simply
  have no picture. Snippet coverage of handbook-sourced quotes is 479 of 496,
  or 97%.
- **Every question's `excerptKey` was audited against the quote it resolves
  to**, by dumping question, keyed answer and quote side by side
  (`tmp/alaska-keycheck.txt`). Fourteen pairings where the quote did not
  actually carry the fact the question turns on were fixed: nine excerpts were
  re-cut with tighter anchors and six new ones added (`points-no-insurance`,
  `points-speeding-20`, `pedestrian-survival-figures`, `markings-no-shoulder`,
  `yield-unmarked-crosswalk`, `slow-near-curve`, `dui-points-permanent`), then
  the affected questions were repointed and everything re-verified.
- **362 unused excerpts.** The library is larger than the questions strictly
  need. Nothing was deleted, per the playbook: an excerpt is removed only when
  no question references it *and* another excerpt already covers the same rule,
  and these are all distinct verified rules from a 95-page manual. They cost
  nothing and they make the excerpt browser genuinely useful.
- **Excerpt keys use British spellings in a few identifiers**
  (`license-age-16`, `markings-centre-lane-not-driving`,
  `fraudulent-license-alcohol` and similar). These are internal identifiers,
  not copy - the rendered snippet PNGs are named after them - so they were left
  alone. All learner-facing prose in this bank uses American spelling.
- Three PNGs were opened and inspected by eye (`four-second-rule`,
  `parking-distances`, `red-ball-right-turn`): the crops are correctly framed
  with the quoted sentence highlighted and no clipped characters.
