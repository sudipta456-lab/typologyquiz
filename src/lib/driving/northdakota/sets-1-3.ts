import type { DrivingTestSet } from "../types";

// Every fact below was checked against the 2025-2027 North Dakota
// Noncommercial Driver License Manual, Class D (Revised 2025, publication
// DL0126), published by the Driver License Division of the North Dakota
// Department of Transportation, plus North Dakota Century Code Title 39 and
// four dot.nd.gov pages that carry rules the manual states incompletely or not
// at all.
//
// North Dakota's manual is better than most at printing the numbers a test
// asks for. It gives all eight statutory speed limits, every parking distance,
// the 100-foot signalling rule and the fines for littering, work zones and
// driving uninsured. The gaps are narrower, and correspondingly easier to walk
// into:
//
// 1. The manual says drivers approaching a stopped school bus from BOTH
//    directions must stop, and stops there. It never prints the one exception -
//    NDCC 39-10-46(5) excuses a driver on a highway with separate roadways when
//    the bus is on a different roadway. Set 5 tests that gap directly.
// 2. The manual lists eight maximum speed limits. The statute lists nine:
//    39-09-02(1)(d) adds 20 mph whenever the view of the highway ahead is
//    obstructed within 100 feet, which the manual omits entirely.
// 3. The manual's point table starts at 12 points. For a driver under 18 that
//    number is wrong by half: NDCC 39-06-01.1(1) cancels a minor's licence
//    above five points, and NDDOT's points page states the same as "6 or more".
//    A single school-bus violation is 6 points.
// 4. The manual says North Dakota's seat belt law "requires all occupants to
//    wear seat belts in all seating positions" and says nothing about how it is
//    enforced. Section 39-21-41.5, the secondary-enforcement provision, was
//    repealed in 2023, so it is now an offence an officer can stop you for on
//    its own.
// 5. The manual never states how many questions are on the knowledge test or
//    what score passes. NDDOT publishes neither figure anywhere. See the
//    research note and officialTest.notes - this bank does not invent one.
//
// Questions are original. Explanations, context notes and trap notes are
// written from scratch; the deep link is there so the learner reads NDDOT's
// own authoritative wording on the state's site.
const HB =
  "https://www.dot.nd.gov/sites/www/files/documents/Drivers%20-%20documents/noncommercial-manual.pdf";
const POINTS =
  "https://www.dot.nd.gov/driver/driver-education/driver-license-points-reduction-and-points-schedule";

