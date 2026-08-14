import type { DrivingTestSet } from "../types";

// Every fact below was checked against the New York State Driver's Manual
// (MV-21), read chapter by chapter on dmv.ny.gov, and against the DMV's own
// Graduated License Law, learner permit and insurance pages where the manual
// only summarises a rule. Questions are original. Explanations, context notes
// and trap notes are written from scratch - the deep link is there so the
// learner reads the DMV's own authoritative wording on the state's site.
const M = "https://dmv.ny.gov/new-york-state-drivers-manual-practice-tests";
const CH1 = `${M}/chapter-1-driver-licenses`;
const CH2 = `${M}/chapter-2-how-keep-your-license`;
const CH4 = `${M}/chapter-4-traffic-control`;
const CH5 = `${M}/chapter-5-intersections-and-turns`;
const CH6 = `${M}/chapter-6-passing`;
const CH7 = `${M}/chapter-7-parallel-parking`;
const CH8 = `${M}/chapter-8-defensive-driving`;
const CH9 = `${M}/chapter-9-alcohol-and-other-drugs`;
const CH10 = `${M}/chapter-10-special-driving-conditions`;
const CH11 = `${M}/chapter-11-sharing-road`;
const CH12 = `${M}/chapter-12-if-you-are-traffic-crash`;
const PERMITS_URL = "https://dmv.ny.gov/driver-license/learner-permit-restrictions";

