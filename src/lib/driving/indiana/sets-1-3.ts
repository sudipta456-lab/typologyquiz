import type { DrivingTestSet } from "../types";

// Every fact below was checked against the Indiana Driver's Manual, published
// by the Indiana Bureau of Motor Vehicles and read from the BMV's own PDF
// (both the single-file edition and the per-chapter PDFs the questions link
// to), plus five in.gov/bmv pages carrying rules the manual states nowhere.
//
// Four things are worth naming up front, because a learner studying only the
// manual will walk into them.
//
// 1. Indiana's knowledge exam is SECTIONED. The BMV splits it into a signs
//    component and a traffic-rules component and requires 80 percent or higher
//    on EACH one - clearing the paper overall is not enough. Chapter 9 of the
//    manual and the BMV's Knowledge Exam page both say so.
// 2. Neither the manual nor any BMV page states how many questions the driver
//    knowledge exam contains, or how long you get. The 25-question, miss-five
//    figure printed in Chapter 9 belongs to the FOR-HIRE and MOTOR DRIVEN CYCLE
//    endorsement exams, not to the driver exam. Nothing here asserts a count.
// 3. Indiana's unposted speed limits are a five-way split - 70 rural
//    interstate, 60 rural state divided highway, 55 urban interstate and
//    non-divided state highway and county road, 30 urban residential, 15 alley.
//    The 60 is the one that catches people, because most states have no such
//    tier and the neighbouring guess is 55.
// 4. Indiana resolves a simultaneous arrival by saying the vehicle on the LEFT
//    shall yield, rather than "yield to the driver on your right". Same
//    outcome, opposite phrasing, and the manual uses its own wording at
//    all-way stops, at flashing reds and at dark signals.
//
// Two genuine conflicts between official Indiana sources are flagged where they
// arise, and no question is built on the disputed number:
//  - Chemical test refusal. Chapter 5 of the manual gives a flat one-year
//    suspension for refusing, and two years with a prior OWI conviction. The
//    BMV's Common Traffic Violations page says "up to two years" for refusal
//    generally and "up to 180 days" for a failed test. The manual's figures are
//    the specific ones and are what the questions use.
//  - Telecommunications devices. Chapter 1 states the older texting rule
//    (typing, transmitting or reading a text or email, unless hands-free),
//    while Chapter 7 states the broader current rule (no use of the device at
//    all except hands-free or a 911 call). Chapter 1's probationary paragraph
//    is broader still. Questions are built on Chapter 7, which is the section
//    the exam draws its traffic rules from.
//
// Questions are original. Explanations, context notes and trap notes are
// written from scratch; the deep link is there so the learner reads the BMV's
// own authoritative wording on the state's site.
const CH = (n: number | string) =>
  `https://www.in.gov/bmv/licenses-permits-ids/files/Drivers_Manual_Chapter_${n}.pdf`;
const EXAM_PAGE =
  "https://www.in.gov/bmv/licenses-permits-ids/learners-permits-and-drivers-licenses-overview/learners-permit/knowledge-exam/";
const PERMIT_PAGE =
  "https://www.in.gov/bmv/licenses-permits-ids/learners-permits-and-drivers-licenses-overview/learners-permit/";

