// Saskatchewan practice sets 1 to 3.
//
// Every fact below was checked against three sources and nothing else: the
// Saskatchewan Driver's Handbook published by SGI (the cover carries SGI's own
// edition label, 2026-27, and page i states it is accurate as of September
// 2025 - this is the book both written exams are set from), The Traffic Safety
// Act, c T-18.1, consolidated to 2024, for the rules the handbook states only
// as a caption or not at all, and SGI's New Class 5 drivers page for the test
// format, which the handbook never gives.
//
// Six things are worth naming up front, because a learner arriving from
// Alberta, Manitoba, Ontario or a US state will get them wrong.
//
// 1. THE DEFAULT SPEED IS 80. Section 199(1) of the Act sets 80 km/h wherever
//    no sign is erected, full stop. There is no built-in urban number the way
//    Manitoba has 50 and Alberta has 50. Saskatchewan towns post their limit
//    at the entrance sign and it then applies "to all locations within
//    community boundaries, unless otherwise posted". The same 80 is also the
//    default on a gravel grid road (page 141).
// 2. SIXTY IS THE OTHER NUMBER. Highway workers and equipment, stopped
//    emergency vehicles, tow trucks assisting, and service or escort vehicles
//    all mean 60 km/h when you pass them, and the ONLY escape is being on a
//    divided highway travelling on the opposite roadway.
// 3. THE ROUNDABOUT SENTENCE IS BACKWARDS-LOOKING. SGI writes it as "the
//    vehicle on the right must yield to the vehicle on the left", which is the
//    reverse of Saskatchewan's ordinary uncontrolled-intersection rule. Both
//    are true: entering traffic is on the right of circulating traffic. Every
//    roundabout item here is keyed on the operative rule - entering yields to
//    traffic already in the roundabout - never on the sentence alone.
// 4. THE TEST IS TWO EXAMS. A basic knowledge exam and a separate sign exam,
//    80% on each, $25 each. That is why the signs load in every set here is
//    heavier than in the sibling banks: the real testing is roughly half signs.
// 5. FOLLOWING DISTANCE IS THREE SECONDS, and Saskatchewan then stacks
//    conditions on top: more than three behind a truck that blocks your view,
//    five or six when you are being tailgated, five during the first
//    snowfalls, longer than three on any slippery surface.
// 6. CHAPTERS 7 AND 8 ARE TESTED. Saskatchewan learners report that the
//    written exam asked about how long alcohol takes to leave the body, about
//    the drinks-plus-drug equivalence chart, and about the penalties
//    themselves. Set 5 is built accordingly.
//
// Two conflicts between official sources shaped what is NOT asked here.
//
//  - SUPERVISING DRIVER EXPERIENCE. The handbook (page 20) requires the
//    supervisor to "have held a valid licence for a minimum of 365 days in the
//    preceding three years"; SGI's New Class 5 drivers page says "have held a
//    valid licence for at least 12 months in the last 3 years". They agree in
//    substance and differ in wording, so no item is keyed on 365 versus 12
//    months. The research note records both.
//  - THE EXAM'S LENGTH. SGI publishes the 80% pass mark and no question count
//    anywhere. Nothing here depends on a total.
//
// Questions are original. No handbook sentence is reproduced as a question, no
// item is lifted from a practice-test site, and the explanation, context and
// trap notes are written from scratch. Where a number appears (80 km/h, five
// metres, 320 metres, nine months), it is the number SGI or the Act publishes.

import type { DrivingTestSet } from "../types";

const HB = "https://sgi.sk.ca/documents/37148/138037/drivers_handbook.pdf";
/** Printed page number to a PDF page anchor. The book's page 1 is PDF page 11. */
const hb = (page: number) => `${HB}#page=${page + 10}`;
const ACT =
  "https://publications.saskatchewan.ca/api/v1/products/12208/formats/18166/download";
const act = (page: number) => `${ACT}#page=${page}`;

