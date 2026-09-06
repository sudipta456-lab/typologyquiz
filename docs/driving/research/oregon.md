# Oregon driving bank - research note

Bank built and every fact checked on **2026-09-06** (`contentDate`). Slug
`oregon`, code `OR`, 195 questions in six sets, 387 handbook and statute
excerpts, 345 rendered snippet images.

---

## 1. Sources read

| Source | Publisher | Edition label | URL | Fetched | How |
|---|---|---|---|---|---|
| Oregon Driver Manual | Oregon Department of Transportation, Driver and Motor Vehicle Services | "2026-2027 Oregon Driver Manual", form 735-37 | https://www.oregon.gov/odot/Forms/DMV/37.pdf | 2026-09-06 | Direct PDF download to `tmp/oregon-handbook.pdf` (112 printed pages, 120 PDF pages) |
| Oregon Revised Statutes chapter 807 - Driver Licenses; Driver Permits; Identification Cards | Oregon Legislature | ORS 2025 edition as published online | https://www.oregonlegislature.gov/bills_laws/ors/ors807.html | 2026-09-06 | Direct, visible text saved to `tmp/oregon-statute-807.txt` |
| Oregon Revised Statutes chapter 811 - Rules of the Road for Drivers | Oregon Legislature | ORS 2025 edition as published online | https://www.oregonlegislature.gov/bills_laws/ors/ors811.html | 2026-09-06 | Direct, saved to `tmp/oregon-statute-811.txt` |
| Oregon Revised Statutes chapter 813 - Driving Under the Influence of Intoxicants | Oregon Legislature | ORS 2025 edition as published online | https://www.oregonlegislature.gov/bills_laws/ors/ors813.html | 2026-09-06 | Direct, saved to `tmp/oregon-statute-813.txt` |
| Oregon DMV teen permit page | Oregon DMV | undated web page | https://www.oregon.gov/odot/dmv/teen/pages/permit.aspx | 2026-09-06 | Direct; used for `officialInfoUrl` only, nothing is quoted from it |

Nothing was taken from a practice-test site, an aggregator PDF or a forum.
Every excerpt in `excerpts.ts` was located mechanically in one of the four
fetched files above and checked as an exact substring before it was written.

The manual states of itself that it "condenses and paraphrases selected
language in the Oregon Revised Statutes" and "is not a source of law". That is
the reason the statute is a second source rather than a fallback.

---

## 2. Test format

Everything below is from the manual's own Testing section, printed pages 1 to 3
(PDF pages 9 to 11), which is where DMV publishes the format.

| Item | Value | Where it came from |
|---|---|---|
| Questions | 35, multiple choice | Manual, Knowledge Tests, page 2 |
| Pass mark | 28 correct (80 percent) | Manual, page 2: "You must answer 28 questions correctly to receive a passing score." |
| Content | Road signs, traffic laws, "and other information a driver needs to know" | Manual, page 2 |
| Time limit | None stated. Offices stop giving the test one hour before closing | Manual, page 2 |
| Retest after a failure | Same day, subject to office testing resource availability | Manual, page 2 |
| Online option | DMV2U, laptop or desktop with keyboard, mouse and webcam. Not a phone or tablet. Photographed at start and at random | Manual, page 3 |
| Online attempts | Two per 24 hours, four total, then you must test at an office | Manual, page 3 |
| Online proctor | Required for under 18, must be over 21, may supervise only two tests per 24 hours | Manual, page 3 |
| Languages | Eight in office, English or Spanish online | Manual, page 2 |
| Fee | 7 dollars per attempt | Manual, page 2 |
| Cheating | Fail, plus no testing for 90 days. Talking, notes, phone, any electronic device, or someone else testing for you | Manual, page 2 |

There is no sectioned scoring, so `officialTest.sectionedBy` is not set.

---

## 3. Section and page map

The manual's own table of contents, with printed page numbers. The PDF runs
eight pages ahead of the printed numbering (printed page 1 is PDF page 9), which
is what the `hb()` helper in the set files converts.

