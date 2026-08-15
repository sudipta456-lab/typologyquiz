import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts from the North Carolina Driver Handbook (revised
// May 2025), published by the NCDOT Division of Motor Vehicles, plus 19A NCAC
// 03B .0201 - the administrative rule that actually sets the examination pass
// marks, which the handbook itself never states - one NCDMV web page, NCDOT's
// Move Over Law page, and one N.C. Department of Insurance page for the
// liability minimums that changed on 1 July 2025, after the handbook went to
// press and while it still prints the older figures.
//
// Every quote below was located mechanically in the official source and
// checked as an exact substring before it was written here. Nothing is
// paraphrased. Three normalisations were applied to the extracted text and to
// nothing else: curly quotes, en dashes and em dashes are folded to ASCII; a
// word split by a line break is rejoined; and runs of whitespace, including
// the line breaks the PDF's layout inserts mid-sentence, are collapsed to
// single spaces. Where the handbook states a rule as a stem followed by a
// bulleted list, the bullet characters are kept exactly as they appear and no
// words are changed, dropped or reordered. The NCAC rule PDF carries a line
// number in the right margin on its own text line; those bare numerals are
// dropped, because they are page furniture rather than part of the sentence.
//
// These are quoted rather than summarised because NCDMV's knowledge
// examination is written from this wording. Each is kept to the operative rule
// and shown with its source, section and a link back to the official page.

const HB = "North Carolina Driver Handbook (revised May 2025)";
const HB_URL =
  "https://www.ncdot.gov/dmv/license-id/driver-licenses/new-drivers/Documents/nc-driver-handbook.pdf";
const RULE = "19A NCAC 03B .0201 - Driver's License Examination and Online Renewal";
const RULE_URL =
  "https://www.ncdot.gov/about-us/how-we-operate/policy-process/rules/Documents/19a-ncac-03b-0201-emergency-rule.pdf";
const TESTS = "NCDMV - Driver License Tests";
const TESTS_URL =
  "https://www.ncdot.gov/dmv/license-id/driver-licenses/new-drivers/Pages/driver-license-tests.aspx";
const MOVEOVER = "NCDOT - Move Over Law";
const MOVEOVER_URL =
  "https://www.ncdot.gov/initiatives-policies/safety/driving-safety/Pages/move-over-law.aspx";
const DOI =
  "N.C. Department of Insurance - Changes to the Rating of Automobile Insurance Policies";
const DOI_URL =
  "https://www.ncdoi.gov/changes-rating-automobile-insurance-policies-effective-july-1-2025";

export const northcarolinaExcerpts: HandbookExcerpt[] = [
  {
    key: "knowledge-test-80-percent",
    quote:
      "This is an automated computer test on knowledge of rules of " +
      "the road. An audio component allows applicants with reading " +
      "comprehension difficulties to listen to the test questions by " +
      "use of earphones. Eighty percent of the questions shall be " +
      "answered correctly in order to pass the knowledge examination.",
    source: RULE,
    section: "19A NCAC 03B .0201(a)(1) - Knowledge Examination",
    url: RULE_URL,
  },
  {
    key: "road-signs-nine-of-twelve",
    quote:
      "This is a test on knowledge of highway signs and their " +
      "meanings. Applicants for a regular Class \"C\" license shall " +
      "correctly identify nine of twelve road signs.",
    source: RULE,
    section: "19A NCAC 03B .0201(a)(2) - Road Signs",
    url: RULE_URL,
  },
  {
    key: "first-time-full-examination",
    quote:
      "Applicants applying for a driver's license for the first time " +
      "shall complete the full examination, to include the knowledge " +
      "examination, road signs test, visual acuity test, and road " +
      "test.",
    source: RULE,
    section: "19A NCAC 03B .0201(b)(1) - First time applicants",
    url: RULE_URL,
  },
  {
    key: "retest-seven-days",
    quote:
      "Applicants who do not pass the knowledge test or driving test " +
      "for a regular Class C license may retake the test in seven " +
      "calendar days.",
    source: TESTS,
    section: "Driver License Tests",
    url: TESTS_URL,
  },
  {
    key: "level1-hold-nine-months",
    quote:
      "You must hold this permit for nine months prior to applying " +
      "for a Limited Provisional License.",
    source: HB,
    section: "Chapter 1 - Limited Learner Permit",
    url: HB_URL,
  },
  {
    key: "level1-driving-log-60",
    quote:
      "You will be given a Driving Log to be completed detailing a " +
      "minimum of 60 hours of operation. At least 10 hours must occur " +
      "during nighttime hours.",
    source: HB,
    section: "Chapter 1 - Limited Learner Permit",
    url: HB_URL,
  },
  {
    key: "supervising-driver-five-years",
    quote:
      "A supervising driver must be a parent, grandparent or guardian " +
      "of the permit/license holder, or a responsible person approved " +
      "by the parent or guardian. A supervising driver must hold a " +
      "valid driver license and must have been licensed for at least " +
      "five years.",
    source: HB,
    section: "Chapter 1 - Supervising Driver",
    url: HB_URL,
  },
  {
    key: "level2-passenger-limit",
    quote:
      "When driving unsupervised, there may be one passenger that is " +
      "under 21 that is not a member of the same household as the " +
      "driver.",
    source: HB,
    section: "Chapter 1 - Level Two Limited Provisional License",
    url: HB_URL,
  },
  {
    key: "provisional-alcohol-revocation",
    quote:
      "It is unlawful for a provisional licensee to drive a motor " +
      "vehicle after or while consuming any amount of alcohol or " +
      "drugs - a conviction of such a violation will result in a " +
      "one-year license revocation.",
    source: HB,
    section: "Chapter 1 - The Provisional Licensee",
    url: HB_URL,
  },
  {
    key: "bac-08",
    quote:
      "Everyone's driving is impaired at a blood alcohol " +
      "concentration, or BAC, of 0.08 percent, but many people are " +
      "affected at much lower levels.",
    source: HB,
    section: "Chapter 2 - Alcohol and the Law",
    url: HB_URL,
  },
  {
    key: "refusal-revocation",
    quote:
      "Refusal to perform any required test will result in the " +
      "immediate revocation of your driver license for at least 30 " +
      "days and an additional, minimum 12-month revocation by the " +
      "DMV.",
    source: HB,
    section: "Chapter 2 - Driving While Impaired",
    url: HB_URL,
  },
  {
    key: "dwi-two-ways",
    quote:
      "By proving the driver's blood alcohol concentration is 0.08 " +
      "percent or more, or 0.04 or more, if you are driving a " +
      "Commercial Motor Vehicle.",
    source: HB,
    section: "Chapter 2 - Driving While Impaired",
    url: HB_URL,
  },
  {
    key: "dwi-first-conviction",
    quote:
      "First conviction: Mandatory revocation of your driver license " +
      "for a period of one year.",
    source: HB,
    section: "Chapter 2 - If you are convicted of DWI",
    url: HB_URL,
  },
  {
    key: "dwi-second-conviction",
    quote:
      "Second conviction: Mandatory driver license revocation for a " +
      "period of four years when convicted of a prior offense which " +
      "occurred within three years of the current offense for which " +
      "the license is being revoked.",
    source: HB,
    section: "Chapter 2 - If you are convicted of DWI",
    url: HB_URL,
  },
  {
    key: "dwi-third-conviction",
    quote:
      "Third conviction: Mandatory, permanent driver license " +
      "revocation if at least one of the prior convictions occurred " +
      "within the past five years.",
    source: HB,
    section: "Chapter 2 - If you are convicted of DWI",
    url: HB_URL,
  },
  {
    key: "bac-restriction-restoration",
    quote:
      "On the first restoration, the alcohol concentration " +
      "restriction will be 0.04. On a second or subsequent " +
      "restoration, the alcohol concentration restriction will be " +
      "0.00.",
    source: HB,
    section: "Chapter 2 - Blood Alcohol Concentration Restrictions",
    url: HB_URL,
  },
  {
    key: "ignition-interlock-015",
    quote:
      "Furthermore, a conviction of Driving While Impaired with a BAC " +
      "of 0.15 or more, or another conviction within the past seven " +
      "years, will require an ignition interlock device to be " +
      "installed on the vehicle.",
    source: HB,
    section: "Chapter 2 - Blood Alcohol Concentration Restrictions",
    url: HB_URL,
  },
  {
    key: "open-container",
    quote:
      "Prohibit the transport of an open container of any alcoholic " +
      "beverage, including in the passenger area of the car;",
    source: HB,
    section: "Chapter 2 - DWI Laws",
    url: HB_URL,
  },
  {
    key: "under-21-any-amount",
    quote:
      "If a driver who is less than 21 years old is convicted for an " +
      "offense of driving with any amount of alcohol or drugs in " +
      "their body, their license will be revoked for one year.",
    source: HB,
    section: "Chapter 2 - Alcohol and the Young Driver",
    url: HB_URL,
  },
  {
    key: "underage-purchase-revocation",
    quote:
      "The law requires a one-year driver license revocation upon " +
      "conviction for: • Any underage person who attempts to purchase " +
      "or purchases an alcoholic beverage;",
    source: HB,
    section: "Chapter 2 - Alcohol and the Young Driver",
    url: HB_URL,
  },
  {
    key: "only-time-sobers",
    quote:
      "The only thing that sobers up a drinker is time. Coffee, a big " +
      "meal or cold showers will not work.",
    source: HB,
    section: "Chapter 4 - Alcohol",
    url: HB_URL,
  },
  {
    key: "points-seven-clinic",
    quote:
      "If you accumulate seven points, you may be assigned to a " +
      "driver improvement clinic. The clinic fee is $83.50. Upon " +
      "satisfactory completion of the clinic, three points are " +
      "deducted from your driving record.",
    source: HB,
    section: "Chapter 3 - Driver License Points",
    url: HB_URL,
  },
  {
    key: "points-twelve-suspension",
    quote:
      "If you accumulate as many as 12 points within a three-year " +
      "period, your license may be suspended. The accumulation of " +
      "eight points within three years following the reinstatement of " +
      "your license can result in a second suspension.",
    source: HB,
    section: "Chapter 3 - Driver License Points",
    url: HB_URL,
  },
  {
    key: "points-cancelled-on-reinstatement",
    quote:
      "When your driving privilege is reinstated, all previous driver " +
      "license points are canceled. This does not pertain to " +
      "insurance points.",
    source: HB,
    section: "Chapter 3 - Driver License Points",
    url: HB_URL,
  },
  {
    key: "suspension-two-speeding",
    quote:
      "Two convictions of speeding over 55 mph within a period of 12 " +
      "months;",
    source: HB,
    section: "Chapter 3 - Suspensions",
    url: HB_URL,
  },
  {
    key: "revoke-30-days-15-over",
    quote:
      "Driving any vehicle more than 15 miles per hour over the speed " +
      "limit, if you are driving at a speed higher than 55 mph.",
    source: HB,
    section: "Chapter 3 - Suspensions",
    url: HB_URL,
  },
  {
    key: "appeal-30-days-superior",
    quote:
      "If you believe your driving privilege should not have been " +
      "revoked and the hearing gives you no help, you may appeal the " +
      "DMV's decision within 30 days to the Superior Court of the " +
      "county where you live.",
    source: HB,
    section: "Chapter 3 - Suspensions",
    url: HB_URL,
  },
  {
    key: "restoration-fee-dwi",
    quote:
      "A $167.25 restoration fee is required when the revocation " +
      "results from a DWI conviction.",
    source: HB,
    section: "Chapter 3 - Driver License Restoration",
    url: HB_URL,
  },
  {
    key: "seat-belt-all-occupants",
    quote:
      "The driver and all passengers in a motor vehicle manufactured " +
      "with seat belts shall have a seat belt properly fastened about " +
      "their body at all times when the vehicle is in forward motion " +
      "on a street or highway in this state.",
    source: HB,
    section: "Chapter 4 - Seat Belts",
    url: HB_URL,
  },
  {
    key: "child-restraint-under-16",
    quote:
      "Every driver transporting one or more passengers younger than " +
      "16 years of age must make sure that each passenger under age " +
      "16 is properly secured in a child passenger restraint system " +
      "or a seat belt which meets the federal safety standards that " +
      "were in effect at the time it was manufactured.",
    source: HB,
    section: "Chapter 4 - Child Seats",
    url: HB_URL,
  },
  {
    key: "child-restraint-8-and-80",
    quote:
      "A child under age 8 and weighing less than 80 pounds must be " +
      "properly secured in a weight appropriate child passenger " +
      "restraint system.",
    source: HB,
    section: "Chapter 4 - Child Seats",
    url: HB_URL,
  },
  {
    key: "child-rear-seat-airbag",
    quote:
      "If the vehicle is equipped with an active passenger-side front " +
      "air bag and the vehicle has a rear seat, then a child under " +
      "age 5 and weighing less than 40 pounds must be properly " +
      "secured in the rear seat unless the child restraint system is " +
      "designed for use with a front air bag system.",
    source: HB,
    section: "Chapter 4 - Child Seats",
    url: HB_URL,
  },
  {
    key: "child-12-and-under-rear",
    quote:
      "Children age 12 and under should ride buckled up in a rear seat;",
    source: HB,
    section: "Chapter 4 - Child Safety Points",
    url: HB_URL,
  },
  {
    key: "airbag-200-mph",
    quote:
      "To do its important job, an air bag comes out of the dashboard " +
      "at up to 200 miles per hour - faster than the blink of an eye.",
    source: HB,
    section: "Chapter 4 - Children and Air Bags",
    url: HB_URL,
  },
  {
    key: "helmet-law",
    quote:
      "All operators and passengers on motorcycles and mopeds must " +
      "wear a motorcycle safety helmet of a type that complies with " +
      "Federal Motor Vehicle Safety Standard (FMVSS) 218.",
    source: HB,
    section: "Chapter 4 - North Carolina Motorcycle Safety Helmet Law",
    url: HB_URL,
  },
  {
    key: "pickup-bed-fine",
    quote:
      "Violators are issued tickets and are subject to a fine of $25. " +
      "Violations of this law are defined as \"infractions\" and do " +
      "not incur court costs, driver license points or insurance " +
      "surcharges.",
    source: HB,
    section: "Chapter 4 - Law on Transporting Children in the Back of a Pick-up Truck",
    url: HB_URL,
  },
  {
    key: "belt-exemption-20-mph",
    quote:
      "A driver or passenger frequently stopping and leaving the " +
      "vehicle or delivering property from the vehicle if the speed " +
      "of the vehicle between stops does not exceed 20 miles per " +
      "hour;",
    source: HB,
    section: "Chapter 4 - Exemptions to the seat belt law",
    url: HB_URL,
  },
  {
    key: "under-18-no-cell-phone",
    quote:
      "Drivers less than 18 years of age are not permitted to use a " +
      "cell phone or any additional technology associated with a cell " +
      "phone while operating a motor vehicle on a public street or " +
      "highway or public vehicular area while the vehicle is in " +
      "motion.",
    source: HB,
    section: "Chapter 4 - Cell Phones",
    url: HB_URL,
  },
  {
    key: "pedestrian-unmarked-crosswalk",
    quote:
      "At intersections without traffic signals, pedestrians have the " +
      "right of way if they are in marked crosswalks or in unmarked " +
      "crosswalks formed by imaginary lines extending from the " +
      "sidewalks across the streets;",
    source: HB,
    section: "Chapter 4 - The Driver and Pedestrian",
    url: HB_URL,
  },
  {
    key: "pedestrian-complete-crossing",
    quote:
      "If a traffic signal changes to yellow or red while any " +
      "pedestrian remains in the street, drivers must allow the " +
      "pedestrian to complete the crossing safely.",
    source: HB,
    section: "Chapter 4 - The Driver and Pedestrian",
    url: HB_URL,
  },
  {
    key: "blind-pedestrian-cane",
    quote:
      "The law gives a blind pedestrian special consideration at an " +
      "intersection where there are no traffic signals when the " +
      "pedestrian extends a white cane, or a white cane with a red " +
      "tip or has a guide dog.",
    source: HB,
    section: "Chapter 4 - The Driver and Pedestrian",
    url: HB_URL,
  },
  {
    key: "horn-for-pedestrian",
    quote:
      "The law requires drivers to use the horn whenever a pedestrian " +
      "may be affected by a turn, stop or start from a parked " +
      "position. If the pedestrian does not stop, the driver must.",
    source: HB,
    section: "Chapter 4 - The Driver and Pedestrian",
    url: HB_URL,
  },
  {
    key: "school-bus-speed-45",
    quote:
      "The maximum speed limit for a school bus is 45 mph.",
    source: HB,
    section: "Chapter 4 - School Buses",
    url: HB_URL,
  },
  {
    key: "school-bus-stop-rule",
    quote:
      "the driver of any other vehicle approaching the school bus " +
      "must stop and not attempt to pass the school bus until the " +
      "mechanical stop signal is withdrawn, the flashing red lights " +
      "are turned off and the bus has started to move.",
    source: HB,
    section: "Chapter 4 - School Buses",
    url: HB_URL,
  },
  {
    key: "school-bus-two-lane",
    quote:
      "Two-lane roadway: When school bus stops for passengers, all " +
      "traffic from both directions must stop.",
    source: HB,
    section: "Chapter 4 - School Buses",
    url: HB_URL,
  },
  {
    key: "school-bus-four-lane-turning",
    quote:
      "Roadway of four lanes or more with a center turning lane: When " +
      "school bus stops for passengers, only traffic following the " +
      "bus must stop.",
    source: HB,
    section: "Chapter 4 - School Buses",
    url: HB_URL,
  },
  {
    key: "school-bus-divided-median",
    quote:
      "Divided highway of four lanes or more with a median " +
      "separation: When school bus stops for passengers, only traffic " +
      "following the bus must stop.",
    source: HB,
    section: "Chapter 4 - School Buses",
    url: HB_URL,
  },
  {
    key: "emergency-pull-right-stop",
    quote:
      "As the emergency vehicle approaches (from ahead or behind), " +
      "drive to the right-hand curb or edge of the road and stop " +
      "completely;",
    source: HB,
    section: "Chapter 4 - Emergency and Law Enforcement Vehicles",
    url: HB_URL,
  },
  {
    key: "emergency-100-feet",
    quote:
      "Do not park within 100 feet of an emergency vehicle that has " +
      "stopped to investigate an accident or to give assistance;",
    source: HB,
    section: "Chapter 4 - Emergency and Law Enforcement Vehicles",
    url: HB_URL,
  },
  {
    key: "emergency-fire-hose",
    quote:
      "Never drive a motor vehicle over a fire hose.",
    source: HB,
    section: "Chapter 4 - Emergency and Law Enforcement Vehicles",
    url: HB_URL,
  },
  {
    key: "emergency-divided-exception",
    quote:
      "All vehicles, regardless of direction of travel, must yield " +
      "right of way to an approaching emergency vehicle. This does " +
      "not apply to vehicles traveling in the opposite direction of " +
      "the emergency vehicle(s) when traveling on a four-lane " +
      "limited-access highway with a center median.",
    source: HB,
    section: "Chapter 4 - Emergency and Law Enforcement Vehicles",
    url: HB_URL,
  },
  {
    key: "move-over-12-feet",
    quote:
      "On a highway with at least two lanes of traffic in the same " +
      "direction you are traveling, you must move your vehicle into a " +
      "lane that is not the lane nearest the parked or standing " +
      "emergency vehicle and continue traveling in that lane until " +
      "safely clear of the emergency vehicle.",
    source: HB,
    section: "Chapter 4 - Move Over",
    url: HB_URL,
  },
  {
    key: "move-over-fine",
    quote:
      "Failure to do so could result in a $250 fine, and violators " +
      "could also face misdemeanor or felony charges, if someone is " +
      "injured or property is damaged.",
    source: MOVEOVER,
    section: "Move Over Law",
    url: MOVEOVER_URL,
  },
  {
    key: "farm-equipment-no-interstate",
    quote:
      "Farm equipment is legally entitled to travel on most roads in " +
      "North Carolina, except interstates.",
    source: HB,
    section: "Chapter 4 - Safe Driving Around Farm Equipment",
    url: HB_URL,
  },
  {
    key: "farm-left-signal-mistake",
    quote:
      "In some cases, a machinery operator uses a left-hand signal, " +
      "and drivers may mistake this as a sign for them to pass.",
    source: HB,
    section: "Chapter 4 - Safe Driving Around Farm Equipment",
    url: HB_URL,
  },
  {
    key: "funeral-green-light",
    quote:
      "When a funeral procession is proceeding through a red light, " +
      "the driver of a vehicle that is not in the procession shall " +
      "not enter the intersection even if facing a green light, " +
      "unless it can be done safely and without crossing the path of " +
      "the procession.",
    source: HB,
    section: "Chapter 4 - Funeral Processions",
    url: HB_URL,
  },
  {
    key: "drive-right-side",
    quote:
      "The law requires you to drive on the right side of the road. " +
      "Driving on the left side is legal only in some cases, such as " +
      "on one-way streets and while passing.",
    source: HB,
    section: "Chapter 4 - Driving on Your Side of the Road",
    url: HB_URL,
  },
  {
    key: "stop-distance-55",
    quote:
      "Even with ideal conditions, if you are traveling 55 miles per " +
      "hour your vehicle requires approximately 211 feet to stop " +
      "completely.",
    source: HB,
    section: "Chapter 4 - Adjusting Your Speed to Driving Conditions",
    url: HB_URL,
  },
  {
    key: "city-limit-35",
    quote:
      "Unless otherwise posted, the speed limit is 35 mph in cities " +
      "and towns.",
    source: HB,
    section: "Chapter 4 - Adjusting Your Speed to Driving Conditions",
    url: HB_URL,
  },
  {
    key: "max-speed-table",
    quote:
      "Maximum Speed Limits In cities and towns 35 For school buses " +
      "45 For school activity buses 55 Outside cities and towns 55 " +
      "For interstates 70",
    source: HB,
    section: "Chapter 4 - Maximum Speed Limits",
    url: HB_URL,
  },
  {
    key: "two-second-rule",
    quote:
      "The \"two-second rule\" says that you should allow two seconds " +
      "between the time the vehicle ahead of you passes a given point " +
      "and the time your vehicle reaches the same point.",
    source: HB,
    section: "Chapter 4 - The Two-Second Rule",
    url: HB_URL,
  },
  {
    key: "slow-driver-risk",
    quote:
      "Studies show that the vehicle moving at a speed considerably " +
      "below the posted limit is much more likely to cause or be " +
      "involved in a crash than the vehicle moving at a normal speed.",
    source: HB,
    section: "Chapter 4 - Adjusting Your Speed to Driving Conditions",
    url: HB_URL,
  },
  {
    key: "changing-lanes-blind-spot",
    quote:
      "Important rules about changing lanes: • Check the side and " +
      "rear-view mirrors; • Check over your shoulder to be certain " +
      "the blind spot is clear; • Signal your intended movement in " +
      "advance; and • Proceed with changing lanes.",
    source: HB,
    section: "Chapter 4 - Important rules about changing lanes",
    url: HB_URL,
  },
  {
    key: "passing-blow-horn",
    quote:
      "1. Look ahead and behind to determine when it is safe to pass. " +
      "2. If it is safe to pass, signal to alert the drivers ahead " +
      "and behind you of your intention so they can plan their moves " +
      "accordingly. 3. Blow the horn to signal the driver ahead.",
    source: HB,
    section: "Chapter 4 - Passing",
    url: HB_URL,
  },
  {
    key: "passing-horn-obligation",
    quote:
      "The horn signal places the driver of the vehicle you are " +
      "passing under a legal obligation to help you pass.",
    source: HB,
    section: "Chapter 4 - Passing",
    url: HB_URL,
  },
  {
    key: "passing-two-feet",
    quote:
      "The law requires the passing driver to pass at least two feet " +
      "to the left of the vehicle being passed. You have not passed " +
      "safely if the vehicle you have passed must slow down to allow " +
      "you back into your correct lane.",
    source: HB,
    section: "Chapter 4 - Passing",
    url: HB_URL,
  },
  {
    key: "passing-500-feet",
    quote:
      "On any curve or hill where the driver cannot see at least 500 " +
      "feet ahead;",
    source: HB,
    section: "Chapter 4 - Places where passing is always unsafe and usually illegal",
    url: HB_URL,
  },
  {
    key: "passing-on-right-illegal",
    quote:
      "Passing on the right is against the law except in areas where " +
      "it is specifically permitted. Passing on the right places your " +
      "vehicle on the blind side of the vehicle you are passing.",
    source: HB,
    section: "Chapter 4 - Passing on the right",
    url: HB_URL,
  },
  {
    key: "passing-right-exceptions",
    quote:
      "Exceptions where passing on the right is allowed: • On " +
      "highways having at least two lanes traveling in each " +
      "direction; • On one-way streets where all lanes of traffic " +
      "move in the same direction; • When passing a vehicle that is " +
      "in the left-turn lane; and/or • When driving in a lane set " +
      "aside for right turns.",
    source: HB,
    section: "Chapter 4 - Exceptions where passing on the right is allowed",
    url: HB_URL,
  },
  {
    key: "three-lane-passing",
    quote:
      "On three-lane highways, you must not pass except in the center " +
      "lane, and then only where the center lane is marked for " +
      "passing in your direction.",
    source: HB,
    section: "Chapter 4 - Passing",
    url: HB_URL,
  },
  {
    key: "being-passed-duty",
    quote:
      "When you are being passed, you are required to help the other " +
      "driver to pass. If the driver of the passing vehicle blows the " +
      "horn, move to the right edge of the road. Never increase your " +
      "speed.",
    source: HB,
    section: "Chapter 4 - When your vehicle is being passed",
    url: HB_URL,
  },
  {
    key: "backing-10-mph",
    quote:
      "Back very slowly, not more than 10 mph - your vehicle is " +
      "harder to control and to stop when it is backing.",
    source: HB,
    section: "Chapter 4 - Rules to follow when backing your vehicle",
    url: HB_URL,
  },
  {
    key: "park-right-side",
    quote:
      "Always park on the right side of the road, except on one-way " +
      "streets.",
    source: HB,
    section: "Chapter 4 - Parking",
    url: HB_URL,
  },
  {
    key: "park-signal-before-pulling-out",
    quote:
      "Before pulling out from a parallel parking space, check for " +
      "approaching traffic and give a left-turn signal, unless you " +
      "are parked on the left side of a one-way street.",
    source: HB,
    section: "Chapter 4 - Parking",
    url: HB_URL,
  },
  {
    key: "park-25-feet-intersection",
    quote:
      "Within 25 feet of the curb line of an intersecting street or " +
      "within 15 feet of the intersecting right of way lines if there " +
      "is no curb;",
    source: HB,
    section: "Chapter 4 - Places where you should not park",
    url: HB_URL,
  },
  {
    key: "park-15-feet-hydrant",
    quote:
      "Within 15 feet of a fire hydrant or entrance to a fire station;",
    source: HB,
    section: "Chapter 4 - Places where you should not park",
    url: HB_URL,
  },
  {
    key: "park-shoulder-200-feet",
    quote:
      "On the paved or primary-travel portion of any highway - " +
      "parking on the shoulder is also against the law unless the " +
      "parked vehicle can be seen by approaching drivers from both " +
      "directions for a distance of at least 200 feet;",
    source: HB,
    section: "Chapter 4 - Places where you should not park",
    url: HB_URL,
  },
  {
    key: "park-fire-block-400",
    quote:
      "Within one block of a fire or fire truck in city limits or " +
      "within 400 feet of a fire or fire truck outside the city;",
    source: HB,
    section: "Chapter 4 - Places where you should not park",
    url: HB_URL,
  },
  {
    key: "park-interstate-rightofway",
    quote:
      "Anywhere within the right of way of an interstate highway, " +
      "except in designated parking areas or in cases of emergencies; " +
      "and",
    source: HB,
    section: "Chapter 4 - Places where you should not park",
    url: HB_URL,
  },
  {
    key: "park-double-parking",
    quote:
      "On the roadway side of another vehicle (double parking);",
    source: HB,
    section: "Chapter 4 - Places where you should not park",
    url: HB_URL,
  },
  {
    key: "median-30-feet",
    quote:
      "On four-lane highways separated by a median of more than 30 " +
      "feet, each crossing constitutes a separate intersection.",
    source: HB,
    section: "Chapter 4 - Special Driving Situations",
    url: HB_URL,
  },
  {
    key: "uncontrolled-already-in",
    quote:
      "The vehicle already in the intersection has the right of way " +
      "ahead of any vehicle that has not yet entered;",
    source: HB,
    section: "Chapter 4 - In intersections without traffic signs or signals",
    url: HB_URL,
  },
  {
    key: "uncontrolled-vehicle-right",
    quote:
      "When two or more vehicles reach an intersection at the same " +
      "time, the vehicle to the right has the right of way;",
    source: HB,
    section: "Chapter 4 - In intersections without traffic signs or signals",
    url: HB_URL,
  },
  {
    key: "facing-left-turn-yields",
    quote:
      "If one driver is going straight while the other wants to turn " +
      "left, the driver who wants to turn must wait. The driver who " +
      "wants to turn left must give the proper signal and wait until " +
      "the turn can be made safely.",
    source: HB,
    section: "Chapter 4 - Special Driving Situations",
    url: HB_URL,
  },
  {
    key: "no-lane-change-in-intersection",
    quote:
      "Never change lanes while you are moving straight ahead through " +
      "an intersection.",
    source: HB,
    section: "Chapter 4 - Special Driving Situations",
    url: HB_URL,
  },
  {
    key: "stop-sign-yield-through",
    quote:
      "When you approach an intersection with a stop sign, you must " +
      "come to a complete stop and yield to the traffic on the " +
      "through-street.",
    source: HB,
    section: "Chapter 4 - Right-of-Way at Intersections",
    url: HB_URL,
  },
  {
    key: "private-driveway-yield",
    quote:
      "When exiting a private driveway, stop and yield to all other " +
      "vehicles and pedestrians.",
    source: HB,
    section: "Chapter 4 - Right-of-Way at Intersections",
    url: HB_URL,
  },
  {
    key: "roundabout-yield",
    quote:
      "Drivers yield to any vehicles or bicyclists already in the " +
      "roundabout.",
    source: HB,
    section: "Chapter 4 - Roundabouts",
    url: HB_URL,
  },
  {
    key: "roundabout-speed",
    quote:
      "In addition, the modern roundabout is much smaller than older " +
      "traffic circles and requires vehicles to travel at lower " +
      "speeds (15-20 mph), making them safer than traffic circles.",
    source: HB,
    section: "Chapter 4 - Roundabouts",
    url: HB_URL,
  },
  {
    key: "roundabout-emergency-vehicle",
    quote:
      "Never enter a roundabout while an emergency vehicle using " +
      "flashing lights and sirens is passing through. If drivers are " +
      "already in the roundabout, exit first, then pull over to let " +
      "the emergency vehicle pass.",
    source: HB,
    section: "Chapter 4 - Roundabouts",
    url: HB_URL,
  },
  {
    key: "railroad-stop-50-15",
    quote:
      "the driver of the vehicle shall stop within 50 feet, but not " +
      "less than 15 feet from the nearest rail of the railroad and " +
      "shall not proceed until he/she can do so safely.",
    source: HB,
    section: "Chapter 4 - G.S. 20-142.1 Obedience to railroad signal",
    url: HB_URL,
  },
  {
    key: "railroad-train-priority",
    quote:
      "Trains have the right-of-way over all highway traffic " +
      "including police, fire and ambulance emergency vehicles.",
    source: HB,
    section: "Chapter 4 - Railroad Crossing Safety",
    url: HB_URL,
  },
  {
    key: "railroad-keep-moving",
    quote:
      "If you happen to be crossing the tracks and the warning lights " +
      "begin flashing or gates start to come down, do not stop, do " +
      "not backup, KEEP MOVING.",
    source: HB,
    section: "Chapter 4 - Remember these railroad crossing rules",
    url: HB_URL,
  },
  {
    key: "railroad-stalled-get-out",
    quote:
      "If your vehicle stalls on or near the tracks GET OUT IMMEDIATELY.",
    source: HB,
    section: "Chapter 4 - Railroad related emergencies",
    url: HB_URL,
  },
  {
    key: "one-way-street-lanes",
    quote:
      "On a one-way street, use the center lane(s) for through-travel " +
      "and the outside lanes for turning.",
    source: HB,
    section: "Chapter 4 - City Driving",
    url: HB_URL,
  },
  {
    key: "high-beam-200-feet",
    quote:
      "When you engage the high-beam headlights at night, you should " +
      "be able to see a person who is 200 feet away. When using the " +
      "low-beam headlights, you should be able to see someone who is " +
      "75 feet away.",
    source: HB,
    section: "Chapter 4 - Lights",
    url: HB_URL,
  },
  {
    key: "taillights-500-feet",
    quote:
      "Taillights must be red in color and visible for at least 500 feet.",
    source: HB,
    section: "Chapter 4 - Lights",
    url: HB_URL,
  },
  {
    key: "tire-tread-1-16",
    quote:
      "Tires are considered unsafe if they are cut, cracked or worn " +
      "so as to expose the tire cord, or when they have visible tread " +
      "separation, chunking or less than 1/16-inch-tread depth.",
    source: HB,
    section: "Chapter 4 - Tires",
    url: HB_URL,
  },
  {
    key: "abs-no-pumping",
    quote:
      "With ABS, it is important to brake hard and keep firm and " +
      "steady pressure on the brake pedal while stopping. Pumping the " +
      "brake pedal or releasing the steady pressure on the brake " +
      "pedal will reduce the effectiveness of the ABS.",
    source: HB,
    section: "Chapter 4 - Anti-lock Braking System",
    url: HB_URL,
  },
  {
    key: "scanning-10-15-seconds",
    quote:
      "Good drivers try to see 10 to 15 seconds ahead on the roadway " +
      "(about one city block).",
    source: HB,
    section: "Chapter 4 - Scanning",
    url: HB_URL,
  },
  {
    key: "signal-100-200-feet",
    quote:
      "Signal at least the last 100 feet before turning or stopping. " +
      "If the speed limit is 45 mph or more, signal at least the last " +
      "200 feet before turning.",
    source: HB,
    section: "Chapter 4 - Flashing Turn Signals",
    url: HB_URL,
  },
  {
    key: "work-zone-penalty-sign",
    quote:
      "There is a penalty for speeding in a work zone if a sign is " +
      "posted at the beginning of the work zone listing the penalty. " +
      "This penalty is in addition to any other penalties for the " +
      "speeding conviction.",
    source: HB,
    section: "Chapter 4 - Work Zones",
    url: HB_URL,
  },
  {
    key: "work-zone-orange",
    quote:
      "The orange signs with messages in black letters are reserved " +
      "strictly to identify work zones.",
    source: HB,
    section: "Chapter 4 - Work Zones",
    url: HB_URL,
  },
  {
    key: "headlights-sunset-400-feet",
    quote:
      "The law requires use of headlights from sunset to sunrise and " +
      "when visibility is 400 feet or less.",
    source: HB,
    section: "Chapter 4 - Night Driving",
    url: HB_URL,
  },
  {
    key: "wipers-headlights-law",
    quote:
      "All North Carolina motorists are required to use headlights " +
      "whenever they are using windshield wipers due to inclement " +
      "weather.",
    source: HB,
    section: "Chapter 4 - Windshield Wipers/Headlights",
    url: HB_URL,
  },
  {
    key: "rain-five-to-ten-slower",
    quote:
      "Drive at least five to 10 miles per hour slower on wet " +
      "pavement than you would on dry pavement.",
    source: HB,
    section: "Chapter 4 - Rain",
    url: HB_URL,
  },
  {
    key: "hydroplane-30-mph",
    quote:
      "Hydroplaning can start at speeds as low as 30 miles per hour " +
      "and in water little more than 1/8 inch deep.",
    source: HB,
    section: "Chapter 4 - Hydroplaning",
    url: HB_URL,
  },
  {
    key: "hydroplane-response",
    quote:
      "If you do begin to hydroplane, take your foot off the gas " +
      "pedal. Resist your instinct to use the brakes. Keep your " +
      "steering wheel straight and let the car's momentum decrease " +
      "until the tires grip the road again and you regain control.",
    source: HB,
    section: "Chapter 4 - Hydroplaning",
    url: HB_URL,
  },
  {
    key: "flood-six-twelve-inches",
    quote:
      "There have been reports that six inches of fast moving water " +
      "can sweep a car off the highway and 12 inches of fast moving " +
      "water can float a car or cause it to turn over.",
    source: HB,
    section: "Chapter 4 - Driving in Flood Conditions",
    url: HB_URL,
  },
  {
    key: "snow-halve-speed",
    quote:
      "It is recommended that you reduce speed by more than half for " +
      "packed snow and slow to a crawl on ice.",
    source: HB,
    section: "Chapter 4 - Snow and Ice",
    url: HB_URL,
  },
  {
    key: "snow-three-times-distance",
    quote:
      "Allow at least three times the normal stopping distance to " +
      "slow down;",
    source: HB,
    section: "Chapter 4 - Snow and Ice",
    url: HB_URL,
  },
  {
    key: "brake-failure-response",
    quote:
      "Shift into a lower gear, release the clutch pedal (for manual " +
      "transmissions) and apply the emergency brake.",
    source: HB,
    section: "Chapter 4 - Brake Failure",
    url: HB_URL,
  },
  {
    key: "blowout-response",
    quote:
      "If a blowout occurs: • Hold the steering wheel tightly and try " +
      "to keep the vehicle straight on your side of the road; • " +
      "Reduce speed by lifting your foot from the accelerator;",
    source: HB,
    section: "Chapter 4 - If a blowout occurs",
    url: HB_URL,
  },
  {
    key: "breakdown-passenger-side",
    quote:
      "Make sure you leave the vehicle by the passenger side, and do " +
      "not allow passengers to remain in the vehicle;",
    source: HB,
    section: "Chapter 4 - What you should do if your vehicle breaks down",
    url: HB_URL,
  },
  {
    key: "head-on-keep-right",
    quote:
      "An approaching vehicle that crosses the center line into the " +
      "path of your vehicle is a danger. You should: • Reduce speed " +
      "immediately; • Sound your horn; and",
    source: HB,
    section: "Chapter 4 - Unusual Emergencies",
    url: HB_URL,
  },
  {
    key: "off-pavement-response",
    quote:
      "Tips to follow if your vehicle runs off the pavement and onto " +
      "the shoulder: • Do not immediately apply the brakes or try to " +
      "turn back; you could skid, lose control or overturn; • Slowly " +
      "remove your foot from the accelerator and steer straight " +
      "ahead;",
    source: HB,
    section: "Chapter 4 - Unusual Emergencies",
    url: HB_URL,
  },
  {
    key: "skid-steer-into",
    quote:
      "If you find yourself in a skid: • Ease your foot off the " +
      "accelerator; • Turn the steering wheel in the direction the " +
      "rear of the vehicle is skidding; and • As soon as the " +
      "vehicle's path begins to straighten, turn the steering wheel " +
      "back the other way so you will not over-steer.",
    source: HB,
    section: "Chapter 4 - If you find yourself in a skid",
    url: HB_URL,
  },
  {
    key: "rear-end-about-to-be-hit",
    quote:
      "If you are about to be hit from the rear, and there are no " +
      "vehicles in front of you: • Press the accelerator and move " +
      "away as quickly as possible; • Be ready to apply your brakes " +
      "if there is no room to move;",
    source: HB,
    section: "Chapter 4 - Crashes",
    url: HB_URL,
  },
  {
    key: "crash-must-stop",
    quote:
      "You must stop the vehicle immediately. If you do not stop, you " +
      "have violated the law;",
    source: HB,
    section: "Chapter 4 - In the event you are involved in a crash",
    url: HB_URL,
  },
  {
    key: "crash-report-1000",
    quote:
      "You are required by law to make an immediate report to the " +
      "nearest law enforcement officer or agency of any crash when " +
      "any person is killed or injured or the total damage to " +
      "vehicles and other property appears to amount to $1,000 or " +
      "more.",
    source: HB,
    section: "Chapter 4 - Crashes",
    url: HB_URL,
  },
  {
    key: "crash-move-vehicles",
    quote:
      "each vehicle should be moved out of the travel lane onto the " +
      "shoulder of the road provided it can be driven safely under " +
      "its own power and without causing further damage to the " +
      "vehicle, other traffic or the roadway.",
    source: HB,
    section: "Chapter 4 - In the event you are involved in a crash",
    url: HB_URL,
  },
  {
    key: "good-samaritan",
    quote:
      "The law protects persons who stop and render aid at the scene " +
      "of an accident from civil liability except for intentional " +
      "wrongdoing or unruly conduct.",
    source: HB,
    section: "Chapter 4 - Crashes",
    url: HB_URL,
  },
  {
    key: "circular-green",
    quote:
      "A circular green signal means you are permitted to proceed " +
      "cautiously straight through or make a turn. Turning vehicles " +
      "must yield the right of way to oncoming traffic and " +
      "pedestrians.",
    source: HB,
    section: "Chapter 5 - Traffic Signals",
    url: HB_URL,
  },
  {
    key: "circular-yellow",
    quote:
      "A circular yellow signal means \"caution\" and indicates that " +
      "the signal is about to turn red. Stop for a yellow signal " +
      "unless you are too close to the intersection to stop safely - " +
      "in that case, drive cautiously through the intersection. Never " +
      "speed up for a yellow signal to \"beat\" the red signal.",
    source: HB,
    section: "Chapter 5 - Traffic Signals",
    url: HB_URL,
  },
  {
    key: "steady-red-right-turn",
    quote:
      "A steady red circular signal means \"STOP.\" Unless there is a " +
      "sign indicating \"NO TURN ON RED,\" a right turn can be made " +
      "after coming to a complete stop.",
    source: HB,
    section: "Chapter 5 - Traffic Signals",
    url: HB_URL,
  },
  {
    key: "right-on-red-pedestrian-fine",
    quote:
      "Failure to yield to a pedestrian under these circumstances " +
      "will result in a penalty of not more than $500 and not less " +
      "than $100.",
    source: HB,
    section: "Chapter 5 - Traffic Signals",
    url: HB_URL,
  },
  {
    key: "green-arrow",
    quote:
      "A green arrow means that you have a \"protected\" movement and " +
      "are permitted to cautiously enter the intersection to make the " +
      "movement indicated by the arrow.",
    source: HB,
    section: "Chapter 5 - Traffic Signals",
    url: HB_URL,
  },
  {
    key: "red-arrow",
    quote:
      "A red arrow means turning traffic must stop.",
    source: HB,
    section: "Chapter 5 - Traffic Signals",
    url: HB_URL,
  },
  {
    key: "yellow-arrow",
    quote:
      "A yellow arrow indicates that the \"protected\" green arrow " +
      "signal is about to turn to a regular circular green signal, " +
      "circular red signal or red arrow signal.",
    source: HB,
    section: "Chapter 5 - Traffic Signals",
    url: HB_URL,
  },
  {
    key: "flashing-yellow-arrow",
    quote:
      "Flashing Yellow Arrow: Turns are allowed, but first they must " +
      "yield to oncoming traffic and pedestrians.",
    source: HB,
    section: "Chapter 5 - Flashing Yellow Arrow Traffic Signal Heads",
    url: HB_URL,
  },
  {
    key: "dark-signal-four-way-stop",
    quote:
      "When approaching an intersection with a traffic light that has " +
      "malfunctioned due to a power outage or some other problem, you " +
      "should approach the intersection and proceed as though the " +
      "intersection is controlled by a stop sign on all approaches to " +
      "the intersection.",
    source: HB,
    section: "Chapter 5 - Traffic Signals",
    url: HB_URL,
  },
  {
    key: "flashing-red-yellow",
    quote:
      "The flashing red signal has the same meaning as the stop sign: " +
      "stop and do not proceed to move until you can enter the " +
      "intersection without interfering with approaching traffic. The " +
      "flashing yellow signal has the same meaning as a warning sign. " +
      "Slow down and proceed with caution.",
    source: HB,
    section: "Chapter 5 - Flashing Signals",
    url: HB_URL,
  },
  {
    key: "ramp-meter-dark",
    quote:
      "When the display is dark or not emitting a red or green " +
      "display, a vehicle may proceed without stopping and enter the " +
      "freeway by merging or yielding as normal conditions allow.",
    source: HB,
    section: "Chapter 5 - Ramp Meter Traffic Signals",
    url: HB_URL,
  },
  {
    key: "hybrid-beacon-flashing-red",
    quote:
      "After several seconds, the beacons will begin flashing red, " +
      "during which time vehicles are to remain stopped until the " +
      "pedestrians or emergency response vehicles have cleared the " +
      "intersection.",
    source: HB,
    section: "Chapter 5 - Hybrid Beacons",
    url: HB_URL,
  },
  {
    key: "hybrid-beacon-dark",
    quote:
      "The beacons remain dark until activated by pedestrians or " +
      "emergency response personnel.",
    source: HB,
    section: "Chapter 5 - Hybrid Beacons",
    url: HB_URL,
  },
  {
    key: "stop-sign-octagon",
    quote:
      "The eight-sided (or octagon) sign is the stop sign. The word " +
      "\"STOP\" is printed in white on a red background. The " +
      "octagonal shape is used for stop signs only.",
    source: HB,
    section: "Chapter 5 - Regulatory Signs",
    url: HB_URL,
  },
  {
    key: "stop-sign-placement",
    quote:
      "The stop sign is usually posted six to 50 feet from the " +
      "intersection.",
    source: HB,
    section: "Chapter 5 - Regulatory Signs",
    url: HB_URL,
  },
  {
    key: "stop-line-rule",
    quote:
      "When a stop sign, traffic light, flashing light or other " +
      "traffic-control device requires a vehicle to stop at an " +
      "intersection, the driver must stop at the appropriately marked " +
      "stop line.",
    source: HB,
    section: "Chapter 5 - Regulatory Signs",
    url: HB_URL,
  },
  {
    key: "stop-line-no-markings",
    quote:
      "If there is no stop line or marked crosswalk, the driver must " +
      "stop before entering the intersection where he/she has a view " +
      "of the intersecting street.",
    source: HB,
    section: "Chapter 5 - Regulatory Signs",
    url: HB_URL,
  },
  {
    key: "yield-sign",
    quote:
      "The yield sign is triangular shaped with the point at the " +
      "bottom. This sign is red and white with the word \"YIELD\" in " +
      "large letters at the top. When you approach the yield sign, " +
      "you must slow down and yield the right of way.",
    source: HB,
    section: "Chapter 5 - Regulatory Signs",
    url: HB_URL,
  },
  {
    key: "pennant-no-passing",
    quote:
      "The pennant-shaped yellow warning sign emphasizes, rather than " +
      "replaces, the rectangular regulatory \"DO NOT PASS\" sign. The " +
      "pennant is located on the left side of the road and points to " +
      "the beginning of the no-passing zone (solid yellow line in " +
      "your lane).",
    source: HB,
    section: "Chapter 5 - Warning Signs",
    url: HB_URL,
  },
  {
    key: "diamond-warning",
    quote:
      "Diamond-shaped signs are also caution or warning signs. They " +
      "are normally black on yellow, but when they are black on " +
      "orange, they warn of conditions for construction or " +
      "maintenance areas.",
    source: HB,
    section: "Chapter 5 - Warning Signs",
    url: HB_URL,
  },
  {
    key: "round-rr-sign",
    quote:
      "A circular sign, with a black cross and the black letters " +
      "\"RR\" on a yellow background, gives advance warning of a " +
      "railroad crossing.",
    source: HB,
    section: "Chapter 5 - Warning Signs",
    url: HB_URL,
  },
  {
    key: "crossbuck-multiple-tracks",
    quote:
      "If there are multiple tracks at the crossing, they are shown " +
      "on a sign below the crossbuck.",
    source: HB,
    section: "Chapter 5 - Warning Signs",
    url: HB_URL,
  },
  {
    key: "pentagon-school",
    quote:
      "The five-sided (or pentagon) sign warns of a school zone or a " +
      "school crossing. You should be especially watchful for " +
      "children in these areas. In many school zones, the speed limit " +
      "is reduced during certain school hours.",
    source: HB,
    section: "Chapter 5 - Warning Signs",
    url: HB_URL,
  },
  {
    key: "us-route-shield",
    quote:
      "Route markers for U.S. highways are in the shape of a shield.",
    source: HB,
    section: "Chapter 5 - Guide/Informational Signs",
    url: HB_URL,
  },
  {
    key: "nc-route-diamond",
    quote:
      "North Carolina route markers are diamond shaped.",
    source: HB,
    section: "Chapter 5 - Guide/Informational Signs",
    url: HB_URL,
  },
  {
    key: "blue-white-services",
    quote:
      "Signs indicating a nearby hospital, Highway Patrol station or " +
      "telephone are blue and white.",
    source: HB,
    section: "Chapter 5 - Guide/Informational Signs",
    url: HB_URL,
  },
  {
    key: "yellow-white-lines",
    quote:
      "Yellow lines separate travel lanes moving in opposite " +
      "directions. White lines separate travel lanes moving in the " +
      "same direction.",
    source: HB,
    section: "Chapter 5 - Pavement Markings",
    url: HB_URL,
  },
  {
    key: "double-solid-yellow",
    quote:
      "When continuous, double, solid, yellow lines are the center " +
      "lines, you cannot cross them to pass in either direction.",
    source: HB,
    section: "Chapter 5 - Pavement Markings",
    url: HB_URL,
  },
  {
    key: "two-way-left-turn-lane",
    quote:
      "The two-way left-turn lane must not be used for passing " +
      "another vehicle or for the purpose of merging into traffic.",
    source: HB,
    section: "Chapter 5 - Pavement Markings",
    url: HB_URL,
  },
  {
    key: "officer-overrides-signals",
    quote:
      "Under special circumstances, an officer may be directing the " +
      "flow of traffic. If so, obey the officer's hand signals " +
      "instead of the normal traffic signals or signs.",
    source: HB,
    section: "Chapter 5 - Traffic Officers",
    url: HB_URL,
  },
  {
    key: "bicycles-are-vehicles",
    quote:
      "Because bicycles are vehicles, bicyclists must obey the same " +
      "traffic laws as other drivers, this includes DWI laws.",
    source: HB,
    section: "Chapter 6 - Bicycles",
    url: HB_URL,
  },
  {
    key: "bicycle-full-lane",
    quote:
      "Motorists should expect to see bicyclists in the roadway and " +
      "understand that traffic operations may require bicyclists to " +
      "make use of the full travel lane.",
    source: HB,
    section: "Chapter 6 - Bicycles",
    url: HB_URL,
  },
  {
    key: "bicycle-pass-change-lanes",
    quote:
      "Drivers wishing to pass a bicyclist may do so only when there " +
      "is abundant clearance and no oncoming traffic is in the " +
      "opposing lane. The safest way to pass a bicyclist is to change " +
      "lanes.",
    source: HB,
    section: "Chapter 6 - Pass with Care",
    url: HB_URL,
  },
  {
    key: "bicycle-lights-300-200",
    quote:
      "At night, the law requires that a bicycle be equipped with a " +
      "light on the front visible for a distance of at least 300 feet " +
      "and a red light or reflector on the rear visible for a " +
      "distance of at least 200 feet.",
    source: HB,
    section: "Chapter 6 - Be Visible",
    url: HB_URL,
  },
  {
    key: "bicycle-helmet-under-16",
    quote:
      "All bicycle riders and passengers under age 16 must wear an " +
      "approved protective bicycle helmet and must be seated on a " +
      "saddle seat.",
    source: HB,
    section: "Chapter 6 - Bicycles",
    url: HB_URL,
  },
  {
    key: "truck-no-zones",
    quote:
      "20 feet in front of the cab, on either side of the " +
      "tractor-trailer, particularly alongside the cab, and up to 200 " +
      "feet in the rear (see diagram).",
    source: HB,
    section: "Chapter 6 - No-Zones",
    url: HB_URL,
  },
  {
    key: "truck-mirror-rule",
    quote:
      "A general rule for motorists sharing the road with a " +
      "tractor-trailer is, \"if you can't see the truck driver in " +
      "their side-view mirror, they can't see you.\"",
    source: HB,
    section: "Chapter 6 - No-Zones",
    url: HB_URL,
  },
  {
    key: "trailer-half-mile",
    quote:
      "Use extreme caution while passing a trailer and the towing " +
      "vehicle - it may take you a half mile of clear roadway to " +
      "safely pass.",
    source: HB,
    section: "Chapter 6 - Recreational Vehicles and Trailers",
    url: HB_URL,
  },
  {
    key: "motorcycle-full-lane",
    quote:
      "Motorcycles are entitled to the full width of their lane. To " +
      "pass a motorcycle, you must change lanes and pass in the same " +
      "manner as you would for a larger motor vehicle;",
    source: HB,
    section: "Chapter 6 - Motorcycles and Mopeds",
    url: HB_URL,
  },
  {
    key: "moped-definition",
    quote:
      "North Carolina law defines a moped as a vehicle with two or " +
      "three wheels with a motor of no more than 50 cubic centimeters " +
      "of piston displacement and no external shifting device. " +
      "Legally, a moped's top speed cannot exceed 30 miles per hour.",
    source: HB,
    section: "Chapter 6 - Mopeds",
    url: HB_URL,
  },
  {
    key: "moped-age-16",
    quote:
      "In North Carolina you must be at least 16 years old to operate " +
      "a moped on a public roadway or public vehicular area.",
    source: HB,
    section: "Chapter 6 - Mopeds",
    url: HB_URL,
  },
  {
    key: "moped-dwi-applies",
    quote:
      "However, driving while impaired laws that apply to drivers of " +
      "other motor vehicles also apply to moped operators.",
    source: HB,
    section: "Chapter 6 - Mopeds",
    url: HB_URL,
  },
  {
    key: "insurance-plate-revoked-30",
    quote:
      "If the DMV is notified that a vehicle owner is operating a " +
      "motor vehicle without proper liability insurance, the " +
      "vehicle's license plate could be revoked for 30 days unless " +
      "proof of continuous insurance coverage is provided.",
    source: HB,
    section: "Chapter 7 - Insurance and Financial Responsibility",
    url: HB_URL,
  },
  {
    key: "insurance-new-minimums",
    quote:
      "Starting July 1, 2025, for all new or renewed policies on or " +
      "after that date, the minimum limits for bodily injury will be " +
      "increased to $50,000 per person and $100,000 per accident and " +
      "the minimum limits for property damage will be increased to " +
      "$50,000.",
    source: DOI,
    section: "Increased Minimum Limits",
    url: DOI_URL,
  },
  {
    key: "window-tint-35",
    quote:
      "The allowable light transmittance for tinted windows is no " +
      "less than 35%.",
    source: HB,
    section: "Chapter 7 - Window Tinting",
    url: HB_URL,
  },
];
