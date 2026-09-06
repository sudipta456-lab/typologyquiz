# Wisconsin - research note

Bank built 2026-09-06 (`contentDate`). Handbook edition checked against: **2026 (BDS126)**.

Slug `wisconsin`, code `WI`, licence covered: **Class D instruction permit**.

---

## 1. Sources read

| # | Source | Publisher | Edition label | URL | Fetched | How |
|---|---|---|---|---|---|---|
| 1 | Wisconsin Motorists' Handbook | WisDOT Division of Motor Vehicles | "2026", form number **BDS126** (printed on the back cover: "Wisconsin Department of Transportation / Motorists' Handbook BDS126 / 2026") | https://wisconsindot.gov/Documents/dmv/shared/bds126-motorists-handbook.pdf | 2026-09-06 | Direct download of the PDF to `tmp/wisconsin-handbook.pdf` (60 printed pages, 64 PDF pages). Text extracted with PyMuPDF. |
| 2 | Wisconsin Statutes chapter 346 (Rules of the Road) | Wisconsin Legislative Reference Bureau | Current through the 2025 session; section histories in the fetched text run to `2025 a. 54` and `2025 a. 155` | https://docs.legis.wisconsin.gov/statutes/statutes/346 | 2026-09-06 | Direct, saved as visible text to `tmp/wisconsin-statute.txt` |
| 3 | Wisconsin Statutes chapter 343 (Operators' Licenses) | Wisconsin Legislative Reference Bureau | same | https://docs.legis.wisconsin.gov/statutes/statutes/343 | 2026-09-06 | Direct, appended to `tmp/wisconsin-statute.txt` |
| 4 | "Wisconsin knowledge tests" | WisDOT DMV | undated web page | https://wisconsindot.gov/Pages/dmv/teen-driver/teen-hw-aply/knowledge.aspx | 2026-09-06 | Direct, saved to `tmp/wisconsin-web.txt` |
| 5 | "Instruction permit (temps)" | WisDOT DMV | undated web page | https://wisconsindot.gov/Pages/dmv/teen-driver/yr-frst-lcns/permit.aspx | 2026-09-06 | Direct, saved to `tmp/wisconsin-web.txt` |
| 6 | "Graduated Driver License FAQs" | WisDOT DMV | undated web page | https://wisconsindot.gov/Pages/dmv/teen-driver/yr-frst-lcns/gdlfaqs.aspx | 2026-09-06 | Direct, saved to `tmp/wisconsin-web.txt` |
| 7 | "Point system" | WisDOT DMV | undated web page | https://wisconsindot.gov/Pages/dmv/license-drvs/susp-or-rvkd/point-system.aspx | 2026-09-06 | Direct, saved to `tmp/wisconsin-web.txt` |
| 8 | "Drunk driving law" | WisDOT | undated; penalty charts dated "as of October 1, 2023" | https://wisconsindot.gov/Pages/safety/education/drunk-drv/ddlaw.aspx | 2026-09-06 | Direct, saved to `tmp/wisconsin-web.txt` |
| 9 | News release: online Class D knowledge test | WisDOT | 20 March 2025 | https://wisconsindot.gov/Pages/about-wisdot/newsroom/news-rel/032025knowledgetest.aspx | 2026-09-06 | Direct, saved to `tmp/wisconsin-web.txt` |

**Excerpt sources are restricted to #1 and #2/#3.** Every one of the 190 quotes in
`excerpts.ts` is a verbatim substring of the handbook PDF or the statute text, and
`verify-excerpts.py` was run against exactly those two files. The WisDOT web pages
are used for `sourceUrl` on questions and for `officialTest.notes`, never as a
quoted excerpt, so that the verification command has only two sources to satisfy.

No Internet Archive captures were needed - every official URL served an automated
client directly.

---

## 2. Test format

| Fact | Value | Source |
|---|---|---|
| Knowledge test length | **50 questions** | Handbook Section 1.C, printed page 1 |
| Knowledge test pass mark | **40 correct (80%)** | Handbook Section 1.C, printed page 1 |
| Signs test length | **15 questions**, separate paper | Handbook Section 1.B, printed page 1 |
| Signs test pass mark | **12 correct (80%)** | Handbook Section 1.B, printed page 1 |
| Time | "about 45 minutes to complete"; no hard limit stated for the in-person test | Handbook Section 1.C; WisDOT knowledge-tests page |
| Booking | Walk-in only. "Knowledge tests are conducted on a walk-in basis. The DMV does not schedule appointments for knowledge tests." | WisDOT knowledge-tests page |
| Delivery | Touch-screen at most DMV customer service centers, with instant feedback; audio assist on request; paper on request. Not offered at Milwaukee Downtown or Sauk City. | WisDOT knowledge-tests page |
| Languages | English, ASL, Burmese, Chinese, Croatian, Hmong, Polish, Russian, Serbian, Somali, Spanish | WisDOT knowledge-tests page |
| Fee | Free at a DMV service center. **$10 per attempt** online. | Handbook Section 1.C; WisDOT knowledge-tests page |
| Online option | Ages **15-17** only, at home via KnowTo Drive, parent/guardian monitored, webcam identity checks, laptop or desktop only. **Two attempts maximum**; fail both and you must attend a service center. 80% to pass. | WisDOT knowledge-tests page; WisDOT news release 2025-03-20 |
| Retest wait | "no sooner than the next day" | WisDOT knowledge-tests page |
| Attempt cap | **Five attempts at the same test in a one-year period**, then DMV staff permission is required | WisDOT knowledge-tests page |
| Early-stop rule | **None found.** No official source says the test ends once you can no longer pass, so nothing of the sort is claimed in the bank. | - |
| Other permit prerequisites | Vision screening (20/40 acuity in one eye, 70-degree field from the centre of each eye); under 18 also at least 15 years old and enrolled in driver education including the behind-the-wheel portion; adult sponsor's signature | Handbook Sections 1.A, 2.A, 2.B |

`officialTest.sectionedBy` is **not** set. Wisconsin's signs test is a *separate
test*, not a scored half of the 50-question paper, so the Ontario-style sectioned
model does not apply. The separateness is carried in `officialTest.notes` instead.

---

## 3. Section and page map (Wisconsin Motorists' Handbook 2026, BDS126)

Printed page numbers. The PDF is offset by four - printed page 1 is PDF page 5,
which is what the `hb()` helper in the set files encodes.

| Section | Contents | Printed pages |
|---|---|---|
| 1 | Driving Test Requirements: A Vision Screening, B Highway Signs Test, C Knowledge Test, D Skills Test | 1-2 |
| 2 | Progression of Licenses: A Sponsorship, B Instruction Permit, C Probationary License, D Regular Driver License, E Out of State Transfers, F REAL ID | 3-8 |
| 3 | The Basics: A Right-Of-Way (9), B Understanding Vehicle Speed (10), C Intersections (11), D Stopping (12), E Sight Distance Rule (12), F Space Between Vehicles (12), G Turning (14), H Passing (17), I Backing (18), J Parking (18), K Communication (20) | 9-21 |
| 4 | Signs: A Warning (22), B Regulatory (24), C Construction (26), D Destination (27), E Service (28), F Mile Marker (28), G Route Number (29), H Railroad Crossing (30) | 22-31 |
| 5 | Signals, Pavement Markings and Lane Controls: A Traffic Signals (32), B Types of Line Markings (34), C Special Lanes (36) | 32-38 |
| 6 | Driving Situations: A Roundabouts (39), B Metered Ramps (41), C Diverging Diamond Interchange (42), D Traffic Stops (42), E Watch for Deer (43), F Funeral Processions (43) | 39-43 |
| 7 | Driving Conditions: A Reduced Visibility (44), B Severe Weather (44), C Winter (45), D Farm Safety/Rural Driving (45) | 44-45 |
| 8 | Handling Emergencies: A Avoiding Crashes (46), B Crashes (47), C Roadside Emergencies (48) | 46-48 |
| 9 | Dangerous Driving Behaviors: A Alcohol, Drugs and Driving (49), B Distracted Driving (49), C Drowsy Driving (50) | 49-50 |
| 10 | Sharing the Road: A Pedestrians, B Emergency Vehicles, C School Buses, D Motorcycles (51), E Bicycles, F No-Zones (52) | 51-52 |
| 11 | Your Driving Privilege: A Point System, B Habitual Traffic Offender, C Occupational License, D Reinstating | 53 |
| 12 | Other Important Information: A Accessibility, B Medical Conditions, C ID Card for Voting, D Seat Belts (54-55), E Insurance, F Save Fuel, G Driver Education Grant, H Organ Donation | 54-55 |
| 13 | Website Page Links | 56-57 |
| 14 | Practice Quiz: A Questions (58), B Answers (60) | 58-60 |

Note on Section 14: the handbook contains a twelve-question practice quiz. **None
of its questions, options or phrasings were reused.** It was read only to confirm
which rules WisDOT considers worth testing (the outlying-district 35 mph figure,
the school-bus stop, the 10-to-15-second look-ahead, low beams in fog).

---

## 4. What the handbook does not say

The handbook is short and written for a 15-year-old. These are the numbers the
test can still reach that the book never prints, with the statute that supplies
them.

| Missing from the handbook | Actual rule | Statute |
|---|---|---|
| Any parking distance at all (it says only "yellow markings on the curb or areas in front of fire hydrants") | 10 ft from a fire hydrant | 346.53(3) |
| " | 4 ft from an alley, private road or driveway entrance | 346.53(4) |
| " | 15 ft from the near limits of a crosswalk | 346.53(5) |
| Any stopping prohibition | Within an intersection; on a crosswalk; on a sidewalk; 15 ft from a fire-station driveway or directly opposite it; 25 ft from the nearest rail at a railroad crossing; on the roadway side of a parked vehicle | 346.52(1) |
| Parallel-parking geometry | Wheels within 12 inches of the kerb; at least 2 ft clear front and rear; headed in the direction of traffic on the right side | 346.54(1)(a), (d) |
| Left-side parking | Prohibited except on a one-way or divided street where signs authorise it | 346.55(1) |
| Rural speed default | 55 mph in the absence of any other fixed or posted limit | 346.57(4)(h) |
| Expressway maximum | 65 mph | 346.57(4)(gm)1. |
| Freeway maximum | 70 mph | 346.57(4)(gm)2. |
| Alley speed | 15 mph | 346.57(4)(d) |
| City/village default | 25 mph outside an outlying district | 346.57(4)(e) |
| What "outlying district" means (the handbook uses the phrase and never defines it) | Buildings in use averaging more than 200 ft apart over any 1,000 ft stretch, inside a city or village | 346.57(1)(ar) |
| Minimum-speed offence | Driving so slowly as to impede the normal and reasonable movement of traffic | 346.59(1) |
| Signal distance as a legal rule (the handbook gives "about three seconds (about 100 feet)") | Not less than the last 100 ft for a vehicle; 50 ft for a bicycle, electric scooter or EPAMD | 346.34(1)(b) |
| Right-of-way forfeiture by a speeding driver | A driver at an unlawful speed forfeits the right of way they would otherwise have | 346.18(1) |
| Roundabout yield to oversized vehicles (the handbook says only "yield to semitrucks") | Yield to any vehicle or combination at least 40 ft long or 10 ft wide; if two such vehicles meet, the one on the right yields to the one on the left | 346.18(8)(a), (b) |
| Dead-red rule | A motorcycle, moped, motor bicycle or bicycle may proceed through a red after stopping at least 45 seconds at a vehicle-actuated signal with no other vehicle present | 346.37(1)(c)4. |
| Dual right-turn lanes on red | From the leftmost of two right-turn lanes you may turn on red into the second-from-right lane | 346.37(1)(c)3. |
| Move-over law's terms (the handbook gives one sentence) | Triggered by an emergency, roadside-service **or disabled** vehicle on or within 12 ft of the roadway; move over where a safe lane change exists, otherwise slow down until completely past; violation carries an operating-privilege suspension | 346.072(1m), history to 2025 a. 54 |
| Snowplough distance below 35 mph (the handbook prints only 200 ft) | 75 ft where the posted limit is 35 mph or less; 20 ft when the plough is stopped at an intersection | 346.915(2)(a), (3) |
| Fire-station stop | 30 ft from an emergency vehicle backing into a fire station under signal | 346.455(1) |
| Adult BAC threshold | 0.08 (and 0.02 after three or more prior OWI convictions) | WisDOT "Drunk driving law" page; the statutory definition of "prohibited alcohol concentration" is in ch. 340, which was **not** among the chapters downloaded - see section 5 |
| Underage threshold framed as an offence range | More than 0.0 but not more than 0.08 | 346.63(2m) |
| Open-container rules | Drinking in a vehicle on a highway prohibited; opened containers must ride in the trunk, and a glove or utility compartment counts as occupied space | 346.935(1)-(3) |
| School-crossing 15 mph triggers | Any child present, **or** a crossing guard in the crosswalk, **or** a guard placing or removing a sign or device | 346.57(4)(b) |

---

## 5. Conflicts and things not resolved

**a. Headlights and windscreen wipers - handbook vs. the wider law.**
The handbook, Section 3.K (printed page 21), lists two *compulsory* headlight
triggers - being unable to see a vehicle or person 500 ft away, and the half hour
after sunset to the half hour before sunrise - and then lists using the wipers and
rainy/snowy/foggy weather under a separate heading, "It is recommended that you
use your low beams/headlights when". Several neighbouring states make the
wipers-headlights link mandatory, and Wisconsin's lighting requirements sit in
**chapter 347**, which was not among the chapters downloaded for this bank. I did
not verify chapter 347's text. **Resolution:** no question asserts that wipers
compel headlights. `wi_s1_10` is built on the two triggers the handbook states as
compulsory, and `wi_s5_20` tests the handbook's own recommended/required split
explicitly, notes in its context that the answer is unaffected in practice
(weather bad enough for wipers almost always defeats the 500-foot rule), and says
in terms that this is the handbook's characterisation. If chapter 347 is later
read and does compel headlights with wipers, `wi_s5_20` is the item to revisit.

**b. Adult 0.08 threshold not quotable from the downloaded sources.**
Section 346.63(1)(b) makes it an offence to drive with "a prohibited alcohol
concentration", and the numeric definition of that phrase lives in s. 340.01(46m),
in a chapter that was not downloaded. **Resolution:** `wi_s4_05` and `wi_s5_32`
cite WisDOT's own "Drunk driving law" page (which states 0.08, and 0.02 after
three or more priors) as `sourceUrl`, and carry the excerpt key
`st-absolute-sobriety`, which is the under-21 provision that *is* quotable. No
excerpt in `excerpts.ts` claims to quote the 0.08 figure.

