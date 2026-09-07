import type { DrivingTestSet } from "../types";

// New Brunswick practice sets 1 to 3.
//
// Every fact below was checked against the official sources and nothing else:
// the New Brunswick Driver's Handbook (nine part PDFs on gnb.ca, one continuous
// printed page numbering 9-106, no edition label of any kind, all nine files
// produced 19 July 2022), the Motor Vehicle Act RSNB 1973 c M-17 on
// laws.gnb.ca, and the Province's own Graduated drivers' licences and Written
// and road tests pages.
//
// Five things are worth naming up front, because they are where this bank
// departs from what the handbook alone would tell a learner.
//
// 1. THE SCHOOL-ZONE SPEED IN THE BOOK IS THE OLD ONE. Page 36 and page 87 both
//    say 50 km/h. Section 140.1 of the Act was replaced by 2023, c.7 and now
//    reads 30 km/h in a municipality and 50 km/h in a rural community, regional
//    municipality or rural district, between 7:30 a.m. and 4:00 p.m. on school
//    days. The hours are identical in both, so every question about the HOURS is
//    safe either way; the one question about the number states the Act's figure
//    and says in its own trap note that the book still prints 50.
// 2. THE SIGN EXAM IS NOT SCORED OUT OF 20 FLAT. Page 16: twenty signs, and you
//    must correctly identify stop, yield and school zone, with no more than four
//    errors on the rest. Three signs are compulsory.
// 3. THE POINT SYSTEM RUNS DOWNWARDS FOR FOUR YEARS. Page 20: a newly licensed
//    driver - anyone licensed less than four years - is CREDITED with four
//    points, gains two a year to a maximum of ten, and is suspended at zero.
//    Distracted driving alone is five.
// 4. THE PHONE RULE HAS NO SECTION NUMBER IN THE BOOK. Page 58 describes the ban
//    in prose. Sections 265.02, 265.03 and 265.04 of the Act carry the actual
//    prohibition, the hands-free exception and the display-screen rule, and
//    265.041 doubles the minimum fine.
// 5. THE ROADSIDE SUSPENSION LADDER IS NOT IN THE BOOK AT ALL. Section
//    310.01(4), as amended by 2024, c.16 with effect from 1 January 2025, sets
//    seven days for a first roadside revocation, 15 for a second within five
//    years and 30 for a third. The handbook's page 66 table is about vehicle
//    IMPOUNDMENT, which is a different thing, and a learner who reads only the
//    book will confuse the two.
//
// Questions are original. No handbook sentence is reproduced as a question, no
// item is lifted from a practice-test site, and the explanation, context and
// trap notes are written from scratch. Where a number appears (5 metres, 30
// metres, 150 metres, 24 months), it is the number the Province publishes.
//
// Spelling follows Canadian usage and the handbook's own: licence, centre,
// metres, kilometres, colour, offence, signalling - and "tires", which is what
// New Brunswick and every other Canadian jurisdiction writes.

const DOCS = "https://www.gnb.ca/content/dam/GNB3/t/dt-ct/handbook-manuel/docs";
/** Printed handbook page number to the page inside that part's own PDF. */
const p1 = (p: number) => `${DOCS}/part-1-licensing-of-drivers.pdf#page=${p - 8}`;
const p2 = (p: number) => `${DOCS}/part-2-registration-of-vehicles.pdf#page=${p - 23}`;
const p3 = (p: number) => `${DOCS}/part-3-equipment.pdf#page=${p - 27}`;
const p4 = (p: number) =>
  `${DOCS}/part-4-traffic-on-the-highway-rules-of-the-road.pdf#page=${p - 32}`;
const p5 = (p: number) => `${DOCS}/part-5-safe-driving.pdf#page=${p - 53}`;
const p6 = (p: number) =>
  `${DOCS}/part-6-traffic-on-the-highway-sharing-the-road.pdf#page=${p - 76}`;
const p7 = (p: number) => `${DOCS}/part-7-traffic-signs.pdf#page=${p - 85}`;
const mva = (s: string) => `https://laws.gnb.ca/en/showfulldoc/cs/M-17#se:${s}`;

const HB = "New Brunswick Driver's Handbook";
const ACT = "Motor Vehicle Act";

