# Connecticut - research note

Bank built 2026-09-06. Slug `connecticut`, code `CT`, license stage: learner's
permit (Class D). 195 questions in six sets, 382 verbatim excerpts.

---

## 1. Sources read

| Source | Publisher | Edition label | URL | Fetched | How |
|---|---|---|---|---|---|
| Connecticut Driver's Manual | Connecticut Department of Motor Vehicles, compiled with the American Association of Motor Vehicle Administrators | "Revised March 2023" (page 3 of the PDF); PDF creation date 2 June 2023 | https://portal.ct.gov/dmv/-/media/dmv/dmv-pdfs/drivers-manual-english.pdf | 2026-09-06 | Direct download. The md5 of the file on disk was checked against a fresh fetch of that URL on 2026-09-06 and matched (e8c54b0e26330f69d085b37ad5a1d15a, 3,309,348 bytes, 60 pages). |
| Connecticut General Statutes, Chapter 246 - Motor Vehicles | Connecticut General Assembly | 2026 revision; the page's own note says to consult the 2026 Supplement, revised to 1 January 2026 | https://www.cga.ct.gov/current/pub/chap_246.htm | 2026-09-06 | Direct. Text capture covers sections 14-1 to 14-164a. |
| Connecticut General Statutes, Chapter 248 - Vehicle Highway Use | Connecticut General Assembly | as above | https://www.cga.ct.gov/current/pub/chap_248.htm | 2026-09-06 | Direct. Covers 14-212 to 14-296bb, which is where the DUI, speeding, school bus, parking, passing and signaling sections live. |
| Connecticut General Statutes, Chapter 249 - Traffic Control and Highway Safety | Connecticut General Assembly | as above | https://www.cga.ct.gov/current/pub/chap_249.htm | 2026-09-06 | Direct. Covers 14-297 to 14-315, including the crosswalk and traffic-signal sections. |
| CT DMV - Take the knowledge and vision tests | Connecticut DMV | undated web page, read 2026-09-06 | https://portal.ct.gov/dmv/licenses-permits-ids/take-knowledge-vision-test | 2026-09-06 | Direct. Test format, fees, retest wait, languages, Work Zone Safety Course. |
| CT DMV - Get a learner's permit | Connecticut DMV | undated web page | https://portal.ct.gov/dmv/licenses-permits-ids/get-learners-permit | 2026-09-06 | Direct. Home-training instructor list, parent training. |
| CT DMV - Get a driver's license for a teenager | Connecticut DMV | undated web page | https://portal.ct.gov/dmv/licenses-permits-ids/teen-drivers-license | 2026-09-06 | Direct. Extended curfew guidance, teen FAQs, road-test retest wait. Note: the "Driving restrictions for teens" panel on that page loads its detail dynamically and did not come down with the HTML, so the passenger and curfew rules in this bank are sourced from the manual and from section 14-36g rather than from that panel. |
| Reddit threads (60 files) | various | n/a | see section 6 | 2026-09-06 (by the previous builder, via `scripts/fetch-reddit.py`) | Read from `tmp/connecticut-reddit-*.txt`. Used only to learn which rules confuse people. |

No third-party practice site, aggregator PDF or prep app was used as a source
for any fact in this bank.

---

## 2. Test format

Everything in `officialTest` comes from the DMV's own knowledge-test page,
cross-checked against the manual.

| Item | Value | Source |
|---|---|---|
| Question count | 25 | DMV knowledge-test page; manual page 5 ("The knowledge test consists of 25 questions") |
| Pass mark | 20 correct (80%) | Same two |
| Time limit | None published | Neither the DMV page nor the manual sets one |
| Early-stop rule | None published | - |
| Booking | Appointment only, in person, at select DMV offices. No walk-in knowledge testing anywhere in the state. | DMV knowledge-test page |
| Fee | $40 license exam fee, paid at booking | DMV knowledge-test page, Required documents & fees |
| Retest wait | 7 days, and $40 again to reschedule | DMV knowledge-test page FAQ |
| Vision test | Same appointment. 20/40 with or without correction; 140 degrees binocular peripheral field | DMV knowledge-test page; manual page 5 gives 20/40 and a 100-degree field for a person blind in one eye |
| Languages | 11 on screen; about 25 more on paper by request | DMV knowledge-test page |
| Permit validity | Until licensed or 2 years from issue, whichever comes first | Manual page 5 |
| Minimum age | 16 for both permit and license | Manual page 5; DMV teen FAQ |
| New for 2026 | Free online Connecticut Work Zone Safety Course, certificate handed in before the knowledge test, effective 1 January 2026 | DMV knowledge-test page |
| Road-test retest wait | 14 days and another $40 | DMV teen FAQ |

