import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts behind the Saskatchewan bank. Three sources sit
// behind them, and each is here for a reason:
//
//  - The Saskatchewan Driver's Handbook, published by Saskatchewan Government
//    Insurance. The cover carries the publisher's own edition label, "2026-27",
//    and the note on page i reads "This handbook is accurate as of September
//    2025." It runs 196 printed pages inside a 206-page PDF, so the book's
//    printed page 1 is PDF page 11 and every `#page=` anchor below is the
//    printed page plus ten. This is the book both written exams are set from,
//    and most of what is quoted here comes from it.
//  - The Traffic Safety Act, c T-18.1, consolidated to 2024 and published by
//    the Saskatchewan Publications Centre. The handbook leaves out numbers the
//    exam still expects: the 320 metres of clear view a pass needs on a rural
//    highway, the three-metre and ten-metre stop positions where there is no
//    line, the 200-metre and 100-metre points for dimming high beams, the
//    booster-seat weights and heights, and the five circumstances that oblige
//    you to call the police after a collision. Those come from the Act. Its
//    `#page=` anchors are PDF pages, which the consolidation prints on the page
//    itself.
//  - SGI's own New Class 5 drivers page, which is where the test format lives.
//    The handbook never states the pass mark, the fee, or the fact that a
//    failed exam can be rewritten the next day; that page carries all of it and
//    is revised far more often than the book.
//
// Every quote was lifted MECHANICALLY, as a contiguous substring of the same
// normalised text scripts/verify-excerpts.py reads, so no quote here can have
// drifted from its source. Nothing was retyped. Only the normalisations the
// sibling banks use were applied, and only to the extracted text: curly quotes
// and dashes fold to ASCII; runs of whitespace, including the line breaks the
// PDF inserts mid-sentence, collapse to single spaces; bullets and the control
// characters the typesetter used for them become spaces, so a stem and its
// list run together in the order they appear. No words are changed, dropped or
// reordered.
//
// The sources' own slips are preserved exactly as they stand, because a quote
// that has been tidied up is no longer a quote. Among them: the handbook's
// claim that "Experienced cyclists can travel at 25-25 km/h on a flat surface",
// its road-test rescheduling list which ends with the two items inverted ("the
// passenger compartment of the vehicle is not clean or free of strong scent or
// odour"), and its "hands-fee unit" on page 166.
//
// See docs/driving/research/saskatchewan.md.

