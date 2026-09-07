# Hawaii - research note

Bank built 2026-09-07. 195 questions across six sets, 378 verbatim excerpts.

Hawaii is the one jurisdiction on this site with **no state DMV at all**. Driver
licensing is run by the **four counties** - the City and County of Honolulu,
Hawaii County, Maui County and Kauai County - each with its own fee, its own
appointment system and its own offices. The State of Hawaii publishes the book
you are tested on and writes the law behind it, and it runs the statewide online
test, but it does not issue a licence to anybody. That split runs through this
whole note: the *rules* are cited to the State, and the *test* is cited to a
county.

---

## 1. Sources read

| Source | Publisher | Edition label | URL | Fetched | How |
|---|---|---|---|---|---|
| State of Hawaii Driver's Manual, 132pp | Hawaii Department of Transportation (printed by Hagadone Media Group-Hawaii) | Copyright line reads "(c) Copyright 1977, 2006, 2018, 2020,2023 Director of Transportation, State of Hawaii"; the served file is named `2023-Hawaii-Drivers-Manual_5.375x8.375_Final-r3-Digital-071924web.pdf` and its PDF creation date is 2024-07-19 | https://hidot.hawaii.gov/highways/files/2024/11/2023-Hawaii-Drivers-Manual_5.375x8.375_Final-r3-Digital-071924web.pdf | 2026-09-07 | Direct download. sha256 of the served file matched the cached copy byte for byte on re-fetch. |
| Hawaii Revised Statutes, Title 17 - chapters 286, 291, 291C, 291E | Hawaii State Legislature | "hrscurrent" | https://www.capitol.hawaii.gov/hrscurrent/Vol05_Ch0261-0319/ | 2026-09-07 | Direct, section by section. The site is behind Cloudflare and began refusing later in the day; see §5. |
| Instructional Permits - Class 3 (Non-Commercial) | County of Kauai, Department of Finance, Division of Motor Vehicles | undated web page | https://www.kauai.gov/Government/Departments-Agencies/Finance/Drivers-Licensing-and-Motor-Vehicles/Instructional-Permits | 2026-09-07 | Headless browser (the site refuses plain HTTP clients with a 403) |
| Online Learner's Permit Test | City and County of Honolulu, Department of Customer Services | undated web page | https://www.honolulu.gov/csd/online-permit-test/ | 2026-09-07 | Headless browser |
| Driver's License Procedures | City and County of Honolulu, Department of Customer Services | undated web page | https://www.honolulu.gov/csd/drivers-license-procedures/ | 2026-09-07 | Direct |
| Driver's License FAQ | City and County of Honolulu, Department of Customer Services | undated web page | https://www.honolulu.gov/csd/drivers-license-faq/ | 2026-09-07 | Headless browser |
| Remote Online Written Test - FAQ | County of Hawaii, Vehicle Registration and Licensing Division | undated web page | https://www.vrl.hawaiicounty.gov/driver-s-licensing/remote-online-written-test | 2026-09-07 | Direct |
| Online Learner's Permit Test (statewide) | Hawaii Department of Transportation | undated web page | https://hidot.hawaii.gov/online-learners-permit-test/ | 2026-09-07 | Direct |
| "Written test for driver's permit now available online statewide" | Hawaii Department of Transportation | news release, posted 2024-12-11 | https://hidot.hawaii.gov/administration/written-test-for-drivers-permit-now-available-online-statewide/ | 2026-09-07 | Direct. Background only; nothing is quoted from it. |
| What you need to know about Hawaii's Graduated Licensing Program | Hawaii Department of Transportation | "Effective January 9, 2006" | https://hidot.hawaii.gov/highways/files/2017/01/GDL-Brochure.pdf | 2026-09-07 | Direct |
| Hawaii Administrative Rules chapter 19-122 | Hawaii Department of Transportation | 74pp | linked from https://hidot.hawaii.gov/highways/home/doing-business/hawaii-administrative-rules/ | 2026-09-07 | Direct - **but see §5. It is a page-image scan with no text layer, and nothing is quoted from it.** |

**Extraction check, done before a single quote was written.** The manual's PDF
carries a clean character map. Across its 132 pages there is not one token with
the shape of a broken ligature - a digit wedged inside a word, the failure that
turns "traffic" into "traf4c" in Nebraska's manual - and the words come out as
words. The builder (`tmp/hi_build_excerpts.py`) refuses any candidate quote
containing such a token anyway, as a standing guard rather than a one-time
check, and refuses any quote containing a Unicode replacement character.