---

## 3. Section and page map

Page numbers below are the PDF page; the book's printed page number is two
lower (printed page 1 is PDF page 3). Excerpt `url` values use `#page=` with
the PDF page.

| PDF page | Printed | Content |
|---|---|---|
| 3 | 1 | Imprint, "Revised March 2023" |
| 4-5 | 2-3 | Table of contents |
| 6-11 | 4-9 | Ch 1: learner's permit, knowledge test, vision test, qualified trainer, permit passenger restrictions, driver education, home training, road test, license fee, 16-17 restrictions, organ donor, voter registration, disability services |
| 12 | 10 | Chapter 2 divider |
| 13-15 | 11-13 | Ch 2: braking, lights, windshield and tires, penny test, emissions, suspension, exhaust, engine, green driving, interior equipment, seat belts, child restraints, cell phone law, insurance, study questions |
| 16-30 | 14-28 | Ch 3: starting, accelerating, steering, scanning, intersections, railroad crossings, work zones, sharing the road (vulnerable users, emergency vehicles, Move Over, pedestrians, school zones, white canes, bicyclists, motorcycles, slow-moving vehicles, ice cream trucks, horses), trucks and No-Zones, space cushion, changing lanes, passing, turning, backing, visibility, hazardous conditions, aggressive driving, distractions, fatigue, health, emotions |
| 31-34 | 29-32 | Teen safe driving inserts and the Teen-Parent Driver Agreement |
| 35-37 | 33-35 | Drinking and driving, alcohol and the law, teen suspension table, youthful offender status, stopping for police, operator retraining, study questions |
| 38-43 | 36-41 | Ch 4: speed limits, stopping, right-of-way, roundabouts, U-turns, parking and no-parking zones, lights, horn, turn signals, vehicle emergencies, equipment failure, avoiding collisions, skids, traffic crashes, study questions |
| 45-54 | 43-52 | Ch 5: pavement markings, traffic lights and signals, HAWK, traffic signs by shape and color, regulatory, warning, guide, work area and railroad signs, message boards, study questions |
| 55 | 53 | Ch 6: DMV consumer directory |
| 56 | 54 | Answers to study questions |

---

## 4. What the handbook does not say

Every one of these is a number the knowledge test can ask for and the manual
never prints. Each is sourced from Title 14 instead.

| Missing from the manual | Statutory source | Value |
|---|---|---|
| Any speed limit at all | Sec. 14-219(a)(2), (3) | 55 mph general maximum; 65 mph only on a highway where a 65 limit has been established under Sec. 14-218a(b)(1) |
| Speed offense independent of the posted limit | Sec. 14-218a(a)(1) | "greater than is reasonable, having regard to the width, traffic and use of highway, road or parking area, the intersection of streets and weather conditions" |
| Teen speeding threshold | Sec. 14-219(a)(4) | Under 18, more than 20 mph over a limit below 65 |
| School bus stopping distance | Sec. 14-279(a) | Not less than 10 feet, front and rear |
| School bus fine | Sec. 14-279(b) | $450 first offense; $500-$1,000 and/or up to 30 days thereafter |
| No turns toward a stopped school bus at an intersection | Sec. 14-279(a) | Prohibited |
| Signaling distance | Sec. 14-242(b) | 100 feet, continuously, before the turn |
| U-turn sight distance | Sec. 14-242(d) | 500 feet |
| Hand signals | Sec. 14-244 | Down for stop, horizontal for left, up for right |
| Adult BAC threshold | Sec. 14-227a(a) | 0.08% (0.04% commercial) |
| Under-21 BAC as a statute | Sec. 14-227g(a) | 0.02% |
| Implied consent scope | Sec. 14-227b(a) | Blood, breath or urine plus the non-testimonial part of a drug influence evaluation |
| Parking: intersection / crosswalk approach | Sec. 14-251(b) | 25 feet (10 feet with a qualifying curb extension; spaces existing on or before 1 Oct 2022 grandfathered) |
| Parking: curb distance as a measurement | Sec. 14-251(a) | 12 inches (the manual says "more than one foot") |
| Parking: sight distance on a curve or crest | Sec. 14-251(c) | 150 feet either way |
| Yield to a vehicle from the right | Sec. 14-245 | Codifies the manual's four-way and uncontrolled rules |
| Yield to a signaling bus, as law | Sec. 14-247b | Infraction to fail |
| Three-foot passing distance, as law | Sec. 14-232(a) | "safe distance" defined as not less than three feet |
| When lights must be lit | Sec. 14-96a(a) | Half-hour after sunset to half-hour before sunrise; whenever people and vehicles are not clearly discernible at 500 feet; during any precipitation |
| Studded tire dates, as law | Sec. 14-98 | 15 November to 30 April inclusive |
| GDL passenger, curfew and seat-belt-count rules, as law | Sec. 14-36g(a) | Also the penalty ladder in (d): 30 days first, six months or age 18 thereafter |
| Move Over law's actual terms | Sec. 14-283b | Reduce speed below the posted limit AND move over one lane; subsection (c) extends the move-over duty to non-emergency vehicles on the shoulder |
| School zone fine doubling | Sec. 14-212b(c) | Court adds a fee equal to 100% of the fine |
| Pedestrian right of way until the far curb | Sec. 14-300(b) | Over all vehicles including turning ones |
| Motorcycle full-lane entitlement, as law | Sec. 14-289b(a) | Plus the headlamp-always rule in (c) |
| Sidewalk driving and parking | Sec. 14-250a | Prohibited with narrow exceptions |
| Which vehicles stop at every railroad crossing | Sec. 14-250(a) | 15 to 50 feet from the nearest rail |

