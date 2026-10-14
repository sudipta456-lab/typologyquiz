# Vermont - research note

Completed bank. Slug `vermont`, code `VT`, US. `contentDate` in the bank is
2026-10-14; handbook edition is the 2025 Vermont Driver's Manual, form VN-007.
The bank contains 195 questions across six sets.

## 1. Sources read

| Source | Publisher | Edition label | URL | Fetched | Method |
|---|---|---|---|---|---|
| Vermont Driver's Manual | Vermont Department of Motor Vehicles, Agency of Transportation | 2025 edition; form VN-007; cover says 2025 and inside form line says VN-007 07/2024 MTC | <https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf> | Confirmed as the DMV's currently listed manual on 2026-10-14. The local PDF/text artifacts predate this release review. | Direct official PDF; extracted to `tmp/vermont-handbook.txt` |
| Vermont Statutes Annotated, Title 23 - Motor Vehicles | Vermont General Assembly | Current online statutory text; no edition label recorded in the local artifact | <https://legislature.vermont.gov/statutes/> | Exact fetch date not recorded in the surviving audit files; bank `contentDate` is 2026-09-07. | Direct official sections; text saved as `tmp/vermont-statute.txt`; excerpt links point to individual sections |
| DriveVermont tutorial | Vermont DMV | Web page; no edition label | <https://drivevt.vermont.gov/> | Exact fetch date not recorded in the surviving audit files. | Official DMV study resource referenced by the manual |
| Learner's Permit information | Vermont DMV | Web page; no edition label | <https://dmv.vermont.gov/licenses/new/learners-permit> | Exact fetch date not recorded in the surviving audit files. | Direct official page referenced by the jurisdiction record |

The question bank uses the handbook for its study syllabus and uses Title 23
where the handbook omits a number or legal detail. No archive snapshot is
recorded. The missing capture timestamps should be recorded on the next source
refresh; they are not inferred from file modification dates.

## 2. Test format

| Item | Current evidence in the bank | Source / status |
|---|---|---|
| Knowledge test | 20 multiple-choice questions, four choices each; 16 correct to pass | 2025 manual, Chapter 4, PDF page 19 (printed page 18); excerpt keys `test-20-questions`, `test-four-answers`, `test-pass-16` |
| Delivery | Online through mydmv.vermont.gov; no longer taken at a DMV counter | Manual, Chapter 1, PDF page 3 (printed page 2); excerpt keys `test-online`, `test-online-website` |
| Time limit | No time limit is stated in the manual or recorded official-page evidence | Not published in the sources checked; do not promise an untimed test without a fresh official check |
| Early-stop rule | No early-stop rule is recorded | Not verified |
| Retest | Manual says wait at least one day after a failed test | Manual, Chapter 4, PDF page 19; excerpt key `test-retake-one-day` |
| Fee | The manual has a fees chapter and the bank records that each attempt has a fee, but the current test fee amount is not captured here | Manual, Chapter 6 and DMV fee page; amount needs current official confirmation |
| Location / mode | Online; DMV manual says the permit test is no longer taken in-office | Manual, Chapter 1, PDF page 3 |
| Study resource | DriveVermont has tutorial material, quizzes and a practice exam, according to the manual | Manual, PDF page 3; official tutorial link above |

The road test is separate from the knowledge test. Details in the jurisdiction
record about road-test skills and vehicle documents are outside the written
test format and should be refreshed against the current DMV page before being
presented as current.

## 3. Section and page map

The 2025 manual is 76 PDF pages. PDF page numbers are used in excerpt deep links;
printed page numbers begin one lower from PDF page 2 onward.

| Chapter / section | Printed pages | PDF pages |
|---|---:|---:|
| Front matter, safety message, contents | i-4 | 1-5 |
| 1. General Information | 5-6 | 6-7 |
| 2. How to Lose Your License | 7 | 8 |
| 3. Proof of Identity | 8-11 | 9-12 |
| 4. General License Information, including tests and permit/license questions | 12-19 | 13-20 |
| 5. Graduated Driver's License Program | 20-22 | 21-23 |
| 6. Fees, Renewals & Replacements | 23-24 | 24-25 |
| 7. Driving Safely and Studying for Your Permit | 25-63 | 26-64 |
| 8. Point System | 64 | 65 |
| 9. Vehicle Ownership | 65-69 | 66-70 |
| 10. Commercial Driver's License | 70 | 71 |
| 11. Persons with Disabilities | 71-72 | 72-73 |
| 12. Parents or Guardians | 73-75 | 74-76 |

Chapter 7's contents map is especially useful for reviewing the driving-rule
questions: how to drive safely (printed p. 25), parking (p. 29), roundabouts
(p. 29), police stops (p. 30), move-over law (p. 31), signals/signs/markings
(pp. 31-36), sharing the road (pp. 37-45), hazardous conditions (pp. 46-49),
interstate driving (pp. 50-51), impaired driving (pp. 52-53), distracted
driving (pp. 54-55), and the road skills test (pp. 56-63).

## 4. What the handbook does not say

The bank's source comments and questions identify these gaps that were filled
from Title 23.

