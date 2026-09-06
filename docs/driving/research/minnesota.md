# Minnesota - research note

Bank slug `minnesota`. Content date 2026-09-06. Handbook edition: June 2026.

195 original questions across six sets, 326 verbatim handbook and statute
excerpts, 312 rendered snippet images.

## 1. Sources read

| Source | Publisher | Edition label | URL | Fetched | How |
|---|---|---|---|---|---|
| Minnesota Driver's Manual (Class D) | Minnesota Department of Public Safety, Driver and Vehicle Services (DVS) | June 2026 | https://assets.dps.mn.gov/files/dvs/dvs-class-d-drivers-manual-english.pdf | 2026-09-06 | Direct PDF download to `tmp/minnesota-handbook.pdf` |
| Class D Practice Knowledge Test | DVS | undated, 25 items plus answer key | https://assets.dps.mn.gov/files/dvs/dvs-class-d-practice-test.pdf | 2026-09-06 | Direct PDF download to `tmp/minnesota-practice-test.pdf` |
| Minnesota Statutes chapter 169 (Traffic Regulations), sections 169.14, 169.34, 169.475, 169.686 | Office of the Revisor of Statutes | 2026 statutes | https://www.revisor.mn.gov/statutes/cite/169.14 and sibling cites | 2026-09-06 | Direct, visible text saved to `tmp/minnesota-statute.txt` |
| Minnesota Statutes section 171.13 (Examination of applicants) | Office of the Revisor of Statutes | 2026 statutes | https://www.revisor.mn.gov/statutes/cite/171.13 | 2026-09-06 | Direct |
| Driver's license and ID card information | DVS | web page, undated | https://dps.mn.gov/divisions/dvs/pages/drivers-license-information.aspx | 2026-09-06 | Direct |
| Group Class D knowledge testing | DVS | web page, undated | https://dps.mn.gov/divisions/dvs/license-and-id/class-d-regular-dl/group-class-d-knowledge-testing | 2026-09-06 | Direct |

The manual is the primary source for the great majority of the bank. Chapter
169 supplies the numbers the manual leaves out. Section 171.13 is what makes
set 5 defensible, because it is the statute that says what the test must cover.

## 2. Test format

| Fact | Value | Where it came from |
|---|---|---|
| Pass mark | 80 percent | Manual, chapter 1, "The written test" (printed page 10, PDF page 13) |
| Question count | 40 (working figure) | NOT stated by DVS. Licensed Minnesota driver education programs publish 40; see the caveat below |
| Attempts per day | One written test per day | Manual, chapter 1, "The written test" |
| Retest fee | $10 for the third and any subsequent test after two consecutive failures | Manual, chapter 1, "The written test" |
| Format | Multiple choice and true-or-false, on paper or on a computer | Manual, chapter 1, "The written test" |
| Languages / accommodations | Offered in several languages; group oral exams available at some exam stations | DVS group knowledge testing page |
| Time limit | Not published by DVS | No official statement found; `timeLimitMinutes` is deliberately absent |
| Required subject matter | Traffic laws; alcohol and drug effects, penalties and financial consequences; railroad grade crossing safety; slow-moving vehicle safety; pupil transportation safety including school bus lights and stop arm; bicycle traffic laws; carbon monoxide poisoning; work zone and road construction safety | Minnesota Statutes 171.13, subd. 1(a)(3) |

**The 40-question figure is the weakest fact in this bank.** The manual gives
the pass mark and says nothing about how many questions produce it, and no DVS
page found on 2026-09-06 states a count. Forty is what Minnesota driver
education programs publish and what every practice site repeats, and 32 of 40
is a clean 80 percent, but it is not an official number. It is recorded in
`officialTest.notes` with that caveat attached rather than presented as
published.

## 3. Section and page map

Page anchors throughout the bank are **PDF pages**, which are the printed page
number plus three (cover, blank page and contents are unnumbered).

| Chapter | Printed pages | PDF pages |
|---|---|---|
| New laws and information | 1 | 4 |
| 1. Your license to drive | 6 - 19 | 9 - 22 |
| 2. Your vehicle | 22 - 24 | 25 - 27 |
| 3. Traffic laws and vehicle operation | 26 - 40 | 29 - 43 |
| 4. Sharing the road | 41 - 54 | 44 - 57 |
| 5. Signs, signals and pavement markings | 56 - 71 | 59 - 74 |
| 6. Driving conditions | 72 - 86 | 75 - 89 |
| 7. Your driving privileges | 88 - 90 | 91 - 93 |
| 8. Driving under the influence of alcohol or drugs | 91 - 96 | 94 - 99 |

## 4. What the handbook does not say

