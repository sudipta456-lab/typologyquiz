import type { DrivingTestSet } from "../types";

// Every fact below was checked against the South Carolina Driver's License
// Manual as published by the SCDMV at dmv.sc.gov in April 2026 (a PDF
// generated 30 March 2026; the cover carries no printed edition label, and the
// previous edition was marked "Revised 06/2024"), plus the sections of Title 56
// of the South Carolina Code of Laws that carry rules the manual states
// incompletely or not at all.
//
// South Carolina's manual is the AAMVA model manual with state material bolted
// on, and the model manual is deliberately number-light. The gaps matter,
// because the SCDMV writes the beginner's permit test from it and the test
// still asks for numbers the book never prints:
//
// 1. The manual states no speed limit anywhere except the 35 mph golf-cart
//    road. The 70/60/55/40/30 mph defaults come from Section 56-5-1520.
// 2. The manual gives no parking distances beyond the 18-inch curb rule. The
//    15-foot hydrant, 20-foot crosswalk, 30-foot stop sign, 50-foot railroad
//    and 20-foot fire station figures come from Section 56-5-2530.
// 3. The manual never states the adult BAC limit. The 0.08 figure is Section
//    56-5-2933; the manual only says you can be convicted at 0.05 with drugs.
// 4. The manual gives no headlight hours. "Half an hour after sunset to half an
//    hour before sunrise, and whenever the wipers are on for rain, sleet or
//    snow" is Section 56-5-4450.
// 5. The manual gives no school-bus fine. The $500 minimum and six points are
//    Sections 56-5-2780 and 56-1-720.
//
// Where the manual and the Code are worded differently the question is built
// on a scenario both agree on, and the research note records the difference.
//
// Page numbers in sourceUrl anchors are PDF page numbers (the manual's own
// numbering is per section: PDF page 62 is "6-3").
//
// Questions are original. Explanations, context notes and trap notes are
// written from scratch; the deep link is there so the learner reads the
// SCDMV's own wording on the government's site.
const HB = "https://dmv.sc.gov/sites/scdmv/files/2026-04/Driver's%20Manual.pdf";
const pg = (n: number) => `${HB}#page=${n}`;
const C5 = "https://www.scstatehouse.gov/code/t56c005.php";
const C1 = "https://www.scstatehouse.gov/code/t56c001.php";
const PERMIT = "https://dmv.sc.gov/driver-services/drivers-license/beginner-permits";

