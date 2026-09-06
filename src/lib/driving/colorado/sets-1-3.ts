import type { DrivingTestSet } from "../types";

// Every fact below was checked against the Colorado Driver Handbook, DR 2337
// (12/05/24), the January 2025 edition published by the Colorado Division of
// Motor Vehicles, plus Title 42 of the Colorado Revised Statutes (2024
// edition) and five dmv.colorado.gov pages that carry rules the handbook
// states incompletely or not at all.
//
// Colorado's handbook is 27 printed pages, and it is unusually generous with
// numbers: it prints the statutory speed defaults, the hydrant and stop-sign
// parking distances, the signal distances and the headlight rule. The gaps
// that remain are filled from the statute and the DMV's own web pages:
//
// 1. The handbook gives no crosswalk, driveway or railroad parking distance.
//    The 20-foot, 5-foot and 50-foot figures come from C.R.S. 42-4-1204.
// 2. The handbook says minor permit rules "vary by age" and stops there. The
//    ages, courses, holding periods and the 2027 HB24-1021 change come from
//    dmv.colorado.gov/permits-first-time-driver-license and the HB24-1021 page.
// 3. The handbook says nothing about the test's length, time limit or retest
//    rules. The 60-minute limit, the two-a-day cap, the $11.50 retest fee and
//    the under-19 proxy rule come from the @Home Driving Knowledge Tests page.
//    The DMV publishes NO question count or pass mark anywhere on its site;
//    the 25 questions and 80% quoted on the jurisdiction page are what
//    Colorado driving schools and recent test-takers consistently report.
//
// One genuine conflict is flagged where it arises. On school buses the
// handbook releases oncoming traffic only where "a median or other physical
// barrier" separates the roadways, while C.R.S. 42-4-1903(4) defines a
// "highway with separate roadways" as one divided by "a depressed, raised, or
// painted median". Every question touching this is built on a raised median
// or on a four-lane road with no median at all, where both readings agree.
//
// Questions are original. Explanations, context notes and trap notes are
// written from scratch; the deep link is there so the learner reads the
// DMV's own authoritative wording on the government's site.
const HB = "https://dmv.colorado.gov/sites/dmv/files/documents/DR_2337_Jan2025.pdf";
const hb = (printedPage: number) => `${HB}#page=${printedPage + 3}`;
const CRS = (pdfPage: number) =>
  `https://content.leg.colorado.gov/sites/default/files/images/olls/crs2024-title-42.pdf#page=${pdfPage}`;
const PERMITS = "https://dmv.colorado.gov/permits-first-time-driver-license";
const ATHOME = "https://dmv.colorado.gov/home-driving-knowledge-tests";

