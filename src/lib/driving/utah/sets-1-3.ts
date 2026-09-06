import type { DrivingTestSet } from "../types";

// Every fact below was checked against the Utah Driver Handbook, cover-dated
// 2026-2027 and published by the Driver License Division of the Utah Department
// of Public Safety, plus the sections of Utah Code Title 41 Chapter 6a that
// carry rules the handbook states incompletely or not at all, plus five
// dld.utah.gov pages for the test format and the graduated licensing stages.
//
// Utah's handbook is 104 printed pages and is an AAMVA model manual, so it is
// fuller than most state books: it prints the speed table, the no-parking
// distances, the point schedule and the five-way school-bus matrix. The gaps
// that remain matter, because the Division writes a 50-question closed-book
// test from it and the book never states its own length.
//
// 1. The handbook gives the pass mark (80 percent) and the rough duration, and
//    never says how many questions there are. The learner permit page does:
//    50, closed book.
// 2. The handbook prints the youthful-driver table for PERMIT holders. The
//    midnight-to-5am and immediate-family restrictions that bite AFTER
//    licensing are on the teen driver restrictions page.
// 3. The handbook says signals are required "for two seconds before turning".
//    Section 41-6a-804(1)(c) is where that two seconds is law, and subsection
//    (5), added in the 2026 session, is where the roundabout exemption lives.
//    The handbook has not caught up: its roundabout paragraph is silent and its
//    2026 laws page notes the change without repeating it in the rules chapter.
// 4. The three-foot passing rule is stated in the handbook. WHICH road users it
//    protects is only in Section 41-6a-706.5, which was re-enacted in 2026.
// 5. The 90-second dead-red allowance appears in the handbook as a note under
//    motorcycles; its terms, including that it is an affirmative defense rather
//    than a right, are in Section 41-6a-305(7).
//
// One genuine conflict is flagged where it arises. The handbook offers the
// left-on-red-from-one-way-to-one-way movement only as a way out of a red
// ARROW that will not change, while Section 41-6a-305(4)(c)(i)(A) allows it
// from any steady circular red after a stop. Every question here is built on
// the stranded-red-arrow scenario the handbook itself describes, so both
// readings give the same answer. See the research note.
//
// Questions are original. Explanations, context notes and trap notes are
// written from scratch; the deep link is there so the learner reads the
// Division's own authoritative wording on the government's site.
const HB = "https://dld.utah.gov/wp-content/uploads/Driver-Handbook-2026.pdf";
/** Printed page number to a PDF page anchor - the book's page 1 is PDF page 11. */
const hb = (page: number) => `${HB}#page=${page + 10}`;
const uca = (s: string) => `https://le.utah.gov/xcode/Title41/Chapter6A/41-6a-S${s}.html`;
const PERMIT = "https://dld.utah.gov/learner-permit/";
const TEEN = "https://dld.utah.gov/teen-driver-restrictions/";
const TRENDS = "https://dld.utah.gov/traffic-safety-and-trends-exam/";
const POINTS = "https://dld.utah.gov/points-system/";

