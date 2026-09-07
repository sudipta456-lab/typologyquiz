# New Hampshire driving bank - research note

Built to `docs/driving/PLAYBOOK.md`. Content date **2026-09-07**.
Handbook edition **DSMV 360, Rev. 11/25**.

The licensing authority is the **New Hampshire Division of Motor Vehicles**, a
division of the **Department of Safety** rather than a department of its own.
Its Director is John Marasco. The manual carries a foreword from Governor
Kelly A. Ayotte. There is **no learner's permit stage** in New Hampshire, so the
credential this bank prepares a learner for is the licence itself - a **Youth
Operator License** for anyone 16 or older and under 21, or an ordinary Class D
operator licence from 21.

---

## 1. Sources read

| Source | Publisher | Edition label | URL | Fetched | How |
|---|---|---|---|---|---|
| New Hampshire Driver's Manual (52-page PDF, `nhdm.pdf`) | NH Department of Safety, Division of Motor Vehicles | `DSMV 360: Drivers Manual (Rev. 11/25)` printed on the inside back cover (PDF page 52) | https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf | 2026-09-07 | Internet Archive snapshot **20260902135745** of that exact URL. The live host 403s every automated client. |
| RSA Title XXI, Motor Vehicles - 127 sections across chapters 259, 261, 263, 264, 265 and 265-A | New Hampshire General Court, Office of Legislative Services | Statutes as published, with the source lines showing each section's last amendment | https://www.gencourt.state.nh.us/rsa/html/XXI/ | 2026-09-07 | Direct fetch. gencourt.state.nh.us serves plain HTML to any client. |
| Driver Licensing Testing Requirements | NH DMV | Undated web page | https://www.dmv.nh.gov/drivers-licensenon-driver-ids/driver-licensing-testing-requirements | 2026-09-07 | Archive snapshot **20250617165540** |
| Learning to Drive | NH DMV | Undated web page | https://www.dmv.nh.gov/drivers-licensenon-driver-ids/apply-your-first-drivers-licensenon-driver-id/driver-education/learning-to-drive | 2026-09-07 | Archive snapshot **20250617160403** |
| Driver Licensing Requirements for Minors | NH DMV | Undated web page | https://www.dmv.nh.gov/drivers-licensenon-driver-ids/driver-licensing-requirements-minors | 2026-09-07 | Archive snapshot **20260826180546** |
| Driver Education | NH DMV | Undated web page | https://www.dmv.nh.gov/drivers-licensenon-driver-ids/apply-your-first-drivers-licensenon-driver-id/driver-education | 2026-09-07 | Archive snapshot **20260826180546** |
| Apply For Your First Drivers License/Non Driver ID | NH DMV | Undated web page | https://www.dmv.nh.gov/drivers-licensenon-driver-ids/apply-your-first-drivers-licensenon-driver-id | 2026-09-07 | Archive snapshot **20260707194933** |
| Licensing Fees | NH DMV | Undated web page | https://www.dmv.nh.gov/drivers-licensenon-driver-ids/licensing-fees | 2026-09-07 | Archive snapshot **20260906163703** |

### The fetch problem, stated plainly

`dmv.nh.gov` sits behind an Akamai edge that returns **HTTP 403 "Access Denied"**
to every automated client attempted:

- `curl` with a browser user agent - 403, 432 bytes.
- The WebFetch tool - 403.
- A real headless Chromium with a normal Chrome user agent, warmed up on the
  site root first - 403 on the site root, on the manual page, and on the PDF
  (457 bytes of Akamai error HTML instead of a document).

Per the playbook, the Internet Archive's capture of the **same official URL** was
used instead, and the snapshot dates are recorded above. Every `url` cited in
`excerpts.ts` and in every question's `sourceUrl` is the **live official URL**,
which is where a learner should go. `gencourt.state.nh.us` has no such block and
was read directly.

### Extraction integrity

Checked before a single quote was written, because two earlier jurisdictions in
this project (Nebraska, West Virginia) had broken font maps that produced
gibberish which still verified as a substring match.

The NH manual's PDF (produced by Adobe InDesign 21.1, PDF 1.5, created
2026-01-06, modified 2026-03-03) extracts cleanly. Over 148,615 characters of
extracted text the **only** non-ASCII characters are:

| Codepoint | Character | Count |
|---|---|---|
| U+2022 | bullet | 338 |
| U+2019 | right single quote | 196 |
| U+2013 | en dash | 55 |
| U+201C / U+201D | curly double quotes | 21 / 21 |
| U+00BD | 1/2 | 3 |
| U+2014 | em dash | 2 |
| U+00BE | 3/4 | 2 |

No `traf4c`-shaped tokens, no dropped ligatures. `verify-excerpts.py` reported
**zero MANGLED warnings** across all 440 quotes. No quote had to be routed around
a corrupt font.

---

## 2. Test format

| Item | Value | Where it comes from |
|---|---|---|
| Questions | 40, multiple choice, four answers each | Manual p.2, Required Driver's License Tests |
| Time limit | 40 minutes | Manual p.2 |
| Pass mark | **80 percent = 32 of 40** | DMV, Driver Licensing Testing Requirements: "All knowledge exams require a passing grade of 80%." |
| Early stop | Test ends automatically after **more than 8 wrong** | Manual p.2. Consistent with 80 percent: 8 wrong of 40 is exactly 80 percent. |
| Delivery | Touch screen, no computer experience needed; audio option through headphones | Manual p.2; DMV testing page |
| Languages | English, French, Spanish, Portuguese, Arabic, Farsi, Mandarin Chinese, American Sign Language - written and audible | Manual p.2; DMV testing page |
| Randomisation | "All knowledge exams are completely random, and you will not see the same exam if you have to retake the test." | DMV testing page |
| Retest wait | **10 calendar days** | Manual p.3 ("not sooner than ten days"); DMV testing page ("ten (10) calendar days") |
| Missed/late-cancelled road test | 30 days | DMV testing page |
| Order | Vision and knowledge must both be passed before a road test can be scheduled; same-day road test only if a slot is free | DMV testing page |
| Statutory subjects | Every licence examination "shall include knowledge questions regarding distracted driving, driving under the influence, and driving during poor weather conditions" | RSA 263:6, I |
| Vision standard | 20/40 with both eyes; 20/30 if sight in one eye only | Manual p.2; DMV testing page |
| Fee | Operator (not REAL ID) $50.00; REAL ID Operator $60.00; **Youth Operator $10.00 per year up to age 21** | DMV Licensing Fees |
| Where | A DMV office, by appointment only | DMV testing page |
| On passing | 60-day paper temporary licence; permanent card mailed | Manual p.3 |

**No permit stage.** New Hampshire issues no learner's permit (manual p.2, DMV
Learning to Drive) and "does not honor or transfer driving permits from other
states" (DMV, Driver Licensing Requirements for Minors).

---

## 3. Section and page map

The manual numbers its own pages 1 to 45 straight through. **Printed page N is
PDF page N + 6.** The `#page=` anchor in every citation is the PDF page.

| Section | Title | Printed pages | PDF pages |
|---|---|---|---|
| Front matter | Cover, Governor's letter, Director's letter, contents | i - ii | 1 - 6 |
| 1 | Driving in New Hampshire | 1 - 3 | 7 - 9 |
| 2 | Driver's License and Non-Driver ID Information | 4 - 6 | 10 - 12 |
| 3 | Dangerous Driving | 7 - 10 | 13 - 16 |
| 4 | Before Driving | 11 - 13 | 17 - 19 |
| 5 | Basic Driving | 14 - 19 | 20 - 25 |
| 6 | Rules of the Road | 20 - 24 | 26 - 30 |
| 7 | General Driving and Parking | 25 - 29 | 31 - 35 |
| 8 | Driving Safely | 30 - 31 | 36 - 37 |
| 9 | Accidents and Financial Responsibility | 32 - 33 | 38 - 39 |
| 10 | Driving Emergencies | 34 - 35 | 40 - 41 |
| 11 | Sharing the Road | 36 - 41 | 42 - 47 |
| 12 | Test Your Knowledge (100 fill-in questions, no answers printed) | 42 - 45 | 48 - 51 |
| Back | `DSMV 360: Drivers Manual (Rev. 11/25)` | - | 52 |

Sub-headings within each section, in printed order, are used as the `section`
label on every excerpt, so a future editor can re-verify without re-reading the
book.