**c. Statute text encoding.**
Parts of `tmp/wisconsin-statute.txt` contain mojibake where curly quotation marks
and apostrophes were mis-decoded (for example s. 346.072's definitions, s.
346.18(3m), s. 343.085(2m), and every case annotation). Those passages are
readable but not quotable. **Resolution:** no excerpt was taken from a line
containing a replacement character. The rules in those passages are still used in
questions, sourced to the clean portions of the same sections or to the handbook.

**d. Commercial study sites contradict WisDOT on retakes.**
At least one prep site states that Wisconsin caps neither the number of attempts
nor the time. WisDOT's own knowledge-tests page states the five-attempts-per-year
cap and the next-day wait. **Resolution:** WisDOT wins; `wi_s5_16` is written on
WisDOT's figures and the trap note says so.

**e. The 2025 move-over amendment.**
The section history of s. 346.072 in the downloaded statute text reads
"2001 a. 15; 2013 a. 291; 2023 a. 155; 2025 a. 54; s. 35.17 correction in
(1g) (am) (intro.)", and the fetched text includes the "disabled vehicle"
definition at (1g)(am). The extension to ordinary disabled vehicles is therefore
confirmed in the statute I hold, not merely in WisDOT's summary. `wi_s5_15` is
built on it. The 2026 handbook has **not** caught up - Section 10.B still frames
the duty around emergency vehicles only. Per the playbook, the question follows
the law and this note records the lag.

