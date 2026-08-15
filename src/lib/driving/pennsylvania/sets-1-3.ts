import type { DrivingTestSet } from "../types";

// Every fact below was checked against the Pennsylvania Driver's Manual
// (PUB 95, 4-21), published by PennDOT's Bureau of Driver Licensing, plus
// dmv.pa.gov pages and the Pennsylvania Vehicle Code (75 Pa.C.S.) for the
// handful of rules the 2021 manual states out of date or does not state at
// all - the snow-and-ice removal law, the current Move Over fines, the point
// system's later stages and the insurance minimums.
//
// Questions are original. Explanations, context notes and trap notes are
// written from scratch; the deep link is there so the learner reads PennDOT's
// own authoritative wording on the government's site.
const HB =
  "https://www.pa.gov/content/dam/copapwp-pagov/en/penndot/documents/public/dvspubsforms/bdl/bdl-manuals/pa-drivers-manual-non-commercial/english/pub%2095.pdf";
const TESTING =
  "https://www.pa.gov/agencies/dmv/driver-services/pennsylvania-drivers-manual/online-drivers-manual/testing";
const POINTS =
  "https://www.pa.gov/content/dam/copapwp-pagov/en/penndot/documents/public/dvspubsforms/bdl/bdl-fact-sheets/fs-ps.pdf";
const INSURANCE =
  "https://www.pa.gov/agencies/insurance/consumer-help-center/learn-about-insurance/auto-insurance";
const WORKZONE =
  "https://www.pa.gov/agencies/penndot/traveling-in-pa/safety/traffic-safety-driver-topics/work-zone-safety";
const CODE_3802 = "https://www.legis.state.pa.us/WU01/LI/LI/CT/HTM/75/00.038.002.000..HTM";
const CODE_3327 = "https://www.legis.state.pa.us/WU01/LI/LI/CT/HTM/75/00.033.027.000..HTM";