**Every quote was lifted mechanically**, as a contiguous substring between a
named start phrase and a named end phrase, from the same normalised text
`scripts/verify-excerpts.py` reads. Nothing was retyped and nothing was
repaired by hand.

**Not used as sources:** no third-party practice site, no prep app, no
aggregator PDF, and nothing from Reddit was used as a statement of law. See §6
for how the forum material was used.

---

## 2. Test format

| Item | Value | Source |
|---|---|---|
| Questions | 30, multiple choice | Kauai County ("Pass a 30 question multiple choice written General Driving Test Questions"); Honolulu ("The 30 question test"); Hawaii County ("the 30 question test") |
| Pass mark | more than 6 errors fails, so 24 of 30 (80%) | Kauai County: "If you obtain more than 6 errors, you will fail the examination" |
| Time limit | 60 minutes, on the online version | Honolulu: "You have 60 minutes (one hour) to complete the 30 question test." No county publishes a time limit for the in-office test. |
| Languages | English and Spanish, and the online test can read the questions aloud | Honolulu; Hawaii County |
| Where | Online at knowtodrive.com/hawaii from a desktop or laptop with a webcam (no phone, tablet or touchscreen), or in person at a county driver licensing centre by appointment | HDOT statewide page; Honolulu |
| Retest wait | 7 days after a knowledge failure, paying the fee again. Honolulu also caps attempts at two in one day. | Honolulu; Hawaii County; Kauai County |
| Fee | Set by the county, not the State: $12 Honolulu, $11 Hawaii County, $20 Kauai, $25 Maui, each including a $10 transaction and card charge | Honolulu ("The cost is the county fee plus $10 ...") |
| Early-stop rule | None on knowledge. The online proctoring does stop the test: two warnings for looking away from the screen, and the third ends the attempt as a failure. | Hawaii County FAQ |
| After passing | Book a county licensing appointment - within 30 days (HDOT statewide page) or 60 days (Honolulu) - and complete the permit in person with documents, an eye test, a photograph, fingerprints and the permit fee | HDOT; Honolulu; Kauai; Hawaii County |
| Wrong county | A certificate of completion issued for the wrong county is refused, with no refund | Hawaii County FAQ; Maui DMV page |
| Minimum age | 15 years and 6 months | HDOT statewide page; HRS 286-110(a); manual page 11 |

`officialTest` in `index.ts` is set to 30 questions, 24 to pass, 60 minutes,
with the rest of the above in `notes`.

**A live conflict on the question count is recorded in §5.**

---

## 3. Section and page map

The manual's **printed page numbers are its PDF page numbers**, 1 to 132, so
every `#page=N` anchor in the bank lands on the printed page it cites. The
table of contents on page 7 gives:

| Section | Printed page |
|---|---|
| Message from the Governor | 3 |
| List of responsible agencies | 4 |
| Introduction | 6 |
| Table of contents | 7 |
| Definition of terms | 8 |
| Chapter I - Licensing of Drivers | 10 |
| Chapter II - Vehicle Equipment and Inspection | 18 |
| Chapter III - Vehicle Registration | 21 |
| Chapter IV - The Driver | 24 |
| Chapter V - Traffic Laws, Ordinances, Rules and Regulations | 26 |
| Chapter VI - Signals, Signs and Lane Markings | 33 |
| Chapter VII - Crash Procedures | 52 |
| Chapter VIII - No Fault Insurance / Financial Responsibility | 53 |
| Chapter IX - Alcohol and Other Drugs | 55 |
| Chapter X - Safe Driving Techniques | 57 |
| Chapter XI - Trucks, Buses and Motorcycles | 85 |
| Chapter XII - Pedestrian Safety | 95 |
| Chapter XIII - Bicycle Safety | 97 |
| Appendix - Questions with Illustrations | 99 |
| Driver licensing and vehicle registration offices | inside front cover, 2, 131 |

Two headings in the body differ slightly from the contents page: Chapter V is
headed "TRAFFIC LAWS AND REGULATIONS" on page 26 and Chapter VI is headed
"TRAFFIC SIGNS, SIGNALS AND MARKINGS" on page 33. The `section` fields in
`excerpts.ts` follow the body headings.

The appendix runs from page 100 to page 127 and prints **177 numbered practice
questions**, each with a "Ref. Pg." column pointing at the page the answer comes
from. It is the closest thing to an official study guide Hawaii publishes, and
it shaped how this bank is weighted - but not one of its questions is
reproduced here. It was used only to learn which rules get tested.

