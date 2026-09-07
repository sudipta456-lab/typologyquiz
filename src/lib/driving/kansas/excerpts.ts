import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts behind the Kansas bank. Two sources sit behind them.
//
//  - The Kansas Driving Handbook, published by the Kansas Department of
//    Revenue, Division of Vehicles and served from ksrevenue.gov/pdf/dlhb.pdf.
//    Its cover carries the only edition label the state gives it: "Non-
//    Commercial Driver's Manual / AAMVA 09 Model Test Version / (Revised
//    February 2022)". It runs 112 pages and its printed page numbers line up
//    exactly with the PDF's own page numbers, so the page in each `section`
//    below is both. The handbook says on page 11 that you should read and
//    study it to pass the written exam, and on page 94 that the knowledge
//    test's questions "are based on the information provided in this manual" -
//    so nearly everything quoted here comes from it.
//  - Chapter 8 of the Kansas Statutes, on the Office of Revisor of Statutes'
//    own server. The handbook's own disclaimer on page 10 says that portions
//    of it "have been summarized" and that "Kansas law will take precedence
//    over discrepancies or omissions in the manual", which is an invitation to
//    check. Thirteen quotes here are statutory, and each one fills a hole the
//    handbook leaves: when headlights are legally required (8-1703 - the book
//    never gives the sunset-to-sunrise rule at all, only the wipers half), the
//    statutory school-bus stop and its separate-roadways exception (8-1556),
//    the maximum speed limits as the legislature words them (8-1558), the
//    20 mph floor on a school zone (8-1560), the 0.08 DUI threshold (8-1567),
//    the open-container rule (8-1599), the unattended-vehicle rule (8-1573),
//    and the doubled work-zone and school-zone fines and the escalating
//    school-bus fines (8-2118).
//
// Every quote was located mechanically in the fetched source and checked as an
// exact substring before it was written here. Nothing is paraphrased. Only the
// normalisations the sibling banks use were applied, to the extracted text and
// to nothing else: curly quotes, en dashes and em dashes fold to ASCII; runs
// of whitespace, including the line breaks the PDF inserts mid-sentence,
// collapse to single spaces; bullet glyphs become spaces, so a stem followed
// by its bulleted list runs together in the order the source prints it - no
// words are changed, dropped or reordered.
//
// The sources' own slips are preserved exactly as they stand, because a quote
// that has been tidied up is no longer a quote. Among them: the moped
// definition's "maximum design speed of no more than 30 miles mph", the
// under-21 arrest threshold the handbook prints inside square brackets as
// "[.02%]", the parking list that writes the fifteen-foot hydrant rule as
// "Within 15 feet" on page 19 and "Within 15 ft." on page 54, and the
// statute's "K.S.A. 8-1730 , and amendments thereto" spacing.

