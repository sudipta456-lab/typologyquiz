import type { HandbookExcerpt } from "../types";

// Short VERBATIM excerpts from the two authoritative Vermont sources, each one
// carrying its section and a deep link so a learner can open the passage the
// question was written from.
//
// Sources
//   1. Vermont Driver's Manual, 2025 edition, form VN-007, published by the
//      Vermont Department of Motor Vehicles (Agency of Transportation). 76-page
//      PDF; the #page= anchor on each URL is the PDF page, not the printed
//      folio, which runs one lower from page 2 onward.
//   2. Vermont Statutes Annotated, Title 23 (Motor Vehicles), as published by
//      the Vermont General Assembly on legislature.vermont.gov. Used wherever
//      the manual states a rule without the number the test still expects -
//      the parking distances, the signalling distance, the liability minimums,
//      the DUI thresholds, the school-bus stop.
//
// Permitted normalisations, and nothing else: curly punctuation folded to
// ASCII, runs of whitespace collapsed to single spaces, soft hyphens dropped,
// the section symbol spelled out as "Section", and a stem run together with
// its own bulleted or lettered list in the source's order. The source's own
// typos, spacing quirks and inconsistent capitalisation are left alone.
//
// Every quote below was cut from the extracted source text by machine and then
// re-checked by scripts/verify-excerpts.py, which proves each one is a
// contiguous substring of the official document. See tmp/vermont-verify.json.

