import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts behind the Kentucky bank - 320 of them: 279 from the
// Kentucky Driver Manual and 41 from the Kentucky Revised Statutes.
//
// Sources, and why there are two of them:
//
//  - The Kentucky Driver Manual, the edition dated 10-11-2023 on the Kentucky
//    State Police site and linked from drive.ky.gov as "Study the Driver
//    Manual". It runs 78 pages, is published by the Kentucky State Police with
//    the Kentucky Transportation Cabinet, and is the ONLY source KSP endorses
//    for the written test - its own driver-testing page says so.
//  - The Kentucky Revised Statutes, chapters 186, 189 and 189A, published by
//    the Legislative Research Commission at apps.legislature.ky.gov. The manual
//    is written for a young reader and leaves out numbers the test still
//    expects. It never gives a parking distance from a hydrant or a stop sign,
//    never states the turn-signal distance as law, and it has fallen behind the
//    statute in two places: the permit age (the book says 16, KRS 186.450(1)
//    has said 15 since 2025) and the school-bus exemption (the book excuses
//    oncoming traffic on any road of four or more lanes, while KRS 189.370(1)
//    as amended effective 15 July 2026 requires that the four lanes be divided
//    by an elevated barrier or unpaved median). Both readings are quoted below
//    so a learner can see the gap rather than be told only one of them.
//
// Every quote was located mechanically in the fetched source and checked as an
// exact substring before it was written here. Nothing is paraphrased. The same
// four normalisations the sibling banks use were applied to the extracted text
// and to nothing else: curly quotes, en dashes and em dashes fold to ASCII;
// runs of whitespace, including the line breaks the PDF inserts mid-sentence,
// collapse to single spaces; the section symbol is spelled out as "Section";
// and where a source states a rule as a stem followed by a bulleted list, the
// items run together in the order they appear - no words are changed, dropped
// or reordered. The sources' own slips are preserved as they stand, including
// the manual's "alcohol concertation" in its aggravating-circumstances list,
// its "the tracts" for the tracks beside a crossbuck, and its "must by
// present" in the work-zone fines paragraph, because a quote that has been
// tidied up is no longer a quote.

const HANDBOOK =
  "Kentucky Driver Manual (Kentucky State Police / Kentucky Transportation Cabinet, 10-11-2023)";
const HANDBOOK_URL =
  "https://wp.kentuckystatepolice.ky.gov/wp-content/uploads/2023/11/Kentucky-Driver-Manual-10-11-2023.pdf";
const KRS = "Kentucky Revised Statutes (Kentucky Legislative Research Commission)";
const krs = (id: string) => `https://apps.legislature.ky.gov/law/statutes/statute.aspx?id=${id}`;