**Section 12 is New Hampshire's own study set.** One hundred fill-in-the-blank
items, printed without answers. It is the closest thing the state publishes to a
practice test and it tells you exactly which facts the DMV thinks are testable:
headlight hours, right on red, Jessica's Law, unattended vehicles, the octagon,
the school-zone limit, the $1,000/15-day crash report, 20/40 vision, .08, the
3-foot bicycle clearance, the youth suspension days, the 30 mph district limit,
the yield-to-the-right rule, sign shapes and colours, the 500-foot fire
apparatus distance, the 9-month DUI minimum, the 35 mph rural residence limit,
four-second following, the 100/500-foot signal distances, solid yellow lines,
the 15-to-50-foot railroad stop, the 25-foot school bus stop, the 15-foot
hydrant, the 200-foot roadside visibility, the No-Zone, the 20-foot crosswalk,
the 60-day new-resident window, the 30-foot stop-sign distance, the 45 mph
interstate minimum, the 5-year licence term, the 15 1/2 practice age and the
25-year-old supervisor, the under-18 belt and helmet ages, and the fourfold
stopping distance. **Every one of those items is covered somewhere in this
bank.** No question copies a Section 12 item; they were used only to confirm
which rules are tested.

---

## 4. What the handbook does not say

| Number the test can ask for | Manual | Supplied by |
|---|---|---|
| Which of "45 or 55" applies where | "45 or 55 miles per hour in other locations" - never says which | RSA 265:60, II(d) and (e): **45** on an unimproved rural highway (RSA 259:116-a), **55** in other locations |
| U-turn sight distance | "not legal everywhere", no number | RSA 265:43: **500 feet** |
| Following too closely, penalty | "punishable by a fine" | RSA 265:25, IV: **$100** |
| Move Over (Sherrill's Law) fine | "shall be fined plus penalty assessment" | RSA 265:37-a, II: **$75** first, **$250** subsequent within 12 months |
| School bus fine | not stated | RSA 265:54, I-b: **$150** first, **$250-$1,000** subsequent, 30-day suspension available; IV: **$500** and up to 30 days for passing on the **right** |
| Return distance after passing | "until the whole front is in your mirror" | RSA 265:20: back in lane before **200 feet** from any approaching vehicle |
| Where you may never cross the centre line | prose only | RSA 265:21: within **100 feet** of an intersection or railroad crossing; blind crest or curve; within 100 feet of a bridge, viaduct or tunnel with obstructed view |
| When passing on the right is lawful | "never pass on the shoulder" | RSA 265:19: overtaken vehicle turning left, or two-plus lanes your way; never off the roadway |
| Phone fines | not stated | RSA 265:79-c, III: **$100 / $250 / $500** within 24 months |
| Dead traffic signal | **not mentioned at all** | RSA 265:9, V: treat as uncontrolled intersection or four-way stop |
| Rear-facing child seat | **not mentioned at all** | RSA 265:107-a, I-c: rear-facing required **under 2** |
| Solid-line exception for passing a bicycle | not mentioned | RSA 265:22, I(d), added 2021 |
| Where to stop at a stop sign with no line or crosswalk | not stated | RSA 265:31, II: nearest point with a view of approaching traffic |
| No overtaking a car stopped at a crosswalk | not stated | RSA 265:35, IV |
| Accessible-parking fines | "carries with it a fine" | RSA 265:69, I(j): minimum **$500**; I(m) access aisle: **$100** / **$200** |
| Left-lane camping | manual says the left lane is for passing | RSA 265:16, IV and V: **$50** fine |
| Emerging from a driveway across a sidewalk | manual gives the yield only | RSA 265:53: stop before the sidewalk, yield to pedestrians, then to all vehicles |
| District definitions | cites RSA 259:118 and 259:93 without quoting | RSA 259:118: 300 feet of frontage. RSA 259:93: half a mile of frontage on any one side |
| Driver education statutory minimum | gives the hours | RSA 263:19, I: 30 classroom, 10 behind the wheel, 6 observation |

---

## 5. Conflicts, and how each was resolved

1. **Speed, "45 or 55".** Manual p.15 collapses two statutory figures into one
   line. RSA 265:60, II separates them. **Resolution:** no question turns on the
   ambiguity. `nh_s2_21` and `nh_s5_06` both name an *ordinary paved two-lane
   road outside any district*, where the statute gives 55 and the manual's
   phrase cannot mean the unimproved-highway 45. `nh_s4_24` asks about the 45
   figure explicitly and cites the statute, and its explanation names the
   manual's ambiguity.

2. **Parking distance from a yield sign.** Manual p.28 lists "within 30 feet of
   a stop sign, yield sign or traffic control signal". RSA 265:69, II(d) says 30
   feet "upon the approach to any flashing signal, stop sign, or traffic control
   signal" and never mentions a yield sign. **Resolution:** `nh_s3_08` and
   `nh_s6_25` are built on a **stop sign** and a **traffic control signal**,
   where both sources agree on 30 feet. The `nh_s3_08` explanation states the
   divergence in the open.

3. **Permanent licence delivery.** Manual p.3: "The permanent license will be
   mailed within 45-days." DMV minors page: "within 60 days". **Resolution:**
   `nh_s6_26` asks about the **60-day paper temporary**, which both sources
   agree on, and its context note reports both figures rather than picking one.

4. **School bus, "physical barrier" vs "divided highway with separate
   roadways".** Manual p.27 excuses meeting traffic only where "the roadway is
   separated by a physical barrier". RSA 265:54, III excuses a driver on a
   divided highway with separate roadways where the bus is on the other half.
   **Resolution:** `nh_s1_11` uses an ordinary undivided two-lane road, where
   both readings require the stop. `nh_s6_09` uses a divided highway with
   separate roadways, which satisfies both readings of the exception, and its
   trap note warns that a painted median is not a divider.

5. **"You only need 30 out of 40."** Reported by a New Hampshire learner on
   r/newhampshire (2025). Contradicted by the DMV's own page (80 percent) and by
   the manual's own early-stop rule (more than 8 wrong ends the test, and 8 of
   40 is exactly 80 percent). **Resolution:** the bank follows the official
   sources. `nh_s5_10`, `nh_s1_17` and `nh_s3_01` all state 80 percent / 32 of
   40, and each names the 30-of-40 belief as the trap.

