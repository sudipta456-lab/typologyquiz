import type { HandbookExcerpt } from "../types";

// Short verbatim excerpts behind the New Brunswick bank.
//
// Sources, and why there are three of them:
//
//  - The New Brunswick Driver's Handbook, published by the Government of New
//    Brunswick and distributed by Service New Brunswick on behalf of the
//    Department of Public Safety. It is published as NINE separate part PDFs on
//    gnb.ca rather than one file, and it carries no edition label anywhere: no
//    cover date, no revision code, no ISBN. The only version marker the
//    publisher leaves is the PDF production date embedded in all nine files,
//    19 July 2022. The nine parts share one continuous printed page numbering,
//    9 to 106, and every `section` below cites that printed page - which is the
//    number shown in the header of the page the learner will land on.
//  - The Motor Vehicle Act, RSNB 1973, c M-17, on the Province's own
//    legislation site. The handbook is written for a general reader and leaves
//    out, or has fallen behind on, several numbers the test still expects: the
//    school-zone speed limit was rewritten by 2023, c.7 and the handbook still
//    prints the old one; the hand-held device ban is described but never given
//    a section; and the GDL conditions are stated as bullet points rather than
//    as the conditions of a licence.
//  - Two gnb.ca pages, for the shape of the examination and the Graduated
//    Driver's Licence levels. The handbook gives the two written tests and
//    their pass marks; the licensing pages carry the online option, the
//    four-business-day wait, and the Level 1 and Level 2 tables.
//
// Every quote was located mechanically in the fetched source and checked as an
// exact substring before it was written here. Nothing is paraphrased. Four
// normalisations were applied to the extracted text and to nothing else: curly
// quotes, en dashes and em dashes are folded to ASCII; runs of whitespace,
// including the line breaks the PDFs insert mid-sentence, collapse to single
// spaces; bullet glyphs become spaces, so a stem followed by its bulleted list
// runs together in the order the source prints it; and no words are changed,
// dropped or reordered. The sources' own slips are preserved, including the
// handbook's stray closing bracket in "any bridge, viaduct or tunnel)", its
// "hankerchief", and the spacing in "36 kg (79 lbs.) ;".
//
// The statute text was taken from the site's own full-text view. That view
// wraps each paragraph letter in its own element, so a plain-text render picks
// up "( a)" where the page displays "(a)"; that single gap is closed and
// nothing else is touched.

const HANDBOOK = "New Brunswick Driver's Handbook (Government of New Brunswick)";
const DOCS = "https://www.gnb.ca/content/dam/GNB3/t/dt-ct/handbook-manuel/docs";

/**
 * The handbook is nine PDFs with one continuous printed page numbering that
 * starts at 9. Each helper takes the PRINTED page number and lands on the right
 * page inside that part's own file.
 */
const p1 = (p: number) => `${DOCS}/part-1-licensing-of-drivers.pdf#page=${p - 8}`;
const p2 = (p: number) => `${DOCS}/part-2-registration-of-vehicles.pdf#page=${p - 23}`;
const p3 = (p: number) => `${DOCS}/part-3-equipment.pdf#page=${p - 27}`;
const p4 = (p: number) =>
  `${DOCS}/part-4-traffic-on-the-highway-rules-of-the-road.pdf#page=${p - 32}`;
const p5 = (p: number) => `${DOCS}/part-5-safe-driving.pdf#page=${p - 53}`;
const p6 = (p: number) =>
  `${DOCS}/part-6-traffic-on-the-highway-sharing-the-road.pdf#page=${p - 76}`;
const p7 = (p: number) => `${DOCS}/part-7-traffic-signs.pdf#page=${p - 85}`;
const p8 = (p: number) => `${DOCS}/part-8-what-every-motorcyclist-must-know.pdf#page=${p - 95}`;
const p9 = () => `${DOCS}/part-9%20information-for-commercial-vehicle-drivers.pdf#page=1`;

const MVA = "Motor Vehicle Act, RSNB 1973, c M-17 (Government of New Brunswick)";
const mva = (s: string) => `https://laws.gnb.ca/en/showfulldoc/cs/M-17#se:${s}`;

const GDL_SRC = "Graduated drivers' licences (gnb.ca)";
const GDL_URL =
  "https://www.gnb.ca/en/topic/driving-transportation/driving-licensing/graduated-licences.html";
const TESTS_SRC = "Written and road tests for driver's licences (gnb.ca)";
const TESTS_URL =
  "https://www.gnb.ca/en/topic/driving-transportation/driving-licensing/written-road-tests.html";

