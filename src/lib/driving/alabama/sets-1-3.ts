import type { DrivingTestSet } from "../types";

// Every fact below was checked against the Alabama Driver Manual, the
// "November 2024" edition published by the Alabama Law Enforcement Agency
// (ALEA), Driver License Division, plus the sections of the Code of Alabama
// 1975, Title 32, that state a rule the manual leaves out or states loosely.
//
// ALEA's manual is unusually complete for a state handbook: it prints the
// statutory speed limits (30/35/45/55/65/70), the parking distances, the
// 100-foot signal rule, the 20-foot school bus distance and the 500-foot rule
// behind emergency vehicles. What it does NOT print is the knowledge test's
// own format. Neither the manual nor any alea.gov page states a question
// count or pass mark; the 30-question, 80% figure used on the jurisdiction
// page is the one every Alabama driving school reports, and the research note
// says so plainly.
//
// Two places where the manual and the statute part company are handled by
// building the question on ground both agree on. The manual teaches a
// two-second following distance; Section 32-5A-89 also sets a statutory
// floor of 20 feet per 10 mph, and the one question on that floor says it is
// the statute's figure. The manual's GDL summary says a restriction violation
// carries no points and no court costs; Section 32-6-7.2(h) now provides a
// fine, court costs and a two-point entry. No question is built on the
// penalty for a GDL violation, only on the restrictions themselves and the
// six-month extension both sources agree on.
//
// Questions are original. Explanations, context notes and trap notes are
// written from scratch; the deep link is there so the learner reads ALEA's
// own authoritative wording on the government's site.
const MANUAL_URL = "https://www.alea.gov/sites/default/files/ALEA%20DL%20Manual.pdf";
/** Page-anchored deep link. `p` is the PDF page index (printed page + 2). */
const hb = (p: number) => `${MANUAL_URL}#page=${p}`;
const code = (s: string) => `https://alison.legislature.state.al.us/code-of-alabama?section=${s}`;

