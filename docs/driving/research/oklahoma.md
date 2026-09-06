# Oklahoma - research note

Bank built and checked 2026-09-06. Slug `oklahoma`, 195 questions across six
sets, 338 excerpts.

## 1. Sources read

| Source | Publisher | Edition label | URL | Fetched | How |
|---|---|---|---|---|---|
| Oklahoma Driver Manual (74pp PDF) | Service Oklahoma | "Updated 11/24/25" (last page); "Copyright 2025 Service Oklahoma" (page 73) | https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf | 2026-09-06 | Direct download to `tmp/oklahoma-handbook.pdf` |
| Oklahoma Statutes Title 47, Chapter 11 (Rules of the Road), 12 sections | Oklahoma State Courts Network (OSCN) | "OSCN 2026" citation line | https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=... | 2026-09-06 | Direct, saved to `tmp/oklahoma-statute.txt` |
| Written Knowledge Test | Service Oklahoma | undated web page, "Copyright 2026 Service Oklahoma" | https://oklahoma.gov/service/popular-services/written-test.html | 2026-09-06 | Direct, visible text to `tmp/oklahoma-writtentest.txt` |
| Learner Permit | Service Oklahoma | undated web page | https://oklahoma.gov/service/all-pages/learner-permit.html | 2026-09-06 | Direct, `tmp/oklahoma-learner-permit.txt` |
| Intermediate License | Service Oklahoma | undated web page | https://oklahoma.gov/service/all-pages/intermediate-license.html | 2026-09-06 | Direct, `tmp/oklahoma-intermediate-license.txt` |
| New Driver License & ID Card | Service Oklahoma | undated web page | https://oklahoma.gov/service/popular-services/new-dl.html | 2026-09-06 | Direct, `tmp/oklahoma-new-dl.txt` |
| Teen Driving | Service Oklahoma | undated web page | https://oklahoma.gov/service/popular-services/teen-driving.html | 2026-09-06 | Direct, `tmp/oklahoma-teen-driving.txt` |

The 12 statute sections pulled were 11-202, 11-301, 11-304, 11-306, 11-307,
11-309, 11-310, 11-311, 11-312, 11-314, 11-401 and 11-402. Nothing was taken
from a practice site, an aggregator PDF or Wikipedia.

`handbookEdition` is recorded as "Updated 11/24/25" because that string, alone
on the manual's last page, is the only edition label Service Oklahoma prints.
There is no cover date and no revision code.

## 2. Test format

| Item | Value | Source |
|---|---|---|
| Questions | 20 | Written Knowledge Test page; Learner Permit page ("a 20-question test") |
| To pass | 15 correct (75%) | Written Knowledge Test page, FAQ |
| Time limit | 60 minutes | Written Knowledge Test page, both the online step 4 text and the FAQ |
| Early stop | None stated | - |
| Retest wait | At least one day, by law | Oklahoma Driver Manual page 9, "What to Expect - Written Test" |
| Online attempts | Two, then you must attend in person | Written Knowledge Test page, "If You Did Not Pass" |
| Fee | Retest $4 added to the issuance fee per failed attempt; permit issuance $42.50 | Learner Permit page, Fees |
| Where | Online through the state's provider, or in person at a Service Oklahoma location; $25 surcharge at Career Tech Testing Centers | Written Knowledge Test and Learner Permit pages |
| Waiver | Completing an approved driver education course can waive the written test; parent-taught driver education does not | Learner Permit page |
| Content | Oklahoma traffic laws, safe driving practices, drug and alcohol laws; questions taken from this manual | Manual page 9 |

The manual states none of the length, pass mark or time limit. All three come
from the licensing pages.

## 3. Section and page map

The printed page number and the PDF page number are the same throughout, so
`#page=N` anchors resolve to the printed page. Chapter starts from the manual's
own table of contents (page 3):

