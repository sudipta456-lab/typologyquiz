import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts behind the Minnesota bank: the great majority from
// the Minnesota Driver's Manual, plus a handful from Minnesota Statutes
// chapter 169 for the numbers the manual states incompletely.
//
// Sources:
//
//  - The Minnesota Driver's Manual, June 2026 edition, published by the
//    Minnesota Department of Public Safety, Driver and Vehicle Services (DVS)
//    at assets.dps.mn.gov. This is the book DVS writes the Class D knowledge
//    test from, and its own practice test tells learners that every answer is
//    in it. Page anchors below are PDF page numbers (the printed page number
//    plus three, because the cover, blank page and contents are unnumbered).
//  - Minnesota Statutes chapter 169 (Traffic Regulations), published by the
//    Office of the Revisor of Statutes at revisor.mn.gov. The manual lists
//    only three statutory speed limits (10, 30 and 55 mph); 169.14 carries the
//    65 and 70 mph freeway limits and the 20-over surcharge. The manual's
//    "cell phones" section describes the texting ban but never says a driver
//    may not hold the phone at all; 169.475 does. 169.34 carries the parking
//    prohibitions the manual lists, in the statute's own words.
//
// Every quote was located mechanically in the fetched source and checked as an
// exact substring before it was written here. Nothing is paraphrased. Four
// normalisations were applied to the extracted text and to nothing else: curly
// quotes, en dashes and em dashes are folded to ASCII; runs of whitespace,
// including the line breaks the PDF inserts mid-sentence, collapse to single
// spaces; the section symbol is spelled out as "Section"; and where a source
// states a rule as a stem followed by a bulleted list, the items are run
// together in the order they appear - no words are changed, dropped or
// reordered. The manual's own slips are preserved as they stand ("The test may
// betaken on paper", "Enhaced driver's license"), because a quote that has
// been tidied up is no longer a quote.

const MANUAL =
  "Minnesota Driver's Manual (Minnesota Department of Public Safety, Driver and Vehicle Services, June 2026)";
const MANUAL_URL = "https://assets.dps.mn.gov/files/dvs/dvs-class-d-drivers-manual-english.pdf";
const pg = (n: number) => `${MANUAL_URL}#page=${n}`;
const STAT = (s: string) => `Minnesota Statutes section ${s} (Office of the Revisor of Statutes)`;
const stat = (s: string) => `https://www.revisor.mn.gov/statutes/cite/${s}`;

