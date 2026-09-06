# Quebec - research note

Bank built 2026-09-06. 195 original questions in six sets, 192 verbatim
excerpts, all from material the SAAQ or the Quebec legislature publishes free
on its own site.

## 1. Sources read

All SAAQ pages were fetched directly on 2026-09-06 with a real browser
(`tmp/quebec_fetch.py`, Playwright + Chromium). saaq.gouv.qc.ca sits behind a
Radware bot manager that returns a captcha page to a plain HTTP client - the
first probe of the session came back as `Radware Bot Manager Captcha`
(`tmp/quebec-probe.html`) - so a scripted browser session was needed. No
archive snapshots were used anywhere in this bank; every source below is a
live official fetch.

### The two big PDFs, and why they are quotable

The SAAQ sells printed road-safety material through Les Publications du
Quebec, and the "Road Access Binder" that goes with the driving course is
available only through a recognised driving school. None of that is quoted
here and none of it was obtained.

What is quoted are the two reference guides the SAAQ itself links, free, from
its own pages. The "Obtaining a Passenger Vehicle (Class 5) Driver's Licence"
page and the "Preparing for the knowledge and road tests" page both carry a
"Preparing for the test - Reference guides" block listing:

> Driver's Handbook (PDF, 22.9 MB) ... Driving a Passenger Vehicle (PDF,
> 19.0 MB) ... Guide to Knowledge Test Illustrations (PDF, 5.6 MB)

and, separately, "Road Access Binder, available in French and English from
driving schools recognized by the SAAQ" - which is the paid one, and is not
on disk.

The links resolve to `saaq.gouv.qc.ca/blob/saaq/documents/publications/`.
The copies these quotes were cut from are:

| file | bytes | = | page says |
|---|---|---|---|
| `drivers-handbook.pdf` | 23,970,674 | 22.9 MB | 22.9 MB |
| `driving-passenger-vehicle.pdf` | 19,902,492 | 19.0 MB | 19.0 MB |
| `illustrated-knowledge-test-guide.pdf` | 5,883,209 | 5.6 MB | 5.6 MB |
| `accompagning-rider-guide-vehicle.pdf` | 732,983 | 715.8 KB | 715.8 KB |

Byte-for-byte the sizes the SAAQ's own page advertises. That was checked
before a single word was quoted, and it is written down here so a future
editor does not have to check it again.

### List

1. **Driver's Handbook**, Societe de l'assurance automobile du Quebec, **2nd
   Edition** (legal deposit 2018, ISBN 978-2-551-26246-5, 328 pages).
   https://saaq.gouv.qc.ca/blob/saaq/documents/publications/drivers-handbook.pdf
   Fetched direct 2026-09-06 via a warmed browser session
   (`tmp/quebec_download.py`). This is the edition the SAAQ links today; it is
   NOT current on several points (see section 5).
2. **Driving a Passenger Vehicle**, SAAQ (Adobe InDesign 17, 264 pages, PDF
   metadata dated 2022-01/2023-02, no printed edition label).
   https://saaq.gouv.qc.ca/blob/saaq/documents/publications/driving-passenger-vehicle.pdf
   Fetched direct 2026-09-06. This is the book behind the third section of the
   test (behaviours and techniques).
3. **Guide to Knowledge Test Illustrations**, SAAQ (1 page, 2024-08).
   https://saaq.gouv.qc.ca/blob/saaq/documents/publications/illustrated-knowledge-test-guide.pdf
   Read, not quoted. It shows how the test draws turn signals, brake lights,
   flashing lights, sun glare, wind and rain, which is what makes the
   illustrated questions answerable.
4. **Accompanying Rider's Guide - passenger vehicle**, SAAQ (32 pages).
   Read, not quoted.
5. **Quick Reference Guide - Obtaining a passenger vehicle driver's licence
   (Class 5)**, SAAQ (3 pages, 2025-07). Read, not quoted. Note: the class-5
   page advertises this as 469.6 KB and the file fetched is 448,387 bytes, the
   one size on the page that does not match; it is a minor source and nothing
   depends on it.
6. **Highway Safety Code, CQLR c. C-24.2**, Editeur officiel du Quebec, on
   Legis Quebec. https://www.legisquebec.gouv.qc.ca/en/document/cs/C-24.2
   Fetched direct 2026-09-06 (`tmp/quebec-hsc-statute.txt`, 671 KB).