export const indianaSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Indiana Basics",
    difficulty: "starter",
    description:
      "The rules you meet on your first drive in Indiana: what the shapes and colours mean, who goes first, and the numbers the BMV's two-part knowledge exam expects you to know cold.",
    questions: [
      {
        id: "in_s1_01",
        topic: "signs",
        question:
          "You reach an eight-sided sign at an intersection. What does the shape tell you Indiana requires?",
        choices: [
          "Stop, then yield the appropriate right of way before going on",
          "Slow down and continue if nothing is coming",
          "Yield only to traffic already in the intersection",
          "Stop only when a pedestrian is waiting",
        ],
        correctIndex: 0,
        explanation:
          "Eight sides means stop in Indiana, and the manual pairs the two duties together: you stop, and then you give way to whoever has the right of way before you move off.",
        context:
          "Indiana teaches signs by shape and colour first, because both read at a distance and in bad light before any word does. Eight sides is reserved for STOP, an equilateral triangle for YIELD, a diamond for a hazard warning and five sides for a school area. The BMV's exam has an entire component devoted to signs, and Chapter 6 is where those items come from.",
        trap:
          "Stopping is only half the rule. A driver who stops and then pulls out in front of cross traffic has still failed to yield.",
        excerptKey: "shape-octagon",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Traffic Sign Shapes",
        sourceUrl: CH(6),
      },
      {
        id: "in_s1_02",
        topic: "signals",
        question: "You are facing a steady red light. When may you enter the intersection?",
        choices: [
          "As soon as cross traffic has cleared",
          "Once the light facing you turns green and the intersection is clear",
          "After counting to three at the stop line",
          "Whenever no pedestrian is using the crosswalk",
        ],
        correctIndex: 1,
        explanation:
          "A red light hands the right of way to traffic coming from the other directions. You wait for your own signal to turn green, and even then you only go if the intersection is actually clear.",
        context:
          "Indiana's signal rules run in a simple order: green means you may go if the way is clear, steady yellow means your right of way is ending, and red means stop and stay stopped. Turns on red are the narrow exception and carry their own conditions. A green light never entitles you to drive into a blocked intersection.",
        trap:
          "An empty cross street does not turn red into green. Only the signal releases you, and the turns on red are narrow exceptions with conditions of their own.",
        excerptKey: "red-light",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Traffic Signals",
        sourceUrl: CH(6),
      },
      {
        id: "in_s1_03",
        topic: "speed",
        question:
          "You are driving through a residential street in an Indiana city and there is no speed limit sign. What is the limit?",
        choices: ["30 mph", "25 mph", "20 mph", "35 mph"],
        correctIndex: 0,
        explanation:
          "Most urban residential areas in Indiana run at 30 mph unless a sign says otherwise. It is a higher default than several neighbouring states use, so it is worth committing to memory rather than guessing.",
        context:
          "Indiana publishes a whole ladder of unposted limits rather than one blanket number: 70 on a rural interstate, 60 on a rural state divided highway, 55 on an urban interstate, a non-divided state highway or a county road, 30 in most urban residential areas and 15 in an alley. An urban area for this purpose means a population of at least 50,000. A posted sign always overrides the default.",
        trap:
          "25 is the residential default in many states, but not in Indiana. The manual's own figure is 30.",
        excerptKey: "residential-30",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Urban Speed Limits",
        sourceUrl: CH(7),
        commonlyMissed: true,
      },
      {
        id: "in_s1_04",
        topic: "rightOfWay",
        question:
          "Three cars reach an Indiana all-way stop one after another. In what order do they go?",
        choices: [
          "The first vehicle to stop is the first to proceed",
          "Whoever signals their intention first",
          "Vehicles going straight, then vehicles turning",
          "Whoever is on the widest street",
        ],
        correctIndex: 0,
        explanation:
          "Indiana settles an all-way stop by order of stopping. The first driver to come to a stop is the first to move off, then the second, and so on down the queue.",
        context:
          "Note the wording the manual chooses: it is the first vehicle to STOP, not the first to arrive. Only when two drivers stop at the same moment does the tie-break come into play, and Indiana states that one as the vehicle on the left yielding. The manual adds a plain instruction on top of both: if there is any doubt at all, give way rather than risk it.",
        trap:
          "A turn signal announces what you intend to do. It does not move you up the queue.",
        excerptKey: "all-way-stop-first",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, All-Way Stops",
        sourceUrl: CH(7),
      },
      {
        id: "in_s1_05",
        topic: "rules",
        question: "On an Indiana road, what does a yellow line between lanes tell you?",
        choices: [
          "The lane to its right is for turning only",
          "Both lanes carry traffic in your direction",
          "Traffic on the far side is going the opposite way",
          "The road narrows ahead",
        ],
        correctIndex: 2,
        explanation:
          "Yellow separates traffic moving in opposite directions. White separates lanes moving the same way, which is why the colour matters more than the line pattern when you are deciding what is on the other side.",
        context:
          "Once you have the colour, the pattern tells you what you may do. A broken yellow line may be crossed to pass when it is safe. A solid yellow line on your side should not be crossed except to turn. A broken white line may be crossed to change lanes; a solid white line should not be. Getting colour and pattern the wrong way round is one of the commonest mistakes on the rules component.",
        trap:
          "Colour is about direction, not permission. A broken yellow line still separates you from oncoming traffic even though you may cross it to pass.",
        excerptKey: "yellow-lane-markings",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Lane Markings",
        sourceUrl: CH(7),
      },
      {
        id: "in_s1_06",
        topic: "safety",
        question: "Who has to wear a seat belt in a moving vehicle in Indiana?",
        choices: [
          "The driver and front-seat passengers only",
          "Anyone under 18",
          "The driver and all passengers",
          "Everyone except passengers in a vehicle with air bags",
        ],
        correctIndex: 2,
        explanation:
          "Indiana requires the driver and every passenger to be belted whenever the vehicle is in operation. There is no back-seat exemption and no adult exemption.",
        context:
          "The manual treats belts and air bags as one system rather than alternatives, and says outright that a belt must be worn even in a car with one or more air bags, because the bag is designed to work with the belt and can injure an unrestrained occupant. It lists a set of narrow exemptions - a documented medical reason, a child in a proper restraint, certain delivery and farm and utility work - and nothing else. Passengers under eight need a child restraint system, not just a belt.",
        trap:
          "Air bags do not replace the belt. The manual says the opposite: failing to belt up is what turns the bag into an injury risk.",
        excerptKey: "seat-belt-all-times",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Seat Belts",
        sourceUrl: CH(7),
      },
      {
        id: "in_s1_07",
        topic: "licensing",
        question:
          "You are 16, have not taken a driver education course, and want an Indiana learner's permit. What do you need?",
        choices: [
          "Proof of enrolment in a behind-the-wheel course",
          "Documents, a vision screening and a passed knowledge exam",
          "Nothing beyond a parent's signature",
          "A completed 50-hour driving log",
        ],
        correctIndex: 1,
        explanation:
          "At 16 you can get a permit without any driver education: identity, lawful status, Social Security and residency documents, a vision screening and a passed knowledge exam are what the BMV asks for.",
        context:
          "Driver education only matters for the age at which the door opens. Enrol in an approved behind-the-wheel course and you can apply for a permit at 15; without one you wait until 16. The same trade-off appears again at licence stage, where completing an approved programme lets you apply at 16 and skipping it pushes you to 16 years and 270 days.",
        trap:
          "The 50-hour driving log belongs to the licence application, not the permit. You cannot log supervised practice before you hold a permit to do it on.",
        excerptKey: "bmv-permit-15-driver-ed",
        sourceLabel: "Indiana BMV - Learner's Permit",
        sourceUrl: PERMIT_PAGE,
      },
      {
        id: "in_s1_08",
        topic: "signs",
        question: "What does a red background on an Indiana traffic sign signal?",
        choices: [
          "A nearby recreational or cultural site",
          "A regulation needing immediate action to avoid a safety threat",
          "Temporary conditions through a work zone",
          "Guidance toward highway entrances and exits",
        ],
        correctIndex: 1,
        explanation:
          "Red is reserved for regulations that require you to act at once to avoid a danger. WRONG WAY is the manual's own example.",
        context:
          "Indiana lists seven sign colours and gives each a job. Brown is recreational and cultural, blue is road services, green is guidance and direction, orange warns of temporary conditions, white carries regulations such as speed limits, yellow and fluorescent yellow-green warn of conditions and school areas ahead, and red is the urgent regulation. Learn the seven and the sign component stops being a memory test.",
        trap:
          "White also carries regulations, including NO TURN ON RED. Red is the narrower category: the rule you have to obey immediately or risk a collision.",
        excerptKey: "sign-red",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Traffic Sign Colors",
        sourceUrl: CH(6),
      },
      {
        id: "in_s1_09",
        topic: "signals",
        question: "A steady yellow light comes on as you approach an intersection. What does it mean?",
        choices: [
          "Speed up so you clear the intersection before red",
          "You may proceed only after yielding to pedestrians",
          "Cross traffic is about to be released",
          "The green has ended and the signal is about to turn red",
        ],
        correctIndex: 3,
        explanation:
          "Steady yellow is the end of your green, not a bonus. The signal is about to go red and your right of way is running out.",
        context:
          "Indiana adds one practical rider: if you are already so close that stopping safely is not possible, you may complete your movement through the intersection. That is a safety allowance, not permission to keep going. The manual's advice to new drivers is blunter still - unless you are already in the intersection when the light turns yellow, you should not enter it.",
        trap:
          "Treating yellow as a cue to accelerate is exactly backwards. The default response is to stop if you safely can.",
        excerptKey: "yellow-light",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Driving through an Intersection",
        sourceUrl: CH(6),
      },
      {
        id: "in_s1_10",
        topic: "sharing",
        question:
          "A school bus ahead of you has stopped with its red lights flashing and the stop arm out. What must you do?",
        choices: [
          "Pass slowly on the left if no children are visible",
          "Sound your horn and continue at reduced speed",
          "Stop",
          "Stop only if you are behind the bus",
        ],
        correctIndex: 2,
        explanation:
          "Red lights plus an extended stop arm means stop. The amber lights that came before were the warning; the red ones are the order.",
        context:
          "Indiana runs a two-stage bus signal. Amber lights mean the bus is slowing to load or unload, so you should already be preparing to stop by the time the reds come on. There is one narrow exception to the stop: on a roadway divided by a barrier or an unimproved median, only traffic travelling the same way as the bus has to stop. The penalties are criminal rather than a ticket - a Class A misdemeanour, rising to a felony if someone is hurt or killed.",
        trap:
          "A painted centre line is not a barrier or an unimproved median. On an ordinary undivided road, oncoming traffic stops too.",
        excerptKey: "school-bus-stop-required",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, School Buses",
        sourceUrl: CH(7),
        commonlyMissed: true,
      },
      {
        id: "in_s1_11",
        topic: "parking",
        question: "How close to a fire hydrant may you park in Indiana?",
        choices: [
          "No closer than 15 feet",
          "No closer than 10 feet",
          "No closer than 20 feet",
          "Any distance, as long as the hydrant stays visible",
        ],
        correctIndex: 0,
        explanation:
          "Indiana's prohibited-parking list puts the hydrant limit at 15 feet, and adds fire lanes to the same line.",
        context:
          "The manual gives a single list of places you may not leave a vehicle: highways unless posted otherwise, inside intersections or on crosswalks, on sidewalks or in front of any driveway, within 15 feet of a hydrant or in a fire lane, on bridges and other elevated structures, next to a yellow curb, alongside another parked vehicle, in an accessible space without a placard, and in the diagonally striped area beside one. That striped area is off limits even to placard holders.",
        trap:
          "Ten feet is the figure several other states use. Indiana's is 15.",
        excerptKey: "parking-hydrant-15",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Illegal Parking Areas",
        sourceUrl: CH(7),
      },
      {
        id: "in_s1_12",
        topic: "impairment",
        question:
          "At what blood alcohol concentration does Indiana treat an adult driver as over the legal limit?",
        choices: [".10", ".05", ".02", ".08"],
        correctIndex: 3,
        explanation:
          "Indiana's legal limit is .08. Operating a vehicle while intoxicated, or above that figure, is a criminal offence with an immediate effect on your driving privileges.",
        context:
          "The manual is clear that the number is not the whole offence: you can be prosecuted for operating while intoxicated without ever reaching .08, because impairment by drugs, including prescription and over-the-counter medicines, counts too. Where an officer has probable cause, you can be asked to submit to a chemical test, and refusing carries its own suspension separate from any conviction. How much you drank, how fast, and your body weight are what drive the reading.",
        trap:
          ".08 is the ceiling for a healthy adult, not a safe target. Reaction time and judgement are measurably worse well below it.",
        excerptKey: "owi-legal-limit",
        sourceLabel: "Indiana Driver's Manual - Chapter 5, Operating a Vehicle While Intoxicated",
        sourceUrl: CH(5),
      },
      {
        id: "in_s1_13",
        topic: "rightOfWay",
        question: "You are approaching an Indiana roundabout. Who has the right of way?",
        choices: [
          "Whoever reaches the yield line first",
          "Traffic entering from your right",
          "Larger vehicles only",
          "Traffic already circulating in the roundabout",
        ],
        correctIndex: 3,
        explanation:
          "Incoming traffic always yields to traffic already going round. That single rule is what keeps a roundabout flowing.",
        context:
          "Indiana builds a lot of roundabouts and gives them a full section. Traffic runs counterclockwise, you enter and leave by turning right, and you pick your lane before you enter rather than changing lanes once inside. Approaching vehicles also yield to pedestrians in the crosswalk. A traffic circle is a different animal - it may carry traffic both ways round and its approaches may be controlled by stop signs instead of yields.",
        trap:
          "Yielding is not the same as stopping. If there is a safe gap in the circulating traffic you take it, and stopping needlessly at an empty roundabout is marked against you on the skills exam.",
        excerptKey: "roundabout-yield",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Roundabouts",
        sourceUrl: CH(7),
      },
      {
        id: "in_s1_14",
        topic: "speed",
        question: "Unless posted otherwise, how fast may you drive in an Indiana alley?",
        choices: ["20 mph", "15 mph", "25 mph", "10 mph"],
        correctIndex: 1,
        explanation:
          "Alleys carry a 15 mph limit unless a sign says lower. It is the slowest figure in Indiana's list of unposted limits.",
        context:
          "Alleys sit at the bottom of Indiana's urban speed ladder, below the 30 mph that applies in most urban residential areas and well below the 55 mph on county roads and non-divided state highways. The reason is sightlines: an alley puts you between buildings, fences and parked vehicles, with pedestrians stepping out at close range and no crosswalk to warn you.",
        trap:
          "The residential 30 does not carry over into the alley behind the houses. The alley has its own, much lower number.",
        excerptKey: "alleys-15",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Urban Speed Limits",
        sourceUrl: CH(7),
      },
      {
        id: "in_s1_15",
        topic: "signs",
        question: "What does a diamond-shaped sign warn you about in Indiana?",
        choices: [
          "A regulation you must obey",
          "An upcoming road condition or hazard",
          "The direction to the next town",
          "A railroad crossing ahead",
        ],
        correctIndex: 1,
        explanation:
          "The diamond is Indiana's warning shape. SLIPPERY WHEN WET is the manual's own example of the kind of hazard it flags.",
        context:
          "Warning signs prepare you for something the road is about to do - a curve, a lane ending, merging traffic, a steep downgrade, ice on a bridge. Indiana often pairs a diamond with a rectangular advisory speed plaque underneath, and treats that advisory as a figure you should not exceed rather than a suggestion. Round is railroad, five-sided is school, pennant is no passing.",
        trap:
          "An advisory speed on a rectangular plaque is not the posted limit for the road. It is the speed the curve or ramp is safe at, and the manual says not to exceed it.",
        excerptKey: "shape-diamond",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Traffic Sign Shapes",
        sourceUrl: CH(6),
      },
      {
        id: "in_s1_16",
        topic: "rules",
        question: "You are on a broken white line and want to move one lane over. Is that allowed?",
        choices: [
          "Only where a sign expressly permits a lane change",
          "No, white lines may never be crossed",
          "Yes, a broken white line may be crossed when it is safe",
          "Only when passing a slower vehicle",
        ],
        correctIndex: 2,
        explanation:
          "Broken white means the lane change is permitted when it is safe. A solid white line is the version you should not cross.",
        context:
          "Indiana pairs its lane-marking rules with a lane-changing procedure that the skills examiner watches for: make sure the lane you want is clear ahead, check your mirrors for anyone about to pass you, turn your head to look into the blind spot, signal, and then move over smoothly. The manual also tells you to change only one lane at a time, which rules out cutting across two.",
        trap:
          "The mirror check does not cover the blind spot. Indiana asks for an actual head turn, and skipping it is a marked fault on the skills exam.",
        excerptKey: "solid-white-line",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Lane Markings",
        sourceUrl: CH(7),
      },
      {
        id: "in_s1_17",
        topic: "emergencies",
        question: "A front tyre blows out at speed. What does Indiana tell you to do first?",
        choices: [
          "Brake hard to shed speed quickly",
          "Steer for the shoulder immediately",
          "Accelerate to keep the vehicle stable",
          "Hold the wheel firmly and keep the car going straight",
        ],
        correctIndex: 3,
        explanation:
          "Grip the wheel and hold your line. A blowout tugs the car sideways, and steering or braking against it is what turns a flat tyre into a crash.",
        context:
          "The manual's sequence is deliberate: hold straight, slow down gradually, take your foot off the accelerator, do not touch the brakes, let the car lose speed on its own, pull off the road, and only then brake as you come to a halt. Braking early shifts weight onto the failed tyre at the moment you have least control.",
        trap:
          "Braking is the instinctive response and the wrong one. Indiana specifically says to keep off the brakes until the car has almost stopped.",
        excerptKey: "blowout-hold-straight",
        sourceLabel: "Indiana Driver's Manual - Chapter 8, Tire Blowout",
        sourceUrl: CH(8),
        commonlyMissed: true,
      },
      {
        id: "in_s1_18",
        topic: "safety",
        question: "How far back does Indiana tell you to stay from the vehicle ahead?",
        choices: [
          "One car length for every 10 mph",
          "Four to five seconds",
          "At least 100 feet at any speed",
          "At least two to three seconds",
        ],
        correctIndex: 3,
        explanation:
          "Indiana's rule is a time gap of at least two to three seconds, not a distance in feet.",
        context:
          "The manual gives you a way to measure it: watch the vehicle ahead pass a fixed object, then count how long before you reach the same object. Time works where distance does not, because the gap it produces stretches automatically as you speed up. Motorcycles get a longer allowance - three to four seconds - and following too closely is a six-point violation on your Indiana record.",
        trap:
          "Three to four seconds is Indiana's motorcycle figure. For an ordinary vehicle the manual's number is two to three.",
        excerptKey: "following-two-to-three",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Braking and Following Distances",
        sourceUrl: CH(7),
        commonlyMissed: true,
      },
      {
        id: "in_s1_19",
        topic: "signals",
        question: "What does a flashing red light at an intersection require?",
        choices: [
          "Slow down and proceed with caution",
          "Yield to traffic on the larger road",
          "A complete stop, then proceed with caution",
          "Wait until the light turns green",
        ],
        correctIndex: 2,
        explanation:
          "A flashing red is a stop sign in light form. You stop completely, then move off with caution once the way is clear.",
        context:
          "Indiana distinguishes two situations. Where cross traffic is not required to stop, you may go only when the intersection is clear and you will not interfere with anyone's right of way. Where all traffic must stop, you give way to any vehicle already in the intersection and any vehicle that stopped before you. If you and another driver stopped at the same moment, the manual puts the duty on the vehicle on the left.",
        trap:
          "A flashing red is not a flashing yellow. Yellow means slow down and use caution; red means the wheels stop turning.",
        excerptKey: "flashing-red-light",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Red Flashing Lights",
        sourceUrl: CH(6),
      },
      {
        id: "in_s1_20",
        topic: "licensing",
        question: "How long is an Indiana learner's permit valid?",
        choices: [
          "Two years from the date of issuance",
          "One year from the date of issuance",
          "Until your eighteenth birthday",
          "180 days from the date of issuance",
        ],
        correctIndex: 0,
        explanation:
          "A learner's permit runs for two years from issue. That is separate from the 180 days you have to hold it before applying for a licence.",
        context:
          "Two different 180-day counts sit near this rule and get mixed up. One is the minimum holding period: you must have held a valid permit for at least 180 days before you can apply for a driver's licence. The other is the retest trigger: let the permit lapse for more than 180 days and you have to sit the knowledge exam again to renew it. A motorcycle learner's permit is a different document and runs for one year.",
        trap:
          "The 180-day holding period is a minimum, not the permit's lifespan. The permit itself is good for two years.",
        excerptKey: "permit-validity",
        sourceLabel: "Indiana Driver's Manual - Chapter 1, Learner's Permit Validity",
        sourceUrl: CH(1),
      },
      {
        id: "in_s1_21",
        topic: "sharing",
        question: "How much room does Indiana ask you to leave when passing a bicyclist?",
        choices: [
          "A full lane width in all cases",
          "Whatever the lane allows",
          "At least two feet",
          "At least three feet",
        ],
        correctIndex: 3,
        explanation:
          "Three feet is the minimum, and it comes with a second condition: there must be no danger from oncoming traffic while you are alongside.",
        context:
          "Indiana gives cyclists the same rights and responsibilities as other road users on most roads. A cyclist is not obliged to use a bike lane even where one exists, and may choose the travel lane instead. Cyclists may ride two abreast but no more. When you are turning right and a cyclist is coming up on your right, let them through the intersection first.",
        trap:
          "A painted bike lane does not remove the three-foot duty, and a cyclist riding outside it is not doing anything wrong.",
        excerptKey: "bicycle-three-feet",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Bicycles",
        sourceUrl: CH(7),
      },
      {
        id: "in_s1_22",
        topic: "signs",
        question: "What is a five-sided sign used for in Indiana?",
        choices: [
          "A no-passing zone",
          "An area near a school where children may be crossing",
          "A railroad crossing",
          "A pedestrian crossing on any street",
        ],
        correctIndex: 1,
        explanation:
          "Five sides means you are entering a school area and should expect children crossing the road.",
        context:
          "School warnings in Indiana come in two related forms. The five-sided shape marks the school area itself, and fluorescent yellow-green backgrounds are used to flag nearby schools, pedestrians, bicycles, playgrounds and school bus routes. School zone speed limits commonly run 7 a.m. to 4:30 p.m. Monday to Friday, or whenever the beacons are flashing, and local authorities can set a lower limit whenever children are present.",
        trap:
          "A five-sided sign is a warning, not a speed limit. The number itself comes from the separate posted school zone limit.",
        excerptKey: "shape-five-sided",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Traffic Sign Shapes",
        sourceUrl: CH(6),
      },
      {
        id: "in_s1_23",
        topic: "speed",
        question:
          "Unless posted otherwise, what is the maximum speed for a passenger vehicle on a rural Indiana interstate?",
        choices: ["55 mph", "60 mph", "70 mph", "65 mph"],
        correctIndex: 2,
        explanation:
          "Passenger vehicles may run to 70 mph on a rural interstate. Heavy trucks over 26,000 pounds are held to 65 on the same road.",
        context:
          "Rural in this context has a definition: an interstate outside an urban area of at least 50,000 people. Cross into an urban area and the same interstate drops to 55. Indiana therefore has three different interstate numbers in play - 70 rural for cars, 65 rural for heavy trucks, 55 urban - and the sign on the roadside always wins over any of them.",
        trap:
          "65 is the truck figure, not the car figure. A passenger vehicle on the same stretch may do 70.",
        excerptKey: "rural-interstate-70",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Rural Interstate Highway Speed Limits",
        sourceUrl: CH(7),
      },
      {
        id: "in_s1_24",
        topic: "rightOfWay",
        question: "What does Indiana say about pedestrians and right of way?",
        choices: [
          "Always yield the right of way to pedestrians",
          "Yield only at marked crosswalks",
          "Yield only where a pedestrian signal is showing WALK",
          "Pedestrians must yield to vehicles outside crosswalks",
        ],
        correctIndex: 0,
        explanation:
          "The instruction is unconditional. Indiana does not attach it to a crosswalk, a signal or a time of day.",
        context:
          "The manual adds a specific turning rule to the general one: do not make a turn that forces a pedestrian to stop, slow down or take any other special effort to avoid you. It also tells you to expect children to cross at unexpected places, and to give particular care to older pedestrians and to anyone with a visual disability, whose white cane or guide dog you must always yield to.",
        trap:
          "A pedestrian crossing where there is no marked crosswalk is still a pedestrian. The duty to yield does not switch off outside the paint.",
        excerptKey: "pedestrian-always-yield",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Pedestrian Safety",
        sourceUrl: CH(7),
      },
      {
        id: "in_s1_25",
        topic: "rules",
        question: "When does Indiana law require your headlights to be on?",
        choices: [
          "Between sunset and sunrise, and any time visibility is under 500 feet",
          "From half an hour after sunset to half an hour before sunrise",
          "Between 6:30 p.m. and 6:30 a.m.",
          "Whenever your windscreen wipers are running",
        ],
        correctIndex: 0,
        explanation:
          "Two separate triggers, either one of which is enough: the clock, from sunset to sunrise, and the conditions, whenever you cannot see 500 feet.",
        context:
          "The same 500-foot figure returns for high beams. With your headlights on you must dip to low beam within 500 feet of an oncoming vehicle, and within 200 feet when you are following someone. Fog is the exception drivers get wrong: Indiana tells you not to use high beams in fog at all, because low beams light the road better through it.",
        trap:
          "There is no wipers-on-headlights-on rule in the Indiana manual. The legal triggers are the time of day and the 500-foot visibility test.",
        excerptKey: "headlights-500",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Headlights",
        sourceUrl: CH(7),
        commonlyMissed: true,
      },
      {
        id: "in_s1_26",
        topic: "signs",
        question: "An orange sign appears at the roadside. What is it telling you?",
        choices: [
          "A permanent speed regulation",
          "Services available at the next exit",
          "Temporary traffic conditions ahead",
          "A recreational area nearby",
        ],
        correctIndex: 2,
        explanation:
          "Orange marks temporary conditions, most often construction and maintenance work. FLAGGER AHEAD is the manual's example.",
        context:
          "Orange signs come with real consequences attached. Work site speed limits are always set at least 10 mph below the normal maximum for that stretch, some apply only when the sign is flashing and others apply at all times, and there are added-penalty signs for offences committed in a work zone. A flagger's hand signals or STOP/SLOW paddle carry the same force as a sign.",
        trap:
          "A work zone limit does not lapse because the site looks empty. Unless the sign is one of the flashing kind and unlit, it is in force.",
        excerptKey: "sign-orange",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Traffic Sign Colors",
        sourceUrl: CH(6),
      },
      {
        id: "in_s1_27",
        topic: "safety",
        question: "Which passengers must be in a child restraint system under Indiana law?",
        choices: [
          "Those under six years of age",
          "Those younger than eight years of age",
          "Those under 40 pounds",
          "Those younger than twelve years of age",
        ],
        correctIndex: 1,
        explanation:
          "Under eight means a proper child car seat or booster seat, not an adult belt.",
        context:
          "Indiana separates the legal requirement from the safety advice. The law is the under-eight restraint rule. The advice, which the manual attributes to the National Safety Council, is to put children under twelve in the back seat where a car has a passenger-side air bag, because the force of a deploying bag has killed children and small adults.",
        trap:
          "Twelve is the back-seat recommendation, not the restraint law. The restraint requirement stops at eight.",
        excerptKey: "child-restraint-eight",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Child Safety Restraints",
        sourceUrl: CH(7),
      },
      {
        id: "in_s1_28",
        topic: "emergencies",
        question: "You are involved in a collision in Indiana. What does the law require of you?",
        choices: [
          "Exchange details only if someone is injured",
          "Stop immediately, or as close to the scene as you safely can",
          "Drive to the nearest police station to report it",
          "Move your vehicle home and report it within 24 hours",
        ],
        correctIndex: 1,
        explanation:
          "You must stop at once, or as near the scene as you can manage without blocking traffic more than necessary.",
        context:
          "What happens next depends on the damage. If the crash is on the travelled part of a highway you are required to move the vehicle off it, as close to the scene as possible - but not if hazardous materials are involved, or if anyone is injured, killed or trapped. You then stay at the scene and give your name, address and the vehicle's registration number to everyone involved, and show your licence.",
        trap:
          "Move it off the road is not the universal rule. Injury, death, entrapment or hazardous materials all mean you leave the vehicle where it is.",
        excerptKey: "accident-must-stop",
        sourceLabel: "Indiana Driver's Manual - Chapter 8, What to Do After an Accident",
        sourceUrl: CH(8),
      },
      {
        id: "in_s1_29",
        topic: "signals",
        question: "A green light without an arrow is showing and you want to turn left. What applies?",
        choices: [
          "You may turn once you have yielded to all oncoming traffic",
          "You may turn immediately, since green gives you the right of way",
          "You must wait for a green arrow",
          "You may turn only if two or more vehicles turn together",
        ],
        correctIndex: 0,
        explanation:
          "A plain green is permission to turn, not priority over the people coming the other way. Every oncoming vehicle goes first.",
        context:
          "Indiana separates the two green displays. A green arrow, whether shown with a red or a green light, gives you a protected turn: the way is yours as long as the intersection is clear. A green without an arrow is permissive, so you creep out, wait for a gap and yield. A flashing yellow arrow works the same permissive way, and the manual limits the intersection to one left-turning vehicle at a time.",
        trap:
          "Green does not mean the turn is protected. Only an arrow does that, and the flashing yellow arrow is permissive despite being an arrow.",
        excerptKey: "green-light-no-arrow-turn",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Turning through an Intersection",
        sourceUrl: CH(6),
      },
      {
        id: "in_s1_30",
        topic: "impairment",
        question: "What does Indiana law allow you to do with a phone while driving?",
        choices: [
          "Use it freely if you keep it below the window line",
          "Read messages at a red light but not while moving",
          "Hold it for calls but not for texts",
          "Use it only hands-free, or to contact 911 in a genuine emergency",
        ],
        correctIndex: 3,
        explanation:
          "Indiana bans the use of a telecommunications device while driving, with two exceptions: hands-free operation, and calling 911 for a genuine emergency.",
        context:
          "The manual sets this inside a broader account of distraction - anything that takes your eyes off the road, your hands off the wheel or your mind off driving. It notes that reading or sending a text takes your eyes away for about five seconds, which at 55 mph is roughly the length of a football field driven blind. A hand-held device violation carries four points on your Indiana record.",
        trap:
          "Holding the phone for a voice call is not a way round the rule. The exception is hands-free operation, not calls in general.",
        excerptKey: "telecom-only-exceptions",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Distracted Driving",
        sourceUrl: CH(7),
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Signs, Signals and Right of Way",
    difficulty: "easy",
    description:
      "The two halves of Indiana's exam meet here: what the sign or signal means, and who has to give way once you have read it. Both components need 80 percent, so neither half can be carried by the other.",
    questions: [
      {
        id: "in_s2_01",
        topic: "signs",
        question: "What does a round traffic sign mean in Indiana?",
        choices: [
          "A school zone",
          "A hospital ahead",
          "A regulation you must obey",
          "A railroad crossing ahead",
        ],
        correctIndex: 3,
        explanation:
          "The circle is Indiana's railroad shape. It is the advance warning for a crossing ahead, not the crossbuck at the tracks themselves.",
        context:
          "Indiana uses seven sign shapes and gives each one job. Circle is railroad, octagon is stop, equilateral triangle is yield, diamond is a hazard warning, five sides is a school area, pennant is a no-passing zone, and rectangles do three different jobs - regulation, guidance and advisory speeds. Shape is deliberately readable before the legend is.",
        trap:
          "The X-shaped crossbuck sits at the crossing itself. The round yellow sign is the warning that appears before it.",
        excerptKey: "shape-circular",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Traffic Sign Shapes",
        sourceUrl: CH(6),
      },
      {
        id: "in_s2_02",
        topic: "rightOfWay",
        question:
          "You and another driver stop at an Indiana all-way stop at exactly the same moment. Who yields?",
        choices: [
          "Whoever is turning",
          "Whoever arrived from the larger road",
          "The vehicle on the left",
          "The vehicle on the right",
        ],
        correctIndex: 2,
        explanation:
          "Indiana phrases its tie-break the other way round from most states: the vehicle on the left shall yield the right of way.",
        context:
          "The outcome is the familiar one - the driver on your right goes first - but knowing Indiana's own phrasing matters, because the manual repeats it in that form at all-way stops and again at flashing red lights. At a dark, non-operating signal the manual flips to the other phrasing and tells you to yield to the vehicle that arrived at the same time and is to your right. Same rule, stated both ways in the same chapter.",
        trap:
          "Reading the sentence too fast turns it into its opposite. It is the driver on the LEFT who gives way.",
        excerptKey: "all-way-stop-tie",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, All-Way Stops",
        sourceUrl: CH(7),
        commonlyMissed: true,
      },
      {
        id: "in_s2_03",
        topic: "signals",
        question: "When may you legally turn left at a red light in Indiana?",
        choices: [
          "When you are turning from a one-way street onto a one-way street",
          "Never",
          "When no other vehicles are present",
          "When another driver waves you through",
        ],
        correctIndex: 0,
        explanation:
          "Indiana allows a left on red only from a one-way street onto another one-way street, and only after a full stop with the way genuinely clear.",
        context:
          "The same conditions attach as to a right on red: a complete stop first, no vehicles or pedestrians in or about to enter the path of your turn, no NO TURN ON RED sign, and the correct lane. Turning from a two-way street, or onto one, is not permitted at all. The BMV publishes this as a sample question in its own practice exam, which is a fair sign of how often it is asked.",
        trap:
          "One one-way street is not enough. Both the street you leave and the street you enter have to be one-way.",
        excerptKey: "left-on-red",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Turning through a Solid Red Light",
        sourceUrl: CH(6),
        commonlyMissed: true,
      },
      {
        id: "in_s2_04",
        topic: "rules",
        question: "You are turning right from a road that has several lanes going your way. Which lane?",
        choices: [
          "Whichever lane is clearest",
          "The far-right lane for your direction of travel",
          "The middle lane, to keep the kerb lane free",
          "It does not matter as long as you signal",
        ],
        correctIndex: 1,
        explanation:
          "Turn from the lane nearest the direction you are going: far right for a right turn, far left for a left turn.",
        context:
          "Indiana's first rule for any turn is to be in the correct lane well before it, with your signal on. Turning into or from the wrong lane is on the BMV's list of automatic failures for the skills exam, alongside straddling lanes and crossing a solid yellow line. The manual illustrates all four cases - one-way to one-way, two-way to one-way, one-way to two-way and two-way to two-way.",
        trap:
          "Signalling does not cure being in the wrong lane. Indiana treats the lane choice and the signal as two separate requirements.",
        excerptKey: "turn-lane-position",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Rules for Safe and Legal Turning",
        sourceUrl: CH(7),
      },
      {
        id: "in_s2_05",
        topic: "signs",
        question:
          "A pennant-shaped sign is posted on the left-hand side of a two-way road. What does it mean?",
        choices: [
          "A divided highway begins",
          "A lane is ending ahead",
          "Slow-moving vehicles ahead",
          "Do not pass other vehicles on the left",
        ],
        correctIndex: 3,
        explanation:
          "The pennant marks a no-passing zone and is deliberately placed on the left, where you would be looking if you were thinking about pulling out.",
        context:
          "Indiana pairs it with a white rectangular DO NOT PASS sign on the right-hand side, and with the pavement markings: a solid yellow line on your side of the centre means no passing. The manual lists other places passing is forbidden regardless of signs - on or approaching a curve, approaching the crest of a hill, and within 100 feet of an intersection, railroad crossing, bridge, viaduct or tunnel.",
        trap:
          "Its position on the left is not an error. It faces the driver who is about to cross the centre line.",
        excerptKey: "shape-pennant",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Traffic Sign Shapes",
        sourceUrl: CH(6),
      },
      {
        id: "in_s2_06",
        topic: "rightOfWay",
        question:
          "You are pulling out of a driveway onto a street where there is no sign or signal. What must you do?",
        choices: [
          "Yield only to vehicles approaching from your left",
          "Proceed, since a driveway exit has priority over through traffic",
          "Stop and yield the right of way to other vehicles",
          "Sound your horn and move out slowly",
        ],
        correctIndex: 2,
        explanation:
          "Indiana requires you to stop before entering the street from an alley or driveway, and to give way to traffic already on it.",
        context:
          "This is the one right-of-way rule with no sign to remind you. The manual states it as a flat obligation rather than as advice, and it sits alongside the related duty to check for bicyclists and pedestrians on the sidewalk you are crossing before your bonnet reaches the road. Reversing out of a driveway carries the same obligation to look in every direction.",
        trap:
          "There being nothing to obey is exactly the point. The absence of a stop sign at a driveway does not create a right of way.",
        excerptKey: "alley-driveway-stop",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Approaching an Intersection with No Sign or Signal",
        sourceUrl: CH(6),
      },
      {
        id: "in_s2_07",
        topic: "safety",
        question: "You are on wet pavement and your car starts to hydroplane. What is happening?",
        choices: [
          "The tyres are riding on a layer of water, oil and dirt with no grip",
          "The brakes have overheated and faded",
          "The anti-lock system has engaged",
          "The steering has lost hydraulic pressure",
        ],
        correctIndex: 0,
        explanation:
          "Your tyres have stopped touching the road and are riding on the film of oil, dirt and water sitting on top of it. With no friction, braking, accelerating and steering all stop working.",
        context:
          "The manual makes the point that wet roads are most treacherous immediately after rain starts, when the oil and dirt have been lifted but not yet washed away. Hydroplaning gets worse as speed rises and as tread wears down, so the responses are to slow down in heavy rain, standing water or slush, and to stay off bald or badly worn tyres. Once you are hydroplaning, a gust of wind or a slight steering input is enough to lose the car.",
        trap:
          "This is not a braking failure you can brake your way out of. There is no grip to brake against until the tyres reach the road again.",
        excerptKey: "hydroplaning-layer",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Rain",
        sourceUrl: CH(7),
      },
      {
        id: "in_s2_08",
        topic: "signals",
        question: "You approach an intersection where the traffic signal is completely dark. What do you do?",
        choices: [
          "Treat the intersection as uncontrolled and continue",
          "Stop before entering, then proceed with caution when it is safe",
          "Yield only to traffic on the through road",
          "Wait for the signal to come back on",
        ],
        correctIndex: 1,
        explanation:
          "A dead signal does not become an open intersection. Indiana requires you to stop before entering, then go only after giving way to everyone with a prior claim.",
        context:
          "The manual lists the order of yielding at a dark signal: cross traffic already in the intersection, any vehicle that stopped before you and is entering it, any vehicle that arrived at the same time and is to your right, and pedestrians. In practice that makes a dark signal behave like an all-way stop, which is why the BMV uses it as a sample question in the motor driven cycle exam too.",
        trap:
          "Waiting for the power to come back is not the answer either. The manual tells you to stop and then proceed, not to sit there.",
        excerptKey: "dark-signal",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Approaching an Intersection with Non-Operating Signal",
        sourceUrl: CH(6),
      },
      {
        id: "in_s2_09",
        topic: "sharing",
        question:
          "A police officer is directing traffic at an intersection and waves you through a red light. What do you do?",
        choices: [
          "Obey the signal, since it is the legal control",
          "Stop and wait for the officer to clear the intersection",
          "Sound your horn to acknowledge and stay put",
          "Obey the officer's command",
        ],
        correctIndex: 3,
        explanation:
          "Where an officer's direction conflicts with a signal or a sign, the officer's command is the one that must be obeyed.",
        context:
          "Indiana puts human direction above the hardware for good reason: officers direct traffic precisely when the normal controls have stopped matching the situation, at a crash scene, a special event or a failed signal. The BMV uses this as a sample question in both its published practice exams. Official processions such as funeral processions get a similar override, holding the right of way regardless of what the signal shows.",
        trap:
          "Obeying the light instead of the officer is not the cautious choice. It puts you against the direction of traffic the officer is managing.",
        excerptKey: "officer-overrides",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Traffic Control Officers and Official Processions",
        sourceUrl: CH(7),
      },
      {
        id: "in_s2_10",
        topic: "speed",
        question:
          "Unless posted otherwise, what is the maximum speed on a rural Indiana state divided highway?",
        choices: ["60 mph", "50 mph", "55 mph", "65 mph"],
        correctIndex: 0,
        explanation:
          "60 mph. It is a tier of its own, sitting between the 70 on a rural interstate and the 55 on a non-divided state highway.",
        context:
          "This is the number most Indiana learners lose, because few states have a 60 tier and the instinctive guess is 55. Hold the full ladder together and it makes sense: 70 rural interstate for cars, 65 for heavy trucks on the same road, 60 rural state divided highway, 55 urban interstate and non-divided state highway and county roads, 30 urban residential, 15 alleys. The BMV asks about the 60 in its own published practice exam.",
        trap:
          "55 is the non-divided state highway figure. Add a median and the limit goes up to 60.",
        excerptKey: "rural-divided-60",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Rural Interstate Highway Speed Limits",
        sourceUrl: CH(7),
        commonlyMissed: true,
      },
      {
        id: "in_s2_11",
        topic: "signs",
        question: "What kind of information does a brown traffic sign carry in Indiana?",
        choices: [
          "Temporary construction conditions",
          "Nearby recreational and cultural interest sites",
          "Road services such as fuel and food",
          "Distances to upcoming destinations",
        ],
        correctIndex: 1,
        explanation:
          "Brown means recreation and culture. A sign pointing to a state park is the manual's own example.",
        context:
          "Brown and blue are the two colours drivers most often swap. Blue carries road services and information such as the amenities at an upcoming exit; brown carries parks, historic markers and other recreational or cultural destinations. Green is the third information colour and does guidance - highway entrances and exits and distances to towns.",
        trap:
          "A rest area sign is blue, not brown. Services are blue; the park you are heading to is brown.",
        excerptKey: "sign-brown",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Traffic Sign Colors",
        sourceUrl: CH(6),
      },
      {
        id: "in_s2_12",
        topic: "rules",
        question: "You have just overtaken a vehicle on a two-lane road. When must you be back on your side?",
        choices: [
          "As soon as your rear bumper clears the other vehicle",
          "Once you can see the whole of the other vehicle in your mirror",
          "No less than 100 feet before any oncoming vehicle",
          "Before you reach the next broken line",
        ],
        correctIndex: 2,
        explanation:
          "Indiana states the requirement as a distance from the oncoming vehicle: you must be back on the right side of the road no less than 100 feet before it.",
        context:
          "That 100-foot figure is one you have to build into the decision before you pull out, not while you are alongside. The manual's own cue for when it is safe to come back in is being able to see the vehicle you passed in your rearview mirror. Passing is separately forbidden on or approaching a curve, approaching a hill crest, and within 100 feet of an intersection, railroad crossing, bridge, viaduct or tunnel.",
        trap:
          "Clearing the vehicle you passed is not the test. The clock runs against the car coming the other way.",
        excerptKey: "passing-return-100-feet",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Passing Other Vehicles",
        sourceUrl: CH(7),
        commonlyMissed: true,
      },
      {
        id: "in_s2_13",
        topic: "signals",
        question:
          "A flashing yellow arrow is showing for your left turn. What does Indiana say it means?",
        choices: [
          "Turn only after yielding to pedestrians and oncoming traffic",
          "The turn is protected and you may go",
          "Left turns are prohibited at this signal",
          "Stop, then turn when the way is clear",
        ],
        correctIndex: 0,
        explanation:
          "A flashing yellow arrow is a permissive turn. You may go, but only once you have yielded to pedestrians and to everything coming the other way.",
        context:
          "Indiana's turn signals form a ladder of protection. A green arrow is protected, while a flashing yellow arrow is permissive - the same status as a plain green ball. A steady yellow arrow means your right of way is ending, and a red arrow means stop, with the one-way to one-way left turn as the narrow exception. Reading the arrow's colour and its behaviour together is what tells you which of the four you have.",
        trap:
          "It is an arrow, but it is not protection. Flashing yellow only gives you permission to look for a gap.",
        excerptKey: "flashing-yellow-arrow",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Yellow Flashing Arrows for Turning Movements",
        sourceUrl: CH(6),
      },
      {
        id: "in_s2_14",
        topic: "rightOfWay",
        question: "You are joining an Indiana interstate from an on-ramp. Who yields?",
        choices: [
          "You do - entering traffic yields to vehicles already on the interstate",
          "The interstate traffic, which must open a gap",
          "Neither, provided you match the speed of traffic",
          "Whichever vehicle is travelling more slowly",
        ],
        correctIndex: 0,
        explanation:
          "The duty is on the driver entering. Traffic already on the interstate has the right of way.",
        context:
          "The manual pairs that with practical advice for actually doing it: stay right on the ramp and build speed in the acceleration lane so you can merge when your path is clear, and expect drivers already on the road to make some allowance for you. Allowance is not the same as priority. If you miss your exit you drive on to the next one, because backing up on an interstate is both unsafe and out of the question.",
        trap:
          "Being at speed does not transfer the right of way. Matching traffic makes the merge easier; it does not make it yours.",
        excerptKey: "merging-yield",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Driving on Interstate Highways",
        sourceUrl: CH(7),
      },
      {
        id: "in_s2_15",
        topic: "emergencies",
        question:
          "An ambulance is approaching with its lights flashing and you cannot safely change lanes. What does Indiana's Move Over law require?",
        choices: [
          "Stop where you are until it has passed",
          "Maintain your speed and hold your lane",
          "Slow to 10 mph below the posted limit and proceed with caution",
          "Slow to half the posted limit",
        ],
        correctIndex: 2,
        explanation:
          "Where moving over is not possible, Indiana sets a specific number: reduce your speed to 10 mph under the posted limit and carry on with caution.",
        context:
          "The Move Over law asks first for the lane change away from the emergency vehicle, with the speed reduction as the fallback. It reaches beyond ambulances and police cars: authorised parked vehicles showing amber lights - tow trucks, highway maintenance, utility vehicles, refuse trucks, survey and construction vehicles - and disabled vehicles running their hazard lights all trigger the same duty. Failing an emergency vehicle is a Class A infraction; the amber and disabled cases are Class B.",
        trap:
          "10 mph under the limit is the figure, not 20 and not half. And failing to yield to an emergency vehicle carries six points.",
        excerptKey: "move-over-emergency-10-under",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Indiana's Move Over Law",
        sourceUrl: CH(7),
        commonlyMissed: true,
      },
      {
        id: "in_s2_16",
        topic: "signs",
        question: "What is an equilateral triangle used for on an Indiana road?",
        choices: [
          "Warning of a hazard ahead",
          "Slow down, be prepared to stop and yield",
          "A school area",
          "A railroad crossing",
        ],
        correctIndex: 1,
        explanation:
          "The three-sided sign is YIELD. You slow on the approach and be ready to stop for anyone with the right of way.",
        context:
          "Indiana gives yield a workable test rather than a rule of thumb: a vehicle approaching from another direction with the right of way should not have to brake to avoid you. If they would have to, you have not yielded. Note that the crossbuck at a railroad crossing displayed on its own is treated the same way - as a yield, with the decision to stop or cross left to you.",
        trap:
          "Yield does not mean never stop. If the gap is not there, the sign requires you to come to a complete stop.",
        excerptKey: "shape-triangle",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Traffic Sign Shapes",
        sourceUrl: CH(6),
      },
      {
        id: "in_s2_17",
        topic: "sharing",
        question:
          "A large truck and your car reach a multi-lane Indiana roundabout at the same time. What does the manual require?",
        choices: [
          "The truck yields, as the larger vehicle",
          "Both proceed side by side through the circle",
          "You yield the right of way to the large vehicle",
          "Whoever reaches the yield line first goes",
        ],
        correctIndex: 2,
        explanation:
          "Indiana requires drivers to yield to large vehicles going through a multi-lane roundabout at the same time, including slowing or stopping to let them through safely.",
        context:
          "The reason is geometry. A tractor-trailer's rear wheels track a tighter path than its front wheels, so a long vehicle needs more than one lane's width to get round - which is what the truck apron in the middle of an Indiana roundabout is for. The manual carries the rule further: where two large trucks meet in a roundabout, the driver in the right lane yields to the driver in the left lane.",
        trap:
          "This is an exception to the usual rule that the bigger vehicle has no special claim. In an Indiana roundabout it does.",
        excerptKey: "roundabout-large-vehicles",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Roundabouts",
        sourceUrl: CH(7),
        commonlyMissed: true,
      },
      {
        id: "in_s2_18",
        topic: "parking",
        question: "You are parking facing downhill against a kerb. Which way do the front wheels go?",
        choices: [
          "Straight ahead, with the parking brake set",
          "Turned toward the kerb",
          "Turned away from the kerb",
          "Whichever way the road cambers",
        ],
        correctIndex: 1,
        explanation:
          "Downhill, the wheels point toward the kerb, so a car that starts rolling is caught by it rather than heading into traffic.",
        context:
          "Indiana gives the mirror-image rule for facing uphill: wheels away from the kerb, so the car rolls back into the kerb rather than out. Where there is no kerb at all the manual gives a third case - turn the wheels away from the street, whichever way you are facing, so a rolling vehicle leaves the roadway instead of entering it.",
        trap:
          "The two hill cases are opposites and are easy to swap. Downhill is toward the kerb; uphill is away from it.",
        excerptKey: "parking-hill-wheels",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Parallel Parking",
        sourceUrl: CH(7),
        commonlyMissed: true,
      },
      {
        id: "in_s2_19",
        topic: "licensing",
        question: "How is Indiana's driver knowledge exam scored?",
        choices: [
          "One overall score, 80 percent to pass",
          "A single 50-question paper with a 40-correct pass mark",
          "Signs first, and a fail there ends the attempt",
          "Two components, each needing 80 percent or higher",
        ],
        correctIndex: 3,
        explanation:
          "The exam is split into a signs component and a traffic rules component, and you need 80 percent or higher on each of them separately.",
        context:
          "Both the BMV's Knowledge Exam page and Chapter 9 of the manual describe the same split: one component on the common signs from Chapter 6, another on the traffic rules and laws in Chapters 6, 7 and 8. Neither source states how many questions the driver exam contains or gives a time limit. A pass stays valid for 180 days, and a fail means waiting until the next business day to try again.",
        trap:
          "A strong score on signs cannot rescue a weak one on rules. Each component is cleared on its own.",
        excerptKey: "bmv-exam-80-percent",
        sourceLabel: "Indiana BMV - Knowledge Exam",
        sourceUrl: EXAM_PAGE,
        commonlyMissed: true,
      },
      {
        id: "in_s2_20",
        topic: "signals",
        question: "What is a rectangular rapid flashing beacon used for in Indiana?",
        choices: [
          "Warning of a work zone ahead",
          "Marking a railroad crossing",
          "Alerting drivers to a crosswalk when a pedestrian activates it",
          "Signalling a lane closure",
        ],
        correctIndex: 2,
        explanation:
          "It sits at a crosswalk and only flashes when a pedestrian has pressed the button, so a flashing beacon means someone is about to cross.",
        context:
          "Indiana pairs it with the pedestrian hybrid beacon, which is a fuller version of the same idea. That one is dark until activated, then runs flashing yellow, steady yellow, two steady reds while the pedestrian crosses, then alternating flashing reds that let you proceed if the crossing is clear, and finally dark again.",
        trap:
          "A dark beacon is not a broken one. Both of these devices are meant to be unlit until a pedestrian calls them.",
        excerptKey: "rrfb",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Yellow Flashing Lights",
        sourceUrl: CH(6),
      },
      {
        id: "in_s2_21",
        topic: "safety",
        question: "Where should you stop when there is a solid white stop line at a red light?",
        choices: [
          "Level with the traffic signal",
          "At the stop line",
          "Wherever you can see cross traffic",
          "In the crosswalk, if the line is worn away",
        ],
        correctIndex: 1,
        explanation:
          "The stop line is the stopping point. Rolling past it puts you into the crosswalk and out of the driver's view you were trying to gain.",
        context:
          "Indiana gives a fallback order for when there is no line: stop perpendicular to the stop sign, or before entering the crosswalk on your side of the intersection, and if there is no crosswalk either, before entering the intersection. Overrunning a crosswalk, stop line or stop sign is on the BMV's list of faults that can cost you the skills exam.",
        trap:
          "Creeping forward for a better view is the reflex that fails people. Stop at the line first, then edge out.",
        excerptKey: "stop-line-order",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Approaching a Red Light or Stop Sign",
        sourceUrl: CH(6),
      },
      {
        id: "in_s2_22",
        topic: "rules",
        question: "What is a centre lane marked with alternating directional arrows for?",
        choices: [
          "Passing slower traffic in either direction",
          "Left turns by traffic from both directions",
          "Overtaking on the left only",
          "Emergency vehicles only",
        ],
        correctIndex: 1,
        explanation:
          "It is a shared left-turn lane. Vehicles from both directions use it to wait for a gap before turning left.",
        context:
          "Because it is shared, the hazard is head-on: a driver coming the other way can be entering the same lane to turn left in front of you. Indiana states outright that this lane is never to be used for passing. Some are marked with a CENTER LANE ONLY sign or pavement arrows, and some carry no markings at all.",
        trap:
          "An empty centre lane is not a free overtaking lane. It is the one place on the road where a vehicle may be coming straight at you legally.",
        excerptKey: "centre-turn-lane-no-passing",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Turning Left from Specially-Designated Center Lanes",
        sourceUrl: CH(7),
      },
      {
        id: "in_s2_23",
        topic: "signs",
        question: "A slow-moving vehicle emblem is on the back of a vehicle ahead. What does it tell you?",
        choices: [
          "The vehicle is disabled",
          "The vehicle is carrying an oversized load",
          "The vehicle cannot exceed 25 miles per hour",
          "The vehicle is making frequent stops",
        ],
        correctIndex: 2,
        explanation:
          "The orange fluorescent triangle with red reflective edges means the vehicle cannot go faster than 25 mph. You are closing on it far faster than it looks.",
        context:
          "Indiana requires the emblem on farm machinery, construction equipment and animal-drawn vehicles, and treats a horse or horse-drawn vehicle on a public highway as having the same rights and responsibilities as a driver. The manual asks you to approach with care and watch for hand signals from the rider or driver, who has no indicators to use.",
        trap:
          "Closing speed is what catches drivers here. Approaching a 25 mph vehicle at 60 gives you far less time than the gap suggests.",
        excerptKey: "slow-moving-emblem",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Slow-Moving Vehicle Emblem",
        sourceUrl: CH(6),
      },
      {
        id: "in_s2_24",
        topic: "rightOfWay",
        question:
          "You are turning left and a bicyclist is coming toward you through the intersection. What should you do?",
        choices: [
          "Wait for the bicyclist to pass before turning",
          "Turn ahead of the bicyclist, who can slow more easily",
          "Signal and turn across, since bicycles must yield to vehicles",
          "Sound your horn and complete the turn",
        ],
        correctIndex: 0,
        explanation:
          "A bicyclist coming the other way is oncoming traffic. You wait, exactly as you would for a car.",
        context:
          "Indiana gives bicyclists the same rights and responsibilities as other road users on most roads, and drivers must yield to a cyclist just as they would to another vehicle. The manual adds specific turning cases: do not turn across a cyclist's path, stay behind a cyclist sharing your left-turn lane until they have finished the turn, and let a cyclist on your right go through the intersection before you turn right.",
        trap:
          "A bicycle's small size is not a reason to take the gap. It also makes its speed and distance harder to judge than a car's.",
        excerptKey: "bicycle-left-turn-lane",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Bicycles",
        sourceUrl: CH(7),
      },
      {
        id: "in_s2_25",
        topic: "emergencies",
        question:
          "You are the first to reach a crash where someone is trapped in a vehicle. What does Indiana require of you as a driver involved?",
        choices: [
          "Provide reasonable assistance to those injured or trapped as directed",
          "Move all vehicles clear of the road before doing anything else",
          "Wait in your own vehicle until the police arrive",
          "Photograph the scene before touching anything",
        ],
        correctIndex: 0,
        explanation:
          "Where a crash injures or kills someone, a driver involved has to provide reasonable assistance as directed by law enforcement, medical personnel or a 911 operator.",
        context:
          "This is the point where the ordinary rule about clearing the roadway is switched off. A crash on the travelled portion of a highway normally has to be moved off it, but not where hazardous materials are involved or where the collision has caused injury, death or entrapment. Law enforcement is to be notified as soon as possible, and you stay at the scene either way.",
        trap:
          "The instruction to clear the roadway does not apply here. Moving a vehicle with someone trapped in it is exactly what the exception forbids.",
        excerptKey: "accident-do-not-move",
        sourceLabel: "Indiana Driver's Manual - Chapter 8, What to Do After an Accident",
        sourceUrl: CH(8),
      },
      {
        id: "in_s2_26",
        topic: "speed",
        question: "How much below the normal limit is an Indiana work site speed limit set?",
        choices: [
          "Whatever the contractor posts",
          "Always exactly 20 mph below",
          "5 mph below",
          "Always at least 10 mph below the maximum for the area",
        ],
        correctIndex: 3,
        explanation:
          "Indiana sets work site limits at a minimum of 10 mph below the maximum established for that stretch of road.",
        context:
          "Some work site limits apply only when the sign is flashing and others apply around the clock, so the sign has to be read rather than assumed. Work zone signs are orange, added-penalty signs are posted at some sites, and the manual's other advice is to merge early where signs ask for it, though at some locations Indiana uses late or zipper merging to shorten the queue instead.",
        trap:
          "An empty-looking site does not suspend the limit. Only the flashing-when-active signs are conditional, and only when unlit.",
        excerptKey: "work-zone-10-below",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Reduced Speed Limits in Highway Work Zones",
        sourceUrl: CH(7),
      },
      {
        id: "in_s2_27",
        topic: "sharing",
        question:
          "A motorcycle's turn signal has been flashing for some distance but the rider has not turned. What should you assume?",
        choices: [
          "The rider will turn at the next junction",
          "The signal is faulty and can be ignored",
          "The rider is inviting you to pass",
          "Nothing - wait until the rider actually acts",
        ],
        correctIndex: 3,
        explanation:
          "Motorcycle indicators are usually not self-cancelling, so a flashing signal often just means the rider forgot to switch it off. Wait for the machine to move before you act on it.",
        context:
          "Indiana asks drivers to give motorcycles and motor driven cycles the width of a full lane, even though the gap looks big enough to share, because a rider may need all of it to swerve round a pothole, gravel or a pavement seam. Their small profile hides them in blind spots and makes their speed and distance hard to judge, and they can stop far more quickly than a car. The recommended following gap is three to four seconds.",
        trap:
          "Pulling out on a signal alone is how these collisions happen. The signal is a claim about intention, not evidence of a turn.",
        excerptKey: "motorcycle-signal-not-cancelling",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Motorcycles and Motor Driven Cycles",
        sourceUrl: CH(7),
      },
      {
        id: "in_s2_28",
        topic: "safety",
        question: "Indiana's manual names one factor as the most common in collisions in the state. Which?",
        choices: [
          "Excessive speed",
          "Driving while distracted",
          "Failure to yield the right of way",
          "Driving too fast for conditions",
        ],
        correctIndex: 2,
        explanation:
          "Among all collisions in Indiana, failure to yield the right of way is the single most common factor.",
        context:
          "The manual opens its accident chapter with that finding and attributes crashes generally to a driver's lack of attention, a failure to observe the rules of the road, or both. It is worth reading alongside the separate figures on teen drivers, where most multi-vehicle crashes happen at intersections - which is where right-of-way decisions are made.",
        trap:
          "Speed is the more memorable answer and the wrong one here. Indiana's own data puts failure to yield first.",
        excerptKey: "failure-to-yield-most-common",
        sourceLabel: "Indiana Driver's Manual - Chapter 8, Accidents and Emergency Situations",
        sourceUrl: CH(8),
      },
      {
        id: "in_s2_29",
        topic: "licensing",
        question: "What happens if you fail Indiana's knowledge exam?",
        choices: [
          "You may retake it immediately",
          "You must wait 30 days",
          "You must complete a driver safety course first",
          "You must wait until the next business day",
        ],
        correctIndex: 3,
        explanation:
          "A failed knowledge exam means waiting until the next business day before trying again.",
        context:
          "The waiting periods are different for the two exams and are easy to confuse. Knowledge exam: next business day. Driving skills exam: seven days, and after a third failure while holding a learner's permit, two months from the date of that last failure. There is no appointment needed for a knowledge exam, but you must be at the branch at least 30 minutes before it closes to sit one that day.",
        trap:
          "Seven days is the skills exam wait. The knowledge exam only costs you a day.",
        excerptKey: "knowledge-exam-retake",
        sourceLabel: "Indiana Driver's Manual - Chapter 1, Knowledge Exam",
        sourceUrl: CH(1),
      },
      {
        id: "in_s2_30",
        topic: "rules",
        question: "Another driver is overtaking you on a two-lane road. What does Indiana ask you to do?",
        choices: [
          "Move onto the shoulder to give room",
          "Allow the pass safely and do not increase your speed",
          "Slow to well below the limit until they are past",
          "Flash your headlights once they are alongside",
        ],
        correctIndex: 1,
        explanation:
          "Let them by and hold your speed. Speeding up while someone is alongside strands them on the wrong side of the road.",
        context:
          "The BMV's skills examiner watches for exactly this: reacting appropriately to being overtaken by maintaining your speed and providing enough room to pass. On multi-lane roads the matching duty is to keep slower traffic in the right lane and leave the left for faster and passing vehicles.",
        trap:
          "Pulling onto the shoulder is not the courteous answer Indiana asks for. Hold your lane and your speed.",
        excerptKey: "being-passed",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Being Passed",
        sourceUrl: CH(7),
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Real Exam Conditions",
    difficulty: "medium",
    description:
      "Chapter 6, 7 and 8 material at the difficulty the BMV actually asks it - the numbers, the exceptions, and the rules Indiana states differently from the states next door.",
    questions: [
      {
        id: "in_s3_01",
        topic: "signals",
        question:
          "A motorcyclist has been stopped at a red light for some time and the signal will not change. What does Indiana allow?",
        choices: [
          "Proceed with due caution after a complete stop of at least two minutes",
          "Treat the light as a yield sign after 30 seconds",
          "Reverse and take another route",
          "Proceed as soon as the intersection is clear",
        ],
        correctIndex: 0,
        explanation:
          "Indiana lets a stuck operator go through a steady red, but only after coming to a complete stop for at least two minutes and then exercising due caution.",
        context:
          "The rule exists because a light motorcycle or motor driven cycle often will not trip the loop detector buried in the road. Indiana extends the same two-minute allowance to bicyclists at a bicycle traffic signal, and explicitly withholds it from autocycles - which are three-wheeled but heavy enough to be seen by the detector.",
        trap:
          "Two minutes is a long time and is the actual figure. There is no thirty-second version, and it does not apply to cars.",
        excerptKey: "dead-red-two-minutes",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Approaching a Red Light or Stop Sign",
        sourceUrl: CH(6),
        commonlyMissed: true,
      },
      {
        id: "in_s3_02",
        topic: "sharing",
        question:
          "A fully loaded tractor-trailer with hot brakes is travelling at 55 mph. Roughly how far will it need to stop?",
        choices: ["About 130 feet", "About 200 feet", "About 100 feet", "More than 400 feet"],
        correctIndex: 3,
        explanation:
          "More than 400 feet - more than the length of a football field. An average car at the same speed stops in roughly 130 to 140 feet.",
        context:
          "The two figures side by side are the point: the truck needs about three times the distance the car behind it does. That is why Indiana tells you never to cut in front of a tractor-trailer to reach an exit, and why trying to beat one into a single-lane construction zone is singled out as particularly dangerous. The BMV asks this one in its own published practice exam.",
        trap:
          "The car's 130 to 140 feet is the distractor sitting right next to the answer in the manual. The truck's figure is more than 400.",
        excerptKey: "truck-stopping-400",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Sharing the Road with Tractor-Trailers",
        sourceUrl: CH(7),
        commonlyMissed: true,
      },
      {
        id: "in_s3_03",
        topic: "rules",
        question:
          "At night, within what distance of an oncoming vehicle must you dip to low beam in Indiana?",
        choices: ["200 feet", "500 feet", "300 feet", "1,000 feet"],
        correctIndex: 1,
        explanation:
          "500 feet for an oncoming vehicle. The separate figure for following someone is 200 feet.",
        context:
          "Indiana uses 500 feet twice and 200 feet once, which is what makes the pair worth memorising as a set: headlights on whenever visibility drops below 500 feet, low beams within 500 feet of oncoming traffic, and low beams within 200 feet of the vehicle you are following. Both dipping rules exist for the same reason - the other driver's mirrors and eyes.",
        trap:
          "200 feet is the following figure, not the oncoming one. Oncoming gets the larger distance because the closing speed is doubled.",
        excerptKey: "low-beams-500-200",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Headlights",
        sourceUrl: CH(7),
        commonlyMissed: true,
      },
      {
        id: "in_s3_04",
        topic: "licensing",
        question:
          "You have just been issued an Indiana probationary driver's licence. Who may ride with you during the first 180 days?",
        choices: [
          "Any two passengers under 21",
          "Anyone, provided everyone is belted",
          "Nobody at all under any circumstances",
          "Your sibling, child or spouse, or anyone if a qualifying adult is in the front seat",
        ],
        correctIndex: 3,
        explanation:
          "For the first 180 days you carry no passengers unless a qualifying adult is in the front seat - but your own child, stepchild, sibling, step or half-sibling, or spouse may ride with you without one.",
        context:
          "The qualifying adult is a licensed driver aged 25 or over, your spouse if licensed and 21 or over, or a driver training school instructor. The same 180-day clock runs the night restriction: no driving between 10 p.m. and 5 a.m. Once the 180 days are up and if you are still under 18, the curfew loosens to after 11 p.m. Sunday through Thursday, before 5 a.m. Monday through Friday, and 1 a.m. to 5 a.m. at weekends.",
        trap:
          "The family exception is narrower than it sounds. It covers your own child, stepchild, sibling or spouse - not cousins, and not friends.",
        excerptKey: "probationary-family-exception",
        sourceLabel: "Indiana Driver's Manual - Chapter 1, Probationary Driver's License Passenger Restrictions",
        sourceUrl: CH(1),
        commonlyMissed: true,
      },
      {
        id: "in_s3_05",
        topic: "safety",
        question: "Your car begins to skid and it has anti-lock brakes. What do you do?",
        choices: [
          "Keep firm continuous pressure on the brake and steer normally",
          "Pump the brake pedal rapidly",
          "Release the brake entirely and coast",
          "Apply the parking brake",
        ],
        correctIndex: 0,
        explanation:
          "With ABS you hold the brake down with steady pressure and steer where you want to go. Pumping defeats the system, which is already modulating for you.",
        context:
          "The manual gives the conventional-brake version separately: ease off the accelerator and turn the wheel in a controlled way in the direction the rear of the car is sliding, without steering too far or snapping back the other way. It also tells you what a working ABS feels like - a mechanical noise, vibration, or increased resistance in the pedal - so you do not mistake it for a fault and lift off.",
        trap:
          "Pumping is the technique for cars without ABS. On a car with it, pumping is the one thing that stops it working.",
        excerptKey: "abs-do-not-pump",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Skidding",
        sourceUrl: CH(7),
      },
      {
        id: "in_s3_06",
        topic: "signs",
        question: "What kind of information does a rectangular sign carry in Indiana?",
        choices: [
          "Warnings about hazardous road conditions only",
          "Regulations, helpful information, or an advisory speed",
          "Nothing - rectangles are always route markers",
          "Only permanent speed limits",
        ],
        correctIndex: 1,
        explanation:
          "The rectangle is the one shape Indiana lets do three jobs: regulations such as speed limits and turn prohibitions, information such as route markers and destinations, and advisory speeds for a sharp curve.",
        context:
          "That triple duty is why the rectangle alone will not tell you what to do - you have to read it. Colour narrows it down: a white rectangle carries a regulation, a green one guidance, a blue one services. The advisory speed rectangle is usually mounted under a diamond warning sign rather than standing on its own.",
        trap:
          "An advisory speed on a rectangle is not the legal limit for the road. It is the safe speed for the feature the diamond above it is warning about.",
        excerptKey: "shape-rectangular",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Traffic Sign Shapes",
        sourceUrl: CH(6),
      },
      {
        id: "in_s3_07",
        topic: "impairment",
        question:
          "Indiana's manual compares going 18 hours without sleep to what level of impairment?",
        choices: [
          "A blood alcohol content of .02",
          "A blood alcohol content of .08",
          "A blood alcohol content of .05",
          "No measurable impairment",
        ],
        correctIndex: 1,
        explanation:
          "Eighteen hours awake leaves a driver as impaired as one at .08 - Indiana's legal alcohol limit.",
        context:
          "The manual treats fatigue as a form of impairment rather than a comfort problem, and notes that drivers aged 16 to 29 account for about 64 percent of fatigue-related crashes. It lists the warning signs it expects you to act on: yawning and heavy eyelids, not remembering the last few miles, missing signs or exits, drifting between lanes, head nodding, hitting the rumble strips. The only real fix it offers is sleep.",
        trap:
          "Coffee, an open window and loud music are not on Indiana's list. The manual's remedies are stopping for a nap or handing over the wheel.",
        excerptKey: "drowsy-18-hours",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Drowsy Driving",
        sourceUrl: CH(7),
      },
      {
        id: "in_s3_08",
        topic: "rightOfWay",
        question:
          "You are following a driver who has signalled a turn and slowed down. What does Indiana expect of you?",
        choices: [
          "Pass on the right, since the lane ahead is clear",
          "Sound your horn to warn them",
          "Maintain speed until they have actually turned",
          "Slow down and be prepared to stop",
        ],
        correctIndex: 3,
        explanation:
          "Slow down and get ready to stop. A driver who has signalled and slowed may have to wait for pedestrians or oncoming traffic before completing the turn.",
        context:
          "The manual extends the same expectation to a driver who has merely slowed and may be planning to turn, without any signal at all. It fits Indiana's wider picture of following distance: two to three seconds behind an ordinary vehicle, more behind a motorcycle, and following too closely carries six points on your record.",
        trap:
          "A signalled turn is not the same as a completed one. Turning vehicles routinely stop dead in the lane while waiting for a gap.",
        excerptKey: "following-turning-vehicles",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Following Turning Vehicles",
        sourceUrl: CH(7),
      },
      {
        id: "in_s3_09",
        topic: "parking",
        question:
          "You hold a valid disability parking placard. May you park in the diagonally striped area beside an accessible space?",
        choices: [
          "Yes, the placard covers both the space and the stripes",
          "Only if the adjacent accessible space is occupied",
          "No, that area is off limits at all times, placard or not",
          "Only for short stops under fifteen minutes",
        ],
        correctIndex: 2,
        explanation:
          "The striped area is prohibited at all times, even with a valid placard. It is not extra parking; it is the space a wheelchair user needs to get in and out.",
        context:
          "Indiana explains the purpose rather than just the ban: an accessible vehicle needs that area to deploy its ramp, and a wheelchair user needs it to transfer. The manual repeats the prohibition in two separate chapters, which is a fair signal of how often people get it wrong. Placards themselves come in permanent and temporary forms, and using an expired one can bring a fine.",
        trap:
          "Holding a placard makes this worse rather than better. The stripes are for someone else's use, not a bonus bay for permit holders.",
        excerptKey: "placard-striped-space",
        sourceLabel: "Indiana Driver's Manual - Chapter 3, Parking Placards",
        sourceUrl: CH(3),
        commonlyMissed: true,
      },
      {
        id: "in_s3_10",
        topic: "emergencies",
        question:
          "Your vehicle stalls on a railroad crossing and a train is approaching. What does Indiana tell you to do?",
        choices: [
          "Get everyone out and run at a 45-degree angle toward the oncoming train",
          "Stay in the vehicle and brace for impact",
          "Try to restart the engine until the last moment",
          "Get out and run directly away from the tracks",
        ],
        correctIndex: 0,
        explanation:
          "Everyone gets out, and you run at a 45-degree angle away from the tracks in the direction the train is coming from - so the debris the collision throws forward goes away from you.",
        context:
          "Indiana gives you a timing figure too: once the crossing lights start flashing and the gate begins to lower, you have roughly 20 seconds. If your vehicle is disabled on a crossing and no train is coming, call the Emergency Notification System on the blue sign attached to the crossing gate first, then 911, because ENS can stop the trains.",
        trap:
          "Running away from the train feels right and puts you in the path of the wreckage it pushes forward. Indiana says angle toward it.",
        excerptKey: "rr-45-degrees",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Safety at Railroad Crossings",
        sourceUrl: CH(7),
        commonlyMissed: true,
      },
      {
        id: "in_s3_11",
        topic: "rules",
        question:
          "How close to an intersection or railroad crossing does Indiana forbid passing another vehicle?",
        choices: ["Within 100 feet", "Within 50 feet", "Within 200 feet", "Within 300 feet"],
        correctIndex: 0,
        explanation:
          "100 feet, and the same figure covers a bridge, a viaduct and a tunnel as well as intersections and railroad crossings.",
        context:
          "That 100-foot figure turns up three times in Indiana's passing rules: the no-passing zone around those features, the separate instruction not to pass within 100 feet of a railroad crossing, and the requirement to be back on your own side no less than 100 feet before an oncoming vehicle. Passing is also forbidden on or approaching a curve and approaching the crest of a hill, with no distance attached.",
        trap:
          "The curve and hill-crest prohibitions have no measurement at all. Approaching either one is enough on its own.",
        excerptKey: "no-passing-100-feet",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Prohibited Passing",
        sourceUrl: CH(7),
      },
      {
        id: "in_s3_12",
        topic: "licensing",
        question:
          "How many hours of supervised driving practice must an Indiana licence applicant log, and how many at night?",
        choices: [
          "40 hours, 8 of them at night",
          "50 hours, 10 of them at night",
          "30 hours, 6 of them at night",
          "60 hours, 12 of them at night",
        ],
        correctIndex: 1,
        explanation:
          "50 hours in total with at least 10 of them after dark, recorded on the BMV's Log of Supervised Driving Practice.",
        context:
          "The supervising driver has to be licensed and at least 25, or your spouse if licensed and at least 21, and for applicants under 18 that adult must be related to you by blood, marriage or legal status - or be a driver training school instructor or certified rehabilitation specialist. A daylight-only restriction on the permit removes the 10 night hours but not the 50 total. Under-18 logs need a parent or guardian signature.",
        trap:
          "The 30 hours and six hours figures belong to the driver education course itself - theory and behind-the-wheel - not to the supervised practice log.",
        excerptKey: "supervised-10-night",
        sourceLabel: "Indiana Driver's Manual - Chapter 1, Driver's License Age and Experience Requirements",
        sourceUrl: CH(1),
      },
      {
        id: "in_s3_13",
        topic: "signals",
        question:
          "You are already in the middle of an intersection waiting to turn left when your light goes red. What does Indiana say?",
        choices: [
          "Reverse out of the intersection",
          "You may complete the turn once oncoming traffic has stopped",
          "You must stay put until the light is green again",
          "You must complete the turn immediately regardless of oncoming traffic",
        ],
        correctIndex: 1,
        explanation:
          "If you are already in the intersection, you finish the turn once the oncoming traffic has stopped for its own red.",
        context:
          "The rule that gets you into that position is the one about only one vehicle at a time moving into an intersection to turn left. It is also why the manual warns you not to enter the intersection after the light has gone yellow unless you are already in it. Getting caught mid-turn is normal; what you must not do is enter fresh on a red.",
        trap:
          "Reversing is never the answer in an intersection. Indiana tells you plainly never to back into one.",
        excerptKey: "red-mid-intersection-turn",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Turning through a Solid Red Light",
        sourceUrl: CH(6),
      },
      {
        id: "in_s3_14",
        topic: "sharing",
        question:
          "Where are a tractor-trailer driver's blind spots, according to the Indiana manual?",
        choices: [
          "Up to 20 feet ahead of the cab and up to 200 feet behind the vehicle",
          "Only alongside the trailer",
          "Up to 50 feet ahead and 50 feet behind",
          "Directly behind the cab only",
        ],
        correctIndex: 0,
        explanation:
          "Up to 20 feet in front of the cab and as much as 200 feet behind, plus the areas alongside the cab and the trailer.",
        context:
          "The manual gives a practical test that beats memorising distances: if you cannot see the truck driver's mirrors, the driver cannot see you. Lingering in those zones removes the driver's ability to take evasive action, which is why Indiana tells you to pass a truck completely and always on the left, rather than sitting alongside.",
        trap:
          "The 200-foot rear blind spot is far longer than drivers expect, and sitting in it is the position most people fall into on a highway.",
        excerptKey: "truck-blind-spots",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Blind Spots",
        sourceUrl: CH(7),
      },
      {
        id: "in_s3_15",
        topic: "impairment",
        question:
          "An Indiana driver refuses to submit to a chemical test after an officer establishes probable cause. What does Chapter 5 of the manual state?",
        choices: [
          "A 90-day suspension",
          "A one-year suspension of driving privileges",
          "No suspension unless a conviction follows",
          "A 180-day suspension",
        ],
        correctIndex: 1,
        explanation:
          "The manual gives a flat one-year suspension for refusing, rising to two years where the driver has a previous conviction for operating while intoxicated.",
        context:
          "Refusing and failing are punished differently, and it is worth holding both: failing the test brings a 180-day suspension, refusing it brings a year. Those suspensions arise from the probable-cause finding itself and sit on top of whatever the court does afterwards, which may include an ignition interlock device or an order for specialised driving privileges.",
        trap:
          "The BMV's Common Traffic Violations page words this differently, saying 'up to two years' for a refusal and 'up to 180 days' for a failed test. The manual's specific figures are the ones its own exam is written from.",
        excerptKey: "chemical-test-refuse-1yr",
        sourceLabel: "Indiana Driver's Manual - Chapter 5, Operating a Vehicle While Intoxicated",
        sourceUrl: CH(5),
        commonlyMissed: true,
      },
      {
        id: "in_s3_16",
        topic: "safety",
        question: "Which vehicles must always stop at an Indiana railroad crossing?",
        choices: [
          "All vehicles with more than two axles",
          "Vehicles carrying passengers for hire, school buses, and vehicles carrying explosives or flammable liquids",
          "Only school buses",
          "Any vehicle towing a trailer",
        ],
        correctIndex: 1,
        explanation:
          "Three categories: vehicles carrying passengers for hire, school buses, and vehicles carrying explosives or flammable liquids.",
        context:
          "Indiana also fixes where they stop - no closer than 15 feet and no farther than 50 feet from the nearest rail, close enough to see along the track but clear of the train. The requirement does not apply at abandoned tracks that have been properly signed, or where the rails have been lifted out of the roadway.",
        trap:
          "The 15-to-50-foot window is a range, not a minimum. Stopping 60 feet back is as wrong as stopping 10 feet back.",
        excerptKey: "rr-stop-15-50",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Railroad Crossings",
        sourceUrl: CH(7),
      },
      {
        id: "in_s3_17",
        topic: "signs",
        question:
          "A crossbuck is displayed at a railroad crossing with no lights, gates or stop sign. How do you treat it?",
        choices: [
          "As a stop sign requiring a full stop every time",
          "As a sign you may ignore if no bells are sounding",
          "As a yield sign - the decision to stop or cross is yours",
          "As a warning that applies only to commercial vehicles",
        ],
        correctIndex: 2,
        explanation:
          "A crossbuck standing alone works as a yield sign, so you judge it - but you must stop if a train is approaching.",
        context:
          "Add hardware and the rule hardens. A crossbuck displayed with a stop sign means a complete stop every time, and the manual warns you never to assume no train is coming simply because there is only a stop sign there. Where there are active bells, flashing lights or gates you must stop and stay stopped until the warning cancels or an officer or railroad flagman waves you on.",
        trap:
          "Yield here does not mean roll through. It means you carry the responsibility for looking, and you stop if anything is coming.",
        excerptKey: "crossbuck-yield",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Crossbucks",
        sourceUrl: CH(7),
      },
      {
        id: "in_s3_18",
        topic: "rules",
        question: "Where may you make a U-turn on an Indiana interstate highway?",
        choices: [
          "Nowhere - drive on to the next exit and re-enter going the other way",
          "At any official crossover in the median",
          "Only where the shoulder is wide enough",
          "Only between midnight and 5 a.m.",
        ],
        correctIndex: 0,
        explanation:
          "Never on an interstate. Indiana tells you to carry on to the next exit and rejoin in the opposite direction.",
        context:
          "The median crossovers you see are not an exception for ordinary drivers: crossing the median or a crossover to turn round is illegal for any vehicle other than an emergency or highway maintenance vehicle. U-turns are separately forbidden on a curve or approaching a hill crest anywhere. Where Indiana does want you to make one is at a median U-turn or J-turn intersection, which is signed for the purpose.",
        trap:
          "A gap in the median is not permission. Those crossovers exist for emergency and maintenance vehicles.",
        excerptKey: "interstate-median-u-turn-illegal",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Driving on Interstate Highways",
        sourceUrl: CH(7),
      },
      {
        id: "in_s3_19",
        topic: "licensing",
        question:
          "How many active points on your Indiana record trigger a knowledge exam when you renew your licence?",
        choices: ["Two or more", "Four or more", "Ten or more", "Six or more"],
        correctIndex: 3,
        explanation:
          "Six or more active points means you sit the knowledge exam again to renew.",
        context:
          "Points stay active for two years from the date of conviction, so the threshold is reachable quickly: a single 16-to-25-mph speeding conviction is four points, unsafe lane movement is four, disregarding a stop or yield sign is four, and following too closely or failing to yield to an emergency vehicle is six on its own. A BMV-approved Driver Safety Program course earns a four-point credit, but only one such credit in any three-year period.",
        trap:
          "The four-point credit is not a reset button. One credit every three years is all Indiana allows.",
        excerptKey: "renew-six-points",
        sourceLabel: "Indiana Driver's Manual - Chapter 4, Renewing a Credential",
        sourceUrl: CH(4),
      },
      {
        id: "in_s3_20",
        topic: "speed",
        question:
          "Unless posted otherwise, what is the maximum speed for a school bus on an Indiana road that is not an interstate or state highway?",
        choices: ["55 mph", "50 mph", "40 mph", "45 mph"],
        correctIndex: 2,
        explanation:
          "40 mph off the interstate and state highway network, or lower if the posted limit is lower. On an interstate or highway a school bus may run to 60.",
        context:
          "It is one of the few vehicle-specific limits Indiana publishes, alongside the 65 mph cap on trucks over 26,000 pounds on a rural interstate and the 25 mph ceiling that a slow-moving vehicle emblem announces. The bus figures matter to ordinary drivers mainly as a warning that a bus will be slower than the flow, not as something to overtake impatiently.",
        trap:
          "The two bus numbers are for different roads. 40 is the general figure; 60 applies on an interstate or highway.",
        excerptKey: "school-bus-40",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, School Bus Speed Limits",
        sourceUrl: CH(7),
      },
      {
        id: "in_s3_21",
        topic: "emergencies",
        question:
          "You have stopped on the shoulder after a breakdown. Where does Indiana say to place your red emergency reflective triangle?",
        choices: [
          "50 feet behind the vehicle",
          "Directly behind the rear bumper",
          "200 feet behind, or 500 feet if you are on a hill or curve",
          "100 feet in front of the vehicle",
        ],
        correctIndex: 2,
        explanation:
          "200 feet back as standard, extended to 500 feet where a hill or curve hides you from approaching traffic.",
        context:
          "The manual's roadside routine puts several things in order: pull onto the shoulder if you can, switch on the hazard lights, keep a torch within reach, and if you have to get out, leave by the passenger side after checking for traffic and drop-offs. Trucks, buses and tractor-trailers carry heavier requirements - three bi-directional reflective triangles, or six fuses or three liquid-burning flares.",
        trap:
          "Hazard lights alone are not the whole answer on a hill or curve. That is precisely where Indiana stretches the triangle out to 500 feet.",
        excerptKey: "triangle-200-500",
        sourceLabel: "Indiana Driver's Manual - Chapter 8, Roadside Emergency Situations",
        sourceUrl: CH(8),
      },
      {
        id: "in_s3_22",
        topic: "sharing",
        question:
          "Which lanes are trucks restricted to on an Indiana interstate with three or more lanes in one direction?",
        choices: [
          "The left lane only",
          "Any lane, provided they keep to the limit",
          "The centre lane only",
          "The right two lanes",
        ],
        correctIndex: 3,
        explanation:
          "The right two lanes where there are three or more in one direction. Where there are only two lanes in a direction, trucks are held to the right one.",
        context:
          "The manual separately notes that on multi-lane highways tractor-trailers sit in the centre lane, both to leave the outside lane free for local traffic joining and leaving, and to keep an escape route open in either direction. Reading the two passages together tells you where to expect a truck to be and why it will not simply pull over for you.",
        trap:
          "The centre-lane observation describes habit; the right-two-lanes rule is the restriction. They are not the same statement.",
        excerptKey: "truck-lane-restriction",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Driving on Interstate Highways",
        sourceUrl: CH(7),
      },
      {
        id: "in_s3_23",
        topic: "safety",
        question: "How does Indiana's manual say to check whether your tyres have enough tread?",
        choices: [
          "Put a penny in the groove - if any of Lincoln's head is covered, you have enough",
          "Measure the tread against the wear bars on the sidewall",
          "Check that the tread is at least 1/8 of an inch deep",
          "Look for cracking on the tyre wall",
        ],
        correctIndex: 0,
        explanation:
          "The penny test. Push Lincoln's head into the shallowest groove: if any part of his head is covered, the tread is legal and safe.",
        context:
          "Below that point - roughly 1/16 of an inch - the manual says your ability to grip in bad conditions is greatly reduced. It asks you to check tread and damage monthly or before a long trip, and to check pressures cold, comparing against the sticker in the driver's door jamb rather than the number moulded into the tyre's sidewall.",
        trap:
          "The sidewall figure is the tyre's maximum, not your car's recommended pressure. Indiana tells you in capitals not to use it.",
        excerptKey: "penny-test",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Tread Depth",
        sourceUrl: CH(7),
      },
      {
        id: "in_s3_24",
        topic: "rightOfWay",
        question:
          "A funeral procession is passing through an intersection where you have a green light. What applies?",
        choices: [
          "Your green light gives you priority",
          "You may proceed once three vehicles have passed",
          "The procession has the right of way regardless of the signal",
          "Both may proceed with caution",
        ],
        correctIndex: 2,
        explanation:
          "Official processions, funeral processions among them, hold the right of way whatever the signal is showing.",
        context:
          "Indiana groups this with the rule that a law enforcement officer's direction beats a signal or a sign. Both are cases where the normal traffic control stops reflecting what is actually happening at the intersection, and in both the manual asks you to defer rather than assert your light.",
        trap:
          "Cutting into a procession because your light is green is exactly what the rule forbids. Green does not outrank it.",
        excerptKey: "funeral-procession",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Traffic Control Officers and Official Processions",
        sourceUrl: CH(7),
      },
      {
        id: "in_s3_25",
        topic: "signals",
        question:
          "You want to turn right on a red light in Indiana. Which of these is required before you go?",
        choices: [
          "A complete stop, a clear path, no NO TURN ON RED sign, and the correct lane",
          "Only that the way looks clear",
          "A green arrow for your direction",
          "That you have waited at least ten seconds",
        ],
        correctIndex: 0,
        explanation:
          "All four conditions apply together: stop completely, check nothing is in or about to enter your path, check there is no sign forbidding it, and be in the right lane.",
        context:
          "Right on red is a default permission in Indiana that a sign can withdraw, not a right that survives one. A red arrow works the same way as a red ball for this purpose. The mirror-image rule is the left on red, which Indiana permits only from a one-way street onto a one-way street and on the same four conditions.",
        trap:
          "Slowing to a crawl is not a stop. The rolling right on red is one of the commonest ways to fail an Indiana skills exam outright.",
        excerptKey: "right-on-red",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Turning through a Solid Red Light",
        sourceUrl: CH(6),
      },
      {
        id: "in_s3_26",
        topic: "signs",
        question:
          "A fluorescent yellow-green sign appears at the roadside. What is Indiana using that colour for?",
        choices: [
          "Temporary work zone conditions",
          "Schools, pedestrians, bicycles, playgrounds and school bus routes",
          "Emergency evacuation routes",
          "Toll road information",
        ],
        correctIndex: 1,
        explanation:
          "Fluorescent yellow-green is Indiana's vulnerable-road-user colour: schools, pedestrians, bicycles, playgrounds and school bus routes.",
        context:
          "It sits alongside ordinary yellow, which prepares you for road conditions and hazards ahead, and is used where the state wants the sign to jump out of the background. Orange is the colour that means temporary conditions in a work zone, which is the confusion this question is built on.",
        trap:
          "Orange is the work zone colour. Fluorescent yellow-green is about people, not roadworks.",
        excerptKey: "sign-yellow-green",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Traffic Sign Colors",
        sourceUrl: CH(6),
      },
      {
        id: "in_s3_27",
        topic: "rules",
        question: "What does Indiana law say about aggressive driving?",
        choices: [
          "It is any single act of tailgating or speeding",
          "It applies only on interstate highways",
          "It requires at least three listed acts during one episode of continuous driving",
          "It is defined solely by exceeding the limit by 20 mph or more",
        ],
        correctIndex: 2,
        explanation:
          "Indiana's definition is cumulative: at least three of the listed acts within a single episode of continuous driving.",
        context:
          "The list is longer than most drivers expect and includes some mild-sounding entries - following too closely, unsafe operation, overtaking on the right by leaving the roadway, unsafe stopping or slowing, sounding the horn unnecessarily, failing to yield, disobeying a traffic control device, driving at an unsafe speed, and repeatedly flashing your headlights. Any three of those in one stretch of driving is enough.",
        trap:
          "Flashing your lights at someone and leaning on the horn are on the list. It does not take anything dramatic to reach three.",
        excerptKey: "aggressive-three-acts",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Aggressive Driving",
        sourceUrl: CH(7),
        commonlyMissed: true,
      },
      {
        id: "in_s3_28",
        topic: "licensing",
        question: "How long does a passed Indiana knowledge exam stay valid?",
        choices: ["180 days", "One year", "30 days", "Two years"],
        correctIndex: 0,
        explanation:
          "180 days. The BMV states it on its Knowledge Exam page; the manual does not give a figure at all.",
        context:
          "That 180-day window has company. You must hold a valid learner's permit for at least 180 days before applying for a licence, a permit that has been expired for more than 180 days means retaking the knowledge exam, and a driver's licence expired for more than 180 days brings back both the knowledge exam and an administrative penalty.",
        trap:
          "The permit itself lasts two years. It is the exam result inside it that expires at 180 days.",
        excerptKey: "bmv-exam-results-180",
        sourceLabel: "Indiana BMV - Knowledge Exam",
        sourceUrl: EXAM_PAGE,
      },
      {
        id: "in_s3_29",
        topic: "sharing",
        question:
          "You are approaching a tow truck parked on the shoulder with amber lights flashing, and you cannot change lanes. What does Indiana require?",
        choices: [
          "Nothing - the duty applies only to emergency vehicles",
          "Reduce speed to 10 mph under the posted limit and proceed with caution",
          "Come to a complete stop until it is clear",
          "Sound your horn as you pass",
        ],
        correctIndex: 1,
        explanation:
          "Amber lights on an authorised parked vehicle trigger the same duty as an emergency vehicle: move over if you can, and if you cannot, drop to 10 mph below the limit.",
        context:
          "Indiana's Move Over law reaches wider than most drivers realise. Recovery vehicles and tow trucks, highway maintenance, utility service vehicles, refuse trucks and survey or construction vehicles all count, as does any disabled vehicle running its hazard lights. Failing an emergency vehicle is a Class A infraction; the amber and disabled cases are Class B.",
        trap:
          "A tow truck is not an emergency vehicle, and the duty applies anyway. The lights are amber but the obligation is real.",
        excerptKey: "move-over-amber",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Authorized Parked Vehicles",
        sourceUrl: CH(7),
        commonlyMissed: true,
      },
      {
        id: "in_s3_30",
        topic: "safety",
        question: "You are driving into thick fog. What does Indiana tell you to do with your headlights?",
        choices: [
          "Switch to high beam for maximum reach",
          "Use parking lights only",
          "Switch them off and rely on daytime running lights",
          "Use low beam, which lights the road better through fog",
        ],
        correctIndex: 3,
        explanation:
          "Low beams. High beams bounce off the water droplets and throw the light back at you, so they make visibility worse rather than better.",
        context:
          "Indiana asks for reduced speed and caution in fog, and for headlights and flashing emergency signals to be used while you are driving in it. If the fog closes in to near-zero visibility the instruction changes: pull off the road as far as you can and stop, rather than crawling on.",
        trap:
          "Brighter is not better here. High beams in fog reduce what you can see, which is why the manual bans them outright.",
        excerptKey: "fog-low-beams",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Fog",
        sourceUrl: CH(7),
      },
      {
        id: "in_s3_31",
        topic: "impairment",
        question:
          "What does the Indiana manual say about prescription and over-the-counter medicines and driving?",
        choices: [
          "Only illegal drugs affect driving ability",
          "They are safe if taken at the recommended dose",
          "They may impair reasoning and coordination, so check the label and ask a professional",
          "They matter only when combined with alcohol",
        ],
        correctIndex: 2,
        explanation:
          "Indiana groups prescription drugs, over-the-counter drugs and recreational drugs together as things that can impair reasoning and coordination, and tells you to read the label and speak to a doctor or pharmacist before driving.",
        context:
          "That matters legally as well as practically. Operating while intoxicated in Indiana is not limited to alcohol, so a driver impaired by a lawfully prescribed medicine can still be committing the offence with a blood alcohol reading of zero. The manual makes the same point about fatigue, which it also lists among sedative-medication risks.",
        trap:
          "A valid prescription is not a defence to driving impaired. The offence turns on your condition, not on the legality of the substance.",
        excerptKey: "prescription-drugs",
        sourceLabel: "Indiana Driver's Manual - Chapter 8, Impaired Driving",
        sourceUrl: CH(8),
      },
      {
        id: "in_s3_32",
        topic: "parking",
        question: "Which of these is on Indiana's list of places you may not park?",
        choices: [
          "Any street with a posted speed limit above 30 mph",
          "Within 50 feet of a bus stop",
          "Any unlit street after dark",
          "Alongside another parked vehicle",
        ],
        correctIndex: 3,
        explanation:
          "Double parking is on the list explicitly - you may not park beside another parked vehicle.",
        context:
          "Indiana gives a single list of prohibited places. It covers highways unless posted otherwise, intersections and crosswalks, sidewalks and the area in front of any driveway, and anywhere within 15 feet of a hydrant or in a fire lane. It also covers bridges and other elevated structures such as a tunnel, yellow kerbs, accessible spaces without a placard, and the striped area beside them.",
        trap:
          "Hazard lights do not make double parking legal. The prohibition is on the position, not on how you flag it.",
        excerptKey: "parking-yellow-curb",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Illegal Parking Areas",
        sourceUrl: CH(7),
      },
      {
        id: "in_s3_33",
        topic: "emergencies",
        question: "Your car has plunged into deep water. What does Indiana tell you to do?",
        choices: [
          "Open a door immediately while the car is still floating",
          "Wait for the cabin to fill so the pressure equalises",
          "Swim for shore as soon as you are free of the car",
          "Release your belt, open a window, get everyone out and move onto the roof",
        ],
        correctIndex: 3,
        explanation:
          "Belt off, window open, everyone out, and onto the roof. The manual says a vehicle usually floats for several minutes, which is the window you have.",
        context:
          "Indiana is explicit that you should not try the door: water pressure makes it almost impossible to open and it floods the cabin if it does give. Electric windows will normally still work unless the impact has destroyed the electrics. From the roof you call 911 and pick out the nearest dry land, and swimming for shore is a last resort rather than a first move.",
        trap:
          "Never go back in for possessions. The manual states that one flatly, and it is the instruction people ignore.",
        excerptKey: "water-open-window",
        sourceLabel: "Indiana Driver's Manual - Chapter 8, Plunging into Water",
        sourceUrl: CH(8),
      },
      {
        id: "in_s3_34",
        topic: "rightOfWay",
        question:
          "You are at a flashing red light and another driver stops opposite at the same moment. Who goes first?",
        choices: [
          "Whoever is going straight",
          "You, if you are on the through road",
          "The vehicle on the right - the vehicle on the left yields",
          "Whoever signals first",
        ],
        correctIndex: 2,
        explanation:
          "Indiana states it as the vehicle on the left yielding the right of way, which means the driver on the right moves off first.",
        context:
          "A flashing red is a stop sign in light form, so the whole all-way-stop sequence applies: give way to any vehicle already in the intersection and to any vehicle that stopped before you did, and use the left-yields rule only for a genuine tie. Where cross traffic is not required to stop at all, you go only when the intersection is clear and you will not interfere with them.",
        trap:
          "The manual phrases it as the left yielding rather than the right having priority. Same result, and the wording trips people who read it quickly.",
        excerptKey: "flashing-red-tie",
        sourceLabel: "Indiana Driver's Manual - Chapter 6, Red Flashing Lights",
        sourceUrl: CH(6),
      },
      {
        id: "in_s3_35",
        topic: "speed",
        question:
          "You are on a county road in Indiana with no speed limit sign in sight. What is the maximum?",
        choices: ["45 mph", "35 mph", "50 mph", "55 mph"],
        correctIndex: 3,
        explanation:
          "55 mph on a county road unless posted otherwise - the same figure Indiana applies to an urban interstate and a non-divided state highway.",
        context:
          "Grouping those three together is the easiest way to hold the ladder in mind: 55 covers the urban interstate, the non-divided state highway and the county road. Above them sit the rural state divided highway at 60 and the rural interstate at 70; below them the urban residential 30 and the alley 15. A posted sign overrides all of it, and none of these numbers is safe in bad conditions.",
        trap:
          "A gravel or narrow county road can carry the same 55 as a state highway. The number is a legal maximum, not a statement that the road is good for it.",
        excerptKey: "county-roads-55",
        sourceLabel: "Indiana Driver's Manual - Chapter 7, Urban Speed Limits",
        sourceUrl: CH(7),
      },
    ],
  },
];
