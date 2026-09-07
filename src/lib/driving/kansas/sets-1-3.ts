import type { DrivingTestSet } from "../types";

// Every fact below was checked against the Kansas Driving Handbook, the
// Non-Commercial Driver's Manual published by the Kansas Department of Revenue,
// Division of Vehicles, labeled on its cover "AAMVA 09 Model Test Version
// (Revised February 2022)" and served from ksrevenue.gov/pdf/dlhb.pdf. The book
// runs 112 pages and its printed page numbers are the PDF's page numbers, so
// every page reference here is both.
//
// Kansas is unusually generous about telling you what the exam is. Page 94
// states the format outright - 25 multiple-choice questions, 80% to pass, not
// timed, four attempts - and adds that the questions "are based on the
// information provided in this manual". Every one of the twelve sections ends
// with a "Test Your Knowledge" quiz whose stem is "These questions may be on
// the test", and Section 11 prints thirteen more sample questions with their
// answers. That is the closest thing to an official blueprint any state on this
// site publishes, and it shaped how this bank is weighted: the rules the
// handbook itself quizzes you on appear here more than once, worded differently
// each time.
//
// Where the handbook is silent or summarizing, Chapter 8 of the Kansas Statutes
// supplies the number, and the handbook invites exactly that on page 10:
// "Portions of this manual have been summarized. Kansas law will take
// precedence over discrepancies or omissions in the manual." Two gaps matter
// enough to name here:
//
// 1. The handbook never gives the sunset-to-sunrise headlight rule. It says
//    only that Kansas requires headlights whenever the wipers are running
//    (page 67). K.S.A. 8-1703 carries all three triggers, and the questions on
//    lighting are built from the statute with the handbook's half quoted
//    alongside.
// 2. The handbook gives no fine for passing a stopped school bus and no
//    doubling rule for work zones beyond a bracketed aside on page 39.
//    K.S.A. 8-2118 has both.
//
// One internal inconsistency is flagged where it arises and asked about in
// neither direction: the parking list on page 19 and the list on page 54 give
// the same distances in different units and different order (15 feet vs 15 ft.,
// "More than 12"" vs "More than 1 ft."). No question turns on which page you
// read; the research note records it.
//
// Questions are original. Explanations, context notes and trap notes are
// written from scratch; the deep link is there so the learner reads the
// Division of Vehicles' own authoritative wording.
const HB = "https://www.ksrevenue.gov/pdf/dlhb.pdf";
/** The handbook's printed page number IS its PDF page number. */
const hb = (page: number) => `${HB}#page=${page}`;
const KSA = "https://www.ksrevisor.gov/statutes/chapters/ch08";