7. **saaq.gouv.qc.ca pages**, all fetched direct 2026-09-06, each cited to its
   own URL in `excerpts.ts`, with the page's own "Last update" date:
   Obtaining a Class 5 Licence (2026-08-10); Preparing for the knowledge and
   road tests (2026-08-10); Turning Right at a Red Light - What the Law Says
   (2024-12-23); Speed - What the Law Says (2024-12-23); Speeding: There's a
   Price to Pay (2026-07-23); Demerit Points (2022-05-13); Winter Driving
   (2024-12-16); Portable electronic devices (2026-09-05); Drinking and
   Driving (2026-06-10); Drugs and Medication (2026-07-23); Driver Fatigue
   (2026-03-30); Child safety in cars (2026-07-23); Move-Over Law
   (2026-09-06); Driving at Night (2026-09-05); Blind Spots in a Car
   (2026-07-23); Road Work Zones (2026-09-06); Pedestrians - What the Law Says
   (2026-03-04); Vehicles With Flashing or Rotating Lights (2026-07-23);
   Safety Devices; Sharing the Road; Road Safety Quiz; the twelve
   driving-course module pages (m1-m12); Young Drivers; Fees.

Nothing was taken from a practice site, an app, an aggregator PDF or anyone's
recollection of a real exam item.

## 2. Test format

| item | value | source |
|---|---|---|
| Sections | 3, scored independently | Class 5 page, "Passing mark" |
| Pass mark | **75% in EACH section** | Class 5 page |
| Section 1 | the Highway Safety Code | Class 5 page, "Contents of the test" |
| Section 2 | road signs, pavement markings and traffic signals | same |
| Section 3 | behaviours and techniques for driving a passenger vehicle | same |
| Retake | at least 28 days; **only the sections you failed** | Class 5 page |
| Duration | 30 to 60 minutes | Class 5 page |
| Format | entirely multiple choice, audio available FR/EN | Class 5 page |
| Prerequisite | learner's licence held at least 10 months | Class 5 page |
| Fee | $13.50 | Class 5 page |
| Languages | French, English, and on request Modern Standard Arabic, Spanish, Mandarin | Preparing for the tests page |
| Cheating | 90-day wait, 180 days for a repeat | Class 5 page |
| Road test | prerequisite 12 months learner + course + knowledge test; 75%; $33.75 | Class 5 page |

**Question count is not published.** The SAAQ states the pass mark and the
three sections and never says how many questions there are. Two separate
learners in the threads below report scores out of 30 ("28/30"), and one asks
about "deux sections sur 8 et une sur 12" (28). Neither is official.
`officialTest.questionCount` is therefore set to **32**, chosen only because
32 with three sections of 8 gives exactly 75% per section, and
`officialTest.notes` says so in those words on the page itself. The number a
learner should carry into the test is 75% per section, not a total.

## 3. Section and page map (Driver's Handbook, 2nd Edition)

Printed page numbers; add 2 for the PDF page.

| chapter | printed pages | contents that matter here |
|---|---|---|
| 1 The Driver | 13-72 | Licences 15-43 (first licence 15, classes 22, health 35, obligations 38, outside Quebec 41); revoked/suspended 44-57 (demerit points 46, Criminal Code 51, impaired 53); factors influencing driving 58-72 (vision 59, fatigue 62, electronic devices 63, alcohol 66, drugs 69) |
| 2 The Vehicle | 73-100 | registration 75, equipment 84, mechanical inspection 94, own inspection 97 |
| 3 Road Signs and Traffic Signals | 101-212 | signal lights 103-112, pavement markings 112-120, road signs 120-210 (catalogue 126-202, cyclist signs 203), HSC provisions 211 |
| 4 Traffic Rules | 213-284 | protection 215-218, traffic rules 219-248 (lanes 219, speed 223, passing 224, turning 228, right on red 234, traffic circles 235, signalling 236, right of way 237, school buses 244, level crossings 245, backing up 246, shared streets 246, heavy vehicles 247), work sites 249, stopping and parking 251-254, unlawful practices 255-258, special road users 259-284 |
| 5 Accidents | 285-296 | insurance 287, hit-and-run 293, at the scene 294, first aid 296 |
| 6 Offences and Consequences | 297-315 | fines 299-307, demerit point tables 308-313, impaired driving penalties 314-315 |

Driving a Passenger Vehicle: safety distances ch.4 (city/highway intervals
p.122-124), driving strategies ch.5 (night 155-158, weather 159-166, braking
and ABS 173-175, parking 175), preventive attitude ch.6 (distraction,
fatigue 215-217).

## 4. What the handbook does not say