---

## 5. Conflicts and lags

1. **Work Zone Safety Course (lag, not a conflict).** Since 1 January 2026 the
   DMV requires every permit applicant to complete a free online Connecticut
   Work Zone Safety Course and hand in the printed certificate before the
   knowledge test. The March 2023 manual predates the requirement and does not
   mention it anywhere. `ct_s2_30` follows the DMV page, and `officialTest.notes`
   records that the manual is silent.

2. **Peripheral vision standard (two official figures, different tests).** The
   manual (page 5) gives a 100-degree minimum visual field, but only for an
   applicant blind in one eye. The DMV's current knowledge-test page states a
   140-degree binocular peripheral field for a Class D license. These are
   measuring different things rather than contradicting each other, so
   `ct_s4_15` asks only about the 20/40 acuity standard, which both sources
   state identically.

3. **Parking distances (manual incomplete, not wrong).** The manual lists 25
   feet from a stop sign and from a pedestrian safety zone, 10 feet from a
   hydrant and one foot from the curb. Section 14-251 adds 25 feet from an
   intersection or the approach to a marked crosswalk and 150 feet of clear
   view on a curve or crest, and restates the curb figure as 12 inches. Both
   readings agree wherever they overlap; the questions on the manual's figures
   cite the manual, and the questions on the statute-only figures cite the
   statute and say so in their context (`ct_s5_08`, `ct_s3_08`).

4. **Following distance (standard vs. rule of thumb).** Section 14-240 sets no
   number at all - "no closer than is reasonable and prudent". The manual turns
   it into three seconds dry, four in the listed adverse situations. Both give
   the same answer for every scenario used here, and `ct_s6_13` asks about the
   statutory standard explicitly rather than pretending the number is in the
   law.

5. **Signal timing.** The manual says "at least three seconds"; section
   14-242(b) says 100 continuous feet. At any speed above about 20 mph the
   statutory distance is the shorter requirement, so a driver who satisfies the
   manual satisfies the statute. `ct_s1_26` asks for the statutory figure and
   its context says where the three-second guidance comes from.

6. **Source typos preserved.** The manual's "behind the-wheel", its "do not
   stop-continue through the intersection", its "16-or 17-year-old" and its
   "two hundredths of one percent (.02%)" (the statute writes "per cent") are
   all quoted as they stand. The excerpt file header lists the four permitted
   normalizations and nothing else was applied.

---

## 6. What learners report

Sixty Reddit threads were captured in `tmp/connecticut-reddit-*.txt` by the
previous builder using `scripts/fetch-reddit.py`. All sixty were listed and
scanned; the eighteen below carried knowledge-test or Connecticut-rule signal.
The rest were road-test nerves, DMV appointment logistics, emissions testing,
New Haven parking-ticket appeals or off-topic. No comment text is reproduced,
and no question in this bank is derived from anyone's recollection of a real
exam item - the threads were used only to identify which RULES confuse people,
after which the rule was verified against the manual or Title 14 and the
question written from scratch.

