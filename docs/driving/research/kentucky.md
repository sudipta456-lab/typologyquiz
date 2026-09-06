# Kentucky - research note

Bank: `src/lib/driving/kentucky/`. 195 original questions in six sets, 320
verbatim excerpts, 284 rendered snippets. `contentDate` 2026-09-06.

## 1. Sources read

| Source | Publisher | Edition label | URL | Fetched |
|---|---|---|---|---|
| Kentucky Driver Manual (PDF, 78 pages) | Kentucky State Police with the Kentucky Transportation Cabinet | `10-11-2023` (the publisher's own file label; there is no printed cover date in the text layer) | https://wp.kentuckystatepolice.ky.gov/wp-content/uploads/2023/11/Kentucky-Driver-Manual-10-11-2023.pdf | 2026-09-06, direct download to `tmp/kentucky-handbook.pdf` |
| Kentucky Revised Statutes, chapters 186, 189 and 189A - 58 sections | Kentucky Legislative Research Commission | Statute text as published, current through the 2026 sessions shown on each page | https://apps.legislature.ky.gov/law/statutes/statute.aspx?id=... (per-section ids, listed in `tmp/kentucky-statute.txt`) | 2026-09-06, direct, saved as `tmp/kentucky-statute.txt` |
| Graduated Driver Licensing Program pages | Kentucky Transportation Cabinet | undated web pages | https://drive.ky.gov/Drivers/Pages/GDLP.aspx | 2026-09-06, direct |

This is the edition drive.ky.gov links as "Study the Driver Manual". Two older
PDFs of the same manual (`Drivers-Manual-5-27-2021-Update.pdf` and
`Kentucky-Driver-Manual-09-08-2023.pdf`) are still reachable on the same host
and are still being passed around in forum threads. Neither was used, and the
gap between them is one of the local gotchas below.

The manual is the only study source the Kentucky State Police endorse. It is
also unusually thin on numbers, which is why 41 of the 320 excerpts come from
the statute rather than the book.

## 2. Test format

| Item | Value | Where it came from |
|---|---|---|
| Pass mark | 80 percent | Manual, Section One, "Written Test": applicants must make a minimum score of 80 percent |
| Question count | 40 (reported) | NOT published by KSP or the Transportation Cabinet. Reported consistently by test-takers, including one who identified themselves as a Transportation Cabinet employee |
| Correct answers to pass | 32 (reported) | Same. 32 of 40 is exactly the published 80 percent |
| Early stop | Reported to end at 32 correct or 9 wrong | Forum only. Not confirmed against any official page |
| Content | Driving rules, regulations, procedures and highway signs | Manual, "Written Test" |
| Vision gate | 20/40 corrected or uncorrected, before you are allowed on to the written test | Manual, "Vision Screening" |
| Administered by | Kentucky State Police, usually on a tablet; application taken first at a Transportation Cabinet regional office | Manual, "Licensing Requirements" |
| Languages | Available in about 30 languages; audio available on the testing tablets without a special appointment; the signs portion must be answered from the applicant's own knowledge | Manual, "Written Test" |
| Retest wait | The manual states a one-week wait after a failed ROAD test. It states no wait for the written test | Manual, "Requirements for the Road Test" |
| Fee | Not stated in the manual | - |

**What I could not verify.** The 40-question length and the early-stop rule are
forum-sourced. `officialTest.questionCount` is set to 40 and `passCount` to 32
because 32/40 is the only common test length that lands exactly on the
published 80 percent, and because two independent posters give the same pair.
The first note on `officialTest.notes` says plainly that the manual publishes
the pass mark and not the length. If a future editor finds an official page
with the count, that note should be rewritten rather than quietly deleted.

## 3. Section and page map

Printed page numbers from the manual's own table of contents. The PDF page is
the printed page plus 6 (printed page 1 is PDF page 7).

| Section | Topic | Printed pages |
|---|---|---|
| One | The Driver's License - types, licensing requirements, testing requirements, scheduling, out-of-state licences, renewal, loss of privileges | 1 - 18 |
| Two | General Information - registration, insurance law, medical review board, environment, organ donation | 19 - 21 |
| Three | Be in Shape to Drive - vision, hearing, fatigue, distractions, emotions and road rage, aging drivers, alcohol and drugs | 22 - 27 |
| Four | Before You Drive - inspection, seat and mirrors, safety belts, air bags, child passenger safety, secure your load, ADAS | 28 - 32 |
| Five | Basic Driving - starting, moving, stopping, steering, backing up | 33 |
| Six | Rules of the Road - yielding right of way, traffic control devices, traffic signs, pavement markings, other lane controls | 34 - 41 |
| Seven | General Driving - turning and turnabouts, intersections, roundabouts, school buses, parking, use of lanes, entering and exiting a multi-lane highway, passing | 42 - 48 |
| Eight | Safe Driving Tips - visual search, speed management, stopping distance, space management, backing, communicating | 49 - 53 |
| Nine | Emergency Situations - avoiding crashes, collisions, vehicle malfunctions | 54 - 57 |
| Ten | Sharing the Road - pedestrians, bicyclists, motorcyclists, commercial vehicles, emergency vehicles, police and traffic stops, move-over laws, slow-moving vehicles, ATVs | 58 - 66 |
| Eleven | Special Driving Situations - night driving, funeral processions, work zones, rural roads, autocycles, safe trailering | 67 - 70 |
| Twelve | Test Your Knowledge - eleven sample questions with an answer key | 71 |

## 4. What the handbook does not say

Every number below is testable and absent from the manual. The statute supplies
each one, and each has an excerpt of its own in `excerpts.ts`.

| Rule | Number | Statute | Excerpt key |
|---|---|---|---|
| Parking near a fire hydrant | 15 feet | KRS 189.450(5)(i) | `parking-hydrant-15` |
| Parking on the approach to a stop sign, flashing beacon or signal | 30 feet | KRS 189.450(5)(f) | `parking-30-feet` |
| Where parking is prohibited outright | Sidewalk, disability ramp, driveway, intersection, crosswalk, median of a divided highway | KRS 189.450(5) | `parking-prohibited-statute` |
| Stopping on the shoulder of an interstate or toll road | Prohibited | KRS 189.450(3) | `parking-shoulder-interstate` |
| Turn signal distance as LAW rather than advice | 100 feet, given continuously | KRS 189.380(2) | `signal-100-statute` |
| Instruction permit minimum age | 15 | KRS 186.450(1) | `permit-age-statute` |
| Following an emergency vehicle | No closer than 500 feet | KRS 189.930(3) | `emergency-statute-500` |
| Passing on the right, permitted circumstances | Vehicle ahead turning left, or pavement wide enough for two lines | KRS 189.340(3) | `pass-right-conditions` |
| Carrying the licence | In immediate possession, produced on a peace officer's demand | KRS 186.510 | `license-possession-statute` |
| Crossings designated unsafe | Stop no closer than 15 and no farther than 30 feet from the nearest rail | KRS 189.560(3) | `unsafe-crossing-statute` |

The manual also gives the written test's pass mark but not its length, which
is covered in section 2 above.

## 5. Conflicts

**Permit age. Statute wins.** The manual's Step 1 Permit Phase says "Drivers
must be at least 16 years of age to take the vision and written knowledge tests
and apply for a permit". KRS 186.450(1) says "A person who is at least fifteen
(15) years of age may apply for an instruction permit to operate a motor
vehicle." Both are quoted in the bank (`permit-age-manual` and
`permit-age-statute`) so a learner can see the gap. Question `ky_s5_16` asks for
the statutory age and its context note says the manual has not caught up. No
question is built on the manual's 16 as if it were current law.