Two extraction artifacts in the manual are worth recording for a future editor:

- **Page 14** loses a number. The line reads "The minimum age to obtain a
  driver's license is [blank] years." because the figure sits in a graphic. The
  age is stated as 17 on page 12 and in the GDL brochure, and that is what the
  bank uses.
- **Pages 21-22** interleave a sidebar into the middle of a sentence about the
  30-day address-change duty, so the paragraph cannot be quoted as a contiguous
  run. The excerpt library uses Honolulu's own statement of the driver's-licence
  version of that rule instead.

---

## 4. What the handbook does not say

| Rule the test can reach | Where the manual leaves it | Statute that supplies it |
|---|---|---|
| Any default speed limit at all | The manual gives the basic rule and says limits are posted, and never states a default | HRS 291C-102: a limit exists only where established by county ordinance or by an official sign. **Hawaii has no statewide default.** |
| Excessive speeding | Not mentioned | HRS 291C-105: 30 mph or more over the applicable limit, or 80 mph or more regardless, a petty misdemeanour |
| School zone speeding fine | Not mentioned | HRS 291C-104(c): $250, plus up to $100 trauma surcharge and $25 safe routes surcharge |
| Any hands-free law | Chapter X gives advice about phones and states no law | HRS 291C-137: holding any mobile device is the offence; "operate" includes being temporarily stationary at a light or stop sign; $300, $400 in a school or construction zone; no hands-free use at all under 18 |
| Seat belt penalty | Cites the statute number, no figure | HRS 291-11.6(e): $45 per violation plus a $10 neurotrauma surcharge |
| Keep right when slower | "drive in the extreme right lane" - no statutory force given | HRS 291C-41(b) |
| Five-vehicle pull-over rule | Not mentioned (added by Act 175 of 2024) | HRS 291C-41(d) |
| Return distance when passing | Manual gives only the mirror test | HRS 291C-45: back in lane before coming within 200 feet of an approaching vehicle |
| Outer limit at a railroad crossing | Manual gives only the 15-foot minimum | HRS 291C-91: stop within 50 feet but not less than 15 |
| Crosswalk fine and the duty to *stop* | Manual says you must stop, gives no penalty | HRS 291C-72: $150 first, $300 and 90-day revocation for a second within a year, $1,000 and 180 days thereafter |
| What counts as being in a crosswalk | Not defined | HRS 291C-72 and 291C-32(d): any part or extension of the pedestrian, including a wheelchair, cane, crutch or bicycle, past the curb |
| Jaywalking fine | "Jaywalking is illegal" | HRS 291C-73(e): $100 |
| Bicycle helmets under 16 | Manual says a helmet may not be legally required | HRS 291C-150: required under sixteen; up to $25, parent liable |
| Bicycle lighting hours | "if you ride at night" | HRS 291C-147: thirty minutes after sunset to thirty minutes before sunrise, 500 feet front visibility, 4-square-inch rear reflector at 600 feet |
| Countdown-timer pedestrian signals | Manual predates them | HRS 291C-33(3) |
| OVUII penalties | Manual gives the administrative revocation only | HRS 291E-61(b): 14-hour program, 1 year to 18 months revocation, ignition interlock throughout, plus community service, jail or a $250-$1,000 fine |
| "Highly intoxicated driver" | Not mentioned | HRS 291E-1: .15 or more |
| "Measurable amount of alcohol" | Manual gives .02 for under-21 without defining it | HRS 291E-1: .02 or more but below .08 - which is exactly what the manual's .02 means |
| Reckless driving and inattention to driving | Not mentioned | HRS 291-2 ($1,000 / 30 days) and HRS 291-12 ($500 / 30 days) |
| Open container placement | "storing an opened container ... is prohibited" | HRS 291-3.3: must go in the trunk, or an area not normally occupied by driver or passengers; a glove compartment does not count |
| Instruction permit validity and supervision | Manual gives the age and the 21-year-old rule | HRS 286-110: valid one year; supervisor must be 21+, licensed for that category, in the passenger seat; renewal window 30 days before to 90 days after expiry |
| U-turn visibility | Not mentioned | HRS 291C-82: no U-turn on a curve or near a crest where you cannot be seen within 500 feet |

---

## 5. Conflicts, and how each was resolved

