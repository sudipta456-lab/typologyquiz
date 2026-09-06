import type { DrivingTestSet } from "../types";

// Every fact below was checked against the Oregon Driver Manual, 2026-2027
// edition, form 735-37, published by the Oregon Department of Transportation,
// Driver and Motor Vehicle Services, plus Oregon Revised Statutes chapters 807,
// 811 and 813 for the numbers the manual leaves out.
//
// Oregon's manual is 112 pages and unusually complete: unlike most state books
// it prints the statutory speed defaults, the full no-parking distance list and
// the exact pedestrian-clearance rules. Four gaps still matter, and they are
// filled from the statute rather than guessed:
//
// 1. The manual gives no interstate speed limit at all. It says only "Speed
//    limits will vary on interstate highways." The 65 mph figure is in
//    ORS 811.111.
// 2. The manual never states the provisional license restrictions - the first
//    six months with no unrelated passenger under 20, the second six months
//    capped at three, and the first year with no driving between midnight and
//    5 a.m. Those are ORS 807.122.
// 3. The manual never says what a permit is worth in time (24 months) or that
//    the supervising driver must sit in the seat beside you. ORS 807.280.
// 4. The manual describes the breath test but never prices a refusal. The $650
//    presumptive fine is ORS 813.095 and the one-year suspension ORS 813.420.
//
// One genuine tension is flagged in the research note. The manual asks for 100
// hours of supervised driving, or 50 hours with an ODOT-approved course;
// ORS 807.065 states the 50-hour figure on its own. Every question here is
// written on the combination both sources agree on - 50 hours plus the course,
// or 100 hours without it - so either reading gives the same answer.
//
// Questions are original. Explanations, context and trap notes are written from
// scratch; the deep link is there so the learner reads Oregon DMV's own wording
// on the state's site.
const HB = "https://www.oregon.gov/odot/Forms/DMV/37.pdf";
/** The manual's printed page number to a PDF page anchor - printed 1 is PDF 9. */
const hb = (page: number) => `${HB}#page=${page + 8}`;
const ors = (chapter: string) =>
  `https://www.oregonlegislature.gov/bills_laws/ors/ors${chapter}.html`;