export const saskatchewanExcerpts: HandbookExcerpt[] = [
  {
    key: "test-two-exams",
    quote:
      "To get your Class 7 learner's licence, you need to " +
      "pass the basic knowledge exam, the signs exam and a " +
      "vision test.",
    source: "SGI - New Class 5 drivers",
    section: "Get a Class 7 learner's licence",
    url: "https://sgi.sk.ca/new-drivers",
  },
  {
    key: "test-basic-exam",
    quote:
      "This written exam tests your understanding of the " +
      "rules of the road. In larger centres it is computer " +
      "based with translation in over 100 languages. Smaller " +
      "centres offer paper exams.",
    source: "SGI - New Class 5 drivers",
    section: "Basic knowledge exam",
    url: "https://sgi.sk.ca/new-drivers",
  },
  {
    key: "test-sign-exam",
    quote:
      "This computer-based written exam tests your " +
      "understanding of the meaning of traffic signs.",
    source: "SGI - New Class 5 drivers",
    section: "Sign exam",
    url: "https://sgi.sk.ca/new-drivers",
  },
  {
    key: "test-retake",
    quote:
      "You can schedule another test as early as the next " +
      "day.",
    source: "SGI - New Class 5 drivers",
    section: "Fail",
    url: "https://sgi.sk.ca/new-drivers",
  },
  {
    key: "test-supervisor",
    quote:
      "at all times, be able to take over driving the vehicle " +
      "at minimum, hold a valid Class 5 driver's licence from " +
      "a Canadian or US jurisdiction have held a valid " +
      "licence for at least 12 months in the last 3 years be " +
      "in the front passenger seat next to the learner driver " +
      "not be a novice driver",
    source: "SGI - New Class 5 drivers",
    section: "Supervising driver responsibilities",
    url: "https://sgi.sk.ca/new-drivers",
  },
  {
    key: "gdl-restrictions-all",
    quote:
      "You can't drive a taxi, limousine or rideshare " +
      "vehicle. You can't consume alcohol or drugs before " +
      "driving. You can't use any type of cellphone " +
      "(hand-held or hands-free) while driving. You can't be " +
      "a supervising driver. You can't get a commercial " +
      "licence. Your number of passengers is limited to the " +
      "number of seatbelts in the vehicle.",
    source: "SGI - New Class 5 drivers",
    section: "GDL driving restrictions",
    url: "https://sgi.sk.ca/new-drivers",
  },
  {
    key: "gdl-learner-extra",
    quote:
      "Your supervising driver, who must be an experienced " +
      "Class 5 driver with a licence from Canada or the USA, " +
      "has to be in the front seat with you at all times. " +
      "You're only allowed to have immediate family members1 " +
      "as passengers between midnight and 5 a.m.",
    source: "SGI - New Class 5 drivers",
    section: "GDL driving restrictions - Class 7 learner's",
    url: "https://sgi.sk.ca/new-drivers",
  },
  {
    key: "gdl-novice1-extra",
    quote:
      "Only 1 passenger can be someone who is not family " +
      "members1. Other passengers must be immediate family " +
      "members.",
    source: "SGI - New Class 5 drivers",
    section: "GDL driving restrictions - Class 5 Novice 1",
    url: "https://sgi.sk.ca/new-drivers",
  },
  {
    key: "novice1-requirements",
    quote:
      "be 16 years old with your parent's approval have held " +
      "a Class 7 learner's licence for at least 9 months have " +
      "completed the mandatory driver education from an " +
      "SGI-certified instructor",
    source: "SGI - New Class 5 drivers",
    section: "Get a Class 5 Novice 1 licence",
    url: "https://sgi.sk.ca/new-drivers",
  },
  {
    key: "road-test-grade",
    quote:
      "Passing grade: 9 demerits or less Failing grade: 10 or " +
      "more demerits",
    source: "SGI - New Class 5 drivers",
    section: "All about the road test",
    url: "https://sgi.sk.ca/new-drivers",
  },
  {
    key: "hb-knowledge-tests",
    quote:
      "The knowledge tests consist of two parts: driving " +
      "situations, as well as the rules of the road, and sign " +
      "identification. If you fail any part of these tests, " +
      "you'll be required to rewrite only the examination(s) " +
      "you failed. Successful written exam results are valid " +
      "for one year. You may write only once per day.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "2.11 Your test - Knowledge tests (page 23)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=33",
  },
  {
    key: "hb-no-devices",
    quote:
      "The use of cellphones or electronic devices is not " +
      "allowed in the test area.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "2.11 Your test - Knowledge tests (page 23)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=33",
  },
  {
    key: "hb-learning-period",
    quote:
      "A driver with a Class 7 licence must retain that " +
      "classification for at least nine months before " +
      "becoming eligible for any examinations toward " +
      "obtaining a licence in any other class.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "2.11 Your test - Learning period (page 24)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=34",
  },
  {
    key: "gdl-three-stages",
    quote:
      "There are three stages to Saskatchewan's Graduated " +
      "Driver Licensing program - Learner, Novice 1 and " +
      "Novice 2. As drivers pass through these stages, they " +
      "will see fewer restrictions at each stage until they " +
      "graduate to an experienced Class 5 driver's licence.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "2.3 Graduated Driver Licensing Program (page 11)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=21",
  },
  {
    key: "gdl-steps-practise",
    quote:
      "Practise driving for nine months with a supervising " +
      "driver.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "2.3 Steps in the Graduated Driver Licensing program (page 11)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=21",
  },
  {
    key: "gdl-novice2-restart",
    quote:
      "In the event of an incident, the Novice 2 driver will " +
      "be required to restart the 12-month incident-free " +
      "period again from the loss date/conviction date. " +
      "Interruptions such as licence suspensions, refusal to " +
      "issue or non-renewal will extend the 12 months for any " +
      "period of time the driver did not hold a valid " +
      "licence.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "2.3 Steps in the Graduated Driver Licensing program (page 11)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=21",
  },
  {
    key: "class7-supervisor",
    quote:
      "at all times, be capable of assuming operation of the " +
      "vehicle; hold the equivalent of a Class 5 or greater " +
      "driver's licence issued by a Canadian or U.S. " +
      "jurisdiction; have held a valid licence for a minimum " +
      "of 365 days in the preceding three years (but is not a " +
      "novice driver); and occupy the seat nearest to the " +
      "driver and the vehicle controls.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "2.5 Classified licence system - Licence Class 7 (page 20)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=30",
  },
  {
    key: "class7-min-age",
    quote:
      "16 years (15 with High School Driver Education)",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "2.5 Classified licence system - Licence Class 7 (page 20)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=30",
  },
  {
    key: "class5-road-test-req",
    quote:
      "Must hold a Class 7 licence for nine months Must take " +
      "a road test in a Class 5 vehicle",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "2.5 Classified licence system - Licence Class 5 (page 19)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=29",
  },
  {
    key: "parental-consent",
    quote:
      "Persons under age 18 in licence Class 5 and 7 require " +
      "parental consent to obtain driving privileges. Once " +
      "consent has been granted it cannot be withdrawn.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "2.5 Classified licence system - Licence Class 5 (page 19)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=29",
  },
  {
    key: "mandatory-education",
    quote:
      "high school driver education program; or at least six " +
      "hours in-class and six hours in-car instruction (age " +
      "16 and up).",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "2.8 Mandatory driver education (page 22)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=32",
  },
  {
    key: "licence-produce-48h",
    quote:
      "You must show your licence if a peace officer asks to " +
      "see it. If you don't have your licence with you at the " +
      "time, the officer may allow you up to 48 hours to " +
      "produce it.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "2.1 Driver's licence (page 4)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=14",
  },
  {
    key: "licence-expiry",
    quote:
      "Your driver's licence expires on the last day of your " +
      "birth month or the last day of the month that your " +
      "immigration documents expire.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "2.1 Driver's licence (page 4)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=14",
  },
  {
    key: "new-resident-90-days",
    quote:
      "New residents may drive with their valid " +
      "out-of-province driver's licence for 90 days after " +
      "moving to Saskatchewan.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "2. Saskatchewan's driver's licence program (page 3)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=13",
  },
  {
    key: "change-of-address",
    quote:
      "If you change your name and/or address, you must tell " +
      "SGI within 15 days by writing to us, or at your motor " +
      "licence issuer's office.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "2.4 Change of name or address (page 14)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=24",
  },
  {
    key: "fake-id",
    quote:
      "getting your real driver's licence suspended for at " +
      "least three months a fine of at least $125",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "2.1 Driver's licence - Fake ID (page 6)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=16",
  },
  {
    key: "medical-report",
    quote:
      "When you apply for, or renew, your driver's licence, " +
      "any medical condition that may affect your ability to " +
      "drive must be reported to SGI.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "2.6 Medical requirements (page 21)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=31",
  },
  {
    key: "road-test-fail-list",
    quote:
      "exceed the speed limit are involved in a collision for " +
      "which you are 50% or more responsible fail to stop " +
      "where required fail to yield to vehicles and " +
      "pedestrians disobey traffic lights require the " +
      "assistance of the examiner make a combination of minor " +
      "mistakes",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "2.11 Your test - Road test (page 27)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=37",
  },
  {
    key: "road-test-retest-wait",
    quote:
      "If you're applying for a Class 5 licence and fail your " +
      "road test, you must wait two weeks before you're " +
      "eligible for another road test.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "2.11 Your test - Road test (page 27)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=37",
  },
  {
    key: "road-test-equipment",
    quote:
      "horn signal lights brake lights headlights (as " +
      "required) windshield wipers (as required) working " +
      "defrost (as required) seatbelts and airbags " +
      "speedometer one valid licence plate properly attached " +
      "to the rear of the vehicle",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "2.11 Your test - Road test (page 26)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=36",
  },
  {
    key: "road-test-no-passengers",
    quote:
      "No pets or passengers, other than examination staff, " +
      "are permitted in your vehicle during the road test.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "2.11 Your test - Road test (page 25)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=35",
  },
  {
    key: "snowmobile-class7",
    quote:
      "The holder of a Class 7 driver's licence is permitted " +
      "to operate an ATV or snowmobile provided they are " +
      "accompanied by someone who holds a Class 1 to 5 " +
      "driver's licence or supervised (within 5 m of and in " +
      "view of) by someone on another machine that holds a " +
      "Class 1 to 5 driver's licence.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "2.5 Classified licence system - Licence Class 7 (page 20)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=30",
  },
  {
    key: "default-speed-80",
    quote:
      "In the absence of signs, the speed limit is 80 km/h. " +
      "Most urban centres post speed limit signs at the " +
      "entrances to the town or city. Those speed limits " +
      "apply to all locations within community boundaries, " +
      "unless otherwise posted. The speed limit means the " +
      "fastest you can travel under ideal conditions.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.1 Speeding, stunting and racing (page 29)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=39",
  },
  {
    key: "gravel-default-80",
    quote:
      "The speed limits are to be taken seriously and should " +
      "be regarded as maximums under ideal conditions. When " +
      "there is no posted speed limit, the speed limit is 80 " +
      "km/h under ideal conditions.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.7 Grid, municipal and resource access roads (page 141)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=151",
  },
  {
    key: "emergency-may-exceed",
    quote:
      "There are speed limits on all Saskatchewan roads, " +
      "streets and highways. Always drive your vehicle within " +
      "the posted speed limit. Emergency vehicles responding " +
      "to an emergency may exceed the speed limit.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.1 Speeding, stunting and racing (page 29)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=39",
  },
  {
    key: "pass-emergency-60",
    quote:
      "The maximum speed limit when passing tow trucks or " +
      "emergency vehicles that are stopped with their lights " +
      "flashing or when passing Ministry of Highways and " +
      "Infrastructure equipment with lights flashing, whether " +
      "in motion or not, is 60 km/h.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.1 Speeding, stunting and racing (page 30)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=40",
  },
  {
    key: "work-zone-triple",
    quote:
      "Within the work zone (road maintenance areas), " +
      "motorists are required to slow down and travel no " +
      "faster than the posted speed. Fines for speeding " +
      "triple when passing highway workers or equipment " +
      "occupied by a worker in the work zone.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.1 Speeding, stunting and racing (page 30)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=40",
  },
  {
    key: "tow-truck-60",
    quote:
      "Drivers are also required to reduce their speed to 60 " +
      "km/h when passing a tow truck stopped on the roadside " +
      "with its amber or amber and blue lights flashing while " +
      "it's assisting a disabled vehicle.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.1 Speeding, stunting and racing (page 30)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=40",
  },
  {
    key: "school-zone-bylaw",
    quote:
      "In school zones drivers must be particularly careful. " +
      "Each city or town sets speed limits in school zones " +
      "through local bylaws. As a result, laws vary from " +
      "place to place so watch for signs. If there are no " +
      "signs, you should still reduce your speed and proceed " +
      "cautiously in school zones.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.1 Speeding, stunting and racing (page 30)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=40",
  },
  {
    key: "photo-radar",
    quote:
      "Police use photo radar to enforce speed limits in some " +
      "work zones, school zones and high-risk locations. " +
      "Photo radar tickets are issued to the registered owner " +
      "of the speeding vehicle driven through the zone.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.1 Speeding, stunting and racing (page 30)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=40",
  },
  {
    key: "never-faster-than-conditions",
    quote:
      "Regardless of the posted or basic speed limit you must " +
      "never travel faster than conditions allow for safe and " +
      "reasonable passage. At the same time, travelling too " +
      "slowly can be hazardous. You should never drive at a " +
      "speed slow enough to impede or block other traffic, " +
      "unless proper safety precautions have been taken.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.1 Speeding, stunting and racing (page 30)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=40",
  },
  {
    key: "slow-for-animals",
    quote:
      "You must slow down when approaching animals on or near " +
      "the road.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.1 Speeding, stunting and racing (page 30)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=40",
  },
  {
    key: "stunting-list",
    quote:
      "racing side by side with another vehicle while " +
      "disobeying the speed limit chasing another vehicle " +
      "speeding in and out of lanes to unsafely pass vehicles " +
      "attempting to lift some or all tires from the roadway " +
      "(including driving a motorcycle on one wheel) " +
      "attempting to spin a vehicle to cause it to spin or " +
      "circle driving a vehicle while not sitting in the " +
      "driver's seat driving your vehicle in a way that " +
      "prevents another vehicle from passing stopping or " +
      "slowing down to interfere with the movement of another " +
      "vehicle",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.1 Speeding, stunting and racing (page 30)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=40",
  },
  {
    key: "snow-plow-60",
    quote:
      "Drivers must slow to 60 km/h when passing snow plows " +
      "or other highway equipment that are stopped on the " +
      "highway with blue and amber warning lights flashing. " +
      "Snow plows that are in motion, can be passed on the " +
      "highway if it's safe to do so. Drivers in this case " +
      "are not limited to travelling 60 km/h.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.4 Sharing the road with snow plows (page 34)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=44",
  },
  {
    key: "work-zone-worker-60",
    quote:
      "In the work zone drivers must slow to the posted speed " +
      "through the entire zone and 60 km/h or less when " +
      "passing a worker, flag person or equipment occupied by " +
      "a worker.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.10 Construction signs (page 87)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=97",
  },
  {
    key: "worker-3km",
    quote:
      "The fine for speeding triples when travelling greater " +
      "than the posted speed limit past workers. Workers are " +
      "identified as anyone within 3 km of a traffic control " +
      "person, survey crew or highway workers sign identified " +
      "on page 86.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.4 Regulatory signs (page 78)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=88",
  },
  {
    key: "act-speed-80",
    quote:
      "if no signs are erected on the highway, at a speed " +
      "greater than 80 kilometres per hour; or (b) at a speed " +
      "greater than the maximum speed indicated by any signs " +
      "that are erected on the highway.",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 199(1) - Speeding prohibited",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=160",
  },
  {
    key: "act-speed-reasonable",
    quote:
      "No person shall drive a vehicle on a highway at a " +
      "speed greater than is reasonable and safe in the " +
      "circumstances.",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 199(3) - Speeding prohibited",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=160",
  },
  {
    key: "act-speed-impede",
    quote:
      "No person shall drive a vehicle on a highway at a " +
      "speed that impedes the normal and reasonable movement " +
      "of traffic on the highway except when necessary for " +
      "the safe operation of the vehicle.",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 199(4) - Speeding prohibited",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=160",
  },
  {
    key: "act-speed-50-over",
    quote:
      "a person who drives a vehicle at a speed greater than " +
      "50 kilometres per hour over the applicable speed limit " +
      "mentioned in subsection (1) is guilty of an offence.",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 199(2) - Speeding prohibited",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=160",
  },
  {
    key: "act-worker-60",
    quote:
      "No person shall drive a vehicle on a highway at a " +
      "speed greater than 60 kilometres per hour when " +
      "passing: (a) a highway worker or flag person; (b) any " +
      "highway equipment occupied by a highway worker, whose " +
      "presence on the highway is marked in the manner " +
      "determined in the regulations made by the board; or " +
      "(c) any highway equipment that is stopped on a highway " +
      "with its ministry issued warning lights in operation.",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 203(1) - Speed limits when passing highway workers",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=162",
  },
  {
    key: "act-emergency-60",
    quote:
      "when passing an emergency vehicle that is stopped on " +
      "the highway with its emergency lights in operation.",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 204(1) - Speed limits when passing emergency vehicles",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=162",
  },
  {
    key: "sign-six-shapes",
    quote:
      "The stop sign, a red octagon with white lettering, " +
      "means come to a full stop and be sure the way is clear " +
      "before proceeding.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.2 Six basic sign shapes every driver must know (page 76)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=86",
  },
  {
    key: "sign-regulatory",
    quote:
      "Regulatory signs are white rectangles or squares with " +
      "black or other coloured lettering. These signs state " +
      "the law, such as speed limits, parking regulations and " +
      "turning and passing movements.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.2 Six basic sign shapes every driver must know (page 76)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=86",
  },
  {
    key: "sign-yield",
    quote:
      "Yield right of way signs are triangular and have a red " +
      "border on a white background. A yield sign means you " +
      "must reduce speed when approaching an intersection. " +
      "Give right of way and stop if necessary if any other " +
      "traffic is in, or closely approaching, the " +
      "intersection.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.2 Six basic sign shapes every driver must know (page 76)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=86",
  },
  {
    key: "sign-warning",
    quote:
      "Warning signs are diamond shaped and are yellow or " +
      "orange with black letters or symbols. They warn of " +
      "dangerous or unusual conditions ahead, such as a " +
      "curve, turn, dip or side road.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.2 Six basic sign shapes every driver must know (page 77)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=87",
  },
  {
    key: "sign-crossbuck",
    quote:
      "The crossbuck is the traditional symbol at " +
      "roadway-railway crossings. The colour of the crossbuck " +
      "is the same as a yield sign and has the same meaning; " +
      "give right of way and stop if necessary.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.2 Six basic sign shapes every driver must know (page 77)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=87",
  },
  {
    key: "sign-school-zone",
    quote:
      "The school zone signs have a pentagon shape, with a " +
      "fluorescent yellow-green background and show a black " +
      "silhouette of children. When this sign has a \"Maximum " +
      "Speed\" or \"km/h during School Days\" tab mounted " +
      "underneath, it means the speed is to be observed as " +
      "indicated.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.2 Six basic sign shapes every driver must know (page 77)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=87",
  },
  {
    key: "sign-old-school-zone",
    quote:
      "The old school zone sign has a pentagon shape, but " +
      "with a blue background and shows a white silhouette of " +
      "children. These signs are currently being replaced.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.2 Six basic sign shapes every driver must know (page 77)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=87",
  },
  {
    key: "sign-colours",
    quote:
      "Red Stop or prohibition Blue General information or " +
      "service road information Green Indicates traffic " +
      "movement such as turns which are permitted or " +
      "directional guidance Yellow General warning " +
      "danger/caution Fluorescent yellow-green School zone " +
      "and school crosswalk ahead signs White Regulatory " +
      "Orange Construction and maintenance warning",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.3 Standard sign colours (page 78)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=88",
  },
  {
    key: "sign-identify-shapes",
    quote:
      "The easiest way to identify traffic signs is to learn " +
      "to recognize their shapes and colours. For safe " +
      "driving, you must recognize and obey traffic signs " +
      "without hesitation.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.1 Traffic signs (page 76)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=86",
  },
  {
    key: "sign-max-speed-ideal",
    quote:
      "The maximum speed allowed under ideal conditions",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.4 Regulatory signs (page 78)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=88",
  },
  {
    key: "sign-recommended-speed",
    quote:
      "Recommended safe speed",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.9 Warning signs (page 84)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=94",
  },
  {
    key: "sign-no-u-turn",
    quote:
      "You must not turn your vehicle around in the roadway " +
      "to travel in the opposite direction",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.4 Regulatory signs (page 79)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=89",
  },
  {
    key: "sign-no-right-on-red",
    quote:
      "No right turn on red Wait for green light before " +
      "making a right turn",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.8 Regulatory turn control signs (page 82)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=92",
  },
  {
    key: "sign-turn-tabs",
    quote:
      "These signs may be accompanied by a tab that indicates " +
      "the sign is only in effect during certain hours of the " +
      "day.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.8 Regulatory turn control signs (page 82)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=92",
  },
  {
    key: "sign-lane-designation",
    quote:
      "These signs may be mounted above (or to the side of) " +
      "the roadway. When mounted above, each sign is centred " +
      "over the lane it controls.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.7 Regulatory lane designation signs (page 81)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=91",
  },
  {
    key: "sign-slow-moving",
    quote:
      "Mounted on the rear of vehicles that travel at speeds " +
      "less than 40 km/h. It warns drivers approaching from " +
      "behind to slow down.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.9 Warning signs - Slow moving vehicle (page 85)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=95",
  },
  {
    key: "sign-icing",
    quote:
      "Bridge or roadway surface may be slippery at zero " +
      "degrees Celsius, slow down",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.9 Warning signs - Surface subject to icing (page 85)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=95",
  },
  {
    key: "sign-reverse-curve",
    quote:
      "Two turns in opposite directions separated by a " +
      "tangent of less than 120 m, first turn right",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.9 Warning signs - Reverse curve ahead (page 84)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=94",
  },
  {
    key: "sign-added-lane",
    quote:
      "Two roads converge and merging movements are not " +
      "required",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.9 Warning signs - Added lane (page 84)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=94",
  },
  {
    key: "sign-chevron",
    quote:
      "Posted in groups to guide drivers around sharp curves " +
      "in the road",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.9 Warning signs - Chevron (arrowhead) (page 85)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=95",
  },
  {
    key: "sign-hazard-marker",
    quote:
      "The downward lines show the side on which you may " +
      "safely pass",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.9 Warning signs - Hazard close to the edge of the road (page 86)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=96",
  },
  {
    key: "sign-road-narrows",
    quote:
      "Road ahead is not as wide as the road you are driving " +
      "on",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.9 Warning signs - Road narrows (page 84)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=94",
  },
  {
    key: "sign-construction-orange",
    quote:
      "Construction signs have black letters or symbols on an " +
      "orange background.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.10 Construction signs (page 86)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=96",
  },
  {
    key: "sign-construction-ahead",
    quote:
      "This sign indicates you are entering a construction " +
      "zone. Drive with extra caution and be prepared for " +
      "changes in the speed limit",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.10 Construction signs (page 86)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=96",
  },
  {
    key: "sign-pavement-dropoff",
    quote:
      "This sign warns motorists that they are on or " +
      "approaching a section of roadway where either the " +
      "adjacent lane or shoulder or both are lower or higher " +
      "than the motorist's travel lane",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.10 Construction signs (page 87)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=97",
  },
  {
    key: "sign-work-zone-start",
    quote:
      "The presence of one of the above signs designates the " +
      "start of the work zone.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.10 Construction signs (page 87)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=97",
  },
  {
    key: "delineators-three",
    quote:
      "Three delineators all provincial and public highways " +
      "community access roads grid roads major streets",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.12 Crossroad delineators (page 89)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=99",
  },
  {
    key: "delineators-purpose",
    quote:
      "Triangular reflective delineators can be found mounted " +
      "on both sides of a sign post at many rural " +
      "intersections controlled by stop or yield signs. They " +
      "alert rural drivers to the fact they're approaching an " +
      "intersection and indicate the classification of the " +
      "road as follows:",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.12 Crossroad delineators (page 89)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=99",
  },
  {
    key: "sign-playground",
    quote:
      "Playground ahead When this sign has a km/h tab mounted " +
      "underneath, it means that this speed is to be observed",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.9 Warning signs - Playground ahead (page 85)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=95",
  },
  {
    key: "sign-school-bus-stop",
    quote:
      "School bus stop ahead Stop for bus with flashing " +
      "lights",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.9 Warning signs - School bus stop ahead (page 85)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=95",
  },
  {
    key: "sign-ped-crosswalk-flashing",
    quote:
      "Pedestrian crosswalk Traffic must stop when lights are " +
      "flashing and proceed when safe",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.6 Regulatory pedestrian crossing signs (page 80)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=90",
  },
  {
    key: "sign-bus-lane",
    quote:
      "Bus lanes are marked by a lane sign that indicates the " +
      "time and days of operation of the restriction. The " +
      "sign has a diamond on it, as well as a bus symbol.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.14 Bus lanes and bicycle lanes (page 51)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=61",
  },
  {
    key: "signal-green",
    quote:
      "A green light at an intersection means you may turn " +
      "left, right or drive straight though the intersection, " +
      "unless a sign prohibits any of these movements, once " +
      "the intersection is clear and it's safe to do so.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.15 Traffic signals (page 91)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=101",
  },
  {
    key: "signal-green-left",
    quote:
      "If you want to turn left you can enter the " +
      "intersection on a green light, but you must yield to " +
      "oncoming traffic and pedestrians. If traffic is heavy, " +
      "you may be forced to complete your turn on an amber " +
      "(yellow) or red light.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.15 Traffic signals (page 91)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=101",
  },
  {
    key: "signal-amber",
    quote:
      "When approaching an amber (yellow) light at an " +
      "intersection, you must stop before entering the " +
      "crosswalk. If you have already entered, or cannot stop " +
      "safely, proceed with caution.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.15 Traffic signals (page 91)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=101",
  },
  {
    key: "signal-red-right-turn",
    quote:
      "When approaching a red light, you must stop and remain " +
      "stopped until the light changes. If you're making a " +
      "right turn at an intersection (where there's no sign " +
      "prohibiting it), stop and yield the right of way to " +
      "pedestrians and any other vehicles travelling through " +
      "the intersection before you make the turn.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.15 Traffic signals (page 91)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=101",
  },
  {
    key: "signal-double-right",
    quote:
      "If you're in the outside (left) lane of a double right " +
      "turning lane, you may also turn right after stopping " +
      "and yielding the right of way to pedestrians and " +
      "vehicles. Use extra caution, it's not a common " +
      "manoeuver.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.15 Traffic signals (page 91)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=101",
  },
  {
    key: "signal-left-on-red",
    quote:
      "This also applies to making a left turn at the " +
      "intersection of two one-way streets. Some " +
      "intersections may have a sign prohibiting turns on red " +
      "lights.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.15 Traffic signals (page 92)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=102",
  },
  {
    key: "signal-no-uturn",
    quote:
      "You may not make a U-turn at any intersection where " +
      "there are traffic lights unless there is a sign to " +
      "indicate U-turns are permitted.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.15 Traffic signals (page 92)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=102",
  },
  {
    key: "signal-green-arrow",
    quote:
      "When approaching a red light and a light with a solid " +
      "green arrow, you may proceed in the direction of the " +
      "arrow only after yielding the right of way to any " +
      "other vehicles and pedestrians.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.15 Traffic signals (page 92)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=102",
  },
  {
    key: "signal-flashing-green",
    quote:
      "When approaching a red or green light and a flashing " +
      "green (left turn) arrow, you may proceed in the " +
      "direction of the green arrow.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.15 Traffic signals (page 92)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=102",
  },
  {
    key: "signal-amber-arrow",
    quote:
      "After the left turn arrow, an amber (yellow) arrow may " +
      "appear. This means the green light is about to appear " +
      "for traffic in both directions.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.15 Traffic signals (page 92)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=102",
  },
  {
    key: "signal-flashing-amber",
    quote:
      "When approaching a flashing amber (yellow) light, you " +
      "must proceed with caution.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.15 Traffic signals (page 92)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=102",
  },
  {
    key: "signal-flashing-red",
    quote:
      "When approaching a flashing red light you must stop, " +
      "but you may then proceed when it's safe.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.15 Traffic signals (page 93)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=103",
  },
  {
    key: "signal-amber-yield-ped",
    quote:
      "When approaching an amber (yellow) light, you must " +
      "yield the right of way to any pedestrians in the " +
      "crosswalk or pedestrian corridor.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.15 Traffic signals (page 93)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=103",
  },
  {
    key: "signal-dont-walk",
    quote:
      "A flashing \"don't walk\" means pedestrians should " +
      "finish crossing the street if they have already " +
      "started.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.15 Traffic signals (page 93)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=103",
  },
  {
    key: "markings-yellow-white",
    quote:
      "Yellow directional dividing lines separate traffic " +
      "travelling in opposite directions. White line markings " +
      "are used to separate traffic travelling in the same " +
      "direction.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.7 Directional dividing lines (page 44)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=54",
  },
  {
    key: "markings-double-wide",
    quote:
      "Freeway lanes, as well as some city street lanes, " +
      "which are ending will usually be marked by double wide " +
      "lines painted on the pavement. If you're driving in a " +
      "lane marked with double wide lines, be prepared for " +
      "the lane to end. You'll have to exit the freeway, turn " +
      "at the next intersection, or merge.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.7 Directional dividing lines (page 44)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=54",
  },
  {
    key: "markings-solid-line",
    quote:
      "Where a solid line separates lanes, you may not move " +
      "across the solid line. The only exceptions are double " +
      "lines in the centre of a highway where the line " +
      "nearest you is a broken line",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.8 Traffic lanes (page 45)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=55",
  },
  {
    key: "sharrow",
    quote:
      "A chevron and bicycle symbol designate a shared " +
      "bicycle or \"sharrow\" lane. Sharrows use pavement " +
      "markings painted on a roadways to encourage cyclists " +
      "and motorists to share the lane.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.14 Shared bicycle lanes (page 52)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=62",
  },
  {
    key: "act-red-light",
    quote:
      "(b) the driver of a vehicle facing the light may enter " +
      "the intersection and turn to the right, after stopping " +
      "and yielding the right of way as may be required, " +
      "unless there is a sign prohibiting a right turn on a " +
      "red light;",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 235(5) - Rules re traffic lights",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=176",
  },
  {
    key: "act-left-on-red-oneway",
    quote:
      "the driver of the vehicle facing the red light may " +
      "enter the intersection and turn to the left, after " +
      "stopping and yielding the right of way as may be " +
      "required, unless there is a sign prohibiting a left " +
      "turn on a red light;",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 235(6) - Rules re traffic lights",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=177",
  },
  {
    key: "act-amber",
    quote:
      "the driver of a vehicle facing the light shall stop at " +
      "the crosswalk, but, if the vehicle cannot be brought " +
      "to a stop with safety, the driver may drive cautiously " +
      "through the intersection;",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 235(3) - Rules re traffic lights",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=176",
  },
  {
    key: "act-no-uturn-lights",
    quote:
      "At an intersection of highways where a traffic light " +
      "is in operation, no driver of a vehicle shall turn the " +
      "vehicle so as to proceed in the opposite direction.",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 235(15) - Rules re traffic lights",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=177",
  },
  {
    key: "act-signalling",
    quote:
      "the driver of the vehicle on a highway shall use the " +
      "signalling device to give a warning for a sufficient " +
      "distance to warn other traffic of the driver's " +
      "intention to stop, abruptly reduce speed, turn or " +
      "change lanes.",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 234(1) - Rules re signalling",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=176",
  },
  {
    key: "act-hand-signals",
    quote:
      "to turn left, to turn out to the left from a " +
      "stationary position at the side of the highway or to " +
      "drive to the left from one traffic lane to another, by " +
      "extending the driver's left arm horizontally; (b) to " +
      "turn right, to turn out to the right from a stationary " +
      "position at the side of the highway or to drive to the " +
      "right from one traffic lane to another, by extending " +
      "the driver's left arm from the shoulder to the elbow " +
      "horizontally and from the elbow to the hand vertically " +
      "upwards; or (c) to stop or to abruptly reduce speed, " +
      "by extending the driver's left arm diagonally " +
      "downwards.",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 234(2) - Rules re signalling",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=176",
  },
  {
    key: "signal-distance",
    quote:
      "You must turn on your signal lights in advance of your " +
      "turn or lane change. A good rule when driving at " +
      "speeds under 60 km/h is to signal at least 30 m before " +
      "turning. At higher speeds, signal at least 150 m from " +
      "the corner.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.11 Signalling (page 47)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=57",
  },
  {
    key: "signal-before-intersection",
    quote:
      "If you are approaching an intersection and want to " +
      "change lanes, complete your lane change and cancel " +
      "your signal before entering the intersection or wait " +
      "until you pass through the intersection before turning " +
      "on your signal and changing lanes. This helps to keep " +
      "intersections safer and avoid confusion.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.11 Signalling - Turn signals (page 47)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=57",
  },
  {
    key: "signal-intent",
    quote:
      "When you use turn signals, you're saying, \"I intend to " +
      "turn or change lanes.\" If you wait until you're " +
      "actually turning or changing lanes before you signal, " +
      "you're not telling other drivers what you intend to " +
      "do. They can already see that you're turning.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.11 Signalling - Turn signals (page 47)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=57",
  },
  {
    key: "lane-one-lane",
    quote:
      "On roads with marked lanes, you must travel entirely " +
      "in one lane. Where there are no lane lines marked, you " +
      "should travel as if there were markings there. " +
      "Changing lanes is permitted only when safe to do so.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.8 Traffic lanes (page 45)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=55",
  },
  {
    key: "lane-position",
    quote:
      "On highways or rural roads, keep to the right of your " +
      "lane. In urban areas, you'll usually drive in the " +
      "middle of the lane. However, your position in the lane " +
      "should allow you to see as much as possible.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.9 Lane position (page 45)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=55",
  },
  {
    key: "lane-turn-same-relative",
    quote:
      "At some intersections, signs or traffic lights " +
      "indicate two or more lanes may be used to complete a " +
      "turn. At these locations, you must approach the " +
      "intersection and complete the turn in the same " +
      "relative lane position.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.9 Lane position (page 46)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=56",
  },
  {
    key: "shoulder-not-a-lane",
    quote:
      "It's not a good practice to drive on the shoulder " +
      "portion of the road. The area of the roadway to the " +
      "right of the solid white line is designed for stopped " +
      "vehicles. As well, the shoulder can be used for " +
      "emergency manoeuvres, two-point turns, or preparing to " +
      "make a right turn from a highway. The shoulder is not " +
      "an extra driving lane.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.10 Lane selection (page 46)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=56",
  },
  {
    key: "left-lane-passing",
    quote:
      "On a multi-lane divided highway the left lane is " +
      "intended for vehicles to pass slower moving right lane " +
      "vehicles or for emergency vehicles.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.10 Lane selection (page 46)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=56",
  },
  {
    key: "passing-rules",
    quote:
      "Make sure the pass is legal, safe and necessary. Don't " +
      "cross solid or double solid yellow lines. Don't pass " +
      "on the crest of a hill, before a curve, at " +
      "intersections or any place where your sight distance " +
      "is limited.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.13 Passing (page 49)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=59",
  },
  {
    key: "passing-three-second",
    quote:
      "Maintain a minimum three-second following distance " +
      "between you and the vehicle you are following (see " +
      "\"Using time to estimate your following distance,\" page " +
      "99). When you decide to pass, accelerate to build up " +
      "speed before passing. The greater the difference in " +
      "speed between you and the vehicle you're passing, the " +
      "shorter your passing time will be.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.13 Passing (page 49)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=59",
  },
  {
    key: "passing-mirror",
    quote:
      "Wait until you see the vehicle being passed in your " +
      "inside rear-view mirror before pulling back into your " +
      "travelling lane. Remember, you must signal, check your " +
      "mirrors and shoulder check to ensure it's safe to " +
      "re-enter your travelling lane.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.13 Passing (page 49)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=59",
  },
  {
    key: "passing-on-right",
    quote:
      "When passing other vehicles, you must always pass on " +
      "the left except: where there are two or more traffic " +
      "lanes in your direction of travel any time the vehicle " +
      "ahead is about to make a left turn and it is possible " +
      "to pass safely on the right without driving on the " +
      "shoulder",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.13 Passing (page 49)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=59",
  },
  {
    key: "passing-stopped-for-peds",
    quote:
      "without driving on the shoulder Caution: You may not " +
      "pass any vehicle that is stopped at an intersection to " +
      "permit pedestrians to cross.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.13 Passing (page 49)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=59",
  },
  {
    key: "passing-no-speeding",
    quote:
      "Do not exceed the speed limit when passing.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.13 Passing (page 49)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=59",
  },
  {
    key: "being-passed",
    quote:
      "When being passed on the left by another vehicle, stay " +
      "to the right of your lane and maintain your speed. " +
      "Don't accelerate or obstruct the passing vehicle from " +
      "returning to the right lane.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.13 Passing (page 50)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=60",
  },
  {
    key: "passing-lane-use",
    quote:
      "The right hand lane is designated for travel and the " +
      "left hand lane is only to be used for passing. " +
      "Maintain your speed when moving into the right hand " +
      "lane and do not speed up.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.13 Passing - Passing lanes (page 50)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=60",
  },
  {
    key: "right-turn-procedure",
    quote:
      "When approaching an intersection or driveway that " +
      "requires a right-hand turn, move as close to the right " +
      "curb or right edge of the road as possible.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.15 Turning - Right turns (page 53)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=63",
  },
  {
    key: "right-turn-parked-car",
    quote:
      "When a vehicle is parked in the lane closest to the " +
      "right curb and near the intersection, the driver must " +
      "move into that lane at the first opportunity before " +
      "turning, keeping as close to the right curb or edge of " +
      "the road as possible. Drivers may not make turns from " +
      "the main driving lane.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.15 Turning - Right turns (page 54)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=64",
  },
  {
    key: "left-turn-lane",
    quote:
      "When you intend to turn left across the path of any " +
      "vehicle approaching from the opposite direction, you " +
      "must yield the right of way to the oncoming vehicle. " +
      "When making a left turn, you must approach the " +
      "intersection and complete the turn in the left-most " +
      "lane available for your direction of travel.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.15 Turning - Left turns (page 54)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=64",
  },
  {
    key: "left-turn-wheels-straight",
    quote:
      "If you have to stop in the intersection to wait for " +
      "oncoming traffic, be sure to keep your vehicle " +
      "parallel to the lane and your front wheels straight. " +
      "That way if you're hit from behind, you will not be " +
      "pushed in the path of oncoming traffic.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.15 Turning - Left turns (page 55)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=65",
  },
  {
    key: "left-turn-oneway-to-twoway",
    quote:
      "A left turn from a one-way street to a two-way street " +
      "should be made as close as possible to the left edge " +
      "of the roadway.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.15 Turning - Left turns (page 56)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=66",
  },
  {
    key: "centre-turn-lane",
    quote:
      "Enter the two-way left turning lane only at the point " +
      "adjacent to the property you want to access (see arrow " +
      "for car A). Left turns from either direction may be " +
      "made from the two-way left turning lane. When leaving " +
      "a driveway or parking lot, pick a gap in traffic, " +
      "complete the turn by driving through the centre " +
      "turning lane and into the first available driving lane " +
      "as quickly as possible (see arrow for car B). The " +
      "centre turning lanes may not be used as a passing lane " +
      "or as a driving lane. Where a centre turning lane is " +
      "provided, you may not make a left turn from any other " +
      "lane.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.16 Centre turning lanes (page 58)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=68",
  },
  {
    key: "uturn-sight-distance",
    quote:
      "There are no signs prohibiting U-turns. You have " +
      "adequate sight distance so you have time to finish the " +
      "turn before encountering oncoming traffic. For " +
      "example, in a 60 km/h area, you need a sight time of " +
      "at least 20 seconds each way. In a 100 km/h area, you " +
      "need 40 seconds sight distance clear of vehicles each " +
      "way. You have enough room to make the turn in one " +
      "swing.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.2 Turning - U-turns (page 131)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=141",
  },
  {
    key: "uturn-prohibited-lights",
    quote:
      "U-turns are prohibited at traffic lights unless " +
      "permitted by a sign.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.2 Turning - U-turns (page 131)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=141",
  },
  {
    key: "uturn-extreme-left",
    quote:
      "When making U-turns every effort should be made to " +
      "complete the turn in the most extreme left driving " +
      "lane.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.2 Turning - U-turns (page 132)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=142",
  },
  {
    key: "two-point-turn-sight",
    quote:
      "Before making a two-point turn, check that you have " +
      "adequate sight distance so that you have time to " +
      "finish the turn before any possible vehicle conflict " +
      "occurs. For example, in a 60 km/h area, you need a " +
      "sight time of at least 20 seconds each way. In a 100 " +
      "km/h area, you need 40 seconds sight distance clear of " +
      "vehicles, each way.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.2 Turning - Two-point turns (page 132)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=142",
  },
  {
    key: "changing-lanes-procedure",
    quote:
      "Determine the need to change lanes well in advance. " +
      "Make sure you know the conditions of your gate. 2. " +
      "Signal your intention to change lanes. 3. Check your " +
      "mirrors to see that the gate is open and that no one " +
      "else is moving into it. 4. Shoulder check to look for " +
      "vehicles or obstructions in your blind spot.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.12 Changing lanes (page 48)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=58",
  },
  {
    key: "multi-lane-change",
    quote:
      "When moving through more than a single lane, make the " +
      "change as one continual action. Only one signal is " +
      "required, and don't forget to shoulder check each lane " +
      "change.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.12 Changing lanes (page 48)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=58",
  },
  {
    key: "driving-left-of-centre",
    quote:
      "You may not drive to the left of the roadway centre on " +
      "two-way streets, roads or highways unless it's safe " +
      "and there's no traffic approaching.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.20 Highways - Driving to the left of centre (page 68)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=78",
  },
  {
    key: "divided-highway-lanes",
    quote:
      "Travel in the right hand driving lane and only use the " +
      "left lane for passing, turning left or emergency " +
      "manoeuvers.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.20 Highways - Divided highways (page 68)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=78",
  },
  {
    key: "controlled-access",
    quote:
      "In the case of controlled access highways or freeways, " +
      "you may not enter or leave except at the exit or " +
      "entrance provided.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.20 Highways - Controlled access highways (page 68)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=78",
  },
  {
    key: "medians",
    quote:
      "Where a median, boulevard or ditch divides a road, you " +
      "may not drive on the left side of it. You may not " +
      "cross any median, boulevard or ditch except at an " +
      "intersection or where a cross-over is provided.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.25 Medians (page 70)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=80",
  },
  {
    key: "crossing-urban-streets",
    quote:
      "You may drive across a street only at an intersection, " +
      "lane or alley.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.22 Crossing urban streets (page 69)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=79",
  },
  {
    key: "bus-lane-hours",
    quote:
      "When bus lane hours are in effect, no one is allowed " +
      "to operate a vehicle, other than a bus or an emergency " +
      "vehicle, in the designated curb lane, except for the " +
      "purpose of making a right turn onto, or off of, a " +
      "street block where a bus lane is in effect.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.14 Bus lanes and bicycle lanes (page 51)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=61",
  },
  {
    key: "bicycle-lane-rule",
    quote:
      "Bicycle-only lanes are dedicated for cyclists and are " +
      "similar to bus lanes. Vehicles aren't allowed in " +
      "bicycle-only lanes except for the purpose of making a " +
      "right turn, accessing a parking space or entering a " +
      "lane or driveway.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.14 Bus lanes and bicycle lanes (page 51)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=61",
  },
  {
    key: "rules-re-vehicles",
    quote:
      "You may not watch a television, video screen or " +
      "computer screen when driving unless the information " +
      "displayed is solely designed to assist you in the safe " +
      "operation of the vehicle.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.30 Rules related to vehicles (page 75)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=85",
  },
  {
    key: "load-secured",
    quote:
      "All material carried on a vehicle must be securely " +
      "contained or tied down so that it cannot fall off the " +
      "vehicle.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.30 Rules related to vehicles (page 75)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=85",
  },
  {
    key: "no-riding-trailer",
    quote:
      "Passengers may not ride in or on a trailer.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.30 Rules related to vehicles (page 75)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=85",
  },
  {
    key: "no-tinting",
    quote:
      "Aftermarket tinting is not allowed on the windshield " +
      "or front side windows.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.30 Rules related to vehicles (page 75)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=85",
  },
  {
    key: "clear-view",
    quote:
      "Drivers must have a clear view of the road to the " +
      "front, sides and rear.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.30 Rules related to vehicles (page 75)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=85",
  },
  {
    key: "crowding-driver",
    quote:
      "Passengers are not permitted to ride between the " +
      "driver and the driver's door. Passengers must not " +
      "crowd the driver.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.30 Rules related to vehicles (page 75)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=85",
  },
  {
    key: "act-passing-320m",
    quote:
      "shall pass or attempt to pass any other person or " +
      "vehicle proceeding in the same direction if the driver " +
      "does not have a clear view of the highway for a " +
      "distance of 320 metres in the direction of travel.",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 217(6) - Rules re passing and overtaking",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=170",
  },
  {
    key: "act-pass-on-left",
    quote:
      "on overtaking a person or vehicle using the highway, " +
      "shall pass to the left, unless:",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 217(1)(b) - Rules re passing and overtaking",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=169",
  },
  {
    key: "act-no-pass-off-pavement",
    quote:
      "No driver shall pass by driving off the pavement or " +
      "travelled portion of the highway.",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 217(2) - Rules re passing and overtaking",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=170",
  },
  {
    key: "act-left-turn-lane",
    quote:
      "approach the intersection in the extreme left-hand " +
      "lane that is lawfully available to traffic moving in " +
      "the direction the driver is travelling; and (b) after " +
      "entering the intersection, make the left turn so as to " +
      "leave the intersection, as nearly as possible, in the " +
      "extreme left-hand lane that is lawfully available to " +
      "traffic moving in the direction the driver is " +
      "travelling on the highway that the driver is entering.",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 218(2) - Rules re turning",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=170",
  },
  {
    key: "act-two-way-left-turn-lane",
    quote:
      "No driver of a vehicle shall drive in a lane " +
      "designated by signs as a two-way left turn lane except " +
      "to make a left turn from the two-way left turn lane at " +
      "an intersection or curb crossing.",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 228(2) - Rules re traffic lanes",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=174",
  },
  {
    key: "act-motorcycles-abreast",
    quote:
      "no driver of a motorcycle shall drive so that more " +
      "than two motorcycles move abreast in a traffic lane at " +
      "any time; (f) no driver of a motorcycle shall drive " +
      "beside any other vehicle in the same traffic lane, " +
      "unless that other vehicle is a motorcycle.",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 228(1) - Rules re traffic lanes",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=174",
  },
  {
    key: "act-backing",
    quote:
      "No person shall cause a vehicle to move backward on or " +
      "onto a highway unless the movement can be made safely.",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 222 - Rules re backing up",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=172",
  },
  {
    key: "uncontrolled-intersection",
    quote:
      "At an intersection where there are no stop signs, " +
      "yield signs, traffic lights or police directing " +
      "traffic, and two vehicles arrive at the intersection " +
      "at approximately the same time, the driver of the " +
      "vehicle on the left must yield the right of way to the " +
      "driver of the vehicle on the right. This rule also " +
      "applies to T-intersections.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.17 Right of way - Uncontrolled intersections (page 59)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=69",
  },
  {
    key: "left-turn-yield",
    quote:
      "When turning left, you must yield the right of way to " +
      "any vehicles coming toward you if they are close " +
      "enough that your turn would interfere with them.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.17 Right of way (page 60)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=70",
  },
  {
    key: "entering-provincial-highway",
    quote:
      "When entering a provincial highway from any other " +
      "road, you must yield the right of way to any vehicles " +
      "travelling on the provincial highway and to any " +
      "pedestrian closely approaching the intersection.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.17 Right of way (page 60)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=70",
  },
  {
    key: "entering-from-private-road",
    quote:
      "When entering a street, road or highway from a private " +
      "road, lane or alley, you must yield the right of way " +
      "to any pedestrians on the sidewalk and to any vehicles " +
      "on the street, road or highway.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.17 Right of way (page 61)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=71",
  },
  {
    key: "yield-sign-duty",
    quote:
      "At any intersection where a yield sign is present, " +
      "drivers facing the sign must yield the right of way to " +
      "any other motorist approaching the intersection.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.17 Right of way - Controlled intersections (page 61)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=71",
  },
  {
    key: "four-way-stops",
    quote:
      "At three and four-way stops, courtesy dictates that " +
      "the first vehicle that stops should be given the right " +
      "of way. The remaining three then yield the right of " +
      "way to the driver on their right.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.17 Right of way - Controlled intersections (page 61)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=71",
  },
  {
    key: "two-way-stops",
    quote:
      "At two-way stops, vehicles must remain stopped until " +
      "all cross traffic passes. When two vehicles arrive " +
      "around the same time to the opposite stop signs and " +
      "one of the vehicles is turning left, the driver " +
      "turning left must yield the right of way to the driver " +
      "going straight.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.17 Right of way - Controlled intersections (page 61)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=71",
  },
  {
    key: "stop-sign-yield-duty",
    quote:
      "In any case, if you're at a stop sign you must yield " +
      "to vehicles and pedestrians and may not proceed until " +
      "it's safe.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.17 Right of way - Controlled intersections (page 61)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=71",
  },
  {
    key: "avoid-collision-duty",
    quote:
      "All drivers have a moral and legal responsibility to " +
      "avoid collisions. If you have the right of way at an " +
      "intersection and a driver refuses to yield to you, " +
      "you're responsible from a safety standpoint to avoid a " +
      "collision, rather than insist upon your right of way.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.17 Right of way (page 62)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=72",
  },
  {
    key: "construction-vehicle-yield",
    quote:
      "At all times, you must yield the right of way to any " +
      "highway construction or maintenance vehicles that have " +
      "their warning lights flashing.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.17 Right of way - Construction or maintenance vehicles (page 62)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=72",
  },
  {
    key: "zipper-merge",
    quote:
      "A zipper merge means drivers use both lanes of traffic " +
      "until the lane ends, and then alternate in \"zipper\" " +
      "fashion into the open lane. Vehicles in the lane " +
      "that's ending must signal, shoulder check and merge " +
      "when safe, while each driver in the continuing lane " +
      "should let one vehicle in.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.17 Right of way - Zipper merge (page 62)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=72",
  },
  {
    key: "roundabout-yield",
    quote:
      "In a roundabout, the vehicle on the right must yield " +
      "to the vehicle on the left. In the diagram, traffic " +
      "indicated by red arrows in yellow lanes must yield to " +
      "traffic indicated by white arrows in green lanes. " +
      "Traffic entering the roundabout must yield to traffic " +
      "in the roundabout.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.19 Interchanges - Roundabouts (page 64)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=74",
  },
  {
    key: "roundabout-signal",
    quote:
      "When you're leaving the roundabout use your right-turn " +
      "signal to warn other drivers of your intention to " +
      "exit.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.19 Interchanges - Roundabouts (page 64)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=74",
  },
  {
    key: "roundabout-lane-choice",
    quote:
      "It's recommended that for safety, entry into the right " +
      "lane be used mainly when intending to exit at the " +
      "first available exit point. If you are intending to " +
      "proceed beyond the second exit, you should drive in " +
      "the left lane.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.19 Interchanges - Roundabouts (page 64)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=74",
  },
  {
    key: "rcut",
    quote:
      "At an RCUT intersection, drivers always make a right " +
      "turn, followed by a U-turn. Motorists approaching a " +
      "divided highway with an RCUT intersection are not " +
      "allowed to make a left turn or drive straight through " +
      "to cross the divided highway.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.19 Interchanges - Restricted crossing U-turn (page 67)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=77",
  },
  {
    key: "parking-lot-uncontrolled",
    quote:
      "When parking lanes and/or passageways intersect in a " +
      "parking lot and don't have yield or stop signs, treat " +
      "the area as an uncontrolled intersection - you must " +
      "yield to the vehicle on the right.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.26 Parking lots (page 71)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=81",
  },
  {
    key: "parking-lot-thoroughfare",
    quote:
      "Thoroughfares lead into, through or out of a parking " +
      "lot and aren't used for vehicle parking. Parking lanes " +
      "and passageways within a parking lot must yield to " +
      "thoroughfares.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.26 Parking lots (page 71)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=81",
  },
  {
    key: "funeral-procession",
    quote:
      "Funeral processions have special privileges and should " +
      "not be interfered with or interrupted. They must, " +
      "however, obey all traffic signs and signals - unless " +
      "all drivers with the right of way stop to permit the " +
      "procession to proceed.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.4 Sharing the road with funeral processions (page 41)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=51",
  },
  {
    key: "act-yield-right",
    quote:
      "If two vehicles arrive at an intersection at " +
      "approximately the same time, the driver of the vehicle " +
      "on the left shall yield the right of way to the driver " +
      "of the vehicle on the right.",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 219(1) - Rules re yielding right of way",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=171",
  },
  {
    key: "act-yield-not-controlled",
    quote:
      "Subsection (1) does not apply to the operation of " +
      "vehicles at an intersection where a peace officer is " +
      "on duty, traffic lights are in operation or a stop " +
      "sign is erected.",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 219(2) - Rules re yielding right of way",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=171",
  },
  {
    key: "act-left-turn-yield",
    quote:
      "If the driver of a vehicle intends to turn left across " +
      "the path of any vehicle approaching from the opposite " +
      "direction, the driver shall: (a) yield the right of " +
      "way; and (b) not make the turn until the driver has " +
      "afforded a reasonable opportunity to the driver of the " +
      "approaching vehicle to avoid a collision.",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 219(3) - Rules re yielding right of way",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=171",
  },
  {
    key: "act-parking-lot-yield",
    quote:
      "A vehicle leaving a feeder lane must yield the right " +
      "of way to vehicles on a thoroughfare. (4) A vehicle " +
      "leaving a parking stall must yield the right of way to " +
      "vehicles on a feeder lane.",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 211.1 - Rules re yielding right of way in parking lots",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=167",
  },
  {
    key: "stopping-far-right",
    quote:
      "You must move as far to the right as possible when " +
      "stopping on a road.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.3 Stopping and parking (page 32)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=42",
  },
  {
    key: "stopping-30m",
    quote:
      "When stopping on a rural road or highway you must be " +
      "30 m (98 ft.) away from any vehicle stopped on the " +
      "opposite side of the road or highway.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.3 Stopping and parking (page 32)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=42",
  },
  {
    key: "stopping-flares",
    quote:
      "Vehicles stopped on rural roads or highways at night " +
      "must be marked with flares, hazard lights or " +
      "reflectors. You must not tamper with the devices used " +
      "to mark stopped vehicles.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.3 Stopping and parking (page 32)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=42",
  },
  {
    key: "stopping-complete-stop",
    quote:
      "Always come to a complete stop at all stop signs and " +
      "at railway crossings where signals or gates are " +
      "activated. After stopping, only proceed from a stop " +
      "sign, or a railway crossing without gates, when it's " +
      "safe to do so. You must also stop when signaled to by " +
      "a police officer or a flagperson.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.3 Stopping and parking (page 32)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=42",
  },
  {
    key: "stopping-behind-crosswalk",
    quote:
      "If you must stop in your lane (possibly due to heavy " +
      "traffic) always stop behind the crosswalk, before " +
      "entering an intersection or before a railway crossing " +
      "so you don't obstruct pedestrians or other traffic.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.3 Stopping and parking (page 32)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=42",
  },
  {
    key: "stopping-positions",
    quote:
      "At the nearest crosswalk, whether marked or not. At a " +
      "clearly marked stop line. Where there is no stop line, " +
      "sidewalk or crosswalk: Within three metres of the " +
      "intersection in a town, city, village or hamlet. " +
      "Within 10 metres of the intersection in a rural area. " +
      "Behind the clearly marked X.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.18 Stopping positions (page 63)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=73",
  },
  {
    key: "parking-hill",
    quote:
      "The trick to parking on a hill is to turn your front " +
      "wheels so that if the vehicle rolls away, it will roll " +
      "into the curb and stop. If there is no curb, the " +
      "vehicle should roll off the road, not into the path of " +
      "other vehicles. This will prevent the vehicle from " +
      "building momentum and will stop it from entering the " +
      "street. The emergency brake should be applied whenever " +
      "parking on a slope.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.1 Parking - Parking on a hill (page 130)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=140",
  },
  {
    key: "parallel-park-space",
    quote:
      "stop your vehicle beside the space and check that you " +
      "have at least 2 m more than the length of your " +
      "vehicle.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.1 Parking - Parallel parking (page 127)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=137",
  },
  {
    key: "angle-parking-back-in",
    quote:
      "Where a parking space is at 90 degrees (a right angle) " +
      "to the road, as it is in most parking lots, it's " +
      "recommended that you back into the space, unless " +
      "prohibited.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.1 Parking - Angle parking (page 129)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=139",
  },
  {
    key: "back-up-camera",
    quote:
      "Before reversing, look over your shoulder and use your " +
      "mirrors to check behind you. Shift into reverse to " +
      "activate the back-up camera. As you back up, check the " +
      "monitor for objects while being aware of your " +
      "surroundings. Observe your mirrors and check or look " +
      "through the rear window. Don't rely primarily on the " +
      "monitor when backing.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.1 Parking - Back-up cameras (page 128)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=138",
  },
  {
    key: "act-stop-position",
    quote:
      "on the near side of the intersection at the marked " +
      "stop line; (b) on the near side of the intersection " +
      "immediately before entering the pedestrian crosswalk; " +
      "or (c) if there is no stop line or pedestrian " +
      "crossing: (i) in a city, town, village, resort village " +
      "or hamlet, or in the prescribed part of a municipal " +
      "district, no further than three metres back from the " +
      "intersection; or (ii) outside the boundaries of a " +
      "city, town, village, resort village or hamlet, or in " +
      "the prescribed part of a municipal district, no " +
      "further than 10 metres back from the intersection.",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 209(6.1) - Rules re stopping",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=165",
  },
  {
    key: "act-stop-30m",
    quote:
      "at the right-hand edge of the highway as far as " +
      "possible from its centre; and (b) more than 30 metres " +
      "from any vehicle stopped on the opposite side of the " +
      "highway.",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 209(2) - Rules re stopping",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=164",
  },
  {
    key: "act-bus-rail-stop",
    quote:
      "No driver of the following vehicles shall fail to " +
      "bring the vehicle to a stop before proceeding over a " +
      "level railway crossing: (a) a bus transporting " +
      "passengers;",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 209(7) - Rules re stopping",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=165",
  },
  {
    key: "act-no-parking-shoulder",
    quote:
      "If the minister has established a no-parking zone, no " +
      "person shall park within that no-parking zone, " +
      "including on that portion of the roadway situated to " +
      "the right of the solid white line and commonly " +
      "referred to as \"the shoulder\".",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 210(2) - Rules re parking zones",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=166",
  },
  {
    key: "school-bus-amber-red",
    quote:
      "When approaching a school bus, if you see amber " +
      "flashing lights, slow down and proceed with caution. " +
      "If the red flashing lights are activated, you must " +
      "come to a complete stop. If you're approaching the bus " +
      "from the opposite direction on an undivided highway, " +
      "you must also stop.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.4 Sharing the road with school buses (page 37)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=47",
  },
  {
    key: "school-bus-5m",
    quote:
      "You must stop no closer than 5 m (15 ft.) from the " +
      "front or back of the bus. You must not advance your " +
      "vehicle until the bus driver turns off the flashing " +
      "red stop lamps and deactivates the stop arm. Before " +
      "moving, check to see that all children have safely " +
      "crossed the roadway.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.4 Sharing the road with school buses (page 37)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=47",
  },
  {
    key: "school-bus-fine",
    quote:
      "Passing a school bus with red flashing lights is a " +
      "serious offence and will result in a minimum fine of " +
      "$360.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.4 Sharing the road with school buses (page 37)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=47",
  },
  {
    key: "school-bus-divided",
    quote:
      "You don't have to stop for a school bus if you're " +
      "travelling in the opposite direction on a divided " +
      "highway. Some cities, towns and villages may have a " +
      "bylaw prohibiting the use of flashing red stop lamps " +
      "and stop arms on school buses. In those communities " +
      "you're allowed to pass the bus.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.4 Sharing the road with school buses (page 37)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=47",
  },
  {
    key: "school-bus-hazard-lamps",
    quote:
      "Drivers aren't required to stop for buses displaying " +
      "four-way hazard lamps; however, use caution, go slowly " +
      "and always watch for children crossing.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.4 Sharing the road with school buses (page 37)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=47",
  },
  {
    key: "emergency-vehicle-approach",
    quote:
      "When approached by an emergency vehicle with its " +
      "lights flashing or sirens engaged, you must " +
      "immediately drive as closely as possible to the right " +
      "edge of the roadway and not enter the next " +
      "intersection until the emergency vehicle has passed. " +
      "The only exception is if a peace officer gives you " +
      "other directions. On one-way streets, pull right or " +
      "left to the nearest curb.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.4 Sharing the road with emergency vehicles (page 35)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=45",
  },
  {
    key: "emergency-vehicle-intersection",
    quote:
      "At an intersection, you must stop and let the " +
      "emergency vehicle through the intersection, unless " +
      "given other directions by a peace officer.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.4 Sharing the road with emergency vehicles (page 35)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=45",
  },
  {
    key: "emergency-vehicle-stopped",
    quote:
      "When an emergency vehicle is stopped on the highway " +
      "with its emergency lights in operation, you must slow " +
      "down to 60 km/h when passing it. This doesn't apply to " +
      "vehicles travelling in the opposite direction on a " +
      "divided highway. However, this does apply when " +
      "travelling in the opposite direction on an undivided " +
      "highway.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.4 Sharing the road with emergency vehicles (page 36)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=46",
  },
  {
    key: "emergency-never-follow",
    quote:
      "Never attempt to follow an emergency vehicle going to, " +
      "or coming from, an emergency.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.4 Sharing the road with emergency vehicles (page 36)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=46",
  },
  {
    key: "tow-truck-sharing",
    quote:
      "When a vehicle used exclusively for towing or " +
      "rendering assistance is stopped on a roadside with its " +
      "amber or amber and blue lights flashing to help a " +
      "disabled vehicle, drivers must slow to 60 km/h when " +
      "passing. This does not apply to vehicles travelling in " +
      "the opposite direction on a divided highway. However, " +
      "this does apply when travelling in the opposite " +
      "direction on an undivided highway.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.4 Sharing the road with tow trucks and vehicles rendering assistance on the roadside (page 41)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=51",
  },
  {
    key: "truck-no-zone",
    quote:
      "All drivers should avoid a large truck's \"no-zone.\" " +
      "The no-zone refers to the blindspot areas around big " +
      "trucks, where crashes are most likely to occur.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.4 Sharing the road with large trucks (page 33)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=43",
  },
  {
    key: "truck-mirrors",
    quote:
      "A good rule of thumb is that if you can't see the " +
      "large truck's mirrors, the truck driver can't see you.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.4 Sharing the road with large trucks (page 34)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=44",
  },
  {
    key: "truck-see-cab",
    quote:
      "when drivers in a car are passing a large truck, they " +
      "should make sure they can see the entire truck cab in " +
      "their rear-view mirror before pulling in front.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.4 Sharing the road with large trucks (page 34)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=44",
  },
  {
    key: "truck-right-turn",
    quote:
      "The driver of a large truck or bus has difficulty " +
      "turning sharp corners, particularly to the right. If " +
      "the driver follows the proper procedure, vehicles " +
      "facing them on the street they are entering should be " +
      "prepared for the large truck or bus to enter their " +
      "half of the roadway. If the large truck operator is " +
      "not following the proper procedure, vehicles on their " +
      "right in the street they are leaving should stay well " +
      "back to avoid being crushed between the large truck " +
      "and the curb. When you see a large truck or bus making " +
      "a sharp right turn, give it the room it needs.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.4 Sharing the road with large trucks (page 33)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=43",
  },
  {
    key: "motorcycle-following",
    quote:
      "The same three-second following distance should be " +
      "given to motorcycles as is given to other vehicles.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.4 Sharing the road with motorcycles (page 38)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=48",
  },
  {
    key: "motorcycle-lane",
    quote:
      "Never move into the same lane beside a motorcycle, " +
      "even if the lane is wide and the motorcyclist is " +
      "riding to one side. It is not only illegal, it's " +
      "extremely hazardous.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.4 Sharing the road with motorcycles (page 38)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=48",
  },
  {
    key: "motorcycle-two-abreast",
    quote:
      "Motorcyclists are allowed to ride two abreast but most " +
      "riders prefer to have a full lane width.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.4 Sharing the road with motorcycles (page 38)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=48",
  },
  {
    key: "mgdl-placards",
    quote:
      "New motorcyclists are required to display a Motorcycle " +
      "Graduated Driver Licensing (MGDL) placard on their " +
      "licence plate identifying them as new riders. Learners " +
      "are required to display a red 'L' placard and Novice " +
      "riders must display green 'N' placards.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.4 Sharing the road with motorcycles (page 39)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=49",
  },
  {
    key: "motorcycle-helmet",
    quote:
      "Drivers and passengers must wear an approved " +
      "motorcycle helmet. If the motorcycle does not have a " +
      "windshield that deflects the air stream away from the " +
      "driver's face, drivers and passengers must wear safety " +
      "glasses, a face shield or goggles.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.24 Motorcycles (page 70)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=80",
  },
  {
    key: "cyclist-left-turn-wait",
    quote:
      "When turning left, you must stop and wait for oncoming " +
      "bicycles to pass before turning.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.4 Sharing the road with bicycles (page 39)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=49",
  },
  {
    key: "cyclist-obey-rules",
    quote:
      "Bicycles are vehicles too and entitled to their share " +
      "of the road. More people are using them for " +
      "transportation, recreation, physical fitness, and to " +
      "reduce emissions. Cyclists must obey the same rules of " +
      "the road as other vehicles.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.4 Sharing the road with bicycles (page 39)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=49",
  },
  {
    key: "cyclist-speed",
    quote:
      "It's easy to misjudge the speed of bicycles - they can " +
      "travel faster than you think! Experienced cyclists can " +
      "travel at 25-25 km/h on a flat surface and up to 50 " +
      "km/h going downhill.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.4 Sharing the road with bicycles (page 40)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=50",
  },
  {
    key: "cyclist-door",
    quote:
      "When parked at the curb, always check for cyclists " +
      "when you open your vehicle door.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.4 Sharing the road with bicycles (page 39)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=49",
  },
  {
    key: "cyclist-right-turn",
    quote:
      "When making a right turn, do not pull up beside a " +
      "cyclist and then turn directly in front of them and " +
      "cut them off.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.4 Sharing the road with bicycles (page 39)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=49",
  },
  {
    key: "bike-lane-turn",
    quote:
      "Bike lanes are reserved for cyclists. Sometimes motor " +
      "vehicles will need to enter or cross a bike lane to " +
      "turn right at a corner or driveway. Take extra care " +
      "when you do this. Enter the bike lane only after " +
      "ensuring that you can do so safely, and then make the " +
      "turn.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.4 Sharing the road with bicycles (page 39)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=49",
  },
  {
    key: "escooter-rules",
    quote:
      "E-scooters don't need to be registered and don't " +
      "require a driver's licence, but users must be at least " +
      "16 years old, wear an approved helmet, follow all " +
      "municipal laws and provincial regulations and " +
      "legislation.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.4 Sharing the road with e-scooters (page 41)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=51",
  },
  {
    key: "farm-equipment-speed",
    quote:
      "These vehicles create a hazard, as they travel very " +
      "slowly - 10 to 40 km/h. Therefore, you may come upon " +
      "them very quickly and you'll need to stop or change " +
      "lanes rapidly.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.4 Sharing the road with farm equipment and overwidth vehicles (page 36)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=46",
  },
  {
    key: "pedestrian-yield",
    quote:
      "When approaching an intersection, you must yield the " +
      "right of way to any pedestrians who are crossing the " +
      "street.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.21 Pedestrians (page 68)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=78",
  },
  {
    key: "pedestrian-crosswalk-stop",
    quote:
      "You must stop your vehicle before the crosswalk, which " +
      "will either be painted on the road or be an imaginary " +
      "extension of the sidewalk. If a traffic light changes " +
      "while a pedestrian is in the crosswalk, the pedestrian " +
      "has the right of way.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.21 Pedestrians (page 68)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=78",
  },
  {
    key: "school-crossing-guard",
    quote:
      "You must stop your vehicle when directed to do so by a " +
      "school crossing guard controlling a crosswalk.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.21 Pedestrians (page 68)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=78",
  },
  {
    key: "pedestrian-walk-left",
    quote:
      "Pedestrians walking along a road should walk on the " +
      "left shoulder, facing oncoming traffic.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.21 Pedestrians (page 68)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=78",
  },
  {
    key: "jaywalkers",
    quote:
      "You must always be prepared to stop if you see a " +
      "pedestrian who is about to step out in front of you. " +
      "But don't encourage jaywalking by stopping and " +
      "inviting pedestrians to cross.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.21 Pedestrians - Jaywalkers (page 69)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=79",
  },
  {
    key: "wheelchair-yield",
    quote:
      "When approaching an intersection, you must yield the " +
      "right of way to any person crossing the street who is " +
      "using a wheelchair, motorized wheelchair or medical " +
      "scooter. This does not apply to wide streets if the " +
      "person in the wheelchair is at a safe distance from " +
      "your side of the street.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.23 Wheelchairs and medical scooters (page 69)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=79",
  },
  {
    key: "act-school-bus-5m-rear",
    quote:
      "fail to stop at least five metres from the rear of the " +
      "school bus; or (b) proceed until the operation of the " +
      "safety lights and stop arm has been discontinued.",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 212(3) - Rules re safety lights and school buses",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=167",
  },
  {
    key: "act-school-bus-front",
    quote:
      "no driver of a vehicle that is approaching the school " +
      "bus from the opposite direction on a highway, other " +
      "than a divided highway, shall: (a) fail to stop at " +
      "least five metres from the front of the school bus",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 212(4) - Rules re safety lights and school buses",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=168",
  },
  {
    key: "act-school-bus-fine",
    quote:
      "Any person who contravenes subsection (2), (3) or (4) " +
      "is guilty of an offence and liable on summary " +
      "conviction to a fine of not more than $1,000.",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 212(5) - Rules re safety lights and school buses",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=168",
  },
  {
    key: "act-emergency-pull-right",
    quote:
      "when approached by an emergency vehicle sounding an " +
      "emergency device or operating an emergency light, " +
      "shall: (a) immediately drive as close as possible to " +
      "the right-hand edge of the highway; and (b) not enter " +
      "the next intersection until the emergency vehicle has " +
      "passed.",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 238(9) - Emergency vehicles",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=180",
  },
  {
    key: "act-pedestrian-stop",
    quote:
      "shall stop the vehicle and yield the right of way to " +
      "the pedestrian if: (a) the driver of the vehicle " +
      "approaches an intersection or clearly marked " +
      "pedestrian crosswalk where a peace officer is not on " +
      "duty and traffic lights are not in operation; and (b) " +
      "the pedestrian is crossing the highway.",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 223(1) - Rules re pedestrians",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=172",
  },
  {
    key: "act-no-pass-stopped-for-ped",
    quote:
      "If a vehicle is stopped in compliance with subsection " +
      "(1), no person driving a vehicle proceeding in the " +
      "same direction on the highway shall overtake or pass " +
      "that vehicle.",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 223(2) - Rules re pedestrians",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=172",
  },
  {
    key: "following-three-seconds",
    quote:
      "If you're closer than three seconds, drop back and " +
      "check again until you have achieved a minimum of " +
      "three-seconds following distance. Any following " +
      "distance longer than that is safe. However, a longer " +
      "following distance is recommended when following a " +
      "motorcycle or large truck.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "5.3 Using time to estimate your following distance (page 99)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=109",
  },
  {
    key: "following-ideal-only",
    quote:
      "The three-second following distance is recommended " +
      "when driving conditions are ideal. If driving " +
      "conditions are less than ideal, your following " +
      "distance should increase accordingly.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "5.3 Using time to estimate your following distance (page 101)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=111",
  },
  {
    key: "following-blocked-view",
    quote:
      "If you are following a large truck or van that blocks " +
      "your view of traffic ahead, drop back to more than " +
      "three seconds until you can see around the vehicle.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "5.3 Using time to estimate your following distance (page 101)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=111",
  },
  {
    key: "tailgated-five-six",
    quote:
      "If the vehicle behind you is tailgating, then your " +
      "rear gate is closed. You need to leave extra following " +
      "distance ahead to allow room if you have to stop. " +
      "Increase your following distance to five or six " +
      "seconds",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.5 The concept of gates (page 43)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=53",
  },
  {
    key: "gates-two-open",
    quote:
      "If a gate is open you can drive into it whenever you " +
      "want to. A safe driver always tries to have at least " +
      "two open gates to provide options for emergency " +
      "movement.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.5 The concept of gates (page 42)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=52",
  },
  {
    key: "blind-spot-definition",
    quote:
      "A \"blind spot\" is an area alongside your vehicle that " +
      "you can't see when using any of your mirrors. It's " +
      "important to check these blind spots to ensure your " +
      "side gates are open, particularly if you're going to " +
      "change lanes.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.6 Blind spots (page 43)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=53",
  },
  {
    key: "shoulder-check",
    quote:
      "A quick glance over your shoulder, or \"shoulder " +
      "check,\" can allow you to see the entire side gate area " +
      "of your vehicle, which could be a blind spot.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.6 Blind spots (page 43)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=53",
  },
  {
    key: "twelve-seconds",
    quote:
      "While driving at night, you should be able to see " +
      "about 12 seconds travelling distance in front of you. " +
      "This means that most of the time, you should be using " +
      "your high beam headlights and be looking beyond the " +
      "part of the road illuminated by your lights.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.28 Night driving and low visibility (page 73)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=83",
  },
  {
    key: "overdriving-headlights",
    quote:
      "Driving without a full 12 seconds of view ahead means " +
      "you are over-driving your headlights. This means by " +
      "the time your headlights illuminate an object on the " +
      "road you'll be unable to stop before hitting it.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.29 Choosing the right speed (page 74)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=84",
  },
  {
    key: "headlights-law",
    quote:
      "The law requires the use of headlights from half an " +
      "hour after sunset until half an hour before sunrise, " +
      "and at any time when visibility is poor.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.27 Headlights (page 72)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=82",
  },
  {
    key: "high-beam-200m",
    quote:
      "When using high beams, you must dim your headlights at " +
      "least 200 m (650 ft.) in advance of oncoming vehicles " +
      "and keep them dimmed until the vehicle has passed.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.27 Headlights (page 72)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=82",
  },
  {
    key: "low-beam-100m",
    quote:
      "You must keep your headlights on low beam within 100 m " +
      "(330 ft.) and keep any spotlamps or auxiliary driving " +
      "lights turned off within 500 m (1,640 ft.) when you're " +
      "following another vehicle, or when you're being " +
      "passed.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.27 Headlights (page 73)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=83",
  },
  {
    key: "divided-22m",
    quote:
      "You don't need to dim your headlights for oncoming " +
      "traffic if you're driving on a divided highway where " +
      "the distance between the roadways is 22 m (70 ft.) or " +
      "more",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.27 Headlights (page 73)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=83",
  },
  {
    key: "spotlamp-500m",
    quote:
      "Also, turn off any spotlamps at least 500 m (1,640 " +
      "ft.) in advance of an oncoming vehicle and keep them " +
      "turned off until the vehicle has passed.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.27 Headlights (page 73)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=83",
  },
  {
    key: "glare-recovery",
    quote:
      "If you've been driving in the dark for a while, you " +
      "will need up to five seconds to recover from the glare " +
      "of oncoming lights. This glare recovery time tends to " +
      "increase with age to the point where it sometimes " +
      "takes up to 25 seconds to recover.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.27 Headlights (page 73)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=83",
  },
  {
    key: "seatbelt-law",
    quote:
      "In Saskatchewan, every vehicle occupant must wear a " +
      "seatbelt where they are provided in a properly " +
      "adjusted and securely fastened manner.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "5.5 Design components for safety - Seatbelts (page 113)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=123",
  },
  {
    key: "seatbelt-under-16",
    quote:
      "Drivers are legally responsible to ensure that " +
      "passengers under 16 years of age use seatbelts where " +
      "available and child safety seats, when appropriate. If " +
      "not, the driver may be charged. Passengers aged 16 " +
      "years and older are responsible for buckling " +
      "themselves up.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "5.5 Design components for safety - Seatbelts (page 113)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=123",
  },
  {
    key: "seatbelt-position",
    quote:
      "Shoulder belts should never be worn behind your back " +
      "or under your arm.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "5.5 Design components for safety - Seatbelts (page 113)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=123",
  },
  {
    key: "car-seats-under-seven",
    quote:
      "In Saskatchewan, children under seven years old must " +
      "be properly fitted into correctly installed and " +
      "approved car seats or booster seats for their size, " +
      "weight, height and age. This is to make sure their " +
      "smaller bodies are kept safe and not seriously injured " +
      "in a collision. These seats belong in the back seat " +
      "away from air bags. Children will not be protected by " +
      "a regular seatbelt alone until they are large enough " +
      "and old enough, which is usually age seven and when " +
      "they weigh more than 36 kg (80 lb.).",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "5.5 Design components for safety - Car seats and booster seats (page 114)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=124",
  },
  {
    key: "car-seats-anyone",
    quote:
      "Car seats or booster seats must be used no matter who " +
      "is transporting the child, including grandparents, " +
      "caregivers and if they're in a taxi or rideshare " +
      "vehicle.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "5.5 Design components for safety - Car seats and booster seats (page 114)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=124",
  },
  {
    key: "airbags-16kmh",
    quote:
      "The tough fabric bags inflate in crashes over 16 km/h, " +
      "cushioning an occupant's neck, head and chest in " +
      "moderate to severe impact.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "5.5 Design components for safety - Airbags (page 115)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=125",
  },
  {
    key: "airbags-children",
    quote:
      "Children should never be put in the front seat of cars " +
      "equipped with passenger-side airbags. The force of an " +
      "airbag deploying is enough to critically injure or " +
      "kill an infant or small child.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "5.5 Design components for safety - Airbags (page 115)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=125",
  },
  {
    key: "airbags-not-replacement",
    quote:
      "Airbags are not a replacement for seatbelts. Seatbelts " +
      "alone provide all the protection a person needs in low " +
      "and moderate-speed impacts. Airbags are most effective " +
      "in high-speed crashes, where they often prevent " +
      "serious injury.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "5.5 Design components for safety - Airbags (page 115)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=125",
  },
  {
    key: "head-restraint",
    quote:
      "Adjust the pad of the restraint to support the back of " +
      "your head. The top of your head restraint should never " +
      "be lower than the top of your head.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "5.5 Design components for safety - Head restraints (page 112)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=122",
  },
  {
    key: "hand-positions",
    quote:
      "There are two correct hand positions on a steering " +
      "wheel: \"9 and 3\" and \"8 and 4.\"",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "5.6 Steering - Hand positions (page 118)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=128",
  },
  {
    key: "brake-right-foot",
    quote:
      "The fact that you need a left foot brace for " +
      "controlled driving means you cannot use your left foot " +
      "to brake. Always brake with your right foot.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "5.5 Seating position - Left foot brace (page 118)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=128",
  },
  {
    key: "distracted-driving-stats",
    quote:
      "Over the past 5 years in Saskatchewan (2020 - 2024), " +
      "on average there were 2,977 collisions every year due " +
      "to distracted driving resulting in 717 injuries and 13 " +
      "deaths.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.2 Distracted driving (page 31)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=41",
  },
  {
    key: "cellphone-prohibited",
    quote:
      "Holding, viewing or manipulating a hand-held cellphone " +
      "or mobile device is prohibited in Saskatchewan. " +
      "Experienced drivers, who are no longer in the GDL, can " +
      "use hands-free cellphones if they're activated with " +
      "voice commands or one-touch, and are dashboard, visor " +
      "or cradle mounted.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.2 Distracted driving - Cellphones (page 31)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=41",
  },
  {
    key: "cellphone-gdl-ban",
    quote:
      "Hands-free cellphone or mobile devices are prohibited " +
      "for drivers in the GDL program.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.2 Distracted driving - Cellphones (page 31)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=41",
  },
  {
    key: "cellphone-911",
    quote:
      "making 9-1-1 calls on cellphones while driving for " +
      "both new and experienced drivers making a call on a " +
      "cellphone when parked on the side of the road, for " +
      "both new and experienced drivers",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.2 Distracted driving - Cellphones (page 32)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=42",
  },
  {
    key: "cellphone-impound",
    quote:
      "If you have a previous conviction (within a 12-month " +
      "period) for using electronic communication devices " +
      "while driving, or driving without reasonable care or " +
      "consideration, and receive another ticket for either " +
      "of these offences, it will result in the vehicle " +
      "you're driving to be impounded for seven days, " +
      "regardless of who the vehicle owner is.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3.2 Distracted driving - Cellphones (page 32)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=42",
  },
  {
    key: "six-conditions",
    quote:
      "Driver condition refers to your physical, mental and " +
      "emotional fitness to drive. It's the most important of " +
      "the six conditions, because a driver in top physical, " +
      "mental and emotional shape can adjust to all the other " +
      "conditions and to the errors of other drivers as well.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3. The six basic driving conditions (page 28)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=38",
  },
  {
    key: "night-fatal-rate",
    quote:
      "The hazard of too little light is found in the fact " +
      "that the nighttime fatal collision rate is more than " +
      "double the daytime rate.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "3. The six basic driving conditions - Light condition (page 28)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=38",
  },
  {
    key: "ipde-steer-where-you-look",
    quote:
      "It's important to understand that your eyes determine " +
      "the path your vehicle follows - you steer where you " +
      "look.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "5.4 Eye use - Steer where you look (page 103)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=113",
  },
  {
    key: "fog-low-beam",
    quote:
      "In fog, blowing snow or heavy rain you will see better " +
      "if you drive with your lights on low beam.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.13 Fog, dust, heavy rain and poor visibility (page 165)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=175",
  },
  {
    key: "rain-first-ten-minutes",
    quote:
      "Be aware that during the first 10 minutes of a rain " +
      "storm, the roads are the most slippery.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.13 Fog, dust, heavy rain and poor visibility (page 165)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=175",
  },
  {
    key: "fatigue-remedy",
    quote:
      "recognize and admit that you're becoming tired. Some " +
      "highways have rumble strips along the shoulder line " +
      "and, in a few places, on the centre lines to alert " +
      "drivers when they drift out of their lane stop and " +
      "rest change drivers when you start to feel tired",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.13 Impairing factors - Fatigue (page 164)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=174",
  },
  {
    key: "road-rage-advice",
    quote:
      "don't take traffic problems personally avoid eye " +
      "contact with an aggressive driver don't make obscene " +
      "gestures don't tailgate use your horn sparingly don't " +
      "block the passing lane don't block the right turn lane",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.13 Impairing factors - Aggressive driving (page 164)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=174",
  },
  {
    key: "smoking-children",
    quote:
      "Vehicles with children in them are non-smoking areas; " +
      "it's illegal to smoke while children are in the " +
      "vehicle.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.13 Impairing factors - Cigarette smoke (page 166)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=176",
  },
  {
    key: "collision-factors",
    quote:
      "driver inattention failing to yield the right of way " +
      "driving too fast for road conditions driving under the " +
      "influence of alcohol or drugs disregarding a traffic " +
      "control device driver inexperience or confusion " +
      "following too closely backing unsafely changing lanes " +
      "or passing improperly",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.11 Understanding collisions (page 158)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=168",
  },
  {
    key: "collision-stats",
    quote:
      "Alcohol is a factor in about 4% of all traffic " +
      "collisions and in about 40% of all fatal collisions. " +
      "Approximately 90% of all collisions in rural " +
      "Saskatchewan are singlevehicle collisions. Wearing a " +
      "seatbelt can decrease your chances of being killed or " +
      "seriously injured in a collision by as much as 50%.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.11 Understanding collisions (page 158)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=168",
  },
  {
    key: "rural-single-vehicle",
    quote:
      "Approximately 90% of all collisions in rural " +
      "Saskatchewan are single-vehicle collisions.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.11 Understanding collisions (page 158)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=168",
  },
  {
    key: "winter-main-cause",
    quote:
      "The main cause of collisions in winter months is " +
      "failing to adjust to changing conditions.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.8 Winter driving (page 142)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=152",
  },
  {
    key: "winter-months",
    quote:
      "In Saskatchewan, it's possible that you could be " +
      "operating your vehicle for at least five months of the " +
      "year in winter driving conditions. It's in this " +
      "period, from November to March, that most collisions " +
      "occur.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.8 Winter driving (page 142)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=152",
  },
  {
    key: "black-ice-cruise",
    quote:
      "You should not use cruise control on icy or slippery " +
      "roads. This is even more important when the road may " +
      "have black ice formed on it (a thin layer of " +
      "transparent ice found on the road or other paved " +
      "surfaces",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.8 Driving on slippery surfaces (page 143)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=153",
  },
  {
    key: "ice-temperature",
    quote:
      "Icy roads will look just the same at -2 C or -22 C, " +
      "but will be far more slippery at the warmer " +
      "temperature.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.8 Driving on slippery surfaces (page 143)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=153",
  },
  {
    key: "winter-following",
    quote:
      "Because there is reduced traction available for " +
      "stopping and turning, reduce your speed when " +
      "conditions are wet or slippery. As well, give yourself " +
      "a following distance even longer than three seconds.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.8 Driving on slippery surfaces (page 144)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=154",
  },
  {
    key: "first-snowfalls",
    quote:
      "During the first few snowfalls, drive very slowly and " +
      "keep a five-second following distance.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.8 The first snowfalls (page 146)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=156",
  },
  {
    key: "stranded-stay",
    quote:
      "Many people die when they leave their vehicles to walk " +
      "for help in a blizzard. If you stay with your vehicle, " +
      "you have a better chance of surviving and are more " +
      "likely to be found.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.8 Survival (page 146)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=156",
  },
  {
    key: "stranded-steps",
    quote:
      "If you are stranded: 1. Always stay with your vehicle. " +
      "2. Keep calm. 3. Lower your downwind-side windows " +
      "slightly and open the heater air vent to get fresh air " +
      "into the vehicle. 4. Run the engine to get some heat, " +
      "and to listen to news reports or charge your cellphone " +
      "but don't run out of gas or drain your battery. 5. " +
      "Keep your exhaust pipe clear of ice and snow.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.8 Survival (page 146)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=156",
  },
  {
    key: "abs-use",
    quote:
      "How do you use ABS? Press the brake firmly and do not " +
      "release until the vehicle has stopped. Do not pump " +
      "your brakes; the ABS is doing it for you.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.9 Braking (page 147)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=157",
  },
  {
    key: "abs-gravel",
    quote:
      "You should allow for a longer stopping distance with " +
      "ABS than with conventional brakes when driving on " +
      "gravel, slush and snow.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.9 Braking (page 147)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=157",
  },
  {
    key: "skid-recovery",
    quote:
      "Regardless of the kind of skid, always shift to " +
      "neutral (declutch). Turning the wheel in the direction " +
      "of the skid is correct, but complicated. A much " +
      "simpler way to decide what way to steer is to look " +
      "where you want to go and steer there.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.10 Emergency driving - Skidding (page 151)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=161",
  },
  {
    key: "brake-or-steer",
    quote:
      "If your choice is between braking or steering, choose " +
      "to steer. You can steer around an obstacle in a " +
      "shorter distance than it takes to stop in front of it.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.10 Emergency steering techniques (page 150)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=160",
  },
  {
    key: "soft-shoulder",
    quote:
      "If your right wheels drop onto a soft shoulder, don't " +
      "jerk the wheel to get back on the road in a hurry and " +
      "don't brake hard.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.10 Drifting onto a soft shoulder (page 153)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=163",
  },
  {
    key: "ditch-rollover",
    quote:
      "The main cause of rollovers is attempting to return to " +
      "the road too early.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.10 Ditches (page 154)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=164",
  },
  {
    key: "blowout",
    quote:
      "With a front or rear tire blow-out, do not over-react. " +
      "Look where you want to go and steer there, holding the " +
      "steering wheel firmly. Gradually ease off the " +
      "accelerator and gently brake.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.10 Blow-outs (page 155)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=165",
  },
  {
    key: "brake-failure",
    quote:
      "You can help slow the vehicle by using the parking " +
      "brake. Try to avoid having the rear wheels lock as " +
      "this will cause the vehicle to spin around. By " +
      "adjusting the parking brake release, you will make it " +
      "easier to vary the pressure and avoid locking. Don't " +
      "pump your brakes. It's the wrong thing to do with a " +
      "modern brake system.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.10 Brake failure (page 155)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=165",
  },
  {
    key: "accelerator-sticks",
    quote:
      "If your accelerator sticks, don't panic. Shift to " +
      "neutral (or declutch), slow down, pull over and stop. " +
      "Then, turn the key off and try unsticking the pedal " +
      "with your feet.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.10 Accelerator sticking (page 156)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=166",
  },
  {
    key: "animals-peak",
    quote:
      "Be alert during the months of May and June when " +
      "animals are drawn to ditches for road salt and to " +
      "escape biting insects. Animals are also especially " +
      "active in the late fall and early winter during mating " +
      "season and migration. The peak times for collisions " +
      "are dawn and dusk.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.10 Animals on the road - Peak times (page 156)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=166",
  },
  {
    key: "animal-avoid-swerve",
    quote:
      "If an animal appears suddenly and surprises you, " +
      "remember to brake firmly and stay in control of your " +
      "vehicle. Avoid swerving because you may turn into " +
      "oncoming traffic or roll into the ditch.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.10 Animals on the road (page 157)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=167",
  },
  {
    key: "animal-glancing-blow",
    quote:
      "Aim your vehicle at the spot where the animal came " +
      "from, not where it's going. Try for a glancing blow " +
      "rather than a head-on encounter and let up on your " +
      "brake just before you collide. This causes the front " +
      "of your vehicle to rise slightly and reduces the " +
      "chances of the animal going through your windshield.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.10 Animals on the road - When a collision is unavoidable (page 157)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=167",
  },
  {
    key: "power-line",
    quote:
      "If your vehicle comes in contact with a power line, " +
      "stay in your vehicle and call SaskPower at " +
      "306-310-2220. If it's an emergency, call 9-1-1 and " +
      "stay in your vehicle until help arrives.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.12 What to do if you're in a collision - Power lines (page 160)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=170",
  },
  {
    key: "power-line-exit",
    quote:
      "Keep arms crossed, feet together, and hop at least 10 " +
      "metres to safety.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.12 What to do if you're in a collision (page 161)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=171",
  },
  {
    key: "collision-report-police",
    quote:
      "All crashes involving injury or death, hit and run by " +
      "an unknown or unidentifiable driver/vehicle, an " +
      "impaired driver, an out-of-province vehicle or where a " +
      "vehicle must be towed from the scene must be " +
      "immediately reported to police.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.12 What to do if you're in a collision - Contact the police (page 160)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=170",
  },
  {
    key: "collision-exchange",
    quote:
      "As a driver in Saskatchewan, you're required to " +
      "provide your name, address, driver's licence number " +
      "and vehicle licence plate number to any other persons " +
      "involved in a collision, regardless of the severity.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.12 What to do if you're in a collision - Exchange information with other drivers (page 161)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=171",
  },
  {
    key: "collision-no-fault-admission",
    quote:
      "Don't admit fault or any other liability before " +
      "discussing the details of the collision with your " +
      "insurance adjuster.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.12 What to do if you're in a collision (page 161)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=171",
  },
  {
    key: "collision-move-injured",
    quote:
      "Injured persons should be moved only if they are in " +
      "danger of drowning, suffocating, burning or being " +
      "electrocuted.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.12 What to do if you're in a collision - Check all injuries (page 159)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=169",
  },
  {
    key: "freeway-emergency",
    quote:
      "Never stop your car on the travelled portion of the " +
      "freeway. Don't wait for your car to stall on the " +
      "freeway. At the first sign of trouble, pull over " +
      "safely.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.3 Emergencies on the freeway (page 135)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=145",
  },
  {
    key: "freeway-miss-exit",
    quote:
      "If you miss an exit, don't stop on the freeway. Don't " +
      "back up on the freeway. Continue to the next " +
      "interchange and return to the correct exit.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.3 If you miss an exit (page 135)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=145",
  },
  {
    key: "freeway-entering",
    quote:
      "The key to entering a freeway is to increase your " +
      "speed in the acceleration lane until it matches the " +
      "speed of the vehicles already on the freeway.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.3 Entering a freeway (page 134)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=144",
  },
  {
    key: "freeway-decelerate",
    quote:
      "Slow down in the deceleration lane, not on the " +
      "freeway.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.3 Leaving a freeway (page 135)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=145",
  },
  {
    key: "gravel-road-right",
    quote:
      "Even though the main path on gravel is often in the " +
      "centre of the road, it's important to stay to the " +
      "right of centre when approaching and navigating hills " +
      "and blind curves to allow room for oncoming vehicles " +
      "that you cannot see.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.7 Driving techniques for gravel roads (page 141)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=151",
  },
  {
    key: "gravel-headlights",
    quote:
      "Always drive with your headlights on so that others " +
      "can see you earlier than they otherwise might.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.7 Driving techniques for gravel roads (page 141)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=151",
  },
  {
    key: "curve-slow-before",
    quote:
      "The most important part of driving a curve or corner " +
      "is to slow down before you get to it.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.5 Curves and corners (page 139)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=149",
  },
  {
    key: "mountain-braking",
    quote:
      "As you travel down the mountain, brake very lightly " +
      "and continuously. This method of braking is least " +
      "likely to overheat your brakes.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "6.6 Driving in mountains (page 140)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=150",
  },
  {
    key: "railway-never-trapped",
    quote:
      "When traffic is heavy, wait on the approach to a " +
      "crossing until you're sure you can clear it.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.11 Railway crossings (page 88)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=98",
  },
  {
    key: "railway-second-track",
    quote:
      "When the last car of a train passes the crossing, do " +
      "not start up until you're sure no train is coming on " +
      "another track, especially from the other direction.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.11 Railway crossings (page 88)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=98",
  },
  {
    key: "railway-gates",
    quote:
      "If the gates are down, don't cross the tracks until " +
      "the gates are raised. It's against the law to go " +
      "around crossing gates.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.11 Automatic protected crossings (page 88)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=98",
  },
  {
    key: "railway-flashing-lights",
    quote:
      "At crossings without gates, you may cross the tracks, " +
      "after stopping, while the red lights are flashing if " +
      "it's safe to do so. However, if a train is closely " +
      "approaching, or if a signal person signals you to " +
      "stop, you must stop and wait until it's safe to " +
      "proceed.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "4.11 Automatic protected crossings (page 88)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=98",
  },
  {
    key: "act-headlights-time",
    quote:
      "No person shall drive a vehicle during the period from " +
      "one-half hour after sunset to one-half hour before " +
      "sunrise or at any other time when conditions of poor " +
      "visibility exist unless prescribed headlights are in " +
      "operation.",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 230(1) - Rules re headlights",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=174",
  },
  {
    key: "act-high-beam-200",
    quote:
      "is at a distance of not less than 200 metres from a " +
      "vehicle approaching from the opposite direction, and " +
      "shall keep the headlights on low beam until the other " +
      "vehicle has passed;",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 230(2)(a) - Rules re headlights",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=174",
  },
  {
    key: "act-seatbelt-driver",
    quote:
      "the driver shall wear the complete seat-belt assembly " +
      "properly adjusted and securely fastened.",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 248(1) - Rules re seat belts",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=184",
  },
  {
    key: "act-booster-seat",
    quote:
      "if the passenger is under the age of seven, weighs " +
      "less than 36 kilograms but more than 18 kilograms and " +
      "is less than 145 centimetres in height: (i) the " +
      "passenger occupies a booster seat as defined in the " +
      "regulations, that is properly adjusted and securely " +
      "fastened in the manner recommended by the " +
      "manufacturer; and (ii) the booster seat is appropriate " +
      "for the passenger's weight and height;",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 248(4)(b) - Rules re seat belts",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=185",
  },
  {
    key: "act-report-collision",
    quote:
      "involves bodily injuries or death; (b) involves a " +
      "motor vehicle for which no certificate of registration " +
      "has been issued pursuant to this Act; (c) involves an " +
      "unidentified motor vehicle; (d) involves a motor " +
      "vehicle that was towed from the scene of the accident " +
      "as a result of the accident; or (e) involves a person " +
      "in charge of a motor vehicle who was apparently under " +
      "the influence of alcohol or drugs so as to be " +
      "incapable for the time being of having proper control " +
      "of the motor vehicle.",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 253(4) - When reports of accidents required",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=189",
  },
  {
    key: "act-following-space",
    quote:
      "no driver of a vehicle following another vehicle on a " +
      "highway outside the boundaries of a hamlet or any " +
      "municipality other than a rural municipality or the " +
      "prescribed part of a municipal district shall fail to " +
      "leave sufficient space between the driver's vehicle " +
      "and the other vehicle to enable an overtaking vehicle " +
      "to enter and occupy the space without danger.",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 225(2) - Rules re following vehicles",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=173",
  },
  {
    key: "act-following-reasonable",
    quote:
      "No driver of a vehicle on a highway shall follow " +
      "another vehicle more closely than is reasonable having " +
      "regard to: (a) the speed of the other vehicle; (b) the " +
      "amount and nature of traffic on the highway; and (c) " +
      "the condition of the highway.",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 225(1) - Rules re following vehicles",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=173",
  },
  {
    key: "act-cellphone-fine",
    quote:
      "No driver shall hold, view, use or manipulate " +
      "electronic communications equipment while driving a " +
      "motor vehicle on a highway.",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 241.1(2) - Hand-held electronic communications equipment prohibited",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=181",
  },
  {
    key: "act-due-care-fine",
    quote:
      "No person shall drive a vehicle on a highway without " +
      "due care and attention. (2) No person shall drive a " +
      "vehicle on a highway without reasonable consideration " +
      "for other persons using the highway.",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 213 - Driving with due care required",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=168",
  },
  {
    key: "zero-bac-new-drivers",
    quote:
      "New drivers caught with any detectable amount of " +
      "alcohol or drugs will be suspended at roadside and " +
      "face other consequences such as vehicle impoundment " +
      "and mandatory ignition interlock. There is zero " +
      "tolerance for alcohol for new drivers, and zero " +
      "tolerance for drugs for both new and experienced " +
      "drivers.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "8.1 Impaired driving - New driver roadside administrative licence suspensions (page 178)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=188",
  },
  {
    key: "new-driver-definition",
    quote:
      "21 years of age and under Learner (Class 7) Class 5 " +
      "Novice 1 and Novice 2 Endorsement 6, M1, or M2 (while " +
      "operating a motorcycle) no licence in the last five " +
      "years out-of-country drivers (when equivalent Class " +
      "cannot be determined)",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "8.1 Impaired driving - New driver roadside administrative licence suspensions (page 178)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=188",
  },
  {
    key: "experienced-driver-04",
    quote:
      "Experienced drivers (any driver age 22 years and over " +
      "that is not in the GDL program and holds a Class 5 or " +
      "higher licence) who register a Blood Alcohol Content " +
      "(BAC) level exceeding .04 to .08 and/or are impaired " +
      "by drugs will lose their licence and face other " +
      "consequences such as vehicle impoundment and mandatory " +
      "ignition interlock.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "8.1 Impaired driving - Experienced driver roadside administrative licence suspensions (page 180)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=190",
  },
  {
    key: "criminal-08",
    quote:
      "It's an offence to drive or to operate a conveyance* " +
      "when you have over 80 mg or more of alcohol per 100 ml " +
      "of blood (or .08% per 100 ml). If your blood alcohol " +
      "content (BAC) is over .08 you have committed a " +
      "Criminal Code offence.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "8.2 The Criminal Code of Canada - Impaired Driving Offences (page 181)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=191",
  },
  {
    key: "only-safe-bac",
    quote:
      "The only truly safe BAC is 0%.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "7.1 Alcohol - Likelihood of a crash (page 170)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=180",
  },
  {
    key: "bac-crash-odds",
    quote:
      ".05-.09% BAC .10-.14% BAC .15+% BAC Increased " +
      "likelihood of a crash 11x 48x 380x",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "7.1 Alcohol - Likelihood of a crash (page 170)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=180",
  },
  {
    key: "alcohol-elimination-rate",
    quote:
      "Only time can eliminate alcohol from the body. You " +
      "cannot successfully sleep off a night of heavy " +
      "drinking in a few hours. If you go to bed intoxicated " +
      "with a BAC of .25% and alcohol leaves the system at a " +
      "rate of approximately .015% per hour",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "7.1 Alcohol - BAC and time (page 170)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=180",
  },
  {
    key: "alcohol-judgment-first",
    quote:
      "The first part of the body affected by alcohol is the " +
      "brain, particularly the part of the brain that allows " +
      "you to think clearly and make good decisions. Its " +
      "sedative effect impairs judgment in a way that is " +
      "usually not noticed by the drinker. The part of the " +
      "brain that controls social inhibitions is also " +
      "affected, causing people to say and do things they " +
      "normally would not. These effects start with one " +
      "drink.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "7.1 Sequence of effects on the body (page 168)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=178",
  },
  {
    key: "alcohol-muscle-second",
    quote:
      "The second part of the body affected by alcohol is " +
      "muscle control. Due to the small muscles in the eye " +
      "being very susceptible to the effects of alcohol, " +
      "vision can be significantly affected, even at low " +
      "alcohol levels.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "7.1 Sequence of effects on the body (page 168)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=178",
  },
  {
    key: "alcohol-decide-before",
    quote:
      "you must make the decision to separate your drinking " +
      "and driving and make the necessary alternate " +
      "transportation plans before you have that first drink!",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "7.1 Sequence of effects on the body (page 168)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=178",
  },
  {
    key: "impaired-stats",
    quote:
      "Impaired drivers are involved in four out of every 10 " +
      "fatal collisions. Approximately 6% of all injury " +
      "collisions involve an impaired driver.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "7.1 Alcohol - Facts about Impaired Driving in Saskatchewan (page 167)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=177",
  },
  {
    key: "impaired-time-of-day",
    quote:
      "The most likely time for impaired driving collisions - " +
      "on any day - is between 6 p.m. and 3 a.m.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "7.1 Alcohol - Facts about Impaired Driving in Saskatchewan (page 167)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=177",
  },
  {
    key: "synergistic-effect",
    quote:
      "This is the synergistic effect! What it means is that " +
      "the whole is greater than the sum of its parts, or 1 + " +
      "1 = more than two. When combining drugs and alcohol it " +
      "causes a multiplying effect. This has an unpredictable " +
      "effect on driving and can be deadly.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "7.3 Drinking and drugs combined (page 174)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=184",
  },
  {
    key: "synergistic-table",
    quote:
      "2 Antihistamine (Cold Remedy) = 4 to 5 2 Marijuana (1 " +
      "joint) = 5 to 6 2 Tranquilizer (Valium - normal dose) " +
      "= Approximately 6 2 Gravol = Approximately 6",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "7.3 Drinking and drugs combined (page 175)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=185",
  },
  {
    key: "standard-drink",
    quote:
      "1 bottle of regular alcohol content beer; or 5 ounces " +
      "table wine; or 3 ounces fortified wine (port or " +
      "sherry); or 1-1/2 ounce hard liquor (rye, rum, vodka " +
      "etc.).",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "7.3 Drinking and drugs combined (page 174)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=184",
  },
  {
    key: "cannabis-effects",
    quote:
      "Some people think that cannabis is a safer substitute " +
      "to drinking, but it can cause concentration to wander, " +
      "which can affect reaction times. It can also cause " +
      "paranoia, drowsiness, distorted perception and a sense " +
      "of disorientation - all of which could cause you to " +
      "lose control at the wheel.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "7.2 Drugs - Cannabis (page 171)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=181",
  },
  {
    key: "cannabis-four-pints",
    quote:
      "Some experts claim that smoking a cannabis joint has " +
      "roughly a similar level of impairment on driving " +
      "ability as drinking four pints of beer.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "7.2 Drugs - Cannabis (page 172)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=182",
  },
  {
    key: "depressants",
    quote:
      "These drugs slow down your brain and body; they blunt " +
      "alertness and reduce motor coordination. This affects " +
      "a person's ability to drive safely in a way similar to " +
      "alcohol. Any drug that causes drowsiness can also " +
      "affect a person's ability to drive safely.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "7.2 Drugs - Depressant drugs (page 172)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=182",
  },
  {
    key: "stimulants-fatigue",
    quote:
      "The tired driver who drinks coffee to stay awake on " +
      "the road should be aware that the stimulant effect can " +
      "wear off suddenly, and that the only remedy for " +
      "fatigue is to pull off the road and sleep.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "7.2 Drugs - Stimulants (page 172)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=182",
  },
  {
    key: "drug-same-penalties",
    quote:
      "Drug-impaired driving is considered as serious an " +
      "offence as alcohol-impaired driving, and carries the " +
      "same penalties.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "7.2 Drugs - Speed (amphetamine) (page 174)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=184",
  },
  {
    key: "label-warning",
    quote:
      "If the label advises against operating heavy " +
      "machinery, consider it a warning not to get behind the " +
      "wheel of a vehicle.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "7.2 Drugs - Depressant drugs (page 172)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=182",
  },
  {
    key: "mandatory-screening",
    quote:
      "A police officer may demand a breath sample from a " +
      "driver in the absence of having a reasonable suspicion " +
      "that the driver has consumed alcohol.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "8.2 Impaired Driving Offences - Mandatory alcohol screening (page 182)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=192",
  },
  {
    key: "refusal-offence",
    quote:
      "Knowing that a demand has been made for a sample, it's " +
      "an offence to fail or refuse to comply without " +
      "reasonable excuse. Refusing to comply with a demand is " +
      "an offence.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "8.2 Impaired Driving Offences - Refusal (page 182)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=192",
  },
  {
    key: "disqualification-periods",
    quote:
      "one conviction - 1 year two convictions - 3 years " +
      "three convictions - 5 years",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "8.2 Licence disqualifications (page 185)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=195",
  },
  {
    key: "indefinite-suspension",
    quote:
      "An indefinite licence suspension will be issued to any " +
      "driver who is charged under the Criminal Code of " +
      "Canada with an impaired driving related offence. The " +
      "suspension will remain in effect until the charges are " +
      "resolved in court.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "8.2 Administrative consequences for Criminal Code impaired driving offences (page 183)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=193",
  },
  {
    key: "impound-30-60",
    quote:
      "The vehicle being operated will also be seized under " +
      "the Vehicle Impoundment program for a minimum of 30 " +
      "days, to a maximum of 60 days if the BAC is .16 or " +
      "greater, or if the driver failed to comply with a " +
      "demand.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "8.2 Administrative consequences for Criminal Code impaired driving offences (page 183)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=193",
  },
  {
    key: "ignition-interlock",
    quote:
      "An ignition interlock device prevents you from " +
      "operating a vehicle if you have alcohol in your body. " +
      "A device is installed in the vehicle that is connected " +
      "to the vehicle's ignition that checks for the presence " +
      "of alcohol in the driver. The driver must blow into " +
      "the machine to start the car, and continue to " +
      "periodically blow into the device to keep the car in " +
      "motion. If the device senses alcohol, the car will not " +
      "start.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "8.2 Ignition interlock special restricted driver's licence (page 185)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=195",
  },
  {
    key: "police-stop",
    quote:
      "Police can signal you to stop using their red/blue " +
      "lights, a special stop light, voice commands or hand " +
      "signals. You must pull over as close to the right-hand " +
      "edge of the road as possible and stop before entering " +
      "the next intersection.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "8.1 Stopping when signalled by police (page 176)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=186",
  },
  {
    key: "produce-licence-registration",
    quote:
      "If requested, you must show the police your driver's " +
      "licence and vehicle registration. If you don't have " +
      "them with you, the police may allow you up to 48 hours " +
      "to produce them.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "8.1 Producing driver's licence and registration (page 176)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=186",
  },
  {
    key: "unsafe-vehicle-order",
    quote:
      "The police may require you to submit your vehicle for " +
      "a safety inspection. If they find that your vehicle is " +
      "unsafe, they can order you to take it off the road and " +
      "to not drive it until it has been repaired.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "8.1 Unsafe vehicles (page 176)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=186",
  },
  {
    key: "impound-rules-of-road",
    quote:
      "Fail to stop for a peace officer 7 days Stunting 30 " +
      "days Excessive speeding: double the posted speed limit " +
      "or more 30 days Excessive speeding: 50 km/h or more " +
      "above posted speed limit 30 days",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "8.1 Vehicle impoundments (page 177)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=187",
  },
  {
    key: "impound-unauthorized",
    quote:
      "Unauthorized driver impoundments - Includes driving " +
      "while suspended or without a valid driver's licence. " +
      "The vehicle will be impounded for 30 days, if it's the " +
      "driver's second occurrence in a two-year period the " +
      "impound length is 60 days.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "8.1 Vehicle impoundments (page 177)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=187",
  },
  {
    key: "impound-learner-unaccompanied",
    quote:
      "Driving as a learner while unaccompanied",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "8.1 Vehicle impoundments (page 177)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=187",
  },
  {
    key: "impound-not-owner",
    quote:
      "The vehicle will be impounded even if you're not the " +
      "owner. All towing and storage costs are the " +
      "responsibility of the vehicle owner.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "8.1 Vehicle impoundments (page 178)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=188",
  },
  {
    key: "gdl-improvement-program",
    quote:
      "Drivers in any stage who are found at fault for a " +
      "collision, or who receive convictions or suspensions, " +
      "will be placed in the Graduated Driver Licensing " +
      "Improvement program.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "2.3 Graduated Driver Licensing Improvement program (page 13)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=23",
  },
  {
    key: "gdl-improvement-steps",
    quote:
      "A warning letter will be sent to the driver if the " +
      "first traffic incident (conviction) has an assigned " +
      "rating of two points or fewer.* If the first traffic " +
      "incident (conviction, at-fault collision, suspension) " +
      "has an assigned rating of three to six points, the " +
      "driver will be required to attend a Traffic Safety " +
      "Education session.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "2.3 Graduated Driver Licensing Improvement program (page 13)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=23",
  },
  {
    key: "driver-improvement-points",
    quote:
      "Program information letter 9 or more points Warning " +
      "letter 12 or more points Defensive Driving Course 15 " +
      "or more points Driver Improvement Training 18 or more " +
      "points 30-day suspension 21 or more points 90-day " +
      "suspension 24 or more points 180-day suspension 27 or " +
      "more points",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "8.4 Driver Improvement Program (page 188)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=198",
  },
  {
    key: "sdr-penalty",
    quote:
      "You're assessed a financial penalty of $50 for each " +
      "point you move in the Penalty Zone (capped at a " +
      "maximum penalty of $1,000).",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "8.5 Safe Driver Recognition - The Penalty Zone (page 191)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=201",
  },
  {
    key: "sdr-discount",
    quote:
      "For every year since 1995 that you have driven without " +
      "an incident, you earn a safety point. Each point in " +
      "the Safety Zone corresponds to a discount on your " +
      "vehicle plate insurance, to a maximum of 25%.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "8.5 Safe Driver Recognition - How it works (page 190)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=200",
  },
  {
    key: "sdr-drive-out",
    quote:
      "you don't pay your way out of the Penalty Zone - you " +
      "drive your way out of the Penalty Zone through safe " +
      "driving.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "8.5 Safe Driver Recognition - Moving out of the Penalty Zone (page 191)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=201",
  },
  {
    key: "bylaws-complement",
    quote:
      "Cities, towns and some villages have their own set of " +
      "'rules of the road,' known as bylaws. These rules are " +
      "necessary as each urban centre has special driving " +
      "situations. However, bylaws must complement The " +
      "Traffic Safety Act, Saskatchewan's traffic laws.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "8.1 The Traffic Safety Act (page 176)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=186",
  },
  {
    key: "arrest-grounds",
    quote:
      "operate an unregistered vehicle drive without a " +
      "driver's licence fail to stop when signalled by police " +
      "drive without care and attention or without reasonable " +
      "consideration for others tamper with a vehicle fail to " +
      "provide information when requested by police commit " +
      "Criminal Code offences",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "8.2 Arrest (page 184)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=194",
  },
  {
    key: "traffic-ticket-not-guilty",
    quote:
      "You must appear in court to enter a not guilty plea. " +
      "You'll then have a trial date set. You may want to " +
      "consult a lawyer before entering a plea.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "8.3 Traffic tickets (page 187)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=197",
  },
  {
    key: "failure-to-stop-scene",
    quote:
      "If you're involved in a collision with a person, " +
      "vehicle or cattle in the charge of a person, you must " +
      "give your name, address, driver's licence number and " +
      "insurance information to any other involved people and " +
      "assist any injured people.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "8.2 Other Criminal Code driving offences - Failure to stop at scene of collision (page 184)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=194",
  },
  {
    key: "plate-obstruction",
    quote:
      "Licence plates must be securely attached and clearly " +
      "visible. That means plates must not be obstructed in a " +
      "way that prevents them from being read or accurately " +
      "photographed by any enforcement system.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "2.2 Vehicle registration (page 6)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=16",
  },
  {
    key: "liability-200k",
    quote:
      "Plate insurance provides up to $200,000 in liability " +
      "coverage.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "2.2 How auto insurance works - Liability (page 8)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=18",
  },
  {
    key: "shared-fault-deductible",
    quote:
      "When two motorists are each found partially " +
      "responsible for a collision, both drivers pay a " +
      "portion of their deductible if their vehicle is " +
      "damaged. For example, if you're found 25% responsible " +
      "for a collision you pay 25% of your deductible.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "2.2 Coverage for multiple-vehicle losses (page 10)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=20",
  },
  {
    key: "register-90-days",
    quote:
      "If you're a new resident you have up to 90 days to " +
      "register your vehicle in Saskatchewan. Basic insurance " +
      "coverage is required.",
    source: "Saskatchewan Driver's Handbook (SGI, 2026-27)",
    section: "2.2 Vehicle registration (page 6)",
    url: "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf#page=16",
  },
  {
    key: "act-obstruct-view",
    quote:
      "No person shall drive a vehicle on a highway unless " +
      "the driver has a clear view of the highway to the " +
      "front and to both sides of the vehicle.",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 246(1) - Obstructing driver's view prohibited",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=183",
  },
  {
    key: "act-riding-exterior",
    quote:
      "No person shall ride and no driver shall permit any " +
      "person to ride on any exterior part of a motor vehicle " +
      "on a highway, except in a box or space designed for " +
      "the accommodation of passengers.",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 244(1) - Riding on exterior of vehicles",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=183",
  },
  {
    key: "act-noise",
    quote:
      "No person shall create or cause the emission of any " +
      "loud and unnecessary noise from a motor vehicle, a " +
      "part of a motor vehicle or any thing or substance that " +
      "the motor vehicle or a part of the motor vehicle comes " +
      "into contact with.",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 215 - Excessive noise prohibited",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=169",
  },
  {
    key: "act-animals",
    quote:
      "When approaching any animal visible on or beside a " +
      "highway or so close to the highway as to constitute a " +
      "hazard, no driver of a vehicle shall: (a) fail to " +
      "reduce the vehicle's speed; or (b) pass the animal " +
      "unless it is safe to do so.",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 206 - Speeding when passing animals prohibited",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=163",
  },
  {
    key: "act-emergency-priority",
    quote:
      "fire engines; (b) fire department apparatus; (c) " +
      "ambulances; (d) police vehicles;",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 238(6) - Emergency vehicles",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=179",
  },
  {
    key: "act-crosswalk-definition",
    quote:
      "\"crosswalk\" means: (i) a clearly marked pedestrian " +
      "crossing; or (ii) if there is no clearly marked " +
      "pedestrian crossing, the prolongation through the " +
      "intersection of the lateral boundary lines of the " +
      "adjacent or intersecting sidewalks at the end of a " +
      "block;",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 207(a) - Interpretation of Division",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=163",
  },
  {
    key: "act-obey-devices",
    quote:
      "No person operating a motor vehicle shall fail to obey " +
      "the instructions of any traffic control device.",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 208(2) - Drivers must observe rules of the road",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=164",
  },
  {
    key: "act-obey-officer",
    quote:
      "no person operating a motor vehicle shall fail to obey " +
      "the directions of a peace officer directing traffic.",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 208(3) - Drivers must observe rules of the road",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=164",
  },
  {
    key: "act-medians",
    quote:
      "If a highway is divided into two roadways by a median, " +
      "a driver of a vehicle shall drive only on the " +
      "right-hand roadway. (2) No driver of a vehicle shall " +
      "drive or attempt to drive over the median, except at a " +
      "crossover or intersection established by the public " +
      "authority having jurisdiction over the highway.",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 229 - Rules re medians",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=174",
  },
  {
    key: "act-one-way",
    quote:
      "If a highway is a one-way highway, no person shall " +
      "drive a vehicle in a direction other than the " +
      "direction indicated by the signs erected along the " +
      "highway.",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 221 - Rules re one-way highways",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=172",
  },
  {
    key: "act-walk-left",
    quote:
      "No person, other than a pedestrian in charge of an " +
      "animal, shall walk along that portion of a highway " +
      "used for vehicular traffic, except close to the edge " +
      "on his or her left.",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 223(5) - Rules re pedestrians",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=173",
  },
  {
    key: "act-pedestrian-step-out",
    quote:
      "No pedestrian shall leave a curb or other place of " +
      "safety and proceed into the path of a vehicle on a " +
      "highway that is so close that it is impracticable for " +
      "the driver to yield the right of way.",
    source: "The Traffic Safety Act, c T-18.1 (Saskatchewan, consolidated to 2024)",
    section: "The Traffic Safety Act, section 223(3) - Rules re pedestrians",
    url: "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download#page=172",
  },
];