| Subreddit | Thread title | Year | One-line paraphrase | Shaped |
|---|---|---|---|---|
| r/Connecticut | CT PERMIT TEST | 4y | A commenter says both their children reported questions on Connecticut's graduated license rules. | ct_s1_23, ct_s3_04, ct_s3_27, ct_s5_01, ct_s5_05, ct_s6_05 |
| r/Connecticut | Driving license permit knowledge test. | 7mo | A parent of two recent test-takers advises focusing on the exact penalties for breaking teen driving laws, saying enough questions turned on them to fail someone who did not know them. | ct_s3_27, ct_s5_05, ct_s5_11, ct_s2_26 |
| r/Connecticut | How should I (quickly)study for my driver's license permit as an adult? | 2y | The poster says the only things they struggled with were the exact distances, giving fire hydrants and other objects too much clearance. | ct_s1_09, ct_s1_21, ct_s4_18, ct_s5_08 |
| r/Connecticut | Any tips for taking the learners permit written test? | 5y | A commenter reports failing first time on a child car seat question about the weight at which a child leaves a restraint, having relied on practice tests instead of the manual. | ct_s4_29 |
| r/Connecticut | Drivers permit rules - two parents ok? | 13y | Multiple commenters give conflicting and mostly incorrect answers about who may ride with a permit holder, several asserting that any number of adults or siblings may come along. | ct_s2_16, ct_s5_01 |
| r/Connecticut | Citation for failing to stop for a school bus - go to court or not? | 2y | A driver on a four-lane undivided road describes being cited for passing a bus on the opposite side and reports watching five other vehicles do the same at the same stop. | ct_s3_01, ct_s5_02, ct_s6_03 |
| r/newhaven | Contesting school bus camera citation? | 5mo | A driver two lanes away traveling the other direction is cited by a bus camera; a former school bus safety manager replies about when the duty begins relative to the yellow lights. | ct_s3_01, ct_s5_03, ct_s6_03 |
| r/Connecticut | DMV app and the permit test | 2y | A passer reports questions that were not in the official practice app and had to be reasoned out from the manual. | Set 5 design generally |
| r/Connecticut | CT Learners Permit Test | 3y | A parent notes the DMV app's practice tests contain few rules-of-the-road questions compared with what the test covers. | Set 2, set 4 breadth |
| r/Connecticut | Will I pass the permit test just using DMV app? | 3y | The poster passed but reports several questions the app had not covered. | Set 4 breadth |
| r/newhaven | Permit test | 2y | A 17 year old who failed reports that the real test uses deliberately confusing wording and advises learning the material rather than memorizing answers. | Wording of sets 3 and 5 |
| r/Connecticut | I'm 16 and trying to get driver permit what should I use to study? | 3mo | Commenters point to the DMV manual as the definitive source; one notes the test is derived from it. | Sourcing approach |
| r/Connecticut | Question about repeat Learner's Permit test | 6y | The poster's permit expired before they took the road test and they must retake the knowledge test. | ct_s5_21 |
| r/Connecticut | Im getting 2 different answers about learners permit need help | 8mo | Adults disagree about whether an over-18 applicant must hold the permit 90 days; the DMV page settles it with a short exemption list. | ct_s3_16, ct_s5_31 |
| r/Connecticut | 17yo learner's permit question | 2y | Commenters disagree about out-of-state recognition of a Connecticut permit; one incorrectly states Connecticut has no permit curfew. | ct_s5_11 |
| r/Connecticut | Passed my Permit Test! | 4y | A passer describes using the manual plus flashcards; a reply advises flooring it on a yellow light, which contradicts the manual. | ct_s1_22 |
| r/newhaven | Everything fun you can do now that the police no longer enforce traffic laws | 2y | Several commenters describe the "no turn on red" sign being widely ignored and drivers being honked at for obeying it. | ct_s5_09 |
| r/newhaven | Traffic/Pedestrian Safety Legislation | 7y | A local bill summary describes requiring motorists to yield to pedestrians who affirmatively indicate an intention to cross - the rule now in the manual and section 14-300. | ct_s2_13, ct_s5_26, ct_s6_30 |

**The three strongest traps found**

1. **The school bus on a wide road.** Two independent threads describe drivers
   cited for passing a stopped bus on the far side of an undivided multi-lane
   road, and both describe other vehicles doing the same thing at the same
   stop. The manual and section 14-279 both say the only exemption is a safety
   island or physical barrier - lane count is irrelevant. Built as `ct_s3_01`,
   `ct_s5_02`, `ct_s5_03` and `ct_s6_03`.

