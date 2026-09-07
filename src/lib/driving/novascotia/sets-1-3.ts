// Nova Scotia practice sets 1 to 3.
//
// Every fact below was checked against the official sources and nothing else:
// the Nova Scotia Driver's Handbook (ten chapter PDFs on the Registry of Motor
// Vehicles' own site, copyright 2000, "Reprinted with revisions, 2003, 2004,
// 2005, 2006, 2007, 2013 and 2017"), the four-page supplement bound into the
// front of it, the Registry's own amendments list and Graduated Drivers Licence
// System page, the Permits Directory entries for the Learner's and Newly
// Licensed Driver's Licence, the Government of Nova Scotia's Class 7 knowledge
// test page, and the Motor Vehicle Act, R.S.N.S. 1989, c. 293, consolidated to
// May 1, 2026.
//
// Six things are worth naming up front, because they are where this bank
// departs from what the handbook alone would tell a learner.
//
// 1. THE BOOK IS STALE AND THE REGISTRY SAYS SO IN PUBLIC. Chapter 1 still puts
//    the road-test wait at six months, or three with driver training. The
//    Registry's Graduated Drivers Licence System page and the Permits Directory
//    both say 12 months, reduced to 9 with an approved driver education course,
//    and have since April 2016. Every item here follows the Registry.
// 2. THERE ARE THREE GDL STAGES, NOT TWO. Learner (Class 7), Newly Licensed
//    (Class 5N) for at least two years, then Restricted Individual (Class 5R or
//    6R with condition 47) for two more. The third stage was added on
//    April 1, 2015 and appears only in the front supplement and on the
//    Registry's pages, never in the chapter a learner would read.
// 3. THE DEFAULT LIMIT IS 80. Section 106(1) of the Act caps any highway at
//    80 km/h unless a sign says otherwise, and Section 106(2) lets the Minister
//    post up to 110. The 50 is a LIST of places in Section 102(2), not a
//    built-in urban default.
// 4. THE SCHOOL ZONE IS A FORMULA. 30 km/h where the approaching limit was 50,
//    50 km/h where the approaching limit was higher than 50, whatever the time
//    of day. Page 51 and the Registry's amendments page both say this; page 69
//    of the same book flattens it to a flat 50. The formula wins, and the
//    research note records the conflict.
// 5. YOU SOUND YOUR HORN BEFORE PASSING. The handbook states it twice as a
//    legal duty. It is the rule Nova Scotians most often laugh at and most
//    often get wrong.
// 6. THE PHONE RULE IS NOT IN THE BOOK AT ALL. Section 100D of the Act makes a
//    hand-held phone or text messaging an offence, and the demerit table gives
//    it four points. A book written in 2000 could not have carried it.
//
// Questions are original. No handbook sentence is reproduced as a question, no
// item is lifted from a practice-test site, and the explanation, context and
// trap notes are written from scratch. Where a number appears (80 km/h, 5
// metres, 150 metres, 12 months), it is the number the Province publishes.

import type { DrivingTestSet } from "../types";

const H = "https://novascotia.ca/sns/rmv/handbook/";
/** Printed page number to the anchor inside that chapter's own PDF. */
const ch1 = (p: number) => `${H}DH-Chapter1.pdf#page=${p}`;
const ch2 = (p: number) => `${H}DH-Chapter2.pdf#page=${p - 36}`;
const ch3 = (p: number) => `${H}DH-Chapter3.pdf#page=${p - 76}`;
const ch4 = (p: number) => `${H}DH-Chapter4.pdf#page=${p - 104}`;
const ch5 = (p: number) => `${H}DH-Chapter5.pdf#page=${p - 132}`;
const ch6 = (p: number) => `${H}DH-Chapter6.pdf#page=${p - 150}`;
/** The Important Graduated Driver Licence Changes supplement, pages V to VIII. */
const supp = (p: number) => `${H}DH-1_intro.pdf#page=${p}`;
const MVA =
  "https://nslegislature.ca/sites/default/files/legc/statutes/motor%20vehicle.pdf";
const act = (p: number) => `${MVA}#page=${p}`;
const GDL = "https://novascotia.ca/sns/rmv/licence/gradlic.asp";
const AMEND = "https://novascotia.ca/sns/rmv/safe/handbook.asp";

