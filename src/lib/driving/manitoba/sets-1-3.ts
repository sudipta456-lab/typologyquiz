// Manitoba practice sets 1 to 3.
//
// Every fact below was checked against two sources and nothing else: the
// Manitoba Driver's Handbook published by Manitoba Public Insurance (the back
// cover carries MPI's own marks, DVL0019, 02/02/2026 - this is the book the
// Class 5 knowledge test is written from), and The Highway Traffic Act,
// C.C.S.M. c. H60, on the Manitoba Laws site for the rules the handbook states
// only as a caption, only in part, or not at all.
//
// Five things are worth naming up front, because a learner arriving from
// Alberta, Ontario, Saskatchewan or a US state will get them wrong.
//
// 1. FOLLOWING DISTANCE. Manitoba teaches FOUR seconds under ideal
//    conditions, not two and not three, and SIX seconds on gravel. Almost
//    every other Canadian handbook says two or three.
// 2. LEARNER PASSENGERS. A Manitoba Class 5L may carry rear-seat passengers up
//    to the number of working seatbelts. The supervising driver only has to be
//    the ONLY FRONT SEAT passenger. The passenger cap lands in the
//    Intermediate Stage instead, and only between midnight and 5 a.m.
// 3. SCHOOL BUSES. Flashing reds stop traffic in both directions, five metres
//    back, EXCEPT where a physical median or ditch divides the roadway. The
//    handbook says in terms that a double solid line is not a physical
//    separation, and s.137(3) of the Act carries the same exception. The same
//    "physical separation" test governs the crosswalk duty on page 71.
// 4. DEFAULT SPEEDS. 50 km/h urban and 90 km/h rural. The rural default is 90,
//    not 80 and not 100, and s.94.2 of the Act frames it as inside or outside
//    a "restricted speed area" rather than by the word "city".
// 5. THE NUMBERS ARE THE TEST. Manitobans who have sat the knowledge test
//    say over and over that what caught them was a distance or a duration -
//    how far from a hydrant, how far back from a rail, how many months in a
//    stage, how far the horn must carry. Sets 3 and 5 are built accordingly.
//
// Two conflicts between official sources shaped what is NOT asked here.
//
//  - TEST AND LICENCE FEES. The handbook (page 9) prices a knowledge test at
//    $10 and a Class 5 road test at $30; MPI's separately published Graduated
//    Driver Licensing guide prices the same tests at $12 and $35, and states a
//    different remedial-instruction rule (five hours after three failed road
//    tests, against the handbook's two hours after four). No question is keyed
//    on a fee or on that ladder. The research note records both readings.
//  - RIGHT TURN ON RED. The handbook allows it after a complete stop unless a
//    sign or traffic says otherwise. Municipal bylaws add signed exceptions.
//    Every item here is keyed on the stop and on the sign, never on a claim
//    that a particular intersection allows it.
//
// Questions are original. No handbook sentence is reproduced as a question, no
// item is lifted from a practice-test site, and the explanation, context and
// trap notes are written from scratch. Where a number appears (50 km/h, three
// metres, 1.6 millimetres), it is the number MPI or the Act publishes.

import type { DrivingTestSet } from "../types";

const HB = "https://www.mpi.mb.ca/en/PDFs/CompleteHandbook.pdf";
/** Printed page number to a PDF page anchor. The book's page 1 is PDF page 3. */
const hb = (page: number) => `${HB}#page=${page + 2}`;
const HTA = "https://web2.gov.mb.ca/laws/statutes/ccsm/h060.php";

