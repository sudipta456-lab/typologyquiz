import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts behind the Alabama bank: most from the Alabama
// Driver Manual (November 2024 edition, Alabama Law Enforcement Agency, Driver
// License Division), the rest from the Code of Alabama 1975, Title 32.
//
// Sources, and why there are two of them:
//
//  - The Alabama Driver Manual, the "November 2024" PDF served from alea.gov
//    (ALEA DL Manual.pdf, 92 pages, printed page numbers run 5 to 85 and sit
//    two behind the PDF page index). ALEA says in the manual itself that the
//    knowledge test "will be taken from material found in this booklet", and
//    this is the book almost everything below is quoted from. It is unusually
//    complete for a US manual: the statutory speed limits, the parking
//    distances, the 100-foot signal rule, the 500-foot rule behind emergency
//    vehicles and the 20-foot school bus distance are all printed in it.
//  - The Code of Alabama 1975, Title 32 (Motor Vehicles and Traffic),
//    published by the Alabama Legislature. It supplies the few numbers the
//    manual leaves out or states loosely: the statutory 20-feet-per-10-mph
//    following rule, the 1.5-mile left-lane limit on interstates, the fines
//    for passing a school bus and for the Move Over Act, the 50-hour practice
//    certificate for a 16-year-old, and the hunting-and-fishing curfew
//    exception the manual's GDL summary omits.
//
// The legislature's current code viewer (alison.legislature.state.al.us) is a
// JavaScript application that returns an empty shell to a plain HTTP client,
// so the statute text was read from Internet Archive captures of the same
// sections on the legislature's older alisondb host (snapshots dated 2022 and
// 2023). Every statute `url` below points at the live alison viewer, which is
// where a learner should read it. The manual did not need the archive.
//
// Every quote was located mechanically in the fetched source and checked as
// an exact substring before it was written here. Nothing is paraphrased. Four
// normalisations were applied to the extracted text and to nothing else:
// curly quotes, en dashes and em dashes are folded to ASCII; runs of
// whitespace, including the line breaks and end-of-line hyphenation the PDF
// inserts mid-word, collapse to single spaces or rejoin the word; the section
// symbol is spelled out as "Section"; and where a source states a rule as a
// stem followed by a bulleted list, the items are run together in the order
// they appear - no words are changed, dropped or reordered. The manual's own
// slips are preserved as they stand ("less then the posted speed limit",
// "Any injury of fatal crash", "prior expiration"), because a quote that has
// been tidied up is no longer a quote.

const MANUAL = "Alabama Driver Manual (Alabama Law Enforcement Agency, November 2024)";
const MANUAL_URL = "https://www.alea.gov/sites/default/files/ALEA%20DL%20Manual.pdf";
/** Page-anchored deep link. `p` is the PDF page index (printed page + 2). */
const hb = (p: number) => `${MANUAL_URL}#page=${p}`;
const code = (s: string) => `https://alison.legislature.state.al.us/code-of-alabama?section=${s}`;
const CODE = (s: string) => `Code of Alabama 1975, Section ${s} (Alabama Legislature)`;