export const novascotiaSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Nova Scotia Basics",
    difficulty: "starter",
    description:
      "Thirty warm-up questions on the rules you meet in your first hour on a Nova Scotia road: what the shapes mean, who goes first, and the handful of numbers the Registry expects you to know without stopping to think.",
    questions: [
      {
        id: "ns_s1_01",
        topic: "signs",
        question:
          "Nova Scotia reserves one sign shape for one message. What is an eight-sided red sign with white lettering telling you to do?",
        choices: [
          "Bring the vehicle to a complete stop and make sure the way is clear before you go",
          "Slow down and carry on if the way looks clear",
          "Yield only to traffic already in the intersection",
          "Watch for a hazard somewhere ahead",
        ],
        correctIndex: 0,
        explanation:
          "The red octagon is used for stop signs and nothing else. The handbook asks for a complete stop, and then for a separate judgment that the way is clear before you move off again.",
        context:
          "The stop has a place as well as a moment. You stop at the marked stop line, or at the nearest crosswalk line if there is no stop line. Where neither is painted, you stop far enough back that a pedestrian could still cross in front of you - the handbook calls that an unmarked crosswalk.",
        trap:
          "Slowing and carrying on describes a yield sign. An empty cross street does not turn a stop sign into a yield sign.",
        excerptKey: "sign-stop",
        sourceLabel: "Nova Scotia Driver's Handbook - Stop sign",
        sourceUrl: ch3(80),
      },
      {
        id: "ns_s1_02",
        topic: "speed",
        question:
          "You are on a Nova Scotia highway and there is no speed limit sign anywhere. What is the maximum?",
        choices: ["50 km/h", "60 km/h", "80 km/h", "100 km/h"],
        correctIndex: 2,
        explanation:
          "Where nothing is posted, the maximum on any highway in Nova Scotia is 80 km/h. That is the ceiling the Motor Vehicle Act sets, and a sign is what changes it.",
        context:
          "Section 106 of the Motor Vehicle Act forbids driving over 80 km/h on any highway at any time, and then lets the Minister or the Provincial Traffic Authority post a higher rate on particular highways - but never above 110 km/h. So 110 is the fastest number you will ever legally see on a sign in this province.",
        trap:
          "Provinces to the west build a 50 km/h city default into their statutes. Nova Scotia does not. The 50 is a list of specific places, not a general urban rule.",
        excerptKey: "speed-default-80",
        sourceLabel: "Nova Scotia Driver's Handbook - Choosing a safe speed",
        sourceUrl: ch2(50),
        commonlyMissed: true,
      },
      {
        id: "ns_s1_03",
        topic: "signs",
        question: "What does a triangular sign with a red border on a white background require?",
        choices: [
          "Stop completely every time, the same as a stop sign",
          "Reduce speed on the approach, give right of way, and stop if you have to",
          "Warn other traffic that you are about to merge",
          "Nothing binding, because triangles are only warnings",
        ],
        correctIndex: 1,
        explanation:
          "That is the yield sign. You must reduce speed as you approach and give the right of way, stopping if necessary, to any traffic already in the intersection or closely approaching it.",
        context:
          "A yield is a duty, not a suggestion. It sits where one road or lane joins another, which is exactly where a driver who arrives too fast runs out of options. Arrive slowly enough that stopping is still available to you.",
        trap:
          "Treating a yield as a rolling merge is the single most common way drivers meet the vehicle that had the right of way.",
        excerptKey: "sign-yield",
        sourceLabel: "Nova Scotia Driver's Handbook - Yield sign",
        sourceUrl: ch3(80),
      },
      {
        id: "ns_s1_04",
        topic: "signals",
        question:
          "The light ahead turns yellow while you are still well back from the intersection. What does Nova Scotia require?",
        choices: [
          "Speed up so you clear the intersection before the red",
          "Carry on at the same speed, since yellow means proceed",
          "Stop before entering the intersection",
          "Stop only if a vehicle is waiting on the cross street",
        ],
        correctIndex: 2,
        explanation:
          "A yellow signal means stop before entering the intersection, provided you can stop safely. The only escape is being too close to stop safely, and then you drive cautiously through.",
        context:
          "The handbook words the escape narrowly and then adds an instruction of its own: never speed up for a yellow to beat the red. Whether you were already committed is the whole test, and being well back settles it.",
        trap:
          "Accelerating to beat the light is exactly what the cross traffic on their fresh green is told to watch for.",
        excerptKey: "signal-amber",
        sourceLabel: "Nova Scotia Driver's Handbook - Traffic signal lights",
        sourceUrl: ch2(39),
      },
      {
        id: "ns_s1_05",
        topic: "rightOfWay",
        question:
          "Two vehicles reach an intersection at the same moment, with no signs, no lights and no officer. The other vehicle is on your right. Who goes first?",
        choices: [
          "You, if you are going straight through",
          "Whoever signals first",
          "Whoever is on the wider road",
          "The vehicle on your right",
        ],
        correctIndex: 3,
        explanation:
          "When two or more vehicles reach an intersection at the same time, the car to the left must yield. The vehicle on your right therefore goes first.",
        context:
          "The rule only settles a genuine tie. A vehicle that has already entered the intersection has the right of way over anything that has not, so arriving first is worth more than being on the right. Section 122 of the Motor Vehicle Act carries the same pair of rules.",
        trap:
          "Going straight ahead earns you nothing at an uncontrolled intersection, and neither does signalling early.",
        excerptKey: "row-car-to-left",
        sourceLabel: "Nova Scotia Driver's Handbook - Right of way",
        sourceUrl: ch2(44),
        commonlyMissed: true,
      },
      {
        id: "ns_s1_06",
        topic: "signs",
        question: "A yellow diamond-shaped sign with a black symbol appears ahead. What is it doing?",
        choices: [
          "Cautioning you about a changing road condition ahead",
          "Setting a speed limit you must obey",
          "Telling you which highway you are on",
          "Marking the boundary of a work zone",
        ],
        correctIndex: 0,
        explanation:
          "The yellow diamond is the warning shape. It cautions you about a condition on or near the road ahead, and the expected response is to slow enough to keep full control.",
        context:
          "Warning signs describe a condition rather than imposing a number, so most carry no limit. The merge sign is a good example: it tells you two lanes are about to join, and it makes both drivers equally responsible for the merge going smoothly.",
        trap:
          "Because a diamond usually carries no posted number, drivers file it as decoration. The hazard is real, and in a work zone the same diamond appears in orange.",
        excerptKey: "sign-warning-shape",
        sourceLabel: "Nova Scotia Driver's Handbook - Warning Signs",
        sourceUrl: ch3(83),
      },
      {
        id: "ns_s1_07",
        topic: "licensing",
        question: "While you hold a Nova Scotia learner's licence, who may be in the vehicle with you?",
        choices: [
          "Any licensed driver, plus up to three friends",
          "One experienced driver in the front seat, and nobody else",
          "A parent or guardian only, in any seat",
          "Anyone at all, as long as one of them is over 25",
        ],
        correctIndex: 1,
        explanation:
          "A learner drives with an experienced driver in the front seat and no other passengers. The handbook is blunt about the second half: no other passengers at all.",
        context:
          "An experienced driver is someone who has held a valid driver's licence for two years and is no longer in the GDL programme. Two narrow exemptions exist: more than one Driver Enhancement Officer may ride along, and a dual-control car with an approved instructor may carry up to three students in the back.",
        trap:
          "A licensed friend of the same age is not an experienced driver. Two years of licence and out of the GDL programme are both required.",
        excerptKey: "learner-restrictions",
        sourceLabel: "Nova Scotia Driver's Handbook - Restrictions",
        sourceUrl: ch1(10),
        commonlyMissed: true,
      },
      {
        id: "ns_s1_08",
        topic: "safety",
        question: "Who is required by law to wear a seat belt in a Nova Scotia vehicle?",
        choices: [
          "The driver only",
          "The driver and front-seat passengers only",
          "Everyone 16 and older, driver or passenger, where a belted seating position is available",
          "Everyone under 16 only",
        ],
        correctIndex: 2,
        explanation:
          "Everyone 16 and older must wear a seat belt, whether driving or riding, if a seating position with a belt is available to them.",
        context:
          "Passengers under 16 are the driver's responsibility. The driver must make sure each of them is belted where a belted position exists, and that younger children are in the approved restraint for their weight and height.",
        trap:
          "The age cut is about who carries the offence, not about who needs the belt. Below 16, the ticket lands on the driver.",
        excerptKey: "seatbelt-16",
        sourceLabel: "Nova Scotia Driver's Handbook - Seat belts, child restraints, and the law",
        sourceUrl: ch4(117),
      },
      {
        id: "ns_s1_09",
        topic: "signs",
        question:
          "A five-sided sign with a fluorescent yellow-green background shows two children walking. What is it?",
        choices: [
          "A playground ahead",
          "A pedestrian crosswalk",
          "A daycare entrance",
          "A school zone",
        ],
        correctIndex: 3,
        explanation:
          "The five-sided fluorescent yellow-green sign with two school children on it is the school zone sign. It has been the standard design across Nova Scotia since June 1, 2001.",
        context:
          "The shape is doing work that a word cannot. You are meant to identify it in poor light before you can read anything on it, then slow down, watch for children and drive at a speed that is reasonable for what you can actually see.",
        trap:
          "A playground has its own sign and its own message. The five-sided shape belongs to schools alone.",
        excerptKey: "school-zone-sign",
        sourceLabel: "Nova Scotia Driver's Handbook - School zone",
        sourceUrl: ch3(80),
      },
      {
        id: "ns_s1_10",
        topic: "rules",
        question: "When may a Nova Scotia driver leave the right side of the road?",
        choices: [
          "When passing, turning left, or avoiding an obstruction",
          "Whenever the left side is empty",
          "Only where a sign permits it",
          "Any time the vehicle behind is following too closely",
        ],
        correctIndex: 0,
        explanation:
          "Driving on the right is the rule, and the handbook gives three exceptions: passing, turning left, and avoiding an obstruction.",
        context:
          "The book adds a warning about the space near the middle. Do not hug the centre line, because it raises the risk of a head-on collision. Drive as nearly as is practical within a single lane, and do not leave it until it is safe.",
        trap:
          "An empty oncoming lane is not one of the three exceptions. Drifting left because nothing is coming is how head-on collisions start.",
        excerptKey: "drive-right",
        sourceLabel: "Nova Scotia Driver's Handbook - Driving on the right",
        sourceUrl: ch2(46),
      },
      {
        id: "ns_s1_11",
        topic: "signals",
        question: "You reach an intersection where the traffic lights are completely dead. What do you do?",
        choices: [
          "Treat it as a yield and roll through if nothing is coming",
          "Treat the intersection as a multi-stop, come to a full stop, then proceed when you have the right of way",
          "Proceed as normal, since a dead signal controls nothing",
          "Wait for a police officer to arrive",
        ],
        correctIndex: 1,
        explanation:
          "A dead signal turns the intersection into a multi-stop. Every approach stops, and then each driver proceeds in turn when they have the right of way and it is safe.",
        context:
          "This is one of the few rules that changes what the intersection is rather than what you do at it. Once it is a multi-stop, the ordinary right of way rules apply: whoever entered first goes, and on a genuine tie the vehicle on the left yields.",
        trap:
          "A dark signal is not the same as a flashing signal. A flashing red is a stop sign for your approach only; a dead signal makes every approach stop.",
        excerptKey: "signal-dead",
        sourceLabel: "Nova Scotia Driver's Handbook - Traffic signal lights",
        sourceUrl: ch2(39),
      },
      {
        id: "ns_s1_12",
        topic: "parking",
        question: "How close to the curb must your curbside wheels be when you park in Nova Scotia?",
        choices: [
          "Within 30 centimetres",
          "Within 50 centimetres",
          "Within 15 centimetres",
          "Within one metre",
        ],
        correctIndex: 2,
        explanation:
          "Curbside wheels must be within 15 centimetres of the curb or edge of the road. The handbook repeats the figure in the parallel parking steps and again under parking on a hill.",
        context:
          "Two other things go with it every time you leave the vehicle: apply the parking brake and turn off the engine. On a manual transmission, shift into reverse if you are facing downhill and into first if you are facing uphill.",
        trap:
          "Fifteen centimetres is about the width of a hand. Learners routinely picture something closer to half a metre and finish the road test outside the rule.",
        excerptKey: "park-15cm",
        sourceLabel: "Nova Scotia Driver's Handbook - Parking and stopping",
        sourceUrl: ch2(61),
      },
      {
        id: "ns_s1_13",
        topic: "emergencies",
        question:
          "An ambulance comes up behind you with its lights flashing and siren going. What does Nova Scotia require?",
        choices: [
          "Speed up until you find a side street",
          "Move left so the ambulance can use the right lane",
          "Keep your speed and position so the ambulance can predict you",
          "Move to the right edge or curb of the road and stop completely",
        ],
        correctIndex: 3,
        explanation:
          "Whether the emergency vehicle is coming from ahead or behind, you move to the right edge or curb and stop completely, then stay stopped until it has passed or an officer directs you.",
        context:
          "Police cars, ambulances and fire department vehicles with lights and sirens have the right of way. Two distance rules go with that: never follow an emergency fire vehicle within 150 metres, and never drive or park within 150 metres of an emergency vehicle stopped at a collision.",
        trap:
          "Pulling left splits the road unpredictably. Every driver moving right and stopping is what actually opens a lane.",
        excerptKey: "emerg-pull-right",
        sourceLabel: "Nova Scotia Driver's Handbook - Emergency vehicles",
        sourceUrl: ch2(45),
      },
      {
        id: "ns_s1_14",
        topic: "signs",
        question: "You see a white X-shaped sign with a red reflective border at the roadside. What is it marking?",
        choices: [
          "A railway crossing",
          "A pedestrian crossing",
          "A closed lane",
          "A hospital entrance",
        ],
        correctIndex: 0,
        explanation:
          "That is the crossbuck, and it marks the railway crossing itself. It replaced an older version that carried the words Railway Crossing in black lettering.",
        context:
          "A yellow and black warning sign is usually posted in advance of the crossbuck, and the angle of the tracks drawn on it matches the angle they cross the road. A smaller sign under the crossbuck tells you if there is more than one set of tracks.",
        trap:
          "The advance warning sign and the crossbuck are two different signs. The crossbuck is at the tracks, not before them.",
        excerptKey: "sign-crossbuck",
        sourceLabel: "Nova Scotia Driver's Handbook - Railway crossings",
        sourceUrl: ch3(81),
      },
      {
        id: "ns_s1_15",
        topic: "sharing",
        question: "A school bus ahead of you switches on alternately flashing red lights. What must you do?",
        choices: [
          "Pass slowly and carefully on the left",
          "Stop, whether you are behind the bus or facing it",
          "Stop only if you are behind the bus",
          "Slow to 30 km/h and continue",
        ],
        correctIndex: 1,
        explanation:
          "Red flashing lights mean the bus is picking up or dropping students. All drivers must halt, from behind or in front, and you may not pass at any time or place or from either direction.",
        context:
          "Amber flashing lights are the earlier warning that the bus is about to stop. Passing is still allowed on the amber, but you should already be looking for the red. The handbook names the divided boulevard specifically, so a median does not release you.",
        trap:
          "Drivers facing the bus assume the rule is for the traffic behind it. In Nova Scotia both directions stop, divided boulevard included.",
        excerptKey: "bus-no-pass",
        sourceLabel: "Nova Scotia Driver's Handbook - Drivers and school buses",
        sourceUrl: ch2(68),
        commonlyMissed: true,
      },
      {
        id: "ns_s1_16",
        topic: "rules",
        question: "What following distance does the Nova Scotia handbook teach for ordinary driving?",
        choices: [
          "One car length for every 10 km/h",
          "Three seconds",
          "Two seconds",
          "Four seconds",
        ],
        correctIndex: 2,
        explanation:
          "Nova Scotia teaches the two-second rule. Pick a landmark, start counting when the vehicle ahead passes it, and if you reach it before you finish counting you are too close.",
        context:
          "Two seconds is the floor, not the answer to every situation. Allow more on slippery roads, in fog, rain, snow or sun glare, behind a large commercial vehicle that blocks your view, when you are carrying a heavy load, and behind a motorcycle that can stop more quickly than you.",
        trap:
          "Several provinces teach three seconds. Nova Scotia's book says two, and then spends a paragraph explaining when two is not enough.",
        excerptKey: "two-second-rule",
        sourceLabel: "Nova Scotia Driver's Handbook - Two-second rule",
        sourceUrl: ch2(49),
      },
      {
        id: "ns_s1_17",
        topic: "impairment",
        question: "What blood alcohol level is a Nova Scotia learner permitted while driving?",
        choices: [
          "Under .05",
          "Under .08, the same as any adult driver",
          "Whatever leaves you unimpaired",
          "Zero",
        ],
        correctIndex: 3,
        explanation:
          "A learner's blood alcohol level must remain at zero. The handbook translates it as absolutely no drinking when driving.",
        context:
          "Zero follows you a long way through the GDL programme. It applies to the learner, to the newly licensed Class 5N driver, and again to the restricted individual on a Class 5R or 6R with condition 47 - which is two years past the point most drivers assume they are finished.",
        trap:
          ".08 is the criminal threshold for a fully licensed adult. It has never been the number for anyone in the GDL programme.",
        excerptKey: "learner-zero-bac",
        sourceLabel: "Nova Scotia Driver's Handbook - Restrictions",
        sourceUrl: ch1(10),
      },
      {
        id: "ns_s1_18",
        topic: "signs",
        question: "A rectangular sign with a green background and white letters is generally telling you what?",
        choices: [
          "Information and directions, such as route numbers and distances",
          "A rule you must obey",
          "A hazard on the road ahead",
          "That construction begins here",
        ],
        correctIndex: 0,
        explanation:
          "Green rectangles are guidance signs. They give information and directions, including route numbers and distances.",
        context:
          "The three families are worth holding apart. Regulatory signs state the law and are usually white rectangles or squares with black or red lettering. Warning signs are yellow diamonds. Guidance signs are green rectangles, with other colours pointing you to services and attractions.",
        trap:
          "Green also appears as a circle on regulatory signs, where it means permission is granted. The circle is the rule; the rectangle is the directions.",
        excerptKey: "sign-guidance",
        sourceLabel: "Nova Scotia Driver's Handbook - Guidance Signs",
        sourceUrl: ch3(83),
      },
      {
        id: "ns_s1_19",
        topic: "speed",
        question: "Unless a sign says otherwise, what is the speed limit in a Nova Scotia business or residential district?",
        choices: ["30 km/h", "40 km/h", "50 km/h", "60 km/h"],
        correctIndex: 2,
        explanation:
          "In business and residential districts the limit is 50 km/h. It is one entry on a list of specific places where the Motor Vehicle Act drops the maximum from 80 to 50.",
        context:
          "The rest of the list is worth learning as a list: passing a church while the congregation is entering or leaving, within 30 metres of a railway crossing, in a public park inside a city or town, in a danger zone, and within 15 metres of an intersection where your view along the cross street is under 60 metres.",
        trap:
          "The 50 attaches to the kind of district, not to the presence of houses. A rural road with a few homes on it is still 80 unless it is posted or it is a residential district as the Act defines one.",
        excerptKey: "speed-default-80",
        sourceLabel: "Nova Scotia Driver's Handbook - Choosing a safe speed",
        sourceUrl: ch2(50),
      },
      {
        id: "ns_s1_20",
        topic: "rightOfWay",
        question:
          "A pedestrian steps off the curb to cross at an intersection where no crosswalk is painted. What is your duty?",
        choices: [
          "None, because there is no marked crosswalk",
          "Yield to them, because every intersection has a crosswalk whether it is painted or not",
          "Sound your horn to warn them off",
          "Yield only if they are already past the centre line",
        ],
        correctIndex: 1,
        explanation:
          "Every intersection has a crosswalk and many are unmarked. Drivers must yield to pedestrians at all intersections, marked or not.",
        context:
          "The unmarked crosswalk is formed by imaginary lines extending the sidewalks across the street. At an intersection without signals, a pedestrian in either kind of crosswalk has the right of way.",
        trap:
          "Learners read paint as the trigger. In Nova Scotia the intersection itself is the trigger and the paint is only a convenience.",
        excerptKey: "unmarked-crosswalk",
        sourceLabel: "Nova Scotia Driver's Handbook - Unmarked crosswalks",
        sourceUrl: ch2(42),
        commonlyMissed: true,
      },
      {
        id: "ns_s1_21",
        topic: "signals",
        question: "What does a flashing red traffic signal mean?",
        choices: [
          "Slow down and proceed with caution",
          "The signal is broken and controls nothing",
          "Stop, and do not go until you can enter without interfering with approaching traffic",
          "Stop only if a pedestrian is waiting",
        ],
        correctIndex: 2,
        explanation:
          "A flashing red has the same meaning as a stop sign. You stop, and you do not move until you can enter the intersection without interfering with approaching traffic.",
        context:
          "Its partner is the flashing yellow, which has the same meaning as a warning sign: slow down and proceed with caution. A flashing green is different again - it tells facing traffic they may turn left, go straight or turn right.",
        trap:
          "Flashing red and flashing yellow often face each other at the same intersection. Reading yours as the other one is how a driver arrives in the cross traffic's path.",
        excerptKey: "signal-flashing-red",
        sourceLabel: "Nova Scotia Driver's Handbook - Flashing signals",
        sourceUrl: ch2(40),
      },
      {
        id: "ns_s1_22",
        topic: "safety",
        question: "When must Nova Scotia headlights be switched on?",
        choices: [
          "From sunset to sunrise",
          "Only when you cannot see 100 metres ahead",
          "Whenever the driver judges it useful",
          "From half an hour after sunset to half an hour before sunrise",
        ],
        correctIndex: 3,
        explanation:
          "Headlights are required from half an hour after sunset to half an hour before sunrise. That is the clock rule, and a separate visibility rule sits beside it.",
        context:
          "Lights are also required any time fog, rain, snow or other conditions cut visibility, and any time there is not enough light to see a person 300 metres ahead. During the hours when lights are required, it is illegal to run on parking lights or daytime running lights instead of headlights.",
        trap:
          "Daytime running lights leave your tail lights dark. Using them at dusk is the exact case the handbook calls illegal.",
        excerptKey: "headlights-when",
        sourceLabel: "Nova Scotia Driver's Handbook - Lighting equipment",
        sourceUrl: ch4(112),
      },
      {
        id: "ns_s1_23",
        topic: "signs",
        question:
          "A regulatory sign shows two cars inside a red circle with a line struck through it. What is it saying?",
        choices: [
          "Do not pass",
          "Passing is permitted here",
          "Two-way traffic ahead",
          "Two lanes merge ahead",
        ],
        correctIndex: 0,
        explanation:
          "A red circle with a slash denies permission for whatever is drawn inside it. Two cars inside that circle means do not pass.",
        context:
          "The colour of the ring is the whole message on these signs. A green circle grants permission for the thing shown, so the same two cars inside a green circle mean passing is permitted.",
        trap:
          "People read the cars and ignore the ring. Green circle and red circle carry opposite instructions with identical artwork inside them.",
        excerptKey: "sign-green-red-circle",
        sourceLabel: "Nova Scotia Driver's Handbook - Other regulatory signs",
        sourceUrl: ch3(83),
      },
      {
        id: "ns_s1_24",
        topic: "licensing",
        question: "What must a Nova Scotia learner carry while operating a motor vehicle?",
        choices: [
          "Nothing, as long as the supervising driver has a licence",
          "The learner's licence itself",
          "A copy of the consent form signed by a parent",
          "The driver training certificate",
        ],
        correctIndex: 1,
        explanation:
          "The handbook tells learners to always carry the learner's licence with them when operating a motor vehicle. Driving without your licence in your possession is itself a violation of the Motor Vehicle Act.",
        context:
          "Three more documents belong in the vehicle rather than your pocket: the valid motor vehicle permit, the liability insurance card, and the motor vehicle safety inspection report.",
        trap:
          "The supervising driver's licence covers the supervising driver. It does nothing for the person at the wheel.",
        excerptKey: "learner-carry-licence",
        sourceLabel: "Nova Scotia Driver's Handbook - Expiry",
        sourceUrl: ch1(9),
      },
      {
        id: "ns_s1_25",
        topic: "rules",
        question: "May you turn right on a red light in Nova Scotia?",
        choices: [
          "Never",
          "Yes, without stopping, if nothing is coming",
          "Yes, after stopping and making sure the turn can be made safely, unless a sign forbids it",
          "Only between 9 am and 4 pm",
        ],
        correctIndex: 2,
        explanation:
          "A right turn on red is allowed after you have stopped and satisfied yourself the turn is safe. A no turn on red sign switches it off.",
        context:
          "The mirror image is far more restricted. A left turn on a red light is illegal except from a one-way street onto another one-way street, and the same requirement to stop first applies.",
        trap:
          "The permission is for turning, not for rolling. Without the complete stop, the turn is not lawful even on an empty street.",
        excerptKey: "signal-right-on-red",
        sourceLabel: "Nova Scotia Driver's Handbook - Tips",
        sourceUrl: ch2(40),
      },
      {
        id: "ns_s1_26",
        topic: "parking",
        question: "How far from a fire hydrant must you park in Nova Scotia?",
        choices: ["At least 3 metres", "At least 5 metres", "At least 7.5 metres", "At least 10 metres"],
        correctIndex: 1,
        explanation:
          "You may not stop or park within 5 metres of a fire hydrant, or of a driveway entrance to a fire station.",
        context:
          "The parking distances are a short ladder worth memorising in order: 5 metres from a crosswalk or hydrant, 7.5 metres from an intersection, 10 metres from the approach to a flashing beacon, stop sign, yield sign or traffic signal at the roadside, and 15 metres from the nearest rail of a railway crossing.",
        trap:
          "Seven and a half metres is the intersection figure, not the hydrant figure. The two get swapped constantly.",
        excerptKey: "park-hydrant-5m",
        sourceLabel: "Nova Scotia Driver's Handbook - Parking and stopping",
        sourceUrl: ch2(61),
        commonlyMissed: true,
      },
      {
        id: "ns_s1_27",
        topic: "sharing",
        question: "What standing do cyclists have on a Nova Scotia road?",
        choices: [
          "They must stay off the roadway where a sidewalk exists",
          "They have right of way over motor vehicles at all times",
          "They are pedestrians for the purposes of the Motor Vehicle Act",
          "They have the same rights and responsibilities as motorists",
        ],
        correctIndex: 3,
        explanation:
          "The handbook states it twice: under the Nova Scotia Motor Vehicle Act, cyclists have the same rights and responsibilities as motorists.",
        context:
          "That cuts both ways. Cyclists must obey the same traffic rules as everyone else, and drivers must respect their right to share the road. Most collisions between the two happen at intersections, typically when a driver pulls out from a stop sign or driveway or turns across a cyclist's path.",
        trap:
          "Equal rights is not the same as priority. A cyclist running a red light is as wrong as a driver doing it.",
        excerptKey: "bike-same-rights",
        sourceLabel: "Nova Scotia Driver's Handbook - Sharing the Road with Bicycles",
        sourceUrl: ch2(70),
      },
      {
        id: "ns_s1_28",
        topic: "signs",
        question: "What does an orange sign with black lettering tell a Nova Scotia driver?",
        choices: [
          "You are entering a work zone",
          "A detour begins here",
          "A school zone is ahead",
          "The road surface has been newly paved",
        ],
        correctIndex: 0,
        explanation:
          "Work zones are marked with orange warning signs carrying black lettering. They identify the zone and direct you through it.",
        context:
          "Barricades, cones and drums guide you inside the zone, and traffic control persons may be working it with stop and slow paddles. The handbook is direct about the risk: the biggest hazard in a work zone is speed variation between vehicles.",
        trap:
          "Orange is not a lower category of warning. A Do Not Pass sign in a work zone is regulatory, and disobeying it warrants a ticket.",
        excerptKey: "work-orange",
        sourceLabel: "Nova Scotia Driver's Handbook - Construction or Work Zones",
        sourceUrl: ch3(94),
      },
      {
        id: "ns_s1_29",
        topic: "emergencies",
        question: "You are involved in a collision on a Nova Scotia road. What is your first legal duty?",
        choices: [
          "Photograph the scene before anything is moved",
          "Stop immediately",
          "Move both vehicles off the roadway",
          "Telephone your insurance company",
        ],
        correctIndex: 1,
        explanation:
          "The driver of a vehicle involved in a collision must stop immediately. Leaving the scene of a collision is an offence in itself.",
        context:
          "After stopping you must give your name, address and vehicle permit to the person struck, to the other driver or occupant, or to a witness, and give all reasonable assistance to anyone injured.",
        trap:
          "Insurance and photographs come later. The duty that carries the offence is the duty to stop.",
        excerptKey: "collision-must-stop",
        sourceLabel: "Nova Scotia Driver's Handbook - Collisions",
        sourceUrl: ch5(149),
      },
      {
        id: "ns_s1_30",
        topic: "speed",
        question:
          "You are approaching a school zone on a street posted at 50 km/h, and children are present. What is the maximum speed?",
        choices: ["50 km/h", "40 km/h", "30 km/h", "20 km/h"],
        correctIndex: 2,
        explanation:
          "Where the limit before the school zone is 50 km/h, the school zone maximum with children present is 30 km/h. Where the approaching limit is higher than 50, the school zone maximum is 50.",
        context:
          "The rule is a formula rather than a fixed number, and it applies whatever the time of day - not only at bell times. The Registry publishes exactly this wording on its handbook page as an amendment, which settles a conflict inside the book itself.",
        trap:
          "Page 69 of the same handbook says a flat 50 in a school zone. The 30-or-50 formula on page 51 is the version the Registry has confirmed, and it is the one to answer with.",
        excerptKey: "amend-school-zone",
        sourceLabel: "Registry of Motor Vehicles - Amendments to the Driver's Handbook",
        sourceUrl: AMEND,
        commonlyMissed: true,
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Core Rules of the Road",
    difficulty: "easy",
    description:
      "Thirty questions on the ordinary business of driving in Nova Scotia: turning, passing, lane markings, parking, and the rules the handbook states plainly and the test asks anyway.",
    questions: [
      {
        id: "ns_s2_01",
        topic: "signs",
        question:
          "On a two-lane road, a broken yellow line runs down the centre. What does it permit?",
        choices: [
          "Passing in your direction only",
          "No passing in either direction",
          "Parking along the centre of the road",
          "Passing with care in both directions",
        ],
        correctIndex: 3,
        explanation:
          "A broken or dotted yellow centre line on a two-lane, two-way road permits passing with care in both directions.",
        context:
          "Yellow separates traffic moving in opposite directions; white separates traffic moving the same way. Where the centre line is a broken line beside a solid one, passing with care is permitted only if the broken line is on your side.",
        trap:
          "The colour tells you about direction of travel, not about permission. Permission comes from whether the line on your side is broken.",
        excerptKey: "marking-broken-yellow",
        sourceLabel: "Nova Scotia Driver's Handbook - Rules about solid and broken lines",
        sourceUrl: ch3(84),
      },
      {
        id: "ns_s2_02",
        topic: "rules",
        question: "What does the Nova Scotia handbook require you to do before you overtake another vehicle?",
        choices: [
          "Signal your intention to pass and sound your horn",
          "Flash your headlights",
          "Signal only, since a horn would alarm the other driver",
          "Move left first and signal once you are alongside",
        ],
        correctIndex: 0,
        explanation:
          "You must signal your intention to pass and sound your horn before overtaking. The handbook says the horn signal places the driver being passed under a legal obligation to help you past.",
        context:
          "The duty runs the other way too. When you are being passed and the passing driver blows the horn, you move to the right edge of the pavement and never increase your speed.",
        trap:
          "Almost nobody actually honks when passing on a Nova Scotia road, so learners assume it cannot be a rule. It is written into the handbook and it is fair game on the test.",
        excerptKey: "pass-signal-horn",
        sourceLabel: "Nova Scotia Driver's Handbook - Overtaking and passing",
        sourceUrl: ch2(57),
        commonlyMissed: true,
      },
      {
        id: "ns_s2_03",
        topic: "rightOfWay",
        question:
          "You are turning left at a green light. An oncoming vehicle is coming straight through. Who yields?",
        choices: [
          "The oncoming vehicle, because you arrived first",
          "You do",
          "Neither, because a green light gives both of you the right of way",
          "Whichever vehicle is smaller",
        ],
        correctIndex: 1,
        explanation:
          "At a green light, a driver turning left must yield to oncoming vehicles and to any pedestrians in the path of the turn.",
        context:
          "The same rule is stated again for two facing vehicles that arrive together: both may go straight or turn right, but the one that wants to turn left waits until the turn can be made safely.",
        trap:
          "A green light is permission to proceed when it is safe, not a grant of priority. It never overrides the duty to yield to oncoming traffic.",
        excerptKey: "signal-green-left",
        sourceLabel: "Nova Scotia Driver's Handbook - Traffic signal lights",
        sourceUrl: ch2(39),
      },
      {
        id: "ns_s2_04",
        topic: "parking",
        question: "You are parking downhill on a street with a curb. Which way do you turn the front wheels?",
        choices: [
          "To the left",
          "Straight ahead",
          "To the right",
          "It makes no difference with a curb",
        ],
        correctIndex: 2,
        explanation:
          "Facing downhill, with a curb or without one, you turn the wheels to the right so a rolling vehicle runs into the curb or off the road rather than into traffic.",
        context:
          "The uphill case is the one worth memorising separately, because it splits. Facing uphill with a curb, turn the wheels to the left; facing uphill without a curb, turn them to the right.",
        trap:
          "People memorise a single rule for hills. Only the downhill case is the same both ways; uphill changes depending on whether there is a curb to catch you.",
        excerptKey: "park-hill-wheels",
        sourceLabel: "Nova Scotia Driver's Handbook - Parking on a hill",
        sourceUrl: ch2(64),
        commonlyMissed: true,
      },
      {
        id: "ns_s2_05",
        topic: "signs",
        question: "A double solid yellow line runs down the middle of the road. What does it mean?",
        choices: [
          "Passing is permitted for the direction with the outer line",
          "You may cross to turn left but not to pass",
          "The road ahead is divided",
          "You cannot cross the lines to pass in either direction",
        ],
        correctIndex: 3,
        explanation:
          "Where the centre line is a continuous double solid yellow, you cannot cross it to pass in either direction.",
        context:
          "The handbook lists a handful of situations where the solid-and-broken rules do not apply at all: entering or leaving the highway somewhere other than an intersection, finishing a pass you legally began, lines that are not clearly visible, and weather that makes driving left of the lines the prudent thing to do.",
        trap:
          "Double solid lines forbid passing, not every crossing. The exception list is short and it is about entering, leaving and finishing - not about convenience.",
        excerptKey: "marking-double-solid",
        sourceLabel: "Nova Scotia Driver's Handbook - Rules about solid and broken lines",
        sourceUrl: ch3(84),
      },
      {
        id: "ns_s2_06",
        topic: "rules",
        question: "Where is passing described as always unsafe and usually illegal in Nova Scotia?",
        choices: [
          "On any curve or hill where you cannot see at least 150 metres ahead",
          "On any curve or hill where you cannot see at least 60 metres ahead",
          "On any hill, but curves are permitted with care",
          "Only where a Do Not Pass sign is posted",
        ],
        correctIndex: 0,
        explanation:
          "The handbook's list of places where passing is always unsafe and usually illegal includes any curve or hill where you cannot see at least 150 metres ahead.",
        context:
          "The rest of the list: at intersections in cities and towns or at railway crossings, at marked rural intersections, wherever a solid yellow line runs in your lane beside a broken line in the oncoming lane, wherever there is a double solid yellow, and at any crosswalk where a car has stopped for a pedestrian.",
        trap:
          "Sixty metres is the sight distance in the 50 km/h intersection rule. One hundred and fifty is the passing figure, and it is also the distance for dimming your headlights for an oncoming vehicle.",
        excerptKey: "pass-unsafe-places",
        sourceLabel: "Nova Scotia Driver's Handbook - Passing",
        sourceUrl: ch2(59),
      },
      {
        id: "ns_s2_07",
        topic: "signals",
        question: "Which hand-and-arm signal means the driver intends to turn right?",
        choices: [
          "Hand and arm extended horizontally from the vehicle",
          "Hand and arm extended out and upward",
          "Hand and arm extended out and downward",
          "Hand held flat, palm forward",
        ],
        correctIndex: 1,
        explanation:
          "Out and upward is right. Horizontal is left, and out and downward means stopping or slowing.",
        context:
          "The Motor Vehicle Act requires the signal to be given from the left side of the vehicle. Hand signals are permitted, but the handbook warns they may not be seen as readily as lights, so use them cautiously.",
        trap:
          "Right and stop are the two people confuse under pressure, because both involve the arm leaving the horizontal. Up is right, down is stop.",
        excerptKey: "statute-hand-signal-directions",
        sourceLabel: "Motor Vehicle Act - Section 119(3), Signal required",
        sourceUrl: act(87),
      },
      {
        id: "ns_s2_08",
        topic: "safety",
        question:
          "A child weighs 15 kilograms. Which restraint does Nova Scotia require?",
        choices: [
          "A rear-facing infant seat",
          "A booster seat",
          "A forward-facing child seat with a tether strap",
          "The vehicle's own seat belt",
        ],
        correctIndex: 2,
        explanation:
          "From 10 kg to 18 kg the child rides in a forward-facing child seat meeting Canadian Motor Vehicle Safety Standard 213, secured by the seat belt and by a tether strap.",
        context:
          "The ladder runs by weight. Birth to 10 kg is a rear-facing infant seat to Standard 213.1. Over 18 kg but under 145 cm tall is a booster seat to Standard 213.2, required while the child is under nine years of age unless they have already reached 145 cm.",
        trap:
          "The tether strap is part of the requirement, not an accessory. A forward-facing seat held only by the belt is not correctly installed.",
        excerptKey: "child-forward-facing",
        sourceLabel: "Nova Scotia Driver's Handbook - Seat belts, child restraints, and the law",
        sourceUrl: ch4(117),
      },
      {
        id: "ns_s2_09",
        topic: "signs",
        question:
          "A square sign shows a black arrow pointing straight up and another curving right, in the same panel. What does it require?",
        choices: [
          "You must turn right from this lane",
          "Right turns are prohibited here",
          "The right lane ends ahead",
          "You may go straight through or turn right from this lane",
        ],
        correctIndex: 3,
        explanation:
          "Lane arrow signs tell drivers what movements the designated lane allows. Two arrows mean both movements are available from that lane.",
        context:
          "The single-arrow version is stricter than people expect. A right turn only lane sign tells drivers approaching the intersection in that lane that they must only turn right from it, and the same design reversed does the job for left turns.",
        trap:
          "Reading a lane arrow as advice rather than instruction is how a driver ends up going straight from a turn-only lane, which is a manoeuvre nobody around them expects.",
        excerptKey: "sign-chevron",
        sourceLabel: "Nova Scotia Driver's Handbook - Lane arrows",
        sourceUrl: ch3(93),
      },
      {
        id: "ns_s2_10",
        topic: "rules",
        question: "How does Nova Scotia say you should enter a roundabout?",
        choices: [
          "Entering traffic yields to traffic already in the circle",
          "Traffic in the circle yields to entering traffic",
          "Whoever arrives first goes, regardless of position",
          "Entering traffic has priority on a single-lane roundabout",
        ],
        correctIndex: 0,
        explanation:
          "Vehicles entering a roundabout or rotary must yield to traffic in the circle. Drivers already circulating have the right of way over entering traffic.",
        context:
          "Roundabouts are designed for 30 to 50 km/h, so slow down on the approach and enter on a gap. All traffic travels counter-clockwise around the central island, and you signal and exit to the right.",
        trap:
          "Do not assume circulating drivers are signalling correctly, or at all. The handbook says so explicitly, and the yield is yours to make either way.",
        excerptKey: "roundabout-yield",
        sourceLabel: "Nova Scotia Driver's Handbook - Travelling through roundabouts and rotaries",
        sourceUrl: ch2(64),
      },
      {
        id: "ns_s2_11",
        topic: "licensing",
        question: "How long must a Nova Scotia learner hold the Class 7 licence before taking the road test?",
        choices: [
          "Three months",
          "Twelve months, reduced to nine with an approved driver education course",
          "Six months",
          "Nine months, with no exceptions",
        ],
        correctIndex: 1,
        explanation:
          "The minimum practice period is 12 months, and it can be cut to 9 months by completing a recognized driver education or training programme.",
        context:
          "This is where the printed handbook is out of date. Chapter 1 still says six months, or three with the long course, which stopped being true in 2016. The Registry's Graduated Drivers Licence System page and the Permits Directory both carry the 12 and the 9.",
        trap:
          "Answering from the book gets this wrong, and so does answering from an older sibling. The number a Nova Scotia learner needs is 12, or 9 with the course.",
        excerptKey: "gdl-practice-12-months",
        sourceLabel: "Registry of Motor Vehicles - Graduated Drivers Licence System",
        sourceUrl: GDL,
        commonlyMissed: true,
      },
      {
        id: "ns_s2_12",
        topic: "parking",
        question: "How long may a vehicle be left parked on a Nova Scotia street or highway?",
        choices: [
          "No longer than 12 hours",
          "No longer than 48 hours",
          "No longer than 24 hours",
          "Indefinitely, unless a sign says otherwise",
        ],
        correctIndex: 2,
        explanation:
          "You may not park a vehicle on a street or highway for a period longer than 24 hours.",
        context:
          "The handbook warns that not all parking by-laws are posted on signs, so the absence of a sign is not permission. If you must stop, get the vehicle clear of the travelled portion of the highway first.",
        trap:
          "An unposted street is the case the rule was written for. The 24 hours applies whether or not anything is signed.",
        excerptKey: "park-24-hours",
        sourceLabel: "Nova Scotia Driver's Handbook - Parking and stopping",
        sourceUrl: ch2(61),
      },
      {
        id: "ns_s2_13",
        topic: "signs",
        question:
          "You see a rectangular white sign reading MAXIMUM above a number. Under ideal conditions, what does that number represent?",
        choices: [
          "A recommended speed for the curve ahead",
          "The minimum speed permitted in the left lane",
          "The average speed of traffic on that road",
          "The maximum speed allowable, to be reduced when conditions are poor",
        ],
        correctIndex: 3,
        explanation:
          "Speed signs indicate the maximum speed allowable under ideal conditions. When conditions are poor or visibility is restricted, you reduce your speed below the posted figure.",
        context:
          "A separate sign warns of a change in maximum speed limit ahead so you can adjust before you reach it. The advisory speed under a curve warning sign is a different thing again - that one indicates a safe speed for the turn.",
        trap:
          "A posted maximum is a ceiling, never a target. Section 101 of the Act still requires a careful and prudent speed regardless of what the sign says.",
        excerptKey: "sign-max-speed-tab",
        sourceLabel: "Nova Scotia Driver's Handbook - Examples of Signs and Their Meanings",
        sourceUrl: ch3(90),
      },
      {
        id: "ns_s2_14",
        topic: "sharing",
        question: "How much space does a motorcycle have a right to on a Nova Scotia highway?",
        choices: [
          "A full highway lane",
          "Half a lane, so a car may share the lane alongside",
          "Whatever the motorcyclist can safely occupy",
          "The right-hand third of the lane",
        ],
        correctIndex: 0,
        explanation:
          "The driver of a motorcycle is entitled to a full highway lane. The handbook calls it both a right and a safety precaution.",
        context:
          "Most fatal motorcycle crashes involve a collision with a car, and usually the car driver did not see the motorcyclist. More than half of those collisions happen in good driving conditions, so clear weather is not a reason to relax the search.",
        trap:
          "A motorcycle takes up less width than a car, which tempts drivers to share the lane. The entitlement is to the whole lane.",
        excerptKey: "moto-full-lane",
        sourceLabel: "Nova Scotia Driver's Handbook - Drivers and motorcycles",
        sourceUrl: ch2(69),
      },
      {
        id: "ns_s2_15",
        topic: "impairment",
        question: "What is the legal blood alcohol threshold for impairment in Canada?",
        choices: [".05 per cent", ".08 per cent", ".10 per cent", "There is no fixed threshold"],
        correctIndex: 1,
        explanation:
          "Legal impairment is defined as a blood alcohol content of .08 per cent or more. The handbook adds that you can be charged and convicted below that level if you show other symptoms of impairment.",
        context:
          "Nova Scotia also acts well below .08 administratively. A roadside screening device reading warn - between 50 mg per 100 ml and 80 mg per 100 ml - lets police suspend a licence for 7, 15 or 30 days depending on your record over the past ten years.",
        trap:
          "The .08 is the criminal line, not a safe allowance. Impairment begins with the first drink, and everyone in the GDL programme is at zero regardless.",
        excerptKey: "bac-08",
        sourceLabel: "Nova Scotia Driver's Handbook - Drinking and driving",
        sourceUrl: ch6(153),
      },
      {
        id: "ns_s2_16",
        topic: "rules",
        question: "You are making a right turn at an intersection. Where should your vehicle be positioned?",
        choices: [
          "Wide of the curb so you have room to swing the front end",
          "In the middle of the roadway until you begin to turn",
          "Close to the right-hand edge of the road, so nothing can move between you and the curb",
          "Left of centre, to give yourself the widest arc",
        ],
        correctIndex: 2,
        explanation:
          "For a right turn you stay close to the right-hand edge of the road, so that another vehicle cannot move between your vehicle and the curb.",
        context:
          "Reduce speed before the turn, do a shoulder check, yield the right of way, then accelerate slightly through it. If pedestrians are in your path you wait for them to cross.",
        trap:
          "The gap you leave beside the curb is exactly where a cyclist ends up. The handbook devotes a whole section to that collision and calls it the right hook.",
        excerptKey: "turn-right-close",
        sourceLabel: "Nova Scotia Driver's Handbook - Turning",
        sourceUrl: ch2(54),
      },
      {
        id: "ns_s2_17",
        topic: "signs",
        question:
          "A yellow diamond shows a black checkerboard pattern with an arrow. What is it warning you about?",
        choices: [
          "A railway crossing at an angle",
          "The end of a divided highway",
          "A row of hazard markers ahead",
          "A sharp turn or bend in the roadway ahead",
        ],
        correctIndex: 3,
        explanation:
          "The checkerboard design warns you to slow down for a sharp turn or bend, and the arrow shows which way the roadway goes.",
        context:
          "Chevron signs do a related job. They are posted in groups through a sharp curve to guide you around it, one after another, rather than announcing it once from a distance.",
        trap:
          "A checkerboard is not a hazard marker. Hazard markers use sloped black lines and tell you which side of an obstruction to drive on.",
        excerptKey: "sign-checkerboard",
        sourceLabel: "Nova Scotia Driver's Handbook - Warning signs",
        sourceUrl: ch3(92),
      },
      {
        id: "ns_s2_18",
        topic: "emergencies",
        question:
          "You come across an emergency vehicle stopped on the shoulder with its lights flashing, on an undivided road posted at 80 km/h. What must you do?",
        choices: [
          "Slow to 60 km/h, and move into another lane away from it if there are two or more lanes in your direction and it is safe",
          "Maintain the posted limit and move over if convenient",
          "Stop completely until it moves off",
          "Slow to 30 km/h and sound your horn",
        ],
        correctIndex: 0,
        explanation:
          "You slow to 60 km/h, or to the posted limit if it is lower than 60. Where there are two or more lanes in your direction you must also move into a lane farther from the stopped vehicle if you can do it safely.",
        context:
          "The list of vehicles this covers is long: ambulances, police, fire department and Department of Lands and Forestry fire vehicles, fire chiefs' and deputy chiefs' vehicles, conservation officers, motor vehicle and carrier inspectors, public safety vehicles such as sheriffs and bridge patrol, and tow trucks stopped at a fire or collision or assisting a vehicle.",
        trap:
          "The exemption is narrow and it is only about medians. You are released only where a median separates you, on a divided highway - not merely because the vehicle is on the other side of the road.",
        excerptKey: "emerg-slow-60",
        sourceLabel: "Nova Scotia Driver's Handbook - Important GDL Changes, Emergency vehicles",
        sourceUrl: supp(8),
        commonlyMissed: true,
      },
      {
        id: "ns_s2_19",
        topic: "speed",
        question:
          "You are on a highway with a climbing lane and your vehicle cannot maintain 70 km/h. What does a posted sign require?",
        choices: [
          "Pull off the road entirely",
          "Use your four-way flashers",
          "Sound your horn every 30 seconds",
          "Move into the left lane so faster traffic can use the right",
        ],
        correctIndex: 1,
        explanation:
          "On a climbing lane, vehicles travelling at less than 70 km/h must use four-way flashers when a sign on the right-hand side of the road says so.",
        context:
          "Climbing lanes exist so faster traffic can get past slower traffic. Everyone keeps right unless passing, passing happens in the left lane, and you do not start a pass once you reach the solid line at the end of the climbing lane.",
        trap:
          "At the end of a climbing lane the vehicle in the right lane has the right of way. A pass begun too late has nowhere to go.",
        excerptKey: "climbing-lane-flashers",
        sourceLabel: "Nova Scotia Driver's Handbook - Two-laned highway with climbing lane",
        sourceUrl: ch3(86),
      },
      {
        id: "ns_s2_20",
        topic: "safety",
        question: "What is the minimum legal tread depth for a tire in Nova Scotia?",
        choices: ["0.8 millimetres", "1.5 millimetres", "3 millimetres", "5 millimetres"],
        correctIndex: 1,
        explanation:
          "The handbook has a qualified person check for a tread depth of at least 1.5 millimetres, along with bumps, bulges, exposed cords and deep cuts.",
        context:
          "Nova Scotia also fences the studded tire season: studded tires are legal only between October 15 and April 30. For winter traction generally the advice is snow or all-season tires on all four wheels.",
        trap:
          "Studded tires are not year-round equipment. Running them in May is an offence even though they improve grip on the one icy morning you were worried about.",
        excerptKey: "tire-tread",
        sourceLabel: "Nova Scotia Driver's Handbook - Tires",
        sourceUrl: ch4(109),
      },
      {
        id: "ns_s2_21",
        topic: "rightOfWay",
        question: "You are pulling out of a shopping centre parking lot onto a street. What is required?",
        choices: [
          "Nothing special, since the exit is signed",
          "Yield to pedestrians only",
          "Stop and yield the right of way to all other vehicles and pedestrians",
          "Merge at the speed of traffic without stopping",
        ],
        correctIndex: 2,
        explanation:
          "When leaving a private driveway or parking lot you stop and yield the right of way to all other vehicles and pedestrians.",
        context:
          "Before emerging from an alley, driveway or building in a business or residential district you must stop immediately before driving onto the sidewalk, or onto the sidewalk area that runs across the alleyway.",
        trap:
          "The pedestrian on the sidewalk crossing in front of you is the one drivers forget, because they are watching for a gap in the street traffic.",
        excerptKey: "driveway-yield",
        sourceLabel: "Nova Scotia Driver's Handbook - Right of way",
        sourceUrl: ch2(45),
      },
      {
        id: "ns_s2_22",
        topic: "signs",
        question:
          "A yellow diamond shows two arrows pointing in opposite directions on a divided panel. What is it telling you?",
        choices: [
          "A divided highway begins ahead",
          "A two-way left turn lane starts here",
          "Traffic merges from both sides",
          "Two-way traffic - the normal rules for a two-way road apply here",
        ],
        correctIndex: 3,
        explanation:
          "The two-way traffic sign tells drivers that the section of road they are on is a two-way road, and that the normal rules of the road for two-way operation apply.",
        context:
          "It often follows a divided highway ends sign, which warns that two-way traffic lies beyond that section. The pair is there because a driver who has been on a divided highway stops expecting oncoming traffic.",
        trap:
          "A divided highway ahead sign is the mirror image and means the opposite - you are moving from undivided to divided road.",
        excerptKey: "sign-divided-ends",
        sourceLabel: "Nova Scotia Driver's Handbook - Warning signs",
        sourceUrl: ch3(91),
      },
      {
        id: "ns_s2_23",
        topic: "rules",
        question: "What is a two-way-left-turn lane, and how may it be used?",
        choices: [
          "A centre lane shared by both directions for left turns, never for passing",
          "A centre lane for through traffic when the outer lanes are congested",
          "A left lane reserved for traffic travelling above the speed limit",
          "A lane either direction may use to overtake slower vehicles",
        ],
        correctIndex: 0,
        explanation:
          "On certain multi-lane highways the centre lane is reserved exclusively as a two-way-left-turn lane, shared by traffic in both directions for left turns. It is never to be used to pass or overtake.",
        context:
          "Move into it as close to your exit point as possible rather than driving along it, reduce speed, stop near the point of the turn, and yield to oncoming vehicles. Drivers approaching in the same lane from the other direction must yield too, so each of you gives way enough for traffic to keep moving.",
        trap:
          "Using it as a running lane for even a short distance is the misuse the handbook names, and it is exactly where a head-on meeting happens.",
        excerptKey: "marking-two-way-left",
        sourceLabel: "Nova Scotia Driver's Handbook - Two-way-left-turn lanes",
        sourceUrl: ch3(87),
      },
      {
        id: "ns_s2_24",
        topic: "licensing",
        question: "How often must a Nova Scotia driver's licence be renewed?",
        choices: [
          "Every two years",
          "Every five years",
          "Every three years",
          "Every ten years",
        ],
        correctIndex: 1,
        explanation:
          "You must renew your driver's licence every five years, and the handbook makes it your responsibility to see that it happens.",
        context:
          "Service Nova Scotia sends a renewal notice about two months before your birthday, to the address on file, so keeping your address current matters. If no notice arrives you still have to complete an application at an Access Nova Scotia centre or Registry office.",
        trap:
          "The vehicle permit and licence plate run on a different clock - every two years for passenger vehicles and light trucks. The safety inspection is annual again.",
        excerptKey: "renew-five-years",
        sourceLabel: "Nova Scotia Driver's Handbook - Renewing Your Licence",
        sourceUrl: ch1(23),
      },
      {
        id: "ns_s2_25",
        topic: "parking",
        question: "How far from a railway crossing must you avoid stopping or parking?",
        choices: [
          "Within 5 metres of the nearest rail",
          "Within 10 metres of the nearest rail",
          "Within 15 metres of the nearest rail",
          "Within 30 metres of the nearest rail",
        ],
        correctIndex: 2,
        explanation:
          "You may not stop or park within 15 metres of the nearest rail of a railway crossing.",
        context:
          "Thirty metres is a different railway number: within 30 metres of a railway crossing the speed limit drops to 50 km/h. One figure is about where you may leave a vehicle, the other about how fast you may approach.",
        trap:
          "Mixing the two railway distances is easy. Fifteen metres is parking, thirty metres is speed.",
        excerptKey: "park-railway-15m",
        sourceLabel: "Nova Scotia Driver's Handbook - Parking and stopping",
        sourceUrl: ch2(61),
      },
      {
        id: "ns_s2_26",
        topic: "sharing",
        question:
          "A vehicle displays an orange triangle with a red border on its rear. What is it, and what should you do?",
        choices: [
          "A hazardous load marker; keep 150 metres back",
          "A student driver marker; allow extra room",
          "A slow-moving-vehicle sign; reduce your speed",
          "An oversized load marker; do not pass",
        ],
        correctIndex: 2,
        explanation:
          "That is the slow-moving-vehicle sign. It goes on the rear of a farm tractor or its load and on any other vehicle that cannot maintain more than 40 km/h under normal conditions, and when you see it you reduce your speed.",
        context:
          "The 40 km/h figure is the definition, so the sign is not decoration on a tractor - it is a statement about the speed you are closing on. That closing speed is what turns a rural highway approach into a collision.",
        trap:
          "Drivers judge the gap and not the speed difference. Closing on something doing 30 km/h at 80 km/h eats the distance far faster than instinct allows.",
        excerptKey: "slow-moving-sign",
        sourceLabel: "Nova Scotia Driver's Handbook - Slow-moving vehicles",
        sourceUrl: ch4(129),
      },
      {
        id: "ns_s2_27",
        topic: "signals",
        question:
          "You are in a lane with a red X illuminated on a signal directly above it. What must you do?",
        choices: [
          "Continue, but be ready to stop",
          "Use the lane only to pass",
          "Treat the X as a warning that the lane ends ahead",
          "Never drive in that lane, regardless of any other signs or signals",
        ],
        correctIndex: 3,
        explanation:
          "A red X over a lane means never drive in that lane, regardless of any other signs or signals. Lane control signals are mounted directly over the lane they govern.",
        context:
          "These are used on commuter routes where the direction of heaviest traffic changes through the day. A green signal over a lane means you may drive in it, but every other sign and signal still applies.",
        trap:
          "A green arrow over the next lane is not permission to be in the one under the X. The X overrides everything.",
        excerptKey: "signal-lane-control",
        sourceLabel: "Nova Scotia Driver's Handbook - Lane control signals",
        sourceUrl: ch2(41),
      },
      {
        id: "ns_s2_28",
        topic: "safety",
        question: "Where must the driver of a Nova Scotia vehicle sit in relation to the steering wheel?",
        choices: [
          "Close enough that the arms are slightly bent when grasping the wheel",
          "As far back as the seat allows, for crash protection",
          "Close enough that the arms are fully straight when grasping the wheel",
          "Wherever the mirrors can be seen without moving the head",
        ],
        correctIndex: 0,
        explanation:
          "Adjust the seat back so your arms are slightly bent when you grasp the steering wheel. Hands go at ten and two, or nine and three.",
        context:
          "The seat position is set from the pedals first: your right foot should reach the floor between the brake and the gas with a slight bend in the leg, and you should never need excessive force to press a pedal to the floor. Your line of vision should be half-way between the top of the wheel and the top of the windshield.",
        trap:
          "Straight arms feel commanding and cost you leverage. The bend is what lets you turn quickly without shifting your grip.",
        excerptKey: "hand-position",
        sourceLabel: "Nova Scotia Driver's Handbook - Steering",
        sourceUrl: ch4(122),
      },
      {
        id: "ns_s2_29",
        topic: "impairment",
        question: "How does alcohol leave the body?",
        choices: [
          "Through black coffee and cold water",
          "Through time, and nothing else speeds it up",
          "Through exercise, which burns it off",
          "Through eating a substantial meal",
        ],
        correctIndex: 1,
        explanation:
          "The only way to remove alcohol from your system is through time. Black coffee, cold showers and a jog around the block do not remove it.",
        context:
          "It takes more than an hour to eliminate each standard drink, and the handbook defines a standard drink as a 340 ml bottle of beer, 43 ml of spirits or a 142 ml glass of unfortified wine - all containing the same amount of alcohol.",
        trap:
          "As the effects wear off you feel better and more in control, which the handbook flags as its own hazard: feeling better is not the same as being sober.",
        excerptKey: "alcohol-only-time",
        sourceLabel: "Nova Scotia Driver's Handbook - Drinking and driving",
        sourceUrl: ch6(154),
      },
      {
        id: "ns_s2_30",
        topic: "emergencies",
        question: "Your brakes fail while you are driving. What does the handbook tell you to try first?",
        choices: [
          "Pull the parking brake on hard",
          "Shift into a lower gear and steer for the shoulder",
          "Pump the brake pedal several times to build up hydraulic pressure",
          "Switch off the ignition",
        ],
        correctIndex: 2,
        explanation:
          "Pump the brake pedal several times first, to build enough hydraulic pressure to stop. Only if that fails do you go to the parking brake.",
        context:
          "The parking brake is applied gently but firmly while holding the release button, which lets you increase or decrease braking pressure by hand. Once you are stopped, do not attempt to drive away - get help.",
        trap:
          "Yanking the parking brake on hard locks the rear wheels and puts you into a skid. Gentle and firm, with the release button held, is the technique.",
        excerptKey: "brake-failure",
        sourceLabel: "Nova Scotia Driver's Handbook - Brake failure",
        sourceUrl: ch5(144),
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Real Test Difficulty",
    difficulty: "medium",
    description:
      "Thirty-five questions pitched where the real Knowledge Test sits: exact distances, the wording of the sign families, and the rules the handbook states once and never repeats.",
    questions: [
      {
        id: "ns_s3_01",
        topic: "signs",
        question:
          "A regulatory sign shows a black arrow bent around a black bar, with the words KEEP RIGHT nearby. What kind of sign is it and what does it require?",
        choices: [
          "A warning sign advising you to keep right if convenient",
          "A guidance sign showing the route around a detour",
          "A work zone sign marking the end of a lane closure",
          "A regulatory sign requiring you to keep to the right of a traffic island or obstruction",
        ],
        correctIndex: 3,
        explanation:
          "This is the regulatory sign requiring you to keep to the right of the traffic island or obstruction. Regulatory signs indicate the laws affecting the use of the highway, and you must obey them unless a Peace Officer directs otherwise.",
        context:
          "Hazard warning signs do a similar job with sloped black lines. Where the lines slope to the right you drive to the right of the sign, and where they slope to the left you drive to the left.",
        trap:
          "The sloped lines look decorative and they are the instruction. Reading them the wrong way puts you on the wrong side of a concrete island.",
        excerptKey: "sign-hazard-marker",
        sourceLabel: "Nova Scotia Driver's Handbook - Examples of Signs and Their Meanings",
        sourceUrl: ch3(90),
      },
      {
        id: "ns_s3_02",
        topic: "speed",
        question:
          "You are approaching an intersection where buildings block your view along the cross street to about 40 metres. You are within 15 metres of it. What is the speed limit?",
        choices: [
          "50 km/h",
          "30 km/h",
          "80 km/h",
          "The posted limit, unchanged",
        ],
        correctIndex: 0,
        explanation:
          "Within 15 metres of an intersection where your view along the intersecting highway is reduced to less than 60 metres in either direction, the maximum is 50 km/h.",
        context:
          "The rule has an exception built into it: it does not apply when you are travelling on a through street or highway, or at a traffic-controlled intersection. So a blind corner on a through road is governed by whatever is posted.",
        trap:
          "Two distances live in this one rule and they are easy to swap. Fifteen metres is how close you are; sixty metres is how far you can see.",
        excerptKey: "speed-50-obstructed",
        sourceLabel: "Nova Scotia Driver's Handbook - Choosing a safe speed",
        sourceUrl: ch2(51),
        commonlyMissed: true,
      },
      {
        id: "ns_s3_03",
        topic: "rules",
        question:
          "Two vehicles ahead of you are travelling in the same direction on a two-lane road. The first pulls out to overtake the second. What may you do?",
        choices: [
          "Follow it out and pass both vehicles in one manoeuvre",
          "Wait for the first vehicle to complete its pass, then proceed",
          "Pass on the right while the left lane is occupied",
          "Sound your horn and pass alongside",
        ],
        correctIndex: 1,
        explanation:
          "Where there are only two lanes, never follow another vehicle that has already begun to pass a slower vehicle. Wait for the first to finish passing safely, then proceed.",
        context:
          "The whole passing sequence assumes you can see the left side of the highway clearly and free of oncoming traffic. A vehicle already out there is occupying the space you would need and blocking the view you would need it for.",
        trap:
          "Two cars passing in convoy doubles the time the oncoming lane is occupied without doubling the sight distance available.",
        excerptKey: "pass-never-second",
        sourceLabel: "Nova Scotia Driver's Handbook - Overtaking and passing",
        sourceUrl: ch2(57),
      },
      {
        id: "ns_s3_04",
        topic: "licensing",
        question: "How long does a Nova Scotia newly licensed driver remain at Class 5N?",
        choices: [
          "One year",
          "Exactly two years, after which the licence changes automatically",
          "At least two years, with no maximum",
          "Until the driver turns 18",
        ],
        correctIndex: 2,
        explanation:
          "The newly licensed stage lasts at least two years, and there is no maximum. Drivers who never complete the exit requirements stay in it indefinitely.",
        context:
          "Getting out takes a positive act. You complete a six-hour defensive driving course or a recognized driver training course of 25 hours theory and 10 hours driving, and you provide the certificate to the Registry for recording. Without that certificate the stage simply does not end.",
        trap:
          "Nothing happens on its own at the two-year mark. The driver who assumes the licence upgrades itself is still a 5N years later, still at zero blood alcohol and still under curfew.",
        excerptKey: "gdl-no-certificate",
        sourceLabel: "Registry of Motor Vehicles - Graduated Drivers Licence System",
        sourceUrl: GDL,
        commonlyMissed: true,
      },
      {
        id: "ns_s3_05",
        topic: "signs",
        question:
          "In a Nova Scotia work zone, a sign shows a symbol of a person. What does the symbol specifically indicate?",
        choices: [
          "A pedestrian crossing runs through the work zone",
          "A traffic control person may be present at some point",
          "The work zone is a designated walking route",
          "Workers are present on the site right now",
        ],
        correctIndex: 3,
        explanation:
          "Human activity signs are the ones with a person on them, and they are used only when the workplace is active - people are working and at risk of being struck.",
        context:
          "That makes them different from general work zone signs, which stay up until the road is returned to normal whether or not anyone is on site. Red or orange flags are used on human activity signs when they sit close to the ground.",
        trap:
          "A work zone with the general signs still up may be empty. A human activity sign means someone is standing in it now.",
        excerptKey: "work-human-activity",
        sourceLabel: "Nova Scotia Driver's Handbook - Work zone signs",
        sourceUrl: ch3(97),
      },
      {
        id: "ns_s3_06",
        topic: "safety",
        question:
          "How far away must your brake lights be plainly visible in normal sunlight?",
        choices: ["30 metres", "60 metres", "100 metres", "150 metres"],
        correctIndex: 2,
        explanation:
          "Red brake lights are required on every registered motor vehicle and must be plainly visible in normal sunlight from 100 metres.",
        context:
          "The lighting distances form a short set. A horn must be audible at 60 metres, a number plate readable at 15 metres, and turn signals visible at 150 metres on vehicles 2.05 metres or more wide, 100 metres on narrower ones.",
        trap:
          "One hundred and fifty metres attaches to wide vehicles' turn signals, not to brake lights. Reading the width condition out of the rule is what scrambles the set.",
        excerptKey: "brake-lights-100m",
        sourceLabel: "Nova Scotia Driver's Handbook - Lighting equipment",
        sourceUrl: ch4(112),
      },
      {
        id: "ns_s3_07",
        topic: "impairment",
        question:
          "A roadside screening device reads warn for a Nova Scotia driver. What does that mean and what can follow?",
        choices: [
          "A reading between .05 and .08, and a suspension of 7, 15 or 30 days depending on prior incidents",
          "A reading above .08, and immediate arrest",
          "A reading under .05, and a warning with no consequence",
          "An inconclusive reading, and a repeat test at the station",
        ],
        correctIndex: 0,
        explanation:
          "Warn means the device registers between 50 mg per 100 ml of blood and 80 mg per 100 ml. Police may then suspend the licence for 7, 15 or 30 days, depending on whether there have been similar incidents in the past ten years.",
        context:
          "A reading of fail means arrest, and you go to the station for a breathalyzer. Refusing either the roadside device or the breathalyzer is itself an offence, charged as failing to comply or refusing the breathalyzer.",
        trap:
          "Warn is not a caution with no teeth. It is a suspension, and the ten-year lookback means an old incident lengthens it.",
        excerptKey: "roadside-warn",
        sourceLabel: "Nova Scotia Driver's Handbook - Getting caught",
        sourceUrl: ch6(154),
        commonlyMissed: true,
      },
      {
        id: "ns_s3_08",
        topic: "rightOfWay",
        question:
          "You are following a car that stops at a crosswalk to let a pedestrian cross. What may you not do?",
        choices: [
          "Sound your horn",
          "Pass the stopped vehicle",
          "Change lanes at all on that block",
          "Continue once the pedestrian reaches the centre line",
        ],
        correctIndex: 1,
        explanation:
          "Do not pass any vehicle that is stopped at a crosswalk to allow a pedestrian to cross. It appears again in the list of places where passing is always unsafe and usually illegal.",
        context:
          "The reason is a sight line. The stopped vehicle hides the pedestrian from you and hides you from the pedestrian, so a driver moving past it arrives at exactly the moment neither can see the other.",
        trap:
          "The pedestrian being on the far side does not release you. They are still crossing, and they are still hidden.",
        excerptKey: "no-pass-stopped-at-crosswalk",
        sourceLabel: "Nova Scotia Driver's Handbook - Right of way",
        sourceUrl: ch2(44),
      },
      {
        id: "ns_s3_09",
        topic: "signs",
        question:
          "What does a warning sign showing a hidden intersection ahead tell you about the other driver?",
        choices: [
          "They have a stop sign and will be waiting",
          "They must yield to you because you are on the through road",
          "They do not have a clear view of approaching traffic",
          "They are approaching at an unusual angle",
        ],
        correctIndex: 2,
        explanation:
          "The hidden intersection sign tells you that drivers on the side road ahead do not have a clear view of approaching traffic, so you use caution and be prepared to slow down.",
        context:
          "It pairs with the 50 km/h rule for obstructed intersections in the Motor Vehicle Act, which drops your speed within 15 metres of an intersection where the view along the cross street is under 60 metres - unless you are on a through road.",
        trap:
          "The sign is about what they cannot see, not what you cannot. It is warning you that they may pull out believing the road is clear.",
        excerptKey: "sign-hidden-intersection",
        sourceLabel: "Nova Scotia Driver's Handbook - Warning signs",
        sourceUrl: ch3(91),
      },
      {
        id: "ns_s3_10",
        topic: "parking",
        question:
          "How far must you keep clear of the approach to a stop sign, yield sign or traffic control signal at the side of the roadway?",
        choices: ["5 metres", "7.5 metres", "10 metres", "15 metres"],
        correctIndex: 2,
        explanation:
          "You may not stop or park within 10 metres of the approach to any official flashing beacon, stop sign, yield sign or traffic control signal located at the side of the roadway.",
        context:
          "The point is the approach, not the sign. A parked vehicle in that space hides the sign from the drivers who most need to read it, which is why the distance is measured on the approach side.",
        trap:
          "Ten metres from a sign and 7.5 metres from an intersection are different measurements that often land on the same corner. Take the larger of the two.",
        excerptKey: "park-beacon-10m",
        sourceLabel: "Nova Scotia Driver's Handbook - Parking and stopping",
        sourceUrl: ch2(61),
      },
      {
        id: "ns_s3_11",
        topic: "sharing",
        question:
          "Nova Scotia forbids a commercial motor vehicle from following within what distance of another vehicle?",
        choices: ["30 metres", "60 metres", "100 metres", "150 metres"],
        correctIndex: 1,
        explanation:
          "It is illegal for the driver of a commercial motor vehicle to follow within 60 metres of another vehicle.",
        context:
          "The rule applies on a highway outside a business or residential district, and it does not apply while the commercial vehicle is overtaking and passing. That exception matters: a truck closing on you during a pass is not breaking it.",
        trap:
          "The rule is about the truck's duty, not yours. Cutting into the gap a truck has left is still your bad decision, and it removes the stopping distance the law gave it.",
        excerptKey: "commercial-60m",
        sourceLabel: "Nova Scotia Driver's Handbook - Drivers and large commercial vehicles",
        sourceUrl: ch2(68),
      },
      {
        id: "ns_s3_12",
        topic: "emergencies",
        question:
          "You are crossing a railway track when the warning lights begin flashing and the gates start to lower. What should you do?",
        choices: [
          "Stop immediately and reverse clear of the tracks",
          "Stop where you are and wait for the gates to lift",
          "Sound your horn and stop on the far side of the tracks",
          "Keep moving and finish driving through the crossing",
        ],
        correctIndex: 3,
        explanation:
          "Do not stop - keep moving. The warning signals allow enough time to finish driving through, and the gate on the far side will not block you in.",
        context:
          "The real trap on a crossing is stopped traffic, not the gates. Before you move onto the tracks, make sure the traffic ahead will not leave you stranded on them.",
        trap:
          "Stopping and trying to back up is how vehicles stall on the tracks. The handbook says so directly.",
        excerptKey: "railway-keep-moving",
        sourceLabel: "Nova Scotia Driver's Handbook - Railway crossings",
        sourceUrl: ch3(82),
        commonlyMissed: true,
      },
      {
        id: "ns_s3_13",
        topic: "signals",
        question: "What does a flashing green traffic signal mean in Nova Scotia?",
        choices: [
          "Facing traffic may turn left, go straight ahead, or turn right",
          "The signal is about to change to yellow",
          "Pedestrians have an exclusive crossing interval",
          "Proceed with caution as at a flashing yellow",
        ],
        correctIndex: 0,
        explanation:
          "A flashing green means that facing traffic may turn left, go straight ahead, or turn right. It is the advance green in a different form.",
        context:
          "It sits in the same short list as the flashing red, which is a stop sign for your approach, and the flashing yellow, which is a warning sign telling you to slow down and proceed with caution.",
        trap:
          "The flashing green is protecting your left turn, which is the opposite of a warning. Treating it as caution wastes the interval and confuses everyone behind you.",
        excerptKey: "signal-flashing-green",
        sourceLabel: "Nova Scotia Driver's Handbook - Flashing signals",
        sourceUrl: ch2(41),
      },
      {
        id: "ns_s3_14",
        topic: "safety",
        question:
          "A load extends more than one metre past the rear of your vehicle during daylight. What must you display?",
        choices: [
          "An amber light plainly visible for 60 metres",
          "A red flag at least 300 millimetres in length and width",
          "A slow-moving-vehicle sign",
          "Nothing, provided the load is secured",
        ],
        correctIndex: 1,
        explanation:
          "During daylight hours a load extending more than one metre beyond the rear of the vehicle needs a red flag at least 300 millimetres in each direction, clearly visible at all times.",
        context:
          "After dark - half an hour after sunset to half an hour before sunrise - the flag is replaced by an amber or red light plainly visible for 60 metres from the rear of the load.",
        trap:
          "The two markers are for different times of day. An amber light is the after-dark answer, and a flag is invisible then.",
        excerptKey: "load-red-flag",
        sourceLabel: "Nova Scotia Driver's Handbook - Carrying loads",
        sourceUrl: ch4(130),
      },
      {
        id: "ns_s3_15",
        topic: "signs",
        question:
          "What does a Do Not Pass sign in a Nova Scotia work zone carry that a general work zone warning does not?",
        choices: [
          "It is advisory only inside the work zone",
          "It applies only when workers are present",
          "It is a regulatory sign, and disobeying it warrants a ticket",
          "It applies only to commercial vehicles",
        ],
        correctIndex: 2,
        explanation:
          "Do Not Pass is a regulatory sign. It creates an orderly flow before a merge point or stops passing where it is unsafe, and disobeying it warrants a ticket.",
        context:
          "It usually appears with the sign telling you a lane will end ahead. Both exist to get traffic into a single lane early, because the common mistake is running up the closing lane at speed and pushing in at the last moment.",
        trap:
          "Orange signs read as warnings, so drivers file every work zone sign as advice. This one is law.",
        excerptKey: "work-do-not-pass",
        sourceLabel: "Nova Scotia Driver's Handbook - Specific Signs",
        sourceUrl: ch3(100),
      },
      {
        id: "ns_s3_16",
        topic: "rules",
        question: "When may you legally pass another vehicle on the right in Nova Scotia?",
        choices: [
          "Whenever the right lane is moving faster",
          "Never, in any circumstance",
          "Only on a one-way street",
          "On a highway with two or more substantially continuous lanes, including when the vehicle ahead is making a left turn",
        ],
        correctIndex: 3,
        explanation:
          "On highways with two or more substantially continuous lanes you may pass on the right or the left, and the handbook gives the left-turning vehicle as its example of when passing on the right applies.",
        context:
          "The handbook still discourages it. Passing on the right puts you on the blind side of the vehicle you are passing, and that vehicle could make a right turn or pull over without warning.",
        trap:
          "Legal and safe are not the same claim here. The book permits it and then spends the rest of the paragraph explaining why it is the worse choice.",
        excerptKey: "pass-on-right",
        sourceLabel: "Nova Scotia Driver's Handbook - Passing on the right",
        sourceUrl: ch2(59),
      },
      {
        id: "ns_s3_17",
        topic: "licensing",
        question:
          "You accumulate six demerit points while holding a Class 5N newly licensed driver's licence. What happens?",
        choices: [
          "Driving privileges are suspended for six months",
          "A warning letter is issued",
          "An interview with a driver enhancement officer is required",
          "The licence is downgraded to a learner's licence",
        ],
        correctIndex: 0,
        explanation:
          "Six points suspends a newly licensed driver for six months. The thresholds are lower at every stage of the GDL programme than for an experienced driver.",
        context:
          "The table is worth learning as a whole. A learner gets a warning letter at 2 points and a six-month suspension at 4. A newly licensed driver gets a warning at 2, an interview at 4 and suspension at 6. Everyone else gets a warning at 4, an interview at 6 and suspension at 10.",
        trap:
          "A suspension does not just pause the clock. Serve one as a 5N and you must complete a fresh two-year period from the date your licence is restored.",
        excerptKey: "class5n-six-points",
        sourceLabel: "Nova Scotia Driver's Handbook - Demerit points and suspension",
        sourceUrl: ch1(17),
        commonlyMissed: true,
      },
      {
        id: "ns_s3_18",
        topic: "speed",
        question:
          "At 80 km/h in ideal conditions, roughly what total distance does the handbook say a vehicle needs to stop?",
        choices: ["About 63 metres", "About 100 metres", "More than 140 metres", "About 205 metres"],
        correctIndex: 2,
        explanation:
          "Even in ideal conditions, a vehicle travelling at 80 km/h requires more than 140 metres to stop completely. The figure combines reaction distance with braking distance.",
        context:
          "The handbook's table runs 63 metres at 50 km/h, 140 at 80, 205 at 100 and 246 at 110. Braking distance climbs far faster than speed does, which is the point the table is making.",
        trap:
          "Learners think of stopping distance as braking distance. More than a third of the 80 km/h figure is covered before the brakes are even applied.",
        excerptKey: "stopping-80",
        sourceLabel: "Nova Scotia Driver's Handbook - Stopping distances",
        sourceUrl: ch2(47),
      },
      {
        id: "ns_s3_19",
        topic: "signs",
        question:
          "A yellow diamond warns of a narrow structure ahead. What does that specifically mean?",
        choices: [
          "The number of lanes will drop by one",
          "A structure ahead has a clear road width less than the approach road",
          "A low overhead clearance is coming up",
          "The shoulder is unpaved beyond this point",
        ],
        correctIndex: 1,
        explanation:
          "A narrow structure sign flags a road, bridge, culvert, underpass or overpass whose clear road width is less than the width of the road approaching it.",
        context:
          "It is different from road narrows ahead, which warns that the road itself gets narrower while keeping the same number of lanes, and from low clearance, which gives the overhead height of an underpass.",
        trap:
          "Narrow structure and right lane ends look similar at speed and mean different things. One is about width, the other about a lane disappearing.",
        excerptKey: "sign-narrow-structure",
        sourceLabel: "Nova Scotia Driver's Handbook - Warning signs",
        sourceUrl: ch3(92),
      },
      {
        id: "ns_s3_20",
        topic: "rules",
        question:
          "Under what circumstances may you make a U-turn near the crest of a hill or on a curve in Nova Scotia?",
        choices: [
          "Whenever no vehicle is in sight",
          "Only between sunrise and sunset",
          "Never, where your view is obstructed within 150 metres in either direction",
          "Only where a sign permits it",
        ],
        correctIndex: 2,
        explanation:
          "The Motor Vehicle Act forbids turning around to proceed in the opposite direction on a curve, on the approach to or near the crest of a grade, or anywhere your vehicle's view is obstructed within 150 metres in either direction.",
        context:
          "The handbook says the same thing more briefly in its section on curves: never stop, park or make a U-turn in a curve, and do not pass or back up within one either.",
        trap:
          "No vehicle in sight is precisely the condition the rule addresses. On a blind crest, nothing being in sight tells you nothing at all.",
        excerptKey: "statute-uturn-150",
        sourceLabel: "Motor Vehicle Act - Section 120(2), Backing and turning around",
        sourceUrl: act(87),
      },
      {
        id: "ns_s3_21",
        topic: "impairment",
        question:
          "Which of these is a consequence of a first impaired driving conviction in Nova Scotia?",
        choices: [
          "A 30-day licence suspension",
          "Loss of driving privileges for three years",
          "A written warning and a defensive driving course",
          "Loss of driving privileges for one year from the date of conviction",
        ],
        correctIndex: 3,
        explanation:
          "A first offence brings revocation of driving privileges for one year from the date of conviction, along with fines, reinstatement fees and an Alcohol Assessment Program.",
        context:
          "The ladder steepens fast. A second offence is three years plus a possible prison term of at least 14 days; a third is indefinite, with a minimum of ten years and a prison term of at least 90 days; a fourth is permanent revocation.",
        trap:
          "The three-month Administrative Licence Suspension is separate and immediate - it happens when you are charged, not when you are convicted.",
        excerptKey: "impaired-first-offence",
        sourceLabel: "Nova Scotia Driver's Handbook - Penalties for impaired driving",
        sourceUrl: ch6(157),
      },
      {
        id: "ns_s3_22",
        topic: "safety",
        question: "Where should a rear-facing child restraint never be placed?",
        choices: [
          "In a seating position where there is an airbag",
          "In the centre of the rear seat",
          "Behind the driver",
          "In a vehicle with a manual transmission",
        ],
        correctIndex: 0,
        explanation:
          "A rear-facing child restraint must never be used in a seating position with an airbag. A deploying airbag exerts too much force on the restraint.",
        context:
          "The handbook goes further and says children under 12 years of age should not be seated where there is an airbag at all. Airbags do not replace seat belts; they add protection in severe frontal collisions.",
        trap:
          "Modern passenger airbags can be switched off in some vehicles, but the handbook's rule is about the seating position, not the switch.",
        excerptKey: "airbag-rear-facing",
        sourceLabel: "Nova Scotia Driver's Handbook - Airbags",
        sourceUrl: ch4(120),
      },
      {
        id: "ns_s3_23",
        topic: "signs",
        question:
          "In a work zone, a Flashing Light Unit displays a single arrow head pointing left. What does that tell you?",
        choices: [
          "It is safe to pass on either side of the unit",
          "The lane ahead is closed, and it is safe to pass only on the left",
          "The unit is in caution mode and passing is not indicated",
          "Traffic in the left lane must stop",
        ],
        correctIndex: 1,
        explanation:
          "A single arrow head means the lane ahead is closed or there is an obstruction, and it is safe to pass the unit only on the side the arrow indicates.",
        context:
          "Two arrow heads displayed together mean it is safe to pass on either side. Lamps in a straight line or bar is caution mode, and caution mode does not indicate that passing is safe at all - you judge that yourself from the conditions.",
        trap:
          "Caution mode looks like a mild version of the arrows and is actually the least informative display. It tells you a hazard exists and nothing about where to go.",
        excerptKey: "work-two-arrows",
        sourceLabel: "Nova Scotia Driver's Handbook - Flashing Light Unit",
        sourceUrl: ch3(103),
      },
      {
        id: "ns_s3_24",
        topic: "emergencies",
        question:
          "A live electrical wire has come down across your vehicle. What does the handbook tell you to do?",
        choices: [
          "Get out quickly and run clear",
          "Push the wire clear with a dry wooden object",
          "Stay in the vehicle if at all possible and touch nothing outside it",
          "Drive forward until the wire falls behind you",
        ],
        correctIndex: 2,
        explanation:
          "Stay in the vehicle if at all possible, and do not touch the ground or anything outside it. Staying put is always the first choice.",
        context:
          "If you must leave because of fire or another emergency, jump clear with both feet together, touching no part of the vehicle as you go, then shuffle with both feet together until you are at least 20 metres away.",
        trap:
          "Stepping out normally puts one foot on the ground while a hand is still on the car, which is the exact path the current is waiting for.",
        excerptKey: "power-lines",
        sourceLabel: "Nova Scotia Driver's Handbook - Electrical wires on the roadway",
        sourceUrl: ch5(147),
        commonlyMissed: true,
      },
      {
        id: "ns_s3_25",
        topic: "rightOfWay",
        question:
          "A pedestrian is still in the roadway when the signal changes to yellow, then red. What is your duty?",
        choices: [
          "Proceed once your light is green, since their interval has expired",
          "Sound your horn to hurry them",
          "Proceed if they are past the centre line",
          "Allow the pedestrian to complete the crossing safely",
        ],
        correctIndex: 3,
        explanation:
          "If a traffic signal changes to yellow or red while a pedestrian remains in the street, you must allow them to complete the crossing safely.",
        context:
          "The same section tells drivers moving through an intersection on a green to look in all directions and make sure every pedestrian has finished crossing. A pedestrian who started lawfully keeps the priority they started with.",
        trap:
          "The signal governs when a pedestrian may start, not when they must be finished. A green light for you is not an eviction notice for them.",
        excerptKey: "ped-finish-crossing",
        sourceLabel: "Nova Scotia Driver's Handbook - Right of way",
        sourceUrl: ch2(43),
      },
      {
        id: "ns_s3_26",
        topic: "signals",
        question:
          "Under the Motor Vehicle Act, when must a signal be given by a mechanical or electrical device rather than by hand?",
        choices: [
          "When any part of the body or load extends more than 600 millimetres to the left of the centre of the steering wheel",
          "Whenever it is dark",
          "Whenever the vehicle is carrying passengers",
          "On any highway posted above 60 km/h",
        ],
        correctIndex: 0,
        explanation:
          "Signal lights must be used where the vehicle is built or loaded so that a hand signal cannot be seen both front and rear, or where any part of the body or load extends more than 600 millimetres left of the centre of the steering wheel.",
        context:
          "The handbook states the same figure as 60 centimetres. Even where hand signals are permitted, it warns they may not be seen as readily as vehicle signals, so they are to be used cautiously.",
        trap:
          "Six hundred millimetres is six-tenths of a metre, not six metres. The measurement is from the centre of the steering wheel, not from the side of the vehicle.",
        excerptKey: "hand-signals-60cm",
        sourceLabel: "Nova Scotia Driver's Handbook - Using your signal lights and horn",
        sourceUrl: ch2(53),
      },
      {
        id: "ns_s3_27",
        topic: "sharing",
        question:
          "Nova Scotia added a duty to yield to transit buses. When does it apply?",
        choices: [
          "On any highway, at any speed limit",
          "Only on highways with a posted speed limit of 60 km/h or less",
          "Only in the Halifax Regional Municipality",
          "Only between 7 am and 9 am",
        ],
        correctIndex: 1,
        explanation:
          "You must yield to a transit bus signalling its intent to re-enter traffic whenever the posted speed limit is 60 km/h or less, and it is safe to do so.",
        context:
          "The duty is on the driver approaching the bus from the rear, so it can move back into the closest lane. It appears in the handbook's front supplement and in Section 124A of the Motor Vehicle Act, and it does not apply to school buses.",
        trap:
          "The school bus rules are stronger, not weaker - they require a full stop from both directions. The transit bus rule is a yield, and it is capped at 60 km/h roads.",
        excerptKey: "transit-bus-60",
        sourceLabel: "Nova Scotia Driver's Handbook - Important GDL Changes, Yield to transit buses",
        sourceUrl: supp(9),
        commonlyMissed: true,
      },
      {
        id: "ns_s3_28",
        topic: "parking",
        question:
          "What does the handbook call stopping on the roadway side of a vehicle that is already stopped?",
        choices: [
          "Angle parking",
          "Standing",
          "Double parking, and it is prohibited",
          "Kerb clearance",
        ],
        correctIndex: 2,
        explanation:
          "Stopping on the roadway side of any vehicle already stopped is double parking, and it appears on the list of places you may not stop or park.",
        context:
          "Your vehicle counts as stopped or parked whether or not anyone is in it, so sitting in it with the engine running does not exempt you. The same list also bans blocking a sidewalk, pedestrian crossing, road entrance or private driveway.",
        trap:
          "Hazard lights do not make double parking legal. The rule is about where the vehicle is, not about how visible it is.",
        excerptKey: "park-double",
        sourceLabel: "Nova Scotia Driver's Handbook - Parking and stopping",
        sourceUrl: ch2(61),
      },
      {
        id: "ns_s3_29",
        topic: "signs",
        question:
          "A green rectangular sign shows the number 102 inside a shield-shaped outline. What does that identify?",
        choices: [
          "A municipal street number",
          "The distance in kilometres to the next town",
          "A truck route number",
          "A provincial highway with controlled access, also called a 100-series highway",
        ],
        correctIndex: 3,
        explanation:
          "That is the guide sign for Highway 102, a provincial highway with controlled access, referred to as a 100-series highway.",
        context:
          "The 100-series highways are being upgraded as divided multi-lane roads with restricted access. Entry and exit happen at interchanges, and signs there tell you whether to merge, yield or stop - in every case you yield to through traffic until a safe gap appears.",
        trap:
          "Controlled access does not mean a newly licensed driver is shut out. There is no restriction on which highways a Class 5N driver may use.",
        excerptKey: "sign-100-series",
        sourceLabel: "Nova Scotia Driver's Handbook - Guide signs",
        sourceUrl: ch3(94),
      },
      {
        id: "ns_s3_30",
        topic: "safety",
        question:
          "At what speed does the handbook say steering becomes the better choice than braking to avoid a collision?",
        choices: ["Over 20 km/h", "Over 40 km/h", "Over 60 km/h", "Over 80 km/h"],
        correctIndex: 1,
        explanation:
          "Above 40 km/h, steering is preferred to braking, because you need less distance to steer around an object than to stop completely.",
        context:
          "The handbook's alternative is to combine threshold braking with steering. Threshold braking is firm steady pressure just short of locking the wheels, easing off slightly if they do lock and then reapplying.",
        trap:
          "Anti-lock brakes change the technique, not the geometry. With ABS you press steadily and hard and do not pump, and steering is still shorter than stopping.",
        excerptKey: "steer-over-40",
        sourceLabel: "Nova Scotia Driver's Handbook - Stopping and braking",
        sourceUrl: ch4(125),
      },
      {
        id: "ns_s3_31",
        topic: "rules",
        question:
          "You are backing out of a parking space. What does the handbook say about your seat belt?",
        choices: [
          "You may remove it to turn your body and see properly, then refasten it before moving forward",
          "It must stay fastened at all times",
          "It must be removed before reversing",
          "It may be worn loosely across the lap",
        ],
        correctIndex: 0,
        explanation:
          "You may remove your seat belt to turn your body enough to see properly while backing, and the handbook tells you to refasten it before moving forward.",
        context:
          "The technique that goes with it: hold the wheel firmly with one hand at twelve o'clock so you can scan over both shoulders, turn your body and head to the right and look back over your right shoulder, then begin backing slowly and check your front end does not hit anything.",
        trap:
          "The permission is narrow and temporary. Reversing out of a driveway and continuing down the street unbelted is a separate offence.",
        excerptKey: "backing-seatbelt",
        sourceLabel: "Nova Scotia Driver's Handbook - Backing",
        sourceUrl: ch2(60),
      },
      {
        id: "ns_s3_32",
        topic: "licensing",
        question:
          "A visitor arrives in Nova Scotia holding a valid licence from another province. How long may they drive here before getting a Nova Scotia licence?",
        choices: ["30 days", "90 days", "Six months", "One year"],
        correctIndex: 1,
        explanation:
          "A visitor or new resident with a valid licence from another jurisdiction may drive here for up to 90 days, provided they are at least 16 years old.",
        context:
          "The vehicle is on a different clock from the driver. A visitor may drive a vehicle on out-of-province plates for 90 days, but someone who has actually moved to Nova Scotia has only 30 days before it needs Nova Scotia plates.",
        trap:
          "The two 90-day allowances look identical and split the moment you become a resident. The driver keeps 90 days; the vehicle drops to 30.",
        excerptKey: "visitor-90-days",
        sourceLabel: "Nova Scotia Driver's Handbook - Visitors",
        sourceUrl: ch1(4),
      },
      {
        id: "ns_s3_33",
        topic: "speed",
        question:
          "The maximum the Minister or the Provincial Traffic Authority may post on a Nova Scotia highway is what?",
        choices: ["90 km/h", "100 km/h", "110 km/h", "There is no statutory cap"],
        correctIndex: 2,
        explanation:
          "Section 106(2) of the Motor Vehicle Act allows rates above 80 km/h to be fixed for particular highways, but not above 110 km/h.",
        context:
          "The 80 in subsection (1) is the ceiling everywhere unless a sign changes it. Subsection (2) is the only route to anything higher, and it stops at 110, so 110 is the fastest posted number you will meet in this province.",
        trap:
          "Section 101 still applies at any posted limit. A careful and prudent speed can be well below 110 on the same road in bad weather.",
        excerptKey: "statute-speed-max-110",
        sourceLabel: "Motor Vehicle Act - Section 106(2), Maximum speed limit",
        sourceUrl: act(78),
      },
      {
        id: "ns_s3_34",
        topic: "impairment",
        question:
          "You are convicted of impaired driving while in the Graduated Driver Licensing programme. What happens to your GDL progress?",
        choices: [
          "It continues from where it left off after the suspension",
          "You are moved directly to a full Class 5 licence once reinstated",
          "Nothing, because GDL and criminal penalties are separate systems",
          "You must begin the two-year GDL programme over again after serving the suspension",
        ],
        correctIndex: 3,
        explanation:
          "If your licence is suspended or revoked while you are in the GDL programme, you begin the two-year programme over again after serving the suspension.",
        context:
          "The handbook gives the arithmetic elsewhere: a driver who has held a Class 5N for one year and eleven months and is then suspended starts the two-year period from scratch on reinstatement.",
        trap:
          "Nearly finishing counts for nothing. The clock restarts from the reinstatement date, not from where it stopped.",
        excerptKey: "impaired-gdl-restart",
        sourceLabel: "Nova Scotia Driver's Handbook - Penalties for impaired driving",
        sourceUrl: ch6(157),
        commonlyMissed: true,
      },
      {
        id: "ns_s3_35",
        topic: "emergencies",
        question:
          "Your vehicle catches fire. How far away should you move passengers?",
        choices: [
          "At least 30 metres",
          "At least 10 metres",
          "At least 20 metres",
          "Just clear of the vehicle",
        ],
        correctIndex: 0,
        explanation:
          "Move the vehicle off the highway, turn off the ignition immediately, get everyone out and away, and move at least 30 metres from it.",
        context:
          "If you fight the fire yourself, use an extinguisher rather than water, because water spreads gasoline and oil fires. Keep some chemical in reserve for flare-ups, work with the wind at your back, and open the hood slowly if at all - fresh air makes it worse.",
        trap:
          "Twenty metres is the distance for a downed power line. Thirty is the fire distance, and gasoline fires can spread rapidly and may explode.",
        excerptKey: "vehicle-fire-30m",
        sourceLabel: "Nova Scotia Driver's Handbook - Vehicle fires",
        sourceUrl: ch5(145),
      },
    ],
  },
];
