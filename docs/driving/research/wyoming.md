# Wyoming - research note

Completed bank. Slug `wyoming`, code `WY`, US. `contentDate` is 2026-09-07;
`handbookEdition` is 2021. The bank contains 195 questions across six sets,
including the 30-question exam simulation.

## 1. Sources read

All sources below are recorded in the excerpt header as fetched directly on
2026-09-07. No source required an Internet Archive snapshot.

| Source | Publisher | Edition label | URL | Fetched | Method |
|---|---|---|---|---|---|
| Rules of the Road: State of Wyoming Driver License Manual | WYDOT Driver Services Program, Public Affairs Office | 2021 edition; produced August 2021 | <https://www.dot.state.wy.us/files/live/sites/wydot/files/shared/Driver_Services/Help%20Documents%20and%20Manuals/2021_DriverManual_web_ClassC_w%20cover.pdf> | 2026-09-07 | Direct official PDF, saved as `tmp/wyoming-handbook.pdf`; extracted text at `tmp/wyoming-read.txt` |
| Wyoming Statutes, Title 31 - Motor Vehicles | Wyoming Legislature | Online Title 31 PDF; edition label not recorded | <https://www.wyoleg.gov/statutes/compress/title31.pdf> | 2026-09-07 | Direct official PDF, saved as `tmp/wyoming-title31.pdf`; normalized/extracted text saved in `tmp/wyoming-title31-norm.txt` and `tmp/wyoming-statute.txt` |
| Learner Permits | Wyoming Department of Transportation Driver Services | Undated web page | <https://www.dot.state.wy.us/home/driver_license_records/driver-license/learner-permits.html> | 2026-09-07 | Direct; visible text is represented in `tmp/wyoming-wydot-pages.txt` |
| Testing Requirements | Wyoming Department of Transportation Driver Services | Undated web page | <https://www.dot.state.wy.us/home/driver_license_records/driver-license/testing.html> | 2026-09-07 | Direct; visible text in `tmp/wyoming-wydot-pages.txt` |
| Driver License | Wyoming Department of Transportation Driver Services | Undated web page | <https://www.dot.state.wy.us/home/driver_license_records/driver-license.html> | 2026-09-07 | Direct; visible text in `tmp/wyoming-wydot-pages.txt` |
| Frequently Asked Questions | Wyoming Department of Transportation Driver Services | Undated web page | <https://www.dot.state.wy.us/home/driver_license_records/frequently-asked-questions.html> | 2026-09-07 | Direct; visible text in `tmp/wyoming-wydot-pages.txt` |

The manual states that questions are taken from its information and also
states that it is not itself an expression of law. Title 31 supplies exact
statutory rules omitted or simplified by the manual. Current WYDOT pages supply
permit sequence and testing information that may postdate the 2021 manual.

## 2. Test format

| Item | Current evidence in the bank | Source / status |
|---|---|---|
| Knowledge test | Automated test covering signs, signals/markings, and multiple-choice rules, safety, crash-prevention and equipment questions | 2021 manual, “Required tests - Written test” (printed p. 7; PDF p. 9) |
| Question count / pass mark | Not published in the captured official sources | The bank does not infer either value from third-party practice tests. A practice result is not presented as an official pass or fail verdict. |
| Attempts | At most two written-test attempts in one day | Manual p. 7 and current WYDOT Testing page |
| Retest wait | Manual says 24 hours after failure; if 13 or more questions are missed, three days | Manual p. 7. The current WYDOT web page gives the two-attempt daily limit but does not repeat this wait detail; confirm whether the manual remains current for this rule |
| Oral access | Oral test is available by request; current WYDOT page says the system can read questions aloud through a phone system | Manual p. 7; WYDOT Testing page |
| Language | English testing; manual says an interpreter may be used for a non-commercial written test when the applicant cannot speak or write English | Manual p. 7; check wording with current WYDOT page before publication |
| Time limit / early stop | No time limit or early-stop rule is documented in the retrieved source text | Not verified; do not infer either rule |
| Test location | WYDOT exam station / automated testing system; current office availability can vary | WYDOT Testing page; location-specific appointment rules should be checked with the relevant exam office |
| Fee | WYDOT FAQ lists $45 for a Class C licence or permit; that is a licence/permit fee and must not be presented as a separate knowledge-test fee | Current WYDOT FAQ; separate test fee not established in the captured sources |