export const newyorkSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "New York Basics",
    difficulty: "starter",
    description:
      "The rules you meet on your first drive: what the colours and shapes mean, who goes first, and the New York numbers you are expected to know cold.",
    questions: [
      {
        id: "ny_s1_01",
        topic: "signs",
        question: "You are approaching a red eight-sided sign. What does New York require of you?",
        choices: [
          "Come to a full stop and yield to traffic and pedestrians in or heading toward the intersection",
          "Slow down and continue if no other vehicle is close",
          "Stop only if a vehicle is already waiting at the intersection",
          "Sound your horn and proceed with care",
        ],
        correctIndex: 0,
        explanation:
          "A STOP sign requires a full stop every time, and then yielding to anything already in the intersection or heading into it. You move off only once it is genuinely safe.",
        context:
          "New York also tells you exactly where the stop happens. If there is a painted stop line you stop before that line; if there is no stop line but there is a crosswalk you stop before the crosswalk; if there is neither, you stop before entering the intersection at the point closest to it that lets you see traffic on the crossing road. The order matters, because stopping in the crosswalk is itself a violation even if you did stop.",
        trap: "'Slow down and continue if no other vehicle is close' is the rolling stop - New York treats that as failing to stop at all.",
        excerptKey: "stop-sign-meaning",
        sourceLabel: "New York State Driver's Manual - Chapter 4: Traffic Control",
        sourceUrl: CH4,
      },
      {
        id: "ny_s1_02",
        topic: "speed",
        question:
          "You are driving in New York City on a street with no speed limit sign anywhere in sight. What limit applies?",
        choices: ["15 mph", "20 mph", "25 mph", "30 mph"],
        correctIndex: 2,
        explanation:
          "New York City's default limit is 25 mph, and it applies on any city street that is not posted with something different. No sign does not mean no limit.",
        context:
          "New York's statewide default is 55 mph where nothing is posted, but cities are allowed to set lower limits and those lower limits are not always signed. New York City is the big example: 25 mph everywhere unless a sign says otherwise. Because parts of the city are now posted lower than that, the safe habit is to read the signs and treat 25 as the ceiling you fall back to, never as a floor.",
        trap: "30 mph is what drivers from outside the city assume, because that is the traditional urban default in much of the United States. New York City lowered it.",
        excerptKey: "speed-nyc-25",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 8: Defensive Driving",
        sourceUrl: CH8,
      },
      {
        id: "ny_s1_03",
        topic: "signals",
        question: "A traffic light ahead of you is showing a steady red. What does it require?",
        choices: [
          "Slow to walking pace and continue when the way is clear",
          "Stop, and do not go until the light turns green",
          "Stop only if a pedestrian is waiting to cross",
          "Treat it as a yield and merge with cross traffic",
        ],
        correctIndex: 1,
        explanation:
          "Steady red means stop and stay stopped until the light goes green. The only movement it permits is toward a green arrow shown alongside the red, and then only when the intersection is clear.",
        context:
          "New York's signal set is steady red (stop), steady yellow (the light is about to turn red, be ready to stop), steady green (go, but still yield to traffic already in the intersection). Flashing versions change the meaning entirely: flashing red works like a STOP sign, flashing yellow means proceed with caution. Arrows override the round lights for the direction they point.",
        trap: "'Treat it as a yield' describes a flashing red at most, and even then a flashing red is a stop sign, not a yield.",
        excerptKey: "signal-steady-red",
        sourceLabel: "New York State Driver's Manual - Chapter 4: Traffic Control",
        sourceUrl: CH4,
      },
      {
        id: "ny_s1_04",
        topic: "rightOfWay",
        question:
          "You and another driver reach an unmarked intersection at the same moment, at right angles to each other, and you are both going straight. Who yields?",
        choices: [
          "The driver who arrived on the wider road",
          "Whoever is travelling more slowly",
          "The driver on the right yields to the driver on the left",
          "The driver on the left yields to the driver on the right",
        ],
        correctIndex: 3,
        explanation:
          "With nothing to control the intersection, the driver on the left gives way to the driver on the right. The same rule settles it when two drivers stop at STOP signs at the same time.",
        context:
          "Right-of-way rules exist to resolve the conflicts that signs and signals leave open. New York's basic ladder is: whoever is already in the intersection goes first; a driver turning left yields to oncoming traffic going straight or turning right; anyone entering from a driveway or private road stops and yields to everything on the road; and where nothing else decides it, the driver on the left yields to the driver on the right.",
        trap: "'Whoever is travelling more slowly' feels courteous but is not a rule, and guessing on speed is how two drivers both edge forward into each other.",
        excerptKey: "row-driver-on-left-yields",
        sourceLabel: "New York State Driver's Manual - Chapter 5: Intersections and Turns",
        sourceUrl: CH5,
      },
      {
        id: "ny_s1_05",
        topic: "signs",
        question: "A yellow diamond-shaped sign with black symbols is telling you what?",
        choices: [
          "A rule you are legally required to obey",
          "The direction and distance to a town",
          "You are approaching a hazard or a location with a special rule",
          "A service such as fuel or a rest area is nearby",
        ],
        correctIndex: 2,
        explanation:
          "Yellow diamonds are warning signs. They tell you something ahead needs attention - a curve, a crossing, a change in the road - so you can adjust before you reach it.",
        context:
          "New York sorts signs by colour and shape so you can read them before you can read the words. White rectangles with black or red lettering are regulation signs and carry the force of law. Yellow diamonds warn. Green signs give destinations and distances. Blue signs point to services. Orange signs mean a work area. Learning the colour code is worth more marks than memorising individual signs.",
        trap: "'A rule you are legally required to obey' describes regulation signs, which are the white rectangles - a warning sign advises, it does not command.",
        excerptKey: "sign-warning-shape",
        sourceLabel: "New York State Driver's Manual - Chapter 4: Traffic Control",
        sourceUrl: CH4,
      },
      {
        id: "ny_s1_06",
        topic: "rules",
        question: "How far ahead of a turn or lane change does New York law require you to signal?",
        choices: [
          "At least 100 feet",
          "At least 50 feet",
          "At least three seconds",
          "At least 200 feet",
        ],
        correctIndex: 0,
        explanation:
          "New York states the requirement as a distance: at least 100 feet of signal before the turn or lane change, given with your turn lights or with hand signals.",
        context:
          "The 100-foot rule covers turns and lane changes alike, and the same figure comes back when you leave an expressway - signal at least 100 feet before the exit ramp. It is a legal minimum, not a target: at highway speed 100 feet is barely a second, so start much earlier. Signalling before you brake, rather than while you brake, is what actually gives the driver behind you time to react.",
        trap: "'At least three seconds' is the rule some other places use, and it sounds more modern - but New York writes the requirement in feet.",
        excerptKey: "signal-100-feet",
        sourceLabel: "New York State Driver's Manual - Chapter 5: Intersections and Turns",
        sourceUrl: CH5,
      },
      {
        id: "ny_s1_07",
        topic: "safety",
        question:
          "Your 17-year-old friend is riding in the back seat of your car. What does New York's seat belt law say?",
        choices: [
          "Belts are required only in the front seats",
          "Back-seat passengers may choose whether to belt up",
          "Only passengers under 16 must be belted in the back",
          "They must be properly restrained by a seat belt, one person per belt",
        ],
        correctIndex: 3,
        explanation:
          "Anyone aged 16 or over must wear a belt wherever they are sitting, including the back seat, and one belt may only be used by one person.",
        context:
          "New York's restraint law runs by age. Under 4: an approved child safety seat, rear-facing until the child is at least 2. Age 4 to 7: an appropriate child restraint, usually a booster used with the lap and shoulder belt. Age 8 to 15: a seat belt, one person per belt. Age 16 and over: a seat belt, front or back. The driver is legally responsible for every passenger under 16 and is personally fined, with points, if one is unrestrained.",
        trap: "'Belts are required only in the front seats' was the older rule and is still widely believed; New York extended the requirement to back-seat adults, and it is enforced on its own without any other offence.",
        excerptKey: "belt-16-and-older",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 8: Defensive Driving",
        sourceUrl: CH8,
      },
      {
        id: "ny_s1_08",
        topic: "signals",
        question: "You come to an intersection where the traffic light is flashing red. What must you do?",
        choices: [
          "Slow down and keep going if the way looks clear",
          "Stop, yield the right-of-way, and go when it is safe",
          "Wait for the light to stop flashing before moving",
          "Treat the intersection as uncontrolled and use the right-hand rule",
        ],
        correctIndex: 1,
        explanation:
          "A flashing red light means exactly what a STOP sign means. You stop, give way to whoever has the right-of-way, and then proceed when it is safe.",
        context:
          "Flashing signals show up overnight, at quiet crossings and when a controller is switched to a reduced mode. Flashing red is a stop sign; flashing yellow means slow down and stay alert but you are not required to stop. If the lights are dead or clearly malfunctioning, New York law tells you to treat the intersection as though every approach had a stop sign, then sort out right-of-way normally.",
        trap: "'Wait for the light to stop flashing' would leave you sitting there indefinitely - flashing is the operating state, not a fault.",
        excerptKey: "signal-flashing-red",
        sourceLabel: "New York State Driver's Manual - Chapter 4: Traffic Control",
        sourceUrl: CH4,
      },
      {
        id: "ny_s1_09",
        topic: "parking",
        question: "How close to a fire hydrant may you park in New York?",
        choices: [
          "No closer than 10 feet",
          "No closer than 20 feet",
          "No closer than 15 feet",
          "Any distance, as long as the hydrant stays visible",
        ],
        correctIndex: 2,
        explanation:
          "Fifteen feet is the clearance New York requires around a hydrant. The one exception is a licensed driver staying with the vehicle so it can be moved immediately in an emergency.",
        context:
          "New York has a set of statewide parking clearances that apply whether or not a sign says so: 15 feet from a fire hydrant, 20 feet from a crosswalk at an intersection, 20 feet from a fire station driveway (75 feet if you are on the opposite side of the road), 30 feet from a traffic light, STOP sign or YIELD sign, 30 feet from a pedestrian safety area, and 50 feet from a railroad crossing. Several of them can apply at the same corner.",
        trap: "'Any distance as long as the hydrant stays visible' is a common belief; visibility is not the test, clearance for a fire hose is.",
        excerptKey: "park-hydrant-15-feet",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 7: Parallel Parking",
        sourceUrl: CH7,
      },
      {
        id: "ny_s1_10",
        topic: "impairment",
        question: "At what blood alcohol content is a driver in New York considered intoxicated?",
        choices: [".08 percent or higher", ".05 percent or higher", ".02 percent or higher", ".10 percent or higher"],
        correctIndex: 0,
        explanation:
          "Reaching .08 percent is evidence of intoxication in New York, and that is the threshold for a DWI charge regardless of how the driver looks or feels.",
        context:
          "New York stacks several thresholds rather than using one. More than .05 up to .07 is evidence that your ability is impaired, which is the DWAI offence. From .08 you are intoxicated and facing DWI. From .18 the charge escalates to aggravated DWI. Separately, anyone under 21 is caught by the zero tolerance law at .02, well below every one of these figures.",
        trap: ".10 is the number the United States used decades ago and it still circulates in conversation; New York has not used it in a very long time.",
        excerptKey: "bac-thresholds",
        sourceLabel: "New York State Driver's Manual - Chapter 9: Alcohol and Other Drugs",
        sourceUrl: CH9,
      },
      {
        id: "ny_s1_11",
        topic: "sharing",
        question:
          "A school bus ahead of you stops and switches on its flashing red lights. What must the traffic behind it do?",
        choices: [
          "Pass slowly on the left once children are clear of the road",
          "Stop only if children are visible beside the bus",
          "Move to the far lane and continue at reduced speed",
          "Stop before reaching the bus and stay stopped",
        ],
        correctIndex: 3,
        explanation:
          "Flashing red lights on a school bus mean children are getting on or off. Traffic approaching from either direction has to stop before reaching the bus and remain stopped.",
        context:
          "New York's school bus rule is stricter than most states'. It applies on every roadway in the state, in front of the school, in school parking lots, and even when the bus is on the opposite side of a divided highway. You should stop at least 20 feet away, and you may not move again until the bus starts moving, the red lights go off, or the bus driver or a traffic officer waves you through. Vehicles fitted out as school buses to carry people with disabilities count too.",
        trap: "'Stop only if children are visible' inverts the whole point of the rule: the child you cannot see, crossing in front of the bus, is the one the law is protecting.",
        excerptKey: "school-bus-red-lights-stop",
        sourceLabel: "New York State Driver's Manual - Chapter 6: Passing",
        sourceUrl: CH6,
      },
      {
        id: "ny_s1_12",
        topic: "signs",
        question: "A green sign with white letters beside a New York highway is giving you what?",
        choices: [
          "A warning about a hazard ahead",
          "The direction and distance to a place",
          "A traffic rule you must obey",
          "The location of a rest area or hospital",
        ],
        correctIndex: 1,
        explanation:
          "Green is New York's colour for destination signs. They tell you where places are and how far away they are, so you can position yourself well before a turn.",
        context:
          "Colour does the sorting on New York roads. Green means destination. Blue means service - fuel, food, rest areas, medical facilities. Yellow diamonds warn about the road itself. White rectangles with black or red lettering set rules. Orange marks a work area. Route markers vary in colour but their shape tells you whether you are on a state, US or interstate route.",
        trap: "'The location of a rest area or hospital' is the blue service sign - green and blue sit next to each other on the same gantry and get mixed up constantly.",
        excerptKey: "sign-destination-green",
        sourceLabel: "New York State Driver's Manual - Chapter 4: Traffic Control",
        sourceUrl: CH4,
      },
      {
        id: "ny_s1_13",
        topic: "rightOfWay",
        question:
          "A pedestrian is legally crossing at a corner where there are no painted crosswalk lines. What is your obligation?",
        choices: [
          "You have the right-of-way because the crossing is unmarked",
          "You may proceed if you sound your horn first",
          "You must slow down or stop to yield to the pedestrian",
          "You must yield only if the pedestrian is already past the centre line",
        ],
        correctIndex: 2,
        explanation:
          "New York protects pedestrians at unmarked crossings exactly as it protects them at painted ones. If they are legally crossing, you slow down or stop and let them go.",
        context:
          "An intersection has crosswalks whether or not anyone has painted them. Drivers must yield at marked and unmarked crossings alike, and must yield to pedestrians on their left and their right before turning. Blind pedestrians using a guide dog or a white or metal cane get an even stronger right-of-way that applies even when the signals or the ordinary rules would favour you.",
        trap: "'You have the right-of-way because the crossing is unmarked' is the single most expensive misreading of this rule - paint changes visibility, not the law.",
        excerptKey: "row-pedestrians-crosswalk",
        sourceLabel: "New York State Driver's Manual - Chapter 5: Intersections and Turns",
        sourceUrl: CH5,
      },
      {
        id: "ny_s1_14",
        topic: "speed",
        question:
          "You are on a New York road outside any city and there is no posted speed limit. What is the fastest you may legally drive?",
        choices: ["55 mph", "45 mph", "65 mph", "50 mph"],
        correctIndex: 0,
        explanation:
          "Where nothing is posted, New York's limit is 55 mph. Anything higher has to be signed, and 65 mph only appears on some rural stretches of expressway.",
        context:
          "The 55 mph default is a ceiling, not a recommendation. Cities may set lower limits that are not always posted - New York City's 25 mph is the obvious case - so an unposted street inside a city is not a 55 mph street. And the limit never guarantees safety: an officer can ticket you for a speed that is not reasonable for the conditions even when your speedometer reads below the sign.",
        trap: "65 mph is the number people remember from expressway trips, but it is a posted limit on particular rural stretches, not the statewide default.",
        excerptKey: "speed-55-default",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 8: Defensive Driving",
        sourceUrl: CH8,
      },
      {
        id: "ny_s1_15",
        topic: "emergencies",
        question:
          "An ambulance with lights and siren is coming up behind you on a two-way street. What does New York require?",
        choices: [
          "Speed up until you find a side street to turn into",
          "Move to the left lane and hold your speed",
          "Stop where you are so the ambulance can choose a path",
          "Pull over to the right edge of the road and stop",
        ],
        correctIndex: 3,
        explanation:
          "You pull over to the right edge of the road and stop, then wait until the emergency vehicle has passed before driving on.",
        context:
          "The rule applies no matter which direction the emergency vehicle is coming from, including when it is approaching in the opposite lane of a two-way road. If you are inside an intersection when you hear it, drive clear of the intersection first and then pull over. If you can hear a siren but cannot tell where it is, pull to the right and stop until you are sure it is not heading for you.",
        trap: "'Stop where you are' blocks the lane the emergency vehicle most likely wants; the requirement is to get out of the running lane, not simply to halt.",
        excerptKey: "emergency-pull-right-stop",
        sourceLabel: "New York State Driver's Manual - Chapter 5: Intersections and Turns",
        sourceUrl: CH5,
      },
      {
        id: "ny_s1_16",
        topic: "rules",
        question: "Two solid yellow lines run down the centre of the road you are on. What do they permit?",
        choices: [
          "Passing when the oncoming lane is clear",
          "Neither passing nor changing lanes",
          "Passing only for vehicles travelling under 25 mph",
          "Changing lanes but not passing",
        ],
        correctIndex: 1,
        explanation:
          "Double solid lines mean no passing and no lane changing. The only reason to cross them is to turn left into or out of the road, such as into a driveway.",
        context:
          "New York's lane lines each say something different. One broken line: pass or change lanes when it is safe. Solid line paired with a broken line: the side with the solid line may not pass. Double solid: nobody passes. A single solid line permits passing or a lane change only when an obstruction or traffic conditions make it necessary. White lines separate traffic going the same way; yellow lines separate opposing traffic.",
        trap: "'Passing when the oncoming lane is clear' is how most drivers actually behave at double solid lines, and a clear oncoming lane makes no difference to the rule.",
        excerptKey: "line-double-solid",
        sourceLabel: "New York State Driver's Manual - Chapter 4: Traffic Control",
        sourceUrl: CH4,
      },
      {
        id: "ny_s1_17",
        topic: "signals",
        question: "You are facing a steady red arrow pointing left. May you turn left after stopping?",
        choices: [
          "Yes, once you have stopped and the way is clear",
          "Yes, if you are turning from a one-way road into a one-way road",
          "No - no turn on red is permitted at a red arrow",
          "Only between the hours the sign beside it specifies",
        ],
        correctIndex: 2,
        explanation:
          "A red arrow bans the turn outright. You wait until the red arrow goes out and a green light or green arrow appears, no matter how clear the road looks.",
        context:
          "New York allows a right turn on a steady round red after a full stop, and a left turn on red only when you are going from a one-way road onto another one-way road. Neither of those permissions survives a red arrow, a NO TURN ON RED sign, or any other sign, signal or marking that forbids the turn. And in New York City, turning on red is banned entirely unless a sign specifically permits it.",
        trap: "'Yes, if you are turning from a one-way road into a one-way road' is a real New York rule - but it applies to a round red light, and the arrow overrides it.",
        excerptKey: "signal-red-arrow",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 4: Traffic Control",
        sourceUrl: CH4,
      },
      {
        id: "ny_s1_18",
        topic: "licensing",
        question: "Who may supervise you while you drive on a New York learner permit?",
        choices: [
          "A licensed driver at least 21 years old, holding a licence valid for the vehicle, seated in the front seat",
          "Any licensed driver aged 18 or older sitting anywhere in the vehicle",
          "A licensed driver aged 21 or older, who may sit in any seat",
          "Any adult family member who holds a driver licence",
        ],
        correctIndex: 0,
        explanation:
          "The supervising driver has to be at least 21, hold a licence valid for the type of vehicle you are driving, and be sitting in the front seat beside you.",
        context:
          "Those three conditions are the floor for every permit holder in New York, whatever your age. Junior permit holders under 18 then face extra regional rules on top: who may supervise, at what hours, and in New York City whether the car needs dual controls. A permit holder also may not drive in a DMV road test area, on any street inside a New York City park, on any bridge or tunnel run by the Triborough Bridge and Tunnel Authority, or on the Cross County, Hutchinson River, Saw Mill River or Taconic State parkways in Westchester County.",
        trap: "'Any licensed driver aged 18 or older' catches people who are thinking of a different state - New York sets the supervising age at 21.",
        excerptKey: "permit-supervisor-21",
        sourceLabel: "NYS DMV - Learner Permit Restrictions",
        sourceUrl: PERMITS_URL,
      },
      {
        id: "ny_s1_19",
        topic: "safety",
        question: "What is the two-second rule used for?",
        choices: [
          "Timing how long you may look away from the road",
          "Judging whether you are following the vehicle ahead too closely",
          "Setting how long to wait at a stop sign before moving",
          "Measuring how long a turn signal must run before you turn",
        ],
        correctIndex: 1,
        explanation:
          "You pick a fixed object beside the road, and if you reach it before you have counted two seconds after the vehicle ahead passed it, you are following too closely.",
        context:
          "Rear-end collisions account for roughly four in every ten crashes, and following too closely is the usual cause. Two seconds is the fair-weather minimum. Behind a large truck, or in rain, snow or fog, New York tells you to stretch the count to three or four seconds. If someone is tailgating you, the answer is to let them past - change lanes or pull over and signal - not to brake at them.",
        trap: "'Setting how long to wait at a stop sign' confuses a following-distance measure with stopping time; there is no two-second stop rule.",
        excerptKey: "two-second-rule",
        sourceLabel: "New York State Driver's Manual - Chapter 8: Defensive Driving",
        sourceUrl: CH8,
      },
      {
        id: "ny_s1_20",
        topic: "signs",
        question: "A blue sign with white symbols is telling you what?",
        choices: [
          "A construction crew is working ahead",
          "A rule about lane use applies here",
          "You are approaching a school crossing",
          "A service such as a rest area, fuel or a hospital is nearby",
        ],
        correctIndex: 3,
        explanation:
          "Blue is New York's service colour. These signs point to rest areas, fuel, food, camping and medical facilities rather than telling you anything about how to drive.",
        context:
          "Service signs sit alongside destination signs on the same stretch of highway, so the colour is what separates them: blue for services, green for places and distances. Neither carries any legal obligation. The signs that do carry obligations are the white rectangles, and the ones that warn are yellow diamonds and orange work-area signs.",
        trap: "'A construction crew is working ahead' is the orange sign - orange and blue both look like 'information' signs at a glance, but only orange means a work zone.",
        excerptKey: "sign-service-blue",
        sourceLabel: "New York State Driver's Manual - Chapter 4: Traffic Control",
        sourceUrl: CH4,
      },
      {
        id: "ny_s1_21",
        topic: "parking",
        question: "What does a NO PARKING sign allow you to do?",
        choices: [
          "Make a temporary stop to load or unload merchandise or passengers",
          "Wait in the vehicle for as long as the engine stays running",
          "Stop only to obey a traffic sign, signal or officer",
          "Nothing - you may not bring the vehicle to a halt at all",
        ],
        correctIndex: 0,
        explanation:
          "NO PARKING is the most permissive of the three signs: you may stop briefly to load or unload goods or people, you simply may not leave the vehicle parked there.",
        context:
          "New York separates parking, standing and stopping, and the three signs allow progressively less. NO PARKING lets you make a temporary stop for merchandise or passengers. NO STANDING lets you stop only to pick up or drop off passengers, and the driver may not get out. NO STOPPING lets you stop only to obey a sign, signal or officer, or to avoid conflicting with other traffic. Reading them as three grades of the same thing is easier than memorising them separately.",
        trap: "'Wait in the vehicle for as long as the engine stays running' is a widespread belief that has no basis - staying with the car does not convert parking into stopping.",
        excerptKey: "no-parking-sign",
        sourceLabel: "New York State Driver's Manual - Chapter 7: Parallel Parking",
        sourceUrl: CH7,
      },
      {
        id: "ny_s1_22",
        topic: "rules",
        question: "On which side do New York drivers normally pass another vehicle going the same way?",
        choices: [
          "Whichever side has the most room",
          "On the right, because the left lane is for through traffic",
          "On the left",
          "Either side, as long as you signal",
        ],
        correctIndex: 2,
        explanation:
          "New York requires you to drive on the right and pass on the left. Passing on the right is allowed only in specific listed situations and only when it is safe.",
        context:
          "The listed exceptions are narrow: when the vehicle ahead is turning left, or when you are on a road marked or wide enough for two or more lanes in your direction and nothing prohibits or obstructs the move. Even then you may not use the shoulder or cross the edge line to do it. Passing also has to happen inside the speed limit - you may not exceed the limit to complete a pass.",
        trap: "'Either side, as long as you signal' treats the signal as permission; signalling tells other drivers what you intend, it does not make an illegal move legal.",
        excerptKey: "drive-right-pass-left",
        sourceLabel: "New York State Driver's Manual - Chapter 6: Passing",
        sourceUrl: CH6,
      },
      {
        id: "ny_s1_23",
        topic: "rightOfWay",
        question: "You are pulling out of a parking lot onto a public street. What does the law require?",
        choices: [
          "Merge at the speed of traffic without stopping if the way is clear",
          "Stop and yield to traffic on the roadway and to pedestrians",
          "Yield only to vehicles approaching from your left",
          "Sound your horn and enter the nearest lane",
        ],
        correctIndex: 1,
        explanation:
          "Coming out of a driveway, alley, private road or parking lot, you must stop first and then give way to everything already on the road and to anyone on foot.",
        context:
          "This one has no 'if it is clear' escape clause: the stop is required and the yield covers both directions plus the sidewalk you are crossing. Turning right you give way to traffic from your left; turning left you give way to both directions. Pedestrians crossing the mouth of the driveway go first either way. The mirror-image rule applies when you turn left across traffic into a driveway - you yield to oncoming vehicles even where nothing controls the turn.",
        trap: "'Merge at the speed of traffic without stopping' is exactly how most people leave a car park, and it is the manoeuvre the rule prohibits.",
        excerptKey: "row-from-driveway",
        sourceLabel: "New York State Driver's Manual - Chapter 5: Intersections and Turns",
        sourceUrl: CH5,
      },
      {
        id: "ny_s1_24",
        topic: "impairment",
        question:
          "A 19-year-old driver in New York is stopped and tests at a BAC of .03. What happens under the zero tolerance law?",
        choices: [
          "Nothing, because .03 is below the .08 limit",
          "A warning, since the driver is over 18",
          "The driver is charged with DWI",
          "It is a violation, and the licence is suspended for six months after a DMV hearing",
        ],
        correctIndex: 3,
        explanation:
          "For a driver under 21, any measurable BAC from .02 to .07 is a zero tolerance violation. After a DMV hearing the licence is suspended for six months.",
        context:
          "Zero tolerance is handled by the DMV rather than the criminal courts, but it bites well below every other threshold: .02 can come from a single drink. Getting relicensed means paying a suspension termination fee and a civil penalty. A second zero tolerance violation means revocation for at least a year, or until the driver turns 21, whichever is longer. And a young driver who reaches .05 or higher can face the ordinary DWAI and DWI charges as well.",
        trap: "'Nothing, because .03 is below the .08 limit' is the whole reason this rule catches people - .08 is the adult figure, and it is not the one an under-21 driver lives under.",
        excerptKey: "zero-tolerance",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 9: Alcohol and Other Drugs",
        sourceUrl: CH9,
      },
      {
        id: "ny_s1_25",
        topic: "sharing",
        question: "You are overtaking a bicyclist riding ahead of you in your lane. What does New York law require?",
        choices: [
          "Pass on the left at a safe distance until the bicycle is clear",
          "Pass on the right, since cyclists ride near the left edge",
          "Sound your horn before you begin the manoeuvre",
          "Wait behind until the cyclist leaves the roadway",
        ],
        correctIndex: 0,
        explanation:
          "Overtaking a cyclist from behind, you pass on the left and keep a safe distance until you have completely cleared the bicycle.",
        context:
          "Cyclists have the right to use the road and travel in the same direction as motor traffic. Where there is no bike lane they must stay near the right curb or shoulder, but they may move left to turn or to avoid a hazard. Slow down as you pass, because the air pressure from a vehicle going by quickly can unbalance a rider. Check your blind spots before turning, parking or opening a door, and look right and behind before any turn on red.",
        trap: "'Sound your horn before you begin' startles a rider who is inches from your bumper; the manual's answer is space, not noise.",
        excerptKey: "pass-bicycle-on-left",
        sourceLabel: "New York State Driver's Manual - Chapter 6: Passing",
        sourceUrl: CH6,
      },
      {
        id: "ny_s1_26",
        topic: "signals",
        question: "You reach an intersection where the traffic lights are completely dark. What does state law require?",
        choices: [
          "Treat the intersection as though the light were green in your direction",
          "Wait until another driver goes first",
          "Yield only to traffic on the larger road",
          "Come to a stop as you would for a stop sign, then continue by the right-of-way rules",
        ],
        correctIndex: 3,
        explanation:
          "A signal that is out of service or clearly malfunctioning turns the intersection into an all-way stop. You stop, then sort out who goes by the ordinary right-of-way rules.",
        context:
          "The same applies when a controller is misbehaving rather than dead. Once stopped, the usual ladder decides it: anyone already in the intersection goes first, and where two drivers arrive together at right angles, the driver on the left yields to the driver on the right. A traffic officer directing traffic outranks all of it, including a working signal.",
        trap: "'Yield only to traffic on the larger road' imports a rule that does not exist in New York - road size settles nothing.",
        excerptKey: "signal-out-of-service",
        sourceLabel: "New York State Driver's Manual - Chapter 4: Traffic Control",
        sourceUrl: CH4,
      },
      {
        id: "ny_s1_27",
        topic: "speed",
        question: "You are caught speeding in a marked work zone in New York. What happens to the fine?",
        choices: [
          "It is reduced if no workers were present",
          "It is doubled, whether or not workers were present",
          "It is the same as anywhere else on that road",
          "It is doubled only during posted working hours",
        ],
        correctIndex: 1,
        explanation:
          "Speeding fines double in a work zone, and the doubling does not depend on whether workers or work vehicles happened to be there when you drove through.",
        context:
          "Work zones are marked with orange diamond signs, and a work zone limit can be posted as low as 25 mph. Even with no limit posted you are required to slow down through the zone. A flagger carries the same authority as a sign, so ignoring one is a ticketable offence. The zone stays in force until you pass a sign telling you it has ended, not until the cones look like they have run out.",
        trap: "'It is reduced if no workers were present' is the argument drivers try in court, and the rule is written specifically to defeat it.",
        excerptKey: "work-zone-fines-double",
        sourceLabel: "New York State Driver's Manual - Chapter 8: Defensive Driving",
        sourceUrl: CH8,
      },
      {
        id: "ny_s1_28",
        topic: "emergencies",
        question: "You are in a minor collision that damages only the other car's bumper. What must you do?",
        choices: [
          "Leave a note if the other driver is not present and continue",
          "Continue if the damage looks under a few hundred dollars",
          "Stop, and exchange your details and insurance information with the other driver",
          "Stop only if the other driver asks you to",
        ],
        correctIndex: 2,
        explanation:
          "New York requires you to stop after any crash, whatever the damage, and to give the other driver your name, address, licence number, registration and insurance details.",
        context:
          "Leaving the scene of a property-damage crash is a traffic violation; leaving the scene of one involving injury or death is a criminal offence. If a parked car, other property or a domestic animal is involved, you must try to find the owner or notify the police. Anything with injury or death has to be reported to the police immediately, and any crash with $1,000 or more of property damage to any one person must be reported to the DMV within 10 days.",
        trap: "'Continue if the damage looks under a few hundred dollars' invents a threshold for stopping - the dollar figure governs reporting to the DMV, not whether you have to stop.",
        excerptKey: "crash-must-stop",
        sourceLabel: "New York State Driver's Manual - Chapter 12: If You Are in a Traffic Crash",
        sourceUrl: CH12,
      },
      {
        id: "ny_s1_29",
        topic: "signs",
        question: "What is the usual look of a New York regulation sign?",
        choices: [
          "A white rectangle with black letters or symbols, sometimes with red",
          "A yellow diamond with black symbols",
          "An orange rectangle with black lettering",
          "A green rectangle with white lettering",
        ],
        correctIndex: 0,
        explanation:
          "Regulation signs are normally white rectangles carrying black lettering or symbols, sometimes with red added. They carry the force of law, so disobeying one is a traffic offence.",
        context:
          "Some regulation signs break the mould - the red octagon for STOP and the red and white triangle for YIELD are both regulation signs. A red circle with a slash across a symbol on a regulation sign means the action shown is prohibited, or that some class of vehicle is banned from the road. Yellow diamonds warn rather than regulate, and orange signs mark work areas.",
        trap: "'A yellow diamond with black symbols' is the warning sign; warnings tell you what to expect, regulation signs tell you what you must or must not do.",
        excerptKey: "sign-regulation-shape",
        sourceLabel: "New York State Driver's Manual - Chapter 4: Traffic Control",
        sourceUrl: CH4,
      },
      {
        id: "ny_s1_30",
        topic: "rules",
        question:
          "You are stopped at a red light in Brooklyn and want to turn right. There is no sign at the intersection. May you turn?",
        choices: [
          "Yes, after a full stop and yielding, as anywhere else in the state",
          "Yes, but only if no pedestrian is waiting",
          "Yes, if the intersection has a green arrow phase",
          "No - turning on red is banned in New York City unless a sign permits it",
        ],
        correctIndex: 3,
        explanation:
          "New York City reverses the usual rule. Turning on red is prohibited across the five boroughs, and you may only do it where a posted sign specifically allows it.",
        context:
          "Everywhere else in New York State, a right turn on a steady round red is allowed after a full stop and yielding to oncoming traffic and pedestrians, and a left on red is allowed only from one one-way road onto another. Inside New York City none of that applies unless a sign says so. The bans that apply statewide still apply too: a red arrow, a NO TURN ON RED sign, or any signal or marking that prevents the turn. A school bus carrying pupils may never turn right on red anywhere.",
        trap: "'Yes, after a full stop and yielding, as anywhere else in the state' is what almost every driver arriving from outside the city assumes, and it is the single most common way people get a ticket there.",
        excerptKey: "nyc-no-turn-on-red",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 4: Traffic Control",
        sourceUrl: CH4,
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Core New York Rules",
    difficulty: "easy",
    description:
      "Distances, defaults and the everyday judgement calls - the material the real New York written test leans on hardest.",
    questions: [
      {
        id: "ny_s2_01",
        topic: "signs",
        question: "You are approaching a red and white triangular YIELD sign. What does it require?",
        choices: [
          "A full stop every time, followed by yielding",
          "Slow down, be ready to stop, and give way to traffic and pedestrians at the intersection",
          "Maintain speed and merge into the nearest gap",
          "Stop only when a vehicle is already in the intersection",
        ],
        correctIndex: 1,
        explanation:
          "A YIELD sign asks you to reduce speed, be prepared to stop, and give way. You come to a complete stop only when conditions make that necessary to yield safely.",
        context:
          "That is what separates YIELD from STOP: a STOP sign requires the halt every time regardless of what is coming, while a YIELD sign requires the halt only when giving way demands it. Approaching a YIELD you should already be checking for traffic and covering the brake. Yield control is also what governs entry to New York's roundabouts.",
        trap: "'A full stop every time' turns a yield into a stop sign, which is safe but wrong on the exam - and holding up traffic behind you at a clear yield is its own hazard.",
        excerptKey: "yield-sign-meaning",
        sourceLabel: "New York State Driver's Manual - Chapter 4: Traffic Control",
        sourceUrl: CH4,
      },
      {
        id: "ny_s2_02",
        topic: "rules",
        question: "A single solid white or yellow line separates your lane from the next. When may you cross it?",
        choices: [
          "Whenever the adjacent lane is empty",
          "Never, under any circumstances",
          "Only to make a left turn into a driveway",
          "Only when obstructions in the road or traffic conditions make it necessary",
        ],
        correctIndex: 3,
        explanation:
          "A single solid line permits passing or a lane change only when something in the road or the traffic makes the move necessary. It is not an open invitation.",
        context:
          "New York's four line patterns run from most to least permissive. One broken line: pass or change lanes whenever it is safe. Solid paired with broken: only the broken side may pass, and the solid side may cross only to turn left into a driveway. One solid line: cross only when necessary. Double solid: no passing and no lane changing at all. The colour tells you a different thing - white separates same-direction traffic, yellow separates opposing traffic.",
        trap: "'Whenever the adjacent lane is empty' is the way most drivers treat a single solid line, and it collapses the distinction between it and a broken line.",
        excerptKey: "line-one-solid",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 4: Traffic Control",
        sourceUrl: CH4,
      },
      {
        id: "ny_s2_03",
        topic: "rightOfWay",
        question:
          "You are waiting to turn left at a green light. A car reaches the intersection from the opposite direction at about the same time, going straight. Who goes first?",
        choices: [
          "The oncoming car - you must yield before turning left",
          "You, because you arrived at the intersection first",
          "You, because a green light protects a left turn",
          "Whichever driver signals first",
        ],
        correctIndex: 0,
        explanation:
          "A driver turning left yields to oncoming traffic going straight or turning right. A plain green light gives you permission to enter the intersection, not priority over the traffic coming at you.",
        context:
          "You may pull into the intersection to prepare for the turn if the light is green and no vehicle ahead of you is also waiting to turn left. Stay right of the centre line and keep your wheels straight, so that a rear-end hit does not push you into oncoming traffic. Complete the turn when the oncoming stream clears or stops for a red. The law is worded around whether oncoming traffic is close enough to be a hazard, so when in doubt, wait.",
        trap: "'A green light protects a left turn' confuses a round green with a green arrow - only the arrow gives you the turn.",
        excerptKey: "row-left-turn-yields",
        sourceLabel: "New York State Driver's Manual - Chapter 5: Intersections and Turns",
        sourceUrl: CH5,
      },
      {
        id: "ny_s2_04",
        topic: "parking",
        question: "What does a NO STANDING sign permit?",
        choices: [
          "Loading and unloading merchandise as well as passengers",
          "Waiting at the kerb with the engine running",
          "A temporary stop to pick up or drop off passengers, with the driver staying in the vehicle",
          "Nothing beyond stopping for a traffic signal or officer",
        ],
        correctIndex: 2,
        explanation:
          "NO STANDING lets you make a temporary stop only for passengers, and the driver must not get out of the vehicle while doing it.",
        context:
          "The three signs are a ladder. NO PARKING is the loosest - a temporary stop for goods or passengers. NO STANDING drops the goods and pins the driver in the seat. NO STOPPING is the tightest, allowing a stop only to obey a sign, signal or officer, or to avoid a conflict with other traffic. Alongside all three, New York's statewide clearances still apply even where nothing is signed at all.",
        trap: "'Loading and unloading merchandise as well as passengers' is what a NO PARKING sign allows - merchandise is exactly what NO STANDING removes.",
        excerptKey: "no-standing-sign",
        sourceLabel: "New York State Driver's Manual - Chapter 7: Parallel Parking",
        sourceUrl: CH7,
      },
      {
        id: "ny_s2_05",
        topic: "safety",
        question: "How much clearance should there be between your chest and the air bag cover?",
        choices: [
          "At least 10 inches",
          "At least 4 inches",
          "As little as possible, so the bag catches you early",
          "At least 24 inches",
        ],
        correctIndex: 0,
        explanation:
          "Ten inches is the minimum gap between the centre of your chest and the air bag cover. An air bag deploys with enough force to injure anyone sitting closer than that.",
        context:
          "Air bags are designed to work with seat belts, not to replace them - the belt keeps you in position so the bag catches you where it is meant to. Hold the wheel at the 3 and 9 o'clock positions so your hands are clear when the bag fires. And never put a rear-facing child seat in a front seat that has a passenger air bag; that combination has killed infants.",
        trap: "'As little as possible, so the bag catches you early' inverts the physics - the bag inflates explosively, and proximity is what turns it into an injury.",
        excerptKey: "airbag-ten-inches",
        sourceLabel: "New York State Driver's Manual - Chapter 8: Defensive Driving",
        sourceUrl: CH8,
      },
      {
        id: "ny_s2_06",
        topic: "signals",
        question: "A flashing yellow X is displayed above the lane you are travelling in. What does it mean?",
        choices: [
          "Move out of this lane, it is about to close",
          "Traffic ahead is merging into this lane",
          "This lane may only be used for a left turn",
          "You may use this lane at reduced speed",
        ],
        correctIndex: 2,
        explanation:
          "A flashing yellow X reserves the lane for left turns only. It is not a warning about the lane closing; it is an instruction about what the lane is for.",
        context:
          "Overhead lane control lights let a road change function through the day. A steady red X means do not drive in this lane at all. A steady yellow X means move out of it. A flashing yellow X restricts it to left turns. A green arrow means the lane is open to you. They override the lane markings underneath while they are lit.",
        trap: "'Move out of this lane, it is about to close' is the steady yellow X - the flashing version repurposes the lane rather than closing it.",
        excerptKey: "lane-control-flashing-yellow-x",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 4: Traffic Control",
        sourceUrl: CH4,
      },
      {
        id: "ny_s2_07",
        topic: "impairment",
        question: "What actually lowers your blood alcohol content?",
        choices: [
          "Strong coffee and a cold shower",
          "Time without drinking",
          "Eating a large meal after drinking",
          "Vigorous exercise before you drive",
        ],
        correctIndex: 1,
        explanation:
          "Only time with no further drinking brings your BAC down. Coffee, cold water and exercise may make you feel more alert, but the alcohol is still in your blood.",
        context:
          "For a 150-pound man, one standard drink adds roughly .02 to his BAC, and his body clears about that much in an hour. Women generally process alcohol more slowly, so the same drink can sit higher for longer. Eating before or while you drink slows absorption a little, but it cannot stop you becoming impaired if you drink enough. And your BAC depends on how much you drink, over what period, and what you weigh - not on the type of drink or how well you think you handle it.",
        trap: "'Strong coffee and a cold shower' produces an alert drunk, which is arguably more dangerous than a sleepy one because the driver now believes they are fine.",
        excerptKey: "only-time-lowers-bac",
        sourceLabel: "New York State Driver's Manual - Chapter 9: Alcohol and Other Drugs",
        sourceUrl: CH9,
      },
      {
        id: "ny_s2_08",
        topic: "sharing",
        question: "How far back from a stopped school bus with flashing red lights should you stop?",
        choices: ["At least 5 feet", "At least 10 feet", "At least 50 feet", "At least 20 feet"],
        correctIndex: 3,
        explanation:
          "Twenty feet is the distance New York gives. It leaves room for a child crossing in front of the bus, where neither you nor the bus driver can see well.",
        context:
          "Most school bus deaths and injuries happen to children crossing the road after being dropped off, not in collisions involving the bus itself. That is why the stop applies to traffic in both directions, on every roadway in the state, including in front of a school and in school parking lots, and even when the bus is on the other side of a divided highway. Yellow lights on the bus are the warning that a stop is coming; red lights mean stop now.",
        trap: "'At least 10 feet' feels like plenty of room in a car, and it is nowhere near enough for a child stepping out from in front of the bus.",
        excerptKey: "school-bus-20-feet",
        sourceLabel: "New York State Driver's Manual - Chapter 6: Passing",
        sourceUrl: CH6,
      },
      {
        id: "ny_s2_09",
        topic: "speed",
        question: "What is the usual speed limit on a New York expressway?",
        choices: [
          "65 mph, raised to 70 mph on the Thruway",
          "55 mph, though 65 mph can be posted on some rural stretches",
          "50 mph unless a higher limit is posted",
          "There is no numeric limit, only the reasonable-speed standard",
        ],
        correctIndex: 1,
        explanation:
          "Expressways in New York are normally 55 mph, and some rural sections are posted at 65 mph. The posted sign always governs.",
        context:
          "An expressway in New York means any divided highway carrying traffic one way on two or more lanes, normally entered and left by ramps - the Thruway, the interstates and the parkways all qualify. Use the entrance ramp to build up to traffic speed and merge; if the ramp is too short for that, stop and wait for a large gap instead. Signal at least 100 feet before your exit, and remember that the ramp itself often carries a lower limit.",
        trap: "'There is no numeric limit, only the reasonable-speed standard' inverts how the two work: the reasonable-speed standard can only push you below the posted number, never above it.",
        excerptKey: "expressway-speed",
        sourceLabel: "New York State Driver's Manual - Chapter 10: Special Driving Conditions",
        sourceUrl: CH10,
      },
      {
        id: "ny_s2_10",
        topic: "licensing",
        question: "How long must a junior learner permit be held before the holder can take a road test?",
        choices: ["Three months", "One month", "A minimum of six months in valid status", "One year"],
        correctIndex: 2,
        explanation:
          "The permit has to be held for at least six months in valid status. Any period during which it was suspended or revoked does not count toward that six months.",
        context:
          "Before the road test a junior applicant also needs a pre-licensing course certificate or a driver education completion certificate on file, and a Certification of Supervised Driving signed by a parent or guardian confirming at least 50 hours of practice with at least 15 of them after sunset. The DMV recommends at least 10 of those hours in moderate to heavy traffic. Passing the test with a junior permit produces a junior licence, not a full one.",
        trap: "'Three months' is the waiting period in several other states, and it is the figure people import when they have moved to New York.",
        excerptKey: "permit-six-months",
        sourceLabel: "New York State Driver's Manual - Chapter 1: Driver Licenses",
        sourceUrl: CH1,
      },
      {
        id: "ny_s2_11",
        topic: "emergencies",
        question:
          "You are in a crash that causes $2,000 of damage to another driver's car. What does New York require of you afterwards?",
        choices: [
          "File a report with the DMV within 10 days of the crash",
          "File a report with the DMV within 30 days",
          "Report it to your insurer only",
          "File a report only if the police did not attend",
        ],
        correctIndex: 0,
        explanation:
          "Any crash causing $1,000 or more of property damage to any one person must be reported to the DMV, and the report is due within 10 days of the event.",
        context:
          "Crashes involving injury or death must be reported to the DMV as well, and the police must be notified immediately at the scene. Telling your insurance company does not discharge the obligation - the two are separate. Failing to file is a misdemeanour and can bring suspension or revocation of your licence and registration. If the driver is too injured to file, a passenger or the vehicle's owner can do it.",
        trap: "'Report it to your insurer only' is what most people actually do, and the manual says specifically that this does not end your legal obligation.",
        excerptKey: "crash-report-10-days",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 12: If You Are in a Traffic Crash",
        sourceUrl: CH12,
      },
      {
        id: "ny_s2_12",
        topic: "signs",
        question: "You pass an orange sign with black lettering. What is it telling you?",
        choices: [
          "A school zone begins here",
          "A rest area is ahead",
          "A change of route is required",
          "People are working on or near the roadway",
        ],
        correctIndex: 3,
        explanation:
          "Orange is New York's work area colour. It means people are working on or beside the road and that traffic may be controlled by a flag person.",
        context:
          "A work area speed limit can be posted as low as 25 mph, and even where none is posted you are required to reduce speed through the zone. Flag persons must be obeyed - a flagger has the same authority as a sign. Merge early when a lane closure is signed rather than racing to the end of the closing lane, and stay at the reduced speed until a sign tells you the work zone has ended.",
        trap: "'A school zone begins here' is the other place people expect a low posted limit, but school signs are not orange.",
        excerptKey: "sign-work-area-orange",
        sourceLabel: "New York State Driver's Manual - Chapter 4: Traffic Control",
        sourceUrl: CH4,
      },
      {
        id: "ny_s2_13",
        topic: "rules",
        question: "Where does New York prohibit a U-turn because of limited visibility?",
        choices: [
          "Anywhere you cannot see 200 feet in both directions",
          "Anywhere other drivers cannot see your vehicle from 1,000 feet away",
          "Anywhere within 300 feet of an intersection",
          "Near a hilltop, a curve, or anywhere drivers cannot see you from 500 feet in either direction",
        ],
        correctIndex: 3,
        explanation:
          "The test is whether other drivers can see your vehicle from 500 feet away in both directions. Near a crest or a curve, they usually cannot.",
        context:
          "New York adds several outright bans on top of that. U-turns are illegal in the business districts of New York City, wherever a NO U-TURN sign is posted, in a school zone, and on a limited access expressway - even where a paved connection joins the two carriageways. When you do make one legally, it must be started from the left portion of the lane nearest the centre line, never from the right lane.",
        trap: "'Anywhere within 300 feet of an intersection' sounds plausible because so many other distances in the manual are stated in feet, but the U-turn test is about sight distance, not proximity.",
        excerptKey: "uturn-500-feet",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 5: Intersections and Turns",
        sourceUrl: CH5,
      },
      {
        id: "ny_s2_14",
        topic: "rightOfWay",
        question: "You are approaching a traffic circle or rotary. Who has the right-of-way?",
        choices: [
          "Whichever driver is travelling faster",
          "Drivers already in the circle",
          "Drivers entering the circle, because circulating traffic can slow",
          "Traffic entering from the largest approach road",
        ],
        correctIndex: 1,
        explanation:
          "Traffic already in the circle has the right-of-way. You wait at the yield line until there is a gap in the circulating flow.",
        context:
          "New York's modern roundabouts run on yield-at-entry: slow down as you approach, yield to pedestrians in the crosswalk, look left, and enter on a gap. They are designed so everything inside stays at 30 mph or less. Once you are in, you have the right-of-way, so signal right as you approach your exit and yield again to pedestrians on the way out. Do not pass a bicycle inside the circle, and do not stop in the crosswalk while waiting to enter.",
        trap: "'Drivers entering the circle' is how older-style rotaries used to work in some places, and it is the assumption that causes the crashes at newer roundabouts.",
        excerptKey: "row-traffic-circle",
        sourceLabel: "New York State Driver's Manual - Chapter 5: Intersections and Turns",
        sourceUrl: CH5,
      },
      {
        id: "ny_s2_15",
        topic: "parking",
        question: "How far from a crosswalk at an intersection may you park or stand in New York?",
        choices: ["No closer than 10 feet", "No closer than 15 feet", "No closer than 30 feet", "No closer than 20 feet"],
        correctIndex: 3,
        explanation:
          "Twenty feet is the clearance from a crosswalk at an intersection. It keeps the approach to the crossing open so drivers can see people about to step out.",
        context:
          "That figure sits in a family of statewide clearances that apply with or without a sign: 15 feet from a hydrant, 20 feet from a crosswalk at an intersection, 20 feet from a fire station driveway and 75 feet from one on the opposite side of the road, 30 feet from a traffic light, STOP or YIELD sign, 30 feet from a pedestrian safety area, and 50 feet from a railroad crossing. More than one can apply at a single corner, so the largest one wins.",
        trap: "'No closer than 30 feet' is the traffic-light and stop-sign figure. The two distances sit at the same corner and get swapped constantly.",
        excerptKey: "park-crosswalk-20-feet",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 7: Parallel Parking",
        sourceUrl: CH7,
      },
      {
        id: "ny_s2_16",
        topic: "safety",
        question: "What is the minimum legal tread depth for tyres in New York?",
        choices: [
          "1/32nd of an inch",
          "4/32nds of an inch",
          "2/32nds of an inch",
          "Whatever the manufacturer specifies",
        ],
        correctIndex: 2,
        explanation:
          "The legal minimum is 2/32nds of an inch. Most tyres have wear bars moulded into the grooves that become flush with the tread surface at exactly that depth.",
        context:
          "A vehicle in New York also has to be inspected at least once a year to be legally operated or parked on a public highway, and it is the driver's responsibility to make sure the vehicle they are driving is safe. Cuts down to the cords, bumps and bulges are illegal regardless of tread depth. Worn tread is a direct cause of hydroplaning, which is why the rule matters more in rain than the number suggests.",
        trap: "'Whatever the manufacturer specifies' would make the standard unenforceable - New York fixes it in law at a single figure.",
        excerptKey: "tire-tread-depth",
        sourceLabel: "New York State Driver's Manual - Chapter 8: Defensive Driving",
        sourceUrl: CH8,
      },
      {
        id: "ny_s2_17",
        topic: "sharing",
        question: "Which bicycle riders must wear an approved helmet under New York law?",
        choices: [
          "Riders and passengers aged 1 through 13",
          "Everyone riding on a public road",
          "Riders under 18 only",
          "Only passengers carried in a bicycle seat",
        ],
        correctIndex: 0,
        explanation:
          "New York requires approved helmets for cyclists and their passengers aged 1 through 13. Adults follow whatever local law applies where they are riding.",
        context:
          "Other bicycle rules worth knowing as a driver: no passenger under a year old at all, children aged 1 to 4 must ride in an attached bicycle safety seat, and no more than two cyclists may ride side by side in a lane. At night a bicycle needs a headlight visible from 500 feet and a red tail light visible from 300 feet, and it must always have working brakes and a bell or horn audible from 100 feet.",
        trap: "'Everyone riding on a public road' is what many people assume, but the statewide mandate stops at 14 and local rules take over from there.",
        excerptKey: "bicycle-helmet-1-to-13",
        sourceLabel: "New York State Driver's Manual - Chapter 11: Sharing the Road",
        sourceUrl: CH11,
      },
      {
        id: "ny_s2_18",
        topic: "signals",
        question: "The light ahead of you turns from green to steady yellow as you approach. What does it mean?",
        choices: [
          "Clear the intersection as quickly as you can",
          "The light is about to turn red, so be prepared to stop",
          "You may proceed if you are already past the stop line",
          "Yield to any cross traffic and continue",
        ],
        correctIndex: 1,
        explanation:
          "A steady yellow is telling you the light is changing from green to red. The instruction is to be ready to stop, not to hurry through.",
        context:
          "Yellow arrows carry a related message: the protection of the green arrow is ending, so if you were going to turn that way, be prepared to stop. Behind both of them sits the rule that you may not enter an intersection at all unless you can clear it - if traffic is backed up on the far side, you wait, green light or not.",
        trap: "'Clear the intersection as quickly as you can' is how the yellow is treated in practice, and accelerating at a yellow is exactly what makes intersections New York's most crash-prone locations.",
        excerptKey: "signal-steady-yellow",
        sourceLabel: "New York State Driver's Manual - Chapter 4: Traffic Control",
        sourceUrl: CH4,
      },
      {
        id: "ny_s2_19",
        topic: "impairment",
        question: "What does New York's implied consent law mean for a driver arrested for an alcohol-related offence?",
        choices: [
          "You may refuse a chemical test with no consequence if you are later acquitted",
          "You must be offered a lawyer before any test is requested",
          "A blood test may be taken without your knowledge",
          "By driving in the state you have already consented to a chemical test",
        ],
        correctIndex: 3,
        explanation:
          "Driving in New York counts as having consented in advance to a chemical test of breath, blood, urine or saliva if you are arrested for an alcohol or drug offence.",
        context:
          "Refusal is treated as a separate matter from guilt. Refuse after arrest and your licence is suspended at arraignment, the refusal can be raised against you in court, and if a DMV hearing confirms it your licence is revoked - even if you are acquitted of the underlying charge. There is also a civil penalty to pay before you can reapply. And a conviction does not require a test at all: an officer's testimony about your driving and your behaviour can be enough.",
        trap: "'You may refuse with no consequence if you are later acquitted' is precisely backwards - the refusal revocation survives an acquittal.",
        excerptKey: "implied-consent",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 9: Alcohol and Other Drugs",
        sourceUrl: CH9,
      },
      {
        id: "ny_s2_20",
        topic: "rules",
        question:
          "The car in the lane beside you has stopped at a crosswalk to let someone cross. What may you do?",
        choices: [
          "Nothing - you must never pass a vehicle stopped at a crosswalk for a pedestrian",
          "Pass slowly if you can see the pedestrian is on the far side",
          "Pass if your lane is not the one the pedestrian is in",
          "Pass after sounding your horn to warn the pedestrian",
        ],
        correctIndex: 0,
        explanation:
          "New York forbids passing a vehicle that has stopped at a crosswalk to let a pedestrian cross. The stopped car is hiding someone you cannot see.",
        context:
          "This is the same hazard the school bus rule addresses. A vehicle stopped at a crossing screens the person walking in front of it from everyone in the next lane, and the driver in that lane usually has no reason to expect anyone. New York also tells you to stop well back from a crossing so that drivers behind you can see the pedestrian too, and never to block or park in a crosswalk.",
        trap: "'Pass if your lane is not the one the pedestrian is in' assumes the pedestrian will stop at the lane line, which is exactly what someone mid-crossing will not do.",
        excerptKey: "never-pass-stopped-at-crosswalk",
        sourceLabel: "New York State Driver's Manual - Chapter 6: Passing",
        sourceUrl: CH6,
      },
      {
        id: "ny_s2_21",
        topic: "speed",
        question: "Why do some New York highways post a minimum speed limit?",
        choices: [
          "To set the speed at which tolls are calculated",
          "To identify lanes reserved for through traffic",
          "Because driving too slowly can halt the traffic flow and create danger",
          "To exempt those roads from the reasonable-speed standard",
        ],
        correctIndex: 2,
        explanation:
          "A minimum limit exists because a vehicle moving far below the flow of traffic is itself a hazard, causing others to brake, swerve and pass.",
        context:
          "The manual is blunt that people driving too slowly can be as dangerous as people driving too fast, and that holds even on roads where no minimum is posted. The counterpart is that the posted maximum is never a guarantee: on a fogged-in or icy expressway an officer can ticket you for an unreasonable speed well under the sign. Speed limits set the ceiling; conditions set the actual safe speed.",
        trap: "'To identify lanes reserved for through traffic' confuses a speed rule with a lane-use rule; lane reservations are shown by diamond markings and signs.",
        excerptKey: "speed-minimum-limits",
        sourceLabel: "New York State Driver's Manual - Chapter 8: Defensive Driving",
        sourceUrl: CH8,
      },
      {
        id: "ny_s2_22",
        topic: "emergencies",
        question: "You come across a crash where power lines have fallen across a car. What should you do?",
        choices: [
          "Pull the occupants clear as quickly as possible",
          "Stay away from the wires and tell the occupants to remain inside until help arrives",
          "Move the wires aside with a dry wooden object",
          "Open the car doors so the occupants can climb out",
        ],
        correctIndex: 1,
        explanation:
          "Downed wires are lethal to anyone approaching. The occupants are safest inside the vehicle, and your job is to keep clear and let the emergency services deal with it.",
        context:
          "The wider first-aid guidance at a crash follows the same logic: do not move an injured person unless fire or another immediate danger forces you to, because moving someone with a spinal injury can do permanent harm. If you must move them, support the head and neck and pull head first. And do not stop at a crash scene at all unless you are involved or help has not yet arrived - extra vehicles are their own hazard.",
        trap: "'Move the wires aside with a dry wooden object' is folklore; a live conductor at distribution voltage will arc, and wet or contaminated wood conducts.",
        excerptKey: "crash-downed-wires",
        sourceLabel: "New York State Driver's Manual - Chapter 12: If You Are in a Traffic Crash",
        sourceUrl: CH12,
      },
      {
        id: "ny_s2_23",
        topic: "signs",
        question: "A regulation sign shows a symbol with a red circle and a slash across it. What does it mean?",
        choices: [
          "The condition shown is possible ahead",
          "This applies only during posted hours",
          "The action shown is not allowed, or some vehicles are barred from the road",
          "Priority is given to the vehicle type shown",
        ],
        correctIndex: 2,
        explanation:
          "The red circle and slash is a prohibition. It either bans the manoeuvre in the symbol - a right turn, a U-turn - or bars a class of vehicle from that road.",
        context:
          "Regulation signs carry the force of law, so a prohibition sign is not advice. Most are white rectangles with black and red markings, and rectangular white signs with black or red lettering generally mean a special rule applies. Yellow diamond warning signs, by contrast, tell you what might be ahead so you can prepare - they never assign or remove permission.",
        trap: "'The condition shown is possible ahead' describes a warning sign; the difference between 'watch out for this' and 'you may not do this' is the whole point of the colour system.",
        excerptKey: "sign-red-circle-slash",
        sourceLabel: "New York State Driver's Manual - Chapter 4: Traffic Control",
        sourceUrl: CH4,
      },
      {
        id: "ny_s2_24",
        topic: "rightOfWay",
        question:
          "You have a green light, but traffic on the far side of the intersection is backed up and you cannot see room for your car. What should you do?",
        choices: [
          "Enter and wait in the intersection until the queue moves",
          "Enter, since a green light gives you the right to proceed",
          "Enter but stop short of the crosswalk on the far side",
          "Wait behind the line until you can get completely through",
        ],
        correctIndex: 3,
        explanation:
          "You may not enter an intersection unless you can clear it. A green light gives permission to proceed, not permission to block the crossing traffic.",
        context:
          "New York asks you to watch for cross-streets and offset intersections for the same reason - stopping across one of them causes gridlock on a road you were not even using. The rule sits alongside the other intersection basics: yield to anything already inside, yield when turning left across oncoming traffic, and yield to pedestrians in marked and unmarked crossings on both sides of your turn.",
        trap: "'Enter, since a green light gives you the right to proceed' is the reasoning behind most blocked intersections, and the manual explicitly rules it out.",
        excerptKey: "row-do-not-block",
        sourceLabel: "New York State Driver's Manual - Chapter 5: Intersections and Turns",
        sourceUrl: CH5,
      },
      {
        id: "ny_s2_25",
        topic: "parking",
        question: "How close to a railroad crossing may you park in New York?",
        choices: [
          "No closer than 50 feet",
          "No closer than 15 feet",
          "No closer than 25 feet",
          "No closer than 100 feet",
        ],
        correctIndex: 0,
        explanation:
          "Fifty feet is the parking clearance at a railroad crossing - the largest of New York's statewide parking distances.",
        context:
          "Do not confuse it with the stopping distance at the same place: when lights are flashing, gates are coming down or a bell is ringing, you must stop at least 15 feet from the tracks. Fifty feet is how far away you must leave a parked car; 15 feet is where a moving car stops. Both exist because a train overhangs its rails by a considerable margin.",
        trap: "'No closer than 15 feet' is the correct number for the wrong rule - that is where you stop for a train, not where you may park.",
        excerptKey: "park-railroad-50-feet",
        sourceLabel: "New York State Driver's Manual - Chapter 7: Parallel Parking",
        sourceUrl: CH7,
      },
      {
        id: "ny_s2_26",
        topic: "safety",
        question: "It starts raining hard enough that you switch on your windshield wipers. What else does the law require?",
        choices: [
          "Reduce your speed by at least 10 mph",
          "Turn on your headlights",
          "Turn on your hazard warning lights",
          "Nothing extra during daylight hours",
        ],
        correctIndex: 1,
        explanation:
          "Wipers on means headlights on in New York. The requirement applies whenever you are using the wipers to clear rain, snow or sleet, including in broad daylight.",
        context:
          "Headlights are also required from half an hour after sunset to half an hour before sunrise, and whenever visibility is less than 1,000 feet. Daytime running lights do not satisfy any of this - they are dimmer than headlights and usually leave the tail lights off, so the car behind you cannot see you. In rain, fog or falling snow use low beams: high beams reflect off the precipitation and make things worse.",
        trap: "'Nothing extra during daylight hours' is the assumption behind most tickets for this offence - the wiper trigger has nothing to do with the time of day.",
        excerptKey: "headlight-law",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 10: Special Driving Conditions",
        sourceUrl: CH10,
      },
      {
        id: "ny_s2_27",
        topic: "sharing",
        question: "A reflective orange triangle is mounted on the back of the vehicle ahead of you. What does it mean?",
        choices: [
          "The vehicle is carrying hazardous cargo",
          "The driver is a learner",
          "It is a slow-moving vehicle such as farm machinery or an animal-drawn vehicle",
          "The vehicle is making frequent stops",
        ],
        correctIndex: 2,
        explanation:
          "The orange triangle is the slow-moving vehicle emblem. It marks animal-drawn vehicles, most farm equipment and construction machinery.",
        context:
          "The emblem exists because closing speed on a rural road is deceptive: coming up on a 15 mph tractor at 55 mph gives you far less time than instinct suggests. Rural mail delivery vehicles carry the triangle too. Slow down well before you reach one and make certain the road ahead is clear before passing, remembering that farm equipment is often wider than its lane.",
        trap: "'The vehicle is carrying hazardous cargo' is the other orange marking drivers see, but hazardous loads are marked with placards and numbers, not a plain triangle.",
        excerptKey: "slow-moving-vehicle-emblem",
        sourceLabel: "New York State Driver's Manual - Chapter 11: Sharing the Road",
        sourceUrl: CH11,
      },
      {
        id: "ny_s2_28",
        topic: "licensing",
        question: "How many driver violation points, over what period, put a New York licence at risk of suspension?",
        choices: [
          "6 points within 12 months",
          "8 points within 18 months",
          "15 points within 36 months",
          "11 or more points within 24 months",
        ],
        correctIndex: 3,
        explanation:
          "Reaching 11 or more points inside 24 months brings a notice that your licence will be suspended.",
        context:
          "Points are counted from the date you committed the violation, not the date of conviction, so a slow court case does not push a violation outside the window. A separate threshold matters too: six or more points in any 18-month period triggers a Driver Responsibility Assessment of $100 a year for three years, plus $25 a year per additional point. A DMV-approved crash prevention course can take up to four points off your total, but it cannot stop a mandatory suspension.",
        trap: "'8 points within 18 months' blends the real suspension threshold with the 18-month window used for the Driver Responsibility Assessment - two different rules that share no numbers.",
        excerptKey: "points-11-in-24-months",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 2: How to Keep Your License",
        sourceUrl: CH2,
      },
      {
        id: "ny_s2_29",
        topic: "rules",
        question: "How far before a lane change must you signal in New York?",
        choices: [
          "At least 50 feet",
          "At least 100 feet",
          "At least two seconds",
          "Only when another vehicle is nearby",
        ],
        correctIndex: 1,
        explanation:
          "The same 100 feet that applies to turns applies to lane changes. The signal has to be running for at least that distance before you begin moving across.",
        context:
          "A signal is not a substitute for looking. New York tells you to check your mirrors, signal, then look quickly over your shoulder before pulling out, because even well-adjusted mirrors leave blind spots on both sides. Coming back into your lane after passing, signal again and make sure you can see the front bumper of the car you passed in your interior mirror before you move over.",
        trap: "'Only when another vehicle is nearby' treats the signal as a courtesy; the requirement is unconditional, and the vehicle you did not see is the one it is for.",
        excerptKey: "lane-change-signal-100-feet",
        sourceLabel: "New York State Driver's Manual - Chapter 6: Passing",
        sourceUrl: CH6,
      },
      {
        id: "ny_s2_30",
        topic: "signals",
        question:
          "A police officer at an intersection waves you through while the light facing you is red. What should you do?",
        choices: [
          "Follow the officer's direction and drive through",
          "Stay stopped until the light turns green",
          "Wait and gesture for the officer to confirm",
          "Proceed only if no cross traffic is moving",
        ],
        correctIndex: 0,
        explanation:
          "Directions from a traffic officer outrank signs, signals and pavement markings. If an officer waves you through a red light, you go.",
        context:
          "The reverse holds as well: an officer who signals you to stop at a green light must be obeyed. New York lists who counts as authorised to direct traffic - police officers, fire police, highway work area flag persons, school crossing guards and school bus drivers - so a flagger in a work zone carries the same authority as a sign, and ignoring one is a ticketable offence.",
        trap: "'Stay stopped until the light turns green' feels like the cautious answer, and in a live intersection it is the one that puts you in the way of whatever the officer is managing.",
        excerptKey: "traffic-officer-precedence",
        sourceLabel: "New York State Driver's Manual - Chapter 4: Traffic Control",
        sourceUrl: CH4,
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Real Test Standard",
    difficulty: "medium",
    description:
      "Thirty-five questions pitched at the difficulty of the real DMV written test, mixing signs, exact figures and right-of-way judgement.",
    questions: [
      {
        id: "ny_s3_01",
        topic: "signs",
        question:
          "You enter a marked work zone where no speed limit sign has been posted. What speed rule applies?",
        choices: [
          "You must drive at a reduced speed through the zone",
          "The limit from before the zone continues to apply unchanged",
          "The statewide 55 mph default applies",
          "There is no requirement until a limit is posted",
        ],
        correctIndex: 0,
        explanation:
          "New York requires reduced speed through a work zone even when no work-zone limit is posted. The absence of a sign does not restore the ordinary limit.",
        context:
          "A posted work zone limit can go as low as 25 mph. Whatever the number, speeding fines double inside the zone regardless of whether workers or work vehicles are present. Flag persons carry the authority of a sign, so their directions are enforceable. Some zones move as the work progresses, so the reduced speed holds until you pass a sign saying the work zone has ended.",
        trap: "'There is no requirement until a limit is posted' is the reading that leads drivers straight into a doubled fine - the obligation to slow down does not depend on signage.",
        excerptKey: "sign-work-area-orange",
        sourceLabel: "New York State Driver's Manual - Chapter 4: Traffic Control",
        sourceUrl: CH4,
      },
      {
        id: "ny_s3_02",
        topic: "rightOfWay",
        question:
          "A pedestrian with a white cane starts to cross against the signal at a corner where you have a green light. What must you do?",
        choices: [
          "Proceed, since the signal is in your favour",
          "Sound your horn to alert them to the signal",
          "Proceed slowly around them",
          "Give them the right-of-way and let them cross",
        ],
        correctIndex: 3,
        explanation:
          "New York gives blind pedestrians using a guide dog or a white or metal cane the right-of-way at marked and unmarked crossings even when the signals or the ordinary rules favour you.",
        context:
          "It is a special rule that overrides the normal right-of-way ladder, and it exists because the pedestrian cannot read the signal you are relying on. More broadly, the manual tells drivers to expect pedestrians who may not see or hear them, to look for people with mobility, sight or hearing difficulties around every crossing, and to yield to anyone legally in a crosswalk whether or not it is painted.",
        trap: "'Sound your horn to alert them' assumes a hearing pedestrian who has simply misread the light, and it can push someone who cannot see into the traffic lane.",
        excerptKey: "blind-pedestrian-right-of-way",
        sourceLabel: "New York State Driver's Manual - Chapter 11: Sharing the Road",
        sourceUrl: CH11,
      },
      {
        id: "ny_s3_03",
        topic: "rules",
        question:
          "The centre of your road has a solid yellow line on your side and a broken yellow line on the other. What may you do?",
        choices: [
          "Pass whenever the road ahead is clear",
          "Not pass, and cross the line only to make a left turn into a driveway",
          "Pass, but only vehicles travelling below the speed limit",
          "Neither pass nor cross the line for any reason",
        ],
        correctIndex: 1,
        explanation:
          "The solid line is on your side, so you may not pass. You may cross it only to turn left into a driveway. Traffic on the broken side may pass when it is safe.",
        context:
          "New York's line grammar reads from the side you are on. One broken line: pass when safe. Solid with broken: the solid side is barred from passing. Double solid: nobody passes and nobody changes lanes, though a left turn to enter or leave the highway is still permitted. One solid line: cross only when an obstruction or traffic conditions make it necessary.",
        trap: "'Neither pass nor cross the line for any reason' is over-correction - the left-turn-into-a-driveway exception is written into the rule.",
        excerptKey: "line-solid-with-broken",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 4: Traffic Control",
        sourceUrl: CH4,
      },
      {
        id: "ny_s3_04",
        topic: "impairment",
        question: "A driver in New York records a BAC of .06. What does that figure mean legally?",
        choices: [
          "It is below every threshold and no offence arises",
          "It is evidence of intoxication and supports a DWI charge",
          "It is evidence that the driver's ability is impaired",
          "It supports an aggravated DWI charge",
        ],
        correctIndex: 2,
        explanation:
          "More than .05 up to .07 is evidence of impairment in New York - the DWAI offence - which sits below intoxication but is still a chargeable violation.",
        context:
          "New York's ladder has four rungs. Over .05 up to .07 is DWAI, a traffic infraction carrying a 90-day suspension for a first offence. From .08 you are intoxicated and looking at DWI and a minimum six-month revocation. From .18 the charge becomes aggravated DWI, with a minimum one-year revocation. And a driver under 21 is caught by zero tolerance from .02, well below any of them.",
        trap: "'It is below every threshold and no offence arises' is the mistake of remembering only the .08 headline number and forgetting the impairment band underneath it.",
        excerptKey: "bac-thresholds",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 9: Alcohol and Other Drugs",
        sourceUrl: CH9,
      },
      {
        id: "ny_s3_05",
        topic: "speed",
        question:
          "You are driving 50 mph on a 55 mph expressway in dense fog. Can you be ticketed for your speed?",
        choices: [
          "Yes - a speed can be unreasonable for the conditions even when it is under the posted limit",
          "No, because you are below the posted limit",
          "Only if you are involved in a crash",
          "Only if a variable speed sign has been displayed",
        ],
        correctIndex: 0,
        explanation:
          "The posted limit is a ceiling, not a guarantee. A police officer can ticket a speed that is not reasonable for the weather, visibility or road surface even when it is below the sign.",
        context:
          "The manual uses almost this exact example: a slippery or fogged-in expressway posted at 55 or 65 where the safe speed is much lower. The same logic runs through the rest of the speed rules - unposted roads default to 55 statewide but cities can be lower without signage, and work zones require reduced speed with or without a posted number.",
        trap: "'No, because you are below the posted limit' treats the sign as a safe harbour; it only sets the maximum, and conditions set the actual legal speed.",
        excerptKey: "speed-not-reasonable",
        sourceLabel: "New York State Driver's Manual - Chapter 8: Defensive Driving",
        sourceUrl: CH8,
      },
      {
        id: "ny_s3_06",
        topic: "sharing",
        question: "How many motorcyclists may legally ride side by side in a single lane in New York?",
        choices: ["One only", "Three", "As many as fit safely", "Two"],
        correctIndex: 3,
        explanation:
          "Two motorcyclists may share a lane side by side. A motorcyclist may not share a lane with, or pass within the lane of, any vehicle that is not a motorcycle.",
        context:
          "Motorcycles are entitled to the full width of a lane, so passing one means giving it the same space you would give a car - never squeezing by in the same lane. Riders often move around within their lane to see better or avoid surface hazards, which can look like drifting. Their turn signals usually do not cancel themselves after a turn, so a blinking signal on a motorcycle is weaker evidence of intention than it is on a car.",
        trap: "'As many as fit safely' reads the lane as space to be filled; the limit is fixed at two regardless of how wide the lane is.",
        excerptKey: "motorcycle-two-abreast",
        sourceLabel: "New York State Driver's Manual - Chapter 11: Sharing the Road",
        sourceUrl: CH11,
      },
      {
        id: "ny_s3_07",
        topic: "parking",
        question: "How far from a traffic light, STOP sign or YIELD sign may you park or stand?",
        choices: ["No closer than 20 feet", "No closer than 30 feet", "No closer than 15 feet", "No closer than 50 feet"],
        correctIndex: 1,
        explanation:
          "Thirty feet. Parking closer than that hides the sign or signal from approaching drivers and blocks the view into the intersection.",
        context:
          "That 30 feet is one of a set of clearances New York applies whether or not anything is signed: 15 feet from a hydrant, 20 feet from a crosswalk at an intersection, 20 feet from a fire station driveway and 75 feet opposite one, 30 feet from a pedestrian safety area, and 50 feet from a railroad crossing. At a typical signalised corner two or three of them overlap, and you have to satisfy all of them.",
        trap: "'No closer than 20 feet' is the crosswalk figure. Both apply at the same corner, and picking the smaller one still leaves you illegally parked.",
        excerptKey: "park-signal-stop-yield-30-feet",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 7: Parallel Parking",
        sourceUrl: CH7,
      },
      {
        id: "ny_s3_08",
        topic: "signals",
        question: "You have a green arrow pointing in the direction you intend to turn. What does it give you?",
        choices: [
          "Absolute priority over everything at the intersection",
          "Permission to turn without stopping to check",
          "Permission to go that way, still yielding to other traffic at the intersection as the law requires",
          "The same standing as a flashing yellow light",
        ],
        correctIndex: 2,
        explanation:
          "A green arrow lets you go in the direction it points, but you still yield to other traffic at the intersection where the law requires it - a vehicle already inside, for instance.",
        context:
          "The same qualification attaches to a steady green: go, but yield to traffic already at the intersection as required by law. A yellow arrow warns that the arrow's protection is ending. A red arrow bans movement that way entirely, including any turn on red. And a green arrow shown alongside a red light lets you move toward the arrow only when the intersection is clear.",
        trap: "'Absolute priority over everything' is how a protected turn feels, but a driver still finishing a manoeuvre inside the intersection has the prior claim.",
        excerptKey: "signal-green-arrow",
        sourceLabel: "New York State Driver's Manual - Chapter 4: Traffic Control",
        sourceUrl: CH4,
      },
      {
        id: "ny_s3_09",
        topic: "safety",
        question: "Until what age must a child ride in the rear-facing position in New York?",
        choices: [
          "Until they are two years old, or reach the seat's height or weight limit",
          "Until they are one year old",
          "Until they are four years old",
          "Until they weigh 40 pounds",
        ],
        correctIndex: 0,
        explanation:
          "New York requires rear-facing until the child is two, or until they reach the highest weight or height the seat manufacturer allows, whichever comes later in practice.",
        context:
          "The restraint ladder runs: under 4 in a federally approved child safety seat, rear-facing to at least 2; ages 4 to 7 in an appropriate child restraint, usually a booster used with the lap and shoulder belt; ages 8 to 15 in a seat belt, one person per belt; 16 and over in a seat belt, front or back. A rear-facing seat must never go in a front seat with a passenger air bag.",
        trap: "'Until they are one year old' was the old guidance and is still the figure most people repeat; New York moved it to two.",
        excerptKey: "child-rear-facing-until-two",
        sourceLabel: "New York State Driver's Manual - Chapter 8: Defensive Driving",
        sourceUrl: CH8,
      },
      {
        id: "ny_s3_10",
        topic: "emergencies",
        question: "Your steering suddenly stops responding at speed. What is the correct first response?",
        choices: [
          "Brake hard to bring the vehicle to a halt quickly",
          "Turn the ignition off to stop the engine",
          "Pull on the parking brake",
          "Ease off the gas, put your emergency lights on, and keep off the brake while it is safe to do so",
        ],
        correctIndex: 3,
        explanation:
          "Take your foot slowly off the gas and leave the brake alone at first. The vehicle's balance will keep it running straight, while a sudden speed change can send it out of control.",
        context:
          "As the car slows you can brake very gently to stop it. The other emergencies follow related logic: in a blowout, grip the wheel and ease off the gas rather than braking; with a stuck accelerator, shift to neutral and brake, but never switch the ignition off because that can lock the steering; if your wheels drop off the pavement, ease off, brake gently and only then steer back on.",
        trap: "'Brake hard to bring the vehicle to a halt quickly' is the instinct, and with no steering authority a hard stop is exactly what sends the car sideways.",
        excerptKey: "steering-failure",
        sourceLabel: "New York State Driver's Manual - Chapter 10: Special Driving Conditions",
        sourceUrl: CH10,
      },
      {
        id: "ny_s3_11",
        topic: "licensing",
        question:
          "You hold a New York junior licence. How many passengers under 21 may ride with you?",
        choices: [
          "Any number, provided everyone wears a seat belt",
          "No more than one, unless the others are members of your immediate family",
          "No more than two",
          "None at all during the first six months",
        ],
        correctIndex: 1,
        explanation:
          "A junior licence holder may carry only one passenger under 21 unless the extra passengers are immediate family. Everyone must be belted, one person per belt.",
        context:
          "The exception widens if your supervising driver is your licensed parent, guardian, person in loco parentis, driver education teacher or driving school instructor - then the passenger cap lifts. Junior permit holders face the same limit and one more besides: the only passenger allowed in the front seat is the supervising driver.",
        trap: "'Any number, provided everyone wears a seat belt' treats belts as satisfying the rule; the passenger cap exists because of crash risk with a young driver, not restraint use.",
        excerptKey: "junior-passenger-limit",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 1: Driver Licenses",
        sourceUrl: CH1,
      },
      {
        id: "ny_s3_12",
        topic: "signs",
        question:
          "You reach an X-shaped sign reading RAILROAD CROSSING at the track. What does it require of you?",
        choices: [
          "Stop every time before crossing",
          "Nothing unless lights are flashing",
          "Yield - look and listen, and cross only when it is safe",
          "Cross at no more than 15 mph",
        ],
        correctIndex: 2,
        explanation:
          "The crossbuck is a yield sign for the railroad. You look and listen, and you may not cross if an approaching train is close enough or fast enough to be a danger.",
        context:
          "A grade crossing counts as an intersection, and you should always expect a train from either direction on any track. Where there are lights, gates or a bell you must stop at least 15 feet from the tracks and stay there until the lights are off, the bell has stopped and the gates are fully up. Never cross unless your whole vehicle will clear all the tracks on the far side, and remember that school buses, buses carrying passengers, and vehicles with explosive or flammable cargo must stop at every crossing.",
        trap: "'Nothing unless lights are flashing' fails at the many crossings that have no lights at all, where the crossbuck is the only control.",
        excerptKey: "railroad-crossbuck",
        sourceLabel: "New York State Driver's Manual - Chapter 10: Special Driving Conditions",
        sourceUrl: CH10,
      },
      {
        id: "ny_s3_13",
        topic: "rules",
        question:
          "You are on a two-way road approaching a railroad crossing. How close to the crossing may you still pass another vehicle?",
        choices: [
          "Up to 50 feet before the crossing",
          "Up to 25 feet before the crossing",
          "Passing is allowed right up to the tracks if the way is clear",
          "You may not pass within 100 feet of the crossing",
        ],
        correctIndex: 3,
        explanation:
          "Passing on the left is prohibited within 100 feet of a railroad crossing on a two-way roadway.",
        context:
          "That sits in a list of situations where a left-side pass is banned outright: a solid yellow centre line on your side, being unable to get back before reaching a solid line or before an oncoming vehicle comes within 200 feet, approaching a curve or hill crest you cannot see over, within 100 feet of a railroad crossing, and within 100 feet of a bridge, tunnel or viaduct where your view is obstructed.",
        trap: "'Passing is allowed right up to the tracks if the way is clear' ignores that the pass puts you alongside another vehicle exactly where neither of you can leave the roadway.",
        excerptKey: "no-pass-railroad-100-feet",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 6: Passing",
        sourceUrl: CH6,
      },
      {
        id: "ny_s3_14",
        topic: "rightOfWay",
        question:
          "You are turning left across traffic into a shop's parking lot. Nothing controls the turn. What is required?",
        choices: [
          "Yield to oncoming traffic before turning",
          "Oncoming traffic must yield because you are leaving the roadway",
          "Turn when there is any gap, since the entrance is private property",
          "Sound your horn and complete the turn",
        ],
        correctIndex: 0,
        explanation:
          "Turning left into a driveway, parking lot or any other area, you yield to traffic coming toward you, even where there are no signs or signals.",
        context:
          "The obligation on any left turn is to yield to oncoming traffic that is close enough to be a hazard, and judging that takes experience - the manual's advice is that if you have any doubt, wait. The mirror image applies when you leave that parking lot: coming out of a driveway or private road you must stop and yield to everything on the roadway and to pedestrians.",
        trap: "'Turn when there is any gap, since the entrance is private property' misreads which side the private property changes: it removes your priority, it does not remove the other driver's.",
        excerptKey: "row-left-into-driveway",
        sourceLabel: "New York State Driver's Manual - Chapter 5: Intersections and Turns",
        sourceUrl: CH5,
      },
      {
        id: "ny_s3_15",
        topic: "speed",
        question: "What speed are New York's modern roundabouts designed for?",
        choices: [
          "45 mph or less",
          "15 mph or less",
          "30 mph or less within the roundabout",
          "The posted limit of the approach road",
        ],
        correctIndex: 2,
        explanation:
          "Roundabouts are engineered so that everything inside them travels at 30 mph or less, using small diameters and curved entrances to force the speed down.",
        context:
          "Adequate deflection at the entry is what makes a roundabout safe - the geometry does the work that signals do elsewhere. Approaching, follow the lane designation signs, slow down, yield to pedestrians in the crosswalk, then look left and enter on a gap. Inside, you have the right-of-way; signal right before your exit and yield to pedestrians again on the way out.",
        trap: "'The posted limit of the approach road' misses the point of the design - a 55 mph approach still narrows to a 30 mph circle.",
        excerptKey: "roundabout-30-mph",
        sourceLabel: "New York State Driver's Manual - Chapter 8: Defensive Driving",
        sourceUrl: CH8,
      },
      {
        id: "ny_s3_16",
        topic: "parking",
        question: "What does a NO STOPPING sign permit?",
        choices: [
          "A brief halt to drop off a passenger",
          "A brief halt to unload goods",
          "Waiting with the driver in the vehicle",
          "Stopping only to obey a sign, signal or officer, or to avoid conflicting with other traffic",
        ],
        correctIndex: 3,
        explanation:
          "NO STOPPING is the strictest of the three. You may bring the vehicle to a halt only to obey a traffic control or an officer, or to avoid a conflict with other traffic.",
        context:
          "Read the three signs as a ladder and they stop being confusable. NO PARKING allows a temporary stop for goods or passengers. NO STANDING allows a temporary stop for passengers only, with the driver staying in the car. NO STOPPING allows neither, and the only halts permitted are the ones traffic itself forces on you.",
        trap: "'A brief halt to drop off a passenger' is what NO STANDING allows; the whole point of NO STOPPING is that it removes even that.",
        excerptKey: "no-stopping-sign",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 7: Parallel Parking",
        sourceUrl: CH7,
      },
      {
        id: "ny_s3_17",
        topic: "sharing",
        question: "Where must a Class B or Class C moped be ridden on a New York road?",
        choices: [
          "In any lane, like a motorcycle",
          "In the right lane, as far to the right as possible",
          "On the shoulder only",
          "In the left lane, to keep clear of parked cars",
        ],
        correctIndex: 1,
        explanation:
          "Class B and C mopeds are restricted to the right lane, kept as far right as practical. Only Class A mopeds may use any lane.",
        context:
          "New York sorts mopeds into three classes by top speed: Class A tops out between 31 and 40 mph, Class B between 21 and 30, and Class C at 20 or less. All three must be registered and must run their headlight whenever in use. Class A and B riders need helmets and eye protection. Mopeds of any class are barred from expressways and other controlled-access highways unless a posted sign permits them.",
        trap: "'In any lane, like a motorcycle' is right for Class A only, and Class B and C are the ones most people actually ride.",
        excerptKey: "moped-class-b-and-c",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 11: Sharing the Road",
        sourceUrl: CH11,
      },
      {
        id: "ny_s3_18",
        topic: "impairment",
        question:
          "A driver refuses a chemical test after arrest and is later found not guilty of the alcohol charge. What happens to their licence?",
        choices: [
          "It is revoked anyway if a DMV hearing confirms the refusal",
          "It is returned in full once the acquittal is entered",
          "It is suspended for 30 days and then restored",
          "Nothing, because refusal is not itself an offence",
        ],
        correctIndex: 0,
        explanation:
          "Refusing the test is dealt with separately from the criminal charge. If a DMV hearing confirms the refusal, the licence is revoked even after an acquittal.",
        context:
          "The refusal also gets your licence suspended at arraignment, and it can be raised as evidence against you at the trial itself. Reapplying afterwards means paying a civil penalty on top of the ordinary reapplication fee. Under implied consent, driving in New York already counts as agreeing to the test - the choice at the roadside is only whether to break that agreement.",
        trap: "'It is returned in full once the acquittal is entered' assumes the two proceedings are the same one; they run on separate tracks with separate standards.",
        excerptKey: "refusal-revocation",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 9: Alcohol and Other Drugs",
        sourceUrl: CH9,
      },
      {
        id: "ny_s3_19",
        topic: "signals",
        question: "A steady yellow X is showing over your lane. What are you being told?",
        choices: [
          "The lane is open to you",
          "The lane is restricted to left turns",
          "Slow down but stay in the lane",
          "Move out of this lane",
        ],
        correctIndex: 3,
        explanation:
          "A steady yellow X means vacate the lane. It is the warning stage before the lane is closed to you entirely.",
        context:
          "The overhead lane control set is short: steady red X means do not drive in the lane, steady yellow X means move out of it, flashing yellow X restricts it to left turns, and a green arrow means the lane is open. They are used on roads whose lane directions or uses change through the day, and they override the painted markings while lit.",
        trap: "'The lane is restricted to left turns' is the flashing yellow X. Steady versus flashing is the entire difference and it is easy to miss at speed.",
        excerptKey: "lane-control-yellow-x",
        sourceLabel: "New York State Driver's Manual - Chapter 4: Traffic Control",
        sourceUrl: CH4,
      },
      {
        id: "ny_s3_20",
        topic: "safety",
        question: "How should you handle a flag person directing traffic in a work zone?",
        choices: [
          "Treat their signals as advice and use your own judgement",
          "Obey them only where no signs are posted",
          "Obey them - a flagger carries the same authority as a sign",
          "Follow them only if they are wearing a police uniform",
        ],
        correctIndex: 2,
        explanation:
          "A flagger has the same authority as a traffic sign, which means you can be ticketed for disobeying their directions.",
        context:
          "Highway work area flag persons are on New York's list of people authorised to direct traffic, alongside police officers, fire police, school crossing guards and school bus drivers. Directions from any of them outrank signs, signals and pavement markings. In a work zone that authority matters most, because lanes shift, close and reopen faster than the signage can be changed.",
        trap: "'Treat their signals as advice' is how a lot of drivers behave at a flagger, and it is the reason rear-end collisions are the most common work zone crash.",
        excerptKey: "flagger-authority",
        sourceLabel: "New York State Driver's Manual - Chapter 8: Defensive Driving",
        sourceUrl: CH8,
      },
      {
        id: "ny_s3_21",
        topic: "emergencies",
        question: "Your brake pedal goes straight to the floor. What should you try first?",
        choices: [
          "Pull the parking brake hard to lock the wheels",
          "Pump the pedal to try to build pressure",
          "Switch the engine off",
          "Steer for the shoulder and coast until you stop",
        ],
        correctIndex: 1,
        explanation:
          "Pumping the pedal is the first move, because it can restore enough pressure in the system to slow the car.",
        context:
          "If pumping does not work, apply the emergency or parking brake gradually and gently rather than yanking it on, and shift to a lower gear to help the engine slow you down. The general rule for every driving emergency is the same: do not panic, and take the second or two you have to think before acting. Switching the ignition off is specifically warned against in another emergency - a stuck gas pedal - because it can lock the steering.",
        trap: "'Pull the parking brake hard' locks the rear wheels and can spin the car; the manual is specific that it must be applied gradually.",
        excerptKey: "brake-failure",
        sourceLabel: "New York State Driver's Manual - Chapter 10: Special Driving Conditions",
        sourceUrl: CH10,
      },
      {
        id: "ny_s3_22",
        topic: "rules",
        question: "From which part of the road may you legally begin a U-turn in New York?",
        choices: [
          "From the left portion of the lane nearest the centre line",
          "From the right-hand lane, so you have room to swing",
          "From the shoulder, after coming to a complete stop",
          "From whichever lane gives the clearest view",
        ],
        correctIndex: 0,
        explanation:
          "A U-turn must be started from the left portion of the lane closest to the centre line. Starting from the right lane is not permitted.",
        context:
          "Even from the right place, the turn is illegal near a hill crest or curve, or anywhere drivers cannot see your vehicle from 500 feet in both directions. It is also banned in the business districts of New York City, in school zones, wherever a NO U-TURN sign is posted, and on any limited access expressway. Where signals allow it, a green left-turn arrow can authorise a U-turn provided you yield to other traffic.",
        trap: "'From the right-hand lane, so you have room to swing' is what drivers of larger vehicles instinctively do, and it takes you across every lane on the road.",
        excerptKey: "uturn-lane-position",
        sourceLabel: "New York State Driver's Manual - Chapter 5: Intersections and Turns",
        sourceUrl: CH5,
      },
      {
        id: "ny_s3_23",
        topic: "signs",
        question:
          "Which type of vehicle is required to display the reflective orange triangle in New York?",
        choices: [
          "Any vehicle being towed",
          "Animal-drawn vehicles, most farm vehicles and construction equipment",
          "School buses when carrying pupils",
          "Vehicles carrying an oversized load",
        ],
        correctIndex: 1,
        explanation:
          "The slow-moving vehicle symbol is required on animal-drawn vehicles, most farm vehicles and construction equipment. Rural mail delivery vehicles carry it too.",
        context:
          "The emblem's job is to correct your speed estimate at a distance. On a rural road at 55 mph you close on a 15 mph vehicle far faster than it looks, and by the time the shape resolves you may already be committed. Slow well back, and check for oncoming traffic carefully before passing, since farm equipment is often wider than the lane it occupies.",
        trap: "'School buses when carrying pupils' is a plausible guess given how heavily buses are regulated, but buses are identified by their colour, lettering and lights, not by the triangle.",
        excerptKey: "slow-moving-vehicle-emblem",
        sourceLabel: "New York State Driver's Manual - Chapter 11: Sharing the Road",
        sourceUrl: CH11,
      },
      {
        id: "ny_s3_24",
        topic: "rightOfWay",
        question:
          "A fire engine with lights and siren is coming toward you in the opposite lane of a two-way road. What must you do?",
        choices: [
          "Continue normally, since it is not in your lane",
          "Slow down but keep moving",
          "Pull over to the right and stop",
          "Move toward the centre line to give it the outside lane",
        ],
        correctIndex: 2,
        explanation:
          "New York requires you to pull over and stop for an emergency vehicle even when it is approaching in the opposite lane of a two-way road.",
        context:
          "Emergency drivers may legally exceed the limit, pass red lights and STOP signs, drive the wrong way on one-way streets and turn where turns are normally banned, so their path is genuinely unpredictable. Police, sheriff and State Police vehicles responding to emergencies are not always required to sound a siren. If you hear one nearby but cannot place it, pull right and stop until you are sure it is not coming your way.",
        trap: "'Continue normally, since it is not in your lane' assumes the emergency vehicle will stay on its own side, which is exactly the assumption the rule removes.",
        excerptKey: "emergency-opposite-lane",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 5: Intersections and Turns",
        sourceUrl: CH5,
      },
      {
        id: "ny_s3_25",
        topic: "licensing",
        question: "How is New York's written test for a Class D, DJ, M, MJ or E licence scored?",
        choices: [
          "20 questions, 16 correct to pass",
          "25 questions, 20 correct to pass",
          "40 questions, 32 correct to pass",
          "20 questions, at least 14 correct, including at least two of the four road sign questions",
        ],
        correctIndex: 3,
        explanation:
          "The test is 20 questions. You need at least 14 correct overall, and you must also get at least two of the four road sign questions right.",
        context:
          "The sign requirement is a separate hurdle, not part of the overall total: 14 correct answers still fails if three or four of the sign questions were wrong. The test covers rules of the road, safe driving technique, road signs and the alcohol and drug laws, and it is drawn from Chapters 4 through 11 of the manual plus the road signs section. Part 1 of the manual - licensing, keeping your licence and owning a vehicle - is not covered on the permit written test.",
        trap: "'20 questions, 16 correct to pass' is the score a lot of people quote, and it both overstates the overall mark and drops the sign rule entirely.",
        excerptKey: "written-test-pass-mark",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 1: Driver Licenses",
        sourceUrl: CH1,
      },
      {
        id: "ny_s3_26",
        topic: "rules",
        question: "How far before your exit ramp should you signal when leaving an expressway?",
        choices: [
          "Signal as you begin to slow on the ramp",
          "Signal at the 1-mile advance sign",
          "Signal 200 feet before the ramp",
          "Signal at least 100 feet before you reach the exit ramp",
        ],
        correctIndex: 3,
        explanation:
          "At least 100 feet before the ramp - the same distance New York requires for any turn or lane change.",
        context:
          "Get into the correct lane well in advance by reading the destination and exit signs, so you are not making a last-minute lane change. Slow down once you are on the ramp rather than on the through lanes, because ramps usually carry a lower limit. After you leave the expressway, check your speedometer against the new posted limit - you are almost certainly no longer on a 55 mph road.",
        trap: "'Signal as you begin to slow on the ramp' is far too late for anyone behind you, and slowing in the through lane is how exit-ramp rear-end crashes happen.",
        excerptKey: "expressway-exit-signal",
        sourceLabel: "New York State Driver's Manual - Chapter 10: Special Driving Conditions",
        sourceUrl: CH10,
      },
      {
        id: "ny_s3_27",
        topic: "parking",
        question: "When you finish parallel parking, how far from the kerb may your wheels be?",
        choices: [
          "No more than two feet",
          "No more than three feet",
          "No more than one foot",
          "Any distance, as long as traffic can pass",
        ],
        correctIndex: 2,
        explanation:
          "One foot is the maximum. Parallel parking is part of every New York road test and the final position is measured.",
        context:
          "If you finish too far out, edge forward and back while turning the wheel toward the kerb and then straight again. Once parked, do not open a roadside door if it would interfere with cyclists or traffic. Pulling out, straighten the wheels, back up toward the car behind, then turn away from the kerb and check over both shoulders and in your mirrors before moving off.",
        trap: "'Any distance, as long as traffic can pass' describes the practical concern, but the road test applies a measured standard.",
        excerptKey: "parallel-park-one-foot",
        sourceLabel: "New York State Driver's Manual - Chapter 7: Parallel Parking",
        sourceUrl: CH7,
      },
      {
        id: "ny_s3_28",
        topic: "safety",
        question: "As freezing rain begins to fall, which part of the road freezes first?",
        choices: [
          "Roads with the heaviest traffic",
          "Bridges, ramps and overpasses",
          "South-facing slopes",
          "Roads that have already been salted",
        ],
        correctIndex: 1,
        explanation:
          "Bridges, ramps and overpasses freeze first because cold air circulates underneath them as well as above, so they lose heat from both sides.",
        context:
          "Slippery patches can also remain after ploughs have been through. Winter driving means clearing snow and ice from the whole vehicle first - lights, wipers, windows, hood and roof - and then braking early in slow, steady strokes, easing off if the wheels begin to lock. Front-wheel and four-wheel drive help you accelerate, not stop, and they can lose grip without the warning a rear-wheel-drive car gives you.",
        trap: "'Roads with the heaviest traffic' has it backwards - tyre friction and warm engines keep busy road surfaces marginally warmer, not colder.",
        excerptKey: "bridges-freeze-first",
        sourceLabel: "New York State Driver's Manual - Chapter 10: Special Driving Conditions",
        sourceUrl: CH10,
      },
      {
        id: "ny_s3_29",
        topic: "sharing",
        question: "A tractor-trailer ahead of you swings out to the left. What is it most likely doing?",
        choices: [
          "Preparing to make a wide right turn",
          "Changing lanes to the left",
          "Pulling over to stop",
          "Allowing you to pass on the right",
        ],
        correctIndex: 0,
        explanation:
          "Trucks need to swing left before turning right, because the trailer's rear wheels track well inside the path of the front wheels. Read the turn signals, not the initial movement.",
        context:
          "Large vehicles also have far bigger blind spots than cars - deep areas directly behind, wide ones down both sides, and up to 20 feet in front of a long-hooded tractor. Air brakes add distance to their stops. When you pass one, allow more time and space than you would for a car, and make sure you can see its whole front in your mirror before returning to the lane.",
        trap: "'Allowing you to pass on the right' is the most dangerous reading, because the gap the truck opens on its right is precisely where the trailer is about to sweep.",
        excerptKey: "truck-wide-right-turn",
        sourceLabel: "New York State Driver's Manual - Chapter 11: Sharing the Road",
        sourceUrl: CH11,
      },
      {
        id: "ny_s3_30",
        topic: "impairment",
        question:
          "Under Leandra's Law, what changes when an alcohol-related driving offence is committed with a child in the vehicle?",
        choices: [
          "The fine is doubled but the charge stays the same",
          "The licence is suspended for an extra 30 days",
          "The BAC threshold drops to .02",
          "It can be charged as a class E felony carrying up to four years in prison",
        ],
        correctIndex: 3,
        explanation:
          "Committing one of these offences with a child under 16 in the vehicle can be charged as a class E felony, punishable by up to four years in prison.",
        context:
          "The same law requires courts to order an ignition interlock on any vehicle owned or operated by anyone convicted of DWI or aggravated DWI, for at least 12 months. It also made it a felony to drive drunk on a conditional licence - the restricted licence the DMV can issue after an alcohol conviction, valid only for essential trips such as work, school and medical appointments.",
        trap: "'The BAC threshold drops to .02' confuses this with the zero tolerance law for drivers under 21; Leandra's Law is about who is in the car, not what the driver blew.",
        excerptKey: "leandras-law",
        commonlyMissed: true,
        sourceLabel: "New York State Driver's Manual - Chapter 9: Alcohol and Other Drugs",
        sourceUrl: CH9,
      },
      {
        id: "ny_s3_31",
        topic: "signals",
        question: "You approach an intersection where the light is flashing yellow. What does it mean?",
        choices: [
          "Drive with caution",
          "Stop and yield before proceeding",
          "The signal is faulty and should be treated as a stop sign",
          "The light will turn red shortly",
        ],
        correctIndex: 0,
        explanation:
          "A flashing yellow means proceed with caution. It does not require you to stop, but it tells you the crossing is not fully controlled.",
        context:
          "Compare it with the other yellows. A steady yellow means the light is changing to red and you should be ready to stop. A yellow arrow means the green arrow's protection is ending. A flashing red means a full stop, exactly like a STOP sign. Only a signal that is genuinely dark or malfunctioning turns the intersection into an all-way stop.",
        trap: "'The signal is faulty and should be treated as a stop sign' confuses a flashing signal with a failed one - flashing is a working mode, not a fault.",
        excerptKey: "signal-flashing-yellow",
        sourceLabel: "New York State Driver's Manual - Chapter 4: Traffic Control",
        sourceUrl: CH4,
      },
      {
        id: "ny_s3_32",
        topic: "rightOfWay",
        question:
          "You are already in an intersection completing a left turn when another driver arrives at a green light going straight. Who has the right-of-way?",
        choices: [
          "The driver with the green light, since a green outranks a turn",
          "You - a driver approaching an intersection must yield to traffic already in it",
          "Neither; both should stop and wave the other through",
          "The driver on the right",
        ],
        correctIndex: 1,
        explanation:
          "A driver approaching an intersection has to yield to traffic already inside it. Being in the intersection first settles this one, green light or not.",
        context:
          "This is the first rung of New York's right-of-way ladder, and it is why a green light is described as permission to proceed rather than a guarantee. The next rungs handle the other cases: a left-turning driver yields to oncoming traffic going straight or turning right, anyone entering from a driveway stops and yields, and where two drivers arrive together at right angles with nothing controlling them, the driver on the left yields.",
        trap: "'The driver with the green light, since a green outranks a turn' treats the signal as resolving every conflict, which is exactly the gap the right-of-way rules exist to fill.",
        excerptKey: "row-traffic-in-intersection",
        sourceLabel: "New York State Driver's Manual - Chapter 5: Intersections and Turns",
        sourceUrl: CH5,
      },
      {
        id: "ny_s3_33",
        topic: "signs",
        question: "How do New York's destination signs differ from its service signs?",
        choices: [
          "Destination signs are blue and service signs are green",
          "Destination signs are rectangular and service signs are diamond-shaped",
          "Destination signs are orange and service signs are white",
          "Destination signs are green and service signs are blue",
        ],
        correctIndex: 3,
        explanation:
          "Green with white lettering means destination - where a place is and how far. Blue with white lettering means service - fuel, food, rest areas, medical facilities.",
        context:
          "New York's full colour set for the exam is worth learning as a block: white rectangles with black or red lettering for regulation signs, yellow diamonds for warnings, orange for work areas, green for destinations, blue for services. Route markers use varied colours, and their shape tells you whether the route is a state, US or interstate route.",
        trap: "The two are simply swapped in the first option, which is the error that actually happens - both are rectangular information signs seen at highway speed.",
        excerptKey: "sign-destination-green",
        sourceLabel: "New York State Driver's Manual - Chapter 4: Traffic Control",
        sourceUrl: CH4,
      },
      {
        id: "ny_s3_34",
        topic: "rules",
        question: "In which situation does New York allow you to pass another vehicle on the right?",
        choices: [
          "Whenever the driver ahead is going below the speed limit",
          "When you can use the shoulder to complete the pass safely",
          "When the vehicle ahead of you is making a left turn",
          "Whenever you are on a road with a posted limit above 45 mph",
        ],
        correctIndex: 2,
        explanation:
          "A vehicle ahead turning left is one of the listed situations where passing on the right is permitted, and only when you can do it safely.",
        context:
          "The other listed cases are a two-way road marked or wide enough for two or more lanes in each direction, and a one-way road marked or wide enough for two or more lanes - in both cases only where signs do not prohibit it and parked cars or obstructions do not restrict it. What you may never do is drive on or across the shoulder or edge line to get by, unless a sign allows it or an officer directs you.",
        trap: "'When you can use the shoulder to complete the pass safely' is specifically ruled out; the shoulder is not a lane, and using it is a separate offence.",
        excerptKey: "pass-right-only-when-listed",
        sourceLabel: "New York State Driver's Manual - Chapter 6: Passing",
        sourceUrl: CH6,
      },
      {
        id: "ny_s3_35",
        topic: "emergencies",
        question: "Your right-hand wheels drop off the pavement onto a soft shoulder. What should you do?",
        choices: [
          "Ease off the gas, brake gently, and steer back on once you have slowed",
          "Steer back onto the pavement immediately",
          "Brake hard to stop before the shoulder runs out",
          "Accelerate to bring the car back onto the road",
        ],
        correctIndex: 0,
        explanation:
          "Do not swerve back. Come off the gas, brake gently, and only steer back onto the pavement once you have slowed and checked the traffic behind you.",
        context:
          "The reason is the lip between the shoulder and the road surface: at speed the tyre catches on it and the car snaps across into the oncoming lane. The same principle - slow first, steer second - runs through the other emergencies, from a blowout to a steering failure. In all of them the manual's first instruction is not to panic, because you usually have a second or two to think.",
        trap: "'Steer back onto the pavement immediately' is the reflex, and it causes more head-on collisions than the original drop-off ever would.",
        excerptKey: "off-the-pavement",
        sourceLabel: "New York State Driver's Manual - Chapter 10: Special Driving Conditions",
        sourceUrl: CH10,
      },
    ],
  },
];