Nothing else in the manual and the RSAs was found to disagree.

---

## 6. What learners report

Forum research used `scripts/fetch-reddit.py` across two rounds and twelve
searches. **47 threads** were saved to `tmp/newhampshire-reddit-*.txt`. Of those,
roughly half turned out to be about the *road* test, vehicle inspections or
other states, and were discarded. The twelve below shaped questions. No verbatim
comment text is reproduced.

| Sub | Thread | Year | Claim (paraphrased) | Shaped |
|---|---|---|---|---|
| r/newhampshire | Advice on speeding ticket hearing for junior operator? | 2023 | Several independent parents and drivers describe the youth suspension ladder as 20 days first offence, 45 second, 90 third, arriving from a hearing rather than the court, and note it does not end at 18. | `nh_s3_07`, `nh_s5_02` |
| r/newhampshire | Youth OP under suspended license | 2025 | A young driver and several replies confirm that paying the fine does not stop the DMV suspension, that a hearing follows regardless, and that two speeding tickets under 21 bring an insurance filing requirement. | `nh_s5_02`, `nh_s5_21` |
| r/newhampshire | Silly question about drivers test. | 2025 | One commenter states the pass mark as 30 of 40, another says questions can be skipped and returned to. The pass figure is wrong against the DMV's 80 percent; the skipping is a real format detail. | `nh_s5_10`, `nh_s3_01` |
| r/nashua | Car for road test? | 2024 | A driver moving from New York is told New Hampshire has "no formal permit process like in NY" and is surprised by it. | `nh_s1_06`, `nh_s5_01` |
| r/nashua | Driving Study | 2026 | A late-starting learner reports that video study guides did not cover every question and advises studying the actual rules rather than a question dump. | Set 5 approach generally |
| r/newhampshire | Can I schedule a knowledge test and driving test on the same day at the DMV? | 2025 | Multiple parents confirm the road test cannot be booked until the knowledge test is passed, and that a same-day slot depends on availability. | `nh_s5_10` context; `officialTest.notes` |
| r/newhampshire | Driver's License Help | 2024 | A resident who let an out-of-state licence expire past a year is told they will be treated as a brand-new applicant - vision, written and road - and describes it as the price of ignoring the 60-day rule. | `nh_s2_09`, `nh_s5_31` |
| r/driving | How many points does 1 get in NH for hands free violation? | 2025 | A commenter quotes RSA 265:79-c's $100/$250/$500 ladder in full. Confirmed against the statute before use. | `nh_s5_05` |
| r/newhampshire | driving tests | 2022 | A commenter describes the written test as computerised multiple choice taken before the road test is scheduled, usually about a week ahead of it. | `officialTest.notes` |
| r/ManchesterNH | How's the driving test? | 2026 | Advice to stay within 3 mph of the limit and signal early; another commenter says to stay out of the passing lane. Both align with RSA 265:16. | `nh_s4_14`, `nh_s5_32` |
| r/newhampshire | Learning to drive over 18? | 2019 | Commenters confirm that over 18 there is no driver education requirement but the practice rule is the same - a supervising adult over 25 in the passenger seat. | `nh_s6_15`, `nh_s2_18` |
| r/newhampshire | How long does it usually take to get your permanent license? | 2019 | Several report the permanent card taking two weeks to two months, and one notes the paper temporary is accepted by law enforcement but not necessarily as identification elsewhere. | `nh_s6_26` |

