import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts behind the South Dakota bank.
//
// Sources, and why there are four of them:
//
//  - The South Dakota Driver License Manual, REVISED 11/2024, published by the
//    Department of Public Safety, Driver Licensing Program in Pierre. 72 pages.
//    This is the book the knowledge test is written from, and it carries most
//    of what is quoted below.
//  - South Dakota Codified Laws Title 32 (Motor Vehicles), published by the
//    South Dakota Legislature. The manual is unusually silent on numbers: it
//    never states a single speed limit, gives no parking distance from a
//    hydrant or a crosswalk, and never says when headlights become compulsory.
//    Those come from the statute.
//  - Two Department of Public Safety knowledge-base pages, for the test format.
//    The manual says a knowledge test exists but never gives the pass mark; the
//    80% figure appears only on dps.sd.gov's testing and FAQ articles.
//  - The DPS Teen Driver Graduated Licensing pamphlet, effective 7/1/2025, for
//    the passenger limit on a Restricted Minor's Permit, which the manual omits
//    entirely.
//
// dps.sd.gov now redirects every page to a ServiceNow portal at www.sd.gov,
// which renders its articles in the browser rather than serving them as HTML,
// so the two web pages were read by rendering those same official URLs in a
// headless browser on 2026-09-07 and saving the visible text. Every `url` below
// points at the live official page.
//
// Every quote was located mechanically in the fetched source and checked as an
// exact substring before it was written here. Nothing is paraphrased. Four
// normalisations were applied to the extracted text and to nothing else: curly
// quotes, en dashes and em dashes are folded to ASCII; runs of whitespace,
// including the line breaks the PDF inserts mid-sentence, collapse to single
// spaces; the section symbol is spelled out as "Section"; and where a source
// states a rule as a stem followed by a bulleted list, the items are run
// together in the order they appear - no words are changed, dropped or
// reordered. The sources' own slips are preserved as they stand, including the
// manual's "It is difficult for everyone to see at night than in the daytime"
// and "Wen traffic is clear", because a quote that has been tidied up is no
// longer a quote.

const MANUAL =
  "South Dakota Driver License Manual (SD Department of Public Safety, Driver Licensing Program, REVISED 11/2024)";
const HB = "https://www.sd.gov/sys_attachment.do?sys_id=d8e0b08e47bd0390a497127ba26d4348";
const p = (n: number) => `${HB}#page=${n}`;

const SDCL = "South Dakota Codified Laws Title 32 (South Dakota Legislature)";
const sdcl = (s: string) => `https://sdlegislature.gov/Statutes/${s}`;

const DPS_TESTING =
  "South Dakota Driver License Testing Information (SD Department of Public Safety, KB0043731)";
const TESTING_URL = "https://www.sd.gov/dps?id=kb_article_view&sysparm_article=KB0043731";
const DPS_FAQ =
  "Driver Licensing Frequently Asked Questions (SD Department of Public Safety, KB0043747)";
const FAQ_URL = "https://www.sd.gov/dps?id=kb_article_view&sysparm_article=KB0043747";
const TEEN = "South Dakota Teen Driver Graduated Licensing pamphlet (SD Driver Licensing Program, effective 7/1/2025)";
const TEEN_URL = "https://www.sd.gov/sys_attachment.do?sys_id=7da4d39947d33e10a497127ba26d43d5";