| Rule | Handbook coverage | Statutory source used |
|---|---|---|
| Parking distances, including the six-foot hydrant distance, crosswalk, stop-sign/signal approach and railroad crossing | The manual lists parking restrictions but does not provide the distances used in the questions | 23 V.S.A. § 1104, <https://legislature.vermont.gov/statutes/section/23/013/01104> |
| Turn signal distance | Handbook coverage is incomplete for the statutory distance | 23 V.S.A. § 1064, <https://legislature.vermont.gov/statutes/section/23/013/01064> |
| School-bus stop details and exceptions | The handbook says to stop for a bus displaying red lights but does not give all statutory detail | 23 V.S.A. § 1075, <https://legislature.vermont.gov/statutes/section/23/013/01075> |
| Move-over speed figure | The handbook says 20 mph below the limit if a lane change cannot be made; statute says use a reasonable, safe and prudent speed without that figure | 23 V.S.A. § 1050, <https://legislature.vermont.gov/statutes/section/23/013/01050> |
| Left turn on red from a one-way street to a one-way street | Not covered in the manual | 23 V.S.A. § 1022; no question in the current bank relies on this permission |
| Liability minimums, DUI suspension detail and motorcycle helmets | Incomplete or absent in the manual | 23 V.S.A. §§ 800, 1206 and 1256; section links are present in `src/lib/driving/vermont/excerpts.ts` |

## 5. Conflicts

1. **Move-over speed.** The manual gives a 20 mph-below-the-limit instruction
   when a lane change is not possible. The statute requires a reasonable, safe
   and prudent speed but supplies no number. Questions must distinguish the
   manual's test guidance from the statutory duty; they must not represent the
   20 mph figure as statutory text.
2. **Left turn on red.** Title 23 permits a left turn from a one-way street to
   a one-way street after stopping, while the manual does not mention this
   allowance. The current set notes say no item turns on that permission.
3. **School bus.** The manual is less detailed than 23 V.S.A. § 1075 about the
   stop rule and exception. The bank uses the statute for the missing detail.

These are the conflicts recorded in the bank's source notes. Validator success
does not establish that the source texts will remain unchanged.

## 6. What learners report

Local Reddit search artifacts exist in `tmp/vermont-reddit-*.txt`, including
threads from r/vermont, r/burlington, r/southburlington, and r/DMV. They are
informal, self-selected reports, not evidence of the official exam content.
No recalled test item is reproduced in the bank. No question IDs are
attributed to forum reports here because a source-to-question link is not
established in the surviving research record.

One relevant thread in the local artifacts is **“Drivers Test!!! Help!”**,
r/vermont, posted 2023-05-26 (Reddit thread `13sd7lm`). Respondents describe
road-test mistakes involving parallel parking, mirror/blind-spot checks,
signals, complete stops and speed choice. These are anecdotes about a road
test, not the written knowledge test; they do not establish frequency or
official grading. This thread should not be used to infer knowledge-test
question frequency.

The search artifacts also include **“Question about the Vermont driver's
permit test (timed questions)”**, r/vermont, posted 2019-03-24 (`b4x4yg`), and
**“Permit/Knowledge Test”**, r/DMV, posted 2026-07-17 (`1uynzrh`). Their
claims are not used in this bank.
No independent driving-school blog or licensing-authority “most missed” test
source is documented in the current audit files.

## 7. Local gotchas

The jurisdiction record currently lists the following Vermont-specific rules.
The explanations below describe why they can surprise drivers; each rule
should remain tied to its cited manual or statute source.

- **Default speed limit:** the bank says 50 mph unless posted otherwise, with
  a different Interstate limit. Drivers arriving from states with higher
  defaults may carry over the wrong number.
- **Following distance:** the manual teaches four seconds in ordinary
  conditions and more in adverse conditions; drivers may bring a shorter
  habit from elsewhere.
- **Hydrant distance:** Vermont's six feet is unusual compared with the
  15-foot figure used in many jurisdictions. The tested rule comes from
  23 V.S.A. § 1104.
- **Graduated licensing:** a junior driver's path includes staged passenger
  permissions and holding periods; remembering only the final stage can lead
  to errors about who may ride with a new driver.
- **Bicycle passing:** the four-foot clearance is a Vermont-specific number
  supported by the manual and 23 V.S.A. § 1033.
- **Move-over rule:** changing lanes is preferred when safe; when not
  possible, the manual's numerical advice and the statute's general duty must
  be understood as different source statements.
- **Motorcycle helmets:** the statutory helmet rule applies to riders and
  passengers; the current question material cites 23 V.S.A. § 1256.
- **Implied-consent / under-21 alcohol rules:** thresholds and consequences
  differ from ordinary adult DUI rules. Questions should continue to use
  exact statutory and manual wording rather than broad summaries.

## 8. Verification

**Status as of 2026-10-14: bank validation passed.** `validate-driving.mjs
--only vermont` reports 0 errors and 17 warnings. All 17 warnings concern
long excerpts.

- Excerpt verification passed: 669/669 excerpts against two official sources.
  The stored audit artifact `tmp/vermont-verify.json` reports `mangled: 0` and
  `nonOfficial: 0`. This checks quotes against extracted text and does not
  replace visual review of source extraction.
- Excerpts: 669. Rendered handbook snippets: 545 (81%).
- `validate-driving.mjs --only vermont`: 0 errors, 17 long-excerpt warnings.

The bank has 195 questions across six sets, 669 verified excerpts and 545
rendered handbook snippets. The validator passed with the long-excerpt
warnings recorded above.
