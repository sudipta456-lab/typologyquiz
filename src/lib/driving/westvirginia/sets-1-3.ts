import type { DrivingTestSet } from "../types";

// Every fact below was checked against the West Virginia Driver's Licensing
// Handbook, published by the West Virginia Division of Motor Vehicles and
// linked from dmv.wv.gov. The cover carries the only edition label the state
// gives it: "Revised 07/2026". The PDF runs 90 pages and the printed page
// numbers begin ten pages in, so printed page 42 is PDF page 52. The hb()
// helper below takes the PDF page, which is what the "#page=" anchor needs.
//
// Three official sources sit behind this bank, in this order:
//
// 1. The handbook. Page 24 states the exam outright - at least 25 questions,
//    19 correct to pass, automated, timed - and says the questions come from
//    "the basic knowledge, traffic rules, regulations, signs, and markings
//    found in the handbook".
// 2. Chapters 17C and 17B of the West Virginia Code, on the Legislature's own
//    server, for the numbers the handbook leaves out. The foreword invites
//    exactly that: the manual "is only a partial digest of West Virginia motor
//    vehicle laws". Three gaps matter enough to name here. The handbook never
//    gives a passing distance for a bicycle; 17C-7-3 sets three feet. It never
//    says how far back you must stay behind a working emergency vehicle;
//    17C-14-9 says five hundred. And it never says that a motorcycle, moped or
//    school bus runs headlights at all times; 17C-15-2 does.
// 3. The DMV's own twenty-question Sample Driver's Test at dmv.wv.gov, which
//    the division says is "taken from state law and from the Driver's
//    Licensing Handbook". It is not the real exam, but it is the state saying
//    which rules it thinks are worth asking about, and it shaped the weighting
//    here - especially the headlight-dimming pair and the parking distances,
//    both of which the DMV builds its own distractors out of.
//
// One conflict is recorded rather than resolved silently. The handbook's
// wireless-device fines on page 17 read $100 / $200 / $300; the current
// Electronically Distracted Driving Act (17C-14-15) caps the third at $350 and
// adds three points and a possible 90-day suspension. No question here turns
// on the dollar figure; the points question is built on the statute, and the
// research note carries the discrepancy.
//
// Questions are original. Explanations, context notes and trap notes are
// written from scratch; the deep link is there so the learner reads the
// Division of Motor Vehicles' own authoritative wording.
const HB = "https://webapps.transportation.wv.gov/TWS/DMV/Drivers_Licensing_Handbook.pdf";
/** PDF page number, which is the printed page number plus ten. */
const hb = (page: number) => `${HB}#page=${page}`;
const code = (section: string) => `https://code.wvlegislature.gov/${section}/`;