export const coloradoSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Colorado Basics",
    difficulty: "starter",
    description:
      "The rules you meet on your first drive in Colorado: what the sign colors mean, what each light and arrow tells you, who goes first, and the handful of numbers the DMV's written test expects you to know cold.",
    questions: [
      {
        id: "co_s1_01",
        topic: "signs",
        question: "A sign is black or red lettering on a white background. What kind of sign is it, and what happens if you ignore it?",
        choices: [
          "A regulatory sign; failing to obey it is a traffic violation",
          "A warning sign; ignoring it is unwise but not illegal",
          "A guide sign; it only gives directions",
          "A work zone sign; it applies only when workers are present",
        ],
        correctIndex: 0,
        explanation:
          "White signs with black or red markings state the law at that spot - speed limits, stop, yield, no turns. The handbook is blunt about the consequence: disobeying one is a traffic violation, not a lapse in etiquette.",
        context:
          "Colorado teaches signs by color. White with black or red is regulatory, yellow or fluorescent green is a warning, orange is a work zone, green guides you to destinations, blue points to services and brown marks recreational and historic areas. Knowing the color system lets you read a sign you have never seen before, which is exactly what the test does.",
        trap:
          "Yellow warns; white commands. A white sign is never advisory, even when it is only a symbol with no words.",
        excerptKey: "regulatory-signs",
        sourceLabel: "Colorado Driver Handbook - Traffic Signs",
        sourceUrl: hb(7),
      },
      {
        id: "co_s1_02",
        topic: "signals",
        question: "You are stopped at a steady red light and want to turn right. There is no sign about it. What does Colorado allow?",
        choices: [
          "Turn right only when the light turns green",
          "Turn right without stopping if the way is clear",
          "Turn right only if a green arrow appears",
          "Turn right after a complete stop, yielding to pedestrians and other traffic",
        ],
        correctIndex: 3,
        explanation:
          "Right on red is the default in Colorado. Three conditions attach: you stop first, you yield to pedestrians and any other traffic, and no sign forbids the turn.",
        context:
          "A steady red means stop and stay stopped until green, with two carve-outs. Right on red is allowed after a full stop unless a sign prohibits it, and a left on red is allowed only from a one-way street onto another one-way street on the same terms. A red arrow removes the permission for that movement entirely.",
        trap:
          "\"Clear enough to roll through\" is not a stop. The turn is only lawful after the wheels have stopped turning.",
        excerptKey: "red-right-turn",
        sourceLabel: "Colorado Driver Handbook - Traffic Signals",
        sourceUrl: hb(7),
        commonlyMissed: true,
      },
      {
        id: "co_s1_03",
        topic: "rightOfWay",
        question: "You and another driver arrive at a four-way stop at the same moment, on different roads. Who goes first?",
        choices: [
          "The driver on the right",
          "The driver on the left",
          "The driver going straight ahead",
          "Whichever driver is on the busier road",
        ],
        correctIndex: 0,
        explanation:
          "Colorado's tie-breaker is the vehicle on the right: the driver on the left yields. It only comes into play when arrival is genuinely simultaneous; otherwise the first to arrive goes first.",
        context:
          "The handbook sets out the four-way stop in two sentences: first to arrive goes first, and on a tie the vehicle on the left yields to the vehicle on the right. Then it adds the line the test loves - regardless of who has the right-of-way, you are always responsible for avoiding a crash. The same right-hand rule applies at an uncontrolled intersection with no signs at all.",
        trap:
          "Going straight does not outrank turning at a four-way stop. Arrival order decides it, and the right-hand rule only breaks a tie.",
        excerptKey: "four-way-stop",
        sourceLabel: "Colorado Driver Handbook - Right-of-Way",
        sourceUrl: hb(11),
        commonlyMissed: true,
      },
      {
        id: "co_s1_04",
        topic: "safety",
        question: "In normal conditions, how much space does the Colorado handbook tell you to keep behind the vehicle ahead?",
        choices: [
          "One car length for every 10 mph",
          "Two seconds",
          "Three seconds, counted from a fixed reference point",
          "Five seconds",
        ],
        correctIndex: 2,
        explanation:
          "Colorado teaches the three-second rule. Watch the car ahead pass a pole or sign, count one-thousand-one to one-thousand-three, and if you reach the marker before you finish, you are too close.",
        context:
          "The handbook frames following distance as reaction time, not feet. Three seconds is the normal-conditions minimum, and it tells you to stretch it for weather, road conditions, traffic and night driving, because stopping distance grows sharply. On the drive test the examiner uses a different check - if you can see the rear wheels of the car ahead touching the road, you are far enough back.",
        trap:
          "Two seconds is what several other states teach. Colorado's figure is three, and more in bad conditions.",
        excerptKey: "three-second-rule",
        sourceLabel: "Colorado Driver Handbook - Safe Driving Tips",
        sourceUrl: hb(18),
      },
      {
        id: "co_s1_05",
        topic: "sharing",
        question: "A school bus ahead has stopped with its red lights flashing. How far back must you stop?",
        choices: [
          "10 feet",
          "At least 50 feet",
          "One car length",
          "At least 20 feet",
        ],
        correctIndex: 3,
        explanation:
          "Colorado's figure is 20 feet, measured from the bus's bumper, and it applies whether you are behind the bus or meeting it head-on. You stay stopped until the red lights stop flashing.",
        context:
          "The handbook states the rule twice, once under right-of-way and again under sharing the road: stop at least 20 feet before reaching a school bus with flashing red lights, on your side, the opposite side, or at an intersection you are approaching, and do not move until the lights go off. The only release is a median or other physical barrier between you and the bus.",
        trap:
          "Stopping at the right distance and then creeping forward while the lights are still flashing is still a violation.",
        excerptKey: "school-bus-20-feet",
        sourceLabel: "Colorado Driver Handbook - Right-of-Way",
        sourceUrl: hb(11),
        commonlyMissed: true,
      },
      {
        id: "co_s1_06",
        topic: "signs",
        question: "You see a yellow diamond with a black symbol. What is it telling you?",
        choices: [
          "You are entering a work zone",
          "A law applies here that you must obey",
          "The route number of the road you are on",
          "There is a hazard ahead, such as a curve, slippery surface or merging traffic",
        ],
        correctIndex: 3,
        explanation:
          "Yellow (or fluorescent green) with black symbols is Colorado's warning color. It flags something ahead - a curve, a school zone, a slippery surface, merging traffic - so you can adjust before you reach it.",
        context:
          "The handbook lists warning signs among school zones, curves, slippery surfaces, merging traffic and pedestrian-dense areas. Unlike regulatory signs they do not state a law, but the speed limit still requires you to slow when conditions demand it, so ignoring a warning can still be a violation of the basic speed rule. Fluorescent green is used for the pedestrian and school warnings.",
        trap:
          "Orange, not yellow, is the work zone color. Yellow warns of the road itself.",
        excerptKey: "warning-signs",
        sourceLabel: "Colorado Driver Handbook - Traffic Signs",
        sourceUrl: hb(8),
      },
      {
        id: "co_s1_07",
        topic: "impairment",
        question: "What blood alcohol level can cost a driver under 21 their license in Colorado?",
        choices: ["0.08", "0.05", "0.02", "Any level above zero"],
        correctIndex: 2,
        explanation:
          "For drivers under 21 the revocation threshold is 0.02, roughly a single drink. The 0.08 figure most people know is the adult DUI per se level.",
        context:
          "The handbook lists three revocation levels side by side: over .08 for any driver, over .02 for a driver under 21, and over .04 for a commercial driver. The statute frames the under-21 offense as a BAC of at least 0.02 but not more than 0.05, on top of the ordinary DWAI and DUI charges that apply to everyone. A conviction for simply buying or possessing alcohol under 21 also costs the license, driving or not.",
        trap:
          "Colorado is not literally zero-tolerance. The number is 0.02, and an answer of \"any amount\" is wrong on the test.",
        excerptKey: "bac-revocation-levels",
        sourceLabel: "Colorado Driver Handbook - Driving Under the Influence",
        sourceUrl: hb(3),
        commonlyMissed: true,
      },
      {
        id: "co_s1_08",
        topic: "licensing",
        question: "You are driving on a Colorado instruction permit. Who must be in the car with you?",
        choices: [
          "Any licensed driver, in any seat",
          "A person 21 or older with a valid Colorado license, in the front passenger seat",
          "A parent or guardian, in any seat",
          "A driving instructor only",
        ],
        correctIndex: 1,
        explanation:
          "The supervisor has to be at least 21, hold a valid Colorado license, and sit in the front passenger seat. Age, license and seat are all part of the rule.",
        context:
          "The handbook states the permit condition in one sentence. The DMV's permit pages add that a supervisor with a military ID and a valid out-of-state license also qualifies, and that a parent who does not hold a Colorado license may name an alternate permit supervisor on the affidavit of liability. Under 18, the log hours only count when driven with an approved supervisor.",
        trap:
          "A licensed 19-year-old friend does not qualify. Twenty-one is the floor.",
        excerptKey: "permit-supervisor-21",
        sourceLabel: "Colorado Driver Handbook - Getting a Driver License",
        sourceUrl: hb(1),
      },
      {
        id: "co_s1_09",
        topic: "speed",
        question: "You are driving through a residential neighborhood with no speed limit sign posted. What is Colorado's default limit?",
        choices: ["20 mph", "25 mph", "30 mph", "35 mph"],
        correctIndex: 2,
        explanation:
          "Unless a sign says otherwise, a residence district is 30 mph in Colorado. Business districts are 25 mph, and cities may post lower limits by ordinance.",
        context:
          "The handbook prints the statutory defaults from C.R.S. 42-4-1101: 20 mph on narrow, winding mountain highways and blind curves, 25 in a business district, 30 in a residence district, 40 on open mountain highways, 55 on urban interstates and highways, and 65 to 75 on designated rural interstates. Nothing in Colorado may be posted above 75.",
        trap:
          "Twenty-five is the business-district figure. Residential streets are 30 unless posted lower.",
        excerptKey: "speed-defaults-low",
        sourceLabel: "Colorado Driver Handbook - Speed",
        sourceUrl: hb(12),
        commonlyMissed: true,
      },
      {
        id: "co_s1_10",
        topic: "signals",
        question: "The light turns steady yellow as you approach an intersection. What should you do?",
        choices: [
          "Speed up to clear the intersection before it turns red",
          "Stop only if pedestrians are waiting",
          "Continue at the same speed; yellow means caution",
          "Stop, unless you are already in the intersection",
        ],
        correctIndex: 3,
        explanation:
          "Colorado's yellow is a stop light with one exception: if you are already inside the intersection, clear it. Everyone else stops.",
        context:
          "The handbook's signal list is short and literal. Steady red: stop until green. Steady yellow: a red is about to appear, stop unless already in the intersection. Steady green: go after yielding to anything already in the intersection or crosswalk. A yellow arrow works the same way for the turning movement, and a flashing yellow light is a hazard warning rather than a stop.",
        trap:
          "Yellow does not mean \"hurry\". Accelerating to beat the red is the behavior the test is checking you would not do.",
        excerptKey: "steady-yellow",
        sourceLabel: "Colorado Driver Handbook - Traffic Signals",
        sourceUrl: hb(7),
      },
      {
        id: "co_s1_11",
        topic: "parking",
        question: "How close to a fire hydrant may you park in Colorado?",
        choices: ["No closer than 15 feet", "No closer than 10 feet", "No closer than 30 feet", "Anywhere, as long as you leave room for a hose"],
        correctIndex: 0,
        explanation:
          "Fifteen feet from a hydrant. The same handbook sentence gives 30 feet for a traffic signal, stop sign or railroad crossing, and those two numbers are the ones the test asks.",
        context:
          "The handbook's no-parking list covers crosswalks, sidewalks, bridges, tunnels, intersections, railroad tracks, controlled-access highways, runaway truck ramps, on and off ramps, driveways and bike lanes, plus 30 feet from a signal, stop sign or rail crossing and 15 feet from a hydrant. The statute adds distances the book omits: 20 feet from a crosswalk at an intersection, 5 feet from a driveway and 50 feet from the nearest rail.",
        trap:
          "Thirty feet is the stop-sign and signal figure. Hydrants are 15.",
        excerptKey: "no-parking-30-15-feet",
        sourceLabel: "Colorado Driver Handbook - Parking",
        sourceUrl: hb(13),
        commonlyMissed: true,
      },
      {
        id: "co_s1_12",
        topic: "rules",
        question: "You are on a two-lane road with a broken yellow line down the middle. What does the line permit?",
        choices: [
          "Passing, when it is safe to do so",
          "Lane changes only, never passing",
          "Nothing; yellow lines always mean no passing",
          "Passing only on the right",
        ],
        correctIndex: 0,
        explanation:
          "Yellow separates opposing traffic, and a broken yellow line means passing is permitted. Solid yellow on your side means you may not cross to pass.",
        context:
          "Colorado's marking rules: broken yellow, passing allowed; solid yellow on your side, no passing; double solid yellow, neither side passes. Two exceptions let you cross a solid or double yellow - a left turn into an alley, driveway or private road, and passing a bicyclist with at least three feet of room when the oncoming lane is clear. White lines separate lanes going the same way, broken for lane changes, solid to stay put.",
        trap:
          "Broken means you MAY pass, not that you must. The judgment about a safe gap is still yours.",
        excerptKey: "yellow-lines-broken",
        sourceLabel: "Colorado Driver Handbook - Pavement Markings",
        sourceUrl: hb(9),
      },
      {
        id: "co_s1_13",
        topic: "safety",
        question: "Where does the handbook say to place your hands on the steering wheel?",
        choices: [
          "10 and 2 o'clock",
          "12 o'clock with one hand",
          "3 and 9 or 4 and 8 o'clock, on the outside of the wheel",
          "Anywhere comfortable, as long as one hand stays on the wheel",
        ],
        correctIndex: 2,
        explanation:
          "Colorado teaches 3-and-9 or 4-and-8, both hands on the outside of the rim, thumbs up along the face of the wheel. The old 10-and-2 grip is not what the book says.",
        context:
          "The handbook's basic-driving chapter wants a firm but gentle grip with the fingers rather than the palms, and it warns never to grip the inside of the wheel while turning. For steering it names hand-over-hand and push-pull-slide as the approved methods, and the drive test scores you on using one of them with both hands on the wheel.",
        trap:
          "10-and-2 is what a parent may have learned. The handbook's positions are lower, partly because of airbags.",
        excerptKey: "hand-position",
        sourceLabel: "Colorado Driver Handbook - Basic Driving",
        sourceUrl: hb(6),
      },
      {
        id: "co_s1_14",
        topic: "rightOfWay",
        question: "A pedestrian is crossing at an intersection with no painted crosswalk. What must you do?",
        choices: [
          "Slow down but keep moving if you can pass behind them",
          "Sound the horn so they hurry",
          "Continue; without paint there is no crosswalk",
          "Stop and let them cross safely",
        ],
        correctIndex: 3,
        explanation:
          "Pedestrians have the right-of-way at every intersection and crosswalk, painted or not. The handbook's instruction is a complete stop until the person is safely across.",
        context:
          "Colorado defines a crosswalk as a marked OR unmarked part of the road where pedestrians have the right-of-way, and the pedestrian chapter repeats that the lines do not have to be painted. Add the rule about stopped vehicles: if a car ahead of you is stopped at a crosswalk, you may not pass it, because it may be stopped for someone you cannot see.",
        trap:
          "\"No paint, no crosswalk\" is the misconception the question is built to catch. Every intersection has a crosswalk in Colorado law.",
        excerptKey: "pedestrians-unmarked-crosswalk",
        sourceLabel: "Colorado Driver Handbook - Pedestrians",
        sourceUrl: hb(24),
        commonlyMissed: true,
      },
      {
        id: "co_s1_15",
        topic: "emergencies",
        question: "An ambulance with its siren on is coming up behind you. What does Colorado require?",
        choices: [
          "Stop where you are, even in the intersection",
          "Speed up to stay ahead of it",
          "Pull to the right edge of the road and stop; if you are in an intersection, clear it first, then pull over",
          "Move to the left lane so it can pass on the right",
        ],
        correctIndex: 2,
        explanation:
          "Right edge, stop, and wait for it to pass. If you happen to be inside an intersection, drive through and then pull over, so you do not block the crossing.",
        context:
          "The rule covers any emergency vehicle using a siren, air horn or flashing red, blue, white or yellow lights. The statute says to clear the far left lane and stop parallel to the right curb, clear of any intersection, until the vehicle has passed. A separate rule covers emergency vehicles already stopped at the roadside: leave a lane between you if you can, otherwise slow to 25 mph where the limit is 45 or less, or 20 under the limit where it is higher.",
        trap:
          "Stopping dead in the intersection blocks the very path the ambulance needs. Clear it, then stop.",
        excerptKey: "emergency-vehicle-pull-right",
        sourceLabel: "Colorado Driver Handbook - Right-of-Way",
        sourceUrl: hb(11),
      },
      {
        id: "co_s1_16",
        topic: "signs",
        question: "Which sign color tells you that you are entering a road work area?",
        choices: [
          "Orange",
          "Yellow",
          "Green",
          "Blue",
        ],
        correctIndex: 0,
        explanation:
          "Orange with black letters or symbols is the work zone color. It is used with cones, barriers and flaggers to route you safely past workers.",
        context:
          "Work zones carry two extra rules worth knowing: reduced speed limits are posted and enforced, and fines are doubled, the same as in school zones. The handbook adds that most work zone crashes are rear-end collisions from inattentive drivers, so it tells you not to tailgate and to be ready to stop suddenly.",
        trap:
          "Yellow warns of road conditions; orange is specifically construction and maintenance.",
        excerptKey: "work-zone-signs",
        sourceLabel: "Colorado Driver Handbook - Traffic Signs",
        sourceUrl: hb(8),
      },
      {
        id: "co_s1_17",
        topic: "safety",
        question: "When does Colorado law require your headlights to be on?",
        choices: [
          "Only after dark",
          "From sunset to sunrise, or whenever visibility is less than 1,000 feet",
          "Whenever your wipers are on",
          "From one hour after sunset to one hour before sunrise",
        ],
        correctIndex: 1,
        explanation:
          "Two triggers: the clock (sunset to sunrise) and visibility (less than 1,000 feet). Rain, snow, fog or dust that cuts your view below 1,000 feet turns the lights on in the middle of the day.",
        context:
          "The handbook states the rule under night driving and the statute, C.R.S. 42-4-204, states it the same way. Parking lights alone are never enough to drive on, though a vehicle parked at the roadside must show them from sunset to sunrise. The handbook also recommends low beams or daytime running lights at all times as a way to be seen.",
        trap:
          "A wipers-on rule exists in some states, but Colorado's trigger is the 1,000-foot visibility test, not the wipers.",
        excerptKey: "headlights-1000-feet",
        sourceLabel: "Colorado Driver Handbook - Night Driving",
        sourceUrl: hb(16),
        commonlyMissed: true,
      },
      {
        id: "co_s1_18",
        topic: "signals",
        question: "A traffic light shows a lighted red arrow pointing left. What does it mean for you if you want to turn left?",
        choices: [
          "Stop, then turn left when the way is clear",
          "You may turn left if no traffic is coming",
          "Stop; you may not turn in that direction",
          "Turn left with caution, yielding to oncoming traffic",
        ],
        correctIndex: 2,
        explanation:
          "A red arrow is a full prohibition on that movement. You stop and you wait; there is no stop-then-go option for an arrow the way there is for a right on a circular red.",
        context:
          "Arrows control one movement. Red arrow: stop, no turn that way. Yellow arrow: red arrow coming, stop unless already in the intersection. Green arrow: you may turn that way, and if the arrow goes off while the circular green stays on you may still turn after yielding to oncoming traffic and pedestrians. A flashing yellow arrow means turn with caution after yielding to oncoming traffic and pedestrians.",
        trap:
          "Right on red is a rule for the circular red. A red ARROW carries no such permission in either direction.",
        excerptKey: "red-arrow",
        sourceLabel: "Colorado Driver Handbook - Traffic Signals",
        sourceUrl: hb(7),
      },
      {
        id: "co_s1_19",
        topic: "rules",
        question: "In a city, how far ahead of a turn must you begin signaling in Colorado?",
        choices: [
          "50 feet",
          "200 feet",
          "300 feet",
          "100 feet",
        ],
        correctIndex: 3,
        explanation:
          "One hundred feet of continuous signal in urban areas. On four-lane highways posted above 40 mph the distance doubles to 200 feet, which is the number people mix up.",
        context:
          "The handbook and C.R.S. 42-4-903 agree: 100 feet before a turn or lane change in urban or metropolitan areas, 200 feet on four-lane highways and other roads where the limit is above 40 mph. The book adds a rule of thumb of at least three seconds, and on the drive test the examiner checks the signal is on continuously for the full distance and canceled within three seconds afterward.",
        trap:
          "Two hundred feet is the highway figure. In town it is 100.",
        excerptKey: "signal-100-200-feet",
        sourceLabel: "Colorado Driver Handbook - Turning",
        sourceUrl: hb(12),
      },
      {
        id: "co_s1_20",
        topic: "licensing",
        question: "Who must wear a seat belt under Colorado law?",
        choices: [
          "The driver, all front seat passengers and children under 16",
          "Only the driver",
          "The driver and front seat passengers only",
          "Everyone in the vehicle, with no exceptions",
        ],
        correctIndex: 0,
        explanation:
          "The adult belt law reaches the driver, front-seat passengers and every child under 16 wherever they sit. A separate rule for drivers under 18 requires every passenger in the car to be belted.",
        context:
          "The handbook lists the covered occupants and then the only exceptions: emergency personnel, passenger buses and school buses, farm equipment, delivery van drivers on the job, and anyone carrying a physician's written statement. Children under 9 fall under the child restraint law, with rear-facing seats under 2 and boosters from 4 to 9.",
        trap:
          "\"Everyone, no exceptions\" is close but wrong for adults in the back seat of a car driven by an adult. The minor-driver rule is the one that belts everybody.",
        excerptKey: "seatbelt-who",
        sourceLabel: "Colorado Driver Handbook - Seat Belt Laws",
        sourceUrl: hb(3),
      },
      {
        id: "co_s1_21",
        topic: "signs",
        question: "A red and white downward-pointing triangle faces you at an intersection. What must you do?",
        choices: [
          "Come to a complete stop every time",
          "Proceed; the sign only warns of a merge",
          "Sound your horn and proceed",
          "Slow or stop as needed to let pedestrians and any vehicle with the right-of-way go first",
        ],
        correctIndex: 3,
        explanation:
          "A yield sign means slow down, and stop if you have to, to give way to pedestrians and to traffic that has the right-of-way. If a gap does not exist, stopping becomes mandatory.",
        context:
          "The handbook's yield entry is one sentence, but it pairs with the right-of-way chapter: you never own the right-of-way, you only owe it. Yield is the lighter cousin of stop - no automatic halt, but no right to push in either. Crossbuck signs at railroad crossings are treated exactly like a yield sign.",
        trap:
          "Yield is not \"carry on if it looks fine\". When traffic is coming you must stop, even though the sign does not say STOP.",
        excerptKey: "yield-sign",
        sourceLabel: "Colorado Driver Handbook - Traffic Signs",
        sourceUrl: hb(7),
      },
      {
        id: "co_s1_22",
        topic: "impairment",
        question: "Colorado has two impaired-driving offenses, DWAI and DUI. What separates them?",
        choices: [
          "DWAI is for drugs, DUI is for alcohol",
          "DWAI is for drivers under 21, DUI for adults",
          "DWAI applies only to commercial drivers",
          "DWAI means impaired to the slightest degree; DUI means substantially incapable of safe driving",
        ],
        correctIndex: 3,
        explanation:
          "The difference is degree of impairment. DWAI is impairment to the slightest degree; DUI is being substantially incapable of driving safely. Both apply to alcohol, drugs or any mix.",
        context:
          "The handbook's penalty table puts the two side by side: a first DWAI carries 8 points, $200 to $500, 2 to 180 days in jail and 24 to 48 hours of public service, tied to a 0.05 BAC. A first DUI is a 9-month revocation, $600 to $1,000, 5 to 365 days and 48 to 96 hours, tied to 0.08. A driver is convicted on behavior and the totality of circumstances, not only the number.",
        trap:
          "Neither offense is limited to alcohol. Marijuana, prescription drugs and over-the-counter medicines carry the same penalties.",
        excerptKey: "dwai-vs-dui",
        sourceLabel: "Colorado Driver Handbook - Driving Under the Influence",
        sourceUrl: hb(3),
        commonlyMissed: true,
      },
      {
        id: "co_s1_23",
        topic: "rightOfWay",
        question: "You are about to turn left at a green light with no arrow. Oncoming traffic is approaching. Who has the right-of-way?",
        choices: [
          "You do, because your light is green",
          "The oncoming traffic; you must yield to it",
          "Whoever reaches the middle of the intersection first",
          "You do, if you signaled before the oncoming driver did",
        ],
        correctIndex: 1,
        explanation:
          "A left turn yields to all oncoming traffic unless you have a green arrow or you arrived first at a four-way stop. A plain green light gives you permission to go, not priority over the cars coming at you.",
        context:
          "The handbook's line is that the law says who must yield but never gives anyone the right-of-way, even on a green. For left turns it tells you to wait at the stop line or crosswalk for a gap, to look for bicycles and motorcycles that are easy to misjudge, and never to angle the front wheels left while waiting, because a rear-end hit would push you into oncoming traffic.",
        trap:
          "Green means \"proceed after yielding\", not \"you have priority\". The oncoming driver going straight does not have to let you turn.",
        excerptKey: "left-turn-yield-oncoming",
        sourceLabel: "Colorado Driver Handbook - Right-of-Way",
        sourceUrl: hb(11),
      },
      {
        id: "co_s1_24",
        topic: "sharing",
        question: "You are overtaking a bicyclist. How much clearance does Colorado require?",
        choices: [
          "At least 3 feet, measured from the outermost part of your vehicle",
          "At least 2 feet",
          "A full lane width",
          "Enough that the cyclist does not have to swerve",
        ],
        correctIndex: 0,
        explanation:
          "Three feet minimum, and it is measured from your mirrors or any trailer, not from the door. If you cannot give three feet, you slow down and wait behind the cyclist.",
        context:
          "The three-foot rule is repeated in four places in the handbook: the Pass 3 Ft Min sign, the pavement markings, the passing chapter and the bicycle chapter. It applies even when no sign is posted and even to cyclists in a bike lane. To make room you may briefly cross a solid or double yellow line when there is no oncoming traffic and you have a clear view ahead.",
        trap:
          "Three feet is the minimum, not the target. The book asks for more on rural roads, in wind, or in a large vehicle, because wind blast can knock a rider over.",
        excerptKey: "pass-bicyclist-3-feet",
        sourceLabel: "Colorado Driver Handbook - Passing",
        sourceUrl: hb(15),
      },
      {
        id: "co_s1_25",
        topic: "parking",
        question: "You park facing downhill on a street with a curb. Which way do you turn the front wheels?",
        choices: ["Away from the curb", "Straight ahead", "Toward the curb", "It does not matter if the parking brake is set"],
        correctIndex: 2,
        explanation:
          "Downhill with a curb, the wheels turn toward the curb, so a rolling car is stopped by the curb. Uphill with a curb they turn away, so the back of the front tire catches the curb.",
        context:
          "The handbook gives three cases. Downhill with a curb: toward the curb. Uphill with a curb: away from the curb, letting the car roll back until the wheel rests on it. No curb, uphill or downhill: turn the wheels to the right so the car rolls off the road rather than into traffic. A manual transmission goes in low gear uphill and reverse downhill, and the parking brake is set every time.",
        trap:
          "\"Always turn to the right\" is only the no-curb rule. With a curb, the direction depends on the slope.",
        excerptKey: "parking-downhill-curb",
        sourceLabel: "Colorado Driver Handbook - Parking",
        sourceUrl: hb(14),
      },
      {
        id: "co_s1_26",
        topic: "signals",
        question: "You approach an intersection where the traffic light is flashing red in your direction. What does it require?",
        choices: [
          "Treat it like a stop sign: stop, then go after yielding",
          "Slow down and proceed with caution",
          "Stop and wait for it to turn green",
          "Stop only if cross traffic is present",
        ],
        correctIndex: 0,
        explanation:
          "A flashing red is a stop sign made of light. Stop completely, yield to pedestrians and other traffic, then proceed. A flashing yellow, by contrast, only asks you to slow and take care.",
        context:
          "Colorado's flashing signals: red means the same as a STOP sign, yellow warns of a hazard. If a whole signal is dark or malfunctioning, the handbook tells you to treat the intersection as a four-way stop. HAWK pedestrian signals use a yellow-then-red flashing sequence to stop traffic for people crossing.",
        trap:
          "A flashing red never turns green. Waiting for it to change is not an option; you stop, yield and go.",
        excerptKey: "flashing-red",
        sourceLabel: "Colorado Driver Handbook - Traffic Signals",
        sourceUrl: hb(7),
      },
      {
        id: "co_s1_27",
        topic: "licensing",
        question: "A 16-year-old wants a Colorado instruction permit. What must a parent or another eligible adult do at the appointment?",
        choices: [
          "Nothing; at 16 the applicant signs alone",
          "Pay a bond to the DMV",
          "Pass a written test alongside the teen",
          "Sign an Affidavit of Liability accepting legal responsibility for the teen's driving",
        ],
        correctIndex: 3,
        explanation:
          "Under 18, the application must come with an Affidavit of Liability (form DR 2460), signed by a parent, stepparent, grandparent with power of attorney, guardian, spouse over 18 or another responsible adult who accepts legal liability for the teen's driving.",
        context:
          "The affidavit is signed in front of a DMV employee or a notary. The signer can later withdraw it, and if they do the permit or license is canceled. The DMV pages add that the signer needs a valid Colorado license (or a military ID with an out-of-state license), and that a parent without a Colorado license may appoint an alternate permit supervisor on the form.",
        trap:
          "The obligation follows the signer, not the teen: withdrawing the signature cancels the teen's driving privilege.",
        excerptKey: "affidavit-liability",
        sourceLabel: "Colorado Driver Handbook - Minor Drivers",
        sourceUrl: hb(2),
      },
      {
        id: "co_s1_28",
        topic: "rules",
        question: "You want to pass a car on a two-lane road. When must you be back in your own lane?",
        choices: [
          "Before an oncoming vehicle is within 200 feet",
          "Before an oncoming vehicle is within 100 feet",
          "Any time before the oncoming vehicle reaches you",
          "Within five seconds of starting the pass",
        ],
        correctIndex: 0,
        explanation:
          "If you cannot get back to the right side before coming within 200 feet of an oncoming vehicle, you do not start the pass. The oncoming vehicle can be a car or a bicyclist on the shoulder.",
        context:
          "The handbook's do-not-pass list: within 200 feet of oncoming traffic, before a solid yellow line begins, on a curve or hill where the view is blocked, within 100 feet of an intersection or railroad crossing, and within 100 feet of a bridge, viaduct or tunnel when your view is obstructed. It also names as illegal passing in a no-passing zone, exceeding the speed limit to pass, and passing a school bus with its red lights and stop arm out.",
        trap:
          "One hundred feet is the intersection and railroad figure. For oncoming traffic the margin is 200.",
        excerptKey: "no-pass-200-feet-oncoming",
        sourceLabel: "Colorado Driver Handbook - Passing",
        sourceUrl: hb(15),
      },
      {
        id: "co_s1_29",
        topic: "emergencies",
        question: "Your car starts to skid on ice. What is the first thing the handbook tells you to do with your feet?",
        choices: [
          "Brake hard to scrub off speed",
          "Press the accelerator gently to regain traction",
          "Take your foot off both the brake and the accelerator",
          "Pump the brakes rapidly",
        ],
        correctIndex: 2,
        explanation:
          "Feet off both pedals, then steer the front wheels in the direction you want the car to go. Braking or accelerating in a skid keeps the tires from regaining grip.",
        context:
          "The snow chapter warns that overpasses, bridges, shaded spots and packed snow can be icy when the rest of the road is not, and that ice is most dangerous as it begins to melt. It adds that four-wheel drive helps you go but does not help you stop, and that without ABS you should use threshold braking - pressure just short of locking the wheels.",
        trap:
          "Hard braking is the instinct and the wrong answer. Locked wheels cannot steer.",
        excerptKey: "icy-spots-skid",
        sourceLabel: "Colorado Driver Handbook - Snow and Ice",
        sourceUrl: hb(17),
      },
      {
        id: "co_s1_30",
        topic: "sharing",
        question: "Which drivers must yield to a pedestrian in a crosswalk?",
        choices: [
          "Only drivers turning across the crosswalk",
          "Only drivers at intersections with a walk signal",
          "Drivers on the pedestrian's half of the road only",
          "Every driver; the driver slows or stops as needed to let the pedestrian cross",
        ],
        correctIndex: 3,
        explanation:
          "The handbook states it as an absolute: when driving, you must always yield the right-of-way to pedestrians. The crosswalk entry adds that you slow or stop, whichever it takes.",
        context:
          "Pedestrians are the most vulnerable road users, and the handbook asks for extra care around children, seniors, people with disabilities and anyone who may not hear or see you. The statute refines the crosswalk rule to pedestrians on your half of the road or close enough from the other half to be in danger, but the handbook's teaching is simpler: stop and let them cross.",
        trap:
          "Answering \"only on my half\" is a statute detail the test does not reward. The handbook's answer is always yield.",
        excerptKey: "row-pedestrians",
        sourceLabel: "Colorado Driver Handbook - Right-of-Way",
        sourceUrl: hb(11),
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Core Rules of the Road",
    difficulty: "easy",
    description:
      "Lane markings, merging, passing, parking on hills and the everyday right-of-way calls: the rules the Colorado test asks most often, at the level most people get right with a little study.",
    questions: [
      {
        id: "co_s2_01",
        topic: "rules",
        question: "You are on a freeway on-ramp. When may you move into the freeway lane?",
        choices: [
          "As soon as you reach the speed of traffic",
          "After the solid white line ends, having matched the speed of traffic and found a gap",
          "Immediately, because freeway traffic must let you in",
          "Only after stopping at the end of the ramp",
        ],
        correctIndex: 1,
        explanation:
          "Three things: build speed on the ramp, do not cross the solid white line until it ends, and yield to traffic already on the freeway. You merge into a gap; nobody has to make one for you.",
        context:
          "The handbook's freeway chapter is explicit that you must yield to freeway traffic and must not stop in the acceleration lane unless absolutely necessary. Metered ramps are the exception: there you stop and wait for the green. Once on the freeway, slower traffic keeps right, the left lane is for passing, and you move over if you safely can to make room for merging vehicles.",
        trap:
          "Merging traffic does not have priority. The right-of-way belongs to vehicles already on the roadway.",
        excerptKey: "freeway-merge-solid-line",
        sourceLabel: "Colorado Driver Handbook - Freeway Driving",
        sourceUrl: hb(14),
      },
      {
        id: "co_s2_02",
        topic: "rules",
        question: "A two-way street has a center lane marked with yellow lines and turn arrows in both directions. What is it for?",
        choices: [
          "Passing slower traffic",
          "Merging back into traffic after a stop",
          "Through traffic during rush hour",
          "Left turns from either direction, and nothing else",
        ],
        correctIndex: 3,
        explanation:
          "The two-way left-turn lane exists only for left turns, from either direction. You may pull into it and wait for a gap, but you may not travel in it or pass in it.",
        context:
          "Where a street has a shared center turn lane, the handbook says you may not turn left from any other lane and may not drive in the lane. The statute adds that a U-turn may be prepared from it where U-turns are otherwise legal. Restricted lanes generally are marked with a white diamond and signs; HOV lanes use the diamond too.",
        trap:
          "Using the center lane as a merge lane after turning left out of a driveway is a common habit and a violation; it is for the turn itself.",
        excerptKey: "center-turn-lane",
        sourceLabel: "Colorado Driver Handbook - Lane Controls",
        sourceUrl: hb(10),
      },
      {
        id: "co_s2_03",
        topic: "rightOfWay",
        question: "You are approaching a roundabout with no large trucks in it. Who do you yield to?",
        choices: [
          "Vehicles entering from your right",
          "Nobody; traffic in the circle yields to entering vehicles",
          "Traffic approaching from the left, already circulating",
          "Only pedestrians in the crosswalk",
        ],
        correctIndex: 2,
        explanation:
          "Entering traffic yields to traffic already circulating, which comes from your left. You also yield to pedestrians and cyclists in the crosswalk as you enter and leave, and you signal when you exit.",
        context:
          "Colorado adds a large-vehicle rule most states do not have: everyone yields to a truck, bus, emergency vehicle or RV that is entering, exiting or driving in a roundabout, and when two large vehicles meet, the one on the right yields to the one on the left. The handbook tells you not to stop completely at the entry unless traffic forces you to.",
        trap:
          "The tie-breaker between two big rigs is right-yields-to-left, the opposite of a four-way stop. Do not carry the four-way rule into the circle.",
        excerptKey: "roundabout-yield-left",
        sourceLabel: "Colorado Driver Handbook - Lane Controls",
        sourceUrl: hb(10),
      },
      {
        id: "co_s2_04",
        topic: "signs",
        question: "A sign with a green background and white lettering is telling you what?",
        choices: [
          "Directions and mileage to destinations",
          "A law you must obey",
          "The location of a hospital or gas station",
          "A recreational or historic area",
        ],
        correctIndex: 0,
        explanation:
          "Green is the guide sign color: destinations, distances, exits and route directions. Blue points to services and brown to recreational, historic or cultural sites.",
        context:
          "The handbook's color scheme is the fastest way to answer a sign question you have never seen: white for regulations, yellow or fluorescent green for warnings, orange for work zones, green for guidance, blue for services, brown for recreation. Route markers are read by shape - interstate, U.S., state and county highways each have their own.",
        trap:
          "Blue is services (fuel, food, lodging, hospitals). Green tells you where the road goes.",
        excerptKey: "guide-signs",
        sourceLabel: "Colorado Driver Handbook - Traffic Signs",
        sourceUrl: hb(8),
      },
      {
        id: "co_s2_05",
        topic: "safety",
        question: "Oncoming traffic is approaching at night and your high beams are on. When must you dim them?",
        choices: [
          "Within 200 feet of the oncoming vehicle",
          "Within 500 feet of the oncoming vehicle",
          "Within 1,000 feet of the oncoming vehicle",
          "Only if the other driver flashes their lights",
        ],
        correctIndex: 1,
        explanation:
          "Five hundred feet for oncoming traffic. The other number in the same list is 200 feet: when you are following a vehicle that close, low beams, fog lights off.",
        context:
          "The night driving chapter pairs the two distances and adds that low beams with fog lights count as blinding too, so those also come off within 500 feet. It tells you to use high beams on rural and open roads, to use low beams or fog lights in fog because high beams reflect back, and to drop your eyes to the painted edge line when an oncoming driver fails to dim.",
        trap:
          "Two hundred feet is the following distance rule. Oncoming is 500, and the 1,000-foot figure is the visibility trigger for having headlights on at all.",
        excerptKey: "dim-500-feet",
        sourceLabel: "Colorado Driver Handbook - Night Driving",
        sourceUrl: hb(16),
        commonlyMissed: true,
      },
      {
        id: "co_s2_06",
        topic: "parking",
        question: "You park facing uphill on a street with a curb. Which way do the front wheels go?",
        choices: [
          "Toward the curb",
          "Straight, with the parking brake set",
          "Away from the curb, so the tire rests against it if the car rolls back",
          "To the left, into traffic",
        ],
        correctIndex: 2,
        explanation:
          "Uphill with a curb, turn the wheels away from the curb and let the car roll back until the rear of the front tire rests against it. The curb becomes a block.",
        context:
          "Downhill with a curb is the mirror image: wheels toward the curb. Without a curb, uphill or downhill, turn the wheels to the right so a rolling car leaves the road rather than crossing it. Whatever the slope, the parking brake goes on, the key comes out, and a manual transmission is left in low gear uphill or reverse downhill.",
        trap:
          "Toward the curb is the downhill answer. Uphill the wheels point away, which feels backwards until you picture the tire catching the curb.",
        excerptKey: "parking-uphill-curb",
        sourceLabel: "Colorado Driver Handbook - Parking",
        sourceUrl: hb(14),
      },
      {
        id: "co_s2_07",
        topic: "sharing",
        question: "You are driving the opposite way from a school bus stopped with red lights flashing on a four-lane road that has no median. Must you stop?",
        choices: [
          "No; four lanes release oncoming traffic",
          "No, as long as you are in the far lane",
          "Yes; without a median, traffic in both directions stops",
          "Only if children are visible",
        ],
        correctIndex: 2,
        explanation:
          "Lane count does not release you. On a four-lane road without a median, traffic in both directions must stop. Only a median or other physical barrier between you and the bus lets you keep going.",
        context:
          "The handbook walks through the road types: two-lane road, both directions stop; four lanes with no median, both directions stop; divided highway with a median, only the lanes behind the bus stop; five lanes with a shared center turn lane, only the lanes behind the bus. The statute frames the release as a highway with separate roadways, so the safe rule to carry is that only a physical division between the roadways lets oncoming traffic pass.",
        trap:
          "\"Four lanes\" sounds like a divided highway. It is not, unless something physically separates the two directions.",
        excerptKey: "school-bus-four-lane-no-median",
        sourceLabel: "Colorado Driver Handbook - Sharing the Road",
        sourceUrl: hb(20),
        commonlyMissed: true,
      },
      {
        id: "co_s2_08",
        topic: "rules",
        question: "When is passing on the right allowed in Colorado?",
        choices: [
          "Whenever the vehicle ahead is turning left",
          "Never",
          "On any road, as long as you use the shoulder",
          "On one-way streets and on roads with two or more lanes in each direction",
        ],
        correctIndex: 3,
        explanation:
          "Two places: one-way streets and multi-lane roads with at least two lanes your way. And never by leaving the pavement - passing on the shoulder is prohibited outright.",
        context:
          "Colorado's default is to pass on the left. The handbook's passing routine: judge the room, change lanes as you would anywhere, accelerate past, and move back only when you can see both of the passed vehicle's headlights in your mirror. Pass one vehicle at a time, never exceed the speed limit to complete a pass, and never pass a school bus with its red lights and stop arm out.",
        trap:
          "A wide paved shoulder is still the shoulder. Using it to pass is illegal even where the road is otherwise clear.",
        excerptKey: "pass-on-right-when",
        sourceLabel: "Colorado Driver Handbook - Passing",
        sourceUrl: hb(15),
      },
      {
        id: "co_s2_09",
        topic: "safety",
        question: "You have finished passing a vehicle. When is it safe to return to your lane?",
        choices: [
          "When you can see both of its headlights in your rearview mirror",
          "As soon as your rear bumper clears its front bumper",
          "After counting to three",
          "When the other driver flashes their lights",
        ],
        correctIndex: 0,
        explanation:
          "Both headlights in the rearview mirror is the handbook's test. It puts enough space between you and the passed vehicle that your lane change does not force it to brake.",
        context:
          "The same check appears in the truck chapter with extra force: because trucks need much longer to slow, do not pull in front of one until you can see both of its headlights in your mirror. Cutting in early in front of a truck puts you in its front blind spot as well.",
        trap:
          "Clearing the bumper is not enough; the passed driver needs stopping room behind you.",
        excerptKey: "return-both-headlights",
        sourceLabel: "Colorado Driver Handbook - Passing",
        sourceUrl: hb(15),
      },
      {
        id: "co_s2_10",
        topic: "impairment",
        question: "What does Colorado's express consent law mean for you as a driver?",
        choices: [
          "You must carry proof that you are not impaired",
          "Police need your written consent before any test",
          "You may refuse a breath test without penalty if you accept a blood test later",
          "By driving in Colorado you have agreed to a chemical test if an officer suspects impairment",
        ],
        correctIndex: 3,
        explanation:
          "Driving on Colorado roads is itself the consent. If an officer has cause to suspect impairment, you have already agreed to a test of blood, breath, saliva or urine.",
        context:
          "Refusal is not a way out. Refusing or failing to cooperate brings a one-year license revocation and two years with an ignition interlock on any vehicle you drive, and other suspensions from the same incident stack on the end. An interlock needs a clean breath sample before the engine starts and at intervals while driving.",
        trap:
          "Refusing often costs more than the DUI itself would. The revocation is automatic and stacks with any other sanction.",
        excerptKey: "express-consent",
        sourceLabel: "Colorado Driver Handbook - Driving Under the Influence",
        sourceUrl: hb(5),
        commonlyMissed: true,
      },
      {
        id: "co_s2_11",
        topic: "rightOfWay",
        question: "You reach an intersection with no signs or signals at the same time as a car on the cross street to your right. Who goes?",
        choices: [
          "You, because you are on the road that continues straight",
          "The car on your right; you yield",
          "Whoever accelerates first",
          "The car on the larger road",
        ],
        correctIndex: 1,
        explanation:
          "At an uncontrolled intersection the vehicle on the left yields to the vehicle on the right when both arrive together. Same rule as a four-way stop tie.",
        context:
          "The handbook lists the uncontrolled intersection separately because people forget it exists. No stop signs, no lights, both arrive at once: left yields to right. It sits beside the other yield rules - to anyone already in the intersection, to pedestrians always, to oncoming traffic when turning left, to vehicles already in the lane you want, and to everything when reversing.",
        trap:
          "The road you are on being wider or busier grants nothing. Without a control device, the right-hand rule decides.",
        excerptKey: "uncontrolled-intersection",
        sourceLabel: "Colorado Driver Handbook - Right-of-Way",
        sourceUrl: hb(11),
      },
      {
        id: "co_s2_12",
        topic: "signals",
        question: "A green arrow was lit for your left turn but has gone out, and the circular green is still on. May you still turn left?",
        choices: [
          "Yes, after yielding to oncoming vehicles and pedestrians, unless a sign or red arrow prohibits it",
          "No; you must wait for the next green arrow",
          "Yes, and you keep the right-of-way from the arrow",
          "Only if there is a flashing yellow arrow",
        ],
        correctIndex: 0,
        explanation:
          "The turn is still allowed on a circular green; you have simply lost the protection. Yield to oncoming traffic and pedestrians, then go, unless a sign or a red arrow says otherwise.",
        context:
          "This is the handbook's own example under green arrow. It describes the flashing yellow arrow the same way: turn with caution after yielding to oncoming traffic and pedestrians, never rush it, and expect it to go solid yellow and then red. A red arrow, by contrast, forbids the turn entirely.",
        trap:
          "The arrow going out does not ban the turn; it just ends your priority. Waiting for the next arrow is allowed but not required.",
        excerptKey: "green-arrow-off",
        sourceLabel: "Colorado Driver Handbook - Traffic Signals",
        sourceUrl: hb(7),
      },
      {
        id: "co_s2_13",
        topic: "rules",
        question: "You are about to change lanes on a multi-lane road. What does the handbook say about your turn signal?",
        choices: [
          "Flash it once before moving",
          "Signal only if another vehicle is nearby",
          "Signal after you have checked your mirrors, then move immediately",
          "Leave it on for at least 3 seconds or 200 feet before leaving your lane",
        ],
        correctIndex: 3,
        explanation:
          "Signal first, keep it on for a minimum of three seconds or 200 feet, check ahead, mirrors and over your shoulder, then move when it is safe and cancel within three seconds of finishing.",
        context:
          "The lane change chapter lists the sequence in order, and it treats passing, merging from a ramp and pulling away from the curb as lane changes too. The blind spot is defined as the area slightly behind and beside you that the mirrors miss, and only a shoulder check covers it. The freeway chapter repeats the 200-foot signal distance.",
        trap:
          "Signaling and moving in the same motion tells nobody anything. The handbook wants the signal on for three seconds before the wheel turns.",
        excerptKey: "lane-change-signal-3s-200ft",
        sourceLabel: "Colorado Driver Handbook - Changing Lanes",
        sourceUrl: hb(15),
      },
      {
        id: "co_s2_14",
        topic: "sharing",
        question: "A motorcyclist is riding in the left third of their lane. May you share the lane to pass?",
        choices: [
          "Yes, if the motorcycle is riding to one side",
          "Yes, on a multi-lane road",
          "No; a motorcycle is entitled to the full lane width",
          "Only if you sound your horn first",
        ],
        correctIndex: 2,
        explanation:
          "A motorcycle gets the whole lane, the same as a car. Riders move around inside it to see, be seen and avoid hazards, and that movement is not an invitation to share.",
        context:
          "The handbook warns that motorcycles are small, easy to lose in traffic, and can stop and accelerate faster than you expect, so increase your following distance. Colorado also allows lane filtering: a two-wheeled motorcycle may pass stopped vehicles in the same lane at no more than 15 mph when the adjacent lanes are also stopped and there is room to do it safely.",
        trap:
          "Filtering is something the motorcycle may do past stopped cars. It does not give a car any right to squeeze past a motorcycle.",
        excerptKey: "motorcycle-full-lane",
        sourceLabel: "Colorado Driver Handbook - Motorcycles",
        sourceUrl: hb(23),
      },
      {
        id: "co_s2_15",
        topic: "signs",
        question: "You see a sign that reads DO NOT ENTER at the mouth of a ramp. What is it telling you?",
        choices: [
          "The ramp is closed for construction",
          "You are about to drive the wrong way; do not go past it",
          "Only trucks may use this ramp",
          "The ramp is metered; wait for a green light",
        ],
        correctIndex: 1,
        explanation:
          "Do Not Enter and Wrong Way signs mark the exit end of one-way roads and ramps. They mean you are headed against traffic, and the handbook's instruction is simply not to proceed past one.",
        context:
          "One Way signs tell you the only permitted direction, lane control signs tell you where you may turn from each lane, and prohibitory signs (no U-turn, no left turn) tell you what you may not do. All are regulatory, white with black or red, so disobeying any of them is a violation.",
        trap:
          "A Do Not Enter sign is not advice about a closure. It is the last chance to avoid a head-on collision on a ramp.",
        excerptKey: "do-not-enter",
        sourceLabel: "Colorado Driver Handbook - Traffic Signs",
        sourceUrl: hb(8),
      },
      {
        id: "co_s2_16",
        topic: "safety",
        question: "You are exiting a freeway. When do you signal, and where do you slow down?",
        choices: [
          "Signal 200 feet before the deceleration lane; slow down once you are in it",
          "Signal 100 feet before the exit; slow down on the freeway first",
          "Slow down on the freeway, then signal as you leave",
          "Signal at the exit sign and brake immediately",
        ],
        correctIndex: 0,
        explanation:
          "Signal 200 feet before the deceleration lane begins, hold your speed until you are in that lane, then slow to the advised ramp speed. Braking on the freeway itself is what the deceleration lane exists to prevent.",
        context:
          "The handbook's exit tips: keep pace with traffic while still on the freeway, do not exit at the last second, and do not exceed the posted ramp speed. Advisory speed signs on ramps show the safe speed in ideal conditions. Missing an exit is safer than a late swerve across lanes.",
        trap:
          "Slowing on the through lane before the exit is the mistake the deceleration lane is designed to remove.",
        excerptKey: "exit-signal-200-feet",
        sourceLabel: "Colorado Driver Handbook - Freeway Driving",
        sourceUrl: hb(15),
      },
      {
        id: "co_s2_17",
        topic: "licensing",
        question: "A 17-year-old has held a Colorado license for four months. Who may ride with them?",
        choices: [
          "Anyone, as long as there are enough seat belts",
          "One passenger under 21",
          "No passengers under 21, unless a parent or another licensed adult is in the car; siblings and medical emergencies excepted",
          "Only family members",
        ],
        correctIndex: 2,
        explanation:
          "For the first six months a licensed minor may not carry any passenger under 21 unless a parent or another licensed adult driver is aboard. After six months one under-21 passenger is allowed, and after a year as many as there are seat belts.",
        context:
          "The handbook lists siblings and medical emergencies as exceptions throughout. It pairs the passenger ladder with a curfew: no driving between midnight and 5 a.m. in the first year unless with an instructor, parent or guardian, with exceptions for school and work (with a signed statement), medical emergencies and emancipated minors. Both restrictions end at 18.",
        trap:
          "The six-month clock runs from the license date, not the permit date. Time on the permit does not count toward it.",
        excerptKey: "passengers-first-6-months",
        sourceLabel: "Colorado Driver Handbook - Minor Drivers",
        sourceUrl: hb(2),
        commonlyMissed: true,
      },
      {
        id: "co_s2_18",
        topic: "emergencies",
        question: "You approach a stationary vehicle on a two-lane highway with its hazard lights flashing. What does Colorado's Move Over law require?",
        choices: [
          "Nothing; the law applies only to police and fire vehicles",
          "Stop until the vehicle is cleared",
          "Slow to 25 mph regardless of the posted limit",
          "Move over one lane if you safely can; if you cannot, slow to at least 20 mph below the posted limit",
        ],
        correctIndex: 3,
        explanation:
          "Any stationary vehicle showing hazard lights triggers the law. Change lanes away from it if it is safe; where it is not, or the road has one lane each way, slow to at least 20 mph under the limit.",
        context:
          "Colorado widened the law to protect tow operators, utility crews, maintenance workers and ordinary motorists, not just emergency responders. For an emergency vehicle stopped with its lights on, the right-of-way chapter gives the speeds as 25 mph where the limit is 45 or less and 20 under the limit where it is higher. Snowplows and maintenance vehicles with flashing yellow and blue lights get the same care.",
        trap:
          "The law is not limited to police cars. A broken-down sedan with its flashers on counts.",
        excerptKey: "move-over-law",
        sourceLabel: "Colorado Driver Handbook - Crash Tips",
        sourceUrl: hb(27),
        commonlyMissed: true,
      },
      {
        id: "co_s2_19",
        topic: "rules",
        question: "Your turn signals have failed. How do you show a left turn?",
        choices: [
          "Left arm straight out the window",
          "Left arm bent upward at the elbow",
          "Left arm bent downward at the elbow",
          "Flash the headlights twice",
        ],
        correctIndex: 0,
        explanation:
          "Hand signals are mandatory when the signal lights do not work. Left arm straight out means left turn, left arm up means right turn, left arm down means slowing or stopping.",
        context:
          "The handbook gives the same signals for bicyclists, with the addition that a rider may show a right turn with the right arm straight out. It adds a step drivers forget: end the hand signal before you start the turn so both hands are on the wheel for the maneuver.",
        trap:
          "Arm up is a right turn, not left. Picture the raised arm pointing over the roof to the right.",
        excerptKey: "bike-hand-signals",
        sourceLabel: "Colorado Driver Handbook - Bicyclists",
        sourceUrl: hb(23),
      },
      {
        id: "co_s2_20",
        topic: "impairment",
        question: "If you refuse a chemical test in Colorado, what happens to your license?",
        choices: [
          "Nothing, if you are later found not guilty",
          "A 30-day suspension",
          "Revocation for one year, plus two years of ignition interlock",
          "A fine only",
        ],
        correctIndex: 2,
        explanation:
          "Refusal costs one year of license and two years of interlock, regardless of how the criminal case ends. Any other suspension from the same incident is added on after.",
        context:
          "The handbook lists refusing a test among the ways to lose your license, alongside a DUI conviction, leaving a crash scene, driving without proof of insurance, unpaid child support and a conviction for buying alcohol under 21. Colorado also bars plea bargaining out of an alcohol or drug driving charge.",
        trap:
          "Refusing does not make the evidence go away. It adds a separate, automatic revocation to whatever else follows.",
        excerptKey: "refusal-penalty",
        sourceLabel: "Colorado Driver Handbook - Driving Under the Influence",
        sourceUrl: hb(5),
      },
      {
        id: "co_s2_21",
        topic: "rightOfWay",
        question: "You are backing out of a driveway onto a street. Who has the right-of-way?",
        choices: [
          "Every vehicle close enough to be a hazard; you yield to all of them",
          "You, once your bumper is in the road",
          "Vehicles on your right only",
          "Vehicles on your left only",
        ],
        correctIndex: 0,
        explanation:
          "A reversing driver yields to everything close enough to be a hazard. The handbook also wants you to walk around the car before you get in, because children and small objects are invisible from the seat.",
        context:
          "Backing technique in the handbook: foot on the brake, shift to reverse, left hand at 12 o'clock, right arm over the passenger seat, look through the rear window, and keep looking back until you have stopped. Mirrors and cameras add information but do not replace the shoulder look. Check for cyclists on the sidewalk as you cross it.",
        trap:
          "Being partly in the road does not earn priority. The reversing vehicle yields until it is fully in the lane and moving with traffic.",
        excerptKey: "reversing-yield",
        sourceLabel: "Colorado Driver Handbook - Right-of-Way",
        sourceUrl: hb(11),
      },
      {
        id: "co_s2_22",
        topic: "sharing",
        question: "A crossbuck sign (the white X reading RAILROAD CROSSING) has no lights or gates. How do you treat it?",
        choices: [
          "As a stop sign; every vehicle must stop",
          "As a yield sign; slow, look, and stop only if a train is coming",
          "As a warning only; no action is required",
          "As a speed limit of 15 mph",
        ],
        correctIndex: 1,
        explanation:
          "A crossbuck works like a yield sign. Slow down, look both ways, and stop before the crossing if a train is approaching. Only buses and hazmat trucks must stop at every crossing.",
        context:
          "The railroad chapter: never stop on the tracks, never start across without room to clear the far side, do not shift gears on the tracks, and if you stall, get everyone out and away and call the number on the blue ENS sign. Stay behind the painted stop line, or at least 10 feet from the rails if there is none, because trains overhang the track by three feet. When gates are down the road is closed, even after a train has passed.",
        trap:
          "Only certain commercial vehicles stop at every crossing. For a car, the crossbuck is a yield, not a stop.",
        excerptKey: "crossbuck-yield",
        sourceLabel: "Colorado Driver Handbook - Railroad Crossing",
        sourceUrl: hb(21),
      },
      {
        id: "co_s2_23",
        topic: "safety",
        question: "What does Colorado law say about using a hand-held phone while driving?",
        choices: [
          "It is allowed for calls but not for texting",
          "It is allowed at red lights",
          "It is prohibited only for drivers under 18",
          "It is prohibited unless you are contacting emergency services, it is an emergency, or you use a hands-free accessory",
        ],
        correctIndex: 3,
        explanation:
          "Since January 2025 the hands-free rule applies to every driver. The exceptions are reporting to law enforcement or the fire department, a genuine emergency, and hands-free use.",
        context:
          "The handbook states the law in the safe driving chapter and again under distracted driving, where it adds that careless driving caused by texting or any manual use of a device can be charged as a misdemeanor. The statute sets a $75 fine plus surcharge for a first offense, rising on repeat offenses within two years, and lets a first charge be dismissed for a driver who then buys a hands-free accessory.",
        trap:
          "The old rule banned only texting for adults and all use for minors. That is the version the test no longer follows.",
        excerptKey: "cell-phone-hands-free",
        sourceLabel: "Colorado Driver Handbook - Safe Driving Tips",
        sourceUrl: hb(18),
        commonlyMissed: true,
      },
      {
        id: "co_s2_24",
        topic: "speed",
        question: "You are on an open mountain highway with no speed limit posted. What is the default?",
        choices: ["25 mph", "30 mph", "40 mph", "55 mph"],
        correctIndex: 2,
        explanation:
          "Forty mph is the open mountain highway default. Narrow, winding mountain roads and blind curves drop to 20 mph unless posted otherwise.",
        context:
          "Both mountain figures come straight from the statute and the handbook prints them in its list: 20 narrow and winding or blind curves, 25 business district, 30 residence district, 40 open mountain highway, 55 urban interstate and highways, 65 to 75 designated rural interstates, and a hard ceiling of 75 mph anywhere in the state. Mountain driving also calls for lower gears on long descents and extra care for wildlife.",
        trap:
          "Twenty is for narrow, winding stretches and blind curves. An open mountain highway is twice that.",
        excerptKey: "speed-defaults-low",
        sourceLabel: "Colorado Driver Handbook - Speed",
        sourceUrl: hb(12),
      },
      {
        id: "co_s2_25",
        topic: "parking",
        question: "You parallel park on a street where it is permitted. How close to the curb must your vehicle be?",
        choices: [
          "Within 12 inches",
          "Within 6 inches",
          "Within 18 inches",
          "Within 24 inches",
        ],
        correctIndex: 0,
        explanation:
          "Twelve inches from the curb, or as close as possible to the outer edge of the shoulder where there is no curb, so that traffic is not blocked or slowed.",
        context:
          "The handbook's parallel parking method: stop level with the car ahead, turn sharply right and back slowly, straighten when clear of the car ahead, turn sharply left, then sharply right to center in the space. Leaving the space is a lane change: signal, mirrors, blind spot, then go.",
        trap:
          "Eighteen inches is the figure in several other states. Colorado's is 12.",
        excerptKey: "parallel-12-inches",
        sourceLabel: "Colorado Driver Handbook - Parking",
        sourceUrl: hb(14),
      },
      {
        id: "co_s2_26",
        topic: "signals",
        question: "A traffic signal is completely dark because of a power failure. How do you treat the intersection?",
        choices: [
          "As if you had a green light",
          "As a yield for the smaller street only",
          "Wait for a police officer before proceeding",
          "As a four-way stop",
        ],
        correctIndex: 3,
        explanation:
          "A dark or malfunctioning signal becomes a four-way stop: stop, then go in order of arrival, with the right-hand rule breaking ties.",
        context:
          "The statute says the same thing in more words - a signal that is inoperative or stuck on red or yellow through several cycles is treated as a stop sign until an officer takes over or the signal recovers. Directions from a police officer, highway worker or school crossing guard always override the signal.",
        trap:
          "The busier road does not get priority when the lights are out. Everyone stops.",
        excerptKey: "signal-malfunction-four-way",
        sourceLabel: "Colorado Driver Handbook - Traffic Signals",
        sourceUrl: hb(7),
      },
      {
        id: "co_s2_27",
        topic: "emergencies",
        question: "Your brakes fail on a hill. What is the handbook's first move?",
        choices: [
          "Turn off the engine",
          "Pump the brake pedal several times to build pressure",
          "Pull the parking brake as hard as you can",
          "Steer into a guardrail",
        ],
        correctIndex: 1,
        explanation:
          "Foot off the gas and pump the pedal; that often restores enough pressure to stop. If not, apply the parking brake slowly so the rear wheels do not lock, then shift down and find a safe place to stop.",
        context:
          "The vehicle emergency list continues: a tire blowout means grip the wheel, keep straight, ease off the gas and brake lightly; a power failure means the steering and brakes still work but need force; a stuck accelerator means shift to neutral, pull off and turn off the engine; a headlight failure means try the switch, then use flashers, turn signals or fog lights to be seen.",
        trap:
          "Yanking the parking brake locks the rear wheels and starts a skid. It is the second step, applied slowly.",
        excerptKey: "brake-failure",
        sourceLabel: "Colorado Driver Handbook - Vehicle Emergencies",
        sourceUrl: hb(26),
      },
      {
        id: "co_s2_28",
        topic: "rules",
        question: "You want to turn left into a driveway across a solid yellow center line. Is it legal?",
        choices: [
          "Yes; you may cross a solid yellow line to turn left into an alley, private road or driveway when it is safe",
          "No; a solid yellow line may never be crossed",
          "Only if the line is a single solid yellow, not a double",
          "Only between sunrise and sunset",
        ],
        correctIndex: 0,
        explanation:
          "A solid yellow line bars passing, not turning. Turning left into an alley, private road or driveway across it is allowed when the movement can be made safely.",
        context:
          "The second exception in the same handbook sentence is passing a bicyclist with at least three feet of clearance when the oncoming lane is clear. Both exceptions apply to the double solid yellow as well. What the line always forbids is using the oncoming lane to overtake a vehicle.",
        trap:
          "\"Never cross a solid yellow\" is the over-simplification the test punishes. It is a no-passing line, and driveway turns are not passing.",
        excerptKey: "cross-solid-yellow-driveway",
        sourceLabel: "Colorado Driver Handbook - Pavement Markings",
        sourceUrl: hb(9),
      },
      {
        id: "co_s2_29",
        topic: "licensing",
        question: "Which of these is listed in the handbook as a way to lose your Colorado license?",
        choices: [
          "Receiving a single parking ticket",
          "Driving with an out-of-state passenger",
          "Missing a vehicle emissions test",
          "Failing to show valid proof of insurance when an officer asks for it",
        ],
        correctIndex: 3,
        explanation:
          "Drivers must carry proof of insurance whenever they drive, and failing to produce it when an officer asks is on the handbook's list of ways to lose the license.",
        context:
          "The full list includes reaching the point total for suspension, a DUI or DWAI conviction, refusing a chemical test, leaving a crash scene or failing to report a crash, lying on the application, lending your license, skipping a DMV re-examination, vehicular homicide, unpaid child support and an under-21 alcohol purchase or possession conviction. After a crash, proof of insurance goes to the officer at the scene or the station.",
        trap:
          "It is not only crashes that expose you. A routine stop with no insurance card is enough.",
        excerptKey: "lose-license-insurance",
        sourceLabel: "Colorado Driver Handbook - How You Can Lose Your License",
        sourceUrl: hb(3),
      },
      {
        id: "co_s2_30",
        topic: "sharing",
        question: "A truck ahead of you has its left signal on as it approaches a right turn. What is most likely happening?",
        choices: [
          "The driver has left the signal on by mistake",
          "The truck is swinging left to make a wide right turn; do not squeeze between it and the curb",
          "The truck is pulling over to let you pass on the right",
          "The truck is about to make a U-turn",
        ],
        correctIndex: 1,
        explanation:
          "Big vehicles often swing left to make a right turn. The gap that opens by the curb is a trap: the trailer will sweep back through it. Stay behind and wait.",
        context:
          "The handbook's truck chapter is about No Zones - the blind spots beside, behind and in front of a truck where cars vanish. Its rules: do not tailgate, do not linger beside, do not cut in until both headlights show in your mirror, and stay behind the painted stop bar at intersections because it is placed to give turning trucks room.",
        trap:
          "Passing on the right of a truck signaling left is exactly the collision the handbook describes. The space by the curb is not yours.",
        excerptKey: "truck-wide-turns",
        sourceLabel: "Colorado Driver Handbook - Sharing the Road",
        sourceUrl: hb(20),
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Real Test Difficulty",
    difficulty: "medium",
    description:
      "Questions at the level of the actual DMV test: the exact distances and speeds, the arrow signals, the impaired-driving numbers, the child restraint ages and the mountain, snow and railroad rules that are particular to Colorado.",
    questions: [
      {
        id: "co_s3_01",
        topic: "speed",
        question: "What is the highest speed limit that may lawfully be posted anywhere in Colorado?",
        choices: ["65 mph", "70 mph", "75 mph", "80 mph"],
        correctIndex: 2,
        explanation:
          "Seventy-five is the statewide ceiling. The statute forbids any authority from posting higher and makes driving above 75 an absolute offense, with no argument about conditions.",
        context:
          "The handbook's list ends with 65 to 75 mph on designated rural interstates and highways. Below the ceiling, Colorado's other limits are prima facie: going faster is presumed unreasonable, but the basic rule is always reasonable and prudent for the conditions, and you must slow for hazards, weather and pedestrians whatever the sign says.",
        trap:
          "Some western states post 80. Colorado stops at 75, and no county or city may go above it.",
        excerptKey: "crs-speed-75-maximum",
        sourceLabel: "C.R.S. 42-4-1101 - Speed limits",
        sourceUrl: CRS(536),
      },
      {
        id: "co_s3_02",
        topic: "signs",
        question: "You reach a stop sign where there is no stop line and no crosswalk. Where do you stop?",
        choices: [
          "Level with the sign post",
          "Anywhere within 30 feet of the intersection",
          "In the intersection, far enough to see both ways",
          "At the point nearest the cross street where you can see approaching traffic",
        ],
        correctIndex: 3,
        explanation:
          "The handbook's order is stop line, then crosswalk, then the point nearest the intersecting road where you have a view of approaching traffic. Without line or crosswalk, the view decides.",
        context:
          "A stop sign requires a complete stop - no forward motion - and the drive test scores you on not creeping over the line or into the crosswalk, and on keeping the wheels straight while stopped. The statute for railroad crossings uses similar logic: stop at the line, or 15 to 50 feet from the rail, or where you can see the tracks.",
        trap:
          "Stopping beside the sign itself often leaves you blind to cross traffic. The rule is about the view, not the post.",
        excerptKey: "stop-sign-where",
        sourceLabel: "Colorado Driver Handbook - Traffic Signs",
        sourceUrl: hb(7),
      },
      {
        id: "co_s3_03",
        topic: "signals",
        question: "A lighted yellow arrow appears for your turn. What does it tell you?",
        choices: [
          "A red arrow is about to appear; stop unless you are already in the intersection",
          "You may turn with caution after yielding",
          "The turn is now protected",
          "Pedestrians have the walk signal",
        ],
        correctIndex: 0,
        explanation:
          "A steady yellow arrow is the arrow version of a steady yellow light: the red arrow is coming, so stop unless you are already inside the intersection.",
        context:
          "Do not confuse it with the FLASHING yellow arrow, which means you may turn after yielding to oncoming traffic and pedestrians. The handbook describes the flashing arrow's cycle: flashing yellow, then solid yellow telling you the red is coming and not to enter if you can stop safely, then red meaning stop.",
        trap:
          "Steady yellow arrow and flashing yellow arrow are different signals. Steady means stop is coming; flashing means turn with care.",
        excerptKey: "yellow-arrow",
        sourceLabel: "Colorado Driver Handbook - Traffic Signals",
        sourceUrl: hb(7),
      },
      {
        id: "co_s3_04",
        topic: "rules",
        question: "You are on a four-lane highway posted at 55 mph. How far ahead of a lane change must you signal?",
        choices: ["100 feet", "150 feet", "200 feet", "300 feet"],
        correctIndex: 2,
        explanation:
          "On four-lane highways where the limit is above 40 mph, the signal distance is 200 feet. The 100-foot rule is for urban streets.",
        context:
          "C.R.S. 42-4-903 sets the two distances and the handbook prints both. The freeway chapter repeats 200 feet for lane changes and for the deceleration lane before an exit, and the lane change chapter gives the practical version: at least three seconds or 200 feet with the signal on before you move.",
        trap:
          "The 100-foot rule is the one people remember, and it is the wrong one on a fast four-lane road.",
        excerptKey: "crs-signal-distance",
        sourceLabel: "C.R.S. 42-4-903 - Turning movements and required signals",
        sourceUrl: CRS(523),
        commonlyMissed: true,
      },
      {
        id: "co_s3_05",
        topic: "emergencies",
        question: "A police car is stopped on the shoulder with its lights flashing on a road posted at 35 mph. You cannot change lanes. How slow should you go?",
        choices: ["35 mph", "25 mph", "15 mph", "Come to a complete stop"],
        correctIndex: 1,
        explanation:
          "Where the posted limit is 45 or less, slow to 25 mph. Above 45, slow to 20 under the limit. Changing lanes away from the vehicle comes first whenever it is safe.",
        context:
          "The handbook's emergency-vehicle rule is to leave a lane between you and a stopped emergency vehicle if possible; the reduced speeds apply when you cannot. The statute treats those speeds as presumed safe. The same duty of care extends to stopped tow trucks, utility vehicles and any vehicle with hazard lights under the Move Over law.",
        trap:
          "Twenty under would give 15, but that formula only applies where the limit is above 45. Below that, the flat figure is 25.",
        excerptKey: "emergency-stopped-slow-down",
        sourceLabel: "Colorado Driver Handbook - Right-of-Way",
        sourceUrl: hb(11),
        commonlyMissed: true,
      },
      {
        id: "co_s3_06",
        topic: "sharing",
        question: "Three snowplows are clearing a highway in a staggered diagonal line with their lights flashing. May you pass them?",
        choices: [
          "Yes, one at a time on the left",
          "Yes, on the right, where the lane is already cleared",
          "No; passing plows working in a staggered formation is illegal",
          "Only if they are traveling under 20 mph",
        ],
        correctIndex: 2,
        explanation:
          "Passing an authorized snowplow working in a staggered, tandem formation is illegal in Colorado. The plows throw up clouds of snow that can hide the plow you are trying to pass.",
        context:
          "The rule appears twice in the handbook, once under right-of-way and once under snow and ice. Plows and sanding trucks use flashing yellow and blue lights as a warning to use extreme caution when approaching or passing them, and maintenance vehicles with those lights have the right-of-way when working.",
        trap:
          "A gap in the line of plows is not a passing lane. It is the part of the road that has not been cleared.",
        excerptKey: "snow-plow-formation",
        sourceLabel: "Colorado Driver Handbook - Right-of-Way",
        sourceUrl: hb(11),
      },
      {
        id: "co_s3_07",
        topic: "rightOfWay",
        question: "A transit bus at a stop has its yield sign lit on the back and is signaling to pull out. What must you do?",
        choices: [
          "Pass it quickly before it moves",
          "Stop 20 feet behind it as for a school bus",
          "Sound your horn to warn the driver",
          "Yield and let it enter the traffic lane",
        ],
        correctIndex: 3,
        explanation:
          "A transit bus signaling with its rear yield sign lit has the right-of-way to re-enter traffic, and you let it in. The bus chapter adds that buses have the right-of-way when leaving a drop-off point.",
        context:
          "Transit buses are not school buses: there is no 20-foot stop and no red-light rule. What you owe them is the merge. The handbook also warns that buses stop often, that people load bikes on the front and walk in front of the bus, and that a stopped bus may move into your lane without much notice.",
        trap:
          "The 20-foot stop belongs to school buses with red lights. A city bus gets a yield, not a stop.",
        excerptKey: "transit-bus-yield",
        sourceLabel: "Colorado Driver Handbook - Right-of-Way",
        sourceUrl: hb(11),
      },
      {
        id: "co_s3_08",
        topic: "rules",
        question: "A train is passing and there is no painted stop line at the crossing. How far from the tracks must you wait?",
        choices: [
          "At least 10 feet",
          "At least 5 feet",
          "At least 20 feet",
          "At least 50 feet",
        ],
        correctIndex: 0,
        explanation:
          "Ten feet from the tracks when there is no stop line, because a train overhangs the rails by about three feet. Behind the painted line if there is one.",
        context:
          "The statute's stopping band for a required stop is 15 to 50 feet from the nearest rail, and the parking law forbids parking within 50 feet of a crossing. The handbook's other crossing facts: the advance warning sign is the only round sign, gates down means the road is closed, and a freight train at 55 mph needs about a mile to stop.",
        trap:
          "Fifty feet is the no-parking distance. The waiting distance at the crossing is 10.",
        excerptKey: "railroad-10-feet",
        sourceLabel: "Colorado Driver Handbook - Railroad Crossing",
        sourceUrl: hb(21),
      },
      {
        id: "co_s3_09",
        topic: "signs",
        question: "Which is the only round traffic sign you will meet on a Colorado road?",
        choices: [
          "A speed limit sign",
          "A no-passing zone sign",
          "A yield sign",
          "A railroad advance warning sign",
        ],
        correctIndex: 3,
        explanation:
          "The yellow railroad advance warning sign is the one round sign. It sits far enough ahead of the crossing for you to stop if you need to.",
        context:
          "Colorado's railroad signs come as a set: the round yellow advance warning, the RXR pavement marking with a stop line, the crossbuck at the tracks (treated as a yield), a plate under the crossbuck giving the number of tracks, a No Train Horn sign in quiet zones, and the blue ENS sign with the emergency phone number and the crossing's DOT number.",
        trap:
          "Speed limit signs are rectangles and yields are triangles. Round is reserved for the railroad warning.",
        excerptKey: "railroad-round-sign",
        sourceLabel: "Colorado Driver Handbook - Railroad Crossing",
        sourceUrl: hb(21),
      },
      {
        id: "co_s3_10",
        topic: "sharing",
        question: "Traffic is stopped at a light. A motorcyclist rides between the stopped lanes at about 10 mph to reach the front. Is that legal in Colorado?",
        choices: [
          "No; lane splitting is always illegal",
          "Yes, if the vehicles in and beside the lane are stopped and the motorcycle passes at 15 mph or less with room to do so safely",
          "Yes, at any speed as long as traffic is slow",
          "Only on freeways",
        ],
        correctIndex: 1,
        explanation:
          "Colorado allows lane filtering under three conditions: the vehicles being passed are stopped, the vehicles in the adjacent lanes are stopped, and the motorcycle can pass safely at no more than 15 mph.",
        context:
          "This is a newer rule and the handbook states it twice, under sharing the road and under motorcycles. It applies to two-wheeled motorcycles only. For drivers, the practical lesson is to expect a motorcycle to appear beside you at a red light and to check mirrors and blind spots before moving off or changing lanes.",
        trap:
          "Filtering is not splitting through moving traffic. If the cars are rolling, the motorcycle may not pass in the same lane.",
        excerptKey: "lane-filtering-15-mph",
        sourceLabel: "Colorado Driver Handbook - Sharing the Road",
        sourceUrl: hb(19),
        commonlyMissed: true,
      },
      {
        id: "co_s3_11",
        topic: "impairment",
        question: "At what blood THC level does Colorado law allow the inference that a driver was under the influence?",
        choices: [
          "1 nanogram per milliliter",
          "2 nanograms per milliliter",
          "5 nanograms per milliliter",
          "There is no numeric level for marijuana",
        ],
        correctIndex: 2,
        explanation:
          "Five nanograms of THC per milliliter of blood allows a permissible inference of DUI. There is no equivalent number for DWAI, and most marijuana cases are proven on observed impairment.",
        context:
          "The handbook stresses that THC levels do not track impairment the way alcohol does, that medical use is no defense, and that mixing marijuana with alcohol or medication - polydrug impairment - is both more common and more dangerous than any single drug except alcohol. An open container of marijuana in the passenger area is illegal, the same as open alcohol.",
        trap:
          "\"No numeric level\" is true for DWAI but not for DUI. The test wants the 5 ng figure.",
        excerptKey: "thc-5ng",
        sourceLabel: "Colorado Driver Handbook - Driving Under the Influence",
        sourceUrl: hb(5),
      },
      {
        id: "co_s3_12",
        topic: "licensing",
        question: "How must a child under 2 who weighs less than 40 pounds ride in Colorado?",
        choices: [
          "In a forward-facing seat in the back",
          "In a booster seat",
          "In a rear-facing child restraint in the rear seat",
          "In any child seat, front or back",
        ],
        correctIndex: 2,
        explanation:
          "Under 2 and under 40 pounds means rear-facing, and in the back seat. A child under 2 who weighs 40 pounds or more may ride rear- or forward-facing.",
        context:
          "The handbook's ladder, updated for the 2025 law: under 2 and under 40 lb, rear-facing in the rear; 2 to 4 and at least 20 lb, rear- or forward-facing in the rear seat if there is one; 4 to 9 and at least 40 lb, a child seat or booster in the rear if available; 9 to 18, a seat belt or restraint used as the manufacturer directs. If no parent is in the car, the driver is responsible for every child's restraint.",
        trap:
          "Age one is the old threshold from the pre-2025 law. The current rule keeps children rear-facing until 2 unless they reach 40 pounds.",
        excerptKey: "child-under-2-rear-facing",
        sourceLabel: "Colorado Driver Handbook - Seat Belt Laws",
        sourceUrl: hb(3),
        commonlyMissed: true,
      },
      {
        id: "co_s3_13",
        topic: "safety",
        question: "You have anti-lock brakes and need to stop as fast as possible. What does the handbook say to do?",
        choices: [
          "Press hard and hold; do not let up when the pedal pushes back",
          "Pump the pedal rapidly",
          "Brake gently to avoid triggering the ABS",
          "Shift to neutral first, then brake",
        ],
        correctIndex: 0,
        explanation:
          "With ABS you apply hard, firm pressure and keep it there. The pulsing you feel is the system working; lifting off disables it.",
        context:
          "Without ABS the advice is the opposite: brake as hard as you can without locking, and if the wheels lock, ease off slightly until they roll, then press again. ABS also lets you steer while braking hard, which the handbook says is usually the quicker way out of a collision, since you can turn a vehicle faster than you can stop it.",
        trap:
          "Pumping is the non-ABS technique. With ABS, pumping defeats the system.",
        excerptKey: "abs-hard-pressure",
        sourceLabel: "Colorado Driver Handbook - Emergencies",
        sourceUrl: hb(25),
      },
      {
        id: "co_s3_14",
        topic: "rightOfWay",
        question: "You are driving in a bike lane's path as you approach a right turn. A cyclist is coming up the bike lane behind you. Who yields?",
        choices: [
          "The cyclist, because you signaled first",
          "Nobody; bike lanes end at intersections",
          "The cyclist, because vehicles have priority over bicycles",
          "You; drivers yield to cyclists in a bike lane when merging with or crossing it to turn",
        ],
        correctIndex: 3,
        explanation:
          "A driver merging with or crossing a bike lane to turn yields to bicyclists in it. And the lane does not end at the intersection - it continues through, painted or not.",
        context:
          "The handbook's bicycle rules: bikes are vehicles with the same rights; you may not drive, idle or park in a bike lane; you may cross it to turn or enter a driveway; make right turns from close to the curb, and from the conflict zone (the broken-line section) where one is marked, so a cyclist cannot come up your right side. Before turning right, slow, yield and let the cyclist clear the intersection.",
        trap:
          "Signaling does not transfer the right-of-way. The cyclist in the lane keeps it until you have yielded.",
        excerptKey: "row-bike-lane-turn",
        sourceLabel: "Colorado Driver Handbook - Right-of-Way",
        sourceUrl: hb(11),
      },
      {
        id: "co_s3_15",
        topic: "rules",
        question: "A 16-year-old bicyclist reaches a stop sign at an empty intersection. Under Colorado law, what may the cyclist do?",
        choices: [
          "Ride through without slowing; stop signs do not apply to bicycles",
          "Treat the stop sign as a yield sign, when the intersection is clear and the cyclist has the right-of-way",
          "Nothing different; bicycles must stop exactly as cars do",
          "Ride on the sidewalk to avoid the sign",
        ],
        correctIndex: 1,
        explanation:
          "Since a 2022 law, bicyclists 15 and older may treat a stop sign as a yield and a red light as a stop sign, provided the intersection is clear and they already have the right-of-way.",
        context:
          "The handbook includes this in its list of laws about motorists and bicyclists so drivers are not surprised when a cyclist rolls a stop. The rest of the list: three feet to pass, crossing the double yellow to do it, riding two abreast when it does not impede traffic, riding in the center of a narrow lane, and riding on either side of a multi-lane one-way street.",
        trap:
          "It is not a free pass. The cyclist still yields to anyone who has the right-of-way, and the age floor is 15.",
        excerptKey: "bike-stop-as-yield",
        sourceLabel: "Colorado Driver Handbook - Bicyclists",
        sourceUrl: hb(23),
      },
      {
        id: "co_s3_16",
        topic: "parking",
        question: "Which of these is a place the handbook says you may NOT park?",
        choices: [
          "Within 50 feet of a school",
          "Within 100 feet of a bus stop",
          "On any street after dark",
          "On a bridge or in a tunnel",
        ],
        correctIndex: 3,
        explanation:
          "Bridges, elevated structures and tunnels are on the list, along with crosswalks, sidewalks, railroad tracks, intersections, controlled-access highways, ramps, runaway truck ramps, driveways and bike lanes.",
        context:
          "The distances on the same list are 30 feet from a traffic signal, stop sign or railroad crossing and 15 feet from a hydrant. The statute adds 20 feet from a crosswalk at an intersection, 5 feet from a driveway and 50 feet from the nearest rail. Parked at night, a vehicle at the roadside must show its parking lights.",
        trap:
          "Bus stops and schools are governed by posted signs, not the handbook's blanket list. Bridges and tunnels are always out.",
        excerptKey: "no-parking-places",
        sourceLabel: "Colorado Driver Handbook - Parking",
        sourceUrl: hb(13),
      },
      {
        id: "co_s3_17",
        topic: "emergencies",
        question: "Bad weather has put the area under Accident Alert. You have a minor crash: no injuries, no alcohol, both cars drivable. What do you do?",
        choices: [
          "Exchange information and file a report with law enforcement within 24 hours",
          "Wait at the scene for an officer, however long it takes",
          "Leave; no report is required under Accident Alert",
          "Call 911 and refuse to move the vehicles",
        ],
        correctIndex: 0,
        explanation:
          "Under Accident Alert, officers are not responding to minor crashes. You exchange names, addresses, phone numbers, registration and insurance, and file a report with law enforcement within 24 hours.",
        context:
          "The handbook's general crash duties: stop immediately and never leave, check for injuries and give reasonable help, call law enforcement, and exchange information. The Move It law separately requires drivers in a minor crash on a divided highway to get drivable vehicles off the road when nobody is hurt and no alcohol is involved, and promises no penalty for doing so.",
        trap:
          "\"No injuries\" does not mean \"no report\". The report is still due, within a day.",
        excerptKey: "accident-alert-24-hours",
        sourceLabel: "Colorado Driver Handbook - Crash Tips",
        sourceUrl: hb(26),
      },
      {
        id: "co_s3_18",
        topic: "impairment",
        question: "What does a first DUI conviction in Colorado do to your license?",
        choices: [
          "A 3-month suspension",
          "A 9-month revocation",
          "A 1-year revocation",
          "Points only; the license stays valid",
        ],
        correctIndex: 1,
        explanation:
          "A first DUI brings a nine-month revocation, a $600 to $1,000 fine, 5 to 365 days in jail and 48 to 96 hours of public service. A second DUI or DWAI is a one-year revocation; a third is two years.",
        context:
          "The handbook's Table 1 sets out the ladder for drivers 21 and over. A first DWAI is lighter: 8 points toward suspension, $200 to $500, 2 to 180 days and 24 to 48 hours of service. Drivers under 21 face revocation on a first DUI or DWAI if they fail a court-ordered program, and mandatory revocation on a second.",
        trap:
          "Nine months is the DUI figure. The one-year revocation is for a second offense, or for refusing the test.",
        excerptKey: "dui-first-penalty",
        sourceLabel: "Colorado Driver Handbook - Driving Under the Influence",
        sourceUrl: hb(4),
      },
      {
        id: "co_s3_19",
        topic: "safety",
        question: "You are following another vehicle at night. Within what distance must you switch to low beams?",
        choices: ["500 feet", "300 feet", "200 feet", "100 feet"],
        correctIndex: 2,
        explanation:
          "Two hundred feet behind another vehicle means low beams, with fog lights off. Oncoming traffic gets dimmed lights at 500 feet.",
        context:
          "Both distances are in the night driving tips, and both include fog lights in the glare rule. The chapter also warns about dawn and dusk, tells you to use high beams on open rural roads, and reminds you to watch for the single headlight of a motorcycle or bicycle.",
        trap:
          "Five hundred is oncoming. Following is the shorter distance, because you are behind the other driver's mirrors, not their windshield.",
        excerptKey: "dim-following-200-feet",
        sourceLabel: "Colorado Driver Handbook - Night Driving",
        sourceUrl: hb(16),
        commonlyMissed: true,
      },
      {
        id: "co_s3_20",
        topic: "sharing",
        question: "A school bus ahead switches on flashing yellow lights. What are they telling you?",
        choices: [
          "The bus is about to stop to load or unload children; slow down and prepare to stop",
          "The bus is turning",
          "You may pass the bus now, before the red lights come on",
          "The bus has a mechanical problem",
        ],
        correctIndex: 0,
        explanation:
          "Amber lights come on as the bus prepares to stop, and they stay on until the door opens. When the door opens, the red lights and stop arm come out and traffic stops.",
        context:
          "The statute requires the yellow lights at least 200 feet before the stop. Once the reds are on you stop at least 20 feet from the bus and remain stopped until the driver retracts the arm and turns off the lights, then proceed with caution watching for children. Passing a school bus with its red lights and stop arm out is listed among illegal passing behaviors.",
        trap:
          "Yellow is not a window to pass. It is the warning that the reds are seconds away.",
        excerptKey: "school-bus-yellow-lights",
        sourceLabel: "Colorado Driver Handbook - Sharing the Road",
        sourceUrl: hb(20),
      },
      {
        id: "co_s3_21",
        topic: "rightOfWay",
        question: "On a steep, narrow mountain road too narrow for two vehicles, you are heading downhill and meet a car coming up. Who yields?",
        choices: [
          "The uphill driver, by pulling onto the shoulder",
          "You, the downhill driver, by backing up to a wider spot or stopping to leave room",
          "Whoever is closer to a turnout",
          "The smaller vehicle",
        ],
        correctIndex: 1,
        explanation:
          "The downhill vehicle yields - backing up to a wider place if necessary - because a vehicle going uphill has the right-of-way. The only exception is where it is clearly easier for the uphill driver to return to a turnout.",
        context:
          "This rule appears under right-of-way and again in the mountain driving chapter, where the handbook adds: shift to lower gears on steep descents, watch for rocks, wildlife and cyclists, and if your vehicle struggles uphill, pull off at the first safe spot or stay right so others can pass. Passing on a hill crest or blind curve is illegal.",
        trap:
          "Backing uphill is harder, which is exactly why the downhill driver does the reversing. The uphill car keeps its momentum.",
        excerptKey: "mountain-road-downhill-yields",
        sourceLabel: "Colorado Driver Handbook - Right-of-Way",
        sourceUrl: hb(11),
        commonlyMissed: true,
      },
      {
        id: "co_s3_22",
        topic: "signals",
        question: "A flashing yellow arrow is lit for your left turn. What may you do?",
        choices: [
          "Turn left with caution after yielding to oncoming traffic and pedestrians",
          "Turn left without yielding; the arrow protects you",
          "Stop and wait for a green arrow",
          "Turn left only if no pedestrians are present",
        ],
        correctIndex: 0,
        explanation:
          "A flashing yellow arrow is a permitted, unprotected turn. Yield to oncoming traffic and pedestrians, take the time to check for a clear path, then turn.",
        context:
          "The handbook describes the full cycle so you are not caught out: after the flashing yellow the signal turns solid yellow, telling you the red is coming and not to enter if you can stop safely, then red, meaning stop. A green arrow, by contrast, is a protected turn with oncoming traffic held.",
        trap:
          "Flashing yellow does not mean protected. Oncoming drivers have a green and are not stopping for you.",
        excerptKey: "flashing-yellow-arrow",
        sourceLabel: "Colorado Driver Handbook - Traffic Signals",
        sourceUrl: hb(7),
      },
      {
        id: "co_s3_23",
        topic: "rules",
        question: "You are on a two-lane road approaching an intersection. How close to it may you still be in the oncoming lane passing another car?",
        choices: [
          "You may not pass within 100 feet of an intersection",
          "You may not pass within 50 feet of an intersection",
          "You may pass through the intersection if it is clear",
          "You may not pass within 200 feet of an intersection",
        ],
        correctIndex: 0,
        explanation:
          "No passing within 100 feet of an intersection or railroad crossing, and within 100 feet of a bridge, viaduct or tunnel when the view is obstructed. The 200-foot figure is for oncoming traffic.",
        context:
          "C.R.S. 42-4-1005 states the same three limits and adds curves and hill crests where the view is obstructed. It also carves out the exceptions: one-way roads, left turns into driveways and alleys, and passing a bicyclist in the same lane when it is safe.",
        trap:
          "An empty intersection is still an intersection. The ban is about where you are, not whether anyone is there.",
        excerptKey: "no-pass-100-feet",
        sourceLabel: "Colorado Driver Handbook - Passing",
        sourceUrl: hb(16),
      },
      {
        id: "co_s3_24",
        topic: "licensing",
        question: "A Colorado teen has held a permit for 12 months and logged 50 hours. What else does the log have to show?",
        choices: [
          "At least 5 hours on freeways",
          "At least 10 hours driven at night",
          "At least 20 hours with a driving instructor",
          "Nothing else; 50 hours is the whole requirement",
        ],
        correctIndex: 1,
        explanation:
          "Ten of the 50 hours must be at night. The log is signed by a parent, guardian or responsible adult and brought to the license appointment.",
        context:
          "Under 16 and a half, the teen also completes 6 hours of behind-the-wheel training with an approved instructor, or 12 extra supervised hours (62 total) if no approved school within 30 miles offers at least 20 hours of training a week. The DMV pages add that the permit must be held 12 months or until the 18th birthday, whichever comes first, and that the log requirement disappears at 18.",
        trap:
          "Fifty hours is the total, not the daytime figure. Ten of them have to be dark.",
        excerptKey: "permit-12-months-50-hours",
        sourceLabel: "Colorado Driver Handbook - Minor Drivers",
        sourceUrl: hb(2),
        commonlyMissed: true,
      },
      {
        id: "co_s3_25",
        topic: "safety",
        question: "You are driving in fog at night. Which lights does the handbook recommend?",
        choices: [
          "High beams, to see farther",
          "Low beams and/or fog lights",
          "Parking lights only, to reduce glare",
          "Hazard flashers",
        ],
        correctIndex: 1,
        explanation:
          "Low beams or fog lights. High beams in fog reflect off the water droplets, which the handbook compares to shining your lights at a mirror.",
        context:
          "Fog is also one of the conditions where the weather chapter's two rules apply: slow down and increase your following distance. Driving on parking lights alone is illegal at any time; they exist for a parked vehicle to be seen from sunset to sunrise.",
        trap:
          "More light is not better in fog. The brighter beam bounces back at you.",
        excerptKey: "fog-low-beams",
        sourceLabel: "Colorado Driver Handbook - Night Driving",
        sourceUrl: hb(16),
      },
      {
        id: "co_s3_26",
        topic: "signs",
        question: "A slow-moving vehicle displays a reflective orange triangle on its rear. What speed is it built for?",
        choices: ["Under 15 mph", "Under 25 mph", "Under 35 mph", "Under 45 mph"],
        correctIndex: 1,
        explanation:
          "The orange triangle marks a vehicle designed for speeds slower than 25 mph - farm equipment, construction machines, horse-drawn wagons. Expect to close on it fast.",
        context:
          "Rural driving is where you meet these: the handbook says rural highways carry the highest fatality rate per mile of any roads in the country, with blind curves, no shoulders, hidden driveways, farm crossings and gravel washboard. Slow down, and pass only where the road and the law allow.",
        trap:
          "Twenty-five is the number, and it is a design speed, not a limit you may pass at.",
        excerptKey: "slow-moving-vehicle",
        sourceLabel: "Colorado Driver Handbook - Traffic Signs",
        sourceUrl: hb(9),
      },
      {
        id: "co_s3_27",
        topic: "impairment",
        question: "A 19-year-old is convicted of possessing alcohol at a party. No car was involved. What does Colorado do to the driving privilege?",
        choices: [
          "Nothing, because no driving was involved",
          "Adds points but keeps the license",
          "Revokes the driving privilege",
          "Requires an ignition interlock",
        ],
        correctIndex: 2,
        explanation:
          "Under-21 purchase or possession of alcohol is a revocation offense even when driving is not a factor. The handbook lists it among the ways to lose your license.",
        context:
          "For under-21 drivers the alcohol rules stack: a 0.02 BAC while driving, a DUI or DWAI conviction with a missed court program, and a simple possession conviction each reach the license. The under-21 DUI rule adds mandatory revocation on a second or third conviction.",
        trap:
          "\"No car, no consequence\" is the assumption the handbook explicitly rejects.",
        excerptKey: "under-21-possession",
        sourceLabel: "Colorado Driver Handbook - Driving Under the Influence",
        sourceUrl: hb(4),
        commonlyMissed: true,
      },
      {
        id: "co_s3_28",
        topic: "rules",
        question: "You are approaching a work zone where the speed limit has been reduced. What does Colorado do to the fine for speeding there?",
        choices: [
          "Nothing; work zone fines are the same as elsewhere",
          "Doubles it",
          "Triples it",
          "Adds mandatory jail time",
        ],
        correctIndex: 1,
        explanation:
          "Fines are doubled in work zones, the same as in school zones. Reduced limits there are enforced, and police presence is routinely increased.",
        context:
          "The construction chapter's rules: obey the signs and the flagger, keep your distance, expect sudden stops, watch for pedestrians and cyclists whose routes are disrupted, and remember that most work zone crashes are rear-end hits. Orange is the work zone sign color and flaggers' directions override the signals.",
        trap:
          "The doubling applies to the speeding fine whether or not workers are visibly present when the reduced limit is posted.",
        excerptKey: "work-zone-fines-doubled",
        sourceLabel: "Colorado Driver Handbook - Construction Zones",
        sourceUrl: hb(18),
      },
      {
        id: "co_s3_29",
        topic: "sharing",
        question: "Where does the handbook tell you to expect a truck's biggest blind spots?",
        choices: [
          "Directly in front only",
          "On both sides and behind, larger than a car's, plus in front",
          "Only on the driver's side",
          "Trucks have no blind spots because they sit high",
        ],
        correctIndex: 1,
        explanation:
          "No Zones surround a truck: large areas on both sides, a long zone behind, and space in front where a car that cuts in is too close for the truck to stop. Cars in those zones cannot be seen.",
        context:
          "The handbook's advice follows from the zones: do not tailgate, because the driver cannot see you and you cannot see ahead; pass quickly and on the left; do not pull in front until both headlights are in your mirror; do not stop close to a truck that is backing; and stay behind the stop bar at lights, which is placed to give trucks turning room.",
        trap:
          "Sitting high does not remove the blind spots; it makes the ones close to the truck bigger.",
        excerptKey: "no-zones",
        sourceLabel: "Colorado Driver Handbook - Sharing the Road",
        sourceUrl: hb(20),
      },
      {
        id: "co_s3_30",
        topic: "speed",
        question: "You are on a freeway with a posted minimum speed. Traffic is light, the weather is fine, and you drive well below the minimum. How does the handbook treat that?",
        choices: [
          "As legal, since only maximums are enforced",
          "As a traffic violation, unless road or weather conditions justify it",
          "As legal if you stay in the right lane",
          "As legal for drivers on an instruction permit",
        ],
        correctIndex: 1,
        explanation:
          "Driving below a posted minimum is a violation unless road or weather conditions require it. Slow driving disrupts flow and creates the unpredictable situations the handbook warns about.",
        context:
          "Colorado's speed chapter also says that speed is the greatest factor in the severity of a crash, that posted limits are maximums for ideal conditions, and that you must slow near railroad tracks, pedestrians, cyclists, animals and school buses. Traveling much faster or much slower than the traffic around you both increase risk.",
        trap:
          "The right lane is where slow traffic belongs, but it does not excuse driving below a posted minimum in good conditions.",
        excerptKey: "minimum-speed",
        sourceLabel: "Colorado Driver Handbook - Speed",
        sourceUrl: hb(12),
      },
      {
        id: "co_s3_31",
        topic: "emergencies",
        question: "A deer runs into the road and you cannot stop in time. What does the handbook say is often the safest choice?",
        choices: [
          "Swerve hard into the oncoming lane",
          "Swerve onto the shoulder at speed",
          "Brake, hold your lane and, if unavoidable, hit the animal while keeping control",
          "Accelerate to pass in front of it",
        ],
        correctIndex: 2,
        explanation:
          "The handbook says, regretfully, that hitting the animal may be the safest option for the people in the car. A violent swerve to miss a deer can roll the vehicle or put it into oncoming traffic.",
        context:
          "About 90 percent of deer and elk crashes happen between dusk and dawn, mostly in rural and mountain areas. In a marked animal crossing the first precaution is to slow down and look. If animals are near the road, slow further and expect one to run out.",
        trap:
          "Swerving is the instinct that turns a fender-bender into a rollover. Control of the car comes first.",
        excerptKey: "animals-hit-rather-than-swerve",
        sourceLabel: "Colorado Driver Handbook - Emergencies",
        sourceUrl: hb(26),
      },
      {
        id: "co_s3_32",
        topic: "signs",
        question: "You see a white sign reading PASS 3 FT MIN with a bicycle symbol. On roads without this sign, what is the passing clearance for cyclists?",
        choices: [
          "There is none; the rule applies only where posted",
          "2 feet",
          "3 feet; the rule applies on every road, sign or not",
          "A full lane",
        ],
        correctIndex: 2,
        explanation:
          "The sign is a reminder, not the source of the rule. Three feet of clearance applies on all roadways whether or not a sign is posted.",
        context:
          "The Bicycle May Use Full Lane sign works the same way: it reminds drivers of an existing right for cyclists to ride in the center of the lane when the edge is unsafe. The three-foot measurement runs from the outermost part of your vehicle, mirrors and trailers included, and the statute uses the same wording.",
        trap:
          "Reading the sign as \"only here\" reverses its purpose. It is posted where drivers forget a rule that applies everywhere.",
        excerptKey: "pass-3ft-sign",
        sourceLabel: "Colorado Driver Handbook - Traffic Signs",
        sourceUrl: hb(9),
      },
      {
        id: "co_s3_33",
        topic: "safety",
        question: "How often does the handbook say you should check your rearview mirror in normal driving?",
        choices: ["Every 2 to 3 seconds", "Every 5 to 8 seconds", "Every 15 seconds", "Only before braking or changing lanes"],
        correctIndex: 1,
        explanation:
          "Every 5 to 8 seconds, more often in heavy traffic. It is the only way to know that someone is following too closely or closing fast.",
        context:
          "The scanning rules go together: look at least 10 seconds ahead (a block in the city, half a mile on the open road), look to both sides and beyond the curb, look left-right-left at every intersection, and look behind every 5 to 8 seconds and always before you slow, back up, change lanes, leave an intersection or start down a long hill.",
        trap:
          "Only checking before a maneuver is the habit the handbook is correcting. The mirror check is continuous.",
        excerptKey: "look-behind-5-8-seconds",
        sourceLabel: "Colorado Driver Handbook - Safe Driving Tips",
        sourceUrl: hb(18),
      },
      {
        id: "co_s3_34",
        topic: "parking",
        question: "You park on a level street with no curb and shut off the engine. What does the handbook tell you to do before you walk away?",
        choices: [
          "Leave the transmission in neutral",
          "Set the parking brake and take the ignition key with you",
          "Leave the parking lights on",
          "Turn the wheels toward traffic",
        ],
        correctIndex: 1,
        explanation:
          "Parking brake on, key out, every time. An automatic goes in park; a manual goes in low gear facing uphill or reverse facing downhill.",
        context:
          "Where there is no curb the wheels turn to the right on any slope so the car rolls off the road. Parking lights are only required when the vehicle is left at the roadside between sunset and sunrise or in poor visibility, and a disabled space is only for a vehicle whose placard holder is getting in or out.",
        trap:
          "Neutral is the one gear the handbook never suggests for a parked car.",
        excerptKey: "parking-gear-and-key",
        sourceLabel: "Colorado Driver Handbook - Parking",
        sourceUrl: hb(13),
      },
      {
        id: "co_s3_35",
        topic: "licensing",
        question: "You take Colorado's online @Home written test. How long do you have, and who else must be involved if you are under 19?",
        choices: [
          "30 minutes; nobody else",
          "60 minutes; an adult over 19 acts as your proxy and receives the results",
          "90 minutes; a parent must sit beside you",
          "There is no time limit; a driving instructor must watch",
        ],
        correctIndex: 1,
        explanation:
          "Sixty minutes on a computer with a webcam. Test-takers under 19 need an adult over 19 as proxy, and the results are emailed to that person.",
        context:
          "The @Home test uses random photo captures to confirm who is taking it, and the DMV technician compares them at your appointment. You may take it as many times as needed but only twice a day, each retest costs an $11.50 state fee, and the certificate of completion goes with you to the permit appointment. In-office tests are not started within 30 minutes of closing.",
        trap:
          "Passing online does not issue the permit. The appointment at a state office, with the documents and the affidavit, still has to happen.",
        excerptKey: "web-test-60-minutes",
        sourceLabel: "dmv.colorado.gov - @Home Driving Knowledge Tests",
        sourceUrl: ATHOME,
      },
    ],
  },
];

// Referenced by sets 4 to 6 as well; exported so the deep links stay in one place.
export const coloradoLinks = { HB, hb, CRS, PERMITS, ATHOME };