export const newbrunswickExcerpts: HandbookExcerpt[] = [
  // --- Part 1: Licensing of drivers -------------------------------------
  {
    key: "licence-carry",
    quote:
      "You must always carry your driver's licence when operating a vehicle and " +
      "must produce it for inspection on the request of any peace officer or " +
      "display it on request to any other driver with whom you may be involved " +
      "in a collision.",
    source: HANDBOOK,
    section: "Part 1: Licensing of drivers (p. 9)",
    url: p1(9),
  },
  {
    key: "gdl-24-months",
    quote:
      "This is an instructional type of licence for the driver to acquire " +
      "experience, over a minimum of 24 months, before becoming a fully " +
      "licensed driver.",
    source: HANDBOOK,
    section: "Part 1: Licensing of drivers - 1.1 Types of Licences (p. 9)",
    url: p1(9),
  },
  {
    key: "gdl-zero-bac",
    quote:
      "While the holder of a graduated licence, the driver must maintain 0 per " +
      "cent blood alcohol content while driving and not consume any drugs that " +
      "could impair ability to drive.",
    source: HANDBOOK,
    section: "Part 1: Licensing of drivers - 1.1 Types of Licences (p. 9)",
    url: p1(9),
  },
  {
    key: "gdl-breach-restart",
    quote:
      "Any breach of this condition will result in a one year suspension, " +
      "followed by a return to the beginning of the graduated licence period " +
      "with no credit given for previously passed tests or driver training course.",
    source: HANDBOOK,
    section: "Part 1: Licensing of drivers - 1.1 Types of Licences (p. 9)",
    url: p1(9),
  },
  {
    key: "gdl-entry-requirements",
    quote:
      "Applicant must be at least 16 years of age. Applicants under 18 years of " +
      "age must have a parental consent form that must be witnessed by a " +
      "non-relative. Must pass vision screening (20/40 best eye). Must pass " +
      "written, basic and signs tests.",
    source: HANDBOOK,
    section: "Part 1: Licensing of drivers - 1.1 Types of Licences (p. 9)",
    url: p1(9),
  },
  {
    key: "under-21-zero-bac",
    quote:
      "All motorists in New Brunswick under the age of 21 must maintain a 0% " +
      "Blood Alcohol Level while driving.",
    source: HANDBOOK,
    section: "Part 1: Licensing of drivers - DID YOU KNOW? (p. 9)",
    url: p1(9),
  },
  {
    key: "level1-supervisor",
    quote:
      "Must be accompanied by only one passenger who has a Class 5 or better " +
      "licence, at least three years of driving experience and who is seated in " +
      "the front passenger seat.",
    source: HANDBOOK,
    section: "Part 1: Licensing of drivers - Level 1 (p. 10)",
    url: p1(10),
  },
  {
    key: "level1-curfew",
    quote: "Cannot drive between midnight and 5:00 a.m.",
    source: HANDBOOK,
    section: "Part 1: Licensing of drivers - Level 1 (p. 10)",
    url: p1(10),
  },
  {
    key: "level1-road-test-wait",
    quote:
      "Can be eligible to take the road test for Level 2 after eight months if " +
      "graduated from a licensed driver training school or after 12 months if " +
      "they have not.",
    source: HANDBOOK,
    section: "Part 1: Licensing of drivers - Level 1 (p. 10)",
    url: p1(10),
  },
  {
    key: "level2-curfew",
    quote:
      "If under 21, cannot drive between midnight and 5:00 a.m. except for " +
      "education or work purposes or if they're accompanied by a driver who has " +
      "a Class 5 or better licence and at least three years driving experience.",
    source: HANDBOOK,
    section: "Part 1: Licensing of drivers - Level 2 (p. 10)",
    url: p1(10),
  },
  {
    key: "level2-passengers",
    quote:
      "Cannot have more than three passengers in their vehicle and no more than " +
      "one passenger in the front seat.",
    source: HANDBOOK,
    section: "Part 1: Licensing of drivers - Level 2 (p. 10)",
    url: p1(10),
  },
  {
    key: "class5-apply",
    quote:
      "It is your responsibility to apply for a Class 5 Licence upon completion " +
      "of a Class 7 Graduated Licence (Level 2).",
    source: HANDBOOK,
    section: "Part 1: Licensing of drivers - DID YOU KNOW? (p. 10)",
    url: p1(10),
  },
  {
    key: "class6-motorcycle",
    quote:
      "The Class 6 licence permits the holder to operate a motorcycle and all " +
      "vehicles included in Classes 6D and 9 on a street or highway.",
    source: HANDBOOK,
    section: "Part 1: Licensing of drivers - Class 6 (p. 13)",
    url: p1(13),
  },
  {
    key: "motorcycle-gdl-night",
    quote: "Participants cannot drive from sunset to sunrise.",
    source: HANDBOOK,
    section:
      "Part 1: Licensing of drivers - Graduated Driver's Licensing Program for motorcyclists (p. 13)",
    url: p1(13),
  },
  {
    key: "motorcycle-gdl-passengers",
    quote:
      "Participants cannot have any passengers on their motorcycle for the " +
      "duration of the GDL program.",
    source: HANDBOOK,
    section:
      "Part 1: Licensing of drivers - Graduated Driver's Licensing Program for motorcyclists (p. 13)",
    url: p1(13),
  },
  {
    key: "learner-exam-requirements",
    quote:
      "Before you, as a resident of New Brunswick, may obtain a learner's " +
      "licence, you must pass an examination to determine if you meet the " +
      "required vision standards. You must also have an acceptable knowledge of " +
      "road signs, rules of the road and safe driving practices.",
    source: HANDBOOK,
    section: "Part 1: Licensing of drivers - 1.4 Examination for learner's licence (p. 15)",
    url: p1(15),
  },
  {
    key: "parental-consent",
    quote:
      "You must have the written consent of a parent or guardian before applying " +
      "for a licence if you are less than 18 years of age.",
    source: HANDBOOK,
    section: "Part 1: Licensing of drivers - 1.4 Examination for learner's licence (p. 15)",
    url: p1(15),
  },
  {
    key: "consent-withdrawal",
    quote:
      "This written consent may be withdrawn by the parent or guardian at any " +
      "time prior to age 18, by making written application to the Registrar of " +
      "Motor Vehicles who may then cancel the licence.",
    source: HANDBOOK,
    section: "Part 1: Licensing of drivers - 1.4 Examination for learner's licence (p. 15)",
    url: p1(15),
  },
  {
    key: "test-fees",
    quote:
      "There is a separate fee for both written and road tests and an additional " +
      "fee for the licence issuance. Check with Service New Brunswick or SNB.ca " +
      "for the amounts.",
    source: HANDBOOK,
    section: "Part 1: Licensing of drivers - DID YOU KNOW (p. 15)",
    url: p1(15),
  },
  {
    key: "sign-test",
    quote:
      "This test consists of twenty (20) signs. In order to pass the test you " +
      "must correctly identify \"stop\", \"yield\", and \"school zone\" signs and " +
      "have not more than four errors on the remaining signs.",
    source: HANDBOOK,
    section: "Part 1: Licensing of drivers - Road Sign Recognition Test (p. 16)",
    url: p1(16),
  },
  {
    key: "sign-test-oral",
    quote:
      "You will be given a written or oral examination on your ability to " +
      "recognize and understand the meaning of highway road signs.",
    source: HANDBOOK,
    section: "Part 1: Licensing of drivers - Road Sign Recognition Test (p. 16)",
    url: p1(16),
  },
  {
    key: "rules-test",
    quote:
      "The written exam consists of twenty (20) multiple choice questions. To " +
      "pass, you must answer sixteen (16) correctly.",
    source: HANDBOOK,
    section: "Part 1: Licensing of drivers - Rules Test (p. 16)",
    url: p1(16),
  },
  {
    key: "test-metric",
    quote:
      "Although this guide offers measurements in both Metric and Imperial " +
      "systems, the written test refers only to the Metric system.",
    source: HANDBOOK,
    section: "Part 1: Licensing of drivers - Rules Test (p. 16)",
    url: p1(16),
  },
  {
    key: "road-test-vehicle",
    quote:
      "The road test will not be conducted if the vehicle is not in satisfactory " +
      "mechanical condition.",
    source: HANDBOOK,
    section: "Part 1: Licensing of drivers - Driving Test (p. 17)",
    url: p1(17),
  },
  {
    key: "road-test-3km",
    quote:
      "The examination will be conducted over a course of at least 3 km, and when " +
      "possible, will be conducted in fairly dense traffic.",
    source: HANDBOOK,
    section: "Part 1: Licensing of drivers - Driving Test (p. 18)",
    url: p1(18),
  },
  {
    key: "test-results-six-months",
    quote: "All test results are valid for only six months.",
    source: HANDBOOK,
    section: "Part 1: Licensing of drivers - Re-examination (p. 18)",
    url: p1(18),
  },
  {
    key: "restriction-23",
    quote: "23. Zero tolerance for alcohol or drugs until age 21.",
    source: HANDBOOK,
    section: "Part 1: Licensing of drivers - Restrictions (p. 19)",
    url: p1(19),
  },
  {
    key: "licence-expiry",
    quote:
      "An individual's driver's licence expires on the licensee's birthday in the " +
      "year of expiration.",
    source: HANDBOOK,
    section: "Part 1: Licensing of drivers - Expiry Date (p. 19)",
    url: p1(19),
  },
  {
    key: "change-of-address",
    quote:
      "Drivers are required by law to advise the Motor Vehicle Branch of any " +
      "change in address within ten (10) days.",
    source: HANDBOOK,
    section: "Part 1: Licensing of drivers - Change of Address (p. 19)",
    url: p1(19),
  },
  {
    key: "change-of-name",
    quote:
      "Drivers are required by law to advise the Motor Vehicle Branch of any " +
      "change in name within ten (10) days.",
    source: HANDBOOK,
    section: "Part 1: Licensing of drivers - Change of Name (p. 19)",
    url: p1(19),
  },
  {
    key: "newly-licensed-definition",
    quote:
      "A newly licensed driver means any driver who has been licensed for less " +
      "than four years.",
    source: HANDBOOK,
    section: "Part 1: Licensing of drivers - Newly licensed driver point suspension (p. 20)",
    url: p1(20),
  },
  {
    key: "newly-licensed-points",
    quote:
      "Every driver in this category is credited with four points after being " +
      "issued a licence. A further two points will be credited to these drivers " +
      "each subsequent year to a maximum of 10 points.",
    source: HANDBOOK,
    section: "Part 1: Licensing of drivers - Newly licensed driver point suspension (p. 20)",
    url: p1(20),
  },
  {
    key: "newly-licensed-suspension",
    quote:
      "When a newly licensed driver loses all points they will be suspended by " +
      "the Registrar.",
    source: HANDBOOK,
    section: "Part 1: Licensing of drivers - Newly licensed driver point suspension (p. 20)",
    url: p1(20),
  },
  {
    key: "ten-point-suspension",
    quote:
      "Demerit points are returned two (2) years after conviction date. A loss of " +
      "all ten (10) points within two (2) years will result in automatic suspension.",
    source: HANDBOOK,
    section: "Part 1: Licensing of drivers - Ten (10) point suspension (p. 20)",
    url: p1(20),
  },
  {
    key: "demerit-suspension-length",
    quote:
      "Suspensions resulting from loss of demerit points for offences under the " +
      "Motor Vehicle Act are for a period of three months.",
    source: HANDBOOK,
    section: "Part 1: Licensing of drivers - Suspension of driving privilege (p. 21)",
    url: p1(21),
  },
  {
    key: "reinstatement",
    quote:
      "After the suspension period has lapsed, a licence may be reinstated by the " +
      "Registrar provided the reinstatement conditions have been met.",
    source: HANDBOOK,
    section: "Part 1: Licensing of drivers - Reinstatement (p. 22)",
    url: p1(22),
  },
  {
    key: "re-examination",
    quote:
      "The Registrar may, at any time, require any driver to be re-examined if " +
      "there is a question about the driver's physical or mental condition or " +
      "driving ability.",
    source: HANDBOOK,
    section: "Part 1: Licensing of drivers - 1.7 When a re-examination is required (p. 23)",
    url: p1(23),
  },
  {
    key: "medical-reporting",
    quote:
      "Doctors, optometrists and nurse practitioners are required by law to " +
      "report anything that would affect the driving ability of their patient.",
    source: HANDBOOK,
    section: "Part 1: Licensing of drivers - 1.7 When a re-examination is required (p. 23)",
    url: p1(23),
  },

  // --- Part 2: Registration of vehicles ---------------------------------
  {
    key: "registration-carry",
    quote:
      "The registration certificate or a photocopy must be carried by the driver " +
      "while operating the vehicle.",
    source: HANDBOOK,
    section: "Part 2: Registration of vehicles - 2.1 Certificate of Registration (p. 24)",
    url: p2(24),
  },
  {
    key: "plates-legible",
    quote:
      "Licence plates must be securely fastened to the vehicle in such a position " +
      "and condition as to be clearly legible. The rear plate must be lighted at night.",
    source: HANDBOOK,
    section: "Part 2: Registration of vehicles - 2.3 Plates must be legible (p. 24)",
    url: p2(24),
  },
  {
    key: "non-resident-six-months",
    quote:
      "A passenger vehicle owned by a visitor may be operated for personal, " +
      "non-business purposes for a period of six months in New Brunswick without " +
      "being registered in the province.",
    source: HANDBOOK,
    section: "Part 2: Registration of vehicles - 2.7 Non-Residents (p. 25)",
    url: p2(25),
  },
  {
    key: "new-resident-register",
    quote:
      "A person who becomes a resident of New Brunswick must register their " +
      "vehicle with Service New Brunswick immediately.",
    source: HANDBOOK,
    section: "Part 2: Registration of vehicles - 2.7 Non-Residents (p. 25)",
    url: p2(25),
  },
  {
    key: "transit-marker",
    quote:
      "This is a temporary permit to move an unregistered vehicle from one place " +
      "to another and is valid for 24 hours.",
    source: HANDBOOK,
    section: "Part 2: Registration of vehicles - 2.9 Transit Markers (p. 25)",
    url: p2(25),
  },
  {
    key: "disability-placard",
    quote:
      "Placards must be hung on the rear-view mirror when the vehicle is parked " +
      "in a designated space. It is important to remember to remove the placard " +
      "before driving.",
    source: HANDBOOK,
    section: "Part 2: Registration of vehicles - 2.11 Persons with disabilities (p. 26)",
    url: p2(26),
  },
  {
    key: "placard-not-loaned",
    quote:
      "Placards are issued only for the use of the designated person and may not " +
      "be loaned to anyone else, for any reason.",
    source: HANDBOOK,
    section: "Part 2: Registration of vehicles - 2.11 Persons with disabilities (p. 26)",
    url: p2(26),
  },
  {
    key: "inspection-rejected-14-days",
    quote:
      "The owner or operator of a \"rejected vehicle\" has 14 days from the date of " +
      "rejection to have defects corrected and the vehicle re-inspected.",
    source: HANDBOOK,
    section: "Part 2: Registration of vehicles - 2.13 Motor Vehicle Safety Inspection (p. 27)",
    url: p2(27),
  },
  {
    key: "inspection-out-of-province",
    quote:
      "An out-of-province vehicle being registered in New Brunswick is granted a " +
      "period of 14 days to obtain an inspection.",
    source: HANDBOOK,
    section: "Part 2: Registration of vehicles - 2.13 Motor Vehicle Safety Inspection (p. 27)",
    url: p2(27),
  },

  // --- Part 3: Equipment -------------------------------------------------
  {
    key: "lights-150-metres",
    quote:
      "No person shall drive a vehicle on a highway at nighttime or any other " +
      "time when there is not sufficient light to see a person or vehicle on the " +
      "highway at a distance of 150 metres (500 feet) unless the vehicle is " +
      "equipped with and displays lighted lamps and illuminating devices as " +
      "required for the class of vehicle.",
    source: HANDBOOK,
    section: "Part 3: Equipment - 3.1 Lights (p. 28)",
    url: p3(28),
  },
  {
    key: "drl-required",
    quote:
      "All vehicles operated on New Brunswick roadways must display daytime " +
      "running lights. If a vehicle is not equipped with daytime running lights " +
      "or they are inoperable, then headlights must be turned on at all times.",
    source: HANDBOOK,
    section: "Part 3: Equipment - Daytime running lights (p. 28)",
    url: p3(28),
  },
  {
    key: "headlight-beams",
    quote:
      "They must have high beams that clearly show ahead for 100 metres (330 " +
      "feet) and low beams that show 30 metres (100 feet).",
    source: HANDBOOK,
    section: "Part 3: Equipment - Headlamps (p. 28)",
    url: p3(28),
  },
  {
    key: "high-beam-dim",
    quote:
      "High beams must be dimmed within 150 metres (500 feet) of an approaching " +
      "vehicle. When following another vehicle within 60 metres (200 feet) low " +
      "beams must be used except when in the act of passing.",
    source: HANDBOOK,
    section: "Part 3: Equipment - High beams (p. 29)",
    url: p3(29),
  },
  {
    key: "flashing-red-restricted",
    quote:
      "A flashing or revolving red light visible from the front and rear may only " +
      "be used on: (1) ambulance; (2) a police or fire department vehicle; (3) a " +
      "school bus while taking on or unloading passengers.",
    source: HANDBOOK,
    section: "Part 3: Equipment - Flashing or revolving lights (p. 29)",
    url: p3(29),
  },
  {
    key: "four-way-flashers",
    quote:
      "the flashing lights can be used when the vehicle is parked on the highway " +
      "or any portion thereof due to an emergency or under circumstances beyond " +
      "the control of the driver.",
    source: HANDBOOK,
    section: "Part 3: Equipment - Four way flashers (p. 30)",
    url: p3(30),
  },
  {
    key: "fog-lamps",
    quote:
      "Any motor vehicle may be equipped with not more than two fog lamps and " +
      "they can only be used when the headlights of the vehicle are on low beam.",
    source: HANDBOOK,
    section: "Part 3: Equipment - Fog lamps (p. 30)",
    url: p3(30),
  },
  {
    key: "spot-lamp",
    quote:
      "Any motor vehicle may be equipped with not more than one spot light. It " +
      "cannot be aimed to shine directly on or within 30 metres (100 feet) in " +
      "front of an approaching vehicle.",
    source: HANDBOOK,
    section: "Part 3: Equipment - Spot lamps (p. 30)",
    url: p3(30),
  },
  {
    key: "horn-60-metres",
    quote:
      "Every motor vehicle must be equipped with a horn in good working order " +
      "that can be heard for a distance of not less than 60 metres (200 feet) but " +
      "a horn must not emit an unreasonably loud, harsh sound.",
    source: HANDBOOK,
    section: "Part 3: Equipment - 3.3 Horn (p. 30)",
    url: p3(30),
  },
  {
    key: "horn-when",
    quote:
      "The horn should be sounded whenever it is necessary to ensure safe " +
      "operation of a vehicle or to give warning of the approach of a vehicle.",
    source: HANDBOOK,
    section: "Part 3: Equipment - 3.3 Horn (p. 30)",
    url: p3(30),
  },
  {
    key: "mirror-60-metres",
    quote:
      "Every motor vehicle must be equipped with a mirror located to reflect to " +
      "the driver a view of the highway for a distance of at least 60 metres (200 " +
      "feet) to the rear of the vehicle.",
    source: HANDBOOK,
    section: "Part 3: Equipment - 3.4 Mirror (p. 30)",
    url: p3(30),
  },
  {
    key: "windshield-clear",
    quote:
      "All windshields and windows must be kept clear of any signs, posters or " +
      "other non-transparent material which obstruct the driver's clear view of " +
      "the highway or any intersecting highway.",
    source: HANDBOOK,
    section: "Part 3: Equipment - 3.5 Windshields and windows (p. 31)",
    url: p3(31),
  },
  {
    key: "speedometer",
    quote:
      "Every motor vehicle must be equipped with a speedometer in good working " +
      "condition so as to show the speed at which the vehicle is travelling.",
    source: HANDBOOK,
    section: "Part 3: Equipment - 3.9 Speedometer (p. 31)",
    url: p3(31),
  },
  {
    key: "studded-tires",
    quote:
      "It is permissible to use studded snow tires of a type approved by the " +
      "Registrar between October 15th and April 30 of every year.",
    source: HANDBOOK,
    section: "Part 3: Equipment - 3.11 Studded tires (p. 32)",
    url: p3(32),
  },
  {
    key: "studded-tires-skid",
    quote:
      "The use of studded tires may cause more of a skid in an emergency stop " +
      "than rubber tires depending on road conditions.",
    source: HANDBOOK,
    section: "Part 3: Equipment - DID YOU KNOW? (p. 32)",
    url: p3(32),
  },
  {
    key: "safety-chain",
    quote:
      "The safety chain should not be attached to the hitch but to the frame or " +
      "bumper of the vehicle.",
    source: HANDBOOK,
    section: "Part 3: Equipment - 3.12 Safety chain (p. 32)",
    url: p3(32),
  },

  // --- Part 4: Rules of the road ----------------------------------------
  {
    key: "peace-officer-order",
    quote:
      "it is an offence for any person to fail to comply with an order, a signal " +
      "or a direction of a peace officer or to fail to observe the instructions " +
      "of any official traffic sign or signal except when otherwise directed by a " +
      "peace officer.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Rules of the road (p. 33)",
    url: p4(33),
  },
  {
    key: "collision-duty",
    quote:
      "A driver involved in a collision causing death, injury and/or property " +
      "damage must stop at the scene of the collision. They must provide their " +
      "name, address, plate number of their vehicle, driver's licence and " +
      "liability insurance card to the other party or parties involved in the " +
      "collision.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.1 Collisions (p. 33)",
    url: p4(33),
  },
  {
    key: "collision-report-1000",
    quote:
      "Collisions resulting in death or injury to any person, or total property " +
      "damage to an apparent extent of $1,000.00 or more must be reported " +
      "immediately to the nearest office of the Royal Canadian Mounted Police or " +
      "to a member of the local police.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Reporting collisions (p. 33)",
    url: p4(33),
  },
  {
    key: "collision-proof-insurance",
    quote:
      "The accepted proof is a New Brunswick Liability Insurance Card, issued by " +
      "an authorized insurance company, showing that public liability and " +
      "property damage coverage has been issued on behalf of the driver or the " +
      "owner of the vehicle.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Financial responsibility (p. 33)",
    url: p4(33),
  },
  {
    key: "radar-detectors",
    quote: "Possession and use of radar detectors is illegal in New Brunswick.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - DID YOU KNOW? (p. 33)",
    url: p4(33),
  },
  {
    key: "emergency-approach",
    quote:
      "the drivers of all vehicles must immediately drive to the right hand curb " +
      "and must stop and remain stopped until the emergency vehicle has passed, " +
      "unless otherwise directed by a peace officer.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Emergency vehicles (p. 34)",
    url: p4(34),
  },
  {
    key: "move-over",
    quote:
      "When an emergency vehicle or service vehicle is stopped on the highway and " +
      "has its flashing lights on, drivers MUST: Slow down to one half the posted " +
      "speed limit and proceed with caution. Make sure it's safe to proceed, then " +
      "move over to the left, away from the vehicle.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Emergency vehicles (p. 34)",
    url: p4(34),
  },
  {
    key: "move-over-lanes",
    quote:
      "If there are two or more lanes of traffic, the driver must move into " +
      "another lane if it can be done safely.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Emergency vehicles (p. 34)",
    url: p4(34),
  },
  {
    key: "emergency-vehicle-definition",
    quote:
      "An authorized emergency vehicle is a vehicle operated by a police officer " +
      "or designated peace officer, a fire department or fire fighting vehicle, " +
      "or an ambulance.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Emergency vehicles (p. 34)",
    url: p4(34),
  },
  {
    key: "service-vehicle-definition",
    quote:
      "Service vehicle means a tow truck, a private or public utility corporation " +
      "vehicle and a road safety or maintenance vehicle under contract with the " +
      "Province.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Emergency vehicles (p. 34)",
    url: p4(34),
  },
  {
    key: "follow-fire-150",
    quote:
      "It is an offence to follow within 150 metres (500 feet) of any fire " +
      "apparatus which is responding to an emergency.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Following Fire Vehicles (p. 34)",
    url: p4(34),
  },
  {
    key: "fire-hose",
    quote:
      "Driving over a fire hose is prohibited unless instructed to do so by a " +
      "fire department official in charge.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - DID YOU KNOW? (p. 34)",
    url: p4(34),
  },
  {
    key: "speed-defaults",
    quote:
      "50 km (30 miles) per hour in any urban district; 80 km (50 miles) per hour " +
      "in other locations or as otherwise posted.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.2 Speed restrictions (p. 35)",
    url: p4(35),
  },
  {
    key: "speed-endanger",
    quote:
      "No person is permitted to operate a vehicle upon any highway at such a " +
      "speed as to endanger the life, limb or property of any person, including " +
      "their own.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.2 Speed restrictions (p. 35)",
    url: p4(35),
  },
  {
    key: "slow-drivers",
    quote:
      "It is an offence under the Act for any person to drive at such a slow " +
      "speed as to block the normal and reasonable movement of traffic, except " +
      "when reduced speed is necessary for safe operation.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.3 Slow drivers (p. 35)",
    url: p4(35),
  },
  {
    key: "slow-driver-pull-off",
    quote:
      "Should a driver find it necessary to drive at a slow speed on the open " +
      "highway, they must always keep to the right. If traffic is being slowed " +
      "down, the driver must pull off the road occasionally and give the traffic " +
      "a chance to pass.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.3 Slow drivers (p. 35)",
    url: p4(35),
  },
  {
    key: "overtaken-give-way",
    quote:
      "the driver of an overtaken vehicle must move to the right in favour of the " +
      "overtaking vehicle upon hearing audible signal and shall not increase the " +
      "speed of his/her vehicle until completely passed by the overtaking vehicle.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.4 Passing a vehicle (p. 35)",
    url: p4(35),
  },
  {
    key: "pass-on-right",
    quote:
      "It is an offence to pass another vehicle on the right except when: " +
      "overtaking a vehicle making a left turn or signaling a left turn; on a one " +
      "way street; on streets and highways marked for multi-lanes going in the " +
      "same direction.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.4 Passing a vehicle (p. 35)",
    url: p4(35),
  },
  {
    key: "no-shoulder-pass",
    quote: "You must not drive off the roadway onto the shoulder to pass another vehicle.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.4 Passing a vehicle (p. 35)",
    url: p4(35),
  },
  {
    key: "left-of-roadway-prohibited",
    quote:
      "b) When approaching within 30 metres (100 feet) of or crossing any " +
      "intersection or railroad grade crossing; or c) When the view is obstructed " +
      "upon approaching within 30 metres (100 feet) of any bridge, viaduct or tunnel).",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.4 Passing a vehicle (p. 36)",
    url: p4(36),
  },
  {
    key: "school-bus-stop-5m",
    quote:
      "you must bring your vehicle to a full stop not less than 5 metres (16 " +
      "feet) in front or rear of the school bus and wait while passengers are " +
      "embarking or disembarking. You must not proceed until the school bus " +
      "resumes motion or until signalled by the school bus driver to proceed.",
    source: HANDBOOK,
    section:
      "Part 4: Traffic on the highway - 4.5 School zones, school buses and construction zones (p. 36)",
    url: p4(36),
  },
  {
    key: "school-zone-speed-handbook",
    quote:
      "The speed limit for school zones is 50 km/h in an urban district unless a " +
      "different rate of speed has been posted. This speed limit for school zones " +
      "is in effect between the hours of 7:30 a.m. and 4:00 p.m. on the days " +
      "which school is in session.",
    source: HANDBOOK,
    section:
      "Part 4: Traffic on the highway - 4.5 School zones, school buses and construction zones (p. 36)",
    url: p4(36),
  },
  {
    key: "construction-zone-speed",
    quote:
      "This speed limit is 50 km/h in an urban district unless a different rate " +
      "of speed has been posted. In sections of the zone where no speed limit has " +
      "been posted, the limit is 80 km/h.",
    source: HANDBOOK,
    section:
      "Part 4: Traffic on the highway - 4.5 School zones, school buses and construction zones (p. 36)",
    url: p4(36),
  },
  {
    key: "zone-fines-doubled",
    quote: "Fines for speeding in a school or construction zone are DOUBLED.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - DID YOU KNOW? (p. 36)",
    url: p4(36),
  },
  {
    key: "right-half",
    quote:
      "Upon all highways of sufficient width, vehicles must be operated on the " +
      "right half of the highway and slow moving traffic must move close to the " +
      "right hand edge or curb.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.6 Drive on right half of highway (p. 37)",
    url: p4(37),
  },
  {
    key: "keep-right-lane",
    quote:
      "A vehicle must be driven in the lane nearest the right hand edge of the " +
      "highway, except when preparing to make a left turn or when passing another " +
      "vehicle.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.7 Laned traffic and pavement markings (p. 37)",
    url: p4(37),
  },
  {
    key: "single-lane",
    quote:
      "Where a street or highway has been divided into lanes for traffic, a " +
      "vehicle must be driven within a single lane.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.7 Laned traffic and pavement markings (p. 37)",
    url: p4(37),
  },
  {
    key: "white-lines",
    quote:
      "White lines are used to divide lanes of traffic moving in the same " +
      "direction. White lines also may mark the right shoulder of the highway.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - White lines (p. 37)",
    url: p4(37),
  },
  {
    key: "yellow-lines",
    quote: "Yellow lines on the pavement divide traffic moving in opposite directions.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Yellow lines (p. 37)",
    url: p4(37),
  },
  {
    key: "double-yellow",
    quote:
      "When the centre markings consist of two yellow lines and the solid line is " +
      "on your side you are prohibited from passing. When the broken line is on " +
      "your side it indicates that passing is permitted if traffic and other " +
      "conditions allow.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Yellow lines (p. 37)",
    url: p4(37),
  },
  {
    key: "single-yellow",
    quote:
      "A single broken yellow line marking the centre of a highway permits " +
      "passing when traffic, sight distance and other conditions are ideal. A " +
      "solid single yellow line indicates that passing is not permitted.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Yellow lines (p. 37)",
    url: p4(37),
  },
  {
    key: "blind-spot",
    quote:
      "Your rear view mirror will not show a car in the lane next to yours when " +
      "its front bumper is about even with or ahead of your rear bumper.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.8 Blind spots (p. 38)",
    url: p4(38),
  },
  {
    key: "blind-spot-shoulder",
    quote: "Always check over your shoulder before changing lanes.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.8 Blind spots (p. 38)",
    url: p4(38),
  },
  {
    key: "passing-no-speeding",
    quote: "7. Accelerate. (You are not permitted to exceed the posted speed limit).",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.9 Passing (p. 38)",
    url: p4(38),
  },
  {
    key: "passing-move-right",
    quote:
      "9. Move right when you can see in your rear view mirror the headlights of " +
      "the vehicle you have passed.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.9 Passing (p. 38)",
    url: p4(38),
  },
  {
    key: "passing-low-beam",
    quote:
      "When approaching at night use low beam headlights until you have started " +
      "to pass.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Caution (p. 39)",
    url: p4(39),
  },
  {
    key: "passing-give-way",
    quote:
      "If another driver wants to pass you and gives audible warning, you must " +
      "give way by driving to the right and must not increase your speed until " +
      "the driver has completed the passing procedure.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Caution (p. 39)",
    url: p4(39),
  },
  {
    key: "pass-150-view",
    quote:
      "it is illegal to pass or drive left of the centre of the highway on a " +
      "curve or when approaching the crest of a hill where your view along the " +
      "highway is obstructed within a distance of 150 metres (500 feet) or where " +
      "the pavement markings prohibit.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Caution (p. 39)",
    url: p4(39),
  },
  {
    key: "signal-required-when",
    quote:
      "The law requires you to signal other drivers of your intention to stop or " +
      "decrease the speed of your vehicle, turn to the left or the right, change " +
      "from one lane of traffic to another lane of traffic, leave the roadway or " +
      "set your vehicle in motion from a parked position.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.10 Signalling (p. 39)",
    url: p4(39),
  },
  {
    key: "signal-30-metres",
    quote: "All signals shall be given at least 30 metres (100 feet) before making a turn.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.10 Signalling (p. 39)",
    url: p4(39),
  },
  {
    key: "signal-hand-arm",
    quote:
      "Signals must be given by signalling devices, brake light or - in " +
      "situations where the signaling device is not working - hand and arm.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.10 Signalling (p. 39)",
    url: p4(39),
  },
  {
    key: "row-not-absolute",
    quote:
      "The fact that you believe you should be granted the right of way does not " +
      "necessarily relieve you from responsibility for a collision.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.11 Right of Way (p. 40)",
    url: p4(40),
  },
  {
    key: "row-entering-highway",
    quote:
      "Before entering a highway you must yield the right of way to all vehicles " +
      "approaching on the highway.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.11 Right of Way (p. 40)",
    url: p4(40),
  },
  {
    key: "row-driveway-stop",
    quote:
      "Before emerging from an alley, driveway or building in a business or " +
      "residential district, you must stop your vehicle immediately prior to " +
      "driving on the sidewalk or on the sidewalk area extending across any alleyway.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.11 Right of Way (p. 40)",
    url: p4(40),
  },
  {
    key: "row-sidewalk-pedestrians",
    quote:
      "Before entering an alley, driveway or building or across a sidewalk, you " +
      "must yield the right of way to pedestrians crossing the entrance to the " +
      "alley, driveway or building or on the sidewalk at the point where your " +
      "vehicle is crossing.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.11 Right of Way (p. 40)",
    url: p4(40),
  },
  {
    key: "row-intersection-entered",
    quote:
      "When approaching an intersection you must yield the right of way to a " +
      "vehicle which has entered the intersection.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Intersection (p. 40)",
    url: p4(40),
  },
  {
    key: "row-right-hand-rule",
    quote:
      "When two vehicles enter an uncontrolled intersection (three or four way " +
      "stop signs) at approximately the same time, you must yield to the driver " +
      "on your right.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Intersection (p. 40)",
    url: p4(40),
  },
  {
    key: "row-left-turn",
    quote:
      "The driver of a vehicle intending to turn to the left must yield to any " +
      "vehicle approaching from the opposite direction which is within an " +
      "intersection or so close as to constitute an immediate hazard. Keep wheels " +
      "straight until ready to turn.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Left turn (p. 40)",
    url: p4(40),
  },
  {
    key: "roundabout-direction",
    quote:
      "When driving in a roundabout (also referred to as a rotary or traffic " +
      "circle) you must drive in a counter-clockwise direction.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Roundabouts (p. 41)",
    url: p4(41),
  },
  {
    key: "roundabout-yield",
    quote:
      "If you are approaching a roundabout, you must yield the right of way to " +
      "traffic already in the roundabout and which is approaching so closely as " +
      "to constitute an immediate hazard.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Roundabouts (p. 41)",
    url: p4(41),
  },
  {
    key: "roundabout-steps",
    quote:
      "5. Do not change lanes while in a multi-lane roundabout. 6. Do not stop in " +
      "the roundabout. 7. As you approach your exit, turn on your right turn signal.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Steps for driving in a roundabout (p. 41)",
    url: p4(41),
  },
  {
    key: "roundabout-trucks",
    quote:
      "Always give large trucks plenty of room in a roundabout as they need more " +
      "space. Do not attempt to pass or drive side-by-side a large truck inside a " +
      "roundabout.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Roundabouts (p. 41)",
    url: p4(41),
  },
  {
    key: "railway-stop-5m",
    quote:
      "the driver must bring their vehicle to a stop not less than 5 metres (16 " +
      "feet) from the nearest rail and shall not proceed until they can do so safely.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.12 Railway crossings (p. 41)",
    url: p4(41),
  },
  {
    key: "railway-no-gate",
    quote:
      "A driver must not drive their vehicle around any gate or barrier used to " +
      "prevent vehicles from crossing the tracks.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.12 Railway crossings (p. 41)",
    url: p4(41),
  },
  {
    key: "railway-room-across",
    quote:
      "a driver should never start to cross railroad tracks unless there is " +
      "sufficient room across the tracks to accommodate the whole vehicle in " +
      "order to prevent stopping across any part of the tracks.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.12 Railway crossings (p. 42)",
    url: p4(42),
  },
  {
    key: "railway-buses-stop",
    quote:
      "All buses, vehicles carrying passengers for hire or any vehicle carrying " +
      "an explosive substance or flammable liquids as cargo are required to stop, " +
      "listen and look in both directions before proceeding through a railway crossing.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.12 Railway crossings (p. 42)",
    url: p4(42),
  },
  {
    key: "yield-sign-rule",
    quote:
      "The yield sign is placed at an intersection which does not require a stop " +
      "sign but does require some control. You must yield the right of way to " +
      "traffic in the intersection or approaching so closely as to constitute an " +
      "immediate hazard.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.13 Yield sign (p. 42)",
    url: p4(42),
  },
  {
    key: "stop-sign-rule",
    quote:
      "A stop sign means you must bring your vehicle to a complete stop at the " +
      "clearly marked stop line or at the nearest crosswalk (marked or not " +
      "marked). If there is no painted crosswalk or stop line, stop just before " +
      "entering the intersection, allowing room for a pedestrian to cross.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.14 Stop sign (p. 42)",
    url: p4(42),
  },
  {
    key: "stop-sign-three-places",
    quote:
      "A At a clearly marked stop line (image A) B Before entering the nearest " +
      "crosswalk, whether marked or unmarked (image B) C At the edge of the " +
      "travelled portion of the through street or highway where the driver has a " +
      "view of approaching traffic on the intersecting highway (image C)",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.14 Stop sign (p. 42)",
    url: p4(42),
  },
  {
    key: "red-light-rule",
    quote:
      "You must bring your vehicle to a stop at a clearly marked stop line or, if " +
      "none, before entering the nearest crosswalk or, if none, before entering " +
      "the intersection.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.15 Traffic control signals (p. 43)",
    url: p4(43),
  },
  {
    key: "right-on-red",
    quote:
      "Unless a sign indicates otherwise, a right turn may be made on a red light " +
      "provided the vehicle is first brought to a full stop and the right of way " +
      "of pedestrians and other traffic is considered.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Red light (p. 43)",
    url: p4(43),
  },
  {
    key: "red-flasher",
    quote:
      "Red flasher light means STOP - a complete stop. The rule respecting a red " +
      "flasher light is the same as that of a stop sign. After stopping, proceed " +
      "only when the way is clear.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Red light (p. 43)",
    url: p4(43),
  },
  {
    key: "green-light-rule",
    quote:
      "Motorists and pedestrians may proceed unless a specific pedestrian light " +
      "is in operation.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Green light (p. 43)",
    url: p4(43),
  },
  {
    key: "amber-light",
    quote:
      "Caution: red light coming up. If too close to stop safely or you have " +
      "already entered the intersection, proceed with caution.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Yellow or amber light (p. 43)",
    url: p4(43),
  },
  {
    key: "amber-flasher",
    quote:
      "Yellow or amber flasher light means SLOW DOWN - and be extra careful of " +
      "intersecting traffic, whether you have right of way or not. Proceed with caution.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Yellow or amber light (p. 43)",
    url: p4(43),
  },
  {
    key: "green-arrow-red",
    quote:
      "This signal indicates that motorists may turn cautiously in the direction " +
      "the arrow is pointing, after yielding to pedestrians and other traffic.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Red light - Green arrow (p. 43)",
    url: p4(43),
  },
  {
    key: "flashing-green",
    quote:
      "This is an advance green light which means you can turn left if it is safe " +
      "to do so.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Green flashing traffic light (p. 44)",
    url: p4(44),
  },
  {
    key: "pedestrian-light",
    quote:
      "All vehicles must stop until traffic light changes to green and then " +
      "proceed cautiously after pedestrians have cleared the crosswalk.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Red or amber pedestrian light (p. 44)",
    url: p4(44),
  },
  {
    key: "peace-officer-directing",
    quote:
      "When a Peace Officer is directing traffic and clearly directs you, " +
      "regardless of signs or signals, follow the direction of the Peace Officer " +
      "with caution.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.16 Peace Officer (p. 44)",
    url: p4(44),
  },
  {
    key: "crosswalk-guard",
    quote:
      "Crosswalk guards are authorized to stop traffic for pedestrians crossing " +
      "at crosswalks only.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.17 Crosswalk guard (p. 44)",
    url: p4(44),
  },
  {
    key: "turn-finish-lane",
    quote: "7. Finish the turn in the proper lane which is the lane nearest you.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.18 Turning at intersections (p. 45)",
    url: p4(45),
  },
  {
    key: "turn-wheels-straight",
    quote:
      "If you are stopped in position to make a left turn and waiting for " +
      "opposing traffic, do not turn the steering wheel to the left until you are " +
      "sure you can complete the turn.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.18 Turning at intersections (p. 45)",
    url: p4(45),
  },
  {
    key: "turn-speed",
    quote:
      "To make the turn safely, slow down before you reach the crosswalk and " +
      "complete the turn at the same speed at which you entered the intersection.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.18 Turning at intersections (p. 45)",
    url: p4(45),
  },
  {
    key: "two-way-left-turn-lane",
    quote: "Caution: The two-way left-turn lane is NOT intended as a passing lane.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Two-way left-turn lane (p. 46)",
    url: p4(46),
  },
  {
    key: "parking-rural-highway",
    quote:
      "When leaving a vehicle standing on a rural highway it must be moved off " +
      "the paved or main travelled part of the roadway, unless the vehicle is so " +
      "disabled that it cannot be moved.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.20 Parking (p. 47)",
    url: p4(47),
  },
  {
    key: "parking-clearance",
    quote:
      "Under no circumstances can a vehicle be parked on a highway unless there " +
      "are five metres (16 feet) of unobstructed roadway left for the free " +
      "passage of other traffic and the parked vehicle can be clearly seen for a " +
      "distance of 60 metres (200 feet) in each direction.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.20 Parking (p. 47)",
    url: p4(47),
  },
  {
    key: "parking-unattended",
    quote:
      "Whenever a vehicle is left unattended, the front wheels should be turned " +
      "to the curb or side of the highway and the parking brake must be " +
      "effectively set.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.20 Parking (p. 47)",
    url: p4(47),
  },
  {
    key: "parking-night-lights",
    quote:
      "Whenever you park a vehicle on a rural highway at night or whenever lights " +
      "are required, you must have at least one white or amber light showing from " +
      "the front on the roadway side of your vehicle and at least one red light " +
      "showing from the rear on the roadway side of your vehicle.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.20 Parking (p. 47)",
    url: p4(47),
  },
  {
    key: "parking-hill",
    quote:
      "PARKING ON A HILL Uphill or downhill without curb: Steering wheel turned " +
      "right. Uphill with curb: Steering wheel turned left. Downhill with curb: " +
      "Steering wheel turned right.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.20 Parking (p. 47)",
    url: p4(47),
  },
  {
    key: "parking-hydrant",
    quote:
      "within 5 metres (16 feet) from the point on a curb opposite a fire " +
      "hydrant; on a crosswalk; within 5 metres (16 feet) of a crosswalk at an " +
      "intersection;",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Parking regulations (p. 48)",
    url: p4(48),
  },
  {
    key: "parking-stop-sign",
    quote:
      "within 10 metres (32 feet) upon the approach to any flashing beacon, stop " +
      "sign or traffic control signal located at the side of a roadway;",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Parking regulations (p. 48)",
    url: p4(48),
  },
  {
    key: "parking-railway",
    quote: "within 15 metres (50 feet) of the nearest rail of a railroad crossing;",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Parking regulations (p. 48)",
    url: p4(48),
  },
  {
    key: "parking-fire-station",
    quote:
      "within 10 metres (32 feet) of the driveway entrance to any fire station " +
      "and on the side of a street opposite to any fire station within 25 metres " +
      "(82 feet) of said entrance;",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Parking regulations (p. 48)",
    url: p4(48),
  },
  {
    key: "parking-curb-50cm",
    quote: "more than 50 centimetres (20 inches) from a curb;",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Parking regulations (p. 48)",
    url: p4(48),
  },
  {
    key: "parking-bridge",
    quote:
      "upon any bridge or other elevated structure upon a highway or within a " +
      "highway tunnel;",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Parking regulations (p. 48)",
    url: p4(48),
  },
  {
    key: "parking-snow-plough",
    quote: "upon a provincial highway so as to interfere with snow ploughing operations.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Parking regulations (p. 48)",
    url: p4(48),
  },
  {
    key: "parallel-parking-finish",
    quote:
      "Straighten wheels and pull up to within 60 centimetres (two feet) of car " +
      "ahead and close to the curb",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Parallel parking (p. 49)",
    url: p4(49),
  },
  {
    key: "backing-speed",
    quote:
      "Backing procedures should be completed at a speed no faster than a person " +
      "walking quickly.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.21 Backing (p. 50)",
    url: p4(50),
  },
  {
    key: "coasting",
    quote: "Coasting a vehicle with the transmission in neutral is prohibited.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.22 Miscellaneous traffic provisions (p. 50)",
    url: p4(50),
  },
  {
    key: "load-at-curb",
    quote:
      "No person shall stop a vehicle to load or unload goods other than at the " +
      "curb or shoulder of the roadway.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.22 Miscellaneous traffic provisions (p. 50)",
    url: p4(50),
  },
  {
    key: "riding-in-back",
    quote:
      "No person shall operate a motor vehicle on a highway with a person riding " +
      "on a portion of the motor vehicle that is not designed or normally used " +
      "for carrying passengers",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Riding in the back portion of a vehicle (p. 51)",
    url: p4(51),
  },
  {
    key: "dont-block-intersection",
    quote:
      "Except when preparing for a turn, do not enter an intersection or a marked " +
      "crosswalk unless there is enough space in the roadway on the other side of " +
      "the intersection for your vehicle to completely clear the intersection or " +
      "marked crosswalk.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Intersections and crosswalks (p. 51)",
    url: p4(51),
  },
  {
    key: "pedestrian-yield",
    quote:
      "As the driver of a vehicle you are required to yield the right of way to a " +
      "pedestrian, which includes a person in a wheelchair, within a marked " +
      "crosswalk or within an unmarked crosswalk at the end of a block",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.23 Pedestrians (p. 51)",
    url: p4(51),
  },
  {
    key: "no-pass-stopped-at-crosswalk",
    quote:
      "Whenever a vehicle has stopped at a marked crosswalk or at an intersection " +
      "to permit a pedestrian to cross the roadway, it is an offence for the " +
      "driver of any other vehicle approaching from the rear to overtake and pass " +
      "the stopped vehicle.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - The driver's responsibility (p. 51)",
    url: p4(51),
  },
  {
    key: "jaywalking",
    quote:
      "Every pedestrian, which includes a person in a wheelchair, crossing a " +
      "roadway at any point other than within a marked or unmarked crosswalk at " +
      "the end of a block, is required to yield the right of way to vehicles upon " +
      "the highway.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - The pedestrian's responsibility (p. 51)",
    url: p4(51),
  },
  {
    key: "walk-light",
    quote:
      "Walk light - Pedestrian traffic facing this signal may only proceed in the " +
      "crosswalk and all other traffic must yield the right of way to the " +
      "pedestrian traffic.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Walk light (p. 52)",
    url: p4(52),
  },
  {
    key: "pedestrian-walk-left",
    quote:
      "When sidewalks are not provided any pedestrian walking along and upon a " +
      "highway must, when practical, walk only on the left side of the roadway or " +
      "its shoulder facing traffic which may approach from the opposite direction.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Walking on the highway (p. 52)",
    url: p4(52),
  },
  {
    key: "pedestrian-light-clothing",
    quote:
      "Pedestrians walking on unlighted highways after dark should carry a light " +
      "or wear light coloured clothing.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Pedestrian safety (p. 53)",
    url: p4(53),
  },
  {
    key: "hitchhiking",
    quote:
      "It is an offence for any person to stand in a roadway for the purpose of " +
      "soliciting a ride from the driver of a private vehicle.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - Thumbing rides (p. 53)",
    url: p4(53),
  },
  {
    key: "horseback",
    quote:
      "Horseback riders and drivers of horse drawn vehicles are permitted to use " +
      "streets and roadways unless restricted by signs.",
    source: HANDBOOK,
    section: "Part 4: Traffic on the highway - 4.25 Horseback riding (p. 53)",
    url: p4(53),
  },

  // --- Part 5: Safe driving ---------------------------------------------
  {
    key: "seatbelt-all",
    quote:
      "All passengers that occupy a position within a vehicle equipped with " +
      "seatbelts must wear a seatbelt. The number of passengers is limited to the " +
      "number of operating seatbelts.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - 5.3 Seat belts save lives (p. 55)",
    url: p5(55),
  },
  {
    key: "seatbelt-under-16",
    quote:
      "Drivers must ensure that passengers under 16 years of age use seat belts " +
      "in vehicles equipped with seatbelts. Passengers age 16 years and older are " +
      "responsible for buckling up themselves.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - 5.3 Seat belts save lives (p. 55)",
    url: p5(55),
  },
  {
    key: "child-seat-thresholds",
    quote:
      "age of nine; weight of 36 kg (79 lbs.) ; height of 145 cm (57 inches). " +
      "Taxis, emergency vehicles and buses are exempt from these provisions.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - 5.3 Seat belts save lives (p. 56)",
    url: p5(56),
  },
  {
    key: "child-back-seat",
    quote:
      "Transport Canada recommends that children 12 years and under be properly " +
      "restrained in the back seat, especially if the vehicle is equipped with " +
      "side air bags.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - DID YOU KNOW? (p. 56)",
    url: p5(56),
  },
  {
    key: "airbag-with-belt",
    quote: "Seat belts must be used in conjunction with air bags.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - 5.3 Seat belts save lives (p. 56)",
    url: p5(56),
  },
  {
    key: "seatbelt-points",
    quote:
      "If a driver is convicted for not wearing a seat belt, they must pay a fine " +
      "and will be assigned a loss of two points on their driving record.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - 5.4 Penalties for seat belt infractions (p. 56)",
    url: p5(56),
  },
  {
    key: "seatbelt-passenger-points",
    quote:
      "there is no assessment of points against a passenger's licence or the " +
      "driver should a passenger not be wearing a seat belt.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - 5.4 Penalties for seat belt infractions (p. 57)",
    url: p5(57),
  },
  {
    key: "studded-tires-dates",
    quote: "You are permitted to use studded tires from October 15 to April 30 of each year.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - DID YOU KNOW? (p. 57)",
    url: p5(57),
  },
  {
    key: "crash-causes",
    quote:
      "The most common causes of highway crashes in New Brunswick are: " +
      "Inattention/driver distraction Operating too fast for conditions Failure " +
      "to grant right of way Impaired driving Obstructed view Following too " +
      "closely Improper use of lanes",
    source: HANDBOOK,
    section: "Part 5: Safe driving - 5.6 The driver (p. 58)",
    url: p5(58),
  },
  {
    key: "distracted-devices",
    quote:
      "The use of hand-held electronic devices while operating a motor vehicle is " +
      "prohibited. This includes hand-held mobile devices for calling or texting, " +
      "portable global positioning systems (GPS) and entertainment devices such " +
      "as video game players and mp3 players.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - Distracted driving (p. 58)",
    url: p5(58),
  },
  {
    key: "distracted-gps",
    quote:
      "The law also prohibits the manual programming or adjusting of any GPS unit " +
      "while driving.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - Distracted driving (p. 58)",
    url: p5(58),
  },
  {
    key: "speed-ideal-conditions",
    quote:
      "Speed limits indicate the maximum speed at which it is safe to drive under " +
      "ideal conditions",
    source: HANDBOOK,
    section: "Part 5: Safe driving - Speed (p. 59)",
    url: p5(59),
  },
  {
    key: "speed-doubled-impact",
    quote:
      "The higher the speed, the longer it takes to stop a vehicle and the " +
      "greater the force of impact in the event of collision. When the speed is " +
      "doubled, the impact on striking an object is four times as great.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - Speed (p. 59)",
    url: p5(59),
  },
  {
    key: "reaction-distance-50",
    quote:
      "your car travelling at 50 km/h will go 10 metres (about two car lengths) " +
      "before you can even start to apply the brakes.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - Stopping (p. 59)",
    url: p5(59),
  },
  {
    key: "steering-wheel-position",
    quote:
      "Steering wheel: Keep both hands on the steering wheel, usually at the 10 " +
      "and 2 o'clock positions.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - Driving posture (p. 60)",
    url: p5(60),
  },
  {
    key: "foot-controls",
    quote: "Always use your right foot to operate the accelerator and brake pedal.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - Driving posture (p. 60)",
    url: p5(60),
  },
  {
    key: "two-second-rule",
    quote:
      "The two-second interval is a good way to learn to recognize safe following " +
      "distance. Just watch the vehicle ahead of you pass some definite point on " +
      "the highway, such as a sign post. Then count to yourself \"one thousand and " +
      "one, one thousand and two\".",
    source: HANDBOOK,
    section: "Part 5: Safe driving - Following (p. 61)",
    url: p5(61),
  },
  {
    key: "two-second-unfavourable",
    quote:
      "This rule applies to favourable driving conditions. Unfavourable " +
      "conditions call for lower speed and a longer count.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - Following (p. 61)",
    url: p5(61),
  },
  {
    key: "car-length-20km",
    quote:
      "Another equally valid system is to allow at least one car length for each " +
      "20 km of speed.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - Following (p. 61)",
    url: p5(61),
  },
  {
    key: "defensive-driving",
    quote:
      "Defensive driving means driving in anticipation of possible collision " +
      "situations and being prepared to avoid them.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - Defensive driving (p. 61)",
    url: p5(61),
  },
  {
    key: "hazard-cues",
    quote:
      "A ball bouncing on the street may mean a child or animal running out into " +
      "the roadway; Exhaust smoke coming from a vehicle could indicate a driver " +
      "ready to pull out;",
    source: HANDBOOK,
    section: "Part 5: Safe driving - Defensive driving (p. 61)",
    url: p5(61),
  },
  {
    key: "animals-dawn-dusk",
    quote:
      "Animal crossing signs warn drivers where there is a known danger of large " +
      "animals, such as moose and deer crossing the roads. Drivers should use " +
      "caution especially at dawn and dusk.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - Animals on the highway (p. 61)",
    url: p5(61),
  },
  {
    key: "white-cane",
    quote:
      "By law, the use of the white cane is restricted to people with visual " +
      "impairment. When you see a pedestrian with a white cane you should " +
      "exercise extreme caution.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - 5.7 White cane (p. 62)",
    url: p5(62),
  },
  {
    key: "crash-first-steps",
    quote:
      "Prevent a second crash. Pull completely off the road far enough away from " +
      "the crash scene to protect the vehicles from further collisions with other " +
      "cars. Display your four-way flashers to warn other vehicles.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - If you arrive first at a collision (p. 62)",
    url: p5(62),
  },
  {
    key: "crash-dont-move",
    quote:
      "Do not move the injured. Unless they are in a burning car or other " +
      "immediate danger, leave them in the car until trained help arrives.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - If you arrive first at a collision (p. 62)",
    url: p5(62),
  },
  {
    key: "crash-impact-storeys",
    quote:
      "At 30 km/h the impact is the same as if your car fell from the top of a " +
      "one storey building. At 60 km/h (double the speed) the impact is the same " +
      "as if your car fell from the top of a four storey building (four times the " +
      "force of impact).",
    source: HANDBOOK,
    section: "Part 5: Safe driving - DID YOU KNOW? (p. 62)",
    url: p5(62),
  },
  {
    key: "crash-bleeding",
    quote:
      "To stop the bleeding put the cleanest available pad directly on the wound " +
      "and apply pressure.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - 5.8 Crash (p. 63)",
    url: p5(63),
  },
  {
    key: "impaired-under-21",
    quote:
      "All motorists in New Brunswick under the age of 21 must maintain a zero " +
      "percent Blood Alcohol Concentration (BAC) while driving. There is also a " +
      "zero tolerance program in place for drug-impaired driving for novice " +
      "drivers and those under 21 years of age.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - 5.9 Impaired driving (p. 64)",
    url: p5(64),
  },
  {
    key: "alcohol-wearing-off",
    quote:
      "Another danger develops when the alcohol starts to \"wear off\". You can " +
      "easily convince yourself that you no longer feel the effects and are " +
      "perfectly sober. This state of mind is a delusion.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - Alcohol (p. 64)",
    url: p5(64),
  },
  {
    key: "drugs-otc",
    quote:
      "Some prescription or over-the-counter drugs are known to cause inattention " +
      "and drowsiness, such as those used to treat common infections like colds " +
      "or flu. Avoid driving if you are taking these medications, and never mix " +
      "with alcohol.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - Drugs and medication (p. 65)",
    url: p5(65),
  },
  {
    key: "drug-seize",
    quote:
      "Police officers who stop a driver showing signs of impairment by drugs - " +
      "including cannabis - have the power to seize vehicles and suspend a " +
      "driver's licence on the spot.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - Consequences for drug-impaired driving (p. 65)",
    url: p5(65),
  },
  {
    key: "criminal-bac-limit",
    quote:
      "It is prohibited under the Criminal Code of Canada to drive with a " +
      "blood-alcohol concentration (BAC) of 80 milligrams or more (mg) of alcohol " +
      "per 100 millilitres (ml) of blood (0.08 percent or more).",
    source: HANDBOOK,
    section: "Part 5: Safe driving - Consequences for alcohol-impaired driving (p. 65)",
    url: p5(65),
  },
  {
    key: "warning-range",
    quote:
      "if you are caught driving with a BAC level within the \"warning range\" of " +
      "0.05 and 0.08 percent, you will face penalties under New Brunswick's Motor " +
      "Vehicle Act.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - Consequences for alcohol-impaired driving (p. 65)",
    url: p5(65),
  },
  {
    key: "impound-warning-range",
    quote:
      "For a driver caught with a BAC level within the warning range of 0.05 and " +
      "0.08, vehicles will be impounded for: first offence within five years: " +
      "three days (discretionary); second offence within five years: seven days " +
      "(discretionary); third or more offences within five years: seven days " +
      "(mandatory).",
    source: HANDBOOK,
    section: "Part 5: Safe driving - Vehicle Impoundment Program (p. 65)",
    url: p5(65),
  },
  {
    key: "impound-over-08",
    quote:
      "First suspension for blood alcohol content (BAC) 80mg or over - OR - " +
      "failure or refusal to provide breath sample within 10 years: 30 days (mandatory)",
    source: HANDBOOK,
    section: "Part 5: Safe driving - Vehicle Impoundment Program (p. 66)",
    url: p5(66),
  },
  {
    key: "impound-novice",
    quote:
      "There is a mandatory seven-day vehicle impoundment period for novice " +
      "drivers who violate the zero tolerance rule.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - Vehicle Impoundment Program (p. 66)",
    url: p5(66),
  },
  {
    key: "interlock-mandatory",
    quote:
      "Enrollment in the ignition interlock program is mandatory for all drivers " +
      "convicted for driving while impaired by alcohol or failure or refusal to " +
      "comply with a demand under the Criminal Code.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - Ignition Interlock Program (p. 66)",
    url: p5(66),
  },
  {
    key: "24-hour-suspension",
    quote:
      "In New Brunswick, police officers have discretion under the Motor Vehicle " +
      "Act to suspend a driver's licence for 24 hours if they have concerns about " +
      "the safety of the driver and others who share the road.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - 24-hour suspension for driver unfitness (p. 66)",
    url: p5(66),
  },
  {
    key: "refusal-same-penalty",
    quote:
      "A conviction for failure or refusal to comply will result in the same " +
      "penalties as that of a driver convicted of impaired driving.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - Failure or refusal to comply with a demand (p. 67)",
    url: p5(67),
  },
  {
    key: "assume-no-row",
    quote:
      "You must not assume that you will be given the right of way. The other " +
      "person may not think that they should grant it.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - 5.10 Some rules for safe driving (p. 67)",
    url: p5(67),
  },
  {
    key: "no-pass-hill-curve",
    quote: "Do not pass on a hill or curve at any time.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - 5.10 Some rules for safe driving (p. 67)",
    url: p5(67),
  },
  {
    key: "never-park-facing-traffic",
    quote: "Never park on the left side of the roadway facing traffic.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - 5.10 Some rules for safe driving (p. 67)",
    url: p5(67),
  },
  {
    key: "no-pass-approach",
    quote:
      "Except when driving in two or more marked lanes going in the same " +
      "direction, never pass on the approach to an intersection, a bridge or a " +
      "railroad crossing.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - 5.10 Some rules for safe driving (p. 67)",
    url: p5(67),
  },
  {
    key: "leaving-parked-position",
    quote:
      "When leaving a parked position check oncoming traffic and signal, check " +
      "your blind spot as well as your mirrors. Pull out only when way is clear, " +
      "both behind and in front.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - 5.10 Some rules for safe driving (p. 67)",
    url: p5(67),
  },
  {
    key: "sound-horn-passing",
    quote:
      "When passing, check for other traffic, ahead and behind. Signal before " +
      "changing lanes and sound your horn for the driver you are passing.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - 5.10 Some rules for safe driving (p. 68)",
    url: p5(68),
  },
  {
    key: "pass-one-car",
    quote: "On a two lane highway, do not try to pass more than one car at a time.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - 5.10 Some rules for safe driving (p. 68)",
    url: p5(68),
  },
  {
    key: "bicycle-one-metre-rules",
    quote:
      "Remember to provide one-metre clearance when passing a bicyclist. Do not " +
      "tailgate. Watch for them in your mirror. They may be riding in your \"blind spot\".",
    source: HANDBOOK,
    section: "Part 5: Safe driving - 5.10 Some rules for safe driving (p. 68)",
    url: p5(68),
  },
  {
    key: "drowsy",
    quote:
      "Stop driving when you become drowsy. Pull off the highway as soon as it is " +
      "safe to do so. Drowsiness is one of the greatest dangers in highway driving.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - 5.10 Some rules for safe driving (p. 68)",
    url: p5(68),
  },
  {
    key: "cruise-control-wet",
    quote:
      "If your vehicle is equipped with cruise control, you should avoid using it " +
      "in wet or slippery conditions.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - Friction (p. 69)",
    url: p5(69),
  },
  {
    key: "abs-braking",
    quote:
      "If your vehicle is equipped with an anti-lock braking system (ABS), apply " +
      "steady pressure to the brakes and do not pump the brake pedal.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - Stopping on ice (p. 69)",
    url: p5(69),
  },
  {
    key: "no-abs-pump",
    quote:
      "If you have to stop on a slippery surface and your vehicle does not have " +
      "ABS, it is advisable to pump the brake pedal - in and out - gradually " +
      "slowing the vehicle without locking the wheels.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - Stopping on ice (p. 69)",
    url: p5(69),
  },
  {
    key: "first-rain",
    quote:
      "The first few drops of rain are danger signals telling you to slow down " +
      "and use extra caution.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - Rain (p. 70)",
    url: p5(70),
  },
  {
    key: "hydroplaning-speeds",
    quote:
      "In a passenger car, partial hydroplaning starts at about 55 km/h and " +
      "increases with speed to about 85 km/h at which point the tires may be " +
      "totally up on the water.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - Hydroplaning (p. 70)",
    url: p5(70),
  },
  {
    key: "hydroplaning-response",
    quote:
      "The best thing to do is to take your foot off the accelerator and let the " +
      "car slow down.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - Hydroplaning (p. 70)",
    url: p5(70),
  },
  {
    key: "skid-causes",
    quote:
      "Skidding can be caused by: excessive speed excessive acceleration sudden " +
      "and/or excessive braking abrupt steering",
    source: HANDBOOK,
    section: "Part 5: Safe driving - Skids (p. 70)",
    url: p5(70),
  },
  {
    key: "rear-wheel-skid",
    quote:
      "To correct a rear-wheel skid, remove your feet from the pedals and steer " +
      "in the direction of the skid. To correct a four-wheel skid, release the brake.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - Skids (p. 71)",
    url: p5(71),
  },
  {
    key: "front-wheel-skid",
    quote: "If the front wheels skid, take your foot off the accelerator.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - Skids (p. 71)",
    url: p5(71),
  },
  {
    key: "winter-12-times",
    quote:
      "Remember, without tire chains, it takes up to 12 times the distance to " +
      "stop on snow and ice as on dry concrete.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - Rules for winter driving (p. 72)",
    url: p5(72),
  },
  {
    key: "bridges-freeze",
    quote:
      "Remember that condensation on the pavement of bridges and overpasses " +
      "freezes before the rest of the roadway.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - Rules for winter driving (p. 72)",
    url: p5(72),
  },
  {
    key: "intersection-look-left-right",
    quote:
      "Always reduce your speed before entering the intersection and check for " +
      "oncoming traffic and pedestrians, first to the left and then to the right, " +
      "to make sure the way is clear before proceeding.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - 5.12 Intersections (p. 72)",
    url: p5(72),
  },
  {
    key: "tire-blowout",
    quote:
      "If a tire blows out do not apply the brake. Let up on the accelerator. " +
      "Keep the clutch engaged, make sure you have a firm grip on the steering " +
      "wheel with both hands and slow down gradually until you have come to a stop.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - 5.13 Tire blow-out (p. 73)",
    url: p5(73),
  },
  {
    key: "off-pavement",
    quote:
      "If a wheel runs off the pavement onto the shoulder of the road, remove " +
      "your foot from the accelerator and steer straight ahead.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - 5.14 Running off the pavement (p. 73)",
    url: p5(73),
  },
  {
    key: "curves",
    quote:
      "To drive around a curve safely: 1. reduce speed when approaching and 2. " +
      "gradually accelerate after entering the curve.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - 5.15 Curves (p. 73)",
    url: p5(73),
  },
  {
    key: "curve-no-uturn",
    quote: "Never stop, park or make a U-turn in a curve.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - 5.15 Curves (p. 73)",
    url: p5(73),
  },
  {
    key: "overdrive-headlights",
    quote:
      "It is particularly important not to overdrive your headlights - that is, " +
      "to drive at so fast a speed that you cannot stop the car within the " +
      "distance in which your headlights will reveal objects on the highway.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - 5.16 Driving at night (p. 74)",
    url: p5(74),
  },
  {
    key: "fog-low-beam",
    quote:
      "Drive using low-beam headlights which throw light down onto the road " +
      "rather than into the fog.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - 5.17 Driving in fog (p. 74)",
    url: p5(74),
  },
  {
    key: "fog-no-parking-lights",
    quote: "Do not use parking lights under these conditions.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - 5.17 Driving in fog (p. 74)",
    url: p5(74),
  },
  {
    key: "fog-creep",
    quote:
      "In dense fog, creep. Most collisions in fog are caused by overdriving " +
      "visibility distance - in other words, travelling too fast.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - 5.17 Driving in fog (p. 74)",
    url: p5(74),
  },
  {
    key: "drl-law",
    quote:
      "It is the law to have your headlights on at all times if your daytime " +
      "running lights are not operational or your vehicle is not equipped with " +
      "daytime running lights.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - DID YOU KNOW? (p. 74)",
    url: p5(74),
  },
  {
    key: "climbing-lane-yield",
    quote:
      "In the situation of either a climbing lane or slow traffic lane, at the " +
      "end the driver in the right hand lane must yield to the driver in the left lane.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - 5.18 Limited access highway (p. 75)",
    url: p5(75),
  },
  {
    key: "acceleration-lane",
    quote:
      "When entering the highway use the acceleration lane to increase speed when " +
      "merging into through traffic.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - Entrance and exit ramps (p. 75)",
    url: p5(75),
  },
  {
    key: "never-stop-on-roadway",
    quote: "Never stop on the travelled portion of the roadway even if you miss an exit.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - Entrance and exit ramps (p. 75)",
    url: p5(75),
  },
  {
    key: "miss-exit",
    quote: "If you pass your exit, drive to the next one. Never back up on a highway.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - Entrance and exit ramps (p. 76)",
    url: p5(76),
  },
  {
    key: "continuity-lines",
    quote:
      "Continuity lines are painted on the highway at entry and exit ramps. They " +
      "indicate the separation between the through lane and the entry/exit ramps.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - Continuity lines (p. 76)",
    url: p5(76),
  },
  {
    key: "zipper-merge",
    quote:
      "Executing a zipper merge means going as far as you can in that ending lane " +
      "until you reach the barrier and then merging with traffic into the other lane.",
    source: HANDBOOK,
    section: "Part 5: Safe driving - Zipper Merge (p. 76)",
    url: p5(76),
  },

  // --- Part 6: Sharing the road -----------------------------------------
  {
    key: "truck-right-turn-swing",
    quote:
      "Right turn - may require the driver to swing left before turning right. " +
      "NEVER attempt to move into this open space.",
    source: HANDBOOK,
    section: "Part 6: Sharing the road - 6.2 Drivers and large commercial vehicles (p. 78)",
    url: p6(78),
  },
  {
    key: "truck-blind-spots",
    quote:
      "Large vehicles have very large blind spots - always keep eye contact with " +
      "the driver. Remember, if you cannot see the driver, the driver cannot see you.",
    source: HANDBOOK,
    section: "Part 6: Sharing the road - 6.2 Drivers and large commercial vehicles (p. 78)",
    url: p6(78),
  },
  {
    key: "truck-downhill-pass",
    quote:
      "Heavy vehicles require longer stopping distances and accelerate more " +
      "slowly. Avoid passing while going down hill.",
    source: HANDBOOK,
    section: "Part 6: Sharing the road - 6.2 Drivers and large commercial vehicles (p. 78)",
    url: p6(78),
  },
  {
    key: "motorcycle-full-lane",
    quote:
      "A motorcycle is entitled to a full highway lane. NEVER crowd into the same " +
      "lane as the motorcycle.",
    source: HANDBOOK,
    section: "Part 6: Sharing the road - 6.3 Drivers and motorcycles (p. 79)",
    url: p6(79),
  },
  {
    key: "motorcycle-stop-quicker",
    quote:
      "Motorcycles can stop quicker than other vehicles, therefore allow extra " +
      "following distance.",
    source: HANDBOOK,
    section: "Part 6: Sharing the road - 6.3 Drivers and motorcycles (p. 79)",
    url: p6(79),
  },
  {
    key: "bicycle-one-metre",
    quote:
      "When it is safe to pass, the driver must leave at least one metre (three " +
      "feet) of open space between the vehicle and the bicycle.",
    source: HANDBOOK,
    section: "Part 6: Sharing the road - 6.4 Drivers and bicycles (p. 79)",
    url: p6(79),
  },
  {
    key: "ellens-law",
    quote:
      "Failure to provide bicyclists one metre of space is an offence under the " +
      "Motor Vehicle Act and can result in a fine and loss of demerit points.",
    source: HANDBOOK,
    section: "Part 6: Sharing the road - DID YOU KNOW (p. 79)",
    url: p6(79),
  },
  {
    key: "bicycle-rules",
    quote:
      "Bicyclists are subject to the same rules of the road as motor vehicle " +
      "drivers. A cyclist must drive in the same lane as traffic, as close to the " +
      "right as possible.",
    source: HANDBOOK,
    section: "Part 6: Sharing the road - Bicyclists (p. 80)",
    url: p6(80),
  },
  {
    key: "bicycle-helmet",
    quote: "It is against the law to ride a bicycle without a helmet.",
    source: HANDBOOK,
    section: "Part 6: Sharing the road - Bicyclists (p. 80)",
    url: p6(80),
  },
  {
    key: "pedestrian-crosswalk-row",
    quote:
      "Drivers must give the pedestrian the right of way in a crosswalk, unless " +
      "otherwise indicated by a sign or signal.",
    source: HANDBOOK,
    section: "Part 6: Sharing the road - 6.5 Drivers and pedestrians (p. 80)",
    url: p6(80),
  },
  {
    key: "never-pass-yielding",
    quote: "Never pass a vehicle yielding to a pedestrian at a crosswalk.",
    source: HANDBOOK,
    section: "Part 6: Sharing the road - 6.5 Drivers and pedestrians (p. 80)",
    url: p6(80),
  },
  {
    key: "circle-check",
    quote:
      "in front of and behind the vehicle. Do a circle check before starting your vehicle.",
    source: HANDBOOK,
    section: "Part 6: Sharing the road - 6.5 Drivers and pedestrians (p. 80)",
    url: p6(80),
  },
  {
    key: "bus-amber-150",
    quote:
      "Alternating flashing amber lights are to be used 150 metres (500 feet) " +
      "before the school bus stops to pick up children.",
    source: HANDBOOK,
    section: "Part 6: Sharing the road - 6.6 Drivers and school buses (p. 81)",
    url: p6(81),
  },
  {
    key: "bus-red-lights",
    quote:
      "Alternating flashing red lights are used when the school bus is stopped, " +
      "while picking up or discharging students.",
    source: HANDBOOK,
    section: "Part 6: Sharing the road - 6.6 Drivers and school buses (p. 81)",
    url: p6(81),
  },
  {
    key: "bus-median-exception",
    quote:
      "Except on a road divided by a median, all drivers meeting or coming up " +
      "behind a stopped school bus must stop at least 5 metres from the school " +
      "bus and not proceed until the red lights are no longer flashing.",
    source: HANDBOOK,
    section: "Part 6: Sharing the road - 6.6 Drivers and school buses (p. 81)",
    url: p6(81),
  },
  {
    key: "bus-illegal-pass",
    quote:
      "It is illegal to pass a school bus displaying the alternating flashing red lights.",
    source: HANDBOOK,
    section: "Part 6: Sharing the road - 6.6 Drivers and school buses (p. 81)",
    url: p6(81),
  },
  {
    key: "bus-railway",
    quote:
      "Drivers of school buses must stop before proceeding through a railway " +
      "crossing unless otherwise indicated.",
    source: HANDBOOK,
    section: "Part 6: Sharing the road - 6.6 Drivers and school buses (p. 81)",
    url: p6(81),
  },
  {
    key: "emergency-pull-right",
    quote:
      "When approached by an emergency vehicle using siren and flashing lights: " +
      "Pull over to the right and come to a complete stop. Allow the emergency " +
      "vehicle to proceed. Yield the right of way to emergency vehicles at " +
      "intersections.",
    source: HANDBOOK,
    section: "Part 6: Sharing the road - 6.7 Drivers and emergency vehicles (p. 81)",
    url: p6(81),
  },
  {
    key: "follow-emergency-150",
    quote: "It is an offence to follow an emergency vehicle within 150 metres (500 feet).",
    source: HANDBOOK,
    section: "Part 6: Sharing the road - 6.7 Drivers and emergency vehicles (p. 81)",
    url: p6(81),
  },
  {
    key: "move-over-fine",
    quote:
      "Failure to move over for an authorized emergency vehicle could result in a " +
      "fine and the loss of demerit points under the Motor Vehicle Act.",
    source: HANDBOOK,
    section: "Part 6: Sharing the road - DID YOU KNOW? (p. 82)",
    url: p6(82),
  },
  {
    key: "farm-slow-moving-sign",
    quote:
      "every farm tractor and self-propelled implement of husbandry and any other " +
      "type of vehicle prescribed by Regulation, when operating on a highway or " +
      "any vehicle towed by them, shall have a slow-moving vehicle sign, as " +
      "prescribed by regulation, attached to the rear in accordance with the " +
      "Regulations.",
    source: HANDBOOK,
    section: "Part 6: Sharing the road - 6.8 Drivers and farm vehicles (p. 83)",
    url: p6(83),
  },
  {
    key: "truck-braking-distance",
    quote:
      "Typically, a passenger sedan travelling 90 kilometres per hour stops in 56 " +
      "metres while a sleeper-cab tractor with a loaded trailer requires a " +
      "minimum 60 metres.",
    source: HANDBOOK,
    section: "Part 6: Sharing the road - Braking (p. 83)",
    url: p6(83),
  },
  {
    key: "truck-total-stop",
    quote:
      "A combination truck travelling at 90 kilometres per hour with a full load " +
      "under ideal conditions will travel a total of 102 metres before coming to " +
      "a complete stop.",
    source: HANDBOOK,
    section: "Part 6: Sharing the road - Braking (p. 84)",
    url: p6(84),
  },
  {
    key: "truck-reaction-time",
    quote:
      "The average reaction time of most people is three-quarters of a second. At " +
      "90 kilometres per hour, a truck will travel 18 metres before the driver " +
      "applies the brakes.",
    source: HANDBOOK,
    section: "Part 6: Sharing the road - Braking (p. 84)",
    url: p6(84),
  },
  {
    key: "right-turn-squeeze",
    quote:
      "When the truck proves to be turning right, the smaller vehicle is trapped " +
      "between the truck and the curb in the \"right turn squeeze\".",
    source: HANDBOOK,
    section: "Part 6: Sharing the road - 6.9 Sharing the road with large trucks (p. 85)",
    url: p6(85),
  },
  {
    key: "truck-mirror-rule",
    quote:
      "An often-cited rule of thumb for motorists overtaking a semi-trailer is, " +
      "if you cannot see the truck driver in their side mirror, they cannot see you.",
    source: HANDBOOK,
    section: "Part 6: Sharing the road - A trucker's blind spots (p. 85)",
    url: p6(85),
  },

  // --- Part 7: Traffic signs --------------------------------------------
  {
    key: "sign-classes",
    quote:
      "Signs are classified according to their function: regulatory, warning and information.",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs (p. 86)",
    url: p7(86),
  },
  {
    key: "sign-shapes-colours",
    quote:
      "The easiest way to identify traffic signs is to learn to recognize their " +
      "shapes and colours. For safe driving, you must recognize and obey traffic " +
      "signs without hesitation.",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs (p. 86)",
    url: p7(86),
  },
  {
    key: "stop-sign-shape",
    quote:
      "The stop sign, a red octagon with white lettering, means come to a full " +
      "stop and be sure the way is clear before proceeding.",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - 7.1 Six basic sign shapes every driver must know (p. 86)",
    url: p7(86),
  },
  {
    key: "yield-sign-shape",
    quote:
      "Yield Right of Way signs are triangular and have a red border on a white background.",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - 7.1 Six basic sign shapes every driver must know (p. 86)",
    url: p7(86),
  },
  {
    key: "yield-sign-meaning",
    quote:
      "A yield sign means you must reduce speed when approaching an intersection. " +
      "Give right of way and stop if necessary if any other traffic is in, or " +
      "closely approaching, the intersection.",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - 7.1 Six basic sign shapes every driver must know (p. 86)",
    url: p7(86),
  },
  {
    key: "regulatory-sign-shape",
    quote:
      "Regulatory signs are white rectangles or squares with black or other " +
      "coloured lettering. These signs state the law, such as speed limits, " +
      "parking regulations and turning and passing movements.",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - 7.1 Six basic sign shapes every driver must know (p. 86)",
    url: p7(86),
  },
  {
    key: "warning-sign-shape",
    quote:
      "Warning signs are diamond shaped and are yellow or orange with black " +
      "letters or symbols. They warn of dangerous or unusual conditions ahead, " +
      "such as a curve, turn, dip or side road.",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - 7.1 Six basic sign shapes every driver must know (p. 87)",
    url: p7(87),
  },
  {
    key: "crossbuck",
    quote: "The crossbuck is the traditional symbol at roadway-railway crossings.",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - 7.1 Six basic sign shapes every driver must know (p. 87)",
    url: p7(87),
  },
  {
    key: "school-zone-sign",
    quote:
      "The fluorescent yellow five-side (pentagonal) sign indicates a school " +
      "zone. When children are present in a school zone, slow down, watch for " +
      "children and exercise extreme caution. The maximum speed permitted is 50 " +
      "km/h unless otherwise posted.",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - 7.1 Six basic sign shapes every driver must know (p. 87)",
    url: p7(87),
  },
  {
    key: "school-area-prudent",
    quote:
      "Regardless of the speed limit posted in a school area, your speed must be " +
      "reasonable and prudent for existing conditions.",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - 7.1 Six basic sign shapes every driver must know (p. 87)",
    url: p7(87),
  },
  {
    key: "sign-colours",
    quote:
      "Red - Stop or prohibition Blue - Attraction/tourism information or " +
      "motorist services Green - Indicates traffic movement such as turns which " +
      "are permitted or directional guidance Yellow - General warning danger/caution",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - 7.2 Standard sign colours (p. 87)",
    url: p7(87),
  },
  {
    key: "sign-colours-two",
    quote:
      "Fluorescent yellow - School zone and school crosswalk ahead signs White - " +
      "Regulatory Orange - Construction and maintenance warning",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - 7.2 Standard sign colours (p. 87)",
    url: p7(87),
  },
  {
    key: "green-circle",
    quote: "Signs with a green circle give permission, as indicated",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - 7.3 Regulatory Signs (p. 88)",
    url: p7(88),
  },
  {
    key: "red-circle-slash",
    quote: "Signs with a red circle and diagonal slash deny permission, as indicated",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - 7.3 Regulatory Signs (p. 88)",
    url: p7(88),
  },
  {
    key: "no-uturn-sign",
    quote:
      "You must not turn your vehicle around in the roadway to travel in the " +
      "opposite direction (no U-turn)",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - 7.3 Regulatory Signs (p. 88)",
    url: p7(88),
  },
  {
    key: "keep-right-sign",
    quote: "Keep to the right of traffic islands or obstruction",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - 7.3 Regulatory Signs (p. 88)",
    url: p7(88),
  },
  {
    key: "weight-limit-sign",
    quote: "Weight limit of vehicle permitted on highway or bridge expressed in tonnes",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - 7.3 Regulatory Signs (p. 88)",
    url: p7(88),
  },
  {
    key: "max-speed-sign",
    quote: "The maximum speed allowed under ideal conditions",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - 7.3 Regulatory Signs (p. 88)",
    url: p7(88),
  },
  {
    key: "advance-speed-sign",
    quote: "Advance warning of a lower maximum speed zone ahead",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - 7.3 Regulatory Signs (p. 88)",
    url: p7(88),
  },
  {
    key: "regulatory-signs-offence",
    quote:
      "Regulatory signs inform drivers of laws and regulations affecting the use " +
      "of the highway. It is an offence under the Motor Vehicle Act to disregard them.",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - 7.3 Regulatory Signs (p. 88)",
    url: p7(88),
  },
  {
    key: "lane-designation",
    quote:
      "These signs may be mounted above (or to the side of) the roadway. When " +
      "mounted above, each sign is centred over the lane it controls.",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - Lane designation signs (p. 89)",
    url: p7(89),
  },
  {
    key: "pedestrian-signs",
    quote:
      "These signs indicate pedestrian movement, either at an intersection or " +
      "mid-block. You must yield to pedestrians within the crosswalk.",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - Pedestrian signs (p. 89)",
    url: p7(89),
  },
  {
    key: "no-right-on-red-sign",
    quote: "No right turn on red Wait for green light before making a right turn",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - Turn control signs (p. 90)",
    url: p7(90),
  },
  {
    key: "turn-control-tab",
    quote:
      "These signs may be accompanied by a tab that indicates the sign is only in " +
      "effect during certain hours of the day.",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - Turn control signs (p. 90)",
    url: p7(90),
  },
  {
    key: "warning-symbols",
    quote:
      "Warning signs are yellow and diamond shaped, and use symbols instead of " +
      "words. They give warning of some condition of the road ahead that calls " +
      "for special care on the part of the driver.",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - 7.4 Warning signs (p. 90)",
    url: p7(90),
  },
  {
    key: "obstruction-sign",
    quote: "Obstruction Pass to either side",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - 7.4 Warning signs (p. 90)",
    url: p7(90),
  },
  {
    key: "divided-highway-begins",
    quote: "Divided highway begins Keep to the right",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - 7.4 Warning signs (p. 90)",
    url: p7(90),
  },
  {
    key: "checkerboard",
    quote: "Checkerboard Road ends but may proceed left or right",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - 7.4 Warning signs (p. 91)",
    url: p7(91),
  },
  {
    key: "added-lane",
    quote: "Added lane Two roads converge and merging movements are not required",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - 7.4 Warning signs (p. 91)",
    url: p7(91),
  },
  {
    key: "reverse-curve",
    quote:
      "Reverse curve ahead Two turns in opposite directions separated by a " +
      "tangent of less than 120m, first turn right",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - 7.4 Warning signs (p. 91)",
    url: p7(91),
  },
  {
    key: "winding-road",
    quote: "Winding road ahead First curve right",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - 7.4 Warning signs (p. 91)",
    url: p7(91),
  },
  {
    key: "road-narrows",
    quote: "Road narrows Road ahead is not as wide as the road you are driving on",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - 7.4 Warning signs (p. 91)",
    url: p7(91),
  },
  {
    key: "narrow-bridge",
    quote: "Narrow bridge ahead Width of pavement narrower than approach",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - 7.4 Warning signs (p. 91)",
    url: p7(91),
  },
  {
    key: "steep-hill",
    quote: "Steep hill ahead Shift to lower gear or slow down if going down very steep hill",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - 7.4 Warning signs (p. 91)",
    url: p7(91),
  },
  {
    key: "traffic-signals-ahead",
    quote: "Traffic signals ahead Be prepared to stop",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - 7.4 Warning signs (p. 91)",
    url: p7(91),
  },
  {
    key: "concealed-intersection",
    quote: "Concealed or unusual intersection ahead Road from right and/or left",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - 7.4 Warning signs (p. 91)",
    url: p7(91),
  },
  {
    key: "underpass-sign",
    quote: "Underpass ahead Overhead clearance as indicated",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - 7.4 Warning signs (p. 91)",
    url: p7(91),
  },
  {
    key: "animal-crossing-sign",
    quote: "Section of roadway regularly crossed by animal depicted",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - 7.4 Warning signs (p. 91)",
    url: p7(91),
  },
  {
    key: "surface-icing",
    quote:
      "Surface subject to icing Bridge or roadway surface may be slippery at zero " +
      "degrees Celsius - slow down",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - 7.4 Warning signs (p. 92)",
    url: p7(92),
  },
  {
    key: "school-bus-stop-ahead-sign",
    quote: "School bus stop ahead Stop for bus with flashing lights",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - 7.4 Warning signs (p. 92)",
    url: p7(92),
  },
  {
    key: "pavement-ends",
    quote: "Pavement ends Continuation has gravel surface",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - 7.4 Warning signs (p. 92)",
    url: p7(92),
  },
  {
    key: "railway-angle-sign",
    quote: "Railway ahead Road intersects with rail tracks ahead at angle depicted",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - 7.4 Warning signs (p. 92)",
    url: p7(92),
  },
  {
    key: "slow-moving-vehicle-sign",
    quote:
      "Slow moving vehicle Mounted on the rear of vehicles that travel at speeds " +
      "less than 40 km/h It warns drivers approaching from behind to slow down",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - Hazard Markers (p. 92)",
    url: p7(92),
  },
  {
    key: "hazard-marker",
    quote:
      "Hazard close to the edge of the road The downward lines show the side on " +
      "which you may safely pass",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - Hazard Markers (p. 92)",
    url: p7(92),
  },
  {
    key: "chevron",
    quote:
      "Chevron alignment signs may be used to guide drivers around sharp curves " +
      "in the road",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - Hazard Markers (p. 92)",
    url: p7(92),
  },
  {
    key: "construction-signs-orange",
    quote: "Construction signs have black letters or symbols on an orange background.",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - Construction Signs (p. 93)",
    url: p7(93),
  },
  {
    key: "construction-ahead-sign",
    quote:
      "Construction ahead This sign indicates you are entering a construction " +
      "zone. Drive with extra caution and be prepared for changes in the speed limit.",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - Construction Signs (p. 93)",
    url: p7(93),
  },
  {
    key: "traffic-control-person",
    quote: "Traffic control person ahead Be prepared to stop for instructions.",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - Construction Signs (p. 93)",
    url: p7(93),
  },
  {
    key: "pavement-drop-off",
    quote:
      "Pavement drop-off This sign warns motorists that they are on or " +
      "approaching a section of roadway where either the adjacent lane or " +
      "shoulder or both are lower or higher than the motorist's travel lane.",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - Construction Signs (p. 93)",
    url: p7(93),
  },
  {
    key: "railway-advance-warning",
    quote:
      "These signs tell you to look, listen and slow down because you may have to stop.",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - 7.5 Railway Crossings (p. 94)",
    url: p7(94),
  },
  {
    key: "railway-crossing-sign",
    quote:
      "A Railway Crossing sign means drivers must yield to all trains. If there " +
      "is more than one track, the sign below the Railway Crossing sign indicates " +
      "the number of tracks.",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - Railway Crossing signs (p. 94)",
    url: p7(94),
  },
  {
    key: "railway-stop-sign-5m",
    quote:
      "If a stop sign is erected at a railway/highway crossing, the driver must " +
      "stop no closer than five (5) metres from the nearest rail.",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - Railway Crossing signs with a Stop sign (p. 94)",
    url: p7(94),
  },
  {
    key: "railway-flashing-lights",
    quote:
      "All drivers must stop at the stop line painted on the roadway or, if none " +
      "exists, no closer than five metres from nearest rail.",
    source: HANDBOOK,
    section:
      "Part 7: Traffic Signs - Railway Crossing signs with flashing lights and bell (p. 94)",
    url: p7(94),
  },
  {
    key: "railway-second-train",
    quote:
      "Drivers have started across the tracks right after a train has gone by " +
      "only to be struck by a second train coming from the opposite direction.",
    source: HANDBOOK,
    section:
      "Part 7: Traffic Signs - Railway Crossing signs with flashing lights and bell (p. 94)",
    url: p7(94),
  },
  {
    key: "guide-signs",
    quote:
      "Guide signs are essential to guide the motorist along established roads, " +
      "to inform them of intersecting roads",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - 7.6 Guide Signs (p. 95)",
    url: p7(95),
  },
  {
    key: "information-signs",
    quote:
      "These signs are square in shape. They indicate the location of various facilities.",
    source: HANDBOOK,
    section: "Part 7: Traffic Signs - 7.7 Information Signs (p. 95)",
    url: p7(95),
  },

  // --- Part 8 and Part 9 -------------------------------------------------
  {
    key: "motorcycle-headgear",
    quote:
      "You are not allowed by law to operate or ride on a motorcycle unless you " +
      "are wearing adequate protective headgear of a kind prescribed by Regulation.",
    source: HANDBOOK,
    section: "Part 8: What every motorcyclist must know - 8.2 Equipment (p. 97)",
    url: p8(97),
  },
  {
    key: "motorcycle-front-brake",
    quote:
      "The front brake provides about 70 per cent of the total braking force " +
      "under normal road conditions because the weight shifts forward during braking.",
    source: HANDBOOK,
    section: "Part 8: What every motorcyclist must know - 8.6 Stopping (p. 99)",
    url: p8(99),
  },
  {
    key: "motorcycle-stagger",
    quote:
      "When riding with other cycles, do not ride two abreast in a single lane on " +
      "public streets and highways.",
    source: HANDBOOK,
    section: "Part 8: What every motorcyclist must know - 8.9 Defensive driving (p. 101)",
    url: p8(101),
  },
  {
    key: "commercial-following-60m",
    quote:
      "It is illegal for a commercial motor vehicle (other than a police vehicle) " +
      "or a vehicle towing a trailer or a mobile home to follow another vehicle " +
      "within 60 metres (200 feet) when travelling upon a highway outside a " +
      "business or residential district except for the purpose of overtaking and passing.",
    source: HANDBOOK,
    section: "Part 9: Information for commercial vehicle drivers - Safe driving (p. 106)",
    url: p9(),
  },
  {
    key: "disabled-reflector-30m",
    quote:
      "When a motor vehicle is disabled on a highway at nighttime, the operator " +
      "must place a portable reflector unit or standard at a distance of " +
      "approximately 30 metres (100 feet) to the rear of the motor vehicle at or " +
      "near the edge of the roadway.",
    source: HANDBOOK,
    section: "Part 9: Information for commercial vehicle drivers - Portable reflector units (p. 106)",
    url: p9(),
  },

  // --- Motor Vehicle Act -------------------------------------------------
  {
    key: "mva-school-zone-30",
    quote:
      "No person shall drive a vehicle in a school zone during the hours of 7:30 " +
      "a.m. to 4:00 p.m., on the days during which a public school or private " +
      "school in the vicinity of that school zone is in session, at a speed in " +
      "excess of (a) 30 km/h in a municipality,",
    source: MVA,
    section: "Section 140.1(1) - School zones",
    url: mva("140.1"),
  },
  {
    key: "mva-school-zone-rural",
    quote: "50 km/h in a rural community, regional municipality or rural district.",
    source: MVA,
    section: "Section 140.1(1)(c) - School zones",
    url: mva("140.1"),
  },
  {
    key: "mva-school-zone-fine-doubled",
    quote:
      "where a person is convicted of an offence under paragraph (5)(a ), (b ) or " +
      "(c ), the minimum fine shall be double the minimum fine specified in the " +
      "Provincial Offences Procedure Act for that category of offence.",
    source: MVA,
    section: "Section 140.1(7) - School zones",
    url: mva("140.1"),
  },
  {
    key: "mva-reasonable-and-prudent",
    quote:
      "No person shall drive a vehicle on a highway at a speed greater than is " +
      "reasonable and prudent under the conditions and having regard to the " +
      "actual and potential hazards then existing.",
    source: MVA,
    section: "Section 140(2) - Maximum speed",
    url: mva("140"),
  },
  {
    key: "mva-extreme-speed-impound",
    quote:
      "with respect to an offence under paragraph (1.1)(c), for seven days from " +
      "the time it was detained, or (b) with respect to an offence under " +
      "paragraph (1.1)(d), for 30 days from the time it was detained.",
    source: MVA,
    section: "Section 140(1.4) - Maximum speed",
    url: mva("140"),
  },
  {
    key: "mva-construction-zone",
    quote:
      "When a worker is present in a construction zone for which no signs giving " +
      "notice of the maximum speed limit are erected, no person shall drive a " +
      "vehicle in the construction zone at a speed in excess of (a) 50 km/h in a " +
      "municipality,",
    source: MVA,
    section: "Section 142.01(1) - Construction zones",
    url: mva("142.01"),
  },
  {
    key: "mva-signal-30m",
    quote:
      "A signal of intention to turn right or left when required shall be given " +
      "continuously during not less than the last thirty metres travelled by the " +
      "vehicle before turning.",
    source: MVA,
    section: "Section 162(4) - Turning movements and required signals",
    url: mva("162"),
  },
  {
    key: "mva-signal-stopping",
    quote:
      "No person shall stop or suddenly decrease the speed of a vehicle without " +
      "first giving an appropriate signal in the manner provided in section 163 " +
      "or 164 to the driver of any vehicle immediately to the rear when there is " +
      "opportunity to give such signal.",
    source: MVA,
    section: "Section 162(5) - Turning movements and required signals",
    url: mva("162"),
  },
  {
    key: "mva-uturn",
    quote:
      "No person shall turn a vehicle so as to proceed in the opposite direction " +
      "(a) unless he can do so without interfering with other traffic, or (b) when " +
      "he is driving (i) upon a curve,",
    source: MVA,
    section: "Section 162(1) - Signals",
    url: mva("162"),
  },
  {
    key: "mva-uturn-crest",
    quote:
      "upon an approach to or near the crest of a grade where the vehicle cannot " +
      "be seen by the driver of another vehicle approaching from either direction " +
      "within one hundred fifty metres, or (iii) at a place where a traffic " +
      "control device prohibits making a U-turn.",
    source: MVA,
    section: "Section 162(1)(b) - Signals",
    url: mva("162"),
  },
  {
    key: "mva-roadside-ladder",
    quote:
      "seven days, in the case of a first revocation and suspension, (b) 15 days, " +
      "in the case of a second revocation and suspension in the five years " +
      "preceding the date of the revocation and suspension,",
    source: MVA,
    section: "Section 310.01(4) - Revocation and suspension on roadside analysis",
    url: mva("310.01"),
  },
  {
    key: "mva-roadside-warn",
    quote:
      "If, on demand of a peace officer made under section 320.27 or 320.28 of the " +
      "Criminal Code (Canada), a person provides a sample of the person's breath " +
      "which, on analysis by an approved screening device, registers \"Warn\", the " +
      "peace officer shall request the person to surrender the person's licence.",
    source: MVA,
    section: "Section 310.01(1) - Revocation and suspension on roadside analysis",
    url: mva("310.01"),
  },
  {
    key: "mva-roadside-second-analysis",
    quote:
      "the person has the right to request and be provided with a second analysis " +
      "as soon as the circumstances permit",
    source: MVA,
    section: "Section 310.01(6)(a) - Revocation and suspension on roadside analysis",
    url: mva("310.01"),
  },
  {
    key: "mva-novice-seven-day",
    quote:
      "the licence is revoked and the novice driver's driving privilege is " +
      "suspended for a period of seven days from the time the request is made.",
    source: MVA,
    section: "Section 310.02(6) - Novice drivers",
    url: mva("310.02"),
  },
  {
    key: "mva-move-over-half",
    quote:
      "the driver of a vehicle travelling on the same side of the highway shall " +
      "reduce the vehicle's speed to one-half of the posted maximum speed limit " +
      "and shall proceed with caution",
    source: MVA,
    section: "Section 168.1(2) - Stopped authorized emergency vehicle or service vehicle",
    url: mva("168.1"),
  },
  {
    key: "mva-move-over-lane",
    quote:
      "shall, in addition to reducing the vehicle's speed to one-half the posted " +
      "maximum speed limit and proceeding with caution as required by subsection " +
      "(2), move into another lane if the movement can be made with safety.",
    source: MVA,
    section: "Section 168.1(3) - Stopped authorized emergency vehicle or service vehicle",
    url: mva("168.1"),
  },
  {
    key: "mva-emergency-yield",
    quote:
      "shall immediately drive to a position parallel to, and as close as " +
      "possible to, the right-hand edge or curb of the roadway clear of any " +
      "intersection and shall stop and remain in such position until the " +
      "authorized emergency vehicle has passed",
    source: MVA,
    section: "Section 168(1) - Authorized emergency vehicles",
    url: mva("168"),
  },
  {
    key: "mva-school-bus-5m",
    quote:
      "shall bring such motor vehicle to a stop at not less than five metres from " +
      "such school bus and shall not pass such school bus until it is again in " +
      "motion or the flashing red lights cease to be displayed.",
    source: MVA,
    section: "Section 188(1) - Stopped school bus",
    url: mva("188"),
  },
  {
    key: "mva-school-bus-median",
    quote:
      "Subsection (2) does not apply to the driver of a motor vehicle meeting a " +
      "school bus displaying flashing red lights on a highway divided by a median.",
    source: MVA,
    section: "Section 188.1(3) - Stopped school bus",
    url: mva("188.1"),
  },
  {
    key: "mva-bicycle-one-metre",
    quote: "shall pass to the left at a distance of at least one metre from the bicycle,",
    source: MVA,
    section: "Section 149(3)(c) - Overtaking a bicycle",
    url: mva("149"),
  },
  {
    key: "mva-bicycle-give-way",
    quote:
      "On hearing the audible signal, the rider of a bicycle that is being " +
      "overtaken and passed by a vehicle shall give way to the right in favour of " +
      "the vehicle.",
    source: MVA,
    section: "Section 149(4) - Overtaking a bicycle",
    url: mva("149"),
  },
  {
    key: "mva-handheld-prohibited",
    quote:
      "No person shall operate a motor vehicle on a highway while using a " +
      "hand-operated electronic device.",
    source: MVA,
    section: "Section 265.02 - Hand-operated electronic device prohibited",
    url: mva("265.02"),
  },
  {
    key: "mva-handheld-fine-doubled",
    quote:
      "if a person is convicted of an offence under section 265.02 or subsection " +
      "265.04(1), the minimum fine shall be double the minimum fine specified in " +
      "the Provincial Offences Procedure Act for that category of offence.",
    source: MVA,
    section: "Section 265.041 - Hand-operated electronic devices",
    url: mva("265.041"),
  },
  {
    key: "mva-handheld-hands-free",
    quote:
      "if it is configured and equipped to be used as a hands-free telephone, " +
      "used in a hands-free manner, and used exclusively by voice commands or by " +
      "touching the device only once to initiate or accept a telephone call and " +
      "only once to end it",
    source: MVA,
    section: "Section 265.03(c) - Exceptions",
    url: mva("265.03"),
  },
  {
    key: "mva-handheld-emergency-call",
    quote:
      "who uses a hand-operated electronic device while operating a motor vehicle " +
      "on a highway to call the local police department, the Royal Canadian " +
      "Mounted Police, the fire department or an ambulance service about an emergency,",
    source: MVA,
    section: "Section 265.03(a) - Exceptions",
    url: mva("265.03"),
  },
  {
    key: "mva-handheld-parked",
    quote:
      "who uses a hand-operated electronic device while operating a motor vehicle " +
      "that is safely parked near the curb or outer edge of the shoulder of the highway.",
    source: MVA,
    section: "Section 265.03 - Exceptions",
    url: mva("265.03"),
  },
  {
    key: "mva-display-screen",
    quote:
      "No person shall operate a motor vehicle on a highway if a display screen " +
      "in the motor vehicle is visible to the driver.",
    source: MVA,
    section: "Section 265.04(1) - Display screens",
    url: mva("265.04"),
  },
  {
    key: "mva-green-signal",
    quote:
      "the driver of a vehicle facing the signal may proceed straight through or " +
      "turn right or left unless a sign at such place prohibits either such turn, " +
      "but shall yield the right-of-way to other vehicles or to pedestrians " +
      "lawfully within the intersection or on an adjacent cross walk at the time " +
      "such signal is exhibited",
    source: MVA,
    section: "Section 119(1)(a)(i) - Traffic control signals",
    url: mva("119"),
  },
  {
    key: "mva-amber-signal",
    quote:
      "such driver shall not enter the intersection unless he is so close thereto " +
      "that it is impossible to stop before so entering",
    source: MVA,
    section: "Section 119(1)(b)(i) - Traffic control signals",
    url: mva("119"),
  },
  {
    key: "mva-red-signal-right-turn",
    quote:
      "the driver may cautiously enter the intersection for the purpose of making " +
      "a right turn after bringing his vehicle to a full stop, and shall yield " +
      "the right-of-way to pedestrians lawfully within a crosswalk and to other " +
      "traffic lawfully using the intersection",
    source: MVA,
    section: "Section 119(1)(c)(i) - Traffic control signals",
    url: mva("119"),
  },
  {
    key: "mva-no-right-on-red-sign",
    quote:
      "the Minister of Transportation and Infrastructure and local authorities " +
      "may cause traffic control devices to be erected prohibiting a right turn " +
      "on a red alone",
    source: MVA,
    section: "Section 119(3) - Traffic control signals",
    url: mva("119"),
  },
  {
    key: "mva-follow-reasonable",
    quote:
      "No driver of a vehicle shall follow another vehicle more closely than is " +
      "reasonable and prudent, having due regard for the speed of the vehicles, " +
      "and the amount and nature of the traffic upon and the condition of the highway.",
    source: MVA,
    section: "Section 157(1) - Following too closely",
    url: mva("157"),
  },
  {
    key: "mva-night-definition",
    quote:
      "\"day time\" or \"day\" means one-half hour after sunrise to one-half hour " +
      "before sunset on the same day and \"night time\" or \"night\" means any other time;",
    source: MVA,
    section: "Section 1 - Definitions",
    url: mva("1"),
  },
  {
    key: "mva-lights-150",
    quote:
      "No person shall drive a vehicle on a highway at night time or any other " +
      "time when there is not sufficient light to render clearly discernible " +
      "persons and vehicles on the highway at a distance of one hundred fifty metres",
    source: MVA,
    section: "Section 207 - Lighted lamps",
    url: mva("207"),
  },
  {
    key: "mva-seatbelt-driver",
    quote:
      "Every person who drives on a highway a motor vehicle in which a seat belt " +
      "assembly is provided for the driver shall wear the complete seat belt " +
      "assembly in a properly adjusted and securely fastened manner.",
    source: MVA,
    section: "Section 200.1(3) - Seat belt assemblies",
    url: mva("200.1"),
  },
  {
    key: "mva-gdl-stage-one-curfew",
    quote:
      "the novice driver shall not operate the motor vehicle between the hours of " +
      "12 midnight and 5 a.m.;",
    source: MVA,
    section: "Section 84(4)(c.1) - Learner's licence",
    url: mva("84"),
  },
  {
    key: "mva-gdl-stage-one-alone",
    quote:
      "no other person, other than a licensed driver referred to in paragraph (a) " +
      "or (b), shall be in or on that motor vehicle;",
    source: MVA,
    section: "Section 84(4)(c) - Learner's licence",
    url: mva("84"),
  },
  {
    key: "mva-gdl-zero-alcohol",
    quote:
      "the novice driver shall not have consumed alcohol in such a quantity that " +
      "the concentration in the novice driver's blood exceeds zero milligrams of " +
      "alcohol in one hundred millilitres of blood; and",
    source: MVA,
    section: "Section 84(4)(d) - Learner's licence",
    url: mva("84"),
  },
  {
    key: "mva-gdl-stage-two-passengers",
    quote:
      "the novice driver shall not be accompanied by more than 3 passengers, only " +
      "one of whom may occupy a seat alongside the novice driver;",
    source: MVA,
    section: "Section 84(5)(b) - Learner's licence",
    url: mva("84"),
  },
  {
    key: "mva-gdl-stage-two-exempt",
    quote:
      "The condition referred to in paragraph (5)(a) does not apply to a novice " +
      "driver who is operating a motor vehicle between 12 midnight and 5 a.m. for " +
      "educational or employment purposes.",
    source: MVA,
    section: "Section 84(5.1) - Learner's licence",
    url: mva("84"),
  },
  {
    key: "mva-gdl-accompanying-3-years",
    quote:
      "A person acting as an accompanying driver shall hold a valid driver's " +
      "licence issued under the provisions of this Act or by another jurisdiction " +
      "for at least 3 years.",
    source: MVA,
    section: "Section 84(5.3) - Learner's licence",
    url: mva("84"),
  },
  {
    key: "mva-gdl-stage-two-qualify",
    quote:
      "the driver has held a stage one learner's licence without interruption for " +
      "the preceding 8 or more calendar months, has successfully passed a " +
      "licensed driver training course during the previous 2 years and has " +
      "successfully passed the required road test",
    source: MVA,
    section: "Section 84(6)(a) - Learner's licence",
    url: mva("84"),
  },
  {
    key: "mva-gdl-24-months",
    quote:
      "has been the holder of a learner's licence without interruption for the " +
      "preceding twenty-four or more calendar months, at least twelve of which " +
      "were spent by the holder in stage two.",
    source: MVA,
    section: "Section 84(8)(b) - Learner's licence",
    url: mva("84"),
  },
  {
    key: "mva-learner-two-years",
    quote:
      "A learner's licence shall, subject to this section, entitle the holder, " +
      "while having possession of the licence, to drive a motor vehicle, other " +
      "than a motorcycle or a motor driven cycle, upon a public highway for a " +
      "period of two years.",
    source: MVA,
    section: "Section 84(3) - Learner's licence",
    url: mva("84"),
  },

  // --- gnb.ca licensing pages -------------------------------------------
  {
    key: "web-gdl-two-levels",
    quote:
      "The program creates two levels of licence before a new driver gets a " +
      "\"full\" unrestricted licence. All new drivers spend a minimum of 24 months " +
      "with a graduated driver's licence before they get a full licence.",
    source: GDL_SRC,
    section: "Graduated drivers' licences - Overview",
    url: GDL_URL,
  },
  {
    key: "web-level1-after-written",
    quote:
      "New drivers are at level 1 once they pass a written test. A Level 1 " +
      "licence is what people used to know as a \"learner's permit.\" Drivers pass " +
      "to Level 2 after a successful road test.",
    source: GDL_SRC,
    section: "Graduated drivers' licences - Rules",
    url: GDL_URL,
  },
  {
    key: "web-level1-12-months",
    quote:
      "Level 1 drivers must wait 12 months before taking a road test and passing " +
      "into Level 2. That 12-month wait period can be reduced to eight months if " +
      "the new driver passes a driver training course.",
    source: GDL_SRC,
    section: "Graduated drivers' licences - Level 1 Drivers",
    url: GDL_URL,
  },
  {
    key: "web-level1-no-passengers",
    quote:
      "A Level 1 driver cannot drive alone or with passengers other than a " +
      "supervising driver with three years or more experience.",
    source: GDL_SRC,
    section: "Graduated drivers' licences - Level 1 Drivers",
    url: GDL_URL,
  },
  {
    key: "web-level2-night-exceptions",
    quote:
      "Level 2 drivers are permitted to drive between midnight and 5 a.m. if they " +
      "are:driving with a supervising driver with three years' experience driving " +
      "to or from work or school driving in an emergency situation have " +
      "permission from the Registrar of Motor Vehicles are 21 or older",
    source: GDL_SRC,
    section: "Graduated drivers' licences - Level 2 Drivers",
    url: GDL_URL,
  },
  {
    key: "web-graduated-l",
    quote:
      "This is an instructional type of licence for the driver to acquire " +
      "experience, over a minimum of 24 months at two levels, before becoming a " +
      "fully licensed driver. A Graduated Licence is identified with a \"L\" on the " +
      "front of the licence.",
    source: GDL_SRC,
    section: "Graduated drivers' licences - Requirements for the Graduated Driver's Licence Program",
    url: GDL_URL,
  },
  {
    key: "web-level2-min-age",
    quote: "16 years + 8 months or 17 years (if no driver training course).",
    source: GDL_SRC,
    section: "Graduated drivers' licences - Graduated Driver's Licence - Level 2",
    url: GDL_URL,
  },
  {
    key: "web-level2-no-road-test",
    quote:
      "No road test is required to obtain Class 5 Licence; however, it is the " +
      "responsibility of the driver to apply for a Class 5 Licence upon " +
      "completion of a Class 7 Graduated Licence (Level 2).",
    source: GDL_SRC,
    section: "Graduated drivers' licences - Graduated Driver's Licence - Level 2",
    url: GDL_URL,
  },
  {
    key: "web-two-written-exams",
    quote:
      "Written tests (class 7.1 learners permit, motorcycle, moped) Road Sign " +
      "Recognition Exam Rules of the Road Non-Commercial Knowledge Exam",
    source: TESTS_SRC,
    section: "Written and road tests for driver's licences - Overview",
    url: TESTS_URL,
  },
  {
    key: "web-four-business-days",
    quote:
      "If you pass all these tests, you must wait a minimum of four business " +
      "days, then go to any SNB office (except Campobello) to complete a vision test.",
    source: TESTS_SRC,
    section: "Written and road tests for driver's licences - Overview",
    url: TESTS_URL,
  },
  {
    key: "web-retest",
    quote:
      "If you don't pass, you'll need to purchase a retest for the test(s) you " +
      "didn't pass. Try again whenever you're ready, there's no waiting period to " +
      "retake a test.",
    source: TESTS_SRC,
    section: "Written and road tests for driver's licences - Overview",
    url: TESTS_URL,
  },
  {
    key: "web-booking",
    quote:
      "All appointment types, including written tests delivered orally, can also " +
      "be made by telephone through Service New Brunswick's Teleservices at " +
      "1-888-762-8600 (within North America) and 1-506-684-7901 (outside North " +
      "America). Testing is available in both official languages.",
    source: TESTS_SRC,
    section: "Written and road tests for driver's licences - Appointments",
    url: TESTS_URL,
  },
];