export const saskatchewanSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Saskatchewan Basics",
    difficulty: "starter",
    description:
      "Thirty warm-up questions on the rules you meet in your first hour on a Saskatchewan road: what the shapes mean, who goes first, and the handful of numbers SGI expects you to know without stopping to think.",
    questions: [
      {
        id: "sk_s1_01",
        topic: "signs",
        question:
          "Saskatchewan reserves one sign shape for one message. What is an eight-sided red sign with white lettering telling you to do?",
        choices: [
          "Slow down and carry on if nothing is coming",
          "Come to a full stop and make sure the way is clear before you go",
          "Give way only to traffic already in the intersection",
          "Watch for a hazard somewhere ahead",
        ],
        correctIndex: 1,
        explanation:
          "The red octagon is used for stop signs and for nothing else. SGI asks for a full stop, and then for a separate judgment that the way is clear before you move off again.",
        context:
          "SGI teaches six basic shapes so you can identify a sign in fog, snow or road spray before you can read a word on it. Octagon is stop, a triangle with a red border is yield, a diamond warns of a hazard, a white rectangle or square is regulatory, a crossbuck marks a railway, and a fluorescent yellow-green pentagon marks a school zone.",
        trap:
          "Slowing and carrying on describes a yield sign. An empty cross street does not turn a stop sign into a yield sign.",
        excerptKey: "sign-six-shapes",
        sourceLabel: "Saskatchewan Driver's Handbook - Six basic sign shapes",
        sourceUrl: hb(76),
      },
      {
        id: "sk_s1_02",
        topic: "speed",
        question:
          "You are driving a Saskatchewan road and there is no speed limit sign anywhere. What is the limit?",
        choices: ["50 km/h", "60 km/h", "80 km/h", "90 km/h"],
        correctIndex: 2,
        explanation:
          "Where no sign has been erected, Saskatchewan's limit is 80 km/h. That single default covers provincial highways and gravel grid roads alike.",
        context:
          "Section 199 of The Traffic Safety Act sets the unsigned limit at 80 km/h and then says you must obey whatever a posted sign shows instead. Most towns and cities post their limit on a sign at the entrance, and that number then applies everywhere inside the community boundary unless another sign changes it.",
        trap:
          "Provinces to the east and west build a 50 km/h city default into their statutes. Saskatchewan does not, so an unsigned street is not automatically a 50 zone.",
        excerptKey: "default-speed-80",
        sourceLabel: "Saskatchewan Driver's Handbook - Speeding, stunting and racing",
        sourceUrl: hb(29),
        commonlyMissed: true,
      },
      {
        id: "sk_s1_03",
        topic: "signs",
        question: "What does a triangular sign with a red border on a white background require?",
        choices: [
          "Reduce speed, give right of way, and stop if you have to",
          "Stop completely every time, the same as a stop sign",
          "Warn other drivers that you are merging",
          "Nothing binding, since it is only a warning shape",
        ],
        correctIndex: 0,
        explanation:
          "That is the yield sign. SGI says you must reduce speed on the approach, give right of way, and stop if any other traffic is in or closely approaching the intersection.",
        context:
          "A yield is a duty, not a suggestion. It sits where one road or lane joins another, which is exactly where a driver who arrives too fast runs out of options. Arrive slowly enough that stopping is still available to you.",
        trap:
          "Treating a yield as a rolling merge is the single most common way drivers meet the vehicle that had right of way.",
        excerptKey: "sign-yield",
        sourceLabel: "Saskatchewan Driver's Handbook - Six basic sign shapes",
        sourceUrl: hb(76),
      },
      {
        id: "sk_s1_04",
        topic: "signals",
        question:
          "The light ahead turns amber while you are still well back from the intersection. What does Saskatchewan require?",
        choices: [
          "Speed up so you clear the intersection before the red",
          "Carry on at the same speed, since amber means proceed",
          "Stop before entering the crosswalk",
          "Stop only if a vehicle is waiting on the cross street",
        ],
        correctIndex: 2,
        explanation:
          "Amber means stop before you enter the crosswalk. The only exception SGI allows is when you have already entered the intersection or cannot stop safely, and then you proceed with caution.",
        context:
          "The Traffic Safety Act puts it the same way: on an amber the driver shall stop at the crosswalk, but may drive cautiously through if the vehicle cannot be brought to a stop with safety. Whether you were already committed is the whole test.",
        trap:
          "Accelerating to beat the light is exactly what the cross traffic on their fresh green is told to watch for.",
        excerptKey: "signal-amber",
        sourceLabel: "Saskatchewan Driver's Handbook - Traffic signals",
        sourceUrl: hb(91),
      },
      {
        id: "sk_s1_05",
        topic: "rightOfWay",
        question:
          "Two vehicles reach an intersection with no signs, no lights and no officer at about the same moment. The other vehicle is on your right. Who goes first?",
        choices: [
          "You, if you are going straight through",
          "Whoever signals first",
          "Whoever is on the wider road",
          "The vehicle on your right",
        ],
        correctIndex: 3,
        explanation:
          "At an uncontrolled intersection the driver on the left yields to the driver on the right. Going straight through earns you nothing and neither does signalling early.",
        context:
          "SGI adds that the same rule governs T-intersections, which is where people assume the through road automatically wins. Section 219(1) of the Act carries the identical rule, and subsection (2) switches it off wherever there is a stop sign, traffic lights or an officer directing traffic.",
        trap:
          "The rule only settles a genuine tie. If one vehicle clearly arrived first, that vehicle goes, and arriving first is not decided by who is more impatient.",
        excerptKey: "uncontrolled-intersection",
        sourceLabel: "Saskatchewan Driver's Handbook - Right of way",
        sourceUrl: hb(59),
        commonlyMissed: true,
      },
      {
        id: "sk_s1_06",
        topic: "signs",
        question: "A yellow diamond-shaped sign with a black symbol appears ahead. What is it doing?",
        choices: [
          "Setting a speed limit you must obey",
          "Warning of a dangerous or unusual condition ahead, such as a curve or a dip",
          "Telling you which highway you are on",
          "Marking a construction zone",
        ],
        correctIndex: 1,
        explanation:
          "The diamond is the warning shape. It flags something on or near the road that could catch you out, and the expected response is to slow enough to keep full control.",
        context:
          "Warning signs describe a condition rather than imposing a number, so most carry no limit. Where one does carry a speed on a tab underneath, that number is a recommendation. The signs that carry the force of law are the white regulatory rectangles.",
        trap:
          "Because a diamond usually carries no posted limit, drivers file it as decoration. The hazard is still real, and an orange diamond means the same thing in a construction zone.",
        excerptKey: "sign-warning",
        sourceLabel: "Saskatchewan Driver's Handbook - Six basic sign shapes",
        sourceUrl: hb(77),
      },
      {
        id: "sk_s1_07",
        topic: "sharing",
        question:
          "A school bus ahead of you switches on its red flashing lights and swings out its stop arm. How far back must you stop?",
        choices: [
          "Right behind it, close enough to see the children",
          "At least 5 m from the bus",
          "At least 15 m from the bus",
          "At least 30 m from the bus",
        ],
        correctIndex: 1,
        explanation:
          "SGI sets the distance at no closer than 5 m from the front or the back of the bus, and section 212 of the Act says the same. You hold that position until the lights and stop arm go off.",
        context:
          "Before you move again, SGI asks you to check that all the children have actually crossed. Rear-end collisions are the most frequent crash type involving school buses, and they usually happen because a following driver did not stop while the bus was loading.",
        trap:
          "Five metres is closer than most people picture, but it is a floor, not a target. Stopping short of it is the offence; stopping further back is not.",
        excerptKey: "school-bus-5m",
        sourceLabel: "Saskatchewan Driver's Handbook - Sharing the road with school buses",
        sourceUrl: hb(37),
      },
      {
        id: "sk_s1_08",
        topic: "safety",
        question:
          "SGI teaches following distance in seconds rather than car lengths. What is the minimum in ideal conditions?",
        choices: ["Two seconds", "Three seconds", "Four seconds", "Six seconds"],
        correctIndex: 1,
        explanation:
          "Three seconds is the Saskatchewan minimum when conditions are ideal. Anything longer is safe; anything shorter means dropping back and checking again.",
        context:
          "You measure it by picking a fixed object, starting the count when the vehicle ahead passes it and stopping when your front bumper reaches it. Because it is a time and not a distance, the gap stretches automatically as you speed up.",
        trap:
          "Three seconds is the floor for a perfect day. SGI immediately stacks conditions on top of it: more than three behind a vehicle that blocks your view, and longer than three whenever the road is wet or slippery.",
        excerptKey: "following-three-seconds",
        sourceLabel: "Saskatchewan Driver's Handbook - Using time to estimate your following distance",
        sourceUrl: hb(99),
      },
      {
        id: "sk_s1_09",
        topic: "signs",
        question:
          "What does a five-sided sign with a fluorescent yellow-green background and a black silhouette of children mean?",
        choices: [
          "A playground is ahead",
          "Children are crossing at this exact point",
          "You are in or approaching a school zone",
          "Pedestrians have right of way over the whole block",
        ],
        correctIndex: 2,
        explanation:
          "The pentagon in fluorescent yellow-green is the school zone sign. When a tab underneath shows a maximum speed or hours, that speed is the one to drive.",
        context:
          "Saskatchewan sets school zone speeds by municipal bylaw, so the number changes from town to town and you have to read the sign rather than assume. Older school zone signs are the same pentagon shape with a blue background and a white silhouette, and SGI says those are being replaced.",
        trap:
          "The playground sign is a yellow diamond, not a pentagon, and it carries its own speed tab. Fluorescent yellow-green in Saskatchewan means school, not playground.",
        excerptKey: "sign-school-zone",
        sourceLabel: "Saskatchewan Driver's Handbook - Six basic sign shapes",
        sourceUrl: hb(77),
      },
      {
        id: "sk_s1_10",
        topic: "licensing",
        question:
          "What must a Saskatchewan Class 7 learner's supervising driver be doing while the learner drives?",
        choices: [
          "Occupying the front passenger seat, next to the driver",
          "Sitting anywhere in the vehicle with a clear view of the road",
          "Following in a second vehicle within sight",
          "Available by phone if the learner needs help",
        ],
        correctIndex: 0,
        explanation:
          "The supervisor has to occupy the seat nearest the driver and the vehicle controls, which is the front passenger seat, and be capable of taking over at any moment.",
        context:
          "The supervisor also has to hold at least the equivalent of a Class 5 licence from a Canadian or US jurisdiction, have held a valid licence for a year in the previous three, and not be a novice driver themselves. A learner may carry other passengers up to the number of working seatbelts.",
        trap:
          "Between midnight and 5 a.m. everyone in the vehicle other than the supervising driver has to be an immediate family member, so a late drive home with friends is off even with a supervisor beside you.",
        excerptKey: "class7-supervisor",
        sourceLabel: "Saskatchewan Driver's Handbook - Licence Class 7",
        sourceUrl: hb(20),
      },
      {
        id: "sk_s1_11",
        topic: "signals",
        question:
          "You are stopped at a red light and intend to turn right. There is no sign prohibiting it. What are you allowed to do?",
        choices: [
          "Turn without stopping if the way looks clear",
          "Wait for a green light before turning",
          "Stop first, then turn after yielding to pedestrians and other traffic",
          "Turn only if a green arrow appears",
        ],
        correctIndex: 2,
        explanation:
          "A right turn on red is allowed after you have come to a stop and yielded the right of way to pedestrians and to any other vehicles travelling through the intersection.",
        context:
          "The Act adds an unusual second case: at the intersection of two one-way streets you may also turn LEFT on a red after stopping and yielding, unless a sign forbids it. Both permissions disappear the moment a No Right Turn On Red or similar sign is posted.",
        trap:
          "The stop is the part that gets skipped. Yielding without stopping is still an offence even if nothing was coming.",
        excerptKey: "signal-red-right-turn",
        sourceLabel: "Saskatchewan Driver's Handbook - Traffic signals",
        sourceUrl: hb(91),
      },
      {
        id: "sk_s1_12",
        topic: "rules",
        question:
          "You are driving at 50 km/h through a Saskatchewan town and plan to turn right at the next corner. When should the signal go on?",
        choices: [
          "At least 30 m before the turn",
          "At least 150 m before the turn",
          "As you begin to turn the wheel",
          "Only if another vehicle is close behind",
        ],
        correctIndex: 0,
        explanation:
          "SGI's rule for speeds under 60 km/h is to signal at least 30 m before turning. At higher speeds the figure rises to 150 m from the corner.",
        context:
          "A signal is a statement of intention. Section 234 of the Act requires the warning to be given for a sufficient distance to warn other traffic of an intention to stop, abruptly reduce speed, turn or change lanes, and SGI's 30 and 150 metres are the practical version of that.",
        trap:
          "Signalling as you start the turn tells other drivers nothing they cannot already see. That is the exact error SGI names.",
        excerptKey: "signal-distance",
        sourceLabel: "Saskatchewan Driver's Handbook - Signalling",
        sourceUrl: hb(47),
      },
      {
        id: "sk_s1_13",
        topic: "signs",
        question: "Standard sign colours carry meaning in Saskatchewan. What does an orange sign indicate?",
        choices: [
          "A school zone or school crosswalk",
          "General information or a service road",
          "Construction and maintenance warning",
          "A movement that is permitted",
        ],
        correctIndex: 2,
        explanation:
          "Orange is reserved for construction and maintenance warning. Seeing it means you are entering an area where the layout, the speed and the workers all change.",
        context:
          "SGI's colour list is worth memorising outright for the sign exam: red is stop or prohibition, blue is general information or service road information, green shows a permitted movement or gives directional guidance, yellow is a general warning, fluorescent yellow-green is school zone and school crosswalk, and white is regulatory.",
        trap:
          "Orange and yellow both warn, but only orange means workers may be present and the fines may triple.",
        excerptKey: "sign-colours",
        sourceLabel: "Saskatchewan Driver's Handbook - Standard sign colours",
        sourceUrl: hb(78),
      },
      {
        id: "sk_s1_14",
        topic: "parking",
        question:
          "You are stopping at an intersection where there is no stop line, no sidewalk and no crosswalk, inside a Saskatchewan city. Where do you stop?",
        choices: [
          "Within three metres of the intersection",
          "Within ten metres of the intersection",
          "Anywhere you can see the cross traffic",
          "With your front bumper level with the corner",
        ],
        correctIndex: 0,
        explanation:
          "In a city, town, village or hamlet the Act puts the stop no further than three metres back from the intersection. Outside those boundaries the figure is ten metres.",
        context:
          "The stopping position is decided by what is painted on the road. If there is a marked stop line you stop at the line; if there is a crosswalk, marked or not, you stop before it; only when there is neither does the three or ten metre rule apply.",
        trap:
          "The rural number is the one people transplant into town. Ten metres back at a city corner puts you too far from the cross street to see anything.",
        excerptKey: "act-stop-position",
        sourceLabel: "The Traffic Safety Act, section 209(6.1)",
        sourceUrl: act(165),
      },
      {
        id: "sk_s1_15",
        topic: "safety",
        question: "When does Saskatchewan law require your headlights to be on?",
        choices: [
          "Only between midnight and dawn",
          "From half an hour after sunset until half an hour before sunrise, and any time visibility is poor",
          "Only when you cannot see 100 m ahead",
          "Whenever the vehicle is moving, without exception",
        ],
        correctIndex: 1,
        explanation:
          "The law sets the window at half an hour after sunset to half an hour before sunrise, and adds any other time when visibility is poor.",
        context:
          "SGI goes further than the law and recommends headlights at all times, because vehicles driven with lights on are much less likely to be in a collision. It also warns that daytime running lights on some vehicles leave the tail lamps dark, so you still have to switch the headlights on properly at night.",
        trap:
          "Daytime running lights are not headlights. They light the front only, and a vehicle with no tail lamps at dusk is close to invisible from behind.",
        excerptKey: "headlights-law",
        sourceLabel: "Saskatchewan Driver's Handbook - Headlights",
        sourceUrl: hb(72),
      },
      {
        id: "sk_s1_16",
        topic: "signs",
        question: "What is a crossbuck, and what does it require of you?",
        choices: [
          "An X-shaped sign at a railway crossing, carrying the same duty as a yield sign",
          "An X-shaped sign warning that a road ends ahead",
          "A checkerboard marking a sharp curve",
          "A regulatory sign banning heavy trucks",
        ],
        correctIndex: 0,
        explanation:
          "The crossbuck is the traditional X-shaped sign at a roadway-railway crossing. SGI says it is the same colour as a yield sign and has the same meaning: give right of way and stop if necessary.",
        context:
          "SGI wants you checking for trains at every crossing, including ones with automatic signals. Where gates are down you never drive around them, and where there are no gates you may cross after stopping while the red lights flash only if it is genuinely safe.",
        trap:
          "People read the crossbuck as a warning sign and keep rolling. It carries a yield duty, and a train needs far more room to stop than you do.",
        excerptKey: "sign-crossbuck",
        sourceLabel: "Saskatchewan Driver's Handbook - Six basic sign shapes",
        sourceUrl: hb(77),
      },
      {
        id: "sk_s1_17",
        topic: "rules",
        question: "On a road with marked lanes, what does Saskatchewan require of your lane position?",
        choices: [
          "Straddle the line where it helps you see further ahead",
          "Travel entirely within one lane, and change only when it is safe",
          "Stay in the right lane at all times",
          "Use whichever part of the road has the best surface",
        ],
        correctIndex: 1,
        explanation:
          "You must travel entirely within one lane, and a lane change is permitted only when it is safe to do so. Where there are no painted lines you drive as if there were.",
        context:
          "Where a solid line separates lanes you may not move across it. The two exceptions are a double line whose nearer half is broken, and a marked two-way left turning lane.",
        trap:
          "The shoulder is not the answer to a bad lane surface. The area right of the solid white line is for stopped vehicles and emergency manoeuvres, not for driving.",
        excerptKey: "lane-one-lane",
        sourceLabel: "Saskatchewan Driver's Handbook - Traffic lanes",
        sourceUrl: hb(45),
      },
      {
        id: "sk_s1_18",
        topic: "rightOfWay",
        question:
          "You are waiting to turn left at a green light and oncoming traffic is close. What must you do?",
        choices: [
          "Turn first, since you arrived at the intersection earlier",
          "Yield the right of way to the oncoming vehicles",
          "Turn as soon as the oncoming driver slows down",
          "Wait outside the intersection until the light goes amber",
        ],
        correctIndex: 1,
        explanation:
          "A left turn across the path of oncoming traffic always yields. SGI puts the test as whether the oncoming vehicles are close enough that your turn would interfere with them.",
        context:
          "You may enter the intersection on the green while you wait, and if traffic is heavy you may end up completing the turn on the amber or red. The Act adds that you must give the oncoming driver a reasonable opportunity to avoid a collision before you commit.",
        trap:
          "Waiting behind the stop line instead of entering the intersection means the light changes and nobody gets through, which is why SGI teaches entering and waiting.",
        excerptKey: "left-turn-yield",
        sourceLabel: "Saskatchewan Driver's Handbook - Right of way",
        sourceUrl: hb(60),
      },
      {
        id: "sk_s1_19",
        topic: "signs",
        question:
          "A white rectangular sign with black lettering shows a number and the words km/h. What is it?",
        choices: [
          "A recommended safe speed for a curve ahead",
          "The maximum speed allowed under ideal conditions",
          "The minimum speed permitted in that lane",
          "The average speed of traffic on that road",
        ],
        correctIndex: 1,
        explanation:
          "White rectangles are regulatory signs, and this one gives the maximum speed allowed under ideal conditions. It is enforceable, and it is a ceiling rather than a target.",
        context:
          "SGI's own caption for the sign uses the phrase ideal conditions. On ice, in fog, or behind blowing snow the number that matters is the one you can stop within, and driving the posted limit in bad conditions can still be an offence.",
        trap:
          "The yellow tab under a warning sign is the recommended safe speed, not a limit. Confusing the two goes wrong in both directions: people brake far too early for a yellow tab and treat a white sign as advisory.",
        excerptKey: "sign-max-speed-ideal",
        sourceLabel: "Saskatchewan Driver's Handbook - Regulatory signs",
        sourceUrl: hb(78),
        commonlyMissed: true,
      },
      {
        id: "sk_s1_20",
        topic: "safety",
        question: "Who is responsible for making sure a 12-year-old passenger is wearing a seatbelt?",
        choices: [
          "The passenger, since they are old enough to buckle up",
          "The driver, who may be charged if the child is unbelted",
          "The registered owner of the vehicle",
          "Nobody, because the rule starts at 16",
        ],
        correctIndex: 1,
        explanation:
          "Drivers are legally responsible for passengers under 16 years of age using seatbelts and child seats where appropriate, and can be charged if they are not.",
        context:
          "The line falls at 16. From that birthday on, passengers are responsible for buckling themselves up, and the driver is no longer charged for them. Every occupant must wear the complete belt properly adjusted and securely fastened where one is provided.",
        trap:
          "Wearing the shoulder belt behind your back or under your arm is treated as not wearing it, not as a lesser version of wearing it.",
        excerptKey: "seatbelt-under-16",
        sourceLabel: "Saskatchewan Driver's Handbook - Seatbelts",
        sourceUrl: hb(113),
      },
      {
        id: "sk_s1_21",
        topic: "rules",
        question:
          "You need to change lanes on a Saskatchewan street. What is the order SGI teaches?",
        choices: [
          "Shoulder check, steer across, then signal",
          "Signal, check your mirrors, shoulder check your blind spot, then move",
          "Check your mirrors, move, then signal to explain",
          "Signal and move together, since the signal is the warning",
        ],
        correctIndex: 1,
        explanation:
          "SGI's sequence is signal, mirrors, shoulder check the blind spot for the gate you are moving into, then steer, and cancel the signal afterwards.",
        context:
          "The signal comes first because it is a statement of intention, and an intention announced after you have started moving tells nobody anything. Moving across more than one lane is done as one continuous action with a single signal, but you shoulder check for every lane.",
        trap:
          "Mirrors alone cannot clear the blind spot. That is the whole reason the shoulder check is a separate numbered step.",
        excerptKey: "changing-lanes-procedure",
        sourceLabel: "Saskatchewan Driver's Handbook - Changing lanes",
        sourceUrl: hb(48),
      },
      {
        id: "sk_s1_22",
        topic: "sharing",
        question:
          "You are approaching an emergency vehicle stopped on an undivided highway with its lights flashing. What speed may you pass at?",
        choices: [
          "The posted limit, as long as you move over",
          "No more than 60 km/h",
          "No more than 30 km/h",
          "Any speed, since the exemption applies to undivided roads",
        ],
        correctIndex: 1,
        explanation:
          "Sixty kilometres an hour is the ceiling when passing a stopped emergency vehicle with its lights on. The exemption is only for a divided highway when you are on the opposite roadway, so an undivided road gives you no relief at all.",
        context:
          "The same 60 km/h covers a tow truck assisting a disabled vehicle with amber or amber and blue lights, highway workers and equipment, and service or escort vehicles. All four carry the identical divided-highway exception.",
        trap:
          "People assume that being on the far side of the road is enough. It is not, unless the road is physically divided.",
        excerptKey: "emergency-vehicle-stopped",
        sourceLabel: "Saskatchewan Driver's Handbook - Sharing the road with emergency vehicles",
        sourceUrl: hb(36),
        commonlyMissed: true,
      },
      {
        id: "sk_s1_23",
        topic: "signs",
        question: "What does a bright orange triangle mounted on the back of a vehicle mean?",
        choices: [
          "The vehicle is carrying dangerous goods",
          "The vehicle is being towed",
          "The vehicle travels at less than 40 km/h",
          "The driver is a new licence holder",
        ],
        correctIndex: 2,
        explanation:
          "That is the slow moving vehicle sign. SGI says it is mounted on the rear of vehicles that travel at less than 40 km/h and warns drivers coming up behind to slow down.",
        context:
          "Saskatchewan's farm season puts combines, tractors and cultivators on highways and grid roads from early spring to late fall, and SGI puts their speed at 10 to 40 km/h. Because you close on them so quickly, you may need to stop or change lanes with very little notice.",
        trap:
          "The closing speed is the danger, not the machine. At 100 km/h you are shutting a gap on a 20 km/h combine at the rate of a car length every third of a second.",
        excerptKey: "sign-slow-moving",
        sourceLabel: "Saskatchewan Driver's Handbook - Warning signs",
        sourceUrl: hb(85),
      },
      {
        id: "sk_s1_24",
        topic: "rightOfWay",
        question:
          "You are pulling out of a shop's driveway onto a city street. Who has the right of way?",
        choices: [
          "You, once you have edged far enough forward to be seen",
          "Pedestrians on the sidewalk and vehicles on the street, both of whom you must yield to",
          "Only vehicles on the street; pedestrians must wait",
          "Whoever is moving faster",
        ],
        correctIndex: 1,
        explanation:
          "Coming out of a private road, lane or alley you yield to pedestrians on the sidewalk and to vehicles on the road. Both, not one or the other.",
        context:
          "The Act frames it the same way in section 219(6), and adds a matching rule for entering a provincial highway from any other road: you yield to traffic on the highway and to any pedestrian closely approaching the intersection.",
        trap:
          "The sidewalk is the half people forget. Nosing across it to see the traffic puts your bumper exactly where a pedestrian is walking.",
        excerptKey: "entering-from-private-road",
        sourceLabel: "Saskatchewan Driver's Handbook - Right of way",
        sourceUrl: hb(61),
      },
      {
        id: "sk_s1_25",
        topic: "speed",
        question:
          "You come up behind a snow plow that is moving along the highway clearing snow. What does SGI say about passing it?",
        choices: [
          "You may never pass a snow plow",
          "You may pass if it is safe, and you are not limited to 60 km/h",
          "You may pass but only at 60 km/h or less",
          "You may pass only where a passing lane is provided",
        ],
        correctIndex: 1,
        explanation:
          "A plow in motion may be passed when it is safe, and the 60 km/h restriction does not apply. That limit is for equipment stopped on the highway with its blue and amber lights flashing.",
        context:
          "SGI still asks for patience: a plow throws up a mini blizzard, plows travel slower than traffic while they work, and the majority of collisions with them are rear-end crashes by drivers who did not adjust to the conditions.",
        trap:
          "Stopped equipment and moving equipment are governed by two different rules. Reading the 60 as a blanket plow rule leaves you crawling behind one for kilometres; reading it as never applying gets you a ticket at a stopped grader.",
        excerptKey: "snow-plow-60",
        sourceLabel: "Saskatchewan Driver's Handbook - Sharing the road with snow plows",
        sourceUrl: hb(34),
      },
      {
        id: "sk_s1_26",
        topic: "signals",
        question: "What does a flashing red light at an intersection require?",
        choices: [
          "Slow down and proceed with caution",
          "Stop, then proceed when it is safe",
          "Stop and wait for the light to change",
          "Yield only to traffic on your right",
        ],
        correctIndex: 1,
        explanation:
          "A flashing red is a stop. You stop, and you may then go once it is safe, in the same way you would at a stop sign.",
        context:
          "A flashing amber is the other half of the pair and means something different: proceed with caution. SGI also warns that alternating flashing amber lights on the approach may be telling you the traffic lights ahead are red or about to turn red.",
        trap:
          "Waiting at a flashing red for the light to change leaves you sitting there indefinitely, and the driver behind you is not expecting it.",
        excerptKey: "signal-flashing-red",
        sourceLabel: "Saskatchewan Driver's Handbook - Traffic signals",
        sourceUrl: hb(93),
      },
      {
        id: "sk_s1_27",
        topic: "parking",
        question:
          "Two vehicles meet where two parking lot aisles cross, and there are no stop or yield signs. Who yields?",
        choices: [
          "Nobody, because the rules of the road do not apply on private property",
          "The vehicle on the left yields to the vehicle on the right",
          "The vehicle travelling faster yields",
          "The vehicle leaving a parking stall always goes first",
        ],
        correctIndex: 1,
        explanation:
          "SGI says to treat an unsigned parking lot crossing as an uncontrolled intersection, which means yielding to the vehicle on your right.",
        context:
          "Saskatchewan writes a second layer into the Act for parking lots. A vehicle leaving a feeder lane yields to vehicles on a thoroughfare, the main road that runs into, through or out of the lot, and a vehicle leaving a parking stall yields to vehicles on the feeder lane.",
        trap:
          "The idea that a parking lot is lawless is the whole trap. Speed, signs, following distance, turns, signalling and backing all apply there.",
        excerptKey: "parking-lot-uncontrolled",
        sourceLabel: "Saskatchewan Driver's Handbook - Parking lots",
        sourceUrl: hb(71),
      },
      {
        id: "sk_s1_28",
        topic: "safety",
        question:
          "Where should the top of your head restraint sit relative to your head?",
        choices: [
          "Level with the top of your head, never lower",
          "Level with the back of your neck",
          "As low as it will go, to keep your view clear",
          "It does not matter if you wear a seatbelt",
        ],
        correctIndex: 0,
        explanation:
          "SGI says the top of the restraint should never be lower than the top of your head, and the pad should support the back of your head.",
        context:
          "A head restraint is a whiplash protection device, not a headrest. It works whether you are struck from behind or hit something in front, and it only works when it is adjusted for whoever is actually sitting in that seat.",
        trap:
          "Dropping the restraint to see better is a common habit, and it converts a survivable rear-end shunt into a neck injury.",
        excerptKey: "head-restraint",
        sourceLabel: "Saskatchewan Driver's Handbook - Head restraints",
        sourceUrl: hb(112),
      },
      {
        id: "sk_s1_29",
        topic: "signs",
        question:
          "You are on a two-lane highway and see a white rectangular sign showing two arrows, one solid and one crossed out. What is it telling you?",
        choices: [
          "The road ahead becomes one way",
          "Passing is not permitted",
          "The road narrows",
          "Heavy trucks are prohibited",
        ],
        correctIndex: 1,
        explanation:
          "That is the regulatory passing sign in its prohibiting form. White rectangles state the law, and this one bans passing on that section of road.",
        context:
          "SGI's regulatory set includes a matching sign for passing permitted, plus a pair for U-turns, a keep-right sign for traffic islands, do not enter, and weight limits expressed in tonnes. Reading the pair as a pair is the trick: one shows the movement, the other shows it struck through.",
        trap:
          "A no-passing sign and a solid yellow centre line are two separate prohibitions on the same behaviour. Losing the line does not lift the sign.",
        excerptKey: "sign-regulatory",
        sourceLabel: "Saskatchewan Driver's Handbook - Regulatory signs",
        sourceUrl: hb(79),
      },
      {
        id: "sk_s1_30",
        topic: "licensing",
        question:
          "How long must you hold a Saskatchewan Class 7 learner's licence before you can take the Class 5 road test?",
        choices: ["Three months", "Six months", "Nine months", "Twelve months"],
        correctIndex: 2,
        explanation:
          "Nine months. SGI puts it both as a step in the graduated programme and as a hard requirement: a road test is rescheduled if you have not held the Class 7 for at least nine months.",
        context:
          "The handbook states the same thing in a wider form: a Class 7 driver must keep that classification for at least nine months before becoming eligible for any examination towards a licence in any other class. Mandatory driver education has to be finished as well.",
        trap:
          "The nine months are calendar months, and they do not run while your licence is suspended, refused or unrenewed. Letting the annual payment lapse costs you the time, not just the card.",
        excerptKey: "hb-learning-period",
        sourceLabel: "Saskatchewan Driver's Handbook - Learning period",
        sourceUrl: hb(24),
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Core Rules of the Road",
    difficulty: "easy",
    description:
      "Thirty questions on the rules a Saskatchewan driver uses every day: right of way at the awkward intersections, the signs that state the law rather than warn about a hazard, and where the province's numbers differ from its neighbours'.",
    questions: [
      {
        id: "sk_s2_01",
        topic: "rightOfWay",
        question:
          "You are entering a roundabout and a vehicle is already circulating. What do you do?",
        choices: [
          "Enter first, because you are on the right",
          "Yield to the circulating vehicle",
          "Sound your horn and enter together",
          "Stop completely and wait for the roundabout to empty",
        ],
        correctIndex: 1,
        explanation:
          "Traffic entering a roundabout yields to traffic already in it. That is the operative rule and it decides every roundabout question you will be asked.",
        context:
          "SGI's sentence for this reads that in a roundabout the vehicle on the right must yield to the vehicle on the left, which sounds like the reverse of Saskatchewan's ordinary uncontrolled-intersection rule. Both are consistent: from the circulating driver's seat, the entering vehicle is the one on the right.",
        trap:
          "Reading the roundabout sentence on its own and applying Saskatchewan's usual yield-to-the-right rule at the entry puts you straight into the side of a circulating car.",
        excerptKey: "roundabout-yield",
        sourceLabel: "Saskatchewan Driver's Handbook - Roundabouts",
        sourceUrl: hb(64),
        commonlyMissed: true,
      },
      {
        id: "sk_s2_02",
        topic: "signs",
        question:
          "You are on a rural Saskatchewan grid road and see three triangular reflective delineators on a sign post at an intersection. What are they telling you?",
        choices: [
          "The intersection has three approaches",
          "The crossing road is a provincial highway, grid road or major street",
          "There are three kilometres to the next town",
          "The road ahead is closed to through traffic",
        ],
        correctIndex: 1,
        explanation:
          "Delineators classify the road you are about to cross. Three means a provincial or public highway, a community access road, a grid road or a major street.",
        context:
          "Two delineators mark main farm access roads, improved all-weather roads and intermediate urban streets. One marks all other minor rural roads and local urban streets. Their first job is simply telling a rural driver that an intersection is coming at all.",
        trap:
          "On a flat grid at night the delineators may reach you before the stop sign does. Reading them as decoration means arriving at a highway crossing with no idea what you are joining.",
        excerptKey: "delineators-three",
        sourceLabel: "Saskatchewan Driver's Handbook - Crossroad delineators",
        sourceUrl: hb(89),
      },
      {
        id: "sk_s2_03",
        topic: "rules",
        question:
          "You are on a rural Saskatchewan highway and want to pass. The Act sets a minimum sight distance. What is it?",
        choices: ["150 metres", "200 metres", "320 metres", "500 metres"],
        correctIndex: 2,
        explanation:
          "Outside urban boundaries you may not pass unless you have a clear view of the highway for 320 metres in your direction of travel. The rule does not apply where the highway has two or more lanes going your way.",
        context:
          "The handbook states the practical version of the same idea: do not pass on the crest of a hill, before a curve, at intersections, or anywhere your sight distance is limited. The Act simply puts a number on it.",
        trap:
          "Three hundred and twenty metres is a long way, and a Saskatchewan highway is flat enough to make it look like more room than it is. Estimating in seconds is safer, and at 100 km/h that distance is about twelve seconds of road.",
        excerptKey: "act-passing-320m",
        sourceLabel: "The Traffic Safety Act, section 217(6)",
        sourceUrl: act(170),
        commonlyMissed: true,
      },
      {
        id: "sk_s2_04",
        topic: "signals",
        question:
          "A flashing green arrow appears beside a red light at an intersection. What may you do?",
        choices: [
          "Nothing, since the red governs",
          "Turn left in the direction of the arrow",
          "Proceed straight through only",
          "Turn right only",
        ],
        correctIndex: 1,
        explanation:
          "A flashing green left-turn arrow lets you make the left turn while it is flashing, whether the round light beside it is red or green.",
        context:
          "A solid green arrow beside a red works differently: you may go in the direction of the arrow only, and only after yielding to any other vehicles and pedestrians. When an amber arrow follows the left-turn arrow, it means the green is about to appear for traffic in both directions.",
        trap:
          "The amber arrow is not the end of your protected turn plus a grace period. It is the announcement that oncoming traffic is about to get its green.",
        excerptKey: "signal-flashing-green",
        sourceLabel: "Saskatchewan Driver's Handbook - Traffic signals",
        sourceUrl: hb(92),
      },
      {
        id: "sk_s2_05",
        topic: "sharing",
        question:
          "A pedestrian is crossing at a marked crosswalk in a Saskatchewan city, with no lights and no officer. What does the Act require of you?",
        choices: [
          "Slow down and steer around them",
          "Sound your horn to warn them",
          "Stop the vehicle and yield the right of way",
          "Yield only if they are on your half of the road",
        ],
        correctIndex: 2,
        explanation:
          "The duty is to stop the vehicle and yield, not merely to slow. Section 223(1) of the Act uses the word stop.",
        context:
          "Where there is a marked crosswalk you stop on the near side immediately before entering it; where there is a stop line you stop at the line. If a traffic light changes while a pedestrian is already in the crosswalk, the pedestrian keeps the right of way.",
        trap:
          "Once you have stopped, nobody may pass you. Section 223(2) forbids a vehicle behind you from overtaking, which is the manoeuvre that kills pedestrians who thought the road was clear.",
        excerptKey: "act-pedestrian-stop",
        sourceLabel: "The Traffic Safety Act, section 223(1)",
        sourceUrl: act(172),
        commonlyMissed: true,
      },
      {
        id: "sk_s2_06",
        topic: "signs",
        question:
          "What does a yellow diamond showing a small car above wavy lines, captioned as slippery when wet, ask of you?",
        choices: [
          "Stop and check the surface before continuing",
          "Slow down, because the road surface loses grip in the wet",
          "Use a lower gear on the descent",
          "Watch for water pooling on the shoulder",
        ],
        correctIndex: 1,
        explanation:
          "It warns that the road surface is slippery when wet. Like every yellow diamond it names a condition and expects you to reduce speed enough to stay in full control.",
        context:
          "Saskatchewan has a related sign specifically for freezing: surface subject to icing, which SGI captions as a bridge or roadway surface that may be slippery at zero degrees Celsius. Bridges lose heat from underneath and freeze before the road on either side of them.",
        trap:
          "Zero degrees is the icing sign's number, but SGI warns elsewhere that ice is far more slippery near freezing than at minus twenty, so a mild day is the dangerous one.",
        excerptKey: "sign-icing",
        sourceLabel: "Saskatchewan Driver's Handbook - Warning signs",
        sourceUrl: hb(85),
      },
      {
        id: "sk_s2_07",
        topic: "rules",
        question:
          "You are turning left from a two-way street into another two-way street. Which lane do you approach in and which do you leave in?",
        choices: [
          "Approach in the left-most lane available, and leave in the left-most lane available",
          "Approach in any lane and leave in the curb lane",
          "Approach in the centre lane and leave in the centre lane",
          "Approach in the left-most lane and leave in the right-most lane",
        ],
        correctIndex: 0,
        explanation:
          "Both halves are the left-most lane lawfully available for your direction of travel. That is how SGI teaches it and how section 218(2) of the Act writes it.",
        context:
          "A right turn is the mirror image: approach and complete the turn as closely as possible to the right curb or edge of the road, into the first available driving lane. Where signs or markings designate more than one turn lane, you leave in the lane that corresponds to the one you started in.",
        trap:
          "Swinging wide into the far lane on a left turn is the classic road-test error, and it puts you in the path of anyone turning left the other way at the same time.",
        excerptKey: "left-turn-lane",
        sourceLabel: "Saskatchewan Driver's Handbook - Left turns",
        sourceUrl: hb(54),
      },
      {
        id: "sk_s2_08",
        topic: "speed",
        question:
          "You enter a work zone where highway workers are present. What happens to a speeding fine there?",
        choices: [
          "It stays the same",
          "It doubles",
          "It triples",
          "It becomes a criminal charge",
        ],
        correctIndex: 2,
        explanation:
          "Fines for speeding triple when you pass highway workers or equipment occupied by a worker in the work zone.",
        context:
          "SGI defines the workers zone generously: a worker is anyone within 3 km of a traffic control person sign, a survey crew sign or a highway workers sign. Inside the zone you drive no faster than the posted speed, and 60 km/h or less when passing a worker, flag person or occupied equipment.",
        trap:
          "Some cities have bylaws requiring the work-zone speed through the entire construction area, not only where workers are visible, so an empty-looking stretch can still be enforced.",
        excerptKey: "work-zone-triple",
        sourceLabel: "Saskatchewan Driver's Handbook - Speeding, stunting and racing",
        sourceUrl: hb(30),
      },
      {
        id: "sk_s2_09",
        topic: "rightOfWay",
        question:
          "Two vehicles arrive at opposite stop signs at about the same time. One is going straight, the other is turning left. Who goes first?",
        choices: [
          "The vehicle turning left, since it has further to travel",
          "The vehicle going straight",
          "Whichever driver stopped first",
          "They may both proceed together",
        ],
        correctIndex: 1,
        explanation:
          "The driver turning left yields to the driver going straight, exactly as they would at a green light.",
        context:
          "SGI then adds a piece of practical courtesy: if it is safe, the left-turning vehicle may go next even when another vehicle has arrived in the meantime, so traffic keeps flowing while the newcomer advances to the line. Where both opposing vehicles are going straight, they proceed together.",
        trap:
          "At a two-way stop the rule is different again: you stay stopped until all the cross traffic has passed, because the cross traffic has no sign at all.",
        excerptKey: "two-way-stops",
        sourceLabel: "Saskatchewan Driver's Handbook - Controlled intersections",
        sourceUrl: hb(61),
      },
      {
        id: "sk_s2_10",
        topic: "signs",
        question:
          "A yellow diamond shows a curving arrow doubling back on itself, described as a reverse curve. Saskatchewan attaches a measurement to that sign. What is it?",
        choices: [
          "The curves are separated by less than 120 m of straight road",
          "The curves extend for at least 120 m",
          "The safe speed drops by 120 per cent",
          "The sign is posted 120 m before the first curve",
        ],
        correctIndex: 0,
        explanation:
          "SGI defines a reverse curve as two turns in opposite directions separated by a tangent of less than 120 m, with the arrow showing which way the first one goes.",
        context:
          "Where the two turns are further apart than that, they are signed as separate curves. A winding road sign is a third case again: several curves in succession, first curve right.",
        trap:
          "The tangent is the short straight between the bends. Under 120 m there is not enough room to settle the car, which is why the pair gets one sign rather than two.",
        excerptKey: "sign-reverse-curve",
        sourceLabel: "Saskatchewan Driver's Handbook - Warning signs",
        sourceUrl: hb(84),
      },
      {
        id: "sk_s2_11",
        topic: "safety",
        question:
          "You are being tailgated on a Saskatchewan highway. What does SGI tell you to do about your own following distance?",
        choices: [
          "Keep it at three seconds and let the other driver worry",
          "Close up on the vehicle ahead so the tailgater can pass",
          "Increase it to five or six seconds",
          "Brake sharply to make the point",
        ],
        correctIndex: 2,
        explanation:
          "A tailgater closes your rear gate, so SGI tells you to buy the room back in front by stretching your following distance to five or six seconds.",
        context:
          "SGI teaches four gates around the vehicle, one in each direction, and asks you to keep at least two of them open so you always have an escape. When the rear gate is shut by another driver, the front gate is the one you can still control.",
        trap:
          "Brake-checking a tailgater removes the only cushion you have. The vehicle behind you is the one that will not stop.",
        excerptKey: "tailgated-five-six",
        sourceLabel: "Saskatchewan Driver's Handbook - The concept of gates",
        sourceUrl: hb(43),
      },
      {
        id: "sk_s2_12",
        topic: "impairment",
        question:
          "You hold a Class 7 learner's licence. How much alcohol may be in your body when you drive?",
        choices: [
          "Up to .04 BAC, the same as an experienced driver's roadside limit",
          "Up to .05 BAC",
          "Up to .08 BAC, the Criminal Code limit",
          "None at all",
        ],
        correctIndex: 3,
        explanation:
          "New drivers, which includes every learner, are zero tolerance. Any detectable amount of alcohol or drugs means a roadside suspension.",
        context:
          "SGI's definition of a new driver is wider than the GDL programme itself. It covers every driver 21 years of age and under, all Class 7 learners, Class 5 Novice 1 and Novice 2 drivers, anyone with no licence in the last five years, and restricted or provisional drivers.",
        trap:
          "The .04 to .08 roadside band belongs to experienced drivers aged 22 and over who are out of the GDL programme. Reading that number as your own is how a learner loses a licence for 60 days.",
        excerptKey: "zero-bac-new-drivers",
        sourceLabel: "Saskatchewan Driver's Handbook - Impaired driving",
        sourceUrl: hb(178),
        commonlyMissed: true,
      },
      {
        id: "sk_s2_13",
        topic: "rules",
        question:
          "What is a two-way left turning lane in the centre of a Saskatchewan street for?",
        choices: [
          "Passing slower traffic in either direction",
          "Making left turns from either direction",
          "Driving through when the outer lanes are congested",
          "Waiting to merge onto a busier road",
        ],
        correctIndex: 1,
        explanation:
          "Left turns from either direction may be made from it, and nothing else may. It is not a passing lane and it is not a driving lane.",
        context:
          "You enter it only at the point next to the property you want. Coming the other way, out of a driveway, you pick a gap, drive through the centre lane and into the first available driving lane as quickly as you can. Where one of these lanes exists you may not turn left from any other lane.",
        trap:
          "Running down it for half a block to get past a queue is the misuse the Act names in terms in section 228(2).",
        excerptKey: "centre-turn-lane",
        sourceLabel: "Saskatchewan Driver's Handbook - Centre turning lanes",
        sourceUrl: hb(58),
      },
      {
        id: "sk_s2_14",
        topic: "signs",
        question:
          "A white rectangular sign shows a bicycle symbol above a lane. What does it mean for a driver?",
        choices: [
          "Cyclists are warned to use caution in that lane",
          "The lane is reserved for bicycles and you enter it only to turn, park or reach a driveway",
          "Cyclists and drivers share the lane equally",
          "Cyclists must dismount at that point",
        ],
        correctIndex: 1,
        explanation:
          "It marks a bicycle-only lane. Vehicles are not allowed in it except to make a right turn, reach a parking space, or enter a lane or driveway.",
        context:
          "Bus lanes work the same way and carry a lane sign with a diamond and a bus symbol showing the hours and days the restriction applies. A sharrow, which is a chevron painted over a bicycle symbol, is a different thing entirely: it marks a shared lane and does not designate a bicycle lane at all.",
        trap:
          "Crossing a bike lane to turn right is allowed, but only after you have made sure you can do it safely. The cyclist coming up your right side is inside your blind spot.",
        excerptKey: "bicycle-lane-rule",
        sourceLabel: "Saskatchewan Driver's Handbook - Bus lanes and bicycle lanes",
        sourceUrl: hb(51),
      },
      {
        id: "sk_s2_15",
        topic: "parking",
        question:
          "You have to stop your vehicle on a rural Saskatchewan highway. How far must you be from any vehicle stopped on the opposite side?",
        choices: ["10 metres", "20 metres", "More than 30 metres", "50 metres"],
        correctIndex: 2,
        explanation:
          "More than 30 metres, and as far right as possible from the centre of the highway. SGI gives the same figure as 30 m or 98 feet.",
        context:
          "At night a vehicle stopped on a rural road or highway must be marked with flares, hazard lights or reflectors, and the Act requires flares where the vehicle intrudes on the travelled portion, is disabled, or is parked for more than four hours.",
        trap:
          "The distance exists so that two stopped vehicles never squeeze the through lane from both sides at once. Parking opposite another stopped car is the specific thing it forbids.",
        excerptKey: "stopping-30m",
        sourceLabel: "Saskatchewan Driver's Handbook - Stopping and parking",
        sourceUrl: hb(32),
      },
      {
        id: "sk_s2_16",
        topic: "sharing",
        question:
          "You are turning left across a bike lane and a cyclist is coming towards you. What does SGI require?",
        choices: [
          "Complete the turn quickly to clear the cyclist's path",
          "Stop and wait for the oncoming bicycle to pass before turning",
          "Sound your horn and proceed",
          "Turn behind the cyclist without stopping",
        ],
        correctIndex: 1,
        explanation:
          "SGI is explicit: when turning left you must stop and wait for oncoming bicycles to pass before turning. A bicycle is a vehicle and gets the same right of way as a car.",
        context:
          "SGI also asks you to scan for cyclists waiting to turn left as you drive through an intersection, and to check your blind spots for a cyclist coming up your right side before you turn right.",
        trap:
          "Bicycles arrive faster than they look. SGI puts an experienced cyclist at up to 50 km/h downhill, which is highway closing speed on a city street.",
        excerptKey: "cyclist-left-turn-wait",
        sourceLabel: "Saskatchewan Driver's Handbook - Sharing the road with bicycles",
        sourceUrl: hb(39),
      },
      {
        id: "sk_s2_17",
        topic: "signals",
        question:
          "Your signal lights and brake lights have failed on the way home. How do you signal a left turn?",
        choices: [
          "Left arm extended horizontally out the window",
          "Left arm bent up at the elbow",
          "Left arm pointed down at an angle",
          "You may not drive at all until they are repaired",
        ],
        correctIndex: 0,
        explanation:
          "A left turn is the left arm extended horizontally. The Act lists all three hand signals and they are the same ones cyclists use.",
        context:
          "The right turn is the left arm out with the forearm raised vertically from the elbow. Stopping or slowing abruptly is the left arm pointed down at an angle. SGI prints all three because they are also the signals you will be reading from a cyclist ahead of you.",
        trap:
          "The right-turn signal is the one people invert. A raised forearm means right; a straight arm means left.",
        excerptKey: "act-hand-signals",
        sourceLabel: "The Traffic Safety Act, section 234(2)",
        sourceUrl: act(176),
      },
      {
        id: "sk_s2_18",
        topic: "signs",
        question:
          "Two yellow diamonds look similar: one shows two lanes joining with a merge, the other shows two roads converging without one. What does the added lane sign mean?",
        choices: [
          "Two lanes merge and one must give way",
          "Two roads converge and no merging movement is required",
          "A passing lane starts in 500 metres",
          "The right lane ends ahead",
        ],
        correctIndex: 1,
        explanation:
          "The added lane sign means two roads converge and merging movements are not required, because the joining traffic gets a lane of its own.",
        context:
          "The two lanes merge sign is the opposite case and does require someone to give way. SGI also signs traffic entering from the right, and a lane-ends sign for where the right lane simply runs out.",
        trap:
          "Reading an added lane as a merge makes you brake for traffic that has its own lane, which is how a rear-end collision starts on a highway entrance.",
        excerptKey: "sign-added-lane",
        sourceLabel: "Saskatchewan Driver's Handbook - Warning signs",
        sourceUrl: hb(84),
      },
      {
        id: "sk_s2_19",
        topic: "rules",
        question:
          "A construction zone reduces two lanes to one and traffic is backing up. What does SGI recommend?",
        choices: [
          "Merge as early as you can and stay in the through lane",
          "Use both lanes to the point where one ends, then alternate one by one",
          "Drive on the shoulder to keep the queue moving",
          "Stop and wait for a flag person to direct you",
        ],
        correctIndex: 1,
        explanation:
          "That is a zipper merge. Drivers use both lanes until the lane ends and then alternate into the open lane, one from each side.",
        context:
          "SGI asks the ending lane to signal, shoulder check and merge when safe, and the continuing lane to let one vehicle in each. Zipper merge signs may not be posted, but the manoeuvre is allowed and recommended in construction zones anyway.",
        trap:
          "The driver who merges a kilometre early and then blocks the ending lane out of a sense of fairness is the one lengthening the queue. SGI says the zipper shortens the backup.",
        excerptKey: "zipper-merge",
        sourceLabel: "Saskatchewan Driver's Handbook - Zipper merge",
        sourceUrl: hb(62),
      },
      {
        id: "sk_s2_20",
        topic: "speed",
        question:
          "You are driving into a Saskatchewan town and a sign at the entrance shows 50 km/h. Where does that limit apply?",
        choices: [
          "Only on the road carrying the sign",
          "Only until the next intersection",
          "At all locations within the community boundaries, unless another sign says otherwise",
          "Only during daylight hours",
        ],
        correctIndex: 2,
        explanation:
          "SGI says the speed posted at the entrance applies to all locations within community boundaries unless otherwise posted. It is a town-wide number, not a street-specific one.",
        context:
          "That is why Saskatchewan does not need a separate urban default in the statute. The Act's 80 km/h covers everywhere with no sign at all, and the entrance sign is what converts a whole community to something lower.",
        trap:
          "Turning off the main road into a side street does not release you from the entrance sign. Learners looking for a per-street sign find none and assume the limit reverts.",
        excerptKey: "default-speed-80",
        sourceLabel: "Saskatchewan Driver's Handbook - Speeding, stunting and racing",
        sourceUrl: hb(29),
      },
      {
        id: "sk_s2_21",
        topic: "safety",
        question:
          "Saskatchewan law requires car seats or booster seats for children under a certain age. What is it?",
        choices: ["Under five", "Under six", "Under seven", "Under nine"],
        correctIndex: 2,
        explanation:
          "Children under seven years old must be properly fitted into a correctly installed and approved car seat or booster seat for their size, weight, height and age.",
        context:
          "SGI adds that a child is usually not protected by an ordinary seatbelt alone until about age seven and more than 36 kg. The Act works in the same numbers from the other direction, with a booster required for a passenger under seven who weighs between 18 and 36 kg and is under 145 cm tall.",
        trap:
          "The requirement follows the child, not the vehicle. Grandparents, caregivers, taxis and rideshare vehicles all have to comply.",
        excerptKey: "car-seats-under-seven",
        sourceLabel: "Saskatchewan Driver's Handbook - Car seats and booster seats",
        sourceUrl: hb(114),
      },
      {
        id: "sk_s2_22",
        topic: "signs",
        question:
          "You see an orange sign showing a figure holding a paddle. What does it mark?",
        choices: [
          "A survey crew working on the shoulder",
          "A traffic control person ahead, so be ready to stop for instructions",
          "A pedestrian crosswalk in a construction area",
          "A school crossing guard",
        ],
        correctIndex: 1,
        explanation:
          "It warns of a traffic control person ahead and tells you to be prepared to stop for instructions. It is also one of the signs that marks the start of a work zone.",
        context:
          "SGI lists three signs that designate the start of a work zone: traffic control person ahead, survey crew ahead, and highway workers, which may or may not carry a workers present tab. Inside the zone the posted speed applies throughout and 60 km/h is the ceiling past an actual worker.",
        trap:
          "A flag person's directions override the signs and the ordinary rules of the road. The Act requires every driver to obey them.",
        excerptKey: "sign-work-zone-start",
        sourceLabel: "Saskatchewan Driver's Handbook - Construction signs",
        sourceUrl: hb(87),
      },
      {
        id: "sk_s2_23",
        topic: "rightOfWay",
        question:
          "A road maintenance grader with its warning lights flashing is working ahead of you. What is your duty?",
        choices: [
          "Yield the right of way to it at all times",
          "Yield only if it is stopped",
          "Yield only where a sign tells you to",
          "Nothing, since it must yield to through traffic",
        ],
        correctIndex: 0,
        explanation:
          "At all times you must yield the right of way to highway construction or maintenance vehicles that have their warning lights flashing.",
        context:
          "The Act goes further and lets that equipment operate on any part of the highway necessary for the work, which is why a grader may be occupying the wrong side of the road entirely. If it is stopped with its lights on, the 60 km/h passing rule applies as well.",
        trap:
          "The flashing amber does not mean the same thing as an ordinary hazard light. On maintenance equipment it is a claim to the right of way.",
        excerptKey: "construction-vehicle-yield",
        sourceLabel: "Saskatchewan Driver's Handbook - Construction or maintenance vehicles",
        sourceUrl: hb(62),
      },
      {
        id: "sk_s2_24",
        topic: "sharing",
        question:
          "Two motorcycles are riding side by side in the lane ahead of you. Is that legal in Saskatchewan?",
        choices: [
          "No, motorcycles must ride single file",
          "Yes, two motorcycles may share a lane, though SGI does not recommend riding directly alongside",
          "Yes, and a car may share the lane with them too",
          "Only on a divided highway",
        ],
        correctIndex: 1,
        explanation:
          "Two motorcycles are permitted in the same traffic lane, though SGI says riding directly alongside another machine is not recommended practice.",
        context:
          "The Act sets the boundary from the other side: no more than two motorcycles abreast in a lane, and a motorcycle may not ride beside any other type of vehicle in the same lane. A skilled rider constantly changes position within the lane to see and be seen.",
        trap:
          "Moving into a lane beside a motorcycle because the rider is hugging one side is both illegal and, as SGI puts it, extremely hazardous.",
        excerptKey: "motorcycle-lane",
        sourceLabel: "Saskatchewan Driver's Handbook - Sharing the road with motorcycles",
        sourceUrl: hb(38),
      },
      {
        id: "sk_s2_25",
        topic: "rules",
        question:
          "When may you pass another vehicle on its right in Saskatchewan?",
        choices: [
          "Never, since passing is always on the left",
          "Whenever the left lane is occupied",
          "Where there are two or more lanes in your direction, or where the vehicle ahead is about to turn left and you can pass safely without using the shoulder",
          "Only on a one-way street",
        ],
        correctIndex: 2,
        explanation:
          "The default is passing on the left. SGI gives exactly two exceptions: multiple lanes in your direction of travel, and a vehicle ahead that is about to turn left, where you can pass safely on the right without driving on the shoulder.",
        context:
          "The Act allows one more case inside urban boundaries and on one-way highways, where you may pass on the right if the road is clear of obstructions, wide enough for two or more lanes of moving vehicles, and the movement can be made safely.",
        trap:
          "The shoulder disqualifies the manoeuvre outright. Section 217(2) forbids passing by driving off the pavement or travelled portion of the highway, no matter how much room there is.",
        excerptKey: "passing-on-right",
        sourceLabel: "Saskatchewan Driver's Handbook - Passing",
        sourceUrl: hb(49),
      },
      {
        id: "sk_s2_26",
        topic: "signs",
        question:
          "A blue sign appears beside a Saskatchewan highway. What is it there to tell you?",
        choices: [
          "A prohibition you must obey",
          "General information or service road information",
          "A warning about the road surface",
          "A permitted turning movement",
        ],
        correctIndex: 1,
        explanation:
          "Blue means general information or service road information: hospitals, fuel, food, accommodation and the like.",
        context:
          "SGI groups its information signs on a single page, with an advance community sign carrying service tabs for telephone, picnic facilities, accommodation, trailer facilities, food, swimming, camping, hospital, golf, police, museum and fuel. Green is a different colour with a different job, indicating a permitted movement or giving directional guidance.",
        trap:
          "Blue never carries a rule. Nothing on a blue sign is enforceable against you.",
        excerptKey: "sign-colours",
        sourceLabel: "Saskatchewan Driver's Handbook - Standard sign colours",
        sourceUrl: hb(78),
      },
      {
        id: "sk_s2_27",
        topic: "parking",
        question:
          "You are parking on a hill with a curb, facing downhill. Which way do the front wheels go?",
        choices: [
          "Turned towards the curb",
          "Turned away from the curb",
          "Left straight ahead",
          "It only matters if the vehicle is a manual",
        ],
        correctIndex: 0,
        explanation:
          "Facing downhill with a curb, the wheels point into the curb, so a vehicle that rolls away runs into the curb and stops.",
        context:
          "SGI's rule is one idea rather than four: turn the wheels so that if the vehicle rolls, it rolls into the curb, and where there is no curb, so that it rolls off the road rather than into traffic. The emergency brake goes on whenever you park on a slope.",
        trap:
          "The four cases in the handbook diagram look like four rules to memorise. They are one rule applied to two slopes and two kerb conditions.",
        excerptKey: "parking-hill",
        sourceLabel: "Saskatchewan Driver's Handbook - Parking on a hill",
        sourceUrl: hb(130),
      },
      {
        id: "sk_s2_28",
        topic: "safety",
        question:
          "How much of the road ahead should you be able to see, in seconds, to be driving within your headlights at night?",
        choices: ["Four seconds", "Eight seconds", "Twelve seconds", "Twenty seconds"],
        correctIndex: 2,
        explanation:
          "Twelve seconds. SGI says driving without a full 12 seconds of view ahead means you are over-driving your headlights and will not be able to stop for whatever they eventually pick out.",
        context:
          "Because of that, SGI expects you to be on high beam most of the time at night on an unlit road, and to be looking beyond the part of the road your lights reach. The same 12 seconds is the figure for fog, dust and heavy rain: if you cannot see that far, slow down until you can.",
        trap:
          "The instruction on seeing something ahead is to brake immediately, while you identify it, rather than to wait until you know what it is.",
        excerptKey: "overdriving-headlights",
        sourceLabel: "Saskatchewan Driver's Handbook - Choosing the right speed",
        sourceUrl: hb(74),
      },
      {
        id: "sk_s2_29",
        topic: "rightOfWay",
        question:
          "You are joining a provincial highway from a grid road. Who must you yield to?",
        choices: [
          "Only vehicles already on the highway",
          "Vehicles on the highway and any pedestrian closely approaching the intersection",
          "Nobody, if you are turning right",
          "Only traffic coming from your left",
        ],
        correctIndex: 1,
        explanation:
          "You yield to vehicles travelling on the provincial highway and to any pedestrian closely approaching the intersection. Turning right does not exempt you.",
        context:
          "The Act states the vehicle half plainly in section 219(4): before entering a highway, the driver of a vehicle shall yield the right of way to vehicles on the highway. Once you have yielded, you still may not proceed until it is safe.",
        trap:
          "Closing speed on a Saskatchewan highway is the difficulty. A vehicle that looks distant on a flat approach is doing 100 km/h and covers 320 metres in about twelve seconds.",
        excerptKey: "entering-provincial-highway",
        sourceLabel: "Saskatchewan Driver's Handbook - Right of way",
        sourceUrl: hb(60),
      },
      {
        id: "sk_s2_30",
        topic: "licensing",
        question:
          "A peace officer asks to see your driver's licence and you have left it at home. What happens?",
        choices: [
          "You are charged immediately with driving without a licence",
          "The officer may allow you up to 48 hours to produce it",
          "You have 30 days to bring it to a detachment",
          "Nothing, as long as you can state your licence number",
        ],
        correctIndex: 1,
        explanation:
          "The officer may allow up to 48 hours to produce the licence. SGI repeats the same 48 hours for the vehicle registration.",
        context:
          "The permission is discretionary rather than automatic, and it does not cure driving without a licence at all. Section 209.1 of the Act separately requires you to give your name, date of birth and address when stopped.",
        trap:
          "Forty-eight hours is not a grace period for a licence you do not hold. It only covers a valid licence you failed to carry.",
        excerptKey: "produce-licence-registration",
        sourceLabel: "Saskatchewan Driver's Handbook - Producing driver's licence and registration",
        sourceUrl: hb(176),
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Real Test Difficulty",
    difficulty: "medium",
    description:
      "Thirty-five questions pitched where the real SGI exams sit: the exact numbers, the signs that look like each other, and the rules whose exceptions are the point.",
    questions: [
      {
        id: "sk_s3_01",
        topic: "speed",
        question:
          "You are on a divided highway and an emergency vehicle is stopped with its lights on, on the opposite roadway. Must you slow to 60 km/h?",
        choices: [
          "Yes, the rule applies to every vehicle on the highway",
          "No, the rule does not apply to the opposite roadway of a divided highway",
          "Yes, but only if you can see the emergency vehicle",
          "No, but you must move to the left lane",
        ],
        correctIndex: 1,
        explanation:
          "This is the one exemption Saskatchewan gives. On a divided highway, a vehicle travelling on the opposite roadway from the stopped emergency vehicle is not caught by the 60 km/h rule.",
        context:
          "The same exemption is written into all four of the 60 km/h provisions: highway workers and equipment, emergency vehicles, tow trucks and service or escort vehicles. In every case it requires both a divided highway and the opposite roadway.",
        trap:
          "On an undivided highway the rule does apply to oncoming traffic, and SGI says so in terms. Divided is the operative word, and a painted centre line is not a division.",
        excerptKey: "act-emergency-60",
        sourceLabel: "The Traffic Safety Act, section 204",
        sourceUrl: act(162),
        commonlyMissed: true,
      },
      {
        id: "sk_s3_02",
        topic: "signs",
        question:
          "A yellow diamond shows a black arrow bending to the right, and another shows an arrow bending much more sharply with a speed tab. What distinguishes them?",
        choices: [
          "The first is a curve, the second a sharp curve with a recommended safe speed",
          "The first is a detour, the second a dead end",
          "The first applies to trucks only, the second to all vehicles",
          "The first is advisory, the second is enforceable",
        ],
        correctIndex: 0,
        explanation:
          "SGI signs a curve to the right ahead and a sharp curve to the right ahead separately, and pairs the sharper one with a recommended safe speed tab.",
        context:
          "That tab is a recommendation, not a limit, and it belongs to the yellow warning family. The enforceable number is always on a white regulatory sign. Chevrons, posted in groups, do a third job again: they guide you around a sharp curve once you are in it.",
        trap:
          "Learners treat the yellow speed tab as enforceable and brake hard at the sign. On a Saskatchewan highway approach that is its own hazard, and road-test candidates lose points for it.",
        excerptKey: "sign-recommended-speed",
        sourceLabel: "Saskatchewan Driver's Handbook - Warning signs",
        sourceUrl: hb(84),
        commonlyMissed: true,
      },
      {
        id: "sk_s3_03",
        topic: "safety",
        question:
          "You are meeting an oncoming vehicle at night with your high beams on. At what distance must you dim them?",
        choices: [
          "100 metres",
          "150 metres",
          "At least 200 metres",
          "500 metres",
        ],
        correctIndex: 2,
        explanation:
          "At least 200 metres, which SGI also gives as 650 feet, and they stay dimmed until the other vehicle has passed.",
        context:
          "Following another vehicle is a different number: low beam within 100 metres, or 330 feet. Spotlamps and auxiliary driving lights go off at 500 metres for an oncoming vehicle and within 500 metres of one you are following.",
        trap:
          "SGI says many drivers dim far too early. At 100 km/h the oncoming vehicle may still be seven or eight seconds away at the legal point, and going to low beam sooner than that costs you the sight distance you need.",
        excerptKey: "high-beam-200m",
        sourceLabel: "Saskatchewan Driver's Handbook - Headlights",
        sourceUrl: hb(72),
      },
      {
        id: "sk_s3_04",
        topic: "rules",
        question:
          "You want to make a U-turn in a 100 km/h area. How much clear sight distance does SGI say you need each way?",
        choices: [
          "10 seconds",
          "20 seconds",
          "40 seconds",
          "As much as it takes to see the next sign",
        ],
        correctIndex: 2,
        explanation:
          "Forty seconds of sight distance clear of vehicles in each direction. In a 60 km/h area the figure is 20 seconds.",
        context:
          "SGI applies the identical pair to a two-point turn. Before either manoeuvre you also have to confirm that no sign prohibits it and that you can complete the turn in one swing; if there is any doubt, the advice is to go around the block.",
        trap:
          "Sight distance is measured in seconds rather than metres because the speed is what matters. Forty seconds at 100 km/h is over a kilometre of empty road, which is more than most people expect to need.",
        excerptKey: "uturn-sight-distance",
        sourceLabel: "Saskatchewan Driver's Handbook - U-turns",
        sourceUrl: hb(131),
      },
      {
        id: "sk_s3_05",
        topic: "sharing",
        question:
          "A school bus is stopped with red lights flashing on the other side of a divided highway. What must you do?",
        choices: [
          "Stop 5 m back, the same as on any road",
          "Slow to 60 km/h and pass",
          "Nothing special: you are not required to stop",
          "Stop only if children are visible",
        ],
        correctIndex: 2,
        explanation:
          "You do not have to stop for a school bus when you are travelling in the opposite direction on a divided highway. On an undivided road you would.",
        context:
          "Section 212(4) of the Act writes the same exception, applying the opposite-direction stopping duty to a highway other than a divided highway. Some cities, towns and villages also have bylaws prohibiting the use of the flashing red stop lamps and stop arms entirely, and in those communities you may pass the bus.",
        trap:
          "Amber flashing lights are the warning, not the stop. Amber means slow down and proceed with caution; red plus the stop arm is what stops you.",
        excerptKey: "school-bus-divided",
        sourceLabel: "Saskatchewan Driver's Handbook - Sharing the road with school buses",
        sourceUrl: hb(37),
        commonlyMissed: true,
      },
      {
        id: "sk_s3_06",
        topic: "signs",
        question:
          "Which sign shape and colour combination states the law rather than warning about something?",
        choices: [
          "A yellow diamond",
          "An orange diamond",
          "A white rectangle or square",
          "A green rectangle",
        ],
        correctIndex: 2,
        explanation:
          "Regulatory signs are white rectangles or squares with black or other coloured lettering, and they state the law: speed limits, parking regulations, and turning and passing movements.",
        context:
          "The other members of SGI's six basic shapes each do a different job. The red octagon and the yield triangle are also regulatory in effect but keep their own shapes so they are readable when you cannot make out the words.",
        trap:
          "Green rectangles look official and carry no rule at all. Green indicates a permitted movement or gives directional guidance.",
        excerptKey: "sign-regulatory",
        sourceLabel: "Saskatchewan Driver's Handbook - Six basic sign shapes",
        sourceUrl: hb(76),
      },
      {
        id: "sk_s3_07",
        topic: "impairment",
        question:
          "SGI gives a rate at which alcohol leaves the body. What is it?",
        choices: [
          "About .005% per hour",
          "About .015% per hour",
          "About .05% per hour",
          "It depends entirely on body weight",
        ],
        correctIndex: 1,
        explanation:
          "SGI's worked example uses approximately .015% per hour, and the point of the example is that only time removes alcohol.",
        context:
          "The handbook then walks a driver from a BAC of .25 at midnight through to zero at 5 p.m. the following day, still legally intoxicated at 10 a.m. Sleep, coffee and a shower change none of it.",
        trap:
          "This is exactly the kind of detail Saskatchewan learners report being asked about, and it sits in a chapter people skim because it looks like health information rather than testable material.",
        excerptKey: "alcohol-elimination-rate",
        sourceLabel: "Saskatchewan Driver's Handbook - BAC and time",
        sourceUrl: hb(170),
        commonlyMissed: true,
      },
      {
        id: "sk_s3_08",
        topic: "rightOfWay",
        question:
          "You are in a parking lot, leaving a stall, and a vehicle is coming down the feeder lane. Who has the right of way?",
        choices: [
          "You, because you were there first",
          "The vehicle in the feeder lane",
          "Whichever driver is closest to the thoroughfare",
          "Neither: parking lots have no right of way rules",
        ],
        correctIndex: 1,
        explanation:
          "A vehicle leaving a parking stall yields to vehicles on the feeder lane. The Act writes a two-step hierarchy for lots.",
        context:
          "The second step is that a vehicle leaving a feeder lane yields to vehicles on a thoroughfare, which is the main road running into, through or out of the lot and which has no stalls opening off it. Where two feeder lanes cross with no signs, the ordinary yield-to-the-right rule applies.",
        trap:
          "Backing out of a stall is the most-collided-in manoeuvre in a lot, and the driver reversing has both the worst view and the lowest priority.",
        excerptKey: "act-parking-lot-yield",
        sourceLabel: "The Traffic Safety Act, section 211.1",
        sourceUrl: act(167),
      },
      {
        id: "sk_s3_09",
        topic: "safety",
        question:
          "Your vehicle starts to skid because you braked too hard on ice. What is the first thing SGI tells you to do?",
        choices: [
          "Steer into the skid and hold the brake",
          "Shift to neutral or declutch and get your foot off the brake",
          "Pull the parking brake",
          "Accelerate gently to regain traction",
        ],
        correctIndex: 1,
        explanation:
          "Shift to neutral, or declutch, and take your foot off the brake. That gets the wheels rolling again so they can steer, and stops the skid getting worse.",
        context:
          "SGI's single rule for every kind of skid is simpler than steering into it: look where you want to go and steer there. You will usually need to steer, counter-steer and then straighten out.",
        trap:
          "Locked wheels do not steer at all. Turning the wheel while they are locked does nothing except set up a spin the moment they grip again.",
        excerptKey: "skid-recovery",
        sourceLabel: "Saskatchewan Driver's Handbook - Skidding",
        sourceUrl: hb(151),
      },
      {
        id: "sk_s3_10",
        topic: "signs",
        question:
          "What is a checkerboard sign, and where does it appear?",
        choices: [
          "At the end of a road, where it comes to a stop",
          "At the start of a construction zone",
          "At a level railway crossing",
          "At the entrance to a provincial park",
        ],
        correctIndex: 0,
        explanation:
          "SGI lists the checkerboard under road ends. It appears where the road you are on simply stops, which on the rural grid can happen with very little notice.",
        context:
          "SGI warns that grid, municipal and resource access roads have shorter sight distances, sharper curves and many T-intersections where the road ends. It also signs a T-intersection warning separately for the same reason.",
        trap:
          "The chevron and the checkerboard both use black and yellow blocks but do different jobs. Chevrons guide you around a curve; a checkerboard tells you there is no more road.",
        excerptKey: "sign-chevron",
        sourceLabel: "Saskatchewan Driver's Handbook - Warning signs",
        sourceUrl: hb(85),
      },
      {
        id: "sk_s3_11",
        topic: "rules",
        question:
          "A solid line and a broken line run together down the middle of the highway, with the broken line on your side. May you cross to pass?",
        choices: [
          "No, a solid line always forbids crossing",
          "Yes, you may cross from the lane where the broken line is",
          "Only if the oncoming lane is empty for 100 metres",
          "Only where a passing permitted sign is posted",
        ],
        correctIndex: 1,
        explanation:
          "Where solid and broken lines exist together, the driver on the broken-line side may cross. The driver on the solid-line side may not.",
        context:
          "SGI states the general rule first: where a solid line separates lanes you may not move across it, with two exceptions, that pairing and a marked two-way left turn lane. The Act writes the same exceptions into section 228(1).",
        trap:
          "The line closest to you is the one that governs you. Reading the pair as a single double-solid prohibition means never passing where the law allows it, and reading it the other way is worse.",
        excerptKey: "markings-solid-line",
        sourceLabel: "Saskatchewan Driver's Handbook - Traffic lanes",
        sourceUrl: hb(45),
      },
      {
        id: "sk_s3_12",
        topic: "emergencies",
        question:
          "You have been in a collision. Which circumstance obliges you to report it to police?",
        choices: [
          "Any collision, no matter how minor",
          "Only collisions where someone is injured",
          "Injury or death, an unregistered vehicle, an unidentified vehicle, a vehicle towed from the scene, or an apparently impaired driver",
          "Only collisions where the damage exceeds $5,000",
        ],
        correctIndex: 2,
        explanation:
          "The Act sets out five triggers, and any one of them makes a police report mandatory. Everything else you settle by exchanging information.",
        context:
          "SGI's version adds out-of-province vehicles to the list. Where none of the triggers applies, you still have to give the other vehicle's owner your name, address, driver's licence number and any relevant insurance information.",
        trap:
          "The towing trigger is the one people miss. A vehicle that cannot be driven away turns a minor bump into a reportable collision even with no injuries.",
        excerptKey: "act-report-collision",
        sourceLabel: "The Traffic Safety Act, section 253(4)",
        sourceUrl: act(189),
      },
      {
        id: "sk_s3_13",
        topic: "signals",
        question:
          "A green light is showing and a pedestrian is still in the crosswalk when it changes to amber for them. Who has the right of way?",
        choices: [
          "The driver, once the signal has changed",
          "The pedestrian, who keeps the right of way",
          "Whoever entered the intersection first",
          "The driver, if the pedestrian started crossing late",
        ],
        correctIndex: 1,
        explanation:
          "If a traffic light changes while a pedestrian is in the crosswalk, the pedestrian has the right of way. The change does not transfer it mid-crossing.",
        context:
          "The Act also requires a driver facing an amber light at a place other than an intersection to yield to pedestrians in the crosswalk or pedestrian corridor. A flashing don't walk means the pedestrian should finish crossing if they have already started, not that they have lost their priority.",
        trap:
          "Countdown timers make drivers treat the last few seconds as theirs. They belong to the pedestrian already in the crosswalk.",
        excerptKey: "pedestrian-crosswalk-stop",
        sourceLabel: "Saskatchewan Driver's Handbook - Pedestrians",
        sourceUrl: hb(68),
      },
      {
        id: "sk_s3_14",
        topic: "speed",
        question:
          "A driver is caught going 50 km/h or more over the limit in Saskatchewan. What happens to the vehicle?",
        choices: [
          "Nothing, beyond the ticket",
          "It is impounded for 7 days",
          "It is impounded for 30 days",
          "It is forfeited to the Crown",
        ],
        correctIndex: 2,
        explanation:
          "Thirty days. SGI's impoundment chart puts excessive speeding, meaning 50 km/h or more over the posted limit or double the limit or more, at 30 days on each offence.",
        context:
          "The same 30 days covers stunting, racing, a contest of speed, and any Criminal Code offence that also constitutes an offence under The Traffic Safety Act. Failing to stop for a peace officer is a separate seven-day impoundment.",
        trap:
          "The impoundment happens even if you do not own the vehicle, and all the towing and storage costs fall on the owner.",
        excerptKey: "impound-rules-of-road",
        sourceLabel: "Saskatchewan Driver's Handbook - Vehicle impoundments",
        sourceUrl: hb(177),
      },
      {
        id: "sk_s3_15",
        topic: "signs",
        question:
          "Which of these signs is regulatory rather than a warning: a diamond showing two arrows pointing in opposite directions, or a white rectangle showing the same?",
        choices: [
          "The diamond is regulatory and the rectangle warns",
          "The white rectangle is regulatory and the diamond warns of two-way traffic ahead",
          "Both are regulatory",
          "Both are warnings",
        ],
        correctIndex: 1,
        explanation:
          "The white rectangle is the regulatory two-way traffic sign; the yellow diamond warns that two-way traffic is coming up. SGI prints both in the same book because they are so easily confused.",
        context:
          "The pairing runs through the sign chapters. Divided highway begins and divided highway ends are warning diamonds; one-way street or highway is a regulatory rectangle. Shape and colour carry the difference, not the symbol.",
        trap:
          "The symbol is identical in both cases. Answering from the picture rather than from the shape and colour is exactly how the sign exam catches people.",
        excerptKey: "sign-identify-shapes",
        sourceLabel: "Saskatchewan Driver's Handbook - Traffic signs",
        sourceUrl: hb(76),
      },
      {
        id: "sk_s3_16",
        topic: "safety",
        question:
          "You are the first vehicle at a collision scene and there is spilled fuel. What does SGI tell you to do first?",
        choices: [
          "Move the injured to the shoulder",
          "Turn off the ignitions of damaged vehicles and put out any cigarettes",
          "Photograph the scene before anything is disturbed",
          "Push the vehicles clear of the roadway",
        ],
        correctIndex: 1,
        explanation:
          "Protecting the scene comes first, and where fuel has spilled that means killing the ignitions of the damaged vehicles and extinguishing any smoking materials.",
        context:
          "SGI then asks you to warn approaching traffic with flares set well away from the scene or with two people signalling at each end, and to turn on the hazard lights of every undamaged vehicle at the scene. That matters most in darkness or poor visibility.",
        trap:
          "Injured people should be moved only if they are in danger of drowning, suffocating, burning or being electrocuted. Moving them otherwise can turn a spinal injury into a permanent one.",
        excerptKey: "collision-move-injured",
        sourceLabel: "Saskatchewan Driver's Handbook - What to do if you're in a collision",
        sourceUrl: hb(159),
      },
      {
        id: "sk_s3_17",
        topic: "rightOfWay",
        question:
          "You have the right of way at an intersection and another driver pulls out in front of you anyway. What does SGI say your responsibility is?",
        choices: [
          "Hold your line, because the right of way is yours",
          "Sound your horn and continue",
          "Avoid the collision rather than insist on your right of way",
          "Brake only if a collision is certain",
        ],
        correctIndex: 2,
        explanation:
          "SGI puts it as a moral and legal responsibility to avoid collisions. Having the right of way does not relieve you of it.",
        context:
          "The same idea appears throughout the handbook: after yielding you may not proceed until it is safe, and nothing in the pedestrian rules relieves a driver of the duty to exercise due care. Right of way is something you give, not something you take.",
        trap:
          "This one gets answered from a sense of fairness rather than from the book. Being right is not a defence to a collision you could have avoided.",
        excerptKey: "avoid-collision-duty",
        sourceLabel: "Saskatchewan Driver's Handbook - Right of way",
        sourceUrl: hb(62),
      },
      {
        id: "sk_s3_18",
        topic: "sharing",
        question:
          "You are following a large truck on a Saskatchewan highway. What does SGI's rule of thumb about mirrors tell you?",
        choices: [
          "If you can see the truck's mirrors, the driver can see you",
          "If you can see the truck's mirrors, you are too close",
          "The truck's mirrors show only the trailer, never traffic",
          "Mirrors are irrelevant if your headlights are on",
        ],
        correctIndex: 0,
        explanation:
          "SGI's rule is the negative form of the same thing: if you cannot see the large truck's mirrors, the truck driver cannot see you.",
        context:
          "A truck's blind spots are much bigger than a car's on both sides, and there are deep ones directly behind and in front. In poor weather the exterior mirrors get spotted with rain and dirt, and the driver has no interior mirror at all.",
        trap:
          "When you have passed a truck, you have to see the entire cab in your rear-view mirror before pulling back in. Cutting in early leaves the truck driver no room and no time.",
        excerptKey: "truck-mirrors",
        sourceLabel: "Saskatchewan Driver's Handbook - Sharing the road with large trucks",
        sourceUrl: hb(34),
      },
      {
        id: "sk_s3_19",
        topic: "parking",
        question:
          "Where does the shoulder of a Saskatchewan highway stand in relation to parking rules?",
        choices: [
          "It is always available for parking",
          "It counts as part of a no-parking zone the minister has established",
          "It may be used for parking only at night",
          "It may be used for parking only by commercial vehicles",
        ],
        correctIndex: 1,
        explanation:
          "Where a no-parking zone has been established, the prohibition expressly includes the portion of the roadway right of the solid white line commonly called the shoulder.",
        context:
          "That does not make the shoulder useless. SGI lists what it is for: stopped vehicles, emergency manoeuvres, two-point turns, and preparing to turn right off a highway. What it is not is an extra driving lane or a parking bay in a signed zone.",
        trap:
          "The phrase in the Act is deliberate, because drivers argue that the shoulder is not the road. In a no-parking zone it is.",
        excerptKey: "act-no-parking-shoulder",
        sourceLabel: "The Traffic Safety Act, section 210(2)",
        sourceUrl: act(166),
      },
      {
        id: "sk_s3_20",
        topic: "signs",
        question:
          "You approach a railway crossing with flashing red lights but no gates, and no train is in sight. What are you permitted to do?",
        choices: [
          "Cross without stopping, since there are no gates",
          "Stop, then cross while the lights flash if it is safe",
          "Wait until the lights stop flashing, whatever happens",
          "Cross only if a signal person waves you through",
        ],
        correctIndex: 1,
        explanation:
          "At crossings without gates you may cross after stopping, while the red lights are flashing, if it is safe to do so. A closely approaching train or a signal person's instruction to stop overrides that.",
        context:
          "Where gates are down the answer is different and absolute: you do not cross until they are raised, and driving around them is against the law. Some crossings also carry an advance flashing amber light warning of a train ahead at a concealed crossing.",
        trap:
          "After a train has passed, SGI warns against starting up until you are sure nothing is coming on another track, especially from the other direction.",
        excerptKey: "railway-flashing-lights",
        sourceLabel: "Saskatchewan Driver's Handbook - Automatic protected crossings",
        sourceUrl: hb(88),
      },
      {
        id: "sk_s3_21",
        topic: "rules",
        question:
          "You are on a freeway and realise you have missed your exit. What does SGI tell you to do?",
        choices: [
          "Reverse carefully along the shoulder to the ramp",
          "Stop on the shoulder and wait for a gap to cross back",
          "Continue to the next interchange and come back",
          "Use the median crossover reserved for emergency vehicles",
        ],
        correctIndex: 2,
        explanation:
          "Carry on to the next interchange and return. Stopping on the freeway and backing up on it are both ruled out.",
        context:
          "The Act reinforces the second half: you may not enter or leave a controlled access highway except where signs say you may, and you may not drive over a median except at a crossover or intersection established by the authority with jurisdiction.",
        trap:
          "The median crossover is not a public shortcut. Section 229(2) forbids driving or attempting to drive over the median outside an established crossover.",
        excerptKey: "freeway-miss-exit",
        sourceLabel: "Saskatchewan Driver's Handbook - If you miss an exit",
        sourceUrl: hb(135),
      },
      {
        id: "sk_s3_22",
        topic: "safety",
        question:
          "How does SGI describe the correct way to use anti-lock brakes in an emergency stop?",
        choices: [
          "Pump the pedal rapidly",
          "Press firmly and do not release until the vehicle has stopped",
          "Press until the pedal pulses, then ease off",
          "Use the parking brake at the same time",
        ],
        correctIndex: 1,
        explanation:
          "Press the brake firmly and hold it. The pulsing pedal, the shudder and the clunking noises are the system working, not a fault.",
        context:
          "SGI warns that a driver startled by the pulsing releases the pedal, which is exactly the wrong response. It also cautions that ABS does not shorten stopping distances on gravel, slush and snow, where you should allow more room than with conventional brakes.",
        trap:
          "The reason ABS exists is steering, not stopping. On dry or wet pavement your stopping distance is about the same as conventional brakes; what you gain is the ability to steer while braking hard.",
        excerptKey: "abs-use",
        sourceLabel: "Saskatchewan Driver's Handbook - Braking",
        sourceUrl: hb(147),
      },
      {
        id: "sk_s3_23",
        topic: "signals",
        question:
          "You want to change lanes and there is an intersection just ahead. What does SGI tell you to do?",
        choices: [
          "Signal and change lanes inside the intersection",
          "Finish the lane change and cancel the signal before entering the intersection, or wait until you are through it",
          "Change lanes without signalling to avoid confusion",
          "Stop before the intersection and change lanes from a standstill",
        ],
        correctIndex: 1,
        explanation:
          "Complete the change and cancel the signal before you enter, or wait until you are through and then signal and change. Either way the manoeuvre does not happen in the intersection.",
        context:
          "SGI's reason is that a signal flashing inside an intersection is ambiguous: other drivers read it as a turn. Keeping the two movements separate is what keeps the intersection readable.",
        trap:
          "A left signal held on while you drift across lanes in an intersection tells the oncoming driver that you are turning left in front of them.",
        excerptKey: "signal-before-intersection",
        sourceLabel: "Saskatchewan Driver's Handbook - Turn signals",
        sourceUrl: hb(47),
      },
      {
        id: "sk_s3_24",
        topic: "signs",
        question:
          "What does an orange sign showing a rough black edge along a lane line, described as a pavement drop-off, warn you about?",
        choices: [
          "The road surface has been removed entirely",
          "The adjacent lane or shoulder is lower or higher than your travel lane",
          "There is a pothole ahead",
          "The pavement ends and gravel begins",
        ],
        correctIndex: 1,
        explanation:
          "It warns that either the adjacent lane or the shoulder, or both, sit at a different height from the lane you are travelling in.",
        context:
          "That difference in height is what makes a wandering wheel dangerous in a work zone. SGI signs the separate case of pavement ends where the continuation has a gravel surface, and grooved pavement ahead where the surface has been scarified.",
        trap:
          "SGI's advice for dropping a wheel off a soft shoulder is the answer here too: do not jerk the wheel back and do not brake hard. Steer straight along the edge, slow gradually, then ease back on.",
        excerptKey: "sign-pavement-dropoff",
        sourceLabel: "Saskatchewan Driver's Handbook - Construction signs",
        sourceUrl: hb(87),
      },
      {
        id: "sk_s3_25",
        topic: "speed",
        question:
          "A tow truck is stopped on the roadside with amber and blue lights flashing, helping a disabled vehicle. What must you do?",
        choices: [
          "Change lanes if you can, but keep your speed",
          "Reduce speed to 60 km/h when passing",
          "Reduce speed to 30 km/h when passing",
          "Stop until the tow truck's lights go off",
        ],
        correctIndex: 1,
        explanation:
          "Sixty kilometres an hour, the same number as for stopped emergency vehicles and highway equipment.",
        context:
          "The Act extends the identical rule to service vehicles, escort vehicles and any vehicle creating a hazard on the highway while it assists another vehicle with a defect or disability in its means of motion. Every one of them carries the same divided-highway exemption.",
        trap:
          "Amber and blue on a tow truck look like a warning to a driver used to amber-only hazard lights. In Saskatchewan they are the trigger for a 60 km/h limit.",
        excerptKey: "tow-truck-sharing",
        sourceLabel: "Saskatchewan Driver's Handbook - Sharing the road with tow trucks",
        sourceUrl: hb(41),
      },
      {
        id: "sk_s3_26",
        topic: "emergencies",
        question:
          "A downed power line is lying across your vehicle after a collision. What should you do?",
        choices: [
          "Get out quickly and move away from the vehicle",
          "Stay in the vehicle and call SaskPower or 9-1-1",
          "Push the line off with a dry wooden object",
          "Drive clear of the line before stopping",
        ],
        correctIndex: 1,
        explanation:
          "Stay in the vehicle and call for help. SGI gives SaskPower's number for the situation and says to call 9-1-1 in an emergency and stay put until help arrives.",
        context:
          "The exception is fire. If the vehicle is burning and you must get out, you stand in the doorway with your feet together and your arms crossed, jump clear so you land with both feet together, touch nothing, and hop at least 10 metres away.",
        trap:
          "Stepping out normally puts one foot on the ground while the other is still on the vehicle, which is how the current finds a path through you.",
        excerptKey: "power-line",
        sourceLabel: "Saskatchewan Driver's Handbook - Power lines",
        sourceUrl: hb(160),
      },
      {
        id: "sk_s3_27",
        topic: "rules",
        question:
          "You are making a right turn and a vehicle is parked in the curb lane close to the corner. What does SGI require?",
        choices: [
          "Turn from the main driving lane, going around the parked vehicle",
          "Move into the curb lane at the first opportunity before turning, keeping as close to the curb as possible",
          "Stop behind the parked vehicle and wait for it to move",
          "Signal early and take whichever lane is clearer",
        ],
        correctIndex: 1,
        explanation:
          "You move into that lane at the first opportunity before the turn and keep as close to the right curb or edge as possible. SGI adds in terms that drivers may not make turns from the main driving lane.",
        context:
          "The mirror-image rule applies to a left turn from a one-way street where a vehicle is parked in the left curb lane. Section 218(1) of the Act requires the right turn to be approached and made as closely as possible to the right-hand curb or edge.",
        trap:
          "Turning from the through lane leaves a gap on your right wide enough for a cyclist, which is exactly the collision SGI warns about on the bicycle pages.",
        excerptKey: "right-turn-parked-car",
        sourceLabel: "Saskatchewan Driver's Handbook - Right turns",
        sourceUrl: hb(54),
      },
      {
        id: "sk_s3_28",
        topic: "safety",
        question:
          "SGI tells you not to use cruise control in certain conditions. Which list is right?",
        choices: [
          "On wet or slippery roads, on gravel, in urban areas, and where your vision is restricted",
          "Only on gravel",
          "Only in urban areas",
          "Only when towing a trailer",
        ],
        correctIndex: 0,
        explanation:
          "SGI names all of these: urban areas, wet or slippery roads, traffic where the speed is highly variable, and any situation where your vision is restricted. The skidding section adds gravel explicitly.",
        context:
          "The reason is that cruise control keeps applying power when the tyres lose grip, which is precisely how a slippery-surface skid starts. SGI lists using cruise control on wet or slippery roads among the temptations to resist in winter.",
        trap:
          "Black ice is the case that makes this matter. SGI describes it as a thin layer of transparent ice, which means the road looks clear right up to the moment the cruise control tries to hold your speed through it.",
        excerptKey: "black-ice-cruise",
        sourceLabel: "Saskatchewan Driver's Handbook - Driving on slippery surfaces",
        sourceUrl: hb(143),
      },
      {
        id: "sk_s3_29",
        topic: "signs",
        question:
          "What does a white regulatory sign with a red circle and slash over a U-shaped arrow mean, and where does it most often appear?",
        choices: [
          "No U-turn, and it appears where turning around would be dangerous or obstruct traffic",
          "No left turn, at busy intersections",
          "No entry, at the exit of a one-way street",
          "No stopping, near a fire hall",
        ],
        correctIndex: 0,
        explanation:
          "It is the no U-turn sign. SGI's caption spells the prohibition out: you must not turn your vehicle around in the roadway to travel in the opposite direction.",
        context:
          "There is a matching permissive sign for U-turn permitted. At any intersection controlled by traffic lights the default runs the other way: U-turns are prohibited unless a sign says they are allowed.",
        trap:
          "The absence of a no U-turn sign does not mean a U-turn is allowed at a signalled intersection. There, you need a sign saying it is.",
        excerptKey: "sign-no-u-turn",
        sourceLabel: "Saskatchewan Driver's Handbook - Regulatory signs",
        sourceUrl: hb(79),
      },
      {
        id: "sk_s3_30",
        topic: "sharing",
        question:
          "A funeral procession is passing through an intersection where you have a green light. What are you permitted to do?",
        choices: [
          "Drive through the procession as soon as there is a gap",
          "Proceed, because a green light overrides the procession",
          "Stop and let the procession pass, and never drive through or obstruct it",
          "Sound your horn to ask the procession to stop",
        ],
        correctIndex: 2,
        explanation:
          "You may not drive through, interfere with or obstruct a funeral procession. SGI says processions should not be interfered with or interrupted.",
        context:
          "The Act qualifies the point in the other direction: a person is not treated as having driven through or obstructed a procession if they proceed through an intersection when they have the right of way, and a procession may itself proceed through an uncontrolled intersection during daylight if the other traffic has yielded.",
        trap:
          "Processions do have to obey signs and signals, unless drivers with the right of way stop to let them through. The privilege is courtesy backed by law, not an exemption from the lights.",
        excerptKey: "funeral-procession",
        sourceLabel: "Saskatchewan Driver's Handbook - Sharing the road with funeral processions",
        sourceUrl: hb(41),
      },
      {
        id: "sk_s3_31",
        topic: "signs",
        question:
          "A sign shows a black diagonal line pattern angled down towards the left. What is it telling you?",
        choices: [
          "The road curves left ahead",
          "The pavement is grooved on the left half",
          "A truck entrance is on the left",
          "There is a hazard close to the edge of the road, and the downward lines show the side you may safely pass on",
        ],
        correctIndex: 3,
        explanation:
          "It is the hazard marker for an obstruction close to the edge of the road, and the direction the stripes slope down tells you which side to pass on.",
        context:
          "SGI has a separate sign for an obstruction you may pass on either side, showing arrows both ways, and another for keep to the right of traffic islands. All three exist because a bridge pier or an island can be invisible until your headlights reach it.",
        trap:
          "The stripes are the instruction, not decoration. Reading the sign and then passing on the wrong side puts you into the obstruction it was marking.",
        excerptKey: "sign-hazard-marker",
        sourceLabel: "Saskatchewan Driver's Handbook - Warning signs",
        sourceUrl: hb(86),
      },
      {
        id: "sk_s3_32",
        topic: "rightOfWay",
        question:
          "At an RCUT, or restricted crossing U-turn, on a four-lane divided highway, what may you not do?",
        choices: [
          "Turn right onto the highway",
          "Change lanes after joining the highway",
          "Make a U-turn in the designated lane",
          "Turn left or drive straight across the divided highway",
        ],
        correctIndex: 3,
        explanation:
          "At an RCUT you may not turn left and you may not drive straight through to cross the divided highway. You turn right, then make a U-turn.",
        context:
          "The whole design exists to remove the crossing conflict that causes collisions when drivers try to get across four lanes at once. After the U-turn you signal, check mirrors, shoulder check and change lanes for every lane you cross.",
        trap:
          "It looks like an ordinary intersection from the approach. The habit of turning left is the one the layout is built to defeat.",
        excerptKey: "rcut",
        sourceLabel: "Saskatchewan Driver's Handbook - Restricted crossing U-turn",
        sourceUrl: hb(67),
      },
      {
        id: "sk_s3_33",
        topic: "licensing",
        question:
          "You have moved within Saskatchewan. How long do you have to tell SGI about the change of address?",
        choices: ["7 days", "15 days", "30 days", "90 days"],
        correctIndex: 1,
        explanation:
          "Fifteen days, in writing or at a motor licence issuer's office. The same 15 days applies to a change of name.",
        context:
          "A change of name or date of birth also needs a legal document supporting it. Address changes can be done through MySGI, or through the ExpressAddress service, which notifies several other provincial and municipal organisations at the same time.",
        trap:
          "Ninety days is the new-resident window for exchanging an out-of-province licence and registering a vehicle. It has nothing to do with an address change inside the province.",
        excerptKey: "change-of-address",
        sourceLabel: "Saskatchewan Driver's Handbook - Change of name or address",
        sourceUrl: hb(14),
      },
      {
        id: "sk_s3_34",
        topic: "safety",
        question:
          "Saskatchewan collision statistics single out one period of the year for the highest total number of collisions. Which?",
        choices: [
          "May and June",
          "August and October",
          "November and December",
          "February and March",
        ],
        correctIndex: 2,
        explanation:
          "SGI says November and December usually have the highest total number of collisions, which lines up with its winter chapter putting most collisions between November and March.",
        context:
          "The severity picture is different from the volume picture. August and October are when the most severe collisions and the most traffic deaths occur, and most collisions of any kind happen at peak traffic times in the late afternoon and early evening.",
        trap:
          "May and June belong to a different statistic entirely: they are the peak months for animals on the road, along with late fall and early winter.",
        excerptKey: "collision-stats",
        sourceLabel: "Saskatchewan Driver's Handbook - Understanding collisions",
        sourceUrl: hb(158),
      },
      {
        id: "sk_s3_35",
        topic: "parking",
        question:
          "Before you begin to parallel park, how much longer than your vehicle should the space be?",
        choices: [
          "Half a metre",
          "Enough that you can pull in without reversing",
          "At least 4 m",
          "At least 2 m",
        ],
        correctIndex: 3,
        explanation:
          "SGI says to check that you have at least 2 m more than the length of your vehicle before committing to the space.",
        context:
          "The method it teaches then starts with your car parallel to the vehicle in front, about half a metre out, back bumpers lined up. You shift into reverse early, partly to bring the back-up lights on for the traffic behind you.",
        trap:
          "The front-end swing is the part that catches people. As you begin reversing, the nose of your car sweeps out into the traffic lane, so the check for oncoming vehicles has to happen before you turn the wheel.",
        excerptKey: "parallel-park-space",
        sourceLabel: "Saskatchewan Driver's Handbook - Parallel parking",
        sourceUrl: hb(127),
      },
    ],
  },
];
