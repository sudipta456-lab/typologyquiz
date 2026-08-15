import type { DrivingTestSet } from "../types";

// Every fact below was checked against the Maryland Driver's Manual, DL-002
// (10-25), October 2025 Edition, published by the MDOT Motor Vehicle
// Administration, plus the sections of the Maryland Transportation Article and
// the three mva.maryland.gov pages that carry rules the manual states
// incompletely or not at all.
//
// Maryland's manual is 56 pages - among the shortest of any state - and the
// gaps matter, because the MVA writes a 25-question test from it and expects
// numbers the book never prints.
//
// 1. The manual states no speed limit anywhere. Not a school-zone figure, not a
//    residential figure, not a highway maximum. It says only that the posted
//    limit is the maximum for ideal conditions. The 30/35/50/55 mph statutory
//    defaults come from Transportation Article 21-801.1, and the school-zone
//    rule from 21-803.
// 2. The manual gives no parking distances at all. The 15-foot hydrant, the
//    20-foot crosswalk and the 30-foot stop-sign figures come from 21-1003.
// 3. The manual tells you to signal before turning but never says how far
//    ahead. The 100-foot rule is in 21-604.
// 4. The manual gives the knowledge test's length and time limit but not its
//    pass mark. The 88% figure appears only on MVA's Knowledge Tests page.
//
// Two genuine conflicts are flagged where they arise. On school buses the
// manual excuses oncoming traffic only on "a multiple lane road divided by a
// physical barrier", while 21-706(c) excuses any driver "on a divided highway,
// if the school vehicle is on a different roadway" - a barrier is not required
// by the statute. The one question that touches this is built on a road that
// satisfies both readings. Separately, MVA's older Knowledge Test Appointment
// Instructions page still states an 85% pass mark; the current Knowledge Tests
// page states 88%, and that is the figure used here.
//
// Questions are original. Explanations, context notes and trap notes are
// written from scratch; the deep link is there so the learner reads MVA's own
// authoritative wording on the government's site.
const HB = "https://mva.maryland.gov/Documents/DL-002.pdf";
const PERMIT = "https://mva.maryland.gov/your-mva-guide/teens-new-drivers/learners-permit";
const gtr = (s: string) =>
  `https://mgaleg.maryland.gov/mgawebsite/Laws/StatuteText?article=gtr&section=${s}&enactments=false`;