| Number the test can ask for | Manual | Supplied by |
|---|---|---|
| Freeway speed limits (70 mph outside urbanized areas over 50,000, 65 mph inside) | Prints only 10 mph alleys, 30 mph urban/town, 55 mph elsewhere | Minnesota Statutes 169.14, subd. 2 |
| Work zone speed adjustment to 45 mph on a road posted 50 mph or more when a lane is closed | Silent | Minnesota Statutes 169.14, subd. 5d |
| School zone speed bounds (not below 15 mph, not more than 30 mph below the established limit) | Silent | Minnesota Statutes 169.14, subd. 5a |
| That HOLDING a phone is itself the offense | Describes the messaging ban and the hands-free exception, never says holding is prohibited | Minnesota Statutes 169.475, subd. 2 |
| Hands-free fine on a second or subsequent violation ($275) | Silent | Minnesota Statutes 169.475, subd. 2 |
| Seat belt fine ($25 for a person 15 or older) | Silent | Minnesota Statutes 169.686, subd. 1 |
| Parking prohibited within a bicycle lane | Not in the manual's parking list | Minnesota Statutes 169.34, subd. 1(13) |
| Number of questions on the knowledge test | Silent | Nothing official; see section 2 |

## 5. Conflicts

No direct contradiction was found between the manual and chapter 169 on any
fact used in the bank. Two places needed care:

- **Cell phones.** The manual's cell phone section bans composing, reading and
  sending messages and permits "voice-activated or hands-free mode". Read alone
  it suggests the offense is messaging. The statute makes holding the device
  the offense. `mn_s5_12` is built on the statute and cites it, and the
  scenario chosen (reading a message while stopped in traffic) is one the
  manual independently lists among illegal behaviors, so both sources give the
  same answer.
- **Speed limits.** The manual's three defaults and the statute's freeway
  limits are not in conflict, but a learner reading only the manual would
  answer 55 mph for an interstate. Questions on interstate speeds cite the
  statute (`mn_s6_14`); questions on unposted urban streets cite the manual
  (`mn_s1_04`).

## 6. What learners report

**Reddit was unreachable from this build environment and no Reddit thread was
read.** Every attempt returned the same 185 KB block page: `www.reddit.com`
search JSON via curl with a browser user agent (three queries, all byte-for-byte
identical output), `old.reddit.com` via WebFetch (refused outright), and
WebSearch restricted to `reddit.com` (rejected: the domain is not accessible to
the search user agent). The three `tmp/reddit-minnesota_*.json` files a previous
builder left behind are that same block page under three names, not research;
their md5 sums are identical. Nothing in this bank is sourced from them.

Rather than substitute a practice-site listicle for forum evidence, set 5 was
built on two stronger official sources that answer the same question - what does
Minnesota actually test:

| Source | Type | Year | What it establishes | Question ids shaped |
|---|---|---|---|---|
| Minnesota Statutes 171.13, subd. 1(a)(3) | Statute | 2026 | The knowledge test **must** cover railroad grade crossing safety, slow-moving vehicle safety, pupil transportation safety including school bus lights and the stop arm, bicycle traffic laws, carbon monoxide poisoning, work zone and construction safety, and DWI penalties and financial consequences | mn_s5_02, mn_s5_03, mn_s5_04, mn_s5_05, mn_s5_06, mn_s5_07, mn_s5_10, mn_s5_17, mn_s5_18, mn_s5_20, mn_s5_28 |
| DVS Class D Practice Knowledge Test (25 items, each with a chapter pointer) | Licensing authority's own practice material | undated, current 2026-09-06 | Where DVS itself looks: reduced conflict intersections, right-hand lane travel, SIPDE scanning, stuck gas pedal, night visibility of pedestrians, highway parking lights, blind pedestrians, leaving a parallel space, fog and rain headlights, smoking as distraction, red arrow, teen passengers, conduct at a traffic stop, orange construction signs | mn_s5_01, mn_s6_02, mn_s6_03, mn_s6_06, mn_s6_07, mn_s6_11, mn_s6_25, mn_s6_30 |
| Manual, "New laws and information" (printed page 1) | Handbook | June 2026 | DVS's own front-page list of what it expects to be misunderstood, led by the school bus stop-arm rule | mn_s1_02, mn_s4_16, mn_s5_20 |

No question anywhere in the bank reproduces a live exam item, a practice-site
item, or anyone's recollection of a real test. The DVS practice test was used to
learn which RULES are probed; every question was then written from the manual.

The three strongest traps identified this way:

1. **The school bus stop arm is not the legal trigger.** The red lights are.
   DVS puts this on page one of the manual under new laws, which is the
   strongest possible signal that people get it wrong. (`mn_s5_20`, `mn_s4_16`)
2. **Reduced conflict intersections.** DVS's own practice test asks whether you
   may turn left at one, and the answer is no - ever. A driver who waits for a
   gap and crosses is doing the exact movement the layout was built to prevent.
   (`mn_s5_01`)