export const alabamaSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Alabama Basics",
    difficulty: "starter",
    description:
      "The rules you meet on your first supervised drive in Alabama: what the shapes and colors mean, who goes first, and the handful of numbers ALEA's knowledge test expects you to know cold.",
    questions: [
      {
        id: "al_s1_01",
        topic: "signs",
        question:
          "You reach a stop sign at an intersection that has a painted stop line. Where does Alabama require you to stop?",
        choices: [
          "Wherever you can first see cross traffic clearly",
          "Level with the sign post itself",
          "At the marked stop line",
          "Just past the crosswalk so you have a view",
        ],
        correctIndex: 2,
        explanation:
          "The manual gives a strict order: the marked stop line first, the near-side crosswalk if there is no line, and the point nearest the crossing street where you can see if there is neither. With a line painted, the line is the answer.",
        context:
          "Alabama treats a stop sign as a complete stop, not a slow roll, and it tells you where the stop happens. It also admits that the legally correct spot may not give you a view, so it expects a second stop further forward when the first one was blind and there is conflicting traffic. Rolling through because the road looks empty is still a violation.",
        trap:
          "Stopping where you can see cross traffic is what the manual tells you to do only when there is no line and no crosswalk. With a line, stop at the line and creep forward for the view afterward.",
        excerptKey: "stop-sign-where",
        sourceLabel: "Alabama Driver Manual - Chapter 6: Stopping",
        sourceUrl: hb(62),
      },
      {
        id: "al_s1_02",
        topic: "signals",
        question:
          "You are stopped at a steady red light in Alabama, in the right-hand lane, and want to turn right. No sign says anything about turning. What may you do?",
        choices: [
          "Turn right without stopping if the road is clear",
          "Turn right after a complete stop, yielding to pedestrians and traffic",
          "Wait for the green light; turning on red is not allowed in Alabama",
          "Turn right only if a green arrow appears",
        ],
        correctIndex: 1,
        explanation:
          "Alabama allows a right turn on a steady red after you have stopped, provided you are in the proper lane for the turn and no sign prohibits it. Having stopped, you still owe the right of way to pedestrians and to traffic lawfully moving through the intersection.",
        context:
          "The manual lists the red light among the situations that require a complete stop, then carves out two turns: right on red, and left on red from a one-way street onto another one-way street. Both require a full stop first, both are cancelled by a posted NO TURN ON RED sign, and both require yielding before you go.",
        trap:
          "\"Clear enough to go\" is not the test. If you never came to a stop, the turn is unlawful even on an empty street at midnight.",
        excerptKey: "right-on-red",
        sourceLabel: "Alabama Driver Manual - Chapter 6: Stopping",
        sourceUrl: hb(62),
        commonlyMissed: true,
      },
      {
        id: "al_s1_03",
        topic: "rightOfWay",
        question:
          "Two vehicles arrive at a four-way stop at exactly the same moment, at right angles to each other. Who leaves first?",
        choices: [
          "Whichever driver signals first",
          "The driver going straight rather than turning",
          "The driver on the larger road",
          "The vehicle furthest to the right",
        ],
        correctIndex: 3,
        explanation:
          "Alabama's four-way stop rule is first to arrive at a complete stop leaves first, and when arrival is genuinely simultaneous the vehicle furthest to the right goes. The manual then adds a piece of realism: wait a few extra seconds even when it is your turn, because many drivers do not follow the rule.",
        context:
          "The manual explains the four-way stop under the regulatory signs and repeats the same right-hand tiebreaker for uncontrolled intersections in the traffic laws chapter. Order of arrival decides it; the right-hand rule only breaks a tie. It also warns that entering an uncontrolled intersection at an unlawful speed forfeits any right of way you would otherwise have had.",
        trap:
          "Going straight does not outrank turning at a four-way stop, and the wider road has no priority. Arrival order first, then the driver on the right.",
        excerptKey: "four-way-stop",
        sourceLabel: "Alabama Driver Manual - Chapter 5: Regulatory Signs",
        sourceUrl: hb(44),
        commonlyMissed: true,
      },
      {
        id: "al_s1_04",
        topic: "rules",
        question: "How far before a turn does Alabama expect you to begin signaling?",
        choices: ["At least 100 feet", "At least 50 feet", "At least 200 feet", "Three car lengths"],
        correctIndex: 0,
        explanation:
          "The manual's figure is at least 100 feet before the turn, and the statute says the same: a continuous signal for not less than the last 100 feet traveled. You keep the signal on until you are actually making the turn.",
        context:
          "Signals exist to tell pedestrians and drivers what you are about to do, so Alabama wants them early and continuous. The same chapter reminds you to get into the proper lane well ahead, to reduce speed before the turn, to keep both hands on the wheel while turning, and to make sure the signal is off once the maneuver is done.",
        trap:
          "Car lengths are not how Alabama measures it, and 50 feet is half the legal minimum. The number to remember is 100 feet.",
        excerptKey: "signal-100",
        sourceLabel: "Alabama Driver Manual - Chapter 3: Rules for Turns",
        sourceUrl: hb(23),
      },
      {
        id: "al_s1_05",
        topic: "speed",
        question:
          "You are driving through an Alabama urban district with no speed limit sign in sight. What is the statutory maximum?",
        choices: ["25 mph", "20 mph", "30 mph", "35 mph"],
        correctIndex: 2,
        explanation:
          "Alabama's statutory limit in an urban district is 30 miles per hour. It applies wherever no other limit has been posted, and the manual prints it in its list of statutory speeds.",
        context:
          "The manual gives six statutory limits: 30 in an urban district, 35 on an unpaved road, 45 on a county paved road unless posted, 55 elsewhere, 65 where posted, and 70 where posted on an interstate. Posted signs override the defaults, and the basic speed law sits over all of them: never faster than is reasonable for the conditions.",
        trap:
          "Many states use 25 mph in residential areas, so 25 is the tempting guess. Alabama's urban default is 30.",
        excerptKey: "statutory-speeds",
        sourceLabel: "Alabama Driver Manual - Chapter 6: Statutory Speed Limits",
        sourceUrl: hb(62),
      },
      {
        id: "al_s1_06",
        topic: "sharing",
        question:
          "A school bus ahead of you on a two-lane road stops with its red lights flashing and stop arm out. How close may you stop behind it?",
        choices: ["10 feet", "No closer than 20 feet", "30 feet", "50 feet"],
        correctIndex: 1,
        explanation:
          "Alabama's figure is at least 20 feet from the bus, and it applies from either direction. You then stay stopped until the stop arm is retracted and the red lights go off.",
        context:
          "The manual devotes a page to school buses. Amber lights are the pre-warning, used at least 300 feet before the stop in rural areas and 100 feet in municipalities; flashing red lights and the extended stop arm mean the bus is loading or unloading. The rule covers church buses too, and the only relief is a divided highway with the bus on the opposing roadway.",
        trap:
          "The 20 feet is a minimum. Stopping at the right distance and then creeping forward before the lights go out is still passing a stopped school bus, which costs 5 points.",
        excerptKey: "school-bus-20-feet",
        sourceLabel: "Alabama Driver Manual - Chapter 6: School Buses",
        sourceUrl: hb(64),
        commonlyMissed: true,
      },
      {
        id: "al_s1_07",
        topic: "safety",
        question: "What following-distance method does the Alabama manual teach for normal conditions?",
        choices: [
          "The two-second rule",
          "One car length for every 10 mph",
          "A four-second count",
          "Half your speed in feet",
        ],
        correctIndex: 0,
        explanation:
          "The manual retires the old car-length formula in favor of the two-second rule. Pick a fixed object, start counting when the car ahead passes it, and you should not reach it before you finish saying one thousand two.",
        context:
          "Alabama calls the space ahead of you the easiest space to control, which is why most rear-end crashes are blamed on following too closely. Two seconds is the good-weather minimum; when the road or weather is poor, or you are driving something longer than a car, the manual stretches the count to four or five seconds.",
        trap:
          "One car length per 10 mph is exactly the rule the manual says was replaced. Four seconds is the bad-weather figure, not the normal one.",
        excerptKey: "two-second-rule",
        sourceLabel: "Alabama Driver Manual - Chapter 4: How to Avoid Rear End Collisions",
        sourceUrl: hb(38),
      },
      {
        id: "al_s1_08",
        topic: "impairment",
        question:
          "At what blood alcohol concentration does Alabama law make it unlawful for an adult driver to be behind the wheel?",
        choices: [".05 percent", ".10 percent", ".04 percent", ".08 percent"],
        correctIndex: 3,
        explanation:
          "The limit for a driver aged 21 or older is .08 percent. The manual adds that impairment begins well below that for most people, and that driving while under the influence is unlawful at any number.",
        context:
          "Alabama sets four thresholds. Adults are over the limit at .08. Commercial vehicle operators are at .04. Drivers under 21, and school bus and daycare drivers, are at .02. Research the manual cites shows most people are impaired to some degree at .05, so a legal number is not the same as a safe one.",
        trap:
          ".05 is where the manual says impairment starts for most people, but the legal line for an adult driver is .08. The .04 figure belongs to commercial drivers.",
        excerptKey: "bac-08",
        sourceLabel: "Alabama Driver Manual - Chapter 4: Drinking and Driving",
        sourceUrl: hb(35),
      },
      {
        id: "al_s1_09",
        topic: "licensing",
        question: "How old must you be to get a learner license for a car in Alabama?",
        choices: ["14", "15", "16", "17"],
        correctIndex: 1,
        explanation:
          "A person who is 15 may obtain a restricted learner license after passing the knowledge test. The minimum age for a full driver license is 16, and the learner year in between is where the supervised practice happens.",
        context:
          "Alabama's graduated system starts at 15 with a Class D license carrying a Y restriction. At 15 the holder drives only with a parent, guardian, licensed driver aged 21 or older, or a driving instructor in the front seat. After the sixteenth birthday any licensed driver beside you will do, and after six months a 16-year-old may take the road test.",
        trap:
          "14 is the age for a motor-driven cycle restricted license, not a car. 16 is the minimum for a regular license, not a learner license.",
        excerptKey: "learner-15",
        sourceLabel: "Alabama Driver Manual - Chapter 1: The Learner License and Restricted License",
        sourceUrl: hb(11),
      },
      {
        id: "al_s1_10",
        topic: "parking",
        question: "How far from a fire hydrant must you park in Alabama?",
        choices: ["10 feet", "20 feet", "15 feet", "30 feet"],
        correctIndex: 2,
        explanation:
          "The manual's figure is 15 feet from a fire hydrant, and the statute matches it. It is one of a list of places where parking is never allowed.",
        context:
          "Alabama's no-parking list runs: within an intersection; on a crosswalk or sidewalk; within 20 feet of a crosswalk at an uncontrolled intersection; within 30 feet of a flashing beacon, stop sign or traffic signal; within 50 feet of the nearest rail of a railroad crossing; within 15 feet of a hydrant; in front of a driveway; on a bridge or in a tunnel; alongside a parked vehicle; and beside a yellow curb.",
        trap:
          "The numbers climb in steps of 15, 20, 30 and 50, and it is easy to swap them. The hydrant is the smallest: 15 feet.",
        excerptKey: "parking-hydrant-15",
        sourceLabel: "Alabama Driver Manual - Chapter 3: Parking",
        sourceUrl: hb(31),
      },
      {
        id: "al_s1_11",
        topic: "emergencies",
        question: "You are involved in a minor crash with no obvious injuries. What must you do first?",
        choices: [
          "Stop at once and check whether anyone needs aid",
          "Move on and report it later if the damage looks costly",
          "Leave a note if nobody is around",
          "Call your insurer before speaking to the other driver",
        ],
        correctIndex: 0,
        explanation:
          "Alabama requires you to stop at once whenever you are involved in a crash, and to aid any injured persons and call for medical help if needed. The manual repeats it in capitals: you must STOP, and that applies to any type of accident.",
        context:
          "Once stopped, the manual has you warn other traffic, avoid moving the injured unless fire or another danger forces it, and give your name, address and registration number and show your license to the others involved. Injury and fatal crashes are reported immediately to local police or the State Troopers, and a written SR-31 report follows within 30 days when damage reaches $500 and the at-fault party was uninsured.",
        trap:
          "Leaving a note is the rule only for hitting an unattended vehicle whose owner cannot be found. With another driver present, you stop and exchange information.",
        excerptKey: "crash-stop-aid",
        sourceLabel: "Alabama Driver Manual - Chapter 4: What To Do If You Have A Crash",
        sourceUrl: hb(39),
      },
      {
        id: "al_s1_12",
        topic: "signs",
        question: "A red and white downward-pointing triangle faces you at an intersection. What does it require?",
        choices: [
          "A complete stop before proceeding",
          "Nothing unless another vehicle is visible",
          "Sound your horn and continue",
          "Slow down and give way to pedestrians and to vehicles on the cross street",
        ],
        correctIndex: 3,
        explanation:
          "The YIELD sign tells you to slow so you can give the right of way to pedestrians in the roadway and to vehicles on the intersecting street. If giving way requires a stop, then you stop; if not, you may continue once it is safe.",
        context:
          "The manual lists a yield sign among the places a complete stop is required when pedestrians or vehicles are crossing. The statute goes a step further: if you drive past a yield sign without stopping and then collide with a vehicle in the intersection, the collision itself is treated as prima facie evidence that you failed to yield.",
        trap:
          "Yield is not an automatic stop, but it is also not a green light. If a gap does not exist, you must stop and wait for one.",
        excerptKey: "yield-sign",
        sourceLabel: "Alabama Driver Manual - Chapter 5: Regulatory Signs",
        sourceUrl: hb(44),
      },
      {
        id: "al_s1_13",
        topic: "signals",
        question: "The light ahead turns from green to steady yellow as you approach. What does Alabama say it means?",
        choices: [
          "Speed up to get through before red",
          "Clear the intersection; do not enter once the red appears",
          "Stop immediately wherever you are",
          "Proceed with caution; yellow is only advisory",
        ],
        correctIndex: 1,
        explanation:
          "A steady circular yellow means clear the intersection, because a red is about to follow. The manual's precise rule is that you must not enter the intersection when the red signal comes on.",
        context:
          "Alabama's three colors are simple. Red is stop and stay stopped, with right and sometimes left turns permitted after the stop. Yellow follows green and warns that the movement is ending. Green is go, yielding to vehicles and pedestrians already lawfully in the intersection, and a sign may still prohibit a turn.",
        trap:
          "Yellow is not a signal to accelerate, and it is not a command to slam on the brakes in the middle of the intersection. If you can stop safely before the line, stop; if you are already in, clear it.",
        excerptKey: "signal-yellow",
        sourceLabel: "Alabama Driver Manual - Chapter 5: Traffic Signals",
        sourceUrl: hb(56),
      },
      {
        id: "al_s1_14",
        topic: "rules",
        question: "By Alabama law, when in the evening must your headlights be switched on?",
        choices: [
          "At sunset",
          "One hour after sunset",
          "A half-hour after sunset",
          "Whenever streetlights come on",
        ],
        correctIndex: 2,
        explanation:
          "Headlights, not parking lights alone, must be on from a half-hour after sunset until a half-hour before sunrise. The manual adds two more triggers: any time you cannot see clearly for at least 500 feet, and any time your wipers are in use because of rain, sleet or snow.",
        context:
          "The manual's advice is to switch on low beams whenever you are in doubt, because lights help others see you as much as they help you see. High beams light about 350 feet ahead, and you should never drive faster than lets you stop within the distance your lights reveal.",
        trap:
          "Parking lights do not count. The law says headlights, and it says a half-hour after sunset, not sunset itself.",
        excerptKey: "headlights-when",
        sourceLabel: "Alabama Driver Manual - Chapter 7: Night Driving",
        sourceUrl: hb(71),
      },
      {
        id: "al_s1_15",
        topic: "safety",
        question: "Who has to be buckled up in a passenger car under Alabama's safety belt law?",
        choices: [
          "Every occupant, regardless of age",
          "The driver and front-seat passengers only",
          "Everyone under 18",
          "The driver only",
        ],
        correctIndex: 0,
        explanation:
          "Alabama's safety belt law requires that each occupant, regardless of age, be restrained. Children through age 15 are covered separately by the child restraint law, which tells you what kind of seat each age needs.",
        context:
          "The manual pairs the belt law with the child restraint law: rear-facing until at least 1 year or 20 pounds, forward-facing until at least 5 years or 40 pounds, a booster until 6, and a seat belt until 15. The law covers front and back seats in cars, pickups, vans seating 10 or fewer, minivans and SUVs, and a violation adds points as well as a fine.",
        trap:
          "Front seat only is the rule in some states. Alabama's law reaches every seat, though the statute makes an unbelted rear passenger a secondary offense.",
        excerptKey: "seat-belt-all",
        sourceLabel: "Alabama Driver Manual - Chapter 3: Alabama's Safety Belt and Child Restraint Laws",
        sourceUrl: hb(32),
      },
      {
        id: "al_s1_16",
        topic: "sharing",
        question: "How much room must you leave when passing a person on a bicycle in Alabama?",
        choices: ["One foot", "Two feet", "A full lane", "Not less than three feet"],
        correctIndex: 3,
        explanation:
          "Alabama law requires not less than three feet between your vehicle and a person on a bicycle when you pass. The manual adds that high-speed wind blast can batter a rider, so more room is better.",
        context:
          "The manual gives bicycles the same rights and responsibilities as motor vehicles. Riders keep right except when passing, turning left or avoiding hazards, may ride two abreast, must use a bike lane where one exists, may not ride on the sidewalk, and must wear a helmet under age 16. Drivers may not use a bike lane except to park, enter or leave the road, or prepare a turn.",
        trap:
          "A full lane change is good practice but not what the law states. The number ALEA tests is three feet.",
        excerptKey: "bicycle-3-feet",
        sourceLabel: "Alabama Driver Manual - Chapter 3: Sharing the Road with Bicycles",
        sourceUrl: hb(26),
      },
      {
        id: "al_s1_17",
        topic: "signs",
        question: "In Alabama, what color combination marks a warning sign in a road construction area?",
        choices: ["Black on yellow", "Black on orange", "White on red", "White on green"],
        correctIndex: 1,
        explanation:
          "Warning signs are black and yellow, except those in construction areas, which are black and orange. Fluorescent yellow-green marks pedestrian crossings and school zones.",
        context:
          "The manual sorts signs by function and asks you to know them by shape and color. Regulatory signs are black and white unless shown in actual color, warning signs are usually yellow diamonds, and guide signs are green for directions, blue for services and brown for recreation. Orange means work zone every time.",
        trap:
          "Yellow is the general warning color. Orange is reserved for construction and maintenance areas, where fines and points for ignoring the markers are higher.",
        excerptKey: "warning-colors",
        sourceLabel: "Alabama Driver Manual - Chapter 5: Warning Signs",
        sourceUrl: hb(46),
      },
      {
        id: "al_s1_18",
        topic: "rightOfWay",
        question:
          "An ambulance with lights flashing and siren sounding is coming up behind you on a two-lane road. What does Alabama require?",
        choices: [
          "Speed up so it can follow you through traffic",
          "Slow down but keep moving in your lane",
          "Pull over to the curb or side of the road and come to a complete stop",
          "Stop where you are, even in the middle of the lane",
        ],
        correctIndex: 2,
        explanation:
          "Whether the emergency vehicle is behind you or coming toward you, the rule is to pull to the curb or side of the road and stop completely, then stay put until it has passed. The manual lists this among the situations that require a full stop.",
        context:
          "Alabama gives emergency vehicles the right of way when they show flashing red or blue lights and sound a siren or bell. If you are inside an intersection when one approaches, clear the intersection before you stop. Once it has passed, you may not tag along: only vehicles on official business may follow within 500 feet of an emergency vehicle on a run.",
        trap:
          "Slowing down is not enough. The manual says stop, and it says at the side of the road, not in the traffic lane.",
        excerptKey: "emergency-vehicle-stop",
        sourceLabel: "Alabama Driver Manual - Chapter 6: Stopping",
        sourceUrl: hb(63),
      },
      {
        id: "al_s1_19",
        topic: "speed",
        question: "What is the highest speed limit that can be posted on an Alabama interstate highway?",
        choices: ["70 mph", "65 mph", "75 mph", "80 mph"],
        correctIndex: 0,
        explanation:
          "Alabama's statutory ceiling on an interstate is 70 miles per hour where posted. Other highways with four or more lanes top out at 65 where posted, and everything else at 55.",
        context:
          "The manual lists the 70 mph interstate figure alongside the 65 mph posted maximum for other multi-lane highways. Minimum speeds may also be posted on those roads, and driving below a posted minimum in normal conditions is unlawful. The basic speed law still applies, so 70 on ice is not a defense.",
        trap:
          "Neighboring states post 75 and some western states post 80. Alabama stops at 70.",
        excerptKey: "statutory-speeds",
        sourceLabel: "Alabama Driver Manual - Chapter 6: Statutory Speed Limits",
        sourceUrl: hb(62),
      },
      {
        id: "al_s1_20",
        topic: "licensing",
        question:
          "A 15-year-old holds an Alabama learner license. Who must be in the front passenger seat when they drive?",
        choices: [
          "Any licensed driver",
          "A licensed driver aged 18 or older",
          "Nobody, as long as it is daylight",
          "A parent, guardian, licensed driver aged 21 or older, or a licensed driving instructor",
        ],
        correctIndex: 3,
        explanation:
          "The Y restriction on a 15-year-old's license means driving only while a person aged 21 or older who is licensed in Alabama, or a licensed or certified driving instructor, occupies the seat beside them. The GDL summary names the parent or legal guardian explicitly.",
        context:
          "The supervision rule relaxes on the holder's sixteenth birthday, when any licensed driver in the front seat is enough. The learner license is valid for four years and can be renewed once, and it can be suspended or revoked like any other license, including for breaking the conditions it was issued on.",
        trap:
          "\"Any licensed driver\" is the rule after the sixteenth birthday, not at 15. An 18-year-old friend does not qualify for a 15-year-old learner.",
        excerptKey: "learner-y-restriction",
        sourceLabel: "Alabama Driver Manual - Chapter 1: Learner License - Fifteen years old",
        sourceUrl: hb(11),
      },
      {
        id: "al_s1_21",
        topic: "rules",
        question: "Which hand-and-arm signal tells other drivers you are about to turn left?",
        choices: [
          "Hand and arm extended upward",
          "Hand and arm extended straight out",
          "Hand and arm extended downward",
          "Hand waved in a circle",
        ],
        correctIndex: 1,
        explanation:
          "Left turn is the arm straight out. Upward means right turn, and downward means stop or slow down.",
        context:
          "The manual allows hand signals in daytime in addition to signal lights, noting that bright sunlight can wash out a flashing lamp. Cyclists are required to use the same signals for turns, lane changes and stops, so knowing them helps you read a rider ahead of you as well.",
        trap:
          "Up is right, out is left. Learners swap them because the upward signal looks like it points toward the passenger side.",
        excerptKey: "hand-signals",
        sourceLabel: "Alabama Driver Manual - Chapter 6: Changing Lanes",
        sourceUrl: hb(68),
      },
      {
        id: "al_s1_22",
        topic: "impairment",
        question: "What blood alcohol level puts a driver under 21 over Alabama's limit?",
        choices: [".08 percent", ".05 percent", ".02 percent", "Any amount above zero"],
        correctIndex: 2,
        explanation:
          "For a driver under 21 the limit is .02 percent, which is effectively one drink. The same .02 figure applies to school bus and daycare drivers on duty.",
        context:
          "The statute adds what the manual does not: a first under-21 violation between .02 and .08 brings a 30-day license suspension and a required substance abuse program, with the record kept confidential beyond courts, police and the employer. Above .08 the young driver faces the full adult DUI penalties.",
        trap:
          "Alabama is not a zero-tolerance state in the literal sense. The under-21 line is .02, not .00, and it is nowhere near the adult .08.",
        excerptKey: "bac-under-21",
        sourceLabel: "Alabama Driver Manual - Chapter 4: Driving While Under the Influence",
        sourceUrl: hb(35),
      },
      {
        id: "al_s1_23",
        topic: "parking",
        question: "You park facing downhill on a street with a curb. Which way do you turn the front wheels?",
        choices: [
          "Toward the curb",
          "Away from the curb",
          "Straight ahead",
          "It does not matter if the parking brake is set",
        ],
        correctIndex: 0,
        explanation:
          "Facing downhill, turn the wheels toward the curb and leave the car in reverse or PARK, so a rolling car is stopped by the curb. Facing uphill with a curb, turn them away from the curb.",
        context:
          "The manual's hill rule has three cases. Downhill, wheels toward the curb. Uphill with a curb, wheels away from the curb so the back of the front tire catches it. No curb at all, wheels toward the edge of the road whichever way you face. In every case set the hand brake first and shift to PARK, or reverse or low gear in a manual.",
        trap:
          "The parking brake is required as well, not instead. The wheels are the backup for the day the brake does not hold.",
        excerptKey: "parking-hill",
        sourceLabel: "Alabama Driver Manual - Chapter 3: Parking on a Hill",
        sourceUrl: hb(30),
      },
      {
        id: "al_s1_24",
        topic: "emergencies",
        question:
          "The gates at a railroad crossing are down and the lights are flashing, but you cannot see a train. What may you do?",
        choices: [
          "Drive around the gate if the track looks clear",
          "Drive under the gate slowly after looking both ways",
          "Proceed once the lights have flashed for more than a minute",
          "Stay stopped until the gates rise and the lights stop flashing",
        ],
        correctIndex: 3,
        explanation:
          "Lowered gates mean stop and stay stopped until they are raised and the lights are no longer flashing. The manual states outright that going around gates is against the law.",
        context:
          "Alabama ranks high for crossing fatalities and the manual spends two pages on it. Stop within 15 to 50 feet of the nearest rail when a train is near, expect a train on any track at any time, watch for a second train after the first passes, and never shift gears on the tracks. A freight train at 55 mph needs a mile or more to stop.",
        trap:
          "Not seeing a train proves nothing. Nearly half of vehicle-train crashes happen at crossings with active warning devices, which is why the law treats the lowered gate as absolute.",
        excerptKey: "rr-around-gates",
        sourceLabel: "Alabama Driver Manual - Chapter 4: Safety Tips for Motorists",
        sourceUrl: hb(42),
      },
      {
        id: "al_s1_25",
        topic: "signs",
        question: "Unless shown in another color, what colors does Alabama use for regulatory signs?",
        choices: ["Black on yellow", "Black and white", "White on blue", "White on brown"],
        correctIndex: 1,
        explanation:
          "Regulatory signs are black and white, with the exceptions the manual shows in their actual color, such as the red STOP, YIELD and DO NOT ENTER signs. Whatever the color, they must be obeyed.",
        context:
          "The manual builds sign reading on shape and color. Regulatory signs tell you what you must or must not do: speed limits, turn restrictions, one-way, no parking. Warning signs are yellow or orange diamonds. Guide signs are green, blue or brown rectangles. Recognizing the family first lets you handle a sign you have never seen.",
        trap:
          "Black on yellow is the warning family. A black-and-white sign is a rule, not a caution.",
        excerptKey: "regulatory-colors",
        sourceLabel: "Alabama Driver Manual - Chapter 5: Regulatory Signs",
        sourceUrl: hb(44),
      },
      {
        id: "al_s1_26",
        topic: "safety",
        question:
          "It is raining hard at noon and your windshield wipers are running continuously. What does Alabama law require?",
        choices: [
          "Nothing extra; lights are only required after dark",
          "Hazard flashers",
          "Headlights on",
          "Parking lights on",
        ],
        correctIndex: 2,
        explanation:
          "Alabama law requires headlights on whenever the wipers are in use because of rain, sleet or snow. The manual notes one exception: intermittent wiper use in light mist does not trigger the rule.",
        context:
          "This is one of three headlight triggers in Alabama. The others are the half-hour-after-sunset to half-hour-before-sunrise window and any time you cannot see clearly for 500 feet. The point is being seen: a gray car in gray rain disappears without lights.",
        trap:
          "Parking lights are not headlights, and hazard flashers are for a stopped or disabled vehicle, not for driving in rain.",
        excerptKey: "wipers-headlights",
        sourceLabel: "Alabama Driver Manual - Chapter 7: Windshield Wipers/Headlights",
        sourceUrl: hb(73),
        commonlyMissed: true,
      },
      {
        id: "al_s1_27",
        topic: "sharing",
        question:
          "A motorcycle ahead is riding at the far left of a wide lane. May you move up alongside it in the same lane?",
        choices: [
          "No. A motorcycle is entitled to the full lane and sharing it is illegal",
          "Yes, if you stay at least three feet away",
          "Yes, because the rider has left room",
          "Only when passing on the right",
        ],
        correctIndex: 0,
        explanation:
          "Motorcycles get the same full lane width as any other vehicle. The manual says moving into the same lane alongside a motorcycle is illegal and extremely hazardous, even when the lane is wide and the rider is far to one side.",
        context:
          "Skilled riders constantly shift position within the lane to be seen and to avoid road debris, so the empty half of the lane is not spare space. The manual asks for the same two-second following distance behind a motorcycle as behind a car, more in rain or darkness, and warns that a left turn in front of an oncoming motorcycle is the classic car-versus-bike crash.",
        trap:
          "The three-foot rule is for passing a bicycle. For a motorcycle the answer is a full lane change, never a shared lane.",
        excerptKey: "motorcycle-share-lane",
        sourceLabel: "Alabama Driver Manual - Chapter 3: Sharing the Road with Motorcycles",
        sourceUrl: hb(28),
      },
      {
        id: "al_s1_28",
        topic: "signals",
        question: "A steady green left-turn arrow is showing. What does it tell you?",
        choices: [
          "You may turn left but must yield to oncoming traffic",
          "Turn left only after stopping",
          "Only through traffic may proceed",
          "You may turn left in the direction of the arrow while opposing traffic is stopped",
        ],
        correctIndex: 3,
        explanation:
          "A green arrow is a protected movement: you may go in the direction of the arrow while opposing traffic faces a red. You still yield to pedestrians and to any vehicle already lawfully in the intersection.",
        context:
          "Alabama's arrow signals mirror the circular ones. A green arrow protects the turn, a yellow arrow warns that the protection is ending, and a yellow arrow shown with a circular red clears the previous protected movement; you may not enter after the yellow arrow goes out. Green arrows do not cancel the general duty to yield to whoever is already lawfully using the intersection.",
        trap:
          "A green arrow means oncoming traffic is held, so \"yield to oncoming traffic\" describes a circular green, not an arrow. The yielding that remains is to pedestrians and vehicles already inside.",
        excerptKey: "green-arrow",
        sourceLabel: "Alabama Driver Manual - Chapter 5: Vehicle Turns",
        sourceUrl: hb(57),
      },
      {
        id: "al_s1_29",
        topic: "rules",
        question:
          "On a two-lane road the center line is a broken yellow line with a solid yellow line on your side. May you cross to pass?",
        choices: [
          "Yes, if the road ahead is clear",
          "No. A solid yellow line on your side means no passing",
          "Yes, but only in daylight",
          "Only if the vehicle ahead is below the speed limit",
        ],
        correctIndex: 1,
        explanation:
          "A solid yellow line on your side of the center line means you may not pass. Traffic on the other side, which sees the broken line, may.",
        context:
          "Yellow center lines separate opposing traffic on two-lane roads. Broken means passing is allowed when safe, a solid line beside the broken one restricts the side it is on, and two solid yellow lines restrict both directions. Even with a broken line you may not cross to pass on a curve or hill without 500 feet of clear view, at an intersection, or when meeting oncoming traffic.",
        trap:
          "The broken line belongs to the other direction. Read the line nearest your lane, not the one furthest from it.",
        excerptKey: "solid-yellow",
        sourceLabel: "Alabama Driver Manual - Chapter 5: Pavement Markings",
        sourceUrl: hb(54),
      },
      {
        id: "al_s1_30",
        topic: "licensing",
        question: "When driving in Alabama, what must you have with you regarding your license?",
        choices: [
          "Nothing, as long as your record is on file",
          "A photocopy is sufficient",
          "The license or learner permit itself, ready to show an officer on request",
          "Your license number written down",
        ],
        correctIndex: 2,
        explanation:
          "A driver must have the appropriate license or learner permit in his or her possession while driving and be prepared to present it to any law enforcement officer who asks. At a traffic stop the officer will also expect proof of insurance and the vehicle registration.",
        context:
          "The manual's traffic-stop guidance is to signal and pull over promptly, switch off the engine and radio, keep both hands on the wheel, stay in the vehicle, mention any weapons at first contact, and not reach for documents until asked. Signing a citation is not an admission of guilt, but refusing to sign can lead to arrest.",
        trap:
          "Being licensed and carrying the license are two different requirements. Alabama tests the second.",
        excerptKey: "present-license",
        sourceLabel: "Alabama Driver Manual - Chapter 1: Present Your License",
        sourceUrl: hb(18),
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Core Rules of the Road",
    difficulty: "easy",
    description:
      "Right of way, passing, lights and the graduated license, at the level of detail the real test uses. Most learners get these right; the traps are in the wording.",
    questions: [
      {
        id: "al_s2_01",
        topic: "rightOfWay",
        question:
          "Two cars reach an intersection with no signs or signals at about the same time, from different roads. Who yields?",
        choices: [
          "The driver on the right yields to the driver on the left",
          "The driver on the left yields to the driver on the right",
          "The driver on the narrower road yields",
          "Whoever is turning yields",
        ],
        correctIndex: 1,
        explanation:
          "At an uncontrolled intersection the driver on the left yields to the driver on the right. The statute states it in one sentence, and the manual repeats it as the first of its right-of-way rules.",
        context:
          "The manual attaches a condition many learners miss: a driver who enters an uncontrolled intersection at an unlawful speed loses any right of way they would otherwise have had. Failure to yield is a 5-point offense in Alabama, one of the highest on the point schedule.",
        trap:
          "Road width is not part of the rule. Left yields to right, provided the driver on the right is obeying the speed limit.",
        excerptKey: "st-row-right",
        sourceLabel: "Code of Alabama - Section 32-5A-110 Vehicle approaching or entering intersection",
        sourceUrl: code("32-5A-110"),
      },
      {
        id: "al_s2_02",
        topic: "rules",
        question:
          "You are waiting to turn left at an intersection on a green light. An oncoming car is close enough to be a hazard. What must you do?",
        choices: [
          "Turn quickly, since you have the green",
          "Flash your lights so the other driver slows",
          "Turn if the oncoming driver is signaling a turn",
          "Yield to the oncoming vehicle and turn only when it is safe",
        ],
        correctIndex: 3,
        explanation:
          "A driver turning left within an intersection, or into an alley, driveway or private road, must yield to any vehicle approaching from the opposite direction that is within the intersection or close enough to be an immediate hazard. A green light does not change that.",
        context:
          "The manual pairs this with its motorcycle warning: left turns in front of oncoming motorcycles cause a large share of injury crashes, partly because drivers misjudge a motorcycle's speed. It also warns that a blinking turn signal on a motorcycle may have been left on by mistake, so be sure the vehicle is turning before you go.",
        trap:
          "A green light gives you permission to enter, not priority over oncoming traffic. Only a green arrow does that.",
        excerptKey: "left-turn-yield",
        sourceLabel: "Alabama Driver Manual - Chapter 6: Right of Way and Yielding",
        sourceUrl: hb(65),
      },
      {
        id: "al_s2_03",
        topic: "signs",
        question: "A DO NOT ENTER sign faces you at the mouth of a road. What is it telling you?",
        choices: [
          "The road is one-way with traffic coming toward you; you must not enter here",
          "The road is closed for construction",
          "Enter only with a permit",
          "The road is for trucks only",
        ],
        correctIndex: 0,
        explanation:
          "DO NOT ENTER marks a one-way roadway with traffic coming against you. You must not enter at that point, and it is often paired with WRONG WAY a little further in for a driver who missed it.",
        context:
          "The manual describes WRONG WAY as white on red, meaning a motorist is approaching a one-way highway or ramp from the wrong direction. If you ever see either sign facing you on a freeway ramp, you are about to drive against traffic, and the correct response is to stop and turn around, not to hope the ramp is empty.",
        trap:
          "Road closures use orange construction signs or barricades. A red-and-white DO NOT ENTER is about direction of travel, not roadworks.",
        excerptKey: "do-not-enter",
        sourceLabel: "Alabama Driver Manual - Chapter 5: Regulatory Signs",
        sourceUrl: hb(44),
      },
      {
        id: "al_s2_04",
        topic: "speed",
        question: "What does Alabama's basic speed law require of every driver?",
        choices: [
          "Never exceed 55 mph unless a sign allows it",
          "Keep pace with surrounding traffic",
          "Never drive faster than is reasonable under existing conditions",
          "Drive at least 10 mph under the posted limit in rain",
        ],
        correctIndex: 2,
        explanation:
          "The basic speed law says you must never drive faster than is reasonable for the conditions, regardless of the posted limit. Road, weather, vehicle condition and your own condition all count.",
        context:
          "Statutory and posted limits set a ceiling for normal conditions; the basic law sets a lower ceiling whenever conditions are worse. The manual calls for slower speeds approaching intersections, railroad crossings, flags and flares, hill crests and curves. Exceeding a posted limit is prima facie evidence of unlawful speed, and driving so slowly that you block traffic is unlawful too.",
        trap:
          "There is no fixed number in the basic speed law. Any answer with a specific speed is describing a statutory limit, not the basic rule.",
        excerptKey: "basic-speed-law",
        sourceLabel: "Alabama Driver Manual - Chapter 6: Speed Regulations",
        sourceUrl: hb(61),
      },
      {
        id: "al_s2_05",
        topic: "signals",
        question: "You approach an intersection where the signal is flashing red toward you. What must you do?",
        choices: [
          "Slow down and proceed with caution",
          "Treat it exactly like a stop sign",
          "Stop only if cross traffic is present",
          "Wait for it to change to green",
        ],
        correctIndex: 1,
        explanation:
          "A flashing red signal means the same as a STOP sign: come to a complete stop, yield, then proceed when safe. It will not change to green, so waiting is pointless.",
        context:
          "Alabama's list of required stops includes the flashing red signal, a stop sign, a red light, a school patrol flag, railroad crossings with stop signs or active devices, a drawbridge opening, a flagman or police officer, a stopped school bus and any emergency vehicle with lights and siren. When a signal is completely dark, the manual says to treat the intersection as a four-way stop.",
        trap:
          "Slow-and-go is the rule for a flashing yellow, not a flashing red. Red always means stop.",
        excerptKey: "flashing-red",
        sourceLabel: "Alabama Driver Manual - Chapter 6: Stopping",
        sourceUrl: hb(63),
      },
      {
        id: "al_s2_06",
        topic: "rules",
        question: "At night you must dim your high beams when you are within what distance of an oncoming vehicle?",
        choices: ["200 feet", "300 feet", "1,000 feet", "500 feet"],
        correctIndex: 3,
        explanation:
          "Dim within 500 feet of an oncoming vehicle, and within 200 feet when following another vehicle. The manual says dimming is required by law, not just courtesy.",
        context:
          "The two numbers are easy to confuse because both appear in the same sentence. Oncoming is the larger distance, 500 feet, because two sets of headlights meeting closes the gap fast. Following is 200 feet, because your beams reflect off the mirrors of the car ahead. If the other driver refuses to dim, keep yours dimmed anyway; blinding them endangers you.",
        trap:
          "200 feet is the following distance, not the oncoming one. Swapping the two is the most common way to miss this question.",
        excerptKey: "dim-500-200",
        sourceLabel: "Alabama Driver Manual - Chapter 7: Night Driving",
        sourceUrl: hb(71),
        commonlyMissed: true,
      },
      {
        id: "al_s2_07",
        topic: "sharing",
        question:
          "You are on a four-lane highway divided by a grass median. A school bus on the opposite side stops with its red lights flashing. What must you do?",
        choices: [
          "You need not stop, because the bus is on the opposing roadway of a divided highway",
          "Stop, as you would on any road",
          "Slow to 20 mph until you are past the bus",
          "Stop only if children are visible",
        ],
        correctIndex: 0,
        explanation:
          "On a divided highway with four or more lanes that permits at least two lanes of travel in each direction, a driver meeting a school or church bus stopped on the opposing roadway does not have to stop. The division is what matters; on an undivided four-to-six lane road everyone stops.",
        context:
          "The manual and the statute state the exception in the same words. What counts as divided is the trap: school districts and ALEA both warn that a center turn lane does not divide a road, so on a five-lane road with a turn lane in the middle, traffic in both directions still stops. Following the bus, you always stop, divided or not.",
        trap:
          "The exception is for the opposing roadway of a divided highway only. Lane count alone never releases you, and a painted turn lane is not a divider.",
        excerptKey: "school-bus-divided",
        sourceLabel: "Alabama Driver Manual - Chapter 6: Stopping",
        sourceUrl: hb(63),
        commonlyMissed: true,
      },
      {
        id: "al_s2_08",
        topic: "parking",
        question: "You park facing uphill next to a curb. Which way should the front wheels point?",
        choices: [
          "Toward the curb",
          "Straight ahead",
          "Away from the curb",
          "Either way, as long as you are in gear",
        ],
        correctIndex: 2,
        explanation:
          "Facing uphill with a curb, turn the wheels away from the curb and shift into low gear or PARK. If the car rolls back, the front tire swings into the curb and stops it.",
        context:
          "The manual gives three hill cases: downhill, wheels toward the curb; uphill with a curb, wheels away; no curb at all, wheels toward the road edge in either direction. Set the hand brake every time. The picture in the manual labels them A, B and C, and the test may describe the picture rather than show it.",
        trap:
          "Toward the curb is right for downhill. Uphill with a curb is the one case where the wheels point away.",
        excerptKey: "parking-hill",
        sourceLabel: "Alabama Driver Manual - Chapter 3: Parking on a Hill",
        sourceUrl: hb(30),
      },
      {
        id: "al_s2_09",
        topic: "safety",
        question: "The road is wet and visibility is poor. How long a following gap does the Alabama manual recommend?",
        choices: ["Two seconds", "Four or five seconds", "Three seconds", "Ten seconds"],
        correctIndex: 1,
        explanation:
          "When road or weather conditions are not good, the manual says to increase the two-second count to four or five seconds. The same longer count applies when you are driving a vehicle longer than a car.",
        context:
          "On snow or ice the manual says stopping can take three to twelve times the dry-pavement distance, which is why the gap grows so much. Watch the brake lights ahead and cover the brake as soon as the gap starts to close. Following too closely costs 3 points in Alabama, and the statute sets a floor of 20 feet per 10 mph.",
        trap:
          "Three seconds is what several other states teach for normal conditions. Alabama's bad-weather figure is a range: four or five.",
        excerptKey: "four-five-seconds",
        sourceLabel: "Alabama Driver Manual - Chapter 4: How to Avoid Rear End Collisions",
        sourceUrl: hb(38),
      },
      {
        id: "al_s2_10",
        topic: "impairment",
        question:
          "You are arrested for DUI in Alabama and refuse the breath test the officer directs you to take. What happens to your license?",
        choices: [
          "It is suspended",
          "Nothing, because refusing is your right",
          "Nothing unless you are later convicted",
          "It is revoked for five years",
        ],
        correctIndex: 0,
        explanation:
          "Under implied consent, anyone driving on Alabama's public highways has agreed to a chemical test of blood, breath or urine. A driver under arrest who refuses the test when an officer directs it has his or her license suspended, separately from the DUI charge.",
        context:
          "The manual frames implied consent as a condition of using the road. Refusal does not make the DUI go away, because an officer can still charge it, and the statute imposes ignition-interlock consequences on drivers who refuse. The test is about the license; the court case is separate.",
        trap:
          "Refusal is not a loophole. The suspension follows from the refusal itself, whether or not a conviction ever follows.",
        excerptKey: "refusal",
        sourceLabel: "Alabama Driver Manual - Chapter 4: Implied Consent Law",
        sourceUrl: hb(36),
      },
      {
        id: "al_s2_11",
        topic: "emergencies",
        question: "A front tire blows out at highway speed. What does the manual tell you to do first?",
        choices: [
          "Brake hard to get the speed down",
          "Steer toward the shoulder immediately",
          "Shift into neutral",
          "Grip the wheel firmly, steer straight and ease off the accelerator",
        ],
        correctIndex: 3,
        explanation:
          "Hold the wheel tightly, steer straight and ease up on the gas. Do not brake until the vehicle is back under control, because braking on a collapsed tire pulls the car sideways.",
        context:
          "The manual's emergency chapter has one theme: think before you act, because the instinctive reaction is often the wrong one. Blowouts, a lost wheel and steering failure all get the same first response, ease off and do not brake. A thumping sound or a pull to one side is the warning, and under-inflation is the usual cause.",
        trap:
          "Braking is the instinct and the mistake. Speed comes off by lifting the throttle; the brakes come later, gently.",
        excerptKey: "blowout",
        sourceLabel: "Alabama Driver Manual - Chapter 7: Driving Emergencies",
        sourceUrl: hb(75),
      },
      {
        id: "al_s2_12",
        topic: "licensing",
        question:
          "A 16-year-old wants to take the Alabama road test. How long must they have held a learner license first?",
        choices: ["Three months", "One year", "Six months", "There is no minimum"],
        correctIndex: 2,
        explanation:
          "A person aged 16 but under 18 must have held a learner license, or a comparable one from another state, for six months before presenting for the road test. The GDL summary adds that the six months must be free of restriction violations.",
        context:
          "The statute also requires a 16-year-old to bring a parent's consent form and a certificate of 50 hours of behind-the-wheel practice, or proof of an approved driver education course. Passing the road test replaces the Y restriction with a regular license for the rest of the four-year term at no extra cost. At 18 the holding period no longer applies.",
        trap:
          "The six months resets if a restriction violation extends the graduated period. Holding the license is not the same as holding it cleanly.",
        excerptKey: "learner-6-months",
        sourceLabel: "Alabama Driver Manual - Chapter 1: Driver License",
        sourceUrl: hb(12),
      },
      {
        id: "al_s2_13",
        topic: "signs",
        question:
          "A school zone speed sign is lit and its amber lights are flashing. What does that tell you?",
        choices: [
          "The school is closed and the normal limit applies",
          "The school zone limit is in effect right now",
          "Children are in the roadway ahead",
          "You may pass slower vehicles in the zone",
        ],
        correctIndex: 1,
        explanation:
          "The school zone limit applies during the hours shown on the sign, and where the sign is a lighted one, flashing amber lights mean the reduced limit is in force at that moment. When the lights are dark the posted normal limit applies.",
        context:
          "Alabama uses fluorescent yellow-green for school and pedestrian crossing signs, and the manual notes that you may still see the older plain yellow versions on some roads. School crossing signs mean slow down and watch for children; a school bus stop ahead sign warns that a bus will be loading on the road.",
        trap:
          "Flashing amber on a school sign is the opposite of \"school closed\". It is the switch that turns the lower limit on.",
        excerptKey: "school-zone-sign",
        sourceLabel: "Alabama Driver Manual - Chapter 5: Regulatory Signs",
        sourceUrl: hb(46),
      },
      {
        id: "al_s2_14",
        topic: "rules",
        question: "You are leaving a parking lot onto a public street. Who has the right of way?",
        choices: [
          "Traffic on the public street; you must stop and yield",
          "You do, because you are entering from the right",
          "Whoever arrives first",
          "Traffic on the street, but you need not stop if it is clear",
        ],
        correctIndex: 0,
        explanation:
          "A vehicle entering from a private road or driveway must stop and yield to vehicles on the public street or highway. The right-hand rule never applies against traffic already on the through road.",
        context:
          "The manual lists this among its right-of-way rules and repeats it in the stopping rules: coming out of an alley, driveway or building in a business or residence district, you stop before crossing the sidewalk or crosswalk area. Pedestrians on the sidewalk have priority before you even reach the roadway.",
        trap:
          "\"Entering from the right\" is the uncontrolled intersection rule. A driveway is not a road, so the person on the street always wins.",
        excerptKey: "private-road-yield",
        sourceLabel: "Alabama Driver Manual - Chapter 6: Right of Way and Yielding",
        sourceUrl: hb(65),
      },
      {
        id: "al_s2_15",
        topic: "signals",
        question: "A traffic light at a busy intersection is completely dark after a storm. How should you treat it?",
        choices: [
          "As a green light, since no signal is showing",
          "As a yield sign for everyone",
          "As if the main road has priority",
          "As a four-way stop",
        ],
        correctIndex: 3,
        explanation:
          "The manual's rule for an inoperative traffic light is to treat the intersection as a four-way stop. Everyone stops, first to arrive goes first, and the driver on the right breaks a tie.",
        context:
          "The four-way stop rules then apply in full, including the manual's advice to allow a few extra seconds before moving even when it is your turn, because many drivers do not know or follow the rule. A police officer directing traffic overrides the signal and the default.",
        trap:
          "A dark signal is not a green one. Assuming the bigger road has priority is how two drivers each decide it is their turn.",
        excerptKey: "inoperative-signal",
        sourceLabel: "Alabama Driver Manual - Chapter 6: Stopping",
        sourceUrl: hb(63),
      },
      {
        id: "al_s2_16",
        topic: "rightOfWay",
        question:
          "A pedestrian carrying a white cane tipped with red is about to cross at an intersection ahead of you. What does Alabama law require?",
        choices: [
          "Sound your horn to warn them",
          "Yield only if they are in a marked crosswalk",
          "Stop and give the right of way",
          "Proceed slowly around them",
        ],
        correctIndex: 2,
        explanation:
          "The law requires you to stop and give the right of way at any intersection to a blind person carrying a white cane tipped with red, holding it with arm extended, or using a guide dog. Marked crosswalk or not, you stop.",
        context:
          "The manual's pedestrian rules for drivers are short: stop for school children and safety patrols directing movement, yield to blind pedestrians with canes or guide dogs, do not block crosswalks at a stop sign or red light, and stop for a school bus with its stop arm out. Pedestrians in turn must yield to vehicles when crossing anywhere other than a crosswalk.",
        trap:
          "A horn is exactly the wrong response to a blind pedestrian, who is listening for traffic. The law says stop.",
        excerptKey: "blind-pedestrian",
        sourceLabel: "Alabama Driver Manual - Chapter 6: Right of Way and Yielding",
        sourceUrl: hb(65),
      },
      {
        id: "al_s2_17",
        topic: "speed",
        question: "What is Alabama's statutory speed limit on an unpaved road?",
        choices: ["25 mph", "35 mph", "45 mph", "30 mph"],
        correctIndex: 1,
        explanation:
          "The statutory limit on an unpaved road is 35 miles per hour. The statute defines unpaved as a county road surfaced with earth, soil, aggregate or crushed shell without asphalt or cement.",
        context:
          "The unpaved and county-paved figures are the two learners forget. Unpaved is 35; a county-maintained paved road in an unincorporated area is 45 unless posted otherwise. Urban districts are 30, everything else is 55, and posted limits of 65 and 70 apply on multi-lane highways and interstates.",
        trap:
          "45 is the county paved road figure. Gravel gets the lower number, 35.",
        excerptKey: "statutory-speeds",
        sourceLabel: "Alabama Driver Manual - Chapter 6: Statutory Speed Limits",
        sourceUrl: hb(62),
      },
      {
        id: "al_s2_18",
        topic: "sharing",
        question: "Where may a person on a bicycle legally ride in Alabama?",
        choices: [
          "On the sidewalk, if there is no bike lane",
          "On a multipurpose path only",
          "On the sidewalk when traffic is heavy",
          "On the roadway, as close to the right as practicable, and in a bike lane where one exists",
        ],
        correctIndex: 3,
        explanation:
          "Riders keep as close as practicable to the right edge of the roadway, except when passing, preparing a left turn or avoiding hazards, and must use a bicycle lane where one is provided. The manual says outright that riding on the sidewalk is illegal in Alabama.",
        context:
          "Sidewalks and multipurpose paths do not count as bicycle lanes. Drivers, for their part, may not drive in a bike lane except to park where allowed, to enter or leave the highway, or to prepare for a turn, and when turning across a bike lane they move into it first only if that does not endanger a rider already there.",
        trap:
          "Many states allow sidewalk riding outside business districts. Alabama's manual states the opposite, so any sidewalk answer is wrong here.",
        excerptKey: "bicycle-sidewalk",
        sourceLabel: "Alabama Driver Manual - Chapter 3: Sharing the Road with Bicycles",
        sourceUrl: hb(26),
      },
      {
        id: "al_s2_19",
        topic: "rules",
        question: "While backing up, where does the manual tell you to look?",
        choices: [
          "Over your right shoulder to the rear, without relying on the mirror",
          "In the rear-view mirror only",
          "Over your left shoulder",
          "At the backup camera",
        ],
        correctIndex: 0,
        explanation:
          "Look to the front, sides and rear before backing, then keep looking over your right shoulder to the rear while the car is moving. The manual says not to depend on your mirror.",
        context:
          "Backing causes many crashes among drivers of all levels, so the manual suggests walking around the car first when practical. Back slowly with minimal movement, back into the nearest lane when leaving a driveway and never across other lanes, and never back on a controlled-access highway, where backing is prohibited for everyone except emergency vehicles on duty.",
        trap:
          "Left shoulder is the lane-change check. For backing, the manual specifies the right shoulder.",
        excerptKey: "backing-look",
        sourceLabel: "Alabama Driver Manual - Chapter 6: Other Traffic Laws",
        sourceUrl: hb(68),
      },
      {
        id: "al_s2_20",
        topic: "parking",
        question: "How close to a stop sign at the side of the road may you park?",
        choices: ["15 feet", "20 feet", "No closer than 30 feet", "50 feet"],
        correctIndex: 2,
        explanation:
          "Parking is not allowed within 30 feet of any flashing beacon, stop sign or traffic control signal located at the side of a roadway. The reason is sight lines: a parked car that close hides the sign from approaching drivers.",
        context:
          "The other distances in the same list are 20 feet from a crosswalk at an uncontrolled intersection, 50 feet from the nearest rail of a railroad crossing and 15 feet from a hydrant. The statute adds two the manual omits: 20 feet from a fire station driveway and 75 feet from it on the opposite side of the street where signposted.",
        trap:
          "20 feet is the crosswalk distance. Signs and signals get the longer 30 feet.",
        excerptKey: "parking-30-signal",
        sourceLabel: "Alabama Driver Manual - Chapter 3: Parking",
        sourceUrl: hb(31),
      },
      {
        id: "al_s2_21",
        topic: "safety",
        question: "How far behind a large truck can its rear blind spot, or No-Zone, extend?",
        choices: ["50 feet", "As far as 200 feet", "100 feet", "20 feet"],
        correctIndex: 1,
        explanation:
          "The manual says the No-Zone directly behind a truck or bus can extend as far as 200 feet. In it the truck driver cannot see you, and you cannot see what is happening ahead of the truck.",
        context:
          "The four No-Zones are the sides, where you cannot see the driver's face in the mirror and the driver cannot see you; the rear, up to 200 feet; the front, where cutting in too soon is dangerous because a loaded truck needs 430 feet to stop from 55 mph against a car's 193; and the right side on a right turn, where a truck swings wide and can squeeze you.",
        trap:
          "Two hundred feet is also the distance for dimming your headlights when following. The manual links the two: dim your lights behind a large vehicle at night so they do not reflect off its mirrors.",
        excerptKey: "rear-no-zone",
        sourceLabel: "Alabama Driver Manual - Chapter 3: Sharing the Road with Large Vehicles",
        sourceUrl: hb(29),
      },
      {
        id: "al_s2_22",
        topic: "impairment",
        question: "According to the manual, what will black coffee, food or a cold shower do for someone who has been drinking?",
        choices: [
          "Lower their blood alcohol concentration",
          "Make them safe to drive within an hour",
          "Speed up the liver's work",
          "Wake them up, but not sober them",
        ],
        correctIndex: 3,
        explanation:
          "They may wake you, but they will not sober you. Alcohol leaves the body only as the liver breaks it down, and that process takes time no matter what you drink or do.",
        context:
          "The manual lists alcohol's effects: it is a depressant, not a stimulant; it slows reflexes, blurs vision and impairs judgment; and it hits harder on an empty stomach. A bottle of beer carries about the same alcohol as a shot of whiskey or a glass of wine, and mixing alcohol with drugs multiplies rather than adds the effect.",
        trap:
          "Feeling more alert is not the same as being less impaired. Coffee produces a wide-awake drunk.",
        excerptKey: "coffee-no-sober",
        sourceLabel: "Alabama Driver Manual - Chapter 4: Implied Consent Law",
        sourceUrl: hb(36),
      },
      {
        id: "al_s2_23",
        topic: "emergencies",
        question: "Your car begins to hydroplane on a wet highway. What does the manual say to do?",
        choices: [
          "Take your foot off the accelerator and let the car slow",
          "Brake firmly to regain traction",
          "Accelerate to push the tires through the water",
          "Turn the wheel sharply toward the shoulder",
        ],
        correctIndex: 0,
        explanation:
          "Ease off the accelerator and let the car slow down. If it starts to skid while only partially hydroplaning you can correct the skid; if the tires are fully on the water, all you can do is release the gas and ride it out.",
        context:
          "The manual explains that partial hydroplaning starts around 35 mph and becomes total by about 55 mph in a heavy rain, at which point there is no friction to brake, steer or accelerate. Deep tread lets water escape and delays it; once standing water is deeper than the tread, expect complete hydroplaning above 50 mph.",
        trap:
          "Braking and sudden steering both need friction the tires do not have. The only lever left is the throttle, and the direction is off.",
        excerptKey: "hydroplane-response",
        sourceLabel: "Alabama Driver Manual - Chapter 7: Hydroplaning",
        sourceUrl: hb(74),
      },
      {
        id: "al_s2_24",
        topic: "licensing",
        question:
          "A 16-year-old with a restricted Alabama license is driving home alone from a friend's house at 1 a.m. Is that allowed?",
        choices: [
          "Yes, curfews apply only to 15-year-olds",
          "Yes, if a parent gave permission by phone",
          "No. The restricted license bars driving between midnight and 6 a.m. except for listed reasons",
          "Yes, as long as there are no passengers",
        ],
        correctIndex: 2,
        explanation:
          "A driver who is 16, or 17 and licensed less than six months, may not drive between midnight and 6 a.m. unless a parent or guardian is in the car or another listed exception applies. A social visit is not one of them.",
        context:
          "The exceptions are: accompanied by a licensed driver aged 21 or older with parental consent, going to or from work, a school-sponsored event, a religious event, or a medical, fire or law enforcement emergency. The statute adds travel to or from hunting or fishing with a valid license in hand. Breaking the curfew extends the restricted period by six months or until 18.",
        trap:
          "Parental permission alone does not lift the curfew. The parent, or a licensed adult over 21 the parent approves, has to be in the car.",
        excerptKey: "gdl-curfew",
        sourceLabel: "Alabama Driver Manual - Additional Information: GDL Summary",
        sourceUrl: hb(86),
        commonlyMissed: true,
      },
      {
        id: "al_s2_25",
        topic: "signs",
        question: "A yellow MERGE sign shows two lanes joining, with a road entering from the right. Who yields?",
        choices: [
          "Traffic on the main route yields to the merging traffic",
          "Both must stop and alternate",
          "Whoever is faster goes first",
          "Drivers entering from the right yield to traffic on the main route",
        ],
        correctIndex: 3,
        explanation:
          "The manual says drivers entering from the right must yield to traffic on the main route and use the speed-change lane to merge smoothly. The through traffic keeps its right of way.",
        context:
          "On the freeway the same idea is stated from both sides: drivers already on the highway should make room for entering traffic, but the entering driver must yield if they do not. Match the through-lane speed in the acceleration lane, signal, and do not stop in the lane unless there is no other choice.",
        trap:
          "Courtesy and law are different things here. The main-route driver should let you in; the law says you yield if they do not.",
        excerptKey: "merge-sign",
        sourceLabel: "Alabama Driver Manual - Chapter 5: Warning Signs",
        sourceUrl: hb(50),
      },
      {
        id: "al_s2_26",
        topic: "signals",
        question: "A steady red X is lit above the lane you are in. What does it mean?",
        choices: [
          "Stop in that lane and wait",
          "You may not drive in that lane",
          "The lane is for left turns only",
          "Slow down; there is a hazard ahead",
        ],
        correctIndex: 1,
        explanation:
          "A steady red X over a lane means you may not drive in it. Move to a lane showing a green arrow, and keep obeying every other traffic control while you do.",
        context:
          "Lane use control signals hang over individual lanes on streets, highways and freeways. Green arrow means the lane is open, red X means closed, and a steady yellow X means you may use the lane with caution because a hazard exists. Each may also appear as a plain red, green or yellow light.",
        trap:
          "Red X is not a stop signal for the lane. It is a closure, and the correct response is to leave the lane safely, not to halt in it.",
        excerptKey: "red-x",
        sourceLabel: "Alabama Driver Manual - Chapter 5: Lane Use Control Signals",
        sourceUrl: hb(58),
      },
      {
        id: "al_s2_27",
        topic: "rules",
        question: "When is passing on the right permitted in Alabama?",
        choices: [
          "On one-way roads and on roads marked for two or more lanes in the same direction",
          "Whenever the vehicle ahead is slow",
          "Only on the shoulder when traffic is stopped",
          "Never",
        ],
        correctIndex: 0,
        explanation:
          "Passing on the right is permissible on one-way roadways and on streets and highways marked for two or more lanes moving in the same direction. The statute adds the case of a vehicle ahead that is about to turn left.",
        context:
          "Driving on the shoulder to pass is unlawful except in an emergency or when directed by traffic authorities. The manual warns that a right-side pass surprises out-of-state drivers who come from states where it is forbidden, and that a signal alone does not give you the right to pass.",
        trap:
          "The shoulder is never a passing lane. Even when traffic is stopped, a shoulder pass is illegal unless an officer directs it.",
        excerptKey: "passing-right",
        sourceLabel: "Alabama Driver Manual - Chapter 6: No Passing Zones",
        sourceUrl: hb(66),
      },
      {
        id: "al_s2_28",
        topic: "sharing",
        question:
          "According to the manual, which maneuver by a car driver causes a large share of injury crashes with motorcycles?",
        choices: [
          "Following a motorcycle too closely",
          "Passing a motorcycle on a curve",
          "Turning left in front of an oncoming motorcycle",
          "Using high beams behind a motorcycle",
        ],
        correctIndex: 2,
        explanation:
          "Left turns in front of an oncoming motorcyclist account for a large percentage of car-versus-motorcycle injury crashes. Drivers either fail to pick the motorcycle out of the traffic scene or misjudge how fast it is coming.",
        context:
          "The manual's instruction is in capitals: look and look again, and be sure you know the speed of the motorcycle before you turn. A motorcycle is only about two feet wide against a car's five or six, so distance and speed are harder to judge, and its turn signal may have been left blinking by mistake.",
        trap:
          "A motorcycle's blinking signal does not guarantee it is turning. Wait until you see the bike actually begin the turn before you go.",
        excerptKey: "motorcycle-left-turn",
        sourceLabel: "Alabama Driver Manual - Chapter 3: Sharing the Road with Motorcycles",
        sourceUrl: hb(27),
      },
      {
        id: "al_s2_29",
        topic: "rules",
        question:
          "On a four-lane highway you see a police car stopped ahead on the shoulder with its lights flashing. What does Alabama's Move-Over Law require?",
        choices: [
          "Slow to 25 mph in your lane",
          "Stop until the officer waves you on",
          "Turn on your hazard lights and continue at the limit",
          "Move out of the lane nearest the police car, or slow at least 15 mph below the limit if you cannot",
        ],
        correctIndex: 3,
        explanation:
          "On a road with four or more lanes you must vacate the lane closest to the stopped emergency vehicle or wrecker. When changing lanes is unsafe or impossible, you slow to at least 15 mph below the posted limit instead.",
        context:
          "On a two-lane road the rule is to move as far from the vehicle as you can within your lane and slow to 15 mph under the limit, or to 10 mph where the limit is 20 or less. The statute now covers utility trucks, garbage and recycling trucks and any vehicle stopped with flashing lights on official duty, and sets fines of $100, $150 and $200 for first, second and later violations.",
        trap:
          "Stopping on a highway for a stationary police car creates a new hazard. The law asks for a lane change or a slowdown, not a halt.",
        excerptKey: "move-over-4-lane",
        sourceLabel: "Alabama Driver Manual - Chapter 6: Move-Over Law",
        sourceUrl: hb(70),
      },
      {
        id: "al_s2_30",
        topic: "licensing",
        question: "What does a first conviction under Alabama's Hands-Free Law cost?",
        choices: [
          "$25 and 2 points",
          "$50 and 1 point",
          "$100 and 2 points",
          "$150 and 3 points",
        ],
        correctIndex: 1,
        explanation:
          "A first conviction is a $50 fine and 1 point. Within a 24-month period a second is $100 and 2 points and a third is $150 and 3 points.",
        context:
          "The Hands-Free Law took effect in June 2024 and bars physically holding a wireless device while driving. As the manual describes it, the violation is cited when an officer observes the driver crossing lanes without signaling, swerving or otherwise driving improperly. The older texting law, with fines of $25, $50 and $75, still appears separately in the manual, and GDL drivers face their own no-handheld rule.",
        trap:
          "$25 is the first-offense texting fine from the older law. The Hands-Free schedule starts at $50.",
        excerptKey: "hands-free-fines",
        sourceLabel: "Alabama Driver Manual - Chapter 1: Alabama's Hands-Free Law",
        sourceUrl: hb(18),
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Real Test Difficulty",
    difficulty: "medium",
    description:
      "Exam-level questions across the whole manual: the numbers, the exceptions, and the rules about penalties and points that ALEA's automated test likes to ask.",
    questions: [
      {
        id: "al_s3_01",
        topic: "rules",
        question:
          "A fire truck passes you on an emergency run. How closely may an ordinary driver follow it?",
        choices: [
          "Within 200 feet",
          "As close as traffic allows",
          "No closer than 500 feet",
          "No closer than 1,000 feet",
        ],
        correctIndex: 2,
        explanation:
          "Only vehicles on necessary official business may follow within 500 feet of an emergency vehicle on a run. The same section forbids driving over an unprotected fire hose unless a police officer or fire official authorizes it.",
        context:
          "Five hundred feet is a busy number in Alabama's manual: the following distance behind emergency vehicles, the dimming distance for oncoming traffic, the visibility that triggers headlights, the clear view needed to pass on a hill and the sightline required for a three-point turn. Following an emergency vehicle counts as an emergency vehicle violation, a 2-point offense.",
        trap:
          "Two hundred feet is the headlight-dimming distance when following. Behind an emergency vehicle the gap is 500.",
        excerptKey: "following-emergency-500",
        sourceLabel: "Alabama Driver Manual - Chapter 6: Following Emergency Vehicles",
        sourceUrl: hb(67),
        commonlyMissed: true,
      },
      {
        id: "al_s3_02",
        topic: "signs",
        question: "A black-and-white DO NOT PASS sign stands beside a two-lane road. What does it mark?",
        choices: [
          "The beginning of a no passing zone",
          "The end of a no passing zone",
          "A place where passing on the right is allowed",
          "A lane that is closing ahead",
        ],
        correctIndex: 0,
        explanation:
          "The DO NOT PASS sign marks the beginning of a no passing zone. It is a regulatory sign and it will usually be paired with a solid yellow line on your side of the center line.",
        context:
          "Alabama also uses a yellow pennant-shaped sign on the left side of two-lane roads for the same purpose, the only sign posted on the left. The manual's list of places you may never cross the center line to pass includes hills and curves without 500 feet of clear view, intersections, when meeting oncoming traffic, and wherever signs or a solid yellow line prohibit it.",
        trap:
          "The sign marks where the restriction starts, not where it ends. The end is where the solid yellow line returns to broken.",
        excerptKey: "no-passing-zone-sign",
        sourceLabel: "Alabama Driver Manual - Chapter 5: Regulatory Signs",
        sourceUrl: hb(46),
      },
      {
        id: "al_s3_03",
        topic: "speed",
        question:
          "You are on a paved county road outside any town with no speed limit sign. What is the statutory maximum?",
        choices: ["30 mph", "35 mph", "55 mph", "45 mph"],
        correctIndex: 3,
        explanation:
          "A county-maintained paved road in an unincorporated area carries a statutory limit of 45 mph unless a different limit is posted. The manual prints it as \"county paved road (unless posted)\".",
        context:
          "This is the one that trips people: 55 is the general figure for roads outside urban districts, but county paved roads are carved out at 45 and unpaved roads at 35. State highways that are not interstates and do not have four or more lanes stay at 55.",
        trap:
          "Fifty-five is the tempting answer because it is the \"other locations\" figure. A county road is specifically 45.",
        excerptKey: "statutory-speeds",
        sourceLabel: "Alabama Driver Manual - Chapter 6: Statutory Speed Limits",
        sourceUrl: hb(62),
        commonlyMissed: true,
      },
      {
        id: "al_s3_04",
        topic: "parking",
        question: "How far from the nearest rail of a railroad crossing must you park?",
        choices: ["20 feet", "50 feet", "30 feet", "100 feet"],
        correctIndex: 1,
        explanation:
          "Parking is prohibited within 50 feet of the nearest rail of a railroad crossing. It is the largest of the manual's parking distances.",
        context:
          "The distances step up with the hazard: 15 feet from a hydrant, 20 from a crosswalk at an uncontrolled intersection, 30 from a stop sign, signal or flashing beacon, and 50 from a railroad rail. The statute allows a momentary stop at the 50-foot mark only while actually loading or unloading.",
        trap:
          "The railroad stopping distance when a train approaches is 15 to 50 feet. The parking distance is the outer number only: 50.",
        excerptKey: "parking-rail-50",
        sourceLabel: "Alabama Driver Manual - Chapter 3: Parking",
        sourceUrl: hb(31),
      },
      {
        id: "al_s3_05",
        topic: "rightOfWay",
        question:
          "You enter an intersection on a green arrow and find a pedestrian still finishing the crossing in front of you. Who has the right of way?",
        choices: [
          "You do, because the arrow protects your movement",
          "You do, if you sound the horn",
          "The pedestrian; a green arrow still requires yielding to anyone lawfully in the intersection",
          "Neither; both must stop",
        ],
        correctIndex: 2,
        explanation:
          "Vehicles entering on a green arrow must yield to other traffic lawfully using the intersection, and the statute names pedestrians in an adjacent crosswalk specifically. The arrow holds back opposing vehicles; it does not clear people already crossing.",
        context:
          "Every green indication in Alabama carries the same condition: proceed, yielding to vehicles and pedestrians lawfully within the intersection when the signal changed. The arrow adds protection from oncoming traffic, nothing more. Failure to yield is a 5-point offense.",
        trap:
          "\"Protected turn\" describes the relationship with oncoming cars, not with pedestrians who started crossing on their walk signal.",
        excerptKey: "green-arrow-yield",
        sourceLabel: "Alabama Driver Manual - Chapter 6: Right of Way and Yielding",
        sourceUrl: hb(65),
      },
      {
        id: "al_s3_06",
        topic: "emergencies",
        question:
          "Your car stalls on a railroad crossing and a train is coming. You cannot move the car. Which way do you run?",
        choices: [
          "Alongside the tracks, toward the approaching train",
          "Straight away from the tracks at a right angle",
          "Alongside the tracks, away from the train",
          "Behind the car, to shield yourself",
        ],
        correctIndex: 0,
        explanation:
          "Abandon the vehicle and walk quickly alongside the tracks in the direction of the approaching train. That keeps you clear of the debris, which flies forward in the direction the train is traveling when it hits the car.",
        context:
          "Before it comes to that, the manual suggests a manual-transmission car can sometimes be moved off the track by running the starter in low or second gear, while an automatic will have to be pushed. Get everyone out immediately and call local law enforcement. A freight train at 55 mph needs a mile or more to stop, so the train will not.",
        trap:
          "Running away from the train feels natural and puts you exactly where the wreckage will land.",
        excerptKey: "stall-tracks",
        sourceLabel: "Alabama Driver Manual - Chapter 7: Driving Emergencies",
        sourceUrl: hb(77),
      },
      {
        id: "al_s3_07",
        topic: "impairment",
        question: "How long is the license suspension for a first DUI conviction in Alabama?",
        choices: ["30 days", "90 days", "Six months", "One year"],
        correctIndex: 1,
        explanation:
          "A first conviction brings a 90-day suspension, along with a fine of $600 to $2,100 and up to a year in jail. The statute lets the suspension be stayed if the driver installs an ignition interlock for 90 days.",
        context:
          "The ladder climbs fast. A second conviction within 10 years means a $1,100 to $5,100 fine, a mandatory 48 hours in jail or 20 days of community service, and a one-year revocation. A third is $2,100 to $10,100 with a three-year revocation and at least 60 days in jail. A fourth is a Class C felony with a five-year revocation.",
        trap:
          "One year is the second-offense revocation. A first offense is 90 days.",
        excerptKey: "dui-first",
        sourceLabel: "Alabama Driver Manual - Chapter 4: Driving While Under the Influence",
        sourceUrl: hb(35),
      },
      {
        id: "al_s3_08",
        topic: "signals",
        question:
          "A steady yellow arrow is displayed alongside a steady circular red. You are in the turn lane. What does it mean?",
        choices: [
          "You may turn with caution",
          "You may turn after stopping",
          "Both through and turning traffic may go",
          "The protected turn is ending; do not enter once the yellow arrow goes out",
        ],
        correctIndex: 3,
        explanation:
          "A steady yellow arrow shown alone or with a circular red clears the previous protected green-arrow movement. Once the yellow arrow goes out you may not enter the intersection.",
        context:
          "Alabama's arrows follow the same green-yellow-red logic as circular signals. A yellow arrow with a circular green means the protected turn is ending but the circular green continues, so a turn may still be made yielding to oncoming traffic. A yellow arrow with red means stop is coming for the turn lane too.",
        trap:
          "A yellow arrow is not a permissive turn signal. It is the last moment of the green arrow, and turning after it goes dark against a red is running the light.",
        excerptKey: "yellow-arrow-red",
        sourceLabel: "Alabama Driver Manual - Chapter 5: Vehicle Turns",
        sourceUrl: hb(58),
      },
      {
        id: "al_s3_09",
        topic: "licensing",
        question:
          "What is the minimum reinstatement fee after an Alabama license has been suspended or revoked?",
        choices: ["$25", "$50", "Not less than $100", "$275"],
        correctIndex: 2,
        explanation:
          "Anyone whose license has been canceled, suspended, revoked or disqualified pays a reinstatement fee of not less than $100 before being relicensed. Additional fees stack on top: $50 for failing to surrender the license, $25 for drug-related cases and $50 for child support suspensions.",
        context:
          "The manual separates cancellation, revocation and suspension. Cancellation is for a license the holder was never entitled to. Revocation follows convictions like vehicular homicide, second DUI, hit-and-run causing injury, or three reckless driving convictions in 12 months, and requires passing the complete examinations again afterward. Suspension is temporary and follows things like point accumulation or a first DUI.",
        trap:
          "$50 is the surrender penalty, an add-on. The base reinstatement fee is at least $100.",
        excerptKey: "reinstatement-fee",
        sourceLabel: "Alabama Driver Manual - Chapter 2: You May Lose Your License",
        sourceUrl: hb(19),
      },
      {
        id: "al_s3_10",
        topic: "sharing",
        question:
          "In a rural area, how far before stopping does a school bus begin flashing its amber warning lights?",
        choices: ["At least 300 feet", "At least 100 feet", "At least 500 feet", "At least 50 feet"],
        correctIndex: 0,
        explanation:
          "In rural areas the amber lights are used at least 300 feet before the stop; in municipalities at least 100 feet. Amber is the pre-warning that the bus is about to stop to load or unload.",
        context:
          "Flashing red lights and the extended stop arm mean the bus is stopped and children are moving. From either direction you stop at least 20 feet from the bus and stay stopped until the arm retracts and the reds go off. The manual calls the area around a stopped bus the Death Zone, because most children hurt in school transport are struck outside the bus by drivers who did not stop.",
        trap:
          "One hundred feet is the municipal figure. Rural roads get the longer 300 feet warning because speeds are higher.",
        excerptKey: "school-bus-amber",
        sourceLabel: "Alabama Driver Manual - Chapter 6: School Buses",
        sourceUrl: hb(64),
        commonlyMissed: true,
      },
      {
        id: "al_s3_11",
        topic: "rules",
        question: "Where does the manual say a three-point turn is NOT permitted?",
        choices: [
          "On any street with parked cars",
          "Within a business district",
          "On a road with a speed limit above 35 mph",
          "On interstate freeways, on curves, or near hilltops where you cannot be seen within 500 feet",
        ],
        correctIndex: 3,
        explanation:
          "Three-point turns are barred on interstate freeways, on curves, and near the top of hills where other drivers approaching from either direction within 500 feet cannot see you. The statute states the same 500-foot sightline for any U-turn.",
        context:
          "The manual adds that local ordinances govern these turns and there may be no sign to warn you, though prohibitory signs are usually posted at hazardous spots. The turn must be made without endangering other traffic, which in practice means a long straight stretch with light traffic.",
        trap:
          "Speed limits and parked cars are not in the rule. Visibility for 500 feet in both directions is.",
        excerptKey: "three-point-turn",
        sourceLabel: "Alabama Driver Manual - Chapter 3: Three-Point Turn",
        sourceUrl: hb(25),
      },
      {
        id: "al_s3_12",
        topic: "safety",
        question: "At roughly what speed does the manual say partial hydroplaning begins for a standard passenger car?",
        choices: ["55 mph", "35 mph", "45 mph", "25 mph"],
        correctIndex: 1,
        explanation:
          "Partial hydroplaning starts at about 35 mph and increases with speed until about 55 mph, when the tires may be riding entirely on the water. Below 35 the tires wipe the road like a windshield wiper.",
        context:
          "The manual's advice is deep tread and a light foot. Good tread channels water out from under the tire and delays complete hydroplaning at normal highway speeds; once water is deeper than the tread, expect it above 50 mph. The recovery is to lift off the accelerator, never to brake.",
        trap:
          "55 is where hydroplaning can become total, not where it begins. The onset figure is 35.",
        excerptKey: "hydroplane-35-55",
        sourceLabel: "Alabama Driver Manual - Chapter 7: Hydroplaning",
        sourceUrl: hb(74),
      },
      {
        id: "al_s3_13",
        topic: "signs",
        question: "What does a blue-and-white sign along an Alabama highway tell you about?",
        choices: [
          "Directions and distances to cities",
          "A recreational or cultural site",
          "Services such as gas, food, lodging or a hospital",
          "A regulation you must obey",
        ],
        correctIndex: 2,
        explanation:
          "Guide signs are color-coded: green and white for motorist directions, blue and white for services, and brown and white for points of recreational or cultural interest. Blue means a hospital, fuel, food or lodging is that way.",
        context:
          "Guide signs inform rather than command, which is why they are rectangles rather than the shapes reserved for stop, yield and warning. Route markers are shown in their actual colors: red-white-blue shields for interstates, black-and-white shields for US routes, and state and county markers of their own. Mileposts count up from the south and west state lines.",
        trap:
          "Brown is the color learners confuse with blue. Brown is parks and historic sites; blue is the things a traveler needs.",
        excerptKey: "guide-colors",
        sourceLabel: "Alabama Driver Manual - Chapter 5: Informational or Guide Signs",
        sourceUrl: hb(53),
      },
      {
        id: "al_s3_14",
        topic: "rules",
        question: "After passing a vehicle on a two-lane road, when does the manual say you may return to the right lane?",
        choices: [
          "When you can see the entire front of the passed vehicle in your interior rear-view mirror",
          "As soon as your rear bumper clears its front bumper",
          "When the passed driver flashes their lights",
          "After you have traveled 100 feet ahead of it",
        ],
        correctIndex: 0,
        explanation:
          "Do not return to the right lane until you can see the whole front of the vehicle you passed in your interior mirror. Signal left before the pass and right before returning.",
        context:
          "The manual's passing sequence is: check ahead for distance and behind for anyone about to pass you, signal the driver ahead with a tap of the horn or a flick of the lights at night, signal left, pass without exceeding the speed limit, signal right and return only when the whole front of the other car is in your mirror. The driver being passed must stay in lane and not speed up.",
        trap:
          "Clearing the bumper is not enough. The mirror test builds in the margin the law expects, and the statute requires returning before you are within 200 feet of any oncoming vehicle.",
        excerptKey: "passing-signals",
        sourceLabel: "Alabama Driver Manual - Chapter 6: No Passing Zones",
        sourceUrl: hb(66),
      },
      {
        id: "al_s3_15",
        topic: "parking",
        question: "How close to a crosswalk at an uncontrolled intersection may you park?",
        choices: ["15 feet", "30 feet", "10 feet", "No closer than 20 feet"],
        correctIndex: 3,
        explanation:
          "Parking is not allowed within 20 feet of a crosswalk at an uncontrolled intersection, so that drivers can see pedestrians stepping off the curb. On a crosswalk itself parking is banned outright.",
        context:
          "Alabama's no-parking list is short enough to learn whole: intersections, crosswalks and sidewalks, 20 feet from an uncontrolled crosswalk, 30 feet from a sign or signal, 50 feet from a rail, 15 feet from a hydrant, in front of a driveway, on a bridge or in a tunnel, double parked, or beside a yellow curb. The manual also tells you not to block a crosswalk while waiting at a stop sign or red light.",
        trap:
          "Fifteen is the hydrant figure. The crosswalk figure is 20.",
        excerptKey: "parking-crosswalk-20",
        sourceLabel: "Alabama Driver Manual - Chapter 3: Parking",
        sourceUrl: hb(31),
      },
      {
        id: "al_s3_16",
        topic: "rightOfWay",
        question:
          "A driver speeding well over the limit reaches an uncontrolled intersection first, from your right. According to the manual, who has the right of way?",
        choices: [
          "The speeding driver, because they arrived first and are on the right",
          "You do; a driver entering at an unlawful speed loses any right of way they would have had",
          "Whoever is on the wider road",
          "The speeding driver, because right of way is not affected by speed",
        ],
        correctIndex: 1,
        explanation:
          "The manual attaches a condition to the right-hand rule: if you enter an uncontrolled intersection at an unlawful speed, you lose any right of way you might otherwise have had. Speed forfeits the priority the position would have given.",
        context:
          "The practical lesson is the manual's repeated warning never to assume you have the right of way. Rules assign priority; they do not stop a car. If the other driver is clearly not going to yield, giving way is safer than being right.",
        trap:
          "Arriving first and being on the right would normally settle it. The unlawful speed is the fact that changes the answer.",
        excerptKey: "row-unlawful-speed",
        sourceLabel: "Alabama Driver Manual - Chapter 6: Right of Way and Yielding",
        sourceUrl: hb(65),
      },
      {
        id: "al_s3_17",
        topic: "emergencies",
        question: "Your brake pedal suddenly sinks to the floor. What is the manual's first step?",
        choices: [
          "Turn off the engine immediately",
          "Yank the parking brake hard",
          "Pump the pedal to build up pressure",
          "Shift into neutral and coast",
        ],
        correctIndex: 2,
        explanation:
          "Try pumping the pedal to build pressure. If that fails, apply the emergency or parking brake gently so the wheels do not lock, shift to a lower gear, and as a last resort switch off the engine while leaving the car in gear.",
        context:
          "The manual warns that a spongy, slowly sinking pedal is the advance sign of brake failure. It also cautions that turning off the engine kills power steering and power brakes, so the engine-off step comes last and only when you know what you are losing.",
        trap:
          "A hard yank on the parking brake locks the rear wheels and throws the car into a skid. The manual says gently.",
        excerptKey: "brake-failure",
        sourceLabel: "Alabama Driver Manual - Chapter 7: Driving Emergencies",
        sourceUrl: hb(76),
      },
      {
        id: "al_s3_18",
        topic: "signals",
        question:
          "A pedestrian is in a marked crosswalk in the middle of a block with no signal. What does Alabama require of you?",
        choices: [
          "Stop; drivers must stop at any occupied crosswalk that has no controlling signal",
          "Slow down and drive around the pedestrian",
          "Sound the horn and proceed",
          "Nothing, because mid-block crosswalks are advisory",
        ],
        correctIndex: 0,
        explanation:
          "A driver must stop at all crosswalks occupied by pedestrians when there are no controlling signals. Crosswalks can be marked between intersections as well as at them, and the rule is the same.",
        context:
          "White solid lines mark crosswalks. The pedestrian crossing warning sign tells you a crosswalk is coming and that it may not be at an intersection. Pedestrians who cross away from a crosswalk must yield to vehicles, but once someone is in a marked crosswalk the duty flips to the driver.",
        trap:
          "Driving around a pedestrian in a crosswalk is exactly what the rule forbids. The manual says stop, not swerve.",
        excerptKey: "crosswalk-stop",
        sourceLabel: "Alabama Driver Manual - Chapter 5: Pavement Markings",
        sourceUrl: hb(55),
      },
      {
        id: "al_s3_19",
        topic: "licensing",
        question: "How many points does passing a stopped school bus add to an Alabama driving record?",
        choices: ["2 points", "3 points", "6 points", "5 points"],
        correctIndex: 3,
        explanation:
          "Passing a stopped school bus is a 5-point violation, the same as failure to yield the right of way and speeding 26 mph or more over the limit. Only reckless driving and alcohol-related convictions score higher, at 6.",
        context:
          "Alabama suspends licenses on points accumulated in a two-year period: 12 to 14 points brings 60 days, 15 to 17 brings 90, 18 to 20 brings 120, 21 to 23 brings 180, and 24 or more brings a year. A GDL driver is suspended at 4 points or two moving violations. Separately, the statute fines a first school bus pass $150 to $300.",
        trap:
          "Six points is reserved for reckless driving and alcohol offenses. The school bus is 5.",
        excerptKey: "points-school-bus",
        sourceLabel: "Alabama Driver Manual - Chapter 2: The Alabama Point System",
        sourceUrl: hb(21),
        commonlyMissed: true,
      },
      {
        id: "al_s3_20",
        topic: "speed",
        question:
          "A freeway sign reads SPEED LIMIT 55 with MINIMUM 45 below it. Traffic is light and the weather is clear. What does the minimum mean?",
        choices: [
          "45 is the recommended speed",
          "Driving below 45 in normal conditions is unlawful",
          "45 applies only to trucks",
          "You must drive exactly 45 in the right lane",
        ],
        correctIndex: 1,
        explanation:
          "Where a minimum is posted, any speed below it is unlawful under normal weather, road and traffic conditions. Minimum limits are usually posted on freeways and other controlled-access highways.",
        context:
          "The manual warns that drivers who block or hinder traffic by going too slowly cause many crashes, and that you must never drive so slowly that you interfere with vehicles moving at normal safe speeds. On the freeway, slower vehicles must keep right. Bad weather suspends the minimum, because the basic speed law always wins.",
        trap:
          "A minimum is a rule, not a suggestion. The exception is conditions, not preference.",
        excerptKey: "minimum-speed",
        sourceLabel: "Alabama Driver Manual - Chapter 6: Statutory Speed Limits",
        sourceUrl: hb(62),
      },
      {
        id: "al_s3_21",
        topic: "sharing",
        question:
          "A large truck ahead of you has its right turn signal on and swings wide to the left. What should you do?",
        choices: [
          "Pass it on the right while it swings left",
          "Sound your horn so the driver holds position",
          "Wait behind until the truck completes its turn",
          "Pass on the left before it turns",
        ],
        correctIndex: 2,
        explanation:
          "Trucks and buses swing wide left to make a right turn, and the manual calls the gap that opens up the squeeze play. When the right signal is blinking, do not try to pass on the right; the driver cannot see you and you will be trapped. Wait until the turn is finished.",
        context:
          "The No-Zones are the sides, where you are invisible unless you can see the driver's face in the mirror; the rear, up to 200 feet; the front, where a truck needs 430 feet to stop from 55 mph; and the turning zone. Never cross behind a truck that is backing, because the driver cannot see directly behind.",
        trap:
          "The open space on the right is bait. The truck's trailer is about to sweep through it.",
        excerptKey: "squeeze-play",
        sourceLabel: "Alabama Driver Manual - Chapter 3: Sharing the Road with Large Vehicles",
        sourceUrl: hb(30),
      },
      {
        id: "al_s3_22",
        topic: "impairment",
        question:
          "What jail or service term is mandatory after a second DUI conviction in Alabama?",
        choices: [
          "48 hours in jail or 20 days of community service",
          "10 days in jail",
          "30 days in jail",
          "None; the penalty is a fine only",
        ],
        correctIndex: 0,
        explanation:
          "A second conviction carries a mandatory 48 hours in jail or 20 days of community service, plus a one-year license revocation. The fine ranges from $1,100 to $5,100 and up to a year in jail may be imposed.",
        context:
          "The manual sets the second conviction within a 10-year window. The third conviction has a mandatory minimum of 60 days in jail that cannot be probated or suspended, a fine of $2,100 to $10,100 and a three-year revocation. The fourth is a Class C felony punishable by one year and a day up to 10 years.",
        trap:
          "The 90-day suspension belongs to the first offense. By the second, the license is revoked for a year and jail time is mandatory.",
        excerptKey: "dui-second",
        sourceLabel: "Alabama Driver Manual - Chapter 4: Driving While Under the Influence",
        sourceUrl: hb(35),
      },
      {
        id: "al_s3_23",
        topic: "safety",
        question: "Until what age does Alabama's child restraint law require a booster seat?",
        choices: ["Age 4", "Age 8", "Age 5 or 40 pounds", "Age 6"],
        correctIndex: 3,
        explanation:
          "A booster seat is required until the child is 6 years of age. After that a seat belt is required until 15, and the safety belt law covers everyone from there.",
        context:
          "The full ladder is rear-facing until at least 1 year or 20 pounds, forward-facing until at least 5 years or 40 pounds, booster until 6, and seat belt until 15. The statute fines a violation $25 and adds 1 point for a first offense and 2 for later ones. Charges can be dismissed on proof that a proper seat was bought.",
        trap:
          "Five years or 40 pounds is the forward-facing seat threshold, the step before the booster. The booster runs to age 6.",
        excerptKey: "child-booster",
        sourceLabel: "Alabama Driver Manual - Chapter 3: Alabama's Safety Belt and Child Restraint Laws",
        sourceUrl: hb(32),
      },
      {
        id: "al_s3_24",
        topic: "rules",
        question:
          "On a two-lane road posted at 45 mph, a wrecker with amber lights is loading a car on the shoulder. What does the Move-Over Law require of you?",
        choices: [
          "Stop until the wrecker leaves",
          "Move as far from the wrecker as you can in your lane and slow to 30 mph",
          "Change to the oncoming lane to pass",
          "Continue at 45 but turn on your hazard lights",
        ],
        correctIndex: 1,
        explanation:
          "On a two-lane road you move as far from the emergency vehicle or wrecker as possible within your lane and slow to 15 mph less than the posted limit, which from 45 is 30. Where the limit is 20 or less, you travel at 10 mph.",
        context:
          "On roads with four or more lanes the first duty is to vacate the lane nearest the stopped vehicle, slowing 15 mph below the limit only if a lane change is unsafe. The statute covers police, fire, ambulances, wreckers, utility trucks, garbage trucks and any vehicle with flashing lights on official duty, and fines start at $100.",
        trap:
          "Crossing into the oncoming lane on a two-lane road is not what the law asks and creates a head-on risk. Stay in your lane, move over within it, slow down.",
        excerptKey: "move-over-two-lane",
        sourceLabel: "Alabama Driver Manual - Chapter 6: Move-Over Law",
        sourceUrl: hb(70),
      },
      {
        id: "al_s3_25",
        topic: "signs",
        question: "A yellow diamond reads ONE LANE BRIDGE. What is it warning?",
        choices: [
          "The bridge has a weight limit",
          "Trucks may not use the bridge",
          "There is not room on the bridge to meet or pass another vehicle",
          "The bridge surface is slippery",
        ],
        correctIndex: 2,
        explanation:
          "ONE LANE BRIDGE means there is not room on the bridge ahead to meet or pass another car or truck. Slow down, look for a vehicle already on or approaching the bridge, and yield if one is.",
        context:
          "It sits with the manual's other yellow warning diamonds: NARROW BRIDGE, ROAD NARROWS, PAVEMENT NARROWS, SOFT SHOULDER, LOW SHOULDER, DIP and BUMP. Each describes a road condition rather than a rule, and each asks for reduced speed and extra caution rather than a specific maneuver.",
        trap:
          "A weight limit or truck restriction would be a black-and-white regulatory sign. A yellow diamond only warns.",
        excerptKey: "one-lane-bridge",
        sourceLabel: "Alabama Driver Manual - Chapter 5: Warning Signs",
        sourceUrl: hb(48),
      },
      {
        id: "al_s3_26",
        topic: "emergencies",
        question:
          "When must a written SR-31 crash report be sent to ALEA after a collision?",
        choices: [
          "Within 30 days, when there is injury, death, or $500 or more in damage and the at-fault party was uninsured",
          "Within 24 hours of any crash",
          "Only when a police officer asks for one",
          "Within 10 days of any crash involving damage",
        ],
        correctIndex: 0,
        explanation:
          "The SR-31 is due within 30 days when a crash causes injury or death, or $500 or more in damage to any vehicle or property, and the at-fault party was not insured at the time. If both parties were insured, neither has to submit the form.",
        context:
          "That is separate from the immediate duty to report: any injury or fatal crash must be reported by the quickest means to local police in a municipality or to the State Troopers on a state highway. The form can be filed online through ALEA's driver license portal.",
        trap:
          "The SR-31 is a Safety Responsibility filing, not a police report. It is triggered by an uninsured at-fault driver, not by every crash.",
        excerptKey: "sr-31",
        sourceLabel: "Alabama Driver Manual - Chapter 4: Report All Traffic Mishaps",
        sourceUrl: hb(40),
      },
      {
        id: "al_s3_27",
        topic: "rules",
        question: "About how far ahead do high-beam headlights light the road under normal conditions?",
        choices: ["150 feet", "200 feet", "500 feet", "350 feet"],
        correctIndex: 3,
        explanation:
          "High beams normally illuminate the roadway about 350 feet ahead, and the equipment law requires them to reveal objects at a minimum of 350 feet. You should never drive so fast that you cannot stop within the distance your lights reveal.",
        context:
          "The manual's stopping chart makes the point: at 65 mph, thinking plus braking distance is about 306 feet, close to the whole lit distance, and that is on dry pavement with a fresh driver. Roughly half of Alabama's fatal crashes happen in darkness despite light traffic, and overdriving the headlights is a large part of why.",
        trap:
          "500 feet is the dimming distance for oncoming cars and the visibility that triggers headlights. The beam itself reaches about 350.",
        excerptKey: "overdriving-headlights",
        sourceLabel: "Alabama Driver Manual - Chapter 7: Night Driving",
        sourceUrl: hb(71),
      },
      {
        id: "al_s3_28",
        topic: "signals",
        question: "Two solid white lines run side by side between two lanes going the same direction. May you change lanes across them?",
        choices: [
          "Yes, with extra care",
          "No. Crossing a double solid white line is prohibited",
          "Yes, but only to the right",
          "Only when passing a slower vehicle",
        ],
        correctIndex: 1,
        explanation:
          "A double solid white line separates lanes of same-direction travel where crossing is prohibited. A single solid white line discourages crossing; a broken white line permits it.",
        context:
          "White markings organize same-direction traffic. Broken white lines divide lanes and may be crossed when passing, a solid white edge line may be crossed only to reach or leave the shoulder, a wide solid line marks a place needing unusual care, and double solid white means stay in your lane. Yellow markings belong to opposing traffic.",
        trap:
          "Solid white is the caution level; double solid white is the prohibition. Learners treat them the same and lose the question.",
        excerptKey: "double-white",
        sourceLabel: "Alabama Driver Manual - Chapter 5: Pavement Markings",
        sourceUrl: hb(55),
      },
      {
        id: "al_s3_29",
        topic: "licensing",
        question:
          "How many passengers who are not family members may a 16-year-old with a restricted Alabama license carry?",
        choices: ["None", "Three", "One", "Two"],
        correctIndex: 2,
        explanation:
          "A restricted driver may not have more than one non-family passenger, not counting a parent, guardian or supervising licensed driver aged 21 or older. The manual notes the limit was reduced from four in 2010.",
        context:
          "The restrictions apply to a 16-year-old and to a 17-year-old licensed less than six months: one non-family passenger, no driving between midnight and 6 a.m. without an exception, and no handheld communication device. They do not apply to anyone 18 or older, a 17-year-old licensed for six months, or a 16-year-old who is married or head of a household.",
        trap:
          "Family members do not count toward the limit. It is one friend, not one person.",
        excerptKey: "gdl-passenger",
        sourceLabel: "Alabama Driver Manual - Additional Information: GDL Summary",
        sourceUrl: hb(86),
      },
      {
        id: "al_s3_30",
        topic: "parking",
        question: "Your car breaks down on a rural highway. Where does the manual say to leave it?",
        choices: [
          "Off the paved or main traveled part of the road, with lighting or markings if it cannot be moved",
          "In the right lane with the hazard lights on",
          "Anywhere, as long as a warning triangle is placed behind it",
          "On the center line so both directions can see it",
        ],
        correctIndex: 0,
        explanation:
          "A vehicle left standing along a rural highway for any reason must be moved off the paved or main traveled portion of the roadway. If it cannot be moved, you must take lighting and marking precautions to eliminate the danger to other traffic.",
        context:
          "The statute adds that a stopped vehicle outside a business or residence district must leave an unobstructed width for other traffic and be visible from 200 feet in each direction. At night the manual has you activate four-way flashers, raise the hood, place flares or reflectors 100 to 500 feet behind the car, and stay with the vehicle if possible.",
        trap:
          "Hazard lights are part of the precautions, not a substitute for getting off the traveled roadway.",
        excerptKey: "rural-standing",
        sourceLabel: "Alabama Driver Manual - Chapter 3: Parking",
        sourceUrl: hb(30),
      },
      {
        id: "al_s3_31",
        topic: "sharing",
        question: "When may a driver legally drive in a marked bicycle lane in Alabama?",
        choices: [
          "Whenever no cyclist is in it",
          "To pass a slow vehicle on the right",
          "Never, under any circumstances",
          "Only to park where permitted, to enter or leave the highway, or to prepare for a turn",
        ],
        correctIndex: 3,
        explanation:
          "A driver may not use a bicycle lane except to park where parking is permitted, to enter or leave the highway, or to prepare for a turn. When turning across a bike lane you move into it before the turn, provided that does not endanger a rider already in the lane.",
        context:
          "A bicycle lane is a portion of the roadway set aside by striping, signs and markings for the preferential or exclusive use of bicycles. Where one exists, riders must use it. The manual also notes shared lane markings, or sharrows, which warn that bicycles may occupy the full travel lane on roads too narrow for a bike lane.",
        trap:
          "An empty bike lane is still a bike lane. Passing on the right through one is the shoulder-passing offense with a cyclist added.",
        excerptKey: "bike-lane-driving",
        sourceLabel: "Alabama Driver Manual - Chapter 3: Sharing the Road with Bicycles",
        sourceUrl: hb(26),
      },
      {
        id: "al_s3_32",
        topic: "impairment",
        question: "What is the blood alcohol limit for a commercial vehicle operator in Alabama?",
        choices: [".08 percent", ".04 percent", ".02 percent", ".05 percent"],
        correctIndex: 1,
        explanation:
          "Commercial vehicle operators are over the limit at .04 percent, half the adult figure. School bus and daycare drivers on duty and drivers under 21 are held to .02.",
        context:
          "The manual gives the four limits in one list. A CDL conviction also brings federal disqualification of the commercial license under 49 CFR 383.51, on top of whatever happens to the regular license. Under Alabama's implied consent law, refusing the test suspends the license regardless of which limit applies.",
        trap:
          ".02 is the youth and school bus figure. Commercial drivers are at .04.",
        excerptKey: "bac-cdl",
        sourceLabel: "Alabama Driver Manual - Chapter 4: Driving While Under the Influence",
        sourceUrl: hb(35),
      },
      {
        id: "al_s3_33",
        topic: "safety",
        question: "At what tread depth does a tire become illegal in Alabama?",
        choices: ["Less than 1/8 inch", "Less than 1/4 inch", "Less than 1/16 inch", "Less than 1/32 inch"],
        correctIndex: 2,
        explanation:
          "A tire is illegal if the tread is less than 1/16 inch deep. The manual's penny test does the same job: if Lincoln's whole head shows when the coin is placed head-first in the groove, the tire is too worn.",
        context:
          "The equipment chapter also requires two separate braking systems, a working muffler without cutouts, wipers, a mirror showing 200 feet to the rear, two white headlights, a brake light, a red taillight, a plate light, and a horn, with all lights visible from 500 feet. Under-inflation is the most common cause of blowouts, so check pressure monthly when the tires are cold.",
        trap:
          "One-eighth and one-quarter sound safer and are wrong. The legal floor is 1/16 inch.",
        excerptKey: "tire-tread",
        sourceLabel: "Alabama Driver Manual - Chapter 9: Tires",
        sourceUrl: hb(82),
      },
      {
        id: "al_s3_34",
        topic: "rightOfWay",
        question: "You are about to enter a roundabout. To whom must you yield?",
        choices: [
          "Pedestrians and cyclists at the entry, and traffic on your left already in the roundabout",
          "Traffic entering from your right",
          "Nobody, if you are entering from the main road",
          "Only large trucks using the apron",
        ],
        correctIndex: 0,
        explanation:
          "Before entering, yield to pedestrians and bicyclists, then to traffic on your left that is already circulating. Enter when there is a safe gap, keep your speed low, and yield to pedestrians again as you exit.",
        context:
          "Alabama roundabouts run counter-clockwise around a central island. Vehicles already inside have the right of way, you never turn left to enter, you do not stop inside except to avoid a crash, and if you miss your exit you go around again rather than backing up. In a two-lane roundabout, choose the lane for your exit before entering and yield to both lanes.",
        trap:
          "The right-hand rule for intersections does not apply. In a roundabout the traffic that matters is on your left.",
        excerptKey: "roundabout-yield-left",
        sourceLabel: "Alabama Driver Manual - Chapter 5: Steps for Driving a Roundabout",
        sourceUrl: hb(59),
      },
      {
        id: "al_s3_35",
        topic: "rules",
        question:
          "A load sticks out 4 feet or more beyond the rear of your vehicle in daylight. What must be attached to the end?",
        choices: [
          "A red light",
          "An orange flag at least 6 inches square",
          "A white flag of any size",
          "A red flag at least 12 inches square",
        ],
        correctIndex: 3,
        explanation:
          "A load projecting 4 feet or more from the rear needs a red flag at least 12 inches square in daytime, and at night a red light visible for at least 200 feet. A load may not extend more than 5 feet beyond the front and rear of the vehicle in total.",
        context:
          "The same section forbids loading a vehicle, or seating more than three people in the front seat, in a way that blocks the driver's view or hinders control. Loads on passenger vehicles may not extend beyond the line of the tandem, and an obstructed windshield or window is separately prohibited.",
        trap:
          "The red light is the nighttime requirement. In daylight the answer is the 12-inch red flag.",
        excerptKey: "load-red-flag",
        sourceLabel: "Alabama Driver Manual - Chapter 6: Loads Must Conform to Law",
        sourceUrl: hb(69),
      },
    ],
  },
];
