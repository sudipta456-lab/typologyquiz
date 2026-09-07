import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts behind the New Hampshire bank. Every quote below was
// lifted MECHANICALLY as a contiguous substring of the fetched source
// (tmp/nh_build_excerpts.py) between a start phrase and an end phrase, rather
// than retyped. Nothing here is a paraphrase that drifted, and nothing was
// repaired by hand.
//
// Three official sources sit behind them:
//
//  - The New Hampshire Driver's Manual, published by the NH Department of
//    Safety, Division of Motor Vehicles. Its only edition label is the
//    "DSMV 360: Drivers Manual (Rev. 11/25)" printed on the inside back cover,
//    page 46 of the PDF. The file is nhdm.pdf, served from dmv.nh.gov.
//  - Title XXI of the New Hampshire Revised Statutes Annotated, on the General
//    Court's own server. The manual summarizes; the RSAs supply the numbers a
//    40-question exam still asks about and the book leaves out - the 55 mph
//    default in "other locations" and the separate 45 on an unimproved rural
//    highway (265:60), the 500-foot U-turn sight line (265:43), the $100
//    following-too-closely fine (265:25), the $75/$250 Move Over fine
//    (265:37-a), the $150 school-bus fine and the $500 for passing one on the
//    right (265:54), the 200-foot return after passing (265:20), the
//    $100/$250/$500 phone fines (265:79-c), the rear-facing seat under 2
//    (265:107-a), and the rule for a dead traffic signal (265:9, V).
//  - Six dmv.nh.gov pages, for what the book does not state at all: the
//    knowledge test's 80 percent pass mark and its retest rule, the practice
//    -driving conditions, the Youth Operator restrictions as the DMV words
//    them, the driver education hours, and the fees.
//
// FETCH METHOD. dmv.nh.gov sits behind an Akamai edge that returns 403 Access
// Denied to every automated client tried - curl, WebFetch, and a real headless
// Chromium with a normal user agent, on both the PDF and the HTML pages. The
// manual PDF and the six web pages were therefore read through the Internet
// Archive's capture of the SAME official URL (the manual from the 2026-09-02
// snapshot; the web pages from snapshots dated in each entry's research-note
// row). The urls below are the live official ones, which is where a learner
// should go.
//
// PAGE NUMBERS. The manual prints its own page number in the header of every
// page and numbers straight through 1 to 45. Printed page N is PDF page N + 6,
// and the "#page=" anchor in each url is the PDF page, so a viewer that
// honors the anchor lands on the printed page named in the section label.
//
// EXTRACTION was checked before any of this was written. The PDF carries a
// clean character map: the only non-ASCII characters in its 52 pages are
// bullets, curly quotes, en and em dashes, and the fractions 1/2 and 3/4 -
// zero tokens have the shape of a broken ligature (a digit wedged inside a
// word), so nothing here had to be routed around a corrupt font the way
// Nebraska's and West Virginia's did.
//
// Only the normalizations the sibling banks use were applied, and only to the
// extracted text: curly quotes and dashes fold to ASCII, the section symbol is
// spelled out, bullet glyphs become spaces so a stem and its list run together
// in the printed order, and runs of whitespace collapse to single spaces. No
// word is changed, dropped or reordered, and the sources' own slips are kept -
// among them the manual's "out-ofstate", "Right-ofway", "Onethousand-one",
// "onethousand-three", "sideswept crash", "25-feet", "45-days", "for a third
// of subsequent offense" and "an in increased fine". The manual also spells
// traveling both ways on facing pages, and both spellings survive here
// exactly as printed.