export const minnesotaExcerpts: HandbookExcerpt[] = [
  // ---------------------------------------------------------------- Chapter 1
  {
    key: "written-test-format",
    quote:
      "The written test includes multiple choice and true-or-false questions that assess your knowledge of Minnesota traffic laws and road signs. The test may betaken on paper or on a computer.",
    source: MANUAL,
    section: "Chapter 1: Your license to drive - The written test",
    url: pg(13),
  },
  {
    key: "written-test-one-per-day",
    quote: "You may take only one written test per day and must score 80 percent to pass.",
    source: MANUAL,
    section: "Chapter 1: Your license to drive - The written test",
    url: pg(13),
  },
  {
    key: "written-test-retest-fee",
    quote:
      "If you fail two consecutive written tests, a $10 fee is charged for the third and any subsequent tests.",
    source: MANUAL,
    section: "Chapter 1: Your license to drive - The written test",
    url: pg(13),
  },
  {
    key: "written-test-under-18-card",
    quote:
      "If you are under 18, you must also present a certificate of enrollment (\"Blue Card\" or \"Pink Card\") from an approved driver education course, showing that you have completed the required classroom instruction and enrolled in behind-the-wheel training.",
    source: MANUAL,
    section: "Chapter 1: Your license to drive - The written test",
    url: pg(13),
  },
  {
    key: "vision-standard",
    quote:
      "Your normal or corrected vision must be at least 20/40, and your peripheral vision must be at least 105 degrees.",
    source: MANUAL,
    section: "Chapter 1: Your license to drive - The vision screening",
    url: pg(13),
  },
  {
    key: "road-test-retest-fee",
    quote:
      "If you fail the road test two times, a retest fee of $20 will be charged for each subsequent test. If you fail the road test four times, you must complete at least six hours of behind-the-wheel instruction with a licensed instructor before taking the test again.",
    source: MANUAL,
    section: "Chapter 1: Your license to drive - Vehicle control skills and driving performance",
    url: pg(15),
  },
  {
    key: "road-test-immediate-fail",
    quote:
      "These actions will cause you to fail the road test immediately: Disobeying a traffic law. Driving dangerously, carelessly or recklessly, including any action that could result in a traffic crash.",
    source: MANUAL,
    section: "Chapter 1: Your license to drive - Vehicle control skills and driving performance",
    url: pg(15),
  },
  {
    key: "road-test-no-passengers",
    quote: "No passengers, including pets, children or interpreters, are allowed.",
    source: MANUAL,
    section: "Chapter 1: Your license to drive - The road test",
    url: pg(14),
  },
  {
    key: "epilepsy-30-days",
    quote:
      "If you already have a permit or license and are diagnosed with epilepsy or a condition that could cause loss of consciousness, you must submit a physician's statement within 30 days of the diagnosis.",
    source: MANUAL,
    section: "Chapter 1: Your license to drive - Medical conditions",
    url: pg(15),
  },
  {
    key: "gdl-six-months",
    quote:
      "Under the GDL system, if you are 18 years old or younger, you must hold an instruction permit for at least six months before taking the road test.",
    source: MANUAL,
    section: "Chapter 1: Your license to drive - Graduated Driver's Licensing (GDL) system",
    url: pg(16),
  },
  {
    key: "permit-valid-two-years",
    quote:
      "Your permit is valid for two years of practice driving with a licensed supervising driver sitting in the front passenger seat. It is illegal to practice driving without a valid instruction permit.",
    source: MANUAL,
    section: "Chapter 1: Your license to drive - Your instruction permit",
    url: pg(16),
  },
  {
    key: "permit-requirements",
    quote:
      "Be at least 15 years old. Complete 30 hours of classroom instruction and be enrolled in behind-the-wheel instruction; or be enrolled in a concurrent driver education course and have completed the first 15 classroom hours of the curriculum. If you are 18 or older, classroom and behind-the-wheel instruction is not required.",
    source: MANUAL,
    section: "Chapter 1: Your license to drive - Your instruction permit",
    url: pg(16),
  },
  {
    key: "permit-under-18-supervisor",
    quote:
      "You must be supervised by a driver aged 21 or older. Everyone in the vehicle must wear a seat belt or use a child passenger restraint system. You may not use or talk on a cell phone while driving, with or without a hands-free device.",
    source: MANUAL,
    section: "Chapter 1: Your license to drive - If you are under 18",
    url: pg(16),
  },
  {
    key: "permit-18-plus-supervisor",
    quote: "You must be supervised by a driver aged 18 or older.",
    source: MANUAL,
    section: "Chapter 1: Your license to drive - If you are 18 and older",
    url: pg(17),
  },
  {
    key: "permit-three-months-19",
    quote:
      "After the required six months of practice driving (or three months if you are 19 years old or older), you may take the road test.",
    source: MANUAL,
    section: "Chapter 1: Your license to drive - If you are 18 and older",
    url: pg(17),
  },
  {
    key: "provisional-valid",
    quote:
      "The provisional license is the second phase of the GDL system. This license is valid for two years from the application date and has restrictions that do not apply to a full driver's license.",
    source: MANUAL,
    section: "Chapter 1: Your license to drive - Your provisional license",
    url: pg(17),
  },
  {
    key: "provisional-requirements",
    quote:
      "Be at least 16 years old. Have completed the classroom and behind-the-wheel phases of driver education.",
    source: MANUAL,
    section: "Chapter 1: Your license to drive - Your provisional license",
    url: pg(17),
  },
  {
    key: "supervised-log-hours",
    quote:
      "Complete a parent class provided by a Minnesota-approved driver education program and submit a log showing at least 40 hours of supervised driving, including 15 nighttime hours.",
    source: MANUAL,
    section: "Chapter 1: Your license to drive - Your provisional license",
    url: pg(17),
  },
  {
    key: "supervised-log-50",
    quote:
      "If not taking the parent class, your teen must submit a log showing at least 50 hours of supervised driving, including 15 nighttime hours.",
    source: MANUAL,
    section: "Chapter 1: Your license to drive - Your provisional license",
    url: pg(17),
  },
  {
    key: "provisional-night",
    quote:
      "During the first six months, you must not drive from midnight to 5 a.m. unless you are:",
    source: MANUAL,
    section: "Chapter 1: Your license to drive - Nighttime limitations",
    url: pg(17),
  },
  {
    key: "provisional-passengers",
    quote:
      "During the first six months, you may have only one passenger under 20 unless accompanied by a parent or guardian. During the second six months, you may have no more than three passengers under 20 unless accompanied by a parent or guardian.",
    source: MANUAL,
    section: "Chapter 1: Your license to drive - Passenger limitations",
    url: pg(18),
  },
  {
    key: "provisional-family-passengers",
    quote:
      "Note: You may have immediate family members under age 20 as passengers during both time periods.",
    source: MANUAL,
    section: "Chapter 1: Your license to drive - Passenger limitations",
    url: pg(18),
  },
  {
    key: "vanessas-law-unlicensed",
    quote:
      "while you are driving without a license as a teenager, you cannot get a license, instruction permit or provisional license until you are 18.",
    source: MANUAL,
    section: "Chapter 1: Your license to drive - Vanessa's Law",
    url: pg(18),
  },
  {
    key: "under-21-license",
    quote:
      "To get your under 21 Class D driver's license, you must be at least 18 years old or have held a provisional license for 12 consecutive months with no convictions for alcohol violations, controlled-substance violations or crash-related moving violations.",
    source: MANUAL,
    section: "Chapter 1: Your license to drive - Getting your under 21 Class D driver's license",
    url: pg(19),
  },
  {
    key: "under-21-expiry",
    quote:
      "If you are under 21, you will receive a license marked \"Under 21.\" This license will expire on your 21st birthday and will then expire every four years on your birthday.",
    source: MANUAL,
    section: "Chapter 1: Your license to drive - Getting your under 21 Class D driver's license",
    url: pg(19),
  },
  {
    key: "farm-license-40-miles",
    quote: "You may drive alone to perform farm work during daylight hours within 40 miles of the farmhouse.",
    source: MANUAL,
    section: "Chapter 1: Your license to drive - Restricted farm work driver's license",
    url: pg(19),
  },
  {
    key: "moped-permit-15",
    quote:
      "You can get a motorized bicycle (moped) permit at age 15 after completing a motorized bicycle safety course and passing the written, vision and road tests. An electric-assist bicycle is not considered a moped, and you do not need a test or a license to ride one. However, you must be at least 15 years old.",
    source: MANUAL,
    section: "Chapter 1: Your license to drive - Motorized bicycle permit",
    url: pg(20),
  },
  {
    key: "class-d-vehicles",
    quote:
      "Vehicles designed to carry more than 15 passengers (including the driver).",
    source: MANUAL,
    section: "Chapter 1: Your license to drive - Class D license",
    url: pg(20),
  },
  {
    key: "class-d-26001",
    quote: "Those with a gross vehicle weight of 26,001 pounds or more.",
    source: MANUAL,
    section: "Chapter 1: Your license to drive - Class D license",
    url: pg(20),
  },
  {
    key: "class-d-towing",
    quote:
      "You may also tow a trailer or other vehicle if either of the following is true: It has a gross vehicle weight of 10,000 pounds or less It has a gross vehicle weight of more than 10,000 pounds, but the combined gross vehicle weight of the vehicle and trailer is 26,000 pounds or less.",
    source: MANUAL,
    section: "Chapter 1: Your license to drive - Class D license",
    url: pg(21),
  },
  {
    key: "new-resident-60-days",
    quote:
      "You have 60 days (30 days for commercial drivers) once you become a Minnesota resident to get your Minnesota license or permit.",
    source: MANUAL,
    section: "Chapter 1: Your license to drive - Getting your license to drive",
    url: pg(9),
  },
  {
    key: "expired-license-tests",
    quote:
      "If your Minnesota driver's license has been expired for more than one year but less than five years, you must pass a written test and a vision test before applying for a new license.",
    source: MANUAL,
    section: "Chapter 1: Your license to drive - Getting your license to drive",
    url: pg(9),
  },
  {
    key: "nonresident-15",
    quote:
      "You are a nonresident who is at least 15 years old and has a valid driver's license from your home state or country.",
    source: MANUAL,
    section: "Chapter 1: Your license to drive - Who does not need a Minnesota license?",
    url: pg(9),
  },
  {
    key: "renewal-four-years",
    quote:
      "A driver's license issued by the state of Minnesota typically expires on your birthday and must be renewed every four years after you reach 21 years old.",
    source: MANUAL,
    section: "Chapter 1: Your license to drive - License renewal and replacement",
    url: pg(22),
  },
  {
    key: "address-change-30-days",
    quote:
      "If you change your name or address before your license expires, you must apply for a duplicate license within 30 days.",
    source: MANUAL,
    section: "Chapter 1: Your license to drive - Name or address change",
    url: pg(22),
  },
  {
    key: "carry-license",
    quote:
      "You must always carry your license with you when driving. You need the appropriate class of license and endorsements for the type of vehicle you are driving.",
    source: MANUAL,
    section: "Chapter 1: Your license to drive - Driver's license classifications",
    url: pg(20),
  },
  // ---------------------------------------------------------------- Chapter 2
  {
    key: "two-brake-systems",
    quote:
      "All cars and trucks must have at least two separate brake systems",
    source: MANUAL,
    section: "Chapter 2: Your vehicle - Brakes",
    url: pg(25),
  },
  {
    key: "horn-use",
    quote:
      "Your vehicle must have a working horn. Bells, sirens and whistles are not horns and can only be used by emergency vehicles. Use your horn to avoid a crash. Do not honk unnecessarily or to announce your arrival.",
    source: MANUAL,
    section: "Chapter 2: Your vehicle - Horn",
    url: pg(25),
  },
  {
    key: "high-beam-350",
    quote:
      "High beam headlights must make objects visible on the road at least 350 feet ahead. You must replace damaged headlights.",
    source: MANUAL,
    section: "Chapter 2: Your vehicle - Headlights and taillights",
    url: pg(26),
  },
  {
    key: "headlights-when",
    quote:
      "Turn on your headlights at sunset and keep them on until sunrise. Use them during rain, snow, hail, sleet, fog or any time you cannot see the road ahead for at least 500 feet.",
    source: MANUAL,
    section: "Chapter 2: Your vehicle - Headlights and taillights",
    url: pg(26),
  },
  {
    key: "drl-not-taillights",
    quote:
      "Some vehicles have daytime running lights that turn on automatically to make your vehicle more visible during the day. Taillights and parking lights do not turn on automatically.",
    source: MANUAL,
    section: "Chapter 2: Your vehicle - Headlights and taillights",
    url: pg(26),
  },
  {
    key: "blue-lights",
    quote:
      "Snowplows, road maintenance equipment and authorized emergency vehicles can use blue lights.",
    source: MANUAL,
    section: "Chapter 2: Your vehicle - Prohibited lights",
    url: pg(26),
  },
  {
    key: "tire-tread",
    quote: "A tire is illegal if the tread is less than one-sixteenth inch deep.",
    source: MANUAL,
    section: "Chapter 2: Your vehicle - Tires",
    url: pg(27),
  },
  {
    key: "tire-pressure-sticker",
    quote:
      "Compare the measured PSI to the PSI on the sticker inside the driver's door or in the owner's manual, not the PSI on the tire's sidewall.",
    source: MANUAL,
    section: "Chapter 2: Your vehicle - Tires",
    url: pg(27),
  },
  {
    key: "window-tint",
    quote:
      "If it transmits less than 50 percent or reflects more than 20 percent of available light, you can only use it on the rear window of a pickup truck or the rear and side windows of a van, limousine or vehicle used by a funeral home.",
    source: MANUAL,
    section: "Chapter 2: Your vehicle - Windshield and windows",
    url: pg(27),
  },
  {
    key: "windshield-objects",
    quote:
      "Do not hang objects between the driver and the windshield. Labels and stickers allowed by state law, such as state and national park stickers, safety inspection stickers and EZpass devices, can be placed on your windshield.",
    source: MANUAL,
    section: "Chapter 2: Your vehicle - Windshield and windows",
    url: pg(27),
  },
  {
    key: "pickup-mirror",
    quote:
      "Vehicles like rental moving trucks, which do not allow a view through a rear window, must have an additional side mirror. Pickup trucks, often used for hauling, must also have an extra side mirror.",
    source: MANUAL,
    section: "Chapter 2: Your vehicle - Rearview mirrors",
    url: pg(26),
  },
  // ---------------------------------------------------------------- Chapter 3
  {
    key: "drive-right-exceptions",
    quote:
      "On all wide roads, you must drive on the right side of the road except: When passing another vehicle going in the same direction. When the right side of the road is closed for construction or repair. When the road has three marked lanes. When signs indicate the road is one-way.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation",
    url: pg(29),
  },
  {
    key: "basic-speed-law",
    quote:
      "Basic speed law: Minnesota's basic speed law says you must drive at a speed that is reasonable for the current conditions, including weather, traffic and road conditions. Driving faster than the posted speed limit is illegal.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Speed limits",
    url: pg(29),
  },
  {
    key: "passing-plus-10",
    quote:
      "On two-lane highways with a speed limit of 55 mph or higher, you can increase your speed by 10 mph when lawfully passing another vehicle.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Speed limits",
    url: pg(29),
  },
  {
    key: "speed-row-lost",
    quote:
      "Right-of-way: If you approach an intersection at an unlawful speed, you lose the right-of-way privilege associated with driving at a lawful speed.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Speed limits",
    url: pg(29),
  },
  {
    key: "speed-defaults",
    quote:
      "Speed limits under ideal conditions (unless otherwise indicated by signs): 10 mph - in alleys 30 mph - on urban or town roads 55 mph - in all other locations that are not specified in this list",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Speed limits",
    url: pg(29),
  },
  {
    key: "minimum-speed",
    quote:
      "Minimum speed limits: Some roads have minimum speed limits. It is illegal to drive slower than the posted minimum speed under normal conditions.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Speed limits",
    url: pg(29),
  },
  {
    key: "speed-100-revoked",
    quote:
      "Additional fines apply if you drive 20 mph or more over the limit. If you drive over 100 mph, your driving privileges will be revoked for at least six months.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Speed limits and fines",
    url: pg(30),
  },
  {
    key: "slow-for-emergency-surcharge",
    quote:
      "You must slow down when you approach or pass a stopped emergency vehicle with flashing emergency lights. A surcharge of at least $25 is added to the speeding fine if you break this law.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Reduced speed",
    url: pg(30),
  },
  {
    key: "gravel-roads",
    quote:
      "On gravel or dirt roads, you need to slow down because it takes longer to stop and is easier to skid when turning.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Reduced speed",
    url: pg(30),
  },
  {
    key: "signal-100-feet",
    quote:
      "Activate your signal at least 100 feet before turning. Keep signaling until you have completed the turn or lane change.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Signaling",
    url: pg(30),
  },
  {
    key: "hand-signals-daylight",
    quote:
      "During daylight hours, you can use hand and arm signals in addition to or instead of turn signals. Do not use hand signals at night or when driving a vehicle that blocks other drivers from seeing your hand signals.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Hand and arm signals",
    url: pg(30),
  },
  {
    key: "lane-change-head-check",
    quote:
      "Turn your head to check the lane you are moving into for vehicles. Don't rely solely on mirrors; you may miss vehicles in your blind spots.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Changing lanes",
    url: pg(31),
  },
  {
    key: "turn-wheels-straight",
    quote:
      "While waiting to turn, keep your wheels straight and your foot on the brake. If your vehicle is struck from behind, you are less likely to be pushed into oncoming traffic.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Turns",
    url: pg(31),
  },
  {
    key: "left-turn-wait-position",
    quote:
      "When waiting to make a left turn at a green light with oncoming traffic, position your car into the intersection where your body is even with the curb line. You may only be able to make the turn when the light changes to yellow.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Turns",
    url: pg(31),
  },
  {
    key: "right-on-red",
    quote:
      "At many intersections, you can make a right turn while the traffic light is red. Make sure you are in the correct lane and come to a complete stop. Do not turn if there is a \"No Turn on Red\" sign.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Turning on a red light",
    url: pg(31),
  },
  {
    key: "left-on-red",
    quote:
      "You can make a left turn from a one-way street onto another one-way street while the traffic light is red in certain situations.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Turning on a red light",
    url: pg(31),
  },
  {
    key: "left-turn-lane",
    quote:
      "Left turn: After checking traffic behind you and signaling your intent, move into the lane closest to the center line. If there are no lines marking the lanes, move your vehicle to the right of the center of the road.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Left turns",
    url: pg(32),
  },
  {
    key: "right-turn-lane",
    quote:
      "Right turn: After checking traffic behind you and signaling your intent, move close to the right curb.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Right turns",
    url: pg(32),
  },
  {
    key: "roundabout-entering",
    quote:
      "Yield to vehicles already in the roundabout. Do not enter until all traffic from the left has cleared. Drive counterclockwise until you reach your exit. Do not stop, pass or change lanes within the roundabout.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Roundabouts",
    url: pg(33),
  },
  {
    key: "roundabout-emergency",
    quote: "If an emergency vehicle approaches, exit the roundabout immediately and then pull over.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Roundabouts",
    url: pg(33),
  },
  {
    key: "roundabout-large-vehicles",
    quote:
      "A vehicle longer than 40 feet or wider than 10 feet, or any combination vehicle, may deviate from the lane as needed to drive through the roundabout, while being cautious of other traffic.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Roundabouts",
    url: pg(33),
  },
  {
    key: "multiple-turn-lanes",
    quote:
      "Multiple turn lanes: If there are signs or lane markings for two or more turning lanes, stay in your lane during the turn.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Multiple turn lanes",
    url: pg(33),
  },
  {
    key: "j-turn",
    quote:
      "At a J-turn, drivers on the side street approaching the divided highway always make a right turn. To cross the highway or make a left turn from the side street: 1. Come to a complete stop. 2. Turn right onto the highway. 3. Enter the designated left-turn lane that leads to the median opening and complete a U-turn.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - J-turns",
    url: pg(35),
  },
  {
    key: "divided-highway-crossing",
    quote:
      "If there is enough space between the two roadways, you can cross one half and wait in the middle until it is safe to cross the second half.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Divided highway",
    url: pg(35),
  },
  {
    key: "u-turn-rules",
    quote:
      "You must not make U-turns on interstate freeways. They are also illegal near the tops of hills and on curves where other drivers cannot see you from 1,000 feet away.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - U-turns",
    url: pg(36),
  },
  {
    key: "right-lane-travel",
    quote:
      "On highways with more than one lane in the same direction, drive in the right-hand lane when available. If you are in the left-most lane, move out of the lane to allow another vehicle to pass when practical.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Right-hand lane travel",
    url: pg(36),
  },
  {
    key: "slow-vehicle-right",
    quote:
      "When driving on a road with one lane in your direction, if you are going slow enough to create a traffic hazard, you must drive as close as possible to the right-hand curb or edge of the road.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Right-hand lane travel",
    url: pg(36),
  },
  {
    key: "passing-return-100",
    quote:
      "Return to the right lane when you can see the entire vehicle you have just passed in your rearview mirror. You must return to the right side of the road before coming within 100 feet of an oncoming vehicle.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Passing",
    url: pg(37),
  },
  {
    key: "no-passing-lines",
    quote:
      "Do not pass in locations where a \"No Passing Zone\" sign is posted or where there is a solid yellow line on your side of the center line. Double solid yellow lines mean no passing is allowed in either direction.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Passing",
    url: pg(37),
  },
  {
    key: "do-not-pass-700",
    quote:
      "Do not pass On a curve or hill where you cannot clearly see the road ahead for at least 700 feet. Within 100 feet of an intersection, underpass, tunnel or railroad crossing.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Passing",
    url: pg(37),
  },
  {
    key: "being-passed",
    quote:
      "When another driver is trying to pass you, stay in your own lane and do not increase speed.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Passing",
    url: pg(37),
  },
  {
    key: "passing-on-right",
    quote:
      "When it is safe to do so. Do not pass by driving in a bicycle lane, on the shoulder, or off the pavement or main part of the road. When the vehicle you are overtaking is making or about to make, a left turn.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Passing on the right",
    url: pg(37),
  },
  {
    key: "backing-freeway",
    quote:
      "Backing up is not allowed on freeways or expressways, except for emergency vehicles on duty. Backing up on public roads can result in a charge of reckless or careless driving.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Backing up",
    url: pg(37),
  },
  {
    key: "backing-look",
    quote:
      "Continue looking out the rear window while backing up. Do not rely solely on your mirrors or back-up camera.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Backing up",
    url: pg(38),
  },
  {
    key: "parallel-12-inches",
    quote:
      "When you parallel park, your vehicle's wheels closest to the side of the road should be no more than 12 inches from the curb. Turn the front wheels toward the curb or shoulder, place the vehicle in park and engage the parking brake.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Parking",
    url: pg(38),
  },
  {
    key: "parking-distances",
    quote:
      "Within 20 feet of a crosswalk at an intersection Within 30 feet of any flashing light, stop sign or traffic control signal on the side of a public road Within 50 feet of the nearest rail of a railroad crossing Within 10 feet of a fire hydrant",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Parking",
    url: pg(38),
  },
  {
    key: "double-parking",
    quote:
      "On the traffic side of any vehicle parked at a curb or at the edge of a highway. This is known as \"double parking\"",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Parking",
    url: pg(38),
  },
  {
    key: "parking-bridge-tunnel",
    quote: "At the street end of a driveway On any bridge Within any highway tunnel",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Parking",
    url: pg(38),
  },
  {
    key: "exiting-parked",
    quote:
      "When you are stopped or parked on the side of a road, do not open any doors until you have checked to make sure it is safe and will not interfere with other traffic.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Exiting a parked vehicle",
    url: pg(38),
  },
  {
    key: "hill-parking-downhill",
    quote:
      "When the front of a parked vehicle points downhill, wheels should be turned toward the curb or shoulder of the road.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Parking on a hill",
    url: pg(39),
  },
  {
    key: "hill-parking-uphill-curb",
    quote:
      "When the front of a parked vehicle points uphill, and there is a curb, wheels should be turned away from the curb.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Parking on a hill",
    url: pg(39),
  },
  {
    key: "hill-parking-uphill-no-curb",
    quote:
      "When the front of a parked vehicle points uphill, and there is no curb, wheels should be turned toward the shoulder of the road.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Parking on a hill",
    url: pg(39),
  },
  {
    key: "highway-parking-lights",
    quote:
      "You must have at least one white or amber front light and one red taillight illuminated on your vehicle. Both lights must be visible from at least 500 feet. Use parking lights or hazard warning lights to alert other drivers. Set headlights on parked vehicles to low beam.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Highway parking",
    url: pg(40),
  },
  {
    key: "seat-belt-law",
    quote:
      "You as the driver and all of your passengers, including those in the back seat, must wear a properly adjusted and fastened seat belt. Law enforcement can stop motorists solely for seat belt violations.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Seat belt laws",
    url: pg(40),
  },
  {
    key: "seat-belt-stats",
    quote:
      "Your chances of being killed or injured in a crash are four times greater. You can be killed in a crash even at speeds as low as 12 mph.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Seat belt laws",
    url: pg(40),
  },
  {
    key: "seat-belt-exemptions",
    quote:
      "You are not legally required to wear a seat belt if you are: Driving a passenger vehicle in reverse. In a seat where all seat belts are being used by other passengers.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Seat belt laws",
    url: pg(40),
  },
  {
    key: "lap-belt-position",
    quote:
      "Lap belt: Adjust the lap belt to fit snugly across your hipbones or upper thighs. It should never be positioned across your abdomen or the soft part of your stomach.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Use seat belts correctly",
    url: pg(40),
  },
  {
    key: "children-under-13",
    quote:
      "The back seat is the safest place in most vehicles. Children under 13 must ride in the back if it is available.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Infant and child safety seat laws",
    url: pg(41),
  },
  {
    key: "rear-facing-under-2",
    quote:
      "Children under 2 years of age must ride in a rear-facing car seat until they reach the weight or height limit of the car seat.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Infant and child safety seat laws",
    url: pg(41),
  },
  {
    key: "booster-4-to-9",
    quote:
      "A child from 4 to 9 years old must use a booster seat and be secured with a safety belt if they are too tall or too heavy for the car seat.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Infant and child safety seat laws",
    url: pg(41),
  },
  {
    key: "car-seat-expiry",
    quote:
      "Do not use a safety seat that has been in a crash. Child restraint systems expire six years from the date of manufacture.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Other child passenger safety guidelines",
    url: pg(41),
  },
  {
    key: "airbag-10-inches",
    quote:
      "Try to keep at least 10 inches between yourself and the steering wheel. Keep your hands at the 8 and 4 o'clock or 9 and 3 o'clock positions on the steering wheel. Avoid the 10 and 2 o'clock position.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Airbag safety suggestions",
    url: pg(42),
  },
  {
    key: "airbags-supplemental",
    quote:
      "An airbag is a supplemental restraint system. Airbags work with seat belts to prevent injuries but are not designed to keep occupants from being ejected.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Airbags",
    url: pg(42),
  },
  {
    key: "littering",
    quote:
      "It is illegal to throw items from your vehicle onto streets, roads, and public or private land.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Do not litter",
    url: pg(42),
  },
  {
    key: "crash-call-help",
    quote:
      "Call for help. If someone is injured or killed, call the nearest law enforcement agency or 911 as quickly as possible.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - What to do in a traffic crash",
    url: pg(42),
  },
  {
    key: "crash-exchange-info",
    quote:
      "Exchange information. Provide your name, address, date of birth and vehicle registration number to other drivers and any law enforcement officer at the scene.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - What to do in a traffic crash",
    url: pg(42),
  },
  {
    key: "crash-insurance-72-hours",
    quote:
      "Give this information to the investigating law enforcement officer. If you do not have it with you, provide it within 72 hours.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - What to do in a traffic crash",
    url: pg(42),
  },
  {
    key: "crash-property-only",
    quote:
      "Property damage only: If the crash only results in property damage, you do not need to notify law enforcement.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - What to do in a traffic crash",
    url: pg(42),
  },
  {
    key: "insurance-proof",
    quote:
      "Owners of motor vehicles driven on public roads must carry no-fault and liability insurance. You must have valid proof of insurance in the vehicle at all times.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Insurance",
    url: pg(43),
  },
  {
    key: "uninsured-penalty",
    quote:
      "Your driving privileges may be revoked for up to one year. If convicted of operating an uninsured vehicle, you may be fined up to $1,000 and sentenced to up to 90 days in jail.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Insurance",
    url: pg(43),
  },
  {
    key: "register-60-days",
    quote:
      "You have up to 60 days after becoming a resident to register your vehicle in Minnesota.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Registering your vehicle",
    url: pg(43),
  },
  {
    key: "cell-phone-messages",
    quote:
      "You may not use a wireless communication device, like a cell phone, to compose, read or send electronic messages while driving. Electronic messages include emails, text messages and instant messages. You also may not access the internet.",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Cell phones",
    url: pg(43),
  },
  {
    key: "cell-phone-exceptions",
    quote:
      "Exceptions: Using the device to get emergency assistance Reporting a crash or crime Using the device in voice-activated or hands-free mode",
    source: MANUAL,
    section: "Chapter 3: Traffic laws and vehicle operation - Cell phones",
    url: pg(43),
  },
  // ---------------------------------------------------------------- Chapter 4
  {
    key: "stop-sign-where",
    quote:
      "Come to a complete stop at stop signs. If there is a marked stop line, stop before the line. If there is a pedestrian crosswalk, stop before entering the crosswalk. Yield the right-of-way to pedestrians, bicyclists and traffic before proceeding.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Stopping",
    url: pg(44),
  },
  {
    key: "stop-from-driveway",
    quote:
      "Before entering a road from an alley, private driveway, parking lot or parking ramp. Always stop before crossing a sidewalk or crosswalk.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Stopping",
    url: pg(44),
  },
  {
    key: "stop-list-misc",
    quote:
      "At a flashing red traffic light. Treat it as you would a stop sign. At a freeway ramp meter when the light is red. At a railroad crossing with a stop sign.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Stopping",
    url: pg(44),
  },
  {
    key: "stop-drawbridge",
    quote:
      "When a flag person or traffic device directs you to stop. At a bridge that has been raised to open a path for boats.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Stopping",
    url: pg(44),
  },
  {
    key: "bus-yellow-lights",
    quote:
      "Bus drivers will activate flashing yellow lights at least 100 feet before a school bus stops in a speed zone of 35 mph or less. They will activate the lights at least 300 feet before it stops in a speed zone of more than 35 mph.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Flashing yellow lights",
    url: pg(44),
  },
  {
    key: "bus-no-pass-right",
    quote:
      "It is against the law to pass on the right side of a school bus while it is displaying red or yellow flashing lights.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Flashing yellow lights",
    url: pg(44),
  },
  {
    key: "bus-red-20-feet",
    quote:
      "When you see a school bus that is stopped with its red lights flashing, you must stop your vehicle at least 20 feet from the bus.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Flashing red lights",
    url: pg(45),
  },
  {
    key: "bus-remain-stopped",
    quote:
      "Regardless of whether you are facing the front or back of the bus, you must remain stopped until the red lights stop flashing. If you don't, you can be charged with a misdemeanor. If convicted, you must pay a fine of at least $500 and lose your driving privileges.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Flashing red lights",
    url: pg(45),
  },
  {
    key: "bus-divided-roadway",
    quote:
      "If you are driving on a divided roadway, you do not need to stop for a school bus with red lights flashing if it is on the opposite side of the divider.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Passing a school bus",
    url: pg(45),
  },
  {
    key: "bus-no-stop-arm",
    quote:
      "Reminder: You must stop for flashing red school bus lights even if the stop arm doesn't swing out.",
    source: MANUAL,
    section: "New laws and information - School bus flashing lights",
    url: pg(4),
  },
  {
    key: "bus-owner-liable",
    quote:
      "When your vehicle is used to violate Minnesota Statute 169.444, you are guilty of a petty misdemeanor if you own or lease the vehicle.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Vehicle owner may be penalized",
    url: pg(46),
  },
  {
    key: "school-patrol",
    quote:
      "When you see a student safety patrol helping schoolmates cross a street or highway, you must come to a complete stop. You must also stop for adult crossing guards displaying a stop sign or flag.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - School safety patrol",
    url: pg(46),
  },
  {
    key: "school-patrol-penalty",
    quote:
      "It is illegal to drive through a line of children crossing the road, even if a school safety patrol is not present. Violating this law is a misdemeanor. A second violation within a year is a gross misdemeanor.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - School safety patrol",
    url: pg(46),
  },
  {
    key: "row-uncontrolled",
    quote:
      "Intersections without traffic lights or signals: When you reach an intersection at the same time as another driver, the driver on the left must yield to the one on the right.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Right of way and yielding",
    url: pg(46),
  },
  {
    key: "row-left-turn",
    quote:
      "Left turns: When you want to make a left turn, you must yield to vehicles approaching from the opposite direction that are in the intersection or close enough to pose a risk of a crash.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Right of way and yielding",
    url: pg(46),
  },
  {
    key: "row-green-arrow",
    quote:
      "Green arrow signal for left turn: When a green arrow signals that you are allowed to turn left, you must yield to other vehicles or pedestrians already in the intersection.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Right of way and yielding",
    url: pg(46),
  },
  {
    key: "row-t-intersection",
    quote:
      "Uncontrolled \"T\" intersections: When you approach an uncontrolled \"T\" intersection, you must yield to all cross traffic if you are the one turning.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Right of way and yielding",
    url: pg(46),
  },
  {
    key: "row-transit-bus",
    quote:
      "Transit and metro mobility buses: When driving in the right lane, you must yield to transit and metro mobility buses merging from a bus stop or shoulder.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Right of way and yielding",
    url: pg(46),
  },
  {
    key: "row-funeral",
    quote:
      "Funeral processions: When a funeral procession identifies itself with headlights or hazard warning lights, you must yield to the entire procession.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Right of way and yielding",
    url: pg(46),
  },
  {
    key: "row-pedestrians",
    quote:
      "Pedestrians: You must yield to pedestrians crossing at intersections and crosswalks, whether marked or unmarked.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Right of way and yielding",
    url: pg(46),
  },
  {
    key: "emergency-vehicle-pull-right",
    quote:
      "When an emergency vehicle (such as an ambulance, fire truck or police car) with flashing red lights and sounding a siren or bell approaches your vehicle on a two-way road, you must pull to the right and stop. On a one-way road, pull to the nearest side and stop. If you are in an intersection, proceed through it before stopping.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Yield to emergency vehicles",
    url: pg(47),
  },
  {
    key: "emergency-vehicle-barrier",
    quote:
      "You do not need to stop if the emergency vehicle is separated from your lane of traffic by a physical barrier like a fence, wall or median strip.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Yield to emergency vehicles",
    url: pg(47),
  },
  {
    key: "move-over-law",
    quote:
      "When an emergency vehicle with flashing lights is stopped on or next to a road with two lanes in the same direction, the \"Move Over Law\" requires you to move to the lane farthest away from the vehicle if it is safe to do so. Emergency vehicles include tow trucks, ambulances, fire trucks and police cars.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Passing parked emergency and service vehicles",
    url: pg(47),
  },
  {
    key: "move-over-one-lane",
    quote:
      "If you cannot move a lane away or are on a street or highway with only one lane in your direction, slow down and pass with caution.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Passing parked emergency and service vehicles",
    url: pg(47),
  },
  {
    key: "firefighting-500",
    quote:
      "Only vehicles on official emergency business are allowed to follow within 500 feet of a firefighting vehicle on an emergency run. Do not drive over an unprotected fire hose unless directed by a law enforcement officer or fire department official.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Following firefighting vehicles",
    url: pg(47),
  },
  {
    key: "careless-reckless",
    quote:
      "Careless driving means driving or stopping a vehicle in a way that endangers the lives and safety of people or property. Reckless driving means driving a vehicle while knowingly disregarding a substantial and unjustifiable risk that may harm others or their property, including racing or contest driving.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Careless and reckless driving",
    url: pg(47),
  },
  {
    key: "traffic-stop-conduct",
    quote:
      "Keep all doors shut and remain in the vehicle unless directed otherwise by the officer. Keep your hands on the steering wheel so they are easily visible.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - What to do and expect when stopped by law enforcement",
    url: pg(48),
  },
  {
    key: "traffic-stop-interior-light",
    quote: "If stopped after dark, turn on your vehicle's interior light.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - What to do and expect when stopped by law enforcement",
    url: pg(48),
  },
  {
    key: "fleeing-felony",
    quote:
      "Fleeing a police officer in a motor vehicle is illegal and dangerous. Violating this law is a felony. If you do so, you may be sentenced to up to three years and one day in prison, fined up to $5,000 or both.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Fleeing a police officer",
    url: pg(49),
  },
  {
    key: "pedestrian-in-crosswalk",
    quote:
      "If a pedestrian is in a marked or unmarked crosswalk, stop and wait until they have passed your lane.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Watch for pedestrians",
    url: pg(50),
  },
  {
    key: "blind-pedestrians",
    quote:
      "Watch for blind pedestrians who may have a white or metallic cane or a guide dog. Do not use your horn or rev your engine as it may distract them.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Watch for pedestrians",
    url: pg(50),
  },
  {
    key: "no-pass-stopped-for-pedestrian",
    quote:
      "It is illegal to pass a vehicle that has stopped for a pedestrian. If another vehicle has stopped, look for pedestrians in the crosswalk and be prepared to stop. Violating pedestrian right-of-way laws is a misdemeanor.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Watch for pedestrians",
    url: pg(50),
  },
  {
    key: "unmarked-crosswalk",
    quote:
      "Unmarked crosswalks are areas where a road intersects a sidewalk without solid lines painted on the road.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Crosswalks",
    url: pg(50),
  },
  {
    key: "pedestrian-walk-left",
    quote:
      "If walking on the road is necessary, stay on the left side or face oncoming traffic.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Crosswalks",
    url: pg(50),
  },
  {
    key: "bicycles-are-vehicles",
    quote:
      "Bicycles are legal vehicles on Minnesota roads and share the same rights and responsibilities as other vehicles.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Sharing the road with bicyclists",
    url: pg(50),
  },
  {
    key: "bicycle-lane-driving",
    quote:
      "It is illegal to drive in bicycle lanes except to park (when permitted), to enter or leave the road, or to prepare for a turn. Before crossing a bicycle lane, make sure it is safe. You must yield to approaching bicyclists.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Bicycle lanes",
    url: pg(51),
  },
  {
    key: "bicycle-3-feet",
    quote:
      "You must keep at least 3 feet between the side of your car and the bicyclist. Make sure the bicyclist is not signaling or making a left turn before passing. You are allowed to cross the center of the roadway to pass a bicyclist, even in a no passing zone, when it is safe to do so.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Passing a bicyclist",
    url: pg(51),
  },
  {
    key: "bicycle-hand-signals",
    quote:
      "Signal a left turn by holding your left arm straight out. Signal a right turn by holding your left arm out and bending it upward. You can also hold your right arm straight out to indicate a right turn. You can signal that you are stopping by holding your left arm out and bending it toward the ground.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Bicycle laws",
    url: pg(51),
  },
  {
    key: "bicycle-two-abreast",
    quote:
      "Two people may ride next to each other as long as you do not impede traffic and stay within a single lane.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Bicycle laws",
    url: pg(51),
  },
  {
    key: "bicycle-sidewalk-business",
    quote:
      "Do not ride a bicycle on a sidewalk within a business district unless allowed by local authorities.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Riding on sidewalks and crosswalks",
    url: pg(51),
  },
  {
    key: "moped-definition",
    quote:
      "A \"motorized bicycle\" is a moped and is defined by its speed capacity, which is 30 mph or less. The rules that apply to bicycle riding generally apply to motorized bicycles. Motorized bicycles are not allowed on sidewalks, freeways, or lanes and trails designated for pedestrians and bicycles.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Motorized bicycles",
    url: pg(52),
  },
  {
    key: "motorcycle-following",
    quote:
      "Following distance: Your following distance from a motorcycle should be the same as, or greater than, your following distance from other vehicles.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Sharing the road with motorcyclists",
    url: pg(52),
  },
  {
    key: "motorcycle-crowding",
    quote:
      "Crowding a motorcyclist: Crowding a motorcyclist is illegal and dangerous. Never attempt to drive alongside a motorcycle in the same lane.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Sharing the road with motorcyclists",
    url: pg(52),
  },
  {
    key: "lane-splitting-legal",
    quote:
      "Lane splitting and filtering: Motorcyclists may share your lane to pass you in slow moving or stopped traffic. This is legal and you must not get in their way or attempt to stop them.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Sharing the road with motorcyclists",
    url: pg(52),
  },
  {
    key: "lane-splitting-speeds",
    quote:
      "Lane splitting is allowed when two or more lanes of traffic are traveling in the same direction and traffic is moving.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Sharing the road with motorcyclists",
    url: pg(53),
  },
  {
    key: "motorcycle-left-turn-crashes",
    quote:
      "Crashes at urban intersections are the most common motorcycle-car collisions. Many occur when drivers fail to yield right of way and make a left turn in front of an oncoming motorcycle.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Sharing the road with motorcyclists",
    url: pg(53),
  },
  {
    key: "nev-35",
    quote:
      "Anyone with a Class D driver's license may drive an NEV, but only on streets with speed limits of 35 mph or less. NEVs may not be used during a road test.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Neighborhood electric vehicles (NEVs)",
    url: pg(54),
  },
  {
    key: "commercial-vehicle-definition",
    quote:
      "A commercial vehicle is a motor vehicle or a combination of motor vehicles that weighs more than 26,000 pounds and is used to transport passengers or property.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Commercial vehicles",
    url: pg(54),
  },
  {
    key: "passing-truck-time",
    quote:
      "Passing on a level highway: It takes three to five seconds longer to pass a commercial vehicle than a car. Allow enough time to pass and return to the right lane before coming within 100 feet of oncoming traffic.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Passing a commercial vehicle",
    url: pg(54),
  },
  {
    key: "truck-passes-you",
    quote:
      "When a commercial vehicle passes you: Keep to the far side of your lane and slightly reduce your speed. Do not speed up while the commercial vehicle is passing.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Passing a commercial vehicle",
    url: pg(54),
  },
  {
    key: "truck-stopping-distance",
    quote:
      "Stopping distance: An average passenger car traveling at 55 mph can stop within 130 to 140 feet. A fully loaded tractor-trailer may need more than 400 feet to stop completely.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Following a commercial vehicle",
    url: pg(55),
  },
  {
    key: "truck-wide-turns",
    quote:
      "To avoid a collision, do not pass a commercial vehicle on the right side if there is a possibility that it might make a right turn.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Commercial vehicles and wide turns",
    url: pg(55),
  },
  {
    key: "truck-no-zones",
    quote:
      "Some truck drivers may not be able to see up to 20 feet in front of the cab, on either side of the trailer, and up to 200 feet to the rear.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Commercial vehicle \"no zones\"",
    url: pg(55),
  },
  {
    key: "truck-upgrade-space",
    quote:
      "Stopping on an upgrade: If you stop behind a commercial vehicle on an upgrade, allow space for the truck to roll back slightly when it starts to move.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Following a commercial vehicle",
    url: pg(55),
  },
  {
    key: "railroad-stop-10-feet",
    quote:
      "When you see these lights or gates activated, do not proceed across the tracks. Stop your vehicle at least 10 feet from the nearest rail or gate. It is safe to cross when traffic ahead has moved and you can proceed without stopping within 10 feet past the rails.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Railroad crossing warning devices",
    url: pg(56),
  },
  {
    key: "railroad-special-vehicles",
    quote:
      "Some vehicles, such as passenger vans, buses and larger trucks, are required to stop at all railroad tracks, whether or not a train is present. Do not pass these vehicles. It is illegal to pass any vehicle within 100 feet of a railroad crossing.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Special vehicles at railroad crossings",
    url: pg(56),
  },
  {
    key: "railroad-second-train",
    quote:
      "When the last car of a train passes, do not proceed across the tracks until you are sure a second train is not approaching on another track.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Railroad crossing safety",
    url: pg(56),
  },
  {
    key: "railroad-no-shifting",
    quote:
      "Do not shift gears while your vehicle is within a crossing. If your vehicle has a manual transmission, shift down before entering the crossing.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Railroad crossing safety",
    url: pg(56),
  },
  {
    key: "ens-sign",
    quote:
      "The blue ENS sign is located on the railroad crossing posts or the metal control box near the tracks. The ENS is for emergencies that require stopping train traffic due to an obstruction or any other problem at the crossing.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Emergency Notification System (ENS) for highway-rail grade crossings",
    url: pg(57),
  },
  {
    key: "work-zone-fine",
    quote:
      "Disobeying the speed limit in a work zone will result in a violation and financial penalty. Fines for speeding in work zones are $300 in addition to the regular speeding ticket.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Highway work zones",
    url: pg(57),
  },
  {
    key: "work-zone-flagger",
    quote:
      "Reduce speed: Watch out for workers and equipment and follow any flag person's directions. Failure to obey a flag person in a work zone will result in a violation and financial penalty.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Highway work zones",
    url: pg(57),
  },
  {
    key: "zipper-merge",
    quote:
      "When you see the \"lane closed ahead\" sign and traffic is backing up, stay in your current lane until the point of merge. Take turns with other drivers to safely and smoothly merge into the remaining lane.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Zipper merge procedure",
    url: pg(57),
  },
  {
    key: "zipper-merge-why",
    quote:
      "Traditionally, drivers have been taught to merge early when a lane is ending. Early merging leads to longer backups, more crashes and road rage incidents.",
    source: MANUAL,
    section: "Chapter 4: Sharing the road - Late merge (zipper merge)",
    url: pg(57),
  },
  // ---------------------------------------------------------------- Chapter 5
  {
    key: "sign-colors",
    quote:
      "Red: Prohibits and commands White: Regulates Warning Yellow: Warns Yellow-green: Warns and controls in pedestrian and bicycle crossings and school areas Orange: Warns and controls in construction zones",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Sign color meanings",
    url: pg(59),
  },
  {
    key: "sign-colors-info",
    quote:
      "Green: Guides and informs Blue: Describes services for motorists Brown: Indicates historic, cultural or recreational sites",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Sign color meanings",
    url: pg(59),
  },
  {
    key: "stop-sign-meaning",
    quote:
      "Stop Come to a complete stop. Remain stopped until pedestrians and vehicles with the right of way have cleared the intersection. Then proceed with caution.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Regulatory signs",
    url: pg(60),
  },
  {
    key: "yield-sign-meaning",
    quote:
      "Yield Slow down or stop if necessary. Give the right of way to all other vehicles and pedestrians. Wait until it is safe to proceed.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Regulatory signs",
    url: pg(60),
  },
  {
    key: "wrong-way-sign",
    quote:
      "Wrong Way You have entered a lane of oncoming traffic. You are traveling in the wrong direction.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Regulatory signs",
    url: pg(60),
  },
  {
    key: "red-circle-slash",
    quote:
      "A red circle with a red slash mark across a symbol indicates that you should not take a certain course of action.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Regulatory signs",
    url: pg(60),
  },
  {
    key: "minimum-speed-sign",
    quote:
      "You may also see minimum speed limits on interstate freeways with controlled access. Do not drive slower than the minimum posted limit unless bad weather or poor road conditions make it necessary.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Regulatory signs",
    url: pg(60),
  },
  {
    key: "keep-right-sign",
    quote: "Keep Right Stay to the right of a traffic island, median or obstruction ahead.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Regulatory signs",
    url: pg(61),
  },
  {
    key: "roundabout-sign-lanes",
    quote:
      "For example, to turn right, get into the right lane only. To turn left, get into the left lane only. The sign shows that you can go straight from either lane.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Regulatory signs",
    url: pg(61),
  },
  {
    key: "center-lane-sign",
    quote:
      "Center Lane Left-turn Only You must share the center lane and use it only for making left turns when traveling in either direction.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Regulatory signs",
    url: pg(61),
  },
  {
    key: "diamond-lane-sign",
    quote:
      "The diamond symbol indicates that the traffic lane is reserved for specific use or certain types of vehicles. The lane may be designated for cars with two or more passengers, buses, commercial vehicles or bicycles.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Regulatory signs",
    url: pg(62),
  },
  {
    key: "disability-parking",
    quote:
      "If designated disability parking spaces are occupied or unavailable, you may park at an angle and occupy two standard parking spaces if you have a valid disability parking permit or license plates.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Regulatory signs",
    url: pg(62),
  },
  {
    key: "warning-signs-yellow",
    quote:
      "Most warning signs are yellow. Pedestrian or bicycle crossing signs and school zone signs may be yellow or fluorescent yellow-green.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Warning signs",
    url: pg(62),
  },
  {
    key: "railroad-pavement-markings",
    quote:
      "Pavement markings include a stop line, an \"X\" and the letters \"RR\" painted on the pavement in front of the crossing.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Warning signs",
    url: pg(62),
  },
  {
    key: "crossbuck-sign",
    quote:
      "An X-shaped sign identifies a railroad crossing. If there is more than one track, a sign below the crossbuck indicates the number of tracks.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Warning signs",
    url: pg(62),
  },
  {
    key: "exempt-sign",
    quote:
      "An \"exempt\" sign means that bus and truck drivers, who are usually required to stop at railroad crossings, may proceed without stopping.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Warning signs",
    url: pg(62),
  },
  {
    key: "school-zone-sign",
    quote:
      "These yellow or fluorescent yellow-green, pentagon-shaped warning signs indicate that a school or an approved school crosswalk is ahead. Watch for children and be prepared to stop.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Warning signs",
    url: pg(63),
  },
  {
    key: "no-passing-zone-sign",
    quote:
      "No Passing Zone This sign is on the left side of a two-way highway. It warns of the beginning of a no passing zone.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Warning signs",
    url: pg(63),
  },
  {
    key: "smv-emblem",
    quote:
      "This emblem must be displayed on all vehicles that travel at speeds of 30 mph or less, such as farm implements or animal-drawn vehicles, when they are making use of a public road.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Warning signs",
    url: pg(64),
  },
  {
    key: "animal-drawn-lamp",
    quote:
      "Animal-drawn vehicles are required to have a light or lamp visible within 500 feet from sunset to sunrise, or during periods of reduced visibility, inclement weather or insufficient light.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Warning signs",
    url: pg(64),
  },
  {
    key: "side-road-sign",
    quote: "Side Road Traffic is coming from your right. Watch for vehicles entering the roadway.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Intersection warning signs",
    url: pg(64),
  },
  {
    key: "t-intersection-sign",
    quote:
      "T-Intersection Ahead The road you are traveling on will end soon. Prepare to turn right or left. Yield to cross traffic.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Intersection warning signs",
    url: pg(64),
  },
  {
    key: "curve-sign-speed",
    quote:
      "Curve The road curves in the direction indicated. If the sign displays a speed limit, slow to the indicated speed.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Intersection warning signs",
    url: pg(64),
  },
  {
    key: "two-way-traffic-sign",
    quote:
      "Two-way Traffic Ahead You are leaving a one-way road and entering a two-way road. Stay to the right.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Warning signs",
    url: pg(65),
  },
  {
    key: "divided-highway-ends-sign",
    quote:
      "Divided Highway Ends The divided road ends ahead. Two-way traffic will no longer be divided by a center island.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Warning signs",
    url: pg(65),
  },
  {
    key: "slippery-road-sign",
    quote:
      "Slippery Road The road surface is slippery when it is wet. This sign is often located near bridges and overpasses.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Warning signs",
    url: pg(66),
  },
  {
    key: "lane-ends-sign",
    quote:
      "Lane Ends Two lanes will become one. In this example, vehicles in the right lane must merge into left-lane traffic. Right-lane vehicles must yield.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Warning signs",
    url: pg(66),
  },
  {
    key: "added-lane-sign",
    quote:
      "Added Lane The roadway will gain an additional lane of traffic. New traffic will not have to merge.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Warning signs",
    url: pg(66),
  },
  {
    key: "low-clearance-sign",
    quote:
      "Low Clearance Ahead Do not proceed if your vehicle is taller than the height indicated on the sign, or your vehicle may become stuck.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Warning signs",
    url: pg(66),
  },
  {
    key: "construction-signs-orange",
    quote:
      "Orange signs with black letters are used in construction and work zones. Slow down when you see an orange sign. These signs warn drivers of restricted lanes of traffic, detours and other road work hazards.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Construction signs",
    url: pg(67),
  },
  {
    key: "work-zone-workers-fine",
    quote:
      "Reduced speeds are often posted in work zones. Motorists who violate the posted speed limit in work zones when workers are present will be assessed a $300 fine.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Construction signs",
    url: pg(67),
  },
  {
    key: "blue-signs-services",
    quote:
      "Blue signs direct you to services such as telephones, gas, food, motels, hospitals and rest areas.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Motorist services signs",
    url: pg(68),
  },
  {
    key: "green-signs-guidance",
    quote:
      "Green signs indicate exits, distance to cities, interstate interchanges, street or route names and bicycle routes.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Guidance and information signs",
    url: pg(68),
  },
  {
    key: "signal-not-working",
    quote:
      "If a traffic signal is not functioning, treat the intersection like an uncontrolled intersection.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Traffic-control signals",
    url: pg(68),
  },
  {
    key: "gridlock",
    quote:
      "You should not enter an intersection controlled by a traffic signal unless you can move through the intersection immediately, continuously and completely without blocking cross traffic.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Intersection gridlock",
    url: pg(68),
  },
  {
    key: "red-light-stop-where",
    quote:
      "A steady red light means \"stop.\" Stop and wait for the light to change. Come to a complete stop at the stop line, before the crosswalk or before entering the intersection.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Traffic-control signals",
    url: pg(69),
  },
  {
    key: "left-on-red-conditions",
    quote:
      "Before turning, you must: Come to a complete stop. Make sure the intersection is clear. Yield to any pedestrians or other vehicles. Ensure traffic is permitted to travel only in the direction you are turning.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Traffic-control signals",
    url: pg(69),
  },
  {
    key: "red-arrow",
    quote:
      "A red arrow means \"stop.\" You must come to a complete stop at the stop line, before the crosswalk or before entering the intersection. When the arrow turns green, you may proceed in the direction it indicates.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Traffic-control signals",
    url: pg(69),
  },
  {
    key: "flashing-red",
    quote:
      "Treat a flashing red light as a stop sign. Come to a complete stop, yield to vehicles and pedestrians who reach the intersection before you, and proceed when the intersection is clear.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Traffic-control signals",
    url: pg(69),
  },
  {
    key: "steady-yellow",
    quote:
      "Do not enter the intersection if you can stop safely before doing so. If you cannot stop safely, proceed through the intersection with caution. If you are waiting in the intersection to make a turn and the signal turns from yellow to red, complete the turn as soon as it is safe. Do not back up.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Traffic-control signals",
    url: pg(69),
  },
  {
    key: "flashing-yellow",
    quote:
      "Proceed through the intersection with caution. Yield the right of way to vehicles and pedestrians already in the intersection. If you are turning left or making a U-turn, you must yield to oncoming vehicles that are close enough to be an immediate hazard.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Traffic-control signals",
    url: pg(70),
  },
  {
    key: "green-light",
    quote:
      "You may cross the intersection as soon as it is clear. Yield to any vehicles or pedestrians in the intersection. When turning left, yield to oncoming traffic. When turning right or left, yield to pedestrians crossing in front of your vehicle.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Traffic-control signals",
    url: pg(70),
  },
  {
    key: "green-arrow",
    quote:
      "A green arrow means you can safely turn in the direction of the arrow. Your turn should be protected from oncoming or crossing traffic.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Traffic-control signals",
    url: pg(70),
  },
  {
    key: "flashing-dont-walk",
    quote:
      "When the raised hand or \"Don't Walk\" signal is flashing, pedestrians should not begin to cross. Pedestrians already in the intersection may continue walking to the other side at a normal pace.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Pedestrian signals",
    url: pg(70),
  },
  {
    key: "lane-signal-yellow-x",
    quote:
      "A steady yellow X means you should prepare to move safely into another lane. A lane-control change is being made in the lane below the steady yellow X. A steady red X will be displayed next, and you cannot occupy the lane at that time.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Lane use control signals",
    url: pg(71),
  },
  {
    key: "lane-signal-flashing-yellow-x",
    quote:
      "A flashing yellow X means you can use the lane below the flashing yellow X to make a left turn. You must use caution because left-turning vehicles from the other direction may be using the same lane.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Lane use control signals",
    url: pg(71),
  },
  {
    key: "lane-signal-red-x",
    quote: "A steady red X means you cannot drive in the lane.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Lane use control signals",
    url: pg(71),
  },
  {
    key: "ramp-meter-one-car",
    quote:
      "Ramp meters are signal lights on freeway entrance ramps that help control the flow of merging traffic. Like traffic signals at intersections, red, yellow and green lights indicate when drivers can proceed. Only one car may proceed each time the light is green.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Freeway ramp meters",
    url: pg(71),
  },
  {
    key: "white-lines",
    quote:
      "White lines separate lanes of traffic traveling in the same direction. White dashes: You can change lanes where this marking is present. Shorter and thicker white dashes: The lane is ending.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - White lines",
    url: pg(72),
  },
  {
    key: "solid-white-lines",
    quote:
      "Solid white line: You should not change lanes. Solid white lines also mark crosswalks, stop lines at intersections, parking stalls and the edges of a roadway. Double solid white lines: You must not change lanes.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - White lines",
    url: pg(72),
  },
  {
    key: "yellow-lines",
    quote:
      "Yellow lines separate traffic moving in opposite directions. Solid yellow line: You must not pass. Passing in a no-passing zone is illegal. Yellow dashes: You may pass.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Yellow lines",
    url: pg(72),
  },
  {
    key: "mixed-yellow-lines",
    quote:
      "Mixed lines (solid and dashes): A solid yellow line may appear on one side of the roadway while a line of dashes appears on the other side. You must obey the marking in your lane of traffic.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Yellow lines",
    url: pg(72),
  },
  {
    key: "turn-lane-arrows",
    quote:
      "White arrows, sometimes accompanied by the word \"only,\" indicate that drivers must stay within a designated lane while turning onto the cross street. If your vehicle is in this type of lane, you must turn.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Turn lanes",
    url: pg(74),
  },
  {
    key: "center-turn-lane-markings",
    quote:
      "A center lane between lanes of traffic traveling in opposite directions may be designated for left turns only. This type of lane is marked by parallel solid and dashed yellow lines.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Center turn lanes",
    url: pg(74),
  },
  {
    key: "reversible-lanes",
    quote:
      "Reversible lanes help keep traffic flowing during rush-hour periods. They are separated by dashed double yellow lines. You may cross these lines only if the overhead signal above the lane you wish to enter has a green arrow, or if a sign permits you to do so.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Reversible lanes",
    url: pg(74),
  },
  {
    key: "carpool-lanes",
    quote:
      "Carpool lanes are restricted to vehicles with two or more occupants. They are marked by a diamond symbol or with \"Carpool Only\" signs.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Carpool lanes",
    url: pg(74),
  },
  {
    key: "traffic-officer-overrides",
    quote:
      "When an officer is present, obey any hand signals you are given rather than traffic signals, signs or pavement markings.",
    source: MANUAL,
    section: "Chapter 5: Signs, signals and pavement markings - Traffic officers",
    url: pg(74),
  },
  // ---------------------------------------------------------------- Chapter 6
  {
    key: "sipde",
    quote:
      "SIPDE is a five-step process used to make appropriate judgments and apply them correctly in different traffic situations.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Using the Scan, Identify, Predict, Decide and Execute (SIPDE) System",
    url: pg(75),
  },
  {
    key: "three-second-rule",
    quote:
      "When the vehicle ahead of you passes the reference point, begin counting: \"One-thousand-one, one-thousand-two, one-thousand-three.\" 3. If you pass the reference point before you finish counting, you are following too closely.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Three-Second Rule",
    url: pg(76),
  },
  {
    key: "four-five-second",
    quote:
      "When road conditions are poor, or if you are driving a vehicle longer than the standard length, increase your following distance to a four- or five-second count.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Three-Second Rule",
    url: pg(76),
  },
  {
    key: "tailgated",
    quote: "If the vehicle behind you is following too closely, slow down slightly and allow it to pass.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Three-Second Rule",
    url: pg(76),
  },
  {
    key: "reaction-time",
    quote:
      "The length of time from perceiving the danger to using the brakes, which is about 3/4 of a second.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Stopping distance",
    url: pg(76),
  },
  {
    key: "night-fatal-crashes",
    quote:
      "Although there is usually less traffic at night, nearly half of all fatal traffic crashes in Minnesota occur after dark.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Night driving",
    url: pg(76),
  },
  {
    key: "low-beam-distances",
    quote:
      "When you are within 1,000 feet of an oncoming vehicle or following another vehicle at a distance of 200 feet or less, your headlights must remain on low beam.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Headlights",
    url: pg(76),
  },
  {
    key: "overdriving-headlights",
    quote:
      "You should be able to stop within the distance your headlights illuminate the road. For most vehicles, this distance is no more than 350 feet on high beam.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Headlights",
    url: pg(76),
  },
  {
    key: "glare-white-line",
    quote:
      "If you are blinded by the glare, use the white line along the edge of the road as a reference.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Headlights",
    url: pg(76),
  },
  {
    key: "freeway-merge-yield",
    quote:
      "To avoid disrupting traffic flow or cutting off other drivers when you merge, adjust your speed to match the vehicles already on the freeway. You must yield to other vehicles when merging.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Entering the freeway",
    url: pg(77),
  },
  {
    key: "ramp-no-stop",
    quote: "Do not stop on the ramp or in the acceleration lane unless it is absolutely necessary.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Entering the freeway",
    url: pg(77),
  },
  {
    key: "freeway-slower-right",
    quote:
      "Maintain the same approximate speed as surrounding vehicles when possible but never exceed the posted speed limits. If you are driving slower than other traffic, stay in the lane nearest to the right side of the road.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Freeway speed and lane use",
    url: pg(77),
  },
  {
    key: "bus-shoulder-35",
    quote:
      "Buses can use the shoulder only when main-line traffic speeds are less than 35 miles per hour. Bus drivers on the shoulder may not exceed the speed of main-line traffic by more than 15 miles per hour and may never exceed 35 miles per hour.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Use of freeway or expressway shoulders by buses",
    url: pg(78),
  },
  {
    key: "hov-lanes",
    quote:
      "These lanes are for use only by motorcycles, buses and vehicles carrying two or more people.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - High-occupancy vehicle lanes",
    url: pg(78),
  },
  {
    key: "diverging-diamond",
    quote:
      "A diverging diamond interchange is designed so that traffic lanes cross over at each end of the bridge, eliminating left-hand turns across opposing traffic. Instead of making a sharp left turn, you veer to the left for access.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Diverging diamond interchange",
    url: pg(80),
  },
  {
    key: "freeway-stopping-illegal",
    quote:
      "It is illegal to stop or park a vehicle on an interstate freeway, except in an emergency. Running out of fuel is not considered an emergency, and you could receive a citation.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Stopping, parking and backing up",
    url: pg(80),
  },
  {
    key: "freeway-flares",
    quote:
      "If you have flares or reflectors, place them from 100 to 500 feet behind your vehicle on the right edge of the main road.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Stopping, parking and backing up",
    url: pg(80),
  },
  {
    key: "freeway-emergency-stop",
    quote:
      "Park your vehicle on the shoulder, as far from the main roadway as possible. Open the trunk and raise the hood or tie a white cloth to the radio antenna or a door handle.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Stopping, parking and backing up",
    url: pg(80),
  },
  {
    key: "emergency-vehicle-behind",
    quote:
      "When you see an emergency vehicle with its lights and siren activated behind you, move to the nearest side of the road and stop. Do not slam on the brakes or swerve into other lanes.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Emergency vehicles on the freeway",
    url: pg(80),
  },
  {
    key: "missed-exit",
    quote:
      "If you miss your exit, proceed to the next one. Do not back up or make a U-turn to return to the desired exit.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Getting off the freeway",
    url: pg(81),
  },
  {
    key: "distraction-25-percent",
    quote:
      "Driver distraction or inattention is a leading factor in crashes in Minnesota, accounting for at least 25 percent of all crashes annually.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Distracted driving",
    url: pg(81),
  },
  {
    key: "distraction-types",
    quote:
      "Types of driver distraction: Visual: Looking away from the road. Mechanical/physical: Taking hands off the wheel. Cognitive: Being \"lost in thought.\"",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Distracted driving",
    url: pg(81),
  },
  {
    key: "illegal-behaviors",
    quote:
      "Drivers under age 18 with an instruction permit or provisional license are prohibited from using a cell phone, whether handheld or hands-free, except to call 911 in an emergency. It is also illegal to wear headphones or earphones in both ears simultaneously to listen to a radio or other sound-producing device.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Illegal driver behaviors in Minnesota",
    url: pg(82),
  },
  {
    key: "texting-while-stopped",
    quote:
      "These include using a cell phone or wireless computer device for text messaging, emailing or accessing the internet while driving, including while stopped in traffic.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Illegal driver behaviors in Minnesota",
    url: pg(82),
  },
  {
    key: "aggressive-driver-response",
    quote:
      "If you are confronted by an aggressive driver, do not challenge them. Stay out of their way, avoid eye contact and do not allow the situation to escalate.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Aggressive driving",
    url: pg(82),
  },
  {
    key: "front-seat-three",
    quote:
      "It is illegal to drive a vehicle packed with a load or occupied by more than three people in the front seat.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Obstructed view",
    url: pg(82),
  },
  {
    key: "projecting-load",
    quote:
      "A load must not stick out more than three feet in front of the front wheels or bumper of any motor vehicle. If a load extends four feet or more from the rear of any vehicle, a red, yellow or orange flag at least 16 inches square must be attached to the end of the load.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Carrying a projecting load",
    url: pg(82),
  },
  {
    key: "trailer-500-feet",
    quote:
      "If you pull a camper or trailer with your vehicle, you must maintain at least 500 feet of following distance from other vehicles.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Campers and trailers",
    url: pg(82),
  },
  {
    key: "trailer-hitch-weight",
    quote:
      "When loaded, 10 to 15 percent of the trailer's weight should be balanced on the hitch between the trailer and vehicle. When correctly loaded, the trailer's floor should be level.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Campers and trailers",
    url: pg(82),
  },
  {
    key: "trailer-brakes-3000",
    quote:
      "All trailers with a gross vehicle weight of 3,000 pounds or more must be equipped with brakes.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Trailer requirements",
    url: pg(83),
  },
  {
    key: "rv-combination",
    quote:
      "You must be at least 18 years old to drive a recreational vehicle combination.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Recreational vehicle combinations",
    url: pg(83),
  },
  {
    key: "winter-cruise-control",
    quote:
      "Get the feel of the road. Try your brakes while driving slowly to test the road surface. Adjust your speed to road conditions. Avoid using cruise control on slippery roads.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Winter driving vehicle safety",
    url: pg(84),
  },
  {
    key: "rocking-stuck",
    quote:
      "If your vehicle becomes stuck on ice or snow, try to free it by \"rocking\" it back and forth. Keep the front wheels straight and slowly drive forward, then backward, as far as possible, without spinning the tires.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Winter driving vehicle safety",
    url: pg(84),
  },
  {
    key: "snowplow-passing",
    quote:
      "Never crowd a snowplow. Pass snowplows only when you can see the entire vehicle. Stay well behind plows to avoid flying sanding materials, snow and ice that could hit your vehicle.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Sharing the road with snowplows",
    url: pg(84),
  },
  {
    key: "stranded-stay",
    quote:
      "If you become stranded while traveling in cold weather, stay with your vehicle. Most deaths in these situations occur when people leave their vehicles, become lost and suffer prolonged exposure to the cold.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - What to do if you become stranded",
    url: pg(85),
  },
  {
    key: "stranded-engine",
    quote:
      "Running the engine for about 10 minutes each hour to charge the battery and warm the interior is recommended.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - What to do if you become stranded",
    url: pg(85),
  },
  {
    key: "stranded-window",
    quote:
      "Even in extremely cold weather, leave at least one window partially open to let in fresh air. Occupants of an idling vehicle can suffer carbon monoxide poisoning if ventilation is not adequate.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - What to do if you become stranded",
    url: pg(85),
  },
  {
    key: "fatigue-breaks",
    quote:
      "Stop as often as you need to - at least once every 100 miles or every two hours. Get out of the car to walk, stretch, loosen up and relax.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Maintaining alertness and concentration",
    url: pg(85),
  },
  {
    key: "skid-response",
    quote:
      "Your vehicle skids when tires lose their grip on the road surface. If this happens, stay calm. Do not overreact or slam on the brakes. Instead, take your foot off the accelerator and brake until you can turn in the desired direction.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Skidding",
    url: pg(85),
  },
  {
    key: "abs-no-pumping",
    quote:
      "If you have anti-lock brakes, do not pump them as you would regular brakes. Instead, press down on the brake pedal and continue to steer the vehicle until you regain control.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Anti-lock braking",
    url: pg(86),
  },
  {
    key: "fog-low-beam",
    quote:
      "Your headlights must be used when you cannot see more than 500 feet ahead and when it is raining, snowing, sleeting or hailing. Keep them on low beam to reduce glare. If you cannot see a safe distance ahead, pull off the road and stop until visibility improves.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Driving in heavy rain or fog",
    url: pg(86),
  },
  {
    key: "hydroplaning",
    quote:
      "When your tires hydroplane, they lose all contact with the road. If this happens, you will be unable to brake, accelerate or change direction. If your tires begin to hydroplane, take your foot off the gas pedal.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Hydroplaning",
    url: pg(86),
  },
  {
    key: "hydroplaning-35",
    quote: "In heavy rain, standard cars may begin to hydroplane at 35 mph.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Hydroplaning",
    url: pg(86),
  },
  {
    key: "coasting-neutral",
    quote:
      "Do not coast down steep hills with your transmission in neutral. On steep hills, check your speedometer frequently. Vehicle speed will increase even when your foot is not on the accelerator.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Driving on narrow roads and hills",
    url: pg(86),
  },
  {
    key: "blowout",
    quote:
      "If you experience a blowout, hold the steering wheel tightly, steer straight ahead and slowly ease your foot off the accelerator. Do not brake until the vehicle is back under your control.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Blowouts",
    url: pg(86),
  },
  {
    key: "brake-failure",
    quote:
      "If your brake pedal suddenly sinks all the way to the floor, try pumping the pedal to build pressure. If this does not work, slowly apply your emergency/parking brake. Applying the brake too abruptly could throw the vehicle into a skid. Remember, the emergency/parking brake engages only the rear brakes.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Brake failure",
    url: pg(87),
  },
  {
    key: "running-off-pavement",
    quote:
      "If your wheels drift onto the shoulder of the road, do not try to swerve back onto the pavement. Stay on the shoulder and slowly release the gas pedal. After you have reduced your speed, turn back onto the pavement.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Running off the pavement",
    url: pg(87),
  },
  {
    key: "deer",
    quote:
      "Deer are most active from dusk to dawn, so be especially alert during those times. Scan the sides of the road at night to watch for the reflection of your vehicle headlights in the eyes of deer.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Watch out for deer",
    url: pg(87),
  },
  {
    key: "oncoming-in-your-lane",
    quote:
      "If a vehicle is traveling toward you in your lane, move to the right. Do not use the left lane to avoid the vehicle. The driver may return to the correct lane and then be in your path.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Vehicle approaching in your lane",
    url: pg(87),
  },
  {
    key: "stalled-on-tracks",
    quote:
      "If your vehicle stalls on railroad tracks and a train is approaching, leave the vehicle immediately. To avoid being struck by debris from the collision, keep a safe distance from the tracks. Walk quickly at a 45-degree angle away from the tracks in the direction from which the train is approaching.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Stalling on railroad tracks",
    url: pg(88),
  },
  {
    key: "flood-depths",
    quote:
      "Remember, 6 inches of water will reach the bottom of most passenger cars, causing loss of control or possible stalling. 2 feet of moving water can carry away most vehicles, including SUVs and pickup trucks.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Flooded roadways",
    url: pg(88),
  },
  {
    key: "plunging-under-water",
    quote:
      "Most vehicles will float on the surface of the water for 30 to 60 seconds. If your vehicle enters deep water, get out of the vehicle immediately. If possible, exit the vehicle through open windows before the water reaches the window level.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Plunging under water",
    url: pg(88),
  },
  {
    key: "engine-fire",
    quote:
      "If you notice smoke rising from beneath the hood of your vehicle, pull off the road, turn off the ignition and exit the vehicle immediately. Do not use water to put out the fire - this will actually spread the blaze.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Fire",
    url: pg(88),
  },
  {
    key: "overheating",
    quote:
      "When your engine becomes hot, turn off any unnecessary vehicle equipment, such as the air conditioning. If the temperature is still too high, turning on the heater will help draw hot air away from the engine.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Overheating",
    url: pg(88),
  },
  {
    key: "stuck-gas-pedal",
    quote:
      "If your gas pedal sticks, you may be able to free it by hooking your toe under the pedal and raising it. If this does not work, apply the brakes and shift into neutral to disengage the engine.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Stuck gas pedal",
    url: pg(89),
  },
  {
    key: "utility-pole-crash",
    quote:
      "If your car comes into contact with a utility pole, wire or power box, you should: Stay in your vehicle and call 911. Only get out of the vehicle if it is on fire.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Vehicle crash with a utility pole or power box",
    url: pg(89),
  },
  {
    key: "carbon-monoxide",
    quote:
      "Carbon monoxide is a deadly, odorless and colorless gas produced by engines. It can collect inside your vehicle when the windows are closed or in your garage if your engine is idling. The only cure for carbon monoxide poisoning is a good supply of fresh air.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Carbon monoxide poisoning and safety tips",
    url: pg(89),
  },
  {
    key: "hood-flies-open",
    quote:
      "If the hood of your vehicle suddenly opens and obstructs your view, you may be able to see through the space between the hood and the dashboard. If this is not possible, roll down the window and lean over to look past the side of the hood.",
    source: MANUAL,
    section: "Chapter 6: Driving conditions - Windshield wiper failure or sudden opening of hood",
    url: pg(89),
  },
  // ---------------------------------------------------------------- Chapter 7
  {
    key: "suspension-reasons",
    quote:
      "Use or allow someone else to use your license for an illegal action. It is illegal to let anyone use your license or permit.",
    source: MANUAL,
    section: "Chapter 7: Your driving privileges - Suspension",
    url: pg(91),
  },
  {
    key: "suspension-under-21-alcohol",
    quote:
      "Are under 21 years of age, and the court determines that you drove a motor vehicle while consuming or after consuming alcohol.",
    source: MANUAL,
    section: "Chapter 7: Your driving privileges - Suspension",
    url: pg(91),
  },
  {
    key: "revocation-reasons",
    quote:
      "Are convicted of driving in excess of 100 mph. Are convicted of fleeing a police officer.",
    source: MANUAL,
    section: "Chapter 7: Your driving privileges - Revocation",
    url: pg(92),
  },
  {
    key: "revocation-refuse-test",
    quote:
      "Refuse to take a test to determine whether you are under the influence of alcohol or a controlled substance, or if you fail the test.",
    source: MANUAL,
    section: "Chapter 7: Your driving privileges - Revocation",
    url: pg(92),
  },
  {
    key: "limited-license",
    quote:
      "If you are issued a limited license, you are restricted to: Traveling to and from your place of employment. Traveling to and from chemical dependency treatment or counseling.",
    source: MANUAL,
    section: "Chapter 7: Your driving privileges - Limited license",
    url: pg(93),
  },
  {
    key: "cancellation-false-info",
    quote:
      "Give false or misleading information on your license application. Your license will be canceled for 60 days or until the correct information is provided, whichever is longer.",
    source: MANUAL,
    section: "Chapter 7: Your driving privileges - Cancellation",
    url: pg(93),
  },
  // ---------------------------------------------------------------- Chapter 8
  {
    key: "alcohol-one-third",
    quote:
      "Alcohol is involved in more than one-third of the deaths on Minnesota roads each year. Crashes involving impaired drivers kill an average of 240 people each year in Minnesota and injure thousands more.",
    source: MANUAL,
    section: "Chapter 8: Driving under the influence of alcohol or drugs - Alcohol and driving",
    url: pg(94),
  },
  {
    key: "drugs-and-driving",
    quote:
      "Minnesota law prohibits driving while impaired by controlled or intoxicating substances. These substances include illegal drugs, prescription drugs, over-the-counter drugs (like cold medicines) and household products.",
    source: MANUAL,
    section: "Chapter 8: Driving under the influence of alcohol or drugs - Drugs and driving",
    url: pg(94),
  },
  {
    key: "impaired-after-one-drink",
    quote:
      "Alcohol is a depressant that slows body functions and impairs motor skills. The amount of alcohol in the blood is called the \"alcohol concentration.\" Higher alcohol concentration means a greater degree of impairment. Your driving ability becomes impaired after just one drink.",
    source: MANUAL,
    section: "Chapter 8: Driving under the influence of alcohol or drugs - Effect of alcohol on driving skills",
    url: pg(94),
  },
  {
    key: "alcohol-vision",
    quote:
      "Alcohol reduces the range of eye movement, decreasing peripheral vision. Blurred vision may also occur at high alcohol concentration levels.",
    source: MANUAL,
    section: "Chapter 8: Driving under the influence of alcohol or drugs - Vision",
    url: pg(94),
  },
  {
    key: "standard-drinks",
    quote:
      "A 12-ounce beer, a 5-ounce glass of wine, a typical mixed drink and a 9-ounce wine cooler usually contain about the same amount of alcohol.",
    source: MANUAL,
    section: "Chapter 8: Driving under the influence of alcohol or drugs - Things to know about alcohol",
    url: pg(95),
  },
  {
    key: "proof-definition",
    quote:
      "The term \"proof\" refers to the strength of a drink and is equal to twice the percentage of alcohol it contains. For example, a bottle of 80-proof whiskey contains 40 percent alcohol.",
    source: MANUAL,
    section: "Chapter 8: Driving under the influence of alcohol or drugs - Things to know about alcohol",
    url: pg(95),
  },
  {
    key: "sober-up-wait",
    quote:
      "The only way to reduce your alcohol concentration is to wait. Alcohol is generally eliminated at the rate of about one drink per hour, but many factors influence the amount of alcohol that is retained.",
    source: MANUAL,
    section: "Chapter 8: Driving under the influence of alcohol or drugs - Things to know about alcohol",
    url: pg(95),
  },
  {
    key: "coffee-no-help",
    quote:
      "Drinking coffee, exercising and taking cold showers do not increase the rate of oxidation.",
    source: MANUAL,
    section: "Chapter 8: Driving under the influence of alcohol or drugs - Things to know about alcohol",
    url: pg(95),
  },
  {
    key: "dwi-limits",
    quote:
      "A person with an alcohol concentration of 0.08 percent or higher (0.04 percent if driving a commercial vehicle) who is in control of a moving or parked vehicle can be arrested for driving while impaired (DWI).",
    source: MANUAL,
    section: "Chapter 8: Driving under the influence of alcohol or drugs - Minnesota Driving While Impaired (DWI) law",
    url: pg(96),
  },
  {
    key: "dwi-0-04",
    quote:
      "If a law enforcement officer can prove that alcohol caused the driver to commit driving errors, the driver can be arrested for DWI with an alcohol concentration as low as 0.04 percent.",
    source: MANUAL,
    section: "Chapter 8: Driving under the influence of alcohol or drugs - Minnesota Driving While Impaired (DWI) law",
    url: pg(96),
  },
  {
    key: "implied-consent",
    quote:
      "If a law enforcement officer has probable cause to believe you are impaired and are operating or in physical control of a motor vehicle, you must submit to a test of your blood, breath or urine. Refusing to take this test is a crime and will result in a revocation of driving privileges for one to six years, depending on the number of offenses on record.",
    source: MANUAL,
    section: "Chapter 8: Driving under the influence of alcohol or drugs - Implied consent/search warrant law",
    url: pg(96),
  },
  {
    key: "preliminary-breath-test",
    quote:
      "This pre-arrest breath test is used as an indicator of your alcohol concentration level, and the results have limited use as evidence in court.",
    source: MANUAL,
    section: "Chapter 8: Driving under the influence of alcohol or drugs - Implied consent/search warrant law",
    url: pg(96),
  },
  {
    key: "dwi-aggravating",
    quote:
      "Penalties will be more severe if you: Have prior DWI arrests. Have an alcohol concentration of 0.16 percent or above. Have a child younger than 16 years of age in the vehicle at the time of the stop. Are under age 21. Refuse a pre-arrest breath test.",
    source: MANUAL,
    section: "Chapter 8: Driving under the influence of alcohol or drugs - Penalties",
    url: pg(97),
  },
  {
    key: "dwi-seven-day",
    quote:
      "If you are found to have an alcohol concentration of 0.08 percent or above or refuse to take a test to determine an alcohol concentration, you may receive a seven-day temporary license. At the end of the seven-day period, your driver's license will be revoked.",
    source: MANUAL,
    section: "Chapter 8: Driving under the influence of alcohol or drugs - Penalties",
    url: pg(97),
  },
  {
    key: "dwi-first-offense",
    quote:
      "First offense Minimum of 90-day revocation (30 days if you plead guilty to DWI).",
    source: MANUAL,
    section: "Chapter 8: Driving under the influence of alcohol or drugs - Penalties",
    url: pg(97),
  },
  {
    key: "dwi-first-jail",
    quote: "Optional enrollment in the Ignition Interlock Device Program. 90 days in jail, a $1,000 fine or both.",
    source: MANUAL,
    section: "Chapter 8: Driving under the influence of alcohol or drugs - Penalties",
    url: pg(97),
  },
  {
    key: "dwi-second-offense",
    quote:
      "Second offense Minimum one-year license revocation if the second offense occurred within 10 years of the first offense.",
    source: MANUAL,
    section: "Chapter 8: Driving under the influence of alcohol or drugs - Penalties",
    url: pg(97),
  },
  {
    key: "dwi-reinstatement-680",
    quote:
      "Penalties associated with an alcohol-related revocation of a driver's license include a $680 reinstatement fee, application for a driver's license and possibly enrollment in the Ignition Interlock Device Program.",
    source: MANUAL,
    section: "Chapter 8: Driving under the influence of alcohol or drugs - Penalties",
    url: pg(97),
  },
  {
    key: "interlock-0-02",
    quote:
      "To start the vehicle, you must blow into the device. If the device detects an alcohol concentration at or above 0.02 percent, it prevents the vehicle from starting.",
    source: MANUAL,
    section: "Chapter 8: Driving under the influence of alcohol or drugs - Ignition Interlock Device program",
    url: pg(98),
  },
  {
    key: "felony-dwi",
    quote:
      "You may be charged with a felony DWI if you are arrested for a fourth DWI in a 10-year period, have previously been convicted of a felony DWI, or have been convicted of criminal vehicular homicide while under the influence of alcohol or drugs.",
    source: MANUAL,
    section: "Chapter 8: Driving under the influence of alcohol or drugs - Felony DWI",
    url: pg(98),
  },
  {
    key: "not-a-drop",
    quote:
      "It is illegal for a person under age 21 to operate a motor vehicle with any detectable amount of alcohol in their system. If convicted of this offense, you will have your driving privileges suspended for 30 days. A second conviction will result in a suspension of driving privileges for 180 days.",
    source: MANUAL,
    section: "Chapter 8: Driving under the influence of alcohol or drugs - Underage drinking - no tolerance rule",
    url: pg(98),
  },
  {
    key: "cannabis-driving",
    quote:
      "It is illegal to operate a vehicle while under the influence of a cannabis product, lower-potency hemp edible, a hemp-derived consumer product, an artificially derived cannabinoid or tetrahydrocannabinols.",
    source: MANUAL,
    section: "Chapter 8: Driving under the influence of alcohol or drugs - Cannabis",
    url: pg(99),
  },
  {
    key: "cannabis-storage",
    quote:
      "You may keep these products in the trunk of a vehicle or, if the vehicle does not have a trunk, in another area of the vehicle not normally occupied by the driver and passengers. You must not keep these products in the utility compartment or glove compartment of a vehicle.",
    source: MANUAL,
    section: "Chapter 8: Driving under the influence of alcohol or drugs - Possession and open package law",
    url: pg(99),
  },
  {
    key: "open-container",
    quote:
      "You must not drink or have an open container of any alcoholic beverage inside a motor vehicle when it is on a public street or highway. It is also unlawful to allow a passenger to drink, or to have an open container of, any alcoholic beverage inside a motor vehicle.",
    source: MANUAL,
    section: "Chapter 8: Driving under the influence of alcohol or drugs - Open container",
    url: pg(99),
  },
  // ---------------------------------------------------------------- Statute
  {
    key: "stat-speed-freeways",
    quote:
      "(4) 70 miles per hour on interstate highways outside the limits of any urbanized area with a population of greater than 50,000 as defined by order of the commissioner of transportation; (5) 65 miles per hour on interstate highways inside the limits of any urbanized area with a population of greater than 50,000 as defined by order of the commissioner of transportation;",
    source: STAT("169.14"),
    section: "169.14 Speed limits, zones; radar - Subd. 2. Speed limits",
    url: stat("169.14"),
  },
  {
    key: "stat-speed-expressway-65",
    quote:
      "(2) 65 miles per hour on noninterstate expressways, as defined in section 160.02, subdivision 18b, and noninterstate freeways, as defined in section 160.02, subdivision 19;",
    source: STAT("169.14"),
    section: "169.14 Speed limits, zones; radar - Subd. 2. Speed limits",
    url: stat("169.14"),
  },
  {
    key: "stat-school-zone-speed",
    quote:
      "The school speed limit shall not be lower than 15 miles per hour and shall not be more than 30 miles per hour below the established speed limit on an affected street or highway.",
    source: STAT("169.14"),
    section: "169.14 Speed limits, zones; radar - Subd. 5a. Speed zoning in school zone; surcharge",
    url: stat("169.14"),
  },
  {
    key: "stat-work-zone-45",
    quote:
      "the speed limit on a road having an established speed limit of 50 miles per hour or greater is adjusted to 45 miles per hour in a work zone when (1) at least one lane or portion of a lane of traffic is closed in either direction, and (2) workers are present.",
    source: STAT("169.14"),
    section: "169.14 Speed limits, zones; radar - Subd. 5d. Speed limit in work zone when workers present",
    url: stat("169.14"),
  },
  {
    key: "stat-hands-free",
    quote:
      "the person operating the vehicle upon a street or highway is prohibited from: (1) holding a wireless communications device with one or both hands;",
    source: STAT("169.475"),
    section: "169.475 Use of wireless communications device - Subd. 2. Prohibition on use; penalty",
    url: stat("169.475"),
  },
  {
    key: "stat-hands-free-fine",
    quote: "A person who violates paragraph (a) a second or subsequent time must pay a fine of $275.",
    source: STAT("169.475"),
    section: "169.475 Use of wireless communications device - Subd. 2. Prohibition on use; penalty",
    url: stat("169.475"),
  },
  {
    key: "stat-seat-belt-fine",
    quote:
      "A person who is 15 years of age or older and who violates paragraph (a) is subject to a fine of $25.",
    source: STAT("169.686"),
    section: "169.686 Seat belt use required; penalty - Subdivision 1. Seat belt requirement",
    url: stat("169.686"),
  },
  {
    key: "stat-parking-bike-lane",
    quote: "(13) within a bicycle lane, except when posted signs permit parking;",
    source: STAT("169.34"),
    section: "169.34 Prohibitions; stopping, parking - Subdivision 1. Prohibitions",
    url: stat("169.34"),
  },
];