Two official sources were worth more than any of them, and both were used:

- **RSA 263:6, I** - the statute listing the subjects the knowledge test must
  cover (distracted driving, DUI, poor weather). This is New Hampshire's version
  of a published blueprint. It shaped `nh_s4_35` and the set 6 mix.
- **Manual Section 12, "Test Your Knowledge"** - 100 fill-in items the DMV
  publishes. Used as a coverage checklist (see section 3 above), never copied.

### The three strongest traps found

1. **The Youth Operator suspension ladder, and that it runs to 20.** The most
   consistently surprising rule in the whole New Hampshire corpus. Learners pay
   the speeding fine, assume the matter is closed, and then receive a separate
   DMV hearing notice; the first-offence range is 20 to 40 days. One commenter
   summarised New Hampshire as one of the strictest states for graduated junior
   licensing precisely because it does not stop at 18. `nh_s5_02`, `nh_s3_07`,
   `nh_s5_21`.
2. **There is no permit, and another state's is worthless here.** Out-of-state
   arrivals repeatedly expect to transfer or exchange a permit. The DMV's answer
   is flat: New Hampshire does not honour or transfer driving permits from other
   states, and issues none of its own. `nh_s1_06`, `nh_s5_01`, `nh_s6_15`.
3. **80 percent, not 30 of 40.** The wrong figure circulates locally and is
   confidently repeated. Thirty of forty is 75 percent and it fails. `nh_s5_10`,
   `nh_s1_17`, `nh_s3_01`.

Runner-up, and the reason `nh_s5_03` exists: New Hampshire is the only state
with **no adult seat belt law**, and that leads people to conclude there is no
belt law at all. There is - restraints are required for everyone under 18, in
both directions.

---

## 7. Local gotchas

The seven in `localGotchas`, and why each catches people:

1. **No learner's permit.** Every neighbouring state has one. Arrivals expect to
   transfer theirs and cannot; residents expect to apply for one and find there
   is nothing to apply for. The practice rule that replaces it has four
   conditions people miss: 15 1/2, an adult of **25** or older (not 21, not 18),
   in the **front seat**, and proof of age carried in the car. The supervising
   adult is liable for the learner's violations.
2. **The Youth Operator ladder runs to 20 and survives paying the fine.** See
   above. The number of independent New Hampshire posters describing the same
   surprise is what put this first.
3. **Four seconds, not three.** Most driver education material outside New
   Hampshire teaches three. The manual says four for cars and four again for
   motorcycles, and wants at least one more second at night, two on an
   unfamiliar road at night.
4. **Belts are required only under 18, and that is not the same as no law.** New
   Hampshire is the sole state without an adult requirement. The under-18 rule
   binds both the driver carrying an unbelted minor and a driver who is a minor,
   and the statute adds a rear-facing requirement under 2 that the manual never
   prints.
5. **Right on red is the only turn permitted on red.** Most of the country also
   permits a left from a one-way onto a one-way. The New Hampshire manual does
   not carve that out, and importing the habit is a moving violation.
6. **"45 or 55 in other locations" is not a real answer.** The manual's own
   sentence leaves the reader unable to say what an unposted paved road allows.
   Only RSA 265:60, II resolves it: 45 on an unimproved rural highway, 55
   everywhere else.