export const newhampshireExcerpts: HandbookExcerpt[] = [
  {
    key: "manual-purpose",
    quote:
      "This Manual is intended to assist a person who is learning how to drive. Each " +
      "section should be studied and applied in conjunction with training and practice " +
      "out on the road with a driver education instructor or a licensed, responsible " +
      "adult age 25 years or older.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 1 - Driving in New Hampshire, About This Manual (page 1)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=7",
  },
  {
    key: "rsa-reference",
    quote:
      "Refer to the Revised Statutes Annotated (RSAs) sections 259 through 269 under " +
      "Title 21 (Motor Vehicles).",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 1 - Driving in New Hampshire, New Hampshire Laws (page 1)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=7",
  },
  {
    key: "driver-ed-required",
    quote:
      "State of New Hampshire law RSA 263:19 requires that all individuals 16 or 17 years " +
      "of age wishing to apply for a driver's license, to have first completed an " +
      "approved driver education program.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 1 - Driving in New Hampshire, Licensing Requirements (page 1)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=7",
  },
  {
    key: "driver-ed-hours",
    quote:
      "Requirements of Driver Education: 30 hours of classroom instruction with a " +
      "certified driver education instructor. 10 hours of practice driving with a " +
      "certified driver education instructor. 6 hours of driving observation with a " +
      "certified driver education instructor.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 1 - Driving in New Hampshire, Licensing Requirements (page 1)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=7",
  },
  {
    key: "new-residents-60",
    quote:
      "New residents to New Hampshire have up to 60 days to obtain a driver's license " +
      "after moving into the State.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 1 - Driving in New Hampshire, New Residents to NH (page 1)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=7",
  },
  {
    key: "one-license",
    quote:
      "State of New Hampshire law, RSA 263:4 requires that new residents to NH surrender " +
      "all valid driver licenses issued by any other jurisdiction when applying for a New " +
      "Hampshire driver's license.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 1 - Driving in New Hampshire, New Residents to NH (page 1)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=7",
  },
  {
    key: "suspended-elsewhere",
    quote:
      "An application for driver's license will not be accepted if the driver's " +
      "privileges are under suspension or revocation in any other state until the " +
      "driver's privileges are reinstated.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 1 - Driving in New Hampshire, New Residents to NH (page 1)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=7",
  },
  {
    key: "nonresident-driving",
    quote:
      "Non-resident drivers must have a valid out-ofstate driver's license while " +
      "travelling in New Hampshire, or must be at least 15 ½ years old and accompanied by " +
      "a licensed, responsible adult age 25 or older.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 1 - Driving in New Hampshire, Out-of-State Drivers Driving in NH (page 2)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=8",
  },
  {
    key: "suspended-anywhere",
    quote:
      "Under no circumstances may a person drive in New Hampshire if their driving " +
      "privileges are suspended or revoked even if they possess a license from another " +
      "state.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 1 - Driving in New Hampshire, Out-of-State Drivers Driving in NH (page 2)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=8",
  },
  {
    key: "no-permits",
    quote:
      "New Hampshire does not issue permits to learn to drive; however, New Hampshire law " +
      "allows a person at least 15 ½ years of age, who does not possess a driver's " +
      "license, to drive a motor vehicle while being taught to drive,",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 1 - Driving in New Hampshire, Practice Driving (page 2)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=8",
  },
  {
    key: "practice-not-suspended",
    quote:
      "This exception does not apply to persons whose driving privileges have been " +
      "suspended or revoked in this or any other state.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 1 - Driving in New Hampshire, Practice Driving (page 2)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=8",
  },
  {
    key: "three-tests",
    quote:
      "In order to obtain an operator, non-commercial, driver's license, an applicant is " +
      "required to successfully pass all three of the following tests:",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 1 - Driving in New Hampshire, Required Driver's License Tests (page 2)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=8",
  },
  {
    key: "vision-2040",
    quote:
      "Applicants must have a visual acuity of 20/40 vision in both eyes. If an applicant " +
      "has sight in only one eye, they must have a visual acuity of 20/30.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 1 - Driving in New Hampshire, Required Driver's License Tests (page 2)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=8",
  },
  {
    key: "vision-b-restriction",
    quote:
      "If the applicant is required to wear glasses or contact lenses to pass the vision " +
      "test, then glasses or contacts must be worn while driving, and the \"B\" restriction " +
      "for corrective lenses will be placed on the applicant's license.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 1 - Driving in New Hampshire, Required Driver's License Tests (page 2)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=8",
  },
  {
    key: "vision-fail",
    quote:
      "If the vision test is not passed, an eye examination containing a doctor's " +
      "recommendation of visual capability will be required before additional driver's " +
      "license testing can be completed.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 1 - Driving in New Hampshire, Required Driver's License Tests (page 2)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=8",
  },
  {
    key: "test-40-questions",
    quote:
      "The knowledge test consists of 40 multiple choice questions pertaining to the " +
      "rules of the road and general driving conditions. Testers have 40 minutes to " +
      "complete the test.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 1 - Driving in New Hampshire, Required Driver's License Tests (page 2)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=8",
  },
  {
    key: "test-touch-screen",
    quote:
      "The test is administered on a touch screen monitor, which does not require " +
      "computer experience to answer the questions. Each question is displayed with four " +
      "possible answers, and the answer is chosen by touching the corresponding letter on " +
      "the screen.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 1 - Driving in New Hampshire, Required Driver's License Tests (page 2)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=8",
  },
  {
    key: "test-8-wrong",
    quote:
      "If more than 8 questions are answered incorrectly, the test will automatically " +
      "end.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 1 - Driving in New Hampshire, Required Driver's License Tests (page 2)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=8",
  },
  {
    key: "test-languages",
    quote:
      "Automated testing is also available in the following languages in both written and " +
      "audible formats: English American Sign Language (ASL) French Spanish Portuguese " +
      "Arabic Farsi Mandarin Chinese",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 1 - Driving in New Hampshire, Required Driver's License Tests (page 2)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=8",
  },
  {
    key: "road-test-no-coaching",
    quote:
      "While the Licensing Examiner will give clear and concise instructions, the " +
      "Examiner cannot coach the driver during this test.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 1 - Driving in New Hampshire, Required Driver's License Tests (page 2)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=8",
  },
  {
    key: "road-test-graded",
    quote:
      "During the road test applicants will be graded on their skill in handling the " +
      "vehicle in traffic, driving habits, working knowledge and understanding of traffic " +
      "signs and rules of the road. The average test will take approximately 20 minutes.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 1 - Driving in New Hampshire, Required Driver's License Tests (page 2)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=8",
  },
  {
    key: "road-test-alone",
    quote:
      "No person except the applicant and the authorized Division of Motor Vehicles " +
      "Licensing Examiner may be present in the vehicle during the road test.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 1 - Driving in New Hampshire, Required Driver's License Tests (page 3)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=9",
  },
  {
    key: "temporary-license",
    quote:
      "Applicants will be issued a 60-day paper temporary driver's license. The permanent " +
      "license will be mailed within 45-days.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 1 - Driving in New Hampshire, Pass/Fail of Tests (page 3)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=9",
  },
  {
    key: "retest-ten-days",
    quote:
      "If either the knowledge test or road test is not successfully completed, the " +
      "applicant will be provided with an appointment to retest not sooner than ten days " +
      "from the failed test.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 1 - Driving in New Hampshire, Pass/Fail of Tests (page 3)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=9",
  },
  {
    key: "bring-vehicle",
    quote:
      "A vehicle that is legally registered, inspected and in safe running condition. The " +
      "vehicle must be the proper class for the type of license being tested for.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 1 - Driving in New Hampshire, What To Bring To The Tests (page 3)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=9",
  },
  {
    key: "bring-driver",
    quote:
      "A licensed driver to drive the test vehicle to and from the testing site. That " +
      "person is required to remain at the test site until the road test has been " +
      "completed.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 1 - Driving in New Hampshire, What To Bring To The Tests (page 3)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=9",
  },
  {
    key: "parental-consent",
    quote:
      "New Hampshire law states that no person under the age of 18 years shall be issued " +
      "a driver's license unless the person's father, mother, or guardian, or, in the " +
      "event there is no parent or guardian, another responsible adult, gives written " +
      "permission for the issuance of such license,",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 1 - Driving in New Hampshire, Parental Consent (page 3)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=9",
  },
  {
    key: "organ-donation",
    quote:
      "Every time a person applies for a driver's license or non-driver identification " +
      "card, they are given the opportunity to designate consent to be an organ and " +
      "tissue donor.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 1 - Driving in New Hampshire, Organ Donation Giving the Gift of Life (page " +
      "3)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=9",
  },
  {
    key: "class-d",
    quote:
      "Allows a driver to drive a vehicle with a gross vehicle weight of 26,000 pounds or " +
      "less if not towing a trailer of over 10,000 pounds, transport hazardous materials, " +
      "or is designed to seat more than 16 or more persons, including the driver.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 2 - Driver's License and Non-Driver ID Information, Types of Driver " +
      "Licenses (page 4)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=10",
  },
  {
    key: "class-motorcycle",
    quote:
      "Allows the driver to operate motorcycles, 3-wheeled motorcycles, motor driven " +
      "cycles and mopeds.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 2 - Driver's License and Non-Driver ID Information, Types of Driver " +
      "Licenses (page 4)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=10",
  },
  {
    key: "motor-driven-cycle",
    quote:
      "Allows the operator to operate a bicycle with a motor attached which has no more " +
      "than 5 brake horsepower.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 2 - Driver's License and Non-Driver ID Information, Types of Driver " +
      "Licenses (page 4)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=10",
  },
  {
    key: "moped-license",
    quote:
      "Drivers do not need a moped license if they already possess a Class A, B, C, D or " +
      "motorcycle license.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 2 - Driver's License and Non-Driver ID Information, Types of Driver " +
      "Licenses (page 4)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=10",
  },
  {
    key: "youth-operator-license",
    quote:
      "Any person 16 years of age or older and under the age of 21 will be issued a Youth " +
      "Operator license. Youth Operator's licenses are printed vertically, and they " +
      "expire on the holder's 21st birthday.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 2 - Driver's License and Non-Driver ID Information, Types of Driver " +
      "Licenses (page 4)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=10",
  },
  {
    key: "restriction-codes",
    quote:
      "B Corrective Lenses C Mechanical Aid D Prosthetic Aid E Automatic Transmission F " +
      "Outside Mirror G Daylight Only IID Ignition Interlock Device RTW Restricted to " +
      "3-Wheel Motorcycle",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 2 - Driver's License and Non-Driver ID Information, License Restrictions " +
      "(page 4)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=10",
  },
  {
    key: "youth-curfew",
    quote:
      "the holder of a Youth Operator License, who is under the age of 18 years of age " +
      "shall NOT operate a motor vehicle: Between the hours of 1:00 am and 4:00 am;",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 2 - Driver's License and Non-Driver ID Information, Specific Restrictions " +
      "for Youth Operators (page 4)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=10",
  },
  {
    key: "under-18-phone",
    quote:
      "Drivers under the age of 18 years of age shall not use a cellular or mobile " +
      "telephone or other mobile electronic device, whether hands-free or not, while " +
      "driving a motor vehicle or temporarily stopped in traffic upon any way, except to " +
      "report an emergency to the enhanced 911 system",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 2 - Driver's License and Non-Driver ID Information, Specific Restrictions " +
      "for Youth Operators (page 4)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=10",
  },
  {
    key: "non-driver-id",
    quote:
      "Non-Driver Identification Cards may be issued to New Hampshire residents who do " +
      "not hold a valid driver's license, and who are at least 12 years of age.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 2 - Driver's License and Non-Driver ID Information, Non-Driver " +
      "Identification Cards (page 5)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=11",
  },
  {
    key: "out-of-state-vision-only",
    quote:
      "Only a vision test is required for drivers new to New Hampshire holding a valid " +
      "out-of-state driver's license.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 2 - Driver's License and Non-Driver ID Information, Out of State Driver's " +
      "License (page 5)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=11",
  },
  {
    key: "out-of-state-expired",
    quote:
      "If the out-of-state driver's license has been expired for more than one year, the " +
      "applicant will be required to successfully pass the vision, knowledge and road " +
      "tests.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 2 - Driver's License and Non-Driver ID Information, Out of State Driver's " +
      "License (page 5)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=11",
  },
  {
    key: "license-expiry-5",
    quote:
      "NH Driver's licenses expire on the applicant's birthday every 5 years. A reminder " +
      "will be mailed to the applicant's last known mailing address",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 2 - Driver's License and Non-Driver ID Information, Driver's License " +
      "Renewal (page 5)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=11",
  },
  {
    key: "youth-under-20-law",
    quote:
      "Pursuant to RSA 263:14 Original and Youth Operators Licenses, the Director of " +
      "Motor Vehicles is authorized to revoke or suspend any original license held by a " +
      "person under 20 years of age after a hearing:",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 2 - Driver's License and Non-Driver ID Information, Youth Operator \"Under " +
      "20\" Law (page 5)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=11",
  },
  {
    key: "youth-suspension-ladder",
    quote:
      "A minimum of 20 days, but not more than 40 days for a first offense o A minimum of " +
      "45 days, but not more than 90 days for a second offense o A minimum of 90 days but " +
      "not more than 180 days for a third or subsequent offense.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 2 - Driver's License and Non-Driver ID Information, Youth Operator \"Under " +
      "20\" Law (page 6)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=12",
  },
  {
    key: "youth-attitude-program",
    quote:
      "In addition, for a third of subsequent offense, a condition of license " +
      "reinstatement will also be to complete an approved in-person driver attitude " +
      "program.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 2 - Driver's License and Non-Driver ID Information, Youth Operator \"Under " +
      "20\" Law (page 6)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=12",
  },
  {
    key: "youth-extra-penalties",
    quote:
      "A holder of a youth operator license who is convicted of a driving under the " +
      "influence of drugs or alcohol, reckless operation or speeding more than 30 mph " +
      "over the posted speed limit will face additional penalties.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 2 - Driver's License and Non-Driver ID Information, Youth Operator \"Under " +
      "20\" Law (page 6)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=12",
  },
  {
    key: "bac-limits",
    quote:
      "It is considered legally intoxicated if a driver's blood alcohol concentration is " +
      ".08% or higher, .02% or higher if the driver is under 21 years old.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 2 - Driver's License and Non-Driver ID Information, Loss of Driving " +
      "Privileges (page 6)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=12",
  },
  {
    key: "implied-consent",
    quote:
      "Any person who operates a motor vehicle in New Hampshire is considered to have " +
      "given consent to having their blood, breath, urine, or any combination tested if " +
      "arrested for an alcohol or drug offense. Refusal to allow testing may result in " +
      "loss of driving privileges.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 2 - Driver's License and Non-Driver ID Information, Loss of Driving " +
      "Privileges (page 6)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=12",
  },
  {
    key: "demerit-points",
    quote:
      "Points are accrued for violations such as speeding, failure to obey traffic " +
      "lights, driving while intoxicated, improper passing and failure to obey a stop " +
      "sign.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 2 - Driver's License and Non-Driver ID Information, Loss of Driving " +
      "Privileges (page 6)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=12",
  },
  {
    key: "out-of-state-violations",
    quote:
      "Keep in mind that traffic violations occurring outof-state may be reported to New " +
      "Hampshire and may affect a driver's driving record and driving privileges.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 2 - Driver's License and Non-Driver ID Information, Loss of Driving " +
      "Privileges (page 6)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=12",
  },
  {
    key: "habitual-offender",
    quote:
      "If after the hearing they are deemed to be a Habitual Offender, the Director shall " +
      "revoke the person's driving privileges for 1 to 4 years.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 2 - Driver's License and Non-Driver ID Information, Habitual Offenders " +
      "(page 6)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=12",
  },
  {
    key: "habitual-offender-jail",
    quote:
      "If a driver is convicted of driving after being declared a Habitual Offender, that " +
      "person may be subject to imprisonment for not less than one year, and up to five " +
      "(5) years.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 2 - Driver's License and Non-Driver ID Information, Habitual Offenders " +
      "(page 6)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=12",
  },
  {
    key: "vision-lenses",
    quote:
      "If a driver is required to wear corrective lenses, the driver should: Always wear " +
      "them when driving. Avoid using dark or tinted corrective lenses at night.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 3 - Dangerous Driving, Vision (page 7)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=13",
  },
  {
    key: "fatigue-definition",
    quote:
      "Fatigue is extreme tiredness, typically resulting from mental or physical exertion " +
      "or illness, repetitive tasks, or lack of sleep. Fatigue can affect a driver's " +
      "vision and increase the time to make decisions.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 3 - Dangerous Driving, Fatigue (page 7)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=13",
  },
  {
    key: "fatigue-18-hours",
    quote:
      "For example, a driver who is up for a continuous 18 hours will typically exhibit " +
      "performance levels similar to that of a person with a Blood Alcohol Concentration " +
      "(BAC) level of 0.05%. After 21 and 24 hours without sleep, performance mimics a " +
      "BAC of 0.08% and 0.10%, respectively.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 3 - Dangerous Driving, Fatigue (page 7)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=13",
  },
  {
    key: "fatigue-sleep",
    quote:
      "Get adequate sleep - the average person needs 7 to 9 hours of sleep to maintain " +
      "proper alertness during the day.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 3 - Dangerous Driving, Ways to Avoid Fatigue (page 7)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=13",
  },
  {
    key: "fatigue-stop-2-hours",
    quote:
      "During long trips, plan to stop at least every 2 hours to stretch or get a cup of " +
      "coffee or soft drink.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 3 - Dangerous Driving, Ways to Avoid Fatigue (page 7)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=13",
  },
  {
    key: "fatigue-nap",
    quote:
      "Before getting too tired, stop driving, pull off at the next exit or rest area to " +
      "take a 15 to 20 minute nap or find a place to sleep for the night.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 3 - Dangerous Driving, Ways to Avoid Fatigue (page 7)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=13",
  },
  {
    key: "distraction-definition",
    quote:
      "A distraction is anything that takes a driver's attention away from driving. " +
      "Distracted driving is dangerous, and the risk of an accident, injury, death or " +
      "property damage is increased if a driver takes their eyes off the road, or their " +
      "hands off the steering wheel.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 3 - Dangerous Driving, Driver Distractions (page 7)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=13",
  },
  {
    key: "distraction-mental",
    quote:
      "Mental activities that take the operator's mind away from driving are just as " +
      "dangerous.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 3 - Dangerous Driving, Driver Distractions (page 7)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=13",
  },
  {
    key: "phone-ban",
    quote:
      "Pursuant to NH law RSA 265:79-c, no person, while driving a moving motor vehicle " +
      "upon a way or temporarily halted in traffic for a traffic control device, or other " +
      "momentary delay, shall use any hand-held mobile electronic device capable of " +
      "providing voice or data communication,",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 3 - Dangerous Driving, Use of electronic devises while driving (page 7)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=13",
  },
  {
    key: "hands-free-over-18",
    quote:
      "Only drivers over the age of 18 years of age may: Use one hand to transmit or " +
      "receive messages on any non-cellular 2-way radio.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 3 - Dangerous Driving, Use of electronic devises while driving (page 8)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=14",
  },
  {
    key: "hands-free-bluetooth",
    quote:
      "Use a Bluetooth enabled or other hands-free electronic device, or similar device " +
      "that is physically or electronically integrated into a motor vehicle, for such a " +
      "purpose to send or receive information provided the driver does not have to divert " +
      "their attention from the road ahead.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 3 - Dangerous Driving, Use of electronic devises while driving (page 8)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=14",
  },
  {
    key: "aggressive-driving",
    quote:
      "Aggressive driving occurs when an individual intentionally commits an action which " +
      "endangers other persons or property.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 3 - Dangerous Driving, Aggressive Driving (page 8)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=14",
  },
  {
    key: "aggressive-behaviors",
    quote:
      "Some behaviors typically associated with aggressive driving include: speeding, " +
      "following too closely, unsafe lane changes, improperly signaling, and failing to " +
      "obey traffic control devices (stop signs, yield signs, traffic signals, railroad " +
      "grade cross signals, etc.).",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 3 - Dangerous Driving, Aggressive Driving (page 8)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=14",
  },
  {
    key: "alcohol-40-percent",
    quote:
      "Alcohol and other impairing drugs are involved in approximately 40% of all traffic " +
      "crashes in which someone is killed each year. A Blood Alcohol Concentration (BAC) " +
      "level as low as .02% can affect a driver's ability to drive.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 3 - Dangerous Driving, Alcohol, Other Drugs and Driving (page 8)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=14",
  },
  {
    key: "under-21-zero",
    quote:
      "It is illegal for an operator under 21 years of age to have physical control of a " +
      "vehicle while under the influence of intoxicating liquor or controlled drugs, " +
      "prescription drugs, over-the-counter drugs or any other chemical substances,",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 3 - Dangerous Driving, Operators under 21 years of age (page 8)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=14",
  },
  {
    key: "under-21-transport",
    quote:
      "Further, no driver under the age of 21 shall, except when accompanied by a parent, " +
      "legal guardian or legal age spouse transport any liquor or alcoholic beverage in " +
      "any part of a vehicle.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 3 - Dangerous Driving, Operators under 21 years of age (page 8)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=14",
  },
  {
    key: "alcohol-three-effects",
    quote:
      "Alcohol and other impairing drugs reduce a driver's judgment, vision, and reaction " +
      "time.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 3 - Dangerous Driving, Effects of Alcohol and Other Impairing Drugs (page " +
      "8)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=14",
  },
  {
    key: "alcohol-vision",
    quote:
      "Vision - Blurs vision, slows the driver's ability to focus, causes double vision, " +
      "and reduces the ability to judge distance, speed and the movement of other " +
      "vehicles. Vision is impacted at .02 BAC for all drivers.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 3 - Dangerous Driving, Effects of Alcohol and Other Impairing Drugs (page " +
      "9)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=15",
  },
  {
    key: "alcohol-time-only",
    quote:
      "After drinking there is nothing that will reduce the effects of alcohol except " +
      "TIME. Coffee, food, fresh air, exercise, or cold showers might make a person more " +
      "alert, but will not counter the effects of alcohol.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 3 - Dangerous Driving, Effects of Alcohol and Other Impairing Drugs (page " +
      "9)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=15",
  },
  {
    key: "alcohol-one-hour",
    quote: "Each ounce of alcohol consumed takes about an hour to go through the body.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 3 - Dangerous Driving, Effects of Alcohol and Other Impairing Drugs (page " +
      "9)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=15",
  },
  {
    key: "dui-first-offense",
    quote:
      "Any person who is convicted of a first offense of Driving or Operating Under " +
      "Influence of Drugs or Liquor or Driving or Operating with Excess Alcohol " +
      "Concentration shall be guilty of a Class B misdemeanor, fined not less than $500, " +
      "may face a loss of driving privileges for a period of 9 months to 2 years,",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 3 - Dangerous Driving, Impaired Driving and the Law (page 9)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=15",
  },
  {
    key: "dui-subsequent",
    quote:
      "Second and subsequent convictions subject the offender to higher fines, longer " +
      "suspension times, and stronger penalties.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 3 - Dangerous Driving, Impaired Driving and the Law (page 9)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=15",
  },
  {
    key: "otc-drugs",
    quote:
      "Over-the-counter drugs taken for headaches, colds, hay fever or other allergies or " +
      "those to calm nerves can make a driver drowsy and affect a person's ability to " +
      "drive.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 3 - Dangerous Driving, Over-the-Counter Drugs (page 9)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=15",
  },
  {
    key: "prescription-drugs",
    quote:
      "Some prescription drugs can impact driving and can affect a driver's reflexes, " +
      "judgment, vision, and alertness in ways similar to alcohol.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 3 - Dangerous Driving, Prescription Drugs (page 9)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=15",
  },
  {
    key: "combining-drugs",
    quote:
      "A driver should never drink alcohol while taking other drugs. These drugs could " +
      "multiply the effects of alcohol or have additional effects of their own which " +
      "could severely impact a driver's ability to drive safely.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 3 - Dangerous Driving, Combining Alcohol and Other Impairing Drugs (page " +
      "9)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=15",
  },
  {
    key: "emotions",
    quote:
      "Emotions may interfere with a driver's ability to process information. Being " +
      "overly worried, excited, afraid, angry or depressed may affect a person's ability " +
      "to drive safely.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 3 - Dangerous Driving, Emotions (page 9)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=15",
  },
  {
    key: "hot-vehicle",
    quote:
      "In warm weather a vehicle will begin to heat up immediately after being turned off " +
      "and the warmer it is, the quicker the vehicle heats up. It takes only minutes for " +
      "vehicles to reach dangerous temperatures.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 3 - Dangerous Driving, Hot Vehicle Information (page 10)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=16",
  },
  {
    key: "tire-pressure",
    quote:
      "Driving on underinflated or overinflated tires; or tires with low tread can lead " +
      "to safety issues on the road. It is recommended that drivers have the tire " +
      "pressure checked once a month.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 4 - Before Driving, Vehicle Safety Check (page 11)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=17",
  },
  {
    key: "seat-position",
    quote:
      "Proper seat position is upright with the driver's feet on the floor. Improper " +
      "seating positions, such as slouching can result in reduced effectiveness of the " +
      "vehicle's restraint system.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 4 - Before Driving, Adjusting Seat (page 11)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=17",
  },
  {
    key: "steering-wheel-height",
    quote:
      "The top of the steering wheel should be no higher than the top of the driver's " +
      "shoulders and below chin level.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 4 - Before Driving, Adjusting Seat (page 11)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=17",
  },
  {
    key: "chest-10-inches",
    quote:
      "There should be 10 inches between the driver's chest and the steering wheel. The " +
      "seat should not be so far forward that the driver cannot steer the vehicle. The " +
      "seat should not be reclined excessively.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 4 - Before Driving, Adjusting Seat (page 11)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=17",
  },
  {
    key: "head-restraints",
    quote:
      "Head restraints, also known as head rests, are designed to prevent whiplash in the " +
      "event of an accident. Head rests should be adjusted so the head rest comes in " +
      "contact with the back of the driver's head, but not below the ears.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 4 - Before Driving, Adjusting Seat (page 11)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=17",
  },
  {
    key: "inside-mirror",
    quote:
      "The inside mirror is the primary mirror to view traffic flow to the rear of the " +
      "vehicle and should be adjusted so that it frames the rear window when the driver " +
      "looks at it.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 4 - Before Driving, Adjusting Vehicle Mirrors (page 11)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=17",
  },
  {
    key: "mirrors-blind-spots",
    quote:
      "Remember, even properly adjusted mirrors will not eliminate all blind spots. " +
      "Proper head checks should be incorporated whenever possible.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 4 - Before Driving, Adjusting Vehicle Mirrors (page 11)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=17",
  },
  {
    key: "belts-under-18",
    quote:
      "In New Hampshire, safety restraints are required for anyone under the age of 18; " +
      "however, it is highly recommended that drivers and passengers of all ages use " +
      "safety restraints.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 4 - Before Driving, Using Safety Belts (page 11)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=17",
  },
  {
    key: "belts-thrown",
    quote:
      "Safety belts keep the driver and passengers from being thrown from the vehicle and " +
      "help the driver keep control.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 4 - Before Driving, Using Safety Belts (page 11)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=17",
  },
  {
    key: "shoulder-harness",
    quote:
      "The shoulder harness is worn across the shoulder and chest with minimal, if any " +
      "slack. The shoulder harness should not be worn under the New Hampshire Driver's " +
      "Manual 12 arm or behind the back. Wearing the harness the wrong way could cause " +
      "serious internal injuries in a crash.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 4 - Before Driving, Using Safety Belts (page 11)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=17",
  },
  {
    key: "lap-belt",
    quote:
      "The lap belt should be adjusted so that it is snug and lies low across the " +
      "driver's hips after fastening. Otherwise, in a collision an operator or passenger " +
      "could slide out of the belt resulting in injury or death.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 4 - Before Driving, Using Safety Belts (page 12)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=18",
  },
  {
    key: "child-restraint-law",
    quote:
      "New Hampshire law requires anyone less than 18 years of age to be properly " +
      "restrained by a safety belt or secured in a child safety seat with the following " +
      "exceptions:",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 4 - Before Driving, Child Passenger Safety Laws (page 12)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=18",
  },
  {
    key: "child-seat-7-57",
    quote:
      "A child less than 7 years old and less than 57 inches in height must be properly " +
      "fastened and secured in a child passenger restraint which complies with the safety " +
      "standards of the United States Department of Transportation.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 4 - Before Driving, Child Passenger Safety Laws (page 12)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=18",
  },
  {
    key: "helmet-under-18",
    quote:
      "New Hampshire law requires all riders and passengers under the age of 18 to wear " +
      "helmets approved by the United States Department of Transportation.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 4 - Before Driving, Motorcycle Helmet Use (page 12)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=18",
  },
  {
    key: "air-bags",
    quote:
      "Air bags are supplemental restraints and are designed to work best in combination " +
      "with safety belts.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 4 - Before Driving, Air Bags (page 12)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=18",
  },
  {
    key: "air-bags-belts",
    quote:
      "It is extremely important that safety belts always be worn, even in air " +
      "bag-equipped vehicles.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 4 - Before Driving, Air Bags (page 12)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=18",
  },
  {
    key: "secure-load",
    quote:
      "A load must be securely fastened and is only considered secure when nothing can " +
      "slide, shift, fall or sift onto the roadway, or become airborne.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 4 - Before Driving, Securing A Load (page 12)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=18",
  },
  {
    key: "unsecured-load-illegal",
    quote:
      "Driving with an unsecured load is both against the law and extremely dangerous. " +
      "Drivers who fail to properly secure their load may face a costly fine if they " +
      "cause a crash.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 4 - Before Driving, Securing A Load (page 12)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=18",
  },
  {
    key: "trailer-lamps",
    quote:
      "Tires must be properly inflated, and the trailer must have the proper tail, stop, " +
      "turn signal, license plate and side marker lamps and reflectors.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 4 - Before Driving, Towing a Trailer (page 12)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=18",
  },
  {
    key: "jessicas-law",
    quote:
      "Since 2002, New Hampshire drivers have been legally required to clear snow and ice " +
      "off their vehicles before getting on the road.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 4 - Before Driving, Snow and Ice Removal (page 13)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=19",
  },
  {
    key: "jessicas-law-named",
    quote:
      "Jessica's Law is a law specific to New Hampshire that was passed after the death " +
      "of Jessica Smith. Jessica was killed when ice from a tractor-trailer hit her " +
      "vehicle.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 4 - Before Driving, Snow and Ice Removal (page 13)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=19",
  },
  {
    key: "snow-ice-duty",
    quote:
      "It is the responsibility of a driver to ensure that all snow and ice are removed " +
      "from a vehicle prior to driving. Snow and ice on a vehicle may not only impair a " +
      "driver's ability to see but may become loose while on a roadway and may endanger " +
      "other drivers.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 4 - Before Driving, Snow and Ice Removal (page 13)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=19",
  },
  {
    key: "negligent-driving-fine",
    quote:
      "Pursuant to RSA 265:79-b, If a vehicle travels New Hampshire roadways in a manner " +
      "that endangers or is likely to endanger any person or property, the driver may be " +
      "considered guilty of a violation under Negligent Driving.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 4 - Before Driving, Snow and Ice Removal (page 13)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=19",
  },
  {
    key: "steering-hands",
    quote:
      "Drivers' hands should be in the 9 o'clock and 3 o'clock, or the 8 o'clock and 4 " +
      "o'clock positions. Knuckles and thumbs should stay on the outside of the wheel.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Steering (page 14)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=20",
  },
  {
    key: "steering-methods",
    quote:
      "Drivers may use hand-to-hand steering for slight steering, and hand-over-hand for " +
      "greater steering inputs.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Steering (page 14)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=20",
  },
  {
    key: "row-right",
    quote:
      "NH law, RSA 265:28 states that the driver of a vehicle approaching or entering an " +
      "intersection on the left shall yield the right of way to the vehicle on the right, " +
      "unless otherwise designated by an official traffic control device or otherwise " +
      "directed by a police officer.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Yielding Right-of-Way (page 14)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=20",
  },
  {
    key: "row-left-turn",
    quote:
      "RSA 265:29 states that a driver of a vehicle intending to turn to the left within " +
      "an intersection or into an alley, private road, or driveway shall yield the right " +
      "of way to any vehicle approaching from the opposite direction which is within the " +
      "intersection or so close thereto as to constitute an immediate hazard.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Yielding Right-of-Way (page 14)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=20",
  },
  {
    key: "row-never-assume",
    quote:
      "Although yielding right-of-way rules provide a guide to determine who should yield " +
      "the right-ofway, no one should assume they automatically have the right-of-way. " +
      "The situation and circumstances at the intersection must always be considered.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Yielding Right-of-Way (page 14)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=20",
  },
  {
    key: "row-emergency",
    quote:
      "Right-ofway must be given to emergency vehicles when approaching from any " +
      "direction when they are sounding a siren or operating their flashing lights. " +
      "Drivers should drive immediately to the right side of the road and stop the " +
      "vehicle until the emergency has passed.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Yielding Right-of-Way (page 14)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=20",
  },
  {
    key: "row-emergency-return",
    quote:
      "Drivers should avoid blocking an intersection when stopping. Once the emergency " +
      "vehicle has passed, drivers must use their signal and turn back into the roadway, " +
      "only when it is safe to do so.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Yielding Right-of-Way (page 14)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=20",
  },
  {
    key: "row-four-way",
    quote:
      "The driver on the right at a four-way intersection controlled by stop signs if " +
      "both drivers arrive at the intersection at the same time.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Yielding Right-of-Way (page 14)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=20",
  },
  {
    key: "row-driveway",
    quote:
      "Drivers on a public highway, when entering the highway from a driveway or a " +
      "private road;",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Yielding Right-of-Way (page 14)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=20",
  },
  {
    key: "row-ramp",
    quote:
      "Drivers already on a limited access or interstate highway, on the entrance or " +
      "acceleration ramp;",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Yielding Right-of-Way (page 14)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=20",
  },
  {
    key: "row-funeral",
    quote:
      "Drivers should allow vehicles that have their headlights on while following a " +
      "hearse to pass as a group.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Yielding Right-of-Way (page 14)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=20",
  },
  {
    key: "speed-ideal",
    quote:
      "Speed limits are the maximum speed you may travel under ideal conditions. The " +
      "maximum speed limits in New Hampshire are: 30 miles per hour in any business or " +
      "urban residence district as defined in RSA 259:118;",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Speed Management (page 15)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=21",
  },
  {
    key: "speed-rural-35",
    quote:
      "35 miles per hour in any rural residence district as defined in RSA 259:93, and on " +
      "any Class V Highway outside the compact part of any city or town as defined in RSA " +
      "229:5,IV;",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Speed Management (page 15)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=21",
  },
  {
    key: "speed-65-70",
    quote:
      "45 or 55 miles per hour in other locations, except: 65 miles an hour on the " +
      "interstate system, the central New Hampshire turnpike and the eastern New " +
      "Hampshire turnpike in locations where said highways are 4-lane divided highways or " +
      "other divided highways of 4 or more lanes;",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Speed Management (page 15)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=21",
  },
  {
    key: "speed-i93-70",
    quote:
      "70 miles per hour on the portion of I-93 from mile marker 45 to the Vermont " +
      "border.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Speed Management (page 15)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=21",
  },
  {
    key: "speed-minimum-45",
    quote:
      "The minimum speed you may drive on an interstate highway is 45 mph, unless road " +
      "and weather conditions are so bad that this speed is unsafe.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Speed Management (page 15)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=21",
  },
  {
    key: "speed-slow-hazard",
    quote:
      "However, drivers who go far slower than the normal flow of traffic can cause a " +
      "hazard. They often block those behind them, making other drivers jump from lane to " +
      "lane, or take chances on passing when it may not be safe to do so.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Speed Management (page 15)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=21",
  },
  {
    key: "school-zone-speed",
    quote:
      "Posted School Zone - the speed limit is 10 miles per hour (mph) below the usual " +
      "posted speed limit, from 45 minutes before school opening until the school " +
      "opening, and from the school closing until 45 minutes after school closing.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Speed Management (page 15)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=21",
  },
  {
    key: "signal-100-500",
    quote:
      "Drivers should signal at least 100 feet before a turn, and on the highway, drivers " +
      "should signal at least 500 feet before changing lanes or exiting the roadway.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Communicating and Signaling (page 15)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=21",
  },
  {
    key: "signal-sooner",
    quote:
      "Drivers should use the turn signal sooner when turning to allow for greater " +
      "stopping distances by other vehicles when it is raining, snowy or foggy.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Communicating and Signaling (page 15)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=21",
  },
  {
    key: "signal-when",
    quote:
      "Drivers must use the appropriate turn signal when: Changing lanes Turning at an " +
      "intersection Entering or leaving a highway or roadway Turning into a driveway " +
      "Merging onto another road Pulling away from a curb Pulling over to the side of the " +
      "road Passing another vehicle",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Communicating and Signaling (page 15)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=21",
  },
  {
    key: "headlights-period",
    quote:
      "New Hampshire law requires every motor vehicle driven during the period from 1/2 " +
      "hour after sunset to 1/2 hour before sunrise, and whenever rain, snow, or fog " +
      "shall interfere with the proper view of the road so that persons and vehicles on " +
      "the way are not clearly discernible at a distance of 1000 feet ahead,",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Communicating and Signaling (page 15)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=21",
  },
  {
    key: "horn-use",
    quote:
      "Drivers should only use the horn when it is needed to communicate with other road " +
      "users.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Communicating and Signaling (page 15)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=21",
  },
  {
    key: "horn-blind-horse",
    quote:
      "Drivers should not use the horn when near blind pedestrians or when approaching or " +
      "near a horse as this may frighten the horse and cause a crash.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Vehicle horn (page 16)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=22",
  },
  {
    key: "horn-light-tap",
    quote: "A light tap on the horn should be all that is needed under normal circumstances.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Vehicle horn (page 16)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=22",
  },
  {
    key: "stopping-distance-def",
    quote:
      "Total stopping distance is the distance a vehicle travels in ideal conditions from " +
      "the time an operator realizes they must stop until the vehicle actually stops.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Stopping Distance (page 16)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=22",
  },
  {
    key: "stopping-doubles",
    quote:
      "The stopping distance of a vehicle increases 4 times when the speed of the vehicle " +
      "is doubled.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Stopping Distance (page 16)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=22",
  },
  {
    key: "perception-time",
    quote:
      "Perception time - the time and distance it takes for an operator to recognize they " +
      "must stop. The average perception time for an alert driver is ¾ second to 1 " +
      "second.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Stopping Distance (page 16)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=22",
  },
  {
    key: "reaction-time",
    quote:
      "Reaction time - the time and distance it takes for a driver to react and move " +
      "their foot from the gas pedal and begin applying the brakes. The average driver " +
      "has a reaction time of ¾ second to 1 second.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Stopping Distance (page 16)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=22",
  },
  {
    key: "braking-158-feet",
    quote:
      "Braking distance - the time and distance it takes for a vehicle's brakes to slow " +
      "and come to a stop. At 50 mph on dry pavement with good brakes, it can take about " +
      "158 feet to stop.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Stopping Distance (page 16)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=22",
  },
  {
    key: "tailgating",
    quote:
      "Tailgating - For safety reasons, drivers should avoid travelling closer to a " +
      "vehicle with less than a four-second following distance. If being tailgated by " +
      "another vehicle unsafely, drivers should find a safe location to pull over and let " +
      "the vehicle pass.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Stopping Distance (page 16)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=22",
  },
  {
    key: "following-illegal",
    quote:
      "Following another vehicle more closely than is reasonable and prudent is a " +
      "violation of the law and is punishable by a fine.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Stopping Distance (page 16)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=22",
  },
  {
    key: "lane-change-steps",
    quote:
      "Check all \"blind spots,\" or areas around the vehicle that cannot be seen by using " +
      "head checks. Identify a gap in traffic, signal and look again in the direction of " +
      "the lane change. Adjust speed and steer into the lane.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Changing Lanes (page 16)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=22",
  },
  {
    key: "entering-highway",
    quote:
      "Use the acceleration lane to reach the speed of other vehicles before pulling onto " +
      "the roadway. Identify a gap in traffic and merge with the traffic flow.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Entering a Multi-lane Highway (page 16)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=22",
  },
  {
    key: "exiting-roadway",
    quote:
      "Plan to move to the lane closest to the exiting point early to avoid a quick lane " +
      "change. Maintain vehicle speed while on the main roadway. Check the posted speed " +
      "for the deceleration lane. Signal intention, move to the deceleration lane and " +
      "slow to exiting speed.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Exiting a Roadway (page 16)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=22",
  },
  {
    key: "passing-when",
    quote:
      "Only pass when it is permitted to do so by signage or road markings and only when " +
      "road conditions are favorable.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Passing (page 17)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=23",
  },
  {
    key: "passing-never",
    quote:
      "Do not attempt to pass when an oncoming vehicle is approaching, when the view is " +
      "blocked by a curve or a hill, at intersections, or before a highway-railroad " +
      "crossing or bridge.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Passing (page 17)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=23",
  },
  {
    key: "passing-left-lane",
    quote:
      "On multi-lane roads, the left-most lane is intended to be used for passing slower " +
      "vehicles. Never pass on the shoulder, whether it is paved or not.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Passing (page 17)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=23",
  },
  {
    key: "passing-return",
    quote:
      "Continue to pass until the complete front of the passed vehicle is visible in the " +
      "rearview mirror. Signal intention to return back to the lane.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Passing (page 17)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=23",
  },
  {
    key: "being-passed",
    quote:
      "When being passed, drivers should: Stay in the lane they are travelling. Maintain " +
      "a constant speed to allow the driver to pass. Never increase speed to prevent " +
      "someone from passing.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Passing (page 17)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=23",
  },
  {
    key: "backing-check",
    quote:
      "Check behind the vehicle before getting in. Children or small objects cannot be " +
      "seen from the driver's seat.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Backing (page 17)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=23",
  },
  {
    key: "backing-mirrors",
    quote:
      "Mirrors and head checks should be used for backing, but they do not show the area " +
      "immediately behind the vehicle.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Backing (page 17)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=23",
  },
  {
    key: "backing-camera",
    quote: "Back-up cameras should never be used as the primary tool for backing safely.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Backing (page 17)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=23",
  },
  {
    key: "curves",
    quote:
      "Curves - Always reduce speed prior to entering the curve to a safe speed (a speed " +
      "that allows the driver to apply slight and constant acceleration through the " +
      "curve). Reduce speed more when traction is poor, when following other vehicles or " +
      "when the end of the curve cannot be seen.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Adjusting To Roadway Conditions (page 17)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=23",
  },
  {
    key: "curves-braking",
    quote:
      "Hard braking after entry to a curve could cause the vehicle tires to lose " +
      "traction.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Adjusting To Roadway Conditions (page 17)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=23",
  },
  {
    key: "slippery-roads",
    quote:
      "Slippery roads - Reduce speed at the first sign of rain, snow, sleet, or ice. When " +
      "the roadway is slippery, tires do not grip as well. It will take longer to stop " +
      "and it will be harder to turn without skidding.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Adjusting To Roadway Conditions (page 17)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=23",
  },
  {
    key: "hydroplaning",
    quote:
      "Hydroplaning - Hydroplaning occurs when the steering tires start to ride up on any " +
      "pooled water, similar to the action of water skis.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Adjusting To Roadway Conditions (page 17)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=23",
  },
  {
    key: "hydroplaning-avoid",
    quote:
      "The best way to avoid traction loss from hydroplaning is to slow down in the rain " +
      "or when the road is wet with pooled water or water puddles.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Adjusting To Roadway Conditions (page 17)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=23",
  },
  {
    key: "flooded-roads",
    quote:
      "Flooded Roadways - Do not drive through large bodies of standing water on a road. " +
      "If there is a flooded roadway, find another route to travel.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Adjusting To Roadway Conditions (page 18)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=24",
  },
  {
    key: "gravel-roads",
    quote:
      "Traction can be reduced on gravel or dirt roads. Drivers should reduce speed, " +
      "increase the following distance and be aware that the vehicle may skid when trying " +
      "to stop.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Rural Road Driving (page 18)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=24",
  },
  {
    key: "narrow-roads",
    quote:
      "Rural roads are generally narrower and may have ditches or drop offs instead of " +
      "shoulders. Drivers should reduce speed, center the vehicle in the travel lane and " +
      "watch for oncoming traffic that may attempt to share or encroach on the lane.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Rural Road Driving (page 18)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=24",
  },
  {
    key: "single-lane-bridge",
    quote:
      "Drivers should look for warning signs identifying narrow or single lane bridges. " +
      "Take turns crossing the bridge; generally the first driver to the bridge has " +
      "right-of-way.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Rural Road Driving (page 18)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=24",
  },
  {
    key: "steel-bridges",
    quote:
      "Open Bridge Gratings or Steel Bridges: These can reduce traction of a vehicle. " +
      "Drivers should reduce speed, increase the following distance, and maintain a firm " +
      "grip on the steering wheel.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Rural Road Driving (page 18)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=24",
  },
  {
    key: "uncontrolled-rural",
    quote:
      "Some intersections on rural roads are not controlled by yield or stop signs. These " +
      "intersections can be very dangerous if a driver does not approach them with " +
      "caution. When approaching an uncontrolled rural intersection slow down and be " +
      "prepared to stop for crossing or oncoming traffic.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Rural Road Driving (page 18)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=24",
  },
  {
    key: "night-harder",
    quote:
      "Driving at night is more difficult and more hazardous than daytime driving. The " +
      "distance drivers can see is limited by light provided by the headlights.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Night Driving (page 18)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=24",
  },
  {
    key: "high-beams",
    quote:
      "Use the high beams whenever there are no oncoming vehicles and dim the high beams " +
      "for all approaching traffic.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Night Driving (page 18)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=24",
  },
  {
    key: "glare-look-right",
    quote:
      "If a vehicle coming from the opposite direction is travelling with their high " +
      "beams on, look toward the right side of the road to keep from being distracted or " +
      "momentarily blinded by their headlights.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Night Driving (page 18)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=24",
  },
  {
    key: "low-beams-following",
    quote:
      "Use the low beams when following another vehicle. In fog, rain, or snow, use the " +
      "low beams. Light from the high beams may cause glare and make it more difficult to " +
      "see ahead.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Night Driving (page 18)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=24",
  },
  {
    key: "night-sunglasses",
    quote:
      "Tinted or colored lenses reduce vision. Do not wear sunglasses or colored lenses " +
      "when driving at night or on overcast days.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Night Driving (page 18)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=24",
  },
  {
    key: "night-following-extra",
    quote:
      "Increase the following distance by adding at least one additional second for night " +
      "driving conditions and at least two additional seconds for driving on unfamiliar " +
      "roadways at night.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Night Driving (page 18)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=24",
  },
  {
    key: "warning-systems-passive",
    quote:
      "Most of these technologies are passive, meaning they warn the driver of a " +
      "potential issue, but do not automatically prevent a problem or collision.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Vehicle Warning Systems (page 19)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=25",
  },
  {
    key: "warning-systems-not-alone",
    quote:
      "Drivers should not become complacent and dependent on these technologies alone and " +
      "should not solely depend on it.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Vehicle Warning Systems (page 19)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=25",
  },
  {
    key: "blind-spot-monitor",
    quote:
      "The blind spot monitor helps the driver be more aware of other traffic. The " +
      "warnings provided can be helpful to the driver when making a lane change but the " +
      "driver should still always check their mirrors and look over their shoulders " +
      "before doing so.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Vehicle Warning Systems (page 19)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=25",
  },
  {
    key: "forward-collision",
    quote:
      "Alerts drivers of an impending collision with a slower moving or stationary " +
      "vehicle or object to the front so a driver can brake or swerve in time. The " +
      "warning alone will not automatically brake for the driver.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Vehicle Warning Systems (page 19)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=25",
  },
  {
    key: "police-overrules",
    quote:
      "A police officer directing traffic overrules any traffic light or sign and must be " +
      "obeyed.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, New Hampshire Rules of the Road (page 20)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=26",
  },
  {
    key: "traffic-control-devices",
    quote:
      "Traffic control devices include traffic signals, signs, pavement markings and " +
      "directions provided by law enforcement, highway personnel and school crossing " +
      "guards.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, Traffic Control Devices (page 20)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=26",
  },
  {
    key: "green-light",
    quote:
      "Solid GREEN Traffic Light - This means a driver may go through the intersection " +
      "and if it is clear to do so, proceed with caution. Drivers must yield to " +
      "pedestrians and vehicles in an intersection.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, Traffic Signals (page 20)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=26",
  },
  {
    key: "yellow-light",
    quote:
      "Solid YELLOW Traffic Light - This is a warning light to let a driver know the " +
      "traffic light is about to change to red.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, Traffic Signals (page 20)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=26",
  },
  {
    key: "red-light",
    quote:
      "Solid RED Traffic Light - This means stop prior to entering the intersection. " +
      "Drivers must wait behind the stop line, crosswalk, or intersection until the " +
      "traffic light turns green.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, Traffic Signals (page 20)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=26",
  },
  {
    key: "right-on-red",
    quote:
      "Drivers may make a right turn on a red signal ONLY IF there is no sign prohibiting " +
      "a right turn on red.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, Traffic Signals (page 20)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=26",
  },
  {
    key: "flashing-yellow",
    quote:
      "Flashing YELLOW Traffic Light - Slow down and proceed with caution. Drivers should " +
      "be prepared to stop for any traffic flow entering the intersection.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, Traffic Signals (page 20)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=26",
  },
  {
    key: "flashing-red",
    quote:
      "Flashing RED Traffic Light - Drivers must come to a complete stop behind a stop " +
      "line, crosswalk, or intersection before proceeding though the intersection, " +
      "yielding any right-of-way.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, Traffic Signals (page 20)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=26",
  },
  {
    key: "green-arrow",
    quote:
      "GREEN arrow - Drivers may turn in the direction of the arrow after yielding to " +
      "traffic and pedestrians.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, Traffic Signals (page 20)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=26",
  },
  {
    key: "red-arrow",
    quote:
      "RED arrow - Drivers may not enter the intersection unless permitted by other " +
      "indications shown at the same time.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, Traffic Signals (page 20)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=26",
  },
  {
    key: "yellow-arrow",
    quote: "YELLOW arrow - Slow down and proceed in the direction of the arrow with caution.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, Traffic Signals (page 20)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=26",
  },
  {
    key: "signs-purpose",
    quote:
      "Traffic signs advise drivers about traffic rules, hazards, roadway location, " +
      "roadway directions and the location of roadway services. The shape, color, " +
      "symbols, and words of these signs give clues to the type of information they " +
      "provide.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, Traffic Signs (page 20)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=26",
  },
  {
    key: "sign-colors",
    quote:
      "Red Prohibition (stop or do not do something) Green Direction or guidance Blue " +
      "Driver services Yellow General warning White Law or rule of the road Orange Road " +
      "repair work warning Brown Tourist and recreation guidance Pink Incident management " +
      "Purple EZPass",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, Traffic Signs (page 21)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=27",
  },
  {
    key: "sign-shapes",
    quote:
      "Down pointed triangle Yield (slow down and give other vehicles the right of way) " +
      "Pennant (sideways triangle) No passing (this sign, found on the left side of the " +
      "road, gives the driver warning of no passing zones ahead.) Diamond Warning " +
      "(special hazards are ahead - pictures or words will describe what the hazard is).",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, Traffic Signs (page 21)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=27",
  },
  {
    key: "sign-rectangle",
    quote:
      "Rectangle Traffic regulations or directions to drivers. Pentagon (5 sides) School " +
      "zone and school crossing. Circle Advance warning of a railroad crossing. Crossbuck " +
      "(X) Indicates where a railroad crossing is.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, Traffic Signs (page 21)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=27",
  },
  {
    key: "warning-signs",
    quote:
      "WARNING SIGNS These signs warn a driver of upcoming driving conditions, such as " +
      "warning the driver to slow down because of a curve or intersection ahead, to be " +
      "prepared to stop if necessary, or of a hazard or special situation on the roadway " +
      "that is ahead.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, Warning Signs (page 21)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=27",
  },
  {
    key: "stop-sign",
    quote:
      "Stop Sign - Drivers must come to a full stop (wheels must completely stop moving) " +
      "behind the stop line or crosswalk, or if there is no stop line or crosswalk, " +
      "before entering the intersection.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, Examples of Prohibition Signs (page 21)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=27",
  },
  {
    key: "stop-sign-look",
    quote:
      "Look for crossing vehicles and pedestrians in all directions and yield the " +
      "right-of-way prior to proceeding.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, Examples of Prohibition Signs (page 21)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=27",
  },
  {
    key: "yield-sign",
    quote:
      "Yield Sign - A yield sign is a red and white downward pointing triangle with red " +
      "letters. It means the driver must slow down and allow traffic that has the " +
      "right-of-way to cross before entering.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, Examples of Prohibition Signs (page 21)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=27",
  },
  {
    key: "regulatory-signs",
    quote:
      "REGULATORY SIGNS These signs are square or rectangular and contain letters or " +
      "symbols. These signs tell a driver about specific laws that must be obeyed, such " +
      "as rules for traffic direction, lane use, turning, speed, parking, and other " +
      "special situations.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, Regulatory Signs (page 22)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=28",
  },
  {
    key: "regulatory-red-slash",
    quote:
      "Some regulatory signs have a red circle with a red slash over a symbol, which " +
      "prohibit certain actions.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, Regulatory Signs (page 22)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=28",
  },
  {
    key: "route-numbers",
    quote:
      "Interstate routes are numbered by code. Even numbers are west/east routes and odd " +
      "numbers are north/south routes. Three numbered routes with an odd first number are " +
      "routes into a city. Three numbered routes with an even first number go through or " +
      "around a city.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, Route Number Signs (page 22)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=28",
  },
  {
    key: "guide-signs",
    quote:
      "GUIDE SIGNS These signs are square and rectangular and are green, brown, or blue. " +
      "They give information on intersecting roads, help direct drivers to cities and " +
      "towns, and show points of interest along the roadway.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, Guide Signs (page 22)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=28",
  },
  {
    key: "crossbuck-advance",
    quote:
      "A round warning sign with an \"X\" symbol (crossbuck) and black \"RR\" letters is " +
      "placed along the road prior to a highway-railroad grade crossing. The sign " +
      "cautions the driver to slow down or stop, to look and listen for a train or " +
      "railroad vehicle before proceeding.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, Railroad Crossing Warning Signs (page 22)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=28",
  },
  {
    key: "railroad-15-50",
    quote:
      "When a train or railroad vehicle is approaching the intersection, a driver must " +
      "stop behind the stop line or not less than 15 feet, nor more than 50 feet from the " +
      "nearest rail of the track.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, Railroad Crossing Warning Signs (page 22)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=28",
  },
  {
    key: "railroad-multiple-tracks",
    quote:
      "If there is more than one track at the crossing, the driver should not cross the " +
      "tracks until there is a clear view of the tracks in both directions.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, Railroad Crossing Warning Signs (page 22)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=28",
  },
  {
    key: "railroad-cross-quickly",
    quote:
      "When the intersection is clear, drivers should look both ways and cross the tracks " +
      "quickly, without stopping.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, Railroad Crossing Warning Signs (page 22)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=28",
  },
  {
    key: "railroad-buses-trucks",
    quote:
      "The law requires buses that carry passengers and trucks carrying flammable or " +
      "hazardous material to stop before any railroad crossing, even if there is no sign " +
      "of a train coming. Drivers should be ready to stop when driving behind these " +
      "vehicles.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, Railroad Crossing Warning Signs (page 22)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=28",
  },
  {
    key: "speed-limit-signs",
    quote:
      "Speed Limit Signs - These black and white signs indicate the maximum legal speed " +
      "allowed in ideal conditions.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, Examples of Regulatory Signs (page 22)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=28",
  },
  {
    key: "shared-center-lane",
    quote:
      "Shared Center Lane Left Turn Only - This sign tells a driver where a lane is " +
      "reserved for the use of left turning vehicles from either direction and is not to " +
      "be used for through traffic or passing other vehicles.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, Examples of Regulatory Signs (page 22)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=28",
  },
  {
    key: "one-way-sign",
    quote:
      "One-Way Street - These signs tell a driver that traffic flows only in the " +
      "direction of the arrow. Never drive the wrong way on a one-way street.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, Examples of Regulatory Signs (page 22)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=28",
  },
  {
    key: "work-zone-signs",
    quote:
      "WORK ZONE SIGNS They are generally diamond or rectangular shaped and orange with " +
      "black letters or symbols. These construction, maintenance, or emergency operation " +
      "signs alert drivers that there are work zones and that people are working on or " +
      "near the roadway.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, Work Zone Signs (page 23)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=29",
  },
  {
    key: "work-zone-flagger",
    quote:
      "In work zones, traffic may be controlled by a person with a sign or flag to tell " +
      "drivers which direction to travel, to slow down or stop. Drivers must follow their " +
      "instructions.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, Work Zone Signs (page 23)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=29",
  },
  {
    key: "work-zone-barriers",
    quote:
      "Barriers, such as drums, cones, and tubes (panels) are used to keep traffic out of " +
      "hazardous work zones. Along with signs and road markings, they guide drivers " +
      "safely through the work zone.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, Work Zone Signs (page 23)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=29",
  },
  {
    key: "work-zone-fines",
    quote:
      "Fines may be doubled in a work zone; however, this will be clearly marked before " +
      "entering the work zone.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, Work Zone Signs (page 23)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=29",
  },
  {
    key: "pavement-markings",
    quote:
      "Pavement markings are lines, arrows, words, or symbols painted on the roadway to " +
      "give a driver directions or warnings.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, Pavement Markings (page 23)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=29",
  },
  {
    key: "broken-lines",
    quote:
      "Single, Broken (Dotted) Lines: These lines mark traffic lanes. White lines mean " +
      "these lanes of traffic are moving in the same direction. Yellow lines mean the " +
      "lanes of traffic are moving in the opposite direction. Driver may pass other " +
      "vehicles over broken (dotted) lines when it is safe to do so.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, Pavement Markings (page 23)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=29",
  },
  {
    key: "solid-white-lines",
    quote:
      "Solid White Lines: Drivers are prohibited from changing lanes or to pass another " +
      "vehicle.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, Pavement Markings (page 23)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=29",
  },
  {
    key: "double-lines",
    quote:
      "Double White or Yellow Lines: Drivers must not pass if the line on the driver's " +
      "side is solid. If the line on the driver's side is broken (dotted), they may pass " +
      "when safe to do so.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, Pavement Markings (page 23)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=29",
  },
  {
    key: "edge-markings",
    quote:
      "Edge Markings: Edge markings are the single line that marks the edge of the road. " +
      "The line is white on two-way roads and on the right edges of one-way roads. The " +
      "line is yellow on the left edges of one-way roads.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, Pavement Markings (page 23)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=29",
  },
  {
    key: "stop-lines",
    quote:
      "Stop Lines: White stop lines are located on the pavement to show drivers where to " +
      "stop. After initially stopping at the required point, a driver should look both " +
      "ways and proceed forward making sure it is safe to continue into the intersection.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, Pavement Markings (page 23)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=29",
  },
  {
    key: "crosswalk-yield",
    quote:
      "Crosswalks: Crosswalk lines are painted across a road to show pedestrian crossing " +
      "areas. Drivers are required to yield to pedestrians crossing the road in marked " +
      "crosswalks or at intersections even if no crosswalk lines exist at the " +
      "intersection.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, Pavement Markings (page 23)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=29",
  },
  {
    key: "white-arrows",
    quote:
      "White arrows are painted on some roadways to help guide drivers into the proper " +
      "lanes for turning at intersections and through traffic.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, Pavement Markings (page 24)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=30",
  },
  {
    key: "shared-center-turn-lane",
    quote: "Shared Center Turn Lane: Shared center lanes are for left turns only.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, Pavement Markings (page 24)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=30",
  },
  {
    key: "toll-ezpass",
    quote:
      "One is with cash, and another is through an electronic toll collection system " +
      "known as E-ZPass, which allows drivers to drive through designated lanes without " +
      "stopping to pay a cash toll, thereby reducing traffic congestion.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 7 - General Driving and Parking, Toll Roads (page 25)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=31",
  },
  {
    key: "toll-cash-lanes",
    quote:
      "Obey posted speed limits within the toll plazas. Never back up or reverse " +
      "direction at a toll plaza. Come to a complete stop at staffed lanes. Do not get " +
      "out of your vehicle.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 7 - General Driving and Parking, Toll Roads (page 25)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=31",
  },
  {
    key: "turning-before",
    quote:
      "Search all corners for traffic controls, pedestrians, other vehicles, etc. and " +
      "signal intentions. Enter and maintain proper position in the lane that is closest " +
      "to the direction they want to go. Look through the turn to the farthest point " +
      "possible along the intended path.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 7 - General Driving and Parking, Turning and U-Turns (page 25)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=31",
  },
  {
    key: "right-turns",
    quote:
      "Right turns Avoid swinging wide to the left before making the turn. Always turn " +
      "right from the right-most portion of the lane.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 7 - General Driving and Parking, Turning and U-Turns (page 25)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=31",
  },
  {
    key: "left-turns",
    quote:
      "Left turns When making a left turn yield to oncoming traffic. Always turn left " +
      "from the left-most portion of the lane.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 7 - General Driving and Parking, Turning and U-Turns (page 25)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=31",
  },
  {
    key: "multiple-lane-turns",
    quote:
      "Multiple lanes turning Identify which lane and enter the lane. Stay in that lane " +
      "until the turn is completed.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 7 - General Driving and Parking, Turning and U-Turns (page 25)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=31",
  },
  {
    key: "missed-exit",
    quote:
      "Next Exit - If a driver misses an exit on a divided highway, they should drive to " +
      "the next exit to reverse direction. Drivers should never stop, back up or try to " +
      "turn around.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 7 - General Driving and Parking, Reversing Direction (page 25)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=31",
  },
  {
    key: "u-turn-danger",
    quote:
      "U-Turn - U-turns can be extremely dangerous and are not legal everywhere. If a " +
      "driver must reverse direction, the driver should first check to see if it there " +
      "are any signs indicating that U-turns are prohibited.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 7 - General Driving and Parking, Reversing Direction (page 25)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=31",
  },
  {
    key: "three-point-turn-when",
    quote:
      "Three-Point Turn - Drivers should use this type of turn only when the road or " +
      "street is too narrow to make a U-turn. This type of turn should only be used on a " +
      "two-lane roadway.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 7 - General Driving and Parking, Reversing Direction (page 26)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=32",
  },
  {
    key: "intersections-prepared",
    quote:
      "Drivers should not rely on other road users to obey traffic control signals or " +
      "signs. Drivers should always be prepared to avoid a collision.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 7 - General Driving and Parking, Intersections (page 26)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=32",
  },
  {
    key: "intersections-look",
    quote:
      "It is recommended that drivers look left, then right and left again before " +
      "entering the intersection.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 7 - General Driving and Parking, Intersections (page 26)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=32",
  },
  {
    key: "green-light-pause",
    quote:
      "At a traffic signal when the light turns green, avoid immediately moving into the " +
      "intersection. Take the time to make sure the path of travel is clear and there is " +
      "no crossing traffic.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 7 - General Driving and Parking, Intersections (page 26)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=32",
  },
  {
    key: "turn-signal-trust",
    quote:
      "Drivers should not turn into a lane in front of another vehicle just because an " +
      "approaching vehicle has a turn signal active. The driver with an active turn " +
      "signal may plan to turn after they go past the intersection a driver is at or may " +
      "have forgotten to turn the signal off from a prior turn.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 7 - General Driving and Parking, Intersections (page 26)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=32",
  },
  {
    key: "roundabout-yield",
    quote:
      "Yield - Yield to the traffic in both lanes in the roundabout. When there is an " +
      "appropriate gap in traffic, enter the roundabout.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 7 - General Driving and Parking, Multi-lane Roundabouts (Traffic Circles) " +
      "(page 27)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=33",
  },
  {
    key: "roundabout-lane",
    quote:
      "Lane Position - Maintain lane position until exiting. Avoid lane changes while " +
      "inside the roundabout.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 7 - General Driving and Parking, Multi-lane Roundabouts (Traffic Circles) " +
      "(page 27)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=33",
  },
  {
    key: "roundabout-no-pass",
    quote:
      "Do Not Pass - Do not drive beside or attempt to overtake or pass any vehicles. " +
      "Large trucks and trailers within the roundabout may need to straddle both lanes.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 7 - General Driving and Parking, Multi-lane Roundabouts (Traffic Circles) " +
      "(page 27)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=33",
  },
  {
    key: "roundabout-emergency",
    quote:
      "Emergency Vehicles in Roundabouts - Do not enter a roundabout when emergency " +
      "vehicles are approaching. Pull over to the right. Allow other vehicles to clear " +
      "the intersection so the emergency vehicles can move through the roundabout. Never " +
      "stop while inside the roundabout.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 7 - General Driving and Parking, Multi-lane Roundabouts (Traffic Circles) " +
      "(page 27)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=33",
  },
  {
    key: "school-bus-25",
    quote:
      "Drivers must stop at least 25-feet in any direction for a school bus that is " +
      "stopped with its red lights flashing and/or the stop arm extended at all times " +
      "unless the roadway is separated by a physical barrier.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 7 - General Driving and Parking, Rules for School Buses (page 27)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=33",
  },
  {
    key: "school-bus-remain",
    quote:
      "Drivers shall remain stopped until the school bus resumes motion or until the " +
      "flashing red lights cease to operate. Proceed slowly while always watching for " +
      "children.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 7 - General Driving and Parking, Rules for School Buses (page 27)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=33",
  },
  {
    key: "parking-rural-200",
    quote:
      "Any vehicle parked along a rural highway must be moved off the paved or main " +
      "travelled portion of the road. If it is impossible to pull completely off the " +
      "road, drivers should pull off as much as they can as long as there is a clear view " +
      "for a distance of 200 feet in each direction",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 7 - General Driving and Parking, Parking (page 27)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=33",
  },
  {
    key: "parking-note",
    quote:
      "If a driver must leave a vehicle for several hours, they should leave a note on " +
      "the windshield advising the police of the problem, an anticipated time the vehicle " +
      "will be moved, and how to get in touch with the driver or owner.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 7 - General Driving and Parking, Parking (page 27)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=33",
  },
  {
    key: "parking-curb",
    quote:
      "When parking along the roadway, drivers should park their vehicle as far away from " +
      "the flow of traffic as possible. If parking near a curb, park as close to it as " +
      "possible.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 7 - General Driving and Parking, Parking (page 28)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=34",
  },
  {
    key: "parking-secure",
    quote:
      "The law requires drivers to turn off the engine and remove the key when leaving a " +
      "vehicle unattended. Drivers should also lock the vehicle whenever it is being " +
      "parked.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 7 - General Driving and Parking, Parking (page 28)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=34",
  },
  {
    key: "parking-hill",
    quote:
      "Drivers should place the vehicle in \"park\" if the vehicle has an automatic " +
      "transmission or leave it in gear if the vehicle has a manual transmission. Set the " +
      "parking brake and turn the wheels into the curb if the vehicle is parked on a " +
      "hill.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 7 - General Driving and Parking, Parking (page 28)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=34",
  },
  {
    key: "parking-door",
    quote:
      "Never open a door into traffic. No-Parking Zones - There are many areas where a " +
      "driver cannot park. Drivers should check for signs or painted curbs that may " +
      "prohibit or limit parking.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 7 - General Driving and Parking, Parking (page 28)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=34",
  },
  {
    key: "accessible-parking",
    quote:
      "It is against the law to park in a space that is reserved for individuals with " +
      "walking disabilities. A conviction for parking in such spaces carries with it a " +
      "fine.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 7 - General Driving and Parking, Spaces and Access Aisles Reserved For " +
      "Persons with Walking Disabilities (page 28)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=34",
  },
  {
    key: "access-aisle",
    quote:
      "Access aisles are the crosshatched area parallel and adjacent to the accessible " +
      "parking space. This area, marked with yellow or white diagonally striped lines is " +
      "the space needed by individuals with walking disabilities to be able to fully open " +
      "the door to their vehicle and safely maneuver in and out of their vehicle.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 7 - General Driving and Parking, Spaces and Access Aisles Reserved For " +
      "Persons with Walking Disabilities (page 28)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=34",
  },
  {
    key: "access-aisle-fine",
    quote:
      "There is a fine for parking in an access aisle for the first offense, and an in " +
      "increased fine for each subsequent offense.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 7 - General Driving and Parking, Spaces and Access Aisles Reserved For " +
      "Persons with Walking Disabilities (page 28)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=34",
  },
  {
    key: "no-parking-list",
    quote:
      "Although not marked, it is illegal to park in the following places: Alongside " +
      "another parked vehicle (no double parking) On a sidewalk In an intersection On a " +
      "crosswalk On any bridge In any highway tunnel",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 7 - General Driving and Parking, Parking (page 28)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=34",
  },
  {
    key: "no-parking-blocking",
    quote:
      "In such a way that blocks traffic or is a hazard to others on the road On any " +
      "street where there is no clearance for other vehicles to pass between the parked " +
      "vehicles and the far curb",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 7 - General Driving and Parking, Parking (page 28)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=34",
  },
  {
    key: "no-parking-distances",
    quote:
      "In front of a driveway Within 15 feet of a fire hydrant Within 20 feet of a " +
      "crosswalk at an intersection Within 30 feet of a stop sign, yield sign or traffic " +
      "control signal",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 7 - General Driving and Parking, Parking (page 28)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=34",
  },
  {
    key: "no-parking-fire-rail",
    quote:
      "Within 20 feet of the driveway entrance to any fire station or within 75 feet on " +
      "the opposite side of the street Within 50 feet of the nearest rail of a railroad " +
      "crossing",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 7 - General Driving and Parking, Parking (page 28)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=34",
  },
  {
    key: "parallel-parking-entry",
    quote:
      "Once traffic is clear, shift to reverse and look to the rear in the direction the " +
      "vehicle will be moving. Back slowly while turning the steering wheel rapidly in " +
      "the appropriate direction. Continue backing until the front bumper is in line with " +
      "the rear bumper of the vehicle the driver is parking behind.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 7 - General Driving and Parking, Parallel Parking (page 29)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=35",
  },
  {
    key: "parallel-parking-exit",
    quote:
      "Move forward into the appropriate lane of traffic when the door post of the " +
      "vehicle clears the rear bumper of the vehicle parked ahead of the driver.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 7 - General Driving and Parking, Parallel Parking (page 29)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=35",
  },
  {
    key: "turn-head",
    quote:
      "Something for drivers to remember: turn your head before you turn the wheel. " +
      "Drivers need to be aware of what is happening around their vehicle.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 8 - Driving Safely, Visual Search (page 30)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=36",
  },
  {
    key: "searching",
    quote:
      "Searching - Searching helps drivers to see situations that could cause a problem " +
      "and gives them time to change speed and/or roadway position. Drivers should keep " +
      "their eyes moving and searching for possible problems.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 8 - Driving Safely, Visual Search (page 30)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=36",
  },
  {
    key: "looking-ahead",
    quote:
      "Looking ahead - Looking ahead down the road, looking past the vehicles in front of " +
      "the driver, and continually checking mirrors will help make drivers aware of " +
      "potential dangers.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 8 - Driving Safely, Visual Search (page 30)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=36",
  },
  {
    key: "look-rear",
    quote:
      "Look to the rear - Drivers need to be aware of traffic behind their vehicle. " +
      "Drivers should check their mirrors continually before slowing down, stopping, " +
      "turning or changing lanes.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 8 - Driving Safely, Visual Search (page 30)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=36",
  },
  {
    key: "following-four-seconds",
    quote:
      "Drivers should always try to keep a minimum following distance of at least four " +
      "seconds between their car and the vehicle in front.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 8 - Driving Safely, Space Management (page 30)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=36",
  },
  {
    key: "following-count",
    quote:
      "Watch when the rear of the vehicle ahead passes a sign, pole or any other " +
      "stationary point. Count the seconds it takes to reach the same sign, pole, or any " +
      "other stationary point (\"Onethousand-one, one-thousand-two, onethousand-three, " +
      "one-thousand-four\").",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 8 - Driving Safely, Space Management (page 30)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=36",
  },
  {
    key: "following-increase",
    quote:
      "Drivers should increase the following distance: On slippery roads. When following " +
      "large vehicles like trucks, buses, recreational vehicles and vehicles pulling a " +
      "trailer. At night, in fog, or in bad weather.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 8 - Driving Safely, Space Management (page 31)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=37",
  },
  {
    key: "space-side",
    quote:
      "Avoid driving next to other vehicles for long periods of time. The vehicle may be " +
      "in their blind-spot, and it reduces the space needed to avoid a collision.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 8 - Driving Safely, Space to the side (page 31)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=37",
  },
  {
    key: "space-center-line",
    quote:
      "Avoid crowding the center line marking. Try to keep as much space as possible " +
      "between the vehicle and oncoming traffic.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 8 - Driving Safely, Space to the side (page 31)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=37",
  },
  {
    key: "space-behind",
    quote:
      "Space behind To help maintain a safe distance from the vehicles following, drivers " +
      "should drive at a steady speed, signal in advance and increase the following " +
      "distance in front to allow for a safe stopping distance.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 8 - Driving Safely, Space behind (page 31)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=37",
  },
  {
    key: "crashes-30000",
    quote:
      "In New Hampshire there are more than 30,000 crashes reported each year. All " +
      "drivers have the responsibility to do their best to prevent collisions.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 9 - Accidents and Financial Responsibility (page 32)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=38",
  },
  {
    key: "defensive-driving",
    quote:
      "Drivers should learn to drive defensively, which means drivers must watch for " +
      "illegal acts and the driving errors of other drivers and adjust their driving " +
      "accordingly so as to avoid a crash.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 9 - Accidents and Financial Responsibility (page 32)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=38",
  },
  {
    key: "crash-steps",
    quote:
      "If possible, move the vehicle off the road so that traffic is not blocked from " +
      "passing the site of the crash. Call 911 if there are injuries.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 9 - Accidents and Financial Responsibility, Accident procedures (page 32)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=38",
  },
  {
    key: "crash-aid",
    quote:
      "Give aid to any injured people, but do not move them unless it is necessary, and " +
      "be sure an ambulance has been called.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 9 - Accidents and Financial Responsibility, Accident procedures (page 32)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=38",
  },
  {
    key: "crash-exchange",
    quote:
      "Get the following information for all people involved in the crash: o Names and " +
      "addresses. o Driver's license numbers, and state(s) of issue. o License plate " +
      "number(s) and state of issue of all vehicles involved in the crash. o Make, model " +
      "and year of all vehicles involved in the crash.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 9 - Accidents and Financial Responsibility, Accident procedures (page 32)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=38",
  },
  {
    key: "crash-report-15-days",
    quote:
      "New Hampshire law requires that an accident report be filed with the Division of " +
      "Motor Vehicles within fifteen (15) days if there is a fatality, injuries or if the " +
      "combined property damage totals more than $1,000 as a result of the accident.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 9 - Accidents and Financial Responsibility, Reporting an accident (page " +
      "32)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=38",
  },
  {
    key: "crash-police-report",
    quote:
      "If the crash is investigated by a police officer, drivers are not required to file " +
      "a separate report to the Division of Motor Vehicles.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 9 - Accidents and Financial Responsibility, Reporting an accident (page " +
      "32)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=38",
  },
  {
    key: "crash-uncertain",
    quote:
      "If a driver is uncertain if the combined property damage is over $1,000, it is " +
      "recommended to file an Operator Report with the DMV to ensure compliance with the " +
      "law.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 9 - Accidents and Financial Responsibility, Reporting an accident (page " +
      "32)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=38",
  },
  {
    key: "no-mandatory-insurance",
    quote:
      "New Hampshire has no mandatory law, so a driver may drive a vehicle within the " +
      "State of New Hampshire without insurance.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 9 - Accidents and Financial Responsibility, Financial Responsibility (page " +
      "32)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=38",
  },
  {
    key: "uninsured-liability",
    quote:
      "However, if a driver is involved in an uninsured accident, they could be held " +
      "responsible for payment of all damages to the other person's property and the " +
      "payment of all medical bills arising out of the crash.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 9 - Accidents and Financial Responsibility, Financial Responsibility (page " +
      "32)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=38",
  },
  {
    key: "uninsured-suspension",
    quote:
      "If a driver is unable to pay for these damages and medical bills, New Hampshire " +
      "law requires the Division of Motor Vehicles to suspend the driver's driving " +
      "privileges until a settlement has been reached.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 9 - Accidents and Financial Responsibility, Financial Responsibility (page " +
      "32)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=38",
  },
  {
    key: "sr22",
    quote:
      "New Hampshire law may also require a driver to carry insurance for several years " +
      "after having an uninsured accident in the form of an SR-22 certificate being filed " +
      "by an insurance company.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 9 - Accidents and Financial Responsibility, Financial Responsibility (page " +
      "32)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=38",
  },
  {
    key: "emergency-think",
    quote:
      "Drivers should always think before taking action. A panic reaction could result in " +
      "making the situation worse.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 10 - Driving Emergencies (page 34)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=40",
  },
  {
    key: "abs",
    quote:
      "Vehicles equipped with ABS (Anti-lock Braking System) will allow a driver to stop " +
      "the vehicle without skidding and keep steering control.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 10 - Driving Emergencies, Braking (page 34)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=40",
  },
  {
    key: "abs-pressure",
    quote:
      "Drivers should press on the brake pedal and keep applying pressure. ABS will work " +
      "only if the driver keeps the pressure on the brake pedal.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 10 - Driving Emergencies, Braking (page 34)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=40",
  },
  {
    key: "abs-vibrate",
    quote: "A driver may feel the pedal vibrate and hear a clicking noise, which is normal.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 10 - Driving Emergencies, Braking (page 34)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=40",
  },
  {
    key: "swerving",
    quote:
      "Steer in the direction they want to go, but try to avoid other traffic - never " +
      "swerve to the left to avoid a crash.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 10 - Driving Emergencies, Swerving (page 34)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=40",
  },
  {
    key: "swerving-recover",
    quote:
      "Once the problem has cleared, steer in the opposite direction to straighten out " +
      "and gain control.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 10 - Driving Emergencies, Swerving (page 34)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=40",
  },
  {
    key: "accelerating-escape",
    quote:
      "ACCELERATING It may be necessary for a driver to accelerate to avoid a collision. " +
      "This may happen when another vehicle is about to be hit from behind or from the " +
      "side.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 10 - Driving Emergencies, Accelerating (page 34)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=40",
  },
  {
    key: "skid-cause",
    quote:
      "Skidding is caused when a driver is traveling too fast for conditions, stops too " +
      "suddenly or when the tires can no longer grip the roadway.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 10 - Driving Emergencies, Dealing with Skids (page 34)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=40",
  },
  {
    key: "skid-steer",
    quote:
      "Steer in the direction that the rear of the vehicle is sliding. This will allow " +
      "the vehicle to go straight instead of sideways.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 10 - Driving Emergencies, Dealing with Skids (page 34)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=40",
  },
  {
    key: "skid-recover",
    quote:
      "Once the vehicle stops skidding, straighten the front wheels and steer back in the " +
      "original direction of travel.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 10 - Driving Emergencies, Dealing with Skids (page 34)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=40",
  },
  {
    key: "drop-off",
    quote:
      "Drivers should avoid panic steering back onto the pavement. If the vehicle leaves " +
      "the paved road surface, drivers should slow down gradually and turn back onto the " +
      "pavement when it is safe to do so.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 10 - Driving Emergencies, Uneven Surface Drop-Offs (page 34)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=40",
  },
  {
    key: "brake-failure",
    quote:
      "Engage the parking brake. Pull on the parking brake handle in the center console " +
      "or push the parking brake foot pedal slowly to avoid locking the rear wheels and " +
      "causing a skid. Be ready to release the brake if the vehicle starts to skid.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 10 - Driving Emergencies, Brake Failure (page 35)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=41",
  },
  {
    key: "brake-failure-engine",
    quote:
      "If engaging the brake does not work, turn off the engine and look for a safe place " +
      "to slow to a stop off the roadway.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 10 - Driving Emergencies, Brake Failure (page 35)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=41",
  },
  {
    key: "blowout-front-rear",
    quote:
      "If a front tire blows out, the vehicle will pull sharply in the direction of the " +
      "blowout. If a rear tire blows out, the vehicle will wobble, shake and pull some in " +
      "the direction of the blowout.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 10 - Driving Emergencies, Tire Blowout (page 35)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=41",
  },
  {
    key: "blowout-response",
    quote:
      "Grip the steering wheel firmly and keep the vehicle going straight. Slow down " +
      "gradually by relieving pressure on the accelerator pedal. Allow the vehicle to " +
      "slow by itself or brake gently if necessary.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 10 - Driving Emergencies, Tire Blowout (page 35)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=41",
  },
  {
    key: "power-failure",
    quote:
      "Keep a strong grip on the steering wheel. Be aware that the steering wheel may be " +
      "difficult to turn. Do not brake hard, brake with steady pressure on the pedal, " +
      "slow down then pull off the roadway.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 10 - Driving Emergencies, Power Failure (page 35)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=41",
  },
  {
    key: "stuck-accelerator",
    quote:
      "Shift the vehicle into the neutral gear. Brake firmly to counteract the effects of " +
      "the acceleration.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 10 - Driving Emergencies, Stuck Accelerator (page 35)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=41",
  },
  {
    key: "headlight-failure",
    quote:
      "If the headlights on the vehicle suddenly go out, drivers should: Try the turn " +
      "signals or emergency flashers. Pull off the road as quickly and safely as possible " +
      "and leave the emergency flashers on.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 10 - Driving Emergencies, Headlight failure (page 35)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=41",
  },
  {
    key: "breakdown-flares",
    quote:
      "Try to give other drivers some time to change lanes if necessary by leaving the " +
      "emergency flashers on and if available, by placing emergency flares or reflectors " +
      "200 feet in front of and behind the vehicle.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 10 - Driving Emergencies, Vehicle Breakdown (page 35)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=41",
  },
  {
    key: "breakdown-white-cloth",
    quote:
      "If no cell phone or device is available, raise the hood of the vehicle and tie a " +
      "white cloth (red in a snowstorm) to the driver's door handle or the vehicle's " +
      "antenna, which alerts drivers that help is needed.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 10 - Driving Emergencies, Vehicle Breakdown (page 35)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=41",
  },
  {
    key: "breakdown-stay",
    quote:
      "If possible, stay with the vehicle until help arrives. If the vehicle is in a " +
      "hazardous location, get all passengers out of the vehicle and well away from " +
      "traffic.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 10 - Driving Emergencies, Vehicle Breakdown (page 35)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=41",
  },
  {
    key: "pedestrian-deaths",
    quote:
      "Vehicle-Pedestrian collisions account for nearly 20 percent of all traffic deaths " +
      "each year.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, Pedestrians (page 36)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=42",
  },
  {
    key: "pedestrian-care",
    quote:
      "Drivers must use extreme care to avoid colliding with a pedestrian, especially in " +
      "areas such as school zones, bus stops, playgrounds and parks.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, Pedestrians (page 36)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=42",
  },
  {
    key: "pedestrian-yield-always",
    quote:
      "Pedestrians are difficult to see and it is difficult to determine their " +
      "intentions. Drivers should be prepared to yield to pedestrians at all times.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, Pedestrians (page 36)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=42",
  },
  {
    key: "pedestrian-row",
    quote:
      "Pedestrians have the right of way when they are: In a crosswalk Using a sidewalk, " +
      "crossing an alley entrance or driveway Visually impaired and crossing the street " +
      "guided by a service animal or carrying a white cane with a red tip.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, Pedestrians (page 36)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=42",
  },
  {
    key: "pedestrian-walk-left",
    quote:
      "Walk on the left side of the roadway facing oncoming traffic when walking on the " +
      "side of the road where there is no sidewalk.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, Pedestrians (page 36)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=42",
  },
  {
    key: "pedestrian-night-clothing",
    quote:
      "Always wear white or light colored clothing or carry a light when walking at night " +
      "Never walk on interstate or limited access highways",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, Pedestrians (page 36)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=42",
  },
  {
    key: "pedestrian-parked-cars",
    quote:
      "Driving next to parked or stopped vehicles as pedestrians can walk out between " +
      "vehicles.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, Pedestrians (page 36)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=42",
  },
  {
    key: "school-crossing-guard",
    quote:
      "At a school crossing where there is a crossing guard, drivers should stop and " +
      "yield if they are signaled to do so.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, Pedestrians (page 36)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=42",
  },
  {
    key: "white-cane-stop",
    quote:
      "New Hampshire law requires drivers to come to a complete stop whenever a person " +
      "who is carrying a white cane (the international symbol of blindness) or using a " +
      "harnessed guide dog is attempting to cross a roadway.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, Visually Impaired/Blind Pedestrians (page 36)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=42",
  },
  {
    key: "white-cane-listen",
    quote:
      "The person who is visually impaired listens to determine if a vehicle has stopped " +
      "moving before proceeding into the roadway.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, Visually Impaired/Blind Pedestrians (page 36)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=42",
  },
  {
    key: "white-cane-no-horn",
    quote:
      "Drivers must come to a complete stop and use extra caution when proceeding, and " +
      "should NEVER honk the horn or yell at a person who is visually impaired.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, Visually Impaired/Blind Pedestrians (page 36)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=42",
  },
  {
    key: "bicycles-are-vehicles",
    quote:
      "Bicycles are considered vehicles when on roadways. Bicyclists are required and " +
      "expected to obey all traffic laws and regulations as motorized vehicles and have " +
      "the same rights, privileges and responsibilities as any driver on the roadway.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, Bicyclists (page 36)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=42",
  },
  {
    key: "bicycle-3-feet",
    quote:
      "The distance shall be presumed to be reasonable and prudent if it is at least 3 " +
      "feet when the vehicle is traveling at 30 miles per hour or less, with one " +
      "additional New Hampshire Driver's Manual 37 foot of clearance required for every " +
      "10 miles per hour above 30 miles per hour.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, Bicyclists (page 37)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=43",
  },
  {
    key: "bicycle-lane-yield",
    quote:
      "Yield right of way when a bicycle path or bike lane intersects a road. Do not " +
      "stop, park, or drive on a designated bicycle path or lane unless you are entering " +
      "or leaving an alley or driveway, performing official duties, directed by a police " +
      "officer or an emergency situation exists.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, Bicyclists (page 37)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=43",
  },
  {
    key: "bicycle-turn",
    quote:
      "Allow as much space as possible and slow down when approaching or passing a " +
      "bicyclist. You should slow down and let the cyclist clear the intersection before " +
      "making your turn.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, Bicyclists (page 37)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=43",
  },
  {
    key: "bicycle-braking",
    quote:
      "Avoid slowing down or stopping quickly. A motor vehicle's brakes are more powerful " +
      "than a bicycle's and you could cause a crash.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, Bicyclists (page 37)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=43",
  },
  {
    key: "bicycle-horn",
    quote:
      "Avoid sounding your horn close to bicyclists unless there is a chance of a crash. " +
      "Sounding your horn to alert your presence may startle bicyclists and cause them to " +
      "steer into your path and crash.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, Bicyclists (page 37)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=43",
  },
  {
    key: "bicycle-hand-signals",
    quote:
      "They are required to use hand signals when turning and stopping. However, keep in " +
      "mind that bicyclists may be unable to signal if road or traffic conditions require " +
      "them to keep both hands on the handlebars.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, Bicyclists (page 37)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=43",
  },
  {
    key: "bicycle-door",
    quote:
      "When parked on the street, check to the sides and rear for bicyclists before you " +
      "open your door.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, Bicyclists (page 37)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=43",
  },
  {
    key: "motorcycle-rights",
    quote:
      "Motorcyclists have the same rights and responsibilities on New Hampshire's " +
      "roadways as other drivers.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, Motorcycles (page 37)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=43",
  },
  {
    key: "motorcycle-narrow",
    quote:
      "However, because most motorcycles are only about two feet wide, a motorcycle may " +
      "not be easily identifiable in traffic, they can be easily hidden in a vehicle's " +
      "blind spot. It is sometimes difficult to judge how fast they are traveling.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, Motorcycles (page 37)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=43",
  },
  {
    key: "motorcycle-lane",
    quote:
      "Never attempt to share a lane with a motorcycle. Motorcycles are entitled to the " +
      "same full lane width as all other vehicles.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, Motorcycles (page 37)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=43",
  },
  {
    key: "motorcycle-left-turn",
    quote:
      "Always carefully check oncoming traffic for motorcycles before taking a left turn " +
      "across traffic and know its speed before making the turn.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, Motorcycles (page 37)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=43",
  },
  {
    key: "motorcycle-four-seconds",
    quote:
      "Be sure to allow at least four seconds following distance when behind a " +
      "motorcycle.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, Motorcycles (page 37)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=43",
  },
  {
    key: "motorcycle-signals",
    quote:
      "Be aware that most motorcycles do not have automatic cancel for turn signals. " +
      "Before taking a turn in front of a motorcycle with its turn signal on, be sure the " +
      "rider is actually turning.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, Motorcycles (page 37)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=43",
  },
  {
    key: "motorcycle-crosswinds",
    quote:
      "Cross winds Windy conditions can move a motorcycle out of its lane of travel. " +
      "Areas to look out for are wide open, long stretches of highway and bridges.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, Motorcycles (page 38)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=44",
  },
  {
    key: "motorcycle-bridges",
    quote:
      "Metal or grated bridges Motorcyclists may experience a wobbling sensation when " +
      "traveling over metal or grated bridges.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, Motorcycles (page 38)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=44",
  },
  {
    key: "slow-moving-triangle",
    quote:
      "A fluorescent or reflective orange and red triangle displayed on the rear of " +
      "vehicles drawn by animals, farm equipment or construction equipment means the " +
      "vehicle is traveling less than 25 mph.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, Slow Moving Vehicles (page 38)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=44",
  },
  {
    key: "farm-machinery",
    quote:
      "Farm machinery - Watch for tractors, combines and other farm equipment moving " +
      "across the road and traveling on state highways in rural areas. Pass with caution " +
      "and remember the operator of the farm machinery cannot hear approaching vehicles. " +
      "Do not attempt to pass until it is safe to do so.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, Slow Moving Vehicles (page 38)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=44",
  },
  {
    key: "horses",
    quote:
      "Drivers approaching any horse shall take every precaution to prevent frightening " +
      "the horse. Drivers should reduce speed, assess the situation and pass with " +
      "caution, and never use the horn or \"rev\" the engine.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, Slow Moving Vehicles (page 38)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=44",
  },
  {
    key: "trucks-less-maneuverable",
    quote:
      "Commercial vehicles are generally larger vehicles and less maneuverable than a " +
      "car. These vehicles have much larger blind spots than cars. They have longer " +
      "stopping and accelerating distances and need more room to turn.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 11 - Sharing the Road, Interacting with Large Trucks and Commercial " +
      "Vehicles (page 38)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=44",
  },
  {
    key: "no-zone",
    quote:
      "The No-Zone is the area around large trucks or buses where vehicles disappear from " +
      "the commercial driver's view into blind spots. These blind spots are on the sides, " +
      "rear and front of the large vehicle.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, The No-Zone (page 38)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=44",
  },
  {
    key: "side-no-zone",
    quote:
      "Trucks have a large blind spot on their right side starting behind the cab and " +
      "extending up to the length of the truck. It's important for a driver to know that " +
      "if the truck driver's face cannot be seen in the side view mirror, then the truck " +
      "driver cannot see the other vehicle.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, The No-Zone (page 39)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=45",
  },
  {
    key: "truck-335-feet",
    quote:
      "A loaded truck with good tires and properly adjusted brakes, under ideal " +
      "conditions, traveling at 55 mph requires a minimum of 335 feet before coming to a " +
      "complete stop, or greater than 1½ times the stopping distance of a car.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, The No-Zone (page 39)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=45",
  },
  {
    key: "front-no-zone",
    quote:
      "Therefore, it is essential not to enter a roadway in front of a large vehicle or " +
      "change lanes in front of a large vehicle. When passing a large vehicle look for " +
      "the whole front of the vehicle in the rear-view mirror before pulling in front and " +
      "maintaining speed.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, The No-Zone (page 39)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=45",
  },
  {
    key: "rear-no-zone-200",
    quote:
      "Rear No-Zones - Unlike cars, large vehicles have huge blind spots directly behind " +
      "them that extend up to 200 feet.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, The No-Zone (page 39)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=45",
  },
  {
    key: "truck-right-lane-hills",
    quote:
      "When traveling up or down steep hills, large vehicles drive slowly and therefore " +
      "typically use the right lane. Avoid driving in the right lane, if possible, when " +
      "traveling up or down hills, as well as near truck weigh stations, where large " +
      "vehicles will be attempting to re-enter faster-moving traffic.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, The No-Zone (page 39)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=45",
  },
  {
    key: "truck-wide-right",
    quote:
      "When a truck or bus needs to make a right turn, they may need to swing wide to the " +
      "left in order to safely turn right and clear the corner of a curb or other " +
      "obstruction.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, Turning (page 39)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=45",
  },
  {
    key: "truck-squeeze",
    quote:
      "If a driver tries to get in between the truck or bus and the curb, the vehicle " +
      "will be squeezed in between them and could suffer a serious crash. To avoid a " +
      "crash, do not turn until the truck or bus has completed its turn.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, Turning (page 39)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=45",
  },
  {
    key: "meeting-truck",
    quote:
      "When meeting a truck coming from the opposite direction, keep as far as possible " +
      "to the right side of the roadway to avoid a sideswept crash and to reduce the wind " +
      "turbulence between the two vehicles, which pushes the vehicles apart.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, Turning (page 39)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=45",
  },
  {
    key: "truck-left-turn",
    quote:
      "When in doubt about the speed of an oncoming truck or bus, do not turn left in its " +
      "path. The truck or bus may be going too fast, and it takes a longer stopping " +
      "distance for them than a car.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, Turning (page 40)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=46",
  },
  {
    key: "stop-lines-trucks",
    quote:
      "Many intersections are marked with stop lines to show where drivers must come to a " +
      "complete stop. These stop lines help to set a vehicle farther back at an " +
      "intersection to give larger vehicles more turning space. Always stop behind stop " +
      "lines.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, Turning (page 40)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=46",
  },
  {
    key: "emergency-vehicle-pull-right",
    quote:
      "Right-of-way must be given to emergency vehicles when approaching from any " +
      "direction when they are sounding a siren or operating their flashing lights. " +
      "Drivers should drive immediately to the right side of the road and stop the " +
      "vehicle until the emergency has passed.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, Emergency Vehicles (page 40)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=46",
  },
  {
    key: "fire-truck-500",
    quote:
      "Drivers must not follow a fire truck closer than 500 feet when it is sounding a " +
      "siren or operating flashing lights. Drivers must not drive or park a vehicle " +
      "within the block where the fire truck has stopped to answer a fire alarm.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, Emergency Vehicles (page 40)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=46",
  },
  {
    key: "sherrills-law",
    quote:
      "New Hampshire's \"Sherrill's Law\" law (RSA 265:37-a) requires drivers to provide a " +
      "wide space or change into a lane not adjacent to certain situations if traffic " +
      "conditions allow to do so safely.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, When approaching a highway emergency (page 40)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=46",
  },
  {
    key: "move-over-duties",
    quote:
      "Maintain a reduced speed and if practical give a wide berth, without endangering " +
      "oncoming traffic, to public safety personnel, any persons in the roadway, and " +
      "vehicles displaying blue, red, or amber emergency, warning lights, or a stopped or " +
      "standing vehicle.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, When approaching a highway emergency (page 40)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=46",
  },
  {
    key: "move-over-vacate",
    quote: "Vacate any lane wholly or partially blocked, as soon as possible.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, When approaching a highway emergency (page 40)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=46",
  },
  {
    key: "traffic-stop-steps",
    quote:
      "Come to a complete stop and place the vehicle in park. Remain in the vehicle " +
      "unless requested to get out. Turn off the engine and turn on the hazard flashers " +
      "and if at night, the interior lights to help the officer see that everything is in " +
      "order inside the vehicle.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, Police/Traffic Stops (page 40)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=46",
  },
  {
    key: "traffic-stop-documents",
    quote:
      "When requested, locate and provide their driver's license, and vehicle " +
      "registration. If the officer asks the driver for these documents, tell the officer " +
      "where they are located and reach for them slowly with one hand on the wheel. " +
      "Answer the officer's questions fully and clearly.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, Police/Traffic Stops (page 41)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=47",
  },
  {
    key: "traffic-stop-unmarked",
    quote:
      "If the vehicle is unmarked, be sure it has its blue lights activated. If the " +
      "police officer is in plain clothes (no uniform), ask for identification such as a " +
      "badge or department identification card.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, Police/Traffic Stops (page 41)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=47",
  },
  {
    key: "work-zone-definition",
    quote:
      "A work zone is an area where roadwork takes place and may involve lane closures, " +
      "detours and moving equipment.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, Work Zones (page 41)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=47",
  },
  {
    key: "work-zone-slow-always",
    quote:
      "Always reduce speed in a work zone, even if there are no signs indicating a change " +
      "in speed limit within the work zone. The narrower lanes and rough pavement can " +
      "create hazardous conditions.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, Work Zones (page 41)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=47",
  },
  {
    key: "work-zone-end",
    quote:
      "Observe the posted work zone signs and do not resume normal speed until the \"End " +
      "Road Work\" sign is visible.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, Work Zones (page 41)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=47",
  },
  {
    key: "work-zone-night",
    quote:
      "Use extreme caution when driving through a work zone at night whether workers are " +
      "present or not.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 11 - Sharing the Road, Work Zones (page 41)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=47",
  },
  {
    key: "rsa-basic-rule",
    quote:
      "No person shall drive a vehicle on a way at a speed greater than is reasonable and " +
      "prudent under the conditions and having regard to the actual and potential hazards " +
      "then existing.",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:60 - Basic Rule and Maximum Limits",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-60.htm",
  },
  {
    key: "rsa-speed-45-unimproved",
    quote: "45 miles per hour in any unimproved rural highway as defined in RSA 259:116-a.",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:60 - Basic Rule and Maximum Limits",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-60.htm",
  },
  {
    key: "rsa-speed-55-default",
    quote: "55 miles per hour in other locations, except as provided in (f);",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:60 - Basic Rule and Maximum Limits",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-60.htm",
  },
  {
    key: "rsa-work-zone-speed",
    quote:
      "On a portion of a highway where officers or employees of the agency having " +
      "jurisdiction of the same, or any contractor of the agency or their employees, are " +
      "at work on the roadway or so close thereto as to be endangered by passing traffic, " +
      "at a speed of at least 10 miles per hour below the usual posted limit.",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:60 - Basic Rule and Maximum Limits",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-60.htm",
  },
  {
    key: "rsa-following-fine",
    quote:
      "The driver of a vehicle shall not follow another vehicle more closely than is " +
      "reasonable and prudent, having due regard for the speed of such vehicles and the " +
      "traffic upon and the condition of the way.",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:25 - Following Too Closely",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-25.htm",
  },
  {
    key: "rsa-following-fine-100",
    quote: "The fine for a violation of this section shall be $100.",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:25 - Following Too Closely",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-25.htm",
  },
  {
    key: "rsa-signal-100",
    quote:
      "A signal of intention to turn right or left when required shall be given " +
      "continuously during not less than the last 100 feet traveled by the vehicle before " +
      "turning.",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:45 - Turning Movements and Required Signals",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-45.htm",
  },
  {
    key: "rsa-signal-slowing",
    quote:
      "No person shall stop or suddenly decrease the speed of a vehicle without first " +
      "giving an appropriate signal in the manner provided herein to the driver of any " +
      "vehicle immediately to the rear when there is opportunity to give such signal.",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:45 - Turning Movements and Required Signals",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-45.htm",
  },
  {
    key: "rsa-uturn-500",
    quote:
      "No vehicle shall be turned so as to proceed in the opposite direction upon any " +
      "curve, or upon the approach to or near the crest of a grade, where such vehicle " +
      "cannot be seen by the driver of any other vehicle approaching from either " +
      "direction within 500 feet.",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:43 - Turning on Curve or Crest of Grade Prohibited",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-43.htm",
  },
  {
    key: "rsa-park-hydrant",
    quote:
      "Within 15 feet of a fire hydrant; (c) Within 20 feet of a crosswalk at an " +
      "intersection;",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:69 - Stopping, Standing or Parking Prohibited in Specified Places",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-69.htm",
  },
  {
    key: "rsa-park-stop-sign",
    quote:
      "Within 30 feet upon the approach to any flashing signal, stop sign, or traffic " +
      "control signal located at the side of a roadway;",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:69 - Stopping, Standing or Parking Prohibited in Specified Places",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-69.htm",
  },
  {
    key: "rsa-park-fire-station",
    quote:
      "Within 20 feet of the driveway entrance to any fire station and on the side of a " +
      "street opposite the entrance to any fire station within 75 feet of said entrance " +
      "when properly signposted;",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:69 - Stopping, Standing or Parking Prohibited in Specified Places",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-69.htm",
  },
  {
    key: "rsa-park-railroad-50",
    quote: "Within 50 feet of the nearest rail of a railroad crossing;",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:69 - Stopping, Standing or Parking Prohibited in Specified Places",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-69.htm",
  },
  {
    key: "rsa-park-accessible-fine",
    quote:
      "a person who violates the provisions of this subparagraph, except if subject to " +
      "RSA 265:74, II, shall be fined a minimum of $500 plus penalty assessment of which " +
      "50 percent is payable to the town or city where the violation occurred;",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:69 - Stopping, Standing or Parking Prohibited in Specified Places",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-69.htm",
  },
  {
    key: "rsa-unattended-vehicle",
    quote:
      "No person driving or in charge of a vehicle shall permit it to stand unattended " +
      "without first stopping the engine, locking the ignition, removing the key, and " +
      "effectively setting the brake thereon and, when standing upon any grade, turning " +
      "the front wheels to the curb or side of the way,",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:72 - Unattended Vehicle",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-72.htm",
  },
  {
    key: "rsa-school-bus-25",
    quote:
      "which has stopped on the highway for the purpose of receiving or discharging " +
      "school children shall stop his or her vehicle before reaching such school bus at " +
      "least 25 feet away from such school bus.",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:54 - Overtaking and Passing School Bus",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-54.htm",
  },
  {
    key: "rsa-school-bus-fine",
    quote:
      "a person who violates the provisions of paragraph I shall be guilty of a violation " +
      "and shall be fined $150 plus penalty assessment for a first offense, and shall be " +
      "fined not less than $250 nor more than $1,000 for a subsequent offense.",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:54 - Overtaking and Passing School Bus",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-54.htm",
  },
  {
    key: "rsa-school-bus-divided",
    quote:
      "The driver of a vehicle upon a divided highway with separate roadways need not " +
      "stop when meeting or passing a school bus which is traveling in the opposite " +
      "direction on the other half of the divided highway,",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:54 - Overtaking and Passing School Bus",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-54.htm",
  },
  {
    key: "rsa-school-bus-right",
    quote:
      "no driver of a vehicle who is required to stop his or her vehicle in accordance " +
      "with paragraph I shall overtake and pass a school bus on the right. A person who " +
      "violates the provisions of this paragraph shall be guilty of a violation and shall " +
      "be fined $500 plus penalty assessment.",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:54 - Overtaking and Passing School Bus",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-54.htm",
  },
  {
    key: "rsa-school-bus-five",
    quote:
      "Whenever road conditions and space permit and whenever the number of vehicles " +
      "following a moving school bus is 5 or more, the driver of the school bus shall " +
      "pull over and let the following vehicles pass.",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:54 - Overtaking and Passing School Bus",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-54.htm",
  },
  {
    key: "rsa-move-over-fine",
    quote:
      "Any person violating this section shall be fined $75 plus penalty assessment for a " +
      "first offense and $250 plus penalty assessment for a subsequent offense in a " +
      "12-month period.",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:37-a - Motorist Duties When Approaching Highway Emergencies",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-37-a.htm",
  },
  {
    key: "rsa-pass-return-200",
    quote:
      "In every event the overtaking vehicle must return to an authorized lane of travel " +
      "as soon as practicable and in the event the passing movement involves the use of a " +
      "lane authorized for vehicles approaching from the opposite direction, before " +
      "coming within 200 feet of any approaching vehicle.",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:20 - Limitations on Overtaking on the Left",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-20.htm",
  },
  {
    key: "rsa-no-left-of-center",
    quote:
      "When approaching within 100 feet of or traversing any intersection or railroad " +
      "grade crossing, unless otherwise indicated; (c) When the view is obstructed upon " +
      "approaching within 100 feet of any bridge, viaduct or tunnel.",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:21 - Further Limitations on Driving to Left of Center of Roadway",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-21.htm",
  },
  {
    key: "rsa-pass-right",
    quote:
      "The driver of a vehicle may overtake and pass on the right of another vehicle only " +
      "under the following conditions: I. When the vehicle overtaken is making or about " +
      "to make a left turn;",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:19 - When Overtaking on the Right is Permitted",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-19.htm",
  },
  {
    key: "rsa-pass-right-off-road",
    quote: "Such movement shall not be made by driving off the roadway.",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:19 - When Overtaking on the Right is Permitted",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-19.htm",
  },
  {
    key: "rsa-drive-right",
    quote:
      "Upon all roadways any vehicle proceeding at less than the normal speed of traffic " +
      "at the time and place and under the conditions then existing shall be driven in " +
      "the right-hand lane then available for traffic, or as close as practicable to the " +
      "right-hand curb or edge of the roadway,",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:16 - Drive on Right Side of Roadway; Exceptions",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-16.htm",
  },
  {
    key: "rsa-left-lane-camping",
    quote:
      "Motor vehicles shall not be operated continuously in the left lane of a multilane " +
      "roadway whenever it impedes the flow of other traffic at or below the posted speed " +
      "limit unless reasonable and prudent under the conditions having regard to the " +
      "actual and potential hazards then existing.",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:16 - Drive on Right Side of Roadway; Exceptions",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-16.htm",
  },
  {
    key: "rsa-solid-line",
    quote:
      "no driver of a vehicle shall, while proceeding along a way, drive any part of such " +
      "vehicle to the left of or across an unbroken painted line marked on the way by " +
      "order of or with the approval of the said commissioner, except as herein otherwise " +
      "provided",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:22 - Highway Markings",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-22.htm",
  },
  {
    key: "rsa-solid-line-bicycle",
    quote:
      "In order to pass a pedestrian, a motorized wheelchair, a mobility scooter or " +
      "device, or a device moved by human power, including a bicycle, skateboard, or " +
      "foot-scooter, provided such movement can be made safely;",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:22 - Highway Markings",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-22.htm",
  },
  {
    key: "rsa-stop-sign-where",
    quote:
      "every driver of a vehicle approaching a stop intersection indicated by a stop sign " +
      "shall stop before entering the crosswalk on the near side of the intersection or, " +
      "in the event there is no crosswalk, shall stop at a clearly marked stop line,",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:31 - Stop Signs; Yield Signs",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-31.htm",
  },
  {
    key: "rsa-yield-sign",
    quote:
      "The driver of a vehicle approaching a yield sign shall in obedience to such sign " +
      "slow down to a speed reasonable for the existing conditions and shall yield the " +
      "right of way to any vehicle in the intersection or approaching on another highway " +
      "so closely as to constitute an immediate hazard",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:30 - Vehicle Entering Stop or Yield Intersection or Highway",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-30.htm",
  },
  {
    key: "rsa-yield-collision",
    quote:
      "If such a driver is involved in a collision with a vehicle in the intersection " +
      "after driving past a yield sign without yielding, such collision shall be deemed " +
      "prima facie evidence of his failure to yield right of way.",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:30 - Vehicle Entering Stop or Yield Intersection or Highway",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-30.htm",
  },
  {
    key: "rsa-ramp-yield",
    quote:
      "The driver of a vehicle using an entrance ramp onto a highway shall yield to the " +
      "vehicles on the highway, regardless of whether there is a yield sign on the " +
      "entrance ramp.",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:30 - Vehicle Entering Stop or Yield Intersection or Highway",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-30.htm",
  },
  {
    key: "rsa-dead-signal",
    quote:
      "When a traffic control device is not operational, the driver shall obey the rules " +
      "of the road applicable to intersections without traffic control devices or " +
      "intersections with 4-way stop signs,",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:9 - Obedience to Any Required Traffic Control Devices",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-9.htm",
  },
  {
    key: "rsa-crosswalk-yield",
    quote:
      "When traffic control signals are not in place or not in operation the driver of a " +
      "vehicle shall yield the right of way, slowing down or stopping if need be to so " +
      "yield, to a pedestrian crossing the roadway within a crosswalk",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:35 - Pedestrian's Right of Way in Crosswalks",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-35.htm",
  },
  {
    key: "rsa-no-pass-stopped-crosswalk",
    quote:
      "Whenever any vehicle is stopped at a marked crosswalk or at any unmarked crosswalk " +
      "at an intersection to permit a pedestrian to cross the roadway, the driver of any " +
      "other vehicle approaching from the rear shall not overtake and pass such stopped " +
      "vehicle.",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:35 - Pedestrian's Right of Way in Crosswalks",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-35.htm",
  },
  {
    key: "rsa-pedestrian-sudden",
    quote:
      "No pedestrian shall suddenly leave a curb or other place of safety and walk or run " +
      "into the path of a vehicle which is so close as to constitute an immediate hazard.",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:35 - Pedestrian's Right of Way in Crosswalks",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-35.htm",
  },
  {
    key: "rsa-due-care",
    quote:
      "every driver of a vehicle shall exercise due care to avoid colliding with any " +
      "pedestrian or any person propelling a human-powered vehicle and shall give an " +
      "audible signal when necessary and shall exercise proper precaution upon observing " +
      "any child or any obviously confused, incapacitated or intoxicated person.",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:37 - Drivers to Exercise Due Care",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-37.htm",
  },
  {
    key: "rsa-railroad-stop-signs",
    quote:
      "When such stop signs are erected the driver of any vehicle shall stop within 50 " +
      "feet but not less than 15 feet from the nearest rail of such railroad and shall " +
      "proceed only upon exercising due care.",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:49 - All Vehicles Must Stop at Certain Railroad Grade Crossings",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-49.htm",
  },
  {
    key: "rsa-railroad-certain-vehicles",
    quote:
      "The driver of any vehicle carrying passengers for hire, or of any school bus " +
      "carrying any school child, or of any vehicle carrying explosive substances, before " +
      "crossing at grade any track or tracks of a railroad, shall stop such vehicle " +
      "within 50 feet but not less than 15 feet from the nearest rail of such railroad",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:50 - Certain Vehicles Must Stop at All Railroad Grade Crossings",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-50.htm",
  },
  {
    key: "rsa-railroad-no-gears",
    quote:
      "the driver of any said vehicle shall cross only in such gear of the vehicle that " +
      "there will be no necessity for changing gears while traversing such crossing and " +
      "the driver shall not shift gears while crossing the track or tracks.",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:50 - Certain Vehicles Must Stop at All Railroad Grade Crossings",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-50.htm",
  },
  {
    key: "rsa-lighting-period",
    quote:
      "Every vehicle or combination of vehicles, whether stationary or in motion, on any " +
      "way or bridge, shall have attached to it a light or lights, which shall be so " +
      "displayed as to be visible from the front and rear, during the period from 1/2 " +
      "hour after sunset to 1/2 hour before sunrise.",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:109 - Period of Lighting",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-109.htm",
  },
  {
    key: "rsa-phone-ear",
    quote:
      "An operator of a motor vehicle who holds a cellular telephone or other electronic " +
      "device capable of voice communication in the immediate proximity of his or her ear " +
      "while such vehicle is in motion is presumed to be engaging in a call within the " +
      "meaning of this section.",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:79-c - Use of Mobile Electronic Devices While Driving",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-79-c.htm",
  },
  {
    key: "rsa-phone-fine",
    quote:
      "Any person who violates this section shall be guilty of a violation and shall be " +
      "fined $100 plus penalty assessment for a first offense, $250 plus penalty " +
      "assessment for a second offense, and $500 plus penalty assessment for any " +
      "subsequent offense within a 24-month period.",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:79-c - Use of Mobile Electronic Devices While Driving",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-79-c.htm",
  },
  {
    key: "rsa-phone-pulled-over",
    quote:
      "\"Driving,\" for the purposes of this section, shall not include when a person is " +
      "behind the controls of a vehicle that has pulled to the side of or off the road at " +
      "a location where it is legal to do so and where the vehicle remains stationary.",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:79-c - Use of Mobile Electronic Devices While Driving",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-79-c.htm",
  },
  {
    key: "rsa-phone-gps",
    quote:
      "Nothing in this section shall prohibit a driver, regardless of age, from receiving " +
      "aural routing information from a hands-free global positioning device or " +
      "navigation service through a mobile electronic device;",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:79-c - Use of Mobile Electronic Devices While Driving",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-79-c.htm",
  },
  {
    key: "rsa-under-18-phone-penalty",
    quote:
      "A person violating this paragraph shall be subject to the fines in paragraph III " +
      "and license suspension or revocation under RSA 263:14, III.",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:79-c - Use of Mobile Electronic Devices While Driving",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-79-c.htm",
  },
  {
    key: "rsa-child-rear-facing",
    quote:
      "No person shall drive a motor vehicle on any way while carrying as a passenger a " +
      "person less than 2 years of age unless such passenger is properly fastened and " +
      "secured by a rear facing child restraint system which is in accordance with safety " +
      "standards.",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:107-a - Child Passenger Restraints Required",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-107-a.htm",
  },
  {
    key: "rsa-belt-under-18-driver",
    quote:
      "No person who is less than 18 years of age shall drive a motor vehicle or " +
      "autocycle on any way unless such person is wearing a seat or safety belt which is " +
      "properly adjusted and fastened.",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:107-a - Child Passenger Restraints Required",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-107-a.htm",
  },
  {
    key: "rsa-bicycle-3-feet",
    quote:
      "Every driver of a vehicle, when approaching a bicyclist, shall insure the safety " +
      "and protection of the bicyclist and shall exercise due care by leaving a " +
      "reasonable and prudent distance between the vehicle and the bicycle.",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:143-a - Drivers to Exercise Due Care When Approaching Bicycle",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-143-a.htm",
  },
  {
    key: "rsa-fire-apparatus-500",
    quote:
      "The driver of any vehicle other than one on official business shall not follow any " +
      "fire apparatus traveling in response to a fire alarm closer than 500 feet or drive " +
      "into or park such vehicle within the block where fire apparatus has stopped in " +
      "answer to a fire alarm.",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:100 - Following Fire Apparatus Prohibited",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-100.htm",
  },
  {
    key: "rsa-emergency-vehicle-privileges",
    quote:
      "Proceed past a red or stop signal or stop sign, but only after slowing down as may " +
      "be necessary for safe operation.",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:8 - Emergency Vehicles",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-8.htm",
  },
  {
    key: "rsa-emergency-vehicle-school-bus",
    quote:
      "any emergency vehicle approaching a school bus, which is stopped for the purpose " +
      "of picking up or dropping off pupils, shall come to a complete stop before " +
      "proceeding.",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:8 - Emergency Vehicles",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-8.htm",
  },
  {
    key: "rsa-negligent-driving",
    quote:
      "Whoever upon any way drives a vehicle negligently or causes a vehicle to be driven " +
      "negligently, as defined in RSA 626:2, II(d), or in a manner that endangers or is " +
      "likely to endanger any person or property shall be guilty of a violation and shall " +
      "be fined not less than $250 nor more than $500 for a first offense",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:79-b - Negligent Driving",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-79-b.htm",
  },
  {
    key: "rsa-approaching-horses",
    quote:
      "Every person having control or charge of a vehicle shall, whenever upon any way " +
      "and approaching any horse, drive, manage, and control such vehicle in such a " +
      "manner as to exercise every reasonable precaution to prevent the frightening of " +
      "such horse,",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:104 - Approaching Horses",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-104.htm",
  },
  {
    key: "rsa-exam-subjects",
    quote:
      "All license examinations shall be conducted by department of safety personnel and " +
      "shall include knowledge questions regarding distracted driving, driving under the " +
      "influence, and driving during poor weather conditions.",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 263:6 - Examination",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/263/263-6.htm",
  },
  {
    key: "rsa-driver-ed-16-17",
    quote:
      "An approved driver education course licensed under this chapter, shall consist of " +
      "not less than 30 hours of classroom instruction, not less than 10 hours of behind " +
      "the wheel driver training and not less than 6 hours of observation,",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 263:19 - Driver Education",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/263/263-19.htm",
  },
  {
    key: "rsa-lane-blockage",
    quote:
      "No person shall stop or park a vehicle in such manner as to impede or render " +
      "dangerous the use of the roadway by others except to avoid a collision, at the " +
      "direction of an authorized official, or in the event of a mechanical breakdown.",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:37-b - Avoidance of Lane Blockage",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-37-b.htm",
  },
  {
    key: "rsa-breakdown-move",
    quote:
      "If a vehicle stopped in the roadway is movable and its driver is capable of moving " +
      "it, the driver shall immediately move the vehicle to the shoulder or to another " +
      "safe area off of the traveled portion of the roadway.",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:37-b - Avoidance of Lane Blockage",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-37-b.htm",
  },
  {
    key: "rsa-urban-residence",
    quote:
      "\"Urban residence district\" shall mean the territory contiguous to a highway not " +
      "comprising a business district when the frontage on such highway for a distance of " +
      "300 feet or more is mainly occupied by dwellings or by dwellings and buildings in " +
      "use for business.",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 259:118 - Urban Residence District",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/259/259-118.htm",
  },
  {
    key: "rsa-rural-residence",
    quote:
      "\"Rural residence district\" shall mean the territory contiguous to a way not " +
      "comprising a business or urban residence district when the frontage on such way " +
      "for a distance of 1/2 mile or more is mainly occupied by dwellings or by dwellings " +
      "and buildings in use for business on any one side.",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 259:93 - Rural Residence District",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/259/259-93.htm",
  },
  {
    key: "rsa-dwi",
    quote:
      "While such person has an alcohol concentration of 0.08 or more or in the case of a " +
      "person under the age of 21, 0.02 or more.",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265-A:2 - Driving or Operating Under Influence of Drugs or Liquor",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265-A/265-A-2.htm",
  },
  {
    key: "rsa-aggravated-dwi",
    quote:
      "A person shall be guilty of aggravated driving while intoxicated if the person " +
      "drives, operates, or attempts to operate an OHRV, or if the person drives or " +
      "attempts to drive a vehicle upon any way, or if the person operates or attempts to " +
      "operate a boat:",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265-A:3 - Aggravated Driving While Intoxicated",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265-A/265-A-3.htm",
  },
  {
    key: "rsa-implied-consent",
    quote:
      "Any person who drives, operates, or attempts to operate an OHRV, drives or " +
      "attempts to drive a vehicle upon the ways of this state, or operates or attempts " +
      "to operate a boat upon the public waters of the state shall be deemed to have " +
      "given consent to physical tests and examinations",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265-A:4 - Implied Consent of Driver or Operator to Submit to Testing",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265-A/265-A-4.htm",
  },
  {
    key: "rsa-conduct-after-accident",
    quote:
      "The driver of a vehicle who knows or should have known that he or she has just " +
      "been involved in any accident which resulted in death, personal injury or damages " +
      "to property, shall immediately stop such vehicle at the scene of the accident",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 264:25 - Conduct After Accident",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/264/264-25.htm",
  },
  {
    key: "rsa-racing",
    quote:
      "No person shall drive any vehicle on a highway in any race, speed competition or " +
      "contest, drag race or acceleration contest, test of physical endurance, exhibition " +
      "of speed or acceleration, or for the purpose of making a speed record;",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:75 - Racing on Highways",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-75.htm",
  },
  {
    key: "rsa-emerging-driveway",
    quote:
      "The driver of a vehicle within a business or residence district emerging from an " +
      "alley, driveway or building shall stop such vehicle immediately prior to driving " +
      "onto a sidewalk or onto the sidewalk area extending across any alleyway or " +
      "driveway,",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:53 - Emerging From Alley, Driveway or Building",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-53.htm",
  },
  {
    key: "rsa-license-required",
    quote:
      "No person, except those expressly exempted under RSA 263:25 or other provisions of " +
      "this title, shall drive any motor vehicle upon any way in this state unless such " +
      "person has a valid driver's license, as required under the provisions of this " +
      "chapter, for the class or type of vehicle being driven.",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 263:1 - License Required; Penalty",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/263/263-1.htm",
  },
  {
    key: "rsa-never-licensed",
    quote:
      "Any person who drives a motor vehicle in this state and who has never had a " +
      "license shall be guilty of a class B misdemeanor.",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 263:1 - License Required; Penalty",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/263/263-1.htm",
  },
  {
    key: "rsa-bicycle-laws-apply",
    quote:
      "Every person propelling a vehicle by human power or riding a bicycle shall have " +
      "all of the rights and be subject to all of the duties applicable to the driver of " +
      "any other vehicle under the rules of the road,",
    source:
      "New Hampshire Revised Statutes Annotated, Title XXI: Motor Vehicles (New Hampshire " +
      "General Court)",
    section: "RSA 265:143 - Application of Motor Vehicle Laws to Bicycles",
    url: "https://www.gencourt.state.nh.us/rsa/html/XXI/265/265-143.htm",
  },
  {
    key: "web-pass-80",
    quote: "All knowledge exams require a passing grade of 80%.",
    source: "New Hampshire Division of Motor Vehicles, Department of Safety (dmv.nh.gov)",
    section: "NH DMV, Driver Licensing Testing Requirements",
    url: "https://www.dmv.nh.gov/drivers-licensenon-driver-ids/driver-licensing-testing-requirements",
  },
  {
    key: "web-test-terminate",
    quote:
      "Every knowledge test has a time limit based upon the number of questions. If you " +
      "exceed the time limit or miss too many questions, the test will automatically " +
      "terminate; you may request an appointment to retest no sooner than ten days from " +
      "the current date.",
    source: "New Hampshire Division of Motor Vehicles, Department of Safety (dmv.nh.gov)",
    section: "NH DMV, Driver Licensing Testing Requirements",
    url: "https://www.dmv.nh.gov/drivers-licensenon-driver-ids/driver-licensing-testing-requirements",
  },
  {
    key: "web-test-random",
    quote:
      "All knowledge exams are completely random, and you will not see the same exam if " +
      "you have to retake the test.",
    source: "New Hampshire Division of Motor Vehicles, Department of Safety (dmv.nh.gov)",
    section: "NH DMV, Driver Licensing Testing Requirements",
    url: "https://www.dmv.nh.gov/drivers-licensenon-driver-ids/driver-licensing-testing-requirements",
  },
  {
    key: "web-retest-10-days",
    quote:
      "All failed exams will have to wait ten (10) calendar days before they are allowed " +
      "to retest.",
    source: "New Hampshire Division of Motor Vehicles, Department of Safety (dmv.nh.gov)",
    section: "NH DMV, Driver Licensing Testing Requirements",
    url: "https://www.dmv.nh.gov/drivers-licensenon-driver-ids/driver-licensing-testing-requirements",
  },
  {
    key: "web-order-of-tests",
    quote:
      "Vision and knowledge tests must be successfully completed prior to scheduling a " +
      "road test. Road test availability varies between driver licensing locations.",
    source: "New Hampshire Division of Motor Vehicles, Department of Safety (dmv.nh.gov)",
    section: "NH DMV, Driver Licensing Testing Requirements",
    url: "https://www.dmv.nh.gov/drivers-licensenon-driver-ids/driver-licensing-testing-requirements",
  },
  {
    key: "web-road-test-scored",
    quote:
      "To pass the road test, you must be able to show you can drive a motor vehicle with " +
      "good control. During the road test you will be scored on: Skill in handling the " +
      "vehicle in traffic. Driving habits. Working knowledge and understanding of traffic " +
      "signs and rules of the road.",
    source: "New Hampshire Division of Motor Vehicles, Department of Safety (dmv.nh.gov)",
    section: "NH DMV, Driver Licensing Testing Requirements",
    url: "https://www.dmv.nh.gov/drivers-licensenon-driver-ids/driver-licensing-testing-requirements",
  },
  {
    key: "web-road-test-miss",
    quote:
      "If you miss your scheduled road test or cancel your test with less than 24 hours " +
      "notice, then you must wait 30 days to be retested.",
    source: "New Hampshire Division of Motor Vehicles, Department of Safety (dmv.nh.gov)",
    section: "NH DMV, Driver Licensing Testing Requirements",
    url: "https://www.dmv.nh.gov/drivers-licensenon-driver-ids/driver-licensing-testing-requirements",
  },
  {
    key: "web-vision-2040",
    quote:
      "To pass, you must be able to read the 20/40 vision line with both eyes. If you " +
      "wear glasses or contact lenses to pass the vision test, you are required to wear " +
      "them at all times while driving.",
    source: "New Hampshire Division of Motor Vehicles, Department of Safety (dmv.nh.gov)",
    section: "NH DMV, Driver Licensing Testing Requirements",
    url: "https://www.dmv.nh.gov/drivers-licensenon-driver-ids/driver-licensing-testing-requirements",
  },
  {
    key: "web-practice-conditions",
    quote:
      "The person learning to drive must be accompanied by a parent, legal guardian, or " +
      "other responsible licensed adult 25 years of age or older. The vehicle used for " +
      "practice must be a non-commercial vehicle.",
    source: "New Hampshire Division of Motor Vehicles, Department of Safety (dmv.nh.gov)",
    section: "NH DMV, Learning to Drive",
    url: "https://www.dmv.nh.gov/drivers-licensenon-driver-ids/apply-your-first-drivers-licensenon-driver-id/driver-education/learning-to-drive",
  },
  {
    key: "web-no-learner-permits",
    quote:
      "New Hampshire does not issue learner's permits; however, a person learning to " +
      "drive (regardless of the State they reside in) is permitted to drive under certain " +
      "conditions. Persons whose driving privileges are currently suspended or revoked in " +
      "NH or any other State, may not practice driving.",
    source: "New Hampshire Division of Motor Vehicles, Department of Safety (dmv.nh.gov)",
    section: "NH DMV, Learning to Drive",
    url: "https://www.dmv.nh.gov/drivers-licensenon-driver-ids/apply-your-first-drivers-licensenon-driver-id/driver-education/learning-to-drive",
  },
  {
    key: "web-supervisor-liable",
    quote:
      "The accompanying adult shall be liable for any motor vehicle violation committed " +
      "by the unlicensed driver.",
    source: "New Hampshire Division of Motor Vehicles, Department of Safety (dmv.nh.gov)",
    section: "NH DMV, Learning to Drive",
    url: "https://www.dmv.nh.gov/drivers-licensenon-driver-ids/apply-your-first-drivers-licensenon-driver-id/driver-education/learning-to-drive",
  },
  {
    key: "web-start-15-half",
    quote:
      "New Hampshire residents can start learning to drive at the age of 15½ but must be " +
      "at least 16 years old to apply for a driver license.",
    source: "New Hampshire Division of Motor Vehicles, Department of Safety (dmv.nh.gov)",
    section: "NH DMV, Driver Licensing Requirements for Minors",
    url: "https://www.dmv.nh.gov/drivers-licensenon-driver-ids/driver-licensing-requirements-minors",
  },
  {
    key: "web-under-18-requirements",
    quote:
      "Drivers under 18 years old must complete an approved Driver Education Program and " +
      "provide written permission from a parent or guardian in order to apply for a " +
      "driver license.",
    source: "New Hampshire Division of Motor Vehicles, Department of Safety (dmv.nh.gov)",
    section: "NH DMV, Driver Licensing Requirements for Minors",
    url: "https://www.dmv.nh.gov/drivers-licensenon-driver-ids/driver-licensing-requirements-minors",
  },
  {
    key: "web-youth-vertical",
    quote:
      "Youth Operator Licenses are oriented vertically rather than horizontally and have " +
      "the following statement on the face of the license: \"Under 21 until (date)\".",
    source: "New Hampshire Division of Motor Vehicles, Department of Safety (dmv.nh.gov)",
    section: "NH DMV, Driver Licensing Requirements for Minors",
    url: "https://www.dmv.nh.gov/drivers-licensenon-driver-ids/driver-licensing-requirements-minors",
  },
  {
    key: "web-no-permit-transfer",
    quote: "New Hampshire does not honor or transfer driving permits from other states.",
    source: "New Hampshire Division of Motor Vehicles, Department of Safety (dmv.nh.gov)",
    section: "NH DMV, Driver Licensing Requirements for Minors",
    url: "https://www.dmv.nh.gov/drivers-licensenon-driver-ids/driver-licensing-requirements-minors",
  },
  {
    key: "web-youth-restrictions",
    quote: "Shall not operate a motor vehicle between the hours of 1:00 a.m. and 4:00 a.m.",
    source: "New Hampshire Division of Motor Vehicles, Department of Safety (dmv.nh.gov)",
    section: "NH DMV, Driver Licensing Requirements for Minors",
    url: "https://www.dmv.nh.gov/drivers-licensenon-driver-ids/driver-licensing-requirements-minors",
  },
  {
    key: "web-two-speeding-sr22",
    quote:
      "If you get two or more speeding tickets as a youth operator driver in the first " +
      "two years of having the license, you shall be required to obtain an SR-22 " +
      "Insurance policy for three years from the date of your second hearing.",
    source: "New Hampshire Division of Motor Vehicles, Department of Safety (dmv.nh.gov)",
    section: "NH DMV, Driver Licensing Requirements for Minors",
    url: "https://www.dmv.nh.gov/drivers-licensenon-driver-ids/driver-licensing-requirements-minors",
  },
  {
    key: "web-driver-ed-hours",
    quote:
      "At least thirty (30) hours of classroom instruction with a certified driver " +
      "education instructor, At least ten (10) hours of practice driving with a certified " +
      "driver education instructor, At least six (6) hours of driving observation with a " +
      "certified driver education instructor.",
    source: "New Hampshire Division of Motor Vehicles, Department of Safety (dmv.nh.gov)",
    section: "NH DMV, Driver Education",
    url: "https://www.dmv.nh.gov/drivers-licensenon-driver-ids/apply-your-first-drivers-licensenon-driver-id/driver-education",
  },
  {
    key: "web-40-hours-night",
    quote:
      "In addition to the above, each student must log forty (40) additional hours of " +
      "supervised driving time with a parent, guardian, or other responsible adult prior " +
      "to applying for a driver license.",
    source: "New Hampshire Division of Motor Vehicles, Department of Safety (dmv.nh.gov)",
    section: "NH DMV, Driver Education",
    url: "https://www.dmv.nh.gov/drivers-licensenon-driver-ids/apply-your-first-drivers-licensenon-driver-id/driver-education",
  },
  {
    key: "web-10-hours-night",
    quote:
      "Included in the requirements for the forty (40) additional hours of supervised " +
      "driving time is at least ten (10) hours to be completed at night.",
    source: "New Hampshire Division of Motor Vehicles, Department of Safety (dmv.nh.gov)",
    section: "NH DMV, Driver Education",
    url: "https://www.dmv.nh.gov/drivers-licensenon-driver-ids/apply-your-first-drivers-licensenon-driver-id/driver-education",
  },
  {
    key: "web-drivered-age",
    quote:
      "students must be: 15 years and 9 months of age on or before the first regularly " +
      "scheduled classroom session of the course in which they are enrolled; or Their " +
      "16th birthday occurs on or before their last regularly scheduled classroom session " +
      "of the course in which they are enrolled.",
    source: "New Hampshire Division of Motor Vehicles, Department of Safety (dmv.nh.gov)",
    section: "NH DMV, Driver Education",
    url: "https://www.dmv.nh.gov/drivers-licensenon-driver-ids/apply-your-first-drivers-licensenon-driver-id/driver-education",
  },
  {
    key: "web-first-license-steps",
    quote:
      "Appropriate Fee Vision Test Knowledge Test Road Test will be scheduled once the " +
      "Knowledge Test is successfully completed.",
    source: "New Hampshire Division of Motor Vehicles, Department of Safety (dmv.nh.gov)",
    section: "NH DMV, Apply For Your First Drivers License",
    url: "https://www.dmv.nh.gov/drivers-licensenon-driver-ids/apply-your-first-drivers-licensenon-driver-id",
  },
  {
    key: "web-fees",
    quote:
      "Operator (not federally compliant) $50.00 REAL ID Operator (federally compliant) " +
      "$60.00 Youth Operator $10.00 per year up to age 21",
    source: "New Hampshire Division of Motor Vehicles, Department of Safety (dmv.nh.gov)",
    section: "NH DMV, Licensing Fees",
    url: "https://www.dmv.nh.gov/drivers-licensenon-driver-ids/licensing-fees",
  },
  {
    key: "driver-ed-40-hours",
    quote:
      "40 hours of additional supervised driving time with a parent, guardian or other " +
      "responsible adult, in which 10 hours must be completed at night.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 1 - Driving in New Hampshire, Licensing Requirements (page 1)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=7",
  },
  {
    key: "practice-supervisor",
    quote:
      "when accompanied by a parent; legal guardian; or a responsible adult who is 25 " +
      "years of age or older, and who is a licensed driver.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 1 - Driving in New Hampshire, Practice Driving (page 2)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=8",
  },
  {
    key: "youth-passengers",
    quote:
      "With more than one passenger less than 25 years of age who is not a member of the " +
      "driver's family unless accompanied by a licensed, responsible adult who is at " +
      "least 25 years of age during the first six (6) months holding the license; and " +
      "With more passengers than seat belts or safety restraints in the vehicle.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section:
      "Section 2 - Driver's License and Non-Driver ID Information, Specific Restrictions " +
      "for Youth Operators (page 4)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=10",
  },
  {
    key: "negligent-driving-penalty",
    quote:
      "Penalties for this offense can be $250.00 to $500.00 for the first offense with " +
      "increased penalties for subsequent offenses.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 4 - Before Driving, Snow and Ice Removal (page 13)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=19",
  },
  {
    key: "headlights-two-lamps",
    quote:
      "shall display at least 2 lighted lamps on the front; provided, however, that one " +
      "suitable lighted lamp on the front of a motorcycle shall be sufficient.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 5 - Basic Driving, Communicating and Signaling (page 15)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=21",
  },
  {
    key: "stop-lines-no-line",
    quote:
      "If there is no white stop line but only a crosswalk present, then drivers must " +
      "stop before the crosswalk. If no crosswalk lines are present, drivers should come " +
      "to a full stop prior to entering the intersection.",
    source:
      "New Hampshire Driver's Manual (NH Department of Safety, Division of Motor " +
      "Vehicles, DSMV 360, Rev. 11/25)",
    section: "Section 6 - Rules of the Road, Pavement Markings (page 23)",
    url: "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf#page=29",
  },
  {
    key: "web-same-day-road-test",
    quote:
      "A road test may be given on the same day as a knowledge test if same-day " +
      "appointments are available. If the schedule does not permit same day road testing, " +
      "the applicant will be given an appointment for a different day.",
    source: "New Hampshire Division of Motor Vehicles, Department of Safety (dmv.nh.gov)",
    section: "NH DMV, Driver Licensing Testing Requirements",
    url: "https://www.dmv.nh.gov/drivers-licensenon-driver-ids/driver-licensing-testing-requirements",
  },
  {
    key: "web-youth-passengers",
    quote:
      "Shall not operate a motor vehicle with more than one passenger less than 25 years " +
      "of age who is not a member of the driver's family unless accompanied by a " +
      "licensed, responsible adult who is at least 25 years of age during the first six " +
      "(6) months holding the license.",
    source: "New Hampshire Division of Motor Vehicles, Department of Safety (dmv.nh.gov)",
    section: "NH DMV, Driver Licensing Requirements for Minors",
    url: "https://www.dmv.nh.gov/drivers-licensenon-driver-ids/driver-licensing-requirements-minors",
  },
];