export const kansasSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Kansas Basics",
    difficulty: "starter",
    description:
      "The rules you meet in your first hour behind the wheel in Kansas: what the shapes and colors mean, who goes first, and the handful of numbers the Division of Vehicles expects you to know cold before it hands you an instruction permit.",
    questions: [
      {
        id: "ks_s1_01",
        topic: "signs",
        question: "How many sides does a stop sign have, and what colors is it?",
        choices: [
          "Six sides, yellow with black letters",
          "Four sides, white with red letters",
          "Eight sides, red with white letters",
          "Three sides, red with white letters",
        ],
        correctIndex: 2,
        explanation:
          "The octagon is reserved for STOP and nothing else in the United States, and Kansas prints it red with white letters. You stop behind the stop line or crosswalk if one is marked.",
        context:
          "The handbook teaches signs by shape and color first, because the shape stays readable in glare, snow or a language you cannot read. Eight sides means stop, a downward-pointing triangle means yield, a yellow diamond warns of something ahead, and a white rectangle carries a law you must obey.",
        trap: "The three-sided answer describes a yield sign, which is also red and white. Shape is what separates them, not color.",
        excerptKey: "stop-sign-shape",
        sourceLabel: "Kansas Driving Handbook - Section 6, Traffic Signs, Stop Sign",
        sourceUrl: hb(40),
      },
      {
        id: "ks_s1_02",
        topic: "signals",
        question: "A steady red traffic light faces you. What does the handbook say you must do?",
        choices: [
          "Stop before entering the intersection and wait behind the stop line, crosswalk or intersection until the light turns green",
          "Stop, then proceed when the intersection is clear",
          "Slow down and proceed with caution",
          "Stop only if a vehicle or pedestrian is crossing",
        ],
        correctIndex: 0,
        explanation:
          "A steady red means stop and stay stopped. Kansas is specific about where: behind the stop line, the crosswalk or the intersection, whichever you reach first, and you wait there for green.",
        context:
          "Kansas separates steady red from flashing red deliberately. Steady red holds you until the signal changes. Flashing red is a stop sign in light form - you stop completely, then go when it is safe. Only one of the two ever turns green.",
        trap: "\"Stop, then proceed when clear\" is the flashing-red rule. Applying it to a steady red is running the light.",
        excerptKey: "steady-red",
        sourceLabel: "Kansas Driving Handbook - Section 6, Traffic Signals",
        sourceUrl: hb(34),
      },
      {
        id: "ks_s1_03",
        topic: "rightOfWay",
        question:
          "You arrive at a four-way stop a moment before the car on your left. Who goes first?",
        choices: [
          "The car on your left, because vehicles on the left always yield",
          "Whoever is going straight rather than turning",
          "Both of you together, since neither is a through street",
          "You do, because you reached the intersection first",
        ],
        correctIndex: 3,
        explanation:
          "At a four-way stop Kansas decides by order of arrival. The driver who gets there first is given the right-of-way by everyone else, and position only breaks a tie.",
        context:
          "Two rules sit side by side in the handbook and people mix them up. At a four-way stop it is order of arrival, and only if more than one vehicle arrives at the same time does the vehicle on the right go first. At an uncontrolled intersection - no stop sign, no yield sign, no signal - you yield to the vehicle on your right regardless of who got there first.",
        trap: "The vehicle-on-the-right rule is real, but at a four-way stop it is the tiebreaker, not the main rule.",
        excerptKey: "four-way-stop",
        sourceLabel: "Kansas Driving Handbook - Section 6, Right-Of-Way",
        sourceUrl: hb(33),
      },
      {
        id: "ks_s1_04",
        topic: "speed",
        question:
          "There is no speed limit sign anywhere on a residential street inside a Kansas city. What is the maximum lawful speed?",
        choices: ["25 mph", "30 mph", "35 mph", "20 mph"],
        correctIndex: 1,
        explanation:
          "Kansas sets 30 mph as the maximum in any urban district when nothing is posted. It is a maximum, not a target - the basic speed law can still make 30 too fast.",
        context:
          "The unposted maximums come as a short list: 30 mph in any urban district, 55 mph on a county or township road, 65 mph on a state or federal highway, and 75 mph on a separated multilane highway that the Secretary of Transportation has designated and posted.",
        trap: "25 mph is the residential default in a lot of neighboring states. Kansas prints 30.",
        excerptKey: "speed-urban-30",
        sourceLabel: "Kansas Driving Handbook - Section 2, Speed Limits",
        sourceUrl: hb(16),
      },
      {
        id: "ks_s1_05",
        topic: "licensing",
        question: "How old must you be to apply for a Class C instruction permit in Kansas?",
        choices: ["14", "15", "16", "17"],
        correctIndex: 0,
        explanation:
          "Fourteen. Kansas starts younger than most states. You pass the vision and written exams, a parent or guardian signs the affidavit, and the permit is issued for one year.",
        context:
          "Kansas runs four stages. The instruction permit comes at 14. A restricted license is possible at 15 after a full year on the permit and driver's education. Lesser restrictions arrive at 16. An unrestricted license comes at 17.",
        trap: "Sixteen is when the passenger and time-of-day restrictions loosen, not when testing starts.",
        excerptKey: "age-permit-14",
        sourceLabel: "Kansas Driving Handbook - Age Requirements, Instruction Permits",
        sourceUrl: hb(9),
      },
      {
        id: "ks_s1_06",
        topic: "safety",
        question:
          "What following distance does the Kansas handbook teach for good conditions?",
        choices: [
          "One car length for every 10 mph",
          "A fixed 100 feet",
          "Four seconds",
          "Two seconds",
        ],
        correctIndex: 3,
        explanation:
          "Two seconds is the Kansas baseline in prime conditions. You count from the moment the vehicle ahead passes a fixed object until you reach the same object.",
        context:
          "The handbook gives you the counting words: one-thousand-one, one-thousand-two. If you reach the object before you finish saying it, you are too close. Under adverse conditions the book moves you to a four-second rule, and it adds a second on top for unusual weather or traffic.",
        trap: "Four seconds is Kansas's adverse-conditions figure, not the everyday one. Car lengths are not used anywhere in the book.",
        excerptKey: "two-second-rule",
        sourceLabel: "Kansas Driving Handbook - Section 2, Following Other Vehicles",
        sourceUrl: hb(17),
      },
      {
        id: "ks_s1_07",
        topic: "signals",
        question: "A traffic signal ahead is flashing red. What does it mean?",
        choices: [
          "Slow down and proceed with caution",
          "Stop completely, look both ways, yield, then go when it is safe",
          "The signal has failed, so treat the intersection as uncontrolled",
          "Stop and wait for the light to turn green",
        ],
        correctIndex: 1,
        explanation:
          "A flashing red is a stop sign made of light. Kansas tells you to use the same procedure as at a stop sign: come to a complete stop, look both ways, yield the right-of-way, then go.",
        context:
          "Kansas pairs the two flashing colors so you learn them together. Flashing red means stop and then proceed when safe. Flashing yellow means slow down and proceed with caution, prepared to stop for anything entering the intersection. The difference between them is whether you are required to stop at all.",
        trap: "Waiting for green at a flashing red leaves you sitting there. The signal is doing exactly what it was set to do.",
        excerptKey: "flashing-red",
        sourceLabel: "Kansas Driving Handbook - Section 6, Traffic Signals",
        sourceUrl: hb(35),
      },
      {
        id: "ks_s1_08",
        topic: "sharing",
        question:
          "A school bus ahead stops and switches on its flashing red lights and stop arm. What must you do?",
        choices: [
          "Slow to 20 mph and pass carefully",
          "Stop only if you can see children on the road",
          "Stop, and stay stopped until the lights stop flashing and the stop arm is retracted",
          "Keep going if you are in a different lane",
        ],
        correctIndex: 2,
        explanation:
          "Kansas requires a stop for a bus showing flashing red lights or an extended stop arm, and the stop lasts until both signals are off. Even then you watch for children before you move.",
        context:
          "The rule covers school, church and day care buses picking up or letting off children, and it applies whether you are meeting the bus or overtaking it. Once the lights go off and the arm folds in, the handbook still tells you to wait until the children have completely left the roadway.",
        trap: "There is no reduced-speed version of this rule in Kansas. You stop, you do not creep past at 20.",
        excerptKey: "bus-red-lights",
        sourceLabel: "Kansas Driving Handbook - Section 6, Rules for School Buses",
        sourceUrl: hb(50),
      },
      {
        id: "ks_s1_09",
        topic: "impairment",
        question:
          "At what blood alcohol concentration is an adult driver in Kansas in violation of the law?",
        choices: ["0.10", "0.05", "0.02", "0.08 or higher"],
        correctIndex: 3,
        explanation:
          "Kansas sets the adult threshold at 0.08. At that level or above your license and driving privileges may be suspended for 30 days and criminal penalties follow.",
        context:
          "The handbook is careful to add that 0.08 is not a safe line. It says plainly that even under 0.08 you are still impaired and can still be convicted of driving impaired, and that vision is measurably affected at 0.02 in every driver.",
        trap: "0.10 is a historical figure from other decades. 0.02 is the under-21 number, not the adult one.",
        excerptKey: "bac-08-violation",
        sourceLabel: "Kansas Driving Handbook - Section 3, Alcohol and the Law",
        sourceUrl: hb(23),
      },
      {
        id: "ks_s1_10",
        topic: "parking",
        question: "How close to a fire hydrant may you park in Kansas?",
        choices: ["10 feet", "No closer than 15 feet", "20 feet", "30 feet"],
        correctIndex: 1,
        explanation:
          "Fifteen feet is the hydrant clearance. Parking is prohibited within that distance, and the rule applies whether or not a curb is painted.",
        context:
          "The handbook's do-not-park list is a set of distances worth memorizing together: 15 feet from a hydrant, 30 feet from a traffic signal, stop sign or yield sign, 50 feet from a railroad crossing, 20 feet from a fire station driveway and 75 feet from a point opposite one.",
        trap: "Thirty feet is the traffic-control-device distance in the same list. Mixing the two is the usual slip.",
        excerptKey: "park-hydrant-curb",
        sourceLabel: "Kansas Driving Handbook - Section 2, Parking",
        sourceUrl: hb(19),
      },
      {
        id: "ks_s1_11",
        topic: "signs",
        question: "What shape and colors is a yield sign in Kansas?",
        choices: [
          "A yellow diamond with black letters",
          "An orange rectangle with black letters",
          "A red and white downward-pointing triangle with red letters",
          "A white square with a red circle and slash",
        ],
        correctIndex: 2,
        explanation:
          "The yield sign is a downward-pointing triangle in red and white. It tells you to slow down and let traffic that has the right-of-way cross before you enter.",
        context:
          "A yield sign does not always mean stop. Kansas says a vehicle controlled by one need stop only when stopping is necessary to avoid interfering with traffic that has the right-of-way, and pedestrians count as that traffic.",
        trap: "The yellow diamond is the warning-sign shape. It advises; the yield triangle commands.",
        excerptKey: "yield-sign-shape",
        sourceLabel: "Kansas Driving Handbook - Section 6, Traffic Signs, Yield Sign",
        sourceUrl: hb(40),
      },
      {
        id: "ks_s1_12",
        topic: "rules",
        question:
          "You are stopped at a red light in Kansas and want to turn right. There is no sign about turning. May you go?",
        choices: [
          "Yes, after stopping completely and checking for traffic and pedestrians",
          "Yes, without stopping, if nothing is coming",
          "No, right on red is not allowed in Kansas",
          "Only if a green arrow appears",
        ],
        correctIndex: 0,
        explanation:
          "Right on red is the Kansas default, not a special permission. Two conditions ride with it: the stop has to be a real one, and a NO TURN ON RED sign overrides the default.",
        context:
          "Kansas also permits some left turns on red, from a one-way street onto another one-way street or from a two-way street onto a one-way street. In both cases you owe the crosswalk everything - the handbook tells you to check for pedestrians crossing in front of and to the side of your vehicle.",
        trap: "\"Clear enough to go\" is not the test. A turn made without an actual stop is unlawful on an empty street at three in the morning.",
        excerptKey: "right-on-red",
        sourceLabel: "Kansas Driving Handbook - Section 6, Traffic Signals",
        sourceUrl: hb(34),
        commonlyMissed: true,
      },
      {
        id: "ks_s1_13",
        topic: "emergencies",
        question:
          "You hear a siren and see an emergency vehicle approaching with flashing lights. What does the handbook tell you to do?",
        choices: [
          "Speed up to clear the intersection ahead of it",
          "Move to the right, pull over to the curb or edge of the road and stop",
          "Stop immediately wherever you are",
          "Stay in your lane and slow down",
        ],
        correctIndex: 1,
        explanation:
          "You move right, pull to the curb or edge of the road, and stop parallel and as near to the curb as you can. Then you wait for it to pass.",
        context:
          "One instruction rides on top of that: always keep intersections clear. You do not stop in the middle of one to let a fire truck through. Kansas also tells you never to follow an emergency vehicle, and to stay at least 500 feet behind it.",
        trap: "Stopping instantly in a travel lane blocks the very vehicle you were trying to help. The rule is move right first, then stop.",
        excerptKey: "siren-pull-over",
        sourceLabel: "Kansas Driving Handbook - Section 9, Emergency Vehicles",
        sourceUrl: hb(85),
      },
      {
        id: "ks_s1_14",
        topic: "signals",
        question: "What do yellow lines painted between lanes of traffic tell you?",
        choices: [
          "The lanes carry traffic in the same direction",
          "The lane to your right is a bike lane",
          "The lanes on either side carry traffic in opposite directions",
          "Parking is permitted along that edge",
        ],
        correctIndex: 2,
        explanation:
          "Yellow separates opposing traffic. White separates lanes running the same way. That one distinction answers a large share of pavement-marking questions.",
        context:
          "From there the pattern matters. Dashed yellow means you may pass when there is a safe gap. A solid yellow on your side means you may not. Two solid yellow lines mean neither direction may pass, although you may still cross one to turn.",
        trap: "White lines are the ones that separate same-direction lanes. Getting the two colors backwards makes every line question wrong.",
        excerptKey: "yellow-lines-opposite",
        sourceLabel: "Kansas Driving Handbook - Section 6, Yellow Lane Markings",
        sourceUrl: hb(43),
      },
      {
        id: "ks_s1_15",
        topic: "rightOfWay",
        question:
          "A pedestrian steps into the middle of the block, well away from any crosswalk. What must you do?",
        choices: [
          "Stop for them",
          "Sound your horn and continue",
          "Keep going, because they are jaywalking",
          "Slow down but hold your right-of-way",
        ],
        correctIndex: 0,
        explanation:
          "Kansas is blunt about this. You must yield to pedestrians always, and the handbook says that even if they are jaywalking or crossing where they should not be, you must stop for them.",
        context:
          "The wider principle is that the law says who must yield the right-of-way, not who is granted it. You only gain it when another road user gives it to you, and you must do everything possible to avoid striking a pedestrian regardless of the circumstances.",
        trap: "Being in the right does not release you. This exact scenario is one of the handbook's own Test Your Knowledge questions, and the answer there is also that you must stop.",
        excerptKey: "yield-pedestrians-always",
        sourceLabel: "Kansas Driving Handbook - Section 6, Right-Of-Way",
        sourceUrl: hb(33),
        commonlyMissed: true,
      },
      {
        id: "ks_s1_16",
        topic: "speed",
        question:
          "You are on an unposted county road in rural Kansas. What is the maximum lawful speed?",
        choices: ["45 mph", "65 mph", "70 mph", "55 mph"],
        correctIndex: 3,
        explanation:
          "Fifty-five is the unposted maximum on any county or township road. It is lower than the state-highway figure because the roads are narrower and the sight lines are worse.",
        context:
          "Kansas prints four unposted maximums and the exam has all four to draw from: 30 in an urban district, 55 on a county or township road, 65 on a state or federal highway, and 75 on a separated multilane highway designated and posted by the Secretary of Transportation.",
        trap: "65 is the state and federal highway number. County roads sit a step below it.",
        excerptKey: "speed-rural-limits",
        sourceLabel: "Kansas Driving Handbook - Section 2, Speed Limits",
        sourceUrl: hb(16),
      },
      {
        id: "ks_s1_17",
        topic: "safety",
        question: "Who is required by Kansas law to wear a safety belt?",
        choices: [
          "All occupants of a passenger vehicle",
          "The driver only",
          "Front-seat occupants only, and only on highways",
          "Nobody, if the vehicle has air bags",
        ],
        correctIndex: 0,
        explanation:
          "Kansas law requires that all occupants use safety restraints in passenger vehicles, and the handbook opens Section 2 with that sentence.",
        context:
          "Belt use is a primary violation in Kansas. If an officer sees an unrestrained adult in a front seat, or an unrestrained child anywhere in the vehicle, that alone is enough reason to stop the car. The handbook also says it is illegal to drive or ride as a front-seat passenger without a belt.",
        trap: "Air bags do not substitute for belts. The book says air bags are supplemental and will not hold you in the seat in a side impact or a rollover.",
        excerptKey: "seatbelt-primary",
        sourceLabel: "Kansas Driving Handbook - Section 2, Seatbelts",
        sourceUrl: hb(16),
      },
      {
        id: "ks_s1_18",
        topic: "signs",
        question: "A yellow diamond-shaped sign with a black symbol is telling you what?",
        choices: [
          "A law you must obey",
          "The distance to the next town",
          "There is possible danger or a special situation ahead",
          "A lane is closed for construction",
        ],
        correctIndex: 2,
        explanation:
          "Yellow diamonds are warning signs. They tell you about possible danger ahead - a curve, a crossing, a hazard - so you can slow down and be ready to stop.",
        context:
          "Some warning signs are fluorescent yellow instead: school zones, school crossings and pedestrian crossings. Work-zone warnings switch to orange, and incident signs - closures, spills, detours after an unplanned event - are fluorescent pink.",
        trap: "Signs that state a law are regulatory, and those are white with black, red or green lettering. Warning signs advise; they do not command.",
        excerptKey: "warning-signs-shape",
        sourceLabel: "Kansas Driving Handbook - Section 6, Warning Signs",
        sourceUrl: hb(35),
      },
      {
        id: "ks_s1_19",
        topic: "licensing",
        question: "How many questions are on the Kansas knowledge test?",
        choices: ["20", "25", "30", "40"],
        correctIndex: 1,
        explanation:
          "Twenty-five multiple-choice questions, on traffic signs, pavement markings and Kansas laws and driving practices. You need 80 percent, which is 20 correct.",
        context:
          "The handbook says the test is not timed and generally takes 15 to 20 minutes. You can take it at any Full-Service Driver License Center, through an approved driver's education course, or online at the state's own testing site.",
        trap: "Twenty questions is the length in several neighboring states. Kansas prints 25 twice - once on page 13 and again on page 94.",
        excerptKey: "knowledge-25-questions",
        sourceLabel: "Kansas Driving Handbook - Section 11, Knowledge Test",
        sourceUrl: hb(94),
      },
      {
        id: "ks_s1_20",
        topic: "rules",
        question:
          "You are on a Kansas road with two lanes running your direction. Which lane should you normally use?",
        choices: [
          "Either one, as long as you keep up with traffic",
          "The left lane, so slower traffic can enter and exit on the right",
          "Whichever lane has the shortest queue",
          "The right lane, except when you are passing",
        ],
        correctIndex: 3,
        explanation:
          "With two lanes going your way, you stay right and use the left only to pass. Kansas states it as a rule, not a courtesy.",
        context:
          "The rule changes with three lanes. On a road with three or more lanes in the same direction, the handbook puts you in the center travel lane, especially where a lot of traffic is entering or leaving, because that keeps you clear of merging vehicles on both sides.",
        trap: "The left lane is for passing slower vehicles, and a Slower Traffic Keep Right sign exists precisely because people sit in it.",
        excerptKey: "keep-right-except-pass",
        sourceLabel: "Kansas Driving Handbook - Section 6, General Rules, General Driving",
        sourceUrl: hb(46),
      },
      {
        id: "ks_s1_21",
        topic: "sharing",
        question: "How much of a traffic lane is a motorcycle entitled to in Kansas?",
        choices: [
          "Half a lane, so a car may share the other half",
          "Only the right-hand portion of the lane",
          "The shoulder, when traffic is heavy",
          "A complete traffic lane",
        ],
        correctIndex: 3,
        explanation:
          "A motorcycle, scooter or moped operator has the right to use a complete traffic lane. Two of them may share a lane with each other, but a car may not share one with them.",
        context:
          "The handbook explains why: a motorcycle needs room to react to traffic, and squeezing alongside one removes that room. It is also one of the Section 9 Test Your Knowledge questions, where the answer given is the full lane.",
        trap: "Two motorcycles sharing a lane is legal, and that fact gets misremembered as a car being allowed to share one too.",
        excerptKey: "motorcycle-full-lane",
        sourceLabel: "Kansas Driving Handbook - Section 9, Motorcycles, Scooters and Mopeds",
        sourceUrl: hb(83),
      },
      {
        id: "ks_s1_22",
        topic: "signals",
        question: "A green arrow appears for your direction. What does it mean?",
        choices: [
          "You may turn in the direction of the arrow if the intersection is clear of other road users",
          "You have an absolute right to turn and need not check the intersection",
          "The turn is permitted only after yielding to oncoming traffic",
          "The arrow is about to change and you should stop",
        ],
        correctIndex: 0,
        explanation:
          "A green arrow is a protected turn: oncoming and crossing traffic should be stopped for you. It still only means go if the intersection is actually clear.",
        context:
          "Kansas adds a specific warning to the green arrow. Watch for drivers making a right turn on red from the other side of the intersection - they have a duty to stop and check, but they are entering the same space you are.",
        trap: "\"Absolute right\" is the wrong reading. Even a protected arrow does not let you drive into a vehicle that has not cleared.",
        excerptKey: "green-arrow",
        sourceLabel: "Kansas Driving Handbook - Section 6, Traffic Signals",
        sourceUrl: hb(34),
      },
      {
        id: "ks_s1_23",
        topic: "parking",
        question: "How far from the curb may a parked car sit in Kansas?",
        choices: [
          "Whatever distance leaves room for traffic",
          "Up to two feet",
          "No more than 12 inches",
          "No more than 18 inches",
        ],
        correctIndex: 2,
        explanation:
          "Twelve inches. Parking more than a foot from the curb is on the handbook's prohibited list, right beside parking in an intersection or on a crosswalk.",
        context:
          "The same figure shows up in the hill-parking instructions: park parallel to and within 12 inches of the curb or road edge before you turn the wheels. Kansas repeats the number rather than assuming you will carry it over.",
        trap: "Page 54 states the same rule as \"More than 1 ft. from the curb\". It is the same distance written a different way, not a second rule.",
        excerptKey: "park-hydrant-curb",
        sourceLabel: "Kansas Driving Handbook - Section 2, Parking",
        sourceUrl: hb(19),
      },
      {
        id: "ks_s1_24",
        topic: "emergencies",
        question:
          "Your car has anti-lock brakes and you need to stop as fast as possible. What do you do with the brake pedal?",
        choices: [
          "Pump it rapidly",
          "Press it as hard as you can and keep pressing",
          "Press it gradually and evenly",
          "Press it hard, then release when it pushes back",
        ],
        correctIndex: 1,
        explanation:
          "With ABS you press hard and hold. The pedal will push back and buzz under your foot - that is the system working, not a fault, and letting up switches it off.",
        context:
          "Kansas teaches ABS as three words: Search for open space, Stomp on the pedal firmly, Steer to the open space. The point of the system is that you can brake and steer at the same time without losing the vehicle.",
        trap: "Pumping the pedal is the technique for a car without ABS, and it defeats the system on a car that has one.",
        excerptKey: "abs-press-hard",
        sourceLabel: "Kansas Driving Handbook - Section 8, Braking Quickly",
        sourceUrl: hb(73),
      },
      {
        id: "ks_s1_25",
        topic: "impairment",
        question: "What actually removes alcohol from the body?",
        choices: [
          "Strong coffee",
          "A cold shower and fresh air",
          "Time, and nothing else",
          "Eating a large meal",
        ],
        correctIndex: 2,
        explanation:
          "Time is the only medically proven method. Kansas puts a number on it: about one hour for the body to clear one normal drink, so four drinks means waiting four hours or more.",
        context:
          "The handbook names the folk remedies specifically and rules them out - coffee, fresh air, cold showers and eating do not remove alcohol from the circulatory system. Being sober means having no alcohol or impairing drug in the body at all.",
        trap: "Coffee makes a drunk person alert, not sober. Alertness is the thing that fools people into driving.",
        excerptKey: "time-only-cure",
        sourceLabel: "Kansas Driving Handbook - Section 3, Alcohol",
        sourceUrl: hb(23),
      },
      {
        id: "ks_s1_26",
        topic: "signs",
        question: "What color are regulatory signs in Kansas?",
        choices: ["Green", "White", "Yellow", "Blue"],
        correctIndex: 1,
        explanation:
          "White, with black, red or green lettering or symbols. Regulatory signs state a law you must obey - speed, lane use, turning, parking.",
        context:
          "This is one of the handbook's own Test Your Knowledge questions at the end of Section 6, and the printed answer is white. Some regulatory signs add a red circle with a slash over a symbol, which prohibits the action shown.",
        trap: "Green is the guide-sign color and yellow is the warning color. Neither carries a law.",
        excerptKey: "regulatory-signs",
        sourceLabel: "Kansas Driving Handbook - Section 6, Regulatory Signs",
        sourceUrl: hb(39),
      },
      {
        id: "ks_s1_27",
        topic: "rightOfWay",
        question:
          "You are turning left at an intersection and a car is coming straight toward you. Who yields?",
        choices: [
          "The oncoming car, because you signaled first",
          "Whoever entered the intersection second",
          "Neither - you both proceed with caution",
          "You do, because a driver turning left yields to oncoming traffic",
        ],
        correctIndex: 3,
        explanation:
          "The left-turning driver yields to vehicles approaching from the opposite direction. If both cars enter the intersection at the same time, the one going straight through has the right-of-way.",
        context:
          "The duty also covers oncoming vehicles turning right, and it does not disappear on a green light. Turning left on a steady green means you may turn only when the intersection is clear.",
        trap: "Signaling communicates an intention. It does not create a right-of-way, and the handbook warns you not to trust another driver's signal either.",
        excerptKey: "left-turn-yield",
        sourceLabel: "Kansas Driving Handbook - Section 2, Right-Of-Way",
        sourceUrl: hb(18),
      },
      {
        id: "ks_s1_28",
        topic: "speed",
        question:
          "A properly marked school zone in Kansas has no other posting. What is the maximum speed?",
        choices: ["20 mph", "15 mph", "25 mph", "30 mph"],
        correctIndex: 0,
        explanation:
          "Twenty. The handbook lists 20 mph for a properly marked school zone and the same figure for a properly marked business district.",
        context:
          "Where the zone is signed with a School Speed Limit When Flashing panel, the reduced limit applies only while the lights are flashing; at other times you obey the road's normal limit. Kansas law lets a local authority set a school-zone limit no lower than 20 mph, and only during the hours students are normally going to or from school.",
        trap: "Fifteen is a common school-zone figure elsewhere. Kansas prints 20, and the statute makes 20 the floor.",
        excerptKey: "speed-20-zones",
        sourceLabel: "Kansas Driving Handbook - Section 2, Speed Limits",
        sourceUrl: hb(16),
        commonlyMissed: true,
      },
      {
        id: "ks_s1_29",
        topic: "safety",
        question:
          "It is raining in Kansas and your windshield wipers are running. What else does the law require?",
        choices: [
          "Hazard flashers on",
          "Your headlights on",
          "Nothing extra during daylight",
          "High beams on",
        ],
        correctIndex: 1,
        explanation:
          "Wipers on means headlights on in Kansas. The handbook states it, and K.S.A. 8-1703 puts it in law: lighted lamps are required whenever the wipers are in continuous use because of rain, sleet or snow.",
        context:
          "The statute gives three separate triggers for headlights, and the handbook only mentions one of them. Lamps are required from sunset to sunrise, whenever people and vehicles are not clearly discernible at 1,000 feet, and whenever the wipers are running continuously in precipitation.",
        trap: "Daylight does not excuse you. The statute directs officers to issue a warning citation for the wipers rule specifically, which is a hint at how often it is missed.",
        excerptKey: "st-lamps-required",
        sourceLabel: "K.S.A. 8-1703 - When lighted lamps required",
        sourceUrl: `${KSA}/008_017_0003.html`,
        commonlyMissed: true,
      },
      {
        id: "ks_s1_30",
        topic: "rules",
        question:
          "Two solid yellow lines run between your lane and oncoming traffic. What do they mean?",
        choices: [
          "Neither direction may pass, though you may cross to turn",
          "Passing is permitted from your side only",
          "The road becomes one-way ahead",
          "You may cross only to enter a bike lane",
        ],
        correctIndex: 0,
        explanation:
          "A double solid yellow bars passing in both directions. You may still cross it to turn - into a driveway, for instance - when there is a gap in traffic.",
        context:
          "The yellow family reads as a set. Dashed on your side means you may pass when a safe gap exists. Solid on your side means you may not. Where one line is solid and the other dashed, only the driver with the dashed line on their side may pass.",
        trap: "\"No passing\" and \"no crossing at all\" are different rules. Kansas allows the turn.",
        excerptKey: "double-solid-yellow",
        sourceLabel: "Kansas Driving Handbook - Section 6, Yellow Lane Markings",
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
      "Signals, signs, lane markings, right-of-way and the distances Kansas expects you to have memorized. These are the questions most people get right - which is exactly why missing two of them can cost you the test.",
    questions: [
      {
        id: "ks_s2_01",
        topic: "rules",
        question: "How far before a turn or lane change must you signal in Kansas?",
        choices: [
          "50 feet",
          "At least 100 feet",
          "Two car lengths",
          "As soon as you begin the maneuver",
        ],
        correctIndex: 1,
        explanation:
          "All signals must be given at least 100 feet before the actual move or turn, and you hold the signal until you are ready to make it.",
        context:
          "Section 7 gives the same rule as a pair of distances by speed: 100 feet or 3 to 5 seconds in urban areas, and 200 feet or 3 to 5 seconds above 40 mph. If your car has electric turn signals, you are required to use them rather than hand signals.",
        trap: "Signaling as you turn tells other drivers what you are already doing. The point of the distance is to tell them before.",
        excerptKey: "signal-100-feet",
        sourceLabel: "Kansas Driving Handbook - Section 2, Signaling For Stops And Turns",
        sourceUrl: hb(17),
      },
      {
        id: "ks_s2_02",
        topic: "signs",
        question:
          "Which Kansas warning sign is the only one shaped like a pennant, and where does it sit?",
        choices: [
          "Slippery When Wet, on the right shoulder",
          "Merging Traffic, overhead",
          "Deer Crossing, on the right shoulder",
          "No Passing Zone, on the left side of the road facing you",
        ],
        correctIndex: 3,
        explanation:
          "The No Passing Zone pennant is the only pennant-shaped warning sign, and Kansas places it on the left side of the road facing the driver so it sits in your line of sight when you are thinking about pulling out.",
        context:
          "It marks the beginning of a no-passing zone. The regulatory partner to it is the white Do Not Pass sign, and the end of the zone is marked Pass with Care.",
        trap: "Every other warning sign in the book is a diamond. If a question asks about a shape that appears exactly once, this is it.",
        excerptKey: "pennant-sign",
        sourceLabel: "Kansas Driving Handbook - Section 2, Passing",
        sourceUrl: hb(17),
      },
      {
        id: "ks_s2_03",
        topic: "rightOfWay",
        question:
          "You reach a residential intersection with no stop sign, no yield sign and no signal. A car arrives on your right at the same moment. Who goes first?",
        choices: [
          "The car on your right",
          "You do, if you are going straight",
          "Whoever is on the wider street",
          "The car on your left",
        ],
        correctIndex: 0,
        explanation:
          "At an uncontrolled intersection you yield to vehicles already in it and to those coming from your right. Position decides, not intention.",
        context:
          "The handbook states the same idea from the other side in Section 2: when two vehicles enter an intersection from different roadways at about the same time, the driver on the left yields to the vehicle on the right.",
        trap: "Going straight beats turning only when both cars are on the same road facing each other. Here it is about which side the other car is on.",
        excerptKey: "uncontrolled-intersection",
        sourceLabel: "Kansas Driving Handbook - Section 6, Right-Of-Way",
        sourceUrl: hb(33),
      },
      {
        id: "ks_s2_04",
        topic: "parking",
        question:
          "How close to a traffic signal, stop sign or yield sign may you park in Kansas?",
        choices: ["10 feet", "20 feet", "No closer than 30 feet", "50 feet"],
        correctIndex: 2,
        explanation:
          "Thirty feet. Parking is prohibited within the 30 feet approaching any traffic control signal, stop sign or flashing beacon at the side of the roadway.",
        context:
          "The reason is sight lines: a car parked right up against a stop sign hides it and hides the traffic behind it. The same 30-foot figure applies to a pedestrian safety zone.",
        trap: "Fifteen feet is the hydrant distance and 50 feet is the railroad distance. Three numbers, three different hazards.",
        excerptKey: "park-30-feet-signal",
        sourceLabel: "Kansas Driving Handbook - Section 2, Parking",
        sourceUrl: hb(19),
      },
      {
        id: "ks_s2_05",
        topic: "safety",
        question:
          "The road is wet and traffic is heavy. What following interval does the Kansas handbook call for?",
        choices: [
          "Two seconds, the same as always",
          "One car length per 10 mph",
          "A four-second rule",
          "Six seconds",
        ],
        correctIndex: 2,
        explanation:
          "Under adverse conditions Kansas moves you from the two-second rule to a four-second following rule. Section 7 puts it another way - two seconds minimum, plus an extra second for any unusual weather or traffic.",
        context:
          "The handbook lists the situations that call for more room: slippery roads, following a motorcycle, following a vehicle whose driver cannot see behind, carrying a heavy load or a trailer, darkness, bad weather, and being tailgated yourself.",
        trap: "Two seconds is the prime-conditions figure. Rain is not prime conditions.",
        excerptKey: "two-second-rule",
        sourceLabel: "Kansas Driving Handbook - Section 2, Following Other Vehicles",
        sourceUrl: hb(17),
      },
      {
        id: "ks_s2_06",
        topic: "signals",
        question: "A traffic signal ahead is flashing yellow. What does it mean?",
        choices: [
          "Slow down and proceed with caution, ready to stop for traffic entering the intersection",
          "Stop, then proceed when safe",
          "The signal is out of service",
          "Yield to the right and stop",
        ],
        correctIndex: 0,
        explanation:
          "Flashing yellow means slow down and go through with caution. You are not required to stop, but you must be prepared to.",
        context:
          "Kansas also uses a yellow arrow, which means something different: the green arrow is ending, so prepare to stop and yield the right-of-way to oncoming traffic and pedestrians.",
        trap: "Flashing yellow and flashing red are easy to swap under exam pressure. Only the red one requires a full stop.",
        excerptKey: "flashing-yellow",
        sourceLabel: "Kansas Driving Handbook - Section 6, Traffic Signals",
        sourceUrl: hb(34),
      },
      {
        id: "ks_s2_07",
        topic: "speed",
        question:
          "You are on an unposted state highway in Kansas that is not a separated multilane road. What is the maximum speed?",
        choices: ["55 mph", "60 mph", "75 mph", "65 mph"],
        correctIndex: 3,
        explanation:
          "Sixty-five on any state or federal highway when nothing is posted. The 75 mph figure belongs to separated multilane highways designated and posted by the Secretary of Transportation.",
        context:
          "The statute words the same list slightly differently: 30 in any urban district, 75 on a separated multilane highway, 55 on a county or township highway, and 65 on all other highways. Both readings give the same answer here.",
        trap: "75 is the highest number in the list, which makes it the tempting one on any highway question. It is tied to a specific class of road.",
        excerptKey: "st-max-speed",
        sourceLabel: "K.S.A. 8-1558 - Maximum speed limits",
        sourceUrl: `${KSA}/008_015_0058.html`,
      },
      {
        id: "ks_s2_08",
        topic: "sharing",
        question: "A marked bike lane crosses the road you are entering. What must you do?",
        choices: [
          "Nothing, because bicycles yield to motor vehicles",
          "Yield the right-of-way to the bicyclist",
          "Sound your horn to warn the rider",
          "Stop and wait for a police officer if one is present",
        ],
        correctIndex: 1,
        explanation:
          "You must yield the right-of-way to a bicyclist where a bicycle path or bike lane intersects a road, and you must yield to bicyclists at intersections just as you would to pedestrians and other vehicles.",
        context:
          "Kansas treats bicycles as vehicles with the same rights and responsibilities as you have. You may not stop, park or drive in a designated bike lane, except to enter or leave an alley or driveway, when directed by an officer, on official duty, or in an emergency.",
        trap: "The horn is the wrong instrument here. The handbook says not to sound it close to a bicyclist unless a collision is likely, because it can startle the rider into your path.",
        excerptKey: "yield-bike-lane",
        sourceLabel: "Kansas Driving Handbook - Section 9, Bicyclists",
        sourceUrl: hb(81),
      },
      {
        id: "ks_s2_09",
        topic: "impairment",
        question:
          "An officer asks you to take a breath test and you refuse. What happens to your license?",
        choices: [
          "You can lose it for one year",
          "Nothing, since refusal is your right",
          "A 30-day suspension",
          "A written warning on a first refusal",
        ],
        correctIndex: 0,
        explanation:
          "Refusal costs you the license for a year. Kansas runs on implied consent - by taking a license you have already consented to a lawfully requested test.",
        context:
          "The suspensions escalate sharply. Section 1 lists a mandatory one-year suspension for a first refusal, two years for a second, three for a third and ten for a fourth, and a fifth refusal or a fifth result of 0.08 or greater brings permanent revocation.",
        trap: "Refusing does not make the problem go away - it is its own violation, with a longer suspension than the 30 days that follow a 0.08 result.",
        excerptKey: "refusal-one-year",
        sourceLabel: "Kansas Driving Handbook - Section 3, Alcohol and the Law",
        sourceUrl: hb(24),
      },
      {
        id: "ks_s2_10",
        topic: "emergencies",
        question: "A tire blows out at highway speed. What should you do first?",
        choices: [
          "Brake hard and pull off immediately",
          "Grip the wheel firmly, hold the car straight and come off the accelerator",
          "Steer sharply toward the shoulder",
          "Pump the brake pedal",
        ],
        correctIndex: 1,
        explanation:
          "Hold the wheel firmly, keep the car going straight, and let it slow itself by lifting off the accelerator. Kansas says plainly: do not brake.",
        context:
          "The car will tell you which tire went. A front blowout pulls the car sharply toward the failed tire; a rear one makes it wobble and shake and pull a little. Either way you slow gradually, then pull off in a safe place and put on the flashers.",
        trap: "Braking is the instinct and it is the wrong one - it shifts weight onto a tire that is no longer there and can spin the car.",
        excerptKey: "blowout-response",
        sourceLabel: "Kansas Driving Handbook - Section 8, Tire Blowout",
        sourceUrl: hb(75),
      },
      {
        id: "ks_s2_11",
        topic: "licensing",
        question:
          "Who must be in the car when you drive on a Kansas instruction permit?",
        choices: [
          "Any licensed driver, in any seat",
          "A parent or guardian only",
          "A licensed adult at least 21 years old with a year of driving experience, in the front seat",
          "Nobody, during daylight hours",
        ],
        correctIndex: 2,
        explanation:
          "The supervising adult must be licensed, at least 21, have at least one year of driving experience, and sit in the front seat with you.",
        context:
          "The permit also bars anyone else from the front seat, and it bans wireless communication devices entirely except to report illegal activity or summon emergency help. The permit expires in one year and is renewed only by taking and passing the written exam again.",
        trap: "\"Any licensed driver\" is the rule in some states. Kansas sets a minimum age of 21 and a minimum of a year's experience.",
        excerptKey: "permit-supervision",
        sourceLabel: "Kansas Driving Handbook - Section 1, Instructional Permit Class C or M",
        sourceUrl: hb(12),
      },
      {
        id: "ks_s2_12",
        topic: "rules",
        question: "Where does the Kansas handbook forbid a U-turn?",
        choices: [
          "On any two-lane road",
          "Within a business district",
          "Between sunset and sunrise",
          "On a curve, near the top of a hill, or anywhere you cannot be seen for at least 500 feet",
        ],
        correctIndex: 3,
        explanation:
          "The test is visibility. If other drivers cannot see you from at least 500 feet, the U-turn is not permitted, and curves and hillcrests are the two places named.",
        context:
          "Local ordinances and regulatory signs also govern U-turns, and the handbook tells you to obey them. When you do make one, move as far right as you can first and wait for a large gap in both directions.",
        trap: "500 feet is the U-turn sight distance. It is easy to confuse with the 500 feet you must stay behind an emergency vehicle - two different rules with the same number.",
        excerptKey: "u-turn-500-feet",
        sourceLabel: "Kansas Driving Handbook - Section 2, U Turns",
        sourceUrl: hb(17),
      },
      {
        id: "ks_s2_13",
        topic: "signs",
        question:
          "You see a square sign with a white horizontal bar inside a red circle. What is it telling you?",
        choices: [
          "The road is closed for construction",
          "Yield to crossing traffic",
          "One-way traffic ahead",
          "You may not enter",
        ],
        correctIndex: 3,
        explanation:
          "That is the DO NOT ENTER sign. It appears wherever entering would put you against traffic - the wrong end of an exit ramp, a divided-highway crossover, or a one-way street.",
        context:
          "Its partner is the WRONG WAY sign, which you will see a short distance past DO NOT ENTER on an expressway ramp, and also if you turn the wrong way into a one-way street, alley or driveway. If you see it, you are already going the wrong way.",
        trap: "DO NOT ENTER warns you before you commit. WRONG WAY tells you that you already have.",
        excerptKey: "do-not-enter",
        sourceLabel: "Kansas Driving Handbook - Section 6, Traffic Signs, Do Not Enter",
        sourceUrl: hb(41),
      },
      {
        id: "ks_s2_14",
        topic: "rightOfWay",
        question:
          "A police car is stopped on the shoulder with its lights flashing, on a road with two lanes in your direction. What does Kansas require?",
        choices: [
          "Stop until the officer waves you past",
          "Sound your horn as you approach",
          "Move out of the lane next to it, or slow down if you cannot change lanes",
          "Nothing, as long as you stay in your own lane",
        ],
        correctIndex: 2,
        explanation:
          "Kansas has a move-over law. You vacate the lane closest to the stopped emergency vehicle if it is safe and possible, and if it is not, you reduce speed and proceed with due caution.",
        context:
          "The law reaches beyond police cars: the handbook names towing and recovery vehicles displaying flashing lights, and the same duty applies to construction vehicles and workers actually working on the roadway.",
        trap: "Staying put and doing nothing is the failure mode this law exists to stop. Slowing is only the fallback when the lane change is unsafe.",
        excerptKey: "move-over-statute",
        sourceLabel: "Kansas Driving Handbook - Section 9, Move-Over Laws",
        sourceUrl: hb(85),
        commonlyMissed: true,
      },
      {
        id: "ks_s2_15",
        topic: "safety",
        question:
          "How does the Kansas handbook tell you to measure your following distance?",
        choices: [
          "Estimate three car lengths",
          "Watch the vehicle ahead pass a fixed object, then count one-thousand-one, one-thousand-two before you reach it",
          "Keep the vehicle's rear wheels visible over your hood",
          "Match the gap to your speed in feet",
        ],
        correctIndex: 1,
        explanation:
          "Pick a sign, pole or other stationary point. When the vehicle ahead passes it, start counting. If you reach the same point before you finish one-thousand-two, you are following too closely.",
        context:
          "The handbook has you keep repeating the count at other objects until the gap is right, and suggests practicing by guessing the interval first and then checking yourself.",
        trap: "The rear-wheels rule is real in Kansas, but it is the gap for stopping BEHIND a stationary vehicle, not the one for following a moving one.",
        excerptKey: "counting-following",
        sourceLabel: "Kansas Driving Handbook - Section 7, Space Ahead",
        sourceUrl: hb(63),
      },
      {
        id: "ks_s2_16",
        topic: "parking",
        question:
          "You are parking uphill on a street with a curb. Which way do you turn the front wheels?",
        choices: [
          "Away from the curb, then let the car roll back until a tire touches it",
          "Toward the curb",
          "Straight ahead, with the parking brake set",
          "Away from the curb, with the wheels clear of it",
        ],
        correctIndex: 0,
        explanation:
          "Uphill with a curb, the wheels turn away from the curb and you let the car roll back a few inches until the tire rests against it. The curb becomes the block.",
        context:
          "The other two cases both point the wheels toward the edge: downhill with or without a curb, and uphill with no curb. The principle is the same every time - if the car starts to roll, it should roll away from traffic.",
        trap: "Turning toward the curb uphill sends the car into the street if the brake fails. This is one of the handbook's printed sample questions, and the answer there is away from the curb.",
        excerptKey: "park-uphill-curb",
        sourceLabel: "Kansas Driving Handbook - Section 6, Parking Uphill with a Curb",
        sourceUrl: hb(52),
        commonlyMissed: true,
      },
      {
        id: "ks_s2_17",
        topic: "signals",
        question:
          "You have a steady green light and want to turn left across oncoming traffic. What does the green light give you?",
        choices: [
          "The right-of-way over oncoming traffic",
          "Permission to turn, but only when the intersection is clear",
          "Nothing - a left turn on green is never allowed without an arrow",
          "The right to turn after three seconds of waiting",
        ],
        correctIndex: 1,
        explanation:
          "A steady green permits the turn; it does not protect it. You yield to oncoming traffic and to pedestrians, and you turn only when the intersection is clear.",
        context:
          "This is one of the handbook's own end-of-section questions, and the printed answer is that you may turn but only when the intersection is clear. A green arrow is the protected version of the same movement.",
        trap: "\"Turn quickly before the light changes\" is the third option in the handbook's own version of this question, and it is wrong there too.",
        excerptKey: "green-left-turn",
        sourceLabel: "Kansas Driving Handbook - Section 6, Traffic Signals",
        sourceUrl: hb(34),
        commonlyMissed: true,
      },
      {
        id: "ks_s2_18",
        topic: "sharing",
        question:
          "How can you tell whether the driver of a large truck can see your car?",
        choices: [
          "If you cannot see the driver's face in the truck's side mirror, they cannot see you",
          "If you can see the truck's rear wheels, you are visible",
          "If you are within two car lengths, you are always visible",
          "If the truck's turn signal is working, the driver has seen you",
        ],
        correctIndex: 0,
        explanation:
          "The mirror test is the one the handbook gives. No face in the mirror means you are in the No-Zone, and the driver has no way of knowing you are there.",
        context:
          "Trucks and buses have blind spots on both sides, in front and behind, and they are far bigger than a car's. The right-side blind spot starts behind the cab and can run the whole length of the trailer; the rear one extends up to 200 feet.",
        trap: "Being close is not the same as being seen. The rear No-Zone means the closer you get behind a trailer, the less the driver can see you.",
        excerptKey: "mirror-face",
        sourceLabel: "Kansas Driving Handbook - Section 9, Side No-Zones",
        sourceUrl: hb(86),
      },
      {
        id: "ks_s2_19",
        topic: "speed",
        question: "What does the Kansas basic speed law require?",
        choices: [
          "That you never exceed the posted limit",
          "That you keep pace with surrounding traffic",
          "That you drive at least the minimum posted speed",
          "That you never drive faster than is reasonable and prudent under the conditions then existing",
        ],
        correctIndex: 3,
        explanation:
          "The basic speed law is about conditions, not signs. What is reasonable at one moment may not be at another, and you must adjust for road, traffic, weather, your vehicle and your own condition.",
        context:
          "It is why you can be cited for driving too fast for conditions while under the posted limit. The handbook's example is blunt: 55 mph in a snowstorm is not an acceptable speed for a snowy road even where the posted limit says 55.",
        trap: "The posted limit is a ceiling for ideal conditions. The basic speed law can lower it, and no sign has to say so.",
        excerptKey: "basic-speed-law",
        sourceLabel: "Kansas Driving Handbook - Section 2, Basic Speed Law",
        sourceUrl: hb(16),
      },
      {
        id: "ks_s2_20",
        topic: "rules",
        question:
          "A lane runs down the middle of the street, bounded by a solid yellow line on the outside and a broken yellow line on the inside. What is it for?",
        choices: [
          "Passing slower vehicles",
          "Overtaking on the left in either direction",
          "Left turns only, by vehicles traveling in either direction",
          "Emergency vehicles only",
        ],
        correctIndex: 2,
        explanation:
          "That is a shared center left turn lane. The broken inner line means either direction may use it, and the solid outer line means it is not a passing lane.",
        context:
          "The handbook tells you not to move into it too soon: the longer you sit there, the more likely you are to meet someone coming the other way. You check ahead, check mirrors, signal left, check the blind spot, steer in smoothly, then wait for your gap.",
        trap: "Using it as an acceleration lane or a passing lane is the classic misuse, and the solid yellow line on the outside is there to say so.",
        excerptKey: "shared-center-lane",
        sourceLabel: "Kansas Driving Handbook - Section 6, Shared Center Left Turn Lane",
        sourceUrl: hb(44),
        commonlyMissed: true,
      },
      {
        id: "ks_s2_21",
        topic: "impairment",
        question:
          "What is the alcohol rule for drivers under 21 in Kansas?",
        choices: [
          "The same 0.08 threshold as adults",
          "0.05, with a warning at lower levels",
          "Zero tolerance, with arrest possible for impairment at 0.02",
          "No separate rule, but penalties are doubled",
        ],
        correctIndex: 2,
        explanation:
          "Kansas has a zero-tolerance regime for under-21 drivers, and the handbook gives 0.02 as the level at which someone under 21 can be arrested for alcohol impairment.",
        context:
          "The handbook also notes that under 21 it is illegal to purchase, possess or drink alcohol at all, and that the effects of alcohol are greater for new drivers still learning complex skills.",
        trap: "0.08 is the adult figure and it does not apply here. A quarter of that amount is enough for an arrest.",
        excerptKey: "under-21-arrest",
        sourceLabel: "Kansas Driving Handbook - Section 3, Alcohol and the Law",
        sourceUrl: hb(23),
      },
      {
        id: "ks_s2_22",
        topic: "licensing",
        question:
          "What vision standard must you meet at a Kansas driver license station?",
        choices: ["20/20 in both eyes", "20/30 in one eye", "20/50 in one eye", "At least 20/40 in one eye"],
        correctIndex: 3,
        explanation:
          "Twenty-forty in at least one eye, with or without correction. If you need glasses or contacts to reach it, a corrective-lens restriction goes on the license.",
        context:
          "Once that restriction is on your license, driving without the lenses is illegal - the handbook says so directly. You may also bring a Driver Licensing eye examination form completed by an optometrist or ophthalmologist within the last 90 days instead of screening at the station.",
        trap: "20/20 is normal vision, not the licensing standard. Kansas licenses at 20/40.",
        excerptKey: "vision-2040",
        sourceLabel: "Kansas Driving Handbook - Section 1, Required Noncommercial License Tests",
        sourceUrl: hb(13),
      },
      {
        id: "ks_s2_23",
        topic: "emergencies",
        question: "Your brakes stop working while you are driving. What is the first thing to try?",
        choices: [
          "Pump the brake pedal rapidly several times",
          "Pull the parking brake all the way on",
          "Shift into reverse",
          "Turn off the engine",
        ],
        correctIndex: 0,
        explanation:
          "Rapid pumping often builds enough pressure to stop the car. Only if that fails do you go to the parking brake.",
        context:
          "The parking brake goes on slowly, whether it is a handle or a foot pedal, so you do not lock the rear wheels and start a skid, and you are ready to release it if the car does start to slide. If neither works, look for a safe place to slow to a stop off the roadway. You do not keep driving.",
        trap: "Yanking the parking brake first is what spins the car. It is the second step, applied gently, not the first.",
        excerptKey: "brake-failure",
        sourceLabel: "Kansas Driving Handbook - Section 8, Brake Failure",
        sourceUrl: hb(75),
      },
      {
        id: "ks_s2_24",
        topic: "signs",
        question:
          "A School Speed Limit When Flashing sign is posted, but the lights are dark. What speed applies?",
        choices: [
          "The reduced school-zone limit, all day",
          "The roadway's normal posted speed limit",
          "20 mph, whenever school is in session",
          "Half the posted limit",
        ],
        correctIndex: 1,
        explanation:
          "The reduced limit on that sign is required only when the lights are flashing. At other times you obey the road's normal limit.",
        context:
          "That is specific to the flashing sign. A school zone that is properly marked without flashers carries the 20 mph limit outright, and Kansas law lets a local authority set a school-zone limit as low as 20 mph during the hours students are normally going to and from school.",
        trap: "Assuming the low number applies around the clock is safer but wrong, and the exam asks the legal question, not the cautious one.",
        excerptKey: "school-speed-flashing",
        sourceLabel: "Kansas Driving Handbook - Section 6, School Speed Limit When Flashing Sign",
        sourceUrl: hb(40),
      },
      {
        id: "ks_s2_25",
        topic: "rightOfWay",
        question:
          "You are pulling out of a private driveway onto a public street. Who has the right-of-way?",
        choices: [
          "Vehicles already on the street",
          "You, if you are already partly across the sidewalk",
          "Whoever arrives at the point of conflict first",
          "Neither - both should stop and negotiate",
        ],
        correctIndex: 0,
        explanation:
          "Vehicles on a public street or highway have the right-of-way over anything entering from a private drive or side road. You wait for them.",
        context:
          "Inside a business or residential district there is a stop involved too. A driver emerging from an alley, driveway or building must stop immediately before driving onto the sidewalk or the sidewalk area, then yield.",
        trap: "Nosing out until you have blocked half the sidewalk does not transfer the right-of-way. The duty to yield does not expire once you have started.",
        excerptKey: "private-drive-yield",
        sourceLabel: "Kansas Driving Handbook - Section 2, Right-Of-Way",
        sourceUrl: hb(18),
      },
      {
        id: "ks_s2_26",
        topic: "safety",
        question: "What is a blind spot, and how do you check one?",
        choices: [
          "The area hidden by the sun visor, checked by lowering it",
          "The gap between your headlight beams, checked with high beams",
          "The area behind the car, checked in the rearview mirror",
          "An area around your car your mirrors do not show, checked by turning your head and looking over your shoulder",
        ],
        correctIndex: 3,
        explanation:
          "Blind spots are the areas your mirrors cannot cover. The only way to clear them is to turn your head and look over your shoulder in the direction you plan to move.",
        context:
          "Kansas builds the head check into the lane-change routine: mirrors first, then the shoulder check, then identify a 4 to 5 second gap, signal, look again, adjust speed, steer in, cancel the signal. Failing to check blind spots is an automatic failure on the road test.",
        trap: "Mirrors alone cannot do it, and that is the whole point of the term. A mirror check is not a blind-spot check.",
        excerptKey: "blind-spots",
        sourceLabel: "Kansas Driving Handbook - Section 7, When changing lanes",
        sourceUrl: hb(58),
      },
      {
        id: "ks_s2_27",
        topic: "signals",
        question:
          "There is a dashed yellow line on your side of the centerline. What does it allow?",
        choices: [
          "Nothing - dashed yellow always prohibits passing",
          "Parking along the centerline",
          "You may pass when a safe gap in traffic is available",
          "You may drive in either lane freely",
        ],
        correctIndex: 2,
        explanation:
          "Dashed yellow on your side means passing is permitted for you, provided there is a safe gap and the lane you enter is clear.",
        context:
          "Where one line is solid and the other dashed, only the side with the dashed line may pass. This is one of the handbook's own end-of-section questions: a yellow dashed line on your side of the roadway only means passing is permitted on your side.",
        trap: "Permission is not an instruction. The handbook adds that you should pass only when necessary and only when the lane you are entering is clear of traffic.",
        excerptKey: "solid-and-dashed",
        sourceLabel: "Kansas Driving Handbook - Section 6, Yellow Lane Markings",
        sourceUrl: hb(43),
      },
      {
        id: "ks_s2_28",
        topic: "rules",
        question:
          "The light ahead is green but traffic is backed up through the intersection. What should you do?",
        choices: [
          "Enter and wait, since the light is green",
          "Wait behind the line until there is room to get all the way across",
          "Enter far enough that your rear bumper clears the crosswalk",
          "Sound your horn to move the queue along",
        ],
        correctIndex: 1,
        explanation:
          "A green light is permission to go, not permission to block. Kansas says you may not enter an intersection unless you can clear it, even on green.",
        context:
          "The rule extends to crosswalks and railroad crossings: do not enter unless there is sufficient space on the other side for your vehicle. Getting caught in the box when the light changes leaves you illegally blocking traffic.",
        trap: "\"But I had a green\" is the exact defense the handbook rules out in advance.",
        excerptKey: "dont-block-intersection",
        sourceLabel: "Kansas Driving Handbook - Section 2, Right-Of-Way",
        sourceUrl: hb(18),
      },
      {
        id: "ks_s2_29",
        topic: "sharing",
        question:
          "A pedestrian crossing the street is guided by a dog or carrying a white cane. What must you do?",
        choices: [
          "Slow down and pass carefully",
          "Sound your horn so they know you are there",
          "Yield only if they are in a marked crosswalk",
          "Come to a complete stop",
        ],
        correctIndex: 3,
        explanation:
          "A complete stop. Kansas gives a pedestrian with a guide dog or a white cane the right-of-way always, and requires a full stop rather than a slow pass.",
        context:
          "The handbook adds an instruction most people get backwards: do not use your horn. The sound can confuse or frighten a visually impaired pedestrian or a guide dog, which makes the crossing more dangerous rather than less.",
        trap: "Honking feels helpful and is specifically ruled out here.",
        excerptKey: "white-cane-stop",
        sourceLabel: "Kansas Driving Handbook - Section 9, Pedestrians",
        sourceUrl: hb(80),
      },
      {
        id: "ks_s2_30",
        topic: "speed",
        question:
          "There is no minimum speed posted on the road you are on. May you drive as slowly as you like?",
        choices: [
          "Yes, as long as you stay in the right lane",
          "Yes, since only maximum limits are enforceable",
          "No - it is unlawful to drive so slowly that you impede or block the normal movement of traffic",
          "No, but only on interstates",
        ],
        correctIndex: 2,
        explanation:
          "Even with no minimum posted, driving so slowly that you impede or block normal traffic movement is unlawful in Kansas. The exception is when the slow speed is necessary for safe operation under the basic speed law.",
        context:
          "Section 7 puts a number on the danger: driving more than 15 mph slower than the traffic flow can be as dangerous as excessive speed, because vehicles bunch up behind you and take greater risks to get past. If that happens, pull over when it is safe and let them by.",
        trap: "Slow is not automatically safe. Some high-speed roads also post an actual minimum you are legally required to meet.",
        excerptKey: "impeding-traffic",
        sourceLabel: "Kansas Driving Handbook - Section 2, Minimum Speed / Impeding the Flow of Traffic",
        sourceUrl: hb(16),
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Real Test Difficulty",
    difficulty: "medium",
    description:
      "Thirty-five questions pitched where the real Kansas exam sits - the distances, the second halves of rules, and the situations where two plausible answers differ by one word.",
    questions: [
      {
        id: "ks_s3_01",
        topic: "safety",
        question:
          "You are driving in the city. How far ahead does the Kansas handbook tell you to look?",
        choices: [
          "One block",
          "A quarter of a mile",
          "At least two blocks or two traffic signals",
          "At least three blocks or three traffic signals",
        ],
        correctIndex: 2,
        explanation:
          "In the city the figure is at least two blocks or two traffic signals ahead. The handbook gives a different number for an urban area and another for the highway.",
        context:
          "Three distances sit in the same paragraph and they are not interchangeable: two blocks or two signals in the city, three blocks or three signals in an urban area, and at least a quarter of a mile on the highway. Separately, the book asks for a visual lead of 20 to 30 seconds ahead of the front of the vehicle.",
        trap: "Three blocks is the urban-area figure. Kansas learners report this pair as one of the most confusing items on the real exam, and picking the larger number because it sounds safer is how people miss it.",
        excerptKey: "look-ahead-blocks",
        sourceLabel: "Kansas Driving Handbook - Section 7, Visual Search, Scanning",
        sourceUrl: hb(56),
        commonlyMissed: true,
      },
      {
        id: "ks_s3_02",
        topic: "signs",
        question:
          "You approach a round yellow sign with a black X and two Rs on it. What is it telling you?",
        choices: [
          "A railroad grade crossing is ahead - slow, look and listen, and be ready to stop",
          "You are at the crossing and must stop",
          "The crossing has been permanently closed",
          "Two tracks cross the road here",
        ],
        correctIndex: 0,
        explanation:
          "The round yellow RR sign is the advance warning. It is placed along the road before the crossing so you can slow, look and listen for a train and be ready to stop.",
        context:
          "The white X-shaped crossbuck is the one at the crossing itself. There you wait for any approaching train or railroad vehicle, keeping the car behind the stop line until the crossing is clear.",
        trap: "Round yellow is advance warning; white crossbuck is the crossing. Only one of the two sits at the tracks.",
        excerptKey: "rr-advance-sign",
        sourceLabel: "Kansas Driving Handbook - Section 6, Railroad Crossing Warning Signs",
        sourceUrl: hb(36),
      },
      {
        id: "ks_s3_03",
        topic: "impairment",
        question:
          "Roughly what share of all fatal crashes involve alcohol or other impairing drugs, according to the Kansas handbook?",
        choices: ["About 10%", "About 40%", "About 25%", "About 65%"],
        correctIndex: 1,
        explanation:
          "About 40 percent. The handbook opens its alcohol section with that figure and follows it by saying that even a little drinking makes a collision much more likely.",
        context:
          "The book is precise about which skills go first. Judgment, vision, color distinction and reaction time are all named, and it states that vision is impacted at 0.02 BAC in every driver, well below any legal threshold.",
        trap: "Twenty-five percent sounds moderate and is the kind of number people guess. Kansas prints 40.",
        excerptKey: "alcohol-40-percent",
        sourceLabel: "Kansas Driving Handbook - Section 3, Alcohol, Other Drugs and Driving",
        sourceUrl: hb(22),
      },
      {
        id: "ks_s3_04",
        topic: "rules",
        question:
          "You are entering a roundabout in Kansas. What speed does the handbook suggest, and who yields?",
        choices: [
          "Full posted speed; traffic in the circle yields to you",
          "About 25 to 30 mph; nobody yields, you merge",
          "About 5 mph; pedestrians yield to you",
          "About 15 to 20 mph; you yield to traffic already circulating",
        ],
        correctIndex: 3,
        explanation:
          "Slow to about 15 to 20 mph for the entry curve, and yield the right-of-way to traffic already in the circle. Vehicles travel counterclockwise around the center island.",
        context:
          "If another vehicle reaches the circle at the same time as you, yield to it if it is on your right, and yield to pedestrians and bicyclists in the roundabout. Once you are in, do not change lanes or pass, and do not drive alongside a truck or bus.",
        trap: "Signaling inside a roundabout catches people. Going straight through needs no approach signal, but you signal right before the exit you want.",
        excerptKey: "roundabout-speed",
        sourceLabel: "Kansas Driving Handbook - Section 6, Roundabouts and Traffic Circles",
        sourceUrl: hb(49),
      },
      {
        id: "ks_s3_05",
        topic: "parking",
        question: "How close to a railroad crossing may you park in Kansas?",
        choices: ["20 feet", "No closer than 50 feet from the nearest rail", "30 feet", "75 feet"],
        correctIndex: 1,
        explanation:
          "Fifty feet from the nearest rail. It is the longest of the everyday parking clearances in the handbook's list.",
        context:
          "Learn the list as a ladder: 12 inches from the curb, 15 feet from a hydrant, 20 feet from a fire station driveway, 30 feet from a signal or stop or yield sign, 50 feet from a railroad crossing, 75 feet from a point opposite a fire station driveway.",
        trap: "Seventy-five feet is real but belongs to the fire-station rule, and only on the opposite side of the street.",
        excerptKey: "park-railroad-50",
        sourceLabel: "Kansas Driving Handbook - Section 2, Parking",
        sourceUrl: hb(19),
      },
      {
        id: "ks_s3_06",
        topic: "emergencies",
        question:
          "Your car's rear tires lose traction and the back end starts sliding out. What does Kansas tell you to do?",
        choices: [
          "Brake hard to bring the car straight",
          "Look at the oncoming lane so you can avoid it",
          "Accelerate through the slide",
          "Steer toward where you want to go and keep steering and counter-steering until the car is straight",
        ],
        correctIndex: 3,
        explanation:
          "Steer in the direction of your intended path of travel and keep working the wheel until the car straightens out. Keep looking where you want to go.",
        context:
          "Kansas gives a diagnosis first. If the car keeps going straight while you steer, the front tires have lost traction; if it moves sideways with no extra steering input, the rear tires have. Front traction loss is fixed at the brakes, rear traction loss at the wheel.",
        trap: "The handbook specifically tells you to avoid looking into the oncoming lane, because the car goes where the driver looks.",
        excerptKey: "rear-skid-steer",
        sourceLabel: "Kansas Driving Handbook - Section 8, Dealing with Skids",
        sourceUrl: hb(74),
      },
      {
        id: "ks_s3_07",
        topic: "sharing",
        question:
          "How much following distance does Kansas ask for behind a motorcycle?",
        choices: [
          "The same two seconds as any other vehicle",
          "One second, because motorcycles are short",
          "3 to 4 seconds, and more in wet conditions",
          "Five seconds at all times",
        ],
        correctIndex: 2,
        explanation:
          "Three to four seconds behind a motorcycle, scooter or moped, and more when the road is wet. They stop far more quickly than you expect.",
        context:
          "Section 7 gives the reason from the other side: motorcycles come in different sizes with different braking capability, and if the rider goes down you need the extra distance to stop or steer around them.",
        trap: "Two seconds is the general rule and it is not enough here. The whole point is that a motorcycle can out-brake your car.",
        excerptKey: "motorcycle-following",
        sourceLabel: "Kansas Driving Handbook - Section 9, Motorcycles, Scooters and Mopeds",
        sourceUrl: hb(84),
      },
      {
        id: "ks_s3_08",
        topic: "licensing",
        question:
          "You fail the Kansas written test. When may you take it again, and what does it cost?",
        choices: [
          "The next working day, after paying a $1.50 re-exam fee",
          "After seven days, at no cost",
          "The same day, twice more",
          "After 30 days, with a new application fee",
        ],
        correctIndex: 0,
        explanation:
          "You can retest the next working day once you have paid the $1.50 re-exam fee. Nothing stops you waiting longer to study.",
        context:
          "There is a hard ceiling on attempts. You get four chances at the written test and four at the driving test, and after a fourth failure of either you must wait a minimum of six months from the most recent failed exam before retesting.",
        trap: "The six-month wait is real but it only starts after the fourth failure, not the first.",
        excerptKey: "retest-next-day",
        sourceLabel: "Kansas Driving Handbook - Section 1, Unsuccessful Examinations",
        sourceUrl: hb(14),
      },
      {
        id: "ks_s3_09",
        topic: "speed",
        question:
          "At 50 mph on dry pavement with good brakes, what is your total stopping distance according to the handbook?",
        choices: [
          "A minimum of 268 feet",
          "About 158 feet",
          "About 55 feet",
          "About 100 feet",
        ],
        correctIndex: 0,
        explanation:
          "A minimum of 268 feet, once perception distance, reaction distance and braking distance are all counted.",
        context:
          "The three components are given separately so you can see where the distance goes. Perception takes three quarters of a second to a second. Reaction adds another three quarters to a second, which is 55 feet at 50 mph. Braking alone is about 158 feet on dry pavement.",
        trap: "158 feet is the braking distance only - the part after your foot has already moved. The total is more than 100 feet longer.",
        excerptKey: "total-stopping-268",
        sourceLabel: "Kansas Driving Handbook - Section 7, Speed Management, Stopping",
        sourceUrl: hb(58),
        commonlyMissed: true,
      },
      {
        id: "ks_s3_10",
        topic: "signals",
        question:
          "A lane above you shows a steady yellow X. What does it mean?",
        choices: [
          "The lane is available for through traffic",
          "The lane is closed permanently",
          "The use of the lane is changing - move out of it as soon as it is safe",
          "The lane is for turning only",
        ],
        correctIndex: 2,
        explanation:
          "A steady yellow X means the lane's use is changing and you should leave it as soon as you safely can.",
        context:
          "Reversible-lane signals come as a set of four. A green arrow means the lane below is yours. A red X means it is not available. A flashing yellow X means the lane is for turning only. A steady yellow X means get out.",
        trap: "Flashing yellow X and steady yellow X are two different instructions. One lets you turn from the lane; the other tells you to vacate it.",
        excerptKey: "reversible-lanes",
        sourceLabel: "Kansas Driving Handbook - Section 6, Reversible Lanes",
        sourceUrl: hb(45),
      },
      {
        id: "ks_s3_11",
        topic: "rightOfWay",
        question:
          "A school bus with red lights flashing is stopped on the other side of a four-lane road with a center turning lane between the directions. What must you do?",
        choices: [
          "Slow to 20 mph and pass",
          "Keep going, since a center lane divides the road",
          "Nothing, since you are in the opposing direction",
          "Stop",
        ],
        correctIndex: 3,
        explanation:
          "A center turning lane is not a divider. Kansas requires you to stop for a school bus when there is a center turning lane between the roadways, whether the bus is on your side or the opposite side.",
        context:
          "The handbook devotes three pages to the same rule in different geometries: two solid yellow lines between lanes, a center turning lane, a multi-lane highway, and at an intersection. In every one of them you stop from either side.",
        trap: "The only real exception is a median or other physical barrier. A painted lane is not a barrier, and neither are two yellow lines.",
        excerptKey: "bus-center-turn-lane",
        sourceLabel: "Kansas Driving Handbook - Section 6, Rules for School Buses",
        sourceUrl: hb(51),
        commonlyMissed: true,
      },
      {
        id: "ks_s3_12",
        topic: "safety",
        question:
          "Above what speed do modern tires start to ride up on pooled water, according to the handbook?",
        choices: ["25 mph", "50 mph", "60 mph", "35 mph"],
        correctIndex: 3,
        explanation:
          "Kansas says tires have stable traction up to about 30 mph on a wet road, and that above 35 mph the steering tires begin to ride up on pooled water like water skis. That is hydroplaning.",
        context:
          "The book gives two more thresholds. In heavy rain tires can lose all traction at 45 to 50 mph. Badly worn tires lose it much lower, at 25 to 30 mph. The only cure it offers is slowing down.",
        trap: "45 to 50 mph is the total-traction-loss figure in a downpour, not the point where hydroplaning begins.",
        excerptKey: "hydroplaning-35",
        sourceLabel: "Kansas Driving Handbook - Section 7, Water on the roadway",
        sourceUrl: hb(60),
        commonlyMissed: true,
      },
      {
        id: "ks_s3_13",
        topic: "rules",
        question:
          "You are merging onto a Kansas expressway from an entrance ramp. What gap should you look for?",
        choices: [
          "Any gap you can fit into",
          "2 to 3 seconds",
          "8 to 10 seconds",
          "4 to 6 seconds",
        ],
        correctIndex: 3,
        explanation:
          "Four to six seconds, and you aim for the middle of it so both cars can settle into a three-second interval afterwards.",
        context:
          "The same 4 to 6 second gap applies to any lane change, entering a roadway, or merging. The handbook warns that a small gap gets smaller fast, so it tells you not to take one under four seconds.",
        trap: "The handbook's own Section 7 quiz asks this and gives 4 to 6 seconds. The 4 to 5 second figure elsewhere is about identifying the gap during a lane change, which is a different sentence in the same chapter.",
        excerptKey: "merge-gap-4-6",
        sourceLabel: "Kansas Driving Handbook - Section 7, Space to Merge",
        sourceUrl: hb(64),
      },
      {
        id: "ks_s3_14",
        topic: "signs",
        question: "What color are work zone signs in Kansas, and what shape?",
        choices: [
          "Yellow diamonds only",
          "Fluorescent pink rectangles",
          "Orange, and generally diamond or rectangular",
          "White squares with black letters",
        ],
        correctIndex: 2,
        explanation:
          "Work zone signs are orange with black letters or symbols, generally diamond or rectangular. All temporary signs in a work zone use that orange background.",
        context:
          "Fluorescent pink is a different family: incident signs, put up temporarily after a crash, a spill, a natural disaster or another unplanned event. Orange means planned work, pink means something went wrong.",
        trap: "Pink and orange both mean temporary, and swapping them is the usual error. Only orange means roadwork.",
        excerptKey: "work-zone-signs",
        sourceLabel: "Kansas Driving Handbook - Section 6, Work Zone Signs",
        sourceUrl: hb(38),
      },
      {
        id: "ks_s3_15",
        topic: "impairment",
        question:
          "You are taking a prescription your doctor gave you. What does the Kansas handbook say about driving?",
        choices: [
          "Prescriptions are legal, so driving is always permitted",
          "Only illegal drugs affect driving ability",
          "Some prescription drugs affect reflexes, judgment, vision and alertness in ways similar to alcohol - check the label and ask your doctor or pharmacist",
          "You may drive if you take half the usual dose",
        ],
        correctIndex: 2,
        explanation:
          "Kansas names antidepressants, pain relievers, sleep aids and sedatives specifically, and says they can impair reflexes, judgment, vision and alertness the way alcohol does.",
        context:
          "The same warning covers over-the-counter medicine: cold and allergy remedies and anything taken to calm nerves can make you drowsy, and pep pills or diet pills can leave you nervous, dizzy and unable to concentrate. The instruction is to read the label and ask if you are not sure.",
        trap: "Legality is not the question. A lawful prescription taken exactly as directed can still make you an impaired driver.",
        excerptKey: "otc-drugs",
        sourceLabel: "Kansas Driving Handbook - Section 3, Over-the-Counter and Prescription Drugs",
        sourceUrl: hb(24),
      },
      {
        id: "ks_s3_16",
        topic: "emergencies",
        question:
          "Your right wheels drop off the pavement onto a soft shoulder. What does Kansas tell you to do?",
        choices: [
          "Steer back onto the pavement immediately",
          "Brake hard and stop where you are",
          "Ease off the accelerator, keep straight, slow to 25 mph or less, then ease back on when there is a gap",
          "Accelerate to carry the car back up",
        ],
        correctIndex: 2,
        explanation:
          "Come off the accelerator, hold the car straight, brake gently rather than hard, and get down to 25 mph or less before you steer back on with about a quarter turn of the wheel.",
        context:
          "The handbook calls the instinctive version panic steering and says it puts too much input into the wheel before the car has slowed. It also tells you to straddle the pavement edge so the tires come back at a higher angle, and not to oversteer once you are on.",
        trap: "Snatching the wheel back onto the pavement at speed is the sequence that starts a rollover, and the handbook says so in the rollover section as well.",
        excerptKey: "drop-off-25",
        sourceLabel: "Kansas Driving Handbook - Section 8, Uneven Surface Drop-Offs",
        sourceUrl: hb(76),
      },
      {
        id: "ks_s3_17",
        topic: "licensing",
        question:
          "You held an instruction permit in another state for a year and have just moved to Kansas at 16. What does Kansas require before you can be licensed?",
        choices: [
          "Nothing - Kansas honors the out-of-state permit time",
          "Six months on a Kansas permit",
          "A Kansas-issued learner's permit held for one year or more before license issuance if you are under 17",
          "Only the driving test",
        ],
        correctIndex: 2,
        explanation:
          "Kansas requires anyone under 17 to have held a state-issued learner's permit for one year or more before a license is issued, and the handbook says explicitly that driver's education permit slip time does not count toward it.",
        context:
          "Section 11 states the same rule from the testing side: if you are under 17 you must hold your Instruction Permit for one full year, or until you reach 17, whichever comes first, before you are eligible for the driver's license test.",
        trap: "Families moving into Kansas expect the clock to carry over and it does not. This is one of the most-repeated questions in Kansas driving forums, and the answer is the same every time.",
        excerptKey: "permit-year-under-17",
        sourceLabel: "Kansas Driving Handbook - Section 1, Driving Restrictions 16-17 Year Old's",
        sourceUrl: hb(12),
        commonlyMissed: true,
      },
      {
        id: "ks_s3_18",
        topic: "sharing",
        question:
          "A bicyclist reaches a red light that will not detect their bike. What does Kansas allow?",
        choices: [
          "Nothing - they must wait or dismount and walk",
          "They may ride on the sidewalk instead",
          "They may treat every red light as a stop sign",
          "After waiting what they judge a reasonable time, they may cross the intersection",
        ],
        correctIndex: 3,
        explanation:
          "This is the Dead Red Law. If the signal will not respond to the bicycle, the rider may cross after waiting what they determine is a reasonable amount of time.",
        context:
          "The permission is conditional. The handbook says the rider does this on the understanding that they will not impede cross-traffic or cause an accident. It applies only where the signal genuinely fails to detect the bike, not at any red light.",
        trap: "It is not a general licence to run reds. The trigger is a signal that will not change, not a signal that is inconvenient.",
        excerptKey: "dead-red-law",
        sourceLabel: "Kansas Driving Handbook - Section 9, Bicyclists",
        sourceUrl: hb(81),
      },
      {
        id: "ks_s3_19",
        topic: "signals",
        question:
          "You are stopped at a signal and see a small, very bright light blinking in the middle of the red lens. What is it?",
        choices: [
          "A device to alert you to the red light and that you must stop",
          "A signal that the light is about to turn green",
          "An emergency-vehicle preemption indicator",
          "A camera enforcement warning",
        ],
        correctIndex: 0,
        explanation:
          "Kansas describes it as a device to alert you that the light is red and that you must stop. It changes nothing about the rule - the red still means stop.",
        context:
          "It appears in the same paragraph as the steady red rule, where the handbook tells you to wait behind the stop line, crosswalk or intersection until the light turns green.",
        trap: "Nothing about a blinking element in a red lens softens the red. It is emphasis, not permission.",
        excerptKey: "steady-red",
        sourceLabel: "Kansas Driving Handbook - Section 6, Traffic Signals",
        sourceUrl: hb(34),
      },
      {
        id: "ks_s3_20",
        topic: "speed",
        question:
          "Snow is packed on the road. By how much does the handbook tell you to cut your speed?",
        choices: [
          "By 5 mph",
          "By half or more",
          "By 10 mph",
          "Not at all, if you have snow tires",
        ],
        correctIndex: 1,
        explanation:
          "Packed snow means half your speed or more. Wet pavement calls for about 10 mph below recommended speeds, and on ice you slow further still.",
        context:
          "The handbook is direct about ice: if possible, do not drive on ice-covered roads at all. It notes that roads are crowned and sloped for drainage, so a skidding car slides off toward a guardrail or a drainage ditch.",
        trap: "The 10 mph reduction is the wet-road figure. Packed snow is a much bigger cut, and snow tires do not change the number.",
        excerptKey: "wet-reduce-10",
        sourceLabel: "Kansas Driving Handbook - Section 7, Adjusting to Roadway Conditions",
        sourceUrl: hb(59),
      },
      {
        id: "ks_s3_21",
        topic: "rules",
        question:
          "You have passed a car on a two-lane road. When may you move back into the right lane?",
        choices: [
          "When you can see the entire front of the passed vehicle in your rearview mirror",
          "As soon as your car is fully past its front bumper",
          "After counting two seconds",
          "When the passed driver flashes their headlights",
        ],
        correctIndex: 0,
        explanation:
          "The mirror test decides it. You do not return until the whole front of the vehicle you passed is visible in your rearview mirror.",
        context:
          "There is a second constraint on a two-way road: you must be back in your lane before you come within 200 feet of any vehicle approaching from the opposite direction. And the pass itself has to be completed without exceeding the speed limit.",
        trap: "This is one of the handbook's printed sample questions on page 94, and the wrong answer offered there is the side mirror. The side mirror shows the car too early.",
        excerptKey: "pass-return-mirror",
        sourceLabel: "Kansas Driving Handbook - Section 2, Passing",
        sourceUrl: hb(17),
        commonlyMissed: true,
      },
      {
        id: "ks_s3_22",
        topic: "parking",
        question: "What does a red painted curb mean in Kansas?",
        choices: [
          "Handicap parking only",
          "Fire zone restrictions",
          "A loading zone",
          "Short stops permitted",
        ],
        correctIndex: 1,
        explanation:
          "Red is fire zone. Kansas gives four curb colors and they are worth learning as a block.",
        context:
          "White means only short stops are permitted. Yellow means a loading zone or some other restriction. Blue means a handicap restriction. Red means fire zone.",
        trap: "Blue is the handicap color, not red. Two of the four colors are about who may stop and two are about how long.",
        excerptKey: "painted-curbs",
        sourceLabel: "Kansas Driving Handbook - Section 6, No-Parking Zones",
        sourceUrl: hb(55),
      },
      {
        id: "ks_s3_23",
        topic: "safety",
        question:
          "How far can you see with low beam headlights, and what speed does that support?",
        choices: [
          "About 350 to 400 feet, which supports about 65 mph",
          "About 100 feet, which supports about 30 mph",
          "About 150 to 200 feet, which supports about 45 mph",
          "About 500 feet, which supports any legal speed",
        ],
        correctIndex: 2,
        explanation:
          "Low beams show about 150 to 200 feet, and driving at a speed that lets you stop within that distance means about 45 mph.",
        context:
          "High beams roughly double it: about 350 to 400 feet, which supports about 65 mph. The principle underneath both numbers is that at night you must be able to stop within the distance your headlights show you.",
        trap: "350 to 400 feet is the high-beam figure. Using it while on low beams is exactly the over-driving the handbook warns about.",
        excerptKey: "low-beam-distance",
        sourceLabel: "Kansas Driving Handbook - Section 8, Vision Limitations",
        sourceUrl: hb(77),
      },
      {
        id: "ks_s3_24",
        topic: "rightOfWay",
        question:
          "You are stopped at a stop sign and parked cars block your view of the cross street. What does Kansas tell you to do?",
        choices: [
          "Sound the horn and pull out",
          "Wait until another driver waves you through",
          "Reverse and find another route",
          "Edge forward slowly until you can see",
        ],
        correctIndex: 3,
        explanation:
          "Edge forward slowly. The handbook makes a point of the reason: moving forward slowly lets crossing drivers see the front of your car before you can see them, which gives them a chance to slow down.",
        context:
          "The general routine at an intersection is look front, left and right before entering, and if you are stopped, look left, right and left again. The book also tells you not to rely on a signal or sign to guarantee that nobody will cross in front of you.",
        trap: "A wave from another driver is not a right-of-way. The handbook says never to assume another driver will give your vehicle space.",
        excerptKey: "edge-forward",
        sourceLabel: "Kansas Driving Handbook - Section 7, Crossing an Intersection",
        sourceUrl: hb(57),
      },
      {
        id: "ks_s3_25",
        topic: "sharing",
        question:
          "An orange and red reflective triangle is displayed on the back of a vehicle ahead. What does it tell you?",
        choices: [
          "The vehicle is carrying hazardous material",
          "The vehicle is traveling less than 25 mph",
          "The vehicle is disabled",
          "The vehicle is a farm vehicle exempt from traffic law",
        ],
        correctIndex: 1,
        explanation:
          "The slow-moving vehicle emblem means the vehicle is traveling under 25 mph. It appears on animal-drawn vehicles, farm equipment and construction equipment.",
        context:
          "Kansas asks for particular caution behind farm machinery, which often lacks turn signals and may swing wide left before turning right. Animal-drawn vehicles are slower still, normally 5 to 8 mph, and the handbook tells you not to use the horn or rev the engine near a horse.",
        trap: "The emblem is about speed, not cargo. A disabled vehicle is signaled with flashers, flares or a white cloth.",
        excerptKey: "smv-emblem",
        sourceLabel: "Kansas Driving Handbook - Section 9, Slow Moving Vehicles",
        sourceUrl: hb(88),
      },
      {
        id: "ks_s3_26",
        topic: "signs",
        question:
          "You are on a highway and see a square blue sign with a white symbol. What is it for?",
        choices: [
          "The location of a service such as a rest area, gas station, hotel or hospital",
          "A regulation you must obey",
          "The distance to the next city",
          "A temporary road closure",
        ],
        correctIndex: 0,
        explanation:
          "Blue is the service-sign color. Those signs point you to rest areas, fuel, food, lodging, telephones and hospitals.",
        context:
          "Guide signs come in three colors. Green and brown destination signs give direction and distance to towns, airports, county lines, parks and historic sites. Blue signs give services. All of them are square or rectangular.",
        trap: "Brown is used for parks and historic areas, not services. And nothing in the guide family carries a law.",
        excerptKey: "service-signs",
        sourceLabel: "Kansas Driving Handbook - Section 6, Service Signs",
        sourceUrl: hb(42),
      },
      {
        id: "ks_s3_27",
        topic: "impairment",
        question:
          "The handbook says fatigue impairs you the way alcohol and drugs do. What does it recommend if you feel drowsy on the road?",
        choices: [
          "Turn the radio up and open the window",
          "Push on to your destination so you can sleep there",
          "Pull off at the next exit or rest area and take a 15 to 20 minute nap",
          "Drink coffee and continue for another two hours",
        ],
        correctIndex: 2,
        explanation:
          "Stop driving and take a short nap in a safe parking area - 15 to 20 minutes is the figure the handbook gives.",
        context:
          "Turning up the radio and rolling down the window are listed in the book as warning SIGNS of fatigue, not remedies. Caffeine is offered as a limited help - about two cups of coffee can raise alertness for a few hours - but the handbook says not to rely on it, and that sleep is the only real prevention.",
        trap: "This is one of the handbook's own Section 3 questions, and \"continue driving so you will reach your destination sooner\" is the wrong answer there too.",
        excerptKey: "fatigue-nap",
        sourceLabel: "Kansas Driving Handbook - Section 3, Fatigue",
        sourceUrl: hb(21),
      },
      {
        id: "ks_s3_28",
        topic: "rules",
        question:
          "Where does Kansas allow you to back a vehicle in a travel lane?",
        choices: [
          "Any time traffic is light",
          "When you have missed a turn or an exit",
          "In a residential street with no traffic",
          "Only when parallel parking",
        ],
        correctIndex: 3,
        explanation:
          "Backing in a travel lane is illegal and unsafe except to parallel park. If you miss a turn or an exit, you go on and find a safe place to turn around.",
        context:
          "The reason is expectation: drivers do not expect a car to be reversing toward them and often do not register it until too late. The same section forbids stopping in a travel lane or on the shoulder for any reason, including a breakdown or letting out a passenger, until you can pull off safely.",
        trap: "An empty street is not an exception. The rule is written about the maneuver, not about the traffic.",
        excerptKey: "no-backing-travel-lane",
        sourceLabel: "Kansas Driving Handbook - Section 6, General Rules, General Driving",
        sourceUrl: hb(45),
      },
      {
        id: "ks_s3_29",
        topic: "emergencies",
        question:
          "Your vehicle stalls on railroad tracks and a train is coming. Which way do you run?",
        choices: [
          "Along the tracks away from the train",
          "Stay in the vehicle and brace",
          "Perpendicular to the tracks in either direction",
          "Toward the train, off to the side",
        ],
        correctIndex: 3,
        explanation:
          "You get everyone out, get far from the tracks, and run in the direction the train is coming from. Debris from the impact is thrown forward, along the train's direction of travel.",
        context:
          "This is one of the handbook's printed sample questions on page 94, and the given answer is to run in the direction from which the train is approaching. Then call local law enforcement for help.",
        trap: "Running away from the train feels right and puts you exactly where the wreckage goes.",
        excerptKey: "stalled-on-tracks",
        sourceLabel: "Kansas Driving Handbook - Section 6, Railroad Crossing Warning Signs",
        sourceUrl: hb(37),
        commonlyMissed: true,
      },
      {
        id: "ks_s3_30",
        topic: "licensing",
        question:
          "Kansas suspends a driver's license after how many moving violations in a twelve-month period?",
        choices: ["Two", "Five", "Three", "Four"],
        correctIndex: 2,
        explanation:
          "Conviction of three moving violations within a twelve-month period is on the handbook's list of grounds for suspension.",
        context:
          "The same list covers refusing a chemical test, failing to appear for a court date, failing to maintain continuous liability insurance, driving under the influence, transporting an open container, and failing to report a traffic accident.",
        trap: "Two is the figure in some states' point systems. Kansas prints three.",
        excerptKey: "three-violations",
        sourceLabel: "Kansas Driving Handbook - Section 1, Loss of Driving Privileges",
        sourceUrl: hb(14),
      },
      {
        id: "ks_s3_31",
        topic: "safety",
        question:
          "How far ahead should your visual lead extend, according to the Kansas handbook?",
        choices: [
          "5 to 10 seconds",
          "The length of one city block",
          "20 to 30 seconds ahead of the front of the vehicle",
          "As far as your headlights reach",
        ],
        correctIndex: 2,
        explanation:
          "A visual lead is the area 20 to 30 seconds ahead of the front of the car. It is what lets you see a problem in time to stop or steer around it.",
        context:
          "There is a separate, shorter figure for avoiding panic stops: look at least ten seconds ahead so you can see events developing and slow gradually instead of braking hard. The two numbers do different jobs.",
        trap: "Ten seconds is the panic-stop figure, not the visual lead. Both appear in Section 7 within a few pages of each other.",
        excerptKey: "visual-lead",
        sourceLabel: "Kansas Driving Handbook - Section 7, Seeing Well Ahead in the Travel Path",
        sourceUrl: hb(56),
      },
      {
        id: "ks_s3_32",
        topic: "signals",
        question:
          "What does a white lane line between two lanes of traffic tell you?",
        choices: [
          "The lanes carry traffic in opposite directions",
          "The right-hand lane is reserved for buses",
          "Parking is permitted in the right-hand lane",
          "Both lanes carry traffic in the same direction",
        ],
        correctIndex: 3,
        explanation:
          "White separates lanes of travel going the same way. A dashed white line lets you change lanes when there is a safe gap; a solid white line means stay in your lane unless a special situation requires the change.",
        context:
          "White lines also mark the right edge of the roadway and parking spaces, and solid white lines designate turn lanes and prevent lane changes near intersections. White arrows on the surface show which turns can be made from which lanes.",
        trap: "Yellow is the color for opposing directions. This is one of the handbook's printed sample questions and the answer given there is yellow, for the opposite-direction case.",
        excerptKey: "white-lines",
        sourceLabel: "Kansas Driving Handbook - Section 6, White Lane Markings",
        sourceUrl: hb(43),
      },
      {
        id: "ks_s3_33",
        topic: "speed",
        question:
          "Visibility drops to less than 100 feet in blowing dust. What is the fastest you can safely drive?",
        choices: ["30 mph", "45 mph", "20 mph", "The posted limit, with hazards on"],
        correctIndex: 0,
        explanation:
          "Kansas gives 30 mph as the ceiling when rain, snow, blowing dust, smoke or thick fog cuts your sight distance below 100 feet.",
        context:
          "The handbook adds that when weather limits visibility that badly you may not be able to drive safely at all, and tells you to pull off in a safe place and wait it out. It is one of the Section 8 Test Your Knowledge questions.",
        trap: "Twenty sounds more cautious and is the wrong answer on the state's own quiz. The printed figure is 30.",
        excerptKey: "hundred-feet-30",
        sourceLabel: "Kansas Driving Handbook - Section 8, Vision Limitations",
        sourceUrl: hb(77),
        commonlyMissed: true,
      },
      {
        id: "ks_s3_34",
        topic: "sharing",
        question:
          "A transit bus at a stop is letting passengers off. You are approaching from behind. What is required?",
        choices: [
          "Stop as you would for a school bus",
          "Wait behind it until it moves off",
          "Nothing - a transit bus is not a school bus, though you should watch for people crossing in front of it",
          "Pass on the left at no more than 10 mph",
        ],
        correctIndex: 2,
        explanation:
          "Kansas does not extend the school-bus stop to transit buses. The handbook says you do not have to stop for a transit bus dropping off or picking up people unless you are behind them.",
        context:
          "What you do owe is caution. A stopped bus can hide a pedestrian about to cross, and the handbook tells you not to pass a stopped vehicle until you are sure nobody is crossing in front of it, even on a multi-lane road.",
        trap: "The 10 mph limit belongs to passing a trolley or light rail safety zone, which is a different rule on the same page.",
        excerptKey: "transit-bus-no-stop",
        sourceLabel: "Kansas Driving Handbook - Section 9, Public Transportation",
        sourceUrl: hb(87),
      },
      {
        id: "ks_s3_35",
        topic: "rightOfWay",
        question:
          "At an uncontrolled intersection two cars arrive from different roadways at approximately the same time. Which driver yields?",
        choices: [
          "The driver on the right yields to the driver on the left",
          "Neither - both stop and proceed in turn",
          "The driver on the left yields to the vehicle on the right",
          "The driver on the narrower road yields",
        ],
        correctIndex: 2,
        explanation:
          "The driver on the left yields to the vehicle on the right. That is the same rule as \"yield to the car on your right\", stated from the other driver's point of view.",
        context:
          "Before that rule applies, a simpler one does: any driver approaching an intersection must yield to a vehicle that has already entered it from a different highway. Position only decides when both arrive at the same moment.",
        trap: "The wording flips depending on which car the question puts you in. Read which driver you are before you answer.",
        excerptKey: "row-same-time",
        sourceLabel: "Kansas Driving Handbook - Section 2, Right-Of-Way",
        sourceUrl: hb(18),
      },
    ],
  },
];