```
Testing
  Vision Test ........................................... 1
  Knowledge Tests ....................................... 2
  Drive Test ............................................ 3
Signs & Traffic Signals ................................. 7
  Signs ................................................. 7
  Traffic Signals ...................................... 15
Lane Travel ............................................ 18
  Speed Regulations .................................... 19
  Pavement Markings .................................... 22
  Maintaining a Space Cushion .......................... 26
  Curves ............................................... 30
  Changing Lanes ....................................... 30
  Passing .............................................. 31
  No Passing ........................................... 32
  Freeway Driving ...................................... 34
  Driving a Large Vehicle or Towing .................... 35
Turns & Intersections .................................. 38
  Turn Signals ......................................... 38
  Turns ................................................ 39
  Intersections ........................................ 42
  Roundabouts .......................................... 43
Sharing the Road ....................................... 46
  Pedestrians .......................................... 46
  School Zones ......................................... 49
  Bicycles ............................................. 50
  Motorcycles and Mopeds ............................... 52
  Large Vehicles ....................................... 53
  School, Places of Worship or Worker and
    Public Transit Buses ............................... 55
  Other Vehicles ....................................... 56
  Approaching Stopped Vehicles ......................... 57
  Emergency Vehicles ................................... 58
  Police Stops ......................................... 58
  Work Zones ........................................... 59
Railroad Crossings, Light Rail & Street Cars ........... 63
Parking & Stopping ..................................... 68
Safe & Responsible Driving ............................. 73
  Defensive Driving .................................... 73
  Safety Belts ......................................... 73
  Communicating With Other Drivers ..................... 74
  Avoiding a Collision ................................. 74
  Hazardous Conditions ................................. 76
  Dangerous Driving Behaviors .......................... 80
  Vehicle Equipment Failures ........................... 84
  Fuel Saving Techniques ............................... 86
Other Important Information
  How to Apply ......................................... 89
  Additional Services .................................. 92
  Mandatory Insurance .................................. 93
  Traffic Collisions ................................... 93
  Loss of Driving Privileges ........................... 95
```

---

## 4. What the handbook does not say

Oregon's manual is unusually complete: unlike most state books it prints the
statutory speed defaults, a full no-parking distance list and exact pedestrian
clearance figures. Five things a learner is still asked about are missing from
it, and each is taken from the statute instead.

| Missing from the manual | Statute that supplies it | Used in |
|---|---|---|
| Any interstate speed limit. The manual says only "Speed Limits will vary on interstate highways." | ORS 811.111 - 65 mph on an interstate highway | `or_s3_07`, excerpt `ors-interstate-65` |
| The provisional license passenger restriction | ORS 807.122 - first six months, no passenger under 20 outside immediate family; second six months, no more than three | `or_s3_15`, excerpts `ors-provisional-passengers`, `ors-provisional-second-six` |
| The provisional license night restriction and its exceptions | ORS 807.122 - first year, no driving midnight to 5 a.m. except work, school events with no other transport, employment purposes, or with a licensed driver 25 or older | `or_s5_17`, excerpts `ors-provisional-night`, `ors-provisional-night-exceptions`, `ors-provisional-night-25` |
| The term of an instruction permit and the supervising driver's seat position | ORS 807.280 - 24 months; the accompanying person must occupy the seat beside the permit holder | `or_s5_04`, excerpts `ors-permit-24-months`, `ors-permit-seat-beside` |
| What refusing or failing a breath test costs | ORS 813.095 - 650 dollar presumptive fine for refusal; ORS 813.420 - one year for refusal, 90 days for a failed test | `or_s3_12`, `or_s5_07`, excerpts `ors-refusal-fine`, `ors-refusal-one-year`, `ors-fail-test-90-days` |
| The speeding violation classes and the 100 mph fine | ORS 811.109 - Class D through Class A by band; 1,150 dollar presumptive fine at 100 mph or more | `or_s3_19`, `or_s5_31`, excerpts `ors-speed-penalties`, `ors-100-mph` |

---

## 5. Conflicts, and how each was resolved

**Supervised driving hours: 100/50 versus 50.** The manual (page 90) requires
"100 hours of supervised driving experience or 50 hours ... and have taken an
ODOT-approved traffic safety education course". ORS 807.065 states the 50-hour
figure on its own, within the paragraph list of license requirements. The two
readings agree on one thing: 50 hours plus the approved course satisfies the
requirement. Both questions on this (`or_s2_24`, and the context block on
`or_s4_27`) are written on that combination, so neither reading changes the
answer. Nothing in the bank turns on the 50-hour figure standing alone.