export const kansasExcerpts: HandbookExcerpt[] = [
  {
    key: "age-permit-14",
    quote:
      "Class C or M Instruction Permit: 14 years of age or " +
      "older",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Age Requirements, Instruction Permits (page 9)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=9",
  },
  {
    key: "age-restricted-15",
    quote:
      "Non-Commercial Class C (Restricted): 15 years of age, " +
      "completed driver's education, completed (25 of the) 50 " +
      "hours of practice driving while accompanied by an " +
      "adult, 21 years of age or older, 10 of those 50 at " +
      "night.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Age Requirements, Driver Licenses (page 9)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=9",
  },
  {
    key: "age-unrestricted-17",
    quote: "Non-Commercial Class C: 17 years of age or older",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Age Requirements, Driver Licenses (page 9)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=9",
  },
  {
    key: "driver-ed-internet",
    quote:
      "There are many online Driver's Education courses being " +
      "offered over the internet. Internet courses do not " +
      "meet requirements for a Driver's License in Kansas. A " +
      "certificate of completion from an Internet Driver " +
      "Education course will not be accepted for licensure.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Age Requirements, Driver's Education (page 9)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=9",
  },
  {
    key: "online-knowledge-exam",
    quote:
      "The Kansas Department of Revenue offers Kansans the " +
      "ability to complete their non-commercial knowledge " +
      "exam online, bring in their passing results, and " +
      "eliminate the in-office knowledge exam.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Age Requirements, Online Knowledge Exam (page 9)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=9",
  },
  {
    key: "manual-disclaimer",
    quote:
      "Portions of this manual have been summarized. Kansas " +
      "law will take precedence over discrepancies or " +
      "omissions in the manual.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Contact (page 10)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=10",
  },
  {
    key: "study-this-manual",
    quote:
      "You should read and study this manual to help you pass " +
      "the written exam for a Driver's License.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 1 - The Driver's License, About This Manual (page 11)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=11",
  },
  {
    key: "licence-required",
    quote:
      "Anyone who operates a motor vehicle, motorcycle, or " +
      "motor-driven cycle on public roadways in Kansas is " +
      "required to have a Driver's License. You are required " +
      "to have a Kansas Driver's License within 90 days of " +
      "moving to Kansas.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 1 - The Driver's License, About This Manual (page 11)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=11",
  },
  {
    key: "farm-permit",
    quote:
      "Minimum age 14 but less than 17 Must reside on a farm " +
      "OR be employed for compensation on a farm A farm is at " +
      "least 20 acres used in agricultural operations",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 1 - Types of Driver's Licenses and Driver's Permits, Farm Permit (page 11)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=11",
  },
  {
    key: "permit-supervision",
    quote:
      "May only drive with a licensed adult in the front seat " +
      "Licensed adult must be at least 21 years old and have " +
      "at least one-year driving experience",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 1 - Instructional Permit Class C or M (page 12)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=12",
  },
  {
    key: "permit-no-passengers",
    quote:
      "No person but the supervising adult in the front seat " +
      "No wireless communication devices while driving except " +
      "to report illegal activity or summon emergency " +
      "assistance",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 1 - Instructional Permit Class C or M (page 12)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=12",
  },
  {
    key: "permit-expiry",
    quote: "Expires in 1 year - may be renewed with testing",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 1 - Instructional Permit Class C or M (page 12)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=12",
  },
  {
    key: "restricted-age-15",
    quote:
      "Minimum age of 15 Must have held state issued " +
      "Learner's Permit for 1 year or more. This does not " +
      "include driver's education permit slip time held.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 1 - Restricted License (page 12)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=12",
  },
  {
    key: "restricted-hours-15",
    quote:
      "15-year-old applicants must have completed 25 hours of " +
      "supervised driving. 15-year-old applicants must have " +
      "completed an approved Driver's Education course (not " +
      "required if applying at age 16) 16-year-old applicants " +
      "must have completed 50 hours of supervised driving " +
      "with 10 at night",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 1 - Restricted License (page 12)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=12",
  },
  {
    key: "permit-year-under-17",
    quote:
      "Those under age 17 must have held state issued " +
      "Learner's Permit for 1 year or more prior to license " +
      "issuance",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 1 - Driving Restrictions 16-17 Year Old's (page 12)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=12",
  },
  {
    key: "no-phone-under-permit",
    quote:
      "NO wireless communication devices while driving except " +
      "to report illegal activity or summon emergency help.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 1 - Driving Restrictions 14-15 Year Old's (page 12)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=12",
  },
  {
    key: "restricted-15-school",
    quote:
      "Directly to/from home and school, over the most direct " +
      "route, for the purpose of attendance on days school is " +
      "in session.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 1 - Driving Restrictions 15-Year-Old (page 13)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=13",
  },
  {
    key: "restricted-15-passengers",
    quote: "NO non-sibling, minor passengers",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 1 - Driving Restrictions 15-Year-Old (page 13)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=13",
  },
  {
    key: "restricted-16-hours",
    quote:
      "May drive at any time: From 5 a.m. to 9 p.m. To/From " +
      "school and authorized school activities Directly " +
      "to/From any religious activity held by a religious " +
      "organization. To/From, or in connection with, any job, " +
      "employment, or farm related work",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 1 - Driving Restrictions 16-Year-Old (page 13)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=13",
  },
  {
    key: "restricted-16-passenger",
    quote:
      "Only one, non-sibling, minor passenger allowed in the " +
      "vehicle",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 1 - Driving Restrictions 16-Year-Old (page 13)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=13",
  },
  {
    key: "restrictions-removed",
    quote:
      "After age 16 and Restricted License has been held for " +
      "6 months then all age-related driving restrictions are " +
      "removed.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 1 - Driving Restrictions 16-Year-Old (page 13)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=13",
  },
  {
    key: "unrestricted-17",
    quote:
      "Unrestricted Driver's License - K.S.A. 8-235d Minimum " +
      "age 17",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 1 - Unrestricted Driver's License (page 13)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=13",
  },
  {
    key: "vision-2040",
    quote:
      "Vision must be at least 20/40 in one eye when screened " +
      "at the Driver License Station.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 1 - Required Noncommercial License Tests, Vision (page 13)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=13",
  },
  {
    key: "knowledge-test-content",
    quote:
      "Knowledge Test - This test consists of written " +
      "questions on Kansas traffic laws and road signs. You " +
      "will be required to answer 25 questions about traffic " +
      "laws and identify certain signs by their shape, color, " +
      "or the symbol appearing on them.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 1 - Required Noncommercial License Tests, Knowledge Test (page 13)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=13",
  },
  {
    key: "gdl-definition",
    quote:
      "Graduated Driver's Licensing (GDL) - a system designed " +
      "to improve road safety by allowing beginner drivers to " +
      "get their initial driving experience under conditions " +
      "that involve lower risk and introducing them in stages " +
      "to more complex driving situations as they gain more " +
      "experience in the driving environment.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 1 - Required Noncommercial License Tests (page 13)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=13",
  },
  {
    key: "retest-next-day",
    quote:
      "If you fail to pass either the written test or driving " +
      "test, you may take again the next working day after " +
      "paying a $1.50 re-exam fee.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 1 - Unsuccessful Examinations (page 14)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=14",
  },
  {
    key: "four-chances",
    quote:
      "You have four chances to pass the written test and " +
      "four chances to pass the driving test. After the " +
      "fourth failure of either test, you must wait a minimum " +
      "of six (6) months from the most recent failed exam " +
      "before retesting.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 1 - Unsuccessful Examinations (page 14)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=14",
  },
  {
    key: "permit-renewal-retest",
    quote:
      "All Instructional Permits are renewed by retaking and " +
      "passing the written examination.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 1 - Driver License Renewal (page 14)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=14",
  },
  {
    key: "expired-over-year",
    quote:
      "If the driver license has been expired for more than " +
      "1-year full testing will be required. Full testing " +
      "includes the vision, written, and driving " +
      "examinations.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 1 - Driver License Renewal (page 14)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=14",
  },
  {
    key: "three-violations",
    quote:
      "Conviction of three (3) moving violations within a " +
      "twelve-month period.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 1 - Loss of Driving Privileges (page 14)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=14",
  },
  {
    key: "refusal-suspension",
    quote:
      "Refusing to submit to a chemical test to determine the " +
      "alcohol/drug content of your blood is a mandatory " +
      "1-year suspension for the 1st refusal, 2 years for the " +
      "2nd refusal, 3 years for the third, and 10 years for " +
      "the fourth refusal.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 1 - Loss of Driving Privileges (page 14)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=14",
  },
  {
    key: "no-insurance",
    quote:
      "Failing to maintain continuous liability insurance on " +
      "your vehicle is a mandatory indefinite suspension.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 1 - Loss of Driving Privileges (page 14)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=14",
  },
  {
    key: "open-container-suspension",
    quote:
      "Transporting an open container of liquor or cereal " +
      "malt beverage (3.2 beer)",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 1 - Loss of Driving Privileges (page 14)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=14",
  },
  {
    key: "revocation-list",
    quote:
      "Vehicular homicide resulting from the operation of " +
      "motor vehicle. 2. Failure to stop and render aid as " +
      "required under the laws of this state in the event of " +
      "a motor vehicle accident resulting in the death or " +
      "personal injury of another. 3. Reckless driving.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 1 - Loss of Driving Privileges (page 15)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=15",
  },
  {
    key: "fifth-test-permanent",
    quote:
      "A fifth test result of .08 or greater or refusal to " +
      "submit to chemical testing to determine the " +
      "alcohol/drug content of blood will result in a " +
      "permanent license revocation",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 1 - Loss of Driving Privileges (page 15)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=15",
  },
  {
    key: "basic-speed-law",
    quote:
      "Kansas' basic speed law requires that you never drive " +
      "a vehicle at a speed greater than is reasonable and " +
      "prudent under the conditions then existing.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - State/Provincial/Territory Laws, Basic Speed Law (page 16)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=16",
  },
  {
    key: "speed-urban-30",
    quote:
      "In Towns or Cities: Thirty (30) miles per hour in any " +
      "urban district",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - State/Provincial/Territory Laws, Speed Limits (page 16)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=16",
  },
  {
    key: "speed-rural-limits",
    quote:
      "Seventy-five (75) miles per hour on any separated, " +
      "multilane highway as designated and posted by the " +
      "Secretary of Transportation Sixty-five (65) miles per " +
      "hour on any State or Federal Highway Fifty-five (55) " +
      "miles per hour on any County or Township road",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - State/Provincial/Territory Laws, Speed Limits (page 16)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=16",
  },
  {
    key: "speed-20-zones",
    quote:
      "Unless otherwise posted - Maximum speed limits 20 mph " +
      "-School Zone (when properly marked) -Business District " +
      "(when properly marked)",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - State/Provincial/Territory Laws, Speed Limits (page 16)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=16",
  },
  {
    key: "school-bus-speed",
    quote:
      "SCHOOL BUSES The posted speed limit unless otherwise " +
      "determined by school district policy.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - State/Provincial/Territory Laws, School Buses (page 16)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=16",
  },
  {
    key: "impeding-traffic",
    quote:
      "Even when a minimum speed is not posted, it is " +
      "unlawful to drive a vehicle so slowly as to impede or " +
      "block the normal movement of traffic.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - State/Provincial/Territory Laws, Minimum Speed (page 16)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=16",
  },
  {
    key: "seatbelt-primary",
    quote:
      "Seatbelt use is now a \"Primary Violation\" in Kansas as " +
      "well. If a law enforcement officer sees an " +
      "unrestrained adult in a front seat, or an unrestrained " +
      "child anywhere in the vehicle, then that vehicle can " +
      "be stopped solely for that violation.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - State/Provincial/Territory Laws, Seatbelts (page 16)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=16",
  },
  {
    key: "child-under-4",
    quote:
      "All children under the age of 4 must be restrained in " +
      "a federally approved child safety seat.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - State/Provincial/Territory Laws, Child Restraints (page 16)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=16",
  },
  {
    key: "child-4-to-8",
    quote:
      "All children 4 to 8 years of age must be restrained in " +
      "a federally approved child safety seat or booster seat " +
      "unless the child is taller than 4'9\" OR weighs more " +
      "than 80 pounds. Then they must use a seatbelt.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - State/Provincial/Territory Laws, Child Restraints (page 16)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=16",
  },
  {
    key: "safety-seat-middle",
    quote:
      "The safest position to place a safety seat is in the " +
      "middle of the backseat.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - State/Provincial/Territory Laws, Child Restraints (page 17)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=17",
  },
  {
    key: "signal-100-feet",
    quote:
      "All signals must be given at least 100 feet before " +
      "making the actual move or turn. Signals should be held " +
      "until you are ready to make the actual turn.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - Signaling For Stops And Turns (page 17)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=17",
  },
  {
    key: "left-turn-position",
    quote:
      "For left turns, move near the center line or traffic " +
      "divider and turn from the inside lane in a way that " +
      "you will not swing wide and will enter the cross " +
      "street just to the right of the center line.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - Turns On Multi-Lane Roads (page 17)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=17",
  },
  {
    key: "u-turn-500-feet",
    quote:
      "Do not make a \"U\" turn on a curve, near the top of a " +
      "hill or anywhere you cannot be seen by other drivers " +
      "for at least 500 feet.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - U Turns (page 17)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=17",
  },
  {
    key: "pass-return-mirror",
    quote:
      "Do not return to the right lane too soon; wait until " +
      "you can see the entire front of the vehicle you have " +
      "just passed in your rearview mirror.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - Passing (page 17)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=17",
  },
  {
    key: "no-pass-emergency",
    quote:
      "Within 100 feet of an emergency vehicle that is " +
      "stopped on the side of the roadway and has its " +
      "emergency lights on.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - Passing (page 17)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=17",
  },
  {
    key: "no-pass-bridge",
    quote:
      "Within 100 feet of a bridge, viaduct, or tunnel if " +
      "your view is obstructed. Within 100 feet of crossing " +
      "any intersection or railroad grade crossing.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - Passing (page 17)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=17",
  },
  {
    key: "pennant-sign",
    quote:
      "The \"No Passing Zone\" is the only pennant-shaped " +
      "warning sign. It marks the beginning of a no passing " +
      "zone and is placed on the left side of the road facing " +
      "the driver.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - Passing (page 17)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=17",
  },
  {
    key: "return-200-feet",
    quote:
      "You must return to your driving lane before coming " +
      "within 200 feet of any vehicle approaching from the " +
      "opposite direction.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - Passing (page 17)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=17",
  },
  {
    key: "pass-on-right",
    quote:
      "You may pass another vehicle on the right when driving " +
      "on one-way streets and highways marked for two or more " +
      "lanes of traffic moving in the same direction.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - Passing On The Right (page 17)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=17",
  },
  {
    key: "no-shoulder-pass",
    quote:
      "Do not drive on the shoulder to pass except during an " +
      "emergency or when directed by traffic authorities.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - Passing On The Right (page 17)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=17",
  },
  {
    key: "two-second-rule",
    quote:
      "Use the two-second rule for measuring a safe following " +
      "distance under prime conditions. Under adverse " +
      "conditions use a four-second following rule.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - Following Other Vehicles (page 17)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=17",
  },
  {
    key: "follow-reasonable",
    quote:
      "The law requires that you not follow a vehicle more " +
      "closely than what is \"reasonable and prudent\".",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - Following Other Vehicles (page 17)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=17",
  },
  {
    key: "follow-buses",
    quote:
      "When you are following vehicles, which stop often or " +
      "make sudden turns (buses, delivery vans, police cars " +
      "etc.) you should increase your following distance.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - Following Other Vehicles (page 18)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=18",
  },
  {
    key: "stop-at-stop-sign",
    quote:
      "At a stop sign. You must stop at a clearly marked stop " +
      "line, but if none, before entering the crosswalk on " +
      "the near side of the intersection or, if none, then at " +
      "a point nearest the intersecting roadway.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - Stopping (page 18)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=18",
  },
  {
    key: "stop-from-alley",
    quote:
      "When coming from an alley, private drive or building " +
      "within a business or residential district.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - Stopping (page 18)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=18",
  },
  {
    key: "stop-crossing-guard",
    quote:
      "When a school crossing guard is displaying an official " +
      "flag in a STOP position.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - Stopping (page 18)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=18",
  },
  {
    key: "school-bus-stop-rule",
    quote:
      "You must stop when meeting or overtaking a school bus, " +
      "church bus or day care bus that is stopped to pick up " +
      "or let off children. You must remain stopped until the " +
      "STOP signal is retracted, and the red lights are " +
      "turned off.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - Stopping, School Buses (page 18)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=18",
  },
  {
    key: "school-bus-divided",
    quote:
      "Traffic approaching a school bus in the opposing " +
      "roadway of a divided highway is not required to stop.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - Stopping, School Buses (page 18)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=18",
  },
  {
    key: "row-same-time",
    quote:
      "When two vehicles enter an intersection from different " +
      "roadways at approximately the same time the driver on " +
      "the left shall yield the right-of-way to the vehicle " +
      "on the right.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - Right-Of-Way (page 18)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=18",
  },
  {
    key: "row-emergency",
    quote:
      "Immediately drive to the right and stop until the " +
      "emergency vehicles have passed. NEVER follow such " +
      "vehicles.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - Right-Of-Way (page 18)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=18",
  },
  {
    key: "move-over-law",
    quote:
      "When approaching a stationary emergency vehicle from " +
      "the rear that is using flashing warning lights on a " +
      "street or highway with two or more lanes in each " +
      "direction, proceed with due caution and move to a lane " +
      "that is not next to the stopped emergency vehicle.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - Right-Of-Way (page 18)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=18",
  },
  {
    key: "construction-yield",
    quote:
      "You must yield to construction vehicles and workers " +
      "that are actually engaged in work on the roadway. Just " +
      "as with emergency vehicles, you must move into a " +
      "traffic lane that is not next to the construction " +
      "vehicles when you encounter one working on the road.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - Right-Of-Way (page 18)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=18",
  },
  {
    key: "left-turn-yield",
    quote:
      "The driver of a vehicle turning left must yield the " +
      "right-of-way to vehicles approaching from the opposite " +
      "direction. If both cars enter the intersection at the " +
      "same time, the car going straight through has the " +
      "right-of-way.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - Right-Of-Way (page 18)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=18",
  },
  {
    key: "yield-sign-rule",
    quote:
      "Cars controlled by a yield sign need stop only when " +
      "necessary to avoid interfering with other traffic that " +
      "has the right-of-way, including pedestrians.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - Right-Of-Way (page 18)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=18",
  },
  {
    key: "dont-block-intersection",
    quote:
      "Even though you may have a green light, you may not " +
      "enter an intersection if there isn't room to get all " +
      "the way across.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - Right-Of-Way (page 18)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=18",
  },
  {
    key: "private-drive-yield",
    quote:
      "Vehicles on a public street or highway have the " +
      "right-of-way over vehicles entering from a private " +
      "drive or side road.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - Right-Of-Way (page 18)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=18",
  },
  {
    key: "park-hydrant-curb",
    quote:
      "Within 15 feet of a fire hydrant. More than 12\" from a " +
      "curb.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - Parking (page 19)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=19",
  },
  {
    key: "park-30-feet-signal",
    quote:
      "Within the 30 feet approaching any traffic control " +
      "signal, stop sign, or flashing beacon at the side of " +
      "the roadway.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - Parking (page 19)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=19",
  },
  {
    key: "park-railroad-50",
    quote:
      "Within 50 feet of the nearest rail at railroad " +
      "crossings.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - Parking (page 19)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=19",
  },
  {
    key: "park-fire-station",
    quote:
      "Within 20 feet of driveway entrance to a fire station " +
      "and on side of street opposite the entrance within 75 " +
      "feet of entrance.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - Parking (page 19)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=19",
  },
  {
    key: "texting-ban",
    quote:
      "Kansas law prohibits the use of any electronic device " +
      "to \"write, send, or read\" a written communication " +
      "while driving. This includes texting, email, or any " +
      "other writing. It does not include GPS devices or " +
      "weather reports.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - Cell Phones (page 19)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=19",
  },
  {
    key: "talking-not-illegal",
    quote:
      "Talking, or dialing a phone number, on a cell phone is " +
      "not specifically illegal in Kansas.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - Cell Phones (page 19)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=19",
  },
  {
    key: "aggressive-avoid-eye",
    quote:
      "Avoid eye contact. Eye contact can sometimes anger an " +
      "aggressive driver.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - Aggressive Drivers (page 19)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=19",
  },
  {
    key: "vision-test-standard",
    quote:
      "The vision test measures that you have at least 20/40 " +
      "vision in at least one eye, with or without corrective " +
      "lenses.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 3 - Be in Shape to Drive, Vision (page 20)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=20",
  },
  {
    key: "corrective-lens-restriction",
    quote:
      "If your driver license says corrective lenses are " +
      "required, it is illegal to move a vehicle without " +
      "using corrective lenses.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 3 - Be in Shape to Drive, Vision (page 20)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=20",
  },
  {
    key: "tinted-lenses-night",
    quote:
      "Avoid using dark or tinted corrective lenses at night, " +
      "even if you think they help with glare. Tinted lenses " +
      "cut down the light that you need to see clearly under " +
      "night driving conditions.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 3 - Be in Shape to Drive, Vision (page 20)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=20",
  },
  {
    key: "fatigue-definition",
    quote:
      "Fatigue is physical or mental tiredness that can be " +
      "caused by physical or mental strain, repetitive tasks, " +
      "illness or lack of sleep. Just like alcohol and drugs, " +
      "it impairs your vision and judgment.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 3 - Be in Shape to Drive, Fatigue (page 20)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=20",
  },
  {
    key: "fatigue-sleep-hours",
    quote:
      "Get adequate sleep-most adults need 7 to 9 hours to " +
      "maintain proper alertness during the day",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 3 - Be in Shape to Drive, Fatigue (page 21)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=21",
  },
  {
    key: "fatigue-nap",
    quote:
      "Take a nap-find a safe parking area to take a 15 to " +
      "20-minute nap.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 3 - Be in Shape to Drive, Fatigue (page 21)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=21",
  },
  {
    key: "fatigue-caffeine",
    quote:
      "Consume caffeine-the equivalent of 2 cups of coffee " +
      "can increase alertness for several hours.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 3 - Be in Shape to Drive, Fatigue (page 21)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=21",
  },
  {
    key: "fatigue-night-hours",
    quote:
      "Try not to drive late at night between the hours of " +
      "midnight and 6 a.m. The best way to prevent fatigue is " +
      "sleep.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 3 - Be in Shape to Drive, Fatigue (page 21)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=21",
  },
  {
    key: "distraction-definition",
    quote:
      "A distraction is anything that takes your attention " +
      "away from driving.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 3 - Be in Shape to Drive, Driver Distractions (page 21)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=21",
  },
  {
    key: "distraction-responsibility",
    quote:
      "If you are distracted and you experience a crash, the " +
      "responsibility falls on you, not the distraction.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 3 - Be in Shape to Drive, Driver Distractions (page 22)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=22",
  },
  {
    key: "aggressive-definition",
    quote:
      "Aggressive driving occurs when an individual " +
      "intentionally commits an action or a moving traffic " +
      "offense, which endangers other persons or property.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 3 - Be in Shape to Drive, Aggressive Driving (page 22)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=22",
  },
  {
    key: "alcohol-40-percent",
    quote:
      "Alcohol and other impairing drugs are involved in " +
      "approximately 40% of all fatal crashes.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 3 - Alcohol, Other Drugs and Driving (page 22)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=22",
  },
  {
    key: "zero-tolerance",
    quote:
      "All states have \"Zero Tolerance\" laws (no alcohol in " +
      "the circulatory system) or similar laws for drivers " +
      "under the age of 21.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 3 - Effects of Alcohol and other Impairing Drugs (page 23)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=23",
  },
  {
    key: "vision-02-bac",
    quote: "Vision is impacted at .02 BAC for all drivers.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 3 - Effects of Alcohol and other Impairing Drugs (page 23)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=23",
  },
  {
    key: "time-only-cure",
    quote:
      "Coffee, fresh air, cold showers or eating will not " +
      "help to remove the alcohol or other drug combination " +
      "from the circulatory system.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 3 - Alcohol (page 23)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=23",
  },
  {
    key: "one-hour-per-drink",
    quote:
      "It takes about an hour for the body to get rid of one " +
      "normal drink from the circulatory system. Therefore, " +
      "if someone has had four normal drinks, they should " +
      "wait four hours or more before they drive.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 3 - Alcohol (page 23)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=23",
  },
  {
    key: "bac-08-violation",
    quote:
      "If you are found to have .08 blood alcohol " +
      "concentration (BAC) or higher, you are in violation of " +
      "the law.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 3 - Alcohol and the Law (page 23)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=23",
  },
  {
    key: "bac-30-day",
    quote:
      "If you have a BAC of .08 or more, your driver's " +
      "license and driving privileges may be suspended for 30 " +
      "days and you may be subject to criminal penalties.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 3 - Alcohol and the Law (page 23)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=23",
  },
  {
    key: "under-21-arrest",
    quote:
      "In Kansas, if you are under (21), you can also be " +
      "arrested for alcohol impairment at [.02%].",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 3 - Alcohol and the Law (page 23)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=23",
  },
  {
    key: "impairment-first-drink",
    quote:
      "Impairment starts with the first drink. Even one drink " +
      "of alcohol can affect a person's ability to operate a " +
      "motor vehicle.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 3 - Alcohol (page 23)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=23",
  },
  {
    key: "implied-consent",
    quote:
      "Kansas implied consent law is based on the principle " +
      "that when you get your Driver's License, you have " +
      "implicitly consented to a lawfully requested test to " +
      "determine the alcohol content of the blood, breath, " +
      "urine, or other bodily substance if suspected of " +
      "impaired driving.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 3 - Alcohol and the Law (page 24)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=24",
  },
  {
    key: "refusal-one-year",
    quote:
      "You can lose your Driver's License for one year if you " +
      "refuse to take a BAC test.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 3 - Alcohol and the Law (page 24)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=24",
  },
  {
    key: "dui-first-penalty",
    quote:
      "If you are found guilty of an alcohol violation and it " +
      "is your first conviction, you may be fined from $750 - " +
      "$1000 plus court costs. You could be sentenced to a " +
      "minimum of 48 hours in jail or 100 hours of community " +
      "service and your license will be suspended.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 3 - Alcohol and the Law (page 24)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=24",
  },
  {
    key: "otc-drugs",
    quote:
      "Over-the-counter drugs taken for headaches, colds, hay " +
      "fever or other allergies or those to calm nerves can " +
      "make you drowsy and affect your driving.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 3 - Over-the-Counter Drugs (page 24)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=24",
  },
  {
    key: "marijuana-studies",
    quote:
      "studies have shown that people who use marijuana make " +
      "more mistakes, have more trouble adjusting to glare " +
      "and get arrested for traffic violations more than " +
      "other drivers",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 3 - Illegal Drugs (page 24)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=24",
  },
  {
    key: "emotions-driving",
    quote:
      "You may not be able to drive well if you are overly " +
      "worried, excited, afraid, angry, or depressed.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 3 - Emotions (page 25)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=25",
  },
  {
    key: "steering-wheel-position",
    quote:
      "The top of the steering wheel should be no higher than " +
      "the top of your shoulders and below the chin level. " +
      "There should be 10 inches between your body and the " +
      "bottom of the steering wheel.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 4 - Adjusting Seat and Mirrors (page 26)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=26",
  },
  {
    key: "head-restraint",
    quote:
      "To help prevent whiplash the head restraints should be " +
      "adjusted so the head restraint contacts the back of " +
      "your head and not below the level of your ears.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 4 - Adjusting Seat and Mirrors (page 26)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=26",
  },
  {
    key: "mirrors-not-for-backing",
    quote:
      "Passenger vehicle side view mirrors are not designed " +
      "for backing the vehicle.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 4 - Adjusting Seat and Mirrors (page 26)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=26",
  },
  {
    key: "traditional-mirrors",
    quote:
      "adjust the left side view mirror to see the left edge " +
      "of the vehicle and adjust the right-side view mirror " +
      "to see the right edge of the vehicle. This setting may " +
      "be more appropriate for trucks, vans and SUV type " +
      "vehicles when towing or backing in tight areas.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 4 - Traditional Mirror Settings (page 26)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=26",
  },
  {
    key: "belt-law-front-seat",
    quote:
      "In Kansas, it is illegal to drive or to be a " +
      "front-seat passenger without wearing safety belts.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 4 - Using Safety Belts (page 27)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=27",
  },
  {
    key: "crashes-close-to-home",
    quote:
      "More than half of the crashes that cause injury or " +
      "death happen at speeds less than 40 mph and within 25 " +
      "miles from home.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 4 - Using Safety Belts (page 27)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=27",
  },
  {
    key: "shoulder-harness",
    quote:
      "The shoulder harness should not be worn under the arm " +
      "or behind the back.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 4 - Using Safety Belts (page 27)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=27",
  },
  {
    key: "children-under-14-rear",
    quote:
      "The law requires that all children under the age of 14 " +
      "must be secured in the rear seat and wear appropriate " +
      "safety restraints while the vehicle is in motion.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 4 - Using Safety Belts (page 27)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=27",
  },
  {
    key: "airbag-deploys-once",
    quote:
      "Since air bags deploy only once and deflate quickly " +
      "after impact, they will not be helpful during a " +
      "secondary collision.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 4 - Air Bags (page 27)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=27",
  },
  {
    key: "airbag-frontal-only",
    quote:
      "Front air bags are designed to deploy in frontal and " +
      "near-frontal collisions. They are not designed to " +
      "deploy in side impact, rear impact, or rollover " +
      "crashes.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 4 - Air Bags (page 28)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=28",
  },
  {
    key: "airbag-ten-inches",
    quote:
      "In most vehicles, you should adjust your seat so at " +
      "least 10 inches is between the center of your chest " +
      "and the center of the steering wheel.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 4 - Air Bags (page 28)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=28",
  },
  {
    key: "children-12-rear-seat",
    quote:
      "Children age 12 and under should sit in the rear seat " +
      "of the vehicle to avoid injury from an air bag in the " +
      "event of a crash.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 4 - Air Bags (page 28)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=28",
  },
  {
    key: "infant-rear-facing",
    quote:
      "Infants from birth to at least age one, and until they " +
      "are at least 20 pounds should ride in the back seat in " +
      "a properly installed, rear-facing infant seat.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 4 - Child Passenger Safety Laws (page 28)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=28",
  },
  {
    key: "parking-brake-before-start",
    quote:
      "Make sure the parking brake is set before you start " +
      "the vehicle.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 5 - Basic Driving, Starting (page 30)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=30",
  },
  {
    key: "hands-outside-wheel",
    quote:
      "Both hands should be placed on the outside of the " +
      "steering wheel on opposite sides.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 5 - Basic Driving, Steering (page 30)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=30",
  },
  {
    key: "accelerate-poor-traction",
    quote:
      "Increase speed gradually when traction is poor, as in " +
      "rain, snow, or sandy/gravel areas of the roadway.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 5 - Basic Driving, Accelerating (page 30)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=30",
  },
  {
    key: "hand-to-hand",
    quote:
      "When using hand-to-hand steering your left hand grasps " +
      "the wheel between 7 and 8 o'clock and your right hand " +
      "grasps the wheel between 4 and 5 o'clock.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 5 - Types of Steering Methods (page 31)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=31",
  },
  {
    key: "preferred-steering",
    quote:
      "This is the preferred method of steering, 2 and 10 " +
      "o'clock is not recommended because it can be dangerous " +
      "in vehicles equipped with air bags.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 5 - Types of Steering Methods (page 31)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=31",
  },
  {
    key: "hand-over-hand",
    quote:
      "Use hand-over-hand steering when turning the wheel at " +
      "low speeds, such as at an intersection or when parking " +
      "the vehicle.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 5 - Types of Steering Methods (page 31)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=31",
  },
  {
    key: "evasive-180",
    quote:
      "It is critical to limit the steering to not more than " +
      "180 degrees of steering when trying to evade a problem " +
      "on the roadway.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 5 - Types of Steering Methods (page 31)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=31",
  },
  {
    key: "backing-check-behind",
    quote:
      "Check behind your vehicle before you get in. Children " +
      "or small objects cannot be seen from the driver's " +
      "seat.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 5 - Basic Driving, Backing (page 32)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=32",
  },
  {
    key: "backing-12-oclock",
    quote:
      "Grasp the steering wheel at 12 o'clock with your left " +
      "hand. Turn the wheel to the right and place your right " +
      "arm on the back of the seat and look directly through " +
      "the rear window.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 5 - Basic Driving, Backing (page 32)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=32",
  },
  {
    key: "backing-minimize",
    quote:
      "It is hard for you to see behind your vehicle; " +
      "therefore, try to do as little backing as possible.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 5 - Basic Driving, Backing (page 32)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=32",
  },
  {
    key: "row-not-granted",
    quote:
      "The law says who must yield the right-of-way to " +
      "another roadway user; it does not give anyone the " +
      "right-of-way.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Rules of the Road, Right-Of-Way (page 33)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=33",
  },
  {
    key: "yield-pedestrians-always",
    quote:
      "You must yield to pedestrians always. Even if they are " +
      "jaywalking or crossing the street where they should " +
      "not be, you must stop for them.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Rules of the Road, Right-Of-Way (page 33)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=33",
  },
  {
    key: "white-cane-guide-dog",
    quote:
      "Pedestrians using a guide dog or carrying a white cane " +
      "must be given the right-of-way always. Do not use your " +
      "horn as it could confuse or frighten the visually " +
      "impaired pedestrian or guide dog.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Rules of the Road, Right-Of-Way (page 33)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=33",
  },
  {
    key: "uncontrolled-intersection",
    quote:
      "At an uncontrolled intersection, such as in a " +
      "residential area, where there is no stop sign, yield " +
      "sign or traffic signal, you must yield to vehicles in " +
      "the intersection and those coming from the right.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Rules of the Road, Right-Of-Way (page 33)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=33",
  },
  {
    key: "four-way-stop",
    quote:
      "At a 4-way stop, the driver reaching the intersection " +
      "first should be given the right-of-way by other " +
      "drivers approaching the 4-way stop. If more than one " +
      "vehicle arrives at the same time, the vehicle on the " +
      "right goes first.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Rules of the Road, Right-Of-Way (page 33)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=33",
  },
  {
    key: "sidewalk-illegal",
    quote:
      "It is illegal to drive on a sidewalk except to cross " +
      "it, such as at a driveway.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Rules of the Road, Right-Of-Way (page 33)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=33",
  },
  {
    key: "steady-green",
    quote:
      "Steady GREEN Traffic Light - This means you can go " +
      "through the intersection if it is clear to do so.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Traffic Control Devices, Traffic Signals (page 34)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=34",
  },
  {
    key: "green-left-turn",
    quote:
      "Turning left at a steady green traffic light means you " +
      "may turn but only when the intersection is clear to do " +
      "so. You should always yield to the oncoming traffic " +
      "flow and pedestrians.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Traffic Control Devices, Traffic Signals (page 34)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=34",
  },
  {
    key: "green-arrow",
    quote:
      "GREEN Arrow - This means you can safely turn in the " +
      "direction of the arrow, if the intersection is clear " +
      "of other roadway users.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Traffic Control Devices, Traffic Signals (page 34)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=34",
  },
  {
    key: "steady-yellow",
    quote:
      "Steady YELLOW Traffic Light - This means the traffic " +
      "light is about to change to red. You should slow down " +
      "and come to a complete stop if traffic flow to the " +
      "rear allows.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Traffic Control Devices, Traffic Signals (page 34)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=34",
  },
  {
    key: "flashing-yellow",
    quote:
      "Flashing YELLOW Traffic Light - This means slow down " +
      "and proceed with caution. You should be prepared to " +
      "stop for any traffic flow that may be entering the " +
      "intersection.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Traffic Control Devices, Traffic Signals (page 34)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=34",
  },
  {
    key: "yellow-arrow",
    quote:
      "YELLOW Arrow - This means that the green arrow is " +
      "ending; you should prepare to stop and yield the " +
      "right-of-way to oncoming traffic or pedestrians.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Traffic Control Devices, Traffic Signals (page 34)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=34",
  },
  {
    key: "steady-red",
    quote:
      "Steady RED Traffic Light - This means stop prior to " +
      "entering the intersection. You must wait behind the " +
      "stop line, crosswalk, or intersection until the " +
      "traffic light turns green.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Traffic Control Devices, Traffic Signals (page 34)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=34",
  },
  {
    key: "right-on-red",
    quote:
      "When turning right at an intersection, if there is no " +
      "sign prohibiting a right turn on a red light, you may " +
      "turn after stopping and checking for traffic and " +
      "pedestrians.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Traffic Control Devices, Traffic Signals (page 34)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=34",
  },
  {
    key: "left-on-red",
    quote:
      "Some left turns may be permitted on red when moving " +
      "from a one-way street onto another one-way street or " +
      "from a two-way street onto a one-way street.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Traffic Control Devices, Traffic Signals (page 34)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=34",
  },
  {
    key: "flashing-red",
    quote:
      "Flashing RED Traffic Light - This means you must stop " +
      "behind a stop line, crosswalk, or intersection before " +
      "entering and use the same procedure as you would at a " +
      "stop sign, by coming to a complete stop, looking both " +
      "ways before entering the intersection and yielding " +
      "right-of-way.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Traffic Control Devices, Traffic Signals (page 35)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=35",
  },
  {
    key: "red-arrow",
    quote:
      "RED Arrow - This means you must stop, and you may not " +
      "go in the direction of the arrow until the green arrow " +
      "or light returns on the signal.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Traffic Control Devices, Traffic Signals (page 35)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=35",
  },
  {
    key: "warning-signs-shape",
    quote:
      "These signs are usually yellow with black lettering or " +
      "symbols and are diamond shaped. Some warning signs may " +
      "be fluorescent yellow, such as school zones, school " +
      "crossing and pedestrian crossing.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Traffic Signs, Warning Signs (page 35)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=35",
  },
  {
    key: "rr-advance-sign",
    quote:
      "A round yellow warning sign with an \"X\" symbol and " +
      "black \"RR\" letters is placed along the road prior to a " +
      "highway-railroad grade crossing. The sign cautions you " +
      "to slow down, look and listen for a train or railroad " +
      "vehicle and be prepared to stop if a train is " +
      "approaching.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Railroad Crossing Warning Signs (page 36)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=36",
  },
  {
    key: "crossbuck",
    quote:
      "A white, X-shaped sign with \"Railroad Crossing\" " +
      "printed on it is located at the highway-railroad grade " +
      "crossing. You must wait for a train or railroad " +
      "vehicle that is approaching the intersection. Your " +
      "vehicle must remain behind the stop line or prior to " +
      "the intersection until the intersection is clear.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Railroad Crossing Warning Signs (page 36)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=36",
  },
  {
    key: "train-stopping-distance",
    quote:
      "A 100-car freight train traveling at 55 mph will need " +
      "more than a mile to stop, which is about 18 football " +
      "fields, once the train is set into emergency braking.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Railroad Crossing Warning Signs (page 37)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=37",
  },
  {
    key: "cross-tracks-quickly",
    quote:
      "When you need to cross railroad tracks, look both ways " +
      "and cross the tracks quickly, without stopping.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Railroad Crossing Warning Signs (page 37)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=37",
  },
  {
    key: "stalled-on-tracks",
    quote:
      "If you do stall your vehicle when crossing railroad " +
      "tracks, get everyone out of the vehicle and far away " +
      "from the tracks, run in the direction from which the " +
      "train is approaching.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Railroad Crossing Warning Signs (page 37)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=37",
  },
  {
    key: "crossing-gate",
    quote:
      "You may not move around the gate until the gate is " +
      "lifted or the lights have stopped.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Railroad Crossing Warning Signs (page 37)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=37",
  },
  {
    key: "ens-sign",
    quote:
      "The Blue Emergency Notification System (ENS) sign is " +
      "at every highway-rail grade crossing and provides the " +
      "public with a 24/7/365 telephone number to call to " +
      "report problems or emergencies at these railroad " +
      "locations.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Emergency Notification Systems (page 37)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=37",
  },
  {
    key: "no-shift-on-tracks",
    quote:
      "It is wise not to shift gears when crossing railroad " +
      "tracks just in case you might stall.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Railroad Crossing Warning Signs (page 37)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=37",
  },
  {
    key: "work-zone-signs",
    quote:
      "They are generally diamond or rectangular shaped and " +
      "orange with black letters or symbols.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Traffic Signs, Work Zone Signs (page 38)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=38",
  },
  {
    key: "work-zone-barriers",
    quote:
      "Barriers, such as drums, cones, and tubes (panels) are " +
      "used to keep traffic out of hazardous work zones.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Traffic Signs, Work Zone Signs (page 39)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=39",
  },
  {
    key: "work-zone-brake",
    quote:
      "Reduce your speed in work zones and be prepared to " +
      "stop suddenly. Do not tailgate in work zones.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Traffic Signs, Work Zone Signs (page 39)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=39",
  },
  {
    key: "regulatory-signs",
    quote:
      "These signs are square, rectangular, or have a special " +
      "shape and are white with black, red or green letters " +
      "or symbols.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Traffic Signs, Regulatory Signs (page 39)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=39",
  },
  {
    key: "prohibition-signs",
    quote:
      "Some regulatory signs have a red circle with a red " +
      "slash over a symbol. These signs prohibit certain " +
      "actions.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Traffic Signs, Regulatory Signs (page 39)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=39",
  },
  {
    key: "minimum-speed-signs",
    quote:
      "Some high-speed roads have minimum speed limits, and " +
      "you are legally required to travel at least this fast " +
      "so as not to be a hazard to other drivers.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Traffic Signs, Speed Limit Signs (page 39)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=39",
  },
  {
    key: "school-speed-flashing",
    quote:
      "This sign is posted before a school to indicate a " +
      "reduced speed limit in a school zone. The speed limit " +
      "is required only when flashing; otherwise obey the " +
      "roadway's speed limit.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - School Speed Limit When Flashing Sign (page 40)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=40",
  },
  {
    key: "stop-sign-shape",
    quote:
      "A stop sign has eight sides and is red with white " +
      "letters. You must stop behind the stop line or " +
      "crosswalk if one is present.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Traffic Signs, Stop Sign (page 40)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=40",
  },
  {
    key: "yield-sign-shape",
    quote:
      "A yield sign is a red and white downward pointing " +
      "triangle with red letters. It means you must slow down " +
      "and allow traffic that has the right-of-way to cross " +
      "before entering.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Traffic Signs, Yield Sign (page 40)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=40",
  },
  {
    key: "shared-center-sign",
    quote:
      "This sign tells you where a lane is reserved for the " +
      "use of left turning vehicles from either direction and " +
      "is not to be used for through traffic or passing other " +
      "vehicles.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Shared Center Lane Left Turn Only (page 40)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=40",
  },
  {
    key: "no-turn-on-red-sign",
    quote:
      "No Turn on Red - When you see this sign posted, it " +
      "means that you may not turn right or left during the " +
      "red light. You must wait for the traffic signal to " +
      "turn green before turning.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Traffic Signs, No Turn on Red (page 40)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=40",
  },
  {
    key: "do-not-enter",
    quote:
      "Do Not Enter - A square sign with a white horizontal " +
      "line inside a red circle means you cannot enter.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Traffic Signs, Do Not Enter (page 41)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=41",
  },
  {
    key: "wrong-way-sign",
    quote:
      "Wrong Way - This sign tells you that your vehicle is " +
      "moving in the wrong direction. You will see this sign " +
      "on expressway ramps a short distance past the DO NOT " +
      "ENTER sign.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Traffic Signs, Wrong Way (page 41)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=41",
  },
  {
    key: "slower-traffic-keep-right",
    quote:
      "Slower Traffic Keep Right - This sign is posted on a " +
      "multilane highway for those driving slower than the " +
      "normal speed of traffic. It tells the slow driver to " +
      "stay in the right lane.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Traffic Signs, Slower Traffic Keep Right (page 41)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=41",
  },
  {
    key: "pass-with-care",
    quote:
      "Pass with Care - This sign tells you that you are at " +
      "the end of a no passing zone. You may pass only when " +
      "it is safe to do so.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Traffic Signs, Pass with Care (page 41)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=41",
  },
  {
    key: "left-turn-yield-green",
    quote:
      "Left Turn Yield on Green - This sign tells you that a " +
      "left turn is permitted, but you must yield to oncoming " +
      "traffic.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Traffic Signs, Left Turn Yield on Green (page 41)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=41",
  },
  {
    key: "guide-signs",
    quote:
      "Guide Signs - These signs are square and rectangular " +
      "and are green, brown, or blue.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Traffic Signs, Guide Signs (page 42)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=42",
  },
  {
    key: "service-signs",
    quote:
      "Service Signs - These blue signs are square or " +
      "rectangular shaped with white lettering or symbols. " +
      "They show the location of various services such as " +
      "rest areas, gas stations, hotels or hospitals.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Traffic Signs, Service Signs (page 42)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=42",
  },
  {
    key: "exit-side",
    quote:
      "If the word \"Exit\" is written on the left side of an " +
      "exit sign, the exit lane or ramp is to the left, and " +
      "if the word \"Exit\" is written on the right side of an " +
      "exit sign, the exit lane or ramp is to the right.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Traffic Signs, Destination Signs (page 42)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=42",
  },
  {
    key: "incident-signs",
    quote: "These signs are fluorescent pink with black lettering.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Traffic Signs, Incident Signs (page 43)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=43",
  },
  {
    key: "yellow-lines-opposite",
    quote:
      "Lines separating traffic moving in opposite directions " +
      "are yellow.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Pavement Markings, Yellow Lane Markings (page 43)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=43",
  },
  {
    key: "dashed-yellow",
    quote:
      "Dashed yellow lines between opposing lanes of traffic " +
      "mean that you may pass if a safe gap in traffic is " +
      "available.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Pavement Markings, Yellow Lane Markings (page 43)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=43",
  },
  {
    key: "solid-and-dashed",
    quote:
      "Where there is both a solid and a dashed yellow line " +
      "between opposing lanes of traffic you should not pass " +
      "if the solid yellow line is on your side. If the " +
      "dashed line is on your side, you may pass if a safe " +
      "gap in traffic is available.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Pavement Markings, Yellow Lane Markings (page 43)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=43",
  },
  {
    key: "double-solid-yellow",
    quote:
      "Two solid yellow lines between lanes of traffic means " +
      "neither side may pass. You may cross a solid yellow " +
      "line to turn when gaps in traffic flow exist.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Pavement Markings, Yellow Lane Markings (page 43)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=43",
  },
  {
    key: "white-lines",
    quote:
      "Multiple lanes of travel in the same direction are " +
      "separated by white lane markings. A dashed white line " +
      "between lanes of traffic means that you may cross it " +
      "to change lanes if a safe gap in traffic is available.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Pavement Markings, White Lane Markings (page 43)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=43",
  },
  {
    key: "crosswalk-yield",
    quote:
      "Crosswalks define the area where pedestrians may cross " +
      "the roadway. You must yield to pedestrians entering or " +
      "in a crosswalk. Not all crosswalks are marked.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Crosswalks and Stop Lines (page 44)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=44",
  },
  {
    key: "stop-line-first",
    quote:
      "If there is a stop line before the crosswalk, the stop " +
      "line must be obeyed first.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Crosswalks and Stop Lines (page 44)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=44",
  },
  {
    key: "leaving-driveway-stop",
    quote:
      "If you are leaving a driveway, alley or building area, " +
      "such as a gas station, store, or restaurant it is " +
      "required that you stop just as you would if there was " +
      "a stop sign. You should stop behind the sidewalk, and " +
      "you must yield the right-of-way to all pedestrians and " +
      "traffic.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Crosswalks and Stop Lines (page 44)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=44",
  },
  {
    key: "shared-center-lane",
    quote:
      "The solid yellow centerline means you cannot use the " +
      "center lane for passing. The broken yellow centerlines " +
      "show that vehicles traveling in either direction may " +
      "use the center lane only to make left turns.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Other Lane Controls, Shared Center Left Turn Lane (page 44)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=44",
  },
  {
    key: "center-lane-too-soon",
    quote:
      "When using a shared left turn lane do not move into " +
      "the lane too soon. The longer you stay in the lane, " +
      "the more likely you will meet someone coming in the " +
      "opposite direction.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Other Lane Controls, Shared Center Left Turn Lane (page 44)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=44",
  },
  {
    key: "reversible-lanes",
    quote:
      "A green arrow means you can use the lane beneath it; a " +
      "red \"X\" means the lane is not available. A flashing " +
      "yellow \"X\" means the lane is for turning only. A " +
      "steady yellow \"X\" means that the use of the lane is " +
      "changing, and you should move out of it as soon as it " +
      "is safe to do so.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Other Lane Controls, Reversible Lanes (page 45)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=45",
  },
  {
    key: "hov-lanes",
    quote:
      "HOV signs or markings mean \"High Occupancy Vehicles\" " +
      "and indicate lanes reserved for vehicles with two or " +
      "more people in them.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Other Lane Controls, Reserved Lanes (page 45)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=45",
  },
  {
    key: "reserved-lane-diamond",
    quote:
      "Reserved lanes are marked by special lane marking " +
      "signs stating that the lane is reserved for special " +
      "use and often have a white diamond posted at the side " +
      "of the road or painted on the road surface.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Other Lane Controls, Reserved Lanes (page 45)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=45",
  },
  {
    key: "no-backing-travel-lane",
    quote:
      "It is illegal and unsafe to back a vehicle in any " +
      "travel lane except to parallel park.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - General Rules, General Driving (page 45)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=45",
  },
  {
    key: "no-stopping-travel-lane",
    quote:
      "Do not stop in travel lanes or on the shoulder for any " +
      "reason (confusion, breakdown, letting out a " +
      "passenger).",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - General Rules, General Driving (page 45)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=45",
  },
  {
    key: "keep-right-except-pass",
    quote:
      "When driving on a road with two or more lanes " +
      "traveling in the same direction, stay in the right " +
      "lane, except to pass.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - General Rules, General Driving (page 46)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=46",
  },
  {
    key: "three-lanes-center",
    quote:
      "On a road with three or more lanes traveling in the " +
      "same direction, use the center travel lane, especially " +
      "when there is a lot of traffic entering or exiting the " +
      "traffic flow.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - General Rules, General Driving (page 46)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=46",
  },
  {
    key: "left-lane-passing",
    quote:
      "On multi-lane roads, the left-most lane is intended to " +
      "be used for passing slower vehicles.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - General Rules, Passing (page 46)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=46",
  },
  {
    key: "never-pass-shoulder",
    quote:
      "Never pass on the shoulder, whether it is paved or " +
      "not.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - General Rules, Passing (page 46)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=46",
  },
  {
    key: "turn-closest-lane",
    quote:
      "As a safety precaution, turn into the closest lane to " +
      "you that is going in the direction you want to go. " +
      "This way, you will cross the fewest lanes of traffic.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - General Rules, Turning (page 46)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=46",
  },
  {
    key: "right-turn-no-swing",
    quote:
      "On right turns, avoid swinging wide to the left before " +
      "making the turn. When moving into the other lane, the " +
      "driver behind you may think you are changing lanes or " +
      "going to turn left and may try to pass you on the " +
      "right.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - General Rules, Right turns (page 46)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=46",
  },
  {
    key: "turnabout-around-block",
    quote:
      "The safest way to change direction is to turn right " +
      "and go around the block. This avoids most left turns " +
      "across traffic.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - General Rules, Turnabouts (page 47)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=47",
  },
  {
    key: "no-median-crossing",
    quote:
      "It is illegal to cross the median strip or to use the " +
      "crossover areas reserved for emergency vehicles.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - General Rules, Turnabouts (page 47)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=47",
  },
  {
    key: "left-turn-leftmost",
    quote:
      "Always turn left from the left-most lane or when lane " +
      "markings indicate multiple lanes can be used for a " +
      "left turn at the same time.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - General Rules, Left turns (page 47)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=47",
  },
  {
    key: "lane-one-block",
    quote:
      "At least one block before turning, identify and enter " +
      "the lane from which you will turn.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - General Rules, Multiple lanes turning (page 47)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=47",
  },
  {
    key: "three-point-turnabout",
    quote:
      "Three-Point Turnabout - This is the most difficult and " +
      "dangerous way to perform a turnabout. Use it only when " +
      "the road or street is too narrow to make a U-turn and " +
      "you cannot go around the block.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - General Rules, Turnabouts (page 48)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=48",
  },
  {
    key: "two-point-back-in",
    quote:
      "The safest way to perform a two-point turnabout is to " +
      "back the vehicle into the driveway.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - General Rules, Turnabouts (page 48)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=48",
  },
  {
    key: "roundabout-yield",
    quote:
      "Vehicles travel counterclockwise around a raised " +
      "center island, with entering traffic yielding the " +
      "right-of-way to circulating traffic.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Roundabouts and Traffic Circles (page 49)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=49",
  },
  {
    key: "roundabout-speed",
    quote:
      "When entering the roundabout or traffic circle you " +
      "must negotiate a sharp curve. Slow your speed to about " +
      "15 to 20 mph.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Roundabouts and Traffic Circles (page 49)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=49",
  },
  {
    key: "roundabout-same-time",
    quote:
      "If another vehicle arrives at the traffic circle at " +
      "the same time as you do, yield to the vehicle if it is " +
      "on your right.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Roundabouts and Traffic Circles (page 49)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=49",
  },
  {
    key: "u-turn-far-right",
    quote:
      "If you must make a U-turn, move as far to the right as " +
      "you can.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - General Rules, U-Turns (page 49)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=49",
  },
  {
    key: "roundabout-left-signal",
    quote:
      "If you intend to turn left, once you have traveled " +
      "three quarters of the way around the traffic circle or " +
      "roundabout, signal \"right\" to take the exit.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Roundabouts and Traffic Circles (page 50)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=50",
  },
  {
    key: "bus-red-lights",
    quote:
      "You must stop for a school bus that is stopped with " +
      "its red lights flashing and/or stop arm extended.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Rules for School Buses (page 50)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=50",
  },
  {
    key: "bus-after-lights",
    quote:
      "After the school bus red lights have stopped flashing " +
      "and the stop arm is no longer visible, watch for " +
      "children along the side of the road and do not proceed " +
      "until it is safe, after they have completely left the " +
      "roadway.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Rules for School Buses (page 50)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=50",
  },
  {
    key: "bus-two-yellow-lines",
    quote:
      "You must stop for a school bus when there are two " +
      "solid yellow lines between lanes of traffic whether " +
      "the school bus is on your side of the road or on the " +
      "opposite side of the road.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Rules for School Buses (page 50)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=50",
  },
  {
    key: "roundabout-large-vehicles",
    quote:
      "Do not drive alongside large vehicles, such as trucks " +
      "and buses in a traffic circle or roundabout.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Roundabouts and Traffic Circles (page 50)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=50",
  },
  {
    key: "bus-center-turn-lane",
    quote:
      "You must stop for a school bus when there is a center " +
      "turning lane between the roadways, whether the school " +
      "bus is on your side of the road or on the opposite " +
      "side of the road.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Rules for School Buses (page 51)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=51",
  },
  {
    key: "bus-multi-lane",
    quote:
      "You must stop for a school bus when you are on a " +
      "multi-lane highway, whether the school bus is on your " +
      "side of the road or on the opposite side of the road.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Rules for School Buses (page 51)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=51",
  },
  {
    key: "bus-intersection",
    quote:
      "You must stop for a school bus when you are at an " +
      "intersection, whether the school bus is on your side " +
      "of the road or on the opposite side of the road.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Rules for School Buses (page 51)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=51",
  },
  {
    key: "bus-median-exception",
    quote:
      "You are not required to stop if the bus is traveling " +
      "towards you and the roadway is separated by a median " +
      "or other physical barrier.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Rules for School Buses (page 52)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=52",
  },
  {
    key: "parked-vehicle-hazard",
    quote:
      "A parked vehicle must be in a place that is (1) far " +
      "enough from any travel lane to avoid interfering with " +
      "traffic and (2) visible to vehicles approaching from " +
      "either direction.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Parking (page 52)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=52",
  },
  {
    key: "set-parking-brake",
    quote:
      "Always set your parking brake when you park. Then " +
      "place the vehicle in gear if it has a manual " +
      "transmission or in \"park\" if it has an automatic " +
      "transmission.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Securing and Entering the Vehicle (page 52)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=52",
  },
  {
    key: "never-leave-keys",
    quote:
      "Never leave the ignition keys in a parked vehicle. It " +
      "is a good habit to lock the doors whenever you leave " +
      "your vehicle.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Securing and Entering the Vehicle (page 52)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=52",
  },
  {
    key: "park-downhill",
    quote:
      "Stop when the tire closest to the side of the road " +
      "reaches the edge of the road or just as it touches the " +
      "curb, using it as a block. This way, if your vehicle " +
      "starts to roll down the hill, it will roll away from " +
      "traffic.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Parking Downhill with/without a Curb (page 52)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=52",
  },
  {
    key: "park-uphill-curb",
    quote:
      "Parking Uphill with a Curb - When parking your vehicle " +
      "on an uphill with a curb, bring the vehicle to a stop " +
      "parallel to and within 12 inches of the curb. Move " +
      "slowly forward turning the steering wheel sharply away " +
      "from the curb. Stop then allow the vehicle to roll " +
      "slowly back until the tire touches the curb and stop.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Parking Uphill with a Curb (page 52)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=52",
  },
  {
    key: "approach-driver-door",
    quote:
      "When entering your vehicle on the street, approach the " +
      "driver's door with your key in hand from the front of " +
      "the vehicle to increase awareness of oncoming traffic.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Securing and Entering the Vehicle (page 52)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=52",
  },
  {
    key: "park-uphill-no-curb",
    quote:
      "Parking Uphill Without a Curb - When parking your " +
      "vehicle on an uphill and there is no curb, bring the " +
      "vehicle to a stop parallel to and within 12 inches of " +
      "the edge of the road. Move slowly forward turning the " +
      "steering wheel sharply toward the edge of the road.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Parking Uphill Without a Curb (page 53)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=53",
  },
  {
    key: "parallel-park-bumper",
    quote:
      "Continue backing until your front bumper is in line " +
      "with the rear bumper of the vehicle you are parking " +
      "behind.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Parallel Parking (page 54)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=54",
  },
  {
    key: "no-park-list",
    quote:
      "Within 30 ft. of a traffic signal, stop sign or yield " +
      "sign Within 30 ft. of a pedestrian safety zone Within " +
      "15 ft. of a fire hydrant Within 50 ft. of a " +
      "highway-railroad grade crossing More than 1 ft. from " +
      "the curb",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - No-Parking Zones (page 54)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=54",
  },
  {
    key: "no-park-against-traffic",
    quote:
      "On the opposite side of the street against traffic " +
      "flow",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - No-Parking Zones (page 54)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=54",
  },
  {
    key: "painted-curbs",
    quote:
      "White - indicates that only short stops are permitted " +
      "Yellow - indicates a loading zone or some other " +
      "restriction Blue - indicates a handicap restriction " +
      "Red - indicates fire zone restrictions",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - No-Parking Zones (page 55)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=55",
  },
  {
    key: "look-ahead-blocks",
    quote:
      "In the city, you should look at least two blocks or " +
      "two traffic signals ahead. In an urban area, you " +
      "should look at least three blocks or three traffic " +
      "signals ahead. On the highway, you should look at " +
      "least a quarter of a mile ahead.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Visual Search, Scanning (page 56)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=56",
  },
  {
    key: "visual-lead",
    quote:
      "A visual lead is an area 20 to 30 seconds ahead from " +
      "the front of the vehicle.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Seeing Well Ahead in the Travel Path (page 56)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=56",
  },
  {
    key: "stale-green",
    quote:
      "If you see a traffic light that has been green for a " +
      "long time, it may change to red before you get there. " +
      "Therefore, you should start slowing down and be ready " +
      "to stop.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Visual Search, Scanning (page 56)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=56",
  },
  {
    key: "stopping-60-30",
    quote:
      "At 60 mph, it can take about 4 to 5 seconds or 359 " +
      "feet to react to a problem and bring the vehicle to a " +
      "stop.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Seeing Well Ahead in the Travel Path (page 57)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=57",
  },
  {
    key: "see-400-feet",
    quote:
      "At 60 mph if you cannot see at least 400 feet ahead, " +
      "you are driving too fast for your visibility. At 30 " +
      "mph if you cannot see at least 150 feet ahead, you may " +
      "not be driving safely.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Seeing Well Ahead in the Travel Path (page 57)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=57",
  },
  {
    key: "look-left-right-left",
    quote:
      "If stopped, look left, right and left again before " +
      "entering the intersection.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Visual Search, Intersections (page 57)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=57",
  },
  {
    key: "edge-forward",
    quote:
      "If you are stopped and your view of traffic or a cross " +
      "street is blocked, edge forward slowly until you can " +
      "see. By moving forward slowly, crossing drivers can " +
      "see the front of your vehicle before you can see them. " +
      "This gives them a chance to slow down and warn you if " +
      "needed.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Crossing an Intersection (page 57)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=57",
  },
  {
    key: "turning-right-check",
    quote:
      "Before turning right, make sure that there is no " +
      "traffic approaching from your left and no oncoming " +
      "traffic turning left into your path.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Visual Search, Turning Right (page 57)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=57",
  },
  {
    key: "blind-spots",
    quote:
      "Check your \"blind spots\" by turning your head and " +
      "looking over your shoulder in the direction you plan " +
      "to move. Blind spots are areas around your vehicle " +
      "that you cannot see with your mirrors.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - When changing lanes (page 58)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=58",
  },
  {
    key: "lane-change-gap",
    quote:
      "Identify a 4 to 5 second gap in traffic, signal and " +
      "look again in the direction of the lane change.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - When changing lanes (page 58)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=58",
  },
  {
    key: "perception-distance",
    quote:
      "Perception distance is how far your vehicle travels, " +
      "in ideal conditions, from the time your eyes see a " +
      "hazard until your brain recognizes it.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Speed Management, Stopping (page 58)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=58",
  },
  {
    key: "reaction-distance",
    quote:
      "Reaction distance is how far you will continue to " +
      "travel, in ideal conditions; before you physically hit " +
      "the brakes, in response to a hazard seen ahead. The " +
      "average driver has a reaction time of ¾ second to 1 " +
      "second. At 50 mph this accounts for 55 feet traveled.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Speed Management, Stopping (page 58)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=58",
  },
  {
    key: "braking-distance",
    quote:
      "Braking distance is how far your vehicle will travel, " +
      "in ideal conditions, while you are braking. At 50 mph " +
      "on dry pavement with good brakes, it can take about " +
      "158 feet.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Speed Management, Stopping (page 58)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=58",
  },
  {
    key: "total-stopping-268",
    quote:
      "Total stopping distance is the total minimum distance " +
      "your vehicle has traveled, in ideal conditions, with " +
      "everything considered, including perception distance, " +
      "reaction distance and braking distance, until you can " +
      "bring your vehicle to a complete stop. At 50 mph, your " +
      "vehicle will travel a minimum of 268 feet.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Speed Management, Stopping (page 58)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=58",
  },
  {
    key: "double-speed-impact",
    quote:
      "When you double your speed from 20 to 40 mph the " +
      "impact is 4 times greater. The braking distance is " +
      "also 4 times longer.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Speed Management, Stopping (page 59)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=59",
  },
  {
    key: "sixty-football-field",
    quote:
      "At 60 mph, your stopping distance is greater than that " +
      "of a football field.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Speed Management, Stopping (page 59)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=59",
  },
  {
    key: "ten-seconds-ahead",
    quote:
      "Look at least ten seconds ahead of your vehicle to " +
      "avoid panic stops by seeing events and problems well " +
      "ahead of time.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Speed Management, Stopping (page 59)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=59",
  },
  {
    key: "first-rain-slippery",
    quote:
      "Reduce speed at the first sign of rain, snow or sleet. " +
      "Roadways are more slippery when it first starts to " +
      "rain, snow or sleet as the water will mix with dirt, " +
      "oil and other substances on the roadway.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Adjusting to Roadway Conditions (page 59)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=59",
  },
  {
    key: "wet-reduce-10",
    quote:
      "On wet roadways you should reduce speed about 10 mph " +
      "below recommended speeds to allow for additional " +
      "stopping distance and potential traction loss while " +
      "steering. If there is packed snow on the road, reduce " +
      "your speed by half or more.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Adjusting to Roadway Conditions (page 59)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=59",
  },
  {
    key: "studded-tires",
    quote:
      "Vehicles in Kansas may be equipped with studded snow " +
      "tires from November 1st to April 1st each year.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Adjusting to Roadway Conditions (page 59)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=59",
  },
  {
    key: "curve-reduce-before",
    quote:
      "Always reduce speed prior to entering the curve to a " +
      "safe speed (a speed that allows you to apply slight " +
      "and constant acceleration through the curve).",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Adjusting to Roadway Conditions, Curves (page 59)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=59",
  },
  {
    key: "bridges-freeze",
    quote:
      "The roadway pavement on bridges overpasses and " +
      "underpasses can be ice-covered even when other roadway " +
      "pavement is clean and clear of ice.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Adjusting to Roadway Conditions (page 60)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=60",
  },
  {
    key: "hydroplaning-35",
    quote:
      "However, as you go faster than 35 mph, the steering " +
      "tires will start to ride up on any pooled water, " +
      "similar to the action of water skis. This tire loss of " +
      "roadway contact is called \"hydroplaning.\"",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Water on the roadway (page 60)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=60",
  },
  {
    key: "hydroplane-45-50",
    quote:
      "In a heavy rain, your tires can lose all traction with " +
      "the road at 45-50 mph due to the water pushing against " +
      "the tires as the vehicle is moving forward. Badly worn " +
      "tires will lose traction at much lower speeds (25-30 " +
      "mph).",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Water on the roadway (page 60)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=60",
  },
  {
    key: "fifteen-slower",
    quote:
      "Driving more than 15 mph slower than the traffic flow " +
      "pattern can be just as dangerous as excessive speed.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Adjusting to Traffic Conditions (page 60)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=60",
  },
  {
    key: "acceleration-lane",
    quote:
      "Use the acceleration lane to reach the speed of other " +
      "vehicles before pulling onto the roadway.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Entering traffic flow (page 60)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=60",
  },
  {
    key: "shady-spots",
    quote:
      "Shady spots can be ice-covered on cold, wet days " +
      "because shade-covered areas often freeze first and dry " +
      "out last on the roadway.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Adjusting to Roadway Conditions (page 60)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=60",
  },
  {
    key: "exit-half-mile",
    quote:
      "Since it is frequently difficult to change lanes, plan " +
      "to get into the proper lane about one-half mile before " +
      "the exit.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Exiting traffic flow (page 60)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=60",
  },
  {
    key: "deceleration-lane",
    quote:
      "When using a deceleration lane (exit ramp), do not " +
      "slow down until the vehicle has moved onto the " +
      "deceleration lane.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Exiting traffic flow (page 61)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=61",
  },
  {
    key: "snowstorm-55",
    quote:
      "Driving 55 mph in a snowstorm is not recognized as an " +
      "acceptable speed for a snowy roadway, even if the " +
      "posted speed limit allows for 55 mph.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Obeying Appropriate Speed Limits (page 62)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=62",
  },
  {
    key: "abs-search-stomp-steer",
    quote:
      "The basics for ABS usage are Search (for open space), " +
      "Stomp (on the brake pedal firmly), Steer (to the open " +
      "space).",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Traction Technology (page 62)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=62",
  },
  {
    key: "abs-wet-surfaces",
    quote:
      "ABS does not necessarily shorten stopping distances on " +
      "dry pavement, but generally shortens stopping " +
      "distances on wet surfaces where traction loss can be a " +
      "serious problem.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Traction Technology (page 62)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=62",
  },
  {
    key: "abs-light",
    quote:
      "When you start your vehicle the ABS light will " +
      "illuminate and then dim. If you see an ABS indicator " +
      "light, then you have ABS. If the light stays lit the " +
      "ABS is not working correctly.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Traction Technology (page 62)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=62",
  },
  {
    key: "suv-rollover",
    quote:
      "Larger vehicles with a higher center of gravity have " +
      "special handling characteristics and are more prone to " +
      "rollovers.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Special Handling Characteristics (page 62)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=62",
  },
  {
    key: "rear-end-intersections",
    quote:
      "Rear-end crashes are very common at intersections. " +
      "Drivers following too closely, and then being unable " +
      "to stop before hitting the vehicle ahead when it stops " +
      "too quickly, cause these types of crashes.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Space Management, Space Ahead (page 62)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=62",
  },
  {
    key: "min-two-second",
    quote:
      "Keep a minimum following distance of two seconds with " +
      "an additional second for any unusual weather or " +
      "traffic conditions.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Space Management, Space Ahead (page 62)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=62",
  },
  {
    key: "counting-following",
    quote:
      "You are following too closely if you pass the " +
      "stationary point before counting to one-thousand-two.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Space Management, Space Ahead (page 63)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=63",
  },
  {
    key: "motorcycle-space",
    quote:
      "Keep more space in front of your vehicle when " +
      "following motorcycles. Motorcycles are different sizes " +
      "and have different braking capabilities than other " +
      "motor vehicles. If the motorcycle should fall, your " +
      "vehicle needs extra stopping or steering distance to " +
      "avoid the rider.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Space Management, Space Ahead (page 63)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=63",
  },
  {
    key: "emergency-500-feet",
    quote:
      "Many states require other vehicles to stay at least " +
      "500 feet to the rear of emergency equipment that is a " +
      "minimum of 12 seconds at 30 mph and a minimum of 6 " +
      "seconds at speeds of 60 mph.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Space Management, Space Ahead (page 63)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=63",
  },
  {
    key: "hill-rollback",
    quote:
      "Leave extra space in front of your vehicle when " +
      "stopped behind another vehicle on a hill or incline. " +
      "The vehicle ahead may roll back before it begins to " +
      "move forward.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Space Management, Space Ahead (page 63)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=63",
  },
  {
    key: "tailgater",
    quote:
      "Never slow down quickly to discourage a tailgater, as " +
      "this action will increase the risk of being hit from " +
      "behind and could lead to aggressive driving.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Space Behind Affects Your Following Interval (page 64)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=64",
  },
  {
    key: "tailgated-add-seconds",
    quote:
      "If your vehicle is being followed too closely increase " +
      "your following distance by 2 to 3 seconds to allow for " +
      "more time and space to stop.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Space Behind Affects Your Following Interval (page 64)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=64",
  },
  {
    key: "space-parked-cars",
    quote:
      "Keep extra space between your vehicle and parked cars " +
      "by moving to the left portion of your lane space " +
      "without crossing the centerline.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Space to the Side (page 64)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=64",
  },
  {
    key: "merge-gap-4-6",
    quote:
      "When merging with other traffic flow, select a gap in " +
      "the traffic flow of 4 to 6 seconds.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Space to Merge (page 64)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=64",
  },
  {
    key: "cross-lanes-one-at-a-time",
    quote:
      "If crossing several lanes is necessary, change lanes " +
      "one at a time as it is very difficult to determine " +
      "that all the lanes are free and safe to cross and can " +
      "create traffic congestion and cause multiple crashes.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Space to Merge (page 64)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=64",
  },
  {
    key: "cross-intersection-3-5",
    quote:
      "When going straight after stopping at an intersection, " +
      "under normal circumstances, a vehicle can get through " +
      "an intersection within 3 to 5 seconds.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Space to Cross or Enter (page 65)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=65",
  },
  {
    key: "turn-time-needed",
    quote:
      "Under normal circumstances, a vehicle can complete a " +
      "right turn and pick up speed within 12 to 15 seconds, " +
      "while it may take 15 to 18 seconds to complete a left " +
      "turn and get up to speed.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Space to Cross or Enter (page 65)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=65",
  },
  {
    key: "dont-trust-signal",
    quote:
      "Do not turn into a lane just because an approaching " +
      "vehicle has a turn signal active. The driver with an " +
      "active turn signal may plan to turn after they go past " +
      "your vehicle or may have forgotten to turn the signal " +
      "off from a prior turn.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Space to Cross or Enter (page 65)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=65",
  },
  {
    key: "pass-one-at-a-time",
    quote:
      "As a rule, only pass one vehicle at a time since it is " +
      "difficult to determine the amount of time needed to " +
      "pass, which may be as many as 20 to 30 seconds.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Space to Pass (page 66)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=66",
  },
  {
    key: "oncoming-25-seconds",
    quote:
      "An oncoming vehicle that is more than 25 seconds from " +
      "your vehicle generally appears to be standing still.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Space to Pass, Oncoming vehicles (page 66)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=66",
  },
  {
    key: "pass-hills-curves",
    quote:
      "you should treat a curve or a hill as an oncoming " +
      "vehicle and should not start to pass when within 1/3 " +
      "of a mile of a hill or curve ahead",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Space to Pass, Hills and curves (page 66)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=66",
  },
  {
    key: "pass-railroad",
    quote:
      "You should not pass if there is a railroad grade " +
      "crossing within the 20 to 25 second area ahead.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Space to Pass, Highway-railroad grade crossings (page 66)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=66",
  },
  {
    key: "pass-space-return",
    quote:
      "Do not pass unless you have enough space to return to " +
      "the driving lane. Do not count on other drivers to " +
      "make space for you.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Space to Pass, Space to return (page 66)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=66",
  },
  {
    key: "pass-intersections",
    quote:
      "It is dangerous and illegal to pass where a vehicle is " +
      "likely to enter or cross the roadway.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Space to Pass, Intersections (page 66)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=66",
  },
  {
    key: "wipers-headlights",
    quote:
      "Many states including Kansas require you to turn on " +
      "your headlights whenever the wipers are used on the " +
      "vehicle.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Communicating, Use headlights (page 67)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=67",
  },
  {
    key: "headlights-always",
    quote:
      "Always turn your headlights on to help other roadway " +
      "users see your vehicle more clearly.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Communicating, Use headlights (page 67)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=67",
  },
  {
    key: "horn-light-tap",
    quote:
      "A light tap on the horn should be all that is needed " +
      "under normal circumstances.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Communicating, Using your horn (page 68)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=68",
  },
  {
    key: "horn-emergency-only",
    quote:
      "A horn should only be used in emergency situations. " +
      "There are several occasions when you should not use " +
      "your horn.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Communicating, Not using your horn (page 68)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=68",
  },
  {
    key: "headlights-dusk",
    quote:
      "Turn on your headlights when it begins to get dark. " +
      "Some newer vehicles have automatic sensors for turning " +
      "on lights. Turning the headlights on a little early " +
      "will help other drivers to see your vehicle.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Communicating, Use headlights (page 68)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=68",
  },
  {
    key: "headlights-sun",
    quote:
      "When driving away from a rising or setting sun, turn " +
      "on your headlights. Drivers coming towards you may " +
      "have trouble seeing your vehicle. Your headlights will " +
      "help them see your vehicle.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Communicating, Use headlights (page 68)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=68",
  },
  {
    key: "flares-200-300",
    quote:
      "Place emergency flares about 200 to 300 feet behind " +
      "the vehicle, giving other drivers some time to change " +
      "lanes if necessary.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Communicating, Use emergency signals (page 69)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=69",
  },
  {
    key: "signal-urban-highway",
    quote:
      "In urban areas signal 100 feet or 3 to 5 seconds " +
      "before making a turn or a lane change.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Signaling Your Movements (page 69)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=69",
  },
  {
    key: "white-cloth",
    quote:
      "A white cloth attached to a vehicle indicates a " +
      "disabled vehicle is present, so tie a white cloth to " +
      "the antenna, side mirror or door handle to signal an " +
      "emergency.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Communicating, Use emergency signals (page 69)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=69",
  },
  {
    key: "signal-3-4-seconds",
    quote:
      "Signal at least 3 to 4 seconds before you make your " +
      "move, so other roadway users can respond to your " +
      "change in direction.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Signal prior to changing direction (page 69)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=69",
  },
  {
    key: "tap-brake-warn",
    quote:
      "When stopping or reducing speed at a place where " +
      "another driver may not expect it, tap the brake pedal " +
      "three or four times lightly to warn other roadway " +
      "users.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Signal when reducing speeds (page 70)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=70",
  },
  {
    key: "licence-privilege",
    quote:
      "Having a Driver's License is a privilege, not a right. " +
      "You must have a Driver's License to operate a vehicle " +
      "of any kind on a public highway or parking facility.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Driver Awareness (page 70)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=70",
  },
  {
    key: "cancel-signal",
    quote:
      "Drivers must cancel the signal if it has not cancelled " +
      "by itself, so other roadway users do not become " +
      "confused by an incorrect signal.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 7 - Signal prior to changing direction (page 70)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=70",
  },
  {
    key: "three-options",
    quote:
      "In avoiding a collision, you have three options: " +
      "brake, steer or accelerate.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 8 - Avoiding Collisions (page 73)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=73",
  },
  {
    key: "abs-press-hard",
    quote:
      "Press on the brake pedal as hard as you can and keep " +
      "pressing on it. You might feel the brake pedal pushing " +
      "back when the ABS is working.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 8 - Braking Quickly (page 73)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=73",
  },
  {
    key: "steer-quicker",
    quote:
      "In most cases, you can steer the vehicle quicker than " +
      "you can stop it.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 8 - Steering Quickly (page 73)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=73",
  },
  {
    key: "no-abs-braking",
    quote:
      "Apply the brakes as hard as you can without locking " +
      "them. If the brakes lock-up, you will feel the vehicle " +
      "start to skid. Ease up on the brake pedal and then " +
      "reapply with control.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 8 - Braking Quickly (page 73)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=73",
  },
  {
    key: "skid-causes",
    quote:
      "Skids are caused when you are traveling too fast for " +
      "conditions, when you stop too suddenly or when the " +
      "tires can no longer grip the roadway.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 8 - Dealing with Skids (page 74)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=74",
  },
  {
    key: "recognize-traction-loss",
    quote:
      "If the vehicle continues straight while steering, " +
      "traction is lost to the front tires. If the vehicle is " +
      "moving sideways without any additional steering input, " +
      "the rear tires have lost traction.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 8 - Dealing with Skids (page 74)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=74",
  },
  {
    key: "rear-skid-steer",
    quote:
      "If rear traction is lost, turn the steering wheel in " +
      "the direction of the intended path of travel (the " +
      "direction you want to go) and continue to steer and " +
      "counter-steer until the vehicle is traveling straight.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 8 - Dealing with Skids (page 74)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=74",
  },
  {
    key: "hit-from-rear",
    quote:
      "If your vehicle is hit from the rear, your head and " +
      "body will be thrown backwards. Press yourself against " +
      "the back of your seat and put your head against the " +
      "head restraint.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 8 - Protect Yourself in Collisions (page 74)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=74",
  },
  {
    key: "brake-failure",
    quote:
      "Rapidly pump the brake pedal several times. This will " +
      "often build up enough brake pressure to allow you to " +
      "stop.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 8 - Emergencies, Brake Failure (page 75)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=75",
  },
  {
    key: "front-blowout",
    quote:
      "If a front tire blows out, the vehicle will pull " +
      "sharply in the direction of the blowout.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 8 - Emergencies, Tire Blowout (page 75)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=75",
  },
  {
    key: "blowout-response",
    quote:
      "Grip the steering wheel firmly and keep the vehicle " +
      "going straight. Slow down gradually. Take your foot " +
      "off the accelerator pedal. Do not brake.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 8 - Emergencies, Tire Blowout (page 75)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=75",
  },
  {
    key: "power-failure",
    quote:
      "Shift to neutral and look for an escape path. Do not " +
      "brake hard, brake with steady pressure on the pedal, " +
      "slow down then pull off the roadway.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 8 - Emergencies, Power Failure (page 75)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=75",
  },
  {
    key: "accelerator-failure",
    quote:
      "Shift to neutral and search for an escape path. Steer " +
      "smoothly, brake gently and pull off the roadway. Turn " +
      "off vehicle and have the pedal repaired at a service " +
      "center before driving again.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 8 - Emergencies, Accelerator Failure (page 75)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=75",
  },
  {
    key: "drop-off-25",
    quote:
      "Steer straight ahead and slow to 25 mph or less. " +
      "Straddle the pavement edge, which will keep the inside " +
      "edge of your tires from rubbing. It will also help you " +
      "to approach the edge at a higher angle, which helps " +
      "the tire to return to the road surface.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 8 - Uneven Surface Drop-Offs (page 76)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=76",
  },
  {
    key: "rollover-80-percent",
    quote:
      "More than 80% of all rollovers involve no other " +
      "vehicle besides the one that rolls over.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 8 - Rollovers (page 76)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=76",
  },
  {
    key: "rollover-one-in-three",
    quote:
      "Even though only about one of every forty vehicles " +
      "involved in a police reported crash has rolled over, " +
      "one of every three passenger vehicle occupant deaths " +
      "occur in rollovers.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 8 - Rollovers (page 76)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=76",
  },
  {
    key: "dont-jerk-wheel",
    quote:
      "If your vehicle leaves the paved road surface, slow " +
      "down gradually, but do not jerk the steering wheel to " +
      "get the vehicle back on the pavement.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 8 - Rollovers (page 76)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=76",
  },
  {
    key: "low-beam-distance",
    quote:
      "Your lower beam headlights will let you see clearly " +
      "about 150 to 200 feet ahead. Driving at a speed that " +
      "allows you to stop within this distance is about 45 " +
      "mph.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 8 - Vision Limitations (page 77)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=77",
  },
  {
    key: "high-beam-distance",
    quote:
      "Your high beam headlights will let you see clearly " +
      "about 350 to 400 feet ahead. Driving at a speed that " +
      "allows you to stop within this distance is about 65 " +
      "mph.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 8 - Vision Limitations (page 77)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=77",
  },
  {
    key: "hundred-feet-30",
    quote:
      "When you cannot see any farther than 100 feet ahead " +
      "due to rain, snow, blowing dust, smoke, or thick fog, " +
      "you cannot safely drive faster than 30 mph.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 8 - Vision Limitations (page 77)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=77",
  },
  {
    key: "night-following",
    quote:
      "You need to increase your following distance by adding " +
      "at least one additional second for night driving " +
      "conditions and at least two additional seconds for " +
      "driving on unfamiliar roadways at night.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 8 - Vision Limitations (page 77)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=77",
  },
  {
    key: "fog-low-beams",
    quote:
      "When driving in fog, snow or heavy rain use your low " +
      "beams and fog lights for best visibility, even during " +
      "the day, and be alert for other drivers who may have " +
      "forgotten to turn on their headlights.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 8 - Vision Limitations (page 77)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=77",
  },
  {
    key: "walk-facing-traffic",
    quote:
      "You must walk where there is a sidewalk. If there is " +
      "no sidewalk, you should walk on the left side of the " +
      "street facing the oncoming traffic.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - Sharing the Road, Pedestrians (page 79)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=79",
  },
  {
    key: "flashing-dont-walk",
    quote:
      "If the flashing \"DON'T WALK\" signal appears when you " +
      "are crossing the street, you may finish crossing the " +
      "street.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - Sharing the Road, Pedestrians (page 79)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=79",
  },
  {
    key: "pedestrian-eye-contact",
    quote:
      "You should establish eye contact with drivers who slow " +
      "down or stop to ensure the driver is yielding the " +
      "right-of-way to you. Do not assume the driver will " +
      "stop for you.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - Sharing the Road, Pedestrians (page 79)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=79",
  },
  {
    key: "crosswalks-everywhere",
    quote:
      "Crosswalks exist at all intersections where a sidewalk " +
      "meets the street. Not all crosswalks have markings.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - Sharing the Road, Pedestrians (page 80)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=80",
  },
  {
    key: "white-cane-stop",
    quote:
      "When a pedestrian is crossing a street guided by a dog " +
      "or carrying a white cane, you must come to a complete " +
      "stop.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - Sharing the Road, Pedestrians (page 80)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=80",
  },
  {
    key: "stopped-vehicle-pedestrian",
    quote:
      "When approaching a stopped vehicle from behind, slow " +
      "down and do not pass until you are sure that there are " +
      "no pedestrians crossing in front of it. This is true " +
      "even on multi-lane roads.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - Sharing the Road, Pedestrians (page 80)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=80",
  },
  {
    key: "school-zone-flashing",
    quote:
      "In a school zone when lights are flashing or children " +
      "are present, you must obey a slower speed limit.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - Sharing the Road, Pedestrians (page 80)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=80",
  },
  {
    key: "green-light-pedestrians",
    quote:
      "Even when you are facing a green light, you must yield " +
      "the right-of-way to all pedestrians in the " +
      "intersection.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - Sharing the Road, Pedestrians (page 80)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=80",
  },
  {
    key: "bikes-two-abreast",
    quote:
      "You are allowed to ride two abreast or two wide in a " +
      "lane.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - Sharing the Road, Bicyclists (page 81)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=81",
  },
  {
    key: "dead-red-law",
    quote:
      "Under the Dead Red Law, if you reach an intersection " +
      "and the traffic signal will not respond to your " +
      "bicycle, after waiting what you determine is a " +
      "reasonable amount of time, you may cross the " +
      "intersection.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - Sharing the Road, Bicyclists (page 81)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=81",
  },
  {
    key: "bike-headlight",
    quote:
      "Use of a headlight at dusk is required, but a " +
      "taillight is highly recommended to give you further " +
      "visibility.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - Sharing the Road, Bicyclists (page 81)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=81",
  },
  {
    key: "no-pass-bike-before-turn",
    quote:
      "If you are about to make a right turn, you must not " +
      "pass a bicyclist immediately before the turn. To avoid " +
      "a collision, you should slow down and let the cyclist " +
      "clear the intersection before making your turn.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - Sharing the Road, Bicyclists (page 81)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=81",
  },
  {
    key: "yield-bike-lane",
    quote:
      "You must yield the right-of-way to a bicyclist when a " +
      "bicycle path or bike lane intersects a road.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - Sharing the Road, Bicyclists (page 81)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=81",
  },
  {
    key: "no-horn-bicyclist",
    quote:
      "Do not sound your horn close to bicyclists unless " +
      "there is a chance of a collision. Sounding your horn " +
      "to alert your presence may startle them and cause them " +
      "to steer into your path and crash.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - Sharing the Road, Bicyclists (page 81)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=81",
  },
  {
    key: "dutch-reach",
    quote:
      "It entails that the motorist uses their right hand to " +
      "pull the handle to open the door which will inherently " +
      "turn your body to provide better visibility of traffic " +
      "approaching from the rear.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - Sharing the Road, Bicyclists (page 82)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=82",
  },
  {
    key: "sharrows",
    quote:
      "Sharrows - are road markers on the pavement that " +
      "provide a recommendation of where in a lane a " +
      "bicyclist should ride to flow easiest with other " +
      "traffic. Designated by a bicycle with two chevrons " +
      "(arrows) pointing above it, you will find sharrows on " +
      "roads with higher volumes of traffic.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - Sharing the Road, Bicyclists (page 82)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=82",
  },
  {
    key: "motorcycle-full-lane",
    quote:
      "Motorcycle/scooter/moped operators have the right to " +
      "use a complete traffic lane, and two " +
      "motorcycles/scooters/mopeds may share a lane.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - Motorcycles, Scooters and Mopeds (page 83)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=83",
  },
  {
    key: "motorcycle-left-turn",
    quote:
      "Approximately one-half of all motorcycle/scooter/moped " +
      "crashes involve another motor vehicle. Nearly 40 " +
      "percent were caused by the other vehicle turning left " +
      "in front of the motorcyclist/scooter/moped.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - Motorcycles, Scooters and Mopeds (page 83)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=83",
  },
  {
    key: "moped-definition",
    quote:
      "A motor which produces not more than 3.5 brake " +
      "horsepower; 2. A cylinder capacity of not more than " +
      "130 cubic centimeters; 3. An automatic transmission; " +
      "and 4. The capability of a maximum design speed of no " +
      "more than 30 miles mph.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - Motorcycles, Scooters and Mopeds (page 83)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=83",
  },
  {
    key: "motorcycle-following",
    quote:
      "When following a motorcyclist/scooter/moped, allow for " +
      "a 3 to 4 second following distance or more in wet " +
      "conditions, or you may not have enough time or space " +
      "to avoid a crash.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - Motorcycles, Scooters and Mopeds (page 84)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=84",
  },
  {
    key: "dim-for-motorcycle",
    quote:
      "Always dim your headlights when approaching a " +
      "motorcycle/scooter/moped. Because of their " +
      "vulnerability, the blinding effect of your high beams " +
      "can be far more dangerous to them than to drivers of " +
      "motor vehicles.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - Motorcycles, Scooters and Mopeds (page 84)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=84",
  },
  {
    key: "motorcycle-signal",
    quote:
      "Do not assume a motorcycle/scooter/moped is turning " +
      "when you see its turn signal flashing. " +
      "Motorcycle/scooter/moped turn signals may not " +
      "self-cancel, and the motorcyclist/scooter/moped may " +
      "have forgotten to turn them off. Do not pull out in " +
      "front of a motorcycle/scooter/moped until you see that " +
      "it is beginning to turn.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - Motorcycles, Scooters and Mopeds (page 84)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=84",
  },
  {
    key: "emergency-exempt",
    quote:
      "Drivers of emergency vehicles must drive with regard " +
      "for the safety of other roadway users, but they may, " +
      "under emergency conditions, be exempt from traffic " +
      "control laws, such as parking in places where you " +
      "cannot do so, going through a red light or stop sign " +
      "after slowing down,",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - Sharing the Road, Emergency Vehicles (page 84)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=84",
  },
  {
    key: "siren-pull-over",
    quote:
      "When you hear a siren, or see a vehicle approaching " +
      "with flashing lights, move to the right and pull over " +
      "to the curb or edge of the road and stop. Position " +
      "yourself parallel and as near to the curb as possible. " +
      "Always keep intersections clear.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - Sharing the Road, Emergency Vehicles (page 85)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=85",
  },
  {
    key: "stay-500-feet",
    quote:
      "You must stay at least 500 feet away from the " +
      "emergency vehicle.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - Sharing the Road, Emergency Vehicles (page 85)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=85",
  },
  {
    key: "emergency-garage",
    quote:
      "If an emergency vehicle is leaving or returning to its " +
      "garage and the emergency lights are still flashing, " +
      "you must stop until the emergency vehicle is safely " +
      "out of your path.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - Sharing the Road, Emergency Vehicles (page 85)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=85",
  },
  {
    key: "move-over-statute",
    quote:
      "State law requires drivers approaching a stationary " +
      "emergency vehicle displaying flashing lights, " +
      "including towing and recovery vehicles, traveling in " +
      "the same direction, to vacate the lane closest if safe " +
      "and possible to do so, or slow to a speed safe for " +
      "road, weather, and traffic conditions.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - Move-Over Laws (page 85)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=85",
  },
  {
    key: "traffic-stop-hands",
    quote:
      "Keep your hands on the steering wheel and limit " +
      "movements so the officer does not think you are hiding " +
      "or searching for something.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - Police/Traffic Stops (page 85)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=85",
  },
  {
    key: "truck-crash-blame",
    quote:
      "In more than 70% of all fatal crashes involving cars " +
      "and commercial vehicles, police report that the car " +
      "driver contributed to the cause of the crash.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - Interacting with Commercial Vehicles (page 85)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=85",
  },
  {
    key: "no-zone",
    quote:
      "The No-Zone is the area around large trucks or buses " +
      "where vehicles disappear from the commercial driver's " +
      "view into blind spots. These blind spots are on the " +
      "sides, rear and front of the large vehicle.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - The No-Zone (page 86)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=86",
  },
  {
    key: "mirror-face",
    quote:
      "If you cannot see the driver's face in the side view " +
      "mirror, they cannot see you.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - Side No-Zones (page 86)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=86",
  },
  {
    key: "truck-335-feet",
    quote:
      "A loaded truck with good tires and properly adjusted " +
      "brakes, under ideal conditions, traveling at 55 mph " +
      "requires a minimum of 335 feet before coming to a " +
      "complete stop, or greater than 1 1/2 times the " +
      "stopping distance of a car.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - Front No-Zones (page 86)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=86",
  },
  {
    key: "rear-no-zone-200",
    quote:
      "Unlike cars, large vehicles have huge blind spots " +
      "directly behind them that extend up to 200 feet.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - Rear No-Zones (page 86)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=86",
  },
  {
    key: "truck-hills-35",
    quote:
      "When traveling up or down steep hills, large vehicles " +
      "must drive slowly, approximately 35 mph, and therefore " +
      "use the right lane.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - Rear No-Zones (page 86)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=86",
  },
  {
    key: "truck-wide-right",
    quote:
      "When a truck or bus needs to make a right turn, they " +
      "will sometimes swing wide to the left in order to " +
      "safely turn right and clear the corner of a curb or " +
      "other obstruction.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - Interacting with Commercial Vehicles, Turning (page 87)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=87",
  },
  {
    key: "transit-bus-no-stop",
    quote:
      "Unlike a school bus, you do not have to stop for a " +
      "transit bus when they drop off or pick up people, " +
      "unless you are behind them.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - Public Transportation, Transit Buses (page 87)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=87",
  },
  {
    key: "safety-zone-10-mph",
    quote:
      "You may pass the zone as soon as it is safe to do so " +
      "and at no faster than 10 mph.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - Public Transportation, Transit Buses (page 87)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=87",
  },
  {
    key: "runaway-ramps",
    quote:
      "These ramps are to be used only by large vehicles that " +
      "are out of control or cannot stop because of brake " +
      "failure.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - Runaway Ramps (page 87)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=87",
  },
  {
    key: "stop-lines-trucks",
    quote:
      "Many intersections are marked with stop lines to show " +
      "where you must come to a complete stop. These stop " +
      "lines help to set you farther back at an intersection " +
      "to give larger vehicles more turning space.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - Interacting with Commercial Vehicles (page 87)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=87",
  },
  {
    key: "meet-truck-keep-right",
    quote:
      "When you meet a truck coming from the opposite " +
      "direction, keep as far as possible to the right side " +
      "of the roadway to avoid a side swept crash and to " +
      "reduce the wind turbulence between the two vehicles, " +
      "which pushes the vehicles apart.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - Interacting with Commercial Vehicles (page 87)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=87",
  },
  {
    key: "smv-emblem",
    quote:
      "A fluorescent or reflective orange and red triangle " +
      "displayed on the rear of vehicles drawn by animals, " +
      "farm equipment or construction equipment means the " +
      "vehicle is traveling less than 25 mph.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - Slow Moving Vehicles (page 88)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=88",
  },
  {
    key: "animal-drawn-speed",
    quote:
      "Normal speeds for animal drawn vehicles range between " +
      "5 and 8 miles per hour.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - Animal drawn vehicles (page 88)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=88",
  },
  {
    key: "horseback-single-file",
    quote:
      "They must ride single file near the right curb or road " +
      "edge, or on a usable right shoulder, lane or path.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - Horseback riders (page 88)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=88",
  },
  {
    key: "farm-machinery-turn",
    quote:
      "Farm machinery usually does not have turn signals, and " +
      "to make a right turn, operators of farm machinery may " +
      "pull wide to the left and then turn to the right.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - Farm machinery (page 88)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=88",
  },
  {
    key: "trolley-pass-right",
    quote:
      "Do not overtake and pass on the left of a trolley or " +
      "light rail vehicle, whether it is moving or standing, " +
      "except when you are on a one-way street.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 9 - Public Transportation, Transit Buses (page 87)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=87",
  },
  {
    key: "gravel-traction",
    quote:
      "Vehicles do not have as much traction on gravel or " +
      "dirt roads as they do on concrete or asphalt roads. " +
      "When driving on gravel or dirt, you must reduce your " +
      "speed and increase your following distance, since it " +
      "will take much longer to stop due to loss of traction.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 10 - Rural Road Driving (page 90)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=90",
  },
  {
    key: "high-beams-twice",
    quote:
      "Use your high beams whenever there are no oncoming " +
      "vehicles. High beams let you see twice as far as low " +
      "beams",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 10 - Night Driving (page 90)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=90",
  },
  {
    key: "rural-uncontrolled",
    quote:
      "When approaching an uncontrolled rural intersection " +
      "slow down and be prepared to stop for crossing or " +
      "oncoming traffic.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 10 - Rural Road Driving (page 90)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=90",
  },
  {
    key: "dust-low-beams",
    quote:
      "It is recommended that you use low beam headlights to " +
      "make your vehicle more visible to others, slow down " +
      "and increase your following distance.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 10 - Rural Road Driving, Dust (page 90)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=90",
  },
  {
    key: "dim-one-block",
    quote:
      "Dim your high beams whenever you come within about a " +
      "one-block distance of an oncoming vehicle.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 10 - Night Driving (page 91)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=91",
  },
  {
    key: "flash-once",
    quote:
      "If a vehicle comes toward you with their high beams " +
      "on, flash your headlights once quickly. If the driver " +
      "fails to dim their lights, look toward the right side " +
      "of the road to keep from being blinded by their " +
      "headlights.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 10 - Night Driving (page 91)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=91",
  },
  {
    key: "no-sunglasses-night",
    quote:
      "Do not wear sunglasses or colored glasses when driving " +
      "at night or on dark days. Colored lenses cause your " +
      "eyes to adjust even more slowly and can reduce your " +
      "vision.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 10 - Night Driving (page 91)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=91",
  },
  {
    key: "flooded-turn-around",
    quote:
      "Do not drive through flooded areas. If you see a " +
      "flooded roadway ahead, turn around and find another " +
      "route to get to your destination.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 10 - Driving in Adverse Weather, Flooded Roadways (page 91)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=91",
  },
  {
    key: "six-inches-water",
    quote:
      "Remember, 6 inches of water will reach the bottom of " +
      "most passenger cars, causing loss of control or " +
      "possible stalling and 2 feet of rushing water can " +
      "carry away most vehicles.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 10 - Driving in Adverse Weather, Flooded Roadways (page 91)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=91",
  },
  {
    key: "work-zone-orange",
    quote:
      "All temporary signs in work zones have an orange " +
      "background and black letters or symbols and tell you " +
      "what to do, how soon you will encounter the work zone " +
      "and the speed limit through the work zone.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 10 - Work Zones (page 91)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=91",
  },
  {
    key: "no-reduced-limit",
    quote:
      "If there are no reduced speed limit signs, you should " +
      "obey the normal posted speed limit.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 10 - Work Zones (page 91)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=91",
  },
  {
    key: "work-zone-merge",
    quote:
      "Merge as soon as possible. Motorists can help maintain " +
      "traffic flow and posted speeds by moving to the " +
      "appropriate lane at first notice of an approaching " +
      "work zone.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 10 - Work Zones (page 92)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=92",
  },
  {
    key: "end-road-work",
    quote:
      "Observe the posted signs until you see the one that " +
      "says, \"End Road Work.\"",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 10 - Work Zones (page 92)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=92",
  },
  {
    key: "deer-dawn-dusk",
    quote:
      "Use caution when driving at dawn and dusk and between " +
      "the months of October through December, when animals " +
      "are most active.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 10 - Avoiding Collisions with Animals (page 92)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=92",
  },
  {
    key: "dont-swerve-animal",
    quote:
      "If a collision is inevitable, do not swerve to avoid " +
      "the animal. Your risk of personal injury may be " +
      "greater if you do. Keep your vehicle under control and " +
      "on the roadway when you hit the animal.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 10 - Avoiding Collisions with Animals (page 92)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=92",
  },
  {
    key: "deer-fixate",
    quote:
      "Deer tend to fixate on headlights so flashing them may " +
      "cause the animal to freeze in the road.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 10 - Avoiding Collisions with Animals (page 92)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=92",
  },
  {
    key: "report-large-animal",
    quote:
      "Report the crash to the police if it involves a large " +
      "animal such as a deer or farm animal.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 10 - Avoiding Collisions with Animals (page 93)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=93",
  },
  {
    key: "dogs-chase",
    quote:
      "Slow down until the dog is near your vehicle, then " +
      "accelerate away from the dog as it approaches.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 10 - Avoiding Collisions with Animals (page 93)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=93",
  },
  {
    key: "knowledge-25-questions",
    quote:
      "The knowledge test consists of 25 multiple choice " +
      "questions that are important to the safe operation of " +
      "a motor vehicle, including traffic signs, pavement " +
      "markings and Kansas laws and driving practices.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 11 - How to Prepare for Your Driver License, Knowledge Test (page 94)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=94",
  },
  {
    key: "test-not-timed",
    quote:
      "The test is not timed, but generally takes 15 to 20 " +
      "minutes to finish.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 11 - Knowledge Test (page 94)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=94",
  },
  {
    key: "pass-80-percent",
    quote: "You must score an 80% to pass the knowledge test.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 11 - Passing the Knowledge Test (page 94)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=94",
  },
  {
    key: "four-opportunities",
    quote:
      "You are given 4 opportunities to pass the knowledge " +
      "exam. If you fail to pass the 4th time, you will be " +
      "required to wait 6 months from the most recent failed " +
      "exam before starting the process again.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 11 - Failing the Knowledge Test (page 94)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=94",
  },
  {
    key: "hold-permit-one-year",
    quote:
      "If you are under 17 years old, you must hold your " +
      "Instruction Permit for one full year or until reaching " +
      "age 17 whichever comes first, before you are eligible " +
      "to take the Driver's License Test.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 11 - Passing the Knowledge Test (page 94)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=94",
  },
  {
    key: "where-to-test",
    quote:
      "To take the knowledge exam, you may go to any " +
      "Full-Service Driver License Center, complete an " +
      "approved driver's education course, or complete the " +
      "written exam online",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 11 - Knowledge Test (page 94)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=94",
  },
  {
    key: "penny-test",
    quote:
      "If any part of Lincoln's head is covered by the tread, " +
      "you're driving with the safe amount of tread.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 11 - Pre-Trip Vehicle Safety Inspection Test, Tires (page 96)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=96",
  },
  {
    key: "reversal-definition",
    quote:
      "A reversal is when you stop and reverse direction to " +
      "get a better position. Each time you reverse direction " +
      "it is counted as an error. Stopping without changing " +
      "direction does not count as a reversal.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 11 - Basic Vehicle Control Skills Test, Scoring (page 100)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=100",
  },
  {
    key: "encroachment-definition",
    quote:
      "Touching or crossing over an exercise boundary line or " +
      "cone with any part of your vehicle, other than the " +
      "vehicle's mirrors is considered an encroachment. Each " +
      "encroachment will count as an error.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 11 - Basic Vehicle Control Skills Test, Scoring (page 100)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=100",
  },
  {
    key: "automatic-failures",
    quote:
      "If you do not use your safety belt. If you do not " +
      "check your blind spots",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 11 - Automatic Failures (page 107)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=107",
  },
  {
    key: "studded-legal-window",
    quote:
      "Studded snow tires are only legal from November 1 " +
      "through April 1.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 12 - Winter Driving (page 109)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=109",
  },
  {
    key: "stranded-stay",
    quote:
      "If you become stranded while traveling in cold " +
      "weather, stay with your vehicle. Do not leave your " +
      "vehicle unless you know exactly where you are and how " +
      "far it is to help. Most deaths under these " +
      "circumstances occur when people get out of their " +
      "vehicles, become lost and suffer prolonged exposure to " +
      "the cold.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 12 - Winter Driving (page 109)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=109",
  },
  {
    key: "tornado-overpass",
    quote:
      "Avoid seeking shelter under bridges or overpasses. If " +
      "a tornado moves through, winds will be stronger " +
      "beneath the overpass due to a \"wind tunnel effect.\"",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 12 - Tornadoes (page 110)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=110",
  },
  {
    key: "organ-donor-18",
    quote:
      "Kansas law allows any person who is 18 years or older " +
      "to become an organ and tissue donor after their death " +
      "by indicating their wishes on the back of their " +
      "driver's license and having it signed by witnesses.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Share Your Life - Become an Organ and Tissue Donor (page 112)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=112",
  },
  {
    key: "traffic-control-devices",
    quote:
      "Traffic control devices include traffic signals, " +
      "signs, and pavement markings. Traffic control also can " +
      "be provided by law enforcement, highway personnel or " +
      "school crossing guards. You must obey directions from " +
      "these persons.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 6 - Traffic Control Devices (page 34)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=34",
  },
  {
    key: "stop-behind-rear-tires",
    quote:
      "A safe gap when stopping behind another vehicle is to " +
      "stop where you can see the rear tires of the vehicle " +
      "ahead of you.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 11 - How You Will Be Tested, Turns (page 104)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=104",
  },
  {
    key: "park-double",
    quote:
      "Double or, \"two-deep\" along the curb or side of " +
      "street.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - Parking (page 19)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=19",
  },
  {
    key: "park-safety-zone",
    quote:
      "Between a safety zone and adjacent curb, or within 30 " +
      "feet of points on curb opposite ends of safety zone.",
    source: "Kansas Driving Handbook (Kansas Department of Revenue, Division of Vehicles, AAMVA 09 Model Test Version, Revised February 2022)",
    section: "Section 2 - Parking (page 19)",
    url: "https://www.ksrevenue.gov/pdf/dlhb.pdf#page=19",
  },
  {
    key: "st-lamps-required",
    quote:
      "(1) From sunset to sunrise; (2) when due to " +
      "insufficient light or unfavorable atmospheric " +
      "conditions, including smoke or fog, persons and " +
      "vehicles on the highway are not clearly discernible at " +
      "a distance of 1,000 feet ahead; or (3) when windshield " +
      "wipers are in continuous use as a result of rain, " +
      "sleet or snow.",
    source: "Kansas Statutes Annotated (Kansas Office of Revisor of Statutes)",
    section: "K.S.A. 8-1703 - When lighted lamps required",
    url: "https://www.ksrevisor.gov/statutes/chapters/ch08/008_017_0003.html",
  },
  {
    key: "st-lamps-warning",
    quote:
      "Law enforcement officers shall issue a warning " +
      "citation to anyone violating subsection (a)(3).",
    source: "Kansas Statutes Annotated (Kansas Office of Revisor of Statutes)",
    section: "K.S.A. 8-1703 - When lighted lamps required",
    url: "https://www.ksrevisor.gov/statutes/chapters/ch08/008_017_0003.html",
  },
  {
    key: "st-max-speed",
    quote:
      "In any urban district, 30 miles per hour; (2) on any " +
      "separated multilane highway, as designated and posted " +
      "by the secretary of transportation, 75 miles per hour; " +
      "(3) on any county or township highway, 55 miles per " +
      "hour; and (4) on all other highways, 65 miles per " +
      "hour.",
    source: "Kansas Statutes Annotated (Kansas Office of Revisor of Statutes)",
    section: "K.S.A. 8-1558 - Maximum speed limits",
    url: "https://www.ksrevisor.gov/statutes/chapters/ch08/008_015_0058.html",
  },
  {
    key: "st-school-zone-20",
    quote:
      "decreases the limit within an urban district in a " +
      "school zone to not less than 20 miles per hour, except " +
      "that any such decreased limit shall apply only during " +
      "the hours in which students are normally en route to " +
      "or from school",
    source: "Kansas Statutes Annotated (Kansas Office of Revisor of Statutes)",
    section: "K.S.A. 8-1560 - Alteration of maximum speed limits",
    url: "https://www.ksrevisor.gov/statutes/chapters/ch08/008_015_0060.html",
  },
  {
    key: "st-school-bus",
    quote:
      "The driver of a vehicle meeting or overtaking from " +
      "either direction any school bus stopped on the highway " +
      "shall stop before reaching such school bus",
    source: "Kansas Statutes Annotated (Kansas Office of Revisor of Statutes)",
    section: "K.S.A. 8-1556 - Overtaking and passing school bus",
    url: "https://www.ksrevisor.gov/statutes/chapters/ch08/008_015_0056.html",
  },
  {
    key: "st-school-bus-proceed",
    quote:
      "the driver shall not proceed until such school bus " +
      "resumes motion or the flashing red lights and the stop " +
      "signal arm are no longer actuated.",
    source: "Kansas Statutes Annotated (Kansas Office of Revisor of Statutes)",
    section: "K.S.A. 8-1556 - Overtaking and passing school bus",
    url: "https://www.ksrevisor.gov/statutes/chapters/ch08/008_015_0056.html",
  },
  {
    key: "st-school-bus-separate",
    quote:
      "The driver of a vehicle upon a highway with separate " +
      "roadways need not stop upon meeting or passing a " +
      "school bus which is on a different roadway",
    source: "Kansas Statutes Annotated (Kansas Office of Revisor of Statutes)",
    section: "K.S.A. 8-1556 - Overtaking and passing school bus",
    url: "https://www.ksrevisor.gov/statutes/chapters/ch08/008_015_0056.html",
  },
  {
    key: "st-dui-008",
    quote:
      "Driving under the influence is operating or attempting " +
      "to operate any vehicle within this state while: (1) " +
      "The alcohol concentration in the person's blood or " +
      "breath as shown by any competent evidence, including " +
      "other competent evidence, as defined in K.S.A. 8-1013 " +
      "(f)(1), and amendments thereto, is 0.08 or more;",
    source: "Kansas Statutes Annotated (Kansas Office of Revisor of Statutes)",
    section: "K.S.A. 8-1567 - Driving under the influence",
    url: "https://www.ksrevisor.gov/statutes/chapters/ch08/008_015_0067.html",
  },
  {
    key: "st-open-container",
    quote:
      "No person shall transport in any vehicle upon a " +
      "highway or street any alcoholic beverage unless such " +
      "beverage is: (1) In the original unopened package or " +
      "container, the seal of which has not been broken and " +
      "from which the original cap, cork or other means of " +
      "closure has not been removed;",
    source: "Kansas Statutes Annotated (Kansas Office of Revisor of Statutes)",
    section: "K.S.A. 8-1599 - Transportation of liquor in opened containers unlawful",
    url: "https://www.ksrevisor.gov/statutes/chapters/ch08/008_015_0099.html",
  },
  {
    key: "st-unattended",
    quote:
      "No person driving or in charge of a motor vehicle " +
      "shall permit it to stand unattended without first " +
      "stopping the engine, locking the ignition, removing " +
      "the key from the ignition, effectively setting the " +
      "brake thereon and, when standing upon any grade, " +
      "turning the front wheels to the curb or side of the " +
      "highway.",
    source: "Kansas Statutes Annotated (Kansas Office of Revisor of Statutes)",
    section: "K.S.A. 8-1573 - Unattended motor vehicle",
    url: "https://www.ksrevisor.gov/statutes/chapters/ch08/008_015_0073.html",
  },
  {
    key: "st-work-zone-double",
    quote:
      "Fines listed in the uniform fine schedule contained in " +
      "subsection (c) shall be doubled if a person is " +
      "convicted of a traffic infraction, which is defined as " +
      "a moving violation in accordance with rules and " +
      "regulations adopted pursuant to K.S.A. 8-249 , and " +
      "amendments thereto, committed within any road " +
      "construction zone",
    source: "Kansas Statutes Annotated (Kansas Office of Revisor of Statutes)",
    section: "K.S.A. 8-2118 - Uniform fine schedule for traffic infraction violations",
    url: "https://www.ksrevisor.gov/statutes/chapters/ch08/008_021_0018.html",
  },
  {
    key: "st-school-zone-double",
    quote:
      "Fines listed in the uniform fine schedule contained in " +
      "subsection (c) relating to exceeding the maximum speed " +
      "limit, shall be doubled if a person is convicted of " +
      "exceeding the maximum speed limit in a school zone",
    source: "Kansas Statutes Annotated (Kansas Office of Revisor of Statutes)",
    section: "K.S.A. 8-2118 - Uniform fine schedule for traffic infraction violations",
    url: "https://www.ksrevisor.gov/statutes/chapters/ch08/008_021_0018.html",
  },
  {
    key: "st-bus-escalating",
    quote:
      "For a second violation of K.S.A. 8-1556 , and " +
      "amendments thereto, within five years after a prior " +
      "conviction of K.S.A. 8-1556 , and amendments thereto, " +
      "such person, upon conviction, shall be fined $750 for " +
      "the second violation.",
    source: "Kansas Statutes Annotated (Kansas Office of Revisor of Statutes)",
    section: "K.S.A. 8-2118 - Uniform fine schedule for traffic infraction violations",
    url: "https://www.ksrevisor.gov/statutes/chapters/ch08/008_021_0018.html",
  },
];