export const pennsylvaniaSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Pennsylvania Basics",
    difficulty: "starter",
    description:
      "The rules you meet on your first drive in Pennsylvania: what the shapes and colours mean, who goes first, and the handful of numbers PennDOT's 18-question knowledge test expects you to know cold.",
    questions: [
      {
        id: "pa_s1_01",
        topic: "signs",
        question:
          "You approach an eight-sided red sign at an intersection. What does Pennsylvania require of you?",
        choices: [
          "Slow to walking pace and continue if nothing is coming",
          "Stop completely, then go only once the intersection is clear",
          "Yield only to traffic already inside the intersection",
          "Stop only when a pedestrian is waiting to cross",
        ],
        correctIndex: 1,
        explanation:
          "The octagon carries one message and one only, and that message is a full stop. Pennsylvania spells out that slowing down without coming to a complete halt is illegal, however empty the cross street looks.",
        context:
          "Pennsylvania signs carry meaning in shape and colour as well as words, so you can start reacting before you can read the text. The octagon is unique to STOP, the downward triangle to YIELD, the yellow diamond warns of something ahead, and orange means road work. Learning the shape system earns more marks than memorising individual signs, because the test can show you a sign you have never met and expect you to reason from its outline.",
        trap:
          "Rolling through at walking pace is the habit that gets people ticketed. PennDOT wants the wheels stopped, not merely slowed.",
        excerptKey: "stop-sign-complete-stop",
        sourceLabel: "PA Driver's Manual - Chapter 2, Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "pa_s1_02",
        topic: "signals",
        question: "A traffic light ahead of you turns steady red. Where must you stop?",
        choices: [
          "Anywhere within one car length of the signal",
          "Before the marked stop line or crosswalk, and before the intersection if there are no lines",
          "Level with the signal head so you can see it change",
          "Only if another vehicle is approaching from the cross street",
        ],
        correctIndex: 1,
        explanation:
          "Steady red means stopping short of the painted stop line or the crosswalk. Where the pavement carries no markings at all, the intersection itself is your limit, and you wait there for green.",
        context:
          "Pennsylvania's signal colours run steady red (stop), steady yellow (red is coming, stop if you safely can), steady green (go if the road is clear). The flashing versions change the meaning completely: flashing red behaves exactly like a stop sign, flashing yellow means proceed with caution. A police officer directing traffic outranks the signal even when the instruction contradicts the light.",
        trap:
          "Creeping up level with the signal feels safer but puts your bumper inside the crosswalk, which is precisely where pedestrians are entitled to be.",
        excerptKey: "steady-red-light",
        sourceLabel: "PA Driver's Manual - Chapter 2, Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "pa_s1_03",
        topic: "speed",
        question:
          "The yellow lights on a school zone sign are flashing. What is the fastest you may legally travel?",
        choices: ["10 mph", "12 mph", "15 mph", "20 mph"],
        correctIndex: 2,
        explanation:
          "Pennsylvania's school zone limit is 15 mph, and it bites whenever the yellow lights are flashing or during the hours printed on the sign. It is the lowest posted limit you will meet on a normal road.",
        context:
          "The school zone limit does not run all day. It applies when the flashers are lit or during the specific time window shown on the sign, so the same stretch of road can be 15 mph at half past eight and 35 mph at eleven. Speeding in a school zone is treated harshly: three points land on your record on top of the fine.",
        trap:
          "20 mph is the school zone figure in several other states, so drivers who learned elsewhere reach for it first. Pennsylvania sits lower.",
        excerptKey: "school-zone-15-mph",
        sourceLabel: "PA Driver's Manual - Chapter 3, Managing Speed",
        sourceUrl: HB,
      },
      {
        id: "pa_s1_04",
        topic: "rightOfWay",
        question:
          "Two cars reach a four-way stop at exactly the same moment, on roads that cross at right angles. Who goes first?",
        choices: [
          "Whoever signals their intention first",
          "The car that is travelling straight rather than turning",
          "The driver on the right",
          "The larger vehicle, because it needs more room",
        ],
        correctIndex: 2,
        explanation:
          "When two drivers arrive together, the one on the left yields, which means the driver on the right moves off first. The tie-break is about position, not about size, speed or who is turning.",
        context:
          "At a four-way stop the order is arrival order: first to reach the line is first to go. Only when arrival is genuinely simultaneous does the left-yields-to-right rule decide it. Two drivers facing one another may both proceed, watching each other for turns, because their paths only conflict if one of them turns left.",
        trap:
          "Signalling first proves nothing. A turn signal announces what you intend, it does not create a right to go.",
        excerptKey: "four-way-stop-tie",
        sourceLabel: "PA Driver's Manual - Chapter 2, Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "pa_s1_05",
        topic: "safety",
        question:
          "You are driving with three friends, all aged 16. Under Pennsylvania's seat belt law, who must be belted?",
        choices: [
          "Only you, because you are the driver",
          "Only the people sitting in the front",
          "Nobody is required to, though it is recommended",
          "You, anyone in the front, and every passenger aged 8 to 17 wherever they sit",
        ],
        correctIndex: 3,
        explanation:
          "The driver and all front seat occupants must be belted, and so must every passenger aged 8 up to 18, no matter which seat they are in. Sixteen-year-olds in the back are squarely inside that rule.",
        context:
          "Pennsylvania's belt law is written around age and seating position rather than a blanket everybody-buckles rule. Drivers and front seat passengers of any age must be restrained; children from 8 up to 18 must be restrained anywhere in the vehicle. An adult riding in the rear is the one gap, and the responsibility for under-18 passengers sits with the driver.",
        trap:
          "It is tempting to think the back seat is exempt. For teenage passengers it is not, and it is the driver who answers for them.",
        excerptKey: "seat-belt-8-to-18",
        sourceLabel: "PA Driver's Manual - Chapter 5, Seat Belt Law",
        sourceUrl: HB,
      },
      {
        id: "pa_s1_06",
        topic: "signals",
        question: "A traffic signal ahead is showing a flashing red light. What does it mean?",
        choices: [
          "It has the same meaning as a stop sign",
          "The signal is faulty, so proceed at normal speed",
          "Slow down and continue with caution",
          "Stop only if the cross street has traffic on it",
        ],
        correctIndex: 0,
        explanation:
          "A flashing red is a stop sign in light form. You come to a full stop, look both ways, and move off only once the intersection is genuinely clear.",
        context:
          "Signals in flash mode split into two very different instructions. Flashing red means stop, exactly as an octagon would. Flashing yellow means caution: slow, look, keep going. A signal that has gone completely dark is different again, and is treated as a four-way stop.",
        trap:
          "Flashing red and flashing yellow look similar at a glance and get muddled constantly. Only the yellow one lets you roll through.",
        excerptKey: "flashing-red-light",
        sourceLabel: "PA Driver's Manual - Chapter 2, Flashing Signals",
        sourceUrl: HB,
      },
      {
        id: "pa_s1_07",
        topic: "signs",
        question: "What does a downward-pointing triangular sign require of you?",
        choices: [
          "Come to a complete stop every time",
          "Merge left as soon as it is safe",
          "Stop only when children are present",
          "Slow down, check for traffic, and give way before continuing",
        ],
        correctIndex: 3,
        explanation:
          "The three-sided YIELD sign asks you to slow, check and give way to pedestrians and cross traffic. You stop only when a stop is actually needed to let them through.",
        context:
          "YIELD differs from STOP in that a full halt is conditional rather than automatic, but the gap requirement is identical: you need a genuine gap in traffic before you go, at a yield sign just as much as at a stop sign. Yield signs sit at merges, at roundabout entries and on the minor arm of intersections where traffic normally keeps flowing.",
        trap:
          "Treating YIELD as a mandatory stop is not illegal, but it also is not what the sign says, and stopping dead in a merge lane creates its own hazard.",
        excerptKey: "yield-sign",
        sourceLabel: "PA Driver's Manual - Chapter 2, Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "pa_s1_08",
        topic: "rules",
        question:
          "You are stopped at a red light and want to turn right. There is no sign forbidding it. What does Pennsylvania allow?",
        choices: [
          "Turn without stopping if the way ahead looks clear",
          "Turn after a complete stop, once you have yielded to pedestrians and traffic",
          "Wait for green; right on red is not permitted in Pennsylvania",
          "Turn on red only between 6 a.m. and 8 p.m.",
        ],
        correctIndex: 1,
        explanation:
          "Right on red is permitted in Pennsylvania unless a NO TURN ON RED sign says otherwise, but the stop comes first and pedestrians and cross traffic go before you do.",
        context:
          "The order matters more than the permission. Stop fully at the line, then look in every direction, then move only when the crosswalk and the cross traffic are clear. A sign at the intersection can withdraw the permission entirely, and some of those signs apply only during posted hours.",
        trap:
          "Treating right on red as a right of way rather than a permission is what causes the collisions. Everybody else goes first.",
        excerptKey: "right-turn-on-red",
        sourceLabel: "PA Driver's Manual - Chapter 2, Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "pa_s1_09",
        topic: "sharing",
        question:
          "A school bus ahead of you stops on an ordinary two-lane street, its red lights flashing and stop arm out. What must you do?",
        choices: [
          "Pass slowly on the left if no children are visible",
          "Stop only if you are directly behind the bus",
          "Stop at least 10 feet away, whichever direction you are travelling",
          "Slow to 15 mph and continue past",
        ],
        correctIndex: 2,
        explanation:
          "Pennsylvania requires a stop at least 10 feet from the bus, and it applies whether you are behind it or meeting it head on. You stay stopped until the red lights go off, the arm folds in and the children are safely clear.",
        context:
          "The 10-foot buffer exists because children cross in front of and behind the bus, in the exact space a driver cannot see. There is a single exception, and it is narrow: traffic on the far side of a physically divided highway need not stop. A painted centre line or a centre turn lane does not make a highway divided.",
        trap:
          "'Only if children are visible' inverts the whole point. The child you cannot see is the one the rule protects.",
        excerptKey: "school-bus-10-feet",
        commonlyMissed: true,
        sourceLabel: "PA Driver's Manual - Chapter 3, School Buses",
        sourceUrl: HB,
      },
      {
        id: "pa_s1_10",
        topic: "licensing",
        question: "How is Pennsylvania's non-commercial knowledge test scored?",
        choices: [
          "18 questions, and you must answer 15 correctly",
          "20 questions, and you must answer 16 correctly",
          "30 questions, and you must answer 24 correctly",
          "40 questions, and you must answer 32 correctly",
        ],
        correctIndex: 0,
        explanation:
          "PennDOT sets 18 multiple-choice questions and requires 15 right, which works out at about 83 percent. Three wrong answers is the whole of your margin.",
        context:
          "The test covers traffic signs, Pennsylvania's driving laws and safe driving practices, and you take it in person at a driver license center without an appointment. Fail it and you may sit it again the next business day, but only once on any given day whichever center you visit. The 20-question figure belongs to the motorcycle test, not this one.",
        trap:
          "A short test sounds forgiving, and it is the opposite. Eighteen questions means each mistake costs more than five percent.",
        excerptKey: "knowledge-test-18-questions",
        sourceLabel: "PennDOT - PA Driver's Manual, Testing",
        sourceUrl: TESTING,
      },
      {
        id: "pa_s1_11",
        topic: "signs",
        question: "A yellow diamond-shaped sign with a black symbol on it is telling you what?",
        choices: [
          "A law you must obey at this point in the road",
          "A hazard or change in the road ahead",
          "The route number of the highway you are on",
          "Where the nearest services are located",
        ],
        correctIndex: 1,
        explanation:
          "Yellow diamonds are warning signs. They are placed before the condition they describe so you have time to see it, decide and slow down if you need to.",
        context:
          "Pennsylvania sorts signs into three families. Regulatory signs state the law and are usually black on white or red on white. Warning signs are yellow diamonds and describe what the road is about to do. Guide signs are green, blue or brown rectangles and tell you where things are. Orange takes the diamond shape but means road work.",
        trap:
          "A warning sign is not a speed limit. The advisory number that sometimes hangs below it is guidance for the hazard, not the posted maximum.",
        excerptKey: "warning-signs-shape",
        sourceLabel: "PA Driver's Manual - Chapter 2, Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "pa_s1_12",
        topic: "safety",
        question:
          "On a dry highway, what following distance does the Pennsylvania manual tell you to keep behind the vehicle ahead?",
        choices: ["Two seconds", "Four seconds", "One car length for every 10 mph", "Six seconds"],
        correctIndex: 1,
        explanation:
          "Four seconds is Pennsylvania's baseline on dry pavement. You time it by watching the vehicle ahead pass a fixed object and counting until you reach the same spot.",
        context:
          "Four seconds is the floor, not the ceiling. Wet roads push it to five or six, packed snow and ice much further still, and you add time again behind trucks, buses, motorcycles and anything whose driver cannot see you. The count is a distance measure that scales with speed automatically, which is why it beats counting car lengths.",
        trap:
          "The two-second rule is the figure most drivers half-remember from somewhere else. Pennsylvania asks for four.",
        excerptKey: "four-second-following",
        commonlyMissed: true,
        sourceLabel: "PA Driver's Manual - Chapter 3, Managing Space",
        sourceUrl: HB,
      },
      {
        id: "pa_s1_13",
        topic: "impairment",
        question:
          "You are 19 and holding a Pennsylvania licence. At what blood alcohol concentration are you considered to be driving under the influence?",
        choices: ["0.08 percent", "0.05 percent", "0.04 percent", "0.02 percent"],
        correctIndex: 3,
        explanation:
          "Pennsylvania's zero tolerance law puts drivers under 21 at 0.02 percent. That is far below the 0.08 that applies to drivers of legal drinking age, and low enough that a single drink can reach it.",
        context:
          "Three separate limits are in play. Drivers 21 and over are at 0.08. Drivers under 21 are at 0.02. Commercial drivers are at 0.04, and school bus and school vehicle drivers at 0.02. An under-21 driver convicted at 0.02 is sentenced under the high-rate penalty band, not the gentlest one, even though the reading is tiny.",
        trap:
          "0.08 is the number everyone knows, and it is the wrong one for anybody under 21.",
        excerptKey: "under-21-bac-02",
        commonlyMissed: true,
        sourceLabel: "PA Driver's Manual - Chapter 3, Alcohol and Driving",
        sourceUrl: HB,
      },
      {
        id: "pa_s1_14",
        topic: "signals",
        question: "What does a flashing yellow light at an intersection mean?",
        choices: [
          "Stop, then proceed when clear",
          "The signal is about to turn red",
          "Slow down and proceed with care",
          "Yield to traffic on the cross street before entering",
        ],
        correctIndex: 2,
        explanation:
          "A flashing yellow means caution. You slow, look and keep going; there is no requirement to stop unless something in the intersection makes stopping necessary.",
        context:
          "Flashing signals normally appear overnight or when a signal is running in a reduced mode. The main road usually gets the flashing yellow and the side road the flashing red, so the two directions are being told different things at the same intersection. Never assume the cross traffic has the same indication you do.",
        trap:
          "Stopping dead at a flashing yellow surprises the driver behind you and is not what the signal asks for.",
        excerptKey: "flashing-yellow-light",
        sourceLabel: "PA Driver's Manual - Chapter 2, Flashing Signals",
        sourceUrl: HB,
      },
      {
        id: "pa_s1_15",
        topic: "parking",
        question: "How close to a fire hydrant may you legally park in Pennsylvania?",
        choices: [
          "No closer than 5 feet",
          "No closer than 10 feet",
          "No closer than 20 feet",
          "No closer than 15 feet",
        ],
        correctIndex: 3,
        explanation:
          "Fifteen feet is the hydrant clearance. It exists so a crew can run a line to the hydrant without your bumper in the way.",
        context:
          "Pennsylvania's no-parking distances are a set of numbers worth learning as a group, because the test likes them: 15 feet from a hydrant, 20 feet from a crosswalk at an intersection, 20 feet from a fire station driveway, 30 feet from a stop sign, yield sign or flashing signal, and 50 feet from the nearest rail at a railroad crossing.",
        trap:
          "Ten feet is the school bus stopping distance, not the hydrant clearance. The two numbers get swapped constantly.",
        excerptKey: "no-parking-fire-hydrant",
        sourceLabel: "PA Driver's Manual - Chapter 3, Parking",
        sourceUrl: HB,
      },
      {
        id: "pa_s1_16",
        topic: "rules",
        question:
          "You arrive at an intersection where the traffic signal is completely dark because of a power failure. How should you treat it?",
        choices: [
          "As though the light were green in your direction",
          "As though it were a four-way stop",
          "As a yield, giving way only to traffic already in the intersection",
          "Proceed at normal speed; a dark signal has no legal effect",
        ],
        correctIndex: 1,
        explanation:
          "A non-functioning signal is treated as a four-way stop. Every approach stops, and the usual order of arrival and left-yields-to-right rules take over.",
        context:
          "This is one of the few situations where a rule replaces a missing traffic control rather than following one. It is not a free-for-all and it is not a yield: all four approaches are expected to stop, which is why storm-hit intersections still function if everybody knows the rule. A police officer on the scene overrides it.",
        trap:
          "Rolling through because 'there is no signal telling me to stop' is exactly the misreading that causes right-angle crashes here.",
        excerptKey: "non-functioning-signal",
        commonlyMissed: true,
        sourceLabel: "PA Driver's Manual - Chapter 2, Non-Functioning Traffic Lights",
        sourceUrl: HB,
      },
      {
        id: "pa_s1_17",
        topic: "speed",
        question: "What is the highest speed limit that can be posted anywhere in Pennsylvania?",
        choices: ["70 mph", "65 mph", "75 mph", "80 mph"],
        correctIndex: 0,
        explanation:
          "Seventy is Pennsylvania's ceiling. Some interstates carry it, plenty do not, and no sign in the state can lawfully post a higher figure.",
        context:
          "On interstates the limit is posted after each interchange, and on other highways at roughly half-mile intervals, so you are rarely far from a reminder. A posted limit describes the maximum under ideal road, traffic and weather conditions, which means the legal number and the safe number part company the moment the weather turns.",
        trap:
          "Several western states post 75 or 80. Pennsylvania stops at 70, and the number people guess is usually the one from a road trip.",
        excerptKey: "max-speed-70",
        sourceLabel: "PA Driver's Manual - Chapter 3, Posted Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "pa_s1_18",
        topic: "signs",
        question: "An orange diamond-shaped sign with black lettering is telling you what?",
        choices: [
          "You are entering a maintenance, construction or utility work area",
          "A school zone begins here",
          "The road ahead is closed to trucks",
          "A detour route starts at the next junction",
        ],
        correctIndex: 0,
        explanation:
          "Orange is Pennsylvania's work zone colour. The diamond shape is borrowed from warning signs, but the orange background tells you workers or equipment may be on or near the road.",
        context:
          "Work zones come with rules that ordinary road does not. You must switch your headlights on in every posted work zone, not just the ones with people visibly working in them, and daytime running lights do not satisfy that because they leave your tail lights dark. Fines are doubled for certain violations in an active work zone.",
        trap:
          "Yellow and orange diamonds look alike at speed. Yellow warns about the road; orange warns about people working on it.",
        excerptKey: "work-zone-sign-color",
        sourceLabel: "PA Driver's Manual - Chapter 2, Work Zone Signs",
        sourceUrl: HB,
      },
      {
        id: "pa_s1_19",
        topic: "rightOfWay",
        question:
          "You are waiting at a green light to turn left, and a car is coming straight towards you. Who has the right of way?",
        choices: [
          "You do, because you arrived at the intersection first",
          "Whoever is travelling faster clears the intersection first",
          "The oncoming driver going straight ahead",
          "Neither; the first to signal may go",
        ],
        correctIndex: 2,
        explanation:
          "A driver turning left yields to oncoming traffic going straight. A circular green permits the turn but protects nothing.",
        context:
          "The manual makes the underlying point plainly: the law does not hand anybody the right of way at an intersection, it only says who must yield. A green arrow is the one signal that makes your left turn protected, because oncoming traffic is being held at red. A circular green, or a flashing yellow arrow, means the gap is yours to judge.",
        trap:
          "Arriving first counts at a stop sign, not at a signal. Under a green light the priority is decided by the movement, not the queue.",
        excerptKey: "yield-left-turn",
        sourceLabel: "PA Driver's Manual - Chapter 3, Negotiating Intersections",
        sourceUrl: HB,
      },
      {
        id: "pa_s1_20",
        topic: "safety",
        question:
          "It starts raining and you switch your windshield wipers on. What else does Pennsylvania law require?",
        choices: [
          "Reduce your speed by at least 10 mph",
          "Switch on your hazard flashers",
          "Nothing extra, unless visibility drops below 1,000 feet",
          "Switch on your headlights",
        ],
        correctIndex: 3,
        explanation:
          "Wipers on means headlights on. Any time the wipers are running continuously or intermittently because of the weather, the headlights must be lit too.",
        context:
          "The point of the law is being seen rather than seeing. That is why daytime running lights do not satisfy it: on most vehicles they leave the tail lights dark, so you look fine from the front and vanish from behind in spray. Headlights are also required between sunset and sunrise, in fog, smoke or snow, whenever you cannot see 1,000 feet ahead, and throughout work zones.",
        trap:
          "Assuming daytime running lights count is the single most common way drivers break this one without meaning to.",
        excerptKey: "headlights-with-wipers",
        commonlyMissed: true,
        sourceLabel: "PA Driver's Manual - Chapter 3, Headlight/Windshield Wiper Law",
        sourceUrl: HB,
      },
      {
        id: "pa_s1_21",
        topic: "sharing",
        question: "How much of a lane is a motorcyclist entitled to in Pennsylvania?",
        choices: [
          "Half a lane, so a car may share the other half",
          "One complete lane",
          "Only the portion of the lane they are occupying at the time",
          "A full lane only on highways, not on city streets",
        ],
        correctIndex: 1,
        explanation:
          "The law gives a motorcycle or moped an entire lane. There is enough painted width to squeeze alongside one, and doing so is illegal as well as dangerous.",
        context:
          "A rider needs the whole lane because they use its width constantly, shifting position to dodge potholes, gravel, seams and wind. The manual asks for the same four-second following distance behind a motorcycle as behind a car, and more when conditions are poor. Most car-motorcycle crashes happen at intersections, usually a driver turning left across a rider's path.",
        trap:
          "The lane looks wide enough for two, which is exactly why drivers try it. Legal width is not the same as spare width.",
        excerptKey: "motorcycle-full-lane",
        sourceLabel: "PA Driver's Manual - Chapter 3, Motorcyclists and Moped Drivers",
        sourceUrl: HB,
      },
      {
        id: "pa_s1_22",
        topic: "signals",
        question: "What does a steady green arrow pointing left tell you?",
        choices: [
          "You may turn left, and oncoming traffic is being held at red",
          "You may turn left after yielding to oncoming traffic",
          "You must turn left; going straight is prohibited from any lane",
          "Left turns are permitted only when the arrow stops flashing",
        ],
        correctIndex: 0,
        explanation:
          "A steady green arrow gives you a protected turn: the conflicting traffic is stopped by a red signal, so the movement the arrow points at is yours.",
        context:
          "Pennsylvania runs a full family of arrow indications and they are not interchangeable. Steady green arrow means protected. Flashing yellow arrow means permitted but unprotected, so you yield first. Steady yellow arrow means the turn phase is ending. Steady red arrow means stop, and you wait for either a green arrow or a flashing yellow one.",
        trap:
          "If the green arrow drops out and leaves a circular green, your protection has gone even though the light is still green.",
        excerptKey: "steady-green-arrow",
        sourceLabel: "PA Driver's Manual - Chapter 2, Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "pa_s1_23",
        topic: "rules",
        question: "What do yellow lines painted down the middle of a road tell you?",
        choices: [
          "Traffic on the other side of them is travelling the opposite way",
          "The lane to their right is reserved for buses",
          "You are approaching a school zone",
          "Parking is prohibited on this stretch of road",
        ],
        correctIndex: 0,
        explanation:
          "Yellow separates opposing streams of traffic. White separates lanes going the same way and marks the right edge of the road.",
        context:
          "Colour tells you what is on the far side of the line; the pattern tells you whether you may cross it. Broken lines can generally be crossed, solid ones cannot, except when making a turn. Yellow also marks the left edge of divided highways, one-way streets and ramps, which is a useful check that you have entered a ramp the right way round.",
        trap:
          "It is easy to read the line's colour as a parking or lane-use instruction. Colour is about direction of travel, nothing else.",
        excerptKey: "pavement-yellow-lines",
        sourceLabel: "PA Driver's Manual - Chapter 2, Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "pa_s1_24",
        topic: "emergencies",
        question:
          "An ambulance comes up behind you with its siren on and red lights flashing. What should you do?",
        choices: [
          "Speed up to clear the intersection ahead of it",
          "Stop immediately where you are",
          "Pull over to the side of the road, clear of intersections, and stop",
          "Move into the left lane and maintain your speed",
        ],
        correctIndex: 2,
        explanation:
          "You pull as near to the curb as you can and stop, keeping clear of intersections so the emergency vehicle has room to work through the junction.",
        context:
          "Once it has passed, do not simply resume: check that a second emergency vehicle is not following, then stay at least 500 feet back from the one in front. On a one-way street you pull to the nearest edge rather than automatically to the right. Any uniformed officer, sheriff, constable or fire police member directing traffic must be obeyed, signals notwithstanding.",
        trap:
          "Stopping dead in the middle of an intersection is the worst option available and is what panicked drivers do first.",
        excerptKey: "emergency-vehicle-pull-over",
        sourceLabel: "PA Driver's Manual - Chapter 3, Emergency Vehicles and Situations",
        sourceUrl: HB,
      },
      {
        id: "pa_s1_25",
        topic: "licensing",
        question: "How old must you be to apply for a Pennsylvania learner's permit?",
        choices: ["15", "15 and a half", "16", "17"],
        correctIndex: 2,
        explanation:
          "Sixteen is the floor, and the manual is blunt that you cannot apply before your sixteenth birthday. The medical form on the application may be completed up to six months earlier, but the application itself waits.",
        context:
          "The permit is valid for a year from the date it is issued. While you hold it and are under 18 you may only drive supervised by a licensed driver aged at least 21, or by a parent, guardian, person in loco parentis or spouse who is 18 or older and licensed, and that person sits in the front seat. You may also not carry more passengers than the vehicle has seat belts.",
        trap:
          "The six-month window for the physical examination is not a six-month early application window. It is only the form that can be dated early.",
        excerptKey: "permit-age-16",
        sourceLabel: "PA Driver's Manual - Chapter 1, Applying for a Learner's Permit",
        sourceUrl: HB,
      },
      {
        id: "pa_s1_26",
        topic: "signs",
        question: "Which sign shape is used only for schools in Pennsylvania?",
        choices: ["Octagon", "Pennant", "Diamond", "Pentagon"],
        correctIndex: 3,
        explanation:
          "The five-sided pentagon is reserved for school signs. Seeing that outline means a school zone, and a downward arrow beneath it puts you at the school crosswalk itself.",
        context:
          "Pennsylvania gives three shapes a single meaning each, and the test likes all three. The octagon means stop and nothing else. The pennant, which is a horizontal triangle on the left-hand side of the road, marks the start of a no passing zone. The pentagon means school. Everything else shares the diamond, rectangle and circle shapes.",
        trap:
          "School signs sometimes come on a fluorescent yellow-green background rather than plain yellow, which makes people look at colour instead of shape. The shape is the reliable clue.",
        excerptKey: "school-pentagon-sign",
        sourceLabel: "PA Driver's Manual - Chapter 2, Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "pa_s1_27",
        topic: "rightOfWay",
        question: "You are approaching a roundabout. Who has the right of way?",
        choices: [
          "Traffic already circulating inside the roundabout",
          "Whichever driver reaches the yield line first",
          "Traffic entering from the right-hand approach",
          "The larger vehicle, since it needs the wider path",
        ],
        correctIndex: 0,
        explanation:
          "Vehicles already going round have priority. You slow on approach, pull up to the yield line, look left and enter only when a gap appears.",
        context:
          "Inside the circle traffic moves counterclockwise and the priority becomes yours, so you keep moving to your exit and signal right as you approach it. Stopping inside a roundabout is specifically warned against. Pedestrians get right of way both entering and exiting, and you never overtake a cyclist who is riding the roundabout as a vehicle.",
        trap:
          "PennDOT identifies failure to yield on entry as the most frequent cause of roundabout crashes, so this is the rule people actually get wrong on the road.",
        excerptKey: "yield-roundabout",
        sourceLabel: "PA Driver's Manual - Chapter 3, Negotiating Intersections",
        sourceUrl: HB,
      },
      {
        id: "pa_s1_28",
        topic: "speed",
        question: "What does a posted speed limit sign actually represent?",
        choices: [
          "The speed you are expected to maintain regardless of conditions",
          "The maximum legal speed under ideal road, traffic and weather conditions",
          "A recommendation that carries no penalty",
          "The average speed of traffic on that road",
        ],
        correctIndex: 1,
        explanation:
          "The number is a ceiling for perfect conditions. When the road is wet, dark or crowded, the safe speed drops below it while the sign stays the same.",
        context:
          "Pennsylvania makes the consequence explicit: you can be ticketed for driving too fast for conditions even while sitting under the posted limit. That is a separate offence from speeding and it turns on visibility, traction and traffic rather than on the sign. Advisory speeds on yellow warning signs work the same way for a specific hazard.",
        trap:
          "Reading the limit as a target rather than a maximum is what puts drivers into curves and rainstorms at exactly the wrong speed.",
        excerptKey: "speed-limit-sign",
        sourceLabel: "PA Driver's Manual - Chapter 2, Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "pa_s1_29",
        topic: "parking",
        question: "You are parking on a street with a curb. How close to the curb must you be?",
        choices: [
          "Within 12 inches",
          "Within 18 inches",
          "Within 24 inches",
          "There is no set distance as long as traffic can pass",
        ],
        correctIndex: 0,
        explanation:
          "Twelve inches is the limit. On a street without a curb you instead pull as far off the roadway as you can manage.",
        context:
          "Parking rules chain together: park facing the direction traffic moves, set the parking brake, and shift to Park or, with a manual gearbox, to Reverse or First. If you have to leave the vehicle on the roadway itself, hazard flashers go on and it must be visible for at least 500 feet in both directions.",
        trap:
          "Eighteen inches is the figure in several other states' handbooks and is the one people reach for by mistake.",
        excerptKey: "parking-12-inches",
        sourceLabel: "PA Driver's Manual - Chapter 3, Parking",
        sourceUrl: HB,
      },
      {
        id: "pa_s1_30",
        topic: "impairment",
        question:
          "You are 25 years old. At what blood alcohol concentration does Pennsylvania consider you to be driving under the influence?",
        choices: ["0.02 percent", "0.04 percent", "0.05 percent", "0.08 percent"],
        correctIndex: 3,
        explanation:
          "For drivers of legal drinking age the threshold is 0.08 percent. Below that you can still be convicted if an officer stops you for driving erratically.",
        context:
          "Pennsylvania sorts DUI into three bands and the penalties climb with each. General impairment covers 0.08 up to 0.099, high rate runs 0.10 to 0.159, and highest rate starts at 0.16. Anyone who refuses chemical testing, or who drives under the influence of controlled substances, is sentenced in the highest band whatever their reading.",
        trap:
          "0.08 is a prosecution threshold, not a safety threshold. The manual notes drivers at 0.04 are already several times more likely to crash.",
        excerptKey: "dui-08-adult",
        sourceLabel: "PA Driver's Manual - Chapter 4, Driving Under the Influence",
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
      "Core Pennsylvania rules most drivers get right once they have seen them written down: line markings, turn rules, the distances the manual expects you to know, and the first of the junior licence restrictions.",
    questions: [
      {
        id: "pa_s2_01",
        topic: "signs",
        question:
          "You see a yellow sign shaped like a horizontal triangle, pointed to the right, on the left-hand side of the road. What is it telling you?",
        choices: [
          "A sharp curve begins here",
          "The road narrows ahead",
          "A no passing zone starts here",
          "Two-way traffic resumes",
        ],
        correctIndex: 2,
        explanation:
          "The pennant is the only sign of its shape in Pennsylvania and it marks the beginning of a no passing zone. It is deliberately placed on the left so it faces the driver who might be tempted to pull out.",
        context:
          "The pennant usually travels with a solid yellow line on your side of the centre and often with a DO NOT PASS sign as well, so three separate signals say the same thing. No passing zones exist where you cannot see far enough ahead to complete a pass, typically on hills and curves.",
        trap:
          "Its position on the left makes drivers assume it applies to the oncoming lane. It is aimed at you.",
        excerptKey: "no-passing-pennant",
        sourceLabel: "PA Driver's Manual - Chapter 2, Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "pa_s2_02",
        topic: "signals",
        question:
          "You are approaching an intersection when the light turns steady yellow and you are too close to stop safely. What should you do?",
        choices: [
          "Continue through the intersection carefully",
          "Brake hard and stop over the crosswalk",
          "Reverse back behind the stop line",
          "Stop and then proceed as if it were a stop sign",
        ],
        correctIndex: 0,
        explanation:
          "A steady yellow warns that red is coming, so you slow and prepare to stop. If you are already in the intersection or cannot stop safely before entering it, you carry on through with care.",
        context:
          "The judgement is about stopping distance, not about beating the light. Slamming to a halt inside the crosswalk, or stopping so abruptly that the car behind hits you, is the failure this rule exists to avoid. The same logic applies to a steady yellow arrow: if you cannot stop safely, you complete the turn you began on the previous arrow.",
        trap:
          "Treating amber as a signal to accelerate is the classic error. The rule permits continuing, not speeding up.",
        excerptKey: "yellow-light-already-in-intersection",
        sourceLabel: "PA Driver's Manual - Chapter 2, Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "pa_s2_03",
        topic: "rules",
        question: "When may you turn left on a red light in Pennsylvania?",
        choices: [
          "Never; only right turns on red are permitted",
          "From any street onto a one-way street after stopping",
          "Onto any street, provided you stop and the way is clear",
          "From a one-way street onto another one-way street, from the left lane, after stopping",
        ],
        correctIndex: 3,
        explanation:
          "Both streets must be one-way and you must already be in the left lane. Stop first, yield to pedestrians and traffic, and go only if no sign forbids the turn.",
        context:
          "This is the mirror image of right on red and it carries the same conditions: a full stop, then yielding, then the turn. The restriction to one-way onto one-way exists because a left turn onto a two-way street would put you head-on into oncoming traffic that has a green. City grids in Philadelphia and Pittsburgh are where you will actually meet it.",
        trap:
          "Getting one half of the condition right is worse than not knowing the rule. A one-way onto a two-way is not covered, and neither is a two-way onto a one-way.",
        excerptKey: "left-turn-on-red-one-way",
        commonlyMissed: true,
        sourceLabel: "PA Driver's Manual - Chapter 2, Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "pa_s2_04",
        topic: "rightOfWay",
        question:
          "You are pulling out of a shopping centre driveway onto a main road. What does the law require?",
        choices: [
          "Wait until the main road is clear",
          "Yield only to vehicles approaching from your left",
          "Proceed as soon as any vehicle flashes its headlights at you",
          "Take the first gap, since traffic on the main road must let you in",
        ],
        correctIndex: 0,
        explanation:
          "A vehicle entering a public highway from an alley, private road or driveway waits for the main road to be clear. Nobody on the through road is required to make space for you.",
        context:
          "The manual states the underlying principle first: the law never grants right of way, it only says who must yield. Driveways, alleys and private roads sit at the bottom of that order, which is why so many crashes at shopping centre exits are assigned to the driver pulling out.",
        trap:
          "A courtesy flash from one driver does not clear the lanes you cannot see. Accepting it without your own look is how these collisions happen.",
        excerptKey: "yield-from-driveway",
        sourceLabel: "PA Driver's Manual - Chapter 3, Negotiating Intersections",
        sourceUrl: HB,
      },
      {
        id: "pa_s2_05",
        topic: "speed",
        question:
          "You are convicted of exceeding the speed limit in a school zone. What lands on your driving record?",
        choices: [
          "No points, only a fine",
          "One point",
          "Two points",
          "Three points, plus a fine",
        ],
        correctIndex: 3,
        explanation:
          "Speeding in a school zone carries three points as well as the fine. It is treated more seriously than the equivalent speed on ordinary road.",
        context:
          "Pennsylvania's ordinary speeding scale runs from two points for 6 to 10 mph over up to five points at 31 mph and above. School zones bypass that scale and attract three points regardless. PennDOT begins taking corrective action once a record reaches six points, so a single school zone conviction takes you halfway there.",
        trap:
          "Assuming a school zone ticket is just a fine underestimates it. The points are the part that costs you later.",
        excerptKey: "school-zone-points",
        sourceLabel: "PA Driver's Manual - Chapter 2, School Zone Signals",
        sourceUrl: HB,
      },
      {
        id: "pa_s2_06",
        topic: "parking",
        question: "How close to a crosswalk at an intersection may you park?",
        choices: [
          "No closer than 10 feet",
          "No closer than 20 feet",
          "No closer than 30 feet",
          "Any distance, provided the crosswalk itself is not blocked",
        ],
        correctIndex: 1,
        explanation:
          "Twenty feet from a crosswalk at an intersection. The clearance is there so drivers turning in can see a pedestrian stepping off the curb before it is too late.",
        context:
          "Parking within the crosswalk, in the intersection or on the sidewalk is separately prohibited, as is double parking alongside a vehicle already at the curb. The list also bars parking on bridges, in tunnels, on railroad tracks, in front of any driveway and between the roadways of a divided highway.",
        trap:
          "Thirty feet is the clearance from a stop sign, yield sign or flashing signal. Crosswalks are twenty.",
        excerptKey: "no-parking-crosswalk",
        sourceLabel: "PA Driver's Manual - Chapter 3, Parking",
        sourceUrl: HB,
      },
      {
        id: "pa_s2_07",
        topic: "safety",
        question:
          "You are about to change lanes on a three-lane road. What does the manual say about your mirrors?",
        choices: [
          "Mirrors alone are sufficient if they are correctly adjusted",
          "Check the mirrors, then turn your head to check the blind spots as well",
          "Rely on the blind spot sensors if your vehicle has them",
          "Signal first and change lanes; other drivers will make room",
        ],
        correctIndex: 1,
        explanation:
          "Mirrors and sensors do not cover the blind spots. The manual asks you to signal, check mirrors, and then look over your shoulder before you move.",
        context:
          "A blind spot is any area around the vehicle a driver cannot see without moving their head, and it sits roughly beside and slightly behind you on each side. On a road with three or more lanes the check widens: somebody two lanes over may be aiming for the same gap you are. Keep the head check quick, because your eyes are off the road ahead while you do it.",
        trap:
          "Well-adjusted mirrors shrink the blind spots but never eliminate them, which is why the manual treats sensors and mirrors as a supplement rather than a substitute.",
        excerptKey: "blind-spot-turn-head",
        sourceLabel: "PA Driver's Manual - Chapter 3, Looking Behind",
        sourceUrl: HB,
      },
      {
        id: "pa_s2_08",
        topic: "sharing",
        question:
          "You are overtaking a cyclist on a Pennsylvania road. How much space must you leave?",
        choices: [
          "At least four feet",
          "At least two feet",
          "At least one full lane width",
          "Whatever the road allows, as there is no fixed distance",
        ],
        correctIndex: 0,
        explanation:
          "Four feet is the statutory minimum between your vehicle and the bicycle. You must also pass at a careful speed rather than simply squeezing by at the limit.",
        context:
          "If four feet cannot be found within your own lane you are permitted to cross the centre double yellow line to get it, provided you can do so safely. Where a road has only one travel lane a cyclist may use any part of it to avoid hazards, including staying clear of parked cars, and you may not turn across the path of a cyclist riding straight ahead.",
        trap:
          "Drivers assume crossing a double yellow is always forbidden, so they squeeze past instead. For this one purpose the law lets you cross it.",
        excerptKey: "bicycle-four-feet",
        commonlyMissed: true,
        sourceLabel: "PA Driver's Manual - Chapter 5, Safe Passing Is The Law",
        sourceUrl: HB,
      },
      {
        id: "pa_s2_09",
        topic: "signals",
        question: "A steady red arrow is displayed for your turning lane. What may you do?",
        choices: [
          "Stop and wait; you may not turn in the direction the arrow points",
          "Turn after stopping, as with any red light",
          "Turn immediately, since the arrow only applies to the through lanes",
          "Treat it as a yield and turn when there is a gap",
        ],
        correctIndex: 0,
        explanation:
          "A steady red arrow prohibits the turn it points at. You wait for a green arrow or a flashing yellow arrow before moving.",
        context:
          "The one nuance is that the ordinary turns-on-red permissions still apply to a red arrow: a right on red after stopping, or a left on red from one one-way street onto another, are allowed at a red arrow exactly as they are at a round red, unless a sign forbids it. What the arrow removes is any suggestion that the turn is currently authorised.",
        trap:
          "Waiting for the arrow to turn green when it never will is a real pattern at intersections that only ever show a flashing yellow arrow for that movement.",
        excerptKey: "steady-red-arrow",
        sourceLabel: "PA Driver's Manual - Chapter 2, Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "pa_s2_10",
        topic: "impairment",
        question:
          "You are arrested for DUI and refuse to give a breath or blood sample. What happens to your licence?",
        choices: [
          "Nothing, unless you are later convicted of DUI",
          "A 30-day suspension",
          "An automatic one-year suspension for the refusal itself",
          "A warning on the first occasion only",
        ],
        correctIndex: 2,
        explanation:
          "Pennsylvania's implied consent law suspends your driving privilege for a year for a first refusal, and that suspension is on top of anything the DUI conviction brings.",
        context:
          "Holding a Pennsylvania licence is itself the agreement to be tested, which is where the phrase implied consent comes from. The suspension applies even if you are later found not guilty of DUI. There is also a restoration fee tied to the refusal alone: $500 for a first, $1,000 for a second, $2,000 for a third. Refusal also drops you into the highest DUI penalty band.",
        trap:
          "Refusing looks like it removes the evidence. It replaces one penalty with a certain one that arrives whatever the court decides.",
        excerptKey: "implied-consent",
        sourceLabel: "PA Driver's Manual - Chapter 4, Implied Consent Law",
        sourceUrl: HB,
      },
      {
        id: "pa_s2_11",
        topic: "signs",
        question: "A green rectangular sign with white lettering is giving you what kind of information?",
        choices: [
          "A rule you must obey",
          "A warning about the road ahead",
          "Directions, distances and destinations",
          "The location of nearby services",
        ],
        correctIndex: 2,
        explanation:
          "Green means guidance. These signs point you at intersecting roads, cities and towns and the exits that reach them.",
        context:
          "Guide signs on highways come in a sequence rather than singly: one advance sign, then a second, then a sign at the exit itself, because a single sign is easy to miss at speed. Blue signs cover services such as hospitals, fuel and lodging, and brown signs mark parks and places of historical interest.",
        trap:
          "Blue and green both look like information signs. Blue is services at the next exit; green is where the road goes.",
        excerptKey: "guide-signs",
        sourceLabel: "PA Driver's Manual - Chapter 2, Guide Signs",
        sourceUrl: HB,
      },
      {
        id: "pa_s2_12",
        topic: "rules",
        question: "What is the general rule about crossing painted lines on a Pennsylvania road?",
        choices: [
          "Any line may be crossed if the road ahead is clear",
          "Broken lines may be crossed, solid lines may not, except when turning",
          "Solid lines may be crossed only above 35 mph",
          "Yellow lines may be crossed but white lines may not",
        ],
        correctIndex: 1,
        explanation:
          "Broken means crossable, solid means not, and the exception is a turn. That single rule covers most of the markings you will meet.",
        context:
          "Layer the colour on top and the picture is complete: yellow separates opposing traffic, white separates same-direction lanes. So a broken white line is a lane change you may make, a double solid yellow is a pass you may not, and a solid yellow on your side with a broken yellow beyond it means the oncoming driver may pass and you may not.",
        trap:
          "Reading only the colour and ignoring the pattern is how drivers end up passing across a solid line on their own side.",
        excerptKey: "broken-vs-solid-lines",
        sourceLabel: "PA Driver's Manual - Chapter 2, Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "pa_s2_13",
        topic: "licensing",
        question:
          "You hold a Pennsylvania junior driver's licence. Between which hours may you not normally drive?",
        choices: [
          "Midnight to 5 a.m.",
          "11 p.m. to 5 a.m.",
          "10 p.m. to 6 a.m.",
          "Midnight to 6 a.m.",
        ],
        correctIndex: 1,
        explanation:
          "The junior curfew runs from 11 p.m. to 5 a.m. Inside those hours you may only drive with a parent, guardian, person in loco parentis or a spouse who is 18 or older in the vehicle.",
        context:
          "There is a work and service exception, and it comes with paperwork: a junior driver travelling for employment, public or charitable service, or as a member of a volunteer fire company may drive during curfew, but must carry a notarised affidavit or a certificate of authorisation from the employer, supervisor or fire chief showing the likely schedule.",
        trap:
          "People remember midnight because that is when curfews usually start. Pennsylvania's begins an hour earlier.",
        excerptKey: "junior-curfew",
        commonlyMissed: true,
        sourceLabel: "PA Driver's Manual - Chapter 1, Junior Driver's License Information",
        sourceUrl: HB,
      },
      {
        id: "pa_s2_14",
        topic: "emergencies",
        question:
          "The rear of your car starts sliding to the left on an icy road. What should you do with the steering wheel?",
        choices: [
          "Turn it right, away from the slide",
          "Hold it straight and brake firmly",
          "Turn it right while pumping the brakes",
          "Turn it left, in the direction you want to go",
        ],
        correctIndex: 3,
        explanation:
          "Steer where you want to end up, which in a rear-end slide means turning towards the direction the back of the car has gone. Rear sliding left means steering left.",
        context:
          "Expect a second slide the other way once the car comes back, and correct it the same way; it will be less severe than the first. The other half of the technique is what you do not do: keep off the brakes, because braking mid-skid locks the wheels and takes away what steering you have left.",
        trap:
          "Steering away from the slide is the instinct and it is the one that spins the car.",
        excerptKey: "skid-steer-direction",
        sourceLabel: "PA Driver's Manual - Chapter 3, If Your Vehicle Starts to Skid",
        sourceUrl: HB,
      },
      {
        id: "pa_s2_15",
        topic: "speed",
        question:
          "The road is wet. What does the Pennsylvania manual suggest you do about speed and following distance?",
        choices: [
          "Cut your speed by 5 to 10 mph and stretch the gap to five or six seconds",
          "Keep your speed and stretch the gap to five seconds",
          "Halve your speed and keep the usual four-second gap",
          "Nothing changes until standing water is visible on the surface",
        ],
        correctIndex: 0,
        explanation:
          "Wet roads call for 5 to 10 mph off your speed and a following gap of five or six seconds instead of four. Both adjustments buy back the traction the water has taken.",
        context:
          "Conditions scale the numbers further. Packed snow means halving your speed; ice means crawling and leaving roughly ten times the normal gap. Roads are at their most treacherous in the first ten to fifteen minutes of rain, when oil lifts to the surface, and near 32 degrees Fahrenheit, where a film of water on ice is more slippery than ice alone.",
        trap:
          "Waiting for visible standing water is too late. A merely damp surface has already cost you grip.",
        excerptKey: "wet-road-speed-reduction",
        sourceLabel: "PA Driver's Manual - Chapter 3, Road Conditions",
        sourceUrl: HB,
      },
      {
        id: "pa_s2_16",
        topic: "signs",
        question: "You reach a railroad crossing marked only with a white X-shaped crossbuck. How should you treat it?",
        choices: [
          "As a stop sign; a full stop is required",
          "As a warning only, with no action needed",
          "As a signal that the crossing is out of use",
          "As a yield sign: slow, look and be ready to stop",
        ],
        correctIndex: 3,
        explanation:
          "The crossbuck functions as a yield sign. You slow down, look and listen, and stop if a train is coming or if you cannot see far enough down the track.",
        context:
          "A stop becomes compulsory the moment there is any signal of an approaching train: flashing red lights, a gate coming down, a flagger, or the train's own horn. Most Pennsylvania crossings have no gates at all, which is why the looking is on you. Where there are multiple tracks, wait after a train passes until you can see clearly down every track.",
        trap:
          "Familiar crossings are the dangerous ones. Drivers who never see a train there stop looking, which is precisely the habit the manual warns about.",
        excerptKey: "crossbuck-yield",
        sourceLabel: "PA Driver's Manual - Chapter 2, Railroad Crossbuck Sign",
        sourceUrl: HB,
      },
      {
        id: "pa_s2_17",
        topic: "sharing",
        question: "You come up behind a snow plow working on a highway. What does PennDOT advise?",
        choices: [
          "Pass on the left as soon as a gap appears",
          "Pass on the right, where the plow blade does not reach",
          "Do not try to pass it on either side",
          "Follow within two car lengths so other traffic cannot cut in",
        ],
        correctIndex: 2,
        explanation:
          "PennDOT's advice is not to pass a plow at all, on either side. Wing plows stick out several feet beyond the vehicle and are hard to see in bad weather or darkness.",
        context:
          "Plow drivers have very limited mirror visibility and often have to turn around, so they cannot see what is behind them. Following at a safe distance also keeps salt, de-icing liquid and anti-skid grit off your paintwork. The road ahead of a plow is, by definition, the part that has not been treated yet.",
        trap:
          "Passing on the right feels like the safe side. That is where the wing plow is.",
        excerptKey: "snow-plow-no-passing",
        sourceLabel: "PA Driver's Manual - Chapter 3, Snow Plows",
        sourceUrl: HB,
      },
      {
        id: "pa_s2_18",
        topic: "parking",
        question: "How close to a stop sign or a flashing signal may you park?",
        choices: [
          "No closer than 15 feet",
          "No closer than 20 feet",
          "No closer than 30 feet",
          "No closer than 50 feet",
        ],
        correctIndex: 2,
        explanation:
          "Thirty feet is the clearance around a stop sign, yield sign, flashing signal or other roadside traffic control device, so parked cars do not hide it.",
        context:
          "The distances vary with what is being protected. Fifteen feet keeps a fire hydrant reachable. Twenty feet keeps a crosswalk and a fire station driveway visible and usable. Thirty feet keeps a traffic control device in view. Fifty feet keeps the nearest rail at a railroad crossing clear.",
        trap:
          "Fifty feet belongs to railroad crossings. It is the largest of the set and is often applied to signs by mistake.",
        excerptKey: "no-parking-traffic-control",
        sourceLabel: "PA Driver's Manual - Chapter 3, Parking",
        sourceUrl: HB,
      },
      {
        id: "pa_s2_19",
        topic: "rules",
        question:
          "You are driving at 30 mph and plan to turn at the next junction. How far in advance must you signal?",
        choices: [
          "At least 50 feet",
          "At least 100 feet",
          "At least 200 feet",
          "At least 300 feet",
        ],
        correctIndex: 1,
        explanation:
          "Below 35 mph the signal must go on at least 100 feet before the turn. At 35 mph and above the requirement stretches to 300 feet.",
        context:
          "The manual also frames it in time, asking for a signal three to four seconds before the turn, which is roughly the same thing at normal speeds. A signal announces your intention; it does not create a right to make the move, so you still wait for the gap. If the signals themselves have failed, the arm signals shown in the manual are the legal substitute.",
        trap:
          "One rule at two speeds is easy to collapse into a single number. The threshold is 35 mph.",
        excerptKey: "turn-signal-distance",
        sourceLabel: "PA Driver's Manual - Chapter 3, Communicating Your Intentions",
        sourceUrl: HB,
      },
      {
        id: "pa_s2_20",
        topic: "rightOfWay",
        question:
          "A pedestrian carrying a white cane starts to cross the road ahead of you, away from any intersection. What must you do?",
        choices: [
          "Yield the right of way and be prepared to stop",
          "Sound your horn to warn them of your presence",
          "Continue, since they are not at a crosswalk",
          "Yield only if they are also accompanied by a guide dog",
        ],
        correctIndex: 0,
        explanation:
          "Drivers must always yield to a blind pedestrian carrying a white cane or being led by a guide dog. There is no crosswalk condition attached to it.",
        context:
          "The wider pedestrian rules are broad in their own right: you yield to people crossing at any intersection without a signal, in any marked crosswalk whether or not it is at an intersection, on a sidewalk that crosses a driveway or alley, and to anyone crossing with the light while you turn a corner. The blind pedestrian rule is the absolute one.",
        trap:
          "Sounding the horn is the well-meaning wrong answer. It startles rather than guides, and it does nothing about your speed.",
        excerptKey: "yield-blind-pedestrian-always",
        sourceLabel: "PA Driver's Manual - Chapter 3, Negotiating Intersections",
        sourceUrl: HB,
      },
      {
        id: "pa_s2_21",
        topic: "safety",
        question: "How should the head restraint in your seat be positioned?",
        choices: [
          "Level with the base of your neck",
          "As low as it will go, to keep your view clear",
          "With its top at least as high as the top of your ears",
          "Removed entirely if it interferes with your seating position",
        ],
        correctIndex: 2,
        explanation:
          "The top of the restraint should sit at least as high as the top of your ears. Set that way it cushions the back of the head and limits neck injury in a crash.",
        context:
          "Head restraints belong to the set of adjustments made before you move: seat position so the pedals and controls are within easy reach, mirrors set after the seat, and the restraint set last. Pennsylvania also treats a rearview mirror with anything hanging from it as an offence while the vehicle is moving.",
        trap:
          "Dropping the restraint low to see better turns it into a pivot for the head rather than a cushion for it.",
        excerptKey: "head-restraint-adjust",
        sourceLabel: "PA Driver's Manual - Chapter 3, Vehicle Checks",
        sourceUrl: HB,
      },
      {
        id: "pa_s2_22",
        topic: "signals",
        question: "A steady red X is illuminated over the lane you are travelling in. What does it mean?",
        choices: [
          "The lane ahead is closed to trucks",
          "Slow down; the lane narrows ahead",
          "You are not allowed to use this lane",
          "The lane may be used only for left turns",
        ],
        correctIndex: 2,
        explanation:
          "A red X closes the lane to you outright. A yellow X is the warning stage, telling you to move out because the lane's direction is about to reverse.",
        context:
          "Lane use control signals hang directly above the lane they govern and turn up at toll plazas, on bridges and in tunnels, and on city roads whose direction flips for rush hour. A downward green arrow means the lane is open, a white single left-turn arrow means left turns only from that lane, and a white two-way left-turn arrow means the lane is shared with left-turners coming the other way.",
        trap:
          "Yellow X and red X differ by one step. Yellow means get out now; red means you should already be out.",
        excerptKey: "lane-red-x",
        sourceLabel: "PA Driver's Manual - Chapter 2, Lane Use Control Signals",
        sourceUrl: HB,
      },
      {
        id: "pa_s2_23",
        topic: "impairment",
        question:
          "You are 20 years old. What does Pennsylvania law say about alcohol in the vehicle you are driving?",
        choices: [
          "It is allowed if the container is unopened",
          "It is allowed if an adult passenger owns it",
          "It is allowed in the trunk only",
          "You may not possess or transport it at all",
        ],
        correctIndex: 3,
        explanation:
          "Under 21 it is illegal to buy, consume, possess or transport alcohol, including alcohol in the vehicle you are driving. Sealed or not makes no difference.",
        context:
          "The minimum penalty for underage drinking is a fine of up to $500 plus court costs, and the courts may add an evaluation and an alcohol education or counselling programme. If you are detained for blood, breath or urine testing while underage, your parents do not need to consent to the test, though police will notify them of the arrest.",
        trap:
          "The unopened container exception exists in some states' open-container rules. Pennsylvania's underage rule is about possession, so the seal is irrelevant.",
        excerptKey: "underage-possession",
        sourceLabel: "PA Driver's Manual - Chapter 4, Underage Drinking",
        sourceUrl: HB,
      },
      {
        id: "pa_s2_24",
        topic: "signs",
        question:
          "A sign warns that the road you are on intersects a divided highway. What does that mean for turning left?",
        choices: [
          "You may turn left across both roadways in one movement",
          "You cross the first roadway, then turn left on the far side of the barrier",
          "Left turns are prohibited at intersections with divided highways",
          "You must turn right first and use a jughandle",
        ],
        correctIndex: 1,
        explanation:
          "A divided highway is effectively two one-way roads. You can only turn right at the first roadway, so a left turn means crossing that first roadway and then turning left beyond the barrier.",
        context:
          "This is where DO NOT ENTER and WRONG WAY signs earn their keep. Turning left before the divider puts you head-on into traffic approaching from your left, which is why those signs are placed exactly where a mistaken left would take you. Crossing needs two separate gaps: one in traffic from the left, then one in traffic from the right.",
        trap:
          "Treating the median as a painted line rather than a barrier is the mistake. On a divided highway the two carriageways are legally distinct.",
        excerptKey: "divided-highway-sign",
        sourceLabel: "PA Driver's Manual - Chapter 2, Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "pa_s2_25",
        topic: "licensing",
        question:
          "You are 17 and holding a learner's permit. How much supervised driving must you complete before your road test?",
        choices: [
          "40 hours, including 5 at night",
          "65 hours, including 10 at night and 5 in bad weather",
          "50 hours, including 10 at night",
          "There is no set number of hours; the six-month wait is the requirement",
        ],
        correctIndex: 1,
        explanation:
          "Sixty-five hours behind the wheel, of which at least 10 must be at night and at least 5 in bad weather. It is a separate requirement from the six-month wait, and both must be met.",
        context:
          "The hours are certified by a parent or guardian on form DL-180C, which you bring to the skills test along with the permit, the vehicle's registration and proof of insurance. The six-month clock runs from the date the permit was issued. Miss either requirement and the test does not happen.",
        trap:
          "The 10 night hours and 5 bad-weather hours are inside the 65, not on top of it, and forgetting the bad-weather portion is the usual gap.",
        excerptKey: "skill-building-65-hours",
        commonlyMissed: true,
        sourceLabel: "PA Driver's Manual - Chapter 1, Learner's Permit",
        sourceUrl: HB,
      },
      {
        id: "pa_s2_26",
        topic: "speed",
        question: "At what speed can a vehicle begin to hydroplane on a wet road?",
        choices: ["55 mph", "65 mph", "45 mph", "35 mph"],
        correctIndex: 3,
        explanation:
          "Hydroplaning can start at speeds as low as 35 mph when the water is only a tenth of an inch deep. Worn tyres bring the threshold lower still.",
        context:
          "Hydroplaning happens when the tyres stop clearing water fast enough and start riding on top of it like skis. If it happens, ease off the accelerator and let the car slow itself; do not brake hard or steer sharply, because either will turn it into a skid. As the car slows, more tread reaches the road and grip returns.",
        trap:
          "It sounds like a highway-speed problem, which is why 55 and 65 look plausible. It starts far lower than that.",
        excerptKey: "hydroplaning-35-mph",
        commonlyMissed: true,
        sourceLabel: "PA Driver's Manual - Chapter 3, Road Conditions",
        sourceUrl: HB,
      },
      {
        id: "pa_s2_27",
        topic: "emergencies",
        question:
          "You are involved in a minor collision. Nobody appears hurt, but one car cannot be driven away. Must you call the police?",
        choices: [
          "No, provided you exchange details with the other driver",
          "Only if the damage exceeds $1,000",
          "Only if the other driver asks you to",
          "Yes, the police must be called if any vehicle needs to be towed",
        ],
        correctIndex: 3,
        explanation:
          "Pennsylvania requires the police to be called if anyone is injured or killed, and separately if any vehicle needs towing. A non-driveable car triggers it on its own.",
        context:
          "Whether or not police attend, you exchange names, addresses, telephone numbers, registration numbers and insurance details, and collect the names of any witnesses. If police do not investigate and somebody was hurt or a vehicle had to be towed, you send a Driver's Accident Report Form AA-600 to PennDOT within five days.",
        trap:
          "There is no dollar threshold here. The trigger is towing, and drivers who go looking for a damage figure will not find one.",
        excerptKey: "crash-call-police-tow",
        sourceLabel: "PA Driver's Manual - Chapter 4, Crashes",
        sourceUrl: HB,
      },
      {
        id: "pa_s2_28",
        topic: "rules",
        question:
          "You want to make a U-turn on a two-lane road. How far away must approaching traffic be?",
        choices: [
          "At least 200 feet in each direction",
          "At least 500 feet in each direction",
          "At least 300 feet in each direction",
          "There is no distance rule as long as no sign forbids the turn",
        ],
        correctIndex: 1,
        explanation:
          "Pick a spot where drivers coming from every direction are at least 500 feet away and can see you clearly. Below that, the manoeuvre endangers traffic and is not permitted.",
        context:
          "Even with the distance, U-turns are banned outright on curves and on or near the crest of a hill, because approaching drivers cannot see you in time. A NO U-TURN sign removes the option entirely wherever it is posted, and city ordinances add their own restrictions.",
        trap:
          "The absence of a NO U-TURN sign is not permission. The sight-distance conditions apply everywhere.",
        excerptKey: "u-turn-500-feet",
        sourceLabel: "PA Driver's Manual - Chapter 3, U-Turns",
        sourceUrl: HB,
      },
      {
        id: "pa_s2_29",
        topic: "sharing",
        question: "You are following a tractor-trailer. How do you know whether the driver can see you?",
        choices: [
          "If you cannot see the truck's side mirrors, the driver cannot see you",
          "If you can read the lettering on the trailer, you are visible",
          "If your headlights are on, the driver can always see you",
          "If you are within two car lengths, you are inside the driver's mirror view",
        ],
        correctIndex: 0,
        explanation:
          "The mirror test works both ways. If the truck's side mirrors are not visible from your seat, you are in the No-Zone and the driver has no idea you are there.",
        context:
          "Trucks carry blind spots on all four sides, and the one directly behind is deep. Four seconds is the minimum to stay clear of it, timed the usual way against a fixed object. Sitting back that far also gives you a view past the trailer and gives the driver room to warn you before a stop or a turn.",
        trap:
          "Tucking in close feels like it removes the risk of somebody cutting in. It puts you exactly where the driver cannot see you.",
        excerptKey: "truck-mirrors-blind-spot",
        sourceLabel: "PA Driver's Manual - Chapter 3, Following a Truck",
        sourceUrl: HB,
      },
      {
        id: "pa_s2_30",
        topic: "parking",
        question:
          "You are parking facing downhill on a street with a curb. Which way should the front wheels point?",
        choices: [
          "Fully to the right, towards the curb",
          "Fully to the left, away from the curb",
          "Straight ahead, with the parking brake set",
          "It does not matter provided the vehicle is in Park",
        ],
        correctIndex: 0,
        explanation:
          "Parking downhill, with or without a curb, the wheels turn completely to the right. If the car rolls, it rolls into the curb or off the road rather than into traffic.",
        context:
          "The wheels are only part of it. Set the parking brake, and shift to Park with an automatic gearbox or to Reverse or First with a manual. Always park facing the direction traffic moves, and remember the wheels-to-the-right rule for downhill applies whether or not there is a curb to catch you.",
        trap:
          "Relying on Park and the handbrake alone ignores the point of the exercise, which is what happens when they fail.",
        excerptKey: "parking-downhill-wheels",
        commonlyMissed: true,
        sourceLabel: "PA Driver's Manual - Chapter 3, Parking",
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
      "The level PennDOT's knowledge test actually sits at: junior licence conditions, the Move Over law, the point system, and the numbers that separate a pass from three wrong answers.",
    questions: [
      {
        id: "pa_s3_01",
        topic: "signals",
        question: "A flashing yellow arrow is displayed for your left turn lane. What does it permit?",
        choices: [
          "A protected turn; oncoming traffic is stopped",
          "Nothing; you must wait for a green arrow",
          "A turn only after you come to a complete stop",
          "A turn after yielding to oncoming traffic and pedestrians",
        ],
        correctIndex: 3,
        explanation:
          "A flashing yellow arrow means you may turn, but the turn is not protected. Oncoming traffic has a green light, so the gap is entirely yours to find.",
        context:
          "Pennsylvania has been installing flashing yellow arrows since the mid-2010s to replace the old circular green for left turns, and many licensed drivers have never been taught them. The sequence at such an intersection normally runs green arrow (protected), then flashing yellow arrow (permitted, unprotected), then steady yellow arrow (ending), then red arrow. A sign reading LEFT TURN YIELD ON FLASHING YELLOW ARROW often sits beside the signal.",
        trap:
          "The word 'arrow' makes drivers read it as protection. Flashing yellow is the least protected indication on the mast.",
        excerptKey: "flashing-yellow-arrow",
        commonlyMissed: true,
        sourceLabel: "PA Driver's Manual - Chapter 2, Flashing Signals",
        sourceUrl: HB,
      },
      {
        id: "pa_s3_02",
        topic: "licensing",
        question:
          "You have held a Pennsylvania junior driver's licence for three months. How many passengers under 18 who are not immediate family may you carry, with no parent in the car?",
        choices: ["One", "Two", "Three", "As many as there are seat belts"],
        correctIndex: 0,
        explanation:
          "For the first six months on a junior licence the limit is one passenger under 18 who is not an immediate family member, unless a parent, guardian, person in loco parentis or spouse aged 18 or over is in the vehicle.",
        context:
          "After six months the allowance rises to three such passengers, but that increase is conditional: it does not apply to any junior driver who has ever been at fault in a crash or been convicted of a driving violation. The separate belt rule still bites throughout, since a driver under 18 may never carry more passengers than the vehicle has seat belts.",
        trap:
          "Most teenagers remember one number or the other. It is a rule with a clock on it, and losing the increase is a real consequence of a single ticket.",
        excerptKey: "junior-passengers-first-six-months",
        commonlyMissed: true,
        sourceLabel: "PA Driver's Manual - Chapter 1, Junior Driver's License Information",
        sourceUrl: HB,
      },
      {
        id: "pa_s3_03",
        topic: "rules",
        question:
          "You are approaching a police car stopped on the shoulder with its lights flashing, and traffic makes it impossible to change lanes. What does the Move Over law require?",
        choices: [
          "Maintain your speed and stay in your lane",
          "Slow to 20 mph",
          "Stop until the lane beside the police car is clear",
          "Pass at no more than 20 mph below the posted speed limit",
        ],
        correctIndex: 3,
        explanation:
          "Moving to a non-adjacent lane is the primary duty. Where that is impossible, illegal or unsafe, you pass at a speed at least 20 mph below the posted limit and reasonable for passing safely.",
        context:
          "The law covers a great deal more than police cars. An emergency response area includes police, sheriffs, coroners, firefighters, fire police, rescue and emergency medical personnel, towing and recovery crews, hazardous material teams and highway construction and maintenance workers. It also covers an ordinary disabled vehicle displaying at least two signal lamps, road flares or caution signs.",
        trap:
          "'Slow to 20 mph' and 'slow to 20 below the limit' are wildly different instructions, and confusing them on a 65 mph highway is how drivers get cited.",
        excerptKey: "move-over-slow-20-below",
        commonlyMissed: true,
        sourceLabel: "75 Pa.C.S. § 3327 - Emergency response areas",
        sourceUrl: CODE_3327,
      },
      {
        id: "pa_s3_04",
        topic: "sharing",
        question:
          "You are driving on a highway divided by a grass median with guide rails. A school bus stops on the opposite carriageway with red lights flashing. What must you do?",
        choices: [
          "Stop until the red lights go off",
          "Stop 10 feet short of the median",
          "Stop only if you can see children crossing",
          "Reduce your speed and continue with caution",
        ],
        correctIndex: 3,
        explanation:
          "This is the single exception to Pennsylvania's school bus rule. Traffic on the far side of a physically divided highway does not have to stop, but does have to slow down and stay alert.",
        context:
          "The exception turns on a physical division: concrete or metal barriers, guide rails, or trees, rocks, streams or a grass median. A painted centre line, a centre turn lane or a two-way road with several lanes is not divided, and on those you stop from both directions. Everywhere else the rule is a full stop at least 10 feet from the bus.",
        trap:
          "The word 'divided' does a lot of work here and drivers stretch it to cover any multi-lane road. Paint is not a divider.",
        excerptKey: "school-bus-divided-highway",
        commonlyMissed: true,
        sourceLabel: "PA Driver's Manual - Chapter 3, School Buses",
        sourceUrl: HB,
      },
      {
        id: "pa_s3_05",
        topic: "speed",
        question:
          "You drive through a posted work zone at two in the afternoon on a clear day. Nobody is working. What does the law require of your headlights?",
        choices: [
          "Nothing; the requirement applies only to active work zones",
          "Nothing; daytime running lights are sufficient",
          "Headlights on, because the rule covers all posted work zones",
          "Headlights on only if the posted limit has been reduced",
        ],
        correctIndex: 2,
        explanation:
          "Headlights are required in every posted work zone, not just the active ones, and at every hour of the day. Daytime running lights do not satisfy it because they leave the tail lights dark.",
        context:
          "An active work zone is the narrower category: it is the part where workers are actually on the roadway or on the shoulder beside an open lane, and it is what triggers the doubled fines. Speeding 11 mph or more over the limit in an active work zone brings an automatic 15-day licence suspension on top of the fine.",
        trap:
          "Reasoning that no workers means no rule confuses the headlight requirement, which covers all posted zones, with the penalty enhancements, which do not.",
        excerptKey: "work-zone-headlights-all-posted",
        commonlyMissed: true,
        sourceLabel: "PennDOT - Work Zone Safety, Laws",
        sourceUrl: WORKZONE,
      },
      {
        id: "pa_s3_06",
        topic: "signs",
        question:
          "A yellow diamond warns of a curve, and a smaller square sign below it reads 25. What is that number?",
        choices: [
          "The posted speed limit for the next mile",
          "The highest speed you should travel through the curve",
          "The minimum speed permitted on the curve",
          "The distance in hundreds of feet to the curve",
        ],
        correctIndex: 1,
        explanation:
          "An advisory speed plate names the highest speed you should be doing through the hazard above it. It is guidance tied to that curve, not a change to the posted limit.",
        context:
          "Advisory plates can hang beneath any diamond-shaped warning sign. The manual's rule for curves is that the slowing happens before you enter, not during, because once you are in the curve inertia carries you towards the outside of it. The sharper the bend and the wetter the surface, the more speed has to come off in advance.",
        trap:
          "Being under the posted limit is no defence if you take the curve too fast. Driving too fast for conditions is its own offence.",
        excerptKey: "advisory-speed-sign",
        sourceLabel: "PA Driver's Manual - Chapter 2, Advisory Speed Signs",
        sourceUrl: HB,
      },
      {
        id: "pa_s3_07",
        topic: "impairment",
        question:
          "You have been awake for 24 hours straight. According to the Pennsylvania manual, what is that roughly equivalent to?",
        choices: [
          "A blood alcohol level of .02 percent",
          "A blood alcohol level of .05 percent",
          "A blood alcohol level of .10 percent",
          "No measurable impairment as long as you feel alert",
        ],
        correctIndex: 2,
        explanation:
          "Twenty-four hours awake impairs driving about as much as a blood alcohol level of .10 percent, which is above the legal limit for an adult driver.",
        context:
          "Eighteen hours awake is already comparable to .05 percent. Fatigue slows reactions, blunts judgement and damages vision and memory in much the same way alcohol does, with the extra hazard that you can fall asleep without registering it. The manual's advice is unambiguous: when you start to feel tired, the thing to do is stop driving.",
        trap:
          "Feeling alert is not evidence of being alert. Micro-sleeps of a few seconds happen without the driver noticing.",
        excerptKey: "fatigue-24-hours",
        sourceLabel: "PA Driver's Manual - Chapter 3, Lack of Sleep",
        sourceUrl: HB,
      },
      {
        id: "pa_s3_08",
        topic: "parking",
        question: "How close to the nearest rail at a railroad crossing may you park?",
        choices: [
          "No closer than 30 feet",
          "No closer than 50 feet",
          "No closer than 20 feet",
          "No closer than 100 feet",
        ],
        correctIndex: 1,
        explanation:
          "Fifty feet from the nearest rail. It is the largest of Pennsylvania's parking clearances, because trains overhang the track and cannot swerve.",
        context:
          "Stopping on the tracks themselves is separately prohibited, whether or not a train appears to be coming. If traffic is backed up for a signal or a stop sign, you hold back and make sure the whole vehicle will end up clear of the rails before you cross. Passing another vehicle within 100 feet of a crossing is also barred.",
        trap:
          "Thirty feet is the traffic-control-device clearance and gets borrowed for railroad crossings. It is not enough.",
        excerptKey: "no-parking-railroad",
        sourceLabel: "PA Driver's Manual - Chapter 3, Parking",
        sourceUrl: HB,
      },
      {
        id: "pa_s3_09",
        topic: "rightOfWay",
        question:
          "You are entering a highway on a short ramp where entering and exiting traffic share the same weaving lane. Who yields?",
        choices: [
          "You do, because the exiting driver has priority",
          "The exiting driver, because you are already accelerating",
          "Whoever is travelling faster keeps the lane",
          "Neither; both should stop and let the other pass",
        ],
        correctIndex: 0,
        explanation:
          "In a weaving lane the driver entering the highway yields to the driver leaving it. Two vehicles wanting the same piece of road at the same time is exactly what the rule resolves.",
        context:
          "Weaving lanes appear where an entrance and an exit sit close together. Use the acceleration lane to match highway speed before you merge, look over your shoulder as well as in the mirror, and do not pass another vehicle while you are in the acceleration lane, which is separately illegal. Entering traffic yields to traffic already on the highway too.",
        trap:
          "Being on the ramp first feels like a claim. Priority in a weave belongs to the driver getting off, not the one getting on.",
        excerptKey: "weaving-lane-yield",
        sourceLabel: "PA Driver's Manual - Chapter 3, Entering Highways",
        sourceUrl: HB,
      },
      {
        id: "pa_s3_10",
        topic: "safety",
        question: "How far ahead should you be scanning for problems while driving?",
        choices: [
          "12 to 15 seconds ahead",
          "3 to 5 seconds ahead",
          "As far as your headlights reach",
          "To the vehicle immediately in front of you",
        ],
        correctIndex: 0,
        explanation:
          "Twelve to fifteen seconds, which works out at roughly a city block in town and about a quarter of a mile at highway speed. It is far enough to see a problem while you still have options.",
        context:
          "Looking far ahead is not the same as staring at the centre of the road: the manual asks you to keep scanning, including the roadsides, for vehicles and people about to enter your path. Pair it with the left-right-left routine at intersections, and with a mirror check often enough that you always know what is behind you.",
        trap:
          "Fixing on the car in front means you react to its brake lights instead of to the reason it braked, which is a full second too late.",
        excerptKey: "look-ahead-12-15-seconds",
        sourceLabel: "PA Driver's Manual - Chapter 3, Looking Ahead",
        sourceUrl: HB,
      },
      {
        id: "pa_s3_11",
        topic: "rules",
        question: "How close to an intersection may you overtake another vehicle?",
        choices: [
          "Up to 50 feet from it",
          "No passing within 100 feet of it, unless a traffic control device permits it",
          "Passing is permitted right up to the intersection if the line is broken",
          "No passing within 300 feet of it",
        ],
        correctIndex: 1,
        explanation:
          "Passing is barred within 100 feet of any intersection or railroad grade crossing, and while crossing one, unless an official traffic control device says otherwise.",
        context:
          "The same 100-foot rule applies within 100 feet of a bridge, elevated structure or tunnel. Passing is also barred approaching or on a curve or hill crest that limits your view, and on the shoulder of a multi-lane highway. On a two-lane road at 45 mph you need roughly a quarter of a mile of clear road to complete a pass safely.",
        trap:
          "A broken centre line means the geometry allows a pass in general, not that this particular pass is legal. The intersection rule sits on top of it.",
        excerptKey: "no-passing-100-feet-intersection",
        sourceLabel: "PA Driver's Manual - Chapter 3, Passing",
        sourceUrl: HB,
      },
      {
        id: "pa_s3_12",
        topic: "licensing",
        question:
          "You are 30 and your driving record reaches six points for the first time. What happens?",
        choices: [
          "Your licence is suspended for 90 days",
          "Nothing happens until you reach 11 points",
          "You are fined but no further action is taken",
          "You must pass a written special point examination or attend Driver Improvement School",
        ],
        correctIndex: 3,
        explanation:
          "Six points is where PennDOT starts taking corrective action. For an adult reaching it the first time, that means a written special point exam or Driver Improvement School, not a suspension.",
        context:
          "You get 30 days to pass the exam or complete the school; after that your privilege is suspended until you do. Passing the exam removes two points, and completing the school removes four. Falling below six and climbing back to six a second time brings a departmental hearing and Driver Improvement School. Eleven or more points is where automatic suspension arrives.",
        trap:
          "Under-18 drivers are treated completely differently: for them six points, or a conviction for 26 mph or more over the limit, means a 90-day suspension.",
        excerptKey: "points-six-first-exam",
        commonlyMissed: true,
        sourceLabel: "PennDOT - The Pennsylvania Point System fact sheet",
        sourceUrl: POINTS,
      },
      {
        id: "pa_s3_13",
        topic: "emergencies",
        question:
          "Your car has anti-lock brakes and you need to stop suddenly. How should you use the brake pedal?",
        choices: [
          "Pump it repeatedly",
          "Press firmly and hold continuous pressure",
          "Press gently to avoid triggering the system",
          "Apply the parking brake at the same time",
        ],
        correctIndex: 1,
        explanation:
          "With ABS you hold firm, continuous pressure and let the system do the modulating. Expect noise and a pulsing pedal; neither means anything is wrong.",
        context:
          "Without ABS the technique is the opposite: press and release repeatedly, because holding the pedal down locks the wheels and turns a stop into a skid. Knowing which system your car has is something to sort out from the owner's manual before you need it, not during. Above about 25 mph the manual also notes that steering around a hazard usually beats braking for it.",
        trap:
          "Pumping ABS brakes actively lengthens the stop, and it is the instinct anyone taught on older cars brings with them.",
        excerptKey: "abs-braking",
        sourceLabel: "PA Driver's Manual - Chapter 3, If You Have to Brake Suddenly",
        sourceUrl: HB,
      },
      {
        id: "pa_s3_14",
        topic: "signals",
        question:
          "A ramp meter signal at the end of a highway entrance ramp turns green. What does that green light give you?",
        choices: [
          "Permission to enter; you still have to find your own gap in traffic",
          "A protected merge, since highway traffic is being held",
          "The right to enter at whatever speed you are travelling",
          "Permission for two vehicles to enter together",
        ],
        correctIndex: 0,
        explanation:
          "The meter controls how many cars join the highway and when, nothing more. It does not stop highway traffic, so the gap is still yours to find.",
        context:
          "Ramp meters alternate between steady green and steady red on congested highway entrances, usually at peak hours. On a single-lane ramp only one vehicle may go on each green; a multi-lane ramp has a meter for each lane. You must wait for the green before entering at all.",
        trap:
          "A green light normally means protection. Here it means turn-taking, and treating it as protection puts you into the flow without a gap.",
        excerptKey: "ramp-meter-not-protected",
        sourceLabel: "PA Driver's Manual - Chapter 2, Ramp-Metering Signals",
        sourceUrl: HB,
      },
      {
        id: "pa_s3_15",
        topic: "signs",
        question: "A LOW SHOULDER sign warns you about what?",
        choices: [
          "A drop of up to three inches between the road and the shoulder",
          "A shoulder that is closed to all vehicles",
          "A stretch where the shoulder narrows to nothing",
          "Loose gravel thrown up by passing traffic",
        ],
        correctIndex: 0,
        explanation:
          "LOW SHOULDER means the shoulder sits as much as three inches below the pavement. A SHOULDER DROP OFF sign is used where the step is worse than that.",
        context:
          "The reason it matters is what happens if a wheel goes over the edge. The manual's recovery is to ease off the gas, hold the wheel firmly, and steer parallel to the road with two wheels on and two off until you are down to around 10 mph, then ease back on gently. Braking hard or snatching the wheel is what turns a drop-off into a crash.",
        trap:
          "Instinct says get back on the road immediately. That is the manoeuvre that whips the car sideways into oncoming traffic.",
        excerptKey: "low-shoulder-sign",
        sourceLabel: "PA Driver's Manual - Chapter 2, Shoulder Signs",
        sourceUrl: HB,
      },
      {
        id: "pa_s3_16",
        topic: "sharing",
        question:
          "You come up behind a vehicle displaying an orange triangle on its rear. What does that emblem tell you?",
        choices: [
          "The vehicle is carrying hazardous materials",
          "The vehicle is disabled and about to be towed",
          "The vehicle is designed to travel at 25 mph or less",
          "The driver is a learner under supervision",
        ],
        correctIndex: 2,
        explanation:
          "The orange triangle marks a slow-moving vehicle designed to operate at 25 mph or less, typically a farm tractor or a horse-drawn buggy.",
        context:
          "Closing speed is the danger: at 55 mph you are overhauling a 15 mph buggy at about 40 mph, so the gap vanishes far faster than it looks. Stay well back, and when you do pass, keep the speed down and the horn silent, since a startled horse is a hazard to everybody. Leave space again before pulling back in.",
        trap:
          "Judging the vehicle's speed by eye rather than by the emblem is what closes the gap. A dark buggy at dusk gives almost no cues at all.",
        excerptKey: "slow-moving-vehicle-emblem",
        sourceLabel: "PA Driver's Manual - Chapter 3, Reactions to Slow Moving Traffic",
        sourceUrl: HB,
      },
      {
        id: "pa_s3_17",
        topic: "speed",
        question:
          "You are driving at the posted 55 mph limit in heavy fog. Can you be ticketed for your speed?",
        choices: [
          "No, because you are within the posted limit",
          "Yes, you can be cited for driving too fast for conditions",
          "Only if you are involved in a collision",
          "Only on interstate highways",
        ],
        correctIndex: 1,
        explanation:
          "The posted number describes ideal conditions. Fog, rain, snow or darkness lower the safe speed while leaving the sign alone, and driving too fast for conditions is a separate offence.",
        context:
          "In fog specifically the manual asks you to slow enough to stop within the distance you can actually see, and to use low beams, since high beams bounce the light back off the fog into your eyes. Fog also removes the visual cues that tell you how fast you are moving, so the speedometer needs checking rather than trusting your feel for it.",
        trap:
          "The posted limit reads like a legal shield. It is a ceiling, and conditions can put the safe speed well underneath it.",
        excerptKey: "too-fast-for-conditions",
        sourceLabel: "PA Driver's Manual - Chapter 3, Managing Speed",
        sourceUrl: HB,
      },
      {
        id: "pa_s3_18",
        topic: "parking",
        question: "How close to the driveway entrance of a fire station may you park?",
        choices: [
          "No closer than 10 feet",
          "No closer than 15 feet",
          "No closer than 20 feet",
          "No closer than 30 feet",
        ],
        correctIndex: 2,
        explanation:
          "Twenty feet from a fire station driveway entrance, the same clearance Pennsylvania sets for a crosswalk at an intersection.",
        context:
          "The parking prohibitions also cover places rather than distances: sidewalks, intersections, crosswalks, bridges, tunnels, railroad tracks, the space between the roadways of a divided highway, alongside any street excavation or work area, and anywhere signs forbid stopping or parking. Limited access highways are off limits unless a traffic control device says otherwise.",
        trap:
          "Fifteen feet is the fire hydrant clearance. The fire station driveway takes the larger number.",
        excerptKey: "no-parking-fire-station",
        sourceLabel: "PA Driver's Manual - Chapter 3, Parking",
        sourceUrl: HB,
      },
      {
        id: "pa_s3_19",
        topic: "rules",
        question:
          "A lane down the middle of a two-way street is bounded by a solid yellow line outside and a broken yellow line inside on each side. How may it be used?",
        choices: [
          "As a passing lane in either direction",
          "Only to make left turns, by drivers from either direction",
          "As a through lane during rush hour only",
          "Only by drivers turning left from the street on your side",
        ],
        correctIndex: 1,
        explanation:
          "That marking pattern makes a centre left-turn lane. Drivers travelling both ways use it to begin their left turns, and it is not for passing or through travel.",
        context:
          "Drivers turning out of a cross street or driveway may also use it to finish their turn before merging into the traffic stream, which means you can meet somebody nose to nose in it. Signal three to four seconds before entering, do not enter it early and cruise, and get the whole car into the lane rather than leaving the tail sticking into traffic.",
        trap:
          "Using it as a running start for a merge, or drifting along it looking for an address, is what produces head-on conflicts in the one lane where they were designed out.",
        excerptKey: "center-turn-lane-both-directions",
        sourceLabel: "PA Driver's Manual - Chapter 3, Center Turn Lanes",
        sourceUrl: HB,
      },
      {
        id: "pa_s3_20",
        topic: "impairment",
        question:
          "What blood alcohol concentration puts a commercial driver, in a commercial vehicle that is not a school bus, over the limit in Pennsylvania?",
        choices: ["0.08 percent", "0.02 percent", "0.04 percent", "0.06 percent"],
        correctIndex: 2,
        explanation:
          "Commercial drivers are at 0.04 percent, half the figure that applies to an ordinary driver of legal drinking age.",
        context:
          "Pennsylvania runs four thresholds at once. Adults 21 and over in ordinary vehicles are at 0.08. Drivers under 21 are at 0.02. Commercial drivers are at 0.04. Anyone driving a school bus or a school vehicle is at 0.02 regardless of age. All of them are also subject to the general prohibition on driving while actually impaired.",
        trap:
          "0.02 is right for minors and for school bus drivers, but it is the wrong number for a general commercial vehicle.",
        excerptKey: "dui-commercial-04",
        commonlyMissed: true,
        sourceLabel: "75 Pa.C.S. § 3802 - Driving under influence",
        sourceUrl: CODE_3802,
      },
      {
        id: "pa_s3_21",
        topic: "rightOfWay",
        question:
          "A funeral procession is crossing an intersection ahead of you and the lead vehicle has already cleared it. What must you do?",
        choices: [
          "Proceed once the signal turns green in your favour",
          "Cut in behind the third vehicle to keep traffic moving",
          "Sound your horn to alert the procession to your presence",
          "Yield and let the rest of the procession through",
        ],
        correctIndex: 3,
        explanation:
          "Once the lead vehicle is through the intersection, the rest of the procession may follow and other traffic yields. You do not cut in and out of it.",
        context:
          "Vehicles in a procession run headlights and hazard flashers and carry a flag or other insignia, and may show a flashing or revolving purple light. They may follow the lead vehicle through a red light or stop sign if the lead went through on green, though at a stop sign the lead must stop first. The procession itself still yields to emergency vehicles.",
        trap:
          "Your green light does not outrank the procession, which is the assumption most drivers make when the signal changes mid-column.",
        excerptKey: "funeral-procession-yield",
        sourceLabel: "PA Driver's Manual - Chapter 3, Funeral Procession",
        sourceUrl: HB,
      },
      {
        id: "pa_s3_22",
        topic: "safety",
        question: "When does Pennsylvania law require you to switch from high beams to low beams?",
        choices: [
          "Within 200 feet of an oncoming vehicle and 100 feet behind another",
          "Within 300 feet of an oncoming vehicle and 500 feet behind another",
          "Within 500 feet of an oncoming vehicle and 300 feet behind another",
          "Only when the other driver flashes their own high beams",
        ],
        correctIndex: 2,
        explanation:
          "Five hundred feet approaching an oncoming vehicle, and 300 feet when you are following one. Both distances exist so your beams do not blind the other driver, directly or through their mirrors.",
        context:
          "Low beams reach only about 250 feet, and at 55 mph on dry pavement you need more than that to stop, so driving faster than about 45 mph on a dark road means outrunning your own lights. High beams are also the wrong choice in fog, rain and snow, where they scatter light back at you.",
        trap:
          "The two distances are easy to reverse. The larger number belongs to the oncoming case, where the closing speed is highest.",
        excerptKey: "low-beams-500-300",
        sourceLabel: "PA Driver's Manual - Chapter 3, Driving at Night",
        sourceUrl: HB,
      },
      {
        id: "pa_s3_23",
        topic: "licensing",
        question:
          "What are Pennsylvania's minimum bodily injury liability limits for an ordinary auto insurance policy?",
        choices: [
          "$15,000 per person and $30,000 per accident",
          "$25,000 per person and $50,000 per accident",
          "$10,000 per person and $20,000 per accident",
          "$50,000 per person and $100,000 per accident",
        ],
        correctIndex: 0,
        explanation:
          "Fifteen thousand dollars per person and thirty thousand per accident is the statutory minimum for bodily injury liability in Pennsylvania.",
        context:
          "The full minimum package has three parts: $5,000 of medical benefits, $15,000/$30,000 of bodily injury liability, and $5,000 of property damage liability. Some insurers offer a combined single limit of $35,000 that satisfies the liability halves together. Driving without insurance for 31 days or more costs you a three-month registration suspension, and a three-month licence suspension if you drove the vehicle.",
        trap:
          "25/50 is the minimum in a number of neighbouring states, which is why drivers who moved into Pennsylvania guess it.",
        excerptKey: "insurance-bodily-injury",
        commonlyMissed: true,
        sourceLabel: "PA Insurance Department - Auto Insurance",
        sourceUrl: INSURANCE,
      },
      {
        id: "pa_s3_24",
        topic: "signals",
        question:
          "You have stepped off the curb and are halfway across when the DON'T WALK signal begins flashing. What should you do?",
        choices: [
          "Turn around and return to the curb you started from",
          "Stop where you are and wait on the centre line",
          "Finish crossing",
          "Wait for the next steady WALK before continuing",
        ],
        correctIndex: 2,
        explanation:
          "A flashing DON'T WALK means finish the crossing if you are already in the street, and do not start if you are still on the curb.",
        context:
          "The three pedestrian indications each say something different. Steady WALK means start crossing, though turning vehicles still need watching. Flashing DON'T WALK is the clearance phase. Steady DON'T WALK means do not cross. Where there are no pedestrian signals at all, pedestrians follow the ordinary red, yellow and green lights.",
        trap:
          "Turning back mid-crossing puts you in the roadway for longer than continuing does, and the driver watching you has already predicted your original path.",
        excerptKey: "pedestrian-flashing-dont-walk",
        sourceLabel: "PA Driver's Manual - Chapter 2, Pedestrian Signals",
        sourceUrl: HB,
      },
      {
        id: "pa_s3_25",
        topic: "emergencies",
        question: "A front tyre blows out at highway speed. What is the first thing you should do?",
        choices: [
          "Brake hard to shed speed quickly",
          "Hold the wheel tightly and stay off the brake",
          "Steer sharply onto the shoulder",
          "Shift into neutral and coast to a stop",
        ],
        correctIndex: 1,
        explanation:
          "Grip the wheel firmly and keep off the brakes. Braking after a blowout puts the car into a skid; easing off the accelerator lets it slow under control.",
        context:
          "A front blowout shows up as a vibrating wheel and a sudden pull to one side; a rear one drops a corner and sets the back of the car wobbling. Steer smoothly towards where you want to go, without large or jerky inputs, and you may keep rolling on the flat as long as it takes to find a safe place to stop. Use the brakes gently if you must.",
        trap:
          "Braking is the instinct in every emergency, and it is exactly wrong here, along with the sharp steering that usually goes with it.",
        excerptKey: "tire-blowout",
        sourceLabel: "PA Driver's Manual - Chapter 3, If You Have a Tire Blowout",
        sourceUrl: HB,
      },
      {
        id: "pa_s3_26",
        topic: "signs",
        question:
          "A roadside marker carries diagonal stripes angled down towards the left. What is it telling you?",
        choices: [
          "The road curves left ahead",
          "A passing lane opens on the left",
          "The left lane is closed for maintenance",
          "Move left to get past the hazard",
        ],
        correctIndex: 3,
        explanation:
          "On an object marker the stripes point down in the direction you should move to clear the hazard. Stripes angled down to the left mean keep left.",
        context:
          "These markers appear on underpass supports, bridge ends, guide rails and other objects close to the road, and also where there is no object at all but a drop-off or an abrupt change in alignment. A marker with stripes running both ways means the hazard is in the centre and either side is safe.",
        trap:
          "Reading the stripes as an arrow pointing at the hazard reverses the instruction, and reversing it steers you into the thing being marked.",
        excerptKey: "object-markers",
        sourceLabel: "PA Driver's Manual - Chapter 2, Objects Adjacent to the Roadway",
        sourceUrl: HB,
      },
      {
        id: "pa_s3_27",
        topic: "sharing",
        question:
          "A loaded truck at 65 mph on dry pavement needs roughly how much distance to stop completely?",
        choices: ["300 feet", "400 feet", "500 feet", "600 feet"],
        correctIndex: 3,
        explanation:
          "About 600 feet for a loaded truck with good tyres and properly adjusted brakes, against roughly 400 feet for a passenger car in the same conditions.",
        context:
          "The gap between those two numbers is why cutting in front of a truck and then slowing is so dangerous: you have taken away stopping distance the driver cannot get back. Many trucks and buses use air brakes, which take longer to build pressure than the hydraulic brakes on a car. Give them room on entry, on exit and when you pull back in after passing.",
        trap:
          "Four hundred feet is the car's figure and looks like the plausible answer for a truck. It is half the problem.",
        excerptKey: "truck-stopping-distance",
        sourceLabel: "PA Driver's Manual - Chapter 3, Braking",
        sourceUrl: HB,
      },
      {
        id: "pa_s3_28",
        topic: "rules",
        question: "When does Pennsylvania permit you to pass another vehicle on the right?",
        choices: [
          "Whenever the vehicle ahead is travelling below the speed limit",
          "When the driver ahead is turning or signalling left, or on a road with two or more lanes each way",
          "On any road, provided you use the shoulder",
          "Only on interstate highways",
        ],
        correctIndex: 1,
        explanation:
          "Two situations qualify: the driver ahead is making or signalling a left turn, or the road has two or more marked lanes in each direction. Neither of them lets you use the shoulder.",
        context:
          "Where the pass is because of a left-turning driver, the manual specifically bars leaving the roadway, and passing on the shoulder of a multi-lane highway is prohibited outright. A pass on the right is also a pass through the other driver's blind spot, so it needs to be finished quickly rather than lingered over.",
        trap:
          "Slow traffic ahead is not a legal basis for anything. The permission comes from the road layout or the other driver's turn, not from their speed.",
        excerptKey: "passing-on-right-left-turn",
        sourceLabel: "PA Driver's Manual - Chapter 3, Passing on the Right",
        sourceUrl: HB,
      },
      {
        id: "pa_s3_29",
        topic: "speed",
        question:
          "You are on a two-lane road at 45 mph and want to pass. Roughly how much clear road do you need?",
        choices: [
          "About a quarter of a mile",
          "About 300 feet",
          "About 500 feet",
          "About a mile",
        ],
        correctIndex: 0,
        explanation:
          "About a quarter of a mile of clear roadway at 45 mph, because the pass uses the lane that belongs to oncoming traffic.",
        context:
          "The pass also needs about 10 mph of speed advantage over the vehicle you are overtaking. At night the judgement gets harder, since headlights alone make an oncoming vehicle look further away than it is. When you come back in, wait until you can see both of the passed vehicle's headlights in your rearview mirror.",
        trap:
          "Five hundred feet sounds like a lot of road until you translate it into seconds against a closing speed of 90 mph.",
        excerptKey: "passing-quarter-mile",
        sourceLabel: "PA Driver's Manual - Chapter 3, Passing on a Two-Lane Road",
        sourceUrl: HB,
      },
      {
        id: "pa_s3_30",
        topic: "parking",
        question:
          "You have to leave your vehicle stopped on the roadway itself. What does the manual require?",
        choices: [
          "Hazard flashers on and the vehicle visible for at least 500 feet in both directions",
          "The hood raised and a warning triangle placed 100 feet back",
          "Headlights on full beam and the vehicle visible for 200 feet",
          "Nothing extra, provided one lane remains open to traffic",
        ],
        correctIndex: 0,
        explanation:
          "Four-way flashers go on, you leave room for traffic to get past, and the vehicle has to be visible for at least 500 feet in each direction.",
        context:
          "If the car is disabled rather than merely parked, get it as far off the road as you can, put the flashers on and raise the hood so other drivers understand why it is there. Pennsylvania also bars stopping on a limited access highway altogether unless traffic control devices allow it.",
        trap:
          "Leaving one lane open is not the standard. The requirement is about how far away you can be seen, which matters most on crests and bends.",
        excerptKey: "parking-visible-500-feet",
        sourceLabel: "PA Driver's Manual - Chapter 3, Parking",
        sourceUrl: HB,
      },
      {
        id: "pa_s3_31",
        topic: "licensing",
        question: "You move house within Pennsylvania. How long do you have to notify PennDOT?",
        choices: ["30 days", "15 days", "60 days", "90 days"],
        correctIndex: 1,
        explanation:
          "Fifteen days. The obligation applies to a change of name as well, and it applies even if the move takes you out of state.",
        context:
          "PennDOT issues a driver's licence update card carrying the new details, which you carry alongside the licence itself; there is no fee for non-commercial drivers. A separate rule covers people moving into Pennsylvania: with a valid licence from another state or from Canada, you have 60 days to get a Pennsylvania licence and surrender the old one.",
        trap:
          "Sixty days is the newcomer's deadline, not the existing driver's. Fifteen days is much shorter than people expect.",
        excerptKey: "name-address-change-15-days",
        sourceLabel: "PA Driver's Manual - Chapter 5, Change in Name or Address",
        sourceUrl: HB,
      },
      {
        id: "pa_s3_32",
        topic: "safety",
        question:
          "You are forced to drive below 40 mph on a limited access highway. What does the manual tell you to do?",
        choices: [
          "Switch on your hazard flashers to warn drivers behind you",
          "Move onto the shoulder and continue there",
          "Switch on your high beams",
          "Sound your horn at intervals",
        ],
        correctIndex: 0,
        explanation:
          "Below 40 mph on a limited access highway, the four-way flashers go on so faster traffic closing behind you understands the speed difference in time.",
        context:
          "The same communication logic runs through the manual. Tap the brakes three or four times where a following driver would not expect you to slow. Signal early. If the car breaks down, get off the road, flashers on, hood up, and park where you are easy to see. The horn is for the driver or pedestrian who has not seen you at all.",
        trap:
          "Driving on the shoulder feels considerate and is prohibited. The shoulder is not a slow lane.",
        excerptKey: "hazard-flashers-below-40",
        sourceLabel: "PA Driver's Manual - Chapter 3, Communicating Your Intentions",
        sourceUrl: HB,
      },
      {
        id: "pa_s3_33",
        topic: "impairment",
        question:
          "You refuse a breath test after a DUI arrest and are later found not guilty of the DUI. What happens to the refusal suspension?",
        choices: [
          "It is cancelled along with the charge",
          "It is reduced to 90 days",
          "It still applies: a one-year suspension for the refusal",
          "It applies only if you have a prior DUI conviction",
        ],
        correctIndex: 2,
        explanation:
          "The refusal suspension is independent of the criminal case. An acquittal on the DUI charge does not undo the one-year suspension for refusing the test.",
        context:
          "Refusing also carries a restoration fee of its own, starting at $500 and rising to $1,000 and $2,000 for later refusals, payable by certified check or money order on top of the ordinary restoration fee. If you refuse and are convicted anyway, the suspension can reach two and a half years, and a refusal with a prior DUI or prior refusal totals three years.",
        trap:
          "The refusal is treated as an administrative matter, not a criminal one, which is why winning the criminal case does nothing for it.",
        excerptKey: "refusal-even-if-not-guilty",
        sourceLabel: "PA Driver's Manual - Chapter 4, Implied Consent Law",
        sourceUrl: HB,
      },
      {
        id: "pa_s3_34",
        topic: "emergencies",
        question:
          "You reach a stretch of road covered by moving floodwater. How much water is enough to make you lose control?",
        choices: [
          "About two feet",
          "About a foot",
          "As little as six inches",
          "Only water deep enough to reach the door sills",
        ],
        correctIndex: 2,
        explanation:
          "Six inches of water is enough to cause loss of control or stall the engine, and some small cars will float in it. Two feet will carry away most vehicles, including SUVs.",
        context:
          "The reliable answer to moving water on the road is a different route. Water also hides missing pavement, washed-out bridges and weakened roadbed, and at night you may not see it until you are in it. Driving around or through a barrier or sign closing a road for hazardous conditions is a separate offence: two points, a fine of up to $250, and liability for the cost of rescuing you.",
        trap:
          "Six inches looks trivial from the driver's seat, which is exactly why nearly half of Pennsylvania's flood deaths involve vehicles.",
        excerptKey: "flood-six-inches",
        sourceLabel: "PA Driver's Manual - Chapter 3, Flooded Roadways",
        sourceUrl: HB,
      },
      {
        id: "pa_s3_35",
        topic: "rightOfWay",
        question:
          "You are turning left onto a road with two lanes going your way. Which lane should you end up in?",
        choices: [
          "Whichever lane has the shorter queue",
          "The right-hand lane, so faster traffic can pass",
          "Either lane, provided you signal",
          "The left-hand lane, the one closest to the centre line",
        ],
        correctIndex: 3,
        explanation:
          "Turn into the lane closest to the centre line when turning left, and into the right-hand lane when turning right. Change lanes afterwards, once the turn is finished.",
        context:
          "Doing it this way also keeps you clear of a driver turning right onto the same street from the opposite direction, and it keeps two opposing left-turners from tangling. The manual suggests picturing an X at the centre of the intersection and turning in front of it, rather than cutting round behind the other left-turning driver.",
        trap:
          "Swinging wide into the far lane to save a lane change later is the manoeuvre that collides with a right-turning car entering the same street.",
        excerptKey: "turn-into-closest-lane",
        sourceLabel: "PA Driver's Manual - Chapter 3, Left and Right Turns",
        sourceUrl: HB,
      },
    ],
  },
];