| number the test expects | where it actually comes from |
|---|---|
| Statutory speed defaults (100/90/70/50, and the 60 km/h autoroute minimum) | The handbook gives them as a bullet list without the autoroute minimum in statutory terms; **HSC s.328** is the authority and is what the bank cites |
| Parking and stopping distances (3 m hydrant, 5 m intersection/crosswalk/level crossing/police or fire station, 8 m opposite) | Handbook lists them; **HSC s.386** is quoted because the handbook's version is a nested bullet list that cannot be quoted cleanly |
| Child under 7 left unattended | **HSC s.380**, and the SAAQ's child-safety page which quotes it |
| Removing the ignition key and locking the doors | **HSC s.381** |
| Marking a vehicle stopped at night, 150 m | **HSC s.385** |
| Excessive speeding thresholds and the 7/30/60-day suspensions | Handbook ch.6 gives the thresholds; the **Speed - What the Law Says** page gives the current suspension ladder |
| Current fines and demerit points for the phone offence, the Move-Over Law, flagpersons, failing to adapt driving | The SAAQ web pages. The 2018 handbook's figures are stale (see section 5) |
| Following-distance technique | The handbook explicitly defers to **Driving a Passenger Vehicle**, which is where the 4/6/8-10 second intervals live |
| Number of questions on the test | Nowhere. See section 2 |

## 5. Conflicts, and how each was resolved

1. **Following distance: 2 seconds vs 4 and 6 seconds.** The Driver's Handbook
   (p.224) says the "two-second rule" can be used and points the reader at
   Driving a Passenger Vehicle for the description. Driving a Passenger
   Vehicle (p.122) actually sets "In the city, the rule is four or more
   seconds" and "On highways, the rule is six or more seconds", and at least
   eight to ten seconds on ice or snow. **Resolved in favour of the driving
   guide**, which is the book the handbook defers to and the book behind the
   test's third section. Questions `qc_s3_07`, `qc_s5_03` and `qc_s6_20` use
   the guide's figures and the trap text names the two-second rule as the
   thing to unlearn. Recorded in `localGotchas`.
   - Note also that the same page of the driving guide contains an internal
     inconsistency: having set 4 and 6 seconds, it then says to "increase the
     interval to three or four seconds" in difficult conditions. That sentence
     reads as a translation slip. No question is built on it; the questions use
     the highway 6, the city 4 and the ice 8-10, each of which is stated once
     and unambiguously.
2. **Child restraint: 63 cm sitting height vs 145 cm / 9 years.** The 2018
   handbook (p.215) states the 63 cm rule and flags the 145 cm / 9 years
   measure as "starting on April 18, 2019". The SAAQ's child-safety page
   states the 145 cm / 9 years rule as the law in force. **Resolved in favour
   of the current page**; `qc_s1_24` uses 145 cm / 9 years and its trap names
   the superseded 63 cm test.
3. **Move-Over Law penalty: $60-$200 vs $200-$300 + 4 points.** The handbook
   (p.305) gives $60 to $200 and no points. The SAAQ's Move-Over Law page
   (updated 2026-09-06) gives $200 to $300 and four demerit points, and the
   handbook's own demerit table (p.312) already shows 4 points for the same
   conduct. **Resolved in favour of the current page.** No question turns on
   the fine amount alone.
4. **Seat belt exemptions.** The handbook lists a taxi-driver exemption tied
   to municipally-set speed limits and unnumbered roadways. Nothing on the
   current pages contradicts it and nothing depends on it, so it is neither
   quoted nor questioned.
5. **Right turn on red.** Handbook (p.234) and the current RTOR page agree:
   permitted province-wide except on the island of Montreal and where a sign
   forbids it. No conflict; recorded because it is the single most-asked
   Quebec-specific rule.
6. **Demerit page staleness.** The Demerit Points page's own "Last update" is
   2022-05-13, older than most SAAQ pages read here. Its bracket figures
   (4/8/12/15) match the 2018 handbook exactly, so the two independent sources
   agree and the bank uses them.

## 6. What learners report

Every thread below was fetched to `tmp/quebec-reddit-<id>.txt`. Claims are
paraphrased. **No comment text is reproduced and no remembered exam item was
turned into a question** - the threads were used only to learn which RULES
get tested and which distinctions people lose, and each of those was then
written from scratch against the SAAQ's own material.