7. **Jessica's Law and the roof of the car.** Clearing a porthole in the
   windscreen is the version that gets ticketed. The offence is negligent
   driving at $250 to $500 for a first offence, and it turns on the vehicle
   being *likely* to endanger, so it does not wait for the ice to hit anything.

---

## 8. Verification

Run 2026-09-07, in this order.

```
$ npx tsx scripts/extract-quotes.mjs newhampshire
tmp/newhampshire-quotes.json: 440 quotes

$ python scripts/verify-excerpts.py newhampshire tmp/newhampshire-handbook.pdf \
      tmp/newhampshire-statute.txt tmp/newhampshire-dmv.txt
newhampshire: 440/440 quotes verified verbatim against 3 source(s)

$ python scripts/build-excerpt-snippets.py newhampshire tmp/newhampshire-handbook.pdf
newhampshire: 334 snippets rendered, 11 not located, 95 skipped as not in this document

$ npx tsx scripts/validate-driving.mjs --only newhampshire
=== New Hampshire (NH) - 6 sets ===
  snippets: 334 in manifest, 334/440 excerpts covered (76%)
  quotes verified: 440/440 verbatim against newhampshire-handbook.pdf,
    newhampshire-statute.txt, newhampshire-dmv.txt (2026-09-07)
  excerpts: 440 (268 unused), questions wired: 195/195 (100%), quoted total: 80.7k chars
  questions: 195
  answer positions: A:23% B:25% C:26% D:27%
  context: 100%  source links: 100%  starred: 18%
  topics: rules:25 safety:22 licensing:22 signs:19 sharing:18 rightOfWay:17
          signals:15 speed:15 impairment:15 emergencies:14 parking:13
ERRORS: 0   WARNINGS: 0

$ npx tsc --noEmit -p .
(clean)
```

Notes on the two lines that are not zero:

- **11 quotes not located for a snippet.** All eleven (`driver-ed-hours`,
  `restriction-codes`, `tire-pressure`, `belts-under-18`, `secure-load`,
  `row-emergency`, `being-passed`, `right-turns`, `left-turns`,
  `multiple-lane-turns`, `no-parking-distances`) span a two-column break or a
  bulleted list that the renderer cannot box into one rectangle. They are all
  verified verbatim; only the picture is missing. 334 of the 345 handbook quotes
  rendered, or **96.8 percent**, against the playbook's 80 percent target.
- **95 skipped as not in this document.** These are the statute and DMV web
  quotes, which have no PDF page to crop. Expected.
- **268 unused excerpts.** The library is deliberately larger than the 172 keys
  the questions cite, per the playbook's instruction that more verified official
  wording is a better bank and that a quote is deleted only when nothing
  references it *and* another excerpt already covers the same rule. Every one of
  the 440 is verbatim and attributed.

Three rendered PNGs were opened and inspected (`school-bus-25.png`,
`speed-ideal.png`, `following-four-seconds.png`). No cropping defect; the
known failure mode of clipping the first letter of every line is absent.
`speed-ideal.png` highlights only the first sentence of a two-sentence quote,
which is the renderer's loose-location fallback rather than a mismatch - the
full quote is verified.

---

## 9. Scratch files

Everything under `tmp/` is gitignored working material:

- `tmp/newhampshire-handbook.pdf` - the manual (2.6 MB, 52 pages)
- `tmp/newhampshire-handbook.txt` - extracted text with page markers
- `tmp/newhampshire-statute.txt` - 127 RSA sections, one block each
- `tmp/newhampshire-dmv.txt` - the six DMV pages' visible text
- `tmp/newhampshire-reddit-*.txt` - 47 saved threads
- `tmp/newhampshire-quotes.json`, `tmp/newhampshire-verify.json` - the receipts
- `tmp/nh_fetch.py`, `tmp/nh_wayback.py`, `tmp/nh_statutes.py` - fetchers
- `tmp/nh_src.py`, `tmp/nh_build_excerpts.py`, `tmp/nh_emit_excerpts.py` - the
  mechanical excerpt pipeline
- `tmp/nh_swap.py`, `tmp/nh_unstar.py`, `tmp/nh_trim.py` - balance passes