| Page | Chapter |
|---|---|
| 4 | Chapter 1: How to Apply for Your Oklahoma Driver License |
| 13 | Chapter 2: Your Driver License Restrictions and Renewals |
| 16 | Chapter 3: Requirements for Oklahoma Drivers |
| 19 | Chapter 4: Signs, Signals and Markings |
| 28 | Chapter 5: Right-of-Way - When to Yield |
| 31 | Chapter 6: Lane Usage and Maneuvers (the contents page says 31; the chapter heading actually starts on 32, with page 31 still carrying Chapter 5 material) |
| 39 | Chapter 7: The Basic Speed Rule (heading starts on 40; 39 is still Chapter 6 Backing) |
| 41 | Chapter 8: Stopping and Following (heading starts on 42) |
| 45 | Chapter 9: Parking (heading starts on 46) |
| 49 | Chapter 10: Sharing the Road (heading starts on 50) |
| 58 | Chapter 11: Driving Tips (heading starts on 59) |
| 63 | Chapter 12: Alcohol, Drugs and Driving (heading starts on 64) |
| 68 | Chapter 13: Violations and Penalties (heading starts on 69) |
| 73 | Copyright notice |
| 74 | "Updated 11/24/25" |

The table of contents is consistently one page early from Chapter 6 onward. The
`section` field on every excerpt carries the page the quote was actually found
on, computed mechanically from the PDF, not from the contents page.

Key tables: Table 1, Types of Licenses, page 6-7. Table 2, Testing Requirements
for Class D Licenses, page 10. Table 3, Fees, page 11. State speed limit table,
page 41. Estimated emergency stopping distance table, page 42. Unlawful parking
list (thirteen items), page 49. Point schedule, page 71.

## 4. What the handbook does not say

The Oklahoma manual is unusually complete for a state handbook. It prints the
statutory speed table, the whole unlawful-parking list with distances, the
point schedule and most penalty amounts, all of which many states leave to the
statute. The gaps that do exist are narrow:

| Missing from the manual | Supplied by |
|---|---|
| Written test length, pass mark, time limit, online attempt count | Service Oklahoma Written Knowledge Test page |
| The 180-day permit hold, the 50 hours of supervised driving including 10 at night, and the "no traffic convictions for 180 days" condition | Service Oklahoma Intermediate License page (the manual describes the graduated licence in prose and gives 180 days in Table 1, but never lists the hours) |
| The Work Zone Safe course requirement for an intermediate licence under 18 | Service Oklahoma Intermediate License and Teen Driving pages |
| That an 18+ applicant needs no learner permit at all, and the 30-day hold if they choose to have one | Service Oklahoma Learner Permit page FAQ |
| The signalling distance stated as a legal requirement rather than advice ("not less than the last one hundred (100) feet traveled") | 47 O.S. Section 11-309(2) |
| The 200-foot cap on travel in a two-way left-turn lane | 47 O.S. Section 11-309(3) |
| The left-lane rule's actual scope, including the city-limits and county-road carve-outs | 47 O.S. Section 11-309(4) |
| The 100-foot limit on driving left of center approaching an intersection, railroad crossing, bridge, viaduct or tunnel | 47 O.S. Section 11-306 |
| The Bernardo-Mills Law's own terms and its $1,000 / $2,500 fines | 47 O.S. Section 11-314 |
| The 200-foot minimum spacing in a caravan or motorcade, stated as law | 47 O.S. Section 11-310(d) - the manual gives the same figure as advice |
| The right-of-way default for county roads, private drives and unpaved roads meeting paved ones, whether or not a sign is present | 47 O.S. Section 11-401(A) |
| The dead-red allowance for a motorcycle at a signal that will not detect it | 47 O.S. Section 11-202(3)(d) |

Two things I could not source and therefore did not build a question on: the
school-bus stopping DISTANCE (the manual gives the duty and the one-year
revocation, but no distance, and 47 O.S. Section 11-705 was not among the
sections fetched), and any fine figure for the school-bus offense. Every
school-bus question in the bank is written on the duty, the two exemptions and
the revocation, all of which the manual states directly on page 30.

## 5. Conflicts

1. **Permit hold before the drive test - 180 days vs 6 months.** Table 1 on
   page 6 says a 16-year-old's driving test "can be taken 180 days after the
   permit is issued". Table 2 on page 10 says "Must be 16 years old and have had
   your permit for at least 6 months". The Service Oklahoma Intermediate
   License page says 180 days. Resolved by using 180 days throughout, which
   satisfies every reading, and `ok_s6_30`'s trap note states the discrepancy
   openly rather than hiding it.
2. **Liability minimums - page 16 vs page 72.** The page 16 box prints
   "$25,000 for injury or death of two or more persons. $50,000 for injury or
   death of two or more persons", which is internally incoherent. Page 72
   prints the same list correctly as "$25,000 for injury or death of one
   person / $50,000 for injury or death of two or more persons / $25,000 for
   property damage". The bank quotes and teaches the page 72 wording, and
   `ok_s5_27`'s trap explains why. The page 16 slip is preserved in the
   excerpts file header rather than corrected in a quote.