---

## 6. What learners report

**Reddit was not reachable.** A dedicated research pass was run against
`reddit.com` and `old.reddit.com` and both were refused by the fetcher; search
with `reddit.com` in `allowed_domains` returned a hard error from the search
backend, and five `site:reddit.com` queries returned zero Reddit links. Quora
returned 403. **No first-person learner reports were obtained, and none are
invented here.** The forum half of playbook section 3 is therefore a genuine gap
in this bank, and it should be re-run when Reddit is reachable.

What was obtained instead, all official or press, paraphrased in one line each:

| Source | Title | Year | Paraphrase | Question ids shaped |
|---|---|---|---|---|
| Wisconsin State Patrol, "Law of the Month" (via WisPolitics) | Flashing yellow arrow means yield before turning left | 2021 | The State Patrol devoted a public-education month to explaining that a flashing yellow arrow is not a protected turn - which is the strongest available evidence that Wisconsin drivers routinely misread it. Corroborated by WisDOT's own flashing-yellow-arrow explainer page. **Two independent sources.** | `wi_s2_08`, `wi_s5_07` |
| Axley LLP (Wisconsin law firm), "Roundabout Trap" | Commentary on s. 346.18(8) / 2015 Act 139 | - | Wisconsin uniquely requires ordinary vehicles to yield to vehicles over 40 ft long or 10 ft wide at a roundabout, and arriving first does not settle it. Corroborated independently by WisDOT's truck-law material and by trucking-press coverage of a State Patrol clarification. **Three sources, one of them official.** | `wi_s3_02`, `wi_s5_01`, `wi_s5_22` |
| WisDOT | Move Over Law page | 2025 | The duty now covers ordinary disabled vehicles as well as emergency and service vehicles, following 2025 Wisconsin Act 54. Verified against s. 346.072 directly. | `wi_s3_06`, `wi_s4_20`, `wi_s5_15` |
| WisDOT | Graduated Driver License FAQs | - | The permit supervision rule carries three different ages - 19, 21 and 25 - and only the 25 applies after dark; the midnight-to-5 a.m. restriction is about destination rather than company. | `wi_s2_20`, `wi_s3_08`, `wi_s4_13`, `wi_s5_08` |
| WisDOT | News release, online knowledge test | 2025 | DMV administers over 4,000 Class D knowledge tests a month, and the at-home option requires 80% and allows two attempts. | `officialTest.notes`, `wi_s5_16` |
| Spectrum News 1 / TMJ4 | Road tests resume | 2023-2024 | The pandemic-era road-test waiver ended 31 December 2023 and in-person skills tests resumed 1 January 2024, after 144,082 waivers. **Two independent outlets.** Affects the licensing pathway, not the knowledge test; no question is built on it. | - |
| The Badger Project | Hands-free driving laws | 2025 | As of mid-2025 Wisconsin still had no general hands-free law; texting is banned for everyone, all phone use is banned for permit and probationary holders, and hands-free is required in work zones. Verified against s. 346.89(4)(a) for the permit/probationary ban and the handbook Section 4.C for the work-zone rule. | `wi_s1_30`, `wi_s4_25` |
| driving-tests.org | Wisconsin written test page | - | Reports a 48% pass rate on **its own practice tool**, not DMV data. **Not used anywhere**, and it must not be repeated as a Wisconsin failure rate. | - |
| roadreadyresources.com | Wisconsin permit test page | - | Claims no time limit and no cap on attempts, which contradicts WisDOT's own page. Treated as unreliable. | `wi_s5_16` trap note |