export const marylandSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Maryland Basics",
    difficulty: "starter",
    description:
      "The rules you meet on your first drive in Maryland: what the shapes and colours mean, who goes first, and the handful of numbers the MVA's 25-question knowledge test expects you to know cold.",
    questions: [
      {
        id: "md_s1_01",
        topic: "signs",
        question:
          "You come to a red eight-sided sign at an intersection. What does Maryland require?",
        choices: [
          "Slow to a crawl and continue if the way looks clear",
          "Stop only if another vehicle is approaching",
          "Come to a complete stop at the stop line, or before the crosswalk or intersection if there is none",
          "Yield to traffic on the wider road, then proceed",
        ],
        correctIndex: 2,
        explanation:
          "The octagon means a full stop, and the manual is specific about where: the stop line first, the crosswalk if there is no line, and the edge of the intersection if there is neither. You then stay stopped until it is genuinely safe to move.",
        context:
          "Maryland teaches signs by shape and colour before words, because the shape is readable in fog, glare or a language you do not read. The octagon is reserved for STOP and nothing else, the downward triangle for YIELD, and a yellow diamond warns of something ahead. Learning the system beats memorising individual signs, since the test draws on signs the manual never pictures.",
        trap:
          "A rolling stop is not a stop. The wheels have to stop turning, however empty the cross street looks.",
        excerptKey: "shape-octagon",
        sourceLabel: "Maryland Driver's Manual - Section 4.B Traffic Signs",
        sourceUrl: HB,
      },
      {
        id: "md_s1_02",
        topic: "signals",
        question:
          "You are stopped at a steady red light in Maryland and want to turn right. What does the manual allow?",
        choices: [
          "Turn right without stopping if nothing is coming",
          "Turn right after a complete stop, unless a sign prohibits it, yielding to pedestrians and all other traffic",
          "Turn right only when a green arrow appears",
          "Turn right only where a sign expressly permits it",
        ],
        correctIndex: 1,
        explanation:
          "Right on red is Maryland's default, not a special permission. Two things attach to it: you must actually stop first, and any sign forbidding the turn overrides the default. Having stopped, you still give way to pedestrians and to everyone else.",
        context:
          "Maryland treats red as stop-and-stay-stopped, with two turns carved out. Right on red is permitted after a full stop unless a sign says otherwise, and Maryland also allows a left on red from a one-way street onto another one-way street on exactly the same terms. A red arrow removes the permission for that movement entirely.",
        trap:
          "\"Clear enough to go\" is not the test. If you never came to a stop, the turn is unlawful even on an empty road at 3am.",
        excerptKey: "red-turns",
        sourceLabel: "Maryland Driver's Manual - Section 4.A Traffic Signals",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "md_s1_03",
        topic: "rightOfWay",
        question:
          "You and another driver reach a four-way stop at exactly the same moment, at right angles to each other. Who goes first?",
        choices: [
          "Whoever signals first",
          "The driver going straight, ahead of any turning driver",
          "The driver on the right",
          "The driver on the left, because they are further from the crossing traffic",
        ],
        correctIndex: 2,
        explanation:
          "Maryland's tie-breaker is the driver on your right. It only comes into play when arrival is genuinely simultaneous - if one of you clearly got there first, that driver goes.",
        context:
          "The manual sets out right-of-way as a list of people you yield to, and the first two entries handle intersections: the driver who is at or arrives before you, and then the driver on your right when you arrive together. The same right-hand rule is stated again specifically for four-way stops. Underneath all of it sits a warning the manual repeats - never assume you automatically have the right of way.",
        trap:
          "Going straight does not outrank turning at a four-way stop. Order of arrival decides it, and the right-hand rule only breaks a tie.",
        excerptKey: "row-four-way",
        sourceLabel: "Maryland Driver's Manual - Section 3.B Right-of-Way",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "md_s1_04",
        topic: "rules",
        question:
          "What minimum following distance does the MVA recommend in good conditions?",
        choices: ["3 to 4 seconds", "1 second", "2 seconds", "One car length for every 10 mph"],
        correctIndex: 0,
        explanation:
          "Maryland's figure is 3 to 4 seconds, not the bare three seconds several neighbouring states teach. You pick a fixed object ahead, start counting when the car in front passes it, and you should still be counting when you reach it.",
        context:
          "The manual explains the count in detail because most rear-end crashes come from following too closely. Behind vehicles that stop often - buses, delivery vans - it tells you to stretch the gap to four or five seconds, and more if conditions call for it. On wet or snow-covered roads the space you need is much greater again.",
        trap:
          "Answering \"3 seconds\" is close but not what Maryland teaches. The manual's own figure is a range, 3 to 4.",
        excerptKey: "following-3-4",
        sourceLabel: "Maryland Driver's Manual - Section 3.D Following Distance",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "md_s1_05",
        topic: "safety",
        question:
          "It is raining and you switch on your windshield wipers in the middle of the afternoon. What does Maryland law require?",
        choices: [
          "Nothing - headlights are only required after dark",
          "Parking lights are sufficient in daylight",
          "Hazard flashers, so you can be seen from behind",
          "Your headlights must be on as well",
        ],
        correctIndex: 3,
        explanation:
          "Maryland ties wipers to headlights by law. Once the wipers are running in bad weather, the headlights go on, whatever the clock says.",
        context:
          "Maryland gives you two separate headlight triggers. The first is visibility: any time you cannot clearly see 1,000 feet ahead, the headlights must be on. The second is the wipers rule - inclement weather that has you wiping the screen also requires lights, and the point is as much about oncoming drivers seeing you as about you seeing the road.",
        trap:
          "Some states offer the wipers-headlights link only as friendly advice. In Maryland the manual states it as law, so \"only after dark\" is wrong here.",
        excerptKey: "wipers-headlights",
        sourceLabel: "Maryland Driver's Manual - Section 5.A Driving in Reduced Visibility",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "md_s1_06",
        topic: "signs",
        question: "A downward-pointing triangle with a red border faces you. What must you do?",
        choices: [
          "Stop completely, then proceed",
          "Slow down, look both ways and give way to pedestrians, bicycles and vehicles",
          "Maintain speed, since the sign is only advisory",
          "Sound your horn before entering the intersection",
        ],
        correctIndex: 1,
        explanation:
          "A yield sign asks you to slow, look left and right, and let others through. Stopping is required only when safety demands it - but the moment it does, stopping is compulsory, not optional.",
        context:
          "The triangle is Maryland's only three-sided sign, so its shape alone tells you what it is. Yield is the lighter cousin of a stop: no automatic halt, but no right to push in either. You may move off only once you can do it safely, and Maryland lists bicycles alongside pedestrians and vehicles among those you give way to.",
        trap:
          "Yield is not \"stop\", but it is also not \"carry on regardless\". If a gap does not exist, you have to stop and wait for one.",
        excerptKey: "yield-sign-actions",
        sourceLabel: "Maryland Driver's Manual - Section 4.B Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "md_s1_07",
        topic: "sharing",
        question:
          "A school bus ahead of you stops on a two-lane road with its red lights flashing. How far back must you stop?",
        choices: ["10 feet", "15 feet", "At least 20 feet from the bus", "At least 50 feet from the bus"],
        correctIndex: 2,
        explanation:
          "Maryland's figure is 20 feet, and it applies from either direction - 20 feet behind if you are following the bus, 20 feet in front if you are meeting it.",
        context:
          "The stop lasts until the bus moves off or the red lights go out; nothing shorter counts. The only relief is a divided road, where a driver on the far side of a physical barrier keeps going. Maryland does not carve out an exception merely because there are several lanes, so on an undivided multilane road every direction stops.",
        trap:
          "The 20 feet is a minimum distance, not the whole rule. Stopping at the right distance and then creeping forward before the lights go out is still a violation.",
        excerptKey: "schoolbus-20",
        sourceLabel: "Maryland Driver's Manual - Section 7.D School Buses",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "md_s1_08",
        topic: "speed",
        question: "In Maryland, what does a posted speed limit actually represent?",
        choices: [
          "The maximum legal speed under ideal conditions",
          "The speed most traffic is expected to travel",
          "A target you should stay close to in all weather",
          "A guideline that police allow a margin above",
        ],
        correctIndex: 0,
        explanation:
          "The posted number is a ceiling, and it assumes perfect conditions. Rain, fog, traffic or a road full of pedestrians can make a legal speed an unsafe one, and Maryland holds you responsible for the difference.",
        context:
          "Maryland puts the duty on the driver rather than the sign. You may lawfully drive slower than the posted limit when conditions call for it, and the manual lists where you should - sharp curves, slippery roads, shopping centres, narrow bridges, toll plazas, school and residential streets. What you may never do is exceed the posted figure, whatever the road looks like.",
        trap:
          "There is no built-in tolerance above the sign. Driving faster than the posted limit is unlawful even if everyone around you is doing it.",
        excerptKey: "speed-posted-max",
        sourceLabel: "Maryland Driver's Manual - Section 3.C Understanding Vehicle Speed",
        sourceUrl: HB,
      },
      {
        id: "md_s1_09",
        topic: "signals",
        question: "A steady yellow light appears as you approach an intersection. What does it mean?",
        choices: [
          "Speed up to clear the intersection before the red",
          "Stop immediately, wherever you are",
          "The light is about to turn green",
          "The signal is changing to red, and you are being given time to stop safely",
        ],
        correctIndex: 3,
        explanation:
          "Yellow is a warning that red is coming, and its purpose is to give you room to stop. It also lets drivers already inside the intersection get clear before cross traffic is released.",
        context:
          "Maryland's yellow has one built-in allowance: if you are already too close to stop safely, you carry on through with care rather than stamping on the brakes. That is an exception for a driver who cannot stop, not a licence for one who simply does not want to. Treat yellow as a stop signal unless stopping would itself be the dangerous choice.",
        trap:
          "\"Accelerate to beat the red\" is the wrong instinct and is the behaviour the yellow phase exists to prevent.",
        excerptKey: "steady-yellow",
        sourceLabel: "Maryland Driver's Manual - Section 4.A Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "md_s1_10",
        topic: "impairment",
        question:
          "At what blood alcohol concentration does Maryland treat a driver as driving under the influence of alcohol?",
        choices: [".05 or higher", ".08 or higher", ".10 or higher", ".02 or higher"],
        correctIndex: 1,
        explanation:
          "Maryland's per se figure is .08. Reaching it is enough on its own - no further proof of poor driving is needed.",
        context:
          "The .08 line is a ceiling, not a safe harbour. The manual is blunt that judgment, coordination, vision and reaction time can be impaired well below it, and that a driver under .08 can still face criminal charges. It also warns you cannot estimate your own reading from the number of drinks, because weight, body fat, food, tiredness, mood and medication all change how alcohol lands.",
        trap:
          "Being under .08 is not a defence. Maryland charges impaired driving below the per se limit too.",
        excerptKey: "bac-08",
        sourceLabel: "Maryland Driver's Manual - Section 6.A Alcohol, Drugs and Driving",
        sourceUrl: HB,
      },
      {
        id: "md_s1_11",
        topic: "licensing",
        question: "How long is the MVA's knowledge test for a Maryland learner's permit?",
        choices: [
          "40 questions with no time limit",
          "30 questions in 30 minutes",
          "25 questions in 20 minutes",
          "50 questions in 45 minutes",
        ],
        correctIndex: 2,
        explanation:
          "Maryland's Class C knowledge test is 25 questions and you get 20 minutes - under 50 seconds a question. The manual states both figures outright.",
        context:
          "You take the test at an MVA location, normally on a computer, and it draws on traffic law, safe driving practice and road signs. The manual gives the length and the clock but never the pass mark; MVA's Knowledge Tests page supplies that separately, at 88%, which on a 25-question paper means 22 correct. Fail once and you can return the next business day; fail twice or more and you wait seven calendar days.",
        trap:
          "Twenty minutes is genuinely tight. This is not a test you can reason your way through from first principles question by question.",
        excerptKey: "knowledge-test-length",
        sourceLabel: "Maryland Driver's Manual - Section 1.B Knowledge Test",
        sourceUrl: HB,
      },
      {
        id: "md_s1_12",
        topic: "signs",
        question: "What does an orange background on a traffic sign tell you?",
        choices: [
          "A recreation area or point of cultural interest",
          "Construction or maintenance work ahead",
          "An emergency traffic incident",
          "A school or pedestrian crossing",
        ],
        correctIndex: 1,
        explanation:
          "Orange is Maryland's work-zone colour. Seeing it means construction or maintenance activity ahead and a road that may not behave the way the map says.",
        context:
          "Maryland's palette is worth learning as a set: red for stop, yield, do not enter and wrong way; yellow for general warnings; white for regulatory signs like speed limits; green for destinations and directions; blue for services; brown for recreation; fluorescent yellow-green for school, pedestrian and bicycle signs; and fluorescent pink for emergency traffic incidents. Colour tells you the category before you can read a word.",
        trap:
          "Fluorescent pink is a separate colour in Maryland, used for emergency incidents. Do not fold it in with orange work zones.",
        excerptKey: "sign-color-orange",
        sourceLabel: "Maryland Driver's Manual - Section 4.B Colors & Shapes",
        sourceUrl: HB,
      },
      {
        id: "md_s1_13",
        topic: "rules",
        question: "When may you legally pass another vehicle on its right in Maryland?",
        choices: [
          "On an unobstructed road with two or more lanes going your way, if you stay on the road and it is safe",
          "Whenever the vehicle ahead is travelling below the speed limit",
          "By using the paved shoulder, as long as you signal",
          "Only on a one-way street, never on a two-way road",
        ],
        correctIndex: 0,
        explanation:
          "Maryland allows passing on the right in defined situations, and an unobstructed multilane road going your way is one of them. The catch is in the word unobstructed - no median strips, signs or other obstacles - and you must stay on the roadway throughout.",
        context:
          "The default is that you pass on the left. Maryland lists the exceptions: when the vehicle ahead is about to turn left, on an unobstructed road with two or more lanes in your direction, and on an unobstructed one-way road with two or more lanes. Every one of them requires that the pass be safe and that you never leave the paved roadway to do it.",
        trap:
          "Using the shoulder is not passing on the right - it is prohibited outright, on either side of the road.",
        excerptKey: "passing-right-unobstructed",
        sourceLabel: "Maryland Driver's Manual - Section 3.I Passing",
        sourceUrl: HB,
      },
      {
        id: "md_s1_14",
        topic: "rightOfWay",
        question:
          "You are waiting in an intersection to turn left on a green light. Who has the right of way?",
        choices: [
          "You, because you were in the intersection first",
          "Whichever driver is closer to the centre line",
          "Oncoming traffic going the other way",
          "Neither - the first driver to move takes it",
        ],
        correctIndex: 2,
        explanation:
          "A turning driver gives way to the traffic coming towards them. Being stopped inside the intersection changes nothing; you wait for a gap.",
        context:
          "Maryland's list of people you yield to includes drivers in the opposing traffic lane whenever you are turning left. The same duty is stated separately for oncoming motorcycles, which the manual singles out because their size makes their speed and distance hard to judge and because drivers are at fault in over half of car-motorcycle crashes. A green light permits the turn; it does not clear the road for you.",
        trap:
          "A green ball is permission to enter the intersection, not priority over oncoming traffic. Only a green arrow gives you the movement outright.",
        excerptKey: "row-left-turn",
        sourceLabel: "Maryland Driver's Manual - Section 3.B Right-of-Way",
        sourceUrl: HB,
      },
      {
        id: "md_s1_15",
        topic: "parking",
        question: "What does the manual tell you to do every time you park?",
        choices: [
          "Leave the engine running if you will be under five minutes",
          "Set the parking brake",
          "Turn the front wheels towards the road",
          "Leave the transmission in neutral",
        ],
        correctIndex: 1,
        explanation:
          "The parking brake goes on every time, on the flat as much as on a hill. It is one of the manual's short list of things you always do when you park.",
        context:
          "Maryland's parking routine is: park where parking is intended, get as far from traffic as you can and as close to the kerb as you can, set the parking brake, leave a manual in gear or an automatic in park, check mirrors and traffic before opening the door, and take your keys. State law adds that a vehicle left unattended must have the engine stopped, ignition locked, key removed and brake set - and if it is on a grade, the front wheels turned to the kerb.",
        trap:
          "Leaving an automatic in park is not a substitute for the parking brake. Maryland lists both, separately.",
        excerptKey: "parking-brake",
        sourceLabel: "Maryland Driver's Manual - Section 3.J General Parking Rules",
        sourceUrl: HB,
      },
      {
        id: "md_s1_16",
        topic: "safety",
        question: "Who must be restrained in a moving vehicle under Maryland's seat belt law?",
        choices: [
          "The driver only",
          "Everyone in the front seat",
          "Everyone under 16, wherever they sit",
          "The driver and all passengers, by belt or child safety seat",
        ],
        correctIndex: 3,
        explanation:
          "Maryland's rule covers the driver and every passenger, front and back, either by a seat belt or by an appropriate child safety seat.",
        context:
          "Layered on top are the child rules: under 8 means a child safety seat unless the child is 4 feet 9 inches or taller, and under 2 means rear-facing until the manufacturer's height or weight limit is reached. A rear-facing seat must never go in front of an active passenger air bag, and children under 13 belong in a rear seat. A provisional licence holder carries the belt duty as an explicit licence restriction as well.",
        trap:
          "Rear-seat passengers are not exempt. Maryland covers all passengers, though enforcement in the back is secondary to another stop.",
        excerptKey: "seatbelt-law",
        sourceLabel: "Maryland Driver's Manual - Section 10.F Seat Belt Law",
        sourceUrl: HB,
      },
      {
        id: "md_s1_17",
        topic: "signals",
        question: "You approach an intersection where the signal is flashing red. What do you do?",
        choices: [
          "Stop, yield to all other traffic and pedestrians, then go when the way is clear",
          "Slow down and proceed without stopping",
          "Treat it as a green light for the main road",
          "Wait until the light stops flashing before moving",
        ],
        correctIndex: 0,
        explanation:
          "A flashing red is a stop sign in light form. You stop, give way to everything, and move off only when it is clear.",
        context:
          "Its partner is the flashing yellow, which asks you to slow and proceed with caution but not to stop. A flashing red at a railroad crossing carries an extra instruction: stop even if no train is in sight, and stay put until the flashing stops and the way is clear. A signal that has failed completely is handled the same way - stop at the line, then yield.",
        trap:
          "Flashing red is not \"slow down\". That is the flashing yellow, and confusing the two is one of the easiest marks to lose.",
        excerptKey: "flashing-red",
        sourceLabel: "Maryland Driver's Manual - Section 4.A Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "md_s1_18",
        topic: "sharing",
        question: "How much room must you leave when overtaking a bicycle in Maryland?",
        choices: ["1 foot", "2 feet", "At least 3 feet", "At least 6 feet"],
        correctIndex: 2,
        explanation:
          "Three feet is the minimum, and it applies whether the bicycle is in a bike lane, on the shoulder, or sharing your lane.",
        context:
          "The manual tells you to treat a bicycle like any other slow vehicle: be ready to slow, wait for oncoming traffic to clear, then go round with the three feet of space. State law sets the same distance, with narrow exceptions - one of them where the road is simply not wide enough to pass lawfully at three feet, which in practice means waiting for a stretch that is. You should see the bicycle in your mirror before returning to the lane.",
        trap:
          "Three feet is not satisfied by squeezing past inside your own lane on a narrow road. If you cannot make the space, you wait.",
        excerptKey: "bicycle-3-feet",
        sourceLabel: "Maryland Driver's Manual - Section 7.F Bicycles",
        sourceUrl: HB,
      },
      {
        id: "md_s1_19",
        topic: "signs",
        question: "A yellow diamond-shaped sign appears ahead. What is it telling you?",
        choices: [
          "There is a special condition or hazard ahead",
          "You are entering a school zone",
          "Passing is prohibited from here",
          "A service or facility is available at the next exit",
        ],
        correctIndex: 0,
        explanation:
          "The diamond is Maryland's warning shape. It flags a condition or hazard ahead and tells you to be ready to slow down and act.",
        context:
          "Warning signs cover curves, merges, lane drops, wildlife, railroad crossings, flaggers and school crossings ahead. The shapes carry meaning of their own: the pentagon means school zone or school crossing, the pennant marks the start of a no-passing zone, the round sign warns of a railroad crossing ahead, and the crossbuck marks the crossing itself.",
        trap:
          "The pentagon, not the diamond, is Maryland's school-zone shape - although school crossings ahead are also warned with diamond-style signs in fluorescent yellow-green.",
        excerptKey: "shape-diamond",
        sourceLabel: "Maryland Driver's Manual - Section 4.B Colors & Shapes",
        sourceUrl: HB,
      },
      {
        id: "md_s1_20",
        topic: "emergencies",
        question:
          "An ambulance comes up behind you with lights and siren going. What does Maryland require?",
        choices: [
          "Speed up to clear the road ahead of it",
          "Stop where you are, even if you are in an intersection",
          "Pull as close as possible to the edge of the road, stay out of intersections, and remain stopped until it passes",
          "Move to the left lane and slow down",
        ],
        correctIndex: 2,
        explanation:
          "You go right, clear of any intersection, and stay there until the emergency vehicle has gone by. Stopping inside an intersection blocks the very route the ambulance needs.",
        context:
          "Emergency vehicles running lights and siren have the right of way, and the duty starts the moment you see or hear one. You may not pass an emergency vehicle you are following unless it stops or an officer waves you by. A separate rule covers vehicles already stopped on the road with lights flashing - Maryland's Move Over law, which asks you to change lanes away from them or, failing that, slow to a safe speed.",
        trap:
          "Stopping dead in an intersection is the common error. Clear it first, then pull over.",
        excerptKey: "emergency-vehicle-actions",
        sourceLabel: "Maryland Driver's Manual - Section 7.B Emergency Vehicles",
        sourceUrl: HB,
      },
      {
        id: "md_s1_21",
        topic: "rules",
        question: "When should your turn signal go on?",
        choices: [
          "As you begin the turn, so following drivers are not misled",
          "Before you reach the turn, so other drivers know your plan",
          "Only if another vehicle is close behind you",
          "After you have checked your mirrors and started to slow",
        ],
        correctIndex: 1,
        explanation:
          "The signal goes on before you get to the turn. Its whole function is to tell other drivers what you are about to do while they still have time to react.",
        context:
          "The manual folds signalling into a routine: look for signs and signals, plan the turn before you reach it, signal, check front, behind and both sides, and adjust your speed. State law puts a number on it - when a signal is required it must run continuously for at least the last 100 feet before you turn, and it may not be flashed as a courtesy \"do pass\" wave to a driver behind you.",
        trap:
          "Signalling as you start to turn is too late. The statutory duty is 100 feet of continuous signal before the turn begins.",
        excerptKey: "turn-signal-before",
        sourceLabel: "Maryland Driver's Manual - Section 3.G Turning",
        sourceUrl: HB,
      },
      {
        id: "md_s1_22",
        topic: "impairment",
        question: "You are 19 and have been drinking. What does Maryland law say?",
        choices: [
          "You may drive if your BAC stays below .08",
          "You may drive if a licensed adult is in the car",
          "You may drive if you have had only one drink",
          "It is against the law for you to drink alcohol at all",
        ],
        correctIndex: 3,
        explanation:
          "Under 21, drinking is unlawful in Maryland whatever the amount. Being stopped after drinking means suspension or revocation, on top of any alcohol restriction already on your licence.",
        context:
          "The general .08 limit is written for drivers who may lawfully drink at all. For anyone under 21 the manual sets a separate and stricter rule, and MVA applies the same zero standard to provisional licence holders under 21 - any measurable alcohol is a violation. A first breach can mean an ignition interlock or six months of suspension; a second means revocation.",
        trap:
          "\"Under the legal limit\" is the wrong frame for an under-21 driver. The threshold for them is not .08, it is zero.",
        excerptKey: "under-21-alcohol",
        sourceLabel: "Maryland Driver's Manual - Section 6.A Alcohol, Drugs and Driving",
        sourceUrl: HB,
      },
      {
        id: "md_s1_23",
        topic: "signals",
        question: "A red \"X\" is displayed on a signal directly above your lane. What does it mean?",
        choices: [
          "You must never drive in that lane",
          "The lane is open but reserved for high-occupancy vehicles",
          "The lane is closed only to trucks and buses",
          "Move out of the lane as soon as you safely can",
        ],
        correctIndex: 0,
        explanation:
          "A red X closes the lane to you outright. Not \"leave it soon\" - do not drive in it at all.",
        context:
          "Lane use signals control reversible lanes, where the direction of travel changes with the traffic peaks. The full set: green arrow means the lane is open to you, red X means never drive in it, a steady yellow X means move out of the lane as soon as you safely can, and a flashing yellow X or two-way left-turn arrows mean the lane is available for left turns - shared with left-turning drivers coming the other way.",
        trap:
          "The \"move out when you safely can\" instruction belongs to the steady yellow X. A red X is absolute.",
        excerptKey: "red-x",
        sourceLabel: "Maryland Driver's Manual - Section 4.A Lane Use Signals",
        sourceUrl: HB,
      },
      {
        id: "md_s1_24",
        topic: "safety",
        question: "Which headlights should you use in fog?",
        choices: [
          "High beams, for maximum reach",
          "Hazard flashers instead of headlights",
          "Parking lights only",
          "Low beams, plus fog lights if the vehicle has them",
        ],
        correctIndex: 3,
        explanation:
          "Low beams in fog, every time. High beams bounce off the water droplets and throw the glare back at you, which makes seeing harder rather than easier.",
        context:
          "Maryland's fog guidance is to reduce speed, cut it further the moment you see headlights or taillights ahead, and be ready to stop quickly. If the fog is thick enough that driving is not safe, you pull completely off the road to a safe spot and switch on the emergency flashers - flashers while stopped, not while moving.",
        trap:
          "Reaching for high beams is the natural instinct and the wrong one. More light in fog means more glare, not more vision.",
        excerptKey: "fog-lowbeam",
        sourceLabel: "Maryland Driver's Manual - Section 5.C Driving in Fog",
        sourceUrl: HB,
      },
      {
        id: "md_s1_25",
        topic: "rightOfWay",
        question: "You are approaching a traffic circle in Maryland. Who has priority?",
        choices: [
          "Whoever reaches the circle first",
          "Traffic entering from the larger road",
          "Traffic already circulating in the circle",
          "Nobody - drivers alternate one at a time",
        ],
        correctIndex: 2,
        explanation:
          "Traffic already going round has the right of way, which is why the approaches carry yield signs. You wait at the yield line for a gap.",
        context:
          "Maryland asks you to slow on approach, keep to the right of the central island, watch for and yield to pedestrians in the crosswalk, then edge up to the yield line and look for a gap - including for vehicles about to leave the circle. If there is no traffic in the circle you do not have to wait. In a multilane circle you stay in your lane, and you signal right as you prepare to leave.",
        trap:
          "First-come-first-served does not apply here. Circulating traffic keeps priority however long you have been waiting.",
        excerptKey: "roundabout-yield",
        sourceLabel: "Maryland Driver's Manual - Section 5.I Traffic Circles (Roundabouts)",
        sourceUrl: HB,
      },
      {
        id: "md_s1_26",
        topic: "licensing",
        question: "Who qualifies as a supervising driver for a Maryland learner's permit holder?",
        choices: [
          "Any licensed driver aged 18 or over",
          "Someone at least 21 who has held a licence for at least three years for the same class of vehicle, seated beside you",
          "A parent or legal guardian, and nobody else",
          "Any licensed driver, as long as they are sober",
        ],
        correctIndex: 1,
        explanation:
          "Three conditions stack: at least 21 years old, licensed at least three years for the class of vehicle you are driving, and sitting beside you.",
        context:
          "The supervising driver is the whole basis of the learner stage. MVA adds a detail the manual does not: the supervising driver takes the front passenger seat and no other front-seat passengers are allowed. Practice hours logged with that person are what unlock the provisional licence - 60 hours for applicants under 25, of which at least 10 must be after dark.",
        trap:
          "Eighteen is not old enough. Maryland's supervising driver must be 21 or over, and the three-year licence history is a separate requirement on top.",
        excerptKey: "supervising-driver",
        sourceLabel: "Maryland Driver's Manual - Section 10.B Supervising Driver",
        sourceUrl: HB,
      },
      {
        id: "md_s1_27",
        topic: "signs",
        question: "What does a five-sided sign mean in Maryland?",
        choices: [
          "A school zone or a school crossing",
          "The start of a no-passing zone",
          "A railroad crossing ahead",
          "A recreation or cultural interest area",
        ],
        correctIndex: 0,
        explanation:
          "The pentagon is reserved for schools - either a school zone or a marked school crossing. Its shape is its message.",
        context:
          "Maryland uses fluorescent yellow-green for school, pedestrian and bicycle signs, so a pentagon in that colour is doubly marked. The manual asks you to slow in school zones and residential areas specifically because young cyclists and pedestrians are unpredictable and hard to see. Note that Maryland sets no statewide school-zone speed number - the limit is whatever a county or municipality has posted.",
        trap:
          "The no-passing zone is the pennant, not the pentagon. Two five-ish shapes, two entirely different meanings.",
        excerptKey: "shape-pentagon",
        sourceLabel: "Maryland Driver's Manual - Section 4.B Colors & Shapes",
        sourceUrl: HB,
      },
      {
        id: "md_s1_28",
        topic: "rules",
        question: "What do double solid yellow lines down the centre of the road mean?",
        choices: [
          "Passing is allowed in both directions with care",
          "Passing is allowed only on the side with the inner line",
          "The lanes are reversible and change direction by time of day",
          "Passing is prohibited in either direction, though you may cross to turn left",
        ],
        correctIndex: 3,
        explanation:
          "Double solid yellow closes passing to both directions. Maryland does allow you to cross it for a left turn - into a driveway, for instance - which is a turn, not a pass.",
        context:
          "Yellow always separates opposing traffic. A single broken yellow means careful passing is permitted both ways; a solid plus broken combination means passing is allowed only for the side with the broken line; double solid yellow closes it entirely. White lines separate traffic going the same way - broken white means lane changes are permitted, solid white discourages them, and double solid white forbids them.",
        trap:
          "Crossing double yellow to turn left is lawful; crossing it to overtake is not. The manual states the turning allowance explicitly.",
        excerptKey: "double-solid-yellow",
        sourceLabel: "Maryland Driver's Manual - Section 4.C Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "md_s1_29",
        topic: "parking",
        question: "How close to a fire hydrant may you park in Maryland?",
        choices: ["No closer than 10 feet", "No closer than 15 feet", "No closer than 20 feet", "No closer than 25 feet"],
        correctIndex: 1,
        explanation:
          "Fifteen feet is Maryland's hydrant distance. The manual never states it, so this one comes from the Transportation Article.",
        context:
          "State law sets several parking distances the handbook leaves out: 15 feet from a fire hydrant, 20 feet from a crosswalk at an intersection - a rule that does not apply in Baltimore City - 30 feet on the approach to a flashing signal, stop sign, yield sign or traffic signal at the side of the road, 50 feet from the nearest rail at a railroad crossing, and 20 feet from a fire station driveway.",
        trap:
          "Maryland's hydrant figure is 15 feet, not the 10 or 20 several neighbouring states use. It is worth memorising rather than guessing.",
        excerptKey: "park-hydrant-15",
        sourceLabel: "Maryland Transportation Article 21-1003",
        sourceUrl: gtr("21-1003"),
        commonlyMissed: true,
      },
      {
        id: "md_s1_30",
        topic: "speed",
        question:
          "Traffic on a wet road is moving well below the posted 50 mph limit. What does Maryland law say about your speed?",
        choices: [
          "You must keep up with the posted limit to avoid impeding traffic",
          "You may exceed the limit briefly to merge with faster traffic",
          "The posted limit applies regardless of the weather",
          "You may lawfully drive slower than the limit when conditions call for it",
        ],
        correctIndex: 3,
        explanation:
          "Driving under the posted number because the road demands it is exactly what Maryland expects. The illegal direction is upward - you may never exceed the posted limit.",
        context:
          "Maryland's law requires a reasonable speed with awareness of existing and potential hazards, which means the safe speed and the posted speed are not always the same number. The manual lists conditions that should bring you down: sharp curves and hills, slippery roads, places with pedestrians or animals, car parks and downtown areas, heavy traffic, narrow bridges and tunnels, toll plazas, schools and residential streets, and railroad crossings.",
        trap:
          "Driving well below the flow does carry its own risk - the manual warns it invites constant overtaking - but that is a safety caution, not permission to speed.",
        excerptKey: "speed-adjust",
        sourceLabel: "Maryland Driver's Manual - Section 3.C Understanding Vehicle Speed",
        sourceUrl: HB,
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Core Rules of the Road",
    difficulty: "easy",
    description:
      "The everyday rules the MVA expects you to have down cold - signals, markings, right of way and the licensing restrictions that come with a Maryland permit.",
    questions: [
      {
        id: "md_s2_01",
        topic: "signals",
        question:
          "You are on a one-way street facing a steady red light and want to turn left onto another one-way street. What does Maryland allow?",
        choices: [
          "Never - left on red is prohibited statewide",
          "Yes, after a complete stop, unless a sign prohibits the turn",
          "Only where a sign expressly permits a left on red",
          "Only between one-way streets in Baltimore City",
        ],
        correctIndex: 1,
        explanation:
          "Maryland permits a left on red from a one-way street onto another one-way street, on the same terms as a right on red: stop completely first, and obey any sign that forbids it.",
        context:
          "The manual sets out both red-light turns together. Whichever way you go, you stop first, you check for a sign prohibiting the turn, and once moving you yield to pedestrians and all other traffic. A red arrow removes the permission for that movement. A No Turn on Red sign always beats the default.",
        trap:
          "The one-way-to-one-way condition matters at both ends. Turning left on red from a one-way street onto a two-way street is not permitted.",
        excerptKey: "red-turns",
        sourceLabel: "Maryland Driver's Manual - Section 4.A Traffic Signals",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "md_s2_02",
        topic: "signs",
        question: "A pennant-shaped sign appears on the left-hand side of the road. What does it mark?",
        choices: [
          "A divided road ending ahead",
          "A school crossing",
          "The start of a no-passing zone",
          "A merge from a side road",
        ],
        correctIndex: 2,
        explanation:
          "The pennant marks the beginning of a no-passing zone. It is placed where the restriction starts and tells you not to overtake from there.",
        context:
          "Maryland's shape vocabulary does a lot of work: octagon for stop, triangle for yield, diamond for warning, pennant for no passing, pentagon for school, round for a railroad crossing ahead, crossbuck at the crossing itself, and rectangles for regulatory and guide signs. On the road the pennant is usually paired with pavement markings - a solid yellow line on your side of the centre.",
        trap:
          "The pennant is not just advice about a hill or curve. It is the regulatory start of a zone where overtaking is prohibited.",
        excerptKey: "shape-pennant",
        sourceLabel: "Maryland Driver's Manual - Section 4.B Colors & Shapes",
        sourceUrl: HB,
      },
      {
        id: "md_s2_03",
        topic: "rules",
        question: "A single broken yellow line runs down the middle of a two-lane road. What does it permit?",
        choices: [
          "Passing on your side only, never for oncoming traffic",
          "Careful passing in either direction",
          "No passing at all, since yellow always separates opposing traffic",
          "Lane changes only where a sign permits them",
        ],
        correctIndex: 1,
        explanation:
          "A broken yellow centre line means passing with care is permitted in both directions. The line is broken on both sides, so both directions get the same permission.",
        context:
          "Yellow always divides traffic going opposite ways. Broken yellow allows careful passing both ways; a solid plus broken pair allows it only for the side with the broken line; double solid yellow closes it to both. The same solid-and-broken combination is also used to mark the edges of a two-way left turn lane, with the solid lines outside and the broken lines inside.",
        trap:
          "\"Yellow means no passing\" is a half-remembered rule. It is the solid yellow on your side that forbids it, not yellow as such.",
        excerptKey: "broken-yellow",
        sourceLabel: "Maryland Driver's Manual - Section 4.C Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "md_s2_04",
        topic: "sharing",
        question: "How much following distance does Maryland ask you to leave behind a motorcycle?",
        choices: [
          "The same one to two seconds you would leave behind a car",
          "Half a car length, since motorcycles stop quickly",
          "At least 3 to 4 seconds",
          "At least 6 seconds in all conditions",
        ],
        correctIndex: 2,
        explanation:
          "Maryland asks for the same 3 to 4 seconds behind a motorcycle as behind anything else - and it says so explicitly, because riders slow in ways that do not light up a brake lamp.",
        context:
          "Motorcyclists may slow by rolling off the throttle or downshifting, so the brake light you are watching for never comes. They also move around within their lane to dodge potholes, gravel and oil, or to stay visible, which is why Maryland says a motorcycle is entitled to the whole lane and you must not share it. When passing, leave plenty of room - your slipstream affects a bike far more than a car.",
        trap:
          "Motorcycles do not stop shorter than cars in a way that lets you close up. The manual's answer is the same 3 to 4 seconds, not less.",
        excerptKey: "motorcycle-following",
        sourceLabel: "Maryland Driver's Manual - Section 7.E Motorcycles",
        sourceUrl: HB,
      },
      {
        id: "md_s2_05",
        topic: "safety",
        question: "Your tyres lose contact with a wet road and the car starts to hydroplane. What should you do?",
        choices: [
          "Brake firmly to break through the water",
          "Steer sharply towards the shoulder",
          "Accelerate to push the water aside",
          "Ease off the gas, keep the vehicle straight and do not brake",
        ],
        correctIndex: 3,
        explanation:
          "Foot off the gas, no brakes, hold it straight, and let the speed bleed off until the tyres find the road again. Braking mid-hydroplane is what turns a scare into a spin.",
        context:
          "Hydroplaning happens when speed and standing water combine until the tyres ride on a film rather than the surface. Prevention is tyre condition and lower speed on wet roads. The related skid recovery follows the same logic: release whichever pedal you are on, steer in the direction you are sliding, look where you want to go, and only touch the brake once you have traction back.",
        trap:
          "Braking is the reflex and the wrong move. The manual states plainly: do not apply your brakes.",
        excerptKey: "hydroplaning-response",
        sourceLabel: "Maryland Driver's Manual - Section 5.F Hydroplaning",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "md_s2_06",
        topic: "licensing",
        question: "How long must you hold a Maryland provisional licence before a full driver's licence?",
        choices: [
          "At least 18 months",
          "At least 6 months",
          "At least 12 months",
          "At least 24 months",
        ],
        correctIndex: 0,
        explanation:
          "Eighteen months, and it must be a clean eighteen months. A moving-violation conviction or a probation before judgment restarts the clock.",
        context:
          "The provisional stage is the middle step of the Rookie Driver system: you may drive unsupervised but under restrictions on passengers, night driving and phone use. To graduate you must be at least 18, have held the provisional licence for 18 months, and have no moving-violation convictions or PBJs in that period. When you qualify, MVA switches the licence automatically and posts you a card to carry with the provisional one.",
        trap:
          "The 18 months is not a countdown that survives a ticket. Each conviction or PBJ starts a fresh 18-month conviction-free period.",
        excerptKey: "provisional-18-months",
        sourceLabel: "Maryland Driver's Manual - Section 2.C Provisional License",
        sourceUrl: HB,
      },
      {
        id: "md_s2_07",
        topic: "rightOfWay",
        question:
          "You stop at a T intersection, where your road ends at a through road. Who has the right of way?",
        choices: [
          "You, if you signalled before stopping",
          "Drivers already on the through road",
          "Whichever driver is turning right",
          "Traffic approaching from your left only",
        ],
        correctIndex: 1,
        explanation:
          "At a T intersection the traffic already on the road you are joining goes first. Your road ends; theirs does not.",
        context:
          "The manual's right-of-way list is a set of situations where you are the one who yields, and the T intersection is one of them - alongside entering a road from a driveway or private road, and joining a highway from an entrance or acceleration ramp. State law adds that a driver entering a paved highway from an unpaved one must stop first, not merely slow.",
        trap:
          "Stopping does not buy you priority. Once stopped you still wait for a gap in the through traffic.",
        excerptKey: "row-t-intersection",
        sourceLabel: "Maryland Driver's Manual - Section 3.B Right-of-Way",
        sourceUrl: HB,
      },
      {
        id: "md_s2_08",
        topic: "speed",
        question:
          "You are on an undivided street in a residential district with no speed limit sign in sight. What is the maximum lawful speed?",
        choices: ["30 mph", "25 mph", "35 mph", "40 mph"],
        correctIndex: 0,
        explanation:
          "Maryland's statutory default for an undivided highway in a residential district is 30 mph. The same 30 applies to all highways in a business district.",
        context:
          "The manual never prints a speed limit, so the defaults come from the Transportation Article: 30 mph in a business district and on undivided residential highways, 35 on divided residential highways, 50 on undivided highways elsewhere, 55 on divided highways elsewhere, and 15 mph in alleys in Baltimore County. Above all that sits a statewide ceiling - no limit over 70 mph may be established anywhere in Maryland.",
        trap:
          "Twenty-five is the residential default in several neighbouring states, but not in Maryland. The figure here is 30.",
        excerptKey: "speed-30-business",
        sourceLabel: "Maryland Transportation Article 21-801.1",
        sourceUrl: gtr("21-801.1"),
        commonlyMissed: true,
      },
      {
        id: "md_s2_09",
        topic: "parking",
        question:
          "How close to a crosswalk at an intersection may you park in Maryland, outside Baltimore City?",
        choices: ["No closer than 10 feet", "No closer than 15 feet", "No closer than 30 feet", "No closer than 20 feet"],
        correctIndex: 3,
        explanation:
          "Twenty feet from a crosswalk at an intersection - and the statute expressly carves Baltimore City out of that subsection, so the state figure does not apply there.",
        context:
          "The reason for the distance is sightlines: a car parked hard against the crossing hides a pedestrian stepping off the kerb from a driver who is already turning. Related distances stack around the same junction - 30 feet on the approach to a stop sign, yield sign, flashing signal or traffic signal at the roadside, and no stopping, standing or parking in the intersection or on the crosswalk itself at all.",
        trap:
          "The Baltimore City exclusion is real and easy to miss. Within the city the state's 20-foot crosswalk rule does not apply; local rules govern instead.",
        excerptKey: "park-crosswalk-20",
        sourceLabel: "Maryland Transportation Article 21-1003",
        sourceUrl: gtr("21-1003"),
        commonlyMissed: true,
      },
      {
        id: "md_s2_10",
        topic: "signals",
        question: "A steady green arrow points left at a signalised intersection. What does it mean?",
        choices: [
          "You may turn left only after yielding to oncoming traffic",
          "You may proceed with caution in the direction of the arrow",
          "The left turn is about to be prohibited",
          "Left turns are permitted from any lane",
        ],
        correctIndex: 1,
        explanation:
          "A green arrow gives you that movement. You still proceed with caution and still yield to pedestrians and to anyone already in the intersection, but oncoming traffic is being held for you.",
        context:
          "The arrow signals form a family. Green arrow: the movement is yours. Steady yellow arrow: the permission is ending, slow and proceed with care. Steady red arrow: full stop before the stop line, crosswalk or intersection, and stay there while the arrow is red. Flashing red arrow: stop, yield to everything, then go in the direction of the arrow when clear.",
        trap:
          "A green arrow is not a green ball. The ball permits the turn but leaves oncoming traffic with priority; the arrow does not.",
        excerptKey: "green-arrow",
        sourceLabel: "Maryland Driver's Manual - Section 4.A Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "md_s2_11",
        topic: "impairment",
        question: "Where in the vehicle does Maryland's open container law apply?",
        choices: [
          "The driver's seat only",
          "Anywhere in the vehicle, including a locked boot",
          "The front seats only",
          "The passenger area - the seats and anywhere occupants can easily reach",
        ],
        correctIndex: 3,
        explanation:
          "The law covers the passenger area: the driver and passenger seats, plus anywhere someone sitting there could easily reach.",
        context:
          "\"Open container\" is broader than a drink in a hand. Any open can, bottle, container or package counts, and the manual notes that a six-pack with open, empty or missing bottles can be treated as one. The rule sits alongside Maryland's implied consent regime - driving on a road or on private property used by the public means you have already agreed to a drug or alcohol test if an officer asks.",
        trap:
          "\"It was only the passenger drinking\" is not a defence. The offence is having the open container in the passenger area at all.",
        excerptKey: "open-container",
        sourceLabel: "Maryland Driver's Manual - Section 6.A Alcohol, Drugs and Driving",
        sourceUrl: HB,
      },
      {
        id: "md_s2_12",
        topic: "signs",
        question: "What does a fluorescent yellow-green background signal in Maryland?",
        choices: [
          "Construction and maintenance work areas",
          "School, pedestrian and bicycle signs",
          "Emergency traffic incidents",
          "Recreation and cultural interest areas",
        ],
        correctIndex: 1,
        explanation:
          "The bright yellow-green is reserved for school, pedestrian and bicycle signs. The colour was chosen to be conspicuous in exactly the conditions where those users are most at risk.",
        context:
          "Maryland runs two fluorescent colours and they mean different things: yellow-green for school, pedestrian and bicycle signs, and fluorescent pink for emergency traffic incidents. Ordinary orange still means construction and maintenance. Getting these three apart is worth marks, because they sit next to each other on the manual's colour list.",
        trap:
          "Fluorescent pink is not a work-zone colour. It marks emergency incidents, and it is a separate entry in the manual.",
        excerptKey: "sign-color-yellowgreen",
        sourceLabel: "Maryland Driver's Manual - Section 4.B Colors & Shapes",
        sourceUrl: HB,
      },
      {
        id: "md_s2_13",
        topic: "rules",
        question: "How close to an intersection or railroad crossing does Maryland prohibit passing?",
        choices: [
          "Within 100 feet of it, or while crossing it",
          "Within 50 feet of it",
          "Within 200 feet of it",
          "Passing near intersections is allowed if the way is clear",
        ],
        correctIndex: 0,
        explanation:
          "One hundred feet, plus the crossing itself. The manual lists it among the places you may not pass at all.",
        context:
          "The no-passing list is worth learning as a block: in a marked no-passing zone, where the solid yellow line is on your side, where there are double solid yellow lines, when passing would interfere with other traffic, approaching the crest of a hill or a curve where you cannot see ahead, within 100 feet of a bridge, elevated road or tunnel when your view is obstructed, within 100 feet of an intersection or railroad crossing, and on the shoulder in either direction.",
        trap:
          "The bridge and tunnel version of the 100-foot rule carries an extra condition - it applies when your view is obstructed. The intersection version does not.",
        excerptKey: "no-passing-100-feet",
        sourceLabel: "Maryland Driver's Manual - Section 3.I Passing",
        sourceUrl: HB,
      },
      {
        id: "md_s2_14",
        topic: "safety",
        question:
          "Apart from the wipers rule, what triggers the legal requirement to switch on your headlights in Maryland?",
        choices: [
          "Half an hour after sunset until half an hour before sunrise",
          "Whenever there is not enough light to see clearly 1,000 feet ahead",
          "Whenever visibility drops below 500 feet",
          "Whenever streetlights are lit",
        ],
        correctIndex: 1,
        explanation:
          "Maryland's trigger is a distance you can see, not a time on the clock: if you cannot clearly see 1,000 feet in front of the vehicle, the headlights must be on.",
        context:
          "That distance rule and the wipers rule are the two headlight duties the manual states. The beam rules sit on top: low beams for normal driving and for fog, rain or snow; high beams on unlit roads, but dipped at least 500 feet before an oncoming vehicle and dipped when following within 300 feet. Low beams also go on when you are approaching a bicycle at night.",
        trap:
          "Five hundred feet and 300 feet are Maryland numbers too - but they govern when to dip the high beams, not when to turn the lights on.",
        excerptKey: "headlights-1000",
        sourceLabel: "Maryland Driver's Manual - Section 5.A Driving in Reduced Visibility",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "md_s2_15",
        topic: "sharing",
        question:
          "A large truck ahead of you at an intersection swings out to the left. What is the likely explanation?",
        choices: [
          "The driver is changing lanes and you may pass on the right",
          "The truck is making a U-turn",
          "The truck is setting up for a right turn and needs the extra space",
          "The load has shifted and the driver is correcting",
        ],
        correctIndex: 2,
        explanation:
          "Trucks swing wide to get round a right-hand corner. The move to the left is the start of a right turn, not a lane change.",
        context:
          "Squeezing up the right side of a turning truck puts you between the trailer and the kerb, which is the classic way this crash happens. Trucks also carry four large blind spots - both sides, directly behind, and in front - and the right-hand one runs the length of the trailer and reaches out three lanes. The rule of thumb the manual gives is that if you cannot see the driver's face in their mirror, they cannot see you.",
        trap:
          "Reading the leftward swing as a lane change and diving up the inside is the exact mistake the manual warns about.",
        excerptKey: "truck-wide-turns",
        sourceLabel: "Maryland Driver's Manual - Section 7.C Large Trucks and Buses",
        sourceUrl: HB,
      },
      {
        id: "md_s2_16",
        topic: "emergencies",
        question:
          "You are in a crash where someone has been injured. What does the manual tell you to do about the vehicles?",
        choices: [
          "Leave them where they are and call 911",
          "Move them to the shoulder before calling for help",
          "Move them only if traffic is backing up",
          "Push them clear of the roadway, then wait in your car",
        ],
        correctIndex: 0,
        explanation:
          "When there are injuries, you stay at the scene, call 911 immediately, and do not move the vehicles.",
        context:
          "The instruction flips when nobody is hurt and the vehicle still drives: then you move it off the road as close as possible to where the crash happened, and exchange details. Maryland says you must always call the police when someone is injured, a vehicle cannot be moved, a driver seems impaired or unlicensed, a driver tries to leave without giving details, or public property is damaged.",
        trap:
          "The \"move it off the road\" advice belongs to the no-injury case. With an injury, moving the vehicles can destroy evidence and worsen harm.",
        excerptKey: "crash-injury-actions",
        sourceLabel: "Maryland Driver's Manual - Section 8.A Crashes",
        sourceUrl: HB,
      },
      {
        id: "md_s2_17",
        topic: "rightOfWay",
        question:
          "A pedestrian is crossing at an unmarked crosswalk at an intersection with no traffic signal. What must you do?",
        choices: [
          "Slow down and pass behind them",
          "Sound your horn and proceed carefully",
          "Stop and let them cross",
          "Proceed, since the crosswalk is unmarked",
        ],
        correctIndex: 2,
        explanation:
          "Maryland requires you to stop, and the duty applies to marked and unmarked crosswalks alike.",
        context:
          "Most intersections have a crosswalk whether or not paint says so. State law puts the duty as coming to a stop when a pedestrian in a crosswalk is on your half of the road or approaching from an adjacent lane on the other half - so it can bite before they reach your lane. And you may not overtake a vehicle that has stopped at a crosswalk to let someone cross.",
        trap:
          "\"No paint, no crosswalk\" is wrong in Maryland. The unmarked crossing at an intersection carries the same duty as a striped one.",
        excerptKey: "ped-stop-no-signal",
        sourceLabel: "Maryland Driver's Manual - Section 7.A Pedestrian Right-of-Way",
        sourceUrl: HB,
      },
      {
        id: "md_s2_18",
        topic: "signals",
        question: "A steady yellow \"X\" appears over the lane you are using. What should you do?",
        choices: [
          "Move out of the lane as soon as you safely can",
          "Stop in the lane and wait for a green arrow",
          "Continue - the lane stays open until the X turns red",
          "Use the lane only to turn left",
        ],
        correctIndex: 0,
        explanation:
          "The steady yellow X is a warning that the lane is closing to you. You leave it as soon as you can do so safely.",
        context:
          "These signals run reversible lanes, which flow one way at the morning peak and the other in the evening. Green arrow means the lane is yours; red X means never drive in it; steady yellow X means clear it when safe; flashing yellow X or two-way left-turn arrows mean the lane is for left turns and you will be sharing it with drivers turning from the opposite direction.",
        trap:
          "Stopping in the lane is the worst response. The instruction is to move out of it, not to hold position.",
        excerptKey: "yellow-x",
        sourceLabel: "Maryland Driver's Manual - Section 4.A Lane Use Signals",
        sourceUrl: HB,
      },
      {
        id: "md_s2_19",
        topic: "rules",
        question: "You are making a legal U-turn. Which lane should you finish in?",
        choices: [
          "The lane nearest the centre line, so you can accelerate",
          "Any lane, provided you signal",
          "The outside or right-hand lane of the opposite direction",
          "The shoulder, until you have gathered speed",
        ],
        correctIndex: 2,
        explanation:
          "Maryland tells you to complete a U-turn into the outside - the right-hand - lane of the opposite direction, not the inside one.",
        context:
          "The manual is cautious about U-turns generally: check first that they are permitted where you are, signal left, stop and yield to oncoming traffic, and only turn when the way is genuinely clear. Sweeping into the far lane keeps you out of the path of anyone else turning and out of the fast lane at low speed.",
        trap:
          "Finishing in the inside lane feels natural because it is the shorter arc, but Maryland asks for the outside lane.",
        excerptKey: "uturn-rule",
        sourceLabel: "Maryland Driver's Manual - Section 3.H U-turn",
        sourceUrl: HB,
      },
      {
        id: "md_s2_20",
        topic: "licensing",
        question: "You are 17 and hold a Maryland provisional licence. What phone use is allowed while driving?",
        choices: [
          "Hands-free calls only",
          "Any call, provided you keep it short",
          "Calls but not texts",
          "None at all, except a 911 emergency call",
        ],
        correctIndex: 3,
        explanation:
          "Under 18, Maryland bans all phone use while driving, hands-free included. The single exception is calling 911 in an emergency.",
        context:
          "The rule stacks with the general ban on holding a phone that applies to every driver. Learner permit and provisional holders face the broader wireless-device restriction as an express licence condition, and MVA states that a phone or device violation can cost a provisional driver 90 days of suspension. State law separately bars handheld use by permit and provisional holders aged 18 or over.",
        trap:
          "Hands-free is legal for most Maryland drivers, which is exactly why it catches people out here. For an under-18 driver it is still prohibited.",
        excerptKey: "under18-phone",
        sourceLabel: "Maryland Driver's Manual - Section 6.C Distracted Driving",
        sourceUrl: HB,
      },
      {
        id: "md_s2_21",
        topic: "signs",
        question: "What does a yellow background usually indicate on a Maryland traffic sign?",
        choices: [
          "A general warning of what to expect ahead",
          "A regulatory instruction you must obey",
          "A destination or distance",
          "A service such as fuel or lodging",
        ],
        correctIndex: 0,
        explanation:
          "Yellow is the general warning colour: something ahead needs your attention, and you may need to slow or change position.",
        context:
          "Set it against the others: white carries regulatory information like speed limits and keep-right instructions; green gives destinations, distances and directions; blue marks services such as food, fuel and rest areas; brown marks recreation and cultural sites; and black is used for one-way signs and changeable message signs. Reading the colour first narrows the meaning before you read the words.",
        trap:
          "Warnings and regulations are different categories. A yellow sign tells you what is coming; a white one tells you what you must do.",
        excerptKey: "sign-color-yellow",
        sourceLabel: "Maryland Driver's Manual - Section 4.B Colors & Shapes",
        sourceUrl: HB,
      },
      {
        id: "md_s2_22",
        topic: "parking",
        question: "You are parking along a road with a kerb. Where should the vehicle end up?",
        choices: [
          "A foot or so out from the kerb, to protect the wheels",
          "As far from traffic as possible, and as close to the kerb as possible",
          "Straddling the kerb if the road is narrow",
          "Anywhere the vehicle fits, provided you are not blocking a driveway",
        ],
        correctIndex: 1,
        explanation:
          "Get as far from moving traffic as you can, which on a kerbed road means as close to the kerb as you can. A vehicle sticking out into the lane is the hazard the rule exists to prevent.",
        context:
          "Maryland makes you responsible for making sure a parked vehicle is not a hazard. The routine that follows is park where parking is intended, set the parking brake, leave the car in gear or in park, check mirrors and traffic before opening the door, close it promptly and take the keys. State law adds that you may not park on a sidewalk, in an intersection, on a crosswalk, on a bridge or in a tunnel.",
        trap:
          "Leaving a gap for the wheels is not a Maryland rule. The instruction runs the other way - get in as close as you can.",
        excerptKey: "parking-curb",
        sourceLabel: "Maryland Driver's Manual - Section 3.J General Parking Rules",
        sourceUrl: HB,
      },
      {
        id: "md_s2_23",
        topic: "safety",
        question: "The back of your car starts to slide out on a slippery road. What is the first thing to do?",
        choices: [
          "Brake hard to scrub off speed",
          "Steer sharply the opposite way",
          "Release the pedal you are using and steer in the direction you are skidding",
          "Pull the parking brake to straighten the car",
        ],
        correctIndex: 2,
        explanation:
          "Come off whichever pedal you are on - gas or brake - and steer where the car is sliding, looking towards where you want to end up. Brake only once the tyres are gripping again.",
        context:
          "Skids start when traction drops, and Maryland lists the usual culprits: sand, gravel, uneven surfaces, oil spills, water and simply too much speed. A gentle touch of throttle can help when it is the rear wheels that have let go. On a car without ABS the manual tells you to pump the brakes rather than stamp on them, precisely to avoid provoking a skid in the first place.",
        trap:
          "Braking mid-skid is the instinctive move and the one that keeps the car sliding. The pedal comes up first, not down.",
        excerptKey: "skid-steer",
        sourceLabel: "Maryland Driver's Manual - Section 5.E Skidding",
        sourceUrl: HB,
      },
      {
        id: "md_s2_24",
        topic: "sharing",
        question:
          "A cyclist is riding in the middle of the travel lane on a narrow road, well below the speed of traffic. Is that lawful in Maryland?",
        choices: [
          "No - cyclists must keep to the shoulder at all times",
          "Only if there is no shoulder available",
          "Only where a shared-lane marking is painted on the road",
          "Yes - a cyclist may use the full lane where it is too narrow to be passed safely",
        ],
        correctIndex: 3,
        explanation:
          "Maryland allows a cyclist to take the full lane, even at a speed well below the traffic around them, where the lane is too narrow for a vehicle to pass safely while they stay in it.",
        context:
          "Bicycles are vehicles under Maryland law, with the right to use the road and the duty to obey signals. Riders move into the lane for reasons that are not obvious from a car - a narrow road, potholes, debris, parked cars whose doors may open. When you enter or cross a bike lane or shoulder you yield to riders in it, and you yield to a cyclist going straight when you are the one turning.",
        trap:
          "Position in the lane is not evidence a cyclist is riding badly. Centre-lane riding is often the safest and lawful choice on a narrow road.",
        excerptKey: "bicycle-full-lane",
        sourceLabel: "Maryland Driver's Manual - Section 7.F Bicycles",
        sourceUrl: HB,
      },
      {
        id: "md_s2_25",
        topic: "speed",
        question:
          "A residential street is divided by a landscaped median and carries no speed limit sign. What is the maximum lawful speed?",
        choices: ["25 mph", "30 mph", "35 mph", "45 mph"],
        correctIndex: 2,
        explanation:
          "A divided highway in a residential district defaults to 35 mph in Maryland - five higher than the same street would be without the median.",
        context:
          "Maryland is unusual in splitting the residential default by road type. Undivided residential roads and all roads in a business district default to 30 mph; divided residential roads default to 35. Outside those districts the split continues: 50 mph on undivided highways and 55 on divided ones, with no non-interstate, non-expressway road permitted above 55.",
        trap:
          "The median is the whole difference between 30 and 35 here. Same neighbourhood, same houses, different statutory limit.",
        excerptKey: "speed-35-divided-residential",
        sourceLabel: "Maryland Transportation Article 21-801.1",
        sourceUrl: gtr("21-801.1"),
        commonlyMissed: true,
      },
      {
        id: "md_s2_26",
        topic: "impairment",
        question:
          "Under Maryland's implied consent law, when did you agree to take a drug or alcohol test if an officer asks?",
        choices: [
          "When you signed your licence application, but only for alcohol",
          "Only after a crash involving injury",
          "You never do - consent must be given at the roadside",
          "The moment you drove or attempted to drive on a road or on private property used by the public",
        ],
        correctIndex: 3,
        explanation:
          "Consent is implied by the act of driving. It covers roads and private property used by the public, and it applies to drug testing as well as alcohol.",
        context:
          "Refusing carries its own consequence: if an officer files a certified statement that you refused, MVA suspends your licence regardless of what a test might have shown. Where an officer suspects drug impairment, a drug recognition expert may request a blood test. MVA will also suspend for a .08 alcohol reading or for driving with drugs in your system.",
        trap:
          "Refusing is not a way to avoid a penalty. The suspension for refusal is independent of any prosecution for impaired driving.",
        excerptKey: "implied-consent",
        sourceLabel: "Maryland Driver's Manual - Section 9.B Implied Consent",
        sourceUrl: HB,
      },
      {
        id: "md_s2_27",
        topic: "rules",
        question: "You are in a multilane traffic circle and want to take the second exit. What does Maryland tell you to do?",
        choices: [
          "Signal left on entry and hold the inside lane throughout",
          "Change to the inside lane before your exit and signal right",
          "Signal right and move to the outside lane after passing the exit before yours",
          "Stay in whichever lane you entered and signal only as you leave",
        ],
        correctIndex: 2,
        explanation:
          "You pass the exit before the one you want, and only then signal right and move to the outside lane ready to leave.",
        context:
          "The rest of the circle routine: slow on approach, keep to the right of the central island, watch for and yield to pedestrians in the crosswalk, then wait at the yield line for a gap - watching for vehicles leaving the circle as well as those going round. In a multilane circle you hold your lane rather than drifting across it.",
        trap:
          "Signalling right as you enter tells circulating drivers you are leaving at the first exit. The signal belongs after the exit before yours.",
        excerptKey: "roundabout-exit",
        sourceLabel: "Maryland Driver's Manual - Section 5.I Traffic Circles (Roundabouts)",
        sourceUrl: HB,
      },
      {
        id: "md_s2_28",
        topic: "rightOfWay",
        question:
          "You have a green light and are turning right. A pedestrian steps into the crosswalk you are turning across. What must you do?",
        choices: [
          "Complete the turn first, since your light is green",
          "Sound the horn to warn them and continue",
          "Turn behind them if there is room",
          "Yield to the pedestrian",
        ],
        correctIndex: 3,
        explanation:
          "A green light lets you turn; it does not hand you the crosswalk. Maryland states the duty to yield to pedestrians when turning on green, and again when turning on red after a stop.",
        context:
          "Pedestrians have the right of way at street crossings, subject to obeying the signals themselves. The manual asks for extra care around people who are deaf, blind or mobility impaired, who may not hear you and may need longer to cross. You also may not pass a vehicle that has stopped at a crosswalk, because whatever it stopped for is still there.",
        trap:
          "Green is permission to proceed, not priority over people already crossing legally.",
        excerptKey: "yield-turning-green",
        sourceLabel: "Maryland Driver's Manual - Section 7.A Pedestrian Right-of-Way",
        sourceUrl: HB,
      },
      {
        id: "md_s2_29",
        topic: "signals",
        question:
          "You reach an intersection where the traffic signal has gone completely dark. What does Maryland require?",
        choices: [
          "Stop at the stop line, yield, and stay stopped until it is safe to go through",
          "Treat the main road as having priority and yield to it",
          "Proceed at reduced speed without stopping",
          "Wait for a police officer to direct traffic",
        ],
        correctIndex: 0,
        explanation:
          "A dead signal is treated as a stop: stop at the line, or before the crosswalk, or before the intersection if there is neither, then yield and go only when it is genuinely safe.",
        context:
          "The manual sets the order of stopping points explicitly, because it is the same order used for a stop sign and for a steady red. Traffic control devices bind everyone; the only things that override them are a police officer or other emergency personnel, or a uniformed school crossing guard directing traffic near a school.",
        trap:
          "Assuming the bigger road keeps priority is the common failure. Every approach stops at a dead signal.",
        excerptKey: "signal-not-working",
        sourceLabel: "Maryland Driver's Manual - Section 4 Signs, Signals and Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "md_s2_30",
        topic: "emergencies",
        question:
          "You approach a vehicle stopped on the shoulder with its hazard lights flashing. What does Maryland's Move Over law require?",
        choices: [
          "Nothing, unless it is a police or fire vehicle",
          "Move over to a lane that is not next to it, or slow to a safe speed if you cannot",
          "Stop until you are waved past",
          "Sound your horn and maintain speed",
        ],
        correctIndex: 1,
        explanation:
          "Maryland's law is deliberately broad: it covers any vehicle stopped, standing or parked on the road with its lights flashing. You change lanes away from it, and if that is not safe or possible, you slow to a speed that is safe for the conditions.",
        context:
          "The statute lists the vehicles it protects - emergency vehicles, tow trucks, service and waste collection vehicles, commercial vehicles giving roadside assistance - and separately covers any vehicle displaying hazard warning lights, flares, cones or other caution signals. The penalties escalate: $110 and one point, $150 and three points if it causes a crash, $750 and three points if it causes death or serious injury.",
        trap:
          "It is not an emergency-vehicles-only rule in Maryland. An ordinary car on the shoulder with its hazards on triggers the same duty.",
        excerptKey: "moveover-md",
        sourceLabel: "Maryland Driver's Manual - Section 8.D Move Over Law",
        sourceUrl: HB,
        commonlyMissed: true,
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Real Test Difficulty",
    difficulty: "medium",
    description:
      "Exam-level questions across the whole manual, including the numbers Maryland keeps in the statute book rather than the handbook.",
    questions: [
      {
        id: "md_s3_01",
        topic: "rules",
        question:
          "You are approaching a bridge and your view ahead is blocked. How close may you get before passing is prohibited?",
        choices: [
          "There is no distance rule for bridges",
          "Within 50 feet of it",
          "Within 200 feet of it",
          "Within 100 feet of it",
        ],
        correctIndex: 3,
        explanation:
          "One hundred feet, when your view is obstructed. Maryland applies the same figure to an elevated road or a tunnel.",
        context:
          "Two of Maryland's no-passing rules use 100 feet and they are worded differently. The bridge, elevated road and tunnel rule bites when your view is obstructed as you come within 100 feet. The intersection and railroad crossing rule has no such qualifier - it prohibits passing within 100 feet, or while crossing, full stop.",
        trap:
          "The obstructed-view condition belongs to the bridge and tunnel rule only. Do not read it across to intersections.",
        excerptKey: "no-passing-bridge",
        sourceLabel: "Maryland Driver's Manual - Section 3.I Passing",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "md_s3_02",
        topic: "signals",
        question:
          "A steady red arrow points left. Traffic going straight has a green ball. What may you do?",
        choices: [
          "Turn left after yielding to oncoming traffic",
          "Turn left after coming to a complete stop",
          "Stop and remain stopped for as long as the arrow is red",
          "Move into the intersection and wait to turn",
        ],
        correctIndex: 2,
        explanation:
          "A red arrow closes that movement completely. You stop before the stop line, crosswalk or intersection and stay put while the arrow is red - there is no turn-on-red for a red arrow.",
        context:
          "The arrow signals are the exception to the red-light turn permissions. A steady red ball allows a right turn, or a left from one-way to one-way, after a full stop; a steady red arrow allows nothing in that direction. A flashing red arrow does allow you to proceed - stop, yield to everything, then go in the direction of the arrow.",
        trap:
          "The right-on-red habit does not transfer to arrows. Steady red arrow means wait, however clear the road looks.",
        excerptKey: "red-arrow",
        sourceLabel: "Maryland Driver's Manual - Section 4.A Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "md_s3_03",
        topic: "signs",
        question: "A round yellow sign appears at the roadside. What is it warning you about?",
        choices: [
          "A railroad crossing ahead",
          "A traffic circle ahead",
          "A weight-restricted bridge",
          "A hidden driveway",
        ],
        correctIndex: 0,
        explanation:
          "The circle is Maryland's railroad warning shape. It tells you a crossing is coming; the crossbuck at the tracks marks the crossing itself.",
        context:
          "At the crossing, Maryland asks you to expect buses, school buses and hazardous-materials trucks to stop even when nothing is coming, to look both ways because trains can come from either direction, and never to start across unless you can get completely clear before a train arrives. Down gates or flashing lights mean the road is closed until they clear.",
        trap:
          "The traffic circle warning is a diamond in Maryland, not a circle. Round means railroad.",
        excerptKey: "shape-round-railroad",
        sourceLabel: "Maryland Driver's Manual - Section 4.B Colors & Shapes",
        sourceUrl: HB,
      },
      {
        id: "md_s3_04",
        topic: "rightOfWay",
        question:
          "Two cars reach an unmarked intersection, but one arrived clearly first. Who has the right of way?",
        choices: [
          "The driver on the right, always",
          "The driver who is at or arrived before the other",
          "The driver on the larger road",
          "The driver going straight ahead",
        ],
        correctIndex: 1,
        explanation:
          "Order of arrival comes first in Maryland's list. The right-hand rule is the tie-breaker, and it only applies when you genuinely arrive together.",
        context:
          "The manual sets out the situations where you yield: to the driver already at or arriving before you, to the driver on your right on a simultaneous arrival, to the driver on your right at a four-way stop, to anyone still in the intersection, to through traffic when you stop at a T intersection, to oncoming traffic when turning left, and to traffic on the road you are joining from a driveway or a ramp.",
        trap:
          "Reaching for the right-hand rule first is the common error. It resolves ties, not queues.",
        excerptKey: "row-arrives-first",
        sourceLabel: "Maryland Driver's Manual - Section 3.B Right-of-Way",
        sourceUrl: HB,
      },
      {
        id: "md_s3_05",
        topic: "speed",
        question: "What is Maryland's statewide school zone speed limit?",
        choices: [
          "There is none - the limit is whatever the local authority has posted",
          "15 mph during school hours, everywhere in the state",
          "20 mph when children are present",
          "25 mph on school days",
        ],
        correctIndex: 0,
        explanation:
          "Maryland sets no statewide school-zone number. The manual never gives one, and state law leaves it to counties and municipalities, which may reduce the limit to as low as 15 mph during school hours in a zone they designate and sign.",
        context:
          "This is a real difference from neighbouring states, several of which set a blanket 15, 20 or 25 mph school zone limit in the vehicle code. In Maryland the sign is the rule, and the hours on it matter. What the manual does say is that you should slow in school zones and residential areas because young cyclists and pedestrians are unpredictable and easy to miss.",
        trap:
          "Picking a plausible number here is the trap. Maryland's answer is that there is no statewide figure - read the sign.",
        excerptKey: "speed-school-zone-15",
        sourceLabel: "Maryland Transportation Article 21-803",
        sourceUrl: gtr("21-803"),
        commonlyMissed: true,
      },
      {
        id: "md_s3_06",
        topic: "safety",
        question: "What causes black ice, and where should you expect it first?",
        choices: [
          "Freezing rain, mainly on gravel surfaces",
          "Snow and ice melting and refreezing, and it is hardest to see on asphalt",
          "Road salt reacting with snow, mainly at intersections",
          "Condensation from vehicle exhaust, mainly in tunnels",
        ],
        correctIndex: 1,
        explanation:
          "Black ice forms when melted snow or ice refreezes, and a thin layer of it on a blacktop road can be very hard or impossible to see.",
        context:
          "Winter roads are not uniform: sun, shade, salt coverage and traffic all change the surface metre by metre, so the manual tells you to watch ahead for danger spots. Ramps and bridges freeze before ordinary road, and ploughed roads can refreeze at night or hold icy patches where daytime meltwater ran. Four-wheel drive gives you more control but does not stop the car sliding.",
        trap:
          "Four-wheel drive is not an answer to ice. The manual is explicit that those vehicles slide too.",
        excerptKey: "black-ice",
        sourceLabel: "Maryland Driver's Manual - Section 5.D Driving in Inclement Weather",
        sourceUrl: HB,
      },
      {
        id: "md_s3_07",
        topic: "sharing",
        question:
          "You are turning right and a cyclist is going straight through the same intersection. Who yields?",
        choices: [
          "The cyclist, because a motor vehicle is larger",
          "Whoever entered the intersection first",
          "You - a bicyclist has the right of way when a motor vehicle is turning",
          "Neither, unless a bike lane is marked",
        ],
        correctIndex: 2,
        explanation:
          "Maryland gives the cyclist the right of way when a motor vehicle is turning. Treat a bike going straight the way you would treat a car going straight.",
        context:
          "The turning conflict is where most car-bicycle crashes happen, so the manual is specific: assume a rider is going straight unless they signal otherwise, never make a right turn from a through lane immediately after passing a bike on the shoulder or in a bike lane, move as far right as you can within the bike lane or shoulder before starting a right turn, and never turn left directly in front of a rider.",
        trap:
          "The absence of a painted bike lane changes nothing. The duty to yield to a cyclist going straight applies either way.",
        excerptKey: "bicycle-row-turn",
        sourceLabel: "Maryland Driver's Manual - Section 7.F Bicycles",
        sourceUrl: HB,
      },
      {
        id: "md_s3_08",
        topic: "parking",
        question:
          "How close to a stop sign at the side of the road may you park on the approach to it?",
        choices: ["No closer than 15 feet", "No closer than 30 feet", "No closer than 20 feet", "No closer than 50 feet"],
        correctIndex: 1,
        explanation:
          "Thirty feet on the approach. The same distance covers a yield sign, a flashing signal or a traffic control signal at the side of the roadway.",
        context:
          "The point is that a parked vehicle must not hide the control from the driver approaching it. Maryland's other distances around a junction are 20 feet from a crosswalk at an intersection - outside Baltimore City - and no stopping at all in the intersection or on the crosswalk. At railroad crossings the figure jumps to 50 feet from the nearest rail.",
        trap:
          "Thirty feet applies to the approach side. The rule is written about the direction a driver is coming from, not simple radius.",
        excerptKey: "park-stop-sign-30",
        sourceLabel: "Maryland Transportation Article 21-1003",
        sourceUrl: gtr("21-1003"),
      },
      {
        id: "md_s3_09",
        topic: "licensing",
        question: "What is the minimum age to apply for a Maryland learner's instructional permit?",
        choices: ["15 years", "15 years and 6 months", "15 years and 9 months", "16 years"],
        correctIndex: 2,
        explanation:
          "Fifteen years and nine months. Applicants under 16 must also produce a completed school attendance certification form.",
        context:
          "The Type 1 permit is for anyone who has never held a noncommercial driver's licence and lasts up to two years. Anyone under 18 needs a parent or legal guardian to co-sign the application, and that co-signer can later cancel the licence in writing - in which case it stays cancelled until the driver turns 18 unless someone else co-signs afresh.",
        trap:
          "Sixteen is the familiar figure from other states and the wrong one here. Maryland's threshold is three months earlier.",
        excerptKey: "permit-min-age",
        sourceLabel: "MDOT MVA - Learner's Permit",
        sourceUrl: PERMIT,
      },
      {
        id: "md_s3_10",
        topic: "signals",
        question: "A signal at an intersection is flashing yellow. What does Maryland require?",
        choices: [
          "Stop, then proceed when clear",
          "Treat it as a four-way stop",
          "Stop only if a vehicle is approaching from the side",
          "Slow down and proceed with caution",
        ],
        correctIndex: 3,
        explanation:
          "Flashing yellow means slow down and proceed with caution. There is no obligation to stop.",
        context:
          "Its counterpart, the flashing red, does require a full stop and a yield to everything before you move. The pair usually appear together at the same junction - flashing yellow for the main road, flashing red for the side road. A completely dark signal is not the same as either: every approach stops.",
        trap:
          "Flashing yellow is not a warning to stop. Confusing it with flashing red is one of the most common signal errors.",
        excerptKey: "flashing-yellow",
        sourceLabel: "Maryland Driver's Manual - Section 4.A Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "md_s3_11",
        topic: "rules",
        question:
          "Maryland law requires a turn signal to run continuously for how far before you turn?",
        choices: [
          "At least the last 100 feet",
          "At least the last 50 feet",
          "At least three seconds",
          "At least the last 200 feet",
        ],
        correctIndex: 0,
        explanation:
          "One hundred feet of continuous signal before the turn. The manual only tells you to signal before you reach the turn; the distance is in the Transportation Article.",
        context:
          "The same section adds two things worth knowing: you may not turn at all if the movement cannot be made with reasonable safety, and you must signal before stopping or suddenly slowing if a driver behind could be affected and you have the chance. It also prohibits flashing your indicators as a courtesy \"do pass\" signal to a driver behind you.",
        trap:
          "A three-second rule is the common guess because it sounds like the following-distance rule. Maryland's statute uses distance, not time.",
        excerptKey: "signal-100-feet",
        sourceLabel: "Maryland Transportation Article 21-604",
        sourceUrl: gtr("21-604"),
        commonlyMissed: true,
      },
      {
        id: "md_s3_12",
        topic: "impairment",
        question:
          "An officer asks you to take a breath test and you refuse. What happens to your licence?",
        choices: [
          "Nothing, unless you are later convicted",
          "A warning letter, then suspension on a second refusal",
          "Points are added but the licence is untouched",
          "MVA suspends it once the officer certifies the refusal",
        ],
        correctIndex: 3,
        explanation:
          "A certified statement of refusal is enough on its own: MVA suspends the licence. The consequence does not wait for a criminal case and does not depend on one.",
        context:
          "Refusal sits inside Maryland's implied consent scheme - by driving, you have already agreed to testing. MVA suspends for a reading of .08 or higher, and it will also suspend a driver found to be impaired by drugs. Where drug impairment is suspected, a drug recognition expert may ask for a blood test.",
        trap:
          "Refusing does not make the problem go away. It converts a possible test result into a certain administrative suspension.",
        excerptKey: "refusal-suspension",
        sourceLabel: "Maryland Driver's Manual - Section 9.B Implied Consent",
        sourceUrl: HB,
      },
      {
        id: "md_s3_13",
        topic: "signs",
        question: "What does a blue background on a highway sign indicate?",
        choices: [
          "A destination and the distance to it",
          "Services such as food, fuel and rest areas",
          "A recreation or cultural interest area",
          "A regulatory instruction about lane use",
        ],
        correctIndex: 1,
        explanation:
          "Blue is the services colour: food, fuel, lodging, hospitals, rest areas and similar facilities you can reach from an exit.",
        context:
          "Guide signage splits by colour. Green carries destinations, distances and directions; blue carries services; brown carries recreation and cultural sites. Overhead lane use signs tell you which lane leads where, route markers identify the road number and type, and mile markers appear every mile on interstates so you can tell a tow truck or an ambulance exactly where you are.",
        trap:
          "Green and blue are easy to swap. Green tells you where you are going; blue tells you what is available when you get off.",
        excerptKey: "sign-color-blue",
        sourceLabel: "Maryland Driver's Manual - Section 4.B Colors & Shapes",
        sourceUrl: HB,
      },
      {
        id: "md_s3_14",
        topic: "emergencies",
        question:
          "Your car breaks down beside a triangular painted area where an exit ramp splits from the highway. What does the manual say?",
        choices: [
          "It is the safest place to wait, since traffic has already committed to a lane",
          "You may stop there for up to fifteen minutes",
          "Stop there only if your hazard lights are working",
          "Never stop or park in those triangular painted zones",
        ],
        correctIndex: 3,
        explanation:
          "Those painted triangles at ramp splits are off limits for stopping or parking. Traffic crosses them at speed from two directions.",
        context:
          "Maryland's roadside emergency advice is to get as far from live traffic as you can - to the shoulder, or better still to an off-ramp or a car park, even if that means driving on a flat tyre and ruining the rim. If you can stay in the vehicle, stay buckled and face forward. If you cannot, get well away from the road, behind an embankment, barrier or guardrail, and face oncoming traffic.",
        trap:
          "The gore area looks like a safe pocket of empty tarmac. It is the one piece of the roadside Maryland names as never acceptable.",
        excerptKey: "roadside-gore",
        sourceLabel: "Maryland Driver's Manual - Section 8.B Roadside Emergencies",
        sourceUrl: HB,
      },
      {
        id: "md_s3_15",
        topic: "rightOfWay",
        question:
          "A pedestrian is crossing a four-lane undivided road in a crosswalk. They are in the far lane on the other half of the road, approaching your side. What does Maryland law require of you?",
        choices: [
          "Come to a stop - the duty applies once they are approaching from an adjacent lane on the other half",
          "Continue, since they are not yet on your half of the road",
          "Slow down but keep moving until they reach your lane",
          "Stop only if they make eye contact with you",
        ],
        correctIndex: 0,
        explanation:
          "Maryland's crosswalk statute reaches further than most: you must stop when the pedestrian is on your half of the roadway or approaching from an adjacent lane on the other half. Waiting until they step into your lane is too late.",
        context:
          "The manual states the duty more simply - stop for pedestrians in a marked or unmarked crosswalk where there is no signal. The statute adds the geometry, and adds that a driver behind may not overtake and pass a vehicle that has stopped to let someone cross. Causing a crash by breaching either rule carries jail time or a fine of up to $1,000.",
        trap:
          "\"They are not in my lane yet\" is exactly the reasoning the statute forecloses. The adjacent lane on the other half counts.",
        excerptKey: "ped-must-stop",
        sourceLabel: "Maryland Transportation Article 21-502",
        sourceUrl: gtr("21-502"),
        commonlyMissed: true,
      },
      {
        id: "md_s3_16",
        topic: "rules",
        question: "What does a single solid white line between two lanes going the same way mean?",
        choices: [
          "Lane changes are forbidden",
          "The lanes carry traffic in opposite directions",
          "The lane to your right is reserved for buses",
          "Lane changing is discouraged, though the line also marks the right edge of the road",
        ],
        correctIndex: 3,
        explanation:
          "A single solid white discourages lane changes rather than forbidding them. The same marking is used for the right-hand edge of the roadway.",
        context:
          "White separates traffic going the same way. Broken white means crossing between lanes is permitted; single solid white discourages it; double solid white forbids it and is also used between general lanes and HOV lanes. A dotted line, white or yellow, simply carries lane lines through an intersection so drivers stay inside their lane while crossing.",
        trap:
          "Double solid white is the one that prohibits lane changes. A single solid is the softer instruction.",
        excerptKey: "solid-white",
        sourceLabel: "Maryland Driver's Manual - Section 4.C Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "md_s3_17",
        topic: "safety",
        question: "Which of these is a danger sign of drowsy driving that the manual lists?",
        choices: [
          "You do not remember driving the last few miles",
          "You find yourself checking mirrors more often",
          "Your grip on the wheel tightens",
          "You notice the radio is too loud",
        ],
        correctIndex: 0,
        explanation:
          "Losing the memory of the last few miles is on Maryland's list of drowsy-driving danger signs, and it means stopping now rather than at the next exit.",
        context:
          "The full list: eyes closing or going out of focus, trouble holding your head up, constant yawning, wandering disconnected thoughts, no memory of the last few miles, a missed exit, drifting out of your lane, and repeatedly changing speed. Maryland puts sleepiness alongside drugs and alcohol as something that slows reaction time, cuts awareness and impairs judgment. The remedy is to rest or swap drivers.",
        trap:
          "Coffee, cold air and loud music are not on the list. Maryland's answer to drowsiness is to stop driving.",
        excerptKey: "drowsy-impairs",
        sourceLabel: "Maryland Driver's Manual - Section 6.D Drowsy Driving",
        sourceUrl: HB,
      },
      {
        id: "md_s3_18",
        topic: "sharing",
        question:
          "How can you tell whether a truck driver can see you while you are alongside their trailer?",
        choices: [
          "If your headlights reflect off their mirror housing",
          "If you cannot see the driver's face in their side mirror, they cannot see you",
          "If you are within one trailer length of the cab",
          "If the truck's turn signal is visible from your seat",
        ],
        correctIndex: 1,
        explanation:
          "The mirror test works both ways: no view of the driver's face in their mirror means no view of you from the cab.",
        context:
          "Trucks and buses have four blind spots - both sides, directly behind and directly in front. The right-hand one runs the whole length of the trailer and extends out three lanes, which is why lingering there is the worst place to be. A fully loaded truck can weigh over 80,000 pounds and needs roughly the length of a football field to stop, so cutting in front and then slowing is genuinely dangerous.",
        trap:
          "Being able to see the truck is not the test. What matters is whether the driver can see you.",
        excerptKey: "truck-mirrors",
        sourceLabel: "Maryland Driver's Manual - Section 7.C Large Trucks and Buses",
        sourceUrl: HB,
      },
      {
        id: "md_s3_19",
        topic: "speed",
        question:
          "You are on an undivided rural highway outside any business or residential district, with no speed limit sign. What is the maximum lawful speed?",
        choices: ["50 mph", "45 mph", "55 mph", "60 mph"],
        correctIndex: 0,
        explanation:
          "Fifty on an undivided highway in other locations. A divided highway in the same setting defaults to 55.",
        context:
          "Maryland's statutory ladder runs 15 mph in Baltimore County alleys, 30 in a business district and on undivided residential highways, 35 on divided residential highways, 50 on undivided highways elsewhere and 55 on divided highways elsewhere. Separately, no road that is not an interstate or expressway may carry a limit above 55, and nothing anywhere in Maryland may exceed 70.",
        trap:
          "The divided/undivided split runs all the way up the ladder, not just in residential areas. Fifty and 55 are different roads, not different guesses.",
        excerptKey: "speed-50-undivided",
        sourceLabel: "Maryland Transportation Article 21-801.1",
        sourceUrl: gtr("21-801.1"),
        commonlyMissed: true,
      },
      {
        id: "md_s3_20",
        topic: "signals",
        question:
          "The light turns green but a car is still finishing its turn inside the intersection. What do you do?",
        choices: [
          "Proceed - the green light gives you priority",
          "Yield to the vehicle already in the intersection",
          "Sound your horn to hurry them through",
          "Reverse to give them room",
        ],
        correctIndex: 1,
        explanation:
          "A green light does not clear the box. Maryland requires you to yield to pedestrians and vehicles already in the intersection before you enter it.",
        context:
          "The manual describes a steady green as permission to proceed with caution after checking that no other vehicles are in the intersection. Turning on green carries the same duty towards pedestrians in the crosswalk you are crossing. The underlying principle it repeats throughout is never to assume you automatically have the right of way.",
        trap:
          "Treating green as an instruction to go rather than a permission to proceed is what causes intersection collisions seconds after the change.",
        excerptKey: "green-yield",
        sourceLabel: "Maryland Driver's Manual - Section 4.A Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "md_s3_21",
        topic: "licensing",
        question:
          "You are 17 with a Maryland provisional licence. For the first 151 days, who may ride with you unsupervised?",
        choices: [
          "Any two passengers under 18",
          "Nobody at all",
          "Passengers under 18 only if they are immediate family",
          "Any passengers, provided they are all belted",
        ],
        correctIndex: 2,
        explanation:
          "For the first 151 days you may not drive unsupervised with passengers under 18 unless they are immediate family. Passengers 18 and over are unaffected.",
        context:
          "Immediate family covers a spouse, daughter, son, stepdaughter, stepson, sister, brother, stepsister, stepbrother, or any relative living at your address. A qualified supervising driver in the car lifts the restriction. MVA states the penalty plainly: breaching the passenger restriction means a one-year suspension.",
        trap:
          "The restriction is about the passengers' age, not the number of them. One unrelated 16-year-old breaches it; three adults do not.",
        excerptKey: "provisional-passenger-151",
        sourceLabel: "Maryland Driver's Manual - Section 9.A Restrictions",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "md_s3_22",
        topic: "parking",
        question: "How far from the nearest rail of a railroad grade crossing may you park?",
        choices: ["15 feet", "20 feet", "30 feet", "50 feet"],
        correctIndex: 3,
        explanation:
          "Fifty feet from the nearest rail. It is the longest of Maryland's everyday parking distances, and for good reason.",
        context:
          "The distances in the Transportation Article are worth holding as a set: 15 feet from a fire hydrant, 20 feet from a crosswalk at an intersection outside Baltimore City, 20 feet from a fire station driveway, 30 feet on the approach to a stop sign, yield sign, flashing signal or traffic signal, and 50 feet from the nearest rail at a crossing.",
        trap:
          "Fifty feet is far longer than the other figures, which is exactly why it gets guessed down to 20 or 30.",
        excerptKey: "park-railroad-50",
        sourceLabel: "Maryland Transportation Article 21-1003",
        sourceUrl: gtr("21-1003"),
      },
      {
        id: "md_s3_23",
        topic: "rules",
        question: "Another driver begins to overtake you on a two-lane road. What does Maryland require?",
        choices: [
          "Move onto the shoulder to give them room",
          "Yield to them and do not increase your speed",
          "Maintain your position and let them find their own gap",
          "Accelerate to shorten the time they spend alongside",
        ],
        correctIndex: 1,
        explanation:
          "You yield to the overtaking vehicle and hold your speed. Speeding up stretches the pass and keeps them in the oncoming lane longer.",
        context:
          "Passing is a shared manoeuvre in the manual's telling. The overtaking driver must judge time and space, signal, leave plenty of room and see both of the passed vehicle's headlights in the mirror before pulling back in. The driver being passed carries the other half of the duty: give way, and do not accelerate.",
        trap:
          "Pulling onto the shoulder to help feels courteous but puts you on an unpredictable surface. The manual asks only that you yield and hold speed.",
        excerptKey: "passing-being-passed",
        sourceLabel: "Maryland Driver's Manual - Section 3.I Passing",
        sourceUrl: HB,
      },
      {
        id: "md_s3_24",
        topic: "signs",
        question: "Which statement about the stop sign is correct in Maryland?",
        choices: [
          "Its colour, not its shape, is what makes it unique",
          "It shares its shape with railroad crossing signs",
          "It is the only eight-sided sign you will see on the road",
          "It is the only sign that may be posted without words",
        ],
        correctIndex: 2,
        explanation:
          "The octagon belongs to STOP alone. Nothing else on a Maryland road uses eight sides, which is why the shape is enough even when the face is obscured by snow.",
        context:
          "Each shape in Maryland's set has one job: octagon for stop, three-sided for yield, diamond for warning, pennant for the start of a no-passing zone, pentagon for school zones and crossings, round for a railroad crossing ahead, crossbuck at the crossing itself, and rectangles for regulatory and guide information.",
        trap:
          "The yield sign is described the same way - the only sign shaped like a downward triangle - so \"only\" claims need reading carefully.",
        excerptKey: "stop-sign-only-octagon",
        sourceLabel: "Maryland Driver's Manual - Section 4.B Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "md_s3_25",
        topic: "safety",
        question: "You see flashing blue lights in a Maryland work zone. What do they indicate?",
        choices: [
          "A police vehicle is stopped ahead",
          "Speed cameras in the zone are active",
          "Workers are present on the roadway",
          "A highway maintenance vehicle is merging",
        ],
        correctIndex: 1,
        explanation:
          "Blue means the work-zone speed cameras are switched on. Maryland assigns each colour a distinct job in a work zone.",
        context:
          "The three-colour code is worth learning: flashing amber or yellow on highway maintenance vehicles, flashing blue for active speed cameras, and flashing green for an active work zone with workers present. Work-zone speeding fines are already higher than normal and higher again when workers are present.",
        trap:
          "Blue reads as police almost everywhere else. In a Maryland work zone it means the camera is live.",
        excerptKey: "workzone-blue-lights",
        sourceLabel: "Maryland Driver's Manual - Section 5.H Work Zone Safety",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "md_s3_26",
        topic: "rightOfWay",
        question:
          "You are in a funeral procession with your headlights and hazard lights on and the signal ahead turns red. What does Maryland allow?",
        choices: [
          "You may go through the red signal",
          "You must stop and rejoin the procession afterwards",
          "You may go through only if a police escort is present",
          "You must stop unless the lead vehicle has already crossed",
        ],
        correctIndex: 0,
        explanation:
          "Maryland lets a funeral procession continue through a red signal, provided you are part of it and running your lights. It is one of very few civilian exemptions from a traffic control device.",
        context:
          "The lights are the condition, not decoration: headlights and hazard flashers are what identify you as part of the procession and are what trigger the right of way. Other drivers must yield to the procession even on a green signal, and keep yielding until the whole procession has passed, unless they can proceed safely without crossing its path.",
        trap:
          "The exemption depends on your lights being on. Joining a procession without them does not carry the privilege.",
        excerptKey: "funeral-red-light",
        sourceLabel: "Maryland Driver's Manual - Section 5.K Funeral Processions",
        sourceUrl: HB,
      },
      {
        id: "md_s3_27",
        topic: "impairment",
        question:
          "What extra consequence does Maryland attach to a drunk or drugged driving conviction with a child in the vehicle?",
        choices: [
          "A mandatory ignition interlock for ten years",
          "Immediate revocation with no hearing",
          "The judge can double the fine and the jail time",
          "The offence becomes a federal matter",
        ],
        correctIndex: 2,
        explanation:
          "With a child in the car, the judge can double both the fine and the jail term.",
        context:
          "Maryland's impaired driving framework runs on several tracks at once. There is the criminal offence, with heavier penalties for driving under the influence than for driving while impaired; there is the administrative side, where MVA suspends for a .08 reading, for drug impairment, or for refusing a test; and there is the licence restriction track for drivers under 21 and for provisional holders, where any measurable alcohol is a breach.",
        trap:
          "The child-passenger provision is not a separate offence with its own tariff. It is an enhancement the judge can apply to the sentence for the underlying one.",
        excerptKey: "child-in-vehicle-dui",
        sourceLabel: "Maryland Driver's Manual - Section 6.A Alcohol, Drugs and Driving",
        sourceUrl: HB,
      },
      {
        id: "md_s3_28",
        topic: "sharing",
        question: "On which Maryland roads may a moped or motor scooter be ridden?",
        choices: [
          "Any road, including interstates",
          "Roads with a posted maximum speed limit of 50 mph or less",
          "Roads with a posted limit of 35 mph or less",
          "Residential streets only",
        ],
        correctIndex: 1,
        explanation:
          "Fifty miles per hour is the cut-off: a moped or scooter may use any road posted at 50 mph or less.",
        context:
          "Riders may travel side by side or alone, and on the road or the shoulder, though they should keep as close to the right as they safely can. Because their size makes them hard to see, the manual asks for extra care at intersections, where they may be turning or going straight, and on narrow roads with little passing room. Maryland's three-foot passing rule covers motor scooters as well as bicycles.",
        trap:
          "Thirty-five is a plausible-sounding threshold and the wrong one. The figure in the manual is 50.",
        excerptKey: "moped-50mph",
        sourceLabel: "Maryland Driver's Manual - Section 7.G Mopeds and Scooters",
        sourceUrl: HB,
      },
      {
        id: "md_s3_29",
        topic: "emergencies",
        question:
          "You hit and injure a dog that ran into the road. What does Maryland require?",
        choices: [
          "Call the police immediately",
          "Nothing, if the animal was not on a lead",
          "Report it to MVA within 72 hours",
          "Notify the owner only if you can find them",
        ],
        correctIndex: 0,
        explanation:
          "Striking and injuring a domestic animal - a dog, cat, horse or cow - obliges you to call the police immediately.",
        context:
          "Maryland has a related duty for property: if you hit an unattended vehicle or other unattended property you must stop as close as possible without blocking traffic more than necessary, try to find the owner, and if you cannot, leave a note with your details where they will find it. Leaving the scene of a crash that seriously injures a person means revocation, up to five years in prison and a $5,000 fine.",
        trap:
          "The animal being loose does not remove the duty. The obligation is to call the police, not to establish who was at fault.",
        excerptKey: "crash-animal",
        sourceLabel: "Maryland Driver's Manual - Section 8.A Crashes",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "md_s3_30",
        topic: "rules",
        question: "What does the manual say about how you should occupy a marked lane?",
        choices: [
          "Straddle the line when passing a cyclist",
          "Move between lanes freely when traffic is light",
          "Drive in a single lane and change only once you have determined it is safe",
          "Use the left lane by default on multilane roads",
        ],
        correctIndex: 2,
        explanation:
          "Stay in one lane, and change only when you have satisfied yourself it is safe. The manual also warns against drifting across lines or changing lanes inside an intersection.",
        context:
          "The general position rule is to keep to the right of the centre of the road unless you are passing, a sign or signal permits otherwise, or something in the way makes a different position necessary. Where stay-right signs are posted you use the right-hand lane or lanes except to pass, and on a highway a driver going slower than the flow must use the right lane wherever possible.",
        trap:
          "Changing lanes while inside an intersection is specifically called out. It is not merely poor style - the manual tells you not to do it.",
        excerptKey: "lane-single",
        sourceLabel: "Maryland Driver's Manual - Section 3.F Lane Driving",
        sourceUrl: HB,
      },
      {
        id: "md_s3_31",
        topic: "signals",
        question: "A flashing yellow \"X\" hangs over the centre lane. What is that lane for?",
        choices: [
          "It is closed in both directions",
          "It is an HOV lane during peak hours",
          "It is reserved for buses and emergency vehicles",
          "It may be used for left turns, shared with oncoming left-turning traffic",
        ],
        correctIndex: 3,
        explanation:
          "A flashing yellow X - or two-way left-turn arrows - designates a lane available for left turns, which you will be sharing with drivers turning left from the other direction.",
        context:
          "Lane use signals govern reversible lanes and shared turn lanes. Green arrow: the lane is open to you. Red X: never drive in it. Steady yellow X: leave the lane when it is safe. Flashing yellow X: left turns only, from both directions. The equivalent painted marking is the two-way left turn lane, bounded by solid lines outside and broken lines inside.",
        trap:
          "Any yellow X can read as \"lane closing\". The flashing version says something different - the lane is open, for turns.",
        excerptKey: "flashing-yellow-x",
        sourceLabel: "Maryland Driver's Manual - Section 4.A Lane Use Signals",
        sourceUrl: HB,
      },
      {
        id: "md_s3_32",
        topic: "licensing",
        question:
          "A 17-year-old with a Maryland provisional licence wants to drive alone at 1 a.m. When is that permitted?",
        choices: [
          "Driving to, from or during a job, a school activity, an organised volunteer programme, or an athletic event or training session they take part in",
          "Never, without exception",
          "Any night, as long as a parent has given permission",
          "Only between midnight and 5 a.m. on weekends",
        ],
        correctIndex: 0,
        explanation:
          "Maryland's midnight-to-5 a.m. restriction has a defined list of exemptions: work, school activities, organised volunteering, and athletic events or related training you are participating in. Anything else waits for daylight or a supervising driver.",
        context:
          "MVA describes the alternative route through the restriction too - a licensed driver at least 21 years old with three years of driving experience alongside you. The penalty for breaching the night restriction matches the passenger restriction: a one-year suspension.",
        trap:
          "Parental permission is not one of the exemptions. The list is about what you are driving for, not who approved it.",
        excerptKey: "provisional-night",
        sourceLabel: "Maryland Driver's Manual - Section 9.A Restrictions",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "md_s3_33",
        topic: "safety",
        question: "What does an anti-lock braking system actually do when it engages?",
        choices: [
          "It shortens your stopping distance on dry roads",
          "It applies the brakes for you when it detects an obstacle",
          "It steers the car away from a skid",
          "It pumps the brakes rapidly so the wheels do not lock, keeping the car controllable",
        ],
        correctIndex: 3,
        explanation:
          "ABS senses a wheel about to lock and pumps that brake far faster than a person could, so the wheels keep turning and you keep steering.",
        context:
          "The system announces itself: a rumble through the brakes and a pedal vibrating under your foot, which is normal and not a reason to lift off. Maryland's advice for a vehicle without ABS is the manual version of the same idea - pump the brakes rather than slamming them, to avoid provoking a skid on a slippery road.",
        trap:
          "The pedal vibration feels like a fault and prompts people to release the brake. That is the moment ABS is doing its job.",
        excerptKey: "abs-how",
        sourceLabel: "Maryland Driver's Manual - Section 10.I Braking with ABS",
        sourceUrl: HB,
      },
      {
        id: "md_s3_34",
        topic: "signs",
        question: "What information does a green highway sign carry?",
        choices: [
          "Warnings about conditions ahead",
          "Services available at the next exit",
          "Destinations, distances and directions",
          "Regulatory instructions you must obey",
        ],
        correctIndex: 2,
        explanation:
          "Green is for guidance: where a road goes, how far it is, and which way to turn.",
        context:
          "Maryland's guide signs work as a family. Green handles destinations and distances; blue handles services such as fuel, food and lodging; brown handles recreation and cultural sites. Route markers identify the road number and type - US route, state route - and mile markers on interstates give you a precise location to quote to emergency services.",
        trap:
          "Green is not a regulatory colour. Nothing on a green sign is an instruction you can be ticketed for ignoring.",
        excerptKey: "sign-color-green",
        sourceLabel: "Maryland Driver's Manual - Section 4.B Colors & Shapes",
        sourceUrl: HB,
      },
      {
        id: "md_s3_35",
        topic: "speed",
        question: "What is the highest speed limit that may lawfully be established anywhere in Maryland?",
        choices: ["55 mph", "60 mph", "65 mph", "70 mph"],
        correctIndex: 3,
        explanation:
          "Seventy miles per hour is the statutory ceiling for the whole state. No Maryland road may be posted higher.",
        context:
          "A second cap sits under it: any road that is not an interstate highway or an expressway may not be posted above 55 mph, however rural it is. Below those ceilings the defaults apply where nothing is posted - 30, 35, 50 and 55 depending on district and whether the highway is divided.",
        trap:
          "Sixty-five is the figure many people carry from other states or from a stretch of interstate they know. Maryland's statutory maximum is 70.",
        excerptKey: "speed-max-70",
        sourceLabel: "Maryland Transportation Article 21-801.1",
        sourceUrl: gtr("21-801.1"),
      },
    ],
  },
];