**The left turn on red.** Not a source conflict but a conflict between the
sources and common belief, and worth recording because it changed the
`localGotchas` text. The manual, Traffic Signals page 15 and Turns page 40,
allows a left on red whenever the road you are ENTERING is one-way, so it is
lawful from a two-way street as well as from another one-way street; what is
never lawful is a left on red onto a two-way road. An earlier draft of the
gotcha line described only the one-way-to-one-way case, which is how most
states write it, and understated Oregon's rule. Corrected. Questions:
`or_s1_02`, `or_s3_03`, `or_s5_08`, `or_s6_06`, `or_s6_14`.

**"The left lane is for passing."** Multiple forum threads assert this as
Oregon law. It is not in the manual and no ORS section was found stating it.
What Oregon does state is that a driver going slower than the normal speed of
traffic must use the right lane (page 21) and must pull off at the first safe
area when congestion builds behind them (page 21). One thread quoted
ORS 811.425, failure of a slower driver to yield to an overtaking vehicle,
which is framed around a two-lane highway and the basic-rule speed, not around
lane ownership. The bank follows the manual: `or_s5_02` and `or_s4_09` are
written about speed relative to traffic, and the forum belief is named as the
trap rather than treated as the rule.

**No conflict found** between the manual and the statute on speeds, parking
distances, pedestrian rules, school zones, school buses or DUII thresholds.
Each of those was checked in both sources.

---

## 6. What learners report

60 threads were fetched with `scripts/fetch-reddit.py` and saved to
`tmp/oregon-reddit-*.txt`. All 60 were surveyed by subreddit and title; 19 were
read in full. The rest are about titles, registration, REAL ID, CDLs, dealer
paperwork, driver-ed recommendations, or three threads that turned out to be
r/portlandme (Portland, Maine) rather than Oregon, and carry no knowledge-test
signal.

Nothing below is quoted. Each line is a paraphrase of what a thread's
participants collectively claimed, and every rule that came out of one was
verified against the manual or the statute before any question was written. No
question anyone recalled from a real exam was reproduced, and none was used as
a model; where a thread mentioned a remembered item, only the underlying RULE
was taken and the question written fresh from the manual.

**Threads read in full and what they shaped**