**1. How many questions are on the test - 25 or 30?**
HDOT's statewide page still says "The 25-question test is currently offered in
English and Spanish". All three counties that publish a figure say **30**:
Honolulu ("The 30 question test ... has a one hour time limit"), Hawaii County
("You have 60 minutes (one hour) to complete the 30 question test") and Kauai
("Pass a 30 question multiple choice written General Driving Test Questions").
The counties administer the test and issue the permit, so the bank uses 30, and
`officialTest.notes` says plainly that an older statewide page still says 25.

**2. Child restraints: the manual is four years out of date.**
Page 20 prints the pre-2022 rule - "Children under age 4 must be in a child
restraint; children under age 8 must be belted on a booster seat if the child is
under four feet and less than forty pounds". Act 122 of 2022 rewrote HRS
291-11.5 into four bands ending at ten, with a four-foot-nine height test.
**The bank follows the statute** (`hi_s5_04`), and says so in the question's
trap note. No question is built on the manual's version.

**3. The school bus rule differs in three ways.**
Manual page 96 says stop "before reaching the school bus", says nothing about a
residential area, and says failing to comply "can cost you $1,000". HRS
291C-95(a) requires a stop "not less than twenty feet from the school bus",
limits the section to a bus stopped "on a highway or road in a residential
area", and sets the penalty at "not more than $500 or ... community service, or
both". **No question turns on the fine or on the distance.** The two questions
on school buses (`hi_s1_08`, `hi_s5_25`) turn on the duty to stop and to stay
stopped until the bus moves or the lamps go out, which both readings agree on,
and `hi_s5_25` names the discrepancy in its trap note.

**4. Bicycle helmets.**
Manual page 98: "Although you may not be legally required to wear a helmet, it
is a good idea." HRS 291C-150 requires one under sixteen. The bank follows the
statute (`hi_s5_05`) and says the manual's sentence is written for adults.

**5. Twelve HRS section pages came back with mis-decoded punctuation.**
286-117, 286-124, 286-125, 286-132, 291C-23, 291C-26, 291C-47, 291C-81,
291C-95, 291C-121, 291C-122 and 291E-68 arrived with Unicode replacement
characters where the section symbol and the hard spaces sit, at the **start of
each numbered paragraph**. The prose itself is intact. The excerpt builder
refuses any quote containing one of those characters, so **no quote in the bank
crosses one**, and each affected quote starts after the paragraph marker. A
future editor re-fetching these should check the page encoding.

**6. Hawaii Administrative Rules 19-122 could not be quoted.**
The rules that actually govern county driver licensing are published only as a
74-page page-image scan with no text layer at all (every page returns zero
characters and one image). Nothing is quoted from it, because a quote produced
by an OCR pass is not a quote. Where a rule was needed and the manual was
silent, the statute was used instead.

**7. capitol.hawaii.gov began refusing automated clients mid-build.**
The statutory text was fetched successfully in the morning and the site's
Cloudflare protection later returned 403 to every client tried, including a
real headed browser. The cached text is what every statutory quote was lifted
from and verified against. The section-file URL convention
(`HRS_0291C-0032.htm`, `HRS_0291C-0121_0005.htm`) was confirmed independently
against the Legislature's own directory listing.

---

## 6. What learners report

37 threads were fetched with `scripts/fetch-reddit.py` and are cached in
`tmp/hawaii-reddit-*.txt`. **Eleven of them turned out not to be about driving
in Hawaii at all** - four are California knowledge-test threads from r/DMV, one
is a Honolulu Fire Department exam, one is Honolulu *building* permits, one is
Big Island observatory tours - and they were discarded. The 26 that are
Hawaii-relevant are below. Nothing here was treated as a statement of law: a
forum post is evidence about what confuses people, and every claim was taken
back to the manual or the statute and the question written from scratch.

