import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts behind the Arkansas bank.
//
// One source sits behind all of them: the Arkansas Driver License Study Guide,
// Volume 1 - Edition 10, July 2026 (the cover also carries the build stamp
// "07222026"). It is published by the Arkansas State Police, part of the
// Arkansas Department of Public Safety, and served from media.ark.org, the
// state's own document host; the Department of Finance and Administration's
// Office of Driver Services issues the license itself but does not write the
// book. The Arkansas State Police's official practice test says in its own
// words that the guide "is the exclusive fundamental source of information
// needed to pass the driver license written test", which is why this bank
// quotes it and nothing else.
//
// The guide runs 98 PDF pages. Its printed page 1 is PDF page 13, so each
// `section` below gives the PRINTED page a learner will see in the book while
// the `url` anchor gives the PDF page a viewer will jump to. Both are recorded
// because they differ by twelve and confusing them wastes a learner's time.
//
// Every quote was located mechanically in the fetched PDF and checked as an
// exact substring before it was written here. Nothing is paraphrased or
// retyped. Only the normalizations the sibling banks use were applied, to the
// extracted text and to nothing else: curly quotes, en dashes and em dashes
// fold to ASCII; runs of whitespace, including the line breaks the PDF inserts
// mid-sentence, collapse to single spaces; a word broken across a line by a
// hyphen is rejoined with its hyphen; the section symbol is spelled out as
// "Section"; and where the guide states a rule as a stem followed by a bulleted
// list, the items run together in the order they appear - no words are changed,
// dropped or reordered.
//
// The guide's own slips are preserved exactly as they stand, because a quote
// that has been tidied up is no longer a quote. Among them:
//
//  - The seat belt paragraph on page 9 says the law permits a stop "based on
//    the primary violation of a motor vehicle driver or the front-seat
//    passenger who is buckled up". The sentence after it makes the meaning
//    plain - it is the UNbelted driver who is stopped - and no question in this
//    bank is built on the mis-typed half.
//  - Page 46 reads "18 years of age or older may use a hands-free device, even
//    though it's not recommended to a cell phone while driving." A verb is
//    missing.
//  - Page 75 reads "0.02%breath or blood alcohol concentration", with no space.
//  - Page 55 reads "On packed, snow you should cut your speed in half."
//
// One genuine internal conflict is left standing rather than resolved: page 11
// puts the fine for failing to move over for a stopped law enforcement vehicle
// at up to $1,000, and page 15 states the same rule with a fine of up to $500.
// Both quotes are here (`move-over-penalty` and `approach-penalty`) and no
// question in this bank asks for that number. See
// docs/driving/research/arkansas.md.