| Sub | Title (abridged) | Year | Paraphrase | Question ids shaped |
|---|---|---|---|---|
| r/oregon | What's the speed limit on Oregon backroads without posted speeds? | undated in capture | Nobody in the thread was sure; the consensus answer settled on 55, and one reply pointed at the manual for being the obvious place to look | `or_s5_01`, `or_s1_05` |
| r/oregon | Out of state license transfer - knowledge test required? | thread text references a 2021 legislative session and COVID office closures | Transfers do require the knowledge test; commenters warn that Oregon has material other states do not, naming traffic circles and green bicycle boxes, and that the test asks for exact numbers and for where U-turns are legal, "almost nowhere" | `or_s3_04`, `or_s3_05`, `or_s3_28`, `or_s5_14`, `or_s5_26`, `or_s5_03`, `or_s5_09` |
| r/oregon | Question about getting your license | undated in capture | A commenter describes the Oregon test as catching people who did not study, with trick questions and detail questions such as fine amounts; the original poster asks about the 50-hour log | `or_s5_31`, `or_s2_27`, `or_s2_24` |
| r/driving | Oregon 6 month passenger restriction - how would an officer know? | undated in capture | Provisional holders are unclear about the scope of the passenger rule and describe it as immediate family only for six months | `or_s3_15` |
| r/oregon | Getting an OR driver's license | undated in capture | Contains the claim that a left turn on a red light from a two-way onto a one-way street is legal in Oregon and widely unknown; this is confirmed by the manual | `or_s5_08`, `or_s3_03` |
| r/oregon | Bad Drivers | undated in capture | A long argument about whether the left lane is legally a passing lane in Oregon; one participant posts ORS 811.425, and the thread does not reach agreement | `or_s5_02`, `or_s4_09` |
| r/driving | Oregon highway driving | undated in capture | A visitor describes Oregon drivers slowing on two-lane stretches and speeding up where passing lanes appear; no legal claim survives, but it points at the slower-driver duty | `or_s5_02` |
| r/teenagers | Taking notes for my permit test - any advice to pass? | undated in capture | One commenter failed on a bicycle question and reports having to relearn that bicycles have full access to the road; several stress reading questions carefully because they are worded to trip you | `or_s1_19`, `or_s5_05`, `or_s6_26` |
| r/Portland | Need help on how to study for permit test | thread text references a 2019 pass | Several report failing on a first attempt; one says the Oregon test is trickier than other states' and advises understanding why a wrong answer is wrong | set 5 framing generally |
| r/teenagers | Why the hell do they make these permit tests so difficult? | undated in capture | Recurring surprise at questions on skidding technique and on white-cane pedestrians rather than on signs | `or_s3_09`, `or_s3_18` |
| r/oregon | Has anyone taken the DMV knowledge test online? | undated in capture | Online passes are visible to DMV without paperwork; commenters warn the webcam flags face-touching and background clutter as suspected cheating | `or_s4_14`, `or_s5_28` |
| r/DMV | Oregon Permit Test | undated in capture | A retaker asking which questions trip people up; no substantive answers in the thread | none |
| r/Eugene | What are the white traffic lights? | undated in capture | Confusion about transit-only signals in dedicated bus lanes; the original poster notes they had just passed the DMV test and had never seen them covered | `or_s4_23` |
| r/driving | Who has priority? Who should yield? | undated in capture | An argument about which lane a right-turning driver may finish in, and about a driver crossing lanes mid-turn; the majority position matches Oregon's nearest-lane-to-nearest-lane rule | `or_s2_01` |
| r/oregon | Drivers License Test Required? | undated in capture | Returning residents report having to retake the knowledge test after holding another state's license | `or_s6_28` context |
| r/oregon | Do adult new drivers need a learner's permit? | undated in capture | Adults confirm the permit is required at any age, with no waiting period before the drive test | `or_s6_11`, `or_s5_04` |
| r/oregon | Help to practice for license | undated in capture | Discussion of whether driver education is worth it; commenters note an ODOT-approved course can waive the drive test | `or_s6_28`, `or_s2_24` |
| r/teenagers | Permit test advice | undated in capture | General nerves and study advice, no Oregon-specific rule content | none |
| r/SALEM | Permit test | 2020 by content (offices closed) | Entirely about pandemic office closures | none |

**The three strongest traps that came out of this**

