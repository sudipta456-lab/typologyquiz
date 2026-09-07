import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts behind the Idaho bank. Three kinds of source sit
// behind them.
//
//  - The Idaho Driver's Handbook, published by the Idaho Transportation
//    Department, Division of Motor Vehicles and served from
//    itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf. Its cover
//    carries the only edition label ITD gives it - "DRIVER'S HANDBOOK JULY
//    2026" - and the back cover names the publisher. The book runs 139 pages
//    and its printed page numbers are the PDF's own page numbers, so the page
//    in each `section` below is both. Page 32 says the knowledge test's
//    questions "are taken directly from information included in the Driver's
//    Handbook", which is why nearly everything quoted here comes from it.
//  - Idaho Code, on the Idaho State Legislature's own server: Title 49 (Motor
//    Vehicles), Title 18 chapter 80 (the DUI statute) and Title 25 chapter 21
//    (livestock on open range). Page 2 of the handbook says outright that it
//    "paraphrases the language of Idaho statutes" and that "Courts go by the
//    actual language of the statutes, not this text", which is an invitation
//    to check. Thirty-odd quotes here are statutory. Most fill a hole the
//    handbook leaves - the fines for texting (49-1401A), for passing a stopped
//    school bus (49-1422) and for not wearing a belt (49-673); the statutory
//    wording of the unposted 35 mph maximum (49-654); the motorcycle
//    dead-red rule (49-802). One of them contradicts the handbook outright:
//    49-1401A has banned holding ANY mobile electronic device since 1 July
//    2020, while the handbook's Cell Phones section on page 92 still describes
//    only the older texting ban. The research note records that.
//  - Two ITD web pages, for the parts of the process the handbook does not
//    spell out: the skills-test scoring rules and the driver-training hours.
//
// Every quote was located mechanically inside the fetched source and checked
// as an exact substring before it was written here. Nothing is paraphrased.
// Only the normalisations the sibling banks use were applied, to the extracted
// text and to nothing else: curly quotes, en dashes and em dashes fold to
// ASCII; runs of whitespace, including the line breaks the PDF inserts
// mid-sentence, collapse to single spaces; bullet glyphs become spaces, so a
// stem followed by its bulleted list runs together in the order the source
// prints it - no words are changed, dropped or reordered.
//
// The sources' own slips are preserved exactly as they stand, because a quote
// that has been tidied up is no longer a quote. Among them: the extra space in
// the handbook's "At four-way stops , the first vehicle to arrive", the
// hyphen-free "3-way "T" intersection" gloss that tells you to stop at a sign
// that is only a warning, and Idaho Code's own spelling of "uninclosed lands"
// in the open-range definition.