export const arkansasExcerpts: HandbookExcerpt[] = [
  {
    key: "intro-purpose",
    quote:
      "This study guide offers information about Arkansas rules " +
      "of the road and how to apply safe driving practices.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Introduction (page 1)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=13",
  },
  {
    key: "intro-read-manual",
    quote:
      "Be sure to read the driver's manual carefully. The more " +
      "you are familiar with the information within the guide, " +
      "the higher your chances of passing the knowledge exam and " +
      "skills test. Reading the manual will inform you of the " +
      "documents needed to test.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Introduction (page 1)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=13",
  },
  {
    key: "intro-third-party",
    quote:
      "The Arkansas State Police is not associated with " +
      "third-party websites offering practice tests. However, the " +
      "Arkansas State Police does offer a testing APP (AR Driver " +
      "Testing) found in the Google Play Store or Apple APP " +
      "Store.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Introduction (page 1)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=13",
  },
  {
    key: "exam-fee",
    quote:
      "THIS ACT REQUIRES A $5.00 FEE FOR EACH WRITTEN " +
      "EXAMINATION. THERE SHALL BE NO LIMIT TO THE NUMBER OF " +
      "EXAMS CHARGED AT THE TIME OF LICENSE. THE FEE WILL BE " +
      "ADDED TO THE COST OF YOUR DRIVER'S LICENSE AND COLLECTED " +
      "BY THE ARKANSAS DEPARTMENT OF FINANCE & ADMINISTRATION.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Introduction - Act 1289 of 2015 (page 1)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=13",
  },
  {
    key: "lic-required",
    quote:
      "Anyone who operates a motor vehicle, motorcycle, " +
      "motor-driven cycle, or motorized bicycle on public " +
      "highways in Arkansas is required to have a license or " +
      "certificate.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "The Driver's License (page 2)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=14",
  },
  {
    key: "lic-new-resident",
    quote:
      "Within thirty (30) calendar days of becoming a resident, " +
      "any person who is a resident of this state shall obtain an " +
      "Arkansas driver's license in order to drive upon the " +
      "streets and highways of this state.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "The Driver's License - Proof of Residency (page 2)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=14",
  },
  {
    key: "lic-nonresident-six-months",
    quote:
      "Any nonresident who has been physically present in this " +
      "state for a period of six (6) months shall obtain an " +
      "Arkansas driver's license in order to drive upon the " +
      "streets and highways of this state.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "The Driver's License - Proof of Residency (page 2)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=14",
  },
  {
    key: "lic-age-14",
    quote:
      "You are at least fourteen (14) years of age (restricted " +
      "license) You are at least eighteen (18) years of age " +
      "(non-restricted license)",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "The Driver's License (page 2)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=14",
  },
  {
    key: "lic-out-of-state-30-days",
    quote:
      "You have a valid hard copy driver's license from another " +
      "state. Cannot be expired for more than thirty (30) " +
      "calendar days.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "The Driver's License (page 2)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=14",
  },
  {
    key: "gdl-program",
    quote:
      "On July 1, 2001, Arkansas implemented a graduated driver's " +
      "license program. This program was designed to allow " +
      "drivers to gradually become safe and experienced drivers " +
      "while continuing the learning process of driving on our " +
      "streets and highways.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Types of Graduated Driver's Licenses (page 3)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=15",
  },
  {
    key: "permit-supervisor",
    quote:
      "The applicant with an instruction permit may drive with a " +
      "licensed driver twenty-one (21) years of age or older, who " +
      "is occupying a seat beside the driver.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Types of Graduated Driver's Licenses - Instruction Permit (page 3)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=15",
  },
  {
    key: "permit-age-and-term",
    quote:
      "To apply for an instruction permit, the applicant must be " +
      "at least fourteen (14) years of age. The applicant must " +
      "pass the knowledge exam and vision test to receive the " +
      "instruction permit. The permit will be issued for 2 (two) " +
      "years from the date of the passed knowledge exam.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Types of Graduated Driver's Licenses - Instruction Permit (page 3)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=15",
  },
  {
    key: "permit-seat-belts",
    quote:
      "All passengers riding in a motor vehicle with a driver who " +
      "has an instruction permit must wear seat belts.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Types of Graduated Driver's Licenses - Instruction Permit (page 3)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=15",
  },
  {
    key: "learner-ages",
    quote:
      "Learner's License- This is a restricted license issued to " +
      "persons between fourteen (14) and sixteen (16) years of " +
      "age. To receive a Learner's License, the applicant must " +
      "have a valid Instruction Permit indicating completion of " +
      "the knowledge exam, vision, and skills test.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Types of Graduated Driver's Licenses - Learner's License (page 3)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=15",
  },
  {
    key: "learner-restriction-ends",
    quote:
      "This license will be restricted until the applicant's " +
      "sixteenth (16th) birthday AND the six (6) months of " +
      "restricted driving is complete.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Types of Graduated Driver's Licenses - Learner's License (page 3)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=15",
  },
  {
    key: "learner-supervisor",
    quote:
      "A person operating a motor vehicle with a Learner's " +
      "License must be accompanied by a licensed driver who is at " +
      "least twenty-one (21) years of age, and all passengers " +
      "must wear seat belts.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Types of Graduated Driver's Licenses - Learner's License (page 3)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=15",
  },
  {
    key: "learner-cell-phone",
    quote:
      "The use of a cell phone, whether it is talking or texting, " +
      "is prohibited by law except for an emergency.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Types of Graduated Driver's Licenses - Learner's License (page 3)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=15",
  },
  {
    key: "learner-clean-record",
    quote:
      "The applicant cannot be involved in any traffic crash or " +
      "be convicted of a serious traffic violation within the " +
      "preceding six (6) months prior to application.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Types of Graduated Driver's Licenses - Learner's License (page 3)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=15",
  },
  {
    key: "intermediate-ages",
    quote:
      "Intermediate License- This license is a restricted license " +
      "issued to persons between sixteen (16) and eighteen (18) " +
      "years of age.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Types of Graduated Driver's Licenses - Intermediate License (page 3)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=15",
  },
  {
    key: "intermediate-passengers",
    quote:
      "A driver with an intermediate license shall not operate a " +
      "motor vehicle with more than one (1) unrelated minor " +
      "passenger unless accompanied by a licensed driver " +
      "twenty-one (21) years or older, who is occupying the front " +
      "seat of a motor vehicle.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Types of Graduated Driver's Licenses - Intermediate License (page 4)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=16",
  },
  {
    key: "intermediate-curfew",
    quote:
      "A driver with an intermediate driver's license cannot " +
      "operate a motor vehicle between the hours of 11:00 pm and " +
      "4:00 am unless accompanied by a licensed driver twenty-one " +
      "(21) years of age or older, driving to and from a school " +
      "activity, church activity, job, or an emergency.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Types of Graduated Driver's Licenses - Intermediate License (page 4)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=16",
  },
  {
    key: "class-d",
    quote:
      "Class D License- This is a non-restricted license issued " +
      "to persons eighteen (18) years of age or older.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Types of Graduated Driver's Licenses - Class D License (page 4)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=16",
  },
  {
    key: "class-d-hands-free",
    quote:
      "A Class D driver who is at least eighteen (18) but less " +
      "than twenty-one (21) years of age may use a hands-free " +
      "wireless telephone or device for interactive communication " +
      "while driving. A hand-held wireless telephone can only be " +
      "used for emergencies. Text messages are not allowed " +
      "regardless of age.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Types of Graduated Driver's Licenses - Class D License (page 4)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=16",
  },
  {
    key: "class-m-age",
    quote:
      "Class M (Motorcycle) License- This license is a " +
      "non-restricted motorcycle license issued to persons " +
      "sixteen (16) years of age or older to operate a motorcycle " +
      "on public roadways.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Types of Graduated Driver's Licenses - Class M (Motorcycle) License (page 4)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=16",
  },
  {
    key: "msf-waiver",
    quote:
      "The motorcycle skill exam can be waived with the " +
      "successful completion of a Motorcycle Safety Foundation " +
      "Riders Course. The certificate received must be returned " +
      "to an Arkansas State Police Examiner within ninety (90) " +
      "days of course completion.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Types of Graduated Driver's Licenses - Class M (Motorcycle) License (page 4)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=16",
  },
  {
    key: "class-md",
    quote:
      "Class MD (Motor Driven Cycles) - This license is a " +
      "restricted license issued to persons between fourteen (14) " +
      "and sixteen (16) years of age.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Types of Graduated Driver's Licenses - Class MD (Motor Driven Cycles) (page 4)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=16",
  },
  {
    key: "class-md-limit",
    quote:
      "The MD License is restricted to operating motorcycles " +
      "displacing 250 cubic centimeters or less. The knowledge " +
      "exam is valid for 1 (one) year.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Types of Graduated Driver's Licenses - Class MD (Motor Driven Cycles) (page 4)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=16",
  },
  {
    key: "motorized-bicycle",
    quote:
      "A Motorized Bicycle Certificate restricts the operation of " +
      "a motorized bicycle or motorcycle displacing fifty (50) " +
      "centimeters or less.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Types of Graduated Driver's Licenses - Motorized Bicycle Certificate (page 5)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=17",
  },
  {
    key: "vision-acuity",
    quote:
      "A minimum uncorrected visual acuity of 20/40 is required " +
      "for an unrestricted license, or a minimum corrected visual " +
      "acuity of 20/70 is required for a restricted license (must " +
      "wear glasses or contact lenses when driving).",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Vision Requirements (page 5)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=17",
  },
  {
    key: "vision-field",
    quote:
      "Also, your field of vision must be 140º for a person with " +
      "two (2) functional eyes or 105º for a person with one (1) " +
      "functional eye.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Vision Requirements (page 5)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=17",
  },
  {
    key: "vision-form-year",
    quote:
      "A vision test and a vision referral form (ASP-90) will be " +
      "valid for one (1) year from the date the test was " +
      "administered.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Vision Requirements (page 5)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=17",
  },
  {
    key: "id-under-18-birth-certificate",
    quote:
      "ALL minors, who are U.S. citizens, must present their " +
      "original U.S. birth certificate.  No hospital birth " +
      "certificates or birth registration cards will be accepted.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Accepted Identification List - Under Age 18 (page 7)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=19",
  },
  {
    key: "id-bring-glasses",
    quote:
      "Important Information: If you wear contacts or glasses, " +
      "please bring them with you to test!",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Accepted Identification List - Under Age 18 (page 7)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=19",
  },
  {
    key: "belt-primary-offence",
    quote:
      "Beginning June 30, 2009, Arkansas' seat belt law changed " +
      "to permit a law enforcement traffic stop based on the " +
      "primary violation of a motor vehicle driver or the " +
      "front-seat passenger who is buckled up. Arkansas law makes " +
      "it illegal to drive or to be a front-seat passenger, " +
      "without wearing a safety belt.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 1: Arkansas Law - Arkansas Seat Belt Law (page 9)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=21",
  },
  {
    key: "belt-fine",
    quote:
      "Any person who violates this law shall be subject to a " +
      "fine not to exceed twenty-five dollars ($25.00), and any " +
      "court costs or fees.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 1: Arkansas Law - Arkansas Seat Belt Law (page 9)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=21",
  },
  {
    key: "child-seat",
    quote:
      "A child who is less than six (6) years of age and who " +
      "weighs less than sixty (60) pounds shall be restrained in " +
      "a child passenger safety seat properly secured to the " +
      "vehicle.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 1: Arkansas Law - Child Passenger Protection Act 27-34-104 (page 9)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=21",
  },
  {
    key: "child-restraint-under-15",
    quote:
      "All children under the age of fifteen (15) must wear " +
      "appropriate safety restraints while the vehicle is in " +
      "motion.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 1: Arkansas Law - Child Passenger Protection Act 27-34-104 (page 9)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=21",
  },
  {
    key: "smoking-under-14",
    quote:
      "A person shall not knowingly smoke tobacco in any motor " +
      "vehicle in which a child who is less than fourteen (14) " +
      "years of age is a passenger.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 1: Arkansas Law - Protection from Secondhand Smoke for Children Act (page 9)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=21",
  },
  {
    key: "litter-penalty",
    quote:
      "Upon conviction, first offenders are subject to a fine of " +
      "up to $1,000 and not more than eight hours of community " +
      "service. Subsequent convictions can result in fines up to " +
      "$2,000 and twenty-four hours of community service.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 1: Arkansas Law - Arkansas Law on Littering (page 10)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=22",
  },
  {
    key: "unattended-children",
    quote:
      "Never leave children and pets unattended in a vehicle. " +
      "Though we may think prior air-conditioning will help to " +
      "keep the car cool after exiting, you should know that " +
      "within five minutes on a 90-degree day, the temperature " +
      "within a vehicle reaches that of the outdoors",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 1: Arkansas Law - Unattended Children and Pets (page 10)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=22",
  },
  {
    key: "move-over-emergency",
    quote:
      "Arkansas law requires motorists to \"move over\" for police " +
      "cars, fire trucks, ambulances, and other emergency " +
      "vehicles using a siren or air horn, and a red or blue " +
      "flashing light. Drivers should pull over to the right edge " +
      "of the road, or near to the right as possible.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 1: Arkansas Law - Move Over Law (page 11)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=23",
  },
  {
    key: "move-over-intersection",
    quote:
      "If you are in an intersection, go ahead and drive through " +
      "the intersection before pulling over.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 1: Arkansas Law - Move Over Law (page 11)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=23",
  },
  {
    key: "move-over-multilane",
    quote:
      "Arkansas law requires any motor vehicle on a multilane " +
      "highway to move over, whenever possible, to the farthest " +
      "lane away from any stopped law enforcement vehicle with " +
      "its lights turned on.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 1: Arkansas Law - Move Over Law (page 11)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=23",
  },
  {
    key: "move-over-penalty",
    quote:
      "If a driver is found guilty of violating this law, they " +
      "can be fined up to $1,000, receive jail time or both. The " +
      "court may order community service or suspend a person's " +
      "driver's license up to six (6) months.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 1: Arkansas Law - Move Over Law (page 11)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=23",
  },
  {
    key: "bus-stop-required",
    quote:
      "When approaching a stopped school bus with its red lights " +
      "flashing, a driver is required to make a complete stop " +
      "until the lights are turned off.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 1: Arkansas Law - School Bus Law and Rules (page 12)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=24",
  },
  {
    key: "bus-any-position",
    quote:
      "No matter where your vehicle is positioned with the bus " +
      "whether it's in the same lane of traffic, the opposing " +
      "lane, or at an intersection, YOU MUST MAKE A COMPLETE " +
      "STOP!",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 1: Arkansas Law - School Bus Law and Rules (page 12)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=24",
  },
  {
    key: "bus-no-passing",
    quote:
      "The driver must never attempt to pass in any direction " +
      "until the school bus has finished receiving or discharging " +
      "its passengers and begins moving without its red lights " +
      "flashing.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 1: Arkansas Law - School Bus Law and Rules (page 12)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=24",
  },
  {
    key: "bus-median-20-feet",
    quote:
      "Drivers are not required to stop if the school bus is " +
      "approaching along an opposite lane of travel separated by " +
      "a median twenty (20) feet or more in width.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 1: Arkansas Law - School Bus Law and Rules (page 12)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=24",
  },
  {
    key: "bus-railroad",
    quote:
      "School buses are required to stop at all railroad " +
      "crossings.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 1: Arkansas Law - School Bus Law and Rules (page 12)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=24",
  },
  {
    key: "bus-penalty",
    quote:
      "Drivers passing a stopped school bus with red lights " +
      "flashing will be charged with a Misdemeanor and upon " +
      "conviction, fined a minimum of $250, not to exceed $1,000, " +
      "up to ninety (90) days in jail, and/or both.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 1: Arkansas Law - School Bus Law and Rules (page 13)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=25",
  },
  {
    key: "bus-death-felony",
    quote:
      "Drivers who fail to obey this law and cause the death of a " +
      "person will be charged with a felony.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 1: Arkansas Law - School Bus Law and Rules (page 13)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=25",
  },
  {
    key: "bus-median-narrow",
    quote:
      "Median must be 20 feet or more. If the median is less than " +
      "20 feet, all lanes of traffic must stop.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 1: Arkansas Law - School Bus Law and Rules (page 13)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=25",
  },
  {
    key: "accessible-parking-tag",
    quote:
      "In order to park in an accessible parking space, you must " +
      "have either the appropriate license plate with the " +
      "international symbol or the designated hang tag often " +
      "referred to as a \"Special Certificate.\"",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 1: Arkansas Law - AR Governor's Commission on People with Disabilities (page 14)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=26",
  },
  {
    key: "accessible-parking-present",
    quote:
      "Be present in the vehicle when parking in an accessible " +
      "parking space. The special certificate is to be displayed " +
      "hanging from the rearview mirror or the dashboard.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 1: Arkansas Law - AR Governor's Commission on People with Disabilities (page 14)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=26",
  },
  {
    key: "accessible-parking-fraud",
    quote:
      "The penalty for first (1st) offense is a minimum of " +
      "$100.00 not to exceed $500. The second offense is a " +
      "minimum of $250.00 not to exceed $1000.00, plus a six (6) " +
      "month driver's license suspension",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 1: Arkansas Law - AR Governor's Commission on People with Disabilities (page 14)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=26",
  },
  {
    key: "approach-stopped-police",
    quote:
      "Arkansas law requires any motor vehicle on a multilane " +
      "highway to move over, whenever possible, to the farthest " +
      "lane away from any stopped law enforcement vehicle (i.e., " +
      "enforcement vehicle, Arkansas DOT, utility vehicle, or a " +
      "towing vehicle) with its lights turned on.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 1: Arkansas Law - Approaching a Law Enforcement Vehicle (page 15)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=27",
  },
  {
    key: "approach-penalty",
    quote:
      "If a driver is found guilty of this law, they can be fined " +
      "up to $500, receive jail time or both. The court may order " +
      "community service or suspend a person's driver's license " +
      "up to six (6) months.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 1: Arkansas Law - Approaching a Law Enforcement Vehicle (page 15)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=27",
  },
  {
    key: "rules-scope",
    quote:
      "Rules of the road include traffic controls, lane controls, " +
      "right-of-way laws, and parking rules.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2: Arkansas Rules and Regulations (page 16)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=28",
  },
  {
    key: "work-zone-speed",
    quote:
      "Through many work zones, the speed limits may be reduced, " +
      "and lane usage could be restricted for safety purposes. " +
      "Any reduced speed will be clearly posted within the work " +
      "zone.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Construction/Maintenance/Work Zone Safety (page 17)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=29",
  },
  {
    key: "work-zone-no-posted",
    quote:
      "If there are no reduced speed limits posted, drivers " +
      "should obey the normally posted speed limit.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Construction/Maintenance/Work Zone Safety (page 17)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=29",
  },
  {
    key: "work-zone-green-lights",
    quote:
      "Green Lights in Work Zones- The Arkansas Legislature " +
      "recently authorized the use of flashing green lights on " +
      "roadway construction and maintenance vehicles.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Construction/Maintenance/Work Zone Safety (page 18)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=30",
  },
  {
    key: "work-zone-green-caution",
    quote:
      "The presence of these lights indicates an active Work Zone " +
      "(either Standard or Mobile), and drivers should exercise " +
      "caution and slow down when they are seen.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Construction/Maintenance/Work Zone Safety (page 18)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=30",
  },
  {
    key: "work-zone-signs",
    quote:
      "Work Zone Signs- Signs in Work Zones serve as a warning " +
      "that people are working on or near the highway. They may " +
      "be diamond or rectangular shaped, and the background may " +
      "be orange, white or black with white or black letters or " +
      "symbols.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Construction/Maintenance/Work Zone Safety (page 18)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=30",
  },
  {
    key: "work-zone-fines-double",
    quote:
      "Fines Double- If a driver receives a citation for any " +
      "moving traffic violation in a Work Zone, they will pay " +
      "double the fine. A moving traffic violation includes " +
      "speeding, reckless driving, distracted driving, and more. " +
      "Depending on the traffic violation, doubled fines can be " +
      "as high as $5,000.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Work Zone Safety, Fines Double (page 19)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=31",
  },
  {
    key: "work-zone-mobile",
    quote:
      "Mobile Work Zones are treated the same as any other " +
      "standard or stationary Work Zone, meaning fines double for " +
      "violations in both types of Work Zones.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Work Zone Safety, Fines Double (page 19)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=31",
  },
  {
    key: "work-zone-phone",
    quote:
      "Does holding your phone to take a phone call, send a text " +
      "message, look up directions, or scroll social media count " +
      "as a moving traffic violation? Yes.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Work Zone Safety, Leave Your Phone Alone (page 19)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=31",
  },
  {
    key: "work-zone-cameras",
    quote:
      "Additionally, speed enforcement cameras are used in " +
      "Interstate Work Zones in Arkansas.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Work Zone Safety, Know the Work Zone Speed Limit (page 19)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=31",
  },
  {
    key: "work-zone-merge-early",
    quote:
      "Merge Early- If you see lane closures ahead, change to the " +
      "correct lane as soon as it's safe to do so, ideally a mile " +
      "or more before the closure.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Work Zone Questions and Answers (page 20)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=32",
  },
  {
    key: "move-over-slow-down",
    quote:
      "Slow Down- If moving over is unsafe or impossible, reduce " +
      "your speed to a safe level for conditions or a legally " +
      "mandated speed.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Work Zone Questions and Answers (page 21)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=33",
  },
  {
    key: "move-over-covered",
    quote:
      "While most laws cover police, fire, and ambulance " +
      "vehicles, Arkansas has expanded the law to include other " +
      "vehicles with flashing lights such as:",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Work Zone Questions and Answers (page 21)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=33",
  },
  {
    key: "flagger-authority",
    quote:
      "Always obey the flagger's signals or signs, such as a " +
      "STOP/SLOW paddle. Their instructions overrule any other " +
      "traffic signals or devices.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Work Zone Questions and Answers (page 22)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=34",
  },
  {
    key: "flagger-stop",
    quote:
      "Stop Promptly: Stop at the designated location, or at " +
      "least a car length away from the flagger, and wait for " +
      "directions to proceed.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Work Zone Questions and Answers (page 22)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=34",
  },
  {
    key: "signal-green",
    quote:
      "A green light allows you to proceed through an " +
      "intersection if there is no opposing traffic. If a driver " +
      "is stopped at a controlled intersection on a green light, " +
      "the driver must allow opposing traffic already in the " +
      "intersection to clear before proceeding.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Lighted Traffic Signals (page 23)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=35",
  },
  {
    key: "signal-red",
    quote:
      "A red light means the driver must stop. The driver cannot " +
      "proceed until the light turns green and it is safe to go.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Lighted Traffic Signals (page 23)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=35",
  },
  {
    key: "signal-yellow",
    quote:
      "A yellow light means caution. A steady yellow light means " +
      "the traffic signal is changing from green to red. You must " +
      "stop if it is safe to do so. If you are already stopped at " +
      "an intersection or a stop line, you may not proceed.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Lighted Traffic Signals (page 23)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=35",
  },
  {
    key: "traffic-controls",
    quote:
      "Traffic controls include traffic signals, traffic signs, " +
      "and pavement markings. Other traffic controls could be law " +
      "enforcement, highway personnel, or school crossing guards. " +
      "Any traffic control must be obeyed when driving.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Traffic Control Signals, Signs, and Pavement Markings (page 23)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=35",
  },
  {
    key: "flashing-red",
    quote:
      "A flashing red light is the same as a stop sign. A driver " +
      "must come to a complete stop, and then proceed only when " +
      "it is safe.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Flashing Lights (page 24)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=36",
  },
  {
    key: "flashing-yellow",
    quote:
      "If you are approaching a flashing yellow light, you should " +
      "slow down and proceed with caution.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Flashing Lights (page 24)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=36",
  },
  {
    key: "arrow-red",
    quote:
      "A steady red arrow means stop. Drivers turning left must " +
      "stop. A red arrow on a traffic light means you may not " +
      "turn in the direction of the arrow.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Lighted Arrows (page 24)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=36",
  },
  {
    key: "arrow-yellow",
    quote:
      "A steady yellow arrow means the signal is getting ready to " +
      "turn red. Drivers turning left should stop if it is safe " +
      "to do so.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Lighted Arrows (page 24)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=36",
  },
  {
    key: "arrow-flashing-yellow",
    quote:
      "A flashing yellow arrow means left turns are permitted. " +
      "Drivers may turn left but must yield to oncoming traffic " +
      "and pedestrians, then proceed with caution.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Lighted Arrows (page 24)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=36",
  },
  {
    key: "arrow-green",
    quote:
      "A light green arrow on a traffic light means you may turn " +
      "in the direction of the arrow. Left turns are protected. " +
      "Drivers may turn in the direction of the arrow. Opposing " +
      "traffic must stop.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Lighted Arrows (page 24)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=36",
  },
  {
    key: "arrow-count",
    quote:
      "There are four (4) types of lighted arrows used to control " +
      "traffic.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Lighted Arrows (page 24)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=36",
  },
  {
    key: "right-on-red",
    quote:
      "When approaching an intersection with a red light and the " +
      "driver intends to turn right, a complete stop and a check " +
      "for opposing traffic must be made before turning right.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Right on Red Rule (page 25)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=37",
  },
  {
    key: "right-on-red-pedestrians",
    quote:
      "Drivers must always look for pedestrians in or about the " +
      "crosswalks. You should never block or stop your vehicle " +
      "within a crosswalk.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Right on Red Rule (page 25)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=37",
  },
  {
    key: "right-on-red-sign",
    quote:
      "The driver may turn right on red unless there is a sign " +
      "prohibiting a right turn on red.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Right on Red Rule (page 25)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=37",
  },
  {
    key: "stop-sign-shape",
    quote:
      "A stop sign is red with white letters and has eight (8) " +
      "sides or octagon shaped.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Traffic Control Signs, Stop Signs (page 25)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=37",
  },
  {
    key: "stop-sign-rule",
    quote:
      "A stop sign means a driver must come to a complete stop. " +
      "The driver must wait until crossing vehicles and " +
      "pedestrians have cleared the intersection.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Traffic Control Signs, Stop Signs (page 25)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=37",
  },
  {
    key: "stop-sign-blocked-view",
    quote:
      "If you are approaching a stop sign and obstacles are " +
      "blocking your view, you should make a complete stop and " +
      "pull forward to see. You may proceed when safe to do so.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Traffic Control Signs, Stop Signs (page 25)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=37",
  },
  {
    key: "speed-limit-sign",
    quote:
      "A speed limit sign indicates the minimum and maximum speed " +
      "allowed for a particular section of highway or street. The " +
      "maximum speed should be used in ideal conditions and " +
      "reduced as conditions arise such as slippery roads or poor " +
      "visibility.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Traffic Control Signs, Speed Limit Sign (page 25)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=37",
  },
  {
    key: "sign-shape-color",
    quote:
      "Traffic signs display traffic rules, hazards, location, " +
      "travel directions, and where services are located. The " +
      "shape and color of these signs will determine the type of " +
      "information that will be placed on the sign.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Traffic Control Signs (page 25)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=37",
  },
  {
    key: "county-road-default",
    quote:
      "If a county judge has not established a speed limit on a " +
      "county road within the jurisdictional boundaries of his or " +
      "her county, then the speed limit shall be forty miles per " +
      "hour (40 m.p.h.) on the county road.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - 27-51-216 Speed Limits on County Roads (page 26)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=38",
  },
  {
    key: "county-road-definition",
    quote:
      "As used in this section, \"county road\" means a public road " +
      "that is not a state highway, interstate highway, or city " +
      "street within the jurisdiction of a given county.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - 27-51-216 Speed Limits on County Roads (page 26)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=38",
  },
  {
    key: "county-road-15-over",
    quote:
      "A person who pleads guilty or nolo contendere to or is " +
      "found guilty of speeding in excess of fifteen miles per " +
      "hour (15 m.p.h.) over the posted speed limit on a county " +
      "road established by a county judge or as provided under " +
      "this section is guilty of a Class C misdemeanor.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - 27-51-216 Speed Limits on County Roads (page 26)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=38",
  },
  {
    key: "yield-sign-shape",
    quote:
      "A yield sign is a red and white or yellow and black that " +
      "is triangular shaped displaying the word \"YIELD\" or \"YIELD " +
      "RIGHT OF WAY.\"",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Traffic Control Signs, Yield Sign (page 26)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=38",
  },
  {
    key: "yield-sign-rule",
    quote:
      "The yield sign means the driver must slow down or yield " +
      "the right of way to traffic in the intersection, where the " +
      "driver may be crossing or entering. When approaching a " +
      "yield sign you must yield to other vehicles and stop when " +
      "necessary.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Traffic Control Signs, Yield Sign (page 26)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=38",
  },
  {
    key: "yield-fine",
    quote:
      "A driver who fails to yield could receive a fine of up to " +
      "$1000 and suspension of their driver's license for 180 " +
      "days.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Traffic Control Signs, Yield Sign (page 26)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=38",
  },
  {
    key: "do-not-enter",
    quote:
      "The do not enter sign is typically a red circle with a " +
      "line running across or diagonal line through it, meaning " +
      "something is not allowed.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Traffic Control Signs, Do Not Enter Signs (page 26)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=38",
  },
  {
    key: "slow-moving-vehicle",
    quote:
      "A reflective orange triangle bordered with red warns other " +
      "road users that the vehicle is traveling slower than the " +
      "normal speed of traffic.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Traffic Control Signs, Slow Moving Vehicle Sign (page 26)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=38",
  },
  {
    key: "warning-signs",
    quote:
      "These signs are yellow with black lettering or symbols, " +
      "and most are diamond-shaped. These signs warn a driver to " +
      "slow down and be prepared to stop, if necessary, or " +
      "provide information about a special situation or a hazard " +
      "that may be along the road ahead.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Roadway Signs, Warning Signs (page 27)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=39",
  },
  {
    key: "regulation-signs",
    quote:
      "There are signs on a white square or rectangle with black " +
      "and/or red letters or symbols. These signs provide " +
      "information on rules of traffic direction, lane usage, " +
      "turning, parking, and other special instructions.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Roadway Signs, Regulation Signs (page 27)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=39",
  },
  {
    key: "crossbuck",
    quote:
      "This is a white \"X\" shaped sign with black letters. This " +
      "sign marks the grade crossing and requires you to yield " +
      "the right-of-way to the train.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Railroad Crossing Signs, Cross Buck Sign (page 28)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=40",
  },
  {
    key: "rr-advance-warning",
    quote:
      "The round black-on-yellow warning sign is placed ahead of " +
      "a public highway-rail intersection. The Advance Warning " +
      "sign tells you to slow down, look and listen for the " +
      "train, and be prepared to stop at the tracks if a train is " +
      "coming.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Railroad Crossing Signs, Round Yellow Advance Warning Sign (page 28)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=40",
  },
  {
    key: "rr-pavement-markings",
    quote:
      "Pavement markings mean the same as the Advance Warning " +
      "sign. They consist of an \"X\" with the letters \"RR\" and a " +
      "no-passing marking on two-lane roads.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Railroad Crossing Signs, Pavement Markings (page 28)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=40",
  },
  {
    key: "rr-manual-transmission",
    quote:
      "If your vehicle is equipped with a manual transmission, it " +
      "is wise not to shift gears when crossing the tracks to " +
      "avoid the possibility of an engine stall.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Railroad Crossing Signs (page 28)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=40",
  },
  {
    key: "rr-never-around-gates",
    quote: "NEVER attempt to go around crossing gates.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Railroad Crossing Signs, Gates and Lights (page 29)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=41",
  },
  {
    key: "rr-flashing-lights",
    quote:
      "When the red lights are flashing, a train is present. Even " +
      "if the red lights continue to flash and no train appears, " +
      "do not cross.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Railroad Crossing Signs, Gates and Lights (page 29)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=41",
  },
  {
    key: "rr-gates-down",
    quote:
      "When the gates are down, it means a train is present and " +
      "the road is closed. It is unsafe and illegal to cross. If " +
      "the gates begin to come down as you begin to cross, keep " +
      "going even if it means you will break the gate.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Railroad Crossing Signs, Gates and Lights (page 29)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=41",
  },
  {
    key: "rr-no-barrier",
    quote:
      "If you are approaching a railroad crossing and there is no " +
      "safety barrier you should cross the tracks after checking " +
      "both directions.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Railroad Crossing Signs, Gates and Lights (page 29)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=41",
  },
  {
    key: "rr-exempt",
    quote:
      "An EXEMPT sign means that the crossing has been abandoned " +
      "or its use discontinued. Follow your local procedure about " +
      "stopping.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Railroad (Exempt) Signs (page 29)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=41",
  },
  {
    key: "rr-ens",
    quote:
      "The purpose of the ENS sign is to provide the public with " +
      "critical emergency contact information at every " +
      "highway-rail grade crossing.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Emergency Notification Systems at Highway-Rail Grade Crossings (page 29)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=41",
  },
  {
    key: "rr-multiple-tracks",
    quote:
      "When there is more than one set of tracks at a crossing, " +
      "there is a sign beneath the cross buck with a number " +
      "indicating how many tracks are present. Watch for " +
      "additional trains coming from either direction.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Railroad Crossing Signs, Multiple Tracks (page 30)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=42",
  },
  {
    key: "rr-cross-when-clear",
    quote:
      "When crossing more than one set of railroad tracks you " +
      "should cross only when the train is well down the tracks.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Railroad Crossing Signs, Multiple Tracks (page 30)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=42",
  },
  {
    key: "rr-never-park",
    quote:
      "Never Park or stop on railroad tracks. When approaching a " +
      "railroad crossing, look up and down the track to make sure " +
      "a train is not approaching.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 2 - Railroad Crossing Signs, Safety Tips (page 30)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=42",
  },
  {
    key: "fog-line",
    quote:
      "A solid white line along the side of the roadway that " +
      "tells the driver where the outer edge is located.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 3: General Driving - Fog Line and Lane Lines (page 31)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=43",
  },
  {
    key: "white-dashed",
    quote:
      "A dashed white line between lanes of traffic indicates a " +
      "driver may cross the line to change lanes, when safe. " +
      "These lines separate lanes of traffic moving in the same " +
      "direction.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 3: General Driving - White Lane Markings (page 31)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=43",
  },
  {
    key: "yellow-broken",
    quote:
      "A broken yellow line between opposing lanes of traffic " +
      "indicates a driver may cross to pass if there is no " +
      "opposing traffic.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 3: General Driving - Yellow Lane Markings (page 31)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=43",
  },
  {
    key: "yellow-double-solid",
    quote:
      "A solid double yellow line separates lanes of traffic " +
      "moving in opposite directions. The double yellow line in " +
      "the center of the roadway means passing is prohibited for " +
      "vehicles traveling in either direction.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 3: General Driving - Yellow Lane Markings (page 31)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=43",
  },
  {
    key: "yellow-cross-to-driveway",
    quote:
      "A driver may cross a solid yellow line to turn into a " +
      "driveway if there is no opposing traffic approaching the " +
      "planned turn site.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 3: General Driving - Yellow Lane Markings (page 31)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=43",
  },
  {
    key: "shared-center-lane",
    quote:
      "In Arkansas, it is permissible for a vehicle making a left " +
      "turn from an intersecting street or driveway to utilize a " +
      "center turn lane as part of the maneuver to gain access or " +
      "merge into traffic lanes, except it is not permissible to " +
      "use the center left turn lane as an acceleration lane.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 3: General Driving - Shared Center Lane (page 32)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=44",
  },
  {
    key: "shared-center-both-ways",
    quote:
      "Shared center lanes are reserved for making left turns and " +
      "can be used by vehicles traveling in either direction.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 3: General Driving - Shared Center Lane (page 32)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=44",
  },
  {
    key: "never-back-in-lane",
    quote:
      "Never back a vehicle in any travel lane, it is illegal and " +
      "unsafe. If you miss your turn or exit, do not back up; " +
      "proceed to a safe turnaround area.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 3: General Driving - Unmarked Lanes (page 32)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=44",
  },
  {
    key: "never-stop-in-lane",
    quote:
      "Never stop in travel lanes for any reason (e.g., " +
      "confusion, breakdown, passenger drop off, etc.). Keep " +
      "moving until you can safely pull off the road.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 3: General Driving - Unmarked Lanes (page 32)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=44",
  },
  {
    key: "three-lanes-right",
    quote:
      "On a road with three or more lanes traveling in the same " +
      "direction remain in the right lane except to pass. If " +
      "there is a lot of merging traffic, then use the center " +
      "travel lane.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 3: General Driving - Unmarked Lanes (page 32)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=44",
  },
  {
    key: "no-shoulder-driving",
    quote:
      "Never drive on the shoulder of any street or road, unless " +
      "directed by a police officer.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 3: General Driving - Unmarked Lanes (page 32)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=44",
  },
  {
    key: "passing-leftmost",
    quote:
      "On multi-lane roads, the leftmost lane is intended to be " +
      "used to pass slower vehicles. Never pass on the shoulder, " +
      "whether it is paved or not.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 3: General Driving - Passing (page 32)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=44",
  },
  {
    key: "turn-lane-closest",
    quote:
      "When there are no signs or lane markings to control " +
      "turning, a driver should turn into the lane closest to the " +
      "direction of travel.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 3: General Driving - Turning (page 33)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=45",
  },
  {
    key: "right-turns",
    quote:
      "Right Turns- When turning avoid crossing over into the " +
      "opposite lane of traffic. A wide turn may cause the driver " +
      "behind you to think you are changing lanes or going to " +
      "turn left and may try to pass you on the right.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 3: General Driving - Right Turns (page 33)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=45",
  },
  {
    key: "left-turns",
    quote:
      "Left Turns- When turning left, avoid cutting the corners. " +
      "Turning sharp could cause you to hit a vehicle approaching " +
      "from the left. Always leave room for oncoming vehicles to " +
      "turn left in front of you.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 3: General Driving - Left Turns (page 33)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=45",
  },
  {
    key: "multiple-lanes-abreast",
    quote:
      "On multi-lane highways, when driving beside another " +
      "vehicle, you should move ahead of the vehicle next to you " +
      "or drop behind the vehicle next to you.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 3: General Driving - Multiple Lanes (page 34)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=46",
  },
  {
    key: "followed-too-close",
    quote:
      "If you are being followed too close on a multi-lane " +
      "roadway, you should move into the lane to your right when " +
      "clear.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 3: General Driving - Multiple Lanes (page 34)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=46",
  },
  {
    key: "stop-line",
    quote:
      "When approaching a stop sign you must stop your vehicle at " +
      "the stop line if one is present. Make a complete stop " +
      "before the vehicle reaches the line.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 3: General Driving - Crosswalks and Stop Lines (page 34)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=46",
  },
  {
    key: "crosswalk-yield",
    quote:
      "A driver must yield to pedestrians in or about to enter a " +
      "crosswalk. Not all crosswalks are marked. Drivers should " +
      "watch for pedestrians when crossing intersections that do " +
      "not have marked crosswalks.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 3: General Driving - Crosswalks and Stop Lines (page 34)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=46",
  },
  {
    key: "white-cane-absolute",
    quote:
      "Pedestrians carrying a white cane or using a guide dog " +
      "must be given absolute right of way.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 3: General Driving - Crosswalks and Stop Lines (page 34)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=46",
  },
  {
    key: "no-absolute-row",
    quote:
      "Traffic laws determine which vehicle must yield the " +
      "right-of-way and do not give a vehicle absolute " +
      "right-of-way. As a driver, you must do everything possible " +
      "to prevent striking a pedestrian or another vehicle, " +
      "regardless of the circumstance.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 3: General Driving - Right of Way (page 35)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=47",
  },
  {
    key: "sidewalk-yield",
    quote:
      "Drivers crossing a sidewalk when entering or exiting a " +
      "driveway, alley, or parking lot must yield to pedestrians. " +
      "It is illegal to drive on a sidewalk except to cross it.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 3: General Driving - Right of Way, Pedestrians (page 35)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=47",
  },
  {
    key: "horn-blind-pedestrian",
    quote:
      "Pedestrians using a guide dog or carrying a white cane " +
      "have absolute right-of-way. Do not use your horn as it " +
      "could confuse or frighten a blind pedestrian.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 3: General Driving - Right of Way, Pedestrians (page 35)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=47",
  },
  {
    key: "left-turn-yield",
    quote:
      "Drivers turning left must yield to oncoming cars traveling " +
      "straight ahead.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 3: General Driving - Right of Way, Left Turns (page 35)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=47",
  },
  {
    key: "traffic-circle-yield",
    quote:
      "Drivers entering a traffic circle or rotary must yield to " +
      "drivers already in the circle.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 3: General Driving - Right of Way (page 35)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=47",
  },
  {
    key: "roundabout-definition",
    quote:
      "A roundabout is a circular intersection in which traffic " +
      "travels around a central island. This simple design is " +
      "becoming increasingly popular for its safety, mobility, " +
      "and maintenance advantages.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 3: General Driving - Roundabouts (page 36)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=48",
  },
  {
    key: "uncontrolled-intersection",
    quote:
      "At an intersection where there is no stop sign or traffic " +
      "signal, drivers must yield to vehicles approaching from " +
      "the right.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 3: General Driving - Right of Way at Stop Signs (page 39)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=51",
  },
  {
    key: "all-way-first",
    quote:
      "At intersections with stop signs at all corners, you must " +
      "yield the right-of-way to the vehicle that arrived first.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 3: General Driving - Right of Way at Stop Signs (page 39)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=51",
  },
  {
    key: "all-way-signs",
    quote:
      "At \"3 WAY,\" \"4 WAY,\" and \"ALL WAY\" stop signs, the driver " +
      "reaching the intersection first goes first, after making a " +
      "complete stop.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 3: General Driving - Right of Way at Stop Signs (page 40)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=52",
  },
  {
    key: "driveway-yield",
    quote:
      "Drivers entering a road from a driveway, alley or roadside " +
      "must yield to vehicles already on the main road.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 3: General Driving - General Right of Way Rules (page 40)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=52",
  },
  {
    key: "no-blocking-intersection",
    quote:
      "Drivers may not enter an intersection unless they can get " +
      "through it without having to stop. You should wait until " +
      "traffic clears so that you are not blocking the " +
      "intersection.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 3: General Driving - General Right of Way Rules (page 40)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=52",
  },
  {
    key: "passing-yield",
    quote:
      "Drivers passing a vehicle traveling in the same direction " +
      "must yield to the vehicle being passed, even if the " +
      "vehicle is slowing or coming to a stop because the vehicle " +
      "may be attempting to turn left or may be approaching a " +
      "hazard the overtaking vehicle does not see.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 3: General Driving - General Right of Way Rules, Passing (page 40)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=52",
  },
  {
    key: "parking-placement",
    quote:
      "You should always park your vehicle in a place that is (1) " +
      "far enough from the street or highway to avoid interfering " +
      "with traffic and (2) visible to cars approaching from " +
      "either direction.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 3: General Driving - Parking (page 41)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=53",
  },
  {
    key: "parallel-18-inches",
    quote:
      "When parallel parking, your vehicle should be 18 inches or " +
      "less from the curb.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 3: General Driving - Parking Tips (page 41)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=53",
  },
  {
    key: "parking-hill-wheels",
    quote:
      "When parking on a hill, turn the wheels sharply away from " +
      "traffic to prevent the car from rolling into traffic.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 3: General Driving - Parking Tips (page 41)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=53",
  },
  {
    key: "parking-brake",
    quote:
      "Always set the parking brake. Leave the vehicle in gear if " +
      "it has a manual transmission or in \"park\" if it has an " +
      "automatic transmission.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 3: General Driving - Parking Tips (page 41)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=53",
  },
  {
    key: "parking-exit-curbside",
    quote:
      "Check traffic before you open the door. Always exit the " +
      "vehicle on the curbside, if possible.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 3: General Driving - Parking Tips (page 41)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=53",
  },
  {
    key: "parking-unattended-grade",
    quote:
      "No driver, when standing on a distinct grade, will leave a " +
      "vehicle unattended \"without first effectively setting the " +
      "parking brake and turning the wheels to the curb or side " +
      "of the highway\".",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 3: General Driving - Parking Tips (page 41)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=53",
  },
  {
    key: "no-parking-distances",
    quote:
      "Within twenty (20) feet of a crosswalk at an intersection " +
      "Within thirty (30) feet of a traffic signal, stop sign, or " +
      "yield sign. Within thirty (30) feet of a pedestrian safety " +
      "zone Within fifteen (15) feet of a fire hydrant Within " +
      "fifty (50) feet of a railroad crossing More than eighteen " +
      "(18) inches from the curb",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 3: General Driving - Do Not Park (page 42)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=54",
  },
  {
    key: "no-parking-fire-station",
    quote:
      "Within twenty (20) feet of a fire station driveway on the " +
      "same side of the street, or street where proper signs are " +
      "posted.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 3: General Driving - Do Not Park (page 42)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=54",
  },
  {
    key: "no-parking-bridge",
    quote:
      "On a bridge, overpass, tunnel, or underpass Along a lane " +
      "of opposing traffic",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 3: General Driving - Do Not Park (page 42)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=54",
  },
  {
    key: "no-double-parking",
    quote:
      "Along the street or highway next to another parked vehicle " +
      "(double parking) On railroad tracks",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 3: General Driving - Do Not Park (page 42)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=54",
  },
  {
    key: "curb-colors",
    quote:
      "Red curb means fire zone. Yellow curb means a loading zone " +
      "or other restriction.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 3: General Driving - Restricted Parking Zones (page 42)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=54",
  },
  {
    key: "belt-before-engine",
    quote:
      "Your safety belt should be fastened before the engine is " +
      "started.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 4: Safe Driving - Operating the Motor Vehicle, Seat Belt (page 43)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=55",
  },
  {
    key: "acceleration-smooth",
    quote:
      "Acceleration (pressing the gas pedal) should be pressed " +
      "slowly and smoothly. Depressing the gas pedal too fast can " +
      "cause the drive wheels to spin or cause your vehicle to " +
      "slide, especially if the pavement is wet.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 4: Safe Driving - Acceleration (page 44)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=56",
  },
  {
    key: "hand-over-hand",
    quote:
      "When executing a sharp turn, such as around corners of an " +
      "intersection, use the \"hand-over-hand\" technique to " +
      "control the steering wheel.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 4: Safe Driving - Steering the Vehicle (page 44)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=56",
  },
  {
    key: "monitor-speed",
    quote:
      "Be familiar with speed limits and adjust your speed " +
      "according to the driving conditions. Always obey speed " +
      "limit signs. Check your speedometer often to ensure you " +
      "are within the speed limit.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 4: Safe Driving - Monitor Vehicle Speed (page 44)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=56",
  },
  {
    key: "sudden-stops",
    quote:
      "Stopping suddenly is dangerous and indicates a driver who " +
      "is not paying attention. Braking quickly can cause your " +
      "vehicle to skid and cause you to lose control.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 4: Safe Driving - Stopping (page 44)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=56",
  },
  {
    key: "texting-five-seconds",
    quote:
      "Sending or reading a text takes your eyes off the road for " +
      "5 seconds. At 55 mph, that's like driving the length of an " +
      "entire football field with your eyes closed.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 4: Safe Driving - Distracted Driving (page 45)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=57",
  },
  {
    key: "distracted-definition",
    quote:
      "Distracted driving is any activity that diverts attention " +
      "from driving, including talking or texting on your phone, " +
      "eating and drinking, talking to people in your vehicle, " +
      "fiddling with the stereo, entertainment, or navigation " +
      "system - anything that takes your attention away from the " +
      "task of safe driving.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 4: Safe Driving - What is Distracted Driving? (page 45)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=57",
  },
  {
    key: "three-distractions",
    quote:
      "Texting or talking on a hand-held cell phone involves " +
      "three different types of distraction that occur at the " +
      "same time:",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 4: Safe Driving - Dangerous Distractions (page 46)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=58",
  },
  {
    key: "cell-under-18",
    quote:
      "Under eighteen (18) years of age cell phone use is not " +
      "allowed. The use of hands-free devices is not allowed.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 4: Safe Driving - Distracted Driving Law (page 46)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=58",
  },
  {
    key: "cell-18-and-over",
    quote:
      "18 years of age or older may use a hands-free device, even " +
      "though it's not recommended to a cell phone while driving.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 4: Safe Driving - Distracted Driving Law (page 46)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=58",
  },
  {
    key: "inattention-leading-cause",
    quote:
      "Being a safe driver depends on you staying alert to your " +
      "surroundings. The leading cause of car crashes is " +
      "inattention.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 4: Safe Driving - Stay Alert (page 48)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=60",
  },
  {
    key: "look-ahead-15-seconds",
    quote:
      "To avoid last-minute braking or the need to turn from " +
      "interstate or highway, you should look down the road at " +
      "least one (1) city block, when driving in the city or " +
      "one-quarter mile when driving on highways and interstates. " +
      "You should be looking at least fifteen (15) seconds ahead.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 4: Safe Driving - Looking ahead (page 48)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=60",
  },
  {
    key: "intersection-look-twice",
    quote:
      "Before entering an intersection, you should look left and " +
      "right. Look a second time in the direction of oncoming " +
      "traffic before crossing.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 4: Safe Driving - Stay Alert, Intersections (page 48)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=60",
  },
  {
    key: "right-on-red-complete-stop",
    quote:
      "You may turn right on a red light, after making a complete " +
      "stop, unless there is a sign prohibiting \"right on red\".",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 4: Safe Driving - Stay Alert, Intersections (page 48)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=60",
  },
  {
    key: "view-blocked-ease-forward",
    quote:
      "If stopped at an intersection and your view of a cross " +
      "street is blocked, ease forward until you can see.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 4: Safe Driving - Stay Alert, Intersections (page 48)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=60",
  },
  {
    key: "lane-change-check",
    quote:
      "Before making a lane change you should be sure it's safe " +
      "by using the rearview mirror, and side mirrors, and " +
      "looking over your shoulder.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 4: Safe Driving - Looking Behind (page 49)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=61",
  },
  {
    key: "signal-100-feet-lane-change",
    quote:
      "Turn on your signal at least 100 feet before the lane " +
      "change.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 4: Safe Driving - Changing Lanes (page 49)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=61",
  },
  {
    key: "blind-spot-definition",
    quote:
      "Blind spots are the rear corners of your vehicle that " +
      "block other vehicles not seen through your mirrors.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 4: Safe Driving - Changing Lanes (page 49)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=61",
  },
  {
    key: "backing-look-behind",
    quote:
      "Place your right arm over the back of the seat and turn " +
      "your body, so you can look directly through the rear and " +
      "side windows. Do not depend on your rearview or side " +
      "mirrors as you cannot see directly behind your vehicle.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 4: Safe Driving - Backing (page 50)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=62",
  },
  {
    key: "never-alongside-truck",
    quote:
      "Never stay alongside a large vehicle such as a " +
      "tractor-trailer or bus.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 4: Safe Driving - Blind Spot Tips (page 50)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=62",
  },
  {
    key: "headlights-with-wipers",
    quote:
      "Arkansas law requires drivers to turn on their headlights " +
      "when windshield wipers are needed.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - External Vehicle Lights (page 51)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=63",
  },
  {
    key: "headlights-times",
    quote:
      "Turn on your headlights a ½ hour (30 minutes) after " +
      "sunset, a ½ hour (30 minutes) before sunrise, or anytime " +
      "you cannot see a person or object clearly within 500 feet.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - External Vehicle Lights (page 51)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=63",
  },
  {
    key: "parking-lights-illegal",
    quote:
      "Parking lights are for parked cars. It is illegal in " +
      "Arkansas to drive using only parking lights.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - External Vehicle Lights (page 51)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=63",
  },
  {
    key: "high-beams-twice",
    quote:
      "Use your high beams whenever there are no oncoming " +
      "vehicles. High beams let you see twice as far as low " +
      "beams.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - High and Low Beam Headlights (page 51)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=63",
  },
  {
    key: "high-beam-dim-500",
    quote:
      "Dim your high beams whenever you come within 500 feet of " +
      "an oncoming vehicle.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - High and Low Beam Headlights (page 51)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=63",
  },
  {
    key: "low-beam-following-200",
    quote:
      "Use your low-beam headlights when following another " +
      "vehicle closer than 200 feet.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - High and Low Beam Headlights (page 51)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=63",
  },
  {
    key: "low-beams-fog",
    quote:
      "When driving in fog, snow, or heavy rain you should use " +
      "your low headlight beams. The light from high beams will " +
      "reflect, causing glare, making it more difficult to see " +
      "the road.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - High and Low Beam Headlights (page 51)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=63",
  },
  {
    key: "horn-purpose",
    quote:
      "The horn should be used to alert other drivers of a " +
      "dangerous situation such as an accident.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - Warning Horn (page 52)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=64",
  },
  {
    key: "horn-do-not-use",
    quote:
      "To encourage other vehicles to speed up. To inform other " +
      "drivers of a mistake To greet a friend on the road",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - Warning Horn (page 52)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=64",
  },
  {
    key: "hazard-lights",
    quote:
      "Emergency flashers or hazard lights are activated when a " +
      "driver pushes the hazard light button/switch. The lights " +
      "warn other drivers of an emergency, broken down vehicle, " +
      "or that your car is parked on the side of the road.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - Emergency Flashers/Hazard Lights (page 52)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=64",
  },
  {
    key: "signal-100-feet",
    quote:
      "Turn signals should be used 100 feet before a lane change, " +
      "a right turn, a left turn, and each time you merge into " +
      "traffic or park.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - Signaling to Change Directions (page 53)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=65",
  },
  {
    key: "signal-beyond-intersection",
    quote:
      "If you plan to turn beyond an intersection, initiate the " +
      "signal just after you pass through the intersection. If " +
      "you signal earlier, another driver may think you are " +
      "turning at the intersection.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - Signaling to Change Directions (page 53)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=65",
  },
  {
    key: "signal-turn-off",
    quote:
      "After you have made a turn or lane change, turn your " +
      "signal off. A false turn signal is unsafe.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - Signaling to Change Directions (page 53)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=65",
  },
  {
    key: "stop-225-feet",
    quote:
      "The average passenger car traveling at 55 miles per hour " +
      "can stop within a total of 225 feet.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - Adjusting the Vehicle Speed (page 54)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=66",
  },
  {
    key: "curves-slow-before",
    quote:
      "Slow down before a curve, so you don't have to brake in " +
      "the curve. Braking in a curve can cause the vehicle to " +
      "skid.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - Curves (page 54)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=66",
  },
  {
    key: "slippery-speeds",
    quote:
      "On a wet road, you should reduce your speed to 10 mph. On " +
      "packed, snow you should cut your speed in half. On the " +
      "ice, you must slow to a coast.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - Adjust to Slippery Roads (page 55)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=67",
  },
  {
    key: "glare-ice-stop",
    quote:
      "When the road you are driving becomes very slippery due to " +
      "glare ice; you should stop driving as soon as you can " +
      "safely do so.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - Adjust to Slippery Roads (page 55)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=67",
  },
  {
    key: "bridges-ice-first",
    quote:
      "Overpasses and bridges can become some of the first " +
      "sections of roadways to develop icy conditions.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - Adjust to Slippery Roads (page 55)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=67",
  },
  {
    key: "hydroplane-speeds",
    quote:
      "When it is raining, or the road is wet; most tires have " +
      "good traction up to 35mph. In heavy rain, your tires can " +
      "lose all traction with the road at 50 mph.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - Adjust to Water Over the Roadway (page 55)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=67",
  },
  {
    key: "hydroplane-response",
    quote:
      "Slowly take your foot off the gas pedal. Keep the steering " +
      "wheel straight. Only turn the wheel in case of an " +
      "emergency.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - Adjust to Water Over the Roadway (page 55)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=67",
  },
  {
    key: "safest-speed-is-traffic",
    quote:
      "The safest speed to drive in traffic is the same speed as " +
      "other vehicles.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - Adjusting to the Flow of Traffic (page 56)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=68",
  },
  {
    key: "merging-ramp-speed",
    quote:
      "Use the ramp to reach the speed of other vehicles before " +
      "you pull onto the road. Do not drive to the end of the " +
      "ramp and stop.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - Merging With Traffic (page 56)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=68",
  },
  {
    key: "slow-driver-pull-over",
    quote:
      "If vehicles are accumulating behind you, pull over and " +
      "allow them to pass.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - Keeping Pace (page 56)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=68",
  },
  {
    key: "slow-moving-25-mph",
    quote:
      "Farm tractors, animal-drawn vehicles, and roadway " +
      "maintenance vehicles usually travel 25 mph or less.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - Slow-Moving Traffic (page 57)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=69",
  },
  {
    key: "stopping-40-mph",
    quote:
      "At 40 mph, it can take about 124 feet total stopping " +
      "distance. At 55 mph, it can take about 225 feet in total " +
      "stopping distance.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - Visibility and Reaction (page 58)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=70",
  },
  {
    key: "darkness-400-feet",
    quote:
      "Your headlights let you see about 400 feet ahead. You " +
      "should drive at a speed that allows you to stop within " +
      "this distance, which is around 50 mph.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - Darkness (page 58)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=70",
  },
  {
    key: "rain-fog-200-feet",
    quote:
      "If you cannot see more than 200 feet ahead because of rain " +
      "or fog, you should not drive faster than 30 mph.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - Rain, Fog, or Snow (page 58)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=70",
  },
  {
    key: "four-second-sight",
    quote:
      "To determine if you are driving too fast for the " +
      "conditions, use the \"Four Second Sight Distance Rule.\" " +
      "Pick out a stationary object as far ahead as you can " +
      "clearly see",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - Sight-Distance Rule (page 58)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=70",
  },
  {
    key: "too-fast-for-conditions",
    quote:
      "Even if you are driving the speed limit, you can get a " +
      "ticket for traveling too fast for the conditions.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - Speed Limits (page 58)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=70",
  },
  {
    key: "two-second-rule",
    quote:
      "Rear-end crashes are very common and caused by drivers " +
      "following too close. Use the \"two (2) second rule\" to " +
      "determine if you are following too close.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - Following Distance (page 59)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=71",
  },
  {
    key: "four-second-following",
    quote:
      "There are situations where you need more space in front of " +
      "your vehicle. You may need to use a four second rule to be " +
      "safe.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - Following Distance (page 59)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=71",
  },
  {
    key: "two-second-count",
    quote:
      "When the rear of the vehicle ahead passes stationary " +
      "point, count the seconds it takes you to reach the same " +
      "point.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - Following Distance (page 59)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=71",
  },
  {
    key: "follow-motorcycle-cushion",
    quote:
      "Allow an extra cushion of space when following a " +
      "motorcycle. Roads that are wet, icy or gravel and metal " +
      "surfaces such as bridges, gratings, and streetcar and " +
      "railroad tracks can increase the chance of falling.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - Following Motorcycles (page 59)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=71",
  },
  {
    key: "tailgated-response",
    quote:
      "move into the right lane, if possible. If there is no " +
      "right lane, wait until the path ahead is clear and reduce " +
      "speed. This will allow the tailgater to drive around you. " +
      "Never slow down too quickly to discourage a tailgater, it " +
      "will increase the risk of being hit from behind.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - The Safety Cushion, Traffic to the Rear (page 60)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=72",
  },
  {
    key: "split-difference",
    quote:
      "This is when you split the difference between two (2) " +
      "hazards. For example: steer the middle course between " +
      "oncoming and parked vehicles. If one appears more " +
      "dangerous than the other, leave more room on the side of " +
      "the vehicle that is more dangerous.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - The Safety Cushion, Traffic to the Side (page 60)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=72",
  },
  {
    key: "do-not-share-lane",
    quote:
      "Do not share a lane with a pedestrian or bicyclist; wait " +
      "until it is safe to pass in the adjoining lane.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - The Safety Cushion, Traffic to the Side (page 60)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=72",
  },
  {
    key: "merge-four-second-gap",
    quote:
      "When merging with other traffic, you need a gap of about " +
      "four (4) seconds. If you move in the middle of a four (4) " +
      "second gap, your vehicle, and the vehicle behind you will " +
      "have a following distance of two (2) seconds.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - The Safety Cushion, Merging (page 61)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=73",
  },
  {
    key: "merge-four-second-lane-change",
    quote:
      "When changing lanes, entering a roadway, or merging with " +
      "another travel lane, you should keep a four (4) second " +
      "gap.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - The Safety Cushion, Merging (page 61)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=73",
  },
  {
    key: "one-lane-at-a-time",
    quote:
      "If you are going to cross more than one (1) lane of " +
      "traffic, take one lane at a time.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - The Safety Cushion, Merging (page 61)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=73",
  },
  {
    key: "green-light-wait",
    quote:
      "Even with a green light, do not start across the " +
      "intersection until traffic is clear. You could get caught " +
      "in the intersection when the light changes to red and " +
      "block traffic. Drivers can be ticketed for blocking an " +
      "intersection.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - Intersecting Traffic (page 61)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=73",
  },
  {
    key: "turn-signal-not-a-promise",
    quote:
      "Do not turn because an approaching vehicle has a turn " +
      "signal on. The driver may intend on turning beyond the " +
      "street where you are sitting, or the driver may have " +
      "forgotten to turn the signal off from a prior turn.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - Intersecting Traffic (page 61)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=73",
  },
  {
    key: "pass-one-at-a-time",
    quote:
      "Do not count on having enough time to pass several cars at " +
      "once. Be safe. As a rule, only pass one vehicle at a time.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - Passing Distance (page 61)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=73",
  },
  {
    key: "pass-ten-second-gap",
    quote:
      "At a speed of 55 mph, you need about ten (10) seconds to " +
      "pass. This means you need a ten (10) second gap in " +
      "oncoming traffic and sight distance to pass.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - Oncoming Vehicles (page 62)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=74",
  },
  {
    key: "pass-1600-feet",
    quote:
      "At 55 mph you and your oncoming vehicle(s) will travel " +
      "over 800 feet in ten (10) seconds. This means a driver " +
      "will need over 1600 feet or 1/3 of a mile to safely pass.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - Oncoming Vehicles (page 62)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=74",
  },
  {
    key: "pass-third-mile-hill",
    quote:
      "Drivers should not pass if you are within, 1/3 of a mile " +
      "of a hill or curve.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - Hills and Curves (page 62)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=74",
  },
  {
    key: "pass-blocked-view",
    quote:
      "Anytime your view is blocked by a hill or a curve, you " +
      "should always assume an oncoming vehicle could be coming " +
      "toward you. Always expect an oncoming car and never pass " +
      "within a 1/3 mile of a curve or hill.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - Hills and Curves (page 62)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=74",
  },
  {
    key: "pass-not-at-intersections",
    quote:
      "It is dangerous to pass where a vehicle may enter or cross " +
      "the road. Such places include intersections, railroad " +
      "crossings, and shopping center entrances.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - Intersections (page 62)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=74",
  },
  {
    key: "return-both-headlights",
    quote:
      "At night, when you can see both headlights of the vehicle " +
      "you passed in your rear-view mirror, it is safe to return " +
      "to the driving lane.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5: See and Be Seen - Lane Obstructions (page 63)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=75",
  },
  {
    key: "left-lane-passing-only",
    quote:
      "Arkansas Code Annotated 27-51-301 states that a vehicle " +
      "shall not be driven upon the left lane of a multilane " +
      "highway, EXCEPT as follows: (1) When overtaking and " +
      "passing another vehicle proceeding in the same direction " +
      "under the rules governing that movement.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5 - Left Lane on a Multilane Highway for Passing Only (page 63)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=75",
  },
  {
    key: "left-lane-exceptions",
    quote:
      "When all other lanes for traveling in the same direction " +
      "are closed to traffic while under construction or repair. " +
      "(3) When all other lanes for traveling in the same " +
      "direction are in disrepair or are in an otherwise " +
      "undrivable or unsafe condition; or",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5 - Left Lane on a Multilane Highway for Passing Only (page 63)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=75",
  },
  {
    key: "left-lane-exit-left",
    quote:
      "When a vehicle is preparing to exit the multilane highway " +
      "on the left",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 5 - Left Lane on a Multilane Highway for Passing Only (page 63)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=75",
  },
  {
    key: "truck-stopping-335",
    quote:
      "A fully loaded tractor-trailer traveling at 55 miles per " +
      "hour may take more than 335 feet to come to a complete " +
      "stop. That is the length of a football field.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 6: Tractor-Trailer Rigs - Braking (page 64)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=76",
  },
  {
    key: "truck-right-turn",
    quote:
      "That's why the drivers of tractor-trailers must often " +
      "swing out to the left as the first step in making a right " +
      "turn.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 6: Tractor-Trailer Rigs - Turning (page 64)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=76",
  },
  {
    key: "truck-crash-cause",
    quote:
      "72 percent of fatal crashes involving two or more " +
      "vehicles, in which one of the vehicles is a " +
      "tractor-trailer, the cause is usually attributed to a car.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 6: Tractor-Trailer Rigs (page 64)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=76",
  },
  {
    key: "truck-no-zone",
    quote:
      "A car can disappear; up to 20 feet in front of the cab, on " +
      "either side of the tractor-trailer (particularly alongside " +
      "the cab), and up to 200 feet in the rear of the truck.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 6: Tractor-Trailer Rigs - Avoiding the Tractor-Trailer No Zone (page 65)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=77",
  },
  {
    key: "truck-mirror-rule",
    quote:
      "An excellent rule for motorists sharing the road with a " +
      "tractor-trailer is, \"if you can't see the truck driver in " +
      "the tractor side mirror, the driver can't see you.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 6: Tractor-Trailer Rigs - Maneuverability (page 66)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=78",
  },
  {
    key: "truck-pass-on-left",
    quote:
      "Don't linger alongside a truck when passing. Always pass a " +
      "tractor-trailer completely and on the left side.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 6: Tractor-Trailer Rigs - Maneuverability (page 66)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=78",
  },
  {
    key: "truck-cutting-off",
    quote:
      "Cutting into the open space in front of a truck removes " +
      "the truck driver's cushion of safety.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 6: Tractor-Trailer Rigs - Maneuverability (page 66)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=78",
  },
  {
    key: "bicycle-rights",
    quote:
      "Bicycles have the same rights and responsibilities on the " +
      "streets as other vehicles and must share lanes of traffic. " +
      "Bicycles are required to travel on the right-hand side of " +
      "the road with other traffic. Bicyclists are not allowed to " +
      "travel facing oncoming traffic.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 7: Sharing the Road with Bicycles and Motorcycles (page 67)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=79",
  },
  {
    key: "bicycle-collision-cause",
    quote:
      "The most common cause of a collision is a driver turning " +
      "left in front of an oncoming bicycle or turning right, " +
      "across the path of the bicycle.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 7 - Safety Tips for Motor Vehicle Drivers (page 67)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=79",
  },
  {
    key: "bicycle-never-pass-between",
    quote:
      "A driver should never attempt to pass between a bicyclist " +
      "and oncoming vehicles on a two-lane road.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 7 - Safety Tips for Motor Vehicle Drivers (page 67)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=79",
  },
  {
    key: "bicycle-tap-horn",
    quote:
      "If you are about to pass a bicycle on a narrow road and " +
      "you think the rider doesn't know you're coming, tap your " +
      "horn gently and briefly as a signal that you're going to " +
      "pass.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 7 - Safety Tips for Motor Vehicle Drivers (page 67)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=79",
  },
  {
    key: "bicycle-pennant-flag",
    quote:
      "If you see a bicyclist with a red or orange pennant flag " +
      "attached to the bike, slow down; this is a symbol to " +
      "indicate the rider has impaired hearing.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 7 - Residential Areas Are Danger Zones (page 68)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=80",
  },
  {
    key: "bicycle-lights",
    quote:
      "Bicyclists are required to have proper illumination, front " +
      "light, and rear reflector.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 7 - Residential Areas Are Danger Zones (page 68)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=80",
  },
  {
    key: "bicycle-full-lane-narrow",
    quote:
      "The lane is too narrow for both a car and a bicycle to " +
      "safely share the lane. In this case, it is safest to let " +
      "the bicycle take the full lane.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 7 - Lane Positions for Bicycles (page 68)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=80",
  },
  {
    key: "bicycle-lane-never-use",
    quote:
      "If the lane is marked and signed for bicycle use only, " +
      "drivers must NEVER use that lane as a turning lane, " +
      "passing lane or for parking.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 7 - Lane Positions for Bicycles (page 68)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=80",
  },
  {
    key: "motorcycle-left-turns",
    quote:
      "The most common crash between cars and motorcycles is at " +
      "an intersection when the driver of a car is making a left " +
      "turn in front of a motorcycle (Failure to Yield Right of " +
      "Way). Over 40% of all motorcycle crashes occur at " +
      "intersections.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 7 - Situations When Crashes Are Most Likely to Occur (page 69)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=81",
  },
  {
    key: "motorcycle-sixty-percent",
    quote:
      "Nearly 60% of those crashes were caused by the other " +
      "vehicles turning left in front of the motorcyclist.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 7 - Situations When Crashes Are Most Likely to Occur (page 69)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=81",
  },
  {
    key: "motorcycle-signal-cancel",
    quote:
      "Don't be fooled by a flashing turn signal. Motorcycle " +
      "signals don't automatically cancel, and riders forget to " +
      "turn them off.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 7 - Signal Your Intentions (page 70)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=82",
  },
  {
    key: "motorcycle-full-lane",
    quote:
      "Allow the motorcyclist a full lane width. Although it may " +
      "seem as though there is enough room in the traffic lane " +
      "for an automobile and a motorcycle, the motorcycle is " +
      "entitled to a full lane and may need room to maneuver " +
      "safely. Do not attempt to share the lane with a " +
      "motorcycle.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 7 - Respect a Motorcycle (page 70)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=82",
  },
  {
    key: "motorcycle-four-to-six",
    quote:
      "Allow more following distance, at least four (4) to six " +
      "(6) seconds, when following a motorcycle so the " +
      "motorcyclist has enough time to maneuver or stop in an " +
      "emergency.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 7 - Allow Plenty of Space When Following a Motorcycle (page 70)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=82",
  },
  {
    key: "motorcycle-stops-quicker",
    quote:
      "In dry conditions, motorcycles can stop more quickly than " +
      "a car.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 7 - Allow Plenty of Space When Following a Motorcycle (page 70)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=82",
  },
  {
    key: "vision-20-70",
    quote:
      "You must have at least twenty-seventy (20/70) vision in at " +
      "least one eye, with or without corrective lenses.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 8: Driving Fitness - Vision (page 71)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=83",
  },
  {
    key: "vision-b-restriction",
    quote:
      "you must drive with your eyewear. If stopped by law " +
      "enforcement, a driver can be ticketed for failing to wear " +
      "corrective lenses.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 8: Driving Fitness - Vision (page 71)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=83",
  },
  {
    key: "vision-no-dark-glasses",
    quote:
      "Avoid dark or tinted glasses/contact lenses at night, even " +
      "if it helps with glare. The problem is these types of " +
      "lenses cut down too much light and light is needed to see " +
      "the road ahead.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 8: Driving Fitness - Vision (page 71)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=83",
  },
  {
    key: "fitness-epilepsy",
    quote:
      "In Arkansas, you may drive with epilepsy, if you are under " +
      "the care of a doctor and seizure free for one year.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 8: Driving Fitness - Health, Epilepsy (page 72)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=84",
  },
  {
    key: "fitness-fatigue",
    quote:
      "Never drive if you are sleepy. It is better to stop and " +
      "sleep for a few hours than take a chance you can stay " +
      "awake.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 8: Driving Fitness - Fatigue (page 72)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=84",
  },
  {
    key: "fitness-emotions",
    quote:
      "If you are angry or excited, give yourself time to calm " +
      "down or cool off. Take a short walk but stay off the road " +
      "until you have calmed down.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 8: Driving Fitness - Emotional Distress (page 72)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=84",
  },
  {
    key: "alcohol-38-percent",
    quote:
      "Alcohol is involved in approximately thirty-eight (38) " +
      "percent of traffic crashes in which someone is killed.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 8: Driving Fitness - Drinking and Driving (page 73)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=85",
  },
  {
    key: "alcohol-no-safe-level",
    quote:
      "There is no safe alcohol concentration to operate a " +
      "vehicle.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 8: Driving Fitness - Drinking and Driving (page 73)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=85",
  },
  {
    key: "alcohol-never-drink-drive",
    quote:
      "Every driver is affected by alcohol; therefore, you should " +
      "never drink and drive.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 8: Driving Fitness - Drinking and Driving (page 73)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=85",
  },
  {
    key: "alcohol-judgment-first",
    quote:
      "Once in the brain, alcohol affects areas that control " +
      "judgment and skill. The first driving ability to be " +
      "affected by alcohol is judgment.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 8: Driving Fitness - Alcohol Impairment (page 73)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=85",
  },
  {
    key: "alcohol-15-40-minutes",
    quote:
      "Alcohol in the bloodstream reaches the brain in fifteen " +
      "(15) to forty (40) minutes.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 8: Driving Fitness - Alcohol Impairment (page 73)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=85",
  },
  {
    key: "alcohol-single-drink",
    quote:
      "A single drink is considered 1.5 ounces of (80) proof " +
      "liquor (one shot glass) straight or with a mixer; a " +
      "6-ounce glass of wine or a 12-ounce container of beer.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 8: Driving Fitness - Body Metabolism (page 74)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=86",
  },
  {
    key: "alcohol-one-per-hour",
    quote:
      "The body rids itself of alcohol at a rate of one (1) drink " +
      "per hour. There is no way to sober up quickly. Coffee, " +
      "fresh air, exercise or a cold shower will not help.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 8: Driving Fitness - Body Metabolism (page 74)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=86",
  },
  {
    key: "alcohol-only-time",
    quote: "The only thing that will sober you up is time.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 8: Driving Fitness - Body Metabolism (page 74)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=86",
  },
  {
    key: "alcohol-food",
    quote:
      "Remember: Food slows the rate at which alcohol enters the " +
      "blood; it will not prevent you from getting intoxicated.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 8: Driving Fitness - Body Metabolism (page 74)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=86",
  },
  {
    key: "dwi-008",
    quote:
      "You will be arrested for driving while intoxicated with an " +
      "alcohol concentration of 0.08% or more in the breath " +
      "(grams/210 liters) or blood (grams/100 milliliters, the " +
      "same as 0.08%).",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 8: Driving Fitness - Alcohol and the Law (page 74)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=86",
  },
  {
    key: "dwi-004-crash",
    quote:
      "In Arkansas, if involved in a traffic crash or involved in " +
      "a serious traffic offense, you can be charged with DWI " +
      "with a blood alcohol content between 0.08% and 0.04%.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 8: Driving Fitness - Alcohol and the Law (page 74)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=86",
  },
  {
    key: "implied-consent",
    quote:
      "If a law enforcement officer instructs you to take an " +
      "alcohol test you are compelled by law to do so. You can " +
      "lose your driver's license if you refuse to take an " +
      "alcohol test.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 8: Driving Fitness - Alcohol and the Law (page 74)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=86",
  },
  {
    key: "officer-chooses-test",
    quote:
      "The law enforcement officer chooses which test (breath, " +
      "urine, or saliva) to request.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 8: Driving Fitness - Alcohol and the Law (page 74)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=86",
  },
  {
    key: "dwi-first-conviction",
    quote:
      "If you are found guilty of an alcohol violation and it is " +
      "your first conviction, you will be fined from $150 to " +
      "$1000, in addition to court costs. You could also be " +
      "sentenced to one (1) year in jail, and your license could " +
      "be suspended for 120 days.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 8: Driving Fitness - Alcohol and the Law (page 74)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=86",
  },
  {
    key: "underage-002",
    quote:
      "You can be arrested for Underage Driving Under the " +
      "Influence if your alcohol concentration is 0.02%breath or " +
      "blood alcohol concentration.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 8: Driving Fitness - Alcohol and the Law (page 75)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=87",
  },
  {
    key: "underage-penalty",
    quote:
      "you could have your license revoked until you reach " +
      "twenty-one (21) years of age and could be fined $2000.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 8: Driving Fitness - Alcohol and the Law (page 75)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=87",
  },
  {
    key: "drugs-worse",
    quote:
      "There are many types of drugs, in addition to alcohol that " +
      "affects a person's driving ability. The effects of drugs " +
      "are worse than those caused by alcohol.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 8: Driving Fitness - Other Types of Drugs and Driving (page 75)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=87",
  },
  {
    key: "drugs-with-alcohol",
    quote:
      "Never drink alcohol while you are taking medications or " +
      "other drugs. These drugs may multiply the effects of " +
      "alcohol or have additional effects of their own.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 8: Driving Fitness - Other Types of Drugs and Driving (page 75)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=87",
  },
  {
    key: "organ-donor",
    quote:
      "The words \"Organ Donor\" will be printed on the front of " +
      "the Arkansas driver's license for those individuals who " +
      "choose to participate as registered organ donors.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 8 - Arkansas Organ & Tissue Donor Information (page 76)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=88",
  },
  {
    key: "brake-failure-pump",
    quote:
      "Pump the brake pedal several times. This will often build " +
      "up enough brake pressure to allow you to stop.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 9: Emergencies - Brake Failure (page 77)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=89",
  },
  {
    key: "brake-failure-parking-brake",
    quote:
      "If that does not work, use the parking brake. Pull on the " +
      "parking brake handle slowly or slowly press the emergency " +
      "brake pedal so you will not lock the rear wheels and cause " +
      "a skid.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 9: Emergencies - Brake Failure (page 77)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=89",
  },
  {
    key: "blowout",
    quote:
      "Hold the steering wheel tightly and keep the vehicle going " +
      "straight. Slow gradually. Take your foot off the gas pedal " +
      "and use the brakes lightly.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 9: Emergencies - Blowouts (page 77)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=89",
  },
  {
    key: "faulty-accelerator",
    quote:
      "Keep your eyes on the road. Quickly shift to neutral. Pull " +
      "off the road when safe to do so. Turn off the engine.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 9: Emergencies - Faulty Accelerator (page 77)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=89",
  },
  {
    key: "headlight-failure",
    quote:
      "If that does not work, put on the emergency flashers, turn " +
      "signals, or fog lights, if you have them. Pull off the " +
      "road as soon as possible.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 9: Emergencies - Headlight Failure (page 77)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=89",
  },
  {
    key: "collision-three-options",
    quote:
      "In avoiding a collision, drivers have three options: (1) " +
      "Stop, (2) Turn, and (3) Speed Up.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 9: Emergencies - Avoiding Collisions (page 78)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=90",
  },
  {
    key: "abs-braking",
    quote:
      "Press on the brake pedal as hard as you can and keep " +
      "pressing on it. You might feel the brake pedal pushing " +
      "back when the ABS is working. Do not let up on the brake " +
      "pedal. The ABS system will only work with the brake pedal " +
      "pushed down.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 9: Emergencies - Stopping (page 78)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=90",
  },
  {
    key: "no-abs-braking",
    quote:
      "Apply the brakes as hard as you can without locking the " +
      "brake. If the brakes lock up, you will feel the vehicle " +
      "start to skid. Quickly let up on the brake pedal.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 9: Emergencies - Stopping (page 78)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=90",
  },
  {
    key: "turn-faster-than-stop",
    quote:
      "In most cases, a driver can turn the vehicle quicker than " +
      "it can be stopped. You should consider turning to avoid a " +
      "collision.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 9: Emergencies - Turning (page 78)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=90",
  },
  {
    key: "ten-and-two",
    quote:
      "The best way to grip the steering wheel is to place your " +
      "hands at 10 o'clock and 2 o'clock positions.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 9: Emergencies - Turning (page 78)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=90",
  },
  {
    key: "run-off-road",
    quote:
      "Generally, it is better to run off the road than crash " +
      "head-on into another vehicle.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 9: Emergencies - Turning (page 78)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=90",
  },
  {
    key: "skid-stay-off-brake",
    quote:
      "Stay off the Brake - Your brakes will not work until the " +
      "vehicle slows down. Your vehicle could skid more if you " +
      "hit your brakes.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 9: Emergencies - Skids (page 79)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=91",
  },
  {
    key: "skid-steer",
    quote:
      "Steer - Turn the steering wheel in the direction you want " +
      "the vehicle to go. As soon as the vehicle begins to " +
      "straighten out, turn the steering wheel back the other " +
      "way.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 9: Emergencies - Skids (page 79)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=91",
  },
  {
    key: "skid-cause",
    quote:
      "The vast majority of skids are caused by drivers traveling " +
      "too fast for the conditions.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 9: Emergencies - Skids (page 79)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=91",
  },
  {
    key: "crash-do-not-stop",
    quote:
      "Do not stop at a crash unless you are involved, or " +
      "emergency help has not arrived. Focus on your driving and " +
      "keep moving, watch for people in or near the road.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 9: Emergencies - Traffic Crashes (page 80)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=92",
  },
  {
    key: "crash-must-stop",
    quote:
      "If you are involved in a crash, you must stop. Arkansas " +
      "Law requires that if you are involved in a traffic crash " +
      "you should, move the vehicle from the roadway; so, it " +
      "doesn't block traffic.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 9: Emergencies - Traffic Crashes (page 80)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=92",
  },
  {
    key: "crash-parked-vehicle",
    quote:
      "In case you are involved in a crash with a parked vehicle, " +
      "you must try to locate the owner.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 9: Emergencies - Traffic Crashes (page 80)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=92",
  },
  {
    key: "crash-notify-police",
    quote:
      "Any person injured, killed, or has property damage " +
      "exceeding $1000; a driver must notify the police " +
      "immediately.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 9: Emergencies - Traffic Crashes (page 80)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=92",
  },
  {
    key: "crash-report-3000",
    quote:
      "You must report the accident to the Office of Driver " +
      "Services division of the Department of Finance and " +
      "Administration if there is an injury, a death, or property " +
      "damage of more than $3000 to one person's property.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 9: Emergencies - Keep a Record of Crash Information (page 81)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=93",
  },
  {
    key: "crash-report-30-days",
    quote:
      "You must file the report within thirty (30) days of the " +
      "accident.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 9: Emergencies - Keep a Record of Crash Information (page 81)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=93",
  },
  {
    key: "crash-do-not-move-injured",
    quote:
      "Do not move the injured unless they are trapped inside a " +
      "burning vehicle or another immediate form of danger.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 9: Emergencies - Assisting the Injured (page 81)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=93",
  },
  {
    key: "crash-nothing-to-drink",
    quote:
      "Do not give the injured anything to drink, even water, " +
      "until medical personnel is on the scene.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 9: Emergencies - Assisting the Injured (page 81)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=93",
  },
  {
    key: "crash-direct-pressure",
    quote:
      "If there is bleeding, supply direct pressure to the wound. " +
      "Even severe bleeding can almost always be stopped or " +
      "slowed by using direct pressure on a wound.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 9: Emergencies - Assisting the Injured (page 81)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=93",
  },
  {
    key: "airbag-10-inches",
    quote:
      "Since the risk zone for driver airbags is the first 2-3 " +
      "inches of inflation, placing yourself 10 inches from your " +
      "driver airbag provides you with a clear margin of safety.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 10: Skills Test Guidelines - Vehicle Seats (page 82)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=94",
  },
  {
    key: "inside-mirror",
    quote:
      "Adjust the inside mirror so you can see the entire rear " +
      "window from the driver's seat. You should have to move " +
      "only your eyes, not your head when using this mirror.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 10: Skills Test Guidelines - Vehicle Mirrors (page 82)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=94",
  },
  {
    key: "wiper-blades",
    quote:
      "Wiper blades should be replaced every six (6) months to a " +
      "year or as soon as you notice a difference in driving " +
      "visibility.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 10: Skills Test Guidelines - Windshield and Wipers (page 83)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=95",
  },
  {
    key: "windshield-crack",
    quote:
      "More than one crack or other visual impairment is present " +
      "in an eight (8) inch-wide area running horizontally " +
      "through the center of the windshield that falls under the " +
      "wiper area on the driver's side.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 10: Skills Test Guidelines - Windshield and Wipers (page 83)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=95",
  },
  {
    key: "tire-tread-1-16",
    quote:
      "In general, tires are not safe and should be replaced when " +
      "the tread is worn down to 1/16 of an inch.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 10: Skills Test Guidelines - Tires (page 84)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=96",
  },
  {
    key: "penny-test",
    quote:
      "A method for checking tread depth is to place a penny in " +
      "the tread with Lincoln's head upside down and facing you. " +
      "If you can see the top of Lincoln's head, you are ready " +
      "for new tires.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 10: Skills Test Guidelines - Tires (page 84)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=96",
  },
  {
    key: "cold-tire",
    quote:
      "The term cold does not relate to the outside temperature. " +
      "Rather, a cold tire is one that has not been driven on for " +
      "at least three hours.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 10: Skills Test Guidelines - Tires (page 84)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=96",
  },
  {
    key: "exhaust-fumes",
    quote:
      "Fumes from a leaky exhaust can cause death in a very short " +
      "time.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 10: Skills Test Guidelines - Exhaust System (page 84)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=96",
  },
  {
    key: "skills-own-vehicle",
    quote:
      "The final stage of obtaining a driver's license in " +
      "Arkansas is to successfully complete a skills test. You " +
      "will provide your own vehicle for this test.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 10: Skills Test Guidelines (page 84)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=96",
  },
  {
    key: "skills-bring",
    quote:
      "When you appear for testing, please bring your instruction " +
      "permit, a valid licensed driver (not suspended or revoked) " +
      "who is age 21 or older, current insurance (paper or " +
      "electronic), and vehicle registration.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 10: Skills Test Guidelines - Preparing for the Skills Exam (page 85)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=97",
  },
  {
    key: "skills-three-controls",
    quote:
      "You are allowed three (3) missed controls before the test " +
      "is failed.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 10: Skills Test Guidelines - Performance Guidelines (page 85)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=97",
  },
  {
    key: "skills-two-in-category",
    quote:
      "A total of two missed attempts in the same category will " +
      "constitute a failed exam. For example: The examiner will " +
      "warn you on the first rolling stop. If you make another " +
      "rolling stop, you will receive a two-week penalty.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 10: Skills Test Guidelines - Road Test (page 85)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=97",
  },
  {
    key: "skills-automatic-failure",
    quote: "Automatic failures are imposed a 30-day penalty.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 10: Skills Test Guidelines - Road Test (page 85)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=97",
  },
  {
    key: "skills-no-donut",
    quote:
      "The tires are worn so badly as to be unsafe. No donut " +
      "spares are allowed on the vehicle.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 10: Skills Test Guidelines - Vehicle Inspection (page 85)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=97",
  },
  {
    key: "skills-no-test-if",
    quote:
      "A skills test will not be given if: The vehicle interior " +
      "is excessively dirty. All lights do not work. The " +
      "windshield should be clean and free from any crack that " +
      "obstructs the view. The windshield should be clean The " +
      "muffler and exhaust system are not operating properly. The " +
      "horn does not work.",
    source: "Arkansas Driver License Study Guide (Arkansas State Police, Volume 1 - Edition 10, July 2026)",
    section: "Chapter 10: Skills Test Guidelines - Vehicle Inspection (page 85)",
    url: "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf#page=97",
  },
];