3. **Class D age labelling.** Table 1's "Class D Intermediate License" row is
   printed as "16 16 1/2 16" in the age column, which the surrounding text
   resolves: 16 with a driver education completion certificate, 16 and a half
   without one. The Intermediate License page states the same split cleanly and
   is what the bank follows.
4. **Motorcycle-only restriction speed.** Page 7 says a rider on a machine over
   150cc but not over 300cc "may drive the posted speed limit"; page 14's
   restriction code 0 says a machine under 150cc "may not exceed 35 mph". These
   are consistent once read carefully (different displacement bands), but the
   two pages state them in opposite directions. No question was built on this,
   since the Class D test is not the motorcycle test.

No conflict was resolved silently.

## 6. What learners report

52 Reddit threads were fetched with `scripts/fetch-reddit.py` across
r/oklahoma (18 threads), r/DMV (13), r/tulsa (7), r/okc (7) and r/driving (7), saved to
`tmp/oklahoma-reddit-*.txt`. Of those, 18 carried something usable about the
Oklahoma written or drive test and are listed below; a further dozen were
generic "is the permit test hard" threads about other states, and the rest were
Oklahoma politics, news items or unrelated posts the search returned.
Everything below is a paraphrase. No comment
text is reproduced, and no question in the bank was written from anyone's
memory of a real exam item - each was written from the manual or the statute
after a thread pointed at the rule.