2. **Who may ride with a permit holder.** A whole thread of adults confidently
   contradicting each other, with the most-upvoted wrong answer being that any
   number of adults or siblings may ride along. The manual allows the qualified
   instructor and no one else, and the immediate-family relaxation belongs to
   months seven to twelve of a license, not to the permit. Built as `ct_s2_16`,
   `ct_s3_04`, `ct_s5_01` and `ct_s6_05`.

3. **The exact teen penalties.** Two independent posters report the test asking
   for specific suspension lengths rather than general "you'll be in trouble"
   answers. Verified against the manual's suspension table (PDF page 36) and
   section 14-36g(d). Built as `ct_s2_26`, `ct_s3_27` and `ct_s5_05`.

**Format claims checked and rejected.** One commenter states the test is 20
questions with five wrong allowed. The DMV's own page and the manual both say
25 questions and 20 correct. The bank follows the official figure and
`ct_s1_02` uses the misremembered version as a distractor.

---

## 7. Local gotchas

The five entries in `localGotchas`, and why each catches people:

1. **School bus stops apply from both directions on an undivided road.**
   Connecticut's exemption is narrower than drivers assume - only a safety
   island or a physical barrier releases you, and only from the far side. Two
   Reddit threads document exactly this failure, and the first-offense fine is
   $450.

2. **At 16 or 17, no phone at all - hands-free included.** Drivers 18 and over
   may use a hands-free accessory, so teens generalize from what they watch
   their parents do. A conviction under 18 suspends the license for 30 days on
   the first offense.

3. **A permit holder carries the instructor and nobody else.** No friends, no
   siblings, no second adult except a parent or guardian accompanying a driving
   instructor. Widely misstated online, and breaking it can suspend the permit.

4. **The manual prints no speed limit at all.** Learners study the book cover
   to cover and never see a number, then meet 55 and 65 on the test. Both come
   from section 14-219, and 65 applies only where a 65 limit has actually been
   posted for that highway.

5. **Connecticut's parking numbers are its own.** 25 feet from a stop sign, 25
   feet from a pedestrian safety zone, 10 feet from a hydrant, no more than one
   foot from the curb. The 10-foot hydrant figure is shorter than the 15 feet
   several neighboring states use, which is the specific number people import
   incorrectly.

---

## 8. Verification

Run 2026-09-06.

```
$ npx tsx scripts/extract-quotes.mjs connecticut
tmp/connecticut-quotes.json: 382 quotes

$ python scripts/verify-excerpts.py connecticut tmp/connecticut-handbook.pdf \
    tmp/connecticut-statute-chap246.txt tmp/connecticut-statute-chap248.txt \
    tmp/connecticut-statute-chap249.txt
connecticut: 382/382 quotes verified verbatim against 4 source(s)

$ python scripts/build-excerpt-snippets.py connecticut tmp/connecticut-handbook.pdf
connecticut: 337 snippets rendered, 45 not located
```

The 45 not located are the 38 statute excerpts, which are text sources with no
pages and cannot be cropped from the handbook PDF, plus 7 handbook quotes whose
text crosses a column or page break in a way the locator could not bracket.
That is 337 of 344 handbook quotes rendered, or 98%. Three PNGs were opened and
inspected (`four-way-stop-manual`, `school-bus-stop-manual`, `shape-octagon`):
tight crops, full lines, no clipped first letters.

```
$ npx tsx scripts/validate-driving.mjs --only connecticut
ERRORS: 0   WARNINGS: 0
```

`npx tsc --noEmit -p .` reports no errors in any file under
`src/lib/driving/connecticut/`.

### Warnings, and what was done about them

The first validator run reported seven warnings, all of the same kind: an
excerpt quote longer than the 320-character soft cap. All seven were statute or
manual passages where the operative rule ran long. Each was trimmed to a
shorter contiguous verbatim span and re-verified, and the run above is clean.
No quote was edited to make it fit - in every case a shorter span of the same
sentence carried the rule on its own.

### Counts

| Set | Title | Difficulty | Questions |
|---|---|---|---|
| 1 | Connecticut Basics | starter | 30 |
| 2 | Core Rules of the Road | easy | 30 |
| 3 | Real Test Difficulty | medium | 35 |
| 4 | Across the Whole Manual | medium | 35 |
| 5 | The Ones People Fail On | hard | 35 |
| 6 | Exam Simulation | exam | 30 |
| | | **Total** | **195** |

Answer positions A:25% B:25% C:25% D:25%. Context on 100% of questions, source
links on 100%, `commonlyMissed` on 14%. All eleven `DrivingTopic` values are
covered. Excerpt coverage: 195 of 195 questions carry an `excerptKey` that
resolves (100%).