| thread | sub, year | paraphrase | shaped |
|---|---|---|---|
| "SAAQ Knowledge Test Tips" | r/montreal, 2025 | Poster failed the first two sections and says the illustrated questions are the hard part; a commenter puts them at roughly half the test; another advises reading the scene like an inspector hunting infractions rather than a nervous candidate | `qc_s5_02`, `qc_s5_11` |
| "Saaq knowledge test" | r/montreal, 2026 | Expect a lot of "point out everything wrong in this picture"; commenters list signs, who-goes-first priority between cyclists, pedestrians, police and cars, and small technical items on belts, phone use, headlights and weather | `qc_s5_11`, `qc_s1_05`, `qc_s1_11`, `qc_s3_14` |
| "Pourquoi certains personnes echouent plusieurs fois l'examen theorique de la SAAQ?" | r/montreal, 2026 | Best-documented trap in the whole set: an illustration shows an ambulance in the mirror with its lights NOT drawn as flashing, and most candidates answer from the shape of the vehicle and yield anyway. Others: several options look right at once; a car turning left where it appeared prohibited but a signal allowed it; a question where the expected answer was the blind-spot check BEFORE the signal, contradicting what a driving school had taught | `qc_s3_02` (the ambulance), `qc_s2_25`, `qc_s5_02` |
| "Examen theorique de la SAAQ - Quelles sont les questions pieges ?" | r/Quebec, 2022 | Answers are combinations of numbered options (A: 1-2-4-5-7, B: 2-4-6-7 and so on), so over-including one vehicle loses the item; one poster reports being caught by precise wording about a device's positioning; another reports a rule question on whether you may exceed the limit to complete a pass, answer no; a third reports 28/30 with "a LOT" of illustrated infraction questions | `qc_s3_01`, `qc_s5_11` |
| "exam theorique SAAQ" | r/Quebec, 2022 | Practised the SAAQ's online tests about twenty times, scored 28/30, says the real test is close to the online one | question-count discussion, section 2 |
| "Examen theorique SAAQ" | r/Quebec, 2022 | A candidate failed twice; commenters say the class 5 test contains nothing about operating a motorcycle, only about how a car driver should behave toward motorcyclists and cyclists, and that the test changed with the 2018 Highway Safety Code amendments | `qc_s5_34`, `qc_s3_05`; confirms the sharing-the-road framing |
| "Preparing for SAAQ Theoretical/ First time Learners" | r/montreal, 2024 | The SAAQ's own online practice test is a good representation; the road-signs and illustrated-scenario subtests are the useful ones; one poster found the real test easier because the illustrations can be expanded full screen | `officialTest.notes` (expand the illustration) |
| "Examen theorique saaq" | r/Quebec, 2023 | Asks how many wrong answers are allowed and describes "two sections of 8 and one of 12" | question-count discussion, section 2 |
| "Ressources pour l'examen theorique de la SAAQ" | r/Quebec, 2017 | Reports being caught by narrowly legal questions (on what basis someone who has not taken their medication can be stopped) and by missing one small detail in the picture; a later commenter asks whether failing one of the three parts means retaking all of it | `qc_s3_23`, `qc_s5_11`, and the retake note |
| "Permis Examen Theorique" | r/quebeccity, 2025 | Commenters recommend third-party apps with hundreds of questions | not used; see below |
| "Test SAAQ", "Examen SAAQ - assurances", "Examen theorique" | r/Quebec, 2022-2023 | Logistics only: where the test is taken, insurance for the car used at the road test, and the fact that a foreign student cannot book the knowledge test | none |
| "Looking for answers to Tecnic's TH5 evaluation quiz" | r/Quebec, 2022 | A request for the answers to a driving school's module-5 quiz | **deliberately not used.** Recorded here as the boundary: this is exactly the material that must never enter a bank |

58 Reddit threads were fetched in total; the search returned a lot of
r/Laval and r/quebeccity noise (schools, dermatologists, cegeps) that has
nothing to do with driving. The 12 rows above are the ones that carried
usable signal.

### The three strongest traps found

1. **The ambulance with its lights off.** Independently described, and it is
   the perfect illustration of how the SAAQ's picture questions work: the duty
   to yield attaches to activated lights or siren, not to the vehicle type,
   and the drawing shows which. `qc_s3_02`.
2. **Over-inclusion in the combination answers.** Because the options are sets
   of vehicle numbers, adding one vehicle that is not in fact offending loses
   the whole item, and candidates report doing exactly that. `qc_s5_11`, and
   the reason `officialTest.notes` tells the learner to read each vehicle
   separately.
3. **Rules that differ from what a driving school taught, or from a
   neighbouring province.** Reported for the blind-spot-before-signal order,
   and true in the bank for the following intervals, the Montreal right-on-red
   ban and the excessive-speeding thresholds. `qc_s5_03`, `qc_s5_05`,
   `qc_s5_07`, `qc_s5_14`.