export const southdakotaExcerpts: HandbookExcerpt[] = [
  // ---------------------------------------------------------------- licensing
  {
    key: "manual-purpose",
    quote:
      "Be sure to read the manual carefully and completely. Unless you know the " +
      "information contained in this manual, you cannot pass the knowledge test.",
    source: MANUAL,
    section: "The Driver's License - About This Manual (page 5)",
    url: p(5),
  },
  {
    key: "licence-required",
    quote:
      "Anyone who operates a motor vehicle or a motor-driven cycle on public " +
      "roadways in South Dakota is required to have a driver license.",
    source: MANUAL,
    section: "The Driver's License - Licensing Requirements (page 5)",
    url: p(5),
  },
  {
    key: "new-resident-90-days",
    quote:
      "If you have a valid out of state non-commercial license, you are required " +
      "to apply for a South Dakota driver license within 90 days of establishing " +
      "residency in South Dakota.",
    source: MANUAL,
    section: "The Driver's License - The Driver License (page 5)",
    url: p(5),
  },
  {
    key: "cdl-30-days",
    quote:
      "If you are a CDL holder, you must apply for a South Dakota license within " +
      "30 days of establishing residency in South Dakota.",
    source: MANUAL,
    section: "The Driver's License - The Driver License (page 5)",
    url: p(5),
  },
  {
    key: "carry-licence",
    quote:
      "South Dakota law states that every licensee shall always have their driver " +
      "license in their immediate possession when operating a motor vehicle.",
    source: MANUAL,
    section: "The Driver's License - The Driver License (page 5)",
    url: p(5),
  },
  {
    key: "carry-licence-display",
    quote:
      "Per South Dakota law, every licensee shall always have their driver license " +
      "in their immediate possession when operating a motor vehicle and shall " +
      "display the same upon demand of a judge, court of record, a magistrate, or " +
      "a peace officer.",
    source: MANUAL,
    section: "The Driver's License - Types of Driver's Licenses and Driver's Permits (page 9)",
    url: p(9),
  },
  {
    key: "non-resident-16",
    quote:
      "Non-residents who are at least 16 years of age can drive on a valid " +
      "operator license from their home state.",
    source: MANUAL,
    section: "The Driver's License - The Driver License (page 5)",
    url: p(5),
  },
  {
    key: "licence-min-age",
    quote: "You may obtain a driver license if you: Are at least 14 years of age",
    source: MANUAL,
    section: "The Driver's License - Licensing Requirements (page 5)",
    url: p(5),
  },
  {
    key: "parent-consent",
    quote:
      "Have parent/guardian consent if under the age of 18 (required for every " +
      "application completed)",
    source: MANUAL,
    section: "The Driver's License - Licensing Requirements (page 5)",
    url: p(5),
  },
  {
    key: "surrender-other-licences",
    quote: "Turn in all existing driver license(s) or identification card(s)",
    source: MANUAL,
    section: "The Driver's License - Licensing Requirements (page 5)",
    url: p(5),
  },
  {
    key: "no-licence-under-14",
    quote: "Who Can't Get a South Dakota Driver License? Persons under 14 years of age.",
    source: MANUAL,
    section: "The Driver's License - Who Can't Get a South Dakota Driver License? (page 7)",
    url: p(7),
  },
  {
    key: "child-support-bar",
    quote:
      "Persons who have accumulated child support arrearages of $1,000 or more. " +
      "(These people may be eligible for one 6-month temporary license.)",
    source: MANUAL,
    section: "The Driver's License - Who Can't Get a South Dakota Driver License? (page 7)",
    url: p(7),
  },
  {
    key: "three-attempts-fee",
    quote:
      "For testing purposes, the fee allows you three attempts to pass a test " +
      "within a 6-month period. After 3 attempts, or 6-months, the fee must be " +
      "paid again.",
    source: MANUAL,
    section: "The Driver's License - Fees (page 7)",
    url: p(7),
  },
  {
    key: "fee-proration",
    quote:
      "A proration of fees is given to applicants under 21 years of age who are " +
      "being issued less than a 5-year license.",
    source: MANUAL,
    section: "The Driver's License - Fees (page 7)",
    url: p(7),
  },
  {
    key: "permit-under-18",
    quote:
      "Instruction Permit (Under 18 years of age) - To obtain an Instruction " +
      "Permit, you must be at least 14 years of age and pass the vision and " +
      "knowledge tests.",
    source: MANUAL,
    section: "The Driver's License - Types of Driver's Licenses and Driver's Permits (page 8)",
    url: p(8),
  },
  {
    key: "permit-275-days",
    quote:
      "Minors at least 14 years of age, but less than 18 years of age, must hold " +
      "the valid permit continuously for 275 days",
    source: MANUAL,
    section: "The Driver's License - Instruction Permit (Under 18 years of age) (page 8)",
    url: p(8),
  },
  {
    key: "permit-driver-ed-180",
    quote:
      "(180 days if successful completion [score of 80% or better on both written " +
      "and driving portions of driver education] of an approved Department of " +
      "Education driver education course) prior to upgrading the permit to a " +
      "Restricted Minor's Permit or Operator's License.",
    source: MANUAL,
    section: "The Driver's License - Instruction Permit (Under 18 years of age) (page 8)",
    url: p(8),
  },
  {
    key: "permit-supervision",
    quote:
      "Restrictions: Drive under adult supervision. The adult must be a " +
      "parent/legal guardian or other adult with a valid driver's license and at " +
      "least one year of driving experience. The adult must be seated beside the " +
      "Instruction Permit holder.",
    source: MANUAL,
    section: "The Driver's License - Instruction Permit (Under 18 years of age) (page 8)",
    url: p(8),
  },
  {
    key: "permit-50-hours",
    quote:
      "The driver must complete 50 hours of adult supervised driving on an " +
      "Instruction Permit (must include 10 hours in inclement weather and 10 " +
      "hours after dark).",
    source: MANUAL,
    section: "The Driver's License - Instruction Permit (Under 18 years of age) (page 8)",
    url: p(8),
  },
  {
    key: "permit-no-phone",
    quote:
      "Instruction Permit holders may not use any type of wireless communication " +
      "device while operating a motor vehicle upon public roadways.",
    source: MANUAL,
    section: "The Driver's License - Instruction Permit (page 8)",
    url: p(8),
  },
  {
    key: "wireless-device-definition",
    quote:
      "A 'wireless communication device' is defined as any wireless electronic " +
      "communication device that provides for voice or data communication between " +
      "two or more parties, including a mobile or cellular telephone, text " +
      "messaging device, a personal digital assistant that sends/receives messages",
    source: MANUAL,
    section: "The Driver's License - Instruction Permit (page 8)",
    url: p(8),
  },
  {
    key: "permit-over-18",
    quote:
      "Instruction Permit (Over 18 years of age) - To obtain an Instruction " +
      "Permit, you must pass the vision and knowledge tests.",
    source: MANUAL,
    section: "The Driver's License - Types of Driver's Licenses and Driver's Permits (page 8)",
    url: p(8),
  },
  {
    key: "permit-valid-five-years",
    quote:
      "The permit is valid for five years or until the same date as the " +
      "expiration date on the valid documents authorizing the applicant's " +
      "presence in the U.S., whichever occurs first.",
    source: MANUAL,
    section: "The Driver's License - Instruction Permit (Under 18 years of age) (page 8)",
    url: p(8),
  },
  {
    key: "restricted-permit-requirements",
    quote:
      "Restricted Minor's Permit - To obtain a Restricted Minor's Permit, you must " +
      "be at least 14 years of age, complete the requirements of the Instruction " +
      "Permit, pass the driving test, and not have been convicted of a traffic " +
      "violation during the six months prior to application for the Restricted " +
      "Minor's Permit.",
    source: MANUAL,
    section: "The Driver's License - Restricted Minor's Permit (page 8)",
    url: p(8),
  },
  {
    key: "restricted-permit-hours",
    quote:
      "Restrictions: Entitles the holder, while having the permit in their " +
      "immediate physical possession, to operate a motor vehicle during the hours " +
      "of 6 a.m. to 10 p.m. if the motor vehicle is being operated with the " +
      "permission of the minor's parent/legal guardian.",
    source: MANUAL,
    section: "The Driver's License - Restricted Minor's Permit (page 8)",
    url: p(8),
  },
  {
    key: "restricted-permit-night",
    quote:
      "During the hours of 10 p.m. to 6 a.m. the minor must be accompanied by a " +
      "parent or legal guardian who is occupying the seat beside the driver.",
    source: MANUAL,
    section: "The Driver's License - Restricted Minor's Permit (page 8)",
    url: p(8),
  },
  {
    key: "restricted-permit-six-months",
    quote:
      "The Restricted Permit holder must drive on the Restricted Permit for a " +
      "minimum of 6 months and no passengers are allowed except for immediate " +
      "family or members of household for first 6 months on the Restricted Permit.",
    source: MANUAL,
    section: "The Driver's License - Restricted Minor's Permit (page 8)",
    url: p(8),
  },
  {
    key: "restricted-permit-auto-convert",
    quote:
      "Upon reaching age 18, the permit automatically converts to an Operator's " +
      "License.",
    source: MANUAL,
    section: "The Driver's License - Restricted Minor's Permit (page 8)",
    url: p(8),
  },
  {
    key: "restricted-permit-exceptions",
    quote:
      "You may drive alone after 10 p.m. if you are taking the most direct route " +
      "and traveling to or from: School or school event Church or church event " +
      "Work Driving ag machinery (not subject to registration) or doing farm " +
      "related work",
    source: MANUAL,
    section: "The Driver's License - Restricted Minor's Permit (page 8)",
    url: p(8),
  },
  {
    key: "restricted-permit-passenger-after-six",
    quote:
      "After 6 months may have one passenger under 18 who is not immediate family " +
      "or part of the immediate household.",
    source: TEEN,
    section: "Passenger Limit While Driving Without Adult Supervision on Restricted Permit",
    url: TEEN_URL,
  },
  {
    key: "teen-knowledge-test-waiver",
    quote:
      "The knowledge test will be waived if you present a driver's ed certificate " +
      "proving you passed an approved driver education course (or approved " +
      "equivalent out-of-state course) within the last year.",
    source: TEEN,
    section: "Instruction Permit - How do I get an Instruction Permit?",
    url: TEEN_URL,
  },
  {
    key: "teen-unrestricted-16",
    quote: "Drive on a Restricted Minor's Permit for a minimum of 6 months.",
    source: TEEN,
    section: "Unrestricted License - How do I move to a full, unrestricted driver's license?",
    url: TEEN_URL,
  },
  {
    key: "operator-licence",
    quote:
      "Operator's License - To obtain an Operator's License, you must be at least " +
      "16 years of age and must have passed the vision, knowledge and driving " +
      "tests.",
    source: MANUAL,
    section: "The Driver's License - Operator's License (page 8)",
    url: p(8),
  },
  {
    key: "operator-licence-minor",
    quote:
      "If a minor is at least 16 years of age, but under 18 years of age, they " +
      "must complete the requirements of the Instruction Permit and/or Restricted " +
      "Minors Permit and not have been convicted of a traffic violation during the " +
      "past six months prior to obtaining the Operator's License.",
    source: MANUAL,
    section: "The Driver's License - Operator's License (page 8)",
    url: p(8),
  },
  {
    key: "moped-licence",
    quote: "Moped Operators - You must be in possession of a valid Operator's License.",
    source: MANUAL,
    section: "The Driver's License - Types of Driver's Licenses and Driver's Permits (page 9)",
    url: p(9),
  },
  {
    key: "motorcycle-permit-hours",
    quote:
      "Restrictions: The Motorcycle Instruction Permit holder may operate a " +
      "motorcycle during the hours of 6 a.m. to 8 p.m. if accompanied by a driver " +
      "with a valid motorcycle license who is at least eighteen years of age",
    source: MANUAL,
    section: "The Driver's License - Motorcycle Instruction Permit (page 9)",
    url: p(9),
  },
  {
    key: "motorcycle-permit-no-passenger",
    quote:
      "No Motorcycle Instruction Permit holder may carry another person on the " +
      "motorcycle.",
    source: MANUAL,
    section: "The Driver's License - Motorcycle Instruction Permit (page 9)",
    url: p(9),
  },
  {
    key: "under-21-expiry",
    quote:
      "Note to all applicants: Any driver license or non-driver ID issued to any " +
      "individual under 21 years of age with five years or less remaining until " +
      "the applicant's 21st birthday will expire 30 days after the individual's " +
      "21st birthday.",
    source: MANUAL,
    section: "The Driver's License - Types of Driver's Licenses and Driver's Permits (page 9)",
    url: p(9),
  },
  {
    key: "test-own-vehicle",
    quote: "License applicants must furnish their own safe vehicle for the on-the-road skill test.",
    source: MANUAL,
    section: "The Driver's License - Cooperation with Examiner (page 10)",
    url: p(10),
  },
  {
    key: "test-no-passengers",
    quote: "Pets or passengers will not be allowed in the vehicle during the on-the-road skill test.",
    source: MANUAL,
    section: "The Driver's License - Cooperation with Examiner (page 10)",
    url: p(10),
  },
  {
    key: "knowledge-test-scope",
    quote:
      "Knowledge Test: You will be required to pass a test covering the rules of " +
      "the road and safe driving practices.",
    source: MANUAL,
    section: "The Driver's License - Examination Procedures (page 10)",
    url: p(10),
  },
  {
    key: "knowledge-test-cheating",
    quote:
      "If someone is caught cheating you will not be allowed to re-test the " +
      "following day, you will be required to wait a minimum of two weeks before " +
      "being allowed to test again.",
    source: MANUAL,
    section: "The Driver's License - Examination Procedures (page 10)",
    url: p(10),
  },
  {
    key: "retest-next-working-day",
    quote:
      "If you fail any of the tests, you may not re-test before the next working " +
      "day. You may wait longer if you want more time to study the manual or to " +
      "practice driving.",
    source: MANUAL,
    section: "The Driver's License - Unsuccessful Examinations (page 10)",
    url: p(10),
  },
  {
    key: "knowledge-test-pass-mark",
    quote:
      "Pass a knowledge test with a score of 80% or higher. This test will cover " +
      "rules of the road and safe-driving practices.",
    source: DPS_TESTING,
    section: "Frequently Asked Questions - How do I get my driver's license?",
    url: TESTING_URL,
  },
  {
    key: "drive-test-pass-mark",
    quote:
      "Pass a driving test with a score of 80% or higher. During this test, you " +
      "must demonstrate your ability to safely operate a vehicle and perform " +
      "normal driving tasks.",
    source: DPS_FAQ,
    section: "Frequently Asked Questions - How do I get my license?",
    url: FAQ_URL,
  },
  {
    key: "no-sample-test",
    quote:
      "Look below for testing requirements for each type of South Dakota Driver's " +
      "License, then download our driving manuals to start studying. There is no " +
      "sample test.",
    source: DPS_TESTING,
    section: "South Dakota Driver License Testing Information",
    url: TESTING_URL,
  },
  {
    key: "expired-30-days-retest",
    quote:
      "If your driver license has been expired for more than 30 days, you must " +
      "schedule a testing appointment at a driver exam station, as you will be " +
      "required to pass a knowledge test.",
    source: DPS_TESTING,
    section: "South Dakota Driver License Testing Information",
    url: TESTING_URL,
  },
  {
    key: "drive-test-30-day-wait",
    quote:
      "If a drive test applicant commits any of the following infractions, they " +
      "must wait 30 days before another driving test will be administered:",
    source: DPS_TESTING,
    section: "Frequently Asked Questions - What happens if I fail any of the tests?",
    url: TESTING_URL,
  },
  {
    key: "vision-standard",
    quote:
      "To qualify for a driver license without restrictions, an applicant must " +
      "score 20/40 or better with both eyes, but no worse than 20/50 in either eye.",
    source: MANUAL,
    section: "Be in Shape to Drive - Vision (page 18)",
    url: p(18),
  },
  {
    key: "vision-corrective-lenses",
    quote:
      "Vision Test: If you wear glasses or contact lenses while taking the vision " +
      "test, you will be required to wear them whenever driving.",
    source: MANUAL,
    section: "The Driver's License - Examination Procedures (page 10)",
    url: p(10),
  },
  {
    key: "drive-test-scheduled",
    quote:
      "As of the date this manual was printed, drive tests in all locations must " +
      "be scheduled.",
    source: MANUAL,
    section: "The Driver's License - Examination Procedures (page 10)",
    url: p(10),
  },
  {
    key: "transfer-no-testing",
    quote:
      "If you are currently holding a valid out-of-state driver license, no " +
      "testing will be required for the transfer of that license unless you have a " +
      "hazardous materials endorsement.",
    source: MANUAL,
    section: "The Driver's License - Examination Procedures (page 10)",
    url: p(10),
  },
  {
    key: "restriction-codes",
    quote:
      "G No night driving F Left outside rearview mirror I No driving outside of " +
      "town A Automatic transmission (Non-commercial) Y 50-mile radius of " +
      "residence C Special equipped vehicle",
    source: MANUAL,
    section: "The Driver's License - Restrictions Placed on Licenses (page 11)",
    url: p(11),
  },
  {
    key: "restriction-codes-dps",
    quote:
      "(A) Automatic transmission (formerly E) (B) Corrective lenses (formerly O) " +
      "(C) Specially equipped vehicle (formerly Z) (F) Left outside rearview " +
      "mirror (G) No night driving (I) No driving outside of town (formerly Q) " +
      "(R) Restricted permit (6:00 a.m.-10:00 p.m.) (Y) 50-mile radius of residence",
    source: DPS_TESTING,
    section:
      "Frequently Asked Questions - What are the possible restrictions that could be applied to my driver license?",
    url: TESTING_URL,
  },
  {
    key: "restrictions-purpose",
    quote:
      "An operator license may be issued with certain restrictions. For example, a " +
      "person who cannot see clearly with their right eye will be restricted to " +
      "driving a vehicle with a left outside rearview mirror.",
    source: MANUAL,
    section: "The Driver's License - Restrictions Placed on Licenses (page 11)",
    url: p(11),
  },
  {
    key: "licence-renewal-five-years",
    quote:
      "Your driver license is valid for 5 years and will expire on your birthday " +
      "or 30 days after your birthday if you are turning 21.",
    source: MANUAL,
    section: "The Driver's License - Driver License Renewal (page 12)",
    url: p(12),
  },
  {
    key: "renewal-180-days",
    quote:
      "You may renew the license anytime up to 180 days before it expires (unless " +
      "you will be turning 21). You will be required to take a vision test when " +
      "renewing.",
    source: MANUAL,
    section: "The Driver's License - Driver License Renewal (page 12)",
    url: p(12),
  },
  {
    key: "renewal-expired-knowledge",
    quote:
      "If the driver license you surrender is expired, a knowledge test will also " +
      "be required.",
    source: MANUAL,
    section: "The Driver's License - Driver License Renewal (page 12)",
    url: p(12),
  },
  {
    key: "lose-licence-reasons",
    quote:
      "In order to keep your driver license, you must always drive safely. You can " +
      "lose your license for: a drug conviction in a vehicle a conviction for " +
      "driving while intoxicated an alcohol conviction by a minor",
    source: MANUAL,
    section: "The Driver's License - Keeping Your Driver License (page 12)",
    url: p(12),
  },
  {
    key: "lose-licence-refusal",
    quote:
      "refusing to be tested for alcohol or drugs if you are asked to do so by a " +
      "police officer",
    source: MANUAL,
    section: "The Driver's License - Keeping Your Driver License (page 12)",
    url: p(12),
  },
  {
    key: "lose-licence-under-16",
    quote:
      "any conviction of a traffic violation committed prior to the age of 16 by " +
      "the holder of a restricted permit or instruction permit",
    source: MANUAL,
    section: "The Driver's License - Keeping Your Driver License (page 12)",
    url: p(12),
  },
  {
    key: "revocation-definition",
    quote:
      "Revocation: The loss of a driver license and/or privilege to drive or apply " +
      "for a license. Following a revocation, all applicable tests will be " +
      "required in addition to the application fee and a $50-$225 reinstatement fee.",
    source: MANUAL,
    section: "The Driver's License - Loss of Driving Privileges (page 12)",
    url: p(12),
  },
  {
    key: "suspension-reinstatement",
    quote:
      "Reinstatement from a Suspension: Following suspension, no testing will be " +
      "required unless the license has expired. An application fee and a $50 " +
      "reinstatement fee will be required.",
    source: MANUAL,
    section: "The Driver's License - Loss of Driving Privileges (page 12)",
    url: p(12),
  },
  {
    key: "minor-suspension-30-days",
    quote:
      "If the Department receives record of a conviction for a traffic violation " +
      "or a violation of the Instruction Permit, Restricted Permit or Driver " +
      "License for a minor under 16 years of age, the driving privileges shall be " +
      "suspended for a period of thirty days or as otherwise required by law.",
    source: MANUAL,
    section: "The Driver's License - Instruction and Restricted Minor's Permit (page 13)",
    url: p(13),
  },
  {
    key: "minor-second-violation",
    quote:
      "If convicted of a second traffic violation, a violation of a Restricted " +
      "Permit, or a Felony/Class 1 Misdemeanor while driving on an Instruction or " +
      "Restricted Minor's Permit, the suspension period will be 180 days or the " +
      "driver's 16th birthday, whichever is longer.",
    source: MANUAL,
    section: "The Driver's License - Instruction and Restricted Minor's Permit (page 13)",
    url: p(13),
  },
  {
    key: "point-system-thresholds",
    quote:
      "Any operator who accumulates 15 points in any 12 consecutive months, or 22 " +
      "points in any 24 consecutive months, is subject to a driver license " +
      "suspension.",
    source: MANUAL,
    section: "The Driver's License - South Dakota Point System (page 14)",
    url: p(14),
  },
  {
    key: "point-system-no-speeding",
    quote:
      "No points will be assessed for speeding, standing, parking, equipment, size " +
      "or weight violations, including speed limits set by the Department of " +
      "Transportation for control of size and weight related damage to highways.",
    source: MANUAL,
    section: "The Driver's License - South Dakota Point System (page 14)",
    url: p(14),
  },
  {
    key: "point-system-multiple",
    quote:
      "When multiple offenses arise out of a single incident, points will be " +
      "assessed on the offense carrying the highest point value.",
    source: MANUAL,
    section: "The Driver's License - South Dakota Point System (page 14)",
    url: p(14),
  },
  {
    key: "point-system-out-of-state",
    quote:
      "Points are assessed on out-of-state convictions just as if they were " +
      "committed in South Dakota.",
    source: MANUAL,
    section: "The Driver's License - South Dakota Point System (page 14)",
    url: p(14),
  },
  {
    key: "point-suspension-periods",
    quote:
      "Periods of Suspension: First Suspension 60 days Second Suspension 6 months " +
      "Subsequent Suspension 1 year",
    source: MANUAL,
    section: "The Driver's License - South Dakota Point System (page 14)",
    url: p(14),
  },
  {
    key: "point-values-statute",
    quote:
      "(1) Driving while intoxicated ten points (2) Reckless driving eight points " +
      "(3) Eluding/attempting to elude a police officer six points (4) Drag racing " +
      "six points (5) Failure to yield right-of-way four points",
    source: SDCL,
    section: "SDCL 32-12-49.1 - Point system for offenses--Number of points charged",
    url: sdcl("32-12-49.1"),
  },
  {
    key: "point-values-lower",
    quote:
      "(6) Improper passing four points (7) Driving on wrong side of roadway four " +
      "points (8) Stop sign/light violation three points (9) Other moving offenses " +
      "two points",
    source: SDCL,
    section: "SDCL 32-12-49.1 - Point system for offenses--Number of points charged",
    url: sdcl("32-12-49.1"),
  },
  {
    key: "financial-responsibility-required",
    quote:
      "South Dakota state law SDCL 32-35-113 requires the owner of any motor " +
      "vehicle that is required to be registered, maintain in force one of the " +
      "following forms of financial responsibility:",
    source: MANUAL,
    section: "The Driver's License - Are you Insured? (page 13)",
    url: p(13),
  },
  {
    key: "proof-of-insurance-carried",
    quote:
      "Written evidence of your financial responsibility must be carried in the " +
      "vehicle covered and presented to any Law Enforcement Officer upon request.",
    source: MANUAL,
    section: "The Driver's License - Financial Responsibility (page 14)",
    url: p(14),
  },
  {
    key: "no-insurance-penalty",
    quote:
      "Penalty - A conviction for failure to maintain proof of financial " +
      "responsibility is a Class 2 Misdemeanor (30 days imprisonment in a county " +
      "jail, $100 fine or both), driver license suspension for a period of not " +
      "less than 30 days or more than one year",
    source: MANUAL,
    section: "The Driver's License - Financial Responsibility (page 14)",
    url: p(14),
  },
  {
    key: "registration-90-days",
    quote:
      "You have 90 days to register a vehicle brought in from another state.",
    source: MANUAL,
    section: "The Driver's License - Vehicle Registration and Titles (page 13)",
    url: p(13),
  },
  {
    key: "registration-in-vehicle",
    quote:
      "A Certificate of Title is required to sell or transfer any vehicle. The " +
      "Title should be kept in a safe place, not in the vehicle. The registration " +
      "certificate must always be carried in the vehicle.",
    source: MANUAL,
    section: "The Driver's License - Vehicle Registration and Titles (page 13)",
    url: p(13),
  },
  {
    key: "organ-donor",
    quote:
      "The issuance of a driver license or ID with a donor designation completes " +
      "the donation registration process and is effective unless you request " +
      "removal of the donor designation.",
    source: MANUAL,
    section: "The Driver's License - Organ and Tissue Donation (page 11)",
    url: p(11),
  },
  {
    key: "permit-hours-statute",
    quote:
      "to drive a motor vehicle upon the public highways for a period of five " +
      "years during the hours of 6 a.m. to 10 p.m. if accompanied by a person " +
      "holding a valid operator's license who is at least eighteen years of age, " +
      "has had at least one year of driving experience",
    source: SDCL,
    section:
      "SDCL 32-12-11 - Application for license or permit--Persons at least fourteen and less than eighteen",
    url: sdcl("32-12-11"),
  },
  {
    key: "licence-fee-statute",
    quote:
      "The application fee for an original driver license or a renewal of a driver " +
      "license is thirty-eight dollars. The fee for a duplicate license, a name " +
      "change, or an address change is twenty dollars.",
    source: SDCL,
    section: "SDCL 32-12-16 - Fee for original, renewal, duplicate, or changed license",
    url: sdcl("32-12-16"),
  },

  // ------------------------------------------------------- fitness to drive
  {
    key: "vision-importance",
    quote:
      "Good vision is important for safe driving. If you cannot see clearly, you " +
      "will have trouble identifying traffic and roadway conditions, spotting " +
      "potential trouble, and responding to problems in a timely manner.",
    source: MANUAL,
    section: "Be in Shape to Drive - Vision (page 18)",
    url: p(18),
  },
  {
    key: "vision-tinted-lenses",
    quote:
      "Avoid using dark or tinted corrective lenses at night. They cut down the " +
      "light that you need to see clearly.",
    source: MANUAL,
    section: "Be in Shape to Drive - Vision (page 18)",
    url: p(18),
  },
  {
    key: "vision-spare-glasses",
    quote:
      "Try to keep an extra pair of glasses in your vehicle. If your regular " +
      "glasses are broken or lost, use the spare pair to drive safely.",
    source: MANUAL,
    section: "Be in Shape to Drive - Vision (page 18)",
    url: p(18),
  },
  {
    key: "hearing",
    quote:
      "Studies have shown that the driving records of hearing-impaired drivers are " +
      "just as good as those drivers with good hearing.",
    source: MANUAL,
    section: "Be in Shape to Drive - Hearing (page 18)",
    url: p(18),
  },
  {
    key: "fatigue-definition",
    quote:
      "Fatigue is physical or mental tiredness that can be caused by physical or " +
      "mental strain, repetitive tasks, illness, or lack of sleep. Fatigue can " +
      "affect vision and increase the time to make decisions.",
    source: MANUAL,
    section: "Be in Shape to Drive - Fatigue (page 18)",
    url: p(18),
  },
  {
    key: "fatigue-sleep-hours",
    quote:
      "Get adequate sleep - most people need 7 to 9 hours to maintain proper " +
      "alertness during the day.",
    source: MANUAL,
    section: "Be in Shape to Drive - Before a Trip, Do the Following (page 18)",
    url: p(18),
  },
  {
    key: "fatigue-stop-every-100",
    quote: "Plan to stop about every 100 miles or 2 hours.",
    source: MANUAL,
    section: "Be in Shape to Drive - Before a Trip, Do the Following (page 18)",
    url: p(18),
  },
  {
    key: "fatigue-nap",
    quote:
      "If you start feeling tired, stop driving and pull off at the next exit or " +
      "rest area to take a 15 to 20-minute nap or find a place to sleep for the " +
      "night.",
    source: MANUAL,
    section: "Be in Shape to Drive - Ways to Avoid Fatigue (page 19)",
    url: p(19),
  },
  {
    key: "fatigue-best-cure",
    quote: "The best way to avoid fatigue is to get plenty of rest.",
    source: MANUAL,
    section: "Be in Shape to Drive - Ways to Avoid Fatigue (page 19)",
    url: p(19),
  },
  {
    key: "distraction-definition",
    quote:
      "A distraction is anything that takes your attention away from driving. " +
      "Distracted driving can cause crashes, resulting in injury, death, or " +
      "property damage.",
    source: MANUAL,
    section: "Be in Shape to Drive - Driver Distractions (page 19)",
    url: p(19),
  },
  {
    key: "distraction-mental",
    quote:
      "Taking your eyes off the road or hands off the steering wheel presents " +
      "obvious driving risks. Mental activities that take your mind away from " +
      "driving are just as dangerous.",
    source: MANUAL,
    section: "Be in Shape to Drive - Driver Distractions (page 19)",
    url: p(19),
  },
  {
    key: "texting-prohibited",
    quote: "Texting, reading texts, and social networking is prohibited by state law.",
    source: MANUAL,
    section: "Be in Shape to Drive - Driver Distractions (page 19)",
    url: p(19),
  },
  {
    key: "secure-pets",
    quote: "Properly secure pets in a pet carrier or portable kennel.",
    source: MANUAL,
    section: "Be in Shape to Drive - Driver Distractions (page 19)",
    url: p(19),
  },
  {
    key: "permit-holders-no-device",
    quote:
      "Instruction and Restricted permit holders may not use any type of wireless " +
      "communication device while operating a motor vehicle.",
    source: MANUAL,
    section: "Be in Shape to Drive - Driver Distractions (page 19)",
    url: p(19),
  },
  {
    key: "aggressive-driving-definition",
    quote:
      "Aggressive driving occurs when an individual intentionally commits an " +
      "action that endangers other persons or property.",
    source: MANUAL,
    section: "Be in Shape to Drive - Aggressive Driving (page 19)",
    url: p(19),
  },
  {
    key: "aggressive-driving-behaviours",
    quote:
      "Some behaviors typically associated with aggressive driving include " +
      "speeding, following too closely, unsafe lane changes, improperly signaling, " +
      "and failing to obey traffic control devices",
    source: MANUAL,
    section: "Be in Shape to Drive - Aggressive Driving (page 19)",
    url: p(19),
  },
  {
    key: "alcohol-40-percent",
    quote:
      "Alcohol and other impairing drugs are involved in approximately 40% of all " +
      "traffic crashes in which someone is killed every year.",
    source: MANUAL,
    section: "Be in Shape to Drive - Alcohol, Other Drugs, and Driving (page 19)",
    url: p(19),
  },
  {
    key: "alcohol-new-drivers",
    quote:
      "New drivers are more affected by alcohol than experienced drivers because " +
      "they are still learning to drive. Small amounts of alcohol are likely to " +
      "increase the number of errors dramatically.",
    source: MANUAL,
    section: "Be in Shape to Drive - Alcohol, Other Drugs, and Driving (page 19)",
    url: p(19),
  },
  {
    key: "under-21-illegal",
    quote:
      "If under the age of 21, it is illegal to purchase, possess, or drink " +
      "alcoholic beverages.",
    source: MANUAL,
    section: "Be in Shape to Drive - If Under 21 (page 19)",
    url: p(19),
  },
  {
    key: "physical-control",
    quote:
      "If you have physical control of a vehicle (you don't have to be driving) " +
      "you can be arrested if your blood alcohol concentration (BAC) is over the " +
      "legal limit.",
    source: MANUAL,
    section: "Be in Shape to Drive - Alcohol, Other Drugs, and Driving (page 20)",
    url: p(20),
  },
  {
    key: "bac-thresholds",
    quote:
      "A Blood Alcohol Concentration of 0.08% (0.02% if under 21 years of age) or " +
      "more is evidence that you were driving under the influence of alcohol.",
    source: MANUAL,
    section: "Be in Shape to Drive - Alcohol, Other Drugs, and Driving (page 20)",
    url: p(20),
  },
  {
    key: "implied-consent-manual",
    quote:
      "You give your consent for a chemical test whenever you drive on a public " +
      "highway.",
    source: MANUAL,
    section: "Be in Shape to Drive - Alcohol, Other Drugs, and Driving (page 20)",
    url: p(20),
  },
  {
    key: "alcohol-vision-002",
    quote:
      "Vision is impacted at 0.02% blood alcohol content (BAC) for all drivers. " +
      "The most important sense used while driving is vision.",
    source: MANUAL,
    section: "Be in Shape to Drive - Effects of Alcohol and Other Impairing Drugs (page 20)",
    url: p(20),
  },
  {
    key: "alcohol-reaction-time",
    quote:
      "Reaction time: This slows the ability to process information and respond to " +
      "the driving task.",
    source: MANUAL,
    section: "Be in Shape to Drive - Effects of Alcohol and Other Impairing Drugs (page 20)",
    url: p(20),
  },
  {
    key: "alcohol-colour",
    quote: "Color distinction: This reduces the ability to distinguish colors.",
    source: MANUAL,
    section: "Be in Shape to Drive - Effects of Alcohol and Other Impairing Drugs (page 20)",
    url: p(20),
  },
  {
    key: "alcohol-first-drink",
    quote:
      "Impairment starts with the first drink. Even one drink of alcohol can " +
      "affect a person's ability to operate a motor vehicle.",
    source: MANUAL,
    section: "Be in Shape to Drive - Effects of Alcohol and Other Impairing Drugs (page 20)",
    url: p(20),
  },
  {
    key: "bac-revocation-30-days",
    quote:
      "If you have a BAC of 0.08% or more, your driver's license and/or driving " +
      "privileges may be revoked for a minimum of 30 days, and you may be subject " +
      "to criminal penalties.",
    source: MANUAL,
    section: "Be in Shape to Drive - Alcohol and the Law (page 20)",
    url: p(20),
  },
  {
    key: "under-21-arrest-002",
    quote:
      "In South Dakota, if you are under 21, you can also be arrested for alcohol " +
      "impairment at 0.02%.",
    source: MANUAL,
    section: "Be in Shape to Drive - Alcohol and the Law (page 20)",
    url: p(20),
  },
  {
    key: "implied-consent-refusal",
    quote:
      "You can lose your driver's license for one year if you refuse to take a BAC " +
      "test.",
    source: MANUAL,
    section: "Be in Shape to Drive - Alcohol and the Law (page 20)",
    url: p(20),
  },
  {
    key: "implied-consent-other-state",
    quote:
      "Although implied consent laws vary by state, the law applies to the state " +
      "where you were arrested, not the state where you got your license.",
    source: MANUAL,
    section: "Be in Shape to Drive - Alcohol and the Law (page 20)",
    url: p(20),
  },
  {
    key: "first-conviction-penalty",
    quote:
      "If you are found guilty of an alcohol violation and it is your first " +
      "conviction, you may be fined from $300 to $1,000 plus court costs. You " +
      "could also be sentenced to 15 to 365 days in jail, and your license could be " +
      "suspended or revoked for 90 to 365 days.",
    source: MANUAL,
    section: "Be in Shape to Drive - Alcohol and the Law (page 20)",
    url: p(20),
  },
  {
    key: "zero-tolerance-penalty",
    quote:
      "Zero Tolerance (Under 21, 0.02% or more BAC) First offense is a Class 2 " +
      "misdemeanor which is punishable by a fine and a 30-day loss of driver " +
      "license.",
    source: MANUAL,
    section: "Be in Shape to Drive - PENALTIES (page 20)",
    url: p(20),
  },
  {
    key: "zero-tolerance-second",
    quote:
      "Second or Subsequent offense is a Class 2 misdemeanor which is punishable by " +
      "a fine and a 180-day loss of driver license.",
    source: MANUAL,
    section: "Be in Shape to Drive - PENALTIES (page 20)",
    url: p(20),
  },
  {
    key: "dwi-first-offence",
    quote:
      "DWI (0.08% or more BAC) First offense is a Class 1 misdemeanor which is " +
      "punishable by a fine, imprisonment up to one year, or both. You will also " +
      "lose your driver license for a minimum of 30 days.",
    source: MANUAL,
    section: "Be in Shape to Drive - PENALTIES (page 20)",
    url: p(20),
  },
  {
    key: "dwi-third-offence",
    quote:
      "Third offense is a Class 6 felony which is punishable by a fine, " +
      "imprisonment up to two years, and loss of driver license for no less than " +
      "one year (after release from incarceration).",
    source: MANUAL,
    section: "Be in Shape to Drive - PENALTIES (page 21)",
    url: p(21),
  },
  {
    key: "bac-005-crash-risk",
    quote:
      "Even though they compensate and cover up their drunkenness, they increase " +
      "their chances of being in a crash if they drive with a BAC of 0.05% or " +
      "higher.",
    source: MANUAL,
    section: "Be in Shape to Drive - Alcohol and the Law (page 21)",
    url: p(21),
  },
  {
    key: "marijuana-effects",
    quote:
      "Studies have shown that people who use marijuana make more mistakes, have " +
      "more trouble adjusting to glare, and get arrested for traffic violations " +
      "more than other drivers.",
    source: MANUAL,
    section: "Be in Shape to Drive - Illegal Drugs (page 22)",
    url: p(22),
  },
  {
    key: "otc-drugs",
    quote:
      "Over-the-counter drugs taken for headaches, colds, hay fever, or other " +
      "allergies or those to calm nerves can make you drowsy and affect your " +
      "driving.",
    source: MANUAL,
    section: "Be in Shape to Drive - Over-the-Counter Drugs (page 21)",
    url: p(21),
  },
  {
    key: "prescription-drugs",
    quote:
      "Some prescription drugs can impact driving and can affect reflexes, " +
      "judgment, vision, and alertness in ways like alcohol.",
    source: MANUAL,
    section: "Be in Shape to Drive - Prescription Drugs (page 22)",
    url: p(22),
  },
  {
    key: "combining-alcohol-drugs",
    quote:
      "Never drink alcohol while taking other drugs. These drugs could multiply " +
      "the effects of alcohol or have additional effects of their own.",
    source: MANUAL,
    section: "Be in Shape to Drive - Combining Alcohol and Other Impairing Drugs (page 22)",
    url: p(22),
  },
  {
    key: "emotions-cool-off",
    quote:
      "If angry or excited, give yourself time to cool off. If necessary, take a " +
      "short walk, but stay off the road until you have calmed down.",
    source: MANUAL,
    section: "Be in Shape to Drive - Emotions (page 22)",
    url: p(22),
  },
  {
    key: "emotions-train",
    quote:
      "Don't be impatient about waiting for a train to cross in front of you. " +
      "Driving around lowered gates or trying to beat the train can be fatal.",
    source: MANUAL,
    section: "Be in Shape to Drive - Emotions (page 22)",
    url: p(22),
  },
  {
    key: "health-diabetes",
    quote:
      "Diabetics who take insulin should not drive when there is any chance of an " +
      "insulin reaction, blackout, convulsion or shock.",
    source: MANUAL,
    section: "Be in Shape to Drive - Health (page 22)",
    url: p(22),
  },
  {
    key: "dui-statute",
    quote:
      "No person may drive or be in actual physical control of any vehicle while: " +
      "(1) There is 0.08 percent or more by weight of alcohol in that person's " +
      "blood as shown by chemical analysis of that person's breath, blood, or other " +
      "bodily substance;",
    source: SDCL,
    section: "SDCL 32-23-1 - Driving or control of vehicle prohibited with alcohol in blood",
    url: sdcl("32-23-1"),
  },
  {
    key: "zero-tolerance-statute",
    quote:
      "the court shall suspend that person's driver's license or operating " +
      "privilege for a period of thirty days for a first offense, one hundred " +
      "eighty days for a second offense, and one year for any third or subsequent " +
      "offense.",
    source: SDCL,
    section: "SDCL 32-23-21 - Driver under age of twenty-one operating vehicle after alcohol or drug consumption",
    url: sdcl("32-23-21"),
  },
  {
    key: "implied-consent-statute",
    quote:
      "Any person who operates any vehicle in this state is considered to have " +
      "given consent to the withdrawal of blood or other bodily substance and " +
      "chemical analysis of the person's blood, breath, or other bodily substance " +
      "to determine the amount of alcohol in the person's blood",
    source: SDCL,
    section: "SDCL 32-23-10 - Operation of vehicle as consent to withdrawal of bodily substances",
    url: sdcl("32-23-10"),
  },
  {
    key: "refusal-one-year-statute",
    quote:
      "the secretary shall revoke that person's license to drive and any " +
      "nonresident operating privileges for one year.",
    source: SDCL,
    section: "SDCL 32-23-11 - Request for hearing on revocation of license for refusal to submit to chemical analysis",
    url: sdcl("32-23-11"),
  },

  // -------------------------------------------------------- before you drive
  {
    key: "tire-pressure-monthly",
    quote:
      "Check Tire Pressure with a Pressure Gauge Monthly Buy a tire pressure gauge " +
      "if you do not have one already.",
    source: MANUAL,
    section: "Before You Drive - Inspecting Your Vehicle (page 23)",
    url: p(23),
  },
  {
    key: "tire-pressure-cold",
    quote:
      "Remove the cap from the valve stem and use the pressure gauge to check the " +
      "tire pressure (make sure you check when they are cold).",
    source: MANUAL,
    section: "Before You Drive - Inspecting Your Vehicle (page 23)",
    url: p(23),
  },
  {
    key: "penny-test",
    quote:
      "Check Tread Depth with a Penny Hold a penny with Abraham Lincoln's body " +
      "between your thumb and forefinger. Place Lincolns headfirst into the " +
      "deepest-looking groove.",
    source: MANUAL,
    section: "Before You Drive - Inspecting Your Vehicle (page 23)",
    url: p(23),
  },
  {
    key: "worn-tires",
    quote:
      "Worn or bald tires can increase the stopping distance and make turning more " +
      "difficult when the road is wet.",
    source: MANUAL,
    section: "Before You Drive - Vehicle Maintenance (page 24)",
    url: p(24),
  },
  {
    key: "brakes-check",
    quote:
      "Braking system - Only your brakes can stop your vehicle. It is very " +
      "dangerous if they are not working properly.",
    source: MANUAL,
    section: "Before You Drive - Vehicle Maintenance (page 23)",
    url: p(23),
  },
  {
    key: "exhaust-danger",
    quote:
      "Gases from a leaky exhaust can cause death inside of a vehicle in a very " +
      "short time. Never run the motor in a closed garage.",
    source: MANUAL,
    section: "Before You Drive - Vehicle Maintenance (page 24)",
    url: p(24),
  },
  {
    key: "dirty-lights",
    quote:
      "Keep the headlights, backup, brake and taillights clean. Dirt on the lenses " +
      "can reduce the light by 50%.",
    source: MANUAL,
    section: "Before You Drive - Windshield & Windows (page 24)",
    url: p(24),
  },
  {
    key: "window-tint-front",
    quote:
      "Windshields, side wings or side windows forward of, either side of, or " +
      "adjacent to the operator's seat, may not be covered with one-way glass, " +
      "adhesive film, or other application that reduces the light transmittance to " +
      "a level below 35%.",
    source: MANUAL,
    section: "Before You Drive - Windshield & Windows (page 24)",
    url: p(24),
  },
  {
    key: "window-tint-rear",
    quote:
      "No motor vehicle may be equipped with one-way glass, adhesive film, or " +
      "other glaze in the rear windows that reduces light transmission below 20%, " +
      "with an enforcement tolerance of 9%.",
    source: MANUAL,
    section: "Before You Drive - Windshield & Windows (page 24)",
    url: p(24),
  },
  {
    key: "clear-snow-ice",
    quote:
      "Clear snow, ice, or frost from all windows before driving. Make sure to " +
      "clean the front, sides and back of the vehicle.",
    source: MANUAL,
    section: "Before You Drive - Windshield & Windows (page 24)",
    url: p(24),
  },
  {
    key: "seat-ten-inches",
    quote:
      "There should be 10 inches between your chest and the steering wheel. Do not " +
      "move the seat so far forward that you cannot easily steer and do not " +
      "recline the seat.",
    source: MANUAL,
    section: "Before You Drive - Adjusting Your Seat (page 25)",
    url: p(25),
  },
  {
    key: "seat-wheel-height",
    quote:
      "The top of the steering wheel should be no higher than the top of your " +
      "shoulders and below chin level.",
    source: MANUAL,
    section: "Before You Drive - Adjusting Your Seat (page 25)",
    url: p(25),
  },
  {
    key: "head-restraint",
    quote:
      "Head restraints are designed to prevent whiplash. Head restraints should be " +
      "adjusted so the head restraint contacts the back of your head and not below " +
      "the level of your ears.",
    source: MANUAL,
    section: "Before You Drive - Adjusting Your Seat (page 25)",
    url: p(25),
  },
  {
    key: "mirror-inside",
    quote:
      "The inside mirror is the primary mirror for view to the rear of the " +
      "vehicle. Adjust the rearview mirror so that it frames the rear window.",
    source: MANUAL,
    section: "Before You Drive - Adjusting Your Mirrors (page 25)",
    url: p(25),
  },
  {
    key: "mirror-left-setting",
    quote:
      "To set the left side mirror, the driver must rest his or her head against " +
      "the closed window and set the mirror to barely show the edge of the vehicle.",
    source: MANUAL,
    section: "Before You Drive - Adjusting Your Mirrors (page 25)",
    url: p(25),
  },
  {
    key: "mirror-extra-view",
    quote:
      "The driver will not see the left and right sides of the vehicle when " +
      "glancing in the outside mirrors; however, this adjustment adds 12 to 16 " +
      "degrees of additional viewing area to each side of the vehicle.",
    source: MANUAL,
    section: "Before You Drive - Adjusting Your Mirrors (page 25)",
    url: p(25),
  },
  {
    key: "seatbelt-front-seat-law",
    quote:
      "In South Dakota, it is illegal to drive or to be a front-seat passenger " +
      "without wearing seatbelts.",
    source: MANUAL,
    section: "Before You Drive - Using Seatbelts (page 25)",
    url: p(25),
  },
  {
    key: "seatbelt-shoulder-harness",
    quote:
      "Shoulder harness is worn across the shoulder and chest with minimal, if " +
      "any, slack. The shoulder harness should not be worn under the arm or behind " +
      "the back.",
    source: MANUAL,
    section: "Before You Drive - Using Seatbelts (page 25)",
    url: p(25),
  },
  {
    key: "seatbelt-lap-belt",
    quote:
      "The lap belt should be adjusted so that it is snug and lies low across your " +
      "hips after fastening.",
    source: MANUAL,
    section: "Before You Drive - Using Seatbelts (page 25)",
    url: p(25),
  },
  {
    key: "seatbelt-under-18",
    quote:
      "The law requires that all operators, front seat passengers and children " +
      "under the age of 18 wear appropriate safety restraints while the vehicle is " +
      "in motion.",
    source: MANUAL,
    section: "Before You Drive - Front Seat Seatbelt Use Requirements (page 26)",
    url: p(26),
  },
  {
    key: "child-front-seat",
    quote:
      "Small children should be secured in the rear seat. Never secure a child in " +
      "the front passenger seat, especially if your vehicle has an air bag.",
    source: MANUAL,
    section: "Before You Drive - Front Seat Seatbelt Use Requirements (page 26)",
    url: p(26),
  },
  {
    key: "seatbelt-with-airbags",
    quote:
      "Seatbelts should be worn even if the vehicle is equipped with air bags. " +
      "While air bags are good protection against hitting the steering wheel, " +
      "dashboard, or windshield, they do not protect you if you are hit from the " +
      "side or rear or if the vehicle rolls over.",
    source: MANUAL,
    section: "Before You Drive - Using Seatbelts (page 25)",
    url: p(25),
  },
  {
    key: "airbags-supplemental",
    quote:
      "Air bags are supplemental restraints and are designed to work best in " +
      "combination with seatbelts.",
    source: MANUAL,
    section: "Before You Drive - Air Bags (page 26)",
    url: p(26),
  },
  {
    key: "child-12-and-under",
    quote:
      "Check to be sure that all children age 12 or younger are properly " +
      "restrained in the back seat and that a rear-facing child safety seat is " +
      "never placed in front of an active passenger air bag.",
    source: MANUAL,
    section: "Before You Drive - Child Passenger Safety Laws (page 26)",
    url: p(26),
  },
  {
    key: "child-restraint-statute",
    quote:
      "Any operator of any passenger vehicle transporting a child under five years " +
      "of age on the streets and highways of this state shall properly secure the " +
      "child in a child passenger restraint system according to its manufacturer's " +
      "instructions.",
    source: SDCL,
    section: "SDCL 32-37-1 - Use of system required (quoted in the manual, page 27)",
    url: sdcl("32-37-1"),
  },
  {
    key: "child-40-pounds",
    quote:
      "The requirements of this section are met if the child is under five years " +
      "of age and is at least forty pounds in weight by securing the child in a " +
      "seatbelt.",
    source: SDCL,
    section: "SDCL 32-37-1 - Use of system required (quoted in the manual, page 27)",
    url: sdcl("32-37-1"),
  },
  {
    key: "car-seat-guide-infant",
    quote:
      "Infant Seats For children up to 20 pounds Always face rearward Recline 30 " +
      "degrees",
    source: MANUAL,
    section: "Before You Drive - Car Seat Guide (page 27)",
    url: p(27),
  },
  {
    key: "car-seat-guide-booster",
    quote: "Booster Seats For toddlers at least 30 pounds",
    source: MANUAL,
    section: "Before You Drive - Car Seat Guide (page 27)",
    url: p(27),
  },
  {
    key: "car-seat-wrong",
    quote:
      "A Car Seat is Used Incorrectly if: Not secured to the automobile with a " +
      "seatbelt The harness straps are not used or are very loose An infant is " +
      "facing forward A top tether strap is present but not used",
    source: MANUAL,
    section: "Before You Drive - Child Passenger Safety Laws (page 28)",
    url: p(28),
  },
  {
    key: "crashes-near-home",
    quote:
      "Over half of all traffic deaths happen within 25 miles of home. Many of " +
      "them occur on roads posted at less than 45 mph.",
    source: MANUAL,
    section: "Before You Drive - Using Seatbelts (page 28)",
    url: p(28),
  },
  {
    key: "unsecured-load",
    quote:
      "Driving with an unsecured load is both against the law and extremely " +
      "dangerous. Drivers who fail to properly secure their load may face a costly " +
      "fine and jail time if they cause a crash.",
    source: MANUAL,
    section: "Before You Drive - Secure Your Load (page 28)",
    url: p(28),
  },
  {
    key: "load-secure-definition",
    quote:
      "A load must be securely fastened and is only considered secure when nothing " +
      "can slide, shift, fall, or sift onto the roadway or become airborne.",
    source: MANUAL,
    section: "Before You Drive - Secure Your Load (page 28)",
    url: p(28),
  },

  // ------------------------------------------------------------ basic driving
  {
    key: "starting-parking-brake",
    quote: "Make sure the parking brake is on before you start the vehicle.",
    source: MANUAL,
    section: "Basic Driving - Starting the Engine (page 29)",
    url: p(29),
  },
  {
    key: "hands-3-and-9",
    quote:
      "Both hands should be placed on the outside of the steering wheel on " +
      "opposite sides, at the 3 and 9 o'clock positions, to maintain control of " +
      "the vehicle.",
    source: MANUAL,
    section: "Basic Driving - Steering, Hand Position (page 29)",
    url: p(29),
  },
  {
    key: "hands-not-10-and-2",
    quote:
      "Placing your hands at the 2 and 10 o'clock positions is no longer " +
      "recommended because it can be dangerous in a vehicle equipped with air bags.",
    source: MANUAL,
    section: "Basic Driving - Steering, Hand Position (page 29)",
    url: p(29),
  },
  {
    key: "steering-grip",
    quote:
      "Your grip on the steering wheel should be firm but gentle. Use your fingers " +
      "instead of the palms of your hands and keep your thumbs up along the face " +
      "of the steering wheel.",
    source: MANUAL,
    section: "Basic Driving - Steering, Hand Position (page 29)",
    url: p(29),
  },
  {
    key: "steering-straighten",
    quote:
      "When you complete a turn, straighten out the steering wheel by hand. " +
      "Letting it slip through your fingers could be dangerous.",
    source: MANUAL,
    section: "Basic Driving - Steering (page 29)",
    url: p(29),
  },
  {
    key: "check-speedometer",
    quote:
      "The best way not to speed is to know how fast you are going. Check the " +
      "speedometer often. People are not very good at judging how fast they are " +
      "going.",
    source: MANUAL,
    section: "Basic Driving - Controlling Speed (page 29)",
    url: p(29),
  },
  {
    key: "backing-check-behind",
    quote:
      "Check behind the vehicle before you get in. Children and small objects " +
      "cannot be seen from the driver's seat.",
    source: MANUAL,
    section: "Basic Driving - Backing Up (page 30)",
    url: p(30),
  },
  {
    key: "backing-right-arm",
    quote:
      "Place your foot on the brake and shift to reverse. Grasp the steering wheel " +
      "at the 12 o'clock position with your left hand. Place your right arm on the " +
      "back of the passenger seat and look directly through the rear window.",
    source: MANUAL,
    section: "Basic Driving - Backing Up (page 30)",
    url: p(30),
  },
  {
    key: "backing-mirrors-limit",
    quote:
      "Use your mirrors for backing up but keep in mind that these mirrors do not " +
      "show the area immediately behind the vehicle.",
    source: MANUAL,
    section: "Basic Driving - Backing Up (page 30)",
    url: p(30),
  },
  {
    key: "backing-slow",
    quote:
      "Accelerate gently and smoothly, keeping your speed slow. The vehicle is " +
      "much harder to steer while you are backing up.",
    source: MANUAL,
    section: "Basic Driving - Backing Up (page 30)",
    url: p(30),
  },
  {
    key: "backing-no-mirrors",
    quote:
      "Place your right arm on the back of the passenger seat and turn around so " +
      "that you can look directly through the rear window. Do not depend on the " +
      "rearview or side mirrors.",
    source: MANUAL,
    section: "Safe Driving Tips - When you back up (page 49)",
    url: p(49),
  },
  {
    key: "stopping-suddenly",
    quote:
      "Stopping suddenly is dangerous and usually points to a driver who was not " +
      "paying attention. When you brake quickly, you could skid and lose control " +
      "of your vehicle.",
    source: MANUAL,
    section: "Basic Driving - Stopping the Vehicle (page 29)",
    url: p(29),
  },

  // ------------------------------------------------------------ right of way
  {
    key: "row-never-assume",
    quote:
      "Although yielding right-of-way rules provide a guide to determine who " +
      "should yield the right-of-way, no one should assume he or she automatically " +
      "has the right-of-way. The situation and circumstances at the intersection " +
      "must always be considered.",
    source: MANUAL,
    section: "Rules of the Road - Yielding Right-of-Way (page 31)",
    url: p(31),
  },
  {
    key: "row-list-intersection",
    quote:
      "You should yield the right-of-way to: The driver who is at or arrives " +
      "before you at the intersection Drivers in the opposing traffic lane when " +
      "you are making a left turn The driver on your right at an all-way stop " +
      "intersection if both of you arrive at the intersection at the same time",
    source: MANUAL,
    section: "Rules of the Road - Yielding Right-of-Way (page 31)",
    url: p(31),
  },
  {
    key: "row-list-entering",
    quote:
      "Drivers on a public highway if you are entering the highway from a driveway " +
      "or a private road Drivers already on a limited access or interstate highway " +
      "if you are on the entrance or acceleration ramp Pedestrians, bicyclists, " +
      "and other drivers who are still in the intersection",
    source: MANUAL,
    section: "Rules of the Road - Yielding Right-of-Way (page 31)",
    url: p(31),
  },
  {
    key: "funeral-procession",
    quote:
      "Only the first vehicle in a funeral procession must obey traffic signs and " +
      "signals. Vehicles in the procession must have headlights on. Do not cut " +
      "into or interfere with a funeral procession.",
    source: MANUAL,
    section: "Rules of the Road - Funeral Processions (page 31)",
    url: p(31),
  },
  {
    key: "row-statute-right",
    quote:
      "When two vehicles approach or enter an intersection at approximately the " +
      "same time, the driver of the vehicle on the left shall yield the " +
      "right-of-way to the vehicle on the right",
    source: SDCL,
    section: "SDCL 32-26-13 - Right-of-way at intersections--Unlawful speed as forfeiting right-of-way",
    url: sdcl("32-26-13"),
  },
  {
    key: "row-forfeit-speeding",
    quote:
      "The driver of any vehicle traveling at an unlawful speed shall forfeit any " +
      "right-of-way which he might otherwise have hereunder.",
    source: SDCL,
    section: "SDCL 32-26-13 - Right-of-way at intersections--Unlawful speed as forfeiting right-of-way",
    url: sdcl("32-26-13"),
  },
  {
    key: "row-left-turn-statute",
    quote:
      "The driver of a vehicle within an intersection intending to turn to the " +
      "left shall yield the right-of-way to any vehicle approaching from the " +
      "opposite direction which is within the intersection or so close thereto as " +
      "to constitute an immediate hazard.",
    source: SDCL,
    section: "SDCL 32-26-19 - Left-turning vehicles--Right-of-way of oncoming vehicle",
    url: sdcl("32-26-19"),
  },
  {
    key: "row-driveway-statute",
    quote:
      "The driver of a vehicle about to enter or cross a public highway from an " +
      "alley, building, private road, or driveway shall yield the right-of-way to " +
      "all vehicles approaching on such public highway.",
    source: SDCL,
    section: "SDCL 32-26-14 - Entry of highway from alley, building or private road",
    url: sdcl("32-26-14"),
  },

  // -------------------------------------------------------- signals and signs
  {
    key: "traffic-control-devices",
    quote:
      "Traffic control devices include traffic signals, signs, pavement markings, " +
      "and directions provided by law enforcement, highway personnel, and school " +
      "crossing guards.",
    source: MANUAL,
    section: "Rules of the Road - Traffic Control Devices (page 31)",
    url: p(31),
  },
  {
    key: "pedestrian-hybrid-beacon",
    quote:
      "The pedestrian hybrid beacon (PHB) is a traffic control device designed to " +
      "help pedestrians safely cross busy or higher-speed roadways at midblock " +
      "crossings and uncontrolled intersections.",
    source: MANUAL,
    section: "Rules of the Road - Pedestrian Hybrid Beacon (PHB) (page 31)",
    url: p(31),
  },
  {
    key: "signal-horizontal",
    quote:
      "In some metropolitan areas, traffic lights are horizontal, instead of " +
      "vertical, and the red light is on the left, the yellow light is in the " +
      "middle, and the green light is on the right.",
    source: MANUAL,
    section: "Rules of the Road - Traffic Signals (page 32)",
    url: p(32),
  },
  {
    key: "steady-red",
    quote:
      "A steady RED traffic light means come to a complete stop. This device is to " +
      "alert you of the red light and that you must stop. You must wait until the " +
      "traffic light turns green and there is no crossing traffic before you may " +
      "proceed.",
    source: MANUAL,
    section: "Rules of the Road - Traffic Signals, RED (page 32)",
    url: p(32),
  },
  {
    key: "right-on-red",
    quote:
      "If you are turning right, you may turn after coming to a complete stop if " +
      "it is safe to do so and if there is no sign prohibiting turning on a red " +
      "light.",
    source: MANUAL,
    section: "Rules of the Road - Traffic Signals, RED (page 32)",
    url: p(32),
  },
  {
    key: "right-on-red-yield",
    quote:
      "When turning on red, stop first, yield to all traffic including " +
      "pedestrians, bicyclists, and cars before proceeding safely and staying in " +
      "your lane.",
    source: MANUAL,
    section: "Rules of the Road - Traffic Signals, RED (page 32)",
    url: p(32),
  },
  {
    key: "flashing-red",
    quote:
      "A flashing RED traffic light means the same as a stop sign. You must come " +
      "to a complete stop and then may go when it is safe to do so.",
    source: MANUAL,
    section: "Rules of the Road - Traffic Signals, RED (page 32)",
    url: p(32),
  },
  {
    key: "red-arrow",
    quote:
      "A RED arrow means you must stop and that you cannot go in the direction of " +
      "the arrow. You may proceed when the red arrow goes out and a green arrow or " +
      "light comes on.",
    source: MANUAL,
    section: "Rules of the Road - Traffic Signals, RED (page 32)",
    url: p(32),
  },
  {
    key: "steady-yellow",
    quote:
      "A steady YELLOW traffic light means the traffic light is about to change to " +
      "red. You must stop if it is safe to do so. If you are in the intersection " +
      "when the yellow light comes on, do not stop but continue through the " +
      "intersection.",
    source: MANUAL,
    section: "Rules of the Road - Traffic Signals, YELLOW (page 32)",
    url: p(32),
  },
  {
    key: "flashing-yellow",
    quote: "A flashing YELLOW traffic light means slow down and proceed with caution.",
    source: MANUAL,
    section: "Rules of the Road - Traffic Signals, YELLOW (page 32)",
    url: p(32),
  },
  {
    key: "yellow-arrow",
    quote:
      "A YELLOW arrow means that the protection of a green arrow is ending. If you " +
      "are turning in the direction of the arrow, you should prepare to stop and " +
      "give the right-of-way to oncoming traffic before turning.",
    source: MANUAL,
    section: "Rules of the Road - Traffic Signals, YELLOW (page 32)",
    url: p(32),
  },
  {
    key: "flashing-yellow-arrow",
    quote:
      "If you are turning left, a flashing YELLOW arrow traffic light means you " +
      "may cautiously enter the intersection to make the turn indicated by the " +
      "arrow when it is safe to do so after yielding to oncoming traffic and " +
      "pedestrians. Oncoming traffic will have a green light.",
    source: MANUAL,
    section: "Rules of the Road - Traffic Signals, YELLOW (page 32)",
    url: p(32),
  },
  {
    key: "steady-green",
    quote:
      "A steady GREEN traffic light means you can go through the intersection, but " +
      "you must yield to emergency vehicles and others as required by law.",
    source: MANUAL,
    section: "Rules of the Road - Traffic Signals, GREEN (page 32)",
    url: p(32),
  },
  {
    key: "green-clear-intersection",
    quote:
      "If you are stopped and then the light turns green, you must allow crossing " +
      "traffic to clear the intersection before you proceed.",
    source: MANUAL,
    section: "Rules of the Road - Traffic Signals, GREEN (page 32)",
    url: p(32),
  },
  {
    key: "green-left-turn",
    quote:
      "If turning left, a steady green traffic light means you may turn, but only " +
      "when safe to do so. Oncoming traffic has the right-of-way.",
    source: MANUAL,
    section: "Rules of the Road - Traffic Signals, GREEN (page 32)",
    url: p(32),
  },
  {
    key: "green-arrow",
    quote:
      "A GREEN arrow means you can safely turn in the direction of the arrow. " +
      "There should be no oncoming or crossing traffic while the arrow is green",
    source: MANUAL,
    section: "Rules of the Road - Traffic Signals, GREEN (page 32)",
    url: p(32),
  },
  {
    key: "signal-out-of-operation",
    quote:
      "Red or completely unlighted traffic signal shall stop in the same manner as " +
      "if the vehicle were at a stop sign.",
    source: MANUAL,
    section: "Rules of the Road - Traffic Signals (page 32)",
    url: p(32),
  },
  {
    key: "right-on-red-statute",
    quote:
      "The driver of any vehicle which is stopped as close as practicable at the " +
      "entrance to the crosswalk and to the far right side of the roadway, then at " +
      "the entrance to the intersection in obedience to a red or stop signal, may " +
      "make a right turn but shall yield the right-of-way to any pedestrian",
    source: SDCL,
    section: "SDCL 32-28-4 - Meaning of steady red light or stop signal--Right turn on red",
    url: sdcl("32-28-4"),
  },
  {
    key: "warning-signs",
    quote:
      "These signs tell a driver of possible danger that may be ahead, such as " +
      "warning to slow down and be prepared to stop if necessary or that a hazard " +
      "or special situation is on the roadway ahead. These signs are usually " +
      "yellow with black lettering or symbols and are diamond shaped.",
    source: MANUAL,
    section: "Rules of the Road - Traffic Signs, Warning Signs (page 33)",
    url: p(33),
  },
  {
    key: "fluorescent-yellow-signs",
    quote:
      "Some warning signs may be fluorescent yellow, such as school zones, school " +
      "crossing, and pedestrian crossing.",
    source: MANUAL,
    section: "Rules of the Road - Traffic Signs, Warning Signs (page 33)",
    url: p(33),
  },
  {
    key: "railroad-advance-sign",
    quote:
      "The sign cautions to slow down, look, and listen for a train or railroad " +
      "vehicle, and to be prepared to stop if a train is approaching.",
    source: MANUAL,
    section: "Rules of the Road - Railroad Crossing Warning Signs (page 33)",
    url: p(33),
  },
  {
    key: "crossbuck-sign",
    quote:
      "When a train or railroad vehicle is approaching the intersection, you must " +
      "stop behind the stop line or before the intersection is clear.",
    source: MANUAL,
    section: "Rules of the Road - Railroad Crossing Warning Signs (page 33)",
    url: p(33),
  },
  {
    key: "railroad-flashing-lights",
    quote:
      "At some crossings, along with the cross-buck sign, you will see side-by-side " +
      "lights that will flash alternately when a train is approaching. When the " +
      "lights are flashing, you must stop.",
    source: MANUAL,
    section: "Rules of the Road - Railroad Crossing Warning Signs (page 34)",
    url: p(34),
  },
  {
    key: "railroad-gate",
    quote:
      "At some crossings there is also a crossing gate that will lower when a " +
      "train is coming. Do not drive around the gate. Some crossings also have a " +
      "bell or a horn that will sound. Do not cross until the bell or horn has " +
      "stopped.",
    source: MANUAL,
    section: "Rules of the Road - Railroad Crossing Warning Signs (page 34)",
    url: p(34),
  },
  {
    key: "railroad-multiple-tracks",
    quote:
      "These signs warn that there is more than one track and that there may be " +
      "more than one train crossing.",
    source: MANUAL,
    section: "Rules of the Road - Railroad Crossing Warning Signs (page 34)",
    url: p(34),
  },
  {
    key: "railroad-ens",
    quote:
      "Every crossing has an emergency dispatch phone number for contacting the " +
      "railroad to report problems with the crossing, tracks or train.",
    source: MANUAL,
    section: "Rules of the Road - Railroad Emergency Notification System (ENS) (page 34)",
    url: p(34),
  },
  {
    key: "work-zone-signs",
    quote:
      "These are generally diamond or rectangular shaped and orange with black " +
      "letters or symbols. These construction, maintenance, or emergency operation " +
      "signs alert of work zones ahead and warn that people are working on or near " +
      "the roadway.",
    source: MANUAL,
    section: "Rules of the Road - Work Zone Signs (page 34)",
    url: p(34),
  },
  {
    key: "flagger-instructions",
    quote:
      "In work zones, traffic may be controlled by a person with a sign or flag to " +
      "tell you which direction to travel, to slow down, or to stop. You must " +
      "follow their instructions.",
    source: MANUAL,
    section: "Rules of the Road - Work Zone Signs (page 34)",
    url: p(34),
  },
  {
    key: "work-zone-fines-doubled",
    quote:
      "Reduce your speed in work zones and be prepared to stop suddenly. Do not " +
      "tailgate in work zones. Fines for speeding in a work zone may be doubled.",
    source: MANUAL,
    section: "Rules of the Road - Work Zone Signs (page 34)",
    url: p(34),
  },
  {
    key: "regulatory-signs",
    quote:
      "These signs are square, rectangular, or have a special shape and are white " +
      "with black, red, or green letters and/or symbols. These signs talk about " +
      "specific laws that you must obey",
    source: MANUAL,
    section: "Rules of the Road - Regulatory Signs (page 35)",
    url: p(35),
  },
  {
    key: "prohibition-signs",
    quote:
      "Some regulatory signs have a red circle with a red slash over a symbol, " +
      "which prohibits certain actions.",
    source: MANUAL,
    section: "Rules of the Road - Regulatory Signs (page 35)",
    url: p(35),
  },
  {
    key: "speed-limit-signs",
    quote:
      "These signs are black and white, and they indicate the maximum safe speed " +
      "allowed or the minimum safe speed required. The maximum limit should be " +
      "driven only in ideal driving conditions, and you must reduce your speed " +
      "when conditions require it.",
    source: MANUAL,
    section: "Rules of the Road - Speed Limit Signs (page 35)",
    url: p(35),
  },
  {
    key: "minimum-speed-signs",
    quote:
      "Some high-speed roads have minimum speed limits, and you are required to " +
      "travel at least this fast to not be a hazard to other drivers. If the " +
      "minimum posted speed is too fast for you, you should use another road.",
    source: MANUAL,
    section: "Rules of the Road - Speed Limit Signs (page 35)",
    url: p(35),
  },
  {
    key: "stop-sign",
    quote:
      "A stop sign has eight sides and is red with white letters. You must stop " +
      "behind the stop line or crosswalk, if one is present, or before the stop " +
      "sign itself. Look for crossing vehicles and pedestrians in all directions " +
      "and yield the right-of-way.",
    source: MANUAL,
    section: "Rules of the Road - Stop Sign (page 35)",
    url: p(35),
  },
  {
    key: "yield-sign",
    quote:
      "A yield sign is a red and white downward-pointing triangle with red " +
      "letters. It means you must slow down and yield the right-of-way to traffic " +
      "in the intersection you are crossing or the roadway you are entering.",
    source: MANUAL,
    section: "Rules of the Road - Yield Sign (page 35)",
    url: p(35),
  },
  {
    key: "one-way-sign",
    quote:
      "These signs tell you that traffic flows only in the direction of the arrow. " +
      "Do not turn in the opposite direction of the arrow. Never drive the wrong " +
      "way on a one-way street.",
    source: MANUAL,
    section: "Rules of the Road - One-Way Street (page 35)",
    url: p(35),
  },
  {
    key: "no-passing-signs",
    quote:
      "These signs tell you where passing is not permitted. Passing areas are " +
      "based on how far you can see ahead.",
    source: MANUAL,
    section: "Rules of the Road - No Passing Signs (page 35)",
    url: p(35),
  },
  {
    key: "slow-moving-vehicle-sign",
    quote:
      "A reflective orange triangle on the rear of a vehicle means it is " +
      "travelling less than 25 mph.",
    source: MANUAL,
    section: "Rules of the Road - Slow Moving Vehicle (page 36)",
    url: p(36),
  },
  {
    key: "guide-signs",
    quote:
      "These signs are square or rectangular and are green, brown, or blue. They " +
      "give information on intersecting roads, help direct you to cities or towns, " +
      "and show points of interest along the highway.",
    source: MANUAL,
    section: "Rules of the Road - Guide Signs (page 36)",
    url: p(36),
  },
  {
    key: "service-signs",
    quote:
      "These signs are square or rectangular shaped and are blue with white " +
      "letters or symbols. They show the location of various services such as rest " +
      "areas, gas stations, campgrounds, or hospitals.",
    source: MANUAL,
    section: "Rules of the Road - Service Signs (page 36)",
    url: p(36),
  },
  {
    key: "destination-signs",
    quote:
      "These signs are square or rectangular shaped and are green or brown with " +
      "white lettering. They show directions and distance to various locations " +
      "such as cities, airports, state lines",
    source: MANUAL,
    section: "Rules of the Road - Destination Signs (page 36)",
    url: p(36),
  },
  {
    key: "route-number-signs",
    quote:
      "The shape and color of route number signs indicate the type of roadway: " +
      "interstate, U. S., state, city, county, or local road.",
    source: MANUAL,
    section: "Rules of the Road - Route Number Signs (page 36)",
    url: p(36),
  },

  // ------------------------------------------------------- pavement markings
  {
    key: "pavement-markings-purpose",
    quote:
      "Pavement markings are lines, arrows, words, or symbols painted on the " +
      "roadway to give you directions or warnings. They are used to divide lanes, " +
      "tell you when you may pass other vehicles or change lanes, tell you which " +
      "lanes to use for turns",
    source: MANUAL,
    section: "Rules of the Road - Pavement Markings (page 36)",
    url: p(36),
  },
  {
    key: "double-yellow-line",
    quote:
      "Two-direction roadway - indicated by a double yellow line - passing " +
      "prohibited in both directions",
    source: MANUAL,
    section: "Rules of the Road - Pavement Markings (page 36)",
    url: p(36),
  },
  {
    key: "dashed-yellow-your-side",
    quote:
      "Two-direction roadway - passing permitted when dashed yellow line is on " +
      "your side",
    source: MANUAL,
    section: "Rules of the Road - Pavement Markings (page 36)",
    url: p(36),
  },
  {
    key: "white-dashed-line",
    quote: "One-direction roadway with white dashed line - passing permitted",
    source: MANUAL,
    section: "Rules of the Road - Pavement Markings (page 36)",
    url: p(36),
  },
  {
    key: "crosswalk-stop-line",
    quote:
      "Crosswalks define the area where pedestrians may cross the roadway. When " +
      "required to stop because of a sign or signal, you must stop behind the stop " +
      "line, crosswalk, stop sign, or traffic signal.",
    source: MANUAL,
    section: "Rules of the Road - Crosswalks and Stop Lines (page 37)",
    url: p(37),
  },
  {
    key: "unmarked-crosswalks",
    quote:
      "You must yield to pedestrians entering or in a crosswalk. Not all " +
      "crosswalks are marked. Be alert for pedestrians when crossing intersections.",
    source: MANUAL,
    section: "Rules of the Road - Crosswalks and Stop Lines (page 37)",
    url: p(37),
  },
  {
    key: "stop-line-first",
    quote:
      "If crosswalks are not apparent, then you must stop before entering the " +
      "intersection. If there is a stop line before the crosswalk, the stop line " +
      "must be obeyed first.",
    source: MANUAL,
    section: "Rules of the Road - Crosswalks and Stop Lines (page 37)",
    url: p(37),
  },
  {
    key: "shared-center-lane",
    quote:
      "Shared center lanes are reserved for making left turns (or U-turns when " +
      "they are permitted) by vehicles traveling in either direction.",
    source: MANUAL,
    section: "Rules of the Road - Other Lane Controls, Shared Center Lane (page 37)",
    url: p(37),
  },
  {
    key: "shared-center-lane-markings",
    quote:
      "These lanes are marked on each side by solid yellow and dashed yellow " +
      "lines. Be sure you enter the lane only if it is safe to do so.",
    source: MANUAL,
    section: "Rules of the Road - Other Lane Controls, Shared Center Lane (page 37)",
    url: p(37),
  },

  // ---------------------------------------------------- turning, intersections
  {
    key: "turning-search",
    quote:
      "Search all corners for traffic controls, pedestrians, other vehicles, and " +
      "signal your intentions. Enter and maintain proper position in the lane that " +
      "is closest to the direction you want to go.",
    source: MANUAL,
    section: "General Driving - Turning and Turnabouts (page 38)",
    url: p(38),
  },
  {
    key: "right-turn-position",
    quote:
      "Avoid Swinging wide to the left before making the turn. Always turn right " +
      "from the right-most portion of the lane.",
    source: MANUAL,
    section: "General Driving - Right turns (page 38)",
    url: p(38),
  },
  {
    key: "left-turn-position",
    quote:
      "When making a left turn, yield to oncoming traffic. Always turn left from " +
      "the left-most portion of the lane.",
    source: MANUAL,
    section: "General Driving - Left turns (page 38)",
    url: p(38),
  },
  {
    key: "multiple-lane-turn",
    quote:
      "Multiple lanes turning Identify and enter the lane from which you will " +
      "turn. Stay in that lane until the turn is completed.",
    source: MANUAL,
    section: "General Driving - Turning and Turnabouts (page 38)",
    url: p(38),
  },
  {
    key: "three-point-turnabout",
    quote:
      "Use this type of turnabout only when the road or street is too narrow to " +
      "make a U-turn and it's not possible to go around the block. This type of " +
      "turn should only be used on a two-lane roadway.",
    source: MANUAL,
    section: "General Driving - Three-Point Turnabout (Y-Turn) (page 38)",
    url: p(38),
  },
  {
    key: "u-turn-definition",
    quote:
      "A U-turn is a turn within the road, made in one smooth U-shaped motion, to " +
      "end up traveling in the opposite direction.",
    source: MANUAL,
    section: "General Driving - U-Turns (page 39)",
    url: p(39),
  },
  {
    key: "u-turn-officer",
    quote:
      "Do not make a U-turn: At any intersection where a police officer is " +
      "controlling traffic unless the officer instructs you to make a U-turn.",
    source: MANUAL,
    section: "General Driving - U-Turns (page 39)",
    url: p(39),
  },
  {
    key: "u-turn-midblock",
    quote:
      "Mid-block on any street in a business district or mid-block on a through " +
      "(main) highway that is in a residential district.",
    source: MANUAL,
    section: "General Driving - U-Turns (page 39)",
    url: p(39),
  },
  {
    key: "u-turn-500-feet",
    quote:
      "Upon a curve or upon the approach to or near the crest of a grade on any " +
      "undivided highway where the vehicle cannot be seen by the driver of any " +
      "other vehicle with 500 feet approaching from any direction.",
    source: MANUAL,
    section: "General Driving - U-Turns (page 39)",
    url: p(39),
  },
  {
    key: "intersection-look-left-right-left",
    quote:
      "It is recommended that you look left, then right, and then left again " +
      "before entering the intersection.",
    source: MANUAL,
    section: "General Driving - Intersections (page 39)",
    url: p(39),
  },
  {
    key: "green-light-pause",
    quote:
      "At a traffic signal when the light turns green, avoid immediately moving " +
      "into the intersection. Take the time to make sure the path of travel is " +
      "clear and that there is no crossing traffic.",
    source: MANUAL,
    section: "General Driving - Intersections (page 39)",
    url: p(39),
  },
  {
    key: "turn-signal-not-a-promise",
    quote:
      "Do not turn into a lane just because an approaching vehicle has a turn " +
      "signal active. The driver with an active turn signal may plan to turn after " +
      "they go past your vehicle or may have forgotten to turn the signal off from " +
      "a prior turn.",
    source: MANUAL,
    section: "General Driving - Intersections (page 39)",
    url: p(39),
  },
  {
    key: "intersection-search",
    quote:
      "At all intersections, reduce speed and search for: traffic control devices " +
      "oncoming and cross traffic pedestrians and bicyclists the roadway " +
      "conditions areas of limited visibility",
    source: MANUAL,
    section: "General Driving - Intersections (page 39)",
    url: p(39),
  },
  {
    key: "roundabout-counterclockwise",
    quote:
      "By keeping traffic moving one-way in a counterclockwise direction, there " +
      "are fewer conflict points and traffic flows more smoothly.",
    source: MANUAL,
    section: "General Driving - Roundabouts (page 39)",
    url: p(39),
  },
  {
    key: "roundabout-crash-reduction",
    quote:
      "Crash statistics show that roundabouts reduce fatal crashes about 90%, " +
      "reduce injury crashes about 75%, and reduce overall crashes about 35%, when " +
      "compared to other types of intersection controls.",
    source: MANUAL,
    section: "General Driving - Roundabouts (page 39)",
    url: p(39),
  },
  {
    key: "truck-apron",
    quote:
      "A truck apron is a paved area on the inside of the roundabout for the rear " +
      "wheels of large trucks to use when turning, sometimes referred to as " +
      "off-tracking. Truck aprons are not to be used by cars, SUVs, or pickup " +
      "trucks.",
    source: MANUAL,
    section: "General Driving - Roundabouts, Truck Apron (page 39)",
    url: p(39),
  },
  {
    key: "roundabout-steps",
    quote:
      "Steps for driving a roundabout 1. Slow down and obey traffic signs 2. Yield " +
      "to pedestrians and bicyclists 3. Yield to traffic on your left already in " +
      "the roundabout 4. Enter the roundabout when there is a safe gap in traffic",
    source: MANUAL,
    section: "General Driving - Steps for driving a roundabout (page 40)",
    url: p(40),
  },
  {
    key: "roundabout-exit-signal",
    quote:
      "5. Keep your speed low within the roundabout 6. As you approach the exit, " +
      "turn on your right turn signal 7. Yield to pedestrians and bicycles when " +
      "exiting",
    source: MANUAL,
    section: "General Driving - Steps for driving a roundabout (page 40)",
    url: p(40),
  },
  {
    key: "roundabout-emergency-vehicle",
    quote:
      "If you have entered the roundabout, continue to your exit, then pull over " +
      "and allow emergency vehicles to pass Avoid stopping in the roundabout",
    source: MANUAL,
    section: "General Driving - Emergency vehicles in a roundabout (page 40)",
    url: p(40),
  },
  {
    key: "roundabout-lane-choice",
    quote:
      "As you get closer to the roundabout entrance, it is very important to " +
      "observe the signs and arrows to determine which lane to use before entering " +
      "a roundabout.",
    source: MANUAL,
    section: "General Driving - Driving a roundabout with two or more lanes (page 40)",
    url: p(40),
  },
  {
    key: "interstate-median",
    quote: "You must not cross the median of an interstate highway.",
    source: MANUAL,
    section: "General Driving - Proper Driving Techniques on the Interstate (page 42)",
    url: p(42),
  },
  {
    key: "interstate-missed-exit",
    quote:
      "If you miss your exit, go on to the next exit. Backing up on the interstate " +
      "is prohibited under any circumstances.",
    source: MANUAL,
    section: "General Driving - Proper Driving Techniques on the Interstate (page 42)",
    url: p(42),
  },
  {
    key: "interstate-right-lane",
    quote:
      "Avoid unnecessary lane changing. Stay in the right lane unless overtaking " +
      "and passing another vehicle.",
    source: MANUAL,
    section: "General Driving - Proper Driving Techniques on the Interstate (page 42)",
    url: p(42),
  },
  {
    key: "ddi-left-turns",
    quote:
      "All left turns onto the freeway are free flow, meaning vehicles do not stop " +
      "to access the ramp.",
    source: MANUAL,
    section: "General Driving - Navigating a Diverging Diamond Interchange (DDI) (page 42)",
    url: p(42),
  },

  // ------------------------------------------------------------- school buses
  {
    key: "school-bus-stop",
    quote:
      "You must always stop for a school bus that has its red lights flashing or " +
      "its stop arm extended at all times unless the roadway is separated by a " +
      "physical barrier.",
    source: MANUAL,
    section: "General Driving - Rules for School Buses (page 43)",
    url: p(43),
  },
  {
    key: "school-bus-proceed",
    quote:
      "After the school bus's red lights have stopped flashing and the stop arm is " +
      "no longer visible, proceed slowly watching for children.",
    source: MANUAL,
    section: "General Driving - Rules for School Buses (page 43)",
    url: p(43),
  },
  {
    key: "school-bus-15-feet",
    quote:
      "The operator of a motor vehicle approaching a school bus that has its red " +
      "signal lights flashing shall make a complete stop. The stopped vehicle must " +
      "be at least fifteen feet from the school bus and must remain stopped until " +
      "the flashing red signal lights are extinguished.",
    source: SDCL,
    section: "SDCL 32-32-6 - Amber or red signal--Motorist duty to slow or stop",
    url: sdcl("32-32-6"),
  },
  {
    key: "school-bus-amber-15-mph",
    quote:
      "The operator of a motor vehicle on a highway that has less than two lanes " +
      "of travel in each direction, or on a private road, when approaching a " +
      "school bus that has its amber warning lights flashing, shall reduce the " +
      "speed of the vehicle to fifteen miles per hour or less and proceed past the " +
      "school bus with caution.",
    source: SDCL,
    section: "SDCL 32-32-6 - Amber or red signal--Motorist duty to slow or stop",
    url: sdcl("32-32-6"),
  },
  {
    key: "school-bus-divided",
    quote:
      "The operator of a motor vehicle on a highway providing two or more lanes of " +
      "travel in each direction does not need to stop when approaching a school " +
      "bus that is traveling in the opposite direction even though the school bus " +
      "is stopped and has its red signal lights flashing.",
    source: SDCL,
    section: "SDCL 32-32-6 - Amber or red signal--Motorist duty to slow or stop",
    url: sdcl("32-32-6"),
  },
  {
    key: "school-bus-separate-roadways",
    quote:
      "The driver of a vehicle upon a highway with separate roadways need not stop " +
      "upon meeting or passing a vehicle used and designated as a school bus which " +
      "is on a different roadway",
    source: SDCL,
    section: "SDCL 32-32-7 - Highways with separate roadways--Buses stopped in loading zones",
    url: sdcl("32-32-7"),
  },
  {
    key: "school-bus-amber-distance",
    quote:
      "the operator of a school bus to which Section 32-32-5 applies shall cause " +
      "the amber caution lights to be lighted at a distance of not less than three " +
      "hundred feet nor more than five hundred feet from the point where the " +
      "pupils are to be received or discharged from the bus.",
    source: SDCL,
    section: "SDCL 32-32-5.2 - Use of red and amber lights by school bus operator",
    url: sdcl("32-32-5.2"),
  },

  // ------------------------------------------------------------------ parking
  {
    key: "parking-responsibility",
    quote:
      "You are responsible for making sure that your vehicle is not a hazard when " +
      "it is parked. Always make sure to park in a designated area.",
    source: MANUAL,
    section: "General Driving - Parking (page 43)",
    url: p(43),
  },
  {
    key: "parking-away-from-traffic",
    quote:
      "When parking along the roadway, park the vehicle as far away from the flow " +
      "of traffic as possible. If there is a curb, park as close to it as possible.",
    source: MANUAL,
    section: "General Driving - Parking (page 43)",
    url: p(43),
  },
  {
    key: "parking-visible",
    quote:
      "Whenever you park, be sure it is in a place far enough from any travel lane " +
      "to avoid interfering with traffic and that the vehicle is visible to others " +
      "approaching from either direction.",
    source: MANUAL,
    section: "General Driving - No-Parking Zones (page 43)",
    url: p(43),
  },
  {
    key: "parking-brake-always",
    quote:
      "Always set the parking brake when you park. Leave the vehicle in the lowest " +
      "gear if it has a manual transmission",
    source: MANUAL,
    section: "General Driving - No-Parking Zones (page 43)",
    url: p(43),
  },
  {
    key: "parking-rural-manual",
    quote:
      "If parked on a rural highway, there must be at least 15 feet of road width " +
      "for other traffic to pass the vehicle. The vehicle must be visible for at " +
      "least 500 feet in either direction. The parking lights and taillights must " +
      "be on if it is dark outside.",
    source: MANUAL,
    section: "General Driving - No-Parking Zones (page 43)",
    url: p(43),
  },
  {
    key: "parking-exit-curb-side",
    quote:
      "Get out of the vehicle on the curb side if possible. If it is not possible, " +
      "use the street side. Be sure to check for traffic before opening the door.",
    source: MANUAL,
    section: "General Driving - No-Parking Zones (page 43)",
    url: p(43),
  },
  {
    key: "parking-never-leave-key",
    quote:
      "Never leave the ignition key in a parked vehicle. It is a good habit to " +
      "lock the doors whenever exiting the vehicle.",
    source: MANUAL,
    section: "General Driving - No-Parking Zones (page 43)",
    url: p(43),
  },
  {
    key: "hill-parking-uphill-curb",
    quote: "Turn the wheels sharply to the left if there is a curb and facing uphill.",
    source: MANUAL,
    section: "General Driving - Parking on a hill (page 43)",
    url: p(43),
  },
  {
    key: "hill-parking-downhill",
    quote:
      "Turn the wheels sharply to the right if there is no curb or if facing " +
      "downhill. See the illustrations below. This way, if the vehicle starts to " +
      "roll, it will roll away from traffic.",
    source: MANUAL,
    section: "General Driving - Parking on a hill (page 43)",
    url: p(43),
  },
  {
    key: "hill-parking-gear",
    quote:
      "Set the emergency brake and place the vehicle in park. If the vehicle has a " +
      "manual transmission, shift it into reverse if parking downhill or into the " +
      "lowest gear if parking uphill.",
    source: MANUAL,
    section: "General Driving - Parking on a hill (page 43)",
    url: p(43),
  },
  {
    key: "parallel-parking-finish",
    quote:
      "When the maneuver is finished, the vehicle should be within 12 inches of " +
      "the curb or edge of the road, and at least 2 feet away from the parked " +
      "vehicles.",
    source: MANUAL,
    section: "General Driving - Parallel Parking (page 44)",
    url: p(44),
  },
  {
    key: "parallel-parking-start",
    quote:
      "Stop even with the vehicle in the parking space ahead and about 2 feet away " +
      "from it.",
    source: MANUAL,
    section: "General Driving - Parallel Parking (page 44)",
    url: p(44),
  },
  {
    key: "angle-parking-exit",
    quote:
      "When exiting a perpendicular or angle parking space: Check for traffic in " +
      "all directions Continue to check traffic and move straight back until the " +
      "front bumper clears the vehicle parked beside you",
    source: MANUAL,
    section: "General Driving - Perpendicular and Angle Parking (page 44)",
    url: p(44),
  },
  {
    key: "parking-12-inches-statute",
    quote:
      "every vehicle stopped or parked upon a two-way roadway shall be so stopped " +
      "or parked with the right-hand wheels parallel to and within twelve inches " +
      "of the right-hand curb or edge of the roadway.",
    source: SDCL,
    section: "SDCL 32-30-2.1 - Position of parking on two-way road",
    url: sdcl("32-30-2.1"),
  },
  {
    key: "parking-20-feet-statute",
    quote:
      "No person may park or leave standing any vehicle, whether attended or " +
      "unattended, upon any highway unless a clear or unobstructed width of not " +
      "less than twenty feet upon the main-traveled portion of such highway " +
      "opposite such standing vehicle shall be left for free passage of other " +
      "vehicles thereon",
    source: SDCL,
    section: "SDCL 32-30-2 - Standing or parked vehicles--Remaining space required",
    url: sdcl("32-30-2"),
  },
  {
    key: "parking-200-feet-statute",
    quote:
      "nor unless a clear view of such vehicle may be obtained from a distance of " +
      "two hundred feet in each direction upon such highway.",
    source: SDCL,
    section: "SDCL 32-30-2 - Standing or parked vehicles--Unobstructed view required",
    url: sdcl("32-30-2"),
  },
  {
    key: "parking-rural-statute",
    quote:
      "No person may stop, park, or leave standing any vehicle, whether attended " +
      "or unattended, upon the paved or improved or main-traveled portion of any " +
      "highway, outside of a business or residence district, when it is practical " +
      "to stop, park, or leave such vehicle standing off of the paved",
    source: SDCL,
    section: "SDCL 32-30-1 - Stopping or parking on rural highway prohibited",
    url: sdcl("32-30-1"),
  },
  {
    key: "unattended-vehicle-statute",
    quote:
      "No person driving or in charge of a motor vehicle may permit it to stand " +
      "unattended without effectively setting the brake thereon and, if standing " +
      "upon any grade, turning the front wheel to the curb or side of the highway.",
    source: SDCL,
    section: "SDCL 32-30-5 - Safeguarding of unattended vehicle",
    url: sdcl("32-30-5"),
  },
  {
    key: "car-door-statute",
    quote:
      "No person may open the door of a motor vehicle on the side available to " +
      "moving traffic unless and until it is reasonably safe to do so, and can be " +
      "done without interfering with the movement of other traffic",
    source: SDCL,
    section: "SDCL 32-30-2.5 - Opening of doors on traffic side of stopped vehicle",
    url: sdcl("32-30-2.5"),
  },

  // ------------------------------------------------- lane changes and signals
  {
    key: "lane-change-steps",
    quote:
      "When changing lanes: Check any mirrors Check any blind spots** Identify a " +
      "gap in traffic, signal, and then look again in the direction of the lane " +
      "change.",
    source: MANUAL,
    section: "General Driving - Changing Lanes (page 45)",
    url: p(45),
  },
  {
    key: "blind-spots-definition",
    quote:
      "Blind spots are areas around the vehicle where your view is obstructed. You " +
      "cannot see pedestrians or other vehicles in the rearview or side mirrors " +
      "when they are in these locations.",
    source: MANUAL,
    section: "General Driving - Changing Lanes (page 45)",
    url: p(45),
  },
  {
    key: "shoulder-check",
    quote:
      "Before making lane changes or turns, quickly turn your head to look for any " +
      "hidden pedestrians or vehicles. Avoid driving in other driver's blind spots.",
    source: MANUAL,
    section: "General Driving - Changing Lanes (page 45)",
    url: p(45),
  },
  {
    key: "signal-100-feet-list",
    quote:
      "At least 100 feet from an intersection. (Signaling at least 4 to 5 seconds " +
      "BEFORE you wish to turn is better at higher speeds)",
    source: MANUAL,
    section: "Safe Driving Tips - When changing lanes (page 49)",
    url: p(49),
  },
  {
    key: "signal-method",
    quote:
      "The signal must be given with: An electric signal light or The left arm and " +
      "hand",
    source: MANUAL,
    section: "Safe Driving Tips - When changing lanes (page 49)",
    url: p(49),
  },
  {
    key: "signal-100-feet",
    quote:
      "Signal 100 feet before the intended turn. Be careful that you do not signal " +
      "too early though.",
    source: MANUAL,
    section: "Safe Driving Tips - Signaling Movements (page 56)",
    url: p(56),
  },
  {
    key: "signal-too-early",
    quote:
      "If there are streets, driveways, or entrances between you and where you " +
      "want to turn, wait until you have passed them to signal. If another vehicle " +
      "is about to enter the street between you and where you plan to turn, wait " +
      "until you have passed it to signal your turn.",
    source: MANUAL,
    section: "Safe Driving Tips - Signaling Movements (page 56)",
    url: p(56),
  },
  {
    key: "signal-cancel",
    quote:
      "After you have made a turn or lane change, make sure the turn signal shuts " +
      "off. If you don't, others might think you plan to turn again.",
    source: MANUAL,
    section: "Safe Driving Tips - Signaling Movements (page 56)",
    url: p(56),
  },
  {
    key: "hand-signals",
    quote:
      "When using hand and arm signals, these are the standard positions: Left " +
      "turn: Hand pointing straight out. Right turn: Hand pointing up. Stop or " +
      "slow down: Hand pointing down.",
    source: MANUAL,
    section: "Safe Driving Tips - Hand signals (page 56)",
    url: p(56),
  },
  {
    key: "hand-signals-when",
    quote:
      "An example would be when bright sunlight can make it hard for other drivers " +
      "to see flashing turn signals, or when driving an antique vehicle (one " +
      "manufactured before July 1, 1958) that may not be equipped with turn " +
      "signals.",
    source: MANUAL,
    section: "Safe Driving Tips - Hand signals (page 56)",
    url: p(56),
  },
  {
    key: "tap-brakes",
    quote:
      "If you are going to stop or slow down at a place where another driver may " +
      "not expect it, quickly tap the brake pedal 3 or 4 times to let those behind " +
      "you know you are about to slow down.",
    source: MANUAL,
    section: "Safe Driving Tips - Signal when reducing speeds (page 56)",
    url: p(56),
  },
  {
    key: "signal-100-feet-statute",
    quote:
      "A signal of intention to turn right or left when required shall be given " +
      "continuously during not less than the last one hundred feet traveled by the " +
      "vehicle before turning.",
    source: SDCL,
    section: "SDCL 32-26-18.1 - Turning from wrong lane prohibited--Turn signal required",
    url: sdcl("32-26-18.1"),
  },
  {
    key: "hand-signals-statute",
    quote:
      "(1) Left turn: hand and arm extended horizontally. (2) Right turn: hand and " +
      "arm extended upward. (3) Stop or decrease speed: hand and arm extended " +
      "downward.",
    source: SDCL,
    section: "SDCL 32-26-24 - Manner of making arm signal",
    url: sdcl("32-26-24"),
  },

  // ----------------------------------------------------------------- passing
  {
    key: "impeding-traffic",
    quote:
      "Going much slower than other vehicles can be just as bad as speeding. It is " +
      "dangerous and you can be ticketed for impeding traffic.",
    source: MANUAL,
    section: "General Driving - Keep pace with traffic (page 45)",
    url: p(45),
  },
  {
    key: "merge-at-speed",
    quote:
      "When merging with traffic, try to enter at the same speed that traffic is " +
      "currently moving. High-speed roadways generally have an acceleration lane " +
      "with the entrance ramp to give time to build up speed.",
    source: MANUAL,
    section: "General Driving - Entering traffic (page 45)",
    url: p(45),
  },
  {
    key: "acceleration-lane",
    quote:
      "Use the lane to reach the speed of other vehicles before merging into " +
      "traffic. Do not drive to the end of the lane and stop or there will not be " +
      "enough room to get up to speed of traffic.",
    source: MANUAL,
    section: "General Driving - Entering traffic (page 45)",
    url: p(45),
  },
  {
    key: "yield-when-merging",
    quote: "You must yield to traffic already moving on the roadway.",
    source: MANUAL,
    section: "General Driving - Entering traffic (page 45)",
    url: p(45),
  },
  {
    key: "farm-equipment-25",
    quote:
      "Farm tractors, animal-drawn vehicles, and roadway maintenance vehicles " +
      "usually go 25 mph or less.",
    source: MANUAL,
    section: "General Driving - Slow moving traffic (page 45)",
    url: p(45),
  },
  {
    key: "pass-slow-vehicle-left",
    quote:
      "Slow down when approaching a slow-moving vehicle and, if possible, move " +
      "over to the left to pass it. Never pass on the right.",
    source: MANUAL,
    section: "General Driving - Slow moving traffic (page 45)",
    url: p(45),
  },
  {
    key: "left-lane-for-passing",
    quote:
      "On multi-lane roads, the left-most lane is intended to be used for passing " +
      "slower vehicles. Never pass on the shoulder, whether it is paved or not.",
    source: MANUAL,
    section: "General Driving - Passing (page 46)",
    url: p(46),
  },
  {
    key: "no-passing-situations",
    quote:
      "Do not attempt to pass when an oncoming vehicle is approaching, your view " +
      "is blocked by a curve or a hill, at intersections, before a " +
      "highway-railroad crossing, or before a bridge.",
    source: MANUAL,
    section: "General Driving - Passing (page 46)",
    url: p(46),
  },
  {
    key: "pass-until-front-visible",
    quote:
      "Continue to pass until the complete front of the passed vehicles is visible " +
      "in the rearview mirror",
    source: MANUAL,
    section: "General Driving - Passing (page 46)",
    url: p(46),
  },
  {
    key: "being-passed",
    quote:
      "When being passed: Stay in your lane Maintain a constant speed to allow the " +
      "driver to pass you",
    source: MANUAL,
    section: "General Driving - Passing (page 46)",
    url: p(46),
  },
  {
    key: "pass-10-seconds",
    quote:
      "At a speed of 55 mph, you need about 10 seconds to pass. That means you " +
      "need a 10 second gap in oncoming traffic and sight-distance to pass.",
    source: MANUAL,
    section: "Safe Driving Tips - Space to Pass, Oncoming vehicles (page 53)",
    url: p(53),
  },
  {
    key: "pass-1600-feet",
    quote:
      "At 55 mph you will travel over 800 feet in 10 seconds. So will an oncoming " +
      "vehicle. That means you need over 1600 feet or about one-third of a mile to " +
      "pass safely.",
    source: MANUAL,
    section: "Safe Driving Tips - Space to Pass, Oncoming vehicles (page 53)",
    url: p(53),
  },
  {
    key: "pass-hills-curves",
    quote:
      "You must be able to see at least one-third of a mile or about 10 seconds " +
      "ahead. Anytime the view is blocked by a curve or a hill, assume that there " +
      "is an oncoming vehicle just out of sight.",
    source: MANUAL,
    section: "Safe Driving Tips - Space to Pass, Hills and curves (page 53)",
    url: p(53),
  },
  {
    key: "pass-one-third-mile",
    quote:
      "This means you should not start to pass if you are within one-third of a " +
      "mile of a hill or curve.",
    source: MANUAL,
    section: "Safe Driving Tips - Space to Pass, Hills and curves (page 53)",
    url: p(53),
  },
  {
    key: "pass-one-at-a-time",
    quote:
      "As a rule, pass only one vehicle at a time and pass on the left side. Do " +
      "not linger in the passing lane.",
    source: MANUAL,
    section: "Safe Driving Tips - Space to Pass (page 53)",
    url: p(53),
  },
  {
    key: "return-both-headlights",
    quote:
      "When you can see both headlights of the vehicle you have just passed in " +
      "your rearview mirror, it is safe to return to the driving lane.",
    source: MANUAL,
    section: "Safe Driving Tips - Space to Pass (page 53)",
    url: p(53),
  },
  {
    key: "truck-length",
    quote:
      "A typical car is 15 feet long. A multiple-trailer truck can be 75 feet long " +
      "or longer. It can take much longer to pass a truck than it would have to " +
      "pass a car.",
    source: MANUAL,
    section: "Safe Driving Tips - Passing large trucks (page 53)",
    url: p(53),
  },
  {
    key: "pass-railroad",
    quote: "Railroad grade crossing-Do not pass if there is a railroad grade crossing ahead.",
    source: MANUAL,
    section: "Safe Driving Tips - Space to Pass (page 53)",
    url: p(53),
  },
  {
    key: "bicycle-3-and-6-feet",
    quote:
      "The driver of any motor vehicle overtaking a bicycle proceeding in the same " +
      "direction shall allow a minimum of a three foot separation between the " +
      "right side of the driver's vehicle, including any mirror or other " +
      "projection, and the left side of the bicycle if the posted limit is " +
      "thirty-five miles per hour or less",
    source: MANUAL,
    section: "Sharing the Road - Bicyclists, SDCL 32-26-26.1 (page 62)",
    url: p(62),
  },
  {
    key: "bicycle-6-feet",
    quote:
      "and shall allow a minimum of six feet separation if the posted limit is " +
      "greater than thirty-five miles per hour.",
    source: MANUAL,
    section: "Sharing the Road - Bicyclists, SDCL 32-26-26.1 (page 62)",
    url: p(62),
  },
  {
    key: "bicycle-cross-centerline",
    quote:
      "a motor vehicle overtaking a bicycle proceeding in the same direction may " +
      "partially cross the highway centerline or the dividing line between two " +
      "lanes of travel in the same direction if it can be performed safely.",
    source: MANUAL,
    section: "Sharing the Road - Bicyclists, SDCL 32-26-26.1 (page 62)",
    url: p(62),
  },
  {
    key: "pass-left-statute",
    quote:
      "The driver of any vehicle overtaking another vehicle proceeding in the same " +
      "direction shall pass at a safe distance to the left thereof.",
    source: SDCL,
    section: "SDCL 32-26-26 - Overtaking vehicles--Passing to left required",
    url: sdcl("32-26-26"),
  },
  {
    key: "pass-right-statute",
    quote:
      "The driver of a motor vehicle may overtake and pass to the right of another " +
      "vehicle only under the following conditions: (1) When the vehicle overtaken " +
      "is making or about to make a left turn;",
    source: SDCL,
    section: "SDCL 32-26-27 - Overtaking and passing on right--Circumstances under which permitted",
    url: sdcl("32-26-27"),
  },
  {
    key: "pass-right-not-off-pavement",
    quote:
      "In no event may such movement be made by driving off the pavement or main " +
      "traveled portion of the roadway.",
    source: SDCL,
    section: "SDCL 32-26-28 - Passing on right--Driving off pavement prohibited",
    url: sdcl("32-26-28"),
  },
  {
    key: "overtaken-driver-statute",
    quote:
      "the driver of an overtaken vehicle shall give way to the right in favor of " +
      "the overtaking vehicle on suitable and audible signal being given by the " +
      "driver of the overtaking vehicle, and may not increase the speed of his " +
      "vehicle until completely passed by the overtaking vehicle.",
    source: SDCL,
    section: "SDCL 32-26-31 - Duty of driver of overtaken vehicle--Increasing speed prohibited",
    url: sdcl("32-26-31"),
  },
  {
    key: "right-half-statute",
    quote:
      "Upon all highways of sufficient width, except upon one-way streets, the " +
      "driver of a vehicle shall drive the same upon the right half of the highway",
    source: SDCL,
    section: "SDCL 32-26-1 - Use of right half of highway required",
    url: sdcl("32-26-1"),
  },

  // ------------------------------------------------------- enforcement stops
  {
    key: "stop-signal-officer",
    quote:
      "Acknowledge the officer's presence by turning on your right turn signal. " +
      "Activating your signal lets the officer know that you recognize their " +
      "presence.",
    source: MANUAL,
    section: "General Driving - What a Driver Should Do During an Enforcement Stop (page 46)",
    url: p(46),
  },
  {
    key: "stop-right-shoulder",
    quote:
      "Move your vehicle to the right shoulder of the road. The officer will guide " +
      "you using their patrol vehicle. Do not move onto the center median.",
    source: MANUAL,
    section: "General Driving - What a Driver Should Do During an Enforcement Stop (page 46)",
    url: p(46),
  },
  {
    key: "stop-end-call",
    quote:
      "End your cell phone conversation and turn off your radio. The officer needs " +
      "your full attention to communicate with you to complete the enforcement " +
      "stop in the least amount of time needed.",
    source: MANUAL,
    section: "General Driving - What a Driver Should Do During an Enforcement Stop (page 47)",
    url: p(47),
  },
  {
    key: "stop-stay-in-vehicle",
    quote:
      "Remain inside your vehicle unless otherwise directed by the officer. Never " +
      "step out of your vehicle, unless an officer directs you to do so.",
    source: MANUAL,
    section: "General Driving - What a Driver Should Do During an Enforcement Stop (page 47)",
    url: p(47),
  },
  {
    key: "stop-hands-visible",
    quote:
      "Place your hands in clear view, including all passengers' hands, such as on " +
      "the steering wheel, on top of your lap, etc.",
    source: MANUAL,
    section: "General Driving - What a Driver Should Do During an Enforcement Stop (page 47)",
    url: p(47),
  },
  {
    key: "stop-documents",
    quote:
      "When requested, locate and provide your driver's license, proof of " +
      "insurance and vehicle registration. If the officer asks for these " +
      "documents, tell the officer where they are located and reach for them " +
      "slowly with one hand on the wheel.",
    source: MANUAL,
    section: "Sharing the Road - Police and Traffic Stops (page 65)",
    url: p(65),
  },
  {
    key: "stop-never-run",
    quote:
      "Never try to run from law enforcement. It is very dangerous, and many fatal " +
      "crashes occur from police chases.",
    source: MANUAL,
    section: "Sharing the Road - Police and Traffic Stops (page 65)",
    url: p(65),
  },

  // ------------------------------------------------------------ safe driving
  {
    key: "look-20-to-30-seconds",
    quote:
      "Ideally, you should try to look at what is occurring 20 to 30 seconds in " +
      "front of the car.",
    source: MANUAL,
    section: "Safe Driving Tips - Visual Search, Look ahead (page 48)",
    url: p(48),
  },
  {
    key: "search-pattern",
    quote:
      "You must know what is happening around the vehicle. You must look ahead, to " +
      "the sides, and behind the vehicle. You should develop a searching pattern " +
      "that you can use every time when driving.",
    source: MANUAL,
    section: "Safe Driving Tips - Visual Search (page 48)",
    url: p(48),
  },
  {
    key: "look-both-ways-anyway",
    quote:
      "At an intersection, look left and right, even if other traffic has a red " +
      "light or a stop sign. This is especially important just after the light has " +
      "turned green.",
    source: MANUAL,
    section: "Safe Driving Tips - Look to the sides (page 48)",
    url: p(48),
  },
  {
    key: "edge-forward",
    quote:
      "If you were stopped and your view of a cross street is blocked, edge " +
      "forward slowly until you can see. By moving forward slowly, crossing " +
      "drivers can see the front of your vehicle before you can see them.",
    source: MANUAL,
    section: "Safe Driving Tips - Look to the sides (page 48)",
    url: p(48),
  },
  {
    key: "right-turn-check",
    quote:
      "Before turning right, make sure that there is no traffic approaching from " +
      "the left and no oncoming traffic turning left into your path. Do not begin " +
      "the turn without checking for pedestrians crossing where you will be turning.",
    source: MANUAL,
    section: "Safe Driving Tips - Look to the sides (page 48)",
    url: p(48),
  },
  {
    key: "left-turn-gap",
    quote:
      "Before turning left across oncoming traffic, look for a safe gap in the " +
      "traffic. Look to the street you are turning onto to make sure that no " +
      "vehicles or pedestrians are in the path",
    source: MANUAL,
    section: "Safe Driving Tips - Look to the sides (page 48)",
    url: p(48),
  },
  {
    key: "deer-second-most-struck",
    quote:
      "In fact, deer are the second most commonly struck object in South Dakota, " +
      "with intersection crashes topping the list and lane departures coming in " +
      "third.",
    source: MANUAL,
    section: "Safe Driving Tips - Watch for Deer (page 50)",
    url: p(50),
  },
  {
    key: "deer-october-november",
    quote:
      "Be especially alert for deer in October and November, the months with the " +
      "highest number of car/deer crashes.",
    source: MANUAL,
    section: "Safe Driving Tips - Watch for Deer (page 50)",
    url: p(50),
  },
  {
    key: "deer-dusk-dawn",
    quote:
      "Deer are most active in the dusk and dawn hours, so be especially alert " +
      "while driving during these times. Scan the sides of the road to watch for " +
      "the reflection of the vehicle headlights in the eyes of deer.",
    source: MANUAL,
    section: "Safe Driving Tips - Watch for Deer (page 50)",
    url: p(50),
  },
  {
    key: "deer-more-than-one",
    quote:
      "If you see such a reflection on the side of the road, slow down. Blow the " +
      "horn and be ready to stop. Always watch for more than one deer.",
    source: MANUAL,
    section: "Safe Driving Tips - Watch for Deer (page 50)",
    url: p(50),
  },
  {
    key: "curves-slow-before",
    quote:
      "Curves-Always reduce speed before entering the curve to a safe speed (a " +
      "speed that allows you to apply slight and constant acceleration through the " +
      "curve).",
    source: MANUAL,
    section: "Safe Driving Tips - Adjusting to Roadway Conditions (page 50)",
    url: p(50),
  },
  {
    key: "curves-hard-braking",
    quote:
      "Hard braking after entry to a curve could cause the vehicle tires to lose " +
      "traction.",
    source: MANUAL,
    section: "Safe Driving Tips - Adjusting to Roadway Conditions (page 50)",
    url: p(50),
  },
  {
    key: "slippery-roads",
    quote:
      "Slippery roads-Reduce speed at the first sign of rain, snow, sleet, or ice. " +
      "When the roadway is slippery, the tires do not grip as well. It will take " +
      "longer to stop, and it will be harder to turn without skidding.",
    source: MANUAL,
    section: "Safe Driving Tips - Adjusting to Roadway Conditions (page 50)",
    url: p(50),
  },
  {
    key: "hydroplaning",
    quote:
      "Hydroplaning-Hydroplaning occurs when the steering tires start to ride up " +
      "on any pooled water, like the action of water skis.",
    source: MANUAL,
    section: "Safe Driving Tips - Adjusting to Roadway Conditions (page 50)",
    url: p(50),
  },
  {
    key: "hydroplaning-avoid",
    quote:
      "The best way to avoid traction loss from hydroplaning is to slow down in " +
      "the rain or when the road is wet with pooled water or water puddles.",
    source: MANUAL,
    section: "Safe Driving Tips - Adjusting to Roadway Conditions (page 50)",
    url: p(50),
  },
  {
    key: "flooded-roadway",
    quote:
      "Flooded roadways-Do not drive through large bodies of standing water on a " +
      "road. If you see a flooded roadway, find another route to get to your " +
      "destination.",
    source: MANUAL,
    section: "Safe Driving Tips - Adjusting to Roadway Conditions (page 50)",
    url: p(50),
  },
  {
    key: "total-stopping-distance",
    quote:
      "Total stopping distance is the distance the vehicle travels, in ideal " +
      "conditions, from the time you realize you must stop until the vehicle stops.",
    source: MANUAL,
    section: "Safe Driving Tips - Stopping Distance (page 50)",
    url: p(50),
  },
  {
    key: "perception-time",
    quote:
      "Your perception time-This is the time and distance it takes you to " +
      "recognize you must stop. The average perception time for an alert driver is " +
      "¾ second to 1 second.",
    source: MANUAL,
    section: "Safe Driving Tips - Stopping Distance (page 50)",
    url: p(50),
  },
  {
    key: "reaction-time",
    quote:
      "Your reaction time-This is the time and distance it takes for you to react " +
      "and move your foot from the gas pedal and begin applying the brakes. The " +
      "average driver has a reaction time of ¾ second to 1 second.",
    source: MANUAL,
    section: "Safe Driving Tips - Stopping Distance (page 50)",
    url: p(50),
  },
  {
    key: "braking-distance-158",
    quote:
      "Braking distance-This is the time and distance it takes for the brakes to " +
      "slow and stop the vehicle. At 50 mph on dry pavement with good brakes, it " +
      "can take about 158 feet.",
    source: MANUAL,
    section: "Safe Driving Tips - Stopping Distance (page 50)",
    url: p(50),
  },
  {
    key: "following-four-seconds",
    quote:
      "Always try to keep a minimum following distance of 4 seconds between your " +
      "car and the vehicle in front.",
    source: MANUAL,
    section: "Safe Driving Tips - Providing an Adequate Following Distance (page 51)",
    url: p(51),
  },
  {
    key: "following-count-method",
    quote:
      "Watch when the rear of the vehicle ahead passes a sign, pole, or any other " +
      "stationary point. Count the seconds it takes to reach the same sign, pole, " +
      "or any other stationary point",
    source: MANUAL,
    section: "Safe Driving Tips - To determine the following distance (page 51)",
    url: p(51),
  },
  {
    key: "following-too-close-test",
    quote:
      "You are following too closely if you pass the stationary point before " +
      "counting to one thousand four.",
    source: MANUAL,
    section: "Safe Driving Tips - To determine the following distance (page 51)",
    url: p(51),
  },
  {
    key: "following-motorcycles",
    quote:
      "When following motorcycles or bicyclists. If the cycle should fall, you " +
      "need extra distance to avoid hitting the rider.",
    source: MANUAL,
    section: "Safe Driving Tips - Increase following distance (page 51)",
    url: p(51),
  },
  {
    key: "following-hill",
    quote:
      "When stopped on a hill or incline. Leave extra space because the vehicle " +
      "ahead may roll back when it starts moving.",
    source: MANUAL,
    section: "Safe Driving Tips - Increase following distance (page 51)",
    url: p(51),
  },
  {
    key: "following-railroad",
    quote:
      "When approaching railroad crossings. Leave extra room for vehicles required " +
      "to come to a stop at railroad crossings, including transit buses, school " +
      "buses, or vehicles carrying hazardous materials",
    source: MANUAL,
    section: "Safe Driving Tips - Increase following distance (page 51)",
    url: p(51),
  },
  {
    key: "following-slippery",
    quote:
      "On slippery roads. Because you need more distance to stop the vehicle on " +
      "slippery roads, you must leave more space in front of you.",
    source: MANUAL,
    section: "Safe Driving Tips - Increase following distance (page 51)",
    url: p(51),
  },
  {
    key: "space-to-side",
    quote:
      "Avoid driving next to other vehicles for long periods of time. You may be " +
      "in their blind spot, and it reduces the space you may need to avoid a crash.",
    source: MANUAL,
    section: "Safe Driving Tips - Space to the Side (page 52)",
    url: p(52),
  },
  {
    key: "space-bicyclists-children",
    quote:
      "Give extra space to bicyclists and pedestrians, especially children. They " +
      "can move into your path quickly and without warning. Do not drive alongside " +
      "a pedestrian or bicyclist.",
    source: MANUAL,
    section: "Safe Driving Tips - Space to the Side (page 52)",
    url: p(52),
  },
  {
    key: "space-parked-cars",
    quote:
      "Keep extra space between the vehicle and parked cars. Someone could step " +
      "out from a parked vehicle, from between vehicles, or a parked vehicle could " +
      "pull out.",
    source: MANUAL,
    section: "Safe Driving Tips - Space to the Side (page 52)",
    url: p(52),
  },
  {
    key: "tailgater-response",
    quote:
      "If you are being followed too closely and there is a right lane, move over " +
      "to the right. If there is no right lane, wait until the road ahead is clear " +
      "and passing is legal, then slowly reduce speed. This will encourage the " +
      "tailgater to pass.",
    source: MANUAL,
    section: "Safe Driving Tips - Space Behind (page 52)",
    url: p(52),
  },
  {
    key: "tailgater-never-brake",
    quote:
      "Never slow down quickly to discourage a tailgater. All that does is " +
      "increase the risk of being hit from behind.",
    source: MANUAL,
    section: "Safe Driving Tips - Space Behind (page 52)",
    url: p(52),
  },
  {
    key: "slow-driver-right-lane",
    quote:
      "If driving more slowly than other traffic on a multi-lane road, drive in " +
      "the right most travel lane. When you must drive so slowly that you slow " +
      "down other vehicles, pull to the side of the road when safe to do so and " +
      "let them pass.",
    source: MANUAL,
    section: "Safe Driving Tips - Space Behind (page 52)",
    url: p(52),
  },
  {
    key: "separate-risks",
    quote:
      "Another defensive driving technique is to separate risks. Take risks one at " +
      "a time whenever possible.",
    source: MANUAL,
    section: "Safe Driving Tips - Separate Risks (page 54)",
    url: p(54),
  },
  {
    key: "compromise-space",
    quote:
      "When you cannot separate risks and must deal with two or more at the same " +
      "time, compromise by giving the most room to the worst danger.",
    source: MANUAL,
    section: "Safe Driving Tips - Compromise Space (page 54)",
    url: p(54),
  },
  {
    key: "wipers-headlights",
    quote:
      "In these conditions, headlights make vehicles easier to see. A good rule to " +
      "follow is if you turn on the wipers, turn on the headlights.",
    source: MANUAL,
    section: "Safe Driving Tips - Letting Others Know You Are There (page 54)",
    url: p(54),
  },
  {
    key: "headlights-when-dark",
    quote:
      "Turn on the headlights when it begins to get dark. Even if you turn them on " +
      "a little early, it will help other drivers to see you.",
    source: MANUAL,
    section: "Safe Driving Tips - Use headlights (page 54)",
    url: p(54),
  },
  {
    key: "parking-lights-only-parked",
    quote:
      "Whenever it's necessary to drive with the lights on, use the headlights. " +
      "Parking lights are for parked vehicles only.",
    source: MANUAL,
    section: "Safe Driving Tips - Use headlights (page 54)",
    url: p(54),
  },
  {
    key: "headlights-into-sun",
    quote:
      "When driving away from a rising or setting sun, turn on the headlights. " +
      "Drivers coming toward you may have trouble seeing the vehicle because of " +
      "the glare.",
    source: MANUAL,
    section: "Safe Driving Tips - Use headlights (page 54)",
    url: p(54),
  },
  {
    key: "high-beams-twice-as-far",
    quote:
      "Use high beams whenever there are no oncoming vehicles. High beams let you " +
      "see twice as far as low beams.",
    source: MANUAL,
    section: "Safe Driving Tips - Communicating (page 55)",
    url: p(55),
  },
  {
    key: "dim-500-feet-oncoming",
    quote:
      "Dim the high beams whenever you come within 500 feet (about a one block " +
      "distance) of an oncoming vehicle.",
    source: MANUAL,
    section: "Safe Driving Tips - Communicating (page 55)",
    url: p(55),
  },
  {
    key: "low-beams-500-feet-behind",
    quote:
      "Use the low beams when you are closer than 500 feet behind another vehicle " +
      "or when in heavy traffic.",
    source: MANUAL,
    section: "Safe Driving Tips - Communicating (page 55)",
    url: p(55),
  },
  {
    key: "low-beams-fog",
    quote:
      "Use the low beams in fog, when it is snowing, or when it is raining hard. " +
      "Light from high beams will reflect, causing glare and making it more " +
      "difficult to see ahead.",
    source: MANUAL,
    section: "Safe Driving Tips - Communicating (page 55)",
    url: p(55),
  },
  {
    key: "no-parking-lights-driving",
    quote:
      "Do not drive at any time with only the parking lights on. Parking lights " +
      "are for parking only.",
    source: MANUAL,
    section: "Safe Driving Tips - Communicating (page 55)",
    url: p(55),
  },
  {
    key: "oncoming-high-beams",
    quote:
      "If a driver approaching fails to dim their headlights, flash the high beams " +
      "to let them know. If they still don't dim the lights, look toward the right " +
      "side of the road.",
    source: MANUAL,
    section: "Safe Driving Tips - Communicating (page 55)",
    url: p(55),
  },
  {
    key: "daytime-running-lights",
    quote:
      "However, daytime running lights are not meant to replace the use of " +
      "headlights for night driving or when it is foggy, raining or snowing.",
    source: MANUAL,
    section: "Safe Driving Tips - Daytime running lights (page 55)",
    url: p(55),
  },
  {
    key: "horn-light-tap",
    quote:
      "Give the horn a light tap: When a person on foot or on a bicycle appears to " +
      "be moving into your lane of travel.",
    source: MANUAL,
    section: "Safe Driving Tips - Using the horn (page 55)",
    url: p(55),
  },
  {
    key: "horn-not-for",
    quote:
      "Do not use the horn in the following circumstances: Encouraging someone to " +
      "drive faster or get out of the way Informing other drivers of an error " +
      "Greeting a friend Around blind pedestrians",
    source: MANUAL,
    section: "Safe Driving Tips - Not using the horn (page 55)",
    url: p(55),
  },
  {
    key: "horn-animals",
    quote: "Around animal-drawn vehicles or animals being herded on the roadway",
    source: MANUAL,
    section: "Safe Driving Tips - Not using the horn (page 55)",
    url: p(55),
  },
  {
    key: "horn-sharp-blast",
    quote:
      "Give the horn a SHARP BLAST: When another vehicle is in danger of hitting " +
      "you When you have lost control of the vehicle and are moving toward someone",
    source: MANUAL,
    section: "Safe Driving Tips - Using the horn (page 55)",
    url: p(55),
  },
  {
    key: "breakdown-flares",
    quote:
      "Place emergency flares or triangles behind it. This allows other drivers to " +
      "change lanes if necessary.",
    source: MANUAL,
    section: "Safe Driving Tips - Use emergency signals (page 55)",
    url: p(55),
  },
  {
    key: "breakdown-white-cloth",
    quote:
      "Raise the hood or tie a white cloth to the antenna, side mirror, or door " +
      "handle to signal an emergency.",
    source: MANUAL,
    section: "Safe Driving Tips - Use emergency signals (page 55)",
    url: p(55),
  },
  {
    key: "breakdown-never-stand-road",
    quote:
      "Never stand in the roadway. Do not try to change a tire if it means you " +
      "will be in a traffic lane.",
    source: MANUAL,
    section: "Safe Driving Tips - Use emergency signals (page 55)",
    url: p(55),
  },
  {
    key: "truck-mirror-rule",
    quote:
      "A good rule of thumb for drivers sharing the road with a truck or bus is, " +
      "if you can't see the truck or bus driver in their side mirror, they can't " +
      "see you.",
    source: MANUAL,
    section: "Safe Driving Tips - Stay out of blind spots (page 56)",
    url: p(56),
  },

  // ------------------------------------------------------------- emergencies
  {
    key: "three-crash-options",
    quote:
      "There are three options to avoid a crash or to reduce its impact. These " +
      "options are braking, steering, or accelerating.",
    source: MANUAL,
    section: "Emergency Situations and Avoiding Crashes - Emergencies and Avoiding Crashes (page 57)",
    url: p(57),
  },
  {
    key: "abs-how-to-use",
    quote:
      "Press on the brake pedal as hard as you can and keep applying pressure. ABS " +
      "will work only if you keep the pressure on the brake pedal. You may feel " +
      "the pedal vibrate, and you may hear a clicking noise. This is normal. You " +
      "can still steer the vehicle.",
    source: MANUAL,
    section: "Emergency Situations and Avoiding Crashes - Braking (page 57)",
    url: p(57),
  },
  {
    key: "swerving",
    quote:
      "Make sure to have a good grip with both hands on the steering wheel. Steer " +
      "in the direction you want to go but try to avoid other traffic.",
    source: MANUAL,
    section: "Emergency Situations and Avoiding Crashes - Steering (page 57)",
    url: p(57),
  },
  {
    key: "skid-causes",
    quote:
      "Skids are caused when you are traveling too fast for conditions, when you " +
      "stop too suddenly, or when the tires can no longer grip the roadway.",
    source: MANUAL,
    section: "Emergency Situations and Avoiding Crashes - Dealing with Skids (page 57)",
    url: p(57),
  },
  {
    key: "skid-recovery",
    quote:
      "If the vehicle begins to skid: Release pressure from the brake or " +
      "accelerator. Look where you want to go.",
    source: MANUAL,
    section: "Emergency Situations and Avoiding Crashes - Dealing with Skids (page 57)",
    url: p(57),
  },
  {
    key: "drop-off-recovery",
    quote:
      "Avoid panic steering in which you try to return to the pavement as soon as " +
      "the wheels leave the pavement. If the vehicle leaves the paved road " +
      "surface, slow down gradually, when safe to do so, and turn back onto the " +
      "pavement.",
    source: MANUAL,
    section: "Emergency Situations and Avoiding Crashes - Uneven Surface Drop-Offs (page 57)",
    url: p(57),
  },
  {
    key: "brake-failure",
    quote:
      "Use the parking brake. Pull on the parking brake handle in the center " +
      "console or push the parking brake foot pedal slowly so you will not lock " +
      "the rear wheels and cause a skid.",
    source: MANUAL,
    section: "Emergency Situations and Avoiding Crashes - Brake Failure (page 58)",
    url: p(58),
  },
  {
    key: "blowout-response",
    quote:
      "Grip the steering wheel firmly and keep the vehicle going straight. Slow " +
      "down gradually. Take your foot off the accelerator pedal. Do not brake. " +
      "Allow the vehicle to slow by itself or brake gently if necessary.",
    source: MANUAL,
    section: "Emergency Situations and Avoiding Crashes - Tire Blowout (page 58)",
    url: p(58),
  },
  {
    key: "blowout-front-tire",
    quote:
      "If a front tire blows out, the vehicle will pull sharply in the direction " +
      "of the blowout. If a rear tire blows out, the vehicle will wobble, shake, " +
      "and pull some in the direction of the blowout.",
    source: MANUAL,
    section: "Emergency Situations and Avoiding Crashes - Tire Blowout (page 58)",
    url: p(58),
  },
  {
    key: "power-failure",
    quote:
      "Look for an escape path. Do not brake hard. Instead, brake with steady " +
      "pressure on the pedal to slow down, and then pull off the roadway.",
    source: MANUAL,
    section: "Emergency Situations and Avoiding Crashes - Power Failure (page 58)",
    url: p(58),
  },
  {
    key: "stuck-accelerator",
    quote:
      "If the vehicle is accelerating out of control: Turn off the engine. Shift " +
      "to neutral and search for an escape path. Steer smoothly, brake gently, and " +
      "pull off the roadway.",
    source: MANUAL,
    section: "Emergency Situations and Avoiding Crashes - Stuck Accelerator (page 58)",
    url: p(58),
  },
  {
    key: "flares-200-300-feet",
    quote:
      "Place emergency flares about 200 to 300 feet behind the vehicle, giving " +
      "other drivers some time to change lanes if necessary.",
    source: MANUAL,
    section: "Emergency Situations and Avoiding Crashes - Vehicle Breakdown (page 58)",
    url: p(58),
  },
  {
    key: "headlight-failure",
    quote:
      "If the headlights suddenly go out: Try the headlight switch a few times. If " +
      "that does not work, put on the emergency flashers, turn signals, or fog " +
      "lights if possible.",
    source: MANUAL,
    section: "Emergency Situations and Avoiding Crashes - Headlight Failure (page 58)",
    url: p(58),
  },
  {
    key: "crash-must-stop",
    quote:
      "If you are involved in an accident, you must stop. If you are involved in " +
      "an accident with a parked vehicle, you must try to locate the owner. If any " +
      "person is injured or killed, the police must be notified.",
    source: MANUAL,
    section: "Emergency Situations and Avoiding Crashes - Crashes (page 59)",
    url: p(59),
  },
  {
    key: "do-not-rubberneck",
    quote:
      "Do not stop at an accident unless you are involved or if emergency help has " +
      "not yet arrived. Keep your attention on driving and keep moving, watching " +
      "for people who might be in or near the road.",
    source: MANUAL,
    section: "Emergency Situations and Avoiding Crashes - Crashes (page 59)",
    url: p(59),
  },
  {
    key: "hit-from-rear",
    quote:
      "If the vehicle is hit from the rear, your body will be thrown backwards. " +
      "Press yourself against the back of the seat and put your head against the " +
      "head restraint.",
    source: MANUAL,
    section: "Emergency Situations and Avoiding Crashes - Protect Yourself in Collisions (page 59)",
    url: p(59),
  },
  {
    key: "hit-from-side",
    quote:
      "If the vehicle is hit from the side, your body will be thrown towards the " +
      "side that is hit. Front air bags will not help in this situation.",
    source: MANUAL,
    section: "Emergency Situations and Avoiding Crashes - Protect Yourself in Collisions (page 59)",
    url: p(59),
  },
  {
    key: "crash-scene-ignition",
    quote:
      "Turn off the ignition of wrecked vehicles. Do not smoke around wrecked " +
      "vehicles. Fuel could have spilled, and fire is a real danger.",
    source: MANUAL,
    section: "Emergency Situations and Avoiding Crashes - At the Accident Scene (page 59)",
    url: p(59),
  },
  {
    key: "crash-power-lines",
    quote:
      "If there are power lines down with wires in or on the road, do not go near " +
      "them.",
    source: MANUAL,
    section: "Emergency Situations and Avoiding Crashes - At the Accident Scene (page 59)",
    url: p(59),
  },
  {
    key: "do-not-move-injured",
    quote:
      "Do not move the injured unless they are in a burning vehicle or in other " +
      "immediate danger of being hit by another vehicle. Moving a person can make " +
      "their injuries worse.",
    source: MANUAL,
    section: "Emergency Situations and Avoiding Crashes - If someone is injured (page 59)",
    url: p(59),
  },
  {
    key: "no-drink-for-injured",
    quote: "Do not give injured persons anything to drink, not even water.",
    source: MANUAL,
    section: "Emergency Situations and Avoiding Crashes - If someone is injured (page 59)",
    url: p(59),
  },
  {
    key: "injured-shock",
    quote:
      "To help prevent an injured person from going into shock, cover them with a " +
      "blanket or coat to keep them warm.",
    source: MANUAL,
    section: "Emergency Situations and Avoiding Crashes - If someone is injured (page 59)",
    url: p(59),
  },
  {
    key: "injured-bleeding",
    quote:
      "If there is bleeding, apply pressure directly on the wound with your hand " +
      "or with a cloth.",
    source: MANUAL,
    section: "Emergency Situations and Avoiding Crashes - If someone is injured (page 59)",
    url: p(59),
  },
  {
    key: "parked-vehicle-note",
    quote:
      "Should the accident involve a parked vehicle, try to find the owner. If you " +
      "cannot, leave a note in a place where it can be seen with information on " +
      "how the owner can reach you and the date and time of the accident.",
    source: MANUAL,
    section: "Emergency Situations and Avoiding Crashes - Report the Accident (page 60)",
    url: p(60),
  },
  {
    key: "must-contact-police",
    quote:
      "You must contact the police if there is an injury or a death. The law " +
      "requires you to give the police information on the accident at the time of " +
      "the accident.",
    source: MANUAL,
    section: "Emergency Situations and Avoiding Crashes - Report the Accident (page 60)",
    url: p(60),
  },
  {
    key: "unattended-property-damage",
    quote:
      "If you damage an unattended vehicle or other property and you cannot locate " +
      "the owner, contact the nearest law enforcement agency, and leave the " +
      "following information on a piece of paper where the owner can find it.",
    source: MANUAL,
    section: "Emergency Situations and Avoiding Crashes - Damaging Unattended Vehicles (page 60)",
    url: p(60),
  },
  {
    key: "leaving-the-scene",
    quote:
      "You should wait for law enforcement to arrive at the scene. It is against " +
      "the law to leave the scene of an accident.",
    source: MANUAL,
    section: "Emergency Situations and Avoiding Crashes - Damaging Unattended Vehicles (page 60)",
    url: p(60),
  },
  {
    key: "top-crash-causes",
    quote:
      "Rank Violation 1 Careless Driving 2 Following Too Closely 3 Driving Under " +
      "the Influence 4 Failure to Stop at Sign or Signal 5 Improper Turn",
    source: MANUAL,
    section: "Emergency Situations and Avoiding Crashes - Injury and Fatal Accidents (page 60)",
    url: p(60),
  },
  {
    key: "exchange-information",
    quote:
      "Get the names and addresses of all people involved in the accident, and any " +
      "witnesses, including injured persons.",
    source: MANUAL,
    section: "Emergency Situations and Avoiding Crashes - Report the Accident (page 60)",
    url: p(60),
  },
  {
    key: "accident-report-threshold",
    quote:
      "property damage to an apparent extent of one thousand dollars or more to " +
      "any one person's property or two thousand dollars per accident shall " +
      "immediately, by the quickest means of communication, give notice of the " +
      "accident to the nearest available law enforcement officer who has " +
      "jurisdiction.",
    source: SDCL,
    section: "SDCL 32-34-7 - Duty to give immediate notice of accident to law enforcement officer",
    url: sdcl("32-34-7"),
  },
  {
    key: "hit-and-run-felony",
    quote:
      "Any driver of any vehicle involved in an accident resulting in injury or " +
      "death to any person, who fails immediately to stop such vehicle at the " +
      "scene of such accident and comply with the provisions of Section 32-34-3 is " +
      "guilty of a Class 6 felony",
    source: SDCL,
    section: "SDCL 32-34-5 - Hit and run accident resulting in death or injury as felony",
    url: sdcl("32-34-5"),
  },
  {
    key: "reckless-driving-statute",
    quote:
      "carelessly and heedlessly in disregard of the rights or safety of others, " +
      "or without due caution and circumspection and at a speed or in a manner so " +
      "as to endanger or be likely to endanger any person or property, is guilty " +
      "of reckless driving. Reckless driving is a Class 1 misdemeanor.",
    source: SDCL,
    section: "SDCL 32-24-1 - Definition of reckless driving",
    url: sdcl("32-24-1"),
  },
  {
    key: "careless-driving-statute",
    quote:
      "carelessly and without due caution, at a speed or in a manner so as to " +
      "endanger any person or property, not amounting to reckless driving as " +
      "defined in Section 32-24-1, is guilty of careless driving.",
    source: SDCL,
    section: "SDCL 32-24-8 - Definition of careless driving",
    url: sdcl("32-24-8"),
  },

  // ------------------------------------------------------- sharing the road
  {
    key: "pedestrian-always-yield",
    quote:
      "Always be prepared to yield to pedestrians even if they are not in a " +
      "crosswalk. Yield to pedestrians crossing at intersections, even when a " +
      "crosswalk is not marked.",
    source: MANUAL,
    section: "Sharing the Road - Pedestrians (page 61)",
    url: p(61),
  },
  {
    key: "white-cane-stop",
    quote:
      "Always yield the right-of-way to persons who are visually impaired. When a " +
      "pedestrian is crossing a street guided by a dog or carrying a white cane, " +
      "come to a complete stop.",
    source: MANUAL,
    section: "Sharing the Road - Pedestrians (page 61)",
    url: p(61),
  },
  {
    key: "pedestrian-green-light",
    quote:
      "Yield the right-of-way to all pedestrians in the intersection even if the " +
      "traffic light is green.",
    source: MANUAL,
    section: "Sharing the Road - Pedestrians (page 61)",
    url: p(61),
  },
  {
    key: "pedestrian-turn-on-red",
    quote:
      "When making a right or left turn on red, be prepared to yield the " +
      "right-of-way to pedestrians.",
    source: MANUAL,
    section: "Sharing the Road - Pedestrians (page 61)",
    url: p(61),
  },
  {
    key: "school-zone-slower",
    quote:
      "In a school zone when lights are flashing or children are present, obey a " +
      "slower speed limit. At a school crossing where there is traffic patrol, " +
      "stop and yield if signaled to do so.",
    source: MANUAL,
    section: "Sharing the Road - Pedestrians (page 61)",
    url: p(61),
  },
  {
    key: "playground-areas",
    quote:
      "Be careful in playground and residential areas where children could run out " +
      "from between parked vehicles. It is a good idea to drive slower than the " +
      "speed limit in these areas and be prepared to stop quickly.",
    source: MANUAL,
    section: "Sharing the Road - Pedestrians (page 61)",
    url: p(61),
  },
  {
    key: "pedestrians-between-parked",
    quote:
      "When driving next to parked or stopped vehicles, pedestrians can walk out " +
      "between these vehicles. Slow down and do not pass until you are sure there " +
      "are no pedestrians crossing in front of it.",
    source: MANUAL,
    section: "Sharing the Road - Pedestrians (page 61)",
    url: p(61),
  },
  {
    key: "bicycles-are-vehicles",
    quote:
      "Bicycles are considered vehicles when on roadways. Bicyclists are required " +
      "and expected to follow the same rules of the road as motorized vehicles.",
    source: MANUAL,
    section: "Sharing the Road - Bicyclists (page 61)",
    url: p(61),
  },
  {
    key: "bike-lane-yield",
    quote:
      "Yield the right-of-way when a bicycle path or bike lane intersects a road. " +
      "Do not stop, park, or drive on a designated bicycle path or lane unless " +
      "entering or leaving an alley or driveway",
    source: MANUAL,
    section: "Sharing the Road - Bicyclists (page 61)",
    url: p(61),
  },
  {
    key: "bicycle-horn",
    quote:
      "Avoid sounding the horn close to bicyclists unless there is a chance of a " +
      "crash. Sounding the horn to alert your presence may startle bicyclists and " +
      "cause them to steer into your path and crash.",
    source: MANUAL,
    section: "Sharing the Road - Bicyclists (page 61)",
    url: p(61),
  },
  {
    key: "bicycle-door",
    quote:
      "When parked on the street, check to the sides and rear for bicyclists " +
      "before opening the vehicle door.",
    source: MANUAL,
    section: "Sharing the Road - Bicyclists (page 62)",
    url: p(62),
  },
  {
    key: "bicycle-slow-and-space",
    quote:
      "Allow as much space as possible and slow down when approaching or passing a " +
      "bicyclist. You should slow down and let the cyclist clear the intersection " +
      "before making the turn.",
    source: MANUAL,
    section: "Sharing the Road - Bicyclists (page 61)",
    url: p(61),
  },
  {
    key: "motorcycle-full-lane",
    quote:
      "Allow a motorcyclist a full lane width. Do not share the lane. The " +
      "motorcycle needs space for the motorcyclist to react to other traffic.",
    source: MANUAL,
    section: "Sharing the Road - Motorcyclists (page 62)",
    url: p(62),
  },
  {
    key: "motorcycle-signal",
    quote:
      "Do not assume a motorcycle is turning when you see its turn signal " +
      "flashing. Motorcycle turn signals may not self-cancel, and the motorcyclist " +
      "may have forgotten to turn them off.",
    source: MANUAL,
    section: "Sharing the Road - Motorcyclists (page 62)",
    url: p(62),
  },
  {
    key: "motorcycle-following",
    quote:
      "When following a motorcyclist, allow for a minimum 4-second following " +
      "distance or more in wet conditions, otherwise you may not have enough time " +
      "or space to avoid a crash.",
    source: MANUAL,
    section: "Sharing the Road - Motorcyclists (page 62)",
    url: p(62),
  },
  {
    key: "motorcycle-left-turn",
    quote:
      "Before turning left, be alert for motorcycles by looking carefully to the " +
      "front and sides of the vehicle.",
    source: MANUAL,
    section: "Sharing the Road - Motorcyclists (page 62)",
    url: p(62),
  },
  {
    key: "truck-stopping-290",
    quote:
      "A loaded truck with good tires and properly adjusted brakes traveling at 55 " +
      "miles per hour on a clear, dry roadway requires a minimum of 290 feet to " +
      "come to a complete stop. Buses may require a minimum of 300 feet to come to " +
      "a complete stop.",
    source: MANUAL,
    section: "Sharing the Road - Large Trucks and Buses (page 62)",
    url: p(62),
  },
  {
    key: "truck-side-no-zone",
    quote:
      "Trucks have a larger blind spot on their right side starting behind the cab " +
      "and extending up to the length of the truck. If you cannot see the driver's " +
      "face in the side view mirror, they cannot see you.",
    source: MANUAL,
    section: "Sharing the Road - The No-Zone, Side No-Zones (page 63)",
    url: p(63),
  },
  {
    key: "truck-rear-no-zone",
    quote:
      "Rear No-Zones-Unlike cars, large vehicles have huge blind spots directly " +
      "behind them that extend up to 200 feet.",
    source: MANUAL,
    section: "Sharing the Road - The No-Zone, Rear No-Zones (page 63)",
    url: p(63),
  },
  {
    key: "truck-wide-right-turn",
    quote:
      "When a truck or bus needs to make a right turn, the driver will sometimes " +
      "swing the vehicle wide to the left to safely turn right and clear the " +
      "corner of a curb or other obstruction.",
    source: MANUAL,
    section: "Sharing the Road - Turning (page 63)",
    url: p(63),
  },
  {
    key: "truck-do-not-squeeze",
    quote:
      "If you try to get in between the truck or bus and the curb, you will be " +
      "squeezed in between the vehicle and could suffer a serious crash. To avoid " +
      "a crash, do not turn until the truck or bus has completed its turn.",
    source: MANUAL,
    section: "Sharing the Road - Turning (page 63)",
    url: p(63),
  },
  {
    key: "truck-left-turn-judgement",
    quote:
      "When in doubt about the speed of an oncoming truck or bus, do not turn left " +
      "in its path.",
    source: MANUAL,
    section: "Sharing the Road - Keep in mind (page 63)",
    url: p(63),
  },
  {
    key: "truck-merging",
    quote:
      "Merging traffic should keep moving and enter highways at the same speed as " +
      "the existing traffic flow. Do not merge in front of a truck or bus and then " +
      "slow down.",
    source: MANUAL,
    section: "Sharing the Road - Merging (page 63)",
    url: p(63),
  },
  {
    key: "runaway-truck-ramp",
    quote:
      "Never park on the ramp or even in the entrance. Not only is this illegal, " +
      "it is inviting disaster.",
    source: MANUAL,
    section: "Sharing the Road - Runaway Truck Ramps (page 64)",
    url: p(64),
  },
  {
    key: "runaway-truck-smoke",
    quote:
      "One indication of a runaway truck or bus is smoke coming from the brakes.",
    source: MANUAL,
    section: "Sharing the Road - Runaway Truck Ramps (page 64)",
    url: p(64),
  },
  {
    key: "articulated-bus-swing",
    quote:
      "The swing on articulated buses is approximately 3 feet. Allow enough room " +
      "between the vehicle and the rear of articulated bus to accommodate the tail " +
      "swing.",
    source: MANUAL,
    section: "Sharing the Road - Bus Related Issues (page 64)",
    url: p(64),
  },
  {
    key: "emergency-vehicle-yield",
    quote:
      "As a driver you must yield right-of-way to an emergency vehicle when the " +
      "flashing lights and sirens are on by pulling over to the edge of the road " +
      "so the emergency vehicle(s) may pass. Avoid blocking intersections.",
    source: MANUAL,
    section: "Sharing the Road - Emergency Vehicles (page 64)",
    url: p(64),
  },
  {
    key: "slow-moving-emblem",
    quote:
      "A fluorescent or reflective orange and red triangle displayed on the rear " +
      "of vehicles drawn by animals, farm equipment, or construction equipment " +
      "means the vehicle is traveling less than 25 mph.",
    source: MANUAL,
    section: "Sharing the Road - Slow-Moving Vehicles (page 65)",
    url: p(65),
  },
  {
    key: "farm-machinery-cannot-hear",
    quote:
      "Pass with caution and remember that the operator of the farm machinery " +
      "cannot hear approaching vehicles.",
    source: MANUAL,
    section: "Sharing the Road - Slow-Moving Vehicles (page 65)",
    url: p(65),
  },
  {
    key: "animal-drawn-rights",
    quote:
      "They have the same rights to use the road as a motor vehicle and must " +
      "follow the same rules of the road.",
    source: MANUAL,
    section: "Sharing the Road - Animal-drawn vehicles and horseback riders (page 65)",
    url: p(65),
  },
  {
    key: "emergency-vehicle-privileges",
    quote:
      "The driver of an authorized emergency vehicle may: (1) Park or stand, " +
      "irrespective of the provisions of chapter 32-30; (2) Proceed past a red or " +
      "stop signal or stop sign, but only after slowing down as may be necessary " +
      "for safe operation;",
    source: SDCL,
    section: "SDCL 32-31-2 - Particular regulations which may be disregarded",
    url: sdcl("32-31-2"),
  },

  // ------------------------------------------------------------- move over
  {
    key: "move-over-stop",
    quote:
      "South Dakota law requires all motorists from any direction approaching an " +
      "authorized emergency vehicle making use of red visual signals, to come to a " +
      "complete stop before reaching the stopped emergency vehicle and may, unless " +
      "otherwise directed, proceed with caution only after making sure it is safe " +
      "to do so.",
    source: MANUAL,
    section: "Attention (inside front cover, page 2)",
    url: p(2),
  },
  {
    key: "move-over-merge",
    quote:
      "When motorists are travelling on South Dakota interstates or highways with " +
      "two or more lanes travelling in the same direction as the authorized " +
      "emergency vehicle, merge into the lane farthest from the vehicle at least " +
      "three hundred feet before the vehicle and proceed with caution, unless " +
      "otherwise directed.",
    source: MANUAL,
    section: "Attention (inside front cover, page 2)",
    url: p(2),
  },
  {
    key: "move-over-two-lane",
    quote:
      "On two lane highways, at least three hundred feet before the vehicle, " +
      "motorists must slow to a speed that is at least twenty miles per hour less " +
      "than the posted speed limit or five miles per hour when the speed limit is " +
      "posted at twenty miles per hour or less and proceed with caution, unless " +
      "otherwise directed.",
    source: MANUAL,
    section: "Attention (inside front cover, page 2)",
    url: p(2),
  },
  {
    key: "move-over-penalty",
    quote:
      "A violation of this law is a class 2 misdemeanor which is punishable by a " +
      "fine and/or time in county jail.",
    source: MANUAL,
    section: "Attention (inside front cover, page 2)",
    url: p(2),
  },
  {
    key: "move-over-fine-statute",
    quote:
      "A violation of this section is a Class 2 misdemeanor and has a minimum fine " +
      "of two hundred seventy dollars.",
    source: SDCL,
    section: "SDCL 32-31-6.1 - Occupying highway shoulder or stopped--Requirements for approaching vehicles",
    url: sdcl("32-31-6.1"),
  },
  {
    key: "move-over-crash-statute",
    quote:
      "Any driver of a motor vehicle who, while violating Section 32-31-6.1, " +
      "causes an accident, is guilty of a Class 1 misdemeanor if: (1) The accident " +
      "is with a stopped emergency vehicle making use of its red visual signals;",
    source: SDCL,
    section: "SDCL 32-31-6.2 - Occupying highway shoulder or stopped--Accident caused",
    url: sdcl("32-31-6.2"),
  },

  // ------------------------------------------------- special driving situations
  {
    key: "night-extra-seconds",
    quote:
      "Increase the following distance by adding at least one additional second " +
      "for night driving conditions and at least two additional seconds for " +
      "driving on unfamiliar roadways at night.",
    source: MANUAL,
    section: "Special Driving Situations - Night Driving (page 66)",
    url: p(66),
  },
  {
    key: "night-no-sunglasses",
    quote:
      "Do not wear sunglasses or colored lenses when driving at night or on an " +
      "overcast day. Tinted or colored lenses reduce vision.",
    source: MANUAL,
    section: "Special Driving Situations - Night Driving (page 66)",
    url: p(66),
  },
  {
    key: "night-dark-shapes",
    quote:
      "Try to search well ahead of the headlight beams, looking for dark shapes on " +
      "the roadway.",
    source: MANUAL,
    section: "Special Driving Situations - Night Driving (page 66)",
    url: p(66),
  },
  {
    key: "night-oncoming-glare",
    quote:
      "Dim the high beams for approaching traffic. If a vehicle comes toward you " +
      "with their high beams on, look toward the right side of the road to keep " +
      "from being distracted or momentarily blinded by their headlights.",
    source: MANUAL,
    section: "Special Driving Situations - Night Driving (page 66)",
    url: p(66),
  },
  {
    key: "work-zone-definition",
    quote:
      "A work zone is an area where roadwork takes place and may involve lane " +
      "closures, detours, and moving equipment.",
    source: MANUAL,
    section: "Special Driving Situations - Work Zones (page 66)",
    url: p(66),
  },
  {
    key: "work-zone-no-workers",
    quote:
      "Always reduce your speed in a work zone, even if there are no workers " +
      "present. The narrower lanes and rough pavement can create a hazardous " +
      "condition.",
    source: MANUAL,
    section: "Special Driving Situations - Work Zones (page 66)",
    url: p(66),
  },
  {
    key: "work-zone-injuries",
    quote:
      "Work zones have become increasingly dangerous places for both workers and " +
      "drivers. Approximately 40,000 people per year are injured as a result of " +
      "motor vehicle crashes in work zones.",
    source: MANUAL,
    section: "Special Driving Situations - Work Zones (page 66)",
    url: p(66),
  },
  {
    key: "winter-below-posted",
    quote:
      "Go slowly. Drive well below the posted speed limit. Posted limits are " +
      "intended for summer months on dry pavement. Avoid sudden, sharp turns.",
    source: MANUAL,
    section: "Special Driving Situations - Winter Driving Safety Tips (page 67)",
    url: p(67),
  },
  {
    key: "winter-no-cruise-control",
    quote: "Use your head, use your feet. Never use cruise control on slippery roads.",
    source: MANUAL,
    section: "Special Driving Situations - Winter Driving Safety Tips (page 67)",
    url: p(67),
  },
  {
    key: "snowplow-200-feet",
    quote:
      "On roads with a posted speed limit of 35 mph or more, the law requires " +
      "drivers to stay at least 200 feet behind a snowplow when its red or amber " +
      "lights are on.",
    source: MANUAL,
    section: "Special Driving Situations - Give snowplows room (page 67)",
    url: p(67),
  },
  {
    key: "snowplow-wide",
    quote:
      "Snowplows are wide. They often need to operate very close to the center " +
      "line. Sometimes they throw up clouds of snow, which affects vision.",
    source: MANUAL,
    section: "Special Driving Situations - Give snowplows room (page 67)",
    url: p(67),
  },
  {
    key: "winter-headlights",
    quote:
      "Lighten up. Turn on the headlights. To prevent glare, avoid using high " +
      "beams during a night storm.",
    source: MANUAL,
    section: "Special Driving Situations - Winter Driving Safety Tips (page 67)",
    url: p(67),
  },
  {
    key: "winter-closed-roads",
    quote:
      "If travelling on a closed road and you get stuck, emergency services may " +
      "not be able to reach you immediately, especially in a snowstorm.",
    source: MANUAL,
    section: "Special Driving Situations - Pay attention to closed roads (page 67)",
    url: p(67),
  },
  {
    key: "winter-first-storm",
    quote:
      "First is worst. In the first storm of the season, most drivers have " +
      "forgotten their safe winter driving skills. They'll drive too fast and try " +
      "to stop too quickly.",
    source: MANUAL,
    section: "Special Driving Situations - Winter Driving Safety Tips (page 67)",
    url: p(67),
  },
  {
    key: "gravel-roads",
    quote:
      "Gravel or dirt-Traction can be reduced on gravel or dirt roads. Reduce your " +
      "speed and increase the following distance. Also, realize you may skid when " +
      "trying to stop the vehicle.",
    source: MANUAL,
    section: "Special Driving Situations - Rural Road Driving (page 67)",
    url: p(67),
  },
  {
    key: "narrow-bridge-right-of-way",
    quote:
      "Narrow and single-lane bridges-Look for warning signs identifying narrow or " +
      "single-lane bridges. Take turns crossing the bridge. Generally, the first " +
      "driver to the bridge has the right-of-way.",
    source: MANUAL,
    section: "Special Driving Situations - Rural Road Driving (page 67)",
    url: p(67),
  },
  {
    key: "uncontrolled-rural-intersection",
    quote:
      "Uncontrolled intersections-Some intersections on rural roads are not " +
      "controlled by yield or stop signs. These intersections can be very " +
      "dangerous if you do not approach them with caution.",
    source: MANUAL,
    section: "Special Driving Situations - Rural Road Driving (page 67)",
    url: p(67),
  },
  {
    key: "uncontrolled-slow-down",
    quote:
      "When approaching an uncontrolled rural intersection, slow down and be " +
      "prepared to stop for crossing or oncoming traffic.",
    source: MANUAL,
    section: "Special Driving Situations - Rural Road Driving (page 67)",
    url: p(67),
  },
  {
    key: "steel-bridge-traction",
    quote:
      "Open bridge gratings or steel bridges-These can reduce traction. Reduce " +
      "speed and increase the following distance. Also, maintain a firm grip on " +
      "the steering wheel.",
    source: MANUAL,
    section: "Special Driving Situations - Rural Road Driving (page 67)",
    url: p(67),
  },
  {
    key: "narrow-rural-roads",
    quote:
      "Narrow roads-Rural roads are generally narrower and may have ditches or " +
      "drop offs instead of shoulders. Reduce speed, center the vehicle in the " +
      "lane, and watch for oncoming traffic that may attempt to share the lane.",
    source: MANUAL,
    section: "Special Driving Situations - Rural Road Driving (page 67)",
    url: p(67),
  },
  {
    key: "reduced-vision-areas",
    quote:
      "Areas of reduced vision-Blind corners created by wooded areas, crops " +
      "growing in fields, and steep hills can limit how far you can see.",
    source: MANUAL,
    section: "Special Driving Situations - Rural Road Driving (page 67)",
    url: p(67),
  },

  // ------------------------------------------------------------------- speed
  {
    key: "speed-65-default",
    quote:
      "no person may drive a vehicle upon a street or highway at a speed in excess " +
      "of sixty-five miles per hour. A violation of this section is a Class 2 " +
      "misdemeanor.",
    source: SDCL,
    section: "SDCL 32-25-1.1 - Maximum daytime speed",
    url: sdcl("32-25-1.1"),
  },
  {
    key: "speed-80-interstate",
    quote:
      "no person may drive a vehicle upon the national system of interstate " +
      "highways at a speed in excess of eighty miles per hour.",
    source: SDCL,
    section: "SDCL 32-25-4 - Maximum speed on interstate highways",
    url: sdcl("32-25-4"),
  },
  {
    key: "speed-40-minimum-interstate",
    quote:
      "It is a Class 2 misdemeanor at any time for a person to drive or operate a " +
      "motor vehicle upon the national system of interstate highways at a speed " +
      "less than forty miles per hour unless the vehicle is operated pursuant to a " +
      "permit, issued by the Department of Public Safety.",
    source: SDCL,
    section: "SDCL 32-25-5 - Minimum speed on interstate highways",
    url: sdcl("32-25-5"),
  },
  {
    key: "speed-70-divided",
    quote:
      "the Transportation Commission may establish, by rules promulgated pursuant " +
      "to chapter 1-26, a maximum speed limit of seventy miles per hour upon any " +
      "divided four-lane highway in a rural area on the state trunk highway system.",
    source: SDCL,
    section: "SDCL 32-25-7.1 - Establishment of maximum speed limit on any divided four-lane highway in rural areas",
    url: sdcl("32-25-7.1"),
  },
  {
    key: "speed-55-township",
    quote:
      "No person may drive a vehicle on a township road in excess of fifty-five " +
      "miles per hour.",
    source: SDCL,
    section: "SDCL 32-25-9.2 - Township road speed limit",
    url: sdcl("32-25-9.2"),
  },
  {
    key: "speed-25-urban",
    quote:
      "In urban areas which are not zoned or posted as provided in Section " +
      "32-25-7, the maximum lawful speed shall be twenty-five miles per hour. A " +
      "violation of this section is a Class 2 misdemeanor.",
    source: SDCL,
    section: "SDCL 32-25-12 - Speed limit in unposted urban areas",
    url: sdcl("32-25-12"),
  },
  {
    key: "speed-15-school",
    quote:
      "When passing a school during a school recess or while children are going to " +
      "or leaving school during the opening or closing hours, the maximum lawful " +
      "speed shall be fifteen miles per hour.",
    source: SDCL,
    section: "SDCL 32-25-14 - Speed limit in school zones",
    url: sdcl("32-25-14"),
  },
  {
    key: "speed-15-railroad",
    quote:
      "When approaching within fifty feet of a grade crossing of any railway when " +
      "the driver's view is obstructed, the maximum speed shall be fifteen miles " +
      "per hour.",
    source: SDCL,
    section: "SDCL 32-25-13 - Speed limit at obstructed railway crossings",
    url: sdcl("32-25-13"),
  },
  {
    key: "speed-15-obstructed-intersection",
    quote:
      "When approaching within fifty feet of and when traversing an intersection " +
      "of highways when the driver's view is obstructed the maximum lawful speed " +
      "shall be fifteen miles per hour.",
    source: SDCL,
    section: "SDCL 32-25-15 - Speed limit at intersections with obstructed view",
    url: sdcl("32-25-15"),
  },
  {
    key: "speed-passing-bonus",
    quote:
      "The speed limit is increased by ten miles per hour over the posted speed " +
      "limit, if a person is driving a vehicle that is: (1) On a two-lane highway " +
      "that has one lane for each direction of travel; (2) On a highway with a " +
      "posted speed limit that is equal to or exceeds sixty-five miles per hour;",
    source: SDCL,
    section: "SDCL 32-25-28 - Exceeding posted speed limit permitted under certain conditions",
    url: sdcl("32-25-28"),
  },
  {
    key: "speed-passing-bonus-conditions",
    quote:
      "(3) Overtaking and passing another vehicle proceeding in the same direction " +
      "of travel; and (4) Passing a vehicle that is moving slower than the posted " +
      "speed limit.",
    source: SDCL,
    section: "SDCL 32-25-28 - Exceeding posted speed limit permitted under certain conditions",
    url: sdcl("32-25-28"),
  },
  {
    key: "speed-reasonable-and-prudent",
    quote:
      "It is a Class 2 misdemeanor for any person to drive a motor vehicle on a " +
      "highway located in this state at a speed greater than is reasonable and " +
      "prudent under the conditions then existing",
    source: SDCL,
    section: "SDCL 32-25-3 - Requirement that speed be reasonable and lawful under statutes",
    url: sdcl("32-25-3"),
  },
  {
    key: "speed-impeding",
    quote:
      "No person may drive a motor vehicle at such a slow speed as to impede the " +
      "normal and reasonable movement of traffic except when reduced speed is " +
      "necessary for safe operation or in compliance with law.",
    source: SDCL,
    section: "SDCL 32-25-5.1 - Unreasonably slow speed prohibited",
    url: sdcl("32-25-5.1"),
  },
  {
    key: "speed-manufactured-home",
    quote:
      "No person may drive a vehicle which is towing a manufactured home or mobile " +
      "home of a width in excess of one hundred two inches at a speed greater than " +
      "fifty-five miles per hour upon the interstate highway system or greater " +
      "than forty-five miles per hour upon any other highway.",
    source: SDCL,
    section: "SDCL 32-25-6.1 - Maximum speed for manufactured homes or mobile homes",
    url: sdcl("32-25-6.1"),
  },

  // ------------------------------------------------------------------ lights
  {
    key: "lights-sunset-to-sunrise",
    quote:
      "Each motor vehicle on a highway during the period from sunset to sunrise " +
      "and at any other time when there is not sufficient light to render clearly " +
      "discernible any person on the highway at a distance of two hundred feet " +
      "ahead, shall be equipped with lighted front and rear lamps",
    source: SDCL,
    section: "SDCL 32-17-4 - Periods during which lamps must be lighted",
    url: sdcl("32-17-4"),
  },
  {
    key: "dim-when-meeting",
    quote:
      "Whenever a motor vehicle meets another vehicle or overtakes another vehicle " +
      "proceeding in the same direction on any highway, the driver shall tilt the " +
      "beams of the headlamps downward",
    source: SDCL,
    section: "SDCL 32-17-7 - Circumstances under which headlamps must be dimmed",
    url: sdcl("32-17-7"),
  },
  {
    key: "headlamp-200-feet",
    quote:
      "they shall at all times mentioned in Section 32-17-4 and under normal " +
      "atmospheric conditions and on a level road produce a driving light " +
      "sufficient to render clearly discernible a person two hundred feet ahead.",
    source: SDCL,
    section: "SDCL 32-17-5 - Construction and adjustment of headlamps--Visibility distance",
    url: sdcl("32-17-5"),
  },

  // ------------------------------------------------------ stops and crossings
  {
    key: "stop-sign-statute",
    quote:
      "every driver of a vehicle approaching a stop intersection indicated by a " +
      "stop sign shall come to a full stop at a clearly marked stop line, but if " +
      "none, before entering the crosswalk on the near side of the intersection",
    source: SDCL,
    section: "SDCL 32-29-2.1 - Action required at stop sign--Place of stopping",
    url: sdcl("32-29-2.1"),
  },
  {
    key: "stop-sign-then-yield",
    quote:
      "After having stopped, the driver shall yield the right-of-way to any " +
      "vehicle which has entered or is approaching the intersection from another " +
      "highway and may not proceed into the intersection until certain that such " +
      "intersecting roadway is free from oncoming traffic which may affect safe " +
      "passage.",
    source: SDCL,
    section: "SDCL 32-29-2.1 - Action required at stop sign--Place of stopping",
    url: sdcl("32-29-2.1"),
  },
  {
    key: "yield-sign-statute",
    quote:
      "The driver of a vehicle approaching a yield sign shall in obedience to the " +
      "sign slow down to a speed reasonable for the existing conditions, or shall " +
      "stop if necessary",
    source: SDCL,
    section: "SDCL 32-29-3 - Duty when approaching yield sign",
    url: sdcl("32-29-3"),
  },
  {
    key: "yield-collision-evidence",
    quote:
      "if the driver is involved in a collision with a pedestrian in a crosswalk " +
      "or a vehicle in the intersection after driving past a yield sign without " +
      "stopping, the collision is prima facie evidence of his failure to yield the " +
      "right-of-way.",
    source: SDCL,
    section: "SDCL 32-29-3 - Duty when approaching yield sign",
    url: sdcl("32-29-3"),
  },
  {
    key: "railroad-stop-50-15",
    quote:
      "the driver shall bring the vehicle to a complete stop within fifty feet but " +
      "not less than fifteen feet from the nearest rail of the railroad and may " +
      "not proceed until the driver can do so safely.",
    source: SDCL,
    section: "SDCL 32-29-4 - Stop required at railroad grade crossing when warning given",
    url: sdcl("32-29-4"),
  },
  {
    key: "railroad-bus-hazmat-stop",
    quote:
      "any vehicle carrying explosive substances or combustible or flammable " +
      "liquid as a cargo or part of a cargo, before crossing at grade any track of " +
      "a railroad",
    source: SDCL,
    section: "SDCL 32-29-5 - Vehicles required to stop at all grade crossings",
    url: sdcl("32-29-5"),
  },
  {
    key: "railroad-no-gear-change",
    quote:
      "the driver of the vehicle shall cross only in such gear of the vehicle that " +
      "there will be no necessity of changing gears while traversing the crossing " +
      "and may not shift gears while crossing the track or tracks.",
    source: SDCL,
    section: "SDCL 32-29-5 - Shifting gears while crossing",
    url: sdcl("32-29-5"),
  },
  {
    key: "alley-stop-statute",
    quote:
      "The driver of a vehicle emerging from an alley, building, private road, or " +
      "driveway within a business or residence district shall stop such vehicle " +
      "immediately prior to driving onto a sidewalk or onto the sidewalk area " +
      "extending across such alley, building entrance, road, or driveway",
    source: SDCL,
    section: "SDCL 32-29-2.2 - Stop required before entering from alley, building or private road",
    url: sdcl("32-29-2.2"),
  },
  {
    key: "following-too-closely-statute",
    quote:
      "The driver of a motor vehicle may not follow another vehicle more closely " +
      "than is reasonable and prudent, having due regard for the speed of such " +
      "vehicles and the traffic upon and condition of the highway.",
    source: SDCL,
    section: "SDCL 32-26-40 - Following too closely",
    url: sdcl("32-26-40"),
  },
  {
    key: "pedestrian-crosswalk-statute",
    quote:
      "The driver of any vehicle upon a highway within a business or residence " +
      "district shall yield the right-of-way to a pedestrian crossing the highway " +
      "within any clearly marked crosswalk",
    source: SDCL,
    section: "SDCL 32-27-1 - Yielding right-of-way to pedestrian making proper crossing",
    url: sdcl("32-27-1"),
  },
  {
    key: "pedestrian-no-sudden-step",
    quote:
      "no pedestrian may suddenly leave a curb or other place of safety and walk " +
      "or run into the path of a vehicle which is so close as to constitute an " +
      "immediate hazard.",
    source: SDCL,
    section: "SDCL 32-27-1 - Yielding right-of-way to pedestrian making proper crossing",
    url: sdcl("32-27-1"),
  },
  {
    key: "pedestrian-turning-statute",
    quote:
      "drivers of vehicles, including those making turns, shall yield the " +
      "right-of-way to pedestrians crossing or those who have started to cross the " +
      "roadway on a green or go signal",
    source: SDCL,
    section: "SDCL 32-27-2 - Yielding right-of-way to pedestrians at controlled intersections",
    url: sdcl("32-27-2"),
  },
  {
    key: "divided-highway-statute",
    quote:
      "every vehicle shall be driven only upon the right-hand roadway and no " +
      "vehicle may be driven over, across, or within any such dividing space, " +
      "barrier, or section, except through an opening in such physical barrier or " +
      "dividing section or at a crossover or intersection established by public " +
      "authority.",
    source: SDCL,
    section: "SDCL 32-26-9 - Highways divided by physical barrier--Use of right-hand roadway",
    url: sdcl("32-26-9"),
  },
  {
    key: "controlled-access-statute",
    quote:
      "No person may drive a vehicle onto or from any controlled-access roadway " +
      "except at such entrances and exits as are established by public authority.",
    source: SDCL,
    section: "SDCL 32-26-10 - Entering controlled-access highway",
    url: sdcl("32-26-10"),
  },
  {
    key: "emergency-vehicle-yield-statute",
    quote:
      "The driver of a vehicle upon a highway shall yield the right-of-way to " +
      "police and fire department vehicles and ambulances if they are operated " +
      "upon official business and the drivers give an audible signal by bell, " +
      "siren, or exhaust whistle",
    source: SDCL,
    section: "SDCL 32-26-15 - Yielding right-of-way to emergency vehicles",
    url: sdcl("32-26-15"),
  },
  {
    key: "highway-equipment-row",
    quote:
      "Highway equipment and personnel in the performance of their duties of " +
      "maintaining the highway shall have the preference of right-of-way and shall " +
      "be permitted to drive upon the left-hand side of the traveled portion of " +
      "the highway for the purpose of dumping materials, for repairing the highway",
    source: SDCL,
    section: "SDCL 32-26-16 - Highway equipment and personnel as having right-of-way",
    url: sdcl("32-26-16"),
  },
  {
    key: "parking-one-way-statute",
    quote:
      "every vehicle stopped or parked upon a one-way roadway shall be so stopped " +
      "or parked parallel to the curb or edge of the roadway, in the direction of " +
      "authorized traffic movement, with its right-hand wheels within twelve " +
      "inches of the right-hand curb or edge of the roadway",
    source: SDCL,
    section: "SDCL 32-30-2.2 - Position of parking on one-way road",
    url: sdcl("32-30-2.2"),
  },
  {
    key: "disabled-vehicle-statute",
    quote:
      "If a vehicle is disabled, the driver shall activate all emergency lamps " +
      "and, if the vehicle is required to be equipped with flags or flares, the " +
      "flags or flares shall be deployed immediately.",
    source: SDCL,
    section: "SDCL 32-30-4 - Disabled vehicles excepted--Emergency lamps, flares and flags",
    url: sdcl("32-30-4"),
  },
];
