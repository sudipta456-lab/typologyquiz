import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts behind the Maine bank. Three official sources sit
// behind them, and every quote below was lifted MECHANICALLY as a contiguous
// substring of the fetched source (tmp/me_build_excerpts.py) between a start
// phrase and an end phrase, rather than retyped. Nothing here is a paraphrase
// that drifted, and nothing was repaired by hand.
//
//  - The Maine Driver's License Manual, published by the Bureau of Motor
//    Vehicles in the Department of the Secretary of State and served from
//    maine.gov/sos as "Maine Driver License Manual_2.pdf". Its only edition
//    label is the "Rev 4/24" printed in the header of every page. Note the
//    name: the BMV's own page is headed "Driver License Manual and Maine
//    Motorist Handbook and Study Guide", and the file it used to serve was
//    called motoristhandbook.pdf, but the cover of the current book says
//    Maine Driver's License Manual and that is what is cited here. The older
//    file, still reachable, is the Rev 11/23 printing.
//  - Title 29-A of the Maine Revised Statutes, on the Legislature's own
//    server. The manual summarises; the statute supplies the numbers the exam
//    still asks about and the manual leaves out - the 15 mph limit at an
//    obstructed-view intersection (2074), the 100-foot signal distance and
//    the hand signals (2071), the 15-to-50-foot railroad stop (2076), the
//    $275 Move Over fine (2054) and the separate $275 for a disabled vehicle
//    (2070), the 150-foot rule behind a non-fire emergency vehicle (2066),
//    the hands-free law and its $50/$250 fines (2121), and the school-bus
//    penalty (2308).
//  - Three groups of BMV pages on maine.gov/sos/bmv, for the things the book
//    does not state at all: the written test's own format (30 questions, 24
//    to pass), the graduated licensing stages and their restrictions, and the
//    fees.
//
// PAGE NUMBERS. The manual numbers its pages by section - 1-1, 6-4, 11-9 -
// and the section reference below gives the printed page a learner would look
// for. The "#page=" anchor in each url is the PDF page that lands on it:
// printed 1-1 is PDF page 6 and the book runs straight through from there.
//
// Only the normalisations the sibling banks use were applied, and only to the
// extracted text: curly quotes and dashes fold to ASCII, the section symbol is
// spelled out, bullet glyphs become spaces so a stem and its list run together
// in the printed order, and runs of whitespace collapse to single spaces. No
// word is changed, dropped or reordered, and the sources' own slips are kept -
// among them the manual's "Slowdown in work zones", its "Flashing RED Traffic
// Light -Stop", its "large vehicles have huge blind spots-up to 200 feet", the
// stray commas in "reduce your, critical, nighttime vision", and the BMV
// exam page's "Maine' s operating under the influence laws".
//
// The extraction was checked before any of this was written. The manual's PDF
// carries a clean character map: zero tokens in its 126 pages have the shape
// of a broken ligature (a digit wedged inside a word), so nothing here had to
// be routed around a corrupt font the way Nebraska's and West Virginia's did.
// Two things ARE filtered by the builder rather than trusted: any candidate
// quote containing a mangled-looking token is refused outright, and so is any
// quote that would run across one of the Revisor's session-law citations
// ("[PL 2015, c. 32, Section4 (AMD).]"), which sit between the paragraphs of
// every statute section and are page furniture, not law.