export const oregonSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Oregon Basics",
    difficulty: "starter",
    description:
      "The rules you meet on your first drive in Oregon: what the shapes and colors mean, who goes first, and the handful of numbers DMV's 35-question knowledge test expects you to know cold.",
    questions: [
      {
        id: "or_s1_01",
        topic: "signs",
        question:
          "A red eight-sided sign faces you at an intersection. What does Oregon require?",
        choices: [
          "Slow down and roll through if nothing is coming",
          "Stop only when another vehicle is already in the intersection",
          "Come to a complete stop, then enter only when it is safe",
          "Give way to the wider road and keep moving",
        ],
        correctIndex: 2,
        explanation:
          "The octagon is used for one message and nothing else. Oregon wants the wheels fully stopped, and you stay put until you can enter without cutting anyone off.",
        context:
          "Oregon teaches signs by shape and color first, because the shape is readable in fog, glare, or a language you do not read. Eight sides means stop, a downward triangle means yield, a yellow diamond warns, and orange means road work. Having stopped at a stop sign you also have to stay stopped for anyone crossing on foot, in a marked crosswalk or an unmarked one.",
        trap: "A rolling stop is not a stop. An empty cross street changes nothing about the requirement.",
        excerptKey: "stop-sign-octagon",
        sourceLabel: "Oregon Driver Manual - Signs & Traffic Signals",
        sourceUrl: hb(7),
      },
      {
        id: "or_s1_02",
        topic: "signals",
        question:
          "You are stopped at a steady red light and want to turn right onto a two-way street. What does Oregon allow?",
        choices: [
          "Stop completely, then turn when it is safe if no sign forbids it",
          "Turn without stopping as long as the way is clear",
          "Wait for a green arrow before turning",
          "Turn only where a sign expressly permits a right on red",
        ],
        correctIndex: 0,
        explanation:
          "Right on red is Oregon's default, not a special permission. Two conditions travel with it: you actually stop first, and any No Turn on Red sign overrides the default.",
        context:
          "Oregon carves two movements out of the red-means-stop rule. Turning right onto a two-way road is allowed after a full stop, and turning right or left onto a one-way road is allowed on the same terms as long as you turn in the direction the one-way traffic flows. Having stopped, you still yield to everyone lawfully in the intersection, people on foot included.",
        trap: "Clear enough to go is not the test. If you never stopped, the turn is unlawful even on an empty street at three in the morning.",
        excerptKey: "turns-on-red",
        sourceLabel: "Oregon Driver Manual - Traffic Signals",
        sourceUrl: hb(15),
      },
      {
        id: "or_s1_03",
        topic: "rightOfWay",
        question:
          "You arrive at an intersection with no signs and no signals at the same moment as a car on your right. Who goes first?",
        choices: [
          "You do, because the driver on the left has the shorter path",
          "Whoever is going straight instead of turning",
          "Whoever sounds their horn first",
          "The driver on your right",
        ],
        correctIndex: 3,
        explanation:
          "At an uncontrolled intersection Oregon gives way to the right. The manual also tells you to look left first, since that is where the nearest conflicting traffic comes from.",
        context:
          "An intersection with no control device is not a free-for-all. You yield to any vehicle already in it, and to any vehicle approaching from your right. The manual pairs that with a scanning order: look left, then front, then right, and be ready to stop rather than assuming the other driver knows the rule.",
        trap: "Going straight does not outrank turning here. The right-hand rule decides it, and being first into the intersection settles it before the rule is even needed.",
        excerptKey: "uncontrolled-intersection",
        sourceLabel: "Oregon Driver Manual - Turns & Intersections",
        sourceUrl: hb(42),
      },
      {
        id: "or_s1_04",
        topic: "rules",
        question: "What following distance does the Oregon Driver Manual teach?",
        choices: [
          "1 to 2 seconds",
          "2 to 4 seconds, and 4 or more above 30 mph",
          "Exactly 3 seconds at every speed",
          "One car length for every 10 mph",
        ],
        correctIndex: 1,
        explanation:
          "Oregon gives a range rather than a single figure. Two seconds is the floor, and once you are moving faster than 30 mph the manual wants four seconds or more.",
        context:
          "You measure it by watching the rear of the car ahead pass a fixed object, then counting until you reach the same spot. Anything under two seconds is too close. The manual then lists conditions that push the number up: wet or slippery roads, following a motorcycle or bicycle, and stopping behind someone on a hill, where the car ahead may roll back.",
        trap: "Three seconds is the figure most other states print, and it is the wrong answer here. Oregon's number is a range that starts at two and grows with speed.",
        excerptKey: "following-2-4-seconds",
        sourceLabel: "Oregon Driver Manual - Maintaining a Space Cushion",
        sourceUrl: hb(26),
        commonlyMissed: true,
      },
      {
        id: "or_s1_05",
        topic: "speed",
        question:
          "An Oregon residential street carries no speed limit sign at all. What is the limit?",
        choices: ["15 mph", "25 mph", "35 mph", "45 mph"],
        correctIndex: 1,
        explanation:
          "Oregon sets 25 mph in residential districts whether or not a sign says so. The absence of a sign is not the absence of a limit.",
        context:
          "The manual prints a short ladder of limits that apply unless a different speed is posted: 15 mph in alleys and narrow residential areas, 20 mph in a business district and in a school speed zone, 25 mph in residential districts, in public parks and on ocean shores, and 55 mph on everything else that fits no other description.",
        trap: "A missing sign does not turn the road into a guess. Oregon fills the silence with a number set in law and you are held to it.",
        excerptKey: "statutory-speed-25-55",
        sourceLabel: "Oregon Driver Manual - Speed Regulations",
        sourceUrl: hb(19),
      },
      {
        id: "or_s1_06",
        topic: "signs",
        question: "A downward-pointing red and white triangle faces you. What must you do?",
        choices: [
          "Come to a full stop every time, as at a stop sign",
          "Keep your speed, since the sign is only advisory",
          "Slow down and give way, stopping if that is what it takes",
          "Sound your horn before entering",
        ],
        correctIndex: 2,
        explanation:
          "A yield sign means other traffic goes first. It does not require an automatic stop, but if there is no safe gap then stopping is exactly what yielding demands.",
        context:
          "The triangle is the only three-sided sign in the book, so the shape alone identifies it. Oregon defines yielding plainly: you slow down or stop so another vehicle or pedestrian can continue safely. On the road it often appears as a row of triangles painted across your lane, a yield line, marking the exact point you must be ready to give way.",
        trap: "Yield is not stop, but it is also not carry on regardless. No gap means you wait for one.",
        excerptKey: "yield-sign-triangle",
        sourceLabel: "Oregon Driver Manual - Signs & Traffic Signals",
        sourceUrl: hb(7),
      },
      {
        id: "or_s1_07",
        topic: "sharing",
        question:
          "A school bus ahead of you stops and switches on its flashing red lights. What must you do?",
        choices: [
          "Pass carefully on the left at low speed",
          "Slow to 20 mph and keep going",
          "Stop only if you can see children getting off",
          "Stop before reaching the bus and stay stopped until the red lights go off",
        ],
        correctIndex: 3,
        explanation:
          "Red lights mean everyone stops before reaching the bus, and the stop lasts until the driver turns the lights off. Nothing shorter counts.",
        context:
          "The bus warns you first: flashing amber means it is about to stop, so you prepare. The red lights then hold traffic. The only release is a divided highway where the two roadways are separated by an unpaved median strip or a barrier, in which case only your side of the road stops. Buses that carry workers or serve a place of worship may show the same lights and get the same treatment.",
        trap: "Waiting to see a child is too late. The lights, not the children, are what tells you to stop.",
        excerptKey: "bus-amber-lights",
        sourceLabel: "Oregon Driver Manual - School, Places of Worship or Worker and Public Transit Buses",
        sourceUrl: hb(55),
        commonlyMissed: true,
      },
      {
        id: "or_s1_08",
        topic: "impairment",
        question: "You are 17 and driving in Oregon. How much alcohol may be in your blood?",
        choices: [
          "None at all",
          "Anything under 0.02 percent",
          "Anything under 0.05 percent",
          "Anything under 0.08 percent",
        ],
        correctIndex: 0,
        explanation:
          "Oregon runs a zero tolerance law for drivers under 21. Any measurable amount fails the test, no matter how far it sits below the adult figure.",
        context:
          "The 0.08 percent number that everyone has heard is the level at which an adult driver is presumed impaired. It is a ceiling for people 21 and over, not a license to drink up to it, and an adult can still be arrested below it. Under 21 the number is simply zero, and the consequence lands on a license that is not yet fully earned.",
        trap: "0.08 is the answer people give from memory. It has nothing to do with a 17-year-old, for whom the threshold is any amount at all.",
        excerptKey: "under-21-zero-tolerance",
        sourceLabel: "Oregon Driver Manual - Dangerous Driving Behaviors",
        sourceUrl: hb(83),
        commonlyMissed: true,
      },
      {
        id: "or_s1_09",
        topic: "safety",
        question: "Who has to wear a safety belt in an Oregon vehicle?",
        choices: [
          "The driver only",
          "The driver and anyone in the front seat",
          "Everyone under 18",
          "Every driver and passenger, in every seating position",
        ],
        correctIndex: 3,
        explanation:
          "Oregon makes belt use mandatory for everyone on board, front and back alike. There is no back-seat exemption and no age above which it stops applying.",
        context:
          "The manual goes past the bare requirement and tells you how to wear one: no slack in the lap or shoulder portion, and never the shoulder strap tucked under your arm or slung behind your back. Children ride in an approved seat until they reach 8 years old or 4 feet 9 inches tall and the adult belt fits properly, and infants stay rear-facing until they turn two.",
        trap: "Back seat passengers are covered too. The belt law reaches every seating position that has a belt in it.",
        excerptKey: "safety-belts",
        sourceLabel: "Oregon Driver Manual - Defensive Driving",
        sourceUrl: hb(73),
      },
      {
        id: "or_s1_10",
        topic: "signs",
        question: "What does a yellow diamond-shaped sign tell you?",
        choices: [
          "A rule you must obey, with a fine behind it",
          "A hazard or a change in the road is ahead",
          "A service or facility is nearby",
          "A historic or scenic place is nearby",
        ],
        correctIndex: 1,
        explanation:
          "Yellow is the warning color in Oregon. The sign is not itself the rule, it is notice that something ahead needs a different speed or a different line.",
        context:
          "Color does most of the work in Oregon's sign system. Yellow warns, red prohibits, white rectangles carry regulations you must obey, orange marks work zones, green gives directions and exits, blue points to services, and brown points to parks and historic sites. The manual adds that a warning sign does not relieve you of anything: you are responsible for reading conditions whether they are signed or not.",
        trap: "Yellow is not a suggestion you can ignore, and it is not a posted limit either. It is a warning that the conditions ahead have changed.",
        excerptKey: "warning-signs-yellow",
        sourceLabel: "Oregon Driver Manual - Signs & Traffic Signals",
        sourceUrl: hb(10),
      },
      {
        id: "or_s1_11",
        topic: "signals",
        question: "A steady yellow light appears as you approach an intersection. What does it mean?",
        choices: [
          "Stop before entering, or drive through carefully if you cannot stop safely",
          "Speed up so you clear the intersection before the red",
          "Stop and then proceed, the same as a stop sign",
          "Yield to traffic on your right and continue",
        ],
        correctIndex: 0,
        explanation:
          "Yellow warns that red is coming. The default is to stop before the intersection, and driving through is the exception for when stopping would be unsafe.",
        context:
          "Oregon treats a steady yellow arrow the same way for the movement the arrow points to. A flashing yellow is different again: it means slow down and proceed with caution, and a flashing yellow arrow means you may make that movement after yielding to pedestrians and oncoming traffic, who have a green.",
        trap: "Yellow is not an invitation to accelerate. Speeding up to beat the red is the behavior the rule is written against.",
        excerptKey: "steady-yellow",
        sourceLabel: "Oregon Driver Manual - Traffic Signals",
        sourceUrl: hb(15),
      },
      {
        id: "or_s1_12",
        topic: "licensing",
        question:
          "You are 16 and want an Oregon driver license. How long must you have held your instruction permit?",
        choices: [
          "No minimum, as soon as you pass the drive test",
          "At least 30 days",
          "At least 3 months",
          "At least 6 months",
        ],
        correctIndex: 3,
        explanation:
          "Under 18, Oregon requires six months of permit time before it will issue a license. A permit held in another state counts toward the same six months.",
        context:
          "The six months is one of four requirements that stack for a driver under 18: hold the permit six months, log the supervised driving hours, have a parent or guardian certify you are in school or hold a diploma or GED, and pass the drive test unless DMV waives it. A Class C instruction permit itself is good for 24 months from the day it is issued.",
        trap: "Passing the drive test early does not shorten the wait. The clock on the permit has to run out first.",
        excerptKey: "permit-held-six-months",
        sourceLabel: "Oregon Driver Manual - How to Apply",
        sourceUrl: hb(5),
      },
      {
        id: "or_s1_13",
        topic: "parking",
        question: "How close to a fire hydrant may you park in Oregon?",
        choices: [
          "No closer than 5 feet",
          "No closer than 10 feet",
          "No closer than 20 feet",
          "No closer than 30 feet",
        ],
        correctIndex: 1,
        explanation:
          "Ten feet is Oregon's hydrant figure. It is measured from the hydrant itself, not from the nearest painted line.",
        context:
          "The hydrant number sits in a list of distances worth memorizing together: 10 feet from a hydrant, 15 feet from a fire station driveway on your side and 75 feet on the far side, 20 feet from a crosswalk at an intersection, 50 feet from the nearest rail of a railroad crossing, and 50 feet from a signal or sign your vehicle would hide. These apply whether you are sitting in the car or not.",
        trap: "Staying in the driver's seat does not make it legal. The parking rules apply whether the vehicle is occupied or not.",
        excerptKey: "no-parking-hydrant",
        sourceLabel: "Oregon Driver Manual - Parking & Stopping",
        sourceUrl: hb(70),
      },
      {
        id: "or_s1_14",
        topic: "rules",
        question: "How far before a turn or lane change must you signal in Oregon?",
        choices: [
          "50 feet",
          "At least 100 feet",
          "At least 200 feet",
          "Three seconds, measured by counting",
        ],
        correctIndex: 1,
        explanation:
          "Oregon states the signaling rule in distance, not time: at least 100 feet before the turn or the lane change while you are moving in traffic.",
        context:
          "The manual lists four movements that require a signal: turning, changing lanes, exiting a roundabout, and pulling away from a curb. Pulling out from a curb has its own standard - signal long enough that traffic actually notices you. Hand signals are limited to daylight and to conditions where you can see people and vehicles a thousand feet away.",
        trap: "The three-second habit taught in some driving schools is not the Oregon rule. The book gives a distance.",
        excerptKey: "signal-100-feet",
        sourceLabel: "Oregon Driver Manual - Turn Signals",
        sourceUrl: hb(38),
      },
      {
        id: "or_s1_15",
        topic: "rightOfWay",
        question:
          "A person steps off the curb into a crosswalk that has no painted lines. What must you do?",
        choices: [
          "Continue, because only marked crosswalks carry the rule",
          "Sound your horn to warn them back",
          "Stop and stay stopped while they cross",
          "Slow down and pass behind them",
        ],
        correctIndex: 2,
        explanation:
          "Oregon puts a crosswalk at every intersection whether or not anyone painted it. A pedestrian in one is entitled to have you stop and stay stopped.",
        context:
          "To find an unmarked crosswalk, imagine the sidewalk or shoulder at the corner carried straight across to the other side. It is at least six feet wide and it exists even where there is no sidewalk at all. Crossing starts the moment any part of the person, or their cane, wheelchair or bicycle, moves onto the road with the intent to keep going.",
        trap: "No paint does not mean no crosswalk. The rule turns on the intersection, not on the markings.",
        excerptKey: "unmarked-crosswalk",
        sourceLabel: "Oregon Driver Manual - Pedestrians",
        sourceUrl: hb(47),
        commonlyMissed: true,
      },
      {
        id: "or_s1_16",
        topic: "speed",
        question: "What is the speed limit in an Oregon school speed zone?",
        choices: ["15 mph", "20 mph", "25 mph", "30 mph"],
        correctIndex: 1,
        explanation:
          "Twenty is the number. The zone starts at the SCHOOL SPEED LIMIT 20 sign and runs until an END SCHOOL ZONE sign or another posted limit.",
        context:
          "Two different school signs set when the 20 applies. A flashing sign means it applies right now, because the light only flashes while children are arriving or leaving. A school hours sign applies between 7 a.m. and 5 p.m. on a day school is in session. The manual's advice when you are unsure whether it is a school day is simply to slow to 20.",
        trap: "The zone does not end where the school building ends. It runs to the end sign or to the next posted limit.",
        excerptKey: "school-speed-zone-20",
        sourceLabel: "Oregon Driver Manual - School Zones",
        sourceUrl: hb(49),
      },
      {
        id: "or_s1_17",
        topic: "signs",
        question: "What kind of sign is a white rectangle with black lettering?",
        choices: [
          "A warning about a hazard ahead",
          "A guide sign showing directions",
          "A regulatory sign telling you what the law requires",
          "A temporary work zone sign",
        ],
        correctIndex: 2,
        explanation:
          "White rectangles carry regulations. Speed limits, lane use rules and turn restrictions all take this shape, and they are posted at or near the place the rule bites.",
        context:
          "Oregon splits regulatory signs by color. The red ones prohibit something, like stop, do not enter and a red circle with a slash through the movement it forbids. The white ones tell you what to do. Both are law rather than advice, and you must obey every official sign, signal and marking unless a police officer or road worker is directing traffic instead.",
        trap: "A directing officer outranks the sign. Nothing else does, including a sign that looks obviously out of date.",
        excerptKey: "regulatory-other-white",
        sourceLabel: "Oregon Driver Manual - Signs & Traffic Signals",
        sourceUrl: hb(8),
      },
      {
        id: "or_s1_18",
        topic: "signals",
        question: "You have a steady green circular light and want to turn left. What is required?",
        choices: [
          "Turn immediately, since green gives you the right of way",
          "Wait for a green arrow before turning at all",
          "Yield to pedestrians and to oncoming traffic, then turn when it is safe",
          "Yield only to pedestrians, since oncoming traffic has a red",
        ],
        correctIndex: 2,
        explanation:
          "A circular green permits the movement, it does not clear the path. A left turn on green yields to people on foot and to everything coming the other way.",
        context:
          "Under a steady green all movements are allowed unless a sign forbids one. Left turns yield to pedestrians and oncoming traffic, and right turns yield to pedestrians. A green arrow is the stronger signal: it means the movement it points to is protected and you have the right of way for it.",
        trap: "Green is permission to proceed, not a promise the way is clear. Oncoming traffic under the same green is not waiting for you.",
        excerptKey: "steady-green",
        sourceLabel: "Oregon Driver Manual - Traffic Signals",
        sourceUrl: hb(16),
      },
      {
        id: "or_s1_19",
        topic: "sharing",
        question: "What may you do in a marked bicycle lane in Oregon?",
        choices: [
          "Drive in it whenever no bicycle is present",
          "Cross it to turn or to reach a driveway or alley",
          "Use it to wait for a gap before turning right",
          "Park in it as long as you stay with the vehicle",
        ],
        correctIndex: 1,
        explanation:
          "A bike lane is not a lane for you. You may cross one to complete a turn or to get into a driveway, alley or private road, and that is the whole of it.",
        context:
          "Two related rules trip people up. You may not move into a bike lane to line up for a turn, which is the habit drivers bring from states that require it. And before crossing the lane you must yield to anyone riding in it, or on the sidewalk you are about to cut across. Motorized wheelchairs, scooters and personal mobility devices belong in the same lane and get the same yield.",
        trap: "Empty is not the same as available. The lane stays a bike lane whether or not you can see a bicycle in it.",
        excerptKey: "bike-lane-no-drive",
        sourceLabel: "Oregon Driver Manual - Bicycles",
        sourceUrl: hb(50),
      },
      {
        id: "or_s1_20",
        topic: "safety",
        question: "When must your headlights be on in Oregon?",
        choices: [
          "From sunset to sunrise, and whenever you cannot see 1,000 feet ahead",
          "Only between 10 p.m. and 6 a.m.",
          "Only when it is fully dark",
          "Whenever you are on a highway, at any hour",
        ],
        correctIndex: 0,
        explanation:
          "Oregon sets two triggers. The clock one runs sunset to sunrise, and the conditions one applies any time you cannot see people or vehicles a thousand feet away.",
        context:
          "Two habits go with the rule. Driving on parking lights alone at night or in bad weather is illegal, and a vehicle stopped or parked on a road or shoulder in poor visibility must show parking lights. High beams have their own distances: dim them for oncoming traffic within 500 feet and when following within 350 feet, and any fog or auxiliary lights must go off at the same time.",
        trap: "The clock is only half of it. Heavy rain at two in the afternoon can trigger the requirement just as surely as sunset.",
        excerptKey: "headlights-sunset-sunrise",
        sourceLabel: "Oregon Driver Manual - Hazardous Conditions",
        sourceUrl: hb(76),
      },
      {
        id: "or_s1_21",
        topic: "emergencies",
        question:
          "An ambulance comes up behind you with lights and siren on a two-lane street. What must you do?",
        choices: [
          "Speed up to clear the road ahead of it",
          "Stop where you are, in your lane",
          "Move left so it can pass on the right",
          "Pull as far right as you safely can and stop",
        ],
        correctIndex: 3,
        explanation:
          "Oregon wants you right and stopped, immediately. You stay stopped until the emergency vehicle has gone past or an officer tells you to move.",
        context:
          "The rule applies whichever direction the vehicle approaches from, and it covers fire trucks, police vehicles and ambulances using a light or a siren. One place you must not stop is inside an intersection - clear it first, then pull over. Once it has passed, you have to stay at least 500 feet behind an emergency vehicle that is responding.",
        trap: "Stopping where you sit blocks the lane it needs. Getting right is the point of the rule, and stopping is the second half of it.",
        excerptKey: "emergency-pull-right",
        sourceLabel: "Oregon Driver Manual - Emergency Vehicles",
        sourceUrl: hb(58),
      },
      {
        id: "or_s1_22",
        topic: "rules",
        question:
          "You are on a two-way road with no center line at all. How much of the road do you get?",
        choices: [
          "The whole road until oncoming traffic appears",
          "Half, since you must leave at least half for oncoming traffic",
          "Whatever is left after avoiding potholes",
          "The right third, keeping two-thirds clear",
        ],
        correctIndex: 1,
        explanation:
          "With no line to divide it, Oregon divides the road by rule instead: at least half is left for traffic coming the other way.",
        context:
          "That sits under the wider requirement to drive on the right, which has a short list of exceptions - passing a vehicle going your way, going around an obstruction, a road marked one way, a three-lane road where the center lane is for passing, and being directed by emergency personnel. If you do cross to the left of center for any reason, you yield to oncoming traffic while you are there.",
        trap: "Being there first does not buy you the middle of the road. Half is the other driver's before they arrive.",
        excerptKey: "half-road-no-center-line",
        sourceLabel: "Oregon Driver Manual - Lane Travel",
        sourceUrl: hb(18),
      },
      {
        id: "or_s1_23",
        topic: "parking",
        question: "How close to the curb must you park when you park parallel in Oregon?",
        choices: [
          "Within 12 inches",
          "Within 18 inches",
          "Within 2 feet",
          "Close enough that traffic can pass",
        ],
        correctIndex: 0,
        explanation:
          "Twelve inches is the figure, and you park facing the direction traffic moves in that lane. Where there is no curb, you get as close as you can to the edge of the shoulder.",
        context:
          "Two more rules travel with parking. If the spaces are marked, your wheels have to be inside the markings. And when you leave a parked position you check your mirrors and blind spots and yield to everything already using the road, which makes pulling out a yield rather than a right.",
        trap: "Facing the wrong way is a violation even if the car is neatly against the curb. Direction is part of the rule.",
        excerptKey: "parallel-parking-12-inches",
        sourceLabel: "Oregon Driver Manual - Parking & Stopping",
        sourceUrl: hb(68),
      },
      {
        id: "or_s1_24",
        topic: "signs",
        question: "What do green highway signs give you?",
        choices: [
          "Warnings about hazards ahead",
          "Rules you must obey",
          "Locations of gas, food and lodging",
          "Exit information and directions to roads and cities",
        ],
        correctIndex: 3,
        explanation:
          "Green is Oregon's guide color. These signs handle navigation: which exit, which direction, how far to the next town.",
        context:
          "Green sits alongside two other information colors that the test likes to mix up. Blue signs point to motorist services such as fuel, food and hospitals. Brown signs point to parks, picnic grounds, scenic areas and historic or cultural sites. Route markers are separate again and tell you whether you are on an interstate, a US route or a state highway.",
        trap: "Blue and brown are also information signs, but they are not the direction signs. Green is the one that answers where does this road go.",
        excerptKey: "guide-signs-green",
        sourceLabel: "Oregon Driver Manual - Signs & Traffic Signals",
        sourceUrl: hb(13),
      },
      {
        id: "or_s1_25",
        topic: "impairment",
        question:
          "A passenger opens a bottle of beer, drinks some, screws the cap back on and puts it in the door pocket. Is that legal in Oregon?",
        choices: [
          "Yes, because the cap is back on",
          "Yes, because the driver is not the one drinking",
          "No, a container counts as open once the seal is broken",
          "No, but only if the vehicle is actually moving",
        ],
        correctIndex: 2,
        explanation:
          "Oregon defines open by the seal, not by the lid. Once the seal is broken the container is open for the rest of its life, resealed or not.",
        context:
          "The open container law covers being in a vehicle on any road, which sweeps in passengers and a parked car at the curb, not just the person behind the wheel. The manual's practical instruction is short: any open bottle or container belongs in the trunk.",
        trap: "Recapping is the trap the law was written to close. It changes nothing once the seal has been broken.",
        excerptKey: "open-container",
        sourceLabel: "Oregon Driver Manual - Dangerous Driving Behaviors",
        sourceUrl: hb(83),
      },
      {
        id: "or_s1_26",
        topic: "safety",
        question: "Rain starts and you switch on your wipers. What else does Oregon expect?",
        choices: [
          "Switch on your hazard lights",
          "Switch on your high beams",
          "Switch on your headlights",
          "Nothing, wipers are enough",
        ],
        correctIndex: 2,
        explanation:
          "Wipers on means headlights on. The point is being seen by other drivers, which matters more in rain than what you can see yourself.",
        context:
          "Wet weather changes three things at once. Your visibility drops, so the lights go on. Your grip drops, so the manual tells you to slow down and warns that tires can hydroplane and take your steering and braking with them. And cruise control comes off, because it will keep feeding power to wheels that have lost contact with the road.",
        trap: "High beams are the wrong reflex in rain, fog or smoke. They bounce light straight back at you and make things worse.",
        excerptKey: "rain-wipers-headlights",
        sourceLabel: "Oregon Driver Manual - Hazardous Conditions",
        sourceUrl: hb(77),
      },
      {
        id: "or_s1_27",
        topic: "rightOfWay",
        question:
          "Your road ends at a T intersection with no signs or signals. Who has the right of way?",
        choices: [
          "Traffic on the through road, and you yield to it",
          "You do, because you arrived first",
          "Whoever is turning right",
          "Neither, so the driver on the right goes",
        ],
        correctIndex: 0,
        explanation:
          "A road that ends yields to the road that continues. Oregon states it flatly for an unsigned T intersection: the through road goes first.",
        context:
          "It is worth pairing with a habit the manual repeats: a defensive driver never assumes a stop sign or a signal will stop the other car. Even where you clearly have right of way, you look before committing, and you do not enter an intersection at all unless there is room for your vehicle on the far side.",
        trap: "Arriving first is the four-way stop rule, not the T intersection rule. Here the shape of the junction decides it.",
        excerptKey: "t-intersection-yield",
        sourceLabel: "Oregon Driver Manual - Turns & Intersections",
        sourceUrl: hb(42),
      },
      {
        id: "or_s1_28",
        topic: "speed",
        question: "What is Oregon's basic rule?",
        choices: [
          "The posted limit is a target you should drive at",
          "You may exceed the limit briefly while passing",
          "You must drive at a speed that is reasonable and cautious for the conditions",
          "Speed limits do not apply on roads without a center line",
        ],
        correctIndex: 2,
        explanation:
          "The basic rule is the rule behind all the numbers. It applies on every road at every hour, and it asks whether your speed suits the conditions in front of you right now.",
        context:
          "It cuts one way only. The basic rule never lets you drive over the posted limit, so ideal conditions do not buy you extra miles per hour. It does let a police officer cite you for driving too fast for conditions when you were under the limit the whole time - the sign assumes good weather and a clear road.",
        trap: "Passing is not an exemption. Oregon says plainly that exceeding the speed limit is against the law at any time, including while passing.",
        excerptKey: "basic-rule",
        sourceLabel: "Oregon Driver Manual - Speed Regulations",
        sourceUrl: hb(20),
        commonlyMissed: true,
      },
      {
        id: "or_s1_29",
        topic: "signals",
        question: "The traffic signal ahead is flashing red. How do you treat it?",
        choices: [
          "As a yield sign",
          "As a stop sign",
          "As a green light for the busier road",
          "As a signal that is out of service and can be ignored",
        ],
        correctIndex: 1,
        explanation:
          "A flashing red is a stop sign. You stop, then go when it is safe and when everyone with priority has gone.",
        context:
          "A completely dark signal, such as during a power cut, is handled differently again and more strictly: you treat the intersection as though every approach has a stop sign. A flashing yellow means something milder, slow down and proceed with caution, and it is the one people confuse with the flashing red.",
        trap: "Flashing red is not a yield. It requires a full stop before you go, exactly as an octagonal sign would.",
        excerptKey: "flashing-red-signal",
        sourceLabel: "Oregon Driver Manual - Traffic Signals",
        sourceUrl: hb(15),
      },
      {
        id: "or_s1_30",
        topic: "licensing",
        question: "How many questions must you get right to pass Oregon's knowledge test?",
        choices: [
          "28 of 35",
          "25 of 35",
          "30 of 40",
          "40 of 50",
        ],
        correctIndex: 0,
        explanation:
          "The test runs 35 multiple choice questions and 28 correct is a pass, which works out at 80 percent. Seven wrong is the most you can afford.",
        context:
          "The questions cover road signs, traffic laws and the rest of what a driver needs to know. You can sit it at a DMV office on a touch screen, in one of eight languages, or online at home in English or Spanish with a webcam watching. Fail it in an office and you may test again the same day if there is capacity.",
        trap: "Eighty percent sounds gentle until you count it in questions. Seven wrong answers is the whole margin.",
        excerptKey: "knowledge-test-35",
        sourceLabel: "Oregon Driver Manual - How to Apply",
        sourceUrl: hb(2),
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Core Rules of the Road",
    difficulty: "easy",
    description:
      "Lane discipline, turns, signals and the everyday right-of-way decisions that make up most of the Oregon knowledge test: the rules you use on every drive rather than once a year.",
    questions: [
      {
        id: "or_s2_01",
        topic: "rules",
        question:
          "You are turning right from a two-lane one-way street into a road with two lanes going your way. Which lane should you finish in?",
        choices: [
          "Whichever lane you need for your next move",
          "The lane nearest the direction you were traveling, which is the right lane",
          "The left lane, so you do not block traffic behind you",
          "Either, as long as you signal",
        ],
        correctIndex: 1,
        explanation:
          "Oregon's general rule is nearest lane to nearest lane. You start in the lane closest to the way you are going and you end in the lane closest to the way you now want to go.",
        context:
          "The rule applies at driveways and alleys as much as at intersections, and it comes with a warning against swinging wide or changing lanes mid-turn. If you need a different lane, take it after the turn is complete and after you have signaled for it. And if you are in the wrong lane to turn at all, the manual would rather you drove to the next intersection than made a last-second correction.",
        trap: "Crossing into the far lane during the turn is the habit this rule exists to stop, and it is the one that produces the collision with the driver turning from the other direction.",
        excerptKey: "turning-general-rule",
        sourceLabel: "Oregon Driver Manual - Turns",
        sourceUrl: hb(41),
        commonlyMissed: true,
      },
      {
        id: "or_s2_02",
        topic: "signals",
        question: "What does a steady green arrow mean?",
        choices: [
          "You may go if oncoming traffic yields to you",
          "Prepare to stop, the arrow is about to turn yellow",
          "Yield to pedestrians first, then take the movement",
          "You have the right of way for the movement the arrow shows",
        ],
        correctIndex: 3,
        explanation:
          "A green arrow is a protected movement. Everything that would conflict with it is being held by a red, so the arrow gives you the right of way rather than mere permission.",
        context:
          "Compare the three signals that let you turn. A green arrow protects the turn. A circular green permits it but you yield to oncoming traffic and pedestrians. A flashing yellow arrow permits it too, and it exists to tell you that oncoming traffic has a steady green, so the yielding is entirely on you.",
        trap: "The flashing yellow arrow looks like a weaker version of the same thing, and it is the opposite: it is the one where nothing is protecting you.",
        excerptKey: "green-arrow",
        sourceLabel: "Oregon Driver Manual - Traffic Signals",
        sourceUrl: hb(16),
      },
      {
        id: "or_s2_03",
        topic: "parking",
        question: "How close to a crosswalk at an intersection may you park in Oregon?",
        choices: [
          "No closer than 20 feet",
          "No closer than 10 feet",
          "Right up to the line, if the crosswalk is unmarked",
          "No closer than 50 feet",
        ],
        correctIndex: 0,
        explanation:
          "Twenty feet, and it covers unmarked crosswalks as well as painted ones. The distance exists so a driver can see someone stepping off the curb.",
        context:
          "Parking is also flatly banned in a traffic lane, in an intersection, on the road side of another parked vehicle, on a sidewalk, in a bike lane or path, and on railroad or light rail tracks. Blocking a crosswalk with any part of your vehicle is its own violation, because it forces people to walk around you into traffic.",
        trap: "An unmarked crosswalk still counts. There is one at every intersection whether it has paint or not.",
        excerptKey: "no-parking-crosswalk",
        sourceLabel: "Oregon Driver Manual - Parking & Stopping",
        sourceUrl: hb(71),
      },
      {
        id: "or_s2_04",
        topic: "sharing",
        question: "How much room must you leave when passing a motorcycle in your lane?",
        choices: [
          "Three feet is enough",
          "Half a lane, since a motorcycle is narrow",
          "A full lane, because sharing a lane with a motorcycle is illegal",
          "Whatever the rider waves you through with",
        ],
        correctIndex: 2,
        explanation:
          "Oregon gives a motorcycle the whole lane. Sharing one is against the law, so passing means changing lanes exactly as you would for a car.",
        context:
          "Two more habits go with riders. Follow further back than you would a car, because a rider can stop or lose control in ways a driver cannot. And do not trust a motorcycle's turn signal on its own, since many do not cancel automatically and the rider may simply have forgotten it: wait until you see them actually slowing to turn.",
        trap: "The bike fitting alongside you is not permission. The lane belongs to the rider for the whole of its width.",
        excerptKey: "motorcycle-full-lane",
        sourceLabel: "Oregon Driver Manual - Motorcycles and Mopeds",
        sourceUrl: hb(52),
      },
      {
        id: "or_s2_05",
        topic: "rules",
        question:
          "A center lane is marked with a solid yellow line outside and a broken yellow line inside, on both sides. What is it for?",
        choices: [
          "Passing slower traffic in either direction",
          "Overtaking on the left when the through lanes are full",
          "Driving in when the right lane is blocked",
          "Left turns only, entered just before you turn",
        ],
        correctIndex: 3,
        explanation:
          "That is a two-way left turn lane. Drivers from both directions use it to wait for a gap, and traveling along it is illegal.",
        context:
          "Where one of these lanes exists, you may not make a left turn from any other lane. You enter shortly before the turn, wait there for oncoming traffic to clear and complete the turn. A painted median is a different marking that people confuse with it: you may turn left across a painted median, but you may not use it as a turn lane, and driving in a median marked with double yellow lines is illegal.",
        trap: "Using it as a running lane to get past a queue is the common misuse, and it produces head-on conflicts with drivers waiting to turn from the other direction.",
        excerptKey: "two-way-left-turn-lane",
        sourceLabel: "Oregon Driver Manual - Pavement Markings",
        sourceUrl: hb(23),
      },
      {
        id: "or_s2_06",
        topic: "signs",
        question:
          "A white rectangular sign on the shoulder reads DO NOT PASS. What does it mean?",
        choices: [
          "Passing is prohibited from here on until the restriction ends",
          "Passing is discouraged but legal if the way is clear",
          "Trucks may not pass, other vehicles may",
          "It applies only when oncoming traffic is present",
        ],
        correctIndex: 0,
        explanation:
          "It is a regulatory sign, not advice. Where it stands, passing is prohibited, and the pavement markings usually say the same thing.",
        context:
          "Oregon also lists places where passing is barred with or without a sign: approaching or inside an intersection or railroad crossing, where a vehicle ahead has stopped at a crosswalk for a pedestrian, and anywhere your view of oncoming traffic is limited. You may cross a center line inside a no-passing zone for only two reasons - the right side of the road is blocked, or you are turning left.",
        trap: "A clear road ahead does not suspend the sign. The restriction is about what you cannot see, not about what you can.",
        excerptKey: "do-not-pass-sign",
        sourceLabel: "Oregon Driver Manual - Signs & Traffic Signals",
        sourceUrl: hb(9),
      },
      {
        id: "or_s2_07",
        topic: "rightOfWay",
        question:
          "You are waiting to turn left at a green light with oncoming traffic approaching. What does Oregon law require?",
        choices: [
          "Turn as soon as the first oncoming car slows down",
          "Yield to oncoming traffic until it is safe to turn",
          "Take the turn before the light changes, since you were there first",
          "Wait for the oncoming traffic to be stopped by a red",
        ],
        correctIndex: 1,
        explanation:
          "The left turn yields, and it keeps yielding until turning is genuinely safe. Being in the intersection first does not transfer the right of way to you.",
        context:
          "The manual's approach for a left turn on a two-way road is the lane just right of the center line, and the look sequence is left, front, right, then left again before you commit. Where a left turn lane is provided you must use it. At intersections with two-way stop signs facing each other, the driver turning left yields to traffic going straight.",
        trap: "A slowing car is not a yielding car. It may be preparing for its own turn, and its lane is not the only one you have to cross.",
        excerptKey: "left-turn-yield-oncoming",
        sourceLabel: "Oregon Driver Manual - Turns",
        sourceUrl: hb(39),
      },
      {
        id: "or_s2_08",
        topic: "safety",
        question: "Before you change lanes, what does the Oregon manual tell you to do?",
        choices: [
          "Check the mirror on that side and signal",
          "Signal and move over gradually so others can react",
          "Signal, check mirrors, and glance over the shoulder on the side you are moving toward",
          "Wait until the lane is empty for at least ten car lengths",
        ],
        correctIndex: 2,
        explanation:
          "Mirrors alone leave a gap you cannot see. Oregon adds the shoulder glance, left if you are moving left and right if you are moving right.",
        context:
          "Your blind spot is the area around the car you cannot see from the driver's seat even with mirrors, and other vehicles have one too, which is why the manual also tells you to avoid sitting in someone else's. On top of that it wants lane changes kept to a minimum: change only when you can do it safely, and avoid frequent changes.",
        trap: "A well-adjusted mirror still misses a car alongside you. The head turn is the part that finds it.",
        excerptKey: "changing-lanes-shoulder",
        sourceLabel: "Oregon Driver Manual - Maintaining a Space Cushion",
        sourceUrl: hb(30),
      },
      {
        id: "or_s2_09",
        topic: "speed",
        question:
          "You are driving well below the normal speed of traffic on a road with two lanes going your way. Where should you be?",
        choices: [
          "In the right lane, or as close to the right edge as you can get",
          "In the left lane, where you are out of the way of merging traffic",
          "Anywhere, provided you are at or under the limit",
          "In the center lane, if there is one",
        ],
        correctIndex: 0,
        explanation:
          "Driving slower than surrounding traffic puts you in the right lane. The one exception is when you are getting ready to turn left.",
        context:
          "Oregon pairs that with a duty to watch what is happening behind you. If traffic is stacking up because you are going slower than the designated speed, you pull off at the first safe place and let it past. The same instruction is repeated for anyone towing.",
        trap: "Being under the limit is not the question. The rule is about your speed relative to the traffic around you.",
        excerptKey: "slow-drivers-right",
        sourceLabel: "Oregon Driver Manual - Speed Regulations",
        sourceUrl: hb(21),
      },
      {
        id: "or_s2_10",
        topic: "emergencies",
        question:
          "You have a minor collision with no injuries and both cars still drive. What does Oregon want you to do first?",
        choices: [
          "Leave the vehicles exactly where they stopped until police arrive",
          "Take photographs before anything is moved",
          "Follow the other driver to a police station",
          "Stop, then move the vehicles out of the travel lanes",
        ],
        correctIndex: 3,
        explanation:
          "You must stop, but Oregon does not want the wreck left in the roadway. If nobody is hurt and the cars can move, clear the travel lanes and swap information somewhere safer.",
        context:
          "Once you are clear, you exchange names, addresses, driver license numbers, plate numbers and insurance details with the other driver, any passengers and any injured pedestrian. If somebody is killed or unconscious, you stay at the scene until police arrive, and you give reasonable assistance to anyone injured without moving them carelessly.",
        trap: "Leaving cars in a live lane to preserve the scene creates the second collision. Oregon prioritizes clearing the road.",
        excerptKey: "collision-stop",
        sourceLabel: "Oregon Driver Manual - Traffic Collisions",
        sourceUrl: hb(93),
      },
      {
        id: "or_s2_11",
        topic: "rules",
        question: "On a two-lane road, which side do you pass on?",
        choices: [
          "Whichever side has more room",
          "The right, so you stay out of oncoming traffic",
          "The left, and only the left",
          "Either, as long as you signal first",
        ],
        correctIndex: 2,
        explanation:
          "On a two-lane road the pass goes to the left. It has to begin after a passing zone starts and be finished before a no-passing zone begins.",
        context:
          "Before you pull out you check your mirrors and glance over your shoulder into the blind spot on that side, signal, build speed and get it over with. You come back in once you can see the vehicle you passed in your rearview mirror, signaling again. And you do it all without exceeding the speed limit, which Oregon states as flatly for passing as for anything else.",
        trap: "Being able to see far enough is not the whole test. If you cannot complete the pass before the no-passing zone starts, you do not start it.",
        excerptKey: "passing-left-only",
        sourceLabel: "Oregon Driver Manual - Passing",
        sourceUrl: hb(31),
      },
      {
        id: "or_s2_12",
        topic: "signs",
        question: "You reach a railroad crossbuck sign at a crossing. What does it tell you?",
        choices: [
          "Trains no longer use these tracks",
          "Obey the yield or stop sign that comes with it",
          "Stop every time, whether or not a train is coming",
          "Cross only when a flagger waves you through",
        ],
        correctIndex: 1,
        explanation:
          "A crossbuck never stands alone in Oregon. The assembly includes either a yield sign or a stop sign, and that sign is the instruction you follow.",
        context:
          "If there is more than one track a small sign beneath the crossbuck says how many, and that matters because one train can hide another coming the other way. Where you must stop, do it at the stop line, or at least 15 feet from the nearest rail if there is no line. And never enter a crossing you are not certain you can clear completely.",
        trap: "The crossbuck is not the whole instruction. Look for the sign under it before deciding whether you have to stop.",
        excerptKey: "railroad-crossbuck",
        sourceLabel: "Oregon Driver Manual - Railroad Crossings, Light Rail & Street Cars",
        sourceUrl: hb(63),
      },
      {
        id: "or_s2_13",
        topic: "impairment",
        question: "What does Oregon's implied consent law mean?",
        choices: [
          "Police may search your vehicle at any traffic stop",
          "You have already agreed to a breath, blood or urine test when an officer asks for one",
          "You consent to a test only after you are arrested",
          "A test is optional and refusing it carries no penalty",
        ],
        correctIndex: 1,
        explanation:
          "By driving, you have already given consent to a chemical test. Refusing one is a separate matter from the drink-driving charge and carries its own penalty.",
        context:
          "Oregon's DUII law is not limited to alcohol - it reaches any substance that impairs your mental or physical ability to drive, including prescription and over the counter medication. Someone 21 or over fails the test at 0.08 percent, someone under 21 fails at any amount, and an arrest is possible below 0.08 when the driving shows the impairment.",
        trap: "Refusing is not a way out. It leaves you facing a fine and a suspension of its own, on top of whatever the driving itself brings.",
        excerptKey: "implied-consent",
        sourceLabel: "Oregon Driver Manual - Dangerous Driving Behaviors",
        sourceUrl: hb(83),
      },
      {
        id: "or_s2_14",
        topic: "sharing",
        question:
          "You are following a large truck and cannot see the driver's face in either of the truck's side mirrors. What does that tell you?",
        choices: [
          "The truck's mirrors are badly adjusted",
          "You are far enough back to be safe",
          "You should sound your horn before passing",
          "The driver cannot see you",
        ],
        correctIndex: 3,
        explanation:
          "The mirror test works both ways. If the truck's mirror does not show you the driver, the driver's mirror does not show them you.",
        context:
          "Large vehicles have bigger blind spots on both sides than cars do, and a deep one directly behind where the driver cannot see you at all. They also need about three times the distance to stop, so following closely both hides you and removes your own escape room. Before pulling back in front of one, wait until you can see its entire front end in your rearview mirror.",
        trap: "Sitting alongside a truck to wait out a slow pass is the most dangerous place on the road. Complete the pass or drop back.",
        excerptKey: "large-vehicle-side-blind",
        sourceLabel: "Oregon Driver Manual - Large Vehicles",
        sourceUrl: hb(53),
      },
      {
        id: "or_s2_15",
        topic: "parking",
        question: "You park facing uphill against a curb. Which way do the front wheels go?",
        choices: [
          "Straight ahead, with the parking brake on",
          "Toward the travel lane, so the wheels catch the curb if the car rolls",
          "Toward the curb, so the car rolls into it",
          "It does not matter on a curbed street",
        ],
        correctIndex: 1,
        explanation:
          "Uphill against a curb, the wheels point away from the curb toward the travel lane. If the brake lets go, the car rolls back a few inches and the front tire jams against the curb.",
        context:
          "There are three cases and they are easy to mix up. Uphill against a curb, wheels toward the travel lane. Downhill against a curb, wheels toward the curb. No curb at all, either direction, wheels toward the edge of the road. All three come after the same first step: set the parking brake and leave the car in park, or in gear if it is a manual.",
        trap: "Turning the wheels toward the curb is right downhill and wrong uphill. The direction depends on which way gravity will take the car.",
        excerptKey: "parking-uphill",
        sourceLabel: "Oregon Driver Manual - Parking & Stopping",
        sourceUrl: hb(69),
      },
      {
        id: "or_s2_16",
        topic: "signals",
        question: "A signal ahead of you is flashing yellow. What does it mean?",
        choices: [
          "Stop, then proceed when it is clear",
          "The signal has failed and you should treat it as a four-way stop",
          "Slow down and proceed with caution",
          "Yield to traffic on the cross street before entering",
        ],
        correctIndex: 2,
        explanation:
          "A flashing yellow asks for caution, not a stop. You slow, look, and carry on through the intersection.",
        context:
          "Oregon uses flashing signals both deliberately, on quiet approaches, and when a signal has gone out of order, and either way you obey the flash as it stands. The two to keep apart are these: flashing yellow means slow and proceed, flashing red means stop as at a stop sign, and a signal showing nothing at all means treat the intersection as an all-way stop.",
        trap: "Flashing yellow does not mean the signal is broken. Even when it is, you obey the flash rather than inventing your own rule.",
        excerptKey: "flashing-yellow-signal",
        sourceLabel: "Oregon Driver Manual - Traffic Signals",
        sourceUrl: hb(16),
      },
      {
        id: "or_s2_17",
        topic: "safety",
        question: "You drive into thick fog. Which lights should you use?",
        choices: [
          "High beams, for maximum light",
          "Hazard lights, so others can see you",
          "Parking lights only",
          "Low beams",
        ],
        correctIndex: 3,
        explanation:
          "Low beams. High beams reflect off the water in the air and throw glare back into your own eyes, which makes seeing ahead harder rather than easier.",
        context:
          "The same answer applies in dust, smoke and any other low-visibility condition. Where you are required to dim your headlights, auxiliary lights such as fog lights must go off as well, because they make it harder for oncoming drivers to see. Driving at night or in bad weather on parking lights alone is illegal.",
        trap: "More light is the instinct and the wrong answer. In fog the light comes straight back at you.",
        excerptKey: "fog-low-beam",
        sourceLabel: "Oregon Driver Manual - Hazardous Conditions",
        sourceUrl: hb(77),
      },
      {
        id: "or_s2_18",
        topic: "rules",
        question:
          "The center line on your side of the road is broken yellow. What does that allow?",
        choices: [
          "Passing, when it is safe to do so",
          "Nothing in particular, it is decorative",
          "Passing only if the other side is also broken",
          "Driving in the oncoming lane whenever you like",
        ],
        correctIndex: 0,
        explanation:
          "A broken yellow line on your side means you may pass. A solid yellow line on your side means you may not, whatever the line on the far side is doing.",
        context:
          "Yellow separates traffic moving in opposite directions and also marks the left edge of one-way roads and ramps. A double solid yellow bars passing for both directions, though you may still turn left across it after oncoming traffic clears. Yellow diagonal stripes inside a painted median mark places you may not drive or turn across at all.",
        trap: "You read the line on your own side and no other. The line on the far side governs the driver over there.",
        excerptKey: "double-center-line",
        sourceLabel: "Oregon Driver Manual - Pavement Markings",
        sourceUrl: hb(22),
      },
      {
        id: "or_s2_19",
        topic: "rightOfWay",
        question:
          "You are driving out of a parking lot and the exit crosses a sidewalk. What must you do?",
        choices: [
          "Keep rolling slowly and let people walk around you",
          "Sound the horn before crossing",
          "Stop before the sidewalk and yield to people walking and riding",
          "Yield only if a pedestrian is already on the sidewalk in front of you",
        ],
        correctIndex: 2,
        explanation:
          "Crossing a sidewalk means stopping before you reach it. You then yield to anyone walking or riding a bicycle along it.",
        context:
          "The same applies coming out of an alley or driveway that is not controlled by a sign or signal - stop first, then yield to approaching vehicles as well as to people on foot. Oregon also requires you to yield to a person riding a bicycle in a bike lane or on a sidewalk before you turn across their path.",
        trap: "Edging out slowly is not stopping. The stop comes before the sidewalk, not at the road edge past it.",
        excerptKey: "sidewalk-stop",
        sourceLabel: "Oregon Driver Manual - Pedestrians",
        sourceUrl: hb(47),
      },
      {
        id: "or_s2_20",
        topic: "speed",
        question:
          "A work zone speed limit sign is posted but you cannot see anyone working. What speed applies?",
        choices: [
          "The normal limit for the road",
          "The posted work zone limit, at all times",
          "Ten under the normal limit",
          "Whatever is safe, since the zone is empty",
        ],
        correctIndex: 1,
        explanation:
          "The temporary limit applies whether or not workers are visible, and it keeps applying until an end sign or another posted limit replaces it.",
        context:
          "Work zones are marked with orange devices and carry doubled traffic fines. Inside one you are expected to yield to workers, to watch for construction vehicles entering the road, and not to follow them. An automated flagger device is read like a signal: stop when the red light is on and the arm is down, and go when the yellow light flashes and the arm is up.",
        trap: "An empty-looking work zone still has equipment, changed lanes and doubled fines. Absence of workers does not lift the limit.",
        excerptKey: "work-zone-speed",
        sourceLabel: "Oregon Driver Manual - Work Zones",
        sourceUrl: hb(59),
        commonlyMissed: true,
      },
      {
        id: "or_s2_21",
        topic: "signs",
        question: "What does an orange traffic control device mean?",
        choices: [
          "You are entering a work zone",
          "A school zone begins here",
          "A detour for trucks only",
          "The road surface changes ahead",
        ],
        correctIndex: 0,
        explanation:
          "Orange is Oregon's work zone color. Cones, barrels, signs and vests in orange all say the same thing: people are working on this road.",
        context:
          "Work zone colors are worth separating from the school zone signs, which are yellow and five-sided at the start of the zone. Orange means changed conditions, workers and equipment close to traffic, and doubled fines. Yellow five-sided means children, and a school speed sign brings its own 20 mph limit with its own start and end.",
        trap: "Orange and yellow both mean caution but they mean different things and carry different penalties. Orange is the one that doubles the fine.",
        excerptKey: "work-zone-orange",
        sourceLabel: "Oregon Driver Manual - Work Zones",
        sourceUrl: hb(59),
      },
      {
        id: "or_s2_22",
        topic: "rules",
        question:
          "You reach a stop sign at an intersection that has a stop line and a marked crosswalk. Where do you stop?",
        choices: [
          "Level with the sign itself",
          "Far enough forward to see across the intersection",
          "Before the stop line",
          "Before the crosswalk, past the stop line",
        ],
        correctIndex: 2,
        explanation:
          "Before the stop line, which is the painted line's whole purpose. Only if there is no line and no crosswalk do you stop at the unmarked crossing area instead.",
        context:
          "The order runs stop line, then crosswalk, then the unmarked crossing area before the intersection. The same order applies at a steady red signal and at a flashing red. Once stopped you may creep forward for a view if you genuinely need one, but the required stop happens at the line first.",
        trap: "Stopping level with the sign is a habit from parking lots. The line is the legal stopping point when there is one.",
        excerptKey: "stop-position-intersection",
        sourceLabel: "Oregon Driver Manual - Turns & Intersections",
        sourceUrl: hb(42),
      },
      {
        id: "or_s2_23",
        topic: "sharing",
        question:
          "A streetcar stops in the street ahead of you to let passengers off. What must you do?",
        choices: [
          "Pass on the left at walking pace",
          "Sound your horn and continue",
          "Pull alongside so you are ready to go when it moves",
          "Stay behind it until it moves or the passengers are safely away",
        ],
        correctIndex: 3,
        explanation:
          "You wait behind. Passengers step straight into the road when a streetcar stops, so the space beside it is not yours until they are clear.",
        context:
          "Oregon's rule of thumb around streetcars and trains is to let them go first and not to pass unless it is genuinely safe. They cannot stop quickly, so sudden braking or unpredictable moves in front of them are dangerous, and you must never turn across one from an adjacent lane traveling the same way, even when it is standing still.",
        trap: "Pulling alongside puts you exactly where the passengers are going. The wait is behind the vehicle, not next to it.",
        excerptKey: "streetcar-stopped",
        sourceLabel: "Oregon Driver Manual - Railroad Crossings, Light Rail & Street Cars",
        sourceUrl: hb(65),
      },
      {
        id: "or_s2_24",
        topic: "licensing",
        question:
          "You are 16 and did not take a driver education course. How many hours of supervised driving does Oregon want?",
        choices: [
          "40 hours",
          "50 hours",
          "75 hours",
          "100 hours",
        ],
        correctIndex: 3,
        explanation:
          "Without an approved course it is 100 hours. Take an ODOT-approved traffic safety education course and the requirement drops to 50, with proof of completion sent to DMV.",
        context:
          "The hours only count when the supervising driver is at least 21 and has held valid driving privileges for at least three years, and on a permit that person has to be in the seat beside you. Completing an ODOT-approved course within the past two years can also get the drive test waived altogether.",
        trap: "Fifty is the number people remember because it is the one on the forms, and it only applies with the course attached.",
        excerptKey: "supervised-hours",
        sourceLabel: "Oregon Driver Manual - How to Apply",
        sourceUrl: hb(90),
        commonlyMissed: true,
      },
      {
        id: "or_s2_25",
        topic: "safety",
        question: "Until when must a child ride in an approved child safety seat in Oregon?",
        choices: [
          "Until age 6",
          "Until age 8 or 4 feet 9 inches tall, with the adult belt fitting properly",
          "Until age 10 regardless of height",
          "Until they can reach the floor with their feet",
        ],
        correctIndex: 1,
        explanation:
          "Oregon uses two thresholds together: eight years of age or 4 feet 9 inches in height, and the adult lap and shoulder belt has to actually fit before the seat comes out.",
        context:
          "Below that, infants ride rear-facing until they are two years old. The requirement sits inside the wider belt rule, which covers every driver and passenger in every seating position, and the manual's fitting advice applies to adults too: no slack, and never the shoulder strap under an arm or behind the back.",
        trap: "Age alone does not settle it. A small eight-year-old whom the adult belt does not fit properly still needs the seat.",
        excerptKey: "child-seats",
        sourceLabel: "Oregon Driver Manual - Defensive Driving",
        sourceUrl: hb(74),
      },
      {
        id: "or_s2_26",
        topic: "signals",
        question:
          "A power cut has left the signals at a busy intersection completely dark. What do you do?",
        choices: [
          "Treat the intersection as though every approach has a stop sign",
          "Yield to the larger road and continue",
          "Proceed with caution without stopping",
          "Wait for a police officer to arrive",
        ],
        correctIndex: 0,
        explanation:
          "A dark signal becomes an all-way stop. Every approach stops, and normal right-of-way rules then sort out the order.",
        context:
          "A flashing red gets the same treatment for the approach that sees it. The pattern to hold on to is that when the signal stops telling you anything, Oregon substitutes the strictest sensible rule rather than the loosest, so the default is stop rather than proceed.",
        trap: "Treating a dark signal like a yield is the tempting version, and it is exactly the thing the rule replaces with a full stop.",
        excerptKey: "dark-signal",
        sourceLabel: "Oregon Driver Manual - Traffic Signals",
        sourceUrl: hb(15),
      },
      {
        id: "or_s2_27",
        topic: "parking",
        question:
          "You need to run into a shop for two minutes and the only free space is marked for disabled parking. What does Oregon say?",
        choices: [
          "It is allowed for under five minutes",
          "It is allowed if you leave your hazard lights on",
          "It is illegal without a valid permit, and the fine starts at 165 dollars",
          "It is illegal but carries only a warning for a first offense",
        ],
        correctIndex: 2,
        explanation:
          "Without a valid Disabled Person Parking Permit it is illegal, full stop. Fines begin at 165 dollars and reach 1,000, and the manual specifically closes off the just a few minutes excuse.",
        context:
          "The parking rules apply whether or not you are in the vehicle, so sitting in the driver's seat with the engine running does not help. Beside the disabled spaces, the flat bans include a traffic lane, an intersection, the road side of a parked vehicle, a sidewalk or bike lane, and railroad or light rail tracks.",
        trap: "Staying in the car or leaving hazard lights on changes nothing. Neither is a defense anywhere in the parking rules.",
        excerptKey: "disabled-parking-fine",
        sourceLabel: "Oregon Driver Manual - Parking & Stopping",
        sourceUrl: hb(70),
      },
      {
        id: "or_s2_28",
        topic: "rules",
        question: "Which of these does Oregon require you to signal?",
        choices: [
          "Only turns at intersections",
          "Turning, changing lanes, exiting a roundabout, and pulling away from a curb",
          "Turns and lane changes, but not leaving a parking space",
          "Any movement where another driver is within 100 feet",
        ],
        correctIndex: 1,
        explanation:
          "Four movements are named, and the roundabout exit and the pull-away from a curb are the two people forget.",
        context:
          "The distance is at least 100 feet before a turn or lane change when you are moving in traffic. From a curb, you signal long enough for traffic to notice you are coming. Hand signals are allowed only in daylight and only where you can see people and vehicles 1,000 feet away, and never from a wide or long vehicle.",
        trap: "Signalling only when someone is watching misses the point. You have no way of knowing who has just come around the corner behind you.",
        excerptKey: "signal-required-moves",
        sourceLabel: "Oregon Driver Manual - Turn Signals",
        sourceUrl: hb(38),
      },
      {
        id: "or_s2_29",
        topic: "emergencies",
        question:
          "You back into an unoccupied parked car in a lot and cannot find the owner. What does Oregon require?",
        choices: [
          "Nothing, since the damage is minor and the owner is absent",
          "Report it to your own insurer only",
          "Wait one hour and then leave",
          "Leave a note with your name, address and a description of what happened",
        ],
        correctIndex: 3,
        explanation:
          "You try to find the owner first, and if you cannot, you leave a note with your name, your address and a short account of what happened.",
        context:
          "Separately, a collision has to be reported to DMV within 72 hours on Form 735-32 when damage to the vehicle you were driving exceeds 2,500 dollars, or when anyone is injured or killed. A police report does not satisfy that requirement, and the owner of a vehicle must file if the driver does not.",
        trap: "A police attending the scene does not discharge your DMV report. The two are separate filings.",
        excerptKey: "unattended-vehicle-note",
        sourceLabel: "Oregon Driver Manual - Traffic Collisions",
        sourceUrl: hb(94),
      },
      {
        id: "or_s2_30",
        topic: "signs",
        question: "A sign shows a red circle with a slash over a symbol. What does it mean?",
        choices: [
          "The movement shown is only allowed at certain hours",
          "The movement shown is discouraged",
          "The movement shown is prohibited",
          "Watch for the hazard shown",
        ],
        correctIndex: 2,
        explanation:
          "The circle and slash is Oregon's universal prohibition. Whatever is drawn inside it is the thing you may not do here.",
        context:
          "Red is the prohibiting color across the sign system: stop, do not enter, wrong way, no turn on red. The manual notes that these signs exist to control the flow of traffic through intersections, which is why they cluster where conflicting movements meet.",
        trap: "It is not a warning about the pictured hazard. Red plus a slash means the movement itself is barred.",
        excerptKey: "red-circle-slash",
        sourceLabel: "Oregon Driver Manual - Signs & Traffic Signals",
        sourceUrl: hb(7),
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Real Test Difficulty",
    difficulty: "medium",
    description:
      "Pitched at the level of the real 35-question Oregon knowledge test: exact distances, the pedestrian rules Oregon writes more tightly than most states, roundabouts, bike boxes and the parts of the manual people skim.",
    questions: [
      {
        id: "or_s3_01",
        topic: "rightOfWay",
        question:
          "You are turning right at a signaled intersection and a person is walking across the road you are turning into. How far must they be before you begin the turn?",
        choices: [
          "Six feet or more from the lane you are turning into",
          "Clear of the crosswalk entirely",
          "Past the center line of the road",
          "Anywhere, as long as you turn slowly behind them",
        ],
        correctIndex: 0,
        explanation:
          "At a signaled intersection Oregon puts a number on it: six feet of clearance from the lane you are turning into before your turn may begin.",
        context:
          "The unsignaled version is different and wider. Where there is no signal, the person must be past the lane you are turning into plus the next lane before you go. Underneath both sits the basic duty to stop and stay stopped for a pedestrian in your lane, in the lane next to yours including a bike lane, or in the lane you are turning into.",
        trap: "Six feet is not the answer at an unsignaled intersection, and clear of the crosswalk is not the answer at either. Which rule applies depends on whether there is a signal.",
        excerptKey: "ped-six-feet-signal",
        sourceLabel: "Oregon Driver Manual - Pedestrians",
        sourceUrl: hb(47),
        commonlyMissed: true,
      },
      {
        id: "or_s3_02",
        topic: "rules",
        question: "When are you allowed to pass on the right in Oregon?",
        choices: [
          "Whenever the right lane is moving faster",
          "Never, under any circumstances",
          "When the vehicle ahead has signaled a left turn, or when you are in a separate lane on a multilane road",
          "On any road with a paved shoulder wide enough to use",
        ],
        correctIndex: 2,
        explanation:
          "Two situations, and no others. The vehicle ahead is making or has signaled a left turn and there is room to get by, or the road has two or more lanes your way and they are in the left one.",
        context:
          "In the left-turn case there must be enough paved room to pass without leaving the pavement or using a bike lane, so squeezing past on the shoulder is out. Oregon also asks for extra care whenever you pass on the right, because other drivers do not expect it, and reminds you that exceeding the speed limit to complete a pass is illegal.",
        trap: "The shoulder is not a passing lane, even where it is wide and smooth. Leaving the paved travel portion ends the exception.",
        excerptKey: "passing-on-right",
        sourceLabel: "Oregon Driver Manual - Passing",
        sourceUrl: hb(33),
      },
      {
        id: "or_s3_03",
        topic: "signals",
        question:
          "You are stopped on a one-way street at a red light and want to turn left onto another one-way street. What does Oregon allow?",
        choices: [
          "Nothing, left on red is never allowed",
          "Turn without stopping if the way is clear",
          "Stop first, then turn if it is safe and no sign forbids it",
          "Turn only if a sign expressly permits the movement",
        ],
        correctIndex: 2,
        explanation:
          "Oregon allows the left on red when the road you are entering is one way and you turn in the direction its traffic flows. You stop first and yield to traffic and pedestrians, exactly as for a right on red.",
        context:
          "What matters is the road you enter, not the road you leave. Turning left from a one-way onto a two-way road against a red is illegal in every case. Turning left from a two-way onto a one-way is allowed on red after stopping, which surprises people who assume the movement only exists between two one-way streets.",
        trap: "Most drivers think left on red requires a one-way to one-way pair. In Oregon the test is whether the road you are turning INTO is one way.",
        excerptKey: "left-one-way-to-one-way",
        sourceLabel: "Oregon Driver Manual - Turns",
        sourceUrl: hb(40),
        commonlyMissed: true,
      },
      {
        id: "or_s3_04",
        topic: "sharing",
        question:
          "You approach an intersection with a green painted box across your lane ahead of the stop line. What is it and what must you do?",
        choices: [
          "A bus stop, so wait behind it only when a bus is present",
          "A pedestrian refuge, so stop inside it and look both ways",
          "A loading zone, so drive through it normally",
          "A bike box, so stop behind it and make no right turn on red",
        ],
        correctIndex: 3,
        explanation:
          "It is a bike box. You stop behind it rather than in it, so people riding can move ahead of you, and right turns on red are banned at these intersections.",
        context:
          "When the light is green you may turn right, but you signal and yield to anyone riding on your right before you cross their path. The box is one of a family of bicycle markings Oregon uses: a wide white line with a bicycle symbol for a bike lane, sometimes painted green, and a sharrow, two chevrons above a bicycle, marking a lane that is simply shared.",
        trap: "Stopping inside the box defeats the whole design. The box is the space you leave empty for people on bicycles.",
        excerptKey: "bike-box",
        sourceLabel: "Oregon Driver Manual - Bicycles",
        sourceUrl: hb(51),
      },
      {
        id: "or_s3_05",
        topic: "rules",
        question: "You are entering a roundabout. Who must you yield to?",
        choices: [
          "Only vehicles already circulating",
          "Nobody, if you are on the larger road",
          "Traffic already inside the roundabout and traffic exiting it",
          "Traffic entering from the approach to your right",
        ],
        correctIndex: 2,
        explanation:
          "Both. Oregon names traffic inside the roundabout and traffic exiting it as the things you yield to before entering, then you wait for a gap and merge.",
        context:
          "Traffic runs counterclockwise around the center island. Pick your lane from the exit and lane use signs before you enter, hold that lane all the way round, and signal right as you leave while watching for people in the exit crosswalk. Passing inside a roundabout is out, and it is specifically illegal to pass or drive beside a truck in one because trucks straddle both lanes.",
        trap: "Watching only the circulating lane misses the car that is about to leave across your path. The exiting vehicle is named in the rule too.",
        excerptKey: "roundabout-enter-yield",
        sourceLabel: "Oregon Driver Manual - Roundabouts",
        sourceUrl: hb(43),
      },
      {
        id: "or_s3_06",
        topic: "emergencies",
        question:
          "A police car is stopped on the shoulder with its lights flashing and you are on a road with two lanes going your way. What does Oregon require?",
        choices: [
          "Change lanes so you are not driving beside it",
          "Sound your horn as you pass",
          "Stop until the officer waves you on",
          "Reduce speed to 20 mph and hold your lane",
        ],
        correctIndex: 0,
        explanation:
          "On a road with two or more lanes your way, you move over so you are not passing alongside the stopped vehicle. The rule covers any motor vehicle stopped with lights flashing, not just police.",
        context:
          "Where moving over is not possible, the alternative is to slow to at least 5 mph under the posted limit and give the stopped vehicle as much room as you safely can. At an emergency scene you slow down, be ready to stop, and do not drive over fire hoses unless someone at the scene tells you to.",
        trap: "A tow truck or a broken-down car with hazard lights gets the same treatment as a patrol car. The trigger is flashing lights, not who owns them.",
        excerptKey: "approaching-stopped-vehicles",
        sourceLabel: "Oregon Driver Manual - Approaching Stopped Vehicles",
        sourceUrl: hb(57),
        commonlyMissed: true,
      },
      {
        id: "or_s3_07",
        topic: "speed",
        question:
          "You are on an Oregon interstate with no speed limit sign in sight. What is the limit?",
        choices: [
          "55 mph, the general default",
          "60 mph",
          "70 mph on any interstate",
          "65 mph",
        ],
        correctIndex: 3,
        explanation:
          "Sixty-five is the statutory figure for an interstate highway. The manual itself declines to give a number and only says that interstate limits vary, so this one comes from the statute.",
        context:
          "The rest of Oregon's ladder is in the manual: 15 mph in alleys and narrow residential areas, 20 in a business district and in school speed zones, 25 in residential districts and public parks, and 55 wherever nothing else fits. Some rural stretches are posted higher than 65, and where a sign is posted the sign governs.",
        trap: "The 55 mph general default is the wrong answer on an interstate, and it is the one people reach for because the manual never prints the interstate number.",
        excerptKey: "ors-interstate-65",
        sourceLabel: "Oregon Revised Statutes 811.111 - Violating a speed limit",
        sourceUrl: ors("811"),
        commonlyMissed: true,
      },
      {
        id: "or_s3_08",
        topic: "parking",
        question: "How close to a railroad or light rail crossing may you park?",
        choices: [
          "15 feet from the nearest rail",
          "50 feet from the nearest rail",
          "25 feet from the nearest rail",
          "Anywhere off the tracks themselves",
        ],
        correctIndex: 1,
        explanation:
          "Fifty feet from the nearest rail. It is a longer distance than most people guess, and it is measured from the rail rather than from the crossing sign.",
        context:
          "It is easy to confuse with the 15 feet that applies when you have to STOP at a crossing and there is no stop line. Two distinct numbers, two distinct situations: 15 feet is where you stop, 50 feet is where you may not park. Parking on tracks of any kind is banned outright, streetcar tracks included.",
        trap: "Fifteen feet is the stopping distance at a crossing, not the parking distance. Mixing them up is the whole point of the question.",
        excerptKey: "no-parking-railroad",
        sourceLabel: "Oregon Driver Manual - Parking & Stopping",
        sourceUrl: hb(71),
      },
      {
        id: "or_s3_09",
        topic: "safety",
        question:
          "Your car starts to skid on a wet road. What does the Oregon manual tell you to do?",
        choices: [
          "Brake hard and hold the wheel straight",
          "Pump the brakes rapidly",
          "Stay off the brakes and steer where you want to go",
          "Accelerate gently to pull the car straight",
        ],
        correctIndex: 2,
        explanation:
          "Brakes come off, because until the car slows they will not do anything useful. You steer in the direction you want the car to go, then straighten as it recovers.",
        context:
          "The second half is the part people miss. As soon as the car begins to straighten out you have to turn the wheel back the other way, or you will overshoot and start a fresh skid in the opposite direction. The prevention is what the manual really wants: slow down on wet roads, leave more space, and keep cruise control switched off.",
        trap: "Braking is the reflex and it is what keeps the skid going. The steering does the work, not the brake pedal.",
        excerptKey: "skidding",
        sourceLabel: "Oregon Driver Manual - Hazardous Conditions",
        sourceUrl: hb(79),
      },
      {
        id: "or_s3_10",
        topic: "sharing",
        question:
          "A school bus is stopped with red lights flashing on the far side of a road divided only by a painted median. What must you do?",
        choices: [
          "Stop, because a painted median does not make two separate roads",
          "Keep going, because the median divides the road",
          "Slow to 20 mph and pass with care",
          "Stop only if you are in the lane nearest the bus",
        ],
        correctIndex: 0,
        explanation:
          "Paint does not divide a road in Oregon. With only a painted median or a turn lane between you, every lane in both directions stops.",
        context:
          "The exemption exists but it is narrower than people assume. It applies on a divided highway where the two roadways are separated by an unpaved median strip or a barrier, and then only the side the bus is on stops. The statute makes the same distinction by talking about a bus stopped on a different roadway.",
        trap: "A center turn lane looks like a divider and is not one. Lane count and paint are irrelevant, the question is whether there is a physical separation.",
        excerptKey: "bus-painted-median",
        sourceLabel: "Oregon Driver Manual - School, Places of Worship or Worker and Public Transit Buses",
        sourceUrl: hb(55),
        commonlyMissed: true,
      },
      {
        id: "or_s3_11",
        topic: "signs",
        question: "What does a yellow sign showing a curved arrow with a posted number mean?",
        choices: [
          "The speed limit changes to that number for the curve",
          "The road ahead is closed above that speed",
          "That number is the maximum for trucks only",
          "It advises the safe speed for the curve or ramp",
        ],
        correctIndex: 3,
        explanation:
          "An advisory speed is a recommendation for a specific curve or ramp, not a posted limit. It is often the safe speed in good conditions and less in bad ones.",
        context:
          "Advisory speeds are still enforceable, just not as speed limits: police enforce them through the basic rule, which requires a speed reasonable for the conditions. Oregon also uses variable signs on some highways, and the two look different for a reason. A yellow sign saying advisory speed is a recommendation; a black and white sign saying speed limit is a limit and is enforced like any other.",
        trap: "Advisory does not mean unenforceable. Taking a curve at the posted limit rather than the advisory speed is a basic rule violation waiting to happen.",
        excerptKey: "advisory-not-limits",
        sourceLabel: "Oregon Driver Manual - Speed Regulations",
        sourceUrl: hb(20),
      },
      {
        id: "or_s3_12",
        topic: "impairment",
        question:
          "You are 22 and refuse a breath test after being stopped. What does Oregon impose for the refusal itself?",
        choices: [
          "A warning on a first refusal",
          "A presumptive fine of 650 dollars and a one-year suspension",
          "A 90-day suspension, the same as failing the test",
          "Nothing, since refusing is a right",
        ],
        correctIndex: 1,
        explanation:
          "The refusal is its own offense. Oregon sets a presumptive fine of 650 dollars for it and suspends driving privileges for a year.",
        context:
          "Compare it with failing. An adult who takes the test and blows 0.08 percent or more is suspended for 90 days. Refusing costs a full year plus the fine, and none of it depends on whether the drink-driving charge itself succeeds. Driving under the influence of intoxicants is separately a Class A misdemeanor.",
        trap: "Refusing looks like the cautious choice and costs four times the suspension that failing does.",
        excerptKey: "ors-refusal-one-year",
        sourceLabel: "Oregon Revised Statutes 813.420 - Duration of suspension",
        sourceUrl: ors("813"),
        commonlyMissed: true,
      },
      {
        id: "or_s3_13",
        topic: "rules",
        question:
          "You are on a two-lane road behind a car that has stopped at a crosswalk. May you pass it?",
        choices: [
          "No, passing a vehicle stopped at a crosswalk is against the law",
          "Yes, if you can see that the crosswalk is empty",
          "Yes, if you pass at under 10 mph",
          "Only if the crosswalk is unmarked",
        ],
        correctIndex: 0,
        explanation:
          "It is illegal, and the reason is in the manual: the driver ahead may be stopped for a pedestrian you cannot see from behind their vehicle.",
        context:
          "The same idea appears in the general list of places you may not pass - approaching or inside an intersection or railroad crossing, and anywhere your view of oncoming traffic is limited. All of them share one logic: you may not pass into a space whose contents you cannot see.",
        trap: "Being sure the crosswalk is clear is the illusion the rule targets. The stopped car is the reason you cannot actually be sure.",
        excerptKey: "no-pass-stopped-at-crosswalk",
        sourceLabel: "Oregon Driver Manual - Pedestrians",
        sourceUrl: hb(47),
        commonlyMissed: true,
      },
      {
        id: "or_s3_14",
        topic: "signals",
        question: "What does a flashing yellow arrow permit?",
        choices: [
          "The movement shown, with the right of way",
          "Nothing, it is a warning that the signal is about to change",
          "The movement shown, after yielding to pedestrians and oncoming traffic",
          "The movement shown only when no oncoming traffic is present at all",
        ],
        correctIndex: 2,
        explanation:
          "A flashing yellow arrow allows the movement but protects nothing. Oncoming traffic has a steady green, so all the yielding is yours to do.",
        context:
          "Oregon runs four arrow states worth keeping straight. Green arrow means protected. Flashing yellow arrow means permitted but unprotected. Steady yellow arrow means the signal is about to turn red, so stop before the intersection unless you cannot do so safely. Red arrow means stop and stay stopped, though the turns allowed on a steady red are allowed on a red arrow too.",
        trap: "Yellow makes it look like a warning to stop. It is a permission with an obligation attached, and the obligation is the important half.",
        excerptKey: "flashing-yellow-arrow",
        sourceLabel: "Oregon Driver Manual - Traffic Signals",
        sourceUrl: hb(16),
      },
      {
        id: "or_s3_15",
        topic: "licensing",
        question:
          "You have just been issued an Oregon provisional driver license at 16. Who may ride with you in the first six months?",
        choices: [
          "Up to three friends under 20",
          "Anyone, as long as everyone is belted",
          "Only one passenger at a time",
          "Nobody under 20 unless they are immediate family",
        ],
        correctIndex: 3,
        explanation:
          "For the first six months, no passenger under 20 who is not a member of your immediate family. For the second six months the cap loosens to three such passengers.",
        context:
          "The passenger restriction runs alongside a night restriction: for the first year you may not drive between midnight and 5 a.m. unless you are traveling to or from work, driving for work, going between home and a school event with no other transport, or accompanied by a licensed driver at least 25 years old. Both restrictions fall away once you turn 18.",
        trap: "The three passenger version is real but it belongs to months seven through twelve. In the first six months the number is zero.",
        excerptKey: "ors-provisional-passengers",
        sourceLabel: "Oregon Revised Statutes 807.122 - Provisional license restrictions",
        sourceUrl: ors("807"),
        commonlyMissed: true,
      },
      {
        id: "or_s3_16",
        topic: "safety",
        question:
          "At 60 mph, how far does the manual say it takes to recognize a hazard, brake and stop?",
        choices: [
          "About two car lengths",
          "About half the length of a football field",
          "More than the length of a football field",
          "About 60 feet, one foot per mile per hour",
        ],
        correctIndex: 2,
        explanation:
          "More than a football field, once you count the time it takes to notice the hazard as well as the braking itself. That is the figure the following-distance rule is built to buy you.",
        context:
          "It is why the safe gap grows with speed rather than staying fixed: two seconds at low speed, four or more above 30 mph. Stopped in traffic there is a separate check - leave enough room to see where the rear tires of the car in front meet the road, so you can pull out if you need to.",
        trap: "People picture braking distance alone. The distance in the manual starts at the moment you recognize the hazard, not at the moment your foot moves.",
        excerptKey: "stopping-distance-60",
        sourceLabel: "Oregon Driver Manual - Maintaining a Space Cushion",
        sourceUrl: hb(29),
      },
      {
        id: "or_s3_17",
        topic: "sharing",
        question:
          "You are following a bicycle at 40 mph on a rural road and want to pass without leaving your lane. What does Oregon require?",
        choices: [
          "Nothing special, a bicycle is a slow vehicle like any other",
          "At least three feet of clearance",
          "Enough distance that you would not hit the rider if they fell",
          "You may not pass at all above 35 mph",
        ],
        correctIndex: 2,
        explanation:
          "Above 35 mph Oregon states the clearance as a consequence rather than a measurement: enough room that a rider who fell over would not be hit.",
        context:
          "Below that speed the ordinary passing rules apply, and if you cannot pass safely you slow down and stay behind until you can. People riding are harder to see than vehicles and are easily lost in a blind spot, so the manual asks for more following distance behind a bicycle as well as more room beside one.",
        trap: "The three-foot figure is a real rule in several other states and it is not how Oregon words this one.",
        excerptKey: "bike-pass-over-35",
        sourceLabel: "Oregon Driver Manual - Bicycles",
        sourceUrl: hb(50),
      },
      {
        id: "or_s3_18",
        topic: "rightOfWay",
        question:
          "A person with a white cane steps toward the curb at an intersection where you have a green light. What must you do?",
        choices: [
          "Stop and stay stopped until they have crossed the entire road",
          "Proceed, since your green light gives you the right of way",
          "Stop until they have cleared your lane, then go",
          "Sound your horn so they know you are there",
        ],
        correctIndex: 0,
        explanation:
          "A white cane or a guide dog raises the standard. You stop and remain stopped until the person has crossed the whole road, and a green light does not change that.",
        context:
          "It covers a pedestrian with limited vision, or who is blind or deaf and blind. The statute puts the duty on a driver approaching such a pedestrian who is crossing or about to cross. Around a person on horseback there is a related rule: stop if they raise a hand or the animal is clearly frightened, and do not use your horn.",
        trap: "Clearing your lane is enough for an ordinary crossing and not for this one. Here the wait runs until the far curb.",
        excerptKey: "white-cane-guide-dog",
        sourceLabel: "Oregon Driver Manual - Pedestrians",
        sourceUrl: hb(48),
        commonlyMissed: true,
      },
      {
        id: "or_s3_19",
        topic: "speed",
        question:
          "You are cited for driving 15 mph over the posted limit in Oregon. What class of violation is that?",
        choices: [
          "Class D",
          "Class C",
          "Class B",
          "Class A",
        ],
        correctIndex: 1,
        explanation:
          "Oregon grades speeding in bands. One to 10 over is Class D, 11 to 20 over is Class C, 21 to 30 over is Class B, and more than 30 over is Class A.",
        context:
          "There is a separate provision for extreme speed: driving 100 mph or more makes the offense a specific fine traffic violation with a presumptive fine of 1,150 dollars. Fines in work zones are doubled, which can move a modest overspeed into a serious sum.",
        trap: "The bands are 10 wide but they do not start where people expect. Fifteen over sits in the second band, not the first.",
        excerptKey: "ors-speed-penalties",
        sourceLabel: "Oregon Revised Statutes 811.109 - Speeding violation classes",
        sourceUrl: ors("811"),
      },
      {
        id: "or_s3_20",
        topic: "parking",
        question:
          "Your car breaks down on a rural road at dusk and cannot be seen from 200 feet away. What does Oregon require?",
        choices: [
          "Leave the hazard lights on and stay in the vehicle",
          "Move it within one hour or it may be towed",
          "Nothing, provided it is off the travelled portion",
          "Warn approaching traffic with flags, flares or signals at least 200 feet away in each direction",
        ],
        correctIndex: 3,
        explanation:
          "If drivers cannot see your vehicle from 200 feet in each direction, you have to warn them, and the warning goes out at least 200 feet in each direction.",
        context:
          "A vehicle stopped or parked on a road or shoulder in poor visibility must also show parking lights. If you have to leave it, turn off the engine, take the key, set the brakes and switch on the hazard lights. On a freeway, get to the right shoulder or an emergency stopping area, and stay in or near the vehicle on the side away from traffic rather than walking along the freeway.",
        trap: "Hazard lights alone do not meet the requirement when your car is hidden by a crest or a curve. The warning has to be placed out where drivers can react.",
        excerptKey: "emergency-parking-200-feet",
        sourceLabel: "Oregon Driver Manual - Parking & Stopping",
        sourceUrl: hb(71),
      },
      {
        id: "or_s3_21",
        topic: "rules",
        question:
          "You are on a road with a solid double yellow center line and need to turn left into a driveway. What does Oregon allow?",
        choices: [
          "Nothing, you must find another route",
          "The turn, but only at an intersection",
          "The turn, after waiting for oncoming traffic to clear",
          "The turn, only if a break in the line is provided",
        ],
        correctIndex: 2,
        explanation:
          "A double solid yellow bars passing, not turning. You may cross it to turn left into or out of a road or driveway once oncoming traffic has cleared.",
        context:
          "Inside a no-passing zone there are exactly two reasons to be left of center: the right side of the road is blocked, or you are turning left. A painted median works the same way for turns but not for travel, and the yellow diagonal stripes sometimes painted inside one mark areas you may not drive into or turn across at all.",
        trap: "No passing and no crossing are different rules. The double yellow stops the overtake, not the left turn.",
        excerptKey: "double-solid-yellow",
        sourceLabel: "Oregon Driver Manual - Pavement Markings",
        sourceUrl: hb(22),
      },
      {
        id: "or_s3_22",
        topic: "emergencies",
        question:
          "Your vehicle stalls on a railroad crossing and a train is coming. What does Oregon tell you to do?",
        choices: [
          "Get out and run at a 45 degree angle toward the train",
          "Stay in the vehicle and brace for the impact",
          "Try to restart the engine until the last moment",
          "Run directly away from the tracks at right angles",
        ],
        correctIndex: 0,
        explanation:
          "Toward the train, at about 45 degrees from the tracks. Running that way puts you behind the debris rather than in front of it when the train hits the car.",
        context:
          "It is the last item in a chapter that is mostly about not being there in the first place: never stop on the tracks, never start across a crossing you are not sure you can clear, and never try to beat a train, because it is closer and faster than it looks and cannot stop quickly. Driving around a gate that is down, or one being raised or lowered, is illegal.",
        trap: "Running away from the train is the instinct and the wrong direction. The wreckage travels the way the train is going.",
        excerptKey: "railroad-stuck-vehicle",
        sourceLabel: "Oregon Driver Manual - Railroad Crossings, Light Rail & Street Cars",
        sourceUrl: hb(64),
      },
      {
        id: "or_s3_23",
        topic: "signs",
        question:
          "A five-sided yellow sign appears beside the road. What is it telling you?",
        choices: [
          "A hospital is ahead",
          "A weight-limited bridge is ahead",
          "The road narrows ahead",
          "You are entering a school zone or approaching a school crossing",
        ],
        correctIndex: 3,
        explanation:
          "Five sides means school. The shape marks the beginning of a school zone and warns of school crossings, and it is always yellow.",
        context:
          "The five-sided sign is a warning. The speed comes from a separate school speed sign, which sets 20 mph and defines where the zone begins and ends. Children are present has its own definition too: waiting at a crosswalk, in or walking within one, or a traffic patrol member being there to help them across.",
        trap: "The shape itself does not set a speed. The 20 mph comes from the school speed limit sign, not from the five-sided warning.",
        excerptKey: "school-zone-sign-five-sided",
        sourceLabel: "Oregon Driver Manual - School Zones",
        sourceUrl: hb(49),
      },
      {
        id: "or_s3_24",
        topic: "safety",
        question:
          "It is 33 degrees and raining lightly. Which surface should you expect to be icy first?",
        choices: [
          "The middle of a straight, level road",
          "A south-facing hillside road",
          "A newly paved surface",
          "A bridge or a shaded stretch",
        ],
        correctIndex: 3,
        explanation:
          "Bridges and shaded stretches freeze first, because they lose heat on all sides and never get the sun the rest of the road gets.",
        context:
          "The manual adds a counterintuitive point: the road is likely to be most slippery near freezing rather than well below it, because at those temperatures the ice carries a film of water. In snow and ice you slow down, leave more room, keep windows clear and turn cruise control off. Studded tires are generally allowed only from November 1 through March 31.",
        trap: "Well below freezing feels more dangerous and is often less slippery. The temperature just around freezing is the one to respect.",
        excerptKey: "bridges-freeze-first",
        sourceLabel: "Oregon Driver Manual - Hazardous Conditions",
        sourceUrl: hb(78),
      },
      {
        id: "or_s3_25",
        topic: "sharing",
        question:
          "A funeral procession is crossing an intersection ahead against a red light. What is your position?",
        choices: [
          "Yield to the procession and do not drive between its vehicles",
          "Proceed, since a red light applies to everyone",
          "Join the end of the procession to get through the intersection",
          "Sound your horn and continue on your green",
        ],
        correctIndex: 0,
        explanation:
          "A funeral procession may enter an intersection without stopping and need not obey traffic control devices. Other traffic yields, and joining it or cutting between its vehicles is illegal.",
        context:
          "It is one of a small group of situations where another road user's movement outranks your signal. Emergency vehicles using lights or a siren are another, and so is a police officer or road worker directing traffic, whose instructions override every sign and marking.",
        trap: "Slotting in to ride through on their right of way is specifically named as an offense, not a clever shortcut.",
        excerptKey: "funeral-procession",
        sourceLabel: "Oregon Driver Manual - Other Vehicles",
        sourceUrl: hb(57),
      },
      {
        id: "or_s3_26",
        topic: "licensing",
        question:
          "You fail the Oregon knowledge test at a DMV office. When can you try again?",
        choices: [
          "After a mandatory seven-day wait",
          "After 30 days",
          "The same day, if the office has testing capacity",
          "Only after completing a driver education course",
        ],
        correctIndex: 2,
        explanation:
          "Oregon lets you retest the same day, subject to the office having the resources. There is no fixed waiting period after an ordinary failure.",
        context:
          "The online route is more limited. You get two attempts in any 24 hours and four in total, after which you must test at an office. And the one thing that does trigger a wait is cheating: talking, note taking, using a phone or another electronic device, or letting someone test for you all mean a fail and 90 days before you can test again.",
        trap: "The 90-day wait is real but it belongs to cheating, not to failing. Getting the answers wrong costs you the fee and nothing more.",
        excerptKey: "test-retake-same-day",
        sourceLabel: "Oregon Driver Manual - How to Apply",
        sourceUrl: hb(2),
      },
      {
        id: "or_s3_27",
        topic: "signals",
        question:
          "You are at a red arrow pointing right. May you turn right after stopping?",
        choices: [
          "No, a red arrow never permits a turn",
          "Only where a sign says right on red is allowed",
          "Yes, on the same terms as a steady red signal",
          "Yes, without stopping, because the arrow is directional",
        ],
        correctIndex: 2,
        explanation:
          "Oregon treats a red arrow like a steady red for turning purposes. The turns permitted on a steady red are permitted on a red arrow, after a full stop and unless a sign says otherwise.",
        context:
          "That means right on red onto a two-way road, and right or left on red onto a one-way road in the direction it flows. A No Turn on Red sign switches all of it off, and so does a police officer directing traffic. Otherwise a red arrow means stop and remain stopped until the signal changes.",
        trap: "Arrows look stricter than circles and here they are not. The exception for turns survives the change of shape.",
        excerptKey: "red-arrow",
        sourceLabel: "Oregon Driver Manual - Traffic Signals",
        sourceUrl: hb(15),
      },
      {
        id: "or_s3_28",
        topic: "rules",
        question: "Where are U-turns prohibited in Oregon?",
        choices: [
          "Only where a No U-Turn sign is posted",
          "Only on divided highways",
          "Anywhere within a city",
          "At signaled intersections unless a sign permits it, and between intersections in a city",
        ],
        correctIndex: 3,
        explanation:
          "Two blanket prohibitions with no sign needed: at an intersection controlled by a traffic signal unless a sign permits the turn, and between intersections inside a city.",
        context:
          "On top of that, visibility rules it out anywhere you cannot be seen by traffic from either direction within 500 feet inside city limits, or within 1,000 feet outside them. Put together, the legal U-turn in an Oregon city is an unusual thing rather than a routine maneuver.",
        trap: "Waiting for a No U-Turn sign is backwards. At a signaled intersection you need a sign to make the turn legal, not to make it illegal.",
        excerptKey: "u-turns-prohibited",
        sourceLabel: "Oregon Driver Manual - Turns",
        sourceUrl: hb(41),
        commonlyMissed: true,
      },
      {
        id: "or_s3_29",
        topic: "impairment",
        question:
          "You have taken a prescription medication that makes you drowsy and you feel fine. Where do you stand under Oregon's DUII law?",
        choices: [
          "The law applies to alcohol and illegal drugs only",
          "Prescription medication is a defense if you have the prescription",
          "The law reaches any substance that impairs your ability to drive",
          "It applies only if the medication label warns against driving",
        ],
        correctIndex: 2,
        explanation:
          "Oregon writes DUII around impairment, not around what the substance is. A lawful prescription is not a defense if the driving is impaired.",
        context:
          "The manual asks you to check side effects with a doctor or pharmacist and, when you are unsure whether it is safe to drive on something new, to find another way to travel. Alcohol combined with marijuana is singled out as a particular risk to driving ability. Driving under the influence of intoxicants is a Class A misdemeanor.",
        trap: "Feeling fine is exactly what an impairing drug does to your judgement about whether you are impaired.",
        excerptKey: "duii-any-substance",
        sourceLabel: "Oregon Driver Manual - Dangerous Driving Behaviors",
        sourceUrl: hb(83),
      },
      {
        id: "or_s3_30",
        topic: "rightOfWay",
        question:
          "A pedestrian is crossing in a marked crosswalk in the lane next to yours, moving toward you. What must you do?",
        choices: [
          "Stop and remain stopped",
          "Continue, since they are not in your lane yet",
          "Slow down and pass behind them",
          "Sound your horn and continue",
        ],
        correctIndex: 0,
        explanation:
          "Oregon's stopping duty covers three lanes, not one: your lane, the lane next to yours including a bike lane, and the lane you are turning into.",
        context:
          "The exception is narrow. You need not stop if the pedestrian is in a crosswalk on the other side of a safety island. Failing to stop and remain stopped for a pedestrian is a Class B traffic violation, and the statute counts crossing as beginning the moment any part of the person, or a cane, crutch, wheelchair or bicycle, moves onto the roadway with intent to proceed.",
        trap: "Waiting until they reach your lane is the mistake, and it is the reason Oregon wrote the adjacent lane into the rule.",
        excerptKey: "ped-lanes-list",
        sourceLabel: "Oregon Driver Manual - Pedestrians",
        sourceUrl: hb(46),
        commonlyMissed: true,
      },
      {
        id: "or_s3_31",
        topic: "safety",
        question:
          "A front tire blows out at highway speed. What does the manual tell you to do first?",
        choices: [
          "Brake hard and pull off immediately",
          "Grip the wheel firmly and slow down gradually",
          "Steer sharply toward the shoulder",
          "Shift into neutral and coast",
        ],
        correctIndex: 1,
        explanation:
          "Hold the wheel and let the speed come off gradually, then pull off the road. A front blowout makes the steering heavy and pulls hard to one side, and sudden inputs turn that into a spin.",
        context:
          "A rear blowout feels different, weaving or swaying the back of the car, and gets the same treatment. The same chapter covers the other equipment failures worth knowing: a stuck accelerator means shifting to neutral with an open palm so you do not catch another gear, total brake failure means pumping the brakes, shifting down and easing the parking brake on, and lost headlights means trying other lights while you slow onto the shoulder.",
        trap: "Braking hard is the reflex, and on a blown front tire it takes away what little steering you have left.",
        excerptKey: "blowout-actions",
        sourceLabel: "Oregon Driver Manual - Vehicle Equipment Failures",
        sourceUrl: hb(84),
      },
      {
        id: "or_s3_32",
        topic: "speed",
        question:
          "A black and white sign reading SPEED LIMIT displays a number that changed since you last passed it. What is it?",
        choices: [
          "An advisory speed for the conditions",
          "A sign that applies only to trucks",
          "A malfunctioning sign to be ignored",
          "A variable speed limit, enforced like any other limit",
        ],
        correctIndex: 3,
        explanation:
          "Black and white saying speed limit is a limit, variable or not. The number changes with traffic and weather, and police enforce it exactly as they would a fixed sign.",
        context:
          "The yellow version says advisory speed and is the one that only recommends, though even that is enforceable through the basic rule. The colors are the tell: black and white is law, yellow is advice. Both kinds get switched on and off as conditions require.",
        trap: "A number that changes looks provisional. The colors, not the changeability, tell you which kind of sign you are reading.",
        excerptKey: "variable-speed-limit",
        sourceLabel: "Oregon Driver Manual - Speed Regulations",
        sourceUrl: hb(20),
      },
      {
        id: "or_s3_33",
        topic: "sharing",
        question:
          "A transit bus at a stop ahead signals to pull back into your lane and a lighted sign on its back reads yield. What must you do?",
        choices: [
          "Maintain speed, since the bus must wait for a gap",
          "Sound your horn to warn it",
          "Yield and let it back into the lane",
          "Change lanes, or the yield sign does not apply to you",
        ],
        correctIndex: 2,
        explanation:
          "Where the bus shows the flashing yield sign and signals to re-enter traffic, vehicles approaching from behind must yield to it.",
        context:
          "Buses that carry workers or serve a place of worship are treated differently again: if one shows flashing amber or red lights you handle it exactly as you would a school bus. And transit-only lanes, sometimes painted red, are for transit vehicles, though a sign may allow you to use one briefly to turn or to pull over to park.",
        trap: "The ordinary rule that a vehicle entering traffic yields is reversed here. The lighted yield sign is what reverses it.",
        excerptKey: "transit-bus-yield",
        sourceLabel: "Oregon Driver Manual - School, Places of Worship or Worker and Public Transit Buses",
        sourceUrl: hb(56),
      },
      {
        id: "or_s3_34",
        topic: "emergencies",
        question:
          "An emergency vehicle responding to a call has just passed you. How far back must you stay?",
        choices: [
          "At least 500 feet",
          "At least 100 feet",
          "At least 200 feet",
          "Far enough not to interfere, with no set distance",
        ],
        correctIndex: 0,
        explanation:
          "Five hundred feet. The manual and the statute agree, and the statute makes following closer than that its own offense.",
        context:
          "Before it passes, the rule is to pull as close as you safely can to the right and stop, without stopping in an intersection, and to stay stopped until it has gone by or an officer tells you to move. At the scene itself, slow down, be prepared to stop, and do not drive over fire hoses unless someone at the scene directs you to.",
        trap: "Following an ambulance to move through traffic is the behavior this distance exists to prevent, and 500 feet is far longer than the gap people leave.",
        excerptKey: "emergency-500-feet",
        sourceLabel: "Oregon Driver Manual - Emergency Vehicles",
        sourceUrl: hb(58),
      },
      {
        id: "or_s3_35",
        topic: "signs",
        question:
          "You see a red flag at least 12 inches square hanging off the back of the vehicle ahead. What does it indicate?",
        choices: [
          "The vehicle is broken down and being towed",
          "The load extends 4 feet or more beyond the rear",
          "The vehicle is oversize and traveling with a pilot car",
          "The vehicle is a slow moving farm vehicle",
        ],
        correctIndex: 1,
        explanation:
          "The red flag marks a load hanging 4 feet or more past the back of the vehicle, so you know the vehicle is longer than it looks.",
        context:
          "In poor visibility the flag is replaced by a red light visible for 500 feet to the rear and sides. Loads have limits at the other end too: nothing may stick out past the left fenders, no more than 6 inches past the right fenders, and no more than 4 feet in front of the vehicle. A slow moving vehicle carries a different marker entirely, an orange triangle with a red border.",
        trap: "The orange triangle and the red flag are two different warnings. One says slow, the other says longer than it appears.",
        excerptKey: "over-length-red-flag",
        sourceLabel: "Oregon Driver Manual - Other Vehicles",
        sourceUrl: hb(56),
      },
    ],
  },
];