export const utahSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Utah Basics",
    difficulty: "starter",
    description:
      "The rules you meet on your first drive in Utah: what the shapes and colors mean, who goes first, and the handful of numbers the Driver License Division's 50-question test expects you to know cold.",
    questions: [
      {
        id: "ut_s1_01",
        topic: "signs",
        question:
          "A red eight-sided sign faces you at an intersection. What does Utah require?",
        choices: [
          "Slow to walking pace and roll through if nothing is coming",
          "Stop only if another vehicle is approaching",
          "Come to a complete stop, then yield before you go",
          "Yield to the wider road and keep moving",
        ],
        correctIndex: 2,
        explanation:
          "The octagon is reserved for STOP and nothing else. Utah's handbook is blunt about it: a rolling stop is not a stop, and once you have stopped you still have to give way before you move off.",
        context:
          "Utah teaches signs by shape and color first, because the shape is readable in glare, in snow, or in a language you do not read. Eight sides means stop, a downward triangle means yield, a yellow diamond warns of something ahead, and orange means people are working on the road. The Code adds where to stop: the marked stop line, or the near edge of the crosswalk, or the point where you can actually see the cross traffic.",
        trap: "An empty cross street changes nothing. The stop is required by the sign, not by the traffic.",
        excerptKey: "complete-stop-situations",
        sourceLabel: "Utah Driver Handbook - Section 8.H Stopping",
        sourceUrl: hb(35),
      },
      {
        id: "ut_s1_02",
        topic: "signals",
        question:
          "You are stopped at a steady red light in Utah and want to turn right. What does the handbook allow?",
        choices: [
          "Turn after a complete stop, unless a sign says otherwise",
          "Turn without stopping if the way is clear",
          "Turn only when a green arrow appears",
          "Turn only where a sign expressly permits it",
        ],
        correctIndex: 0,
        explanation:
          "Right on red is Utah's default, not a special permission. Two conditions ride with it: the stop has to be complete, and any sign forbidding the turn beats the default.",
        context:
          "Red means stop and stay stopped until the light changes, with narrow movements carved out of it. Right on red is allowed after a full stop unless posted otherwise. Having stopped, you still yield to everything lawfully moving through the intersection and to any pedestrian in the adjacent crosswalk.",
        trap: '"Clear enough to go" is not the test. Without the stop, the turn is unlawful even on an empty street at 3 a.m.',
        excerptKey: "right-on-red",
        sourceLabel: "Utah Driver Handbook - Section 9.H Traffic Signals",
        sourceUrl: hb(46),
      },
      {
        id: "ut_s1_03",
        topic: "rightOfWay",
        question:
          "Two drivers reach a four-way stop at exactly the same moment, at right angles to each other. Who goes first?",
        choices: [
          "Whoever signals first",
          "The driver going straight, ahead of the one turning",
          "The driver on the left, who is further from the crossing traffic",
          "The driver on the right",
        ],
        correctIndex: 3,
        explanation:
          "Utah's tie-breaker is the driver on the right. It only comes into play when arrival really was simultaneous, because whoever clearly got there first goes first.",
        context:
          "The handbook sets right of way out as a list of people you give way to, and the intersection entries head it: the driver who was at the intersection before you, then the driver on your right if you arrived together. Underneath sits a warning the book repeats - never think that you have the right of way, because a rule about who should go is not a promise about who will.",
        trap: "Going straight does not outrank turning at a four-way stop. Order of arrival decides it, and the right-hand rule only breaks a tie.",
        excerptKey: "yield-list",
        sourceLabel: "Utah Driver Handbook - Section 9.J Yielding Right-of-Way",
        sourceUrl: hb(50),
        commonlyMissed: true,
      },
      {
        id: "ut_s1_04",
        topic: "rules",
        question: "What following distance does the Utah handbook teach?",
        choices: [
          "Two seconds",
          "Three seconds",
          "Four seconds",
          "One car length for every 10 mph",
        ],
        correctIndex: 0,
        explanation:
          "Utah teaches a two-second rule, not the three or four seconds several neighboring states print. You pick a fixed object ahead, start counting when the vehicle in front passes it, and you should still be counting when you reach it.",
        context:
          "Two seconds is the floor, not the target. The handbook tells you to add time in bad weather or poor visibility, repeats the same two seconds for freeway driving, and asks for at least two seconds behind a motorcycle. Section 41-6a-711 makes the two seconds an actual legal minimum rather than advice, with an exception only for funeral processions and traffic already crawling below 35 mph.",
        trap: "Three seconds is the answer in a lot of other states' handbooks. Utah's own figure is two.",
        excerptKey: "two-second-rule",
        sourceLabel: "Utah Driver Handbook - Section 6 Safe Driving Tips",
        sourceUrl: hb(26),
        commonlyMissed: true,
      },
      {
        id: "ut_s1_05",
        topic: "speed",
        question:
          "You are driving through a Utah residential neighborhood with no speed limit sign anywhere. What is the limit?",
        choices: ["25 mph", "30 mph", "35 mph", "45 mph"],
        correctIndex: 0,
        explanation:
          "Unless a sign says otherwise, a business or residential area in Utah is 25 mph. The absence of a sign is not the absence of a limit.",
        context:
          "The handbook prints a short ladder: 20 mph past a school during recess or opening and closing hours, 25 mph in any business or residential area, 55 mph on major highways as posted, and 65 to 80 on rural interstates. Section 41-6a-601 fills the silence everywhere else with 55 mph, and lays the basic speed law over the whole thing - you may never drive faster than is reasonable and prudent for the conditions in front of you.",
        trap: "A missing sign is not a guess. Utah fills the gap with a statutory number and holds you to it.",
        excerptKey: "speed-25-business",
        sourceLabel: "Utah Driver Handbook - Section 9.E Speed",
        sourceUrl: hb(44),
        commonlyMissed: true,
      },
      {
        id: "ut_s1_06",
        topic: "signs",
        question: "A downward-pointing red and white triangle faces you. What must you do?",
        choices: [
          "Come to a full stop, then proceed",
          "Keep your speed, since the sign is only advisory",
          "Slow down and give way, stopping if that is what it takes",
          "Sound your horn before entering",
        ],
        correctIndex: 2,
        explanation:
          "A yield sign means the other traffic goes first. There is no automatic stop, but if no safe gap appears then stopping is exactly what yielding requires.",
        context:
          "The triangle is Utah's only three-sided sign, so its shape alone identifies it. Section 41-6a-902 spells out the duty: slow to a speed reasonable for the conditions, stop if safety needs it, and give way to any vehicle already in the intersection or approaching closely enough to be an immediate hazard. A collision after passing a yield sign without stopping is treated as evidence that you failed to yield.",
        trap: 'Yield is not "stop", but it is also not "carry on regardless". No gap means you wait for one.',
        excerptKey: "yield-sign-meaning",
        sourceLabel: "Utah Driver Handbook - Section 9.I Traffic Signs",
        sourceUrl: hb(48),
      },
      {
        id: "ut_s1_07",
        topic: "sharing",
        question:
          "A school bus stops ahead of you on an ordinary two-lane Utah street and switches on its alternating flashing red lights. What must you do?",
        choices: [
          "Stop immediately before reaching the bus, and stay stopped until the red lights go out",
          "Slow to 20 mph and pass with care",
          "Stop only if you are following the bus, not if you are meeting it",
          "Stop 20 feet back and then creep past once children are clear",
        ],
        correctIndex: 0,
        explanation:
          "Flashing red on a two-lane road stops traffic in both directions. Utah does not set a distance for it: the rule is that you stop before you reach the bus and stay there until the lights stop flashing.",
        context:
          "Utah's school-bus rule turns on the shape of the road. Two lanes, or four lanes with no median, and every direction stops. On a divided highway, or on a road of five or more lanes with a shared center turn lane, only the traffic behind the bus has to stop. Amber lights are the warning ahead of that - you slow to school-zone speed and may still pass with care.",
        trap: "There is no 20-foot figure in Utah. That number belongs to other states, and creeping forward while the reds are still flashing is the violation.",
        excerptKey: "school-bus-stop",
        sourceLabel: "Utah Driver Handbook - Section 8.H School Bus Stopping",
        sourceUrl: hb(36),
        commonlyMissed: true,
      },
      {
        id: "ut_s1_08",
        topic: "impairment",
        question:
          "You are 17 and hold a Utah learner permit. How much alcohol may be in your body while you drive?",
        choices: [
          "Up to 0.01",
          "Up to 0.02",
          "Up to 0.05, the same as an adult",
          "None at all - any measurable amount",
        ],
        correctIndex: 3,
        explanation:
          "Utah's Not-a-Drop Act sets the under-21 limit at any measurable amount. There is no allowance to sit under, and a first offense denies driving privileges for six months.",
        context:
          "For a driver 21 or over the threshold is 0.05, the lowest adult limit in the country. Under 21 the number is replaced by a flat prohibition, and the penalty attaches even to someone who has never been issued a license. A second offense within ten years costs two years or the wait until the driver turns 21, whichever runs longer, and reinstatement needs a substance-abuse assessment.",
        trap: "The 0.05 figure is the adult limit. It gives an under-21 driver nothing to work with.",
        excerptKey: "not-a-drop",
        sourceLabel: "Utah Driver Handbook - Section 10.B 21 and Under",
        sourceUrl: hb(52),
      },
      {
        id: "ut_s1_09",
        topic: "licensing",
        question: "How old must you be to apply for a Utah learner permit?",
        choices: ["15", "16", "17", "18"],
        correctIndex: 0,
        explanation:
          "The Division issues an entry-level learner permit from age 15. The license itself is a separate step and needs you to be at least 16.",
        context:
          "At 15 you take the written knowledge test and an eye test, and the permit lets you practice with a licensed parent, stepparent, foster parent, legal guardian, approved instructor or a responsible adult aged 21 or over beside you. A 16 or 17 year old has to hold a permit for six months before a license; at 19 or over the wait is 90 days unless an approved driver education course is completed instead.",
        trap: "16 is the age for the license and for a Division skills test, not for the permit.",
        excerptKey: "dld-permit-age-15",
        sourceLabel: "Utah Driver License Division - Learner Permit",
        sourceUrl: PERMIT,
      },
      {
        id: "ut_s1_10",
        topic: "parking",
        question: "How far from a fire hydrant may you park in Utah?",
        choices: [
          "No closer than 10 feet",
          "No closer than 15 feet",
          "No closer than 20 feet",
          "No closer than 30 feet",
        ],
        correctIndex: 1,
        explanation:
          "Utah's hydrant distance is 15 feet. It is one of a short list of measured distances the handbook prints outright, and the Traffic Code repeats it.",
        context:
          "The parking distances worth memorizing are 15 feet from a hydrant, 20 feet from a crosswalk, 20 feet from a fire station driveway, 30 feet from a stop sign, yield sign, flashing beacon or traffic signal, and 50 feet from the nearest rail of a railroad crossing. On the opposite side of the street from a fire station entrance the figure is 75 feet where it is signposted.",
        trap: "10 feet is the hydrant figure in several other states. Utah's is 15.",
        excerptKey: "parking-prohibited-list",
        sourceLabel: "Utah Driver Handbook - Section 8.D Parking",
        sourceUrl: hb(32),
      },
      {
        id: "ut_s1_11",
        topic: "safety",
        question: "Who has to be belted or restrained in a Utah vehicle?",
        choices: [
          "Everyone in the vehicle",
          "The driver and front-seat passengers only",
          "Everyone under 18",
          "The driver only, unless the vehicle is on a freeway",
        ],
        correctIndex: 0,
        explanation:
          "The handbook states it without qualification: everyone in the vehicle must have a fastened safety belt or a child seat. Back seat included.",
        context:
          "Children eight and under go in an approved child safety seat unless they are already 57 inches tall, and children between eight and twelve must be in an appropriate restraint or a belt. Enforcement splits by age: an officer may stop and cite you outright if anyone under 16 is unrestrained, while an unbelted occupant of 16 or over is cited only after a stop for something else.",
        trap: "A back-seat passenger is not exempt in Utah, and neither is an adult one.",
        excerptKey: "safety-belt-everyone",
        sourceLabel: "Utah Driver Handbook - Section 7.C Safety Belts",
        sourceUrl: hb(27),
      },
      {
        id: "ut_s1_12",
        topic: "signals",
        question: "You approach an intersection where a single red light is flashing. What is required?",
        choices: [
          "Slow down and proceed with caution",
          "Treat it as a broken signal and wait for it to change",
          "Yield only to traffic on your right",
          "Stop, look both ways, and go when the way is clear",
        ],
        correctIndex: 3,
        explanation:
          "A flashing red is a stop sign in light form. You come to a full stop, check both directions, and move off only when the intersection is clear.",
        context:
          "Utah lists flashing red among the situations that demand a complete stop, alongside a steady red and every stop sign. Its yellow counterpart means something different: a flashing yellow is a warning to slow down and stay ready to stop, not a requirement to halt. A flashing yellow ARROW is different again - it permits a turn once you have yielded, because the oncoming traffic is looking at a green.",
        trap: "Flashing red is not flashing yellow. Only one of the two lets you keep rolling.",
        excerptKey: "signal-flashing-red",
        sourceLabel: "Utah Driver Handbook - Section 9.H Traffic Signals",
        sourceUrl: hb(46),
      },
      {
        id: "ut_s1_13",
        topic: "speed",
        question:
          "Children are walking to school and the flashing lights on the school zone sign are operating. What speed does Utah allow?",
        choices: ["15 mph", "20 mph", "25 mph", "30 mph"],
        correctIndex: 1,
        explanation:
          "Utah's school zone figure is 20 mph. It applies while children are going to or leaving school at opening and closing hours, when the flashing lights are working, and when you pass a school building or grounds during recess.",
        context:
          "The 20 mph limit is the lowest number the handbook prints and it comes with three separate triggers, so the flashing lights are one route into it rather than the only one. The same 20 mph is what a driver drops to when a school bus shows amber warning lights. Section 41-6a-601 calls it a reduced speed school zone and makes the figure lawful speed rather than a suggestion.",
        trap: "15 mph is the school zone number in several other states. Utah's is 20.",
        excerptKey: "speed-school-20",
        sourceLabel: "Utah Driver Handbook - Section 9.E Speed",
        sourceUrl: hb(44),
      },
      {
        id: "ut_s1_14",
        topic: "emergencies",
        question:
          "An ambulance comes up behind you with siren and lights on. What does Utah require?",
        choices: [
          "Speed up to clear the intersection ahead",
          "Slow down and stay in your lane so it can choose a path",
          "Move as close as you can to the right edge of the road, clear of any intersection, and stop",
          "Stop where you are, whatever lane you are in",
        ],
        correctIndex: 2,
        explanation:
          "Utah wants you parallel to the right-hand curb or edge, clear of the intersection, and stopped until the emergency vehicle has gone past. Predictability is the whole point.",
        context:
          "Stopping inside an intersection blocks the very route the emergency vehicle needs, which is why the Code tells you to clear it first and then pull right. Once it has passed, you may not follow closer than 500 feet, you may not pass it while it is moving, and you may not stop within 500 feet of a fire engine that has stopped to answer an alarm.",
        trap: "Stopping dead in the left lane looks obedient and is not. Get right first, then stop.",
        excerptKey: "uca-emergency-pull-right",
        sourceLabel: "Utah Code 41-6a-904 - Approaching emergency vehicle",
        sourceUrl: uca("904"),
      },
      {
        id: "ut_s1_15",
        topic: "signs",
        question: "What does an orange sign with black letters or symbols tell you?",
        choices: [
          "A route change is coming up",
          "You are in or approaching a highway work zone",
          "A school zone begins here",
          "This is a temporary speed limit only",
        ],
        correctIndex: 1,
        explanation:
          "Orange is reserved for work zones in Utah, whether the sign is a diamond or a rectangle. It warns of workers, reduced speed, detours, slow machinery or a change in the road surface.",
        context:
          "A work zone is not only a construction site - the handbook includes maintenance, utility work, tree trimming and surveying. The rules that follow are strict: slow down even when nobody is visible, keep your distance, and obey the signs until you see END ROAD WORK. Courts must fine a driver who speeds in a highway construction zone at least twice the ordinary amount.",
        trap: "Yellow diamonds are general warnings. The moment the background turns orange, people are working on the road.",
        excerptKey: "work-zone-signs",
        sourceLabel: "Utah Driver Handbook - Section 9.I Work Zone Signs",
        sourceUrl: hb(49),
      },
      {
        id: "ut_s1_16",
        topic: "rules",
        question: "How long before a turn does Utah require you to signal?",
        choices: [
          "As soon as you enter the turn lane",
          "Two seconds",
          "Three seconds",
          "100 feet in town, 300 feet on a highway",
        ],
        correctIndex: 1,
        explanation:
          "Utah times its signals rather than measuring them. Two seconds before a turn, and two seconds before a lane change.",
        context:
          "Section 41-6a-804 puts it as a continuous signal for at least the last two seconds before the movement begins, so a flick of the stalk as you start to turn is too late. The handbook adds the other occasions a signal is owed: any time you pull to or from a curb, and any time you slow or stop where a following driver needs the warning. It also asks you to cancel it afterwards.",
        trap: "Signaling too early is its own fault in Utah - the handbook says do not signal too early or too late.",
        excerptKey: "signal-two-seconds",
        sourceLabel: "Utah Driver Handbook - Section 8.F Signaling",
        sourceUrl: hb(34),
      },
      {
        id: "ut_s1_17",
        topic: "rightOfWay",
        question:
          "You are waiting in an intersection on a green light to turn left. An oncoming car is close enough to be a hazard. Who yields?",
        choices: [
          "The oncoming driver, because you entered the intersection first",
          "Whoever has the shorter distance to travel",
          "Neither, since a green light gives both of you the right of way",
          "You do - the left turn yields to oncoming traffic",
        ],
        correctIndex: 3,
        explanation:
          "A green light permits the left turn; it does not protect it. Utah puts the duty on the turning driver to yield to anything approaching from the opposite direction that is close enough to be an immediate hazard.",
        context:
          "The protected version of that turn is a green ARROW, which holds the oncoming traffic for you. A solid green and a flashing yellow arrow both mean permitted, not protected. The handbook adds a warning about the opposite mistake as well: do not turn across a lane just because an oncoming vehicle is showing a turn signal, because it may be turning after it passes you or may simply have left the signal on.",
        trap: "Being in the intersection first does not transfer the duty. The left turn yields until the gap is real.",
        excerptKey: "uca-left-turn-yield",
        sourceLabel: "Utah Code 41-6a-903 - Vehicle turning left",
        sourceUrl: uca("903"),
      },
      {
        id: "ut_s1_18",
        topic: "sharing",
        question: "How much room does Utah law require when you pass a bicyclist?",
        choices: ["Two feet", "At least three feet", "Four feet", "A full lane"],
        correctIndex: 1,
        explanation:
          "Three feet is the statutory minimum. The handbook states it plainly and the Traffic Code makes driving within three feet of a bicyclist an offense.",
        context:
          "The three feet is a floor, not a target: the handbook asks you to allow as much space as possible and to slow down as you approach. The same three-foot rule protects every vulnerable user of the highway, a list that runs well past bicycles to pedestrians, road workers, skateboarders, mopeds, motorcycles, wheelchairs and people on horseback. Where the lane is too narrow, you wait rather than squeeze.",
        trap: "Three feet applies even when the bicyclist is in a marked bike lane. A painted line does not substitute for the clearance.",
        excerptKey: "bicycle-three-feet",
        sourceLabel: "Utah Driver Handbook - Section 14.A Bicycles",
        sourceUrl: hb(75),
      },
      {
        id: "ut_s1_19",
        topic: "parking",
        question: "You park parallel to a curb in Utah. How close to it must the wheels be?",
        choices: [
          "Within six inches",
          "Within 12 inches",
          "Within 18 inches",
          "Within 24 inches",
        ],
        correctIndex: 1,
        explanation:
          "Twelve inches is the figure, and both the handbook and the Traffic Code use it. Beyond that the vehicle is parked too far out.",
        context:
          "The rest of the parking discipline sits around it: park as far from moving traffic as you can, stop the engine, set the parking brake, lock the doors, and if the grade is perceptible turn the front wheels toward the curb or the side of the road. Downhill you turn the wheels toward the curb; uphill you turn them away from it, letting the front tire rest against the curb either way.",
        trap: "Twelve inches is a maximum, not a target. A car sitting 18 inches out is parked unlawfully even on an empty street.",
        excerptKey: "park-12-inches",
        sourceLabel: "Utah Driver Handbook - Section 8.D Hill Parking",
        sourceUrl: hb(33),
      },
      {
        id: "ut_s1_20",
        topic: "signals",
        question: "A green arrow lights up for your direction. What does it mean?",
        choices: [
          "You may go in any direction while the arrow shows",
          "The turn is permitted but you must yield to oncoming traffic",
          "You may proceed in the direction of the arrow, after yielding to anyone still in the intersection",
          "You must wait for a solid green before moving",
        ],
        correctIndex: 2,
        explanation:
          "A green arrow is a protected movement in the direction it points. It is not a license to plough into people who have not cleared the intersection yet, so anyone still lawfully inside it goes first.",
        context:
          "Utah asks a left-turning driver to read three different signals correctly. A green arrow is protected. A solid green is permitted, meaning you may turn once you have yielded. A flashing yellow arrow is also permitted, and it is the one people misread, because it looks like permission when the oncoming traffic is in fact looking at a green light of its own.",
        trap: "The arrow permits only the direction it points. Going straight on a green left arrow is not covered.",
        excerptKey: "signal-green-arrow",
        sourceLabel: "Utah Driver Handbook - Section 9.H Traffic Signals",
        sourceUrl: hb(45),
      },
      {
        id: "ut_s1_21",
        topic: "safety",
        question: "When does Utah require your headlights to be on?",
        choices: [
          "Only between sunset and sunrise",
          "Whenever the windshield wipers are running",
          "Any time you are outside a built-up area",
          "From sunset to sunrise, and whenever people and vehicles are not clearly visible at 1,000 feet",
        ],
        correctIndex: 3,
        explanation:
          "Utah gives two triggers, not one. The clock trigger is sunset to sunrise; the visibility trigger is whenever insufficient light or weather stops you making out people and vehicles 1,000 feet ahead.",
        context:
          "The visibility trigger is the one that catches drivers, because it fires in fog, blowing snow or heavy rain in the middle of the afternoon. The handbook repeats the same 1,000 feet as its rule of thumb - use your lights any time conditions keep you from seeing that far. Low beams, not high, are what cut glare in fog, rain or snow.",
        trap: "Waiting for the sun to go down is not the rule. A dark storm at noon triggers the same requirement.",
        excerptKey: "headlights-when",
        sourceLabel: "Utah Driver Handbook - Section 11.J Night Driving",
        sourceUrl: hb(60),
      },
      {
        id: "ut_s1_22",
        topic: "licensing",
        question: "What score do you need to pass Utah's written knowledge test?",
        choices: ["70 percent", "75 percent", "80 percent", "100 percent"],
        correctIndex: 2,
        explanation:
          "Eighty percent, which on the 50-question test means 40 correct answers. The test is not timed, though the Division reckons on 30 to 45 minutes.",
        context:
          "The permit test is closed book and drawn from the handbook. You may sit two written tests in a day, and a single permit fee covers three attempts within twelve months before you pay again. A separate exam waits further down the road: the online Traffic Safety and Trends Exam demands a perfect score, and no permanent license is issued until it is passed.",
        trap: "The 100 percent figure belongs to the Traffic Safety and Trends Exam, not to the permit test.",
        excerptKey: "written-test-format",
        sourceLabel: "Utah Driver Handbook - Section 6.A Written Knowledge Test",
        sourceUrl: hb(23),
      },
      {
        id: "ut_s1_23",
        topic: "rules",
        question: "Which lane should you normally use on a Utah multi-lane road?",
        choices: [
          "The far-right lane, unless you are passing or the lane is blocked",
          "Whichever lane is moving fastest",
          "The center lane, to leave room on both sides",
          "The left lane, so that merging traffic has space",
        ],
        correctIndex: 0,
        explanation:
          "Utah's default is the right-hand lane. The left one is for passing, and you return to the right as soon as the pass is complete or the obstruction is behind you.",
        context:
          "The rule has teeth on a multi-lane highway. A driver in the left lane who is overtaken from behind must move safely to the right, and the handbook warns that a citation for impeding traffic is available against someone who does not. Section 41-6a-704 makes the same point in law: you may not impede the movement or free flow of traffic in the left general purpose lane.",
        trap: "Driving the posted limit in the left lane does not excuse you. The duty to move over is about position, not speed.",
        excerptKey: "keep-right-lane",
        sourceLabel: "Utah Driver Handbook - Section 8.C Proper Lane Usage",
        sourceUrl: hb(31),
      },
      {
        id: "ut_s1_24",
        topic: "impairment",
        question: "At what blood or breath alcohol concentration does a Utah driver aged 21 or over break the law?",
        choices: ["0.02", "0.05", "0.08", "0.10"],
        correctIndex: 1,
        explanation:
          "Utah's limit is 0.05, the lowest adult threshold in the United States. It has been in force since December 2018 and it is a strict liability offense.",
        context:
          "The number is only half the offense. Utah also makes it unlawful to drive while impaired to a degree that renders you incapable of driving safely, whatever the reading, so a driver under 0.05 can still be convicted. Commercial drivers are held to 0.04, and anyone under 21 to no measurable amount at all. A first conviction at 21 or over suspends the license for 120 days.",
        trap: "0.08 is the figure almost every other state uses and almost every piece of study material repeats. Utah moved off it years ago.",
        excerptKey: "bac-005",
        sourceLabel: "Utah Driver Handbook - Section 10.C Alcohol and the Law",
        sourceUrl: hb(52),
        commonlyMissed: true,
      },
      {
        id: "ut_s1_25",
        topic: "emergencies",
        question: "You are involved in a collision in Utah. What is the first thing the law requires?",
        choices: [
          "Photograph the scene before anything is moved",
          "Call your insurer",
          "Move both vehicles off the road before doing anything else",
          "Stop immediately",
        ],
        correctIndex: 3,
        explanation:
          "Stopping comes first, and leaving is punished hard: up to a year of suspension or revocation, up to a year in jail, and a fine of up to $2,500. Failing to stop at an injury crash is a third-degree felony.",
        context:
          "Having stopped, you must render reasonable assistance to anyone injured, including arranging transport for treatment, while avoiding moving a seriously injured person unless leaving them would be worse. You exchange name, address, vehicle registration number and insurance details. If the crash caused injury, death or at least $2,500 of property damage, you notify law enforcement immediately.",
        trap: "Damage-only crashes are the exception that proves the rule: there you may move the vehicles clear of the travel lanes, but you still stay at the scene.",
        excerptKey: "crash-stop-immediately",
        sourceLabel: "Utah Driver Handbook - Section 12 Crashes and Insurance",
        sourceUrl: hb(65),
      },
      {
        id: "ut_s1_26",
        topic: "signs",
        question: "A round yellow sign with a large X and two Rs faces you. What is it telling you?",
        choices: [
          "A road crosses at an unusual angle ahead",
          "Two highways cross ahead",
          "A rest area is ahead",
          "A railroad crossing is ahead - slow down, look and listen",
        ],
        correctIndex: 3,
        explanation:
          "The round yellow sign is the advance warning for a railroad crossing. It asks you to slow down, look and listen for a train, and be ready to stop.",
        context:
          "Two different signs share the crossing. The round yellow one warns you that a crossing is coming; the white X-shaped crossbuck stands at the crossing itself and is the yield sign for the tracks. Where a crossing has more than one track a small sign under the crossbuck says how many. If you do have to stop, you stop between 15 and 50 feet from the nearest rail.",
        trap: "The round yellow sign is a warning, not the crossing. The crossbuck is the sign at the tracks themselves.",
        excerptKey: "railroad-advance-sign",
        sourceLabel: "Utah Driver Handbook - Section 9.I Railroad Crossing Signs",
        sourceUrl: hb(47),
      },
      {
        id: "ut_s1_27",
        topic: "speed",
        question: "What does Utah's basic speed law say?",
        choices: [
          "You may drive the posted limit in any conditions",
          "You may exceed the limit by up to 5 mph when traffic is flowing faster",
          "You may never drive faster than is reasonable and prudent for the existing conditions",
          "The limit only applies where a sign is posted",
        ],
        correctIndex: 2,
        explanation:
          "The posted number is a ceiling, not a permission. Utah's basic speed law makes the conditions in front of you the real limit, and it can be broken at any speed.",
        context:
          "The handbook lists occasions when the law expects you to slow below the sign: approaching an intersection or railroad crossing, going around a curve, coming to the crest of a hill, on a narrow or winding road, near people walking beside the road, in bad weather, in a work zone, and near any vehicle showing flashing red or blue lights. It gives its own example - 10 mph on ice, or 25 mph on a rainy night, can both be too fast.",
        trap: "The other half of the law is the opposite mistake. Driving so slowly that you impede traffic is also citable.",
        excerptKey: "basic-speed-law",
        sourceLabel: "Utah Driver Handbook - Section 9.E Speed",
        sourceUrl: hb(44),
      },
      {
        id: "ut_s1_28",
        topic: "parking",
        question: "How close to a crosswalk may you park in Utah?",
        choices: [
          "No closer than 10 feet",
          "No closer than 20 feet",
          "No closer than 30 feet",
          "No closer than 50 feet",
        ],
        correctIndex: 1,
        explanation:
          "Twenty feet, and parking on the crosswalk itself is separately prohibited. The distance exists so a driver can see someone stepping off the curb.",
        context:
          "Utah's no-parking list runs long: sidewalks, driveways, intersections, crosswalks, bridges, tunnels, railroad tracks, bicycle lanes, the roadway side of another parked vehicle, and the shoulder of any interstate except when you have broken down or are in distress. Red painted curbs and any place where a sign forbids stopping are on the same list.",
        trap: "The 30-foot figure exists in Utah too, but it belongs to stop signs, yield signs, flashing beacons and traffic signals.",
        excerptKey: "parking-crosswalk",
        sourceLabel: "Utah Driver Handbook - Section 8.D Parking",
        sourceUrl: hb(32),
      },
      {
        id: "ut_s1_29",
        topic: "safety",
        question: "Above roughly what speed does the Utah handbook say a car may start to hydroplane?",
        choices: ["15 mph", "25 mph", "35 mph", "45 mph"],
        correctIndex: 2,
        explanation:
          "Thirty-five miles an hour is the figure the handbook prints. Above it your front tires can start riding on water instead of the road, and steering goes with them.",
        context:
          "The handbook is clear that skids are not only a winter problem, and that hydroplaning gets worse the faster you go. Utah also singles out black ice, which reads as a wet patch rather than a patch of ice and causes crashes every year. If you do skid, ease off the accelerator, steer the front wheels the way the rear is sliding, and keep off the brakes until traction returns.",
        trap: "Braking hard is the instinct and the wrong move. Slamming the brakes in a skid makes it worse.",
        excerptKey: "hydroplane-35",
        sourceLabel: "Utah Driver Handbook - Section 11.L Skidding",
        sourceUrl: hb(61),
      },
      {
        id: "ut_s1_30",
        topic: "sharing",
        question: "How much of a lane does a motorcycle get in Utah?",
        choices: [
          "Half a lane, so a car may share the other half",
          "Only as much as the rider is using at that moment",
          "A full lane on freeways, half a lane elsewhere",
          "An entire lane - do not share it",
        ],
        correctIndex: 3,
        explanation:
          "A motorcycle gets the whole lane. The handbook tells drivers not to share one, because a rider needs the width to move within the lane and react.",
        context:
          "Riders change position inside their lane constantly to dodge potholes, gravel, pavement seams and railroad crossings that would barely register in a car. Utah asks you to stay at least two seconds back, to check mirrors and blind spots deliberately since motorcycles are hard to see, and not to assume a flashing turn signal means a turn - many motorcycle signals do not cancel themselves.",
        trap: "Sharing a lane with a motorcycle is different from lane filtering, which is a rider's own maneuver and legal only under narrow conditions.",
        excerptKey: "motorcycle-full-lane",
        sourceLabel: "Utah Driver Handbook - Section 14.F Motorcycles",
        sourceUrl: hb(81),
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Core Rules of the Road",
    difficulty: "easy",
    description:
      "The everyday law: lanes, turns, signals, passing, parking and the right-of-way order Utah applies when two vehicles want the same piece of road.",
    questions: [
      {
        id: "ut_s2_01",
        topic: "rules",
        question:
          "You turn left from a road with two left-turn lanes onto a multi-lane street. Which lane must you finish in?",
        choices: [
          "Any lane, once the turn is complete",
          "The far-right lane, so following traffic can pass",
          "Whichever lane has the shortest queue",
          "The lane that corresponds to the one you turned from",
        ],
        correctIndex: 3,
        explanation:
          "Utah requires you to come out of a turn in the lane that matches the one you went in from. Cutting across into a different lane mid-turn is a lane change inside an intersection, which is separately prohibited.",
        context:
          "Where there is only a single left-turn lane the rule is stated differently: you finish in the far-left lane, the one closest to the center of the road you have joined. Having completed the turn and cleared the intersection, you may then signal, check your blind spot and move right in the normal way.",
        trap: "Drifting into the outside lane during the turn is the common version of this fault, and it is exactly the maneuver the rule forbids.",
        excerptKey: "turn-finish-lane",
        sourceLabel: "Utah Driver Handbook - Section 8.C Proper Lane Usage",
        sourceUrl: hb(31),
      },
      {
        id: "ut_s2_02",
        topic: "rules",
        question: "How long must you signal before changing lanes in Utah?",
        choices: ["One second", "Two seconds", "Three seconds", "Five seconds"],
        correctIndex: 1,
        explanation:
          "The same two seconds that applies to a turn applies to a lane change, and the Code requires the signal to run continuously for at least those last two seconds before you start to move.",
        context:
          "The handbook sets out the whole sequence for a lane change: check the mirrors, signal for at least two seconds, check the blind spot by turning your head, make sure the move can be completed safely, merge, match the speed of traffic, then cancel the signal. On the skills test you will be asked to do it several times.",
        trap: "Signaling and moving in the same motion fails the requirement even if the lane was empty.",
        excerptKey: "lane-change-steps",
        sourceLabel: "Utah Driver Handbook - Section 8.C Lane Changes",
        sourceUrl: hb(30),
      },
      {
        id: "ut_s2_03",
        topic: "rightOfWay",
        question: "You are pulling out of a private driveway onto a public road. Who has the right of way?",
        choices: [
          "The traffic already on the road",
          "You, once the front of your vehicle is past the sidewalk",
          "Whoever is closer to the intersection ahead",
          "You, because a driveway counts as an intersection",
        ],
        correctIndex: 0,
        explanation:
          "Coming out of a driveway or private road, you yield to everything already on the public road. Utah gives the through traffic the priority without qualification.",
        context:
          "The handbook lists this alongside the other yields you owe: to a driver already at the intersection, to oncoming traffic when you turn left, to the driver on your right in a four-way tie, to traffic already on an interstate when you are on the entrance ramp, and to pedestrians and bicyclists still in the intersection.",
        trap: "Nosing out until traffic has to react is not taking the right of way, it is failing to yield - a 60-point violation in Utah.",
        excerptKey: "yield-driveway",
        sourceLabel: "Utah Driver Handbook - Section 9.J Yielding Right-of-Way",
        sourceUrl: hb(50),
      },
      {
        id: "ut_s2_04",
        topic: "parking",
        question: "You leave your vehicle parked on a noticeable slope in Utah. What must you do with the front wheels?",
        choices: [
          "Leave them straight so the car rolls in line with the curb",
          "Turn them toward the center of the road either way",
          "Turn them to the curb or the side of the highway",
          "Nothing, provided the parking brake is set",
        ],
        correctIndex: 2,
        explanation:
          "Section 41-6a-1403 requires the front wheels turned to the curb or the side of the highway whenever the vehicle stands on any perceptible grade. Which way you turn them depends on which way gravity would take the car.",
        context:
          "Downhill, you turn the wheels toward the curb so the front tire rests against it. Uphill with a curb, you turn them away from the curb and let the tire roll back against it. Uphill with no curb, you turn to the right so the vehicle would run off the road rather than into it. The parking brake and park position are required as well, not instead.",
        trap: "The parking brake is not a substitute. The statute lists stopping the engine, removing the key, park or low gear, and setting the brakes as separate duties.",
        excerptKey: "uca-wheels-to-curb",
        sourceLabel: "Utah Code 41-6a-1403 - Motor vehicle left unattended",
        sourceUrl: uca("1403"),
      },
      {
        id: "ut_s2_05",
        topic: "signals",
        question:
          "A left-turn arrow is flashing yellow. What does it permit?",
        choices: [
          "Nothing - a flashing arrow means the signal has failed",
          "A protected turn, since the arrow is lit",
          "A turn, but only after you have yielded to oncoming traffic and pedestrians",
          "A turn only if no other vehicle is waiting behind you",
        ],
        correctIndex: 2,
        explanation:
          "A flashing yellow arrow is permission to turn once you have yielded. The oncoming traffic is looking at a green light of its own, and it goes first.",
        context:
          "Utah lets a left-turning driver see three different indications for the same movement: the green arrow is protected, the solid green is permitted, and the flashing yellow arrow is permitted. Only the first of the three holds the oncoming traffic for you, which is why the handbook attaches the phrase 'proceed with caution' to the flashing arrow.",
        trap: "An arrow shape suggests a protected turn. The flashing yellow one is the exception that catches people.",
        excerptKey: "signal-flashing-yellow-arrow",
        sourceLabel: "Utah Driver Handbook - Section 9.H Traffic Signals",
        sourceUrl: hb(46),
        commonlyMissed: true,
      },
      {
        id: "ut_s2_06",
        topic: "rules",
        question: "How far ahead of an oncoming vehicle must you be back in your own lane after passing?",
        choices: ["100 feet", "150 feet", "200 feet", "300 feet"],
        correctIndex: 2,
        explanation:
          "Two hundred feet. Both the handbook and Section 41-6a-706 use that figure for returning to your lane after a pass that used the oncoming lane.",
        context:
          "The rest of the passing discipline: check for oncoming traffic, check the mirrors and the blind spot, signal, move fully into the passing lane, get past quickly rather than sitting alongside, wait until the passed vehicle shows in your mirror, and signal back in. Passing on the shoulder is never allowed, and passing on the right may not involve leaving the roadway.",
        trap: "The 200 feet is measured from the oncoming vehicle, not from the car you passed.",
        excerptKey: "passing-return-200",
        sourceLabel: "Utah Driver Handbook - Section 8.E Passing",
        sourceUrl: hb(34),
      },
      {
        id: "ut_s2_07",
        topic: "signs",
        question: "What color and shape are Utah's guide signs?",
        choices: [
          "Square or rectangular, and green, brown or blue",
          "Diamond and yellow",
          "Rectangular and white with black lettering",
          "Pentagon and yellow-green",
        ],
        correctIndex: 0,
        explanation:
          "Guide signs are square or rectangular in green, brown or blue. They point you to towns, intersecting roads, points of interest and roadside services.",
        context:
          "The color system is the fastest way to read a sign you have never seen. White rectangles with black, red or green lettering are regulatory - they tell you what you must or may not do. Yellow diamonds warn. Orange means a work zone. Green, brown and blue guide rather than instruct, so they carry no obligation.",
        trap: "Blue and green signs never impose a rule. Nothing on them is enforceable in the way a white regulatory sign is.",
        excerptKey: "guide-signs",
        sourceLabel: "Utah Driver Handbook - Section 9.I Guide Signs",
        sourceUrl: hb(46),
      },
      {
        id: "ut_s2_08",
        topic: "speed",
        question: "Utah posts nothing on a rural two-lane highway. What speed applies?",
        choices: ["45 mph", "50 mph", "55 mph", "65 mph"],
        correctIndex: 2,
        explanation:
          "Fifty-five is the statutory fall-back. Section 41-6a-601 makes 20 mph lawful in a reduced-speed school zone, 25 in any urban district and 55 in other locations.",
        context:
          "The handbook mirrors that ladder from the driver's side, printing 55 mph for major highways as posted and 65, 70, 75 or 80 for rural interstates depending on the stretch. Transition zones between different limits are marked with pavement markings and extra signs. Every one of those numbers still sits under the basic speed law.",
        trap: "The 65 to 80 range belongs to rural interstates. An unposted rural two-lane road is not one.",
        excerptKey: "uca-speed-defaults",
        sourceLabel: "Utah Code 41-6a-601 - Speed regulations",
        sourceUrl: uca("601"),
      },
      {
        id: "ut_s2_09",
        topic: "rules",
        question: "Two lanes merge into one at a construction zone. What does Utah ask drivers to do?",
        choices: [
          "Merge as early as possible and queue in a single line",
          "Give way to the lane on the right at all times",
          "Whichever lane is moving faster takes priority",
          "Use both lanes to the merge point, then alternate one for one",
        ],
        correctIndex: 3,
        explanation:
          "Utah teaches the zipper method: both lanes stay in use right up to the merge point, and vehicles then alternate into the single lane. Violating the section is an infraction.",
        context:
          "Merging early wastes half the road and lengthens the queue behind, which is why the handbook names and describes the technique rather than leaving it to courtesy. The underlying duty still applies at the merge point itself: the driver in the ending lane yields to traffic in the continuing lane that is close enough to be an immediate threat.",
        trap: "The zipper does not reverse the yield. Alternating is the pattern, but the lane that ends still gives way.",
        excerptKey: "zipper-method",
        sourceLabel: "Utah Driver Handbook - Section 8.C Merging and Gore Area",
        sourceUrl: hb(31),
      },
      {
        id: "ut_s2_10",
        topic: "rules",
        question: "What is the gore area, and what may you do with it?",
        choices: [
          "The painted triangle between a through lane and an entrance or exit ramp - you may not drive across it",
          "The shoulder beyond the white line - you may use it to pass slow traffic",
          "The space between two lanes of opposing traffic - you may use it to turn left",
          "The area in front of a stop line - you may stop in it when the intersection is blocked",
        ],
        correctIndex: 0,
        explanation:
          "The gore is the area between the solid white lines separating a through lane from a lane entering or leaving it. Crossing it or driving in it is against the law.",
        context:
          "Gore areas appear wherever a ramp joins or leaves a highway and wherever two highways merge or split. The related freeway prohibitions belong with it: you may not drive in the emergency lane outside the solid white line, may not stop there to pick anyone up, and may not use an entrance ramp to leave the freeway even in a jam.",
        trap: "Cutting across the gore to catch an exit you nearly missed is the everyday version of this offense.",
        excerptKey: "gore-area",
        sourceLabel: "Utah Driver Handbook - Section 8.C Merging and Gore Area",
        sourceUrl: hb(31),
      },
      {
        id: "ut_s2_11",
        topic: "rightOfWay",
        question:
          "The traffic lights at an intersection are completely dead after a power cut. What does Utah require?",
        choices: [
          "Treat it as a four-way stop and use the right-hand rule",
          "Proceed with caution without stopping",
          "Yield to the larger road",
          "Stop before entering, then yield to any vehicle on your right",
        ],
        correctIndex: 3,
        explanation:
          "You must come to a complete stop before entering, then give way to any vehicle on your right unless a peace officer directs otherwise.",
        context:
          "The handbook makes the officer's direction outrank everything, lights included: if the light is green and an officer tells you to stop, you stop, and if the officer signals you to turn when you meant to go straight, you turn. The same authority sits with highway workers and school crossing guards.",
        trap: "A single-point urban interchange is the exception the handbook flags - it is not handled like a four-way stop, and you proceed with extreme caution until an officer arrives.",
        excerptKey: "dead-signal-yield-right",
        sourceLabel: "Utah Driver Handbook - Section 9.I Traffic Signs",
        sourceUrl: hb(46),
      },
      {
        id: "ut_s2_12",
        topic: "parking",
        question: "How close to the nearest rail of a railroad crossing may you park in Utah?",
        choices: ["No closer than 15 feet", "No closer than 25 feet", "No closer than 50 feet", "No closer than 100 feet"],
        correctIndex: 2,
        explanation:
          "Fifty feet from the nearest rail. Both the handbook's parking list and its railroad chapter give the same number, unless signs or a local ordinance say otherwise.",
        context:
          "It is easy to confuse with the other railroad distance. Fifty feet is how far away you must park. Between 15 and 50 feet from the nearest rail is where you must STOP when a crossing requires it. One is about leaving the car; the other is about waiting in it.",
        trap: "Fifteen feet is the near edge of the stopping band, not a parking distance.",
        excerptKey: "railroad-park-50",
        sourceLabel: "Utah Driver Handbook - Section 14.L Trains and Railroad Crossings",
        sourceUrl: hb(86),
      },
      {
        id: "ut_s2_13",
        topic: "safety",
        question: "How does the Utah handbook describe backing a vehicle safely?",
        choices: [
          "Rely on the backup camera, which sees more than mirrors do",
          "Use the mirrors only, since turning your head takes your eyes off the front",
          "Reverse quickly to spend as little time as possible in the maneuver",
          "Check behind the vehicle before you get in, then look through the rear window while backing slowly",
        ],
        correctIndex: 3,
        explanation:
          "Utah wants you to walk the area before you get in, because you cannot see a small child from the driver's seat, and then to look through the rear window as you back slowly.",
        context:
          "The described technique is left hand on the wheel, right arm across the back of the passenger seat, head turned to look out the rear window, with quick checks to the front and sides if you are turning. Your mirrors do not show the ground directly behind the vehicle. Backing on a freeway or interstate is prohibited outright.",
        trap: "Backup cameras are a driver-assist feature, and the handbook is explicit that assist features do not relieve you of head checks and mirror use.",
        excerptKey: "backing-no-freeway",
        sourceLabel: "Utah Driver Handbook - Section 8.B Backing (Reverse)",
        sourceUrl: hb(30),
      },
      {
        id: "ut_s2_14",
        topic: "sharing",
        question: "How should you treat an orange and red reflective triangle on the back of a vehicle?",
        choices: [
          "It marks an oversized load - stay back 200 feet",
          "It marks a vehicle traveling under 25 mph - slow down and pass only when safe",
          "It marks a student driver - allow extra room",
          "It marks a vehicle carrying hazardous material - do not follow closely",
        ],
        correctIndex: 1,
        explanation:
          "The fluorescent orange and red triangle means the vehicle is moving at less than 25 mph. Closing speed is the danger, so you slow early and pass only when you can see it is safe.",
        context:
          "You will meet the emblem most often on farm equipment in rural Utah, sometimes crossing the road rather than traveling along it. The handbook adds a detail that matters: the operator often cannot hear your vehicle over their own, so do not assume they know you are there. Horse-drawn vehicles and riders have the same right to the road, and horn or engine noise near them can cause a crash.",
        trap: "It is a speed marker, not a load marker. The vehicle may be small and still be doing 15 mph.",
        excerptKey: "slow-moving-triangle",
        sourceLabel: "Utah Driver Handbook - Section 14.J Slow Moving Vehicles",
        sourceUrl: hb(84),
      },
      {
        id: "ut_s2_15",
        topic: "signals",
        question: "What does a steady yellow light mean in Utah?",
        choices: [
          "Speed up to clear the intersection before the red",
          "The movement the green allowed is being terminated",
          "Stop immediately, whatever your position",
          "Yield to any vehicle already in the intersection, then proceed",
        ],
        correctIndex: 1,
        explanation:
          "Yellow is a warning that the light is about to turn red. It is notice that your permission is ending, not an invitation to hurry.",
        context:
          "The pedestrian half of the same rule makes the intent obvious: a pedestrian facing a steady yellow is told there is not enough time to cross and may not start. For a driver, the practical answer is to stop if you can do so safely, and the handbook's braking advice applies - start braking well ahead of where you must stop rather than jerking to a halt.",
        trap: 'Treating yellow as "go faster" is exactly the reading the wording rules out.',
        excerptKey: "signal-flashing-yellow",
        sourceLabel: "Utah Driver Handbook - Section 9.H Traffic Signals",
        sourceUrl: hb(45),
      },
      {
        id: "ut_s2_16",
        topic: "licensing",
        question: "You move within Utah. How long do you have to tell the Driver License Division your new address?",
        choices: ["10 days", "30 days", "60 days", "Before your next renewal"],
        correctIndex: 0,
        explanation:
          "Ten days for a Class D driver. It is a legal requirement, not a courtesy, and the Division uses that address for renewal notices and everything else it sends you.",
        context:
          "A commercial license holder has a different deadline - 30 days, and the application has to be made in person. If you want the new address printed on the card you schedule a replacement appointment and pay the fee, and you will need two approved documents proving the address.",
        trap: "Updating the address only when the license is due for renewal leaves you out of compliance for years.",
        excerptKey: "address-change-10-days",
        sourceLabel: "Utah Driver Handbook - Section 4.H Address Change",
        sourceUrl: hb(19),
      },
      {
        id: "ut_s2_17",
        topic: "rules",
        question: "Where is a U-turn always prohibited in Utah?",
        choices: [
          "On a freeway",
          "On any street narrower than four lanes",
          "Anywhere within a business district",
          "At any intersection controlled by a signal",
        ],
        correctIndex: 0,
        explanation:
          "Freeway U-turns are illegal, full stop. The handbook lists them with railroad tracks and crossings, blind curves and crests, and any place a traffic control device forbids the movement.",
        context:
          "Away from those absolute bans the rule is about visibility: Section 41-6a-802 forbids a U-turn on a curve or near the crest of a grade if your vehicle would not be visible 500 feet away to a driver approaching from either direction. The handbook adds a Utah-specific warning that individual cities have their own U-turn ordinances, so a movement legal on one street may not be on the next.",
        trap: "Wide enough and clear enough is not the whole test. On a freeway the maneuver is banned no matter how empty the road is.",
        excerptKey: "u-turn-prohibited",
        sourceLabel: "Utah Driver Handbook - Section 8.I U-Turns",
        sourceUrl: hb(38),
      },
      {
        id: "ut_s2_18",
        topic: "sharing",
        question: "You are following a large truck and cannot see the driver's mirrors. What does that tell you?",
        choices: [
          "Nothing useful - truck mirrors cover the whole rear",
          "The truck driver cannot see you",
          "You are at a safe following distance",
          "The truck is about to turn",
        ],
        correctIndex: 1,
        explanation:
          "The handbook's rule of thumb is that if you cannot see the truck driver in a side mirror, they cannot see you. Sitting there hides you exactly when the driver may need to swerve.",
        context:
          "The blind spots around a tractor-trailer are described as reaching up to 20 feet in front of the cab, running the length of the vehicle on both sides, and stretching as much as 200 feet behind. The right side is the largest of them. Trucks also need far more room to stop - a loaded tractor-trailer at 55 mph needs at least 335 feet, and more than 400 feet for a full stop.",
        trap: "The rear blind spot is the one drivers underestimate, because a truck that fills the windshield feels close enough to be obvious.",
        excerptKey: "truck-blind-spot-rule",
        sourceLabel: "Utah Driver Handbook - Section 14.C A Trucker's Blind Spot",
        sourceUrl: hb(80),
      },
      {
        id: "ut_s2_19",
        topic: "emergencies",
        question:
          "Your brakes fail on a Utah road. What does the handbook tell you to do first?",
        choices: [
          "Shift into neutral and coast to a stop",
          "Turn off the engine immediately",
          "Apply the parking brake slowly",
          "Pump the brake pedal until pressure returns",
        ],
        correctIndex: 2,
        explanation:
          "Use the parking brake, applied slowly so the rear wheels do not lock, and be ready to release it if the car starts to skid.",
        context:
          "If the parking brake fails too, the handbook says to switch off the engine and look for a safe place to stop well off the roadway. A brake warning light on the dashboard is a separate instruction: do not drive at all. And on a vehicle with anti-lock brakes there is no pumping - you press hard, hold the pressure, and steer while the pedal shudders.",
        trap: "Pumping is what you were taught for old brakes and it defeats an anti-lock system, which only works while your foot stays on the pedal.",
        excerptKey: "brake-failure",
        sourceLabel: "Utah Driver Handbook - Section 12.B Braking and Brake Failure",
        sourceUrl: hb(66),
      },
      {
        id: "ut_s2_20",
        topic: "impairment",
        question:
          "A Utah officer arrests you for driving under the influence and asks for a breath test. What is the effect of refusing?",
        choices: [
          "Nothing, since the test is voluntary",
          "A fine, but no effect on the license",
          "The license is suspended for 120 days",
          "The license is revoked for 18 months on a first refusal",
        ],
        correctIndex: 3,
        explanation:
          "Utah's implied consent law treats driving as agreement to be tested. Refusal costs an 18-month revocation for a first offense and 36 months for a second.",
        context:
          "The consent covers breath, blood, urine or oral fluids, it applies to motorboats as well as vehicles, and the officer chooses which test. Under 21 the first refusal costs two years or the wait until the driver turns 21, whichever runs longer. Refusal also carries an ignition interlock restriction, and none of it depends on whether you are eventually convicted of the DUI itself.",
        trap: "The 120-day figure is the suspension for a first DUI conviction at 21 or over. Refusing is punished harder than being convicted.",
        excerptKey: "refusal-revocation",
        sourceLabel: "Utah Driver Handbook - Section 10.C Implied Consent Law",
        sourceUrl: hb(53),
      },
      {
        id: "ut_s2_21",
        topic: "signs",
        question: "What does a white rectangular sign with black and red lettering usually do?",
        choices: [
          "Tell you a rule about lane use, turning, speed or parking",
          "Warn of a hazard ahead",
          "Give directions to a town or service",
          "Mark a work zone",
        ],
        correctIndex: 0,
        explanation:
          "White signs with black, red or green lettering are regulatory. They set out what you must do or must not do, and a red circle with a slash means the action shown is prohibited.",
        context:
          "Regulatory signs cover speed limits, no left turn, no U-turn, do not enter, one way, turn-lane restrictions and parking rules. Two of them break the rectangle rule entirely by having their own shape, which is deliberate: the octagon and the downward triangle are recognizable when snow or dirt has hidden the words.",
        trap: "A regulatory sign does not have to carry the word 'no'. A red circle and a slash across a symbol does the same job.",
        excerptKey: "regulatory-signs",
        sourceLabel: "Utah Driver Handbook - Section 9.I Regulatory Signs",
        sourceUrl: hb(47),
      },
      {
        id: "ut_s2_22",
        topic: "speed",
        question: "You are caught speeding in a Utah highway construction zone. What happens to the fine?",
        choices: [
          "It is the standard fine, with points added",
          "Courts must fine at least twice the regular amount",
          "It is tripled if workers are present",
          "It is doubled only when workers are present",
        ],
        correctIndex: 1,
        explanation:
          "Utah courts are required to impose at least double the ordinary speeding fine in a highway construction zone. Nothing in the rule turns on whether anyone is working at that moment.",
        context:
          "The handbook insists on slowing down even when the zone looks deserted, because narrow lanes and rough pavement are hazards in themselves and equipment moves without warning. More than 80 percent of the people killed and injured in work zones are drivers, passengers and pedestrians rather than workers. The zone lasts until you see END ROAD WORK.",
        trap: "The presence of workers is not the trigger. An empty work zone at midnight carries the same doubled fine.",
        excerptKey: "work-zone-double-fine",
        sourceLabel: "Utah Driver Handbook - Section 11.G Highway Work Zones",
        sourceUrl: hb(59),
      },
      {
        id: "ut_s2_23",
        topic: "safety",
        question: "Where does a child under eight ride in a Utah vehicle, and how?",
        choices: [
          "In a booster seat once past their fourth birthday, whatever their height",
          "In an ordinary belt if they are over 40 pounds",
          "In an approved child safety seat, unless the child is already 57 inches tall",
          "Anywhere in the vehicle so long as a belt is fastened",
        ],
        correctIndex: 2,
        explanation:
          "Every child aged eight or under goes in an approved child safety seat. Height is the only escape: a child under eight who is already 57 inches tall uses an ordinary belt instead.",
        context:
          "The stages inside that rule matter. Rear-facing in the back seat until at least two years old and 30 pounds, or longer if the seat allows. Forward-facing with a harness until at least four years and 40 pounds. Then a booster until the adult belt fits properly and the child reaches 57 inches. Children between eight and twelve must still be properly restrained, and twelve and under belong in the back seat.",
        trap: "Age alone does not release a child from the seat. Fifty-seven inches is the height that does.",
        excerptKey: "car-seat-eight-and-under",
        sourceLabel: "Utah Driver Handbook - Section 7.D Car Seats",
        sourceUrl: hb(28),
      },
      {
        id: "ut_s2_24",
        topic: "rightOfWay",
        question:
          "A pedestrian is crossing at an unmarked crosswalk on your half of the road. What must you do?",
        choices: [
          "Sound your horn and continue, since the crosswalk is unmarked",
          "Slow or stop and let them cross at least your half of the road",
          "Yield only if the pedestrian is already past the center line",
          "Continue, because pedestrians must use marked crossings",
        ],
        correctIndex: 1,
        explanation:
          "Utah requires you to yield by slowing or stopping, and the handbook says vehicles stay stopped until the pedestrian has crossed at least the driver's half of the road. Whether the crosswalk is painted makes no difference.",
        context:
          "Two duties sit above that. At a school crosswalk you make a complete stop whenever the crossing is occupied. And if another vehicle is stopped at a crosswalk to let someone cross, you may not overtake and pass it, because you cannot see who is walking out from in front of it.",
        trap: "Unmarked crosswalks exist at ordinary intersections. Nothing has to be painted for the duty to arise.",
        excerptKey: "pedestrian-stop",
        sourceLabel: "Utah Driver Handbook - Section 14.G Pedestrians",
        sourceUrl: hb(82),
        commonlyMissed: true,
      },
      {
        id: "ut_s2_25",
        topic: "rules",
        question: "How far ahead of a turn may you enter a shared center left-turn lane in Utah?",
        choices: [
          "No more than 300 feet",
          "No more than 500 feet",
          "No more than 1,000 feet",
          "As far back as you like, if you signal",
        ],
        correctIndex: 1,
        explanation:
          "Five hundred feet is the limit. The lane is shared with drivers coming the other way, so treating it as a private queue for half a block is what the rule prevents.",
        context:
          "The handbook's technique for using it is the same as for any lane change made against oncoming traffic: check your mirrors, look for vehicles ahead in the lane, signal left, check the left blind spot, steer smoothly in, and turn when the oncoming traffic is clear. A bicyclist turning left is entitled to use the same lane the same way.",
        trap: "The lane is not a passing lane and not an acceleration lane. Its only purpose is the turn you are about to make.",
        excerptKey: "shared-left-turn-500",
        sourceLabel: "Utah Driver Handbook - Section 9.D Shared Center Left Turn Lane",
        sourceUrl: hb(44),
      },
      {
        id: "ut_s2_26",
        topic: "licensing",
        question:
          "You are 16, hold a Utah learner permit and have finished driver education. How long must you hold the permit before you can get a license?",
        choices: ["30 days", "90 days", "Six months", "One year"],
        correctIndex: 2,
        explanation:
          "Six months at 16 or 17. The clock runs on the permit, so finishing driver education early does not shorten it.",
        context:
          "The holding period changes with age. At 18 there is none, though an approved driver education course is still required. At 19 or over it is 90 days unless the applicant completes driver education instead. Everyone in the 15 to 18 band also has to log 40 hours of practice driving, ten of them after sunset.",
        trap: "The 90-day figure belongs to drivers 19 and over. It does nothing for a 16 year old.",
        excerptKey: "permit-holding-periods",
        sourceLabel: "Utah Driver Handbook - Section 3.B Learner Permit Holding Periods",
        sourceUrl: hb(7),
      },
      {
        id: "ut_s2_27",
        topic: "impairment",
        question: "According to the Utah handbook, at what blood alcohol content does vision start to be affected?",
        choices: ["0.02", "0.05", "0.08", "0.10"],
        correctIndex: 0,
        explanation:
          "Vision is impacted at 0.02 for every driver, and the handbook calls vision the most important sense used in driving.",
        context:
          "Alcohol blurs vision, slows focus, causes double vision and wrecks your judgement of distance, speed and the movement of other vehicles. It also degrades judgement, color distinction and reaction time. The handbook's summary is that impairment starts with the first drink, and that a person with one or more drinks in the bloodstream is visibly impaired.",
        trap: "0.02 is not a legal limit for anyone in Utah. It is the point at which measurable damage to vision begins.",
        excerptKey: "alcohol-vision-002",
        sourceLabel: "Utah Driver Handbook - Section 10.A Effects of Alcohol and Drugs",
        sourceUrl: hb(51),
      },
      {
        id: "ut_s2_28",
        topic: "emergencies",
        question: "Your vehicle breaks down on a Utah highway. Where do the warning devices go?",
        choices: [
          "At the vehicle itself, so drivers can see the hazard",
          "One directly behind the vehicle only",
          "50 feet behind the vehicle only",
          "100 feet to the front and rear of the vehicle",
        ],
        correctIndex: 3,
        explanation:
          "After putting one device out immediately toward the nearest oncoming traffic, you place flares, lights or reflectors 100 feet to the front and 100 feet to the rear.",
        context:
          "There are extra rules around the basic pattern. A warning device also goes on the traffic side, at least 10 feet from the rear of the vehicle. On a one-way street the rear device goes back 200 feet. If you have broken down within 500 feet of a curve or a hilltop, the device in that direction goes far enough to give real warning, never more than 500 feet away and never closer than 100.",
        trap: "The general advice for a breakdown puts flares 200 to 300 feet back. The equipment rule for a wide or long vehicle is the 100-foot pattern, and they are different instructions in different chapters.",
        excerptKey: "warning-device-placement",
        sourceLabel: "Utah Driver Handbook - Section 16 Placement of Warning Devices",
        sourceUrl: hb(93),
      },
      {
        id: "ut_s2_29",
        topic: "sharing",
        question: "What must you do when a flagger is directing traffic in a work zone?",
        choices: [
          "Follow the posted signs, since the flagger is only advising",
          "Stop only if the flagger is holding a red paddle",
          "Treat the flagger's signals as equivalent to a yield sign",
          "Do exactly as the flagger directs",
        ],
        correctIndex: 3,
        explanation:
          "A flagger's directions are binding. The handbook puts it in four words: you must do as the flagger directs.",
        context:
          "Utah treats the people controlling traffic as traffic controls in their own right, alongside signals, signs and markings - law enforcement, highway workers and school crossing guards all belong to that list. The Code adds a separate duty to yield the right of way to an authorized vehicle or a worker actually engaged in work within a marked construction or maintenance area.",
        trap: "The flagger overrides the sign, not the other way round, in the same way that an officer overrides a green light.",
        excerptKey: "flagger",
        sourceLabel: "Utah Driver Handbook - Section 9.I Work Zone Signs",
        sourceUrl: hb(49),
      },
      {
        id: "ut_s2_30",
        topic: "signals",
        question: "You are in a Utah flex lane and the signal above your lane shows a red X. What does it mean?",
        choices: [
          "The lane is closed to you - do not use it",
          "The lane is open but the speed limit is reduced",
          "The lane is reserved for high-occupancy vehicles",
          "Traffic in that lane must stop and wait for a green arrow",
        ],
        correctIndex: 0,
        explanation:
          "A red X over a flex lane means the lane is not available to you. A green arrow means it is.",
        context:
          "Flex lanes carry traffic one way at some times of day and the other way at others, and they are marked with double-dashed yellow lines on either side. The overhead signals are the only reliable way to know which direction is running, so the handbook tells you to check before you enter rather than after.",
        trap: "The double-dashed yellow lines look like an ordinary two-way marking, which is exactly why the overhead signal is the thing to read.",
        excerptKey: "flex-lane",
        sourceLabel: "Utah Driver Handbook - Section 9.A Flex Lanes",
        sourceUrl: hb(39),
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Real Test Difficulty",
    difficulty: "medium",
    description:
      "Pitched where the real 50-question test sits: the exact numbers, the situations with more than one plausible answer, and the Utah rules that differ from the state next door.",
    questions: [
      {
        id: "ut_s3_01",
        topic: "sharing",
        question:
          "A school bus with flashing red lights is stopped on the far side of a divided highway with a median. What must you do?",
        choices: [
          "Stop, because red lights stop all traffic",
          "Stop 20 feet from the median",
          "Slow to 20 mph and pass with care",
          "Continue - only the vehicles behind the bus have to stop",
        ],
        correctIndex: 3,
        explanation:
          "On a divided highway the traffic traveling in the opposite direction keeps going. Only the vehicles in the lanes behind the bus have to stop.",
        context:
          "Utah's exceptions run to three: a divided highway, a bus stopped at an intersection or place controlled by a signal or a peace officer, and a highway of five or more lanes which may include a left-turn or two-way left-turn lane. On a two-lane road, or a four-lane road with no median, everybody stops. The handbook still asks you to slow and watch, because children are unpredictable whatever the law says.",
        trap: "Four lanes without a median is NOT a divided highway. Lane count alone does not release you - the median or barrier does.",
        excerptKey: "school-bus-four-lane",
        sourceLabel: "Utah Driver Handbook - Section 8.H School Bus Stopping",
        sourceUrl: hb(36),
        commonlyMissed: true,
      },
      {
        id: "ut_s3_02",
        topic: "emergencies",
        question:
          "You are convicted of failing to obey Utah's move over law. What must you do to keep your license?",
        choices: [
          "Pay the fine within 30 days",
          "Attend a four-hour live classroom defensive driving course within 90 days",
          "Complete an online defensive driving course at any time",
          "Nothing - the fine is the whole penalty",
        ],
        correctIndex: 1,
        explanation:
          "A move over conviction carries a mandatory four-hour live classroom defensive driving course. Miss it and the Division suspends your license for 90 days.",
        context:
          "The move over duty itself is broad: slow down, give as much room as is practical, and change into a lane not next to the stopped vehicle when that is safe. It covers emergency vehicles showing red, red and white or red and blue lights, tow trucks and highway maintenance vehicles showing amber, and any ordinary vehicle stopped outside a legal parking area with its hazard lights on. If you are in the HOV lane you move out of it.",
        trap: "Live classroom is specified. The online course that reduces points on a record is a different thing and will not satisfy this.",
        excerptKey: "move-over-penalty",
        sourceLabel: "Utah Driver Handbook - Section 14.B Move Over Law",
        sourceUrl: hb(77),
        commonlyMissed: true,
      },
      {
        id: "ut_s3_03",
        topic: "signs",
        question:
          "A yellow diamond shows a black arrow curving sharply to the right. What is it telling you?",
        choices: [
          "A right turn is required ahead",
          "The road ahead is one-way to the right",
          "A sharp curve to the right is ahead",
          "The right lane ends ahead",
        ],
        correctIndex: 2,
        explanation:
          "A yellow diamond warns; it never commands. This one says the road bends sharply right, so slow before you reach it rather than in it.",
        context:
          "The Utah handbook's warning-sign gallery includes lane ends, merging traffic, added lane, sharp curve, curvy road ahead, divided highway begins and ends, side road ahead, T-intersection, no passing zone, stop sign ahead, traffic signal ahead, advisory speed around a curve, school crossing, pedestrian crossing, share the road with bicycles, bicycle crossing and slippery when wet.",
        trap: "A black-on-white arrow is a regulatory instruction. A black-on-yellow one is only a warning, and confusing the two changes what you are obliged to do.",
        excerptKey: "warning-signs",
        sourceLabel: "Utah Driver Handbook - Section 9.I Warning Signs",
        sourceUrl: hb(48),
      },
      {
        id: "ut_s3_04",
        topic: "rules",
        question:
          "When may you legally pass another vehicle on the right in Utah?",
        choices: [
          "When the vehicle ahead is turning left, or the road has room for two lines of traffic in your direction",
          "Any time the right lane is clear",
          "Only on a freeway",
          "When the vehicle ahead is traveling below the speed limit",
        ],
        correctIndex: 0,
        explanation:
          "Section 41-6a-705 allows a pass on the right in exactly two situations: the vehicle ahead is making or preparing to make a left turn, or the pavement is wide enough for two or more lines of traffic going your way.",
        context:
          "Even where it is allowed, the movement has to be safe and it may not involve leaving the roadway - so the shoulder is out, and so is the dirt beside it. The handbook repeats the second half of that in one line: when passing on the right, it is illegal to leave the roadway. Bicyclists are the exception to the off-roadway prohibition.",
        trap: "A slow driver in the left lane is a separate offense of theirs. It does not create a right to undertake them off the pavement.",
        excerptKey: "uca-pass-on-right",
        sourceLabel: "Utah Code 41-6a-705 - Passing on right",
        sourceUrl: uca("705"),
      },
      {
        id: "ut_s3_05",
        topic: "licensing",
        question:
          "Under Utah's definitions, what does it mean for a driving privilege to be REVOKED?",
        choices: [
          "It is temporarily withdrawn",
          "It is terminated",
          "It was issued in error and has been undone",
          "It has been withdrawn but may be used out of state",
        ],
        correctIndex: 1,
        explanation:
          "Revocation is termination of the privilege to drive. Suspension is the temporary one, and the two are not interchangeable.",
        context:
          "Utah's definition list separates four words people use loosely. Denied is a withdrawal of the driving privilege. Suspension is a temporary withdrawal. Revocation is termination. Cancellation is termination of a license issued through error or fraud, or where consent has been withdrawn. Disqualification is the commercial-license version.",
        trap: "These definition questions are widely complained about, and the reason is that the everyday meanings of the four words overlap while the handbook's do not.",
        excerptKey: "def-revocation",
        sourceLabel: "Utah Driver Handbook - Section 1 Definitions",
        sourceUrl: hb(3),
        commonlyMissed: true,
      },
      {
        id: "ut_s3_06",
        topic: "speed",
        question:
          "A Utah street-legal ATV is on a highway posted at 65 mph. What is the fastest it may go?",
        choices: ["45 mph", "50 mph", "55 mph", "65 mph"],
        correctIndex: 1,
        explanation:
          "A street-legal ATV, UTV or full-size all-terrain vehicle may never exceed the lesser of the posted limit or 50 mph.",
        context:
          "Above a posted 50 the same vehicle must run on the extreme right-hand side of the roadway and carry a reflector or reflective tape. Street-legal all-terrain vehicles follow the same traffic rules, titling and registration requirements as a motorcycle, a Class D license covers them, and anyone under 21 must wear a DOT-approved helmet.",
        trap: "The posted limit is a ceiling for everyone. For these vehicles the 50 mph cap sits underneath it and wins.",
        excerptKey: "atv-speed-50",
        sourceLabel: "Utah Driver Handbook - Section 14.K Street Legal All-Terrain",
        sourceUrl: hb(86),
      },
      {
        id: "ut_s3_07",
        topic: "signals",
        question:
          "You ride a motorcycle up to a red light in Utah and it will not change because the sensor has not seen you. What does the law allow?",
        choices: [
          "Nothing - you must wait for another vehicle to trigger the signal",
          "Treat it as a stop sign immediately",
          "Proceed after waiting at least 45 seconds",
          "Proceed after waiting at least 90 seconds, once the way is clear",
        ],
        correctIndex: 3,
        explanation:
          "A rider or cyclist aged 16 or over who has stopped completely and waited at least 90 seconds may go, provided no other vehicle entitled to the right of way is at, in or approaching the intersection and no pedestrian is crossing nearby.",
        context:
          "The provision applies to motorcycles, mopeds and bicycles, and it is drafted as an affirmative defense rather than as permission, so the burden falls on the rider to have met every condition. It does not apply at an active railroad grade crossing. Ninety seconds is a long time at a light, which is why people cut it short and lose the defense.",
        trap: "Forty-five seconds is the figure in other states. In Utah anything under 90 seconds forfeits the defense entirely.",
        excerptKey: "dead-red-90-seconds",
        sourceLabel: "Utah Driver Handbook - Section 14.F Lane Filtering/Splitting",
        sourceUrl: hb(82),
      },
      {
        id: "ut_s3_08",
        topic: "impairment",
        question:
          "A Utah driver is convicted of a first DUI at the age of 19. How long is the ignition interlock restriction?",
        choices: ["One year", "18 months", "Two years", "Three years"],
        correctIndex: 3,
        explanation:
          "Three years, because the driver was under 21 at the time of the arrest. For an adult first DUI the restriction is 18 months.",
        context:
          "The interlock ladder climbs from there: two years for a second or subsequent DUI, impaired driving or alcohol-related reckless driving, or for refusing a chemical test; three years for a felony DUI; ten years for automobile homicide. The device has to be monitored at least every 60 days, and every failed check or attempt to start with 0.02 or more adds another 60 days.",
        trap: "The 18-month figure is the adult one, and it is the answer most people give because it is the one the handbook prints first.",
        excerptKey: "iid-first-dui",
        sourceLabel: "Utah Driver Handbook - Section 10.F Ignition Interlock Restricted Driver",
        sourceUrl: hb(54),
      },
      {
        id: "ut_s3_09",
        topic: "parking",
        question:
          "How close to a stop sign may you park in Utah?",
        choices: ["No closer than 15 feet", "No closer than 20 feet", "No closer than 25 feet", "No closer than 30 feet"],
        correctIndex: 3,
        explanation:
          "Thirty feet. The same figure covers a yield sign, a flashing beacon and a traffic control signal at the side of the roadway.",
        context:
          "Utah's four parking distances are easy to mix up because they are close together. Fifteen feet from a hydrant. Twenty feet from a crosswalk and twenty from a fire station driveway. Thirty feet from a stop sign, yield sign, flashing beacon or signal. Fifty feet from the nearest rail of a railroad crossing.",
        trap: "Twenty feet is the crosswalk figure, and a stop sign usually stands near a crosswalk, which is exactly how the two get swapped.",
        excerptKey: "parking-stop-sign-30",
        sourceLabel: "Utah Driver Handbook - Section 8.D Parking",
        sourceUrl: hb(32),
      },
      {
        id: "ut_s3_10",
        topic: "safety",
        question:
          "A flooded road is ahead and the water looks shallow. What does the Utah handbook say?",
        choices: [
          "Do not attempt to cross - turn around and find another route",
          "Cross slowly in a low gear without stopping",
          "Cross only if the water is under six inches deep",
          "Follow another vehicle across at a safe distance",
        ],
        correctIndex: 0,
        explanation:
          "The instruction is absolute: if the water appears shallow enough to cross, do not attempt to cross a flooded roadway. Water hides dips, and floodwater can wash out the road surface underneath.",
        context:
          "The numbers behind the rule explain it. Six inches of water reaches the bottom of most passenger cars and can cause loss of control or stalling. Two feet of moving water carries away most vehicles, sport utility vehicles and pickups included. If there is no other route, the handbook says to go to higher ground and wait for the water to drop.",
        trap: "Judging depth by eye is the error the rule is written against, because the surface tells you nothing about the road beneath it.",
        excerptKey: "flooding-two-feet",
        sourceLabel: "Utah Driver Handbook - Section 11.E Flooding",
        sourceUrl: hb(58),
      },
      {
        id: "ut_s3_11",
        topic: "rightOfWay",
        question:
          "You reach a narrow single-lane bridge on a rural Utah road at the same time as a vehicle coming the other way. Who crosses first?",
        choices: [
          "The first driver to reach the bridge",
          "The heavier vehicle",
          "The vehicle traveling uphill",
          "The vehicle on the right of the bridge center line",
        ],
        correctIndex: 0,
        explanation:
          "The first driver to the bridge has the right of way. The handbook's advice for the rest is simply to take turns.",
        context:
          "Rural roads bring their own set of hazards the handbook treats separately: gravel and dirt with less traction, narrow roads with ditches instead of shoulders, open steel bridge gratings that need a firm grip and lower speed, limited views past crops and wooded slopes, and uncontrolled intersections that deserve to be approached ready to stop.",
        trap: "The yield-to-uphill-traffic rule is a mountain road rule about narrow grades, not a bridge rule.",
        excerptKey: "narrow-bridge",
        sourceLabel: "Utah Driver Handbook - Section 11.K Rural Roads",
        sourceUrl: hb(61),
      },
      {
        id: "ut_s3_12",
        topic: "rules",
        question:
          "Under the 2026 change to Utah law, what signal must you give when entering or leaving a roundabout?",
        choices: [
          "A left signal on entry and a right signal on exit",
          "A right signal on exit only",
          "None - no signal of intention to turn is required",
          "A two-second signal in both cases, as for any turn",
        ],
        correctIndex: 2,
        explanation:
          "Section 41-6a-804(5) says an individual is not required to signal an intention to turn when entering or exiting a roundabout. The requirement was removed by House Bill 128 in the 2026 session.",
        context:
          "The rest of the roundabout advice is unchanged and short: slow down on the approach, yield to traffic already circulating and to pedestrians, enter when it is clear, and leave at your street. Utah's own definition adds that a roundabout is a circular intersection flowing counterclockwise, which is what makes yielding to the left the natural habit.",
        trap: "The handbook's rules chapter has not been rewritten around the change, so the book is silent rather than contradictory - the statute is where the answer lives.",
        excerptKey: "uca-roundabout-no-signal",
        sourceLabel: "Utah Code 41-6a-804 - Turning or changing lanes",
        sourceUrl: uca("804"),
        commonlyMissed: true,
      },
      {
        id: "ut_s3_13",
        topic: "sharing",
        question:
          "Utah allows motorcycle lane filtering under narrow conditions. Which of these is one of them?",
        choices: [
          "The road has a speed limit of 45 mph or less",
          "The rider is traveling at 25 mph or less",
          "The road is a freeway on-ramp",
          "The vehicle being passed is moving slowly",
        ],
        correctIndex: 0,
        explanation:
          "Filtering is legal only on a roadway or off-ramp with a speed limit of 45 mph or less, where the rider is doing 15 mph or less and the vehicle being overtaken in the same lane is stopped.",
        context:
          "The road must also be divided into two or more adjacent lanes in the same direction, the movement must be safe, and filtering is not permitted on an on-ramp. Lane splitting - riding between cars that are moving at speed - is illegal in Utah and the handbook says so plainly. Filtering is the stationary-traffic version of the same idea.",
        trap: "Fifteen miles an hour is the rider's own speed, not the road's limit. Mixing up which number goes where is the usual mistake.",
        excerptKey: "lane-filtering-45",
        sourceLabel: "Utah Driver Handbook - Section 14.F Lane Filtering/Splitting",
        sourceUrl: hb(82),
      },
      {
        id: "ut_s3_14",
        topic: "emergencies",
        question:
          "Your vehicle goes into a body of water after a crash. How long does the Utah handbook say it will float?",
        choices: ["About 10 seconds", "30 to 60 seconds", "Two to three minutes", "As long as the doors stay closed"],
        correctIndex: 1,
        explanation:
          "Thirty to sixty seconds. That is the window to get out, which is why the instruction is to move immediately rather than to assess.",
        context:
          "The sequence is belt off, window down, out onto the roof, and only then judge the current before swimming. If the car is going down fast and neither door nor window will open, you shed heavy clothing but keep your shoes on in case you have to kick the glass out, and use the air pocket at the highest point of the cabin for a last breath.",
        trap: "Waiting for the pressure to equalize is the last resort, not the plan. The first move is the window while the car is still on the surface.",
        excerptKey: "submerged-30-60",
        sourceLabel: "Utah Driver Handbook - Section 11.N Vehicle Submerged Underwater",
        sourceUrl: hb(62),
      },
      {
        id: "ut_s3_15",
        topic: "licensing",
        question:
          "How many points does a Utah driver under 21 need to accumulate in three years before the Division calls them to a hearing?",
        choices: ["50", "70", "100", "200"],
        correctIndex: 1,
        explanation:
          "Seventy points in three years for a driver under 21. The adult threshold is 200, so a young driver reaches it far faster.",
        context:
          "The schedule shows how quickly 70 arrives: reckless driving is 80 points on its own, failure to yield and following too closely are 60 each, running a red light or a stop sign is 50, texting while driving is 50, and any other moving violation is 40. Two ordinary violations can put a provisional driver in front of a hearing officer.",
        trap: "200 is the figure most study material quotes because it is the adult number. Anyone holding a provisional license is on the 70-point scale.",
        excerptKey: "points-under-21",
        sourceLabel: "Utah Driver Handbook - Section 13.F Point Distribution",
        sourceUrl: hb(72),
        commonlyMissed: true,
      },
      {
        id: "ut_s3_16",
        topic: "signs",
        question:
          "You approach a crossbuck sign at a railroad crossing with no lights or gates. What does it require?",
        choices: [
          "Stop every time, regardless of whether a train is coming",
          "Nothing, unless a train is visible",
          "Yield to train traffic, and be ready to stop at the tracks",
          "Sound the horn before crossing",
        ],
        correctIndex: 2,
        explanation:
          "The crossbuck is the yield sign of the railroad. You are not required to stop where nothing is coming, but you must be ready to stop and you must give way to any train.",
        context:
          "A small sign under the crossbuck says how many tracks there are where a crossing has more than one, though the handbook warns that not every multi-track crossing carries one. Where lights start flashing or bells ring you must stop; where there are gates you stay stopped until they are fully raised and the lights are off.",
        trap: "Only commercial vehicles, school buses and hazardous-materials trucks must stop at every crossing. An ordinary car yields.",
        excerptKey: "railroad-cross-quickly",
        sourceLabel: "Utah Driver Handbook - Section 9.I Railroad Crossing Signs",
        sourceUrl: hb(47),
      },
      {
        id: "ut_s3_17",
        topic: "speed",
        question:
          "How fast may you drive in Utah's I-15 express lanes if you are a single occupant with no express pass?",
        choices: [
          "The posted limit, since anyone may use the lane",
          "The posted limit, provided you exit at the next interchange",
          "10 mph below the posted limit",
          "You may not use the lane at all",
        ],
        correctIndex: 3,
        explanation:
          "The express lanes are for vehicles carrying two or more people, motorcycles, buses and clean-fuel vehicles with a C decal. A single-occupant driver needs an express pass and a funded account.",
        context:
          "Access is not free-form either. It is illegal to cross the double white line, and entry and exit are only allowed at access points marked with white dotted striping, each about 3,000 feet long and placed near almost every interchange. The Division recommends leaving the express lanes one interchange before your exit. Being followed by an emergency vehicle is the one situation where a right-hand lane change out of the lane is permitted.",
        trap: "The double white line is not decorative. Crossing it to slip into or out of the lane is the offense, whoever is in the car.",
        excerptKey: "express-lane-double-white",
        sourceLabel: "Utah Driver Handbook - Section 9.B Carpool (Express) Lane",
        sourceUrl: hb(40),
      },
      {
        id: "ut_s3_18",
        topic: "impairment",
        question:
          "Utah's definitions carry a separate offense called Extreme DUI. Which of these meets it?",
        choices: [
          "A blood or breath alcohol level of 0.08 or higher",
          "A blood or breath alcohol level of 0.16 or higher",
          "Any DUI committed with a passenger under 16 in the vehicle",
          "A second DUI within ten years of the first",
        ],
        correctIndex: 1,
        explanation:
          "Extreme DUI starts at 0.16, which is more than three times Utah's ordinary 0.05 threshold. It is a definition about the reading, not about repetition or passengers.",
        context:
          "The definition has three routes into it: a blood or breath alcohol level of 0.16 or higher; a level of 0.05 or higher combined with any measurable controlled substance; or a combination of two or more controlled substances that are neither prescribed nor within the medical cannabis provisions. A passenger under 16 raises an ordinary DUI to a class A misdemeanor, which is a separate escalation.",
        trap: "0.08 is the ordinary limit in most other states and is not any kind of threshold in Utah.",
        excerptKey: "def-extreme-dui",
        sourceLabel: "Utah Driver Handbook - Section 1 Definitions",
        sourceUrl: hb(1),
      },
      {
        id: "ut_s3_19",
        topic: "safety",
        question:
          "Utah allows studded snow tires only during part of the year. Which part?",
        choices: [
          "September 30 through April 30",
          "October 15 through March 31",
          "November 1 through March 15",
          "Whenever snow is on the ground",
        ],
        correctIndex: 1,
        explanation:
          "October 15 through March 31 each year. Outside that window metal studs are not permitted.",
        context:
          "The handbook's winter chapter is unusually practical for Utah's geography: fit snow tires before the first snowfall rather than after, put them on all four wheels of a front-wheel-drive car, clear ice and snow from headlights, taillights, wipers and every window before setting off, and remember that bridges, ramps and overpasses freeze first.",
        trap: "The dates are fixed. Whether there is snow on the road on a given day does not extend or shorten them.",
        excerptKey: "studded-tires",
        sourceLabel: "Utah Driver Handbook - Section 11.O Weather",
        sourceUrl: hb(63),
      },
      {
        id: "ut_s3_20",
        topic: "rules",
        question:
          "Utah's handbook allows one particular U-turn that surprises people. Which is it?",
        choices: [
          "A U-turn from the off-ramp of a single-point urban interchange, facing a green arrow",
          "A U-turn across a double yellow line where no sign forbids it",
          "A U-turn on any street wider than four lanes",
          "A U-turn at a red light, from a one-way street onto a one-way street",
        ],
        correctIndex: 0,
        explanation:
          "At a single-point urban interchange it is legal to U-turn from the off-ramp and re-enter the freeway, so long as you are facing a green arrow when you start the movement.",
        context:
          "You will face a red arrow when you re-enter on the on-ramp; the handbook explains that the red arrow is meant for the traffic beside the light rather than for you, and tells you not to stop in the middle of the intersection but to finish what you started. The same chapter warns that if the power fails at a single-point urban interchange, it is not treated as a four-way stop.",
        trap: "The green arrow is the condition and it is checked at the START of the maneuver, not at the end of it.",
        excerptKey: "spui-uturn",
        sourceLabel: "Utah Driver Handbook - Section 9.B Single-Point Urban Interchange",
        sourceUrl: hb(41),
      },
      {
        id: "ut_s3_21",
        topic: "parking",
        question:
          "May you stop on the shoulder of a Utah interstate to answer a phone call?",
        choices: [
          "Yes, provided you are fully off the travel lane",
          "Yes, for up to ten minutes",
          "Only with hazard lights on",
          "No - the shoulder is only for a breakdown or physical distress",
        ],
        correctIndex: 3,
        explanation:
          "The handbook restricts the interstate shoulder to vehicles that have broken down or drivers in physical distress. Convenience is not on the list.",
        context:
          "The same thinking runs through the freeway rules: no driving in the emergency lane outside the solid white line, no stopping there to pick up passengers, no backing up, and no using an entrance ramp as an exit. If you do stop for a genuine reason, the handbook wants you as far off the road as possible, the hood up, the hazard lights on and you inside the vehicle rather than walking beside it.",
        trap: "Being clear of the travel lane is not the test. The reason for stopping is.",
        excerptKey: "parking-shoulder-interstate",
        sourceLabel: "Utah Driver Handbook - Section 8.D Parking",
        sourceUrl: hb(32),
      },
      {
        id: "ut_s3_22",
        topic: "signals",
        question:
          "A red arrow for a left turn will not change and you are stranded at the light. What does the Utah handbook say you may do?",
        choices: [
          "Turn left if it is safe, when you are going from a one-way street onto a one-way street",
          "Turn left after 30 seconds, wherever you are",
          "Reverse and take another route",
          "Treat the arrow as a flashing red and turn after stopping",
        ],
        correctIndex: 0,
        explanation:
          "The handbook's only escape from a stranded red left arrow is the one-way to one-way turn, and only when it is safe to make it.",
        context:
          "A red arrow otherwise means the movement it points at is prohibited: stop and stay stopped until an indication to proceed appears. Section 41-6a-305 states the underlying permission slightly more broadly, allowing a left from a one-way street into a one-way street after stopping at a steady circular red. Both readings agree on the one-way to one-way case, which is the one worth learning.",
        trap: "Neither source lets you turn left on red from a two-way street. Utah's default remains right on red only.",
        excerptKey: "signal-red-arrow",
        sourceLabel: "Utah Driver Handbook - Section 9.H Traffic Signals",
        sourceUrl: hb(46),
      },
      {
        id: "ut_s3_23",
        topic: "rightOfWay",
        question:
          "A vehicle ahead of you has stopped at a marked crosswalk to let a pedestrian cross. What may you do?",
        choices: [
          "Pass it on the left if your lane is clear",
          "Pass it on the right if there is room",
          "Neither - you may not overtake and pass a vehicle stopped at a crosswalk",
          "Pass once the pedestrian reaches the center line",
        ],
        correctIndex: 2,
        explanation:
          "Section 41-6a-1002 forbids overtaking and passing a vehicle that is stopped at a crosswalk to let someone cross. The stopped vehicle is hiding the pedestrian from you.",
        context:
          "The handbook puts the same rule in plain words and gives the reason: never pass vehicles stopped at a crosswalk, because there may be people crossing that you cannot see. It sits beside the other pedestrian duties - stop and stay stopped until the person has cleared your half of the road, and make a complete stop at any occupied school crosswalk.",
        trap: "Having your own clear lane is irrelevant. The prohibition is about the view the stopped vehicle is blocking.",
        excerptKey: "uca-no-pass-stopped-crosswalk",
        sourceLabel: "Utah Code 41-6a-1002 - Pedestrians' right-of-way",
        sourceUrl: uca("1002"),
        commonlyMissed: true,
      },
      {
        id: "ut_s3_24",
        topic: "sharing",
        question:
          "A cyclist rides up to a stop sign in Utah. What does the law let them do?",
        choices: [
          "Nothing different - they must stop like any vehicle",
          "Slow to a reasonable speed and roll through after yielding",
          "Ride through without slowing if the road is clear",
          "Use the crosswalk instead, at any speed",
        ],
        correctIndex: 1,
        explanation:
          "Utah allows a cyclist to treat a stop sign as a yield: slow to a reasonable speed and give way to pedestrians, to traffic in the intersection and to oncoming traffic that is an immediate hazard.",
        context:
          "The allowance does not apply at a crossing with an active railroad grade crossing, and it does not change anything for a driver. Bicycles are vehicles on Utah roadways with the same rights and duties, they ride as near as practicable to the right edge except when turning left, passing or avoiding hazards, and they may ride two abreast if that does not impede traffic.",
        trap: "This is a rule about cyclists, not drivers. A driver who rolls a stop sign has committed a 50-point violation.",
        excerptKey: "uca-bicycle-stop-sign",
        sourceLabel: "Utah Code 41-6a-1105 - Operation of bicycle or moped",
        sourceUrl: uca("1105"),
      },
      {
        id: "ut_s3_25",
        topic: "licensing",
        question:
          "How much supervised practice driving must a Utah applicant aged 15 to 18 complete?",
        choices: [
          "20 hours, with no night requirement",
          "30 hours, including 6 at night",
          "40 hours, including 10 after sunset",
          "50 hours, including 10 at night",
        ],
        correctIndex: 2,
        explanation:
          "Forty hours with a parent or legal guardian, ten of them after sunset. It sits alongside driver education rather than replacing it.",
        context:
          "The classroom requirement runs to 27 hours in a high school course, 18 hours at a commercial or private school, or 30 hours of Utah-approved online or home study, plus six hours behind the wheel and six hours of observation. The same 40-hour practice figure applies to an applicant of 19 or over who wants a license without completing driver education.",
        trap: "Fifty hours is the figure in a number of other states. Utah's is 40, and the night portion is measured from sunset rather than from full dark.",
        excerptKey: "practice-40-hours",
        sourceLabel: "Utah Driver Handbook - Section 3.A Driver Education",
        sourceUrl: hb(6),
      },
      {
        id: "ut_s3_26",
        topic: "emergencies",
        question:
          "You have a front tire blowout at speed. What does the Utah handbook tell you to do?",
        choices: [
          "Brake hard immediately to shed speed",
          "Steer toward the shoulder at once and stop where you are",
          "Accelerate briefly to regain stability",
          "Grip the wheel, steer straight, ease off the gas and let the vehicle slow",
        ],
        correctIndex: 3,
        explanation:
          "Hold the wheel firmly, keep it straight, take your foot off the accelerator and let the vehicle slow itself. Braking is what turns a blowout into a spin.",
        context:
          "A front blowout pulls hard toward the failed tire; a rear one makes the vehicle wobble and shake and pull the same way. Brake gently only if you must, do not stop in the roadway, and pull off somewhere flat and safe before changing the tire. The same instinct-versus-instruction gap appears with a stuck accelerator, where the answer is neutral rather than the brake.",
        trap: "Slamming the brakes is the reflex and the wrong one - you are asking the remaining tires to do the work while the car is already unbalanced.",
        excerptKey: "tire-blowout",
        sourceLabel: "Utah Driver Handbook - Section 12.B Tire Blowout",
        sourceUrl: hb(67),
      },
      {
        id: "ut_s3_27",
        topic: "safety",
        question:
          "The Utah handbook says you should leave a specific gap between your chest and the steering wheel. How much?",
        choices: ["6 inches", "8 inches", "10 inches", "12 inches"],
        correctIndex: 2,
        explanation:
          "Ten inches. Air bags deploy out of the dashboard at up to 200 mph, and the distance is what keeps that force from doing damage.",
        context:
          "The rest of the seating position is set out in the same place: back against the seat, feet on the floor, heel able to move from brake to accelerator without lifting, the top of the wheel no higher than your shoulders and below chin level, the seat upright rather than reclined, and the headrest touching the back of your head above ear level.",
        trap: "Air bags are designed to work with belts, never instead of them. Sitting close enough to reach the pedals comfortably is not a reason to sit inside the deployment zone.",
        excerptKey: "air-bag-speed",
        sourceLabel: "Utah Driver Handbook - Section 7.E Air Bags",
        sourceUrl: hb(29),
      },
      {
        id: "ut_s3_28",
        topic: "signs",
        question:
          "What does a white sign showing a black arrow pointing one way, with no other wording, tell you?",
        choices: [
          "The lane is about to end",
          "Only turns in that direction are permitted",
          "A one-way street begins at the next intersection",
          "Traffic moves only in the direction of the arrow",
        ],
        correctIndex: 3,
        explanation:
          "It marks a one-way roadway. Traffic moves only in the direction of the arrow, and turning against it is driving the wrong way on a one-way street.",
        context:
          "Wrong way on a one-way street carries 60 points in Utah, the same as failing to yield the right of way, and the handbook's own crash statistics list wrong side and wrong way among the top five causes of death on Utah highways. Single-point urban interchanges carry extra WRONG WAY signs on their ramps for the same reason.",
        trap: "It is not a turn-only instruction. It describes the direction traffic runs on the road you are looking at.",
        excerptKey: "one-way-arrow",
        sourceLabel: "Utah Driver Handbook - Section 9.I Warning Signs",
        sourceUrl: hb(49),
      },
      {
        id: "ut_s3_29",
        topic: "rules",
        question:
          "You are approaching a stop line behind another vehicle. How far back should you stop?",
        choices: [
          "One car length",
          "Two car lengths",
          "Close enough to read its license plate",
          "Close enough to see the rear tires of the vehicle in front touching the road",
        ],
        correctIndex: 3,
        explanation:
          "The handbook's gauge is the rear tires: if you can see where they meet the pavement, you have room to pull out around the vehicle if it stalls.",
        context:
          "The same section forbids stopping over a marked stop line, a pedestrian crosswalk, a sidewalk or any other marker, and forbids stopping inside the intersection itself. On the skills test both faults are scored, and pulling forward over the line is one of the common ones because it is hard to judge from the driver's seat.",
        trap: "The gap is a safety margin, not politeness. Leaving less than the tire line means you are trapped if the vehicle ahead cannot move.",
        excerptKey: "see-rear-wheels",
        sourceLabel: "Utah Driver Handbook - Section 8.C Stopping at Stop Line",
        sourceUrl: hb(31),
      },
      {
        id: "ut_s3_30",
        topic: "impairment",
        question:
          "Utah defines careless driving in a way many drivers do not expect. Which of these fits the definition?",
        choices: [
          "Driving 15 mph over the limit on a freeway",
          "Committing a moving violation while distracted by grooming inside the vehicle",
          "Any collision in which you were at fault",
          "Driving after two drinks but under 0.05",
        ],
        correctIndex: 1,
        explanation:
          "Careless driving covers two or more moving violations in a single continuous period of driving, and a single moving violation committed while distracted by something inside the vehicle - the handbook names searching for an item and personal grooming.",
        context:
          "It is a real charge with real consequences: a judge may order the license revoked on a careless driving conviction, and the Division's own points table puts careless driving at 50 points. It sits between an ordinary moving violation and reckless driving, which is willful or wanton disregard for safety and carries 80 points.",
        trap: "It is not a synonym for reckless driving and it is not about speed. The distraction limb is what makes it broader than people expect.",
        excerptKey: "def-careless-driving",
        sourceLabel: "Utah Driver Handbook - Section 1 Definitions",
        sourceUrl: hb(1),
      },
      {
        id: "ut_s3_31",
        topic: "speed",
        question:
          "You are on a mountain road in Utah and a vehicle is coming up the grade toward you as you descend. Who yields?",
        choices: [
          "You do - downhill traffic yields to uphill traffic",
          "The uphill driver, who has more control",
          "Whoever has the wider shoulder available",
          "Neither, unless a sign says so",
        ],
        correctIndex: 0,
        explanation:
          "On a narrow mountain road the descending vehicle yields. A vehicle climbing a grade loses momentum it may not be able to regain.",
        context:
          "The handbook's mountain chapter is written around gravity. Going up, use lower gears and pull over or stay right if the vehicle struggles. Going down, choose a safe speed, use a low gear and proper braking technique, and never coast by shifting into neutral or holding the clutch in. Sound the horn approaching a sharp curve on a narrow road where the view is blocked.",
        trap: "Coasting downhill in neutral feels economical and removes the engine braking you need on a long Utah grade.",
        excerptKey: "mountain-yield-uphill",
        sourceLabel: "Utah Driver Handbook - Section 11.I Mountain Driving",
        sourceUrl: hb(60),
      },
      {
        id: "ut_s3_32",
        topic: "parking",
        question:
          "You are parking downhill against a curb in Utah. Which way do the front wheels go?",
        choices: [
          "Away from the curb",
          "Straight ahead",
          "Toward the curb only if the vehicle is a manual",
          "Toward the curb, with the front tire touching it",
        ],
        correctIndex: 3,
        explanation:
          "Downhill, the wheels turn toward the curb so the front tire rests against it. If the vehicle rolls, the curb catches it instead of the traffic lane.",
        context:
          "Uphill is the mirror image: turn the wheels away from the curb and let the vehicle settle back so the tire touches it. With no curb at all on an uphill slope, turn to the right so a rolling vehicle would leave the road rather than cross it. Park position and the parking brake go on in every case.",
        trap: "Learning it as one rule leads to using the same direction on both slopes. There are two positions and the slope decides which.",
        excerptKey: "hill-park-downhill",
        sourceLabel: "Utah Driver Handbook - Section 8.D Hill Parking",
        sourceUrl: hb(32),
      },
      {
        id: "ut_s3_33",
        topic: "sharing",
        question:
          "How old must a rider be before Utah stops requiring a DOT-approved helmet on a motorcycle?",
        choices: ["16", "18", "21", "There is no age - helmets are required for everyone"],
        correctIndex: 2,
        explanation:
          "Twenty-one. Every motorcycle operator or passenger under that age must wear an approved DOT helmet, and the same threshold applies to street-legal all-terrain vehicles.",
        context:
          "A motorcycle endorsement is required to ride on Utah highways, added to a driver license after tests that differ from the car ones, and the Division may waive the rider skills portion for someone who finishes an approved motorcycle education course. Every street-licensed motorcycle also has to carry liability insurance. The 2026 session extended the under-21 helmet requirement to certain electric motorcycles.",
        trap: "Utah is not an all-rider helmet state, so the answer is an age rather than a blanket requirement - but it is 21 rather than 18.",
        excerptKey: "motorcycle-helmet-21",
        sourceLabel: "Utah Driver Handbook - Section 14.F Motorcycles",
        sourceUrl: hb(81),
      },
      {
        id: "ut_s3_34",
        topic: "safety",
        question:
          "How long does the Utah handbook say most people need to sleep to stay alert through the day?",
        choices: ["5 to 6 hours", "6 to 7 hours", "7 to 9 hours", "9 to 10 hours"],
        correctIndex: 2,
        explanation:
          "Seven to nine hours. The handbook puts it at the top of its trip-planning list, before any of the mechanical checks.",
        context:
          "Its other fatigue advice is specific: stop every two hours on a long drive, take a 20-minute power nap rather than pushing on, avoid driving late at night, and check medicine labels for anything that causes drowsiness. The warning signs it lists are worth knowing - not remembering the last few miles, hitting a rumble strip, repeated yawning, tailgating, and missing signs.",
        trap: "Fatigue is treated as an impairment in the same chapter as alcohol and drugs, not as a comfort issue.",
        excerptKey: "fatigue-sleep",
        sourceLabel: "Utah Driver Handbook - Section 11.D Fatigue",
        sourceUrl: hb(57),
      },
      {
        id: "ut_s3_35",
        topic: "rightOfWay",
        question:
          "You are on an entrance ramp merging onto a Utah interstate. Who has the right of way?",
        choices: [
          "The traffic already on the interstate",
          "You, because merging traffic is entitled to a gap",
          "Whichever vehicle is traveling faster",
          "Neither - the merge is decided by whoever reaches the end of the ramp first",
        ],
        correctIndex: 0,
        explanation:
          "Traffic already on the highway has the right of way. You use the acceleration lane to match its speed and find a gap.",
        context:
          "Section 41-6a-903 says a driver in a lane about to merge into a continuing lane yields to all traffic in that continuing lane which is close enough to be an immediate hazard. The handbook's technique is to match speed first and merge second, then cancel the signal. Slowing or stopping at the end of a ramp creates exactly the situation the acceleration lane exists to avoid.",
        trap: "The zipper method at a construction merge is a different situation. On a freeway ramp the continuing lane simply has priority.",
        excerptKey: "merge-yield",
        sourceLabel: "Utah Driver Handbook - Section 8.C Merging and Gore Area",
        sourceUrl: hb(31),
      },
    ],
  },
];