export const maineExcerpts: HandbookExcerpt[] = [
  {
    key: "who-needs-license",
    quote:
      "Any resident of the State who wishes to operate a motor vehicle in Maine. " +
        "New residents who hold a valid driver's license from another state must " +
        "surrender that license and apply for a Maine driver's license within 30 days " +
        "of establishing residency in this state.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 1 - Your Driver's License, Who Needs a Maine Driver's License? (page 1-2)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=7",
  },
  {
    key: "permit-accompanying-driver",
    quote:
      "Any resident who has a valid learner's permit may drive if they are " +
        "accompanied by a licensed driver who is at least 20 years of age and has " +
        "held a valid license for a minimum of 2 years.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 1 - Your Driver's License, Who Does Not Need a Maine Driver's License (page 1-2)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=7",
  },
  {
    key: "permit-seat-adjacent",
    quote:
      "The licensed driver must occupy the seat adjacent to the driver with the " +
        "learner's permit.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 1 - Your Driver's License, Who Does Not Need a Maine Driver's License (page 1-2)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=7",
  },
  {
    key: "permit-age-15",
    quote:
      "You must be at least 15 years of age. If under 18 years of age you must " +
        "complete an approved driver education course.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 1 - Your Driver's License, How Do You Obtain A Permit in Maine? (page 1-2)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=7",
  },
  {
    key: "permit-valid-2-years",
    quote:
      "To obtain a learner's permit you must successfully complete a driver " +
        "knowledge written examination. A learner's permit is generally valid for 2 " +
        "years.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 1 - Your Driver's License, How Do You Obtain A Permit in Maine? (page 1-2)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=7",
  },
  {
    key: "permit-phone-ban",
    quote:
      "Use of a mobile telephone or handheld electronic devices are prohibited by " +
        "law when driving in Maine.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 1 - Your Driver's License, How Do You Obtain A Permit in Maine? (page 1-2)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=7",
  },
  {
    key: "exam-two-ids",
    quote:
      "Written exams and visual screenings are offered on a scheduled basis at all " +
        "Motor Vehicle branch offices. Two forms of identification are required.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 1 - Your Driver's License, How Do You Obtain A Permit in Maine? (page 1-2)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=7",
  },
  {
    key: "birth-certificate-age-22",
    quote:
      "Birth certificates or Passports are required from applicants up to and " +
        "including age 22 to determine date of birth. Photocopies of birth " +
        "certificates must have an embossed seal or stamp of an issuing agency.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 1 - Your Driver's License, How Do You Obtain A Permit in Maine? (page 1-2)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=7",
  },
  {
    key: "three-license-classes",
    quote:
      "Maine has 3 classes of driver's licenses.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 1 - Your Driver's License, License Classification (page 1-3)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=8",
  },
  {
    key: "class-c-standard",
    quote:
      "Class C is the standard license classification issued to most motor vehicle " +
        "operators. A Class C license covers any single vehicle or combination of " +
        "vehicles that does not meet the definition of Class A or B.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 1 - Your Driver's License, License Classification (page 1-3)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=8",
  },
  {
    key: "school-bus-license-21",
    quote:
      "School bus license applicants must be 21 years of age or older and have at " +
        "least one year of licensed driving experience.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 1 - Your Driver's License, License Classification (page 1-3)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=8",
  },
  {
    key: "license-age-18-no-driver-ed",
    quote:
      "Be at least 18 years of age if you have not completed an approved driver " +
        "education course.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 1 - Your Driver's License, Required Noncommercial License Tests (page 1-3)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=8",
  },
  {
    key: "permit-six-months-70-hours",
    quote:
      "Before a person under 21 years of age can apply for a road test, that person " +
        "must have held a learner's permit for 6 months from the date of issue of the " +
        "learner's permit and must complete a minimum of 70 hours of driving, " +
        "including 10 hours of night driving,",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 1 - Your Driver's License, Required Noncommercial License Tests (page 1-3)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=8",
  },
  {
    key: "under-18-restrictions",
    quote:
      "A person under 18 years of age who has been issued a Maine driver's license " +
        "may not: operate a motor vehicle while using a mobile telephone or handheld " +
        "electronic devices; operate a motor vehicle between the hours of 12 a.m. and " +
        "5 a.m.;",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 1 - Your Driver's License, Required Noncommercial License Tests (page 1-4)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=9",
  },
  {
    key: "intermediate-270-days",
    quote:
      "These restrictions are in effect for a period of 270 days from when road " +
        "test was passed. Any violation of the conditions of these restrictions will " +
        "result in a license suspension and a 270-day extension of the restrictions " +
        "which may extend beyond the 18th birthday.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 1 - Your Driver's License, Required Noncommercial License Tests (page 1-4)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=9",
  },
  {
    key: "provisional-two-years",
    quote:
      "The first license issued to a new applicant under 21 years of age is " +
        "provisional for a period of two years but only one year for persons at least " +
        "21 years of age or older when receiving that first license.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 1 - Your Driver's License, Required Noncommercial License Tests (page 1-4)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=9",
  },
  {
    key: "provisional-moving-violation",
    quote:
      "If a person is convicted of a moving violation that occurred while operating " +
        "with a provisional license, the license will be suspended for 30 days.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 1 - Your Driver's License, Required Noncommercial License Tests (page 1-4)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=9",
  },
  {
    key: "written-test-content",
    quote:
      "The written test measures your understanding and knowledge of traffic laws, " +
        "regulations, driving skills and vehicle handling, as well as your ability to " +
        "identify and understand highway signs. Special emphasis is placed on " +
        "understanding Maine's drinking and driving laws.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 1 - Your Driver's License, What Will the Tests Include? (page 1-4)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=9",
  },
  {
    key: "vision-screening-content",
    quote:
      "The vision screening will measure your visual acuity (how clearly you see) " +
        "and your peripheral vision (how far you can see to either side while looking " +
        "straight ahead).",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 1 - Your Driver's License, What Will the Tests Include? (page 1-4)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=9",
  },
  {
    key: "road-test-last",
    quote:
      "The road test will not be given until all other tests have been successfully " +
        "completed.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 1 - Your Driver's License, What Will the Tests Include? (page 1-5)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=10",
  },
  {
    key: "out-of-state-waiver",
    quote:
      "Applicants with a valid out-of-state license may have the written and road " +
        "tests waived.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 1 - Your Driver's License, Who Must Take the Examinations? (page 1-5)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=10",
  },
  {
    key: "license-six-year-term",
    quote:
      "When you have passed the required tests, you may purchase a picture license " +
        "which is valid until your sixth birthday following the date of issue of the " +
        "license or your fourth birthday following the date of issue of the license " +
        "if you are age 65 or older.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 1 - Your Driver's License, Information about Your Driver's License (page 1-6)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=11",
  },
  {
    key: "carry-license",
    quote:
      "You should carry your license with you at all times when driving. You must " +
        "show your license to any police officer who asks to see it. It is illegal to " +
        "lend your license to anyone else.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 1 - Your Driver's License, Information about Your Driver's License (page 1-6)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=11",
  },
  {
    key: "name-address-30-days",
    quote:
      "If your name or address changes from that given on your license, Maine law " +
        "requires that you notify the Bureau of Motor Vehicles within 30 days of the " +
        "change.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 1 - Your Driver's License, Information about Your Driver's License (page 1-6)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=11",
  },
  {
    key: "expired-license-unlawful",
    quote:
      "It is unlawful to drive a motor vehicle with an expired license.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 1 - Your Driver's License, Information about Your Driver's License (page 1-6)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=11",
  },
  {
    key: "suspension-30-day-offenses",
    quote:
      "Persons convicted of the following offenses may have their licenses " +
        "suspended for a period of 30 days: Failure to stop for a police officer " +
        "Leaving the scene of an accident (bodily injury) Operating alone on a permit",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 1 - Your Driver's License, Suspension Periods for Designated Convictions (page 1-8)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=13",
  },
  {
    key: "suspension-90-day-eluding",
    quote:
      "The license or privilege to operate of any person convicted of eluding a " +
        "police officer, passing a roadblock or street racing may be suspended for a " +
        "period of up to 90 days.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 1 - Your Driver's License, Suspension Periods for Designated Convictions (page 1-8)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=13",
  },
  {
    key: "operating-after-suspension-60",
    quote:
      "Any person who is convicted of operating after suspension may have their " +
        "license suspended for a period of 60 days.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 1 - Your Driver's License, Suspension Periods for Designated Convictions (page 1-8)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=13",
  },
  {
    key: "demerit-points-6-and-12",
    quote:
      "Once certain point levels are reached (currently 6 points), a warning is " +
        "issued by the Secretary of State, and if the point total reaches 12 points " +
        "or more the driver's license will be suspended. Points will be erased from a " +
        "driver's record when they become one year old.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 1 - Your Driver's License, Suspension for Demerit Point Accumulation (page 1-9)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=14",
  },
  {
    key: "violation-free-credit",
    quote:
      "The violation free credit system awards one point for each calendar year " +
        "free of convictions or suspensions. One is permitted to accumulate up to " +
        "four violation free credit points.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 1 - Your Driver's License, Violation Free Credit (page 1-9)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=14",
  },
  {
    key: "driving-dynamics-three-points",
    quote:
      "Successful completion of a Maine Driving Dynamics Course or other approved " +
        "driver improvement course will deduct three points from a driver's point " +
        "total. Anyone may, even with no record, receive credit for successful " +
        "completion of this course, but points will be deducted only once in any " +
        "twelve-month period.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 1 - Your Driver's License, Continuing Driver Education (page 1-9)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=14",
  },
  {
    key: "revocation-definition",
    quote:
      "Revocation: While rarely used, it means that your license and driving " +
        "privilege is formally terminated and you would have to apply for a new " +
        "license at the end of the revocation period.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 1 - Your Driver's License, Revocation or Suspension (page 1-7)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=12",
  },
  {
    key: "suspension-definition",
    quote:
      "Suspension: Suspensions temporarily withdraw driving privileges. A person " +
        "whose license has been suspended will not be allowed to drive until a " +
        "written notice of reinstatement is received.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 1 - Your Driver's License, Revocation or Suspension (page 1-7)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=12",
  },
  {
    key: "120-day-suspension",
    quote:
      "Any person whose license has been suspended three times within a three-year " +
        "period by the Secretary of State or by a court may be subject to a further " +
        "suspension for a period up to 120 days.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 1 - Your Driver's License, 120 Day Suspension (page 1-10)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=15",
  },
  {
    key: "driving-to-endanger-30",
    quote:
      "Driving to Endanger: Suspension for at least 30 days Illegal transportation, " +
        "possession, or consumption of liquor by a minor in a motor vehicle: " +
        "Suspension for at least 30 days.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 1 - Your Driver's License, Mandatory Suspensions (page 1-10)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=15",
  },
  {
    key: "false-id-liquor",
    quote:
      "This law requires a court to suspend the driver's license of any person, not " +
        "yet 21 years of age, who is adjudicated of the offense of using false or " +
        "fraudulent credentials to obtain liquor or gain entrance into a drinking " +
        "establishment.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 1 - Your Driver's License, Using False Identification to Obtain Liquor (page 1-8)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=13",
  },
  {
    key: "inspection-annual",
    quote:
      "All motor vehicles bearing a Maine registration must have a current Maine " +
        "inspection before being operated on any public way. These inspections must " +
        "be done at an official inspection station once a year.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 2 - State Laws and Rules, Inspecting Your Motor Vehicle (page 2-4)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=20",
  },
  {
    key: "inspection-brakes-30-feet",
    quote:
      "Brakes - Your vehicle must have a foot brake and a parking brake. The foot " +
        "brake must be able to stop the vehicle within 30 feet when the vehicle is " +
        "going 20 miles per hour. The parking brake must be able to hold the vehicle " +
        "on a hill.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 2 - State Laws and Rules, Inspecting Your Motor Vehicle (page 2-4)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=20",
  },
  {
    key: "inspection-horn-200-feet",
    quote:
      "Horn - Must be loud enough to hear from 200 feet away.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 2 - State Laws and Rules, Inspecting Your Motor Vehicle (page 2-4)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=20",
  },
  {
    key: "inspection-tire-tread",
    quote:
      "Tires - Must have 2/32 of an inch tread and be free of cuts, tears, or other " +
        "dangerous conditions.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 2 - State Laws and Rules, Inspecting Your Motor Vehicle (page 2-4)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=20",
  },
  {
    key: "insurance-required",
    quote:
      "Maine law requires every owner and operator of a motor vehicle to maintain " +
        "motor vehicle liability insurance and to present evidence upon request of a " +
        "law enforcement officer.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 2 - State Laws and Rules, Insuring Your Motor Vehicle (page 2-3)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=19",
  },
  {
    key: "registration-30-days",
    quote:
      "Maine law requires that a Maine motor vehicle registration must be applied " +
        "for within 30 days once residence in the state of Maine is declared or " +
        "established.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 2 - State Laws and Rules, Registering Your Vehicle (page 2-3)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=19",
  },
  {
    key: "sound-system-25-feet",
    quote:
      "A person may not operate a sound system in a vehicle on a public way at a " +
        "volume that is audible at a distance greater than 25 feet and that exceeds " +
        "85 decibels or that is greater than is reasonable with due regard to the " +
        "location of the vehicle and the effect on persons in proximity to the " +
        "vehicle.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 2 - State Laws and Rules, Excessive Sound System Noise (page 2-6)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=22",
  },
  {
    key: "title-exempt-vehicles",
    quote:
      "Vehicles more than 25 years old, motorcycles with an engine size less than " +
        "300 cc and trailers with an unloaded weight of 3,000 pounds or less.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 2 - State Laws and Rules, Titling Your Motor Vehicle (page 2-1)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=17",
  },
  {
    key: "exam-vehicle-safety-check",
    quote:
      "A motor vehicle safety check is also part of the driver examination. " +
        "Examinations will not be given if vehicles do not pass the regular " +
        "examination criteria, or if any doors are inoperative, seats are not " +
        "securely fastened to the floor of the vehicle,",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 2 - State Laws and Rules, Inspecting Your Motor Vehicle (page 2-4)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=20",
  },
  {
    key: "fatigue-definition",
    quote:
      "You are fatigued when you are physically or mentally tired. It can be caused " +
        "by physical or mental strain, illness, or lack of sleep.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 3 - Ready to Drive, Fatigue (page 3-1)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=23",
  },
  {
    key: "drowsiness-danger-signs",
    quote:
      "You must make a conscious effort to keep your eyes open. You want to prop " +
        "your head up. You can't stop yawning. You don't remember driving the last " +
        "few miles. You keep drifting from your lane. You have wandering, " +
        "disconnected thoughts.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 3 - Ready to Drive, The Danger Signs of Drowsiness (page 3-3)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=25",
  },
  {
    key: "visual-distractions",
    quote:
      "Visual distractions that cause the driver to look away from the road and " +
        "view something unrelated to driving, such as billboards, accident scenes, " +
        "street signs and other external stimuli.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 3 - Ready to Drive, Driver Distractions (page 3-4)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=26",
  },
  {
    key: "manual-distractions",
    quote:
      "Manual distractions in which the driver removes one or both hands from the " +
        "steering wheel or other driving control to perform a non-driving task, such " +
        "as eating, drinking, adjusting mirrors, tuning the radio, or programming a " +
        "GPS.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 3 - Ready to Drive, Driver Distractions (page 3-4)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=26",
  },
  {
    key: "cognitive-distractions",
    quote:
      "Cognitive distractions are mental thoughts and feelings (anger, anxiety, " +
        "worry, etc.) that distract the driver and divert attention from the road.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 3 - Ready to Drive, Driver Distractions (page 3-4)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=26",
  },
  {
    key: "texting-23-times",
    quote:
      "The study revealed that truck drivers who texted while driving had 23 times " +
        "the risk of being involved in a crash or a near-crash incident.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 3 - Ready to Drive, Driver Distractions (page 3-4)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=26",
  },
  {
    key: "under-18-phone-prohibited",
    quote:
      "A person who has not attained the age of 18 years is specifically prohibited " +
        "from operating a motor vehicle while using a mobile telephone or handheld " +
        "electronic device. A violation of the statute is considered a traffic " +
        "infraction.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 3 - Ready to Drive, Using a Cellular Telephone in Your Vehicle (page 3-5)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=27",
  },
  {
    key: "aggressive-driving",
    quote:
      "Aggressive driving includes speeding, following too close, unsafe lane " +
        "changes, not signaling when you turn, and not obeying traffic controls (stop " +
        "signs, yield signs, traffic signals, rail crossing signals, etc.)",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 3 - Ready to Drive, Aggressive Driving (page 3-5)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=27",
  },
  {
    key: "alcohol-40-percent",
    quote:
      "Alcohol and other drugs are contributing factors in about 40% of all fatal " +
        "crashes.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 3 - Ready to Drive, Keeping Fit to Drive (page 3-5)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=27",
  },
  {
    key: "under-21-zero-tolerance",
    quote:
      "It is illegal for those of you who have not reached the age of 21 to " +
        "consume, purchase or transport any alcoholic beverage. Therefore, you may " +
        "not drive after consuming any amount of alcohol.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 3 - Ready to Drive, If you are under 21 (page 3-6)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=28",
  },
  {
    key: "under-21-oui-one-year",
    quote:
      "If you are convicted of operating a motor vehicle while under the influence, " +
        "you will: lose your driver's license for at least one year receive a stiff " +
        "fine",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 3 - Ready to Drive, If you are under 21 (page 3-6)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=28",
  },
  {
    key: "under-21-passenger-180",
    quote:
      "if you have passengers under the age of 21 with you, your license will be " +
        "suspended for an additional 180 days",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 3 - Ready to Drive, If you are under 21 (page 3-6)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=28",
  },
  {
    key: "alcohol-vision-02",
    quote:
      "Vision is impacted at .02 BAC for all drivers.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 3 - Ready to Drive, Effect of Alcohol and other Impairing Drugs (page 3-6)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=28",
  },
  {
    key: "night-vision-reduced-50",
    quote:
      "The ability to see well becomes even more important at night since normal " +
        "vision is reduced by 50% because there is not enough light for your eyes to " +
        "function properly.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 3 - Ready to Drive, How Drinking Impairs Driving (page 3-7)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=29",
  },
  {
    key: "glare-recovery-seven-seconds",
    quote:
      "It normally takes about seven seconds for your eyes to recover from " +
        "headlight glare so at 55 miles per hour that is almost the length of two " +
        "football fields",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 3 - Ready to Drive, How Drinking Impairs Driving (page 3-7)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=29",
  },
  {
    key: "bac-crash-risk",
    quote:
      "Your chances of an accident increases as your BrAC rises: Alcohol Level (See " +
        "Pages 3-9 & 3-10) 0.05grams ................ 1 times 0.10grams " +
        "................ 6 times 0.15grams ................ 25 times",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 3 - Ready to Drive, GOOD DRIVERS DON'T DRINK (page 3-8)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=30",
  },
  {
    key: "beer-versus-liquor",
    quote:
      "There is approximately the same amount of alcohol in a 12 oz. can of beer as " +
        "there is in a 1 oz. shot of 100 proof hard liquor or a 4 oz. glass of table " +
        "wine (or a 10 oz. wine cooler).",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 3 - Ready to Drive, Myths Concerning Alcohol (page 3-8)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=30",
  },
  {
    key: "sobering-up",
    quote:
      "Because everyone's liver oxidizes alcohol at a constant rate, nothing but " +
        "time will sober you up. Drinking black coffee, taking a cold shower, or " +
        "exercising will only result in a wide awake, wet, or sweating drunk",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 3 - Ready to Drive, Myths Concerning Alcohol (page 3-8)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=30",
  },
  {
    key: "oui-008-criminal",
    quote:
      "If you are the operator of a motor vehicle and are driving with an alcohol " +
        "level of 0.08 grams per 100 milliliters of blood or 210 liters of breath, " +
        "you are guilty of a criminal offense of operating under the influence",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 3 - Ready to Drive, Immediate Suspension by Secretary of State (page 3-9)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=31",
  },
  {
    key: "implied-consent",
    quote:
      "when you operate a motor vehicle in Maine you automatically consent to a " +
        "test at any time the authorities wish to administer it. You will not be " +
        "forced to take such a test, but your driver's license will be immediately " +
        "suspended if you refuse.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 3 - Ready to Drive, \"Implied Consent\" What is it All About? (page 3-9)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=31",
  },
  {
    key: "refusal-six-years",
    quote:
      "The suspension will be for a period of up to six years by the Secretary of " +
        "State. It is an administrative suspension - that means no court action is " +
        "necessary.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 3 - Ready to Drive, \"Implied Consent\" What is it All About? (page 3-9)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=31",
  },
  {
    key: "refusal-suspension-stands",
    quote:
      "The administrative suspension issued by the Secretary of State remains in " +
        "effect even if you are later found innocent of OUI.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 3 - Ready to Drive, Implied Consent (page 3-10)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=32",
  },
  {
    key: "oui-first-conviction-penalties",
    quote:
      "you will receive a mandatory fine of at least $500.00, $600.00 with refusal " +
        "you lose your license for at least 150 days",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 3 - Ready to Drive, If you are Convicted of Operating under the Influence (page 3-10)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=32",
  },
  {
    key: "oui-aggravating-circumstances",
    quote:
      "If you are convicted of OUI and your alcohol level is 0.15 grams per 100 " +
        "milliliters of blood or 210 liters of breath or more; or you are traveling " +
        "30 mph or more over the speed limit; or you attempt to elude an officer of " +
        "the law; or you refuse to take an alcohol level test;",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 3 - Ready to Drive, If you are Convicted of Operating under the Influence (page 3-10)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=32",
  },
  {
    key: "oui-48-hours-jail",
    quote:
      "you will spend at least 48 hours in jail (96 hours if you refuse a test) " +
        "lose your license for at least 150 days",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 3 - Ready to Drive, If you are Convicted of Operating under the Influence (page 3-10)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=32",
  },
  {
    key: "oui-275-day-addition",
    quote:
      "A suspension period of 275 days must be added to the OUI or refusal " +
        "suspension if a passenger under the age of 21 was in the vehicle.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 3 - Ready to Drive, Additional Suspension (page 3-11)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=33",
  },
  {
    key: "conditional-license",
    quote:
      "When a person convicted of OUI applies for reinstatement of their license, " +
        "they are issued a license under the condition that they do not operate a " +
        "vehicle with any amount of alcohol in their system.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 3 - Ready to Drive, Conditional Licenses (page 3-10)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=32",
  },
  {
    key: "conditional-one-and-ten-years",
    quote:
      "After the first OUI conviction, the reinstated license is conditional for " +
        "one year. After a second or subsequent conviction, it is conditional for ten " +
        "years.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 3 - Ready to Drive, Additional Suspension (page 3-11)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=33",
  },
  {
    key: "no-work-license",
    quote:
      "There are no provisions whatsoever for a work or limited license during the " +
        "minimum period of suspension for an OUI conviction. Offenders are initially " +
        "absolutely prohibited from driving",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 3 - Ready to Drive, If you are Convicted of Operating under the Influence (page 3-10)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=32",
  },
  {
    key: "otc-drugs",
    quote:
      "Over-the-counter drugs for headaches, colds, and allergies or for calming " +
        "nerves can make you drowsy. Pep pills, \"uppers\" and diet pills can make you " +
        "nervous, dizzy, and unable to focus.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 3 - Ready to Drive, Over-the-Counter Drugs (page 3-11)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=33",
  },
  {
    key: "prescription-no-defense",
    quote:
      "The use of an over-the-counter medication or a prescription drug does not " +
        "constitute a defense in court.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 3 - Ready to Drive, Other Impairing Drugs and Driving (page 3-11)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=33",
  },
  {
    key: "fatal-accident-test",
    quote:
      "Every driver involved in a fatal motor vehicle accident or an accident where " +
        "a death is likely to occur must submit to a chemical test.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 3 - Ready to Drive, Drivers Involved in Fatal Accidents (page 3-12)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=34",
  },
  {
    key: "vehicular-homicide",
    quote:
      "a conviction for vehicular homicide in criminal court will result in an " +
        "extended prison term and a revocation of your driver's license for at least " +
        "5 years. If you were under the influence of intoxicants at the time of the " +
        "offense, your license will be revoked permanently.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 3 - Ready to Drive, Drivers Involved in Fatal Accidents (page 3-13)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=35",
  },
  {
    key: "open-container-handbook",
    quote:
      "The operator of a vehicle on a public way is in violation of law if the " +
        "operator or a passenger in the passenger area of the vehicle consumes " +
        "alcohol or possesses an open alcoholic container.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 3 - Ready to Drive, Open Container Law (page 3-13)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=35",
  },
  {
    key: "vehicle-seizure",
    quote:
      "A person arrested for operating under the influence or operating after " +
        "suspension if the suspension was for a previous OUI or OUI offense, is " +
        "subject to vehicle seizure and payment of any towing and storage fees as " +
        "well as a fine and jail time.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 3 - Ready to Drive, Vehicle Seizure (page 3-12)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=34",
  },
  {
    key: "oui-cost-7240",
    quote:
      "Operating Under the Influence is Costly, in Fact One Drink Over the Legal " +
        "Limit Could Cost Well Over $7,000",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 3 - Ready to Drive, Alcohol and the Law (page 3-13)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=35",
  },
  {
    key: "minors-provisional-until-21",
    quote:
      "Regarding Maine's OUI laws, all licenses issued to minors (people under 21 " +
        "years of age) are considered provisional and subject to immediate suspension " +
        "until the individual attains the age of 21.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 3 - Ready to Drive, Special Notice for Teenagers and Young Adults (page 3-14)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=36",
  },
  {
    key: "no-headsets",
    quote:
      "Keep the radio turned down and do not wear headsets or ear buds while " +
        "driving.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 3 - Ready to Drive, Vision and Hearing (page 3-1)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=23",
  },
  {
    key: "no-sunglasses-at-night",
    quote:
      "Do not wear sunglasses or tinted glasses at night as they will reduce your, " +
        "critical, nighttime vision.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 3 - Ready to Drive, Vision and Hearing (page 3-1)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=23",
  },
  {
    key: "seat-10-inches",
    quote:
      "Leave 10 inches between your chest and the steering wheel because of the " +
        "airbag. Do not lean the seat back.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 4 - Before You Drive, Adjusting Your Seat (page 4-1)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=39",
  },
  {
    key: "belt-law-maine",
    quote:
      "In Maine it is against the law to drive without wearing a safety belt.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 4 - Before You Drive, Using Safety Belts (page 4-2)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=40",
  },
  {
    key: "belt-40-55-percent",
    quote:
      "When used properly lap and shoulder belts can reduce the risk of a serious " +
        "or fatal injury by 40-55%.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 4 - Before You Drive, Using Safety Belts (page 4-3)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=41",
  },
  {
    key: "belt-with-airbags",
    quote:
      "Safety belts and air bags will help protect you during a vehicle crash. " +
        "Safety belts hold you in place during a collision. Always wear safety belts, " +
        "even if you have air bags.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 4 - Before You Drive, Air Bags (page 4-3)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=41",
  },
  {
    key: "children-12-and-under-back",
    quote:
      "All children age 12 and under must be in the back seat. Never place a " +
        "rear-facing child safety seat in front of an active passenger air bag.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 4 - Before You Drive, Keeping Children Safe (page 4-4)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=42",
  },
  {
    key: "infants-rear-facing",
    quote:
      "Infants, under age 2, should always ride in the back seat facing the rear. " +
        "Those two years and older front facing.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 4 - Before You Drive, Keeping Children Safe (page 4-4)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=42",
  },
  {
    key: "child-under-55-pounds",
    quote:
      "When a child who weighs less than 55 pounds is being transported in a motor " +
        "vehicle that is required by the United States Department of Transportation " +
        "to be equipped with safety belts, the operator must have the child properly " +
        "secured in a child safety seat.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 4 - Before You Drive, Use of safety belts (page 4-4)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=42",
  },
  {
    key: "child-55-to-80-pounds",
    quote:
      "The operator shall ensure that a child who weighs at least 55 pounds but " +
        "less than 80 pounds and who is less than 8 years of age is properly secured " +
        "in a federally approved child restraint system.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 4 - Before You Drive, Passengers less than 18 years of age (page 4-5)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=43",
  },
  {
    key: "child-rear-seat-12",
    quote:
      "The operator shall ensure that a child who is less than 12 years of age and " +
        "who weighs less than 100 pounds is properly secured in the rear seat of a " +
        "vehicle, if possible.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 4 - Before You Drive, Passengers less than 18 years of age (page 4-5)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=43",
  },
  {
    key: "hand-position-9-and-3",
    quote:
      "Put your hands at 9 and 3 or 8 and 4 to avoid injury from an air bag " +
        "deployment and for best control.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 5 - Getting Started, Hand Position (page 5-3)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=46",
  },
  {
    key: "brake-tap-warning",
    quote:
      "If you are going to stop or slow down at a place where another driver " +
        "doesn't expect it, tap your brake pedal three or four times quickly in order " +
        "to signal your intention to the driver behind you.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 5 - Getting Started, Signaling When You Slow Down or Stop Unexpectedly (page 5-3)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=46",
  },
  {
    key: "four-way-stop-first",
    quote:
      "At a 4-way stop, the driver reaching the intersection first gets to go first " +
        "(of course all vehicles must stop).",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, Yielding Right-Of-Way (page 6-1)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=48",
  },
  {
    key: "opposite-turn-versus-straight",
    quote:
      "If two cars approach an intersection at the same time from opposite " +
        "directions and one driver is signaling for a turn, the right-of-way belongs " +
        "to the car going straight.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, Yielding Right-Of-Way (page 6-1)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=48",
  },
  {
    key: "four-way-tie-goes-right",
    quote:
      "The driver on your right at a four-way stop has the right-of-way if both of " +
        "you arrive at the same time beside each other.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, Yielding Right-Of-Way (page 6-1)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=48",
  },
  {
    key: "private-drive-yield",
    quote:
      "Cars entering from a private drive or road must yield to any vehicle or " +
        "pedestrian on a public way. If you are entering a street or highway you must " +
        "do so without interfering with other traffic.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, Yielding Right-Of-Way (page 6-2)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=49",
  },
  {
    key: "entrance-ramp-yield",
    quote:
      "Drivers already on an interstate highway, if you are on the entrance ramp, " +
        "have the right-of-way.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, Yielding Right-Of-Way (page 6-2)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=49",
  },
  {
    key: "starting-from-parked",
    quote:
      "Wait for all moving traffic to pass when starting from a parked position.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, Yielding Right-Of-Way (page 6-2)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=49",
  },
  {
    key: "no-pass-vehicle-stopped-for-peds",
    quote:
      "Do not pass any vehicle that has stopped for pedestrians in a crosswalk.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, Yielding Right-Of-Way (page 6-2)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=49",
  },
  {
    key: "uncontrolled-yield-right",
    quote:
      "If two cars enter an uncontrolled intersection at about the same time, yield " +
        "to the car on your right.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, Yielding Right-Of-Way (page 6-2)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=49",
  },
  {
    key: "already-in-intersection",
    quote:
      "When approaching an intersection, yield the right-of-way to vehicles which " +
        "have already entered the intersection.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, Yielding Right-Of-Way (page 6-2)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=49",
  },
  {
    key: "emergency-vehicle-class-e",
    quote:
      "You must yield to emergency vehicles approaching from any direction when " +
        "they are sounding a siren and emitting a flashing light. You must " +
        "immediately drive to the right side of the roadway, clear of any " +
        "intersection, and stop until the emergency vehicle has passed. Failure to do " +
        "so is a Class E crime.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, Yielding Right-Of-Way (page 6-2)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=49",
  },
  {
    key: "left-turn-yield-bicycle-hb",
    quote:
      "Motor vehicle operators turning left must yield to bicycle and roller ski " +
        "operators approaching from the opposite direction, and may not turn left " +
        "under those circumstances unless they can do so safely and without " +
        "interfering with bicycle/roller ski operation.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, Yielding Right-Of-Way (page 6-2)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=49",
  },
  {
    key: "yield-ped-no-signal",
    quote:
      "When pedestrians are in a marked crosswalk and there are no traffic lights " +
        "or police at the intersection.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, When to yield the right-of-way for waiting pedestrians (page 6-2)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=49",
  },
  {
    key: "crossing-sidewalk-stop",
    quote:
      "When the car is crossing a sidewalk. Cars coming out of driveway or alley " +
        "must stop before the sidewalk and wait for pedestrians and traffic.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, When to yield the right-of-way for waiting pedestrians (page 6-2)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=49",
  },
  {
    key: "yield-schoolchildren",
    quote:
      "Always yield the right-of-way to school children crossing a street.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, When to yield the right-of-way for waiting pedestrians (page 6-2)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=49",
  },
  {
    key: "green-light",
    quote:
      "GREEN Traffic Light: GO. You may go through with caution if the way is clear " +
        "of traffic and pedestrians.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, Traffic Signals (page 6-3)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=50",
  },
  {
    key: "yellow-light",
    quote:
      "YELLOW Traffic Light: Caution. The light is about to change to red. Begin to " +
        "slow down. A yellow light clears the intersection before the light turns " +
        "red.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, Traffic Signals (page 6-3)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=50",
  },
  {
    key: "red-light-and-right-on-red",
    quote:
      "RED Traffic Light: STOP. You must stop before entering the intersection. You " +
        "must wait behind any stop line or crosswalk until the light turns green. A " +
        "right turn at a red light is permitted, after stopping, unless posted " +
        "otherwise. Vehicles making a right turn on red must yield to pedestrians and " +
        "all vehicle traffic.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, Traffic Signals (page 6-3)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=50",
  },
  {
    key: "flashing-yellow-light",
    quote:
      "Flashing YELLOW Traffic Light - Slow down and proceed with caution. Be " +
        "prepared to stop for any traffic.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, Traffic Signals (page 6-3)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=50",
  },
  {
    key: "flashing-red-light",
    quote:
      "Flashing RED Traffic Light -Stop and look both ways before entering the " +
        "intersection. Sometimes flashing red lights mark a railroad crossing. " +
        "Sometimes those crossings have gates or barriers. Stop and wait until the " +
        "flashing light stops and barriers are raised before proceeding.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, Traffic Signals (page 6-3)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=50",
  },
  {
    key: "red-with-green-arrow",
    quote:
      "A red light with a green arrow means you may go cautiously in the direction " +
        "of the arrow, yielding to all other vehicle and pedestrian traffic.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, Lighted Arrows (page 6-3)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=50",
  },
  {
    key: "steady-red-arrow",
    quote:
      "A steady red arrow means traffic making the turn indicated by the arrow must " +
        "stop until the arrow changes to green.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, Lighted Arrows (page 6-3)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=50",
  },
  {
    key: "obey-light-over-your-lane",
    quote:
      "When there is more than one traffic light obey the one that is directly over " +
        "your lane.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, Lighted Arrows (page 6-3)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=50",
  },
  {
    key: "lane-use-control-lights",
    quote:
      "Steady Red \"X\": Do not drive in this lane. Steady Yellow \"X\": Clear this " +
        "lane, signal is about to change to red. Flashing Yellow \"X\": This lane may " +
        "only be used for a left turn. Green Arrow: You may use this lane.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, Lane Use Control Lights (page 6-4)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=51",
  },
  {
    key: "warning-signs-diamond",
    quote:
      "Warning Signs - These signs warn of danger ahead. They are usually diamond " +
        "shaped. They are usually yellow with black lettering or symbols.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, Traffic Signs (page 6-4)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=51",
  },
  {
    key: "work-zone-signs-orange",
    quote:
      "Work Zone Signs - Are orange diamond or rectangular shaped signs with black " +
        "letters or symbols.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, Work Zone Signs (page 6-5)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=52",
  },
  {
    key: "work-zone-fines-doubled",
    quote:
      "Slowdown in work zones and be ready to stop quickly. Do not tailgate. Fines " +
        "for speeding in a work zone are doubled.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, Work Zone Signs (page 6-6)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=53",
  },
  {
    key: "regulatory-signs",
    quote:
      "Regulatory Signs - These signs are square, rectangular, or may have a " +
        "special shape. They are white with black, red, or green letters or symbols. " +
        "These signs tell you about traffic direction, lane use, turning, speed, " +
        "parking, and other special situations.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, Regulatory Signs (page 6-6)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=53",
  },
  {
    key: "red-circle-and-slash",
    quote:
      "Some signs have a red circle with a red slash across the symbol. This means " +
        "you cannot do certain things.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, Regulatory Signs (page 6-6)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=53",
  },
  {
    key: "stop-sign-shape",
    quote:
      "A stop sign has eight sides (octagon) and is red with white letters. You " +
        "must stop behind the stop line or crosswalk if there is one.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, Stop Sign (page 6-6)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=53",
  },
  {
    key: "stop-sign-no-line",
    quote:
      "If there is no crosswalk or stop line, stop at the point nearest the " +
        "intersection to enable you to see approaching traffic on the intersecting " +
        "roadway. The stop must be made before any portion of your vehicle has " +
        "entered the intersection.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, Stop Sign (page 6-6)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=53",
  },
  {
    key: "yield-sign",
    quote:
      "A yield sign is a red and white down-pointing triangle with red letters " +
        "(some old signs may still be yellow with black letters). It means you should " +
        "slow down to wait for traffic to clear on the road you are entering or " +
        "crossing.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, Yield Sign (page 6-6)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=53",
  },
  {
    key: "shared-center-turn-lane-sign",
    quote:
      "This sign marks a lane that is only for left turning vehicles. It is not for " +
        "through traffic or for passing other vehicles. Traffic travelling in either " +
        "direction may use this lane.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, Shared Center Lane- Left Turn Only (page 6-7)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=54",
  },
  {
    key: "police-direct-traffic",
    quote:
      "If you see police directing traffic, do as they direct. Police have " +
        "authority to direct all traffic and pedestrians as needed. It is illegal to " +
        "refuse or fail to obey police orders.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, Regulatory Signs (page 6-7)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=54",
  },
  {
    key: "guide-signs",
    quote:
      "Guide Signs - These signs are square or rectangular and are green, brown, or " +
        "blue. They advise you of intersecting roads. They help direct you to cities " +
        "and towns. They mark points of interest.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, Guide Signs (page 6-7)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=54",
  },
  {
    key: "railroad-crossbuck",
    quote:
      "A white, X-shaped sign with \"Railroad Crossing.\" If a train or railroad " +
        "vehicle is coming you must stop behind the stop line or before the tracks.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, Railroad Crossings (page 6-5)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=52",
  },
  {
    key: "railroad-advance-warning",
    quote:
      "A round yellow warning sign with an \"X\" symbol and black \"RR.\" The sign " +
        "cautions you to slow down, look and listen for a train or railroad vehicle. " +
        "Be prepared to stop.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, Railroad Crossings (page 6-5)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=52",
  },
  {
    key: "railroad-cross-quickly",
    quote:
      "When crossing railroad tracks, look both ways and cross the tracks quickly. " +
        "Do not stop on the railroad tracks.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, Railroad Crossings (page 6-5)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=52",
  },
  {
    key: "flagger-authority",
    quote:
      "A flagger may direct traffic in a work zone. You must do as the flagger " +
        "directs.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, Work Zone Signs (page 6-5)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=52",
  },
  {
    key: "pass-right-exceptions-hb",
    quote:
      "Never pass another motor vehicle on the right side except: When the car you " +
        "are passing is making a left turn and there is room for two or more lanes to " +
        "move in the same direction.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, Lanes for Passing (page 6-9)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=56",
  },
  {
    key: "truck-lane-restriction",
    quote:
      "On any section of the Maine Turnpike or Interstate-95 that consists of three " +
        "lanes in either direction, trucks, including truck tractors, but excluding " +
        "pickup trucks may only operate in the two farthest right-hand lanes.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, Lane Restrictions (page 6-9)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=56",
  },
  {
    key: "turn-left-approach",
    quote:
      "If you are turning left approach in the lane closest to the center line, " +
        "pull out toward the midpoint of the intersection and wait with wheels " +
        "straight, until it's clear to turn. Keep just left of the midpoint as you " +
        "turn and turn into the leftmost lane going in your direction.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, Lanes for Turning (page 6-9)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=56",
  },
  {
    key: "white-lines-meaning",
    quote:
      "Solid white lines painted on the roadway separate lanes of traffic going in " +
        "the same direction that have different uses. They also discourage changing " +
        "lanes. Broken white lines simply indicate multiple lanes going in the same " +
        "direction and they allow safe lane changes.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, Sign and Road Markings (page 6-11)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=58",
  },
  {
    key: "stop-behind-line-or-crosswalk",
    quote:
      "At a stop sign or traffic signal, you must stop behind the stop line or " +
        "crosswalk. If crosswalks are not marked, then you must stop before the " +
        "intersection close enough to see approaching traffic. If there is a stop " +
        "line before the crosswalk, you must stop at the stop line.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, Crosswalks and Stop Lines (page 6-11)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=58",
  },
  {
    key: "white-cane-10-feet",
    quote:
      "If you see anyone in the roadway with a white cane or guide dog, stop at " +
        "least 10 feet away and wait until the person is out of danger. An operator " +
        "who fails to yield the right-of-way to a visually impaired pedestrian is " +
        "liable for a traffic infraction with a minimum $50 and maximum $1,000 fine.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, Stop Lines (page 6-12)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=59",
  },
  {
    key: "yield-peds-marked-or-unmarked",
    quote:
      "You must yield to pedestrians in a crosswalk, marked or unmarked.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, Stop Lines (page 6-12)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=59",
  },
  {
    key: "no-cut-through-parking-lot",
    quote:
      "An operator may not drive a motor vehicle through a parking area to avoid " +
        "obeying the requirements of a traffic control device.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 6 - Rules of the Road, Traffic Controls (page 6-3)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=50",
  },
  {
    key: "left-right-left-again",
    quote:
      "Before moving after a stop, check for traffic and bicyclists. Look left, " +
        "then right, then left again before you enter the intersection.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 7 - General Driving, Intersections (page 7-2)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=62",
  },
  {
    key: "blocked-view-edge-forward",
    quote:
      "If your view of a cross street is blocked by buildings, trees, a fence or a " +
        "row of parked cars, edge forward slowly until you can see.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 7 - General Driving, Intersections (page 7-2)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=62",
  },
  {
    key: "roundabout-yield-hb",
    quote:
      "All vehicles approaching traffic circles or roundabouts must yield the " +
        "right- of-way to vehicles already in the circle or roundabout unless " +
        "otherwise directed by a police officer or by traffic control devices.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 7 - General Driving, Traffic Circles and Roundabouts (page 7-2)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=62",
  },
  {
    key: "pass-10-to-12-seconds",
    quote:
      "At highway speeds of 50 to 55 mph, you need from 10 to 12 seconds to " +
        "complete a pass safely.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 7 - General Driving, Space to Pass (page 7-6)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=66",
  },
  {
    key: "pass-one-third-mile",
    quote:
      "At highway speeds you will travel over 800 feet in 10 to 12 seconds. So will " +
        "an oncoming car. That means you need over 1600 feet or about one-third of a " +
        "mile to pass safely",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 7 - General Driving, Never pass (page 7-7)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=67",
  },
  {
    key: "complete-pass-before-zone",
    quote:
      "Maine law requires that you complete a pass before you reach the beginning " +
        "of a no passing zone.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 7 - General Driving, Signs and Markings (page 7-8)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=68",
  },
  {
    key: "no-passing-zone-signs",
    quote:
      "You may not pass where a yellow pennant NO PASSING ZONE sign appears on the " +
        "left of the road or a rectangular white (regulatory) DO NOT PASS sign " +
        "appears on the right of the road.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 7 - General Driving, Signs and Markings (page 7-8)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=68",
  },
  {
    key: "bicycle-three-feet-hb",
    quote:
      "Maine law requires that there be at least three feet of space between the " +
        "right side of your vehicle and the bicycle as you pass.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 7 - General Driving, Signs and Markings (page 7-8)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=68",
  },
  {
    key: "school-bus-illegal-to-pass",
    quote:
      "It is illegal to pass a stopped school bus with red lights flashing on " +
        "school property, on any undivided highway or parking area in Maine.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 7 - General Driving, Rules for School Buses (page 7-8)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=68",
  },
  {
    key: "school-bus-either-direction",
    quote:
      "If you are approaching a stopped school bus from either direction, with its " +
        "red lights flashing, you must bring your vehicle to a complete stop to the " +
        "front or to the rear of the school bus and wait while children are getting " +
        "on or off the bus.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 7 - General Driving, Rules for School Buses (page 7-8)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=68",
  },
  {
    key: "school-bus-divided-highway",
    quote:
      "You must stop for a school bus with red lights flashing and/or stop arm " +
        "extended. After the red lights have stopped flashing and the stop arm is no " +
        "longer visible you may go ahead slowly while watching for children. If the " +
        "roadway has a solid divider between you and the bus, you do not have to " +
        "stop.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 7 - General Driving, Multi-lane Divided Highway (page 7-9)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=69",
  },
  {
    key: "parking-parallel-two-feet",
    quote:
      "You must park parallel to the road except where angle parking lines are " +
        "painted on the roadway. Leave at least two feet of space between your car " +
        "and vehicles parked in front or behind.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 7 - General Driving, Parking (page 7-9)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=69",
  },
  {
    key: "parking-18-inches-curb",
    quote:
      "Move as far away from the driving lanes as possible. If there is a roadside " +
        "shoulder, pull as far onto it as you can. If there is a curb, park as close " +
        "to it as you can (and no more than 18 inches away)",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 7 - General Driving, Parking (page 7-9)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=69",
  },
  {
    key: "parking-brake-and-gear",
    quote:
      "Make sure your car can't move. Set your parking brake and shift gears to " +
        "park (first or reverse in a manual shift car).",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 7 - General Driving, Parking (page 7-10)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=70",
  },
  {
    key: "hill-parking-wheels",
    quote:
      "Turn the wheels to the right when parking downhill or uphill without a curb. " +
        "Turn the wheels to the left when parking uphill with a curb.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 7 - General Driving, Parking (page 7-10)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=70",
  },
  {
    key: "exit-on-curb-side",
    quote:
      "Avoid traffic. Get out of your car on the curb side if you can. If you must " +
        "use the street side, check for traffic behind you, especially bicycles, " +
        "before you open the door.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 7 - General Driving, Parking (page 7-10)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=70",
  },
  {
    key: "no-parking-municipal-list",
    quote:
      "In a loading zone. Within 10 feet of a fire hydrant. Within 15 feet of a " +
        "driveway entrance to a fire station or directly across from the entrance. " +
        "Within 15 feet of a crosswalk.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 7 - General Driving, Parking (page 7-10)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=70",
  },
  {
    key: "access-aisle-fine",
    quote:
      "Misuse of an access aisle is considered a traffic infraction and subject to " +
        "a fine of not less than $200.00.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 7 - General Driving, Access Aisle (page 7-10)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=70",
  },
  {
    key: "parallel-park-6-to-18",
    quote:
      "You should be about 6 inches from the curb but not more than 18 inches away " +
        "from the curb when done parking.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 7 - General Driving, Parallel Parking/Offset Backing (page 7-12)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=72",
  },
  {
    key: "start-from-parking-place",
    quote:
      "If parked on the right-hand side of the road, after starting your vehicle, " +
        "look over your left shoulder (not through your rearview mirror only). When " +
        "the way is clear give the appropriate signal and pull slowly out into the " +
        "street and into the correct lane as soon as possible.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 7 - General Driving, Starting from a Parking Place (page 7-12)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=72",
  },
  {
    key: "look-20-to-30-seconds",
    quote:
      "An expert driver tries to keep looking 20 to 30 seconds ahead.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 8 - Managing Time and Space, Look ahead (page 8-2)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=76",
  },
  {
    key: "check-mirrors-6-to-8",
    quote:
      "Check your mirror often for traffic behind you - every 6 to 8 seconds.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 8 - Managing Time and Space, Look behind (page 8-3)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=77",
  },
  {
    key: "school-zone-15-mph",
    quote:
      "A 5-sided sign means you are in a school zone and must slow to 15 mph during " +
        "recess, or when children are going to or leaving school, during school " +
        "opening or closing hours (½ hour before the start of the school day to ½ " +
        "hour after the end of the school day),",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 8 - Managing Time and Space, School Crossing (page 8-3)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=77",
  },
  {
    key: "railroad-15-feet-flashing",
    quote:
      "If red lights are flashing, stop at least 15 feet from the crossing and wait " +
        "until they go out or until you see that the way is clear in both directions. " +
        "Do not drive around any railroad crossing gate or barrier.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 8 - Managing Time and Space, Railroad Crossings (page 8-3)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=77",
  },
  {
    key: "slippery-slow-guidelines",
    quote:
      "Wet road: Slow down 5 to 10 mph. Packed snow: Slow down to half speed. Ice: " +
        "Slow to a crawl.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 8 - Managing Time and Space, Slippery roads (page 8-6)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=80",
  },
  {
    key: "first-rain-slippery",
    quote:
      "When it starts to rain, pavement can be very slippery for the first few " +
        "minutes. Heat causes oil in the asphalt to come to the surface. Also, oil " +
        "may have dropped on the road surface from other vehicles. Rain makes the " +
        "road slippery until the oil is washed away.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 8 - Managing Time and Space, Slippery roads (page 8-6)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=80",
  },
  {
    key: "bridges-freeze-first",
    quote:
      "On cold, wet days, bridges and overpasses can hide spots of ice. Be aware " +
        "that bridges and overpasses tend to freeze first and dry out last.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 8 - Managing Time and Space, Slippery roads (page 8-7)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=81",
  },
  {
    key: "hydroplaning-definition",
    quote:
      "As you go faster, your tires cannot wipe the road as well. They start to " +
        "ride up on a film of water, like water skis. This is called \"hydroplaning.\"",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 8 - Managing Time and Space, Hydroplaning (page 8-7)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=81",
  },
  {
    key: "total-stopping-distance",
    quote:
      "Total stopping distance is the distance from the time you realize you must " +
        "stop until your vehicle is completely stopped.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 8 - Managing Time and Space, Stopping Distance (page 8-7)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=81",
  },
  {
    key: "perception-and-reaction",
    quote:
      "Perception time - the time it takes you to recognize you must stop. The " +
        "average perception time for an alert driver is ¾ to 1 second. Your reaction " +
        "time - the time it takes for you to react and move your foot from the gas to " +
        "the brake pedal and begin braking. The average driver has a reaction time of " +
        "¾ to 1 second.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 8 - Managing Time and Space, Stopping Distance (page 8-7)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=81",
  },
  {
    key: "braking-158-feet",
    quote:
      "Braking distance - the distance it takes to stop your vehicle. At 50 mph on " +
        "dry pavement with good brakes, it can take about 158 feet. Adding perception " +
        "time and reaction time nearly doubles this distance.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 8 - Managing Time and Space, Stopping Distance (page 8-7)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=81",
  },
  {
    key: "maine-speed-maximums",
    quote:
      "Maximum speeds in Maine, unless posted otherwise, are: 45 Miles per hour " +
        "outside any business or residential or built-up area of Maine. 25 Miles per " +
        "hour in a business district, residential district, or built-up area of the " +
        "state.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 8 - Managing Time and Space, Speed Limits (page 8-7)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=81",
  },
  {
    key: "school-zone-15-and-fine",
    quote:
      "15 Miles per hour when passing a school during recess, or when children are " +
        "going to or from school during the school's opening or closing hours.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 8 - Managing Time and Space, Speed Limits (page 8-7)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=81",
  },
  {
    key: "school-zone-double-fine",
    quote:
      "A fine twice that of the usual fine is imposed for exceeding the posted " +
        "speed limit in a school zone.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 8 - Managing Time and Space, Speed Limits (page 8-8)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=82",
  },
  {
    key: "posted-limit-is-a-maximum",
    quote:
      "Posted speed limits do not tell you at what speed you must drive. They only " +
        "say you cannot go faster than the speed shown. If road and weather " +
        "conditions make the posted speed unsafe, you must slow down.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 8 - Managing Time and Space, Speed Limits (page 8-7)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=81",
  },
  {
    key: "headlights-250-feet",
    quote:
      "Headlights will let you see clearly only about 250 feet ahead. Therefore, if " +
        "you drive faster than about 50 mph on a dark road, you are really \"driving " +
        "blind.\"",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 8 - Managing Time and Space, Some Things Keep You from Seeing (page 8-8)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=82",
  },
  {
    key: "four-second-following",
    quote:
      "Following too closely limits your view of the road. It does not allow enough " +
        "reaction time to avoid a collision. Keep at least 4 seconds between your car " +
        "and the vehicle in front.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 8 - Managing Time and Space, Space in Front (page 8-11)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=85",
  },
  {
    key: "four-second-count",
    quote:
      "Watch when the rear of the vehicle ahead passes a sign, pole, or any other " +
        "fixed point. Count the seconds it takes you to reach the same point " +
        "(\"One-thousand-one, one- thousand-two, one-thousand-three, " +
        "one-thousand-four\"). You are following too close if you pass that point " +
        "before counting 4 seconds.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 8 - Managing Time and Space, Space in Front (page 8-11)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=85",
  },
  {
    key: "space-to-merge-four-seconds",
    quote:
      "Anytime you merge with other traffic, you need a gap of four seconds to " +
        "merge safely. That will give both you and the car behind you a safe " +
        "following distance. You need a four-second gap whenever you change lanes or " +
        "enter a freeway from an entrance lane or merge with another road.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 8 - Managing Time and Space, Space to Merge (page 8-15)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=89",
  },
  {
    key: "gap-from-full-stop",
    quote:
      "To get moving from a full stop, you need a gap that is: About a half a block " +
        "on city streets, About a full block on the highway.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 8 - Managing Time and Space, Space to Cross or Enter (page 8-15)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=89",
  },
  {
    key: "gap-to-enter-lane",
    quote:
      "To enter a lane of existing traffic, you need a little more time to complete " +
        "your turn and to get up to the speed of the other cars. You need a gap that " +
        "is: About two-thirds of a block in the city, About two blocks on the " +
        "highway.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 8 - Managing Time and Space, Space to Cross or Enter (page 8-15)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=89",
  },
  {
    key: "headlights-1000-feet-hb",
    quote:
      "By Maine law whenever visibility is too dim for you to see 1000 feet ahead " +
        "or at any time when windshield wipers are in constant use you must turn on " +
        "the headlights",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 8 - Managing Time and Space, Use headlights (page 8-16)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=90",
  },
  {
    key: "headlights-sunset-sunrise-hb",
    quote:
      "By Maine law you must have headlights on when driving anytime from sunset to " +
        "sunrise.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 8 - Managing Time and Space, Use headlights (page 8-16)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=90",
  },
  {
    key: "dim-500-and-300-hb",
    quote:
      "When a vehicle equipped with multiple beam road lights approaches an " +
        "oncoming vehicle within 500 feet or follows a vehicle within 300 feet, the " +
        "operator shall dim the headlights or switch to a low beam and shall turn off " +
        "a fog auxiliary light.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 8 - Managing Time and Space, Seeing Well at Night (page 8-16)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=90",
  },
  {
    key: "high-beams-twice-as-far",
    quote:
      "Use the high beams whenever possible. High beams let you see twice as far as " +
        "low beams. Be sure to use high beams on unfamiliar roads, in construction " +
        "areas, or where there may be people along the side of the road.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 8 - Managing Time and Space, Seeing Well at Night (page 8-16)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=90",
  },
  {
    key: "low-beams-in-precipitation",
    quote:
      "Use low beams in fog, snow, or heavy rain as light from your own high beams " +
        "will reflect back on you from such precipitation and cause a glare that will " +
        "affect your vision.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 8 - Managing Time and Space, Seeing Well at Night (page 8-16)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=90",
  },
  {
    key: "blinded-look-right",
    quote:
      "If a vehicle comes toward you with high beams on, and fails to dim the " +
        "lights, slow down and look toward the right side of the road. This will keep " +
        "you from being blinded by the other car's headlights. You should also be " +
        "able to see enough of the edge of the lane to stay on the roadway until the " +
        "car passes.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 8 - Managing Time and Space, Seeing Well at Night (page 8-16)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=90",
  },
  {
    key: "signal-past-side-street",
    quote:
      "When making a turn that is beyond a side street, do not put your turn signal " +
        "on until after passing the side street.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 8 - Managing Time and Space, Signal (page 8-17)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=91",
  },
  {
    key: "flares-100-feet",
    quote:
      "If you have emergency flares place them at least 100 feet behind the car " +
        "(Large vehicles must place 3 emergency devices in specified places).",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 8 - Managing Time and Space, Using Emergency Signals (page 8-18)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=92",
  },
  {
    key: "one-danger-at-a-time",
    quote:
      "Instead of driving between the car and the bike, take them one at a time. " +
        "Slow down, let the car pass, and then move to the left to allow plenty of " +
        "room (three feet) as you pass the bicyclist.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 8 - Managing Time and Space, Taking Dangers One at a Time (page 8-14)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=88",
  },
  {
    key: "abs-rules",
    quote:
      "Press on the brake pedal as hard as you can and keep applying pressure. ABS " +
        "only work if you keep pressure on the brake pedal. The pedal may vibrate, " +
        "and you may hear a clicking noise. This is normal. You can still steer with " +
        "the ABS engaged.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 9 - Avoiding Crashes, Braking (page 9-1)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=94",
  },
  {
    key: "skid-release-pressure",
    quote:
      "Release pressure from the brake or accelerator to regain steering. Look " +
        "where you want to go.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 9 - Avoiding Crashes, Skids (page 9-4)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=97",
  },
  {
    key: "reportable-accident-hb",
    quote:
      "If the accident involves any injuries, or property damage of $2,000 or more, " +
        "the drivers must report it to the police or local sheriff. Failure to report " +
        "an accident may result in criminal charges and a driver's license " +
        "suspension.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 9 - Avoiding Crashes, Accidents (page 9-3)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=96",
  },
  {
    key: "first-aid-no-drink",
    quote:
      "Do not give an injured person anything to drink, not even water.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 9 - Avoiding Crashes, Emergency First Aid (page 9-4)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=97",
  },
  {
    key: "brake-failure",
    quote:
      "Pump the brake pedal rapidly and hard several times. If that doesn't work… " +
        "Use the parking brake. Apply the parking brake slowly to avoid locking the " +
        "rear wheels. Be ready to release the brake if you start to skid.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 9 - Avoiding Crashes, Brake Failure (page 9-5)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=98",
  },
  {
    key: "tire-blowout",
    quote:
      "Don't panic or slam on the brakes. There may be a strong pull to the right " +
        "or left. Grip the steering wheel firmly and steer straight. Slow gradually. " +
        "Take your foot off the gas pedal. Allow the vehicle to slow down by itself. " +
        "Brake gently only if you must.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 9 - Avoiding Crashes, Tire Blowout (page 9-5)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=98",
  },
  {
    key: "stuck-gas-pedal",
    quote:
      "Keep your eyes on the road. Shift to neutral. Steer smoothly and gently put " +
        "on the brakes. Find a safe place to pull off the road. As you bring your car " +
        "to a stop, turn off the engine.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 9 - Avoiding Crashes, Stuck Gas Pedal (page 9-6)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=99",
  },
  {
    key: "stalled-on-tracks",
    quote:
      "If a train is coming and you are not having any success moving your vehicle, " +
        "stop trying and get away. To avoid debris from any crash, leave your vehicle " +
        "and head quickly toward the oncoming train and away from the tracks at a 45º " +
        "angle.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 9 - Avoiding Crashes, If your car stalls on railroad tracks (page 9-6)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=99",
  },
  {
    key: "oncoming-car-in-lane",
    quote:
      "Blow your horn and flash your lights to warn the other driver. Brake " +
        "quickly, but not so fast that you lock your wheels and lose control. Quickly " +
        "pull off into the right shoulder or ditch. Do not drive into the left lane.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 9 - Avoiding Crashes, If there is an oncoming car in your lane (page 9-7)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=100",
  },
  {
    key: "car-in-water",
    quote:
      "A car with windows and door closed may float from 3 to 10 minutes. The best " +
        "escape route is through a window, because water pressure makes it hard to " +
        "open a door.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 9 - Avoiding Crashes, If your vehicle plunges into water (page 9-7)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=100",
  },
  {
    key: "printed-material-illegal",
    quote:
      "It is illegal for an operator to read printed material while driving a motor " +
        "vehicle. Printed material does not include a map or written directions to a " +
        "specific location.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 9 - Avoiding Crashes, Speeding Up (page 9-2)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=95",
  },
  {
    key: "yield-ped-marked-crosswalk",
    quote:
      "You must yield the right-of-way to any person crossing the street in a " +
        "marked crosswalk.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 10 - Sharing the Road, Pedestrians (page 10-1)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=101",
  },
  {
    key: "yield-vision-impaired-stop",
    quote:
      "Always yield to the vision impaired. When a pedestrian is crossing a street " +
        "with a guide dog or carrying a white cane, you must come to a complete stop.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 10 - Sharing the Road, Pedestrians (page 10-1)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=101",
  },
  {
    key: "no-overtake-yielding-vehicle",
    quote:
      "You must not overtake or pass other vehicles stopped or slowing to yield to " +
        "pedestrians in a crosswalk.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 10 - Sharing the Road, Pedestrians (page 10-1)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=101",
  },
  {
    key: "bicycles-are-vehicles",
    quote:
      "Bicycles are considered vehicles. Bicyclists must follow the same rules of " +
        "the road as other vehicles. A bicyclist has the same rights and " +
        "responsibilities as vehicle drivers.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 10 - Sharing the Road, Bicycles (page 10-1)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=101",
  },
  {
    key: "take-the-travel-lane",
    quote:
      "When a road is too narrow for cars and bikes to ride safely side by side, " +
        "bicycles should \"take the travel lane,\" which means riding in or near the " +
        "center of the lane.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 10 - Sharing the Road, Bicycles (page 10-2)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=102",
  },
  {
    key: "dutch-reach",
    quote:
      "When opening the vehicle door, the \"Dutch Reach\" method is recommended. " +
        "Using the Dutch reach method, the driver will open their door using the " +
        "right hand. Using the right hand causes the body to twist left which forces " +
        "the driver to look over their road- side shoulder making it easier to see " +
        "oncoming bicyclists.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 10 - Sharing the Road, Bicycles (page 10-3)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=103",
  },
  {
    key: "bicycle-helmet-under-16",
    quote:
      "All persons under 16 years of age riding on bicycles are required to wear " +
        "helmets and sit on passenger seats when traversing public ways.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 10 - Sharing the Road, Bicycle Operation (page 10-4)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=104",
  },
  {
    key: "bicycle-lights-200-feet",
    quote:
      "A bicycle must have a front light that emits a white light visible from a " +
        "distance of at least 200 feet to the front. Also, a red or amber light or " +
        "reflector to the rear that is visible at least 200 feet to the rear.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 10 - Sharing the Road, Bicycle Operation (page 10-4)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=104",
  },
  {
    key: "motorcycle-full-lane",
    quote:
      "Give motorcycles a full lane. Do not attempt to share the lane. Motorcycles " +
        "need space to react to other traffic.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 10 - Sharing the Road, Motorcycles or Mopeds (page 10-5)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=105",
  },
  {
    key: "motorcycle-signal-not-cancel",
    quote:
      "Do not believe a motorcycle is turning when it has a turn signal flashing. " +
        "Turn signals on a motorcycle may not self-cancel so the rider may have " +
        "forgotten the signal is on.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 10 - Sharing the Road, Motorcycles or Mopeds (page 10-5)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=105",
  },
  {
    key: "motorcycle-four-seconds",
    quote:
      "When following a motorcycle, stay at least 4 seconds back. When it is wet, " +
        "increase the following distance.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 10 - Sharing the Road, Motorcycles or Mopeds (page 10-5)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=105",
  },
  {
    key: "motorcycle-10-percent",
    quote:
      "Motorcycles give their riders no protection. Therefore, they are involved in " +
        "nearly 10% of all motor vehicle deaths, although they make up only 4% of the " +
        "vehicles on the road.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 10 - Sharing the Road, Motorcycles or Mopeds (page 10-5)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=105",
  },
  {
    key: "motorcycle-left-turn-fault",
    quote:
      "Drivers turning left in front of an oncoming motorcycle cause many of the " +
        "accidents. They fail to see the motorcyclist, or they think the motorcycle " +
        "is going slower than it really is. Wait for an oncoming motorcyclist to pass " +
        "before turning left.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 10 - Sharing the Road, Motorcycles or Mopeds (page 10-5)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=105",
  },
  {
    key: "truck-335-feet",
    quote:
      "A loaded truck at 55 mph takes at least 335 feet to stop. That's more than 1 " +
        "½ times the stopping distance a car would need.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 10 - Sharing the Road, Front No-Zones (page 10-7)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=107",
  },
  {
    key: "rear-no-zone-200-feet",
    quote:
      "Large vehicles have huge blind spots-up to 200 feet behind them.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 10 - Sharing the Road, Rear No-Zones (page 10-7)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=107",
  },
  {
    key: "dim-behind-large-vehicle",
    quote:
      "Always dim your headlights when following a large vehicle at night. Bright " +
        "lights will reflect off the mirrors of the large vehicle and make it " +
        "difficult for the driver to see the road ahead.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 10 - Sharing the Road, Maintaining Space (page 10-9)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=109",
  },
  {
    key: "fire-truck-500-feet-hb",
    quote:
      "It is unlawful to follow within 500 feet of any fire truck responding to a " +
        "fire alarm.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 10 - Sharing the Road, Emergency Vehicles (page 10-9)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=109",
  },
  {
    key: "move-over-handbook",
    quote:
      "When you encounter an emergency vehicle that is stopped on the roadside you " +
        "must slow and yield the right-of-way. If possible, move over to the next " +
        "lane. If a lane change is not safe, slow down and use caution as you drive " +
        "by the emergency vehicle.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 10 - Sharing the Road, Move-Over Laws (page 10-10)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=110",
  },
  {
    key: "slow-moving-vehicle-triangle",
    quote:
      "A fluorescent or reflective orange and red triangle displayed on the rear " +
        "indicates that the vehicle is moving less than 25 mph.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 10 - Sharing the Road, Slow Moving Vehicles (page 10-10)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=110",
  },
  {
    key: "construction-warning-signs",
    quote:
      "These signs are black symbols or lettering on an orange background and are " +
        "often diamond shaped.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 11 - Special Driving Challenges, Construction Warning Signs (page 11-2)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=113",
  },
  {
    key: "single-lane-bridge",
    quote:
      "Narrow bridges and single lane bridges - When crossing a single lane bridge " +
        "the first driver to the bridge has right-of-way. Take turns when crossing " +
        "the bridge.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 11 - Special Driving Challenges, Rural Roads (page 11-3)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=114",
  },
  {
    key: "ice-three-to-twelve",
    quote:
      "Remember that on snow or ice it takes three to twelve times as much distance " +
        "to stop your car as it does on dry pavement.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 11 - Special Driving Challenges, Winter Driving (page 11-5)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=116",
  },
  {
    key: "stay-with-your-car",
    quote:
      "Stay with your car. Most deaths occur when people leave the car, get lost, " +
        "and freeze to death.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 11 - Special Driving Challenges, If you must wait for help (page 11-5)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=116",
  },
  {
    key: "snow-ice-falling-off",
    quote:
      "Operators of vehicles under 10,000 pounds shall \"take reasonable measures\" " +
        "to prevent snow or ice from falling off their vehicle while driving",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 11 - Special Driving Challenges, Winter Driving (page 11-5)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=116",
  },
  {
    key: "flood-six-inches",
    quote:
      "As little as six inches of water can float some small cars. Two feet of " +
        "water will carry away most vehicles.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 11 - Special Driving Challenges, Flooded Roadways (page 11-7)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=118",
  },
  {
    key: "flood-never-drive",
    quote:
      "NEVER ATTEMPT TO DRIVE ACROSS A FLOODED ROADWAY.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 11 - Special Driving Challenges, Flooded Roadways (page 11-7)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=118",
  },
  {
    key: "moose-may-and-june",
    quote:
      "Collisions with moose increase dramatically in the months of May and June. " +
        "Autumn incidents are also common but don't let your guard down as wildlife " +
        "crashes can happen during all 12 months a year.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 11 - Special Driving Challenges, Wildlife Safety (page 11-7)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=118",
  },
  {
    key: "deer-november-peak",
    quote:
      "Collisions with deer increase in the autumn, peaking in November - during " +
        "breeding season.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 11 - Special Driving Challenges, Wildlife Safety (page 11-7)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=118",
  },
  {
    key: "moose-eyes-not-reflective",
    quote:
      "Deer eyes reflect light from headlights very well but because moose are so " +
        "much taller, drivers typically won't see their eyes reflected in the " +
        "headlights.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 11 - Special Driving Challenges, Wildlife Safety (page 11-7)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=118",
  },
  {
    key: "moose-standoff",
    quote:
      "Stay in your vehicle. Do not get out to observe or to chase the wildlife off " +
        "the road. By getting out of the car you could put yourself or other drivers " +
        "at risk. Moose can be unpredictable and may attack you or your vehicle",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 11 - Special Driving Challenges, The Moose Standoff (page 11-8)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=119",
  },
  {
    key: "load-six-inches",
    quote:
      "No passenger type vehicle should carry a load which extends over the sides " +
        "of the vehicle beyond the line of the fenders on the left side, or extends " +
        "more than six inches beyond the line of the fenders on the right side of the " +
        "vehicle.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 11 - Special Driving Challenges, Carrying Passengers and Freight (page 11-8)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=119",
  },
  {
    key: "three-in-front-seat",
    quote:
      "You must not drive a vehicle if it is so loaded, or when there are more than " +
        "3 persons in the front seat so that your view is obstructed to the front or " +
        "to the sides, or so that the load interferes with your use of the vehicle " +
        "controls.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 11 - Special Driving Challenges, Carrying Passengers and Freight (page 11-8)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=119",
  },
  {
    key: "no-riding-in-trailer",
    quote:
      "No person may ride in a camp trailer, mobile home, semi-trailer, utility " +
        "trailer or trunk of a vehicle while it is being driven or moved on any " +
        "highway.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 11 - Special Driving Challenges, Carrying Passengers and Freight (page 11-8)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=119",
  },
  {
    key: "pickup-passenger-under-19",
    quote:
      "When a passenger, under 19 years of age, is transported in a pick-up truck, " +
        "that passenger must ride in the passenger compartment of that pick-up truck",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 11 - Special Driving Challenges, Carrying Passengers and Freight (page 11-8)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=119",
  },
  {
    key: "dog-in-open-vehicle",
    quote:
      "A person driving an open vehicle, including pick-up trucks and convertibles, " +
        "may not transport a dog in the open portion of that vehicle while on a " +
        "public way unless the dog is secured in a manner that prevents the dog from " +
        "falling, jumping or being thrown from the vehicle.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 11 - Special Driving Challenges, Carrying Passengers and Freight (page 11-9)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=120",
  },
  {
    key: "broken-center-line",
    quote:
      "You may pass if there is a broken center line on your side of the road. Pass " +
        "only if there are no oncoming cars in the passing lanes.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 7 - General Driving, Signs and Markings (page 7-8)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=68",
  },
  {
    key: "side-no-zone-right",
    quote:
      "A trucks largest blind spot is on the right side. It starts behind the cab " +
        "and goes the length of the truck.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 10 - Sharing the Road, Side No-Zones (page 10-7)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=107",
  },
  {
    key: "signal-when-reducing-speed",
    quote:
      "Signal when reducing speed - Brake lights let others know that you are " +
        "slowing down. Tap your brake pedal when: Turning off a road that does not " +
        "have a separate turn or exit lane. Parking or turning before an " +
        "intersection.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 8 - Managing Time and Space, Signal (page 8-17)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=91",
  },
  {
    key: "hills-and-curves",
    quote:
      "Hills and Curves. You never know what's on the other side of a steep hill or " +
        "a sharp curve. If a stalled car is there you must be going slowly enough to " +
        "stop. When you come to a steep hill or curve, slow down so that you can stop " +
        "if needed.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 8 - Managing Time and Space, Some Things Keep You from Seeing (page 8-9)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=83",
  },
  {
    key: "following-railroad-stoppers",
    quote:
      "When following vehicles that stop at railroad crossings, like transit buses, " +
        "school buses or vehicles carrying dangerous materials. School buses and tank " +
        "trucks carrying flammable liquids must stop at all railroad crossings so " +
        "expect the stops and slow down early to allow plenty of room for stopping.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 8 - Managing Time and Space, Space in Front (page 8-12)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=86",
  },
  {
    key: "large-vehicle-passing-you",
    quote:
      "Because of the size of large vehicles, at highway speed the vehicle will " +
        "push a cushion of air to the side and rear. When a large vehicle is passing " +
        "you, stay as far to the right of your lane as possible until the vehicle is " +
        "clear.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 10 - Sharing the Road, Passing (page 10-9)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=109",
  },
  {
    key: "non-resident-16",
    quote:
      "Any non-resident who is at least 16 years of age and who has a valid " +
        "operator's license or learner's permit issued by his or her home state.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 1 - Your Driver's License, Who Does Not Need a Maine Driver's License (page 1-2)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=7",
  },
  {
    key: "alcohol-affects-color-reaction",
    quote:
      "Color Distinction - Reduces your ability to see different colors. Your " +
        "reaction time - Alcohol and other drugs lower your ability to react to " +
        "danger.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 3 - Ready to Drive, Effect of Alcohol and other Impairing Drugs (page 3-6)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=28",
  },
  {
    key: "no-horn-near-animals",
    quote:
      "Pass with care. Do not use your horn or \"rev\" the engine when near an animal " +
        "as this may scare them and cause a crash.",
    source: "Maine Driver's License Manual (Maine Bureau of Motor Vehicles, Rev 4/24)",
    section: "Section 10 - Sharing the Road, Animal drawn vehicles and horseback riders (page 10-11)",
    url: "https://www.maine.gov/sos/sites/maine.gov.sos/files/inline-files/Maine%20Driver%20License%20Manual_2.pdf#page=111",
  },
  {
    key: "stat-speed-25-business",
    quote:
      "Twenty-five miles per hour in a business or residential district or built-up " +
        "portion unless otherwise posted; and",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2074(1)(C) - Rates of speed",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2074.html",
  },
  {
    key: "stat-speed-45-other",
    quote:
      "Forty-five miles per hour on all other public ways unless otherwise posted.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2074(1)(D) - Rates of speed",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2074.html",
  },
  {
    key: "stat-speed-obstructed-view",
    quote:
      "Fifteen miles per hour when approaching within 50 feet and in traversing an " +
        "intersection when the operator's view is obstructed except when preference " +
        "is given to through movement of traffic in one direction by \"stop\" signs or " +
        "other traffic control devices or by direction of a law enforcement officer.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2074(1)(B) - Rates of speed",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2074.html",
  },
  {
    key: "stat-school-zone-hours",
    quote:
      "When children are going to or leaving school during school opening or " +
        "closing hours. For purposes of this paragraph, school opening and closing " +
        "hours are 1/2 hour before and 1/2 hour after the beginning of the school day " +
        "and 1/2 hour before and 1/2 hour after the end of the school day;",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2074(1)(A) - Rates of speed",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2074.html",
  },
  {
    key: "stat-emergency-zone",
    quote:
      "A person shall operate a vehicle at a careful and prudent speed not greater " +
        "than is reasonable and proper when approaching or passing through an " +
        "emergency zone, having due regard for the safety of any individual present " +
        "in the emergency zone and the physical characteristics of the emergency " +
        "zone.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2074(1-A) - Emergency zone",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2074.html",
  },
  {
    key: "stat-emergency-zone-fine",
    quote:
      "A person who violates this subsection commits a traffic infraction " +
        "punishable by a fine of not less than $250.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2074(1-A) - Emergency zone",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2074.html",
  },
  {
    key: "stat-speed-30-over-crime",
    quote:
      "A person commits a Class E crime if that person operates a motor vehicle at " +
        "a speed that exceeds the maximum rate of speed by 30 miles per hour or more.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2074(3) - Criminal offense",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2074.html",
  },
  {
    key: "stat-compact-area",
    quote:
      "The compact or built-up portion of a municipality is the territory " +
        "contiguous to a way that is built up with structures situated less than 150 " +
        "feet apart for a distance of at least 1/4 of a mile.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2074(2) - Compact areas",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2074.html",
  },
  {
    key: "stat-turnpike-minimum-fine",
    quote:
      "A person who operates a motor vehicle on the Maine Turnpike or the " +
        "Interstate Highway System at a speed that exceeds the posted speed by less " +
        "than 30 miles per hour commits a traffic infraction punishable by a fine of " +
        "not less than $50.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2074(3-A) - Minimum fine",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2074.html",
  },
  {
    key: "stat-careful-prudent-speed",
    quote:
      "An operator shall operate a vehicle at a careful and prudent speed not " +
        "greater than is reasonable and proper having due regard to the traffic, " +
        "surface and width of the way and of other conditions then existing.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2074 - Rates of speed",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2074.html",
  },
  {
    key: "stat-impede-traffic",
    quote:
      "A person may not operate a motor vehicle at such a slow speed as to impede " +
        "the normal and reasonable movement of traffic, except when reduced speed is " +
        "necessary for safe operation of the motor vehicle or in compliance with law.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2075(1) - Operation impeding movement of traffic",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2075.html",
  },
  {
    key: "stat-right-of-way-intersections",
    quote:
      "The operator of a vehicle at intersecting public ways has the right-of-way " +
        "over a vehicle on the operator's left, and must yield right-of-way to one on " +
        "its right",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2053(3) - Public intersections",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2053.html",
  },
  {
    key: "stat-private-way-yield",
    quote:
      "An operator of a vehicle entering a public way from a private way must yield " +
        "the right-of-way to a vehicle on the public way or to a pedestrian. After " +
        "yielding, the operator of the vehicle must proceed cautiously.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2053(4) - Private to public intersection",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2053.html",
  },
  {
    key: "stat-left-turn-yield",
    quote:
      "An operator of a vehicle who intends to turn left must yield the " +
        "right-of-way to a vehicle approaching from the opposite direction when the " +
        "approaching vehicle is within the intersection or so close as to constitute " +
        "an immediate hazard.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2053(5) - Vehicle turning left",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2053.html",
  },
  {
    key: "stat-roundabout-two-exits",
    quote:
      "May not travel in a traffic circle, roundabout or rotary beyond 2 exit " +
        "points in the outside lane",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2053(6)(D) - Traffic circles, roundabouts or rotaries",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2053.html",
  },
  {
    key: "stat-roundabout-yield-left",
    quote:
      "Entering, circulating around and exiting a traffic circle, roundabout or " +
        "rotary may drive only to the right of the center traffic island of a " +
        "roundabout, mini-roundabout, rotary or traffic circle and shall yield the " +
        "right-of-way to a vehicle on the operator's left;",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2053(6)(B) - Traffic circles, roundabouts or rotaries",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2053.html",
  },
  {
    key: "stat-transit-bus-yield",
    quote:
      "An operator of a vehicle on a public way that has a maximum speed limit of " +
        "35 miles per hour or less shall yield the right-of-way to a transit bus " +
        "traveling in the same direction as the vehicle if:",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2053(9) - Yield to transit buses",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2053.html",
  },
  {
    key: "stat-emergency-yield-duty",
    quote:
      "On the approach of any such vehicle, the operator of every other vehicle " +
        "shall immediately draw that vehicle as near as practicable to the right-hand " +
        "curb, parallel to the curb and clear of any intersection and bring it to a " +
        "standstill until the authorized emergency vehicle has passed.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2054(4) - Right-of-way",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2054.html",
  },
  {
    key: "stat-emergency-yield-penalty",
    quote:
      "A violation of this subsection is a Class E crime that is punishable by a " +
        "minimum fine of $250 for the first offense and for a 2nd offense occurring " +
        "within 3 years of the first offense a mandatory 30-day suspension of a " +
        "driver's license.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2054(4) - Right-of-way",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2054.html",
  },
  {
    key: "stat-move-over",
    quote:
      "The operator of a vehicle passing a stationary authorized emergency vehicle " +
        "using an emergency light or a stationary public service vehicle using its " +
        "authorized lights, with due regard to the safety and traffic conditions, " +
        "shall:",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2054(9) - Stationary vehicles",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2054.html",
  },
  {
    key: "stat-move-over-lane",
    quote:
      "Pass in a lane not adjacent to that of the authorized emergency vehicle or " +
        "public service vehicle, if possible; or",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2054(9) - Stationary vehicles",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2054.html",
  },
  {
    key: "stat-move-over-fine",
    quote:
      "A violation of this subsection is a traffic infraction for which a minimum " +
        "fine of $275 must be adjudged.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2054(9) - Stationary vehicles",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2054.html",
  },
  {
    key: "stat-pass-stationary-disabled",
    quote:
      "The operator of a vehicle passing a stationary vehicle that a reasonable " +
        "person would conclude is disabled or that is using flashing lights to warn " +
        "other operators of the vehicle's presence, with due regard to safety and " +
        "traffic conditions, shall:",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2070(8) - Passing stationary vehicles",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2070.html",
  },
  {
    key: "stat-pass-stationary-fine",
    quote:
      "Violation of this subsection is a traffic infraction for which a fine of not " +
        "less than $275 must be adjudged.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2070(8) - Passing stationary vehicles",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2070.html",
  },
  {
    key: "stat-follow-fire-500",
    quote:
      "An operator may not follow within 500 feet of fire apparatus traveling in " +
        "response to a fire alarm or within 150 feet of any other authorized " +
        "emergency vehicle as defined in section 2054, subsection 1, paragraph B that " +
        "is using an emergency light as defined in section 2054, subsection 1, " +
        "paragraph D .",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2066(5) - Following fire apparatus",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2066.html",
  },
  {
    key: "stat-follow-truck-150",
    quote:
      "A truck operator, when traveling outside of a business or residential " +
        "district, may not follow within 150 feet of another truck.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2066(4) - Trucks",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2066.html",
  },
  {
    key: "stat-following-reasonable",
    quote:
      "An operator of a vehicle may not follow another vehicle more closely than is " +
        "reasonable and prudent, having due regard for the speed of the vehicles, the " +
        "traffic and the condition of the way.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2066(1) - Following too closely",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2066.html",
  },
  {
    key: "stat-headlight-sunset",
    quote:
      "A vehicle located on a way must be equipped with headlights as described in " +
        "section 1904 . The headlights must be illuminated: A. During the period from " +
        "sunset to sunrise;",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2067(1)(A) - Display of headlights",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2067.html",
  },
  {
    key: "stat-headlight-wipers",
    quote:
      "At any time when windshield wipers are in constant use.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2067(1)(C) - Display of headlights",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2067.html",
  },
  {
    key: "stat-dim-500-300",
    quote:
      "When a vehicle equipped with multiple-beam road lights approaches an " +
        "oncoming vehicle within 500 feet or follows a vehicle within 300 feet, the " +
        "operator shall dim the headlights or switch to a low beam",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2067(2) - Dimming",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2067.html",
  },
  {
    key: "stat-return-100-feet",
    quote:
      "The passing vehicle must return to the right before coming within 100 feet " +
        "of an approaching vehicle.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2070(4) - Returning to the right",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2070.html",
  },
  {
    key: "stat-no-left-of-center",
    quote:
      "When approaching within 100 feet of or traversing an intersection or " +
        "railroad grade crossing, except when turning to the left to enter an " +
        "intersecting way;",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2070(5)(B) - Limitation",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2070.html",
  },
  {
    key: "stat-no-left-of-center-bridge",
    quote:
      "When the view is obstructed within 100 feet of a bridge, viaduct or tunnel;",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2070(5)(C) - Limitation",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2070.html",
  },
  {
    key: "stat-pass-right-conditions",
    quote:
      "An operator may pass a vehicle on the right only under the following " +
        "conditions: A. When the vehicle to be passed is making or about to make a " +
        "left turn;",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2070(6) - Passing on the right",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2070.html",
  },
  {
    key: "stat-pass-right-two-lanes",
    quote:
      "On a way with unobstructed pavement not occupied by parked vehicles and of " +
        "sufficient width for 2 or more lines of traffic in each direction; or",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2070(6)(B) - Passing on the right",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2070.html",
  },
  {
    key: "stat-pass-bicycle-3-feet",
    quote:
      "An operator of a motor vehicle that is passing a bicycle or roller skier " +
        "proceeding in the same direction shall exercise due care by leaving a " +
        "distance between the motor vehicle and the bicycle or roller skier of not " +
        "less than 3 feet while the motor vehicle is passing the bicycle or roller " +
        "skier.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2070(1-A) - Passing bicycle or roller skier",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2070.html",
  },
  {
    key: "stat-signal-100-feet",
    quote:
      "A turn signal must be given continuously during at least the last 100 feet " +
        "traveled before turning.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2071(2) - Turn signal",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2071.html",
  },
  {
    key: "stat-stop-signal",
    quote:
      "An operator may not stop or suddenly decrease a vehicle's speed without " +
        "first giving an appropriate signal to the operator of a vehicle immediately " +
        "to the rear.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2071(3) - Stop signal",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2071.html",
  },
  {
    key: "stat-hand-signal-left",
    quote:
      "Signals by hand and arm must be given by the left arm from the left side of " +
        "a vehicle in the following manner: A. To indicate a left turn, the hand and " +
        "arm must be extended horizontally;",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2071(5)(A) - Hand signals",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2071.html",
  },
  {
    key: "stat-hand-signal-right",
    quote:
      "To indicate a right turn, the hand and arm must be extended upward,",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2071(5)(B) - Hand signals",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2071.html",
  },
  {
    key: "stat-hand-signal-stop",
    quote:
      "To indicate a stop or a decrease in speed, the hand and arm must be extended " +
        "downward.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2071(5)(C) - Hand signals",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2071.html",
  },
  {
    key: "stat-railroad-15-to-50",
    quote:
      "The operator shall stop the vehicle not less than 15 feet and not more than " +
        "50 feet from the nearest rail of the railroad track and may not proceed if:",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2076(2) - Warning devices",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2076.html",
  },
  {
    key: "stat-railroad-100-feet",
    quote:
      "An operator of a motor vehicle passing a sign provided for in Title 23, " +
        "sections 1251 and 1252 shall, at a distance of 100 feet from the nearest " +
        "rail of the crossing reduce the vehicle speed to a reasonable and proper " +
        "rate, observe in each direction and proceed cautiously over the crossing.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2076(1) - Reduction of speed at crossing",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2076.html",
  },
  {
    key: "stat-railroad-required-stops",
    quote:
      "A person operating any of the following vehicles shall stop the vehicle at a " +
        "grade crossing between 50 feet and 15 feet from the nearest rail, listen, " +
        "look in each direction along the tracks for an approaching train and " +
        "ascertain that no train is approaching:",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2076(3) - Required stops",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2076.html",
  },
  {
    key: "stat-pedestrian-3-feet",
    quote:
      "An operator of a motor vehicle who is passing a pedestrian on a public way " +
        "or the way's shoulder shall exercise due care by leaving a distance between " +
        "the motor vehicle and the pedestrian of not less than 3 feet while the motor " +
        "vehicle is passing the pedestrian.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2056(2) - Pedestrian on way",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2056.html",
  },
  {
    key: "stat-pedestrian-sidewalk",
    quote:
      "An operator shall yield the right-of-way to a pedestrian on a sidewalk.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2056(3) - Pedestrians on sidewalks",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2056.html",
  },
  {
    key: "stat-pedestrian-visible-intent",
    quote:
      "When traffic-control devices are not in operation, an operator must yield " +
        "the right-of-way to a pedestrian who is crossing within a marked crosswalk " +
        "or to a pedestrian who has shown visible intent to enter the marked " +
        "crosswalk.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2056(4) - Pedestrians in marked crosswalks",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2056.html",
  },
  {
    key: "stat-no-pass-stopped-for-ped",
    quote:
      "When a vehicle is stopped at an intersection or a marked crosswalk to permit " +
        "a pedestrian to cross, the operator of another vehicle approaching from the " +
        "rear may not overtake and pass the stopped vehicle.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2056(7) - When vehicle stopped",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2056.html",
  },
  {
    key: "stat-visually-impaired-yield",
    quote:
      "an operator who fails to yield the right-of-way to a visually impaired " +
        "pedestrian who is carrying a cane that is predominately white or metallic in " +
        "color, with or without a red tip, or using a guide or personal care dog as " +
        "defined in Title 17, section 1312 , commits a traffic infraction.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2056(9) - Failure to yield right-of-way to a visually impaired pedestrian",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2056.html",
  },
  {
    key: "stat-visually-impaired-fine",
    quote:
      "the fine for a violation of this subsection may not be less than $50 nor " +
        "more than $1,000.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2056(9) - Failure to yield right-of-way to a visually impaired pedestrian",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2056.html",
  },
  {
    key: "stat-red-and-yellow-together",
    quote:
      "Red and yellow illuminated together, means the operator may not enter the " +
        "intersection, as the intersection is reserved for the exclusive use of " +
        "pedestrians.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2057(1)(D) - Lighted devices",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2057.html",
  },
  {
    key: "stat-right-on-red-conditions",
    quote:
      "The operator may cautiously enter the intersection to make a right turn " +
        "after stopping if: (a) Not prohibited by an appropriate sign such as \"NO " +
        "RIGHT TURN ON RED\"; and (b) The operator executing a turn yields the " +
        "right-of-way to pedestrians on a crosswalk and to a vehicle having a green " +
        "signal at the intersection.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2057(1)(C) - Lighted devices",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2057.html",
  },
  {
    key: "stat-flashing-red-statute",
    quote:
      "A red light, if showing rapid intermittent flashes, means the operator must " +
        "stop and then proceed as if at a stop sign.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2057(1)(C-2) - Lighted devices",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2057.html",
  },
  {
    key: "stat-stop-place",
    quote:
      "Where the intersection is regulated by a stop sign, before entering the " +
        "crosswalk or, in the absence of a cross walk, at a marked stop line; but if " +
        "there is no stop line, at a point nearest the intersecting way where the " +
        "operator has a view of approaching traffic.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2057(8) - Place of stop",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2057.html",
  },
  {
    key: "stat-yield-sign-crime",
    quote:
      "A person commits a Class E crime if the person operates a vehicle past a " +
        "yield sign and collides with a vehicle, person riding a bicycle or " +
        "pedestrian proceeding on the intersecting way.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2057(10) - Failure to yield; criminal offense",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2057.html",
  },
  {
    key: "stat-parking-clear-width",
    quote:
      "A person may not park a vehicle on a public way unless: (1) A clear and " +
        "unobstructed width of at least 10 feet is left for free passage of other " +
        "vehicles on the way; and (2) An approaching vehicle has a clear view of the " +
        "way for 300 feet beyond the parked vehicle, before approaching within 200 " +
        "feet of it.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2068(1)(B) - Parking on ways",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2068.html",
  },
  {
    key: "stat-parking-limited-access",
    quote:
      "A person may not park a vehicle on the following portions of a public way " +
        "that are included in a limited-access highway: (1) On a traffic lane, " +
        "deceleration lane, acceleration lane or on a bridge; or (2) On the shoulder " +
        "to the left of the traffic lanes.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2068(1)(B-1) - Parking on ways",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2068.html",
  },
  {
    key: "stat-parking-brakes-set",
    quote:
      "An operator may not allow a motor vehicle to stand on a public way and " +
        "remain unattended without effectively setting its brakes.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2068(2) - Brakes set",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2068.html",
  },
  {
    key: "stat-opening-doors",
    quote:
      "A person may not open the door of a motor vehicle on the side of moving " +
        "traffic unless opening the door is reasonably safe to do and can be done " +
        "without interfering with the movement of traffic.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2068(4) - Opening and closing doors",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2068.html",
  },
  {
    key: "stat-turn-left-two-way",
    quote:
      "At an intersection where traffic is permitted to move in both directions on " +
        "each way entering the intersection, an approach for a left turn must be made " +
        "in that portion of the right half of the way nearest the center line and by " +
        "passing to the right of the center line where it enters the intersection.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2060(2) - Left turns on 2-way roadways",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2060.html",
  },
  {
    key: "stat-school-bus-stop",
    quote:
      "The operator of a vehicle on a way, in a parking area or on school property, " +
        "on meeting or overtaking a school bus from either direction when the bus has " +
        "stopped with its red lights flashing to receive or discharge passengers, " +
        "shall stop the vehicle before reaching the school bus.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2308(2) - Stopping",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2308.html",
  },
  {
    key: "stat-school-bus-penalty",
    quote:
      "A violation of subsection 2 is a Class E crime that is punishable by a $250 " +
        "minimum fine for the first offense and a mandatory 30-day suspension of a " +
        "driver's license for a 2nd offense occurring within 3 years of the first " +
        "offense.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2308(6) - Penalty",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2308.html",
  },
  {
    key: "stat-school-bus-100-feet",
    quote:
      "A school bus operator shall activate flashing lights at least 100 feet " +
        "before a stop is made to receive or discharge passengers. These lights must " +
        "be continually displayed until after the bus has received or discharged " +
        "passengers.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2308(1) - Receiving or discharging passengers",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2308.html",
  },
  {
    key: "stat-school-bus-barrier",
    quote:
      "The operator of a vehicle on a way separated by curbing or other physical " +
        "barrier need not stop on meeting or passing a school bus: A. Traveling in a " +
        "lane separated by the barrier from the lane in which that operator is " +
        "traveling;",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2308(3) - Separated roadways",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2308.html",
  },
  {
    key: "stat-reportable-accident",
    quote:
      "\"reportable accident\" means an accident on a public way or a place where " +
        "public traffic may reasonably be anticipated, resulting in bodily injury or " +
        "death to a person or apparent property damage of $2,000 or more.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2251(1) - Accident reports",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2251.html",
  },
  {
    key: "stat-accident-stop-injury",
    quote:
      "The operator of a vehicle involved in an accident anywhere that results in " +
        "personal injury or death to a person shall immediately stop the vehicle at " +
        "the scene of the accident or stop as close as possible and immediately " +
        "return to the scene.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2252(1) - Operator required to stop",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2252.html",
  },
  {
    key: "stat-accident-property-notify",
    quote:
      "The operator of a vehicle involved in an accident anywhere that results in " +
        "property damage shall take reasonable steps to notify the owner of that " +
        "property of the accident.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2255(1) - Notification",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2255.html",
  },
  {
    key: "stat-oui-offense",
    quote:
      "A person commits OUI if that person: A. Operates a motor vehicle: (1) While " +
        "under the influence of intoxicants; or (2) While having an alcohol level of " +
        "0.08 grams or more of alcohol per 100 milliliters of blood or 210 liters of " +
        "breath;",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2411(1-A) - Offense",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2411.html",
  },
  {
    key: "stat-oui-first-penalty",
    quote:
      "For a person having no previous OUI offenses within a 10-year period: (1) A " +
        "fine of not less than $500, except that if the person failed to submit to a " +
        "test, a fine of not less than $600; (2) A court-ordered suspension of a " +
        "driver's license for a period of 150 days;",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2411(5)(A) - Penalties",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2411.html",
  },
  {
    key: "stat-oui-48-hours",
    quote:
      "Not less than 48 hours when the person: (i) Was tested as having an alcohol " +
        "level of 0.15 grams or more of alcohol per 100 milliliters of blood or 210 " +
        "liters of breath; (ii) Was exceeding the speed limit by 30 miles per hour or " +
        "more;",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2411(5)(A)(3) - Penalties",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2411.html",
  },
  {
    key: "stat-oui-275-passenger",
    quote:
      "The court shall order an additional period of license suspension of 275 days " +
        "for a person sentenced under paragraph A , B , C , D , D-1 or D-2 if the " +
        "person was operating the motor vehicle at the time of the offense with a " +
        "passenger under 21 years of age.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2411(5)(G) - Penalties",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2411.html",
  },
  {
    key: "stat-implied-consent",
    quote:
      "If there is probable cause to believe a person has operated a motor vehicle " +
        "while under the influence of intoxicants, that person shall submit to and " +
        "complete a test to determine an alcohol level and the presence of a drug or " +
        "drug metabolite by analysis of blood, breath or urine.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2521(1) - Mandatory submission to test",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2521.html",
  },
  {
    key: "stat-refusal-warning",
    quote:
      "Result in suspension of that person's driver's license for a period up to 6 " +
        "years;",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2521(3) - Warnings",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2521.html",
  },
  {
    key: "stat-refusal-periods",
    quote:
      "Except when a longer period of suspension is otherwise provided by law, the " +
        "suspension is for a period of 275 days for the first refusal, 18 months for " +
        "a 2nd refusal, 4 years for a 3rd refusal and 6 years for a 4th refusal.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2521(6) - Period of suspension",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2521.html",
  },
  {
    key: "stat-permit-age-15",
    quote:
      "A person who is 15 years of age or older may apply for a learner's permit, " +
        "except that a person who is 15 years of age or older and has not attained 18 " +
        "years of age must complete a course in driver education before applying for " +
        "a learner's permit.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 1304(1)(A) - Learner's permits",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec1304.html",
  },
  {
    key: "stat-permit-two-years",
    quote:
      "The learner's permit is valid for a period of 2 years.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 1304(1)(D) - Learner's permits",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec1304.html",
  },
  {
    key: "stat-permit-accompanying",
    quote:
      "the learner's permit requires the permittee to be accompanied by a licensed " +
        "operator who: (1) Has held a valid license for at least 2 years; (2) Is at " +
        "least 20 years of age; (3) Is occupying a seat beside the driver; and (4) Is " +
        "licensed to operate the class vehicle operated by the permittee.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 1304(1)(E) - Learner's permits",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec1304.html",
  },
  {
    key: "stat-permit-6-months-70-hours",
    quote:
      "A person under 21 years of age may not apply for a license unless: (1) A " +
        "period of 6 months has passed from the date the person was issued a " +
        "learner's permit; and (2) The person has completed a minimum of 70 hours of " +
        "driving, including 10 hours of night driving,",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 1304(1)(H) - Learner's permits",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec1304.html",
  },
  {
    key: "stat-permit-no-device",
    quote:
      "A person who has been issued a learner's permit may not operate a motor " +
        "vehicle on a public way while using, manipulating, talking into or otherwise " +
        "interacting with a handheld electronic device or mobile telephone,",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 1304(1)(I) - Learner's permits",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec1304.html",
  },
  {
    key: "stat-intermediate-passengers",
    quote:
      "A person under 18 years of age who has been issued a driver's license may " +
        "not: A. Carry passengers other than immediate family members unless " +
        "accompanied by a licensed operator who meets the requirements of section " +
        "1304, subsection 1, paragraph E .",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 1311(1)(A) - Restricted license",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec1311.html",
  },
  {
    key: "stat-intermediate-curfew",
    quote:
      "Operate a motor vehicle between the hours of 12 a.m. and 5 a.m.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 1311(1)(B) - Restricted license",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec1311.html",
  },
  {
    key: "stat-intermediate-270",
    quote:
      "the license restrictions in subsection 1 are in effect for a period of 270 " +
        "days from license issuance. The period of license restrictions may extend " +
        "beyond the person's 18th birthday.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 1311(2) - Period of restrictions",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec1311.html",
  },
  {
    key: "stat-intermediate-penalty",
    quote:
      "A person who violates this section commits a traffic infraction for which a " +
        "fine of not less than $250 and not more than $500 may be adjudged.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 1311(4) - Penalty",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec1311.html",
  },
  {
    key: "stat-handheld-prohibition",
    quote:
      "A person may not operate a motor vehicle on a public way while using, " +
        "manipulating, talking into or otherwise interacting with a handheld " +
        "electronic device or mobile telephone,",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2121(1) - Prohibition",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2121.html",
  },
  {
    key: "stat-hands-free-18",
    quote:
      "A person who has attained 18 years of age and is not operating with an " +
        "intermediate license issued pursuant to section 1311 or a learner's permit " +
        "issued pursuant to section 1304 may use a mobile telephone or handheld " +
        "electronic device while operating a motor vehicle",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2121(2) - Hands-free mode",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2121.html",
  },
  {
    key: "stat-hands-free-definition",
    quote:
      "\"hands-free mode\" means the manner of use of a mobile telephone or handheld " +
        "electronic device without use of either hand by employing an internal " +
        "feature of, or an attachment to, the telephone or device.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2121(2) - Hands-free mode",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2121.html",
  },
  {
    key: "stat-handheld-penalty",
    quote:
      "A person who violates this section commits a traffic infraction for which a " +
        "fine of $50 for the first offense and $250 for a 2nd or subsequent offense " +
        "may be adjudged.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2121(3) - Penalty",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2121.html",
  },
  {
    key: "stat-texting-prohibition",
    quote:
      "A person may not operate a motor vehicle on a public way while engaging in " +
        "text messaging, including but not limited to when the motor vehicle is " +
        "temporarily stationary because of traffic, a traffic light or a stop sign.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2119(2) - Prohibition",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2119.html",
  },
  {
    key: "stat-texting-penalty",
    quote:
      "A person who violates this section commits a traffic infraction for which a " +
        "fine of not less than $250 may be adjudged.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2119(3)(A) - Penalties",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2119.html",
  },
  {
    key: "stat-open-container",
    quote:
      "The operator of a vehicle on a public way is in violation of this section if " +
        "the operator or a passenger in the passenger area of the vehicle: A. " +
        "Consumes alcohol; or",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2112-A(2) - Violation",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2112-A.html",
  },
  {
    key: "stat-helmet-under-18",
    quote:
      "The following persons must wear protective headgear: A. If under 18 years of " +
        "age, a passenger on a motorcycle or moped or in an attached side car;",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2083(1)(A) - Protective headgear",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2083.html",
  },
  {
    key: "stat-helmet-new-driver",
    quote:
      "An operator of a motorcycle or moped, operating under a learner's permit or " +
        "within one year of successfully completing a driving test;",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2083(1)(C) - Protective headgear",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2083.html",
  },
  {
    key: "stat-snow-ice-duty",
    quote:
      "The operator of a vehicle with a registered weight under 10,000 pounds shall " +
        "take reasonable measures to prevent snow or ice on the vehicle from falling " +
        "off the vehicle while it is being operated on a public way.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2093 - Snow and ice; duty of care",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2093.html",
  },
  {
    key: "stat-bicycle-rights-duties",
    quote:
      "A person riding a bicycle or scooter or operating roller skis on a way has " +
        "the rights and is subject to the duties applicable to the operator of a " +
        "vehicle",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2063(5) - Rights and duties",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2063.html",
  },
  {
    key: "stat-child-under-2",
    quote:
      "When a child who is less than 2 years of age is being transported in a motor " +
        "vehicle that is required by the United States Department of Transportation " +
        "to be equipped with seat belts, the operator shall ensure that the child is " +
        "properly secured in a rear-facing child restraint system",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2081(2-A) - Children under 2 years of age",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2081.html",
  },
  {
    key: "stat-child-booster",
    quote:
      "The operator shall ensure that a child who weighs less than 80 pounds, who " +
        "is less than 57 inches in height and who is less than 8 years of age is " +
        "properly secured in a belt positioning seat or other child restraint system",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2081(3)(A) - Passengers less than 18 years of age",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2081.html",
  },
  {
    key: "stat-belt-fine",
    quote:
      "Violation of this subsection is a traffic infraction for which a fine of $50 " +
        "for the first offense, $125 for the 2nd offense and $250 for the 3rd and " +
        "subsequent offenses must be imposed. A fine imposed under this subsection " +
        "may not be suspended by the court. A vehicle,",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2081(3-A) - Other passengers 18 years of age and older",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2081.html",
  },
  {
    key: "stat-distracted-definition",
    quote:
      "\"Operation of a motor vehicle while distracted\" means the operation of a " +
        "motor vehicle by a person who, while operating the vehicle, is engaged in an " +
        "activity: (1) That is not necessary to the operation of the vehicle; and",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2118(1) - Failure to maintain control",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2118.html",
  },
  {
    key: "stat-flagger-obey",
    quote:
      "An operator of a motor vehicle on a public way shall obey a request or " +
        "signal of a person who is reasonably identifiable as a public safety traffic " +
        "flagger. A violation of this subsection is a traffic infraction.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2091(4) - Obeying public safety traffic flagger",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2091.html",
  },
  {
    key: "stat-work-zone-yield",
    quote:
      "An operator of a vehicle must yield the right-of-way to an authorized " +
        "vehicle or person actually engaged in work on a public way: A. Within a " +
        "construction or maintenance area indicated by official traffic control " +
        "devices;",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2053(8) - Highway construction and maintenance areas",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2053.html",
  },
  {
    key: "stat-keep-right",
    quote:
      "When operators of vehicles approach each other from opposite directions, " +
        "each must travel to the right of the center of the travel portion of the " +
        "public way to allow the other to pass without interference.",
    source: "Maine Revised Statutes, Title 29-A: Motor Vehicles and Traffic (Maine Legislature, Office of the Revisor of Statutes)",
    section: "Title 29-A, Section 2053(1) - Keeping right",
    url: "https://legislature.maine.gov/statutes/29-A/title29-Asec2053.html",
  },
  {
    key: "test-30-questions-24-to-pass",
    quote:
      "The knowledge test consists of 30 questions, and you must answer a minimum " +
        "of 24 correctly to pass the test.",
    source: "Maine Bureau of Motor Vehicles, Department of the Secretary of State (maine.gov/sos/bmv)",
    section: "Drivers License Exam - Written Test Information",
    url: "https://www.maine.gov/sos/bmv/driver-licenses-and-ids/car-license/drivers-license-exam",
  },
  {
    key: "test-topic-areas",
    quote:
      "Questions will cover several topic areas, including your understanding of " +
        "the rules of the road, the meaning of various signs, pedestrian and bicycle " +
        "safety, an awareness of Maine' s operating under the influence laws, and the " +
        "dangers associated with distracted driving.",
    source: "Maine Bureau of Motor Vehicles, Department of the Secretary of State (maine.gov/sos/bmv)",
    section: "Drivers License Exam - Written Test Information",
    url: "https://www.maine.gov/sos/bmv/driver-licenses-and-ids/car-license/drivers-license-exam",
  },
  {
    key: "test-practice-questions",
    quote:
      "The practice questions at the end of each chapter of the study guide will " +
        "aid you in your preparation for the written examination.",
    source: "Maine Bureau of Motor Vehicles, Department of the Secretary of State (maine.gov/sos/bmv)",
    section: "Drivers License Exam - Written Test Information",
    url: "https://www.maine.gov/sos/bmv/driver-licenses-and-ids/car-license/drivers-license-exam",
  },
  {
    key: "road-test-parallel-parking",
    quote:
      "The test includes a parallel parking and straight-line backing up " +
        "requirement.",
    source: "Maine Bureau of Motor Vehicles, Department of the Secretary of State (maine.gov/sos/bmv)",
    section: "Drivers License Exam - Road Test Information",
    url: "https://www.maine.gov/sos/bmv/driver-licenses-and-ids/car-license/drivers-license-exam",
  },
  {
    key: "test-eight-languages",
    quote:
      "The BMV digital testing system provides the basic knowledge test in 8 " +
        "languages: Arabic, Canadian French, English, French, Lingala, Portuguese, " +
        "Somali, Spanish, and Swahili.",
    source: "Maine Bureau of Motor Vehicles, Department of the Secretary of State (maine.gov/sos/bmv)",
    section: "Drivers License Exam - License Exam Interpreter Program",
    url: "https://www.maine.gov/sos/bmv/driver-licenses-and-ids/car-license/drivers-license-exam",
  },
  {
    key: "vision-test-required",
    quote:
      "A vision test is required of all applicants. You may take a vision test at " +
        "no fee when you appear for your written examination.",
    source: "Maine Bureau of Motor Vehicles, Department of the Secretary of State (maine.gov/sos/bmv)",
    section: "Drivers License Exam - Vision Test Information",
    url: "https://www.maine.gov/sos/bmv/driver-licenses-and-ids/car-license/drivers-license-exam",
  },
  {
    key: "gdl-three-step",
    quote:
      "Maine law requires a three-step graduated drivers licensing system for new " +
        "drivers who are younger than 18 years old. The law includes restrictions for " +
        "drivers under 21 years of age.",
    source: "Maine Bureau of Motor Vehicles, Department of the Secretary of State (maine.gov/sos/bmv)",
    section: "Graduated Drivers License",
    url: "https://www.maine.gov/sos/bmv/driver-licenses-and-ids/car-license/graduated-drivers-license",
  },
  {
    key: "intermediate-license-name",
    quote:
      "If a license is issued to a person younger than age 18, that person will " +
        "receive an \" Intermediate License \" which prohibits the licensee from the " +
        "following:",
    source: "Maine Bureau of Motor Vehicles, Department of the Secretary of State (maine.gov/sos/bmv)",
    section: "Graduated Drivers License - Intermediate License",
    url: "https://www.maine.gov/sos/bmv/driver-licenses-and-ids/car-license/graduated-drivers-license",
  },
  {
    key: "permit-under-21-six-months",
    quote:
      "Must hold the permit for six months before applying for a road test and are " +
        "prohibited from using a cellphone while operating with a permit.",
    source: "Maine Bureau of Motor Vehicles, Department of the Secretary of State (maine.gov/sos/bmv)",
    section: "Graduated Drivers License - Learner's Permit",
    url: "https://www.maine.gov/sos/bmv/driver-licenses-and-ids/car-license/graduated-drivers-license",
  },
  {
    key: "permit-70-hours-dark",
    quote:
      "Must log 70 hours of driving and 10 of the hours must be done after dark.",
    source: "Maine Bureau of Motor Vehicles, Department of the Secretary of State (maine.gov/sos/bmv)",
    section: "Graduated Drivers License - Learner's Permit",
    url: "https://www.maine.gov/sos/bmv/driver-licenses-and-ids/car-license/graduated-drivers-license",
  },
  {
    key: "intermediate-270-days-web",
    quote:
      "A person must hold an intermediate license for 270 days from the date the " +
        "license was originally issued before they can receive an unrestricted " +
        "license.",
    source: "Maine Bureau of Motor Vehicles, Department of the Secretary of State (maine.gov/sos/bmv)",
    section: "License Age Restrictions - Applicants Who Are 15-17 Years Old",
    url: "https://www.maine.gov/sos/bmv/driver-licenses-and-ids/car-license/license-age-restrictions",
  },
  {
    key: "supervising-driver-20",
    quote:
      "You must be accompanied by a supervising driver who is at least 20 years old " +
        "and has held a license for at least two years.",
    source: "Maine Bureau of Motor Vehicles, Department of the Secretary of State (maine.gov/sos/bmv)",
    section: "License Age Restrictions - Applicants Who Are 15-17 Years Old",
    url: "https://www.maine.gov/sos/bmv/driver-licenses-and-ids/car-license/license-age-restrictions",
  },
  {
    key: "driver-ed-not-required-18",
    quote:
      "If you are 18 years of age or older, you are not required to complete driver " +
        "education.",
    source: "Maine Bureau of Motor Vehicles, Department of the Secretary of State (maine.gov/sos/bmv)",
    section: "License Age Restrictions - Applicants Who Are 18-20 Years Old",
    url: "https://www.maine.gov/sos/bmv/driver-licenses-and-ids/car-license/license-age-restrictions",
  },
  {
    key: "no-log-21-plus",
    quote:
      "If you are 21 years of age or older, you are not required to complete a " +
        "driver education course or log driving hours.",
    source: "Maine Bureau of Motor Vehicles, Department of the Secretary of State (maine.gov/sos/bmv)",
    section: "License Age Restrictions - Applicants Who Are 21+ Years Old",
    url: "https://www.maine.gov/sos/bmv/driver-licenses-and-ids/car-license/license-age-restrictions",
  },
  {
    key: "permit-not-renewable",
    quote:
      "Driver's permits are not renewable and only last for two years. Upon " +
        "expiration, you must file a new application then retake the vision screening " +
        "and written exam.",
    source: "Maine Bureau of Motor Vehicles, Department of the Secretary of State (maine.gov/sos/bmv)",
    section: "How to Obtain a License - Driver's Permit",
    url: "https://www.maine.gov/sos/bmv/driver-licenses-and-ids/car-license/how-to-obtain-a-license",
  },
  {
    key: "hours-carry-over",
    quote:
      "Required logged driving hours do carry over from your first permit to any " +
        "following permits. There is no additional wait time required on subsequent " +
        "permits before applying to take the road test.",
    source: "Maine Bureau of Motor Vehicles, Department of the Secretary of State (maine.gov/sos/bmv)",
    section: "How to Obtain a License - Driver's Permit",
    url: "https://www.maine.gov/sos/bmv/driver-licenses-and-ids/car-license/how-to-obtain-a-license",
  },
  {
    key: "permit-accompanied-20",
    quote:
      "Once earned, a driver's permit allows you to operate a vehicle, but you must " +
        "be accompanied by a licensed driver above the age of 20 years old who has " +
        "held a valid license for at least two years.",
    source: "Maine Bureau of Motor Vehicles, Department of the Secretary of State (maine.gov/sos/bmv)",
    section: "How to Obtain a License - Driver's Permit",
    url: "https://www.maine.gov/sos/bmv/driver-licenses-and-ids/car-license/how-to-obtain-a-license",
  },
  {
    key: "permit-exam-fee-35",
    quote:
      "Class C and Motorcycle Permit Examination (Written Test) $35",
    source: "Maine Bureau of Motor Vehicles, Department of the Secretary of State (maine.gov/sos/bmv)",
    section: "Drivers License and Examination Fees - Examination Fees",
    url: "https://www.maine.gov/sos/bmv/driver-licenses-and-ids/drivers-license-and-examination-fees",
  },
  {
    key: "license-fee-30",
    quote:
      "Class C - Under Age 65 - 6 year license $30",
    source: "Maine Bureau of Motor Vehicles, Department of the Secretary of State (maine.gov/sos/bmv)",
    section: "Drivers License and Examination Fees - Initial License and Renewal Fees",
    url: "https://www.maine.gov/sos/bmv/driver-licenses-and-ids/drivers-license-and-examination-fees",
  },
  {
    key: "intermediate-suspension-ladder",
    quote:
      "First violation: 60-day license suspension, Second violation: 180-day " +
        "suspension, Third or subsequent violation: one-year suspension.",
    source: "Maine Bureau of Motor Vehicles, Department of the Secretary of State (maine.gov/sos/bmv)",
    section: "Intermediate/Provisional License Suspensions - Ages 15-18",
    url: "https://www.maine.gov/sos/bmv/driver-licenses-and-ids/license-suspended/intermediate-provisional-license-suspensions",
  },
];