## 7. Local gotchas

The five in `localGotchas`, and why each catches people:

1. **Right on red is legal in Quebec except on the island of Montreal.** The
   prohibition is territorial, not sign-by-sign: signs sit at the bridges,
   tunnels, ferries and the airport, so a driver already on the island sees no
   sign at the intersection and assumes the turn is allowed.
2. **Four seconds in the city, six on the highway, eight to ten on ice.**
   Every neighbouring jurisdiction teaches two or three seconds. A learner who
   arrives with that number answers Quebec's question wrongly and drives too
   close.
3. **Zero alcohol covers every driver under 22**, not just learners and
   probationary holders - and it costs four demerit points, which is the whole
   bracket for a new licence, so one offence ends the licence rather than
   denting it.
4. **Winter tires from December 1 to March 15 by the calendar.** It is not a
   weather rule and not a judgement call, and all-season tires do not count:
   the law looks for studs or the peaked-mountain-and-snowflake pictogram.
5. **Excessive speeding starts at 40 km/h over in a zone of 60 or less.** The
   lowest threshold sits in the slowest zones, which is the opposite of most
   drivers' intuition, so 90 km/h on a 50 km/h boulevard is already an
   immediate roadside suspension and a ten-year mark on the record.

## 8. Verification

Run 2026-09-06, all from the repo root.

```
$ npx tsx scripts/extract-quotes.mjs quebec
tmp/quebec-quotes.json: 192 quotes

$ python scripts/verify-excerpts.py quebec tmp/quebec-*.txt
quebec: 192/192 quotes verified verbatim against 106 source(s)
```

The quotes were not written by hand and then checked. They were cut
mechanically out of the normalised source text by `tmp/qc_quotes.py`, which
applies exactly the normalisation `scripts/verify-excerpts.py` applies and
takes a contiguous span, so every quote is a substring of its source by
construction. That tool also refuses any span containing a soft-hyphen line
break, because the SAAQ's typesetter hyphenates across lines and a quote
spanning one comes out reading "before the pedes trian crossing" - verbatim
and useless. Roughly twenty candidate excerpts were dropped for that reason
and replaced from elsewhere.

`tmp/quebec-verify.json` is the audit trail.

### Snippets

```
$ python tmp/qc_pdf_snippets.py quebec tmp/quebec-handbook.pdf tmp/qc-snips-hb.json
quebec: 125 snippets rendered, 1 not located
$ python tmp/qc_pdf_snippets.py quebec tmp/quebec-dpv.pdf tmp/qc-snips-dpv.json
quebec: 10 snippets rendered, 0 not located
-> src/lib/driving/quebec/snippets.json: 135 entries, 135/192 excerpts (70%)
```

`tmp/qc_pdf_snippets.py` is a copy of `scripts/build-excerpt-snippets.py` with
a page index in front of the search, and it imports the original's `normalise`
and `render` rather than duplicating them, so the crops are byte-identical to
what the shared pipeline produces. The original searches every page for every
attempt, and `page.search_for` costs about 0.16 seconds on this handbook, so a
quote on page 250 spends 40 seconds walking there and a quote that is not in
this PDF at all walks the whole book several times. The unmodified script took
over an hour to get a third of the way through. The indexed copy finishes the
same work in about a minute and finds the same passages. The one miss,
`sign-shapes`, is a quote that crosses a page break in the source.

Three crops were opened and checked: `airbag-25-cm`,
`advance-level-crossing-sign`, `school-bus-5-metres` and
`icy-eight-to-ten-seconds` all land on the right passage with the quote
highlighted and a line of context above.

**The 51 web-page excerpts have no picture, deliberately.** They were rendered
with an adapted copy of `scripts/build-html-snippets.mjs`
(`tmp/qc-html-snippets.mjs`, with a session warm-up for the bot manager, an
accordion-expansion pass and a full-page clip instead of the overlay
screenshot). It reported 40 of 51 rendered, and the crops were wrong: opening
`winter-tires-dates` showed the page's sidebar navigation instead of the winter
tire sentence, and `rtor-allowed-except-montreal` showed the same nav. Probing
the live page found the cause - most of the passage text on a
saaq.gouv.qc.ca page is not in `document.body.innerText` at all until the
accordion holding it is opened, and the expansion pass moves the layout under
the measured band. Rather than ship 40 pictures that show the wrong part of the
page, all of them were deleted and the manifest holds only the PDF-derived
snippets. The excerpts themselves are unaffected: they are verbatim, verified,
and each links to its own official page.

The validator's final line and every warning are in the completion report.