## 3. Section and page map

The official PDF has 98 pages. The page values below use the manual's printed
page numbers; the PDF deep link is generally printed page + 1. The full table
of contents is transcribed in `tmp/wyoming-read.txt`.

| Manual section | Printed pages | Main coverage |
|---|---:|---|
| Customer Service Guide | 3-16 | Licensing, eligibility, identification, permit stages, tests, fees and services |
| Losing the privilege to drive | 17-26 | Suspensions, cancellations, revocations, DUI, reinstatement and interlock |
| Safety laws/issues | 27-38 | Seat belts, child restraints, alcohol/drugs and driver responsibility |
| Rules of the Road | 39-65 | Speed, right of way, stops, turns, backing, passing, parking, interstate, signs and crashes |
| Sharing the road safely | 66-70 | Motorcycles, pedestrians, bicycles, farm/slow vehicles, trucks, move-over and animals |
| Safe driving tips (IPDE) | 71-74 | Scanning, communication, following distance, space and risk management |
| Special driving conditions | 75-83 | Reduced light, weather, emergency and hazardous situations, construction |
| Cell phones | 86-87 | Phone use and related law |
| Titling and registration | 88 | Vehicle paperwork |
| Definitions | 89 | Terms |

The extracted contents include front-matter pages and chapter headings, but
some page numbering in the source extraction is shifted by the cover. Excerpt
`section` labels and PDF `#page=` links are the operational references. A
reviewer should use the printed page shown in the excerpt label and confirm the
PDF landing page visually.

## 4. What the handbook does not say

The following gaps are recorded in the current question-file comments and
excerpt set. Exact citations are already attached to the affected questions.

| Rule | Handbook coverage | Statutory source |
|---|---|---|
| Parking distances beyond the 15-foot hydrant rule | Most distances are absent | W.S. 31-5-504, Title 31 PDF; exact section cited in excerpts |
| Default limits for paved non-interstate/non-state-highway roads and unpaved roads | Manual table is incomplete for these categories | W.S. 31-5-301(b)(iv) |
| Stop distance at railroad crossings | Manual does not give the statutory 50-foot / 15-foot band | W.S. 31-5-510(a) |
| Liability insurance minimums | Not stated | W.S. 31-9-102(a)(xi) |
| Texting fine | Not stated | W.S. 31-5-237(c) |
| Other statutory rules and numerical details | Manual itself says it is not the law and simplifies statutory language | Title 31 sections linked per excerpt |

The statute PDF used for excerpts is the official legislature-hosted Title 31
PDF. Its current consolidation date is not captured in the surviving note
artifacts; this should be added on the next source refresh.

## 5. Conflicts

The three conflicts below are described in the current sets 1-3 header. Each
question was constructed around a case where the handbook and statute agree.

1. **Uncontrolled intersections.** The manual says yield to the driver on the
   right regardless of who first reaches and enters. W.S. 31-5-220(a) gives
   priority to the driver who entered first, then uses the right-hand rule for
   a tie. The bank's questions use simultaneous arrivals, where both readings
   yield the same answer.
2. **Red arrows.** The manual says a red arrow prohibits a turn in its
   direction. W.S. 31-5-403(a)(iii)(C) permits a right turn after stopping on
   a steady red unless prohibited by a sign. Current questions use circular
   red signals or a red arrow with a no-turn-on-red sign, where the sources
   agree.
3. **Crash reporting.** The manual's $1,000 property-damage threshold differs
   from W.S. 31-5-1105(b), which uses injury, death or a disabling-damage
   condition rather than a dollar threshold. Current questions use scenarios
   that satisfy both sources.

The section 4 omissions and these three conflicts are recorded in the bank's
source notes. The list covers differences identified for the questions;
validator success does not establish that the underlying official sources
will remain unchanged.

