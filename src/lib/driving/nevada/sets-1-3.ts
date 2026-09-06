import type { DrivingTestSet } from "../types";

// Every fact below was checked against the Nevada Driver's Handbook, DMV 700,
// March 2024, published by the Nevada Department of Motor Vehicles, plus the
// sections of NRS chapters 483, 484B, 484C, 484D and 484E that carry rules the
// handbook states incompletely or not at all, plus two dmv.nv.gov pages for the
// knowledge test format and the teen instruction permit.
//
// Nevada's knowledge test is only 25 questions and the pass mark is 80 percent,
// so the whole margin is five wrong answers. That shapes this bank: the numbers
// the DMV actually asks for are drilled, because on a 25-question test a single
// forgotten distance is a fifth of the way to failing.
//
// The handbook is 86 pages and, unusually, its printed page numbers line up
// exactly with the PDF's page numbers, so every link below is page-anchored.
// It is also more complete than most state handbooks on parking and on DUI
// penalties. The gaps that matter are these:
//
// 1. The handbook prints a table headed "EXAMPLES OF SPEED LIMITS IN NEVADA"
//    and nowhere states a maximum. NRS 484B.600(1)(e) makes any speed over
//    80 mph unlawful outright, and NRS 484B.613(2) caps what NDOT may post at
//    the same 80.
// 2. The handbook says signal "at least 100 feet ahead ... or 300 feet". The
//    operative wording, and the business-or-residential-district trigger, is in
//    NRS 484B.413(2).
// 3. Nevada's seat belt law is enforced only as a secondary offense, and the
//    penalty is a civil one of not more than $25 with no demerit points. The
//    handbook says only "they are the law". NRS 484D.495(3) and (4) carry it.
// 4. A motorcycle, moped or bicycle stuck at a red light that will not detect
//    it may proceed after two complete signal cycles under NRS 484B.307. The
//    handbook never mentions it.
// 5. The restricted license the handbook describes in two lines is limited by
//    NRS 483.270 to pupils in counties under 55,000 people, or towns under
//    25,000 - which is why it is unavailable to most Nevada teenagers.
//
// One genuine conflict is flagged where it arises. Page 79 states the marijuana
// per se limits (2 ng/mL THC, 5 ng/mL metabolite) as a flat prohibition on any
// driver. Since 2021 those numbers sit in NRS 484C.110(4), which applies only to
// the felony-level offenses listed there; the general prohibition in subsection
// 2 is impairment-based. No question in this bank turns on that difference. See
// the research note.
//
// Questions are original. Explanations, context notes and trap notes are written
// from scratch; the deep link is there so the learner reads the Nevada DMV's own
// authoritative wording on the government's site.
const HB = "https://dmv.nv.gov/pdfforms/dlbook.pdf";
/** The handbook's printed page number IS its PDF page number. */
const hb = (page: number) => `${HB}#page=${page}`;
const nrs = (chapter: string, sec: string) =>
  `https://www.leg.state.nv.us/NRS/NRS-${chapter}.html#NRS${chapter}Sec${sec}`;

