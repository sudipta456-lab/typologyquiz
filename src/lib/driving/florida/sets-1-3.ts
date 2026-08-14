import type { DrivingTestSet } from "../types";

// Every fact below was checked against the Official Florida Driver License
// Handbook (rev. 08/2023), published by the Florida Department of Highway
// Safety and Motor Vehicles, plus FLHSMV's own licensing pages for the exam
// format and the graduated-licence curfews. Questions are original.
// Explanations, context notes and trap notes are written from scratch - the
// deep link is there so the learner reads FLHSMV's own authoritative wording
// on the government's site.
const HB = "https://www.flhsmv.gov/pdf/handbooks/englishdriverhandbook.pdf";
const GDL =
  "https://www.flhsmv.gov/driver-licenses-id-cards/licensing-requirements-teens-graduated-driver-license-laws-driving-curfews/";

export const floridaSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Florida Basics",
    difficulty: "starter",
    description:
      "The rules you meet on your first drive in Florida: what the shapes and colours mean, who goes first, and the handful of numbers the Class E exam expects you to know cold.",
    questions: [
      {
        id: "fl_s1_01",
        topic: "signs",
        question:
          "You approach an eight-sided red sign at an intersection. What does Florida require of you?",
        choices: [
          "Stop only when a pedestrian is waiting to cross",
          "Bring the vehicle to a complete halt before the stop line",
          "Slow to walking pace and continue if nothing is coming",
          "Give way only to traffic already inside the intersection",
        ],
        correctIndex: 1,
        explanation:
          "The octagon is used for one message only, and that message is a full stop. You stop before the stop line; if there is no stop line, you stop before the crosswalk or the intersection at the point where you can actually see approaching traffic.",
        context:
          "Florida signs carry meaning in shape and colour as well as words, so you can start reacting before you can read them. An octagon means stop, a downward triangle means yield, a yellow diamond warns of something ahead, and orange means roadwork. Learning the shape and colour system is worth more marks than memorising individual signs, because the exam shows signs you have never seen and expects you to reason from the shape.",
        trap:
          "Slowing to walking pace is the rolling stop that gets people ticketed. Florida wants the vehicle stopped, not merely slow, no matter how empty the road looks.",
        excerptKey: "stop-sign",
        sourceLabel: "Official Florida Driver License Handbook - Traffic Controls",
        sourceUrl: HB,
      },
      {
        id: "fl_s1_02",
        topic: "rules",
        question: "A traffic light ahead of you is showing a steady red. What must you do?",
        choices: [
          "Stop only if another vehicle is approaching the intersection",
          "Slow down and proceed if the intersection is empty",
          "Stop well back so you can see the whole intersection",
          "Come to a complete stop at the stop line and stay there until the light turns green",
        ],
        correctIndex: 3,
        explanation:
          "Steady red means a full stop at the stop line, and you remain stopped until the light turns green. A right turn is allowed after that stop when the way is clear and no sign forbids it, but the stop comes first.",
        context:
          "Florida signal colours run steady red (stop), steady yellow (the light is changing, stop if you can do it safely), and steady green (go, but only if the intersection is clear). Flashing versions change the meaning entirely: flashing red behaves like a stop sign, flashing yellow means proceed with caution. A police officer directing traffic outranks every signal, even when the instruction contradicts the light.",
        trap:
          "Stopping well back from the line feels safer but can leave you invisible to the sensors that trigger the light, so you sit through cycle after cycle.",
        excerptKey: "steady-red-light",
        sourceLabel: "Official Florida Driver License Handbook - Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "fl_s1_03",
        topic: "speed",
        question:
          "You are driving through a residential neighbourhood in Florida and there is no speed limit sign anywhere. What speed does the law assume?",
        choices: [
          "20 mph",
          "25 mph",
          "30 mph",
          "35 mph",
        ],
        correctIndex: 2,
        explanation:
          "Where a municipal, business or residential street carries no posted sign, Florida treats 30 mph as the limit. A local authority can post something different after a study, but with no sign, 30 is the number you are held to.",
        context:
          "Florida publishes standard limits so an unposted road is never a guess: 20 mph in school zones, 30 mph in municipal, business or residential areas, 55 mph on streets and highways generally, and 70 mph on limited access highways. Each of those is a maximum unless a sign says otherwise, and a posted sign always beats the standard figure.",
        trap:
          "25 mph is the residential default in several other states, which is exactly why Florida candidates who learned to drive elsewhere pick it.",
        excerptKey: "speed-standard-limits",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "fl_s1_04",
        topic: "rightOfWay",
        question:
          "On an ordinary two-way street a school bus ahead of you stops and puts out its stop signal. What must traffic do?",
        choices: [
          "Drivers moving in either direction must stop",
          "Stop only if children are already on the roadway",
          "Only vehicles behind the bus need to stop",
          "Pass at 10 mph or less if no children are visible",
        ],
        correctIndex: 0,
        explanation:
          "On a two-way street or highway every driver, in both directions, stops for a school bus displaying its stop signal. You stay stopped until the signal is withdrawn and the children are clear of the road.",
        context:
          "The rule protects children crossing in front of or behind the bus, where neither the bus driver nor you can see them. The only relief comes on a divided highway, and only for traffic moving the opposite way. Passing a stopped school bus in Florida is four points on your licence and a minimum fine that starts in the hundreds of dollars.",
        trap:
          "'Only if children are visible' inverts the rule. The child you cannot see is precisely the one the law is protecting.",
        excerptKey: "school-bus-two-way",
        sourceLabel: "Official Florida Driver License Handbook - Sharing the Road",
        sourceUrl: HB,
      },
      {
        id: "fl_s1_05",
        topic: "safety",
        question:
          "Five people are riding in a car with belts fitted to every seat. Under Florida law, who is required to wear one?",
        choices: [
          "Everyone in the front seats, and any passenger under 18 wherever they sit",
          "Only occupants of the front seats",
          "Everyone in the vehicle regardless of age or seat",
          "Only the driver and anyone under 16",
        ],
        correctIndex: 0,
        explanation:
          "Florida requires belts for all drivers, all front seat passengers, and every passenger under the age of 18 no matter which seat they are in. An adult riding in the back is outside that requirement.",
        context:
          "Because the rule is written around age and seating position, the responsibility splits too. The driver is charged if any passenger under 18 is unrestrained, but a passenger who is 18 or older is charged personally for their own belt. Children under 4 need a safety seat, and children aged 4 and 5 need a safety seat or a booster.",
        trap:
          "'Everyone regardless of age or seat' is the rule people assume Florida has, and it is stricter than what the statute actually says about adults in the rear.",
        excerptKey: "safety-belt-law",
        sourceLabel: "Official Florida Driver License Handbook - Your Driving Privilege",
        sourceUrl: HB,
      },
      {
        id: "fl_s1_06",
        topic: "signals",
        question: "What does a single broken white line between two lanes tell you?",
        choices: [
          "You must stay in your lane until the line becomes solid",
          "Traffic on the far side is moving the opposite way",
          "The lane on your right is reserved for buses",
          "You may cross it to change lanes when it is safe",
        ],
        correctIndex: 3,
        explanation:
          "White lines separate lanes travelling the same direction, and a broken white line is the permissive version: you may cross it to change lanes whenever it is safe to do so.",
        context:
          "The colour tells you the direction of the neighbouring traffic and the pattern tells you whether you may cross. White means same direction, yellow means opposing direction. Broken means crossing is allowed, solid discourages it, and a double solid line of either colour means do not cross at all.",
        trap:
          "'Traffic on the far side is moving the opposite way' describes a yellow line, not a white one. Getting the colour rule backwards is one of the most common markings errors.",
        excerptKey: "broken-white-line",
        sourceLabel: "Official Florida Driver License Handbook - Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "fl_s1_07",
        topic: "licensing",
        question: "What is the minimum age to hold a Florida learner's licence?",
        choices: [
          "16 years old",
          "15 years and six months",
          "14 years old",
          "15 years old",
        ],
        correctIndex: 3,
        explanation:
          "Florida issues a learner's licence at 15. A full Class E driver licence comes no earlier than 16, and only after the learner's licence has been held for the required period.",
        context:
          "The learner stage is a package, not just an age. You must be 15, complete the Traffic Law and Substance Abuse Education course if you have never held a licence anywhere, and pass the vision and Class E Knowledge exams. Then the licence must be held for 12 months or until your 18th birthday, whichever comes first, before you can take the driving skills test.",
        trap:
          "16 is the age for the full driver licence, which is why it feels like the right answer to anyone who has not read the learner section.",
        excerptKey: "learner-15-years-old",
        sourceLabel: "Official Florida Driver License Handbook - Driver Licenses & ID Cards",
        sourceUrl: HB,
      },
      {
        id: "fl_s1_08",
        topic: "impairment",
        question:
          "At what breath or blood alcohol level will an adult driver's Florida licence be administratively suspended at the time of arrest?",
        choices: [
          ".10 or above",
          ".05 or above",
          ".12 or above",
          ".08 or above",
        ],
        correctIndex: 3,
        explanation:
          "For a driver 21 or over, .08 is the level at which the licence is suspended on the spot. Refusing the breath or blood test triggers the same administrative suspension.",
        context:
          "The .08 figure is a threshold, not a licence to drink up to it. Florida can charge you with driving under the influence at any level if your normal faculties are impaired, and the charge covers controlled substances, prescriptions and over-the-counter medication as well as alcohol. Drivers under 21 are held to a much lower number.",
        trap:
          ".05 is the level that triggers a mandatory substance abuse course for an under-21 driver, so it sticks in people's heads as if it applied to everyone.",
        excerptKey: "dui-08-suspension",
        sourceLabel: "Official Florida Driver License Handbook - Your Driving Privilege",
        sourceUrl: HB,
      },
      {
        id: "fl_s1_09",
        topic: "sharing",
        question:
          "You are overtaking a cyclist on a Florida road. What is the minimum clearance the law requires?",
        choices: [
          "One metre",
          "Two feet",
          "Three feet",
          "One full lane width",
        ],
        correctIndex: 2,
        explanation:
          "Florida sets a minimum of three feet of clearance when you drive next to or pass a bicycle, and expects you to slow down and use caution as well.",
        context:
          "A bicycle is legally a vehicle in Florida, with the same rights and duties as a car everywhere except limited access highways. That means you treat a cyclist as traffic rather than an obstacle: yield to them as you would any vehicle, assume they are going straight at an intersection unless they signal, and make your right turn behind them rather than cutting across the bike lane.",
        trap:
          "Two feet sounds close enough at low speed, but the figure in Florida law is three, and it applies whatever the speed limit is.",
        excerptKey: "bicycle-three-feet",
        sourceLabel: "Official Florida Driver License Handbook - Sharing the Road",
        sourceUrl: HB,
      },
      {
        id: "fl_s1_10",
        topic: "parking",
        question:
          "You are parallel parking at a kerb on a two-way Florida street. How should the vehicle end up?",
        choices: [
          "Facing traffic so your headlights are visible, within 18 inches of the kerb",
          "Parallel to the kerb facing the direction of traffic, right wheels within 12 inches",
          "At any angle as long as no part of the car is in the traffic lane",
          "Parallel to the kerb with the wheels turned toward the road",
        ],
        correctIndex: 1,
        explanation:
          "You park on the right side of a two-way street, parallel to the kerb, pointing the way traffic moves, with your right-hand wheels within 12 inches of the kerb.",
        context:
          "Florida also expects you to set the parking brake, put an automatic in Park or a manual in gear, switch off, and remove the keys before you leave. Parking against the flow of traffic is a violation in itself, and on a one-way street the left kerb becomes legal because traffic there only moves one way.",
        trap:
          "Facing traffic is standard practice in some countries and is simply not permitted here, no matter how visible it makes you.",
        excerptKey: "parking-12-inches",
        sourceLabel: "Official Florida Driver License Handbook - Parking",
        sourceUrl: HB,
      },
      {
        id: "fl_s1_11",
        topic: "signs",
        question: "What does a yield sign require of you?",
        choices: [
          "Stop only when a vehicle is within 100 feet",
          "Slow down and give the right-of-way to vehicles crossing your path",
          "Stop completely, then proceed when clear",
          "Sound your horn before entering the intersection",
        ],
        correctIndex: 1,
        explanation:
          "Yield means slow down and let vehicles crossing your path go first. If the way is genuinely clear you may roll forward slowly without stopping, which is the whole difference between a yield and a stop sign.",
        context:
          "Florida's regulatory signs are the ones that set limits or give commands, and they are enforceable exactly as written. The pairing worth learning is stop against yield: the octagon demands a full halt every time, the downward triangle demands that you give way but lets you keep moving when nothing is coming.",
        trap:
          "'Stop completely, then proceed' is the stop sign rule. Treating yield as a stop is safe but it is not what the sign means, and the exam tests the difference.",
        excerptKey: "yield-sign",
        sourceLabel: "Official Florida Driver License Handbook - Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "fl_s1_12",
        topic: "emergencies",
        question:
          "A fire engine comes up behind you with its lights flashing and siren sounding. What does Florida require?",
        choices: [
          "Pull over to the closest edge of the roadway and stop until it has passed",
          "Speed up to clear the area ahead of it",
          "Stay in your lane and maintain speed so it can predict your movement",
          "Stop immediately wherever you are, including inside the intersection",
        ],
        correctIndex: 0,
        explanation:
          "You yield to any emergency vehicle running lights or siren by pulling to the nearest edge of the road and stopping until it has gone by. The one thing you must not do is stop in a way that blocks an intersection.",
        context:
          "The duty falls on motorists, cyclists and pedestrians alike, and it applies to law enforcement, fire engines and other emergency vehicles. A separate Florida rule, the Move Over law, covers emergency and service vehicles that are already stopped at the roadside, and that one asks you to change lanes or slow well below the limit rather than stop.",
        trap:
          "Stopping instantly wherever you happen to be sounds obedient, but a car halted in the middle of an intersection is the thing most likely to block the emergency vehicle.",
        excerptKey: "emergency-vehicles-yield",
        sourceLabel: "Official Florida Driver License Handbook - Sharing the Road",
        sourceUrl: HB,
      },
      {
        id: "fl_s1_13",
        topic: "rules",
        question:
          "You are stopped at a red light and want to turn right. Nothing prohibits the turn. What does Florida allow?",
        choices: [
          "Turn right only when a green arrow appears",
          "Turn right after slowing, as long as you use your signal",
          "Turn right after coming to a complete stop, once the way is clear",
          "Turn right without stopping if traffic is light",
        ],
        correctIndex: 2,
        explanation:
          "Right on red is permitted in Florida, but only after a complete stop and only when there is no NO TURN ON RED sign and the way is clear. The stop is not optional.",
        context:
          "The same permission applies at a red arrow. Before you go you must yield to pedestrians in the crosswalk and to oncoming traffic, and the handbook is blunt about looking both ways for people on foot before a right on red. Florida also lets you turn left on red from a one-way street onto a one-way street whose traffic runs to the left.",
        trap:
          "'Turn right after slowing' is the most common real-world habit and the most commonly cited version of this violation. Slowing is not stopping.",
        excerptKey: "right-turn-on-red",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "fl_s1_14",
        topic: "speed",
        question: "What is the highest speed limit you will ever see posted in Florida?",
        choices: [
          "80 mph on rural interstates",
          "65 mph",
          "75 mph",
          "70 mph",
        ],
        correctIndex: 3,
        explanation:
          "Florida caps posted limits at 70 mph, and that ceiling appears only on limited access highways such as interstates and turnpikes.",
        context:
          "The standard figures run 20 mph in school zones, 30 mph in municipal, business or residential areas, 55 mph on ordinary streets and highways, and 70 mph on limited access highways. On a road posted at 70 there is also a floor: the minimum speed there is 50 mph, because a vehicle crawling along an interstate is its own hazard.",
        trap:
          "75 and 80 mph exist in western states with long rural interstates. Florida has never gone above 70.",
        excerptKey: "speed-never-higher-70",
        sourceLabel: "Official Florida Driver License Handbook - Your Driving Privilege",
        sourceUrl: HB,
      },
      {
        id: "fl_s1_15",
        topic: "signals",
        question: "You arrive at an intersection where the signal is showing a flashing red light. What does it mean?",
        choices: [
          "Treat it exactly like a stop sign",
          "The signal has failed and you should treat it as a green light",
          "Proceed with caution without stopping",
          "The light is about to change to green",
        ],
        correctIndex: 0,
        explanation:
          "A flashing red is used at intersections considered dangerous and behaves as a stop sign: stop, then go when it is safe.",
        context:
          "Flashing signals are a pair worth learning together. Flashing red means stop and proceed when safe. Flashing yellow, used at or just before a hazardous intersection, means slow down and proceed with caution without stopping. If a signal is dead altogether and no officer is directing traffic, you treat the whole intersection as a four-way stop.",
        trap:
          "Treating a flashing red as a caution light is the same mistake as rolling a stop sign, and at these particular intersections it is the reason the flashing red is there.",
        excerptKey: "flashing-red-light",
        sourceLabel: "Official Florida Driver License Handbook - Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "fl_s1_16",
        topic: "safety",
        question:
          "Conditions are good and traffic is light. What following distance does the Florida handbook set as the minimum?",
        choices: [
          "Two seconds",
          "Four seconds",
          "Three seconds",
          "One car length for every 10 mph",
        ],
        correctIndex: 1,
        explanation:
          "Florida asks for a minimum of four seconds in favourable weather and traffic, measured by counting from the moment the vehicle ahead passes a fixed marker until you reach it.",
        context:
          "Four seconds is a floor, not a target. You increase it in rain or on wet roads, in fog and at dusk or dawn, when you are being passed, when you are loaded or towing, and when you are behind a motorcycle, a vehicle whose rear view is blocked, or a bus or truck that must stop at railway crossings. Rear-end collisions are almost always the result of following too closely.",
        trap:
          "Two and three seconds are the figures other jurisdictions use, and 'one car length per 10 mph' is an old rule of thumb that fails badly at highway speed.",
        excerptKey: "following-four-seconds",
        sourceLabel: "Official Florida Driver License Handbook - Driving Safety",
        sourceUrl: HB,
      },
      {
        id: "fl_s1_17",
        topic: "signs",
        question: "In Florida's sign system, what does the colour red communicate?",
        choices: [
          "Stop, do not enter, wrong way, or yield",
          "Guide and directional information",
          "Roadwork and temporary conditions ahead",
          "General warning of unexpected road conditions",
        ],
        correctIndex: 0,
        explanation:
          "Red is reserved for the strongest instructions: stop, do not enter, wrong way and yield. When you see red on a sign, something is being forbidden or demanded of you.",
        context:
          "The Florida colour code is worth memorising as a set. Red is stop or prohibition, orange is construction and maintenance, yellow is general warning, fluorescent yellow-green highlights school, pedestrian and bicycle activity, white with black is regulatory, green is guide and direction, blue is driver services and disabled parking, and brown marks recreation and historic sites.",
        trap:
          "Orange is the construction colour, not red. Mixing the two is the single most common colour error on the exam.",
        excerptKey: "sign-colors-red",
        sourceLabel: "Official Florida Driver License Handbook - Traffic Sign Colors",
        sourceUrl: HB,
      },
      {
        id: "fl_s1_18",
        topic: "rightOfWay",
        question: "A pedestrian is crossing inside a marked crosswalk ahead of you. What is your duty?",
        choices: [
          "Yield the right-of-way to them",
          "Yield only if a signal shows WALK",
          "Sound your horn so they know you are there",
          "Proceed if you can pass behind them",
        ],
        correctIndex: 0,
        explanation:
          "Motorists must always yield to a pedestrian in a crosswalk. Florida goes further and requires you to stop and remain stopped for anyone crossing a street or driveway at a marked crossing or an intersection.",
        context:
          "The duty does not depend on the crosswalk being painted or signalled. You must also stop for pedestrians on the sidewalk when you enter or leave an alley, driveway or private road, you must never let your vehicle overhang a crosswalk at a red light, and you may not overtake a vehicle that has stopped at a crosswalk to let someone cross.",
        trap:
          "Waiting for a WALK signal ignores unmarked crossings and intersections without pedestrian signals, where the duty applies just the same.",
        excerptKey: "crosswalk-yield",
        sourceLabel: "Official Florida Driver License Handbook - Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "fl_s1_19",
        topic: "licensing",
        question:
          "Florida is a no-fault state. What minimum insurance must you carry before registering a car here?",
        choices: [
          "$10,000 personal injury protection only",
          "$15,000 personal injury protection and $30,000 property damage liability",
          "$10,000 personal injury protection and $10,000 property damage liability",
          "$25,000 bodily injury liability and $10,000 property damage liability",
        ],
        correctIndex: 2,
        explanation:
          "Florida requires a minimum of $10,000 in personal injury protection and a minimum of $10,000 in property damage liability. Both must be in force before the car is registered and must stay in force for the whole registration period.",
        context:
          "Personal injury protection covers your own injuries no matter who caused the crash, which is what makes Florida a no-fault state. Property damage liability pays for the damage you do to other people's property. Ordinary registration does not require bodily injury liability at all, though a DUI conviction forces you to carry much higher limits afterwards.",
        trap:
          "$25,000 bodily injury liability is the basic requirement in most other states and is exactly what people assume Florida asks for. Florida's basic package is PIP and PDL.",
        excerptKey: "no-fault-minimums",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Insurance Laws",
        sourceUrl: HB,
      },
      {
        id: "fl_s1_20",
        topic: "rules",
        question: "During which hours does Florida law require you to use your headlights?",
        choices: [
          "From one hour after sunset until one hour before sunrise",
          "Only when you cannot see 500 feet ahead",
          "Between sunset and sunrise",
          "From dusk until dawn, unless streetlights are lit",
        ],
        correctIndex: 2,
        explanation:
          "Headlights are required between sunset and sunrise. There is no grace period on either side and streetlights make no difference.",
        context:
          "Two other lighting rules travel with it. Parking lights are never a substitute for headlights, and you must switch on your headlights whenever you switch on your windshield wipers, which is what catches people out in an afternoon Florida downpour. High beams must be dipped within 500 feet of an oncoming vehicle and within 300 feet of one you are following.",
        trap:
          "The 'one hour after sunset' version comes from other states' rules and would leave you unlit through the darkest part of a Florida dusk.",
        excerptKey: "headlights-sunset-sunrise",
        sourceLabel: "Official Florida Driver License Handbook - Night Driving",
        sourceUrl: HB,
      },
      {
        id: "fl_s1_21",
        topic: "signs",
        question: "What shape and colour do Florida's general warning signs normally use?",
        choices: [
          "A yellow triangle pointing down",
          "An orange rectangle",
          "A white square with a black border",
          "A yellow diamond",
        ],
        correctIndex: 3,
        explanation:
          "Warning signs in Florida are normally yellow and diamond-shaped. They tell you a condition is coming up and that you should be looking for it.",
        context:
          "The diamond covers curves, junctions, crossings, surface changes and animal activity, among others. An advisory speed panel can hang under any warning sign to give the fastest safe speed for the hazard. Orange diamonds are the construction and maintenance version of the same idea, and the fluorescent yellow-green diamond is reserved for school, pedestrian and bicycle activity.",
        trap:
          "A downward-pointing triangle is the yield sign specifically, not the general warning shape.",
        excerptKey: "warning-signs-yellow-diamond",
        sourceLabel: "Official Florida Driver License Handbook - Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "fl_s1_22",
        topic: "signals",
        question: "The light turns green as you approach the intersection. What does Florida expect?",
        choices: [
          "Go only if the intersection is clear, yielding to pedestrians and vehicles still in it",
          "Go immediately, since opposing traffic now has a red",
          "Wait three seconds before entering the intersection",
          "Accelerate through so you do not hold up traffic behind you",
        ],
        correctIndex: 0,
        explanation:
          "Green means go only when the intersection is clear. You still yield to pedestrians in the crosswalk and to vehicles that have not finished clearing the junction.",
        context:
          "A green light gives you permission, not priority over everything in front of you. Florida also expects you to approach a green at a speed that lets you stop if it changes, and reminds you that a left turn on green means yielding to oncoming traffic and to pedestrians unless you have a green arrow.",
        trap:
          "'Opposing traffic now has a red' ignores the driver who entered on yellow and is still in the box, which is where a large share of intersection crashes happen.",
        excerptKey: "green-light",
        sourceLabel: "Official Florida Driver License Handbook - Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "fl_s1_23",
        topic: "parking",
        question: "How close to a fire hydrant may you legally park in Florida?",
        choices: [
          "No closer than 10 feet",
          "No closer than 20 feet",
          "No closer than 15 feet",
          "Any distance, provided the hydrant stays visible",
        ],
        correctIndex: 2,
        explanation:
          "Fifteen feet is the clearance Florida requires around a fire hydrant. It is the shortest of the standard parking clearances, which is part of why it gets confused with the others.",
        context:
          "Learn the whole family of distances together, because the exam picks one at random: 15 feet from a fire hydrant, 20 feet from an intersection, 20 feet from the entrance to a fire, ambulance or rescue station, 30 feet from a rural mailbox on a state highway between 8 am and 6 pm, 30 feet from any flashing signal, stop sign or traffic signal, and 50 feet from a railroad crossing.",
        trap:
          "20 feet is the intersection figure, and swapping the two is the single most common parking-distance error.",
        excerptKey: "parking-distances",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Parking",
        sourceUrl: HB,
      },
      {
        id: "fl_s1_24",
        topic: "impairment",
        question:
          "A 19-year-old driver is stopped and registers a breath alcohol level of .03. What happens?",
        choices: [
          "The driver must attend a substance abuse course but keeps the licence",
          "Nothing, because the level is below .08",
          "A warning is issued and noted on the driving record",
          "The driving privilege is suspended for six months",
        ],
        correctIndex: 3,
        explanation:
          "Florida's zero tolerance rule suspends the driving privilege of any driver under 21 for six months at a blood alcohol level of .02 or higher. At .03 the suspension follows automatically.",
        context:
          "There is a second under-21 threshold to keep separate from this one. At .05 or higher the young driver is additionally required to attend a substance abuse course, and for anyone under 19 an evaluation is done and the parents or guardians are told the result. The .08 figure applies only to drivers 21 and over.",
        trap:
          "Reasoning from .08 is exactly the trap. For an under-21 driver the number that matters is .02, and .03 clears it comfortably.",
        excerptKey: "zero-tolerance-02",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Your Driving Privilege",
        sourceUrl: HB,
      },
      {
        id: "fl_s1_25",
        topic: "sharing",
        question:
          "You are behind a motorcycle in a wide lane and there is clearly room to pull alongside. What does Florida say?",
        choices: [
          "You may share the lane only when traffic is stopped",
          "You must not share the lane; the motorcyclist is entitled to all of it",
          "You may share the lane if the motorcyclist waves you through",
          "You may share the lane if you leave three feet of space",
        ],
        correctIndex: 1,
        explanation:
          "A motorcyclist is entitled to the entire lane. You must not attempt to share it, however much spare width there appears to be.",
        context:
          "Riders use the full lane to swerve around debris and to stay visible, so the space you would occupy is space they need. Florida also asks you to leave more than a four-second buffer behind a motorcycle, to remember that a small headlight makes speed and distance hard to judge, and to keep your lane position steady when a motorcycle passes you.",
        trap:
          "The three-foot figure belongs to bicycles. Applying it to motorcycles produces a manoeuvre Florida forbids outright.",
        excerptKey: "motorcycle-full-lane",
        sourceLabel: "Official Florida Driver License Handbook - Sharing the Road",
        sourceUrl: HB,
      },
      {
        id: "fl_s1_26",
        topic: "emergencies",
        question:
          "You are involved in a minor collision in a car park that damages another vehicle. What does Florida law require?",
        choices: [
          "You need only report it if someone was injured",
          "You may leave if the damage looks under $500",
          "You must stay at the scene; leaving a crash involving property damage is against the law",
          "You may leave once you have photographed the damage",
        ],
        correctIndex: 2,
        explanation:
          "Leaving the scene of a crash that involves death, injury or property damage is against the law in Florida. You stop, give information and render aid.",
        context:
          "The duties after a crash are concrete: stop, call 911 or law enforcement, put your hazard lights on, get help for anyone hurt, move the vehicle if it is blocking traffic and the crash is minor, and exchange details. If the other vehicle or property is unattended you must try to find the owner, notify law enforcement, and leave a note with your name, contact details and licence plate number.",
        trap:
          "There is no damage threshold that makes it legal to leave. The dollar figures in Florida law affect points and penalties, not whether you may drive away.",
        excerptKey: "leaving-scene-illegal",
        sourceLabel: "Official Florida Driver License Handbook - Handling Emergencies",
        sourceUrl: HB,
      },
      {
        id: "fl_s1_27",
        topic: "rules",
        question: "How far before a turn must you signal in Florida?",
        choices: [
          "At least 100 feet",
          "At least three seconds before the turn",
          "At least 50 feet",
          "At least 200 feet",
        ],
        correctIndex: 0,
        explanation:
          "Florida requires the signal at least 100 feet before you turn, so drivers around you have time to see it and react before you start moving.",
        context:
          "Signals are also required by law when you change lanes or overtake, not only when you turn at a junction. Hand signals must be given from the left side of the vehicle. One thing you must not do is use your directional signals to wave the driver behind you past, which Florida specifically prohibits.",
        trap:
          "The three-second version is a defensive-driving guideline, not the Florida rule. The exam wants a distance.",
        excerptKey: "signal-100-feet",
        sourceLabel: "Official Florida Driver License Handbook - Turning",
        sourceUrl: HB,
      },
      {
        id: "fl_s1_28",
        topic: "signs",
        question: "Where would you expect to find a DO NOT ENTER sign?",
        choices: [
          "At the end of a divided highway",
          "On one-way streets and roadways you may not enter",
          "At the entrance to a private road",
          "Wherever a road narrows to one lane",
        ],
        correctIndex: 1,
        explanation:
          "DO NOT ENTER marks one-way streets and other roadways where entry from your direction is prohibited, typically an exit ramp or the wrong end of a one-way street.",
        context:
          "It travels with the WRONG WAY sign, which tells you the mistake has already been made and that you must turn around immediately. Florida gives you a third warning built into the pavement: red reflectors facing you on the lane lines always mean you are facing traffic head-on and must get out of that lane at once.",
        trap:
          "A divided highway ending is signed with its own yellow warning sign, not with DO NOT ENTER.",
        excerptKey: "do-not-enter-sign",
        sourceLabel: "Official Florida Driver License Handbook - Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "fl_s1_29",
        topic: "safety",
        question:
          "A heavy afternoon shower starts and you switch on your windshield wipers. What else does Florida require?",
        choices: [
          "Reduce speed to 20 mph below the limit",
          "Switch on your headlights",
          "Switch on your hazard lights",
          "Switch on your parking lights",
        ],
        correctIndex: 1,
        explanation:
          "Wipers on means headlights on. Florida ties the two together so that a vehicle in rain is visible to everyone else on the road.",
        context:
          "Rain brings a package of adjustments. Roads are slickest at the start of a shower after a dry spell, because oil lifts off the surface. Wet roads lengthen your stopping distance, so you extend your following distance. Low beams are the right choice in fog, smoke or heavy rain, because high beams reflect back and make visibility worse.",
        trap:
          "Hazard lights while moving are a bad idea in Florida rain: they hide your brake lights and your turn signals from the driver behind.",
        excerptKey: "wipers-headlights",
        sourceLabel: "Official Florida Driver License Handbook - Special Driving Situations",
        sourceUrl: HB,
      },
      {
        id: "fl_s1_30",
        topic: "rightOfWay",
        question: "You are approaching a roundabout with traffic already circulating in it. What do you do?",
        choices: [
          "Stop at the entry line regardless of whether anything is coming",
          "Yield to the traffic already in the roundabout",
          "Yield only to traffic entering from your left",
          "Enter and merge, since traffic in a roundabout must let you in",
        ],
        correctIndex: 1,
        explanation:
          "Drivers entering a roundabout yield to traffic already circulating. If nothing is coming you may enter without yielding, which is what separates a roundabout from a stop-controlled junction.",
        context:
          "Florida roundabouts run one way, counter-clockwise. Once inside you do not change lanes and you do not stop, and you signal before you exit. On a multi-lane roundabout you pick your lane before entering: right lane to go straight or right, left lane to go straight, turn left, or make a U-turn. You yield to pedestrians in the crosswalks both entering and leaving.",
        trap:
          "Stopping at every roundabout entry is what causes rear-end collisions there. A roundabout entry is a yield, not a stop.",
        excerptKey: "roundabout-yield",
        sourceLabel: "Official Florida Driver License Handbook - Roundabouts",
        sourceUrl: HB,
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Getting Comfortable",
    difficulty: "easy",
    description:
      "Thirty questions on the rules most Florida drivers get right once they have read the handbook properly: markings, signals, the graduated licence curfews, and the numbers that carry points.",
    questions: [
      {
        id: "fl_s2_01",
        topic: "signs",
        question: "An orange diamond sign appears ahead of you. What is it telling you?",
        choices: [
          "The road is closed to through traffic",
          "A school zone begins here",
          "There is construction or maintenance work ahead",
          "A general hazard is ahead",
        ],
        correctIndex: 2,
        explanation:
          "Orange is Florida's construction and maintenance colour. An orange sign means work is going on and the layout ahead may not match what you expect.",
        context:
          "Work zones bring their own devices as well as signs: barricades, drums and cones as channelling devices, flashing arrow panels to move you across, and flaggers in high-visibility clothing whose instructions carry the force of law. Speeding fines are doubled in an active work zone.",
        trap:
          "Yellow is the general warning colour. Orange narrows it specifically to roadwork, and the exam expects you to know which is which.",
        excerptKey: "sign-colors-orange",
        sourceLabel: "Official Florida Driver License Handbook - Traffic Sign Colors",
        sourceUrl: HB,
      },
      {
        id: "fl_s2_02",
        topic: "signals",
        question: "What does a single solid white line between two lanes going the same way mean?",
        choices: [
          "The lane to your right is a bicycle lane",
          "You may travel on both sides of it but should not cross unless you must avoid a hazard",
          "You may cross it freely to change lanes",
          "Crossing is forbidden under any circumstances",
        ],
        correctIndex: 1,
        explanation:
          "A single solid white line discourages lane changes rather than banning them outright. Traffic runs the same direction on both sides, and you cross only when you have to in order to avoid a hazard.",
        context:
          "White lines separate same-direction traffic, and the pattern sets the strength of the instruction. Broken white means change lanes when safe, single solid white means stay put unless you must move, and double solid white means changing lanes is not allowed at all. Solid white is used approaching intersections for exactly this reason.",
        trap:
          "'Forbidden under any circumstances' is the double solid white rule. A single solid white line is a strong discouragement, not an absolute bar.",
        excerptKey: "solid-white-line",
        sourceLabel: "Official Florida Driver License Handbook - Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "fl_s2_03",
        topic: "rules",
        question: "The light ahead turns steady yellow while you are still some distance from it. What should you do?",
        choices: [
          "Accelerate to clear the intersection before the red",
          "Continue at the same speed and expect a grace period",
          "Stop immediately in all circumstances",
          "Stop if you can do so safely",
        ],
        correctIndex: 3,
        explanation:
          "Steady yellow warns that the light is changing to red. Florida asks you to stop if you can do it safely, and being inside the intersection when the light goes red is the situation the rule exists to avoid.",
        context:
          "The judgement is about safety, not speed. Braking hard enough to be rear-ended is not stopping safely, which is the whole reason the rule is worded conditionally. Approaching every green at a speed that lets you stop if it changes takes most of the difficulty out of the yellow-light decision.",
        trap:
          "'Stop immediately in all circumstances' turns a judgement call into a rule that would put you through the windscreen of the car behind.",
        excerptKey: "yellow-light",
        sourceLabel: "Official Florida Driver License Handbook - Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "fl_s2_04",
        topic: "speed",
        question:
          "Traffic on a 45 mph road is moving at 53 mph and you keep pace. What is your position under Florida law?",
        choices: [
          "You are speeding and can be cited",
          "You are legal as long as you are not the fastest vehicle",
          "You are protected because you are moving with the flow of traffic",
          "You are legal because Florida allows a 10 mph tolerance",
        ],
        correctIndex: 0,
        explanation:
          "Florida calls the speeding buffer a myth in as many words. There is no allowance to drive up to 10 mph over the limit, and you can be cited for any amount over.",
        context:
          "Two separate duties are in play. You must not exceed the posted limit, and you are responsible for knowing what the limit is on the road you are on. At the same time you must not drive so slowly that you block traffic moving at normal, safe speeds, which is also an offence. The resolution is to drive with the flow but within the limit.",
        trap:
          "'Moving with the flow' is real advice about safety and is not a legal defence. Everyone in that queue can be cited.",
        excerptKey: "speeding-buffer-myth",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Driving Safety",
        sourceUrl: HB,
      },
      {
        id: "fl_s2_05",
        topic: "rightOfWay",
        question:
          "You and another driver reach a four-way stop at what looks like exactly the same moment, and the other car is on your right. Who goes first?",
        choices: [
          "Whoever signals first goes first",
          "The driver going straight goes first regardless of position",
          "The driver on the right goes first",
          "You go first, because the driver on the right must give way",
        ],
        correctIndex: 2,
        explanation:
          "At an all-way stop, vehicles go in the order they arrived. When two arrive at about the same time, each driver yields to the driver on their right, so the car on your right goes first.",
        context:
          "The same tie-breaker covers a dead traffic signal, where you treat the intersection as a four-way stop and the driver on the left yields to the driver on the right. It also helps to know the related rule: at a two-way stop the turning vehicle yields to the vehicle going straight.",
        trap:
          "Reversing the rule so that the driver on the right yields is the single most common right-of-way error people report after failing.",
        excerptKey: "all-way-stop-tie",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "fl_s2_06",
        topic: "parking",
        question: "You are parking facing downhill next to a kerb. Which way do the front wheels go?",
        choices: [
          "Straight ahead, with the parking brake set",
          "Away from the kerb",
          "Toward the kerb",
          "It makes no difference on a Florida gradient",
        ],
        correctIndex: 2,
        explanation:
          "Downhill, you turn the wheels toward the kerb so that if the car rolls it runs into the kerb rather than into the traffic lane.",
        context:
          "Florida gives you three cases, and the logic behind all of them is the same: aim the car at the kerb or away from traffic. Downhill, wheels toward the kerb. Uphill with a kerb, wheels away from the kerb so the tyre backs into it. Uphill with no kerb, wheels to the right so the car rolls off the road. Then set the parking brake, put an automatic in Park or a manual in Reverse downhill and First uphill, and switch off.",
        trap:
          "'Away from the kerb' is the uphill answer. The two cases are mirror images and swapping them is the classic hill-parking mistake.",
        excerptKey: "parking-hills-wheels",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Parking on Hills",
        sourceUrl: HB,
      },
      {
        id: "fl_s2_07",
        topic: "licensing",
        question:
          "A 16-year-old holds a full Florida driver licence. When may that driver not be on the road alone?",
        choices: [
          "Between 11 pm and 6 am",
          "Between 10 pm and 6 am",
          "Between midnight and 5 am",
          "Between 1 am and 5 am",
        ],
        correctIndex: 0,
        explanation:
          "A 16-year-old licence holder may not drive between 11 pm and 6 am unless driving to or from work, or accompanied by a licensed driver aged 21 or over.",
        context:
          "The curfew loosens with each year, and the exam likes to test the difference. Learner's licence holders drive daylight hours only for the first three months, then until 10 pm, and always with a licensed driver 21 or older beside them. Sixteen-year-olds get 6 am to 11 pm. Seventeen-year-olds get 5 am to 1 am. The work exception and the accompanying-driver exception apply at both licensed ages.",
        trap:
          "1 am to 5 am is the 17-year-old window. Ages 16 and 17 have different curfews and the exam relies on people blurring them together.",
        excerptKey: "curfew-16",
        commonlyMissed: true,
        sourceLabel: "FLHSMV - Graduated Driver License Laws and Driving Curfews",
        sourceUrl: GDL,
      },
      {
        id: "fl_s2_08",
        topic: "impairment",
        question:
          "A driver stopped on suspicion of impairment refuses the breath test for the first time. What happens to the licence?",
        choices: [
          "It is automatically suspended for one year",
          "A six-month suspension, the same as an under-21 alcohol reading",
          "Nothing until a court convicts them",
          "A 90-day suspension",
        ],
        correctIndex: 0,
        explanation:
          "Under Florida's implied consent law, refusing the test brings an automatic one-year suspension. A second refusal is 18 months and a first degree misdemeanour on top.",
        context:
          "By signing for your licence you have already agreed to submit to a breath, blood or urine test when an officer has reasonable cause. The suspension for refusing is separate from anything a court does about the underlying driving charge, so refusing does not avoid a penalty, it adds one. Where a crash caused death or serious injury a blood test can be taken with or without your consent.",
        trap:
          "Assuming a refusal leaves nothing to prove is the mistake. The suspension is administrative and does not wait for a conviction.",
        excerptKey: "implied-consent-refusal",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Implied Consent Law",
        sourceUrl: HB,
      },
      {
        id: "fl_s2_09",
        topic: "sharing",
        question:
          "A school bus stops with its stop signal out on the far side of a highway divided by a raised concrete barrier. You are travelling the opposite way. What must you do?",
        choices: [
          "Stop, because school bus rules apply on every road",
          "Stop only if you can see children crossing",
          "Slow to 20 mph and continue",
          "You need not stop, but proceed with caution",
        ],
        correctIndex: 3,
        explanation:
          "When a highway is divided by a raised barrier or an unpaved median at least five feet wide, traffic moving the opposite way to the bus does not have to stop. It should still proceed with caution.",
        context:
          "The exception is narrow and specific. It needs a physical divider, either a raised barrier or an unpaved median five feet or more across. Painted lines and pavement markings do not count as barriers no matter how wide they are. And it never applies to traffic moving the same direction as the bus, which must always stop and stay stopped until the signal is withdrawn.",
        trap:
          "A wide painted median looks exactly like a divided highway from the driver's seat and is not one. That is the version of this question that catches people.",
        excerptKey: "school-bus-divided",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - School Buses",
        sourceUrl: HB,
      },
      {
        id: "fl_s2_10",
        topic: "safety",
        question: "What exactly is a blind spot?",
        choices: [
          "The area near the left and right rear corners that mirrors and peripheral vision miss",
          "Any part of the road hidden by rain or glare",
          "The gap between your headlight beams at night",
          "The area directly in front of the bonnet that the driver cannot see",
        ],
        correctIndex: 0,
        explanation:
          "Blind spots sit near the left and right rear corners of the vehicle, in the space that neither your mirrors nor your peripheral vision reaches.",
        context:
          "Because mirrors cannot cover them, the only fix is to turn your head before you change lanes, pass, or make certain turns. The larger the vehicle the larger its blind spots, and trucks and SUVs have areas close behind them that no mirror shows. The reverse duty matters too: do not sit in someone else's blind spot, move ahead or drop back so the other driver can see you.",
        trap:
          "Blind spots are a fixed geometric feature of the vehicle, not a weather effect, so rain and glare are a different problem with a different fix.",
        excerptKey: "blind-spots-definition",
        sourceLabel: "Official Florida Driver License Handbook - Driving Safety",
        sourceUrl: HB,
      },
      {
        id: "fl_s2_11",
        topic: "emergencies",
        question: "The back of your car starts to slide out on a wet Florida road. What do you do with the steering?",
        choices: [
          "Turn the wheel fully in the direction the rear is sliding",
          "Steer the front tyres in the direction you want to go",
          "Steer the opposite way to counteract the slide",
          "Hold the wheel dead straight and brake hard",
        ],
        correctIndex: 1,
        explanation:
          "Take your foot off the accelerator, avoid the brakes if you can, and turn the front tyres in the direction you want the car to go, which is the same thing as steering into the skid.",
        context:
          "The instinct to brake is what turns a recoverable slide into a spin, because locked wheels cannot steer. The other half of the answer is avoiding overcorrection: steering too sharply after a slide, or after dropping a wheel off the pavement, is what produces rollovers and head-on collisions in Florida crash reports.",
        trap:
          "Steering the opposite way sounds like the intuitive correction and is precisely what makes the car spin.",
        excerptKey: "skid-steer-direction",
        sourceLabel: "Official Florida Driver License Handbook - Handling Emergencies",
        sourceUrl: HB,
      },
      {
        id: "fl_s2_12",
        topic: "signs",
        question: "A sign at the intersection reads NO TURN ON RED. What does it prohibit?",
        choices: [
          "Turns during posted hours only",
          "U-turns while the light is red",
          "Right turns only",
          "Both right and left turns while the light is red",
        ],
        correctIndex: 3,
        explanation:
          "The sign bars both right and left turns for as long as the light is red. You wait for the green signal.",
        context:
          "Without that sign, Florida permits a right turn on red after a complete stop when the way is clear, and a left turn on red from a one-way street onto another one-way street whose traffic runs to the left. The sign switches off both permissions, which is why it is worded to cover left as well as right.",
        trap:
          "Reading it as a right-turn ban only is understandable, since right on red is the common case, but it leaves the one-way left turn illegal at that junction.",
        excerptKey: "no-turn-on-red-sign",
        sourceLabel: "Official Florida Driver License Handbook - Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "fl_s2_13",
        topic: "rules",
        question: "When is it legal to pass another vehicle on the right in Florida?",
        choices: [
          "Only on a one-way street",
          "When there are two or more lanes going your way, or the vehicle ahead is turning left",
          "Whenever the shoulder is paved and wide enough",
          "Whenever the vehicle ahead is under the speed limit",
        ],
        correctIndex: 1,
        explanation:
          "Passing on the right is legal in two situations: where there are two or more lanes moving your direction, or where the vehicle you are passing is making a left turn.",
        context:
          "Everything else about passing points the other way. You signal before moving into the left lane, you do not pass more than one vehicle at a time, you must not exceed the speed limit while passing, and you have to be back on the right side of the road before you come within 200 feet of any approaching vehicle. Using the shoulder to get past is not passing, it is driving off the roadway.",
        trap:
          "A slow vehicle ahead of you creates frustration, not a legal right to undertake it on a two-lane road.",
        excerptKey: "passing-on-right",
        sourceLabel: "Official Florida Driver License Handbook - Passing",
        sourceUrl: HB,
      },
      {
        id: "fl_s2_14",
        topic: "signals",
        question: "A red X is illuminated over the lane you are in. What does it mean?",
        choices: [
          "The lane is reserved for high occupancy vehicles",
          "The lane is about to reverse direction",
          "The lane is closed ahead but you may use it until then",
          "Never drive in that lane",
        ],
        correctIndex: 3,
        explanation:
          "A red X means never drive in that lane. It is an instruction about the lane you are in right now, not a warning about something further on.",
        context:
          "Lane signals show up where the direction of flow changes during the day, where toll booths open and close, and where lanes are opened or closed for incidents. The set is short: red X means stay out, yellow X means the lane signal is about to turn red so move out, and a green arrow means you may use the lane while obeying every other sign and signal.",
        trap:
          "'Closed ahead but usable until then' is the yellow X. The red X is immediate.",
        excerptKey: "lane-signal-red-x",
        sourceLabel: "Official Florida Driver License Handbook - Lane Signals",
        sourceUrl: HB,
      },
      {
        id: "fl_s2_15",
        topic: "speed",
        question:
          "You are on a Florida highway posted at 70 mph. Is there a lower limit you must also respect?",
        choices: [
          "Yes, but only for commercial vehicles",
          "Yes, the minimum speed there is 50 mph",
          "No, only maximum limits are enforceable",
          "Yes, the minimum speed there is 40 mph",
        ],
        correctIndex: 1,
        explanation:
          "Where the posted limit is 70 mph, the minimum is 50 mph. A vehicle travelling much slower than that becomes a hazard to everything approaching it.",
        context:
          "The minimum sits alongside a broader rule: it is against Florida law to drive so slowly that you block or delay traffic moving at normal, safe speeds. If you are slower than the flow for any reason, you keep right so others can pass. Slower traffic must also move out of the left lane when a faster vehicle comes up behind.",
        trap:
          "Believing only maximum limits can be enforced is common and wrong. Florida cites drivers for impeding traffic.",
        excerptKey: "minimum-speed-50",
        sourceLabel: "Official Florida Driver License Handbook - Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "fl_s2_16",
        topic: "rightOfWay",
        question:
          "You are on an unpaved road approaching an open intersection with a paved road. There are no signs or signals. Who yields?",
        choices: [
          "Neither, since an open intersection has no priority rules",
          "Whichever driver arrives second",
          "The driver on the paved road, because you have less traction",
          "You do, because you are entering a paved road from an unpaved one",
        ],
        correctIndex: 3,
        explanation:
          "At an open intersection you yield when you are entering a paved road from an unpaved one. The vehicle already on the better road has priority.",
        context:
          "An open intersection is simply one with no signs or signals, and Florida gives four situations where you must yield in one: when a vehicle is already in the intersection, when you enter or cross a state highway from a secondary road, when you enter a paved road from an unpaved road, and when you plan to turn left and a vehicle is approaching from the opposite direction.",
        trap:
          "'No signs means no rules' is the belief that produces these crashes. An open intersection has a full set of priority rules, they are just not painted on anything.",
        excerptKey: "open-intersection-yield",
        sourceLabel: "Official Florida Driver License Handbook - Open Intersections",
        sourceUrl: HB,
      },
      {
        id: "fl_s2_17",
        topic: "sharing",
        question: "What is the No Zone around a commercial truck?",
        choices: [
          "The lane a truck is not permitted to use",
          "The area in front of the cab where the driver cannot see low vehicles",
          "The large blind spots in front of, behind and on both sides of the vehicle",
          "The space a truck needs to stop from highway speed",
        ],
        correctIndex: 2,
        explanation:
          "The No Zone is the set of large blind spots a commercial vehicle carries in front, behind and along both sides. Sit in one and the driver cannot see you at all, however many mirrors the truck has.",
        context:
          "The practical rules follow from that. Do not tailgate, because the rear No Zone is where you also lose your view of the road ahead. Pass on the left for maximum visibility and get through it quickly. Never squeeze between a truck and the kerb when it swings wide to turn right. And do not cross behind a truck that is backing or preparing to back.",
        trap:
          "Describing the No Zone as stopping distance mixes up two real hazards. Both matter, but the No Zone is specifically about what the driver cannot see.",
        excerptKey: "cmv-no-zone",
        sourceLabel: "Official Florida Driver License Handbook - Commercial Motor Vehicles",
        sourceUrl: HB,
      },
      {
        id: "fl_s2_18",
        topic: "parking",
        question: "What does Florida law require you to do with the keys when you leave a parked vehicle?",
        choices: [
          "Leave them in the ignition if the vehicle is on private property",
          "Take them out of the vehicle",
          "Leave them with a passenger who stays in the car",
          "Hide them inside the vehicle out of sight",
        ],
        correctIndex: 1,
        explanation:
          "Florida law requires you to take the keys out of the vehicle before you leave it. That is a statutory requirement, not a security tip.",
        context:
          "It sits at the end of a short routine the handbook expects every time you park: move as far from traffic as you can, set the parking brake, put an automatic in Park or a manual in Reverse or First depending on the slope, switch off, take the keys, and lock up. Then check for traffic before you open your door so you do not open it into a cyclist.",
        trap:
          "'On private property' is the kind of exception people invent. The rule is written about leaving the vehicle, not about where it is standing.",
        excerptKey: "parking-take-keys",
        sourceLabel: "Official Florida Driver License Handbook - Parking",
        sourceUrl: HB,
      },
      {
        id: "fl_s2_19",
        topic: "signs",
        question: "You reach a railroad crossing marked only with a crossbuck sign. What does that sign mean?",
        choices: [
          "It is a yield sign and you must yield to trains",
          "It is a stop sign and you must stop every time",
          "It is a warning sign with no legal force",
          "It requires you to stop only when a train is visible",
        ],
        correctIndex: 0,
        explanation:
          "A crossbuck is a yield sign. You must yield the right-of-way to trains, which in practice means slowing, looking and being ready to stop.",
        context:
          "You must actually stop if the warning devices are flashing, the gate is down, a flagger is warning of a train, or a train is clearly visible. Never stop on the tracks or within 15 feet of the crossing, make sure there is room for your car on the far side before you start across, and remember that a sign under the crossbuck tells you how many tracks there are.",
        trap:
          "Treating the crossbuck as a stop sign feels cautious and gets it wrong on the exam. Treating it as merely advisory is the dangerous version of the same confusion.",
        excerptKey: "crossbuck-sign",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Railroad Crossing Signs & Signals",
        sourceUrl: HB,
      },
      {
        id: "fl_s2_20",
        topic: "rules",
        question: "At what distance must you dip your high beams for an oncoming vehicle?",
        choices: [
          "Within 1,000 feet",
          "Within 300 feet",
          "Within 500 feet",
          "Within 200 feet",
        ],
        correctIndex: 2,
        explanation:
          "You must switch to low beams within 500 feet of an oncoming vehicle. The figure for a vehicle you are following is different and shorter.",
        context:
          "Keep the pair straight: 500 feet for oncoming traffic, 300 feet for the vehicle ahead of you. High beams reveal objects up to about 450 feet away and are most useful above 25 mph, but they are the wrong tool in fog, smoke or heavy rain, where the light bounces back and reduces what you can see.",
        trap:
          "300 feet is the following-vehicle figure. The two distances are the most-swapped pair in the night-driving section.",
        excerptKey: "high-beam-500-oncoming",
        sourceLabel: "Official Florida Driver License Handbook - Night Driving",
        sourceUrl: HB,
      },
      {
        id: "fl_s2_21",
        topic: "impairment",
        question:
          "A driver is impaired by a lawfully prescribed medication rather than alcohol. How does Florida treat it?",
        choices: [
          "The same as impairment by alcohol, with the same penalties",
          "As a matter for the prescribing doctor, not the courts",
          "As an offence only if the driver was also drinking",
          "As a lesser offence, since the drug was prescribed",
        ],
        correctIndex: 0,
        explanation:
          "Driving while impaired by drugs carries the same penalties as driving while impaired by alcohol. A valid prescription is not a defence.",
        context:
          "The DUI definition covers alcoholic beverages, controlled substances, prescriptions and over-the-counter medication alike. Cold and allergy remedies are the ones people underestimate, and mixing any of them with alcohol multiplies the effect, so a single drink taken with an antihistamine can behave like several. Checking the label or asking a pharmacist before you drive is the handbook's advice.",
        trap:
          "Treating a prescription as a licence to drive impaired is the assumption behind a large share of drugged-driving charges.",
        excerptKey: "drugged-driving-same-penalty",
        sourceLabel: "Official Florida Driver License Handbook - Drugged Driving",
        sourceUrl: HB,
      },
      {
        id: "fl_s2_22",
        topic: "emergencies",
        question:
          "Your car has anti-lock brakes and you need to stop hard to avoid a collision. What is the correct technique?",
        choices: [
          "Pump the brake pedal rapidly",
          "Brake hard, then release as soon as you feel the pedal pulse",
          "Press down hard on the pedal, hold it, and steer out of danger",
          "Apply the parking brake as well as the foot brake",
        ],
        correctIndex: 2,
        explanation:
          "With ABS you press hard, hold the pressure, and steer around the hazard. The system pumps the brakes far faster than you could and keeps the wheels turning so you can steer.",
        context:
          "The technique reverses between systems, which is why it is worth knowing which you have. Conventional brakes need pumping when traction is lost. ABS needs constant hard pressure, and pumping or easing off actually disengages it. You can usually spot ABS by the dashboard symbol that lights briefly when you start the engine.",
        trap:
          "Pumping is the conventional-brake technique, and applying it to an ABS car switches off the very system that would have saved the stop.",
        excerptKey: "abs-braking",
        sourceLabel: "Official Florida Driver License Handbook - Emergency Braking",
        sourceUrl: HB,
      },
      {
        id: "fl_s2_23",
        topic: "safety",
        question: "How must a five-year-old child be restrained in a Florida vehicle?",
        choices: [
          "In an adult safety belt alone",
          "In a rear-facing safety seat",
          "In a safety seat only, with no booster option",
          "In a safety seat or a booster seat",
        ],
        correctIndex: 3,
        explanation:
          "Children aged 4 and 5 must be in either a safety seat or a booster seat. Children under 4 must be in a safety seat.",
        context:
          "Florida also expects children under 13 in the rear seat, because a front airbag can injure or kill a young child, and a rear-facing seat must never go in front of an airbag. There is one narrow exception for 4 and 5 year olds: a belt without a booster may be used when the driver is not part of the child's immediate family and the child is being carried as a favour or in an emergency.",
        trap:
          "'Safety seat only, no booster' overstates the rule for 4 and 5 year olds, and an adult belt alone understates it.",
        excerptKey: "child-restraint-ages",
        sourceLabel: "Official Florida Driver License Handbook - Child Passenger Safety",
        sourceUrl: HB,
      },
      {
        id: "fl_s2_24",
        topic: "signals",
        question: "Double solid yellow lines run down the middle of the road. What do they permit?",
        choices: [
          "Passing when the road ahead is clear for 500 feet",
          "Passing in one direction only",
          "No passing in either direction",
          "Passing only for vehicles turning left",
        ],
        correctIndex: 2,
        explanation:
          "Double solid yellow lines mean vehicles moving in either direction must not pass across them. Florida still allows you to turn left across them, and to pass a bicyclist when it is safe.",
        context:
          "Yellow means the traffic on the far side is coming toward you, and the pattern on your side is what governs your own permission. Solid on your side means no passing from your lane. Broken on your side means passing is allowed when safe. A double set with one broken half is exactly this rule applied separately to each direction.",
        trap:
          "The 500-foot figure belongs to the separate rule about hills and curves. It does not unlock a double solid yellow line.",
        excerptKey: "double-solid-yellow",
        sourceLabel: "Official Florida Driver License Handbook - Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "fl_s2_25",
        topic: "licensing",
        question:
          "You accumulate 12 points on your Florida record within a 12-month period. What follows?",
        choices: [
          "A written warning from FLHSMV",
          "A 30-day suspension",
          "A three-month suspension",
          "A one-year suspension",
        ],
        correctIndex: 1,
        explanation:
          "Twelve points inside 12 months brings a 30-day suspension. The scale climbs from there.",
        context:
          "There are three thresholds and they use three different windows: 12 points in 12 months is a 30-day suspension, 18 points in 18 months is three months, and 24 points in 36 months is a year. Points follow you across state lines, since an out-of-state or federal conviction earns the same number here. Drivers under 18 face a separate and much lower trigger.",
        trap:
          "Three months and one year are the penalties at the higher thresholds. The exam gives you one number and expects you to match it to the right window.",
        excerptKey: "point-suspensions",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Point System",
        sourceUrl: HB,
      },
      {
        id: "fl_s2_26",
        topic: "signs",
        question: "A yellow sign warns DIVIDED HIGHWAY ENDS. What is about to happen?",
        choices: [
          "The road will narrow to a single lane",
          "The median ends and you will be on a road with two-way traffic",
          "The highway becomes a limited access road",
          "The speed limit is about to increase",
        ],
        correctIndex: 1,
        explanation:
          "The divided highway ends 350 to 500 feet ahead, after which you will be on an ordinary two-way road. You keep right.",
        context:
          "Its opposite number is DIVIDED HIGHWAY AHEAD, which tells you a median or barrier is about to separate the directions. Both signs exist because the transition is where wrong-way entries happen. If you ever see red reflectors facing you on the lane lines, you have got it wrong and are facing oncoming traffic.",
        trap:
          "'Narrows to a single lane' describes the lane reduction sign. This one is about losing the median, not losing a lane.",
        excerptKey: "divided-highway-ends",
        sourceLabel: "Official Florida Driver License Handbook - Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "fl_s2_27",
        topic: "rightOfWay",
        question: "You are pulling out of a shopping centre driveway onto a main road. Who has the right-of-way?",
        choices: [
          "Whichever vehicle reaches the mouth of the driveway first",
          "Traffic already on the road, plus pedestrians and cyclists on the sidewalk",
          "Traffic on the road only; pedestrians must wait for vehicles",
          "You do, once you have signalled and moved into the gap",
        ],
        correctIndex: 1,
        explanation:
          "A driver leaving a driveway, alley or roadside yields to vehicles already on the main road and to pedestrians and cyclists on the sidewalk or in the bike lane.",
        context:
          "The sidewalk half of the rule is the part people forget. Florida requires you to stop for pedestrians on the sidewalk when you enter or leave an alley, driveway or private road, and cyclists on a sidewalk have the rights of pedestrians. The same yielding logic runs through the open intersection rules and the freeway merge.",
        trap:
          "Treating the sidewalk as part of your exit path rather than a crossing you must yield to is what produces low-speed collisions with pedestrians at driveways.",
        excerptKey: "driveway-yield",
        sourceLabel: "Official Florida Driver License Handbook - Driveways",
        sourceUrl: HB,
      },
      {
        id: "fl_s2_28",
        topic: "speed",
        question: "What happens to a speeding fine incurred in an active Florida school zone or work zone?",
        choices: [
          "It is doubled",
          "It is increased by 50 percent",
          "It is unchanged, but extra points are added",
          "It is reduced if you complete a driver improvement course",
        ],
        correctIndex: 0,
        explanation:
          "Fines are doubled for speeding inside a school zone or a construction zone, with civil penalties reaching $1,000 and the possibility of being ordered onto a driving course.",
        context:
          "Florida signs these zones specifically so the penalty is not a surprise: a SPEEDING FINES DOUBLED sign is posted in active school and work zones. Handheld phone use is separately banned in a school crossing, school zone or work zone, and speeding more than 50 mph over any limit carries a $1,000 fine for a first offence.",
        trap:
          "Extra points and a doubled fine are different mechanisms. This question is about the money, and the multiplier is two.",
        excerptKey: "fines-doubled-zones",
        sourceLabel: "Official Florida Driver License Handbook - Speeding",
        sourceUrl: HB,
      },
      {
        id: "fl_s2_29",
        topic: "sharing",
        question: "Which cyclists must wear a helmet in Florida?",
        choices: [
          "All riders regardless of age",
          "All riders and passengers under 18",
          "Only riders on roads posted above 35 mph",
          "All riders and passengers under 16",
        ],
        correctIndex: 3,
        explanation:
          "Florida requires helmets meeting federal safety standards for all bicyclists and passengers under 16. Older riders are not required to wear one.",
        context:
          "The other bicycle equipment rules also carry ages and numbers. Between sunset and sunrise a bicycle needs a white front light visible from 500 feet plus a red rear reflector and a red rear light visible from 600 feet. Brakes must stop the bike within 25 feet from 10 mph. Riders may not wear headphones in both ears on the roadway.",
        trap:
          "Eighteen is the age Florida uses for safety belts, not bicycle helmets, and the two get transplanted onto each other.",
        excerptKey: "bike-helmet-under-16",
        sourceLabel: "Official Florida Driver License Handbook - Bicyclists",
        sourceUrl: HB,
      },
      {
        id: "fl_s2_30",
        topic: "rules",
        question:
          "You arrive at a busy intersection where the traffic signal is completely dark and no officer is present. What do you do?",
        choices: [
          "Treat the intersection as a four-way stop",
          "Treat the through road as having priority",
          "Proceed with caution without stopping",
          "Wait for the signal to be restored before crossing",
        ],
        correctIndex: 0,
        explanation:
          "A dead signal with no officer present is treated as a four-way stop. Everyone stops and moves off in arrival order.",
        context:
          "Once you are treating it as a four-way stop, the ordinary rules apply: vehicles go in the order they arrived, and where two arrive together the driver on the left yields to the driver on the right. If an officer is directing traffic, the officer overrides every signal and sign at that junction.",
        trap:
          "'The through road has priority' is how many drivers behave at a dead light and it has no basis in Florida law.",
        excerptKey: "signal-out-of-order",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Traffic Signals",
        sourceUrl: HB,
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Real Exam Ground",
    difficulty: "medium",
    description:
      "Thirty-five questions at the difficulty the Class E exam actually uses: exact distances, the rules that only apply in particular circumstances, and the Florida-specific items people meet for the first time on test day.",
    questions: [
      {
        id: "fl_s3_01",
        topic: "signals",
        question:
          "Double yellow lines run down the centre of the road, solid on your side and broken on the far side. What does that mean for you?",
        choices: [
          "Passing is allowed from your lane when safe",
          "Passing is not allowed from your lane",
          "Neither direction may pass",
          "You may pass only vehicles turning left",
        ],
        correctIndex: 1,
        explanation:
          "The line nearest you governs your permission. Solid on your side means passing is not allowed from your lane, even though drivers coming the other way may pass across the broken half.",
        context:
          "That is the whole trick to reading double yellow lines: check the half on your side of the centre and ignore the other. Solid on your side means no. Broken on your side means yes when safe. A double set that is solid on both sides bars passing for everyone. In every case you may still turn left across the lines, and pass a bicyclist when it is safe.",
        trap:
          "Reading the broken half and concluding that passing is allowed is exactly the error the paired signs are designed to test.",
        excerptKey: "yellow-solid-your-side",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "fl_s3_02",
        topic: "rules",
        question:
          "You are overtaking on a two-lane road. How much room must you leave between finishing the pass and any approaching vehicle?",
        choices: [
          "You must be back in your lane before coming within 100 feet",
          "You must be back in your lane before coming within 200 feet",
          "You must be back in your lane before coming within 500 feet",
          "There is no fixed distance; use your judgement",
        ],
        correctIndex: 1,
        explanation:
          "Florida requires you to be back on the right side of the road before you come within 200 feet of any approaching vehicle. That is the completion point for a legal pass.",
        context:
          "It works with the other passing distances. You must not pass on a hill or curve where you cannot see 500 feet ahead, or within 100 feet of an intersection, bridge, viaduct, tunnel or railroad crossing. Before pulling back in, you should be able to see the tyres of the vehicle you passed in your rear-view mirror.",
        trap:
          "100 feet is the no-passing distance for intersections and bridges, and importing it here shortens your safety margin by half.",
        excerptKey: "passing-200-feet",
        sourceLabel: "Official Florida Driver License Handbook - Passing",
        sourceUrl: HB,
      },
      {
        id: "fl_s3_03",
        topic: "rightOfWay",
        question:
          "At a two-way stop, you are turning left and an oncoming vehicle intends to go straight through. Who yields?",
        choices: [
          "The first to stop goes first regardless of direction",
          "The turning vehicle yields to the vehicle going straight",
          "Neither, since both faced a stop sign",
          "The vehicle going straight yields to the turning vehicle",
        ],
        correctIndex: 1,
        explanation:
          "Florida is explicit about this one: at a two-way stop, the turning vehicle yields to the vehicle going straight.",
        context:
          "The rule fills a gap that arrival order cannot settle. Two drivers can stop at the same instant on a two-way stop, and someone still has to move first. Turning across the path of traffic is the higher-risk manoeuvre, so it waits. At an all-way stop the ordinary rules take over instead: arrival order first, then yield to the driver on your right.",
        trap:
          "Treating a two-way stop like an all-way stop and falling back on arrival order leaves both drivers convinced they had priority.",
        excerptKey: "two-way-stop-turning-yields",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Intersections",
        sourceUrl: HB,
      },
      {
        id: "fl_s3_04",
        topic: "speed",
        question: "What happens to a vehicle's force of impact when you double its speed?",
        choices: [
          "It increases nine times",
          "It doubles",
          "It quadruples",
          "It increases by half again",
        ],
        correctIndex: 2,
        explanation:
          "Doubling the speed increases the force of impact four times. Tripling it increases the force nine times.",
        context:
          "The same relationship governs braking distance, which is why small increases in speed have such an outsized effect on whether a crash is survivable. At 50 mph on dry pavement with good brakes it takes about 158 feet to stop once you are braking, and about 268 feet in total once perception and reaction are added, nearly the length of a football field.",
        trap:
          "Nine times is the figure for tripling the speed. The exam presents both numbers and expects you to match the right one to the right multiplier.",
        excerptKey: "speed-force-of-impact",
        sourceLabel: "Official Florida Driver License Handbook - Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "fl_s3_05",
        topic: "parking",
        question: "How close to an intersection may you park in Florida?",
        choices: [
          "No closer than 20 feet",
          "No closer than 50 feet",
          "No closer than 15 feet",
          "No closer than 30 feet",
        ],
        correctIndex: 0,
        explanation:
          "Twenty feet is the clearance required at an intersection, so approaching drivers can see round the corner and turning vehicles have room to swing.",
        context:
          "Twenty feet also covers the entrance to a fire, ambulance or rescue station. The neighbouring figures are 15 feet from a fire hydrant, 30 feet from a flashing signal, stop sign or traffic signal, 30 feet from a rural mailbox on a state highway between 8 am and 6 pm, and 50 feet from a railroad crossing.",
        trap:
          "Thirty feet is the figure for a stop sign or signal, which is often a few yards from the intersection itself, so the two feel interchangeable and are not.",
        excerptKey: "parking-distances",
        sourceLabel: "Official Florida Driver License Handbook - Parking",
        sourceUrl: HB,
      },
      {
        id: "fl_s3_06",
        topic: "licensing",
        question: "A 17-year-old with a Florida driver licence may not drive unaccompanied during which hours?",
        choices: [
          "Midnight to 6 am",
          "1 am to 5 am",
          "10 pm to 5 am",
          "11 pm to 6 am",
        ],
        correctIndex: 1,
        explanation:
          "A 17-year-old licence holder is restricted between 1 am and 5 am unless driving to or from work or accompanied by a licensed driver 21 or over.",
        context:
          "The three stages step up in sequence. Learner's licence: daylight only for the first three months, then until 10 pm, always with a licensed driver 21 or older in the seat nearest you. Age 16 with a licence: 6 am to 11 pm. Age 17 with a licence: 5 am to 1 am. Both licensed curfews carry the same two exceptions, work travel and a qualified accompanying driver.",
        trap:
          "11 pm to 6 am is the 16-year-old window, and it is the answer most people give when they have learned only one set of hours.",
        excerptKey: "curfew-17",
        commonlyMissed: true,
        sourceLabel: "FLHSMV - Graduated Driver License Laws and Driving Curfews",
        sourceUrl: GDL,
      },
      {
        id: "fl_s3_07",
        topic: "impairment",
        question: "How long does a DUI conviction stay on a Florida driving record?",
        choices: [
          "Five years",
          "Ten years",
          "Twenty-five years",
          "Seventy-five years",
        ],
        correctIndex: 3,
        explanation:
          "A DUI conviction must remain on the Florida driving record for 75 years. For practical purposes it is permanent.",
        context:
          "The consequences stack up alongside it. A first conviction brings a fine, community service, possible imprisonment, a licence revocation of at least 180 days and 12 hours of DUI school, and the driver must then carry much higher insurance limits for three years. Repeat convictions add longer ignition interlock requirements.",
        trap:
          "Five and ten years are the horizons insurers and background checks typically use, which is why they feel like the official answer.",
        excerptKey: "dui-75-years",
        sourceLabel: "Official Florida Driver License Handbook - Drinking & Driving",
        sourceUrl: HB,
      },
      {
        id: "fl_s3_08",
        topic: "sharing",
        question: "Who may drive a golf cart on a Florida public road where golf carts are permitted?",
        choices: [
          "Only holders of a full Class E driver licence",
          "Anyone, since a golf cart is not a motor vehicle",
          "Anyone aged 14 or over",
          "Anyone under 18 only if they hold a learner's licence or driver licence",
        ],
        correctIndex: 3,
        explanation:
          "A golf cart must not be driven on a public road by anyone under 18 unless they hold a valid learner's licence or driver licence. Drivers 18 and over need government-issued photo identification.",
        context:
          "Golf carts are only allowed on roads specifically designated for them and signed accordingly, and only where the local county or city permits it at all. They run between sunrise and sunset unless the local government allows otherwise and the cart carries the extra night equipment. You may cross a state road where the posted limit is 45 mph or less, and only at an intersection with a traffic control device.",
        trap:
          "Assuming a golf cart falls outside licensing rules is common in Florida retirement communities and is exactly what this question tests.",
        excerptKey: "golf-cart-age",
        sourceLabel: "Official Florida Driver License Handbook - Golf Carts",
        sourceUrl: HB,
      },
      {
        id: "fl_s3_09",
        topic: "emergencies",
        question: "Your right wheels drop off the pavement onto a soft shoulder at speed. What is the correct response?",
        choices: [
          "Ease off the accelerator, hold the wheel straight, brake lightly, then return slowly when clear",
          "Accelerate gently to keep the car stable and steer back on",
          "Steer back onto the pavement immediately",
          "Brake hard to scrub off speed before returning",
        ],
        correctIndex: 0,
        explanation:
          "Take your foot off the gas, hold the wheel firmly and steer straight, brake lightly, then wait until the road is clear and come back onto the pavement slowly, signalling as you do.",
        context:
          "The danger is overcorrection, which is what happens when a driver yanks the wheel to get back on the road. Florida singles it out as a cause of rollovers and head-on collisions. The same discipline applies to a tyre blowout: off the gas, no braking at first, concentrate on steering, slow gradually, then pull fully off the road.",
        trap:
          "Steering back immediately is the instinct, and at speed it slingshots the car across the centre line the moment the tyre grips.",
        excerptKey: "right-wheels-off-pavement",
        sourceLabel: "Official Florida Driver License Handbook - Handling Emergencies",
        sourceUrl: HB,
      },
      {
        id: "fl_s3_10",
        topic: "signs",
        question: "A yellow sign at the start of a motorway exit ramp shows a speed. What is that number?",
        choices: [
          "The legal limit on the road you are joining",
          "The speed at which the ramp was designed to be built",
          "The maximum safe speed for the ramp",
          "The minimum speed for the ramp",
        ],
        correctIndex: 2,
        explanation:
          "An exit speed sign gives the maximum safe speed for that ramp, and you slow to it before you get there.",
        context:
          "Slowing belongs in the deceleration lane, not on the ramp itself. The proper exit sequence is to get into the exit lane, signal, slow in the deceleration lane and check the posted ramp speed. Advisory speed panels work the same way and can be attached to any warning sign to give the fastest safe speed through the hazard ahead.",
        trap:
          "Reading it as the limit on the road you are joining leads drivers to hold motorway speed into a tightening ramp.",
        excerptKey: "exit-speed-sign",
        sourceLabel: "Official Florida Driver License Handbook - Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "fl_s3_11",
        topic: "safety",
        question: "What does Florida law say about using a handheld phone in a marked school zone?",
        choices: [
          "It is prohibited only during posted school hours",
          "It is allowed if the vehicle is stationary in traffic",
          "It is prohibited",
          "It is allowed for calls but not for texting",
        ],
        correctIndex: 2,
        explanation:
          "Florida prohibits operating a motor vehicle while using a wireless communications device in a handheld manner in a designated school crossing, school zone or work zone.",
        context:
          "That sits on top of the statewide texting ban, which makes it illegal to operate a motor vehicle while texting anywhere in Florida. Texting carries 3 points, with extra points added when it happens in a school zone or results in a crash. Handheld use in a school crossing, school zone or work zone carries 3 points of its own.",
        trap:
          "'Calls but not texting' is the statewide picture outside these zones and is exactly what the zone rule tightens.",
        excerptKey: "handheld-school-work-zone",
        sourceLabel: "Official Florida Driver License Handbook - Distracted Driving",
        sourceUrl: HB,
      },
      {
        id: "fl_s3_12",
        topic: "signals",
        question: "You are waiting to turn left and the signal shows a flashing yellow arrow. What does it mean?",
        choices: [
          "The light is about to turn red and you must stop",
          "The turn is prohibited until a green arrow appears",
          "Oncoming traffic has been stopped and you may turn",
          "You may turn, but oncoming traffic has a green light so you must yield",
        ],
        correctIndex: 3,
        explanation:
          "A flashing yellow arrow permits the turn but gives you no protection. Oncoming traffic has a green light, so you yield to it and to pedestrians before going.",
        context:
          "Compare it with the other arrows. A green arrow means the turn is protected, and you still yield to anything already in the intersection. A yellow arrow means the protected phase is ending. A red arrow means no movement in that direction until the green appears, though you may still turn right on red after stopping unless a sign forbids it.",
        trap:
          "Reading the flashing arrow as protection is what produces left-turn collisions at these signals. Flashing means permitted, not protected.",
        excerptKey: "flashing-yellow-arrow",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "fl_s3_13",
        topic: "rules",
        question: "What is the centre lane of a three-lane or five-lane Florida highway used for?",
        choices: [
          "Slow-moving vehicles",
          "Turning left only",
          "Overtaking in either direction",
          "Whichever direction has the heavier flow",
        ],
        correctIndex: 1,
        explanation:
          "The centre lane of a three-lane or five-lane highway is for left turns only. Drivers from both directions use it to turn, and it is never a passing lane.",
        context:
          "Its markings say the same thing, with the two-way roadway centre lane marked so that either direction may use it to turn left. Beyond that, Florida keeps you right: on a two-lane highway you drive in the right lane except to overtake, and on a road with four or more lanes carrying two-way traffic you stay in the right lanes except when overtaking.",
        trap:
          "Using it to build up speed before merging, or to get past a queue, is the everyday misuse this question is aimed at.",
        excerptKey: "three-lane-center",
        sourceLabel: "Official Florida Driver License Handbook - Traffic Lanes",
        sourceUrl: HB,
      },
      {
        id: "fl_s3_14",
        topic: "rightOfWay",
        question:
          "A public transit bus ahead of you signals and starts to pull out of a designated pullout bay in your direction of travel. What must you do?",
        choices: [
          "Yield the right-of-way to the bus",
          "Yield only if the bus is fully in your lane",
          "Sound your horn and pass on the left",
          "Maintain speed; the bus must wait for a gap",
        ],
        correctIndex: 0,
        explanation:
          "Florida requires all drivers to yield to a public transit bus travelling the same direction that has signalled and is re-entering traffic from a designated pullout bay.",
        context:
          "It is a narrow rule with three conditions: the same direction of travel, a signal from the bus, and a specifically designated pullout bay. It exists because a bus cannot force a gap and would otherwise sit at the kerb through the whole rush hour. School buses run on a completely different and much stronger set of rules.",
        trap:
          "'The bus must wait for a gap' is the ordinary merge rule and is exactly what Florida reverses for transit buses leaving a pullout bay.",
        excerptKey: "transit-bus-yield",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Public Transit",
        sourceUrl: HB,
      },
      {
        id: "fl_s3_15",
        topic: "speed",
        question:
          "A road is posted at 55 mph and a thunderstorm has cut visibility badly. What does the posted number represent?",
        choices: [
          "A recommendation that carries no penalty in bad weather",
          "The speed you should aim to maintain",
          "A speed you may hold as long as your tyres have grip",
          "The fastest speed permitted under favourable conditions",
        ],
        correctIndex: 3,
        explanation:
          "A posted limit is the fastest speed permitted under favourable conditions. In a storm you are responsible for driving slower than the number on the sign.",
        context:
          "Florida makes the driver responsible for adjusting to weather, roadway and traffic, and the safest speed is defined as the one that keeps you in complete control. That duty runs both ways: you must not drive so slowly that you obstruct traffic moving at normal, safe speeds, so the answer in bad weather is a slower speed, not a crawl.",
        trap:
          "Treating the sign as a target rather than a ceiling is the reasoning behind most weather-related crashes on Florida interstates.",
        excerptKey: "speed-limits-favorable",
        sourceLabel: "Official Florida Driver License Handbook - Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "fl_s3_16",
        topic: "signs",
        question: "A yellow sign warns of a SOFT SHOULDER. What is it telling you?",
        choices: [
          "The ground beside the road is soft, so stay on the pavement except in an emergency",
          "Loose gravel has been spread on the road surface",
          "The road surface is about to become uneven",
          "The shoulder narrows and disappears ahead",
        ],
        correctIndex: 0,
        explanation:
          "The ground beside the road will not support a vehicle reliably. You keep off it unless you have an emergency.",
        context:
          "It sits with the other surface warnings. PAVEMENT ENDS means the sealed surface becomes gravel or earth. SLIPPERY SURFACE means take it slowly in the wet and avoid sudden braking or acceleration. DIP means a low spot that may be holding water. All of them are yellow diamonds, and all of them are about traction rather than direction.",
        trap:
          "Reading it as a warning about gravel on the carriageway sends you the wrong way, because the hazard here is off the pavement rather than on it.",
        excerptKey: "soft-shoulder-sign",
        sourceLabel: "Official Florida Driver License Handbook - Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "fl_s3_17",
        topic: "parking",
        question: "Which of these is a place Florida specifically forbids you to park?",
        choices: [
          "In a bicycle lane",
          "Facing downhill on any gradient",
          "Within 100 feet of a school entrance",
          "On any street with a posted limit above 45 mph",
        ],
        correctIndex: 0,
        explanation:
          "Bicycle lanes are on Florida's list of places you may not park, along with crosswalks, sidewalks, intersections, bridges, overpasses, tunnels, in front of driveways and beside yellow-painted kerbs.",
        context:
          "The list is written around blocking things people need: a crosswalk pushes pedestrians into traffic, a bike lane pushes cyclists into the travel lane, a driveway traps someone in. Double parking on the roadway side of another parked car is prohibited for the same reason, as is parking anywhere that creates a hazard for other vehicles.",
        trap:
          "The 100-foot school figure is invented. Where Florida sets a distance it is 15, 20, 30 or 50 feet, and each attaches to a specific feature.",
        excerptKey: "parking-illegal-places",
        sourceLabel: "Official Florida Driver License Handbook - Parking",
        sourceUrl: HB,
      },
      {
        id: "fl_s3_18",
        topic: "licensing",
        question:
          "How much certified driving experience must an under-18 applicant have before taking the Class E driving skills test?",
        choices: [
          "50 hours, of which 10 at night",
          "50 hours, of which 20 at night",
          "30 hours, with no night requirement",
          "40 hours, of which 10 at night",
        ],
        correctIndex: 0,
        explanation:
          "A parent, guardian or responsible adult 21 or over must certify at least 50 hours of driving experience, of which 10 hours were at night.",
        context:
          "It is one requirement among several for a minor. The learner's licence must be held for 12 months or until the 18th birthday, whichever comes first. There must be no moving violation convictions in that year, though one is tolerated if adjudication was withheld. A parental consent form is required, and the applicant must be in compliance with school attendance rules.",
        trap:
          "40 hours is the figure several other states use, and 20 night hours doubles the real requirement. The Florida pair is 50 and 10.",
        excerptKey: "fifty-hours-experience",
        sourceLabel: "Official Florida Driver License Handbook - Driver Licenses & ID Cards",
        sourceUrl: HB,
      },
      {
        id: "fl_s3_19",
        topic: "impairment",
        question:
          "A passenger in your car is drinking a beer while you drive completely sober. What is the position under Florida law?",
        choices: [
          "It is lawful if the vehicle is not on an interstate",
          "It is unlawful only if the passenger is under 21",
          "It is lawful as long as the driver is not drinking",
          "It is unlawful for the passenger to possess an open container or drink in the vehicle",
        ],
        correctIndex: 3,
        explanation:
          "Florida makes it unlawful to possess an open container of alcohol or to drink while operating a vehicle, and equally unlawful to do so as a passenger in a vehicle being operated in the state.",
        context:
          "The prohibition follows the container, not the driver. It applies to someone sitting in a vehicle parked or stopped within a road as well as one in motion, and a container counts as being in the driver's possession unless a passenger physically holds it or it is locked away in a glove compartment, boot or other locked non-passenger area. Buses and large motor homes have narrow exemptions.",
        trap:
          "'The driver is sober so nobody is breaking the law' is the assumption behind most open-container citations in Florida.",
        excerptKey: "open-container-law",
        commonlyMissed: true,
        sourceLabel: "Florida Statutes s. 316.1936 - Open containers in vehicles",
        sourceUrl:
          "https://www.leg.state.fl.us/statutes/index.cfm?App_mode=Display_Statute&URL=0300-0399/0316/Sections/0316.1936.html",
      },
      {
        id: "fl_s3_20",
        topic: "sharing",
        question: "What licence does Florida require to operate a moped on a public road?",
        choices: [
          "No licence, provided the rider is 16 or over",
          "A Class E driver licence, with no motorcycle endorsement needed",
          "A motorcycle endorsement on a Class E licence",
          "A Motorcycle Only licence",
        ],
        correctIndex: 1,
        explanation:
          "Moped operators need a Class E driver licence. A motorcycle endorsement is not required for a moped, which is what separates it from a motorcycle.",
        context:
          "Motorcycles are the stricter case: an approved safety course and either a motorcycle endorsement or a Motorcycle Only licence, and helmets are mandatory unless the rider is 21 or over and carries at least $10,000 of medical benefits coverage. Riders of both must be at least 16. Motorcycle and moped riders do not have to carry personal injury protection insurance.",
        trap:
          "Assuming anything two-wheeled needs the motorcycle endorsement is the standard error, and it is wrong for mopeds specifically.",
        excerptKey: "moped-class-e",
        commonlyMissed: true,
        sourceLabel: "Official Florida Driver License Handbook - Motorcycles and Mopeds",
        sourceUrl: HB,
      },
      {
        id: "fl_s3_21",
        topic: "emergencies",
        question:
          "You have a crash that damages a vehicle but nobody is hurt and no officer files a report. What must you do?",
        choices: [
          "Nothing further, since no report was filed",
          "Notify your insurer only",
          "Make a written report of the crash to FLHSMV within 10 days",
          "Make a written report to FLHSMV within 30 days",
        ],
        correctIndex: 2,
        explanation:
          "Where a crash causes vehicle or property damage but does not require a law enforcement report, you must file a written report with FLHSMV within 10 days.",
        context:
          "An officer will write the report themselves if the crash involves a DUI charge, or results in death, injury, or damage severe enough that a vehicle has to be towed. Your own duties at the scene come first: stop, call for help, put the hazards on, get help for anyone injured, move a minor blocking crash out of the traffic lane, and exchange details.",
        trap:
          "Thirty days is the deadline Florida uses for reporting an address change, not a crash. The crash window is 10 days.",
        excerptKey: "crash-report-10-days",
        sourceLabel: "Official Florida Driver License Handbook - Handling Emergencies",
        sourceUrl: HB,
      },
      {
        id: "fl_s3_22",
        topic: "signals",
        question:
          "A pedestrian countdown signal starts counting down and the hand begins to flash. What does that mean for someone on the kerb?",
        choices: [
          "It is no longer safe to enter the crosswalk",
          "The signal is about to show WALK again",
          "They may cross, but only at a marked crossing",
          "There is still time to start crossing if they hurry",
        ],
        correctIndex: 0,
        explanation:
          "Once the countdown begins and the hand is flashing, it is no longer safe to enter the crosswalk. The countdown is there for people already crossing.",
        context:
          "The pedestrian sequence is WALK or a walking figure to begin crossing, then the flashing hand with the countdown, then the solid hand. Anyone already in the crosswalk when the flashing starts should finish crossing quickly. From the driver's seat, the corresponding duties are to stop and remain stopped for pedestrians and never to let your car overhang the crosswalk at a red light.",
        trap:
          "Treating the countdown as time to start crossing is how the signal gets misused, and it is why the handbook spells out that it is not.",
        excerptKey: "countdown-signal",
        sourceLabel: "Official Florida Driver License Handbook - Pedestrian Signs & Signals",
        sourceUrl: HB,
      },
      {
        id: "fl_s3_23",
        topic: "rules",
        question: "You realise you have missed your exit on a Florida expressway. What does the handbook require?",
        choices: [
          "Carry on to the next exit",
          "Back up along the shoulder to the exit",
          "Stop on the shoulder and wait for a gap to reverse into the ramp",
          "Cross the gore area if no traffic is close",
        ],
        correctIndex: 0,
        explanation:
          "You go on to the next exit. Florida forbids backing up on an entrance or exit ramp and warns against last-minute turns into an exit.",
        context:
          "There is one narrow exception to the no-reversing rule: if you find yourself facing a WRONG WAY or DO NOT ENTER sign, or red reflectors on the lane lines, you must back up or turn around, because you are heading into oncoming traffic. Otherwise you stay in the flow, and in Florida the exit numbers match the mile markers so the next one is easy to find.",
        trap:
          "Reversing on a shoulder feels like a small, brief mistake and is one of the most dangerous manoeuvres available on an expressway.",
        excerptKey: "missed-exit",
        sourceLabel: "Official Florida Driver License Handbook - Limited Access Highways",
        sourceUrl: HB,
      },
      {
        id: "fl_s3_24",
        topic: "rightOfWay",
        question:
          "A funeral procession is crossing an intersection ahead of you and the lead vehicle has already entered it. What applies?",
        choices: [
          "The procession must obey the signals like any other traffic",
          "You must yield to the procession and let the remaining vehicles follow through",
          "Only the lead vehicle has priority; the rest must stop for the signal",
          "Priority depends on which vehicles have their headlights on",
        ],
        correctIndex: 1,
        explanation:
          "Motorists, cyclists and pedestrians must yield to funeral processions. Once the lead vehicle enters an intersection the rest may follow through regardless of the traffic control devices.",
        context:
          "Vehicles in a procession normally run with headlights on, or with hazard lights, as a signal to everyone else not to cut into the line. That is the point of the rule: a procession broken apart at a signal ends up with drivers running lights to catch up.",
        trap:
          "Applying ordinary signal rules to the procession is the reasonable-sounding answer, and it is the one Florida sets aside here.",
        excerptKey: "funeral-procession",
        sourceLabel: "Official Florida Driver License Handbook - Funeral Processions",
        sourceUrl: HB,
      },
      {
        id: "fl_s3_25",
        topic: "safety",
        question:
          "You are driving a truck on an open Florida highway outside a town, behind another truck. What following distance does the law set?",
        choices: [
          "You must not follow within 500 feet",
          "The four-second rule applies, with no fixed distance",
          "You must not follow within 300 feet",
          "You must not follow within 150 feet",
        ],
        correctIndex: 2,
        explanation:
          "A truck, or any vehicle towing another vehicle, must not follow within 300 feet of another truck or vehicle in tow. The rule is suspended while overtaking and inside cities and towns.",
        context:
          "It is one of a small family of fixed following distances that sit on top of the four-second guideline. The other one worth memorising is 500 feet, which is how far back you must stay from a fire truck responding to an emergency. The four-second minimum still applies to ordinary cars in good conditions and should be stretched in rain, in poor visibility, when loaded, or behind a motorcycle.",
        trap:
          "500 feet is the fire-truck figure, and 300 is the truck-behind-truck figure. Swapping them is the usual error here.",
        excerptKey: "truck-300-feet",
        sourceLabel: "Official Florida Driver License Handbook - Following Distances",
        sourceUrl: HB,
      },
      {
        id: "fl_s3_26",
        topic: "signs",
        question: "A yellow diamond shows the silhouette of a deer. What is it telling you?",
        choices: [
          "Feeding or approaching animals is prohibited",
          "A wildlife reserve boundary is ahead",
          "That animal is common here, so watch for it crossing, especially at twilight and at night",
          "Livestock may be driven along this road at any hour",
        ],
        correctIndex: 2,
        explanation:
          "The animal shown is common in that area, and the sign asks you to watch for it crossing the road, particularly around twilight and at night.",
        context:
          "The right response when an animal does appear is counterintuitive: do not swerve into oncoming traffic or off the road to avoid it, because that regularly produces a worse crash than the collision itself. Slow down, tap the brakes, sound the horn, and if a collision cannot be avoided keep the car under control and on the road.",
        trap:
          "The sign is a warning about behaviour on the road ahead, not a boundary marker or a prohibition on interacting with animals.",
        excerptKey: "animal-crossing-sign",
        sourceLabel: "Official Florida Driver License Handbook - Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "fl_s3_27",
        topic: "speed",
        question:
          "A driver is clocked more than 50 mph over the posted limit for the first time. What is the fine?",
        choices: [
          "$250 plus points",
          "$500",
          "$1,000",
          "$2,500",
        ],
        correctIndex: 2,
        explanation:
          "Exceeding the limit by more than 50 mph carries a $1,000 fine for a first offence, rising to $2,500 for a second.",
        context:
          "The points scale is separate and steps up with the margin: 3 points for 15 mph or less over, 4 points for 16 mph or more over, and 6 points where the speeding caused a crash. Speeding in an active school or work zone doubles the fine, and a driver caught more than 30 mph over cannot elect traffic school instead of points.",
        trap:
          "$2,500 is the second-offence figure. The exam gives you one offence number and one fine and expects them matched.",
        excerptKey: "fine-50-over",
        sourceLabel: "Official Florida Driver License Handbook - Speeding",
        sourceUrl: HB,
      },
      {
        id: "fl_s3_28",
        topic: "parking",
        question: "What does correct straight-in parking look like in Florida?",
        choices: [
          "The vehicle within 12 inches of the line on the driver's side",
          "The vehicle centred in the space with no part of it in the traffic lane",
          "The vehicle as far forward in the space as the wheel stop allows",
          "The vehicle angled so it can be driven straight out",
        ],
        correctIndex: 1,
        explanation:
          "The vehicle should sit centred in the space with no part of it extending out into the traffic lane. That is also how the manoeuvre is marked on the driving skills test.",
        context:
          "Straight-in parking is one of the manoeuvres a Florida examiner scores, alongside parking on a grade uphill and downhill with and without a kerb, backing 50 feet in a straight line without using the mirrors or camera, and a three-point turn in a space of 20 to 40 feet.",
        trap:
          "Pulling as far forward as possible feels tidy and does nothing about the sides, which is where the marking actually looks.",
        excerptKey: "straight-in-parking",
        sourceLabel: "Official Florida Driver License Handbook - Parking",
        sourceUrl: HB,
      },
      {
        id: "fl_s3_29",
        topic: "sharing",
        question: "What lighting must a bicycle carry on a Florida road between sunset and sunrise?",
        choices: [
          "Reflectors front and rear, with no lights required",
          "A white front light visible from 500 feet, plus a red rear reflector and a red rear light visible from 600 feet",
          "A white front light visible from 300 feet and a red rear light visible from 300 feet",
          "A white front light and a red rear reflector only",
        ],
        correctIndex: 1,
        explanation:
          "Between sunset and sunrise a bicycle needs a white light on the front visible from 500 feet, and both a red reflector and a red light on the rear visible from 600 feet.",
        context:
          "Florida treats a bicycle as a vehicle, so equipment rules come with it: brakes capable of stopping the bike within 25 feet from 10 mph, helmets for riders and passengers under 16, and no headphones in both ears while riding on the roadway. Riders may take the full lane when it is too narrow to share, when turning left, when passing, or when avoiding hazards.",
        trap:
          "Reflectors alone are enough in some jurisdictions. Florida requires an actual light front and rear once the sun is down.",
        excerptKey: "bike-lights-night",
        sourceLabel: "Official Florida Driver License Handbook - Bicyclists",
        sourceUrl: HB,
      },
      {
        id: "fl_s3_30",
        topic: "rules",
        question: "Where does Florida say you must never make a three-point turn or a U-turn?",
        choices: [
          "On any road where the speed limit exceeds 35 mph",
          "On any road with a painted centre line",
          "On a curve, on a hill, on the highway, or where a sign prohibits U-turns",
          "Anywhere within a residential area",
        ],
        correctIndex: 2,
        explanation:
          "Curves, hills, the highway, and anywhere a sign prohibits U-turns are all off limits. The common factor is that approaching drivers cannot see you in time.",
        context:
          "A three-point turn is a last resort in the first place, used only when the road is too narrow for a U-turn and you cannot go round the block. The sequence is to pull right, signal left, turn sharply and stop at the far kerb, reverse with the wheels turned right to the near kerb, then pull forward. The skills test asks for it in a space of 20 to 40 feet.",
        trap:
          "A painted centre line is not what makes the manoeuvre illegal. Sight distance is, which is why curves and crests are named specifically.",
        excerptKey: "three-point-turn-where-not",
        sourceLabel: "Official Florida Driver License Handbook - Three-Point Turns",
        sourceUrl: HB,
      },
      {
        id: "fl_s3_31",
        topic: "signals",
        question: "The signal at a Florida drawbridge turns steady red as you approach. What must you do?",
        choices: [
          "Slow down and cross before the span lifts",
          "Stop only if the gate has started to lower",
          "Treat it as a flashing red and continue when clear",
          "Come to a complete stop at the marked stop line",
        ],
        correctIndex: 3,
        explanation:
          "A steady red at a drawbridge means a complete stop at the marked stop line. The bridge is operating and the roadway is closed to all traffic, on foot or on wheels.",
        context:
          "The rest of the sequence follows the ordinary signal logic: yellow means the light is about to turn red and you stop if you safely can, green means proceed with caution, and a flashing yellow means the drawbridge is in operation so slow down and prepare to stop. Driving around or under a gate, whether it is down or still moving, is against the law.",
        trap:
          "Trying to beat the span is the reasoning that gets cars onto a bridge that is already lifting, which is why the red here is absolute.",
        excerptKey: "drawbridge-red",
        sourceLabel: "Official Florida Driver License Handbook - Drawbridge Signs & Signals",
        sourceUrl: HB,
      },
      {
        id: "fl_s3_32",
        topic: "emergencies",
        question: "You come to a stretch of road covered by floodwater after a storm. What does the handbook tell you to do?",
        choices: [
          "Cross at speed to avoid stalling the engine",
          "Drive through slowly in a low gear",
          "Follow another vehicle through so you can judge the depth",
          "Turn around and find another route",
        ],
        correctIndex: 3,
        explanation:
          "Turn around and find another route. You cannot judge the depth or the current, and a vehicle can be submerged or swept away.",
        context:
          "If you do end up in water, the vehicle will only float for about 30 to 60 seconds, so you get out immediately rather than calling for help first: unbuckle, get a window down before the car sinks, and kick out a side window if the glass will not lower. After any deep water, brakes may pull to one side or not hold at all, and drying them means driving slowly in low gear while applying them gently.",
        trap:
          "Following another vehicle through tells you nothing useful, because their wheelbase, ground clearance and luck are not yours.",
        excerptKey: "flooded-roadway",
        sourceLabel: "Official Florida Driver License Handbook - Rain",
        sourceUrl: HB,
      },
      {
        id: "fl_s3_33",
        topic: "licensing",
        question: "You move to a new address in Florida. How long do you have to update your driver licence?",
        choices: [
          "60 calendar days",
          "Until the licence next comes up for renewal",
          "10 calendar days",
          "30 calendar days",
        ],
        correctIndex: 3,
        explanation:
          "You must obtain a new driver licence within 30 calendar days of any change to your mailing or residential address.",
        context:
          "It matters more than it sounds. A stale address means you may never see a registration renewal, a licence renewal or a notice of a pending sanction, and being stopped with the wrong address on the licence can earn you a citation on its own. Once the new licence arrives, Florida requires you to destroy the old one.",
        trap:
          "Ten days is the crash-report style deadline people carry over from elsewhere. For an address change Florida gives you 30.",
        excerptKey: "address-change-30-days",
        sourceLabel: "Official Florida Driver License Handbook - Address and Name Changes",
        sourceUrl: HB,
      },
      {
        id: "fl_s3_34",
        topic: "impairment",
        question: "Which driving ability does alcohol impair first?",
        choices: [
          "Steering control",
          "Reaction time",
          "Judgement",
          "Night vision",
        ],
        correctIndex: 2,
        explanation:
          "Judgement is the first thing affected after a drink, which is exactly why people underestimate how impaired they are.",
        context:
          "Everything else follows: alcohol slows reflexes and reaction time, reduces how clearly you see, makes you less alert, and makes distance, speed and the movement of other vehicles harder to judge. It reaches the brain within minutes of being absorbed through the stomach lining, and the handbook's position is that no one can drink and drive safely, however experienced.",
        trap:
          "Reaction time is the effect people expect to notice, and by the time it is obvious the judgement needed to stop driving has already gone.",
        excerptKey: "judgment-affected-first",
        sourceLabel: "Official Florida Driver License Handbook - Drinking & Driving",
        sourceUrl: HB,
      },
      {
        id: "fl_s3_35",
        topic: "signs",
        question: "A sign at an overpass reads LOW CLEARANCE with a height on it. What does it require?",
        choices: [
          "Do not enter if your vehicle is taller than the height listed",
          "Use the centre of the roadway where the arch is highest",
          "Reduce speed to the figure shown",
          "Sound your horn before passing under",
        ],
        correctIndex: 0,
        explanation:
          "The number is the maximum height that will fit. If your vehicle is taller than the figure shown, you do not enter.",
        context:
          "It sits among the other structure warnings. NARROW BRIDGE means two lanes will fit but with very little clearance, so hold your lane. ONE LANE BRIDGE means only one vehicle can cross at a time and you check the bridge is clear before starting. Each one is about a physical constraint rather than a speed.",
        trap:
          "Reading the number as a speed is easy at a glance and is exactly what strips the roof off a rental truck.",
        excerptKey: "low-clearance-sign",
        sourceLabel: "Official Florida Driver License Handbook - Warning Signs",
        sourceUrl: HB,
      },
    ],
  },
];
