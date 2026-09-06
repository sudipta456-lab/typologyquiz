import type { DrivingTestSet } from "../types";

// Sets 4 to 6. Set 5 is built from the forum research recorded in
// docs/driving/research/louisiana.md: seventy-five Reddit threads were read
// before it was written, and the recurring Louisiana confusions became the
// traps. Where a thread contradicted the guide or the statute, the official
// source won and the thread's belief became the wrong answer.
//
// No question here reproduces anything anyone posted from memory of a real
// exam. Threads were used only to learn WHICH RULE trips people up, and each
// rule was then re-checked against the Class D & E Driver's Guide, Louisiana
// Revised Statutes Title 32, or the OMV's own licensing handouts before a
// question was written from scratch.
const HB = "https://public.powerdms.com/LADPSC/documents/347039";
/** Printed page number to a PDF page anchor - the book's page 1 is PDF page 6. */
const hb = (page: number) => `${HB}#page=${page + 5}`;
const stat = (d: number) => `https://legis.la.gov/legis/Law.aspx?d=${d}`;
const PERMITS =
  "https://expresslane.la.gov/omv/drivers/personal-driver-s-licenses/permits/";
const GDL_URL =
  "https://expresslane.la.gov/omv/media/qa0jml1m/louisiana-graduated-dl-program.pdf";
const ADULTS = "https://expresslane.dps.louisiana.gov/CDLForms/CLASS%20E%20-%20Adults_upd.pdf";
const GUIDE = "Class D & E Driver's Guide";
const RS = "Louisiana Revised Statutes";
const OMV = "Louisiana OMV";