export const manitobaSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Manitoba Basics",
    difficulty: "starter",
    description:
      "Thirty warm-up questions on the rules you meet in your first hour on a Manitoba road: what the shapes mean, who goes first, and the handful of numbers MPI expects you to know without thinking about them.",
    questions: [
      {
        id: "mb_s1_01",
        topic: "signs",
        question:
          "Manitoba keeps one sign shape for one message only. What is an eight-sided red sign telling you to do?",
        choices: [
          "Slow right down and carry on if the way looks clear",
          "Give way to anything already on the cross street",
          "Stop only if another road user is close enough to matter",
          "Come to a complete stop",
        ],
        correctIndex: 3,
        explanation:
          "The octagon is reserved for stop signs and nothing else. The stop it asks for is a real one, with the wheels no longer turning, and moving off afterwards is a separate decision you make once the way is clear.",
        context:
          "MPI builds meaning into shape and colour so you can identify a sign in the dark, in fog or under road spray before you can read a word on it. Octagon is stop, a downward-pointing triangle is yield, a diamond warns of a hazard ahead, and a fluorescent yellow-green pentagon marks a school area.",
        trap:
          "Slowing down and carrying on describes a yield sign. An empty cross street never turns a stop sign into a yield sign.",
        excerptKey: "sign-octagon",
        sourceLabel: "Manitoba Driver's Handbook - Sign shapes and colours",
        sourceUrl: hb(22),
      },
      {
        id: "mb_s1_02",
        topic: "speed",
        question:
          "You turn onto a residential street in a Manitoba city and there is no speed limit sign anywhere. What is the limit?",
        choices: ["30 km/h", "40 km/h", "50 km/h", "60 km/h"],
        correctIndex: 2,
        explanation:
          "Manitoba sets a built-in urban maximum of 50 km/h, so an unsigned city street is a 50 zone. Signs only go up when the authority wants something other than 50.",
        context:
          "There are two defaults to carry in your head. Inside urban areas the maximum is 50 km/h and outside them it is 90 km/h. The Highway Traffic Act frames the same pair as inside or outside a restricted speed area. Any posted sign overrides both, and the posted number is a maximum for good conditions, not a target.",
        trap:
          "Thirty feels right because school and playground zones use it, but 30 only binds you where it is actually posted or where the school-zone rule applies.",
        excerptKey: "default-speed-limits",
        sourceLabel: "Manitoba Driver's Handbook - Speed",
        sourceUrl: hb(57),
      },
      {
        id: "mb_s1_03",
        topic: "signs",
        question: "What does a triangular sign with the tip pointing down require of you?",
        choices: [
          "Yield the right-of-way, slowing and stopping if you have to",
          "Stop completely every time, the same as a stop sign",
          "Warn of a hazard somewhere ahead",
          "Note that the road narrows",
        ],
        correctIndex: 0,
        explanation:
          "The downward triangle is the yield sign. You slow as you approach, look, and give way to whatever has the right-of-way. If giving way means stopping, you stop.",
        context:
          "Yield signs sit where a lane or road merges with another lane or road, which is exactly where a driver who does not slow down runs out of options. The duty is to arrive slowly enough that stopping is still available to you.",
        trap:
          "A yield sign is not a licence to roll through. Where traffic or a pedestrian is there, the yield becomes a full stop.",
        excerptKey: "sign-yield-triangle",
        sourceLabel: "Manitoba Driver's Handbook - Sign shapes and colours",
        sourceUrl: hb(22),
      },
      {
        id: "mb_s1_04",
        topic: "signals",
        question: "The light ahead of you turns amber while you are still well back from the intersection. What does Manitoba expect?",
        choices: [
          "Speed up so you clear before the red",
          "Carry on at the same speed, since amber means proceed with care",
          "Slow down and stop",
          "Stop only if a vehicle is waiting on the cross street",
        ],
        correctIndex: 2,
        explanation:
          "Amber is a warning that red is coming, so the expected response is to slow and stop. Accelerating to make the light is the behaviour the handbook singles out as wrong.",
        context:
          "The one case where you keep going is when you are already inside the intersection as the light changes. Then you continue through rather than stopping in the middle of it. That distinction, established or not established in the intersection, decides several Manitoba items.",
        trap:
          "Racing the amber is the reason drivers on the cross street are told to check for it before moving off on their green.",
        excerptKey: "signal-amber",
        sourceLabel: "Manitoba Driver's Handbook - Traffic control signals",
        sourceUrl: hb(31),
      },
      {
        id: "mb_s1_05",
        topic: "rightOfWay",
        question:
          "You and another vehicle reach an intersection with no signs and no lights at the same moment. The other vehicle is on your right. Who goes first?",
        choices: [
          "You, if you are going straight through",
          "Whoever signals first",
          "The vehicle on your right",
          "Whoever is on the wider of the two roads",
        ],
        correctIndex: 2,
        explanation:
          "At an uncontrolled intersection both drivers slow, and the driver on the left yields to the driver on the right. Going straight through earns you nothing, and neither does signalling early.",
        context:
          "Section 128 of The Highway Traffic Act says the same thing for two vehicles entering from different highways at approximately the same time. The rule only decides a genuine tie. If one vehicle clearly arrived first, that vehicle goes.",
        trap:
          "Uncontrolled intersections are usually quiet residential corners, which is exactly why people roll through them assuming nothing is coming.",
        excerptKey: "uncontrolled-intersection",
        sourceLabel: "Manitoba Driver's Handbook - Right-of-way",
        sourceUrl: hb(61),
        commonlyMissed: true,
      },
      {
        id: "mb_s1_06",
        topic: "signs",
        question: "A yellow diamond-shaped sign appears at the roadside. What is it doing?",
        choices: [
          "Warning you of a possible dangerous condition on or near the road",
          "Regulating your speed",
          "Telling you which highway you are on",
          "Marking a school area",
        ],
        correctIndex: 0,
        explanation:
          "The diamond is the warning shape. It flags something on or near the roadway that could catch you out, such as a sharp curve, a side road or a narrow bridge, and the expected response is to slow enough to keep full control.",
        context:
          "Warning signs describe a condition immediately ahead rather than imposing a rule, so there is usually no number attached. Regulatory signs, which do carry the force of law, are square or rectangular.",
        trap:
          "Because a diamond carries no posted limit, drivers treat it as advisory decoration. The hazard it names is real even when the sign does not tell you a speed.",
        excerptKey: "sign-diamond",
        sourceLabel: "Manitoba Driver's Handbook - Sign shapes and colours",
        sourceUrl: hb(22),
      },
      {
        id: "mb_s1_07",
        topic: "rules",
        question:
          "Four vehicles arrive at a four-way stop at clearly different times. Who has the right to move off first?",
        choices: [
          "The vehicle that stopped first",
          "The vehicle turning right",
          "The vehicle going straight through",
          "The vehicle on the widest road",
        ],
        correctIndex: 0,
        explanation:
          "At a four-way stop the order is the order of arrival. The vehicle that stopped first goes first, whatever direction anyone is travelling.",
        context:
          "Order of arrival settles almost every four-way stop. The tie-breaker only comes out when two or more vehicles stop at the same time, and then the driver on the left yields to the driver on the right.",
        trap:
          "Turning right does not buy you priority at a four-way stop, and nor does going straight. Those rules belong to other situations.",
        excerptKey: "four-way-stop-first",
        sourceLabel: "Manitoba Driver's Handbook - Four-way stop signs",
        sourceUrl: hb(30),
      },
      {
        id: "mb_s1_08",
        topic: "signals",
        question:
          "You are stopped at a steady red light and want to turn right. What does Manitoba allow?",
        choices: [
          "Turn straight away if nothing is coming",
          "Turn only once the light goes green",
          "Turn after stopping completely, unless a sign says otherwise and provided traffic and pedestrians permit",
          "Turn only where a sign expressly permits it",
        ],
        correctIndex: 2,
        explanation:
          "A right turn on red is allowed by default in Manitoba, but two conditions attach: you must have come to a complete stop first, and there must be no sign taking the permission away. After that you give way to pedestrians and to traffic that is lawfully moving.",
        context:
          "The same permission covers a left turn on red from a one-way street onto another one-way street, again after a full stop and after yielding. A red light otherwise means stop and stay stopped.",
        trap:
          "Clear enough to go is not the test. If you never actually stopped, the turn is unlawful even at three in the morning on an empty street.",
        excerptKey: "signal-red-turns",
        sourceLabel: "Manitoba Driver's Handbook - Traffic control signals",
        sourceUrl: hb(31),
      },
      {
        id: "mb_s1_09",
        topic: "parking",
        question: "How close to a fire hydrant may you park in Manitoba?",
        choices: [
          "No closer than three metres",
          "No closer than five metres",
          "No closer than nine metres",
          "No closer than 15 metres",
        ],
        correctIndex: 0,
        explanation:
          "The setback is three metres, measured from the point on the curb or the edge of the roadway directly opposite the hydrant. Park inside that and you are parked illegally even if the car fits.",
        context:
          "Manitoba's parking setbacks are a short ladder of numbers worth memorising together: three metres from a hydrant or a crosswalk, six metres from the driveway entrance to a fire station, nine metres from a stop sign or signal at an intersection, 15 metres from a pedestrian corridor and 30 metres from the nearest rail at a railway crossing.",
        trap:
          "People who have driven elsewhere reach for five metres, which is a common figure in other jurisdictions. Manitoba's hydrant number is three.",
        excerptKey: "parking-hydrant-three-metres",
        sourceLabel: "Manitoba Driver's Handbook - Illegal parking",
        sourceUrl: hb(89),
        commonlyMissed: true,
      },
      {
        id: "mb_s1_10",
        topic: "safety",
        question:
          "Conditions are ideal and you are following the vehicle in front. How much space does MPI tell you to keep?",
        choices: ["Two seconds", "Three seconds", "Four seconds", "One car length for every 10 km/h"],
        correctIndex: 2,
        explanation:
          "Manitoba teaches a four-second following distance under ideal conditions, and more when conditions are worse. You count from the moment the vehicle ahead passes a fixed marker until your own front bumper reaches it.",
        context:
          "The interval stretches with the surface. Gravel calls for at least six seconds. On snow, ice or in poor visibility you add more again. The point of counting in seconds rather than car lengths is that the gap grows automatically as you speed up.",
        trap:
          "Two seconds is the rule almost everywhere else in Canada, and it is the number most people arrive with. Manitoba's baseline is double that.",
        excerptKey: "following-four-seconds",
        sourceLabel: "Manitoba Driver's Handbook - Following safely",
        sourceUrl: hb(57),
        commonlyMissed: true,
      },
      {
        id: "mb_s1_11",
        topic: "licensing",
        question: "What is the minimum age to apply for a Manitoba Class 5L Learner Stage licence?",
        choices: [
          "14",
          "15, with no conditions",
          "15 and a half, but only while enrolled in a high school driver education course that is currently running",
          "18 unless a parent signs",
        ],
        correctIndex: 2,
        explanation:
          "The ordinary minimum is 16. The single way in earlier is 15 and a half while you are enrolled in a high school driver education course that is currently in progress. Under 18 you also need a parent or guardian's consent.",
        context:
          "The Learner Stage runs a minimum of nine months, and the clock only counts time when you hold a valid licence. Getting in at 15 and a half through a school course therefore also brings the road test forward.",
        trap:
          "The school-course route is not simply an age of 15 and a half. The course has to be currently in progress, not finished and not merely booked.",
        excerptKey: "gdl-learner-age",
        sourceLabel: "Manitoba Driver's Handbook - Class 5L Licence (Learner Stage)",
        sourceUrl: hb(11),
      },
      {
        id: "mb_s1_12",
        topic: "signs",
        question: "A five-sided sign in fluorescent yellow-green is coming up. What does it mark?",
        choices: [
          "A construction zone",
          "A hospital ahead",
          "A pedestrian corridor",
          "A school area",
        ],
        correctIndex: 3,
        explanation:
          "The fluorescent yellow-green pentagon marks a school area. It is telling you to drive cautiously because children could be crossing.",
        context:
          "Colour does as much work as shape in Manitoba. Orange marks construction and maintenance, fluorescent yellow-green marks schools, and green guide signs tell you where you are or how to get somewhere.",
        trap:
          "Construction signs are the other high-visibility colour, but they are orange and usually diamond-shaped. The pentagon is only ever used for schools.",
        excerptKey: "sign-school-pentagon",
        sourceLabel: "Manitoba Driver's Handbook - Sign shapes and colours",
        sourceUrl: hb(22),
      },
      {
        id: "mb_s1_13",
        topic: "signals",
        question: "On a Manitoba road, what do white lane lines tell you?",
        choices: [
          "Traffic on both sides moves in opposite directions",
          "Parking is permitted to the right of the line",
          "The lane is reserved for buses",
          "Traffic on both sides moves in the same direction",
        ],
        correctIndex: 3,
        explanation:
          "White separates traffic moving the same way. Yellow separates traffic moving in opposite directions. That one distinction tells you instantly whether the vehicles beside you are coming towards you.",
        context:
          "Line style then tells you what you may do. A solid line on the left of your lane means no passing and no lane change. A broken line means you may pass or change lanes when it is safe both ahead and behind.",
        trap:
          "It is easy to memorise the colours backwards. The way to keep them straight is that yellow, the more urgent colour, marks the more dangerous situation of oncoming traffic.",
        excerptKey: "markings-white-lines",
        sourceLabel: "Manitoba Driver's Handbook - Pavement markings",
        sourceUrl: hb(34),
      },
      {
        id: "mb_s1_14",
        topic: "rules",
        question:
          "You are in the correct lane inside a Manitoba city and about to turn. How far before the turn must you signal?",
        choices: ["At least 15 metres", "At least 30 metres", "At least 60 metres", "At least 150 metres"],
        correctIndex: 1,
        explanation:
          "Inside a city, town or village the signal goes on at least 30 metres before the turn. Outside those places the distance stretches to at least 150 metres, because closing speeds are higher.",
        context:
          "The signal is only half of it. You get into the proper lane first, then signal, because a signal given while you are still changing lanes tells other drivers the wrong thing about what you are doing.",
        trap:
          "The rural figure of 150 metres is the one people forget. On a provincial highway a signal given 30 metres out is far too late.",
        excerptKey: "signal-distance",
        sourceLabel: "Manitoba Driver's Handbook - General rules of turning",
        sourceUrl: hb(43),
        commonlyMissed: true,
      },
      {
        id: "mb_s1_15",
        topic: "sharing",
        question:
          "A school bus on an ordinary undivided road has its red lights flashing and its stop arm out. What must you do?",
        choices: [
          "Stop at least five metres from the bus, from either direction",
          "Pass slowly on the left if children are already clear",
          "Stop only if you are behind the bus",
          "Sound your horn and continue at reduced speed",
        ],
        correctIndex: 0,
        explanation:
          "Flashing reds and an extended stop arm mean you stop, whichever direction you are coming from, and you stop at least five metres back from the bus. Passing it is an offence.",
        context:
          "The sequence runs amber then red. Amber overhead lights mean the bus is about to stop, so you slow and prepare. Once the reds are on you stay stopped until they go out and the stop arm folds back in.",
        trap:
          "Drivers stop too close. Five metres is the minimum, and it exists so that a child crossing in front of the bus is not stepping straight out at your bumper.",
        excerptKey: "school-bus-five-metres",
        sourceLabel: "Manitoba Driver's Handbook - School buses",
        sourceUrl: hb(63),
        commonlyMissed: true,
      },
      {
        id: "mb_s1_16",
        topic: "impairment",
        question:
          "You hold a Manitoba Class 5L licence. How much alcohol may be in your system while you drive?",
        choices: [
          "None at all",
          "Up to .05",
          "Up to .08, the same as any other driver",
          "Any amount, provided a sober supervising driver is beside you",
        ],
        correctIndex: 0,
        explanation:
          "New drivers may have no drugs or alcohol in their system at all. Breaching it brings an immediate 24-hour roadside suspension, a driving-record review and a reinstatement charge.",
        context:
          "The restriction covers far more of your driving life than people expect. It runs through the whole Learner Stage, the whole Intermediate Stage, and then the first 36 months of the Full Stage, which is roughly five years of zero tolerance from the day you start.",
        trap:
          "The .08 figure belongs to the Criminal Code and applies to experienced drivers. For a novice the threshold is nothing, so one drink is already a breach.",
        excerptKey: "novice-zero-tolerance",
        sourceLabel: "Manitoba Driver's Handbook - Drug and alcohol restriction",
        sourceUrl: hb(115),
      },
      {
        id: "mb_s1_17",
        topic: "emergencies",
        question: "You are involved in a collision on a Manitoba road. What is the first thing the law requires?",
        choices: [
          "Stop your vehicle immediately",
          "Photograph the damage before anything is moved",
          "Telephone MPI to open a claim",
          "Move both vehicles off the road before doing anything else",
        ],
        correctIndex: 0,
        explanation:
          "Stopping immediately is the first duty. Everything else, including exchanging details and reporting, follows from having stopped.",
        context:
          "After stopping you give your name and address to anyone whose vehicle or property was damaged. A collision involving serious injury, meaning someone was taken to hospital, or a death must be reported to police within seven days if you did not report to an officer at the scene.",
        trap:
          "Photographs and insurance calls matter, but leaving the scene to make them is a separate and much more serious offence than anything the collision itself involved.",
        excerptKey: "collision-stop-immediately",
        sourceLabel: "Manitoba Driver's Handbook - If you're involved in a collision",
        sourceUrl: hb(109),
      },
      {
        id: "mb_s1_18",
        topic: "speed",
        question:
          "You are on a rural Manitoba road outside any town and there is no speed limit sign. What limit applies?",
        choices: ["70 km/h", "80 km/h", "90 km/h", "100 km/h"],
        correctIndex: 2,
        explanation:
          "Outside urban areas the default maximum is 90 km/h. It is the figure the Act uses too, for any highway outside a restricted speed area.",
        context:
          "Ninety is a maximum, not a recommendation. The Act separately makes it an offence to drive at a speed that is not reasonable and prudent in the circumstances even when you are at or under the posted limit, which is how a driver doing 90 in freezing fog is still speeding.",
        trap:
          "Eighty is the rural default in several other provinces and 100 is the number people associate with a divided highway. Manitoba's unposted rural default is 90.",
        excerptKey: "hta-speed-defaults",
        sourceLabel: "The Highway Traffic Act - Speed limits, s. 94.2",
        sourceUrl: HTA,
      },
      {
        id: "mb_s1_19",
        topic: "signs",
        question: "You see an X-shaped sign on a post at the roadside. What does it mean?",
        choices: [
          "A crossroads is ahead",
          "Lanes cross here",
          "A pedestrian crossing",
          "A railway crossing",
        ],
        correctIndex: 3,
        explanation:
          "The crossbuck marks a railway crossing. You slow down, look both ways for a train, and yield the right-of-way to trains, which have it at every crossing.",
        context:
          "A small square sign under the crossbuck gives the number of tracks. Where there is more than one track, the danger is a second train hidden behind the first, so you never start across immediately after a train has cleared.",
        trap:
          "A crossbuck often stands alone, with no lights and no bells. The absence of signals does not soften the duty, and most Manitoba crossings have no electronic warning at all.",
        excerptKey: "sign-crossbuck",
        sourceLabel: "Manitoba Driver's Handbook - Sign shapes and colours",
        sourceUrl: hb(22),
      },
      {
        id: "mb_s1_20",
        topic: "parking",
        question: "You are parking facing downhill on a Manitoba street with a curb. Which way do the front wheels go?",
        choices: [
          "Straight ahead",
          "Turned away from the curb",
          "It makes no difference with an automatic transmission",
          "Turned towards the curb",
        ],
        correctIndex: 3,
        explanation:
          "Facing downhill, you turn the wheels towards the curb so the curb itself catches the vehicle if it starts to roll. Facing uphill you turn them away from the curb, so that rolling back brings the tire against it.",
        context:
          "The wheels are one of three steps on any hill. An automatic goes into Park and a manual into reverse or low gear, and in both cases the parking brake goes on firmly. If there is no curb at all, turn the wheels slightly to the right whichever way you are facing, so a runaway vehicle leaves the roadway.",
        trap:
          "Being in Park is not a substitute. The handbook asks for the wheels, the gear and the brake together, and a road test examiner looks for all three.",
        excerptKey: "hill-park-downhill",
        sourceLabel: "Manitoba Driver's Handbook - Parking on a hill or incline",
        sourceUrl: hb(88),
      },
      {
        id: "mb_s1_21",
        topic: "rules",
        question: "Where does the Manitoba handbook tell you never to change lanes?",
        choices: [
          "On a bridge",
          "In a construction zone",
          "At intersections",
          "Within 100 metres of a hill crest",
        ],
        correctIndex: 2,
        explanation:
          "The instruction is flat: never change lanes at intersections. Vehicles are turning across your path there and other drivers are reading your position to predict what you will do.",
        context:
          "The lane-change sequence itself is mirror, signal, shoulder check. If you cannot shoulder check and are working from mirrors alone, you may only move one lane at a time. Where you can shoulder check, crossing several lanes on one signal is acceptable provided the whole movement can be done safely.",
        trap:
          "Drivers change lanes inside intersections constantly to get around a car waiting to turn left. Common does not make it correct, and it is the movement most likely to surprise a turning driver.",
        excerptKey: "never-change-lanes-at-intersections",
        sourceLabel: "Manitoba Driver's Handbook - Lane changing",
        sourceUrl: hb(42),
      },
      {
        id: "mb_s1_22",
        topic: "safety",
        question:
          "Who is responsible for making sure the children in your vehicle are properly secured?",
        choices: [
          "The driver",
          "Each passenger, for themselves",
          "Whichever adult is sitting nearest to them",
          "The registered owner of the vehicle",
        ],
        correctIndex: 0,
        explanation:
          "The driver carries the responsibility for every minor in the vehicle being properly secured. It is not shared out among the adults on board.",
        context:
          "Everyone in the vehicle must wear the complete seatbelt assembly wherever one is fitted, unless the law exempts them. Worn properly means snug over the shoulder and across the hips, with the fabric flat, and never tucked under the arm.",
        trap:
          "Older children are the ones who slip. Manitoba requires a booster seat until a child is at least 145 cm tall, 36 kg, or nine years old.",
        excerptKey: "seatbelt-driver-responsibility",
        sourceLabel: "Manitoba Driver's Handbook - Seatbelts",
        sourceUrl: hb(17),
      },
      {
        id: "mb_s1_23",
        topic: "signals",
        question: "A traffic light ahead is showing a flashing red. What is required?",
        choices: [
          "Slow down and be ready to stop",
          "Treat it as a green because the signal has failed",
          "Stop and wait for a police officer to direct you",
          "Come to a complete stop, then go on when it is safe",
        ],
        correctIndex: 3,
        explanation:
          "A flashing red is a stop. You come to a complete stop and then proceed only when it is safe, which makes it behave like a stop sign.",
        context:
          "The other flashing indication is amber, and it means something different: slow down and be prepared to stop, and yield to pedestrians. Confusing the two is dangerous in both directions, because a driver on the flashing amber often has a driver facing a flashing red on the cross street.",
        trap:
          "A flashing red does not mean the signal is broken and does not turn the intersection into a free-for-all. It is a lawful signal with a specific meaning.",
        excerptKey: "signal-flashing-red",
        sourceLabel: "Manitoba Driver's Handbook - Traffic control signals",
        sourceUrl: hb(32),
      },
      {
        id: "mb_s1_24",
        topic: "rightOfWay",
        question:
          "A pedestrian steps into a crosswalk that has no paint and no signs, just the line where the sidewalk continues across the road. What is your duty?",
        choices: [
          "None, since an unmarked crossing is not a crosswalk",
          "Sound your horn to warn them",
          "Yield only if they are already past the centre line",
          "Stop and yield the right-of-way, exactly as at a painted crosswalk",
        ],
        correctIndex: 3,
        explanation:
          "Pedestrians have the right-of-way at both marked and unmarked crosswalks. An unmarked crosswalk is simply the extension of the sidewalk across the road at an intersection, and no paint or sign is needed for it to exist.",
        context:
          "The duty gives way in one case only: where the pedestrian is on the far side of a divided highway separated by a physical median. The handbook is explicit that a double solid line is not a physical separation, so painted divisions do not release you.",
        trap:
          "Drivers look for paint before they concede the crossing. Most Manitoba intersections have an unmarked crosswalk on every leg whether or not anyone has painted it.",
        excerptKey: "crosswalk-right-of-way",
        sourceLabel: "Manitoba Driver's Handbook - Crosswalks",
        sourceUrl: hb(71),
      },
      {
        id: "mb_s1_25",
        topic: "licensing",
        question: "A peace officer pulls you over in Manitoba. What must you be able to produce?",
        choices: [
          "Your driver's licence and the vehicle registration certificate",
          "Your driver's licence only",
          "Nothing, provided the officer can look you up",
          "Your driver's licence and proof of address",
        ],
        correctIndex: 0,
        explanation:
          "Your licence has to be in your possession whenever you drive, and it has to be produced along with the vehicle registration certificate when a peace officer asks.",
        context:
          "The licence you carry is one of the few documents Manitoba insists on physically. When you are first licensed you are given a temporary certificate valid for up to 45 days that you must carry until the permanent card arrives in the mail.",
        trap:
          "Having a licence and having it with you are different things. Leaving it at home is its own offence, quite apart from whether you are entitled to drive.",
        excerptKey: "licence-in-possession",
        sourceLabel: "Manitoba Driver's Handbook - Manitoba's one-piece driver's licence",
        sourceUrl: hb(14),
      },
      {
        id: "mb_s1_26",
        topic: "signs",
        question: "What kind of sign is an orange diamond with a worker symbol on it?",
        choices: [
          "A guide sign showing services ahead",
          "A regulatory sign setting a limit",
          "A temporary detour marker only",
          "A construction and maintenance sign",
        ],
        correctIndex: 3,
        explanation:
          "Orange is the construction and maintenance colour. These signs warn of roadworks ahead and tell you to slow to a safe speed, and where a maximum is posted it binds you.",
        context:
          "Inside a designated construction zone, marked by a special sign at each end, speeding fines are doubled. That doubling applies whether or not workers or equipment are present and whether or not the limit has been reduced.",
        trap:
          "An empty construction zone at midnight is still a construction zone. The doubled fine does not depend on anyone being there to see you.",
        excerptKey: "construction-double-fines",
        sourceLabel: "Manitoba Driver's Handbook - Construction zones",
        sourceUrl: hb(67),
        commonlyMissed: true,
      },
      {
        id: "mb_s1_27",
        topic: "sharing",
        question:
          "You are overtaking a cyclist travelling the same way as you on a Manitoba road. What is the minimum space you must leave?",
        choices: [
          "One metre",
          "Half a metre",
          "1.5 metres",
          "Two metres",
        ],
        correctIndex: 0,
        explanation:
          "A driver passing a cyclist or a power-assisted bicycle going the same way must keep at least one metre between the vehicle and the cyclist. In a narrow lane that will mean changing lanes to pass.",
        context:
          "Cyclists have the same rights and duties on the road as drivers and must obey signs and signals like anyone else. They are also not confined to a bike lane where one exists, so a cyclist in the general lane is where they are entitled to be.",
        trap:
          "One metre is a floor, not a target. Where the lane is too narrow to give it, the correct response is to wait rather than to squeeze past at 90 centimetres.",
        excerptKey: "passing-cyclist-one-metre",
        sourceLabel: "Manitoba Driver's Handbook - Passing a cyclist",
        sourceUrl: hb(78),
      },
      {
        id: "mb_s1_28",
        topic: "rules",
        question: "How should a right turn at an ordinary Manitoba intersection be made?",
        choices: [
          "From whichever lane is moving fastest",
          "From the second lane, so you can see around parked cars",
          "From the centre of the road, swinging wide",
          "From the right lane nearest the curb into the right lane nearest the curb of the other road",
        ],
        correctIndex: 3,
        explanation:
          "A right turn goes from the curb lane into the curb lane. The only exception is where the destination curb lane is blocked within 30 metres of the intersection.",
        context:
          "Section 121(2) of the Act frames it as approaching and turning as close as practicable to the right-hand curb. Before you go, you watch for and yield to pedestrians crossing the street you are turning into, and to any cyclist on your right.",
        trap:
          "Swinging wide to make the turn easier puts you across the second lane, which is where a driver going straight expects to be. Trucks do it because they have to, and cars are not trucks.",
        excerptKey: "right-turn-lane",
        sourceLabel: "Manitoba Driver's Handbook - Right turns",
        sourceUrl: hb(44),
      },
      {
        id: "mb_s1_29",
        topic: "speed",
        question:
          "A Manitoba school zone sits on a street where the regular posted limit is 60 km/h. How low may the school-zone maximum be set?",
        choices: ["50 km/h", "40 km/h", "30 km/h", "20 km/h"],
        correctIndex: 2,
        explanation:
          "Where the regular posted limit is under 80 km/h, the school-zone maximum may be as low as 30 km/h. Where the regular limit is 80 km/h or above, the reduced figure may go as low as 50.",
        context:
          "The school-zone limit is only part of the protection. Passing another moving vehicle in a school area is illegal within 15 minutes of classes opening or closing and at any time children are on the grounds or near the road.",
        trap:
          "The 50 figure is real but belongs to the high-speed case. On an ordinary 50 or 60 street, the school-zone number is 30.",
        excerptKey: "school-zone-speed",
        sourceLabel: "Manitoba Driver's Handbook - School and playground areas",
        sourceUrl: hb(75),
      },
      {
        id: "mb_s1_30",
        topic: "safety",
        question: "When must your headlights be switched on in Manitoba?",
        choices: [
          "Only between sunset and sunrise",
          "Only when the street lights are on",
          "From half an hour before sunset until half an hour after sunrise, and whenever visibility drops below 60 metres",
          "Whenever the wipers are running",
        ],
        correctIndex: 2,
        explanation:
          "The window runs from half an hour before sunset to half an hour after sunrise, and separately whenever visibility is reduced to 60 metres. The second trigger is what catches drivers in snow, fog or heavy rain at midday.",
        context:
          "Low beam is the right choice under street lighting, in fog and when following another vehicle closely. Dim from high beam at least 450 metres before an oncoming vehicle and at least 60 metres when you come up behind one.",
        trap:
          "Daytime running lights are not headlights. They usually leave your tail lights dark, which is exactly the failure that matters in blowing snow.",
        excerptKey: "headlight-hours",
        sourceLabel: "Manitoba Driver's Handbook - Lights",
        sourceUrl: hb(91),
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Core Rules of the Road",
    difficulty: "easy",
    description:
      "Thirty questions on the everyday rules: lines and lights, turning, merging, parking setbacks, and what to do when an emergency vehicle appears behind you.",
    questions: [
      {
        id: "mb_s2_01",
        topic: "signals",
        question: "There is a solid line on the left-hand side of your lane. What does it permit?",
        choices: [
          "Passing, provided you can see far enough ahead",
          "Passing but not a lane change",
          "Changing lanes but not passing",
          "Neither passing nor changing lanes",
        ],
        correctIndex: 3,
        explanation:
          "A solid line on the left of your lane means you must not pass and must not change lanes. It is one rule covering both movements, not two separate permissions.",
        context:
          "The one thing a solid line does not prevent is turning left across it into a private road or driveway, which stays permissible over a single or a double solid line. A broken line lets you pass or change lanes when it is safe both in front and behind.",
        trap:
          "Drivers treat the solid line as a suggestion when the road ahead looks empty. The line is placed where sight distance is inadequate, which is precisely when the road looks emptier than it is.",
        excerptKey: "markings-solid-line-left",
        sourceLabel: "Manitoba Driver's Handbook - Pavement markings",
        sourceUrl: hb(34),
      },
      {
        id: "mb_s2_02",
        topic: "signals",
        question: "What do two solid yellow lines down the middle of a Manitoba road mean?",
        choices: [
          "Passing is prohibited for traffic going either way",
          "Passing is allowed for whichever direction has the broken line",
          "The road is one-way",
          "The centre lane is shared for left turns",
        ],
        correctIndex: 0,
        explanation:
          "A double solid line bans passing in both directions. Neither side gets to cross it to overtake.",
        context:
          "Where a solid and a broken line run together, the side with the solid line may not pass and the side with the broken line may. Reading which line is on your side of the road is the whole skill.",
        trap:
          "A double solid line is not a physical separation of the roadway. That distinction matters for school buses and crosswalks, where only a real median or ditch changes your duty.",
        excerptKey: "markings-double-solid",
        sourceLabel: "Manitoba Driver's Handbook - Pavement markings",
        sourceUrl: hb(34),
      },
      {
        id: "mb_s2_03",
        topic: "signals",
        question: "A green arrow is showing for your movement. What does it allow?",
        choices: [
          "Only the movement the arrow points to, and only from the proper lane",
          "Any movement through the intersection",
          "A left turn regardless of what the arrow shows",
          "Proceeding after yielding to oncoming traffic",
        ],
        correctIndex: 0,
        explanation:
          "A green arrow, steady or flashing, permits only the movement it points at, and only if you are in the correct lane for it. It is not a general green.",
        context:
          "A steady amber arrow may follow a green arrow, and it warns that oncoming traffic is about to get a green. It means slow down and stop, exactly as a circular amber does.",
        trap:
          "Being in the wrong lane does not convert an arrow into permission. If you are in the through lane when the left arrow lights, the arrow is not for you.",
        excerptKey: "signal-green-arrow",
        sourceLabel: "Manitoba Driver's Handbook - Traffic control signals",
        sourceUrl: hb(32),
      },
      {
        id: "mb_s2_04",
        topic: "signals",
        question:
          "You are in the right lane facing a red light, and a green left-arrow is lit alongside that red. May you turn right?",
        choices: [
          "Yes, after a complete stop, since right on red is the default",
          "Yes, but only if a sign expressly allows it",
          "No, a right turn is illegal in that situation even without a sign forbidding it",
          "Only if there is no pedestrian in the crosswalk",
        ],
        correctIndex: 2,
        explanation:
          "When a green left-arrow is shown together with a red light, a right turn is illegal, and no sign is needed to make it so. The arrow is protecting the left-turning traffic and a right turn crosses into it.",
        context:
          "The picture changes completely if the green left-arrow is lit alone, with the red light off. Then you may turn right if it is safe and no sign forbids it. The presence or absence of the red beside the arrow is the whole test.",
        trap:
          "This is the exception that undoes the right-on-red habit. Drivers stop, see nothing coming from the left, and turn straight into a protected left-turn movement.",
        excerptKey: "signal-green-arrow-with-red",
        sourceLabel: "Manitoba Driver's Handbook - Traffic control signals",
        sourceUrl: hb(32),
        commonlyMissed: true,
      },
      {
        id: "mb_s2_05",
        topic: "rules",
        question:
          "You are turning left from a two-way street onto another two-way street. Where should you be before the turn?",
        choices: [
          "In the middle of your lane, so following traffic can pass either side",
          "In the right lane, swinging left at the last moment",
          "Stopped short of the intersection until the road is completely empty",
          "Close to the centre line, having signalled well ahead",
        ],
        correctIndex: 3,
        explanation:
          "Well before the turn you check for following traffic, signal, and move close to the centre line. Positioning early is what tells everyone behind you what is about to happen.",
        context:
          "Once in the intersection you yield to oncoming traffic and to pedestrians. Section 129 of the Act puts the same duty in terms of traffic that is within the intersection or so close that it constitutes an immediate hazard.",
        trap:
          "Turning left from the middle of the lane leaves following drivers guessing which side to pass on, and it is the position that produces a collision when one of them chooses the left.",
        excerptKey: "left-turn-two-way-approach",
        sourceLabel: "Manitoba Driver's Handbook - Making left turns",
        sourceUrl: hb(49),
      },
      {
        id: "mb_s2_06",
        topic: "rightOfWay",
        question:
          "You entered the intersection on a green to turn left and the light has now gone amber with oncoming traffic still coming. What do you do?",
        choices: [
          "Reverse out of the intersection",
          "Stay put until the light is green again",
          "Turn immediately, because the amber gives you priority",
          "Complete the turn once traffic slows to stop",
        ],
        correctIndex: 3,
        explanation:
          "If you are already established in the intersection when the light changes, you watch for traffic slowing to stop and complete the turn when it is safe. Clearing the intersection is the goal.",
        context:
          "The mirror image also matters: if you are not already established when the light changes from green, you must not start the turn. Established or not established in the intersection is the distinction the whole rule turns on.",
        trap:
          "Sitting still until the next green leaves you stranded in the middle of an intersection with cross traffic getting a green. Being established gives you the right to finish, not to wait.",
        excerptKey: "left-turn-established",
        sourceLabel: "Manitoba Driver's Handbook - Making left turns on a green light",
        sourceUrl: hb(48),
      },
      {
        id: "mb_s2_07",
        topic: "rules",
        question: "Where does Manitoba prohibit a U-turn outright?",
        choices: [
          "On any street inside a city",
          "Anywhere a solid line is painted",
          "On a curve, and near a hill crest without at least 150 metres of clear view",
          "Anywhere within 30 metres of an intersection",
        ],
        correctIndex: 2,
        explanation:
          "U-turns are prohibited on curves, on approaches to or near a hill crest where you do not have at least 150 metres of clear view of oncoming traffic, and anywhere a sign forbids them.",
        context:
          "MPI advises against U-turns generally, and says the one place it is comfortable with is an intersection controlled by a U-turn traffic signal. Where a green U-turn arrow is shown you may make the turn after yielding to pedestrians and to vehicles already in the intersection.",
        trap:
          "The 150 metres is a sight-distance test, not a distance from the hill. On a gentle rise where you can see a long way, the crest itself is not the problem.",
        excerptKey: "u-turn-prohibited",
        sourceLabel: "Manitoba Driver's Handbook - U-turns",
        sourceUrl: hb(55),
      },
      {
        id: "mb_s2_08",
        topic: "rules",
        question: "You are approaching a roundabout in Manitoba. Who do you give way to?",
        choices: [
          "Traffic approaching from your left, along with pedestrians and cyclists",
          "Traffic approaching from your right",
          "Nobody, once you have slowed to the posted limit",
          "Only vehicles signalling to exit",
        ],
        correctIndex: 0,
        explanation:
          "You slow to the posted limit or below and prepare to yield to pedestrians, cyclists and vehicles already in the roundabout. When nothing is coming from your left, you may enter.",
        context:
          "Once you are in the roundabout you have the right-of-way over vehicles waiting to enter. If two vehicles arrive at an entry at the same moment, the vehicle on the right enters first. Signal your exit in advance and watch for pedestrians in the crossing as you leave.",
        trap:
          "Yielding to the right is the reflex from ordinary intersections and it is wrong here. Traffic already circulating reaches your entry from the left.",
        excerptKey: "roundabout-approach",
        sourceLabel: "Manitoba Driver's Handbook - Roundabouts",
        sourceUrl: hb(56),
      },
      {
        id: "mb_s2_09",
        topic: "speed",
        question: "You are passing a slower vehicle on a two-lane Manitoba highway. May you exceed the limit to get it over with?",
        choices: [
          "Yes, briefly, since a shorter pass is a safer pass",
          "Yes, by up to 10 km/h",
          "No, exceeding the speed limit when passing is illegal",
          "Only where the posted limit is 90 km/h or higher",
        ],
        correctIndex: 2,
        explanation:
          "Exceeding the speed limit while passing is illegal in Manitoba. There is no allowance for it, however briefly it lasts.",
        context:
          "The reason drivers reach for extra speed is that they underestimate the closing rate. You approach an oncoming vehicle at the sum of the two speeds, so the gap shuts at more than twice your own pace. Section 116(3) of the Act separately bars passing where you do not have a clear view for at least 150 metres.",
        trap:
          "The safer-pass argument is the one every driver makes and it has no standing in law. If the pass needs extra speed to work, it is a pass that should not be started.",
        excerptKey: "passing-no-speeding",
        sourceLabel: "Manitoba Driver's Handbook - Passing",
        sourceUrl: hb(58),
      },
      {
        id: "mb_s2_10",
        topic: "rules",
        question: "Another vehicle is overtaking you on a Manitoba highway. What are you supposed to do?",
        choices: [
          "Slow down and move as close as possible to the right side of the road",
          "Hold your speed and your position exactly",
          "Speed up so the pass takes less oncoming-lane time",
          "Move onto the shoulder to let them by",
        ],
        correctIndex: 0,
        explanation:
          "When you are being passed you slow down and move as far right as you safely can. Shortening the time the other driver spends in the oncoming lane is a duty on you, not a courtesy.",
        context:
          "Once the pass is complete, the overtaking driver waits until your vehicle is visible in their rearview mirror, checks the right blind spot, signals and returns to the lane. Both halves of the manoeuvre have their own rules.",
        trap:
          "Accelerating when someone starts to pass, even without meaning to, strands them alongside you. Driving onto the shoulder is also wrong, since shoulders are for stopped and disabled vehicles.",
        excerptKey: "being-passed",
        sourceLabel: "Manitoba Driver's Handbook - Passing",
        sourceUrl: hb(58),
      },
      {
        id: "mb_s2_11",
        topic: "parking",
        question:
          "How far back from a stop sign or a traffic signal posted at an intersection must you keep clear when parking?",
        choices: ["Three metres", "Six metres", "Nine metres", "Fifteen metres"],
        correctIndex: 2,
        explanation:
          "The setback from a stop sign, another traffic sign or a signal posted at an intersection is nine metres. It exists so a parked vehicle does not hide the sign from an approaching driver.",
        context:
          "Section 122(1)(g) of the Act states the same nine metres for the approach to a flashing beacon, a stop sign or a traffic control signal, and lets the traffic authority set a greater distance in a particular place.",
        trap:
          "Nine metres is roughly two car lengths, which is much further back than the space that usually looks free just before the corner.",
        excerptKey: "parking-stop-sign-nine-metres",
        sourceLabel: "Manitoba Driver's Handbook - Illegal parking",
        sourceUrl: hb(89),
      },
      {
        id: "mb_s2_12",
        topic: "parking",
        question: "What is the no-parking distance either side of a pedestrian corridor in Manitoba?",
        choices: ["Three metres", "Nine metres", "Fifteen metres", "Thirty metres"],
        correctIndex: 2,
        explanation:
          "No parking or stopping is allowed within 15 metres of a pedestrian corridor. A crosswalk has a much shorter three-metre setback, so the two are worth learning as a pair.",
        context:
          "A pedestrian corridor is the crossing with large illuminated overhead signs, alternating flashing amber lights on top, and wide rectangular bars painted across the road. It gets the longer setback because approaching drivers need a clear view of anyone stepping out.",
        trap:
          "Treating a pedestrian corridor like an ordinary crosswalk gets you the three-metre number, which is a fifth of the distance actually required.",
        excerptKey: "pedestrian-corridor-parking",
        sourceLabel: "Manitoba Driver's Handbook - Pedestrian corridors",
        sourceUrl: hb(73),
        commonlyMissed: true,
      },
      {
        id: "mb_s2_13",
        topic: "emergencies",
        question:
          "An ambulance with its siren going and lights flashing is coming up behind you on a two-way street. What does Manitoba require?",
        choices: [
          "Brake hard and stop where you are",
          "Move to the left, since emergency vehicles use the right side",
          "Carry on normally, letting the driver find a way past",
          "Drive as close as possible to the right curb and stay stopped until it has passed",
        ],
        correctIndex: 3,
        explanation:
          "You yield by pulling as close as you can to the right curb or the edge of the roadway and staying stopped there until the emergency vehicles have gone by.",
        context:
          "If you are stopped at a red light or a stop sign and blocking the emergency vehicle's path, you move clear of the intersection, proceeding through the red or the stop sign with caution to get out of the way. On a one-way street you pull to whichever curb, right or left, is nearest.",
        trap:
          "Stopping dead in the middle of the lane feels like obedience and is the opposite. It leaves the emergency vehicle with nowhere to go.",
        excerptKey: "emergency-vehicle-remain-stopped",
        sourceLabel: "Manitoba Driver's Handbook - Emergency vehicles",
        sourceUrl: hb(62),
      },
      {
        id: "mb_s2_14",
        topic: "speed",
        question:
          "A police car is stopped at the roadside with its lights on, on a highway posted at 100 km/h. What speed must you slow to as you pass?",
        choices: [
          "40 km/h",
          "80 km/h",
          "The posted limit is fine if you change lanes",
          "60 km/h",
        ],
        correctIndex: 3,
        explanation:
          "Where the limit at the location is 80 km/h or more, you slow to no more than 60 km/h. Where the limit is below 80, the figure is 40 km/h.",
        context:
          "The slower speed applies until you have passed the vehicle, and it is separate from the duty to move over. Where there are two or more lanes going your way, you also move to the lane furthest from the stopped vehicle when it is safe.",
        trap:
          "Changing lanes does not release you from the speed. The Act requires both the reduced speed and, where lanes allow, the lane change.",
        excerptKey: "hta-move-over-speeds",
        sourceLabel: "The Highway Traffic Act - s. 109.1(2.1)",
        sourceUrl: HTA,
        commonlyMissed: true,
      },
      {
        id: "mb_s2_15",
        topic: "sharing",
        question:
          "You want to turn right, and a transit bus is stopped in the curb lane just before the corner. What does the handbook require?",
        choices: [
          "Make the turn from the extreme right lane",
          "Turn from the second lane, going around the bus",
          "Wait behind the bus until it moves off, whatever that takes",
          "Sound the horn and pass on the left of the bus",
        ],
        correctIndex: 0,
        explanation:
          "A right turn must be made from the extreme right lane. Turning across in front of a stopped transit bus from the second lane is both dangerous and illegal.",
        context:
          "Manitoba transit buses carry a decal on the back asking motorists to yield when they pull out. A 12.2-metre bus has a blind spot extending 4.3 metres on its right side, 1.5 metres on its left and 12.2 metres behind, so a car tucked beside it is invisible to the driver.",
        trap:
          "The manoeuvre feels harmless when the bus is stationary, but the bus may pull away into exactly the space you are cutting across.",
        excerptKey: "transit-bus-right-turn",
        sourceLabel: "Manitoba Driver's Handbook - Transit buses",
        sourceUrl: hb(64),
      },
      {
        id: "mb_s2_16",
        topic: "sharing",
        question: "You are following a large truck on a Manitoba highway. How do you know the driver can see you?",
        choices: [
          "If your headlights are on",
          "If you are within two car lengths",
          "If the truck's brake lights respond when you slow",
          "If you can see the truck's mirrors",
        ],
        correctIndex: 3,
        explanation:
          "The working test is the mirrors. If you cannot see the truck's mirrors, the driver cannot see you, because you are sitting in the deep blind spot directly behind the trailer.",
        context:
          "The blind areas around a large vehicle are called the No-Zone. When you overtake, you make sure the entire truck cab is visible in your own rearview mirror before you pull back in. Truck drivers also swing wide left to make a right turn, so a gap opening on their right is not an invitation.",
        trap:
          "Tailgating a truck feels safe because there is a large object ahead absorbing your attention. It is the exact position where you are least visible and can see least.",
        excerptKey: "no-zone-rear",
        sourceLabel: "Manitoba Driver's Handbook - No-zone around large vehicles",
        sourceUrl: hb(59),
      },
      {
        id: "mb_s2_17",
        topic: "safety",
        question: "You have turned off pavement onto a gravel road. What following distance does MPI ask for?",
        choices: ["Two seconds", "Four seconds", "Six seconds", "Ten seconds"],
        correctIndex: 2,
        explanation:
          "On gravel the minimum is six seconds behind the vehicle ahead. The extra room deals with the longer stopping distance on loose surface and the dust that hides what is in front.",
        context:
          "Slow down as you drive onto a gravel surface rather than after you feel the change. If you drop a wheel off the edge, the recovery is to lift off the accelerator, follow the edge of the roadway, and steer back gradually rather than yanking the wheel.",
        trap:
          "Six seconds is half again as long as the four-second highway figure, and the temptation is to keep the pavement gap because the gravel road feels empty.",
        excerptKey: "gravel-six-seconds",
        sourceLabel: "Manitoba Driver's Handbook - Gravel road driving",
        sourceUrl: hb(97),
      },
      {
        id: "mb_s2_18",
        topic: "safety",
        question: "Under normal conditions, how far ahead can you see on low beam at night?",
        choices: ["About 30 metres", "About 60 metres", "About 110 metres", "About 150 metres"],
        correctIndex: 0,
        explanation:
          "Low beam shows you about 30 metres of road. High beam extends that to roughly 110 metres. Those two numbers set the ceiling on how fast you can safely drive after dark.",
        context:
          "The rule that follows is to never drive so fast that you cannot stop within the distance your lights show you. At highway speed on low beam, the stopping distance is longer than the lit road, which is why speed comes down at night.",
        trap:
          "Drivers judge night speed by how far the road looks lit rather than by how far they could actually stop. The 30 metres is much shorter than it feels.",
        excerptKey: "night-see-distance",
        sourceLabel: "Manitoba Driver's Handbook - Night driving",
        sourceUrl: hb(95),
      },
      {
        id: "mb_s2_19",
        topic: "safety",
        question: "How far from an oncoming vehicle must you dim your high beams?",
        choices: ["At least 60 metres", "At least 150 metres", "At least 300 metres", "At least 450 metres"],
        correctIndex: 3,
        explanation:
          "Dim at least 450 metres from an oncoming vehicle. When you come up behind another vehicle the distance is 60 metres, because their mirrors carry your glare straight into their eyes.",
        context:
          "If oncoming headlights are dazzling you, look towards the right edge of the roadway rather than at the lights. Low beam is also the correct setting under street lighting, in fog and when following closely.",
        trap:
          "The two distances get swapped. The larger figure belongs to oncoming traffic, which is closing on you and needs the earlier warning.",
        excerptKey: "dimming-distances",
        sourceLabel: "Manitoba Driver's Handbook - Night driving",
        sourceUrl: hb(95),
        commonlyMissed: true,
      },
      {
        id: "mb_s2_20",
        topic: "impairment",
        question: "Someone at a party has had too much to drink. What will sober them up in time to drive?",
        choices: [
          "Black coffee",
          "A cold shower and fresh air",
          "A large meal",
          "Only time",
        ],
        correctIndex: 3,
        explanation:
          "Only time removes alcohol from the body. Coffee, food, a cold shower and fresh air change how awake someone feels without changing how impaired they are.",
        context:
          "Alcohol is a depressant, not a stimulant. It reduces alertness and slows reflexes, and a charge of impaired driving can be laid at any blood alcohol level if the ability to drive is impaired.",
        trap:
          "Feeling more awake is exactly the danger. A person who has had coffee is an impaired driver who now believes they are fine.",
        excerptKey: "alcohol-depressant",
        sourceLabel: "Manitoba Driver's Handbook - Alcohol",
        sourceUrl: hb(112),
      },
      {
        id: "mb_s2_21",
        topic: "licensing",
        question: "You move house within Winnipeg. How long do you have to tell MPI?",
        choices: [
          "Seven days",
          "Thirty days",
          "Until your next renewal",
          "Fifteen days",
        ],
        correctIndex: 3,
        explanation:
          "You must notify your Autopac agent or MPI within 15 days of any change of name or address. It is a duty on you, not something that updates itself.",
        context:
          "The address on file is where suspension notices, renewal notices and the annual statement of account are sent. Missing an annual charge because mail went to the old address can suspend the licence, and time in the Learner or Intermediate Stage is not earned while a licence is invalid.",
        trap:
          "Fifteen days is shorter than the month most people assume, and the consequence of missing it is not the fine but the mail you never receive.",
        excerptKey: "change-of-address-15-days",
        sourceLabel: "Manitoba Driver's Handbook - Change of name or address",
        sourceUrl: hb(8),
      },
      {
        id: "mb_s2_22",
        topic: "licensing",
        question: "What are the three stages of Manitoba's Graduated Driver Licensing programme?",
        choices: [
          "Learner, Intermediate, Full",
          "Learner, Probationary, Full",
          "Novice, Intermediate, Unrestricted",
          "Class 7, Class 6, Class 5",
        ],
        correctIndex: 0,
        explanation:
          "The three stages are the Learner Stage, the Intermediate Stage and the Full Stage. Each carries its own restrictions, and you move up by passing a test and serving the minimum time.",
        context:
          "GDL applies to every new driver regardless of age. The Learner Stage runs a minimum of nine months, the Intermediate Stage a minimum of 15 months, and the drug and alcohol restriction continues for the first 36 months of the Full Stage.",
        trap:
          "Probationary is Ontario and Wisconsin vocabulary. Manitoba's middle stage is Intermediate, written on the licence as 5I.",
        excerptKey: "gdl-three-stages",
        sourceLabel: "Manitoba Driver's Handbook - Graduated Driver Licensing",
        sourceUrl: hb(11),
      },
      {
        id: "mb_s2_23",
        topic: "signs",
        question:
          "A sign ahead has amber lights flashing on it. What is it telling you?",
        choices: [
          "A school bus is loading somewhere ahead",
          "A pedestrian has pressed a crossing button",
          "The speed limit drops at this point",
          "Be ready to stop, because the traffic signal ahead is red or about to turn red",
        ],
        correctIndex: 3,
        explanation:
          "Flashing amber lights on a prepare-to-stop sign warn that the signal ahead is red or is about to go red. You slow so that stopping is still comfortable when you get there.",
        context:
          "These signs go up where a signal appears suddenly, often over a crest or after a curve on a fast road. They are warning signs rather than regulatory ones, so the instruction is about your speed, not a fixed limit.",
        trap:
          "Seeing a green light in the distance while the sign is flashing tempts drivers to accelerate. The sign is warning about the signal's next state, not its current one.",
        excerptKey: "sign-prepare-to-stop",
        sourceLabel: "Manitoba Driver's Handbook - Warning signs",
        sourceUrl: hb(25),
      },
      {
        id: "mb_s2_24",
        topic: "rules",
        question:
          "Two lanes are merging into one at a marked merge point on a Manitoba road. What does the zipper merge ask of you?",
        choices: [
          "Move into the through lane as early as possible",
          "Give way entirely to the lane that is ending",
          "Speed up to clear the merge before anyone else",
          "Use both lanes to the merge point, then take turns, with through-lane drivers letting one vehicle in",
        ],
        correctIndex: 3,
        explanation:
          "A zipper merge has drivers use both lanes right up to the defined merge point and then take turns, one from each lane. Drivers changing lanes signal, and drivers staying in the through lane let one vehicle in.",
        context:
          "Merging early wastes half the road and makes the queue twice as long, which is why the province teaches the zipper. The obligation is mutual: it fails if either side treats it as a race or as a gift.",
        trap:
          "Drivers who merged early often block the open lane on principle. That is not the rule, and it turns a smooth merge into a standoff.",
        excerptKey: "zipper-merge-duty",
        sourceLabel: "Manitoba Driver's Handbook - The Zipper Merge",
        sourceUrl: hb(68),
      },
      {
        id: "mb_s2_25",
        topic: "rightOfWay",
        question:
          "You are pulling out of a shopping-centre parking lot onto a city street. What must you do?",
        choices: [
          "Stop before crossing the sidewalk, then yield to pedestrians and traffic",
          "Yield to traffic only, since the sidewalk is not part of the road",
          "Nothing, provided you are turning right",
          "Sound the horn before crossing the sidewalk",
        ],
        correctIndex: 0,
        explanation:
          "Coming out of a private road, lane, driveway or parking lot you stop before crossing the sidewalk and then yield to all pedestrians and traffic. The stop comes first and it is at the sidewalk, not at the roadway.",
        context:
          "Section 131(1) of the Act frames it the same way: stop immediately before driving onto the sidewalk or the sidewalk area, then yield to traffic on the highway that is so close it constitutes an immediate hazard.",
        trap:
          "Drivers creep to the roadway edge before stopping, which puts the nose of the car across the sidewalk. The required stop is behind the sidewalk, not on it.",
        excerptKey: "private-entrance-stop",
        sourceLabel: "Manitoba Driver's Handbook - Right-of-way",
        sourceUrl: hb(61),
      },
      {
        id: "mb_s2_26",
        topic: "rules",
        question: "You are entering an expressway from an on-ramp. What is the merge lane for?",
        choices: [
          "Matching your speed to expressway traffic so you merge without stopping",
          "Stopping until a gap appears",
          "Passing slower traffic before you join",
          "Reaching the posted limit before you signal",
        ],
        correctIndex: 0,
        explanation:
          "The merge lane exists so you can match the speed of traffic already on the expressway and slide in without stopping. Stopping at the end of the entrance lane sharply raises the risk of being hit from behind.",
        context:
          "Leaving is the mirror image. You hold your speed until you are completely in the exit ramp, then slow smoothly to the posted or prevailing ramp speed, whichever is lower. If you miss your exit you carry on to the next one and never stop or back up.",
        trap:
          "Slowing on the ramp to look for a gap is the instinct of a nervous driver and it creates the exact situation they are afraid of.",
        excerptKey: "expressway-entering",
        sourceLabel: "Manitoba Driver's Handbook - Entering and leaving an expressway",
        sourceUrl: hb(60),
      },
      {
        id: "mb_s2_27",
        topic: "parking",
        question: "How close to a crosswalk may you park or stop in Manitoba?",
        choices: ["No closer than three metres", "No closer than six metres", "No closer than nine metres", "Right up to the line"],
        correctIndex: 0,
        explanation:
          "No parking or stopping is allowed within three metres of a crosswalk. The distance keeps a parked vehicle from hiding a pedestrian who is about to step off the curb.",
        context:
          "The Act states the crosswalk figure as three metres on the approach side, and separately bans stopping on the crosswalk itself. A pedestrian corridor, with its overhead signs and flashing ambers, gets a much longer 15 metres.",
        trap:
          "Three metres is barely more than one car length, so drivers assume the rule must be longer and then park in the 15-metre zone at a pedestrian corridor by the same reasoning.",
        excerptKey: "crosswalk-parking-three-metres",
        sourceLabel: "Manitoba Driver's Handbook - Crosswalks",
        sourceUrl: hb(71),
      },
      {
        id: "mb_s2_28",
        topic: "signals",
        question:
          "You get a green light at an intersection where a pedestrian is already halfway across in front of you. What may you do?",
        choices: [
          "Proceed, since the green is yours",
          "Proceed after sounding the horn",
          "Proceed only after yielding to the pedestrian and to any vehicle already in the intersection",
          "Wait for the next green",
        ],
        correctIndex: 2,
        explanation:
          "A green permits you to go, but it comes with a duty to yield to pedestrians in the crosswalk and to vehicles already inside the intersection. It clears the way ahead of you, not the intersection itself.",
        context:
          "The same qualification runs through the left turn. On a green you may enter the intersection to turn left, but you yield to pedestrians and to oncoming traffic and may have to finish the turn on the amber or the red.",
        trap:
          "A green is read as an entitlement rather than a permission. The pedestrian who started on the walk signal is entitled to finish crossing.",
        excerptKey: "signal-green",
        sourceLabel: "Manitoba Driver's Handbook - Traffic control signals",
        sourceUrl: hb(31),
      },
      {
        id: "mb_s2_29",
        topic: "signals",
        question: "A steady amber arrow appears after a green arrow. What does it mean?",
        choices: [
          "The protected movement is ending, so slow down and stop",
          "You may complete the movement at increased speed",
          "Oncoming traffic has already been stopped",
          "The arrow is failing and the intersection is uncontrolled",
        ],
        correctIndex: 0,
        explanation:
          "The amber arrow warns that oncoming traffic may next receive a green. It means slow down and stop, in the same way as a circular amber.",
        context:
          "A flashing green left-arrow, by contrast, permits a left turn and nothing else unless another signal you are facing allows a different movement. Manitoba also uses a green U-turn arrow, which permits a U-turn after yielding.",
        trap:
          "Because the arrow was protecting you a second ago, drivers treat the amber arrow as extra time. It is the moment the protection is being taken away.",
        excerptKey: "signal-amber-arrow",
        sourceLabel: "Manitoba Driver's Handbook - Traffic control signals",
        sourceUrl: hb(32),
      },
      {
        id: "mb_s2_30",
        topic: "emergencies",
        question: "Your vehicle breaks down where you cannot get it off the road. What should you do?",
        choices: [
          "Leave the vehicle and walk for help immediately",
          "Stand behind the vehicle waving traffic past",
          "Leave the headlights on high beam",
          "Raise the hood so other motorists are warned",
        ],
        correctIndex: 3,
        explanation:
          "Raising the hood is the recognised signal that the vehicle is disabled and warns other motorists. It is the step for a vehicle that cannot be moved clear.",
        context:
          "If you carry reflectorised signs or flares, they go 60 metres in front of and behind the vehicle so approaching drivers see the hazard in time. If tiredness rather than a breakdown is the problem, pull well over and put on the four-way flashers.",
        trap:
          "Standing in the traffic lane to direct people around the car puts a person where the car already is: in the path of anyone who has not seen the obstruction.",
        excerptKey: "disabled-vehicle-hood",
        sourceLabel: "Manitoba Driver's Handbook - Disabled vehicle",
        sourceUrl: hb(105),
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Real Test Difficulty",
    difficulty: "medium",
    description:
      "Thirty-five questions pitched where the real MPI knowledge test sits: railway crossings, school buses, equipment standards and the emergency procedures the handbook sets out step by step.",
    questions: [
      {
        id: "mb_s3_01",
        topic: "rules",
        question:
          "You are stopping at a railway crossing inside Winnipeg, which is a restricted speed area. How far from the nearest rail must you stop?",
        choices: [
          "At least three metres",
          "At least 15 metres",
          "At least 30 metres",
          "At least five metres",
        ],
        correctIndex: 3,
        explanation:
          "In a restricted speed area the stop is at least five metres from the nearest rail. Outside a restricted speed area the distance is at least 15 metres.",
        context:
          "A restricted speed area means Winnipeg, an urban municipality, a local urban district under The Municipal Act, or any other area or stretch of highway designated by regulation. It is the same concept that sets the 50 km/h default speed.",
        trap:
          "Five and 15 get swapped because the smaller number feels like it belongs on the open highway. It is the other way round: town gets five, country gets 15.",
        excerptKey: "railway-stop-distances",
        sourceLabel: "Manitoba Driver's Handbook - Railway crossings",
        sourceUrl: hb(69),
        commonlyMissed: true,
      },
      {
        id: "mb_s3_02",
        topic: "parking",
        question: "How far from the nearest rail of a railway crossing may you park?",
        choices: ["Five metres", "Fifteen metres", "Thirty metres", "Sixty metres"],
        correctIndex: 2,
        explanation:
          "Parking within 30 metres of the nearest rail of a railway crossing is prohibited unless a sign says otherwise. That is the parking figure, and it is separate from the five and 15 metres you stop at when crossing.",
        context:
          "The Act adds a related ban: no stopping within a railway crossing at all, or in any position where part of the vehicle sits over a track. Stopping and parking near a crossing are governed by three different numbers for three different situations.",
        trap:
          "The stopping distances are the ones people revise, so 30 metres for parking gets answered as five or 15.",
        excerptKey: "railway-park-30-metres",
        sourceLabel: "Manitoba Driver's Handbook - Railway crossings",
        sourceUrl: hb(70),
      },
      {
        id: "mb_s3_03",
        topic: "rules",
        question:
          "Traffic ahead is backed up so that you could not get clear of the railway tracks if you crossed. What do you do?",
        choices: [
          "Stop and wait at least five metres from the crossing until the jam clears",
          "Cross anyway and stop past the tracks",
          "Cross only if no train is visible in either direction",
          "Reverse to the previous intersection",
        ],
        correctIndex: 0,
        explanation:
          "If you cannot get across, you stop and wait at least five metres back from the crossing until traffic clears and it is safe to go.",
        context:
          "The Act backs this with a flat prohibition on stopping within a railway crossing or with any part of the vehicle over a track. There is no version of this where a train can be negotiated with, which is why the rule is about the space on the far side rather than about the tracks.",
        trap:
          "Drivers edge forward to hold their place in the queue. A vehicle stopped on the tracks with a queue in front of it has no way out.",
        excerptKey: "railway-traffic-backed-up",
        sourceLabel: "Manitoba Driver's Handbook - Railway crossings",
        sourceUrl: hb(69),
      },
      {
        id: "mb_s3_04",
        topic: "signs",
        question: "There is more than one set of tracks at a crossing and a train has just passed. What is the danger?",
        choices: [
          "The crossing surface will be slippery",
          "The signals may not reset for several minutes",
          "The gates may drop again behind you",
          "A second train may be coming on the other track",
        ],
        correctIndex: 3,
        explanation:
          "With more than one set of tracks, the hazard is a second train on the other track, hidden by the first until it has gone. You do not start across the instant the train clears.",
        context:
          "The small square sign under the crossbuck tells you how many tracks there are, which is why it is there. Trains have the right-of-way at every crossing, and most Manitoba crossings have no electronic warning device at all.",
        trap:
          "A departing train feels like the all-clear, and the noise of it masks the second train entirely.",
        excerptKey: "railway-multiple-tracks",
        sourceLabel: "Manitoba Driver's Handbook - Railway crossings",
        sourceUrl: hb(69),
      },
      {
        id: "mb_s3_05",
        topic: "sharing",
        question:
          "A school bus with red lights flashing is stopped on the far side of a highway divided by a grass median. You are travelling the other way. What must you do?",
        choices: [
          "Stop five metres back, the same as on any road",
          "Slow to 40 km/h and pass with care",
          "Carry on, because a physical median removes the duty to stop for oncoming traffic",
          "Stop only if children are visible",
        ],
        correctIndex: 2,
        explanation:
          "You are not required to stop when you are travelling the opposite way on a roadway divided by a physical median or a ditch. The duty applies to traffic on the bus's own side.",
        context:
          "The word doing the work is physical. The handbook says in terms that a double solid line is not a physical separation, and section 137(3) of the Act frames the exception as the bus being on a different roadway of the same divided highway.",
        trap:
          "Drivers apply the exception to any road wide enough to feel divided. Paint never counts. If in doubt on an undivided road, stop.",
        excerptKey: "school-bus-divided-road",
        sourceLabel: "Manitoba Driver's Handbook - School buses",
        sourceUrl: hb(63),
        commonlyMissed: true,
      },
      {
        id: "mb_s3_06",
        topic: "sharing",
        question: "A school bus ahead of you turns on its overhead amber lights. What does that mean?",
        choices: [
          "It is about to stop to load or unload, so slow and prepare to stop",
          "It has finished loading and is moving off",
          "It is signalling a right turn",
          "You may pass on the left while the ambers are on",
        ],
        correctIndex: 0,
        explanation:
          "Flashing overhead ambers mean the bus is about to stop to load or unload students. You slow down and prepare to stop, because the reds are next.",
        context:
          "Once the red lights come on and the stop arm swings out, passing from either direction is illegal on an undivided road and you must stop at least five metres away. You stay stopped until the reds go off and the arm folds back in.",
        trap:
          "The ambers are treated as a chance to get past. They are the warning that the mandatory stop is seconds away.",
        excerptKey: "school-bus-amber",
        sourceLabel: "Manitoba Driver's Handbook - School buses",
        sourceUrl: hb(63),
      },
      {
        id: "mb_s3_07",
        topic: "sharing",
        question:
          "You have stopped for a school bus and the last child has crossed and reached the sidewalk. When may you go?",
        choices: [
          "As soon as the child is off the roadway",
          "After counting five seconds",
          "When the bus driver waves you through",
          "When the red lights go off and the stop arm folds in",
        ],
        correctIndex: 3,
        explanation:
          "You remain stopped until the flashing red lights are turned off and the stop arm is folded in. The bus driver controls the release, not your assessment of where the children are.",
        context:
          "The driver has a view of the area around the bus that you do not, including the space directly in front of it where a small child can disappear entirely. Turning the lights off is the signal that the driver has accounted for everyone.",
        trap:
          "Seeing one child reach safety says nothing about a second child still crossing in front of the bus.",
        excerptKey: "school-bus-remain-stopped",
        sourceLabel: "Manitoba Driver's Handbook - School buses",
        sourceUrl: hb(63),
      },
      {
        id: "mb_s3_08",
        topic: "rightOfWay",
        question:
          "The vehicle in the lane beside you slows and stops for a pedestrian at a crosswalk. What may you do?",
        choices: [
          "Pass it if you cannot see anyone in front of it",
          "Pass slowly with your horn as a warning",
          "Nothing - passing traffic that is slowing or stopped for pedestrians is illegal",
          "Pass, provided you stay under 30 km/h",
        ],
        correctIndex: 2,
        explanation:
          "It is illegal to pass traffic ahead of you that is slowing down or stopped for pedestrians. The stopped vehicle is hiding the very person you would be driving at.",
        context:
          "Pedestrians have the right-of-way at marked and unmarked crosswalks alike. The one release is where the pedestrian is on the far side of a divided highway with a physical median, and a double solid line is not one.",
        trap:
          "Not being able to see anyone is the reason for the rule, not a reason to ignore it. The car you would be passing is the screen.",
        excerptKey: "crosswalk-no-passing",
        sourceLabel: "Manitoba Driver's Handbook - Crosswalks",
        sourceUrl: hb(71),
        commonlyMissed: true,
      },
      {
        id: "mb_s3_09",
        topic: "rightOfWay",
        question:
          "A person at the curb who is blind raises their white cane as you approach. What are they telling you?",
        choices: [
          "That they are uncertain about crossing safely, so you should stop and give them the right-of-way",
          "That they are waiting for someone and you should carry on",
          "That they intend to cross behind your vehicle",
          "That they want you to sound your horn to confirm",
        ],
        correctIndex: 0,
        explanation:
          "A raised cane is the signal that the person is unsure it is safe to cross. It is your cue to stop and give them the right-of-way.",
        context:
          "If you drive a hybrid or an electric vehicle, there may be no engine sound to tell a blind pedestrian you are there, so the handbook asks for extreme caution in that situation specifically.",
        trap:
          "Sounding the horn to say you have seen them adds a noise they cannot interpret and takes away the engine sound they may have been using.",
        excerptKey: "blind-pedestrian-cane",
        sourceLabel: "Manitoba Driver's Handbook - People who are blind",
        sourceUrl: hb(74),
      },
      {
        id: "mb_s3_10",
        topic: "rules",
        question:
          "When is it illegal to pass another moving vehicle in a Manitoba school area?",
        choices: [
          "Only while the school-zone speed limit is in force",
          "Only on school days between 8 a.m. and 4 p.m.",
          "Only where a no-passing line is painted",
          "Within 15 minutes of classes opening or closing, and any time children are on the grounds or near the road",
        ],
        correctIndex: 3,
        explanation:
          "Passing in a school area is illegal within 15 minutes either side of classes opening or closing, and at any time when children are on the school grounds or near the road. The two triggers are independent.",
        context:
          "The general obligation in a school or playground area is to drive slowly and be prepared to stop suddenly whenever a child is on or near the road. School safety patrols in high-visibility vests and flags are a signal that children are close by.",
        trap:
          "Waiting for a posted time or a painted line misses the second trigger entirely. Children near the road at any hour of any day make the pass unlawful.",
        excerptKey: "school-area-no-passing",
        sourceLabel: "Manitoba Driver's Handbook - School and playground areas",
        sourceUrl: hb(75),
      },
      {
        id: "mb_s3_11",
        topic: "safety",
        question: "How far must a Manitoba vehicle's horn be audible?",
        choices: ["At least 30 metres", "At least 45 metres", "At least 60 metres", "At least 100 metres"],
        correctIndex: 2,
        explanation:
          "Every motor vehicle must have a horn that can be heard from at least 60 metres. It is an equipment standard, the same kind of rule as the muffler and the bumper requirements.",
        context:
          "The required-equipment list is a reliable source of test questions because the numbers are exact: brakes that stop a passenger vehicle from 30 km/h within 7.6 metres, tires replaced before the tread falls under 1.6 millimetres, a speedometer and odometer in working order, and a bumper front and rear.",
        trap:
          "This looks like trivia, and Manitobans who have sat the knowledge test name it specifically as the sort of number that appeared and caught them.",
        excerptKey: "horn-60-metres",
        sourceLabel: "Manitoba Driver's Handbook - Horn",
        sourceUrl: hb(92),
        commonlyMissed: true,
      },
      {
        id: "mb_s3_12",
        topic: "safety",
        question: "At what tread depth must a tire be replaced in Manitoba?",
        choices: [
          "When the tread is less than 1.6 millimetres",
          "When the tread is less than 3 millimetres",
          "When the wear bars first become visible",
          "Once the tire is six years old",
        ],
        correctIndex: 0,
        explanation:
          "Tires must be replaced when the tread is less than 1.6 millimetres. It is a measurement, not a judgement about how the tire looks.",
        context:
          "Studded tires are separately restricted by date: they are illegal between April 30 and October 1. Tire pressure should be checked with an accurate gauge at least once a month and after long trips.",
        trap:
          "Wear bars are a useful indicator but they are not the standard the handbook states, and the studded-tire dates are the ones people reverse.",
        excerptKey: "tire-tread-1-6-mm",
        sourceLabel: "Manitoba Driver's Handbook - Tires",
        sourceUrl: hb(92),
      },
      {
        id: "mb_s3_13",
        topic: "safety",
        question: "When are studded tires illegal in Manitoba?",
        choices: [
          "Between November 1 and March 31",
          "At all times on provincial highways",
          "Only inside city limits",
          "Between April 30 and October 1",
        ],
        correctIndex: 3,
        explanation:
          "Studded tires are illegal between April 30 and October 1. They are permitted through the winter half of the year and banned through the summer half.",
        context:
          "The other date-bound equipment rule runs the other way. From November 1 to March 31 inclusive, your vehicle must be able to keep the windshield, the rear window and both side windows free of frost.",
        trap:
          "The November to March dates belong to the frost rule, not to studs. Answering with them puts the ban in exactly the season studs are allowed.",
        excerptKey: "studded-tires-dates",
        sourceLabel: "Manitoba Driver's Handbook - Tires",
        sourceUrl: hb(92),
        commonlyMissed: true,
      },
      {
        id: "mb_s3_14",
        topic: "safety",
        question: "What braking performance does Manitoba require of a passenger vehicle?",
        choices: [
          "A stop from 50 km/h within 15 metres",
          "A stop from 30 km/h within 7.6 metres",
          "A stop from 30 km/h within 15 metres",
          "A stop from 60 km/h within 30 metres",
        ],
        correctIndex: 1,
        explanation:
          "Brakes must be able to stop a passenger vehicle travelling at 30 km/h within 7.6 metres. That is the minimum standard the equipment has to meet.",
        context:
          "A police officer can order defective equipment repaired immediately, and if you do not comply your vehicle registration can be suspended until a qualified mechanic certifies the repair. Equipment rules have teeth beyond the fine.",
        trap:
          "The pairing of 30 km/h with 7.6 metres is the whole answer. A speed matched to the wrong distance is the way this question is usually got wrong.",
        excerptKey: "brakes-stopping-distance",
        sourceLabel: "Manitoba Driver's Handbook - Required equipment",
        sourceUrl: hb(90),
      },
      {
        id: "mb_s3_15",
        topic: "parking",
        question:
          "You are parking on a curve on a highway outside a town. What does the law require?",
        choices: [
          "That the vehicle be clearly visible from at least 60 metres in each direction",
          "That the vehicle be entirely on the shoulder",
          "That the hazard lights be left on",
          "That the vehicle be no more than 45 centimetres from the edge",
        ],
        correctIndex: 0,
        explanation:
          "Parking on a curve outside a city, town or village is illegal where the vehicle cannot be clearly seen from at least 60 metres in each direction along the highway.",
        context:
          "The rest of the illegal-parking list is a set of fixed distances, but this one is a visibility test, so the answer depends on the shape of the curve rather than on a tape measure from a fixed object.",
        trap:
          "The 45 centimetres is real but belongs to parallel parking, where it is the maximum gap from the curb, not a rule about curves.",
        excerptKey: "parking-curve-60-metres",
        sourceLabel: "Manitoba Driver's Handbook - Illegal parking",
        sourceUrl: hb(89),
      },
      {
        id: "mb_s3_16",
        topic: "parking",
        question: "How far from the driveway entrance to a fire station must you keep clear?",
        choices: [
          "Six metres",
          "Three metres",
          "Nine metres",
          "Fifteen metres",
        ],
        correctIndex: 0,
        explanation:
          "The setback from a driveway entrance to a fire station is six metres unless a sign posts something else. It sits between the three-metre hydrant rule and the nine-metre stop-sign rule.",
        context:
          "The full ladder of Manitoba parking setbacks reads: three metres from a hydrant or a crosswalk, six metres from a fire station driveway, nine metres from a stop sign or signal at an intersection, 15 metres from a pedestrian corridor, and 30 metres from the nearest rail.",
        trap:
          "The hydrant number is the one everyone learns, and it gets applied to the fire station by association. They are different distances for different reasons.",
        excerptKey: "parking-fire-station-six-metres",
        sourceLabel: "Manitoba Driver's Handbook - Illegal parking",
        sourceUrl: hb(89),
      },
      {
        id: "mb_s3_17",
        topic: "parking",
        question:
          "It is minus 30 and you want to leave your car running to warm up while you go back inside. Does Manitoba allow it?",
        choices: [
          "No, a running vehicle may never be left unattended",
          "Yes, but only for five minutes",
          "Only if the vehicle is on private property",
          "Yes, warming the vehicle and defrosting the windshield are permitted reasons",
        ],
        correctIndex: 3,
        explanation:
          "The law allows you to leave a vehicle unattended with the motor running for reasons such as warming it and defrosting the windshield. The point is that there is a lawful reason, not that the engine may run indefinitely for any purpose.",
        context:
          "The handbook's parking pointers pair this with the practical advice to have a spare key and to lock the door if you leave the vehicle. Utility and delivery service vehicles are exempt from the locking requirement.",
        trap:
          "Assuming a blanket ban is the wrong reading in a province where the rule was written for exactly this weather.",
        excerptKey: "engine-running-unattended",
        sourceLabel: "Manitoba Driver's Handbook - Parking pointers",
        sourceUrl: hb(89),
      },
      {
        id: "mb_s3_18",
        topic: "emergencies",
        question:
          "A vehicle ends up in deep water with the windows closed and unbroken. How long do the occupants have?",
        choices: [
          "About ten seconds",
          "About five minutes",
          "As long as the air lasts, which is roughly 20 minutes",
          "About one minute before escape becomes impossible",
        ],
        correctIndex: 3,
        explanation:
          "A vehicle with intact closed windows floats for somewhere between 30 seconds and a few minutes, and the occupants have only about one minute to get out before escape becomes impossible.",
        context:
          "Because the window is that short, the handbook's advice is to act immediately rather than to wait for the vehicle to fill and pressure to equalise. The plan has to be made before the vehicle is in the water.",
        trap:
          "The floating time and the escape time are different numbers. The vehicle may still be floating well after the point at which getting out has stopped being possible.",
        excerptKey: "vehicle-in-water",
        sourceLabel: "Manitoba Driver's Handbook - Vehicle plunging into water",
        sourceUrl: hb(106),
      },
      {
        id: "mb_s3_19",
        topic: "emergencies",
        question:
          "A vehicle is coming straight at you in your lane and a collision looks unavoidable. What does Manitoba tell you to do?",
        choices: [
          "Steer left into the lane they have left empty",
          "Brake hard and hold your lane",
          "Move onto the right-hand shoulder and sound the horn",
          "Flash your headlights and hold your line",
        ],
        correctIndex: 2,
        explanation:
          "Move as quickly and safely as you can onto the right-hand shoulder and sound the horn. The right is where you go because it is away from the oncoming traffic stream.",
        context:
          "The instruction never to swerve left is absolute. The other driver is most likely drifting and will correct, and correcting puts them back into the lane you would have moved into.",
        trap:
          "Steering into the gap the other vehicle has left is the intuitive move and it is the one that turns a near miss into a head-on.",
        excerptKey: "never-swerve-left",
        sourceLabel: "Manitoba Driver's Handbook - Direct collision course",
        sourceUrl: hb(105),
        commonlyMissed: true,
      },
      {
        id: "mb_s3_20",
        topic: "emergencies",
        question: "You carry flares and reflectorised signs. Where do they go when your vehicle is disabled?",
        choices: [
          "Sixty metres in front of and behind the vehicle",
          "Immediately beside the vehicle on both sides",
          "Thirty metres behind only",
          "On the roof of the vehicle",
        ],
        correctIndex: 0,
        explanation:
          "Flares or reflectorised signs go 60 metres in front of and behind the disabled vehicle, so approaching drivers see the hazard while they still have room to react.",
        context:
          "If you cannot move the vehicle off the road at all, raise the hood as well. Both steps are about buying reaction time from drivers who are not expecting a stationary object in a live lane.",
        trap:
          "Placing warnings right at the vehicle warns people at the moment they are already committed, which is too late at highway speed.",
        excerptKey: "disabled-vehicle-flares",
        sourceLabel: "Manitoba Driver's Handbook - Disabled vehicle",
        sourceUrl: hb(105),
      },
      {
        id: "mb_s3_21",
        topic: "emergencies",
        question:
          "A power line has come down across your vehicle. What should you do?",
        choices: [
          "Get out quickly and move away",
          "Get out only by jumping clear without touching the vehicle",
          "Open the door and wait for help without stepping out",
          "Stay inside and try to drive away from the wires",
        ],
        correctIndex: 3,
        explanation:
          "Stay inside and try to drive away from the wires. The vehicle body is the safe place; the ground beside it is not.",
        context:
          "The same instinct causes trouble in a vehicle fire, where the correct step is different again: an electrical short is the usual cause, so the ignition goes off immediately.",
        trap:
          "Every reflex says get out of the car. Stepping out while the vehicle is energised puts you in contact with the vehicle and the ground at the same time.",
        excerptKey: "electrical-wires-stay-inside",
        sourceLabel: "Manitoba Driver's Handbook - Vehicle in contact with electrical wires",
        sourceUrl: hb(107),
      },
      {
        id: "mb_s3_22",
        topic: "safety",
        question: "Your vehicle starts to skid. What does the handbook tell you to do?",
        choices: [
          "Brake firmly and steer against the skid",
          "Apply the parking brake gently",
          "Accelerate to pull the vehicle straight",
          "Take your foot off the accelerator or brake, and look and steer where you want to go",
        ],
        correctIndex: 3,
        explanation:
          "You do two things at once: come off the accelerator or the brake, and look and steer in the direction you want to go. As the vehicle straightens, the front wheels are straightened too so it does not skid back the other way.",
        context:
          "Skidding is not only a winter problem. More people are killed or injured in dry-surface skids than in wet-surface ones, because the usual cause is simply too much speed for the situation.",
        trap:
          "Steering against the skid is a phrase people half-remember and apply backwards. Looking where you want to go makes the steering right without needing the vocabulary.",
        excerptKey: "skid-control",
        sourceLabel: "Manitoba Driver's Handbook - Skid control",
        sourceUrl: hb(103),
      },
      {
        id: "mb_s3_23",
        topic: "emergencies",
        question: "A front tire blows out at highway speed. What is the first thing to do?",
        choices: [
          "Brake hard immediately",
          "Steer for the shoulder straight away",
          "Hold the wheel firmly and come off the accelerator so the vehicle slows gradually",
          "Shift into a lower gear",
        ],
        correctIndex: 2,
        explanation:
          "Hold the steering wheel firmly and take your foot off the accelerator, letting the vehicle slow gradually. You brake only once the speed is low enough to keep control.",
        context:
          "A front blowout pulls the vehicle towards the side that blew and makes steering very heavy. A rear blowout makes the back end sway. Either way, do not turn onto the shoulder until the vehicle is under control, and if it has already swerved onto the shoulder, let it coast to a stop rather than fighting back onto the pavement.",
        trap:
          "Braking hard is the instinct and it is what turns a blowout into a spin, because the vehicle is already unbalanced.",
        excerptKey: "blowout-response",
        sourceLabel: "Manitoba Driver's Handbook - Blowouts",
        sourceUrl: hb(102),
      },
      {
        id: "mb_s3_24",
        topic: "safety",
        question:
          "You need to stop hard on ice and your vehicle has anti-lock brakes. What is the correct technique?",
        choices: [
          "Apply full brake pressure and hold it",
          "Pump the pedal steadily",
          "Apply light pressure and steer around the hazard",
          "Use the parking brake to help",
        ],
        correctIndex: 0,
        explanation:
          "With anti-lock brakes you apply full pressure and hold it. The system does the modulating, and you keep some steering control while it works.",
        context:
          "Without anti-lock brakes the technique is the opposite: steady pressure short of locking the wheels, because locked wheels mean no steering at all. That method is called threshold braking and it takes practice to do well.",
        trap:
          "Pumping the pedal is the old technique and it defeats an anti-lock system. The pedal shuddering under your foot is the system working, not a fault.",
        excerptKey: "abs-full-pressure",
        sourceLabel: "Manitoba Driver's Handbook - Ice, sleet or snow",
        sourceUrl: hb(94),
      },
      {
        id: "mb_s3_25",
        topic: "safety",
        question: "You are about to drive down a long steep hill. What should you do before you start down?",
        choices: [
          "Shift to a lower gear so the engine helps brake",
          "Shift to neutral so the brakes have full control",
          "Disengage the clutch to save fuel",
          "Build speed at the top so you can coast",
        ],
        correctIndex: 0,
        explanation:
          "Shift to a lower gear before you start down, so the engine works as a braking force. Coasting down in neutral or with the clutch out leaves everything to the brakes, which may not hold.",
        context:
          "The other hill rule is about sight distance: never pass near the crest of a hill, because your view of the road ends at the hilltop. It is the same reason a U-turn near a crest is prohibited without 150 metres of clear view.",
        trap:
          "Coasting feels smooth and economical, and it is the technique that produces brakes with nothing left in them at the bottom.",
        excerptKey: "hills-lower-gear",
        sourceLabel: "Manitoba Driver's Handbook - Hills",
        sourceUrl: hb(99),
      },
      {
        id: "mb_s3_26",
        topic: "sharing",
        question: "What is the maximum speed of the farm equipment you may meet on a Manitoba road?",
        choices: ["25 km/h", "40 km/h", "50 km/h", "60 km/h"],
        correctIndex: 1,
        explanation:
          "Farm tractors, combines and similar equipment move slowly, with a maximum of 40 km/h. Closing on one at highway speed happens much faster than drivers expect.",
        context:
          "A triangle with the tips cut off, orange with a red border, is the slow-moving vehicle sign that marks these machines. Seeing it means the closing speed is high even though nothing looks like it is moving fast.",
        trap:
          "Judging the gap by how slow the machine looks rather than by the difference between 90 and 40 is what puts a car into the back of a combine.",
        excerptKey: "farm-equipment-speed",
        sourceLabel: "Manitoba Driver's Handbook - Farm equipment on roads",
        sourceUrl: hb(99),
      },
      {
        id: "mb_s3_27",
        topic: "safety",
        question: "When are deer most dangerous on Manitoba roads?",
        choices: [
          "Midday in summer",
          "In midwinter, during daylight hours only",
          "In spring, at midday",
          "In the fall, from sunset to midnight and just after sunrise",
        ],
        correctIndex: 3,
        explanation:
          "Deer are particularly active in the fall, and the peak danger runs from sunset to midnight and again just after sunrise.",
        context:
          "If an animal does cross your path, the instruction is to brake firmly and avoid swerving. A swerve at speed frequently produces a worse collision than the one it was trying to prevent.",
        trap:
          "Swerving is the instinct and it is exactly what the handbook tells you not to do. A struck deer is survivable; a rollover or a head-on often is not.",
        excerptKey: "deer-peak-times",
        sourceLabel: "Manitoba Driver's Handbook - Animals on the road",
        sourceUrl: hb(100),
      },
      {
        id: "mb_s3_28",
        topic: "impairment",
        question:
          "A driver blows a reading between .05 and .079 at the roadside in Manitoba. What follows?",
        choices: [
          "A warning with no further consequence",
          "A three-month Administrative Licence Suspension",
          "A Criminal Code charge automatically",
          "An immediate Tiered Administrative Licence Suspension",
        ],
        correctIndex: 3,
        explanation:
          "A blood alcohol concentration between .05 and .079, a warn on an approved screening device, or failing a drug screening, physical coordination or drug recognition test all trigger an immediate Tiered Administrative Licence Suspension.",
        context:
          "The tiers run from 72 hours to 60 days depending on how many suspensions the driver has had in the previous ten years, and a first occurrence with a person under 16 in the vehicle is seven days rather than 72 hours. A Tiered suspension also drops the driver five levels on the Driver Safety Rating scale.",
        trap:
          "Being under .08 is widely believed to mean nothing happens. In Manitoba the consequences start at .05.",
        excerptKey: "tiered-suspension-trigger",
        sourceLabel: "Manitoba Driver's Handbook - Tiered Administrative Licence Suspensions",
        sourceUrl: hb(115),
        commonlyMissed: true,
      },
      {
        id: "mb_s3_29",
        topic: "impairment",
        question:
          "You are caught using a hand-held phone while driving in Manitoba for the first time. What happens to your licence?",
        choices: [
          "A three-day suspension",
          "Nothing beyond the fine",
          "A seven-day suspension",
          "A 30-day suspension",
        ],
        correctIndex: 0,
        explanation:
          "A first offence brings a three-day licence suspension. Each subsequent offence brings seven days, and a conviction adds a $672 fine and a drop of five levels on the Driver Safety Rating scale.",
        context:
          "Distracted driving is any activity that takes your attention off the road. Texting is singled out because it takes eyes, hands and mind away at the same time, which no other common distraction does.",
        trap:
          "People expect a ticket and nothing more. The roadside suspension is immediate and separate from whatever the court does later.",
        excerptKey: "handheld-device-suspension",
        sourceLabel: "Manitoba Driver's Handbook - Distractions",
        sourceUrl: hb(97),
      },
      {
        id: "mb_s3_30",
        topic: "licensing",
        question: "How long is the minimum Intermediate Stage in Manitoba?",
        choices: ["Nine months", "Twelve months", "Fifteen months", "Twenty-four months"],
        correctIndex: 2,
        explanation:
          "The Intermediate Stage runs a minimum of 15 months. The Learner Stage before it runs a minimum of nine, so the two together are two years before a Full Stage licence.",
        context:
          "Time in a stage is only earned while you hold a valid licence. If the licence is suspended, cancelled or unpaid, the clock stops, and the months lost are not credited back afterwards.",
        trap:
          "Nine months is the Learner figure and it gets applied to both stages. The Intermediate Stage is the longer of the two.",
        excerptKey: "gdl-full-stage",
        sourceLabel: "Manitoba Driver's Handbook - Class 5F Licence (Full Stage)",
        sourceUrl: hb(11),
        commonlyMissed: true,
      },
      {
        id: "mb_s3_31",
        topic: "licensing",
        question: "Who may act as a supervising driver for a Manitoba Class 5L learner?",
        choices: [
          "Anyone over 21 with a valid licence",
          "Anyone who has held any Manitoba licence for at least five years",
          "A parent or guardian only",
          "Anyone who has held a Class 5F licence for at least three years",
        ],
        correctIndex: 3,
        explanation:
          "The supervising driver must hold a valid licence and must have held a Class 5F licence for at least three years. They must also be under .05 blood alcohol and must not fail a drug screening test.",
        context:
          "The supervising driver has to be the only front seat passenger. Other passengers are allowed in the back seats, up to the number of working seatbelts, which is more permissive than most provinces allow a learner.",
        trap:
          "Five years is the figure people quote, and age alone is not the test. What matters is three years at the Full Stage.",
        excerptKey: "gdl-supervising-driver",
        sourceLabel: "Manitoba Driver's Handbook - Class 5L Licence (Learner Stage)",
        sourceUrl: hb(11),
        commonlyMissed: true,
      },
      {
        id: "mb_s3_32",
        topic: "emergencies",
        question:
          "Someone was taken to hospital after a collision you were in, and no officer attended the scene. What must you do?",
        choices: [
          "Nothing further, since MPI will notify the police",
          "Report the collision to the police within 24 hours",
          "Report it only if you were at fault",
          "Report the collision to the police within seven days",
        ],
        correctIndex: 3,
        explanation:
          "Where anyone is seriously injured, meaning hospitalised, or a fatality occurs, you must report to the police within seven days if you did not report to an officer at the scene.",
        context:
          "A collision with property damage only does not have to be reported to police at all, whatever the value of the damage. Injury is the line that changes the duty, not the size of the repair bill.",
        trap:
          "Twenty-four hours is the deadline in several other jurisdictions. Manitoba's window is seven days, and the trigger is injury rather than a dollar figure.",
        excerptKey: "collision-report-seven-days",
        sourceLabel: "Manitoba Driver's Handbook - If you're involved in a collision",
        sourceUrl: hb(109),
      },
      {
        id: "mb_s3_33",
        topic: "rules",
        question:
          "The warning lights at a railway crossing are flashing. When may a driver still cross?",
        choices: [
          "Never, under any circumstances",
          "Any time no train is visible",
          "After a complete stop, at an ungated crossing in a restricted speed area, where the train is stopped or a safe distance away and the crossing can be made safely",
          "Once the lights have been flashing for more than two minutes",
        ],
        correctIndex: 2,
        explanation:
          "The exception is tightly drawn. You must stop completely first, the crossing must not be protected by gates or barriers, it must be inside a restricted speed area, the train must be stopped or a safe distance away, and the crossing must be able to be made safely. Every one of those has to hold.",
        context:
          "The exception exists because a stopped train or a shunting movement can leave crossing signals active for a long time in a city. It is not a general permission to judge the situation for yourself.",
        trap:
          "Reading this as no train visible means go collapses five conditions into one, and it is the one condition the rule does not rely on.",
        excerptKey: "railway-cross-while-flashing",
        sourceLabel: "Manitoba Driver's Handbook - Railway crossings",
        sourceUrl: hb(70),
      },
      {
        id: "mb_s3_34",
        topic: "safety",
        question: "Your load extends a metre or more past the back of your vehicle. What must you display?",
        choices: [
          "A red flag by day and a red light or reflector at night, at the end of the load",
          "Nothing, provided the load is secured",
          "Hazard lights at all times",
          "An orange triangle at the end of the load",
        ],
        correctIndex: 0,
        explanation:
          "A load overhanging by a metre or more needs a clearly visible red flag at the end of it during daylight, and a red light or reflector at the end of it at night.",
        context:
          "The daylight and darkness markers are different objects for the same job. A flag is visible in daylight and useless after dark, which is why the night requirement is a light or a reflector.",
        trap:
          "Hazard lights mark the vehicle, not the end of the load, and the whole point of the rule is where the vehicle actually ends.",
        excerptKey: "load-overhang-flag",
        sourceLabel: "Manitoba Driver's Handbook - Lights",
        sourceUrl: hb(91),
      },
      {
        id: "mb_s3_35",
        topic: "signals",
        question:
          "A signal head shows a white vertical bar on a black background. Who may go?",
        choices: [
          "Every vehicle in the lane",
          "Only emergency vehicles",
          "Only vehicles turning right",
          "Only public transit buses",
        ],
        correctIndex: 3,
        explanation:
          "The white vertical bar is a transit priority signal. Only public transit buses may proceed on it, and every other vehicle stays stopped.",
        context:
          "It exists so a bus can pull away from a stop before general traffic starts moving, which is what makes bus lanes and queue jumps work. Reserved lanes for the same vehicles are marked with double broken lines and white diamond patterns.",
        trap:
          "A white bar reads as go to a driver who has never seen one, and moving off on it is proceeding against a red.",
        excerptKey: "transit-priority-signal",
        sourceLabel: "Manitoba Driver's Handbook - Transit priority signal",
        sourceUrl: hb(33),
      },
    ],
  },
];