Because no forum evidence was available, the `commonlyMissed` flags (35 of 195,
18%) were chosen from a different basis, stated plainly here: (a) rules the
handbook itself emphasises or repeats, (b) numbers that differ from the
neighbouring states a Wisconsin learner is most likely to have absorbed from
generic study material (four-second following distance, not three; 10-foot
hydrant, not 15; 15 mph school zone, not 20 or 25), and (c) the statutory rules
that appear nowhere in the handbook and therefore cannot be revised for by
reading it.

---

## 7. Local gotchas

The five in `localGotchas`, and why each catches people.

1. **The 40-foot roundabout yield.** Wisconsin makes an ordinary driver yield to
   any vehicle at least 40 ft long or 10 ft wide at a roundabout, even one that
   arrived later, and reverses the right-hand tie-breaker when two such vehicles
   meet. Every instinct a learner brings from four-way stops points the other
   way, and the rule exists in almost no other state.
2. **School bus, 20 feet, both directions, one escape.** The distance is smaller
   than most states' and the exception is narrower: a *physical barrier*, with the
   bus on the far side. Four lanes, a painted median or a centre turn lane do
   nothing, which is exactly the situation drivers assume releases them.
3. **Wisconsin's parking numbers are its own.** 10 ft from a hydrant (not the 15
   most states use), 15 ft from a crosswalk, 4 ft from a driveway, 25 ft from the
   nearest rail. The handbook prints none of them, so anyone revising only from
   the book will guess - and most people guess high on the driveway and low on the
   crosswalk.