export const vermontExcerpts: HandbookExcerpt[] = [
  {
    key: "test-online",
    quote:
      "The learner permit test is no longer taken in our office.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 1 - General Information",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=3",
  },
  {
    key: "test-online-website",
    quote:
      "It is an online test available on our website, mydmv.vermont.gov.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 1 - General Information",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=3",
  },
  {
    key: "test-20-questions",
    quote:
      "Knowledge test The knowledge test is online and has 20 questions.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - What are the Tests Like",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=19",
  },
  {
    key: "test-four-answers",
    quote:
      "Each question has four answers to choose from, of which only one is correct.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - What are the Tests Like",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=19",
  },
  {
    key: "test-pass-16",
    quote:
      "You must answer at least 16 questions correctly to pass the test.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - What are the Tests Like",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=19",
  },
  {
    key: "test-retake-one-day",
    quote:
      "If you fail the test, you must wait at least one day before taking another one. 3.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - What are the Tests Like",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=19",
  },
  {
    key: "test-no-manual",
    quote:
      "Please help reduce the cost to state government by returning this manual or passing it on to another future driver. THIS MANUAL MAY NOT BE USED DURING THE TEST",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 1 - General Information",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=4",
  },
  {
    key: "test-read-whole-manual",
    quote:
      "REMEMBER: Be sure to read the rest of the driver manual before taking your written test.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Driving Safely and Studying for Your Permit",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=26",
  },
  {
    key: "test-purpose-signs",
    quote:
      "Can you read and understand the road signs and lights used on the road?",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - Why Does the State Require Driving Tests",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=19",
  },
  {
    key: "test-purpose-laws",
    quote:
      "Do you know the laws about driving vehicles in this state?",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - Why Does the State Require Driving Tests",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=19",
  },
  {
    key: "test-vision-2040",
    quote:
      "If the results of the screening determine that your vision does not meet the required standards of 20/40, you will be referred to an eye doctor of your choice and expense for further testing.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - What are the Tests Like",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=19",
  },
  {
    key: "test-road-40-hours",
    quote:
      "Before the examination, you should have at least 40 hours of actual driving experience under the direction of an experienced driver or driving instructor.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - What are the Tests Like",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=19",
  },
  {
    key: "test-road-five-in-traffic",
    quote:
      "At least five hours of this should be in traffic.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - What are the Tests Like",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=19",
  },
  {
    key: "test-road-retake-week",
    quote:
      "If you fail the road test for any reason, you must wait at least one week before taking another test.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - What are the Tests Like",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=20",
  },
  {
    key: "test-road-three-fails",
    quote:
      "If you fail a road test three times, a minimum waiting period of one month is required.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - What are the Tests Like",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=20",
  },
  {
    key: "test-no-tricks",
    quote:
      "No tricks will be played on you.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - What are the Tests Like",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=20",
  },
  {
    key: "test-no-animals",
    quote:
      "No animals are allowed in the vehicle during a road test.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - What are the Tests Like",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=20",
  },
  {
    key: "test-fee-permit",
    quote:
      "Exam and Learner's Permit fee = $63.00 (knowledge test $39.00 + permit $24.00) Fees you must pay to get a Junior Driver's License if you have a valid Learner's Permit",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 6 - Fees",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=24",
  },
  {
    key: "test-drivevermont",
    quote:
      "You can use DriveVermont to learn the rules of the road and how to drive safely while you study for your Learner's Permit test.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 1 - General Information",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=3",
  },
  {
    key: "test-appointment",
    quote:
      "All DMV visits are by appointment only.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - Do I need an Appointment",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=18",
  },
  {
    key: "permit-age-15",
    quote:
      "You must be at least 15 years old to take the test.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - Questions and Answers about Learner's Permits",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=13",
  },
  {
    key: "permit-who-needs",
    quote:
      "If you are a Vermont resident and want to drive in Vermont, you will have to get a Vermont Learner's Permit.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - Questions and Answers about Learner's Permits",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=13",
  },
  {
    key: "permit-parent-signature",
    quote:
      "A parent or legal guardian must sign the application before you can take the test.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - Questions and Answers about Learner's Permits",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=13",
  },
  {
    key: "permit-clean-record-two-years",
    quote:
      "To apply for a Learner's Permit, an individual under the age of 18 must have maintained a 'clean' driving record in the previous two (2) years.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - Questions and Answers about Learner's Permits",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=13",
  },
  {
    key: "permit-issued-after-test",
    quote:
      "Your permit will be issued after you pass the online permit test and pay the required fees.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - Questions and Answers about Learner's Permits",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=13",
  },
  {
    key: "permit-supervision",
    quote:
      "With a valid Learner's Permit, you may drive anywhere, anytime in Vermont if there is a licensed and unimpaired parent or guardian, or a licensed or certified unimpaired driver education instructor or a licensed and unimpaired individual 25 years of age or older riding in the front seat.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - Questions and Answers about Learner's Permits",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=14",
  },
  {
    key: "permit-other-states",
    quote:
      "Before driving in any other state, you must contact that state's Motor Vehicle Department or law enforcement agency to see if it is legal to drive in that state with a Vermont Learner's Permit.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - Questions and Answers about Learner's Permits",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=14",
  },
  {
    key: "permit-non-resident",
    quote:
      "If the applicant is not a Vermont resident, he/she may only obtain a Vermont Learner's Permit for the purpose of participating in a driver education and training course.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 3 - Residency Requirements for a Vermont Learner's Permit",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=11",
  },
  {
    key: "permit-expired-three-years",
    quote:
      "A person may take a road test if their Learner's Permit has not been expired more than 3 years and has been renewed prior to the exam.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - Questions and Answers about Junior Driver's Licenses",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=14",
  },
  {
    key: "permit-fee-renew",
    quote:
      "Learner's Permit - $24.00 Replacement of lost or corrected Learner's Permit or License (name or address change)",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 6 - Fees",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=24",
  },
  {
    key: "permit-practice-empty-lot",
    quote:
      "A person with a Learner's Permit should first practice driving in an empty parking lot or on roads that do not have much traffic.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Where Should I Start Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=26",
  },
  {
    key: "permit-pull-over-if-slow",
    quote:
      "If traffic is backing up behind you, you are required by law to pull over to the side of the road, when it is safe to do so, and allow following vehicles to go by.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Where Should I Start Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=26",
  },
  {
    key: "junior-hold-permit-year",
    quote:
      "An individual must possess a Learner's Permit for at least one (1) year prior to obtaining a Junior Driver's License.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - Questions and Answers about Junior Driver's Licenses",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=14",
  },
  {
    key: "junior-age-16-17",
    quote:
      "A Junior Driver's License is issued to persons 16 or 17 years old who pass the required examination.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - Questions and Answers about Junior Driver's Licenses",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=14",
  },
  {
    key: "junior-clean-six-months",
    quote:
      "An individual must have maintained a 'clean' driving record without any Learner's Permit recalls, suspensions, or revocations for a six (6) month period prior to obtaining a Junior Driver's License.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - Questions and Answers about Junior Driver's Licenses",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=14",
  },
  {
    key: "junior-driver-ed-hours",
    quote:
      "Before getting a license, all 16- and 17-year old's must have passed a state approved driver education and training course consisting of 30 hours of classroom study, 6 hours behind the wheel training and 6 hours of observation.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - Questions and Answers about Junior Driver's Licenses",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=14",
  },
  {
    key: "junior-40-hours",
    quote:
      "In addition to the hours indicated above, you must complete 40 hours of driving practice, with at least 10 hours being nighttime driving.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - Questions and Answers about Junior Driver's Licenses",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=14",
  },
  {
    key: "junior-nighttime-defined",
    quote:
      "Nighttime driving is considered driving during the period of 30 minutes after sunset, to 30 minutes before sunrise.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - Questions and Answers about Junior Driver's Licenses",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=14",
  },
  {
    key: "junior-40-in-addition",
    quote:
      "Note: The law requires the 40 hours of driving practice to be in addition to the 6 hours of behind-the-wheel driving required for successful completion of driver education. 4.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - Questions and Answers about Junior Driver's Licenses",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=15",
  },
  {
    key: "junior-log-sheet",
    quote:
      "You can use the Driving Practice Log Sheet (form VN-219) or the RoadReady App to track your progress.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - Questions and Answers about Junior Driver's Licenses",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=15",
  },
  {
    key: "junior-provisional",
    quote:
      "A Junior Driver's License is considered a provisional license.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - What restrictions are on a Junior Driver's License",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=16",
  },
  {
    key: "junior-parent-withdraw",
    quote:
      "Your license may also be taken away if your parent or guardian withdraws their permission for you to drive.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - What restrictions are on a Junior Driver's License",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=16",
  },
  {
    key: "junior-no-employment-year",
    quote:
      "While holding a Junior Driver's License, you cannot operate a vehicle in the course of your employment for one (1) year following the issuance of the Junior Driver's License.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - What restrictions are on a Junior Driver's License",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=16",
  },
  {
    key: "junior-pizza-example",
    quote:
      "For example, an individual cannot act as a pizza delivery person (driver) until they have had their Junior Driver's License for one (1) year, or until they reach the age of eighteen (18), whichever comes first.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - What restrictions are on a Junior Driver's License",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=16",
  },
  {
    key: "junior-no-passengers-for-hire",
    quote:
      "While holding a Junior Driver's License, an individual may not carry passengers for hire.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - What restrictions are on a Junior Driver's License",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=16",
  },
  {
    key: "junior-first-three-months",
    quote:
      "During the first three (3) months of operation under a Junior Driver's License, the individual is restricted to driving alone.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - What restrictions are on a Junior Driver's License",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=16",
  },
  {
    key: "junior-supervisor-exception",
    quote:
      "Passengers are permitted only if there is a licensed and unimpaired parent or guardian, or a licensed or certified unimpaired driver education instructor or a licensed and unimpaired individual 25 years of age or older riding in the front seat.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - What restrictions are on a Junior Driver's License",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=16",
  },
  {
    key: "junior-second-three-months",
    quote:
      "During the second three (3) months of operation under a Junior Driver's License, the individual may begin transporting immediate family members; siblings and parents only. 10. After holding a Junior Driver's License for six (6) months, there is no restriction on the number of passengers they can transport in the vehicle.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 5 - Graduated Driver's License Program",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=22",
  },
  {
    key: "junior-after-six-months",
    quote:
      "After holding a Junior Driver's License for six (6) months, there is no restriction on the number of passengers they can transport in the vehicle.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - What restrictions are on a Junior Driver's License",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=16",
  },
  {
    key: "junior-belts-limit",
    quote:
      "However the driver is not allowed to transport more passengers than there are safety belts.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - What restrictions are on a Junior Driver's License",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=16",
  },
  {
    key: "junior-no-device",
    quote:
      "A person shall not use any portable electronic device while operating a motor vehicle.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - What restrictions are on a Junior Driver's License",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=16",
  },
  {
    key: "junior-to-full-18",
    quote:
      "However, the driver is not allowed to transport more passengers than there are safety belts. 11. An individual who holds a Vermont Junior Driver's License must be eighteen (18) years of age and must not have any recalls, suspensions, or revocations during the previous six (6) month period, to be eligible to obtain a Driver's License.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 5 - Graduated Driver's License Program",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=22",
  },
  {
    key: "gdl-applies",
    quote:
      "Individuals who obtain a Learner's Permit or Junior Driver's License are subject to our Graduated Driver's License law.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 5 - Graduated Driver's License Program",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=21",
  },
  {
    key: "gdl-accompanied-25",
    quote:
      "A licensed and unimpaired person at least twenty-five (25) years of age. 2.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 5 - Graduated Driver's License Program",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=21",
  },
  {
    key: "gdl-stages-15-to-18",
    quote:
      "The law requires teens 15 to 18 years old learn to drive in stages.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 5 - Graduated Driver's License Program",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=23",
  },
  {
    key: "gdl-recall-cph",
    quote:
      "Carrying Passengers for Hire, Junior Operator Violation (CPH) = 90-day recall",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 5 - Graduated Driver's License Program",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=22",
  },
  {
    key: "gdl-recall-dfe",
    quote:
      "Driving For Employer/Employment, Junior Operator Violation (DFE) = 90-day recall",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 5 - Graduated Driver's License Program",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=22",
  },
  {
    key: "gdl-recall-texting",
    quote:
      "Junior Operator texting (JRT) = 30 day recall (includes fines of at least $100 and at least two points on your driving record)",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 5 - Graduated Driver's License Program",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=22",
  },
  {
    key: "gdl-recall-points",
    quote:
      "Junior Operator Points Accumulation Recall (JRP) = 90 day recall (for a single 3 pt.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 5 - Graduated Driver's License Program",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=22",
  },
  {
    key: "gdl-recall-ineligible",
    quote:
      "While a recall is in effect, an individual is ineligible for a Junior Driver's License or a Driver's License.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 5 - Graduated Driver's License Program",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=22",
  },
  {
    key: "gdl-recall-no-fee",
    quote:
      "No reinstatement fee shall be due when a Learner's Permit/Junior Driver's License recall is restored.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 5 - Graduated Driver's License Program",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=22",
  },
  {
    key: "gdl-parent-may-suspend",
    quote:
      "As a parent or guardian, you may suspend your child's provisional license by writing to the Commissioner of the Department of Motor Vehicles A recommendation from a Diversion/Reparative Board may result in a 30 day recall Excerpted from - A PARENT GUIDE TO THE GRADUATED DRIVER'S LICENSE (GDL)",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 12 - Parents or Guardians",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=74",
  },
  {
    key: "licence-age-18",
    quote:
      "A Driver's License is issued to eligible individuals 18 years of age or older who pass the required examination.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - Questions and Answers about Driver's Licenses",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=17",
  },
  {
    key: "licence-covers-what",
    quote:
      "This license allows a person to drive any noncommercial vehicle except a school bus or motorcycle.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - Questions and Answers about Driver's Licenses",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=17",
  },
  {
    key: "licence-new-resident-60-days",
    quote:
      "A person who has moved into the state from another jurisdiction with a valid license from that state shall obtain a Vermont license within 60 days of moving into the state.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - General License Information",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=13",
  },
  {
    key: "licence-privilege",
    quote:
      "The act of licensing makes driving a privilege, and holding a license requires that you drive within the limits of the law and treat all users of the highway, including bicyclists, motorcyclists, and pedestrians with courtesy and consideration.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - General License Information",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=13",
  },
  {
    key: "licence-out-of-state-eye-exam",
    quote:
      "When a new Vermont Resident applies for a Vermont Driver's License and possesses a valid out-of-state license or an out-of-state license that has been expired for three (3) year or less, an eye examination will be required. 1.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - Questions and Answers about Driver's Licenses",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=17",
  },
  {
    key: "licence-expired-three-years-retest",
    quote:
      "If your license has been expired for more than three (3) years, or you do not have an out-of-state license, you will have to take the vision, written and road tests.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - Questions and Answers about Driver's Licenses",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=17",
  },
  {
    key: "licence-expired-14-days",
    quote:
      "A Vermont license that has expired for more than 14 days is not a valid license.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 6 - Permit/License Renewals",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=25",
  },
  {
    key: "licence-expired-retest",
    quote:
      "If your Vermont driver's license is expired more than three (3) years, you must be tested again to obtain a new license.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 6 - Permit/License Renewals",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=25",
  },
  {
    key: "licence-photo-8-years",
    quote:
      "A license photo is valid for 8 years.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 6 - Permit/License Renewals",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=25",
  },
  {
    key: "licence-name-address-30-days",
    quote:
      "If you have changed your name or address, you must report the change to the Department of Motor Vehicles within 30 days.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 6 - Permit/License Renewals",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=25",
  },
  {
    key: "licence-suspended-elsewhere",
    quote:
      "A person whose privilege to operate a motor vehicle in any state has been suspended, revoked, or refused cannot be issued a license until such suspension, revocation or refusal has been terminated and the person has been officially notified in writing of reinstatement.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - Who May Not Be Issued a New License",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=17",
  },
  {
    key: "licence-pdps",
    quote:
      "PROBLEM DRIVER POINTER SYSTEM Upon application for a Learner's Permit, Junior Driver's License or Driver's License, an inquiry will be made of the national Problem Driver Pointer System (PDPS).",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 2 - How to Lose Your License",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=8",
  },
  {
    key: "licence-motorcycle-endorsement",
    quote:
      "MOTORCYCLE ENDORSEMENT & MOTORCYCLE LEARNER'S PERMITS Any person 16 years old or older who has a license may get a motorcycle endorsement or a motorcycle permit by passing a test.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - Motorcycle Endorsement",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=18",
  },
  {
    key: "licence-school-bus-endorsement",
    quote:
      "Every Vermont licensed driver, who transports school children in a school bus, must have a driver's license with a school bus endorsement.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - School Bus Endorsement",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=18",
  },
  {
    key: "licence-cdl-threshold",
    quote:
      "A Commercial Driver's License is required for operators of vehicles rated in excess of 26,000 pounds or transporting 16 or more passengers (including the driver) or hazardous materials.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 10 - Commercial Driver's License",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=71",
  },
  {
    key: "licence-cdl-transfer-30-days",
    quote:
      "In accordance with state and federal law, any person holding a Commercial License from another state must transfer their Commercial Driver's License within 30 days of establishing residency in Vermont.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 10 - Commercial Driver's License",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=71",
  },
  {
    key: "licence-medical-notify",
    quote:
      "If you have a medical problem such as epilepsy, diabetes (requiring insulin injection), or any other condition which may result in a loss of consciousness or have loss of a limb or are in a wheel chair, you must notify the Department of Motor Vehicles, Driver Improvement Section at 802.828.2000 prior to making an appointment for an examination.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 11 - Persons with Disabilities",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=72",
  },
  {
    key: "roadtest-vehicle-required",
    quote:
      "The vehicle must be registered and inspected.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - Do I Have to Furnish a Vehicle for the Driving Test",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=20",
  },
  {
    key: "roadtest-insurance-card",
    quote:
      "Failure to show a valid insurance card and a registration certificate will prevent testing.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - Questions and Answers about Junior Driver's Licenses",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=15",
  },
  {
    key: "roadtest-no-belts-no-test",
    quote:
      "No road test will be given in a vehicle that does not have safety belts.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - Condition of the Vehicle Used in the Road Test",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=20",
  },
  {
    key: "roadtest-parking-brake",
    quote:
      "Emergency/parking brakes must be adequate to hold the vehicle in neutral on any grade on which it is operated, both with the vehicle headed uphill or downhill.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - Condition of the Vehicle Used in the Road Test",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=20",
  },
  {
    key: "roadtest-rental",
    quote:
      "Rental vehicles may not be used for road tests unless the rental company provides a letter accepting full responsibility if the applicant takes the road test in the rental vehicle.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 4 - Do I Have to Furnish a Vehicle for the Driving Test",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=20",
  },
  {
    key: "roadtest-hill-start",
    quote:
      "Stopping and Starting On a Hill When you take your road test, the examiner will have you stop and start on a hill.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - The Road (Skills) Test",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=57",
  },
  {
    key: "roadtest-hill-brake-holds",
    quote:
      "The parking/emergency brake must hold the vehicle from rolling back.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - The Road (Skills) Test",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=57",
  },
  {
    key: "roadtest-turnaround",
    quote:
      "Drive just past the street and stop about 18 inches from the curb or edge of the road.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - The Road (Skills) Test",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=57",
  },
  {
    key: "roadtest-never-back-intersection",
    quote:
      "Never back across an intersection.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - The Road (Skills) Test",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=58",
  },
  {
    key: "roadtest-backing-responsible",
    quote:
      "Remember, when you are backing your vehicle you are responsible for traffic in all directions!",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - The Road (Skills) Test",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=58",
  },
  {
    key: "roadtest-parallel-park",
    quote:
      "Parallel Parking You will also be required to parallel park during your road test.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - The Road (Skills) Test",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=58",
  },
  {
    key: "roadtest-parallel-two-three-feet",
    quote:
      "Stop alongside the front vehicle, two to three feet away.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - The Road (Skills) Test",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=58",
  },
  {
    key: "roadtest-downhill-no-coast",
    quote:
      "NOTE: When driving downhill, you should not coast with the clutch to the floor or the gearshift in neutral.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - The Road (Skills) Test",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=57",
  },
  {
    key: "roadtest-turnaround-safest",
    quote:
      "Going around the block or using a parking lot is the safest option.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - The Road (Skills) Test",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=58",
  },
  {
    key: "signal-red-stop-where",
    quote:
      "Red Light: Stop before reaching either the stop line or the crosswalk, whichever comes first, and wait until the light is green (Green arrow signals may come on while the red light is displayed, you may proceed in the direction of the green arrow).",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Traffic Lights",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=32",
  },
  {
    key: "signal-right-on-red",
    quote:
      "Right turns at circular red lights are usually allowed, but only after the driver has stopped completely, scanned the intersection and yielded the right of way to pedestrians and other vehicles.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Traffic Lights",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=32",
  },
  {
    key: "signal-no-turn-on-red-signs",
    quote:
      "Some intersections have signs or symbols that indicate you cannot turn right on red.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Traffic Lights",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=32",
  },
  {
    key: "signal-officer-overrides",
    quote:
      "A police officer may direct you through a red light.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Traffic Lights",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=32",
  },
  {
    key: "signal-yellow",
    quote:
      "Yellow Light: This light warns drivers that the light is about to turn red.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Traffic Lights",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=32",
  },
  {
    key: "signal-yellow-too-close",
    quote:
      "If you are too close to the intersection to stop safely, proceed with caution through the intersection.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Traffic Lights",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=32",
  },
  {
    key: "signal-green",
    quote:
      "Green Light: You may proceed on a green light if it is safe to do so.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Traffic Lights",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=32",
  },
  {
    key: "signal-green-left-yield",
    quote:
      "But, if you are turning left you must yield the right of way to oncoming vehicles.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Traffic Lights",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=32",
  },
  {
    key: "signal-dark-signal",
    quote:
      "If a signal light is dark, as in a power failure, stop as if there are stop signs in all directions.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Traffic Lights",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=32",
  },
  {
    key: "signal-out-of-order",
    quote:
      "When a traffic signal is out of order and flashes yellow or red, you must obey that signal.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Traffic Lights",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=32",
  },
  {
    key: "signal-flashing-red",
    quote:
      "Flashing Red: The flashing circular red light is like a stop sign.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Traffic Lights",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=33",
  },
  {
    key: "signal-flashing-red-yield",
    quote:
      "Stop, and proceed after yielding the right of way to all pedestrians, bicyclists, and vehicles.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Traffic Lights",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=33",
  },
  {
    key: "signal-flashing-yellow",
    quote:
      "Flashing Yellow: Slow down, scan the intersection, yield to any oncoming vehicles before attempting to make a left turn and proceed with caution.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Traffic Lights",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=33",
  },
  {
    key: "signal-red-arrow",
    quote:
      "Arrows Solid Red Arrow: Drivers intending to turn left must stop and wait.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Arrows",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=33",
  },
  {
    key: "signal-red-arrow-no-entry",
    quote:
      "Do not enter an intersection to turn when a solid red arrow is being displayed.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Arrows",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=33",
  },
  {
    key: "signal-yellow-arrow",
    quote:
      "Solid Yellow Arrow: The left-turn signal is about to change to red and drivers should prepare to stop or prepare to complete a left turn if they are legally within the intersection and there is no conflicting traffic present.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Arrows",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=33",
  },
  {
    key: "signal-flashing-yellow-arrow",
    quote:
      "Flashing Yellow Arrow: Drivers are allowed to turn left after yielding to all oncoming traffic and to any pedestrians in the crosswalk.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Arrows",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=33",
  },
  {
    key: "signal-flashing-yellow-arrow-oncoming",
    quote:
      "Oncoming traffic has a green light.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Arrows",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=33",
  },
  {
    key: "signal-green-arrow",
    quote:
      "Solid Green Arrow: Left turns have the right of way.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Arrows",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=33",
  },
  {
    key: "signal-no-right-on-red-arrow",
    quote:
      "Remember: DO NOT turn right on a red arrow.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Pedestrians",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=39",
  },
  {
    key: "signal-no-turn-on-red-lit",
    quote:
      "Do not turn right on red when the signs are lit.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Pedestrians",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=39",
  },
  {
    key: "signal-100-feet",
    quote:
      "Signals The law states that a driver must use a turn signal not less than 100 feet before making a turn or changing lanes.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Signals",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=27",
  },
  {
    key: "signal-three-to-five-seconds",
    quote:
      "Signaling three to five seconds before any of these actions covers this requirement.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Signals",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=27",
  },
  {
    key: "signal-brake-lights",
    quote:
      "Applying your brakes will signal vehicles behind you that you are planning to slow down or stop.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Signals",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=27",
  },
  {
    key: "signal-hand-signals-required",
    quote:
      "If your vehicle's directional lights or brake lights are not working, you must use hand signals to let other drivers know you are planning to stop or turn.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Signals",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=27",
  },
  {
    key: "signal-fix-immediately",
    quote:
      "Directional lights or brake lights which do not work must be fixed immediately.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Signals",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=27",
  },
  {
    key: "sign-shape-and-colour",
    quote:
      "Road Signs You can tell what road signs mean by the shape and color as well as the wording.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Road Signs",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=33",
  },
  {
    key: "sign-covered",
    quote:
      "If the sign is covered by dirt, snow, or anything else, you should know the general meaning (regulatory, warning, information) of the sign by its shape.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Road Signs",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=33",
  },
  {
    key: "sign-stop-eight-sides",
    quote:
      "It means you must stop scan the intersection, honor the right of way, and then proceed.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Road Signs",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=33",
  },
  {
    key: "sign-stop-where",
    quote:
      "REMEMBER: You are required to stop before the stop line, crosswalk (marked or unmarked) or the intersecting road, whichever comes first.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Road Signs",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=33",
  },
  {
    key: "sign-yield-shape",
    quote:
      "Yield right-of-way signs are the shape of an upside down triangle, and they mean you should slow down, search and enter only if the way is clear of pedestrians, bicyclists and vehicles.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Road Signs",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=33",
  },
  {
    key: "sign-rr-circular",
    quote:
      "Circular signs with a large X and the letters RR indicate there is a railroad crossing ahead.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Road Signs",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=33",
  },
  {
    key: "sign-crossbuck",
    quote:
      "Crossbuck signs are at all railroad crossings.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Road Signs",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=34",
  },
  {
    key: "sign-crossbuck-tracks",
    quote:
      "The smaller signs below the crossbuck indicate how many tracks there are at the crossing.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Road Signs",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=34",
  },
  {
    key: "sign-two-tracks",
    quote:
      "When there are 2 or more tracks, one train passing might hide a train coming the other way.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Road Signs",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=34",
  },
  {
    key: "sign-slow-moving-emblem",
    quote:
      "A sign in the shape of a triangle with the points cut off is displayed on vehicles which travel at slow speeds.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Road Signs",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=34",
  },
  {
    key: "sign-warning-purpose",
    quote:
      "Warning Signs Warning signs are placed where there is danger at all times, and a driver needs to slow down.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Warning Signs",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=34",
  },
  {
    key: "sign-warning-shape",
    quote:
      "They are usually diamond-shaped and yellow or green.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Warning Signs",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=34",
  },
  {
    key: "sign-warning-examples",
    quote:
      "They may warn of sharp curves, unsafe intersections, or dips in the road.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Warning Signs",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=34",
  },
  {
    key: "sign-warning-extra-info",
    quote:
      "Some warning signs give additional information, such as the safe speeds, or a distance, such as \"Deer Crossing, next 3 miles\".",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Warning Signs",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=34",
  },
  {
    key: "sign-downward-arrow",
    quote:
      "A downward arrow under a school or pedestrian sign indicates a crosswalk or crossing area.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Warning Signs",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=34",
  },
  {
    key: "sign-regulatory",
    quote:
      "Rectangular signs with white backgrounds indicate what things a driver must or must not do.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Regulatory Signs",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=35",
  },
  {
    key: "sign-regulatory-content",
    quote:
      "These signs display speed limits, turning and passing laws, and other directions.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Regulatory Signs",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=35",
  },
  {
    key: "sign-workzone-orange",
    quote:
      "Work zone signs are orange and diamond or rectangular shaped.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Work Zone Signs",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=37",
  },
  {
    key: "sign-workzone-warn",
    quote:
      "They warn the driver of hazards ahead, such as closed lanes, detours, rough pavement, or flaggers.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Work Zone Signs",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=37",
  },
  {
    key: "marking-purpose",
    quote:
      "They help a driver correctly position their vehicle, help direct them through various situations, let them know when passing is allowed and warn drivers of upcoming conditions.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Highway Markings",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=35",
  },
  {
    key: "marking-yellow-centre",
    quote:
      "Major highways are marked with yellow center lines which serve two purposes: Center lines divide a highway into travel lanes.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Highway Markings",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=35",
  },
  {
    key: "marking-double-solid",
    quote:
      "Multi-lane highways without a median have double solid lines to indicate the two opposing lanes of travel.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Highway Markings",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=35",
  },
  {
    key: "marking-broken-white",
    quote:
      "When two or more lanes of travel are permitted in the same direction, a broken white line is used to divide each side of the highway into separate lanes for vehicles traveling in the same direction.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Highway Markings",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=35",
  },
  {
    key: "marking-solid-no-pass",
    quote:
      "If there is a solid line or two solid lines, it is recommended that you do not pass.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Highway Markings",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=35",
  },
  {
    key: "marking-broken-in-your-lane",
    quote:
      "If there is a solid line but a broken line in your lane, you may pass if it is clear ahead.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Highway Markings",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=35",
  },
  {
    key: "marking-solid-in-your-lane",
    quote:
      "If there is a solid line in your lane but a broken line in the other lane, you should not pass, but the motor vehicle in the other lane may pass.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Highway Markings",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=35",
  },
  {
    key: "marking-two-way-left-turn",
    quote:
      "Continuous two-way left turn lanes are not designed to be used as travel lanes since traffic moving in both directions may want to use the lane to make a left-hand turn.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Highway Markings",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=35",
  },
  {
    key: "marking-turn-lane-all-in",
    quote:
      "So that you don't block traffic, all of your vehicle should be in the turn lane.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Highway Markings",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=35",
  },
  {
    key: "marking-yield-line",
    quote:
      "This series of white triangles, pointing toward approaching cars, shows drivers where they should stop, if they are required to yield to pedestrians or other vehicles.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Highway Markings",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=35",
  },
  {
    key: "marking-lane-use-right",
    quote:
      "When driving from one road onto a multiple lane road where there is a choice of lanes, right turning drivers must turn into the right lane.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Highway Markings",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=35",
  },
  {
    key: "marking-lane-use-left",
    quote:
      "Left turning drivers must first turn into the left lane.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Highway Markings",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=35",
  },
  {
    key: "marking-stay-in-turn-path",
    quote:
      "When there are two lanes turning in the same direction each turning lane must stay in their own turning path throughout the turn.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Highway Markings",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=35",
  },
  {
    key: "marking-remain-in-lane",
    quote:
      "Remain in the designated lane until after the turn has been completed.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Highway Markings",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=35",
  },
  {
    key: "marking-no-lane-change-turning",
    quote:
      "Avoid changing lanes while turning.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Highway Markings",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=36",
  },
  {
    key: "marking-follow-arrow",
    quote:
      "For example, if a driver is driving in a lane with a straight arrow, it is illegal and unsafe to attempt a turn to the right or left once they are at the intersection.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Highway Markings",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=36",
  },
  {
    key: "marking-workzone-temporary",
    quote:
      "White markers or lines separate lanes going in the same direction.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Work Zone Safety",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=37",
  },
  {
    key: "marking-workzone-yellow-left",
    quote:
      "The yellow markings will be on your left-- if they are not, you are in the wrong lane.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Work Zone Safety",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=37",
  },
  {
    key: "marking-yellow-right-wrong-way",
    quote:
      "You are going the WRONG WAY on a divided highway or Interstate.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Interstate Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=52",
  },
  {
    key: "marking-white-on-right",
    quote:
      "On a divided highway the line to your right should be white.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Interstate Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=52",
  },
  {
    key: "row-already-in-intersection",
    quote:
      "A driver on any road must yield the right-of-way to pedestrians, bicyclists and other traffic already in the intersection. 2.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Right-of-way",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=29",
  },
  {
    key: "row-yield-sign-speed",
    quote:
      "When nearing an intersection marked with a \"yield right-of-way\" sign, you are required to travel at a speed slow enough to be able to stop if necessary.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Right-of-way",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=29",
  },
  {
    key: "row-four-way-first",
    quote:
      "At a four-way stop, the first vehicle to arrive should have the right-of-way. 4.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Right-of-way",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=29",
  },
  {
    key: "row-four-way-tie",
    quote:
      "When two vehicles approach a four-way stop intersection at approximately the same time, coming from different directions, the driver on the left should yield the right-of-way to the driver on the right. 5.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Right-of-way",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=29",
  },
  {
    key: "row-left-turn-yield",
    quote:
      "If you are turning left, you must yield to all oncoming traffic.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Right-of-way",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=29",
  },
  {
    key: "row-oncoming-bicyclist",
    quote:
      "Any vehicle coming toward you, whether it is a motor vehicle or a bicyclist, has the right of way. 6.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Right-of-way",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=29",
  },
  {
    key: "row-driveway-yield",
    quote:
      "A driver who is approaching the road from a driveway, alley, parking lot, or Tintersection must yield the right-of-way to all traffic on the road. 7.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Right-of-way",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=29",
  },
  {
    key: "row-search-all-directions",
    quote:
      "Before entering any intersection, you must always search in all directions.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Right-of-way",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=29",
  },
  {
    key: "row-clear-path",
    quote:
      "Be sure you have a clear path before entering the intersection.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Right-of-way",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=29",
  },
  {
    key: "row-statute-right",
    quote:
      "(a) When two vehicles approach or enter an intersection from different highways at approximately the same time, the driver of the vehicle on the left shall yield the right of way to the vehicle on the right.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1046 - Vehicle approaching or entering intersection",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01046",
  },
  {
    key: "row-statute-left-turn",
    quote:
      "(a) The driver of a vehicle intending to turn to the left within an intersection or into an alley, private road, or driveway shall yield the right of way to any vehicle approaching from the opposite direction that is either within the intersection or so close as to constitute an immediate hazard.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1047 - Vehicle turning left",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01047",
  },
  {
    key: "row-statute-private-road",
    quote:
      "The driver of a vehicle about to enter or cross a highway from an alley, building, private road, or driveway shall yield the right of way to all vehicles and vulnerable users approaching on the highway.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1049 - Vehicle entering from private road",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01049",
  },
  {
    key: "row-statute-stop-line",
    quote:
      "(b) Except when directed to proceed by an enforcement officer or traffic-control signal, every driver of a vehicle approaching a stop intersection indicated by a stop sign shall stop at a clearly marked stop line, but if none, before entering the crosswalk on the near side of the intersection, or, if none, then at the point nearest the intersecting roadway where the driver has a view of approaching traffic on the intersecting roadway before entering the intersection.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1048 - Stop or yield intersections",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01048",
  },
  {
    key: "row-statute-yield-sign",
    quote:
      "(c) The driver of a vehicle approaching a yield sign shall in obedience to the yield sign slow down to a speed reasonable for the existing conditions and, if required for safety to stop, shall stop before entering the crosswalk on the near side of the intersection, or, if none, then at the point nearest the intersecting roadway where the driver has a view of approaching traffic on the intersecting roadway.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1048 - Stop or yield intersections",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01048",
  },
  {
    key: "row-statute-obey-devices",
    quote:
      "(a) The driver of any vehicle shall obey the instructions of any official traffic-control device applicable to him or her placed in accordance with this chapter unless otherwise directed by an enforcement officer, subject to the exceptions granted in this chapter.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1021 - Obedience to traffic-control devices",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01021",
  },
  {
    key: "row-statute-flashing",
    quote:
      "(2) Flashing yellow: When a yellow lens is illuminated with rapid intermittent flashes, drivers of vehicles may proceed through the intersection or past the signal only with caution.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1024 - Flashing signals",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01024",
  },
  {
    key: "row-statute-turn-position",
    quote:
      "Both the approach for a right turn and a right turn shall be made as close as practicable to the right-hand curb or edge of the roadway.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1061 - Turning at intersections",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01061",
  },
  {
    key: "row-statute-left-turn-centre",
    quote:
      "Whenever practicable the left turn shall be made in that portion of the intersection to the left of the center of the intersection.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1061 - Turning at intersections",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01061",
  },
  {
    key: "row-statute-starting-parked",
    quote:
      "No person shall move a vehicle that is stopped, standing, or parked unless the movement can be made with reasonable safety.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1063 - Starting parked vehicles",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01063",
  },
  {
    key: "row-statute-u-turn-500",
    quote:
      "No person shall turn a vehicle in order to proceed in the opposite direction on any curve, or upon the approach to or near the crest of a grade, where the vehicle cannot be seen by the driver of any other vehicle approaching from either direction for a distance of 500 feet.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1062 - Turning prohibited",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01062",
  },
  {
    key: "row-statute-officer-stop",
    quote:
      "A person operating a motor vehicle shall promptly and carefully stop when signalled to stop by an enforcement officer wearing insignia that identifies the officer.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1012 - Obedience to enforcement officers",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01012",
  },
  {
    key: "row-statute-produce-licence",
    quote:
      "(b) The operator shall produce his or her operator's license and the registration certificate for the motor vehicle.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1012 - Obedience to enforcement officers",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01012",
  },
  {
    key: "speed-50-default",
    quote:
      "Speed Limits and Safe Speeds The maximum speed for any vehicle on all Vermont roads is 50 miles per hour or as posted.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Speed Limits and Safe Speeds",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=29",
  },
  {
    key: "speed-interstate-65",
    quote:
      "The maximum speed for any vehicle on an Interstate in Vermont is 65 miles per hour or as posted.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Speed Limits and Safe Speeds",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=29",
  },
  {
    key: "speed-under-control",
    quote:
      "The law states that a motor vehicle shall be driven at all times so that it is under control.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Speed Limits and Safe Speeds",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=29",
  },
  {
    key: "speed-reasonable",
    quote:
      "A vehicle must be driven at a speed that is reasonable considering the dangers that may exist on the road.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Speed Limits and Safe Speeds",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=29",
  },
  {
    key: "speed-conditions-list",
    quote:
      "At intersections, on curves, in heavy traffic, through construction zones, during bad weather, and when pedestrians or bicyclists are present, you must drive at a speed that is safe for the driving conditions.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Speed Limits and Safe Speeds",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=29",
  },
  {
    key: "speed-too-fast-crashes",
    quote:
      "Many crashes are caused by driving too fast for conditions.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Speed Limits and Safe Speeds",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=29",
  },
  {
    key: "speed-ten-can-be-unsafe",
    quote:
      "Sometimes even 10 miles per hour can be an unsafe speed.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Speed Limits and Safe Speeds",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=29",
  },
  {
    key: "speed-school-zone-when-flashing",
    quote:
      "Many school zones have lower speed limits, and the speed limit signs will have the words \"when flashing\" or \"when children are present\" to let you know when the speed limit is in effect.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - School Zones",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=39",
  },
  {
    key: "speed-school-not-only-hours",
    quote:
      "Note that regular school hours are not the only time children are present at schools.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - School Zones",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=39",
  },
  {
    key: "speed-workzone-posted",
    quote:
      "Slow down to the posted speed limit and adjust for weather conditions.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Work Zone Safety",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=36",
  },
  {
    key: "speed-workzone-fines-doubled",
    quote:
      "Remember that roadway workers are improving our highways for your safety. FINES ARE DOUBLED FOR SPEEDING IN A WORK ZONE",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Work Zone Safety",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=36",
  },
  {
    key: "speed-workzone-247",
    quote:
      "Tips for Safe Driving in Vermont Work Zones Rules apply 24/7 - not just during daylight hours.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Work Zone Safety",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=36",
  },
  {
    key: "speed-statute-50",
    quote:
      "(b) Except when there exists a special hazard that requires lower speed in accordance with subsection (a) of this section, the limits specified in this section or established pursuant to this section are maximum lawful speeds, and no individual shall drive a vehicle on a highway at a speed in excess of 50 miles per hour.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1081 - Basic rule and maximum limits",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01081",
  },
  {
    key: "speed-statute-basic-rule",
    quote:
      "(a) No individual shall drive a vehicle on a highway at a speed greater than is reasonable and prudent under the conditions, having regard for the actual and potential hazards then existing.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1081 - Basic rule and maximum limits",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01081",
  },
  {
    key: "speed-statute-reduce",
    quote:
      "(d) The driver of every vehicle shall, consistent with the requirements of subsection (a) of this section, drive at an appropriate, reduced speed when approaching and crossing an intersection or railway grade crossing, when approaching and going around a curve, when approaching the crest of a hill, when traveling upon any narrow or winding roadway, and when special hazard exists.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1081 - Basic rule and maximum limits",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01081",
  },
  {
    key: "speed-statute-excessive",
    quote:
      "No person shall operate a motor vehicle on a public highway at a speed of 60 miles per hour or more and at least 30 miles per hour in excess of a State speed zone or local speed limit.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1097 - Excessive speed",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01097",
  },
  {
    key: "speed-statute-school-zone-double",
    quote:
      "Notwithstanding the maximum penalty established in subsection 2302(c) of this title and the waiver penalties established pursuant to 4 V.S.A. Section 1102(d), the civil penalty for violating a State or municipal speed limit in a school zone designated with signs in accordance with 19 V.S.A. Section 921 shall be twice the penalty for a non-school zone speed limit violation.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1017 - Speed limit in school zones",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01017",
  },
  {
    key: "speed-statute-slow-vehicles-right",
    quote:
      "All slow-moving vehicles shall keep at all times as close to the right-hand side of the highway as is reasonably practicable.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1082 - Slow-moving vehicles",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01082",
  },
  {
    key: "speed-statute-impeding",
    quote:
      "A person operating a motor vehicle that impedes other traffic on a highway shall pull off the highway at the first opportunity to allow the traffic to pass before proceeding.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1082 - Slow-moving vehicles",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01082",
  },
  {
    key: "speed-statute-bridge",
    quote:
      "(b) No person may drive a vehicle over any bridge or other elevated structure constituting a part of a highway at a speed that is greater than the maximum speed that can be maintained with safety to the bridge or structure, except when the bridge or structure is signposted as provided in this section.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1083 - Special speed limitations",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01083",
  },
  {
    key: "park-12-inches",
    quote:
      "A vehicle parked on a 2-lane road must have the right wheels within 12 inches of the right side of the road or curb.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Parking Your Vehicle",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=30",
  },
  {
    key: "park-one-way-12-inches",
    quote:
      "On a one-way road the vehicle must be positioned within 12 inches of the side of the road.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Parking Your Vehicle",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=30",
  },
  {
    key: "park-same-direction",
    quote:
      "Your vehicle must be parked in the same direction as traffic flow.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Parking Your Vehicle",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=30",
  },
  {
    key: "park-rural-all-wheels-off",
    quote:
      "If you must park on a highway in a rural area, you must have all wheels off the traveled portion of the road.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Parking Your Vehicle",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=30",
  },
  {
    key: "park-150-feet-visibility",
    quote:
      "Be careful not to stop on a hill, curve, or where your vehicle cannot be seen for at least 150 feet in either direction, or in any area posted for no parking.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Parking Your Vehicle",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=30",
  },
  {
    key: "park-no-cross-centre-line",
    quote:
      "Don't cross the center line to park.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Parking Your Vehicle",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=30",
  },
  {
    key: "park-hills-wheels-and-brake",
    quote:
      "Always turn the front wheels and set the parking brake to prevent the vehicle from rolling into traffic.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Parking on Hills",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=30",
  },
  {
    key: "park-hills-roll",
    quote:
      "Parking on Hills When parking on a hill, you must be sure your vehicle will not roll out into traffic.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Parking on Hills",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=30",
  },
  {
    key: "park-disabled-10-days",
    quote:
      "Parking for Disabled Drivers A person who has trouble walking may park without a fee, for 10 days, in a parking place where other drivers can only park a set time.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 11 - Parking for Disabled Drivers",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=72",
  },
  {
    key: "park-disabled-not-anywhere",
    quote:
      "(Such persons cannot park in places where parking or stopping vehicles is not allowed.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 11 - Parking for Disabled Drivers",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=72",
  },
  {
    key: "park-disabled-fine",
    quote:
      "A person who parks in a disabled parking spot illegally may be subject to a fine and towing charges.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 11 - Parking for Disabled Drivers",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=72",
  },
  {
    key: "park-statute-hydrant",
    quote:
      "(B) within six feet of a fire hydrant; (C) within 20 feet of a crosswalk at an intersection;",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1104 - Stopping prohibited",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01104",
  },
  {
    key: "park-statute-crosswalk",
    quote:
      "(C) within 20 feet of a crosswalk at an intersection;",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1104 - Stopping prohibited",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01104",
  },
  {
    key: "park-statute-stop-sign",
    quote:
      "(D) within 30 feet upon the approach to any flashing signal, stop sign, or traffic control light located at the side of a roadway;",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1104 - Stopping prohibited",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01104",
  },
  {
    key: "park-statute-railroad",
    quote:
      "(A) within 50 feet of the nearest rail of a railroad crossing;",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1104 - Stopping prohibited",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01104",
  },
  {
    key: "park-statute-fire-station",
    quote:
      "(E) within 20 feet of the driveway entrance to any fire station and on the side of a street opposite and within 75 feet of the entrance to any fire station, when properly signposted; or",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1104 - Stopping prohibited",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01104",
  },
  {
    key: "park-statute-driveway",
    quote:
      "(A) in front of a public or private driveway;",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1104 - Stopping prohibited",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01104",
  },
  {
    key: "park-statute-sidewalk",
    quote:
      "(B) on a sidewalk; (C) within an intersection; (D) on a crosswalk;",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1104 - Stopping prohibited",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01104",
  },
  {
    key: "park-statute-roadway-side",
    quote:
      "(A) on the roadway side of any vehicle stopped or parked at the edge or curb of a street;",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1104 - Stopping prohibited",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01104",
  },
  {
    key: "park-statute-ev-charging",
    quote:
      "(C) at any place where official signs restrict parking at an electric vehicle charging station and the vehicle violates the restrictions.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1104 - Stopping prohibited",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01104",
  },
  {
    key: "park-statute-disabled-exception",
    quote:
      "(c) This section does not apply to any vehicle that is disabled while on the paved or main-traveled portion of a highway in a manner and to the extent that it is impossible or impractical to avoid stopping and temporarily leaving the disabled vehicle in that position, nor to stopping at a railroad grade crossing.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1101 - Stopping, standing, or parking",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01101",
  },
  {
    key: "park-statute-200-feet",
    quote:
      "(b) Where parking is permitted, at all times an unobstructed width of the highway opposite a standing vehicle shall be left for the free passage of other vehicles and a clear view permitted of any stopped vehicles from a distance of 200 feet in each direction upon the highway.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1101 - Stopping, standing, or parking",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01101",
  },
  {
    key: "park-statute-unattended",
    quote:
      "This section does not apply to authorized emergency vehicles.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1111 - Unattended motor vehicle",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01111",
  },
  {
    key: "follow-four-seconds",
    quote:
      "Using the 4-second method, you should have enough space between your vehicle and the vehicle in front of you in case you must stop quickly.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Four Seconds - A Safe Following Distance",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=28",
  },
  {
    key: "follow-more-in-poor-conditions",
    quote:
      "However, if you are driving in poor road conditions, when visibility is poor or driving at higher speeds, you should allow more than four seconds of following distance.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Four Seconds - A Safe Following Distance",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=28",
  },
  {
    key: "follow-determined-by-speed",
    quote:
      "The distance between your vehicle and the vehicle in front of you should be determined by speed and existing conditions.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Four Seconds - A Safe Following Distance",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=28",
  },
  {
    key: "follow-checkpoint",
    quote:
      "The vehicle ahead is about to pass a checkpoint such as a sign, driveway, pole, or parked vehicle. 2.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Four-Second Safety Spacing",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=29",
  },
  {
    key: "follow-less-than-four",
    quote:
      "If it takes less than four seconds for your vehicle to reach that point, you are following too closely and must increase your following distance.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Four-Second Safety Spacing",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=29",
  },
  {
    key: "follow-four-or-more",
    quote:
      "If it takes four or more seconds to pass the checkpoint, you have a safe following distance.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Four-Second Safety Spacing",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=29",
  },
  {
    key: "follow-counting-method",
    quote:
      "NOTE: An easy method to count seconds is to count \"one thousand one, one thousand two.\"",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Four-Second Safety Spacing",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=29",
  },
  {
    key: "follow-workzone-four",
    quote:
      "Maintain a 4 second following distance.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Work Zone Safety",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=36",
  },
  {
    key: "follow-stopping-distances",
    quote:
      "It takes 240 feet for a passenger car to come to a complete stop on dry pavement traveling at 60 MPH, versus 75 feet for the same car to come to a stop at 30 MPH.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Work Zone Safety",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=36",
  },
  {
    key: "follow-statute-reasonable",
    quote:
      "(a) The driver of a vehicle shall not follow another vehicle more closely than is reasonable and prudent, having due regard for the speed of the vehicles and the traffic upon, and the conditions of, the highway.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1039 - Following too closely, crowding, and harassment",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01039",
  },
  {
    key: "follow-statute-space-for-passing",
    quote:
      "(b) The driver of any vehicle, when traveling upon a roadway outside a business or residential district and that is following another vehicle, shall, whenever conditions permit, leave sufficient space so that an overtaking vehicle may enter and occupy the space without danger, except that this shall not prevent a vehicle from overtaking and passing any other vehicle.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1039 - Following too closely, crowding, and harassment",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01039",
  },
  {
    key: "react-three-quarters-second",
    quote:
      "After seeing danger, it takes the average driver about 3/4 of a second to apply the brakes.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Stopping Your Vehicle",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=27",
  },
  {
    key: "react-reaction-distance",
    quote:
      "The distance your vehicle travels from the moment you see danger until you step on the brake is called reaction distance.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Stopping Your Vehicle",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=27",
  },
  {
    key: "react-braking-distance",
    quote:
      "The distance your vehicle travels from the time the brakes are applied to the time that the vehicle is brought to a stop is called braking distance.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Stopping Your Vehicle",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=27",
  },
  {
    key: "react-wet-icy-gravel",
    quote:
      "It is important to realize that on wet, icy or gravel roads, the braking distance will be much longer.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Stopping Your Vehicle",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=27",
  },
  {
    key: "react-first-rain",
    quote:
      "When it first starts to rain, oil, rubber, dirt and water combined make roads especially slippery, which increases your braking distance.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Stopping Your Vehicle",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=27",
  },
  {
    key: "react-four-things",
    quote:
      "You must see and recognize the danger and the need to stop.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Stopping Your Vehicle",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=26",
  },
  {
    key: "turn-left-signal-3-5",
    quote:
      "Upon approaching an intersection at which you wish to make a left turn, you must signal 3 to 5 seconds in advance to warn others of your intention to turn.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Left Turns",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=27",
  },
  {
    key: "turn-left-check-mirror",
    quote:
      "Then as you gradually slow down, check the rear view mirror to see that the driver of the vehicle behind you has understood your signal.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Left Turns",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=27",
  },
  {
    key: "turn-left-multilane",
    quote:
      "On a multilane road, always make sure you're in the left lane well in advance of the turn.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Left Turns",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=27",
  },
  {
    key: "turn-left-wait-oncoming",
    quote:
      "When you reach your turn, wait until there are no oncoming vehicles before making your turn.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Left Turns",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=27",
  },
  {
    key: "turn-left-one-foot",
    quote:
      "Position your vehicle within one foot of the centerline, if it is safe to do so.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Left Turns",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=27",
  },
  {
    key: "turn-left-wheels-straight",
    quote:
      "Keep your wheels straight until you are ready to turn - that way you will not be pushed into oncoming traffic if you are hit from behind.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Left Turns",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=27",
  },
  {
    key: "turn-left-pedestrians",
    quote:
      "Always remember to look for pedestrians who may be crossing the street you are going to turn into.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Left Turns",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=27",
  },
  {
    key: "turn-left-keep-right-of-centre",
    quote:
      "When the road is clear, make your turn at the proper speed and keep to the right of the center line.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Left Turns",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=27",
  },
  {
    key: "turn-left-search-order",
    quote:
      "Search the intersection right, front, and left before starting to make turn.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Left Turns",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=28",
  },
  {
    key: "turn-right-three-feet",
    quote:
      "Right Turns At the approach to a right turn the vehicle should be about three feet from the right side of the road.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Right Turns",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=28",
  },
  {
    key: "turn-right-no-swing-left",
    quote:
      "Do not swing your vehicle to the left before turning right.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Right Turns",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=28",
  },
  {
    key: "turn-right-search-order",
    quote:
      "Search the intersection left, front, and right before starting to make your turn.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Right Turns",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=28",
  },
  {
    key: "turn-right-yield-vulnerable",
    quote:
      "You must yield to any pedestrian or bicyclist.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Right Turns",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=28",
  },
  {
    key: "turn-right-close-to-right",
    quote:
      "Make your turn close to the right side of your lane.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Right Turns",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=28",
  },
  {
    key: "turn-into-nearest-lane",
    quote:
      "NOTE: If you are turning into a street with more than one lane going in your direction, turn into the nearest lane.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Right Turns",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=28",
  },
  {
    key: "turn-drive-right-basic-rule",
    quote:
      "Then follow the basic rule of driving on a multilane road: Drive to the right unless you are passing or turning.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Right Turns",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=28",
  },
  {
    key: "turn-statute-signal-100-feet",
    quote:
      "(d) A signal of intention to turn right or left when required shall be given continuously during not less than the last 100 feet traveled by the vehicle before turning.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1064 - Signals required",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01064",
  },
  {
    key: "turn-statute-warn-before",
    quote:
      "(a) Before changing direction or materially slackening speed, a driver shall give warning of his or her intention with the hand signals as provided in section 1065 of this title, or with a mechanical or lighting device approved by the Commissioner of Motor Vehicles.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1064 - Signals required",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01064",
  },
  {
    key: "turn-statute-slowing-signal",
    quote:
      "(c) A person shall not stop or suddenly decrease the speed of a vehicle without first giving an appropriate signal in the manner provided in this section to the driver of any vehicle immediately to the rear when there is opportunity to give such signal.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1064 - Signals required",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01064",
  },
  {
    key: "turn-statute-hand-left",
    quote:
      "(1) Left turn. - Hand and arm extended horizontally.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1065 - Hand signals",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01065",
  },
  {
    key: "turn-statute-hand-right",
    quote:
      "(2) Right turn. - Hand and arm extended upward.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1065 - Hand signals",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01065",
  },
  {
    key: "turn-statute-hand-stop",
    quote:
      "(3) Stop or decrease speed. - Hand and arm extended downward.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1065 - Hand signals",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01065",
  },
  {
    key: "turn-statute-hand-left-side",
    quote:
      "Except as provided in subsection (b) of this section, all signals to indicate change of speed or direction, when given by hand, shall be given from the left side of the vehicle and in the following manner:",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1065 - Hand signals",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01065",
  },
  {
    key: "lane-statute-single-lane",
    quote:
      "(1) A vehicle shall only be driven, as nearly as practicable, entirely within a single lane and shall not be moved from that lane until the driver has first ascertained that the movement can be made with safety.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1038 - Driving on roadways laned for traffic",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01038",
  },
  {
    key: "lane-statute-right-half",
    quote:
      "(a) Upon all roadways of sufficient width, a vehicle shall be driven upon the right half of the roadway, except as follows:",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1031 - Driving to right",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01031",
  },
  {
    key: "lane-statute-backing",
    quote:
      "(a) The driver of a vehicle shall not back the same unless such movement can be made with safety and without interfering with other traffic.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1113 - Limitations on backing",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01113",
  },
  {
    key: "lane-statute-no-backing-controlled",
    quote:
      "(b) The driver of a vehicle shall not back the same upon any shoulder or roadway of any controlled-access highway.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1113 - Limitations on backing",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01113",
  },
  {
    key: "roundabout-definition",
    quote:
      "In a marked disabled parking area Roundabouts A roundabout is an intersection control feature where traffic enters and exits only through right turns and proceeds in a counter clockwise direction.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Roundabouts",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=30",
  },
  {
    key: "roundabout-yield",
    quote:
      "Drivers must yield the right of way to traffic in the roundabout.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Roundabouts",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=31",
  },
  {
    key: "roundabout-safe-gap",
    quote:
      "Enter the roundabout only when there is a safe gap in traffic.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Roundabouts",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=31",
  },
  {
    key: "roundabout-pedestrians",
    quote:
      "Like all intersections, you must also yield to pedestrians and bicyclists when entering or exiting a roundabout.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Roundabouts",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=31",
  },
  {
    key: "roundabout-signal-exit",
    quote:
      "Always use your signal to show your intention to exit the roundabout.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Roundabouts",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=31",
  },
  {
    key: "roundabout-no-lane-change",
    quote:
      "Drivers may not change lanes once in the roundabout.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Roundabouts",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=31",
  },
  {
    key: "roundabout-two-lane",
    quote:
      "When entering a two-lane roundabout with no signs or arrows the right lane is permitted to make right turning or through movements while the left lane is permitted to make left turns or through movements.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Roundabouts",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=31",
  },
  {
    key: "roundabout-slow-speeds",
    quote:
      "Vehicle speeds approaching, within, and exiting the roundabout should be slow.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Roundabouts",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=31",
  },
  {
    key: "roundabout-emergency",
    quote:
      "If you are already in the roundabout pull over when you have safely exited the roundabout.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Roundabouts",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=31",
  },
  {
    key: "roundabout-statute-right-of-island",
    quote:
      "(c) A vehicle passing around a rotary traffic island shall be driven only to the right of the island.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1037 - One-way roadways and rotaries",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01037",
  },
  {
    key: "moveover-pull-right-stop",
    quote:
      "If you see or hear a vehicle with flashing blue or red signal lights and/or sounding a siren, approaching from any direction, the law says you must pull over to the right side of the road and stop.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Move Over Law",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=32",
  },
  {
    key: "moveover-remain-stopped",
    quote:
      "You must remain stopped until the emergency or law enforcement vehicle has gone by.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Move Over Law",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=32",
  },
  {
    key: "moveover-stationary-caution",
    quote:
      "If you see a police vehicle with flashing blue lights, or an emergency vehicle with flashing red lights, which is stopped, you must always proceed with caution (slow down).",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Move Over Law",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=32",
  },
  {
    key: "moveover-lane-change",
    quote:
      "If you are on a four-lane highway, such as an Interstate, the law also requires you to make a lane change if you can do so safely.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Move Over Law",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=32",
  },
  {
    key: "moveover-maintenance",
    quote:
      "The law also requires drivers yield the right of way to any state, city or town maintenance vehicle working on a highway.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Move Over Law",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=32",
  },
  {
    key: "moveover-snowplough",
    quote:
      "For example, a driver approaching a snowplow with lights flashing must proceed with caution and yield the right of way.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Move Over Law",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=32",
  },
  {
    key: "moveover-amber",
    quote:
      "NOTE: Towing and repair vehicles usually have amber-colored flashing lights.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Move Over Law",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=32",
  },
  {
    key: "moveover-20-below",
    quote:
      "If you are unable to change lanes you must slow down to 20 mph below the speed limit in order to go by the stopped vehicles.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Interstate Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=52",
  },
  {
    key: "moveover-interstate-lane-change",
    quote:
      "The law says you must proceed with caution and make a lane change away from the emergency vehicle as soon as it is safe to do so.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Interstate Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=52",
  },
  {
    key: "moveover-statute-workzone",
    quote:
      "The operator of a vehicle approaching a properly designated work zone shall proceed with caution and slow down to a reasonable, safe, and prudent speed given the safety conditions and posted speed limit.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1050 - Operation on approach of law enforcement and emergency vehicles",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01050",
  },
  {
    key: "moveover-statute-stay-in-lane",
    quote:
      "If the operator of the approaching vehicle must remain in the lane adjacent to the stationary vehicle, then the operator shall slow down to a reasonable, safe, and prudent speed given the safety conditions and posted speed limit.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1050 - Operation on approach of law enforcement and emergency vehicles",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01050",
  },
  {
    key: "moveover-statute-workers-side",
    quote:
      "If workers are only present on one side of a multilane highway and safety conditions permit, the operator shall remain in or make a lane change into a lane farther away from the workers.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1050 - Operation on approach of law enforcement and emergency vehicles",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01050",
  },
  {
    key: "emerg-statute-exceed-limits",
    quote:
      "(4) may exceed the maximum speed limits; and",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1015 - Authorized emergency vehicles",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01015",
  },
  {
    key: "emerg-statute-red-signal",
    quote:
      "(2) may proceed past a red or stop signal or stop sign, but only after slowing down as may be necessary for safe operation;",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1015 - Authorized emergency vehicles",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01015",
  },
  {
    key: "emerg-statute-school-bus",
    quote:
      "(3) shall come to a full stop when approaching a school bus that is flashing red lights and may proceed only when the flashing red lights are extinguished;",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1015 - Authorized emergency vehicles",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01015",
  },
  {
    key: "police-lights-siren",
    quote:
      "Police Stops Police vehicles attempting to stop drivers will do so by turning on flashing lights, or flashing lights and a siren.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Police Stops",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=31",
  },
  {
    key: "police-pull-right",
    quote:
      "Drive as close as you safely can to the right side of the road.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Police Stops",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=31",
  },
  {
    key: "police-not-in-intersection",
    quote:
      "Do not stop in an intersection or pull into the center median of a divided highway.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Police Stops",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=31",
  },
  {
    key: "police-keep-belt",
    quote:
      "Keep your safety belt fastened until the officer has seen you wearing it.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Police Stops",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=31",
  },
  {
    key: "police-limit-movements",
    quote:
      "Limit your movements and those of any passengers.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Police Stops",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=31",
  },
  {
    key: "police-show-documents",
    quote:
      "Show your license, vehicle registration, and proof of insurance when requested by the officer.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Police Stops",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=31",
  },
  {
    key: "police-stay-in-vehicle",
    quote:
      "Do not get out unless requested.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Police Stops",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=31",
  },
  {
    key: "police-interior-lights",
    quote:
      "If in a dimly lit area turn on the vehicle's interior lights, after stopping, and before the officer approaches.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Police Stops",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=31",
  },
  {
    key: "police-not-roadside-argument",
    quote:
      "Roadside isn't the place to argue traffic offenses.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Police Stops",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=31",
  },
  {
    key: "police-statute-eluding",
    quote:
      "(a) No operator of a motor vehicle shall fail to bring his or her vehicle to a stop when signaled to do so by an enforcement officer:",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1133 - Eluding a police officer",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01133",
  },
  {
    key: "rail-no-gate-crossing",
    quote:
      "RULES OF THE ROAD AT RAILROAD CROSSINGS It is against the law to drive your vehicle through, around, or under a closed railroad gate.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Rules of the Road at Railroad Crossings",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=38",
  },
  {
    key: "rail-no-passing",
    quote:
      "It is also against the law to pass another vehicle at a railroad crossing.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Rules of the Road at Railroad Crossings",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=38",
  },
  {
    key: "rail-reduced-speed",
    quote:
      "The driver of every vehicle shall drive at a safe, reduced speed when approaching and crossing any public or private railroad grade crossing.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Rules of the Road at Railroad Crossings",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=38",
  },
  {
    key: "rail-stop-15-feet",
    quote:
      "By law, drivers must STOP not less than 15 feet from the nearest rail when: 1.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Rules of the Road at Railroad Crossings",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=38",
  },
  {
    key: "rail-proceed-when-safe",
    quote:
      "After bringing the vehicle to a full STOP when required in the above cases, the motor vehicle may be driven across the tracks when it is safe to do so.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Rules of the Road at Railroad Crossings",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=38",
  },
  {
    key: "rail-pedestrians-too",
    quote:
      "NOTE: Pedestrians, bicyclists, and moped riders also must observe railroad warning signals and may not cross railroad tracks until it is safe to do so.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Rules of the Road at Railroad Crossings",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=38",
  },
  {
    key: "rail-emergency-number",
    quote:
      "If a dangerous condition exists at a rail crossing, call the number listed on the emergency sign.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Rules of the Road at Railroad Crossings",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=38",
  },
  {
    key: "rail-statute-50-15",
    quote:
      "(a) An operator approaching a railroad grade crossing shall stop within 50 feet of, but not nearer than 15 feet from, the nearest rail of the railroad and may not proceed until he or she can do so safely when:",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1071 - Railroad grade crossings",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01071",
  },
  {
    key: "rail-statute-signal-device",
    quote:
      "(1) an electric or mechanical signal device gives warning of the immediate approach of a railroad train or other on-track equipment;",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1071 - Railroad grade crossings",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01071",
  },
  {
    key: "rail-statute-gate-lowered",
    quote:
      "(2) a crossing gate is lowered or a flagger gives a signal of the approach or passage of a railroad train or other on-track equipment;",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1071 - Railroad grade crossings",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01071",
  },
  {
    key: "rail-statute-train-visible",
    quote:
      "(4) a railroad train or other on-track equipment is plainly visible and is in hazardous proximity to or is at the crossing; or",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1071 - Railroad grade crossings",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01071",
  },
  {
    key: "rail-statute-no-gate-bypass",
    quote:
      "(b) No operator shall drive any vehicle through, around, or under any crossing gate or barrier at a railroad crossing while the gate or barrier is closed or is being opened or closed.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1071 - Railroad grade crossings",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01071",
  },
  {
    key: "rail-statute-buses-must-stop",
    quote:
      "(B) any school bus or multifunction school activity bus; and",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1072 - Certain vehicles must stop",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01072",
  },
  {
    key: "rail-statute-no-gear-shift",
    quote:
      "(2) After stopping as required in this subsection and upon proceeding when it is safe to do so, the driver of any such vehicle shall cross so that there will be no necessity for changing gears while traversing the crossing, and the driver shall not shift gears while crossing the track or tracks.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1072 - Certain vehicles must stop",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01072",
  },
  {
    key: "workzone-definition",
    quote:
      "A work zone is an area along a highway where there is construction, maintenance, or utility work.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Work Zone Safety",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=36",
  },
  {
    key: "workzone-mobile",
    quote:
      "A work zone may be stationary, or it may be a mobile operation that moves down the road slowly, as in the case of line striping, mowing, and snow removal.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Work Zone Safety",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=36",
  },
  {
    key: "workzone-crashes-before",
    quote:
      "Many crashes occur before the actual work area, where drivers are slowing down and/or merging.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Work Zone Safety",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=36",
  },
  {
    key: "workzone-rear-end",
    quote:
      "Most crashes in work zones are rear end crashes that are caused by driving too fast for conditions and failing to maintain a safe following distance.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Work Zone Safety",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=36",
  },
  {
    key: "workzone-merge-early",
    quote:
      "Be courteous, and merge into the appropriate lane as soon as it is safe to do so.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Work Zone Safety",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=36",
  },
  {
    key: "workzone-flagger-authority",
    quote:
      "A flagger has the legal authority to control traffic and must be obeyed.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Flaggers",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=37",
  },
  {
    key: "workzone-flagger-paddles",
    quote:
      "Flaggers use stop/slow paddles, or sometimes orange flags, to guide traffic safely through the work zone.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Flaggers",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=37",
  },
  {
    key: "workzone-channeling",
    quote:
      "Channeling Devices Cones, drums, and barricades are often used in work zones to keep traffic out of hazardous roadwork areas and to guide traffic safely through the work zone.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Channeling Devices",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=37",
  },
  {
    key: "workzone-arrow-panels",
    quote:
      "Flashing arrow panels Flashing arrow panels may also be used to guide drivers into the correct lane.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Flashing arrow panels",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=37",
  },
  {
    key: "workzone-caution-mode",
    quote:
      "Drivers should slow down when they see the panels in \"caution\" mode.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Flashing arrow panels",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=37",
  },
  {
    key: "workzone-low-shoulder",
    quote:
      "If your wheels drop off the pavement onto a low shoulder, reduce speed without braking, and turn back onto the pavement very carefully at a slow speed.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Low Shoulders",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=38",
  },
  {
    key: "ped-watch-carefully",
    quote:
      "Be especially alert for young, elderly, disabled or intoxicated pedestrians.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Pedestrians",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=38",
  },
  {
    key: "ped-no-pass-stopped-vehicle",
    quote:
      "When a vehicle ahead of you stops for a pedestrian, do not pass the stopped vehicle even if there are two lanes provided.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Pedestrians",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=39",
  },
  {
    key: "ped-frequent-cause-of-death",
    quote:
      "This is a frequent cause of death for pedestrians.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Pedestrians",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=39",
  },
  {
    key: "ped-careless-still-yield",
    quote:
      "Even when pedestrians cross the street carelessly, the driver must yield.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Pedestrians",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=39",
  },
  {
    key: "ped-do-not-block-crosswalk",
    quote:
      "Do not block a crosswalk when stopped or waiting to make a turn.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Pedestrians",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=39",
  },
  {
    key: "ped-blind-white-cane",
    quote:
      "When a pedestrian who has a white cane or is being led by a guide dog is crossing or waiting to cross the street ahead of you, you must stop and yield the right-of-way.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Pedestrians",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=39",
  },
  {
    key: "ped-turning-side-streets",
    quote:
      "When you are turning, look for and yield to pedestrians crossing side streets.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Pedestrians",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=39",
  },
  {
    key: "ped-driveway-sidewalk",
    quote:
      "Watch for pedestrians whenever you cross a sidewalk or road shoulder, such as entering or leaving an alley, driveway or private road.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Pedestrians",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=39",
  },
  {
    key: "ped-children-quick",
    quote:
      "Children often move quickly and do not check for traffic.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Pedestrians",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=39",
  },
  {
    key: "ped-no-hitchhikers",
    quote:
      "Do not stop to pick up hitchhikers on the Interstate or the ramps.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Pedestrians",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=39",
  },
  {
    key: "ped-must-not-step-out",
    quote:
      "Pedestrian Responsibilities Although drivers must yield to pedestrians, pedestrians must not suddenly leave a curb or other safe waiting place and walk into the path of a vehicle if it is so close that it is an immediate hazard.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Pedestrian Responsibilities",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=40",
  },
  {
    key: "ped-walk-facing-traffic",
    quote:
      "If there are no sidewalks, you should walk as far as possible to the left side of the road facing traffic.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Pedestrian Responsibilities",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=40",
  },
  {
    key: "ped-dont-walk-flashing",
    quote:
      "Do not start to cross while the pedestrian signal is flashing \"Don't Walk\".",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Pedestrian Responsibilities",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=40",
  },
  {
    key: "ped-backing-driveway",
    quote:
      "Always be extra watchful when backing in or out of a driveway.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Children at Play",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=40",
  },
  {
    key: "ped-statute-crosswalk-yield",
    quote:
      "(a) If traffic-control signals are not in operation, the driver of a vehicle shall yield the right of way, slowing down or stopping if necessary, to a pedestrian crossing the roadway within a crosswalk.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1051 - Pedestrians' right of way in crosswalks",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01051",
  },
  {
    key: "ped-statute-no-overtake",
    quote:
      "(c) If any vehicle is stopped at a marked crosswalk or at any unmarked crosswalk at an intersection to permit a pedestrian to cross the roadway, the driver of any other vehicle approaching from the rear may not overtake and pass the stopped vehicle.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1051 - Pedestrians' right of way in crosswalks",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01051",
  },
  {
    key: "ped-statute-jaywalk",
    quote:
      "(a) Every pedestrian crossing a roadway at any point other than within a marked crosswalk shall yield the right of way to all vehicles upon the roadway.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1052 - Crossing except at crosswalks",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01052",
  },
  {
    key: "ped-statute-no-diagonal",
    quote:
      "(d) No pedestrian may cross a roadway intersection diagonally unless authorized by official traffic control devices or an enforcement officer.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1052 - Crossing except at crosswalks",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01052",
  },
  {
    key: "ped-statute-left-side",
    quote:
      "(b) Any pedestrian walking along and upon a highway shall, when practicable, walk only on the left side of the roadway or its shoulder facing the direction of possible oncoming traffic.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1055 - Pedestrians on roadways",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01055",
  },
  {
    key: "ped-statute-white-cane",
    quote:
      "(b) It is unlawful for any person, unless totally or partially blind or otherwise having a severe visual disability, while on any public street or highway, to carry in a raised or extended position a cane or walking stick that is white in color or white tipped with red.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1057 - Duty toward persons who are blind",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01057",
  },
  {
    key: "bus-no-pass-red-lights",
    quote:
      "Sharing the Road with School Buses School Bus Stops It is against the law to pass a school bus which has stopped and has its red warning lights on.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with School Buses",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=40",
  },
  {
    key: "bus-never-from-any-direction",
    quote:
      "Never pass from any direction when the red lights are on.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with School Buses",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=40",
  },
  {
    key: "bus-yellow-then-red",
    quote:
      "When a school bus is on the highway and is about to pick up or discharge students, the school bus driver activates the alternately flashing yellow lights and begins slowing down.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with School Buses",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=40",
  },
  {
    key: "bus-prepare-to-stop",
    quote:
      "You should be preparing to stop.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with School Buses",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=40",
  },
  {
    key: "bus-red-means-stop",
    quote:
      "Once the red warning lights have been activated you must stop your vehicle.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with School Buses",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=41",
  },
  {
    key: "bus-school-yard",
    quote:
      "Remember, even in a school yard, you must not pass a stopped school bus with its alternately flashing red warning lights activated.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with School Buses",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=41",
  },
  {
    key: "bus-divided-highway-exception",
    quote:
      "You do not have to stop on a divided highway if the school bus is traveling in the opposite direction.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with School Buses",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=41",
  },
  {
    key: "bus-concrete-barrier",
    quote:
      "A concrete barrier may be used to separate traffic from the bus, and you are not required to stop.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with School Buses",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=41",
  },
  {
    key: "bus-five-points",
    quote:
      "In Vermont, if you are found guilty of passing a stopped school bus with its warning lights on, you will be subject to a substantial fine and five points on your driver's license.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with School Buses",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=41",
  },
  {
    key: "bus-statute-stop-immediately",
    quote:
      "(a) The operator of a motor vehicle, including authorized emergency vehicles under section 1015 of this title, upon meeting or overtaking a vehicle marked and equipped as provided in section 1283 of this title that has stopped on the highway for the purpose of receiving or discharging public or private schoolchildren, shall stop his or her vehicle immediately and shall keep it stationary while the flashing red signal lights are in operation.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1075 - Passing school bus",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01075",
  },
  {
    key: "bus-statute-separate-roadways",
    quote:
      "(b) The driver of a vehicle need not stop upon a highway with separate roadways upon meeting or overtaking a school bus that is on a different roadway, or upon a controlled access highway where the school bus is stopped in a loading zone that is a part of or adjacent to the highway at a point where pedestrians are not permitted to cross the roadway.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1075 - Passing school bus",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01075",
  },
  {
    key: "bike-right-to-road",
    quote:
      "Under state law bicyclists have the right to operate on all roads, unless they are specially prohibited, such as on limited-access highways like the Interstate.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Bicyclists",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=41",
  },
  {
    key: "bike-same-rules",
    quote:
      "The same traffic rules and regulations for vehicle drivers apply to bicyclists.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Bicyclists",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=41",
  },
  {
    key: "bike-four-feet",
    quote:
      "Leave at least four feet of passing space between the right side of your vehicle and a bicyclist.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Bicyclists",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=41",
  },
  {
    key: "bike-narrow-road-wait",
    quote:
      "If the road is too narrow for motor vehicles and bicycles to ride safely side by side, wait until it is safe to pass the bicyclist without forcing them off the side of the road.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Bicyclists",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=41",
  },
  {
    key: "bike-two-abreast",
    quote:
      "Be aware that two bicyclists may legally ride side by side.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Bicyclists",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=42",
  },
  {
    key: "bike-two-abreast-rule",
    quote:
      "Bicyclists are allowed to ride two abreast so long as they do not impede the normal and reasonable flow of traffic.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Bicyclists Responsibilities",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=42",
  },
  {
    key: "bike-take-the-lane",
    quote:
      "In some instances it is safest for a bicyclist to \"take the lane\" by riding toward the center of the lane.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Bicyclists",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=41",
  },
  {
    key: "bike-far-left-when-needed",
    quote:
      "Be aware that bicyclists are allowed to ride as far to the left as needed, when necessary to be safe.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Bicyclists",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=41",
  },
  {
    key: "bike-left-turn-allow",
    quote:
      "This is the proper maneuver and the cyclist should be allowed to safely complete the turn before being overtaken by motor vehicle traffic.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Bicyclists",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=41",
  },
  {
    key: "bike-yield-turning-left",
    quote:
      "When turning left at an intersection, yield to oncoming bicyclists just as you would yield to oncoming motorists.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Bicyclists",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=42",
  },
  {
    key: "bike-no-honking",
    quote:
      "Do not honk at a bicyclist unless you have good cause to warn them.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Bicyclists",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=41",
  },
  {
    key: "bike-four-errors",
    quote:
      "Turning left without noticing/yielding to an oncoming bicyclist. 2.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Common Vehicle-caused Collisions with Bicycles",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=42",
  },
  {
    key: "bike-door",
    quote:
      "Opening a vehicle door into the path of a bicyclist.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Common Vehicle-caused Collisions with Bicycles",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=42",
  },
  {
    key: "bike-ride-with-traffic",
    quote:
      "Always ride with through traffic on the right side of the road.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Bicyclists Responsibilities",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=42",
  },
  {
    key: "bike-hand-signals",
    quote:
      "You must always signal your intent to turn, using the proper hand signals.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Bicyclists Responsibilities",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=42",
  },
  {
    key: "bike-statute-four-feet",
    quote:
      "The individual operating a motor vehicle approaching or passing a vulnerable user as defined in subdivision 4(81) of this title shall exercise due care, which includes reducing speed and increasing clearance to a distance of at least four feet, to pass the vulnerable user safely, and shall cross the center of the highway only as provided in section 1035 of this title.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1033 - Passing motor vehicles and vulnerable users",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01033",
  },
  {
    key: "bike-statute-penalty",
    quote:
      "An individual who violates this subsection shall be subject to a civil penalty of not less than $200.00.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1033 - Passing motor vehicles and vulnerable users",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01033",
  },
  {
    key: "bike-statute-rights-duties",
    quote:
      "(c) Every person riding a bicycle is granted all of the rights and is subject to all of the duties applicable to operators of vehicles, except as to those provisions that:",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1136 - Rights and obligations of bicyclists",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01136",
  },
  {
    key: "bike-statute-lamp",
    quote:
      "(a) A person shall not operate a bicycle at nighttime from one-half hour after sunset until one-half hour before sunrise unless the bicycle or the bicyclist is equipped with a lamp on the front that emits a white light visible from a distance of at least 500 feet to the front.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1141 - Equipment on bicycles",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01141",
  },
  {
    key: "bike-statute-brake",
    quote:
      "(c) No person may operate a bicycle unless it is equipped with a brake that will enable the operator to make the braked wheels skid on dry, level, clean pavement.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1141 - Equipment on bicycles",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01141",
  },
  {
    key: "bike-statute-one-rider",
    quote:
      "(a) No individual propelling a bicycle may ride other than on or astride a permanent and regular seat attached to the bicycle.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1137 - Riding on bicycles",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01137",
  },
  {
    key: "bike-statute-no-sidewalk-ebike",
    quote:
      "A person shall not operate a motor-assisted bicycle on a sidewalk in Vermont.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1136 - Rights and obligations of bicyclists",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01136",
  },
  {
    key: "moto-same-rights",
    quote:
      "The motorcyclist has the same rights and responsibilities on the highway as drivers of other vehicles.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Motorcycles",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=43",
  },
  {
    key: "moto-more-than-four-seconds",
    quote:
      "Allow more than 4 seconds of following distance.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Motorcycles",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=43",
  },
  {
    key: "moto-four-second-cushion",
    quote:
      "Keep at least a four second space cushion when following a motorcyclist.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Motorcycles",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=43",
  },
  {
    key: "moto-no-brake-light",
    quote:
      "Motorcyclists often slow by downshifting or merely rolling off the throttle, thus not activating the brake light.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Motorcycles",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=43",
  },
  {
    key: "moto-signals-not-self-cancelling",
    quote:
      "Turn signals on a motorcycle usually are not self-canceling, thus some riders, (especially beginners) sometimes forget to turn them off after a turn or lane change.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Motorcycles",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=43",
  },
  {
    key: "moto-lane-position",
    quote:
      "Motorcyclists often adjust position within a lane to be seen more easily and to minimize the effects of wind, road debris, and passing vehicles.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Motorcycles",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=43",
  },
  {
    key: "moto-looks-farther",
    quote:
      "Because of its small size, a motorcycle may look farther away than it is.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Motorcycles",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=43",
  },
  {
    key: "moto-predict-closer",
    quote:
      "When checking traffic to turn at an intersection, predict a motorcycle is closer than it looks.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Motorcycles",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=43",
  },
  {
    key: "moto-hidden",
    quote:
      "Because of its small size, a motorcycle can be easily hidden by objects inside or outside a car (door posts, mirrors, passengers, bushes, trees, parked cars, fences, bridges, blind spots, etc).",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Motorcycles",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=43",
  },
  {
    key: "moto-full-lane",
    quote:
      "Motorcycles are entitled to a full lane.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Motorcycles",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=44",
  },
  {
    key: "moto-change-lanes-completely",
    quote:
      "When passing a motorcycle, change lanes completely.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Motorcycles",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=44",
  },
  {
    key: "moto-no-cut-in",
    quote:
      "Never cut in too closely just after you have overtaken a motorcycle.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Motorcycles",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=44",
  },
  {
    key: "moto-slippery-stopping",
    quote:
      "Stopping distance for motorcycles is nearly the same as for cars, but slippery pavement makes stopping quickly difficult.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Motorcycles",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=43",
  },
  {
    key: "moto-passenger",
    quote:
      "Carrying a passenger complicates a motorcyclist's task.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Motorcycles",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=43",
  },
  {
    key: "moto-night-lights",
    quote:
      "At night, single headlights and taillights on motorcycles can blend into the lights of other traffic.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Motorcycles",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=43",
  },
  {
    key: "moto-statute-helmet",
    quote:
      "A person may not operate or ride upon a motorcycle upon a highway unless he or she properly wears protective headgear of a type that conforms to the federal Motor Vehicle Safety Standards contained in 49 C.F.R.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1256 - Motorcycles; headgear",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01256",
  },
  {
    key: "truck-no-zones",
    quote:
      "WATCH BLIND SPOTS-THE \"NO-ZONES\" Large trucks have blind spots, or No-Zones, around the front, back and sides of the truck.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Watch Blind Spots - the No-Zones",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=44",
  },
  {
    key: "truck-mirror-rule",
    quote:
      "Remember, if you can't see the trucks rear (side) view mirrors then the truck driver can't see you.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Watch Blind Spots - the No-Zones",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=44",
  },
  {
    key: "truck-passing-takes-longer",
    quote:
      "Passing It takes longer to pass a large truck.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Large Trucks",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=44",
  },
  {
    key: "truck-see-cab",
    quote:
      "Be sure you can see the cab of the truck in your inside rearview mirror before returning to the right lane.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Large Trucks",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=44",
  },
  {
    key: "truck-backing",
    quote:
      "Never go around a truck that is preparing to back up or is in the process of backing up.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Large Trucks",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=44",
  },
  {
    key: "truck-rear-blind-spot",
    quote:
      "Rear Blind spots Unlike other motor vehicles, trucks have long blind spots directly behind them.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Large Trucks",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=45",
  },
  {
    key: "truck-wide-right-turn",
    quote:
      "Truck drivers often need to swing wide to the left in order to make a right turn.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Large Trucks",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=45",
  },
  {
    key: "truck-no-cut-in-curb",
    quote:
      "Do not cut in between the truck and the curb or shoulder to the right; this increases the possibility of a crash.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Large Trucks",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=45",
  },
  {
    key: "truck-bigger-means",
    quote:
      "The longer it takes the truck to stop.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Large Trucks",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=44",
  },
  {
    key: "truck-70-percent",
    quote:
      "In more than 70% of fatal crashes involving automobiles and trucks, it was the driver of the other vehicle, not the truck driver, who caused the crash.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Large Trucks",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=44",
  },
  {
    key: "slow-vehicle-emblem",
    quote:
      "It is identified by an orange and red triangular sign mounted on the rear of the vehicle.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Slow Moving Vehicles",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=45",
  },
  {
    key: "slow-vehicle-wide-turns",
    quote:
      "Slow moving vehicles may make wide turns at unmarked entrances to the right or left of the roadway.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Slow Moving Vehicles",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=45",
  },
  {
    key: "slow-vehicle-right-to-road",
    quote:
      "Agricultural vehicle operators have a right to drive their vehicles on the road.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Slow Moving Vehicles",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=45",
  },
  {
    key: "slow-vehicle-more-than-four",
    quote:
      "It may be necessary to allow for more than a four second following distance.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Slow Moving Vehicles",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=45",
  },
  {
    key: "slow-vehicle-pass-cautiously",
    quote:
      "Pass slow moving vehicles cautiously, and only if conditions are safe, and there is no on-coming traffic.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Slow Moving Vehicles",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=45",
  },
  {
    key: "slow-vehicle-wider-than-road",
    quote:
      "Some farm equipment is wider than the road itself.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Slow Moving Vehicles",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=45",
  },
  {
    key: "wheels-skateboards",
    quote:
      "Users can move abruptly and change direction unexpectedly into your travel path.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Skateboards, Scooters, etc.",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=43",
  },
  {
    key: "animals-rights-of-driver",
    quote:
      "Sharing the Road with Domestic Animals When on a public highway a person riding an animal, or driving an animal drawn vehicle, is granted all the rights of a driver of a motor vehicle.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Domestic Animals",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=46",
  },
  {
    key: "animals-reduce-speed",
    quote:
      "It shall be necessary for a motor vehicle operator to reduce speed when coming upon such a situation, and possibly even stop, in order to exercise every reasonable precaution to prevent the frightening of the animal/animals and to insure the safety and protection of the rider/driver.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Domestic Animals",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=46",
  },
  {
    key: "animals-no-horn",
    quote:
      "A motor vehicle operator should never blow their horn or rev their engine, especially when operating a motorcycle, so as not to startle the animal/animals when meeting , following, or passing such animals.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Domestic Animals",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=46",
  },
  {
    key: "animals-four-seconds",
    quote:
      "When following a horse with a rider, horse and wagon, or herded animals, leave at least a 4 second following distance.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Domestic Animals",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=46",
  },
  {
    key: "animals-full-lane",
    quote:
      "Use the full traffic lane to completely pass the animal and never cut quickly back into your lane.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Sharing the Road with Domestic Animals",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=46",
  },
  {
    key: "animals-statute-herded",
    quote:
      "(b) The operator of a motor vehicle shall yield to any animals being herded on or across a highway.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1127 - Control in presence of animals",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01127",
  },
  {
    key: "deer-crossing-signs",
    quote:
      "Driving cautiously in those areas on the highway marked with deer and moose crossing signs can save lives and prevent injuries.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Moose and Deer Safety",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=46",
  },
  {
    key: "deer-when-active",
    quote:
      "The presence of moose and deer on highways is most likely to occur during late evening, night time and early morning hours.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Moose and Deer Safety",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=46",
  },
  {
    key: "deer-freeze-or-bolt",
    quote:
      "The light from vehicle headlights may cause a deer to temporarily freeze and be unable to get out of the way of a vehicle, or it may bound at speeds up to 40 miles per hour towards their habitat.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Moose and Deer Safety",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=46",
  },
  {
    key: "deer-second-animal",
    quote:
      "Animals travel in pairs, so be prepared to see a second one once you see the first.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Moose and Deer Safety",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=46",
  },
  {
    key: "moose-heavier",
    quote:
      "Moose weigh much more than deer-more than a thousand pounds.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Moose and Deer Safety",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=46",
  },
  {
    key: "moose-land-on-vehicle",
    quote:
      "Also, they are much taller than deer, and in a collision can land on top of the vehicle and its occupants with crushing force.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Moose and Deer Safety",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=46",
  },
  {
    key: "moose-eyes-do-not-reflect",
    quote:
      "Because moose are taller, their eyes may not reflect in the vehicle's headlights.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Moose and Deer Safety",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=46",
  },
  {
    key: "moose-darker",
    quote:
      "Also, moose are more darkly colored than deer.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Moose and Deer Safety",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=46",
  },
  {
    key: "hazard-stay-home",
    quote:
      "When hazardous driving conditions are predicted, it's best to stay home and avoid unnecessary travel.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Floods and Storms",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=47",
  },
  {
    key: "hazard-no-cruise",
    quote:
      "Do not use cruise control.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Floods and Storms",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=47",
  },
  {
    key: "hazard-more-than-four-seconds",
    quote:
      "Keep more than four seconds of space between you and the motor vehicle in front of you.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Floods and Storms",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=47",
  },
  {
    key: "hazard-no-barricades",
    quote:
      "Do not drive around traffic barricades or past \"road closed\" signs.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Floods and Storms",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=47",
  },
  {
    key: "hazard-water-over-road",
    quote:
      "Do not drive where water is over the road.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Floods and Storms",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=47",
  },
  {
    key: "hazard-abandon-vehicle",
    quote:
      "If your vehicle stalls in a flooded area, abandon it as soon as possible.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Floods and Storms",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=47",
  },
  {
    key: "hazard-four-inches",
    quote:
      "As little as 4 inches of water can make it difficult to walk and can obstruct hazards from view.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Floods and Storms",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=47",
  },
  {
    key: "hazard-downed-wires",
    quote:
      "Never get near or cross downed wires.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Floods and Storms",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=47",
  },
  {
    key: "hazard-low-beams-fog",
    quote:
      "When visibility is poor, such as in fog, heavy rain, or heavy snow, use your low beam headlights.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Floods and Storms",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=47",
  },
  {
    key: "hazard-500-feet-headlights",
    quote:
      "If you cannot clearly see persons or vehicles 500 feet ahead, the law requires drivers to have headlights turned on.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Floods and Storms",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=47",
  },
  {
    key: "winter-hardest-season",
    quote:
      "Winter Driving Winter is the most difficult driving season, so use extra caution.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Winter Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=47",
  },
  {
    key: "winter-snow-tires",
    quote:
      "Make sure you've got good snow tires on all four wheels, and put them on early.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Winter Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=47",
  },
  {
    key: "winter-no-mixing-tires",
    quote:
      "Never combine different types",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Winter Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=47",
  },
  {
    key: "winter-clear-whole-vehicle",
    quote:
      "If you must drive, completely clear the ice and snow from your entire vehicle and be sure your wipers are clear of any ice buildup.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Winter Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=48",
  },
  {
    key: "winter-black-ice",
    quote:
      "When sleet, freezing rain or snow start to fall, black ice can quickly form and you may not be able to see it.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Winter Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=48",
  },
  {
    key: "winter-bridges-freeze-first",
    quote:
      "Bridges, ramps, and overpasses are likely to freeze first.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Winter Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=48",
  },
  {
    key: "winter-increase-following",
    quote:
      "Increase your following distance to more than 4 seconds.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Winter Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=48",
  },
  {
    key: "winter-awd-not-on-ice",
    quote:
      "Even vehicles with four wheel or all wheel drive do not have good traction on ice.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Winter Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=48",
  },
  {
    key: "winter-snowplough-visibility",
    quote:
      "Be especially careful near snowplows-they are hard to see because of the blowing snow they create.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Winter Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=48",
  },
  {
    key: "winter-half-tank",
    quote:
      "Always have at least a half tank of gas in your vehicle.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Winter Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=48",
  },
  {
    key: "winter-kit",
    quote:
      "Items you should keep in your vehicle include: windshield scraper and brush, small shovel, kitty litter or sand, extra clothing, food and water, cell phone, extra windshield washer fluid, a basic first aid kit, and flashlight.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Winter Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=48",
  },
  {
    key: "stranded-stay-with-vehicle",
    quote:
      "Remain in your vehicle where rescuers are most likely to find you.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - If you are caught in a blizzard or stranded",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=48",
  },
  {
    key: "stranded-engine-ten-minutes",
    quote:
      "Run the engine and heater about 10 minutes each hour to keep warm.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - If you are caught in a blizzard or stranded",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=48",
  },
  {
    key: "stranded-exhaust-pipe",
    quote:
      "To help protect from possible carbon monoxide poisoning, keep snow clear from the exhaust pipe.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - If you are caught in a blizzard or stranded",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=48",
  },
  {
    key: "stranded-distress-flag",
    quote:
      "Turn on hazard lights and hang a distress flag from the door handle, an antenna or window.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - If you are caught in a blizzard or stranded",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=48",
  },
  {
    key: "skid-cause",
    quote:
      "Most skids are caused by the driver's failure to react in time to adjust the vehicle's speed to road and traffic conditions.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Skidding",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=49",
  },
  {
    key: "skid-conditions",
    quote:
      "These conditions may include snow, ice, rain, dirt/gravel, and wet leaves.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Skidding",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=49",
  },
  {
    key: "skid-fwd-no-warning",
    quote:
      "There may be no such warning in a front-wheel drive, however.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Skidding",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=49",
  },
  {
    key: "skid-avoid-slower",
    quote:
      "How to Avoid Skidding On roads that may be slippery you should drive at a slower speed.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - How to Avoid Skidding",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=49",
  },
  {
    key: "skid-avoid-foot-off-gas",
    quote:
      "To slow down on a slippery road, you should take your foot off the gas pedal to lower your speed and help keep your vehicle under control.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - How to Avoid Skidding",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=49",
  },
  {
    key: "skid-squeeze-brakes",
    quote:
      "If you need to slow down more, gently \"squeeze\" your brakes with a slow, steady pressure.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - How to Avoid Skidding",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=49",
  },
  {
    key: "skid-abs-no-pumping",
    quote:
      "If your vehicle is equipped with anti-lock brakes use steady brake pressure, do not pump the brakes!",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - How to Avoid Skidding",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=49",
  },
  {
    key: "skid-recover-no-brakes",
    quote:
      "Don't hit the brakes, it will just make the skid worse.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - How to Control a Vehicle in a Skid",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=49",
  },
  {
    key: "skid-recover-steer",
    quote:
      "Steer in the direction you want the vehicle to go.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - How to Control a Vehicle in a Skid",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=49",
  },
  {
    key: "skid-recover-repeat",
    quote:
      "You might have to steer left and right a few times to get your vehicle completely under control.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - How to Control a Vehicle in a Skid",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=49",
  },
  {
    key: "abs-brake-and-steer",
    quote:
      "They allow you to brake and steer at the same time.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Anti-lock Brakes",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=49",
  },
  {
    key: "abs-noise-vibration",
    quote:
      "Expect noise and vibration in the brake pedal.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Anti-lock Brakes",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=49",
  },
  {
    key: "abs-light-stays-on",
    quote:
      "Note: If your ABS light stays on after you begin to drive, your vehicle's ABS system is not working.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Anti-lock Brakes",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=50",
  },
  {
    key: "light-daytime-20-percent",
    quote:
      "Reduced Visibility Daytime Driving Studies have shown that driving with low beam headlights on during the daytime reduces the risk of head-on collisions by more than 20%.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Daytime Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=50",
  },
  {
    key: "light-drls-not-headlights",
    quote:
      "These lights come on automatically and should not be confused with your headlights.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Daytime Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=50",
  },
  {
    key: "light-best-practice",
    quote:
      "The best practice is to always drive with at least your low beam headlights on, even in the daytime.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Daytime Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=50",
  },
  {
    key: "light-parking-lights",
    quote:
      "Note: Parking lights are to be used only when your vehicle is parked.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Daytime Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=50",
  },
  {
    key: "light-half-hour-rule",
    quote:
      "The law requires headlights on vehicles to be turned on a half hour after sunset to a half hour before sunrise.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Night Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=50",
  },
  {
    key: "light-drl-illusion",
    quote:
      "Be sure to turn on your headlights-your daytime running lights may give you the impression that your headlights are on.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Night Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=50",
  },
  {
    key: "light-see-four-seconds",
    quote:
      "You always need to be able to see 4 seconds ahead.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Night Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=50",
  },
  {
    key: "light-overdriving",
    quote:
      "When driving at night at 40 miles an hour, with low beam headlights, you are \"overdriving your headlights\".",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Night Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=50",
  },
  {
    key: "light-overdriving-meaning",
    quote:
      "This means that you cannot see far enough ahead to stop in the space you can see, and you may not be able to avoid a collision.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Night Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=50",
  },
  {
    key: "light-high-beam-when",
    quote:
      "USE HIGH AND LOW HEADLIGHT BEAMS PROPERLY Use high beam when driving in the open country with few other vehicles.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Use High and Low Headlight Beams Properly",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=50",
  },
  {
    key: "light-high-beam-still-slower",
    quote:
      "Even with the high beams, speed must be lower than by day.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Use High and Low Headlight Beams Properly",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=50",
  },
  {
    key: "light-low-beam-when",
    quote:
      "Always use low beam when approaching other vehicles or pedestrians so as not to blind the driver or pedestrian.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Use High and Low Headlight Beams Properly",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=50",
  },
  {
    key: "light-low-beam-following",
    quote:
      "Also use low beam when driving in areas with streetlights or fog and when following another vehicle.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Use High and Low Headlight Beams Properly",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=50",
  },
  {
    key: "light-dim-promptly",
    quote:
      "Courteous Drivers Dim Their Headlights When driving a motor vehicle at night, you should promptly dim your headlights when meeting or following another vehicle Approaching Headlights If you look directly at oncoming lights, you could be blinded for several seconds.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Courteous Drivers Dim Their Headlights",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=50",
  },
  {
    key: "light-look-right-edge",
    quote:
      "To avoid being temporarily blinded, you should look ahead towards the right edge of the",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Approaching Headlights",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=50",
  },
  {
    key: "light-statute-500-feet",
    quote:
      "(b) Every vehicle upon a highway within this State, at any time from 30 minutes after sunset to 30 minutes before sunrise and at any other time when, due to insufficient light or unfavorable atmospheric conditions, persons or vehicles on the highway are not clearly discernible at a distance of 500 feet ahead, shall display lighted lamps and illuminating devices as respectively required for different classes of vehicles, subject to exceptions with respect to parked vehicles.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1243 - Lights",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01243",
  },
  {
    key: "light-statute-150-feet",
    quote:
      "The light from the front lamps of a motor vehicle other than a motorcycle, while such vehicle is in motion, shall render any substantial object on the ground clearly visible at least 150 feet ahead of such vehicle and, while such vehicle is at rest, shall be visible for at least 200 feet in the direction in which such vehicle is headed.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1244 - Illumination required",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01244",
  },
  {
    key: "light-statute-plate-50-feet",
    quote:
      "(b) Either a taillamp or a separate lamp shall be so constructed and placed as to illuminate with a white light all parts of the rear registration number plate on the vehicle so that all the numerals, letters, and marks on the plate are clearly visible and legible for at least 50 feet from the rear of the vehicle.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1248 - Taillights",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01248",
  },
  {
    key: "inter-definition",
    quote:
      "Interstates are multiple-lane, divided roads designed for high-speed travel.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Interstate Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=51",
  },
  {
    key: "inter-speed-change-lanes",
    quote:
      "These are made for vehicles to speed up or slow down when entering or exiting the traffic lanes.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Speed-Change Lanes",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=51",
  },
  {
    key: "inter-entrance-ramp",
    quote:
      "The entrance ramp takes you to the acceleration lane where vehicles are moving up to interstate speeds.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Entrance Ramp",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=51",
  },
  {
    key: "inter-entering-must-yield",
    quote:
      "The entering driver must yield to drivers already on the interstate.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Entrance Ramp",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=51",
  },
  {
    key: "inter-entrance-sequence",
    quote:
      "Stay to the right, signal left, speed up, check blind spot over left shoulder and make a lane change when the travel lane is safe.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Entrance Ramp",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=51",
  },
  {
    key: "inter-exit-ramp",
    quote:
      "When leaving an interstate you should signal for a lane change, move to the deceleration lane closest to the exit, and slow down to the posted exit speed.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Exit Ramp",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=51",
  },
  {
    key: "inter-four-second-rule",
    quote:
      "The easiest way to tell if you are a safe distance from the vehicle ahead of you is to use the 4-second distance rule.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Safe Driving on the Interstate",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=51",
  },
  {
    key: "inter-never-stop-in-lane",
    quote:
      "It is illegal to stop on an interstate unless it is an emergency.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Safe Driving on the Interstate",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=52",
  },
  {
    key: "inter-breakdown-lane",
    quote:
      "If you must stop for an emergency, move into the breakdown lane and as far to the right as possible.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Safe Driving on the Interstate",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=52",
  },
  {
    key: "inter-raise-hood",
    quote:
      "If you need help, raise the hood of your vehicle, tie a white cloth on the vehicle, and stay in your vehicle. 6.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Safe Driving on the Interstate",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=52",
  },
  {
    key: "inter-right-lane",
    quote:
      "You should drive in the right lane unless you are passing another vehicle or a sign indicates otherwise. 7.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Safe Driving on the Interstate",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=52",
  },
  {
    key: "inter-missed-exit",
    quote:
      "If you miss your exit ramp, never stop and back up and never use the emergency turnaround.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Safe Driving on the Interstate",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=52",
  },
  {
    key: "inter-crossovers",
    quote:
      "These crossovers are for emergency and maintenance vehicles only.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Safe Driving on the Interstate",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=52",
  },
  {
    key: "inter-no-cruise-bad-weather",
    quote:
      "Go on to the next exit. 10. Never use cruise control in driving conditions such as rain, fog, snow, ice, etc. 11. When you are approaching any law enforcement, emergency, or repair vehicle with a flashing light on the side of the road, slow down.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Safe Driving on the Interstate",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=52",
  },
  {
    key: "inter-tired",
    quote:
      "Driving when tired is a major cause of crashes on interstates.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Safe Driving on the Interstate",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=52",
  },
  {
    key: "pass-signal-and-check",
    quote:
      "Signal left to let other drivers know that you will be pulling out, look to the rear to see if your vehicle is being passed (look in the rearview mirrors and over your left shoulder to check the blind spot), change lanes and pass on the left.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Passing",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=52",
  },
  {
    key: "pass-enough-distance",
    quote:
      "When approaching another vehicle or bicycle from the rear and you want to pass, be sure you have enough distance to pass safely.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Passing",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=52",
  },
  {
    key: "pass-on-the-left",
    quote:
      "Pass vehicles and bicycles on the left.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Passing",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=53",
  },
  {
    key: "pass-four-feet-clearance",
    quote:
      "Leave at least four feet of clearance between your vehicle and any vehicle or bicycle you are passing.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Passing",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=53",
  },
  {
    key: "pass-see-in-mirror",
    quote:
      "You should go far enough beyond the motor vehicle or bicycle you are passing so that you are able to see the entire front of the motor vehicle or the bicyclist in your inside rearview mirror.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Passing",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=53",
  },
  {
    key: "pass-return-right",
    quote:
      "Use your right signal, check the right blind spot over your shoulder, and return to the right side of the road.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Passing",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=53",
  },
  {
    key: "pass-being-passed",
    quote:
      "When you are being passed by another vehicle, you should slow a little and keep right.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Passing",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=53",
  },
  {
    key: "pass-right-multilane",
    quote:
      "A driver may pass on the right of another vehicle on a multilane road.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Passing",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=53",
  },
  {
    key: "pass-right-turning-left",
    quote:
      "On roads that are not multilane, a driver may pass on the right of a vehicle or bicycle turning or preparing to turn left, if there is room to go by safely.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Passing",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=53",
  },
  {
    key: "pass-never-off-pavement",
    quote:
      "Under no conditions can a motor vehicle be passed by driving off the pavement or main traveled part of the road.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Passing",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=53",
  },
  {
    key: "pass-headlight-flash",
    quote:
      "At night it might be necessary to blink your headlights from low to high to low beam to warn the driver in front of you that you intend to pass.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Passing",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=52",
  },
  {
    key: "pass-statute-100-feet-intersection",
    quote:
      "(2) when approaching within 100 feet of, or traversing, any intersection or railroad grade crossing unless otherwise indicated by official traffic control devices; or",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1035 - Limitations",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01035",
  },
  {
    key: "pass-statute-crest-curve",
    quote:
      "(1) when approaching or upon the crest of a grade or upon a curve in the highway where the driver's view is in any way obstructed;",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1035 - Limitations",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01035",
  },
  {
    key: "pass-statute-bridge",
    quote:
      "(3) when the view is obstructed upon approaching within 100 feet of any bridge, viaduct, or tunnel.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1035 - Limitations",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01035",
  },
  {
    key: "pass-statute-200-feet-return",
    quote:
      "In every event, the overtaking vehicle shall return to an authorized lane of travel as soon as practicable and, if the passing movement involves the use of a lane authorized for vehicles approaching from the opposite direction, before coming within 200 feet of any approaching vehicle or a vulnerable user.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1035 - Limitations",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01035",
  },
  {
    key: "pass-statute-no-passing-zone",
    quote:
      "(b) Where signs are in place to define a no-passing zone as set forth in subsection (a) of this section, no driver shall at any time drive to the left of the center of the roadway within the no-passing zone.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1036 - No-passing zones",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01036",
  },
  {
    key: "pass-statute-right-when",
    quote:
      "(1) when the vehicle overtaken is making or about to make a left turn;",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1034 - Passing on the right",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01034",
  },
  {
    key: "pass-statute-not-off-pavement",
    quote:
      "(b) In no event may a vehicle be passed by driving off the pavement or main-traveled portion of the roadway.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1034 - Passing on the right",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01034",
  },
  {
    key: "pass-statute-overtaken-give-way",
    quote:
      "(2) Except when overtaking and passing on the right is permitted, the driver of an overtaken motor vehicle shall give way to the right in favor of the overtaking motor vehicle and shall not increase the speed of his or her vehicle until completely passed by the overtaking vehicle.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1033 - Passing motor vehicles and vulnerable users",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01033",
  },
  {
    key: "divided-statute-no-crossing",
    quote:
      "No vehicle shall be driven over, across, or within any dividing space, barrier, or section.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1040 - Driving on divided highways",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01040",
  },
  {
    key: "dui-bac-08",
    quote:
      "Vermont law states that when a person's blood alcohol concentration (BAC) is .08 or above, he/she is \"under the influence\" or \"impaired\".",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Impaired Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=53",
  },
  {
    key: "dui-impaired-below-08",
    quote:
      "It is important to remember that a person is impaired at blood alcohol concentration levels below .08. Even one drink impairs your judgment.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Impaired Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=53",
  },
  {
    key: "dui-under-21-02",
    quote:
      "People under the age of 21 who operate a vehicle with an alcohol concentration of .02 or more can receive a civil traffic violation.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Impaired Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=53",
  },
  {
    key: "dui-under-21-consequences",
    quote:
      "The Driver's License will be suspended and the driver must complete an alcohol and driving education program at their own expense.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Impaired Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=53",
  },
  {
    key: "dui-prescription-drugs",
    quote:
      "Drugs, even prescription and over the counter drugs, can seriously affect your ability to drive safely.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Impaired Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=53",
  },
  {
    key: "dui-time-only-way",
    quote:
      "Time is the only way to reduce the effects of alcohol.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Impaired Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=54",
  },
  {
    key: "dui-no-coffee",
    quote:
      "Drinking coffee, taking a cold shower or running around will not sober a person up.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Impaired Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=54",
  },
  {
    key: "dui-hour-per-drink",
    quote:
      "It takes at least an hour per drink for the alcohol and its effects to be processed out of your body.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Impaired Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=54",
  },
  {
    key: "dui-coffee-shower-exercise",
    quote:
      "Drinking coffee, taking a shower, exercising, etc., cannot reduce your BAC or the effects of alcohol.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Impaired Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=55",
  },
  {
    key: "dui-depressant",
    quote:
      "Alcohol, in fact, is a depressant; it will affect you in the following ways:",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Impaired Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=54",
  },
  {
    key: "dui-effect-judgment",
    quote:
      "Judgment- You may no longer be able to make good decisions about driving.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Impaired Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=54",
  },
  {
    key: "dui-effect-vision",
    quote:
      "Vision - Your overall vision may be greatly reduced.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Impaired Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=54",
  },
  {
    key: "dui-effect-reaction",
    quote:
      "Reaction time - It will take you longer to react and move your foot from the gas pedal to the brake.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Impaired Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=54",
  },
  {
    key: "dui-effect-speed-sense",
    quote:
      "Feelings (Senses) - Your feelings are suppressed; you don't feel speed so you won't realize that you could be speeding.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Impaired Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=54",
  },
  {
    key: "dui-implied-consent",
    quote:
      "Vermont has an \"Implied Consent\" Law - This means that when a person gets a license, that person is agreeing to say \"yes\" when asked to take a test to see how much alcohol or other drugs are in the person's body.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Impaired Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=54",
  },
  {
    key: "dui-refusal-six-months",
    quote:
      "If the driver refuses, they will lose their Driver's License for at least six (6) months.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Impaired Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=54",
  },
  {
    key: "dui-officer-may-ask",
    quote:
      "A police officer may ask a driver to take the test if the officer thinks the driver is impaired by alcohol or other drugs.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Impaired Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=54",
  },
  {
    key: "dui-civil-before-criminal",
    quote:
      "NOTE: Vermont has an administrative suspension process, which means that you can lose your license through a civil process before a criminal DUI conviction.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Impaired Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=54",
  },
  {
    key: "dui-conviction-consequences",
    quote:
      "You must pay a large fine, lawyer fees, pay for an alcohol education class, you may go to jail and your insurance will increase.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Impaired Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=54",
  },
  {
    key: "dui-designated-driver",
    quote:
      "A designated driver agrees not to drink or use other drugs, and is responsible for getting the others home safely.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Think Before You Drink",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=54",
  },
  {
    key: "dui-keys-to-friend",
    quote:
      "Before you begin drinking, give your vehicle keys to a friend who does not drink, and who will not let you drive after drinking.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Think Before You Drink",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=55",
  },
  {
    key: "dui-encare-signs",
    quote:
      "When you see one of these signs, it means someone died at that location because of a drunk driver.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Think Before You Drink",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=55",
  },
  {
    key: "dui-number-one-cause",
    quote:
      "Alcohol and other drugs The drinking driver is the number one cause of fatal traffic crashes.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Impaired Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=53",
  },
  {
    key: "dui-statute-thresholds",
    quote:
      "(B) 0.02 or more if the person is operating a school bus as defined in subdivision 4(34) of this title; or",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1201 - Operating under the influence",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01201",
  },
  {
    key: "dui-statute-prohibition",
    quote:
      "(a) A person shall not operate, attempt to operate, or be in actual physical control of any vehicle on a highway:",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1201 - Operating under the influence",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01201",
  },
  {
    key: "dui-statute-90-days",
    quote:
      "The Commissioner shall immediately suspend the operator's operating license or nonresident operating privilege or the privilege of an unlicensed operator to operate a vehicle, as applicable, for a period of 90 days and until the operator complies with section 1209a of this title.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1206 - Suspension for first conviction",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01206",
  },
  {
    key: "dui-statute-fatality-year",
    quote:
      "In cases resulting in a fatality or serious bodily injury to a person other than the defendant, the period of suspension shall be one year and until the defendant complies with section 1209a of this title.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1206 - Suspension for first conviction",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01206",
  },
  {
    key: "dui-statute-refusal-evidence",
    quote:
      "(b) A refusal to take a breath test may be introduced as evidence in a criminal proceeding.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1202 - Consent to taking of tests",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01202",
  },
  {
    key: "dui-statute-officer-direction",
    quote:
      "The test shall be administered at the direction of a law enforcement officer.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1202 - Consent to taking of tests",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01202",
  },
  {
    key: "dui-statute-no-consumption",
    quote:
      "(a) A person shall not consume an alcoholic beverage or cannabis while operating a motor vehicle on a public highway.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1134 - Consumption or possession of alcohol or cannabis",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01134",
  },
  {
    key: "dui-statute-secondhand",
    quote:
      "As used in this subsection, the prohibition on consumption of cannabis by the operator shall extend to the operator's consumption of secondhand cannabis smoke in the vehicle as a result of another person's consumption of cannabis.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1134 - Consumption or possession of alcohol or cannabis",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01134",
  },
  {
    key: "dui-statute-permitting",
    quote:
      "(a) No person shall employ another person as an operator of a motor vehicle knowing that the other person is not licensed as provided in this title.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1130 - Permitting unlicensed or impaired person to operate",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01130",
  },
  {
    key: "drowsy-falls-asleep",
    quote:
      "Visit VTHelplink.org or call 802-565-LINK (or toll-free 833-565-LINK) Drowsy Driving Each year, many crashes occur because the driver falls asleep at the wheel.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Drowsy Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=55",
  },
  {
    key: "drowsy-appear-drunk",
    quote:
      "Drowsy drivers can drive so poorly they may appear to be drunk.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Drowsy Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=55",
  },
  {
    key: "drowsy-signs",
    quote:
      "Not remembering the last few miles you drove",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Drowsy Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=55",
  },
  {
    key: "drowsy-pull-over",
    quote:
      "If you become drowsy while you're on the road, find a safe place to pull over and stop.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Drowsy Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=55",
  },
  {
    key: "drowsy-window-radio",
    quote:
      "Opening your window and turning up your radio will not keep you awake.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Drowsy Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=55",
  },
  {
    key: "distract-anything",
    quote:
      "Studies show that anything that takes away your attention from driving could result in a crash.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Distracted Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=55",
  },
  {
    key: "distract-slower-reaction",
    quote:
      "Distractions cause drivers to react more slowly to traffic conditions or events, such as a vehicle stopping to make a left turn or pulling out from a side road.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Distracted Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=55",
  },
  {
    key: "distract-miss-hazards",
    quote:
      "Distracted drivers fail more often to recognize potential hazards such as pedestrians, bicyclists or debris in the road.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Distracted Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=56",
  },
  {
    key: "distract-vermont-crashes",
    quote:
      "Inattention and failure to yield are the most common driver contributing actions in pedestrian and bicycle motor vehicle crashes in Vermont.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Distracted Driving",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=56",
  },
  {
    key: "distract-no-messages",
    quote:
      "Cell Phones and other Electronic Devices It is against the law for drivers to read or send messages while driving.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Cell Phones and other Electronic Devices",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=56",
  },
  {
    key: "distract-workzone-points",
    quote:
      "A person convicted of violating this section while operating within a properly designated work zone in which construction, maintenance, or utility personnel are present shall have two points assessed against his or her driving record for a first conviction and five points assessed for a second or subsequent conviction.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Cell Phones and other Electronic Devices",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=56",
  },
  {
    key: "distract-let-it-ring",
    quote:
      "Let the caller leave a message, and return calls when stopped at a safe location.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Cell Phones and other Electronic Devices",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=57",
  },
  {
    key: "distract-secure-phone",
    quote:
      "Secure your phone in the vehicle so that it does not become a projectile in a crash.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Cell Phones and other Electronic Devices",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=57",
  },
  {
    key: "distract-pets",
    quote:
      "Pets can be distracting and should be in a carrier, not in your lap or free to move.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Dealing with Distractions",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=56",
  },
  {
    key: "distract-grooming",
    quote:
      "Do your personal grooming at home, not in the vehicle.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Dealing with Distractions",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=56",
  },
  {
    key: "distract-eating",
    quote:
      "Avoid eating and drinking while driving.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Dealing with Distractions",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=56",
  },
  {
    key: "distract-emotions",
    quote:
      "You may not be able to drive well if you are overly worried, excited, afraid, angry or depressed.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Dealing with Emotions",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=56",
  },
  {
    key: "distract-leave-early",
    quote:
      "If you have plenty of time, you are less likely to speed or break laws or crash.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Dealing with Emotions",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=56",
  },
  {
    key: "distract-statute-texting",
    quote:
      "(b)(1) An individual shall not engage in texting while operating a moving motor vehicle in a place open temporarily or permanently to public or general circulation of vehicles.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1099 - Texting prohibited",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01099",
  },
  {
    key: "distract-statute-penalty",
    quote:
      "(c)(1) An individual who violates this section commits a traffic violation as defined in section 2302 of this title and shall be subject to a civil penalty of not less than $100.00 and not more than $200.00 for a first violation and of not less than $250.00 and not more than $500.00 for a second or subsequent violation within any two-year period.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1099 - Texting prohibited",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01099",
  },
  {
    key: "distract-statute-definition",
    quote:
      "(a) As used in this section, \"texting\" means the reading or the manual composing or sending of electronic communications, including text messages, instant messages, or e-mails, using a portable electronic device as defined in subdivision 4(82) of this title.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1099 - Texting prohibited",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01099",
  },
  {
    key: "distract-statute-view",
    quote:
      "(c) No passenger in a vehicle shall ride in such position as to interfere with the driver's view ahead or to the sides or to interfere with his or her control over the driving mechanism of the vehicle.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1118 - Obstruction to driver's view",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01118",
  },
  {
    key: "aggressive-behaviours",
    quote:
      "They may fail to use signals for lane changes and may weave in and out of traffic, follow too closely and cut off cars as they try to get ahead.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Aggressive Drivers",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=46",
  },
  {
    key: "aggressive-unlawful",
    quote:
      "All these actions are unlawful and can result in traffic tickets or worse.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Aggressive Drivers",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=46",
  },
  {
    key: "aggressive-do-not-retaliate",
    quote:
      "If an aggressive driver cuts you off or does something else that is unsafe, do not try to get even.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Aggressive Drivers",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=46",
  },
  {
    key: "aggressive-get-out-of-way",
    quote:
      "Get out of the drivers way.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Aggressive Drivers",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=46",
  },
  {
    key: "crash-must-stop",
    quote:
      "What to Do After a Crash A driver who has been involved in a crash is required by law to stop and give any assistance that is reasonably necessary.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - What to Do After a Crash",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=59",
  },
  {
    key: "crash-move-off-lanes",
    quote:
      "If possible, move the involved vehicles out of the traveled lanes and onto the shoulder.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - What to Do After a Crash",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=59",
  },
  {
    key: "crash-call-911",
    quote:
      "If someone is injured, call 911. Leave the injured person where they are.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - What to Do After a Crash",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=59",
  },
  {
    key: "crash-do-not-move-injured",
    quote:
      "You may injure the person more by moving that person the wrong way.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - What to Do After a Crash",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=59",
  },
  {
    key: "crash-show-licence",
    quote:
      "You must also show your license to anyone who is injured or whose property has been damaged. 4.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - What to Do After a Crash",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=59",
  },
  {
    key: "crash-parked-vehicle-note",
    quote:
      "If you hit a parked vehicle and cause damage, and you can't find the owner, you must write your name, address and phone number and leave it in, or on the vehicle.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - What to Do After a Crash",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=59",
  },
  {
    key: "crash-report-3000-72-hours",
    quote:
      "If any person has been injured, or if the damage is over $3,000, you must make a written report to the Department of Motor Vehicles within 72 hours.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - What to Do After a Crash",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=59",
  },
  {
    key: "crash-other-state",
    quote:
      "Note: If a Vermont driver has a crash in another state, it must be reported in the state where the crash happened.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Crash Reports",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=60",
  },
  {
    key: "crash-note-location",
    quote:
      "Mile markers can be used to pinpoint the exact location of a crash scene.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Crash Reports",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=60",
  },
  {
    key: "crash-get-details",
    quote:
      "Get the name, address, license and registration numbers of the other driver.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Crash Reports",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=60",
  },
  {
    key: "crash-other-driver-rights",
    quote:
      "If you have a crash with another vehicle, the other driver has the right to see your license, registration and insurance information.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Crash Reports",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=60",
  },
  {
    key: "crash-poor-decisions",
    quote:
      "CRASHES Poor decisions made by drivers cause most crashes.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Crashes",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=59",
  },
  {
    key: "crash-statute-duty-to-stop",
    quote:
      "(a) The operator of a motor vehicle who has caused or is involved in a crash resulting in injury to any person other than the operator, or in damage to any property other than the vehicle then under his or her control, shall immediately stop and render any assistance reasonably necessary.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1128 - Crashes; duty to stop",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01128",
  },
  {
    key: "crash-statute-give-name",
    quote:
      "The operator shall give his or her name, residence, license number, and the name of the owner of the motor vehicle to any person who is injured or whose property is damaged and to any enforcement officer.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1128 - Crashes; duty to stop",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01128",
  },
  {
    key: "crash-statute-report-3000",
    quote:
      "(a) The operator of a motor vehicle involved in a crash in which someone is injured or there is total property damage of $3,000.00 or more shall make a written report concerning the crash to the Commissioner on forms furnished by the Commissioner.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1129 - Crashes; reports",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01129",
  },
  {
    key: "crash-statute-72-hours",
    quote:
      "The written report shall be mailed to the Commissioner within 72 hours after the crash.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1129 - Crashes; reports",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01129",
  },
  {
    key: "crash-statute-five-days",
    quote:
      "The notification shall be made to the injured individual or owner of the damaged property, or both, within five days after the injury or damage.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1129 - Crashes; reports",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01129",
  },
  {
    key: "vehicle-inspection-annual",
    quote:
      "YOU MUST TAKE PROPER CARE OF YOUR VEHICLES Inspection Your vehicle must be inspected once a year.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Inspection",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=60",
  },
  {
    key: "vehicle-inspection-15-days",
    quote:
      "All motor vehicles have to be inspected within 15 days of registration, unless bearing a valid Vermont inspection sticker.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Inspection",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=60",
  },
  {
    key: "vehicle-inspection-at-fault",
    quote:
      "If your vehicle is not running properly, you may be found at fault in case of a crash.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Inspection",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=60",
  },
  {
    key: "vehicle-tread-2-32",
    quote:
      "Tires Tires must have at least 2/32\" of tread depth.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Tires",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=61",
  },
  {
    key: "vehicle-wear-bars",
    quote:
      "It is not safe or legal to use tires after the tread is worn off or worn down to the wear bars on the tire.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Tires",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=61",
  },
  {
    key: "vehicle-penny-test",
    quote:
      "Place Lincoln's head first into the deepest looking groove.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Tires",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=61",
  },
  {
    key: "vehicle-tyre-pressure",
    quote:
      "Both overinflated and underinflated tires reduce traction, cause quicker tire wear, and affect steering.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Tires",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=61",
  },
  {
    key: "vehicle-brake-fluid",
    quote:
      "If you notice that the brake pedal goes down too far, have the brake fluid checked at once as there may be a leak in the system.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Brakes",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=61",
  },
  {
    key: "vehicle-brakes-swerve",
    quote:
      "When applying the brakes suddenly, one takes hold before the other and causes your vehicle to swerve.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Brakes",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=60",
  },
  {
    key: "vehicle-plate-lit-50-feet",
    quote:
      "The back license plate must be lighted so it can be seen and read at least 50 feet from the back of the vehicle.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Lights",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=61",
  },
  {
    key: "vehicle-headlight-aim",
    quote:
      "If the lights are aimed too high or do not go to low beam when a vehicle comes toward you, your headlights may blind the other driver.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Lights",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=61",
  },
  {
    key: "vehicle-wipers",
    quote:
      "Windshield Wipers You must have windshield wipers which work properly.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Windshield Wipers",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=61",
  },
  {
    key: "vehicle-defrosters",
    quote:
      "Do not try to drive any vehicle unless the window interiors are free of moisture and outside windows are clear of ice and snow.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Windows and Defrosters",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=61",
  },
  {
    key: "vehicle-exhaust-leak",
    quote:
      "Leaking exhausts have often caused carbon monoxide poisoning or death by allowing carbon monoxide gas to enter the passenger area of the vehicle.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Exhaust System",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=61",
  },
  {
    key: "vehicle-carbon-monoxide",
    quote:
      "You cannot smell carbon monoxide gas.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Exhaust System",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=61",
  },
  {
    key: "vehicle-nothing-hanging",
    quote:
      "The law states there shall not be anything hanging from the rearview mirror or sun visors.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Other Things to Keep In Mind",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=62",
  },
  {
    key: "vehicle-mirror-and-horn",
    quote:
      "You must have a rearview mirror and a horn.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Other Things to Keep In Mind",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=62",
  },
  {
    key: "vehicle-view-clear",
    quote:
      "Other Things to Keep In Mind A driver has to be able to see clearly to the front and sides of the vehicle, so nothing should be in the way.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Other Things to Keep In Mind",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=62",
  },
  {
    key: "vehicle-catalytic-converter",
    quote:
      "It is against federal and state law to disconnect your vehicles catalytic converter or to have a mechanic disconnect or tamper with it.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Emission Control System",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=62",
  },
  {
    key: "vehicle-obd",
    quote:
      "The On Board Diagnostic computer system (OBD) will be checked to make sure the vehicle's emissions control system is working properly.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Emission Control System",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=62",
  },
  {
    key: "vehicle-speedometer",
    quote:
      "The speedometer and odometer in your vehicle must be working properly and must be where the driver can see them.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Speedometer and Odometer",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=62",
  },
  {
    key: "vehicle-steering-check",
    quote:
      "Steering If it becomes difficult to steer your vehicle, or your steering wheel moves too loosely, you should have it checked by a qualified mechanic.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Steering",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=61",
  },
  {
    key: "vehicle-driver-readiness",
    quote:
      "Adjust the seat properly. 2.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Driver readiness",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=26",
  },
  {
    key: "vehicle-hand-position",
    quote:
      "If you look at the steering wheel as the face of a clock, a 9 and 3 or an 8 and 4 position is recommended.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - What should I practice first",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=26",
  },
  {
    key: "vehicle-hand-over-hand",
    quote:
      "Use hand over hand steering for turning.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - What should I practice first",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=26",
  },
  {
    key: "vehicle-statute-tint",
    quote:
      "Furthermore, if the material described in this subsection tears or bubbles or is otherwise worn to prohibit clear vision, it shall be removed or replaced.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1125 - Obstructing windshields, windows",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01125",
  },
  {
    key: "vehicle-statute-hanging",
    quote:
      "The prohibition of this section on hanging items shall apply only when a hanging item materially obstructs the driver's view.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1125 - Obstructing windshields, windows",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01125",
  },
  {
    key: "vehicle-statute-front-seat",
    quote:
      "(a) A person shall not operate or attempt to operate a motor vehicle when more than three persons over two years of age, including the operator, are occupying the front seat or seats or are in the front or driving compartment of the motor vehicle.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1118 - Obstruction to driver's view",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01118",
  },
  {
    key: "vehicle-statute-load-view",
    quote:
      "(b) In any event, a person may not operate a motor vehicle when it is so loaded as to obstruct the view of the driver to the front or sides of the vehicle or as to interfere with the driver's control over the driving mechanism of the vehicle.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1118 - Obstruction to driver's view",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01118",
  },
  {
    key: "vehicle-statute-coasting",
    quote:
      "(b) No driver of a motor truck or motor bus, when traveling upon a downgrade, shall coast with the clutch disengaged.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1121 - Coasting prohibited",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01121",
  },
  {
    key: "belt-all-occupants",
    quote:
      "The law requires all occupants of a motor vehicle to be restrained with a safety belt, or a federally approved child passenger restraining system.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Safety Belts",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=63",
  },
  {
    key: "belt-lap-across-hips",
    quote:
      "Lap belts should fit snugly across the hips, not over the stomach. Shoulder belts go over the shoulder and across the center of the chest.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Wearing Your Safety Belt",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=63",
  },
  {
    key: "belt-never-tuck",
    quote:
      "Never tuck a shoulder belt under your arm or behind your back.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Wearing Your Safety Belt",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=63",
  },
  {
    key: "belt-keeps-you-inside",
    quote:
      "Safety belts keep you inside the vehicle, in one position, rather than being thrown out of the vehicle where the instances of death and serious injury are much greater.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Wearing Your Safety Belt",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=63",
  },
  {
    key: "belt-strongest-points",
    quote:
      "Safety belts are designed to cross your body at its strongest points in order to keep you safe in a motor vehicle crash.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Wearing Your Safety Belt",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=63",
  },
  {
    key: "child-under-two-rear-facing",
    quote:
      "Child Restraint Systems 23 V.S.A. Section 1258 A child under two years of age must be properly secured in a federally approved rear-facing child car seat with a harness.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Child Restraint Systems",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=63",
  },
  {
    key: "child-no-airbag",
    quote:
      "A child in a rear-facing car seat must not ride in front of an active airbag.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Child Restraint Systems",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=63",
  },
  {
    key: "child-two-to-five",
    quote:
      "A child over 2 but under five years of age must be properly secured in a federally approved rear-facing or forward-facing car seat with a harness.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Child Restraint Systems",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=63",
  },
  {
    key: "child-under-eight-booster",
    quote:
      "A child under eight years of age who is not properly secured in a harnessed car seat must be properly secured in a booster seat.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Child Restraint Systems",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=64",
  },
  {
    key: "child-under-13-back",
    quote:
      "A child under 13 years of age must, if practical, ride in the back seat.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Child Restraint Systems",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=64",
  },
  {
    key: "child-under-18-belt",
    quote:
      "A child under 18 years of age who is not properly secured in a harnessed car seat or booster seat must be wearing a seat belt.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Child Restraint Systems",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=64",
  },
  {
    key: "child-never-in-front-of-airbag",
    quote:
      "NOTE: Never place a child's safety seat in front of an air bag!",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 7 - Child Restraint Systems",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=64",
  },
  {
    key: "belt-statute-18-and-over",
    quote:
      "(a) The operator of a motor vehicle shall be guilty of a violation of this section if any person 18 years of age or older is occupying a seating position that has been manufactured with a federally approved safety belt system and is not restrained by the safety belt system while the motor vehicle is in motion on a public highway.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1259 - Safety belts; persons 18 years of age or older",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01259",
  },
  {
    key: "belt-statute-secondary",
    quote:
      "(e) This section may be enforced only if a law enforcement officer has detained the operator of a motor vehicle for another suspected traffic violation.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1259 - Safety belts; persons 18 years of age or older",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01259",
  },
  {
    key: "belt-statute-penalty",
    quote:
      "(1) $25.00 for a first violation; (2) $50.00 for a second violation; and",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1259 - Safety belts; persons 18 years of age or older",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01259",
  },
  {
    key: "child-statute-under-two",
    quote:
      "(1) a child under two years of age shall be properly secured in a federally approved rear-facing child restraint system with a harness, as those terms are defined in 49 C.F.R.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1258 - Child restraint systems",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01258",
  },
  {
    key: "child-statute-under-13",
    quote:
      "(5) a child under 13 years of age shall always, if practical, ride in a rear seat of a motor vehicle; and",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1258 - Child restraint systems",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01258",
  },
  {
    key: "child-statute-airbag",
    quote:
      "(6) no child shall be secured in a rear-facing child restraint system in the front seat of a motor vehicle that is equipped with an active passenger-side airbag unless the airbag is deactivated.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1258 - Child restraint systems",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01258",
  },
  {
    key: "points-when-guilty",
    quote:
      "Points are put on your driving record each time you are found guilty of breaking a motor vehicle law.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 8 - Point System",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=65",
  },
  {
    key: "points-ten-suspension",
    quote:
      "When a driver receives a total of 10 points, a letter will be sent notifying the driver that their privilege to drive is to be suspended.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 8 - Point System",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=65",
  },
  {
    key: "points-two-year-window",
    quote:
      "The number of points received within 2 years will determine how long your driving privilege will be suspended.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 8 - Point System",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=65",
  },
  {
    key: "points-more-is-longer",
    quote:
      "The more points received - the longer the period of suspension.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 8 - Point System",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=65",
  },
  {
    key: "points-not-parking",
    quote:
      "Points are not assessed for parking or defective equipment violations.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 8 - Point System",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=65",
  },
  {
    key: "points-hearing",
    quote:
      "A hearing may be requested to verify the convictions and the number of points accrued.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 8 - Point System",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=65",
  },
  {
    key: "reg-register-60-days",
    quote:
      "If you live in Vermont and have a vehicle that you want to drive on the roads, you must register it.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 9 - How to Register Your Vehicle",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=66",
  },
  {
    key: "reg-moving-60-days",
    quote:
      "If you are moving to Vermont from another state, you must register your vehicle within 60 days of moving into the state.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 9 - How to Register Your Vehicle",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=66",
  },
  {
    key: "reg-proof-in-vehicle",
    quote:
      "Registration and Plates Proof of valid registration must always be in the vehicle when it is being used.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 9 - Registration and Plates",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=66",
  },
  {
    key: "reg-plates-clean",
    quote:
      "No portion of the registration plates should be covered or hidden from view, and they must be kept clean at all times.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 9 - Registration and Plates",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=66",
  },
  {
    key: "reg-rear-plate-50-feet",
    quote:
      "The rear plate must be lighted so that it can be read from at least 50 feet away.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 9 - Registration and Plates",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=66",
  },
  {
    key: "reg-change-30-days",
    quote:
      "Name/Address/Vehicle Changes If you change your name, your address or the color of your vehicle, you are required to notify the Department of Motor Vehicles within 30 days.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 9 - Name/Address/Vehicle Changes",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=67",
  },
  {
    key: "reg-purchase-use-tax",
    quote:
      "This is called a Purchase and Use Tax and is 6% of the price you paid for the non-leased vehicle or the current fair market value, whichever is greater.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 9 - Purchase and Use Tax",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=67",
  },
  {
    key: "reg-vin-17",
    quote:
      "A VIN comprises 17 characters (digits and capital letters) that act as a unique identifier for the vehicle.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 9 - Vehicle Identification Number",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=68",
  },
  {
    key: "ins-must-be-covered",
    quote:
      "This means that the vehicle you drive MUST be covered by liability insurance.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 9 - Insurance",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=68",
  },
  {
    key: "ins-minimums",
    quote:
      "The amount of coverage MUST be at least $25,000 for death or injury of one person; $50,000 for death or injury of 2 or more persons; $10,000 for property damage.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 9 - Insurance",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=68",
  },
  {
    key: "ins-carry-card",
    quote:
      "You must carry a card from your insurance company in the vehicle that shows there is insurance coverage on the vehicle.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 9 - Insurance",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=68",
  },
  {
    key: "ins-no-insurance-points",
    quote:
      "You will be fined and assessed two points on your driving record.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 9 - Insurance",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=68",
  },
  {
    key: "ins-15-days-to-show",
    quote:
      "If you have insurance on your vehicle and a police officer stops you, and you cannot show the card to the officer, you have 15 days to do so.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 9 - Insurance",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=68",
  },
  {
    key: "ins-three-years-proof",
    quote:
      "You will have to prove to the Commissioner that you have insurance for a full 3 years.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 9 - Insurance",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=69",
  },
  {
    key: "ins-crash-not-your-fault",
    quote:
      "You are in a crash, even if it isn't your fault,",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 9 - Insurance",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=69",
  },
  {
    key: "ins-statute-minimums",
    quote:
      "(a) No owner of a motor vehicle required to be registered, or operator required to be licensed or issued a learner's permit, shall operate or permit the operation of the vehicle upon the highways of the State without having in effect an automobile liability policy or bond in the amounts of at least $25,000.00 for one person and $50,000.00 for two or more persons killed or injured and $10,000.00 for damages to property in any one crash.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 800 - Maintenance of financial responsibility",
    url: "https://legislature.vermont.gov/statutes/section/23/011/00800",
  },
  {
    key: "idle-statute-unattended",
    quote:
      "Allowing a vehicle to idle while unattended in public is in violation of Vermont's unattended motor vehicle law; if you leave your vehicle, you must shut it off.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 9 - Green Driving Tips",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=69",
  },
  {
    key: "idle-ten-seconds",
    quote:
      "If you're parked in town, idling for more than 10 seconds uses more fuel than shutting off and restarting.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 9 - Green Driving Tips",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=69",
  },
  {
    key: "idle-warm-up-30-seconds",
    quote:
      "Limit stationary warm ups to 30 seconds when possible.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 9 - Green Driving Tips",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=69",
  },
  {
    key: "lose-tasp",
    quote:
      "In addition if you fail to complete TASP or other Diversion requirements, your license or privilege to drive will be SUSPENDED.",
    source: "Vermont Driver's Manual (2025)",
    section: "Chapter 2 - How to Lose Your License",
    url: "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf#page=8",
  },
  {
    key: "lose-statute-negligent",
    quote:
      "(1) A person who operates a motor vehicle on a public highway in a negligent manner shall be guilty of negligent operation.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1091 - Negligent operation",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01091",
  },
  {
    key: "lose-statute-grossly-negligent",
    quote:
      "(1) A person who operates a motor vehicle on a public highway in a grossly negligent manner shall be guilty of grossly negligent operation.",
    source: "Vermont Statutes Annotated, Title 23 (Motor Vehicles)",
    section: "23 V.S.A. Section 1091 - Negligent operation",
    url: "https://legislature.vermont.gov/statutes/section/23/013/01091",
  },
];