**School buses. Built where both readings agree.** The manual says "A stop is
not required when approaching a stopped bus from the opposite direction upon a
highway of four or more lanes". KRS 189.370(1) narrows that: the exemption
applies only "upon a highway of four (4) or more lanes divided by an elevated
barrier or unpaved median". Both are quoted (`schoolbus-four-lane` and
`schoolbus-statute-exception`). The only school-bus question in sets 4 to 6,
`ky_s5_08`, puts the driver BEHIND the bus on a two-lane road, where every
reading of both sources requires a stop, and the context note explains the
divergence rather than picking a side. `localGotchas` closes with the practical
instruction: on a Kentucky road, when in doubt, stop.

**The manual's own sample test versus its pedestrian section.** Question 4 of
the manual's Section Twelve sample test treats a mid-block pedestrian as
someone the driver must stop for, while the pedestrian section states that
"Every pedestrian crossing a roadway at a point other than within a marked
crosswalk or within an unmarked crosswalk at an intersection shall yield the
right-of-way to all vehicles." Question `ky_s5_19` is written on the duty both
statements share - the pedestrian owes the legal yield, the driver still owes
the duty of care - and its trap note says so. No question makes the learner
choose between the two.

**Point thresholds.** `points-12` gives "12 points (7 points if under age
eighteen)" while `minor-points` says a driver under 18 who accumulates "more
than six points" may be suspended. These are the same threshold stated two
ways, not a conflict; `ky_s5_30` uses the 12/7 pair.