export const louisianaSets4to6: DrivingTestSet[] = [
  {
    id: "set-4",
    setNumber: 4,
    title: "Across the Whole Manual",
    difficulty: "medium",
    description:
      "A sweep of all eleven chapters, from the highway transportation system to trailer safety, mixing the guide's own numbers with the statutory ones it leaves out.",
    questions: [
      {
        id: "la_s4_01",
        topic: "signs",
        question:
          "A sign shows a white horizontal bar inside a red circle on a square background. What does it mean?",
        choices: [
          "Road closed to trucks",
          "No parking beyond this point",
          "One way traffic ahead",
          "Do not enter",
        ],
        correctIndex: 3,
        explanation:
          "That is the DO NOT ENTER sign. You will meet it at exit ramps you would be taking backwards, at crossovers on divided roads, and on one-way streets.",
        context:
          "A short distance past it, on an expressway ramp, comes the WRONG WAY sign, which tells you the mistake has already been made. Red raised pavement markings do the same job on the surface: they show you are facing against the direction of travel.",
        trap: "Reversing to correct a wrong-way entry on a controlled-access highway is separately prohibited. You keep going forward to the next opportunity to turn around safely.",
        excerptKey: "do-not-enter",
        sourceLabel: `${GUIDE} - Chapter 3, Regulatory Signs`,
        sourceUrl: hb(29),
      },
      {
        id: "la_s4_02",
        topic: "rules",
        question:
          "How much space should you leave to merge onto a Louisiana interstate from the entrance ramp?",
        choices: [
          "A gap of about two seconds",
          "A gap of about three seconds",
          "A gap of about four seconds",
          "A gap of about six seconds",
        ],
        correctIndex: 2,
        explanation:
          "Four seconds. The guide explains the arithmetic: a four-second gap leaves you and the driver you merge in front of two seconds each.",
        context:
          "You start checking traffic while still on the ramp, signal early, and adjust speed to meet the gap so you enter at or near the speed of traffic. Stopping at the end of a short acceleration lane is what produces both rear-end collisions and the desperate acceleration that follows.",
        trap: "Interstate traffic has the right of way, so a gap you force is not a gap. Squeezing into a two-second hole leaves nobody any room.",
        excerptKey: "merge-four-second-gap",
        sourceLabel: `${GUIDE} - Chapter 7, Space to Merge`,
        sourceUrl: hb(101),
      },
      {
        id: "la_s4_03",
        topic: "licensing",
        question:
          "What must a driver education student have in their possession during behind-the-wheel instruction?",
        choices: [
          "A parental consent form",
          "The vehicle registration for the training car",
          "A certificate of insurance in their own name",
          "A Temporary Instructional Permit",
        ],
        correctIndex: 3,
        explanation:
          "The TIP. It has to be presented to the driver education provider before enrollment, carried during behind-the-wheel work, and carried during the road skills test.",
        context:
          "The TIP came in on 4 September 2018 and it gates the whole process: no knowledge test, no behind-the-wheel instruction and no skills test without one. When the course is finished the TIP is surrendered to the OMV with the proof of completion, and converting it to a learner's permit costs nothing extra.",
        trap: "A driving school enrollment is not the permit. The TIP comes from the OMV first, and the course second.",
        excerptKey: "omv-tip-possession",
        sourceLabel: `${OMV} - Class E Learner's Permit Requirements`,
        sourceUrl: PERMITS,
      },
      {
        id: "la_s4_04",
        topic: "safety",
        question:
          "Your right wheels have dropped off the pavement onto a shoulder that sits well below it. What should you do?",
        choices: [
          "Stay on the shoulder, slow to about 10 mph, then steer back sharply when clear",
          "Steer back onto the pavement immediately before you lose speed",
          "Brake hard and stop on the shoulder",
          "Accelerate to climb back onto the pavement",
        ],
        correctIndex: 0,
        explanation:
          "Stay on the shoulder and slow right down first. Trying to climb a lip back onto the pavement at speed throws the car across the road.",
        context:
          "If there is no drop-off at all, you can simply steer back on gently once you have slowed. Where the shoulder is much lower, the guide sets the sequence out step by step: slow to a very slow speed, check for traffic in both directions, then turn the wheels sharply back onto the pavement.",
        trap: "Jerking the wheel is the reflex, and it is the one the guide names as a cause of rollovers and head-on collisions.",
        excerptKey: "wheels-off-pavement",
        sourceLabel: `${GUIDE} - Chapter 8, Wheels roll off the pavement`,
        sourceUrl: hb(116),
      },
      {
        id: "la_s4_05",
        topic: "speed",
        question:
          "What is the maximum speed for a Louisiana school bus that is stopping frequently to load or unload children?",
        choices: [
          "25 mph",
          "35 mph",
          "45 mph",
          "55 mph",
        ],
        correctIndex: 1,
        explanation:
          "Thirty-five miles per hour. It sits in the guide's short list of exceptions to the 70 mph maximum, alongside 45 mph for a vehicle towing another.",
        context:
          "During the school year buses are on the road mostly in a three-hour window in the morning and another in the afternoon. They stop often, and the amber lights come on 100 to 500 feet before each stop, so a following driver gets warning if they are far enough back to use it.",
        trap: "The bus is slow because it is about to stop. Closing on it at the posted limit removes the warning the amber lights were giving you.",
        excerptKey: "max-speed-70",
        sourceLabel: `${GUIDE} - Chapter 10, Driving`,
        sourceUrl: hb(128),
      },
      {
        id: "la_s4_06",
        topic: "emergencies",
        question:
          "Smoke starts coming from under the hood while you are driving. What is the correct order of actions?",
        choices: [
          "Open the hood to see what is burning, then call for help",
          "Pull over, keep the engine running, and stay in the car",
          "Drive off the road, stop, switch everything off, and get everyone out",
          "Pour water over the engine bay as soon as you stop",
        ],
        correctIndex: 2,
        explanation:
          "Off the road, engine and electrics off, everyone out and away. Poisonous fumes can fill the cabin, so nobody stays in the vehicle.",
        context:
          "If the fire is small you may smother it with a chemical extinguisher, dirt, mud, sand or clothing. Water is exactly wrong on a gasoline, oil or electrical fire. A large fuel fire is not something to fight at all: you get clear and call for help.",
        trap: "Opening the hood feeds the fire a lungful of air. Any burning smell is worth investigating, but not by lifting the lid on a fire.",
        excerptKey: "vehicle-fire",
        sourceLabel: `${GUIDE} - Chapter 8, Fire`,
        sourceUrl: hb(117),
      },
      {
        id: "la_s4_07",
        topic: "signals",
        question:
          "A steady yellow arrow appears where you had a green arrow. What does it mean?",
        choices: [
          "The protected turn is ending, so prepare to stop and yield",
          "Turn immediately, before the arrow goes out",
          "The turn is now permitted after yielding",
          "Oncoming traffic has been stopped for you",
        ],
        correctIndex: 0,
        explanation:
          "The green arrow is finishing. You prepare to stop and yield the right of way to oncoming traffic and to pedestrians.",
        context:
          "Louisiana runs four arrow states and they are worth separating. Green arrow is protected. Steady yellow arrow means the protection is ending. Flashing yellow arrow means turn after yielding. Red arrow means the movement is barred until the green arrow returns.",
        trap: "A steady yellow arrow is not the same as a flashing one. Steady says the window is closing; flashing says there was never a protected window.",
        excerptKey: "signal-steady-yellow-arrow",
        sourceLabel: `${GUIDE} - Chapter 3, Traffic Signals`,
        sourceUrl: hb(33),
      },
      {
        id: "la_s4_08",
        topic: "parking",
        question:
          "Where does Louisiana forbid parking without needing any sign at all?",
        choices: [
          "On any street narrower than 20 feet",
          "On any bridge, overpass or inside a tunnel",
          "On any road with a posted speed above 45 mph",
          "Within 100 feet of a school entrance",
        ],
        correctIndex: 1,
        explanation:
          "Bridges, elevated structures and highway tunnels are on the statutory list. No sign is needed, because there is nowhere for traffic to go around you.",
        context:
          "R.S. 32:231 makes the general point: where a section of the traffic law does not say signs are required, it applies even though no sign is posted. Signed restrictions can only be enforced when the sign is where an ordinarily observant person can see it.",
        trap: "An unposted stretch is not an unregulated one. Several of Louisiana's parking prohibitions never carry a sign.",
        excerptKey: "stat-double-parking",
        sourceLabel: `${RS} 32:143 - Stopping, standing or parking prohibited`,
        sourceUrl: stat(88071),
      },
      {
        id: "la_s4_09",
        topic: "sharing",
        question:
          "You are following a horse being ridden along the edge of a rural road. What does the guide tell you to do?",
        choices: [
          "Sound the horn so the rider knows you are there",
          "Rev the engine to move the horse off the roadway",
          "Pass close and fast, to be past quickly",
          "Drive at a reasonable speed and give the horse room",
        ],
        correctIndex: 3,
        explanation:
          "Reasonable speed, reasonable distance, and no noise. The guide specifically tells you not to sound your horn or rev your engine near a horse.",
        context:
          "Horseback riders are subject to and protected by the rules of the road, and must ride single file near the right edge, on a usable shoulder, lane or path. Animal-drawn vehicles get the same treatment, travel at 5 to 8 mph, and often cannot see behind them when loaded.",
        trap: "The horn is the instinctive way to announce yourself. Around a horse it is the thing most likely to cause the collision.",
        excerptKey: "horseback-riders",
        sourceLabel: `${GUIDE} - Chapter 7, Slow Moving Vehicles`,
        sourceUrl: hb(106),
      },
      {
        id: "la_s4_10",
        topic: "impairment",
        question:
          "You submit to a breath test at 21 years old and blow 0.16 percent. How long is the suspension on a first offense?",
        choices: [
          "180 days",
          "365 days",
          "Two years",
          "Three years",
        ],
        correctIndex: 2,
        explanation:
          "Two years. Louisiana splits the adult band in two: 0.08 to 0.149 costs 180 days on a first offense, and 0.15 or above costs two years.",
        context:
          "A refusal costs a year on a first refusal and two years on a second within ten. Under 21, a reading of 0.02 or above costs 180 days. Reinstatement in every case requires an SR-22 filed and maintained for three years.",
        trap: "The 180-day figure is only the lower band. Doubling the legal limit more than quadruples the suspension.",
        excerptKey: "submit-suspension-levels",
        sourceLabel: `${GUIDE} - Chapter 9, Administrative Per Se`,
        sourceUrl: hb(126),
      },
      {
        id: "la_s4_11",
        topic: "signs",
        question:
          "A sign reads STOP HERE ON RED and there is no NO TURN ON RED sign at the intersection. What may you do?",
        choices: [
          "Turn right on red after stopping at the marked point and checking traffic and pedestrians",
          "Turn right on red without stopping, since the sign only marks a position",
          "Wait for green before any turn",
          "Turn either direction on red once you have stopped",
        ],
        correctIndex: 0,
        explanation:
          "The sign tells you where to stop, not whether you may turn. With no prohibition posted, right on red is available once you have stopped there and checked.",
        context:
          "Louisiana marks the stopping point in several ways: a solid white stop line painted across the lane, a crosswalk, or a STOP HERE ON RED sign where the geometry makes the usual position wrong. Where none is present, you stop before entering the intersection itself.",
        trap: "Stopping past the marked point to get a better view and then turning is still a failure to stop where required.",
        excerptKey: "stop-here-on-red",
        sourceLabel: `${GUIDE} - Chapter 3, Regulatory Signs`,
        sourceUrl: hb(28),
      },
      {
        id: "la_s4_12",
        topic: "rightOfWay",
        question:
          "A funeral procession is passing and you are waiting to pull out. What does Louisiana require?",
        choices: [
          "Nothing, unless a police escort is present",
          "Yield the right of way to the vehicles in the procession",
          "Stop and remain stopped until an officer directs you",
          "Follow the procession at 500 feet",
        ],
        correctIndex: 1,
        explanation:
          "You yield to the procession. The vehicles in it are required to run their headlights and their emergency flashers so that you can identify them.",
        context:
          "That combination is the tell: headlights on and hazard lights flashing on a line of vehicles moving together. The guide places the rule alongside the other duties in its Other Laws You Should Know section, next to the 500-foot rule for following emergency vehicles.",
        trap: "The lead car may be through the light before you notice the rest of the line. The duty runs to the whole procession, not just the hearse.",
        excerptKey: "funeral-procession",
        sourceLabel: `${GUIDE} - Chapter 6, Other Laws You Should Know`,
        sourceUrl: hb(97),
      },
      {
        id: "la_s4_13",
        topic: "safety",
        question:
          "How much tread does the guide say your tires need as a minimum?",
        choices: [
          "1/32 of an inch",
          "1/16 of an inch",
          "1/8 of an inch",
          "1/4 of an inch",
        ],
        correctIndex: 1,
        explanation:
          "One sixteenth of an inch between all treads. The guide puts it in its weekly check list, next to checking pressure against the figure printed on the tire.",
        context:
          "The same weekly list covers even wear, dry rot, bumps, bulges and separation, plus oil level, battery corrosion, fluid leaks, radiator level, lamps, horn, fuel cap and seat belts. Tread depth is what lets water escape through the grooves, which is the whole defense against hydroplaning.",
        trap: "Pressure and tread are separate checks. Correct pressure on a bald tire still hydroplanes.",
        excerptKey: "tire-tread-depth",
        sourceLabel: `${GUIDE} - Chapter 4, Preparing to Drive`,
        sourceUrl: hb(44),
      },
      {
        id: "la_s4_14",
        topic: "rules",
        question:
          "How many people may legally occupy the front seat of a moving vehicle in Louisiana?",
        choices: [
          "Two",
          "Three",
          "Four",
          "As many as there are safety belts",
        ],
        correctIndex: 1,
        explanation:
          "Three. Louisiana makes it an offense for more than three persons to occupy the front seat of a moving vehicle.",
        context:
          "A separate rule bars carrying more people or cargo than lets you see in every direction or keep control. And the belt statute forbids carrying more people than there are safety belts, so a bench seat with two belts caps you at two regardless.",
        trap: "The three-person limit and the one-belt-each rule are different limits. Whichever bites first is the one you must obey.",
        excerptKey: "three-in-front-seat",
        sourceLabel: `${GUIDE} - Chapter 6, Other Laws You Should Know`,
        sourceUrl: hb(96),
      },
      {
        id: "la_s4_15",
        topic: "signals",
        question:
          "You are at a green light and traffic ahead is backed up past the far side of the intersection. What should you do?",
        choices: [
          "Enter and wait, so you are first away when it clears",
          "Enter as far as the crosswalk and stop there",
          "Sound your horn to move the queue along",
          "Stay behind the line until you can clear the far side",
        ],
        correctIndex: 3,
        explanation:
          "You may not enter an intersection unless you can clear it completely. Blocking it stops the cross traffic from ever getting its turn.",
        context:
          "Louisiana marks the worst of these with a DO NOT BLOCK INTERSECTION sign, which forbids stopping, standing or parking in the intersection at any time. The guide's scanning advice makes the same point: check that the travel path is clear all the way through before you enter.",
        trap: "A green light is permission to go if the way is clear, not permission to occupy the junction.",
        excerptKey: "do-not-block-intersection",
        sourceLabel: `${GUIDE} - Chapter 3, Regulatory Signs`,
        sourceUrl: hb(28),
      },
      {
        id: "la_s4_16",
        topic: "licensing",
        question:
          "When may you take the Louisiana road skills test in your own vehicle at an OMV office?",
        choices: [
          "Any time, since the OMV only checks that the car runs",
          "Only if the vehicle is currently licensed, inspected and insured",
          "Only if the vehicle is less than ten years old",
          "Only if a licensed driver rides in the back seat",
        ],
        correctIndex: 1,
        explanation:
          "Licensed, inspected and insured, with the registration and proof of insurance produced when you apply. A working speedometer and functioning seat belts are checked too.",
        context:
          "The examiner cannot run the test in a vehicle that is not safety inspected and legally equipped, and you are asked to demonstrate the safety equipment before you start. Loose objects come out of the car, and only the applicant, the OMV staffer and an interpreter may be in it.",
        trap: "An expired inspection sticker ends the appointment before it starts, and it is the item people forget because the car drives perfectly well without one.",
        excerptKey: "omv-road-test-vehicle",
        sourceLabel: `${OMV} - Class E Intermediate License Requirements`,
        sourceUrl: PERMITS,
      },
      {
        id: "la_s4_17",
        topic: "signs",
        question:
          "A diamond-shaped sign is orange rather than yellow. What has changed?",
        choices: [
          "The hazard is permanent rather than temporary",
          "The sign applies only at night",
          "The warning is in a construction or maintenance work zone",
          "The sign is advisory rather than regulatory",
        ],
        correctIndex: 2,
        explanation:
          "The shape still means warning; the orange moves it into a work zone. Most work zone signs are diamonds, and a few are rectangles.",
        context:
          "The work zone family includes FLAGGER AHEAD, WORKERS AHEAD and LOW SHOULDER, each with its own instruction. Flaggers wear orange vests and use red flags or stop and slow paddles, and their directions carry the same authority as a sign.",
        trap: "Orange means people may be in the roadway even when you cannot see them yet, and Louisiana doubles the fine for anything you do wrong there.",
        excerptKey: "warning-signs",
        sourceLabel: `${GUIDE} - Chapter 3, Signs in Construction Areas`,
        sourceUrl: hb(25),
      },
      {
        id: "la_s4_18",
        topic: "emergencies",
        question:
          "Another driver is passing you and cannot complete the pass because of oncoming traffic. What is the safest response?",
        choices: [
          "Hold your speed and let them work it out",
          "Slow down and move as far right as you safely can",
          "Speed up so they have to drop back",
          "Brake hard to open a gap immediately behind you",
        ],
        correctIndex: 1,
        explanation:
          "Slow and move right. That shortens the pass and gives the other driver somewhere to go before the oncoming car arrives.",
        context:
          "If it is clear they must drop back instead, the guide says to increase your speed so they can slot in behind you. Either way you decide which the driver intends before you change anything, because helping in the wrong direction makes it worse.",
        trap: "Braking hard is not the same as slowing down. It closes the gap ahead of the passing driver rather than opening one.",
        excerptKey: "emergency-turn-away",
        sourceLabel: `${GUIDE} - Chapter 8, Overtaking vehicle in danger`,
        sourceUrl: hb(113),
      },
      {
        id: "la_s4_19",
        topic: "speed",
        question:
          "Which stretch of Louisiana highway does the guide name as carrying a 75 mph limit?",
        choices: [
          "Parts of I-10",
          "Parts of I-12",
          "Parts of I-20",
          "Parts of I-49",
        ],
        correctIndex: 3,
        explanation:
          "Portions of I-49. It is the one place the guide names a figure above the 70 mph maximum, and it exists because the department may declare a speed zone above the statutory ceiling.",
        context:
          "Speed zones cut both ways. The same statutory power lets the Department of Transportation and Development set a lower maximum where an engineering study shows the standard limit is unsafe, based on design speed, road geometry, surrounding land use and crash history.",
        trap: "A 75 mph stretch does not raise the interstate maximum generally. Everywhere else on an interstate the ceiling is still 70 unless posted otherwise.",
        excerptKey: "i49-75",
        sourceLabel: `${GUIDE} - Chapter 10, Driving`,
        sourceUrl: hb(129),
      },
      {
        id: "la_s4_20",
        topic: "parking",
        question:
          "You are parked at the curb and about to open your door into the street. What does the guide tell you?",
        choices: [
          "Open it quickly, so you are exposed for less time",
          "Open it a crack and wait for traffic to stop",
          "Look carefully for other vehicles, especially bicycles, first",
          "Use the passenger door in every case",
        ],
        correctIndex: 2,
        explanation:
          "Look first, and bicycles are named specifically. The guide points out the other driver may not see the door opening in time.",
        context:
          "In the bicycle chapter the guide goes further and assigns fault: a collision caused by opening a car door into traffic is the driver's fault. It also tells you to give a cyclist the whole lane when they are passing parked cars, precisely because doors open.",
        trap: "Mirrors miss a cyclist right beside the car. The look has to be over your shoulder.",
        excerptKey: "bicycle-door-fault",
        sourceLabel: `${GUIDE} - Chapter 5, Sharing the Road with Bicycles`,
        sourceUrl: hb(80),
      },
      {
        id: "la_s4_21",
        topic: "rules",
        question:
          "Louisiana law forbids driving with which of these in place?",
        choices: [
          "A dashboard camera mounted on the windshield",
          "A rear window sticker",
          "A phone mount clipped to an air vent",
          "Non-transparent material on the windshield or front side windows",
        ],
        correctIndex: 3,
        explanation:
          "Non-transparent material on the front windshield or the front side windows is illegal unless a physician has prescribed it.",
        context:
          "It sits in the same list as a set of rules about what a vehicle may carry and where: no passenger under 12 in an open truck bed, no passenger of any age in an open truck bed on an interstate, no riding in a house trailer being towed, and headphones in both ears prohibited while one ear alone is allowed.",
        trap: "A medical exemption exists, but it is a prescription, not a preference.",
        excerptKey: "window-tint",
        sourceLabel: `${GUIDE} - Chapter 6, Other Laws You Should Know`,
        sourceUrl: hb(96),
      },
      {
        id: "la_s4_22",
        topic: "sharing",
        question:
          "Which people must be given the right of way at all times in Louisiana, in or out of a crosswalk?",
        choices: [
          "Children under 12",
          "Anyone with a bicycle they are walking",
          "Anyone in a uniform directing traffic",
          "Pedestrians using a guide dog or a white cane",
        ],
        correctIndex: 3,
        explanation:
          "Guide dog and white cane users, with or without a red tip, are given the right of way at all times. The guide devotes a section to how to behave around them.",
        context:
          "The practical advice matters as much as the rule: drive right up to the crosswalk rather than stopping more than five feet short, because the pedestrian is listening for your engine. Do not give verbal directions, do not honk, do not stop in the middle of a crosswalk, and do not turn right on red without looking first.",
        trap: "Stopping well back feels considerate and is exactly wrong. It removes the sound cue the pedestrian is using.",
        excerptKey: "white-cane-right-of-way",
        sourceLabel: `${GUIDE} - Chapter 5, Visually Impaired Pedestrians`,
        sourceUrl: hb(77),
      },
      {
        id: "la_s4_23",
        topic: "safety",
        question:
          "How does the guide say you should adjust your side mirrors?",
        choices: [
          "So you can just barely see the side of your own car from a normal seating position",
          "As far outward as possible, so their view just overlaps the center mirror",
          "Angled down, so you can see the lane markings beside you",
          "So the horizon sits in the middle of each mirror",
        ],
        correctIndex: 1,
        explanation:
          "Outward, until each side mirror just picks up where the center mirror stops. That is what removes the blind spot rather than duplicating the view you already have.",
        context:
          "The method is physical: lean your head against the driver's window and set the left mirror so you can barely see your own car, then lean to the center of the car and set the right one the same way. A passing car should appear in the side mirror before it fully leaves the center mirror.",
        trap: "Seeing the side of your own car in both mirrors feels reassuring. It is the setting that creates the blind spot.",
        excerptKey: "blind-spots-defined",
        sourceLabel: `${GUIDE} - Chapter 5, Rear View Mirrors and Blind Spots`,
        sourceUrl: hb(63),
      },
      {
        id: "la_s4_24",
        topic: "impairment",
        question:
          "Which of these will sober up a driver who has been drinking?",
        choices: [
          "Black coffee",
          "A cold shower",
          "Vigorous exercise",
          "Nothing except time",
        ],
        correctIndex: 3,
        explanation:
          "Only time. Once alcohol is in the blood, the guide says there is nothing you can do to lessen the effect - the liver and kidneys work at their own pace.",
        context:
          "Alcohol is a depressant, not a stimulant. It reaches the brain in about 20 minutes and works on the parts that control judgment and skill. Feeling stimulated after a drink is the loss of caution, not an increase in ability.",
        trap: "Coffee makes an impaired driver an awake impaired driver, which is arguably worse because they feel capable.",
        excerptKey: "alcohol-nothing-sobers",
        sourceLabel: `${GUIDE} - Chapter 9, Alcohol`,
        sourceUrl: hb(122),
      },
      {
        id: "la_s4_25",
        topic: "signs",
        question:
          "You are driving on a divided highway and see red raised reflectors ahead of you in your own lane. What do they mean?",
        choices: [
          "The lane is closed for maintenance",
          "A toll plaza is ahead",
          "You are facing the wrong way and must not enter",
          "The pavement changes surface",
        ],
        correctIndex: 2,
        explanation:
          "Red reflectors face drivers who are going against the direction of travel. Seeing red means you are on a roadway you must not enter.",
        context:
          "They usually appear alongside DO NOT ENTER and WRONG WAY signs at ramps and crossovers. From the correct direction the same markers show white or amber, so red in your headlights is unambiguous.",
        trap: "At night, on an unfamiliar interchange, the reflectors will show up before the signs do. They are the earliest warning you get.",
        excerptKey: "marking-red-reflectors",
        sourceLabel: `${GUIDE} - Chapter 3, Lane Markings`,
        sourceUrl: hb(35),
      },
      {
        id: "la_s4_26",
        topic: "rightOfWay",
        question:
          "Two vehicles reach an uncontrolled intersection from different roads at about the same time. Who yields?",
        choices: [
          "The driver on the left yields to the driver on the right",
          "The driver on the right yields to the driver on the left",
          "The faster vehicle yields",
          "The vehicle on the narrower road yields",
        ],
        correctIndex: 0,
        explanation:
          "Left yields to right. R.S. 32:121 states the general rule, and it is then modified at through highways and wherever signs or signals say otherwise.",
        context:
          "The same right-hand tie-break appears again at four-way stops when two drivers stop together. It only decides genuinely simultaneous arrivals; anywhere one driver clearly got there first, arrival order settles it.",
        trap: "The rule is a tie-break, not a licence. The guide warns that having the right of way does not guarantee your safety and tells you to let a driver who is not following the rules have it.",
        excerptKey: "stat-row-left-yields",
        sourceLabel: `${RS} 32:121 - Vehicle approaching or entering intersection`,
        sourceUrl: stat(88029),
      },
      {
        id: "la_s4_27",
        topic: "rules",
        question:
          "You are on a controlled-access highway and realize you should have taken the last exit. What may you not do?",
        choices: [
          "Take the next exit and turn around",
          "Continue to the next interchange",
          "Use a marked emergency crossover",
          "Back up along the shoulder to the exit",
        ],
        correctIndex: 3,
        explanation:
          "Backing on the shoulder or roadway of a controlled-access highway is prohibited outright, and the guide calls it one of the most dangerous things you can do.",
        context:
          "Backing anywhere else is only permitted when it can be done safely without interfering with traffic. On the interstate the guide's instruction is to keep going, take the next exit, and come back.",
        trap: "The shoulder feels separate from the traffic lanes. Vehicles leave the road onto it at 70 mph.",
        excerptKey: "backing-controlled-access",
        sourceLabel: `${GUIDE} - Chapter 6, Other Laws You Should Know`,
        sourceUrl: hb(96),
      },
      {
        id: "la_s4_28",
        topic: "emergencies",
        question:
          "You have broken down at night on a rural road with no shoulder lights. Where do the flares go?",
        choices: [
          "Beside the car, on the traffic side",
          "At least 100 feet behind the car",
          "Directly under the rear bumper",
          "About 30 feet in front of the car",
        ],
        correctIndex: 1,
        explanation:
          "At least 100 feet behind, so an approaching driver has time to react. The guide pairs that with the dome light on to make the car visible.",
        context:
          "The rest of the routine: reflectorized triangles or hazard flashers, hood raised, a white cloth on the antenna or out a window, and everyone away from the traffic side of the car. If the vehicle is safely off the road you wait inside with the doors locked; if it is in the roadway you stand clear of it.",
        trap: "Standing behind or beside the car to wave traffic down is what turns a breakdown into a fatality. The guide tells you not to try to flag anyone down.",
        excerptKey: "breakdown-flares",
        sourceLabel: `${GUIDE} - Chapter 8, Breakdowns`,
        sourceUrl: hb(118),
      },
      {
        id: "la_s4_29",
        topic: "signals",
        question:
          "You are turning right on a green circular light and a pedestrian steps into the crosswalk you are turning across. Who has the right of way?",
        choices: [
          "You do, because your light is green",
          "Whoever entered the intersection first",
          "You do, if the pedestrian started late",
          "The pedestrian",
        ],
        correctIndex: 3,
        explanation:
          "The pedestrian. The statute makes vehicular traffic facing a circular green, including vehicles turning right or left, stop and yield to pedestrians lawfully in an adjacent crosswalk.",
        context:
          "The pedestrian's walk signal and your green run at the same time by design, so the conflict is built into the intersection rather than being anyone's mistake. The guide adds a separate rule: pedestrians have the right of way over a vehicle making a right turn on red.",
        trap: "A green light governs your conflict with other vehicles. It does not settle your conflict with people on foot.",
        excerptKey: "stat-signal-green",
        sourceLabel: `${RS} 32:232 - Traffic-control signals`,
        sourceUrl: stat(88198),
      },
      {
        id: "la_s4_30",
        topic: "speed",
        question:
          "What speed does the guide suggest inside a roundabout?",
        choices: [
          "Around 15 to 20 mph",
          "Around 25 mph",
          "Around 30 mph",
          "The posted limit of the road you came in on",
        ],
        correctIndex: 0,
        explanation:
          "Fifteen to twenty on entry, and the guide's earlier roundabout section says speeds of 15 mph or less are adequate once inside.",
        context:
          "The low speed is a consequence of the geometry: entering means negotiating a sharp curve, and the tight radius is what makes roundabouts safer than a signalized crossroads. It also gives you time to read the destination signs and pick your exit.",
        trap: "Carrying the approach speed into the circle is what makes drivers brake mid-ring, which the guide forbids.",
        excerptKey: "roundabout-speed",
        sourceLabel: `${GUIDE} - Chapter 6, Roundabouts and Traffic Circles`,
        sourceUrl: hb(91),
      },
      {
        id: "la_s4_31",
        topic: "safety",
        question:
          "The guide describes a driving process it calls SIPDE. What does the D stand for?",
        choices: [
          "Detect the hazard in your mirrors",
          "Deduce the other driver's intention",
          "Delay until the hazard clears",
          "Decide on a safe action",
        ],
        correctIndex: 3,
        explanation:
          "Decide. The full sequence is sweep, search and scan; identify hazards; predict which could conflict with you; decide on a safe action; and execute the move.",
        context:
          "The predict step asks two things of you: the worst case, and what you would do about it. That is what turns scanning into a plan, and it is why the guide pairs SIPDE with the 20 to 30 second visual lead.",
        trap: "Identifying a hazard is not the same as having decided what to do about it. The gap between those two is where reaction time goes.",
        excerptKey: "sipde",
        sourceLabel: `${GUIDE} - Chapter 5, Defensive Driving Techniques`,
        sourceUrl: hb(55),
      },
      {
        id: "la_s4_32",
        topic: "sharing",
        question:
          "How old must a child be before Louisiana stops requiring a bicycle helmet?",
        choices: [
          "10",
          "12",
          "14",
          "16",
        ],
        correctIndex: 1,
        explanation:
          "Twelve. Below that age no parent or guardian may let a child ride, or ride as a passenger, without an approved helmet fastened securely.",
        context:
          "The same twelve-year line covers passengers in the open bed of a truck. A separate rule attaches to weight and height: a bicycle passenger under 40 pounds or under 40 inches must be in an approved restraining seat.",
        trap: "The duty sits on the adult, not on the child. It is the parent or guardian who is in breach.",
        excerptKey: "bicycle-helmet-under-12",
        sourceLabel: `${GUIDE} - Chapter 5, Bicycling Safety`,
        sourceUrl: hb(81),
      },
      {
        id: "la_s4_33",
        topic: "impairment",
        question:
          "Which of these does Louisiana treat exactly the same as driving under the influence of alcohol?",
        choices: [
          "Driving while extremely tired",
          "Driving with a prescription drug that impairs you",
          "Driving after a heavy meal",
          "Driving with a passenger who is drunk",
        ],
        correctIndex: 1,
        explanation:
          "Louisiana provides the same penalty for driving under the influence of drugs as for alcohol, and the guide says that includes prescribed and over-the-counter medication.",
        context:
          "Implied consent runs to drugs as well as alcohol, so a chemical test can be directed for either. The guide's illness chapter goes through the classes to watch: antidepressants, pain relievers, sleep aids and sedatives on prescription, and cold, allergy, pep and diet preparations over the counter.",
        trap: "Having a prescription is not a defense to impairment. The label warning is the thing to read.",
        excerptKey: "drugs-same-penalty",
        sourceLabel: `${GUIDE} - Chapter 9, Drugs`,
        sourceUrl: hb(125),
      },
      {
        id: "la_s4_34",
        topic: "parking",
        question:
          "What is the access aisle beside some accessible parking spaces for?",
        choices: [
          "Overflow parking for short stops",
          "A motorcycle or scooter parking area",
          "A pedestrian route to the building",
          "Loading and unloading equipment safely",
        ],
        correctIndex: 3,
        explanation:
          "It is the space needed to get a wheelchair or other equipment in and out of the vehicle. Blocking it is a violation in its own right.",
        context:
          "The guide is explicit that blocking is not only physical obstruction of the entrance: leaving shopping carts, motorized carts or a motorcycle in the aisle blocks its intended use just as effectively. Violators can be towed at their own cost.",
        trap: "An empty striped area looks like unused pavement. It is the only reason the adjacent space works.",
        excerptKey: "painted-curbs",
        sourceLabel: `${GUIDE} - Chapter 5, Parking`,
        sourceUrl: hb(70),
      },
      {
        id: "la_s4_35",
        topic: "licensing",
        question:
          "How long does Louisiana keep a DWI conviction on your public driving record?",
        choices: [
          "Three years",
          "Five years",
          "Seven years",
          "Ten years",
        ],
        correctIndex: 3,
        explanation:
          "Ten years for a DWI, against five years for other traffic convictions and collisions. Convictions from other states go on the same record.",
        context:
          "The record is public, and the guide notes it is what an insurer and an employer will see. Reinstatement after a suspension also requires a fee, and each conviction for driving while suspended adds another year to the suspension.",
        trap: "Five years is the general figure and it is the one people quote. DWI is the exception at ten.",
        excerptKey: "driving-record-five-years",
        sourceLabel: `${GUIDE} - Chapter 1, Your Driving Record`,
        sourceUrl: hb(11),
      },
    ],
  },
  {
    id: "set-5",
    setNumber: 5,
    title: "The Ones People Fail On",
    difficulty: "hard",
    description:
      "Built from what Louisiana learners say goes wrong: the numbers the guide never prints, the two clocks for new arrivals, the rules people argue about on the way home from the OMV, and the ones the road test examiner is watching for.",
    questions: [
      {
        id: "la_s5_01",
        topic: "signals",
        question:
          "A driver tells you a flashing yellow light means the signal is about to turn red. Are they right?",
        choices: [
          "Yes, it is the last warning before red",
          "No - it means slow down, look, and proceed with caution",
          "Yes, but only at intersections with a pedestrian signal",
          "No - it means the same as a flashing red",
        ],
        correctIndex: 1,
        explanation:
          "The warning that red is next is the steady yellow. A flashing yellow is a standing caution: slow down, look for traffic entering, proceed carefully, and stop if traffic is already in the intersection.",
        context:
          "Louisiana runs three yellow states that get confused with each other. Steady yellow ends a green. Flashing yellow is a permanent caution at a junction with no phase changes. Flashing yellow arrow permits a left turn after you yield, because the oncoming traffic has a green.",
        trap: "Treating a flashing yellow as a countdown produces exactly the wrong behavior: accelerating into an intersection you were supposed to slow for.",
        excerptKey: "signal-flashing-yellow",
        sourceLabel: `${GUIDE} - Chapter 3, Traffic Signals`,
        sourceUrl: hb(33),
        commonlyMissed: true,
      },
      {
        id: "la_s5_02",
        topic: "rules",
        question:
          "You are turning left from a two-lane street into a four-lane road, and another driver is turning right into the same road from the opposite corner. Which lane is yours?",
        choices: [
          "Either lane - first one there takes their pick",
          "The outside lane, since you have further to travel",
          "The inside lane, nearest the centerline",
          "Whichever lane the other driver does not take",
        ],
        correctIndex: 2,
        explanation:
          "You take the inside lane and they take the outside one. Each of you finishes in the lane nearest the side of the road you came from, which is why the two turns can happen at once.",
        context:
          "The statute describes it as leaving the intersection to the right of the centerline of the road being entered. The guide's shorter version, in its rules for turning, is that you always finish your turn in the proper lane and never cut a corner so sharply that you end up in front of someone approaching from the left.",
        trap: "Sweeping into the outside lane feels natural on a wide turn, and it collides with the driver turning right into the lane that was rightfully theirs.",
        excerptKey: "finish-turn-proper-lane",
        sourceLabel: `${GUIDE} - Chapter 6, Rules for Turning`,
        sourceUrl: hb(90),
        commonlyMissed: true,
      },
      {
        id: "la_s5_03",
        topic: "licensing",
        question:
          "You are 25, have never held a licence anywhere, and want a Louisiana Class E. What driver education do you need?",
        choices: [
          "None, because you are over 18",
          "A 6-hour pre-licensing class plus 8 hours behind the wheel",
          "The full 30 hours of classroom plus 8 behind the wheel, same as a teenager",
          "An online course only",
        ],
        correctIndex: 1,
        explanation:
          "Adults get a shorter route: 6 hours of pre-licensing classroom instruction plus 8 hours behind the wheel. The 30-plus-8 course is the alternative, not a requirement.",
        context:
          "The OMV publishes the two options side by side for a first-time adult applicant. Either way you need a Temporary Instructional Permit first, the provider gives both the knowledge and skills tests, and you must never have been issued a licence before for the requirement to apply at all.",
        trap: "Being an experienced driver from another country does not exempt you. Louisiana does not transfer a foreign licence, so the course is still required.",
        excerptKey: "omv-adult-courses",
        sourceLabel: `${OMV} - Class E First Time Driver's License, Adults`,
        sourceUrl: ADULTS,
        commonlyMissed: true,
      },
      {
        id: "la_s5_04",
        topic: "speed",
        question:
          "You are on a four-lane divided Louisiana highway with driveways along it and no posted speed sign. What is the maximum?",
        choices: [
          "55 mph, the general default",
          "60 mph",
          "65 mph",
          "70 mph, the state maximum",
        ],
        correctIndex: 2,
        explanation:
          "Sixty-five. A multi-lane divided highway with partial or no control of access sits between the 55 mph default and the 70 mph interstate figure.",
        context:
          "Control of access is the distinguishing feature. An interstate or controlled-access highway is 70. A divided highway you can drive onto from a business parking lot has partial or no control of access, and that is the 65 mph tier. Anything else with no posted limit is 55.",
        trap: "The guide never prints 65 or 55 at all, so a reader who studies only the book has one number and three kinds of road.",
        excerptKey: "stat-max-speed",
        sourceLabel: `${RS} 32:61 - Maximum speed limit`,
        sourceUrl: stat(88480),
        commonlyMissed: true,
      },
      {
        id: "la_s5_05",
        topic: "sharing",
        question:
          "A school bus is stopped with red lights flashing on the far side of a five-lane road whose middle lane is a two-way left turn lane. Must you stop?",
        choices: [
          "Yes, because a turn lane is not a barrier",
          "No, because a dedicated two-way left turn lane separates the directions",
          "Yes, unless you are more than 100 feet away",
          "Only if children are visible",
        ],
        correctIndex: 1,
        explanation:
          "On a four or five lane road split by a dedicated two-way left turn lane, drivers on the opposite side are not required to stop. It is one of the few carve-outs Louisiana allows.",
        context:
          "The same statute closes the obvious loophole immediately afterwards: a road with one lane in each direction plus a two-way left turn lane is not a divided highway, so there you do stop. The general escape is a physical separation - a ditch, a grassy median or a concrete barrier.",
        trap: "The turn lane exception depends on the road having four or five lanes. On a narrow road with the same center lane, the exception disappears.",
        excerptKey: "stat-school-bus-two-way-lane",
        sourceLabel: `${RS} 32:80 - Overtaking and passing certain school buses`,
        sourceUrl: stat(88593),
        commonlyMissed: true,
      },
      {
        id: "la_s5_06",
        topic: "licensing",
        question:
          "You hold a Louisiana learner's permit. May you use a hands-free phone while driving?",
        choices: [
          "Yes, hands-free is always permitted",
          "Yes, if the call is under a minute",
          "Yes, but only for navigation",
          "No - the learner's permit restriction bars cell phone use including hands-free",
        ],
        correctIndex: 3,
        explanation:
          "The 02 learner's permit restriction is absolute: no cell phone usage, including hands free. It is stricter than the rule that applies to adults.",
        context:
          "Above the permit, drivers 17 and under are prohibited from using cell phones for talk or text except in an emergency. Above that again, since Acts 2025 No. 288, every driver in Louisiana must be hands-free unless the vehicle is lawfully stationary.",
        trap: "Hands-free is what makes a call legal for an adult. It does not make it legal on a learner's permit.",
        excerptKey: "omv-gdl-no-cell",
        sourceLabel: `${OMV} - Louisiana Graduated Driver's License Laws`,
        sourceUrl: GDL_URL,
        commonlyMissed: true,
      },
      {
        id: "la_s5_07",
        topic: "rules",
        question:
          "Traffic is heavy and the center left-turn lane is empty. May you use it to get past the queue?",
        choices: [
          "Yes, if you signal and rejoin within 200 feet",
          "Yes, since it belongs to no direction in particular",
          "No - it may never be used for travel or passing",
          "Only where the outside line is broken rather than solid",
        ],
        correctIndex: 2,
        explanation:
          "Never. The guide is unambiguous: the lane is for left turn maneuvers only and must never be used for travel or passing.",
        context:
          "The 200-foot figure is a ceiling on how long you may occupy the lane while setting up an actual left turn, not a permitted running distance. Drivers coming the other way are using the same lane for their own turns, which is what makes travelling in it a head-on risk.",
        trap: "The 200-foot rule looks like permission to use the lane for a short distance. It is the maximum for a turn you are already committed to.",
        excerptKey: "two-way-left-turn-lane",
        sourceLabel: `${GUIDE} - Chapter 3, Lane Markings`,
        sourceUrl: hb(36),
        commonlyMissed: true,
      },
      {
        id: "la_s5_08",
        topic: "licensing",
        question:
          "You have lived in Louisiana for two months on a valid licence from another state. What is your position?",
        choices: [
          "Legal - non-residents may drive here for 90 days",
          "Legal, because your out-of-state licence has not expired",
          "Legal until your vehicle registration transfers",
          "In breach - residents have 30 days to get a Louisiana licence",
        ],
        correctIndex: 3,
        explanation:
          "Once residency is established the clock is 30 days, not 90. The 90-day allowance belongs to non-residents visiting on their home state's licence.",
        context:
          "When you do transfer you surrender the out-of-state licence, because holding more than one is unlawful in Louisiana, and you present one primary and one secondary document, your social security number and proof of insurance on any vehicle you have registered here.",
        trap: "The two numbers sit in the same paragraph of the guide and describe different people. Residency is what switches you from the 90-day rule to the 30-day one.",
        excerptKey: "nonresident-90-days",
        sourceLabel: `${GUIDE} - Chapter 1, Who Must Have a Driver's License?`,
        sourceUrl: hb(1),
        commonlyMissed: true,
      },
      {
        id: "la_s5_09",
        topic: "safety",
        question:
          "You are stopped by an officer and cannot find your insurance card, though the policy is current. What happens?",
        choices: [
          "Nothing, because the OMV can verify the policy electronically",
          "The vehicle's licence plate may be seized, and you get three working days to produce proof",
          "You are given 30 days to mail proof to the court",
          "The ticket is void once you produce the card in court",
        ],
        correctIndex: 1,
        explanation:
          "The plate can be seized on the spot. You then have three calendar days, excluding weekends and holidays, to bring proof to a Motor Vehicle office.",
        context:
          "Louisiana requires the evidence to be inside the vehicle whenever it is operated, and an image of the card on a phone is acceptable. If you miss the three days the plate is destroyed and you pay to re-register the vehicle. Giving false information about coverage can suspend the registration.",
        trap: "Having insurance is not the same as being able to prove it. The offense here is the missing document, not the missing policy.",
        excerptKey: "insurance-three-days",
        sourceLabel: `${GUIDE} - Chapter 11, Proof of Insurance`,
        sourceUrl: hb(136),
        commonlyMissed: true,
      },
      {
        id: "la_s5_10",
        topic: "rules",
        question:
          "You are doing exactly the speed limit in the left lane of a four-lane Louisiana highway and cars are backing up behind you. Are you in the right?",
        choices: [
          "Yes, nobody may lawfully pass you anyway",
          "Yes, because you are at the legal maximum",
          "Only if you move over at the next exit",
          "No - the left lane is for passing and slower traffic must keep right",
        ],
        correctIndex: 3,
        explanation:
          "Louisiana's lane rule is about position, not speed. You travel in the right lane except when turning left, passing, or when the right lanes are congested.",
        context:
          "Two extra clauses live in the same paragraph. No vehicle in the left lane may be driven slower than vehicles to its right, and any vehicle moving slower than the normal speed of traffic must use the right lane only. The guide separately warns that driving too slowly is a hazard because it provokes unsafe passes.",
        trap: "The speed limit does not license the left lane. Being at the limit and being slower than traffic can both be true at once.",
        excerptKey: "keep-right-law",
        sourceLabel: `${GUIDE} - Chapter 3, Lane Markings`,
        sourceUrl: hb(35),
        commonlyMissed: true,
      },
      {
        id: "la_s5_11",
        topic: "parking",
        question:
          "The guide's own R.S. 32:143 list says do not park more than 2 feet from the curb, while its Parking section says 18 inches. Which figure should you drive to?",
        choices: [
          "Whichever is easier in the space available",
          "Two feet, since the statutory list is the stricter source",
          "Eighteen inches, which satisfies both",
          "Neither - the distance is only enforced where signs are posted",
        ],
        correctIndex: 2,
        explanation:
          "Park within 18 inches and you have satisfied both readings at once. The guide states 18 inches as a flat requirement in its own parking instructions, and 18 inches is also less than 2 feet.",
        context:
          "This is a real inconsistency inside the book rather than a trick. The safest rule for both the road test and the street is the tighter number, because an examiner measuring against 18 inches will not fail a car parked closer.",
        trap: "Picking the looser figure because it appears in the statutory-looking list is the wrong instinct. When two official numbers conflict, the one that satisfies both is the one to drive to.",
        excerptKey: "parallel-park-18-inches",
        sourceLabel: `${GUIDE} - Chapter 5, Parking`,
        sourceUrl: hb(70),
      },
      {
        id: "la_s5_12",
        topic: "signals",
        question:
          "How long before you change lanes on a Louisiana highway must you signal?",
        choices: [
          "Continuously for at least 100 feet",
          "For at least 3 seconds",
          "For at least 200 feet",
          "Just before you begin the movement",
        ],
        correctIndex: 0,
        explanation:
          "One hundred feet, given continuously, is the statutory standard, and the guide suggests longer at higher speeds or in heavy traffic.",
        context:
          "The signal is only half of it. The guide's lane change sequence is mirror check, shoulder check for the blind spot, look for other drivers heading into the same gap, signal, look again in the direction you are going, then move. Changing lanes in or approaching an intersection is separately prohibited.",
        trap: "Signalling as you start to move is a signal to nobody. The point is to give the driver in the lane you want time to react.",
        excerptKey: "signalling-100-feet",
        sourceLabel: `${GUIDE} - Chapter 6, Signaling`,
        sourceUrl: hb(92),
      },
      {
        id: "la_s5_13",
        topic: "licensing",
        question:
          "Which of these subjects does Louisiana law specifically require the knowledge test to cover?",
        choices: [
          "Basic vehicle maintenance",
          "Hurricane evacuation routes",
          "Boat trailer weight limits",
          "Railroad and highway grade railroad safety, with at least two questions",
        ],
        correctIndex: 3,
        explanation:
          "R.S. 32:407 names it: not less than two questions relative to railroad and highway grade railroad safety. It is the one subject the statute puts a count on.",
        context:
          "The same sentence lists the rest of the syllabus: rules of the road, signs and signals, sharing the road with motorcycles and tractor-trailer trucks, distracted driving, trailer safety, appropriate conduct when stopped by a law enforcement officer, and accessible parking and access aisles.",
        trap: "Railroad crossings feel like a minor chapter. Two of your forty questions are guaranteed to be there.",
        excerptKey: "stat-gdl-test-content",
        sourceLabel: `${RS} 32:407 - Applications of minors`,
        sourceUrl: stat(88384),
        commonlyMissed: true,
      },
      {
        id: "la_s5_14",
        topic: "speed",
        question:
          "You are on an interstate at 70 mph in the rain and getting soaked with spray from the truck ahead. What is the correct response?",
        choices: [
          "Move closer so you spend less time in the spray",
          "Keep your position and use the wipers on full",
          "Overtake quickly, using the shoulder if necessary",
          "Slow down to open a larger gap and get out of the spray",
        ],
        correctIndex: 3,
        explanation:
          "Slow down and drop back. The gap that keeps the spray off your windshield is the same gap that gives you a view of the road ahead and room to stop.",
        context:
          "In good conditions the guide wants four to five seconds behind a large truck. In poor conditions it wants more. Passing a truck you cannot see past is precisely what it tells you not to do, and passing on the shoulder is prohibited whether or not it is paved.",
        trap: "Tucking in behind a truck feels like it shortens the exposure. It puts you in the one place the driver cannot see you and where you cannot see anything.",
        excerptKey: "truck-following-4-5",
        sourceLabel: `${GUIDE} - Chapter 5, Following trucks`,
        sourceUrl: hb(84),
      },
      {
        id: "la_s5_15",
        topic: "rightOfWay",
        question:
          "You have the right of way at an intersection but the other driver is clearly not going to stop. What does the guide tell you to do?",
        choices: [
          "Proceed, since insisting on your right of way is what makes the system work",
          "Let them have it, even though the law says it is yours",
          "Sound your horn and continue at the same speed",
          "Stop in the intersection to block them",
        ],
        correctIndex: 1,
        explanation:
          "The guide states it as a principle: the law says who must yield, it does not give anyone the right of way, and you should never insist on taking it.",
        context:
          "That framing changes how the whole right-of-way chapter reads. Every entry on the list is a duty on one driver rather than a privilege for the other, which is why having a green, being on the through road or being the vehicle on the right never guarantees safety on its own.",
        trap: "Being legally right is no protection at an intersection. The guide puts the point plainly: having the right of way does not guarantee your safety.",
        excerptKey: "row-not-a-right",
        sourceLabel: `${GUIDE} - Chapter 6, Right of Way`,
        sourceUrl: hb(93),
      },
      {
        id: "la_s5_16",
        topic: "impairment",
        question:
          "How long must an SR-22 be maintained after a Louisiana DWI-related suspension?",
        choices: [
          "One year",
          "Two years",
          "Three years from the date of conviction",
          "Five years from reinstatement",
        ],
        correctIndex: 2,
        explanation:
          "Three years from the date of conviction. It is high-risk insurance and it must be filed before your driving privileges come back at all.",
        context:
          "The alternative to the SR-22 is $30,000 in cash or security deposited with the department. Either way the requirement sits on top of the suspension period, the reinstatement fee, and any court-ordered community service, driver improvement program or substance abuse treatment.",
        trap: "The suspension ending is not the end of the consequences. The insurance requirement runs on for three years past the conviction.",
        excerptKey: "sr22-requirement",
        sourceLabel: `${GUIDE} - Chapter 9, Administrative Per Se`,
        sourceUrl: hb(126),
      },
      {
        id: "la_s5_17",
        topic: "sharing",
        question:
          "May you cross a solid yellow no-passing line to get around a cyclist in Louisiana?",
        choices: [
          "Yes, when it is safe to do so",
          "No, a no-passing zone admits no exception",
          "Only if the cyclist waves you through",
          "Only on a road posted below 35 mph",
        ],
        correctIndex: 0,
        explanation:
          "Louisiana's bicycle passing law allows it: a motorist may pass a bicycle travelling in the same direction in a no-passing zone only when it is safe to do so.",
        context:
          "The same section carries the three-foot clearance requirement, which you have to maintain until you are safely past. The two rules work together, because three feet often cannot be found without using part of the oncoming lane.",
        trap: "The exception is narrow and conditional. It permits passing a bicycle when safe, not passing a slow car, and safe still means you can see far enough ahead.",
        excerptKey: "stat-bicycle-three-feet",
        sourceLabel: `${RS} 32:76.1 - Limitations on passing bicycles`,
        sourceUrl: stat(670621),
        commonlyMissed: true,
      },
      {
        id: "la_s5_18",
        topic: "licensing",
        question:
          "A 16-year-old with a Louisiana intermediate licence wants to drive four friends to a movie at 7 p.m. What does the law allow?",
        choices: [
          "All four, as long as everyone is belted",
          "Two passengers under 21",
          "Three passengers, one in front and two in back",
          "One passenger under 21 who is not immediate family",
        ],
        correctIndex: 3,
        explanation:
          "Between 6 p.m. and 5 a.m. an intermediate licensee may not carry more than one passenger under 21 who is not immediate family, unless a licensed adult over 21 is in the car.",
        context:
          "That is a separate restriction from the curfew, which bars driving at all between 11 p.m. and 5 a.m. without a licensed parent, guardian, adult over 21 or sibling over 18. Immediate family members do not count against the passenger limit, and the licensee may not put the car in motion until everyone is belted.",
        trap: "The passenger clock starts at 6 p.m., five hours before the driving curfew. An early evening trip is already restricted.",
        excerptKey: "stat-gdl-passenger",
        sourceLabel: `${RS} 32:407 - Applications of minors`,
        sourceUrl: stat(88384),
        commonlyMissed: true,
      },
      {
        id: "la_s5_19",
        topic: "safety",
        question:
          "You are driving in fog so thick you cannot see the road. What does the guide tell you to do?",
        choices: [
          "Switch on your high beams and continue slowly",
          "Creep along at 10 to 20 mph with hazard lights on",
          "Slow down, get off the highway, and stop somewhere safe",
          "Follow the tail lights of the vehicle ahead",
        ],
        correctIndex: 2,
        explanation:
          "If the fog is dense enough to impair your vision, the guide says you should not be driving at all. If you must, slow down and get off the highway at the first safe place.",
        context:
          "It names creeping along at 10 to 20 mph on the highway as risking your life, because the red tail light ahead may be a stopped vehicle and the driver behind may be going much faster. Low beams, not high, are the setting: high beams reflect off the moisture and reduce what you can see.",
        trap: "Slow enough feels safe. On a highway, being much slower than the traffic behind you is its own hazard.",
        excerptKey: "fog-driving",
        sourceLabel: `${GUIDE} - Chapter 7, Weather Changes`,
        sourceUrl: hb(106),
      },
      {
        id: "la_s5_20",
        topic: "parking",
        question:
          "How far from a stop sign or traffic signal at the side of the road may you park in Louisiana?",
        choices: [
          "10 feet",
          "15 feet",
          "20 feet",
          "30 feet",
        ],
        correctIndex: 2,
        explanation:
          "Twenty feet on the approach, and the same figure covers a yield sign or a flashing beacon at the roadside. The point is not to hide the device from the driver behind you.",
        context:
          "The statute adds a catch-all in the same list: no parking anywhere that will obscure or obstruct visibility of any traffic control device. So a legal-looking gap that puts your van in front of a stop sign is still a violation.",
        trap: "Twenty feet from the sign is measured on the approach, not from the intersection, and it is a different distance from the 15 feet for a hydrant.",
        excerptKey: "parking-signal-20-feet",
        sourceLabel: `${GUIDE} - Chapter 5, Parking (R.S. 32:143)`,
        sourceUrl: hb(70),
      },
      {
        id: "la_s5_21",
        topic: "rules",
        question:
          "A driver behind you flashes their turn signal on one side to tell you it is clear to pass. Is that lawful in Louisiana?",
        choices: [
          "Yes, it is a recognized courtesy signal",
          "Yes, provided they are a commercial driver",
          "Only at night",
          "No - using signals as a do-pass signal is prohibited",
        ],
        correctIndex: 3,
        explanation:
          "The statute forbids it. Signals may not be flashed as a courtesy or do-pass signal to drivers approaching from the rear.",
        context:
          "The same subsection bans flashing signals on one side only of a parked or disabled vehicle. Signals exist to say what your own vehicle is about to do: turn, change lanes, or move off from a parked position.",
        trap: "It looks like good manners, and truck drivers do it. It transfers the judgment of an oncoming gap to a driver who cannot see the gap.",
        excerptKey: "stat-no-do-pass-signal",
        sourceLabel: `${RS} 32:104 - Turning movements and required signals`,
        sourceUrl: stat(88023),
      },
      {
        id: "la_s5_22",
        topic: "impairment",
        question:
          "A first DWI conviction in Louisiana carries a maximum licence loss of how long?",
        choices: [
          "90 days",
          "180 days",
          "One year",
          "Two years",
        ],
        correctIndex: 2,
        explanation:
          "One year, 365 days, as the maximum on a first conviction, alongside up to six months in jail and a $1,025 fine plus court costs.",
        context:
          "The ladder from there is steep. A second conviction is up to two years with 48 hours mandatory jail. A third is a felony, one to five years in prison with 30 days mandatory, and the vehicle may be seized and sold. The guide estimates a first conviction costs about $4,500 all in.",
        trap: "The administrative suspension for the test result and the court's licence loss on conviction are separate consequences of the same arrest.",
        excerptKey: "dwi-first-conviction",
        sourceLabel: `${GUIDE} - Chapter 9, Penalty for Driving While Intoxicated`,
        sourceUrl: hb(124),
      },
      {
        id: "la_s5_23",
        topic: "signals",
        question:
          "You are approaching an intersection and want to change lanes just before it. What does the guide say?",
        choices: [
          "Do it early, before the stop line",
          "Do it only if you signal for 200 feet",
          "It is fine on a green light",
          "Do not - lane changes at or approaching an intersection are dangerous and illegal",
        ],
        correctIndex: 3,
        explanation:
          "The guide calls it both dangerous and illegal, and tells you to wait until you have passed through the intersection.",
        context:
          "The reason is the sheer number of conflicts already present: cross traffic, turning vehicles, cyclists and pedestrians. The guide extends the same caution to controlled and uncontrolled intersections and to the multiple shopping center entrances that function as intersections.",
        trap: "Missing your turn is recoverable. The guide's advice is to take the next exit and turn around rather than making a hurried lane change.",
        excerptKey: "lane-change-intersection",
        sourceLabel: `${GUIDE} - Chapter 6, Delaying or adjusting a lane change`,
        sourceUrl: hb(88),
      },
      {
        id: "la_s5_24",
        topic: "licensing",
        question:
          "You have an out-of-state learner's permit and you are driving in Louisiana. Who must be with you?",
        choices: [
          "Nobody, if your home state allows solo practice",
          "Any licensed driver over 18",
          "A licensed parent or guardian only",
          "A licensed adult at least 21 years old",
        ],
        correctIndex: 3,
        explanation:
          "Louisiana's supervision standard applies while you are here: a licensed parent, guardian or adult at least 21, or a licensed sibling at least 18.",
        context:
          "For a Louisiana learner's permit that supervision requirement is written into the 02 restriction itself. Someone 16 who moves in from another state with a permit held for at least 180 days may be able to start at the intermediate stage instead of beginning again.",
        trap: "Bringing your own state's rules with you does not work. The permit travels; the supervision rule is local.",
        excerptKey: "stat-gdl-learner",
        sourceLabel: `${RS} 32:407 - Applications of minors`,
        sourceUrl: stat(88384),
      },
      {
        id: "la_s5_25",
        topic: "speed",
        question:
          "The road is posted at 55 mph, visibility is poor and the surface is wet. Can you be cited for speeding at 50?",
        choices: [
          "Yes - too fast for conditions applies below the posted limit",
          "No, the posted limit is a defense",
          "Only if a crash results",
          "Only in a construction zone",
        ],
        correctIndex: 0,
        explanation:
          "Yes. The guide says directly that you may be cited for traveling too fast for conditions when above the legal limitations, and gives 55 mph in a snowstorm as its example.",
        context:
          "The General Speed Law makes reasonable and prudent the actual standard, with due regard for traffic, the surface and width of the highway, and the weather. The posted number is the ceiling in ideal conditions, and it never rises to meet the conditions you are in.",
        trap: "Under the limit is not the same as at a lawful speed. The number on the sign was set for a dry road in daylight.",
        excerptKey: "general-speed-law",
        sourceLabel: `${GUIDE} - Chapter 6, Speed`,
        sourceUrl: hb(87),
        commonlyMissed: true,
      },
      {
        id: "la_s5_26",
        topic: "sharing",
        question:
          "You are waiting to turn left and an oncoming bicycle is approaching. Why is judging its speed harder than judging a car's?",
        choices: [
          "Bicycles vary from under 10 mph to over 35 mph",
          "Bicycles always travel faster than they appear",
          "Bicycles are required to yield to turning vehicles",
          "Bicycles are exempt from the speed limit",
        ],
        correctIndex: 0,
        explanation:
          "The range is enormous. A bicycle can be doing 8 mph or 35, and the guide says speeds of bicycles are hard to judge for that reason.",
        context:
          "The rule itself is unchanged: a driver turning left waits until oncoming bicyclists pass, exactly as for a car. The guide's remedy for the judgment problem is to look once and then look again, and to make sure you know the bicycle's speed before you commit.",
        trap: "A bicycle that looks slow because it is small and far away can arrive much sooner than the gap suggested.",
        excerptKey: "bicycle-left-turn-wait",
        sourceLabel: `${GUIDE} - Chapter 5, Sharing the Road with Bicycles`,
        sourceUrl: hb(80),
      },
      {
        id: "la_s5_27",
        topic: "rules",
        question:
          "Where does the guide say the OMV road skills examiner will fail you outright?",
        choices: [
          "For stalling the engine once",
          "For any violation of a traffic law or any dangerous action",
          "For parking more than 12 inches from the curb",
          "For failing to use the parking brake",
        ],
        correctIndex: 1,
        explanation:
          "The list is short and absolute: a violation of any traffic law, any dangerous action or incident, lack of cooperation or refusal to follow instructions, a collision, or cumulative minor mistakes.",
        context:
          "Everything else is scored by deduction. The examiner grades backing, yielding, approach to corners, keeping in lane, parking between cars, use of signals, following others, attention, turning, and response to signs and signals, and will not ask you to do anything illegal.",
        trap: "Cumulative minor mistakes is the entry people overlook. A dozen small errors ends the test as surely as one big one.",
        excerptKey: "road-test-fail-reasons",
        sourceLabel: `${GUIDE} - Chapter 1, Road Skills (Driving) Test`,
        sourceUrl: hb(10),
      },
      {
        id: "la_s5_28",
        topic: "signals",
        question:
          "At what point must a vehicle facing a steady red signal have stopped, when there is no stop line and no crosswalk?",
        choices: [
          "Level with the near edge of the cross street",
          "Wherever the driver can see approaching traffic",
          "Ten feet back from the intersection",
          "Before entering the intersection",
        ],
        correctIndex: 3,
        explanation:
          "Before entering the intersection. The statute gives three places in order of preference: the marked stop line, then the near-side crosswalk, then the intersection edge.",
        context:
          "The same order applies at a red arrow, at a flashing red, and where a signal is mounted somewhere other than an intersection, in which case you stop at whatever sign or pavement marking indicates the point, or at the signal itself if none exists.",
        trap: "Rolling forward to see round an obstruction and stopping there is a stop in the wrong place, not a legal stop.",
        excerptKey: "stat-signal-red-turn",
        sourceLabel: `${RS} 32:232 - Traffic-control signals`,
        sourceUrl: stat(88198),
      },
      {
        id: "la_s5_29",
        topic: "safety",
        question:
          "How far ahead must other drivers be able to see your vehicle before Louisiana requires headlights in bad weather?",
        choices: [
          "200 feet",
          "300 feet",
          "500 feet",
          "1,000 feet",
        ],
        correctIndex: 2,
        explanation:
          "Five hundred feet. If conditions make it hard for other people to see your vehicle clearly from 500 feet, your headlights must be on.",
        context:
          "That is the third of Louisiana's three headlight triggers. The other two are the clock, sunset to sunrise, and the wipers, whenever moisture or precipitation makes you use them. Five hundred feet also appears in the high-beam rule: dim within 500 feet of an oncoming vehicle and within 200 feet of one you are following.",
        trap: "Daytime rain still triggers the rule. Waiting for it to feel dark misses two of the three triggers.",
        excerptKey: "headlights-500-feet-visibility",
        sourceLabel: `${GUIDE} - Chapter 5, Night Driving`,
        sourceUrl: hb(75),
      },
      {
        id: "la_s5_30",
        topic: "rightOfWay",
        question:
          "You are already in a roundabout and a vehicle is waiting to enter, holding up a queue. What should you do?",
        choices: [
          "Stop and wave them in to clear the queue",
          "Keep moving and take your exit",
          "Slow to walking pace so they can judge the gap",
          "Signal left to show you are staying in the circle",
        ],
        correctIndex: 1,
        explanation:
          "Keep going. The guide's instruction is unqualified: never stop once inside the roundabout, because the vehicle in the roundabout has the right of way.",
        context:
          "Signalling inside the ring is about exits, not courtesies. Right on approach if you are taking the first exit, nothing if you are going straight through, and left on approach then right once you are three quarters of the way around for a left turn.",
        trap: "Stopping to let someone in reverses the priority the whole junction depends on, and the driver behind you is not expecting it.",
        excerptKey: "roundabout-basics",
        sourceLabel: `${GUIDE} - Chapter 3, Roundabouts`,
        sourceUrl: hb(37),
        commonlyMissed: true,
      },
      {
        id: "la_s5_31",
        topic: "parking",
        question:
          "You have parked on a rural highway shoulder at dusk and left the car there. What does Louisiana require?",
        choices: [
          "Nothing, provided the car is off the traveled portion",
          "A warning triangle 100 feet behind",
          "Display appropriate signal lights to warn approaching traffic",
          "Removal of the licence plate",
        ],
        correctIndex: 2,
        explanation:
          "Between sunset and sunrise a vehicle left parked on any highway must display signal lights sufficient to warn approaching traffic that it is there.",
        context:
          "The same section requires that outside a business or residence district you park off the traveled part of the road wherever that is practicable, leave an unobstructed width for other traffic, and be visible from 200 feet in each direction. A vehicle left more than 24 hours can be treated as abandoned.",
        trap: "Being off the pavement is not enough after dark. The lights are a separate requirement.",
        excerptKey: "stat-park-off-highway",
        sourceLabel: `${RS} 32:141 - Stopping, standing, or parking outside business or residence districts`,
        sourceUrl: stat(88063),
      },
      {
        id: "la_s5_32",
        topic: "licensing",
        question:
          "Who normally administers the Louisiana knowledge test and road skills test?",
        choices: [
          "The OMV, at any field office",
          "The Louisiana State Police",
          "Any notary or title company",
          "Your driver education provider",
        ],
        correctIndex: 3,
        explanation:
          "The driver education provider gives both tests. Only students at a secondary school that does not offer the testing may ask the OMV to do it.",
        context:
          "Anyone who took a course at a private driving school after 1 August 2014 has to return to that school or another third-party tester for the skills test. If the OMV does administer it you supply the vehicle, and it must be currently licensed, inspected and insured.",
        trap: "Turning up at an OMV office expecting to sit the test is how a morning gets wasted. The tests usually live with the school, not the office.",
        excerptKey: "omv-tests-by-provider",
        sourceLabel: `${OMV} - Class E Learner's Permit Requirements`,
        sourceUrl: PERMITS,
        commonlyMissed: true,
      },
      {
        id: "la_s5_33",
        topic: "emergencies",
        question:
          "How much water on the road is enough to reach the bottom of most passenger cars?",
        choices: [
          "2 inches",
          "4 inches",
          "6 inches",
          "12 inches",
        ],
        correctIndex: 2,
        explanation:
          "Six inches, which is enough to cause loss of control or stall the engine. Two feet of moving water will carry most vehicles away.",
        context:
          "The guide's rule for flooded roads is to turn around and find another route rather than judge the depth, because floodwater hides dips and can have washed the road surface out from underneath. If there is no other route you go to higher ground and wait.",
        trap: "Shallow-looking water is the problem, not deep water. Nobody drives into what obviously looks impassable.",
        excerptKey: "flooded-roadway",
        sourceLabel: `${GUIDE} - Chapter 8, Flooded Roadways`,
        sourceUrl: hb(119),
      },
      {
        id: "la_s5_34",
        topic: "impairment",
        question:
          "Louisiana law treats operating a vehicle on public highways as consent to what?",
        choices: [
          "A chemical test of blood, breath, urine or other bodily substance for alcohol and drugs",
          "A search of the vehicle at any traffic stop",
          "A field sobriety test only",
          "A breath test only, and only if you are over 21",
        ],
        correctIndex: 0,
        explanation:
          "Implied consent covers blood, breath, urine or another bodily substance, and it tests for drugs as well as alcohol. It applies regardless of the driver's age.",
        context:
          "The test is directed by an officer with reasonable grounds to believe you were driving under the influence, and the agency decides in advance which test its officers use. Refusing is not free: the first refusal costs a year of driving privileges, more than a first failed test would.",
        trap: "Implied consent does not depend on you agreeing at the roadside. Refusing has its own, longer penalty.",
        excerptKey: "implied-consent",
        sourceLabel: `${GUIDE} - Chapter 9, Administrative Per Se`,
        sourceUrl: hb(126),
      },
      {
        id: "la_s5_35",
        topic: "rules",
        question:
          "How far must the pass be complete before you meet an oncoming vehicle on a two-lane Louisiana road?",
        choices: [
          "50 feet",
          "100 feet",
          "200 feet",
          "500 feet",
        ],
        correctIndex: 1,
        explanation:
          "One hundred feet. The statute requires the overtaking vehicle to be back on the right-hand side of the road before it comes within 100 feet of anything approaching.",
        context:
          "The margin is smaller than it sounds at closing speed. The guide adds a rule of thumb to go with it: an oncoming vehicle more than 25 seconds away appears to be standing still, so if you can see it closing, it is closer than 25 seconds and the pass is already marginal.",
        trap: "One hundred feet at a combined 120 mph is well under a second. It is the last moment the pass could have been legal, not a comfortable margin.",
        excerptKey: "stat-passing-100-feet",
        sourceLabel: `${RS} 32:75 - Limitations on passing on the left`,
        sourceUrl: stat(88557),
      },
    ],
  },
  {
    id: "set-6",
    setNumber: 6,
    title: "Exam Simulation",
    difficulty: "exam",
    description:
      "Thirty questions in the mix the real Louisiana knowledge test uses, with no scaffolding. Eighty percent passes, which means eight wrong answers end the attempt.",
    questions: [
      {
        id: "la_s6_01",
        topic: "signs",
        question: "Which sign shape is used only for yield signs in Louisiana?",
        choices: [
          "A downward-pointing triangle",
          "A sideways-pointing triangle",
          "A pentagon",
          "A vertical rectangle",
        ],
        correctIndex: 0,
        explanation:
          "The point-down triangle is reserved for yield. The sideways triangle marks a no-passing zone, and neither shape is used for anything else.",
        context:
          "Shape is Louisiana's first layer of meaning. Octagon is stop, point-down triangle is yield, diamond is a warning, vertical rectangle is regulatory, horizontal rectangle is a guide or temporary sign, and the crossbuck marks a railroad crossing.",
        trap: "Both triangles are red and white and the same size. Orientation is the whole difference.",
        excerptKey: "shape-yield-triangle",
        sourceLabel: `${GUIDE} - Chapter 3, Traffic Signs`,
        sourceUrl: hb(23),
      },
      {
        id: "la_s6_02",
        topic: "impairment",
        question: "What is the legal blood alcohol limit for a Louisiana driver aged 21 or older?",
        choices: ["0.02 percent", "0.04 percent", "0.08 percent", "0.10 percent"],
        correctIndex: 2,
        explanation:
          "0.08 percent at 21 and over. Under 21 it is 0.02, and in a commercial vehicle it is 0.04 whatever your age.",
        context:
          "Blowing 0.08 or more triggers an administrative suspension of 180 days on a first offense, separate from anything the court does, and a reading of 0.15 or more pushes that to two years.",
        trap: "The commercial figure of 0.04 catches drivers who assume their personal limit travels with them into a work vehicle.",
        excerptKey: "bac-limits",
        sourceLabel: `${GUIDE} - Chapter 9, Blood Alcohol Concentration`,
        sourceUrl: hb(123),
      },
      {
        id: "la_s6_03",
        topic: "rules",
        question:
          "You are approaching a railroad crossing where the lights are flashing. Where must you stop?",
        choices: [
          "Anywhere before the first rail",
          "At least 25 feet from the nearest rail",
          "Within 50 feet but not less than 15 feet from the nearest rail",
          "Within 100 feet of the crossing",
        ],
        correctIndex: 2,
        explanation:
          "The band is 50 feet to 15 feet from the nearest rail. Closer than 15 feet puts you inside the swing of the train.",
        context:
          "The same band applies when a gate is down, when a flagman signals, when a train sounds its horn and is close enough to be a hazard, when a train is plainly visible and near, and where a stop sign is posted at the crossing. Having stopped, you do not proceed until you can do so safely.",
        trap: "Trains overhang their rails by several feet on each side, which is why the near edge of the band is 15 feet rather than the rail itself.",
        excerptKey: "railroad-50-15",
        sourceLabel: `${GUIDE} - Chapter 6, Railroad Grade Crossing`,
        sourceUrl: hb(94),
      },
      {
        id: "la_s6_04",
        topic: "signals",
        question:
          "The green light you are approaching has been green for a long time. What does the guide suggest?",
        choices: [
          "Maintain speed, since it will stay green for you",
          "Cover the brake and be ready to stop",
          "Sound the horn on approach",
          "Change lanes to the left",
        ],
        correctIndex: 1,
        explanation:
          "A long green is a stale green. The guide tells you to start slowing and be ready to stop, because it may change before you get there.",
        context:
          "It sits inside the scanning chapter, alongside watching for brake lights ahead and for vehicles entering your lane. Seeing the change coming means you slow gradually, which also gives the driver behind you time to react.",
        trap: "The alternative is arriving at the stop line already committed, which is where drivers run the yellow.",
        excerptKey: "visual-lead-20-30",
        sourceLabel: `${GUIDE} - Chapter 5, Looking and Scanning Ahead`,
        sourceUrl: hb(61),
      },
      {
        id: "la_s6_05",
        topic: "parking",
        question:
          "You are parking uphill on a street with a curb. Which way do the front wheels go?",
        choices: [
          "Toward the curb",
          "Away from the curb",
          "Straight ahead",
          "Whichever way the road cambers",
        ],
        correctIndex: 1,
        explanation:
          "Away from the curb, and into low gear or park. If the car rolls back it rolls into the curb instead of into the traffic lane.",
        context:
          "Downhill is the mirror image: wheels toward the curb, into reverse or park. Without a curb, the wheels point toward the edge of the road either way. The parking brake goes on in every case, set while your foot is still on the brake pedal and before you shift into park.",
        trap: "Uphill and downhill use opposite wheel positions, and swapping them puts a runaway car into moving traffic.",
        excerptKey: "parking-on-hills",
        sourceLabel: `${GUIDE} - Chapter 5, Parking on Hills`,
        sourceUrl: hb(68),
      },
      {
        id: "la_s6_06",
        topic: "sharing",
        question:
          "You cannot see a truck driver's face in any of the truck's mirrors. What does that tell you?",
        choices: [
          "The mirrors are misaligned",
          "You are far enough back to be safe",
          "The driver is looking at the road ahead",
          "The driver cannot see you at all",
        ],
        correctIndex: 3,
        explanation:
          "It is the standard test for a truck's blind spot. If you cannot see the driver's face in a mirror, you are in the No-Zone and the driver has no idea you are there.",
        context:
          "The blind spots run around the front, back and both sides, and they change shape through a turn as the trailer moves relative to the cab. The guide's practical rules follow from that: do not linger alongside, do not cut in front, and if you are following and cannot see the side mirrors, back off.",
        trap: "Being visible in your own mirrors tells you nothing. The test runs the other way round.",
        excerptKey: "truck-mirrors-rule",
        sourceLabel: `${GUIDE} - Chapter 5, Sharing the Road with Big Trucks`,
        sourceUrl: hb(83),
      },
      {
        id: "la_s6_07",
        topic: "speed",
        question:
          "Which of these is a Louisiana exception to the 70 mph maximum for any vehicle?",
        choices: [
          "45 mph when pulling or towing another motor vehicle",
          "50 mph at night",
          "60 mph in rain",
          "65 mph for any vehicle over 10,000 pounds",
        ],
        correctIndex: 0,
        explanation:
          "Forty-five when towing. The guide's short list is 45 mph towing, 35 mph for a school bus stopping frequently to load, and any lower posted limit.",
        context:
          "The guide's 70 mph headline is the ceiling for the road, not a promise about your vehicle. On top of it the statutory tiers apply to the road itself: 70 on an interstate, 65 on a multi-lane divided highway with partial or no access control, and 55 elsewhere unposted.",
        trap: "Weather does not have a fixed number attached to it. It is handled by the General Speed Law's reasonable and prudent standard instead.",
        excerptKey: "max-speed-70",
        sourceLabel: `${GUIDE} - Chapter 10, Driving`,
        sourceUrl: hb(128),
      },
      {
        id: "la_s6_08",
        topic: "safety",
        question:
          "How does Louisiana say you should brake in an emergency in a vehicle with anti-lock brakes?",
        choices: [
          "Pump the pedal rapidly yourself",
          "Press hard and steer where you want to go",
          "Press and release each time the wheels lock",
          "Use the parking brake as well",
        ],
        correctIndex: 1,
        explanation:
          "Press hard and keep steering. The system pumps the brakes up to 30 times a second for you, and its purpose is to leave you able to steer.",
        context:
          "Without ABS the driver has to do the pumping: brake hard, release as the wheels lock, then press again. The guide is careful to add that ABS does not stop the car faster - it stops it where you want by letting you concentrate on steering.",
        trap: "Pumping an ABS pedal defeats the system. The shuddering underfoot is the system working, not a fault.",
        excerptKey: "abs-pumping",
        sourceLabel: `${GUIDE} - Chapter 8, Avoiding Collisions`,
        sourceUrl: hb(113),
      },
      {
        id: "la_s6_09",
        topic: "rightOfWay",
        question:
          "You are leaving a parking space at the curb and pulling into the traffic lane. Who has the right of way?",
        choices: [
          "You do, once you signal",
          "You do, if traffic is moving slowly",
          "Traffic already on the roadway",
          "Whoever is closer to the intersection",
        ],
        correctIndex: 2,
        explanation:
          "Traffic already on the road. Returning to the roadway after being parked is one of the entries on Louisiana's yield list, and no vehicle may be moved from a parked position until it can be done safely.",
        context:
          "The left turn signal should be used as you pull out of a curbside parallel space. Before that, the guide tells you to check for other vehicles, especially bicycles, before you even open the door on the traffic side.",
        trap: "A signal announces your intention. It does not create a right of way you did not have.",
        excerptKey: "row-driveway",
        sourceLabel: `${GUIDE} - Chapter 6, Right of Way`,
        sourceUrl: hb(93),
      },
      {
        id: "la_s6_10",
        topic: "signs",
        question: "What does a broken white line between two lanes mean?",
        choices: [
          "Traffic on the other side is going the opposite way",
          "You may cross when it is safe to do so",
          "The lane ends ahead",
          "The lane is for buses only",
        ],
        correctIndex: 1,
        explanation:
          "A single dashed white line separates traffic going the same way and may be crossed when it is safe. White always means same direction; yellow always means opposing.",
        context:
          "The white family runs from dashed, which you may cross, through single solid, which marks a lane change as hazardous and should only be crossed with great care, to double solid, which may not be crossed at all. White edge lines mark the right edge of the roadway.",
        trap: "Crossing a dashed line is permitted, not automatic. The safety check is still yours to make.",
        excerptKey: "marking-solid-white",
        sourceLabel: `${GUIDE} - Chapter 3, Lane Markings`,
        sourceUrl: hb(35),
      },
      {
        id: "la_s6_11",
        topic: "rules",
        question:
          "A stopped school bus has its amber lights flashing but the red lights are not on yet. What does that mean?",
        choices: [
          "The bus is about to stop and you should be ready to stop too",
          "The bus is moving off and you may pass",
          "Only oncoming traffic needs to stop",
          "The bus is being used for a school activity, not a route",
        ],
        correctIndex: 0,
        explanation:
          "Amber is the warning. Drivers activate them at least 100 feet and not more than 500 feet before the stop, and the red lights and stop arm come on once the bus has stopped.",
        context:
          "That advance warning is why following distance behind a bus matters: hanging back gives you the room to use it. The guide adds that school buses are on the road mostly in a three-hour window morning and afternoon during the school year.",
        trap: "Amber does not mean hurry past. It means the red lights are seconds away.",
        excerptKey: "school-bus-lights-sequence",
        sourceLabel: `${GUIDE} - Chapter 6, Stopped School Buses`,
        sourceUrl: hb(88),
      },
      {
        id: "la_s6_12",
        topic: "emergencies",
        question:
          "Your brakes fail on a level road. What does the guide tell you to do?",
        choices: [
          "Pull the parking brake on hard immediately",
          "Switch the engine off and coast to a stop",
          "Steer into the shoulder at speed",
          "Shift into a lower gear, then apply the hand brake gradually",
        ],
        correctIndex: 3,
        explanation:
          "Let the engine slow you first, then bring the hand brake on gradually while you work toward the shoulder or an exit.",
        context:
          "Pulling the parking brake on suddenly can cause you to lose control. If that brake has failed too, the guide's last resorts are a soft shoulder or rubbing a wheel along a curb. Either way the vehicle must not be driven again without brakes.",
        trap: "The parking brake is the backup, but only applied gradually. Yanking it locks the rear wheels at speed.",
        excerptKey: "brakes-fail",
        sourceLabel: `${GUIDE} - Chapter 8, Brakes fail`,
        sourceUrl: hb(117),
      },
      {
        id: "la_s6_13",
        topic: "licensing",
        question:
          "How many hours of supervised driving must be logged before a Louisiana intermediate licence, and how many at night?",
        choices: [
          "30 hours, 10 at night",
          "40 hours, 10 at night",
          "50 hours, 15 at night",
          "60 hours, 20 at night",
        ],
        correctIndex: 2,
        explanation:
          "Fifty hours in total, at least 15 of them at night, with a licensed parent, guardian or adult over 21, attested to in writing by a parent or guardian.",
        context:
          "The hours run alongside the other conditions: at least 16 years old, 180 days on the learner's permit, a passed road skills test, and no at-fault crashes, moving violations, seat belt, curfew, drug or alcohol violations during the permit stage.",
        trap: "The night hours are part of the 50, not extra. Fifteen of them have to be after dark, which is what catches people who practiced only on weekend afternoons.",
        excerptKey: "gdl-fifty-hours",
        sourceLabel: `${GUIDE} - Chapter 1, Graduated Licensing Program`,
        sourceUrl: hb(7),
      },
      {
        id: "la_s6_14",
        topic: "signals",
        question:
          "You are facing a red arrow. When may you make the movement it points to?",
        choices: [
          "After stopping, if the way is clear",
          "If no sign prohibits it",
          "At any time, treating it as a flashing red",
          "Not until the green arrow returns",
        ],
        correctIndex: 3,
        explanation:
          "A red arrow bars the movement outright until the green arrow comes back. It is not a red light you can turn on after stopping.",
        context:
          "The statute allows a cautious turn on a steady circular red after stopping - right, or left from one-way to one-way, or a signalized U-turn - but it treats a red arrow as blocking the movement the arrow indicates unless another signal permits it.",
        trap: "Right on red after a stop is the general rule, and a red right-turn arrow is the exception to it.",
        excerptKey: "signal-red-arrow",
        sourceLabel: `${GUIDE} - Chapter 3, Traffic Signals`,
        sourceUrl: hb(34),
        commonlyMissed: true,
      },
      {
        id: "la_s6_15",
        topic: "safety",
        question:
          "How long does the guide say a text takes your eyes off the road?",
        choices: [
          "1.2 seconds",
          "2.5 seconds",
          "4.6 seconds",
          "8 seconds",
        ],
        correctIndex: 2,
        explanation:
          "Four point six seconds, which at 55 mph is the length of a football field driven blind.",
        context:
          "Texting is the distraction the guide singles out because it is all three types at once: visual, manual and cognitive. It also notes that a hands-free device keeps your hands on the wheel but not necessarily your mind on the road.",
        trap: "A glance feels like half a second. The measured figure is nearly ten times that.",
        excerptKey: "texting-4-6-seconds",
        sourceLabel: `${GUIDE} - Chapter 5, Cellular Phones`,
        sourceUrl: hb(78),
      },
      {
        id: "la_s6_16",
        topic: "signs",
        question: "What does a green background on a road sign indicate?",
        choices: [
          "A guide or information sign, such as a destination and distance",
          "A permitted maximum speed",
          "An evacuation route",
          "A scenic area",
        ],
        correctIndex: 0,
        explanation:
          "Green is the guide color: destinations, distances and directions. It also appears as the lettering color on permissive regulation and parking signs.",
        context:
          "Destination signs are green or brown with white lettering. Where the word EXIT is printed on the left of an exit sign the ramp is on the left, and where it is on the right the ramp is on the right. Left exit signs are sometimes yellow to draw more attention.",
        trap: "Brown looks similar at a distance and means recreation or culture, not general navigation.",
        excerptKey: "color-green",
        sourceLabel: `${GUIDE} - Chapter 3, Traffic Signs`,
        sourceUrl: hb(24),
      },
      {
        id: "la_s6_17",
        topic: "impairment",
        question:
          "A passenger is drinking from an open can of beer while you drive. Who is exposed to the penalty?",
        choices: [
          "The passenger only",
          "Nobody, if the driver is sober",
          "The driver, as well as the passenger",
          "The vehicle's registered owner",
        ],
        correctIndex: 2,
        explanation:
          "Both. Louisiana's open container law bans possession and consumption in the passenger area, and the guide warns the driver is at risk even when only a passenger is drinking.",
        context:
          "The passenger area is defined as anywhere the driver or a passenger can reach from their seat, including an unlocked glove compartment. A locked glove compartment, the space behind the last upright seat, or the trunk fall outside it.",
        trap: "Being sober is irrelevant to this offense. It is about the container, not the driver's condition.",
        excerptKey: "open-container",
        sourceLabel: `${GUIDE} - Chapter 9, Blood Alcohol Concentration`,
        sourceUrl: hb(124),
      },
      {
        id: "la_s6_18",
        topic: "rules",
        question:
          "How close to an intersection does Louisiana forbid passing on the left?",
        choices: [
          "50 feet",
          "100 feet",
          "150 feet",
          "300 feet",
        ],
        correctIndex: 1,
        explanation:
          "One hundred feet, and the same distance applies to a railroad grade crossing and to an obstructed approach to a bridge, viaduct or tunnel.",
        context:
          "The prohibition also covers approaching the crest of a grade or a curve where the view is obstructed enough to be a hazard. None of it applies on a one-way roadway or a multi-lane highway, or to a driver turning left into or out of an alley, private road or driveway.",
        trap: "The 100 feet is measured on the approach, so the pass has to be finished well before the intersection rather than at it.",
        excerptKey: "passing-intersection-100",
        sourceLabel: `${GUIDE} - Chapter 5, Passing on the Left`,
        sourceUrl: hb(71),
      },
      {
        id: "la_s6_19",
        topic: "sharing",
        question:
          "What following distance does the guide want behind a motorcycle?",
        choices: [
          "Two seconds",
          "Three seconds",
          "Four seconds",
          "The same as behind a car",
        ],
        correctIndex: 2,
        explanation:
          "Four seconds, and more in the wet. If the rider goes down you need room to avoid both the machine and the person.",
        context:
          "The guide adds that tailgating a motorcycle in a car is comparable to an eighteen-wheeler tailgating you. A motorcycle's narrow silhouette makes it look farther away and slower than it is, and its single headlight can blend into the lights behind it.",
        trap: "A motorcycle can stop shorter than you can. The gap is not about the rider's braking, it is about yours.",
        excerptKey: "motorcycle-four-seconds",
        sourceLabel: `${GUIDE} - Chapter 5, Sharing the Road with Motorcycles`,
        sourceUrl: hb(82),
      },
      {
        id: "la_s6_20",
        topic: "parking",
        question: "What does a white painted curb indicate in Louisiana?",
        choices: [
          "Only short stops are permitted",
          "A loading zone",
          "A fire zone",
          "Accessible parking",
        ],
        correctIndex: 0,
        explanation:
          "White means short stops only. Yellow is a loading zone or another restriction, red is a fire zone, blue is accessibility.",
        context:
          "Curb colors sit on top of the statutory prohibitions rather than replacing them, so a white curb 10 feet from a hydrant is still 5 feet inside the no-parking zone. Accessible spaces additionally require a plate, hang tag or accessibility card.",
        trap: "White does not mean unrestricted. It is the shortest permission of the four colors.",
        excerptKey: "painted-curbs",
        sourceLabel: `${GUIDE} - Chapter 5, Parking`,
        sourceUrl: hb(70),
      },
      {
        id: "la_s6_21",
        topic: "rightOfWay",
        question:
          "You are on a road that ends at a T intersection with a through road. Who yields?",
        choices: [
          "The through road, because you arrived first",
          "The vehicle on the right",
          "Neither, until one driver signals",
          "You do, to vehicles on the through road",
        ],
        correctIndex: 3,
        explanation:
          "Your road ends, so you yield to the through road. It is on Louisiana's right-of-way list as its own entry.",
        context:
          "The general right-hand rule for two vehicles arriving together is modified at through highways and wherever a sign or signal says otherwise. A T intersection, a paved road meeting an unpaved one, and a driveway meeting a street are all cases where the rule is who is on the through route, not who is on the right.",
        trap: "Arriving first does not create priority when your road is the one that terminates.",
        excerptKey: "row-list",
        sourceLabel: `${GUIDE} - Chapter 6, Right of Way`,
        sourceUrl: hb(93),
      },
      {
        id: "la_s6_22",
        topic: "speed",
        question:
          "How much longer is a vehicle's braking distance when speed doubles from 20 mph to 40 mph?",
        choices: [
          "Twice as long",
          "Three times as long",
          "Four times as long",
          "Eight times as long",
        ],
        correctIndex: 2,
        explanation:
          "Four times, and the impact force goes up by the same factor. Tripling the speed from 20 to 60 makes both nine times greater.",
        context:
          "The guide puts a picture to it: at 60 mph your stopping distance is longer than a football field. At 80 mph the impact and braking distance are sixteen times what they were at 20.",
        trap: "The relationship is squared, not proportional. A small increase in speed makes a large increase in the distance you need.",
        excerptKey: "speed-doubles-impact",
        sourceLabel: `${GUIDE} - Chapter 5, Stopping Distances`,
        sourceUrl: hb(65),
      },
      {
        id: "la_s6_23",
        topic: "emergencies",
        question:
          "You are about to be hit from behind. What does the guide tell you to do?",
        choices: [
          "Be ready to brake so you are not pushed into the car ahead",
          "Release the brake so the impact is absorbed",
          "Turn the wheels sharply to the left",
          "Lean forward away from the head rest",
        ],
        correctIndex: 0,
        explanation:
          "Brace and be ready on the brake, so the collision does not push you into whatever is in front of you. Then press the back of your head firmly against the head rest.",
        context:
          "Head restraints are there for exactly this impact, and the guide tells you to adjust yours before driving so it supports your head when you lean back. In a side impact the advice changes: grip the wheel tightly and be ready to steer if the car spins.",
        trap: "Bracing between the wheel and the seat back is part of it, but the pedal is what stops a two-car crash becoming a three-car one.",
        excerptKey: "rear-collision-brace",
        sourceLabel: `${GUIDE} - Chapter 8, Protecting Yourself in a Crash`,
        sourceUrl: hb(114),
      },
      {
        id: "la_s6_24",
        topic: "signals",
        question:
          "You are turning left on a steady green circular light with no arrow. What must you do first?",
        choices: [
          "Nothing, the green covers the turn",
          "Yield to oncoming traffic and to pedestrians",
          "Stop before entering the intersection",
          "Wait for a gap of at least four seconds",
        ],
        correctIndex: 1,
        explanation:
          "A circular green permits the turn but protects nothing. You yield to the oncoming flow and to pedestrians, and complete the turn only when the intersection is clear.",
        context:
          "The statute says vehicular traffic facing a circular green, including vehicles turning right or left, must yield to pedestrians lawfully in an adjacent crosswalk and to other vehicles lawfully in the intersection. A LEFT TURN YIELD ON GREEN sign makes the same point at junctions where drivers get it wrong.",
        trap: "It is easy to read a green as permission to move rather than permission to proceed when clear.",
        excerptKey: "signal-green-left-turn",
        sourceLabel: `${GUIDE} - Chapter 3, Traffic Signals`,
        sourceUrl: hb(33),
      },
      {
        id: "la_s6_25",
        topic: "safety",
        question:
          "How often does the guide say a driver should rest on a long trip?",
        choices: [
          "Every hour",
          "Every two hours",
          "Every three hours",
          "Only when you feel tired",
        ],
        correctIndex: 1,
        explanation:
          "Every two hours, and not more than six to eight hours of driving in a day. The guide also says to take the breaks even when you do not feel tired.",
        context:
          "Fatigue is treated like impairment: it slows reaction time, breaks concentration and can produce microsleeps. The warning signs it lists include not remembering the last few miles, a heavy head, drifting from your lane, missing signs and repeated yawning.",
        trap: "Waiting until you feel tired is the failure mode. By then judgment is already the thing that has gone.",
        excerptKey: "fatigue-rest-two-hours",
        sourceLabel: `${GUIDE} - Chapter 5, Driver Fatigue`,
        sourceUrl: hb(56),
      },
      {
        id: "la_s6_26",
        topic: "licensing",
        question:
          "How long is a Louisiana Class E driver's licence valid?",
        choices: [
          "Four years",
          "Five years",
          "Six years from your nearest birthday",
          "Eight years",
        ],
        correctIndex: 2,
        explanation:
          "Six years from your nearest birthday, and it can be renewed at any point in the 180 days before it expires.",
        context:
          "You must pass the vision exam before a renewal is issued. Residents under 70 with a Class D or E may be selected to renew by mail or internet, though never for two consecutive cycles.",
        trap: "The 180 days is the renewal window before expiry, not a grace period afterwards.",
        excerptKey: "licence-expiry-six-years",
        sourceLabel: `${GUIDE} - Chapter 1, License Renewals`,
        sourceUrl: hb(10),
      },
      {
        id: "la_s6_27",
        topic: "signs",
        question:
          "What does a sign showing SLOWER TRAFFIC KEEP RIGHT require of you?",
        choices: [
          "Move right if you are slower than the normal speed of traffic",
          "Move right only if you are below the posted minimum",
          "Move right at the next exit regardless of speed",
          "Move right only when a vehicle is directly behind you",
        ],
        correctIndex: 0,
        explanation:
          "It is aimed at anyone driving slower than the normal speed of traffic, and it tells them to use the right lane.",
        context:
          "The guide's lane-marking chapter states the same law without a sign: vehicles travel in the right hand lane except when turning left, passing or when the right lanes are congested, and any vehicle slower than the normal speed of traffic uses the right lane only.",
        trap: "Normal speed of traffic is the reference, not the posted limit. You can be at the limit and still be the slower traffic.",
        excerptKey: "slower-traffic-keep-right",
        sourceLabel: `${GUIDE} - Chapter 3, Regulatory Signs`,
        sourceUrl: hb(29),
      },
      {
        id: "la_s6_28",
        topic: "rules",
        question:
          "Where is a driver required to stop before crossing a sidewalk when leaving a building or an alley?",
        choices: [
          "At the curb line",
          "Immediately before driving onto the sidewalk area",
          "Ten feet back from the sidewalk",
          "Nowhere, provided you creep forward slowly",
        ],
        correctIndex: 1,
        explanation:
          "Immediately before you drive onto the sidewalk, or the sidewalk area extending across the alley or driveway. Then you yield to pedestrians and to approaching vehicles.",
        context:
          "The stop is separate from the yield. It exists because a pedestrian on the sidewalk has no reason to expect a vehicle emerging from a building, and because the driver's view along the sidewalk is usually blocked until the nose of the car is nearly across it.",
        trap: "Rolling slowly across the sidewalk is not a stop, and the pedestrian you cannot see yet is the reason the rule exists.",
        excerptKey: "stat-driveway-yield",
        sourceLabel: `${RS} 32:124 - Vehicle entering highway from private road`,
        sourceUrl: stat(88032),
      },
      {
        id: "la_s6_29",
        topic: "sharing",
        question:
          "What must a bicycle have when ridden at night in Louisiana?",
        choices: [
          "A white front light and a red rear light or reflector",
          "Reflective clothing only",
          "A white front light only",
          "Two red rear reflectors",
        ],
        correctIndex: 0,
        explanation:
          "White at the front, red at the rear, and the rear may be a light or a reflector visible from behind.",
        context:
          "Bicycles have the same rights and the same duties as vehicles on Louisiana roads. Riders must ride as near the right as safely possible, may not ride more than two abreast, must keep at least one hand on the handlebars, and may not attach themselves to another vehicle.",
        trap: "A rear reflector satisfies the law but not the physics. It only works when a headlight is pointed at it.",
        excerptKey: "bicycle-lights-at-night",
        sourceLabel: `${GUIDE} - Chapter 5, Bicycling Safety`,
        sourceUrl: hb(81),
      },
      {
        id: "la_s6_30",
        topic: "emergencies",
        question:
          "You have had a crash with property damage of about $900 and no injuries. What does Louisiana require?",
        choices: [
          "Nothing beyond exchanging insurance details",
          "A report to the OMV within 10 days",
          "Immediate notice to the police or sheriff's office",
          "A report only if the other driver requests one",
        ],
        correctIndex: 2,
        explanation:
          "Damage above $500 crosses the reporting threshold, so you give immediate notice to the local police, or the nearest sheriff's office or state police station outside a town.",
        context:
          "You also give your name, address and vehicle registration number, and show your licence on request to anyone injured or to the driver of a damaged vehicle. In an area under evacuation order or a declared state of emergency you have 72 hours instead of immediately.",
        trap: "Injury is not the only trigger. Five hundred dollars of damage is easy to reach on a modern bumper.",
        excerptKey: "stat-crash-report",
        sourceLabel: `${RS} 32:398 - Crash reports`,
        sourceUrl: stat(88361),
      },
    ],
  },
];