3. **Minnesota's distance numbers collide.** 10 feet from a rail when stopping,
   50 feet from a rail when parking, 20 feet from a school bus, 20 feet from a
   crosswalk, 30 feet from a stop sign, 10 feet from a hydrant, 100 feet to
   signal, 100 feet before an oncoming vehicle when returning from a pass, 700
   feet of sight distance to pass, 1,000 feet for low beams oncoming, 200 feet
   for low beams following, 350 feet of high beam reach, 500 feet behind a
   trailer. Each is in the manual, none are in one place, and mixing two of them
   is the commonest way to lose a point. (`mn_s4_04`, `mn_s4_05`, `mn_s4_19`,
   `mn_s5_05`, `mn_s6_12`)

## 7. Local gotchas

The five in `localGotchas`, and why each catches people:

1. **J-turn left turns are impossible, not merely discouraged.** There is no
   signal or sign telling a driver "no left turn"; the geometry is the
   instruction, and a driver who does not recognize it waits for a gap that the
   design assumes nobody will take.
2. **Lane splitting is legal here.** Minnesota is unusual in this, and the
   manual goes further than permitting it: drivers must not get in the way or
   try to stop a filtering rider. Drivers who learned in another state
   instinctively close the gap.
3. **20 feet from a school bus, on the red lights, stop arm or no stop arm.**
   The arm is the most visible part of the setup so people treat it as the
   trigger. The owner of the vehicle can be charged as well as the driver.
4. **You may cross the center line to pass a bicyclist in a no-passing zone.**
   The solid yellow line normally means never, and this exception is written
   into the manual. Both halves catch people: some will not pass at all, others
   pass without the three feet.
5. **Bus shoulders work only below 35 mph.** Seeing a bus overtake on the
   shoulder suggests the shoulder is generally available; the speed ceiling is
   what makes it lawful, and it is a Minnesota-specific arrangement.

## 8. Verification

Run 2026-09-06 against commit tree at time of writing.

```
python scripts/verify-excerpts.py minnesota tmp/minnesota-handbook.pdf tmp/minnesota-statute.txt
minnesota: 326/326 quotes verified verbatim against 2 source(s)

python scripts/build-excerpt-snippets.py minnesota tmp/minnesota-handbook.pdf
minnesota: 312 snippets rendered, 14 not located

npx tsx scripts/validate-driving.mjs --only minnesota
  snippets: 312 in manifest, 312/326 excerpts covered (96%)
  excerpts: 326 (155 unused), questions wired: 195/195 (100%), quoted total: 55.2k chars
  questions: 195
  answer positions: A:26% B:30% C:26% D:18%
  context: 100%  source links: 100%  starred: 19%
  topics: rules:26 sharing:24 safety:23 signs:18 licensing:18 signals:16 impairment:16 emergencies:16 rightOfWay:14 speed:12 parking:12
ERRORS: 0   WARNINGS: 4
```

### The 14 excerpts with no snippet image

Eight are statute quotes (`stat-speed-freeways`, `stat-speed-expressway-65`,
`stat-school-zone-speed`, `stat-work-zone-45`, `stat-hands-free`,
`stat-hands-free-fine`, `stat-seat-belt-fine`, `stat-parking-bike-lane`). Those
come from revisor.mn.gov, not from the handbook PDF, so a MISS against the PDF
is expected and correct.

Six are handbook quotes the locator could not place: `do-not-pass-700`,
`cell-phone-exceptions`, `lane-splitting-speeds`, `warning-signs-yellow`,
`left-on-red-conditions`, `distraction-types`. All six are quotes assembled from
a stem plus a bulleted list, which the PDF lays out in separate text runs that
the locator matches only in fragments. The quotes themselves verified verbatim;
only the picture is missing, and each still carries its section, page anchor and
deep link.

### Snippet legibility check

Three PNGs were opened and inspected: `j-turn.png`, `bus-red-20-feet.png` and
`parking-distances.png`, plus `low-beam-distances.png`. The first, second and
fourth are clean tight crops with full lines, correct highlighting and no
clipped characters. `parking-distances.png` is a narrow crop showing only the
first bullet of a multi-bullet quote, with the following line truncated at the
right edge. It is legible and correctly positioned - not the shaved-first-letter
failure - but it under-shows its quote for the same reason the six handbook
MISSes happened: a run-together bulleted quote does not match as one span.

### Warnings, and what was done about each

1. `excerpt permit-requirements: quote is 323 chars`
2. `excerpt emergency-vehicle-pull-right: quote is 329 chars`
3. `excerpt implied-consent: quote is 355 chars`
4. `excerpt stat-speed-freeways: quote is 370 chars`

All four are length warnings (over the 320-char soft limit, well under the
600-char hard cap) on excerpts written by the previous builder in
`excerpts.ts`. That file was out of scope for this session and all 326 of its
quotes verify verbatim, so they were left alone. Each is a single rule stated as
a stem plus its list, which is the shape the soft limit is least suited to; the
statutory one quotes two consecutive numbered speed limits because splitting
them would leave each half unanswerable.

A fifth warning, `tmp/minnesota-verify.json predates quote fingerprinting`,
appeared on the first validator run and was cleared by re-running
`verify-excerpts.py` on 2026-09-06.