## 6. What learners report

Local Reddit-search results are saved in `tmp/wyoming-reddit-*.txt`. Many
results are unrelated to Wyoming learner testing or are from general driving
subreddits; a filename alone is not evidence that a post informed the bank.
No exact live test questions are copied. The captured local evidence includes
these relevant posts:

| Subreddit | Thread | Date | What the post reports | Question IDs shaped |
|---|---|---|---|---|
| r/driving (general, not Wyoming-specific) | “I failed the learners permit test 4 times now.” (`1ti1s24`) | 2026-05-19 | Poster describes repeated failures and difficulty with a vehicle-skid rule, then reports passing after reading a handbook and taking practice tests. This is one person's account, not a measure of Wyoming exam frequency. | No ID attribution established in the surviving research record. |
| r/driving (general, not Wyoming-specific) | “I finally got my permit after 26 fails” (`15zjmix`) | 2023-08-23 | Poster reports many attempts before passing; the saved post itself does not explain the reasons. | No ID attribution established. |
| r/driving (general, not Wyoming-specific) | “Best way to study for a permit test?” (`12ylgb3`) | 2023-04-25 | Participants offer varied study approaches, including handbook review and practice tests; advice is anecdotal. | No ID attribution established. |
| r/wyoming | “Any Teen Drivers from Wyoming?” (`e5zbsz`) | 2019-12-04 | A teen asks about getting licensed after moving to Wyoming, including winter driving; replies discuss permit holding periods, but dated comments are not treated as current rules. | No ID attribution established. |

These reports can help identify learner anxiety and study needs, but they do
not establish Wyoming's test content. No independent driving-school blog or
official “most missed” question source is documented in the saved evidence.
The report-to-question mapping remains unclaimed because the surviving record
does not tie a particular observation to a specific item.

## 7. Local gotchas

The current jurisdiction record lists these Wyoming-specific rules. The
questions should retain precise source citations, especially where a figure
comes from Title 31 instead of the handbook.

- **Permit progression:** the permit, intermediate stage and full privileges
  depend on age, time held and supervised practice. A simple pass score does
  not unlock the next stage by itself.
- **School buses:** the stop duty depends on whether the roadways are separate;
  a painted line is not the same as a physical roadway division.
- **Uncontrolled intersections:** first arrival and simultaneous arrival are
  distinct cases under statute. Do not teach the right-hand tie-breaker as
  applying when a driver already entered first.
- **Flashing red:** it requires a full stop, like a stop sign, then the normal
  yield sequence. Railroad flashers have their own stopping-distance rule.
- **Move-over and following distance:** Wyoming's figures depend on the
  vehicle, road and conditions. Keep the numbers linked to the manual or
  statute instead of turning them into universal rules.
- **Winter conditions:** the manual gives a progression for following
  distance on wet roads, snow/slush and ice. The ice figure is especially
  important because black ice can look like wet pavement.

## 8. Verification

**Status as of 2026-09-20: bank validation passed.** `validate-driving.mjs
--only wyoming` reports 0 errors and 16 warnings. All 16 warnings concern
long excerpts.

- Excerpt verification passed: 471/471 excerpts against three sources. The
  stored audit artifact `tmp/wyoming-verify.json` reports `mangled: 0` and
  `nonOfficial: 0`. This checks quotes against extracted text and does not
  replace visual review of source extraction.
- Font-map review recorded in `src/lib/driving/wyoming/excerpts.ts`: the
  handbook extraction produced one flagged token (`SL0W`) in a stylized
  graphic caption; the Title 31 extraction produced none.
- Excerpts: 471. Rendered handbook snippets: 356. Fourteen handbook quote
  misses and 101 statute/web excerpts skipped as expected by the snippet
  pipeline.
- `validate-driving.mjs --only wyoming`: 0 errors, 16 long-excerpt warnings.

The bank has 195 questions across six sets, 471 verified excerpts and 356
rendered handbook snippets. The validator passed with the long-excerpt
warnings recorded above.