export const nevadaSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Nevada Basics",
    difficulty: "starter",
    description:
      "The rules you meet on your first drive in Nevada: what the shapes and colors mean, who goes first, and the handful of numbers the DMV's 25-question knowledge test expects you to know cold.",
    questions: [
      {
        id: "nv_s1_01",
        topic: "signs",
        question:
          "A red eight-sided sign faces you at an intersection. What does Nevada require?",
        choices: [
          "Slow down and roll through if nothing is coming",
          "Stop only if another vehicle is approaching",
          "Come to a full stop, then yield to pedestrians and cross traffic before moving forward",
          "Yield to the wider street, then continue",
        ],
        correctIndex: 2,
        explanation:
          "The octagon is reserved for STOP and nothing else. Nevada's handbook is specific about what the stop buys you: after stopping you still owe the right of way to pedestrians and to any cross traffic before you move.",
        context:
          "The handbook teaches signs by shape and color first, because a shape is readable in glare, at distance, or in a language you do not read. Eight sides means stop, a downward triangle means yield, a yellow diamond warns of something ahead, orange means roadwork. Learning the system beats memorizing pictures, because the test draws on signs the book never illustrates.",
        trap: "A rolling stop is not a stop, and an empty cross street changes nothing about the requirement.",
        excerptKey: "signs-stop",
        sourceLabel: "Nevada Driver's Handbook - Signs, Signals and Markings",
        sourceUrl: hb(29),
      },
      {
        id: "nv_s1_02",
        topic: "signs",
        question: "A downward-pointing red and white triangle faces you. What must you do?",
        choices: [
          "Come to a full stop every time, then proceed",
          "Slow down, give way to pedestrians and through traffic, and stop if that is what it takes",
          "Keep your speed, because the sign is only advisory",
          "Sound your horn before entering",
        ],
        correctIndex: 1,
        explanation:
          "A yield sign means other traffic goes first. Nevada does not require an automatic stop, but if there is no safe gap then stopping is exactly what yielding requires.",
        context:
          "The handbook describes yield as meaning the same thing as a stop sign except that you may proceed without a full halt when it is safe. The duties that come with it are the same list: slow on approach, give way to pedestrians and through traffic, and check every direction before you enter.",
        trap: "Yield is not stop, but it is also not carry on regardless. No gap means you wait for one.",
        excerptKey: "signs-yield",
        sourceLabel: "Nevada Driver's Handbook - Signs, Signals and Markings",
        sourceUrl: hb(29),
      },
      {
        id: "nv_s1_03",
        topic: "signals",
        question:
          "You are stopped at a steady red light in Las Vegas and want to turn right. What does the handbook allow?",
        choices: [
          "Stop completely first, then turn if it is clear and no sign prohibits it",
          "Turn without stopping if the way is clear",
          "Turn only where a sign expressly permits it",
          "Turn only on a green arrow",
        ],
        correctIndex: 0,
        explanation:
          "Right on red is Nevada's default rather than a special permission. Two conditions ride with it: the stop has to be a real one, and a sign forbidding the turn overrides the default.",
        context:
          "Nevada treats red as stop and stay stopped, with two movements carved out. Right on red is allowed after a complete stop unless signs say otherwise, and a left on red is allowed from a one-way street onto another one-way street carrying traffic to the left. Having stopped, you still signal and yield to everyone lawfully in the intersection.",
        trap: "Clear enough to go is not the test. If you never stopped, the turn is unlawful on an empty street at three in the morning.",
        excerptKey: "signal-right-on-red",
        sourceLabel: "Nevada Driver's Handbook - Signals",
        sourceUrl: hb(30),
      },
      {
        id: "nv_s1_04",
        topic: "rightOfWay",
        question:
          "Three cars pull up to a four-way stop at different moments. Who has the right of way?",
        choices: [
          "The driver going straight, ahead of anyone turning",
          "The largest vehicle, which needs the most room",
          "Whoever signals first",
          "The driver who reached the intersection first, after stopping completely",
        ],
        correctIndex: 3,
        explanation:
          "Nevada's four-way stop rule is order of arrival. Whoever got there first goes first, and only after actually coming to a stop.",
        context:
          "The handbook states this twice, in the stop-sign section and again in the right-of-way list. When two drivers genuinely arrive together, the tie-breaker is the vehicle on the right. Nothing in Nevada law gives anyone the right of way outright - the rules only say who has to yield, and you are still expected to avoid a crash even when the other driver is in the wrong.",
        trap: "Going straight does not outrank turning at a four-way stop. Arrival order decides it.",
        excerptKey: "row-four-way",
        sourceLabel: "Nevada Driver's Handbook - Right-of-Way",
        sourceUrl: hb(34),
        commonlyMissed: true,
      },
      {
        id: "nv_s1_05",
        topic: "speed",
        question: "What speed limit does the Nevada handbook give for school zones?",
        choices: ["10 mph", "Either 15 or 25 mph", "20 mph only", "30 mph"],
        correctIndex: 1,
        explanation:
          "Nevada posts school zones at either 15 or 25 mph, and the sign tells you which. The statutory school-zone figure is 15 mph, with 25 used where a school crossing zone is signed instead.",
        context:
          "The hours matter as much as the number. Unless the signs say otherwise, the school-zone limit runs on school days from a half hour before school begins to a half hour after it ends. Some zones use a flashing beacon instead, and when the beacon is dark the ordinary posted limit applies.",
        trap: "The limit is not tied to children being visible. If it is a school day and you are inside the window, the reduced limit is in force whether or not anyone is on the sidewalk.",
        excerptKey: "school-zone-speed",
        sourceLabel: "Nevada Driver's Handbook - School Areas",
        sourceUrl: hb(33),
        commonlyMissed: true,
      },
      {
        id: "nv_s1_06",
        topic: "signals",
        question: "A traffic light ahead is flashing red. What does it mean?",
        choices: [
          "Slow down and proceed with caution",
          "The signal has failed and you may ignore it",
          "It means the same as a stop sign - full stop, then go when you have the right of way",
          "Stop and wait for the light to turn green",
        ],
        correctIndex: 2,
        explanation:
          "The handbook says it plainly: a flashing red has the same meaning as a stop sign. You stop completely, then move off only when the road is clear and the right of way is yours.",
        context:
          "The flashing pair is worth learning together. Flashing red is a stop sign; flashing yellow means proceed with caution. Separately, if the signal heads are dark altogether, every driver must come to a full stop and then treat the junction as an all-way stop.",
        trap: "A flashing red will not turn green. Waiting for it to change leaves you parked at the intersection.",
        excerptKey: "signal-flashing-red",
        sourceLabel: "Nevada Driver's Handbook - Signals",
        sourceUrl: hb(30),
      },
      {
        id: "nv_s1_07",
        topic: "rules",
        question:
          "You are driving 35 mph on a Reno street. What minimum following distance does the handbook teach?",
        choices: [
          "At least two seconds",
          "One car length for every 10 mph",
          "At least four seconds",
          "Half a block",
        ],
        correctIndex: 0,
        explanation:
          "At 40 mph or less Nevada teaches a two-second minimum. You start counting when the vehicle ahead passes a fixed object, and you should not reach it before you finish.",
        context:
          "The handbook is careful to call two seconds a minimum, and it notes that most driving instructors recommend up to four. As speed rises so does the gap you need: at 55 mph it says you would need almost seven seconds to stop even with perfect brakes on a good road. Rain, night and slick pavement all push the number up.",
        trap: "Two seconds is a floor, not a target. Quoting it as the answer at freeway speed or in bad weather is how the rule gets misapplied.",
        excerptKey: "follow-two-seconds",
        sourceLabel: "Nevada Driver's Handbook - Defensive Driving Tips",
        sourceUrl: hb(42),
      },
      {
        id: "nv_s1_08",
        topic: "impairment",
        question:
          "You are 17 and hold a Nevada instruction permit. What blood alcohol concentration puts your driving privilege at risk?",
        choices: [
          "0.08 percent, the same as an adult",
          "0.05 percent",
          "Only a level high enough to show visible impairment",
          "0.02 percent",
        ],
        correctIndex: 3,
        explanation:
          "Under 21 in Nevada, a chemical test showing 0.02 percent or more but less than 0.08 is enough to suspend your driving privilege. It is roughly one drink, and it is an administrative penalty the officer can act on immediately.",
        context:
          "There are two thresholds running in parallel. Any driver at 0.08 or above is over the legal limit outright. A driver under 21 is caught at 0.02, and for a license holder under 18 the affidavit signed at the DMV spells out a 185-day revocation for a test between 0.02 and 0.08. You can also be arrested and convicted below 0.08 if you are impaired.",
        trap: "The 0.08 figure everyone memorizes is the adult limit. Under 21 the number that matters to you is 0.02.",
        excerptKey: "dui-under-21",
        sourceLabel: "Nevada Driver's Handbook - Driving Under the Influence",
        sourceUrl: hb(79),
        commonlyMissed: true,
      },
      {
        id: "nv_s1_09",
        topic: "sharing",
        question:
          "A school bus ahead of you on an ordinary two-lane road stops and switches on its flashing red lights. What must you do?",
        choices: [
          "Slow to 15 mph and pass carefully",
          "Stop only if children are visible in the road",
          "Stop, and stay stopped until the driver switches the red lights off",
          "Stop for five seconds, then continue",
        ],
        correctIndex: 2,
        explanation:
          "Nevada requires a stop at any location for a school bus showing a flashing red signal, and the stop lasts until the bus driver turns the red lights off. Nothing shorter counts.",
        context:
          "The rule catches traffic from both directions, and there is exactly one exception: on a divided highway you only have to stop if you are traveling the same direction as the bus. Bus drivers may report violations to the school district and to the DMV, and the registered owner of the vehicle gets a warning letter.",
        trap: "Counting to five and moving off is still passing a bus with its reds on. The lights, not a stopwatch, release you.",
        excerptKey: "schoolbus-stop",
        sourceLabel: "Nevada Driver's Handbook - School Buses",
        sourceUrl: hb(64),
        commonlyMissed: true,
      },
      {
        id: "nv_s1_10",
        topic: "licensing",
        question: "How old must you be to apply for a Nevada instruction permit?",
        choices: ["15", "15 and a half", "16", "17"],
        correctIndex: 1,
        explanation:
          "Nevada's instruction permit opens at fifteen and a half. The full driver license comes no earlier than 16, and if you are under 18 the permit has to be held for at least six months first.",
        context:
          "To get the permit you complete an application, pass a vision test, pass the knowledge test, and have a parent or guardian available to authorize the issue. If you are under 18 you also need a DMV 301 Certification of Attendance signed by your school within the previous 60 days. The permit itself is valid for one year and you must carry it whenever you drive.",
        trap: "Driver education is not a prerequisite for the permit - it is a prerequisite for the license. People turn up expecting the course to come first.",
        excerptKey: "permit-requirements",
        sourceLabel: "Nevada Driver's Handbook - Instruction Permits",
        sourceUrl: hb(15),
      },
      {
        id: "nv_s1_11",
        topic: "signs",
        question: "What does a yellow diamond-shaped sign tell you?",
        choices: [
          "There is a special condition or hazard ahead",
          "A traffic law you must obey",
          "Road construction is in progress",
          "Directions to services such as food and lodging",
        ],
        correctIndex: 0,
        explanation:
          "Yellow diamonds are warning signs. They do not create a rule of their own - they tell you something ahead needs your attention, such as a curve, a dip, a crossing or a merge.",
        context:
          "Nevada's color code is worth learning as a system: red means no, do not or stop; green gives direction; yellow or yellow-green warns; white is regulatory; orange means roadwork; blue is driver services; brown is recreation and scenery. Combine that with the shape code and most unfamiliar signs decode themselves.",
        trap: "A warning sign is not a regulatory sign. The advisory speed on a curve plaque is guidance, while the black-on-white limit beside it is law.",
        excerptKey: "signs-warning",
        sourceLabel: "Nevada Driver's Handbook - Signs",
        sourceUrl: hb(29),
      },
      {
        id: "nv_s1_12",
        topic: "signals",
        question:
          "The light ahead turns steady yellow and you have not yet entered the intersection. What does Nevada expect?",
        choices: [
          "Accelerate to clear the intersection before the red",
          "Continue at the same speed and take your chances",
          "Sound your horn and proceed",
          "Stop",
        ],
        correctIndex: 3,
        explanation:
          "A steady yellow is a warning that red is next. The handbook draws a clean line: if you have not entered the intersection you must stop, and if you are already in it you keep moving and clear it safely.",
        context:
          "The instruction the book repeats is not to speed up to beat the light. Yellow exists so that traffic already committed to the intersection can get out of it, not so that more traffic can get in. Failing to stop for a signal carries four demerit points on a Nevada record.",
        trap: "Beating the light is the reflex the handbook names and rejects. The question is whether you have entered yet, not whether you could make it.",
        excerptKey: "signal-yellow",
        sourceLabel: "Nevada Driver's Handbook - Signals",
        sourceUrl: hb(30),
      },
      {
        id: "nv_s1_13",
        topic: "parking",
        question: "What does a curb painted red mean in Nevada?",
        choices: [
          "Parking is allowed for a limited time",
          "No stopping, standing or parking",
          "A loading zone",
          "Reserved for drivers with a disability placard",
        ],
        correctIndex: 1,
        explanation:
          "Red is the strictest of the curb colors: no stopping, no standing and no parking, with local ordinances filling in the detail.",
        context:
          "Nevada uses five curb colors. White is a very short stop only, to pick up or drop off a passenger or post a letter. Green allows limited-time parking, usually with a sign giving the limit. Yellow is a loading zone governed by local law. Red forbids stopping altogether. Blue marks accessible parking, and using one of those spaces without the placard or plate carries a minimum $250 fine.",
        trap: "Red is not merely no parking. Waiting at the curb with the engine running is standing, and red forbids that too.",
        excerptKey: "curb-red",
        sourceLabel: "Nevada Driver's Handbook - Colored Curb Markings",
        sourceUrl: hb(48),
      },
      {
        id: "nv_s1_14",
        topic: "rightOfWay",
        question:
          "A pedestrian steps into a marked crosswalk on your half of the road as you approach. What must you do?",
        choices: [
          "Yield the right of way, slowing or stopping as needed",
          "Sound your horn to warn them",
          "Continue if you can pass behind them",
          "Proceed if the pedestrian is not yet in your lane",
        ],
        correctIndex: 0,
        explanation:
          "Nevada requires the driver to yield, slow down or stop for a pedestrian crossing within a crosswalk when the pedestrian is on the half of the road you are on, or approaching closely enough from the other half to be in danger.",
        context:
          "Pedestrians in crosswalks and at intersections have the right of way over vehicles, and the handbook adds a point that surprises people: a crosswalk exists wherever two streets meet, even at a T-junction, and even where nothing is painted on the road. A driver who causes even a minor collision with a pedestrian may be charged with reckless driving and lose their license.",
        trap: "Waiting for the pedestrian to be directly in front of your bumper is too late. The duty starts while they are on your half of the road.",
        excerptKey: "ped-wait-other-half",
        sourceLabel: "Nevada Driver's Handbook - Pedestrians",
        sourceUrl: hb(66),
      },
      {
        id: "nv_s1_15",
        topic: "rules",
        question:
          "How far ahead of a turn does the Nevada handbook tell you to signal on a city street?",
        choices: [
          "At least 100 feet, about 10 car lengths",
          "At least 50 feet",
          "At least 200 feet",
          "At least 300 feet",
        ],
        correctIndex: 0,
        explanation:
          "On city streets the figure is 100 feet, which the handbook translates as about ten car lengths. On open highways it doubles and then some, to 300 feet.",
        context:
          "The same pair of distances covers lane changes and the signal you give before passing on a two-lane road. The statute states it as a continuous signal for the last 100 feet in a business or residential district and the last 300 feet anywhere else, and it adds that the rule holds regardless of the weather.",
        trap: "One flick of the stalk as you begin the turn is not a signal for 100 feet. The signal has to run for the whole distance before the maneuver.",
        excerptKey: "signal-100-300",
        sourceLabel: "Nevada Driver's Handbook - Turning",
        sourceUrl: hb(45),
        commonlyMissed: true,
      },
      {
        id: "nv_s1_16",
        topic: "safety",
        question: "Who must wear a safety belt in a Nevada vehicle that is equipped with them?",
        choices: [
          "The driver only",
          "Everyone in the front seat only",
          "Everyone under 18",
          "The driver and every passenger aged six and older",
        ],
        correctIndex: 3,
        explanation:
          "Nevada's belt rule reaches the driver and every passenger aged six and over, wherever they are sitting. Children under six, and anyone under 57 inches tall, belong in an approved child restraint instead.",
        context:
          "The height figure catches people out because it applies regardless of age: a passenger measuring under 57 inches needs a child restraint even if they are older than six. Children under two must ride rear-facing in the back seat. The handbook also warns never to put an infant in the front seat of a car with a passenger airbag.",
        trap: "Back-seat passengers are not exempt in Nevada. The rule covers the front and back seats alike.",
        excerptKey: "belt-age-six",
        sourceLabel: "Nevada Driver's Handbook - Buckle Up",
        sourceUrl: hb(25),
      },
      {
        id: "nv_s1_17",
        topic: "signs",
        question: "You see orange signs and cones ahead. What are they telling you?",
        choices: [
          "A recreation area is ahead",
          "The lane is closed permanently",
          "You are approaching roadwork, and fines here are increased",
          "A detour for trucks only",
        ],
        correctIndex: 2,
        explanation:
          "Orange is Nevada's roadwork color. The handbook is blunt about the consequence: violations in work zones result in increased traffic fines, and speeding fines double.",
        context:
          "Work-zone signs are mostly diamond-shaped like other warnings, but the orange background is what identifies them. Cones, drums and barricades guide you through, sometimes lit at night. Where a flagger is present you follow their direction, and moving a barrier to get onto a closed road is itself an offense carrying double penalties.",
        trap: "An orange speed limit sign is advisory. The black-and-white sign is the regulatory one, and it is the one that doubles.",
        excerptKey: "workzone-double-fines",
        sourceLabel: "Nevada Driver's Handbook - Highway Work Zones",
        sourceUrl: hb(60),
      },
      {
        id: "nv_s1_18",
        topic: "emergencies",
        question:
          "An ambulance comes up behind you with siren and flashing lights. What does Nevada require?",
        choices: [
          "Speed up to stay ahead of it until the next junction",
          "Drive to the right edge of the road and stop, clear of any intersection",
          "Stop immediately wherever you are",
          "Move to the left lane and slow down",
        ],
        correctIndex: 1,
        explanation:
          "You give way to any emergency vehicle using a siren and red lights, from any direction: pull to the right edge of the road and stop until it has passed. The one place you must not stop is inside an intersection.",
        context:
          "The handbook attaches the same duty to police vehicles, fire engines and ambulances, and it repeats the intersection exception twice. If you are in the junction when you notice the siren, clear it first and then pull over on the far side, so you do not block the route the emergency vehicle needs.",
        trap: "Stopping dead in the intersection is the instinct and it is exactly wrong. Clear the junction, then pull right.",
        excerptKey: "emergency-yield",
        sourceLabel: "Nevada Driver's Handbook - Signs",
        sourceUrl: hb(29),
      },
      {
        id: "nv_s1_19",
        topic: "speed",
        question:
          "It is raining hard on a Nevada highway posted at 65 mph. What speed does the law expect?",
        choices: [
          "Whatever speed lets you stay with the flow of traffic",
          "65 mph, since the posted limit does not change with weather",
          "A speed that is reasonable and proper for the conditions, which may be far below 65",
          "Exactly 10 mph below the posted limit",
        ],
        correctIndex: 2,
        explanation:
          "Nevada's Basic Rule sits on top of every posted limit. Traffic, weather, visibility and road surface all factor in, and the safe speed can be well under the number on the sign.",
        context:
          "The handbook lists what you must weigh: the amount and type of traffic, the weather and how far you can see, whether the surface is dry, wet, icy or snow-covered, and whether the road is flat and straight or steep and narrow. Driving too fast for conditions is its own violation in Nevada and carries two demerit points.",
        trap: "The posted limit is a ceiling for perfect conditions, never a guarantee that the number is legal today.",
        excerptKey: "speed-safe-less",
        sourceLabel: "Nevada Driver's Handbook - Controlling Speed",
        sourceUrl: hb(35),
      },
      {
        id: "nv_s1_20",
        topic: "signals",
        question: "A green arrow appears in your turn lane. What does it mean?",
        choices: [
          "Turn only after yielding to oncoming traffic",
          "Prepare to stop, because the arrow is about to change",
          "You may turn but must give way to any vehicle already turning",
          "You may turn in the direction of the arrow, and the turn is protected from other traffic",
        ],
        correctIndex: 3,
        explanation:
          "A green arrow is a protected turn: oncoming traffic is being held for you. You still yield to pedestrians, bicycles and anyone already in the intersection before you go.",
        context:
          "Nevada uses three arrow states. Green is protected. Yellow warns that the arrow is ending and tells you to clear the intersection. Red means you may not make that movement at all. A flashing yellow arrow is different again: you may turn, but you must yield to oncoming traffic and pedestrians first.",
        trap: "Protected does not mean empty. Pedestrians and vehicles already in the intersection still come first.",
        excerptKey: "signal-green-arrow",
        sourceLabel: "Nevada Driver's Handbook - Signals",
        sourceUrl: hb(30),
      },
      {
        id: "nv_s1_21",
        topic: "rules",
        question: "What is Nevada's general position on U-turns?",
        choices: [
          "They are banned except where a sign permits them",
          "They are legal only at signalized intersections",
          "They are generally allowed on any road when they can be made safely",
          "They are legal only in residential districts",
        ],
        correctIndex: 2,
        explanation:
          "Nevada starts from permission rather than prohibition: U-turns are generally allowed on any road when they can be made safely. The restrictions are a list of exceptions, not the default.",
        context:
          "The exceptions are worth learning as a group, because they are what the test asks. No U-turn at or on a railroad crossing, on a one-way street, in front of a fire station, in a business district, where a sign forbids it, where you cannot see 200 feet in each direction, or near a grade with less than 500 feet of visibility. Local authorities and NDOT may ban them anywhere else as well.",
        trap: "Several neighboring states start from a ban. Nevada starts from permission, then carves out the places you may not.",
        excerptKey: "uturn-generally-allowed",
        sourceLabel: "Nevada Driver's Handbook - U-Turns",
        sourceUrl: hb(46),
      },
      {
        id: "nv_s1_22",
        topic: "parking",
        question: "How close to the curb must a legally parked Nevada vehicle sit?",
        choices: [
          "Within 18 inches, front and rear wheels alike",
          "Within 12 inches",
          "Within 2 feet",
          "Within 3 feet",
        ],
        correctIndex: 0,
        explanation:
          "Eighteen inches is the figure, and it applies to both the front and the rear wheels - a car parked square at the front and swung out at the back is not legally parked.",
        context:
          "The rest of the parking checklist goes with it. Face the direction traffic flows. Make sure your vehicle is visible for 200 feet in each direction. Switch the engine off and set the parking brake. Look for bicycles before opening your door. Where a road has no curb and nothing says otherwise, park parallel to the road.",
        trap: "The distance is measured at both ends. The parallel parking instructions in the handbook finish at the same 18 inches for exactly this reason.",
        excerptKey: "park-18-inches",
        sourceLabel: "Nevada Driver's Handbook - Parking",
        sourceUrl: hb(48),
      },
      {
        id: "nv_s1_23",
        topic: "sharing",
        question:
          "You are on a single-lane road overtaking a cyclist. What clearance does Nevada require?",
        choices: ["At least 2 feet", "At least 3 feet", "At least 4 feet", "One full lane width"],
        correctIndex: 1,
        explanation:
          "Where there is no second lane to move into, you pass to the left of the bicycle at a safe distance of not less than three feet, and you may not move back to the right until you are safely clear of it.",
        context:
          "Three feet is the floor, not the rule. The first duty is to change lanes: if there is more than one lane going your way and moving over is reasonably safe, you move over. Only when no adjacent lane exists does the three-foot minimum come into play. Driving in a marked bicycle lane is prohibited outright.",
        trap: "Three feet is what you owe when you cannot change lanes. If a lane is available and it is safe, using it is the requirement.",
        excerptKey: "pass-bicycle-3-feet",
        sourceLabel: "Nevada Driver's Handbook - Passing Bicyclists",
        sourceUrl: hb(48),
      },
      {
        id: "nv_s1_24",
        topic: "signs",
        question: "What does a crossbuck - the white X-shaped sign - mark?",
        choices: [
          "A pedestrian crossing ahead",
          "The point where two highways intersect",
          "A warning that a railroad crossing is coming up",
          "The actual location of the train tracks",
        ],
        correctIndex: 3,
        explanation:
          "The crossbuck sits at the crossing itself and marks where the tracks are. The round yellow sign further back is the advance warning that a crossing is coming.",
        context:
          "The handbook pairs the two signs deliberately. On seeing the round railway crossing sign you slow, get ready to stop and look both ways even with no signal and no stop sign. At the crossbuck itself you yield to trains. If a gate is down you do not go around it, visible train or not, and you never park within 50 feet of the nearest rail.",
        trap: "The circle and the X are not the same sign. One warns from a distance; the other stands at the rails.",
        excerptKey: "signs-crossbuck",
        sourceLabel: "Nevada Driver's Handbook - Signs",
        sourceUrl: hb(29),
      },
      {
        id: "nv_s1_25",
        topic: "licensing",
        question: "Where does your Nevada instruction permit have to be while you are driving?",
        choices: [
          "On file at the DMV, which is enough",
          "At home, provided you can produce it within 10 days",
          "With you in the vehicle",
          "With the supervising driver",
        ],
        correctIndex: 2,
        explanation:
          "You carry the permit when you drive. It is valid for one year, and if it lapses by more than 30 days you sit the knowledge test again before it can be renewed.",
        context:
          "Class C permit driving comes with a supervisor requirement as well: a licensed driver who is 21 or older, holds at least one year of licensed driving experience, and is seated beside you. Under 18, the permit must be held for at least six months before you can apply for a license.",
        trap: "A permit in a drawer at home is no different from no permit at all in a roadside check.",
        excerptKey: "permit-one-year",
        sourceLabel: "Nevada Driver's Handbook - Instruction Permits",
        sourceUrl: hb(15),
      },
      {
        id: "nv_s1_26",
        topic: "safety",
        question: "When are headlights legally required in Nevada?",
        choices: [
          "From a half hour after sunset until a half hour before sunrise",
          "From sunset until sunrise exactly",
          "Only when street lighting is absent",
          "From an hour after sunset until an hour before sunrise",
        ],
        correctIndex: 0,
        explanation:
          "The window opens a half hour after sunset and closes a half hour before sunrise. Three other triggers sit alongside it, and any one of them is enough on its own.",
        context:
          "The other three are insufficient light, whenever people or vehicles cannot be clearly seen at 1,000 feet, and whenever an official traffic control device tells you to. The handbook also advises headlights in rain, snow or fog, and it warns against driving on parking lights alone, which give other drivers no useful information about your width or speed.",
        trap: "Sunset itself is not the trigger. Nevada gives you the half hour on either end, and the 1,000-foot visibility rule can bite long before dusk.",
        excerptKey: "headlights-required",
        sourceLabel: "Nevada Driver's Handbook - Night Driving",
        sourceUrl: hb(56),
      },
      {
        id: "nv_s1_27",
        topic: "rightOfWay",
        question: "You are on the on-ramp merging onto a Las Vegas freeway. Who yields?",
        choices: [
          "Freeway traffic, which must open a gap for you",
          "You do, to traffic already on the freeway",
          "Neither - merging traffic has equal priority",
          "Whichever vehicle is traveling slower",
        ],
        correctIndex: 1,
        explanation:
          "Entering traffic yields. You use the acceleration lane to reach or nearly reach freeway speed, find a gap, signal, and enter only when it is safe.",
        context:
          "The handbook tells you not to stop before merging unless you have to, because a stopped vehicle rejoining fast traffic is dangerous for you and for everyone behind. Drivers already on the freeway are expected to watch for merging traffic and adjust their speed to make the merge smooth, but the legal duty to yield is yours.",
        trap: "Courtesy from freeway drivers is not the same as a right to push in. The yield obligation is on the merging vehicle.",
        excerptKey: "row-freeway",
        sourceLabel: "Nevada Driver's Handbook - Right-of-Way",
        sourceUrl: hb(34),
      },
      {
        id: "nv_s1_28",
        topic: "emergencies",
        question: "You are involved in a collision in Nevada. What are the first things to do?",
        choices: [
          "Photograph the damage, then drive to the nearest police station",
          "Exchange insurance details and leave as quickly as possible",
          "Stop, get medical help for anyone injured, warn traffic and notify law enforcement",
          "Move both vehicles off the road before doing anything else",
        ],
        correctIndex: 2,
        explanation:
          "The handbook's order is stop, get medical help for the injured, warn traffic, notify law enforcement. Everything else, including the exchange of details, follows.",
        context:
          "If the only damage is to property and the vehicles can be moved safely, you move them clear of traffic and return to the scene. You exchange name, address, driver license number, registration and insurance details. If you hit an unattended vehicle or property you leave that same information in person or in a note. Leaving the scene of a crash involving injury or death is a category B felony.",
        trap: "Driving off to report it later is not reporting it. The duty to stop and remain comes first.",
        excerptKey: "crash-steps",
        sourceLabel: "Nevada Driver's Handbook - What to Do in a Crash",
        sourceUrl: hb(76),
      },
      {
        id: "nv_s1_29",
        topic: "impairment",
        question:
          "What blood alcohol concentration makes a driver over 21 unlawful in Nevada regardless of how they seem?",
        choices: ["0.05 percent", "0.08 percent", "0.10 percent", "0.12 percent"],
        correctIndex: 1,
        explanation:
          "Nevada's per se limit is 0.08 percent. Reaching it is the offense in itself, whether or not you look or feel impaired.",
        context:
          "The statute makes it unlawful to drive with 0.08 or more in your blood or breath, or to be measured at 0.08 or more within two hours of driving. Administratively, that reading revokes your driving privilege for 185 days. And the handbook is explicit that 0.08 is a guide rather than a safe harbour: you can be arrested and convicted at a lower level if you are impaired.",
        trap: "Staying just under 0.08 is not a defense. Impairment below the limit is still a DUI in Nevada.",
        excerptKey: "dui-per-se",
        sourceLabel: "Nevada Driver's Handbook - Driving Under the Influence",
        sourceUrl: hb(79),
      },
      {
        id: "nv_s1_30",
        topic: "rules",
        question: "What does Nevada law say about using a phone while driving?",
        choices: [
          "Calls are fine; only texting is banned",
          "Both calls and texting are legal below 25 mph",
          "Phones may be used at a red light",
          "Voice calls need a hands-free accessory, and texting or browsing is banned outright",
        ],
        correctIndex: 3,
        explanation:
          "Nevada splits the two. Talking is allowed only through a hands-free accessory. Typing, texting, reading data, browsing the internet or any other non-voice communication is prohibited whether or not the device is in your hand.",
        context:
          "There is one carve-out: you may use the device to report an emergency where stopping would be inadvisable, impractical or dangerous. Nothing in the statute makes a stationary vehicle in a traffic lane an exception, so a red light is not a safe harbour. Distraction offenses also aggravate in work zones and pedestrian safety zones.",
        trap: "Hands-free is permission to talk, not permission to type. Reading a message at a light is the same offense as reading one at speed.",
        excerptKey: "cell-texting",
        sourceLabel: "Nevada Driver's Handbook - Cell Phones and Texting",
        sourceUrl: hb(43),
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
      "Lines, lanes, right of way and the everyday numbers. These are the rules Nevada expects you to apply without thinking, which is exactly why the DMV keeps asking about them.",
    questions: [
      {
        id: "nv_s2_01",
        topic: "rules",
        question:
          "A solid white line separates two lanes running the same direction. What does it tell you?",
        choices: [
          "Passing is permitted when the road ahead is clear",
          "Do not change lanes or pass across it",
          "The lane to your right is for turning only",
          "You are approaching the edge of the highway",
        ],
        correctIndex: 1,
        explanation:
          "A solid white line between same-direction lanes is a discouragement made explicit: do not change lanes and do not pass across it.",
        context:
          "White lines separate traffic going the same way, yellow lines separate opposing traffic. Broken white means you may cross when it is safe. Solid white also marks the edge of the roadway and the boundary between a travel lane and the shoulder, which is why you sometimes see it where there is no second lane at all.",
        trap: "Solid white and broken white look similar at speed, and only one of them permits the lane change.",
        excerptKey: "mark-solid-white",
        sourceLabel: "Nevada Driver's Handbook - Highway Markings",
        sourceUrl: hb(32),
      },
      {
        id: "nv_s2_02",
        topic: "rules",
        question: "There is a broken yellow line on your side of a two-lane road. What does it mean?",
        choices: [
          "You may pass when it is safe to do so",
          "Passing is prohibited in both directions",
          "The road narrows ahead",
          "A center turn lane begins",
        ],
        correctIndex: 0,
        explanation:
          "A broken yellow line on your side is permission to cross into the oncoming lane to pass, provided the way ahead is clear and it is safe.",
        context:
          "The yellow family is a hierarchy. Broken yellow permits passing. Solid yellow tells you not to cross or pass. Double yellow means no passing where the line on your side is solid. On a two-lane road the handbook also requires clear visibility, no immediate oncoming traffic, and a signal given 100 feet ahead in town or 300 feet elsewhere.",
        trap: "The line permits the pass; it does not certify that the pass is safe. Curves, crests and junctions still forbid it.",
        excerptKey: "mark-double-yellow",
        sourceLabel: "Nevada Driver's Handbook - Highway Markings",
        sourceUrl: hb(32),
      },
      {
        id: "nv_s2_03",
        topic: "rightOfWay",
        question:
          "You reach an intersection just as another vehicle is already partway through it. Who has the right of way?",
        choices: [
          "You do, if you are on the through road",
          "You do, if you are traveling straight",
          "Whichever driver is on the right",
          "The vehicle already in the intersection",
        ],
        correctIndex: 3,
        explanation:
          "Nevada gives priority to the vehicle already in the intersection over anyone just arriving. Clearing the junction comes before filling it.",
        context:
          "The same principle runs through the whole right-of-way list. A vehicle going straight that is already in the intersection outranks one turning left across it, and once that straight vehicle has cleared, the left-turning driver who signalled properly takes their turn. At a four-way stop, order of arrival decides, with the driver on the right breaking a genuine tie.",
        trap: "Being on the bigger road does not let you drive into a junction someone else is still occupying.",
        excerptKey: "row-already-in",
        sourceLabel: "Nevada Driver's Handbook - Right-of-Way",
        sourceUrl: hb(34),
      },
      {
        id: "nv_s2_04",
        topic: "parking",
        question:
          "You want to park near a crosswalk on a Nevada street. How far from it must you stay?",
        choices: ["10 feet", "15 feet", "20 feet", "30 feet"],
        correctIndex: 2,
        explanation:
          "Twenty feet is the crosswalk figure, and you may not park on the crosswalk itself. The statute extends it to unmarked crosswalks as well as painted ones.",
        context:
          "Nevada's no-parking distances are a set the test likes: 15 feet from a hydrant where parallel parking is allowed, 20 feet from a crosswalk, 20 feet from a fire station driveway and 75 feet from one on the opposite side of the road, 30 feet from a traffic control signal, and 50 feet from the nearest rail of a railroad.",
        trap: "The 20-foot rule follows the crosswalk whether or not anyone painted it. A T-junction with no markings still has one.",
        excerptKey: "noparking-crosswalk",
        sourceLabel: "Nevada Driver's Handbook - No Parking Allowed",
        sourceUrl: hb(50),
        commonlyMissed: true,
      },
      {
        id: "nv_s2_05",
        topic: "speed",
        question: "You are overtaking a slow vehicle on a Nevada highway. What does the handbook say about your speed?",
        choices: [
          "Never exceed the speed limit to complete the pass",
          "You may exceed the limit by up to 10 mph while passing",
          "You may exceed the limit as long as you return to it immediately",
          "The limit does not apply in the oncoming lane",
        ],
        correctIndex: 0,
        explanation:
          "There is no passing exemption in Nevada. The speed limit applies during the overtake exactly as it does the rest of the time, and you may never use the shoulder to pass.",
        context:
          "If you cannot complete the pass within the limit, the pass is one you should not start. The handbook's passing rules stack on top of this: clear visibility, no immediate oncoming traffic, a broken yellow line on your side, a signal given in advance, and a return to your lane only once the vehicle you passed is visible in your rear-view mirror.",
        trap: "A brief burst over the limit to get back in safely is still speeding, and it is the answer people pick because it feels reasonable.",
        excerptKey: "pass-never-shoulder",
        sourceLabel: "Nevada Driver's Handbook - Passing Another Vehicle",
        sourceUrl: hb(47),
      },
      {
        id: "nv_s2_06",
        topic: "signals",
        question: "You face a flashing yellow arrow for a left turn. What are you allowed to do?",
        choices: [
          "Turn without stopping, because oncoming traffic is held",
          "Stop, then turn when clear, as at a stop sign",
          "Wait for a green arrow before turning at all",
          "Turn after yielding to oncoming traffic and pedestrians",
        ],
        correctIndex: 3,
        explanation:
          "A flashing yellow arrow is permission to turn, not a protected turn. You yield to oncoming traffic and to pedestrians, then complete the turn when it is safe.",
        context:
          "The distinction between the arrow colors is the whole point. Green arrow means oncoming traffic is being held for you. Flashing yellow arrow means it is not. Steady yellow arrow warns that the movement is ending and tells you to clear the intersection. Red arrow means you may not make that movement at all.",
        trap: "Drivers read any arrow as protection. Oncoming traffic facing a flashing yellow arrow is looking at a green light.",
        excerptKey: "signal-fya",
        sourceLabel: "Nevada Driver's Handbook - Signals",
        sourceUrl: hb(30),
        commonlyMissed: true,
      },
      {
        id: "nv_s2_07",
        topic: "sharing",
        question:
          "You are alongside a tractor-trailer and cannot see the driver's face in the truck's side mirror. What does that tell you?",
        choices: [
          "The mirror is misaligned and is the driver's problem",
          "The driver cannot see you either, and you are in a blind spot",
          "You are far enough back to be safe",
          "You should sound your horn to make yourself known",
        ],
        correctIndex: 1,
        explanation:
          "The handbook gives you this as a simple test: no face in the mirror means no view of you. You are in what it calls a no-zone, and a lane change by that truck would put you under it.",
        context:
          "Trucks and buses have no-zones on both sides, directly behind, and directly in front, and all of them are far bigger than a car's blind spots. The right side is doubly dangerous because large vehicles swing wide to make right turns. Never try to squeeze between a truck and the curb, and never pass behind one that is backing up.",
        trap: "Sitting beside a truck feels safe because you can see it. What matters is whether the driver can see you.",
        excerptKey: "truck-mirror",
        sourceLabel: "Nevada Driver's Handbook - Commercial Vehicles",
        sourceUrl: hb(62),
      },
      {
        id: "nv_s2_08",
        topic: "safety",
        question:
          "You are on high beams on a dark Nevada highway and a car appears ahead of you. When do you dim?",
        choices: [
          "At 200 feet from an oncoming vehicle and 100 feet behind one",
          "Only when the other driver flashes you",
          "At least 500 feet before an oncoming vehicle and 300 feet before one you are following",
          "At least 300 feet before an oncoming vehicle and 500 feet before one you are following",
        ],
        correctIndex: 2,
        explanation:
          "Nevada's pair of distances is 500 feet for oncoming traffic and 300 feet for a vehicle you are following. The larger number goes with the oncoming case, because that driver takes the glare straight in the eyes.",
        context:
          "The handbook encourages high beams in open country at night, which is most of Nevada, and pairs that with the duty to drop them in time. It also tells you not to look directly into oncoming headlights but to look down and to the right of your lane, to keep the windshield clean inside and out, and never to wear sunglasses at night.",
        trap: "The two numbers are easy to reverse. Oncoming is 500; following is 300.",
        excerptKey: "highbeam-500-300",
        sourceLabel: "Nevada Driver's Handbook - Night Driving",
        sourceUrl: hb(56),
        commonlyMissed: true,
      },
      {
        id: "nv_s2_09",
        topic: "rules",
        question:
          "You are using a center two-way left-turn lane. How far may you travel in it before making your turn?",
        choices: ["50 feet", "100 feet", "150 feet", "200 feet"],
        correctIndex: 3,
        explanation:
          "Two hundred feet is the limit before the turn. After you turn out of a side road into the center lane, a separate 50-foot limit applies before you must merge into traffic.",
        context:
          "The center lane is marked by a solid yellow line paired with a broken yellow one on each side. It exists so left-turning traffic can wait out of the through lanes. It is not a travel lane, it may not be used for passing, and drivers may cross into it only to make a left turn onto or from the highway.",
        trap: "It is tempting to treat the center lane as a running start. Two hundred feet is roughly twenty car lengths, and using it as an acceleration lane is unlawful.",
        excerptKey: "mark-center-turn-lane",
        sourceLabel: "Nevada Driver's Handbook - Highway Markings",
        sourceUrl: hb(32),
        commonlyMissed: true,
      },
      {
        id: "nv_s2_10",
        topic: "signs",
        question: "What does a rectangular sign with a white background carry?",
        choices: [
          "A traffic law or regulation you must obey",
          "A warning about the road ahead",
          "Guidance toward a destination",
          "Information about a recreation area",
        ],
        correctIndex: 0,
        explanation:
          "White rectangles are regulatory. They state a law - a speed limit, a turn restriction, a lane use rule - and the handbook says flatly that you must obey them.",
        context:
          "The shape and color together do most of the work. Rectangles carry regulations or directions, diamonds warn, the octagon means stop, the inverted triangle means yield, a pentagon marks school zones and crossings, a circle warns of a railroad crossing ahead, and a shield is a route marker.",
        trap: "Green rectangles are guide signs and orange ones belong to work zones. It is the white background that makes a rectangle law.",
        excerptKey: "signs-regulatory",
        sourceLabel: "Nevada Driver's Handbook - Signs",
        sourceUrl: hb(29),
      },
      {
        id: "nv_s2_11",
        topic: "rightOfWay",
        question: "You are pulling out of a shopping center driveway onto a main road. Who yields?",
        choices: [
          "Traffic on the main road, once you have signalled",
          "You do, to all traffic on the main road and to pedestrians",
          "Neither - the first vehicle to move has priority",
          "Whoever is traveling more slowly",
        ],
        correctIndex: 1,
        explanation:
          "A vehicle entering a main road from a minor road, a private road or a driveway yields to everything already on the main road, and to pedestrians on the sidewalk you cross.",
        context:
          "This is the rule behind a large share of Nevada's crashes: the handbook says failure to yield the right of way is the leading cause of collisions in the state. The pedestrian half is easy to forget, because the sidewalk you cross to reach the road carries people who have priority over you.",
        trap: "A signal announces your intention. It does not create a right to move into traffic that is already there.",
        excerptKey: "row-minor-road",
        sourceLabel: "Nevada Driver's Handbook - Right-of-Way",
        sourceUrl: hb(34),
      },
      {
        id: "nv_s2_12",
        topic: "impairment",
        question:
          "A Nevada officer who suspects you of driving under the influence asks for a blood, breath or urine test. What happens if you refuse?",
        choices: [
          "Nothing, until a court orders the test",
          "You are fined but keep your license",
          "Your driving privilege is revoked, and for a first refusal you are ineligible to drive for one year",
          "You lose your license for 90 days",
        ],
        correctIndex: 2,
        explanation:
          "Nevada's Implied Consent Law makes the test part of the bargain for driving here. Refuse it and your driving privilege is revoked, with a one-year period of ineligibility for a first refusal and three years if you have been revoked in the previous seven.",
        context:
          "Refusal does not remove the evidence either: an officer may direct that blood samples be drawn even on a first offense. The administrative penalty runs separately from anything a court does, and any time you lose your license you can ask the DMV for an administrative hearing.",
        trap: "Refusing looks like withholding evidence. In Nevada it costs you more than the failed test would have.",
        excerptKey: "implied-consent",
        sourceLabel: "Nevada Driver's Handbook - Driving Under the Influence",
        sourceUrl: hb(79),
      },
      {
        id: "nv_s2_13",
        topic: "parking",
        question:
          "You are parallel parking on a street with a fire hydrant. How far from the hydrant must you stay?",
        choices: ["10 feet", "15 feet", "20 feet", "25 feet"],
        correctIndex: 1,
        explanation:
          "Where parallel parking is permitted the figure is 15 feet. It rises to 20 feet where angle parking is permitted and a local ordinance requires the greater distance.",
        context:
          "Nevada's list of places you may not stop, stand or park runs to more than a dozen entries and the test draws from it: sidewalks, driveways, intersections, crosswalks, bridges and tunnels, bicycle lanes, next to another parked vehicle, opposite a highway construction zone, and any space marked with the international symbol of access unless the placard or plate is yours.",
        trap: "Two hydrant numbers exist and the one that applies depends on how the street is laid out. Parallel parking is the 15-foot case.",
        excerptKey: "noparking-hydrant",
        sourceLabel: "Nevada Driver's Handbook - No Parking Allowed",
        sourceUrl: hb(50),
      },
      {
        id: "nv_s2_14",
        topic: "rules",
        question: "You are approaching a roundabout in Nevada. What is required of you?",
        choices: [
          "Stop at the entry, then proceed clockwise",
          "Enter without stopping, because circulating traffic yields",
          "Choose the left lane whatever your exit",
          "Yield to traffic already circulating, which moves counterclockwise",
        ],
        correctIndex: 3,
        explanation:
          "Traffic already in the roundabout has the right of way, and everything moves one direction only: counterclockwise. Entering traffic waits for a gap.",
        context:
          "Lane choice works like any other intersection. The left lane serves a left turn, a U-turn or straight ahead; the right lane serves a right turn or straight ahead. Slow to the speed of the circulating traffic, and signal right as you exit. The raised truck apron around the center island is for large trucks and trailers, not for cars.",
        trap: "Roundabouts feel like an all-way stop, but stopping at the entry when a gap is there just backs up the traffic behind you.",
        excerptKey: "roundabout-yield",
        sourceLabel: "Nevada Driver's Handbook - Roundabouts",
        sourceUrl: hb(44),
      },
      {
        id: "nv_s2_15",
        topic: "speed",
        question: "Is driving well below the speed limit a problem in Nevada?",
        choices: [
          "No, slower is always the safer choice",
          "Yes - a speed so slow that it impedes normal traffic is unlawful",
          "Only on freeways",
          "Only if a minimum speed limit is posted",
        ],
        correctIndex: 1,
        explanation:
          "Nevada makes it unlawful to drive so slowly that you impede the normal and reasonable movement of traffic, unless the slow speed is necessary for safety or required by law.",
        context:
          "The handbook explains why: slow traffic stacks up behind you and pushes other drivers into passes they should not attempt. Where there are two or more lanes your way, slower traffic must move right. Impeding traffic carries two demerit points on a Nevada record, the same as failing to dim your headlights.",
        trap: "A posted minimum is not needed for this to be an offense. The impediment itself is the violation.",
        excerptKey: "nrs-slow-impede",
        sourceLabel: "NRS 484B.623 - Slow driving",
        sourceUrl: nrs("484B", "623"),
      },
      {
        id: "nv_s2_16",
        topic: "emergencies",
        question: "Your brakes fail on a Nevada road. What does the handbook tell you to do?",
        choices: [
          "Shift into park to stop the wheels",
          "Switch off the ignition immediately",
          "Pump the pedal, and if that fails use the parking brake and shift to a lower gear",
          "Steer into the shoulder at full speed",
        ],
        correctIndex: 2,
        explanation:
          "Pump the pedal first. If the brakes still do not respond, use the emergency parking brake and shift down. The handbook is emphatic that you never put the vehicle into park.",
        context:
          "The same warning attaches to a stuck accelerator: press the pedal hard and release to try to free it, then shift to neutral, brake, and pull off to the right - but never into park. On long downhill stretches a lower gear saves the brakes from the heat that causes the failure in the first place.",
        trap: "Park sounds like the fastest way to stop. At speed it can lock the driveline and take away your steering.",
        excerptKey: "brakes-fail",
        sourceLabel: "Nevada Driver's Handbook - Driving Emergencies",
        sourceUrl: hb(58),
      },
      {
        id: "nv_s2_17",
        topic: "signals",
        question:
          "You arrive at an intersection where the traffic lights are completely dark. What must you do?",
        choices: [
          "Come to a full stop, then proceed with caution after yielding",
          "Treat it as a green light in the direction of the through road",
          "Proceed at normal speed, since no signal is displayed",
          "Wait until an officer arrives to direct traffic",
        ],
        correctIndex: 0,
        explanation:
          "A dead signal turns the junction into an all-way stop. Every driver stops fully, yields to pedestrians and to vehicles already stopped or in the intersection, then goes with caution.",
        context:
          "That rule survives a power cut, a knocked-down pole or a fault in the controller. It is different from a flashing red, which is also treated as a stop sign, and from a flashing yellow, which means proceed with caution without stopping.",
        trap: "The through road does not get priority when the lights die. Everyone stops.",
        excerptKey: "signal-dark",
        sourceLabel: "Nevada Driver's Handbook - Signals",
        sourceUrl: hb(30),
        commonlyMissed: true,
      },
      {
        id: "nv_s2_18",
        topic: "sharing",
        question: "How many motorcycles may lawfully share a single Nevada traffic lane?",
        choices: [
          "One - a motorcycle is entitled to the whole lane",
          "Three, in a staggered formation",
          "As many as fit safely",
          "Two, if both riders consent",
        ],
        correctIndex: 3,
        explanation:
          "Nevada allows no more than two abreast in one lane, and only with the consent of the riders. Without that agreement they ride staggered.",
        context:
          "Motorcyclists otherwise have the same rights and responsibilities as other drivers, including the right to use a complete traffic lane. What makes them different is visibility: a motorcycle is small, hard to judge for speed and distance, and its turn signals usually do not cancel themselves, so a blinking signal may be left over from the last turn.",
        trap: "The rule is a ceiling, not an entitlement. Two riders may share a lane by agreement; a car may not join them.",
        excerptKey: "mc-two-abreast",
        sourceLabel: "Nevada Driver's Handbook - Motorcycles",
        sourceUrl: hb(63),
      },
      {
        id: "nv_s2_19",
        topic: "licensing",
        question: "You move to a new address in Nevada. How long do you have to tell the DMV?",
        choices: ["10 days", "30 days", "60 days", "90 days"],
        correctIndex: 1,
        explanation:
          "Thirty days, and the same window covers a name change. An address change can be done online, by mail or in person; a name change has to be done in person with the legal documents.",
        context:
          "Holders of a commercial driver license must change an address in person. Keeping the address current matters more than it looks: the DMV mails renewal notices and warnings about your license status to the address on file, and a suspension notice that goes to an old address is still a suspension.",
        trap: "The 30-day window is the same one new residents get to obtain a Nevada license and to register their vehicles, which is why people mix the deadlines up.",
        excerptKey: "address-30-days",
        sourceLabel: "Nevada Driver's Handbook - Change of Address or Name",
        sourceUrl: hb(19),
      },
      {
        id: "nv_s2_20",
        topic: "safety",
        question: "How far ahead does the Nevada handbook tell you to be looking in city traffic?",
        choices: ["2 seconds", "6 seconds", "12 seconds", "30 seconds"],
        correctIndex: 2,
        explanation:
          "Twelve seconds - roughly a block and a bit at 30 mph. The point is to see the situation developing rather than reacting to the bumper in front of you.",
        context:
          "It is a scanning rule, not a following rule, and the two get confused. Following distance is at least two seconds at 40 mph or less. Visual lead is 12 seconds in town and 20 to 30 seconds at freeway speeds. Commercial vehicles need five seconds or more of following distance because of their weight.",
        trap: "Twelve seconds is how far you look; two seconds is how far you follow. Swapping them produces a dangerously short answer.",
        excerptKey: "look-12-seconds",
        sourceLabel: "Nevada Driver's Handbook - Defensive Driving Tips",
        sourceUrl: hb(42),
      },
      {
        id: "nv_s2_21",
        topic: "parking",
        question:
          "You are parking facing downhill on a street with a curb. Which way do the front wheels go?",
        choices: [
          "Straight ahead, with the parking brake set",
          "Away from the curb",
          "Whichever way the road is cambered",
          "Toward the curb",
        ],
        correctIndex: 3,
        explanation:
          "Downhill, the wheels turn toward the curb, so that a vehicle which starts rolling runs into the curb instead of into the road.",
        context:
          "There are three cases and the logic is the same in all of them: point the wheels so a runaway moves away from traffic. Downhill, turn into the curb. Uphill with a curb, turn away from it so the tire backs into the curb. Uphill with no curb, turn toward the shoulder. Always set the parking brake.",
        trap: "Uphill and downhill take opposite answers, and the uphill case flips again when there is no curb.",
        excerptKey: "hill-downhill",
        sourceLabel: "Nevada Driver's Handbook - Parking on a Hill",
        sourceUrl: hb(49),
        commonlyMissed: true,
      },
      {
        id: "nv_s2_22",
        topic: "signs",
        question: "What shape are most signs used in Nevada highway and street work areas?",
        choices: [
          "Diamond-shaped",
          "Rectangular",
          "Pentagonal",
          "Round",
        ],
        correctIndex: 0,
        explanation:
          "Work-zone signs are mostly diamonds, like other warning signs. It is the orange background rather than the shape that marks them out as roadwork.",
        context:
          "Cones, drums and barricades guide traffic through the zone and may carry warning lights for night work. Flaggers and pilot cars are used to control traffic and you follow their direction. Lanes narrow, the surface is rough, and vehicles ahead may be stopped, so the handbook asks for extra caution as well as reduced speed.",
        trap: "Orange changes the meaning, not the shape. A diamond is still a warning sign.",
        excerptKey: "workzone-signs",
        sourceLabel: "Nevada Driver's Handbook - Signs",
        sourceUrl: hb(30),
      },
      {
        id: "nv_s2_23",
        topic: "rules",
        question: "When may you pass another vehicle on the right in Nevada?",
        choices: [
          "Never - passing on the right is prohibited",
          "On a road clearly marked for two or more lanes your direction, when it is safe",
          "Whenever the vehicle ahead is turning left",
          "On any road, using the shoulder if necessary",
        ],
        correctIndex: 1,
        explanation:
          "Passing on the right is lawful where the road is clearly marked for two or more lanes traveling your direction, and only when it can be done safely. Leaving the paved surface to do it is never allowed.",
        context:
          "The handbook flags this as one of the more dangerous maneuvers, because a driver who has not seen you may change into your lane. Signal, check the mirrors and look over your shoulder first. There is also an absolute rule alongside it: never pass to the left of a driver who is making or signaling a left turn.",
        trap: "A left-turning vehicle is a reason to pass on the right, not on the left. And the shoulder is never a lane.",
        excerptKey: "pass-right-off-pavement",
        sourceLabel: "Nevada Driver's Handbook - Passing Another Vehicle",
        sourceUrl: hb(47),
      },
      {
        id: "nv_s2_24",
        topic: "rightOfWay",
        question:
          "A pedestrian carrying a white cane steps toward the roadway ahead of you. What does Nevada require?",
        choices: [
          "Sound the horn so they know you are there",
          "Proceed if they have not yet left the curb",
          "Yield the right of way, stopping fully if necessary",
          "Call out directions to guide them across",
        ],
        correctIndex: 2,
        explanation:
          "A person who is blind or visually impaired using a white cane or a guide animal has the right of way at all times on any Nevada street or road. You yield, stop if you need to, and take precautions before moving on.",
        context:
          "The handbook adds practical guidance that is itself testable. Do not stop more than five feet from the crosswalk, because the sound of your engine is a navigation cue. Do not honk. Do not give verbal directions. Give the person three or four seconds to decide - if they step back and pull in the cane, they are telling you to go.",
        trap: "Honking feels helpful and is the opposite. It removes the sound cue the pedestrian is using to place your car.",
        excerptKey: "blind-right-of-way",
        sourceLabel: "Nevada Driver's Handbook - Pedestrians Who are Blind or Visually Impaired",
        sourceUrl: hb(67),
        commonlyMissed: true,
      },
      {
        id: "nv_s2_25",
        topic: "speed",
        question:
          "You double your speed from 30 mph to 60 mph. What happens to your braking distance?",
        choices: [
          "It becomes about four times as long",
          "It doubles",
          "It increases by about half",
          "It stays roughly the same, because reaction time dominates",
        ],
        correctIndex: 0,
        explanation:
          "Braking distance grows with the square of speed, so doubling the speed quadruples it. The handbook singles this out as the most important point for a driver to remember.",
        context:
          "Perception and reaction distance is separate again, and it grows in a straight line with speed: normal reaction times run 2 to 2.5 seconds. Add the two together and the handbook's table gives 127 feet to stop from 25 mph and 494 feet from 65 mph. On wet pavement the total can more than double, and on ice a 30 mph stop takes 373 feet.",
        trap: "Twice the speed feels like twice the distance. The braking half of the calculation goes up four times.",
        excerptKey: "stopping-four-times",
        sourceLabel: "Nevada Driver's Handbook - Stopping",
        sourceUrl: hb(41),
      },
      {
        id: "nv_s2_26",
        topic: "signals",
        question:
          "You are on foot and the pedestrian signal starts flashing DON'T WALK with a countdown timer while you are still at the curb. What does it mean?",
        choices: [
          "You may start crossing until the timer reaches five",
          "You may start crossing but must hurry",
          "The signal has failed and you should cross when traffic clears",
          "You may finish a crossing already begun, and must be across before the count reaches zero",
        ],
        correctIndex: 3,
        explanation:
          "The countdown is the time left to complete a crossing, not an invitation to start one. Anyone already lawfully in the roadway may carry on, and must reach the far side before the count hits zero.",
        context:
          "Where the flashing hand is not accompanied by a countdown timer, a pedestrian may not begin to cross at all, and someone who entered lawfully must proceed to a curb, sidewalk or safety zone. A steady hand means do not cross. The handbook notes that most pedestrian deaths happen between intersections rather than at them.",
        trap: "A big number on the countdown looks like permission. It is a deadline for people already crossing.",
        excerptKey: "ped-countdown",
        sourceLabel: "Nevada Driver's Handbook - Walk and Don't Walk Signals",
        sourceUrl: hb(31),
      },
      {
        id: "nv_s2_27",
        topic: "safety",
        question: "When may studded snow tires be used on Nevada roads?",
        choices: [
          "At any time of year",
          "From October 1 through April 30",
          "From November 1 through March 31",
          "Only when a chain control is in effect",
        ],
        correctIndex: 1,
        explanation:
          "The window runs from October 1 to April 30. Tires with retractable studs may be fitted year-round, but the studs themselves may only be extended within those dates.",
        context:
          "Nevada's winter driving advice is more than tires. Start slowly and test the brakes to learn the surface. Slow long before an intersection or a turn. Use gentle, light braking unless the vehicle has ABS, in which case firm continuous pressure is what activates the system. The handbook's line is that there is no completely safe speed on snow and ice.",
        trap: "Retractable studs are the exception people misremember as a year-round allowance. The tire is legal all year; the studs are not.",
        excerptKey: "studded-tires",
        sourceLabel: "Nevada Driver's Handbook - Driving in Bad Weather",
        sourceUrl: hb(57),
      },
      {
        id: "nv_s2_28",
        topic: "impairment",
        question: "What does Nevada's open container law prohibit?",
        choices: [
          "Carrying any alcohol in a vehicle, sealed or not",
          "Carrying opened alcohol in the trunk",
          "Opened alcoholic beverages in the driver or passenger areas of a moving vehicle",
          "Any alcohol in a vehicle driven by someone under 21",
        ],
        correctIndex: 2,
        explanation:
          "The prohibition is on opened containers in the driver or passenger areas while the vehicle is being driven. Sealed bottles, and opened ones out of reach in the trunk, are a different matter.",
        context:
          "The law carves out the living quarters of motor homes and house trailers, and the passenger areas of commercial buses, limousines and taxis. It applies to passengers as well as the driver, so a can in a passenger's hand is the driver's problem too.",
        trap: "It is not a ban on transporting alcohol. It is a ban on opened alcohol within reach while the vehicle is moving.",
        excerptKey: "open-container",
        sourceLabel: "Nevada Driver's Handbook - Other DUI Laws",
        sourceUrl: hb(81),
      },
      {
        id: "nv_s2_29",
        topic: "rules",
        question: "Where does the Nevada handbook say you must not change lanes?",
        choices: [
          "On any road with a posted limit above 45 mph",
          "Within 100 feet of a driveway",
          "On a bridge",
          "In an intersection",
        ],
        correctIndex: 3,
        explanation:
          "Lane changes do not belong in an intersection. The handbook lists it with the rest of the lane-change routine: mirrors, signal, blind spot, and not here.",
        context:
          "The signal distances are the same as for a turn: 100 feet on city streets, 300 feet on highways and freeways. Mirrors alone are not enough, because the blind spot over your shoulder is exactly where a motorcycle sits. The handbook repeats the shoulder check in the freeway section and again in the section on advanced driver assistance systems.",
        trap: "Drivers treat a wide intersection as ordinary road. It is the one place the handbook names where a lane change is out.",
        excerptKey: "lane-change-signal",
        sourceLabel: "Nevada Driver's Handbook - Lane Changes",
        sourceUrl: hb(46),
      },
      {
        id: "nv_s2_30",
        topic: "rightOfWay",
        question: "A funeral procession with headlights on is passing. What does the handbook expect?",
        choices: [
          "Yield and let the vehicles pass as a group",
          "Merge into the procession if you are heading the same way",
          "Treat each vehicle separately at every intersection",
          "Stop completely until the last vehicle has gone by",
        ],
        correctIndex: 0,
        explanation:
          "The procession is treated as one unit. You yield and let the vehicles with their headlights on go through together rather than splitting the line.",
        context:
          "It sits in the same list as the other right-of-way duties: emergency vehicles using a siren and lights, traffic already on a freeway you are entering, cyclists on a bike path or lane, and pedestrians in crosswalks. None of these depends on who technically arrived first.",
        trap: "Cutting into the middle of the line because your light turned green is what the rule exists to prevent.",
        excerptKey: "row-funeral",
        sourceLabel: "Nevada Driver's Handbook - Right-of-Way",
        sourceUrl: hb(34),
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Real Test Difficulty",
    difficulty: "medium",
    description:
      "Written at the level the DMV actually asks. Exact distances, the exception buried in a rule, and the numbers the handbook mentions once and never repeats.",
    questions: [
      {
        id: "nv_s3_01",
        topic: "speed",
        question: "What is the highest speed limit that may lawfully be posted anywhere in Nevada?",
        choices: ["65 mph", "70 mph", "80 mph", "There is no statutory ceiling"],
        correctIndex: 2,
        explanation:
          "Eighty is the ceiling twice over. The Department of Transportation may not establish a limit above 80 mph, and driving faster than 80 is unlawful in any event, whatever the sign says.",
        context:
          "The handbook prints a table it calls examples of speed limits - 15 in school zones, 25 in business and residential areas, 45 going into towns, 65 on urban freeways and rural highways, 70 and above on rural interstate - but it never states a maximum. Nevada does post 80 on stretches of rural interstate, which makes the ceiling a live number rather than a theoretical one.",
        trap: "The handbook's table stops at 70 plus, so 70 looks like the answer. The statutory ceiling is 80.",
        excerptKey: "nrs-ndot-80",
        sourceLabel: "NRS 484B.613 - Speed limits on state highways",
        sourceUrl: nrs("484B", "613"),
        commonlyMissed: true,
      },
      {
        id: "nv_s3_02",
        topic: "parking",
        question: "How far from the nearest rail of a railroad may you park in Nevada?",
        choices: [
          "No closer than 15 feet",
          "No closer than 25 feet",
          "No closer than 50 feet",
          "No closer than 100 feet",
        ],
        correctIndex: 2,
        explanation:
          "Fifty feet from the nearest rail. It is a parking rule, distinct from the 15-foot stopping distance you keep from the tracks when a train is coming.",
        context:
          "The two railroad numbers get confused. Fifteen feet is where you stop when a train approaches and a stop is required. Fifty feet is how far away you leave a parked vehicle. Both appear in the same handbook section, which is why the test can ask either one and expect the other to be the wrong answer offered alongside.",
        trap: "Fifteen feet is the stopping distance, not the parking distance. Answering with it is the intended mistake.",
        excerptKey: "rr-park-50",
        sourceLabel: "Nevada Driver's Handbook - Railroad Crossings",
        sourceUrl: hb(33),
        commonlyMissed: true,
      },
      {
        id: "nv_s3_03",
        topic: "rules",
        question:
          "You are on an open Nevada highway and intend to turn. How far in advance must the signal be given?",
        choices: ["100 feet", "150 feet", "200 feet", "300 feet"],
        correctIndex: 3,
        explanation:
          "Three hundred feet on open highway, which the handbook translates as about thirty car lengths. In town it drops to 100 feet.",
        context:
          "The statute states it as a continuous signal for not less than the last 100 feet in a business or residential district and not less than the last 300 feet anywhere else, and it adds that the rule holds regardless of the weather. The same distances govern lane changes and the signal you give before passing on a two-lane road.",
        trap: "One hundred feet is the town figure. On open highway it is three times that, and the test asks for both.",
        excerptKey: "nrs-signal-100-300",
        sourceLabel: "NRS 484B.413 - Requirements for turning on highway",
        sourceUrl: nrs("484B", "413"),
      },
      {
        id: "nv_s3_04",
        topic: "sharing",
        question:
          "You are on a divided highway traveling the opposite direction from a school bus that has stopped with its red lights flashing. What must you do?",
        choices: [
          "Stop, because Nevada requires both directions to stop everywhere",
          "Continue, because on a divided highway only traffic going the same direction stops",
          "Slow to 15 mph and pass with caution",
          "Stop only if the bus is on your side of the divider",
        ],
        correctIndex: 1,
        explanation:
          "The divided highway is Nevada's one exception. There, only traffic traveling the same direction as the bus has to stop. Everywhere else, from either direction, you stop.",
        context:
          "The statute puts a second exception beside it: you also need not stop where traffic is being controlled by a traffic officer. Neither exception is about lane count. A four-lane road with no physical division is not a divided highway, and every direction stops on it.",
        trap: "Four lanes is not the same as divided. The exception turns on the division, not the width.",
        excerptKey: "schoolbus-divided",
        sourceLabel: "Nevada Driver's Handbook - School Buses",
        sourceUrl: hb(64),
        commonlyMissed: true,
      },
      {
        id: "nv_s3_05",
        topic: "signals",
        question: "When may a Nevada driver turn left on a red light?",
        choices: [
          "From a one-way street onto another one-way street carrying traffic to the left, after stopping",
          "From any street onto a one-way street, after stopping",
          "Never - only right turns are allowed on red",
          "Whenever no sign prohibits it",
        ],
        correctIndex: 0,
        explanation:
          "Both streets have to be one-way, and the street you are turning into must carry traffic to the left. You signal, stop completely, and yield to pedestrians and to all traffic moving on the signal.",
        context:
          "Downtown Las Vegas and Reno both have grids of one-way streets, which is where this comes up in practice. The permission disappears the moment a sign, an arrow signal or a police officer says otherwise - the same override that applies to right on red.",
        trap: "Turning left on red out of a two-way street onto a one-way is not allowed. Both halves have to be one-way.",
        excerptKey: "signal-left-on-red",
        sourceLabel: "Nevada Driver's Handbook - Signals",
        sourceUrl: hb(30),
        commonlyMissed: true,
      },
      {
        id: "nv_s3_06",
        topic: "licensing",
        question:
          "You are 16 and have just passed the knowledge test. How long must you hold the instruction permit before you can apply for a license?",
        choices: ["30 days", "Three months", "There is no minimum", "At least six months"],
        correctIndex: 3,
        explanation:
          "Under 18, the permit has to be held for at least six months before a license application. The permit itself is valid for a year, so the six months sit inside that.",
        context:
          "Three other conditions run alongside it. You need 50 hours of supervised driving, ten of them at night, logged on the DMV's own form. You need a driver education certificate. And you must stay free of at-fault crashes, moving violation convictions and any alcohol or drug conviction for the six months before the license is issued.",
        trap: "Turning 16 does not start a clock. The six months run from the day the permit was issued, and a late permit means a late license.",
        excerptKey: "permit-hold-6-months",
        sourceLabel: "Nevada Driver's Handbook - Instruction Permits",
        sourceUrl: hb(15),
      },
      {
        id: "nv_s3_07",
        topic: "rightOfWay",
        question:
          "You are waiting to turn left at a green light. An oncoming vehicle going straight is already in the intersection. Who goes first?",
        choices: [
          "You do, because you arrived at the light first",
          "The oncoming vehicle, and you turn after yielding",
          "Whichever driver signals first",
          "The vehicle on the right",
        ],
        correctIndex: 1,
        explanation:
          "The straight-through vehicle already in the intersection has the right of way over a driver turning left across it. Once it clears and you have signalled, the turn is yours.",
        context:
          "The handbook adds an instruction people skip: keep the front wheels pointed straight ahead while you wait to turn left. If you are struck from behind with the wheels already turned, the impact pushes you into oncoming traffic. On a two-way road you use the lane just right of the center line and complete the turn into the nearest lane going your way.",
        trap: "Arriving at the light first is irrelevant. What counts is who is already in the intersection.",
        excerptKey: "row-left-turn",
        sourceLabel: "Nevada Driver's Handbook - Right-of-Way",
        sourceUrl: hb(34),
      },
      {
        id: "nv_s3_08",
        topic: "impairment",
        question:
          "A chemical test shows an alcohol concentration of 0.08 percent. How long is the driver license revoked administratively?",
        choices: ["90 days", "120 days", "185 days", "One year"],
        correctIndex: 2,
        explanation:
          "One hundred and eighty-five days. The revocation is administrative - the DMV acts on the test result regardless of what a court later does.",
        context:
          "The same 185 days applies to a driver under 21 measured at 0.02, and to a first criminal DUI conviction. A second DUI within seven years revokes the license for a year; a third revokes it for three, as does a DUI causing death or serious injury. An SR-22 filing may be required, and driving privileges can be restored immediately with an ignition interlock device fitted at the driver's own expense.",
        trap: "The court case and the DMV action are separate. Beating the charge does not automatically undo the administrative revocation.",
        excerptKey: "dui-first-penalty",
        sourceLabel: "Nevada Driver's Handbook - Penalties for DUI",
        sourceUrl: hb(80),
      },
      {
        id: "nv_s3_09",
        topic: "safety",
        question:
          "Apart from the half hour after sunset, at what visibility do Nevada headlights become legally required?",
        choices: [
          "When you cannot see 200 feet",
          "When you cannot see 500 feet",
          "When street lighting is not working",
          "Whenever people or vehicles cannot be clearly seen at 1,000 feet",
        ],
        correctIndex: 3,
        explanation:
          "One thousand feet is the figure. It is a separate trigger from the clock, so heavy rain, dust or smoke in the middle of the afternoon can require headlights.",
        context:
          "Four triggers exist and any one is enough: a half hour after sunset to a half hour before sunrise, insufficient light, the 1,000-foot visibility test, and whenever an official traffic control device directs it. The handbook separately advises headlights in rain, snow or fog even when none of the four applies.",
        trap: "The daylight case is the one people miss. A dust storm on I-15 at noon triggers the requirement as surely as nightfall.",
        excerptKey: "headlights-required",
        sourceLabel: "Nevada Driver's Handbook - Night Driving",
        sourceUrl: hb(56),
      },
      {
        id: "nv_s3_10",
        topic: "signs",
        question:
          "A school crossing guard is standing in the crosswalk holding a stop paddle. When may you move off?",
        choices: [
          "Once the guard is completely out of the crosswalk",
          "As soon as the last child reaches the far curb",
          "As soon as the guard lowers the paddle",
          "Once the guard steps out of your lane",
        ],
        correctIndex: 0,
        explanation:
          "You wait until the guard is completely clear of the crosswalk, not merely clear of your lane. Violating the direction of a school crossing guard is a misdemeanor in Nevada.",
        context:
          "School zones combine signs, signals, markings and crossing guards, and the guard outranks the rest. The reduced limit is 15 or 25 mph depending on the sign, in force from a half hour before school opens to a half hour after it closes. Nevada also bans U-turns in a school zone while the zone is in effect.",
        trap: "Edging forward once the children are across still leaves an adult standing in the road.",
        excerptKey: "school-guard",
        sourceLabel: "Nevada Driver's Handbook - School Areas",
        sourceUrl: hb(33),
      },
      {
        id: "nv_s3_11",
        topic: "parking",
        question: "How close to a traffic control signal at the side of the highway may you park?",
        choices: [
          "No closer than 15 feet",
          "No closer than 20 feet",
          "No closer than 30 feet",
          "No closer than 50 feet",
        ],
        correctIndex: 2,
        explanation:
          "Thirty feet. It exists so a parked vehicle cannot hide the signal from drivers approaching behind it.",
        context:
          "The full Nevada list is worth memorizing as a block, because the distances are all different: 15 feet from a hydrant with parallel parking, 20 feet from a crosswalk, 20 feet from a fire station driveway and 75 feet from one opposite, 30 feet from a traffic control signal, 50 feet from the nearest rail. Sidewalks, intersections, bridges, tunnels and bicycle lanes are out entirely.",
        trap: "Twenty feet is the crosswalk figure and it is the distractor here. The signal gets thirty.",
        excerptKey: "noparking-signal",
        sourceLabel: "Nevada Driver's Handbook - No Parking Allowed",
        sourceUrl: hb(50),
      },
      {
        id: "nv_s3_12",
        topic: "rules",
        question:
          "You have turned left out of a side street into the center turn lane. How far may you travel in it before merging?",
        choices: ["200 feet", "100 feet", "50 feet", "As far as you need to reach traffic speed"],
        correctIndex: 2,
        explanation:
          "Fifty feet after turning in, before you must merge with traffic. The 200-foot figure is the other case - how far you may run in the lane before making a left turn out of it.",
        context:
          "The center lane is not a travel lane and may not be used for passing. It is marked with a solid yellow line paired with a broken yellow one on each side, and drivers may cross those lines only to make a left turn onto or from the highway. Both distances come from NRS 484B.223(3).",
        trap: "Two hundred and fifty feet are the two numbers, and they apply in opposite directions. Fifty is the merge-out figure.",
        excerptKey: "mark-center-turn-lane",
        sourceLabel: "Nevada Driver's Handbook - Highway Markings",
        sourceUrl: hb(32),
        commonlyMissed: true,
      },
      {
        id: "nv_s3_13",
        topic: "speed",
        question: "What happens to a Nevada speeding fine committed in a work zone?",
        choices: [
          "It doubles",
          "It is increased by 50 percent",
          "It carries an extra demerit point but the same fine",
          "It is unchanged unless workers are present",
        ],
        correctIndex: 0,
        explanation:
          "Fines for speeding double in work zones. The handbook states it as a flat rule, without any condition about workers being on site.",
        context:
          "Two more work-zone points come with it. Black-and-white speed limit signs are regulatory, so the doubled fine attaches to those; orange speed signs are advisory. And moving a barrier or sign to get onto a road that is closed to traffic is itself an offense subject to double penalties.",
        trap: "The doubling does not wait for a worker to be visible. The zone is the trigger.",
        excerptKey: "workzone-double-fines",
        sourceLabel: "Nevada Driver's Handbook - Highway Work Zones",
        sourceUrl: hb(60),
      },
      {
        id: "nv_s3_14",
        topic: "emergencies",
        question:
          "A tow truck is stopped on the shoulder ahead with its lights going. What does Nevada require of you?",
        choices: [
          "Nothing, unless it is a police vehicle",
          "Stop until it moves off",
          "Maintain speed but move as far left as possible",
          "Slow below the posted limit, proceed with caution, be ready to stop, and change lanes away from it if you can",
        ],
        correctIndex: 3,
        explanation:
          "Nevada's move-over duty is four things at once: slow to a speed below the posted limit, proceed with caution, be ready to stop, and if it is possible drive in a lane that is not next to the stopped vehicle.",
        context:
          "The duty is broader than most people assume. It covers law enforcement vehicles, tow trucks, NDOT vehicles, garbage trucks, any vehicle showing non-flashing blue lights, a crash scene, a stalled vehicle, debris on the roadway, and even a person out of their car attending to a repair. Non-emergency vehicles may not stop on a shoulder marked for emergency use.",
        trap: "Changing lanes is conditional; slowing down is not. If traffic makes the lane change unsafe you still owe the reduced speed.",
        excerptKey: "moveover-duties",
        sourceLabel: "Nevada Driver's Handbook - Approaching a Stopped Emergency Vehicle",
        sourceUrl: hb(61),
        commonlyMissed: true,
      },
      {
        id: "nv_s3_15",
        topic: "sharing",
        question: "How does Nevada define a moped?",
        choices: [
          "Any two-wheeler with an engine under 250cc",
          "By motor size, a maximum of two brake horsepower, and a top speed of 30 mph on a flat surface",
          "Any motorcycle ridden by a license holder under 18",
          "A bicycle with an electric assist motor",
        ],
        correctIndex: 1,
        explanation:
          "Nevada draws the line with three measures: motor size, a ceiling of two brake horsepower, and a maximum of 30 miles per hour on a flat or near-flat surface.",
        context:
          "The rules that follow matter more than the definition. Moped operators and their passengers must wear helmets. Owners must register the moped with the DMV, a one-time fee aimed at theft, but are not required to insure it. And a moped must stay in the extreme right-hand lane unless there is only one lane, a left turn is coming, that lane would be unsafe, or an officer directs otherwise.",
        trap: "A moped can be ridden on a Nevada driver license of any class. The helmet and registration duties are what people overlook.",
        excerptKey: "moped-def",
        sourceLabel: "Nevada Driver's Handbook - Mopeds",
        sourceUrl: hb(64),
      },
      {
        id: "nv_s3_16",
        topic: "rules",
        question:
          "On a two-lane road, how close to a railroad crossing does the passing prohibition begin?",
        choices: ["50 feet", "75 feet", "100 feet", "150 feet"],
        correctIndex: 2,
        explanation:
          "One hundred feet, and the same distance applies at a street crossing. You also may not pass approaching a curve or the crest of a hill where you cannot see far enough ahead.",
        context:
          "The full no-passing list on a two-lane road runs: coming to a curve or hilltop with insufficient sight distance, within 100 feet of a street crossing, within 100 feet of a railroad crossing, where the highway carries a double solid yellow line, and wherever signs prohibit it.",
        trap: "The 100-foot figure covers both street and railroad crossings, which is why one of them alone is not the answer.",
        excerptKey: "pass-100-crossing",
        sourceLabel: "Nevada Driver's Handbook - Passing Another Vehicle",
        sourceUrl: hb(47),
      },
      {
        id: "nv_s3_17",
        topic: "licensing",
        question: "How many demerit points in a 12-month period suspend a Nevada driver license?",
        choices: ["6 or more", "8 or more", "10 or more", "12 or more"],
        correctIndex: 3,
        explanation:
          "Twelve or more points in any 12-month period brings a suspension. Points are counted over a rolling twelve months, not a calendar year.",
        context:
          "Between three and 11 points you may remove three of them by completing a DMV-approved traffic safety course, once in any 12-month period; the conviction itself stays on the record. A major offense such as DUI or causing substantial bodily harm is not scored in points at all - it revokes the license outright. Reckless driving is 8 points, careless driving 6, following too closely 4.",
        trap: "Traffic school removes at most three points, and only once a year. It cannot rescue a record that is already at twelve.",
        excerptKey: "points-12",
        sourceLabel: "Nevada Driver's Handbook - Demerit Point System",
        sourceUrl: hb(77),
      },
      {
        id: "nv_s3_18",
        topic: "safety",
        question:
          "You brake hard in a car with four-wheel ABS and feel the pedal shuddering. What should you do?",
        choices: [
          "Keep firm pressure on the pedal, hold it down, and steer where you want to go",
          "Pump the pedal to help the system work",
          "Release and reapply the brakes in short bursts",
          "Ease off the pedal until the shuddering stops",
        ],
        correctIndex: 0,
        explanation:
          "With four-wheel ABS the instruction is brake and steer: push hard, hold it down, and steer around the hazard. The shuddering is the system pumping the brakes far faster than you could.",
        context:
          "The handbook warns explicitly that easing off or pumping the pedal disengages the anti-lock function. Rear-wheel ABS, found on some light trucks, is different: it keeps the back end from skidding sideways but the front wheels can still lock, and if they do you release just enough for them to roll and steering to return.",
        trap: "Pumping is correct advice for conventional brakes and wrong for ABS. This is the single most reversed answer on the subject.",
        excerptKey: "abs-brake-steer",
        sourceLabel: "Nevada Driver's Handbook - Anti-Lock Braking Systems",
        sourceUrl: hb(40),
        commonlyMissed: true,
      },
      {
        id: "nv_s3_19",
        topic: "rightOfWay",
        question:
          "You face a yield sign. A vehicle in the intersection ahead is making a U-turn. What do you owe it?",
        choices: [
          "Nothing - a U-turning vehicle yields to everyone",
          "You may proceed once it has begun the turn",
          "You yield the right of way to it",
          "You yield only if it signalled first",
        ],
        correctIndex: 2,
        explanation:
          "The handbook lists it among the duties a yield sign creates: yield the right of way to vehicles making a U-turn from an intersection, along with pedestrians, through traffic and drivers already on the highway.",
        context:
          "Yield means slow on approach, give way, and check every direction for cross traffic before entering. It differs from a stop sign only in that no automatic halt is required. If there is no safe gap, stopping is what yielding demands.",
        trap: "A U-turn looks like the more awkward maneuver, so drivers assume it must give way. Under a yield sign, it does not.",
        excerptKey: "yield-uturn",
        sourceLabel: "Nevada Driver's Handbook - Signs",
        sourceUrl: hb(29),
      },
      {
        id: "nv_s3_20",
        topic: "impairment",
        question: "How long does a DUI conviction stay on a Nevada driving record?",
        choices: ["Three years", "Seven years", "Five years", "Ten years"],
        correctIndex: 1,
        explanation:
          "Seven years for DUI convictions, against three years for most other violations reportable to your insurer.",
        context:
          "The same seven-year window is what makes a second DUI a second DUI: the escalated penalties for a repeat offense apply within seven years of the last one. Convictions from other states are added to a Nevada record too, so a violation on holiday follows you home.",
        trap: "Three years is the figure for ordinary violations, and it is the distractor. DUI runs more than twice as long.",
        excerptKey: "record-dui-7-years",
        sourceLabel: "Nevada Driver's Handbook - Your Driving Record",
        sourceUrl: hb(77),
      },
      {
        id: "nv_s3_21",
        topic: "signals",
        question: "A red arrow is displayed for your lane. What may you do?",
        choices: [
          "Turn after stopping and yielding, as at a red light",
          "Turn if no oncoming traffic is present",
          "Wait for a green arrow, but a right turn is still permitted",
          "You may not make the movement the arrow shows",
        ],
        correctIndex: 3,
        explanation:
          "A red arrow forbids the movement it points at. Unless you are entering the intersection for a movement another signal permits, you stop and wait.",
        context:
          "The red arrow can be shown alone or beside another signal head, which is where the confusion comes from: a green ball next to a red left arrow permits straight and right movements while the left turn stays prohibited. A steady yellow arrow between the two warns that the movement is ending.",
        trap: "Right on red does not survive a red arrow pointing right. The arrow is a specific prohibition on that movement.",
        excerptKey: "signal-red-arrow",
        sourceLabel: "Nevada Driver's Handbook - Signals",
        sourceUrl: hb(30),
        commonlyMissed: true,
      },
      {
        id: "nv_s3_22",
        topic: "signs",
        question: "What is a shield-shaped sign on a Nevada highway telling you?",
        choices: [
          "The route number - US, Interstate or state",
          "A weight restriction ahead",
          "A scenic or recreation area",
          "The state boundary",
        ],
        correctIndex: 0,
        explanation:
          "Shields are route markers. The shape varies a little between US, Interstate and state routes, but the job is the same: it names the road you are on.",
        context:
          "Route markers sit in the guide family with the green destination signs. Brown signs cover recreation and scenic information, blue signs point to driver services such as food and lodging, and none of the three creates a rule. Only white regulatory signs and the red and orange families do that.",
        trap: "Guide signs are the ones people skip while studying, and the DMV asks about them because they are on every road in the state.",
        excerptKey: "signs-route",
        sourceLabel: "Nevada Driver's Handbook - Signs",
        sourceUrl: hb(29),
      },
      {
        id: "nv_s3_23",
        topic: "parking",
        question:
          "What is the minimum fine in Nevada for parking in a space marked with the international symbol of access without the placard or plate?",
        choices: ["$100", "$250", "$500", "$1,000"],
        correctIndex: 1,
        explanation:
          "Two hundred and fifty dollars is the minimum, and the handbook states it as a floor rather than a fixed amount.",
        context:
          "The space may only be used when the person the placard or plate was issued to is driving or being carried in the vehicle. Lending a placard does not transfer the entitlement. The handbook adds a courtesy point as well: spaces with loading zones beside them are needed by people using lifts, so leave them where you can.",
        trap: "Having a relative's placard on the mirror is not the test. The person it belongs to has to be in the car.",
        excerptKey: "accessible-fine",
        sourceLabel: "Nevada Driver's Handbook - International Symbol of Access",
        sourceUrl: hb(50),
      },
      {
        id: "nv_s3_24",
        topic: "speed",
        question:
          "At what speeds does the Nevada handbook say most cars begin to hydroplane in heavy rain?",
        choices: [
          "Above 70 mph",
          "Between 15 and 25 mph",
          "Only above the posted limit",
          "Between 35 and 55 mph",
        ],
        correctIndex: 3,
        explanation:
          "Between 35 and 55 mph in heavy rainfall. That is ordinary road speed, which is exactly why the handbook prints the range.",
        context:
          "Wet stopping distances can be more than double dry ones, and the handbook singles out the first rain of a season, when oil and water mix on the pavement. Nevada's dry climate also makes flash flooding a real hazard: less than an inch of moving water can cost you control, and six inches can push a car off the road.",
        trap: "Hydroplaning sounds like a freeway phenomenon. It starts at speeds you would use on a city arterial.",
        excerptKey: "hydroplane",
        sourceLabel: "Nevada Driver's Handbook - Stopping",
        sourceUrl: hb(41),
      },
      {
        id: "nv_s3_25",
        topic: "rules",
        question:
          "How much visibility does Nevada require in each direction before you may make a U-turn?",
        choices: ["100 feet", "150 feet", "200 feet", "500 feet"],
        correctIndex: 2,
        explanation:
          "Two hundred feet in each direction. If a curve, a hill, rain or fog cuts it below that, the U-turn is unlawful.",
        context:
          "A separate figure covers grades: near a grade you need 500 feet of visibility in both directions. Both sit inside a longer list of places a U-turn is banned - railroad crossings, one-way streets, in front of a fire station, business districts, divided highways except through a provided opening, and anywhere a sign says no.",
        trap: "Two hundred and five hundred feet are two different rules. The 500-foot figure belongs to grades, not to ordinary curves.",
        excerptKey: "uturn-200-feet",
        sourceLabel: "Nevada Driver's Handbook - U-Turns",
        sourceUrl: hb(46),
      },
      {
        id: "nv_s3_26",
        topic: "sharing",
        question:
          "A semi ahead of you swings wide to the left before turning right. What is the safe response?",
        choices: [
          "Stay back - do not try to move up on its right side",
          "Move up on the right, since the truck has left room",
          "Pass on the left while it is turning",
          "Sound the horn to warn the driver you are there",
        ],
        correctIndex: 0,
        explanation:
          "The handbook calls it the squeeze play. The truck needs that left swing to get the trailer around the corner, and the gap it opens on the right is where the trailer is about to be.",
        context:
          "Large vehicles also swing right before a left turn for the same geometric reason. Combined with the right-side no-zone, which is the biggest blind spot they have, moving into the space beside a turning truck is one of the more dangerous things a car driver can do.",
        trap: "The opening on the right looks like an invitation. It is the path the trailer is going to sweep through.",
        excerptKey: "truck-wide-right",
        sourceLabel: "Nevada Driver's Handbook - Commercial Vehicles",
        sourceUrl: hb(63),
      },
      {
        id: "nv_s3_27",
        topic: "emergencies",
        question:
          "How much moving water can push a car off a Nevada road, according to the handbook?",
        choices: ["Two feet", "Six inches", "One foot", "Three feet"],
        correctIndex: 1,
        explanation:
          "Six inches, if the car is traveling at speed. Less than an inch is enough to cost a driver control, and most vehicles will float in two feet of water or less.",
        context:
          "Nevada's dry ground sheds summer storm water fast, and more than half of flash flood fatalities are vehicle-related. The handbook's rule is to turn around rather than judge the depth, because you cannot see whether the road under the water has washed away. If barricades block the route, they were put there by local officials and you never drive around them.",
        trap: "Six inches looks trivial next to a car. Moving water at that depth lifts enough weight off the tires to take the steering away.",
        excerptKey: "flood-facts",
        sourceLabel: "Nevada Driver's Handbook - Tips for Driving in a Flash Flood",
        sourceUrl: hb(59),
      },
      {
        id: "nv_s3_28",
        topic: "safety",
        question: "How does the Nevada handbook say you should check your tire tread?",
        choices: [
          "By comparing the tread to the wear bars only",
          "By measuring the depth with a coin-slot gauge at the shoulder",
          "By checking the date code on the sidewall",
          "With the penny test - if any of Lincoln's head is covered, there is enough tread",
        ],
        correctIndex: 3,
        explanation:
          "Put a penny head-down into the shallowest groove. If part of Lincoln's head is still covered, the tire has enough tread. If the tread falls below that, grip in bad conditions is greatly reduced.",
        context:
          "The handbook pairs it with a pressure check using a gauge against the figure in the owner's manual or on the driver's door jamb, and it asks for both once a month or before a long trip. Tires are also one of the items a DMV examiner inspects before the skills test, alongside lights, horn, seat belts and wipers.",
        trap: "Reading the sidewall tells you the tire's age, not its tread. The penny test is the one the handbook teaches.",
        excerptKey: "penny-test",
        sourceLabel: "Nevada Driver's Handbook - Tire Safety",
        sourceUrl: hb(27),
      },
      {
        id: "nv_s3_29",
        topic: "licensing",
        question:
          "You have a crash with $900 of damage and no police attend. What does Nevada require?",
        choices: [
          "File a Report of Crash form SR-1 with the DMV within 10 days",
          "Nothing, provided both drivers are insured",
          "Report it to the DMV within 30 days",
          "Report it only if someone was injured",
        ],
        correctIndex: 0,
        explanation:
          "Where law enforcement did not investigate and the damage reaches $750 or more, or anyone is hurt, the SR-1 goes to the DMV within 10 days. The duty falls on the driver and on the registered owner.",
        context:
          "If an officer does attend, the investigating officer sends your insurance information and a description of the damage to the DMV instead. Failing to report a crash that needed reporting can suspend your license, your registration, or both.",
        trap: "Being insured does not remove the reporting duty. The $750 threshold and the 10-day clock apply regardless.",
        excerptKey: "sr1-750",
        sourceLabel: "Nevada Driver's Handbook - Insurance and Financial Responsibility",
        sourceUrl: hb(75),
        commonlyMissed: true,
      },
      {
        id: "nv_s3_30",
        topic: "rightOfWay",
        question: "What does Nevada law actually do about right of way?",
        choices: [
          "It grants the right of way to the vehicle on the through road",
          "It grants the right of way to the first vehicle to signal",
          "It never grants anyone the right of way - it only says who must yield",
          "It grants the right of way to the larger vehicle",
        ],
        correctIndex: 2,
        explanation:
          "The handbook is explicit: Nevada law does not give anyone the right of way, it only says who must yield. That framing is what puts the duty to avoid a crash on you even when the other driver is wrong.",
        context:
          "Failure to yield is the leading cause of crashes in Nevada and carries four demerit points. The rules that follow from the framing are practical rather than absolute: give way to the vehicle already in the intersection, to the driver who arrived first at a four-way stop, to the driver on your right when you truly arrive together, and to pedestrians throughout.",
        trap: "Thinking you had the right of way is not a defense to causing a collision you could have avoided.",
        excerptKey: "row-no-right",
        sourceLabel: "Nevada Driver's Handbook - Right-of-Way",
        sourceUrl: hb(34),
        commonlyMissed: true,
      },
      {
        id: "nv_s3_31",
        topic: "signals",
        question:
          "A freeway on-ramp in Las Vegas has ramp meters and they are switched on. What do you do?",
        choices: [
          "Treat them as advisory and merge with the flow",
          "Pull up to the stop line, stop at the red, and go on the green",
          "Stop only if traffic on the freeway is heavy",
          "Follow the vehicle in front through on the same green",
        ],
        correctIndex: 1,
        explanation:
          "A lit ramp meter is a signal like any other. Pull to the stop line, stop on the red, wait for green, then accelerate down the ramp and merge.",
        context:
          "The handbook warns that the meter changes far faster than an intersection signal, so you have to be ready. Where a ramp has two metered lanes, drivers are asked to use both and obey the meter for their own lane. High-occupancy bypass lanes marked with a diamond are not metered, and a carpool of two or more may use them without stopping.",
        trap: "One car per green is the point of the meter, so following the vehicle ahead through on its green defeats it.",
        excerptKey: "ramp-meters",
        sourceLabel: "Nevada Driver's Handbook - Ramp Meters",
        sourceUrl: hb(36),
      },
      {
        id: "nv_s3_32",
        topic: "rules",
        question:
          "You are in the far left lane of a two-lane Nevada highway, below the posted limit, and a faster vehicle comes up behind you. What does the law say?",
        choices: [
          "It is illegal to stay there - you must let the faster vehicle through",
          "You may stay, as long as you are at or above the minimum speed",
          "You may stay, because the left lane is a normal travel lane",
          "It is illegal only if the road has three or more lanes",
        ],
        correctIndex: 0,
        explanation:
          "On a highway with two lanes going the same way, traveling in the far left lane below the posted limit while being overtaken from behind in that lane is unlawful in Nevada.",
        context:
          "Six exceptions are listed: driving within a city or town, preparing for a left turn at an intersection, being directed there by law enforcement, operating an authorized emergency vehicle on duty, traffic or weather making the left lane necessary, and overtaking another vehicle going the same way.",
        trap: "Being at the speed limit is not a defense to sitting in the left lane. The trigger is being overtaken from behind while below the posted limit.",
        excerptKey: "left-lane-slow",
        sourceLabel: "Nevada Driver's Handbook - Passing Another Vehicle",
        sourceUrl: hb(47),
      },
      {
        id: "nv_s3_33",
        topic: "impairment",
        question:
          "A 17-year-old license holder is found by a juvenile court to have been driving under the influence. What happens to the license?",
        choices: [
          "A warning for a first offense",
          "A 90-day suspension",
          "The license is canceled permanently",
          "It is suspended for 185 days",
        ],
        correctIndex: 3,
        explanation:
          "One hundred and eighty-five days, the same period an adult faces. Young drivers get the same revocation length and the same reinstatement options as drivers over 18.",
        context:
          "A court will also order an evaluation for alcohol or drug abuse for any driver under 18 found to have been driving under the influence, or any driver under 21 convicted of DUI, and may order treatment on the basis of that report. The handbook is blunt elsewhere that young first-time DUI offenders face the same penalties as drivers over 21.",
        trap: "Being under 18 does not buy a lighter license penalty in Nevada. It adds a mandatory evaluation on top.",
        excerptKey: "dui-young-185",
        sourceLabel: "Nevada Driver's Handbook - DUI Laws for Young Drivers",
        sourceUrl: hb(81),
      },
      {
        id: "nv_s3_34",
        topic: "parking",
        question: "What is double parking, and is it allowed in Nevada?",
        choices: [
          "Taking two marked bays; allowed if the bays are unmetered",
          "Parking on both sides of a narrow street; allowed outside business districts",
          "Stopping next to a vehicle already parked at the roadside; not allowed",
          "Parking two vehicles nose to tail in one space; allowed",
        ],
        correctIndex: 2,
        explanation:
          "Double parking means leaving your vehicle next to one already parked at the side of the roadway, and Nevada's no-parking list forbids it outright.",
        context:
          "It sits in the same list as parking on a sidewalk, in front of a driveway, within an intersection, on a crosswalk, on a bridge or in a tunnel, opposite a highway construction zone, in a bicycle lane unless the vehicle is disabled, and anywhere signs or curb markings prohibit it.",
        trap: "Hazard lights do not turn double parking into stopping. The vehicle is still parked where the law says it may not be.",
        excerptKey: "noparking-double",
        sourceLabel: "Nevada Driver's Handbook - No Parking Allowed",
        sourceUrl: hb(50),
      },
      {
        id: "nv_s3_35",
        topic: "speed",
        question: "What assumption does a posted Nevada speed limit rest on?",
        choices: [
          "The worst conditions the road is likely to see",
          "Normal driving conditions",
          "Daylight hours only",
          "An empty road with no other traffic",
        ],
        correctIndex: 1,
        explanation:
          "Speed limits are set for normal driving conditions. When weather cuts visibility or makes the surface slick, the driver is expected to adjust downward.",
        context:
          "That is the Basic Rule in practice. Nevada makes it unlawful to drive faster than is reasonable or proper for the traffic, the surface, the width of the road and the weather, or at any speed that endangers a person or property - and those apply independently of whatever the sign says.",
        trap: "The sign is a ceiling for good conditions. Being at or under it is no defense if the conditions did not support it.",
        excerptKey: "speed-normal-conditions",
        sourceLabel: "Nevada Driver's Handbook - Controlling Speed",
        sourceUrl: hb(35),
      },
    ],
  },
];