export const alabamaExcerpts: HandbookExcerpt[] = [
  // ---------------------------------------------------------------- Chapter 1
  {
    key: "license-required",
    quote:
      "Every Alabama resident who operates any motor vehicle (except a farm tractor or implement of husbandry temporarily upon any street or highway) must have a driver license.",
    source: MANUAL,
    section: "Chapter 1 - Your License to Drive: License Requirements, page 5",
    url: hb(7),
  },
  {
    key: "out-of-state-license",
    quote:
      "A holder of an out of state license which has not been expired over one year does not have to pass a driver examination.",
    source: MANUAL,
    section: "Chapter 1 - Your License to Drive: License Requirements, page 5",
    url: hb(7),
  },
  {
    key: "new-resident-30-days",
    quote:
      "A non-resident who has a valid driver license from the state of previous residence may drive without an Alabama license for 30 days after becoming a resident of the state.",
    source: MANUAL,
    section: "Chapter 1 - Your License to Drive: License Requirements, page 5",
    url: hb(7),
  },
  {
    key: "under-16-not-licensed",
    quote: "An Alabama driver license shall not be issued to: Persons under 16 years of age.",
    source: MANUAL,
    section: "Chapter 1 - Your License to Drive: Who Cannot Be Licensed, page 6",
    url: hb(8),
  },
  {
    key: "school-attendance-19",
    quote:
      "Any person who is under the age of 19 that is not in compliance with Alabama Act 93-368, which requires secondary school graduation or current attendance, with limited exclusions.",
    source: MANUAL,
    section: "Chapter 1 - Your License to Drive: Who Cannot Be Licensed, page 6",
    url: hb(8),
  },
  {
    key: "foreign-exams",
    quote:
      "Driver License written examinations are available in foreign languages: Arabic, Chinese, Farsi, French, German, Japanese, Korean, Russian, Spanish, Thai and Vietnamese.",
    source: MANUAL,
    section: "Chapter 1 - Your License to Drive: Foreign Examinations, page 9",
    url: hb(11),
  },
  {
    key: "oral-exams",
    quote:
      "Examinations are available for applicants that are unable to read and comprehend the knowledge tests.",
    source: MANUAL,
    section: "Chapter 1 - Your License to Drive: Oral Examinations, page 9",
    url: hb(11),
  },
  {
    key: "min-driving-age",
    quote: "The minimum driving age in Alabama is 16.",
    source: MANUAL,
    section: "Chapter 1 - Your License to Drive: The Learner License and Restricted License, page 9",
    url: hb(11),
  },
  {
    key: "learner-15",
    quote:
      "Any person 15 years of age may obtain a restricted Learner License for the purpose of learning to safely and effectively operate a motor vehicle.",
    source: MANUAL,
    section: "Chapter 1 - Your License to Drive: Learner License - Fifteen years old, page 9",
    url: hb(11),
  },
  {
    key: "learner-y-restriction",
    quote:
      "The \"Y\" restriction indicates that the holder may operate a motor vehicle while accompanied by a person who is 21 years of age or older and, who is duly licensed in this state or a licensed or certified driving instructor occupying the seat beside the operator.",
    source: MANUAL,
    section: "Chapter 1 - Your License to Drive: Learner License - Fifteen years old, page 9",
    url: hb(11),
  },
  {
    key: "learner-after-16",
    quote:
      "After the holder's sixteenth birthday, the holder may operate a motor vehicle with any licensed driver occupying the seat beside the driver.",
    source: MANUAL,
    section: "Chapter 1 - Your License to Drive: Learner License - Fifteen years old, page 9",
    url: hb(11),
  },
  {
    key: "learner-valid-4-years",
    quote: "This Learner License is valid for four years, and can be renewed once.",
    source: MANUAL,
    section: "Chapter 1 - Your License to Drive: Learner License - Fifteen years old, page 9",
    url: hb(11),
  },
  {
    key: "learner-6-months",
    quote:
      "Any person 16 years of age but under 18 years of age who has held a Learner License (to include a comparable license issued by another state) for six months or until their 18th birthday and has developed the necessary skills to safely operate a motor vehicle",
    source: MANUAL,
    section: "Chapter 1 - Your License to Drive: Driver License, page 10",
    url: hb(12),
  },
  {
    key: "learner-revoked",
    quote:
      "A Learner License may be suspended or revoked in the same manner and for the same cause as a driver license and may also be revoked for any violations of the terms and conditions on which it was issued.",
    source: MANUAL,
    section: "Chapter 1 - Your License to Drive: Learner License - Sixteen years old, page 10",
    url: hb(12),
  },
  {
    key: "motor-driven-cycle-14",
    quote:
      "Any person 14 or 15 years of age may obtain a restricted license to operate a motor driven cycle weighing not more than 200 pounds, nor exceeding 150cc engine displacement.",
    source: MANUAL,
    section: "Chapter 1 - Your License to Drive: Motor Driven Cycle License, page 10",
    url: hb(12),
  },
  {
    key: "corrective-lenses",
    quote: "A common restriction is the requirement of wearing corrective lenses while driving.",
    source: MANUAL,
    section: "Chapter 1 - Your License to Drive: Motorcycle License, page 10",
    url: hb(12),
  },
  {
    key: "vision-fail",
    quote:
      "If you don't pass your vision examination, you will be required to have your eyes examined by a licensed eye specialist and return the report to the examiner.",
    source: MANUAL,
    section: "Chapter 1 - Your License to Drive: Vision Screening, page 11",
    url: hb(13),
  },
  {
    key: "knowledge-test-fee",
    quote:
      "The fee for each knowledge test is $5.00, no checks accepted. This test contains questions on Alabama traffic laws, road signs, and rules of safe driving. The test will be taken from material found in this booklet.",
    source: MANUAL,
    section: "Chapter 1 - Your License to Drive: Knowledge Test, page 11",
    url: hb(13),
  },
  {
    key: "automated-testing",
    quote: "Automated testing is available to all applicants taking the driver license knowledge test.",
    source: MANUAL,
    section: "Chapter 1 - Your License to Drive: Knowledge Test, page 11",
    url: hb(13),
  },
  {
    key: "road-test-vehicle",
    quote:
      "Before testing may begin, an examiner will inspect the vehicle to ensure it is in safe operating condition and has the required equipment (brake lights, left and right turn signals, horn).",
    source: MANUAL,
    section: "Chapter 1 - Your License to Drive: The Road Test, page 11",
    url: hb(13),
  },
  {
    key: "road-test-insurance",
    quote:
      "The applicant must present proof of insurance and vehicle registration, as well. A rental vehicle may only be used for testing if the applicant's name appears on the rental agreement as an additional driver.",
    source: MANUAL,
    section: "Chapter 1 - Your License to Drive: The Road Test, page 11",
    url: hb(13),
  },
  {
    key: "tread-penny",
    quote:
      "Can you see all of his head? If yes, your tires are too worn...don't drive on them, and make sure to get them replaced.",
    source: MANUAL,
    section: "Chapter 1 - Your License to Drive: Before You Drive, page 12",
    url: hb(14),
  },
  {
    key: "steering-wheel-height",
    quote:
      "The top of the steering wheel should be no higher than the top of your shoulders and below chin level.",
    source: MANUAL,
    section: "Chapter 1 - Your License to Drive: Before You Drive, page 12",
    url: hb(14),
  },
  {
    key: "license-expires-4",
    quote:
      "Your driver license expires four years after it is issued and the expiration date is shown on the license.",
    source: MANUAL,
    section: "Chapter 1 - Your License to Drive: Renewing Your License, page 13",
    url: hb(15),
  },
  {
    key: "grace-60",
    quote:
      "Alabama law provides a grace period of 60 days after expiration date of a driver license for the purpose of driver license renewal and the driver license shall be valid for this time period.",
    source: MANUAL,
    section: "Chapter 1 - Your License to Drive: Renewing Your License, page 13",
    url: hb(15),
  },
  {
    key: "renew-3-years",
    quote:
      "An Alabama driver license may be renewed without examination within a 3-year period after expiration.",
    source: MANUAL,
    section: "Chapter 1 - Your License to Drive: Renewing Your License, page 13",
    url: hb(15),
  },
  {
    key: "expired-cannot-drive",
    quote:
      "Even though license renewal is possible up to three years after expiration, a person cannot legally operate a motor vehicle with an expired license.",
    source: MANUAL,
    section: "Chapter 1 - Your License to Drive: Renewing Your License, page 13",
    url: hb(15),
  },
  {
    key: "address-30-days",
    quote:
      "After changing your address within Alabama, you have 30 days (per Alabama Code 760-X-1-.07(7), in which to notify the Driver License Division of the new address.",
    source: MANUAL,
    section: "Chapter 1 - Your License to Drive: Change of Name, Change of Address, page 14",
    url: hb(16),
  },
  {
    key: "class-c",
    quote:
      "CLASS C - Vehicles designed to transport 16 or more passengers, including the driver, and vehicles placarded for hazardous materials, that do not meet the criteria for Class A or B above fall under this classification and may drive all vehicles in Class D.",
    source: MANUAL,
    section: "Chapter 1 - Your License to Drive: Commercial Driver License, page 15",
    url: hb(17),
  },
  {
    key: "vessel-12",
    quote: "Persons ages 12 years old and older may obtain a vessel license.",
    source: MANUAL,
    section: "Chapter 1 - Your License to Drive: Vessel License, page 15",
    url: hb(17),
  },
  {
    key: "present-license",
    quote:
      "In Alabama, a driver must have an appropriate driver license (or learner permit) in his or her possession while operating a motor vehicle and be prepared to present that driver license to any law enforcement officer upon his or her request.",
    source: MANUAL,
    section: "Chapter 1 - Your License to Drive: Present Your License, page 16",
    url: hb(18),
  },
  {
    key: "hands-free",
    quote:
      "Physically holding a wireless telecommunications device* is a violation of Alabama's Hands-Free Law when a driver is observed crossing in and out of a traffic lane without using a turn signal, swerving or otherwise operating a motor vehicle in an improper manner.",
    source: MANUAL,
    section: "Chapter 1 - Your License to Drive: Alabama's Hands-Free Law, Effective June 2024, page 16",
    url: hb(18),
  },
  {
    key: "hands-free-fines",
    quote:
      "First conviction, $50 fine and 1 point; second conviction, $100 fine and 2 points; third conviction, $150 and 3 points on driver's record within a 24-month period.",
    source: MANUAL,
    section: "Chapter 1 - Your License to Drive: Alabama's Hands-Free Law, Effective June 2024, page 16",
    url: hb(18),
  },
  // ---------------------------------------------------------------- Chapter 2
  {
    key: "reinstatement-fee",
    quote:
      "Any person whose driver license has been canceled, suspended, revoked, or disqualified must pay a reinstatement fee of not less than $100 in addition to meeting other requirements of state law before being relicensed.",
    source: MANUAL,
    section: "Chapter 2 - You May Lose Your License, page 17",
    url: hb(19),
  },
  {
    key: "surrender-50",
    quote:
      "Failure to surrender your driver license within the time allowed as directed when canceled, revoked, or suspended, will result in an additional $50 fee.",
    source: MANUAL,
    section: "Chapter 2 - You May Lose Your License, page 17",
    url: hb(19),
  },
  {
    key: "cancellation",
    quote:
      "Failing to give required or correct information on a driver license application or committing any fraud in making an application is also grounds for license cancellation.",
    source: MANUAL,
    section: "Chapter 2 - You May Lose Your License: Cancellation, page 17",
    url: hb(19),
  },
  {
    key: "revocation-retest",
    quote:
      "After the period of revocation has expired, the driver may apply for a new driver license and will be required to take and pass the complete examinations.",
    source: MANUAL,
    section: "Chapter 2 - You May Lose Your License: Revocation, page 17",
    url: hb(19),
  },
  {
    key: "revoke-hit-and-run",
    quote:
      "Failures to stop, render aid, or identify yourself in the event of a motor vehicle accident resulting in the death or personal injury of another.",
    source: MANUAL,
    section: "Chapter 2 - You May Lose Your License: Revocation, page 17",
    url: hb(19),
  },
  {
    key: "revoke-3-reckless",
    quote: "Three reckless driving convictions within 12 months.",
    source: MANUAL,
    section: "Chapter 2 - You May Lose Your License: Revocation, page 17",
    url: hb(19),
  },
  {
    key: "revoke-dui-second",
    quote:
      "Driving or being in actual physical control of a motor vehicle while under the influence of intoxicating liquor upon a second or subsequent conviction.",
    source: MANUAL,
    section: "Chapter 2 - You May Lose Your License: Revocation, page 17",
    url: hb(19),
  },
  {
    key: "suspend-gdl-points",
    quote:
      "Have 4 or more points accrued on driving record or 2 or more moving traffic violations on a GDL (Graduated Driver License).",
    source: MANUAL,
    section: "Chapter 2 - You May Lose Your License: Suspension, page 18",
    url: hb(20),
  },
  {
    key: "suspend-first-dui",
    quote: "First Offense DUI or Drugs (Juvenile or Adult).",
    source: MANUAL,
    section: "Chapter 2 - You May Lose Your License: Suspension, page 18",
    url: hb(20),
  },
  {
    key: "suspend-school-withdraw",
    quote:
      "Are ages 15 through 18 and withdraw from school under certain conditions prior to graduation.",
    source: MANUAL,
    section: "Chapter 2 - You May Lose Your License: Suspension, page 18",
    url: hb(20),
  },
  {
    key: "suspend-racing",
    quote: "Are convicted of racing on the highways.",
    source: MANUAL,
    section: "Chapter 2 - You May Lose Your License: Suspension, page 18",
    url: hb(20),
  },
  {
    key: "points-reckless",
    quote: "Reckless Driving or Reckless Endangerment 6 Points",
    source: MANUAL,
    section: "Chapter 2 - You May Lose Your License: The Alabama Point System, page 19",
    url: hb(21),
  },
  {
    key: "points-yield",
    quote: "Failure to Yield Right of Way 5 Points",
    source: MANUAL,
    section: "Chapter 2 - You May Lose Your License: The Alabama Point System, page 19",
    url: hb(21),
  },
  {
    key: "points-school-bus",
    quote: "Passing Stopped School Bus 5 Points",
    source: MANUAL,
    section: "Chapter 2 - You May Lose Your License: The Alabama Point System, page 19",
    url: hb(21),
  },
  {
    key: "points-speeding",
    quote:
      "Speeding Violation to Include 1-25 mph Over Speed Limit 2 Points Speeding 26 mph or More Over Speed Limit 5 Points",
    source: MANUAL,
    section: "Chapter 2 - You May Lose Your License: The Alabama Point System, page 19",
    url: hb(21),
  },
  {
    key: "points-following",
    quote: "Following Too Closely 3 Points",
    source: MANUAL,
    section: "Chapter 2 - You May Lose Your License: The Alabama Point System, page 19",
    url: hb(21),
  },
  {
    key: "points-schedule",
    quote:
      "12-14 Points in a 2-year period 60 days 15-17 Points in a 2-year period 90 days 18-20 Points in a 2-year period 120 days 21-23 Points in a 2-year period 180 days 24 and above points in a 2-year period 365 days",
    source: MANUAL,
    section: "Chapter 2 - You May Lose Your License: The Alabama Point System, page 19",
    url: hb(21),
  },
  {
    key: "points-hearing",
    quote:
      "Upon receipt of notice of the suspension of his driver license, the driver may request a pre-suspension or administrative hearing in the county of his residence before an agent of the Alabama Law Enforcement Agency.",
    source: MANUAL,
    section: "Chapter 2 - You May Lose Your License: The Alabama Point System, page 19",
    url: hb(21),
  },
  // ---------------------------------------------------------------- Chapter 3
  {
    key: "buckle-before-ignition",
    quote:
      "Before switching on the ignition, buckle your safety belt and see that all passengers do likewise.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Entering the Car, page 20",
    url: hb(22),
  },
  {
    key: "both-hands",
    quote:
      "Always keep both hands on the wheel except when it is necessary to remove one for signaling or for another purpose necessary to the operation of the vehicle.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Posture and Steering, page 20",
    url: hb(22),
  },
  {
    key: "leaving-parking",
    quote:
      "In preparing to leave a parallel parking spot, look over your shoulder as well as in rear view mirrors and wait until the way is clear before pulling into traffic. Indicate your intention by signaling. Enter traffic in the nearest lane and remain in that lane until it is safe to change into another lane.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Starting From a Parking Place, page 20",
    url: hb(22),
  },
  {
    key: "single-lane",
    quote:
      "You must drive within a single traffic lane without weaving from one lane to another or straddling the lane marking.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: On the Road, page 20",
    url: hb(22),
  },
  {
    key: "signal-100",
    quote:
      "At least 100 feet before making the turn, signal your intentions. Continue the signal until you are ready to make the actual turn.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Rules for Turns, page 21",
    url: hb(23),
  },
  {
    key: "hand-signals-daytime",
    quote:
      "During the daytime, hand and arm signals may be used in addition to signal lights. Reflection of bright sunlight may make it difficult for other motorists to see your flashing signal light.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Rules for Turns, page 21",
    url: hb(23),
  },
  {
    key: "turn-finish-lane",
    quote: "Always finish your turn in the proper lane.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Rules for Turns, page 21",
    url: hb(23),
  },
  {
    key: "right-turn-four-lane",
    quote:
      "In making a right turn from a four-lane or divided highway, enter the right lane well in advance of the turn and make a tight turn into the right lane of the cross street.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Turning From Four-Lane Highways, page 21",
    url: hb(23),
  },
  {
    key: "left-turn-four-lane",
    quote:
      "For a left turn, move to the lane nearest the center line or traffic divider and turn from the inside lane. Avoid a wide swing during your turn. Enter the cross street just to the right of the centerline.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Turning From Four-Lane Highways, page 21",
    url: hb(23),
  },
  {
    key: "three-point-turn",
    quote:
      "Three-point turns are not permitted on interstate freeways, on curves, or near the top of hills where you cannot be seen by drivers of other vehicles approaching from either direction within 500 feet.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Three-Point Turn, page 23",
    url: hb(25),
  },
  {
    key: "curves-slow",
    quote:
      "A driver should enter a curve slow enough to enable him to accelerate slightly when actually rounding the curve.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Curves, page 23",
    url: hb(25),
  },
  {
    key: "bicycle-rights",
    quote:
      "Traffic laws also apply to people on bicycles. That is, people on bicycles possess the same rights and responsibilities of the road as people in motor vehicles.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Sharing the Road with Bicycles, page 23",
    url: hb(25),
  },
  {
    key: "bicycle-two-abreast",
    quote: "People on bicycles may ride two abreast at all times.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Sharing the Road with Bicycles, page 23",
    url: hb(25),
  },
  {
    key: "bicycle-sidewalk",
    quote:
      "Neither sidewalks nor multipurpose paths qualify as designated bicycle lanes. In Alabama, it is illegal for people on bicycles to ride on the sidewalk.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Sharing the Road with Bicycles, page 24",
    url: hb(26),
  },
  {
    key: "bicycle-helmet",
    quote:
      "People on bicycles who are under the age of 16 years are required to wear a securely fastened protective helmet when riding on public roadways, other public rights-of way, public bicycle paths and in public parks.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Sharing the Road with Bicycles, page 24",
    url: hb(26),
  },
  {
    key: "bike-lane-driving",
    quote:
      "Whenever a bicycle lane has been established on a roadway, any person operating a motor vehicle on such a roadway shall not drive in the bicycle lane except to park where parking is permitted, to enter or leave the highway, or to prepare for a turn.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Sharing the Road with Bicycles, page 24",
    url: hb(26),
  },
  {
    key: "bicycle-3-feet",
    quote:
      "Alabama state law requires that you pass a person on a bicycle with a distance of not less than three feet between your motor vehicle and the person on a bicycle.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Sharing the Road with Bicycles, page 24",
    url: hb(26),
  },
  {
    key: "bicycle-no-horn",
    quote:
      "If the road is narrow and you are unable to safely pass a person on a bicycle, do not follow too closely and do not blast the person on the bicycle with your horn. Remain behind the person on the bicycle at a safe interval until you are able to pass.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Sharing the Road with Bicycles, page 24",
    url: hb(26),
  },
  {
    key: "bicycle-wet",
    quote:
      "During wet weather, the braking ability of a bicycle is greatly reduced. Motorists should be prepared to compensate for the person on a bicycle's decreased ability to slow or stop.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Sharing the Road with Bicycles, page 25",
    url: hb(27),
  },
  {
    key: "motorcycle-width",
    quote:
      "Motorcycles are only about two feet wide compared with the five-to-six-foot width of an automobile. Even when seen, it's difficult for some drivers to judge how far away motorcyclists are.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Sharing the Road with Motorcycles, page 25",
    url: hb(27),
  },
  {
    key: "motorcycle-left-turn",
    quote:
      "Left turns in front of an oncoming motorcyclist account for a large percentage of car/cycle injury producing accidents.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Sharing the Road with Motorcycles, page 25",
    url: hb(27),
  },
  {
    key: "motorcycle-signals",
    quote: "Turn signals are not automatically self-canceling on most motorcycles.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Sharing the Road with Motorcycles, page 25",
    url: hb(27),
  },
  {
    key: "motorcycle-2-second",
    quote:
      "Following distance behind the motorcyclist should be the same 2-second following distance given any other vehicle.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Sharing the Road with Motorcycles, page 26",
    url: hb(28),
  },
  {
    key: "motorcycle-share-lane",
    quote:
      "Drivers should never move into the same lane alongside a motorcycle even if the lane is wide and cyclist is riding far to one side. It is not only illegal, but extremely hazardous.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Sharing the Road with Motorcycles, page 26",
    url: hb(28),
  },
  {
    key: "motorcycle-weather",
    quote:
      "Drivers should allow even more following distance for motorcyclists when it's dark, raining, or the road surface is wet and slippery.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Sharing the Road with Motorcycles, page 26",
    url: hb(28),
  },
  {
    key: "no-zones",
    quote:
      "No-Zones are danger areas around trucks and buses where crashes are more likely to occur. Some of the No-Zones are blind spots where your car \"disappears\" from the view of the truck or bus driver.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Sharing the Road with Large Vehicles, page 27",
    url: hb(29),
  },
  {
    key: "side-no-zone",
    quote:
      "If you can't see the driver's face in the side-view mirror, the driver can't see you.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Sharing the Road with Large Vehicles, page 27",
    url: hb(29),
  },
  {
    key: "rear-no-zone",
    quote:
      "Unlike cars, trucks and buses have huge no-zones directly behind them that may extend as far as 200 feet.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Sharing the Road with Large Vehicles, page 27",
    url: hb(29),
  },
  {
    key: "dim-following-truck",
    quote:
      "When following a large vehicle at night, always dim your headlights. Bright lights will blind the driver when they reflect off the side mirrors of the bus or truck.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Sharing the Road with Large Vehicles, page 27",
    url: hb(29),
  },
  {
    key: "truck-stopping",
    quote:
      "A National Safety Council study of reaction time and braking distance found that at speeds of 55 miles per hour, a passenger car needs 193 feet to stop safely and a loaded truck needs 430 feet.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Sharing the Road with Large Vehicles, page 28",
    url: hb(30),
  },
  {
    key: "backing-no-zone",
    quote: "Never cross behind a truck or bus that is backing up.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Sharing the Road with Large Vehicles, page 28",
    url: hb(30),
  },
  {
    key: "squeeze-play",
    quote:
      "Truck and bus drivers need to swing wide to the left to safely make a right turn. Watch the driver's signal. When the right turn signal is blinking, do not attempt to pass on the right.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Sharing the Road with Large Vehicles, page 28",
    url: hb(30),
  },
  {
    key: "rural-standing",
    quote:
      "Any vehicle left standing along a rural highway for any reason must be moved off the paved or main traveled portion of the roadway.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Parking, page 28",
    url: hb(30),
  },
  {
    key: "parking-hand-brake",
    quote:
      "When parking on a hill you must make sure your car does not roll into traffic if the brakes do not hold. Always set the hand brake.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Parking on a Hill, page 28",
    url: hb(30),
  },
  {
    key: "parking-hill",
    quote:
      "Facing downhill, turn your wheels toward the curb and shift into reverse gear or PARK. Facing uphill turn your wheels away from the curb and shift into low gear or PARK. If there are no curbs, turn your wheels toward the edge of the road, whether facing uphill or downhill.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Parking on a Hill, page 28",
    url: hb(30),
  },
  {
    key: "parking-crosswalk-20",
    quote: "Within 20 feet of a crosswalk at an uncontrolled intersection.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Parking is NOT allowed at the following places, page 29",
    url: hb(31),
  },
  {
    key: "parking-30-signal",
    quote:
      "Within 30 feet of any flashing beacon, stop sign, or traffic control signal located at the side of a roadway.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Parking is NOT allowed at the following places, page 29",
    url: hb(31),
  },
  {
    key: "parking-rail-50",
    quote: "Within 50 feet of the nearest rail of a railroad crossing.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Parking is NOT allowed at the following places, page 29",
    url: hb(31),
  },
  {
    key: "parking-hydrant-15",
    quote: "Within 15 feet of a fire hydrant.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Parking is NOT allowed at the following places, page 29",
    url: hb(31),
  },
  {
    key: "parking-double",
    quote: "On the roadway side of any vehicle parked at the curb or the edge of a highway.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Parking is NOT allowed at the following places, page 29",
    url: hb(31),
  },
  {
    key: "parking-yellow-curb",
    quote: "Beside a curb that is painted yellow, or where official signs prohibit parking.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Parking is NOT allowed at the following places, page 29",
    url: hb(31),
  },
  {
    key: "parking-bridge",
    quote: "Upon any bridge or in a tunnel.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Parking is NOT allowed at the following places, page 29",
    url: hb(31),
  },
  {
    key: "seat-belt-all",
    quote: "Alabama's safety belt law requires that each occupant, regardless of age, be restrained.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Alabama's Safety Belt and Child Restraint Laws, page 30",
    url: hb(32),
  },
  {
    key: "child-restraint-15",
    quote:
      "Alabama's child restraint law requires that children through age 15 must be restrained when riding in motor vehicles in Alabama.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Alabama's Safety Belt and Child Restraint Laws, page 30",
    url: hb(32),
  },
  {
    key: "child-rear-facing",
    quote:
      "Infant-only seat or convertible seat used in the rear-facing position until an infant is at least 1 year of age or 20 pounds.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Alabama's Safety Belt and Child Restraint Laws, page 30",
    url: hb(32),
  },
  {
    key: "child-forward",
    quote:
      "Convertible seat in the forward position or forward-facing seat until a child is at least 5 years of age or 40 pounds.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Alabama's Safety Belt and Child Restraint Laws, page 30",
    url: hb(32),
  },
  {
    key: "child-booster",
    quote: "Booster seat until a child is 6 years of age.",
    source: MANUAL,
    section: "Chapter 3 - The Driving Task: Alabama's Safety Belt and Child Restraint Laws, page 30",
    url: hb(32),
  },
  // ---------------------------------------------------------------- Chapter 4
  {
    key: "driver-error-90",
    quote:
      "Accident records show that over 90 percent of the highway crashes are caused by driver error, lack of knowledge, inattention, physical or mental condition, improper attitude or faulty judgment.",
    source: MANUAL,
    section: "Chapter 4 - The Driver, page 31",
    url: hb(33),
  },
  {
    key: "emotions",
    quote: "If worried, ill, nervous, frightened, angry, or depressed, let someone else drive.",
    source: MANUAL,
    section: "Chapter 4 - The Driver: Your Personality Affects Your Driving, page 31",
    url: hb(33),
  },
  {
    key: "texting-law",
    quote:
      "Alabama's new law prohibits using a wireless device to write, send or read a text message, instant message or e-mail while operating a motor vehicle.",
    source: MANUAL,
    section: "Chapter 4 - The Driver: Texting While Driving, page 32",
    url: hb(34),
  },
  {
    key: "drowsy",
    quote:
      "Stop driving when you feel drowsy. Don't try to fight it. Pull off the highway at the first rest stop or service area.",
    source: MANUAL,
    section: "Chapter 4 - The Driver: Highway Hypnosis and Fatigue, page 32",
    url: hb(34),
  },
  {
    key: "breaks-100-miles",
    quote: "It is advisable to take regular breaks every 100 miles or every two hours.",
    source: MANUAL,
    section: "Chapter 4 - The Driver: Highway Hypnosis and Fatigue, page 32",
    url: hb(34),
  },
  {
    key: "stay-awake-drugs",
    quote:
      "Don't rely on \"stay-awake drugs\". They are likely to make your driving even more hazardous.",
    source: MANUAL,
    section: "Chapter 4 - The Driver: Highway Hypnosis and Fatigue, page 32",
    url: hb(34),
  },
  {
    key: "bac-08",
    quote:
      "At .08 percent all individuals are definitely impaired. Under Alabama law, it is unlawful to drive with a concentration of .08 percent or more alcohol in the blood, or while under the influence of alcohol.",
    source: MANUAL,
    section: "Chapter 4 - The Driver: Drinking and Driving, page 33",
    url: hb(35),
  },
  {
    key: "one-drink-equal",
    quote:
      "The amount of alcohol in one bottle of beer is about equal to that in an average \"shot of whiskey or a glass of wine.\" The effect on the average driver is the same.",
    source: MANUAL,
    section: "Chapter 4 - The Driver: Drinking and Driving, page 33",
    url: hb(35),
  },
  {
    key: "alcohol-depressant",
    quote: "Alcohol is a depressant, not a stimulant.",
    source: MANUAL,
    section: "Chapter 4 - The Driver: The Effects of Alcohol, page 33",
    url: hb(35),
  },
  {
    key: "impairment-before-legal",
    quote: "Impairment can occur before legal intoxication is attained.",
    source: MANUAL,
    section: "Chapter 4 - The Driver: The Effects of Alcohol, page 33",
    url: hb(35),
  },
  {
    key: "bac-under-21",
    quote: "Persons under 21 years of age whose blood alcohol content is .02% or more.",
    source: MANUAL,
    section: "Chapter 4 - The Driver: Driving While Under the Influence, page 33",
    url: hb(35),
  },
  {
    key: "bac-cdl",
    quote: "Commercial vehicle operators whose blood alcohol content is .04% or more.",
    source: MANUAL,
    section: "Chapter 4 - The Driver: Driving While Under the Influence, page 33",
    url: hb(35),
  },
  {
    key: "bac-school-bus",
    quote: "School bus and daycare drivers whose blood alcohol content is .02% or more.",
    source: MANUAL,
    section: "Chapter 4 - The Driver: Driving While Under the Influence, page 33",
    url: hb(35),
  },
  {
    key: "dui-first",
    quote:
      "Penalty for a first conviction is a fine of $600 to $2,100, up to one year in jail or by both fine and imprisonment. In addition, the driver license will be suspended for 90 days.",
    source: MANUAL,
    section: "Chapter 4 - The Driver: Driving While Under the Influence, page 33",
    url: hb(35),
  },
  {
    key: "dui-second",
    quote:
      "A mandatory 48 hours jail or 20 days community service and one-year revocation of driver license is required after a second conviction.",
    source: MANUAL,
    section: "Chapter 4 - The Driver: Driving While Under the Influence, page 33",
    url: hb(35),
  },
  {
    key: "dui-third",
    quote:
      "For a third conviction, the fine ranges from $2,100 to $10,100, and the driver license will be revoked for three years.",
    source: MANUAL,
    section: "Chapter 4 - The Driver: Driving While Under the Influence, page 34",
    url: hb(36),
  },
  {
    key: "dui-fourth",
    quote:
      "A fourth conviction or subsequent conviction is a Class C felony. Fines range from $4,100 to $10,100, with a five-year revocation of driver license.",
    source: MANUAL,
    section: "Chapter 4 - The Driver: Driving While Under the Influence, page 34",
    url: hb(36),
  },
  {
    key: "implied-consent",
    quote:
      "Any person who operates a motor vehicle upon the public highways of this state shall be deemed to have given his consent to a chemical test or tests of his blood, breath, or urine to determine blood alcohol content.",
    source: MANUAL,
    section: "Chapter 4 - The Driver: Implied Consent Law, page 34",
    url: hb(36),
  },
  {
    key: "refusal",
    quote:
      "A driver under arrest for Driving Under the Influence, who refuses to submit to chemical breath tests when directed by an officer, shall have his driver license suspended.",
    source: MANUAL,
    section: "Chapter 4 - The Driver: Implied Consent Law, page 34",
    url: hb(36),
  },
  {
    key: "coffee-no-sober",
    quote:
      "Black coffee, food, or a cold shower might wake you, but they will not sober you.",
    source: MANUAL,
    section: "Chapter 4 - The Driver: Implied Consent Law, page 34",
    url: hb(36),
  },
  {
    key: "empty-stomach",
    quote:
      "A small amount will affect you more on an empty stomach than it usually would if you have food in your stomach.",
    source: MANUAL,
    section: "Chapter 4 - The Driver: Implied Consent Law, page 34",
    url: hb(36),
  },
  {
    key: "otc-drugs",
    quote:
      "Drugs, including some allergy remedies and cold pills that you can buy without prescription, may contain codeine, alcohol, antihistamines, or bromides. Each of these ingredients can affect your driving.",
    source: MANUAL,
    section: "Chapter 4 - The Driver: Drugs, page 35",
    url: hb(37),
  },
  {
    key: "drug-alcohol-mix",
    quote:
      "Many times worse than alcohol or drugs used alone is the use of alcohol and drugs together.",
    source: MANUAL,
    section: "Chapter 4 - The Driver: Drugs, page 35",
    url: hb(37),
  },
  {
    key: "following-distance-definition",
    quote:
      "Most rear-end collisions are caused by following too closely. The space easiest to control is the space ahead of your vehicle.",
    source: MANUAL,
    section: "Chapter 4 - The Driver: How to Avoid Rear End Collisions, page 36",
    url: hb(38),
  },
  {
    key: "two-second-rule",
    quote:
      "To use the two-second rule, choose a fixed object on the road ahead (such as a sign post, tree, overpass, bridge abutment, etc.). When the vehicle ahead passes that object, begin to count \"One thousand one, one thousand two.\"",
    source: MANUAL,
    section: "Chapter 4 - The Driver: How to Avoid Rear End Collisions, page 36",
    url: hb(38),
  },
  {
    key: "four-five-seconds",
    quote:
      "If the road and weather conditions are not good, increase your following distance to a four or five second count.",
    source: MANUAL,
    section: "Chapter 4 - The Driver: How to Avoid Rear End Collisions, page 36",
    url: hb(38),
  },
  {
    key: "crash-stop-aid",
    quote:
      "If you are involved in a traffic crash, you must stop at once and aid any injured persons. Call for medical assistance if necessary.",
    source: MANUAL,
    section: "Chapter 4 - The Driver: What To Do If You Have A Crash, page 37",
    url: hb(39),
  },
  {
    key: "crash-dont-move",
    quote:
      "It is dangerous to move injured persons. You should avoid moving the injured unless it is absolutely necessary to remove them from areas threatened by fire or other dangers common to a crash scene.",
    source: MANUAL,
    section: "Chapter 4 - The Driver: What To Do If You Have A Crash, page 37",
    url: hb(39),
  },
  {
    key: "crash-exchange",
    quote:
      "Give your name, address, and registration number and show your driver license to other persons involved. This applies to any type of accident.",
    source: MANUAL,
    section: "Chapter 4 - The Driver: What To Do If You Have A Crash, page 37",
    url: hb(39),
  },
  {
    key: "crash-report",
    quote:
      "Any injury of fatal crash must, by the quickest means of communication, be reported to the local police if it occurs within a municipality or to the State Troopers if it happens on a state highway.",
    source: MANUAL,
    section: "Chapter 4 - The Driver: Report All Traffic Mishaps, page 38",
    url: hb(40),
  },
  {
    key: "sr-31",
    quote:
      "In case of injury, a fatality, or if damage to any vehicle or property in the crash amount to $500 or more, a written (Form SR-31) must be sent within 30 days",
    source: MANUAL,
    section: "Chapter 4 - The Driver: Report All Traffic Mishaps, page 38",
    url: hb(40),
  },
  {
    key: "unattended-vehicle",
    quote:
      "If your vehicle hits an unattended vehicle, either notify the police, make an attempt to locate the owner of the parked vehicle, or leave a written notice in a conspicuous place on the unattended vehicle, giving your name and address.",
    source: MANUAL,
    section: "Chapter 4 - The Driver: When Involved in a Crash, page 38",
    url: hb(40),
  },
  {
    key: "rr-sign-750",
    quote:
      "The round railroad warning sign: It is yellow with a black X and the letters RR. It means a highway railroad crossing is ahead and is placed 750 feet before the track.",
    source: MANUAL,
    section: "Chapter 4 - The Driver: Railroad Crossings - Advanced Warnings, page 38",
    url: hb(40),
  },
  {
    key: "rr-pavement",
    quote:
      "Pavement markings: In front of a railroad crossing, the pavement may be marked with a large X and two RR's. A yellow line in advance of the crossing means no passing.",
    source: MANUAL,
    section: "Chapter 4 - The Driver: Railroad Crossings - Advanced Warnings, page 38",
    url: hb(40),
  },
  {
    key: "rr-gates",
    quote:
      "Gates: When gates are being lowered the red flashing lights will warn you to stop. Remain stopped until the gates are raised and lights are no longer flashing. If a railroad crossing has no warning device, slow down, look and listen for trains before proceeding.",
    source: MANUAL,
    section: "Chapter 4 - The Driver: Railroad Crossings - Advanced Warnings, page 39",
    url: hb(41),
  },
  {
    key: "rr-must-stop-vehicles",
    quote:
      "The vehicles listed below are required to stop before crossing any railroad crossing: School bus, church bus, or any passenger bus. Trucks transporting flammables, explosives or other hazardous material.",
    source: MANUAL,
    section: "Chapter 4 - The Driver: Stopping for Railroad Crossings, page 39",
    url: hb(41),
  },
  {
    key: "rr-stop-15-50",
    quote: "When approaching a railroad crossing. You must stop within 15 to 50 ft.",
    source: MANUAL,
    section: "Chapter 4 - The Driver: Stopping for Railroad Crossings, page 39",
    url: hb(41),
  },
  {
    key: "rr-second-train",
    quote:
      "Watch out for the second train. When the last car of the train passes, do not proceed until you are sure no train is coming on another track, especially from the other direction.",
    source: MANUAL,
    section: "Chapter 4 - The Driver: Safety Tips for Motorists, page 40",
    url: hb(42),
  },
  {
    key: "rr-gears",
    quote: "To avoid stalling, a driver should not change gears while crossing the track.",
    source: MANUAL,
    section: "Chapter 4 - The Driver: Stopping for Railroad Crossings, page 40",
    url: hb(42),
  },
  {
    key: "rr-around-gates",
    quote:
      "Never drive around gates. If the gates are down, stay in place and do not cross the tracks until they are raised. It is against the law to go around gates.",
    source: MANUAL,
    section: "Chapter 4 - The Driver: Safety Tips for Motorists, page 40",
    url: hb(42),
  },
  {
    key: "rr-stall",
    quote:
      "If your vehicle stalls on a crossing, get everyone out of the vehicle immediately and away from the tracks. Call your local law enforcement agency for assistance.",
    source: MANUAL,
    section: "Chapter 4 - The Driver: Safety Tips for Motorists, page 40",
    url: hb(42),
  },
  {
    key: "train-stop-mile",
    quote:
      "Be aware that trains cannot stop quickly. A freight train travelling at 55 mph takes a mile or more to stop. That's the length of 18 football fields.",
    source: MANUAL,
    section: "Chapter 4 - The Driver: Safety Tips for Motorists, page 40",
    url: hb(42),
  },
  // ---------------------------------------------------------------- Chapter 5
  {
    key: "sign-shapes-colors",
    quote:
      "In addition to becoming familiar with individual signs, it is important for the driver to recognize the shapes and colors of signs, because both are coded to the sign's type of message.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings, page 41",
    url: hb(43),
  },
  {
    key: "sign-types",
    quote:
      "The three types of traffic signs are classified according to function. They are regulatory, warning, and information or guide signs.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Traffic Signs, page 41",
    url: hb(43),
  },
  {
    key: "regulatory-colors",
    quote:
      "Regulatory signs regulate the movement of traffic. They are black and white with the exception of those shown in actual color, and MUST be obeyed.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Regulatory Signs, page 42",
    url: hb(44),
  },
  {
    key: "four-way-stop",
    quote:
      "The first vehicle to arrive at a complete stop is the first vehicle allowed to leave the stop sign. When more than one vehicle arrives at the same time at the 4-way stop, the vehicle furthest to the right is allowed to leave first.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Regulatory Signs, page 42",
    url: hb(44),
  },
  {
    key: "four-way-wait",
    quote:
      "Always allow at least a few seconds to make sure no one else begins to enter the intersection -- even if it's your turn -- because many people do not follow the rule.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Regulatory Signs, page 42",
    url: hb(44),
  },
  {
    key: "yield-sign",
    quote:
      "The YIELD sign means slow down so you can yield the right of way to pedestrians crossing the roadway and to vehicles on the intersecting street or highway.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Regulatory Signs, page 42",
    url: hb(44),
  },
  {
    key: "wrong-way",
    quote:
      "White on red background. Motorist is approaching one-way highway or ramp from wrong direction.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Regulatory Signs, page 42",
    url: hb(44),
  },
  {
    key: "do-not-enter",
    quote:
      "This marks a one-way roadway with traffic coming against you. You must not enter the one-way at this point.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Regulatory Signs, page 42",
    url: hb(44),
  },
  {
    key: "handicap-parking",
    quote:
      "You must not park in a parking space designated for the physically handicapped on either private or public property unless: (a) the vehicle being parked is operated by a physically handicapped person or under the direction of a physically handicapped person and (b) the vehicle visibly displays the handicapped sticker.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Regulatory Signs, page 43",
    url: hb(45),
  },
  {
    key: "emergency-stopping",
    quote: "Stopping permitted only for real emergencies.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Regulatory Signs, page 43",
    url: hb(45),
  },
  {
    key: "min-speed-sign",
    quote:
      "These are the \"maximum\" and \"minimum\" speeds permitted on this section of the highway. \"Minimum\" limits are usually posted on freeways and other controlled access highways.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Regulatory Signs, page 43",
    url: hb(45),
  },
  {
    key: "school-zone-sign",
    quote:
      "Speed limit in school zone during hours indicated. School zone speed limit may also be displayed on lighted sign with flashing amber lights.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Regulatory Signs, page 44",
    url: hb(46),
  },
  {
    key: "no-passing-zone-sign",
    quote: "Marks the beginning of a no passing zone.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Regulatory Signs, page 44",
    url: hb(46),
  },
  {
    key: "no-turn-on-red",
    quote:
      "At intersections controlled by traffic signals, you MAY NOT make a right or left turn on red if this sign is posted.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Regulatory Signs, page 44",
    url: hb(46),
  },
  {
    key: "keep-right-sign",
    quote: "You must not drive to the left of this sign.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Regulatory Signs, page 44",
    url: hb(46),
  },
  {
    key: "double-right-turns",
    quote:
      "Double right turns are only permitted at intersections that are properly signed. At intersections that aren't signed, follow the rules for right turns.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Regulatory Signs, page 44",
    url: hb(46),
  },
  {
    key: "warning-colors",
    quote:
      "Warning signs are black and yellow, except those used in construction areas which are black and orange. These signs are used to warn you of hazardous conditions ahead requiring you to drive with extra caution.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Warning Signs, page 44",
    url: hb(46),
  },
  {
    key: "warning-fluorescent",
    quote:
      "Fluorescent yellow indicates pedestrian crossings and school zones. Warning signs are usually diamond shaped, but there are some exceptions.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Warning Signs, page 44",
    url: hb(46),
  },
  {
    key: "soft-shoulder",
    quote: "The side of the road is soft. Do not drive off the pavement.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Warning Signs, page 45",
    url: hb(47),
  },
  {
    key: "one-lane-bridge",
    quote: "There is not room on the bridge ahead to meet or pass another car or truck.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Warning Signs, page 46",
    url: hb(48),
  },
  {
    key: "advisory-speed",
    quote: "This advises you of the top safe speed at which you can make the turn.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Warning Signs, page 47",
    url: hb(49),
  },
  {
    key: "rr-advance-sign",
    quote:
      "Railroad crossing ahead. You must slow down, look carefully in both directions and be prepared to stop. Remember, a train cannot stop quickly!",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Warning Signs, page 47",
    url: hb(49),
  },
  {
    key: "low-shoulder",
    quote: "Road shoulder much lower than road surface.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Warning Signs, page 47",
    url: hb(49),
  },
  {
    key: "lane-ends",
    quote:
      "Number of highway lanes change ahead. The three signs appear in a series as a repeating reminder to merge into the adjacent lane.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Warning Signs, page 47",
    url: hb(49),
  },
  {
    key: "clearance-sign",
    quote: "Vehicles or loads higher than the clearance shown cannot go under the structure ahead.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Warning Signs, page 48",
    url: hb(50),
  },
  {
    key: "merge-sign",
    quote:
      "You will be merging with other traffic traveling in the same direction. Drivers entering from the right must yield to traffic on the main route, and must make use of speed-change lanes to merge smoothly and safely with the main traffic flow.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Warning Signs, page 48",
    url: hb(50),
  },
  {
    key: "two-way-traffic-sign",
    quote:
      "You are leaving a separated one-way roadway and entering a two-way roadway. Also used to remind drivers they are on a two-way road.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Warning Signs, page 48",
    url: hb(50),
  },
  {
    key: "ped-crossing-sign",
    quote:
      "Just ahead is a location where people on foot often cross. The crosswalk may not necessarily be at an intersection.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Warning Signs, page 49",
    url: hb(51),
  },
  {
    key: "sharrow",
    quote:
      "Shared Lane Markings (Sharrow) inform road users that people on bicycles might occupy the travel lane.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Warning Signs, page 50",
    url: hb(52),
  },
  {
    key: "construction-sign",
    quote:
      "You are about to enter a road construction area. Be on the look-out for flagman, one-way traffic, other signs or obstructions. Proceed with caution and obey signs and instructions.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Warning Signs, page 50",
    url: hb(52),
  },
  {
    key: "flashing-arrow",
    quote:
      "Large flashing or sequencing arrow panels may be used in work zones both day and night to guide drivers into certain traffic lanes and to inform them that part of the road or street ahead is closed.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Warning Signs, page 50",
    url: hb(52),
  },
  {
    key: "roundabout-def",
    quote:
      "A roundabout is a circular intersection that usually does not include a traffic signal and flows in a counter-clockwise direction around a central island.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Warning Signs, page 51",
    url: hb(53),
  },
  {
    key: "guide-colors",
    quote:
      "Guide or informational signs inform and direct motorists, and are green and white for motorist directions; blue and white for services; and brown and white for points of public recreational or cultural interest.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Informational or Guide Signs, page 51",
    url: hb(53),
  },
  {
    key: "mileposts",
    quote:
      "Zero mileage should begin at the south and west state lines or at junctions where routes begin.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Mileposts, page 52",
    url: hb(54),
  },
  {
    key: "centerline-colors",
    quote:
      "Under the new Uniform Code, centerlines are to be painted yellow on two lane highways and white on multi-lane highways and one way streets.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Pavement Markings, page 52",
    url: hb(54),
  },
  {
    key: "solid-yellow",
    quote:
      "If the solid yellow line is on your side of the centerline, you may not pass. If passing is not allowed for traffic in both directions, the broken line will be replaced by two solid yellow lines.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Pavement Markings, page 52",
    url: hb(54),
  },
  {
    key: "lane-dividers",
    quote:
      "When a roadway consists of two or more traffic lanes for vehicles moving in one direction, the lanes are divided by broken white lines. These broken lines may be crossed when passing.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Pavement Markings, page 52",
    url: hb(54),
  },
  {
    key: "edge-line",
    quote:
      "This line indicates the outside edge of the traffic lane, and may be crossed only by traffic moving to or from the shoulder.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Pavement Markings, page 52",
    url: hb(54),
  },
  {
    key: "double-white",
    quote:
      "A double solid white line is used to delineate a travel lane where travel is the same direction and is permitted on both sides of the line, but crossing the double lines is prohibited.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Pavement Markings, page 53",
    url: hb(55),
  },
  {
    key: "crosswalk-stop",
    quote:
      "A driver must stop at all crosswalks which are occupied by pedestrians if there are no controlling signals.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Pavement Markings, page 53",
    url: hb(55),
  },
  {
    key: "two-way-left-turn-lane",
    quote:
      "Multi-lane, two-way roadway, with two way left turn lane reserved exclusively for left turning vehicles in either direction.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Pavement Markings, page 54",
    url: hb(56),
  },
  {
    key: "signal-red",
    quote:
      "Stop when signal is steady circular red. Remain stopped until signal turns to green. Right turn, and in certain instances, left turn movements after stopping are permitted.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Traffic Signals, page 54",
    url: hb(56),
  },
  {
    key: "signal-yellow",
    quote:
      "A circular steady yellow means clear the intersection. It follows a green signal. You must not enter the intersection when the red signal comes on.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Traffic Signals, page 54",
    url: hb(56),
  },
  {
    key: "signal-green",
    quote:
      "Go when signal is steady circular green. You may go straight or turn right or left, yielding to other vehicles and pedestrians lawfully within the intersection. A sign may prohibit a turn or turns.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Traffic Signals, page 54",
    url: hb(56),
  },
  {
    key: "rr-flashing-red",
    quote:
      "Always stop when the lights begin to flash because a train is near. Do not proceed until you can do so safely.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Traffic Signals, page 55",
    url: hb(57),
  },
  {
    key: "green-arrow",
    quote:
      "GREEN ARROWS permit you to proceed in the direction of the arrow while opposing traffic must stop.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Vehicle Turns, page 55",
    url: hb(57),
  },
  {
    key: "yellow-arrow",
    quote:
      "YELLOW ARROWS come after green arrows to indicate that the protected movement indicated by the green arrow is being terminated.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Vehicle Turns, page 55",
    url: hb(57),
  },
  {
    key: "yellow-arrow-red",
    quote:
      "A steady YELLOW ARROW displayed alone or with a steady circular red is used to clear the previous protected green arrow movement. You may not enter the intersection after the yellow arrow goes out.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Vehicle Turns, page 56",
    url: hb(58),
  },
  {
    key: "red-x",
    quote:
      "A driver facing this indication shall not drive in the lane over which the signal is located, and this indication shall modify accordingly all other traffic controls present.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Lane Use Control Signals, page 56",
    url: hb(58),
  },
  {
    key: "yellow-x",
    quote:
      "Potentially hazardous conditions exist when the steady yellow \"X\" is displayed.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Lane Use Control Signals, page 56",
    url: hb(58),
  },
  {
    key: "roundabout-yield-left",
    quote:
      "Before entering a roundabout, yield to pedestrians and bicyclists. Yield to traffic on your left already in the roundabout. Enter the roundabout when there is a safe gap in traffic.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Steps for Driving a Roundabout, page 57",
    url: hb(59),
  },
  {
    key: "roundabout-miss-exit",
    quote:
      "If you miss your exit, drive around the roundabout again to your exit. Never back up when in a roundabout.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Important Things to Remember About Roundabouts, page 58",
    url: hb(60),
  },
  {
    key: "roundabout-emergency",
    quote:
      "If you have entered the roundabout, continue to your exit, then pull over and allow emergency vehicles to pass.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Emergency Vehicles in the Roundabout, page 58",
    url: hb(60),
  },
  {
    key: "truck-apron",
    quote: "Truck aprons are not intended to be used by cars, pickup trucks, or SUVs.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Truck Apron, page 58",
    url: hb(60),
  },
  {
    key: "roundabout-row",
    quote:
      "Vehicles already in the roundabout have the right-of-way. Never make a left turn to enter a roundabout; when there's a safe gap in the traffic, turn to the right to enter the roundabout.",
    source: MANUAL,
    section: "Chapter 5 - Signs, Signals and Road Markings: Important Things to Remember About Roundabouts, page 58",
    url: hb(60),
  },
  // ---------------------------------------------------------------- Chapter 6
  {
    key: "basic-speed-law",
    quote:
      "Alabama's basic speed law provides that you must never drive a vehicle at a speed that is faster than reasonable under existing conditions.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Speed Regulations, page 59",
    url: hb(61),
  },
  {
    key: "municipal-max",
    quote: "All speed limits in municipalities are maximum speeds.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Speed Limits, page 59",
    url: hb(61),
  },
  {
    key: "statutory-speeds",
    quote:
      "STATUTORY SPEED LIMITS INCLUDE: 30 miles per hour in an urban district 35 miles per hour unpaved road 45 miles per hour county paved road (unless posted) 55 miles per hour in other locations 65 miles per hour where posted 70 miles per hour where posted on interstate",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Statutory Speed Limits, page 60",
    url: hb(62),
  },
  {
    key: "minimum-speed",
    quote:
      "Where they are posted, any speed below that minimum is considered to be unlawful under normal weather, road, and traffic conditions.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Statutory Speed Limits, page 60",
    url: hb(62),
  },
  {
    key: "slow-speeds",
    quote:
      "Slower speeds are necessary when you approach or cross a street, highway, or railroad crossing and also when approaching flags, flares, or fuses on roads. Slow down when approaching crests of hills and curves.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Slow Speeds Often Required, page 60",
    url: hb(62),
  },
  {
    key: "stop-sign-where",
    quote:
      "A vehicle approaching a STOP sign must stop at the marked stop line. If no stop line is marked, the vehicle must stop before entering the crosswalk on the near side of the intersection.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Stopping, page 60",
    url: hb(62),
  },
  {
    key: "stop-sign-no-crosswalk",
    quote:
      "If there is no crosswalk, the vehicle must stop before entering the crossing street at the point nearest the intersection where the driver has a clear view of approaching traffic.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Stopping, page 60",
    url: hb(62),
  },
  {
    key: "stop-second-time",
    quote:
      "Proceed cautiously. You may have to stop a second time if your view was blocked at the first stop and there is conflicting traffic.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Stopping, page 60",
    url: hb(62),
  },
  {
    key: "alley-stop",
    quote:
      "When coming from an alley, private driveway, or building within a business or residence district. Always stop before crossing the sidewalk or crosswalk area.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Stopping, page 60",
    url: hb(62),
  },
  {
    key: "school-patrol",
    quote: "When a school patrol member is displaying an official flag in a STOP position.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Stopping, page 60",
    url: hb(62),
  },
  {
    key: "right-on-red",
    quote:
      "You may make a right turn after stopping for a red light if you are in the proper lane for such turn.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Stopping, page 60",
    url: hb(62),
  },
  {
    key: "red-turns-yield",
    quote:
      "In the case of both right and left turns after stopping for a red light, you must yield to other traffic and pedestrians lawfully proceeding through the intersection. Such turns cannot be made against a red light if a sign has been posted prohibiting such turn.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Stopping, page 61",
    url: hb(63),
  },
  {
    key: "inoperative-signal",
    quote: "If the traffic light is inoperative, treat the intersection as you would a four-way stop.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Stopping, page 61",
    url: hb(63),
  },
  {
    key: "flashing-red",
    quote: "At a flashing red signal. This means the same as a STOP sign.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Stopping, page 61",
    url: hb(63),
  },
  {
    key: "emergency-vehicle-stop",
    quote:
      "When an emergency vehicle is coming toward you or approaches from behind, displaying flashing red or blue lights and activating a siren, you must pull over to the curb or side of the road and come to a complete stop.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Stopping, page 61",
    url: hb(63),
  },
  {
    key: "yield-stop",
    quote:
      "At a yield sign if there are pedestrians or vehicles crossing the intersecting street or highway.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Stopping, page 61",
    url: hb(63),
  },
  {
    key: "school-bus-stop",
    quote:
      "When you are following or meeting a school bus or church bus stopped on the road while the stop signal arm is extended and displaying flashing red lights. Remain stopped until the stop signal is retracted and red lights are turned off.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Stopping, page 61",
    url: hb(63),
  },
  {
    key: "school-bus-undivided",
    quote:
      "You should also stop when meeting or following a school or church bus which is stopped on a four to six lane undivided highway.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Stopping, page 61",
    url: hb(63),
  },
  {
    key: "school-bus-divided",
    quote:
      "A stop is not required on a divided highway having four or more lanes which permits at least two lanes of traffic to travel in opposite directions when meeting a school or church bus which is stopped in the opposing roadway",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Stopping, page 61",
    url: hb(63),
  },
  {
    key: "school-bus-20-feet",
    quote:
      "COMING FROM EITHER DIRECTION YOU MUST STOP WHEN YOU SEE THESE SIGNALS DISPLAYED. STOP AT LEAST 20 FEET FROM THE BUS.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: School Buses, page 62",
    url: hb(64),
  },
  {
    key: "school-bus-amber",
    quote:
      "FLASHING AMBER LIGHTS ARE A PRE-WARNING THAT THE BUS IS PREPARING TO STOP TO LOAD OR UNLOAD CHILDREN. IN RURAL AREAS, THE LIGHTS ARE USED AT LEAST 300 FEET BEFORE STOPPING AND IN MUNICIPALITIES AT LEAST 100 FT.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: School Buses, page 62",
    url: hb(64),
  },
  {
    key: "row-unlawful-speed",
    quote:
      "If you enter an uncontrolled intersection at an unlawful speed, you lose any right of way which you might otherwise have.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Right of Way and Yielding, page 63",
    url: hb(65),
  },
  {
    key: "emergency-vehicle-intersection",
    quote:
      "Whether the emergency vehicle is overtaking or meeting you, pull to the side of the roadway and stop. In an intersection, clear it before stopping. Don't proceed until the emergency vehicle has passed.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Right of Way and Yielding, page 63",
    url: hb(65),
  },
  {
    key: "blind-pedestrian",
    quote:
      "The law requires you to stop and give right of way at any intersection to a blind person carrying a white cane tipped with red and holding the cane with arm extended, or using a guide dog.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Right of Way and Yielding, page 63",
    url: hb(65),
  },
  {
    key: "private-road-yield",
    quote:
      "Cars entering from a private road or driveway must stop and yield to cars on a public street or highway.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Right of Way and Yielding, page 63",
    url: hb(65),
  },
  {
    key: "left-turn-yield",
    quote:
      "When making a left turn within an intersection or into an alley, driveway, or private road, you must yield the right of way to any vehicle approaching from the opposite direction when it is within the intersection or so close as to constitute an immediate hazard.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Right of Way and Yielding, page 63",
    url: hb(65),
  },
  {
    key: "green-arrow-yield",
    quote:
      "Vehicles entering an intersection on \"green arrows\" must yield to other traffic lawfully using the intersection.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Right of Way and Yielding, page 63",
    url: hb(65),
  },
  {
    key: "passing-two-lane",
    quote:
      "On two-lane roads with traffic moving in both directions, you may pass traffic on the left if the pass can be completed safely without exceeding the speed limit.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: No Passing Zones, page 64",
    url: hb(66),
  },
  {
    key: "passing-signals",
    quote:
      "Activate left turn signals before passing, and right turn signals after passing and before returning to the right lane. Do not return to the right lane too soon - not until you can see the entire front of the vehicle you have just passed in your interior rear view mirror.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: No Passing Zones, page 64",
    url: hb(66),
  },
  {
    key: "being-passed",
    quote: "When another car is trying to pass you, stay in your own lane and don't increase speed.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: No Passing Zones, page 64",
    url: hb(66),
  },
  {
    key: "passing-right",
    quote:
      "Passing on the right is permissible on one-way roadways and streets and highways marked for two or more lanes of traffic moving in the same direction.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: No Passing Zones, page 64",
    url: hb(66),
  },
  {
    key: "shoulder-passing",
    quote:
      "It is unlawful to drive on the shoulder to pass except during an emergency or when so directed by traffic authorities.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Passing, page 65",
    url: hb(67),
  },
  {
    key: "no-pass-500",
    quote:
      "You may not cross the center line to pass: On a curve or hill where you cannot see a clear passing distance of at least 500 feet. At a highway intersection. When meeting an oncoming vehicle.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Passing, page 65",
    url: hb(67),
  },
  {
    key: "double-yellow",
    quote:
      "Double solid yellow prohibits traffic from both directions from crossing the center line to pass.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Passing, page 65",
    url: hb(67),
  },
  {
    key: "drivers-must-pedestrians",
    quote:
      "DRIVERS MUST: Stop for school children and school safety patrols directing movement. Yield to blind pedestrians with canes and/or guide dogs. Not block crosswalks when at a stop sign or waiting on a red light. Stop for a school bus displaying an extended stop arm.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Pedestrians, page 65",
    url: hb(67),
  },
  {
    key: "pedestrians-yield",
    quote: "PEDESTRIANS MUST: Yield to all vehicles when crossing at points other than crosswalks.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Pedestrians, page 65",
    url: hb(67),
  },
  {
    key: "walk-left",
    quote: "When walking on a roadway, stay as far left as possible, in single file.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Safety Rules for Pedestrians, page 65",
    url: hb(67),
  },
  {
    key: "following-emergency-500",
    quote:
      "Only vehicles on necessary official business are permitted to follow within 500 feet of emergency vehicles on an emergency run. Don't drive over an unprotected fire hose unless authorized to do so by a police officer or fire department official.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Following Emergency Vehicles, page 65",
    url: hb(67),
  },
  {
    key: "backing-look",
    quote:
      "Before backing, you should look to the front, sides, and rear and continue to look over your right shoulder to the rear while backing. Do not depend on your mirror.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Other Traffic Laws, page 66",
    url: hb(68),
  },
  {
    key: "backing-freeway",
    quote:
      "Backing is prohibited on controlled access highways (freeways and expressways) except for emergency vehicles in performance of their duties.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Other Traffic Laws, page 66",
    url: hb(68),
  },
  {
    key: "backing-driveway",
    quote:
      "If you back out of a driveway, always back into the nearest lane and proceed from there. Never back across other traffic lanes.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Other Traffic Laws, page 66",
    url: hb(68),
  },
  {
    key: "shoulder-driving",
    quote: "Driving on shoulders is unlawful unless required by emergency conditions.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Other Traffic Laws, page 66",
    url: hb(68),
  },
  {
    key: "lane-change-blind-spot",
    quote:
      "Do not rely solely on your mirror when checking for clearance. Glance over your shoulder to check the \"blind spot\" your mirror does not cover.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Changing Lanes, page 66",
    url: hb(68),
  },
  {
    key: "signal-no-right",
    quote:
      "You should show your intentions to other drivers by using turn signals or hand signals, but remember that a signal does not grant the right to change lanes.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Changing Lanes, page 66",
    url: hb(68),
  },
  {
    key: "hand-signals",
    quote:
      "The correct hand signals are: STOP OR DECREASE SPEED…..hand and arm extended downward. LEFT TURN ......hand and arm extended out. RIGHT TURN......hand and arm extended upward.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Changing Lanes, page 66",
    url: hb(68),
  },
  {
    key: "front-seat-three",
    quote:
      "It is unlawful to drive any vehicle so loaded or when there are such numbers of persons in excess of three in the front seat as to obstruct the driver's view to the front and sides or hinder the driver's control over his vehicle.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Loads Must Conform to Law, page 67",
    url: hb(69),
  },
  {
    key: "load-red-flag",
    quote:
      "If a load projects 4 feet or more from the rear of a vehicle, a red flag at least 12 inches square must be attached at its end in daytime and a red light, visible for at least 200 feet, must be attached to the end at night.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Loads Must Conform to Law, page 67",
    url: hb(69),
  },
  {
    key: "traffic-stop-hands",
    quote:
      "Keep both hands on the steering wheel to ensure they are easily seen.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: What To Do and Expect During Law Enforcement Stop, page 67",
    url: hb(69),
  },
  {
    key: "traffic-stop-weapons",
    quote: "If there are weapons in the vehicle, inform the officer upon first contact.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: What To Do and Expect During Law Enforcement Stop, page 67",
    url: hb(69),
  },
  {
    key: "traffic-stop-night",
    quote:
      "If a stop occurs at night, turn on your vehicle's interior lights to assist the officer.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: What To Do and Expect During Law Enforcement Stop, page 67",
    url: hb(69),
  },
  {
    key: "citation-signature",
    quote:
      "Your acceptance and signature on a traffic citation is not an admission of guilt, but the refusal to a traffic citation may result in your arrest.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: What To Do and Expect During Law Enforcement Stop, page 67",
    url: hb(69),
  },
  {
    key: "documents-stop",
    quote: "DOCUMENTS REQUIRED AT TRAFFIC STOPS Driver License Proof of Insurance Vehicle Registration",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Documents Required at Traffic Stops, page 68",
    url: hb(70),
  },
  {
    key: "mli-minimums",
    quote:
      "Liability insurance policies must be issued by insurers licensed to do business in Alabama for no less than: $25,000 for death or bodily injury to one person; $50,000 for death or bodily injury to two or more persons; and $25,000 for damage or destruction of property.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Mandatory Liability Insurance Law, page 68",
    url: hb(70),
  },
  {
    key: "mli-penalty",
    quote:
      "An owner or operator convicted of a mandatory liability insurance violation may be fined up to $500 for the first violation and up to $1,000 for the second or subsequent violation and/or a six month driver's license suspension.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Mandatory Liability Insurance Law, page 68",
    url: hb(70),
  },
  {
    key: "tint-windshield",
    quote:
      "On all vehicles, regardless of classification, only the upper 6 inches of the front windshield may be tinted with a transparent material.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Window Tinting, page 68",
    url: hb(70),
  },
  {
    key: "tint-32",
    quote:
      "On passenger cars such as sedans, coupes and station wagons, all windows (side and rear) may have tinting that allows at least 32 percent light transmission.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Window Tinting, page 68",
    url: hb(70),
  },
  {
    key: "move-over-4-lane",
    quote:
      "When approaching emergency vehicles stopped with flashing emergency lights, or wreckers displaying flashing amber lights, motorists on roadways with four or more lanes must vacate the lane closest to the emergency vehicle or wrecker.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Move-Over Law, page 68",
    url: hb(70),
  },
  {
    key: "move-over-slow",
    quote:
      "When changing lanes is unsafe or not possible, the driver must slow to a speed that is at least 15 miles per hour less then the posted speed limit.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Move-Over Law, page 68",
    url: hb(70),
  },
  {
    key: "move-over-two-lane",
    quote:
      "slow to a speed that is 15 miles per hour less than the posted speed limit when the posted speed is 25 miles per hour or greater or travel 10 miles per hour when the posted speed limit is 20 miles per hour or less.",
    source: MANUAL,
    section: "Chapter 6 - Traffic Laws: Move-Over Law, page 68",
    url: hb(70),
  },
  // ---------------------------------------------------------------- Chapter 7
  {
    key: "night-half-fatal",
    quote:
      "Approximately half the fatal motor vehicle crashes in Alabama occur during the hours of darkness.",
    source: MANUAL,
    section: "Chapter 7 - Adjust to Driving Conditions: Night Driving, page 69",
    url: hb(71),
  },
  {
    key: "overdriving-headlights",
    quote:
      "You should never drive so fast that you cannot stop within the distance you can see ahead with your lights. Headlights on high beam normally illuminate the roadway about 350 feet UNDER NORMAL CONDITIONS.",
    source: MANUAL,
    section: "Chapter 7 - Adjust to Driving Conditions: Night Driving, page 69",
    url: hb(71),
  },
  {
    key: "dim-500-200",
    quote:
      "You must dim your headlights when within 500 feet of an oncoming vehicle and within 200 feet when following another vehicle.",
    source: MANUAL,
    section: "Chapter 7 - Adjust to Driving Conditions: Night Driving, page 69",
    url: hb(71),
  },
  {
    key: "keep-dimmed",
    quote:
      "If, after you depress yours, and the other driver fails to do so, keep yours depressed anyway. You prove nothing if you blind the approaching driver with your high beam because you are endangering yourself.",
    source: MANUAL,
    section: "Chapter 7 - Adjust to Driving Conditions: Night Driving, page 70",
    url: hb(72),
  },
  {
    key: "headlights-when",
    quote:
      "According to state law, headlights (not parking lights only) must be turned on from a half-hour after sunset to a half-hour before sunrise and during other periods of limited visibility when you cannot see clearly for at least 500 feet.",
    source: MANUAL,
    section: "Chapter 7 - Adjust to Driving Conditions: Night Driving, page 69",
    url: hb(71),
  },
  {
    key: "glare",
    quote:
      "Glare from oncoming lights can be reduced by directing your vision AWAY from them. This is done by looking to the right-hand edge of the pavement and concentrating on the white striped line.",
    source: MANUAL,
    section: "Chapter 7 - Adjust to Driving Conditions: Night Driving, page 70",
    url: hb(72),
  },
  {
    key: "night-breakdown",
    quote:
      "Pull well off the highway or on the shoulder. Activate four-way flashers and raise hood. Stay with the car, if possible, until help comes.",
    source: MANUAL,
    section: "Chapter 7 - Adjust to Driving Conditions: Night Driving, page 70",
    url: hb(72),
  },
  {
    key: "flares",
    quote:
      "If you have flares or reflectors, place them from 100 to 500 feet to the rear of your vehicle on the right hand edge of the highway to warn other traffic.",
    source: MANUAL,
    section: "Chapter 7 - Adjust to Driving Conditions: Night Driving, page 70",
    url: hb(72),
  },
  {
    key: "pedestrian-night",
    quote:
      "If you MUST become a pedestrian, carry a light and walk on the left edge of the road or shoulder FACING the traffic.",
    source: MANUAL,
    section: "Chapter 7 - Adjust to Driving Conditions: Night Driving, page 70",
    url: hb(72),
  },
  {
    key: "snow-tires-ice",
    quote:
      "Although snow treads are a great help under normal winter driving conditions, they do not give proper traction on ice.",
    source: MANUAL,
    section: "Chapter 7 - Adjust to Driving Conditions: Winter Driving, page 71",
    url: hb(73),
  },
  {
    key: "wipers-headlights",
    quote:
      "Alabama law requires that headlights be turned on when the windshield wipers of the vehicle are in use because of rain, sleet, or snow. Intermittent use of windshield wipers does not require headlight usage.",
    source: MANUAL,
    section: "Chapter 7 - Adjust to Driving Conditions: Windshield Wipers/Headlights, page 71",
    url: hb(73),
  },
  {
    key: "ice-stopping",
    quote:
      "Remember that on snow or ice it takes three to twelve times as much distance to stop your car as on dry pavement.",
    source: MANUAL,
    section: "Chapter 7 - Adjust to Driving Conditions: Slippery Roads Are Hazardous, page 71",
    url: hb(73),
  },
  {
    key: "pump-brakes",
    quote: "If you should have to stop suddenly on a slippery surface, pump your brakes.",
    source: MANUAL,
    section: "Chapter 7 - Adjust to Driving Conditions: Slippery Roads Are Hazardous, page 71",
    url: hb(73),
  },
  {
    key: "skid-no-brake",
    quote:
      "Since braking will only increase the velocity of the skid and cause the loss of steering control when the front wheels lock, do not apply pressure on the brake until you regain control of your forward direction.",
    source: MANUAL,
    section: "Chapter 7 - Adjust to Driving Conditions: Skidding, page 71",
    url: hb(73),
  },
  {
    key: "skid-fwd",
    quote:
      "STEPPING LIGHTLY ON THE GAS WILL INCREASE FRONT WHEEL SPEED, so the front end can catch up with the sliding rear end and straighten out the skid.",
    source: MANUAL,
    section: "Chapter 7 - Adjust to Driving Conditions: Skidding, page 72",
    url: hb(74),
  },
  {
    key: "skid-steer",
    quote:
      "The next best action is to disengage the transmission, either by jamming in the clutch with standard transmission vehicles or shifting into neutral with automatic transmission, and steer in the direction the rear of the vehicle is skidding.",
    source: MANUAL,
    section: "Chapter 7 - Adjust to Driving Conditions: Skidding, page 72",
    url: hb(74),
  },
  {
    key: "hydroplane-35-55",
    quote:
      "In a standard passenger car, partial hydroplaning starts at about 35 mph and increases with speed to about 55 mph, at which point the tires may be totally on the water.",
    source: MANUAL,
    section: "Chapter 7 - Adjust to Driving Conditions: Hydroplaning, page 72",
    url: hb(74),
  },
  {
    key: "hydroplane-response",
    quote:
      "The best thing to do is to take your foot off the accelerator and let the car slow down.",
    source: MANUAL,
    section: "Chapter 7 - Adjust to Driving Conditions: Hydroplaning, page 72",
    url: hb(74),
  },
  {
    key: "hydroplane-tread",
    quote:
      "When the depth of the water exceeds the depth of the treads, complete hydroplaning can be expected at speeds above 50 mph.",
    source: MANUAL,
    section: "Chapter 7 - Adjust to Driving Conditions: Hydroplaning, page 72",
    url: hb(74),
  },
  {
    key: "fog-low-beam",
    quote:
      "Keep headlights on low beam to reduce the glaring reflection of your lights on the thick fog blanket or blinding snow.",
    source: MANUAL,
    section: "Chapter 7 - Adjust to Driving Conditions: Driving in Fog, Snow, page 73",
    url: hb(75),
  },
  {
    key: "fog-pull-off",
    quote:
      "If it is impossible to see or you become weary of straining your eyes to see with such poor visibility, pull completely off the road, leave lights on and park. Wait until visibility improves.",
    source: MANUAL,
    section: "Chapter 7 - Adjust to Driving Conditions: Driving in Fog, Snow, page 73",
    url: hb(75),
  },
  {
    key: "hills-horn",
    quote:
      "Don't hesitate to use your horn, as you round hazardous curves to let the other drivers know they aren't alone on the narrow road.",
    source: MANUAL,
    section: "Chapter 7 - Adjust to Driving Conditions: Driving in Hilly Country, page 73",
    url: hb(75),
  },
  {
    key: "coasting",
    quote: "The law also forbids you to coast downhill with the transmission in neutral.",
    source: MANUAL,
    section: "Chapter 7 - Adjust to Driving Conditions: Driving in Hilly Country, page 73",
    url: hb(75),
  },
  {
    key: "co-symptoms",
    quote:
      "Carbon monoxide fumes are odorless and deadly. Symptoms of carbon monoxide poisoning are sudden weariness, yawning, dizziness and nausea.",
    source: MANUAL,
    section: "Chapter 7 - Adjust to Driving Conditions: Carbon Monoxide, page 73",
    url: hb(75),
  },
  {
    key: "think-before-act",
    quote:
      "Often, an instinctive reaction such as slamming on your brakes while skidding, may be the wrong reaction.",
    source: MANUAL,
    section: "Chapter 7 - Adjust to Driving Conditions: Driving Emergencies, page 73",
    url: hb(75),
  },
  {
    key: "blowout",
    quote:
      "To regain control, hold tightly to the steering wheel, steer straight and ease up on the accelerator. Do not brake until the vehicle is under control.",
    source: MANUAL,
    section: "Chapter 7 - Adjust to Driving Conditions: Driving Emergencies - Blowouts, page 73",
    url: hb(75),
  },
  {
    key: "steering-failure",
    quote:
      "If you suddenly lose control of your steering and the wheel no longer responds to your turning movements, ease up on the accelerator, but do not brake.",
    source: MANUAL,
    section: "Chapter 7 - Adjust to Driving Conditions: Driving Emergencies - Steering failure, page 74",
    url: hb(76),
  },
  {
    key: "brake-failure",
    quote:
      "If your brake pedal suddenly sinks all the way to the floor, try pumping the pedal to build up the pressure.",
    source: MANUAL,
    section: "Chapter 7 - Adjust to Driving Conditions: Driving Emergencies - Brake failure, page 74",
    url: hb(76),
  },
  {
    key: "brake-failure-parking",
    quote:
      "If pumping the pedal does not build up the pressure, use your emergency or parking brake, but apply gently so that you do not lock the brakes and throw your car into a skid.",
    source: MANUAL,
    section: "Chapter 7 - Adjust to Driving Conditions: Driving Emergencies - Brake failure, page 74",
    url: hb(76),
  },
  {
    key: "run-off-pavement",
    quote:
      "If your wheels drift onto the shoulder of the road, don't try to swerve back onto the pavement because you might throw your car off balance. Instead, stay on the shoulder and reduce speed.",
    source: MANUAL,
    section: "Chapter 7 - Adjust to Driving Conditions: Driving Emergencies - Running off the pavement, page 74",
    url: hb(76),
  },
  {
    key: "oncoming-in-lane",
    quote:
      "If you see a car coming toward you in your lane, pull to the right and slow down. Sound your horn. At night, flash your lights.",
    source: MANUAL,
    section: "Chapter 7 - Adjust to Driving Conditions: Driving Emergencies - Car approaching in your lane, page 74",
    url: hb(76),
  },
  {
    key: "car-passing-you",
    quote:
      "If the passing car is at a point where the pass can be completed with your help, slow your speed to allow the driver to move ahead of you quickly.",
    source: MANUAL,
    section: "Chapter 7 - Adjust to Driving Conditions: Driving Emergencies - Car attempting to pass you, page 74",
    url: hb(76),
  },
  {
    key: "stall-tracks",
    quote:
      "If you cannot get the car off the tracks, and a train is approaching, abandon the vehicle, and quickly walk alongside the tracks in the direction of the approaching train so that you will not be struck by debris when the vehicle is hit.",
    source: MANUAL,
    section: "Chapter 7 - Adjust to Driving Conditions: Driving Emergencies - Stalling on railroad tracks, page 75",
    url: hb(77),
  },
  {
    key: "immersion",
    quote:
      "If your car plunges into deep water BUT DOES NOT SINK, immediately escape through a window. Opening a door, even if possible, will permit the water to enter the car more rapidly.",
    source: MANUAL,
    section: "Chapter 7 - Adjust to Driving Conditions: Driving Emergencies - Immersion, page 75",
    url: hb(77),
  },
  {
    key: "fire",
    quote:
      "If no fire extinguisher is available, use dirt or sand to smother the fire. Do not use water, for burning gasoline will float on it and spread the blaze.",
    source: MANUAL,
    section: "Chapter 7 - Adjust to Driving Conditions: Driving Emergencies - Fire, page 75",
    url: hb(77),
  },
  {
    key: "overheating",
    quote:
      "If steam begins to come from under the hood, your cooling system is boiling. Pull to the side of the road and turn off your engine. DO NOT OPEN THE RADIATOR CAP.",
    source: MANUAL,
    section: "Chapter 7 - Adjust to Driving Conditions: Driving Emergencies - Overheating, page 75",
    url: hb(77),
  },
  {
    key: "stuck-accelerator",
    quote:
      "If your accelerator pedal sticks, you may be able to free it by hooking your toe under the pedal and attempting to raise it. If not, you can turn the engine off and thus slow the vehicle down.",
    source: MANUAL,
    section: "Chapter 7 - Adjust to Driving Conditions: Driving Emergencies - Stuck accelerator pedal, page 75",
    url: hb(77),
  },
  {
    key: "wiper-failure",
    quote:
      "If your wipers suddenly fail in blinding rain or snow, slow down, roll down your side window, and put your head out so that you can see ahead. Then move your car off the highway.",
    source: MANUAL,
    section: "Chapter 7 - Adjust to Driving Conditions: Driving Emergencies - Windshield wiper failure, page 75",
    url: hb(77),
  },
  // ---------------------------------------------------------------- Chapter 8
  {
    key: "freeway-keep-right",
    quote:
      "Slower moving vehicles, those traveling at less than the normal speed of traffic at that time, MUST KEEP TO THE RIGHT.",
    source: MANUAL,
    section: "Chapter 8 - Driving the Freeways, page 76",
    url: hb(78),
  },
  {
    key: "freeway-lane",
    quote:
      "Cutting from one lane to another is a dangerous practice. Choose the lane in which traffic is moving at the pace you prefer and stay in it.",
    source: MANUAL,
    section: "Chapter 8 - Driving the Freeways, page 76",
    url: hb(78),
  },
  {
    key: "freeway-breakdown",
    quote:
      "Open the trunk, raise the hood if weather permits and tie a white cloth to a door handle or antenna, where it can best be seen. These are distress signals, and any law enforcement officer seeing them will give you assistance.",
    source: MANUAL,
    section: "Chapter 8 - Driving the Freeways, page 76",
    url: hb(78),
  },
  {
    key: "freeway-parking",
    quote: "Other than in a case of emergency, parking is not permitted on the freeway.",
    source: MANUAL,
    section: "Chapter 8 - Driving the Freeways, page 76",
    url: hb(78),
  },
  {
    key: "star-hp",
    quote:
      "For highway emergencies, to report accidents and drunk drivers, dial *HP or (*47) toll-free on your cell-phone to contact Alabama State Troopers.",
    source: MANUAL,
    section: "Chapter 8 - Driving the Freeways, page 76",
    url: hb(78),
  },
  {
    key: "acceleration-lane",
    quote:
      "As you approach and enter the acceleration lane, increase speed to match that of vehicles in the through lanes, if possible. Watch for an opening, activate your turn signal, and merge smoothly with the other traffic.",
    source: MANUAL,
    section: "Chapter 8 - Driving the Freeways: Entering the Freeway, page 76",
    url: hb(78),
  },
  {
    key: "merge-yield",
    quote:
      "Drivers on the freeway should allow room for those entering, but you must yield to them if they do not. DO NOT come to a full stop in the acceleration lane unless absolutely necessary.",
    source: MANUAL,
    section: "Chapter 8 - Driving the Freeways: Entering the Freeway, page 76",
    url: hb(78),
  },
  {
    key: "interchange-def",
    quote:
      "The intersection of two highways at different levels (over and under) with separate connecting roads for the transfer of traffic from one highway to the other is called an interchange.",
    source: MANUAL,
    section: "Chapter 8 - Driving the Freeways: Interchanges, page 77",
    url: hb(79),
  },
  {
    key: "cloverleaf",
    quote:
      "Designed to allow turning movements off or onto the freeway from four directions, using loop type connections. It eliminates left turn and cross traffic conflicts for all movements.",
    source: MANUAL,
    section: "Chapter 8 - Driving the Freeways: Cloverleaf Interchange, page 77",
    url: hb(79),
  },
  {
    key: "diamond",
    quote:
      "Characterized by four ramps, allowing vehicles to enter or leave the main highway while flowing with the traffic. Left turns are made AFTER leaving the freeway.",
    source: MANUAL,
    section: "Chapter 8 - Driving the Freeways: Diamond Interchange, page 78",
    url: hb(80),
  },
  {
    key: "exit-plan",
    quote:
      "Signal your turn, move into the deceleration lane and reduce your speed as you prepare to enter the exit ramp. Never reduce speed suddenly on the freeway.",
    source: MANUAL,
    section: "Chapter 8 - Driving the Freeways: Leaving the Freeway, page 78",
    url: hb(80),
  },
  {
    key: "missed-exit",
    quote: "proceed to the next exit and come back to the one you missed.",
    source: MANUAL,
    section: "Chapter 8 - Driving the Freeways: Leaving the Freeway, page 78",
    url: hb(80),
  },
  // ---------------------------------------------------------------- Chapter 9
  {
    key: "two-brakes",
    quote:
      "All automobiles must have two separate methods of applying brakes. They must have a regular foot brake and a parking brake.",
    source: MANUAL,
    section: "Chapter 9 - Your Vehicle: Brakes, page 79",
    url: hb(81),
  },
  {
    key: "muffler",
    quote: "Muffler cutouts, bypasses or similar devices are forbidden.",
    source: MANUAL,
    section: "Chapter 9 - Your Vehicle: Mufflers, page 79",
    url: hb(81),
  },
  {
    key: "mirror-200",
    quote: "To enable the driver to see 200 feet to the rear are required on all vehicles.",
    source: MANUAL,
    section: "Chapter 9 - Your Vehicle: Rear View Mirrors, page 79",
    url: hb(81),
  },
  {
    key: "lights-required",
    quote:
      "Motor vehicles must be equipped with at least two headlights (white lights), a rear license plate light, a brake light, and at least one red taillight. All lights must be visible from a distance of at least 500 feet.",
    source: MANUAL,
    section: "Chapter 9 - Your Vehicle: Lights, page 79",
    url: hb(81),
  },
  {
    key: "high-beam-350",
    quote:
      "The high beam of the headlight must illuminate objects at a minimum of 350 feet and be in adjustment and alignment.",
    source: MANUAL,
    section: "Chapter 9 - Your Vehicle: Lights, page 79",
    url: hb(81),
  },
  {
    key: "hazard-lights",
    quote:
      "The use of both left and right turn signal lights or other pairs of lights flashing simultaneously to indicate a vehicular hazard is permitted.",
    source: MANUAL,
    section: "Chapter 9 - Your Vehicle: Other Lights, page 79",
    url: hb(81),
  },
  {
    key: "horn-needless",
    quote:
      "Needless use of your horn may result in an arrest. It is unlawful to use a motor vehicle horn for any purpose except in giving warning when reasonably necessary to insure safe operation. Never use the horn to announce arrival or call your passengers.",
    source: MANUAL,
    section: "Chapter 9 - Your Vehicle: Horns, page 80",
    url: hb(82),
  },
  {
    key: "tire-tread",
    quote: "Be sure that you have enough rubber; a tire is illegal if your tread is less than 1/16 inch deep.",
    source: MANUAL,
    section: "Chapter 9 - Your Vehicle: Tires, page 80",
    url: hb(82),
  },
  {
    key: "death-zone",
    quote:
      "Most are struck by motorists who fail to stop for the flashing red lights and extended stop signs. This area around the stopped school bus is referred to as the \"DEATH ZONE.\"",
    source: MANUAL,
    section: "Chapter 9 - Your Vehicle: The Death Zone, page 81",
    url: hb(83),
  },
  // ---------------------------------------------------------------- GDL summary
  {
    key: "gdl-not-apply-18",
    quote: "Does not apply to individuals 18 years of age or older.",
    source: MANUAL,
    section: "Additional Information - GDL Summary, page 84",
    url: hb(86),
  },
  {
    key: "gdl-hold-6",
    quote:
      "A person under the age of 18 may not apply for an unrestricted driver license until that person has held a learner license for at least a six-month period with no violations of the restrictions. (Must be 17.)",
    source: MANUAL,
    section: "Additional Information - GDL Summary, page 84",
    url: hb(86),
  },
  {
    key: "gdl-15-supervision",
    quote:
      "15 year olds with a valid learner license are authorized to drive while accompanied by a parent, legal guardian or a person who is 21 years of age or older who is a licensed driver and occupies the front seat next to the driver",
    source: MANUAL,
    section: "Additional Information - GDL Summary, page 84",
    url: hb(86),
  },
  {
    key: "gdl-16-permission",
    quote:
      "16 year olds must have parental or legal guardian's permission to receive a license and to drive without supervision.",
    source: MANUAL,
    section: "Additional Information - GDL Summary, page 84",
    url: hb(86),
  },
  {
    key: "gdl-passenger",
    quote:
      "May not have more than 1 nonfamily passenger other than the parent, guardian or supervising licensed driver at least 21 years of age. (New for 2010, reduced from four.)",
    source: MANUAL,
    section: "Additional Information - GDL Summary: Restrictions, page 84",
    url: hb(86),
  },
  {
    key: "gdl-curfew",
    quote:
      "The student may not operate a vehicle between 12 midnight and 6 a.m. unless accompanied by a parent or legal guardian unless: Accompanied by a licensee 21 years of age or older with parental consent. Going to or from their regular workplace. Going to or from a school sponsored event.",
    source: MANUAL,
    section: "Additional Information - GDL Summary: Restrictions, page 84",
    url: hb(86),
  },
  {
    key: "gdl-handheld",
    quote:
      "Drive while operating any handheld communication device. (New for 2010) Violations will result in an extension of the graduated license period and/or suspension of the license.",
    source: MANUAL,
    section: "Additional Information - GDL Summary: Restrictions, page 84",
    url: hb(86),
  },
  {
    key: "gdl-no-points",
    quote: "No points will be assessed for violation of the above restrictions.",
    source: MANUAL,
    section: "Additional Information - GDL Summary: Enforcement, page 84",
    url: hb(86),
  },
  {
    key: "gdl-extension",
    quote:
      "Violation of any of the above restrictions will result in the restrictive period being extended by 6 months or until the driver reaches 18 years of age.",
    source: MANUAL,
    section: "Additional Information - GDL Summary: Enforcement, page 84",
    url: hb(86),
  },
  {
    key: "gdl-60-day",
    quote:
      "or any other offense where four or more points are assessed, their license will automatically be suspended for 60 days.",
    source: MANUAL,
    section: "Additional Information - GDL Summary: Enforcement, page 84",
    url: hb(86),
  },
  // ---------------------------------------------------------------- Statute
  {
    key: "st-speed-urban",
    quote: "No person shall operate a vehicle in excess of 30 miles per hour in any urban district.",
    source: CODE("32-5A-171"),
    section: "Title 32, Chapter 5A, Article 8 - Section 32-5A-171 Maximum limits",
    url: code("32-5A-171"),
  },
  {
    key: "st-speed-interstate",
    quote:
      "No person shall operate a motor vehicle, on an interstate highway within the State of Alabama, at a speed in excess of 70 miles per hour or on any other highway having four or more traffic lanes at a speed in excess of 65 miles per hour",
    source: CODE("32-5A-171"),
    section: "Title 32, Chapter 5A, Article 8 - Section 32-5A-171 Maximum limits",
    url: code("32-5A-171"),
  },
  {
    key: "st-following-20ft",
    quote:
      "Except when overtaking and passing another vehicle, the driver of a vehicle shall leave a distance of at least 20 feet for each 10 miles per hour of speed between the vehicle that he or she is driving and the vehicle that he or she is following.",
    source: CODE("32-5A-89"),
    section: "Title 32, Chapter 5A, Article 4 - Section 32-5A-89 Following too closely",
    url: code("32-5A-89"),
  },
  {
    key: "st-left-lane-1-5",
    quote:
      "Upon any interstate highway, except as provided in subdivision (2), a vehicle may not remain in the leftmost lane for more than 1.5 miles without completely passing another vehicle.",
    source: CODE("32-5A-80"),
    section: "Title 32, Chapter 5A, Article 4 - Section 32-5A-80 Driving on right side of roadway; exceptions",
    url: code("32-5A-80"),
  },
  {
    key: "st-row-right",
    quote:
      "When two vehicles approach or enter an intersection from different highways at approximately the same time, the driver of the vehicle on the left shall yield the right-of-way to the vehicle on the right.",
    source: CODE("32-5A-110"),
    section: "Title 32, Chapter 5A, Article 5 - Section 32-5A-110 Vehicle approaching or entering intersection",
    url: code("32-5A-110"),
  },
  {
    key: "st-signal-100",
    quote:
      "A signal of intention to turn right or left when required shall be given continuously during not less than the last 100 feet traveled by the vehicle before turning.",
    source: CODE("32-5A-133"),
    section: "Title 32, Chapter 5A, Article 6 - Section 32-5A-133 Turning movements and required signals",
    url: code("32-5A-133"),
  },
  {
    key: "st-rr-stop",
    quote:
      "the driver of such vehicle shall stop within 50 feet but not less than 15 feet from the nearest rail of such railroad, and shall not proceed until he or she can do so safely.",
    source: CODE("32-5A-150"),
    section: "Title 32, Chapter 5A, Article 7 - Section 32-5A-150 Obedience to signal indicating approach of train",
    url: code("32-5A-150"),
  },
  {
    key: "st-school-bus-fine",
    quote:
      "Upon first conviction, a person violating subsection (a) shall be punished by a fine of not less than one hundred fifty dollars ($150) nor more than three hundred dollars ($300).",
    source: CODE("32-5A-154"),
    section: "Title 32, Chapter 5A, Article 7 - Section 32-5A-154 Overtaking and passing school bus or church bus; penalties and fines",
    url: code("32-5A-154"),
  },
  {
    key: "st-move-over-fine",
    quote:
      "A violation of this subsection is a misdemeanor punishable by a fine of one hundred dollars ($100). Upon a second violation of this subsection, the fine shall be one hundred fifty dollars ($150). Upon a third or subsequent violation, the fine shall be two hundred dollars ($200).",
    source: CODE("32-5A-58.2"),
    section: "Title 32, Chapter 5A, Article 3 - Section 32-5A-58.2 Alabama Move Over Act",
    url: code("32-5A-58.2"),
  },
  {
    key: "st-move-over-vehicles",
    quote:
      "when a garbage, trash, refuse, or recycling collection vehicle is actively collecting garbage, trash, refuse, or recycling materials on the roadside, the driver of every other vehicle, as soon as it is safe, shall do the following",
    source: CODE("32-5A-58.2"),
    section: "Title 32, Chapter 5A, Article 3 - Section 32-5A-58.2 Alabama Move Over Act",
    url: code("32-5A-58.2"),
  },
  {
    key: "st-under-21-30-day",
    quote:
      "upon the first violation of this subsection by a person whose blood alcohol level is between 0.02 and 0.08, the person's driver's license or driving privilege shall be suspended for a period of 30 days",
    source: CODE("32-5A-191"),
    section: "Title 32, Chapter 5A, Article 9 - Section 32-5A-191 Driving while under influence of alcohol, controlled substances, etc.",
    url: code("32-5A-191"),
  },
  {
    key: "st-child-restraint-fine",
    quote:
      "Any person violating the provisions of this section may be fined twenty-five dollars ($25) for each offense.",
    source: CODE("32-5-222"),
    section: "Title 32, Chapter 5, Article 9 - Section 32-5-222 Requirements for child passenger restraints",
    url: code("32-5-222"),
  },
  {
    key: "st-gdl-50-hours",
    quote:
      "certifying that the applicant has completed a minimum of 50 hours of behind-the-wheel driving practice, or submission of a certificate of completion from the State Department of Education that the applicant has passed a driver's education course approved by the State Department of Education.",
    source: CODE("32-6-7.2"),
    section: "Title 32, Chapter 6, Article 1 - Section 32-6-7.2 Restrictions on issuance to persons under 18 years of age",
    url: code("32-6-7.2"),
  },
  {
    key: "st-gdl-hunting",
    quote:
      "The licensee is driving to or from a place where the licensee participates in hunting or fishing activities. In order for this particular exception to apply, the licensee must have in his or her immediate possession a valid hunting or fishing license for the activity.",
    source: CODE("32-6-7.2"),
    section: "Title 32, Chapter 6, Article 1 - Section 32-6-7.2 Restrictions on issuance to persons under 18 years of age",
    url: code("32-6-7.2"),
  },
  {
    key: "st-gdl-passenger",
    quote:
      "If there is more than one passenger in the vehicle not including the parents, legal guardians of the licensee, accompanying family members, or a licensed driver who is at least 21 years of age.",
    source: CODE("32-6-7.2"),
    section: "Title 32, Chapter 6, Article 1 - Section 32-6-7.2 Restrictions on issuance to persons under 18 years of age",
    url: code("32-6-7.2"),
  },
  {
    key: "st-passing-200",
    quote:
      "in the event the passing movement involves the use of a lane authorized for vehicles approaching from the opposite direction, before coming within 200 feet of any approaching vehicle.",
    source: CODE("32-5A-84"),
    section: "Title 32, Chapter 5A, Article 4 - Section 32-5A-84 Limitations on overtaking on left",
    url: code("32-5A-84"),
  },
  {
    key: "st-no-pass-100-intersection",
    quote: "When approaching within 100 feet of or traversing any intersection or railroad grade crossing;",
    source: CODE("32-5A-85"),
    section: "Title 32, Chapter 5A, Article 4 - Section 32-5A-85 Further limitations on driving on left of center of roadway",
    url: code("32-5A-85"),
  },
  {
    key: "st-parking-fire-station",
    quote:
      "Within 20 feet of the driveway entrance to any fire station and on the side of a street opposite the entrance to any fire station within 75 feet of the entrance (when properly signposted);",
    source: CODE("32-5A-137"),
    section: "Title 32, Chapter 5A, Article 6 - Section 32-5A-137 Stopping, standing, or parking prohibited in specified places",
    url: code("32-5A-137"),
  },
  {
    key: "st-headlamps-wipers",
    quote:
      "At any time when the windshield wipers of the vehicle are in use because of rain, sleet, or snow, except when the use is intermittent because of misting rain, sleet, or snow.",
    source: CODE("32-5-240"),
    section: "Title 32, Chapter 5, Article 9 - Section 32-5-240 Required lighting equipment and illuminating devices of vehicles",
    url: code("32-5-240"),
  },
  {
    key: "st-seat-belt-rear-secondary",
    quote:
      "a violation of this section in any seat other than a front seat of a vehicle shall be a secondary violation after a lawful stop of the vehicle based on probable cause of another violation of law",
    source: CODE("32-5B-4"),
    section: "Title 32, Chapter 5B - Section 32-5B-4 Safety belt requirements for occupants of passenger cars; exemptions",
    url: code("32-5B-4"),
  },
  {
    key: "st-yield-collision",
    quote:
      "if such a driver is involved in a collision with a vehicle in the intersection or junction of roadways after driving past a yield sign without stopping, such collision shall be deemed prima facie evidence of his or her failure to yield right-of-way.",
    source: CODE("32-5A-112"),
    section: "Title 32, Chapter 5A, Article 5 - Section 32-5A-112 Vehicle entering stop or yield intersection",
    url: code("32-5A-112"),
  },
  {
    key: "st-texting-primary",
    quote:
      "Law enforcement officers enforcing this section may treat a violation of this section as the primary or sole reason for issuing a citation to a driver.",
    source: CODE("32-5A-350"),
    section: "Title 32, Chapter 5A, Article 16 - Section 32-5A-350 Definitions; prohibited activities; fines; exceptions",
    url: code("32-5A-350"),
  },
  {
    key: "st-blue-light",
    quote:
      "The color of the lighted lamp exhibited by police vehicles may be red or blue and the color of the lighted lamp exhibited by the fire department and other authorized emergency vehicles, including ambulances, shall be red. No vehicle other than a police vehicle will use a blue light.",
    source: CODE("32-5A-115"),
    section: "Title 32, Chapter 5A, Article 5 - Section 32-5A-115 Operation of vehicles on approach of authorized emergency vehicles",
    url: code("32-5A-115"),
  },
  {
    key: "st-amber-light",
    quote:
      "An amber or yellow light may be installed on any vehicle or class of vehicles designated by the Director of Public Safety, but such light shall serve as a warning or caution light only, and shall not cause other vehicles to yield the right-of-way.",
    source: CODE("32-5A-115"),
    section: "Title 32, Chapter 5A, Article 5 - Section 32-5A-115 Operation of vehicles on approach of authorized emergency vehicles",
    url: code("32-5A-115"),
  },
  {
    key: "st-passing-right-left-turn",
    quote: "When the vehicle overtaken is making or about to make a left turn;",
    source: CODE("32-5A-83"),
    section: "Title 32, Chapter 5A, Article 4 - Section 32-5A-83 When passing on right permitted",
    url: code("32-5A-83"),
  },
  {
    key: "st-u-turn-500",
    quote:
      "No vehicle shall be turned so as to proceed in the opposite direction upon any curve, or upon the approach to or near the crest of a grade, where such vehicle cannot be seen by the driver of any other vehicle approaching from either direction within 500 feet.",
    source: CODE("32-5A-131"),
    section: "Title 32, Chapter 5A, Article 6 - Section 32-5A-131 Turning on curve or crest of grade prohibited",
    url: code("32-5A-131"),
  },
  {
    key: "st-three-lane-center",
    quote:
      "Upon a roadway which is divided into three lanes and provides for two-way movement of traffic, a vehicle shall not be driven in the center lane except when overtaking and passing another vehicle traveling in the same direction when such center lane is clear of traffic within a safe distance",
    source: CODE("32-5A-88"),
    section: "Title 32, Chapter 5A, Article 4 - Section 32-5A-88 Driving on roadways laned for traffic",
    url: code("32-5A-88"),
  },
];
