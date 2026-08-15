import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts from What Every Driver Must Know (SOS-133, October
// 2025), published by the Michigan Department of State, plus three michigan.gov
// Secretary of State pages, the Driving Skills Test Study Guide (SOS-360), a
// Michigan Department of Insurance and Financial Services page, and four
// sections of the Michigan Vehicle Code and Insurance Code for rules the manual
// states only as a penalty label or does not state at all.
//
// Every quote below was located mechanically in the official source and checked
// as an exact substring before it was written here. Nothing is paraphrased.
// Four normalisations were applied to the extracted text and to nothing else:
// curly quotes, en dashes and em dashes are folded to ASCII; bullet glyphs
// become spaces; runs of whitespace, including the line breaks the PDF's
// two-column layout inserts mid-sentence, are collapsed to single spaces; and
// the running page header and footer band is dropped so a quote spanning a page
// break does not swallow it. Where the source states a rule as a stem followed
// by a bulleted list, or as a row of a penalty table, the items are run together
// in the order they appear - no words are changed, dropped or reordered.
//
// These are quoted rather than summarised because the Secretary of State's
// knowledge test is written from this wording. Each is kept to the operative
// rule and shown with its source, section and a link back to the official page.

export const michiganExcerpts: HandbookExcerpt[] = [
  {
    key: "gdl-ends-at-18",
    quote:
      "Driving privileges are increased at each new licensing level " +
      "as you gain greater skill and confidence. GDL ends when you " +
      "turn age 18.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 1: Your Driver's License",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "segment-1-age",
    quote:
      "Driver education Segment 1: To apply, you must be at least 14 " +
      "years, 8 months and have your parent or guardian's permission " +
      "to start Segment 1.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 1: Your Driver's License",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "level-1-supervision",
    quote:
      "you may only drive with a licensed parent, guardian or " +
      "designated, licensed adult age 21 or older seated in the front " +
      "seat next to you.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 1: Your Driver's License",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "segment-2-requirements",
    quote:
      "Driver education Segment 2: To apply, you must present a " +
      "driving log of at least 30 hours of supervised driving time " +
      "(including a minimum of 2 hours at night) with your parent, " +
      "guardian or designated adult. You must have held your Level 1 " +
      "Learner's License for at least three consecutive months.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 1: Your Driver's License",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "level-2-curfew",
    quote:
      "Level 2 Intermediate License restrictions prohibit you from " +
      "driving between 10 p.m. and 5 a.m. unless one of the following " +
      "applies: You are accompanied by a parent, guardian or " +
      "designated, licensed adult age 21 or older",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 1: Your Driver's License",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "level-2-passengers",
    quote:
      "You may not have more than one passenger under the age of 21 " +
      "in the vehicle with you at any time",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 1: Your Driver's License",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "level-3-eligibility",
    quote:
      "GDL Level 3 Full License: To be eligible, you must be at least " +
      "age 17 and have held the Level 2 Intermediate License for at " +
      "least six months. You must have driven 12 consecutive months " +
      "without a moving violation, an at-fault crash, a license " +
      "suspension or a violation of any of the GDL restrictions.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 1: Your Driver's License",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "tip-180-days",
    quote:
      "A temporary instruction permit (TIP) is valid for 180 days. It " +
      "allows you to practice driving with a licensed adult before " +
      "taking the driving skills test.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 1: Your Driver's License",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "probation-three-years",
    quote:
      "New drivers, including teen drivers under Graduated Driver " +
      "Licensing, are placed on probation for a minimum of three " +
      "years.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 1: Your Driver's License",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "license-valid-four-years",
    quote:
      "Your driver's license is usually valid for four years and " +
      "expires on your birthday in the year shown on the license.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 1: Your Driver's License",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "one-license-only",
    quote:
      "Michigan law allows drivers to hold only one valid driver's " +
      "license at a time.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 1: Your Driver's License",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "knowledge-test-two-sections",
    quote:
      "You will need to pass two portions of the test: The " +
      "\"Operator\" section takes about 45 minutes to complete, and " +
      "the \"Signs\" segment takes about 15 minutes.",
    source: "Michigan Secretary of State - New drivers (18 and older)",
    section: "New drivers (18 and older)",
    url: "https://www.michigan.gov/sos/license-id/new-drivers-18-older",
  },
  {
    key: "knowledge-test-valid-one-year",
    quote:
      "Once a knowledge test is passed, the results are valid for one " +
      "year. However, if an applicant applies for a new TIP because " +
      "their previous one has expired, they will need to take the " +
      "knowledge test again.",
    source: "Michigan Secretary of State - New drivers (18 and older)",
    section: "New drivers (18 and older)",
    url: "https://www.michigan.gov/sos/license-id/new-drivers-18-older",
  },
  {
    key: "knowledge-test-failure",
    quote:
      "Failure to get a passing score terminates the testing process " +
      "and the applicant must reschedule to take the test again on a " +
      "different day.",
    source: "Michigan Secretary of State - New drivers (18 and older)",
    section: "New drivers (18 and older)",
    url: "https://www.michigan.gov/sos/license-id/new-drivers-18-older",
  },
  {
    key: "points-two-year-life",
    quote:
      "Points placed on your driving record remain there for two " +
      "years from the date of conviction.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 2: Your Driving Record",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "points-reexamination-trigger",
    quote:
      "If you have six or more one-point violations, or 12 or more " +
      "points on your driving record within a two-year period, you " +
      "will be required to undergo a driver assessment reexamination.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 2: Your Driving Record",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "points-six",
    quote:
      "Six Points: Manslaughter, negligent homicide or other felony " +
      "involving use of a motor vehicle. Operating while intoxicated " +
      "or operating with any presence of a Schedule 1 drug or " +
      "cocaine. Failing to stop and give identification at the scene " +
      "of a crash. Reckless driving.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 2: Your Driving Record",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "points-six-more",
    quote:
      "Refusal to take a chemical alcohol test. Fleeing or eluding a " +
      "police officer. Failure to yield causing death or injury of " +
      "emergency responder, construction worker or person operating " +
      "implements of animal husbandry. Moving violation causing " +
      "injury or death.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 2: Your Driving Record",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "points-four",
    quote:
      "Four Points: Drag racing. Impaired driving. Younger than age " +
      "21 with any bodily alcohol content. 16 mph or more over the " +
      "legal speed limit.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 2: Your Driving Record",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "points-two",
    quote:
      "Two Points: Six to 10 mph over the legal speed limit. Open " +
      "alcohol container in vehicle. All other moving violations of " +
      "traffic laws. Refusal of Preliminary Breath Test by anyone " +
      "younger than 21. Failure to yield/show due caution for " +
      "emergency vehicles.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 2: Your Driving Record",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "drug-suspension-first",
    quote:
      "If there are no prior drug violations, your driver's license " +
      "is suspended for six months.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 2: Your Driving Record",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "implied-consent",
    quote:
      "Refusing to submit to a chemical test will result in a license " +
      "suspension pursuant to Michigan's implied consent law. Under " +
      "this law, all drivers are considered to have given consent to " +
      "the test when they apply for and renew their driver's license.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 2: Your Driving Record",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "only-time-sobers",
    quote:
      "Many people mistakenly believe that coffee, a cold shower, " +
      "exercise or fresh air can sober them up. The only thing that " +
      "sobers you up is time.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 2: Your Driving Record",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "one-drink-impairs",
    quote:
      "Consuming even one drink can impair your ability to drive, " +
      "slow your reaction time, dull your concentration and cause " +
      "visual problems.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 2: Your Driving Record",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "marijuana-same-penalties",
    quote:
      "The penalties for operating under the influence of marijuana " +
      "are the same as operating under the influence of alcohol.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 2: Your Driving Record",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "marijuana-transport-limit",
    quote:
      "Transport 2.5 ounces or less of marijuana if you are age 21 or " +
      "older. Not more than 15 grams of marijuana may be in the form " +
      "of a marijuana concentrate.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 2: Your Driving Record",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "bac-08",
    quote:
      "The person has an alcohol content of 0.08 grams or more per " +
      "100 milliliters of blood, per 210 liters of breath, or per 67 " +
      "milliliters of urine",
    source: "Michigan Vehicle Code (Act 300 of 1949)",
    section: "Section 257.625(1)(b)",
    url: "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-257-625",
  },
  {
    key: "bac-017",
    quote:
      "The person has an alcohol content of 0.17 grams or more per " +
      "100 milliliters of blood, per 210 liters of breath, or per 67 " +
      "milliliters of urine.",
    source: "Michigan Vehicle Code (Act 300 of 1949)",
    section: "Section 257.625(1)(c)",
    url: "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-257-625",
  },
  {
    key: "zero-tolerance-under-21",
    quote:
      "A person who is less than 21 years of age, whether licensed or " +
      "not, shall not operate a vehicle on a highway or other place " +
      "open to the general public or generally accessible to motor " +
      "vehicles, including an area designated for the parking of " +
      "vehicles, within this state if the person has any bodily " +
      "alcohol content.",
    source: "Michigan Vehicle Code (Act 300 of 1949)",
    section: "Section 257.625(6)",
    url: "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-257-625",
  },
  {
    key: "owi-child-passenger",
    quote:
      "He or she shall not operate a vehicle in violation of " +
      "subsection (1), (3), (4), (5), or (8) while another person who " +
      "is less than 16 years of age is occupying the vehicle.",
    source: "Michigan Vehicle Code (Act 300 of 1949)",
    section: "Section 257.625(7)(a)",
    url: "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-257-625",
  },
  {
    key: "points-one-point-speed",
    quote:
      "A violation of any law or ordinance pertaining to speed by " +
      "exceeding the lawful maximum by more than 1 mile per hour but " +
      "not more than 5 miles per hour 1 point",
    source: "Michigan Vehicle Code (Act 300 of 1949)",
    section: "Section 257.320a(1)(q)",
    url: "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-257-320a",
  },
  {
    key: "points-work-zone-five",
    quote:
      "A violation of section 627(6) pertaining to speed in a work " +
      "zone described in that section by exceeding the lawful maximum " +
      "by more than 15 miles per hour 5 points",
    source: "Michigan Vehicle Code (Act 300 of 1949)",
    section: "Section 257.320a(1)(g)",
    url: "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-257-320a",
  },
  {
    key: "points-nine-interview",
    quote:
      "If an individual has accumulated 9 points as provided in this " +
      "section, the secretary of state may call the individual in for " +
      "an interview as to the individual's driving ability and record " +
      "after due notice as to time and place of the interview.",
    source: "Michigan Vehicle Code (Act 300 of 1949)",
    section: "Section 257.320a(6)",
    url: "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-257-320a",
  },
  {
    key: "yellow-light-statute",
    quote:
      "If the signal exhibits a steady yellow indication, vehicular " +
      "traffic facing the signal shall stop before entering the " +
      "nearest crosswalk at the intersection or at a limit line when " +
      "marked, but if the stop cannot be made in safety, a vehicle " +
      "may be driven cautiously through the intersection.",
    source: "Michigan Vehicle Code (Act 300 of 1949)",
    section: "Section 257.612(1)(b)",
    url: "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-257-612",
  },
  {
    key: "liability-limits-default",
    quote:
      "a limit, exclusive of interest and costs, of not less than " +
      "$250,000.00 because of bodily injury to or death of 1 person " +
      "in any 1 accident",
    source: "Michigan Insurance Code (Act 218 of 1956)",
    section: "Section 500.3009(1)(a)",
    url: "https://www.legislature.mi.gov/Laws/MCL?objectName=mcl-500-3009",
  },
  {
    key: "phone-gps-exception",
    quote:
      "A global positioning system (GPS) or navigation feature as " +
      "long as information is not entered by hand.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "seat-belt-law",
    quote:
      "All front seat passengers to be buckled up (including the " +
      "driver). All passengers younger than age 16 to be buckled up, " +
      "in all seating positions",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "child-seat-whichever-first",
    quote:
      "Children must ride in a safety seat until they reach the age " +
      "requirement or the height requirement, whichever comes first.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "pickup-bed-under-18",
    quote:
      "Anyone under 18 years old is prohibited from riding in the " +
      "open bed of a pickup truck traveling more than 15 mph.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "nursing-while-moving",
    quote:
      "Removing a child from a car seat to nurse while the vehicle is " +
      "moving is prohibited.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "children-unattended-supervisor",
    quote:
      "Parents or guardians who leave their children in a vehicle " +
      "under the supervision of someone age 13 or older who is not " +
      "legally incapacitated are not in violation of the law.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "air-bag-children-12",
    quote:
      "Parents or guardians are encouraged to seat all children ages " +
      "12 and younger in the rear seat of the vehicle to avoid " +
      "potential injury from an air bag in the event of a crash.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "air-bag-10-inches",
    quote:
      "It is recommended that drivers sit with at least 10 inches of " +
      "space between the center of their breastbone and the center of " +
      "the steering wheel.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "belt-medical-exemption",
    quote:
      "Drivers exempt from using a seat belt because of a medical " +
      "condition must carry a doctor's statement.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "basic-speed-law",
    quote:
      "Michigan's Basic Speed Law means you must drive at a \"careful " +
      "and prudent\" speed in all driving conditions.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "speed-clear-distance",
    quote:
      "Drive at a speed that always allows you to stop within the " +
      "clear distance ahead. This speed is never faster than the " +
      "posted speed limit. Depending on conditions, it may be slower " +
      "than the posted speed limit.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "speed-15-mobile-home",
    quote:
      "15 mph - In mobile home parks and some municipal parks.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "speed-25-subdivision",
    quote:
      "25 mph - In platted subdivisions (showing boundaries, streets, " +
      "easements and other features of surveyed lots) and condominium " +
      "complexes.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "speed-45-work-zone",
    quote:
      "45 mph - In a work zone if posted. If a work zone is not " +
      "posted for 45 mph, then the speed limit is the normal speed " +
      "limit for that area.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "speed-55-default",
    quote:
      "55 mph - Unless otherwise posted, on all streets that are not " +
      "designated freeways and on all highways.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "speed-70-freeway",
    quote:
      "70 mph maximum/55 mph minimum - On all freeways unless posted " +
      "otherwise. School buses and trucks are restricted to 65 mph. " +
      "On freeways with speed limits less than 70 mph, school buses " +
      "and trucks are restricted to 55 mph.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "work-zone-45-unless-posted",
    quote:
      "For most construction, maintenance or surveying activities, " +
      "the speed limit is 45 mph unless posted differently.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "work-zone-fines-doubled",
    quote:
      "Fines are doubled for all moving violations in work zones. In " +
      "addition, motorists caught speeding in construction zones face " +
      "increased points on their driving records.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "work-zone-points",
    quote:
      "Three points for speeding 10 mph or less over the posted " +
      "limit. Four points for speeding more than 10 mph but not more " +
      "than 15 mph over the limit.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "work-zone-injury-penalty",
    quote:
      "If you cause the injury or death to any person in a work zone, " +
      "you may face fines of up to $7,500, and imprisonment of up to " +
      "15 years.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "work-zone-workers-direct",
    quote:
      "Construction workers also have the authority to direct traffic " +
      "in work zones and their directions should be followed even if " +
      "they conflict with an existing traffic control device.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "green-lights-maintenance",
    quote:
      "Michigan law allows state and local road agencies to equip " +
      "their maintenance vehicles with flashing or oscillating green " +
      "lights in addition to the traditional amber lights.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "move-over-law",
    quote:
      "The law requires you to slow down at least 10 mph below the " +
      "posted speed limit and move over a lane if traffic and " +
      "conditions allow.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "school-bus-20-feet",
    quote:
      "Stop at least 20 feet from a school bus with its red overhead " +
      "lights flashing; it is picking up or dropping off passengers.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "school-bus-divided-road",
    quote:
      "It is not necessary to stop for a school bus stopped on the " +
      "other side of a highway divided by a barrier such as a " +
      "concrete or grass median, island or other structures that " +
      "separate the flow of traffic.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "yield-when-turning",
    quote:
      "Making a right turn, including at a red light. Making a left " +
      "turn, whether you are turning left out of your driveway or " +
      "from an alley, or completing a left turn on a green light in " +
      "an intersection. Making a left turn on a red light",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "left-on-red-one-way",
    quote:
      "When making a left turn on red from a one-way street onto " +
      "another one-way street, you must first come to a complete stop " +
      "and check for traffic approaching from the right before " +
      "turning.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "left-on-red-two-way",
    quote:
      "When turning left from a two-way street onto a one-way street " +
      "at a red light, you must come to a full stop, scan for " +
      "vehicles approaching from the right, and yield the right of " +
      "way to any vehicles opposite you that are turning right at the " +
      "intersection.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "four-way-stop-tie",
    quote:
      "If two or more vehicles reached the intersection at the same " +
      "time, the vehicle on the left should yield to the vehicle on " +
      "its right.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "green-light-yield-inside",
    quote:
      "You are approaching or stopped at an intersection and the " +
      "light has just turned green. If vehicles are still in the " +
      "intersection when the light changes, you must yield to them " +
      "before proceeding.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "malfunctioning-signal",
    quote:
      "You reach an intersection with a malfunctioning traffic " +
      "signal. Come to a complete stop and yield to vehicles already " +
      "at the intersection. Yield to the vehicle on your right if you " +
      "both reach the intersection at the same time.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "t-intersection",
    quote:
      "At a T-intersection without any signals or signs, yield the " +
      "right of way to vehicles on the through road.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "flashing-yellow-arrow-yield",
    quote:
      "You reach an intersection with a flashing yellow arrow. Yield " +
      "to traffic before completing your turn.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "yield-sign-approach",
    quote:
      "When approaching a YIELD sign. Slow down, check for traffic " +
      "and be prepared to stop.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "funeral-right-of-way",
    quote:
      "Funeral processions have the right of way over all other " +
      "vehicles, except for fire trucks, ambulances and police " +
      "vehicles.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "pedestrian-unmarked-crosswalk",
    quote:
      "To a pedestrian in an unmarked crosswalk on the driver's side " +
      "of the roadway when no traffic control devices are present.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "pedestrian-before-signal",
    quote:
      "To a pedestrian who enters a crosswalk before the signal has " +
      "changed.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "pedestrian-from-alley",
    quote:
      "To a pedestrian crossing the street from an alley, driveway, " +
      "building or private road.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "passing-200-feet",
    quote:
      "You must return to your lane before you get within 200 feet of " +
      "any oncoming vehicles.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "passing-right-allowed",
    quote:
      "Passing a vehicle on the right is allowed but don't drive on " +
      "the shoulder or off the road to do so.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "no-passing-100-feet",
    quote:
      "You are within 100 feet of an intersection or railroad " +
      "crossing. Your view is blocked within 100 feet of a bridge, " +
      "viaduct or tunnel.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "lane-usage-right-hand",
    quote:
      "Slow vehicles must use the right lane except when passing or " +
      "making a left turn.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "weaving-illegal",
    quote:
      "Weaving from lane to lane to speed through traffic is illegal.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "cut-through-left-turn",
    quote:
      "If a road's cut-through is paved and there are no signs " +
      "prohibiting its use, you may make a left turn using the " +
      "cut-through.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "roundabout-yield-left",
    quote:
      "Vehicles entering from each leg of the intersection must yield " +
      "to traffic approaching from the left. This includes any " +
      "bicyclists or pedestrians who are present.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "roundabout-do-not-stop",
    quote:
      "Do not stop unless it is the only way to safely avoid a " +
      "collision or other danger.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "roundabout-emergency-vehicle",
    quote:
      "If an emergency vehicle is heard or seen approaching, do not " +
      "stop. Leave the roundabout at the nearest exit, pull over to " +
      "the right and stop, allowing the emergency vehicle to pass.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "railroad-stop-distance",
    quote:
      "If a train is coming, all vehicles must stop no more than 50 " +
      "feet or less than 15 feet from the tracks.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "railroad-required-stop-vehicles",
    quote:
      "school buses, vehicles carrying passengers for hire, gasoline " +
      "trucks and other vehicles carrying hazardous materials must " +
      "stop and make sure no train is coming, even if there is no " +
      "stop sign or railroad crossing signal.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "railroad-clear-6-feet",
    quote:
      "never cross the tracks unless there is enough space for your " +
      "vehicle to completely clear the far side of the tracks by at " +
      "least 6 feet.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "railroad-stuck-gates-active",
    quote:
      "If the crossing gates are activated, or a train is clearly " +
      "approaching, IMMEDIATELY get everyone out of the vehicle and " +
      "as far away from the tracks as possible.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "railroad-ens-sign",
    quote:
      "An Emergency Notification System (ENS) sign, posted at or near " +
      "a highway-rail grade crossing, lists a telephone number along " +
      "with the crossing's US DOT number and is used to notify the " +
      "railroad of an emergency or a warning device malfunction.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "park-downhill",
    quote:
      "Turn wheels toward the curb when parking downhill.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "park-no-curb",
    quote:
      "If there is no curb, turn the wheels so that the vehicle will " +
      "not roll into traffic.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "park-hydrant-15-feet",
    quote:
      "Within 15 feet of a fire hydrant.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "park-fire-station",
    quote:
      "Within 20 feet of a fire station driveway on the same side of " +
      "the street or, when marked, within 75 feet of the driveway on " +
      "the other side of the street.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "park-railroad-50-feet",
    quote:
      "Within 50 feet of the nearest rail of a railroad crossing.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "park-fire-or-crash-500",
    quote:
      "Within 500 feet of a fire or a crash.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "park-stop-sign-30-feet",
    quote:
      "Within 30 feet of a stop sign, traffic light or flashing " +
      "beacon, including a warning sign.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "park-crosswalk-20-feet",
    quote:
      "Within 20 feet of a marked crosswalk or 15 feet of an " +
      "intersection if there is no crosswalk.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "park-12-inches",
    quote:
      "More than 12 inches from the curb. This means the curb should " +
      "never be more than a foot from your parked vehicle.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "park-against-traffic",
    quote:
      "Against the flow of traffic.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "park-double-parking",
    quote:
      "On the street-side of a legally parked vehicle (double " +
      "parking).",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "park-bridge-tunnel",
    quote:
      "On or under a bridge (unless otherwise posted), on an overpass " +
      "or in a tunnel.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "parallel-park-6-12-inches",
    quote:
      "Do not park more than 6-12 inches from the curb.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "disability-free-parking",
    quote:
      "Free parking is provided only to vehicles displaying a " +
      "disability placard with a yellow free-parking sticker.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "van-accessible-blue-stripes",
    quote:
      "it is extremely important not to park on the blue-striped area " +
      "of the van-accessible parking space.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "local-parking-ordinances",
    quote:
      "Communities may pass parking ordinances for local streets that " +
      "are stricter than state law.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "sign-shapes",
    quote:
      "A traffic sign's shape gives you a clue as to its meaning and " +
      "purpose. Learn to recognize these nine basic shapes and what " +
      "they mean.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 5: Signs, Pavement Markings and Signals",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "sign-color-orange",
    quote:
      "Orange: Caution for construction or maintenance",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 5: Signs, Pavement Markings and Signals",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "sign-color-fluorescent-yellow-green",
    quote:
      "Fluorescent yellow-green: School, pedestrian or bicycle " +
      "caution",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 5: Signs, Pavement Markings and Signals",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "sign-color-fluorescent-pink",
    quote:
      "Fluorescent pink: Incident, emergency, or unplanned event",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 5: Signs, Pavement Markings and Signals",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "sign-no-passing-pennant",
    quote:
      "No Passing Zone. Located on the left side of the roadway, this " +
      "yellow pennant cautions you to refrain from passing because " +
      "conditions make passing hazardous.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 5: Signs, Pavement Markings and Signals",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "sign-pass-with-care",
    quote:
      "Pass With Care. This sign follows the Do Not Pass sign. It is " +
      "on the right side of the road and marks the end of a " +
      "no-passing zone.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 5: Signs, Pavement Markings and Signals",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "sign-slow-moving-vehicle",
    quote:
      "Slow-Moving Vehicle. The orange triangle is mounted on the " +
      "back of vehicles that do not move faster than 25 mph, such as " +
      "Amish buggies, farm combines, and other large agricultural and " +
      "industrial vehicles.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 5: Signs, Pavement Markings and Signals",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "sign-authorized-vehicles-only",
    quote:
      "Authorized Vehicles Only. Only law enforcement, emergency or " +
      "maintenance vehicles may legally use the emergency crossover. " +
      "Never drive across the median or emergency crossover of a " +
      "freeway.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 5: Signs, Pavement Markings and Signals",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "sign-keep-left",
    quote:
      "Keep Left. Traffic should pass only to the left-hand side of a " +
      "roadway feature or obstruction.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 5: Signs, Pavement Markings and Signals",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "sign-divided-highway-ends",
    quote:
      "Divided Highway Ends. The divided highway is ending and will " +
      "turn into two lanes of traffic.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 5: Signs, Pavement Markings and Signals",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "sign-lane-ends-merge-left",
    quote:
      "Lane Ends Merge Left. The right lane is ending; merge left. " +
      "Yield right of way to traffic in the left lane.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 5: Signs, Pavement Markings and Signals",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "sign-bridge-ices",
    quote:
      "Bridge Ices Before Road. Cautions that a bridge can be icy, " +
      "even if roads are clear.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 5: Signs, Pavement Markings and Signals",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "sign-hill",
    quote:
      "Hill. A steep downslope is ahead. All vehicles, especially " +
      "large trucks, should take precautions to make sure their " +
      "brakes are working properly and gear down if necessary.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 5: Signs, Pavement Markings and Signals",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "sign-right-lane-ends",
    quote:
      "Right Lane Ends. The right lane is ending in 500 feet; prepare " +
      "to merge left.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 5: Signs, Pavement Markings and Signals",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "sign-school-crossing",
    quote:
      "School Crossing. A school crossing for children is ahead. " +
      "Drive carefully and obey directions given by a school crossing " +
      "guard.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 5: Signs, Pavement Markings and Signals",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "sign-two-way-traffic",
    quote:
      "Two-Way Traffic. Two-way traffic begins; keep to the right.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 5: Signs, Pavement Markings and Signals",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "solid-white-lines",
    quote:
      "Solid white lines mark the right edge of the road. Often " +
      "called fog lines, these lines help you stay on the road at " +
      "night or in bad weather. It is illegal to cross solid white " +
      "lines when passing.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 5: Signs, Pavement Markings and Signals",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "double-solid-white",
    quote:
      "A double solid white line is used to show a travel path where " +
      "driving in the same direction is permitted on both sides of " +
      "the line but crossing the line is prohibited.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 5: Signs, Pavement Markings and Signals",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "solid-yellow-line",
    quote:
      "If a solid yellow line is on your side of the center line, do " +
      "not cross it to pass.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 5: Signs, Pavement Markings and Signals",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "center-left-turn-lane",
    quote:
      "Left turns must be made from within the left-turn-only center " +
      "lane and may be made from either direction. Using this lane to " +
      "pass other vehicles or as a merge lane is illegal and " +
      "dangerous.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 5: Signs, Pavement Markings and Signals",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "bicycle-lane-illegal-use",
    quote:
      "It is illegal to use these lanes for driving, passing, making " +
      "right turns, parking, or as a pull-over to wait for someone or " +
      "make a delivery.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 5: Signs, Pavement Markings and Signals",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "michigan-left-definition",
    quote:
      "Intersections that have Michigan Lefts do not allow " +
      "traditional left-turn movements. Instead, to turn left, a " +
      "person must drive straight through the intersection, or turn " +
      "right, then make a U-turn at a median crossover.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 5: Signs, Pavement Markings and Signals",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "michigan-left-unmarked",
    quote:
      "An unmarked median crossover should always be treated as a " +
      "single-lane crossover.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 5: Signs, Pavement Markings and Signals",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "directional-arrows",
    quote:
      "Directional arrows are wide white arrows painted down the " +
      "center of the traffic lane.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 5: Signs, Pavement Markings and Signals",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "signal-red-light",
    quote:
      "Red light means stop. It is at the top of a traffic signal in " +
      "Michigan. Stop your vehicle behind the crosswalk or stop line.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 5: Signs, Pavement Markings and Signals",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "signal-yellow-light",
    quote:
      "Yellow light means the signal is about to turn red. You are " +
      "required to stop on a yellow light. If you cannot stop safely, " +
      "do not speed up but drive cautiously through the intersection.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 5: Signs, Pavement Markings and Signals",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "signal-green-light",
    quote:
      "Green light means proceed with caution after checking for " +
      "pedestrians and vehicles.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 5: Signs, Pavement Markings and Signals",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "signal-not-working",
    quote:
      "If a traffic signal is not working, and there are no law " +
      "enforcement officers or other traffic signal devices present " +
      "to control the flow of traffic, come to a complete stop and " +
      "yield to vehicles already at the intersection. Yield to " +
      "vehicles on your right if you both reach the intersection at " +
      "the same time.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 5: Signs, Pavement Markings and Signals",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "flashing-red-light",
    quote:
      "A flashing red light means come to a full stop. Proceed when " +
      "the road is clear.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 5: Signs, Pavement Markings and Signals",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "flashing-yellow-light",
    quote:
      "A flashing yellow light means proceed carefully through the " +
      "intersection. Scan across traffic in both directions.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 5: Signs, Pavement Markings and Signals",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "steady-green-arrow",
    quote:
      "A steady green arrow means that traffic coming toward you is " +
      "stopped and you may proceed with caution in the direction of " +
      "the arrow. Yield the right of way to pedestrians in the " +
      "intersection.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 5: Signs, Pavement Markings and Signals",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "doghouse-protected-turn",
    quote:
      "When the green arrow is lit, turning drivers have a " +
      "\"protected turn,\" meaning all oncoming or conflicting " +
      "traffic is stopped.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 5: Signs, Pavement Markings and Signals",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "doghouse-green-light",
    quote:
      "When the green light is lit, you may complete your turn when " +
      "oncoming traffic has cleared.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 5: Signs, Pavement Markings and Signals",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "flashing-yellow-arrow",
    quote:
      "A flashing yellow arrow allows you to turn left when the " +
      "oncoming traffic, which has a green light, is clear. Be sure " +
      "that there is an adequate gap in the traffic and that there " +
      "are no pedestrians or bicyclists crossing before making your " +
      "turn.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 5: Signs, Pavement Markings and Signals",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "solid-yellow-arrow",
    quote:
      "A solid yellow arrow warns you that the left turn signal is " +
      "about to change to red. If you are approaching the " +
      "intersection, you must stop.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 5: Signs, Pavement Markings and Signals",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "solid-red-arrow",
    quote:
      "A solid red arrow means you must stop. You cannot turn until " +
      "the signal changes.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 5: Signs, Pavement Markings and Signals",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "pedestrian-walk-signal",
    quote:
      "The white symbol of a walking person or the word \"WALK\" " +
      "indicate that traffic must yield and pedestrians may cross.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 5: Signs, Pavement Markings and Signals",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "pedestrian-flashing-signal",
    quote:
      "The signal will begin flashing when the time to cross safely " +
      "is nearing its end. Any pedestrians in the crosswalk at that " +
      "time should complete their crossing.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 5: Signs, Pavement Markings and Signals",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "dont-walk-signal",
    quote:
      "The words \"DONT WALK\" or the red upraised hand means do not " +
      "cross the roadway.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 5: Signs, Pavement Markings and Signals",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "avoid-traffic-control-device",
    quote:
      "It is illegal to drive across public or private property, such " +
      "as a store parking lot, to avoid a traffic-control device.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 5: Signs, Pavement Markings and Signals",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "truck-stopping-distance",
    quote:
      "A passenger vehicle traveling at 55 mph can stop in about 130 " +
      "feet. A commercial vehicle traveling at the same speed takes " +
      "about 400 feet to stop.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 6: Sharing the Road",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "truck-no-zones",
    quote:
      "\"No zones\" are spaces in which motorists should not linger " +
      "because they are not readily visible to the commercial driver.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 6: Sharing the Road",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "truck-low-beams",
    quote:
      "For visibility and safety when traveling at night, use your " +
      "low beams when following a truck or bus.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 6: Sharing the Road",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "truck-stopping-line",
    quote:
      "The white stopping lines on the pavement are there for a " +
      "reason. If you stop past the line, a commercial vehicle may " +
      "not be able to complete its turn without hitting you.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 6: Sharing the Road",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "horse-and-buggy",
    quote:
      "When following a horse and rider or a horse-drawn buggy, " +
      "reduce your speed to 15-20 mph and maintain a safe distance of " +
      "at least 20 feet between your vehicle and the rider or buggy " +
      "so as not to spook the horse.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 6: Sharing the Road",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "pedestrian-green-light",
    quote:
      "Even if you have a green light, you must yield to people " +
      "crossing the street or intersection.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 6: Sharing the Road",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "pedestrian-never-pass-stopped",
    quote:
      "Never attempt to pass another vehicle that has stopped for a " +
      "pedestrian. Be especially cautious when a large truck or bus " +
      "is stopped because its large size may block a pedestrian from " +
      "your view.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 6: Sharing the Road",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "pedestrian-white-cane",
    quote:
      "You are required by law to stop or yield the right of way for " +
      "a pedestrian with a white cane or guide dog.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 6: Sharing the Road",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "pedestrian-no-sidewalk",
    quote:
      "If a street does not have a sidewalk, pedestrians should face " +
      "oncoming traffic if they choose to walk along the road's edge.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 6: Sharing the Road",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "motorcycle-share-lane",
    quote:
      "Remember that motorcycle, scooter, moped and bicycle riders " +
      "are allowed to share a lane.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 6: Sharing the Road",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "motorcycle-125cc-freeway",
    quote:
      "Motorcyclists operating vehicles with engine sizes of 125cc or " +
      "greater are legally allowed to drive on freeways and " +
      "limited-access highways.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 6: Sharing the Road",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "motorcycle-engine-braking",
    quote:
      "Motorcyclists frequently use engine braking and downshifting, " +
      "techniques used with manual transmissions that slow down the " +
      "vehicle without activating the brake lights.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 6: Sharing the Road",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "moped-definition",
    quote:
      "Has two or three wheels and is equipped with an engine that " +
      "does not exceed 100 cc piston displacement, Cannot propel " +
      "itself at a speed greater than 30 mph on a level surface, and, " +
      "Has a power drive system that does not require the operator to " +
      "shift gears.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 6: Sharing the Road",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "bicyclist-rights",
    quote:
      "Bicyclists may legally ride on Michigan roads, except limited " +
      "access freeways. They may ride anywhere in the lane as long as " +
      "they are riding with traffic.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 6: Sharing the Road",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "bicycle-3-feet",
    quote:
      "Michigan law requires that you leave at least 3 feet of space " +
      "between your vehicle and a bicyclist when passing.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 6: Sharing the Road",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "bicycle-no-passing-zone",
    quote:
      "You may pass a bicyclist in a no-passing zone as long as it is " +
      "safe to do so. Some cities have stricter laws requiring a " +
      "5-foot passing distance.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 6: Sharing the Road",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "bicycle-not-required-lane",
    quote:
      "Bicyclists are not required to use a bicycle lane and may " +
      "leave a bicycle lane to turn left or to avoid hazards.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 6: Sharing the Road",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "autocycle",
    quote:
      "An autocycle is a motorcycle that has safety belts, a roll bar " +
      "or roll hoops, a steering wheel and other equipment required " +
      "on a motorcycle. It has three wheels and is not equipped with " +
      "a straddle seat.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 6: Sharing the Road",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "merging-translation",
    quote:
      "If you are the vehicle merging onto (in this case) the " +
      "freeway, you are the one who must adjust speed and placement " +
      "so as to merge safely and avoid a crash with traffic already " +
      "on the freeway.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 7: Emergencies and Special Situations",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "hov-lanes",
    quote:
      "High Occupancy Vehicle (HOV) lanes are used during peak hours " +
      "of operation, such as rush hour, and vehicles must have two or " +
      "more occupants to use the HOV lane. Outside of designated " +
      "hours, HOV lanes are open to all motorists. Motorcycles may " +
      "use them at any time.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 7: Emergencies and Special Situations",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "freeway-no-stopping",
    quote:
      "Never stop on a freeway except for an emergency. If you must " +
      "stop, turn on the emergency hazard flashers, slow down " +
      "gradually and pull all the way off the pavement as soon as " +
      "safely possible.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 7: Emergencies and Special Situations",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "fatigue-break",
    quote:
      "Do not rely on coffee or \"stay awake\" drugs. If you feel " +
      "tired, stop and take a 10-minute break at least every two " +
      "hours.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 7: Emergencies and Special Situations",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "oncoming-escape-right",
    quote:
      "Look for an escape route on the right edge of the road. Try " +
      "not to go to the left since the other driver may see you and " +
      "return to his or her proper lane.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 7: Emergencies and Special Situations",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "rain-first-half-hour",
    quote:
      "When it begins to rain, the roads are most slippery during the " +
      "first half hour. This is because oil dropped from passing " +
      "vehicles has not been washed away.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 7: Emergencies and Special Situations",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "hydroplaning",
    quote:
      "When your tires ride on top of the water on a wet road, you " +
      "are hydroplaning, which can result in a loss of control. Worn " +
      "tires, low tire pressure or driving too fast contribute to " +
      "hydroplaning.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 7: Emergencies and Special Situations",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "fog-pull-off",
    quote:
      "If fog becomes so thick that you cannot see at all, pull off " +
      "the road. Turn on the four-way emergency flashers and wait for " +
      "the fog to lift.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 7: Emergencies and Special Situations",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "bridges-freeze-first",
    quote:
      "In cold weather, bridges and underpasses freeze before the " +
      "road does.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 7: Emergencies and Special Situations",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "flooded-road-barricades",
    quote:
      "If a flooded road is blocked off by safety barricades, do not " +
      "drive around them. The barricades are there because it is " +
      "unsafe for vehicles.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 7: Emergencies and Special Situations",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "skid-recovery",
    quote:
      "Take your foot off the accelerator. Turn the front wheels only " +
      "enough to keep them pointed in the direction you want to go " +
      "and no farther.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 7: Emergencies and Special Situations",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "abs-braking",
    quote:
      "With anti-lock brakes, apply the brake with hard, firm " +
      "pressure from the start and maintain this pressure until you " +
      "have stopped.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 7: Emergencies and Special Situations",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "threshold-braking",
    quote:
      "In a vehicle without anti-lock brakes, apply the brakes just " +
      "hard enough to not lock the wheels. If the wheels do lock, " +
      "release pressure and apply the brakes again.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 7: Emergencies and Special Situations",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "following-distance-3-4",
    quote:
      "A 3- to 4-second following distance is required. When the rear " +
      "of the vehicle ahead passes a sign or any other stationary " +
      "point, calculate the time it takes you to reach the same spot " +
      "by counting \"one-thousand one, one-thousand two, one-thousand " +
      "three.\"",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 7: Emergencies and Special Situations",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "following-distance-6",
    quote:
      "When speeds are increased, or during adverse driving " +
      "conditions, increase your following distance up to 6 seconds " +
      "or more if necessary.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 7: Emergencies and Special Situations",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "look-20-30-seconds",
    quote:
      "Look down the road 20-30 seconds. This rule means always look " +
      "ahead of the vehicle to spot potential hazards and avoid " +
      "last-second reactions.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 7: Emergencies and Special Situations",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "headlights-half-hour",
    quote:
      "Headlights must be turned on one half-hour after sunset until " +
      "one half-hour before sunrise and at other times when " +
      "visibility is reduced.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 7: Emergencies and Special Situations",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "headlights-500-feet",
    quote:
      "Headlights must be on any time there is not enough daylight to " +
      "see people and vehicles clearly at 500 feet. It is illegal to " +
      "use only parking lights when headlights are required.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 7: Emergencies and Special Situations",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "high-beams-500-feet",
    quote:
      "It is illegal to use or even flash high-beam headlights within " +
      "500 feet of an oncoming vehicle. Also, dim your lights for " +
      "pedestrians and cyclists.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 7: Emergencies and Special Situations",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "crash-move-vehicle",
    quote:
      "Vehicles involved in crashes that do not result in serious " +
      "injury or death shall be moved from the main roadway by the " +
      "driver or a passenger with a valid driver's license if the " +
      "vehicle can be driven and it is safe to do so.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 7: Emergencies and Special Situations",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "crash-exchange-information",
    quote:
      "Exchange names, addresses, driver's license numbers, " +
      "registration and insurance information with the other drivers " +
      "involved in the crash.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 7: Emergencies and Special Situations",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "crash-notify-police-1000",
    quote:
      "Notify the police if there are injuries or property damage " +
      "exceeding $1,000.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 7: Emergencies and Special Situations",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "deer-do-not-veer",
    quote:
      "Do not veer for deer; stay in your lane. Brake firmly. Hold " +
      "onto the steering wheel with both hands. Come to a controlled " +
      "stop. Steer your vehicle well off the roadway.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 7: Emergencies and Special Situations",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "deer-report-crash",
    quote:
      "If you hit a deer, report it to local law enforcement, the " +
      "county sheriff's office, Michigan State Police or the Michigan " +
      "Department of Natural Resources. They can provide a permit to " +
      "keep it.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 7: Emergencies and Special Situations",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "roadside-stay-in-car",
    quote:
      "Generally, the safest thing to do if you are involved in a " +
      "roadside emergency is to stay in your car, with your seat belt " +
      "buckled, until help arrives.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 7: Emergencies and Special Situations",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "disabled-vehicle",
    quote:
      "Pull as far off the traveled portion of the roadway as " +
      "possible. Activate your four-way emergency lights and stay " +
      "inside your vehicle with your seat belt securely fastened.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 7: Emergencies and Special Situations",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "sign-stop",
    quote:
      "Stop Sign. Come to a complete stop and yield to traffic and " +
      "pedestrians before proceeding.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 5: Signs, Pavement Markings and Signals",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "sign-yield",
    quote:
      "Yield. Yield the right of way. Slow down and let vehicles " +
      "crossing your path go by.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 5: Signs, Pavement Markings and Signals",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
  {
    key: "work-zone-workers-present",
    quote:
      "Work zones may limit speeds to 45 mph when workers are " +
      "present, yet allow traffic to return to the normally posted " +
      "speed when workers are absent.",
    source: "What Every Driver Must Know (Michigan Secretary of State, October 2025)",
    section: "Chapter 4: Traffic Laws",
    url: "https://www.michigan.gov/sos/-/media/Project/Websites/sos/Resources/Forms-and-publications/WEDMK/WEDMK.pdf",
  },
];