export const southcarolinaSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "South Carolina Basics",
    difficulty: "starter",
    description:
      "The rules you meet on your first drive in South Carolina: what the sign shapes and colors mean, who goes first, how the beginner's permit works, and the handful of numbers the SCDMV expects you to know cold.",
    questions: [
      {
        id: "sc_s1_01",
        topic: "signs",
        question:
          "You come to a red eight-sided sign with white letters. There is a stop line painted on the road. Where must you stop?",
        choices: [
          "Behind the stop line",
          "Level with the sign post",
          "Just past the crosswalk, where you can see cross traffic",
          "Anywhere before the far side of the intersection",
        ],
        correctIndex: 0,
        explanation:
          "The octagon is a stop sign, and when a stop line is painted you stop behind it. Only when there is no line do you creep to the point nearest the intersection where you can see both ways without entering the cross-traffic lane.",
        context:
          "South Carolina teaches signs by shape and color before words. The stop sign is the only eight-sided sign, so its shape alone tells you what it demands. The manual also says where to stop in order of priority: behind the stop line, otherwise behind the crosswalk, otherwise at the closest point with a clear view of both directions. After stopping you still look for vehicles and pedestrians in all directions and yield.",
        trap:
          "Rolling to a spot with a better view is only allowed when there is NO stop line. With a line painted, the line wins even if the view from it is poor.",
        excerptKey: "stop-sign-where",
        sourceLabel: "SC Driver's License Manual - Section 6 Traffic Signs (p. 6-10)",
        sourceUrl: pg(69),
      },
      {
        id: "sc_s1_02",
        topic: "licensing",
        question:
          "What is the youngest age at which a person can apply for a South Carolina beginner's permit?",
        choices: ["14", "15", "15 and a half", "16"],
        correctIndex: 1,
        explanation:
          "South Carolina issues a beginner's permit at 15. You have to pass the vision test and the knowledge test to get it, and it is the compulsory first step for anyone who has never held a license.",
        context:
          "The graduated licensing ladder in South Carolina starts at 15 with the beginner's permit, moves to a conditional license at 15 and a half, a special restricted license at 16, and full privileges at 17 or after one clean year on the restricted license. Each rung has its own tests and its own supervision rules, and the test likes to ask which age goes with which rung.",
        trap:
          "15 and a half is the CONDITIONAL license age, not the permit age. Mixing up the two rungs is the classic error.",
        excerptKey: "permit-age-tests",
        sourceLabel: "SC Driver's License Manual - Section 1 Beginner's Permit (p. 1-4)",
        sourceUrl: pg(8),
        commonlyMissed: true,
      },
      {
        id: "sc_s1_03",
        topic: "rightOfWay",
        question:
          "Two drivers reach a four-way stop at exactly the same time, at right angles to each other. Who goes first?",
        choices: [
          "The driver who is going straight",
          "The driver on the left, who has the shorter path",
          "The driver on the right",
          "The larger vehicle",
        ],
        correctIndex: 2,
        explanation:
          "South Carolina's tie-breaker at a four-way stop is the driver on the right. It only applies when the arrival really is simultaneous; if one driver was clearly there first, that driver goes.",
        context:
          "The manual lists the people you yield to in order: anyone still in the intersection, the driver who is at or arrives before you (the First Car Rule), oncoming traffic when you turn left, and the driver on your right when you arrive together at a four-way stop (the Same Time Rule). Underneath all of it is the warning that no one should ever assume they automatically have the right-of-way.",
        trap:
          "Going straight does not beat turning at a four-way stop, and vehicle size never matters. Arrival order first, then the right-hand rule.",
        excerptKey: "row-left-turn",
        sourceLabel: "SC Driver's License Manual - Section 6 Yielding Right-of-Way (p. 6-2)",
        sourceUrl: pg(61),
        commonlyMissed: true,
      },
      {
        id: "sc_s1_04",
        topic: "safety",
        question:
          "In good conditions, what minimum following distance does the South Carolina manual tell you to keep behind the vehicle ahead?",
        choices: ["2 seconds", "3 seconds", "4 seconds", "One car length per 10 mph"],
        correctIndex: 2,
        explanation:
          "South Carolina's figure is 4 seconds, a full second more than the 3 seconds most neighboring states teach. You watch the vehicle ahead pass a fixed point and should reach \"one thousand four\" before you pass the same point.",
        context:
          "The manual builds the whole space-cushion idea around this count. If you pass the marker before the count finishes, you are too close: back off and count again. It then lists when to add more time: slippery roads, night, fog and bad weather, behind vehicles that must stop at railroad crossings, and behind trucks, buses, RVs and anything towing a trailer. At night the manual adds at least 1 more second, and 2 on an unfamiliar road.",
        trap:
          "\"3 seconds\" is what you will find in most other states' manuals and most practice apps. South Carolina's own manual says 4, and it is the SCDMV that writes the test.",
        excerptKey: "following-4-seconds",
        sourceLabel: "SC Driver's License Manual - Section 8 Space in Front (p. 8-6)",
        sourceUrl: pg(99),
        commonlyMissed: true,
      },
      {
        id: "sc_s1_05",
        topic: "signals",
        question: "A traffic light turns steady yellow as you approach the intersection. What should you do?",
        choices: [
          "Stop and wait for the next green, unless you are already in the intersection",
          "Speed up to get through before it turns red",
          "Treat it as a flashing yellow and proceed with caution",
          "Stop only if a pedestrian is waiting to cross",
        ],
        correctIndex: 0,
        explanation:
          "The steady yellow means the green is ending and red is next, so the manual's instruction is to stop and wait. If you are already inside the intersection when it changes, you clear it as quickly as you safely can.",
        context:
          "South Carolina describes three steady colors and two flashing ones. Green means go if the way is clear. Steady yellow means stop for the coming red. Red means stop behind the line, crosswalk or intersection and stay until green, with the right-on-red exception. Flashing yellow means slow and proceed with caution; flashing red means stop exactly as at a stop sign. The manual adds that you should allow for other drivers' errors from every side as you approach a yellow.",
        trap:
          "Accelerating through a yellow is the tempting answer and the wrong one. The manual treats yellow as a stop signal unless stopping is no longer possible because you are already in the intersection.",
        excerptKey: "yellow-light",
        sourceLabel: "SC Driver's License Manual - Section 6 Traffic Signals (p. 6-3)",
        sourceUrl: pg(62),
      },
      {
        id: "sc_s1_06",
        topic: "signs",
        question: "A downward-pointing triangle, red and white with red letters, faces you. What does it require?",
        choices: [
          "Come to a complete stop, then proceed",
          "Maintain speed; the sign is only advisory",
          "Sound your horn and proceed",
          "Slow down and let traffic that has the right-of-way cross before you enter",
        ],
        correctIndex: 3,
        explanation:
          "A yield sign tells you to slow down and give way to traffic that has the right-of-way. You stop only if that is what it takes to let them through, and if you do have to stop, stopping is compulsory.",
        context:
          "The yield triangle is the only three-sided sign, so shape identifies it. Under the Code, a driver who goes past a yield sign without stopping and then collides with a vehicle in the intersection is presumed to have failed to yield. So the sign is not a soft suggestion: it shifts the blame to you if a crash follows.",
        trap:
          "A yield is not a stop sign, but it is also not permission to push in. If there is no gap, you stop and wait for one.",
        excerptKey: "yield-sign",
        sourceLabel: "SC Driver's License Manual - Section 6 Traffic Signs (p. 6-10)",
        sourceUrl: pg(69),
      },
      {
        id: "sc_s1_07",
        topic: "sharing",
        question:
          "A school bus ahead of you on a two-lane road stops with its red lights flashing and its stop arm out. What must you do?",
        choices: [
          "Slow to 10 mph and pass carefully on the left",
          "Stop only if children are visible on the road",
          "Stop, and stay stopped until the bus moves or the red lights stop flashing",
          "Stop for 5 seconds, then proceed if no children are crossing",
        ],
        correctIndex: 2,
        explanation:
          "On a two-lane road traffic from both directions stops for a school bus with its red or amber lights flashing or its stop arm extended, and stays stopped for as long as the lights flash. You move on only when the bus moves or the reds go off, and even then slowly, watching for children.",
        context:
          "South Carolina's school bus rule has three parts. On any two-lane road everyone stops, both directions. On a road with four or more lanes and at least two lanes each way, only traffic behind the bus stops; oncoming traffic may continue. And you may never overtake a bus whose amber lights are on. The only other exception is a bus in a loading zone completely off the travel lanes where pedestrians are not allowed to cross. Passing a stopped school bus costs at least $500 and six points.",
        trap:
          "Waiting a fixed number of seconds is not a rule anywhere. The stop ends when the bus's lights end, not when you decide the coast is clear.",
        excerptKey: "school-bus-stop",
        sourceLabel: "SC Driver's License Manual - Section 7 Rules for School Buses (p. 7-8)",
        sourceUrl: pg(83),
        commonlyMissed: true,
      },
      {
        id: "sc_s1_08",
        topic: "speed",
        question:
          "You are on a South Carolina interstate where 70 mph signs are posted. The road is dry and traffic is light. What is the highest speed you may legally drive?",
        choices: ["65 mph", "70 mph", "75 mph, since conditions are ideal", "80 mph in the left lane"],
        correctIndex: 1,
        explanation:
          "Seventy is the statutory maximum on the interstate system and other freeways where 70 mph signs are posted, and a speed limit sign is a ceiling for ideal conditions, never a floor. Nothing about light traffic or a dry road lets you exceed it.",
        context:
          "The manual only says that a speed limit sign shows the maximum legal speed in ideal conditions. The numbers themselves are in Section 56-5-1520: 70 mph on interstates and freeways where posted, 60 on multilane divided primary highways where posted, 55 elsewhere, 40 on unpaved roads, and 30 in an urban district. The same section also requires an appropriately reduced speed at intersections, railroad crossings, curves, hillcrests, narrow bridges and in bad weather.",
        trap:
          "\"Ideal conditions\" describes when the posted limit applies at all, not a bonus you can add to it.",
        excerptKey: "code-speed-70-60",
        sourceLabel: "SC Code Section 56-5-1520 - General rules as to maximum speed limits",
        sourceUrl: C5,
      },
      {
        id: "sc_s1_09",
        topic: "parking",
        question:
          "You parallel park on a street with a curb. How far from the curb may your wheels be at most?",
        choices: ["6 inches", "12 inches", "18 inches", "24 inches"],
        correctIndex: 2,
        explanation:
          "South Carolina's limit is 18 inches, stated in the manual and in Section 56-5-2560 of the Code. Any further out and you are obstructing the lane as well as inviting a ticket.",
        context:
          "The parking chapter is mostly about technique, but two rules are law: park as far from moving traffic as possible, and keep the wheels within 18 inches of the curb or edge of pavement. The Code adds the places you may never stop or park at all, such as on a crosswalk, in an intersection, on a sidewalk or beside another parked car, and the distances from hydrants, crosswalks, signs and railroad tracks that the manual leaves out.",
        trap:
          "12 inches is the figure many other states use. South Carolina gives you 18, and that is what its test asks.",
        excerptKey: "park-18-inches",
        sourceLabel: "SC Driver's License Manual - Section 7 Parking (p. 7-11)",
        sourceUrl: pg(86),
      },
      {
        id: "sc_s1_10",
        topic: "impairment",
        question:
          "A 17-year-old driver in South Carolina is tested and registers a blood alcohol concentration of 0.02 percent. What happens?",
        choices: [
          "Nothing, because 0.02 is below the legal limit",
          "A warning letter from the SCDMV",
          "A fine of $100 but no license action",
          "Immediate suspension of driving privileges for at least three months",
        ],
        correctIndex: 3,
        explanation:
          "For drivers under 21 South Carolina's limit is 0.02 percent, and hitting it means an immediate suspension of at least three months. It is an administrative action by the SCDMV, not something a court has to decide first.",
        context:
          "Adults are charged with driving with an unlawful alcohol concentration at 0.08 percent under Section 56-5-2933, but under-21 drivers face the 0.02 threshold in Section 56-1-286. The manual adds that refusing the test costs an under-21 driver at least six months. The manual also points out that vision is measurably impaired at 0.02 for every driver, which is why the youth limit sits there.",
        trap:
          "0.08 is the ADULT limit. Under 21, 0.02 is enough to lose the license, so \"below the legal limit\" is wrong for this driver.",
        excerptKey: "under-21-0-02",
        sourceLabel: "SC Driver's License Manual - Section 3 Alcohol and the Law (p. 3-7)",
        sourceUrl: pg(38),
        commonlyMissed: true,
      },
      {
        id: "sc_s1_11",
        topic: "signs",
        question: "What color and shape are most warning signs in South Carolina?",
        choices: [
          "Yellow diamonds with black symbols",
          "Orange diamonds",
          "White rectangles with black letters",
          "Green rectangles",
        ],
        correctIndex: 0,
        explanation:
          "Warning signs are usually yellow with black lettering or symbols and diamond shaped. They tell you about a possible danger ahead: a curve, a merge, a signal, a crossing.",
        context:
          "The manual sorts signs by job. Yellow diamonds warn. Orange diamonds and rectangles are work-zone warnings. White rectangles with black, red or green markings are regulatory and state laws you must obey. Green, brown and blue signs guide you to roads, recreation areas and services. School zone, school crossing and pedestrian crossing signs may be fluorescent yellow-green rather than plain yellow.",
        trap:
          "Orange is the work-zone version of a warning sign. Ordinary warnings are yellow.",
        excerptKey: "warning-signs",
        sourceLabel: "SC Driver's License Manual - Section 6 Warning Signs (p. 6-4)",
        sourceUrl: pg(63),
      },
      {
        id: "sc_s1_12",
        topic: "rules",
        question: "How far before a turn or lane change does South Carolina law require you to signal?",
        choices: ["At least 50 feet", "At least 100 feet", "At least 200 feet", "At least 3 seconds"],
        correctIndex: 1,
        explanation:
          "The manual states it plainly as state law: signal 100 feet or more before changing lanes, turning, or merging into traffic. Section 56-5-2150 backs it with the same figure, given continuously for the last 100 feet.",
        context:
          "Signaling is one of the few places the manual gives a hard number. It also tells you to cancel the signal once the move is done so you do not confuse other drivers, and to signal before slowing when you are turning off a road with no turn lane, or parking or turning just before an intersection. The Code's hand signals are the same as everywhere: left arm straight out for left, up for right, down for stop or slow.",
        trap:
          "Turning the signal on as you start to turn is too late by law. It has to be showing for the whole last 100 feet.",
        excerptKey: "signal-100-feet",
        sourceLabel: "SC Driver's License Manual - Section 8 Signaling Your Movements (p. 8-9)",
        sourceUrl: pg(102),
      },
      {
        id: "sc_s1_13",
        topic: "sharing",
        question:
          "A pedestrian holding a white cane is about to cross the street in front of you, away from any crosswalk. What must you do?",
        choices: [
          "Slow down and steer around them",
          "Sound the horn briefly to warn them",
          "Come to a complete stop and wait",
          "Continue, because they are not in a crosswalk",
        ],
        correctIndex: 2,
        explanation:
          "A pedestrian guided by a dog or carrying a white cane gets a full stop, wherever they are crossing. South Carolina treats visually impaired pedestrians as always having the right-of-way.",
        context:
          "The pedestrian rules stack up: be ready to yield to any pedestrian even outside a crosswalk, yield to anyone in a crosswalk whether it is painted or not, yield to pedestrians in the intersection even on a green, and for a white cane or guide dog stop completely. The manual separately tells you never to use the horn near blind pedestrians, because they navigate by sound.",
        trap:
          "Honking is exactly what the manual says not to do near a blind pedestrian. Stop, quietly, and wait.",
        excerptKey: "white-cane-stop",
        sourceLabel: "SC Driver's License Manual - Section 10 Pedestrians (p. 10-1)",
        sourceUrl: pg(110),
      },
      {
        id: "sc_s1_14",
        topic: "licensing",
        question:
          "A 15-year-old with a beginner's permit wants to drive at 10 p.m. Who must be in the front seat?",
        choices: [
          "Any licensed driver",
          "A licensed driver at least 18 years old",
          "A licensed driver at least 21 with at least one year of driving experience",
          "A parent or legal guardian only",
        ],
        correctIndex: 2,
        explanation:
          "Between 6 a.m. and midnight a permit holder drives with a licensed driver who is at least 21 and has at least one year of driving experience sitting in the front seat. After midnight the supervisor must be one of the people listed in Section 56-1-100, essentially a parent, guardian or other responsible adult who signed for the minor.",
        context:
          "The permit is the most restricted rung. Supervision is required at all hours; what changes at midnight is who counts as a supervisor. The Code adds that the supervisor must occupy the seat beside the permit holder, that the permit is valid for twelve months and costs $2.50, and that it is not valid until signed.",
        trap:
          "\"Any licensed driver\" fails on two counts: the age floor of 21 and the one-year experience requirement.",
        excerptKey: "permit-supervision",
        sourceLabel: "SC Driver's License Manual - Section 1 Beginner's Permit (p. 1-4)",
        sourceUrl: pg(8),
        commonlyMissed: true,
      },
      {
        id: "sc_s1_15",
        topic: "signals",
        question:
          "You are stopped at a steady red light and want to turn right. No sign prohibits it. What does South Carolina require?",
        choices: [
          "Wait for the green; right on red is not allowed in South Carolina",
          "Turn right without stopping if the way is clear",
          "Turn right only if a green arrow is displayed",
          "Turn right after a complete stop, yielding to pedestrians and other traffic",
        ],
        correctIndex: 3,
        explanation:
          "Right on red is the default in South Carolina unless a sign forbids it. The catch is that you must first stop before the crosswalk on the near side and then yield to pedestrians in or beside the crosswalk and to other traffic lawfully using the intersection.",
        context:
          "The manual describes red as stop-and-stay-stopped with one exception it names, the right turn on red. The Code adds a second: a left turn on red from a one-way street onto another one-way street, on the same stop-first, yield-first terms. A steady red arrow blocks the movement it points to. Whatever the turn, the stop comes first.",
        trap:
          "Turning without a full stop is the everyday mistake. \"Clear enough to go\" is not the test; you must actually stop.",
        excerptKey: "right-on-red-yield",
        sourceLabel: "SC Driver's License Manual - Section 6 Traffic Signals (p. 6-3)",
        sourceUrl: pg(62),
      },
      {
        id: "sc_s1_16",
        topic: "safety",
        question: "It starts raining and you turn on your windshield wipers during the day. What does South Carolina law require?",
        choices: [
          "Nothing; headlights are only required after dark",
          "Parking lights are enough in daylight",
          "Your headlights must be on",
          "Hazard flashers must be on",
        ],
        correctIndex: 2,
        explanation:
          "Section 56-5-4450 ties headlights to wipers: when the wipers are running because of rain, sleet or snow, the lights go on, whatever the clock says. The only carve-out is intermittent wiping in misting rain.",
        context:
          "The Code gives three headlight triggers: from half an hour after sunset to half an hour before sunrise, whenever wipers are in use for precipitation, and whenever weather or conditions stop you seeing people and vehicles 500 feet ahead. Parking lights never count. The manual says the same in plainer words: on rainy, snowy or foggy days use your low beams and slow down.",
        trap:
          "The manual frames it as advice, but the Code makes it law with a fine of up to $25. \"Only after dark\" is wrong in South Carolina.",
        excerptKey: "code-headlights-when",
        sourceLabel: "SC Code Section 56-5-4450 - Times when vehicles must be equipped with lights",
        sourceUrl: C5,
        commonlyMissed: true,
      },
      {
        id: "sc_s1_17",
        topic: "rightOfWay",
        question: "You are leaving a private driveway to join a public road. Who has the right-of-way?",
        choices: [
          "You, because you are already moving",
          "Whoever is closer to the junction",
          "Drivers on the public road",
          "Nobody; it is first come, first served",
        ],
        correctIndex: 2,
        explanation:
          "Traffic on the public highway has the right-of-way over a driver entering from a driveway or private road. You wait for a safe gap; they do not slow for you.",
        context:
          "This entry in the manual's yield list pairs with the ramp rule: a driver on an entrance or acceleration ramp yields to traffic already on the interstate. The Code adds a detail for built-up areas: when you leave an alley, driveway or building in a business or residential district you must stop before crossing the sidewalk, and if there is no sidewalk, at the point where you can see approaching traffic.",
        trap:
          "Being first to move does not create right-of-way. Coming from a driveway you are the one who waits.",
        excerptKey: "row-driveway-ramp",
        sourceLabel: "SC Driver's License Manual - Section 6 Yielding Right-of-Way (p. 6-2)",
        sourceUrl: pg(61),
      },
      {
        id: "sc_s1_18",
        topic: "emergencies",
        question: "Your vehicle has an anti-lock braking system (ABS) and you need to stop in an emergency. How should you brake?",
        choices: [
          "Press hard and hold constant pressure, even when the pedal vibrates",
          "Pump the pedal rapidly to avoid locking the wheels",
          "Press gently and release if you feel a clicking noise",
          "Use the parking brake to help the ABS",
        ],
        correctIndex: 0,
        explanation:
          "With ABS you press as hard as you can and keep pressing. Pumping switches the system off. The vibration and clicking you feel are the ABS working, not a fault.",
        context:
          "The manual gives three options in an emergency: brake, steer or accelerate. On braking it explains that ABS stops the wheels locking so you can still steer while braking hard. Vehicles without ABS need a different technique, and the winter chapter spells it out: pump standard brakes gently, but with ABS apply steady pressure and never pump.",
        trap:
          "Pumping is the right technique for OLD brakes. With ABS it is exactly the wrong one.",
        excerptKey: "abs-press-hard",
        sourceLabel: "SC Driver's License Manual - Section 9 Braking (p. 9-1)",
        sourceUrl: pg(104),
      },
      {
        id: "sc_s1_19",
        topic: "signs",
        question: "Which color are the signs that mark work zones and construction areas?",
        choices: ["Yellow", "Red", "Orange", "Blue"],
        correctIndex: 2,
        explanation:
          "Work-zone signs are orange with black letters or symbols, usually diamond or rectangle shaped. They warn of workers, lane closures, reduced speed zones, detours and rough surfaces ahead.",
        context:
          "The manual pairs the sign color with a legal warning: endangering a highway worker brings a fine and points on your record under Section 56-5-1535 ($500 to $1,000 and two points when nobody is hurt). It also tells you to slow down in every work zone even when no workers are present, because narrower lanes and rough pavement are hazards on their own, and to follow the work-zone signs until you see End Road Work.",
        trap:
          "Yellow is the everyday warning color. Orange is reserved for temporary work-zone conditions.",
        excerptKey: "work-zone-signs",
        sourceLabel: "SC Driver's License Manual - Section 6 Work Zone Signs (p. 6-7)",
        sourceUrl: pg(66),
      },
      {
        id: "sc_s1_20",
        topic: "safety",
        question: "Under South Carolina's Hands-Free and Distracted Driving Act, which of these is legal while driving?",
        choices: [
          "Holding your phone to your ear for a call",
          "Reading a text at a red light",
          "Talking through a wrist-worn device or earpiece",
          "Watching a video call on a mounted phone",
        ],
        correctIndex: 2,
        explanation:
          "The Act bans holding or supporting a phone with any part of your body, reading or writing any text, and viewing moving images such as videos or video calls. It specifically leaves earpieces and wrist-worn devices for voice calls alone.",
        context:
          "The law took effect 1 September 2025, with warnings only until 28 February 2026 and citations from 1 March 2026. A first offense is a $100 fine; a second or later offense within three years is $200 and two points. The Code's exceptions cover being lawfully parked or stopped, voice-to-text with the phone not held, reporting an emergency, and hands-free navigation, audio or starting a call without typing.",
        trap:
          "Stopped at a red light is still \"operating\" the vehicle in traffic. The exception is for being lawfully parked or stopped, not for waiting at a signal.",
        excerptKey: "hands-free-prohibitions",
        sourceLabel: "SC Driver's License Manual - Section 3 Hands-Free and Distracted Driving Act (p. 3-5)",
        sourceUrl: pg(36),
        commonlyMissed: true,
      },
      {
        id: "sc_s1_21",
        topic: "rules",
        question: "You are approaching a roundabout in South Carolina. Which direction do you travel around the center island, and who yields?",
        choices: [
          "Clockwise; traffic in the circle yields to entering traffic",
          "Counterclockwise; the larger vehicle has priority",
          "Clockwise; entering traffic yields",
          "Counterclockwise; entering traffic yields to traffic already circulating",
        ],
        correctIndex: 3,
        explanation:
          "You slow, yield to traffic already in the roundabout, enter counterclockwise, drive to your exit, signal and leave. Circulating traffic always has priority over entering traffic.",
        context:
          "The manual explains why roundabouts are favored: they eliminate head-on and high-speed right-angle collisions. It also introduces two other South Carolina layouts a learner may not have seen: the diverging diamond interchange, where cross-street traffic shifts to the left side between two signalized crossovers so left turns onto ramps do not cross oncoming traffic, and the restricted crossing U-turn (RCUT), where you turn right onto the main road and then make a U-turn at a median opening instead of turning left or crossing directly.",
        trap:
          "In the United States roundabouts always run counterclockwise, and the yield sign faces the ENTERING driver, not the one already circulating.",
        excerptKey: "roundabout-rules",
        sourceLabel: "SC Driver's License Manual - Section 7 Roundabouts and Traffic Circles (p. 7-7)",
        sourceUrl: pg(82),
      },
      {
        id: "sc_s1_22",
        topic: "sharing",
        question: "How much of a lane is a motorcyclist entitled to in South Carolina?",
        choices: [
          "The full width of the lane",
          "Half a lane, so a car can share the other half",
          "A full lane only on interstates",
          "The right third of the lane",
        ],
        correctIndex: 0,
        explanation:
          "A motorcycle is entitled to the full width of a lane, and the manual tells drivers not to share it. The rider needs the room to move around hazards and react to other traffic.",
        context:
          "Section 56-5-3640 makes the full-lane rule law and forbids driving in a way that deprives a motorcycle of it; the only exception is two motorcycles riding abreast by choice. The manual's other motorcycle points: keep at least 4 seconds behind a motorcycle and more in the wet, check mirrors and blind spots for them because they are small, look carefully for them before turning left, and do not assume a flashing signal means a turn because motorcycle signals may not cancel themselves.",
        trap:
          "A rider hugging one side of the lane has not given up the rest of it. You still may not squeeze alongside.",
        excerptKey: "motorcycle-full-lane",
        sourceLabel: "SC Driver's License Manual - Section 10 Motorcyclists (p. 10-5)",
        sourceUrl: pg(114),
      },
      {
        id: "sc_s1_23",
        topic: "signals",
        question: "What does a flashing red traffic light mean?",
        choices: [
          "Slow down and proceed with caution",
          "The signal is out of order; proceed normally",
          "Stop, then proceed as you would at a stop sign",
          "Stop and wait until the light stops flashing",
        ],
        correctIndex: 2,
        explanation:
          "A flashing red is a stop sign made of light. You stop behind the stop line, crosswalk or intersection, look both ways, yield as required, and go when it is safe.",
        context:
          "The manual contrasts the two flashing signals. Flashing yellow means slow down and proceed with caution, ready to stop for traffic entering the intersection. Flashing red means a complete stop and the stop-sign procedure. The Code says the same and adds that these rules do not apply at railroad crossings, which have their own stop-when-signaled rule at 15 to 50 feet from the nearest rail.",
        trap:
          "Waiting for a flashing red to stop flashing could take all night. Stop, then go when clear.",
        excerptKey: "flashing-red",
        sourceLabel: "SC Driver's License Manual - Section 6 Traffic Signals (p. 6-3 to 6-4)",
        sourceUrl: pg(62),
      },
      {
        id: "sc_s1_24",
        topic: "impairment",
        question: "At what blood alcohol concentration does the South Carolina manual say a driver's vision begins to be affected?",
        choices: ["0.02 percent", "0.05 percent", "0.08 percent", "0.10 percent"],
        correctIndex: 0,
        explanation:
          "The manual states that vision is impacted at 0.02 percent BAC for every driver: blurring, slower focusing, double vision and worse judgment of distance and speed. That is also the under-21 suspension threshold.",
        context:
          "The manual's impairment section lists what alcohol degrades: judgment first, then vision, color distinction and reaction time. It says impairment starts with the first drink, that one drink can be enough for a DUI arrest, and that a driver can be convicted at 0.05 or lower when drugs, including prescription and over-the-counter medicines, are in the mix.",
        trap:
          "0.08 is the adult legal limit for a DUAC charge, not the point where impairment starts. The manual's whole argument is that impairment begins far below the limit.",
        excerptKey: "vision-0-02",
        sourceLabel: "SC Driver's License Manual - Section 3 Effects of Alcohol and Other Impairing Drugs (p. 3-6)",
        sourceUrl: pg(37),
      },
      {
        id: "sc_s1_25",
        topic: "parking",
        question: "You park facing downhill on a street with a curb. Which way do you turn the front wheels?",
        choices: [
          "Toward the curb (to the right)",
          "Away from the curb (to the left)",
          "Straight ahead",
          "It does not matter if the parking brake is set",
        ],
        correctIndex: 0,
        explanation:
          "Facing downhill you turn the wheels to the right, toward the curb, so the curb catches the tire if the vehicle rolls. The manual gives the same downhill answer with or without a curb, except when parked on the left side of a one-way street.",
        context:
          "South Carolina's hill rule has three cases. Downhill, with or without a curb: wheels right. Uphill with a curb: wheels toward the center of the street so the back of the front tire rests against the curb. Uphill with no curb: wheels right so the car rolls off the road rather than into traffic. In every case set the parking brake, leave the car in park or, for a manual, in first or reverse, and turn off the engine.",
        trap:
          "Wheels away from the curb is the UPHILL-with-curb answer. Downhill is always toward the curb.",
        excerptKey: "hill-parking",
        sourceLabel: "SC Driver's License Manual - Section 7 Parking on Hills (p. 7-13)",
        sourceUrl: pg(88),
        commonlyMissed: true,
      },
      {
        id: "sc_s1_26",
        topic: "licensing",
        question: "How long must a 16-year-old hold a South Carolina beginner's permit before applying for a license?",
        choices: ["30 days", "90 days", "180 days", "One year"],
        correctIndex: 2,
        explanation:
          "Drivers 17 and under must hold the permit at least 180 days and can apply on the 181st day. Drivers 18 and older need only 30 days.",
        context:
          "The 180-day floor is one of five things a 15- or 16-year-old needs before a first license: the holding period, a driver's education course of eight classroom hours and six driving hours, school enrollment with satisfactory attendance, 40 hours of supervised practice including 10 at night, and the PDLA certification form from the driver's ed program. Only the holding period changes for adults.",
        trap:
          "30 days is the ADULT holding period. A teen who applies at 30 days will be turned away.",
        excerptKey: "permit-180-days",
        sourceLabel: "SC Driver's License Manual - Section 1 First-Time Driver's License (p. 1-5 to 1-6)",
        sourceUrl: pg(9),
        commonlyMissed: true,
      },
      {
        id: "sc_s1_27",
        topic: "signals",
        question: "A solid yellow line is painted on your side of the center line and a broken yellow line on the other side. May you pass?",
        choices: [
          "Yes, because the other side is broken",
          "Yes, if no traffic is coming",
          "No; a solid line on your side means passing is prohibited for you",
          "Only at night when headlights make oncoming traffic visible",
        ],
        correctIndex: 2,
        explanation:
          "Yellow lines divide two-way traffic, and the line nearest you controls you. Solid on your side means no passing from your lane; only the drivers on the broken side may cross.",
        context:
          "The manual's pavement-marking pictures cover four cases: a broken yellow line means passing is allowed in both directions; broken on your side and solid on theirs means only you may pass; a double solid yellow means nobody passes; and white lines separate lanes going the same direction, broken white meaning you may change lanes. The Code makes crossing a solid line in a no-passing zone an offense, with an exception for turning left into a driveway or alley.",
        trap:
          "Reading the far line instead of your own is the classic slip. The line next to your tires is the one that applies to you.",
        excerptKey: "yellow-dashed-side",
        sourceLabel: "SC Driver's License Manual - Section 6 Pavement Markings (p. 6-13)",
        sourceUrl: pg(72),
      },
      {
        id: "sc_s1_28",
        topic: "emergencies",
        question: "A front tire blows out at highway speed. What is the right first response?",
        choices: [
          "Brake hard to stop as quickly as possible",
          "Steer sharply toward the shoulder",
          "Shift into neutral and turn off the engine",
          "Grip the wheel firmly, hold the vehicle straight and ease off the accelerator",
        ],
        correctIndex: 3,
        explanation:
          "A blowout pulls the vehicle toward the failed tire, so the manual's sequence is: hold the wheel firmly and keep straight, take your foot off the gas and slow gradually, do not brake (or only gently if you must), then leave the road at a safe place and put the flashers on.",
        context:
          "The emergency chapter runs through the common failures. Brake failure: use the parking brake slowly and be ready to release it if the car skids, then turn off the engine and find a safe stop. Stuck accelerator: turn off the engine, shift to neutral, look for an escape path. Engine dies: grip the wheel because steering gets heavy, brake with steady pressure and pull off. Broken down: get off the road, flashers on, flares 200 to 300 feet behind.",
        trap:
          "Hard braking on three good tires and one shredded one is how a blowout becomes a spin. Slow down first, brake later and gently.",
        excerptKey: "tire-blowout",
        sourceLabel: "SC Driver's License Manual - Section 9 Tire Blowout (p. 9-4)",
        sourceUrl: pg(107),
      },
      {
        id: "sc_s1_29",
        topic: "rules",
        question: "You want to pass a slower vehicle on a multi-lane highway. Which lane does the manual say is for passing?",
        choices: ["The right-most lane", "The paved shoulder if it is wide enough", "Any lane that is empty", "The left-most lane"],
        correctIndex: 3,
        explanation:
          "On multi-lane roads the left-most lane is the passing lane. Passing on the shoulder is never allowed, paved or not: the shoulder is for emergency stops, not through traffic.",
        context:
          "The Code goes further on interstates: Section 56-5-1885 bars driving in the far left lane of a controlled-access highway except to pass, with exceptions such as congestion, weather, obstructions, preparing to exit, or when nobody is behind you. Passing on the right is allowed only when the vehicle ahead is turning left or on a road wide enough for two lines of traffic in your direction, and never by leaving the pavement.",
        trap:
          "A wide paved shoulder looks like a lane. It is not one, and using it to pass is illegal.",
        excerptKey: "passing-left-lane-shoulder",
        sourceLabel: "SC Driver's License Manual - Section 7 Passing (p. 7-15)",
        sourceUrl: pg(90),
      },
      {
        id: "sc_s1_30",
        topic: "safety",
        question: "Where should your hands be on the steering wheel for normal driving, according to the South Carolina manual?",
        choices: [
          "10 and 2 o'clock",
          "12 o'clock with one hand",
          "Left hand at 7 to 9 o'clock, right hand at 3 to 5 o'clock",
          "Both hands at the top of the wheel",
        ],
        correctIndex: 2,
        explanation:
          "The manual's grip is low: left hand between 7 and 9, right hand between 3 and 5. It says 10 and 2 is no longer recommended because an airbag deploying into arms held that high can injure your face, hands and arms.",
        context:
          "Three steering methods are described. Hand-to-hand (push-pull) is for normal driving above 10 to 15 mph and keeps your arms out of the airbag's path. Hand-over-hand is for low-speed turns such as intersections and parking. One-hand steering is only for backing up or reaching a control, and 12 o'clock is recommended only when backing while turned in your seat to look through the rear window.",
        trap:
          "10 and 2 is what an older relative learned and what many practice apps still say. The manual explicitly rejects it.",
        excerptKey: "hand-position",
        sourceLabel: "SC Driver's License Manual - Section 5 Steering (p. 5-2)",
        sourceUrl: pg(55),
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Core Rules of the Road",
    difficulty: "easy",
    description:
      "Thirty questions on the rules most South Carolina drivers get right: intersections, passing, lights, pedestrians and bicyclists, seat belts and child seats, and what the manual says about sharing the road with trucks.",
    questions: [
      {
        id: "sc_s2_01",
        topic: "rightOfWay",
        question: "You are turning left at an intersection on a green light. A car is coming straight toward you from the opposite direction. Who goes first?",
        choices: [
          "You, because you entered the intersection first",
          "Whoever is moving faster",
          "You, because a green light gives left-turners priority",
          "The oncoming car; you yield before turning",
        ],
        correctIndex: 3,
        explanation:
          "A left-turning driver yields to oncoming traffic that is in the intersection or close enough to be a hazard. A green light lets you enter, but it does not give you priority over the car coming the other way.",
        context:
          "This is both in the manual's yield list and in Section 56-5-2320 of the Code, which covers left turns into alleys and driveways as well as at intersections. The manual adds practical advice: turn left from the left-most part of your lane, look through the turn to the farthest point, and when a truck is coming, do not turn in front of it if you have any doubt about its speed.",
        trap:
          "Entering first does not settle a left turn. Oncoming traffic going straight keeps priority until it has passed or clearly stopped.",
        excerptKey: "code-left-turn-yield",
        sourceLabel: "SC Code Section 56-5-2320 - Vehicle turning left",
        sourceUrl: C5,
      },
      {
        id: "sc_s2_02",
        topic: "safety",
        question: "South Carolina's seat belt law is a primary enforcement law. What does that mean?",
        choices: [
          "An officer can stop you for the belt violation alone, with no other reason",
          "Only the driver can be ticketed for an unbelted passenger",
          "The fine is doubled for a first offense",
          "It applies only on primary highways",
        ],
        correctIndex: 0,
        explanation:
          "Primary enforcement means an officer who has a clear view of an unbelted driver or occupant can pull the vehicle over for that reason by itself. No speeding or other violation is needed first.",
        context:
          "The Code requires the driver and every occupant to wear a belt, makes the driver responsible for belting anyone 17 or younger, and sets the fine at $25 per person with a $50 cap per incident, no court costs and no points. The manual adds how to wear it: shoulder strap across the chest with little slack, never under the arm or behind the back, lap belt low and snug across the hips. Air bags are supplemental and only work as designed with the belt on.",
        trap:
          "A secondary law would need another violation first. South Carolina's is primary, so the belt alone is enough for a stop.",
        excerptKey: "primary-seatbelt-law",
        sourceLabel: "SC Driver's License Manual - Section 4 Using Safety Belts (p. 4-6)",
        sourceUrl: pg(49),
      },
      {
        id: "sc_s2_03",
        topic: "signs",
        question: "A round yellow sign with a black X and the letters RR is posted beside the road. What is it telling you?",
        choices: [
          "You are at the railroad crossing; stop now",
          "Trains have stopped using this line",
          "A railroad crossing is ahead; slow down, look and listen",
          "Railroad property; no parking",
        ],
        correctIndex: 2,
        explanation:
          "The round yellow RR sign is the advance warning, placed before the crossing. It tells you to slow down, look and listen for a train and be ready to stop. The crossing itself is marked by the white X-shaped crossbuck.",
        context:
          "The manual's railroad section has several testable points: the crossbuck marks the crossing and you stop behind the line when a train approaches; a sign under it shows the number of tracks, but not every multi-track crossing has one, so always check for a second train; cross tracks quickly without stopping on them; if you must stop for traffic, stop before the tracks, not on them; and a blue sign at the crossing carries the emergency number to call if you get stuck. The Code sets the stop at 15 to 50 feet from the nearest rail and forbids driving around a lowered gate.",
        trap:
          "The round sign is not the crossing. Stopping at it, well before the tracks, is unnecessary; being ready to stop at the crossbuck is the point.",
        excerptKey: "railroad-advance-sign",
        sourceLabel: "SC Driver's License Manual - Section 6 Railroad Crossing Warning Signs (p. 6-6)",
        sourceUrl: pg(65),
      },
      {
        id: "sc_s2_04",
        topic: "sharing",
        question: "You are driving beside a large truck and cannot see the driver's face in the truck's side mirror. What does that tell you?",
        choices: [
          "The mirror is badly adjusted",
          "The driver cannot see you either",
          "You are in the safest position relative to the truck",
          "The truck is about to turn",
        ],
        correctIndex: 1,
        explanation:
          "The manual's rule of thumb for the No Zone: if you cannot see the driver's face in the side mirror, the driver cannot see you. Trucks have large blind spots on both sides, the biggest on the right, starting behind the cab and running the length of the truck.",
        context:
          "The No Zone has three parts. Side: do not linger alongside. Front: a loaded truck at 55 mph needs at least 335 feet to stop, more than one and a half times a car, so never cut in close or change lanes in front of one; after passing, wait until the whole front of the truck shows in your mirror. Rear: the blind spot behind a truck extends up to 200 feet, and following that closely means the driver cannot see you and you cannot see ahead. On hills trucks run around 35 mph in the right lane, so stay out of it there and near weigh stations.",
        trap:
          "Being right beside the cab feels visible. It is often the middle of the blind spot.",
        excerptKey: "no-zone-sides",
        sourceLabel: "SC Driver's License Manual - Section 10 The No Zone (p. 10-8)",
        sourceUrl: pg(117),
      },
      {
        id: "sc_s2_05",
        topic: "rules",
        question: "A truck ahead of you signals a right turn and then swings wide to the left. What should you do?",
        choices: [
          "Stay back and do not turn or pass until the truck has completed its turn",
          "Pass it on the right through the gap it has opened",
          "Sound your horn so the driver corrects the turn",
          "Move up beside the truck on its right to make your own turn",
        ],
        correctIndex: 0,
        explanation:
          "Trucks and buses swing left to clear the corner on a right turn. If you slip into the gap between the truck and the curb you will be squeezed as it comes around. Wait until the turn is finished.",
        context:
          "The manual explains that big vehicles need more room to turn and sometimes borrow space from other lanes. It also notes that many intersections have stop lines set well back precisely to give trucks turning space, which is one reason to always stop behind the line. And it warns against cutting off a large vehicle to reach an exit or beat it into a single-lane work zone; the seconds saved are not worth the risk.",
        trap:
          "The gap on the right is the trap itself. It exists because the truck needs it, not because it is free.",
        excerptKey: "truck-squeeze",
        sourceLabel: "SC Driver's License Manual - Section 10 Turning (p. 10-10)",
        sourceUrl: pg(119),
      },
      {
        id: "sc_s2_06",
        topic: "impairment",
        question: "What is South Carolina's implied consent law?",
        choices: [
          "You agree to carry proof of insurance whenever you drive",
          "Passengers consent to being searched during a traffic stop",
          "You consent to a vision test at every renewal",
          "By driving in the state you have agreed to a lawfully requested breath, blood or urine test if suspected of impaired driving",
        ],
        correctIndex: 3,
        explanation:
          "Implied consent means that by driving you have already agreed to chemical testing when an officer lawfully requests it on suspicion of impaired driving. Refusing is allowed, but it costs your license.",
        context:
          "The manual says refusing the test can cost your driving privileges, and the Code puts numbers on it: at least six months for a refusal, and at least one month for a test result of 0.15 percent or more, with the option of ending the suspension by enrolling in the ignition interlock program. For an under-21 driver the manual says refusal means at least six months. The law that applies is the law of the state where you are arrested, not the state that issued your license.",
        trap:
          "Implied consent is not a right to refuse without consequence. You can refuse the test, but the suspension follows automatically.",
        excerptKey: "implied-consent",
        sourceLabel: "SC Driver's License Manual - Section 3 Alcohol and the Law (p. 3-8)",
        sourceUrl: pg(39),
      },
      {
        id: "sc_s2_07",
        topic: "signals",
        question: "Traffic lights on a vertical signal head are arranged in what order from top to bottom?",
        choices: ["Green, yellow, red", "Red, yellow, green", "Yellow, red, green", "Red, green, yellow"],
        correctIndex: 1,
        explanation:
          "Red is at the top, yellow in the middle and green at the bottom. On a horizontal signal the red is on the left, yellow in the middle and green on the right.",
        context:
          "The manual explains the layout so that a color-blind driver, or anyone facing a signal with the sun behind it, can read position instead of color. It also notes that some intersections have a single-color signal, usually a flashing red or yellow, which follows the flashing rules: red means stop as at a stop sign, yellow means slow and proceed with caution.",
        trap:
          "Reversing the order is a common guess. Remember red on top, or on the left, in both layouts.",
        excerptKey: "signal-order",
        sourceLabel: "SC Driver's License Manual - Section 6 Traffic Signals (p. 6-2 to 6-3)",
        sourceUrl: pg(61),
      },
      {
        id: "sc_s2_08",
        topic: "sharing",
        question: "A bicyclist is riding ahead of you in your lane. How does the South Carolina manual tell you to pass?",
        choices: [
          "Sound your horn so the rider moves over, then pass",
          "Pass at normal speed but keep within your lane",
          "Slow down, allow as much space as possible and consider the rider's speed",
          "Wait until the rider pulls onto the sidewalk",
        ],
        correctIndex: 2,
        explanation:
          "Slow down, give the bicyclist as much room as you can and account for their speed when you pass. Section 56-5-3435 requires a safe operating distance between a motor vehicle and a bicycle at all times.",
        context:
          "The manual treats bicycles as vehicles with the same rights and responsibilities as cars. Its list for drivers: yield to bicyclists at intersections as you would to anyone else, let a cyclist clear the intersection before you turn, do not stop or drive in a bike lane except to enter a driveway or in an emergency, avoid sudden braking near them, and do not sound the horn close to a rider unless a collision is likely, because it can startle them into your path. Check for cyclists before opening a door when parked on the street.",
        trap:
          "The horn is the wrong tool here. The manual says it may startle the rider straight into your path.",
        excerptKey: "passing-bicyclist",
        sourceLabel: "SC Driver's License Manual - Section 7 Passing (p. 7-16)",
        sourceUrl: pg(91),
      },
      {
        id: "sc_s2_09",
        topic: "licensing",
        question: "Which of these will make you fail the SCDMV knowledge test outright?",
        choices: [
          "Leaving the test area before the test is completed",
          "Taking longer than 30 minutes",
          "Asking the examiner to explain a word",
          "Wearing glasses during the test",
        ],
        correctIndex: 0,
        explanation:
          "The manual lists three automatic fails: leaving the test room or area before finishing, talking to anyone, and bringing anything into the test area that could help with answers. Written material and electronic devices of any kind are banned from the room.",
        context:
          "Knowledge tests are given at any SCDMV branch, or by a One Stop third-party tester for a first-time Class D permit or Class M license. The manual does not give a time limit or a question count. The SCDMV's own practice exam at apps.sc.gov and the manual's sample questions use three answer choices, and the manual points learners to the SC DMV Driver Exam app for practice.",
        trap:
          "Phones are electronic devices even when switched off. The rule is about what is in the room, not whether it is in use.",
        excerptKey: "knowledge-test-fail",
        sourceLabel: "SC Driver's License Manual - Section 1 Required Non-Commercial License Tests (p. 1-10)",
        sourceUrl: pg(14),
      },
      {
        id: "sc_s2_10",
        topic: "speed",
        question: "What is the maximum speed in an urban district in South Carolina when no other limit is posted?",
        choices: ["25 mph", "30 mph", "35 mph", "45 mph"],
        correctIndex: 1,
        explanation:
          "Section 56-5-1520(C) sets 30 mph as the maximum in an urban district, defined as a stretch where buildings sit less than 100 feet apart for a quarter mile or more. A local authority may post a lower limit after an engineering study.",
        context:
          "The manual gives no default speeds at all, so this whole set of numbers is statutory: 70 on posted interstates and freeways, 60 on posted multilane divided primary highways, 55 elsewhere, 40 on unpaved roads, 30 in urban districts. Posted signs override the defaults, and the basic rule that speed must be reasonable for conditions overrides the signs.",
        trap:
          "25 mph is the residential default in several other states and on many practice sites. South Carolina's statutory urban figure is 30.",
        excerptKey: "code-speed-urban-30",
        sourceLabel: "SC Code Section 56-5-1520(C) - General rules as to maximum speed limits",
        sourceUrl: C5,
        commonlyMissed: true,
      },
      {
        id: "sc_s2_11",
        topic: "safety",
        question: "A child is 18 months old. How must the child ride in a car in South Carolina?",
        choices: [
          "In a forward-facing seat in the back",
          "In a booster seat with a lap belt",
          "On an adult's lap in the back seat",
          "In a rear-facing car seat in a rear seat",
        ],
        correctIndex: 3,
        explanation:
          "An infant or child under two rides rear-facing in a rear seat until they outgrow the seat maker's height or weight limit. A rear-facing seat must never go in front of an air bag.",
        context:
          "South Carolina's child restraint ladder follows Section 56-5-6410: rear-facing until at least 2, then a forward-facing seat with a harness in the back, then from at least 4 a belt-positioning booster used with both lap and shoulder belts (never a lap belt alone), and from age 8 or 57 inches an adult belt if it fits properly across the hips and center of the chest. The manual adds that children 7 and younger should be in a car seat in the back seat to keep them away from the air bag.",
        trap:
          "Forward-facing is the next step up, not this one. Under 2 means rear-facing unless the seat's own limit has been exceeded.",
        excerptKey: "child-seat-under-two",
        sourceLabel: "SC Code Section 56-5-6410 - Child passenger restraint systems",
        sourceUrl: C5,
      },
      {
        id: "sc_s2_12",
        topic: "rules",
        question: "You are being passed by another vehicle on a two-lane road. What should you do?",
        choices: [
          "Speed up slightly so the pass is over sooner",
          "Move onto the shoulder to give more room",
          "Stay in your lane and keep a constant speed",
          "Brake so the passing driver has more space",
        ],
        correctIndex: 2,
        explanation:
          "When being passed, stay in your lane, hold a steady speed and stay alert. The Code forbids increasing your speed until the passing vehicle is completely by.",
        context:
          "The passing section has a checklist for the overtaking driver too: check oncoming traffic, mirrors and over the shoulder; signal 100 feet or more ahead; move smoothly into the passing lane; keep going until the whole front of the passed vehicle shows in your rearview mirror; signal and check over your shoulder before returning. And it lists where not to pass: with oncoming traffic, on a curve or hill that blocks your view, at intersections, and before a railroad crossing or bridge.",
        trap:
          "Speeding up to \"help\" is illegal. It lengthens the time the other driver is exposed in the oncoming lane.",
        excerptKey: "being-passed",
        sourceLabel: "SC Driver's License Manual - Section 7 Passing (p. 7-16)",
        sourceUrl: pg(91),
      },
      {
        id: "sc_s2_13",
        topic: "emergencies",
        question: "Your car begins to skid on a wet curve. What should you do first?",
        choices: [
          "Brake firmly to scrub off speed",
          "Turn the wheel opposite to the direction you want to travel",
          "Shift into neutral and coast",
          "Ease off the brake or accelerator and steer where you want to go",
        ],
        correctIndex: 3,
        explanation:
          "Take the pressure off the pedals, look where you want to go and steer the vehicle there. Skids come from asking the tires for more grip than the surface offers, so the fix is to ask for less.",
        context:
          "The manual explains skids as too much speed for conditions, a sudden stop, or tires that can no longer grip. The winter chapter repeats the steering advice and adds the braking rule: with ABS apply steady pressure and never pump; with standard brakes pump gently. It also warns that bridges and overpasses freeze first and that cruise control should be off in winter conditions.",
        trap:
          "Braking hard in a skid is instinctive and makes the slide worse. Release, look, steer.",
        excerptKey: "skid-response",
        sourceLabel: "SC Driver's License Manual - Section 9 Dealing with Skids (p. 9-2)",
        sourceUrl: pg(105),
      },
      {
        id: "sc_s2_14",
        topic: "sharing",
        question: "An ambulance with lights and siren on comes up behind you on a two-lane road. What does the law require?",
        choices: [
          "Speed up to get out of its way",
          "Pull parallel to the right edge or curb, clear of any intersection, stop and stay stopped until it has passed",
          "Stop exactly where you are, even in the intersection",
          "Move to the left so it can pass on the right",
        ],
        correctIndex: 1,
        explanation:
          "On a two-lane road Section 56-5-2360 tells you to pull to the right edge or curb, clear of any intersection, and stop until the emergency vehicle has passed. On a multilane road you yield and move, or stay, wherever lets it pass safely.",
        context:
          "The manual's version is shorter: pull over to the edge of the road so the emergency vehicle can pass, and avoid blocking intersections, roadways or driveways. The Code adds a separate rule for fire trucks: never follow fire apparatus responding to a call closer than 500 feet, or stop within 500 feet of one that has stopped at an emergency. And once a police or emergency vehicle is stopped at the roadside, the move-over law takes over.",
        trap:
          "Stopping in the middle of an intersection blocks the very path the ambulance needs. Clear the intersection first, then pull right and stop.",
        excerptKey: "code-emergency-vehicle-two-lane",
        sourceLabel: "SC Code Section 56-5-2360 - Operation of vehicles on approach of authorized emergency vehicles",
        sourceUrl: C5,
      },
      {
        id: "sc_s2_15",
        topic: "signs",
        question: "Regulatory signs, the ones that state laws such as speed limits and turn restrictions, are usually what color?",
        choices: [
          "White with black, red or green markings",
          "Yellow with black symbols",
          "Green with white letters",
          "Orange with black letters",
        ],
        correctIndex: 0,
        explanation:
          "Regulatory signs are white, square or rectangular (or a special shape like the octagon and triangle), with black, red or green letters or symbols. A red circle with a slash over a symbol means that action is prohibited.",
        context:
          "The manual's examples of regulatory signs are No Left Turn, No Right Turn, No U-Turn, Straight, Left Turn Only, Straight or Turn Right, Speed Limit, Stop, Yield, the shared center left-turn lane sign and One-Way. Guide signs are the green, brown and blue ones; warning signs are yellow; work zones are orange.",
        trap:
          "Green signs guide you to places; they never state a law. The speed limit sign is white for a reason.",
        excerptKey: "regulatory-signs",
        sourceLabel: "SC Driver's License Manual - Section 6 Regulatory Signs (p. 6-9)",
        sourceUrl: pg(68),
      },
      {
        id: "sc_s2_16",
        topic: "parking",
        question: "How close to a fire hydrant may you park in South Carolina?",
        choices: ["No closer than 10 feet", "No closer than 15 feet", "No closer than 20 feet", "No closer than 30 feet"],
        correctIndex: 1,
        explanation:
          "Section 56-5-2530 bans standing or parking within 15 feet of a fire hydrant, except momentarily to pick up or drop off passengers. The manual itself gives no hydrant distance, which is why this one trips people up.",
        context:
          "The same section carries the other distances: 20 feet from a crosswalk at an intersection, 30 feet on the approach to a stop sign, yield sign, flashing signal or traffic signal at the roadside, 20 feet from a fire station driveway (75 feet on the opposite side when signposted), and 50 feet from the nearest rail of a railroad crossing. It also bans stopping at all on a sidewalk, crosswalk, in an intersection, beside another parked vehicle, on a bridge or in a tunnel, on railroad tracks, on a controlled-access highway or in a median.",
        trap:
          "The numbers 15, 20, 30 and 50 all belong to different things. The hydrant is the smallest: 15.",
        excerptKey: "code-parking-hydrant-crosswalk",
        sourceLabel: "SC Code Section 56-5-2530 - Stopping, standing, or parking prohibited in specified places",
        sourceUrl: C5,
        commonlyMissed: true,
      },
      {
        id: "sc_s2_17",
        topic: "safety",
        question: "According to the manual, how far ahead should you try to look while driving?",
        choices: ["5 to 10 seconds", "10 to 15 seconds", "20 to 30 seconds", "One city block"],
        correctIndex: 2,
        explanation:
          "The manual's visual search target is 20 to 30 seconds ahead of the vehicle. Looking that far gives you time to plan speed and position instead of reacting with emergency braking or steering.",
        context:
          "Visual search is three directions: ahead, to the sides for anyone about to cross your path, and behind through the mirrors, especially before slowing, changing lanes or entering an intersection. In cities you may not be able to see 20 seconds ahead, so the manual tells you to adjust speed and position, and to avoid tailgating a large vehicle that blocks your view. Keep your eyes moving; do not stare at any one thing.",
        trap:
          "12 to 15 seconds is the figure many other manuals use. South Carolina's says 20 to 30.",
        excerptKey: "look-20-30-seconds",
        sourceLabel: "SC Driver's License Manual - Section 8 Visual Search (p. 8-1)",
        sourceUrl: pg(94),
      },
      {
        id: "sc_s2_18",
        topic: "rightOfWay",
        question: "Two cars approach an uncontrolled rural intersection (no signs or signals) from different roads at about the same time. Who yields?",
        choices: [
          "The driver on the left yields to the driver on the right",
          "The driver on the right yields to the driver on the left",
          "The driver on the narrower road yields",
          "Neither; both stop and wave each other through",
        ],
        correctIndex: 0,
        explanation:
          "Section 56-5-2310 gives the right-of-way to the vehicle on the right when two vehicles reach an intersection from different roads at about the same time. It is the same right-hand rule as the four-way stop, applied without any signs.",
        context:
          "The manual's rural-driving section warns that uncontrolled intersections are common on country roads and dangerous if approached at speed: slow down and be ready to stop for crossing or oncoming traffic. It also gives the single-lane bridge convention, first driver to the bridge has the right-of-way, and reminds you that blind corners from woods, crops and hills cut your view.",
        trap:
          "Road width has nothing to do with it unless a sign makes one road a through highway. Without signs, right beats left.",
        excerptKey: "code-uncontrolled-right",
        sourceLabel: "SC Code Section 56-5-2310 - Vehicles approaching or entering intersection",
        sourceUrl: C5,
      },
      {
        id: "sc_s2_19",
        topic: "sharing",
        question: "You are approaching a vehicle stopped on the shoulder with flashing blue lights. Traffic allows a lane change. What does South Carolina's move-over law require?",
        choices: [
          "Slow to 20 mph below the limit and stay in your lane",
          "Stop until the officer waves you on",
          "Slow down and move into a lane away from the emergency vehicle",
          "Turn on your hazard lights and continue at the speed limit",
        ],
        correctIndex: 2,
        explanation:
          "Slow down and yield by changing lanes away from the stopped emergency vehicle when it is safe to do so. If a lane change is not safe, slow down and proceed with caution at a safe speed for conditions.",
        context:
          "The manual explains the law exists because officers, EMS, firefighters and tow truck operators keep getting struck at the roadside. Section 56-5-1538 lists the lights that trigger it, red, red and white, blue, red and blue, and amber or yellow, which brings tow trucks and highway vehicles under the rule, and sets the fine at $300 to $500 for the misdemeanor of endangering emergency services personnel.",
        trap:
          "Stopping on a highway beside an emergency scene creates a new hazard. The law asks you to slow and move over, not to halt.",
        excerptKey: "move-over",
        sourceLabel: "SC Driver's License Manual - Section 10 Move-Over Law (p. 10-15)",
        sourceUrl: pg(124),
        commonlyMissed: true,
      },
      {
        id: "sc_s2_20",
        topic: "signals",
        question: "What does a shared center lane marked with yellow lines and opposing left-turn arrows allow you to do?",
        choices: [
          "Use it as a passing lane when the road is busy",
          "Drive in it for through travel when your lane is slow",
          "Use it only to prepare for and make a left turn from either direction",
          "Park in it briefly while loading",
        ],
        correctIndex: 2,
        explanation:
          "A shared center left-turn lane is reserved for vehicles turning left from either direction. It is not for through traffic and not for passing. The Code also allows a U-turn from it where U-turns are otherwise legal.",
        context:
          "The manual pictures the lane in its markings section and shows the regulatory sign that announces it. Section 56-5-2120(d) adds that a left turn may not be made from any other lane where a two-way left-turn lane exists. The other center-lane rule in the Code concerns three-lane two-way roads: the middle lane is only for passing when it is clear, preparing to turn left, or when signs assign it to your direction.",
        trap:
          "Cruising along the center lane to bypass a queue is the classic misuse. Enter it only when you are about to turn.",
        excerptKey: "shared-center-lane",
        sourceLabel: "SC Driver's License Manual - Section 6 Regulatory Signs (p. 6-10)",
        sourceUrl: pg(69),
      },
      {
        id: "sc_s2_21",
        topic: "licensing",
        question: "What must a person who moves permanently to South Carolina with a valid out-of-state license do?",
        choices: [
          "Nothing, as long as the other license is valid",
          "Apply for an SC license within 45 days and surrender the old one",
          "Apply for an SC license within 10 days",
          "Retake the knowledge and skills tests within 90 days",
        ],
        correctIndex: 1,
        explanation:
          "New residents have 45 days to apply for a South Carolina license or ID and must turn in the out-of-state credential to receive it. Active-duty military and federal employees are exempt.",
        context:
          "Testing is normally waived for a valid out-of-state license, but if it has been expired more than nine months the knowledge, skills and vision tests are all required. The same nine-month rule applies to an expired South Carolina license. Temporary residents such as students and military do not need an SC license, and visitors may drive on their home-state license.",
        trap:
          "The 10-day figure belongs to a different rule: notifying the SCDMV of a change of address or name. Moving into the state gives you 45 days.",
        excerptKey: "new-resident-45-days",
        sourceLabel: "SC Driver's License Manual - Section 1 Moving to South Carolina (p. 1-13)",
        sourceUrl: pg(17),
      },
      {
        id: "sc_s2_22",
        topic: "safety",
        question: "When should you use high beams at night?",
        choices: [
          "Whenever you are on a rural road",
          "Whenever there are no oncoming vehicles and you are not close behind another vehicle",
          "In fog, to see further through it",
          "Only on unlit interstates",
        ],
        correctIndex: 1,
        explanation:
          "High beams let you see about twice as far as low beams, so the manual says to use them whenever no vehicles are coming toward you. Dim them 500 feet before an oncoming vehicle and when following within 200 feet.",
        context:
          "Section 56-5-4780 makes the 500-foot and 200-foot dimming distances law. The manual adds the rest of its night-driving list: low beams in fog, rain or snow because high beams cause glare; glance to the right edge of the road if an oncoming driver leaves high beams on; no sunglasses or tinted lenses at night; look beyond your headlight beams for dark shapes; and add at least 1 second to your following distance, 2 on an unfamiliar road.",
        trap:
          "In fog high beams bounce back at you. Low beams, and fog lights if fitted, are the right choice.",
        excerptKey: "high-beams-twice",
        sourceLabel: "SC Driver's License Manual - Section 11 Night Driving (p. 11-1)",
        sourceUrl: pg(126),
      },
      {
        id: "sc_s2_23",
        topic: "rules",
        question: "You are backing out of a driveway across a sidewalk in a residential area. What does the manual tell you to do before you even get in the car?",
        choices: [
          "Walk around and check behind the vehicle for children and small objects",
          "Sound the horn twice",
          "Turn on the hazard flashers",
          "Roll down all the windows",
        ],
        correctIndex: 0,
        explanation:
          "Children and small objects behind a car cannot be seen from the driver's seat, so the manual's first backing step is to check behind the vehicle before getting in. Then brake, shift to reverse, look through the rear window and back slowly.",
        context:
          "The backing technique in the manual: left hand at 12 o'clock, right arm over the passenger seat, look directly through the rear window, glance at mirrors and the camera occasionally, keep speed low because the car is harder to steer in reverse, and keep looking back until you have stopped completely. The Code adds that backing is only allowed when it can be done safely, and never on the shoulder or roadway of a controlled-access highway.",
        trap:
          "Mirrors and cameras do not show the area immediately behind the bumper. The walk-around is the only check that does.",
        excerptKey: "backing-up",
        sourceLabel: "SC Driver's License Manual - Section 5 Backing Up (p. 5-5)",
        sourceUrl: pg(58),
      },
      {
        id: "sc_s2_24",
        topic: "impairment",
        question: "You take an over-the-counter allergy medicine before a long drive. What does the manual want you to know?",
        choices: [
          "Only prescription drugs can affect driving",
          "It is safe as long as you do not also drink alcohol",
          "Non-prescription medicines are exempt from DUI law",
          "Over-the-counter drugs for colds and allergies can make you drowsy and affect your driving; check the label",
        ],
        correctIndex: 3,
        explanation:
          "The manual singles out over-the-counter remedies for headaches, colds, allergies and nerves as drugs that cause drowsiness, and pep pills and diet pills as ones that cause dizziness and poor concentration. Read the label and ask a pharmacist if unsure.",
        context:
          "South Carolina treats driving under the influence of any drug that impairs you, prescription, over-the-counter or illegal, the same as DUI, and a drug-impaired conviction is handled like a DUI or DUAC conviction. Combining alcohol with any other drug can multiply the effects. The manual's fatigue advice fits alongside: 7 to 9 hours of sleep, a stop every 100 miles or 2 hours, and a 15 to 20 minute nap if you feel tired.",
        trap:
          "\"Non-prescription\" does not mean \"non-impairing\". The DUI statute covers any drug that impairs your faculties.",
        excerptKey: "otc-drugs",
        sourceLabel: "SC Driver's License Manual - Section 3 Over-the-Counter Drugs (p. 3-9)",
        sourceUrl: pg(40),
      },
      {
        id: "sc_s2_25",
        topic: "signs",
        question: "A green rectangular sign with white letters and an arrow tells you what?",
        choices: [
          "A law you must obey",
          "A hazard ahead",
          "Directions to a town, road or point of interest",
          "A work zone is starting",
        ],
        correctIndex: 2,
        explanation:
          "Green, brown and blue rectangles are guide signs. Green gives directions and distances to roads and towns, brown points to parks and recreation, and blue shows services such as hospitals, gas, food and lodging.",
        context:
          "The manual also explains route markers: the shape and color show whether a road is interstate, US, state, county or local. South Carolina's own secondary road marker has the letter S followed by two numbers: the county number, then the road number, with a separate set of road numbers in every county. And the hurricane evacuation route sign marks coastal roads used when a mandatory evacuation is declared.",
        trap:
          "A green sign never states a rule. If you have to obey it, it is white.",
        excerptKey: "guide-signs",
        sourceLabel: "SC Driver's License Manual - Section 6 Guide Signs (p. 6-11)",
        sourceUrl: pg(70),
      },
      {
        id: "sc_s2_26",
        topic: "rules",
        question: "You are on a one-way street and want to reach the road behind you. The street is too narrow for a U-turn. What does the manual advise?",
        choices: [
          "Make a three-point turn wherever you are",
          "Reverse down the street to the previous junction",
          "Drive around the block, since the street is one-way",
          "Make a two-point turn using the nearest driveway",
        ],
        correctIndex: 2,
        explanation:
          "A three-point turn is only for a two-lane road that is not busy and where you cannot go around the block; a one-way street rules out driving back the other way at all. Going around the block is the answer.",
        context:
          "The manual describes three turnabouts. Reverse two-point: signal right, back into a driveway on the right, then pull out left. Forward two-point: turn left into a driveway, then back out to the right. Three-point: pull to the right edge, turn hard left across the road, reverse hard right, then drive forward into the new direction, all without touching the curb or using a driveway. The Code bans any turnaround on a curve or near a hillcrest where you cannot be seen from 500 feet in either direction.",
        trap:
          "Any turnabout on a one-way street sends you the wrong way down it. The manual's first choice on a busy or one-way street is the block.",
        excerptKey: "three-point-when",
        sourceLabel: "SC Driver's License Manual - Section 7 Three-Point Turnabout (p. 7-3)",
        sourceUrl: pg(78),
      },
      {
        id: "sc_s2_27",
        topic: "emergencies",
        question: "Your vehicle breaks down on a highway and you have emergency flares. Where does the manual say to place them?",
        choices: [
          "Right behind the rear bumper",
          "About 50 feet behind the vehicle",
          "About 200 to 300 feet behind the vehicle",
          "In front of the vehicle so oncoming traffic sees them",
        ],
        correctIndex: 2,
        explanation:
          "Flares go 200 to 300 feet behind the vehicle so following drivers have time to change lanes. First get the car off the road if you can, turn on the hazard flashers, and notify the authorities by phone if possible.",
        context:
          "The manual's breakdown advice is all about being seen, because many collisions happen when a driver spots a disabled vehicle too late. The Code adds the parking rule outside towns: never leave a vehicle standing on the roadway when it could be moved off, and a stopped vehicle must be visible from 200 feet in each direction with a clear width left for others to pass. Section 56-5-1220 also asks drivers in a damage-only crash to move drivable vehicles off the road so they do not block traffic.",
        trap:
          "Flares at the bumper warn nobody in time. The whole point is distance.",
        excerptKey: "breakdown-flares",
        sourceLabel: "SC Driver's License Manual - Section 9 Vehicle Breakdown (p. 9-5)",
        sourceUrl: pg(108),
      },
      {
        id: "sc_s2_28",
        topic: "rightOfWay",
        question: "The light turns green for you, but a pedestrian is still crossing in front of you in the crosswalk. What must you do?",
        choices: [
          "Proceed; the pedestrian must clear the intersection on red",
          "Sound the horn and edge forward",
          "Yield to the pedestrian even though your light is green",
          "Drive around the pedestrian",
        ],
        correctIndex: 2,
        explanation:
          "You must yield to any pedestrian in the intersection even when your light is green. The Code says the same for every green signal: vehicles, including those turning, yield to pedestrians lawfully in the intersection or an adjacent crosswalk.",
        context:
          "The manual also warns not to move the instant a light turns green: take time to make sure the path is clear and no one is running the red. Pedestrian rules to remember: yield in any crosswalk whether marked or not, yield when turning right on red, slow beside parked vehicles where people can step out, drive slower than the limit in playground and residential areas, and obey the reduced school-zone speed when lights flash or children are present.",
        trap:
          "A green light gives you permission to enter, not priority over someone already in the crosswalk.",
        excerptKey: "pedestrian-green",
        sourceLabel: "SC Driver's License Manual - Section 10 Pedestrians (p. 10-1)",
        sourceUrl: pg(110),
      },
      {
        id: "sc_s2_29",
        topic: "speed",
        question: "You are on a two-lane state highway with no speed limit signs posted. What is the maximum legal speed?",
        choices: ["45 mph", "50 mph", "55 mph", "60 mph"],
        correctIndex: 2,
        explanation:
          "Where no other limit is posted and the road is not an interstate, a posted 60 mph divided highway, an unpaved road or an urban district, the statutory maximum is 55 mph.",
        context:
          "Section 56-5-1520 is the whole speed table for the test: 70 on posted interstates and freeways, 60 on posted multilane divided primary highways, 55 in other locations, 40 on unpaved roads, 30 in urban districts. It also requires reduced speed at intersections, railroad crossings, curves, hillcrests, narrow bridges and winding roads and whenever pedestrians, traffic or weather make it necessary. Section 56-5-1560 bans driving so slowly that you impede normal traffic.",
        trap:
          "60 only applies where 60 mph signs are actually posted on a multilane divided primary highway. Unposted means 55.",
        excerptKey: "code-speed-55-40",
        sourceLabel: "SC Code Section 56-5-1520(B)(3) - General rules as to maximum speed limits",
        sourceUrl: C5,
      },
      {
        id: "sc_s2_30",
        topic: "safety",
        question: "How far should you sit from the steering wheel, measured from your chest?",
        choices: ["At least 6 inches", "At least 10 inches", "At least 14 inches", "As close as possible for control"],
        correctIndex: 1,
        explanation:
          "The manual asks for at least 10 inches between your chest and the wheel, so the air bag has room to deploy, with the top of the wheel no higher than your shoulders and the head restraint touching the back of your head, not below your ears.",
        context:
          "Set-up before driving covers seat, mirrors and belts. Sit upright with your back against the seat. Your foot should pivot between brake and accelerator with the heel on the floor. For the outside mirrors the manual describes the enhanced setting: lean your head to the window on the left and to the center on the right, and adjust each mirror until the side of the car just disappears, which adds 12 to 16 degrees of view per side and shrinks the blind spots.",
        trap:
          "Closer is not better. Too close to the wheel puts you inside the air bag's deployment zone.",
        excerptKey: "ten-inches-wheel",
        sourceLabel: "SC Driver's License Manual - Section 4 Adjusting Seat and Mirrors (p. 4-3)",
        sourceUrl: pg(46),
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Real Test Difficulty",
    difficulty: "medium",
    description:
      "Thirty-five questions at the level of the real SCDMV test: the GDL restrictions in detail, the numbers the manual leaves to the Code, and the scenarios where two rules meet.",
    questions: [
      {
        id: "sc_s3_01",
        topic: "licensing",
        question: "A 15-and-a-half-year-old holds a conditional license. It is 7 p.m. in July, during daylight saving time. May they drive alone?",
        choices: [
          "No; solo driving ends at 6 p.m. all year",
          "Yes; a conditional license allows solo driving until midnight",
          "Only if going to or from work",
          "Yes; during daylight saving time solo driving is allowed until 8 p.m.",
        ],
        correctIndex: 3,
        explanation:
          "A conditional or special restricted license allows unsupervised driving from 6 a.m. to 6 p.m., extended to 8 p.m. during daylight saving time. So 7 p.m. in July is fine alone; in January it would need a licensed driver at least 21 in the car.",
        context:
          "The two restricted licenses share the same clock: alone 6 a.m. to 6 p.m. (8 p.m. in DST); with a licensed driver at least 21 from then until midnight; after midnight only with someone from the Section 56-1-100 list. Passengers under 21 are capped at two unless a licensed adult 21 or older is aboard, except when carrying family members or students to and from school. A 16-year-old can apply for a waiver to drive alone until midnight for work or activities, but never past midnight.",
        trap:
          "Midnight is the limit WITH a 21-plus supervisor. Solo driving ends at 6 or 8 p.m. depending on the season.",
        excerptKey: "conditional-hours",
        sourceLabel: "SC Driver's License Manual - Section 1 Conditional License for a 15-year-old (p. 1-7 to 1-8)",
        sourceUrl: pg(11),
        commonlyMissed: true,
      },
      {
        id: "sc_s3_02",
        topic: "sharing",
        question: "You are driving toward a school bus that has stopped with red lights flashing on the other side of a highway that has two lanes in each direction and no median. Must you stop?",
        choices: [
          "Yes; everyone stops for a school bus on any road",
          "Yes, because there is no physical median",
          "No; oncoming traffic on a road with at least two lanes each way does not have to stop",
          "No, but you must slow to 15 mph",
        ],
        correctIndex: 2,
        explanation:
          "On a multi-lane highway, defined in the manual and in Section 56-5-2770 as four or more lanes with at least two in each direction, a driver meeting a stopped school bus from the opposite direction need not stop. A median is not part of the definition.",
        context:
          "Behind the bus, on any road, you always stop and stay stopped until it moves or the red lights go off. On a two-lane road both directions stop. The other exception is a bus in a loading zone completely off the travel lanes where pedestrians are not allowed to cross. The Code separately says a bus route on a multi-lane road must be designed so no student has to cross it, which is why oncoming traffic is released.",
        trap:
          "Some states require a barrier before oncoming traffic is released. South Carolina counts lanes: two each way is enough.",
        excerptKey: "school-bus-multilane",
        sourceLabel: "SC Driver's License Manual - Section 7 Rules for School Buses (p. 7-10)",
        sourceUrl: pg(85),
        commonlyMissed: true,
      },
      {
        id: "sc_s3_03",
        topic: "parking",
        question: "A stop sign stands at the side of the road. How far back from it must you stay when you park?",
        choices: ["15 feet", "20 feet", "30 feet", "50 feet"],
        correctIndex: 2,
        explanation:
          "Section 56-5-2530 prohibits standing or parking within 30 feet on the approach to a stop sign, yield sign, flashing signal or traffic signal at the side of the road. The reason is sight lines: a parked car hides the sign and the cross traffic.",
        context:
          "The full distance list from the Code: 15 feet from a hydrant, 20 feet from a crosswalk at an intersection, 30 feet from a roadside sign or signal, 20 feet from a fire station driveway, 50 feet from the nearest rail of a railroad crossing, and nowhere in front of a driveway. Momentary stops to pick up or drop off passengers are allowed in the standing-prohibited spots but not in the stopping-prohibited ones such as crosswalks and intersections.",
        trap:
          "20 feet is the crosswalk distance. The sign and signal distance is 30.",
        excerptKey: "code-parking-hydrant-crosswalk",
        sourceLabel: "SC Code Section 56-5-2530 - Stopping, standing, or parking prohibited in specified places",
        sourceUrl: C5,
      },
      {
        id: "sc_s3_04",
        topic: "impairment",
        question: "An adult driver in South Carolina provides a breath sample that reads 0.15 percent. Apart from any DUI charge, what happens to the license?",
        choices: [
          "Nothing until a court convicts",
          "An administrative suspension of at least one month, which can be ended by joining the ignition interlock program",
          "A permanent revocation",
          "A 30-day warning period",
        ],
        correctIndex: 1,
        explanation:
          "A test result of 0.15 or more triggers an immediate administrative suspension of at least one month under Section 56-5-2951, separate from the criminal case. Refusing the test triggers at least six months. Either can be ended by enrolling in the Ignition Interlock Device Program.",
        context:
          "The manual explains that a DUI or DUAC conviction, a BAC of 0.15 or more, or a refusal can all cost the license, and that a person suspended for one of these can apply for a temporary alcohol license if they request a hearing within 30 days. Since 2024 every DUI conviction, even a first, requires an ignition interlock: six months for a first offense under Section 56-5-2990.",
        trap:
          "The suspension is administrative and immediate. It does not wait for a conviction, which is the whole point of the implied consent scheme.",
        excerptKey: "code-bac-0-15-month",
        sourceLabel: "SC Code Section 56-5-2950 - Implied consent to testing for alcohol or drugs",
        sourceUrl: C5,
      },
      {
        id: "sc_s3_05",
        topic: "signals",
        question: "You face a steady red arrow pointing left while the circular signal beside it is green. What may you do?",
        choices: [
          "Go straight, but not turn left",
          "Turn left cautiously after stopping",
          "Turn left without stopping because the circular light is green",
          "Nothing; wait for both signals to change",
        ],
        correctIndex: 0,
        explanation:
          "A steady red arrow forbids the movement it points to. Traffic facing it may still make any movement another signal permits, so with a circular green beside it you can go straight but not turn left.",
        context:
          "Section 56-5-970 sets the arrow rules: a green arrow lets you make only the movement shown, cautiously, yielding to pedestrians and traffic lawfully in the intersection; a yellow arrow warns the arrow is ending; a red arrow bars that movement until an indication permitting it appears. The right-on-red exception, and the left-on-red exception from one one-way street onto another, apply to a circular red, not to a red arrow blocking that turn.",
        trap:
          "A red arrow is not softened by a green ball next to it. The arrow governs the turn, the ball governs straight-ahead traffic.",
        excerptKey: "code-red-arrow",
        sourceLabel: "SC Code Section 56-5-970 - Traffic-control signal legend",
        sourceUrl: C5,
      },
      {
        id: "sc_s3_06",
        topic: "rules",
        question: "A car ahead of you has stopped at an unmarked crosswalk to let a pedestrian cross. You cannot see the pedestrian. What does the law say?",
        choices: [
          "You may pass the stopped car slowly on the left",
          "You may pass on the right if there is room",
          "You must not overtake the stopped vehicle",
          "You may pass after sounding your horn",
        ],
        correctIndex: 2,
        explanation:
          "Section 56-5-3130 forbids passing a vehicle stopped at a marked or unmarked crosswalk to let a pedestrian cross. The stopped car is hiding the person you would hit.",
        context:
          "The manual's parked-car rule is the same idea: pedestrians step out from between stopped vehicles, so slow down and do not pass until you are sure nobody is crossing. The Code adds that a pedestrian crossing outside a crosswalk yields to vehicles, but every driver must still exercise due care to avoid hitting any pedestrian and take special care around children and anyone who appears confused or intoxicated.",
        trap:
          "Not seeing a pedestrian is the danger, not a reason to go. The law assumes the stopped car is blocking your view.",
        excerptKey: "code-pedestrian-no-pass-stopped",
        sourceLabel: "SC Code Section 56-5-3130 - Pedestrians' right-of-way in crosswalks",
        sourceUrl: C5,
      },
      {
        id: "sc_s3_07",
        topic: "speed",
        question: "You are driving on an unpaved county road with no speed limit signs. What is the maximum lawful speed?",
        choices: ["30 mph", "35 mph", "40 mph", "55 mph"],
        correctIndex: 2,
        explanation:
          "Section 56-5-1520 limits unpaved roads to 40 mph. It is the one statutory default most learners have never heard of, because the manual never mentions it.",
        context:
          "The manual's rural-driving section explains why: gravel and dirt reduce traction, so you should slow down, increase your following distance and expect to skid when stopping. Narrow rural roads often have ditches or drop-offs instead of shoulders, and the manual's advice for a wheel that drops off the pavement is to slow gradually and steer gently back, never yank the wheel.",
        trap:
          "55 is the general default for paved roads outside urban districts. Unpaved roads get their own lower number.",
        excerptKey: "code-speed-55-40",
        sourceLabel: "SC Code Section 56-5-1520(B)(3) - General rules as to maximum speed limits",
        sourceUrl: C5,
        commonlyMissed: true,
      },
      {
        id: "sc_s3_08",
        topic: "licensing",
        question: "A 16-year-old with a special restricted license collects six points within their first year. What happens?",
        choices: [
          "A warning letter",
          "The license is suspended for six months",
          "The restrictions are extended by 30 days",
          "Nothing until the total reaches 12 points",
        ],
        correctIndex: 1,
        explanation:
          "For a beginner's permit, conditional or special restricted license, six or more points means a six-month suspension. The 12-point threshold applies to full license holders.",
        context:
          "The point system has two levels. Under 17: a letter at two and four points, suspension at six, and a defensive driving course will not lift an excessive-points suspension. 17 and older: a letter at six points, suspension at 12, running from three months for 12 to 15 points up to six months for 20 or more. Points halve one year after the violation. Separately, any traffic conviction or at-fault crash on a restricted license delays full privileges by a year from that date or until age 17.",
        trap:
          "12 points is the adult trigger. A restricted licensee has half the headroom.",
        excerptKey: "points-six-permit",
        sourceLabel: "SC Driver's License Manual - Section 1 Driver's License Suspension for Excessive Points (p. 1-19)",
        sourceUrl: pg(23),
        commonlyMissed: true,
      },
      {
        id: "sc_s3_09",
        topic: "rightOfWay",
        question: "You are on an entrance ramp merging onto an interstate. Traffic on the interstate is steady. Who must yield?",
        choices: [
          "Interstate traffic must open a gap for you",
          "Whoever reaches the merge point first",
          "You must yield to vehicles already on the interstate",
          "Nobody; merging is a shared duty with no rule",
        ],
        correctIndex: 2,
        explanation:
          "A driver on the entrance or acceleration ramp yields to traffic already on the limited-access highway. You use the acceleration lane to match their speed, find a gap and merge, then cancel your signal.",
        context:
          "The manual's advice for drivers already on the highway is to make room for merging traffic by moving over a lane or adjusting speed when they can, but it is courtesy, not right-of-way. Exiting is the mirror image: move to the exit lane early, keep your speed until you are in the deceleration lane on the right, then check the ramp's posted speed and slow down.",
        trap:
          "Being first to the merge point does not create right-of-way. The ramp always yields.",
        excerptKey: "acceleration-lane",
        sourceLabel: "SC Driver's License Manual - Section 7 Entering a Multi-lane Highway (p. 7-14)",
        sourceUrl: pg(89),
      },
      {
        id: "sc_s3_10",
        topic: "safety",
        question: "A driver is convicted of using a handheld phone while driving for the second time in two years. What is the penalty under South Carolina's hands-free law?",
        choices: [
          "$100 fine",
          "$200 fine and two points on the driving record",
          "$500 fine and a 30-day suspension",
          "A warning, because points are not assessed for distracted driving",
        ],
        correctIndex: 1,
        explanation:
          "A first offense is a $100 fine with no points. A second or subsequent offense within three years is a $200 fine plus two points. Neither fine can be suspended by the court.",
        context:
          "The Act bans holding or supporting a device with any part of the body, reading or writing any text, and viewing video or video calls. Earpieces and wrist devices for voice calls are allowed, as is hands-free navigation and audio, voice-to-text with the phone mounted, use while lawfully parked or stopped, and reporting an emergency. Enforcement needs an officer's clear view of the violation, and officers may not seize or search the phone because of it.",
        trap:
          "The points arrive with the SECOND offense, and only if it falls within three years of the first.",
        excerptKey: "hands-free-penalties",
        sourceLabel: "SC Driver's License Manual - Section 3 Penalties for violating the Hands-Free and Distracted Driving Act (p. 3-5)",
        sourceUrl: pg(36),
      },
      {
        id: "sc_s3_11",
        topic: "emergencies",
        question: "You are involved in a crash in a city in which another driver is injured. Beyond stopping and giving your details, whom must you notify, and when?",
        choices: [
          "The SCDMV, within 15 days",
          "The local police department, immediately by the quickest means",
          "Your insurer, within 24 hours",
          "The county sheriff, within 48 hours",
        ],
        correctIndex: 1,
        explanation:
          "Section 56-5-1260 requires the driver in an injury or death crash to notify the police immediately by the quickest means: the local police inside a municipality, otherwise the county sheriff or the nearest Highway Patrol office.",
        context:
          "The crash duties in the Code stack up. Stop at once and stay at the scene (you may leave briefly to report it). Give your name, address and registration number, show your license on request, and render reasonable aid to anyone hurt. Report an injury crash immediately. In a damage-only crash, move a drivable vehicle off the road so it does not block traffic; doing so is not an admission of fault. Leaving an injury scene is a crime with license revocation.",
        trap:
          "Reporting to the SCDMV or an insurer is paperwork that comes later. The immediate duty is to the police.",
        excerptKey: "code-collision-report",
        sourceLabel: "SC Code Section 56-5-1260 - Immediate report of accidents resulting in personal injury or death",
        sourceUrl: C5,
      },
      {
        id: "sc_s3_12",
        topic: "signs",
        question: "A South Carolina road marker reads S-40-125. What does the 40 mean?",
        choices: [
          "The number of the county the road is in",
          "The speed limit on the road",
          "The distance to the next town in miles",
          "The year the road was built",
        ],
        correctIndex: 0,
        explanation:
          "Secondary system road markers carry the letter S, then the county number, then the road number. Each county has its own set of road numbers, so 125 in one county is a different road from 125 in the next.",
        context:
          "The manual describes secondary roads as local roads serving traffic in rural and urban areas, not intended as through routes and best avoided by drivers unfamiliar with the area. Only a few appear on the state map because there are too many; county maps show them all. The other markers to recognize: the interstate shield, the US route shield and the state route sign.",
        trap:
          "Nothing on a route marker is a speed limit. Speed limits are white regulatory signs.",
        excerptKey: "secondary-road-marker",
        sourceLabel: "SC Driver's License Manual - Section 6 Route Number Signs (p. 6-11)",
        sourceUrl: pg(70),
      },
      {
        id: "sc_s3_13",
        topic: "sharing",
        question: "You are following a school bus that has switched on its flashing AMBER lights but has not yet stopped. May you pass it?",
        choices: [
          "Yes, amber means caution only",
          "Yes, if you can complete the pass before it stops",
          "No; you may not overtake a school bus with amber signals on",
          "Only on a multi-lane highway",
        ],
        correctIndex: 2,
        explanation:
          "Amber lights mean the bus is preparing to stop, and Section 56-5-2770(C) forbids overtaking a bus with its amber signals on. The manual says to stop for the whole time the bus is stopped OR preparing to stop with red or amber flashing.",
        context:
          "The penalty for passing a stopped school bus is at least $500 or up to 30 days in jail for a first offense, six points, and a second offense is $2,000 to $5,000. If the violation causes great bodily injury or death it becomes a felony with license suspension for the prison term plus a year. The multi-lane exception only releases oncoming traffic; a driver behind the bus stops on every kind of road.",
        trap:
          "Amber is the trap. Many drivers treat it as a countdown to get past; the law treats it as the start of the stop.",
        excerptKey: "code-school-bus-amber",
        sourceLabel: "SC Code Section 56-5-2770 - Meeting, overtaking and passing school bus",
        sourceUrl: C5,
        commonlyMissed: true,
      },
      {
        id: "sc_s3_14",
        topic: "rules",
        question: "You are approaching a railroad crossing whose signal lights are flashing. Where must you stop?",
        choices: [
          "Within 10 feet of the nearest rail",
          "Between 15 and 50 feet from the nearest rail",
          "At least 100 feet from the tracks",
          "On the tracks if the gate is still up",
        ],
        correctIndex: 1,
        explanation:
          "Section 56-5-2710 requires a stop within 50 feet but not less than 15 feet from the nearest rail when a signal is flashing, a gate is down, a flagger signals, or a train is visibly close. You may not drive around or under a gate that is down or moving.",
        context:
          "The manual adds the practical rules: cross tracks quickly without stopping on them; if traffic ahead means you would have to stop, stop before the tracks, not on them; if a train has passed, wait until it is well down the line or the signals clear because a second train may be coming on another track; and if you get stuck, call the number on the blue sign at the crossing. Buses and hazardous materials trucks must stop at every crossing, which is one reason to leave extra room behind them.",
        trap:
          "Closer is not safer. Under 15 feet puts your hood inside the train's overhang.",
        excerptKey: "code-railroad-stop-15-50",
        sourceLabel: "SC Code Section 56-5-2710 - Obedience to signal indicating approach of train",
        sourceUrl: C5,
      },
      {
        id: "sc_s3_15",
        topic: "safety",
        question: "You are towing a trailer and it begins to sway from side to side. What does the manual say to do?",
        choices: [
          "Brake firmly to bring it under control",
          "Accelerate to pull the trailer straight",
          "Steer straight and reduce speed gradually without braking",
          "Turn the wheel sharply against the sway",
        ],
        correctIndex: 2,
        explanation:
          "Hold the wheel straight, ease off the throttle and slow gradually, and do not brake or speed up. Once stopped safely off the road, check the load: sway usually means the trailer is not loaded heavier at the front.",
        context:
          "The trailering chapter gives numbers the test can ask: 60 percent of the cargo weight goes in the front half of the trailer and 40 in the back; the maximum recommended speed for most vehicle-trailer combinations is 55 mph; and a trailer combination needs much more room to stop, pass and turn. When backing a trailer, keep your hand at the bottom of the wheel and move it in the direction you want the trailer to go.",
        trap:
          "Braking while a trailer is swaying is what turns a sway into a jackknife. Speed comes off gently.",
        excerptKey: "trailer-sway",
        sourceLabel: "SC Driver's License Manual - Section 11 Loading a Trailer (p. 11-10)",
        sourceUrl: pg(135),
      },
      {
        id: "sc_s3_16",
        topic: "impairment",
        question: "At what blood alcohol concentration is an adult driver in South Carolina guilty of driving with an unlawful alcohol concentration (DUAC), regardless of how they appear to be driving?",
        choices: ["0.05 percent", "0.08 percent", "0.10 percent", "0.15 percent"],
        correctIndex: 1,
        explanation:
          "Section 56-5-2933 makes it an offense to drive with an alcohol concentration of 0.08 percent or more, no proof of impaired driving required. The manual does not print this number; it only says you can be convicted of impaired driving at 0.05 or lower when drugs are involved.",
        context:
          "South Carolina has two alcohol offenses: DUI under Section 56-5-2930, which is driving while materially and appreciably impaired at any BAC, and DUAC at 0.08 or more. Both carry the same first-offense penalty of a $400 fine or 48 hours to 30 days in jail, rising with the BAC, plus ADSAP enrollment and an ignition interlock. Separately, 0.15 or more triggers the immediate administrative suspension, and under-21 drivers are suspended at 0.02.",
        trap:
          "0.05 is the figure the manual mentions, but as the level at which you can STILL be convicted of DUI with drugs on board. The per se limit is 0.08.",
        excerptKey: "code-duac-0-08",
        sourceLabel: "SC Code Section 56-5-2933 - Driving with an unlawful alcohol concentration",
        sourceUrl: C5,
        commonlyMissed: true,
      },
      {
        id: "sc_s3_17",
        topic: "signals",
        question: "You are stopped at a red light on a one-way street and want to turn left onto another one-way street. No sign prohibits turns on red. What does South Carolina law allow?",
        choices: [
          "Left on red is never permitted in South Carolina",
          "You may turn left after stopping and yielding, because both streets are one-way",
          "You may turn left without stopping if the cross street is clear",
          "You may turn left only if a police officer waves you through",
        ],
        correctIndex: 1,
        explanation:
          "Section 56-5-970(C)(3) allows a left turn on a steady red from a one-way street into a one-way street, on the same terms as a right on red: stop first, then yield to pedestrians and other traffic. A sign can prohibit it.",
        context:
          "The manual describes only the right turn on red, but it does not say left on red is forbidden, and the Code is explicit. Both turns share the same mechanics: stop behind the line or before the crosswalk, look, yield, then turn cautiously. Neither is available against a red arrow pointing your way.",
        trap:
          "Because the manual mentions only the right turn, learners assume left on red is banned. The statute allows it between one-way streets.",
        excerptKey: "code-left-on-red",
        sourceLabel: "SC Code Section 56-5-970 - Traffic-control signal legend",
        sourceUrl: C5,
      },
      {
        id: "sc_s3_18",
        topic: "sharing",
        question: "A slow-moving vehicle displays an orange and red triangle on its back. What does the triangle tell you?",
        choices: [
          "The vehicle is carrying hazardous materials",
          "The vehicle is wider than one lane",
          "The vehicle is a student driver",
          "The vehicle travels at less than 25 mph",
        ],
        correctIndex: 3,
        explanation:
          "The fluorescent orange and red triangle marks farm equipment, construction equipment and animal-drawn vehicles that travel under 25 mph. Slow down early and pass only when it is clearly safe.",
        context:
          "The manual's rural section warns that farm machinery operators usually cannot hear you coming because of engine noise, that animal-drawn vehicles and riders have the same right to the road as you, and that you should never honk or rev the engine near animals because it can spook them into a collision. Expect farm vehicles to turn left into fields and driveways without much warning.",
        trap:
          "Hazardous materials are marked with diamond-shaped placards, not a triangle.",
        excerptKey: "slow-moving-triangle",
        sourceLabel: "SC Driver's License Manual - Section 10 Slow-Moving Vehicles (p. 10-15 to 10-16)",
        sourceUrl: pg(124),
      },
      {
        id: "sc_s3_19",
        topic: "rules",
        question: "You want to make a U-turn on a two-lane road just before the crest of a hill. May you?",
        choices: [
          "Yes, if you signal for 100 feet",
          "Yes, U-turns are legal anywhere outside a business district",
          "No, if approaching drivers cannot see you from 500 feet in either direction",
          "No, U-turns are never legal on two-lane roads",
        ],
        correctIndex: 2,
        explanation:
          "Section 56-5-2140 bans turning around on a curve or near the crest of a grade where a driver approaching from either direction could not see you within 500 feet. Elsewhere a U-turn is allowed when it can be made safely without interfering with traffic.",
        context:
          "The 500-foot sight distance shows up three times in South Carolina law: the U-turn rule, the distance at which you dim high beams for oncoming traffic, and the distance at which weather that hides people and vehicles ahead makes headlights compulsory. The manual's own U-turn advice is to use a three-point turn only when the road is too narrow for a U-turn and you cannot go around the block.",
        trap:
          "Signaling does not cure a blind turn. The rule is about whether other drivers can SEE you, not whether you warned them.",
        excerptKey: "code-u-turn-500",
        sourceLabel: "SC Code Section 56-5-2140 - Limitations on turning around",
        sourceUrl: C5,
      },
      {
        id: "sc_s3_20",
        topic: "licensing",
        question: "A 16-year-old has held a conditional license for a year with no traffic offenses and no at-fault collisions. How do they get full driving privileges?",
        choices: [
          "Visit an SCDMV branch and retake the skills test",
          "Pay $25 for a new license card",
          "Nothing at a branch; the SCDMV mails a sleeve to wrap around the license",
          "Wait until age 17 regardless",
        ],
        correctIndex: 2,
        explanation:
          "Full privileges arrive at 17, or earlier after one clean year on a conditional or special restricted license. No branch visit is needed: the SCDMV mails a sleeve that must be kept around the license to show the restrictions are lifted.",
        context:
          "A traffic conviction or an at-fault crash while on the restricted license postpones the removal of restrictions by twelve months from that date, or until age 17. The $25 fee belongs to a different transaction, the special restricted license with a waiver, which a 16-year-old can get with letters from a parent and from a school, employer or activity to drive alone until midnight.",
        trap:
          "The skills test was passed to get the conditional license. Full privileges are earned by time and a clean record, not by testing again.",
        excerptKey: "license-sleeve",
        sourceLabel: "SC Driver's License Manual - Section 1 Regular Driver's License (p. 1-10)",
        sourceUrl: pg(14),
      },
      {
        id: "sc_s3_21",
        topic: "safety",
        question: "Driving on a two-lane road at night, you come up behind another vehicle. When must you switch to low beams?",
        choices: [
          "When within 500 feet of the vehicle ahead",
          "When within 200 feet of the vehicle ahead",
          "Only when the driver ahead flashes their lights",
          "Only if the vehicle ahead is a motorcycle",
        ],
        correctIndex: 1,
        explanation:
          "Low beams when following within 200 feet; low beams within 500 feet of an oncoming vehicle. Both are in the manual and in Section 56-5-4780, and failing to dim costs two points.",
        context:
          "The two numbers are easy to swap. 500 is the oncoming distance, 200 the following distance. High beams are otherwise the default at night because they show twice as much road. In fog, rain and snow use low beams regardless, since high beams reflect back and reduce what you can see.",
        trap:
          "500 feet is for ONCOMING traffic. Behind another car the trigger is closer, 200 feet, because your beams hit their mirrors.",
        excerptKey: "low-beams-200-feet",
        sourceLabel: "SC Driver's License Manual - Section 11 Night Driving (p. 11-2)",
        sourceUrl: pg(127),
        commonlyMissed: true,
      },
      {
        id: "sc_s3_22",
        topic: "parking",
        question: "You park facing uphill on a street with a curb. Which way do the front wheels go?",
        choices: [
          "Toward the curb",
          "Straight ahead with the parking brake set",
          "Away from the curb, so the back of the front tire rests against it",
          "Toward the curb, but only on a one-way street",
        ],
        correctIndex: 2,
        explanation:
          "Uphill with a curb, turn the wheels toward the center of the street so that if the car rolls back the front tire catches on the curb. Set the parking brake, leave it in park or in first or reverse for a manual, and turn off the engine.",
        context:
          "The three-case rule again: downhill, wheels right toward the curb, with or without a curb; uphill with a curb, wheels away from the curb; uphill without a curb, wheels right so the car rolls off the road rather than into traffic if the brakes fail. The exception the manual notes is parking on the left side of a one-way street, where \"right\" and \"toward the curb\" are no longer the same thing.",
        trap:
          "Toward the curb is the downhill answer. Uphill with a curb is the one case where the wheels point away from it.",
        excerptKey: "hill-parking",
        sourceLabel: "SC Driver's License Manual - Section 7 Parking on Hills (p. 7-13)",
        sourceUrl: pg(88),
      },
      {
        id: "sc_s3_23",
        topic: "emergencies",
        question: "Your engine suddenly dies while you are driving at 50 mph. What should you expect and do?",
        choices: [
          "The brakes stop working; use the parking brake immediately",
          "Steering becomes harder but still works; grip the wheel, brake with steady pressure and pull off the road",
          "The car will stop by itself within a few feet",
          "Shift into park to stop the car quickly",
        ],
        correctIndex: 1,
        explanation:
          "With the engine off, power steering and power brake assistance fade, so the wheel is heavy and the pedal firm, but both still work. Hold the wheel firmly, look for an escape path, brake with steady pressure rather than hard, and pull off the roadway before trying a restart.",
        context:
          "The manual's other malfunction drills: for a brake failure, apply the parking brake slowly to avoid locking the rear wheels, and if that fails turn off the engine and find a safe place to stop; for a stuck accelerator, turn off the engine and shift to neutral; for a blowout, grip the wheel, hold straight and slow gradually without braking. In every case, get off the road, use the flashers, and do not keep driving a vehicle with a serious fault.",
        trap:
          "Shifting to park at speed can wreck the transmission and does nothing useful. Brake and steer.",
        excerptKey: "brake-failure",
        sourceLabel: "SC Driver's License Manual - Section 9 Vehicle Malfunctions (p. 9-3 to 9-5)",
        sourceUrl: pg(107),
      },
      {
        id: "sc_s3_24",
        topic: "rightOfWay",
        question: "A car ahead of you at an intersection has its right turn signal on. You are waiting to pull out from a side road on its right. What does the manual advise?",
        choices: [
          "Pull out; the signal means the car is turning before it reaches you",
          "Wait until the car actually begins its turn, because the signal may be left on from an earlier turn or meant for a later one",
          "Flash your lights to confirm the turn, then go",
          "Pull out only if the car has slowed down",
        ],
        correctIndex: 1,
        explanation:
          "The manual warns not to turn into a lane just because an approaching vehicle has a signal on. The driver may be turning after passing you, or may have forgotten to cancel a signal from an earlier turn. Wait for the turn to begin.",
        context:
          "The same caution appears in the motorcycle section, where turn signals often do not self-cancel. It is part of a broader theme in the intersections chapter: do not rely on other road users to obey signs and signals, never assume another driver will give you space, and look left, right and left again before entering any intersection, even on a fresh green.",
        trap:
          "A signal is a statement of intent, not a guarantee. The manual's rule is to trust the movement, not the light.",
        excerptKey: "turn-signal-trust",
        sourceLabel: "SC Driver's License Manual - Section 7 Intersections (p. 7-5)",
        sourceUrl: pg(80),
      },
      {
        id: "sc_s3_25",
        topic: "signs",
        question: "A blue sign at a railroad crossing shows a telephone number and a crossing ID. When would you use it?",
        choices: [
          "If your vehicle gets stuck on the tracks",
          "To report a train running late",
          "To request that the gates be raised",
          "To report graffiti on the crossbuck",
        ],
        correctIndex: 0,
        explanation:
          "The blue emergency notification sign carries the number to call and the crossing information to give if your vehicle stalls or gets stuck on the tracks. Get everyone out first, then call.",
        context:
          "The manual's crossing checklist: the round yellow RR sign warns of a crossing ahead; the white crossbuck marks it; a number-of-tracks sign may hang beneath it but not always; stop 15 to 50 feet from the rail when a train is coming or a signal is on; never drive around a gate; cross quickly without stopping on the rails; and if you must stop for traffic on the far side, stop before the tracks.",
        trap:
          "It is an emergency line for people in danger, not a customer service number for the railroad.",
        excerptKey: "stop-before-tracks",
        sourceLabel: "SC Driver's License Manual - Section 6 Railroad Crossing Warning Signs (p. 6-7)",
        sourceUrl: pg(66),
      },
      {
        id: "sc_s3_26",
        topic: "sharing",
        question: "Under South Carolina law, who must wear a helmet on a motorcycle or moped?",
        choices: [
          "Every rider and passenger",
          "Riders and passengers under 21",
          "Riders under 18 only",
          "Nobody; helmets are optional at every age",
        ],
        correctIndex: 1,
        explanation:
          "Section 56-5-3660 requires an approved helmet with a chin or neck strap and reflectors on both sides for anyone under 21 operating or riding on a two-wheeled motorized vehicle. Adults 21 and over are not required to wear one.",
        context:
          "Helmets are not a car driver's rule, but the test draws on the whole manual and the Code. The car driver's motorcycle duties are in the manual: give a full lane, keep 4 seconds back and more in the wet, check blind spots because motorcycles are small, look carefully before turning left, do not trust a flashing signal, and remember scooters and mopeds are much slower than motorcycles.",
        trap:
          "The cut-off is 21, the same age that appears in the GDL supervision rules, not 18.",
        excerptKey: "code-helmet-under-21",
        sourceLabel: "SC Code Section 56-5-3660 - Helmets must be worn by operators and passengers under age twenty-one",
        sourceUrl: C5,
      },
      {
        id: "sc_s3_27",
        topic: "speed",
        question: "What is the maximum speed limit on a road posted as a multilane divided primary highway in South Carolina?",
        choices: ["55 mph", "60 mph", "65 mph", "70 mph"],
        correctIndex: 1,
        explanation:
          "Section 56-5-1520 gives 60 mph for multilane divided primary highways where signs giving notice of that limit are posted. Seventy is reserved for the interstate system and other freeways.",
        context:
          "The five defaults: 70 interstate and freeway where posted, 60 multilane divided primary where posted, 55 other locations, 40 unpaved, 30 urban district. Speeding fines in the Code start at $15 for up to 10 over and reach $200 or 30 days for more than 25 over, and points run 2, 4 and 6 for up to 10 over, 10 to 25 over, and 25 or more over.",
        trap:
          "65 is a limit in neighboring states. South Carolina's statute jumps from 60 to 70.",
        excerptKey: "code-speed-70-60",
        sourceLabel: "SC Code Section 56-5-1520 - General rules as to maximum speed limits",
        sourceUrl: C5,
      },
      {
        id: "sc_s3_28",
        topic: "safety",
        question: "You are driving through a work zone at night. No workers are present. What does the manual expect?",
        choices: [
          "Resume the normal speed limit, since nobody is working",
          "Reduce your speed anyway and use extreme caution",
          "Use high beams to see the barriers",
          "Pass slower vehicles to clear the zone quickly",
        ],
        correctIndex: 1,
        explanation:
          "The manual says to reduce speed in every work zone even with no workers present, because narrow lanes and rough pavement are hazards on their own, and to use extreme caution at night whether or not workers are there.",
        context:
          "The work zone chapter's list: reduce speed, increase following distance, watch traffic around you and be ready to stop; adjust lane position to leave room for workers and equipment; obey the signs until you see End Road Work; expect delays and leave early; avoid work zones when you can. Passing in a work zone where it would endanger a worker is prohibited by Section 56-5-1895, and endangering a worker is $500 to $1,000 and two points.",
        trap:
          "\"No workers present\" is exactly the situation the manual anticipates and still says slow down.",
        excerptKey: "work-zone-no-workers",
        sourceLabel: "SC Driver's License Manual - Section 11 Work Zones (p. 11-3)",
        sourceUrl: pg(128),
      },
      {
        id: "sc_s3_29",
        topic: "rules",
        question: "Under what conditions does South Carolina law allow you to pass another vehicle on its right?",
        choices: [
          "Whenever the vehicle ahead is driving below the speed limit",
          "Only on interstates",
          "Never; passing on the right is illegal in South Carolina",
          "When the vehicle ahead is turning left, or on a road wide enough for two lines of traffic in your direction, and never by leaving the pavement",
        ],
        correctIndex: 3,
        explanation:
          "Section 56-5-1850 permits a pass on the right in two cases: the vehicle ahead is making or about to make a left turn, or the pavement is wide enough for two or more lines of vehicles moving lawfully in your direction. Even then it must be safe, and it may never be done by driving off the roadway.",
        context:
          "The manual's blunt version is that the left-most lane is for passing and the shoulder is never a passing lane. The Code also requires slower vehicles to keep right, bars driving in the far left lane of an interstate except to pass, and tells a driver being passed on a two-lane road to give way to the right and not speed up until the pass is complete.",
        trap:
          "Slow driving by the car ahead is not one of the two conditions. Impatience is not a legal basis.",
        excerptKey: "code-pass-on-right",
        sourceLabel: "SC Code Section 56-5-1850 - When passing on the right is permitted",
        sourceUrl: C5,
      },
      {
        id: "sc_s3_30",
        topic: "licensing",
        question: "How long is a South Carolina beginner's permit valid, and what does it cost?",
        choices: [
          "6 months, $2.00",
          "12 months, $2.50",
          "24 months, $10",
          "Until age 18, free",
        ],
        correctIndex: 1,
        explanation:
          "Section 56-1-50 issues the permit for not more than twelve months at a fee of $2.50, renewable for further twelve-month periods. The knowledge test itself is $2.00. The permit is not valid until the holder signs it.",
        context:
          "The Code lets the SCDMV refuse to renew a permit if the examiner believes the applicant has not made a real effort to pass the road test. The permit must be in the driver's immediate possession while driving, and the supervising driver must sit beside the permit holder (or be within safe viewing distance for a motorcycle or moped). Students in a school or licensed driving-school course do not need a permit while driving with the instructor.",
        trap:
          "The 180-day holding period is how long you must KEEP the permit before testing, not how long it lasts. It lasts a year.",
        excerptKey: "code-permit-twelve-months",
        sourceLabel: "SC Code Section 56-1-50 - Beginner's permit; hours and conditions of vehicle operation; renewal and fee",
        sourceUrl: C1,
      },
      {
        id: "sc_s3_31",
        topic: "impairment",
        question: "A driver has consumed one drink and drives home carefully. According to the manual, what is the risk?",
        choices: [
          "None; one drink is below the legal limit",
          "Impairment starts with the first drink, and with one or more drinks in the bloodstream the driver could be arrested for DUI",
          "Only a warning is possible below 0.08",
          "Only a civil fine applies below 0.08",
        ],
        correctIndex: 1,
        explanation:
          "The manual says impairment begins with the first drink and that a person with one or more drinks in the bloodstream could be arrested for driving under the influence. DUI in South Carolina is about impaired faculties, not a number.",
        context:
          "Two offenses exist: DUI, which is driving while materially and appreciably impaired by alcohol or drugs at any concentration, and DUAC, which is driving at 0.08 or more regardless of impairment. The manual adds that you can be convicted at 0.05 or lower when drugs are combined with alcohol. About 40 percent of fatal crashes involve alcohol or drugs, and the manual's advice is simply never to drive after drinking and never to let a friend do so.",
        trap:
          "\"Below the limit\" only answers the DUAC question. DUI needs no number, just impairment.",
        excerptKey: "first-drink",
        sourceLabel: "SC Driver's License Manual - Section 3 Effects of Alcohol and Other Impairing Drugs (p. 3-7)",
        sourceUrl: pg(38),
      },
      {
        id: "sc_s3_32",
        topic: "signals",
        question: "A pedestrian signal shows the word WALK. What does that mean for you as a driver?",
        choices: [
          "Pedestrians are prohibited from crossing",
          "Pedestrians may cross in that direction and every driver must give them the right-of-way",
          "Pedestrians may cross only if no cars are turning",
          "The vehicle signal is about to turn red",
        ],
        correctIndex: 1,
        explanation:
          "Section 56-5-990 says WALK lets pedestrians cross in the direction of the signal and requires drivers of all vehicles to give them the right-of-way. WAIT means no pedestrian may start crossing, though anyone already in the street continues to the sidewalk or island.",
        context:
          "Turning drivers meet WALK signals constantly: a green light or green arrow for you can coincide with a WALK for the crosswalk you turn across, and the Code says turning traffic yields to pedestrians lawfully in the adjacent crosswalk. The manual adds that you must yield to pedestrians in the intersection even on a green and be ready to yield when turning right on red.",
        trap:
          "Your green does not cancel their WALK. Both are on at the same time by design, and the pedestrian wins.",
        excerptKey: "code-walk-signal",
        sourceLabel: "SC Code Section 56-5-990 - Pedestrian walk and wait signals",
        sourceUrl: C5,
      },
      {
        id: "sc_s3_33",
        topic: "rules",
        question: "On a long downhill grade, a driver shifts into neutral to save fuel. What does the Code say?",
        choices: [
          "It is allowed in vehicles with automatic transmissions",
          "It is allowed below 35 mph",
          "It is prohibited; you may not coast downhill with the gears in neutral",
          "It is required to protect the brakes",
        ],
        correctIndex: 2,
        explanation:
          "Section 56-5-3840 forbids coasting downhill with the transmission in neutral, and commercial drivers may not coast with the clutch disengaged either. In neutral you lose engine braking and the ability to accelerate out of trouble.",
        context:
          "The manual's hill advice is the opposite of coasting: slow down before starting down a grade, especially when towing, and use gears to hold speed. A related rule for parking on a hill is to leave a manual car in first or reverse so the engine holds it. And for the exam, remember the winter chapter's warning that if you stop on a snowy hill you may not get going again.",
        trap:
          "Fuel saving is not a defense. The law is written for control, and neutral gives up control.",
        excerptKey: "code-coasting",
        sourceLabel: "SC Code Section 56-5-3840 - Coasting prohibited",
        sourceUrl: C5,
      },
      {
        id: "sc_s3_34",
        topic: "sharing",
        question: "You are parked at the curb on a city street and about to open the driver's door. What does the manual tell you to check first?",
        choices: [
          "That the parking meter has time left",
          "The sides and rear of the vehicle for bicyclists",
          "That your headlights are off",
          "The sidewalk for pedestrians only",
        ],
        correctIndex: 1,
        explanation:
          "Check to the sides and rear for bicyclists before opening the door. Section 56-5-3822 makes it an offense to open a door into traffic when it is not reasonably safe, or to leave it open longer than needed to load or unload.",
        context:
          "The bicycle chapter is long because bicycles are vehicles in South Carolina with the same rights and duties as cars. Points that reach the test: yield to bicyclists at intersections, do not drive or park in a bike lane except to enter a driveway or in an emergency, do not brake suddenly near a cyclist, avoid the horn near them, watch for children riding on sidewalks who may enter the road, and remember wet, sandy or gravelly surfaces affect bikes far more than cars.",
        trap:
          "A mirror check alone misses a cyclist already alongside the rear door. The manual says sides AND rear.",
        excerptKey: "door-check-bicyclists",
        sourceLabel: "SC Driver's License Manual - Section 10 Bicyclists (p. 10-5)",
        sourceUrl: pg(114),
      },
      {
        id: "sc_s3_35",
        topic: "safety",
        question: "According to the manual, roughly how far does a loaded truck need to stop from 55 mph in ideal conditions, and how does that compare with a car?",
        choices: [
          "About 158 feet, the same as a car",
          "About 200 feet, slightly more than a car",
          "About 335 feet, more than one and a half times a car's stopping distance",
          "About 500 feet, twice a car's stopping distance",
        ],
        correctIndex: 2,
        explanation:
          "The manual's figure is a minimum of 335 feet for a loaded truck with good brakes at 55 mph, more than one and a half times what a car needs. That is why you never cut in front of a truck or pull onto a road ahead of one.",
        context:
          "The other numbers in the same pages: a car's braking distance alone at 50 mph is about 158 feet, perception and reaction each take about three-quarters of a second to one second, a truck's rear blind spot extends up to 200 feet, and trucks climb and descend steep hills at about 35 mph in the right lane. After passing a truck, wait until its whole front appears in your rearview mirror before returning to the lane, and keep your speed up once you are there.",
        trap:
          "158 feet is the CAR braking figure from the stopping-distance section. The truck number is more than double.",
        excerptKey: "truck-stopping-335",
        sourceLabel: "SC Driver's License Manual - Section 10 Front No Zones (p. 10-9)",
        sourceUrl: pg(118),
      },
    ],
  },
];