1. **Bike lanes and turns.** Several states require a driver to merge into the
   bike lane before a right turn. Oregon forbids it by name (page 50: "Do not
   move into or travel in a bike lane in preparation for a turn"). Drivers
   arriving from elsewhere fail on it, and it is the rule most often named in
   the transfer threads. `or_s5_05`, `or_s1_19`, `or_s6_26`.
2. **Dollar figures.** Oregon's test is described repeatedly as asking for
   exact numbers including fine amounts, which is unusual. The manual and the
   statute together supply four that a learner can be asked for: 165 to 1,000
   dollars for disabled parking, 650 for refusing a test, 1,150 at 100 mph, and
   doubled fines in a work zone. `or_s2_27`, `or_s3_12`, `or_s5_31`,
   `or_s2_20`.
3. **Left on red.** The rule turns on the road you enter, not the road you
   leave, which is wider than the version most drivers carry. `or_s5_08`.

---

## 7. Local gotchas

The six lines in `localGotchas`, and why each catches people.

1. **Following distance is 2 to 4 seconds, 4 or more above 30 mph** (page 26).
   Almost every other state teaches a flat three seconds, so a learner who has
   used another state's app answers three and is wrong twice over: the figure
   is a range, and above 30 mph it is larger than three.
2. **Stop for a pedestrian in your lane, the lane next to yours, or the lane
   you are turning into; six feet of clearance at a signalled intersection**
   (pages 46 to 47). Most states require you to stop only for a pedestrian in
   your half of the road. Oregon's rule is wider and carries an exact number,
   and the number changes at an unsignalled intersection to a whole extra lane.
3. **A painted median or a center turn lane does not divide a road** (page 55).
   With a school bus flashing red across one, every lane in both directions
   stops. Only an unpaved median or a barrier releases the far side, which
   ORS 811.155 words as the bus being stopped "on a different roadway".
4. **The manual gives no interstate speed limit** (page 19). Learners look for
   it, do not find it, and guess the 55 mph general default. The statutory
   figure is 65, with higher posted stretches.
5. **Left on red depends on the road you enter** (pages 15 and 40). Legal onto
   any one-way road after stopping, from a two-way street as well as from a
   one-way street; never legal onto a two-way road.
6. **Under 18, no phone at all** (page 80). Hands-free is a concession for
   drivers 18 and older only, and the 21 threshold people remember belongs to
   alcohol, not to phones.

---

## 8. Verification

Quote extraction, verbatim verification and validation were re-run on
**2026-09-06** against the tree as delivered. Output pasted as printed.

```
$ npx tsx scripts/extract-quotes.mjs oregon
tmp/oregon-quotes.json: 387 quotes

$ python scripts/verify-excerpts.py oregon tmp/oregon-handbook.pdf \
      tmp/oregon-statute-807.txt tmp/oregon-statute-811.txt tmp/oregon-statute-813.txt
oregon: 387/387 quotes verified verbatim against 4 source(s)

$ npx tsx scripts/validate-driving.mjs --only oregon
=== Oregon (OR) - 6 sets ===
  snippets: 345 in manifest, 345/387 excerpts covered (89%)
  quotes verified: 387/387 verbatim against oregon-handbook.pdf,
    oregon-statute-807.txt, oregon-statute-811.txt, oregon-statute-813.txt
    (2026-09-06T12:39:15-06:00)
  excerpts: 387 (193 unused), questions wired: 195/195 (100%),
    quoted total: 63.6k chars
  questions: 195
  answer positions: A:23% B:25% C:29% D:24%
  context: 100%  source links: 100%  starred: 19%
  topics: rules:29 sharing:22 safety:22 signs:21 signals:17 speed:16
    parking:16 rightOfWay:15 licensing:13 emergencies:13 impairment:11
ERRORS: 0   WARNINGS: 0

$ npx tsc --noEmit -p .
(no errors in src/lib/driving/oregon; the only errors in the repo at this
 point are in src/lib/driving/louisiana/excerpts.ts, another bank being
 built in parallel, which this bank does not touch)
```

The snippet images were rendered by `scripts/build-excerpt-snippets.py` before
this session's question-writing pass and were NOT re-run here, because no quote
was added, removed or edited. The validator independently confirms the manifest:
345 entries, every referenced file present on disk, 89 percent of excerpts
covered. The 42 excerpts without an image are the 36 statute quotes, which are
not in the handbook PDF and cannot render from it, plus six handbook quotes the
renderer could not locate on a page.

Counts as delivered: 195 questions (30 / 30 / 35 / 35 / 35 / 30), 387 excerpts,
345 snippet images, 195 of 195 questions wired to a resolving `excerptKey`
(100 percent), context on 100 percent, source link on 100 percent, 38 starred
as commonly missed (19 percent). Answer positions A 23, B 25, C 29, D 24
percent.

## 9. Not verified

- **Thread years.** `scripts/fetch-reddit.py` does not capture a post date, and
  none of the saved files carries one. Years above are marked "undated in
  capture" except where a thread's own text dates itself, and those are labelled
  as inferred from content rather than recorded.
- **An early-stop rule on the knowledge test.** One commenter in the r/oregon
  transfer thread says the computer-based test ends as soon as you reach a
  passing score. Nothing on DMV's own pages or in the manual says this, so it is
  NOT in `officialTest.notes` and no question depends on it.
- **ORS edition label.** The Oregon Legislature publishes ORS chapters as web
  pages without a prominent edition stamp on the chapter itself. The excerpts
  cite the chapter and section, which is stable, rather than an edition year.
- **Posted 70 mph stretches.** The manual says interstate limits vary and the
  statute gives 65. The specific rural highways posted at 70 are set by ODOT
  speed-zone orders that were not fetched, so no question names a road; the
  70 mph figure appears only in a `localGotchas` line as context, and every
  question uses the statutory 65.
