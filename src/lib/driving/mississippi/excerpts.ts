import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts behind the Mississippi bank. Four sources sit behind
// them, and each is here for a reason:
//
//  - The Driver's License Manual published by the Mississippi Department of
//    Public Safety. Its only edition label is the line on its second page,
//    "Revised December 2024"; the Driver Service Bureau posts the same file as
//    the January 15, 2025 revision. It runs 92 pages, and its printed page
//    numbers line up exactly with the PDF's own page numbers, so the page in
//    each `section` below is both. The manual is the book the exam is written
//    from - it says so on page 17 - and most of what is quoted here comes from
//    it.
//  - The 2023 edition of the same manual, for the test format and nothing else.
//    The December 2024 revision deleted the two appendices that described the
//    exam, and DPS has published nothing in their place. The 2023 edition is
//    where the state itself states the question count ("twenty (20)
//    multiple-choice questions"), the 80% pass mark, the next-business-day
//    retake and the thirty-day wait after three failures. Every rule of the
//    road in this bank is checked against the CURRENT manual; the 2023 edition
//    is quoted only for how the test is run, and where the two disagree on a
//    licensing rule the current one wins. See docs/driving/research/mississippi.md.
//  - Two Driver Service Bureau web pages, Regular Learner's Permit and
//    Frequently Asked Questions. They carry the twelve-month permit-holding
//    period, the electronics ban and six-month cheating bar in the testing
//    room, and the fact that no road test is being given at all - none of which
//    is in the manual, and all of which changes more often than the book does.
//  - House Bill 550 of the 2021 Regular Session, on the Legislature's own
//    server, which is where Section 63-1-21 of the Mississippi Code got its
//    current shape. The Code itself is published officially only through a
//    LexisNexis portal that serves no readable text to any automated client,
//    so the enacting bill is quoted instead and labeled as what it is. It
//    matters because it moved the old intermediate-license curfew onto the
//    REGULAR license of anyone under eighteen, and the manual never mentions
//    that rule anywhere.
//
// Every quote was located mechanically in the fetched source and checked as an
// exact substring before it was written here. Nothing is paraphrased. Only the
// four normalisations the sibling banks use were applied, to the extracted text
// and to nothing else: curly quotes, en dashes and em dashes fold to ASCII;
// runs of whitespace, including the line breaks the PDF inserts mid-sentence,
// collapse to single spaces; the section symbol is spelled out as "Section";
// and where a source states a rule as a stem followed by a bulleted list, the
// items run together in the order they appear - no words are changed, dropped
// or reordered.
//
// The sources' own slips are preserved exactly as they stand, because a quote
// that has been tidied up is no longer a quote. Among them: the speed-limit
// sign described as showing the "MAXIUM SPEED ALLOWED", the four-way-stop
// paragraph that breaks "right- of-way" across a space, and the FAQ's "At this
// time no road test are being given".