export const idahoExcerpts: HandbookExcerpt[] = [
  {
    key: "licence-age-15",
    quote:
      "You can be licensed in Idaho when you are 15 years of " +
      "age. However, if you are under 17 years of age, you " +
      "must first successfully complete an approved driver's " +
      "training program and the graduated driver's license " +
      "program.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Introduction (page 3)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=3",
  },
  {
    key: "new-residents-30-days",
    quote:
      "Upon moving to Idaho, you will need to apply for an " +
      "Idaho driver's license within 30 days of residing in " +
      "Idaho, whether your out-of-state license has expired " +
      "or not.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Introduction, New Residents (page 4)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=4",
  },
  {
    key: "surrender-other-licence",
    quote:
      "When applying for an Idaho driver's license, you must " +
      "surrender any driver's license or identification card " +
      "(ID card) issued to you from another state, U.S. " +
      "Territory, or the District of Columbia.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "One Driver, One License, One Record (page 12)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=12",
  },
  {
    key: "transfer-knowledge-test",
    quote:
      "When transferring from one of those jurisdictions, you " +
      "will be required to pass a Class D knowledge test (and " +
      "skills test if your license has been expired for 25 " +
      "months or more).",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "One Driver, One License, One Record (page 12)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=12",
  },
  {
    key: "carry-your-licence",
    quote:
      "You must carry your driver's license when operating a " +
      "motor vehicle. Any misuse or mutilation of your " +
      "driver's license, instruction permit, or ID card is a " +
      "misdemeanor.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Misuse of a Driver's License (page 13)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=13",
  },
  {
    key: "star-card",
    quote:
      "The Star Card is Idaho's Real ID. It is an Idaho " +
      "driver's license or identification (ID) card that adds " +
      "a star to show it is in compliance with the federal " +
      "Real ID security standards.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "What is a Star Card (page 13)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=13",
  },
  {
    key: "county-offices-issue",
    quote:
      "Idaho driver's licenses, ID cards, and instruction " +
      "permits are issued through the county sheriff's " +
      "driver's license offices.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Where to Get an Idaho Credential (page 14)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=14",
  },
  {
    key: "dt-permit-age",
    quote:
      "Driver Training Permits (DT) allow anyone 14 1/2 and " +
      "under 17 years of age to attend any public school or " +
      "private driver training program.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Driver Training Permits (page 15)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=15",
  },
  {
    key: "dt-permit-expiry",
    quote:
      "The permit expires 5 days after the permit holder's " +
      "18th birthday. The permit expiration for people 17 1/2 " +
      "years of age and older is 6 months (180 days).",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Driver Training Permits (page 15)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=15",
  },
  {
    key: "dt-permit-instructor-only",
    quote:
      "While you are enrolled in a driver training program, " +
      "the DT permit is valid only to operate a vehicle with " +
      "a driver's training instructor.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Driver Training Permits (page 15)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=15",
  },
  {
    key: "dt-then-sip",
    quote:
      "When you have successfully completed a driver training " +
      "program and the instructor has given you the driver " +
      "training permit, you will be eligible to begin the " +
      "supervised instruction period required by Idaho's " +
      "Graduated Driver's License (GDL) program.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Driver Training Permits (page 15)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=15",
  },
  {
    key: "instruction-permit-17",
    quote:
      "Class D Instruction Permits (IP) allow an applicant " +
      "who is 17 years of age or older to practice safely " +
      "operating a motor vehicle for one (1) year when " +
      "accompanied by an adult (someone who is 18 years of " +
      "age or older) who holds a valid driver's license.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Class D Instruction Permits (page 16)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=16",
  },
  {
    key: "instruction-permit-test",
    quote:
      "You must pass a knowledge test to be issued an " +
      "instruction permit.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Class D Instruction Permits (page 16)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=16",
  },
  {
    key: "restriction-under-16",
    quote:
      "Daylight only travel is allowed unless you have a " +
      "valid licensed driver who is at least 21 years of age " +
      "sitting in the front seat beside you. Daylight is " +
      "defined as 5:00a to 10:00p local time.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Restriction When Under 16 (page 16)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=16",
  },
  {
    key: "restriction-under-17",
    quote:
      "During the first 6 months from the date the license " +
      "was issued, the number of passengers in the vehicle " +
      "who are under the age of 17 shall be limited to not " +
      "more than one passenger, unless the passenger(s) are " +
      "related to the driver by blood, adoption or marriage.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Restriction When Under 17 (page 16)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=16",
  },
  {
    key: "under-18-expiry",
    quote:
      "If you are 15 to 17 years of age, your driver's " +
      "license or ID card will show \"Under 18 until " +
      "month/day/year,\" and your driver's license or ID card " +
      "will expire five days after your 18th birthday.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Under 18 and 21 Years of Age (page 17)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=17",
  },
  {
    key: "foreign-knowledge-test",
    quote: "No foreign drivers are exempt from the knowledge test.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Foreign Class D (page 17)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=17",
  },
  {
    key: "motorcycle-permit",
    quote:
      "You must have a valid Idaho driver's license to apply " +
      "for an MIP. You must also take and pass a motorcycle " +
      "knowledge test. Any person under 21 years of age will " +
      "be required to take a knowledge test and successfully " +
      "complete an approved Motorcycle Rider Training Course.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Motorcycle Instruction Permits (page 18)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=18",
  },
  {
    key: "gdl-who",
    quote:
      "Anyone under 17 years of age who has not been issued a " +
      "driver's license in Idaho must successfully complete " +
      "an approved driver's training program and comply with " +
      "the requirements of the GDL program.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Graduated Driver's License (GDL) Program (page 19)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=19",
  },
  {
    key: "gdl-supervised-period",
    quote:
      "you will be required to complete a minimum 6-month, " +
      "violation-free supervised instruction period, during " +
      "which you must: Be accompanied by a valid licensed " +
      "driver at least 21 years of age who is occupying the " +
      "front seat beside the driver (no other passengers are " +
      "allowed in the front seat).",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Graduated Driver's License (GDL) Program (page 19)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=19",
  },
  {
    key: "gdl-50-hours",
    quote:
      "Accumulate at least 50 hours of supervised driving " +
      "time, ten hours of which must be at night.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Graduated Driver's License (GDL) Program (page 19)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=19",
  },
  {
    key: "gdl-restart",
    quote:
      "If you are convicted of violating any traffic laws " +
      "while you are operating a vehicle under the supervised " +
      "instruction period, the permit will be canceled and " +
      "you must reapply for a new permit. Your minimum 6 " +
      "months of supervised driving time starts over again " +
      "with the issuance of a new permit.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Graduated Driver's License (GDL) Program (page 19)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=19",
  },
  {
    key: "gdl-final-tests",
    quote:
      "Once you have successfully met the requirements of the " +
      "GDL, you will be required to take and pass a knowledge " +
      "and skills test before being issued a driver's " +
      "license.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Graduated Driver's License (GDL) Program (page 19)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=19",
  },
  {
    key: "driver-training-hours",
    quote:
      "An approved Idaho Driver Training (DT) program " +
      "consists of a required 30 hours of classroom " +
      "instruction, 6 hours of in-car experience observing " +
      "other student drivers, and 6 hours of behind-the-wheel " +
      "practice with an approved DT instructor.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Driver Training (page 19)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=19",
  },
  {
    key: "driver-training-required",
    quote:
      "DT is required for anyone under 17 years of age who is " +
      "applying for an Idaho driver's license.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Driver Training (page 19)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=19",
  },
  {
    key: "driver-training-ages",
    quote:
      "The courses are open to all Idaho residents between " +
      "the ages of 14 ½ and 21, even if they are not public " +
      "school students.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Driver Training (page 20)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=20",
  },
  {
    key: "m-endorsement",
    quote:
      "Motorcycle (M) Endorsements are required on all " +
      "licenses when a motorcycle rider operates on public " +
      "highways.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Motorcycle Endorsement (page 20)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=20",
  },
  {
    key: "mopeds-not-motorcycles",
    quote: "Tractors and mopeds are not classified as motorcycles.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Motorcycle Endorsement (page 20)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=20",
  },
  {
    key: "liability-signer",
    quote:
      "If you are under 18 years of age, you need to have a " +
      "parent or legal guardian with you to sign consent for " +
      "you to be licensed. The signer assumes legal " +
      "responsibility for your actions as a driver.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Liability Signer (page 26)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=26",
  },
  {
    key: "liability-withdraw",
    quote:
      "While you are under 18 years of age, the liability " +
      "signer may withdraw consent at any time, which will " +
      "cause the department to cancel your driving " +
      "credential.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Liability Signer (page 26)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=26",
  },
  {
    key: "school-compliance",
    quote:
      "If you are under 18 years of age, you will need to " +
      "provide acceptable proof of enrollment and attendance " +
      "in, or graduation from, a recognized high school or " +
      "equivalent program.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Verification of School Compliance (page 26)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=26",
  },
  {
    key: "donor-designation",
    quote:
      "If you are 15 years of age or older, you may request " +
      "to have the \"DONOR\" designation appear on your " +
      "driver's license or ID card.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Donor Designation (page 27)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=27",
  },
  {
    key: "address-change",
    quote:
      "You must notify ITD within 30 days when your address " +
      "changes.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Address Change (page 29)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=29",
  },
  {
    key: "lend-licence",
    quote:
      "For your own protection, DO NOT: Lend anyone your " +
      "driver's license, instruction permit, or ID card",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "For Your Own Protection (page 29)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=29",
  },
  {
    key: "expired-25-months",
    quote:
      "If the Idaho (Class D or CDL) or out-of-state (Class D " +
      "only) driver's license has been expired for 25 months " +
      "or more, you will be required to take all applicable " +
      "knowledge and skills test(s).",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Renewals (page 30)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=30",
  },
  {
    key: "testing-age-15",
    quote:
      "Applicants must be 15 years of age or older to take " +
      "the knowledge and skills tests.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Required Testing (page 32)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=32",
  },
  {
    key: "vision-standard",
    quote:
      "Your vision will be tested and you must meet a minimum " +
      "standard of 20/40 vision in at least one eye, with or " +
      "without corrective lenses.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Medical/Visual Screening (page 32)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=32",
  },
  {
    key: "lens-restriction",
    quote:
      "If a lens restriction is placed on your driver's " +
      "license, you must always wear your glasses or contacts " +
      "when operating a motor vehicle or you may be cited and " +
      "have your driving privileges suspended.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Medical/Visual Screening (page 32)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=32",
  },
  {
    key: "knowledge-test-format",
    quote:
      "Knowledge test questions are taken directly from " +
      "information included in the Driver's Handbook. The " +
      "knowledge test consists of 40 questions; you can miss " +
      "up to six (6) questions before failing the test.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Knowledge Test: Class D (page 32)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=32",
  },
  {
    key: "knowledge-test-retest",
    quote:
      "IF YOU FAIL A KNOWLEDGE TEST, YOU MUST WAIT THREE (3) " +
      "DAYS TO RETEST. YOU WILL ALSO BE REQUIRED TO PAY THE " +
      "KNOWLEDGE TEST FEE AGAIN.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Knowledge Test: Class D (page 32)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=32",
  },
  {
    key: "practice-tests-warning",
    quote:
      "Web-based driver practice tests are not an accurate " +
      "representation of Idaho knowledge tests, with the " +
      "exception of the sample test questions provided by ITD " +
      "through the itd.idaho.gov website.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Knowledge Test: Class D (page 32)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=32",
  },
  {
    key: "skills-test-score",
    quote:
      "Skills tests may only be scheduled during daylight " +
      "hours and during acceptable weather conditions. Twelve " +
      "or fewer errors is a passing score.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Skills Test: Class D (page 33)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=33",
  },
  {
    key: "skills-test-retest",
    quote:
      "IF YOU FAIL A SKILLS TEST, YOU MUST WAIT THREE (3) " +
      "DAYS TO RETEST.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Skills Test: Class D (page 33)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=33",
  },
  {
    key: "skills-test-passengers",
    quote: "Passengers are not allowed during the skills test.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Passengers (page 35)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=35",
  },
  {
    key: "pre-drive-arm-signals",
    quote:
      "as well as properly demonstrate all three arm signals. " +
      "You can miss 3 or fewer to continue to the driving " +
      "portion of the skills test.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Applicant Vehicle Knowledge & Inspection (page 36)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=36",
  },
  {
    key: "critical-driving-error",
    quote:
      "A driving skill performed or not performed that may " +
      "result in an incident/accident, injury, or death. If a " +
      "CDE occurs, the error constitutes an automatic FAIL " +
      "and the skills test ends immediately.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Critical Driving Errors (page 37)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=37",
  },
  {
    key: "mechanically-unsafe",
    quote:
      "Under Idaho law, you may not drive any vehicle that is " +
      "mechanically unsafe. If your vehicle needs repairs, " +
      "lacks vital equipment, or presents some other danger, " +
      "you are responsible for correcting the problem.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Operating a Vehicle Without the Owner's Consent (page 38)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=38",
  },
  {
    key: "no-annual-inspection",
    quote:
      "Idaho does not require an annual safety inspection, " +
      "but if you are stopped by a police officer who finds " +
      "your vehicle is unsafe or lacks proper equipment, the " +
      "officer may issue you a citation.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Operating a Vehicle Without the Owner's Consent (page 38)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=38",
  },
  {
    key: "brake-distances",
    quote:
      "Foot brakes must stop a vehicle that is traveling 20 " +
      "miles per hour on dry pavement within a distance of 25 " +
      "feet. The emergency or parking brake must stop the " +
      "vehicle within 55 feet under similar conditions",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Required Equipment, Brakes (page 38)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=38",
  },
  {
    key: "headlight-beams",
    quote:
      "High beams must allow the driver to see people and " +
      "vehicles at least 350 feet away. Low beams must light " +
      "the roadway at least 100 feet ahead.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Required Equipment, Headlights (page 38)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=38",
  },
  {
    key: "brake-lights",
    quote:
      "All motor vehicles must have functioning red or amber " +
      "brake lights visible for at least 100 feet to the rear " +
      "in normal sunlight.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Required Equipment, Stop or Brake Lights (page 39)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=39",
  },
  {
    key: "taillights",
    quote:
      "All other motor vehicles, trailers, and semi-trailers " +
      "must have at least two red lights mounted on the left " +
      "and right rear, visible from 500 feet to the rear.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Required Equipment, Taillights (page 39)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=39",
  },
  {
    key: "turn-signal-equipment",
    quote:
      "All motor vehicles built after January 1, 1955, must " +
      "have flashing electric left and right turn signals on " +
      "the front and rear with a switch that can be " +
      "controlled by the driver and be visible from 100 feet.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Required Equipment, Turn Signals (page 39)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=39",
  },
  {
    key: "tire-tread",
    quote: "Each tire should have at least 2/32\" or more of tread.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Required Equipment, Tires (page 39)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=39",
  },
  {
    key: "horn-equipment",
    quote:
      "All motor vehicles must have a horn that can be heard " +
      "at least 200 feet away. Horns with unreasonably loud " +
      "or harsh sounds are prohibited.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Required Equipment, Horns (page 39)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=39",
  },
  {
    key: "mirror-equipment",
    quote:
      "All motor vehicles must have a rear view mirror that " +
      "provides a view of the highway for at least 200 feet " +
      "to the rear.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Required Equipment, Mirrors (page 40)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=40",
  },
  {
    key: "child-restraint-age",
    quote:
      "Idaho law requires anyone carrying children 6 years of " +
      "age or younger in a non-commercial motor vehicle to " +
      "properly protect children in approved child car safety " +
      "seats.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Child Restraints are Required (page 41)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=41",
  },
  {
    key: "children-back-seat",
    quote:
      "All children younger than 13 years should ride in the " +
      "back seat.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Child Restraints are Required (page 41)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=41",
  },
  {
    key: "rear-facing-airbag",
    quote:
      "Children in rear-facing car seats should never ride in " +
      "front of an active passenger air bag.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Child Restraints are Required (page 41)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=41",
  },
  {
    key: "seat-belts-required",
    quote:
      "Idaho law requires all occupants to wear safety belts " +
      "and/or shoulder straps when riding in a motor vehicle " +
      "equipped with these devices by the factory.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Seat Belts & Shoulder Straps (page 41)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=41",
  },
  {
    key: "seat-belt-effectiveness",
    quote:
      "Reduce your chances of serious injury in an auto crash " +
      "by 50% Are 60-70% effective in preventing fatalities " +
      "in auto crashes",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Seat Belts & Shoulder Straps (page 42)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=42",
  },
  {
    key: "emergency-lights-banned",
    quote:
      "Red or blue emergency lights. These are authorized for " +
      "emergency vehicles only.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Equipment Not Allowed (page 42)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=42",
  },
  {
    key: "studded-tire-dates",
    quote:
      "Studded snow tires may be used only from October 1 to " +
      "April 30. Some years, the Idaho Transportation " +
      "Department adjusts the dates due to weather " +
      "conditions.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Equipment Not Allowed (page 42)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=42",
  },
  {
    key: "lights-sunset-to-sunrise",
    quote:
      "Headlamps and tail lamps must be lighted from sunset " +
      "to sunrise and when poor visibility makes them " +
      "necessary for safety. Headlamps must be dimmed 500 " +
      "feet before meeting and 200 feet before overtaking " +
      "another vehicle.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Other Laws You Need to Know, Lights (page 43)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=43",
  },
  {
    key: "clear-windows",
    quote:
      "You must also clean windows of ice, snow, or dirt " +
      "before driving to ensure that you have maximum " +
      "visibility in all directions.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Other Laws You Need to Know (page 43)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=43",
  },
  {
    key: "overhanging-load",
    quote:
      "When vehicle loads extend four feet or more beyond the " +
      "rear of a vehicle, a red flag at least 18 inches " +
      "square must be displayed at the end of the load.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Other Laws You Need to Know (page 43)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=43",
  },
  {
    key: "reckless-driving",
    quote:
      "You must not recklessly drive a vehicle with willful " +
      "disregard for the safety of people or property either " +
      "on a public road or private property.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Other Laws You Need to Know (page 43)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=43",
  },
  {
    key: "inattentive-driving",
    quote:
      "While driving, you must give your full attention to " +
      "the safe operation of your vehicle. Failure to do so " +
      "may cause you to be cited for inattentive driving.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Other Laws You Need to Know (page 43)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=43",
  },
  {
    key: "traffic-control-obey",
    quote:
      "Traffic control devices include traffic signals, " +
      "signs, and pavement markings. Traffic control may also " +
      "be provided by law enforcement officers, highway " +
      "personnel, or school crossing guards. You must obey " +
      "these directions.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Signs, Signals, & Pavement Markings (page 44)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=44",
  },
  {
    key: "regulatory-sign-colors",
    quote:
      "Regulatory signs are generally black and white, " +
      "although some are red and white.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Traffic Signs (page 44)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=44",
  },
  {
    key: "learn-signs-by-shape",
    quote:
      "You should learn to recognize them by color and shape " +
      "as well as the messages or symbols they carry.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Traffic Signs (page 44)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=44",
  },
  {
    key: "stop-sign-where",
    quote:
      "When approaching a stop sign, you must stop at a " +
      "clearly marked stop line. If no stop line, then stop " +
      "before entering the crosswalk on the near side of the " +
      "intersection.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Traffic Signs, Stop (page 44)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=44",
  },
  {
    key: "yield-sign",
    quote:
      "Yield right-of-way. You must slow down and yield the " +
      "right-of-way to other vehicles and pedestrians in the " +
      "intersection you are crossing or highway you are " +
      "entering.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Traffic Signs, Yield (page 44)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=44",
  },
  {
    key: "do-not-enter",
    quote:
      "You may not enter this section of highway from the " +
      "direction you are traveling.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Traffic Signs, Do Not Enter (page 45)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=45",
  },
  {
    key: "speed-limit-sign",
    quote:
      "The maximum speed limit on a section of road (under " +
      "ideal driving conditions).",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Traffic Signs, Speed Limit (page 45)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=45",
  },
  {
    key: "keep-right-of-island",
    quote:
      "The road ahead is divided. Stay on the right side of " +
      "the island or barrier.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Traffic Signs, Keep Right of Island (page 45)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=45",
  },
  {
    key: "work-zone-sign-colors",
    quote:
      "Regulatory signs are generally black and white or red " +
      "and white. Warning signs in a work zone are orange and " +
      "black.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Work Zone Signs (page 46)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=46",
  },
  {
    key: "work-zone-barriers",
    quote:
      "Do not go around or move any barriers or signs to " +
      "cross over a road that is closed to traffic.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Work Zone Signs (page 46)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=46",
  },
  {
    key: "slow-moving-vehicle-sign",
    quote:
      "You are approaching a slow moving vehicle. You should " +
      "slow down and approach the vehicle with caution. This " +
      "sign is primarily used on off road vehicles (farm " +
      "equipment, construction equipment, etc.).",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Work Zone Signs, Slow Moving Vehicle Sign (page 47)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=47",
  },
  {
    key: "road-closed-local",
    quote:
      "signs mean that the work zone is open to local " +
      "residential or commercial traffic, but the traffic " +
      "must not use the work zone as a travel route unless " +
      "they have a reason to stop within the work zone.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Work Zone Signs (page 47)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=47",
  },
  {
    key: "work-zone-fines",
    quote:
      "Slow down. Fines for speeding are increased in work " +
      "zones where the signage indicates.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Work Zone Signs (page 48)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=48",
  },
  {
    key: "school-safety-patrol",
    quote:
      "You must follow any directions issued by a school " +
      "safety patrol official while driving your motor " +
      "vehicle.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "School Safety Patrols (page 48)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=48",
  },
  {
    key: "warning-sign-shape",
    quote:
      "Most warning signs are black on yellow and " +
      "diamond-shaped. They also include the fluorescent " +
      "yellow/green school warning signs. These signs warn " +
      "you about an unexpected condition.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Warning Signs (page 49)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=49",
  },
  {
    key: "open-range-sign",
    quote:
      "You are traveling in an area where livestock have the " +
      "right-of-way and are allowed to roam freely and " +
      "unfenced.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Warning Signs, Open Range (page 49)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=49",
  },
  {
    key: "three-way-sign",
    quote:
      "You are approaching a 3-way \"T\" intersection and will " +
      "have to turn either to the right or the left. You must " +
      "stop and yield to drivers approaching from the other " +
      "two directions.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Warning Signs, 3-Way Intersection (page 49)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=49",
  },
  {
    key: "school-zone-sign",
    quote:
      "You are nearing a school area with a crossing. Watch " +
      "for children and the marked school crossing. There are " +
      "increased penalties for violation of school zone speed " +
      "limits.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Warning Signs, School Zone (page 50)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=50",
  },
  {
    key: "added-lane-sign",
    quote:
      "Two highways are converging. Watch for traffic in the " +
      "left lane which may move into the right lane.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Warning Signs, Added Lane (page 50)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=50",
  },
  {
    key: "two-way-traffic-sign",
    quote:
      "This sign warns about a transition from a multi-lane " +
      "divided highway to a two-lane, two-way section of " +
      "highway.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Warning Signs, Two-Way Traffic (page 50)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=50",
  },
  {
    key: "lane-ends-sign",
    quote:
      "Two lanes of traffic will soon become one lane of " +
      "traffic. Merging traffic must yield.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Warning Signs, Lane Ends/Merge Left (page 50)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=50",
  },
  {
    key: "low-clearance-sign",
    quote:
      "Indicates the overhead clearance above the highway is " +
      "very low.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Warning Signs, Low Clearance (page 51)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=51",
  },
  {
    key: "divided-highway-ends",
    quote:
      "Two-way traffic ahead will no longer be divided by a " +
      "center strip. Watch out for oncoming cars.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Warning Signs, Divided Highway Ends (page 51)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=51",
  },
  {
    key: "school-crossing-sign",
    quote:
      "Watch out for children, reduce speed, and obey " +
      "crossing guard signals.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Warning Signs, School Crossing (page 51)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=51",
  },
  {
    key: "pedestrian-crossing-sign",
    quote:
      "Watch out for people crossing the road. Pedestrians " +
      "have the right-of-way, and you may have to stop for " +
      "them.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Warning Signs, Pedestrian Crossing (page 51)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=51",
  },
  {
    key: "divided-highway-begins",
    quote:
      "You are getting close to the place where two-way " +
      "traffic will be divided by a center strip.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Warning Signs, Divided Highway Begins (page 51)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=51",
  },
  {
    key: "share-the-road-sign",
    quote:
      "This sign is placed below a bicycle symbol sign and is " +
      "used on highways where bike lanes are not provided.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Warning Signs, Share the Road (page 52)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=52",
  },
  {
    key: "no-passing-pennant",
    quote:
      "This pennant-shaped sign will be on the left-hand side " +
      "of the road or highway in addition to a \"DO NOT PASS\" " +
      "sign or pavement markings. It warns you of a no " +
      "passing zone for your lane of traffic.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Warning Signs, No Passing Zone (page 52)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=52",
  },
  {
    key: "hill-sign",
    quote:
      "This sign is a warning to all vehicles that the road " +
      "goes down a steep hill. You should check your brakes " +
      "before going down the hill.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Warning Signs, Hill (page 52)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=52",
  },
  {
    key: "slippery-when-wet-sign",
    quote:
      "Road ahead may become slippery in wet weather. Slow " +
      "down under these conditions.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Warning Signs, Slippery When Wet (page 52)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=52",
  },
  {
    key: "railroad-advance-sign",
    quote:
      "This sign gives you early warning of a railroad " +
      "crossing(s) ahead. Be prepared to stop before you get " +
      "to the tracks if a train is approaching the crossing.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Warning Signs, Railroad Crossing (page 52)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=52",
  },
  {
    key: "guide-sign-colors",
    quote:
      "Guide signs are either white on green for directional " +
      "and distance, white on blue for motorist's services, " +
      "or white on brown for cultural, historical, or scenic " +
      "points of interest.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Guide Signs (page 53)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=53",
  },
  {
    key: "barricade-colors",
    quote:
      "Barricades are either red and white (permanent) or " +
      "orange and white (temporary). Even though barricades " +
      "can be of different colors, the instructions they give " +
      "to drivers are the same.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Barricades (page 54)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=54",
  },
  {
    key: "barricade-v-pattern",
    quote:
      "The V-shaped pattern on this barricade means that the " +
      "road is closed and traffic can proceed no further.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Barricades (page 54)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=54",
  },
  {
    key: "signal-light-order",
    quote:
      "Vertical traffic lights have a red light at the top, a " +
      "yellow light in the middle, and a green light at the " +
      "bottom. Horizontal traffic lights have a red light on " +
      "the far left, a yellow light in the middle, and a " +
      "green light on the far right.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Traffic Signals (page 55)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=55",
  },
  {
    key: "steady-red",
    quote:
      "A steady red circular indication means stop. Come to a " +
      "complete stop before you reach the stop line, " +
      "crosswalk, or intersection. You can make a turn on a " +
      "red light unless posted \"no turn on red.\"",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Traffic Signals, Red Light (page 55)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=55",
  },
  {
    key: "flashing-red",
    quote:
      "A flashing red indication means stop. You must come to " +
      "a complete stop, yield to cross traffic or " +
      "pedestrians, and then proceed when clear.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Traffic Signals, Flashing Red Light (page 55)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=55",
  },
  {
    key: "steady-red-arrow",
    quote:
      "While the steady red arrow indication is displayed, no " +
      "turn is permitted in the direction of the arrow until " +
      "a green or yellow light indication allows movement.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Traffic Signals, Steady Red Arrow (page 55)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=55",
  },
  {
    key: "yellow-light",
    quote:
      "A yellow light means caution. An amber or yellow " +
      "circular indication warns that the signal is about to " +
      "change to red. If you have not entered the " +
      "intersection and can come to a safe stop, you should " +
      "do so.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Traffic Signals, Yellow Light (page 55)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=55",
  },
  {
    key: "flashing-yellow",
    quote:
      "A flashing circular yellow indication means caution. " +
      "You should slow down, look carefully for hazards, and " +
      "proceed with caution.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Traffic Signals, Flashing Yellow Light (page 55)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=55",
  },
  {
    key: "flashing-yellow-arrow",
    quote:
      "The flashing yellow arrow means turns are allowed " +
      "after yielding to oncoming traffic and pedestrians in " +
      "crosswalks.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Traffic Signals, Flashing Yellow Arrow (page 56)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=56",
  },
  {
    key: "green-light",
    quote:
      "A green circular indication means \"go.\" You may " +
      "proceed forward. If you are in the left-turn lane, you " +
      "must yield to oncoming traffic and pedestrians in " +
      "crosswalks before turning left.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Traffic Signals, Green Circular Light (page 56)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=56",
  },
  {
    key: "do-not-block-intersection",
    quote:
      "You should not enter the intersection unless there is " +
      "sufficient space on the other side of the intersection " +
      "for your vehicle to completely pass through the " +
      "intersection, so you are not blocking the " +
      "intersection, regardless of a traffic control signal " +
      "to proceed.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Traffic Signals, Green Circular Light (page 56)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=56",
  },
  {
    key: "signal-out-four-way",
    quote:
      "Whenever a traffic signal is not functioning, treat " +
      "the intersection as a four-way stop.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Traffic Signals (page 56)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=56",
  },
  {
    key: "hawk-beacon",
    quote:
      "The Pedestrian Hybrid Beacon (sometimes called HAWK) " +
      "consists of two red lenses positioned over a single " +
      "yellow lens.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Pedestrian Crossings (page 56)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=56",
  },
  {
    key: "hawk-flashing-red",
    quote:
      "When the red lights flash alternately, the driver must " +
      "stop, yield to pedestrians in the crosswalk, and " +
      "proceed when the crosswalk is clear.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Pedestrian Crossings (page 57)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=57",
  },
  {
    key: "pavement-markings-purpose",
    quote:
      "The lines and symbols that are painted on the highways " +
      "divide lanes, tell you where it is not safe to pass " +
      "other vehicles, where you may not change lanes, which " +
      "lanes to use for turns, where pedestrians may walk, " +
      "and where you must stop for signs or traffic signals.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Pavement Markings (page 58)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=58",
  },
  {
    key: "dashed-yellow-line",
    quote:
      "A dashed yellow line means that vehicles in either " +
      "lane can cross the line if it is safe to do so.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Pavement Markings (page 58)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=58",
  },
  {
    key: "solid-and-dashed-yellow",
    quote:
      "One solid yellow line and one dashed yellow line means " +
      "that only vehicles in the lane with the dashed line " +
      "(lower lane in this drawing) can cross the lines to " +
      "pass other vehicles.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Pavement Markings (page 58)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=58",
  },
  {
    key: "double-solid-yellow",
    quote:
      "Two solid yellow lines mean that neither lane of " +
      "traffic can cross the lines unless they are turning " +
      "(if it is safe to do so). A driver can cross a double " +
      "yellow line when turning left into or out of a " +
      "driveway or entrance to a business. No passing is " +
      "allowed.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Pavement Markings (page 58)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=58",
  },
  {
    key: "shared-center-lane",
    quote:
      "Center lanes are reserved for making left turns (or " +
      "U-turns when they are permitted) from either direction " +
      "of travel.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Pavement Markings, Shared Lanes (page 58)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=58",
  },
  {
    key: "shared-center-lane-use",
    quote:
      "You may not travel in the shared turn lanes or " +
      "interfere with another vehicle preparing to make a " +
      "turn from the center turn lane.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Pavement Markings, Shared Lanes (page 58)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=58",
  },
  {
    key: "dashed-white-lines",
    quote:
      "On highways with more than one lane moving in one " +
      "direction, traffic lanes are separated by broken white " +
      "lines. Drive within these lines. Never straddle them. " +
      "Cross over them only when it is safe to change lanes.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Pavement Markings (page 59)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=59",
  },
  {
    key: "edge-lines",
    quote:
      "Solid white lines may be located along the side of the " +
      "road to show where the edge of the road is located. At " +
      "night or in bad weather, they help you stay on the " +
      "road.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Pavement Markings, Edge Lines (page 59)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=59",
  },
  {
    key: "solid-white-lane-line",
    quote:
      "Avoid changing lanes where a solid white line " +
      "separates lanes of traffic moving in the same " +
      "direction.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Pavement Markings (page 59)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=59",
  },
  {
    key: "double-white-lines",
    quote:
      "Lane changes are prohibited in areas where this type " +
      "of marking is present.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Pavement Markings (page 59)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=59",
  },
  {
    key: "bike-lane-line",
    quote:
      "Located along the side of the road, this indicates the " +
      "area is designated for bicycle traffic only. Bicycles " +
      "must travel in the same direction as adjacent traffic.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Pavement Markings (page 59)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=59",
  },
  {
    key: "green-bike-pavement",
    quote:
      "Green paint emphasizes where two movements cross over " +
      "each other.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Pavement Markings (page 60)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=60",
  },
  {
    key: "railroad-danger",
    quote:
      "Railroad (RR) crossings should always be considered " +
      "dangerous. Drivers should listen and look both ways " +
      "for an approaching train and for signals indicating an " +
      "approaching train.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Intersections, Railroad Crossings (page 60)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=60",
  },
  {
    key: "railroad-stop-distance",
    quote:
      "When required to stop, you should do so within 50 feet " +
      "but no less than 15 feet from the nearest rail of the " +
      "crossing.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Intersections, Railroad Crossings (page 60)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=60",
  },
  {
    key: "railroad-train-stopping",
    quote:
      "The stopping distance for a 150-car freight train " +
      "traveling 50 miles per hour is 7,000 feet or 1 and 1/3 " +
      "miles.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Intersections, Railroad Crossings (page 60)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=60",
  },
  {
    key: "railroad-gates",
    quote:
      "Gates are used to stop automobile traffic at many " +
      "particularly dangerous crossings. You must never drive " +
      "through, under or around a crossing gate that is " +
      "lowered or being lowered.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Intersections, Railroad Crossings (page 61)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=61",
  },
  {
    key: "railroad-flashing-lights",
    quote:
      "You must stop when the lights are actively flashing " +
      "and may only proceed when you can do so safely.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Intersections, Railroad Crossings (page 61)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=61",
  },
  {
    key: "railroad-second-train",
    quote:
      "Watch out for a second train. Do not proceed until you " +
      "are sure no train is approaching on another track.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Intersections, Railroad Crossings (page 61)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=61",
  },
  {
    key: "railroad-room-for-vehicle",
    quote:
      "When in traffic, never proceed across the tracks " +
      "unless there is adequate room for the full length of " +
      "your vehicle.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Intersections, Railroad Crossings (page 61)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=61",
  },
  {
    key: "roundabout-yield",
    quote:
      "In a roundabout intersection, all drivers must yield " +
      "the right-of-way to vehicles that are already in the " +
      "circle.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Intersections, Roundabouts (page 62)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=62",
  },
  {
    key: "roundabout-direction",
    quote:
      "Drivers must enter the roundabout counter-clockwise " +
      "and merge into the circle, whether they need to make a " +
      "right turn, a left turn, a U-turn, or continue forward " +
      "straight through the intersection.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Intersections, Roundabouts (page 62)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=62",
  },
  {
    key: "roundabout-signal-exit",
    quote:
      "Yield to traffic on your left already in the " +
      "roundabout. Keep your speed low. As you approach your " +
      "exit, turn your right turn signal on.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Intersections, Roundabouts (page 62)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=62",
  },
  {
    key: "thru-turn",
    quote:
      "A thru-turn is a method of managing intersection " +
      "traffic by prohibiting direct left turns.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Intersections, Thru-Turn (page 63)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=63",
  },
  {
    key: "basic-rule",
    quote:
      "Idaho law has a basic rule requiring you to drive at a " +
      "speed that is \"reasonable and prudent\" at all times.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Speed Limits (page 68)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=68",
  },
  {
    key: "basic-rule-too-slow",
    quote:
      "If you drive too slow for existing conditions and are " +
      "impeding the safe flow of traffic (even if under the " +
      "posted speed limit), you are violating the \"basic " +
      "rule\" law.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Speed Limits (page 68)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=68",
  },
  {
    key: "max-speed-interstate",
    quote:
      "Maximum speeds: 75 miles per hour on interstates " +
      "unless otherwise posted. (80 may be allowed where " +
      "posted). Vehicles shall not exceed 65 miles per hour " +
      "on state highways (70 may be allowed where posted).",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Speed Limits (page 68)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=68",
  },
  {
    key: "max-speed-urban",
    quote:
      "Maximum speed in any residential, business, or urban " +
      "district is 35 miles per hour unless otherwise posted.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Speed Limits (page 68)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=68",
  },
  {
    key: "min-speed",
    quote:
      "It is illegal to drive so slowly that you disrupt the " +
      "normal flow of traffic. You may not operate a vehicle " +
      "in the extreme left-hand lane for a period of time " +
      "that impedes the flow of other traffic traveling at a " +
      "lawful rate of speed.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Speed Limits, Minimum speeds (page 69)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=69",
  },
  {
    key: "school-zone-posted",
    quote:
      "School zones: Observe posted speed limits in school " +
      "zones.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Speed Limits, School zones (page 69)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=69",
  },
  {
    key: "work-zone-penalty",
    quote:
      "Violating a work zone speed limit can result in an " +
      "enhanced, fixed penalty.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Speed Limits, Work zones (page 69)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=69",
  },
  {
    key: "racing-illegal",
    quote:
      "It's illegal to engage in any vehicle race, speed " +
      "exhibition, or speed contest on any public road, " +
      "street, or highway.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Speed Limits, Racing (page 69)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=69",
  },
  {
    key: "stop-line-rule",
    quote:
      "STOP at a clearly marked stop line or before entering " +
      "the crosswalk on the near side of the intersection or " +
      "at the point nearest the intersecting highway before " +
      "entering it.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Stopping (page 69)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=69",
  },
  {
    key: "stop-red-turn-right",
    quote:
      "STOP for any steady red circular traffic indication " +
      "and remain stopped behind the stop line. If there is " +
      "no stop line, stop before entering the crosswalk. You " +
      "may turn right after stopping and yielding to " +
      "cross-traffic except where posted otherwise.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Stopping (page 69)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=69",
  },
  {
    key: "stop-green-arrow",
    quote:
      "When a green arrow is shown along with a steady red " +
      "indication, you may proceed only in the direction of " +
      "the green arrow.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Stopping (page 69)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=69",
  },
  {
    key: "stop-for-pedestrian",
    quote:
      "STOP or slow down at an intersection when necessary to " +
      "yield right-of-way to a pedestrian crossing within a " +
      "marked or unmarked crosswalk.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Stopping (page 70)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=70",
  },
  {
    key: "stop-from-driveway",
    quote:
      "STOP when entering a street from an alley, building, " +
      "driveway, or private road. Stop before crossing the " +
      "sidewalk and yield to pedestrians and traffic.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Stopping (page 70)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=70",
  },
  {
    key: "stop-for-emergency",
    quote:
      "STOP for emergency or police vehicles sounding a siren " +
      "or flashing red or blue lights. Pull over to the " +
      "nearest edge or curb on the right side of the highway " +
      "and clear of any intersection, and remain stopped " +
      "until the emergency vehicle has passed, or the police " +
      "officer has indicated you may proceed.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Stopping (page 70)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=70",
  },
  {
    key: "school-bus-stop",
    quote:
      "STOP for a school bus that is loading or unloading " +
      "students. Traffic must stop and remain stopped as long " +
      "as the red lights near the top of the bus are flashing " +
      "and/ or the stop arm on the left side of the bus is " +
      "extended.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Stopping (page 70)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=70",
  },
  {
    key: "school-bus-remain-stopped",
    quote:
      "You must stop when approaching a school bus that is " +
      "displaying flashing red lights while stopped to pick " +
      "up or drop off children. You must remain stopped until " +
      "all children are clear of the roadway and the bus.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Stopping (page 70)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=70",
  },
  {
    key: "school-bus-exception",
    quote:
      "You do not have to stop if you are traveling in the " +
      "opposite direction on highways with four or more lanes " +
      "if two lanes are going in each direction.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Stopping (page 70)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=70",
  },
  {
    key: "stop-signal-required",
    quote:
      "When slowing down or stopping, you must give a signal " +
      "to other drivers. You may use either the " +
      "brake-operated signal lights on the rear of your " +
      "vehicle or an arm signal.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Stopping, Stop signals (page 71)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=71",
  },
  {
    key: "stop-behind-see-tires",
    quote:
      "When stopping behind another vehicle, a safe driving " +
      "habit is to leave enough distance between the vehicles " +
      "to see the rear tires (where they touch the ground) of " +
      "the vehicle in front of you.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Stopping Behind a Vehicle (page 71)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=71",
  },
  {
    key: "signal-when",
    quote:
      "Always use a turn signal when you: Change lanes or " +
      "pass another vehicle Exit a roundabout Turn at an " +
      "intersection or into a driveway Enter or leave a " +
      "freeway or interstate highway",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Turns (page 72)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=72",
  },
  {
    key: "signal-distance",
    quote:
      "Signals must start at least 100 feet (in business or " +
      "residential areas) or five seconds (on freeways or " +
      "highways) before you turn or change lanes.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Turns (page 72)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=72",
  },
  {
    key: "arm-signals",
    quote:
      "Left: Your arm and hand extended straight out the " +
      "window. Right: Your arm and hand extended upward out " +
      "the window. Slow or Stop: Your arm and hand extended " +
      "downward out the window",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Turns (page 72)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=72",
  },
  {
    key: "right-turn-method",
    quote:
      "Signal and approach the intersection in the right-hand " +
      "lane, staying as close to the right curb as is " +
      "reasonable. Yield the right-of-way to pedestrians and " +
      "vehicles that have the right-of-way.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Turns, Right Turns (page 73)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=73",
  },
  {
    key: "right-turn-watch-bikes",
    quote:
      "Watch for bicycles that are approaching from the right " +
      "between your vehicle and the curb. Then turn into the " +
      "right-hand lane of the cross street. Do not swing " +
      "wide.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Turns, Right Turns (page 73)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=73",
  },
  {
    key: "left-turn-method",
    quote:
      "Signal and approach the intersection in the lane " +
      "closest to the left that is open to traffic going your " +
      "direction. If you are on a two-lane road, you should " +
      "move to the left side of your lane.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Turns, Left Turns (page 73)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=73",
  },
  {
    key: "left-turn-nearest-lane",
    quote:
      "Yield the right-of-way to pedestrians and oncoming " +
      "vehicles. When safe, turn into the nearest lane where " +
      "traffic moves in the direction you want to go. Do not " +
      "cut the corner.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Turns, Left Turns (page 73)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=73",
  },
  {
    key: "left-lane-must-turn-left",
    quote:
      "Vehicles in the left lane must turn left: Vehicles in " +
      "the right lane may turn left or continue straight " +
      "ahead. Vehicles turning left must remain in their lane " +
      "of travel until after completing the turn.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Turns (page 73)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=73",
  },
  {
    key: "left-turn-on-red",
    quote:
      "When turning left, from a one-way street, onto a " +
      "one-way street, you may proceed from a steady red " +
      "light after stopping and yielding for cross-traffic, " +
      "unless otherwise posted.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Turns, Turning at a Red Light (page 73)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=73",
  },
  {
    key: "u-turn-rules",
    quote:
      "U-turns are not legal if no U-turn signs are posted. " +
      "U-turns may not be made on any curve, or the approach " +
      "of or near the crest of a hill, where the vehicle " +
      "cannot be seen by approaching vehicles from either " +
      "direction within 500 feet, or a no passing zone. Stop " +
      "and yield to all traffic before completing a U-turn.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Turns, U-Turns (page 73)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=73",
  },
  {
    key: "keep-right",
    quote:
      "In most cases, the law requires that you stay as far " +
      "to the right side of the road as possible. The " +
      "exceptions are:",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Keep to the Right (page 74)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=74",
  },
  {
    key: "right-of-way-given",
    quote:
      "Always remember that right-of-way is something to be " +
      "given, not taken.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Right-of-Way & Yield (page 74)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=74",
  },
  {
    key: "yield-to-pedestrians",
    quote:
      "Motor vehicles must yield to a pedestrian when: The " +
      "pedestrian is in a marked or unmarked crosswalk at an " +
      "intersection. The vehicle is entering a street from an " +
      "alley or driveway. The pedestrian is a blind person " +
      "walking with a white cane or guide dog.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Pedestrians & Right-of-Way (page 75)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=75",
  },
  {
    key: "pedestrians-must-yield",
    quote:
      "Pedestrians must yield to motor vehicles when: The " +
      "pedestrian is crossing a street where there is no " +
      "crosswalk or intersection.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Pedestrians & Right-of-Way (page 75)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=75",
  },
  {
    key: "four-way-stop",
    quote:
      "At four-way stops , the first vehicle to arrive at a " +
      "four-way stop has the right of way. If two vehicles " +
      "arrive at the same time, the vehicle on the left must " +
      "yield to the vehicle on the right.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Yielding to Other Drivers (page 75)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=75",
  },
  {
    key: "uncontrolled-intersection",
    quote:
      "At an unmarked or uncontrolled intersection (no signs " +
      "or signals), if two vehicles arrive at the same time, " +
      "the vehicle on the left must yield to the vehicle on " +
      "the right.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Yielding to Other Drivers (page 75)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=75",
  },
  {
    key: "t-intersection",
    quote:
      "At an unmarked or uncontrolled three-way \"T\" " +
      "intersection where you will have to turn either right " +
      "or left, you must stop and/or yield to any drivers " +
      "approaching from the other two directions.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Yielding to Other Drivers (page 75)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=75",
  },
  {
    key: "yield-alley-after-stop",
    quote:
      "When entering a street from an alley, driveway, or " +
      "garage after stopping. After stopping for a stop sign " +
      "at a two-way stop, yield to cross-traffic.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Yielding to Other Drivers (page 75)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=75",
  },
  {
    key: "left-turn-yield",
    quote:
      "When making a left turn, always yield to oncoming " +
      "traffic in the intersection unless directed otherwise " +
      "by a traffic-control device.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Yielding to Other Drivers (page 76)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=76",
  },
  {
    key: "work-zone-yield",
    quote:
      "In work zones, yield to all vehicles or pedestrians " +
      "working on a highway construction project.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Yielding to Other Drivers (page 76)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=76",
  },
  {
    key: "power-outage-yield",
    quote:
      "When a stop light is not functioning due to a power " +
      "outage, yield to other drivers in the same manner as " +
      "four-way stops.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Yielding to Other Drivers (page 76)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=76",
  },
  {
    key: "passing-judgment",
    quote:
      "No Passing\" signs and pavement markings can tell you " +
      "where passing is prohibited or unsafe, but only you " +
      "can tell when it is safe.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Passing (page 76)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=76",
  },
  {
    key: "passing-prohibited-100ft",
    quote:
      "Passing is prohibited when you are in or approaching " +
      "the following areas: Hills, curves, or other " +
      "obstructions on two-lane roads that prevent you from " +
      "seeing oncoming vehicles that might pose a hazard " +
      "Within 100 feet of an intersection, unless otherwise " +
      "indicated by traffic-control devices",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Passing (page 76)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=76",
  },
  {
    key: "passing-crosswalk-bus",
    quote:
      "When a school bus is stopped to load or unload " +
      "passengers When a vehicle ahead of you has stopped at " +
      "a marked or unmarked crosswalk to let a pedestrian " +
      "cross When you must go off the pavement or roadway to " +
      "pass",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Passing (page 77)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=77",
  },
  {
    key: "passing-speed-exception",
    quote:
      "you may exceed the posted speed limit by up to 15 " +
      "miles per hour while passing another vehicle that is " +
      "traveling below the posted speed limit on a two-lane " +
      "roadway. The posted speed limit must be 55 miles per " +
      "hour or greater. This does not apply in work zones.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Passing, Passing Speed Limit Exception (page 77)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=77",
  },
  {
    key: "passing-on-right",
    quote:
      "Passing on the right is prohibited except: When the " +
      "vehicle you're overtaking on a two-lane, two-way road " +
      "is signaling to turn left On a one-way or multi-lane " +
      "street with two or more lanes going your direction",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Passing, Passing on the Right (page 77)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=77",
  },
  {
    key: "passing-return-mirror",
    quote:
      "Wait until you have passed the vehicle and can see it " +
      "in your rear-view mirror before turning on your right " +
      "turn signal and moving back into the right lane.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Passing, When Passing Other Vehicles (page 77)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=77",
  },
  {
    key: "passing-200-feet",
    quote:
      "Complete a pass before coming within 200 feet of " +
      "oncoming traffic.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Passing (page 78)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=78",
  },
  {
    key: "being-passed",
    quote:
      "Help other drivers pass you safely. Move to the right " +
      "side of your lane to give them more room and a better " +
      "view of the road ahead.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Passing, When Being Passed (page 78)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=78",
  },
  {
    key: "funeral-procession",
    quote:
      "If you see a funeral procession on the road, do not " +
      "drive between or join vehicles in the formation unless " +
      "you are authorized to do so by a police officer.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Funeral Processions (page 78)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=78",
  },
  {
    key: "funeral-right-of-way",
    quote:
      "You may not enter an intersection when the procession " +
      "is proceeding through (regardless of the color of the " +
      "traffic light) unless you can do so without crossing " +
      "the path of the procession. Always give funeral " +
      "processions the right of way.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Funeral Processions (page 78)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=78",
  },
  {
    key: "funeral-lights",
    quote:
      "All vehicles in a funeral procession are required to " +
      "have their headlights and tail lights turned on.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Funeral Processions (page 78)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=78",
  },
  {
    key: "slow-vehicle-turn-out",
    quote:
      "Any vehicle traveling slower than the normal speed of " +
      "traffic delaying three or more other vehicles in a " +
      "rural area or on a two-lane highway must turn off the " +
      "road wherever safe to let the other vehicles pass.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Slow-Moving Vehicle (page 79)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=79",
  },
  {
    key: "slow-vehicle-daylight",
    quote:
      "Slow-moving vehicles designed to travel no faster than " +
      "25 miles per hour may travel on public highways during " +
      "daylight hours only (30 minutes before sunrise to 30 " +
      "minutes after sunset)",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Slow-Moving Vehicle (page 79)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=79",
  },
  {
    key: "three-second-rule",
    quote:
      "The three-second following distance rule is the " +
      "minimum recommended safest procedure to use. At high " +
      "speeds or in bad weather you will need to increase " +
      "your following distance.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Following Distances (page 79)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=79",
  },
  {
    key: "three-second-method",
    quote:
      "Choose a fixed object, such as a sign or tree ahead of " +
      "the car in front of you. As the car ahead passes the " +
      "object, count off three seconds (one-thousand-one, " +
      "one-thousand-two, one-thousand-three).",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Following Distances (page 79)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=79",
  },
  {
    key: "space-cushion",
    quote:
      "Try to keep plenty of space between your car and " +
      "others on all sides. Stay in the middle of your lane " +
      "and always make sure there is enough room ahead to " +
      "stop or pass safely. If a car follows too closely, " +
      "slow down and let it pass.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Keep a Space Cushion (page 80)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=80",
  },
  {
    key: "parking-18-inches",
    quote:
      "When parking on a public road, you must park parallel " +
      "to and within 18 inches of the curb or edge of the " +
      "roadway, facing in the same direction as traffic on " +
      "your side of the road.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Parking (page 80)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=80",
  },
  {
    key: "parking-on-hill",
    quote:
      "turn your front wheels (1) sharply toward and against " +
      "the curb or edge of the road if you are facing " +
      "downhill, or (2) if you are facing uphill, turn your " +
      "wheels sharply away and against the curb (if there is " +
      "no curb, turn the wheels sharply toward the edge of " +
      "the road).",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Parking on a Hill or Incline (page 81)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=81",
  },
  {
    key: "no-parking-list",
    quote:
      "Parking is not allowed: In bike lanes On sidewalks On " +
      "the street side of any parked vehicle. (This is known " +
      "as \"double parking\") In intersections Within 50 feet " +
      "of railroad tracks",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "No-Parking Zones (page 81)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=81",
  },
  {
    key: "no-parking-distances",
    quote:
      "Within 15 feet of a fire hydrant Within 20 feet of a " +
      "crosswalk Within 30 feet of a stop sign, yield sign, " +
      "or traffic signal Within 20 feet of a fire station " +
      "driveway",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "No-Parking Zones (page 81)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=81",
  },
  {
    key: "handicapped-parking",
    quote:
      "Non-handicapped drivers are prohibited from parking in " +
      "such spaces and may be fined for violations.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Handicapped Parking (page 82)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=82",
  },
  {
    key: "backing-look-back",
    quote:
      "Put your right arm on the back of the passenger seat " +
      "and look over your shoulder directly through the rear " +
      "window. Don't rely on your mirrors.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Backing (page 82)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=82",
  },
  {
    key: "backing-prohibited-freeway",
    quote:
      "Backing is always prohibited on freeways, expressways, " +
      "and other controlled-access highways, including the " +
      "shoulder. Elsewhere, backing is prohibited unless it " +
      "can be done safely and without interfering with other " +
      "traffic.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Backing (page 82)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=82",
  },
  {
    key: "freeway-speeds",
    quote:
      "Where designated and as weather conditions permit, " +
      "vehicles may travel at speeds up to 80 miles per hour " +
      "on rural interstates, and up to 65 on urban interstate " +
      "highways, unless otherwise posted.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Freeway Driving (page 83)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=83",
  },
  {
    key: "freeway-entrance-parts",
    quote:
      "Freeway entrances usually have three basic parts: an " +
      "entrance ramp, an acceleration lane, and a merging " +
      "area.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Entering a Freeway (page 83)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=83",
  },
  {
    key: "freeway-merge-yield",
    quote:
      "As the ramp straightens, accelerate to the speed of " +
      "the freeway traffic so you can blend in smoothly. " +
      "Remember, you must yield to the traffic already on the " +
      "highway.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Entering a Freeway (page 84)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=84",
  },
  {
    key: "freeway-wrong-ramp",
    quote:
      "If you enter the wrong entrance by mistake, never try " +
      "to back up or turn around through the median. Freeway " +
      "median crossovers are for highway maintenance or " +
      "emergency vehicle use only; it is illegal for any " +
      "other vehicles to use them.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Entering a Freeway (page 84)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=84",
  },
  {
    key: "freeway-signal-five",
    quote:
      "Always signal for at least five seconds before making " +
      "a lane change or exiting a freeway.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Changing Lanes (page 85)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=85",
  },
  {
    key: "freeway-lane-choice",
    quote:
      "Most of the time you should drive in the far right or " +
      "center lane of the freeway. The left lane is for " +
      "higher-speed traffic and passing.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Changing Lanes (page 85)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=85",
  },
  {
    key: "freeway-median",
    quote:
      "It's illegal to drive across a barrier or unpaved " +
      "strip that separates two halves of a roadway, except " +
      "at an authorized opening or crossover. This is not " +
      "allowed on interstate highways (freeways); crossovers " +
      "are for emergency vehicles only.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Changing Lanes, Median Strip (page 85)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=85",
  },
  {
    key: "freeway-exit-lane",
    quote:
      "If you are not already in the correct lane, about a " +
      "half mile before the exit, signal and move into the " +
      "lane nearest the exit. Signal, then move into the " +
      "deceleration lane provided to let you slow down " +
      "without interrupting the flow of traffic.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Leaving the Freeway (page 86)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=86",
  },
  {
    key: "driver-error-90",
    quote: "Driver error causes more than 90% of highway crashes.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "The Driving Task (page 86)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=86",
  },
  {
    key: "starting-out-check",
    quote:
      "Before you get into your vehicle, always look in front " +
      "and back of it to see if there is a child or obstacle " +
      "you might run over.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Starting Out (page 87)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=87",
  },
  {
    key: "five-step-lane-change",
    quote:
      "Check mirrors. 2. Signal for the required five seconds " +
      "or 100 feet before moving your vehicle. 3. Glance over " +
      "your shoulder in the direction you're going to move. " +
      "4. When it is safe to do so, make your move gradually " +
      "and smoothly. 5. Cancel the turn signal.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Starting Out (page 87)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=87",
  },
  {
    key: "mood-affects-driving",
    quote:
      "If you're worried or distracted, you can't count on " +
      "being alert enough to drive safely. Quarrels, " +
      "misunderstandings, financial problems, illness in the " +
      "family, personal fears, or over-confidence make you " +
      "far more likely to have a crash. If you're upset, let " +
      "someone else drive.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Your Mood Affects Your Driving (page 88)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=88",
  },
  {
    key: "hand-position",
    quote:
      "Be prepared to react promptly to emergencies by " +
      "driving with both hands placed on opposite sides of " +
      "the steering wheel at approximately the nine o'clock " +
      "and three o'clock positions.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Defensive Driving (page 89)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=89",
  },
  {
    key: "look-ahead",
    quote:
      "Good drivers keep an eye on what's happening about ten " +
      "to 15 seconds ahead. That's about a block in city " +
      "driving.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Defensive Driving, Look Ahead (page 89)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=89",
  },
  {
    key: "look-behind",
    quote:
      "Check the traffic behind you frequently (several times " +
      "a minute) so you'll know if somebody is tailgating, " +
      "coming up too fast or trying to pass. Most rear-end " +
      "collisions are caused by vehicles following too " +
      "closely.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Defensive Driving, Look Behind (page 90)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=90",
  },
  {
    key: "blind-spots",
    quote:
      "Never rely on your mirrors alone. Before you make any " +
      "move to the side, quickly turn your head to see if " +
      "your blind spot is clear.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Defensive Driving, Blind Spots (page 90)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=90",
  },
  {
    key: "predict-the-worst",
    quote:
      "After spotting a potential hazard, predict what will " +
      "happen; it's safest to predict the worst. For example, " +
      "if you see children playing on a street corner, " +
      "prepare for one of them to run in front of you.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Defensive Driving, Predict (page 90)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=90",
  },
  {
    key: "distraction-list",
    quote:
      "Texting or talking on phone Eating Reading or writing " +
      "Changing the radio station or lighting a cigarette " +
      "Applying makeup or shaving Looking for things inside " +
      "your vehicle Dealing with children or pets",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Things that Can Distract Your Attention (page 91)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=91",
  },
  {
    key: "stereo-volume",
    quote:
      "Keep the stereo volume low enough so that you can " +
      "still hear things outside your car. You must be able " +
      "to hear emergency sirens, car horns, screeching tires, " +
      "and other sounds outside your car.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Ways to Keep From Getting Distracted (page 92)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=92",
  },
  {
    key: "texting-illegal",
    quote:
      "In Idaho, reading, writing, or sending of written " +
      "communication (text messaging) while driving is " +
      "illegal and considered an infraction.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Cell Phones (page 92)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=92",
  },
  {
    key: "texting-six-times",
    quote:
      "Texting while driving is six times more dangerous than " +
      "driving impaired.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Cell Phones (page 93)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=93",
  },
  {
    key: "drowsy-driving",
    quote:
      "Stop driving when you feel drowsy. Pull off the " +
      "highway at the first rest stop or service area. If " +
      "you're feeling drowsy, get off the road and take a " +
      "nap.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Fatigue & Highway Hypnosis (page 93)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=93",
  },
  {
    key: "highway-hypnosis",
    quote:
      "Freeway drivers often suffer highway hypnosis, " +
      "drowsiness brought on by monotony and the drone of " +
      "wind and tires.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Fatigue & Highway Hypnosis (page 93)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=93",
  },
  {
    key: "unattended-vehicles",
    quote:
      "Vehicles, if left unattended, must be removed prior to " +
      "darkness or be subject to towing at the owner's " +
      "expense.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Unattended Vehicles (page 93)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=93",
  },
  {
    key: "alive-at-25",
    quote:
      "Alive at 25 is a defensive driving course offered for " +
      "those who are 15 through 24 years old.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Alive at 25 (page 94)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=94",
  },
  {
    key: "emergency-vehicle-pull-over",
    quote:
      "When being approached by an emergency or police " +
      "vehicle sounding a siren or flashing red or blue " +
      "lights, you must immediately pull to the nearest curb " +
      "or the edge on the right side of the roadway and stop. " +
      "Remain stopped until the emergency vehicle has passed " +
      "ahead of you.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Emergency Vehicles (page 95)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=95",
  },
  {
    key: "move-over-slow-down",
    quote:
      "When you are approaching an emergency or police " +
      "vehicle that is stopped with lights flashing or a tow " +
      "truck or incident response vehicle, you are required " +
      "to immediately reduce your speed below the posted " +
      "speed limit and proceed with caution.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Emergency Vehicles (page 95)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=95",
  },
  {
    key: "move-over-change-lanes",
    quote:
      "If you are traveling on a road with two or more lanes " +
      "traveling in the same direction, you are also required " +
      "to change lanes into a lane that is not adjacent to " +
      "the emergency vehicle, as soon as possible, if it is " +
      "safe to do so.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Emergency Vehicles (page 95)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=95",
  },
  {
    key: "pedestrian-no-crosswalk",
    quote:
      "A pedestrian is crossing where there is no painted " +
      "crosswalk. You must stop and let them finish crossing, " +
      "even if you technically have the right-of-way.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Pedestrians (page 96)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=96",
  },
  {
    key: "pedestrian-stopped-vehicle",
    quote:
      "One vehicle in the right lane has stopped for a " +
      "pedestrian to cross. You are in the left lane. DO NOT " +
      "pass the other vehicle. You must wait for the " +
      "pedestrian to cross and then be sure it is safe to " +
      "proceed.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Pedestrians (page 96)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=96",
  },
  {
    key: "children-darting",
    quote:
      "Darting into traffic from between or around a parked " +
      "car is a common cause of serious injury to children.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Children at Play (page 97)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=97",
  },
  {
    key: "horseback-rights",
    quote:
      "People riding horses are allowed to use most public " +
      "roads. They also have the same rights as motor vehicle " +
      "drivers and must obey the same rules.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Horseback Riders (page 97)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=97",
  },
  {
    key: "horseback-no-horn",
    quote:
      "Never sound your horn because you may frighten the " +
      "horse and cause an accident.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Horseback Riders (page 98)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=98",
  },
  {
    key: "bicyclists-rights",
    quote:
      "Bicyclists are legally allowed to ride on all Idaho " +
      "roadways and have the same rights as drivers, and are " +
      "required to ride with the flow of traffic.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Bicyclists (page 98)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=98",
  },
  {
    key: "bicycle-three-feet",
    quote:
      "To increase the safety margin when passing a " +
      "bicyclist, move into the left lane if possible. If you " +
      "are not able to change lanes, pass with as much " +
      "clearance as possible. A safe margin is at least three " +
      "(3) feet.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Bicyclists (page 98)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=98",
  },
  {
    key: "idaho-stop-sign",
    quote:
      "In Idaho, bicyclists do not need to come to a complete " +
      "stop at stop signs. They must, however, yield to the " +
      "right-of-way of vehicles in, or already at, the " +
      "intersection (or close enough to constitute a " +
      "potential hazard)",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Bicyclists (page 98)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=98",
  },
  {
    key: "bicycle-red-light",
    quote:
      "Bicyclists may proceed with caution through a red " +
      "light after stopping and yielding the right-of-way to " +
      "vehicles already in the intersection (or close enough " +
      "to constitute a potential",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Bicyclists (page 98)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=98",
  },
  {
    key: "right-hook",
    quote:
      "If you are preparing for a right turn and a bicyclist " +
      "is ahead of you, do not assume that you can beat the " +
      "bicyclist to the turn. Misjudgment can result in a " +
      "broadside crash called the \"right hook.\"",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Bicyclists, Right Turns When Moving (page 99)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=99",
  },
  {
    key: "bicycle-right-turn-stopped",
    quote:
      "When stopped, never look only to the left before " +
      "turning right. Always look left, right and to the " +
      "rear, checking the right first.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Bicyclists, Right Turns When Stopped (page 99)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=99",
  },
  {
    key: "bicycle-sidewalks",
    quote:
      "Bicyclists can legally ride on sidewalks in most " +
      "communities, although there is no legal requirement to " +
      "use them.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Bicyclists, Sidewalks (page 100)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=100",
  },
  {
    key: "bike-lane-no-parking",
    quote:
      "Parking in bike lanes is not allowed. These are " +
      "designated travel lanes for bicyclists and should not " +
      "be blocked.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Bicyclists, Bike Lanes (page 101)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=101",
  },
  {
    key: "dutch-reach",
    quote:
      "When you are about to exit the car, reach across your " +
      "body for the door handle with your opposite hand.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Bicyclists, Parallel Parking (page 101)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=101",
  },
  {
    key: "sharrow",
    quote:
      "A shared-lane marking or \"sharrow\" is a street marking " +
      "placed in the travel lane to indicate where people " +
      "should preferably cycle.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Bicyclists, Sharrows (page 101)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=101",
  },
  {
    key: "motorcycle-full-lane",
    quote:
      "Motorcycles are entitled to the same full-lane width " +
      "as all other motor vehicles. Good motorcycle riders " +
      "are constantly changing positions within the lane so " +
      "they can see and be seen, and to avoid objects in the " +
      "road.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Motorcycles, Lanes (page 103)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=103",
  },
  {
    key: "motorcycle-never-share-lane",
    quote:
      "Never move into the same lane alongside a motorcycle, " +
      "even if the lane is wide and the motorcycle rider is " +
      "riding far to one side.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Motorcycles, Lanes (page 103)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=103",
  },
  {
    key: "motorcycle-signals",
    quote:
      "Most motorcycles do not have turn signals that turn " +
      "off automatically. At times, motorcycle riders may " +
      "forget to switch the signal off.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Motorcycles, Turn Signals (page 103)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=103",
  },
  {
    key: "motorcycle-half-crashes",
    quote:
      "Approximately one-half of all motorcycle crashes " +
      "involve another motor vehicle, so it is important to " +
      "practice safe driving in order to help avoid " +
      "collisions.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Motorcycles (page 103)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=103",
  },
  {
    key: "motorcycle-left-turn",
    quote:
      "Cars turning left in front of an oncoming motorcycle " +
      "cause serious motor vehicle crashes. Drivers may fail " +
      "to see a motorcycle rider in the traffic scene.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Motorcycles, Left Turns (page 103)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=103",
  },
  {
    key: "motorcycle-judge-speed",
    quote:
      "As a driver, the correct precaution is for you to look " +
      "and then look again. Make sure you see the motorcycle " +
      "and know its speed before you make a left-turn.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Motorcycles, Left Turns (page 103)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=103",
  },
  {
    key: "motorcycle-following",
    quote:
      "Allow more than three (3) seconds following distance " +
      "between your vehicle and the motorcycle. This allows " +
      "you and the motorcycle rider enough time to maneuver " +
      "or stop in an emergency.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Motorcycles, Visibility (page 104)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=104",
  },
  {
    key: "large-vehicle-limits",
    quote:
      "The larger their blind spots The more room they need " +
      "to turn or change lanes The longer it takes them to " +
      "stop The longer it takes them to pass",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Large Vehicles (page 104)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=104",
  },
  {
    key: "truck-blind-spots",
    quote:
      "If you are following a large vehicle and you are " +
      "unable to see the driver's mirrors, then the driver " +
      "cannot see you.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Large Vehicles, Blind Spots (page 105)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=105",
  },
  {
    key: "truck-stopping-distance",
    quote:
      "it takes a loaded truck with properly adjusted brakes " +
      "450 feet to come to a complete stop when traveling 55 " +
      "miles per hour on a dry road.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Large Vehicles, Speeding Up and Stopping (page 105)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=105",
  },
  {
    key: "truck-wide-right-turn",
    quote:
      "When turning right, these drivers may angle into the " +
      "left lane, so they can make the right turn without " +
      "running over the curb or hitting something. Do not try " +
      "to squeeze by on the right side when a large vehicle " +
      "is making this type of turn.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Large Vehicles, Turning Space (page 106)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=106",
  },
  {
    key: "hazmat-railroad",
    quote:
      "All vehicles carrying hazardous materials must stop at " +
      "all railroad crossings, so be prepared to stop if you " +
      "are following one.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Large Vehicles, Hazardous Materials (page 106)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=106",
  },
  {
    key: "runaway-ramps",
    quote:
      "do not park in or near \"escape\" or \"runaway\" ramps. " +
      "These ramps should only be used to stop vehicles whose " +
      "brakes have failed.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Large Vehicles, Long, Steep Grades (page 106)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=106",
  },
  {
    key: "traveler-511",
    quote:
      "For travel information, dial \"511\" or go to " +
      "511.idaho.gov for up-to-date information",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Idaho's 511 Traveler Services (page 107)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=107",
  },
  {
    key: "mountain-lower-gear",
    quote:
      "Use a lower gear to control speeds while going down " +
      "long hills. Never coast downhill by shifting into " +
      "neutral or disengaging the clutch.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Mountain Driving (page 107)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=107",
  },
  {
    key: "mountain-horn",
    quote:
      "Sound the horn when approaching any curve on a narrow " +
      "road where the view is obstructed.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Mountain Driving (page 107)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=107",
  },
  {
    key: "wildlife-herd",
    quote:
      "When you see a large animal on or near the road, slow " +
      "down and proceed with caution. These are herd animals, " +
      "and others are usually nearby.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Wildlife Areas (page 107)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=107",
  },
  {
    key: "small-animal",
    quote:
      "When you see a small animal in the road, think of your " +
      "own safety. Don't try to dodge it unless you are sure " +
      "it is safe to do so.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Wildlife Areas (page 107)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=107",
  },
  {
    key: "livestock-right-of-way",
    quote:
      "Horses, cattle, sheep, goats, and other livestock " +
      "under controlled movement over a highway or road have " +
      "the right-of-way in Idaho.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Open Range (page 108)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=108",
  },
  {
    key: "open-range-definition",
    quote:
      "Drivers must be alert for animals grazing unattended " +
      "on \"open range,\" which means almost all areas outside " +
      "of city limits and herd districts upon which livestock " +
      "by custom, license, lease, or permit, are grazed or " +
      "permitted to roam.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Open Range (page 108)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=108",
  },
  {
    key: "open-range-fences",
    quote:
      "The presence of fences does not necessarily mean that " +
      "animals are not present or do not have the " +
      "right-of-way. Be especially careful driving at night.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Open Range (page 108)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=108",
  },
  {
    key: "open-range-liability",
    quote:
      "If you strike and injure or kill livestock or domestic " +
      "animals that are on the open range or under controlled " +
      "movement, the owner of the animal(s) is not liable for " +
      "damages to you or your vehicle. You may be liable for " +
      "the injuries or death of the animal if you are found " +
      "to have been negligent.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Open Range (page 108)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=108",
  },
  {
    key: "night-vision-reduced",
    quote:
      "At night, your vision is reduced. To make sure you " +
      "have time to react to danger, always drive slowly " +
      "enough so you can stop within the distance you can see " +
      "ahead.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Night Driving (page 108)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=108",
  },
  {
    key: "night-headlights",
    quote:
      "Turn on your headlights (not just your parking lights) " +
      "when driving between sunset and sunrise, or when " +
      "visibility has been reduced to below 500 feet.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Night Driving (page 109)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=109",
  },
  {
    key: "night-no-sunglasses",
    quote:
      "Never wear sunglasses when light levels are low. Keep " +
      "your windshield clean, both inside and out.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Night Driving (page 109)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=109",
  },
  {
    key: "night-glare",
    quote:
      "Avoid looking into the headlights of oncoming " +
      "vehicles. Instead, shift your eyes down to the lower " +
      "right side of your traffic lane. This keeps the light " +
      "from hitting your eyes directly.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Night Driving (page 109)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=109",
  },
  {
    key: "night-dim-beams",
    quote:
      "Dim your headlights to low beam when approaching or " +
      "following another vehicle or on lighted roads.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Night Driving (page 109)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=109",
  },
  {
    key: "snowplow-following",
    quote:
      "Remain two car lengths behind snowplow trucks for " +
      "every 10 miles per hour you drive. Sand being spread " +
      "by trucks can damage your vehicle.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Snow Removal Equipment (page 110)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=110",
  },
  {
    key: "snowplow-passing",
    quote:
      "Do not pass a snowplow unless it is absolutely " +
      "necessary. If you must pass, do so only when you can " +
      "clearly see the road ahead. Do not pass on the side " +
      "where the plow is spraying snow. If you do, the snow's " +
      "force can knock your car out of control.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Snow Removal Equipment (page 110)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=110",
  },
  {
    key: "fog-headlights",
    quote:
      "You are required to turn on your headlights in the " +
      "daytime when vision is reduced to 500 feet or less. " +
      "Low beams are best at such times.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Fog, Smoke, Dust, or Rain (page 110)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=110",
  },
  {
    key: "no-cruise-control-wet",
    quote:
      "For safety reasons, you should not use cruise control " +
      "if the road is wet and/or icy.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Fog, Smoke, Dust, or Rain (page 110)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=110",
  },
  {
    key: "flashers-while-moving",
    quote:
      "avoid using your emergency flashers while moving-other " +
      "drivers may think you've stopped.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Fog, Smoke, Dust, or Rain (page 111)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=111",
  },
  {
    key: "light-rain-greasy",
    quote:
      "roads are more dangerous at the start of a light rain " +
      "when road oil and water mix to form a greasy film on " +
      "the road.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Rain & Hydroplaning (page 111)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=111",
  },
  {
    key: "hydroplane-speeds",
    quote:
      "At speeds up to 35 miles per hour, most tires grip the " +
      "road surface even when it's wet. As speed increases, " +
      "the tires can't grip the road as well. At 55 miles per " +
      "hour, the tires may lose all contact with the road.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Rain & Hydroplaning (page 111)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=111",
  },
  {
    key: "hydroplane-recovery",
    quote:
      "Maintain a steady speed and keep moving in a straight " +
      "line. Slowly take your foot off the gas pedal. Don't " +
      "try to stop or turn quickly until your tires are " +
      "gripping the road again.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Rain & Hydroplaning (page 111)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=111",
  },
  {
    key: "flash-flood-turn-around",
    quote:
      "DO NOT DRIVE through flooded areas. If you see a " +
      "flooded roadway ahead, turn around and find another " +
      "route to your destination.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Flash Floods (page 112)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=112",
  },
  {
    key: "flash-flood-depth",
    quote:
      "As little as six inches of fast moving water can knock " +
      "you off your feet. Fast-moving water two feet deep can " +
      "wash away a vehicle",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Flash Floods (page 112)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=112",
  },
  {
    key: "winter-slow-three-times",
    quote:
      "Start slowing your car down at least three times " +
      "sooner than you normally do when turning or stopping.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Winter Driving (page 113)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=113",
  },
  {
    key: "winter-bridges-ice",
    quote:
      "Be aware of potential icy areas such as shady spots, " +
      "bridges, and overpasses. Ice may form sooner or remain " +
      "on bridges and overpasses longer, since they are " +
      "exposed on their undersides and are deprived of ground",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Winter Driving (page 113)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=113",
  },
  {
    key: "stranded-stay-with-car",
    quote:
      "If you get stranded, stay with your vehicle if heavy " +
      "snow is falling. Most deaths occur when people leave " +
      "their car, get lost, and freeze.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Getting Stranded During Winter Weather (page 115)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=115",
  },
  {
    key: "skid-rear-wheels",
    quote:
      "In most skids, the rear wheels lose their grip on the " +
      "pavement and slide left or right.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Skidding (page 115)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=115",
  },
  {
    key: "skid-recovery",
    quote:
      "When a skid starts, don't panic and don't hit the " +
      "brake. Immediately take your foot off the gas pedal, " +
      "then steer in the direction of the skid.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Skidding, Recovery (page 116)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=116",
  },
  {
    key: "abs-no-pumping",
    quote:
      "During an emergency stop that requires hard braking, " +
      "apply continuous pressure on the brake pedal. Do Not " +
      "Pump the Brake Pedal as this will defeat the system's " +
      "design, reduce the effectiveness of the ABS, and " +
      "increase the distance required to stop the vehicle.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Stopping Quickly (page 116)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=116",
  },
  {
    key: "abs-steering-control",
    quote:
      "The ABS will activate immediately, allowing you to " +
      "retain full steering control during hard braking and " +
      "on slippery surfaces; however, ABS does not decrease " +
      "stopping distances.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Stopping Quickly (page 116)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=116",
  },
  {
    key: "no-abs-stopping",
    quote:
      "If the brakes lock, you will feel the vehicle begin to " +
      "skid. Quickly let up on the brake pedal. As soon as " +
      "the vehicle stops skidding, press down on the brake " +
      "pedal again and repeat this press and release cycle if " +
      "necessary until the vehicle has stopped.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Stopping Quickly (page 117)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=117",
  },
  {
    key: "car-trouble-flares",
    quote:
      "If you have emergency flares, place them 200 to 300 " +
      "feet behind your car to give others warning.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "If You Have Car Trouble (page 117)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=117",
  },
  {
    key: "head-on-pull-right",
    quote:
      "Pull to the right as far as possible. Don't go left. " +
      "The other driver may recover and hit you broadside.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Oncoming Car in Your Lane (page 119)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=119",
  },
  {
    key: "hit-unattended-vehicle",
    quote:
      "You must make a reasonable effort to find the owner of " +
      "an unattended vehicle or other property damaged in a " +
      "crash in which you are involved. If the owner cannot " +
      "be located, leave a note telling about the crash with " +
      "your name and phone number.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "If You Hit an Unattended Vehicle (page 119)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=119",
  },
  {
    key: "hit-unattended-notify",
    quote:
      "You must also notify police if the damage was more " +
      "than $1,500 or someone was injured.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "If You Hit an Unattended Vehicle (page 119)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=119",
  },
  {
    key: "tire-blowout",
    quote:
      "Hold the steering wheel tightly and keep the car " +
      "headed straight down the road. Ease your foot off the " +
      "gas pedal, but do not apply the brakes until you have " +
      "complete control.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Tire Blowouts (page 120)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=120",
  },
  {
    key: "run-off-road",
    quote:
      "Grip the wheel tightly and steer straight ahead. Stay " +
      "on the shoulder if there are no immediate obstacles.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Running Off the Road (page 120)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=120",
  },
  {
    key: "crash-scene-first",
    quote:
      "If police or medical help is already there, don't " +
      "stop. Move on as officers direct. If you're the first " +
      "one to arrive, you should stop and call 911 and assist " +
      "if you are able.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "At the Scene of the Crash (page 120)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=120",
  },
  {
    key: "quick-clearance",
    quote:
      "Idaho's \"Quick Clearance\" law requires anyone involved " +
      "in the crash (on an interstate or major divided " +
      "highway), that does not cause a death or injury, to " +
      "safely move the vehicle to a shoulder, median, or " +
      "emergency lane.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Crashes & the Law (page 121)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=121",
  },
  {
    key: "good-samaritan",
    quote:
      "Good Samaritan Law protects you from civil liability " +
      "if you act in good faith. However, don't try to move " +
      "an injured person from a wrecked vehicle unless you " +
      "have the necessary medical training or there is an " +
      "immediate danger, such as fire.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Crashes & the Law (page 121)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=121",
  },
  {
    key: "crash-report-threshold",
    quote:
      "You must report to police any motor vehicle crash in " +
      "which someone is injured or property damage is more " +
      "than $1,500.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Crashes & the Law (page 121)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=121",
  },
  {
    key: "driver-licence-compact",
    quote:
      "Idaho is a member of this compact, which is an " +
      "agreement among states to promote driver compliance " +
      "with driving laws, ordinances, and administrative " +
      "actions in member states.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "The Driver License Compact (page 122)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=122",
  },
  {
    key: "point-system",
    quote:
      "Your driving record is evaluated by a point system in " +
      "which you receive one to four points for each moving " +
      "traffic violation on your record.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Suspension & Point Violations System (page 123)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=123",
  },
  {
    key: "point-suspensions",
    quote:
      "8 to 11 in any 12 months Warning letter 12 to 17 in " +
      "any 12 months 30-day suspension 18 to 23 in any 24 " +
      "months 90-day suspension 24 or more in any 36 months",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Suspension & Point Violations System (page 123)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=123",
  },
  {
    key: "defensive-driving-points",
    quote:
      "A maximum of three (3) points may be removed from your " +
      "driving record upon completion of an ITD-approved DDC.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Suspension & Point Violations System (page 123)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=123",
  },
  {
    key: "suspension-reasons",
    quote:
      "Driving while under the influence of alcohol or other " +
      "drugs Using a motor vehicle to commit a felony",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Reasons for Suspension (page 124)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=124",
  },
  {
    key: "gdl-penalties",
    quote:
      "All drivers under 17 years of age are subject to the " +
      "following penalties: A warning letter upon the first " +
      "conviction for a moving traffic violation (this letter " +
      "provides warning that future violations may result in " +
      "the suspension of your driving privileges).",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Graduated Drivers License (GDL) Penalties (page 125)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=125",
  },
  {
    key: "gdl-penalties-suspensions",
    quote:
      "A 30-day suspension of driving privileges for a second " +
      "conviction for a moving traffic violation. A 60-day " +
      "suspension of driving privileges for a third or " +
      "subsequent conviction for a moving traffic violation.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Graduated Drivers License (GDL) Penalties (page 125)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=125",
  },
  {
    key: "gdl-penalties-absolute",
    quote:
      "The GDL penalty suspension periods are absolute and do " +
      "not allow driving privileges of any kind.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Graduated Drivers License (GDL) Penalties (page 125)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=125",
  },
  {
    key: "als-first-failure",
    quote:
      "For a first failure, your driving privileges will be " +
      "suspended for a period of ninety (90) days. You will " +
      "have absolutely no driving privileges during the first " +
      "thirty (30) days of that ninety (90) day suspension.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Administrative License Suspension (page 126)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=126",
  },
  {
    key: "implied-consent",
    quote:
      "In Idaho, any person who drives, or is in physical " +
      "control of, a motor vehicle has given their consent to " +
      "take a BAC or drug test if they are suspected of " +
      "driving under the influence, under the provisions of " +
      "Section 18-8002, Idaho Code.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Test Refusal (page 126)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=126",
  },
  {
    key: "refusal-second",
    quote:
      "A second refusal within 10 years will result in a " +
      "two-year absolute suspension.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Test Refusal (page 127)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=127",
  },
  {
    key: "ignition-interlock",
    quote:
      "This device requires the driver to provide a breath " +
      "sample in order to start the vehicle. If the sample " +
      "indicates an alcohol content at or above a preset " +
      "level, the vehicle will not start.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Ignition Interlock Device (page 127)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=127",
  },
  {
    key: "bac-risk-multiplier",
    quote:
      "If you drink enough to increase your alcohol " +
      "concentration past .05, be careful. At slightly above " +
      ".05, the risk of causing a crash doubles. At .10, the " +
      "risk is six times as great. At .15, the risk is 25 " +
      "times as great.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "How Much is Too Much (page 128)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=128",
  },
  {
    key: "drink-equivalence",
    quote:
      "A jigger (1.5 ounces) of 80-proof hard liquor, five " +
      "ounces of table wine, or 12 ounces of beer all contain " +
      "approximately the same amount of alcohol-about an " +
      "ounce each.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Is Beer Safer Than Hard Liquor (page 129)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=129",
  },
  {
    key: "drinking-driver-signs",
    quote:
      "Speeding: Drinking drivers often think they can drive " +
      "safely at high speeds. Weaving: Even though drivers " +
      "may stay in their lane, they may have trouble steering " +
      "straight.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "How Drinking Affects Driving (page 130)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=130",
  },
  {
    key: "only-time-sobers",
    quote:
      "Once alcohol is in your bloodstream, neither aspirin, " +
      "black coffee, deep breathing, a slap in the face, " +
      "exercise, nor eating will sober you up. Only time will " +
      "return you to normal.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "How Drinking Affects You (page 129)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=129",
  },
  {
    key: "open-container",
    quote:
      "Idaho's open container law prohibits both drivers and " +
      "passengers from drinking or possessing an open " +
      "beverage container of alcohol. To transport any " +
      "unsealed alcoholic beverages in a vehicle, the " +
      "container must be in the trunk or behind the last " +
      "upright seat if there is no trunk.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Open Container Law (page 130)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=130",
  },
  {
    key: "dui-thresholds",
    quote:
      "Under Idaho law you are considered to be driving under " +
      "the influence if your blood-alcohol concentration " +
      "(BAC) is .02 or more if you are under 21 years of age, " +
      ".04 or more if you are operating a commercial vehicle, " +
      "and .08 or more if you are 21 or older.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Driving Under The Influence (page 131)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=131",
  },
  {
    key: "dui-020",
    quote:
      "An alcohol concentration of .20 or more carries even " +
      "stiffer penalties.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Driving Under The Influence (page 131)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=131",
  },
  {
    key: "drug-effects",
    quote:
      "Marijuana slows reaction time and impairs judgment of " +
      "time and distance. Methamphetamine or cocaine causes " +
      "aggressive and reckless behaviors. Opioids cause " +
      "drowsiness and impaired memory and thinking skills. " +
      "Sedatives (benzodiazepines, barbiturates, etc.) cause " +
      "dizziness and drowsiness.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Impaired Driving (page 131)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=131",
  },
  {
    key: "dui-first-conviction",
    quote:
      "For a first conviction: Up to six months in jail; up " +
      "to a $1,000 fine; and mandatory driver's license " +
      "suspension of at least 90 days and up to 180 days (one " +
      "year if you are under 21), with absolutely no driving " +
      "privileges for the first 30 days.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Driving Under The Influence (page 132)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=132",
  },
  {
    key: "dui-third-felony",
    quote:
      "For three or more convictions within 10 years: " +
      "Mandatory jail sentence from 30 days to ten years (10 " +
      "days to six months if under 21); up to a $5,000 fine " +
      "(up to $2,000 if under 21)",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "Driving Under The Influence (page 132)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=132",
  },
  {
    key: "traffic-stop-behavior",
    quote:
      "When law enforcement stops you, stay calm, activate " +
      "your turn signal, and pull off or to the side of the " +
      "roadway as soon and safely as possible. Turn off the " +
      "ignition and radio, and stay in your vehicle unless " +
      "directed by the officer to exit.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "What to Expect and Do When Stopped by Law Enforcement (page 132)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=132",
  },
  {
    key: "traffic-stop-weapon",
    quote:
      "If you have a weapon in the vehicle, inform the " +
      "officer upon first contact.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "What to Expect and Do When Stopped by Law Enforcement (page 133)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=133",
  },
  {
    key: "signing-a-ticket",
    quote:
      "Your acceptance and signature on a traffic ticket is " +
      "not an admission of guilt; however, the refusal to " +
      "sign a traffic ticket may result in your arrest.",
    source: "Idaho Driver's Handbook (Idaho Transportation Department, Division of Motor Vehicles, July 2026)",
    section: "What to Expect and Do When Stopped by Law Enforcement (page 133)",
    url: "https://itd.idaho.gov/wp-content/uploads/2026/04/driver_manual.pdf#page=133",
  },
  {
    key: "code-distracted-driving",
    quote:
      "Except as provided in this subsection, a person shall " +
      "not operate a motor vehicle while using a mobile " +
      "electronic device.",
    source: "Idaho Statutes, Title 49, Chapter 14 (Idaho State Legislature)",
    section: "Section 49-1401A, Distracted Driving, subsection (2)",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH14/SECT49-1401A/",
  },
  {
    key: "code-distracted-fines",
    quote:
      "A violation of this section shall be a moving " +
      "violation and shall be an infraction punishable by a " +
      "fine of seventy-five dollars ($75.00) for a first " +
      "offense and one hundred fifty dollars ($150) for a " +
      "second offense within a three (3) year period.",
    source: "Idaho Statutes, Title 49, Chapter 14 (Idaho State Legislature)",
    section: "Section 49-1401A, Distracted Driving, subsection (4)",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH14/SECT49-1401A/",
  },
  {
    key: "code-distracted-hands-free",
    quote:
      "The use of a mobile electronic device in a " +
      "voice-operated or hands-free mode if the operator of " +
      "the motor vehicle does not use his hands to operate " +
      "the device, except through one-touch activation or " +
      "deactivation of a feature or function of the device",
    source: "Idaho Statutes, Title 49, Chapter 14 (Idaho State Legislature)",
    section: "Section 49-1401A, Distracted Driving, subsection (2)(e)",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH14/SECT49-1401A/",
  },
  {
    key: "code-distracted-primary",
    quote:
      "A law enforcement officer enforcing the provisions of " +
      "this section is hereby authorized to utilize a " +
      "violation of this section as the primary or sole " +
      "reason for initiating a traffic stop or issuing a " +
      "citation to a driver.",
    source: "Idaho Statutes, Title 49, Chapter 14 (Idaho State Legislature)",
    section: "Section 49-1401A, Distracted Driving, subsection (9)",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH14/SECT49-1401A/",
  },
  {
    key: "code-distracted-watching",
    quote:
      "No person shall operate a motor vehicle while watching " +
      "motion upon the screen of a mobile electronic device, " +
      "other than motion related to the functioning or " +
      "navigation of the vehicle.",
    source: "Idaho Statutes, Title 49, Chapter 14 (Idaho State Legislature)",
    section: "Section 49-1401A, Distracted Driving, subsection (3)",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH14/SECT49-1401A/",
  },
  {
    key: "code-basic-rule",
    quote:
      "No person shall drive a vehicle at a speed greater " +
      "than is reasonable and prudent under the conditions " +
      "and having regard to the actual and potential hazards " +
      "then existing.",
    source: "Idaho Statutes, Title 49, Chapter 6 (Idaho State Legislature)",
    section: "Section 49-654, Basic Rule and Maximum Speed Limits, subsection (1)",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH6/SECT49-654/",
  },
  {
    key: "code-speed-urban-35",
    quote:
      "Thirty-five (35) miles per hour in any residential, " +
      "business or urban district, unless otherwise posted in " +
      "accordance with section 49-207(2) or (3), Idaho Code;",
    source: "Idaho Statutes, Title 49, Chapter 6 (Idaho State Legislature)",
    section: "Section 49-654, Basic Rule and Maximum Speed Limits, subsection (2)(a)(i)",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH6/SECT49-654/",
  },
  {
    key: "code-speed-interstate-75",
    quote:
      "Seventy-five (75) miles per hour on interstate " +
      "highways, unless otherwise posted in accordance with " +
      "section 49-201(4), Idaho Code,",
    source: "Idaho Statutes, Title 49, Chapter 6 (Idaho State Legislature)",
    section: "Section 49-654, Basic Rule and Maximum Speed Limits, subsection (2)(a)(ii)",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH6/SECT49-654/",
  },
  {
    key: "code-passing-15-over",
    quote:
      "a driver of a passenger car, motorcycle or pickup " +
      "truck, not towing any other vehicle, may exceed the " +
      "posted speed limit by up to fifteen (15) miles per " +
      "hour while passing another vehicle traveling at less " +
      "than the posted speed limit, in order to safely pass " +
      "the vehicle.",
    source: "Idaho Statutes, Title 49, Chapter 6 (Idaho State Legislature)",
    section: "Section 49-654, Basic Rule and Maximum Speed Limits, subsection (2)(b)",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH6/SECT49-654/",
  },
  {
    key: "code-passing-return-lane",
    quote:
      "The overtaking vehicle shall return to the right-hand " +
      "lane and reduce speed to the posted speed limit as " +
      "soon as practicable.",
    source: "Idaho Statutes, Title 49, Chapter 6 (Idaho State Legislature)",
    section: "Section 49-654, Basic Rule and Maximum Speed Limits, subsection (2)(b)",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH6/SECT49-654/",
  },
  {
    key: "code-lighted-lamps",
    quote:
      "Every vehicle upon a highway at any time from sunset " +
      "to sunrise and at any other time when there is not " +
      "sufficient light to render clearly discernible persons " +
      "and vehicles on the highway at a distance of five " +
      "hundred (500) feet ahead",
    source: "Idaho Statutes, Title 49, Chapter 9 (Idaho State Legislature)",
    section: "Section 49-903, When Lighted Lamps are Required",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH9/SECT49-903/",
  },
  {
    key: "code-signal-five-seconds",
    quote:
      "On controlled-access highways and before turning from " +
      "a parked position, the signal shall be given " +
      "continuously for not less than five (5) seconds and, " +
      "in all other instances, for not less than the last one " +
      "hundred (100) feet traveled by the vehicle before " +
      "turning.",
    source: "Idaho Statutes, Title 49, Chapter 8 (Idaho State Legislature)",
    section: "Section 49-808, Turning Movements and Required Signals, subsection (2)",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH8/SECT49-808/",
  },
  {
    key: "code-signal-before-stopping",
    quote:
      "No person shall stop or suddenly decrease the speed of " +
      "a vehicle without first giving an appropriate signal " +
      "to the driver of any vehicle immediately to the rear " +
      "when there is opportunity to give such a signal.",
    source: "Idaho Statutes, Title 49, Chapter 8 (Idaho State Legislature)",
    section: "Section 49-808, Turning Movements and Required Signals, subsection (3)",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH8/SECT49-808/",
  },
  {
    key: "code-red-light-turn",
    quote:
      "Except when a sign is in place prohibiting a turn, a " +
      "driver after stopping, facing a steady circular red " +
      "signal, may turn right, or turn left from a highway " +
      "onto a one-way highway after stopping.",
    source: "Idaho Statutes, Title 49, Chapter 8 (Idaho State Legislature)",
    section: "Section 49-802, Traffic-Control Signal Legend, subsection (3)(b)",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH8/SECT49-802/",
  },
  {
    key: "code-red-stop-remain",
    quote:
      "A driver facing a steady circular red signal alone " +
      "shall stop before entering the intersection, as " +
      "defined in section 49-110, Idaho Code, and shall " +
      "remain stopped until an indication to proceed is shown",
    source: "Idaho Statutes, Title 49, Chapter 8 (Idaho State Legislature)",
    section: "Section 49-802, Traffic-Control Signal Legend, subsection (3)(a)",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH8/SECT49-802/",
  },
  {
    key: "code-red-no-block",
    quote:
      "While stopped at the intersection, the driver shall " +
      "remain stopped behind the marked limit line, as " +
      "defined in section 49-113, Idaho Code, or if there is " +
      "no marked limit line, shall not block the crosswalk.",
    source: "Idaho Statutes, Title 49, Chapter 8 (Idaho State Legislature)",
    section: "Section 49-802, Traffic-Control Signal Legend, subsection (3)(a)",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH8/SECT49-802/",
  },
  {
    key: "code-motorcycle-dead-red",
    quote:
      "the driver of a motorcycle approaching an intersection " +
      "that is controlled by a triggered traffic-control " +
      "signal using a vehicle detection device that is " +
      "inoperative due to the size of the motorcycle, shall " +
      "come to a full and complete stop at the intersection.",
    source: "Idaho Statutes, Title 49, Chapter 8 (Idaho State Legislature)",
    section: "Section 49-802, Traffic-Control Signal Legend, subsection (3)(e)",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH8/SECT49-802/",
  },
  {
    key: "code-motorcycle-dead-red-proceed",
    quote:
      "If the signal fails to operate after one cycle of the " +
      "traffic signal, the driver may proceed after " +
      "exercising due caution and care.",
    source: "Idaho Statutes, Title 49, Chapter 8 (Idaho State Legislature)",
    section: "Section 49-802, Traffic-Control Signal Legend, subsection (3)(e)",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH8/SECT49-802/",
  },
  {
    key: "code-green-yield",
    quote:
      "A driver facing a circular green signal shall proceed " +
      "straight through or turn right or left unless a sign " +
      "prohibits a right or left turn.",
    source: "Idaho Statutes, Title 49, Chapter 8 (Idaho State Legislature)",
    section: "Section 49-802, Traffic-Control Signal Legend, subsection (1)(a)",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH8/SECT49-802/",
  },
  {
    key: "code-green-yield-pedestrians",
    quote:
      "Any driver, including one turning, shall yield the " +
      "right-of-way to other traffic and to pedestrians " +
      "lawfully within the intersection, as defined in " +
      "section 49-110, Idaho Code, or an adjacent crosswalk.",
    source: "Idaho Statutes, Title 49, Chapter 8 (Idaho State Legislature)",
    section: "Section 49-802, Traffic-Control Signal Legend, subsection (1)(a)",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH8/SECT49-802/",
  },
  {
    key: "code-flashing-red",
    quote:
      "When a red lens is illuminated with rapid intermittent " +
      "flashes, a driver shall stop at a clearly marked limit " +
      "line, but if none before entering the crosswalk on the " +
      "near side of the intersection",
    source: "Idaho Statutes, Title 49, Chapter 8 (Idaho State Legislature)",
    section: "Section 49-804, Flashing Signals, subsection (1)(a)",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH8/SECT49-804/",
  },
  {
    key: "code-school-bus-stop",
    quote:
      "The driver of a vehicle meeting or overtaking from " +
      "either direction any school bus stopped on the highway " +
      "shall stop before reaching the school bus",
    source: "Idaho Statutes, Title 49, Chapter 14 (Idaho State Legislature)",
    section: "Section 49-1422, Overtaking and Passing School Bus, subsection (1)",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH14/SECT49-1422/",
  },
  {
    key: "code-school-bus-until",
    quote:
      "the driver of a vehicle shall not proceed until the " +
      "school bus resumes motion or the visual signals are no " +
      "longer actuated.",
    source: "Idaho Statutes, Title 49, Chapter 14 (Idaho State Legislature)",
    section: "Section 49-1422, Overtaking and Passing School Bus, subsection (1)",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH14/SECT49-1422/",
  },
  {
    key: "code-school-bus-three-lanes",
    quote:
      "Oncoming traffic on a highway of more than three (3) " +
      "lanes is not required to stop upon meeting a school " +
      "bus when visual signals are actuated.",
    source: "Idaho Statutes, Title 49, Chapter 14 (Idaho State Legislature)",
    section: "Section 49-1422, Overtaking and Passing School Bus, subsection (1)",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH14/SECT49-1422/",
  },
  {
    key: "code-school-bus-fine",
    quote:
      "Any person found guilty of violating the provisions of " +
      "this subsection for the first time shall be guilty of " +
      "an infraction punishable by a fine of three hundred " +
      "dollars ($300).",
    source: "Idaho Statutes, Title 49, Chapter 14 (Idaho State Legislature)",
    section: "Section 49-1422, Overtaking and Passing School Bus, subsection (1)",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH14/SECT49-1422/",
  },
  {
    key: "code-seat-belt-fine",
    quote:
      "A person issued a citation pursuant to this subsection " +
      "shall be subject to a fine of ten dollars ($10.00).",
    source: "Idaho Statutes, Title 49, Chapter 6 (Idaho State Legislature)",
    section: "Section 49-673, Safety Restraint Use, subsection (3)(b)",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH6/SECT49-673/",
  },
  {
    key: "code-seat-belt-secondary",
    quote:
      "Enforcement of this section by law enforcement " +
      "officers may be accomplished only as a secondary " +
      "action when the operator of the motor vehicle has been " +
      "detained for a suspected violation of another law.",
    source: "Idaho Statutes, Title 49, Chapter 6 (Idaho State Legislature)",
    section: "Section 49-673, Safety Restraint Use, subsection (5)",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH6/SECT49-673/",
  },
  {
    key: "code-seat-belt-who",
    quote:
      "shall have a safety restraint properly fastened about " +
      "the occupant's body at all times when the vehicle is " +
      "in motion.",
    source: "Idaho Statutes, Title 49, Chapter 6 (Idaho State Legislature)",
    section: "Section 49-673, Safety Restraint Use, subsection (1)",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH6/SECT49-673/",
  },
  {
    key: "code-child-restraint",
    quote:
      "No noncommercial motor vehicle operator shall " +
      "transport a child who is six (6) years of age or " +
      "younger in a motor vehicle manufactured with seat " +
      "belts after January 1, 1966, unless the child is " +
      "properly secured in a child safety restraint that " +
      "meets the requirements of federal motor vehicle safety " +
      "standard no. 213.",
    source: "Idaho Statutes, Title 49, Chapter 6 (Idaho State Legislature)",
    section: "Section 49-672, Passenger Safety for Children, subsection (1)",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH6/SECT49-672/",
  },
  {
    key: "code-emergency-vehicle",
    quote:
      "Upon the immediate approach of an authorized emergency " +
      "or police vehicle making use of an audible or visible " +
      "signal, meeting the requirements of section 49-623, " +
      "Idaho Code, the driver of every other vehicle shall " +
      "yield the right-of-way",
    source: "Idaho Statutes, Title 49, Chapter 6 (Idaho State Legislature)",
    section: "Section 49-625, Operation of Vehicles on Approach of Authorized Emergency or Police Vehicles, subsection (1)",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH6/SECT49-625/",
  },
  {
    key: "code-emergency-vehicle-position",
    quote:
      "and immediately drive to a position parallel to, and " +
      "as close as possible to, the nearest edge or curb on " +
      "the right side of the highway and clear of any " +
      "intersection",
    source: "Idaho Statutes, Title 49, Chapter 6 (Idaho State Legislature)",
    section: "Section 49-625, Operation of Vehicles on Approach of Authorized Emergency or Police Vehicles, subsection (1)",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH6/SECT49-625/",
  },
  {
    key: "code-emergency-vehicle-remain",
    quote:
      "and stop and remain in that position until the " +
      "authorized emergency or police vehicle has passed, " +
      "except when otherwise directed by a peace officer.",
    source: "Idaho Statutes, Title 49, Chapter 6 (Idaho State Legislature)",
    section: "Section 49-625, Operation of Vehicles on Approach of Authorized Emergency or Police Vehicles, subsection (1)",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH6/SECT49-625/",
  },
  {
    key: "code-following-too-closely",
    quote:
      "The driver of a vehicle shall not follow another " +
      "vehicle more closely than is reasonable and prudent, " +
      "having due regard for the speed of the vehicle, the " +
      "traffic upon and the condition of the highway.",
    source: "Idaho Statutes, Title 49, Chapter 6 (Idaho State Legislature)",
    section: "Section 49-638, Following Too Closely, subsection (1)",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH6/SECT49-638/",
  },
  {
    key: "code-work-zone-yield",
    quote:
      "The driver of a vehicle shall yield the right-of-way " +
      "to any vehicle or pedestrian actually engaged in work " +
      "upon a highway within any highway construction or " +
      "maintenance area indicated by traffic-control devices.",
    source: "Idaho Statutes, Title 49, Chapter 6 (Idaho State Legislature)",
    section: "Section 49-643, Highway Construction and Maintenance, subsection (1)",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH6/SECT49-643/",
  },
  {
    key: "code-left-turn-position",
    quote:
      "The driver of a vehicle intending to turn left shall " +
      "approach the turn in the extreme left-hand lane " +
      "lawfully available to traffic moving in the direction " +
      "of travel of the vehicle.",
    source: "Idaho Statutes, Title 49, Chapter 6 (Idaho State Legislature)",
    section: "Section 49-644, Required Position and Method of Turning, subsection (2)",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH6/SECT49-644/",
  },
  {
    key: "code-center-turn-lane",
    quote:
      "A left turn shall not be made from any other lane; (b) " +
      "A vehicle shall not be driven in the lane except when " +
      "preparing for or making a left turn from or into the " +
      "highway or when preparing for or making a U-turn when " +
      "otherwise permitted by law.",
    source: "Idaho Statutes, Title 49, Chapter 6 (Idaho State Legislature)",
    section: "Section 49-644, Required Position and Method of Turning, subsection (3)",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH6/SECT49-644/",
  },
  {
    key: "code-due-care",
    quote:
      "every driver of a motor vehicle shall exercise due " +
      "care to avoid colliding with any pedestrian or any " +
      "operator or rider of a human-powered vehicle, bicycle, " +
      "or electric-assisted bicycle and shall give an audible " +
      "signal when necessary.",
    source: "Idaho Statutes, Title 49, Chapter 6 (Idaho State Legislature)",
    section: "Section 49-615, Drivers to Exercise Due Care",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH6/SECT49-615/",
  },
  {
    key: "code-due-care-children",
    quote:
      "Every driver of a motor vehicle shall exercise proper " +
      "precaution upon observing any child or any obviously " +
      "confused, incapacitated, or intoxicated person.",
    source: "Idaho Statutes, Title 49, Chapter 6 (Idaho State Legislature)",
    section: "Section 49-615, Drivers to Exercise Due Care",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH6/SECT49-615/",
  },
  {
    key: "code-bicycle-stop-sign",
    quote:
      "A person operating a bicycle, human-powered vehicle, " +
      "or an electric-assisted bicycle approaching a stop " +
      "sign shall slow down and, if required for safety, stop " +
      "before entering the intersection.",
    source: "Idaho Statutes, Title 49, Chapter 7 (Idaho State Legislature)",
    section: "Section 49-720, Stopping - Turn and Stop Signals, subsection (1)",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH7/SECT49-720/",
  },
  {
    key: "code-bicycle-red-light",
    quote:
      "A person operating a bicycle or human-powered vehicle " +
      "approaching a steady red traffic control light shall " +
      "stop before entering the intersection and shall yield " +
      "to all other traffic.",
    source: "Idaho Statutes, Title 49, Chapter 7 (Idaho State Legislature)",
    section: "Section 49-720, Stopping - Turn and Stop Signals, subsection (2)",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH7/SECT49-720/",
  },
  {
    key: "code-instruction-permit-adult",
    quote:
      "That person must be accompanied by an adult driver " +
      "eighteen (18) years of age or older who holds a valid " +
      "driver's license appropriate for the vehicle being " +
      "operated and who is actually occupying a seat beside " +
      "the driver.",
    source: "Idaho Statutes, Title 49, Chapter 3 (Idaho State Legislature)",
    section: "Section 49-305, Instruction Permits, subsection (1)",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH3/SECT49-305/",
  },
  {
    key: "code-sip-to-permit",
    quote:
      "Any person under the age of seventeen (17) years who " +
      "has successfully completed an approved driver's " +
      "training course and has satisfied the requirements of " +
      "a class D supervised instruction permit, or any person " +
      "who has reached the age of seventeen (17) years, may " +
      "apply for a class D instruction permit.",
    source: "Idaho Statutes, Title 49, Chapter 3 (Idaho State Legislature)",
    section: "Section 49-305, Instruction Permits, subsection (1)(a)",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH3/SECT49-305/",
  },
  {
    key: "code-licence-15-daylight",
    quote:
      "the department may issue a driver's license to any " +
      "person who has successfully completed an approved " +
      "driver's training course, who has completed the " +
      "requirements of a class D supervised instruction " +
      "permit, and who is at least fifteen (15) years of age",
    source: "Idaho Statutes, Title 49, Chapter 3 (Idaho State Legislature)",
    section: "Section 49-303, Which Persons Shall Not Be Licensed, subsection (1)",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH3/SECT49-303/",
  },
  {
    key: "code-licence-daylight-then-16",
    quote:
      "with driving privileges restricted to daylight hours " +
      "only pursuant to section 49-307(10), Idaho Code, and " +
      "with full privileges at sixteen (16) years of age.",
    source: "Idaho Statutes, Title 49, Chapter 3 (Idaho State Legislature)",
    section: "Section 49-303, Which Persons Shall Not Be Licensed, subsection (1)",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH3/SECT49-303/",
  },
  {
    key: "code-motorcycle-permit-limits",
    quote:
      "A person holding a motorcycle instruction permit shall " +
      "not carry any passenger while operating a motorcycle, " +
      "shall not operate a motorcycle except during the hours " +
      "of daylight only, and shall not operate a motorcycle " +
      "on any interstate highway system.",
    source: "Idaho Statutes, Title 49, Chapter 3 (Idaho State Legislature)",
    section: "Section 49-305, Instruction Permits, subsection (4)",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title49/T49CH3/SECT49-305/",
  },
  {
    key: "code-dui-08",
    quote:
      "who has an alcohol concentration of 0.08, as defined " +
      "in subsection (4) of this section, or more, as shown " +
      "by analysis of his blood, urine, or breath, to drive " +
      "or be in actual physical control of a motor vehicle " +
      "within this state",
    source: "Idaho Statutes, Title 18, Chapter 80 (Idaho State Legislature)",
    section: "Section 18-8004, Persons Under the Influence, subsection (1)(a)",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title18/T18CH80/SECT18-8004/",
  },
  {
    key: "code-dui-under-21",
    quote:
      "It is unlawful for any person under the age of " +
      "twenty-one (21) years who has an alcohol concentration " +
      "of at least 0.02 but less than 0.08, as defined in " +
      "subsection (4) of this section, to drive or be in " +
      "actual physical control of a motor vehicle within this " +
      "state",
    source: "Idaho Statutes, Title 18, Chapter 80 (Idaho State Legislature)",
    section: "Section 18-8004, Persons Under the Influence, subsection (1)(d)",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title18/T18CH80/SECT18-8004/",
  },
  {
    key: "code-open-range",
    quote:
      "No person owning, or controlling the possession of, " +
      "any domestic animal running on open range, shall have " +
      "the duty to keep such animal off any highway on such " +
      "range, and shall not be liable for damage to any " +
      "vehicle or for injury to any person riding therein, " +
      "caused by a collision between the vehicle and the " +
      "animal.",
    source: "Idaho Statutes, Title 25, Chapter 21 (Idaho State Legislature)",
    section: "Section 25-2118, Animals on Open Range - No Duty to Keep from Highway",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title25/T25CH21/SECT25-2118/",
  },
  {
    key: "code-open-range-definition",
    quote:
      "\"Open range\" means all uninclosed lands outside of " +
      "cities, villages and herd districts, upon which cattle " +
      "by custom, license, lease, or permit, are grazed or " +
      "permitted to roam.",
    source: "Idaho Statutes, Title 25, Chapter 21 (Idaho State Legislature)",
    section: "Section 25-2118, Animals on Open Range - No Duty to Keep from Highway",
    url: "https://legislature.idaho.gov/statutesrules/idstat/Title25/T25CH21/SECT25-2118/",
  },
  {
    key: "itd-skills-errors",
    quote:
      "To pass the test, you must not have more than 12 " +
      "errors or commit a critical driving error. Five errors " +
      "of the same skill is considered a critical driving " +
      "error.",
    source: "Taking the Driver's Test (Idaho Transportation Department, fetched 2026-09-06)",
    section: "Taking the Driver's Test, Skills test, Passing the test",
    url: "https://itd.idaho.gov/guide/taking-the-drivers-test/",
  },
  {
    key: "itd-knowledge-before-skills",
    quote:
      "You must pass the Class D knowledge test before taking " +
      "the Class D skills test except for those under 17 " +
      "years of age that are on a supervised instruction " +
      "permit (SIP).",
    source: "Taking the Driver's Test (Idaho Transportation Department, fetched 2026-09-06)",
    section: "Taking the Driver's Test, Skills test",
    url: "https://itd.idaho.gov/guide/taking-the-drivers-test/",
  },
  {
    key: "itd-no-devices-in-test",
    quote:
      "Not allowed Electronic Devices (including cell phones, " +
      "smart watches, cameras, tablets, laptops, headphones, " +
      "earbuds, etc) Leaving the testing area to go anywhere " +
      "other than to an examiner Driver Manuals or other " +
      "written material such as notes",
    source: "Taking the Driver's Test (Idaho Transportation Department, fetched 2026-09-06)",
    section: "Taking the Driver's Test, Testing guidelines",
    url: "https://itd.idaho.gov/guide/taking-the-drivers-test/",
  },
  {
    key: "itd-driver-training-hours",
    quote:
      "An approved Idaho driver training program consists of " +
      "a required 30 hours (1,800 minutes) of classroom " +
      "instruction, six hours (360 minutes) of in-car " +
      "observation in a driver-training car, and six hours " +
      "(360 minutes) of behind-the-wheel driving with a " +
      "driver training instructor.",
    source: "Young Drivers (Idaho Transportation Department, fetched 2026-09-06)",
    section: "Young Drivers, Learning to Drive",
    url: "https://itd.idaho.gov/dmv/young-drivers/",
  },
  {
    key: "itd-dt-permit-required",
    quote:
      "If you are under 17, you must have a driver training " +
      "instruction permit to attend any public or private " +
      "school driver-training program.",
    source: "Young Drivers (Idaho Transportation Department, fetched 2026-09-06)",
    section: "Young Drivers, Learning to Drive",
    url: "https://itd.idaho.gov/dmv/young-drivers/",
  },
  {
    key: "itd-knowledge-fee",
    quote: "Knowledge Written Test $5.00",
    source: "Young Drivers (Idaho Transportation Department, fetched 2026-09-06)",
    section: "Young Drivers, Operator (Class D) License Fees",
    url: "https://itd.idaho.gov/dmv/young-drivers/",
  },
  {
    key: "itd-move-to-idaho",
    quote:
      "When moving to Idaho you will need to apply for an " +
      "Idaho driver's license or identification card within " +
      "30 days of residing in Idaho, whether your " +
      "out-of-state credential has expired or not.",
    source: "Drivers Licenses & ID Cards (Idaho Transportation Department, fetched 2026-09-06)",
    section: "Drivers Licenses & ID Cards, Who needs a driver's license?",
    url: "https://itd.idaho.gov/dmv/drivers-licenses-id-cards/",
  },
  {
    key: "itd-renewal-length",
    quote:
      "A standard (Class D) driver's license renewal is valid " +
      "for either four years or eight years. If you are " +
      "between the ages of 21 and 62, you may choose the " +
      "eight-year renewal.",
    source: "Drivers Licenses & ID Cards (Idaho Transportation Department, fetched 2026-09-06)",
    section: "Drivers Licenses & ID Cards, Renewing your driver's license",
    url: "https://itd.idaho.gov/dmv/drivers-licenses-id-cards/",
  },
];