export const westvirginiaSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "West Virginia Basics",
    difficulty: "starter",
    description:
      "The rules you meet in your first hour behind the wheel in West Virginia: what the shapes and colors mean, who goes first, and the handful of numbers the Division of Motor Vehicles expects you to know cold before it hands you a Level 1 permit.",
    questions: [
      {
        id: "wv_s1_01",
        topic: "signs",
        question: "What shape is a stop sign, and what is that shape used for?",
        choices: [
          "A square, used for stop signs and no-parking signs alike",
          "A downward triangle, shared with yield signs",
          "A circle, shared with railroad warning signs",
          "An eight-sided octagon, reserved for stop signs and nothing else",
        ],
        correctIndex: 3,
        explanation:
          "The octagon belongs to STOP alone. West Virginia teaches signs by shape first, because the outline stays readable in glare, snow or a language you cannot read.",
        context:
          "Four single-message shapes carry a meaning on their own in West Virginia: the octagon is stop, the downward triangle is yield, the pennant marks the start of a no-passing zone, and the pentagon warns of a school zone. A yellow circle is the advance warning for a railroad crossing.",
        trap: "The downward triangle is a real sign, but it means yield, not stop. Shape is what separates the two.",
        excerptKey: "octagon-stop",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter V, Single Message Shaped Signs",
        sourceUrl: hb(44),
      },
      {
        id: "wv_s1_02",
        topic: "signals",
        question: "A steady circular red light faces you. What does the handbook require?",
        choices: [
          "Stop, and stay stopped until another indication allows you to proceed",
          "Stop, then go as soon as the intersection is clear",
          "Slow down and pass through carefully",
          "Stop only if a vehicle or pedestrian is already crossing",
        ],
        correctIndex: 0,
        explanation:
          "A steady red holds you until the signal changes. The only exception is a movement a green arrow permits, or a turn on red where the law allows one.",
        context:
          "West Virginia separates steady red from flashing red on purpose. Steady red keeps you stopped until the signal itself releases you. A flashing red is a stop sign in light form: full stop, yield, then go when it is safe.",
        trap: "\"Stop, then go when clear\" is the flashing-red rule. Applied to a steady red it is running the light.",
        excerptKey: "steady-red",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter V, Traffic Lights",
        sourceUrl: hb(49),
      },
      {
        id: "wv_s1_03",
        topic: "rightOfWay",
        question:
          "You and another driver reach a four-way stop at the same moment. Who has the right-of-way?",
        choices: [
          "Whoever is going straight rather than turning",
          "The driver on the left, since the other driver crosses their path",
          "Whichever driver signals first",
          "The driver on the right",
        ],
        correctIndex: 3,
        explanation:
          "West Virginia breaks the tie by position: when two vehicles arrive at the same time, the driver on the left yields to the driver on the right.",
        context:
          "The handbook groups uncontrolled intersections and four-way stops under one rule. Order of arrival settles it when the arrivals are clearly separate; the vehicle on the right wins only when they arrive together. And the handbook adds the sentence that survives every edge case: right-of-way is something to be given, not taken.",
        trap: "Turning versus going straight decides nothing at a four-way stop in West Virginia. Position does.",
        excerptKey: "row-uncontrolled",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Right-of-Way",
        sourceUrl: hb(59),
      },
      {
        id: "wv_s1_04",
        topic: "speed",
        question:
          "Nothing is posted on a residential street inside a West Virginia town. What is the speed limit?",
        choices: [
          "20 mph",
          "25 mph",
          "30 mph",
          "35 mph",
        ],
        correctIndex: 1,
        explanation:
          "Twenty-five is the designated limit for business and residential areas when nothing is posted. It is a ceiling, not a target - the basic speed law can still make 25 too fast.",
        context:
          "West Virginia publishes four designated limits for when no sign is up: 70 mph on an interstate, 55 on an open county highway, 25 in a business or residential area, and 15 in a school zone while children are present.",
        trap: "Thirty is the residential default in several neighboring states. West Virginia prints 25.",
        excerptKey: "designated-speed-limits",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Speed Limits",
        sourceUrl: hb(52),
      },
      {
        id: "wv_s1_05",
        topic: "licensing",
        question: "How old must you be to apply for a Level 1 GDL instruction permit?",
        choices: [
          "14",
          "15",
          "16",
          "17",
        ],
        correctIndex: 1,
        explanation:
          "Fifteen. You pass a vision screening and the knowledge test, and a parent or legal guardian signs form DMV-DS-23P consenting to the permit.",
        context:
          "West Virginia runs three graduated levels. Level 1 is the instruction permit at 15. Level 2 is the intermediate license at 16, after 180 conviction-free days and a road skills test. Level 3 is the full Class E license at 17, after twelve more conviction-free months.",
        trap: "Sixteen is when the intermediate license becomes possible, not when testing starts.",
        excerptKey: "level1-obtain",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter I, Level 1 GDL Instruction Permit",
        sourceUrl: hb(19),
      },
      {
        id: "wv_s1_06",
        topic: "safety",
        question:
          "What following distance does the West Virginia handbook teach for ordinary conditions?",
        choices: [
          "One car length for every 10 mph of speed",
          "A fixed 100 feet",
          "Two seconds",
          "Three to four seconds",
        ],
        correctIndex: 3,
        explanation:
          "West Virginia teaches a three-to-four second rule. You pick a fixed object, and when the vehicle ahead passes it you count one thousand one, one thousand two, one thousand three.",
        context:
          "The count grows with the conditions. Three to four seconds is the baseline, at least four seconds in the dark or in rain, and at least six seconds on ice or snow. Car lengths are not used anywhere in the book.",
        trap: "Two seconds is the everyday figure in many other states' manuals. West Virginia starts at three.",
        excerptKey: "following-three-four",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Following Distance",
        sourceUrl: hb(57),
      },
      {
        id: "wv_s1_07",
        topic: "signals",
        question: "A signal ahead is flashing red in every direction. What must you do?",
        choices: [
          "Slow down and proceed with caution",
          "Treat the intersection as uncontrolled, because the signal has failed",
          "Stop and wait for the light to turn green",
          "Come to a complete stop and yield to all other traffic and pedestrians",
        ],
        correctIndex: 3,
        explanation:
          "A circular flashing red is the same as a stop sign. You stop completely, yield to everything else at the intersection, and then go.",
        context:
          "Flashers are installed at some intersections to supplement or replace stop signs, and a working signal switched into flashing operation means exactly the same thing. Flashing yellow lets through traffic proceed with caution; flashing red does not.",
        trap: "Waiting for green at a flashing red leaves you sitting there. The signal is doing what it was set to do.",
        excerptKey: "intersection-flashers-red",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter V, Intersection Flashers",
        sourceUrl: hb(50),
      },
      {
        id: "wv_s1_08",
        topic: "sharing",
        question:
          "A school bus ahead of you stops on a two-lane street and its red lights start flashing. What must you do?",
        choices: [
          "Slow to 20 mph and pass with care",
          "Stop only if you can see children in the road",
          "Pass on the left if no children are visible",
          "Stop, and stay stopped until the bus moves, the driver signals you on, or the lights stop flashing",
        ],
        correctIndex: 3,
        explanation:
          "You stop before reaching the bus and stay there. Only three things release you: the bus resumes motion, the bus driver signals you to proceed, or the visual signals are switched off.",
        context:
          "West Virginia applies this on every highway, street, parking lot, private road and driveway, and to traffic in both directions. It also applies when a bus is loading or unloading on school or private property.",
        trap: "\"Only if I can see children\" is not the test. The flashing red lights are the test, and children step out from behind the bus where you cannot see them.",
        excerptKey: "school-bus-both-directions",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, School Bus Rules",
        sourceUrl: hb(60),
      },
      {
        id: "wv_s1_09",
        topic: "signs",
        question: "What does a downward-pointing triangular sign require of you?",
        choices: [
          "Yield the right-of-way to cross traffic or to merging traffic",
          "Come to a complete stop every time",
          "Watch for a railroad crossing ahead",
          "Merge left because your lane is ending",
        ],
        correctIndex: 0,
        explanation:
          "The upside-down triangle is the yield sign. You give way to cross traffic or merging traffic, slowing or stopping as the situation needs.",
        context:
          "Yield differs from stop in what it demands. A stop sign requires a full stop every time. A yield sign requires you to give way, which may mean rolling through when nothing is coming and may mean stopping dead when something is.",
        trap: "Treating a yield as a stop is safe but slow; treating it as a free pass is how people get hit from the side.",
        excerptKey: "triangle-yield",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter V, Single Message Shaped Signs",
        sourceUrl: hb(44),
      },
      {
        id: "wv_s1_10",
        topic: "parking",
        question: "How close to a fire hydrant may you park in West Virginia?",
        choices: [
          "No closer than 10 feet",
          "No closer than 20 feet",
          "No closer than 30 feet",
          "No closer than 15 feet",
        ],
        correctIndex: 3,
        explanation:
          "Fifteen feet. It is one of a short list of distances the handbook prints and the DMV's own sample test asks about directly.",
        context:
          "The parking distances come as a set and they are easy to mix up: 15 feet from a fire hydrant, 20 feet from a crosswalk at an intersection, 30 feet from a stop sign or traffic control signal, and 50 feet from the nearest rail of a railroad crossing.",
        trap: "Twenty feet is the crosswalk figure and 30 is the stop-sign figure. The DMV builds its own distractors out of exactly this swap.",
        excerptKey: "prohibited-parking-distances",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Prohibited Parking",
        sourceUrl: hb(55),
        commonlyMissed: true,
      },
      {
        id: "wv_s1_11",
        topic: "impairment",
        question: "At what blood alcohol concentration is a driver over 21 presumed to be driving under the influence?",
        choices: [
          "0.02 percent",
          "0.05 percent",
          "0.08 percent",
          "0.10 percent",
        ],
        correctIndex: 2,
        explanation:
          "At 0.08 percent or more a driver is presumed to be under the influence. Below that you are not automatically safe: between 0.05 and 0.08 the reading is relevant evidence that your ability to drive is impaired.",
        context:
          "West Virginia sets three thresholds. Any measurable alcohol ends the driving privilege of anyone under 21. A BAC over 0.05 and under 0.08 is evidence of impairment. A BAC of 0.08 or more is presumed DUI, and the handbook adds that a license can be revoked below 0.08.",
        trap: "0.10 was the national threshold decades ago and still turns up in old advice. West Virginia uses 0.08.",
        excerptKey: "bac-thresholds",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter III, Knowing Your Limits",
        sourceUrl: hb(31),
      },
      {
        id: "wv_s1_12",
        topic: "rules",
        question: "How far before a turn does the handbook tell you to signal?",
        choices: [
          "50 feet",
          "75 feet",
          "At least 200 feet",
          "At least 100 feet",
        ],
        correctIndex: 3,
        explanation:
          "At least 100 feet. The handbook repeats the figure in both the signaling section and the turning section, which is a fair sign it expects you to know it.",
        context:
          "Signal before you change lanes, turn at an intersection, enter or leave an interstate, pull away from the curb, or pull over. Then switch the signal off once the move is done, because a signal left blinking tells the next driver something untrue.",
        trap: "Signalling too soon is its own mistake. If you plan to turn beyond an intersection, a signal given before it makes other drivers think you are turning into it.",
        excerptKey: "signal-100-feet",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Driving Signals",
        sourceUrl: hb(53),
      },
      {
        id: "wv_s1_13",
        topic: "signs",
        question: "A yellow diamond-shaped sign with a black symbol on it is telling you what?",
        choices: [
          "There is possible danger ahead, so be ready to change what you are doing",
          "A law applies here that you must obey",
          "You are being guided to a service or a destination",
          "Road work is under way ahead",
        ],
        correctIndex: 0,
        explanation:
          "Diamonds warn. They are yellow with black symbols or words and they usually appear with no explanatory text at all, so you have to read the picture.",
        context:
          "Colour separates the families. Yellow diamonds warn of what is ahead. White rectangles carry regulations you must obey. Green guide signs tell you where you are and how to get where you are going, blue points to motorist services and brown to parks. Orange means a work zone.",
        trap: "Warning signs advise, and a warning sign in an orange diamond is a work zone, not an ordinary hazard.",
        excerptKey: "diamond-warning",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter V, Diamond & Warning Signs",
        sourceUrl: hb(46),
      },
      {
        id: "wv_s1_14",
        topic: "speed",
        question:
          "You are on an open county highway in West Virginia and there is no speed limit sign. What is the limit?",
        choices: [
          "45 mph",
          "55 mph",
          "60 mph",
          "65 mph",
        ],
        correctIndex: 1,
        explanation:
          "Fifty-five. It is the designated limit for an open county highway when nothing is posted, and the DMV asks it word for word on its own sample test.",
        context:
          "The West Virginia Code words this as 55 miles per hour on open country highways. The handbook prints the same figure. Above that sits the interstate maximum of 70; below it, 25 in business and residential areas and 15 in a school zone.",
        trap: "Sixty-five is the rural default in many states, and 70 is West Virginia's own interstate maximum. Neither applies to a county road.",
        excerptKey: "code-speed-limits",
        sourceLabel: "W. Va. Code 17C-6-1 - Speed limitations generally",
        sourceUrl: code("17C-6-1"),
      },
      {
        id: "wv_s1_15",
        topic: "licensing",
        question:
          "Who must be with you in the car while you drive on a Level 1 GDL instruction permit?",
        choices: [
          "Any licensed driver over 18, anywhere in the vehicle",
          "A parent or legal guardian only",
          "A certified driving instructor",
          "A licensed driver at least 21 years old, in the right front passenger seat",
        ],
        correctIndex: 3,
        explanation:
          "A licensed driver who is at least 21, sitting in the right front passenger seat. Not the back seat, and not merely somewhere in the car.",
        context:
          "The supervising driver is part of the permit itself, not a courtesy. The handbook words the Level 1 requirement as driving only with a licensed driver at least 21 years old in the right front passenger seat, and the same person is who signs off your practice hours.",
        trap: "Eighteen is old enough to hold a full license in West Virginia but not old enough to supervise a permit holder.",
        excerptKey: "level1-requirements",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter I, Level 1 GDL Instruction Permit Requirements",
        sourceUrl: hb(19),
      },
      {
        id: "wv_s1_16",
        topic: "emergencies",
        question:
          "An ambulance behind you has its siren on and its lights flashing. What does the handbook tell you to do?",
        choices: [
          "Pull over to the right edge of the road, clear of the intersection, and stop until it has passed",
          "Speed up so you are not in its way",
          "Stop where you are, in your lane",
          "Move to the left lane and keep going",
        ],
        correctIndex: 0,
        explanation:
          "Pull right, stop clear of any intersection, and wait for it to pass. Keeping your foot on the brake shows the emergency driver that you really have stopped.",
        context:
          "Stopping in the middle of an intersection is the failure mode, because it blocks the very path the emergency vehicle needs. And once one has gone by, the handbook tells you to watch for another before you move.",
        trap: "Stopping dead in your lane looks obedient and is not. The instruction is to get to the right edge first.",
        excerptKey: "row-emergency",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Right-of-Way",
        sourceUrl: hb(59),
      },
      {
        id: "wv_s1_17",
        topic: "signals",
        question:
          "You are facing a circular green light and want to turn left. Oncoming traffic is approaching. What do you do?",
        choices: [
          "Yield to the oncoming vehicles, then turn when the way is clear",
          "Turn at once, because the green light gives you the right-of-way",
          "Sound your horn and turn",
          "Wait for a green arrow, since a circular green never permits a left turn",
        ],
        correctIndex: 0,
        explanation:
          "A circular green lets you enter the intersection, but it does not hand you the right-of-way over oncoming traffic. You yield, then turn.",
        context:
          "A green arrow is the different case. It usually means the opposing traffic is held on red, so the movement the arrow shows is protected. A circular green protects nothing except your right to be in the intersection.",
        trap: "Green does not mean go regardless. The handbook says all turns must be made in accordance with the right-of-way rules.",
        excerptKey: "green-yield-left",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter V, Traffic Lights",
        sourceUrl: hb(49),
      },
      {
        id: "wv_s1_18",
        topic: "rules",
        question:
          "You want to turn right at a red light and no sign forbids it. What does West Virginia require first?",
        choices: [
          "Slow to walking pace and turn without stopping",
          "Wait for the light to turn green",
          "Signal for 100 feet, then turn on the red",
          "Come to a complete stop, then yield to pedestrians and traffic before turning",
        ],
        correctIndex: 3,
        explanation:
          "The stop comes first and it has to be complete. Only after stopping and yielding to pedestrians and traffic may you make the turn.",
        context:
          "The same permission covers one more movement people forget: a left turn on red is allowed from a one-way street onto another one-way street, on the same conditions. Both disappear the moment a sign prohibits the turn.",
        trap: "Rolling the stop is the classic failure. The handbook's own defensive-driving chapter names it, saying you must come to a complete stop even when making a right turn.",
        excerptKey: "right-on-red-rule",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Turning Maneuvers",
        sourceUrl: hb(54),
      },
      {
        id: "wv_s1_19",
        topic: "parking",
        question: "You are parking facing downhill on a street with a curb. Which way do the front wheels go?",
        choices: [
          "Straight ahead",
          "It does not matter if the parking brake is set",
          "Away from the curb",
          "Turned toward the curb",
        ],
        correctIndex: 3,
        explanation:
          "Toward the curb. If the car rolls, the front wheel catches the curb instead of rolling into traffic.",
        context:
          "The handbook prints the set as a single line: downhill, turn the wheels to the curb; uphill with a curb, turn them away from it; uphill with no curb, turn them right so the car rolls off the road rather than into it. Set the parking brake in every case.",
        trap: "Away from the curb is the uphill answer. Reversing the pair is the usual mistake.",
        excerptKey: "parking-on-hills",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Parking on Hills",
        sourceUrl: hb(56),
      },
      {
        id: "wv_s1_20",
        topic: "safety",
        question: "Who is responsible for making sure everyone in the car is buckled up?",
        choices: [
          "The driver",
          "Each passenger, individually",
          "The vehicle's registered owner",
          "Only the parent of any child in the vehicle",
        ],
        correctIndex: 0,
        explanation:
          "The handbook puts it on the driver: everyone in a passenger vehicle must wear a federally approved safety belt, and it is the driver's job to see that they do.",
        context:
          "West Virginia's one legal exception is narrow - a person 18 years or older riding in the back seat. Everyone else, front or back, is covered, and a medical exemption needs a physician's certification.",
        trap: "The back-seat exception applies only to adults. A 16-year-old in the back seat still has to be belted.",
        excerptKey: "seat-belt-law",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VIII, Safety Equipment",
        sourceUrl: hb(77),
      },
      {
        id: "wv_s1_21",
        topic: "signs",
        question: "A sign shows a symbol inside a red circle with a diagonal red bar through it. What does it mean?",
        choices: [
          "The thing shown is prohibited",
          "A warning of possible danger ahead",
          "Guidance toward a service",
          "The thing shown is recommended",
        ],
        correctIndex: 0,
        explanation:
          "A red outline with a diagonal bar always means NO. The symbol inside tells you what is forbidden - a U-turn, a right turn, a left turn.",
        context:
          "Square and rectangular signs carry regulations. Most are white with black letters; when the message matters most the sign turns red with white letters. Red is reserved for the messages the state will not negotiate about.",
        trap: "The red-bar signs are not warnings. Warnings are yellow diamonds, and they advise rather than forbid.",
        excerptKey: "square-rect-signs",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter V, Square & Rectangular Signs",
        sourceUrl: hb(45),
      },
      {
        id: "wv_s1_22",
        topic: "sharing",
        question: "When does a pedestrian have the right-of-way under the West Virginia handbook?",
        choices: [
          "Only at a signalled intersection",
          "Only when the walk signal is showing",
          "Only in a marked crosswalk, never an unmarked one",
          "In a crosswalk, on a sidewalk crossing an alley or driveway, and when blind and using a cane or guide dog",
        ],
        correctIndex: 3,
        explanation:
          "The handbook lists three situations, and one of them catches drivers out: a pedestrian crossing the sidewalk that runs over an alley entrance or a driveway has the right-of-way over the car pulling out of it.",
        context:
          "A blind person on foot with a guide dog, a service animal, a white cane or a walking stick has the right-of-way on any highway, street or road, and the handbook is explicit that this holds whether or not they are in a crosswalk.",
        trap: "Driveways are where this is missed. Backing out over a sidewalk is still crossing a pedestrian's path.",
        excerptKey: "pedestrian-row",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Sharing the Road with Pedestrians",
        sourceUrl: hb(60),
      },
      {
        id: "wv_s1_23",
        topic: "speed",
        question: "What is the speed limit in a West Virginia school zone while children are present?",
        choices: ["15 mph", "20 mph", "25 mph", "30 mph"],
        correctIndex: 0,
        explanation:
          "Fifteen miles per hour. It is the lowest designated limit in the state, and speeding in a school zone carries six points, the same as reckless driving.",
        context:
          "A school zone is not just the frontage of the building. It is all school property including the grounds, plus any street or highway abutting the grounds and extending 125 feet along that street from them.",
        trap: "Twenty and 25 are school-zone limits elsewhere in the country. West Virginia prints 15.",
        excerptKey: "pentagon-school-speed",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter V, Single Message Shaped Signs",
        sourceUrl: hb(44),
      },
      {
        id: "wv_s1_24",
        topic: "impairment",
        question:
          "You are 19 and a breath test shows a small but measurable amount of alcohol. What happens?",
        choices: [
          "Nothing, as long as you are under 0.08",
          "A warning, since you were under the adult limit",
          "A fine only, with no effect on your license",
          "You lose your driver's license - West Virginia has zero tolerance under 21",
        ],
        correctIndex: 3,
        explanation:
          "Zero tolerance means any measurable amount. The handbook says plainly that if you are under 21 and any amount of alcohol is found in your system, you will lose your driver's license.",
        context:
          "The first zero-tolerance offense carries a fine of $25 to $100 and a minimum 30-day revocation. A second carries $100 to $500, at least 24 hours in jail, and 60 days or revocation until your 18th birthday, whichever is longer.",
        trap: "The 0.08 threshold is the adult one. Under 21 the number that matters is any number above zero.",
        excerptKey: "under-21-zero-tolerance",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter III, Under Age Drinking and Driving",
        sourceUrl: hb(31),
      },
      {
        id: "wv_s1_25",
        topic: "licensing",
        question: "Between what hours may a Level 1 GDL permit holder drive?",
        choices: [
          "Any hour, as long as the supervising driver is present",
          "6:00 am to 9:00 pm",
          "Daylight hours only",
          "5:00 am to 10:00 pm",
        ],
        correctIndex: 3,
        explanation:
          "Five in the morning to ten at night, with the supervising licensed driver aged 21 or over beside you the whole time.",
        context:
          "The same window carries into Level 2, where it changes meaning: a Level 2 driver may drive alone between 5:00 am and 10:00 pm, and must have the supervising adult between 10:00 pm and 5:00 am. Level 2 has four exceptions to the night rule; Level 1 has none.",
        trap: "The supervising driver does not extend the hours at Level 1. The clock applies whoever is sitting beside you.",
        excerptKey: "level1-hours",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter I, Level 1 GDL Instruction Permit",
        sourceUrl: hb(20),
      },
      {
        id: "wv_s1_26",
        topic: "emergencies",
        question:
          "You are in a crash that injures someone. What is the first thing the handbook tells you to do?",
        choices: [
          "Stop immediately, and turn off the ignition to prevent a fire",
          "Move the injured person to the side of the road",
          "Photograph the damage before anything else",
          "Drive to the nearest police station to report it",
        ],
        correctIndex: 0,
        explanation:
          "Stop immediately and shut the engine off. Then protect the scene with flares or a flagman so a second crash does not happen on top of the first.",
        context:
          "Aid comes next, and the handbook is firm that you do not move the injured unless it is absolutely necessary. A crash that injures or kills anyone, or does more than $1,000 of property damage, must be reported to the nearest law enforcement agency.",
        trap: "Moving an injured person is the instinct and usually the wrong move. Send for help and keep them still.",
        excerptKey: "crash-notify",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter IX, If You are Involved In A Crash",
        sourceUrl: hb(84),
      },
      {
        id: "wv_s1_27",
        topic: "rules",
        question: "A solid yellow line runs along your side of the center line. What does it mean?",
        choices: [
          "You may pass if you can see far enough ahead",
          "You may pass only at night",
          "The line marks the edge of the pavement",
          "You must not pass",
        ],
        correctIndex: 3,
        explanation:
          "A solid yellow line on your side is a prohibition. Broken yellow on your side is what allows a pass when it is safe.",
        context:
          "Yellow separates traffic going in opposite directions and white separates lanes going the same way. On an interstate, a one-way street or a divided four-lane road, a solid yellow line marks the left edge of the pavement rather than a center line.",
        trap: "\"If I can see far enough\" is one of the conditions for a safe pass, not permission to cross a solid yellow line.",
        excerptKey: "solid-yellow",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter V, Pavement Markings",
        sourceUrl: hb(51),
      },
      {
        id: "wv_s1_28",
        topic: "signals",
        question: "A circular flashing yellow light faces you at an intersection. What does it mean?",
        choices: [
          "Stop completely, then proceed when safe",
          "The light is about to turn red",
          "Yield to any vehicle on your right, then go",
          "Proceed through the intersection with caution",
        ],
        correctIndex: 3,
        explanation:
          "A flashing yellow lets through traffic keep moving, with caution. No stop is required, but the cross traffic is probably facing a flashing red and you should be ready for someone who misjudges it.",
        context:
          "Flashers replace or supplement stop signs at some intersections: red flashing in every direction, or red for the side road and yellow for the through road. A steady yellow is a different thing entirely - it is the warning that a green is about to become red.",
        trap: "Flashing yellow and steady yellow do different jobs. Only the steady one is telling you the light is about to change.",
        excerptKey: "intersection-flashers-yellow",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter V, Intersection Flashers",
        sourceUrl: hb(50),
      },
      {
        id: "wv_s1_29",
        topic: "safety",
        question: "When does West Virginia require your headlights to be on?",
        choices: [
          "Only between midnight and 5:00 am",
          "Only when it is fully dark",
          "Whenever your windshield wipers are running, and at no other time",
          "From sunset to sunrise, in fog, smoke or rain, and whenever people and vehicles cannot be seen clearly at 500 feet",
        ],
        correctIndex: 3,
        explanation:
          "The rule has three parts and the third is the one that catches people: any time visibility drops far enough that you cannot clearly make out a person or a vehicle 500 feet ahead.",
        context:
          "The handbook repeats this in three places, and West Virginia Code 17C-15-2 states it as law. The same statute adds a detail the handbook omits entirely: a school bus, motorcycle, motor-driven cycle or moped runs headlights at all times on the highway.",
        trap: "Parking lights are not headlights. The handbook says to use them only when you are parked.",
        excerptKey: "headlights-sunset-sunrise",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Headlights and Their Use",
        sourceUrl: hb(61),
      },
      {
        id: "wv_s1_30",
        topic: "signs",
        question: "A pennant-shaped sign is posted on the left-hand side of the road. What does it mark?",
        choices: [
          "The beginning of a no-passing zone",
          "A school crossing",
          "A slow-moving vehicle ahead",
          "The end of a divided highway",
        ],
        correctIndex: 0,
        explanation:
          "The pennant is the no-passing zone sign. It is one of the shapes that carries its message on its own, without any words.",
        context:
          "West Virginia gives five shapes a single fixed meaning: octagon for stop, downward triangle for yield, pennant for the start of a no-passing zone, circle for a railroad crossing ahead, and pentagon for a school zone. A right-side-up triangle with a reflective red border and orange center is the slow-moving vehicle emblem.",
        trap: "The upright triangle with the orange center is the slow-moving vehicle emblem, and it goes on the back of the vehicle rather than beside the road.",
        excerptKey: "pennant-no-passing",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter V, Single Message Shaped Signs",
        sourceUrl: hb(44),
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Core Rules of the Road",
    difficulty: "easy",
    description:
      "Turning, passing, lane use, following distance and the everyday right-of-way decisions. These are the rules West Virginia expects you to apply without thinking about them, and the ones the examiner is watching for on the road test.",
    questions: [
      {
        id: "wv_s2_01",
        topic: "rules",
        question: "Where does the handbook say passing is prohibited near an intersection?",
        choices: [
          "Within 50 feet",
          "Within 150 feet",
          "Within 200 feet",
          "Within 100 feet",
        ],
        correctIndex: 3,
        explanation:
          "One hundred feet. The same figure covers a bridge, viaduct, tunnel or underpass and a railroad crossing, which makes it worth memorising once and reusing four times.",
        context:
          "Passing is also prohibited on a curve or hill or anywhere you cannot see oncoming traffic, when an approaching vehicle is inside your passing area, when a sign or marking tells you to keep right, when the solid yellow line is in your lane, and when the vehicle ahead has stopped at an intersection to let a pedestrian cross.",
        trap: "The DMV's own sample test asks this as \"all of the above\", precisely because people learn one of the four and stop.",
        excerptKey: "passing-prohibited-100",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Passing",
        sourceUrl: hb(59),
      },
      {
        id: "wv_s2_02",
        topic: "rules",
        question:
          "You have overtaken a vehicle on a two-lane road. When may you move back into the right lane?",
        choices: [
          "When you can see the front of that vehicle - both headlights - in your rear view mirror",
          "As soon as you have drawn level with its front bumper",
          "After counting three seconds from the moment you passed",
          "As soon as your own rear wheels clear its front bumper",
        ],
        correctIndex: 0,
        explanation:
          "The handbook gives you a picture rather than a distance: signal and return when you can see the front of the vehicle you passed, meaning both of its headlights, in your rear view mirror.",
        context:
          "The full sequence is check ahead, behind and to the side; signal early; move left when clear and sound your horn; and at night you may blink your headlights instead. Passing on the right is not permissible unless a lane is designated for passing.",
        trap: "Cutting back in as soon as you are ahead leaves the other driver no room, and it is what turns a legal pass into a sideswipe.",
        excerptKey: "passing-return",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Passing",
        sourceUrl: hb(58),
      },
      {
        id: "wv_s2_03",
        topic: "rightOfWay",
        question:
          "You are pulling out of a private driveway onto a public street. Who yields?",
        choices: [
          "You yield to all vehicles already on the roadway",
          "Traffic on the roadway yields to you, since you are entering",
          "Whoever arrives at the point of conflict first",
          "The vehicle on the right, as at any intersection",
        ],
        correctIndex: 0,
        explanation:
          "You do. Coming out of an alley, a private road or a driveway you yield to everything already using the street, and to pedestrians on the sidewalk you cross.",
        context:
          "West Virginia Code 17C-9-4 puts it in one sentence: the driver about to enter or cross a highway from a private road or driveway shall yield the right-of-way to all vehicles approaching on that highway. The DMV asks this on its own sample test.",
        trap: "\"Yield to the vehicle on your right\" is the intersection tiebreaker. A driveway is not an intersection, and you yield to everyone.",
        excerptKey: "code-yield-driveway",
        sourceLabel: "W. Va. Code 17C-9-4 - Vehicle entering highway from private road or driveway",
        sourceUrl: code("17C-9-4"),
      },
      {
        id: "wv_s2_04",
        topic: "rules",
        question:
          "You are waiting in an intersection to make a left turn and traffic is still coming. Where should your front wheels point?",
        choices: [
          "Straight ahead",
          "Turned left, ready to go",
          "Turned slightly right",
          "It makes no difference while you are stopped",
        ],
        correctIndex: 0,
        explanation:
          "Straight ahead. If someone hits you from behind with the wheels already turned, your car is pushed into the oncoming lane instead of straight forward.",
        context:
          "The road test scores this. The examiner's turn checklist includes stopping smoothly behind the stop line and keeping the front wheels aimed straight ahead while you wait.",
        trap: "Pre-turning the wheels feels efficient and is the single detail most likely to turn a rear-end shunt into a head-on.",
        excerptKey: "turn-left-wheels-straight",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Turning Maneuvers",
        sourceUrl: hb(54),
      },
      {
        id: "wv_s2_05",
        topic: "parking",
        question: "How far from the curb must your wheels be when you parallel park?",
        choices: [
          "Within 12 inches",
          "Within 24 inches",
          "Within 36 inches",
          "Within 18 inches",
        ],
        correctIndex: 3,
        explanation:
          "Eighteen inches, and West Virginia Code 17C-13-4 says the same. The handbook adds that you should end up about six inches out, and never more than eighteen.",
        context:
          "The DMV's driving tips page tells learners to practice in an area of 25 feet and to park within 18 inches of a curb, so this is scored on the road test as well as asked on the written one.",
        trap: "Two feet sounds close enough and is not. Eighteen inches is a legal figure, not a guideline.",
        excerptKey: "code-parking-18-inches",
        sourceLabel: "W. Va. Code 17C-13-4 - Right and left parallel parking",
        sourceUrl: code("17C-13-4"),
      },
      {
        id: "wv_s2_06",
        topic: "signals",
        question: "What does a green downward-pointing arrow over a lane mean?",
        choices: [
          "The lane is closed to you",
          "The lane is about to reverse direction",
          "The lane is reserved for buses and car pools",
          "Traffic may use the lane under the arrow",
        ],
        correctIndex: 3,
        explanation:
          "It is a lane use control signal, and the green downward arrow is the permission: traffic may use the lane beneath it.",
        context:
          "The set has three states. Green downward arrow means the lane is open. Yellow X means the lane is about to close or reverse and you should move out of it as soon as you can. Red X means the lane is closed or being used by opposing traffic.",
        trap: "The yellow X is not a warning to hurry. It is an instruction to leave the lane.",
        excerptKey: "lane-green-arrow",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter V, Lane Use Control Signals",
        sourceUrl: hb(50),
      },
      {
        id: "wv_s2_07",
        topic: "rules",
        question:
          "A lane in the middle of the road is bounded by a solid yellow line on each side with a broken yellow line inside it. What is that lane for?",
        choices: [
          "Passing slower traffic in either direction",
          "Emergency vehicles only",
          "Through traffic at peak hours",
          "Left turns from either direction, and nothing else",
        ],
        correctIndex: 3,
        explanation:
          "That is a center left-turn lane. Traffic from both directions uses it to turn left, and it is not a through lane or a passing lane.",
        context:
          "Read the lines to tell the two center lanes apart. A turn lane has solid yellow lines nearest the through lanes with broken lines inside them. A reversible lane is marked on both sides by a double yellow broken line, and it is the only place a driver may travel any distance to the left of a yellow line.",
        trap: "Using the turn lane to get past a queue is the misuse the handbook names directly: never use a turning lane to overtake and pass other vehicles.",
        excerptKey: "center-left-turn-lane",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter V, Pavement Markings",
        sourceUrl: hb(51),
      },
      {
        id: "wv_s2_08",
        topic: "safety",
        question:
          "It is raining and the road is wet. What following distance does the handbook want?",
        choices: [
          "The usual three to four seconds",
          "At least six seconds",
          "Two seconds is enough if your tires are good",
          "At least four seconds",
        ],
        correctIndex: 3,
        explanation:
          "At least four seconds in the dark or in rain. Ice or snow moves you further still, to at least six.",
        context:
          "The count is a stopping-distance budget, not a superstition. A light rain that has just started is the worst case the handbook names, because oil, dirt and water make a slippery film before the rain has washed it away.",
        trap: "Six seconds is the ice and snow figure. Applying it to rain is safe; applying the rain figure to ice is not.",
        excerptKey: "following-dark-rain",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Following Distance",
        sourceUrl: hb(57),
      },
      {
        id: "wv_s2_09",
        topic: "sharing",
        question: "How much room must you leave when you overtake a bicycle in West Virginia?",
        choices: [
          "Whatever feels safe - no distance is set",
          "One full lane, always",
          "Not less than six feet",
          "Not less than three feet, at a careful and reduced speed",
        ],
        correctIndex: 3,
        explanation:
          "Three feet is the statutory minimum, and the law adds that the pass is made at a careful and reduced speed. You may not pull back to the right until safely clear of the bicycle.",
        context:
          "The handbook never gives a number here - it says only to slow down, make sure the rider is aware of you and leave plenty of room. West Virginia Code 17C-7-3 supplies the figure, so a question about the distance is a statute question.",
        trap: "\"No distance is set\" is what you would conclude from the handbook alone, and it is wrong. The Code sets three feet.",
        excerptKey: "code-bicycle-three-feet",
        sourceLabel: "W. Va. Code 17C-7-3 - Overtaking and passing vehicle or bicycle",
        sourceUrl: code("17C-7-3"),
        commonlyMissed: true,
      },
      {
        id: "wv_s2_10",
        topic: "rules",
        question: "Where does the handbook tell you never to change lanes?",
        choices: [
          "On any road with more than two lanes",
          "Within 200 feet of a bridge",
          "On any hill",
          "In an intersection or at a railroad crossing",
        ],
        correctIndex: 3,
        explanation:
          "Intersections and railroad crossings. Both are places where other drivers are already resolving several conflicts at once, and a lane change adds one more.",
        context:
          "The rest of the lane change sequence is fixed: mirrors, then a head check over the shoulder for the blind spot, then a look for anyone else moving into the same gap, then signal and move. Stay within the speed limit while you do it.",
        trap: "The examiner scores this directly on the road test - \"do not attempt lane changes at intersections\" is on the general driving checklist.",
        excerptKey: "no-lane-change-intersection",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Changing Lanes",
        sourceUrl: hb(58),
      },
      {
        id: "wv_s2_11",
        topic: "speed",
        question:
          "What is the maximum speed on a West Virginia interstate when nothing higher or lower is posted?",
        choices: ["55 mph", "65 mph", "70 mph", "75 mph"],
        correctIndex: 2,
        explanation:
          "Seventy. It is a maximum rather than a target, and a posted sign can set it lower on any stretch.",
        context:
          "Interstates also carry a floor. The handbook says not to drive slower than 55 mph on an interstate unless the weather, the road conditions or a posted sign call for less, because a much slower vehicle forces others into abrupt lane changes.",
        trap: "Seventy-five turns up on interstates in western states. West Virginia's designated maximum is 70.",
        excerptKey: "designated-speed-limits",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Speed Limits",
        sourceUrl: hb(52),
      },
      {
        id: "wv_s2_12",
        topic: "sharing",
        question:
          "You are following a motorcycle. What does the handbook say about the space you leave?",
        choices: [
          "Follow closer than usual so the rider can see you",
          "Two seconds is enough because a motorcycle is short",
          "Stay in the same lane position as the rider",
          "Keep a safe minimum three-to-four second following distance, and increase it at night and in bad weather",
        ],
        correctIndex: 3,
        explanation:
          "Three to four seconds as a minimum, and more at night or in bad weather. A motorcycle can usually stop much faster than the car behind it.",
        context:
          "Motorcyclists are entitled to the whole lane and will use it, moving around to avoid hazards you may not be able to see. When you pass one, go all the way into the other lane, and wait until you are well down the road before coming back.",
        trap: "Following closer so the rider can see you is backwards. It removes the space the rider needs and the space you need.",
        excerptKey: "motorcycle-following",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Sharing the Road with Motorcycles",
        sourceUrl: hb(61),
      },
      {
        id: "wv_s2_13",
        topic: "parking",
        question: "Which of these is a place West Virginia forbids you to stop, stand or park?",
        choices: [
          "On a bridge, on an elevated structure, or in a highway tunnel",
          "Any street where the speed limit is 25 mph",
          "Any street without a marked parking bay",
          "Within 100 feet of a school",
        ],
        correctIndex: 0,
        explanation:
          "Bridges, elevated structures and highway tunnels are on the prohibited list, along with controlled-access highways and anywhere official signs say no.",
        context:
          "The list also covers sidewalks, driveways, intersections, crosswalks, wheelchair ramps and curb cuts, the traffic side of another parked vehicle - double parking - and within 20 feet of a mailbox served daily by a carrier in a vehicle.",
        trap: "A speed limit does not create or remove a parking prohibition. The list is about places, not speeds.",
        excerptKey: "prohibited-parking-more",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Prohibited Parking",
        sourceUrl: hb(56),
      },
      {
        id: "wv_s2_14",
        topic: "signs",
        question: "You see a large orange diamond sign. What does the color tell you?",
        choices: [
          "A work zone or maintenance area",
          "A school zone",
          "A recreation area",
          "A hospital or motorist service",
        ],
        correctIndex: 0,
        explanation:
          "Orange is the basic color for construction and maintenance devices - signs, barricades, drums, cones, tubes, arrow panels and the flaggers' own clothing.",
        context:
          "Work zone devices tell you which way to go as well as that something is happening. On a barricade or vertical panel the diagonal stripes slope down toward the side you should pass: stripes falling to the right mean bear right.",
        trap: "Yellow-green is the school and pedestrian warning color in West Virginia, and brown belongs to parks and recreation. Neither is orange.",
        excerptKey: "construction-orange",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter V, Construction and Maintenance Signs",
        sourceUrl: hb(47),
      },
      {
        id: "wv_s2_15",
        topic: "rules",
        question: "What does the handbook say about backing across traffic lanes?",
        choices: [
          "Never back across other traffic lanes or through an intersection",
          "It is permitted if you use your hazard lights",
          "It is permitted on a road with a speed limit of 25 mph or less",
          "It is permitted if a passenger guides you",
        ],
        correctIndex: 0,
        explanation:
          "Never. Backing into a parallel parking space is the one case where the handbook accepts reversing in a traffic lane at all, and even that is described as not advisable elsewhere.",
        context:
          "Before backing, check all the way around the vehicle for people and obstacles, then keep looking to the rear while you move. The handbook is blunt about the camera and the mirror: do not depend on your mirror.",
        trap: "Hazard lights make you visible. They do not make an illegal maneuver legal or a blind one safe.",
        excerptKey: "backing-up",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Backing Up",
        sourceUrl: hb(55),
      },
      {
        id: "wv_s2_16",
        topic: "rightOfWay",
        question:
          "You are approaching an intersection with a yield sign. What does the handbook require?",
        choices: [
          "Stop completely, then yield",
          "Maintain speed unless a vehicle is already in the intersection",
          "Yield only to vehicles on your right",
          "Slow down before reaching the intersection, then yield to vehicles in it and to approaching traffic",
        ],
        correctIndex: 3,
        explanation:
          "Slow down on the approach, then give way both to anything already in the intersection and to traffic approaching it. A full stop is required only if that is what yielding takes.",
        context:
          "Yield differs from stop in obligation, not in outcome. A stop sign demands the stop whether or not anything is coming; a yield sign demands that you arrive slowly enough to give way if something is.",
        trap: "Arriving at speed and hoping the gap is there is what the sign exists to prevent.",
        excerptKey: "row-yield-sign",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Right-of-Way",
        sourceUrl: hb(59),
      },
      {
        id: "wv_s2_17",
        topic: "safety",
        question:
          "The vehicle behind you is following far too closely. What does the handbook tell you to do first?",
        choices: [
          "Brake hard to make the point",
          "Speed up to open the gap",
          "Tap your brakes gently to flash the brake lights and warn the tailgater",
          "Turn on your hazard lights",
        ],
        correctIndex: 2,
        explanation:
          "A gentle tap on the brakes flashes the lights without slowing you much. If that does not work, slow down to encourage a pass, and if that fails, pull over and let the vehicle go.",
        context:
          "Following too closely causes most rear-end collisions, and West Virginia scores it at two points on your record. The DMV asks this exact situation on its own sample test.",
        trap: "Braking hard in front of a tailgater is the answer that feels satisfying and causes the crash you were trying to avoid.",
        excerptKey: "tailgater-steps",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Tailgating",
        sourceUrl: hb(61),
      },
      {
        id: "wv_s2_18",
        topic: "signs",
        question: "What do the colors of a guide sign tell you in West Virginia?",
        choices: [
          "Green for directions, blue for motorist services, brown for parks and recreation",
          "Blue for directions, green for services, brown for construction",
          "All guide signs are green",
          "Brown for directions, green for parks, blue for warnings",
        ],
        correctIndex: 0,
        explanation:
          "Most guide signs are white on green. Motorist services - fuel, food, lodging - are white on blue, and parks and public recreation areas are white on brown.",
        context:
          "Guide signs answer three questions: where you are, what road you are on, and how to get where you want to go. Route markers are their own family - WV and U.S. route markers are generally black on white, and interstate markers are red, white and blue.",
        trap: "Brown is easy to misfile as construction. Construction is orange; brown is scenery.",
        excerptKey: "guide-signs-colors",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter V, Guide Signs",
        sourceUrl: hb(48),
      },
      {
        id: "wv_s2_19",
        topic: "emergencies",
        question: "Your car begins to skid. What does the handbook tell you to do with the steering?",
        choices: [
          "Steer away from the direction of the skid",
          "Hold the wheel dead straight",
          "Turn the steering wheel in the direction of the skid",
          "Brake hard and let the wheels lock",
        ],
        correctIndex: 2,
        explanation:
          "Steer into it. If the rear of the car is sliding to the right, you turn right; if it slides left, you turn left. Take your foot off the gas and leave the brakes alone unless you are about to hit something.",
        context:
          "The car will often start to swing the other way once it grips. The handbook tells you to turn the wheels again in the direction you want to go, then straighten up as the car settles.",
        trap: "Steering away from the skid is the instinct, and West Virginia learners name this as the question that beat them. Instinct is wrong here.",
        excerptKey: "skid-steer-into",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter IX, Skids",
        sourceUrl: hb(81),
        commonlyMissed: true,
      },
      {
        id: "wv_s2_20",
        topic: "licensing",
        question:
          "You have just moved to West Virginia with a valid out-of-state license. How long do you have to apply for a WV license?",
        choices: ["10 days", "30 days", "60 days", "90 days"],
        correctIndex: 1,
        explanation:
          "Thirty days from establishing residency. You will pass a vision screening, complete a short alcohol awareness course, and surrender the out-of-state license.",
        context:
          "Separately, a change of address once you are licensed here must be reported to the DMV in writing within 20 days. Telling the post office does not update your DMV record, and missing a renewal notice because of it is your problem.",
        trap: "Thirty days to transfer, 20 days to report a move. The two numbers are close enough to swap and they answer different questions.",
        excerptKey: "new-resident-30-days",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter I, New Resident",
        sourceUrl: hb(16),
      },
      {
        id: "wv_s2_21",
        topic: "rules",
        question: "When may you legally drive to the left of a yellow line for any distance?",
        choices: [
          "When overtaking a slow vehicle on a hill",
          "Whenever the road is clear ahead",
          "On any road with a center turn lane",
          "In a lane marked on both sides by a double yellow broken line",
        ],
        correctIndex: 3,
        explanation:
          "A reversible lane, marked on both sides by a double yellow broken line, is the only case the handbook allows. Its direction of flow changes with the time of day.",
        context:
          "The double broken yellow is a deliberate marking, not a worn-out solid line. Where traffic volumes are heavy at certain hours, reversing the flow of a lane is how a road carries the peak.",
        trap: "A center left-turn lane also sits to the left of a yellow line, but you may only cross into it to turn - not travel along it.",
        excerptKey: "reversible-lanes",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter V, Pavement Markings",
        sourceUrl: hb(51),
      },
      {
        id: "wv_s2_22",
        topic: "sharing",
        question:
          "You are behind a fully loaded tractor-trailer traveling at 55 mph. How much room does it need to stop compared with a car?",
        choices: [
          "About the same",
          "About half again as much",
          "About twice as much",
          "About three times as much",
        ],
        correctIndex: 3,
        explanation:
          "Three times the distance. That is the figure the handbook prints, and it is why cutting in front of a truck to reach your exit is the maneuver it warns about most.",
        context:
          "Trucks are also longer, heavier, harder to steer and have far bigger blind spots. The No-Zone is the name for those blind spots, and the trick for finding yourself in one is simple: if you cannot see the driver's face in the truck's side mirror, the driver cannot see you.",
        trap: "Twice sounds cautious and understates it. The handbook says three.",
        excerptKey: "truck-stopping-distance",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Sharing the Road with Heavy Trucks",
        sourceUrl: hb(62),
      },
      {
        id: "wv_s2_23",
        topic: "signals",
        question: "What does a steady circular yellow light mean?",
        choices: [
          "Speed up to clear the intersection",
          "Proceed with caution, as at a flashing yellow",
          "Stop, as at a red light",
          "The green is ending and the light will change to red",
        ],
        correctIndex: 3,
        explanation:
          "It is the warning that the green has finished. The handbook says you should only drive through a yellow light if your vehicle is already within the intersection.",
        context:
          "A yellow arrow does the same job for a protected turn: the green arrow is ending and will change to red. A steady red arrow means stop before the intersection, stop line or crosswalk and stay there.",
        trap: "Treating yellow as an invitation to accelerate is the everyday misreading, and it is exactly the moment cross traffic starts to move.",
        excerptKey: "steady-yellow",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter V, Traffic Lights",
        sourceUrl: hb(49),
      },
      {
        id: "wv_s2_24",
        topic: "safety",
        question: "How often does West Virginia require a vehicle safety inspection?",
        choices: [
          "Every year",
          "Every three years",
          "Only on resale",
          "Every two years",
        ],
        correctIndex: 3,
        explanation:
          "Every two years. When the vehicle passes, a sticker showing the month and year of the next inspection goes on the windshield, and removing it is against the law.",
        context:
          "The inspection has to be done at a station displaying an official state inspection station sign. A valid sticker is also one of the things the examiner checks before your road test even starts.",
        trap: "Annual inspection was the old rule and is still the answer people give. The DMV asks this on its own sample test with \"every year\" sitting right beside the right answer.",
        excerptKey: "inspection-two-years",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VIII, Vehicle Conditions",
        sourceUrl: hb(74),
        commonlyMissed: true,
      },
      {
        id: "wv_s2_25",
        topic: "rightOfWay",
        question:
          "A police officer is directing traffic at an intersection and waves you through a red light. What do you do?",
        choices: [
          "Wait for the green, because the signal is the law",
          "Sound your horn and stay put",
          "Go through, because the officer's direction overrules the signal",
          "Go through only after every other vehicle has stopped",
        ],
        correctIndex: 2,
        explanation:
          "You go. The handbook states it plainly: directions from a police officer overrule the message of any sign, signal or road marking.",
        context:
          "The same principle sits in the statute, which requires drivers to obey official traffic-control devices unless otherwise directed by a traffic or police officer. Where a person and a device disagree, the person wins.",
        trap: "\"The signal is the law\" is the reasonable-sounding answer and the wrong one. The DMV asks it on its own sample test.",
        excerptKey: "row-police-officer",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Right-of-Way",
        sourceUrl: hb(59),
      },
      {
        id: "wv_s2_26",
        topic: "impairment",
        question:
          "You have been arrested for DUI and are asked to take a breath test. What happens if you refuse?",
        choices: [
          "Nothing, since the test is voluntary",
          "A fine, but your license is unaffected",
          "The case is dismissed for lack of evidence",
          "Your privilege to drive is revoked for at least one year, and up to life",
        ],
        correctIndex: 3,
        explanation:
          "Refusal has its own penalty. Under West Virginia's Implied Consent Law you are deemed to have already agreed to the test, and refusing revokes your driving privilege for a period of one year and up to life.",
        context:
          "The handbook makes the point that the law protects the sober driver as much as it catches the drunk one: a chemical test gives a medically accepted measure rather than an officer's impression.",
        trap: "Refusing does not remove the evidence, it adds a separate revocation on top of whatever the court decides about the DUI itself.",
        excerptKey: "implied-consent-refusal",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter III, Implied Consent and the Chemical Test",
        sourceUrl: hb(32),
      },
      {
        id: "wv_s2_27",
        topic: "sharing",
        question: "What equipment does West Virginia require on a bicycle ridden after dark?",
        choices: [
          "A white headlight visible for at least 500 feet to the front",
          "A flashing amber light on the rear only",
          "Reflective clothing, but no lights",
          "A headlight visible for at least 100 feet",
        ],
        correctIndex: 0,
        explanation:
          "A white headlight visible for at least 500 feet ahead is required for riding after dark, on top of the red rear reflector every bicycle must carry.",
        context:
          "The full list is a red rear reflector, brakes strong enough to stop one wheel on dry level clean pavement, and a bell or similar device audible for at least 100 feet. A siren or whistle is not permitted.",
        trap: "One hundred feet is the audible range of the bell, not the visible range of the light. The two numbers sit in the same list.",
        excerptKey: "bicycle-headlight",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Sharing the Road with Bicycles",
        sourceUrl: hb(64),
      },
      {
        id: "wv_s2_28",
        topic: "speed",
        question:
          "The road ahead is icy and the posted limit is 55 mph. What does West Virginia law require of your speed?",
        choices: [
          "You must drive at a speed that is reasonable and prudent for the conditions, which will be well under 55",
          "You may drive 55, because that is the posted limit",
          "You must drive at exactly half the posted limit",
          "You must stop until the road is treated",
        ],
        correctIndex: 0,
        explanation:
          "The posted limit is a ceiling, never a promise. West Virginia law prohibits driving faster than is reasonable and prudent for the existing conditions and the actual and potential hazards.",
        context:
          "The handbook lists the situations where you slow down regardless of the sign: approaching and crossing an intersection, going around a curve, coming to the top of a hill, on a narrow road, and in anything that limits visibility or stopping distance.",
        trap: "Nothing in the law halves the limit for you. It requires judgment, and \"but the sign said 55\" is not a defense.",
        excerptKey: "code-basic-speed",
        sourceLabel: "W. Va. Code 17C-6-1 - Speed limitations generally",
        sourceUrl: code("17C-6-1"),
      },
      {
        id: "wv_s2_29",
        topic: "licensing",
        question: "What must you carry with you every time you drive in West Virginia?",
        choices: [
          "Your license, proof of West Virginia liability insurance, and your current registration card",
          "Your driver's license only",
          "Your license and your birth certificate",
          "Nothing, as long as the vehicle is registered",
        ],
        correctIndex: 0,
        explanation:
          "Three things: the license, the certificate of insurance or other proof of WV liability insurance, and the current registration card. Stopped for a moving violation, you produce all three.",
        context:
          "An image of the insurance card displayed on a wireless device counts as valid proof. Failing to have your license on you is a misdemeanour, though you will not be convicted if it was valid at the time and you produce it in court.",
        trap: "The license alone is the answer people give, and it is two documents short.",
        excerptKey: "documents-in-vehicle",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter I, Documents to Keep in Your Vehicle",
        sourceUrl: hb(25),
      },
      {
        id: "wv_s2_30",
        topic: "emergencies",
        question:
          "Your vehicle breaks down on an interstate. Where does the handbook tell you to put the flares?",
        choices: [
          "One directly behind the vehicle and one 100 feet back",
          "Both alongside the vehicle",
          "One 500 feet back only",
          "One about a vehicle length behind and another about 300 feet back",
        ],
        correctIndex: 3,
        explanation:
          "One about a vehicle length behind you and another about 300 feet back, each placed on the shoulder near the edge of the through lane.",
        context:
          "Before the flares, move as far off the road as you can, switch on the four-way flashers, and get everyone out of the vehicle and well away from the road. Shoulders on an interstate are for disabled vehicles and nothing else.",
        trap: "Putting a flare beside the car warns nobody in time. The far one exists to give a driver at 70 mph somewhere to react.",
        excerptKey: "disabled-flares",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VII, Adverse Conditions",
        sourceUrl: hb(70),
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Real Test Difficulty",
    difficulty: "medium",
    description:
      "Thirty-five questions pitched where the real West Virginia knowledge test sits. The numbers matter, the wrong answers are the ones people actually pick, and several are built on the rules the DMV puts on its own sample test.",
    questions: [
      {
        id: "wv_s3_01",
        topic: "safety",
        question:
          "At what distance must you dim your high beams for a vehicle you are following?",
        choices: ["100 feet", "200 feet", "300 feet", "500 feet"],
        correctIndex: 1,
        explanation:
          "Two hundred feet for a vehicle in front of you. Five hundred feet is the figure for an oncoming vehicle - the two numbers go with two different situations.",
        context:
          "The handbook prints the pair together twice, once in the headlights section and once in defensive driving. High beams reflected off a mirror blind the driver ahead just as effectively as they blind an oncoming one.",
        trap: "The DMV's own sample test uses \"dim your headlights within 200 feet of oncoming vehicles\" as its false statement. Swapping the two figures is the intended mistake.",
        excerptKey: "dim-500-200",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Headlights and Their Use",
        sourceUrl: hb(61),
        commonlyMissed: true,
      },
      {
        id: "wv_s3_02",
        topic: "licensing",
        question:
          "You took the knowledge test online through Know To Drive and passed. May you now drive with a licensed adult beside you?",
        choices: [
          "Yes, the certificate is a temporary permit",
          "Yes, for 30 days while the permit is processed",
          "No - the certificate is not permission to drive, and you must go to a DMV office",
          "Yes, but only between 5:00 am and 10:00 pm",
        ],
        correctIndex: 2,
        explanation:
          "No. The handbook prints the warning in capitals: the certificate received from that test is not permission to drive, and you must go to a DMV location for processing.",
        context:
          "Online testing is part of the application, not the end of it. You still bring your proof of identity, Social Security number and two proofs of WV residency to a regional office, and the permit is issued there.",
        trap: "This is the mistake West Virginians describe on forums after the fact - a pass email in hand and no permit in the wallet.",
        excerptKey: "know-to-drive-online",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter I, Know to Drive Online Testing",
        sourceUrl: hb(19),
        commonlyMissed: true,
      },
      {
        id: "wv_s3_03",
        topic: "rules",
        question:
          "How close to an intersection does West Virginia forbid you to park, measured from a stop sign or traffic control signal?",
        choices: ["15 feet", "20 feet", "30 feet", "50 feet"],
        correctIndex: 2,
        explanation:
          "Thirty feet from any stop sign or traffic control signal. Parking closer hides the sign from the drivers who need to read it.",
        context:
          "Four distances make up the set. Fifteen feet from a fire hydrant, 20 from a crosswalk at an intersection, 30 from a stop sign or signal, and 50 from the nearest rail of a railroad crossing.",
        trap: "Fifty feet belongs to the railroad and 20 to the crosswalk. The DMV's sample test offers all three as distractors in a single question.",
        excerptKey: "prohibited-parking-distances",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Prohibited Parking",
        sourceUrl: hb(55),
        commonlyMissed: true,
      },
      {
        id: "wv_s3_04",
        topic: "sharing",
        question:
          "A school bus with red lights flashing is stopped on the far side of a four-lane road divided by a grass median. You are coming the other way. What must you do?",
        choices: [
          "Keep going, because the median divides the roadway",
          "Slow to 15 mph and pass with care",
          "Stop, unless you are on an interstate",
          "Stop only if the bus is on your side of the median",
        ],
        correctIndex: 2,
        explanation:
          "You stop. West Virginia requires traffic in both directions to stop, and it names exactly one place where oncoming traffic does not: an interstate highway, where the bus is on a separate roadway.",
        context:
          "The handbook applies the rule to all highways, streets, parking lots, private roads and driveways, and to buses loading on school or private property. The statute frames the exception as a controlled-access highway where the bus is on a different roadway and pedestrians may not cross.",
        trap: "In many states any divided highway excuses oncoming traffic. In West Virginia a median is not enough - it has to be an interstate.",
        excerptKey: "school-bus-interstate",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, School Bus Rules",
        sourceUrl: hb(60),
        commonlyMissed: true,
      },
      {
        id: "wv_s3_05",
        topic: "licensing",
        question:
          "You failed the knowledge test this morning. When is the earliest you may take it again?",
        choices: [
          "The same day, after paying another fee",
          "The next working day",
          "After one week",
          "After 30 days",
        ],
        correctIndex: 2,
        explanation:
          "One week. This is in West Virginia Code 17B-2-6, not merely DMV practice: an applicant who fails either the written test or the road skills test may not be tested twice within a period of one week.",
        context:
          "One fee entitles an applicant under 18 to two attempts at the written test. An applicant 18 or over gets two attempts at the written test and three at the road skills test within 90 days of the permit being issued.",
        trap: "People do report retesting the same day and passing. The published rule is a week, and that is what the question is asking.",
        excerptKey: "code-retest-one-week",
        sourceLabel: "W. Va. Code 17B-2-6 - Application for license or instruction permit",
        sourceUrl: code("17B-2-6"),
        commonlyMissed: true,
      },
      {
        id: "wv_s3_06",
        topic: "speed",
        question:
          "How far does a West Virginia school zone extend along a street that runs beside the school grounds?",
        choices: ["50 feet", "100 feet", "125 feet", "250 feet"],
        correctIndex: 2,
        explanation:
          "One hundred and twenty-five feet from the school grounds along the abutting street or highway. The zone is all school property plus that strip.",
        context:
          "The statute adds a case the handbook skips: where school property does not touch a street but is reached through a right-of-way, the zone runs 125 feet from the entrance to that right-of-way, with the Division of Highways erecting the signs.",
        trap: "The 125 feet is measured from the school grounds, not from the sign. The sign marks where the zone begins.",
        excerptKey: "school-zone-125-feet",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Speed Limits",
        sourceUrl: hb(52),
      },
      {
        id: "wv_s3_07",
        topic: "impairment",
        question:
          "How many points does a conviction for speeding in a school zone put on your West Virginia record?",
        choices: ["3", "5", "6", "8"],
        correctIndex: 2,
        explanation:
          "Six, the same as reckless driving, hit and run, or speeding 20 mph or more over the limit. Only fleeing from an officer is worse, at eight.",
        context:
          "Points stay on the record for two years from the conviction date. Six points brings a letter of caution from the DMV; twelve makes the license subject to suspension. An approved eight-hour defensive driving course removes three, once in any twelve months.",
        trap: "Speeding 11 to 14 over is three points and 15 to 19 is five. The school-zone offense jumps straight to six regardless of how far over you were.",
        excerptKey: "points-two-years",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter II, Point Scale",
        sourceUrl: hb(30),
      },
      {
        id: "wv_s3_08",
        topic: "emergencies",
        question:
          "Your brakes fail on a downhill grade. What does the handbook tell you to do first?",
        choices: [
          "Pump the brake pedal quickly",
          "Pull the parking brake up as hard as you can",
          "Switch the ignition off",
          "Steer into the guard rail to scrub off speed",
        ],
        correctIndex: 0,
        explanation:
          "Pump the pedal quickly first. Then shift to a lower gear and look for somewhere off the roadway to stop, using the horn and lights to warn other drivers.",
        context:
          "The parking brake comes third, and the handbook adds a detail people miss: hold the release while you use it, so you can ease off the moment the rear wheels lock and start a skid.",
        trap: "Yanking the parking brake on at speed locks the rear wheels and spins the car. It is a tool here, not a lever to pull as hard as possible.",
        excerptKey: "brake-failure",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter IX, Brake Failure",
        sourceUrl: hb(81),
      },
      {
        id: "wv_s3_09",
        topic: "safety",
        question:
          "At roughly what speed do the tires of an ordinary passenger car begin to ride on top of the water in a severe rainstorm rather than through it?",
        choices: ["35 mph", "45 mph", "55 mph", "65 mph"],
        correctIndex: 2,
        explanation:
          "Fifty-five. The handbook says partial hydroplaning starts at about 35 mph, and that at 55 the tires ride totally on top of the water with no friction available to brake, accelerate or corner.",
        context:
          "Below about 35 mph a tire wipes the road much as a wiper blade wipes a windshield. Deep tread lets the water escape; worn tread does not, which is why the handbook links hydroplaning to tread depth and inflation.",
        trap: "Thirty-five is where hydroplaning begins, not where it becomes total. Both numbers are in the same paragraph.",
        excerptKey: "hydroplaning-speeds",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VIII, Rain",
        sourceUrl: hb(73),
      },
      {
        id: "wv_s3_10",
        topic: "rightOfWay",
        question:
          "You are on an entrance ramp merging onto an interstate. Who has the right-of-way?",
        choices: [
          "You do, because merging traffic is entitled to a gap",
          "Whoever is traveling faster",
          "Neither - the merge is negotiated by signaling",
          "Traffic already on the interstate",
        ],
        correctIndex: 3,
        explanation:
          "Traffic already on the interstate has it. The handbook adds the practical half: you cannot count on other drivers seeing you or moving over to let you in.",
        context:
          "About halfway along the ramp you start checking interstate traffic, signal, find a gap and adjust your speed to match it. Do not cut sharply left into the stream - follow the lane, merge, then change lanes.",
        trap: "Stopping on the ramp or in the acceleration lane is the answer that feels safe and is specifically forbidden. Entering from a standstill is a last resort from the shoulder.",
        excerptKey: "interstate-right-of-way",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VII, Entering an Interstate",
        sourceUrl: hb(68),
      },
      {
        id: "wv_s3_11",
        topic: "parking",
        question: "In which direction must a parked vehicle face on a West Virginia street?",
        choices: [
          "Either direction, as long as it is within 18 inches of the curb",
          "Facing downhill, always",
          "The same direction as the movement of traffic on that side of the street",
          "Facing oncoming traffic, so you can see it approach",
        ],
        correctIndex: 2,
        explanation:
          "The same direction as traffic moves on that side of the street. Parking against the flow means crossing the road to get into the space, and pulling out into traffic head-on.",
        context:
          "The rest of the parking routine is short: avoid double parking, get completely off the travelled portion of the road, shut the engine off, set the parking brake, lock up and take the keys. Check for bicycles and motorcycles before opening your door.",
        trap: "Being within 18 inches of the curb does not make the direction irrelevant. Both rules apply at once.",
        excerptKey: "park-direction-of-traffic",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Parking Maneuvers",
        sourceUrl: hb(55),
      },
      {
        id: "wv_s3_12",
        topic: "licensing",
        question:
          "You are 16 and want to move from Level 1 to a Level 2 intermediate license. How much conviction-free driving time is required first?",
        choices: [
          "180 consecutive days",
          "90 consecutive days",
          "One year",
          "None, once you turn 16",
        ],
        correctIndex: 0,
        explanation:
          "A minimum of 180 consecutive days of conviction-free driving at Level 1, immediately before the Level 2 application.",
        context:
          "You also need to be at least 16, pass a road skills test, and hold a certified log of 50 hours behind the wheel including 10 at night, or complete an approved West Virginia Department of Education driver education course instead.",
        trap: "A conviction restarts the clock from the date of the conviction. The 180 days must be consecutive, so one ticket costs you six months, not a few days.",
        excerptKey: "level2-180-days",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter I, Level 2 GDL Intermediate Driver's License",
        sourceUrl: hb(20),
      },
      {
        id: "wv_s3_13",
        topic: "signs",
        question:
          "You are approaching a railroad crossing marked with a crossbuck and there are two sets of tracks. What does the handbook warn you about?",
        choices: [
          "Trains on the second set of tracks, which a passing train can hide",
          "Nothing extra, because the gate covers both tracks",
          "That the crossing has no legal force without a gate",
          "That the speed limit drops to 15 mph",
        ],
        correctIndex: 0,
        explanation:
          "A second train on the other set of tracks. A sign below the crossbuck tells you how many tracks there are when there is more than one.",
        context:
          "The other crossing rule is about space, not sight: do not enter a crossing until the vehicle ahead has moved far enough forward that you can clear the tracks. Otherwise you can be trapped on them.",
        trap: "The gate protects the crossing, not your judgment. Failing to stop for flashing lights or a lowered barrier is a citation on its own.",
        excerptKey: "railroad-second-train",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter V, Railroad Crossing Signs and Signals",
        sourceUrl: hb(49),
      },
      {
        id: "wv_s3_14",
        topic: "impairment",
        question:
          "How long does a driver have to be awake before the handbook says their driving is comparable to being under the influence?",
        choices: ["12 hours", "15 hours", "18 hours", "24 hours"],
        correctIndex: 2,
        explanation:
          "Eighteen hours, though the handbook notes the time varies. At that point reaction times and judgment look like those of an impaired driver.",
        context:
          "The remedy the handbook offers is sleep, not stimulants: pull over somewhere safe and take a short nap, because as little as 10 to 20 minutes makes a real difference. Coffee and fresh air are listed among the home remedies that do not work.",
        trap: "Being tired feels manageable in a way that being drunk does not, which is exactly why the chapter puts them in the same category.",
        excerptKey: "drowsy-18-hours",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter III, Drowsy Driving Is Impaired Driving",
        sourceUrl: hb(33),
      },
      {
        id: "wv_s3_15",
        topic: "rules",
        question:
          "The handbook forbids turning your vehicle around near the crest of a hill. Within what distance must an approaching driver be able to see you?",
        choices: [
          "1,000 feet",
          "200 feet",
          "300 feet",
          "500 feet",
        ],
        correctIndex: 3,
        explanation:
          "Five hundred feet in either direction. Turning around near a curve or a hill crest where you cannot be seen that far away is against the law.",
        context:
          "On an interstate the rule is absolute rather than conditional: never make a U-turn, and go to the next exit instead. The gravel and paved crossovers in interstate medians are for police and emergency vehicles only.",
        trap: "Five hundred feet turns up three times in this handbook - headlight dimming for oncoming traffic, the visibility threshold for switching lights on, and this. They are three different rules that share a number.",
        excerptKey: "u-turn-500-feet",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Changing Direction",
        sourceUrl: hb(55),
      },
      {
        id: "wv_s3_16",
        topic: "safety",
        question:
          "You are driving a car fitted with anti-lock brakes and must stop suddenly. What do you do?",
        choices: [
          "Push hard on the brake and keep steering",
          "Pump the pedal rapidly, as with older brakes",
          "Brake hard, then release, then brake again",
          "Use the parking brake instead",
        ],
        correctIndex: 0,
        explanation:
          "Press hard and steer. ABS is designed to keep the wheels from locking so you retain steering, and the handbook says a driver can lose all brake force by pumping ABS brakes.",
        context:
          "The handbook also deflates the expectation: in a sudden stop, ABS improves performance by only about 10 percent at best. It reduces the risk of a lockup and a loss of control, and it does not let a car stop on a dime.",
        trap: "Pumping was the correct technique before ABS and is still taught by people who learned it then. On an ABS car it defeats the system.",
        excerptKey: "abs-do-not-pump",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VIII, Safety Equipment",
        sourceUrl: hb(78),
        commonlyMissed: true,
      },
      {
        id: "wv_s3_17",
        topic: "sharing",
        question: "What does the handbook say about sounding your horn near a horse and rider?",
        choices: [
          "Sound it once so the rider knows you are there",
          "Sound it only if the horse is on the roadway",
          "Never sound it, because the horse may be frightened into causing a crash",
          "Sound it twice, as you would for a bicycle",
        ],
        correctIndex: 2,
        explanation:
          "Never. The handbook tells drivers to take every precaution to avoid frightening a horse, and names the horn specifically as the thing not to do.",
        context:
          "People riding animals have the same rights as motor vehicle users and are subject to the same rules, under West Virginia Code 17C-2-6. They may use most public highways but not interstates.",
        trap: "The horn is the right tool for warning a pedestrian who has not seen you and the wrong one within earshot of a horse.",
        excerptKey: "horse-no-horn",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Sharing the Road with Animal Riders",
        sourceUrl: hb(63),
      },
      {
        id: "wv_s3_18",
        topic: "licensing",
        question:
          "How many points on your West Virginia record make your license subject to suspension?",
        choices: ["6", "8", "12", "15"],
        correctIndex: 2,
        explanation:
          "Twelve. At six points the DMV sends a letter of caution; at twelve the license becomes subject to suspension.",
        context:
          "Points fall off two years after the conviction date. Three can be removed early by completing an approved eight-hour defensive driving class, once every twelve months - but only a DMV-approved course, and only after the points have appeared on your record.",
        trap: "Taking the class before the points appear wastes it. The handbook says so directly.",
        excerptKey: "points-six-and-twelve",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter II, Point System",
        sourceUrl: hb(28),
      },
      {
        id: "wv_s3_19",
        topic: "emergencies",
        question:
          "A tire blows out at highway speed. What is the first thing the handbook tells you to do?",
        choices: [
          "Brake firmly to slow down quickly",
          "Steer onto the shoulder immediately",
          "Hold the wheel tightly, steer straight ahead and ease off the accelerator",
          "Switch on the hazard lights before anything else",
        ],
        correctIndex: 2,
        explanation:
          "Grip, steer straight, ease off the gas. Braking comes only once the vehicle is under control, and then you pull all the way off the road.",
        context:
          "If you cannot get off the road at once, keep driving slowly with the emergency flashers on. The handbook names under-inflated tires as one of the most common causes of a blowout, which is why it tells you to check the pressure monthly.",
        trap: "Braking is the instinct and it is what turns a blowout into a spin. Control first, speed second.",
        excerptKey: "blowout",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter IX, Blowouts",
        sourceUrl: hb(80),
      },
      {
        id: "wv_s3_20",
        topic: "rules",
        question:
          "You are driving well below the normal speed of traffic on a two-lane road. What does the handbook require?",
        choices: [
          "Put on your hazard lights and keep going",
          "Move to the center of the lane so you are visible",
          "Nothing, as long as you are at or above half the posted limit",
          "Drive as close as possible to the right edge of the road, and pull off at the first safe turnout",
        ],
        correctIndex: 3,
        explanation:
          "Keep right and use the first safe turnout to let the traffic behind you past. The rule applies where there is one lane in each direction and the overtaking traffic has no clear lane to use.",
        context:
          "West Virginia Code 17C-7-1 puts the same duty in law: a vehicle proceeding slower than the normal speed of traffic is driven in the right-hand lane, or as close as practicable to the right-hand curb or edge of the roadway.",
        trap: "Hazard lights are for a stopped or disabled vehicle. They do not license you to hold up a line of traffic.",
        excerptKey: "code-slower-right-lane",
        sourceLabel: "W. Va. Code 17C-7-1 - Driving on right side of roadway",
        sourceUrl: code("17C-7-1"),
      },
      {
        id: "wv_s3_21",
        topic: "signals",
        question: "What must you do when the walk signal shows a raised hand or DON'T WALK?",
        choices: [
          "As a driver, nothing - the signal is for pedestrians and they must obey it",
          "Stop, because the signal controls vehicles too",
          "Yield to any pedestrian regardless of the signal",
          "Proceed only after the signal changes",
        ],
        correctIndex: 0,
        explanation:
          "Crosswalk signals are traffic signals for pedestrians, and where they are in place pedestrians are required to obey them. Your own instruction comes from the vehicle signal.",
        context:
          "One pedestrian is outside that system altogether. A blind person on foot using a guide dog, service animal, white cane or walking stick has the right-of-way on any highway, street or road, and the handbook says this holds whether or not they are in a crosswalk.",
        trap: "A DON'T WALK signal does not remove your duty to avoid hitting someone. It settles whose turn it is, not who has to look.",
        excerptKey: "crosswalk-signals",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter V, Crosswalk Signals",
        sourceUrl: hb(50),
      },
      {
        id: "wv_s3_22",
        topic: "speed",
        question: "What is the minimum speed on a West Virginia interstate in good conditions?",
        choices: ["40 mph", "45 mph", "50 mph", "55 mph"],
        correctIndex: 3,
        explanation:
          "Fifty-five. The handbook says not to drive slower than that on an interstate unless the weather or road conditions are bad or a lower speed has been posted.",
        context:
          "A vehicle traveling much slower than the rest of the traffic is a hazard in its own right, because the drivers behind it have to change lanes abruptly. Slower traffic stays in the right-hand lane except when passing.",
        trap: "Fifty-five is the maximum on an open county highway and the minimum on an interstate. The same number does two opposite jobs.",
        excerptKey: "interstate-min-55",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VII, Speeds on Interstates",
        sourceUrl: hb(69),
        commonlyMissed: true,
      },
      {
        id: "wv_s3_23",
        topic: "parking",
        question: "How close to the nearest rail of a railroad crossing may you park?",
        choices: ["No closer than 20 feet", "No closer than 30 feet", "No closer than 50 feet", "No closer than 100 feet"],
        correctIndex: 2,
        explanation:
          "Fifty feet from the nearest rail. It is the largest of the four parking distances the handbook gives.",
        context:
          "The statute lists more of them: 20 feet from the driveway entrance to a fire station, 75 feet from a fire station entrance on the opposite side of the street when it is signposted, and 20 feet from a mail receptacle served daily by a carrier in a vehicle.",
        trap: "Thirty feet belongs to the stop sign and signal. The DMV builds a sample-test distractor out of exactly this substitution.",
        excerptKey: "prohibited-parking-railroad",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Prohibited Parking",
        sourceUrl: hb(55),
      },
      {
        id: "wv_s3_24",
        topic: "impairment",
        question:
          "Which of these does the handbook say will actually sober someone up?",
        choices: [
          "Black coffee",
          "A cold shower",
          "Time",
          "Fresh air and exercise",
        ],
        correctIndex: 2,
        explanation:
          "Only time. The handbook lists physical exercise, black coffee, fresh air and cold showers together as home remedies that do not effectively help someone sober up.",
        context:
          "It also warns that blood alcohol keeps climbing after the last drink. Its own example has a person still above 0.06 percent at four in the morning after stopping at half past eleven.",
        trap: "Coffee makes a drunk person more alert, not less drunk. Alertness is not the thing that failed.",
        excerptKey: "sobering-time",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter III, Driving Impaired or Under the Influence",
        sourceUrl: hb(31),
      },
      {
        id: "wv_s3_25",
        topic: "signs",
        question:
          "What does a right-side-up triangle with a reflective red border and a fluorescent orange center identify?",
        choices: [
          "A hazardous materials load",
          "A student driver",
          "A farm entrance ahead",
          "A slow-moving vehicle, or one that has made an emergency stop",
        ],
        correctIndex: 3,
        explanation:
          "It is the slow-moving vehicle emblem. It goes on the back of a vehicle that cannot keep up with normal traffic - a tractor, a piece of construction equipment - or one that has had to stop suddenly.",
        context:
          "Slow-moving vehicles are required to display it. When you meet one, judge its speed properly before you commit to a pass, because the closing speed on a tractor doing 15 mph is far higher than it looks.",
        trap: "The upright triangle is on the vehicle; the upside-down triangle is the yield sign beside the road. Orientation is the whole difference.",
        excerptKey: "slow-moving-emblem",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Sharing the Road with Slow Vehicles",
        sourceUrl: hb(62),
      },
      {
        id: "wv_s3_26",
        topic: "safety",
        question:
          "How much further can it take to stop on snow or ice than on dry pavement, according to the handbook?",
        choices: ["Twice as far", "Four times as far", "Eight times as far", "As much as 12 times as far"],
        correctIndex: 3,
        explanation:
          "As much as twelve times. Snow tires and chains help you get moving and steer, but the handbook says neither lets you drive safely on snow or ice at normal speeds.",
        context:
          "Bridges and overpasses freeze before the rest of the road, so ice can be waiting on them when everything else is clear. Brake gently and smoothly, and clear every window completely before you set off.",
        trap: "Four times is roughly the wet-road figure people carry around. Ice is in a different league.",
        excerptKey: "snow-12-times",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VIII, Snow and Sleet",
        sourceUrl: hb(73),
      },
      {
        id: "wv_s3_27",
        topic: "rightOfWay",
        question:
          "A funeral procession is crossing an intersection ahead of you. What does the handbook say?",
        choices: [
          "It is a courtesy rather than a legal duty, and once the lead vehicle has cleared the intersection the rest of the procession has the right-of-way",
          "You are required by law to stop until it has passed",
          "You may cut through the procession if there is a gap",
          "The procession must yield to you if you have a green light",
        ],
        correctIndex: 0,
        explanation:
          "The handbook is careful with the wording: yielding is a courtesy, not a requirement, but once the lead vehicle has cleared the intersection the rest of the procession has the right-of-way.",
        context:
          "You are asked to let it pass and not to cut in or out of it. The one place you may pass a procession is an expressway.",
        trap: "\"Required by law\" and \"cut through if there is a gap\" are the two ends people fall off. The handbook sits between them.",
        excerptKey: "row-funeral",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Right-of-Way",
        sourceUrl: hb(59),
      },
      {
        id: "wv_s3_28",
        topic: "licensing",
        question:
          "What is the minimum vision standard for a West Virginia driver's license when using both eyes?",
        choices: [
          "20/40",
          "20/20",
          "20/60",
          "20/70",
        ],
        correctIndex: 0,
        explanation:
          "20/40 or better using both eyes, with or without conventional corrective lenses. If glasses or contacts are what get you there, a corrective lenses restriction goes on the license.",
        context:
          "A driver with only one eye can pass if that eye reaches 20/40. Bi-optic and telescopic lenses may not be used to satisfy the standard. Depth perception, color recognition and peripheral vision may also be checked.",
        trap: "20/20 is perfect vision, not the legal threshold. Requiring it would take a large share of licensed drivers off the road.",
        excerptKey: "vision-screening",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter IV, Vision Screening",
        sourceUrl: hb(34),
      },
      {
        id: "wv_s3_29",
        topic: "rules",
        question:
          "The handbook says the road is most dangerous at which point in a rainstorm?",
        choices: [
          "When it begins to rain",
          "After the rain has stopped",
          "In the middle of a heavy downpour",
          "The day after, once the surface has dried",
        ],
        correctIndex: 0,
        explanation:
          "At the start. A light rain lifts the oil and dirt on the surface and mixes it into a slippery film before enough water falls to wash it away.",
        context:
          "That film costs you grip in curves and lengthens your stopping distance, so the handbook's instruction is simply to reduce speed. The DMV asks this on its own sample test.",
        trap: "A downpour looks more dangerous and is more visible. The thin first rain is the one that surprises people.",
        excerptKey: "wet-pavement-film",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VIII, Rain",
        sourceUrl: hb(73),
        commonlyMissed: true,
      },
      {
        id: "wv_s3_30",
        topic: "sharing",
        question:
          "You are stopped at a corner waiting to pull out. Why does the handbook single out motorcycles here?",
        choices: [
          "Because motorcycles must always yield to cars at intersections",
          "Because motorcycles are required to sound their horn at intersections",
          "Because motorcycles cannot legally use the right-hand lane",
          "Because a motorcycle can be hidden by parked vehicles and trees, and you are looking for cars",
        ],
        correctIndex: 3,
        explanation:
          "Because you are scanning for something car-sized. A motorcycle is small enough to disappear behind a parked van or a tree, and the handbook tells you to keep looking all the way across the intersection.",
        context:
          "Most car-motorcycle crashes come down to a driver who was not paying attention. Space and time are what the handbook asks you to give: expect to see motorcycles, and expect them to move within their lane.",
        trap: "There is no special yielding rule for motorcycles. The rules are the same, and the seeing is what is different.",
        excerptKey: "motorcycle-entire-lane",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VI, Sharing the Road with Motorcycles",
        sourceUrl: hb(62),
      },
      {
        id: "wv_s3_31",
        topic: "emergencies",
        question:
          "You come to a flooded road at night and cannot judge how deep the water is. What does the handbook tell you?",
        choices: [
          "Cross slowly in a low gear",
          "Cross quickly to build a bow wave",
          "Never attempt to drive across a flooded roadway",
          "Cross only if the water is below the bottom of the doors",
        ],
        correctIndex: 2,
        explanation:
          "Never attempt it. Six inches of water can float some smaller vehicles and two feet will carry most away, and at night you cannot see that the road under the water may have washed out entirely.",
        context:
          "If the vehicle stalls in flood water, the handbook says to leave it immediately and get to higher ground. Motorists trapped inside their vehicles account for nearly half of all flash flood deaths in the United States.",
        trap: "Judging depth by looking is exactly what the handbook says people get wrong, and many of them drive off the edge of a road that is no longer there.",
        excerptKey: "flooding-never-drive",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VIII, Flooding",
        sourceUrl: hb(73),
      },
      {
        id: "wv_s3_32",
        topic: "signals",
        question:
          "A traffic signal is dark because the power has failed. How should you treat the intersection?",
        choices: [
          "As though every direction had a stop sign",
          "As an uncontrolled intersection with no rules",
          "As though you had a green light if you are on the larger road",
          "Wait for a police officer before proceeding",
        ],
        correctIndex: 0,
        explanation:
          "Treat it as a stop. The handbook's rule is that when signals are not needed or are out of order they may be put into flashing operation, and flashing operation is the same as an intersection flasher - red means stop and yield like a stop sign.",
        context:
          "Where a signal is genuinely dark rather than flashing, the safe reading is the same one: nobody has priority by right, so everybody stops and the ordinary yield-to-the-right rule settles the order.",
        trap: "\"The bigger road wins\" is a habit, not a rule. Nothing in the handbook gives priority by road size when the signal is out.",
        excerptKey: "signals-out-of-order",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter V, Intersection Flashers",
        sourceUrl: hb(50),
      },
      {
        id: "wv_s3_33",
        topic: "safety",
        question:
          "How often does the handbook say to take a break on a long drive, and for how long?",
        choices: [
          "Five minutes every hour",
          "Twenty minutes every four hours",
          "Only when you begin to feel tired",
          "A 10-minute break at least every two hours",
        ],
        correctIndex: 3,
        explanation:
          "Ten minutes at least every two hours, and the handbook says to spend it outside the vehicle - walk around, get a drink.",
        context:
          "Fatigue dulls the mind and slows reactions. If there is another licensed driver in the car, change over as soon as one of you gets tired rather than pushing on.",
        trap: "\"Only when I feel tired\" is the answer fatigue itself produces. By the time you notice, your reaction time has already gone.",
        excerptKey: "fatigue-rest-break",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter VIII, Fatigue",
        sourceUrl: hb(75),
      },
      {
        id: "wv_s3_34",
        topic: "licensing",
        question:
          "You are 18 and have never held a license. You pass the knowledge test and get a regular instruction permit. How long must you hold it before the road skills test?",
        choices: [
          "At least 30 days",
          "No waiting period",
          "At least 90 days",
          "At least six months",
        ],
        correctIndex: 0,
        explanation:
          "At least 30 days if you have never been licensed at Level 2 or its equivalent. The permit itself is valid for six months.",
        context:
          "West Virginia Code 17B-2-6 states the same 30-day minimum, and defines previously licensed as having held at least a level two graduated license or an equal or greater level in another state. If the permit expires you retake both the vision and knowledge tests.",
        trap: "Six months is how long the permit lasts, not how long you must wait. The two numbers sit in the same paragraph.",
        excerptKey: "regular-permit-30-days",
        sourceLabel: "WV Driver's Licensing Handbook - Chapter I, Regular Instruction Permit",
        sourceUrl: hb(19),
      },
      {
        id: "wv_s3_35",
        topic: "rules",
        question:
          "A sign is missing or has been knocked down. Does the rule it carried still apply?",
        choices: [
          "No - a rule that requires signs cannot be enforced if no legible sign was in place, but a rule that does not require signs still applies",
          "Yes, always - a missing sign changes nothing",
          "No - all traffic rules depend on signage",
          "Only if the driver could reasonably have known the rule",
        ],
        correctIndex: 0,
        explanation:
          "West Virginia Code 17C-3-4 splits it. Where the law requires signs, it cannot be enforced against you if no proper, legible sign was in place. Where the section does not require signs, it applies whether or not any sign is up.",
        context:
          "The same section carries the duty that makes the rest of the sign chapter matter: drivers must obey the instructions of any official traffic-control device, unless a traffic or police officer directs otherwise.",
        trap: "This is not a loophole for a limit you already knew. Designated speed limits apply without signs, which is why they are called designated.",
        excerptKey: "code-obey-devices",
        sourceLabel: "W. Va. Code 17C-3-4 - Obedience to traffic-control devices",
        sourceUrl: code("17C-3-4"),
      },
    ],
  },
];
