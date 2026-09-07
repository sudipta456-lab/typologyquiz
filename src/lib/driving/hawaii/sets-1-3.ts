import type { DrivingTestSet } from "../types";

// Every fact below was checked against the State of Hawaii Driver's Manual -
// the book the counties test you on - in the 2023 printing HDOT serves as
// 2023-Hawaii-Drivers-Manual_5.375x8.375_Final-r3-Digital-071924web.pdf. It
// runs 132 pages and its printed page numbers ARE its PDF page numbers, so
// every page reference here is both.
//
// HAWAII IS NOT ORGANISED LIKE OTHER STATES, and the bank is shaped by it.
// There is no state DMV. Driver licensing is run by the FOUR COUNTIES - the
// City and County of Honolulu, Hawaii County, Maui County and Kauai County -
// each with its own fee, its own appointment system and its own offices. What
// the State does is publish the manual, write the law in Title 17 of the
// Hawaii Revised Statutes, and run the statewide online test. So the test
// FORMAT here is cited to a county, not to the State: Kauai County states the
// pass mark outright ("If you obtain more than 6 errors, you will fail the
// examination"), and Honolulu states the length and the clock ("The 30
// question test ... has a one hour time limit").
//
// Where the manual is silent, out of date or in conflict with the statute, the
// question follows the LAW and the research note records the gap. Four of
// those matter enough to name here:
//
// 1. THE MANUAL'S CHILD RESTRAINT RULE IS STALE. Page 20 still prints the
//    pre-2022 rule ("children under age 8 must be belted on a booster seat if
//    the child is under four feet and less than forty pounds"). Act 122 of
//    2022 rewrote HRS 291-11.5 into four age bands ending at ten, with a
//    four-foot-nine height test. Every child-seat question here is built on
//    the statute.
// 2. THE MANUAL HAS NO HANDS-FREE LAW. Chapter X gives good advice about
//    phones and no law at all. HRS 291C-137 bans HOLDING any mobile device
//    while driving, defines operating to include sitting at a red light, fines
//    it $300 or $400 in a school or construction zone, and forbids a driver
//    under 18 from using even a hands-free device.
// 3. THE SCHOOL BUS FINE DOES NOT MATCH. Page 96 says failing to stop "can
//    cost you $1,000"; HRS 291C-95(h) says "fined not more than $500 or
//    sentenced to perform community service, or both". The statute also limits
//    291C-95 to a bus stopped "in a residential area" and sets the stop at
//    twenty feet, neither of which the manual mentions. No question here turns
//    on the amount or on the distance; they turn on the duty to stop and stay
//    stopped, which both readings agree on.
// 4. THE BICYCLE HELMET SENTENCE IS WRONG FOR MINORS. Page 98 says "Although
//    you may not be legally required to wear a helmet, it is a good idea".
//    HRS 291C-150 requires one under sixteen.
//
// One more thing shapes the bank, and it is Hawaii's own: THERE IS NO
// STATEWIDE DEFAULT SPEED LIMIT. HRS 291C-102 makes a limit exist only because
// a county ordinance created it or the Department of Transportation posted a
// sign. There is no 25-in-a-residential-district number to fall back on the
// way there is in most states, so every speed question here is either about a
// posted limit or about the basic rule.
//
// Questions are original. Explanations, context notes and trap notes are
// written from scratch; the deep link is there so the learner reads the
// State's own authoritative wording.

const HB =
  "https://hidot.hawaii.gov/highways/files/2024/11/2023-Hawaii-Drivers-Manual_5.375x8.375_Final-r3-Digital-071924web.pdf";
/** The manual's printed page number IS its PDF page number. */
const hb = (page: number) => `${HB}#page=${page}`;
const HRS = "https://www.capitol.hawaii.gov/hrscurrent/Vol05_Ch0261-0319/";
const hrs = (id: string) => `${HRS}${id}.htm`;
const MANUAL = "State of Hawaii Driver's Manual";