| Thread | Sub | Year | Paraphrase of the claim | Shaped |
|---|---|---|---|---|
| "How Difficult Is The Driver's Permit Test Here?" | r/oklahoma | 2023 | A commenter identifying as a former driver licence examiner says to get the current book off the state site and study only that, ignoring apps and paid sites, and to pay special attention to the signage sections. | Set 6 sign weighting; the excerpts file's insistence on the current edition |
| Same thread | r/oklahoma | 2023 | A parent reports their child used an older edition of the handbook, found things had changed, and did not pass first time. | Recording `handbookEdition` and `contentDate` prominently |
| Same thread | r/oklahoma | 2023 | A commenter describes failing on a backing question because they answered about checking the rearview mirror, when the manual's rule is not to depend on the mirror for backing. | `ok_s5_01` |
| "Is the written permit test for driving hard?" | r/oklahoma | 2023 | A commenter reports failing after relying on online practice tests, and being told by the proctor that those tests set candidates up for failure. | The decision to source every fact to the manual or statute rather than to any prep material |
| Same thread | r/oklahoma | 2023 | An older commenter recalls a test where the great majority of questions were about what to do at a school bus with its lights on. | Heavy school-bus coverage: `ok_s5_05`, `ok_s5_06` |
| "permit test?" | r/oklahoma | 2025 | A commenter states the test is 15 out of 20 with an hour allowed - which matches the official page exactly. | Confirmed against the Written Knowledge Test page before use; `ok_s6_06` |
| "Permit test question" | r/oklahoma | 2023 | The poster links a 2023-dated copy of the manual URL; the current file at the same path is the 11/24/25 revision. | Why the bank cites the live URL and records the edition separately |
| "Is this the actual written test? I'm confused" | r/oklahoma | 2024 | Posters are unsure whether the state's own online test page is the real test; another links the official written-test page. | `officialInfoUrl` set to that page |
| "Myth or truth?" | r/oklahoma | 2026 | A poster asks whether depositing $100,000 with the state treasurer substitutes for liability insurance. Nobody in the thread can confirm it. | Not used as a fact. The manual only states the 25/50/25 minimums, so `ok_s5_27` tests those |
| "How difficult is the Oklahoma driving test?" | r/oklahoma | 2023 | Commenters say to be ready for parallel parking and that it varies by testing location. | `ok_s5_22` |
| "If you fail parallel parking on the driving test can you still get your license?" | r/oklahoma | 2018 | Commenters report parallel parking being worth a small share of the score, and separately that hitting a cone is treated as hitting a car. Others report tests with no parallel parking at all. | Not used as fact - the scoring split is not in any official source. Used only to confirm parallel parking is a scored manoeuvre, which the manual and the Intermediate License page both list |
| Same thread | r/oklahoma | 2018 | A commenter reports failing for a rolling stop, and another for not turning to look over both shoulders before reversing. | `ok_s5_01`, `ok_s6_01` |
| Same thread | r/oklahoma | 2018 | A commenter reports a failure caused by not asking the examiner to fasten their seat belt before pulling away. | `ok_s6_26` |
| "Driving test help!!" | r/okc | 2026 | Commenters advise signalling every time you leave a parking space and physically moving your head left-right-left at every intersection. | `ok_s6_09`, and the `crossing-intersection-slow` excerpt |
| Same thread | r/okc | 2026 | A commenter says not to forget the uphill parking rules, and another reports being marked down for not rolling back until the tire touched the curb. | `ok_s4_26`, `ok_s5_02` |
| "How many things can I miss on my drivers test before it fails me - Oklahoma" | r/driving | 2025 | The poster states the hill-parking rules and gets them wrong in both directions; a reply does not correct them. | `ok_s5_02` was written as the corrective, with the reversed version as the trap |
| "permit test?" (Tulsa) and "Learner's Permit Question" | r/tulsa | 2025 | A parent reports their child could get a permit before turning 15 and a half only because they were enrolled in a driver education course first, and that the rules are hard to find. | `ok_s4_35`, `ok_s6_30`; the Learner Permit page confirms the enrolment condition at 15 |
| "Sister needs drivers license in Oklahoma but only has her learners permit" | r/DMV | 2024 | Commenters quote the out-of-state 18+ rule as a 30-day permit hold. | Confirmed against the Learner Permit page, then used for `ok_s5_33` |
| "Tulsa Driving Test - What Would You Like Everyone to Know" | r/tulsa | 2024 | The most-repeated complaints are people treating the left lane as a cruising lane, people merging onto the highway at 45 when traffic is at 65-75, and failure to signal at all or signalling only after braking. | `ok_s5_07`, `ok_s5_08`, `ok_s5_04` |
| "How to go to driving test without someone to drive you?" | r/tulsa | 2026 | Multiple commenters report candidates being failed for driving themselves to the drive test unlicensed. | Not a manual rule and not built into a question; it is the licensing consequence of `unauthorized-driving`, manual page 13 |
| "Drivers license" | r/okc | 2026 | A new resident reports being told a rental car cannot be used for the drive test and that proof of insurance is required. | Confirmed against the Intermediate License page's "At Your Visit" list |
| "Advice When Taking The Written Test?" | r/driving | 2026 | A commenter says to study the source material and specifically the distance requirements, giving "must signal for a turn at x feet" as the example, and reports failing a renewal test on a motorcycle displacement figure. | `ok_s5_03`, `ok_s5_04`, `ok_s5_11`, `ok_s5_18` |
| "how easy was written test in your state?" | r/driving | 2025 | Several commenters describe fine and penalty amounts as the questions they found hardest and least useful, including one who missed the distance at which high beams must be dimmed. | `ok_s5_03`, `ok_s5_18` |
| "People who failed the permit test then passed, what actually changed the second time?" | r/DMV | 2026 | The recurring answer is that the material was all in the handbook and the failure came from choosing the answer that sounded most cautious rather than the one the book states. | The design of set 5's traps, where the tempting answer is usually the over-cautious one |

Three strongest traps found, all verified against the manual before use:

1. **The backing question.** "Check your mirror" is the safe-sounding answer
   and it is wrong. The manual says never use your rearview mirror for backing
   up - you turn and look through the rear window. `ok_s5_01`.
2. **Hill parking direction.** Downhill the wheels go toward the curb, uphill
   against a curb they go away from it, uphill without a curb they go sharply
   right. A public thread had two people state it and both had it backwards.
   `ok_s4_26`, `ok_s5_02`.
3. **The printed distances.** 100 feet to signal, 1,000 feet to dim for
   oncoming and 600 feet for the vehicle ahead, 200 feet of clear road before
   passing, 15 feet from a hydrant and 20 from a crosswalk. Every one of these
   has a plausible neighbor on the same page, and learners consistently name
   these as the questions they lose. `ok_s5_03`, `ok_s5_04`, `ok_s5_11`,
   `ok_s6_21`.

## 7. Local gotchas

The five in `localGotchas`:

1. **The speed ladder has six rungs and they are all different.** 80 turnpike,
   75 controlled access, 65 undivided state highway, 55 county road, 35 state
   park, 25 marked school zone outside a municipality. Most states publish two
   or three defaults; Oklahoma publishes six, and a learner who memorizes "75
   on the highway" gets both the turnpike and the state-highway question wrong.
2. **The parking distances are a thirteen-item list, not a rule of thumb.** 15
   from a hydrant, 20 from a crosswalk at an intersection, 30 approaching a
   signal or stop sign, 50 from the nearest rail, 20 from a fire station
   driveway and 75 opposite one. Neighboring states use 10 feet for the
   hydrant, and that figure travels with people.
3. **There is no school-bus stopping distance, but there is a one-year
   revocation.** Learners look for a number because most states publish one.
   Oklahoma's manual publishes a consequence instead, and only two exemptions:
   the bus is on a different roadway, or it is in a loading zone beside a
   controlled-access highway where pedestrians cannot cross. A painted center
   line is not a different roadway.
4. **Under 21 the standard is any measurable quantity, and cannabis has no
   threshold at all.** The 0.08 figure everyone memorizes is the adult limit. A
   first zero tolerance offense costs six months, a second twelve. Separately,
   a medical marijuana card does not permit driving with any detectable level.
5. **The graduated licence runs on hours, passengers and convictions.** 5 a.m.
   to 10 p.m., one passenger unless everyone lives in your house, and a
   moving-violation conviction freezes you at your current level until six
   months from the conviction date. The clock runs from the conviction, not
   from paying the fine.

## 8. Verification

Run 2026-09-06 against the tree as it stands.

```
npx tsx scripts/extract-quotes.mjs oklahoma
  tmp/oklahoma-quotes.json: 338 quotes

python scripts/verify-excerpts.py oklahoma tmp/oklahoma-handbook.pdf \
    tmp/oklahoma-statute.txt tmp/oklahoma-learner-permit.txt \
    tmp/oklahoma-intermediate-license.txt tmp/oklahoma-new-dl.txt \
    tmp/oklahoma-teen-driving.txt tmp/oklahoma-writtentest.txt
  oklahoma: 338/338 quotes verified verbatim against 7 source(s)
```

Every excerpt in `excerpts.ts` was produced by a mechanical span extraction
(`tmp/ok-build-excerpts.py`, working from `tmp/ok-specs.json`) that pulls the
text out of the same normalised source stream `verify-excerpts.py` reads, so a
quote cannot drift from its source by transcription. The four permitted
normalisations were applied to the extracted text and nothing else. Source
typos are preserved, including "PENALTIES FOR DRIVING WITH OUT A VALID
LICENSE", "con struction zones", "A child, at least four 4 years of age" and
"TRANSISTION AREA".

```
python scripts/build-excerpt-snippets.py oklahoma tmp/oklahoma-handbook.pdf
  oklahoma: 282 snippets rendered, 56 not located

npx tsx scripts/validate-driving.mjs --only oklahoma
  snippets: 282 in manifest, 282/338 excerpts covered (83%)
  quotes verified: 338/338 verbatim against 7 sources
  excerpts: 338 (212 unused), questions wired: 195/195 (100%), quoted total: 56.2k chars
  questions: 195
  answer positions: A:23% B:31% C:26% D:21%
  context: 100%  source links: 100%  starred: 20%
  ERRORS: 0   WARNINGS: 0

npx tsc --noEmit -p .
  no errors in src/lib/driving/oklahoma
```

Of the 56 quotes not located in the PDF, 48 are statute or Service Oklahoma web
quotes and cannot appear in the handbook at all. The remaining 8 are handbook
quotes that cross a column or page break in a way the snippet locator cannot
resolve, so 282 of 290 handbook quotes rendered, or 97 percent. All 56 are
verified verbatim by `verify-excerpts.py` against their own sources; only the
picture is missing, never the citation.

Three PNGs were opened and inspected after rendering
(`stop-sign-octagon`, `speed-table`, `hill-parking-downhill`, plus
`parking-hydrant-15` and `zero-tolerance-under-21`): the crops are tight, no
line is clipped at the left edge, and the highlight covers the quoted span.

Answer positions were chosen as each question was written and then adjusted by
relocating the correct choice within individual questions, never by shuffling a
whole set, so the deliberate ordering of tempting wrong answers survives.
Numeric ladders were left ascending and were excluded from the adjustment.