| Subreddit | Thread | Year | Claim, in one line | Shaped |
|---|---|---|---|---|
| r/Hawaii | Does anyone else feel the permit test questions/book is extremely confusing | 2021 | The hill-parking answer is "right" and the poster read "away from the edge of the road" as meaning left; three commenters had to explain that the edge is the curb | `hi_s1_24`, `hi_s5_06` |
| r/Hawaii | (same thread) | 2021 | A signal question the poster could not parse turned out to be "never enter an intersection you cannot leave" | `hi_s3_22` |
| r/Hawaii | (same thread) | 2021 | Two commenters argue about whether a school sign means School Crossing or School Zone; the manual says it can mean either | `hi_s5_10` |
| r/Hawaii | Rules of the road test being considered for driver's license renewals | 2026 | Repeated complaint that drivers do not know the left lane is for passing, or what a solid line means | `hi_s5_08`, `hi_s5_34` |
| r/Hawaii | (same thread) | 2026 | A commenter describes a signal that had failed at night and drivers going straight through in both directions | `hi_s5_09` |
| r/Hawaii | (same thread) | 2026 | "changing lanes in an intersection is illegal ... blocking an intersection is illegal" listed as things most drivers do not know | `hi_s3_34`, `hi_s3_22` |
| r/Hawaii | How do you pass the road test? | 2026 | Failures for rolling past the stop line, missed head checks, and turning across a car judged too close | `hi_s3_14`, `hi_s2_08`, `hi_s1_21` |
| r/Hawaii | (same thread) | 2026 | A tester failed a candidate over a pedestrian who entered the crosswalk after the car had entered the intersection | `hi_s6_29` |
| r/Hawaii | taking my road test at ko'olau on friday | 2023 | Advice thread: signal every time, full stops, watch the speed limit | `hi_s3_19` |
| r/Hawaii | Has this ever happened to you while taking a road test? | 2024 | Examiners give instructions that would break a rule if followed blindly | `hi_s3_34` |
| r/Hawaii | Renewing HI Driver's License Eye Exam | 2026 | Renewal turns on the vision test; several posters did not know an expired licence is void | `hi_s2_30` |
| r/Hawaii | Drivers Testing Ideas | 2026 | Road test must be taken in the county named on the letter; appointment scarcity | `officialTest.notes` |
| r/Hawaii | Hawaii to get new driver's license, state ID design | 2026 | Card redesign; no rule content | - |
| r/Hawaii | Road test question (Oahu) | 2015 | Older thread on the same stop-line and parallel-parking failures | `hi_s3_18` |
| r/Hawaii | Practice test Hawaii permit exam | 2021 | Joke post about a practice question; no rule content | - |
| r/Honolulu | Experience with the Kapahulu Express Road Test | 2023 | Do not turn right on red on the test; a confusing bike lane on the route; no lane change over a crosswalk | `hi_s6_01`, `hi_s4_23`, `hi_s3_34` |
| r/Honolulu | Kapahulu Road Test Route | 2023 | Examiner insisted on a three-second count at stop signs that the poster could not find in the manual; poster is right, the manual has no such rule | not used as a rule; informed `hi_s6_17` |
| r/Honolulu | Oahu driving | 2025 | Turn signals, merging and left-lane camping named as the local failures | `hi_s5_08`, `hi_s3_19` |
| r/Honolulu | Is it just me or you can drive perfectly safe here and still get hit | 2026 | Lane discipline on the H-1; merging | `hi_s4_10` |
| r/Honolulu | Why are waits so long for Oahu driver licensing appointments? | 2026 | Appointment scarcity drives people to the online test | `officialTest.notes` |
| r/Honolulu | Driving Uber or Lyft? | 2023 | Licensing and insurance, no rule content | - |
| r/Honolulu | Newly redesigned Hawaii driver's licenses | 2026 | Card redesign; no rule content | - |
| r/Honolulu | People skeptical of the new design | 2026 | Card redesign; no rule content | - |
| r/maui | Struggling to Pass the Driving Test in Kahului | 2025 | Speed limits on the route; parallel parking; wheel position when parked | `hi_s3_18`, `hi_s5_06` |
| r/maui | Road Test / Kihei road test help? / Getting my license | 2025-2026 | Parallel parking dominates the anxiety; blinker after parking | `hi_s3_18` |
| r/maui | Disappointment | 2025 | County office service; no rule content | - |
| r/maui | Motorcycle license | 2026 | Category 2 route; out of scope for this bank | - |
| r/BigIsland | Hilo DMV turning people away | 2020 | County appointment friction | `officialTest.notes` |
| r/BigIsland | Motorcycle license and insurance | 2025 | Category 2; out of scope | - |

**The three strongest traps that came out of it**, all of which became
`commonlyMissed` questions:

1. **Hill parking.** Hawaii tells you to turn the wheels right whether you face
   uphill or downhill. Nearly every mainland manual splits the two cases. This
   is the item Hawaii learners argue about most, and the argument in the 2021
   thread was about the wording as much as the rule.
2. **The left lane.** Multiple threads name left-lane camping as the local
   plague and several posters clearly believe the limit is the only constraint.
   HRS 291C-41(b) is about the speed of the traffic around you, not the sign.
3. **Blocking the intersection.** Named in two separate threads, once as a
   confusing test question and once as a list of things drivers do not know.