export const hawaiiSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Hawaii Basics",
    difficulty: "starter",
    description:
      "The rules you meet in your first hour behind the wheel on any island: what the shapes and colors mean, who goes first, and the handful of numbers the State of Hawaii Driver's Manual expects you to know cold before a county hands you an instruction permit.",
    questions: [
      {
        id: "hi_s1_01",
        topic: "signs",
        question: "How many sides does a stop sign have, and what colors does the Hawaii manual give it?",
        choices: [
          "Six sides, yellow with black letters",
          "Four sides, white with red letters",
          "Eight sides, white letters on red",
          "Three sides, red with white letters",
        ],
        correctIndex: 2,
        explanation:
          "The manual describes the stop sign as an 8-sided white on red sign. The octagon is reserved for STOP alone, so the shape identifies it even when the face is dirty, backlit or half hidden by a hedge.",
        context:
          "Hawaii teaches signs by color and shape before words. Red means an action is prohibited, yellow warns of a hazard and almost always comes on a diamond, orange means road work, black and white means a required action and is always rectangular, and green, blue and brown are guide and information colors.",
        trap: "The three-sided answer describes a yield sign, which is also red and white. Shape is what separates the two, not color.",
        excerptKey: "stop-sign",
        sourceLabel: `${MANUAL} - Chapter VI, Regulatory Signs`,
        sourceUrl: hb(44),
      },
      {
        id: "hi_s1_02",
        topic: "signals",
        question: "A steady red light faces you and there is a stop line painted across your lane. Where must you stop?",
        choices: [
          "At the stop line, and you stay stopped until the signal changes to green",
          "Anywhere before the far side of the intersection",
          "Level with the traffic light itself so you can see it change",
          "In the crosswalk, so pedestrians know you have seen them",
        ],
        correctIndex: 0,
        explanation:
          "The manual gives an order: the stop line first, and only if there is none do you stop before the crosswalk, and only if there is neither do you stop before the intersection. You remain stopped until the signal turns green.",
        context:
          "Rolling past the stop line is one of the things a road-test examiner marks every time, and it matters off the test too - the stop line is set back far enough that a turning truck can swing through without hitting you.",
        trap: "Stopping level with the signal head puts your car inside the crosswalk. If you cannot see the light from behind the stop line, wait there anyway and watch the cross traffic instead.",
        excerptKey: "red-light-stop-where",
        sourceLabel: `${MANUAL} - Chapter VI, Traffic Signals`,
        sourceUrl: hb(39),
      },
      {
        id: "hi_s1_03",
        topic: "rightOfWay",
        question:
          "Two cars reach an intersection with no signs and no signals at about the same moment. Which one goes first?",
        choices: [
          "The one that is going straight rather than turning",
          "The one on the left, because the other driver can see further",
          "Whichever driver signals first",
          "The one on the right",
        ],
        correctIndex: 3,
        explanation:
          "Hawaii law puts the burden on the driver on the left: when two vehicles enter an intersection from different highways at about the same time, the driver on the left yields to the vehicle on the right.",
        context:
          "This is the fallback rule, and it only decides an intersection where nothing else does. A stop sign, a yield sign, a signal or a through highway all override it, and at a four-way stop the order of arrival comes first with the right-hand rule breaking a tie.",
        trap: "Going straight does not create a right of way in Hawaii. Direction of travel decides nothing at an uncontrolled intersection - position does.",
        excerptKey: "hrs-uncontrolled-intersection",
        sourceLabel: "Hawaii Revised Statutes - Section 291C-61",
        sourceUrl: hrs("HRS0291C/HRS_0291C-0061"),
      },
      {
        id: "hi_s1_04",
        topic: "licensing",
        question: "What is the minimum age to apply for an instruction permit in Hawaii?",
        choices: ["15", "15 and a half", "16", "16 and a half"],
        correctIndex: 1,
        explanation:
          "Fifteen years and six months. The manual and the statute agree, and every county repeats it on its own licensing page.",
        context:
          "Hawaii runs three stages for anyone under 18. The instruction permit comes at 15 and a half and must be held for 180 days. The provisional license comes at 16, after driver education and a road test, and must be held for six months. The full class 3 license comes at 17.",
        trap: "Sixteen is the earliest age for the provisional license, not for the permit. You have to be on a permit for 180 days before you can even apply for it.",
        excerptKey: "permit-age-15-half",
        sourceLabel: `${MANUAL} - Chapter 1, Types of Licenses`,
        sourceUrl: hb(11),
      },
      {
        id: "hi_s1_05",
        topic: "signs",
        question: "You are approaching a triangular red and white YIELD sign. What does the manual require?",
        choices: [
          "A complete stop every time, then proceed when clear",
          "Nothing, unless a police officer is directing traffic",
          "Be ready to stop, and stop only if other traffic has the right of way",
          "Sound your horn before entering the intersection",
        ],
        correctIndex: 2,
        explanation:
          "A yield sign says other traffic has the right of way. You approach ready to stop, and you actually stop only when there is traffic you have to give way to.",
        context:
          "The statute adds a sting: if you drive past a yield sign without stopping and then collide with a vehicle in the intersection, the collision itself is treated as prima facie evidence that you failed to yield.",
        trap: "Treating a yield as a stop sign is the safe habit but the wrong answer. Hawaii distinguishes the two deliberately, and the exam asks about that difference.",
        excerptKey: "yield-sign",
        sourceLabel: `${MANUAL} - Chapter VI, Regulatory Signs`,
        sourceUrl: hb(44),
      },
      {
        id: "hi_s1_06",
        topic: "safety",
        question:
          "The manual teaches you to count off a following interval behind the vehicle ahead. What is the minimum it gives?",
        choices: [
          "Two seconds",
          "One car length for every 10 mph",
          "A fixed 100 feet",
          "Four seconds",
        ],
        correctIndex: 0,
        explanation:
          "Two seconds is the floor. You watch the vehicle ahead pass a fixed marker, count one thousand one, one thousand two, and if you reach the marker before you finish counting you are too close.",
        context:
          "Hawaii treats two seconds as the minimum in ordinary conditions, not a target. In rain it doubles: the manual tells you to allow at least twice the normal following distance when the first drops fall, because the oil on the road has not washed away yet.",
        trap: "Car lengths are not used anywhere in the Hawaii manual. Judging a gap in car lengths at speed is guesswork, which is why the counting method replaced it.",
        excerptKey: "two-second-interval",
        sourceLabel: `${MANUAL} - Chapter X, Vehicle Speed`,
        sourceUrl: hb(67),
      },
      {
        id: "hi_s1_07",
        topic: "signals",
        question: "A signal ahead is flashing red. What does it mean?",
        choices: [
          "Slow down and proceed with caution",
          "It has the same meaning as a stop sign",
          "The signal has failed, so nobody has the right of way",
          "Stop and wait for it to turn green",
        ],
        correctIndex: 1,
        explanation:
          "The manual is blunt about it: a flashing red signal has the same meaning as a stop sign, and it adds that a stop sign will also be posted where the signal is. You stop completely, then go when it is safe.",
        context:
          "The two flashing colors are learned as a pair. Flashing red is a stop sign in light form. Flashing yellow means you may proceed only with caution. The difference is whether you are required to stop at all.",
        trap: "Waiting for green at a flashing red leaves you sitting there indefinitely. The signal is doing exactly what it was set to do.",
        excerptKey: "flashing-red",
        sourceLabel: `${MANUAL} - Chapter VI, Flashing Signals`,
        sourceUrl: hb(41),
      },
      {
        id: "hi_s1_08",
        topic: "sharing",
        question:
          "A school bus ahead of you stops on an undivided road and its alternating red lamps begin flashing. What must you do?",
        choices: [
          "Slow to 20 mph and pass carefully on the left",
          "Stop only if you can see children on the road",
          "Sound your horn and continue at reduced speed",
          "Stop, and stay stopped until the bus moves off or the red lamps go out",
        ],
        correctIndex: 3,
        explanation:
          "Drivers in the bus lane and in every lane next to it must stop before reaching the bus and may not move again until the bus resumes motion or the flashing red lamps are switched off.",
        context:
          "The one exception is a genuinely divided highway: traffic going the opposite way on a road split by a strip of land or other space not meant for vehicles does not have to stop. A painted line is not a divider.",
        trap: "Waiting to see a child is too late. The lamps are the signal, and they come on before the door opens.",
        excerptKey: "school-bus-stop-manual",
        sourceLabel: `${MANUAL} - Chapter XII, Stopping for a School Bus`,
        sourceUrl: hb(96),
        commonlyMissed: true,
      },
      {
        id: "hi_s1_09",
        topic: "rules",
        question:
          "You meet an oncoming vehicle on a narrow Hawaii road with no centerline. What does the manual require of you?",
        choices: [
          "Give the oncoming vehicle at least one-half of the main traveled portion of the road",
          "Pull completely off the road and stop until it has passed",
          "Hold your line and let the other driver find room",
          "Flash your headlights and continue at the same speed",
        ],
        correctIndex: 0,
        explanation:
          "You drive on the right half of the roadway, and on a narrow road you must leave the oncoming vehicle at least one-half of the main traveled portion. Half the usable road is the minimum, not a courtesy.",
        context:
          "The rule matters more here than the wording suggests. Plenty of Hawaii roads are one lane and a bit, with a soft shoulder and a drop, and the same clause is what the statute uses when two vehicles meet on a mountain road.",
        trap: "Stopping and pulling completely off is sometimes the sensible thing on a single-lane stretch, but it is not what the law requires, and the exam asks for the requirement.",
        excerptKey: "drive-right-half",
        sourceLabel: `${MANUAL} - Chapter V, Driving on Right Side of Roadway`,
        sourceUrl: hb(26),
      },
      {
        id: "hi_s1_10",
        topic: "signals",
        question: "The light ahead turns steady yellow as you approach. What does the manual say it means?",
        choices: [
          "Speed up so you clear the intersection before the red",
          "Stop where you are, even if you are already in the intersection",
          "The red light is coming next, and you should avoid entering the intersection",
          "Traffic from the side street is about to be released",
        ],
        correctIndex: 2,
        explanation:
          "Yellow is a warning that red follows immediately. The manual tells you to avoid entering the intersection on yellow, and it is emphatic that you must not enter after the red is shown.",
        context:
          "The decision is made before you reach the line: if you can stop safely, stop. If you are already so close that stopping would mean slamming on the brakes with someone behind you, carry on through and clear the intersection.",
        trap: "Accelerating on yellow is the reflex the phrase was written to stop. If the light turns red while you are still short of the line, you have run it.",
        excerptKey: "yellow-light",
        sourceLabel: `${MANUAL} - Chapter VI, Traffic Signals`,
        sourceUrl: hb(39),
      },
      {
        id: "hi_s1_11",
        topic: "signs",
        question: "What does a yellow diamond-shaped sign tell you?",
        choices: [
          "A law you must obey at that point",
          "A hazardous or dangerous condition ahead",
          "Road work ahead",
          "A route number or a service nearby",
        ],
        correctIndex: 1,
        explanation:
          "Yellow warns of hazardous or dangerous conditions, and the manual says the color almost always appears on a diamond-shaped sign. It tells you something is coming, not that a rule applies now.",
        context:
          "The color code is worth memorizing whole: red prohibits, yellow warns, orange means road work, black and white sets a required action on a rectangle, and green, blue and brown carry guide and service information.",
        trap: "Orange is the road-work color, not yellow. A diamond that is orange rather than yellow is telling you there are people working ahead.",
        excerptKey: "sign-colors-yellow",
        sourceLabel: `${MANUAL} - Chapter VI, Colors and Shapes`,
        sourceUrl: hb(43),
      },
      {
        id: "hi_s1_12",
        topic: "parking",
        question: "How close to the curb must your wheels be when you park parallel on a Hawaii street?",
        choices: [
          "Within 6 inches",
          "Within 8 inches",
          "Within 10 inches",
          "Within 12 inches",
        ],
        correctIndex: 3,
        explanation:
          "Twelve inches, or about 30 centimetres. Parking more than 12 inches from the curb is on the manual's list of prohibited parking, and the parking-restrictions page repeats the same figure.",
        context:
          "The rest of that rule matters too. Where angle parking is not marked, you park parallel to the curb and headed in the direction of traffic, and your bumpers should not be closer than two feet to the cars in front and behind.",
        trap: "Six inches is a driving-school habit, not the legal line. The law gives you a foot, and a road-test examiner will still mark you down for sitting near the outside of it.",
        excerptKey: "parking-12-inches",
        sourceLabel: `${MANUAL} - Chapter V, Parking`,
        sourceUrl: hb(28),
      },
      {
        id: "hi_s1_13",
        topic: "impairment",
        question: "At what blood alcohol content is an adult driver considered under the influence in Hawaii?",
        choices: ["0.05", "0.06", "0.08", "0.10"],
        correctIndex: 2,
        explanation:
          "Point zero eight. The manual sets out both thresholds: a driver is treated as impaired above .05 but below .08, and as under the influence at .08 or more.",
        context:
          "The offense has more than one route in. HRS 291E-61 catches you at .08 by breath or blood, and it also catches you at any level if alcohol has impaired your normal mental faculties, or if any drug has impaired your ability to drive carefully.",
        trap: "Being under .08 is not a defense. The impaired band starts at .05, and the impairment limb of the statute has no number in it at all.",
        excerptKey: "impaired-vs-under-influence",
        sourceLabel: `${MANUAL} - Chapter IX, The Law`,
        sourceUrl: hb(56),
      },
      {
        id: "hi_s1_14",
        topic: "rules",
        question: "How far before a turn or a lane change must you signal in Hawaii?",
        choices: [
          "At least 50 feet",
          "At least 75 feet",
          "At least 100 feet",
          "At least 200 feet",
        ],
        correctIndex: 2,
        explanation:
          "At least 100 feet, about 30 meters, which the manual describes as roughly five car lengths. The statute puts it the same way: the signal must run continuously for the last hundred feet before you turn.",
        context:
          "The manual adds that you must signal every single time, even when there is nobody in sight, and that signaling for longer is advisable at higher speeds because a hundred feet goes by in under a second on a freeway.",
        trap: "Signaling as you begin the movement is the commonest fault on Hawaii roads and a guaranteed deduction on the road test. The signal has to lead the maneuver, not accompany it.",
        excerptKey: "signal-100-feet",
        sourceLabel: `${MANUAL} - Chapter V, Required Signals`,
        sourceUrl: hb(27),
        commonlyMissed: true,
      },
      {
        id: "hi_s1_15",
        topic: "licensing",
        question: "What does the manual say you must do with your driver's license while you are driving?",
        choices: [
          "Keep it at home and produce it at a police station within 24 hours",
          "Have it with you at all times and show it on demand to a police officer",
          "Keep a photocopy in the glove box",
          "Carry it only when driving a vehicle you do not own",
        ],
        correctIndex: 1,
        explanation:
          "You must have a valid license with you whenever you operate a motor vehicle or a moped, and you must show it on demand to a police officer.",
        context:
          "The statute pairs it with your insurance card, and it goes further than most: an officer stopping or inspecting a vehicle for any reason is required to demand both. Hawaii also lets you display an electronic insurance card on a phone, and an officer who takes the phone may look at nothing else on it.",
        trap: "A photocopy is not a license. Neither is a photo of one, for the license itself - only the insurance card may be shown electronically.",
        excerptKey: "license-display",
        sourceLabel: `${MANUAL} - Chapter 1, License Display`,
        sourceUrl: hb(17),
      },
      {
        id: "hi_s1_16",
        topic: "speed",
        question:
          "There is no speed limit sign anywhere on the road you are driving. What governs your speed in Hawaii?",
        choices: [
          "A statewide default of 25 mph in any residential district",
          "A statewide default of 35 mph on any unposted road",
          "The speed limit of the last road you were on carries over",
          "The basic rule: never faster than is reasonable and prudent for the conditions",
        ],
        correctIndex: 3,
        explanation:
          "Hawaii has no statewide default number to fall back on. A limit exists only because a county ordinance created it or the Department of Transportation posted a sign, so on an unposted road the basic rule governs and nothing else does.",
        context:
          "The basic rule is not vague filler. It requires a safe and appropriate speed approaching and crossing an intersection or a railroad crossing, going round a curve, coming up to a hill crest, on any narrow or winding road, and whenever pedestrians, weather or road conditions create a special hazard.",
        trap: "Almost every mainland state prints a residential default of 25 or 30 mph. Hawaii does not, and reaching for one is how drivers from elsewhere get this wrong.",
        excerptKey: "hrs-speed-limits-source",
        sourceLabel: "Hawaii Revised Statutes - Section 291C-102",
        sourceUrl: hrs("HRS0291C/HRS_0291C-0102"),
        commonlyMissed: true,
      },
      {
        id: "hi_s1_17",
        topic: "emergencies",
        question:
          "You hear a siren and see flashing lights behind you on a two-lane street. What does the manual tell you to do?",
        choices: [
          "Reduce speed, work out where the emergency vehicle is, move out of its path and stop",
          "Stop instantly wherever you are, including inside the intersection",
          "Speed up to reach the next side street before it catches you",
          "Carry on at the same speed and let the emergency vehicle find a way past",
        ],
        correctIndex: 0,
        explanation:
          "The manual gives the steps in order: reduce speed, determine where the emergency vehicle is and which way it is going, move your vehicle out of its path, and stop. It also tells you plainly not to panic and jam on the brakes.",
        context:
          "The statute sets out the same duty more precisely - drive clear of any intersection, pull parallel and as close as possible to the right-hand edge or curb, and stay there until the emergency vehicle has passed.",
        trap: "Stopping dead in an intersection is worse than useless: it blocks the very route the ambulance is trying to use. Clear the intersection first, then pull over.",
        excerptKey: "emergency-vehicle-procedure",
        sourceLabel: `${MANUAL} - Chapter V, Emergency Vehicles`,
        sourceUrl: hb(29),
      },
      {
        id: "hi_s1_18",
        topic: "signals",
        question: "Your light turns green but two pedestrians are still finishing their crossing in front of you. What now?",
        choices: [
          "Edge forward slowly so they hurry up",
          "Sound your horn once to claim the right of way",
          "Yield to them, because a green light does not clear the intersection for you",
          "Drive around behind them",
        ],
        correctIndex: 2,
        explanation:
          "Green means you may go straight or turn where signs permit, but the manual attaches a condition to it: you must yield to all pedestrians and vehicles already in the intersection.",
        context:
          "The statute defines being in a crosswalk generously. A pedestrian counts as lawfully in the intersection when any part or extension of them - a body, a wheelchair, a cane, a crutch, a bicycle - is past the curb and moving onto the roadway.",
        trap: "A green light gives permission to enter, not a right of way over people who are already there. Someone finishing a crossing keeps priority.",
        excerptKey: "green-light",
        sourceLabel: `${MANUAL} - Chapter VI, Traffic Signals`,
        sourceUrl: hb(40),
      },
      {
        id: "hi_s1_19",
        topic: "safety",
        question: "Who has to wear a seat belt in a car on a Hawaii highway?",
        choices: [
          "Only the driver and the front seat passenger",
          "Every occupant, in the front seat and the back",
          "Only occupants under 18",
          "Only on freeways and at speeds over 35 mph",
        ],
        correctIndex: 1,
        explanation:
          "Every occupant, front and back. The manual cites the statute by number, and the statute makes it the driver's problem: you may not operate the vehicle unless you are belted and every passenger is belted or properly restrained for their age.",
        context:
          "The fine is $45 per violation plus a $10 neurotrauma surcharge. Children under ten are covered by the child restraint law instead, which sets rear-facing, harness and booster requirements by age.",
        trap: "Back-seat passengers are not exempt in Hawaii. The word the statute uses is all passengers, in the front or back seat.",
        excerptKey: "hrs-seat-belts",
        sourceLabel: "Hawaii Revised Statutes - Section 291-11.6",
        sourceUrl: hrs("HRS0291/HRS_0291-0011_0006"),
      },
      {
        id: "hi_s1_20",
        topic: "signs",
        question: "A rectangular black and white sign is posted beside the road. What kind of sign is it?",
        choices: [
          "A guide sign pointing to a service or a route",
          "A warning about a hazard further ahead",
          "A road-work sign for a temporary condition",
          "A regulatory sign setting an action you are required to take",
        ],
        correctIndex: 3,
        explanation:
          "Black and white indicates a required action, and the manual says those signs are always rectangular. Speed limits, lane use control, DO NOT PASS and PASS WITH CARE all use that combination.",
        context:
          "Regulatory devices tell you to stop, to go a certain way or to limit your speed, and the manual is explicit that failing to comply is subject to penalty. Warning devices only advise you of a hazard, though ignoring one and crashing is your negligence.",
        trap: "Green, blue and brown are the guide and information colors. A black and white rectangle is never advice; it is a rule.",
        excerptKey: "sign-colors-black-white",
        sourceLabel: `${MANUAL} - Chapter VI, Colors and Shapes`,
        sourceUrl: hb(43),
      },
      {
        id: "hi_s1_21",
        topic: "rightOfWay",
        question:
          "You are waiting at an intersection to turn left. An oncoming car is close enough to be a hazard. What must you do?",
        choices: [
          "Yield to it and every other oncoming vehicle that close",
          "Turn first, because a left turn holds up more traffic",
          "Turn if you have been waiting longer than the oncoming driver has been approaching",
          "Turn as long as you signal for the full 100 feet",
        ],
        correctIndex: 0,
        explanation:
          "A driver turning left yields to any vehicle, bicycle or person approaching from the opposite direction that is in the intersection or close enough to be an immediate hazard. Waiting is the whole job.",
        context:
          "The manual adds a technique for the wait: with a green light, move slowly into the intersection, keep your wheels pointed straight ahead, and turn only when it is clear. Straight wheels mean a rear-end shunt pushes you forward rather than into oncoming traffic.",
        trap: "Signaling does not create a right of way. The manual says so directly - the signal indicates your intent and nothing more.",
        excerptKey: "hrs-left-turn-yield",
        sourceLabel: "Hawaii Revised Statutes - Section 291C-62",
        sourceUrl: hrs("HRS0291C/HRS_0291C-0062"),
      },
      {
        id: "hi_s1_22",
        topic: "sharing",
        question: "A pedestrian steps into a marked crosswalk on your half of the road. What does Hawaii law require?",
        choices: [
          "Slow down and pass behind them",
          "Sound your horn so they know you are there",
          "Stop, and do not move until they have passed your vehicle",
          "Yield only if they are on a designated school route",
        ],
        correctIndex: 2,
        explanation:
          "Hawaii uses the word stop, not yield. You stop for a pedestrian crossing within a crosswalk on your half of the roadway, and you may not proceed until they have passed your vehicle and it is safe.",
        context:
          "It applies as well to someone approaching from the other half of the road so closely as to be in danger. The manual prints its own version in capital letters: you must stop for pedestrians in crosswalks.",
        trap: "Passing behind a pedestrian who is still crossing is the mainland habit of yielding, and it is not what this statute says. A first offense is $150, and a second within a year costs $300 and a 90-day revocation.",
        excerptKey: "hrs-crosswalk-stop",
        sourceLabel: "Hawaii Revised Statutes - Section 291C-72",
        sourceUrl: hrs("HRS0291C/HRS_0291C-0072"),
        commonlyMissed: true,
      },
      {
        id: "hi_s1_23",
        topic: "rules",
        question: "The centerline on the two-lane road you are driving is a single broken yellow line. What does it allow?",
        choices: [
          "Nothing; a yellow line always prohibits crossing",
          "Crossing to pass another vehicle when it is safe to do so",
          "Crossing only to make a left turn into a driveway",
          "Use of the lane by traffic in either direction",
        ],
        correctIndex: 1,
        explanation:
          "A single broken yellow line marks the centerline where there are only two lanes. You drive to the right of it, and when it is safe you may cross it to pass.",
        context:
          "The yellow family runs from permissive to absolute. Broken yellow allows a pass. A single solid yellow in your lane is a no-passing line, crossable only to turn left into or out of an alley, private road or driveway. Double solid yellow prohibits passing in both directions with the same narrow left-turn exception.",
        trap: "Yellow does not mean forbidden by itself. It means opposing directions. Whether you may cross it depends on whether it is broken or solid.",
        excerptKey: "broken-yellow-line",
        sourceLabel: `${MANUAL} - Chapter VI, Centerlines`,
        sourceUrl: hb(33),
      },
      {
        id: "hi_s1_24",
        topic: "parking",
        question:
          "You are parking on a hill at a curb in Hawaii. Which way does the manual tell you to turn your front wheels?",
        choices: [
          "Left when facing uphill, right when facing downhill",
          "Straight ahead in both cases, with the parking brake set",
          "Left in both cases, so the car rolls away from the curb",
          "Right in both cases, whether you are facing uphill or downhill",
        ],
        correctIndex: 3,
        explanation:
          "Hawaii's manual gives one answer for both directions: whether you park uphill or downhill, turn the wheels to the right. The point is that the car rolls away from traffic if something lets it move, and the statute puts it as turning the front wheels to the curb.",
        context:
          "The rest of the routine goes with it - set the hand brake, shift to PARK, or into reverse or low gear if there is no PARK position. All four wheels then have to climb the curb before the car can get free.",
        trap: "The mainland rule splits the two cases: wheels left when you face uphill against a curb. Hawaii does not split them, and this is the single question Hawaii learners report arguing about most.",
        excerptKey: "park-hill-wheels-right",
        sourceLabel: `${MANUAL} - Chapter X, Parking on a Hill`,
        sourceUrl: hb(71),
        commonlyMissed: true,
      },
      {
        id: "hi_s1_25",
        topic: "licensing",
        question: "How many questions are on Hawaii's written knowledge test, and how many may you get wrong?",
        choices: [
          "20 questions, and more than four errors fails you",
          "25 questions, and more than five errors fails you",
          "30 questions, and more than six errors fails you",
          "40 questions, and more than eight errors fails you",
        ],
        correctIndex: 2,
        explanation:
          "Thirty multiple-choice questions. Kauai County states the pass mark in as many words: more than six errors and you fail. Six wrong still passes; the seventh is what ends it.",
        context:
          "The online version gives you one hour. Fail on knowledge and you wait seven days before you may retake, and Honolulu also limits you to two attempts in a single day. Each attempt costs the county fee again.",
        trap: "An older statewide page still describes a 25-question test. The counties that actually run it - Honolulu, Hawaii County and Kauai - all say 30.",
        excerptKey: "test-30-questions-6-errors",
        sourceLabel:
          "County of Kauai Division of Motor Vehicles - Instructional Permits, Class 3",
        sourceUrl:
          "https://www.kauai.gov/Government/Departments-Agencies/Finance/Drivers-Licensing-and-Motor-Vehicles/Instructional-Permits",
      },
      {
        id: "hi_s1_26",
        topic: "emergencies",
        question:
          "How much property damage makes a crash reportable to the police in Hawaii, if nobody is hurt?",
        choices: ["$500 or more", "$1,000 or more", "$3,000 or more", "$5,000 or more"],
        correctIndex: 2,
        explanation:
          "Three thousand dollars. Any personal injury at all, any death, or property damage of $3,000 or more must be reported to the police immediately by the quickest means of communication.",
        context:
          "Injury has no threshold - the manual says personal injury to any extent. Damage is the only limb with a number attached, and the financial responsibility law uses the same $3,000 line for filing evidence of insurance on Form SR-21.",
        trap: "It is easy to read the figure as a repair estimate for your own car. It is the damage from the crash, and a single bumper on a late-model car clears $3,000 without much effort.",
        excerptKey: "crash-report-threshold",
        sourceLabel: `${MANUAL} - Chapter VII, Crash Procedures`,
        sourceUrl: hb(52),
      },
      {
        id: "hi_s1_27",
        topic: "speed",
        question: "Where does the manual say reduced speed limits are required?",
        choices: [
          "On every road within a mile of the coast",
          "On streets near schools and playgrounds, and in residential or business areas",
          "Only on roads with a posted school zone camera",
          "Only between 7 a.m. and 4 p.m. on weekdays",
        ],
        correctIndex: 1,
        explanation:
          "The manual names two settings: streets near schools and playgrounds, including anywhere marked with a School Crossing sign when children are present, and streets in residential or business areas.",
        context:
          "The statute puts real weight behind the school one. Speeding in a school zone or a construction area is a flat $250 fine, plus a possible $100 trauma surcharge and, in a school zone, a $25 surcharge for the safe routes to school program.",
        trap: "The reduced limit near a school is not tied to a camera or to office hours. It attaches to the posted zone and, at a School Crossing sign, to children being present.",
        excerptKey: "reduced-speed-areas",
        sourceLabel: `${MANUAL} - Chapter V, Speed Restrictions`,
        sourceUrl: hb(28),
      },
      {
        id: "hi_s1_28",
        topic: "impairment",
        question: "What blood alcohol content is a driver under 21 prohibited from reaching in Hawaii?",
        choices: ["0.00", "0.01", "0.015", "0.02"],
        correctIndex: 3,
        explanation:
          "Point zero two. The manual calls it zero tolerance, and the statute matches: it is unlawful for anyone under 21 to drive with a measurable amount of alcohol, which the definitions section fixes at .02 or more but below .08.",
        context:
          "The consequences are not token. A first violation brings an alcohol education and counselling program and a 180-day prompt suspension, with an 18-or-over driver able to ask for a 30-day absolute suspension followed by a restricted license instead.",
        trap: "Zero tolerance sounds like 0.00, and that is what most people answer. Hawaii's number is .02, because that is where the statute's definition of a measurable amount begins.",
        excerptKey: "zero-tolerance-under-21",
        sourceLabel: `${MANUAL} - Chapter IX, Zero Tolerance`,
        sourceUrl: hb(56),
        commonlyMissed: true,
      },
      {
        id: "hi_s1_29",
        topic: "safety",
        question: "Heavy rain has cut your visibility on the H-1. What does the manual tell you to do with your lights?",
        choices: [
          "Reduce speed and switch on your low beam headlamps so others can see you",
          "Use high beams, because more light means more visibility",
          "Use the hazard warning flashers while you keep driving",
          "Leave the lights off so you can see the road surface better",
        ],
        correctIndex: 0,
        explanation:
          "Reduce speed and turn on the low beam headlamps so other drivers can see you. If the rain is heavy enough that you still cannot see clearly, drive onto the shoulder or another clear area and stop until it eases.",
        context:
          "Fog gets the same treatment and one extra warning: never use high beams, because the reflection cuts your own vision and blinds the approaching driver. If you cannot see two car lengths, roughly 40 feet, pull completely off the pavement and put the hazard lights on.",
        trap: "Hazard flashers are not a wet-weather aid. The manual says they should never be used while the vehicle is moving; they mean a vehicle is in a hazardous position.",
        excerptKey: "heavy-rain-lights",
        sourceLabel: `${MANUAL} - Chapter X, Driving in Inclement Weather`,
        sourceUrl: hb(76),
      },
      {
        id: "hi_s1_30",
        topic: "signs",
        question: "You see an orange diamond-shaped sign ahead. What is it telling you?",
        choices: [
          "A scenic lookout is coming up",
          "A hazard that only applies at night",
          "Road work ahead",
          "A route change for heavy vehicles",
        ],
        correctIndex: 2,
        explanation:
          "Orange is the road-work color. The manual says orange indicates a warning concerning road work and appears on rectangular or diamond-shaped signs, and it is the basic color for the whole work-zone kit.",
        context:
          "Signs, barricades, drums, cones, tubes, flashing arrow panels and flagpersons all use orange. Flagpersons wear orange vests, shirts or jackets and direct you with red flags or stop and slow paddles.",
        trap: "Yellow and orange diamonds look alike at a glance. Yellow warns about the road itself; orange means there are people working on it, and Hawaii doubles the risk to them by having no shoulder to hide on.",
        excerptKey: "sign-colors-orange",
        sourceLabel: `${MANUAL} - Chapter VI, Colors and Shapes`,
        sourceUrl: hb(43),
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Core Rules of the Road",
    difficulty: "easy",
    description:
      "Lane markings, signals, turns, parking and right of way, worked through the way the manual lays them out. These are the rules most Hawaii drivers get right most of the time, which is exactly why the test expects you to get them right every time.",
    questions: [
      {
        id: "hi_s2_01",
        topic: "rules",
        question: "What do white lines on the pavement separate?",
        choices: [
          "Lanes of traffic moving in the same direction",
          "Lanes of traffic moving in opposite directions",
          "The roadway from the sidewalk",
          "Parking bays from travel lanes",
        ],
        correctIndex: 0,
        explanation:
          "White separates lanes going the same way; yellow separates opposing directions. The manual adds that you are required to drive between the lane lines rather than straddling them.",
        context:
          "The statute states the concepts in the abstract so they generalise: broken lines are permissive, solid lines are restrictive, a wider line means more emphasis, and double lines mean maximum restriction.",
        trap: "Yellow is the opposing-direction color. If you find yourself with a yellow line on your right on a two-way road, you are on the wrong side.",
        excerptKey: "white-lane-lines",
        sourceLabel: `${MANUAL} - Chapter VI, Lane Markings`,
        sourceUrl: hb(34),
      },
      {
        id: "hi_s2_02",
        topic: "rules",
        question: "What does a double solid white line mean in Hawaii?",
        choices: [
          "You may cross it to pass a slower vehicle",
          "You may cross it only to turn left",
          "You must not cross it",
          "It marks the edge of the pavement",
        ],
        correctIndex: 2,
        explanation:
          "Double solid white means lane changing is prohibited. The manual states it in capitals and the statute says the crossing of a double solid white line by vehicular traffic is prohibited, with no exception.",
        context:
          "A single solid white line is the weaker version: it means moving from lane to lane is hazardous there, and you may cross it only in unusual circumstances and then only with great care. The wider the line, the greater the hazard.",
        trap: "The left-turn exception belongs to the yellow lines, not the white ones. Nothing lets you cross a double solid white.",
        excerptKey: "double-solid-white",
        sourceLabel: `${MANUAL} - Chapter VI, Lane Markings`,
        sourceUrl: hb(35),
      },
      {
        id: "hi_s2_03",
        topic: "rules",
        question:
          "A double solid yellow line runs down the center of the road. When may you cross it?",
        choices: [
          "Never, under any circumstances",
          "Only to make a left turn into or from an alley, private road or driveway",
          "Whenever there is no oncoming traffic",
          "Only to make a U-turn",
        ],
        correctIndex: 1,
        explanation:
          "Passing is prohibited in both directions, and the manual gives one exception in capital letters: you may cross only to make a left turn into or from an alley, private road or driveway.",
        context:
          "The statute uses the same carve-out and applies it to the single solid yellow line as well: crossing is prohibited except when the crossing is part of a left turn movement.",
        trap: "A clear road ahead does not unlock a double yellow. The absence of oncoming traffic is why passing feels safe there, and the line is why it is still illegal.",
        excerptKey: "double-solid-yellow",
        sourceLabel: `${MANUAL} - Chapter VI, Centerlines`,
        sourceUrl: hb(33),
      },
      {
        id: "hi_s2_04",
        topic: "parking",
        question:
          "You are leaving your car on a slope with the engine off. What four things does the manual require?",
        choices: [
          "Stop the engine, lock the ignition and take the key, set the parking brake, and turn the wheels toward the curb",
          "Leave it in neutral, chock a wheel, take the key, and lock the doors",
          "Leave the engine running for the air conditioning, set the brake, and lock the doors",
          "Set the brake, leave the key in for a valet, and straighten the wheels",
        ],
        correctIndex: 0,
        explanation:
          "The manual lists four steps for an unattended vehicle: stop the engine, lock the ignition and remove the key, set the parking brake, and when the vehicle is on a grade, turn the wheels toward the curb.",
        context:
          "The statute carries the identical list, which means it is not just good practice. Leaving the engine running with the key in it is an offense in its own right, quite apart from the theft risk.",
        trap: "Straight wheels are the wrong answer on any grade. A car that gets free with straight wheels rolls into the traffic lane rather than into the curb.",
        excerptKey: "unattended-vehicle",
        sourceLabel: `${MANUAL} - Chapter V, Unattended Motor Vehicle`,
        sourceUrl: hb(29),
      },
      {
        id: "hi_s2_05",
        topic: "signals",
        question: "A green arrow is showing for your lane. What does it permit?",
        choices: [
          "Any movement a circular green would permit",
          "Only the movement the arrow points to",
          "A turn, but only after yielding to oncoming traffic",
          "A turn only if there is also a circular green lit",
        ],
        correctIndex: 1,
        explanation:
          "A green arrow means the same as a green light for that lane, with one condition the manual puts in capitals: you must turn or proceed in the direction the arrow indicates.",
        context:
          "A protected arrow is doing more than allowing the turn - it is holding the conflicting traffic. The statute still requires you to yield to pedestrians lawfully in an adjacent crosswalk and to traffic already lawfully using the intersection.",
        trap: "The arrow is a restriction as much as a permission. Going straight on a green left arrow is a movement the signal did not give you.",
        excerptKey: "green-arrow",
        sourceLabel: `${MANUAL} - Chapter VI, Lighted Arrows`,
        sourceUrl: hb(40),
      },
      {
        id: "hi_s2_06",
        topic: "rightOfWay",
        question: "You are pulling out of a driveway onto a street. What does the law require?",
        choices: [
          "Sound the horn and move out slowly",
          "Proceed if you have signalled for 100 feet",
          "Stop, and yield to all vehicles and bicycles on the road you are entering",
          "Yield only to vehicles coming from your left",
        ],
        correctIndex: 2,
        explanation:
          "You yield to all vehicles and bicycles approaching on the highway you are entering, and the manual adds that you must stop before crossing the sidewalk area. Failing to stop there is unlawful.",
        context:
          "The statute spells out bicycle lanes and bicycle paths in the same clause, twice, precisely because a driver looking for cars sweeps past a bike lane without registering it.",
        trap: "Yielding to the left only is a habit from one-way streets. A driveway can be met by traffic from both directions, and by a bicycle riding either way on a path.",
        excerptKey: "hrs-driveway-yield",
        sourceLabel: "Hawaii Revised Statutes - Section 291C-64",
        sourceUrl: hrs("HRS0291C/HRS_0291C-0064"),
      },
      {
        id: "hi_s2_07",
        topic: "speed",
        question:
          "You pass a sign reading REDUCED SPEED 35 MPH. Where does the 35 mph limit actually begin?",
        choices: [
          "At that sign",
          "Halfway between that sign and the next one",
          "At the next speed limit sign",
          "Only where a police officer is present",
        ],
        correctIndex: 2,
        explanation:
          "A Reduced Speed Ahead sign is advance notice. It tells you to start slowing, and the new limit begins at the next speed limit sign.",
        context:
          "Reduced Speed Ahead signs share the color and shape of the speed limit signs they warn about - rectangular black and white - which is the clue that they belong to the regulatory family.",
        trap: "Braking hard at the advance sign creates its own hazard for the driver behind. Begin slowing there, and be at the new limit by the time you reach the sign that sets it.",
        excerptKey: "reduced-speed-ahead",
        sourceLabel: `${MANUAL} - Chapter VI, Regulatory Signs`,
        sourceUrl: hb(45),
      },
      {
        id: "hi_s2_08",
        topic: "safety",
        question: "You need to change lanes on a multi-lane Honolulu street. What does the manual require first?",
        choices: [
          "A quick glance in the rear-view mirror",
          "Checking ahead, to the sides and behind, and physically checking the blind spot by turning your head",
          "Only the turn signal, provided it runs for 100 feet",
          "Sounding the horn to warn the traffic beside you",
        ],
        correctIndex: 1,
        explanation:
          "Check the road ahead, to the sides and to the rear, use the mirrors, and then physically check the blind spots by turning your head and looking. Mirrors alone leave a car-sized gap.",
        context:
          "The manual treats the shortcut as a named bad habit: as drivers gain proficiency they reduce the head check to a mirror glance and then to an occasional check, and it says that habit combined with not signaling could cause your first crash.",
        trap: "Signaling first does not replace looking. The manual is explicit that a signal indicates your intent and does not give you the right to make the movement.",
        excerptKey: "lane-change-blind-spot",
        sourceLabel: `${MANUAL} - Chapter X, Lane Changing`,
        sourceUrl: hb(65),
      },
      {
        id: "hi_s2_09",
        topic: "parking",
        question: "Which of these does the manual list as a place you may not park?",
        choices: [
          "Twenty feet from a bus stop on a residential street",
          "Facing downhill with the wheels turned",
          "On a bridge, an elevated structure or inside a tunnel",
          "Within 50 feet of a school crossing sign",
        ],
        correctIndex: 2,
        explanation:
          "Bridges, elevated structures and tunnels are on the manual's list of prohibited parking places, along with sidewalks, driveways, crosswalks, fire hydrants and any spot where your vehicle is hazardous to other traffic.",
        context:
          "Two more get less attention than they deserve. You may not double park on the roadway side of another parked car, whether or not you stay in the vehicle, and you may not leave a car on a public street for a continuous period of more than 24 hours.",
        trap: "Bus stop and school-crossing distances vary by county ordinance rather than appearing in the manual's list, so a specific number for either is a made-up answer.",
        excerptKey: "parking-bridge-tunnel",
        sourceLabel: `${MANUAL} - Chapter V, Parking`,
        sourceUrl: hb(28),
      },
      {
        id: "hi_s2_10",
        topic: "rules",
        question:
          "The center lane of a road is marked with a yellow solid line and a yellow dashed line on each side. What is it for?",
        choices: [
          "Passing only, in either direction",
          "Left turns only, by traffic traveling in either direction",
          "Buses and trucks only",
          "A pedestrian safety zone",
        ],
        correctIndex: 1,
        explanation:
          "That is a two-way left turn lane. Vehicles traveling in either direction may use it for left turn maneuvers only, and the manual says in capitals that it must never be used for passing.",
        context:
          "The lane exists to take turning cars out of the through lanes. Using it as a running lane or as a merging lane defeats the point and puts you head-on with someone using it correctly from the other direction.",
        trap: "The dashed edge tempts drivers to treat it as a normal lane. The solid line on the far side of each dash is what tells you it is not.",
        excerptKey: "two-way-left-turn-lane",
        sourceLabel: `${MANUAL} - Chapter VI, Pavement Markings`,
        sourceUrl: hb(36),
      },
      {
        id: "hi_s2_11",
        topic: "emergencies",
        question:
          "You come up behind a police car stopped on the shoulder with its lights flashing. What does Hawaii's move over rule require?",
        choices: [
          "Maintain your speed and keep to your lane",
          "Sound your horn as you pass",
          "Stop completely until the officer waves you on",
          "Slow down, and move over so an empty lane separates you from it if that is possible and safe",
        ],
        correctIndex: 3,
        explanation:
          "Slow down or stop as the situation requires, and move away so that there is an empty traffic lane between you and the stopped emergency vehicle, if that is possible and safe to do.",
        context:
          "The statute covers far more than police cars: fire, ocean safety, emergency medical services, freeway service patrol, sheriff, emergency management, civil defense, harbors division, conservation enforcement vehicles and tow trucks are all included.",
        trap: "The empty-lane part is conditional, not optional. Where there is no lane to move into, the duty becomes slowing to a speed that is reasonable and prudent for the situation ahead - never simply carrying on at speed.",
        excerptKey: "move-over-stopped-emergency",
        sourceLabel: `${MANUAL} - Chapter V, Emergency Vehicles`,
        sourceUrl: hb(29),
      },
      {
        id: "hi_s2_12",
        topic: "signals",
        question: "A red X is lit over the lane you are in. What does it mean?",
        choices: [
          "You must not use that lane",
          "Slow down, the lane narrows ahead",
          "The lane is reserved for buses",
          "You may use the lane only to turn left",
        ],
        correctIndex: 0,
        explanation:
          "The red X means you must not use that lane, because it is being used by traffic proceeding in the opposite direction. Lane control signals sit directly over the lane they control.",
        context:
          "The set has three faces. A green arrow means you may use the lane. A yellow X means move out because the lane is about to be given to oncoming traffic, and a flashing yellow X means you may use the lane only when preparing to turn left.",
        trap: "A red X is not advisory and not about congestion. On a contraflow lane the traffic that is about to arrive is coming at you head-on.",
        excerptKey: "lane-control-red-x",
        sourceLabel: `${MANUAL} - Chapter VI, Lane Control Signals`,
        sourceUrl: hb(41),
      },
      {
        id: "hi_s2_13",
        topic: "sharing",
        question: "How much room must a driver leave when passing a bicyclist in Hawaii?",
        choices: ["At least 2 feet", "At least 3 feet", "At least 4 feet", "At least 5 feet"],
        correctIndex: 1,
        explanation:
          "At least three feet, measured from the right side of your vehicle including mirrors and anything else that sticks out, to the left side of the bicyclist. The manual and the statute give the same number.",
        context:
          "The statute also stops you cutting back in early: you may not return to the right side of the roadway until you are safely clear of the bicycle. The manual notes that a lot of crashes happen when a driver passes a rider and immediately slows and turns right.",
        trap: "Mirrors count. A truck mirror can eat most of a three-foot gap on its own, which is why the statute names protuberances explicitly.",
        excerptKey: "hrs-bicycle-three-feet",
        sourceLabel: "Hawaii Revised Statutes - Section 291C-43",
        sourceUrl: hrs("HRS0291C/HRS_0291C-0043"),
      },
      {
        id: "hi_s2_14",
        topic: "rules",
        question: "When may you pass another vehicle on the right in Hawaii?",
        choices: [
          "Whenever the vehicle ahead is going below the speed limit",
          "Whenever you can complete the pass using the paved shoulder",
          "When the vehicle you are passing is about to turn left, but never by leaving the pavement",
          "Only on a one-way street",
        ],
        correctIndex: 2,
        explanation:
          "One of the three situations the manual allows is a vehicle that is about to make a left turn - and it adds that you may not drive off the pavement or the main traveled portion of the roadway to get past.",
        context:
          "The other two are a paved street or highway with two or more marked lanes in each direction, and a one-way street with two or more marked lanes. In all of them the movement has to be safe.",
        trap: "The shoulder is never a passing lane. The manual lists passing on the right shoulder first among the things you must not do.",
        excerptKey: "pass-on-right-when",
        sourceLabel: `${MANUAL} - Chapter V, Passing on the Right`,
        sourceUrl: hb(26),
      },
      {
        id: "hi_s2_15",
        topic: "signs",
        question: "A pennant-shaped yellow and black sign is posted on the left side of the road. What is it?",
        choices: [
          "A no passing zone sign, marking where the zone begins",
          "A warning that the road narrows",
          "A slow moving vehicle emblem",
          "A school crossing sign",
        ],
        correctIndex: 0,
        explanation:
          "The NO PASSING ZONE pennant supplements the DO NOT PASS sign. It is on the left side of the road on purpose, in the driver's eye line when they are thinking about pulling out, and it points to where the zone begins.",
        context:
          "PASS WITH CARE, a rectangular black and white sign, marks the end. The manual warns that the end of a no-passing zone does not mean it is now safe to pass - it means only that visibility has improved.",
        trap: "The slow moving vehicle emblem is also a triangle, but it is an orange and red reflective badge on the back of a vehicle, not a roadside sign.",
        excerptKey: "no-passing-zone-pennant",
        sourceLabel: `${MANUAL} - Chapter VI, Regulatory Signs`,
        sourceUrl: hb(45),
      },
      {
        id: "hi_s2_16",
        topic: "safety",
        question: "What does the manual tell you to do before backing your vehicle?",
        choices: [
          "Rely on the rear-view mirrors, which give the widest view",
          "Rev the engine so anyone behind hears you",
          "Turn around and look to the rear, because mirrors give too small a view",
          "Reverse quickly so you are exposed for less time",
        ],
        correctIndex: 2,
        explanation:
          "Check the area behind the vehicle before you get in, then turn around and look to the rear rather than relying on the mirrors, which the manual says give too small a view for the purpose.",
        context:
          "It adds an instruction people forget in residential streets: children often play behind and between parked vehicles, so extraordinary caution is called for there. Backing slowly is part of the same rule.",
        trap: "A reversing camera is a supplement, not a substitute, and it does not see a child arriving from the side. The manual's answer is to turn your head.",
        excerptKey: "backing-turn-around",
        sourceLabel: `${MANUAL} - Chapter X, Backing Your Vehicle`,
        sourceUrl: hb(64),
      },
      {
        id: "hi_s2_17",
        topic: "impairment",
        question:
          "You have had several drinks. What does the manual say will reduce the alcohol already in your blood?",
        choices: [
          "Black coffee",
          "A cold shower",
          "A large meal",
          "Nothing - only time",
        ],
        correctIndex: 3,
        explanation:
          "Once alcohol is in your blood there is nothing you can do to lessen the effect. Coffee, food and a cold shower may wake you up, but they will not sober you up. The liver burns it off and that takes time.",
        context:
          "Timing matters at the front end, though. A small amount on an empty stomach affects you faster than the same amount after a meal, and the type of drink is irrelevant - only the amount of alcohol that reaches your blood.",
        trap: "Coffee is the classic wrong answer, and it is worse than useless: it makes an impaired driver feel alert enough to get behind the wheel.",
        excerptKey: "alcohol-nothing-helps",
        sourceLabel: `${MANUAL} - Chapter IX, Alcohol`,
        sourceUrl: hb(55),
      },
      {
        id: "hi_s2_18",
        topic: "rightOfWay",
        question: "A funeral procession is crossing the intersection ahead of you. What does the manual say?",
        choices: [
          "It has the right of way, and you should not drive between the vehicles in it",
          "It must yield like any other traffic",
          "You may join the end of it to get through the intersection",
          "It has priority only when a police escort is present",
        ],
        correctIndex: 0,
        explanation:
          "Funeral processions and convoys have the right of way at intersections, and the manual tells you not to drive your vehicle between the vehicles in a procession.",
        context:
          "You can usually identify one before you are close enough to be a problem: the vehicles run with their headlamps on, and the first and last cars usually carry a distinctive marking.",
        trap: "Slipping into a gap looks harmless and breaks the procession up, which is exactly what the priority rule exists to prevent.",
        excerptKey: "funeral-procession",
        sourceLabel: `${MANUAL} - Chapter V, Funeral Processions and Convoys`,
        sourceUrl: hb(29),
      },
      {
        id: "hi_s2_19",
        topic: "licensing",
        question: "How long must a driver under 18 hold an instruction permit before applying for a provisional license?",
        choices: ["30 days", "90 days", "180 days", "One year"],
        correctIndex: 2,
        explanation:
          "One hundred and eighty days. The manual, the graduated licensing brochure and the statute all give the same figure, and the counties will not book a road test until it has run.",
        context:
          "The permit itself is valid for one year and can be renewed. Let it lapse by more than 30 days and the brochure warns of a real cost: you then wait 180 days before you are eligible for a road test.",
        trap: "Ninety days was the pre-2006 figure and still turns up in older material. Hawaii's graduated licensing program doubled it.",
        excerptKey: "permit-180-days",
        sourceLabel: `${MANUAL} - Chapter 1, Driving by Minors`,
        sourceUrl: hb(13),
      },
      {
        id: "hi_s2_20",
        topic: "signals",
        question:
          "A steady DON'T WALK signal is showing and a pedestrian is already halfway across. What does the signal mean for them?",
        choices: [
          "They must turn round and go back to the curb they started from",
          "They may not start crossing, but anyone already crossing continues to the nearest sidewalk or island",
          "They must stop and wait in the roadway",
          "The signal applies only to the far half of the crossing",
        ],
        correctIndex: 1,
        explanation:
          "A steady DON'T WALK or raised palm means pedestrians must not enter the roadway. A flashing one means they may not start, but anyone already crossing may continue to the nearest sidewalk, traffic island or safety zone.",
        context:
          "Hawaii treats a countdown timer the same way. No pedestrian may start once the countdown begins, and anyone already crossing must finish before it reaches zero.",
        trap: "Turning back mid-crossing is the most dangerous option there is. The rule keeps the pedestrian moving in a predictable direction.",
        excerptKey: "dont-walk-signal",
        sourceLabel: `${MANUAL} - Chapter VI, Pedestrian Signals`,
        sourceUrl: hb(42),
      },
      {
        id: "hi_s2_21",
        topic: "rules",
        question:
          "You are approaching a railroad crossing and the crossing signals begin to flash. Where must you stop?",
        choices: [
          "Anywhere before the tracks",
          "Not less than 15 feet from the nearest rail",
          "Not less than 25 feet from the nearest rail",
          "Level with the crossbuck sign",
        ],
        correctIndex: 1,
        explanation:
          "Not less than 15 feet from the nearest rail. The manual gives that figure and the statute adds an outer limit - stop within fifty feet but not less than fifteen.",
        context:
          "Four things trigger the duty: a signal warning of an approaching train, a lowered gate or a flagman signaling, a train within about 1,500 feet sounding an audible warning, or a train visible and close enough to be a hazard.",
        trap: "Driving around a lowered gate is a separate offense in its own right. The statute forbids going through, around or under a crossing gate while it is closed or moving.",
        excerptKey: "railroad-15-feet",
        sourceLabel: `${MANUAL} - Chapter V, Railroad Crossings`,
        sourceUrl: hb(27),
      },
      {
        id: "hi_s2_22",
        topic: "sharing",
        question:
          "How much lane space is a motorcyclist entitled to when you pass, according to the manual?",
        choices: [
          "The right-hand half of the lane",
          "Enough room for the machine plus a foot either side",
          "A full lane, as if the motorcycle were a car",
          "Whatever the rider leaves after moving over",
        ],
        correctIndex: 2,
        explanation:
          "When passing a motorcycle you allow it a full lane. Never crowd into the same lane as the machine, and do not return to your lane so soon that the rider has to swerve right into traffic or off the road.",
        context:
          "The manual explains why the rider moves around inside the lane: they position themselves to see and be seen, often to the left of the lane, and they shift to avoid potholes and railroad tracks that a car would ignore. Those movements can be sudden.",
        trap: "The rider leaving space on one side is not an invitation to share the lane. It is usually them getting away from a hazard you have not seen yet.",
        excerptKey: "motorcycle-passing",
        sourceLabel: `${MANUAL} - Chapter XI, Passing and Being Passed`,
        sourceUrl: hb(94),
      },
      {
        id: "hi_s2_23",
        topic: "parking",
        question:
          "A parking space carries the international symbol of accessibility. When may you use it?",
        choices: [
          "When you are dropping someone off for less than five minutes",
          "Only when displaying the placard or plate issued to the disabled person being transported in the vehicle",
          "When every other space in the lot is taken",
          "When you are helping any person with a mobility difficulty",
        ],
        correctIndex: 1,
        explanation:
          "The manual makes the placard or plate specific to the person in the car: you may park there only when displaying the one issued to the disabled person being transported in the vehicle.",
        context:
          "The striped access aisle beside the space is also off limits. It has to stay clear so a wheelchair lift or ramp can deploy, which is impossible if a car is sitting in it even briefly.",
        trap: "Borrowing a relative's placard is the version of this that people talk themselves into. The placard travels with its holder, not with the car.",
        excerptKey: "parking-accessible-placard",
        sourceLabel: `${MANUAL} - Chapter V, Parking`,
        sourceUrl: hb(29),
      },
      {
        id: "hi_s2_24",
        topic: "safety",
        question: "What does the manual say about hazard warning signals, the four-way flashers?",
        choices: [
          "Use them whenever visibility drops below two car lengths while driving",
          "Use them any time you drive slower than the flow of traffic",
          "They should never be used while the vehicle is moving",
          "They replace a turn signal when you are double parked",
        ],
        correctIndex: 2,
        explanation:
          "Hazard warning signals mean a vehicle is in a hazardous position on the roadway, and the manual states in capitals that this signal should never be used while the vehicle is moving.",
        context:
          "There is one flashing-light exception in the fog section, and it is consistent: if you cannot see two car lengths, pull completely off the pavement, stop, and then turn the hazard signals on.",
        trap: "Flashers on in heavy rain is a widespread habit and it removes your turn signals, which are the only way anyone knows what you are about to do.",
        excerptKey: "hazard-lights-not-moving",
        sourceLabel: `${MANUAL} - Chapter X, Hazard Warning Signals`,
        sourceUrl: hb(73),
      },
      {
        id: "hi_s2_25",
        topic: "signs",
        question: "What do white obstruction markings painted in the traffic lane tell you?",
        choices: [
          "You may pass to either side of them",
          "You must pass to the right of them",
          "You must pass to the left of them",
          "The lane is closed beyond them",
        ],
        correctIndex: 0,
        explanation:
          "Obstruction markings guide you round something in the road, such as a bridge support. White ones may be passed on either side. Yellow ones must be passed only on the right.",
        context:
          "The colors are consistent with the rest of the system: yellow is about opposing traffic, so a yellow obstruction marking is warning you that the far side of the obstruction belongs to somebody coming the other way.",
        trap: "The two colors do different jobs and the difference is the whole question. Passing a yellow obstruction marking on the left puts you into oncoming traffic.",
        excerptKey: "obstruction-markings",
        sourceLabel: `${MANUAL} - Chapter VI, Pavement Markings`,
        sourceUrl: hb(37),
      },
      {
        id: "hi_s2_26",
        topic: "emergencies",
        question:
          "You are in a crash and another driver's car is damaged. What information must you give?",
        choices: [
          "Your insurance policy number only",
          "Your name, address and vehicle registration information, and your license if it is asked for",
          "Nothing until the police arrive",
          "Your name only, unless somebody is injured",
        ],
        correctIndex: 1,
        explanation:
          "Drivers must give their name, address and vehicle registration information, and exhibit their driver's license if requested, to anyone injured and to the driver or occupant of any vehicle or property damaged.",
        context:
          "The manual's five steps run in order: stop immediately and move the vehicle off the traveled portion if you can, help the injured, warn passing traffic, exchange information, and leave a written notice if you have hit an unattended vehicle and cannot find its owner.",
        trap: "Waiting silently for the police is not an option. Leaving the scene without identifying yourself and rendering assistance is exactly what the manual forbids in its first step.",
        excerptKey: "crash-exchange-info",
        sourceLabel: `${MANUAL} - Chapter VII, Crash Procedures`,
        sourceUrl: hb(52),
      },
      {
        id: "hi_s2_27",
        topic: "rightOfWay",
        question: "You are entering a roundabout. Who has the right of way?",
        choices: [
          "You do, once you have signalled",
          "The traffic already circulating in the roundabout",
          "Whichever driver arrives at the yield line first",
          "The vehicle on your right, as at any other intersection",
        ],
        correctIndex: 1,
        explanation:
          "A roundabout is a one-way circular intersection in which entering traffic yields to circulating traffic. Every approach is marked with a yield sign and may also have yield line markings on the pavement.",
        context:
          "The manual's routine is: slow on approach, yield to pedestrians and bicyclists entering and leaving, look left and yield to anything already going round, keep right of the central island traveling counterclockwise, and signal right to exit.",
        trap: "Missing your exit is not a reason to stop or reverse. The manual says to go round again until you reach it.",
        excerptKey: "roundabout-yield",
        sourceLabel: `${MANUAL} - Chapter X, Roundabout`,
        sourceUrl: hb(65),
      },
      {
        id: "hi_s2_28",
        topic: "speed",
        question:
          "You are driving well under the limit and a queue has built up behind you on a two-lane road. What does the manual say?",
        choices: [
          "Keep your speed - the limit is a maximum, not a requirement",
          "Speed up to the limit whatever the conditions",
          "Turn on your hazard lights and continue",
          "You must not drive so slowly that you hold back traffic; pull off and let it pass or change route",
        ],
        correctIndex: 3,
        explanation:
          "The manual is direct: you must not drive so slowly that you hold back other traffic, and if you cannot keep up you pull off the roadway and let traffic pass, or take another route.",
        context:
          "A 2024 amendment to the statute made it sharper still. On a two-lane road, a vehicle going ten or more miles per hour below the posted limit where passing is not possible, with five or more vehicles behind it, has to move off at the nearest safe place.",
        trap: "The limit being a maximum is true and beside the point. Hawaii treats obstructing the flow as its own hazard, because it is what makes people attempt bad passes.",
        excerptKey: "speed-not-too-slow",
        sourceLabel: `${MANUAL} - Chapter V, Speed Restrictions`,
        sourceUrl: hb(28),
      },
      {
        id: "hi_s2_29",
        topic: "sharing",
        question: "May a bicyclist ride on the sidewalk in Hawaii?",
        choices: [
          "Never, anywhere in the state",
          "Yes, anywhere, provided they give way to pedestrians",
          "Not in business districts; elsewhere, at 10 mph or less and yielding to pedestrians",
          "Only riders under 16 may do so",
        ],
        correctIndex: 2,
        explanation:
          "Sidewalk riding is prohibited in business districts. Elsewhere it is allowed at ten miles per hour or less, with the rider always yielding the right of way to pedestrians.",
        context:
          "Bicycles are legally vehicles in Hawaii, with the rights and duties of any other vehicle. On the roadway riders must go single file, and may ride two abreast only in a bicycle lane or on a path wide enough not to impede traffic.",
        trap: "A motorised bicycle is treated differently: the statute bans riding one on any sidewalk at all, whatever the district.",
        excerptKey: "bicycle-sidewalk-rule",
        sourceLabel: `${MANUAL} - Chapter XIII, Bicyclists`,
        sourceUrl: hb(98),
      },
      {
        id: "hi_s2_30",
        topic: "licensing",
        question:
          "Your Hawaii driver's license expired last week. What does the manual say about driving on it?",
        choices: [
          "There is a 90-day grace period during which you may still drive",
          "You may drive if a licensed driver is with you",
          "The license is void after the expiration date, with no grace period",
          "You may drive to and from work only",
        ],
        correctIndex: 2,
        explanation:
          "The manual puts it in capitals: every Hawaii state driver's license is void after the expiration date, and there is no grace period. An expired license is not a license.",
        context:
          "Renewal itself is more forgiving than driving on it. You may renew within the six months before expiry, and you may still renew for up to a year afterwards. Miss that and you start over as if applying for an original license.",
        trap: "The one-year renewal window is not permission to drive. It is only a window in which the paperwork is easier.",
        excerptKey: "no-grace-period",
        sourceLabel: `${MANUAL} - Chapter 1, License Renewal`,
        sourceUrl: hb(15),
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Real Test Difficulty",
    difficulty: "medium",
    description:
      "Thirty-five questions pitched where the county knowledge test actually sits: exact figures, the difference between two rules that sound alike, and the places where Hawaii's law says something the manual only implies.",
    questions: [
      {
        id: "hi_s3_01",
        topic: "rules",
        question:
          "The manual lists situations in which you must not drive on the left half of the roadway. Which of these is one of them?",
        choices: [
          "Approaching within 100 feet of an intersection or a railroad crossing",
          "Approaching within 300 feet of an intersection",
          "Any time between sunset and sunrise",
          "On any road with a posted limit above 45 mph",
        ],
        correctIndex: 0,
        explanation:
          "One hundred feet, about 30.5 meters, from or through an intersection or railroad crossing. The statute uses the same figure, and applies it to a bridge, viaduct or tunnel where your view is obstructed.",
        context:
          "The full list also bars the left half on a road with four or more lanes for moving traffic unless signs direct otherwise, and when you are approaching the top of a hill or a curve.",
        trap: "Three hundred feet is a stopping-distance figure from other contexts. Hawaii's number for intersections, railroad crossings and obstructed bridges is one hundred.",
        excerptKey: "left-half-100-feet",
        sourceLabel: `${MANUAL} - Chapter V, Driving on the Left Side of Roadway`,
        sourceUrl: hb(26),
      },
      {
        id: "hi_s3_02",
        topic: "safety",
        question:
          "At what speed does the manual say partial hydroplaning can begin on a wet road?",
        choices: ["25 mph", "30 mph", "35 mph", "45 mph"],
        correctIndex: 2,
        explanation:
          "Thirty-five miles per hour, about 56 km/h. Up to that speed a tire with good tread wipes the road the way a wiper clears a windshield; above it, the water starts to build ahead of the tire.",
        context:
          "The manual follows the curve up: the extent increases with speed and with the depth of water, and at 55 mph in heavy rain the tires may lose all contact with the pavement, at which point you cannot brake, accelerate or steer.",
        trap: "Bald or under-inflated tires hydroplane at lower speeds than 35, so the figure is a best case rather than a threshold you can rely on.",
        excerptKey: "hydroplaning-35",
        sourceLabel: `${MANUAL} - Chapter X, Driving in Inclement Weather`,
        sourceUrl: hb(75),
      },
      {
        id: "hi_s3_03",
        topic: "impairment",
        question:
          "You refuse a breath test after being stopped for drunk driving in Hawaii. What does the manual say can follow?",
        choices: [
          "Nothing, since the test is voluntary",
          "A fine but no effect on your license",
          "Revocation of your license for one, two or four years depending on your prior alcohol enforcement contacts",
          "A 30-day suspension and nothing further",
        ],
        correctIndex: 2,
        explanation:
          "Refusing may cost you your license for one year, two years or four years, depending on your prior alcohol enforcement contacts, and you can still be charged with driving under the influence anyway.",
        context:
          "Hawaii's implied consent rule is what makes that work: anyone who operates a motor vehicle on a public highway in the state is deemed to have consented to being tested for the amount of alcohol in their blood.",
        trap: "Refusing does not make the case go away. The manual points out that a test can also prove you are not under the influence, which is the argument for taking it.",
        excerptKey: "refusal-revocation",
        sourceLabel: `${MANUAL} - Chapter IX, The Law`,
        sourceUrl: hb(56),
      },
      {
        id: "hi_s3_04",
        topic: "sharing",
        question:
          "The manual says research shows most car and motorcycle crashes share one cause. What is it?",
        choices: [
          "A car driver turning in front of the motorcyclist",
          "The motorcyclist riding above the speed limit",
          "The motorcyclist passing between lanes",
          "A car driver following the motorcycle too closely",
        ],
        correctIndex: 0,
        explanation:
          "Over two-thirds of car and motorcycle crashes are the result of a car driver turning in front of the rider. The manual repeats the point in its intersections section, and intersections are where most of them happen.",
        context:
          "The reason is a perception failure rather than a rule failure. A motorcycle's narrow silhouette makes it look further away and slower than it really is, so the driver's estimate of the gap is wrong before any decision gets made.",
        trap: "Blaming rider behavior is the intuitive answer and the manual's figures point the other way. Look twice, then a third time, before you turn across a lane.",
        excerptKey: "motorcycle-turning-crashes",
        sourceLabel: `${MANUAL} - Chapter XI, Sharing the Road with Motorcycles`,
        sourceUrl: hb(89),
        commonlyMissed: true,
      },
      {
        id: "hi_s3_05",
        topic: "licensing",
        question:
          "A 17-year-old on a provisional license wants to drive at 11:30 p.m. When may they do so?",
        choices: [
          "Any time, provided they are alone",
          "Only with a licensed parent or guardian beside them, unless they are going to or from work or a school-authorized activity",
          "Any time, provided they carry a note from a parent",
          "Only if the trip is under five miles",
        ],
        correctIndex: 1,
        explanation:
          "Between 11 p.m. and 5 a.m. a provisional licensee may drive only with a licensed parent or guardian in the passenger seat, except when traveling to or from employment or a school-authorized activity.",
        context:
          "Both exceptions come with paperwork. For work you carry a signed statement from the employer with their name, address, telephone number and verification of your hours; for a school activity, the same from a parent or guardian.",
        trap: "Even inside the exceptions the passenger limit tightens: during those hours you may not carry more than one person under 18 without your licensed parent or guardian along.",
        excerptKey: "provisional-night-rule",
        sourceLabel: `${MANUAL} - Chapter 1, Driving by Minors`,
        sourceUrl: hb(14),
        commonlyMissed: true,
      },
      {
        id: "hi_s3_06",
        topic: "signs",
        question:
          "What does the slow moving vehicle emblem look like, and what does it tell you about the vehicle carrying it?",
        choices: [
          "A round orange disc, meaning a vehicle over 10,000 pounds",
          "A reflective 18-inch triangle, meaning a vehicle designed to operate at 25 mph or less",
          "A square yellow plate, meaning a farm vehicle only",
          "A rectangular red panel, meaning a vehicle carrying hazardous materials",
        ],
        correctIndex: 1,
        explanation:
          "A highly reflective 18-inch triangular emblem, about 46 centimetres, displayed on the rear of vehicles designed to operate at 25 mph or less. When you see one, reduce speed and approach cautiously.",
        context:
          "The closing speed is the danger. Coming up on a vehicle doing 15 mph while you do 50 gives you a great deal less time than the sight picture suggests, especially on a curving Hawaii highway.",
        trap: "Hazardous materials are marked with placards, not with the slow moving vehicle triangle. The two get confused because both are attention-grabbing panels on the back of a vehicle.",
        excerptKey: "slow-moving-emblem",
        sourceLabel: `${MANUAL} - Chapter V, Slow Moving Vehicle Emblem`,
        sourceUrl: hb(30),
      },
      {
        id: "hi_s3_07",
        topic: "parking",
        question:
          "How long may a vehicle stay parked in one place on a Hawaii public street, according to the manual?",
        choices: [
          "No more than 8 hours",
          "No more than 12 hours",
          "No more than 24 hours continuously",
          "No more than 72 hours continuously",
        ],
        correctIndex: 2,
        explanation:
          "Parking on a public street or highway for a continuous period of more than 24 hours is on the manual's prohibited list.",
        context:
          "It sits alongside the ban on using a public road to repair a vehicle, except in an emergency, or to wash one or display one for sale. All three are about a street being for movement rather than storage.",
        trap: "Moving the car a few feet does not restart the clock in the way people assume. Enforcement on the islands is complaint-driven, and the tow-away power sits behind it.",
        excerptKey: "parking-24-hours",
        sourceLabel: `${MANUAL} - Chapter V, Parking`,
        sourceUrl: hb(29),
      },
      {
        id: "hi_s3_08",
        topic: "signals",
        question:
          "You are stopped at a red light on a one-way street that meets another one-way street where traffic moves to the left. What does the manual allow?",
        choices: [
          "Nothing; only right turns are permitted against a red in Hawaii",
          "A left turn after stopping, unless a sign prohibits it",
          "A left turn without stopping, since the intersecting traffic cannot reach you",
          "A U-turn after stopping",
        ],
        correctIndex: 1,
        explanation:
          "After stopping, you may turn left on red from a one-way street into a one-way street where traffic is moving to the left, unless a sign prohibits it. Right on red works the same way, after a stop.",
        context:
          "Both turns are permissive and both are county-revocable. The statute lets a county prohibit either turn against a red by ordinance, effective once a sign is put up at that intersection.",
        trap: "The claim that Hawaii allows only right on red is a common one and it is wrong. The condition that catches people is the second street: traffic on it has to be moving to the left.",
        excerptKey: "left-on-red-one-way",
        sourceLabel: `${MANUAL} - Chapter VI, Traffic Signals`,
        sourceUrl: hb(39),
        commonlyMissed: true,
      },
      {
        id: "hi_s3_09",
        topic: "emergencies",
        question: "Your brakes fail completely. What sequence does the manual give?",
        choices: [
          "Pull the parking brake hard immediately and steer straight",
          "Switch the ignition off and coast to a stop",
          "Pump the brake pedal quickly, shift to a lower gear, look for an escape route, then apply the parking brake gradually",
          "Turn on the hazard lights and steer into the shoulder at speed",
        ],
        correctIndex: 2,
        explanation:
          "Pump the pedal quickly, shift down, look for an escape route such as a side road or flat open area while using the lights and horn to warn others, then bring the car to a stop with the parking brake applied gradually.",
        context:
          "The word gradually is doing the work. The manual warns that applying the parking brake rapidly or with great force can make you lose control, which turns a braking problem into a steering one.",
        trap: "Killing the ignition takes the power steering and power brakes with it and can lock the steering column. It is a last resort for a stuck accelerator, not a first move for failed brakes.",
        excerptKey: "brake-failure",
        sourceLabel: `${MANUAL} - Chapter X, Brake Failure`,
        sourceUrl: hb(81),
      },
      {
        id: "hi_s3_10",
        topic: "speed",
        question: "What counts as excessive speeding under Hawaii law?",
        choices: [
          "Ten miles per hour or more over the limit",
          "Twenty miles per hour or more over the limit",
          "Thirty miles per hour or more over the limit, or 80 mph or more whatever the limit",
          "Any speed over 70 mph",
        ],
        correctIndex: 2,
        explanation:
          "Thirty miles per hour or more above the applicable state or county limit, or eighty miles per hour or more regardless of the limit. Either way, it is a petty misdemeanour rather than a traffic infraction.",
        context:
          "The eighty mile per hour limb is the one people miss. It means a driver on a 60 mph stretch is charged with excessive speeding at 80, even though that is only twenty over.",
        trap: "Ordinary speeding is a separate offense with its own penalty, plus a $10 neurotrauma surcharge once you are more than ten over. Excessive speeding is the criminal one.",
        excerptKey: "hrs-excessive-speeding",
        sourceLabel: "Hawaii Revised Statutes - Section 291C-105",
        sourceUrl: hrs("HRS0291C/HRS_0291C-0105"),
      },
      {
        id: "hi_s3_11",
        topic: "rules",
        question:
          "The manual lists distances for a safe pass on a two-lane road. How much clear distance ahead does it want when you approach a hill or a curve?",
        choices: [
          "300 to 500 feet",
          "500 to 700 feet",
          "700 to 1,000 feet",
          "1,000 to 1,500 feet",
        ],
        correctIndex: 2,
        explanation:
          "Seven hundred to a thousand feet, roughly 213 to 305 meters. Below that, the manual puts an approaching hill or curve on its list of places you must not pass.",
        context:
          "The statute adds a second number for the same maneuver: you must be back in your own lane before you come within two hundred feet of any approaching vehicle.",
        trap: "The figure is clear distance ahead, not the length of the pass. It is the distance in which you and an oncoming car can both appear and still have room.",
        excerptKey: "no-pass-hill-curve",
        sourceLabel: `${MANUAL} - Chapter V, No Passing Rules`,
        sourceUrl: hb(30),
      },
      {
        id: "hi_s3_12",
        topic: "safety",
        question:
          "Your car starts to skid and the rear end is sliding to the right. What does the manual tell you to do with the steering wheel?",
        choices: [
          "Turn it to the right, firmly but without a large sudden movement",
          "Turn it to the left to counteract the slide",
          "Hold it straight and brake hard",
          "Let go of it and let the car straighten itself",
        ],
        correctIndex: 0,
        explanation:
          "Steer in the direction the rear of the vehicle is skidding. Rear sliding right means steering right, firmly but without a large sudden turn, and straightening as the skid stops.",
        context:
          "Two things come first: avoid the brakes, releasing them if the skid began when you applied them, and ease off the accelerator, which alone may end it. Overcorrecting then throws the car into a skid the other way.",
        trap: "Steering away from the slide is the instinct the manual warns about. It says the correct action may feel unnatural to anyone who has never been in a skid.",
        excerptKey: "skid-steer-into-it",
        sourceLabel: `${MANUAL} - Chapter X, Skids`,
        sourceUrl: hb(83),
      },
      {
        id: "hi_s3_13",
        topic: "licensing",
        question:
          "Who may supervise a Hawaii instruction permit holder who is 16 and driving at 2 p.m.?",
        choices: [
          "Any licensed driver aged 18 or over",
          "Any licensed driver aged 21 or over, licensed for that category of vehicle, sitting in the passenger seat beside them",
          "A parent only",
          "Any licensed driver, provided they are in the vehicle somewhere",
        ],
        correctIndex: 1,
        explanation:
          "The supervising driver must be at least 21 and licensed for the category of vehicle being driven, and must occupy the passenger seat beside the permit holder. In all vehicles except motorcycles that means the right front seat.",
        context:
          "The rule tightens at night. Between 11 p.m. and 5 a.m. a permit holder under 18 must be accompanied by their own parent or guardian, not just any 21-year-old.",
        trap: "Eighteen was the old figure and Hawaii's graduated licensing program raised it to 21. Sitting in the back seat does not count either.",
        excerptKey: "hrs-permit-supervision",
        sourceLabel: "Hawaii Revised Statutes - Section 286-110",
        sourceUrl: hrs("HRS0286/HRS_0286-0110"),
      },
      {
        id: "hi_s3_14",
        topic: "rightOfWay",
        question:
          "You are stopped at a stop sign behind two other cars. The intersection clears. What must you do when it is your turn?",
        choices: [
          "Follow the car ahead through without stopping again",
          "Stop again at the stop sign or stop line before you proceed",
          "Roll through slowly if there is no cross traffic",
          "Proceed without stopping if you can see the intersection is clear",
        ],
        correctIndex: 1,
        explanation:
          "Every driver stops at the stop line. Being third in a queue does not transfer the first car's stop to you - you make your own, at the line, and then yield to anything close enough to be a hazard.",
        context:
          "The manual adds a second stop where you need one: if you cannot see other traffic from the first stop, move ahead slowly and stop again where you can see approaching traffic.",
        trap: "Following the car ahead through is one of the most common road-test failures on any island, and it is a running of the sign whether or not anything is coming.",
        excerptKey: "hrs-stop-sign-yield",
        sourceLabel: "Hawaii Revised Statutes - Section 291C-63",
        sourceUrl: hrs("HRS0291C/HRS_0291C-0063"),
        commonlyMissed: true,
      },
      {
        id: "hi_s3_15",
        topic: "impairment",
        question:
          "A test shows a blood alcohol content of .09 after a stop in Hawaii. What happens to the license administratively?",
        choices: [
          "Nothing until a court convicts you",
          "It is taken away and you are given a 30-day temporary driving permit",
          "It is endorsed but stays valid",
          "It is suspended for 24 hours",
        ],
        correctIndex: 1,
        explanation:
          "Administrative license revocation takes effect at .08 or more, or on a refusal. The license is taken and a 30-day temporary driving permit is issued in its place, and anyone revoked may request a hearing.",
        context:
          "The criminal case runs separately. A first OVUII conviction brings a 14-hour minimum substance abuse program, revocation for between one year and eighteen months, an ignition interlock for the whole revocation period, and at least one of community service, jail or a fine.",
        trap: "The administrative action does not wait for a court. It happens at the roadside, which is why people are surprised to find the license already gone.",
        excerptKey: "admin-license-revocation",
        sourceLabel: `${MANUAL} - Chapter IX, Administrative License Revocation`,
        sourceUrl: hb(55),
      },
      {
        id: "hi_s3_16",
        topic: "sharing",
        question:
          "Why does the manual tell you to give a large truck extra room when you are changing lanes near it?",
        choices: [
          "Trucks are less manoeuvrable at low speed",
          "Truck drivers are required to give way to cars",
          "Trucks need a greater distance to stop than cars do",
          "Trucks are more likely to be speeding",
        ],
        correctIndex: 2,
        explanation:
          "Large vehicles require greater stopping distances, and the manual says other drivers must make allowances for that when changing lanes or at intersections near them.",
        context:
          "Visibility is the other half. Forward vision from a truck cab is good, but sight to the sides and rear is severely limited and the area immediately behind the trailer is invisible to the driver. If you cannot see their mirrors, they cannot see you.",
        trap: "Cutting in front of a truck and then braking removes the stopping distance the driver had built up, which is the exact scenario the rule exists to prevent.",
        excerptKey: "large-vehicle-stopping",
        sourceLabel: `${MANUAL} - Chapter XI, Stopping Distance`,
        sourceUrl: hb(86),
      },
      {
        id: "hi_s3_17",
        topic: "signs",
        question:
          "Red pavement markings or reflectors are laid across a roadway ahead of you. What do they mean?",
        choices: [
          "A bus lane in operation at peak hours",
          "A roadway that must not be entered or used",
          "A pedestrian crossing point",
          "A surface that becomes slippery when wet",
        ],
        correctIndex: 1,
        explanation:
          "Red markings or reflectors indicate a roadway that must not be entered or used. The statute frames it from your seat: red markings indicate a roadway that shall not be entered by the viewer of those markings.",
        context:
          "The night version is the one that saves you. The manual tells you that red lane marking reflectors mean you are going the wrong direction in the traffic lane - a wrong-way freeway entry lights up red.",
        trap: "Red on the pavement is not a bus-lane or a crossing color in Hawaii. If red is facing you, you are somewhere you should not be.",
        excerptKey: "red-pavement-markings",
        sourceLabel: `${MANUAL} - Chapter VI, Pavement Markings`,
        sourceUrl: hb(35),
      },
      {
        id: "hi_s3_18",
        topic: "parking",
        question:
          "You are parallel parked between two cars. How much space does the manual want at each bumper?",
        choices: [
          "At least one foot",
          "At least two feet",
          "At least three feet",
          "Whatever fits, provided you are within 12 inches of the curb",
        ],
        correctIndex: 1,
        explanation:
          "Front and rear bumpers should not be closer than two feet from the other vehicles when parked, unless the street is marked otherwise.",
        context:
          "The other half of the parallel parking rule is the curb: where angle parking is not clearly designated, you park parallel and headed in the direction of traffic, with your curbside wheels within 12 inches of the curb or completely inside a marked stall.",
        trap: "Getting close enough to the curb and close enough to the other cars are different requirements, and a road-test examiner checks both.",
        excerptKey: "parallel-park-two-feet",
        sourceLabel: `${MANUAL} - Chapter X, Parallel Parking`,
        sourceUrl: hb(72),
      },
      {
        id: "hi_s3_19",
        topic: "rules",
        question:
          "The manual says a signal has to be given for at least 100 feet. What else does it insist on?",
        choices: [
          "Signaling only when other vehicles are in sight",
          "Signaling every time, even when there are no other vehicles in sight",
          "Signaling only for left turns and lane changes",
          "Signaling only during daylight hours",
        ],
        correctIndex: 1,
        explanation:
          "You must signal every time, even when there are no other vehicles in sight. The manual lists failing to signal when it appears nobody will see it among its common signaling errors.",
        context:
          "The 100 feet applies to changing lanes, turning and stopping. The statute adds a separate duty: you may not stop or suddenly slow without first signaling to the driver behind you when there is an opportunity to do so.",
        trap: "The reason for signaling to an empty road is that the road is not as empty as you think. A motorcycle in your blind spot is exactly the vehicle you have not seen.",
        excerptKey: "signal-every-time",
        sourceLabel: `${MANUAL} - Chapter V, Required Signals`,
        sourceUrl: hb(27),
      },
      {
        id: "hi_s3_20",
        topic: "emergencies",
        question: "A tire blows out at speed. What is the first thing the manual tells you not to do?",
        choices: [
          "Do not apply the brakes",
          "Do not steer",
          "Do not take your foot off the accelerator",
          "Do not turn on the hazard lights",
        ],
        correctIndex: 0,
        explanation:
          "Do not apply the brakes; the manual says it in capitals, because braking on a collapsed tire can make the car uncontrollable. Grip the wheel firmly and steer to stay in your lane.",
        context:
          "The rest of the sequence is patience. Let the speed come down gradually without the brakes, and only when you are moving very slowly do you brake lightly and pull off into a safe area. You can drive some distance slowly on a blown tire without wrecking the rim.",
        trap: "Braking is the instinct, and it is the one thing that turns a blowout into a spin.",
        excerptKey: "blowout-no-brakes",
        sourceLabel: `${MANUAL} - Chapter X, Tire Blowouts`,
        sourceUrl: hb(81),
      },
      {
        id: "hi_s3_21",
        topic: "signals",
        question:
          "A yellow X is flashing over the lane you are in. What does the manual say you may use that lane for?",
        choices: [
          "Nothing; you must leave it at once",
          "Any movement, with caution",
          "Only to prepare for a left turn",
          "Only to overtake a slower vehicle",
        ],
        correctIndex: 2,
        explanation:
          "A steady yellow X means move out of the lane because it is about to be used by traffic going the other way. When the yellow X is flashing, you may use the lane only when preparing to turn left.",
        context:
          "That flashing yellow X marks a shared center lane on a reversible road: your side may turn left from it, and so may the traffic coming the other way, which is why nothing else is allowed in there.",
        trap: "Steady and flashing mean different things on the same sign face, and the flashing version is the one drivers new to contraflow roads misread.",
        excerptKey: "lane-control-yellow-x",
        sourceLabel: `${MANUAL} - Chapter VI, Lane Control Signals`,
        sourceUrl: hb(42),
      },
      {
        id: "hi_s3_22",
        topic: "safety",
        question:
          "Traffic is stopped on the far side of the intersection but your light is green. What does the manual require?",
        choices: [
          "Move into the intersection and wait there",
          "Move part way in so nobody can cut across in front of you",
          "Sound your horn and edge forward",
          "Wait behind the line until there is room for your whole vehicle on the far side",
        ],
        correctIndex: 3,
        explanation:
          "Never drive into an intersection or crosswalk unless there is space for your entire vehicle on the opposite side. The manual states it in capitals, and it applies whatever color the light is.",
        context:
          "A car stranded in the box when the lights change blocks the cross traffic that now has a green, and on the narrow grid streets of Honolulu one blocked intersection backs up several more behind it.",
        trap: "Edging in to hold your place is the very habit the rule targets. The green gives you permission to go, not permission to occupy space you cannot clear.",
        excerptKey: "do-not-block-intersection",
        sourceLabel: `${MANUAL} - Chapter X, Stopping in Traffic`,
        sourceUrl: hb(69),
        commonlyMissed: true,
      },
      {
        id: "hi_s3_23",
        topic: "speed",
        question:
          "What does the manual say about entering a curve, as distinct from being in one?",
        choices: [
          "Brake through the whole curve to keep the speed down",
          "Slow to a proper speed before you enter, then hold a steady speed in the curve",
          "Accelerate on entry so the car settles on its suspension",
          "Coast in neutral to keep the tires unloaded",
        ],
        correctIndex: 1,
        explanation:
          "Slow to a proper speed before you enter a curve or begin a turn, and hold a steady speed through it. Braking or an abrupt change of speed mid-curve can cost you control.",
        context:
          "The same section tells you to use extra caution on curves and turns in poor weather or where there is gravel, sand or mud on the road - all three of which show up on Hawaii's rural highways after rain.",
        trap: "Braking mid-corner shifts weight onto the front tires and unloads the rear, which is how a routine curve becomes a spin.",
        excerptKey: "slow-before-curve",
        sourceLabel: `${MANUAL} - Chapter X, Turns and Curves`,
        sourceUrl: hb(67),
      },
      {
        id: "hi_s3_24",
        topic: "licensing",
        question:
          "What is the minimum liability coverage a Hawaii motor vehicle policy has to carry for bodily injury?",
        choices: [
          "$10,000 per person with a $20,000 aggregate per accident",
          "$20,000 per person with a $40,000 aggregate per accident",
          "$25,000 per person with a $50,000 aggregate per accident",
          "$50,000 per person with a $100,000 aggregate per accident",
        ],
        correctIndex: 1,
        explanation:
          "Twenty thousand dollars per person with an aggregate limit of forty thousand per accident for bodily injury, plus ten thousand for property damage per accident.",
        context:
          "The basic benefits also include up to $10,000 per person for medical and rehabilitative expenses. The manual is careful to add that damage to your own car is not covered unless you buy more than the minimum.",
        trap: "The bodily injury and property damage figures both appear as ten thousand somewhere in the paragraph, which is why the numbers get swapped. Property damage is the $10,000 one.",
        excerptKey: "insurance-minimums",
        sourceLabel: `${MANUAL} - Chapter VIII, Motor Vehicle Insurance Law`,
        sourceUrl: hb(54),
      },
      {
        id: "hi_s3_25",
        topic: "rightOfWay",
        question:
          "A vehicle is stopped at a crosswalk ahead of you in the right-hand lane of a multi-lane street. What may you do?",
        choices: [
          "Pass it in the left lane if you slow down",
          "Pass it in the left lane while sounding your horn",
          "Nothing - you may not overtake and pass a vehicle stopped at a crosswalk",
          "Pass it if you cannot see anyone in the crosswalk",
        ],
        correctIndex: 2,
        explanation:
          "When a vehicle is stopped at a crosswalk to let a pedestrian cross, a driver approaching from behind may not overtake and pass it. The manual gives the same rule and marks it prohibited by law.",
        context:
          "The stopped car is a screen. Somebody stepping out from in front of it appears in your lane with no warning at all, and this is the sequence behind a large share of Hawaii's pedestrian fatalities.",
        trap: "Not seeing anyone is the point of the rule rather than an exception to it. You cannot see past the vehicle that stopped.",
        excerptKey: "hrs-crosswalk-no-pass",
        sourceLabel: "Hawaii Revised Statutes - Section 291C-72",
        sourceUrl: hrs("HRS0291C/HRS_0291C-0072"),
        commonlyMissed: true,
      },
      {
        id: "hi_s3_26",
        topic: "rules",
        question:
          "Which of these does the manual list as a condition under which you must not pass?",
        choices: [
          "When there is a school bus on the same roadway with its flashing lights operating",
          "When the vehicle ahead is towing a trailer",
          "When you are within one mile of a school",
          "When the road is wet",
        ],
        correctIndex: 0,
        explanation:
          "A school bus on the same roadway with its flashing lights operating is on the manual's no-passing list, along with the right shoulder, solid yellow lines in your lane, hills and curves without enough clear distance, and intersections and railroad crossings.",
        context:
          "The same list bars passing within 100 feet of, or through, any intersection or railroad crossing, and within 100 feet of a posted narrow bridge, viaduct or tunnel.",
        trap: "Wet roads and trailers make passing a bad idea and neither is on the list. The exam asks what the rule says, not what is sensible.",
        excerptKey: "no-pass-school-bus-flashing",
        sourceLabel: `${MANUAL} - Chapter V, No Passing Rules`,
        sourceUrl: hb(31),
      },
      {
        id: "hi_s3_27",
        topic: "sharing",
        question:
          "The manual says a quarter of all bicycle and car crashes come from one bicyclist behavior. Which?",
        choices: [
          "Riding without a helmet",
          "Riding against traffic, on the wrong side of the road",
          "Riding two abreast",
          "Riding after dark without lights",
        ],
        correctIndex: 1,
        explanation:
          "Riding the wrong way. It is illegal, many inexperienced riders do it anyway, and the manual says the behavior leads to roughly 25 per cent of all bicycle and car crashes.",
        context:
          "The reason is where drivers look. A motorist pulling out of a driveway or turning right checks for traffic coming from the left, and a rider arriving from the right is outside the search pattern entirely.",
        trap: "Riding against traffic feels safer because you can see the cars. The crash statistics say the opposite, because the cars are not looking for you.",
        excerptKey: "bicycle-wrong-way-crashes",
        sourceLabel: `${MANUAL} - Chapter XIII, Motorists`,
        sourceUrl: hb(97),
      },
      {
        id: "hi_s3_28",
        topic: "impairment",
        question: "What does Hawaii law say about an opened container of alcohol in a car?",
        choices: [
          "It is legal as long as no passenger is drinking from it",
          "It is legal in the back seat only",
          "It must be kept in the trunk, or in an area not normally occupied by the driver or passengers",
          "It is legal if the driver has had nothing to drink",
        ],
        correctIndex: 2,
        explanation:
          "The container has to go in the trunk, or in some other area of the vehicle not normally occupied by the driver or passengers if there is no trunk. The statute adds that a glove compartment counts as within the occupied area.",
        context:
          "The manual states the companion rule in capitals: it is against the law to consume or possess any alcoholic beverage on any public highway or public sidewalk, and storing an opened container where people sit is prohibited on any public road.",
        trap: "The back seat is not a safe harbour. It is a place the driver and passengers normally occupy, which is precisely what the statute excludes.",
        excerptKey: "hrs-open-container-trunk",
        sourceLabel: "Hawaii Revised Statutes - Section 291-3.3",
        sourceUrl: hrs("HRS0291/HRS_0291-0003_0003"),
      },
      {
        id: "hi_s3_29",
        topic: "safety",
        question:
          "You are on a three-lane-each-way stretch of freeway with nothing to overtake. Which lane does the manual recommend?",
        choices: [
          "The center lanes, because there are fewer traffic conflicts",
          "The left lane, so entering traffic does not affect you",
          "The right lane at all times",
          "Whichever lane is emptiest at the moment",
        ],
        correctIndex: 0,
        explanation:
          "With three or more lanes in your direction, the manual sends you to the center lanes because there are fewer conflicts there, leaving the right and left lanes for vehicles entering and leaving the roadway.",
        context:
          "It is not the same as the keep-right rule, which is about speed. If you are moving slower than other traffic you take the right lane, and the statute requires it - a vehicle going below the normal speed of traffic drives in the right-hand lane or as close to the right edge as practicable.",
        trap: "Sitting in the left lane when you are not passing is one of the two or three complaints Hawaii drivers raise most often, and the statute is on their side.",
        excerptKey: "lane-choice-three-lanes",
        sourceLabel: `${MANUAL} - Chapter X, Choosing a Proper Traffic Lane`,
        sourceUrl: hb(65),
      },
      {
        id: "hi_s3_30",
        topic: "signs",
        question:
          "A barricade in a work zone has diagonal stripes sloping downward to the right. What are they telling you?",
        choices: [
          "The lane is closed for the next 500 feet",
          "Bear to the right",
          "Bear to the left",
          "Stop and wait for a flagperson",
        ],
        correctIndex: 1,
        explanation:
          "The stripes guide you toward the side traffic is meant to pass on. Sloping downward to the right means bear right; sloping downward to the left means bear left.",
        context:
          "Barricades, vertical panels, drums, cones and tubes all do the same job, and at night they are often fitted with flashing or steady burning lights. Orange is the basic color for every one of them.",
        trap: "The stripes are read as a direction, not as a warning. Getting the slope backwards steers you into whatever the barricade is protecting.",
        excerptKey: "barricade-stripes",
        sourceLabel: `${MANUAL} - Chapter VI, Channelizing Devices`,
        sourceUrl: hb(50),
      },
      {
        id: "hi_s3_31",
        topic: "parking",
        question:
          "What does the manual say about parking in the striped access aisle beside an accessible parking space?",
        choices: [
          "It is allowed for up to five minutes",
          "It is allowed if no vehicle is in the accessible space",
          "It is prohibited, because the aisle must stay clear for a wheelchair lift or ramp",
          "It is allowed for motorcycles and mopeds",
        ],
        correctIndex: 2,
        explanation:
          "The access aisle is on the prohibited list. It has to be kept clear so that a wheelchair lift or ramp and other mobility assistance devices can deploy from the vehicle parked alongside.",
        context:
          "The aisle is not spare tarmac; it is the working space a van needs to open a side ramp. Blocking it can leave a driver unable to get back into their own vehicle.",
        trap: "Believing that only the marked space itself matters is the mistake. The hatched area is part of the parking place.",
        excerptKey: "parking-access-aisle",
        sourceLabel: `${MANUAL} - Chapter V, Parking`,
        sourceUrl: hb(29),
      },
      {
        id: "hi_s3_32",
        topic: "emergencies",
        question:
          "Your wheels drop off the edge of the pavement onto a soft shoulder. What does the manual tell you to do?",
        choices: [
          "Jerk the wheel to get back on the pavement immediately",
          "Brake hard and stop where you are",
          "Accelerate and steer back up over the edge",
          "Keep driving off the pavement, slow down, brake gently, and steer back on at a safe speed",
        ],
        correctIndex: 3,
        explanation:
          "Do not force the car back onto the pavement by jerking the wheel. Keep going with the wheels off, reduce speed, use the brakes gently, and steer back up only when you are slow enough to control the return.",
        context:
          "The manual adds one more instruction for the moment you come back on: be ready to make an immediate adjustment to stay in your lane, because the pavement edge kicks the car sideways as the tire climbs it.",
        trap: "The jerk is the instinct and it is the crash. At speed the tire catches the lip of the pavement and throws you across the road.",
        excerptKey: "wheels-off-pavement",
        sourceLabel: `${MANUAL} - Chapter X, Wheels Off Pavement`,
        sourceUrl: hb(82),
      },
      {
        id: "hi_s3_33",
        topic: "signals",
        question:
          "Your turn signals have stopped working. What does the manual say about hand signals?",
        choices: [
          "They are optional once electric signals became standard",
          "They must be used when the vehicle's turn signals are not operating",
          "They may be used only in daylight",
          "They apply only to bicycles and mopeds",
        ],
        correctIndex: 1,
        explanation:
          "Hand signals must be used when the turn signals are not operating, and knowledge of the proper ones is required for exactly that situation.",
        context:
          "The statute gives all three, from the left side of the vehicle: left turn is the hand and arm extended horizontally, right turn is the hand and arm extended upward, and stopping or slowing is the hand and arm extended downward.",
        trap: "Right turn is the arm bent upward, not pointed to the right through the window. Bicyclists get an extra option - they may signal a right turn with the right arm extended horizontally.",
        excerptKey: "hrs-hand-signals",
        sourceLabel: "Hawaii Revised Statutes - Section 291C-86",
        sourceUrl: hrs("HRS0291C/HRS_0291C-0086"),
      },
      {
        id: "hi_s3_34",
        topic: "rules",
        question:
          "Where does the manual tell you not to change lanes at all?",
        choices: [
          "Approaching or moving through intersections and crosswalks",
          "Anywhere within a business district",
          "On any road with a limit above 35 mph",
          "Within 200 feet of a bus stop",
        ],
        correctIndex: 0,
        explanation:
          "Never change lanes when approaching or moving through intersections and crosswalks. The manual puts it in capitals in its lane-changing list.",
        context:
          "It goes with a second instruction in the same list: always yield to vehicles already in the lane you want, and if that lane is congested, join at the end of the line rather than running up and crowding in.",
        trap: "Hawaii road-test examiners are known for calling a lane change just before a crosswalk to see whether you wait. Waiting is the right answer.",
        excerptKey: "no-lane-change-intersection",
        sourceLabel: `${MANUAL} - Chapter X, Lane Changing`,
        sourceUrl: hb(66),
        commonlyMissed: true,
      },
      {
        id: "hi_s3_35",
        topic: "licensing",
        question:
          "You have passed the online learner's permit test. What has to happen next before you may drive?",
        choices: [
          "Nothing - the certificate of completion is the permit",
          "You must book a county licensing appointment and be issued the permit in person",
          "You must wait 30 days for the permit to arrive by mail",
          "You must complete driver education first",
        ],
        correctIndex: 1,
        explanation:
          "The certificate of completion is proof you passed the test, nothing more. You still have to visit a county driver licensing center, present your documents, take an eye test, be photographed and fingerprinted and pay the permit fee.",
        context:
          "There is a clock on it. The statewide page gives you 30 days after passing to complete the requirements, and Honolulu gives 60. Choose the wrong county when you register for the test and the certificate is refused with no refund.",
        trap: "Driver education is required before the road test for anyone under 18, not before the permit. The permit is what lets you start the behind-the-wheel part.",
        excerptKey: "test-hidot-30-days",
        sourceLabel: "Hawaii Department of Transportation - Online Learner's Permit Test",
        sourceUrl: "https://hidot.hawaii.gov/online-learners-permit-test/",
      },
    ],
  },
];