export const northdakotaSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "North Dakota Basics",
    difficulty: "starter",
    description:
      "The rules you meet on your first drive in North Dakota: what the shapes and colors mean, who goes first, and the handful of numbers the NDDOT knowledge test expects you to know cold before you sit down at a driver license site or at nd.knowtodrive.com.",
    questions: [
      {
        id: "nd_s1_01",
        topic: "signs",
        question:
          "You reach a red eight-sided sign at an intersection. Where does the North Dakota manual tell you to stop?",
        choices: [
          "Level with the sign itself, whatever the pavement shows",
          "Anywhere in the intersection, as long as you pause",
          "Before the stop line or crosswalk area",
          "Only if a vehicle is actually approaching",
        ],
        correctIndex: 2,
        explanation:
          "The octagon means a full stop, and the manual is specific about the place: before the stop line or the crosswalk area. Where the pavement has neither, you stop as near to the intersection as you safely can while still being able to see traffic coming from every direction.",
        context:
          "North Dakota teaches signs by shape and color before words, because the shape is readable in a blizzard, in glare, or in a language you do not read. The octagon is reserved for STOP and nothing else. Regulatory signs like this one give mandatory instructions and are mostly white with black letters or red with white letters.",
        trap:
          "Stopping level with the sign puts your front wheels over the crosswalk. The stop line comes first, then the crosswalk, then the intersection edge.",
        excerptKey: "sign-stop-octagon",
        sourceLabel: "Noncommercial Driver License Manual - Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "nd_s1_02",
        topic: "signs",
        question: "What does a downward-pointing triangular yield sign require of you?",
        choices: [
          "Slow down, and stop if necessary, so you can yield the right of way",
          "Come to a complete stop every time before proceeding",
          "Maintain speed because other traffic must yield to you",
          "Sound your horn before entering the intersection",
        ],
        correctIndex: 0,
        explanation:
          "Yield is a duty, not a fixed maneuver. The manual tells you to slow down and stop if necessary so that you can give up the right of way. If the way is genuinely clear you may roll through; if it is not, you stop.",
        context:
          "Yield and stop signs are both regulatory signs, but they demand different things. A stop sign requires a full halt on every approach without exception. A yield sign requires you to give way, and only requires a stop when giving way needs one. The triangle pointing down is used for nothing else.",
        trap:
          "Treating yield as a stop sign is not safe just because it feels cautious - stopping when nothing is coming surprises the driver behind you.",
        excerptKey: "sign-yield",
        sourceLabel: "Noncommercial Driver License Manual - Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "nd_s1_03",
        topic: "signals",
        question:
          "A steady red light shows at an intersection with a marked stop line. What does the manual require?",
        choices: [
          "Stop, then proceed once you have counted three seconds",
          "Stop at the stop line and remain stopped until the light changes and the intersection is clear",
          "Slow to walking pace and continue if no one is crossing",
          "Stop only if a vehicle is approaching from the cross street",
        ],
        correctIndex: 1,
        explanation:
          "Red means stop at the marked stop line, or before the crosswalk if there is no line. Staying stopped is the second half of the rule: you wait for the light to change and for the intersection to clear of pedestrians and vehicles before you go.",
        context:
          "North Dakota treats a signal exactly like a stop sign for the purpose of where you halt. Green then means go, but the manual adds a condition to that too - only if the intersection is clear. A yellow indication is a warning that the light is changing from green to red.",
        trap:
          "A green light is not permission to enter a blocked intersection. The manual attaches the same clear-intersection condition to green that it attaches to red.",
        excerptKey: "signal-red",
        sourceLabel: "Noncommercial Driver License Manual - Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "nd_s1_04",
        topic: "signals",
        question:
          "You are stopped at a steady red light in North Dakota and want to turn right. What does the manual allow?",
        choices: [
          "Turn right without stopping if nothing is coming",
          "Turn right only where a sign expressly permits it",
          "Turn right only on a green arrow",
          "Turn right after stopping, when the intersection is clear of pedestrians and vehicles, unless a sign prohibits it",
        ],
        correctIndex: 3,
        explanation:
          "Right on red is North Dakota's default rather than a special permission. Two conditions attach: you stop first, and the intersection has to be clear of both pedestrians and vehicles. A posted sign prohibiting the turn overrides the default, and some intersections display that sign electronically.",
        context:
          "North Dakota also allows a left turn on red from a one-way street onto another one-way street on the same terms, unless a sign prohibits it. A green arrow, by contrast, is a positive permission to make the movement the arrow shows, even when the main indication is red - though you still yield to anyone already in the intersection.",
        trap:
          "\"Clear enough to go\" is not the test. If you never stopped, the turn is unlawful on an empty street at 3am.",
        excerptKey: "signal-right-on-red",
        sourceLabel: "Noncommercial Driver License Manual - Traffic Signals",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nd_s1_05",
        topic: "rightOfWay",
        question:
          "Two vehicles reach an intersection with no signs or signals at about the same moment. Who yields?",
        choices: [
          "The vehicle on the left yields to the vehicle on the right",
          "The vehicle on the right yields to the vehicle on the left",
          "Whichever driver is going straight has priority",
          "The faster vehicle has priority so traffic keeps moving",
        ],
        correctIndex: 0,
        explanation:
          "North Dakota's tie-breaker at an unsigned intersection is the vehicle on the right. If two of you arrive at roughly the same time, the driver on the left gives way. It only applies when arrival is genuinely close together.",
        context:
          "The manual pairs this rule with a scanning habit: entering an intersection, look first to your left, then to your right, then left again, and be prepared to yield. It also warns that plenty of drivers ignore right-of-way rules altogether, so you drive defensively rather than assuming your turn will be respected.",
        trap:
          "Going straight does not outrank turning here. Position decides it, not what you intend to do.",
        excerptKey: "row-yield-to-right",
        sourceLabel: "Noncommercial Driver License Manual - Right of Way",
        sourceUrl: HB,
      },
      {
        id: "nd_s1_06",
        topic: "rightOfWay",
        question: "What is the rule at a four-way stop in North Dakota?",
        choices: [
          "The largest vehicle goes first",
          "The vehicle that stops first goes first",
          "The vehicle on the left always goes first",
          "Vehicles turning left go before vehicles going straight",
        ],
        correctIndex: 1,
        explanation:
          "North Dakota states the four-way stop rule in terms of order of arrival: the vehicle that stops first goes first. The manual adds a practical rider - if another driver goes out of turn, yield to them rather than insisting on your right and causing a crash.",
        context:
          "Order of arrival settles most four-way stops. Only when two drivers stop at the same instant does the right-hand rule break the tie. The manual's overall framing of right of way is that it is something you give, not something you take.",
        trap:
          "Insisting on your turn when someone jumps the queue is how four-way stops turn into collisions. The manual tells you to yield to the vehicle that went out of turn.",
        excerptKey: "row-four-way-stop",
        sourceLabel: "Noncommercial Driver License Manual - Right of Way",
        sourceUrl: HB,
      },
      {
        id: "nd_s1_07",
        topic: "speed",
        question:
          "There is no speed limit sign on a residential street in Bismarck. What is the maximum?",
        choices: ["20 mph", "35 mph", "30 mph", "25 mph"],
        correctIndex: 3,
        explanation:
          "North Dakota's unposted limit in a business or residential district is 25 mph. It applies unless local authorities have designated and posted something different, which is why a posted 30 on a wide city street is not a contradiction.",
        context:
          "The manual prints eight maximum limits, and the list is worth memorizing as a set: 20 mph in three obstructed-view or school situations, 25 in business and residential districts, 55 on gravel and unposted paved two-lane county and township roads, 65 on rural paved two-lane highways posted for it, 70 on paved divided multi-lane highways, and 80 on rural Interstates.",
        trap:
          "30 mph is the residential default in several neighboring states. North Dakota's is 25.",
        excerptKey: "speed-business-residential",
        sourceLabel: "Noncommercial Driver License Manual - Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "nd_s1_08",
        topic: "speed",
        question:
          "You are passing a school during recess and no lower limit is posted. What is the maximum speed?",
        choices: ["25 mph", "20 mph", "15 mph", "30 mph"],
        correctIndex: 1,
        explanation:
          "North Dakota's school limit is 20 mph, and it bites when you pass a school during recess or while children are going to or leaving school at opening and closing hours. It is a statutory maximum that applies whether or not a flashing beacon is running.",
        context:
          "The statute behind this, section 39-09-02, groups it with the other 20 mph situations: approaching an obstructed railway crossing, and approaching an intersection where your view is blocked. Local authorities may designate and post a lower figure, which is common outside elementary schools.",
        trap:
          "25 is the residential default, not the school one. North Dakota learners regularly report losing road-test points for 23 in a school zone.",
        excerptKey: "speed-school",
        sourceLabel: "Noncommercial Driver License Manual - Speed Limits",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nd_s1_09",
        topic: "rules",
        question:
          "What following distance does the North Dakota manual teach in normal conditions?",
        choices: [
          "One car length for every 10 mph of speed",
          "Two seconds",
          "The three-second rule",
          "Fifty feet at any speed",
        ],
        correctIndex: 2,
        explanation:
          "The manual teaches the three-second rule. You pick a shadow, mark or object beside the road, start counting when the rear bumper of the vehicle ahead passes it, and if you reach the same spot before you finish counting to three, you are too close.",
        context:
          "Three seconds is the floor, not the target. The manual lists situations that call for four or more: slippery roads, following a motorcycle, carrying a heavy load or towing, following a large vehicle that blocks your view, when the driver behind wants to pass, and when the driver ahead cannot see behind them. In winter it tells you to double the gap outright.",
        trap:
          "Car lengths are useless at speed and the manual does not use them. The count is in seconds so it scales with how fast you are going.",
        excerptKey: "following-three-second",
        sourceLabel:
          "Noncommercial Driver License Manual - Following and Stopping Distances",
        sourceUrl: HB,
      },
      {
        id: "nd_s1_10",
        topic: "safety",
        question: "Who has to wear a seat belt in North Dakota?",
        choices: [
          "The driver and front-seat passengers only",
          "Everyone under 18, in any seat",
          "Only occupants on trips outside city limits",
          "All occupants, in all seating positions",
        ],
        correctIndex: 3,
        explanation:
          "North Dakota's seat belt law reaches every occupant in every seating position. There is no back-seat exemption and no adult exemption, and the statute puts the duty on the driver not to operate the vehicle unless each occupant is belted.",
        context:
          "The manual explains why in blunt terms: most traffic deaths and serious injuries happen when people are ejected or thrown into the dashboard, and your chance of being killed is four times greater if you are thrown from the vehicle. Crashes causing injury are most likely below 40 mph and within 25 miles of home.",
        trap:
          "Back-seat passengers are not exempt in North Dakota. Several neighboring states limit the requirement to the front seat, and that is where the confusion comes from.",
        excerptKey: "belt-all-positions",
        sourceLabel: "Noncommercial Driver License Manual - Seat Belts",
        sourceUrl: HB,
      },
      {
        id: "nd_s1_11",
        topic: "licensing",
        question:
          "What is the minimum age to apply for a Class D instruction permit in North Dakota?",
        choices: ["16", "15", "14", "15 and a half"],
        correctIndex: 2,
        explanation:
          "North Dakota lets you apply for an instruction permit at 14, which is among the earliest starting ages in the country. You have to pass the knowledge examination and a vision screening first, and under 18 you need a parent or legal guardian to sign approval and sponsorship.",
        context:
          "The early start comes with a long wait. A 14 or 15 year old holds the permit for 12 months, or until turning 16 if that comes sooner, but never less than six months, before taking or waiving the road test. From 16 or 17 the holding period is six months, or until turning 18.",
        trap:
          "Being able to hold a permit at 14 does not mean driving alone at 14. The minimum age for any licence in North Dakota is 15, and that one is restricted.",
        excerptKey: "permit-age-14",
        sourceLabel: "Noncommercial Driver License Manual - Permits",
        sourceUrl: HB,
      },
      {
        id: "nd_s1_12",
        topic: "licensing",
        question:
          "Who may supervise you while you drive on a North Dakota instruction permit?",
        choices: [
          "Any licensed driver aged 21 or over",
          "A parent or legal guardian only",
          "Any licensed adult sitting anywhere in the vehicle",
          "A licensed driver at least 18 with three years of driving experience, in the seat beside you",
        ],
        correctIndex: 3,
        explanation:
          "Three conditions all have to hold at once: the supervisor holds a valid licence for the class of vehicle, is at least 18, and has at least three years of driving experience. They must be occupying the seat beside you, not the back seat.",
        context:
          "North Dakota also controls who else sits in front. Nobody other than the supervising driver and the permit holder may be in the front seat, unless the vehicle only has a front seat, and then the supervisor must be next to the permit holder. Driving in violation of permit conditions is a two-point penalty on your record.",
        trap:
          "An 18-year-old friend who has been licensed for a year does not qualify. The three years of experience is a separate requirement from the age.",
        excerptKey: "permit-supervisor",
        sourceLabel: "Noncommercial Driver License Manual - Permits",
        sourceUrl: HB,
      },
      {
        id: "nd_s1_13",
        topic: "signs",
        question: "A yellow diamond-shaped sign with a black symbol tells you what?",
        choices: [
          "A potentially hazardous condition is ahead, so proceed with extra caution",
          "A rule is being enforced and you must obey it",
          "Directions, distances or services are ahead",
          "Roadwork is under way and workers are present",
        ],
        correctIndex: 0,
        explanation:
          "Yellow with a black legend is North Dakota's warning family. These signs do not give an order; they tell you something hazardous is coming so you can slow down and prepare before you meet it.",
        context:
          "The manual splits every sign into three families. Regulatory signs control and regulate traffic and give mandatory instructions, mostly white with black letters or red with white. Warning signs are yellow with a black legend. Guide signs are rectangular and give directions, distances, services and points of interest, with colors that vary with the message.",
        trap:
          "Orange with a black legend is a work zone, not a general warning. The color is the whole difference.",
        excerptKey: "sign-warning-purpose",
        sourceLabel: "Noncommercial Driver License Manual - Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "nd_s1_14",
        topic: "signs",
        question:
          "A yellow diamond sign showing a curve carries a smaller sign underneath reading 35. What is that number?",
        choices: [
          "The legal maximum for that curve, enforceable as a speed limit",
          "The minimum speed you must keep through the curve",
          "The distance in feet to the start of the curve",
          "The maximum recommended speed for negotiating the curve",
        ],
        correctIndex: 3,
        explanation:
          "That is an advisory speed sign, and the manual describes it as the maximum recommended speed to negotiate the curve or turn. It is advice on the shape of the road, not a posted limit.",
        context:
          "Advisory speeds sit under curve and turn warning signs to give you time to slow before you enter. The manual is clear that all speed limits, advisory or posted, assume ideal conditions, and that conditions can require you to drive slower than any of them.",
        trap:
          "Advisory or not, taking a curve above the advisory speed on ice will still put you in the ditch, and it can still be careless driving.",
        excerptKey: "sign-curve-advisory",
        sourceLabel: "Noncommercial Driver License Manual - Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "nd_s1_15",
        topic: "signals",
        question: "What does a flashing red signal at an intersection mean?",
        choices: [
          "Proceed with caution without stopping",
          "The signal has failed, so treat it as a green light",
          "Stop and wait for the signal to change to green",
          "The same thing as a stop sign - stop, then proceed when the intersection is clear",
        ],
        correctIndex: 3,
        explanation:
          "Flashing red is a stop sign in light form. You stop, and then proceed once the intersection is clear of pedestrians and vehicles. Nothing is going to change, so waiting for green would leave you sitting there.",
        context:
          "Some North Dakota signals run as flashing beacons late at night or when traffic is light. Flashing yellow at an intersection is the other half of the pattern - it means proceed with caution rather than stop. A dark signal, in a power cut, is different again: the manual requires a stop and a yield to any vehicle in the intersection.",
        trap:
          "Flashing red and flashing yellow are not the same instruction. Only one of them requires you to stop.",
        excerptKey: "signal-flashing-red",
        sourceLabel: "Noncommercial Driver License Manual - Flashing Indications",
        sourceUrl: HB,
      },
      {
        id: "nd_s1_16",
        topic: "signals",
        question:
          "A green arrow comes on while the main signal is still red. What may you do?",
        choices: [
          "Nothing until the main signal turns green",
          "Enter the intersection to make the movement the arrow shows, yielding to pedestrians and vehicles already in it",
          "Make any turn you like, since the arrow overrides the red",
          "Proceed straight ahead as though the light were green",
        ],
        correctIndex: 1,
        explanation:
          "A green arrow authorizes exactly the movement it points to, and it works even while the main indication is red. What it does not do is remove your duty to yield to pedestrians and vehicles already inside the intersection.",
        context:
          "North Dakota's turn indications run through four states for a left turn. Steady red: stop and wait. Steady yellow: the left-turn signal is changing to red. Flashing yellow: you may turn left cautiously after yielding to oncoming traffic and pedestrians, who will typically have a green light. Steady green arrow: left-turning drivers have the right of way.",
        trap:
          "The arrow gives you that movement only. A green left arrow is not permission to go straight.",
        excerptKey: "signal-green-arrow",
        sourceLabel: "Noncommercial Driver License Manual - Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "nd_s1_17",
        topic: "parking",
        question: "How close to a fire hydrant may you park in North Dakota?",
        choices: [
          "No closer than 20 feet",
          "No closer than 10 feet",
          "No closer than 15 feet",
          "No closer than 25 feet",
        ],
        correctIndex: 1,
        explanation:
          "North Dakota's hydrant distance is 10 feet, which is shorter than the 15 feet most states use. The manual prints it in the Do Not Park list and section 39-10-49 states the same figure.",
        context:
          "The rest of the list runs on similar numbers: no parking on a sidewalk or in front of a driveway, on or within 10 feet of a crosswalk at an intersection, within an intersection, within 15 feet of a flashing beacon, stop sign or traffic control signal at the side of the road, on the roadway side of a parked vehicle, or on a bridge, overpass, tunnel or underpass.",
        trap:
          "15 feet is the answer in most states and it is wrong here. North Dakota uses 10 for the hydrant and 15 for signs and signals.",
        excerptKey: "park-hydrant-10",
        sourceLabel: "Noncommercial Driver License Manual - Do Not Park",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nd_s1_18",
        topic: "parking",
        question:
          "You have finished parallel parking. How far from the curb should your wheels be?",
        choices: [
          "Within one foot of the right-hand curb",
          "Within three feet of the right-hand curb",
          "Touching the curb",
          "Within two feet of the right-hand curb",
        ],
        correctIndex: 0,
        explanation:
          "The manual's figure is one foot, with your wheels parallel to the right-hand curb. That is the standard the examiner applies on the road test.",
        context:
          "The manual gives the whole maneuver in four steps. Signal, and stop even with the vehicle ahead and about two feet away from it. Turn the wheel right and back slowly. When clear of the vehicle ahead, turn the wheel left and keep backing. Then turn right, pull ahead toward the curb, stop in the center of the space, and put the vehicle in park.",
        trap:
          "The two feet in step one is the gap between you and the car alongside while you set up, not the finished distance from the curb.",
        excerptKey: "park-parallel-one-foot",
        sourceLabel: "Noncommercial Driver License Manual - Parallel Parking",
        sourceUrl: HB,
      },
      {
        id: "nd_s1_19",
        topic: "rules",
        question:
          "How far ahead of a turn must you signal on a North Dakota road?",
        choices: [
          "50 feet",
          "For at least three seconds",
          "100 feet",
          "As soon as you enter the turn lane",
        ],
        correctIndex: 2,
        explanation:
          "North Dakota's figure is 100 feet, given continuously through the last 100 feet before the turn. The manual states it twice, once for hand signals and once in the Turning section, and section 39-10-38 puts the same distance on lane changes and merges.",
        context:
          "The statute is broader than the manual's turn-only wording: the 100 feet covers turning, moving right or left on a roadway, and merging into or out of traffic. Separately, you may not stop or suddenly slow without signalling the driver behind you when there is a chance to do so.",
        trap:
          "A signal flicked on as you begin the turn is too late. The 100 feet is measured before you start turning, not from where you finish.",
        excerptKey: "signal-100-feet",
        sourceLabel: "Noncommercial Driver License Manual - Hand Signals",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nd_s1_20",
        topic: "impairment",
        question:
          "At what alcohol concentration is a driver aged 21 or over considered legally under the influence in North Dakota?",
        choices: [".05%", ".10%", ".02%", ".08%"],
        correctIndex: 3,
        explanation:
          "The threshold is .08 percent for a driver 21 or over. Under 21 it drops to .02 percent, which is low enough that a single drink puts a young driver over it.",
        context:
          "The manual is careful to describe .08 as the point at which you are legally considered under the influence, not the point at which alcohol begins to matter. It states plainly that drinking even a little makes a crash seven times more likely, and that time is the only thing that removes alcohol from the bloodstream - not coffee, not a cold shower, not exercise.",
        trap:
          "Being under .08 is not a defence for a driver under 21. Their limit is a quarter of it.",
        excerptKey: "dui-08-02",
        sourceLabel:
          "Noncommercial Driver License Manual - Driving While Under the Influence",
        sourceUrl: HB,
      },
      {
        id: "nd_s1_21",
        topic: "sharing",
        question:
          "A school bus ahead of you on a two-lane road stops and its red lights begin flashing. What must you do?",
        choices: [
          "Slow to 20 mph and pass with care",
          "Stop, and stay stopped until the bus moves, the driver signals you past, or the red lights stop flashing",
          "Stop only if you are behind the bus",
          "Pass on the left once you have checked for children",
        ],
        correctIndex: 1,
        explanation:
          "Red flashing lights on a stopped school bus stop traffic from both directions. You may only move again when one of three things happens: the bus starts moving, the bus driver signals you past, or the red lights stop flashing.",
        context:
          "The amber caution lights come first. A bus driver may switch them on between 300 and 500 feet before the stop, and they are a warning that the red lights are about to come on. Passing a stopped school bus is six points in North Dakota, which is enough on its own to cancel the licence of a driver under 18.",
        trap:
          "Slowing down is not stopping. Children cross in front of a bus at exactly the moment a slow-moving car reaches it.",
        excerptKey: "schoolbus-both-directions",
        sourceLabel: "Noncommercial Driver License Manual - Right of Way",
        sourceUrl: HB,
      },
      {
        id: "nd_s1_22",
        topic: "sharing",
        question:
          "How much room must you leave when you pass a bicycle in North Dakota?",
        choices: [
          "A minimum of three feet",
          "A full lane width",
          "A minimum of five feet",
          "Whatever is reasonable in the conditions",
        ],
        correctIndex: 0,
        explanation:
          "North Dakota sets a hard floor of three feet of passing space between the vehicle and the bicycle. The statute goes further than the manual and says you must maintain that clearance until you are safely clear of the bicycle.",
        context:
          "The manual builds a whole routine around bicycles: reduce speed when you meet one, pass only when the road and traffic make it safe, check over your shoulder after passing and before moving back, and give extra room in bad weather. Most crashes between a motor vehicle and a bicycle happen at intersections.",
        trap:
          "Three feet is the minimum, not the target. In wind or on gravel a cyclist can move sideways more than that.",
        excerptKey: "bike-three-feet",
        sourceLabel:
          "Noncommercial Driver License Manual - Sharing the Road with Bicycles",
        sourceUrl: HB,
      },
      {
        id: "nd_s1_23",
        topic: "emergencies",
        question:
          "An ambulance comes up behind you with lights flashing and its siren going. What does the manual require?",
        choices: [
          "Speed up until you find a wide spot to pull into",
          "Change lanes and keep moving at the same speed",
          "Stop immediately where you are, including in an intersection",
          "Come to a stop along the right-hand curb or edge of the road and stay there until it has passed",
        ],
        correctIndex: 3,
        explanation:
          "You pull to the right-hand curb or edge of the road, stop, and remain stopped until the emergency vehicle has passed. The manual adds one placement rule that catches people out: do not stop in the middle of an intersection.",
        context:
          "The same duty is triggered by flashing red, white or blue lights or by a siren, on emergency and law enforcement vehicles alike. Where one is parked at a crash scene with its lights going, you move to the right-hand side and stop, and only then may you pass at your own risk when the roadway is clear - unless an officer is directing traffic, whose instructions come first.",
        trap:
          "Stopping in the intersection blocks the very path the ambulance needs. Clear it first, then stop at the curb.",
        excerptKey: "emergency-pull-right",
        sourceLabel: "Noncommercial Driver License Manual - Right of Way",
        sourceUrl: HB,
      },
      {
        id: "nd_s1_24",
        topic: "emergencies",
        question:
          "A North Dakota highway is officially closed because of a blizzard. What happens if you drive around the barricade?",
        choices: [
          "Nothing, as long as you make it through safely",
          "It is not legal, and the penalty is a $250 fine",
          "It is legal if you have four-wheel drive",
          "You are billed for the cost of any rescue but commit no offence",
        ],
        correctIndex: 1,
        explanation:
          "Entering a road that has been officially closed because of hazardous conditions is illegal in North Dakota and carries a $250 fine. The manual prints the rule twice - once under winter driving and once under flooding - which is a fair indication of how often it comes up.",
        context:
          "The road closure rule sits inside a wider winter chapter that is unusually detailed here for obvious reasons. It tells you to double your following distance even with snow tires, to stay with a vehicle stuck in a snowstorm because most deaths happen to people who leave and get lost, and to run the engine and heater only in short bursts with a window cracked so carbon monoxide does not build up.",
        trap:
          "Four-wheel drive changes nothing about the offence and, as the manual points out, mostly gives drivers a false sense of security on ice.",
        excerptKey: "winter-closed-road",
        sourceLabel:
          "Noncommercial Driver License Manual - Winter Driving",
        sourceUrl: HB,
      },
      {
        id: "nd_s1_25",
        topic: "speed",
        question:
          "What is the maximum speed on a rural Interstate highway in North Dakota where nothing lower is posted?",
        choices: ["70 mph", "80 mph", "75 mph", "65 mph"],
        correctIndex: 1,
        explanation:
          "North Dakota's rural Interstate maximum is 80 mph, one of the highest in the country. It applies unless something lower is posted, and lower limits are common near cities and in work zones.",
        context:
          "Do not confuse it with the 70 mph that applies to paved and divided multi-lane highways generally. The 80 is reserved for access-controlled, paved and divided, multi-lane Interstate highways in rural areas. Above 65 mph the point schedule also gets harsher - one point starts at 6 mph over instead of 11.",
        trap:
          "75 is the figure in several neighboring states. North Dakota went to 80 and the manual prints it plainly.",
        excerptKey: "speed-interstate",
        sourceLabel: "Noncommercial Driver License Manual - Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "nd_s1_26",
        topic: "rules",
        question:
          "A broken yellow line runs down the center of a two-lane, two-way road. What does it permit?",
        choices: [
          "Crossing to turn left or to pass another vehicle",
          "Crossing only to turn left",
          "Passing only when you are in the lane next to the solid line",
          "Nothing - it is a no-passing line in both directions",
        ],
        correctIndex: 0,
        explanation:
          "A broken yellow center line on a two-lane, two-way road may be crossed for two purposes: to turn left, or to pass another vehicle. Those are the only two the manual lists.",
        context:
          "The yellow markings form a ladder. Two solid yellow lines mean no passing in either direction, and crossing is permitted only as part of a left turn. One solid line beside one broken line means no passing when you are in the lane next to the solid line, though you may still cross that solid line to turn left.",
        trap:
          "Broken beside solid is not the same as broken alone. Which side you are on decides whether you may pass.",
        excerptKey: "marking-broken-yellow",
        sourceLabel: "Noncommercial Driver License Manual - Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "nd_s1_27",
        topic: "safety",
        question:
          "North Dakota's child passenger safety law requires a child restraint for children of what age?",
        choices: [
          "Under six years of age",
          "Under four years of age",
          "Under twelve years of age",
          "Under eight years of age",
        ],
        correctIndex: 3,
        explanation:
          "Children under eight must be properly secured in a child restraint, meaning a car seat or a booster seat. There is one substitution: a child under eight who is at least 57 inches tall may use a seat belt instead.",
        context:
          "From eight through seventeen, a child must be in a seat belt or a child restraint. The manual also gives non-statutory advice worth knowing for the test: children under 13 belong in the back seat even without an airbag, a rear-facing infant seat never goes in front of an airbag, and 40 pounds and four years is the earliest sensible move from car seat to booster.",
        trap:
          "The 57-inch substitution is about height, not weight or age. A tall six-year-old qualifies; a small nine-year-old is already past the restraint requirement anyway.",
        excerptKey: "child-under-eight",
        sourceLabel:
          "Noncommercial Driver License Manual - Child Restraints (Car Safety Seats)",
        sourceUrl: HB,
      },
      {
        id: "nd_s1_28",
        topic: "licensing",
        question:
          "What does the manual say about carrying your North Dakota licence or permit?",
        choices: [
          "You must have it in your possession every time you drive",
          "You may leave it at home if you can recite the number",
          "You need it only when driving outside your home county",
          "A photograph of it on your phone satisfies the requirement",
        ],
        correctIndex: 0,
        explanation:
          "The manual states it flatly: you must have your licence or permit in your possession every time you drive. It also has to be signed by you to be valid at all.",
        context:
          "Section 39-06-16 phrases the same duty as immediate possession, and it accepts a physical or an electronic operator's licence. It also gives a way out for someone who genuinely holds a licence but did not have it to hand, provided they produce it to the prosecutor within fourteen days.",
        trap:
          "\"I have one, it is just at home\" is still a violation at the roadside. The statute's fourteen-day cure runs through the prosecutor's office, not the traffic stop.",
        excerptKey: "licence-carry",
        sourceLabel: "Noncommercial Driver License Manual - Your Operator's License",
        sourceUrl: HB,
      },
      {
        id: "nd_s1_29",
        topic: "signs",
        question:
          "An orange triangle with a red reflective border is fixed to the back of a vehicle ahead. What does it tell you?",
        choices: [
          "The vehicle is carrying hazardous material",
          "The vehicle is being towed at 25 mph or less",
          "The vehicle is an emergency vehicle out of service",
          "The vehicle is a farm vehicle exempt from speed limits",
        ],
        correctIndex: 1,
        explanation:
          "That is the slow-moving vehicle emblem. North Dakota describes it as mounted on the rear of vehicles or equipment being towed at a speed of 25 miles per hour or less, and the instruction that goes with it is to slow down and use caution.",
        context:
          "On rural North Dakota roads the emblem usually means farm machinery, and the closing speed catches people out - at 65 mph you are covering roughly 60 feet a second more than the tractor is. The triangle shape is used for nothing else, so it is recognizable long before you can read anything on the vehicle.",
        trap:
          "It is not a hazard placard and it is not an exemption. It is a speed warning, and it means you have less time than you think.",
        excerptKey: "sign-slow-moving-speed",
        sourceLabel: "Noncommercial Driver License Manual - Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "nd_s1_30",
        topic: "emergencies",
        question:
          "At what level of damage must a North Dakota crash be reported to police?",
        choices: [
          "Any damage at all",
          "$1,000 or more",
          "$2,500 or more",
          "$4,000 or more in combined damage",
        ],
        correctIndex: 3,
        explanation:
          "The reporting threshold is $4,000 or more in combined damage, or any personal injury or death. In a city you report it immediately to the local police; outside city limits, to the Highway Patrol or the county sheriff's office.",
        context:
          "Reporting is separate from the exchange of information. In any crash involving injury or damage, drivers must exchange name, address, motor vehicle insurance company and policy number. If you hit an unattended vehicle you must find and notify the owner, and if you cannot, leave a note in a conspicuous place with your name, address and insurer.",
        trap:
          "Combined means both vehicles together, so a modest dent on each can clear $4,000 quickly at modern repair rates.",
        excerptKey: "crash-report-4000",
        sourceLabel: "Noncommercial Driver License Manual - Crash Reports",
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
      "Passing, lane changes, turning and parking, plus the numbers that go with them. These are the rules NDDOT expects you to have absorbed from the manual rather than picked up by watching other drivers, and they are where the knowledge test spends most of its questions.",
    questions: [
      {
        id: "nd_s2_01",
        topic: "rules",
        question:
          "The manual lists places you must never pass. Which of these is on that list?",
        choices: [
          "Within 100 feet of an intersection, a railroad crossing or a tunnel",
          "Within 50 feet of a driveway",
          "Within 200 feet of a bridge",
          "Within 300 feet of a school",
        ],
        correctIndex: 0,
        explanation:
          "One hundred feet of an intersection, a railroad crossing or a tunnel is a no-passing zone whether or not it is marked. The manual's list also bars passing while approaching the top of a hill or a curve, wherever a marking or sign says NO PASSING, and whenever fog, snow or rain has cut your view.",
        context:
          "The manual frames passing as four questions to ask before you commit: is the pass necessary, am I in or approaching a no-passing zone, can I return to my lane before meeting an approaching vehicle, and can I see the road ahead clearly. It adds a blunt rule for blind spots - treat a hill or curve as though there is oncoming traffic just beyond it.",
        trap:
          "The absence of a painted no-passing line does not make a pass legal. The 100-foot zones apply regardless of markings.",
        excerptKey: "pass-never-100-feet",
        sourceLabel: "Noncommercial Driver License Manual - Passing",
        sourceUrl: HB,
      },
      {
        id: "nd_s2_02",
        topic: "rules",
        question:
          "You are passing on a two-lane road. How much clearance must you have when you return to your lane?",
        choices: [
          "At least 100 feet before meeting an approaching vehicle",
          "At least 200 feet before meeting an approaching vehicle",
          "Enough to avoid a collision, with no set distance",
          "At least 500 feet before meeting an approaching vehicle",
        ],
        correctIndex: 1,
        explanation:
          "Two hundred feet. The manual tells you to give yourself enough time to get completely beyond the vehicle you are passing and back into your own lane at least 200 feet before you meet an approaching vehicle, and section 39-10-13 puts the same number in the statute.",
        context:
          "The manual pairs the distance with a visual check that works better than judging feet at speed: do not move back until you can see the entire front of the vehicle you passed in your inside rear-view mirror. It also tells you never to leave the main travelled roadway to complete a pass.",
        trap:
          "Two hundred feet closes in about a second and a half when both vehicles are doing 65. The mirror check is the practical version of the rule.",
        excerptKey: "pass-200-feet",
        sourceLabel: "Noncommercial Driver License Manual - Passing",
        sourceUrl: HB,
      },
      {
        id: "nd_s2_03",
        topic: "rules",
        question:
          "Two vehicles are involved in a lane change. Who does the manual make responsible for doing it safely?",
        choices: [
          "The driver already in the lane being entered",
          "Both drivers equally",
          "Whichever driver is travelling faster",
          "The driver making the lane change",
        ],
        correctIndex: 3,
        explanation:
          "The manual puts it in bold terms: the driver of the vehicle making the lane change is responsible for changing lanes safely. The driver already in that lane is not required to make room.",
        context:
          "The procedure the manual gives is mirrors, then a look over your shoulder for vehicles behind and already in the other lane, then the signal, then the move - and change only one lane at a time, cancelling the signal afterwards. It also tells you to avoid changing lanes inside an intersection where you can.",
        trap:
          "A signal is a statement of intent, not a claim on the lane. Signalling does not transfer the responsibility to anyone else.",
        excerptKey: "lane-change-responsible",
        sourceLabel: "Noncommercial Driver License Manual - Lane Changes",
        sourceUrl: HB,
      },
      {
        id: "nd_s2_04",
        topic: "signals",
        question:
          "A power outage has left the traffic signals at a busy intersection completely dark. What does North Dakota require?",
        choices: [
          "Treat the intersection as though the light were green in your direction",
          "Stop and yield the right of way to any vehicle in the intersection",
          "Proceed at reduced speed without stopping",
          "Wait for a police officer before entering",
        ],
        correctIndex: 1,
        explanation:
          "A dark signal is not a free intersection. The manual requires the driver to stop and yield the right of way to any vehicle already in the intersection.",
        context:
          "Do not confuse this with a flashing yellow, which means proceed with caution and does not require a stop, or with a flashing red, which requires a stop and then a clear-intersection check. Dark is closest to flashing red in what it asks of you.",
        trap:
          "Some states tell drivers to treat a dead signal as a four-way stop. North Dakota's manual phrases it as a stop plus a yield, which is not quite the same and is what the test is written from.",
        excerptKey: "signal-dark",
        sourceLabel: "Noncommercial Driver License Manual - Traffic Signals",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nd_s2_05",
        topic: "signals",
        question:
          "You are waiting to turn left and the left-turn signal shows a flashing yellow arrow. What may you do?",
        choices: [
          "Turn left immediately - you have the right of way",
          "Stop and wait, because flashing yellow bars the turn",
          "Turn left cautiously after yielding to oncoming traffic and to pedestrians",
          "Turn left only after the arrow turns green",
        ],
        correctIndex: 2,
        explanation:
          "A flashing yellow arrow is a permissive turn. You may turn left cautiously once you have yielded to oncoming traffic and to pedestrians. The manual points out the thing that makes it dangerous - oncoming traffic will typically have a green light.",
        context:
          "The four left-turn indications form a ladder. Steady red: stop and wait. Steady yellow: the left-turn signal is changing to red. Flashing yellow: yield and turn when safe. Steady green arrow: left-turning drivers have the right of way and oncoming traffic is being held.",
        trap:
          "Flashing yellow looks like an invitation and is not one. Nothing is stopping the oncoming traffic while it flashes.",
        excerptKey: "signal-fya",
        sourceLabel: "Noncommercial Driver License Manual - Turn Indications",
        sourceUrl: HB,
      },
      {
        id: "nd_s2_06",
        topic: "rightOfWay",
        question:
          "You are turning left across oncoming traffic at an intersection with no turn arrow. What does the manual warn you to watch for?",
        choices: [
          "Vehicles passing on the right side of a vehicle turning left",
          "Vehicles behind you flashing their headlights",
          "Pedestrians on the far sidewalk waiting to cross later",
          "Vehicles in the two-way left turn lane behind you",
        ],
        correctIndex: 0,
        explanation:
          "Left-turning vehicles must yield to oncoming traffic, and the manual adds a specific hazard: a vehicle passing on the right of the oncoming car that has stopped to let you through. That second car is hidden until the moment you commit.",
        context:
          "This is the crash type the manual raises again under motorcycles. Nearly 40 percent of motorcycle crashes involving another vehicle were caused by that other vehicle turning left in front of the rider, partly because a motorcycle's small profile makes it hard to judge how fast it is closing.",
        trap:
          "A courteous oncoming driver waving you through has not checked the lane beside them. Their gap is not evidence that the road is clear.",
        excerptKey: "row-left-turn-yield",
        sourceLabel: "Noncommercial Driver License Manual - Right of Way",
        sourceUrl: HB,
      },
      {
        id: "nd_s2_07",
        topic: "rightOfWay",
        question:
          "At an uncontrolled T-intersection, which driver has to yield?",
        choices: [
          "The driver on the continuing street yields to the terminating street",
          "Whichever driver arrives second, regardless of street",
          "The driver on the terminating street yields to vehicles on the continuing street",
          "Neither - both must stop",
        ],
        correctIndex: 2,
        explanation:
          "The street that ends gives way to the street that continues. A driver coming up the stem of the T yields to traffic on the road across the top of it, whichever direction that traffic is travelling.",
        context:
          "This rule overrides the general yield-to-the-right tie-breaker, because a T-intersection is not a genuine tie: the through road has priority by its shape. The manual pairs it with the driveway rule - a vehicle entering or crossing a roadway from a private drive yields to all oncoming traffic.",
        trap:
          "The right-hand rule does not apply here. The shape of the intersection decides it, not the position of the other car.",
        excerptKey: "row-t-intersection",
        sourceLabel: "Noncommercial Driver License Manual - Right of Way",
        sourceUrl: HB,
      },
      {
        id: "nd_s2_08",
        topic: "rightOfWay",
        question:
          "You are pulling out of an alley in a business district and a sidewalk crosses your path. What does the manual require?",
        choices: [
          "Sound the horn and continue if the sidewalk looks empty",
          "Yield to pedestrians but keep rolling",
          "Slow to walking pace and cross when clear",
          "Come to a complete stop immediately before crossing the sidewalk area",
        ],
        correctIndex: 3,
        explanation:
          "Vehicles emerging from a driveway, alley, private road or building inside a business or residential district must come to a complete stop immediately before crossing the sidewalk area. Where there is no sidewalk, the stop comes before you enter the roadway.",
        context:
          "This is one of the few places where the manual demands a full stop with no sign present. The reason is sight lines: from between two buildings you cannot see a pedestrian on the sidewalk until your bumper is already on it. Once you are past the sidewalk you still have to yield to all oncoming traffic on the road.",
        trap:
          "Nothing marks this stop. No sign, no line, no light - the duty comes from where you are emerging from.",
        excerptKey: "row-emerging-stop",
        sourceLabel: "Noncommercial Driver License Manual - Right of Way",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nd_s2_09",
        topic: "speed",
        question:
          "You turn off pavement onto an unposted gravel county road. What is the maximum speed?",
        choices: ["45 mph", "65 mph", "50 mph", "55 mph"],
        correctIndex: 3,
        explanation:
          "Fifty-five is North Dakota's maximum on gravel, dirt or loose surface roads, and the same 55 applies to paved two-lane county and township highways with no limit posted.",
        context:
          "The manual is careful to add that it is a maximum for ideal conditions, and its Reading the Road section explains why that matters on gravel: your tires do not have the traction to give you stable control, so you slow down and avoid sudden changes of direction. Under-16 permit holders are required to log some of their 50 practice hours on gravel, dirt or aggregate surfaces for exactly this reason.",
        trap:
          "Fifty-five on washboard gravel is legal and frequently unwise. The posted or default number is a ceiling, never a recommendation.",
        excerptKey: "speed-gravel",
        sourceLabel: "Noncommercial Driver License Manual - Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "nd_s2_10",
        topic: "speed",
        question:
          "What is the maximum speed on a paved, divided multi-lane North Dakota highway that is not an Interstate, where nothing is posted?",
        choices: ["70 mph", "65 mph", "75 mph", "60 mph"],
        correctIndex: 0,
        explanation:
          "Seventy. The manual's list gives 70 mph for paved and divided multi-lane highways, unless something else is posted.",
        context:
          "Keep the three high numbers apart: 65 on rural paved two-lane highways posted for that speed, 70 on paved divided multi-lane highways, and 80 on rural Interstates. A two-lane highway with nothing posted falls back to 55, not 65.",
        trap:
          "Sixty-five is the two-lane figure and only applies where the road is actually posted for it. Divided multi-lane is a step above.",
        excerptKey: "speed-multilane",
        sourceLabel: "Noncommercial Driver License Manual - Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "nd_s2_11",
        topic: "parking",
        question:
          "How far from a stop sign at the side of the roadway may you park?",
        choices: [
          "No closer than 10 feet",
          "No closer than 30 feet",
          "No closer than 20 feet",
          "No closer than 15 feet",
        ],
        correctIndex: 3,
        explanation:
          "Fifteen feet, on the approach to a flashing beacon, a stop sign or a traffic control signal placed at the side of the roadway. The manual and section 39-10-49 give the same figure.",
        context:
          "North Dakota's parking distances are lower than most states use, and easy to mix up as a set: 10 feet from a fire hydrant, 10 feet from a crosswalk at an intersection, 15 feet from a stop sign, beacon or signal, and 15 feet either side of the ends of a safety zone. The statute adds two the manual leaves out - 15 feet from the nearest rail of a railroad crossing, and 20 feet from a fire station driveway.",
        trap:
          "Thirty feet from a stop sign is the common figure elsewhere and it is wrong here. North Dakota uses 15.",
        excerptKey: "park-15-feet-signal",
        sourceLabel: "Noncommercial Driver License Manual - Do Not Park",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nd_s2_12",
        topic: "parking",
        question:
          "Which of these is specifically listed in the manual's Do Not Park list?",
        choices: [
          "On a bridge, overpass, or in a tunnel or underpass",
          "Facing against the direction of traffic on a two-way street",
          "More than 18 inches from the curb",
          "Within 25 feet of a bus stop",
        ],
        correctIndex: 0,
        explanation:
          "Bridges, overpasses, tunnels and underpasses are all on the list. They are places where a stopped vehicle cannot be seen in time and where there is nowhere for anyone to go around it.",
        context:
          "The list also covers sidewalks, in front of driveways, within an intersection, on the street side of another parked vehicle - which is what double parking means - alongside or opposite a street excavation where you would obstruct traffic, and anywhere a No Parking sign is posted. Accessible parking spaces need the correct placard or plate, and the diagonal lines beside them are not a space.",
        trap:
          "An empty overpass shoulder in a rural county still counts. The rule is about the structure, not about how much room there is.",
        excerptKey: "park-bridge-tunnel",
        sourceLabel: "Noncommercial Driver License Manual - Do Not Park",
        sourceUrl: HB,
      },
      {
        id: "nd_s2_13",
        topic: "safety",
        question: "When does the North Dakota manual tell you to use your headlights?",
        choices: [
          "From one hour after sunset to one hour before sunrise",
          "From sunset to sunrise, and any other time necessary for safe driving",
          "Only when you cannot see the vehicle ahead",
          "From half an hour after sunset to half an hour before sunrise",
        ],
        correctIndex: 1,
        explanation:
          "Sunset to sunrise is the baseline, plus any other time headlights are necessary for safe driving. There is no grace period on either side of it in the driving rule.",
        context:
          "The half-hour figure does exist in North Dakota, but it belongs to a different rule: between half an hour after sunset and half an hour before sunrise, a vehicle parked on a public highway must show a white or amber lamp at the front and a red light at the rear, visible for 1,000 feet.",
        trap:
          "The half-hour buffer is for parking lamps, not for driving. Mixing the two is a classic knowledge-test error.",
        excerptKey: "night-headlights-sunset",
        sourceLabel: "Noncommercial Driver License Manual - Night Driving",
        sourceUrl: HB,
      },
      {
        id: "nd_s2_14",
        topic: "safety",
        question:
          "Blowing snow has cut visibility on a North Dakota highway to about 800 feet in the middle of the afternoon. What does the manual require?",
        choices: [
          "Headlights, because visibility is less than 1,000 feet",
          "Hazard lights only, since headlights are for night use",
          "Nothing, as long as it is still daylight",
          "Parking lights, which are enough in daytime snow",
        ],
        correctIndex: 0,
        explanation:
          "Use headlights during inclement weather whenever visibility drops below 1,000 feet because of rain, snow, sleet, hail, smoke or fog. The time of day is irrelevant.",
        context:
          "The point is being seen rather than seeing. Daytime running lights illuminate the front of a car and leave the tail lamps dark, which is exactly the wrong way round in blowing snow, where the vehicle most likely to hit you is behind you. Section 39-21-01 states the same 1,000-foot standard in the statute.",
        trap:
          "Daytime running lights are not headlights. They leave you invisible from behind in the conditions where that matters most.",
        excerptKey: "night-headlights-weather",
        sourceLabel: "Noncommercial Driver License Manual - Night Driving",
        sourceUrl: HB,
      },
      {
        id: "nd_s2_15",
        topic: "impairment",
        question:
          "You refuse the chemical test after being arrested for DUI in North Dakota. What happens to your licence?",
        choices: [
          "Nothing until a court convicts you",
          "It is suspended for 30 days",
          "It is revoked for 180 days to three years",
          "It is revoked for exactly one year",
        ],
        correctIndex: 2,
        explanation:
          "Refusal triggers a revocation of 180 days to three years. That is separate from anything a court does about the driving itself, and it applies to a refusal of either the chemical test or the roadside preliminary breath test.",
        context:
          "This is North Dakota's implied consent rule. By taking a licence to drive in the state you have already consented to a chemical test of blood, breath, urine or saliva. The manual's own argument for taking it is that if you are not legally intoxicated, the test will show that.",
        trap:
          "Refusing does not avoid the penalty, it changes which penalty applies - and the refusal revocation can outlast a first-offence suspension.",
        excerptKey: "implied-consent-refusal",
        sourceLabel: "Noncommercial Driver License Manual - Implied Consent",
        sourceUrl: HB,
      },
      {
        id: "nd_s2_16",
        topic: "impairment",
        question:
          "Where must an opened bottle of alcohol be carried in a North Dakota vehicle?",
        choices: [
          "In the trunk",
          "In the glove compartment, out of reach",
          "Anywhere, as long as no one drinks from it",
          "Under a seat where the driver cannot reach it",
        ],
        correctIndex: 0,
        explanation:
          "Open containers go in the trunk. The manual says it plainly, and the statute adds the case for a vehicle with no trunk - some other area not normally occupied by the driver or passengers.",
        context:
          "The statute is explicit that a utility compartment or glove compartment counts as part of the area the driver and passengers occupy, so putting the bottle there does not solve the problem. Drinking in or on a motor vehicle on a public highway is separately illegal for driver and passenger alike, and the fee for a violation is fifty dollars.",
        trap:
          "The glove box feels like it should count and specifically does not. The statute names it.",
        excerptKey: "open-container-trunk",
        sourceLabel: "Noncommercial Driver License Manual - Open Container Law",
        sourceUrl: HB,
      },
      {
        id: "nd_s2_17",
        topic: "sharing",
        question:
          "What is the rule of thumb the manual gives for staying visible to a truck driver?",
        choices: [
          "Stay at least three car lengths behind any truck",
          "If you cannot see the truck driver in the side mirror, they cannot see you",
          "Flash your headlights before passing so the driver knows you are there",
          "Stay level with the cab where the driver can glance across",
        ],
        correctIndex: 1,
        explanation:
          "The manual's own phrasing is that if you cannot see the truck driver in their side mirror, they cannot see you. It is a test you can apply at a glance from any position around the truck.",
        context:
          "The no-zones are large: up to 20 feet in front of the cab, on either side and particularly alongside the cab, and up to 200 feet behind. A loaded tractor-trailer may need more than 400 feet of dry pavement to stop, which is more than a football field, so the space you cut out of the front of one is the space it needed.",
        trap:
          "Alongside the cab feels like the safest place to sit and is one of the worst. Lingering there is what the manual warns against.",
        excerptKey: "truck-mirror-rule",
        sourceLabel:
          "Noncommercial Driver License Manual - Sharing the Road with Trucks",
        sourceUrl: HB,
      },
      {
        id: "nd_s2_18",
        topic: "sharing",
        question:
          "A motorcycle is riding in the right-hand portion of the lane ahead of you and there is clearly room to pass within the lane. What does the manual say?",
        choices: [
          "Pass within the lane if you leave three feet",
          "Pass within the lane only if the rider waves you through",
          "Sound your horn, then pass within the lane",
          "Allow the motorcyclist a full lane width and do not share the lane",
        ],
        correctIndex: 3,
        explanation:
          "Motorcyclists get a full lane width in North Dakota. The manual anticipates the exact reasoning behind the wrong answer - it may look as though the lane holds both of you - and answers it: the motorcycle needs the room to maneuver safely, so do not share the lane.",
        context:
          "The reason shows up in the manual's list of hazards. Riders change speed or move within their lane suddenly to deal with potholes, gravel, wet surfaces, pavement seams, railroad crossings and grooved pavement, all of which are minor annoyances in a car. Take away the sideways room and they have nowhere to put the bike.",
        trap:
          "The three-foot rule is about passing bicycles. Motorcycles get the whole lane, which is a different and larger allowance.",
        excerptKey: "moto-full-lane",
        sourceLabel:
          "Noncommercial Driver License Manual - Sharing the Road with Motorcycles",
        sourceUrl: HB,
      },
      {
        id: "nd_s2_19",
        topic: "emergencies",
        question:
          "The back end of your rear-wheel drive car slides to the right on an icy North Dakota road. What does the manual tell you to do?",
        choices: [
          "Brake firmly and steer left to counter the slide",
          "Stay off the brakes, ease off the accelerator, and steer right",
          "Accelerate hard to pull the car straight",
          "Shift into a lower gear and hold the wheel straight",
        ],
        correctIndex: 1,
        explanation:
          "In a rear-wheel drive car you stay off the brakes, ease gradually off the accelerator, and turn the wheels in the direction the rear end is sliding. Rear skidding right means steering right.",
        context:
          "The manual gives different answers by drivetrain, which is unusual and worth knowing. Front-wheel drive at moderate speed: accelerate slightly and steer where you want to go, or shift to neutral if there is no room to accelerate. Four-wheel drive at moderate speed: accelerate and steer into the skid, and at higher speed shift to neutral or push in the clutch.",
        trap:
          "Braking in a skid locks the wheels and removes what steering you had. The instruction is to come off both pedals first.",
        excerptKey: "skid-rwd-direction",
        sourceLabel: "Noncommercial Driver License Manual - Skids",
        sourceUrl: HB,
      },
      {
        id: "nd_s2_20",
        topic: "emergencies",
        question: "Your front tire blows out at highway speed. What comes first?",
        choices: [
          "Brake hard to shed speed before you lose control",
          "Steer sharply onto the shoulder immediately",
          "Grip the wheel tightly, steer straight ahead and ease off the accelerator",
          "Pull the parking brake to slow the car evenly",
        ],
        correctIndex: 2,
        explanation:
          "Grip the wheel, hold your line, and come off the accelerator without braking until you have regained full control. Only when the car is almost stopped do you turn onto the shoulder.",
        context:
          "The manual tells you what each failure feels like so you can identify it. A thumping sound is the warning. A front blowout pulls the car toward the blown tire; a rear one makes it sway from side to side. Braking while a tire is gone makes the pull or sway sharply worse.",
        trap:
          "Steering straight for the shoulder while the car is still at speed is the reflex, and it is how a recoverable blowout becomes a rollover.",
        excerptKey: "blowout-response",
        sourceLabel:
          "Noncommercial Driver License Manual - Flat Tire or Blowouts",
        sourceUrl: HB,
      },
      {
        id: "nd_s2_21",
        topic: "licensing",
        question:
          "You are 16 and have just been issued a North Dakota instruction permit. How long must you hold it before the road test?",
        choices: [
          "Six months, or until you turn 18, whichever comes first",
          "Twelve months, with no exceptions",
          "Thirty days",
          "Until you have logged 50 hours of practice",
        ],
        correctIndex: 0,
        explanation:
          "For a 16 or 17 year old the holding period is six months, or until turning 18 if that arrives sooner. The permit has to be valid throughout.",
        context:
          "Under 16 the period is longer: 12 months, or until turning 16, whichever comes first, but never less than six months. That group also has to complete formal driver education and log a minimum of 50 hours of supervised practice, with a parent or guardian signing that it was done on road-test day.",
        trap:
          "The 50-hour log belongs to the under-16 group. A 16-year-old holds the permit six months but does not have the state-mandated log or the driver education requirement.",
        excerptKey: "permit-hold-16-17",
        sourceLabel: "Noncommercial Driver License Manual - Permits",
        sourceUrl: HB,
      },
      {
        id: "nd_s2_22",
        topic: "licensing",
        question:
          "How many hours of supervised practice driving must a North Dakota permit holder under 16 complete?",
        choices: ["30 hours", "40 hours", "50 hours", "60 hours"],
        correctIndex: 2,
        explanation:
          "Fifty hours of supervised practice in variable conditions, and the manual is emphatic that this is in addition to the formal driver education requirement rather than part of it.",
        context:
          "The log is not just a total. The Supervised Driving Log names five conditions that have to appear in it: rural areas, urban areas, gravel, dirt or aggregate surface roads, night driving, and winter driving. The statute behind it, section 39-06-17, lists the same conditions as a precondition for a restricted licence at 15.",
        trap:
          "The 30 hours some people quote is the classroom half of driver education, not the practice log.",
        excerptKey: "permit-50-hours",
        sourceLabel: "Noncommercial Driver License Manual - Permits",
        sourceUrl: HB,
      },
      {
        id: "nd_s2_23",
        topic: "signs",
        question:
          "You are on a ramp and a large white sign with red letters reading WRONG WAY faces you. What has happened?",
        choices: [
          "You are travelling the wrong way on a street, freeway or ramp",
          "The ramp is closed for construction",
          "You are approaching a one-way street you may not enter",
          "Traffic ahead has been reversed for a special event",
        ],
        correctIndex: 0,
        explanation:
          "The Wrong Way sign tells you exactly that - you are going the wrong way on a street, freeway or ramp. It is normally posted behind a Do Not Enter, so if you can read it you have already passed one warning.",
        context:
          "Do Not Enter prohibits the driver from entering a restricted road section, and the One Way sign tells you traffic on that road flows only in the direction of the arrow. All three are regulatory signs, which give mandatory instructions rather than advice.",
        trap:
          "The instinct is to keep going and find somewhere to turn. On a freeway ramp that puts you into head-on traffic within seconds.",
        excerptKey: "sign-wrong-way",
        sourceLabel: "Noncommercial Driver License Manual - Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "nd_s2_24",
        topic: "signs",
        question:
          "A yellow pennant-shaped sign reading DO NOT PASS sits on the left-hand side of a two-lane road. Why is it there rather than on the right?",
        choices: [
          "It marks the end of a no-passing zone",
          "It applies only to trucks and buses",
          "Pennant-shaped no-passing signs are placed on the left, while the rectangular version goes on the right",
          "Left-hand placement means the restriction is advisory only",
        ],
        correctIndex: 2,
        explanation:
          "North Dakota's manual explains the pairing directly: the rectangular Do Not Pass sign goes on the right side of the road, and the pennant-shaped version is found on the left-hand side. Same instruction, different placement.",
        context:
          "Putting the pennant on the left keeps it in the field of view of the driver who is thinking about pulling out, which is where it does the most good. The manual notes that some states use the pennant in addition to the rectangle rather than instead of it.",
        trap:
          "Nothing about being on the left makes a sign advisory. Both versions carry the same prohibition.",
        excerptKey: "sign-do-not-pass-pennant",
        sourceLabel: "Noncommercial Driver License Manual - Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "nd_s2_25",
        topic: "rules",
        question:
          "A center lane is marked with two-way left turn arrows. What may you use it for?",
        choices: [
          "Left turns only, from either direction",
          "Left turns and passing slower traffic",
          "Overtaking when the through lanes are congested",
          "Left turns, and driving in it until a gap appears",
        ],
        correctIndex: 0,
        explanation:
          "The center lane is reserved only for left-turning vehicles travelling in either direction. The manual states explicitly that passing or overtaking is not permitted in it.",
        context:
          "The lane exists to get turning traffic out of the through lanes without giving anyone a third travelling lane. The regulatory Two-Way Left Turn Only sign carries the same message, and the manual repeats that the lane is not intended for passing or overtaking.",
        trap:
          "It looks like a free lane when the through lanes back up, and using it that way puts you head-on into someone else's left turn.",
        excerptKey: "marking-twltl",
        sourceLabel: "Noncommercial Driver License Manual - Pavement Markings",
        sourceUrl: HB,
      },
      {
        id: "nd_s2_26",
        topic: "rules",
        question: "Where does the manual forbid a U-turn?",
        choices: [
          "On any road with a posted limit above 45 mph",
          "Near the crest of a hill or on any curve where the driver cannot see 500 feet or more",
          "Within 200 feet of an intersection",
          "Anywhere outside a city",
        ],
        correctIndex: 1,
        explanation:
          "The test is sight distance, not location. You may not turn around near the crest of a hill or on any curve where the driver cannot see 500 feet or more.",
        context:
          "The statute, section 39-10-36, phrases the same rule from the other direction: no vehicle may be turned to proceed the opposite way on a curve or approaching a crest where it cannot be seen by another driver approaching from either direction within 500 feet. It also requires that any U-turn be made safely and without interfering with other traffic.",
        trap:
          "Five hundred feet of visibility is not much on a rural highway at 65 mph - it is about five seconds of closing time.",
        excerptKey: "uturn-500-feet",
        sourceLabel: "Noncommercial Driver License Manual - Right of Way",
        sourceUrl: HB,
      },
      {
        id: "nd_s2_27",
        topic: "signals",
        question: "What does a steady yellow indication mean in North Dakota?",
        choices: [
          "Speed up to clear the intersection before the red",
          "Stop immediately, whatever your speed",
          "Warning or caution - the light is changing from green to red",
          "The signal is about to change from red to green",
        ],
        correctIndex: 2,
        explanation:
          "Yellow is a warning that green is becoming red. It is not permission to accelerate and it is not an instant stop instruction - it tells you the phase is ending so you can stop safely if you are able to.",
        context:
          "The manual gives the three main indications in the same compact style. Red means stop at the stop line or before the crosswalk and remain stopped until the light changes and the intersection is clear. Yellow means warning or caution. Green means go, but only if the intersection is clear.",
        trap:
          "\"Yellow means speed up\" is how intersection crashes happen, and the manual's own list of risky teen behaviors names running yellow lights.",
        excerptKey: "signal-yellow",
        sourceLabel: "Noncommercial Driver License Manual - Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "nd_s2_28",
        topic: "emergencies",
        question:
          "Your right wheels drop off the pavement onto a soft North Dakota shoulder. What does the manual tell you to do?",
        choices: [
          "Steer back onto the pavement immediately before you lose speed",
          "Brake hard to stop while you are still partly on the pavement",
          "Accelerate to lift the car back onto the pavement",
          "Grip the wheel, ease off the accelerator, and only turn gently back once you have slowed and checked behind",
        ],
        correctIndex: 3,
        explanation:
          "Do not swerve back. Grip the wheel, ease off the accelerator, and once you have slowed and are in complete control, look for traffic behind you, signal, and turn gently back onto the pavement.",
        context:
          "The manual warns specifically against braking hard here, because that is what puts the car into a skid with two wheels on different surfaces. The recovery is deliberately slow: the pavement edge can be several inches high, and hitting it at an angle at speed is what throws a car across the centerline.",
        trap:
          "The instinct to steer back at once is the dangerous one. The manual names it and tells you not to.",
        excerptKey: "offpavement-no-swerve",
        sourceLabel:
          "Noncommercial Driver License Manual - Running off the Pavement",
        sourceUrl: HB,
      },
      {
        id: "nd_s2_29",
        topic: "speed",
        question:
          "You are approaching a railway crossing where a grain elevator blocks your view of the track, and nothing is posted. What is the maximum speed?",
        choices: ["20 mph", "25 mph", "15 mph", "35 mph"],
        correctIndex: 0,
        explanation:
          "Twenty. North Dakota sets 20 mph for approaching any railway crossing where your view of the track is obstructed, unless something else is posted.",
        context:
          "The statute defines obstructed precisely: your view is deemed obstructed if, at any point in the last 200 feet of your approach, you do not have a clear and uninterrupted view of the crossing and of any traffic on the railway for 400 feet in each direction. A matching 20 mph rule applies to an intersection whose view is obstructed.",
        trap:
          "The limit is not tied to a sign. It applies because of what you cannot see, so there may be nothing at the roadside to remind you.",
        excerptKey: "speed-rr-obstructed",
        sourceLabel: "Noncommercial Driver License Manual - Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "nd_s2_30",
        topic: "parking",
        question:
          "You are pulling out of a parallel parking space. What does the manual list as the steps?",
        choices: [
          "Signal, pull out, then check the mirror once you are moving",
          "Look over your shoulder and in the mirror, signal before you move, yield to oncoming vehicles, and enter the nearest lane",
          "Check the mirror, then move out into whichever lane is clearest",
          "Sound the horn, then move out when traffic has slowed",
        ],
        correctIndex: 1,
        explanation:
          "Four steps in order: look to the rear over your shoulder as well as in the rear-view mirror, signal before you start to move, yield the right of way to oncoming vehicles, and enter traffic in the nearest lane, staying in it until it is safe to change.",
        context:
          "This is the step North Dakota road-test examiners are said to fail people on most often, and it is the signal that gets missed - drivers treat leaving a space as a maneuver rather than as entering traffic. The manual treats it as entering traffic, which is why the yield comes before the move.",
        trap:
          "Entering the far lane because it looks emptier is a second error in the same maneuver. You take the nearest lane and change later.",
        excerptKey: "park-leaving-space",
        sourceLabel:
          "Noncommercial Driver License Manual - Leaving a Parking Space",
        sourceUrl: HB,
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Real Test Difficulty",
    difficulty: "medium",
    description:
      "Questions pitched where the North Dakota knowledge test actually sits. Exact distances, the numbers the manual prints only once, and the situations where two rules meet and you have to know which one governs.",
    questions: [
      {
        id: "nd_s3_01",
        topic: "signs",
        question:
          "In a work zone, the diagonal stripes on a barricade slope downward to the left. What are they telling you?",
        choices: [
          "Keep to the left",
          "Keep to the right",
          "The road ahead is fully closed",
          "Merge into the left lane and stop",
        ],
        correctIndex: 0,
        explanation:
          "The stripes guide you toward the side traffic is meant to pass. Sloping down to the left means keep left; sloping down to the right means keep right.",
        context:
          "Barricades, vertical panels, drums, cones and tubes are the channelizing devices North Dakota uses to alert drivers to work-area conditions and steer them safely through. A large flashing or sequencing arrow panel does the same job at greater distance, day or night, and may also be run in caution mode.",
        trap:
          "The slope points the way to go, not the way the hazard lies. Reading it backwards puts you into the closure.",
        excerptKey: "wz-stripes",
        sourceLabel:
          "Noncommercial Driver License Manual - Channelizing Devices",
        sourceUrl: HB,
      },
      {
        id: "nd_s3_02",
        topic: "signs",
        question:
          "What is the minimum fee for failing to comply with a work zone speed limit in North Dakota when work is in progress and workers are present?",
        choices: ["$40", "$150", "$80", "$250"],
        correctIndex: 2,
        explanation:
          "Eighty dollars is the minimum fee, and the manual attaches two conditions to it: work has to be in progress and workers have to be present.",
        context:
          "Work zone signs are orange with a black legend and most are diamond shaped, though a few are rectangular and some are electronic message boards. The manual's safety notes give the reason for the enhanced penalty - 98 percent of work zone fatalities are travelers rather than workers, and most summer crashes there are related to excessive speed.",
        trap:
          "It is a minimum fee, not a fixed one, and it stacks on top of the ordinary speeding penalty and points.",
        excerptKey: "wz-fine",
        sourceLabel:
          "Noncommercial Driver License Manual - Construction and Maintenance Devices",
        sourceUrl: HB,
      },
      {
        id: "nd_s3_03",
        topic: "signals",
        question:
          "What does the North Dakota manual require before you may proceed on a green light?",
        choices: [
          "Nothing further - green is an unconditional permission",
          "A three-second pause at the stop line",
          "That you have signalled your intended direction",
          "That the intersection is clear",
        ],
        correctIndex: 3,
        explanation:
          "The manual's wording for green is go, but only if the intersection is clear. The condition is part of the instruction, not an extra courtesy.",
        context:
          "It matters most where a queue has backed up through an intersection. Entering on green and then stopping inside it blocks the cross street when the phase changes, which is what section 39-10-68 addresses as stopping when traffic is obstructed.",
        trap:
          "Green does not mean the way is clear, it means it is your turn if it is. The check is still yours to make.",
        excerptKey: "signal-green",
        sourceLabel: "Noncommercial Driver License Manual - Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "nd_s3_04",
        topic: "rules",
        question:
          "Approximately how far does the manual say it takes to stop from 55 mph on dry pavement?",
        choices: [
          "About 150 feet",
          "About 200 feet",
          "About 300 feet, or one city block",
          "About 450 feet",
        ],
        correctIndex: 2,
        explanation:
          "About 300 feet, which the manual translates into something you can picture - one city block. That figure is for dry pavement and includes the distance you cover while reacting.",
        context:
          "The manual gives two multipliers to work from there. Doubling your speed quadruples your braking distance, and doubling your vehicle weight doubles it. A fully loaded tractor-trailer needs more than 400 feet on dry pavement, which is why the space you cut out of the front of one matters.",
        trap:
          "Three hundred feet is dry pavement. On the ice North Dakota has for months at a time, the same stop is far longer.",
        excerptKey: "stopping-300-feet",
        sourceLabel:
          "Noncommercial Driver License Manual - Following and Stopping Distances",
        sourceUrl: HB,
      },
      {
        id: "nd_s3_05",
        topic: "rightOfWay",
        question:
          "You are entering a North Dakota roundabout and a vehicle is already circulating. What do you do?",
        choices: [
          "Enter alongside it, since roundabouts flow continuously",
          "Yield to it, and to pedestrians and bicyclists, before entering",
          "Stop and wait until the roundabout is completely empty",
          "Enter first if you are in the left lane",
        ],
        correctIndex: 1,
        explanation:
          "Reduce speed, yield to pedestrians and bicyclists, and yield to circulating traffic before you enter. Once you are in, you stay in your lane all the way round.",
        context:
          "Where the roundabout has more than one lane, the left lane turns left, the right lane turns right, and all lanes may go through unless signs or markings say otherwise. Trucks need every inch of the space, so the manual tells you not to pass them inside, and to keep the roundabout clear if an emergency vehicle is approaching.",
        trap:
          "Stopping inside the circle is the local complaint about roundabouts in Bismarck and Mandan. You yield on entry, and once you are circulating you keep moving.",
        excerptKey: "roundabout-yield-circulating",
        sourceLabel: "Noncommercial Driver License Manual - Roundabouts",
        sourceUrl: HB,
      },
      {
        id: "nd_s3_06",
        topic: "rightOfWay",
        question:
          "A pedestrian using a white cane has stepped off the curb at an intersection with no marked crosswalk. What must you do?",
        choices: [
          "Proceed, since there is no marked crosswalk",
          "Sound the horn to warn them and continue",
          "Yield or stop, and stop behind the crosswalk area to leave a clear path",
          "Wait only if they are already past the centerline",
        ],
        correctIndex: 2,
        explanation:
          "Pedestrians have the right of way in marked and unmarked crosswalks alike, and the manual adds a specific duty for a pedestrian who is blind or has greatly reduced vision: yield or stop for anyone who may have begun crossing, and stop behind the crosswalk so their path is unobstructed.",
        context:
          "The manual explains why stopping short matters. A traveller who is blind navigates by the sound and position of traffic, and a vehicle nosed into the crosswalk both blocks the route and confuses the cue. It also asks drivers and pedestrians not to distract a guide dog, which is working, and notes the person may deliberately wait for better conditions.",
        trap:
          "Unmarked crosswalks are still crosswalks. The absence of paint changes nothing about who has the right of way.",
        excerptKey: "row-white-cane",
        sourceLabel: "Noncommercial Driver License Manual - Right of Way",
        sourceUrl: HB,
      },
      {
        id: "nd_s3_07",
        topic: "speed",
        question:
          "You are driving on a rural paved two-lane North Dakota highway and there is no speed limit sign anywhere. What applies?",
        choices: ["65 mph", "55 mph", "70 mph", "60 mph"],
        correctIndex: 1,
        explanation:
          "Fifty-five. The 65 mph figure applies to rural paved two-lane highways only where they are posted for that speed. With nothing posted, a paved two-lane county or township highway falls back to 55.",
        context:
          "This is the one place North Dakota's list rewards reading the wording rather than the number. The 65 entry says \"if posted for that speed\"; the 55 entry covers gravel, dirt and loose surface roads and paved two-lane county and township highways where there is no speed limit posted.",
        trap:
          "Sixty-five is not a default anywhere in North Dakota. It only exists where a sign says so.",
        excerptKey: "speed-rural-two-lane",
        sourceLabel: "Noncommercial Driver License Manual - Speed Limits",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nd_s3_08",
        topic: "parking",
        question:
          "You are parking downhill against a curb in Minot. Which way do the front wheels go?",
        choices: [
          "Toward the curb",
          "Away from the curb",
          "Straight ahead, with the parking brake set",
          "Away from the curb, and set the brake",
        ],
        correctIndex: 0,
        explanation:
          "Downhill, the wheels turn toward the curb, so that if the car rolls the front wheel catches the curb instead of the traffic lane.",
        context:
          "The manual gives three cases. Downhill with a curb: turn the wheels toward the curb. Uphill with a curb: turn them away from the curb, so a rolling car backs into it. Uphill with no curb: turn the wheels toward the shoulder, so the car rolls off the road rather than onto it.",
        trap:
          "The uphill and downhill answers are opposites, which is exactly why they get swapped under exam pressure. Picture where the car would roll.",
        excerptKey: "park-hill-signs",
        sourceLabel: "Noncommercial Driver License Manual - Parking on a Hill",
        sourceUrl: HB,
      },
      {
        id: "nd_s3_09",
        topic: "safety",
        question:
          "At night you meet an oncoming vehicle whose driver has not dimmed their high beams. What does the manual tell you to do?",
        choices: [
          "Flash your own high beams until they dim",
          "Close your eyes briefly and hold your line",
          "Look to the right edge of the road to avoid being blinded",
          "Switch on your high beams so you can still see",
        ],
        correctIndex: 2,
        explanation:
          "Shift your gaze to the right edge of the road. You keep a reference for your lane position without staring into the glare, and the manual reminds you that your eyes need time to readjust after the vehicle passes.",
        context:
          "North Dakota's own dimming distances are 500 feet before meeting oncoming traffic and 300 feet when following another vehicle. Section 39-21-21 states both in the statute, and failing to dim is a one-point violation on the schedule.",
        trap:
          "Answering their high beams with your own blinds two drivers instead of one, and it does not make them dim.",
        excerptKey: "night-blinded",
        sourceLabel: "Noncommercial Driver License Manual - Night Driving",
        sourceUrl: HB,
      },
      {
        id: "nd_s3_10",
        topic: "safety",
        question:
          "At what distance must you dim your headlights when following another vehicle in North Dakota?",
        choices: ["Within 500 feet", "Within 200 feet", "Within 100 feet", "Within 300 feet"],
        correctIndex: 3,
        explanation:
          "Three hundred feet when following. The other figure, 500 feet, is for meeting oncoming traffic, and the two are easy to swap.",
        context:
          "The reason the following distance is shorter is that high beams reach a driver ahead through their mirrors rather than directly, so the blinding happens closer in. Both distances appear in the manual and in section 39-21-21.",
        trap:
          "Five hundred and three hundred are both real North Dakota numbers, which is what makes this question work. Meeting is 500; following is 300.",
        excerptKey: "night-dim-500-300",
        sourceLabel: "Noncommercial Driver License Manual - Night Driving",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nd_s3_11",
        topic: "impairment",
        question:
          "What does the manual say will speed up the removal of alcohol from your bloodstream?",
        choices: [
          "Strong coffee",
          "Nothing - time is the only thing that works",
          "A cold shower",
          "Vigorous exercise",
        ],
        correctIndex: 1,
        explanation:
          "Time, and nothing else. The manual names the three folk remedies specifically - coffee, cold showers, exercise - and says the process is relatively slow and will not be quickened by any of them.",
        context:
          "Three factors govern how high your alcohol concentration goes: the alcohol content of what you drank, the period over which you drank it, and your lean body weight. The manual notes that a 12-ounce beer, a 4-ounce glass of wine and a 1-ounce measure of spirits carry roughly the same alcohol, while drinks poured at a private party tend to be considerably stronger.",
        trap:
          "Coffee makes an impaired driver alert and awake. It does nothing to the alcohol concentration a test will measure.",
        excerptKey: "alcohol-time-only",
        sourceLabel: "Noncommercial Driver License Manual - Alcohol",
        sourceUrl: HB,
      },
      {
        id: "nd_s3_12",
        topic: "impairment",
        question:
          "What is the mandatory fine for a first DUI conviction in North Dakota where the alcohol concentration is .16 percent or greater?",
        choices: [
          "At least $500",
          "At least $2,000",
          "At least $1,000, plus ten days in jail",
          "At least $750, plus two days imprisonment",
        ],
        correctIndex: 3,
        explanation:
          "At least $750 and two days imprisonment, though the imprisonment may be converted to community service. A first conviction below .16 carries a $500 fine.",
        context:
          "The ladder continues from there: a second conviction within seven years is $1,000 and 10 days in jail plus at least 12 months in the 24/7 Sobriety Program, a third is $2,000 and 120 days, and a fourth or subsequent is $2,000 and a year and a day. Every convicted offender also has a mandatory alcohol addiction evaluation.",
        trap:
          "These are minimums. The manual's own line is that they are just the minimum penalties and it could be worse.",
        excerptKey: "dui-first-conviction",
        sourceLabel:
          "Noncommercial Driver License Manual - Driving While Under the Influence",
        sourceUrl: HB,
      },
      {
        id: "nd_s3_13",
        topic: "sharing",
        question:
          "A tractor-trailer ahead of you swings out to the left as it approaches an intersection. What is most likely happening?",
        choices: [
          "The driver is preparing to make a right turn",
          "The driver is changing lanes to the left",
          "The driver is pulling over to stop",
          "The driver is avoiding an obstacle in the road",
        ],
        correctIndex: 0,
        explanation:
          "Swinging left is often the first step in a truck's right turn. Because the rear wheels of any turning vehicle track a shorter path than the front, a long vehicle has to start wide to keep its trailer off the corner.",
        context:
          "The manual's advice is to watch the turn signals before you try to pass, and if the truck appears to be starting a left turn, wait a moment and check which way the driver is actually signalling before passing on the right. Moving up the right-hand side of a truck that is about to turn right is one of the ways cars get crushed against a curb.",
        trap:
          "The gap that opens on the truck's right as it swings left looks like an invitation. It is the space the trailer is about to occupy.",
        excerptKey: "truck-right-turn-swing",
        sourceLabel:
          "Noncommercial Driver License Manual - Sharing the Road with Trucks",
        sourceUrl: HB,
      },
      {
        id: "nd_s3_14",
        topic: "sharing",
        question:
          "A motorcycle ahead of you has its right turn signal flashing but has not slowed down. What does the manual advise?",
        choices: [
          "Pass on the left immediately, since the rider is turning off",
          "Wait to be sure the motorcycle is going to turn before you proceed",
          "Sound your horn to remind the rider to turn",
          "Move into the right lane behind them and prepare to follow",
        ],
        correctIndex: 1,
        explanation:
          "Wait until you can see the motorcycle actually turning. Motorcycle signals usually do not cancel themselves, and riders sometimes forget to switch them off after an earlier turn.",
        context:
          "The manual builds a general habit around this: check mirrors and blind spots for motorcycles before entering or leaving a lane and at intersections, because a bike's small profile hides it in a quick glance and makes its speed and distance hard to judge.",
        trap:
          "A flashing signal is the weakest evidence a motorcycle gives you. Its road position and speed tell you far more.",
        excerptKey: "moto-signal-not-cancelling",
        sourceLabel:
          "Noncommercial Driver License Manual - Sharing the Road with Motorcycles",
        sourceUrl: HB,
      },
      {
        id: "nd_s3_15",
        topic: "emergencies",
        question:
          "You come upon a flooded stretch of North Dakota road at night. What does the manual tell you to do?",
        choices: [
          "Drive through slowly in a low gear",
          "Follow another vehicle through so you can see the depth",
          "Turn around and find another route",
          "Cross only if the water is under six inches deep",
        ],
        correctIndex: 2,
        explanation:
          "Turn around and find another route. The manual is unconditional about it - even if the water appears shallow enough to cross, do not attempt to cross a flooded road.",
        context:
          "Two numbers explain why. Six inches of water reaches the bottom of most passenger cars and can cause loss of control or stalling, and two feet of moving water can carry away most vehicles including SUVs and pickups. Water also hides dips, and floodwater can wash out the road surface underneath.",
        trap:
          "Judging depth from the driver's seat at night is guesswork, and what has been washed away under the surface is invisible at any hour.",
        excerptKey: "flood-never-cross",
        sourceLabel: "Noncommercial Driver License Manual - Flooding",
        sourceUrl: HB,
      },
      {
        id: "nd_s3_16",
        topic: "emergencies",
        question:
          "Your accelerator pedal sticks while you are driving. What does the manual list first?",
        choices: [
          "Turn the ignition to the lock position",
          "Depress the clutch or shift into neutral",
          "Pull the parking brake",
          "Steer for the ditch immediately",
        ],
        correctIndex: 1,
        explanation:
          "Break the connection between the engine and the wheels first: depress the clutch or shift into neutral. You may also switch the engine off, though the manual warns that this costs you power steering and power brakes.",
        context:
          "The manual is emphatic about one thing you must never do. Turning the ignition to the lock position while the vehicle is still moving locks the steering as soon as you try to turn the wheel. Once you have the car under control you steer to the side of the road.",
        trap:
          "Switching off sounds decisive and is the second-best option here, because it takes the assistance out of your steering and brakes at the worst moment.",
        excerptKey: "failure-accelerator",
        sourceLabel:
          "Noncommercial Driver License Manual - Equipment Failure",
        sourceUrl: HB,
      },
      {
        id: "nd_s3_17",
        topic: "licensing",
        question:
          "A 15-year-old passes the North Dakota road test. What are they issued?",
        choices: [
          "A full unrestricted Class D licence",
          "An extension of the instruction permit",
          "A restricted Class D operator's licence",
          "A Class D licence valid only in daylight",
        ],
        correctIndex: 2,
        explanation:
          "A 15-year-old gets a restricted Class D operator's licence. The restriction is on whose vehicle they may drive: their parent's, guardian's, grandparent's, sibling's, aunt's or uncle's.",
        context:
          "There is a second restriction with a clock on it. At 15, with a restricted licence, the holder may not drive between the later of sunset or 9:00 pm and 5:00 am unless a parent, guardian or someone at least 18 is with them. The exceptions are driving directly to or from work, an official school activity, or a religious activity. At 16 the restricted licence becomes unrestricted.",
        trap:
          "The curfew starts at the LATER of sunset or 9:00 pm. In a North Dakota December sunset is before 5:00 pm, and the curfew still does not begin until 9:00.",
        excerptKey: "minor-restricted-15",
        sourceLabel:
          "Noncommercial Driver License Manual - Minors Driver License",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nd_s3_18",
        topic: "licensing",
        question:
          "You move to North Dakota holding a valid Class D licence from another state. How long may you drive on it?",
        choices: [
          "30 days after becoming a resident",
          "60 days after becoming a resident",
          "90 days after becoming a resident",
          "Until it expires",
        ],
        correctIndex: 1,
        explanation:
          "Sixty days. After that you have to take the tests needed for a North Dakota operator's licence. Commercial operators get 30 days rather than 60.",
        context:
          "Residency itself is defined separately: anyone other than a nonresident student, a tourist or a nonresident member of the Armed Forces who has lived in the state for 90 consecutive days is a resident for driver licensing purposes. Those two clocks run one after the other, not together.",
        trap:
          "The 90 days is how you become a resident. The 60 days is how long you may drive once you are one.",
        excerptKey: "new-resident-60-days",
        sourceLabel: "Noncommercial Driver License Manual - Your Operator's License",
        sourceUrl: HB,
      },
      {
        id: "nd_s3_19",
        topic: "rules",
        question:
          "You are entering a North Dakota freeway from an entrance ramp. Who yields?",
        choices: [
          "Traffic on the main roadway yields to entering vehicles",
          "Whoever reaches the merge point second",
          "Neither, provided both keep a steady speed",
          "You do - entering traffic yields to vehicles on the main roadway",
        ],
        correctIndex: 3,
        explanation:
          "Unless posted signs say otherwise, a vehicle entering a freeway from an entrance ramp must yield to vehicles already on the main roadway. The ramp exists so you can match their speed, not so they can make room for you.",
        context:
          "The manual tells you to avoid stopping on an entrance ramp and to stop only if there is genuinely no gap in the traffic flow. On the Interstate itself: use your mirrors, signal and check before changing lanes, do not cut back into the right lane too quickly after passing, and keep right if you are moving slowly.",
        trap:
          "Arriving at speed does not create a right of way. The duty sits with whoever is entering, however fast they are going.",
        excerptKey: "freeway-yield",
        sourceLabel: "Noncommercial Driver License Manual - Interchanges",
        sourceUrl: HB,
      },
      {
        id: "nd_s3_20",
        topic: "rules",
        question:
          "You have driven past your Interstate exit in North Dakota. What does the manual tell you to do?",
        choices: [
          "Back up on the shoulder to the ramp",
          "Use the next median crossover to turn around",
          "Go on to the next interchange",
          "Stop on the shoulder and wait for a gap to reverse",
        ],
        correctIndex: 2,
        explanation:
          "Carry on to the next interchange. Never back up on the Interstate, and the median crossovers are for authorized vehicles only, which means emergency and maintenance vehicles.",
        context:
          "The same no-backing rule applies on the ramps themselves. If you leave at the wrong interchange you follow it out and return to the highway by the on ramp. Exit ramps are for leaving the highway - you never stop or back up on one.",
        trap:
          "Median crossovers look like they exist for this. They exist for snowplows and ambulances, and using one is an offence.",
        excerptKey: "interstate-no-backing",
        sourceLabel: "Noncommercial Driver License Manual - Interchanges",
        sourceUrl: HB,
      },
      {
        id: "nd_s3_21",
        topic: "signs",
        question:
          "A round yellow sign with black lettering appears beside a rural North Dakota road. What is it?",
        choices: [
          "A school zone warning",
          "A railroad advance warning sign",
          "A no-passing zone marker",
          "A roundabout warning",
        ],
        correctIndex: 1,
        explanation:
          "The circle is reserved for the railroad advance warning sign. It tells you a railroad crossing is coming and that you should slow down enough to stop safely if a train is on its way.",
        context:
          "Shape does most of the work in North Dakota's sign system: octagon for stop, downward triangle for yield, circle for railroad advance warning, pennant on the left for no passing, diamond for general warnings, and rectangle for guide and regulatory information.",
        trap:
          "A crossbuck is the X-shaped sign at the crossing itself. The circle is the warning you meet before you get there.",
        excerptKey: "sign-rr-advance",
        sourceLabel: "Noncommercial Driver License Manual - Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "nd_s3_22",
        topic: "signs",
        question:
          "You are approaching a railroad crossing behind a school bus, which stops. How far from the tracks must such vehicles stop?",
        choices: [
          "Within 50 feet and not less than 15 feet from the tracks",
          "Within 30 feet and not less than 10 feet from the tracks",
          "Exactly 25 feet from the nearest rail",
          "Anywhere before the crossbuck",
        ],
        correctIndex: 0,
        explanation:
          "School buses, vehicles carrying explosives or flammable liquids, and buses carrying passengers must stop within 50 feet and not less than 15 feet from the tracks. The manual adds the instruction for everyone behind them - do not pass them while they are stopped at the crossing.",
        context:
          "For ordinary drivers the figure to know is 15 feet: when a train is crossing you stop at least 15 feet before the crossing. Section 39-10-49 uses the same 15 feet as the no-parking distance from the nearest rail. Never stop or park on the tracks for any reason.",
        trap:
          "The bus is not stopping for a train it can see. It stops at every crossing, every time, and the sign on its back says so.",
        excerptKey: "rr-buses-must-stop",
        sourceLabel:
          "Noncommercial Driver License Manual - Railroad Crossings",
        sourceUrl: HB,
      },
      {
        id: "nd_s3_23",
        topic: "emergencies",
        question:
          "Your vehicle stalls on a railroad crossing and a train is approaching. What does the manual tell you to do?",
        choices: [
          "Stay in the vehicle and brace for impact",
          "Try to restart the engine until the last moment",
          "Get out and run away from the tracks at 45 degrees, toward the oncoming train",
          "Get out and run away from the tracks in the direction the train is travelling",
        ],
        correctIndex: 2,
        explanation:
          "Leave the vehicle and walk toward the oncoming train, away from the tracks at about a 45-degree angle. The reason is counter-intuitive and the manual explains it: debris from the collision sprays out in the direction the train is moving, so running that way keeps you in the debris field.",
        context:
          "Once you are clear you call the Emergency Notification System number posted on the crossing post or the control box near the tracks, and then 911. The ENS numbers for the railroads operating in North Dakota are printed in the manual.",
        trap:
          "Running with the train feels like running away from it. It puts you exactly where your own car is about to be thrown.",
        excerptKey: "rr-stuck-45-degrees",
        sourceLabel:
          "Noncommercial Driver License Manual - Railroad Crossings",
        sourceUrl: HB,
      },
      {
        id: "nd_s3_24",
        topic: "parking",
        question:
          "You have to stop on a North Dakota highway at night because of a breakdown. What must your vehicle display?",
        choices: [
          "Hazard lights only",
          "At least one white or amber lamp in front and a red light at the rear, visible for 1,000 feet",
          "A reflective triangle 100 feet behind the vehicle",
          "Headlights on full beam",
        ],
        correctIndex: 1,
        explanation:
          "Between half an hour after sunset and half an hour before sunrise, a vehicle parked on a public highway must show at least one white or amber lamp at the front and a red light at the rear, both visible for 1,000 feet.",
        context:
          "The manual also tells you to park with all four wheels off the travelled pavement where you can, and to raise the hood as a sign of difficulty if you stop on the shoulder of an Interstate. The 1,000-foot visibility figure appears twice more, for trailer taillights and as the weather threshold for headlight use.",
        trap:
          "Hazard lights are a good idea and are not what the rule specifies. The requirement is a white or amber lamp in front and a red light behind.",
        excerptKey: "park-lamps-at-night",
        sourceLabel:
          "Noncommercial Driver License Manual - Emergency Parking",
        sourceUrl: HB,
      },
      {
        id: "nd_s3_25",
        topic: "safety",
        question:
          "How often does the manual say you should check your mirrors while driving?",
        choices: [
          "Every 6 to 8 seconds",
          "Every 15 seconds",
          "Every 30 seconds",
          "Only before a lane change or turn",
        ],
        correctIndex: 0,
        explanation:
          "Every 6 to 8 seconds, in the manual's own coaching section. The point is to keep a running picture of what is behind you rather than to build one from scratch at the moment you need it.",
        context:
          "That habit sits alongside three other numbers in the same list: keep at least a 3 to 4 second space in traffic flow, avoid the No-Zone that extends about 15 feet on all sides of a truck or bus, and remember that doubling your speed quadruples your braking distance.",
        trap:
          "Checking only when you are about to move is too late. By then the decision is already being made on stale information.",
        excerptKey: "practice-mirrors-6-8",
        sourceLabel:
          "Noncommercial Driver License Manual - Do These Each Time You Practice",
        sourceUrl: HB,
      },
      {
        id: "nd_s3_26",
        topic: "impairment",
        question:
          "What does North Dakota's minor in possession and consumption law say about people under 21?",
        choices: [
          "They may drink, provided they are under .08 before driving",
          "They may consume alcohol but not purchase it",
          "They may possess alcohol but not consume it",
          "They may not purchase, consume or possess alcoholic beverages at all",
        ],
        correctIndex: 3,
        explanation:
          "The minor in possession and consumption law bars anyone under 21 from purchasing, consuming or possessing alcoholic beverages at all. Separately, .02 percent is the concentration at which an under-21 driver is legally under the influence.",
        context:
          "The consequences of an alcohol or drug offence reach further for a minor. Section 39-06-01.1 lets the director cancel a minor's operator's licence outright where the offence created an imminent risk to another person and a lesser penalty would not prevent future risk, and a cancelled minor is treated as never having held a licence at all.",
        trap:
          "The .02 threshold is not an allowance. Possession and consumption are already unlawful before you get anywhere near it.",
        excerptKey: "minor-possession",
        sourceLabel:
          "Noncommercial Driver License Manual - Minor in Possession/Consumption Law",
        sourceUrl: HB,
      },
      {
        id: "nd_s3_27",
        topic: "sharing",
        question:
          "A car is stranded on the shoulder of a North Dakota Interstate outside city limits with its hazard lights on. What does the move over rule require?",
        choices: [
          "Nothing - the move over law covers emergency vehicles only",
          "Stop and offer assistance",
          "Sound your horn as you pass",
          "Move safely to the lane not adjacent to it, or slow and pass with caution if you cannot",
        ],
        correctIndex: 3,
        explanation:
          "North Dakota's move over duty extends to ordinary stranded vehicles showing hazard lights, not just to emergency vehicles. You yield the right of way by moving to the lane away from them; if the only lane you can safely reach is the adjacent one, you proceed with caution and reduce speed.",
        context:
          "The rule applies on the Interstate system or a multilane highway outside city limits. Section 39-10-26.3 states it, and 39-10-26 applies the same lane-change duty to emergency vehicles and to NDDOT maintenance vehicles displaying amber or white lights.",
        trap:
          "Most states limit move over to emergency vehicles and tow trucks. North Dakota's version reaches any vehicle with its hazards on in those locations.",
        excerptKey: "moveover-stranded",
        sourceLabel: "Noncommercial Driver License Manual - Move Over",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "nd_s3_28",
        topic: "rules",
        question:
          "You are turning left from a two-way road onto a four-lane highway in North Dakota. Which lane do you enter?",
        choices: [
          "The right-hand lane, directly",
          "Whichever lane is clear at the moment",
          "The passing lane, then move right when traffic permits",
          "The shoulder, until you have picked up speed",
        ],
        correctIndex: 2,
        explanation:
          "You enter the passing lane - the left-hand lane of the four-lane highway - and then move right out of it as soon as traffic permits. Crossing straight to the right lane means cutting across a lane you cannot fully see into while you are still turning.",
        context:
          "The manual gives a turn diagram for each combination. From a two-way road onto a two-way road, start as close to the centerline as possible. From a two-way onto a one-way, approach with your left wheels near the centerline, turn before reaching the center of the intersection, and enter the left lane. Right turns are always kept close to the right curb.",
        trap:
          "Aiming straight for the right lane feels tidier and takes you through the path of anyone already in the passing lane.",
        excerptKey: "turn-left-onto-four-lane",
        sourceLabel: "Noncommercial Driver License Manual - Turning",
        sourceUrl: HB,
      },
      {
        id: "nd_s3_29",
        topic: "licensing",
        question:
          "You change address within North Dakota. How long do you have to notify the Driver License Division?",
        choices: ["10 days", "30 days", "60 days", "There is no deadline"],
        correctIndex: 0,
        explanation:
          "Ten days, and the same deadline applies to a change of name. You have to provide documentary evidence of the change.",
        context:
          "Other licensing clocks worth keeping apart: you may renew a licence 10 months before it expires without losing time from the old one, a vision certificate presented instead of a test must be less than six months old, and NDDOT requires you to retest if your licence has been expired more than one year.",
        trap:
          "The 10 days and the 10 months are different rules with the same digits. One is address change, the other is renewal.",
        excerptKey: "change-address-10-days",
        sourceLabel:
          "Noncommercial Driver License Manual - Change of Name or Address",
        sourceUrl: HB,
      },
      {
        id: "nd_s3_30",
        topic: "emergencies",
        question:
          "What is the fine for throwing litter onto a public highway in North Dakota?",
        choices: ["$100", "$250", "$1,000", "$500"],
        correctIndex: 3,
        explanation:
          "Five hundred dollars. The manual gives it as a flat figure for throwing or depositing any litter on any public highway.",
        context:
          "It sits among the other flat penalties the manual prints, which are worth learning together: $250 for entering an officially closed road, $100 for texting while driving, $80 minimum for a work zone speed violation with workers present, $25 and one point for a child restraint violation, and $150 rising to $300 for driving uninsured.",
        trap:
          "Five hundred is a large number for litter and that is why it is memorable. Do not confuse it with the $250 closed-road fine.",
        excerptKey: "litter-500",
        sourceLabel: "Noncommercial Driver License Manual - Littering",
        sourceUrl: HB,
      },
      {
        id: "nd_s3_31",
        topic: "speed",
        question:
          "How many points does North Dakota assign for driving 16 to 20 mph over the limit in a zone posted at 55 mph?",
        choices: ["1 point", "3 points", "5 points", "9 points"],
        correctIndex: 1,
        explanation:
          "Three points, on the schedule for speed zones of 65 mph or less. The ladder runs 0 points up to 10 mph over, 1 point for 11 to 15, 3 for 16 to 20, 5 for 21 to 25, 9 for 26 to 35, 12 for 36 to 45, and 15 beyond that.",
        context:
          "Above 65 mph the ladder is stricter at the low end: 1 point starts at 6 mph over rather than 11, and 3 points at 11 rather than 16. Twelve points suspends a licence for seven days, and every point beyond eleven adds another seven days.",
        trap:
          "Being under the 12-point suspension threshold is not safety for a young driver. Under 18, cancellation comes at six.",
        excerptKey: "web-speed-points-under-70",
        sourceLabel:
          "NDDOT - Driver License Points Reduction and Points Schedule",
        sourceUrl: POINTS,
      },
      {
        id: "nd_s3_32",
        topic: "rightOfWay",
        question:
          "The manual says emergency vehicles always have the right of way. When a police car is parked at a crash scene with its lights flashing, what is the specific duty?",
        choices: [
          "Slow to 20 mph and continue in your lane",
          "Drive to the right-hand side of the roadway and stop, then pass at your own risk when the roadway is clear",
          "Stop where you are until an officer waves you past",
          "Change lanes only if there are three or more lanes",
        ],
        correctIndex: 1,
        explanation:
          "You move to the right-hand side of the roadway and stop. Only after stopping may you pass at your own risk when the roadway is clear, and if an officer is directing traffic at the scene their instructions come first.",
        context:
          "That is the rule for a crash scene. On the Interstate or a multilane highway there is a second, different duty: where an emergency, law enforcement or NDDOT maintenance vehicle is parked with emergency or work lights flashing, you move over to the far lane and proceed with due caution.",
        trap:
          "The two situations have different answers. A crash scene on an ordinary road means stop; the Interstate version means change lanes.",
        excerptKey: "emergency-scene-stop",
        sourceLabel: "Noncommercial Driver License Manual - Right of Way",
        sourceUrl: HB,
      },
      {
        id: "nd_s3_33",
        topic: "safety",
        question:
          "Which of these does the manual list as a danger sign of fatigue?",
        choices: [
          "Gripping the steering wheel more tightly than usual",
          "Being unable to recall the last few miles driven",
          "Feeling unusually alert after a long stretch",
          "Preferring the radio turned down",
        ],
        correctIndex: 1,
        explanation:
          "Not being able to recall the last few miles is on the manual's list, alongside difficulty focusing or keeping your eyes open, feeling detached from the driving, drifting across the centerline or onto the shoulder, missing signs or lights, tailgating, forgetting to dim your headlights, excessive yawning and nodding off.",
        context:
          "The manual's remedy is short and admits no substitutes: if you are sleepy, the only safe cure is to get some sleep. It also tells you to stop and rest if you are tired rather than pressing on to the next town.",
        trap:
          "Most of these signs are things you notice after the fact. That is the danger - by the time you register the missing miles, you have already driven them impaired.",
        excerptKey: "fatigue-danger-signs",
        sourceLabel: "Noncommercial Driver License Manual - Fatigue",
        sourceUrl: HB,
      },
      {
        id: "nd_s3_34",
        topic: "sharing",
        question:
          "What must a bicycle have at night on a North Dakota road?",
        choices: [
          "A headlight visible for 500 feet and a red rear reflector",
          "A headlight visible for 200 feet only",
          "A red taillight and nothing else",
          "Reflective clothing, but no lights",
        ],
        correctIndex: 0,
        explanation:
          "A headlight visible from 500 feet and a red reflector on the rear. If the bicycle also has a taillight, that must be visible for 500 feet to the rear.",
        context:
          "The manual's bicycle rules cover more than lights: obey all traffic laws, ride no more than two abreast with single file preferred, keep to the right, give pedestrians the right of way, use hand signals, carry no more people than the bicycle was designed for, and fit a brake. A helmet is required under 18 on a motorized bicycle and recommended for everyone on any bicycle.",
        trap:
          "A rear reflector is required; a rear light is optional. Reversing that is the common error.",
        excerptKey: "bike-headlight-500",
        sourceLabel:
          "Noncommercial Driver License Manual - Bicycles and Motorized Bicycles",
        sourceUrl: HB,
      },
      {
        id: "nd_s3_35",
        topic: "licensing",
        question:
          "What does North Dakota require of a road-test vehicle fitted with a self-parking feature?",
        choices: [
          "Nothing - self-parking is allowed on the test",
          "The applicant must test in a different vehicle or deactivate the feature",
          "The examiner performs the parallel park",
          "The parallel parking element is waived",
        ],
        correctIndex: 1,
        explanation:
          "Self-parking vehicles are not allowed on the road test. You either bring a different vehicle or deactivate the feature, because the examiner is scoring your parallel parking, not the car's.",
        context:
          "The road test checklist is longer than most people expect. You furnish your own vehicle, it has to pass an equipment inspection covering brakes, high and low beams, brake lights and taillights, turn signals, a leak-free exhaust with a muffler, working doors, a horn audible for 200 feet, mirrors showing 200 feet behind, seat belts, intact glass and wipers. Passengers, pets and electronic devices stay out of the car.",
        trap:
          "Bringing a modern car with driver aids is not an advantage on a North Dakota road test. Parallel parking is one of the named things you must demonstrate.",
        excerptKey: "self-parking-not-allowed",
        sourceLabel:
          "Noncommercial Driver License Manual - Road Test Items",
        sourceUrl: HB,
      },
    ],
  },
];
