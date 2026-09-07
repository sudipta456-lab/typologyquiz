# Saskatchewan - research note

Bank built 2026-09-06. Jurisdiction slug `saskatchewan`, code `SK`, licence
Class 7 Learner's Licence under Saskatchewan's Graduated Driver Licensing
programme.

---

## 1. Sources read

| Source | Publisher | Edition label | URL | Fetched | How |
|---|---|---|---|---|---|
| Saskatchewan Driver's Handbook - A guide to safe driving | Saskatchewan Government Insurance (SGI) | Cover: `2026-27`. Page i: "This handbook is accurate as of September 2025." PDF metadata keywords carry `5374; SLB143`; created 2026-06-30, modified 2026-07-03 | https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf | 2026-09-06 | Direct download, `curl`. 206-page PDF, 10.8 MB, md5 `7d99428948a4361e6ce4dc920a528733`. Saved as `tmp/saskatchewan-handbook.pdf` |
| The Traffic Safety Act, c T-18.1 | Saskatchewan Publications Centre (King's Printer) | Chapter T-18.1 of the Statutes of Saskatchewan, 2004 (effective July 1, 2006), consolidated with amendments to 2024, c 4. Copyright 2024 | https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download (catalogue entry: https://publications.saskatchewan.ca/#/products/12208) | 2026-09-06 | Direct download, `curl`. 224-page PDF. Saved as `tmp/saskatchewan-tsa.pdf` |
| SGI - New Class 5 drivers | SGI | Undated web page; footer reads "2026 SGI" | https://sgi.sk.ca/new-drivers | 2026-09-06 | Rendered with headless Chromium (Playwright). The page is JavaScript-driven, so `curl` and WebFetch both return an empty shell. Visible text saved as `tmp/saskatchewan-sgi-newdrivers.txt` |
| SGI - Saskatchewan Driver's Handbook, online edition, "Your test" | SGI | Web version of the same handbook | https://sgi.sk.ca/handbook/-/knowledge_base/drivers/your-test | 2026-09-06 | Playwright. Read only to confirm the online edition matches the PDF on the test-format text. It does, word for word. Nothing is quoted from it |
| SGI - Basic Exam Practice Quiz | SGI, hosted on `survey.alchemer.com` and embedded at https://sgi.sk.ca/quiz | Undated | https://sgi.sk.ca/quiz | 2026-09-06 | Playwright, reading the embedded frame. Read only to see how long SGI's own practice instrument is (20 questions). Nothing is quoted from it, and it is a practice instrument rather than an exam |

The three sources actually quoted are the handbook, the Act and the New Class 5
drivers page. Every quote in `excerpts.ts` was lifted mechanically, as a
contiguous substring of the same normalised text `scripts/verify-excerpts.py`
reads, by `tmp/sk_spec.py` and `tmp/sk_build_excerpts.py`. Nothing was retyped,
so no quote can have drifted.

No third-party practice site, aggregator PDF or Wikipedia article was used for
any fact in the bank.

---

## 2. Test format

Saskatchewan's written testing is **two separate exams**, not one.

| Item | Value | Source |
|---|---|---|
| Exams | Basic knowledge exam (rules of the road and driving situations) + Sign exam (sign identification), plus a vision test | SGI, New Class 5 drivers; handbook page 23 |
| Pass mark | **80% on each exam, separately** | SGI, New Class 5 drivers |
| Question count | **Not published by SGI anywhere.** See below | - |
| Fee | $25 each time you sit either exam | SGI, New Class 5 drivers |
| Failing one | Rewrite only the exam(s) you failed | Handbook page 23 |
| Retest wait | SGI: "You can schedule another test as early as the next day." Handbook: "You may write only once per day." | SGI, New Class 5 drivers; handbook page 23 |
| Result validity | One year (handbook page 23 says "valid for one year"; page 27 says "Successful exam results are valid for 12 months") | Handbook pages 23, 27 |
| Where | Driver exam office. Only Regina and Saskatoon take walk-ins; everywhere else by appointment via MySGI or a motor licence issuer | SGI, New Class 5 drivers; handbook page 23 |
| Delivery | Computer-based in larger centres with translation into more than 100 languages; paper in smaller centres | SGI, New Class 5 drivers |
| Devices | Cellphones and electronic devices not allowed in the test area | Handbook page 23 |
| Learning period | Class 7 must be held at least nine months before any exam towards another class | Handbook page 24 |
| Road test | Pass at 9 demerits or fewer; fail at 10 or more; $55 per attempt; two-week wait after a fail | SGI, New Class 5 drivers; handbook page 27 |

**On the question count.** SGI publishes the 80% pass mark and no length. Three
things were checked and none of them is an official statement of the count:

- SGI's own *Basic Exam Practice Quiz* (embedded at `sgi.sk.ca/quiz`) runs
  **20 questions**. It is a practice instrument, not the exam.
- A 2026 r/regina thread has a learner reporting **49 out of 50** on the
  written exam in Regina. One person, one report.
- Several commercial prep sites assert "40 questions, 32 to pass". Those are
  exactly the sources the playbook bars, and they are not used.

`officialTest.questionCount` is set to **50** with `passCount` **40**, and
`officialTest.notes` states plainly that SGI does not publish a length, that
the 50 comes from a single learner report, and that the 80% is the figure that
matters. The two `sectionedBy` entries carry `passCount: 20` each, which makes
the scorer require 80% of the sign questions and 80% of the rest independently
- which is exactly how the two real exams behave.

**Consequence for the bank's shape.** Because signs are a whole separate exam
in Saskatchewan, the signs load here is deliberately heavier than in the
sibling banks: 49 of 195 questions, and never fewer than five in any set
(sets carry 7 to 9). That is the point of modelling the test as sectioned.

---

## 3. Section and page map (handbook)

The book's printed page 1 is PDF page 11, so every `#page=` anchor in
`excerpts.ts` and in the sets is the printed page plus ten. Printed pages i-viii
are the front matter and contents.

| Chapter | Printed pages |
|---|---|
| 1. Introduction | 1 |
| 2. Saskatchewan's driver's licence program | 2-27 |
| &nbsp;&nbsp;2.1 Driver's licence (restrictions/endorsements 5, fake ID 6) | 4-6 |
| &nbsp;&nbsp;2.2 Vehicle registration, insurance, deductibles | 6-10 |
| &nbsp;&nbsp;2.3 Graduated Driver Licensing Program (stage table 12, improvement programme 13) | 11-13 |
| &nbsp;&nbsp;2.4 Change of name or address | 14 |
| &nbsp;&nbsp;2.5 Classified licence system (Class 1 p14, 2 p15, 3 p16, 4 p17, 5 p18-19, 7 p20-21) | 14-21 |
| &nbsp;&nbsp;2.6 Medical requirements | 21 |
| &nbsp;&nbsp;2.7 Operating in the United States | 21 |
| &nbsp;&nbsp;2.8 Mandatory driver education | 22 |
| &nbsp;&nbsp;2.9 Preparing for your road test | 22 |
| &nbsp;&nbsp;2.10 Before the examination | 23 |
| &nbsp;&nbsp;2.11 Your test (knowledge 23, vision 24, learning period 24, road test 25-27) | 23-27 |
| 3. Basic information and rules of the road | 28-75 |
| &nbsp;&nbsp;Six basic driving conditions | 28-29 |
| &nbsp;&nbsp;3.1 Speeding, stunting and racing | 29-30 |
| &nbsp;&nbsp;3.2 Distracted driving / cellphones | 31-32 |
| &nbsp;&nbsp;3.3 Stopping and parking | 32 |
| &nbsp;&nbsp;3.4 Sharing the road (trucks 33, plows 34, snowmobiles/ATVs 35, emergency 35-36, farm 36, school buses 37, motorcycles 38-39, bicycles 39-40, e-scooters 41, tow trucks 41, funerals 41) | 32-41 |
| &nbsp;&nbsp;3.5 The concept of gates | 42-43 |
| &nbsp;&nbsp;3.6 Blind spots | 43-44 |
| &nbsp;&nbsp;3.7 Directional dividing lines | 44 |
| &nbsp;&nbsp;3.8-3.10 Traffic lanes, lane position, lane selection | 45-46 |
| &nbsp;&nbsp;3.11-3.12 Signalling, changing lanes | 47-48 |
| &nbsp;&nbsp;3.13 Passing (passing lanes 50) | 49-50 |
| &nbsp;&nbsp;3.14 Bus lanes and bicycle lanes (sharrows 52) | 51-52 |
| &nbsp;&nbsp;3.15 Turning (right 53-54, left 54-57) | 53-57 |
| &nbsp;&nbsp;3.16 Centre turning lanes | 58 |
| &nbsp;&nbsp;3.17 Right of way (uncontrolled 59-60, controlled 61, construction 62, zipper merge 62) | 59-62 |
| &nbsp;&nbsp;3.18 Stopping positions | 63 |
| &nbsp;&nbsp;3.19 Interchanges (roundabouts 64, diverging diamond 65-66, RCUT 67) | 64-67 |
| &nbsp;&nbsp;3.20 Highways | 68 |
| &nbsp;&nbsp;3.21-3.23 Pedestrians, jaywalkers, crossing urban streets, wheelchairs | 68-70 |
| &nbsp;&nbsp;3.24-3.26 Motorcycles, medians, parking lots | 70-71 |
| &nbsp;&nbsp;3.27-3.29 Headlights, night driving, choosing the right speed | 72-74 |
| &nbsp;&nbsp;3.30 Rules related to vehicles | 75 |
| 4. Traffic signs and signals | 76-93 |
| &nbsp;&nbsp;4.2 Six basic sign shapes | 76-77 |
| &nbsp;&nbsp;4.3 Standard sign colours | 78 |
| &nbsp;&nbsp;4.4-4.8 Regulatory, parking, pedestrian crossing, lane designation, turn control signs | 78-82 |
| &nbsp;&nbsp;4.9 Warning signs | 83-86 |
| &nbsp;&nbsp;4.10 Construction signs | 86-87 |
| &nbsp;&nbsp;4.11 Railway crossings | 88 |
| &nbsp;&nbsp;4.12 Crossroad delineators | 89 |
| &nbsp;&nbsp;4.13-4.14 Guide and information signs | 89-90 |
| &nbsp;&nbsp;4.15 Traffic signals | 91-93 |
| 5. Basic driving skills | 94-126 |
| &nbsp;&nbsp;5.2 IPDE method | 95-97 |
| &nbsp;&nbsp;5.3 Time, and following distance (table p100) | 98-102 |
| &nbsp;&nbsp;5.4 Eye use and search patterns | 103-111 |
| &nbsp;&nbsp;5.5 Before you drive; head restraints 112, seatbelts 113, car seats 114, airbags 115, seating 116, mirrors 117 | 111-118 |
| &nbsp;&nbsp;5.6-5.10 Steering, accelerating, transmissions, low speed skills | 118-126 |
| 6. Advanced driving skills | 127-166 |
| &nbsp;&nbsp;6.1 Parking (parallel 127, back-up cameras 128, angle 129, hills 130) | 127-130 |
| &nbsp;&nbsp;6.2 Turning (U-turns 131, two-point turns 132) | 131-133 |
| &nbsp;&nbsp;6.3 Highway and freeway driving | 133-135 |
| &nbsp;&nbsp;6.4 Passing | 136-139 |
| &nbsp;&nbsp;6.5-6.7 Curves, mountains, grid roads | 139-141 |
| &nbsp;&nbsp;6.8 Winter driving | 142-146 |
| &nbsp;&nbsp;6.9 Braking (threshold 148, four-wheel lock 148) | 147-148 |
| &nbsp;&nbsp;6.10 Emergency driving (skids 151-153, ditches 154, blow-outs 155, brake failure 155, animals 156-157) | 149-157 |
| &nbsp;&nbsp;6.11 Understanding collisions | 158 |
| &nbsp;&nbsp;6.12 What to do if you're in a collision (power lines 160-161) | 159-163 |
| &nbsp;&nbsp;6.13 Impairing factors other than drugs and alcohol | 163-166 |
| 7. Drinking, drugs and driving | 167-175 |
| &nbsp;&nbsp;7.1 Alcohol (BAC effects table 169, crash likelihood 170, BAC and time 170-171) | 167-171 |
| &nbsp;&nbsp;7.2 Drugs | 171-174 |
| &nbsp;&nbsp;7.3 Drinking and drugs combined (equivalence chart 175) | 174-175 |
| 8. Complying with the law when driving | 176-192 |
| &nbsp;&nbsp;8.1 The Traffic Safety Act (impoundments 176-178, impaired driving 178-181) | 176-181 |
| &nbsp;&nbsp;8.2 The Criminal Code of Canada | 181-186 |
| &nbsp;&nbsp;8.3 Traffic tickets | 187 |
| &nbsp;&nbsp;8.4 Driver Improvement Program (points table 188) | 187-188 |
| &nbsp;&nbsp;8.5 Safe Driver Recognition (scale 189) | 189-191 |
| &nbsp;&nbsp;Fuel-efficient driving techniques | 192-193 |

Act anchors are PDF pages, which the consolidation prints on the page itself.
Part XVI (Rules of the Road) runs from PDF page 158; the sections quoted here
sit between PDF pages 160 and 189.

---

## 4. What the handbook does not say

Numbers the exam can reasonably ask for that the handbook omits or states only
in part, with the statute section that supplies them.

| Rule | Handbook | The Traffic Safety Act |
|---|---|---|
| The unsigned speed limit as a legal default | States "In the absence of signs, the speed limit is 80 km/h" (p29) but does not cite the provision | s 199(1)(a): 80 km/h where no signs are erected |
| Speed that is unreasonable, and speed that impedes traffic | Prose only (p30) | s 199(3) and s 199(4) |
| Excessive-speed offence thresholds | Impoundment chart only (p177) | s 199(2), (2.1), (2.2): 50 km/h over, 35 km/h over, and double the limit |
| Stop position where there is no line, sidewalk or crosswalk | Diagram captions "within three metres" / "within 10 metres" (p63) | s 209(6.1): "no further than" three metres in a city/town/village/hamlet, ten metres outside |
| Minimum sight distance to pass on a rural highway | Not stated at all; prose only ("any place where your sight distance is limited", p49) | s 217(6): **320 metres** clear view, unless the highway has two or more lanes in the direction of travel |
| Passing off the pavement | "without driving on the shoulder" (p49) | s 217(2): no passing by driving off the pavement or travelled portion |
| Buses and dangerous-goods vehicles must stop at every level crossing | Only as "Watch for vehicles that must stop at crossings" (p88) | s 209(7)-(9) |
| Shoulder counts inside a no-parking zone | Not stated | s 210(2): the prohibition includes "that portion of the roadway situated to the right of the solid white line and commonly referred to as 'the shoulder'" |
| Booster-seat weights and heights | "under seven ... more than 36 kg (80 lb.)" (p114) | s 248(4)(b)-(c): booster for under seven, 18-36 kg, under 145 cm; child restraint at 18 kg or less |
| Which collisions must be reported to police | Prose list (p160) | s 253(4): five triggers, including a vehicle towed from the scene |
| Following distance as a legal duty | Three seconds as technique (p99) | s 225(1) reasonableness; s 225(2) leaving room for an overtaking vehicle outside urban boundaries |
| Hand signals | Illustrated without text (p47) | s 234(2)(a)-(c) |
| Headlight dimming distances as law | 200 m / 100 m / 500 m / 22 m as prose (pp72-73) | s 230(2)-(4), s 231 |
| Left turn on red at two one-way streets | Handbook says "This also applies to making a left turn at the intersection of two one-way streets" (p92), which reads as a cross-reference | s 235(6): explicit |
| Emergency-vehicle priority order | Not stated | s 238(6): fire engines, fire department apparatus, ambulances, police vehicles, then designated and board-approved vehicles |
| Pedestrian duty is to STOP | "you must yield the right of way" (p68) | s 223(1): "shall **stop** the vehicle and yield the right of way"; s 223(2) forbids passing a vehicle so stopped |
| Definition of crosswalk (marked or the prolongation of the sidewalk lines) | Described in prose (p68) | s 207(a) |

---

## 5. Conflicts between official sources, and how each was resolved

1. **Supervising driver experience.** Handbook p20: the supervisor must "have
   held a valid licence for a minimum of 365 days in the preceding three
   years". SGI's New Class 5 drivers page: "have held a valid licence for at
   least 12 months in the last 3 years." Same substance, different wording.
   **Resolution:** no question is keyed on 365 days versus 12 months. The
   excerpt library carries both (`class7-supervisor` from the handbook,
   `test-supervisor` from the web page) so a learner can see the pair.

2. **Written-exam result validity.** Handbook p23: "Successful written exam
   results are valid for one year." Handbook p27: "Successful exam results are
   valid for 12 months." Identical in substance. **Resolution:** the bank says
   one year and no item turns on the phrasing.

3. **Class 5 mandatory training hours.** Handbook p22 and SGI's page both give
   six hours in-class plus six in-car for the self-study route, and 30 in-class
   plus six in-car for the high school programme. SGI's page adds that a high
   school student "may have been allowed to do 1 hour of in-car training"
   before writing the Class 7 exams. **Resolution:** the question
   (`sk_s4_31`) is keyed on the six-and-six minimum, which both sources agree
   on, not on the sequencing.

4. **Roundabout wording.** Handbook p64 opens with "In a roundabout, the
   vehicle on the right must yield to the vehicle on the left", which is the
   reverse of Saskatchewan's ordinary uncontrolled-intersection rule at
   s 219(1) and p59. The very next sentences and SGI's own lettered diagram
   resolve it: "Traffic entering the roundabout must yield to traffic in the
   roundabout." The two are consistent because, from a circulating driver's
   position, the entering vehicle is the one on the right. **Resolution:**
   every roundabout item (`sk_s2_01`, `sk_s5_03`, `sk_s6_17`) is keyed on the
   operative rule - entering yields to circulating - and `sk_s5_03` makes the
   apparent contradiction the subject of the question. `localGotchas` records
   it.

5. **School zone speeds.** Handbook p30 says each city or town sets school-zone
   speeds by local bylaw and that laws vary, while s 200 of the Act requires
   municipalities to enact a complying bylaw and makes the Act prevail over a
   conflicting one. No question states a school-zone number, because
   Saskatchewan does not have one.

6. **Handbook typos preserved.** Quoted verbatim and left alone: "Experienced
   cyclists can travel at 25-25 km/h on a flat surface" (p40); the road-test
   rescheduling list on p26 whose last three items invert into the fail list
   ("the passenger compartment of the vehicle is not clean or free of strong
   scent or odour"); "hands-fee unit" (p166); "Facts about drugs and driving in
   Saskatchewan2" carrying a stray footnote marker (p171); "manoeuver" beside
   "manoeuvre" in the same chapter. No question depends on any of them.

---

## 6. What learners report

`python scripts/fetch-reddit.py` was run three times, in
`r/saskatchewan`, `r/saskatoon`, `r/regina`, `r/CanadaDriving`, `r/newdrivers`,
`r/driving`, `r/drivingtest` and `r/Teenagers`, with queries covering
"learners test", "SGI knowledge test", "class 5 written test", "learners
licence", "drivers licence" and "Saskatchewan". **43 threads were saved** to
`tmp/saskatchewan-reddit-*.txt`. The great majority were about SGI as an
insurer rather than about the exams. Nine were relevant. Paraphrases only, no
comment text is reproduced, and no recalled exam item has been turned into a
question.

| Sub | Thread title | Year | What it said (paraphrase) | Shaped |
|---|---|---|---|---|
| r/saskatchewan | "What should I expect for my SGI 1A Written Test?" | 2026 | Several people said the questions come straight from the handbook and get very detailed, and two independently named the impairment chapter rather than the rules of the road: one recalled a question on how long a driver stays impaired after a number of drinks and another on how many beers a cannabis joint equates to. One said what surprised him was the focus on penalties and fines for impaired offences. Another advised giving extra attention to anything in the books with numbers in it. | `sk_s3_07`, `sk_s4_14`, `sk_s5_04`, `sk_s5_12`, `sk_s5_18`, `sk_s5_30`; and the whole shape of set 5 |
| r/saskatoon | "Driving Questions for an Upcoming Test" | 2025 | Learner asked whether he had to be at 50 the moment he passed the sign on a Circle Drive off-ramp. Four separate replies said the yellow ramp figure is a recommended speed, not a limit, and that braking to it at the sign would be unreasonable. The same thread asked where to wait relative to a crosswalk when the yield sign sits beyond it. | `sk_s3_02`, `sk_s5_06`, `sk_s6_14`; and the `localGotchas` entry on yellow tabs |
| r/saskatchewan | "Taking my road test soon here in Yorkton" | 2021 | Two people said the town speed limit starts AT the sign and not before it, and one described failing for doing 60 in a 40 after being tailgated past the entrance sign. | `sk_s5_02`, and the second half of the yellow-tab gotcha |
| r/saskatoon | "After how many times you pass the road test?" | 2025 | Candidate failed on a pedestrian at a marked crosswalk: they slowed, the pedestrian hesitated, and they drove on without stopping completely. | `sk_s2_05`, `sk_s5_05` |
| r/regina | "SGI test inconsistency?" | 2026 | Candidate reported scoring 49 out of 50 on the written exam. Same post described road-test demerits including 10 for rolling a stop sign and 2 for stopping over a crosswalk. | `officialTest.questionCount` and its note; `sk_s6_14` |
| r/saskatoon | "SGI road test question (Taylor Street Saskatoon)" and "SGI road test question about right turns (Industrial area)" | 2026 | Both threads are candidates asking about stopping position and right turns near large vehicles; the recurring answer was to wait until you can actually see rather than creeping out. | `sk_s3_27`, `sk_s5_35` |
| r/saskatoon | "Novice driver caught going 204 km/h near Saskatoon, fined $1,515" | 2026 | News post. Comments noted a 30-day vehicle impound and a seven-day suspension for a novice at 204 in a 90. Consistent with the handbook's impoundment chart. | `sk_s3_14`, `sk_s5_23` |
| r/saskatoon | "Taking SGI driver's exam from another town" | 2025 | Several people confirmed that appointments in smaller centres are reserved for local residents, matching the handbook's own sentence on p25. | `officialTest.notes` |
| r/saskatchewan | "Class 3 road test", "Transferring AB Class 1 to SK" | 2026 | Confirmed the two-week wait after a failed road test and that written results carry over for a year. | `officialTest.notes` |

Every claim above was checked against the handbook or the Act before it was
used. Two forum claims were **not** adopted:

- Someone in the 1A thread said you can refresh SGI's practice quiz until you
  have seen every real question. SGI publishes the quiz as practice and does
  not say it contains exam items; nothing here relies on it, and its 20
  questions are cited only as a length.
- A commenter asserted the written exam is "40 questions". SGI publishes no
  count, and prep sites repeating 40/32 are excluded by the source rules. The
  one first-hand number (49 of 50) is used, and flagged as such.

Beyond Reddit: SGI does not publish a "most missed questions" page, and
Saskatchewan has no statute listing the subjects the knowledge test must cover
(the Minnesota-style pairing the playbook mentions does not exist here). SGI
does publish its own practice quiz, which is the nearest equivalent and was
used only to understand the format.

---

## 7. Local gotchas, and why each catches people

1. **The default is 80, everywhere.** s 199(1)(a) sets 80 km/h wherever no sign
   is erected, and SGI repeats it for gravel grid roads on p141. Saskatchewan
   has no built-in urban number at all: a town's entrance sign sets the limit
   "to all locations within community boundaries". Learners from Manitoba
   (50/90), Alberta (50) or almost any US state answer 50 for an unsigned city
   street and 100 for an unsigned highway, and both are wrong.

2. **The roundabout sentence reads backwards.** See conflict 5 above. The rule
   people apply is the right one; the sentence they memorise is the one that
   trips them.

3. **Sixty means four different stopped vehicles, and the exemption is narrow.**
   Highway workers and equipment (s 203), emergency vehicles (s 204), tow
   trucks (s 205) and service or escort vehicles (s 205.1) all carry the same
   60 km/h and the same exception, which requires a **divided** highway AND the
   opposite roadway. SGI says in terms that on an undivided highway the rule
   does apply to oncoming traffic. People treat "opposite direction" as the
   exemption.

4. **The written exam leans on chapters 7 and 8.** Two independent people said
   so, naming the impairment durations, the drink-equivalence chart and the
   penalties. Those chapters read like background and are examinable.

5. **Yellow tab versus white sign, and the sign is where the limit starts.**
   Confirmed in two separate threads, in both failure directions: braking hard
   to a yellow ramp figure, and still being over the limit at a town's entrance
   sign. SGI's own captions settle it - "Recommended safe speed" on the warning
   sign, "The maximum speed allowed under ideal conditions" on the regulatory
   one - and Saskatchewan posts a separate advance warning of a lower maximum
   speed zone ahead precisely so the deceleration happens before the sign.

6. **New driver is defined by age as well as stage.** SGI's list on p178 starts
   with "21 years of age and under", so a 20-year-old two years out of the GDL
   programme is still zero-BAC, and so is anyone with no licence in the last
   five years.

---

## 8. Verification

All run 2026-09-06 in `C:\dev\funproject\typologyquiz`.

```
$ npx tsx scripts/extract-quotes.mjs saskatchewan
tmp/saskatchewan-quotes.json: 380 quotes

$ python scripts/verify-excerpts.py saskatchewan tmp/saskatchewan-handbook.pdf \
      tmp/saskatchewan-tsa.pdf tmp/saskatchewan-sgi-newdrivers.txt
saskatchewan: 380/380 quotes verified verbatim against 3 source(s)

$ python scripts/build-excerpt-snippets.py saskatchewan tmp/saskatchewan-handbook.pdf
saskatchewan: 306 snippets rendered, 10 not located, 64 skipped as not in this document

$ npx tsx scripts/validate-driving.mjs --only saskatchewan
ERRORS: 0   WARNINGS: 30

$ npx tsc --noEmit -p .
(no saskatchewan errors)
```

**On the 64 skipped snippets.** Those are the statute and web-page quotes. The
snippet builder now refuses to render a quote that is not in the PDF it was
given, which is the correct behaviour: a picture cropped from the handbook
would not show the statute. 306 of the 316 handbook quotes rendered, or 97%,
and 306 of 380 excerpts overall, or 81%.

**On the 10 not located.** All ten are handbook quotes that cross a column or
page break in a way the locator could not resolve to a single rectangle. They
are verified verbatim by `verify-excerpts.py`; they simply have no picture.

**On the 30 warnings.** Every one is the same warning: `excerpt <key>: quote is
N chars - trim toward one or two sentences`, on a quote between the 320-char
warning threshold and the 600-char hard cap. They are all stem-plus-list
quotes, where the operative rule is the stem AND the list, and trimming would
publish half a rule as though it were the whole one. Examples:
`act-stop-position` (564) is the three-metre and ten-metre pair, which is
useless split; `act-hand-signals` (586) is all three signals; `centre-turn-lane`
(585) is the four bullets that together define what the lane may be used for;
`act-report-collision` (491) is the five triggers for a police report;
`car-seats-under-seven` (506) is the age and the weight together. None exceeds
the 600-char hard cap. No verified quote was deleted to reduce the count.

**On answer positions.** They were chosen while writing, and the first pass
came out badly skewed (A 13%, B 62%, C 22%, D 4%). Rather than shuffle, each
over-quota question had its correct answer moved by a single transposition with
the option already at the target index (`tmp/sk_positions.py`), which leaves
the other three options in their original order and moves exactly one
distractor. The eleven questions whose options form an ascending numeric ladder
were excluded from that pass so the ladders stay ascending. Final distribution:
A 25%, B 25%, C 25%, D 25%.

**Counts.** 195 questions across six sets (30/30/35/35/35/30). 380 excerpts,
215 of them unused by any question and kept because they are verified official
wording that a learner reading around a topic will want. 195 of 195 questions
carry a resolving `excerptKey` (100%), 100% carry `context` and a `sourceUrl`,
and 15% are starred `commonlyMissed`. Topic spread: signs 49, safety 25,
rules 24, rightOfWay 17, sharing 16, signals 13, speed 12, parking 12,
impairment 12, licensing 9, emergencies 6.