Beyond the forums, the strongest non-forum signal was **the manual's own
appendix**: 177 practice questions with page references, which say plainly which
rules the State thinks matter. Every chapter of the book is represented there,
including the ones learners skip, which is why set 4 walks the whole manual.

---

## 7. Local gotchas

The six in `localGotchas`, and why each one catches people:

1. **Hill parking: wheels right, uphill or downhill.** The mainland rule splits
   the two cases and Hawaii does not. A driver arriving from anywhere else
   answers from habit and gets it wrong, and the manual's phrasing ("toward the
   edge of the road") reads backwards to people who think of the edge as the
   line beside them rather than the curb.
2. **There is no statewide default speed limit.** Every other state in this
   collection has a residential or urban default to fall back on. Hawaii's
   limits exist only because a county ordinance made them or a sign was posted,
   so on an unposted road the basic rule is the whole of the law.
3. **Crosswalks: you stop, and you wait until they have passed your vehicle.**
   Hawaii uses "stop", not "yield", and it prices a first offence at $150 with a
   90-day revocation on the second within a year. You also may not pass any
   vehicle stopped at a crosswalk - which is the rule people break without ever
   seeing the pedestrian.
4. **The hands-free law is stricter than the manual admits.** Holding any
   device is the offence, and the statute defines operating to include sitting
   at a red light. Under 18 you may not use a hands-free device either. The
   manual states none of this, so a learner who studies only the book has never
   met the rule.
5. **The child restraint rules changed in 2022 and the manual still prints the
   old ones.** Anyone studying page 20 will learn an age cut-off of eight and a
   four-foot, forty-pound test that no longer exists.
6. **Licensing is county business.** The fee, the appointment system, the office
   hours and the deadline to come in after passing all differ by island, and a
   certificate of completion issued for the wrong county is refused with no
   refund.

---

## 8. Verification

Run 2026-09-07, in this order.

```
$ npx tsx scripts/extract-quotes.mjs hawaii
tmp/hawaii-quotes.json: 378 quotes

$ python scripts/verify-excerpts.py hawaii tmp/hawaii-handbook.pdf \
    tmp/hawaii-gdl-brochure.pdf tmp/hawaii-hrs.txt tmp/hawaii-kauai-permit.txt \
    tmp/hawaii-honolulu-permit-test.txt tmp/hawaii-honolulu-csd-dl.txt \
    tmp/hawaii-hidot-online-test.txt tmp/hawaii-county-vrl.txt
hawaii: 378/378 quotes verified verbatim against 8 source(s)

$ python scripts/build-excerpt-snippets.py hawaii tmp/hawaii-handbook.pdf
hawaii: 274 snippets rendered, 2 not located, 102 skipped as not in this document

$ npx tsx scripts/validate-driving.mjs --only hawaii
  snippets: 274 in manifest, 274/378 excerpts covered (72%)
  quotes verified: 378/378 verbatim against hawaii-handbook.pdf, ... (2026-09-07)
  excerpts: 378 (188 unused), questions wired: 195/195 (100%), quoted total: 65.2k chars
  questions: 195
  answer positions: A:25% B:26% C:25% D:24%
  context: 100%  source links: 100%  starred: 16%
ERRORS: 0   WARNINGS: 0

$ npx tsc --noEmit -p .
(no Hawaii errors)
```

Zero non-official matches and zero MANGLED warnings from `verify-excerpts.py`.

**The 102 "skipped as not in this document" are correct and expected**: they are
the statute, the GDL brochure and the county web pages, none of which live in
the handbook PDF the snippet builder crops from. Of the 276 quotes that *are*
from the handbook, 274 rendered - 99.3%.

**The 2 that did not locate** are `prevent-hydroplaning` and
`stop-sign-second-stop`. Both verify as verbatim substrings; the cropper simply
could not place them on a page, because both cross a hyphenated line break
("hydro-planing" is set across a column in the first, "traf-fic" in the second)
and the cropper searches the raw page words rather than the de-hyphenated
stream. Neither quote was altered to make the picture work, because a quote
edited to suit a renderer is no longer verbatim. `stop-sign-second-stop` is
cited by `hi_s6_17`, which still carries its section, page and deep link.

Three rendered PNGs were opened and inspected: `park-hill-wheels-right.png`,
`double-solid-yellow.png` and `crash-report-threshold.png`. All three show whole
lines with the quoted run highlighted, nothing clipped at the left margin.