## 6. What learners report

59 Reddit threads were fetched with `python scripts/fetch-reddit.py kentucky`
and saved to `tmp/kentucky-reddit-*.txt`. Roughly two-thirds are about the ROAD
test, appointment scheduling or licence delivery and carried nothing for a
knowledge-test bank; those were read and discarded. Paraphrases only below - no
comment text is reproduced anywhere in this repo, and no recalled exam item was
turned into a question. What a thread gives is evidence about what CONFUSES
people; every rule below was then verified against the manual or the statute
before a question was written.

| Sub | Thread | Year | Paraphrased claim | Shaped |
|---|---|---|---|---|
| r/lexington | "What should I expect on the permit test?" | 2023 | A poster says the fatigue question's tempting wrong answer is opening the windows and turning up the radio, and that the test wants you to pull over and nap | `ky_s5_01` |
| r/lexington | same thread | 2023 | Signs appear with their wording removed, and you pick the sign by shape and colour | `ky_s5_27`, `ky_s5_28`, `ky_s6_02` |
| r/Kentucky | "KY written driver's permit test help for people with upcoming test" | 2024 | The only two the poster missed were the ignition interlock threshold and the distance at which high beams must be dimmed for oncoming traffic | `ky_s5_02`, `ky_s5_04` |
| r/Kentucky | same thread | 2024 | Reports 40 questions with 32 needed to pass, and that questions can be skipped and returned to | `officialTest` |
| r/Kentucky | same thread, separate commenter | 2024 | A commenter identifying as a Transportation Cabinet employee says the test stops at 32 correct or at 9 wrong or skipped, that it is normally on tablets with paper on request, and that KSP publish no practice test of their own | `officialTest.notes` |
| r/Kentucky | "About to take my permit test what specifically should I be studying" | 2024 | Advice circulating is to read only pages 7 to 35 and 46 to 60 of the manual and skip the rest | Set 4 exists because of this; the manual's own line is that review in its entirety is recommended |
| r/Kentucky | "I need help with a license question" / GDL threads | 2024 | Posters are hoping a bill allowing 15-year-olds to get a permit is signed - i.e. the change is real and the manual has not caught up | `ky_s5_16` |
| r/driving | "Study Guide for Kentucky Permit test 2024 in September" | 2024 | A learner says the manual's own numbers are what matter and that generic apps taught different ones | `ky_s5_06` (4 seconds, not 3) |
| r/Kentucky | "Yall I'm stressed out ... failed by 2 questions" | 2025 | Repeat failures by one or two marks; several posters report three to eight attempts | Confirms the bank should be built on margins, which is what set 5 is |
| r/lexington, r/Louisville | multiple permit threads | 2023-2025 | Posters recommend national practice apps whose question pools are not Kentucky's | Every number in the bank is taken from the manual or KRS, never from an app |
| r/driving | "how easy was written test in your state?" | 2025 | A poster reports missing a question on "The No Zone" | `ky_s5_03`, `ky_s5_14`, `ky_s6_20` |
| r/driving | "Drivinng test help in Kentucky" | 2025 | A poster describes the questions as situational and oddly worded rather than pure recall | Sets 4 to 6 are written as scenarios wherever the rule allows it |