export const newbrunswickSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "New Brunswick Basics",
    difficulty: "starter",
    description:
      "The rules you meet on your first drive in New Brunswick: what the shapes and colours mean, who goes first, and the handful of numbers the two written exams expect you to know cold.",
    questions: [
      {
        id: "nb_s1_01",
        topic: "signs",
        question:
          "A red eight-sided sign with white lettering is ahead of you. What does the handbook say it requires?",
        choices: [
          "Come to a full stop and be sure the way is clear before proceeding",
          "Slow down and continue if nothing is coming",
          "Yield to traffic on the wider road, then carry on",
          "Stop only when a pedestrian is waiting",
        ],
        correctIndex: 0,
        explanation:
          "The octagon is reserved for STOP and nothing else. New Brunswick's own wording is a full stop, followed by checking that the way is genuinely clear before you move again.",
        context:
          "Part 7 teaches signs by shape and colour before words, because a shape stays readable in fog, glare or a language you do not read. Octagon means stop, a downward triangle with a red border means yield, a yellow diamond warns of something ahead, and a fluorescent yellow pentagon marks a school zone. Stop, yield and school zone are the three the Road Sign Recognition Exam will not let you miss.",
        trap:
          "A rolling stop is not a stop. The wheels have to stop turning, however empty the cross street looks at the time.",
        excerptKey: "stop-sign-shape",
        sourceLabel: `${HB} - Part 7: Traffic Signs, 7.1 Six basic sign shapes`,
        sourceUrl: p7(86),
      },
      {
        id: "nb_s1_02",
        topic: "signals",
        question:
          "You are stopped at a steady red light in New Brunswick and want to turn right. What does the handbook allow?",
        choices: [
          "Turn right without stopping if the way looks clear",
          "Turn right only where a sign expressly permits it",
          "Turn right only once the light shows a green arrow",
          "Turn right after a full stop, unless a sign says otherwise, giving way to pedestrians and other traffic",
        ],
        correctIndex: 3,
        explanation:
          "Right on red is the default in New Brunswick, not a special permission. Two things attach to it: the vehicle must first be brought to a full stop, and any sign forbidding the turn overrides the default.",
        context:
          "A red light means stop at the stop line, or if there is none, before the crosswalk, or if there is none, before the intersection. From that stop you may turn right unless a sign says no right turn on red. Having stopped, you still give way to pedestrians lawfully in the crosswalk and to everyone else lawfully using the intersection.",
        trap:
          "\"Clear enough to go\" is not the test. If you never came to a full stop, the turn is unlawful on an empty street at 3 a.m.",
        excerptKey: "right-on-red",
        sourceLabel: `${HB} - Part 4: Rules of the road, 4.15 Traffic control signals`,
        sourceUrl: p4(43),
        commonlyMissed: true,
      },
      {
        id: "nb_s1_03",
        topic: "rightOfWay",
        question:
          "You and another driver reach a four-way stop at the same moment, at right angles to each other. Who goes first?",
        choices: [
          "The driver on the right",
          "Whoever signals first",
          "The driver going straight, ahead of any turning driver",
          "The driver on the left, being further from the crossing traffic",
        ],
        correctIndex: 0,
        explanation:
          "New Brunswick's tie-breaker is the driver on your right. It only comes into play when arrival really is simultaneous - if one of you clearly arrived first, that driver goes.",
        context:
          "Part 4 sets right of way out as an order. First, you yield to a vehicle that has already entered the intersection. Then, when two vehicles arrive at an uncontrolled intersection at about the same time, the driver on the right goes. Underneath it all sits a warning the handbook repeats: believing you should be granted the right of way does not relieve you of responsibility for a collision.",
        trap:
          "Going straight does not outrank turning at a four-way stop. Order of arrival decides it, and the right-hand rule only breaks a tie.",
        excerptKey: "row-right-hand-rule",
        sourceLabel: `${HB} - Part 4: Rules of the road, 4.11 Right of Way`,
        sourceUrl: p4(40),
        commonlyMissed: true,
      },
      {
        id: "nb_s1_04",
        topic: "rules",
        question:
          "What following interval does the New Brunswick handbook teach for favourable conditions?",
        choices: [
          "One car length for every 10 km/h",
          "Two seconds",
          "Four seconds",
          "Three seconds",
        ],
        correctIndex: 1,
        explanation:
          "New Brunswick teaches a two-second count, not the three seconds several other jurisdictions use. You watch the vehicle ahead pass a fixed object, count one thousand and one, one thousand and two, and you should not reach the object before you finish.",
        context:
          "The count holds at any speed, because it measures time rather than distance. It applies to favourable conditions only - rain, snow, fog or a heavy load call for a lower speed and a longer count. The handbook also offers an alternative rule of thumb: at least one car length for every 20 km/h of speed.",
        trap:
          "Answering three seconds is the safer habit but it is not what New Brunswick prints. The handbook's own figure is two.",
        excerptKey: "two-second-rule",
        sourceLabel: `${HB} - Part 5: Safe driving, Following`,
        sourceUrl: p5(61),
        commonlyMissed: true,
      },
      {
        id: "nb_s1_05",
        topic: "safety",
        question:
          "How many passengers may a New Brunswick vehicle carry, under the seat belt rules?",
        choices: [
          "As many as will fit, provided nobody blocks the driver's view",
          "One per seating position, belted or not",
          "Any number, so long as everyone under 16 is belted",
          "No more than the number of operating seat belts",
        ],
        correctIndex: 3,
        explanation:
          "The rule is a headcount, not a judgement call. Everyone in a vehicle fitted with seat belts must wear one, so the number of people you may legally carry is the number of working belts.",
        context:
          "The driver is responsible for making sure every passenger under 16 is buckled in. Passengers aged 16 and over answer for themselves, and are charged personally if they are not wearing one. A driver convicted of not wearing their own belt pays a fine and loses two points.",
        trap:
          "Squeezing a fourth person into a three-belt back seat is an offence in itself, separate from the belt offences. The fine attaches to exceeding the belt count.",
        excerptKey: "seatbelt-all",
        sourceLabel: `${HB} - Part 5: Safe driving, 5.3 Seat belts save lives`,
        sourceUrl: p5(55),
      },
      {
        id: "nb_s1_06",
        topic: "signs",
        question: "What shape and colours does New Brunswick use for a Yield Right of Way sign?",
        choices: [
          "A yellow diamond with a black border",
          "A white octagon with a red border",
          "A triangle with a red border on a white background",
          "An orange rectangle with black lettering",
        ],
        correctIndex: 2,
        explanation:
          "The yield sign is a triangle, red-bordered on white. It tells you to slow on approach, give way, and stop if you have to in order to let traffic through.",
        context:
          "A yield sign goes where an intersection needs some control but not a full stop. You must give way to anything in the intersection or approaching so closely that it is an immediate hazard, and stop if that is what giving way takes. Yield is one of the three signs the Road Sign Recognition Exam requires you to identify correctly.",
        trap:
          "A yield sign does not mean you never stop. If the traffic you have to give way to leaves you no gap, stopping is the only lawful thing to do.",
        excerptKey: "yield-sign-shape",
        sourceLabel: `${HB} - Part 7: Traffic Signs, 7.1 Six basic sign shapes`,
        sourceUrl: p7(86),
      },
      {
        id: "nb_s1_07",
        topic: "speed",
        question:
          "There is no speed sign in sight on a New Brunswick road outside any town. What is the limit?",
        choices: ["100 km/h", "80 km/h", "90 km/h", "60 km/h"],
        correctIndex: 1,
        explanation:
          "Where nothing is posted, New Brunswick's default outside an urban district is 80 km/h. In an urban district the default is 50 km/h.",
        context:
          "Part 4 gives two figures and nothing else: 50 km/h in any urban district, and 80 km/h in other locations or as otherwise posted. The 100 and 110 figures people associate with the Trans-Canada exist only because they are signed. A limit is always a maximum for ideal conditions, never a target.",
        trap:
          "Do not carry the divided-highway number across to an unsigned rural road. 100 km/h is a posted limit, not a default.",
        excerptKey: "speed-defaults",
        sourceLabel: `${HB} - Part 4: Rules of the road, 4.2 Speed restrictions`,
        sourceUrl: p4(35),
      },
      {
        id: "nb_s1_08",
        topic: "licensing",
        question:
          "You hold a Class 7 Level 1 licence. When may you drive between midnight and 5:00 a.m.?",
        choices: [
          "Whenever a supervising driver is in the front passenger seat",
          "When you are driving directly to or from work",
          "Never - Level 1 has no night-time exception",
          "Only on weekends",
        ],
        correctIndex: 2,
        explanation:
          "The Level 1 curfew is absolute. The handbook and the Act both state it flatly: a Level 1 driver cannot operate a motor vehicle between midnight and 5:00 a.m., with no exception for a supervisor, for work or for school.",
        context:
          "Level 2 is where the exceptions appear. A Level 2 driver under 21 may drive in those hours for education or employment, or with a Class 5 or better driver of at least three years' experience beside them and nobody else aboard, or with the Registrar's written permission. None of that reaches back to Level 1.",
        trap:
          "The supervising driver who makes the rest of your Level 1 driving lawful does not unlock the small hours. The curfew applies to you, not to the car.",
        excerptKey: "level1-curfew",
        sourceLabel: `${HB} - Part 1: Licensing of drivers, Level 1`,
        sourceUrl: p1(10),
        commonlyMissed: true,
      },
      {
        id: "nb_s1_09",
        topic: "signs",
        question: "A yellow diamond-shaped sign with a black symbol is telling you what?",
        choices: [
          "A law you must obey, such as a limit or a prohibition",
          "A facility nearby, such as fuel or food",
          "Roadworks and a lane closure",
          "Something to watch for ahead, such as a curve, dip or side road",
        ],
        correctIndex: 3,
        explanation:
          "The yellow diamond is New Brunswick's warning shape. It does not state a law - it tells you a condition of the road ahead calls for extra care.",
        context:
          "Warning signs use symbols rather than words wherever they can, so the meaning survives at speed. Yellow is the general warning colour and orange is the construction and maintenance version of the same idea. Regulatory signs, the ones that state a law, are white rectangles or squares with black or coloured lettering.",
        trap:
          "A yellow diamond with a speed number on it is an advisory speed for the hazard, not the posted limit. The posted limit is on a white regulatory sign.",
        excerptKey: "warning-sign-shape",
        sourceLabel: `${HB} - Part 7: Traffic Signs, 7.1 Six basic sign shapes`,
        sourceUrl: p7(87),
      },
      {
        id: "nb_s1_10",
        topic: "sharing",
        question:
          "A school bus ahead of you has stopped with its red lights flashing. The road has no median. How close may you stop?",
        choices: [
          "No closer than 5 metres, in front or behind",
          "No closer than 10 metres",
          "Anywhere behind the bus, provided you do not pass it",
          "No closer than 15 metres",
        ],
        correctIndex: 0,
        explanation:
          "New Brunswick sets the figure at 5 metres, and it applies whether you are behind the bus or meeting it. You stay stopped until the red lights stop flashing or the bus moves off.",
        context:
          "Amber lights come on about 150 metres before the bus stops, which is your warning that a stop is coming. Red lights mean children are getting on or off. The single exception is a road divided by a median: there, traffic meeting the bus on the far side does not have to stop. Failing to stop for school bus lights costs six demerit points.",
        trap:
          "Six points is more than a newly licensed driver has to spare in their first year, when the credit is only four.",
        excerptKey: "bus-median-exception",
        sourceLabel: `${HB} - Part 6: Sharing the road, 6.6 Drivers and school buses`,
        sourceUrl: p6(81),
        commonlyMissed: true,
      },
      {
        id: "nb_s1_11",
        topic: "signals",
        question: "The light turns amber as you approach an intersection. What does it mean?",
        choices: [
          "Speed up to clear the intersection before the red",
          "Stop immediately, wherever you are",
          "The light is about to turn red, so stop unless you are too close to stop safely",
          "The light is about to turn green",
        ],
        correctIndex: 2,
        explanation:
          "Amber is a warning that red is coming. You stop for it, unless you are so close to the intersection that stopping is not the safe thing to do, in which case you carry through with caution.",
        context:
          "The Act puts it as a prohibition rather than a suggestion: a driver facing an amber signal shall not enter the intersection unless they are so close that it is impossible to stop before entering. A flashing amber is a different signal entirely - that one means slow down and be extra careful of intersecting traffic, whether or not you have the right of way.",
        trap:
          "Amber is not a licence to accelerate. Entering on amber when you could have stopped safely is the offence, not entering on red.",
        excerptKey: "amber-light",
        sourceLabel: `${HB} - Part 4: Rules of the road, 4.15 Traffic control signals`,
        sourceUrl: p4(43),
      },
      {
        id: "nb_s1_12",
        topic: "parking",
        question:
          "How far from the point on the curb opposite a fire hydrant must you keep your parked vehicle?",
        choices: ["3 metres", "5 metres", "10 metres", "15 metres"],
        correctIndex: 1,
        explanation:
          "The hydrant figure is 5 metres, measured from the point on the curb opposite it. The same 5 metres applies to a crosswalk at an intersection.",
        context:
          "Part 4 lists the no-parking places as a set of distances, and they are easier learned in groups. Five metres from a hydrant and from a crosswalk at an intersection; ten metres on the approach to a stop sign, flashing beacon or traffic signal, and from a fire station driveway; fifteen metres from the nearest rail of a railway crossing; twenty-five metres from the entrance if you are opposite a fire station.",
        trap:
          "The measurement runs from the curb point opposite the hydrant, not from the hydrant itself. On a wide street those are not the same spot.",
        excerptKey: "parking-hydrant",
        sourceLabel: `${HB} - Part 4: Rules of the road, Parking regulations`,
        sourceUrl: p4(48),
      },
      {
        id: "nb_s1_13",
        topic: "signs",
        question: "Which sign marks a school zone in New Brunswick?",
        choices: [
          "A yellow diamond with two children on it",
          "A white rectangle reading SCHOOL",
          "An orange pentagon",
          "A fluorescent yellow five-sided sign",
        ],
        correctIndex: 3,
        explanation:
          "New Brunswick uses a fluorescent yellow pentagon for a school zone. The five-sided shape is used for nothing else, which is why it is one of the three signs you have to name correctly on the sign exam.",
        context:
          "Fluorescent yellow is a colour reserved for school zone and school crosswalk ahead signs, so the colour alone tells you children are the hazard before you read the shape. In a school zone you slow down, watch for children and take extreme care, and the speed limit is enforced between 7:30 a.m. and 4:00 p.m. on days school is in session.",
        trap:
          "The diamond with children on it is a school crosswalk or playground warning, not the school zone sign. The pentagon is the one the exam wants.",
        excerptKey: "school-zone-sign",
        sourceLabel: `${HB} - Part 7: Traffic Signs, 7.1 Six basic sign shapes`,
        sourceUrl: p7(87),
        commonlyMissed: true,
      },
      {
        id: "nb_s1_14",
        topic: "rules",
        question: "How far ahead of a turn must you signal in New Brunswick?",
        choices: [
          "At least 30 metres",
          "At least 50 metres",
          "At least three seconds",
          "At least 100 metres",
        ],
        correctIndex: 0,
        explanation:
          "The handbook and the Act give the same number: at least 30 metres, which the handbook also prints as 100 feet. The Act adds that the signal must run continuously over that whole distance.",
        context:
          "You signal for far more than turns. The law lists stopping or slowing, turning left or right, changing lanes, leaving the roadway and pulling out of a parked position. Signals are given by the indicators or brake lights, and by hand and arm when the signalling device is not working.",
        trap:
          "Flicking the indicator on at the last second does not satisfy the rule. Thirty metres of continuous signal is what the Act asks for.",
        excerptKey: "signal-30-metres",
        sourceLabel: `${HB} - Part 4: Rules of the road, 4.10 Signalling`,
        sourceUrl: p4(39),
      },
      {
        id: "nb_s1_15",
        topic: "rightOfWay",
        question:
          "A pedestrian is crossing in a marked crosswalk ahead of you. What does New Brunswick require?",
        choices: [
          "Sound your horn and pass behind them",
          "Yield the right of way to them",
          "Proceed if you can pass more than a metre clear",
          "Yield only if a crossing guard is on duty",
        ],
        correctIndex: 1,
        explanation:
          "The driver yields. The duty covers a marked crosswalk and an unmarked crosswalk at the end of a block, and it expressly includes a person in a wheelchair.",
        context:
          "There is a second rule attached to it that catches more drivers than the first. If another vehicle has stopped at a crosswalk or intersection to let someone cross, it is an offence for a driver coming up behind to overtake and pass that stopped vehicle. The stopped car is hiding a pedestrian from you.",
        trap:
          "A crosswalk without paint is still a crosswalk. The duty applies at the unmarked crossing at the end of a block just as it does to a painted one.",
        excerptKey: "pedestrian-yield",
        sourceLabel: `${HB} - Part 4: Rules of the road, 4.23 Pedestrians`,
        sourceUrl: p4(51),
      },
      {
        id: "nb_s1_16",
        topic: "impairment",
        question:
          "What blood alcohol concentration must every New Brunswick driver under 21 maintain?",
        choices: [
          "Under 0.05 percent",
          "Under 0.08 percent",
          "Zero",
          "Under 0.02 percent",
        ],
        correctIndex: 2,
        explanation:
          "Zero, and it is set by age rather than by licence class. Every motorist in New Brunswick under 21 must be at zero percent BAC while driving, whatever licence they hold.",
        context:
          "Two rules overlap here. Anyone under 21 is at zero because of their age, and every graduated licence holder is at zero because of their licence, however old they are. There is a matching zero-tolerance programme for drug-impaired driving covering novice drivers and everyone under 21.",
        trap:
          "Turning 21 does not end it for a graduated driver. A 25-year-old on a Class 7 licence is still at zero until they hold a Class 5.",
        excerptKey: "impaired-under-21",
        sourceLabel: `${HB} - Part 5: Safe driving, 5.9 Impaired driving`,
        sourceUrl: p5(64),
      },
      {
        id: "nb_s1_17",
        topic: "signs",
        question: "What does a white rectangular sign with black lettering do?",
        choices: [
          "Warns of a hazard on the road ahead",
          "Points to a nearby tourist attraction",
          "Marks the start of a construction zone",
          "States the law, such as a speed limit or a parking rule",
        ],
        correctIndex: 3,
        explanation:
          "White rectangles and squares are the regulatory family. They state law - speed limits, parking rules, turning and passing movements - and it is an offence under the Motor Vehicle Act to disregard them.",
        context:
          "The colour system is worth learning as a set: red for stop or prohibition, white for regulatory, yellow for general warning, fluorescent yellow for school zones and school crosswalks, orange for construction and maintenance, green for permitted movements and direction, and blue for tourist information and motorist services.",
        trap:
          "Ignoring a regulatory sign is a charge in itself, not merely evidence of some other offence.",
        excerptKey: "regulatory-sign-shape",
        sourceLabel: `${HB} - Part 7: Traffic Signs, 7.1 Six basic sign shapes`,
        sourceUrl: p7(86),
      },
      {
        id: "nb_s1_18",
        topic: "safety",
        question: "Before changing lanes, what does the handbook tell you to do?",
        choices: [
          "Rely on the inside mirror, which covers the lane beside you",
          "Sound the horn to warn the lane you are entering",
          "Signal and move immediately, before the gap closes",
          "Check over your shoulder",
        ],
        correctIndex: 3,
        explanation:
          "A shoulder check, every time. The handbook is explicit that the rear-view mirror will not show a car in the next lane once its front bumper is level with or ahead of your rear bumper.",
        context:
          "Every vehicle has blind spots at the right and left rear corners. Mirrors reduce them but never remove them, which is why the handbook's passing sequence puts the shoulder check between the signal and the move. The same warning is repeated for pedestrians: they can hide behind the mirror, beside the door pillars and in front of the bumper, so a circle check before you start the car is worth doing.",
        trap:
          "Signalling does not create a gap. The signal tells people what you intend; the shoulder check tells you whether you can.",
        excerptKey: "blind-spot",
        sourceLabel: `${HB} - Part 4: Rules of the road, 4.8 Blind spots`,
        sourceUrl: p4(38),
      },
      {
        id: "nb_s1_19",
        topic: "speed",
        question:
          "An ambulance is stopped on the shoulder of a 100 km/h highway with its lights flashing. What speed does the law require of you as you pass?",
        choices: [
          "80 km/h",
          "70 km/h",
          "50 km/h",
          "Whatever is safe in the conditions",
        ],
        correctIndex: 2,
        explanation:
          "You reduce to one half of the posted maximum, so past a 100 zone that is 50 km/h. The rule is a fixed fraction of the posted limit, not a judgement call.",
        context:
          "Section 168.1 of the Act covers authorized emergency vehicles and service vehicles alike - a service vehicle being a tow truck, a utility vehicle, or a road safety or maintenance vehicle under contract with the Province. On a road with two or more lanes on your side, halving your speed is not enough on its own: you must also move into another lane if that can be done safely.",
        trap:
          "Slowing to something that feels careful is not the rule. Half the posted limit is the number, and failing to move over carries a fine and demerit points.",
        excerptKey: "move-over",
        sourceLabel: `${HB} - Part 4: Rules of the road, Emergency vehicles`,
        sourceUrl: p4(34),
        commonlyMissed: true,
      },
      {
        id: "nb_s1_20",
        topic: "signs",
        question: "A sign shows a symbol inside a red circle with a diagonal slash. What is it doing?",
        choices: [
          "Denying permission for the movement shown",
          "Giving permission for the movement shown",
          "Warning that the movement shown is dangerous",
          "Marking the end of a restriction",
        ],
        correctIndex: 0,
        explanation:
          "A red circle with a diagonal slash denies permission for whatever the symbol shows. It is the mirror image of the green circle, which grants it.",
        context:
          "New Brunswick uses this pair consistently across the regulatory signs, so once you know it you can read a sign you have never seen. A green circle around a passing symbol means passing permitted; the same symbol in a slashed red circle means passing not permitted. The same pair covers heavy trucks, dangerous goods carriers and U-turns.",
        trap:
          "A green circle is not a warning or a suggestion. It is a permission, and the slashed red version is a prohibition you can be charged for ignoring.",
        excerptKey: "red-circle-slash",
        sourceLabel: `${HB} - Part 7: Traffic Signs, 7.3 Regulatory Signs`,
        sourceUrl: p7(88),
      },
      {
        id: "nb_s1_21",
        topic: "rules",
        question: "On a multi-lane highway going your way, which lane should you normally be in?",
        choices: [
          "Whichever lane is moving fastest",
          "The centre lane, to leave both edges free",
          "The lane nearest the right-hand edge",
          "Any lane, provided you keep to the limit",
        ],
        correctIndex: 2,
        explanation:
          "New Brunswick's rule is the lane nearest the right-hand edge, and you leave it only to pass or to prepare for a left turn.",
        context:
          "The same idea runs through Part 4. Vehicles are driven on the right half of the highway, slow-moving traffic keeps close to the right-hand edge or curb, and on multi-lane streets you keep well to the right except when overtaking or turning left. Driving so slowly that you block the normal movement of traffic is itself an offence.",
        trap:
          "Sitting in the left lane at exactly the limit is not compliant. The rule is about which lane you occupy, not how fast you are going in it.",
        excerptKey: "keep-right-lane",
        sourceLabel: `${HB} - Part 4: Rules of the road, 4.7 Laned traffic and pavement markings`,
        sourceUrl: p4(37),
      },
      {
        id: "nb_s1_22",
        topic: "emergencies",
        question:
          "A fire truck is coming towards you with siren and flashing red lights. What must you do?",
        choices: [
          "Drive to the right-hand curb, stop, and stay stopped until it has passed",
          "Slow down and keep going in your lane",
          "Stop only if it is in your lane",
          "Move to the left so it can use the right lane",
        ],
        correctIndex: 0,
        explanation:
          "An approaching emergency vehicle, from either direction, means you pull to the right-hand curb, stop, and remain stopped until it has gone past.",
        context:
          "The rule applies to police, fire and ambulance vehicles giving both an audible signal and flashing red lights. It is separate from the move-over rule, which is about an emergency vehicle already stopped. A peace officer directing traffic can override it. Following any emergency vehicle within 150 metres is itself an offence, and so is driving or parking within 150 metres of fire apparatus that has stopped at an alarm.",
        trap:
          "\"From either direction\" includes oncoming traffic on an undivided road. Carrying on because the fire truck is on the other side is the common error.",
        excerptKey: "emergency-approach",
        sourceLabel: `${HB} - Part 4: Rules of the road, Emergency vehicles`,
        sourceUrl: p4(34),
      },
      {
        id: "nb_s1_23",
        topic: "signals",
        question: "What does a flashing green traffic light mean in New Brunswick?",
        choices: [
          "Proceed with caution, the signal is faulty",
          "The light is about to change to amber",
          "Pedestrians have the right of way",
          "An advance green - you may turn left if it is safe",
        ],
        correctIndex: 3,
        explanation:
          "A flashing green is an advance green. Oncoming traffic is being held, so you may turn left when it is safe to do so.",
        context:
          "New Brunswick's signal set is worth learning as a whole. A steady green lets you go unless a pedestrian signal is running; amber warns that red is next; a flashing amber means slow down and take extra care of crossing traffic; a flashing red is treated exactly like a stop sign; and a green arrow on red lets you make only the movement the arrow shows, after yielding to pedestrians and other traffic.",
        trap:
          "A flashing green is not a broken light. Treating it as a caution and waiting for a gap wastes the phase it was installed to give you.",
        excerptKey: "flashing-green",
        sourceLabel: `${HB} - Part 4: Rules of the road, Green flashing traffic light`,
        sourceUrl: p4(44),
        commonlyMissed: true,
      },
      {
        id: "nb_s1_24",
        topic: "parking",
        question: "What does the handbook say to do whenever you leave a vehicle unattended?",
        choices: [
          "Turn the front wheels to the curb and set the parking brake",
          "Leave it in gear with the wheels straight",
          "Turn the wheels away from the curb so the car rolls clear",
          "Leave the hazard lights on",
        ],
        correctIndex: 0,
        explanation:
          "Two things every time: front wheels turned towards the curb or side of the highway, and the parking brake effectively set.",
        context:
          "On a hill the direction matters. Facing uphill with a curb, the wheels go left, so the car rolls back into the curb. Facing downhill with a curb, they go right. With no curb at all, uphill or downhill, they go right, so a rolling vehicle leaves the roadway rather than crossing it. The parking brake goes on in every one of those cases.",
        trap:
          "The uphill-with-curb case is the one people get backwards. Left is correct there, and it is the only case of the three where the wheels go left.",
        excerptKey: "parking-unattended",
        sourceLabel: `${HB} - Part 4: Rules of the road, 4.20 Parking`,
        sourceUrl: p4(47),
      },
      {
        id: "nb_s1_25",
        topic: "safety",
        question:
          "Your car has no daytime running lights and the ones it had have stopped working. What does New Brunswick require?",
        choices: [
          "Drive only in daylight until they are repaired",
          "Nothing, provided the vehicle is older than model year 1990",
          "Use the hazard lights instead",
          "Keep the headlights on at all times",
        ],
        correctIndex: 3,
        explanation:
          "Every vehicle on a New Brunswick road must show daytime running lights. If yours are missing or not working, the headlights go on and stay on, and failing to do that can cost a fine and points.",
        context:
          "Daytime running lights have been fitted automatically to new vehicles since model year 1990, and older vehicles can be modified. Lights are also required by darkness: you may not drive at night, or at any other time when there is not enough light to see a person or vehicle 150 metres away, without your lamps lit.",
        trap:
          "The age of the vehicle is not a defence. The requirement is that the road sees lights, not that the manufacturer fitted them.",
        excerptKey: "drl-law",
        sourceLabel: `${HB} - Part 5: Safe driving, DID YOU KNOW?`,
        sourceUrl: p5(74),
      },
      {
        id: "nb_s1_26",
        topic: "sharing",
        question: "How much space must you leave when passing a cyclist in New Brunswick?",
        choices: [
          "At least one metre",
          "Half a metre",
          "At least two metres",
          "Whatever the lane width allows",
        ],
        correctIndex: 0,
        explanation:
          "At least one metre of open space between your vehicle and the bicycle. New Brunswickers know it as Ellen's Law, and it is enforced with a fine and demerit points.",
        context:
          "The Act builds the whole manoeuvre around that metre. You may not pass a bicycle at all unless there is enough room to do it safely, you must signal left before you start, you pass to the left at not less than one metre, and you may not pull back to the right until you are safely clear of the cyclist. Crossing the yellow line to make that room is permitted when it is safe and nothing is coming.",
        trap:
          "One metre is a floor, not a target, and the lane being narrow is not a reason to squeeze past. If the metre is not there, you wait.",
        excerptKey: "bicycle-one-metre",
        sourceLabel: `${HB} - Part 6: Sharing the road, 6.4 Drivers and bicycles`,
        sourceUrl: p6(79),
        commonlyMissed: true,
      },
      {
        id: "nb_s1_27",
        topic: "signs",
        question: "What do black letters or symbols on an orange background tell you?",
        choices: [
          "A tourist attraction ahead",
          "A permanent hazard on the road",
          "Construction and maintenance",
          "A school crosswalk ahead",
        ],
        correctIndex: 2,
        explanation:
          "Orange is New Brunswick's construction and maintenance colour. It marks temporary conditions and the presence of workers, and it usually comes with a changed speed limit.",
        context:
          "The construction family includes construction ahead, road work ahead, survey crew ahead, traffic control person ahead, detour, truck entrance and pavement drop-off. Where a construction zone has no posted limit and a worker is present, the Act sets 50 km/h in a municipality and 80 km/h in a rural community, regional municipality or rural district. Fines for speeding in a construction zone are doubled.",
        trap:
          "Orange does not mean the works are finished for the day. The doubled fine attaches to the zone as signed, not to whether you can see anyone.",
        excerptKey: "construction-signs-orange",
        sourceLabel: `${HB} - Part 7: Traffic Signs, Construction Signs`,
        sourceUrl: p7(93),
      },
      {
        id: "nb_s1_28",
        topic: "speed",
        question:
          "Between what hours is a New Brunswick school zone speed limit in force on a day school is in session?",
        choices: [
          "8:00 a.m. to 5:00 p.m.",
          "7:30 a.m. to 4:00 p.m.",
          "Whenever children are present, at any hour",
          "7:00 a.m. to 6:00 p.m.",
        ],
        correctIndex: 1,
        explanation:
          "The window is 7:30 a.m. to 4:00 p.m., on days a school in the area is in session. The handbook and the Motor Vehicle Act give the same hours.",
        context:
          "The number the limit drops to is where the two sources have parted company. The handbook still prints 50 km/h in an urban district; section 140.1 of the Act, as replaced in 2023, sets 30 km/h in a municipality and 50 km/h in a rural community, regional municipality or rural district. The hours have not changed, and neither has the doubled fine for speeding in the zone.",
        trap:
          "Outside the hours you are not free to ignore the zone. Your speed still has to be reasonable and prudent for the conditions, and children do not keep to a timetable.",
        excerptKey: "school-zone-speed-handbook",
        sourceLabel: `${HB} - Part 4: Rules of the road, 4.5 School zones`,
        sourceUrl: p4(36),
        commonlyMissed: true,
      },
      {
        id: "nb_s1_29",
        topic: "rules",
        question:
          "You reach a stop sign. There is no painted stop line and no crosswalk. Where do you stop?",
        choices: [
          "Wherever you can see both ways, even if that is past the corner",
          "Level with the sign itself",
          "At least 5 metres back from the corner",
          "Just before entering the intersection, leaving room for a pedestrian to cross",
        ],
        correctIndex: 3,
        explanation:
          "The stopping point runs down a list. A marked stop line first; if there is none, before the nearest crosswalk, marked or not; if there is neither, just before you enter the intersection, with room left for someone to walk across.",
        context:
          "There is a third position in the handbook for the case where the through road is hidden: the edge of the travelled portion of the through street, where you actually have a view of approaching traffic. That is a second stop after the first, not a substitute for it. A flashing red light is governed by exactly the same rule as a stop sign.",
        trap:
          "Creeping forward for a better view is fine only after you have stopped where the rule says. Rolling straight to the corner is a failed stop.",
        excerptKey: "stop-sign-rule",
        sourceLabel: `${HB} - Part 4: Rules of the road, 4.14 Stop sign`,
        sourceUrl: p4(42),
      },
      {
        id: "nb_s1_30",
        topic: "rightOfWay",
        question: "You are approaching a roundabout. Who has the right of way?",
        choices: [
          "Traffic already in the roundabout",
          "Whoever reaches the entry line first",
          "Traffic entering from the right",
          "Larger vehicles, which need more room",
        ],
        correctIndex: 0,
        explanation:
          "You yield to traffic already circulating, and to anything approaching so closely that it is an immediate hazard. On a multi-lane roundabout you yield to both lanes.",
        context:
          "New Brunswick roundabouts are driven counter-clockwise. Choose your lane before you get there from the arrows on the signs and pavement, yield to pedestrians and cyclists, then to circulating traffic, enter on a safe gap, do not change lanes inside, do not stop inside, and signal right as you approach your exit. Give large trucks room and never drive alongside one in a roundabout.",
        trap:
          "Yielding to the right is the rule at an uncontrolled intersection, not at a roundabout. In a roundabout the traffic you give way to is on your left.",
        excerptKey: "roundabout-yield",
        sourceLabel: `${HB} - Part 4: Rules of the road, Roundabouts`,
        sourceUrl: p4(41),
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Core Rules of the Road",
    difficulty: "easy",
    description:
      "The everyday law: lines and lanes, who yields to whom, what the signs on a New Brunswick road actually oblige you to do, and the distances the handbook puts numbers on.",
    questions: [
      {
        id: "nb_s2_01",
        topic: "signs",
        question:
          "You are on a two-lane road. The centre markings are two yellow lines and the solid one is on your side. What may you do?",
        choices: [
          "Pass, if the road ahead is clear",
          "Pass only to overtake a cyclist",
          "You are prohibited from passing",
          "Pass only between sunrise and sunset",
        ],
        correctIndex: 2,
        explanation:
          "With a double yellow centre line, the line on your side is the one that governs you. Solid on your side means no passing, whatever the driver on the other side may lawfully do.",
        context:
          "Yellow lines divide traffic moving in opposite directions; white lines divide traffic going the same way and mark the right shoulder. A single broken yellow permits passing when sight distance and conditions are ideal. A single solid yellow does not. The handbook's own diagram shows one case where A may pass and B may not, on the same stretch of road.",
        trap:
          "Reading the far line instead of your own is the classic error. Look down at the line beside your own wheels.",
        excerptKey: "double-yellow",
        sourceLabel: `${HB} - Part 4: Rules of the road, Yellow lines`,
        sourceUrl: p4(37),
      },
      {
        id: "nb_s2_02",
        topic: "rightOfWay",
        question:
          "You are turning left at an intersection and a vehicle is coming the other way. What does the law require?",
        choices: [
          "Turn first if you arrived at the intersection first",
          "Yield to it if it is in the intersection or close enough to be an immediate hazard",
          "Sound your horn and complete the turn",
          "Yield only if it is signalling",
        ],
        correctIndex: 1,
        explanation:
          "The left-turning driver gives way. The test is whether the oncoming vehicle is already in the intersection or so close that it constitutes an immediate hazard.",
        context:
          "The handbook adds a piece of physical advice to go with the rule: while you wait, keep the front wheels straight. If you are struck from behind with the wheels already turned left, your car is pushed into the path of the traffic you were waiting for.",
        trap:
          "Arriving first does not create a right to turn across someone. The left turn yields regardless of who got there first.",
        excerptKey: "row-left-turn",
        sourceLabel: `${HB} - Part 4: Rules of the road, Left turn`,
        sourceUrl: p4(40),
      },
      {
        id: "nb_s2_03",
        topic: "safety",
        question:
          "Until what point must a child be secured in a proper child safety seat in New Brunswick?",
        choices: [
          "Until age nine, 36 kg or 145 cm - whichever comes first",
          "Until age 12 and 40 kg together",
          "Until age six",
          "Until age nine and 36 kg and 145 cm are all reached",
        ],
        correctIndex: 0,
        explanation:
          "The handbook lists three thresholds and the child moves out of the seat on reaching any one of them: age nine, 36 kg, or 145 cm.",
        context:
          "Taxis, emergency vehicles and buses are exempt from these provisions. Separately, Transport Canada recommends that children 12 and under travel properly restrained in the back seat, particularly where the vehicle has side air bags, and vehicle and car seat manufacturers advise against putting a child restraint in front of a passenger air bag.",
        trap:
          "The thresholds are alternatives, not a checklist. A tall eight-year-old who has reached 145 cm has met the rule.",
        excerptKey: "child-seat-thresholds",
        sourceLabel: `${HB} - Part 5: Safe driving, 5.3 Seat belts save lives`,
        sourceUrl: p5(56),
      },
      {
        id: "nb_s2_04",
        topic: "signs",
        question: "A diamond sign shows a black X on yellow with the letters RR. What is ahead?",
        choices: [
          "A river crossing",
          "A rest area",
          "A roundabout",
          "A railway crossing",
        ],
        correctIndex: 3,
        explanation:
          "The yellow diamond with the X is the railway advance warning sign. It tells you to look, listen and slow down, because you may have to stop.",
        context:
          "At the crossing itself you meet the crossbuck, the X-shaped sign with a red reflective border on white that replaced the older lettered version. A crossbuck means yield to all trains, and a sign below it gives the number of tracks. An advisory speed sign may be fitted under the advance warning where the safe speed is lower than the posted limit.",
        trap:
          "One train passing does not clear the crossing. Where there is more than one track, drivers have been struck by a second train coming the other way.",
        excerptKey: "railway-advance-warning",
        sourceLabel: `${HB} - Part 7: Traffic Signs, 7.5 Railway Crossings`,
        sourceUrl: p7(94),
      },
      {
        id: "nb_s2_05",
        topic: "rules",
        question:
          "New Brunswick allows passing on the right in three situations. Which of these is one of them?",
        choices: [
          "When the vehicle ahead is under the speed limit",
          "When the shoulder is wide and paved",
          "When you are overtaking a vehicle that is turning left or signalling left",
          "When the vehicle ahead is a farm tractor",
        ],
        correctIndex: 2,
        explanation:
          "Passing on the right is an offence except in three cases: overtaking a vehicle making or signalling a left turn, on a one-way street, and on a road marked for multiple lanes in the same direction.",
        context:
          "The handbook attaches a warning to all three, because other drivers may swerve right without notice. There is a fourth thing it rules out entirely: you must never drive off the roadway onto the shoulder to get past another vehicle, however wide the shoulder is.",
        trap:
          "Slow is not one of the three exceptions. A driver dawdling in the only lane is a different offence of theirs, not a permission for you.",
        excerptKey: "pass-on-right",
        sourceLabel: `${HB} - Part 4: Rules of the road, 4.4 Passing a vehicle`,
        sourceUrl: p4(35),
      },
      {
        id: "nb_s2_06",
        topic: "signals",
        question: "A flashing red light is showing at an intersection. What must you do?",
        choices: [
          "Slow down and take extra care of crossing traffic",
          "Treat it as a yield sign",
          "Wait for it to change to green",
          "Come to a complete stop and proceed only when the way is clear",
        ],
        correctIndex: 3,
        explanation:
          "A flashing red is governed by the same rule as a stop sign: a complete stop, then proceed only when it is clear.",
        context:
          "The flashing pair are easy to confuse and both appear on the exam. Flashing red is a stop sign. Flashing amber is slow down and be extra careful of intersecting traffic, whether or not you have the right of way. Neither of them will change to green while you sit there.",
        trap:
          "Treating a flashing red as a yield is the common error, and it is the one that puts you into cross traffic without stopping.",
        excerptKey: "red-flasher",
        sourceLabel: `${HB} - Part 4: Rules of the road, 4.15 Traffic control signals`,
        sourceUrl: p4(43),
      },
      {
        id: "nb_s2_07",
        topic: "parking",
        question:
          "How far from the nearest rail of a railway crossing must a parked vehicle be kept?",
        choices: ["5 metres", "10 metres", "15 metres", "25 metres"],
        correctIndex: 2,
        explanation:
          "Fifteen metres from the nearest rail. It is the largest of the ordinary parking distances in the handbook's list, apart from the 25 metres opposite a fire station entrance.",
        context:
          "That 15 metres is not the same as the 5 metres you stop at when a train is coming. Five is the stopping distance at a crossing with flashing lights, a flagman or a stop sign; fifteen is the no-parking distance. Both are measured from the nearest rail.",
        trap:
          "Mixing the two figures is the trap the exam is built on. Stopping distance is 5 metres; parking distance is 15.",
        excerptKey: "parking-railway",
        sourceLabel: `${HB} - Part 4: Rules of the road, Parking regulations`,
        sourceUrl: p4(48),
      },
      {
        id: "nb_s2_08",
        topic: "signs",
        question: "What is a checkerboard sign telling you?",
        choices: [
          "A racing circuit entrance",
          "A pedestrian crossing ahead",
          "A weight restriction on the bridge ahead",
          "The road ends, but you may proceed left or right",
        ],
        correctIndex: 3,
        explanation:
          "The checkerboard marks the end of the road you are on. You cannot continue straight, but you may turn left or right.",
        context:
          "It belongs with the other end-of-road and alignment markers. A T-intersection warning tells you the road turns sharply right and left ahead; chevron alignment signs guide you round a sharp curve; and a hazard marker with downward-sloping lines shows the side on which you may safely pass an obstruction.",
        trap:
          "A checkerboard is not a warning of a bend. It is a warning that straight ahead stops existing.",
        excerptKey: "checkerboard",
        sourceLabel: `${HB} - Part 7: Traffic Signs, 7.4 Warning signs`,
        sourceUrl: p7(91),
      },
      {
        id: "nb_s2_09",
        topic: "sharing",
        question:
          "A large truck ahead of you swings out to the left before an intersection. What is probably happening?",
        choices: [
          "It is preparing to turn left",
          "It is pulling over to let you pass",
          "It is preparing to turn right and needs the extra room",
          "It has been forced out by an obstruction",
        ],
        correctIndex: 2,
        explanation:
          "Semi-trailers often swing left as the first move in a right turn, so the trailer does not ride up over the curb or strike parked cars. Take it as a right turn until the signals tell you otherwise.",
        context:
          "The gap the truck opens on its right is the danger. Drivers who read the swing as a left turn move up beside the cab, and when the truck turns right they are caught between the trailer and the curb - what the handbook calls the right turn squeeze. Watch the turn signals before you try to pass a truck on the right at an intersection.",
        trap:
          "The open space on the truck's right is not an invitation. It is the space the trailer is about to sweep through.",
        excerptKey: "truck-right-turn-swing",
        sourceLabel: `${HB} - Part 6: Sharing the road, 6.2 Drivers and large commercial vehicles`,
        sourceUrl: p6(78),
        commonlyMissed: true,
      },
      {
        id: "nb_s2_10",
        topic: "rules",
        question:
          "Another driver behind you sounds their horn to indicate they want to pass. What does the handbook say you must do?",
        choices: [
          "Hold your speed and let them find their own gap",
          "Speed up so the pass is quicker",
          "Move right and do not increase your speed until they have finished passing",
          "Nothing - the horn has no legal meaning here",
        ],
        correctIndex: 2,
        explanation:
          "The overtaken driver has a duty in New Brunswick. On hearing the audible signal you move to the right in favour of the overtaking vehicle, and you must not increase your speed until they are completely past.",
        context:
          "The other half of the same rule is stated on page 68 among the safe-driving rules: when you are the one passing, you signal before changing lanes and sound your horn for the driver you are passing. Hardly anyone performs that half on a real New Brunswick road, which is exactly why the exam asks about it.",
        trap:
          "Accelerating to \"help them get by\" is the opposite of the rule, and it is the manoeuvre that leaves the passing driver stranded in the oncoming lane.",
        excerptKey: "overtaken-give-way",
        sourceLabel: `${HB} - Part 4: Rules of the road, 4.4 Passing a vehicle`,
        sourceUrl: p4(35),
        commonlyMissed: true,
      },
      {
        id: "nb_s2_11",
        topic: "signs",
        question: "What does a fluorescent yellow diamond showing two figures on a crossing mean?",
        choices: [
          "A playground ahead",
          "A school crosswalk ahead",
          "A pedestrian mall",
          "A crossing guard is on duty",
        ],
        correctIndex: 1,
        explanation:
          "Fluorescent yellow is reserved in New Brunswick for school zone and school crosswalk ahead signs, so that colour on a diamond means a school crosswalk is coming up.",
        context:
          "The ordinary pedestrian crosswalk ahead sign is the same idea in plain yellow. The playground ahead sign is another yellow diamond in the same family. Only the school signs get the fluorescent treatment, and only the school zone itself gets the five-sided shape.",
        trap:
          "The colour is doing the work here. A plain yellow diamond with figures on it is a general pedestrian crossing warning, not a school one.",
        excerptKey: "sign-colours-two",
        sourceLabel: `${HB} - Part 7: Traffic Signs, 7.2 Standard sign colours`,
        sourceUrl: p7(87),
      },
      {
        id: "nb_s2_12",
        topic: "safety",
        question: "You start to skid at the rear wheels. What does the handbook tell you to do?",
        choices: [
          "Take your feet off the pedals and steer in the direction of the skid",
          "Brake hard and hold the wheel straight",
          "Accelerate hard to pull the car straight",
          "Pull the parking brake and steer away from the skid",
        ],
        correctIndex: 0,
        explanation:
          "Feet off both pedals, and steer where the back of the car is going. Freely rolling wheels regain grip; locked or driven ones do not.",
        context:
          "The other skids get different answers. A four-wheel skid means releasing the brake, then reapplying gently and building pressure slowly so the wheels do not lock again. A front-wheel skid means lifting off the accelerator so engine braking can slow the car until the front regains grip; if it continues, depress the clutch or select neutral.",
        trap:
          "Braking is the instinct and it is the wrong one. Braking in a rear-wheel skid keeps the wheels from turning, which is the thing preventing them regaining grip.",
        excerptKey: "rear-wheel-skid",
        sourceLabel: `${HB} - Part 5: Safe driving, Skids`,
        sourceUrl: p5(71),
      },
      {
        id: "nb_s2_13",
        topic: "signals",
        question:
          "A green arrow is showing beside a red light. What does it permit?",
        choices: [
          "Only the movement the arrow shows, after yielding to pedestrians and other traffic",
          "Any movement, since a green arrow overrides the red",
          "A right turn only, in any direction the road allows",
          "Nothing until the red clears",
        ],
        correctIndex: 0,
        explanation:
          "The arrow gives you one movement and no more, and you take it cautiously, after giving way to pedestrians lawfully in a crosswalk and to other traffic lawfully using the intersection.",
        context:
          "The red beside it still governs every other movement. A driver facing a green left arrow with a red ball may turn left but may not go straight through. The Act phrases it as entering the intersection to make the movement indicated by the arrow, which is a narrow permission rather than a general green.",
        trap:
          "A green arrow does not clear the crosswalk. Pedestrians already lawfully crossing keep the right of way over your turn.",
        excerptKey: "green-arrow-red",
        sourceLabel: `${HB} - Part 4: Rules of the road, Red light - Green arrow`,
        sourceUrl: p4(43),
      },
      {
        id: "nb_s2_14",
        topic: "rightOfWay",
        question:
          "You are about to pull out of a driveway onto a street in a residential district. What does the law require first?",
        choices: [
          "Sound the horn as you emerge",
          "Stop before you drive onto the sidewalk area",
          "Signal for 30 metres before you move",
          "Reverse out, so you can see both ways",
        ],
        correctIndex: 1,
        explanation:
          "Emerging from an alley, driveway or building in a business or residential district means stopping immediately before you drive onto the sidewalk, or onto the sidewalk area that runs across the alleyway.",
        context:
          "There are two duties stacked here. You stop before the sidewalk, and you yield the right of way to pedestrians crossing the driveway entrance or on the sidewalk where you are crossing it. Then, before you enter the highway itself, you yield to all vehicles already approaching on it.",
        trap:
          "Stopping at the edge of the road is too late. The stop belongs before the sidewalk, which is where the pedestrian is.",
        excerptKey: "row-driveway-stop",
        sourceLabel: `${HB} - Part 4: Rules of the road, 4.11 Right of Way`,
        sourceUrl: p4(40),
      },
      {
        id: "nb_s2_15",
        topic: "rules",
        question:
          "New Brunswick makes it unlawful to drive to the left of the roadway in certain places. Which is one of them?",
        choices: [
          "Within 30 metres of an intersection or railway grade crossing",
          "Within 60 metres of a school",
          "Within 100 metres of any bridge",
          "Anywhere a broken yellow line is present",
        ],
        correctIndex: 0,
        explanation:
          "Thirty metres of, or crossing, an intersection or railway grade crossing. The same 30 metres applies on the approach to a bridge, viaduct or tunnel where the view is obstructed.",
        context:
          "The list also covers the crest of a grade and any curve where the driver's view is blocked far enough ahead to create a hazard if something comes the other way. Elsewhere, the handbook adds a separate 150-metre sight-distance rule: passing left of centre on a curve or crest where your view is obstructed within 150 metres is illegal.",
        trap:
          "A broken line does not override the intersection rule. Markings tell you where passing is normally allowed; these prohibitions apply on top of them.",
        excerptKey: "left-of-roadway-prohibited",
        sourceLabel: `${HB} - Part 4: Rules of the road, 4.4 Passing a vehicle`,
        sourceUrl: p4(36),
      },
      {
        id: "nb_s2_16",
        topic: "signs",
        question: "What does a sign reading MAXIMUM with a number in black on white mean?",
        choices: [
          "The speed at which traffic normally moves here",
          "The maximum speed allowed under ideal conditions",
          "The minimum speed for the lane",
          "An advisory speed for the curve ahead",
        ],
        correctIndex: 1,
        explanation:
          "It is a regulatory sign giving the maximum speed allowed under ideal conditions. Anything less than ideal - rain, fog, snow, heavy traffic, a road full of pedestrians - means the safe speed is lower than the sign.",
        context:
          "A separate sign gives advance warning of a lower maximum speed zone ahead, so you have time to shed speed before the new limit begins. Advisory speeds for a curve are a different animal: those sit on yellow warning signs and describe the maximum advised speed for that hazard.",
        trap:
          "The number is a ceiling for perfect conditions, not a speed you are entitled to hold. Driving the posted limit in freezing rain can still be an offence.",
        excerptKey: "max-speed-sign",
        sourceLabel: `${HB} - Part 7: Traffic Signs, 7.3 Regulatory Signs`,
        sourceUrl: p7(88),
      },
      {
        id: "nb_s2_17",
        topic: "sharing",
        question:
          "A vehicle ahead has stopped at a marked crosswalk to let someone cross. What may you not do?",
        choices: [
          "Stop behind it and wait",
          "Change lanes well before reaching it",
          "Sound your horn",
          "Overtake and pass the stopped vehicle",
        ],
        correctIndex: 3,
        explanation:
          "Passing a vehicle that has stopped at a crosswalk to let a pedestrian cross is an offence. The stopped vehicle is hiding the person from you, and from anyone behind you.",
        context:
          "The handbook states it twice, once in Part 4 as a rule and once in Part 6 as advice to drivers: never pass a vehicle yielding to a pedestrian at a crosswalk. Persons with disabilities may take longer to cross, and pedestrians do not always behave the way you expect.",
        trap:
          "It does not matter that you cannot see anyone in the crosswalk. Not seeing them is precisely the hazard the rule exists for.",
        excerptKey: "no-pass-stopped-at-crosswalk",
        sourceLabel: `${HB} - Part 4: Rules of the road, The driver's responsibility`,
        sourceUrl: p4(51),
        commonlyMissed: true,
      },
      {
        id: "nb_s2_18",
        topic: "speed",
        question:
          "Where a construction zone has no posted speed limit and a worker is present, what is the maximum in a municipality?",
        choices: ["30 km/h", "40 km/h", "50 km/h", "60 km/h"],
        correctIndex: 2,
        explanation:
          "Fifty kilometres an hour in a municipality where a worker is present and no limit is signed. In a rural community, regional municipality or rural district the figure in that situation is 80 km/h.",
        context:
          "The handbook says the same thing in its own words: comply with the speed prescribed by the signs erected in the zone; where none is posted the limit is 50 km/h in an urban district, and 80 km/h in the sections of the zone with no posted limit. Fines for speeding in a construction zone are doubled.",
        trap:
          "The doubled fine applies whether or not you noticed the zone. Signs mark the start and the end of it for approaching traffic, and that is the notice you get.",
        excerptKey: "construction-zone-speed",
        sourceLabel: `${HB} - Part 4: Rules of the road, 4.5 Construction zones`,
        sourceUrl: p4(36),
      },
      {
        id: "nb_s2_19",
        topic: "safety",
        question: "Your tire blows out at speed. What does the handbook tell you to do first?",
        choices: [
          "Brake firmly and pull onto the shoulder",
          "Steer hard towards the shoulder",
          "Pull the parking brake",
          "Do not brake - ease off the accelerator and hold the wheel firmly with both hands",
        ],
        correctIndex: 3,
        explanation:
          "No brake. You let up on the accelerator, keep a firm two-handed grip, keep the clutch engaged and slow down gradually until the car stops.",
        context:
          "Running a wheel off the pavement onto the shoulder gets a related answer: foot off the accelerator, steer straight ahead, and only when the way is clear behind you turn back onto the pavement slowly. Jerking the car back on is what sends it into oncoming traffic or over.",
        trap:
          "Braking is the reflex and it is what turns a blowout into a spin. The car is already unbalanced by the failed tire.",
        excerptKey: "tire-blowout",
        sourceLabel: `${HB} - Part 5: Safe driving, 5.13 Tire blow-out`,
        sourceUrl: p5(73),
      },
      {
        id: "nb_s2_20",
        topic: "signs",
        question:
          "A yellow diamond shows a bridge outline narrowing. What is it warning you about?",
        choices: [
          "A weight restriction on the bridge",
          "A bridge that is closed to heavy trucks",
          "A narrow bridge, where the pavement is narrower than the approach",
          "A bridge that ices before the road",
        ],
        correctIndex: 2,
        explanation:
          "The narrow bridge sign warns that the width of pavement on the bridge is less than the road you are on, so oncoming traffic will be closer than you expect.",
        context:
          "The nearby road narrows sign carries the same idea for the road itself: the road ahead is not as wide as the road you are driving on. Weight limits are a regulatory matter and appear on a white sign in tonnes. Ice on a bridge has its own warning: surface subject to icing, with the note that the bridge may be slippery at zero degrees Celsius.",
        trap:
          "Narrow bridge is not a weight limit. Weight is regulatory and appears in tonnes on a white sign, not a yellow diamond.",
        excerptKey: "narrow-bridge",
        sourceLabel: `${HB} - Part 7: Traffic Signs, 7.4 Warning signs`,
        sourceUrl: p7(91),
      },
      {
        id: "nb_s2_21",
        topic: "rules",
        question: "How fast should you back a vehicle, according to the handbook?",
        choices: [
          "No faster than a person walking quickly",
          "No faster than 10 km/h",
          "At idle speed only, with no accelerator",
          "Fast enough to clear the manoeuvre in one movement",
        ],
        correctIndex: 0,
        explanation:
          "The handbook sets the pace by comparison rather than by a number: no faster than a person walking quickly.",
        context:
          "The sequence around it matters as much. Foot on the brake, select reverse, do a complete safety scan over your shoulder and check the blind spot, get into a proper seating position, aim well into your intended path, move slowly with one hand at the twelve o'clock position on the wheel, and keep scanning in all directions the whole way back.",
        trap:
          "Backing on a highway is a separate prohibition. If you miss your exit you drive to the next one - you never reverse.",
        excerptKey: "backing-speed",
        sourceLabel: `${HB} - Part 4: Rules of the road, 4.21 Backing`,
        sourceUrl: p4(50),
      },
      {
        id: "nb_s2_22",
        topic: "rightOfWay",
        question:
          "You are approaching an intersection and another vehicle has already entered it. What must you do?",
        choices: [
          "Proceed if you have a green light",
          "Yield the right of way to it",
          "Take the right of way if you are on the wider road",
          "Sound your horn and proceed",
        ],
        correctIndex: 1,
        explanation:
          "A vehicle that has already entered the intersection has the right of way, and you yield to it. That comes before the right-hand tie-breaker.",
        context:
          "The handbook orders it as a list. Yield to a vehicle already in the intersection; when two arrive at an uncontrolled intersection at about the same time, yield to the driver on the right; where the intersection is signal-controlled, the lights decide who may proceed. And believing you had the right of way does not relieve you of responsibility for the collision.",
        trap:
          "A green light does not clear an occupied intersection. You still give way to whatever is already inside it.",
        excerptKey: "row-intersection-entered",
        sourceLabel: `${HB} - Part 4: Rules of the road, Intersection`,
        sourceUrl: p4(40),
      },
      {
        id: "nb_s2_23",
        topic: "signals",
        question:
          "A peace officer is directing traffic at an intersection where the light is green for you, and signals you to stop. What do you do?",
        choices: [
          "Follow the light, which is the legal signal",
          "Stop, then proceed once the officer looks away",
          "Stop only if the officer is in uniform",
          "Follow the officer's direction, with caution",
        ],
        correctIndex: 3,
        explanation:
          "The officer overrides the signal. When a peace officer directing traffic clearly directs you, you follow that direction regardless of what the signs or signals say, and you do it carefully.",
        context:
          "The same idea appears at the start of Part 4 as an offence: failing to comply with an order, signal or direction of a peace officer, or failing to observe an official traffic sign or signal, is an offence except where a peace officer directs otherwise. Crossing guards have a narrower power - they are authorised to stop traffic for pedestrians at crosswalks only.",
        trap:
          "A green light is a permission, not an instruction. The officer's direction replaces it entirely.",
        excerptKey: "peace-officer-directing",
        sourceLabel: `${HB} - Part 4: Rules of the road, 4.16 Peace Officer`,
        sourceUrl: p4(44),
      },
      {
        id: "nb_s2_24",
        topic: "sharing",
        question: "Where must a cyclist ride on a New Brunswick road?",
        choices: [
          "On the sidewalk, where one is available",
          "Facing traffic, on the left shoulder",
          "In the same lane as traffic, as close to the right as possible",
          "In the centre of the lane at all times",
        ],
        correctIndex: 2,
        explanation:
          "Cyclists ride with traffic, in the same lane, as close to the right as they can manage, or in a designated bike lane. Riding on the sidewalk is an offence.",
        context:
          "Bicyclists are subject to the same rules of the road as drivers, which means stop signs, signals and hand signals all apply to them. A bicycle should carry a headlight, reflectors and a horn or bell, and riding without a helmet is against the law in New Brunswick. Drivers, for their part, are told to avoid driving or parking in bike lanes and to look before opening a car door.",
        trap:
          "Facing traffic is the rule for pedestrians walking where there is no sidewalk, not for cyclists. A cyclist riding against traffic is in the wrong.",
        excerptKey: "bicycle-rules",
        sourceLabel: `${HB} - Part 6: Sharing the road, Bicyclists`,
        sourceUrl: p6(80),
      },
      {
        id: "nb_s2_25",
        topic: "safety",
        question:
          "What is the first thing to do if you arrive first at a collision scene?",
        choices: [
          "Pull well clear of the scene and put on your four-way flashers",
          "Move the injured clear of the vehicles",
          "Photograph the scene before anything is moved",
          "Direct traffic around the wreck",
        ],
        correctIndex: 0,
        explanation:
          "Prevent a second crash first. You pull completely off the road, far enough from the scene to shield the vehicles from further collisions, and put on your four-way flashers.",
        context:
          "Then call 9-1-1, identify your location, describe the scene and stay on the line until told to hang up. Do not move the injured unless they are in a burning vehicle or other immediate danger - untrained rescuers routinely make injuries worse. If you are not trained in first aid you can still cover them for warmth, loosen collars and belts, and keep talking to them.",
        trap:
          "Pulling up close to the wreck to help sooner is what creates the second collision the handbook is warning about.",
        excerptKey: "crash-first-steps",
        sourceLabel: `${HB} - Part 5: Safe driving, If you arrive first at a collision`,
        sourceUrl: p5(62),
      },
      {
        id: "nb_s2_26",
        topic: "signs",
        question:
          "An orange diamond shows a figure holding a flag. What should you be ready to do?",
        choices: [
          "Stop for instructions",
          "Yield to workers crossing the road",
          "Merge left at the next opportunity",
          "Take the marked detour",
        ],
        correctIndex: 0,
        explanation:
          "That is the traffic control person ahead sign. It tells you to be prepared to stop for instructions from the person directing traffic through the works.",
        context:
          "The construction family is all black on orange: construction ahead for the start of a zone, road work ahead where workers and maintenance activity are present, survey crew ahead, detour ahead, truck entrance, and pavement drop-off where the neighbouring lane or shoulder sits at a different level to yours.",
        trap:
          "A flagperson's direction is not advice. Failing to comply with the direction of a person controlling traffic is an offence in its own right.",
        excerptKey: "traffic-control-person",
        sourceLabel: `${HB} - Part 7: Traffic Signs, Construction Signs`,
        sourceUrl: p7(93),
      },
      {
        id: "nb_s2_27",
        topic: "impairment",
        question:
          "What is the Criminal Code blood alcohol limit the New Brunswick handbook quotes for drivers generally?",
        choices: [
          "0.05 percent",
          "0.08 percent",
          "0.10 percent",
          "0.02 percent",
        ],
        correctIndex: 1,
        explanation:
          "Eighty milligrams of alcohol per 100 millilitres of blood, which is 0.08 percent. That is the Criminal Code threshold and it applies across Canada.",
        context:
          "New Brunswick adds a provincial layer beneath it. A driver in the warning range between 0.05 and 0.08 faces penalties under the Motor Vehicle Act, including vehicle impoundment of three days for a first offence in five years, seven for a second, and a mandatory seven for a third. Every driver under 21, and every graduated licence holder, is at zero regardless.",
        trap:
          "Being under 0.08 is not being in the clear. The warning range starts at 0.05 and carries its own penalties.",
        excerptKey: "criminal-bac-limit",
        sourceLabel: `${HB} - Part 5: Safe driving, Consequences for alcohol-impaired driving`,
        sourceUrl: p5(65),
      },
      {
        id: "nb_s2_28",
        topic: "emergencies",
        question:
          "How close may you follow fire apparatus that is responding to an emergency?",
        choices: [
          "No closer than 60 metres",
          "No closer than 100 metres",
          "No closer than 150 metres",
          "There is no set distance",
        ],
        correctIndex: 2,
        explanation:
          "One hundred and fifty metres. The same distance applies to driving or parking near fire apparatus that has stopped in answer to an alarm.",
        context:
          "The handbook gives the same 150-metre figure for following any emergency vehicle. Two related prohibitions sit nearby: driving over a fire hose is not allowed unless the fire department official in charge tells you to, and possession or use of a radar detector is illegal anywhere in New Brunswick.",
        trap:
          "The distance applies to a stopped fire truck too. Parking within 150 metres of apparatus answering an alarm is the same offence as tailgating it.",
        excerptKey: "follow-fire-150",
        sourceLabel: `${HB} - Part 4: Rules of the road, Following Fire Vehicles`,
        sourceUrl: p4(34),
      },
      {
        id: "nb_s2_29",
        topic: "parking",
        question:
          "How far from a curb may a New Brunswick vehicle legally be left parked?",
        choices: [
          "No more than 50 centimetres",
          "No more than one metre",
          "No more than 30 centimetres",
          "Any distance, provided traffic can get by",
        ],
        correctIndex: 0,
        explanation:
          "Fifty centimetres. Leaving a vehicle further out than that is on the handbook's list of places and ways you are not permitted to stop, stand or park.",
        context:
          "The parallel-parking instructions end on the same number: straighten the wheels and pull up to within 60 centimetres of the car ahead and close to the curb, no further than 50 cm from it. On any highway you also have to leave five metres of unobstructed roadway for other traffic, and the parked vehicle has to be visible for 60 metres in each direction.",
        trap:
          "Fifty centimetres is roughly the length of your forearm plus your hand. It is a lot tighter than most drivers park.",
        excerptKey: "parking-curb-50cm",
        sourceLabel: `${HB} - Part 4: Rules of the road, Parking regulations`,
        sourceUrl: p4(48),
      },
      {
        id: "nb_s2_30",
        topic: "licensing",
        question:
          "How long do the results of a New Brunswick driver examination stay valid?",
        choices: ["Three months", "Six months", "One year", "Two years"],
        correctIndex: 1,
        explanation:
          "Six months. If you have not completed every component for the class of licence and had the licence issued within that window, you redo the parts that have expired.",
        context:
          "That interacts with the online written exams. You can pass both written parts at home, but you then wait a minimum of four business days before attending an SNB office for the vision test, and the licence is only issued once you have produced identification, proof of residency and, if you are under 18, a completed parental consent form.",
        trap:
          "Passing the written exams is not the same as holding a licence. Let six months slip before finishing and the written results go with them.",
        excerptKey: "test-results-six-months",
        sourceLabel: `${HB} - Part 1: Licensing of drivers, Re-examination`,
        sourceUrl: p1(18),
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Real Test Difficulty",
    difficulty: "medium",
    description:
      "Thirty-five questions pitched where the real pair of exams sits: exact distances, the signs that look alike, and the New Brunswick rules that differ from the ones your neighbours learned.",
    questions: [
      {
        id: "nb_s3_01",
        topic: "signs",
        question:
          "A yellow diamond shows two curved arrows, one after the other. What is ahead?",
        choices: [
          "A winding road, first curve to the right",
          "A reverse curve, two turns in opposite directions, first to the right",
          "A roundabout",
          "A hairpin bend",
        ],
        correctIndex: 1,
        explanation:
          "A reverse curve is two turns in opposite directions separated by a straight of less than 120 metres, the first of them to the right on the version shown here.",
        context:
          "The winding road sign looks similar and means something broader: a succession of curves, the first to the right. A single sharp curve gets its own sign, usually with a maximum advised speed on a tab beneath it. Chevron alignment signs may then be placed around the curve itself to guide you through.",
        trap:
          "The difference between reverse curve and winding road is the number of bends, not their severity. Reverse curve is exactly two.",
        excerptKey: "reverse-curve",
        sourceLabel: `${HB} - Part 7: Traffic Signs, 7.4 Warning signs`,
        sourceUrl: p7(91),
      },
      {
        id: "nb_s3_02",
        topic: "licensing",
        question:
          "A newly licensed New Brunswick driver has just been issued their licence. How many demerit points are they credited with?",
        choices: ["Ten", "Six", "Four", "Two"],
        correctIndex: 2,
        explanation:
          "Four to start. A further two are credited each subsequent year up to a maximum of ten, and the driver is suspended the moment the credit reaches zero.",
        context:
          "A newly licensed driver means anyone licensed for less than four years, whatever their age. Everyone else is on the ordinary ten-point system, where points are assessed against you, returned two years after the conviction date, and a loss of all ten within two years brings an automatic suspension. A demerit suspension runs three months.",
        trap:
          "The system runs downwards for the first four years, not upwards. A single distracted-driving conviction is five points, which is more than a first-year driver has.",
        excerptKey: "newly-licensed-points",
        sourceLabel: `${HB} - Part 1: Licensing of drivers, Newly licensed driver point suspension`,
        sourceUrl: p1(20),
        commonlyMissed: true,
      },
      {
        id: "nb_s3_03",
        topic: "rules",
        question:
          "You are passing another vehicle on a two-lane road and it accelerates. What does the law let you do?",
        choices: [
          "Match its speed, up to 20 km/h over the limit, to complete the pass",
          "Exceed the limit only until you are back in your lane",
          "Sound your horn, which permits a temporary overrun",
          "Nothing - you may not exceed the posted speed limit to complete a pass",
        ],
        correctIndex: 3,
        explanation:
          "New Brunswick allows no speed allowance for passing. The handbook's own passing sequence says it in brackets at step seven: you are not permitted to exceed the posted speed limit.",
        context:
          "The other driver is in the wrong at the same time. The overtaken driver must move to the right on hearing your signal and must not increase speed until you are completely past. The lawful response to a vehicle that speeds up is to abandon the pass and drop back, not to chase it.",
        trap:
          "Believing there is a passing allowance is one of the most widely held false rules in Canada. New Brunswick has none.",
        excerptKey: "passing-no-speeding",
        sourceLabel: `${HB} - Part 4: Rules of the road, 4.9 Passing`,
        sourceUrl: p4(38),
        commonlyMissed: true,
      },
      {
        id: "nb_s3_04",
        topic: "signs",
        question: "What does a black-and-white checkerboard-patterned hazard marker with downward-sloping lines tell you?",
        choices: [
          "The road surface changes here",
          "A weight limit begins",
          "The end of a passing lane",
          "The side on which you may safely pass the hazard",
        ],
        correctIndex: 3,
        explanation:
          "It marks a hazard close to the edge of the road, and the downward lines point to the side you may safely pass on.",
        context:
          "Hazard markers are read by their geometry rather than by words, which is the whole point of them. Chevrons in the same family guide you round a sharp curve. The orange triangle with a red border is the slow-moving vehicle sign, mounted on the rear of anything that travels under 40 km/h to warn drivers coming up behind.",
        trap:
          "The lines are not decoration. They slope towards the side you should pass on, so a marker sloping down to the left means keep left of it.",
        excerptKey: "hazard-marker",
        sourceLabel: `${HB} - Part 7: Traffic Signs, Hazard Markers`,
        sourceUrl: p7(92),
      },
      {
        id: "nb_s3_05",
        topic: "safety",
        question:
          "At what speed does partial hydroplaning begin in a passenger car, according to the handbook?",
        choices: ["About 40 km/h", "About 55 km/h", "About 70 km/h", "About 85 km/h"],
        correctIndex: 1,
        explanation:
          "About 55 km/h. It gets worse as speed rises, and by roughly 85 km/h in a severe rainstorm the tires can lose contact with the road entirely.",
        context:
          "When the tires are fully up on the water there is no friction available to brake, accelerate or corner - a gust of wind or a small steering input can start an uncontrollable skid. The response is to lift off the accelerator and let the car slow, steering to hold its original direction without oversteering. Deep tread is the main defence, because it gives the water somewhere to go.",
        trap:
          "Braking or steering out of full hydroplaning does nothing, because nothing is touching the road. Lifting off is the only input that works.",
        excerptKey: "hydroplaning-speeds",
        sourceLabel: `${HB} - Part 5: Safe driving, Hydroplaning`,
        sourceUrl: p5(70),
      },
      {
        id: "nb_s3_06",
        topic: "rightOfWay",
        question:
          "Two vehicles reach an uncontrolled intersection at about the same time. Where does New Brunswick's tie-breaker send the right of way?",
        choices: [
          "To the driver on the right",
          "To the driver already signalling",
          "To the driver on the larger road",
          "To the driver on the left",
        ],
        correctIndex: 0,
        explanation:
          "To the driver on your right, and the handbook applies the same rule to three-way and four-way stop signs.",
        context:
          "It is a tie-breaker and nothing more. The prior rule is that you yield to any vehicle that has already entered the intersection, and where the intersection is signal-controlled the lights decide. Before you enter a highway at all you yield to everything already approaching on it.",
        trap:
          "The rule is about arrival at the same time. If the other driver clearly got there first, they go, whichever side they are on.",
        excerptKey: "row-right-hand-rule",
        sourceLabel: `${HB} - Part 4: Rules of the road, Intersection`,
        sourceUrl: p4(40),
      },
      {
        id: "nb_s3_07",
        topic: "sharing",
        question:
          "A tractor-trailer travelling at 90 km/h under ideal conditions needs how much total distance to come to a complete stop, on the handbook's figures?",
        choices: ["About 56 metres", "About 60 metres", "About 78 metres", "About 102 metres"],
        correctIndex: 3,
        explanation:
          "About 102 metres, once reaction time and brake lag are added to the braking distance. With hot brakes it is longer still.",
        context:
          "The component figures explain where the number comes from. A passenger sedan at 90 km/h stops in 56 metres; a loaded sleeper-cab tractor needs a minimum 60 metres of braking alone; the average reaction time of three quarters of a second adds 18 metres at that speed; and air brakes lag in a way hydraulic brakes on a car do not. A bobtail tractor with no trailer still needs 56 metres.",
        trap:
          "A lighter truck does not stop sooner. A bobtail has no trailer weight over its rear wheels, so it stops about as slowly as a loaded one.",
        excerptKey: "truck-total-stop",
        sourceLabel: `${HB} - Part 6: Sharing the road, Braking`,
        sourceUrl: p6(84),
        commonlyMissed: true,
      },
      {
        id: "nb_s3_08",
        topic: "signals",
        question:
          "What must you do when a pedestrian signal at an intersection shows red or amber to the pedestrians?",
        choices: [
          "Proceed - the pedestrian phase does not affect vehicles",
          "Turn right only",
          "Yield to pedestrians but keep moving",
          "Stop until the traffic light turns green, then proceed once pedestrians have cleared the crosswalk",
        ],
        correctIndex: 3,
        explanation:
          "Where a pedestrian light is running, all vehicles stop until the traffic light changes to green, and then move off carefully once the crosswalk is clear of people.",
        context:
          "That is why the green light rule in the handbook is qualified: motorists and pedestrians may proceed on green unless a specific pedestrian light is in operation. A walk signal gives pedestrians the crosswalk and obliges all other traffic to yield to them; a don't walk signal tells pedestrians not to start.",
        trap:
          "A green ball does not override a running pedestrian phase. The pedestrian signal is the one governing the crossing.",
        excerptKey: "pedestrian-light",
        sourceLabel: `${HB} - Part 4: Rules of the road, Red or amber pedestrian light`,
        sourceUrl: p4(44),
      },
      {
        id: "nb_s3_09",
        topic: "signs",
        question:
          "A white sign shows a black arrow splitting into two, with a black bar down one side. What family does it belong to?",
        choices: [
          "Warning signs",
          "Regulatory signs",
          "Guide signs",
          "Information signs",
        ],
        correctIndex: 1,
        explanation:
          "Lane designation signs are regulatory. They are white with black symbols, they state law, and where they are mounted above the road each one is centred over the lane it controls.",
        context:
          "The lane designation set covers this lane must turn left, this lane left or through, this lane left or right, this lane through only, this lane must turn right, this lane right or through, all movements, and the two-way left turn lane. Ignoring any of them is an offence under the Motor Vehicle Act.",
        trap:
          "Overhead position is what tells you which lane the sign governs. A sign centred over the middle lane says nothing about the one you are in.",
        excerptKey: "lane-designation",
        sourceLabel: `${HB} - Part 7: Traffic Signs, Lane designation signs`,
        sourceUrl: p7(89),
      },
      {
        id: "nb_s3_10",
        topic: "rules",
        question:
          "You are in a two-way left-turn lane in the middle of the road. What may you not use it for?",
        choices: [
          "Turning left from a driveway",
          "Waiting for a gap to turn left",
          "Passing slower traffic",
          "Reducing speed before a left turn",
        ],
        correctIndex: 2,
        explanation:
          "The centre lane is for left turns from either direction and nothing else. The handbook states in capitals that it is not intended as a passing lane.",
        context:
          "You enter it as near as you can to the point where you will actually turn, having signalled and slowed and checked traffic in all directions including the left blind spot. Vehicles may be coming towards you in the same lane, and a waiting car can block your view of oncoming traffic, so caution matters more here than almost anywhere.",
        trap:
          "The lane looks empty because everyone else uses it briefly. Sitting in it or running along it is the misuse the handbook singles out.",
        excerptKey: "two-way-left-turn-lane",
        sourceLabel: `${HB} - Part 4: Rules of the road, Two-way left-turn lane`,
        sourceUrl: p4(46),
      },
      {
        id: "nb_s3_11",
        topic: "impairment",
        question:
          "For how long is a vehicle impounded when a novice driver breaches the zero tolerance rule?",
        choices: ["Seven days", "Three days", "Fourteen days", "Thirty days"],
        correctIndex: 0,
        explanation:
          "Seven days, and it is mandatory. There is no discretion for a novice driver who breaches zero tolerance.",
        context:
          "The other impoundment figures are separate. A driver in the 0.05 to 0.08 warning range faces three days for a first offence in five years and seven for a second, both discretionary, with seven mandatory on a third. A driver at 0.08 or over, or one who refuses a breath sample, faces 30 days mandatory for a first suspension in ten years and 60 for a subsequent one.",
        trap:
          "Impoundment of the vehicle is not the licence suspension. Both happen, and they run on different clocks.",
        excerptKey: "impound-novice",
        sourceLabel: `${HB} - Part 5: Safe driving, Vehicle Impoundment Program`,
        sourceUrl: p5(66),
      },
      {
        id: "nb_s3_12",
        topic: "safety",
        question:
          "Your vehicle has no anti-lock brakes and you must stop on a slippery surface. What does the handbook advise?",
        choices: [
          "Pump the brake pedal in and out, slowing gradually without locking the wheels",
          "Apply steady, firm pressure and hold it",
          "Use the parking brake instead",
          "Shift to neutral and coast to a stop",
        ],
        correctIndex: 0,
        explanation:
          "Without ABS you pump the pedal in and out, shedding speed gradually and keeping the wheels turning. Locked wheels cannot steer and cannot grip.",
        context:
          "With ABS the advice is exactly the opposite: steady pressure on the pedal and no pumping at all, because the system does the pumping for you far faster than a foot can. That difference is worth knowing before you need it, since the two techniques cancel each other out.",
        trap:
          "Applying an ABS technique to a car without it locks the wheels; applying the non-ABS technique to a car with it defeats the system. Check which one you are driving.",
        excerptKey: "no-abs-pump",
        sourceLabel: `${HB} - Part 5: Safe driving, Stopping on ice`,
        sourceUrl: p5(69),
      },
      {
        id: "nb_s3_13",
        topic: "speed",
        question:
          "What does the handbook say happens to the force of impact when a vehicle's speed is doubled?",
        choices: [
          "It doubles",
          "It rises by about half again",
          "It is four times as great",
          "It is eight times as great",
        ],
        correctIndex: 2,
        explanation:
          "Four times as great. The handbook makes the same point twice, once as physics and once as an image: a crash at 30 km/h is like dropping the car off a one-storey building, and at 60 km/h it is like dropping it off a four-storey one.",
        context:
          "Stopping distance grows the same way. Stopping is described as two stages, seeing the reason to stop and reacting to it, and at 50 km/h a car covers about 10 metres - two car lengths - in the time it takes to move a foot to the brake pedal.",
        trap:
          "Twice the speed is not twice the danger. The energy that has to go somewhere in the crash goes up with the square.",
        excerptKey: "crash-impact-storeys",
        sourceLabel: `${HB} - Part 5: Safe driving, DID YOU KNOW?`,
        sourceUrl: p5(62),
      },
      {
        id: "nb_s3_14",
        topic: "signs",
        question:
          "A white rectangular sign shows a black arrow bending around a black bar, with a green circle behind it. What does it mean?",
        choices: [
          "Passing is not permitted",
          "Passing is permitted",
          "A passing lane begins ahead",
          "Slow traffic must keep right",
        ],
        correctIndex: 1,
        explanation:
          "A green circle grants permission for the movement shown, so a passing symbol inside a green circle means passing is permitted here.",
        context:
          "The same symbol in a red circle with a diagonal slash means passing not permitted. New Brunswick uses that pair across the regulatory set - heavy trucks permitted or prohibited, dangerous goods route or dangerous goods carriers prohibited, and the no U-turn sign, which tells you that you may not turn your vehicle around in the roadway to travel the opposite way.",
        trap:
          "Green circle is permission, not direction. It does not mean you must pass or that the lane ahead is for passing.",
        excerptKey: "green-circle",
        sourceLabel: `${HB} - Part 7: Traffic Signs, 7.3 Regulatory Signs`,
        sourceUrl: p7(88),
      },
      {
        id: "nb_s3_15",
        topic: "licensing",
        question:
          "How soon must you tell the Motor Vehicle Branch about a change of address?",
        choices: [
          "Within ten days",
          "Within thirty days",
          "At your next licence renewal",
          "Within six months",
        ],
        correctIndex: 0,
        explanation:
          "Within ten days, and the same ten-day rule applies to a change of name. Both are legal duties, not administrative courtesies.",
        context:
          "This is exactly the sort of number the handbook buries and the exam asks about. Alongside it: a licence expires on the holder's birthday in the year of expiry and it is your responsibility to track that; and on renewal you must tell the Branch about any change in physical or mental condition that could affect your driving, and about any revocation or suspension.",
        trap:
          "Thirty days is the figure people guess, borrowed from other jurisdictions. New Brunswick's is ten.",
        excerptKey: "change-of-address",
        sourceLabel: `${HB} - Part 1: Licensing of drivers, Change of Address`,
        sourceUrl: p1(19),
        commonlyMissed: true,
      },
      {
        id: "nb_s3_16",
        topic: "rules",
        question:
          "You are turning right from a two-lane road onto a road with two lanes in your direction. Which lane should you finish in?",
        choices: [
          "Either lane, then signal to move over",
          "Whichever lane is clear",
          "The lane nearest you",
          "The far lane, to leave room for traffic behind",
        ],
        correctIndex: 2,
        explanation:
          "You finish the turn in the lane nearest you, and only then change lanes if you need to, with a signal and a shoulder check.",
        context:
          "The handbook's eight-step turning sequence puts that at step seven, and the steps before it matter as much: decide well ahead, move into the correct lane early, look behind and to both sides, signal the lane change and the turn, slow before the crosswalk, and hold the same speed through the turn without pushing the brake or clutch down.",
        trap:
          "Cutting into the far lane during the turn is one of the most common road-test failures in New Brunswick, and it is the same error on paper.",
        excerptKey: "turn-finish-lane",
        sourceLabel: `${HB} - Part 4: Rules of the road, 4.18 Turning at intersections`,
        sourceUrl: p4(45),
        commonlyMissed: true,
      },
      {
        id: "nb_s3_17",
        topic: "signs",
        question:
          "A yellow diamond shows an arrow bending sharply, with a small tab beneath reading 40. What is the 40?",
        choices: [
          "The legal speed limit for the curve",
          "The distance in metres to the curve",
          "A minimum speed",
          "The maximum advised speed for the curve",
        ],
        correctIndex: 3,
        explanation:
          "It is a maximum advised speed for that curve, not a posted limit. The regulatory limit for the road stays whatever the white sign says.",
        context:
          "Advisory speeds appear under sharp curve signs and under railway advance warning signs, where the safe road speed is lower than the posted one. The handbook's advice for curves is to shed the speed before you enter and accelerate gently once you are in - collisions happen when drivers enter at full speed and then try to slow inside the bend.",
        trap:
          "Ignoring an advisory speed is not automatically a speeding charge, but it can still be driving without due care, which is five demerit points.",
        excerptKey: "curves",
        sourceLabel: `${HB} - Part 5: Safe driving, 5.15 Curves`,
        sourceUrl: p5(73),
      },
      {
        id: "nb_s3_18",
        topic: "rightOfWay",
        question:
          "A blind pedestrian with a white cane is at the kerb ahead of you. What does the handbook say?",
        choices: [
          "Sound your horn so they know you are there",
          "Proceed normally; the cane has no legal significance",
          "Stop only if they have stepped off the kerb",
          "Exercise extreme caution - you can see them but they cannot see you",
        ],
        correctIndex: 3,
        explanation:
          "Extreme caution, and the handbook puts the reason plainly: you can see them and they cannot see you. The white cane is restricted by law to people with visual impairment, so it is a reliable signal.",
        context:
          "The general pedestrian duties still apply on top of this. Drivers yield to pedestrians in a marked crosswalk or an unmarked crosswalk at the end of a block, persons with disabilities may take longer to cross and should be given the time, and passing a vehicle that has stopped for a pedestrian is an offence.",
        trap:
          "The horn is the wrong tool. A blind pedestrian navigating by sound is not helped by a noise that tells them nothing about where you are going.",
        excerptKey: "white-cane",
        sourceLabel: `${HB} - Part 5: Safe driving, 5.7 White cane`,
        sourceUrl: p5(62),
      },
      {
        id: "nb_s3_19",
        topic: "safety",
        question:
          "How much further can it take to stop on snow and ice than on dry concrete, without tire chains?",
        choices: ["Twice as far", "Four times as far", "Eight times as far", "Up to twelve times as far"],
        correctIndex: 3,
        explanation:
          "Up to twelve times the distance. That is why the winter advice is about the gap you leave rather than about braking technique.",
        context:
          "The handbook's winter rules run together: adjust speed to conditions, get the feel of the road by trying the brakes gently somewhere clear of traffic, keep the windscreen clear, use snow tires, chains or studs, learn how your ABS behaves, and keep well back of the vehicle ahead. Bridges and overpasses freeze before the rest of the road, because condensation on them has nothing warm underneath.",
        trap:
          "Studded tires shorten stopping distance on ice but can lengthen it in extreme cold, and they can make an emergency stop skid worse than plain rubber. They are not a licence to drive normally.",
        excerptKey: "winter-12-times",
        sourceLabel: `${HB} - Part 5: Safe driving, Rules for winter driving`,
        sourceUrl: p5(72),
      },
      {
        id: "nb_s3_20",
        topic: "sharing",
        question:
          "You are behind a motorcycle. What does the handbook tell you about following distance?",
        choices: [
          "Follow as you would a car, since a motorcycle is lighter",
          "Allow extra distance, because a motorcycle can stop more quickly than other vehicles",
          "Allow less distance, so you stay out of the rider's blind spot",
          "Follow at exactly two seconds, as with any vehicle",
        ],
        correctIndex: 1,
        explanation:
          "Extra distance. New Brunswick's reasoning is that motorcycles can stop quicker than other vehicles, so the gap that would be enough behind a car is not enough behind a bike.",
        context:
          "A motorcycle is entitled to a full highway lane and you never crowd into it. Bikes disappear easily into blind spots, so the handbook tells drivers to look for them and to be sure what the rider intends before moving into their path. Riders are told the same thing in reverse: position yourself to see and be seen, and do not zig-zag between cars.",
        trap:
          "Most drivers assume a motorcycle needs longer to stop because it is smaller. The handbook says the opposite, which is why the gap has to be bigger, not smaller.",
        excerptKey: "motorcycle-stop-quicker",
        sourceLabel: `${HB} - Part 6: Sharing the road, 6.3 Drivers and motorcycles`,
        sourceUrl: p6(79),
        commonlyMissed: true,
      },
      {
        id: "nb_s3_21",
        topic: "signs",
        question:
          "A blue sign with a white symbol appears at the roadside. What is it for?",
        choices: [
          "A regulation you must obey",
          "A hazard warning",
          "A construction detour",
          "Tourism information or motorist services",
        ],
        correctIndex: 3,
        explanation:
          "Blue is New Brunswick's colour for attractions, tourism information and motorist services. It never states a law.",
        context:
          "Information signs are square and mark the location of facilities - museums, accommodation, fuel, food, picnic areas, tourist information, campgrounds. Guide signs are the separate green family that route you along established roads and tell you what the intersecting roads are, along with the Trans-Canada, arterial, collector and local highway markers.",
        trap:
          "Blue signs carry no obligation at all. Confusing them with regulatory signs is the sort of colour slip the sign exam is designed to find.",
        excerptKey: "sign-colours",
        sourceLabel: `${HB} - Part 7: Traffic Signs, 7.2 Standard sign colours`,
        sourceUrl: p7(87),
      },
      {
        id: "nb_s3_22",
        topic: "rules",
        question: "Where does New Brunswick allow you to stop to let a passenger out?",
        choices: [
          "Anywhere the traffic behind you can get past",
          "In the traffic lane, provided your flashers are on",
          "At the curb or side of the roadway",
          "In a bike lane, briefly",
        ],
        correctIndex: 2,
        explanation:
          "At the curb or the side of the roadway, and nowhere else. The same restriction covers loading or unloading goods.",
        context:
          "Two related rules sit in the same section. You must not let anyone enter a vehicle while it is in motion, and nobody may ride on a part of the vehicle that is not designed for carrying passengers - the exceptions being an approved parade, and workers being carried while working or to and from a worksite. The rules extend to trailers and semi-trailers being hauled on a highway.",
        trap:
          "Hazard lights do not make a traffic-lane stop lawful. Four-way flashers are for a vehicle stopped by an emergency or by something beyond the driver's control.",
        excerptKey: "load-at-curb",
        sourceLabel: `${HB} - Part 4: Rules of the road, 4.22 Miscellaneous traffic provisions`,
        sourceUrl: p4(50),
      },
      {
        id: "nb_s3_23",
        topic: "signals",
        question:
          "The Act says a driver facing an amber signal shall not enter the intersection unless what?",
        choices: [
          "They are turning right",
          "They are so close that it is impossible to stop before entering",
          "The intersection is clear of pedestrians",
          "They have already signalled",
        ],
        correctIndex: 1,
        explanation:
          "Unless they are so close to the intersection that stopping before entering it is impossible. That is a much narrower test than most drivers apply.",
        context:
          "The handbook says the same in everyday words: if you are too close to stop safely, or have already entered the intersection, carry on with caution. What neither source permits is speeding up on the amber, or entering it on the basis that you could have stopped but would rather not.",
        trap:
          "\"I would have had to brake hard\" is not the standard. The test is impossibility of stopping, not inconvenience.",
        excerptKey: "mva-amber-signal",
        sourceLabel: `${ACT} - Section 119(1)(b)(i)`,
        sourceUrl: mva("119"),
      },
      {
        id: "nb_s3_24",
        topic: "speed",
        question:
          "A driver is convicted of exceeding a school-zone limit during school hours. What happens to the minimum fine?",
        choices: [
          "It is doubled",
          "It is increased by half",
          "It is unchanged, but demerit points double",
          "It is set at a flat provincial amount",
        ],
        correctIndex: 0,
        explanation:
          "The minimum fine is doubled. The Act says so for school zones and for construction zones, and the handbook repeats it in capitals.",
        context:
          "The doubling is worked out from the category of offence in the Provincial Offences Procedure Act, which is where the base fines live. It applies to every band of school-zone speeding, from 25 km/h or less over the limit upwards, and the Act now extends the same doubling to a designated school area as well as a school zone.",
        trap:
          "The demerit points are not doubled - the fine is. Speeding 25 km/h or less over is three points either way; more than 25 over is five.",
        excerptKey: "zone-fines-doubled",
        sourceLabel: `${HB} - Part 4: Rules of the road, DID YOU KNOW?`,
        sourceUrl: p4(36),
      },
      {
        id: "nb_s3_25",
        topic: "safety",
        question:
          "Which of these does the handbook name as the most common cause of highway crashes in New Brunswick?",
        choices: [
          "Inattention and driver distraction",
          "Vehicle defects",
          "Impaired driving",
          "Following too closely",
        ],
        correctIndex: 0,
        explanation:
          "Inattention and driver distraction head the handbook's own list of the most common causes of crashes in this province.",
        context:
          "The rest of the list, in the order the handbook prints it: operating too fast for conditions, failure to grant right of way, impaired driving, obstructed view, following too closely, and improper use of lanes. Distracted driving is also one of the heaviest demerit penalties in New Brunswick at five points.",
        trap:
          "Impaired driving is on the list but it is not at the top of it. The book puts distraction first.",
        excerptKey: "crash-causes",
        sourceLabel: `${HB} - Part 5: Safe driving, 5.6 The driver`,
        sourceUrl: p5(58),
      },
      {
        id: "nb_s3_26",
        topic: "signs",
        question:
          "An orange diamond shows a vehicle at the edge of a step in the pavement. What is it warning of?",
        choices: [
          "A pavement drop-off, where the next lane or shoulder is at a different level",
          "A bump or rough road ahead",
          "Loose gravel",
          "A ramp closure",
        ],
        correctIndex: 0,
        explanation:
          "A pavement drop-off warns that the neighbouring lane or shoulder, or both, sit lower or higher than the lane you are travelling in. Catching that edge at speed can pull a car off line.",
        context:
          "The bump or rough road sign is a separate yellow warning. The pavement ends sign tells you the surface changes to gravel. Where a wheel does drop off the pavement, the handbook's advice is to lift off, steer straight, and only come back onto the road slowly once the way behind you is clear.",
        trap:
          "Jerking the wheel to climb back onto the pavement is how drivers cross the centre line or roll. Straighten first, ease back second.",
        excerptKey: "pavement-drop-off",
        sourceLabel: `${HB} - Part 7: Traffic Signs, Construction Signs`,
        sourceUrl: p7(93),
      },
      {
        id: "nb_s3_27",
        topic: "licensing",
        question:
          "How does a Level 1 driver become eligible for the road test that takes them to Level 2?",
        choices: [
          "Twelve months at Level 1, or eight with a licensed driver training school",
          "Six months at Level 1, or three with driver training",
          "Twelve months at Level 1, with no reduction available",
          "Eight months at Level 1, whether or not they train",
        ],
        correctIndex: 0,
        explanation:
          "Twelve months as a rule, reduced to eight if you graduated from a licensed driver training school. The Act adds that the course has to have been passed within the previous two years.",
        context:
          "The graduated programme runs a minimum of 24 months in total across the two levels, and the balance is served in Level 2. Coming out the other end, at least twelve of those months must have been spent in stage two, and no further road test is required to convert to a Class 5 - but you have to apply for it yourself.",
        trap:
          "Driver training shortens Level 1, not the programme. Enter Level 2 early and you simply spend longer there; the 24 months does not move.",
        excerptKey: "level1-road-test-wait",
        sourceLabel: `${HB} - Part 1: Licensing of drivers, Level 1`,
        sourceUrl: p1(10),
        commonlyMissed: true,
      },
      {
        id: "nb_s3_28",
        topic: "rightOfWay",
        question:
          "A crossing guard steps into the road and raises a stop paddle. What is the extent of their authority?",
        choices: [
          "They may stop traffic for any reason",
          "They may direct traffic through an intersection",
          "They have no authority to stop traffic",
          "They may stop traffic for pedestrians crossing at crosswalks only",
        ],
        correctIndex: 3,
        explanation:
          "A crosswalk guard's power is narrow and specific: stopping traffic for pedestrians crossing at crosswalks. That is the whole of it.",
        context:
          "A peace officer's authority is much wider. An officer directing traffic overrides signs and signals entirely, and failing to comply with their order, signal or direction is an offence. Flagpersons at roadworks are a third category again, with their own prescribed clothing and traffic control devices.",
        trap:
          "The narrowness of the power is not an invitation to ignore it. Within a crosswalk the guard's paddle stops you as surely as a red light.",
        excerptKey: "crosswalk-guard",
        sourceLabel: `${HB} - Part 4: Rules of the road, 4.17 Crosswalk guard`,
        sourceUrl: p4(44),
      },
      {
        id: "nb_s3_29",
        topic: "parking",
        question:
          "You have to park on a highway. How much unobstructed roadway must be left for other traffic?",
        choices: ["Three metres", "Five metres", "Six metres", "Ten metres"],
        correctIndex: 1,
        explanation:
          "Five metres of unobstructed roadway, and there is a second condition attached: the parked vehicle must be clearly visible for 60 metres in each direction.",
        context:
          "Both conditions have to be met at once, and on a rural highway the starting point is that you should not be on the pavement at all - a vehicle left standing there must be moved off the paved or main travelled part unless it is too disabled to move. Parking on the travelled portion where it could reasonably be parked elsewhere is an offence in itself.",
        trap:
          "Meeting the five metres is not enough on a bend or over a crest. If approaching drivers cannot see the car from 60 metres away, the parking is unlawful.",
        excerptKey: "parking-clearance",
        sourceLabel: `${HB} - Part 4: Rules of the road, 4.20 Parking`,
        sourceUrl: p4(47),
      },
      {
        id: "nb_s3_30",
        topic: "sharing",
        question:
          "A farm tractor ahead of you displays an orange triangle with a red border. What does that sign mean?",
        choices: [
          "The vehicle is carrying dangerous goods",
          "The vehicle is oversized",
          "The vehicle travels at less than 40 km/h",
          "The vehicle is an escort for a wide load",
        ],
        correctIndex: 2,
        explanation:
          "It is the slow-moving vehicle sign, mounted on the rear of anything that travels under 40 km/h. It warns drivers coming up behind to slow down.",
        context:
          "Farm equipment must carry it on a highway unless it is simply crossing straight over, and the rule extends to anything it tows. The handbook's advice around farm vehicles is a list of capitals: be alert, be aware, do not pass until you are sure the operator knows what you intend and the way is clear, and be patient, because soft shoulders and obstructions may make it impossible for them to pull over.",
        trap:
          "Rear-end collisions with moving farm equipment are the first of the three accident types the handbook lists. The sign exists because closing speed on a tractor is far higher than it looks.",
        excerptKey: "slow-moving-vehicle-sign",
        sourceLabel: `${HB} - Part 7: Traffic Signs, Hazard Markers`,
        sourceUrl: p7(92),
      },
      {
        id: "nb_s3_31",
        topic: "rules",
        question:
          "When may you use the four-way flashers on a New Brunswick road?",
        choices: [
          "Whenever you are driving slowly in bad weather",
          "Whenever you double-park briefly",
          "When you are being overtaken on a narrow road",
          "When the vehicle is parked on the highway because of an emergency or something beyond your control",
        ],
        correctIndex: 3,
        explanation:
          "The flashers are for a vehicle parked on the highway, or any part of it, because of an emergency or circumstances beyond the driver's control. They are not a general-purpose signal.",
        context:
          "They are also the first thing to switch on if you arrive at a collision, after pulling well clear of it. A disabled vehicle at night has a further requirement: a portable reflector unit or standard placed roughly 30 metres to the rear, at or near the edge of the roadway.",
        trap:
          "Using them as an apology for an illegal stop does not make the stop legal. The stopping offence stands whatever your lights are doing.",
        excerptKey: "four-way-flashers",
        sourceLabel: `${HB} - Part 3: Equipment, Four way flashers`,
        sourceUrl: p3(30),
      },
      {
        id: "nb_s3_32",
        topic: "speed",
        question:
          "The posted limit is 90 km/h but freezing rain is falling. What does the law say about your speed?",
        choices: [
          "The posted limit remains lawful in any weather",
          "You may not drive faster than is reasonable and prudent for the conditions",
          "You must reduce to half the posted limit",
          "You must reduce to 60 km/h",
        ],
        correctIndex: 1,
        explanation:
          "The Act sets a second, independent ceiling: no faster than is reasonable and prudent in the conditions, having regard to the actual and potential hazards. In freezing rain that can be well below 90.",
        context:
          "The handbook puts the same idea as a definition. A posted limit is the maximum for ideal conditions, and poor visibility, a wet or slippery road, pedestrians or animals near the highway, heavy traffic, fatigue or illness are all reasons the safe speed is lower. Driving at a speed that endangers life, limb or property is separately prohibited.",
        trap:
          "The posted number is not a defence. Drivers are convicted every winter for speeds under the limit that were still too fast for the road.",
        excerptKey: "mva-reasonable-and-prudent",
        sourceLabel: `${ACT} - Section 140(2)`,
        sourceUrl: mva("140"),
        commonlyMissed: true,
      },
      {
        id: "nb_s3_33",
        topic: "safety",
        question:
          "Fog closes in and visibility drops sharply. Which lights does the handbook tell you to use?",
        choices: [
          "High beams, for maximum reach",
          "Parking lights, to reduce glare",
          "Low-beam headlights",
          "Hazard flashers only",
        ],
        correctIndex: 2,
        explanation:
          "Low beams. They throw light down onto the road instead of bouncing it back off the fog, and they make your vehicle visible to everyone else.",
        context:
          "The rest of the fog advice: reduce speed gradually as soon as you meet it, avoid sudden stops because trucks need much longer to slow, and in dense fog creep, since most fog collisions come from overdriving the visibility. If you have to stop, get right off the road and, in heavy traffic, get out of the car and move well clear. The same practices apply in heavy or blowing snow.",
        trap:
          "Parking lights are ruled out explicitly. They are dim enough to be mistaken for a distant vehicle and give you no useful light at all.",
        excerptKey: "fog-low-beam",
        sourceLabel: `${HB} - Part 5: Safe driving, 5.17 Driving in fog`,
        sourceUrl: p5(74),
      },
      {
        id: "nb_s3_34",
        topic: "signs",
        question:
          "A yellow diamond shows a lane merging into another from the right, with no merge required. Which sign is it?",
        choices: [
          "Two lanes merge ahead",
          "Added lane",
          "Traffic entering from right",
          "Lane ends",
        ],
        correctIndex: 1,
        explanation:
          "Added lane is the one where two roads converge and no merging movement is required, because a new lane is provided for the joining traffic.",
        context:
          "It is easy to mistake for its neighbours. Two lanes merge ahead does require merging. Traffic entering from right warns of vehicles joining your road. Lane ends tells you the right lane runs out. Each of the four looks similar at a glance and means something different about who has to give way.",
        trap:
          "Added lane is the only one of the four that does not oblige anybody to merge. Slowing to let traffic in there causes the very conflict the sign says is unnecessary.",
        excerptKey: "added-lane",
        sourceLabel: `${HB} - Part 7: Traffic Signs, 7.4 Warning signs`,
        sourceUrl: p7(91),
      },
      {
        id: "nb_s3_35",
        topic: "licensing",
        question:
          "Which document does New Brunswick require you to carry while operating a registered vehicle?",
        choices: [
          "The registration certificate or a photocopy of it",
          "The original registration certificate only",
          "The bill of sale",
          "Nothing, provided the plate is valid",
        ],
        correctIndex: 0,
        explanation:
          "The registration certificate, or a photocopy of it, must be carried by the driver while the vehicle is being operated.",
        context:
          "Your driver's licence has a stricter rule: you must always carry it, produce it for any peace officer who asks, and show it on request to any other driver you are in a collision with. After a collision causing injury or property damage you also have to hand over your name, address, plate number and liability insurance card.",
        trap:
          "A photocopy is enough for the registration but not a substitute for the licence itself, which you must actually carry.",
        excerptKey: "registration-carry",
        sourceLabel: `${HB} - Part 2: Registration of vehicles, 2.1 Certificate of Registration`,
        sourceUrl: p2(24),
      },
    ],
  },
];