4. **Flashing yellow arrow.** It is permission to turn *after yielding*, while
   oncoming traffic has a green. Any arrow reads as a dedicated phase, and the
   State Patrol has run public education on this specific misreading.
5. **Absolute sobriety under 21.** The 0.08 figure is so widely known that it gets
   applied to everybody. For a driver under 21 the permitted concentration is
   zero, and a permit carries its own absolute-sobriety condition on top.

---

## 8. Verification

All run 2026-09-06 from the repository root.

```
$ npx tsx scripts/extract-quotes.mjs wisconsin
tmp/wisconsin-quotes.json: 190 quotes

$ python scripts/verify-excerpts.py wisconsin tmp/wisconsin-handbook.pdf tmp/wisconsin-statute.txt
wisconsin: 190/190 quotes verified verbatim against 2 source(s)

$ python scripts/build-excerpt-snippets.py wisconsin tmp/wisconsin-handbook.pdf
wisconsin: 147 snippets rendered, 43 not located

$ npx tsx scripts/validate-driving.mjs --only wisconsin
=== Wisconsin (WI) - 6 sets ===
  snippets: 147 in manifest, 147/190 excerpts covered (77%)
  quotes verified: 190/190 verbatim against wisconsin-handbook.pdf, wisconsin-statute.txt
  excerpts: 190 (38 unused), questions wired: 195/195 (100%), quoted total: 27.9k chars
  questions: 195
  answer positions: A:22% B:26% C:28% D:25%
  context: 100%  source links: 100%  starred: 18%
  topics: rules:28 sharing:21 safety:21 licensing:19 rightOfWay:18 signs:17
          signals:16 speed:15 emergencies:14 impairment:13 parking:13
ERRORS: 0   WARNINGS: 0

$ npx tsc --noEmit -p .
(clean)
```

**On the 43 unrendered snippets.** Forty of them are statute quotes, which cannot
be located in the handbook PDF and are expected to MISS. The remaining three -
`drowsy-signs`, `roundabout-steps` and `skid-steps` - are handbook quotes that run
a stem together with a bulleted list, and the bullet glyphs defeat the snippet
builder's PDF text search even though `verify-excerpts.py` matches them
after normalisation. Handbook-quote coverage is therefore 147 of 150 (98%).

Three rendered PNGs were opened and inspected rather than assumed:
`schoolbus-20-feet.png`, `speed-residential-25.png` and
`lines-double-yellow-exception.png`. All three are tight crops with the quoted
passage highlighted, no clipped first letters, and enough surrounding lines to
locate the passage in the book.