export const mississippiExcerpts: HandbookExcerpt[] = [
  {
    key: "lic-required",
    quote:
      "Under the laws of Mississippi, you must have a valid " +
      "Driver's License or Learner's Permit to operate any motor " +
      "vehicle (except road and farm equipment) on streets or " +
      "highways.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "License Requirements (page 10)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=10",
  },
  {
    key: "lic-no-accompany",
    quote:
      "Driving without a valid Driver's License or Learner's " +
      "Permit is illegal, even if you are accompanied by a parent " +
      "or licensed driver.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "License Requirements (page 10)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=10",
  },
  {
    key: "lic-ineligible-sixteen",
    quote:
      "You have not reached the age of sixteen years, and you " +
      "have not held a Learner's Permit for one year without " +
      "certain convictions.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "License Requirements - Ineligible Persons (page 10)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=10",
  },
  {
    key: "lic-nonresident-exempt",
    quote:
      "You are a non-resident over the age of sixteen and have in " +
      "your possession a valid driver's license issued to you in " +
      "your home state or home country.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "License Requirements - License Exemptions (page 10)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=10",
  },
  {
    key: "lic-move-sixty-days",
    quote:
      "If you move to Mississippi, you must obtain a Mississippi " +
      "driver's license within sixty days. You must obtain a " +
      "Mississippi license plate/tag within thirty days.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Out-Of-State Drivers: Moving To Mississippi (page 11)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=11",
  },
  {
    key: "lic-surrender",
    quote:
      "When you apply for a Mississippi driver's license you must " +
      "surrender all out-of-state licenses.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Out-Of-State Drivers: Moving To Mississippi (page 11)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=11",
  },
  {
    key: "lic-oos-exam-waived",
    quote:
      "If you have a valid driver's license from another state, " +
      "the Computerized Exam will be waived. You must pass a " +
      "vision screening.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Out-Of-State Drivers: Moving To Mississippi (page 11)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=11",
  },
  {
    key: "lic-oos-expired-thirty",
    quote:
      "If your out-of-state license has been expired over thirty " +
      "days, you must take the Computerized Exam.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Out-Of-State Drivers: Moving To Mississippi (page 11)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=11",
  },
  {
    key: "lic-renew-six-months",
    quote:
      "For any licensed driver who qualifies for a LICENSE " +
      "RENEWAL, the license may be renewed UP TO SIX MONTHS prior " +
      "to the expiration date.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Military Personnel And College Students (page 12)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=12",
  },
  {
    key: "lic-noncitizen-four-years",
    quote:
      "For non-citizens, their regular license or identification " +
      "card will be valid for four years or until your legal " +
      "status expiration date [if less than four years away].",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Non-Citizen Licenses And Identification Cards (page 12)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=12",
  },
  {
    key: "exam-score-two-years",
    quote:
      "Your Computerized Exam score is valid for two years.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Types Of Licenses & Permits (page 13)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=13",
  },
  {
    key: "exam-retake-after-two-years",
    quote:
      "If you wait longer than two years you will have to retake " +
      "the Computerized Exam.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Types Of Licenses & Permits (page 13)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=13",
  },
  {
    key: "permit-same-exam",
    quote:
      "You must pass the same Computerized Exam required for a " +
      "Regular Driver's License to be eligible for a Regular " +
      "Learner's Permit.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Types Of Licenses & Permits (page 13)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=13",
  },
  {
    key: "permit-age-fifteen",
    quote:
      "You must be at least fifteen years old to apply for a " +
      "Regular Learner's Permit.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Regular Learner's Permit (page 13)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=13",
  },
  {
    key: "permit-hold-one-year",
    quote:
      "You must hold the Learner's Permit for one year before you " +
      "can upgrade to a Regular Driver's License.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Regular Learner's Permit (page 13)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=13",
  },
  {
    key: "permit-valid-two-years",
    quote:
      "The Regular Learner's Permit is valid for two years. It " +
      "entitles you to drive a motor vehicle when accompanied by " +
      "a licensed driver aged twenty-one years or older who is " +
      "physically occupying the seat next to you.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Regular Learner's Permit (page 13)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=13",
  },
  {
    key: "permit-turn-seventeen",
    quote:
      "[If you turn seventeen before you have held the Learner's " +
      "Permit for one year, you are eligible to apply for a " +
      "Regular License.]",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Regular Learner's Permit (page 13)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=13",
  },
  {
    key: "classd-under-26000",
    quote:
      "A Class D license is required when you are operating a " +
      "vehicle commercially and the vehicle is under 26,000 " +
      "pounds gross vehicle weight rating.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "License, Class D (page 14)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=14",
  },
  {
    key: "classd-pickup",
    quote:
      "You do not need a commercial license to drive a pick-up " +
      "truck, regardless of what the truck is used for, unless " +
      "you are transporting hazardous materials in an amount that " +
      "requires a placard.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "License, Class D (page 14)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=14",
  },
  {
    key: "schoolbus-license-21",
    quote:
      "You must be at least twenty-one years old before you are " +
      "eligible for a license to drive a school bus per the " +
      "Mississippi Department of Education.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "School Bus License (page 14)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=14",
  },
  {
    key: "mc-endorsement",
    quote:
      "To operate a motor-driven cycle, you must obtain a " +
      "Motorcycle Endorsement to go along with your Driver's " +
      "License.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Motorcycle Endorsement (page 14)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=14",
  },
  {
    key: "mc-helmet",
    quote:
      "NOTE: A crash helmet must be worn if operating or riding " +
      "any motorcycle or motor scooter upon the public roads or " +
      "highways of this state.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Motorcycle Endorsement (page 14)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=14",
  },
  {
    key: "mc-tests",
    quote:
      "To receive the Motorcycle Endorsement, you must complete a " +
      "computerized test on the operation of a motorcycle and a " +
      "skills test.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Motorcycle Endorsement (page 14)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=14",
  },
  {
    key: "lic-possession",
    quote:
      "You must always have your Driver's License in your " +
      "possession while operating a motor vehicle.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Regular Driver's License (Class R) (page 15)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=15",
  },
  {
    key: "lic-seventeen-or-older",
    quote:
      "You have reached the age of seventeen or older, regardless " +
      "of previous permits or licenses held.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Regular Driver's License (Class R) (page 15)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=15",
  },
  {
    key: "lic-sixteen-plus-year",
    quote:
      "You have reached the age of sixteen and have held a " +
      "Learner's Permit for one year.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Regular Driver's License (Class R) (page 15)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=15",
  },
  {
    key: "lic-fifteen-and-a-half",
    quote:
      "If you are issued a Learner's Permit at age fifteen and " +
      "one-half, you will be eligible for your Regular Driver's " +
      "License at age sixteen and one-half.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Regular Driver's License (Class R) (page 15)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=15",
  },
  {
    key: "lic-road-test-waiver",
    quote:
      "if you are under 17 you must provide an affidavit for Road " +
      "Test Waiver whereby a parent, teacher, or guardian has " +
      "certified that he or she has witnessed you operate a motor " +
      "vehicle for at least fifty hours",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Regular Driver's License (Class R) (page 15)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=15",
  },
  {
    key: "app-two-parents",
    quote:
      "If you are under seventeen years old, your application for " +
      "a permit or license must include the signature of both of " +
      "your parents (if both are living and both have legal " +
      "custody of you).",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Application Requirements - Signatures (page 16)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=16",
  },
  {
    key: "app-liability",
    quote:
      "Whomever signs your application will be liable for your " +
      "negligence or willful misconduct and must have their " +
      "signature NOTARIZED.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Application Requirements (page 16)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=16",
  },
  {
    key: "app-school-attendance",
    quote:
      "If you are under eighteen years old, you must provide " +
      "proof of your enrollment in school. Request a " +
      "Certification of Attendance form from your school. This " +
      "form must not be over thirty days old.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Application Requirements - Certification Of Attendance (page 16)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=16",
  },
  {
    key: "app-residency-no-po-box",
    quote:
      "Each proof of residency must contain a physical address. " +
      "No post office box numbers will be accepted.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Application Requirements - Proof Of Residency (page 16)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=16",
  },
  {
    key: "app-two-proofs-id",
    quote:
      "Two proofs of identification are required before a license " +
      "or permit can be issued: SOCIAL SECURITY CARD (If you no " +
      "longer have your social security card, you must obtain a " +
      "new one.) CERTIFIED BIRTH CERTIFICATE",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Application Requirements - Proof Of Identification (page 16)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=16",
  },
  {
    key: "app-false-statement",
    quote:
      "If you make a false statement on the application, your " +
      "driving privileges may be suspended.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Application Requirements - Signatures (page 16)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=16",
  },
  {
    key: "exam-three-requirements",
    quote:
      "Before you can be issued an original Mississippi driver's " +
      "license, you must meet three requirements: pass the Vision " +
      "Exam, pass the Computerized Exam, and provide the " +
      "Affidavit from a parent, teacher, or guardian certifying " +
      "that he or she has witnessed you operate a motor vehicle " +
      "for at least fifty hours",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "The Examination (page 17)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=17",
  },
  {
    key: "exam-based-on-manual",
    quote:
      "The Computerized Exam is based on the information in this " +
      "manual. It especially focuses on Mississippi traffic laws, " +
      "safe driving rules, and driver's license requirements.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "The Examination - Computerized Exam (page 17)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=17",
  },
  {
    key: "exam-study-carefully",
    quote:
      "To prepare for the exam, study this manual carefully.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "The Examination - Computerized Exam (page 17)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=17",
  },
  {
    key: "exam-driver-ed-2027",
    quote:
      "Beginning July 1, 2027, you will also have to provide " +
      "documentation showing completion of a certified Driver's " +
      "Education course.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "The Examination (page 17)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=17",
  },
  {
    key: "exam-headset",
    quote:
      "The Computerized Exam includes a headset, and the machine " +
      "will read the questions and answers aloud for you.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "The Examination (page 17)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=17",
  },
  {
    key: "exam-questions-asked",
    quote:
      "Do you know the Mississippi traffic laws and rules of safe " +
      "driving? Can you read, understand, and follow signs and " +
      "signals?",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "The Examination (page 17)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=17",
  },
  {
    key: "term-right-of-way",
    quote:
      "right of way- the privilege of the immediate use of the " +
      "highway",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Common Terms (page 18)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=18",
  },
  {
    key: "term-stop",
    quote:
      "stop- complete cessation of movement",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Common Terms (page 18)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=18",
  },
  {
    key: "term-intersection",
    quote:
      "intersection- the place where roads come together or cross " +
      "(crosswalks are counted as part of the intersection)",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Common Terms (page 18)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=18",
  },
  {
    key: "term-computerized-exam",
    quote:
      "computerized exam- a multiple-choice question test you " +
      "must pass as one of the requirements for a Mississippi " +
      "driver's license",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Common Terms (page 18)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=18",
  },
  {
    key: "term-school-bus",
    quote:
      "school bus- every vehicle owned by a public or " +
      "governmental agency, or privately owned and operated for " +
      "compensation, for the transportation of children to and " +
      "from school",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Common Terms (page 18)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=18",
  },
  {
    key: "term-highway",
    quote:
      "highway- every roadway or place of travel, including the " +
      "streets of municipalities",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Common Terms (page 18)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=18",
  },
  {
    key: "equip-brakes",
    quote:
      "The foot brake must be strong enough to stop the vehicle " +
      "within thirty feet at a speed of twenty miles per hour. " +
      "The parking brake must be strong enough to stop the " +
      "vehicle within fifty-five feet at twenty miles per hour.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Vehicle Equipment - Brakes (page 19)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=19",
  },
  {
    key: "equip-horn",
    quote:
      "Your vehicle must have a horn which can be heard two " +
      "hundred feet away. It is against the law to have any siren " +
      "or exhaust or spark whistle on a vehicle.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Vehicle Equipment - Horn (page 19)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=19",
  },
  {
    key: "equip-headlights",
    quote:
      "Your vehicle must have two headlights [one for a " +
      "motorcycle] and at least one taillight.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Vehicle Equipment - Lights (page 19)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=19",
  },
  {
    key: "equip-taillight",
    quote:
      "The taillight on your vehicle must be red and must be " +
      "visible five hundred feet behind you.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Vehicle Equipment - Lights (page 19)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=19",
  },
  {
    key: "equip-aux-lights",
    quote:
      "In addition to two headlights, your vehicle may have no " +
      "more than one spotlight and no more than three auxiliary " +
      "lights. It is against the law for any of these lights to " +
      "be either red or blue.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Vehicle Equipment - Lights (page 19)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=19",
  },
  {
    key: "equip-four-lights",
    quote:
      "At no time should you have more than four lights (not " +
      "including headlights) burning at once.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Vehicle Equipment - Lights (page 19)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=19",
  },
  {
    key: "equip-mirror",
    quote:
      "Mississippi law does not require you to have a rearview " +
      "mirror, but it is recommended for you to have one.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Vehicle Equipment - Rearview Mirror (page 19)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=19",
  },
  {
    key: "equip-muffler",
    quote:
      "The muffler on your vehicle must be in good working order " +
      "and must operate constantly to prevent excessive or " +
      "unusual noise and annoying smoke.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Vehicle Equipment - Muffler (page 19)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=19",
  },
  {
    key: "equip-tires",
    quote:
      "Your tires must be properly inflated, have good tread, and " +
      "be free of breaks, cuts, and decay.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Vehicle Equipment - Tires (page 19)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=19",
  },
  {
    key: "squatted-vehicle",
    quote:
      "It shall be unlawful for any person to drive a passenger " +
      "motor vehicle on the streets or highways of Mississippi " +
      "if, by alteration of the suspension, frame or chassis, the " +
      "height of the front fender is raised four or more inches " +
      "greater than the height of the rear fender.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Squatted Vehicle Law (page 20)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=20",
  },
  {
    key: "tire-penny-test",
    quote:
      "If any part of Lincoln's head is covered by the tread, you " +
      "are driving with a safe amount of tread.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Safety Tip - Tire Tread (page 21)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=21",
  },
  {
    key: "fatigue-sleep",
    quote:
      "Getting adequate sleep-most people need 7 to 9 hours to " +
      "maintain proper alertness during the day.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Safe Driving Basics - Fatigue (page 21)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=21",
  },
  {
    key: "fatigue-hundred-miles",
    quote:
      "Plan to stop about every 100 miles or 2 hours during long " +
      "trips.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Safe Driving Basics - Fatigue (page 21)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=21",
  },
  {
    key: "fatigue-definition",
    quote:
      "Fatigue can affect your vision and increase the time it " +
      "takes you to make decisions. Avoid driving if you are " +
      "tired or fatigued.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Safe Driving Basics - Fatigue (page 21)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=21",
  },
  {
    key: "vision-corrective-lenses",
    quote:
      "If you are required to wear corrective lenses: Always wear " +
      "them when driving. Avoid using dark or tinted corrective " +
      "lenses at night.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Safe Driving Basics - Vision (page 21)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=21",
  },
  {
    key: "hands-three-nine",
    quote:
      "Both hands should be placed on the outside of the steering " +
      "wheel on opposite sides, at the 3 and 9 o'clock positions, " +
      "to maintain control of the vehicle.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Before You Drive - Two Hands On The Wheel (page 22)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=22",
  },
  {
    key: "hands-two-ten",
    quote:
      "Placing your hands at 2 and 10 o'clock positions is no " +
      "longer recommended because it can be dangerous in a " +
      "vehicle equipped with airbags.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Before You Drive - Two Hands On The Wheel (page 22)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=22",
  },
  {
    key: "before-drive-license",
    quote:
      "Make certain you have your driver's license. State law " +
      "requires drivers to present a driver's license upon " +
      "request.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Before You Drive (page 22)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=22",
  },
  {
    key: "long-distance-break",
    quote:
      "Take a break every one hundred miles.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "While Driving Long Distances (page 22)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=22",
  },
  {
    key: "watch-for-children",
    quote:
      "Children: They may act without thinking, especially when " +
      "playing with or chasing a ball. Slow down and proceed with " +
      "caution around schools, playgrounds, residential areas, " +
      "and other areas where children may be walking, bicycling, " +
      "or playing.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "While You Drive (page 22)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=22",
  },
  {
    key: "distraction-definition",
    quote:
      "A distraction is anything that takes your attention away " +
      "from driving. Distracted driving can cause crashes " +
      "resulting in injury, death, or property damage.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Avoiding Distractions (page 23)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=23",
  },
  {
    key: "texting-not-allowed",
    quote:
      "Texting on your cellphone while driving is not allowed. " +
      "Writing, sending or reading text messages is not allowed.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Avoiding Distractions - Cellphone Use (page 23)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=23",
  },
  {
    key: "social-networking-not-allowed",
    quote:
      "Reading or posting to a social networking site using a " +
      "hand-held mobile telephone is not allowed.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Avoiding Distractions - Cellphone Use (page 23)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=23",
  },
  {
    key: "text-message-definition",
    quote:
      "Text messages- include a text-based message, instant " +
      "message, electronic message, and email, but shall not " +
      "include an emergency, traffic, or weather alert or a " +
      "message related to the operation or navigation of the " +
      "motor vehicle.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Avoiding Distractions - Cellphone Use (page 23)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=23",
  },
  {
    key: "hands-free-definition",
    quote:
      "Voice operated or hands-free device- a device that allows " +
      "the user to write, send, or read a text message without " +
      "the use of either hand except to activate, deactivate, or " +
      "initiate a feature or function.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Avoiding Distractions - Cellphone Use (page 23)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=23",
  },
  {
    key: "emotional-distraction",
    quote:
      "If you have just had an argument or are worried, ill, " +
      "angry, frightened, or grief-stricken, let someone else " +
      "drive.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Emotional Distractions (page 24)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=24",
  },
  {
    key: "headphones",
    quote:
      "Never wear stereo headphones while you drive, and never " +
      "play your car stereo or radio loudly while driving.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Emotional Distractions (page 24)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=24",
  },
  {
    key: "windshield-clear",
    quote:
      "Your windshield must be free of any signs or unofficial " +
      "stickers.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Visual Obstructions & Other Distractions (page 24)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=24",
  },
  {
    key: "pets-secured",
    quote:
      "Properly secure pets in a pet carrier or portable kennel.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Emotional Distractions (page 24)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=24",
  },
  {
    key: "marking-broken-yellow",
    quote:
      "A broken yellow line separates traffic lanes that move in " +
      "the opposite directions. Crossing into the oncoming lane " +
      "is permissible ONLY for passing and only when it is safe " +
      "to pass.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Pavement Markings - Lane Lines, Center Lines, & Barrier Lines (page 25)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=25",
  },
  {
    key: "marking-broken-white",
    quote:
      "A broken white line means travel in the same direction is " +
      "permitted on both sides of the line. A vehicle may cross " +
      "the line to change lanes when it is safe to do so.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Pavement Markings - Lane Lines, Center Lines, & Barrier Lines (page 25)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=25",
  },
  {
    key: "marking-yellow-pair",
    quote:
      "A broken yellow line next to a solid yellow line separates " +
      "traffic lanes that move in opposite directions. If the " +
      "broken line is closest to your lane, you may pass with " +
      "caution. If the solid line is closest to your lane, " +
      "passing is forbidden.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Pavement Markings - Lane Lines, Center Lines, & Barrier Lines (page 25)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=25",
  },
  {
    key: "marking-double-yellow",
    quote:
      "A double, solid yellow line separates travel lanes moving " +
      "in opposite directions. Passing from either side of a " +
      "double yellow line is PROHIBITED.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Pavement Markings - Lane Lines, Center Lines, & Barrier Lines (page 25)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=25",
  },
  {
    key: "marking-double-white",
    quote:
      "A double, solid white line means travel in the same " +
      "direction is permitted on both sides of the line. Crossing " +
      "a double white line is PROHIBITED.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Pavement Markings - Lane Lines, Center Lines, & Barrier Lines (page 25)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=25",
  },
  {
    key: "marking-single-white",
    quote:
      "A single, solid white line means travel in the same " +
      "direction is permitted on both sides of the line. Crossing " +
      "a single white line is discouraged.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Pavement Markings - Lane Lines, Center Lines, & Barrier Lines (page 25)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=25",
  },
  {
    key: "marking-must-comply",
    quote:
      "The pavement on all main highways is marked to help you " +
      "drive safely. These markings include center lines, lane " +
      "lines, and directional arrows. Their placement depends " +
      "upon the type of highway and the traffic conditions. You " +
      "must observe and comply with these markings.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Pavement Markings (page 25)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=25",
  },
  {
    key: "arrow-left-only",
    quote:
      "An arrow pointing to the left means you MUST turn left if " +
      "you travel in this lane.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Directional Arrows (page 26)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=26",
  },
  {
    key: "arrow-wrong-lane",
    quote:
      "If you get in the wrong lane, keep going in that lane " +
      "until it is safe to turn off and get back on the correct " +
      "street or highway.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Directional Arrows (page 26)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=26",
  },
  {
    key: "turn-lane-only",
    quote:
      "A vehicle may use this lane ONLY in preparation to turn " +
      "left or right across the opposite lanes. The turn lane is " +
      "NEVER used for passing.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Directional Arrows (page 26)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=26",
  },
  {
    key: "crosswalk-never-stop",
    quote:
      "Approach crosswalks with care. Never stop your car on any " +
      "part of a crosswalk.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Crosswalks (page 26)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=26",
  },
  {
    key: "crosswalk-unmarked-yield",
    quote:
      "However, drivers must always yield to pedestrians in " +
      "crosswalks-even if the crosswalk is not marked.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Crosswalks (page 26)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=26",
  },
  {
    key: "signs-eight-shapes",
    quote:
      "Signs have eight standard shapes and eight standard " +
      "colors. Each one has a specific meaning.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Traffic Signs And Signals - Standard Shapes And Colors (page 27)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=27",
  },
  {
    key: "signs-international-style",
    quote:
      "The U.S. is currently converting to an international " +
      "style, which uses pictures and symbols rather than words.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Traffic Signs And Signals (page 27)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=27",
  },
  {
    key: "shape-octagon",
    quote:
      "OCTAGON: Exclusively for STOP signs.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Standard Shapes And Colors (page 27)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=27",
  },
  {
    key: "shape-triangle",
    quote:
      "EQUILATERAL TRIANGLE: Exclusively for YIELD signs.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Standard Shapes And Colors (page 27)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=27",
  },
  {
    key: "shape-pennant",
    quote:
      "PENNANT: Warning of NO PASSING ZONE ahead.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Standard Shapes And Colors (page 27)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=27",
  },
  {
    key: "shape-diamond",
    quote:
      "DIAMOND: Exclusively to warn of existing or possible " +
      "hazard on or adjacent to roadway.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Standard Shapes And Colors (page 27)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=27",
  },
  {
    key: "shape-pentagon",
    quote:
      "PENTAGON: School crossing signs and warning of school " +
      "zones ahead.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Standard Shapes And Colors (page 27)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=27",
  },
  {
    key: "shape-round",
    quote:
      "ROUND: Warning of railroad crossing ahead.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Standard Shapes And Colors (page 27)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=27",
  },
  {
    key: "shape-vertical-rectangle",
    quote:
      "VERTICAL RECTANGLE: Usually used for regulatory signs " +
      "(such as speed limits).",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Standard Shapes And Colors (page 27)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=27",
  },
  {
    key: "shape-horizontal-rectangle",
    quote:
      "HORIZONTAL RECTANGLE: Usually for guide signs.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Standard Shapes And Colors (page 27)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=27",
  },
  {
    key: "color-red",
    quote:
      "RED: Stop. If you see red on a traffic device, STOP.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Standard Shapes And Colors (page 27)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=27",
  },
  {
    key: "color-yellow",
    quote:
      "YELLOW: General warning.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Standard Shapes And Colors (page 27)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=27",
  },
  {
    key: "color-orange",
    quote:
      "ORANGE: Construction or maintenance warning.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Standard Shapes And Colors (page 27)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=27",
  },
  {
    key: "color-brown",
    quote:
      "BROWN: Public recreation and scenic guidance.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Standard Shapes And Colors (page 27)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=27",
  },
  {
    key: "color-blue",
    quote:
      "BLUE: Motorist services guidance.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Standard Shapes And Colors (page 27)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=27",
  },
  {
    key: "color-green",
    quote:
      "GREEN: Directional guidance and permitted movement.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Standard Shapes And Colors (page 27)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=27",
  },
  {
    key: "sign-stop-eight-sides",
    quote:
      "The STOP sign is the only sign with eight sides. It " +
      "requires you to come to a COMPLETE STOP before entering an " +
      "intersection. After stopping, you MUST yield to any " +
      "traffic close enough to be a hazard.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Regulatory Signs (page 28)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=28",
  },
  {
    key: "sign-do-not-enter",
    quote:
      "The DO NOT ENTER sign might include the words \"do not " +
      "enter,\" or it might only include the white bar across the " +
      "red circle background. Either way, it means you may not " +
      "enter this lane of travel.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Regulatory Signs (page 28)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=28",
  },
  {
    key: "sign-wrong-way",
    quote:
      "The WRONG WAY sign tells you that you are traveling in the " +
      "opposite direction from the other cars in your lane.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Regulatory Signs (page 28)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=28",
  },
  {
    key: "sign-wrong-way-action",
    quote:
      "You are in danger of causing a head- on collision. You " +
      "must leave the roadway and turn around as soon as " +
      "possible.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Regulatory Signs (page 28)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=28",
  },
  {
    key: "sign-no-u-turn",
    quote:
      "This sign means YOU MAY NOT TURN AROUND in an " +
      "intersection, in the center of a street, or in a high- way " +
      "median.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Regulatory Signs (page 28)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=28",
  },
  {
    key: "sign-no-turn-on-red",
    quote:
      "However, signs like these mean RIGHT TURNS ARE NEVER " +
      "ALLOWED while the traffic signal is red. You must wait for " +
      "the green light to turn right.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Regulatory Signs (page 28)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=28",
  },
  {
    key: "sign-right-on-red-usual",
    quote:
      "Usually, if a traffic signal is red, you may turn right " +
      "AFTER you stop completely and make sure the way is clear.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Regulatory Signs (page 28)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=28",
  },
  {
    key: "sign-yield",
    quote:
      "The YIELD right-of- way sign is an equilateral triangle. " +
      "It means you MUST let other vehicles on the roadway have " +
      "the right-of-way.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Regulatory Signs (page 28)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=28",
  },
  {
    key: "sign-no-trucks",
    quote:
      "This sign means NO TRUCKS are allowed on this street or " +
      "highway.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Regulatory Signs (page 28)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=28",
  },
  {
    key: "sign-speed-maximum",
    quote:
      "This sign indicates the MAXIUM SPEED ALLOWED under ideal " +
      "driving conditions.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Regulatory Signs (page 29)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=29",
  },
  {
    key: "sign-center-turn-lane",
    quote:
      "This sign means you may ONLY use the center lane TO MAKE " +
      "TURNS. The center lane is not available for normal travel " +
      "or passing.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Regulatory Signs (page 29)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=29",
  },
  {
    key: "sign-no-passing",
    quote:
      "This sign means that crossing into another lane to pass a " +
      "vehicle is PROHIBITED.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Regulatory Signs (page 29)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=29",
  },
  {
    key: "sign-handicapped-parking",
    quote:
      "This sign designates HANDICAPPED PARKING ONLY. Parking is " +
      "only allowed for vehicles with an official indicator such " +
      "as a handicap license tag or temporary hangtag.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Regulatory Signs (page 29)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=29",
  },
  {
    key: "sign-one-way-arrow",
    quote:
      "This sign means you may ONLY TRAVEL IN THE DIRECTION OF " +
      "THE ARROW.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Regulatory Signs (page 29)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=29",
  },
  {
    key: "sign-right-lane-ends",
    quote:
      "RIGHT LANE ENDS. Merge to left.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Warning Signs (page 30)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=30",
  },
  {
    key: "sign-divided-highway-ends",
    quote:
      "DIVIDED HIGHWAY ENDS; TWO-WAY TRAFFIC ahead.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Warning Signs (page 30)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=30",
  },
  {
    key: "sign-slippery-when-wet",
    quote:
      "The road is SLIPPERY WHEN WET.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Warning Signs (page 31)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=31",
  },
  {
    key: "sign-school-zone-fifteen",
    quote:
      "SCHOOL ZONE: Fifteen miles per hour when passing a school " +
      "during recess or while children are arriving at or leaving " +
      "school during opening/closing hours.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Warning Signs (page 31)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=31",
  },
  {
    key: "sign-school-crossing",
    quote:
      "SCHOOL CROSSING: This sign warns that children must cross " +
      "the street on their way to and from school. The sign is " +
      "sometimes located several blocks from the school.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Warning Signs (page 31)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=31",
  },
  {
    key: "sign-pedestrian-crossing",
    quote:
      "PEDESTRIAN CROSSING. Remember that pedestrians have the " +
      "right of way at intersections, whether the crosswalk is " +
      "marked or not.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Warning Signs (page 31)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=31",
  },
  {
    key: "sign-cross-traffic",
    quote:
      "It tells you that although you must stop for your stop " +
      "sign, this is NOT a four-way stop. Other traffic lanes " +
      "have the right of way and will not stop.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Warning Signs (page 31)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=31",
  },
  {
    key: "workzone-brake",
    quote:
      "Reduce your speed in work zones and be prepared to stop " +
      "suddenly. Do not tailgate in work zones.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Work Zone Signs (page 33)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=33",
  },
  {
    key: "workzone-signs",
    quote:
      "These are generally diamond or rectangular shaped or " +
      "orange with black letters or symbols.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Work Zone Signs (page 33)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=33",
  },
  {
    key: "workzone-flagger",
    quote:
      "In work zones, traffic may be controlled by a person with " +
      "a sign or flag to tell you which direction to travel or to " +
      "slow down to stop. You must follow their instructions.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Work Zone Signs (page 33)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=33",
  },
  {
    key: "workzone-barriers",
    quote:
      "Barriers, such as drums, cones, and tubes (panels), are " +
      "used to keep traffic out of hazardous work zones.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Work Zone Signs (page 33)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=33",
  },
  {
    key: "slow-moving-emblem",
    quote:
      "This emblem identifies SLOW-MOVING VEHICLES (vehicles that " +
      "travel twenty-five miles per hour or less).",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Slow-Moving Vehicles (page 34)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=34",
  },
  {
    key: "slow-moving-triangle",
    quote:
      "A fluorescent or reflective orange and red triangle " +
      "displayed on the rear of vehicles drawn by animals, farm " +
      "equipment, or construction equipment means the vehicle is " +
      "traveling less than 25 mph.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Slow-Moving Vehicles (page 34)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=34",
  },
  {
    key: "animal-drawn-vehicles",
    quote:
      "Do not use your horn or \"rev\" the engine because this may " +
      "scare the horse and cause a crash.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Slow-Moving Vehicles (page 34)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=34",
  },
  {
    key: "farm-machinery",
    quote:
      "Pass with caution and remember that the operator of the " +
      "farm machinery may not hear approaching vehicles.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Slow-Moving Vehicles (page 34)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=34",
  },
  {
    key: "rr-advance-sign",
    quote:
      "In rural areas, this sign is normally posted 500 to 900 " +
      "feet in front of the tracks. It tells you to look, listen, " +
      "and slow down because you may have to stop.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Railroad Crossings (page 35)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=35",
  },
  {
    key: "rr-flashing-lights",
    quote:
      "ALWAYS STOP when the lights begin to flash. The lights " +
      "mean a train is coming. Remain STOPPED until the lights " +
      "stop flashing.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Railroad Crossings (page 35)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=35",
  },
  {
    key: "rr-gates",
    quote:
      "Gates are used with flashing light signals at some " +
      "crossings. ALWAYS STOP when the lights begin to flash " +
      "before the gates lower across your side of the tracks. " +
      "Remain STOPPED until the gates are raised and the lights " +
      "stop flashing.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Railroad Crossings (page 35)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=35",
  },
  {
    key: "rr-must-stop-vehicles",
    quote:
      "Regardless of signage and whether lights are flashing, the " +
      "following MUST STOP at ALL RAILROAD CROSSINGS: a SCHOOL " +
      "BUS carrying even one child, a VEHICLE FOR HIRE carrying " +
      "passengers, or a vehicle carrying EXPLOSIVES OR FLAMMABLE " +
      "LIQUIDS.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Railroad Crossings (page 35)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=35",
  },
  {
    key: "rr-fifty-to-ten",
    quote:
      "These vehicles MUST STOP within fifty to ten feet of the " +
      "outer rail of any crossing.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Railroad Crossings (page 35)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=35",
  },
  {
    key: "rr-pavement-markings",
    quote:
      "In front of railroad crossings, the pavement is marked " +
      "with a large X and two R's. A solid yellow line is used to " +
      "prevent passing in advance of the crossing, and a white " +
      "line is painted on each side of the track.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Railroad Crossings (page 35)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=35",
  },
  {
    key: "rr-crossbuck",
    quote:
      "This white \"cross buck\" sign is posted at most railroad " +
      "crossings. If there is more than one track, the number of " +
      "tracks is shown on a sign below the cross buck.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Railroad Crossings (page 35)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=35",
  },
  {
    key: "rr-all-drivers-stop",
    quote:
      "ALL drivers must ALWAYS STOP WITHIN fifty to ten feet of " +
      "the outer rail of any railroad crossing when you see ANY " +
      "of the following: a lowered crossing gate, a flashing " +
      "electric signal, a posted STOP sign, a flag person giving " +
      "you a signal, or a rapidly approaching train.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Railroad Crossings - Remember! (page 36)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=36",
  },
  {
    key: "rr-stop-even-no-train",
    quote:
      "You MUST stop even if you do not see a train. You must " +
      "remain stopped until all tracks are clear, any gates are " +
      "raised, and lights no longer flash.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Railroad Crossings - Remember! (page 36)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=36",
  },
  {
    key: "rr-around-gates",
    quote:
      "It is against the law to drive around any lowered gates at " +
      "a crossing.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Railroad Crossings - Remember! (page 36)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=36",
  },
  {
    key: "rr-second-train",
    quote:
      "Do not shift gears as you drive across tracks. Always " +
      "check carefully for a second train following close behind " +
      "the first.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Railroad Crossings - Remember! (page 36)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=36",
  },
  {
    key: "rr-stuck-twenty-seconds",
    quote:
      "If your vehicle is physically on the train tracks at a " +
      "grade crossing and the lights begin to flash, you may only " +
      "have 20 seconds to escape before the train makes it to " +
      "your location.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Railroad Crossings (page 36)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=36",
  },
  {
    key: "rr-get-out-and-run",
    quote:
      "Once outside, run in a 45-degree angle away from the " +
      "tracks in the direction that the train is coming, then " +
      "immediately dial 911.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Railroad Crossings (page 36)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=36",
  },
  {
    key: "rr-ens-number",
    quote:
      "The toll-free number is answered by railroad dispatchers " +
      "who can attempt to stop all train traffic at the crossing " +
      "during an emergency.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Railroad Crossings (page 36)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=36",
  },
  {
    key: "signal-solid-red",
    quote:
      "A SOLID RED LIGHT means you must make a complete stop and " +
      "remain stopped until the light turns green.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Traffic Signal Lights (page 37)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=37",
  },
  {
    key: "signal-right-on-red",
    quote:
      "EXCEPTION: You may turn right while the light is red. But " +
      "first, you must STOP COMPLETELY and yield to other traffic " +
      "and pedestrians. You may NOT turn on red if a sign " +
      "prohibits you.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Traffic Signal Lights (page 37)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=37",
  },
  {
    key: "signal-red-stop-first",
    quote:
      "Before turning right on red you MUST first stop " +
      "completely: Only yielding before turning is not enough and " +
      "is illegal.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Traffic Signal Lights (page 37)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=37",
  },
  {
    key: "signal-solid-yellow",
    quote:
      "A SOLID YELLOW LIGHT means the light will soon turn red. " +
      "Slow down and prepare to stop.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Traffic Signal Lights (page 37)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=37",
  },
  {
    key: "signal-solid-green",
    quote:
      "A SOLID GREEN LIGHT means you may go if it is safe to do " +
      "so. You must yield to any pedestrians and to any traffic " +
      "already in the intersection.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Traffic Signal Lights (page 37)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=37",
  },
  {
    key: "signal-green-left-yield",
    quote:
      "EXCEPTION: If you are turning left, the solid green light " +
      "means you must YIELD TO ONCOMING TRAFFIC.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Traffic Signal Lights (page 37)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=37",
  },
  {
    key: "signal-green-arrow",
    quote:
      "A GREEN ARROW means you may turn in the direction of the " +
      "arrow if you are in the proper lane. Oncoming traffic will " +
      "have a red light when your turn arrow is green, giving you " +
      "a protected turn.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Traffic Signal Lights (page 37)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=37",
  },
  {
    key: "signal-flashing-yellow-arrow",
    quote:
      "A YELLOW FLASHING ARROW means you may turn in the " +
      "direction of the arrow if you are in the proper lane. You " +
      "must YIELD TO ONCOMING TRAFFIC.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Traffic Signal Lights (page 37)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=37",
  },
  {
    key: "signal-fya-not-protected",
    quote:
      "Oncoming traffic will have a green light when your turn " +
      "arrow is flashing, so you do NOT have a protected turn.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Traffic Signal Lights (page 37)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=37",
  },
  {
    key: "signal-yellow-arrow",
    quote:
      "A YELLOW SOLID ARROW is the same as a SOLID YELLOW LIGHT. " +
      "It indicates that the light is about to change to red.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Traffic Signal Lights (page 37)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=37",
  },
  {
    key: "signal-yield-pedestrians",
    quote:
      "REMEMBER: ANY TIME you travel through an intersection, you " +
      "must YIELD TO PEDESTRIANS. You must also YIELD TO ANY " +
      "TRAFFIC ALREADY IN THE INTERSECTION.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Traffic Signal Lights (page 37)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=37",
  },
  {
    key: "signal-fya-equals-green",
    quote:
      "REMEMBER: For left turns, the yellow flashing arrow and " +
      "the solid green light mean the same thing: YIELD TO " +
      "ONCOMING TRAFFIC.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Traffic Signals - Left Turns (page 38)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=38",
  },
  {
    key: "signal-red-with-green-arrow",
    quote:
      "RED LIGHT: You may NOT continue straight through the " +
      "intersection. You must stop and wait. GREEN ARROW: You may " +
      "turn left from turn lane.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Traffic Signals - Left Turns (page 38)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=38",
  },
  {
    key: "signal-green-unprotected-left",
    quote:
      "GREEN LIGHT: You may travel straight. You may turn left " +
      "only if the way is clear. This is an unprotected turn, and " +
      "you must YIELD to oncoming traffic.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Traffic Signals - Left Turns (page 38)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=38",
  },
  {
    key: "signal-flashing-red",
    quote:
      "A FLASHING RED LIGHT means you must STOP completely and " +
      "proceed with caution, yielding to the right-of- way at " +
      "intersections.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Traffic Signal Lights (page 39)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=39",
  },
  {
    key: "signal-flashing-yellow",
    quote:
      "A FLASHING YELLOW LIGHT means you must SLOW DOWN and " +
      "exercise caution.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Traffic Signal Lights (page 39)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=39",
  },
  {
    key: "signal-dark-intersection",
    quote:
      "If you approach a malfunctioning traffic light with a NO " +
      "FUNCTIONING LIGHTS, you must STOP completely and proceed " +
      "with caution, following rules or yielding right of way at " +
      "intersections.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Traffic Signal Lights (page 39)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=39",
  },
  {
    key: "lane-direction-control",
    quote:
      "When signals like these are in use, you may travel ONLY in " +
      "a lane marked by a green light. NEVER travel in a lane " +
      "marked with a red light.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Lane Direction Control (page 40)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=40",
  },
  {
    key: "traffic-officer",
    quote:
      "You should always follow them UNLESS an officer is " +
      "directing traffic. If officers are directing traffic, you " +
      "MUST follow their directions.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Traffic Officers (page 40)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=40",
  },
  {
    key: "ped-signal-flashing",
    quote:
      "If the sign is flashing, pedestrians MUST NOT LEAVE THE " +
      "CURB. Pedestrians should continue crossing if they began " +
      "to cross the intersection before the sign changed to " +
      "flashing.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Pedestrian Crossing (page 40)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=40",
  },
  {
    key: "speed-school-zone-fifteen",
    quote:
      "The maximum speed for any vehicle in a SCHOOL ZONE is 15 " +
      "mph.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Legal Speeds (page 41)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=41",
  },
  {
    key: "speed-school-bus-45",
    quote:
      "The maximum speed for a SCHOOL BUS while transporting " +
      "children to and from school on regular routes is 45 mph.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Legal Speeds (page 41)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=41",
  },
  {
    key: "speed-school-bus-interstate",
    quote:
      "The maximum speed for a SCHOOL BUS while on the interstate " +
      "is 65 mph.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Legal Speeds (page 41)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=41",
  },
  {
    key: "speed-table",
    quote:
      "ROADWAY TYPE MAXIMUM SPEED MINIMUM SPEED Interstates 70 " +
      "mph 40 mph Four-lane Highways (State & U.S.) 65 mph 40 mph " +
      "Two-lane Highways (State & U.S.) 55 mph Natchez Trace " +
      "Parkway 50 mph",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Legal Speeds - Speed Limits For Passenger Automobiles (page 41)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=41",
  },
  {
    key: "speed-monitor-posted",
    quote:
      "Always monitor the posted speed limit signs and glance " +
      "frequently at your speedometer. You should always know how " +
      "fast you are traveling.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Legal Speeds (page 41)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=41",
  },
  {
    key: "speed-reduce-conditions",
    quote:
      "Reduce speed on curves, when approaching intersections, " +
      "when on a narrow or twisting road, or when traffic is " +
      "congested. If the weather or visibility is poor, slow down " +
      "accordingly. Posted speed limits are intended for ideal " +
      "conditions.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Legal Speeds (page 41)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=41",
  },
  {
    key: "speed-stone-wall",
    quote:
      "If you hit a stone wall at 40 mph, the impact is the same " +
      "as if you drove off a four-story building.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Legal Speeds (page 41)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=41",
  },
  {
    key: "signal-lights-use",
    quote:
      "Use your vehicle's signal lights (\"blinkers\") to alert " +
      "other drivers each time you intend to turn, change lanes, " +
      "pass, or enter or exit a parallel parking space.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Signal Lights (page 42)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=42",
  },
  {
    key: "signal-only-if-turning",
    quote:
      "If the vehicle ahead of you signals for a turn, activate " +
      "your signal ONLY IF YOU ALSO INTEND TO TURN. Do not signal " +
      "to warn others that the vehicle in front of you is " +
      "turning.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Signal Lights (page 42)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=42",
  },
  {
    key: "signal-not-pass-invitation",
    quote:
      "Do not use your left signal to let a vehicle behind you " +
      "know it is safe to pass. The driver behind you is " +
      "responsible for determining whether it is safe to pass.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Signal Lights (page 42)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=42",
  },
  {
    key: "arm-signal-hundred-feet",
    quote:
      "If you are using arm signals, be sure to extend your arm " +
      "fully and signal continuously for at least one hundred " +
      "feet before you slow down, turn, stop, or change lanes.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Arm Signals (page 42)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=42",
  },
  {
    key: "arm-signal-left",
    quote:
      "LEFT TURN: Extend your arm and hand straight out. This " +
      "signal is also used when changing from the right lane to " +
      "the left lane or when starting from a parallel parking " +
      "position.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Arm Signals (page 42)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=42",
  },
  {
    key: "arm-signal-right",
    quote:
      "RIGHT TURN: Extend your arm and hand upward, with your arm " +
      "bent at the elbow.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Arm Signals (page 42)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=42",
  },
  {
    key: "arm-signal-stop",
    quote:
      "SLOW DOWN OR STOP: Extend your arm and hand downward, with " +
      "your palm facing the rear.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Arm Signals (page 42)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=42",
  },
  {
    key: "arm-signal-who-uses",
    quote:
      "Arm Signals are used by bicyclists, motorists whose signal " +
      "lights are malfunctioning, and drivers of some antique " +
      "vehicles and farm equipment.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Arm Signals (page 42)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=42",
  },
  {
    key: "following-car-length",
    quote:
      "When you are following another vehicle, allow at least one " +
      "car length between you for every ten miles per hour of " +
      "speed.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Following (page 43)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=43",
  },
  {
    key: "following-rear-end",
    quote:
      "Following too closely to another vehicle is dangerous and " +
      "the main cause of rear-end collisions.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Following (page 43)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=43",
  },
  {
    key: "following-large-truck",
    quote:
      "When you follow a large truck or bus, allow yourself even " +
      "more room.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Following (page 43)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=43",
  },
  {
    key: "following-motorcade",
    quote:
      "If you are taking part in a motorcade, such as a funeral " +
      "procession, allow enough space between you and the next " +
      "car so that other vehicles may safely pull into those " +
      "spaces.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Following (page 43)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=43",
  },
  {
    key: "braking-ideal-conditions",
    quote:
      "The braking distances shown here assume ideal conditions: " +
      "good tires, good brakes, and dry pavement.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Braking (page 44)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=44",
  },
  {
    key: "braking-chart",
    quote:
      "The chart below shows the shortest total stopping " +
      "distances under ideal conditions. If the weather is bad, " +
      "the road is slick, or if you are tired or intoxicated, " +
      "then the distances will be drastically different.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Braking (page 44)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=44",
  },
  {
    key: "lane-extreme-right",
    quote:
      "If you drive on a street or highway with more than one " +
      "lane for your direction, drive in the extreme RIGHT lane " +
      "except to pass or turn left.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Traffic Lanes (page 45)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=45",
  },
  {
    key: "lane-center-for-left",
    quote:
      "(If there is no designated turn lane, use the lane next to " +
      "the center for turning left.)",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Traffic Lanes (page 45)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=45",
  },
  {
    key: "lane-never-cross-double",
    quote:
      "NEVER CROSS a double yellow line (not even to pass a " +
      "slow-moving car). You will be driving into oncoming " +
      "traffic.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Traffic Lanes (page 45)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=45",
  },
  {
    key: "lane-single-lane",
    quote:
      "Always drive in a single lane. Never change lanes unless " +
      "the movement can be made safely. On a four- lane highway, " +
      "drive in the right lane except when passing or preparing " +
      "to turn left.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Traffic Lanes (page 45)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=45",
  },
  {
    key: "lane-cross-to-pass",
    quote:
      "You may never cross a double yellow line to pass a " +
      "vehicle. If there is a single, broken, yellow line, you " +
      "may cross that line for passing (if the oncoming lane is " +
      "clear and it is safe to pass).",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Traffic Lanes (page 45)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=45",
  },
  {
    key: "lane-definition",
    quote:
      "You are in a traffic lane whenever you are driving on any " +
      "street or highway. These lanes may or may not be marked, " +
      "but they exist just the same.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Traffic Lanes (page 45)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=45",
  },
  {
    key: "passing-double-yellow",
    quote:
      "SOLID DOUBLE YELLOW LINE NO PASSING from either direction.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Passing Other Vehicles (page 47)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=47",
  },
  {
    key: "passing-mixed-lines",
    quote:
      "Vehicle traveling alongside the BROKEN yellow line MAY " +
      "cross the lines to pass. Vehicle traveling alongside the " +
      "SOLID yellow line MAY NOT CROSS the lines to pass.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Passing Other Vehicles (page 47)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=47",
  },
  {
    key: "passing-four-lane",
    quote:
      "It is never legal to move across the center line of a " +
      "four-lane highway to pass another vehicle. However, on " +
      "interstates and four-lane highways, passing is allowed " +
      "from both the left and right lanes (traveling in the same " +
      "direction when lanes are divided by a BROKEN WHITE LINE).",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Passing On A Four-Lane Highway Or Interstate (page 47)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=47",
  },
  {
    key: "passing-right-situations",
    quote:
      "You may overtake and pass another vehicle on the right in " +
      "the following situations: When the vehicle you are passing " +
      "is making or is about to make a left turn. On an " +
      "interstate with multiple lanes traveling in your " +
      "direction.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Passing On The Right (page 47)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=47",
  },
  {
    key: "passing-no-shoulder",
    quote:
      "Under no circumstances are you allowed to drive off the " +
      "pavement or on the shoulder to pass.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Passing On The Right (page 47)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=47",
  },
  {
    key: "passing-hundred-feet",
    quote:
      "Do not pass on hills, curves, or within one hundred feet " +
      "of bridges, viaducts, overpasses, railroad crossings, " +
      "crosswalks, intersections, or any place where your view is " +
      "obstructed in any way.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Other Safe Passing Guidelines (page 47)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=47",
  },
  {
    key: "passing-being-passed",
    quote:
      "When being passed on a two-lane or three-lane highway, " +
      "keep to the right. Do not increase your speed until the " +
      "other car has completely passed you.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Other Safe Passing Guidelines (page 47)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=47",
  },
  {
    key: "passing-return-mirror",
    quote:
      "Before moving back into the right lane, make sure that you " +
      "can see the vehicle you passed in your rearview mirror.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Passing On The Left (page 47)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=47",
  },
  {
    key: "passing-do-not-tailgate",
    quote:
      "Do not tailgate a vehicle that you intend to pass. Drop " +
      "back far enough so that you can see around it before you " +
      "try to change lanes.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Passing On The Left (page 47)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=47",
  },
  {
    key: "three-point-turn",
    quote:
      "Start from the extreme right side of the road, give the " +
      "correct signal, and turn the steering wheel sharply to the " +
      "left while inching forward.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Turning Around (page 49)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=49",
  },
  {
    key: "turn-blocked-intersection",
    quote:
      "When approaching an intersection and traffic is blocked " +
      "ahead of you, you should stop before reaching the " +
      "crosswalk and wait for traffic to move.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Turning At Intersections (page 50)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=50",
  },
  {
    key: "turn-most-accidents",
    quote:
      "More accidents occur at intersections than anywhere else. " +
      "Often there is a failure of communication among drivers, " +
      "or someone takes an unnecessary chance when turning.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Turning At Intersections (page 50)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=50",
  },
  {
    key: "turn-stay-in-lane",
    quote:
      "Stay in your lane throughout the turn. Finish the turn in " +
      "the proper lane.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Turning At Intersections (page 50)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=50",
  },
  {
    key: "turn-no-shift",
    quote:
      "Do not push down on the brake or clutch while you are " +
      "turning. Do not shift gears while entering the " +
      "intersection.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Turning At Intersections (page 50)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=50",
  },
  {
    key: "turn-look-all-directions",
    quote:
      "Look around you in all directions before you change lanes " +
      "or turn. Do not assume that other drivers will see you.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Turning At Intersections (page 50)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=50",
  },
  {
    key: "left-turn-hundred-feet",
    quote:
      "STEP 2: At least one hundred feet from the intersection, " +
      "turn on your left signal and slow down.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "How To Make A Left Turn (page 51)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=51",
  },
  {
    key: "left-turn-center-line",
    quote:
      "STEP 3: Keep close to the center line and keep your wheels " +
      "straight while waiting to turn.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "How To Make A Left Turn (page 51)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=51",
  },
  {
    key: "left-turn-right-of-center",
    quote:
      "When travel is permitted, look both ways before entering " +
      "intersection. Then enter just to the right of center.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "How To Make A Left Turn (page 51)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=51",
  },
  {
    key: "right-turn-hundred-feet",
    quote:
      "STEP 2: At least one hundred feet from the intersection, " +
      "turn on your right signal and slow down",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "How To Make A Right Turn (page 52)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=52",
  },
  {
    key: "right-turn-close-to-right",
    quote:
      "Then enter, keeping as close as possible to the right.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "How To Make A Right Turn (page 52)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=52",
  },
  {
    key: "two-left-turns",
    quote:
      "When two drivers approach an intersection and both drivers " +
      "want to turn left, each driver should turn to the left of " +
      "the other. Leave from the left lane and enter into the " +
      "left lane.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Turning Left Of Center (page 54)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=54",
  },
  {
    key: "one-way-turn-from-curb",
    quote:
      "A good rule to remember when traveling on a one-way street " +
      "is to always turn from the lane nearest the curb.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "One-Way Streets (page 54)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=54",
  },
  {
    key: "intersection-extreme-caution",
    quote:
      "Always approach any cross street or road with extreme " +
      "caution.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Intersections And Right-Of-Way (page 55)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=55",
  },
  {
    key: "intersection-cannot-see",
    quote:
      "If you cannot see the entire intersection as you approach, " +
      "slow down and proceed cautiously. Be sure to look in both " +
      "directions as you cross.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Intersections And Right-Of-Way (page 55)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=55",
  },
  {
    key: "row-definition",
    quote:
      "\"Right of way\" is the privilege of immediate use of the " +
      "highway. The person who has right of way may move ahead " +
      "(whether in an automobile, on a bicycle, or traveling as a " +
      "pedestrian). The person who does not have right of way " +
      "must yield and wait.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Right Of Way (page 55)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=55",
  },
  {
    key: "row-common-sense",
    quote:
      "The first rule is to always use your common sense. Your " +
      "right of way is important but is not worth an accident.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Right Of Way (page 55)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=55",
  },
  {
    key: "row-pedestrians-always",
    quote:
      "In crosswalks, PEDESTRIANS ALWAYS HAVE RIGHT OF WAY, " +
      "whether the crosswalk is marked or not.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Right Of Way (page 55)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=55",
  },
  {
    key: "row-bicycles",
    quote:
      "Vehicles already inside an intersection also have right of " +
      "way. You must yield to BICYCLES exactly as you would to " +
      "any other vehicle.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Right Of Way (page 55)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=55",
  },
  {
    key: "intersection-most-dangerous",
    quote:
      "The most dangerous place on a highway is an intersection.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Intersections And Right-Of-Way (page 55)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=55",
  },
  {
    key: "four-way-stop",
    quote:
      "At a four-way stop, right of way is determined by which " +
      "vehicle arrives first, and by where the vehicle is located " +
      "relative to the others. The first vehicle to arrive has " +
      "right- of-way. If multiple vehicles arrive at the same " +
      "time, the vehicle on the right has right of way.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Four-Way Stop (page 56)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=56",
  },
  {
    key: "four-way-no-slamming",
    quote:
      "Do not slam on your brakes to \"stop first.\" Yield to the " +
      "driver on right.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Four-Way Stop (page 56)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=56",
  },
  {
    key: "two-way-stop",
    quote:
      "At a two-way stop, the cross-traffic with no stop signs " +
      "has the right of way. Vehicles arriving at stop signs must " +
      "wait until the way is clear before proceeding.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Two-Way Stop (page 56)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=56",
  },
  {
    key: "two-way-straight-wins",
    quote:
      "If two vehicles arrive at the same time, the vehicle " +
      "intending to travel straight across has right of way. The " +
      "vehicle intending to turn across the traffic lane must " +
      "yield and wait.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Two-Way Stop (page 56)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=56",
  },
  {
    key: "stop-sign-complete",
    quote:
      "If you approach an intersection with a stop sign or " +
      "signal, you MUST bring your vehicle to a COMPLETE STOP at " +
      "the crosswalk. You MUST YIELD THE RIGHT-OF-WAY TO ANY " +
      "VEHICLE OR PEDESTRIAN IN THE INTERSECTION. You may " +
      "carefully proceed if your way is completely clear.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Intersections And Right-Of-Way (page 56)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=56",
  },
  {
    key: "driveway-yield",
    quote:
      "When entering a street or highway from a driveway or other " +
      "entrance point, you must stop and yield to oncoming " +
      "traffic, even if no stop sign is present.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Driveways & Unmarked Entrances (page 57)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=57",
  },
  {
    key: "unmarked-intersection",
    quote:
      "If you encounter a highway intersection with no traffic " +
      "signs or signals, yield to approaching traffic, then " +
      "proceed only when it is safe.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Unmarked Intersection (page 57)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=57",
  },
  {
    key: "roundabout-counterclockwise",
    quote:
      "Vehicles travel counterclockwise around a raised center " +
      "island, with entering traffic yielding the right of way to " +
      "circulating traffic.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Roundabouts (page 57)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=57",
  },
  {
    key: "roundabout-steps",
    quote:
      "Slow down to enter the roundabout or traffic circle. Yield " +
      "to the traffic in the roundabout or circle. Enter the " +
      "roundabout or traffic circle in a counterclockwise " +
      "direction. Proceed to the appropriate exit, signal intent, " +
      "and exit.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Roundabouts (page 57)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=57",
  },
  {
    key: "schoolbus-ten-feet",
    quote:
      "COME TO A COMPLETE STOP at least ten feet away from the " +
      "bus.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Yielding Right-Of-Way To School Buses (page 58)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=58",
  },
  {
    key: "schoolbus-remain-stopped",
    quote:
      "REMAIN STOPPED until the children have crossed the roadway " +
      "AND the bus has resumed motion, its red lights no longer " +
      "flash, and its stop sign is retracted.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Yielding Right-Of-Way To School Buses (page 58)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=58",
  },
  {
    key: "schoolbus-either-direction",
    quote:
      "You must stop for the school bus regardless of your " +
      "direction of travel.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Yielding Right-Of-Way To School Buses (page 58)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=58",
  },
  {
    key: "schoolbus-divided-definition",
    quote:
      "One exception to the procedures above is for drivers " +
      "traveling on a DIVIDED HIGHWAY. If you are traveling on a " +
      "highway with FOUR or more lanes, with at least TWO lanes " +
      "of travel in opposite directions",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Yielding Right-Of-Way To School Buses (page 58)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=58",
  },
  {
    key: "schoolbus-opposite-direction",
    quote:
      "If you are traveling in the OPPOSITE direction as the " +
      "stopped school bus, you may continue to travel on your " +
      "side of the divided highway without stopping.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Yielding Right-Of-Way To School Buses (page 58)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=58",
  },
  {
    key: "schoolbus-loading-zone",
    quote:
      "If the school bus stops in a loading zone that is part of " +
      "the highway or adjacent to the highway, and where " +
      "pedestrians are not allowed to cross the roadway, you do " +
      "not have to stop.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Yielding Right-Of-Way To School Buses (page 58)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=58",
  },
  {
    key: "schoolbus-red-lights-trigger",
    quote:
      "Each time you encounter a school bus with its red lights " +
      "flashing and/or with its stop sign extended, Mississippi " +
      "law states that YOU MUST:",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Yielding Right-Of-Way To School Buses (page 58)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=58",
  },
  {
    key: "ped-crosswalk-always",
    quote:
      "A person walking across the street within a crosswalk, " +
      "whether or not the crosswalk is marked, ALWAYS HAS THE " +
      "RIGHT OF WAY.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Yielding Right-Of-Way To Pedestrians (page 59)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=59",
  },
  {
    key: "ped-white-cane",
    quote:
      "Be on the lookout for pedestrians carrying a white cane, " +
      "which may have a red tip. Take every precaution and extend " +
      "every courtesy to keep them safe at intersections and " +
      "crosswalks. Come to a complete stop if necessary.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Yielding Right-Of-Way To Pedestrians (page 59)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=59",
  },
  {
    key: "funeral-procession",
    quote:
      "Although not required by law, common courtesy is to yield " +
      "the right of way to funeral processions.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Yielding Right-Of-Way To Pedestrians (page 59)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=59",
  },
  {
    key: "ped-between-parked-cars",
    quote:
      "Watch for pedestrians exiting parked cars or walking " +
      "between parked cars.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Yielding Right-Of-Way To Pedestrians (page 59)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=59",
  },
  {
    key: "parking-prohibited-stem",
    quote:
      "You may not stop and leave your vehicle parked and " +
      "unattended in any of the following places: In front of a " +
      "public or private driveway",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Parking - Prohibited Parking (page 60)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=60",
  },
  {
    key: "parking-fire-station",
    quote:
      "Within twenty feet of the driveway entrance to any fire " +
      "station or within seventy-five feet if it is so posted",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Parking - Prohibited Parking (page 60)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=60",
  },
  {
    key: "parking-hydrant-crosswalk",
    quote:
      "Within ten feet of a fire hydrant On a sidewalk On a " +
      "crosswalk Within twenty feet of a crosswalk at an " +
      "intersection",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Parking - Prohibited Parking (page 60)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=60",
  },
  {
    key: "parking-control-device-rail",
    quote:
      "Within thirty feet of the approach to any traffic control " +
      "device Within fifteen feet of the nearest rail of any " +
      "railroad crossing",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Parking - Prohibited Parking (page 60)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=60",
  },
  {
    key: "parking-bridge-underpass",
    quote:
      "On any bridge or elevated structure In any highway " +
      "underpass",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Parking - Prohibited Parking (page 60)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=60",
  },
  {
    key: "parking-roadway-side",
    quote:
      "On the roadway side of any vehicle stopped or parked at " +
      "the edge of the road or the curb",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Parking - Prohibited Parking (page 60)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=60",
  },
  {
    key: "parking-blind-curve",
    quote:
      "Parking on a blind curve or in any other potentially " +
      "dangerous place is illegal. You may be arrested, and your " +
      "vehicle may be towed.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Parking (page 60)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=60",
  },
  {
    key: "parking-procedure",
    quote:
      "Put the gear in park (automatic transmission) or low " +
      "(standard transmission) Set the parking brake firmly Turn " +
      "off the ignition.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Parking (page 60)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=60",
  },
  {
    key: "parking-off-roadway",
    quote:
      "Outside of business or residential districts, you must " +
      "park off the roadway.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Parking On A Highway (page 60)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=60",
  },
  {
    key: "parking-highway-steps",
    quote:
      "Pull all the way off the roadway. If possible, leave at " +
      "least twenty feet for other vehicles to get by. Park so " +
      "you can be seen from at least two hundred feet in both " +
      "directions. Leave your parking lights or emergency " +
      "flashers on if it is night.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Parking On A Highway (page 60)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=60",
  },
  {
    key: "parallel-twelve-inches",
    quote:
      "For vehicles parked parallel, tires should be within " +
      "twelve inches of the curb.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Parallel Parking (page 61)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=61",
  },
  {
    key: "parallel-curb-side",
    quote:
      "Use extreme care when exiting your vehicle from the street " +
      "side. Unload your vehicle from the curb side.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Parallel Parking (page 61)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=61",
  },
  {
    key: "parking-exit-no-row",
    quote:
      "The driver leaving a parking space does not have the right " +
      "of way. Be careful not to cause a traffic accident.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Exiting A Parallel Parking Space (page 61)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=61",
  },
  {
    key: "parking-exit-yield",
    quote:
      "You must YIELD to any oncoming traffic. When leaving a " +
      "parallel parking position look back over your shoulder to " +
      "be sure you can safely drive the vehicle out of the " +
      "parking space and into traffic.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Exiting A Parallel Parking Space (page 61)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=61",
  },
  {
    key: "backing-look-back",
    quote:
      "Always look back over your shoulder while backing up. " +
      "Never rely on your rearview mirror alone.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Exiting A Parallel Parking Space (page 61)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=61",
  },
  {
    key: "parallel-step-one",
    quote:
      "STEP 1: Select a space large enough to accommodate your " +
      "car. Use your signal to show you intend to enter the " +
      "space.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Parallel Parking (page 61)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=61",
  },
  {
    key: "hill-parking",
    quote:
      "In a downhill position, turn your wheels sharply to the " +
      "right, whether or not there is a curb. In an uphill " +
      "position with no curb, turn your wheels sharply to the " +
      "right. In an uphill position with a curb, turn your wheels " +
      "sharply to the left.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Parking On A Hill (page 62)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=62",
  },
  {
    key: "night-overdrive-headlights",
    quote:
      "You can only see as far as your headlights reach. Be " +
      "careful not to \"over-drive\" your headlights: do not drive " +
      "so fast that you cannot stop within the distance you can " +
      "see.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Driving At Night (page 63)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=63",
  },
  {
    key: "night-blinding-lights",
    quote:
      "If you meet a vehicle at night with bright or blinding " +
      "headlights, the safest thing to do is to dim your lights " +
      "and keep your eyes on the right side of the road.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Driving At Night (page 63)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=63",
  },
  {
    key: "night-one-headlight",
    quote:
      "If you meet a vehicle at night with one headlight missing, " +
      "drive to the far right of your lane.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Driving At Night (page 63)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=63",
  },
  {
    key: "headlight-five-hundred-feet",
    quote:
      "You are required by law to use your low beams when you " +
      "approach within five hundred feet of an oncoming vehicle " +
      "or when you are following within five hundred feet of " +
      "another vehicle.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Using Your Headlights (page 63)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=63",
  },
  {
    key: "headlight-sunset-sunrise",
    quote:
      "You should use your lights between sunset and sunrise and " +
      "at any other time when you cannot see clearly ahead for a " +
      "distance of five hundred feet.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Using Your Headlights (page 63)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=63",
  },
  {
    key: "headlight-parking-lights",
    quote:
      "Do not drive with only your parking lights turned on. If " +
      "you need lights, use your headlights.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Using Your Headlights (page 63)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=63",
  },
  {
    key: "headlight-high-beam",
    quote:
      "Use the high beam only when driving in the open country " +
      "without other cars nearby. Even with the high beam, speed " +
      "should be lower than by day.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Using Your Headlights (page 63)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=63",
  },
  {
    key: "headlight-fog",
    quote:
      "Always use the lower beam when driving where there are " +
      "streetlights, when following another car, and when driving " +
      "in fog during the night or day. Using high beams while " +
      "driving in fog reduces visibility.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Using Your Headlights (page 63)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=63",
  },
  {
    key: "night-dark-glasses",
    quote:
      "Never attempt to compensate for this difficulty by wearing " +
      "darkened glasses.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Driving At Night (page 63)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=63",
  },
  {
    key: "seatbelt-all-passengers",
    quote:
      "Drivers and all passengers of motor vehicles shall wear a " +
      "properly fastened seat belt, regardless of whether the " +
      "passenger is in the front seat or back seat of the " +
      "vehicle.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Seat Belts, Car Seats, And Child Restraints (page 64)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=64",
  },
  {
    key: "carseat-under-four",
    quote:
      "Children under the age of four years old must be properly " +
      "secured in a child passenger restraint device (car seat) " +
      "that meets applicable safety standards.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Seat Belts, Car Seats, And Child Restraints (page 64)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=64",
  },
  {
    key: "booster-four-to-seven",
    quote:
      "Children at least four years old but under seven years old " +
      "who are less than 4 feet 9 inches in height or who weigh " +
      "less than sixty-five pounds must be properly secured in a " +
      "belt-positioning booster seat system that meets applicable " +
      "safety standards.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Seat Belts, Car Seats, And Child Restraints (page 64)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=64",
  },
  {
    key: "children-backseat-thirteen",
    quote:
      "Children under the age of 13 should always ride in the " +
      "backseat.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Seat Belts, Car Seats, And Child Restraints (page 64)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=64",
  },
  {
    key: "seatbelt-fine",
    quote:
      "Violators of the safety belt and child restraint law can " +
      "be fined.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Seat Belts, Car Seats, And Child Restraints (page 64)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=64",
  },
  {
    key: "booster-forty-to-sixty-five",
    quote:
      "Children weighing forty to sixty-five pounds should use a " +
      "booster seat designed for motor vehicle use.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Seat Belts, Car Seats, And Child Restraints (page 64)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=64",
  },
  {
    key: "rain-first-minutes",
    quote:
      "Many drivers pull off the road during a heavy downpour, " +
      "but not everyone realizes that the opening minutes of rain " +
      "or drizzle are actually the slickest and most dangerous.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Hazardous Conditions & Emergencies (page 65)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=65",
  },
  {
    key: "hydroplaning-definition",
    quote:
      "Hydroplaning occurs when the steering tires start to ride " +
      "up on any pooled water, similar to the action of water " +
      "skis.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Hazardous Conditions & Emergencies (page 65)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=65",
  },
  {
    key: "hydroplaning-avoid",
    quote:
      "The best way to avoid traction loss from hydroplaning is " +
      "to slow down in the rain or when the road is wet with " +
      "pooled water or water puddles.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Hazardous Conditions & Emergencies (page 65)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=65",
  },
  {
    key: "flooded-roadway",
    quote:
      "Do not drive through large bodies of standing water on a " +
      "road. If you see a flooded roadway, find another route to " +
      "get to your destination.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Hazardous Conditions & Emergencies (page 65)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=65",
  },
  {
    key: "skid-recovery",
    quote:
      "If your vehicle starts to skid, turn the wheel in the " +
      "direction of the skid, but only if you can do so without " +
      "running off the road or hitting something. Remember that " +
      "braking suddenly will increase the skid.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Hazardous Conditions & Emergencies (page 65)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=65",
  },
  {
    key: "skid-never-clutch",
    quote:
      "Never use the clutch when you are trying to stop a skid.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Hazardous Conditions & Emergencies (page 65)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=65",
  },
  {
    key: "blowout",
    quote:
      "If you have a flat tire or blowout, do not apply your " +
      "brakes suddenly. Take your foot off the accelerator. Then " +
      "apply the brakes slowly and cautiously.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Hazardous Conditions & Emergencies (page 65)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=65",
  },
  {
    key: "run-off-pavement",
    quote:
      "If you run off the pavement, use the brakes lightly before " +
      "returning to the roadway.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Hazardous Conditions & Emergencies (page 65)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=65",
  },
  {
    key: "disabled-walk-facing-traffic",
    quote:
      "If your car becomes disabled, pull over to the extreme " +
      "right shoulder. If you must walk to seek help, always walk " +
      "on the left side of the highway, facing oncoming traffic.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Hazardous Conditions & Emergencies (page 65)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=65",
  },
  {
    key: "skids-too-fast",
    quote:
      "Most automobile skids are caused by driving too fast for " +
      "the weather and road conditions.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Hazardous Conditions & Emergencies (page 65)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=65",
  },
  {
    key: "accident-stop-and-help",
    quote:
      "Stop at once and help anyone who has been injured. Dial " +
      "911 to report injuries if necessary.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "In Case Of An Accident (page 66)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=66",
  },
  {
    key: "accident-report-five-hundred",
    quote:
      "Report immediately to the proper law enforcement " +
      "authorities if the accident involves injury, death, or " +
      "apparent property damage exceeding $500.00.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "In Case Of An Accident (page 66)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=66",
  },
  {
    key: "accident-exchange-information",
    quote:
      "Give all other parties involved in the accident your name, " +
      "address, license plate number, and insurance information. " +
      "For your own protection, be sure to get the same " +
      "information from them.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "In Case Of An Accident (page 66)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=66",
  },
  {
    key: "accident-must-report",
    quote:
      "Whether or not you are at fault in an accident, you must " +
      "report it unless there are no injuries and the property " +
      "damage amounts to less than $500.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "In Case Of An Accident (page 66)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=66",
  },
  {
    key: "accident-no-insurance",
    quote:
      "If you do not have proof of insurance, you may be cited " +
      "for a violation even if you are not at fault for the " +
      "accident.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "In Case Of An Accident (page 66)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=66",
  },
  {
    key: "emergency-star-hp",
    quote:
      "To report an emergency traffic situation on an interstate " +
      "or highway in Mississippi, dial *HP (*47) on a cellular " +
      "phone to be connected toll free to a Mississippi Highway " +
      "Patrol dispatcher.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "In Case Of An Accident (page 66)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=66",
  },
  {
    key: "emergency-vehicle-row",
    quote:
      "Any ambulance, fire engine, or police car flashing red or " +
      "blue lights or signaling with a bell or siren always has " +
      "the right of way on any street in any traffic situation.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Yielding Right Of Way To Emergency Vehicles (page 67)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=67",
  },
  {
    key: "emergency-pull-right",
    quote:
      "If possible, pull your vehicle over to the extreme right " +
      "shoulder of the road until the emergency vehicle has " +
      "passed. If you are at an intersection, proceed through the " +
      "intersection, and pull over to the extreme right shoulder.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Yielding Right Of Way To Emergency Vehicles (page 67)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=67",
  },
  {
    key: "move-over-law",
    quote:
      "If an emergency vehicle with lights or siren activated is " +
      "parked along the side of a four-lane highway, merge into " +
      "the lane away from the emergency vehicle if it is safe to " +
      "do so. If merging into an adjacent lane is not safe, slow " +
      "down and prepare to stop if necessary.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Yielding Right Of Way To Emergency Vehicles (page 67)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=67",
  },
  {
    key: "stop-pull-over-steps",
    quote:
      "Activate your turn signal and pull off or to the side of " +
      "the roadway as soon as it is safe to do so. Turn off the " +
      "engine and any audio devices. Stay in your vehicle unless " +
      "directed by the officer to exit.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "What To Do And Expect When Pulled Over By Law Enforcement (page 67)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=67",
  },
  {
    key: "stop-hands-visible",
    quote:
      "Keep your hands on the steering wheel or in a visible " +
      "location so they are easily observable.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "What To Do And Expect When Pulled Over By Law Enforcement (page 67)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=67",
  },
  {
    key: "stop-interior-lights",
    quote:
      "Turn on your interior lights if you are pulled over at " +
      "night to assist with visibility.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "What To Do And Expect When Pulled Over By Law Enforcement (page 67)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=67",
  },
  {
    key: "stop-weapon-disclosure",
    quote:
      "Let the officer know if you have a weapon in the vehicle " +
      "upon first contact.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "What To Do And Expect When Pulled Over By Law Enforcement (page 68)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=68",
  },
  {
    key: "stop-wait-for-instructions",
    quote:
      "Wait for the officer's instructions before reaching for " +
      "your driver's license or vehicle documents.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "What To Do And Expect When Pulled Over By Law Enforcement (page 68)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=68",
  },
  {
    key: "stop-signature-not-guilt",
    quote:
      "Your acceptance and signature on a traffic ticket is not " +
      "an admission of guilt.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "What To Do And Expect When Pulled Over By Law Enforcement (page 68)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=68",
  },
  {
    key: "interstate-merge-speed",
    quote:
      "As you reach the end of the ramp, increase your speed in " +
      "the acceleration lane until you reach the speed of the " +
      "interstate highway traffic. It is dangerous to merge at a " +
      "speed that is slower or faster than the flow of traffic.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Entering & Exiting The Interstate (page 69)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=69",
  },
  {
    key: "interstate-merge-yield",
    quote:
      "To merge into a travel lane, yield to any approaching " +
      "vehicles and never turn suddenly into the main flow of " +
      "traffic.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Entering & Exiting The Interstate (page 69)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=69",
  },
  {
    key: "interstate-exit-quarter-mile",
    quote:
      "To exit the interstate, be sure you are in the correct " +
      "lane at least one-quarter mile from your exit.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Entering & Exiting The Interstate (page 69)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=69",
  },
  {
    key: "interstate-deceleration-lane",
    quote:
      "Do not slow down until you have safely moved into the " +
      "deceleration lane.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Entering & Exiting The Interstate (page 69)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=69",
  },
  {
    key: "interstate-missed-exit",
    quote:
      "If you miss your exit, do not stop and back up. Continue " +
      "to the next exit.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Entering & Exiting The Interstate (page 69)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=69",
  },
  {
    key: "interstate-never-back-up",
    quote:
      "Never stop, back up, or turn around on an exit ramp.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Entering & Exiting The Interstate (page 69)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=69",
  },
  {
    key: "interstate-lane-use",
    quote:
      "The right lane is intended for through travel while the " +
      "left lane is intended for passing. On the interstate, " +
      "passing on either the right or left is permissible.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Lane Use, Passing, And Changing Lanes (page 70)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=70",
  },
  {
    key: "interstate-slow-keep-right",
    quote:
      "Be sure to stay in the right lane if you are traveling " +
      "more slowly than the other traffic. When being passed, do " +
      "not speed up.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Lane Use, Passing, And Changing Lanes (page 70)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=70",
  },
  {
    key: "blind-spot-warning",
    quote:
      "When passing, do not drive alongside any vehicle longer " +
      "than it takes you to pass. It is dangerous to drive in " +
      "another vehicle's \"blind spot.\"",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Lane Use, Passing, And Changing Lanes (page 70)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=70",
  },
  {
    key: "interstate-merge-left",
    quote:
      "In order for vehicles to enter the right lane safely, " +
      "merge left when safe to do so.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Lane Use, Passing, And Changing Lanes (page 70)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=70",
  },
  {
    key: "interstate-seventy",
    quote:
      "The speed limit for interstate driving is seventy miles " +
      "per hour for both day and night.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Speed Limits & Following Distance (page 70)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=70",
  },
  {
    key: "interstate-car-lengths",
    quote:
      "If you are driving at seventy mph, stay at least seven car " +
      "lengths from the vehicle ahead. If you are driving fifty " +
      "mph, stay at least five car lengths from the vehicle " +
      "ahead.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Speed Limits & Following Distance (page 70)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=70",
  },
  {
    key: "interstate-stranded",
    quote:
      "If you are stranded on the interstate, never get out of " +
      "your vehicle into the main flow of traffic. Do not stand " +
      "beside your vehicle. Never walk along or across the " +
      "interstate.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Accidents & Breakdowns (page 70)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=70",
  },
  {
    key: "interstate-stay-inside",
    quote:
      "Stay inside your vehicle, lock the doors, and wait for " +
      "reliable help.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Accidents & Breakdowns (page 70)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=70",
  },
  {
    key: "interstate-breakdown-flashers",
    quote:
      "If your vehicle breaks down, let others know that you need " +
      "help by turning on your emergency flashers.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Accidents & Breakdowns (page 70)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=70",
  },
  {
    key: "change-lanes-steps",
    quote:
      "To change lanes, check your rearview and side mirrors and " +
      "check your blind spot for vehicles beside and behind you. " +
      "Then signal your intentions clearly.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Lane Use, Passing, And Changing Lanes (page 70)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=70",
  },
  {
    key: "truck-mirrors",
    quote:
      "Remember, if you cannot see the side mirrors on the front " +
      "of the oversized vehicle you are following, the driver " +
      "cannot see you.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Road Safety With Large Vehicles (page 72)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=72",
  },
  {
    key: "truck-dim-headlights",
    quote:
      "When following a large vehicle at night, always dim your " +
      "headlights.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Road Safety With Large Vehicles (page 72)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=72",
  },
  {
    key: "truck-pass-time",
    quote:
      "On a level highway, it takes 3 to 5 seconds longer to pass " +
      "a large vehicle than to pass a car.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Road Safety With Large Vehicles (page 72)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=72",
  },
  {
    key: "truck-return-front-wheels",
    quote:
      "Before returning to the lane of the vehicle you have " +
      "passed, be sure to move back only when you can see the " +
      "front wheels of the truck meeting the pavement in your " +
      "rearview mirror.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Road Safety With Large Vehicles (page 72)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=72",
  },
  {
    key: "truck-right-turn",
    quote:
      "Large vehicles require more space to make a turn and need " +
      "to swing to the left of the lane when preparing to make a " +
      "right turn. To avoid a crash, do NOT pass a truck on the " +
      "right if there is a possibility that it might be making a " +
      "right turn.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Road Safety With Large Vehicles (page 72)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=72",
  },
  {
    key: "truck-weight",
    quote:
      "An average tractor-trailer weighs approximately 80,000 " +
      "pounds. Oversized vehicles take longer to stop.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Road Safety With Large Vehicles (page 72)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=72",
  },
  {
    key: "truck-turbulence",
    quote:
      "Remember that wind turbulence pushes vehicles apart; it " +
      "does not pull them together.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Road Safety With Large Vehicles (page 72)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=72",
  },
  {
    key: "truck-upgrade-space",
    quote:
      "If you are stopped behind a large vehicle on an upgrade, " +
      "leave additional space in case the vehicle drifts " +
      "backwards slightly when it starts to move.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Road Safety With Large Vehicles (page 72)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=72",
  },
  {
    key: "bicycle-is-vehicle",
    quote:
      "According to Mississippi law, a bicycle is considered a " +
      "vehicle when riding on public roads. Any person riding a " +
      "bicycle has the same rights and responsibilities as a " +
      "driver of a motor vehicle.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Sharing The Road With Bicycles (page 73)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=73",
  },
  {
    key: "bicycle-three-feet",
    quote:
      "Leave a safe distance of at least three feet between the " +
      "vehicle and bicycle when passing the bicycle.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Sharing The Road With Bicycles - Rules For Drivers (page 73)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=73",
  },
  {
    key: "bicycle-do-not-share-lane",
    quote:
      "Do not try to share the lane with a bicyclist when " +
      "passing. Reduce speed, move into the next lane and pass in " +
      "the normal manner, just as you would pass a motor vehicle.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Sharing The Road With Bicycles (page 73)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=73",
  },
  {
    key: "bicycle-right-turn-after",
    quote:
      "After passing a bicyclist proceeding in the same " +
      "direction, make a right turn only if the turn can be made " +
      "with reasonable safety.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Sharing The Road With Bicycles - Rules For Drivers (page 73)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=73",
  },
  {
    key: "bicycle-do-not-cut-off",
    quote:
      "Do not \"cut off\" a cyclist by turning in front of them.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Sharing The Road With Bicycles - Rules For Drivers (page 73)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=73",
  },
  {
    key: "cyclist-far-right",
    quote:
      "Ride as far to the right in the lane as is safely " +
      "possible. Generally, this means riding two to four feet " +
      "from the right edge of the road.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Sharing The Road With Bicycles - Rules For Cyclists (page 73)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=73",
  },
  {
    key: "cyclist-speed",
    quote:
      "An experienced bicyclist can ride 20- 25 miles per hour " +
      "and may be closer than you think.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Sharing The Road With Bicycles (page 73)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=73",
  },
  {
    key: "cyclist-two-abreast",
    quote:
      "State law does permit bicyclists to ride side-by-side, but " +
      "bicyclists riding two abreast should not impede the normal " +
      "and reasonable movement of traffic.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Tips For Safer Cycling (page 74)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=74",
  },
  {
    key: "cyclist-with-traffic",
    quote:
      "TRAVEL WITH THE DIRECTION OF TRAFFIC. Never ride a bicycle " +
      "facing oncoming traffic.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Tips For Safer Cycling (page 74)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=74",
  },
  {
    key: "cyclist-helmet",
    quote:
      "WEAR A HELMET! This is one of the most effective ways to " +
      "reduce the risk of serious injury.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Tips For Safer Cycling (page 74)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=74",
  },
  {
    key: "tag-thirty-days",
    quote:
      "If you have moved to Mississippi, you must obtain a " +
      "Mississippi license plate within thirty days.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "License Plate (page 75)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=75",
  },
  {
    key: "tag-rear-mount",
    quote:
      "You are required by law to mount your Mississippi license " +
      "plate (tag) on the rear of your vehicle.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "License Plate (page 75)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=75",
  },
  {
    key: "tag-light-sixty-feet",
    quote:
      "You must also have a tag light which makes the letter, " +
      "numeral or any combinations of letter/numerals on your " +
      "license plate (tag) visible at sixty feet at night.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "License Plate (page 75)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=75",
  },
  {
    key: "tint-twenty-eight-percent",
    quote:
      "The windshield of the vehicle must have affixed to it a " +
      "label certifying that all the windows of the vehicle have " +
      "a light transmittance of 28% or more.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Window Tint Certificate & Decal (page 75)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=75",
  },
  {
    key: "tint-decal-location",
    quote:
      "The window tint decal must be affixed to the lower left " +
      "corner of the windshield.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Window Tint Certificate & Decal (page 75)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=75",
  },
  {
    key: "title-required",
    quote:
      "Every vehicle must have a Certificate of Title.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Certificate Of Title (page 75)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=75",
  },
  {
    key: "insurance-minimums",
    quote:
      "MINIMUM INSURANCE AMOUNTS $25,000 single person, single " +
      "vehicle accident $50,000 two or more people, single " +
      "vehicle accident $25,000 property damage of others in any " +
      "single accident",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Proof Of Insurance & Safety Responsibility Act (page 76)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=76",
  },
  {
    key: "insurance-required",
    quote:
      "According to Mississippi law every motor vehicle operated " +
      "in this state must have liability insurance.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Proof Of Insurance & Safety Responsibility Act (page 76)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=76",
  },
  {
    key: "insurance-electronic",
    quote:
      "You may provide proof of insurance in electronic format by " +
      "displaying the electronic image on a cellular phone or any " +
      "other type of electronic device.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Proof Of Insurance (page 76)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=76",
  },
  {
    key: "insurance-card-in-vehicle",
    quote:
      "The insured parties are responsible for making sure a " +
      "current, valid insurance card is kept inside each vehicle.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Proof Of Insurance (page 76)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=76",
  },
  {
    key: "insurance-three-years",
    quote:
      "remain in effect for a period of three years from the date " +
      "of the accident.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Proof Of Insurance (page 76)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=76",
  },
  {
    key: "dui-illegal",
    quote:
      "Driving under the influence of alcohol or drugs is illegal " +
      "in Mississippi.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Driving Under The Influence & Implied Consent (page 77)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=77",
  },
  {
    key: "alcohol-two-beers",
    quote:
      "Tests show that even two beers can markedly decrease a " +
      "person's reflexes and reaction time.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Alcohol & The Driver (page 77)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=77",
  },
  {
    key: "alcohol-half-second",
    quote:
      "If your reactions slow down only a half-second, and you " +
      "need to hit the brakes while traveling fifty- five miles " +
      "per hour, your vehicle will travel an extra forty-four " +
      "feet before stopping.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Alcohol & The Driver (page 77)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=77",
  },
  {
    key: "cannabis-driving",
    quote:
      "Smoking medical cannabis in a motor vehicle or operating " +
      "or being in actual physical control of any motor vehicle " +
      "while under the influence is a violation of Mississippi's " +
      "laws and can result in arrest.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Marijuana & The Driver (page 77)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=77",
  },
  {
    key: "drugs-slow-reflexes",
    quote:
      "Marijuana, like alcohol and other drugs including " +
      "prescription medication, slows down reflexes and impairs " +
      "judgment.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Marijuana & The Driver (page 77)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=77",
  },
  {
    key: "implied-consent",
    quote:
      "When you operate a motor vehicle in the state of " +
      "Mississippi, you are giving your implied consent to " +
      "testing for the presence of intoxicating substances in " +
      "your body.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Implied Consent (page 78)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=78",
  },
  {
    key: "bac-limits",
    quote:
      "Under the Influence intoxicating alcohol if: 21 years old " +
      "or older BAC registers .08% or more under the age of 21 " +
      "BAC registers .02% or more.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Driving Under The Influence (page 78)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=78",
  },
  {
    key: "refusal-ninety-days",
    quote:
      "Your license will be administratively suspended for ninety " +
      "days for refusing the breath or chemical test.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Implied Consent (page 78)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=78",
  },
  {
    key: "refusal-forty-five-day-permit",
    quote:
      "You must surrender your driver's license to the officer " +
      "immediately. The officer will give you an official receipt " +
      "for your license, which will serve as your temporary " +
      "permit to drive, valid for only forty-five days.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Implied Consent (page 78)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=78",
  },
  {
    key: "zero-tolerance",
    quote:
      "Mississippi has Zero Tolerance for underage drivers under " +
      "the influence of alcohol.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Implied Consent (page 78)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=78",
  },
  {
    key: "bac-thirty-day-permit",
    quote:
      "If your blood alcohol content reaches or exceeds your " +
      "minimum limit, the officer will demand your license.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Driving Under The Influence (page 78)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=78",
  },
  {
    key: "dui-first-offense",
    quote:
      "DUI-First Offense (Misdemeanor) $250 - $1,000 Up to 48 " +
      "hours 120 days",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "DUI Penalties (page 79)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=79",
  },
  {
    key: "dui-refusal-extra-ninety",
    quote:
      "For example, if you are convicted of a First Offense DUI " +
      "(or First Offense Zero Tolerance DUI) AND you refused the " +
      "breath or chemical test, a 90-day license suspension is " +
      "added to the original penalty.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "DUI Penalties (page 79)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=79",
  },
  {
    key: "zt-under-21-eight",
    quote:
      "If a driver is under twenty-one and has a Blood Alcohol " +
      "Content of .08% or higher, the offense is classified as a " +
      "regular DUI-not as a Zero Tolerance DUI.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Zero Tolerance DUI Penalties (page 79)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=79",
  },
  {
    key: "zt-first-offense",
    quote:
      "Zero Tolerance DUI-First Offense $250 120 days",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Zero Tolerance DUI Penalties (page 79)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=79",
  },
  {
    key: "zt-applies-to",
    quote:
      "These penalties apply to drivers under 21 years of age, " +
      "who have a Blood Alcohol Content of .02% or higher, but " +
      "LESS than .08%.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Zero Tolerance DUI Penalties (page 79)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=79",
  },
  {
    key: "dui-second-offense",
    quote:
      "DUI-Second Offense within 5 years (Misdemeanor) $600 - " +
      "$1,500 Not less than 5 days, nor more than 6 months 1 year",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "DUI Penalties (page 79)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=79",
  },
  {
    key: "dui-third-felony",
    quote:
      "DUI-Third Offense within five years (Felony) $2,000 - " +
      "$5,000 Not less than 1 year, nor more than 5 years, " +
      "custody of MDOC",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "DUI Penalties (page 79)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=79",
  },
  {
    key: "revocation-one-year",
    quote:
      "The Commissioner of Public Safety must take away your " +
      "license for a period of one year if you are convicted of " +
      "any of the following: manslaughter or negligent homicide " +
      "resulting from a driving accident",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Revocation Of License (page 80)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=80",
  },
  {
    key: "revocation-three-reckless",
    quote:
      "three reckless driving convictions within a twelve-month " +
      "period",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Revocation Of License (page 80)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=80",
  },
  {
    key: "suspension-child-support",
    quote:
      "You have failed to pay child support.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Suspension Of License (page 80)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=80",
  },
  {
    key: "suspension-grounds",
    quote:
      "You are a habitually reckless or negligent driver. You " +
      "have been frequently convicted of serious traffic " +
      "violations.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Suspension Of License (page 80)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=80",
  },
  {
    key: "reinstatement-fees",
    quote:
      "Conviction under Mississippi Implied Consent Law / DUI or " +
      "Uniform Controlled Substances Act $175 Failure to pay " +
      "Child Support $25 All other suspensions $100",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Reinstatement Of Driving Privileges (page 81)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=81",
  },
  {
    key: "reinstatement-cashiers-check",
    quote:
      "You must pay by CASHIER'S check. DO NOT SEND CASH, MONEY " +
      "ORDER OR A PERSONAL CHECK.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Reinstatement Of Driving Privileges (page 81)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=81",
  },
  {
    key: "littering-from-vehicle",
    quote:
      "When solid waste is thrown or discarded from a motor " +
      "vehicle, the operator or owner of the motor vehicle, or " +
      "both, shall be deemed in violation.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Littering (page 82)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=82",
  },
  {
    key: "truck-following-three-hundred",
    quote:
      "If you are driving a truck, truck-trailer, or other " +
      "similar vehicle on a roadway outside business or " +
      "residential districts, you must not follow within three " +
      "hundred feet of other trucks except when you are " +
      "attempting to pass.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Class D - Safe Driving, Following Distance (page 87)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=87",
  },
  {
    key: "flammable-loads-railroad",
    quote:
      "If your vehicle is carrying explosives or flammable " +
      "liquids, you must stop at all railroad crossings- even if " +
      "no signals warn that a train is approaching. Passenger " +
      "buses and school buses must also stop.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Class D - Flammable Loads (page 87)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=87",
  },
  {
    key: "truck-coasting",
    quote:
      "Never disengage the clutch while driving your truck on a " +
      "downgrade. This \"coasting\" is illegal and very risky.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Class D - Coasting (page 87)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=87",
  },
  {
    key: "cdl-required",
    quote:
      "You must have a CDL to operate: 1. A single vehicle with a " +
      "GVWR of more than 26,000 pounds. 2. A trailer with a GVWR " +
      "of more than 10,000 pounds if the gross combination weight " +
      "rating is more than 6,000 pounds. 3. A vehicle designed to " +
      "transport more than fifteen persons (including the " +
      "driver).",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Commercial Driver's License (CDL) Class A, B, C (page 87)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=87",
  },
  {
    key: "truck-width",
    quote:
      "The total outside width of any vehicle, including the load " +
      "being carried on that vehicle, cannot exceed eight and " +
      "one-half feet.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Class D - Size Regulations, Width (page 85)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=85",
  },
  {
    key: "truck-warning-devices",
    quote:
      "If you operate a bus or truck at night, you must carry at " +
      "least three flares, fuses, electric flares, or reflectors.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Class D - Safety & Warning Devices (page 84)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=84",
  },
  {
    key: "truck-backing-up",
    quote:
      "When you are preparing to back up a truck or large " +
      "vehicle, always get out and carefully check clearance " +
      "limits. Make sure that you have plenty of room to " +
      "maneuver. If possible, have someone guide you when you " +
      "back up. Never back into an intersection to turn around.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Class D - Backing Up (page 87)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=87",
  },
  {
    key: "organ-donor-fifteen",
    quote:
      "Mississippians age 15+ who are registering for a driver's " +
      "permit or state identification card may indicate their " +
      "wishes to be a donor on their license.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Appendix A: Organ Donation (page 88)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=88",
  },
  {
    key: "organ-donor-next-of-kin",
    quote:
      "Consent from legal next of kin is required at the time of " +
      "donation for anyone still under the age of 18.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Appendix A: Organ Donation (page 88)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=88",
  },
  {
    key: "natchez-fifty",
    quote:
      "The maximum speed for travel on the Parkway is fifty MPH, " +
      "except where lower speeds are posted.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Appendix B: The Natchez Trace (page 90)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=90",
  },
  {
    key: "natchez-commercial",
    quote:
      "Commercial vehicles are excluded from the Parkway, and " +
      "access is limited.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Appendix B: The Natchez Trace (page 90)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=90",
  },
  {
    key: "natchez-federal-court",
    quote:
      "Remember that if you violate any laws while on the roadway " +
      "or while using any of the Parkway's facilities, you will " +
      "be tried in a federal court.",
    source: "Mississippi Driver's License Manual (Mississippi Department of Public Safety, Revised December 2024)",
    section: "Appendix B: The Natchez Trace (page 90)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2025-02/1.15.2025%20Revised%20MDPS%20Driver's%20Manual.pdf#page=90",
  },
  {
    key: "exam-twenty-questions",
    quote:
      "On your driver's license examination, you will be given a " +
      "computerized test comprised of twenty (20) multiple-choice " +
      "questions.",
    source: "State of Mississippi Driver's Manual (Mississippi Department of Public Safety, 2023 edition)",
    section: "Appendix B: Sample Test Questions - Regular Driver's License (page 75)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2023-07/MDPS%20Driver's%20Manual_23_0.pdf#page=77",
  },
  {
    key: "exam-eighty-percent",
    quote:
      "3. Pass the computer examination by 80%. 4. Pass the " +
      "vision examination.",
    source: "State of Mississippi Driver's Manual (Mississippi Department of Public Safety, 2023 edition)",
    section: "Appendix A: Quick Reference - License/Permit Requirements (page 74)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2023-07/MDPS%20Driver's%20Manual_23_0.pdf#page=76",
  },
  {
    key: "exam-retake-next-day",
    quote:
      "If you fail the Computerized Exam, you may retake it the " +
      "following business day. If you do not pass after three (3) " +
      "attempts, you must wait thirty (30) days to retake the " +
      "Computerized Exam.",
    source: "State of Mississippi Driver's Manual (Mississippi Department of Public Safety, 2023 edition)",
    section: "The Examination - Computerized Exam (page 13)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2023-07/MDPS%20Driver's%20Manual_23_0.pdf#page=15",
  },
  {
    key: "exam-testing-stops-4pm",
    quote:
      "ALL Driver's License Testing STOPS at 4pm STATEWIDE.",
    source: "State of Mississippi Driver's Manual (Mississippi Department of Public Safety, 2023 edition)",
    section: "The Examination (page 13)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2023-07/MDPS%20Driver's%20Manual_23_0.pdf#page=15",
  },
  {
    key: "exam-sample-guide",
    quote:
      "The following questions are intended as a guide to help " +
      "you in preparing for the examination. These are examples " +
      "only and do not appear in any order of importance.",
    source: "State of Mississippi Driver's Manual (Mississippi Department of Public Safety, 2023 edition)",
    section: "Appendix B: Sample Test Questions - Regular Driver's License (page 75)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2023-07/MDPS%20Driver's%20Manual_23_0.pdf#page=77",
  },
  {
    key: "exam-not-entire-test",
    quote:
      "The questions below DO NOT reflect the entire test: Study " +
      "this complete manual to prepare for the exam.",
    source: "State of Mississippi Driver's Manual (Mississippi Department of Public Safety, 2023 edition)",
    section: "Appendix B: Sample Test Questions - Regular Driver's License (page 75)",
    url: "https://www.driverservicebureau.dps.ms.gov/sites/default/files/2023-07/MDPS%20Driver's%20Manual_23_0.pdf#page=77",
  },
  {
    key: "web-exams-in-person",
    quote:
      "All knowledge exams must be taken in person. No cell " +
      "phones, ear buds, smart watches, or other electronics will " +
      "be allowed in the testing area.",
    source: "Mississippi Department of Public Safety, Driver Service Bureau (dps.ms.gov)",
    section: "Regular Learner's Permit",
    url: "https://www.driverservicebureau.dps.ms.gov/Drivers/Learners_Permit",
  },
  {
    key: "web-cheating-six-months",
    quote:
      "If an applicant is caught with banned items or cheating, " +
      "the test will be cancelled immediately. The applicant will " +
      "not be allowed to test again for 6 months.",
    source: "Mississippi Department of Public Safety, Driver Service Bureau (dps.ms.gov)",
    section: "Regular Learner's Permit",
    url: "https://www.driverservicebureau.dps.ms.gov/Drivers/Learners_Permit",
  },
  {
    key: "web-permit-fifteen-school",
    quote:
      "To be eligible, you must be at least 15 years old and be " +
      "able to provide proof of being enrolled in school.",
    source: "Mississippi Department of Public Safety, Driver Service Bureau (dps.ms.gov)",
    section: "Regular Learner's Permit",
    url: "https://www.driverservicebureau.dps.ms.gov/Drivers/Learners_Permit",
  },
  {
    key: "web-permit-twelve-months",
    quote:
      "You must hold the permit for at least twelve (12) months " +
      "before you will be allowed to obtain your driver's " +
      "license.",
    source: "Mississippi Department of Public Safety, Driver Service Bureau (dps.ms.gov)",
    section: "Regular Learner's Permit",
    url: "https://www.driverservicebureau.dps.ms.gov/Drivers/Learners_Permit",
  },
  {
    key: "web-seventeen-same-day",
    quote:
      "Applicants 17 years old and older, are not required to " +
      "hold the permit for twelve (12) months and may obtain both " +
      "the learner's permit and driver's license on the same day.",
    source: "Mississippi Department of Public Safety, Driver Service Bureau (dps.ms.gov)",
    section: "Regular Learner's Permit",
    url: "https://www.driverservicebureau.dps.ms.gov/Drivers/Learners_Permit",
  },
  {
    key: "web-both-exams",
    quote:
      "All applicants must pass both the knowledge and eye exam " +
      "before obtaining the learner's permit. The learner's " +
      "permit is valid for only two (2) years.",
    source: "Mississippi Department of Public Safety, Driver Service Bureau (dps.ms.gov)",
    section: "Regular Learner's Permit",
    url: "https://www.driverservicebureau.dps.ms.gov/Drivers/Learners_Permit",
  },
  {
    key: "web-no-road-test",
    quote:
      "At this time no road test are being given, you are only " +
      "required to take the written exam.",
    source: "Mississippi Department of Public Safety, Driver Service Bureau (dps.ms.gov)",
    section: "Frequently Asked Questions - Driver License Issuance",
    url: "https://www.driverservicebureau.dps.ms.gov/frequently-asked-questions",
  },
  {
    key: "web-sixty-months",
    quote:
      "If your license has been expired or suspended for over 60 " +
      "months, you must take the written test over and apply for " +
      "a new license.",
    source: "Mississippi Department of Public Safety, Driver Service Bureau (dps.ms.gov)",
    section: "Frequently Asked Questions - Driver License Issuance",
    url: "https://www.driverservicebureau.dps.ms.gov/frequently-asked-questions",
  },
  {
    key: "web-seventeen-no-wait",
    quote:
      "If you are over 17 you will not have a waiting period. You " +
      "must pass the written permit test prior to receiving a DL " +
      "but this can be done on the same day.",
    source: "Mississippi Department of Public Safety, Driver Service Bureau (dps.ms.gov)",
    section: "Frequently Asked Questions - Driver License Issuance",
    url: "https://www.driverservicebureau.dps.ms.gov/frequently-asked-questions",
  },
  {
    key: "web-oos-permit-credit",
    quote:
      "Applicants with a valid out-of-state Learner's Permit will " +
      "be given credit for the months they held toward the " +
      "required 12-month period before receiving a driver's " +
      "license.",
    source: "Mississippi Department of Public Safety, Driver Service Bureau (dps.ms.gov)",
    section: "Regular Learner's Permit",
    url: "https://www.driverservicebureau.dps.ms.gov/Drivers/Learners_Permit",
  },
  {
    key: "web-manual-three-dollars",
    quote:
      "You may download a free copy or purchase a manual at your " +
      "local Driver License Station for $3.00.",
    source: "Mississippi Department of Public Safety, Driver Service Bureau (dps.ms.gov)",
    section: "Regular Learner's Permit",
    url: "https://www.driverservicebureau.dps.ms.gov/Drivers/Learners_Permit",
  },
  {
    key: "law-permit-fifteen-two-years",
    quote:
      "A regular learner's permit may be issued to any applicant " +
      "who is at least fifteen (15) years of age and shall be " +
      "valid for a period of two (2) years from the date of " +
      "issue.",
    source: "House Bill 550, 2021 Regular Session, as sent to the Governor (Mississippi Legislature)",
    section: "Section 5, amending Section 63-1-21, Mississippi Code of 1972",
    url: "https://billstatus.ls.state.ms.us/documents/2021/html/HB/0500-0599/HB0550SG.htm",
  },
  {
    key: "law-permit-accompanied",
    quote:
      "A regular learner's permit entitles the holder, if the " +
      "permit is in his immediate possession, to drive a motor " +
      "vehicle other than a motorcycle on the highways of the " +
      "State of Mississippi only when accompanied by a licensed " +
      "operator who is at least twenty-one (21) years of age",
    source: "House Bill 550, 2021 Regular Session, as sent to the Governor (Mississippi Legislature)",
    section: "Section 5, amending Section 63-1-21, Mississippi Code of 1972",
    url: "https://billstatus.ls.state.ms.us/documents/2021/html/HB/0500-0599/HB0550SG.htm",
  },
  {
    key: "law-under-eighteen-curfew",
    quote:
      "A regular license holder under the age of eighteen (18) " +
      "shall be allowed unsupervised driving from 6:00 a.m. to " +
      "10:00 p.m. Sunday through Thursday and 6:00 a.m. to 11:30 " +
      "p.m. Friday and Saturday",
    source: "House Bill 550, 2021 Regular Session, as sent to the Governor (Mississippi Legislature)",
    section: "Section 5, amending Section 63-1-21, Mississippi Code of 1972",
    url: "https://billstatus.ls.state.ms.us/documents/2021/html/HB/0500-0599/HB0550SG.htm",
  },
  {
    key: "law-under-eighteen-supervision",
    quote:
      "must be supervised by a parent, guardian or other person " +
      "aged twenty-one (21) years or older who holds a valid " +
      "driver's license under this article and who is actually " +
      "occupying the seat beside the driver.",
    source: "House Bill 550, 2021 Regular Session, as sent to the Governor (Mississippi Legislature)",
    section: "Section 5, amending Section 63-1-21, Mississippi Code of 1972",
    url: "https://billstatus.ls.state.ms.us/documents/2021/html/HB/0500-0599/HB0550SG.htm",
  },
  {
    key: "law-must-obtain-permit-first",
    quote:
      "every applicant other than a person holding a valid " +
      "out-of-state license shall first obtain a regular " +
      "learner's permit, successfully complete the examination " +
      "provided",
    source: "House Bill 550, 2021 Regular Session, as sent to the Governor (Mississippi Legislature)",
    section: "Section 5, amending Section 63-1-21, Mississippi Code of 1972",
    url: "https://billstatus.ls.state.ms.us/documents/2021/html/HB/0500-0599/HB0550SG.htm",
  },
  {
    key: "law-minor-signature",
    quote:
      "The application of any person under the age of seventeen " +
      "(17) years for a temporary driving permit * * * , " +
      "intermediate license or license issued pursuant to this " +
      "article shall be signed and verified before a person " +
      "authorized to administer oaths by both the father and " +
      "mother of the applicant",
    source: "House Bill 550, 2021 Regular Session, as sent to the Governor (Mississippi Legislature)",
    section: "Section 6, amending Section 63-1-23, Mississippi Code of 1972",
    url: "https://billstatus.ls.state.ms.us/documents/2021/html/HB/0500-0599/HB0550SG.htm",
  },
];