export const kentuckyExcerpts: HandbookExcerpt[] = [
  {
    key: "permit-age-manual",
    quote:
      "Drivers must be at least 16 years of age to take the vision " +
      "and written knowledge tests and apply for a permit.",
    source: HANDBOOK,
    section: "Section One: The Driver's License - Step 1: Permit Phase",
    url: HANDBOOK_URL,
  },
  {
    key: "permit-age-statute",
    quote:
      "A person who is at least fifteen (15) years of age may apply " +
      "for an instruction permit to operate a motor vehicle.",
    source: KRS,
    section: "KRS 186.450(1) - Instruction permits, age requirements",
    url: krs("55912"),
  },
  {
    key: "permit-hold-180",
    quote:
      "Permit holders ages 16 - 20 must hold the driving permit for a " +
      "minimum of 180 days.",
    source: HANDBOOK,
    section: "Section One: The Driver's License - Step 1: Permit Phase",
    url: HANDBOOK_URL,
  },
  {
    key: "permit-practice-log",
    quote:
      "To be eligible for an intermediate license, a driver must " +
      "complete a Practice Driving Log with a minimum of 60 hours of " +
      "practice driving. 10 hours must be completed at night.",
    source: HANDBOOK,
    section: "Section One: The Driver's License - Step 1: Permit Phase",
    url: HANDBOOK_URL,
  },
  {
    key: "permit-supervisor",
    quote:
      "Permit holders may only drive when accompanied (in the front " +
      "passenger seat) by a licensed driver 21 years of age or older " +
      "and shall have the instruction permit in possession at all " +
      "times when operating a motor vehicle.",
    source: HANDBOOK,
    section: "Section One: The Driver's License - Permit Driving",
    url: HANDBOOK_URL,
  },
  {
    key: "permit-passenger",
    quote:
      "Passenger restriction - limited to 1 (one) unrelated person " +
      "under 20 years of age.",
    source: HANDBOOK,
    section: "Section One: The Driver's License - Permit Driving",
    url: HANDBOOK_URL,
  },
  {
    key: "permit-curfew",
    quote:
      "Permit holders under the age of 18 may not drive between the " +
      "hours of midnight and 6:00 a.m. unless the person can " +
      "demonstrate good cause for driving.",
    source: HANDBOOK,
    section: "Section One: The Driver's License - Permit Driving",
    url: HANDBOOK_URL,
  },
  {
    key: "permit-curfew-statute",
    quote:
      "A person with an instruction permit who is under the age of " +
      "eighteen (18) shall not operate a motor vehicle, motorcycle, " +
      "or moped between the hours of 12 midnight and 6 a.m. unless " +
      "the person can demonstrate good cause for driving, including " +
      "but not limited to emergencies, involvement in school-related " +
      "activities, or involvement in work-related activities.",
    source: KRS,
    section: "KRS 186.450(5) - Instruction permit restrictions",
    url: krs("55912"),
  },
  {
    key: "permit-passenger-statute",
    quote:
      "a person with an instruction permit who is under the age of " +
      "eighteen (18) years shall not operate a motor vehicle at any " +
      "time when accompanied by more than one (1) unrelated person " +
      "who is under the age of twenty (20) years.",
    source: KRS,
    section: "KRS 186.450(6) - Instruction permit restrictions",
    url: krs("55912"),
  },
  {
    key: "zero-tolerance-permit",
    quote:
      "All drivers under 21 are subject to \"Zero Alcohol Tolerance\" " +
      "(Defined as .02 Blood Alcohol Concentration)",
    source: HANDBOOK,
    section: "Section One: The Driver's License - Permit Driving",
    url: HANDBOOK_URL,
  },
  {
    key: "violation-180",
    quote:
      "If a violation(s) of these laws occurs, it will add an " +
      "additional minimum of one hundred eighty (180) days from the " +
      "date of the violation before the driver may apply for an " +
      "intermediate license.",
    source: HANDBOOK,
    section: "Section One: The Driver's License - Permit Driving",
    url: HANDBOOK_URL,
  },
  {
    key: "minor-points",
    quote:
      "A driver under the age of 18 who accumulates more than six " +
      "points may have their driving privilege suspended.",
    source: HANDBOOK,
    section: "Section One: The Driver's License - Permit Driving",
    url: HANDBOOK_URL,
  },
  {
    key: "intermediate-curfew",
    quote:
      "The driver is not permitted to drive between 12:00 a.m. and " +
      "6:00 a.m. unless the driver can demonstrate a good cause for " +
      "driving, such as emergencies, school, or work-related " +
      "activities.",
    source: HANDBOOK,
    section: "Section One: The Driver's License - Intermediate License Driving",
    url: HANDBOOK_URL,
  },
  {
    key: "intermediate-age",
    quote:
      "a person who is under eighteen (18) years of age may apply for " +
      "an intermediate license to operate a motor vehicle if the " +
      "person has: (a) Attained the age of sixteen (16) years;",
    source: KRS,
    section: "KRS 186.452(1) - Intermediate license",
    url: krs("55914"),
  },
  {
    key: "intermediate-hours-statute",
    quote:
      "attesting that the applicant has completed at least sixty (60) " +
      "hours of supervised driving experience, including at least ten " +
      "(10) hours at night",
    source: KRS,
    section: "KRS 186.452(1)(c) - Intermediate license",
    url: krs("55914"),
  },
  {
    key: "road-test-fail-wait",
    quote:
      "If you fail the road skills test, you must wait at least one " +
      "week from the date of the failure before attempting the test " +
      "again.",
    source: HANDBOOK,
    section: "Section One: The Driver's License - Requirements for the Road Test",
    url: HANDBOOK_URL,
  },
  {
    key: "written-pass-mark",
    quote:
      "Review of the manual in its entirety is recommended. " +
      "Applicants must make a minimum score of 80% to pass this test.",
    source: HANDBOOK,
    section: "Section One: Testing Requirements / Preparation - Written Test",
    url: HANDBOOK_URL,
  },
  {
    key: "written-test-content",
    quote:
      "The test will contain questions regarding driving rules, " +
      "regulations, procedures, and highway signs.",
    source: HANDBOOK,
    section: "Section One: Testing Requirements / Preparation - Written Test",
    url: HANDBOOK_URL,
  },
  {
    key: "vision-2040",
    quote:
      "A minimum visual acuity of 20/40 (corrected or uncorrected) is " +
      "required before the applicant will be allowed to move on to " +
      "the written test.",
    source: HANDBOOK,
    section: "Section One: Testing Requirements / Preparation - Vision Screening",
    url: HANDBOOK_URL,
  },
  {
    key: "headlight-reveal",
    quote:
      "Headlights on high beam must be strong enough to light the " +
      "road sufficiently to reveal a person 350 feet ahead, and 100 " +
      "feet ahead on low beam.",
    source: HANDBOOK,
    section: "Section One: Preparing for the Vehicle Inspection - Lights",
    url: HANDBOOK_URL,
  },
  {
    key: "taillight-500",
    quote:
      "The rear light, or taillight, must be red and must be lighted " +
      "and placed so it can be seen 500 feet behind your vehicle.",
    source: HANDBOOK,
    section: "Section One: Preparing for the Vehicle Inspection - Lights",
    url: HANDBOOK_URL,
  },
  {
    key: "seatbelt-1981",
    quote:
      "A person shall not operate a motor vehicle manufactured after " +
      "1981 on the public roadways unless the driver and all " +
      "passengers are wearing a properly adjusted and fastened seat " +
      "belt.",
    source: HANDBOOK,
    section: "Section One: Preparing for the Vehicle Inspection - Safety Belts and Shoulder Belts",
    url: HANDBOOK_URL,
  },
  {
    key: "mirrors-required",
    quote:
      "A vehicle must be equipped with one mirror mounted on the left " +
      "side of the vehicle, and one mirror mounted either inside the " +
      "vehicle approximately in the center or on the right side of " +
      "the vehicle.",
    source: HANDBOOK,
    section: "Section One: Preparing for the Vehicle Inspection - Mirrors",
    url: HANDBOOK_URL,
  },
  {
    key: "road-test-autofail",
    quote:
      "Any collision, traffic violation, or dangerous act may result " +
      "in automatic failure, and the test will not be completed.",
    source: HANDBOOK,
    section: "Section One: Road Test Scoring",
    url: HANDBOOK_URL,
  },
  {
    key: "road-test-instructions",
    quote:
      "Failure to follow the Examiner's instructions two times during " +
      "the test will result in being disqualified.",
    source: HANDBOOK,
    section: "Section One: Road Test Scoring",
    url: HANDBOOK_URL,
  },
  {
    key: "transfer-30-days",
    quote:
      "Persons moving into Kentucky must obtain a Kentucky Driver's " +
      "License within 30 days of establishing residence.",
    source: HANDBOOK,
    section: "Section One: Out-of-State License or Driving on an Existing License",
    url: HANDBOOK_URL,
  },
  {
    key: "address-change-10",
    quote:
      "If you change your address or name for any reason, you must " +
      "obtain a duplicate license within 10 days.",
    source: HANDBOOK,
    section: "Section One: Driver License Renewal / Updates - Change of Address or Name",
    url: HANDBOOK_URL,
  },
  {
    key: "points-12",
    quote:
      "Upon the accumulation of 12 points (7 points if under age " +
      "eighteen) within a two-year period, a driver's privilege to " +
      "operate a motor vehicle may be suspended.",
    source: HANDBOOK,
    section: "Section One: Loss of Driving Privileges - The Kentucky Point System",
    url: HANDBOOK_URL,
  },
  {
    key: "points-expire",
    quote:
      "Points assessed under this system expire two (2) years from " +
      "the date of conviction.",
    source: HANDBOOK,
    section: "Section One: Loss of Driving Privileges - The Kentucky Point System",
    url: HANDBOOK_URL,
  },
  {
    key: "reckless-three",
    quote:
      "Reckless driving - three (3) convictions within twelve (12) " +
      "months;",
    source: HANDBOOK,
    section: "Section One: Loss of Driving Privileges - Suspension or Revocation of License",
    url: HANDBOOK_URL,
  },
  {
    key: "registration-15-days",
    quote:
      "a person who purchases a motor vehicle, or brings a motor " +
      "vehicle into Kentucky from another state must make application " +
      "for registration within fifteen (15) days.",
    source: HANDBOOK,
    section: "Section Two: General Information - Motor Vehicle Registration",
    url: HANDBOOK_URL,
  },
  {
    key: "insurance-minimums",
    quote:
      "This means liability coverage of $25,000.00 for all claims for " +
      "bodily injury damages sustained by any one person and not less " +
      "than $50,000.00 for all bodily injury damages sustained by all " +
      "persons as a result of an accident, as well as $25,000.00 for " +
      "all property damage as a result of any one accident.",
    source: HANDBOOK,
    section: "Section Two: General Information - Insurance Law",
    url: HANDBOOK_URL,
  },
  {
    key: "insurance-penalty",
    quote:
      "Failure to maintain insurance is a criminal offense, and any " +
      "owner who fails to maintain insurance on his vehicle shall " +
      "have his vehicle registration revoked.",
    source: HANDBOOK,
    section: "Section Two: General Information - Insurance Law",
    url: HANDBOOK_URL,
  },
  {
    key: "insurance-proof",
    quote:
      "All motor vehicle owners and operators must maintain in the " +
      "vehicle written proof of minimum liability coverage.",
    source: HANDBOOK,
    section: "Section Two: General Information - Insurance Law",
    url: HANDBOOK_URL,
  },
  {
    key: "vision-2060",
    quote:
      "In Kentucky, visual requirements for driving require an " +
      "individual to have visual acuity of at least 20/60 or better " +
      "in at least one eye.",
    source: HANDBOOK,
    section: "Section Two: General Information - Vision Requirements for Driving",
    url: HANDBOOK_URL,
  },
  {
    key: "seizure-90",
    quote:
      "A license applicant or licensee must be free of seizures, " +
      "blackout, loss of conscience, or an altered state of awareness " +
      "for 90 days to obtain or maintain driving privileges.",
    source: HANDBOOK,
    section: "Section Two: General Information - Seizures, Blackout, Loss of Conscience",
    url: HANDBOOK_URL,
  },
  {
    key: "fatigue-sleep",
    quote:
      "Get adequate sleep - most people need 7 to 9 hours to maintain " +
      "proper alertness during the day.",
    source: HANDBOOK,
    section: "Section Three: Be in Shape to Drive - Fatigue",
    url: HANDBOOK_URL,
  },
  {
    key: "fatigue-stop-100",
    quote:
      "Plan to stop about every 100 miles or 2 hours during long trips.",
    source: HANDBOOK,
    section: "Section Three: Be in Shape to Drive - Fatigue",
    url: HANDBOOK_URL,
  },
  {
    key: "fatigue-nap",
    quote:
      "If you start feeling tired, stop driving, and pull off at the " +
      "next exit or rest area to take a 15-to-20-minute nap or find a " +
      "place to sleep for the night.",
    source: HANDBOOK,
    section: "Section Three: Be in Shape to Drive - Ways to Avoid Fatigue",
    url: HANDBOOK_URL,
  },
  {
    key: "distraction-visual",
    quote:
      "Visual Distraction - Tasks that require the driver to look " +
      "away from the roadway to visually obtain information;",
    source: HANDBOOK,
    section: "Section Three: Be in Shape to Drive - Driver Distractions",
    url: HANDBOOK_URL,
  },
  {
    key: "distraction-cognitive",
    quote:
      "Cognitive distraction - Tasks that are defined as the mental " +
      "workload associated with a task that involves thinking about " +
      "something other than the driving task.",
    source: HANDBOOK,
    section: "Section Three: Be in Shape to Drive - Driver Distractions",
    url: HANDBOOK_URL,
  },
  {
    key: "texting-46",
    quote:
      "Sending or receiving a text takes a driver's eyes from the " +
      "road for an average of 4.6 seconds; at 55 mph, this is the " +
      "equivalent of driving the length of an entire football field",
    source: HANDBOOK,
    section: "Section Three: Be in Shape to Drive - Driver Distractions",
    url: HANDBOOK_URL,
  },
  {
    key: "distraction-def",
    quote:
      "Simply put, a distraction is anything that takes your " +
      "attention away from driving.",
    source: HANDBOOK,
    section: "Section Three: Be in Shape to Drive - Driver Distractions",
    url: HANDBOOK_URL,
  },
  {
    key: "aggressive-driving",
    quote:
      "Aggressive driving occurs when an individual intentionally " +
      "commits an action that endangers other persons or property. " +
      "Aggressive driving includes tailgating, changing lanes " +
      "abruptly and speeding.",
    source: HANDBOOK,
    section: "Section Three: Be in Shape to Drive - Emotions, Aggressive Driving and Road Rage",
    url: HANDBOOK_URL,
  },
  {
    key: "road-rage-def",
    quote:
      "Road rage is uncontrolled anger that results in violence or " +
      "threatened violence on the roadway. Road rage is a criminal " +
      "behavior and is prohibited.",
    source: HANDBOOK,
    section: "Section Three: Be in Shape to Drive - Emotions, Aggressive Driving and Road Rage",
    url: HANDBOOK_URL,
  },
  {
    key: "road-rage-response",
    quote:
      "If you should become involved in a road-rage incident, do not " +
      "retaliate, or engage in an argument with the enraged driver.",
    source: HANDBOOK,
    section: "Section Three: Be in Shape to Drive - Emotions, Aggressive Driving and Road Rage",
    url: HANDBOOK_URL,
  },
  {
    key: "alcohol-vision-002",
    quote:
      "Vision is impacted at 0.02 blood alcohol content (BAC) for all " +
      "drivers. The most important sense you use in driving is " +
      "vision.",
    source: HANDBOOK,
    section: "Section Three: Be in Shape to Drive - Effects of Alcohol and Other Impairing Drugs",
    url: HANDBOOK_URL,
  },
  {
    key: "alcohol-first-drink",
    quote:
      "Impairment starts with the first drink. Even one drink of " +
      "alcohol can affect a person's ability to drive.",
    source: HANDBOOK,
    section: "Section Three: Be in Shape to Drive - Effects of Alcohol and Other Impairing Drugs",
    url: HANDBOOK_URL,
  },
  {
    key: "dui-008",
    quote:
      "In Kentucky, a person shall not operate or be in physical " +
      "control of a motor vehicle while having an alcohol " +
      "concentration of 0.08 or above, or while under the influence " +
      "of alcohol, a controlled substance, or other substance which " +
      "impairs driving ability.",
    source: HANDBOOK,
    section: "Section Three: Be in Shape to Drive - Alcohol and the Law",
    url: HANDBOOK_URL,
  },
  {
    key: "dui-under-002",
    quote:
      "If you are under the age of twenty-one (21), you are in " +
      "violation of the law with an alcohol concentration of 0.02 or " +
      "more.",
    source: HANDBOOK,
    section: "Section Three: Be in Shape to Drive - Alcohol and the Law",
    url: HANDBOOK_URL,
  },
  {
    key: "dui-under-008",
    quote:
      "However, you could still be in violation of the law with an " +
      "alcohol concentration under 0.08 if there is evidence of " +
      "impaired driving while under the influence of alcohol or other " +
      "substances.",
    source: HANDBOOK,
    section: "Section Three: Be in Shape to Drive - Alcohol and the Law",
    url: HANDBOOK_URL,
  },
  {
    key: "implied-consent",
    quote:
      "Kentucky implied consent law is based on the principle that " +
      "when you operate a vehicle, you have implicitly consented to a " +
      "lawfully requested test of your blood, breath, urine, or any " +
      "combination of these tests.",
    source: HANDBOOK,
    section: "Section Three: Be in Shape to Drive - Alcohol and the Law",
    url: HANDBOOK_URL,
  },
  {
    key: "refusal-evidence",
    quote:
      "If you refuse to submit to the breath, blood, or urine tests, " +
      "this refusal may be used against you in court as evidence of " +
      "your violation of KRS 189A.010 (DUI).",
    source: HANDBOOK,
    section: "Section Three: Be in Shape to Drive - Alcohol and the Law",
    url: HANDBOOK_URL,
  },
  {
    key: "dui-first-penalty",
    quote:
      "if you are found guilty of an alcohol violation and it is your " +
      "first conviction within a ten (10) year period, you will be " +
      "fined not less than $200 nor more than $500 plus court costs, " +
      "imprisoned in the county jail for not less than forty-eight " +
      "(48) hours nor more than thirty (30) days, and your license " +
      "suspended for four (4) to six (6) months.",
    source: HANDBOOK,
    section: "Section Three: Be in Shape to Drive - Alcohol and the Law",
    url: HANDBOOK_URL,
  },
  {
    key: "dui-aggravating-15",
    quote:
      "Operating a motor vehicle while the alcohol concertation in " +
      "the operator's blood or breath is .15 BAC or higher within two " +
      "(2) hours of cessation of operation of a motor vehicle;",
    source: HANDBOOK,
    section: "Section Three: Be in Shape to Drive - Aggravating Circumstances",
    url: HANDBOOK_URL,
  },
  {
    key: "dui-aggravating-30mph",
    quote:
      "Operating a motor vehicle in excess of 30 mph above the posted " +
      "speed limit;",
    source: HANDBOOK,
    section: "Section Three: Be in Shape to Drive - Aggravating Circumstances",
    url: HANDBOOK_URL,
  },
  {
    key: "dui-aggravating-child",
    quote:
      "Operating a motor vehicle while transporting a passenger under " +
      "the age of twelve (12) years of age.",
    source: HANDBOOK,
    section: "Section Three: Be in Shape to Drive - Aggravating Circumstances",
    url: HANDBOOK_URL,
  },
  {
    key: "interlock-002",
    quote:
      "The ignition interlock device prevents a driver from operating " +
      "that vehicle if the driver's breath-alcohol concentration " +
      "exceeds .02.",
    source: HANDBOOK,
    section: "Section Three: Be in Shape to Drive - Repeat Offenders",
    url: HANDBOOK_URL,
  },
  {
    key: "drug-first-penalty",
    quote:
      "If you are found guilty of a drug violation while driving and " +
      "it is your first conviction within a ten (10) year period, you " +
      "will be fined not less than $200 nor more than $500 plus court " +
      "costs",
    source: HANDBOOK,
    section: "Section Three: Be in Shape to Drive - Illegal Drugs",
    url: HANDBOOK_URL,
  },
  {
    key: "otc-drugs",
    quote:
      "Over-the-counter drugs taken for headaches, colds, hay fever, " +
      "or other allergies or those to calm nerves can make you drowsy " +
      "and affect your driving.",
    source: HANDBOOK,
    section: "Section Three: Be in Shape to Drive - Over-the-Counter Drugs",
    url: HANDBOOK_URL,
  },
  {
    key: "attorney-10-15",
    quote:
      "you will be afforded an opportunity of at least ten (10) " +
      "minutes but not more than fifteen (15) minutes to attempt to " +
      "contact and communicate with an attorney.",
    source: HANDBOOK,
    section: "Section Three: Be in Shape to Drive - Alcohol and the Law",
    url: HANDBOOK_URL,
  },
  {
    key: "tire-penny",
    quote:
      "Place Lincoln's head first into the deepest- looking groove.",
    source: HANDBOOK,
    section: "Section Four: Before You Drive - Check Tread Depth with a Penny",
    url: HANDBOOK_URL,
  },
  {
    key: "seat-10-inches",
    quote:
      "There should be 10 inches between your chest and the steering " +
      "wheel.",
    source: HANDBOOK,
    section: "Section Four: Before You Drive - Adjusting Seat and Mirrors",
    url: HANDBOOK_URL,
  },
  {
    key: "head-restraint",
    quote:
      "Head restraints are designed to prevent whiplash.",
    source: HANDBOOK,
    section: "Section Four: Before You Drive - Adjusting Seat and Mirrors",
    url: HANDBOOK_URL,
  },
  {
    key: "mirror-left",
    quote:
      "To set the left side mirror, the driver must rest his or her " +
      "head against the closed window and set the mirror to barely " +
      "show the rear edge of the vehicle.",
    source: HANDBOOK,
    section: "Section Four: Before You Drive - Adjusting Your Mirrors",
    url: HANDBOOK_URL,
  },
  {
    key: "shoulder-harness",
    quote:
      "A shoulder harness is worn across the shoulder and chest with " +
      "minimal, if any, slack. The shoulder harness should not be " +
      "worn under the arm or behind the back.",
    source: HANDBOOK,
    section: "Section Four: Before You Drive - Using Safety Belts",
    url: HANDBOOK_URL,
  },
  {
    key: "lap-belt",
    quote:
      "The lap belt should be adjusted so that it is snug and lies " +
      "low across your hips after fastening.",
    source: HANDBOOK,
    section: "Section Four: Before You Drive - Using Safety Belts",
    url: HANDBOOK_URL,
  },
  {
    key: "seatbelt-primary",
    quote:
      "Seat Belt Law is primary in Kentucky and drivers can be " +
      "stopped by law enforcement officers if observed driving while " +
      "not wearing seat belts.",
    source: HANDBOOK,
    section: "Section Four: Before You Drive - Using Safety Belts",
    url: HANDBOOK_URL,
  },
  {
    key: "belts-with-airbags",
    quote:
      "Safety belts should be worn even if the vehicle is equipped " +
      "with air bags.",
    source: HANDBOOK,
    section: "Section Four: Before You Drive - Using Safety Belts",
    url: HANDBOOK_URL,
  },
  {
    key: "airbag-rearfacing",
    quote:
      "Never place a rear-facing child safety seat in front of an " +
      "active passenger air bag.",
    source: HANDBOOK,
    section: "Section Four: Before You Drive - Air Bags",
    url: HANDBOOK_URL,
  },
  {
    key: "airbag-children-12",
    quote:
      "Children 12 years of age and under should ride in the back " +
      "seat in a safety belt or child restraint system.",
    source: HANDBOOK,
    section: "Section Four: Before You Drive - Air Bags",
    url: HANDBOOK_URL,
  },
  {
    key: "child-restraint-40",
    quote:
      "Kentucky law requires that any driver of a motor vehicle, when " +
      "transporting a child of forty (40) inches in height or less in " +
      "a motor vehicle operated on the roadways, streets, and " +
      "highways of this state, shall have the child properly secured " +
      "in a child restraint system of a type meeting federal motor " +
      "vehicle safety standards.",
    source: HANDBOOK,
    section: "Section Four: Before You Drive - Child Passenger Safety Laws",
    url: HANDBOOK_URL,
  },
  {
    key: "booster-seat",
    quote:
      "Any driver of a motor vehicle, when transporting a child under " +
      "the age of eight (8) years who is between forty (40) inches " +
      "and fifty-seven (57) inches in height in a motor vehicle " +
      "operated on the roadways, streets, and highways of this state, " +
      "shall have the child properly secured in a child booster seat.",
    source: HANDBOOK,
    section: "Section Four: Before You Drive - Child Passenger Safety Laws",
    url: HANDBOOK_URL,
  },
  {
    key: "child-restraint-fine",
    quote:
      "Any person who violates the provisions of Kentucky's Child " +
      "Restraint Law shall be fined fifty dollars ($50) and shall pay " +
      "an additional fee of ten dollars ($10)",
    source: HANDBOOK,
    section: "Section Four: Before You Drive - Child Passenger Safety Laws",
    url: HANDBOOK_URL,
  },
  {
    key: "booster-57",
    quote:
      "A child of any age who is greater than fifty-seven (57) inches " +
      "in height shall not be required to be secured in a child " +
      "booster seat.",
    source: HANDBOOK,
    section: "Section Four: Before You Drive - Child Passenger Safety Laws",
    url: HANDBOOK_URL,
  },
  {
    key: "secure-load",
    quote:
      "A load must be securely fastened and is only considered secure " +
      "when nothing can slide, shift, fall, or sift onto the roadway " +
      "or become airborne.",
    source: HANDBOOK,
    section: "Section Four: Before You Drive - Secure Your Load",
    url: HANDBOOK_URL,
  },
  {
    key: "adas-not-allowed",
    quote:
      "When taking your driving test, you will not be allowed to use " +
      "certain safety features, such as parking assist and cruise " +
      "control.",
    source: HANDBOOK,
    section: "Section Four: Before You Drive - ADAS Safety Features",
    url: HANDBOOK_URL,
  },
  {
    key: "adas-limits",
    quote:
      "Be aware that safety features may not work properly in certain " +
      "conditions such as rain, snow, ice, fog, hills, and curves.",
    source: HANDBOOK,
    section: "Section Four: Before You Drive - ADAS Safety Features",
    url: HANDBOOK_URL,
  },
  {
    key: "windshield-clutter",
    quote:
      "Do not hang anything from your rearview mirror. Do not clutter " +
      "up the windshield or rear window with decals. They are " +
      "unlawful and block your vision.",
    source: HANDBOOK,
    section: "Section Four: Before You Drive - Having Clean Windows and Mirrors",
    url: HANDBOOK_URL,
  },
  {
    key: "remove-snow",
    quote:
      "Remove snow, ice, and frost from all windows before you start " +
      "to drive.",
    source: HANDBOOK,
    section: "Section Four: Before You Drive - Having Clean Windows and Mirrors",
    url: HANDBOOK_URL,
  },
  {
    key: "hands-2-10",
    quote:
      "Placing your hands at the 2 and 10 o'clock positions is no " +
      "longer recommended because it can be dangerous in a vehicle " +
      "equipped with air bags.",
    source: HANDBOOK,
    section: "Section Five: Basic Driving - Hand Position",
    url: HANDBOOK_URL,
  },
  {
    key: "hands-3-9",
    quote:
      "both hands should be placed on the outside of the steering " +
      "wheel on opposite sides, at the 3 and 9 o'clock positions, to " +
      "maintain control of the vehicle.",
    source: HANDBOOK,
    section: "Section Five: Basic Driving - Hand Position",
    url: HANDBOOK_URL,
  },
  {
    key: "backing-check",
    quote:
      "Check behind your vehicle before you get in. Children and " +
      "small objects cannot be seen from the driver's seat.",
    source: HANDBOOK,
    section: "Section Five: Basic Driving - Backing Up",
    url: HANDBOOK_URL,
  },
  {
    key: "backing-look-rear",
    quote:
      "Continue looking to the rear until coming to a complete stop.",
    source: HANDBOOK,
    section: "Section Five: Basic Driving - Backing Up",
    url: HANDBOOK_URL,
  },
  {
    key: "row-no-assume",
    quote:
      "Although yielding right-of-way rules provide a guide to " +
      "determine who should yield the right of way, no one should " +
      "assume he or she automatically has the right of way.",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Yielding Right of Way",
    url: HANDBOOK_URL,
  },
  {
    key: "row-arrives-first",
    quote:
      "The driver who is at or arrives before you at the intersection;",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Yielding Right of Way",
    url: HANDBOOK_URL,
  },
  {
    key: "row-left-turn",
    quote:
      "Drivers in the opposing traffic lane when you are making a " +
      "left turn. This includes vehicles turning right;",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Yielding Right of Way",
    url: HANDBOOK_URL,
  },
  {
    key: "row-four-way",
    quote:
      "The driver on your right at a four-way intersection controlled " +
      "by stop signs if both of you arrive at the intersection at the " +
      "same time;",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Yielding Right of Way",
    url: HANDBOOK_URL,
  },
  {
    key: "row-driveway",
    quote:
      "Drivers on a public highway if you are entering the highway " +
      "from a driveway or a private road;",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Yielding Right of Way",
    url: HANDBOOK_URL,
  },
  {
    key: "row-minor-road",
    quote:
      "Drivers on a minor road must yield to drivers on a main road.",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Yielding Right of Way",
    url: HANDBOOK_URL,
  },
  {
    key: "row-ramp",
    quote:
      "Drivers already on a limited access or interstate highway if " +
      "you are on the entrance or acceleration ramp;",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Yielding Right of Way",
    url: HANDBOOK_URL,
  },
  {
    key: "row-statute-right",
    quote:
      "When two (2) vehicles approach or enter an intersection from " +
      "different roadways at approximately the same time, the " +
      "operator of the vehicle on the left shall yield the " +
      "right-of-way to the vehicle on the right.",
    source: KRS,
    section: "KRS 189.330(1) - Turning and right-of-way at intersections",
    url: krs("6370"),
  },
  {
    key: "stop-sign-statute",
    quote:
      "every operator of a vehicle approaching a stop sign shall stop " +
      "at a clearly marked stop line but, if none, before entering " +
      "the crosswalk on the near side of the intersection or, if " +
      "none, then at the point nearest the intersecting roadway where " +
      "the operator has view of approaching traffic on the " +
      "intersecting roadway before entering it.",
    source: KRS,
    section: "KRS 189.330(4) - Turning and right-of-way at intersections",
    url: krs("6370"),
  },
  {
    key: "yield-sign-statute",
    quote:
      "The operator of a vehicle approaching a yield sign shall, in " +
      "obedience to such sign, slow down to a speed reasonable for " +
      "the existing conditions and, if required for safety to stop, " +
      "shall stop at a clearly marked stop line",
    source: KRS,
    section: "KRS 189.330(5) - Turning and right-of-way at intersections",
    url: krs("6370"),
  },
  {
    key: "left-turn-yield-statute",
    quote:
      "The operator of a vehicle intending to turn to the left within " +
      "an intersection or into an alley, private road, or driveway " +
      "shall yield the right-of-way to any vehicle approaching from " +
      "the opposite direction",
    source: KRS,
    section: "KRS 189.330(9) - Turning and right-of-way at intersections",
    url: krs("6370"),
  },
  {
    key: "officer-overrides",
    quote:
      "Upon approaching an intersection where a police officer is " +
      "directing traffic, do what the officer instructs you to do " +
      "regardless of traffic-control devices or signs.",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Traffic Control Devices",
    url: HANDBOOK_URL,
  },
  {
    key: "intersection-def",
    quote:
      "An intersection is any place where two roads meet.",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Traffic Control Devices",
    url: HANDBOOK_URL,
  },
  {
    key: "green-light",
    quote:
      "GREEN Traffic Light - If the roadway is clear, after yielding " +
      "the right of way to other vehicles and pedestrians lawfully " +
      "within the intersection, you may go straight or turn left or " +
      "turn right, unless such turns are prohibited.",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Traffic Signals",
    url: HANDBOOK_URL,
  },
  {
    key: "green-left-yield",
    quote:
      "Left turns on a green light must yield to through traffic " +
      "coming from the opposite direction.",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Traffic Signals",
    url: HANDBOOK_URL,
  },
  {
    key: "yellow-light",
    quote:
      "YELLOW Traffic Light - A yellow light means the traffic signal " +
      "is about to turn red. Stop if you can do so safely.",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Traffic Signals",
    url: HANDBOOK_URL,
  },
  {
    key: "yellow-clear",
    quote:
      "A vehicle may clear an intersection on a red light, if the " +
      "vehicle entered the intersection while the signal was yellow; " +
      "but it is against the law to enter an intersection after the " +
      "light turns red.",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Traffic Signals",
    url: HANDBOOK_URL,
  },
  {
    key: "red-light",
    quote:
      "RED Traffic Light - A red light means \"stop\" behind a " +
      "crosswalk or stop line until the green light appears.",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Traffic Signals",
    url: HANDBOOK_URL,
  },
  {
    key: "right-on-red",
    quote:
      "Right turns on red - If not prohibited by signs, and you are " +
      "in the proper lane, you must first stop, and then turn right " +
      "when the roadway is clear of vehicle or pedestrian traffic.",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Traffic Signals",
    url: HANDBOOK_URL,
  },
  {
    key: "left-on-red",
    quote:
      "Even though the light is red, a turn is permitted from a " +
      "one-way street into the nearest lane of another one-way street " +
      "running in the direction of that turn.",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Traffic Signals",
    url: HANDBOOK_URL,
  },
  {
    key: "flashing-yellow",
    quote:
      "A flashing yellow light means you must slow down and watch for " +
      "others.",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Flashing Lights",
    url: HANDBOOK_URL,
  },
  {
    key: "flashing-red",
    quote:
      "A flashing red light means you must come to a full stop and " +
      "proceed only when it is clear.",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Flashing Lights",
    url: HANDBOOK_URL,
  },
  {
    key: "rr-two-flashing",
    quote:
      "Two flashing red lights mark a railroad crossing. Stop and " +
      "proceed only after the red lights stop flashing and you " +
      "determine no train is approaching.",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Flashing Lights",
    url: HANDBOOK_URL,
  },
  {
    key: "crossbuck-yield",
    quote:
      "The familiar cross-buck sign near the tracts is a regulatory " +
      "sign that means the same as a yield sign.",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Flashing Lights",
    url: HANDBOOK_URL,
  },
  {
    key: "green-arrow",
    quote:
      "A green arrow means you may go in the direction of the arrow, " +
      "if you are in the proper lane.",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Lighted Arrows",
    url: HANDBOOK_URL,
  },
  {
    key: "flashing-yellow-arrow",
    quote:
      "A flashing yellow arrow means proceed with caution in the " +
      "direction of the arrow.",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Lighted Arrows",
    url: HANDBOOK_URL,
  },
  {
    key: "red-arrow",
    quote:
      "A red arrow means no turning in the direction of the arrow, " +
      "until it turns green.",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Lighted Arrows",
    url: HANDBOOK_URL,
  },
  {
    key: "obey-signal-over-lane",
    quote:
      "When there is more than one traffic light, obey the one that " +
      "is over your lane.",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Lighted Arrows",
    url: HANDBOOK_URL,
  },
  {
    key: "warning-signs",
    quote:
      "These signs are usually yellow with black lettering or symbols " +
      "and are diamond shaped.",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Traffic Signs",
    url: HANDBOOK_URL,
  },
  {
    key: "fluorescent-yellow",
    quote:
      "Some warning signs may be fluorescent yellow, such as school " +
      "zones, school crossing, and pedestrian crossing.",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Traffic Signs",
    url: HANDBOOK_URL,
  },
  {
    key: "rr-advance-warning",
    quote:
      "The sign cautions you to slow down, look and listen for a " +
      "train or railroad vehicle, and be prepared to stop if a train " +
      "is approaching.",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Railroad Crossing Warning Signs",
    url: HANDBOOK_URL,
  },
  {
    key: "rr-crossbuck-stop",
    quote:
      "When a train or railroad vehicle is approaching the " +
      "intersection, you must stop behind the stop line or before the " +
      "intersection until the intersection is clear.",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Railroad Crossing Warning Signs",
    url: HANDBOOK_URL,
  },
  {
    key: "rr-cross-quickly",
    quote:
      "When you need to cross railroad tracks, look both ways and " +
      "cross the tracks quickly, without stopping.",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Railroad Crossing Warning Signs",
    url: HANDBOOK_URL,
  },
  {
    key: "rr-stalled",
    quote:
      "If you do get boxed in or stalled on a railroad crossing, " +
      "abandon your car immediately and run away from the railroad " +
      "track in the direction the train is coming, in order to avoid " +
      "being hit by flying debris.",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Railroad Crossings",
    url: HANDBOOK_URL,
  },
  {
    key: "rr-stopping-distance",
    quote:
      "The stopping distance for an average freight train at 55 miles " +
      "per hour may be a mile or more.",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Railroad Crossings",
    url: HANDBOOK_URL,
  },
  {
    key: "rr-second-train",
    quote:
      "If you are stopped at a railroad crossing where there is more " +
      "than one track, do not start up as soon as the train passes. " +
      "Wait until you have a clear view in both directions before you " +
      "start across.",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Railroad Crossings",
    url: HANDBOOK_URL,
  },
  {
    key: "rr-gates-law",
    quote:
      "Crossing a railroad track after the warning lights are " +
      "flashing or the crossing gates are down is against the law, " +
      "and you could be cited.",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Railroad Crossings",
    url: HANDBOOK_URL,
  },
  {
    key: "rr-statute-stop",
    quote:
      "The operator of a vehicle shall stop and remain standing at a " +
      "railroad grade crossing when any of the following conditions " +
      "exist:",
    source: KRS,
    section: "KRS 189.560(1) - Railroad crossings",
    url: krs("47790"),
  },
  {
    key: "workzone-signs",
    quote:
      "Work Zone Signs - These are generally diamond or rectangular " +
      "shaped and orange with black letters or symbols.",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Work Zone Signs",
    url: HANDBOOK_URL,
  },
  {
    key: "workzone-flagger",
    quote:
      "In work zones, traffic may be controlled by a person with a " +
      "sign or flag to tell you which direction to travel or to slow " +
      "down or stop. You must follow their instructions.",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Work Zone Signs",
    url: HANDBOOK_URL,
  },
  {
    key: "workzone-fines-doubled",
    quote:
      "Give construction workers a \"brake.\" Reduce your speed in work " +
      "zones and be prepared to stop suddenly. Do not tailgate in " +
      "work zones. Fines for speeding in a work zone are doubled.",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Work Zone Signs",
    url: HANDBOOK_URL,
  },
  {
    key: "regulatory-signs",
    quote:
      "Regulatory Signs - These signs are square or rectangular or " +
      "have a special shape and are white with black, red, or green " +
      "letters or symbols.",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Regulatory Signs",
    url: HANDBOOK_URL,
  },
  {
    key: "speed-limit-signs",
    quote:
      "Speed Limit Signs - These black and white signs indicate the " +
      "maximum legal speed allowed in ideal conditions.",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Regulatory Signs",
    url: HANDBOOK_URL,
  },
  {
    key: "stop-sign",
    quote:
      "Stop Sign - A stop sign has eight sides and is red with white " +
      "letters. You must stop behind the stop line or crosswalk if " +
      "one is present.",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Regulatory Signs",
    url: HANDBOOK_URL,
  },
  {
    key: "yield-sign",
    quote:
      "Yield Sign - A yield sign is a red and white downward-pointing " +
      "triangle with red letters. It means you must slow down and " +
      "allow traffic that has the right of way to cross before " +
      "entering.",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Regulatory Signs",
    url: HANDBOOK_URL,
  },
  {
    key: "center-turn-lane",
    quote:
      "Shared Center Lane Left Turn Only - This sign tells you where " +
      "a lane is reserved for the use of left turning vehicles from " +
      "either direction and is not to be used for through traffic or " +
      "passing other vehicles.",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Regulatory Signs",
    url: HANDBOOK_URL,
  },
  {
    key: "wrong-way-sign",
    quote:
      "Wrong Way - This sign tells that you are going in the wrong " +
      "direction. It is often found at exit ramps and at the " +
      "beginning of one-way streets.",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Regulatory Signs",
    url: HANDBOOK_URL,
  },
  {
    key: "guide-signs",
    quote:
      "Guide Signs - These signs are square and rectangular and are " +
      "green, brown, or blue.",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Guide Signs",
    url: HANDBOOK_URL,
  },
  {
    key: "pavement-markings",
    quote:
      "Pavement markings are lines, arrows, words, or symbols painted " +
      "on the roadway to give you directions or warnings.",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Pavement Markings",
    url: HANDBOOK_URL,
  },
  {
    key: "crosswalk-stop-order",
    quote:
      "When required to stop because of a sign or signal, you must " +
      "stop behind the stop line, crosswalk, or stop sign or signal. " +
      "You must yield to pedestrians entering or in a crosswalk.",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Crosswalks and Stop Lines",
    url: HANDBOOK_URL,
  },
  {
    key: "crosswalk-unmarked",
    quote:
      "Not all crosswalks are marked. Be alert for pedestrians when " +
      "crossing intersections. If crosswalks are not apparent, then " +
      "you must stop before entering the intersection.",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Crosswalks and Stop Lines",
    url: HANDBOOK_URL,
  },
  {
    key: "stop-line-first",
    quote:
      "If there is a stop line before the crosswalk, the stop line " +
      "must be obeyed first.",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Crosswalks and Stop Lines",
    url: HANDBOOK_URL,
  },
  {
    key: "color-red",
    quote:
      "RED = Stop or forbidden.",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Standard Colors",
    url: HANDBOOK_URL,
  },
  {
    key: "color-yellow",
    quote:
      "YELLOW = General warning.",
    source: HANDBOOK,
    section: "Section Six: Rules of the Road - Standard Colors",
    url: HANDBOOK_URL,
  },
  {
    key: "signal-100-feet",
    quote:
      "If you plan to turn at an intersection, signal 100 feet before " +
      "the turn.",
    source: HANDBOOK,
    section: "Section Seven: General Driving - Turning and Turnabouts",
    url: HANDBOOK_URL,
  },
  {
    key: "signal-100-statute",
    quote:
      "A signal indicating the intention to turn right or left shall " +
      "be given continuously for not less than the last one hundred " +
      "(100) feet traveled by the motor vehicle before the turn.",
    source: KRS,
    section: "KRS 189.380(2) - Signals",
    url: krs("6382"),
  },
  {
    key: "no-copy-signal",
    quote:
      "If the driver in front of you is signaling for a turn, do not " +
      "signal unless you are also going to turn.",
    source: HANDBOOK,
    section: "Section Seven: General Driving - Turning and Turnabouts",
    url: HANDBOOK_URL,
  },
  {
    key: "right-turn-position",
    quote:
      "Always turn right from the right-most portion of your lane.",
    source: HANDBOOK,
    section: "Section Seven: General Driving - Right Turns",
    url: HANDBOOK_URL,
  },
  {
    key: "left-turn-position",
    quote:
      "Always turn left from the left-most portion of your lane.",
    source: HANDBOOK,
    section: "Section Seven: General Driving - Left Turns",
    url: HANDBOOK_URL,
  },
  {
    key: "multiple-lane-turn",
    quote:
      "Identify and enter the lane from which you will turn.",
    source: HANDBOOK,
    section: "Section Seven: General Driving - Multiple Lanes Turning",
    url: HANDBOOK_URL,
  },
  {
    key: "turnabout-500",
    quote:
      "Make sure your car can be seen for 500 feet in either direction.",
    source: HANDBOOK,
    section: "Section Seven: General Driving - Turnabouts",
    url: HANDBOOK_URL,
  },
  {
    key: "intersection-edge-forward",
    quote:
      "If your view of a cross street is blocked by a building or a " +
      "row of parked vehicles, edge forward slowly until you can " +
      "clearly see.",
    source: HANDBOOK,
    section: "Section Seven: General Driving - Intersections",
    url: HANDBOOK_URL,
  },
  {
    key: "green-dont-jump",
    quote:
      "At a traffic signal when the light turns green, avoid " +
      "immediately moving into the intersection.",
    source: HANDBOOK,
    section: "Section Seven: General Driving - Intersections",
    url: HANDBOOK_URL,
  },
  {
    key: "turn-signal-not-promise",
    quote:
      "Do not turn into a lane just because an approaching vehicle " +
      "has a turn signal active.",
    source: HANDBOOK,
    section: "Section Seven: General Driving - Intersections",
    url: HANDBOOK_URL,
  },
  {
    key: "roundabout-yield",
    quote:
      "Vehicles travel counterclockwise around a raised center " +
      "island, with entering traffic yielding the right of way to " +
      "circulating traffic.",
    source: HANDBOOK,
    section: "Section Seven: General Driving - Roundabouts and Traffic Circles",
    url: HANDBOOK_URL,
  },
  {
    key: "roundabout-steps",
    quote:
      "Slow down to enter the roundabout or traffic circle.",
    source: HANDBOOK,
    section: "Section Seven: General Driving - Roundabouts and Traffic Circles",
    url: HANDBOOK_URL,
  },
  {
    key: "schoolbus-stop",
    quote:
      "When you come to a school or church bus that is stopped on any " +
      "roadway to load or unload passengers you must stop. By law you " +
      "must remain stopped until all people are clear of the roadway " +
      "and the bus is in motion.",
    source: HANDBOOK,
    section: "Section Seven: General Driving - Rules for School Buses",
    url: HANDBOOK_URL,
  },
  {
    key: "schoolbus-four-lane",
    quote:
      "A stop is not required when approaching a stopped bus from the " +
      "opposite direction upon a highway of four or more lanes.",
    source: HANDBOOK,
    section: "Section Seven: General Driving - Rules for School Buses",
    url: HANDBOOK_URL,
  },
  {
    key: "schoolbus-two-lane",
    quote:
      "However, a stop is required when following a bus that is " +
      "stopped on a two lane road or you are going in the opposite " +
      "direction of the bus on a highway that has less than four " +
      "lanes, as they are generally not divided.",
    source: HANDBOOK,
    section: "Section Seven: General Driving - Rules for School Buses",
    url: HANDBOOK_URL,
  },
  {
    key: "schoolbus-statute",
    quote:
      "the operator of a vehicle approaching from any direction shall " +
      "bring the vehicle to a stop and shall not proceed until the " +
      "bus has completed receiving or discharging passengers and has " +
      "been put into motion.",
    source: KRS,
    section: "KRS 189.370(1) - Passing stopped school or church bus prohibited",
    url: krs("57416"),
  },
  {
    key: "schoolbus-statute-exception",
    quote:
      "The stop requirement provided for in this section shall not " +
      "apply to vehicles approaching a stopped bus from the opposite " +
      "direction upon a highway of four (4) or more lanes divided by " +
      "an elevated barrier or unpaved median.",
    source: KRS,
    section: "KRS 189.370(1) - Passing stopped school or church bus prohibited",
    url: krs("57416"),
  },
  {
    key: "schoolbus-penalty",
    quote:
      "Any person who violates KRS 189.370 shall for the first " +
      "offense be fined not less than two hundred dollars ($200) nor " +
      "more than five hundred dollars ($500) or imprisoned not less " +
      "than thirty (30) days nor more than sixty (60) days, or both.",
    source: KRS,
    section: "KRS 189.990(5) - Penalties",
    url: krs("57417"),
  },
  {
    key: "schoolbus-points",
    quote:
      "A minimum of six (6) points shall be assessed against the " +
      "driving record of any person convicted.",
    source: KRS,
    section: "KRS 189.990(5) - Penalties",
    url: krs("57417"),
  },
  {
    key: "parking-curb",
    quote:
      "When parking along the roadway, park your vehicle as far away " +
      "from the flow of traffic as possible. If there is a curb, park " +
      "as close to it as possible.",
    source: HANDBOOK,
    section: "Section Seven: General Driving - Parking",
    url: HANDBOOK_URL,
  },
  {
    key: "parking-hill",
    quote:
      "If you are parked on a hill, turn your wheels so that your " +
      "vehicle will touch the curb if the vehicle begins moving. If " +
      "there is no curb, turn the wheels so the vehicle will go off " +
      "the road should it roll.",
    source: HANDBOOK,
    section: "Section Seven: General Driving - Parking on a Hill",
    url: HANDBOOK_URL,
  },
  {
    key: "parking-key",
    quote:
      "The law requires you to turn off the engine and remove the key " +
      "when you leave a vehicle.",
    source: HANDBOOK,
    section: "Section Seven: General Driving - Parallel Parking",
    url: HANDBOOK_URL,
  },
  {
    key: "parking-exit-curb-side",
    quote:
      "It is safest to get out of your vehicle on the curb side. If " +
      "you must use the street side, check traffic before getting " +
      "out.",
    source: HANDBOOK,
    section: "Section Seven: General Driving - Parallel Parking",
    url: HANDBOOK_URL,
  },
  {
    key: "accessible-parking",
    quote:
      "Handicapped Parking is only for vehicles displaying an " +
      "official permit and transporting a disabled person.",
    source: HANDBOOK,
    section: "Section Seven: General Driving - Handicapped Parking",
    url: HANDBOOK_URL,
  },
  {
    key: "parking-prohibited-statute",
    quote:
      "On a sidewalk; (b) In front of sidewalk ramps provided for " +
      "persons with disabilities; (c) In front of a public or private " +
      "driveway; (d) Within an intersection or on a crosswalk;",
    source: KRS,
    section: "KRS 189.450(5) - Stopping, standing, parking",
    url: krs("46536"),
  },
  {
    key: "parking-30-feet",
    quote:
      "Within thirty (30) feet upon the approach to any flashing " +
      "beacon, stop sign, or traffic control signal located at the " +
      "side of a roadway;",
    source: KRS,
    section: "KRS 189.450(5)(f) - Stopping, standing, parking",
    url: krs("46536"),
  },
  {
    key: "parking-hydrant-15",
    quote:
      "Within fifteen (15) feet of a fire hydrant; or (j) In an area " +
      "between the roadways of a divided highway.",
    source: KRS,
    section: "KRS 189.450(5)(i) - Stopping, standing, parking",
    url: krs("46536"),
  },
  {
    key: "parking-shoulder-interstate",
    quote:
      "No vehicle shall be parked, stopped, or allowed to stand on " +
      "the shoulders of any toll road, interstate highway, or other " +
      "fully controlled access highway, including ramps thereto",
    source: KRS,
    section: "KRS 189.450(3) - Stopping, standing, parking",
    url: krs("46536"),
  },
  {
    key: "lane-use-three",
    quote:
      "If there are three or more lanes in one direction, the middle " +
      "lane or lanes are for through traffic. The left lane is for " +
      "drivers who want to pass or turn left.",
    source: HANDBOOK,
    section: "Section Seven: General Driving - Use of Lanes",
    url: HANDBOOK_URL,
  },
  {
    key: "left-lane-illegal",
    quote:
      "Remaining in the left lane on a limited access highway is illegal.",
    source: HANDBOOK,
    section: "Section Seven: General Driving - Use of Lanes",
    url: HANDBOOK_URL,
  },
  {
    key: "turn-into-nearest-lane",
    quote:
      "While turning into another street, turn into the lane nearest " +
      "to you. If you are turning left from a street with two or more " +
      "lanes, turn from the lane nearest the center lane.",
    source: HANDBOOK,
    section: "Section Seven: General Driving - Lanes for Turning",
    url: HANDBOOK_URL,
  },
  {
    key: "miss-your-turn",
    quote:
      "If you miss your turn, go on to the next intersection and work " +
      "your way back to where you want to go.",
    source: HANDBOOK,
    section: "Section Seven: General Driving - Lanes for Turning",
    url: HANDBOOK_URL,
  },
  {
    key: "changing-lanes",
    quote:
      "Check your \"blind spots,\" or areas around your vehicle that " +
      "cannot be seen by other vehicles, by turning your head and " +
      "looking over your shoulder in the direction you plan to move.",
    source: HANDBOOK,
    section: "Section Seven: General Driving - Changing Lanes",
    url: HANDBOOK_URL,
  },
  {
    key: "merging",
    quote:
      "Use the acceleration lane to reach the speed of other vehicles " +
      "before pulling onto the roadway.",
    source: HANDBOOK,
    section: "Section Seven: General Driving - Entering a Multi-lane Highway",
    url: HANDBOOK_URL,
  },
  {
    key: "merge-yield",
    quote:
      "The existing traffic has the right of way, so make sure it is " +
      "clear before you merge.",
    source: HANDBOOK,
    section: "Section Seven: General Driving - Entering a Multi-lane Highway",
    url: HANDBOOK_URL,
  },
  {
    key: "exiting-speed",
    quote:
      "Maintain your vehicle speed as long as you are on the main " +
      "roadway.",
    source: HANDBOOK,
    section: "Section Seven: General Driving - Exiting a Roadway",
    url: HANDBOOK_URL,
  },
  {
    key: "pass-on-left",
    quote:
      "In general, you should pass on the left. On multi-lane roads, " +
      "the left-most lane is intended to be used for passing slower " +
      "vehicles.",
    source: HANDBOOK,
    section: "Section Seven: General Driving - Passing",
    url: HANDBOOK_URL,
  },
  {
    key: "pass-on-right",
    quote:
      "The operator of a vehicle may overtake and pass another " +
      "vehicle upon the right only when it is safe to do so.",
    source: HANDBOOK,
    section: "Section Seven: General Driving - Passing",
    url: HANDBOOK_URL,
  },
  {
    key: "passing-lines",
    quote:
      "You may not pass when there is a solid line on your side of " +
      "the broken line of the road. You may pass if there is a solid " +
      "yellow line on the left side of the broken yellow line.",
    source: HANDBOOK,
    section: "Section Seven: General Driving - Passing",
    url: HANDBOOK_URL,
  },
  {
    key: "pass-200-feet",
    quote:
      "Kentucky law requires that a pass be completed before reaching " +
      "the beginning of a \"no passing zone\", and that a pass be " +
      "completed before coming within two hundred (200) feet of an " +
      "oncoming vehicle.",
    source: HANDBOOK,
    section: "Section Seven: General Driving - Passing",
    url: HANDBOOK_URL,
  },
  {
    key: "pass-200-statute",
    quote:
      "In every event, the overtaking vehicle must return to the " +
      "right-hand side of the roadway before coming within two " +
      "hundred (200) feet of any vehicle approaching from the " +
      "opposite direction.",
    source: KRS,
    section: "KRS 189.340(5) - Overtaking vehicles",
    url: krs("55539"),
  },
  {
    key: "pass-hill-curve",
    quote:
      "Any time your view is blocked by a curve or a hill, you should " +
      "assume there is an oncoming vehicle just out of sight. Treat a " +
      "curve or a hill as an oncoming vehicle. Do not start to pass " +
      "when approaching a hill or a curve.",
    source: HANDBOOK,
    section: "Section Seven: General Driving - Passing",
    url: HANDBOOK_URL,
  },
  {
    key: "pass-return-mirror",
    quote:
      "One way to do this is to look for the vehicle in the outside " +
      "rearview mirror. When you see the vehicle, you have enough " +
      "room to return to the driving lane.",
    source: HANDBOOK,
    section: "Section Seven: General Driving - Passing",
    url: HANDBOOK_URL,
  },
  {
    key: "pass-bike-3-feet",
    quote:
      "If there is only one (1) lane for traffic traveling in the " +
      "same direction, pass to the left keeping at least three (3) " +
      "feet between your vehicle and the bicycle or electric " +
      "low-speed scooter.",
    source: HANDBOOK,
    section: "Section Seven: General Driving - Passing",
    url: HANDBOOK_URL,
  },
  {
    key: "pass-bike-statute",
    quote:
      "pass to the left of the bicycle or electric low-speed scooter " +
      "at a distance of not less than three (3) feet between any " +
      "portion of the vehicle and the bicycle or electric low-speed " +
      "scooter and maintain that distance until safely past the " +
      "overtaken bicycle or electric low-speed scooter.",
    source: KRS,
    section: "KRS 189.340(2)(a) - Overtaking bicycles",
    url: krs("55539"),
  },
  {
    key: "being-passed",
    quote:
      "Kentucky law requires the operator of a vehicle about to be " +
      "overtaken and passed shall give way to the right in favor of " +
      "the overtaking vehicle.",
    source: HANDBOOK,
    section: "Section Seven: General Driving - When being passed",
    url: HANDBOOK_URL,
  },
  {
    key: "look-ahead-20-30",
    quote:
      "Ideally, you should try to look at what is occurring 20 to 30 " +
      "seconds in front of your car.",
    source: HANDBOOK,
    section: "Section Eight: Safe Driving Tips - Visual Search",
    url: HANDBOOK_URL,
  },
  {
    key: "speedometer-glance",
    quote:
      "Make it a habit to glance at the speedometer about once a " +
      "minute to ensure you are driving at a safe and legal speed.",
    source: HANDBOOK,
    section: "Section Eight: Safe Driving Tips - Speed Management",
    url: HANDBOOK_URL,
  },
  {
    key: "speed-65",
    quote:
      "65 MPH - Sixty-five miles per hour is the speed limit on " +
      "interstate highways and parkways.",
    source: HANDBOOK,
    section: "Section Eight: Safe Driving Tips - Kentucky Speed Limits",
    url: HANDBOOK_URL,
  },
  {
    key: "speed-55",
    quote:
      "55 MPH - Fifty-five miles per hour is the speed limit on all " +
      "other state highways.",
    source: HANDBOOK,
    section: "Section Eight: Safe Driving Tips - Kentucky Speed Limits",
    url: HANDBOOK_URL,
  },
  {
    key: "speed-35",
    quote:
      "35 MPH - Thirty-five miles per hour is the speed limit in a " +
      "business/residential district.",
    source: HANDBOOK,
    section: "Section Eight: Safe Driving Tips - Kentucky Speed Limits",
    url: HANDBOOK_URL,
  },
  {
    key: "speed-15-lot",
    quote:
      "15 MPH - The speed limit in an off-street parking facility " +
      "offered for public use, whether publicly or privately owned, " +
      "shall be fifteen miles per hour.",
    source: HANDBOOK,
    section: "Section Eight: Safe Driving Tips - Kentucky Speed Limits",
    url: HANDBOOK_URL,
  },
  {
    key: "speed-70",
    quote:
      "70 MPH - The secretary of transportation may increase the " +
      "speed limit of specific highways to seventy miles per hour.",
    source: HANDBOOK,
    section: "Section Eight: Safe Driving Tips - Kentucky Speed Limits",
    url: HANDBOOK_URL,
  },
  {
    key: "speed-unposted",
    quote:
      "When the speed limit is not posted, these are the speed limits " +
      "on Kentucky roads.",
    source: HANDBOOK,
    section: "Section Eight: Safe Driving Tips - Kentucky Speed Limits",
    url: HANDBOOK_URL,
  },
  {
    key: "speed-statute-defaults",
    quote:
      "Sixty-five (65) miles per hour on interstate highways and " +
      "parkways; (b) Fifty-five (55) miles per hour on all other " +
      "state highways; and (c) Thirty-five (35) miles per hour in a " +
      "business or residential district.",
    source: KRS,
    section: "KRS 189.390(3) - Speed",
    url: krs("52569"),
  },
  {
    key: "speed-reasonable-statute",
    quote:
      "An operator of a vehicle upon a highway shall not drive at a " +
      "greater speed than is reasonable and prudent, having regard " +
      "for the traffic and for the condition and use of the highway.",
    source: KRS,
    section: "KRS 189.390(2) - Speed",
    url: krs("52569"),
  },
  {
    key: "visibility-25mph",
    quote:
      "In a heavy rain, snowstorm, or a thick fog, you may not be " +
      "able to see more than 100 feet ahead. When you cannot see any " +
      "farther than that, you cannot safely drive faster than 25 " +
      "miles per hour. You should also use low beam headlights.",
    source: HANDBOOK,
    section: "Section Eight: Safe Driving Tips - Visibility",
    url: HANDBOOK_URL,
  },
  {
    key: "darkness-outdrive",
    quote:
      "Never drive so fast that you cannot stop within the distance " +
      "you can see with your headlights,",
    source: HANDBOOK,
    section: "Section Eight: Safe Driving Tips - Visibility",
    url: HANDBOOK_URL,
  },
  {
    key: "curves-slow-first",
    quote:
      "Always reduce speed before entering the curve to a safe speed",
    source: HANDBOOK,
    section: "Section Eight: Safe Driving Tips - Adjusting To Roadway Conditions",
    url: HANDBOOK_URL,
  },
  {
    key: "curve-hard-braking",
    quote:
      "Hard braking after entry to a curve could cause the vehicle " +
      "tires to lose traction.",
    source: HANDBOOK,
    section: "Section Eight: Safe Driving Tips - Adjusting To Roadway Conditions",
    url: HANDBOOK_URL,
  },
  {
    key: "slippery-first-sign",
    quote:
      "Slippery roads - Reduce speed at the first sign of rain, snow, " +
      "sleet, or ice. When the roadway is slippery, your tires do not " +
      "grip as well.",
    source: HANDBOOK,
    section: "Section Eight: Safe Driving Tips - Adjusting To Roadway Conditions",
    url: HANDBOOK_URL,
  },
  {
    key: "hydroplaning",
    quote:
      "Hydroplaning occurs when the steering tires start to ride up " +
      "on any pooled water, similar to the action of water skis. The " +
      "tires are not contacting the actual roadway surface.",
    source: HANDBOOK,
    section: "Section Eight: Safe Driving Tips - Adjusting To Roadway Conditions",
    url: HANDBOOK_URL,
  },
  {
    key: "hydroplane-avoid",
    quote:
      "The best way to avoid traction loss from hydroplaning is to " +
      "slow down in the rain or when the road is wet with pooled " +
      "water or water puddles.",
    source: HANDBOOK,
    section: "Section Eight: Safe Driving Tips - Adjusting To Roadway Conditions",
    url: HANDBOOK_URL,
  },
  {
    key: "flooded-roadway",
    quote:
      "Do not drive through large bodies of standing water on a road. " +
      "If you see a flooded roadway, find another route to get to " +
      "your destination.",
    source: HANDBOOK,
    section: "Section Eight: Safe Driving Tips - Adjusting To Roadway Conditions",
    url: HANDBOOK_URL,
  },
  {
    key: "stopping-distance-def",
    quote:
      "Total stopping distance is the distance your vehicle travels, " +
      "in ideal conditions, from the time you realize you must stop " +
      "until your vehicle stops.",
    source: HANDBOOK,
    section: "Section Eight: Safe Driving Tips - Stopping Distance",
    url: HANDBOOK_URL,
  },
  {
    key: "perception-time",
    quote:
      "Your perception time - This is the time and distance it takes " +
      "you to recognize you must stop. The average perception time " +
      "for an alert driver is",
    source: HANDBOOK,
    section: "Section Eight: Safe Driving Tips - Stopping Distance",
    url: HANDBOOK_URL,
  },
  {
    key: "braking-158",
    quote:
      "Braking distance - This is the time and distance it takes for " +
      "your brakes to slow and stop your vehicle. At 50 mph on dry " +
      "pavement with good brakes, it can take about 158 feet.",
    source: HANDBOOK,
    section: "Section Eight: Safe Driving Tips - Stopping Distance",
    url: HANDBOOK_URL,
  },
  {
    key: "following-4-seconds",
    quote:
      "You should always try to keep a minimum following distance of " +
      "4 seconds between your car and the vehicle in front.",
    source: HANDBOOK,
    section: "Section Eight: Safe Driving Tips - Space in Front",
    url: HANDBOOK_URL,
  },
  {
    key: "following-law",
    quote:
      "It is against the law to follow another vehicle more closely " +
      "than is reasonable and prudent.",
    source: HANDBOOK,
    section: "Section Eight: Safe Driving Tips - Space in Front",
    url: HANDBOOK_URL,
  },
  {
    key: "following-count",
    quote:
      "You are following too closely if you pass the stationary point " +
      "before counting to one thousand four.",
    source: HANDBOOK,
    section: "Section Eight: Safe Driving Tips - Space in Front",
    url: HANDBOOK_URL,
  },
  {
    key: "following-increase",
    quote:
      "When following large vehicles such as trucks, buses, " +
      "recreational vehicles, and vehicles pulling a trailer",
    source: HANDBOOK,
    section: "Section Eight: Safe Driving Tips - Space in Front",
    url: HANDBOOK_URL,
  },
  {
    key: "blind-spot-avoid",
    quote:
      "Try to avoid driving on either side slightly to the rear of " +
      "another vehicle. You may be in their blind spot, and it " +
      "reduces the space you may need to avoid a crash. Either speed " +
      "up or drop back, but do not remain in another driver's blind " +
      "spot.",
    source: HANDBOOK,
    section: "Section Eight: Safe Driving Tips - Space to the Side",
    url: HANDBOOK_URL,
  },
  {
    key: "space-parked-cars",
    quote:
      "Keep a space between yourself and parked vehicles. Someone may " +
      "step out of a vehicle or from between the parked vehicles, or " +
      "a vehicle may start to pull out suddenly.",
    source: HANDBOOK,
    section: "Section Eight: Safe Driving Tips - Space to the Side",
    url: HANDBOOK_URL,
  },
  {
    key: "no-backing-freeway",
    quote:
      "If you have passed your exit on an interstate or freeway, " +
      "never back up or try to turn around. Proceed to the next exit " +
      "and work your way back to where you want to go.",
    source: HANDBOOK,
    section: "Section Eight: Safe Driving Tips - Backing",
    url: HANDBOOK_URL,
  },
  {
    key: "headlights-sunset",
    quote:
      "Use headlights - Headlights must be illuminated during the " +
      "period from one-half (1/2) hour after sunset to one-half (1/2) " +
      "hour before sunrise.",
    source: HANDBOOK,
    section: "Section Eight: Safe Driving Tips - Letting Others Know You Are There",
    url: HANDBOOK_URL,
  },
  {
    key: "headlights-statute",
    quote:
      "During the period from one-half (1/2) hour after sunset to " +
      "one-half (1/2) hour before sunrise; and (b) At such other " +
      "times as atmospheric conditions render visibility as low as or " +
      "lower than is ordinarily the case during that period.",
    source: KRS,
    section: "KRS 189.030(1) - Time when lights must be on",
    url: krs("6296"),
  },
  {
    key: "horn-light-tap",
    quote:
      "A light tap on the horn should be all that is needed under " +
      "normal circumstances.",
    source: HANDBOOK,
    section: "Section Eight: Safe Driving Tips - Using your horn",
    url: HANDBOOK_URL,
  },
  {
    key: "horn-blind",
    quote:
      "You should not use your horn when near blind pedestrians.",
    source: HANDBOOK,
    section: "Section Eight: Safe Driving Tips - Not using your horn",
    url: HANDBOOK_URL,
  },
  {
    key: "signal-always",
    quote:
      "Signal every time you change direction, even when you do not " +
      "see anyone else around. The vehicle you do not see is the most " +
      "dangerous.",
    source: HANDBOOK,
    section: "Section Eight: Safe Driving Tips - Signaling Your Movements",
    url: HANDBOOK_URL,
  },
  {
    key: "signal-no-row",
    quote:
      "make sure you cancel your signals to avoid confusing other " +
      "drivers.",
    source: HANDBOOK,
    section: "Section Eight: Safe Driving Tips - Signaling Your Movements",
    url: HANDBOOK_URL,
  },
  {
    key: "mechanical-signals",
    quote:
      "Your vehicle must have mechanical signals. Hand signals cannot " +
      "be used.",
    source: HANDBOOK,
    section: "Section Eight: Safe Driving Tips - Signaling Your Movements",
    url: HANDBOOK_URL,
  },
  {
    key: "three-options",
    quote:
      "You have three options to avoid the crash or to reduce its " +
      "impact. These options are braking, steering, or accelerating.",
    source: HANDBOOK,
    section: "Section Nine: Emergency Situations - Emergencies and Avoiding Crashes",
    url: HANDBOOK_URL,
  },
  {
    key: "abs-press-hard",
    quote:
      "Press on the brake pedal as hard as you can and keep applying " +
      "pressure.",
    source: HANDBOOK,
    section: "Section Nine: Emergency Situations - Braking",
    url: HANDBOOK_URL,
  },
  {
    key: "abs-vibrate",
    quote:
      "ABS will work only if you keep the pressure on the brake " +
      "pedal. You may feel the pedal vibrate and you may hear a " +
      "clicking noise. This is normal.",
    source: HANDBOOK,
    section: "Section Nine: Emergency Situations - Braking",
    url: HANDBOOK_URL,
  },
  {
    key: "swerve-steer",
    quote:
      "Steer in the direction you want to go but try to avoid other " +
      "traffic.",
    source: HANDBOOK,
    section: "Section Nine: Emergency Situations - Steering",
    url: HANDBOOK_URL,
  },
  {
    key: "animal-brake-steer",
    quote:
      "If an animal runs in front of your vehicle, you should brake " +
      "and steer to miss the animal.",
    source: HANDBOOK,
    section: "Section Nine: Emergency Situations - Steering",
    url: HANDBOOK_URL,
  },
  {
    key: "skid-causes",
    quote:
      "Skids are caused when you are traveling too fast for " +
      "conditions, when you stop too suddenly, or when the tires can " +
      "no longer grip the roadway.",
    source: HANDBOOK,
    section: "Section Nine: Emergency Situations - Dealing with Skids",
    url: HANDBOOK_URL,
  },
  {
    key: "skid-sideways",
    quote:
      "If you begin to skid sideways, you need to turn the wheel in " +
      "the direction the back of the vehicle is skidding.",
    source: HANDBOOK,
    section: "Section Nine: Emergency Situations - Dealing with Skids",
    url: HANDBOOK_URL,
  },
  {
    key: "skid-no-abs",
    quote:
      "If you do not have anti-lock, do not brake hard. This will " +
      "only lock your wheels and make the skid worse. Instead, slow " +
      "the vehicle by pumping the brakes gently.",
    source: HANDBOOK,
    section: "Section Nine: Emergency Situations - Dealing with Skids",
    url: HANDBOOK_URL,
  },
  {
    key: "skid-steering-wheel",
    quote:
      "The most important vehicle control to use during a skid is the " +
      "steering wheel.",
    source: HANDBOOK,
    section: "Section Nine: Emergency Situations - Dealing with Skids",
    url: HANDBOOK_URL,
  },
  {
    key: "drop-off",
    quote:
      "If your vehicle leaves the paved road, slow down gradually, " +
      "when safe to do so, and turn quickly back onto the pavement.",
    source: HANDBOOK,
    section: "Section Nine: Emergency Situations - Uneven Surface Drop-Offs",
    url: HANDBOOK_URL,
  },
  {
    key: "collision-stay",
    quote:
      "Remain with the vehicle until the law enforcement officer " +
      "arrives and has questioned everyone involved.",
    source: HANDBOOK,
    section: "Section Nine: Emergency Situations - Collisions",
    url: HANDBOOK_URL,
  },
  {
    key: "collision-move",
    quote:
      "In accordance with Kentucky law, when involved in a non-injury " +
      "accident move the damaged vehicles to the shoulder of the " +
      "roadway.",
    source: HANDBOOK,
    section: "Section Nine: Emergency Situations - Collisions",
    url: HANDBOOK_URL,
  },
  {
    key: "collision-parked-note",
    quote:
      "If the collision involves a parked vehicle, try to locate the " +
      "owner. If you cannot, leave a note where it can be seen",
    source: HANDBOOK,
    section: "Section Nine: Emergency Situations - Collisions",
    url: HANDBOOK_URL,
  },
  {
    key: "collision-report-500",
    quote:
      "Any person who is involved in an automobile collision " +
      "resulting in any property damage exceeding $500 in which an " +
      "investigation is not conducted by a law enforcement officer, " +
      "shall file a written report of the accident with the Kentucky " +
      "State Police within ten (10) days of the collision.",
    source: HANDBOOK,
    section: "Section Nine: Emergency Situations - Collisions",
    url: HANDBOOK_URL,
  },
  {
    key: "collision-render-aid",
    quote:
      "Kentucky law requires the operator of any vehicle involved in " +
      "a collision to immediately stop and ascertain the extent of " +
      "any injury or damage and render reasonable assistance.",
    source: HANDBOOK,
    section: "Section Nine: Emergency Situations - First Aid to Collision Victims",
    url: HANDBOOK_URL,
  },
  {
    key: "collision-statute-stop",
    quote:
      "shall immediately stop and ascertain the extent of the injury " +
      "or damage and render reasonable assistance",
    source: KRS,
    section: "KRS 189.580(1)(a) - Duty in case of accident",
    url: krs("6419"),
  },
  {
    key: "brake-failure",
    quote:
      "Use the parking brake. Pull on the parking brake handle in the " +
      "center console or push the parking brake foot pedal slowly so " +
      "you will not lock the rear wheels and cause a skid.",
    source: HANDBOOK,
    section: "Section Nine: Emergency Situations - Brake Failure",
    url: HANDBOOK_URL,
  },
  {
    key: "blowout-front",
    quote:
      "If a front tire blows out, the vehicle will pull sharply in " +
      "the direction of the blowout.",
    source: HANDBOOK,
    section: "Section Nine: Emergency Situations - Tire Blowout",
    url: HANDBOOK_URL,
  },
  {
    key: "blowout-steps",
    quote:
      "Grip the steering wheel firmly and keep the vehicle going " +
      "straight.",
    source: HANDBOOK,
    section: "Section Nine: Emergency Situations - Tire Blowout",
    url: HANDBOOK_URL,
  },
  {
    key: "stuck-accelerator",
    quote:
      "Shift to neutral and search for an escape path.",
    source: HANDBOOK,
    section: "Section Nine: Emergency Situations - Stuck Accelerator",
    url: HANDBOOK_URL,
  },
  {
    key: "breakdown-flares",
    quote:
      "Place emergency flares about 200 to 300 feet behind the " +
      "vehicle, giving other drivers some time to change lanes if " +
      "necessary.",
    source: HANDBOOK,
    section: "Section Nine: Emergency Situations - Vehicle Breakdown & Emergency Signals",
    url: HANDBOOK_URL,
  },
  {
    key: "breakdown-hood",
    quote:
      "Turn on your emergency flashers to show your vehicle is " +
      "disabled. Lift the hood to show other drivers you need " +
      "assistance.",
    source: HANDBOOK,
    section: "Section Nine: Emergency Situations - Vehicle Breakdown & Emergency Signals",
    url: HANDBOOK_URL,
  },
  {
    key: "breakdown-not-hill",
    quote:
      "Do not stop just over a hill or just around a curve.",
    source: HANDBOOK,
    section: "Section Nine: Emergency Situations - Vehicle Breakdown & Emergency Signals",
    url: HANDBOOK_URL,
  },
  {
    key: "ped-crosswalk-yield",
    quote:
      "You must yield when a pedestrian is in a crosswalk, even if it " +
      "is unmarked, including mid-block crosswalks marked by warning " +
      "signs and pavement markings.",
    source: HANDBOOK,
    section: "Section Ten: Sharing the Road - Pedestrians",
    url: HANDBOOK_URL,
  },
  {
    key: "ped-green-light",
    quote:
      "You must yield the right of way to all pedestrians in the " +
      "intersection even if the traffic light is green.",
    source: HANDBOOK,
    section: "Section Ten: Sharing the Road - Pedestrians",
    url: HANDBOOK_URL,
  },
  {
    key: "ped-turn-on-red",
    quote:
      "When making a right or left turn on red, you must be prepared " +
      "to yield the right of way to pedestrians.",
    source: HANDBOOK,
    section: "Section Ten: Sharing the Road - Pedestrians",
    url: HANDBOOK_URL,
  },
  {
    key: "ped-always-ready",
    quote:
      "You should always be prepared to yield to pedestrians even if " +
      "they are not in a crosswalk.",
    source: HANDBOOK,
    section: "Section Ten: Sharing the Road - Pedestrians",
    url: HANDBOOK_URL,
  },
  {
    key: "ped-jaywalk",
    quote:
      "Every pedestrian crossing a roadway at a point other than " +
      "within a marked crosswalk or within an unmarked crosswalk at " +
      "an intersection shall yield the right-of-way to all vehicles.",
    source: HANDBOOK,
    section: "Section Ten: Sharing the Road - Pedestrians",
    url: HANDBOOK_URL,
  },
  {
    key: "school-zone-speed",
    quote:
      "In a school zone when lights are flashing or children are " +
      "present, you must obey a slower speed limit.",
    source: HANDBOOK,
    section: "Section Ten: Sharing the Road - Pedestrians",
    url: HANDBOOK_URL,
  },
  {
    key: "blind-white-cane",
    quote:
      "Kentucky law requires operators of a vehicle to yield the " +
      "right-of-way to a blind pedestrian carrying a clearly visible " +
      "white cane or accompanied by an assistance dog.",
    source: HANDBOOK,
    section: "Section Ten: Sharing the Road - Blind Pedestrian Right-of-Way",
    url: HANDBOOK_URL,
  },
  {
    key: "blind-fine-250",
    quote:
      "Failure to yield the right-of-way to a blind pedestrian is a " +
      "violation that could result in a fine up to two hundred fifty " +
      "dollars ($250).",
    source: HANDBOOK,
    section: "Section Ten: Sharing the Road - Blind Pedestrian Right-of-Way",
    url: HANDBOOK_URL,
  },
  {
    key: "blind-5-feet",
    quote:
      "At a stop light or sign, do not stop your vehicle more than " +
      "five (5) feet from the crosswalk, unless there is an advanced " +
      "stop bar (line). A blind pedestrian uses the sound of your " +
      "vehicle as a guide",
    source: HANDBOOK,
    section: "Section Ten: Sharing the Road - Blind Pedestrian Right-of-Way",
    url: HANDBOOK_URL,
  },
  {
    key: "blind-statute",
    quote:
      "The operator of a vehicle shall yield the right-of-way to any " +
      "blind pedestrian carrying a clearly visible white cane or " +
      "accompanied by an assistance dog.",
    source: KRS,
    section: "KRS 189.575 - Yielding right-of-way to blind pedestrian",
    url: krs("6418"),
  },
  {
    key: "bicycles-are-vehicles",
    quote:
      "Bicycles are considered vehicles when on roadways. Bicyclists " +
      "are required and expected to follow the same rules of the road " +
      "as motorized vehicles.",
    source: HANDBOOK,
    section: "Section Ten: Sharing the Road - Bicyclists",
    url: HANDBOOK_URL,
  },
  {
    key: "bike-lane-no-park",
    quote:
      "Do not stop, park, or drive on a designated bicycle path or " +
      "lane unless you are entering or leaving an alley or driveway, " +
      "performing official duties, directed by a police officer, or " +
      "an emergency situation exists.",
    source: HANDBOOK,
    section: "Section Ten: Sharing the Road - Bicyclists",
    url: HANDBOOK_URL,
  },
  {
    key: "bike-horn",
    quote:
      "Avoid sounding your horn close to bicyclists unless there is a " +
      "chance of a crash. Sounding your horn to alert your presence " +
      "may startle bicyclists and cause them to steer into your path " +
      "and crash.",
    source: HANDBOOK,
    section: "Section Ten: Sharing the Road - Bicyclists",
    url: HANDBOOK_URL,
  },
  {
    key: "bike-signal-50",
    quote:
      "The signal shall be given intermittently for the last fifty " +
      "(50) feet traveled by the vehicle before the turn.",
    source: HANDBOOK,
    section: "Section Ten: Sharing the Road - Bicyclists",
    url: HANDBOOK_URL,
  },
  {
    key: "bike-door",
    quote:
      "When parked on the street, check to the sides and rear for " +
      "bicyclists before you open your vehicle door.",
    source: HANDBOOK,
    section: "Section Ten: Sharing the Road - Bicyclists",
    url: HANDBOOK_URL,
  },
  {
    key: "bike-no-interstate",
    quote:
      "Never ride on interstates and parkways.",
    source: HANDBOOK,
    section: "Section Ten: Sharing the Road - Rules for Bicyclists",
    url: HANDBOOK_URL,
  },
  {
    key: "bike-right-side",
    quote:
      "Ride a bicycle on the right side of the road with traffic.",
    source: HANDBOOK,
    section: "Section Ten: Sharing the Road - Rules for Bicyclists",
    url: HANDBOOK_URL,
  },
  {
    key: "bike-two-abreast",
    quote:
      "Never ride more than two abreast so as to interfere with the " +
      "normal movement of traffic.",
    source: HANDBOOK,
    section: "Section Ten: Sharing the Road - Rules for Bicyclists",
    url: HANDBOOK_URL,
  },
  {
    key: "bike-night-lights",
    quote:
      "When riding at night, operate the bicycle with a white light " +
      "visible from the front and a red reflector or light visible " +
      "from the rear.",
    source: HANDBOOK,
    section: "Section Ten: Sharing the Road - Rules for Bicyclists",
    url: HANDBOOK_URL,
  },
  {
    key: "scooter-16",
    quote:
      "A person sixteen (16) years of age or older, may operate an " +
      "electric low-speed scooter on a highway, bicycle lane, or " +
      "bicycle path.",
    source: HANDBOOK,
    section: "Section Ten: Sharing the Road - Electric Low-Speed Scooter",
    url: HANDBOOK_URL,
  },
  {
    key: "scooter-20mph",
    quote:
      "Regardless of the type of propulsion, an electric low-speed " +
      "scooter is designed to operate at a maximum speed of twenty " +
      "(20) miles per hour on a paved level surface.",
    source: HANDBOOK,
    section: "Section Ten: Sharing the Road - Electric Low-Speed Scooter",
    url: HANDBOOK_URL,
  },
  {
    key: "motorcycle-full-lane",
    quote:
      "Allow a motorcyclist a full lane width. Do not share the lane. " +
      "The motorcycle needs space for the motorcyclist to react to " +
      "other traffic.",
    source: HANDBOOK,
    section: "Section Ten: Sharing the Road - Motorcyclists",
    url: HANDBOOK_URL,
  },
  {
    key: "motorcycle-signal",
    quote:
      "Do not assume a motorcycle is turning when you see its turn " +
      "signal flashing. Motorcycle turn signals may not self-cancel, " +
      "and the motorcyclist may have forgotten to turn them off.",
    source: HANDBOOK,
    section: "Section Ten: Sharing the Road - Motorcyclists",
    url: HANDBOOK_URL,
  },
  {
    key: "motorcycle-following",
    quote:
      "When following a motorcyclist, allow for a minimum 4-second " +
      "following distance or more in wet conditions",
    source: HANDBOOK,
    section: "Section Ten: Sharing the Road - Motorcyclists",
    url: HANDBOOK_URL,
  },
  {
    key: "no-zone",
    quote:
      "The no zone is the area around large trucks or buses where " +
      "vehicles disappear from the commercial driver's view into " +
      "blind spots. These blind spots are on the sides, rear, and " +
      "front of the large vehicle.",
    source: HANDBOOK,
    section: "Section Ten: Sharing the Road - The No Zone",
    url: HANDBOOK_URL,
  },
  {
    key: "truck-mirror-rule",
    quote:
      "If you cannot see the driver's face in the side view mirror, " +
      "he or she cannot see you.",
    source: HANDBOOK,
    section: "Section Ten: Sharing the Road - Side No Zones",
    url: HANDBOOK_URL,
  },
  {
    key: "truck-335",
    quote:
      "A loaded truck with good tires and properly adjusted brakes, " +
      "under ideal conditions, traveling at 55 mph requires at least " +
      "335 feet before coming to a complete stop, or greater than 1½ " +
      "times the stopping distance of a car.",
    source: HANDBOOK,
    section: "Section Ten: Sharing the Road - Front No Zones",
    url: HANDBOOK_URL,
  },
  {
    key: "truck-rear-200",
    quote:
      "large vehicles have huge blind spots directly behind them that " +
      "extend up to 200 feet.",
    source: HANDBOOK,
    section: "Section Ten: Sharing the Road - Rear No Zones",
    url: HANDBOOK_URL,
  },
  {
    key: "truck-wide-right",
    quote:
      "When a truck or bus needs to make a right turn, the driver " +
      "will sometimes swing the vehicle wide to the left to safely " +
      "turn right and clear the corner of a curb or other " +
      "obstruction.",
    source: HANDBOOK,
    section: "Section Ten: Sharing the Road - Turning",
    url: HANDBOOK_URL,
  },
  {
    key: "runaway-ramps",
    quote:
      "These ramps are for use only by large vehicles that are out of " +
      "control or cannot stop because of brake failure. Never stop or " +
      "park in the vicinity of these ramps.",
    source: HANDBOOK,
    section: "Section Ten: Sharing the Road - Turning",
    url: HANDBOOK_URL,
  },
  {
    key: "hazmat-railroad",
    quote:
      "Vehicles carrying hazardous materials must stop at all " +
      "railroad crossings.",
    source: HANDBOOK,
    section: "Section Ten: Sharing the Road - Turning",
    url: HANDBOOK_URL,
  },
  {
    key: "emergency-pull-right",
    quote:
      "When you become aware of the approach of a vehicle displaying " +
      "a flashing red or blue light, or when you hear a siren, you " +
      "must immediately drive to the right side of the road or to the " +
      "curb, clear of any intersection, and stop.",
    source: HANDBOOK,
    section: "Section Ten: Sharing the Road - Emergency Vehicles",
    url: HANDBOOK_URL,
  },
  {
    key: "emergency-500",
    quote:
      "It is also unlawful to follow any emergency vehicle closer " +
      "than 500 feet.",
    source: HANDBOOK,
    section: "Section Ten: Sharing the Road - Emergency Vehicles",
    url: HANDBOOK_URL,
  },
  {
    key: "emergency-statute-500",
    quote:
      "No operator of any vehicle, unless he or she is on official " +
      "business, shall follow any emergency vehicle being operated in " +
      "conformity with the provisions of subsection (1) of this " +
      "section closer than five hundred (500) feet",
    source: KRS,
    section: "KRS 189.930(3) - Right-of-way to emergency vehicles",
    url: krs("55550"),
  },
  {
    key: "emergency-statute-yield",
    quote:
      "the driver of every other vehicle shall yield the " +
      "right-of-way, immediately drive to a position parallel to, and " +
      "as close as possible to, the edge or curb of the highway clear " +
      "of any intersection, and stop and remain stopped until the " +
      "emergency vehicle has passed",
    source: KRS,
    section: "KRS 189.930(1) - Right-of-way to emergency vehicles",
    url: krs("55550"),
  },
  {
    key: "moveover-four-lane",
    quote:
      "Approach slowly and move into the left lane on four-lane " +
      "highways if it is safe to do so.",
    source: HANDBOOK,
    section: "Section Ten: Sharing the Road - Kentucky Move-Over Laws",
    url: HANDBOOK_URL,
  },
  {
    key: "moveover-two-lane",
    quote:
      "On two-lane highways, approach slowly and pass with caution.",
    source: HANDBOOK,
    section: "Section Ten: Sharing the Road - Kentucky Move-Over Laws",
    url: HANDBOOK_URL,
  },
  {
    key: "moveover-general",
    quote:
      "When approaching an authorized emergency vehicle stopped on " +
      "the roadside, you should proceed with caution by slowing and " +
      "yielding the right-of-way by making a lane change into a lane " +
      "not next to that of the authorized emergency vehicle if safety " +
      "and traffic conditions permit.",
    source: HANDBOOK,
    section: "Section Ten: Sharing the Road - Move-Over Laws",
    url: HANDBOOK_URL,
  },
  {
    key: "moveover-statute-disabled",
    quote:
      "Disabled vehicle, when the disabled vehicle is displaying some " +
      "type of warning signal, such as emergency flashers, flares, or " +
      "retroreflective signals.",
    source: KRS,
    section: "KRS 189.930(5)(b) - Approaching a stationary vehicle",
    url: krs("55550"),
  },
  {
    key: "traffic-stop-hands",
    quote:
      "Do not start gathering your driver's license, registration, " +
      "and insurance. Instead, keep your hands on the steering wheel " +
      "and limit movements",
    source: HANDBOOK,
    section: "Section Ten: Sharing the Road - Police and Traffic Stops",
    url: HANDBOOK_URL,
  },
  {
    key: "traffic-stop-stay",
    quote:
      "Answer the officer's questions fully and clearly. Remain in " +
      "the vehicle unless requested to get out.",
    source: HANDBOOK,
    section: "Section Ten: Sharing the Road - Police and Traffic Stops",
    url: HANDBOOK_URL,
  },
  {
    key: "smv-emblem",
    quote:
      "A fluorescent or reflective orange and red triangle displayed " +
      "on the rear of vehicles drawn by animal, farm equipment, or " +
      "construction equipment means the vehicle is traveling less " +
      "than 25 mph.",
    source: HANDBOOK,
    section: "Section Ten: Sharing the Road - Slow-Moving Vehicles",
    url: HANDBOOK_URL,
  },
  {
    key: "farm-machinery",
    quote:
      "Pass with caution and remember that the operator of the farm " +
      "machinery cannot hear approaching vehicles.",
    source: HANDBOOK,
    section: "Section Ten: Sharing the Road - Slow-Moving Vehicles",
    url: HANDBOOK_URL,
  },
  {
    key: "horse-drawn",
    quote:
      "Pass with caution and do not use your horn or \"rev\" the engine " +
      "because this may scare the horse and cause a crash.",
    source: HANDBOOK,
    section: "Section Ten: Sharing the Road - Slow-Moving Vehicles",
    url: HANDBOOK_URL,
  },
  {
    key: "atv-no-highway",
    quote:
      "A person shall not operate an ATV upon any public highway or " +
      "roadway or upon the right-of-way of any public highway or " +
      "roadway.",
    source: HANDBOOK,
    section: "Section Ten: Sharing the Road - All-Terrain Vehicles (ATVs)",
    url: HANDBOOK_URL,
  },
  {
    key: "atv-crossing",
    quote:
      "While crossing, the operator shall cross at as close to a " +
      "ninety (90) degree angle as is practical and safe and shall " +
      "not travel on the highway for more than two-tenths (2/10) of a " +
      "mile.",
    source: HANDBOOK,
    section: "Section Ten: Sharing the Road - Restrictions and Exceptions",
    url: HANDBOOK_URL,
  },
  {
    key: "high-beams-when",
    quote:
      "Use your high beams whenever there are no oncoming vehicles. " +
      "High beams let you see twice as far as low beams.",
    source: HANDBOOK,
    section: "Section Eleven: Special Driving Situations - Night Driving",
    url: HANDBOOK_URL,
  },
  {
    key: "low-beams-fog",
    quote:
      "Use your low beams when following another vehicle, and in fog, " +
      "rain, or snow. Light from your high beams may cause glare, " +
      "making it more difficult to see ahead.",
    source: HANDBOOK,
    section: "Section Eleven: Special Driving Situations - Night Driving",
    url: HANDBOOK_URL,
  },
  {
    key: "dim-500-300",
    quote:
      "Dim your lights whenever you come within 500 feet of oncoming " +
      "vehicles, and within 300 feet of any vehicle you are " +
      "following.",
    source: HANDBOOK,
    section: "Section Eleven: Special Driving Situations - Night Driving",
    url: HANDBOOK_URL,
  },
  {
    key: "night-glare-look-right",
    quote:
      "If a vehicle comes toward you with their high beams on, look " +
      "toward the right side of the road to keep from being " +
      "distracted or momentarily blinded by their headlights.",
    source: HANDBOOK,
    section: "Section Eleven: Special Driving Situations - Night Driving",
    url: HANDBOOK_URL,
  },
  {
    key: "night-following-extra",
    quote:
      "Increase your following distance by adding at least one " +
      "additional second for night driving conditions and at least " +
      "two additional seconds for driving on unfamiliar roadways at " +
      "night.",
    source: HANDBOOK,
    section: "Section Eleven: Special Driving Situations - Night Driving",
    url: HANDBOOK_URL,
  },
  {
    key: "night-no-sunglasses",
    quote:
      "Do not wear sunglasses or colored lenses when driving at night " +
      "or on overcast days. Tinted or colored lenses reduce your " +
      "vision.",
    source: HANDBOOK,
    section: "Section Eleven: Special Driving Situations - Night Driving",
    url: HANDBOOK_URL,
  },
  {
    key: "funeral-row",
    quote:
      "A funeral procession has the right-of-way at an intersection " +
      "and may pass through the intersection if the procession is led " +
      "by an escort vehicle displaying flashing yellow, red, or blue " +
      "lights.",
    source: HANDBOOK,
    section: "Section Eleven: Special Driving Situations - Funeral Processions",
    url: HANDBOOK_URL,
  },
  {
    key: "funeral-no-cut",
    quote:
      "You must not drive your vehicle between the vehicles of a " +
      "funeral procession except when authorized to do so by a police " +
      "or safety officer.",
    source: HANDBOOK,
    section: "Section Eleven: Special Driving Situations - Funeral Processions",
    url: HANDBOOK_URL,
  },
  {
    key: "funeral-penalty",
    quote:
      "If you violate this law, you may receive a $250 fine or 90 " +
      "days in jail.",
    source: HANDBOOK,
    section: "Section Eleven: Special Driving Situations - Funeral Processions",
    url: HANDBOOK_URL,
  },
  {
    key: "workzone-slow-always",
    quote:
      "Always reduce your speed in a work zone, even if there are no " +
      "workers. The narrower lanes and rough pavement can create a " +
      "hazardous condition.",
    source: HANDBOOK,
    section: "Section Eleven: Special Driving Situations - Work Zones",
    url: HANDBOOK_URL,
  },
  {
    key: "workzone-double-conditions",
    quote:
      "Note that Kentucky law allows for fines to be doubled in a " +
      "highway work zone when signs are displayed informing drivers " +
      "of the existence of a highway work zone and that fines are " +
      "double in it. Additionally, at least one (1) bona fide worker " +
      "must by present.",
    source: HANDBOOK,
    section: "Section Eleven: Special Driving Situations - Work Zones",
    url: HANDBOOK_URL,
  },
  {
    key: "workzone-end",
    quote:
      "Observe the posted work zone signs until you see \"End Road Work.\"",
    source: HANDBOOK,
    section: "Section Eleven: Special Driving Situations - Work Zones",
    url: HANDBOOK_URL,
  },
  {
    key: "rural-gravel",
    quote:
      "Gravel or dirt - Traction can be reduced on gravel or dirt " +
      "roads. You should reduce your speed, increase your following " +
      "distance and realize you may skid when trying to stop your " +
      "vehicle.",
    source: HANDBOOK,
    section: "Section Eleven: Special Driving Situations - Rural Road Driving",
    url: HANDBOOK_URL,
  },
  {
    key: "narrow-bridge",
    quote:
      "Take turns crossing the bridge; generally, the first driver to " +
      "the bridge has right of way.",
    source: HANDBOOK,
    section: "Section Eleven: Special Driving Situations - Rural Road Driving",
    url: HANDBOOK_URL,
  },
  {
    key: "uncontrolled-intersection",
    quote:
      "When approaching an uncontrolled rural intersection, slow down " +
      "and be prepared to stop for crossing or oncoming traffic.",
    source: HANDBOOK,
    section: "Section Eleven: Special Driving Situations - Rural Road Driving",
    url: HANDBOOK_URL,
  },
  {
    key: "steel-bridge",
    quote:
      "Open bridge gratings or steel bridges - Can reduce your " +
      "traction. Reduce your speed, increase your following distance, " +
      "and maintain a firm grip on the steering wheel.",
    source: HANDBOOK,
    section: "Section Eleven: Special Driving Situations - Rural Road Driving",
    url: HANDBOOK_URL,
  },
  {
    key: "trailer-60-40",
    quote:
      "Sixty percent of the cargo weight of a trailer should go in " +
      "the front (nearest the towing vehicle) and 40 percent in the " +
      "back.",
    source: HANDBOOK,
    section: "Section Eleven: Special Driving Situations - Loading a Trailer",
    url: HANDBOOK_URL,
  },
  {
    key: "trailer-sway",
    quote:
      "If the trailer begins to sway or whip, steer straight and " +
      "reduce speed gradually, do not apply the brakes. Never " +
      "increase speed.",
    source: HANDBOOK,
    section: "Section Eleven: Special Driving Situations - Safe Driving With a Trailer",
    url: HANDBOOK_URL,
  },
  {
    key: "trailer-55",
    quote:
      "The maximum recommend speed for most vehicle-trailer " +
      "combinations is 55 mph.",
    source: HANDBOOK,
    section: "Section Eleven: Special Driving Situations - Safe Driving With a Trailer",
    url: HANDBOOK_URL,
  },
  {
    key: "trailer-jackknife",
    quote:
      "If the trailer starts to jackknife - STOP - and pull ahead to " +
      "straighten out; then start again.",
    source: HANDBOOK,
    section: "Section Eleven: Special Driving Situations - Safe Driving With a Trailer",
    url: HANDBOOK_URL,
  },
  {
    key: "careful-driving-statute",
    quote:
      "The operator of any vehicle upon a highway shall operate the " +
      "vehicle in a careful manner, with regard for the safety and " +
      "convenience of pedestrians and other vehicles upon the " +
      "highway.",
    source: KRS,
    section: "KRS 189.290(1) - Operator of vehicle to drive carefully",
    url: krs("55551"),
  },
  {
    key: "texting-ban-statute",
    quote:
      "no person shall, while operating a motor vehicle that is in " +
      "motion on the traveled portion of a roadway, write, send, or " +
      "read text-based communication using a personal communication " +
      "device",
    source: KRS,
    section: "KRS 189.292(2) - Personal communication device",
    url: krs("39750"),
  },
  {
    key: "minor-device-statute",
    quote:
      "Any person under the age of eighteen (18) who has been issued " +
      "an instruction permit, intermediate license, or operator's " +
      "license shall not operate a motor vehicle, motorcycle, or " +
      "moped that is in motion on the traveled portion of a roadway " +
      "while using a personal communication device, except to summon " +
      "medical help or a law enforcement or public safety agency in " +
      "an emergency situation.",
    source: KRS,
    section: "KRS 189.294(2) - Personal communication device, minors",
    url: krs("39751"),
  },
  {
    key: "pass-right-conditions",
    quote:
      "When the vehicle overtaken is making or about to make a left " +
      "turn; or (b) Upon a roadway with unobstructed pavement of " +
      "sufficient width for two (2) or more lines of vehicles moving " +
      "lawfully in the direction being traveled by the overtaking " +
      "vehicle.",
    source: KRS,
    section: "KRS 189.340(3) - Overtaking on the right",
    url: krs("55539"),
  },
  {
    key: "single-lane-statute",
    quote:
      "A person shall drive a vehicle as nearly as may be practical " +
      "entirely within a single lane and shall not move from that " +
      "lane until the driver ascertains that the movement can be made " +
      "with safety;",
    source: KRS,
    section: "KRS 189.340(7)(a) - Traffic lanes",
    url: krs("55539"),
  },
  {
    key: "bike-two-abreast-statute",
    quote:
      "The operator of a bicycle or electric low-speed scooter shall " +
      "not ride more than two (2) abreast on a single highway lane " +
      "unless operating on any part of the roadway marked exclusively " +
      "for bicycle use.",
    source: KRS,
    section: "KRS 189.340(2)(c) - Overtaking bicycles",
    url: krs("55539"),
  },
  {
    key: "workzone-worker-statute",
    quote:
      "The operator of a vehicle shall yield the right-of-way to any " +
      "public safety vehicle, as defined in KRS 189.910, or any " +
      "pedestrian or worker, including utility worker, actually " +
      "engaged in work in a highway work zone",
    source: KRS,
    section: "KRS 189.960(1) - Right-of-way in a highway work zone",
    url: krs("55552"),
  },
  {
    key: "workzone-lane-statute",
    quote:
      "The operator of a vehicle shall stay in a designated lane " +
      "reserved for traffic in a highway work zone.",
    source: KRS,
    section: "KRS 189.960(3) - Highway work zone",
    url: krs("55552"),
  },
  {
    key: "unsafe-crossing-statute",
    quote:
      "no operator of any vehicle shall cross the crossing without " +
      "first bringing his vehicle to a full stop no closer than a " +
      "marked stop line or fifteen (15) feet, nor more than thirty " +
      "(30) feet, from the nearest rail of the tracks.",
    source: KRS,
    section: "KRS 189.560(3) - Railroad crossings designated unsafe",
    url: krs("47790"),
  },
  {
    key: "license-possession-statute",
    quote:
      "The licensee shall have his or her license in his or her " +
      "immediate possession at all times when driving a motor vehicle " +
      "and shall display it upon demand to a peace officer",
    source: KRS,
    section: "KRS 186.510 - License to be in possession",
    url: krs("53610"),
  },
  {
    key: "dui-statute-008",
    quote:
      "A person shall not operate or be in physical control of a " +
      "motor vehicle anywhere in this Commonwealth: (a) Having an " +
      "alcohol concentration of 0.08 or more as measured by a " +
      "scientifically reliable test or tests of a sample of the " +
      "person's breath or blood taken within two (2) hours of " +
      "cessation of operation or physical control of a motor vehicle;",
    source: KRS,
    section: "KRS 189A.010(1)(a) - Operating with alcohol concentration of or above 0.08",
    url: krs("58145"),
  },
  {
    key: "dui-statute-under21",
    quote:
      "Having an alcohol concentration of 0.02 or more as measured by " +
      "a scientifically reliable test or tests of a sample of the " +
      "person's breath or blood taken within two (2) hours of " +
      "cessation of operation or physical control of a motor vehicle, " +
      "if the person is under the age of twenty-one (21).",
    source: KRS,
    section: "KRS 189A.010(1)(f) - Persons under twenty-one",
    url: krs("58145"),
  },
];