Threads that produced nothing usable: the Bowman Field and Ironworks road-test
threads, the appointment-scheduling and licence-in-the-mail threads, the vision
waiver dispute, and the several two-feet-on-the-pedals arguments. All were read.

**The three strongest traps found**, all now `commonlyMissed`:

1. The two headlight-dimming distances - 500 feet oncoming and 300 feet
   following. Learners remember one number and use it for both.
2. The truck No Zone. People know the phrase and not the mirror test, and the
   front and rear blind spots surprise them.
3. Numbers a national practice app teaches that are not Kentucky's: three
   seconds of following distance instead of four, a 10-foot hydrant instead of
   15, hand signals as a lawful substitute when Kentucky says the vehicle must
   have mechanical signals.

## 7. Local gotchas

The five in `jurisdiction.localGotchas`, and why each one catches people:

1. **Four-second following distance.** Almost every practice app in the country
   teaches three. Kentucky prints four, and asks for a fifth second at night
   and a sixth on an unfamiliar road at night.
2. **The manual prints no parking distances at all.** A learner who reads the
   book cover to cover still cannot answer the hydrant or stop-sign question.
   Both come from KRS 189.450(5).
3. **15 mph in a public parking lot.** It reads as private ground where speed
   limits are advisory. It is a statutory limit, and ownership is not the test -
   public use is.
4. **Permit age 15 in the statute, 16 in the manual.** Older PDFs of the manual
   are still online on the same government host and still being linked in
   forum threads, so the copy a learner is reading may be two editions behind.
5. **The school bus four-lane exemption.** The manual's version is wider than
   the statute's. On a road where the two readings differ, stopping satisfies
   both.

## 8. Verification

All three run on 2026-09-06 against the tree as committed.

```
npx tsx scripts/extract-quotes.mjs kentucky
  tmp/kentucky-quotes.json: 320 quotes

python scripts/verify-excerpts.py kentucky tmp/kentucky-handbook.pdf tmp/kentucky-statute.txt
  kentucky: 320/320 quotes verified verbatim against 2 source(s)
  (receipt tmp/kentucky-verify.json: verified 320, total 320, nonOfficial 0)

python scripts/build-excerpt-snippets.py kentucky tmp/kentucky-handbook.pdf
  kentucky: 284 snippets rendered, 36 not located

npx tsx scripts/validate-driving.mjs --only kentucky
  ERRORS: 0   WARNINGS: 6
```

**The 36 unrendered snippets are all statute quotes.** Every one of the 279
Kentucky Driver Manual quotes rendered - 100 percent of the handbook set. The
snippet pipeline searches the handbook PDF, so a KRS quote has nothing to match
against unless the manual happens to reproduce it; five did, which is why 284
rather than 279 rendered. Three PNGs were opened and checked
(`speed-35`, `following-4-seconds`, `schoolbus-stop`): tight crops, the quoted
passage highlighted, no letters cut off at the line starts.

**The six validator warnings** are all the same warning: an excerpt whose quote
runs past the 320-character soft cap. They are `permit-curfew-statute` (358),
`dui-first-penalty` (346), `child-restraint-40` (328), `stop-sign-statute`
(336), `minor-device-statute` (386) and `dui-statute-008` (346). Each is a
single sentence in its source, each is well under the 600-character hard cap,
and in each case the operative rule is at the end of the sentence - the
statutory exceptions in the curfew and device sections, the full penalty ladder
in the DUI ones, the "meeting federal motor vehicle safety standards" clause in
the child restraint one. Trimming any of them to satisfy the soft cap would cut
the part the question turns on, so they are left whole and recorded here
instead.

Answer positions across the bank: A 26 percent, B 29 percent, C 28 percent,
D 18 percent. Excerpt coverage: 195 of 195 questions carry a resolving
`excerptKey`. Context 100 percent, source links 100 percent, starred 20 percent.
