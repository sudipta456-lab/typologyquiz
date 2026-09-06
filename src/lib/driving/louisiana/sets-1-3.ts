import type { DrivingTestSet } from "../types";

// Every fact below was checked against the Class D & E Driver's Guide, form
// DPSMV2052 (R03/2021), published by the Louisiana Department of Public Safety
// and Corrections, Office of Motor Vehicles; against the sections of Louisiana
// Revised Statutes Title 32 that carry rules the guide states incompletely or
// not at all; and against four OMV licensing handouts for the test format and
// the graduated licensing stages.
//
// The guide runs 138 pages and is written for a fifteen-year-old, and the gaps
// matter, because the OMV writes a 40-question knowledge test from it and
// expects numbers the book never prints.
//
// 1. The guide prints exactly one speed figure for open road - "Maximum speed
//    for any vehicle in Louisiana is 70 mph" - and one exception, the 75 mph
//    stretch of I-49. The 55 mph statutory default where nothing is posted and
//    the 65 mph multi-lane divided figure are in R.S. 32:61(A), as amended by
//    Acts 2025 No. 194.
// 2. The guide gives no minimum liability limits at all. The 15/30/25 figures
//    are in R.S. 32:900(B)(2).
// 3. The guide never says how many questions the knowledge test has. The OMV's
//    own Class E handouts do: "A 40 question test with a minimum score of 80%
//    is required."
// 4. The guide never lists the subjects the test must cover. R.S. 32:407(A)(2)
//    does, down to "not less than two questions relative to railroad and
//    highway grade railroad safety".
// 5. The guide's cell phone paragraph points the reader at R.S. 32:59 for
//    exceptions. That section was rewritten by Acts 2025 No. 288, which also
//    repealed the old texting sections 32:300.5 through 32:300.8, so anything
//    still citing 32:300.5 is stale.
//
// Two conflicts inside the guide itself are flagged where they arise. Its
// R.S. 32:143 parking list adds "More than 2 feet from the curb" while its own
// Parking section, and the statute, use 18 inches; and its safety-belt page
// gives child restraint stages by age while R.S. 32:295 keys each stage to the
// manufacturer's height and weight limits. Questions here are built so both
// readings give the same answer. See the research note.
//
// Questions are original. Explanations, context notes and trap notes are
// written from scratch; the deep link is there so the learner reads the OMV's
// own authoritative wording.
const HB = "https://public.powerdms.com/LADPSC/documents/347039";
/** Printed page number to a PDF page anchor - the book's page 1 is PDF page 6. */
const hb = (page: number) => `${HB}#page=${page + 5}`;
const stat = (d: number) => `https://legis.la.gov/legis/Law.aspx?d=${d}`;
const PERMITS =
  "https://expresslane.la.gov/omv/drivers/personal-driver-s-licenses/permits/";
const GUIDE = "Class D & E Driver's Guide";
const RS = "Louisiana Revised Statutes";

export const louisianaSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Louisiana Basics",
    difficulty: "starter",
    description:
      "The rules you meet on your first drive in Louisiana: what the shapes and colors mean, who goes first, and the handful of numbers the OMV's 40-question knowledge test expects you to know cold.",
    questions: [
      {
        id: "la_s1_01",
        topic: "signs",
        question:
          "A red eight-sided sign faces you at an intersection. What does Louisiana require?",
        choices: [
          "Slow to a crawl and roll through if nothing is coming",
          "Stop only if another vehicle is approaching",
          "Come to a complete stop, look all ways, and yield before entering",
          "Yield to the wider road, then continue",
        ],
        correctIndex: 2,
        explanation:
          "The octagon is reserved for STOP and nothing else. The guide is blunt about it: you stop behind the stop line or crosswalk, look for crossing vehicles and pedestrians in all directions, and only then enter.",
        context:
          "Louisiana teaches signs by shape first, because the shape is readable in fog, glare or a language you do not read. Eight sides means stop, a downward triangle means yield, a yellow diamond warns of something ahead, and orange means people are working on the road. A 4-WAY plate under the sign tells you every approach stops; without it, the cross traffic may not.",
        trap: "A rolling stop is not a stop. An empty cross street changes nothing about the requirement.",
        excerptKey: "stop-sign-rule",
        sourceLabel: `${GUIDE} - Chapter 3, Regulatory Signs`,
        sourceUrl: hb(27),
      },
      {
        id: "la_s1_02",
        topic: "signals",
        question:
          "You are stopped at a steady red light in Louisiana and want to turn right. What does the guide allow?",
        choices: [
          "Stop first, then turn if it is safe and no sign prohibits it",
          "Turn without stopping if the way is clear",
          "Turn only when a green arrow appears",
          "Turn only where a sign expressly permits it",
        ],
        correctIndex: 0,
        explanation:
          "Right on red is Louisiana's default, not a special permission. Two conditions ride with it: you must actually stop, and a NO TURN ON RED sign overrides the default.",
        context:
          "Red means stop and stay stopped, with two movements carved out. Right on red is allowed after a full stop unless a sign says otherwise, and a left on red is allowed from a one-way street onto another one-way street on the same terms. Having stopped, you still yield to everyone lawfully in the intersection, pedestrians included.",
        trap: "\"Clear enough to go\" is not the test. If you never stopped, the turn is unlawful even on an empty street at 3 a.m.",
        excerptKey: "signal-steady-red",
        sourceLabel: `${GUIDE} - Chapter 3, Traffic Signals`,
        sourceUrl: hb(34),
      },
      {
        id: "la_s1_03",
        topic: "rightOfWay",
        question:
          "Two drivers reach a four-way stop at exactly the same moment, at right angles. Who goes first?",
        choices: [
          "Whoever signals first",
          "The driver going straight, ahead of any turning driver",
          "The driver on the left, who is further from the crossing traffic",
          "The driver on the right",
        ],
        correctIndex: 3,
        explanation:
          "Louisiana's tie-breaker is the driver on the right. It only matters when arrival really is simultaneous, because whoever clearly stopped first goes first.",
        context:
          "R.S. 32:123(C) sets the order in two sentences: the first vehicle to stop proceeds first, and if two or more arrive together the driver on the left yields to the driver on the right. The same right-hand rule covers an uncontrolled intersection with no signs at all.",
        trap: "Going straight does not outrank turning at a four-way stop. Order of arrival decides it, and the right-hand rule only breaks a tie.",
        excerptKey: "stat-four-way-stop",
        sourceLabel: `${RS} 32:123 - Stop signs and yield signs`,
        sourceUrl: stat(88031),
        commonlyMissed: true,
      },
      {
        id: "la_s1_04",
        topic: "rules",
        question: "What following distance does the Louisiana guide teach in normal conditions?",
        choices: [
          "Two seconds",
          "Three seconds",
          "Four seconds",
          "One car length for every 10 mph",
        ],
        correctIndex: 1,
        explanation:
          "The guide calls it the 3-second rule. You pick a fixed object ahead, start counting when the car in front passes it, and you should still be counting when you reach it.",
        context:
          "Three seconds is the baseline. Louisiana then names the situations that need four: slippery roads, being passed, following a motorcycle, following a vehicle whose driver cannot see you, being tailgated, pulling a trailer, low visibility, following emergency vehicles, and approaching a railroad crossing.",
        trap: "Counting car lengths does not scale with speed and the guide does not teach it. Count seconds against a fixed object.",
        excerptKey: "three-second-rule",
        sourceLabel: `${GUIDE} - Chapter 5, Following Distances`,
        sourceUrl: hb(65),
      },
      {
        id: "la_s1_05",
        topic: "speed",
        question:
          "You are on a Louisiana interstate with no speed limit sign in sight. What is the maximum?",
        choices: ["55 mph", "60 mph", "65 mph", "70 mph"],
        correctIndex: 3,
        explanation:
          "Seventy miles per hour is the interstate maximum unless a lower limit is posted. The guide states it twice, in the interstate chapter and in the Class D chapter.",
        context:
          "Louisiana's ladder has three rungs in the statute: 70 mph on an interstate or controlled-access highway, 65 mph on a multi-lane divided highway with partial or no control of access, and 55 mph everywhere else that carries no posted limit. Signed stretches can differ, and part of I-49 is posted at 75.",
        trap: "A missing sign does not raise the limit. Off the interstate the statutory fall-back drops to 55, not 70.",
        excerptKey: "interstate-70-max",
        sourceLabel: `${GUIDE} - Chapter 7, Entering`,
        sourceUrl: hb(100),
      },
      {
        id: "la_s1_06",
        topic: "signs",
        question: "A downward-pointing red and white triangle faces you. What must you do?",
        choices: [
          "Come to a full stop, then proceed",
          "Slow down and let traffic with the right of way cross first",
          "Keep your speed, since the sign is only advisory",
          "Sound your horn before entering",
        ],
        correctIndex: 1,
        explanation:
          "A yield sign means other traffic goes first. You do not stop automatically, but if there is no safe gap then stopping is exactly what yielding requires.",
        context:
          "The downward triangle is Louisiana's only three-sided sign, so its shape alone identifies it. The statute puts the duty plainly: slow to a speed reasonable for the conditions, stop if necessary, and give way to any pedestrian legally crossing and to any vehicle already in the intersection or close enough to be a hazard.",
        trap: "Yield is not stop, but it is also not carry on regardless. No gap means you wait for one.",
        excerptKey: "yield-sign-rule",
        sourceLabel: `${GUIDE} - Chapter 3, Regulatory Signs`,
        sourceUrl: hb(27),
      },
      {
        id: "la_s1_07",
        topic: "sharing",
        question:
          "A school bus ahead of you stops with its red lights flashing. How far back must you stop?",
        choices: [
          "At least 30 feet",
          "At least 50 feet",
          "At least 75 feet",
          "At least 100 feet",
        ],
        correctIndex: 0,
        explanation:
          "Thirty feet is Louisiana's figure, and it applies from either direction. You stay stopped until the bus moves off or the red lights go out.",
        context:
          "The stop is required whether you are following the bus or meeting it. There is one escape: a roadway separated by a ditch, grassy median, concrete barrier or similar obstacle. Lane count alone does not release you, and a two-way left turn lane down the middle does not count as a divider.",
        trap: "Thirty feet is the minimum distance, not the whole rule. Creeping forward before the red lights go out is still a violation.",
        excerptKey: "school-bus-30-feet",
        sourceLabel: `${GUIDE} - Chapter 6, Stopped School Buses`,
        sourceUrl: hb(88),
        commonlyMissed: true,
      },
      {
        id: "la_s1_08",
        topic: "impairment",
        question:
          "You are 18 and driving in Louisiana. At what blood alcohol concentration are you over the limit?",
        choices: ["0.01 percent", "0.015 percent", "0.02 percent", "0.08 percent"],
        correctIndex: 2,
        explanation:
          "Under 21 the limit is 0.02 percent, not the 0.08 percent everyone memorizes. Louisiana calls it underage operating while impaired and it is a separate crime.",
        context:
          "Three thresholds run side by side: 0.02 percent under 21, 0.08 percent at 21 and over, and 0.04 percent in a commercial vehicle. Blowing 0.02 or more under 21 also costs you a 180-day suspension whether or not the criminal charge sticks.",
        trap: "The 0.08 figure is the adult number. A single drink can put a teenager over 0.02.",
        excerptKey: "bac-limits",
        sourceLabel: `${GUIDE} - Chapter 9, Blood Alcohol Concentration`,
        sourceUrl: hb(123),
        commonlyMissed: true,
      },
      {
        id: "la_s1_09",
        topic: "licensing",
        question: "What is the minimum age for a Louisiana Class E learner's permit?",
        choices: ["15", "16", "17", "18"],
        correctIndex: 0,
        explanation:
          "Fifteen is the floor, and only after the driver education course. Fourteen-year-olds may sit in the classroom part if they are in eighth grade and within 90 days of turning 15, but they cannot drive.",
        context:
          "Louisiana runs three stages. A learner's permit at 15, an intermediate licence at 16 after 180 days on the permit and 50 hours of supervised driving, and a full Class E at 17. An applicant who reaches 17 without ever entering the program can go straight to a full licence after the course and the road test.",
        trap: "Being old enough is not the same as being eligible. The course comes first, then the permit.",
        excerptKey: "age-requirement",
        sourceLabel: `${GUIDE} - Chapter 1, Age Requirement`,
        sourceUrl: hb(4),
      },
      {
        id: "la_s1_10",
        topic: "signs",
        question: "A yellow diamond-shaped sign is ahead. What is it telling you?",
        choices: [
          "A law you must obey, such as a speed limit",
          "Work is going on and lanes may be closed",
          "There is a hazard or a change in the road ahead",
          "A service such as fuel or lodging is near",
        ],
        correctIndex: 2,
        explanation:
          "Diamond means warning. It tells you about something ahead - a curve, a crossing, a merge - and the correct response is to slow down and get ready for it.",
        context:
          "The guide splits signs into three families. Warning signs are diamonds, usually yellow. Regulatory signs are rectangles or a special shape and state a law. Guide signs are green, blue or brown and tell you where things are. An orange diamond is the same warning shape, moved into a work zone.",
        trap: "A warning sign is not a suggestion you can ignore, but it is also not the sign that carries the speed limit. That one is a white rectangle.",
        excerptKey: "shape-diamond",
        sourceLabel: `${GUIDE} - Chapter 3, Traffic Signs`,
        sourceUrl: hb(23),
      },
      {
        id: "la_s1_11",
        topic: "signals",
        question: "A traffic light ahead is flashing red. What does Louisiana require?",
        choices: [
          "Slow down and pass through with caution",
          "Stop completely, then proceed when it is safe",
          "Stop and wait for the light to turn green",
          "Treat it as a yield sign and merge",
        ],
        correctIndex: 1,
        explanation:
          "A flashing red is a stop sign in light form. You stop behind the stop bar or crosswalk, look both ways, yield, and then go.",
        context:
          "Louisiana pairs the two flashers deliberately. Flashing red means stop and use the same procedure as a stop sign. Flashing yellow means slow down, look for traffic entering, and proceed with caution, stopping if traffic is already in the intersection.",
        trap: "Waiting for green at a flashing red leaves you sitting there. A flasher is not going to change.",
        excerptKey: "signal-flashing-red",
        sourceLabel: `${GUIDE} - Chapter 3, Traffic Signals`,
        sourceUrl: hb(34),
      },
      {
        id: "la_s1_12",
        topic: "parking",
        question: "How close to a fire hydrant may you park in Louisiana?",
        choices: [
          "No closer than 10 feet",
          "No closer than 15 feet",
          "No closer than 20 feet",
          "No closer than 25 feet",
        ],
        correctIndex: 1,
        explanation:
          "Fifteen feet is the figure, and both the guide's parking list and R.S. 32:143 give it. It is measured from the hydrant, not from the curb line.",
        context:
          "Louisiana's parking distances are worth memorizing as a block: 15 feet from a hydrant, 20 feet from a crosswalk at an intersection, 20 feet from a stop sign, yield sign, signal or flashing beacon at the roadside, 50 feet from the nearest rail of a railroad crossing, and 20 feet from a fire station driveway on your side or 75 feet from it on the far side.",
        trap: "Fifteen and 20 are both on the list, so it is easy to swap them. The hydrant is the 15-foot one.",
        excerptKey: "parking-hydrant-railroad",
        sourceLabel: `${GUIDE} - Chapter 5, Parking (R.S. 32:143)`,
        sourceUrl: hb(70),
      },
      {
        id: "la_s1_13",
        topic: "safety",
        question: "Who has to wear a safety belt in a Louisiana car?",
        choices: [
          "The driver and front seat passengers only",
          "Everyone in the vehicle, front seats and back seats alike",
          "Anyone under 18, wherever they sit",
          "Only occupants of vehicles built after 2000",
        ],
        correctIndex: 1,
        explanation:
          "Louisiana's belt law reaches the whole vehicle. The guide says so in one line: all passengers in both the front and back seats of cars, vans and pickup trucks must be properly buckled.",
        context:
          "The statute puts the duty on the driver for their own belt and on each occupant for theirs, at all times when the vehicle is in forward motion, and it forbids carrying more people than there are belts. Vehicles built before 1 January 1981 are outside it, and a documented medical exemption can be certified by a physician.",
        trap: "Back seat passengers are not exempt in Louisiana, and an unbelted rear passenger becomes a projectile that injures the people in front.",
        excerptKey: "seatbelt-law",
        sourceLabel: `${GUIDE} - Chapter 4, Use of Safety Belts`,
        sourceUrl: hb(39),
      },
      {
        id: "la_s1_14",
        topic: "rules",
        question: "How far before a turn does Louisiana law require you to signal?",
        choices: ["50 feet", "75 feet", "100 feet", "200 feet"],
        correctIndex: 2,
        explanation:
          "One hundred feet, given continuously, and the guide adds that you should be in the proper lane by then too. At higher speeds a longer signal is better practice.",
        context:
          "R.S. 32:104(B) fixes the distance at 100 feet for any turn that takes you off the road you are on. The same section requires a signal before you stop or suddenly slow, and forbids flashing your signals on one side of a parked vehicle or waving another driver past with them.",
        trap: "Signaling as you begin the turn is too late. The 100 feet is before, not during.",
        excerptKey: "signalling-100-feet",
        sourceLabel: `${GUIDE} - Chapter 6, Signaling`,
        sourceUrl: hb(92),
      },
      {
        id: "la_s1_15",
        topic: "signs",
        question: "What does an orange background on a road sign mean in Louisiana?",
        choices: [
          "A recreational or cultural point of interest",
          "An emergency evacuation route",
          "A construction zone ahead",
          "A road closed by a crash or a hurricane",
        ],
        correctIndex: 2,
        explanation:
          "Orange is the work zone color. It marks temporary traffic control, and the guide pairs it with an instruction: slow down and proceed with caution.",
        context:
          "Louisiana's color code is worth learning whole. Red prohibits, orange is construction, amber warns, white is regulatory, green and brown and blue are guide and service signs, fluorescent yellow-green covers pedestrian, bicycle and school warnings, and fluorescent pink is reserved for incidents such as a crash closure or a hurricane route.",
        trap: "Fluorescent pink also appears at temporary scenes, but it means an incident, not planned roadwork.",
        excerptKey: "color-orange",
        sourceLabel: `${GUIDE} - Chapter 3, Traffic Signs`,
        sourceUrl: hb(24),
      },
      {
        id: "la_s1_16",
        topic: "signals",
        question: "A traffic light ahead is flashing yellow. What should you do?",
        choices: [
          "Slow down, look for traffic entering, and proceed with caution",
          "Stop completely before entering the intersection",
          "Speed up to clear the intersection before it changes",
          "Treat it exactly as you would a steady red",
        ],
        correctIndex: 0,
        explanation:
          "A flashing yellow is a caution signal. You slow, scan for anything entering, and go through only when the way is clear, stopping if traffic is already in the intersection.",
        context:
          "The flashers are the pair people mix up. Flashing red is a stop sign. Flashing yellow is not the warning that a red is coming next - that is the steady yellow. A flashing yellow arrow is different again: it permits a left turn after you yield to oncoming traffic, which is still looking at a green.",
        trap: "A flashing yellow is not a countdown to red, and it is not a licence to keep your speed. It is a standing instruction to slow and look.",
        excerptKey: "signal-flashing-yellow",
        sourceLabel: `${GUIDE} - Chapter 3, Traffic Signals`,
        sourceUrl: hb(33),
        commonlyMissed: true,
      },
      {
        id: "la_s1_17",
        topic: "rightOfWay",
        question:
          "A pedestrian is crossing in a marked crosswalk ahead of you. What must you do?",
        choices: [
          "Sound your horn to hurry them along",
          "Pass behind them if there is room",
          "Stop and let them finish crossing",
          "Proceed if you have a green light",
        ],
        correctIndex: 2,
        explanation:
          "Pedestrians in a crosswalk hold the right of way over motor vehicles, and the guide's instruction is simply that you must stop for them.",
        context:
          "Louisiana goes further than the crosswalk. The guide says you must yield to pedestrians at all times, even to someone crossing where they should not be, and you are told not to pass a vehicle that has stopped at a crosswalk, because it may be stopped for someone you cannot yet see.",
        trap: "A green light does not outrank a person in the crosswalk. Your green and their walk signal can overlap on a turn.",
        excerptKey: "crosswalk-right-of-way",
        sourceLabel: `${GUIDE} - Chapter 3, Lane Markings`,
        sourceUrl: hb(36),
      },
      {
        id: "la_s1_18",
        topic: "speed",
        question:
          "You pass a SCHOOL SPEED LIMIT WHEN FLASHING sign and the beacon is dark. What speed applies?",
        choices: [
          "The reduced school speed, all day every day",
          "The road's normal posted speed limit",
          "The reduced school speed on school days only",
          "Fifteen miles per hour, as a default",
        ],
        correctIndex: 1,
        explanation:
          "The words on the sign do the work. The lower limit applies only while the beacon flashes, and at other times you obey the roadway's own posted limit.",
        context:
          "Louisiana requires reduced speed on streets near schools and playgrounds and at locations marked with a school crossing sign when children are present, and the flashing beacon is the usual way the reduced limit is switched on. Children present is a separate trigger from the beacon, so a group of kids at the curb still means slow down.",
        trap: "It is tempting to treat the school limit as permanent. It is not, but children present overrides the dark beacon.",
        excerptKey: "school-speed-when-flashing",
        sourceLabel: `${GUIDE} - Chapter 3, Regulatory Signs`,
        sourceUrl: hb(27),
      },
      {
        id: "la_s1_19",
        topic: "signs",
        question: "What does the white X-shaped railroad crossbuck sign mean?",
        choices: [
          "Trains use this crossing only at posted times",
          "Stop at the crossing every time, without exception",
          "Sound your horn before crossing",
          "Yield the right of way to a train",
        ],
        correctIndex: 3,
        explanation:
          "The crossbuck is a regulatory sign with the same meaning as a yield sign. You slow, look both ways, and stop if a train is anywhere near.",
        context:
          "At a crossbuck with no lights, gates or flagman, the statute tells you to slow to a speed reasonable for the conditions and stop if safety requires it, at the stop line or within 50 feet but not less than 15 feet of the nearest rail. If you then collide with a train, that is treated as evidence you failed to yield.",
        trap: "Crossbuck does not mean stop every time. It means yield, and yielding to a train that is coming means stopping.",
        excerptKey: "crossbuck-yield-to-train",
        sourceLabel: `${GUIDE} - Chapter 3, Regulatory Signs`,
        sourceUrl: hb(29),
      },
      {
        id: "la_s1_20",
        topic: "rules",
        question:
          "You are cruising in the left lane of a four-lane Louisiana highway, not passing anyone. What does the law say?",
        choices: [
          "You should be in the right lane unless turning left, passing, or the right lanes are congested",
          "Either lane is fine as long as you are at the speed limit",
          "The left lane is correct because it is the faster lane",
          "You may stay left as long as you signal every mile",
        ],
        correctIndex: 0,
        explanation:
          "Louisiana states the keep-right rule directly: vehicles travel in the right lane except when preparing to turn left, passing, or when the right lanes are congested.",
        context:
          "The same paragraph adds two clauses people forget. No vehicle in the left lane may be driven slower than vehicles to its right, and any vehicle moving slower than the normal speed of traffic must use the right lane only. On an interstate with three lanes each way the guide describes the right lane for entering and exiting, the middle for travel, and the far left for passing.",
        trap: "Doing the speed limit does not entitle you to the left lane. The lane rule is about position, not speed.",
        excerptKey: "keep-right-law",
        sourceLabel: `${GUIDE} - Chapter 3, Lane Markings`,
        sourceUrl: hb(35),
        commonlyMissed: true,
      },
      {
        id: "la_s1_21",
        topic: "safety",
        question: "When does Louisiana law require your headlights to be on?",
        choices: [
          "Between sunset and sunrise, and whenever you need your wipers",
          "Only between one hour after sunset and one hour before sunrise",
          "Only when you cannot see 200 feet ahead",
          "Only at night on unlit roads",
        ],
        correctIndex: 0,
        explanation:
          "Two triggers, and both are compulsory. Headlights go on between sunset and sunrise, and again whenever moisture or precipitation makes you use the windshield wipers.",
        context:
          "A third trigger sits alongside them: headlights are required in any weather that makes it hard for other people to see your vehicle from 500 feet. Parking lights do not satisfy any of these. Low beam is the setting for rain, fog and heavy traffic, because high beam reflects back off the moisture and blinds you.",
        trap: "Wipers on means lights on. Drivers who wait for darkness get caught by the rain half of the rule.",
        excerptKey: "headlights-sunset-to-sunrise",
        sourceLabel: `${GUIDE} - Chapter 5, Night Driving`,
        sourceUrl: hb(75),
      },
      {
        id: "la_s1_22",
        topic: "signs",
        question: "What does a red background on a road sign always signal?",
        choices: [
          "A hazard you should slow down for",
          "A service or point of interest",
          "Information about the route ahead",
          "Stop, or something you must not do",
        ],
        correctIndex: 3,
        explanation:
          "Red is the prohibition color. The guide reduces it to a phrase: red means stop or do not, any time you see it.",
        context:
          "Red carries stop signs, yield signs, DO NOT ENTER and WRONG WAY. It also fills the circle and slash on regulatory signs that forbid a movement, such as no left turn, no right turn and no U-turn. A red curb marking means a fire zone restriction.",
        trap: "The yield sign is red too, and it does not mean stop. The color tells you the sign restricts you; the shape tells you how.",
        excerptKey: "color-red",
        sourceLabel: `${GUIDE} - Chapter 3, Traffic Signs`,
        sourceUrl: hb(24),
      },
      {
        id: "la_s1_23",
        topic: "parking",
        question: "How close to the curb must your right wheels be when you parallel park?",
        choices: [
          "Within 6 inches",
          "Within 12 inches",
          "Within 18 inches",
          "Within 24 inches",
        ],
        correctIndex: 2,
        explanation:
          "Eighteen inches. The guide states it as a flat requirement in its parking section, and it is the figure the road test examiner measures against.",
        context:
          "The guide's parallel parking instructions also tell you not to end up closer than two feet to the vehicles in front and behind unless the street is marked otherwise, and to park as far from traffic as possible where there is no curb. Once parked, you stop the motor, remove the key, lock the ignition and set the brake.",
        trap: "The guide's own R.S. 32:143 list adds a line about not parking more than two feet from the curb, which reads like a different number. Eighteen inches is the parking rule the book states directly.",
        excerptKey: "parallel-park-18-inches",
        sourceLabel: `${GUIDE} - Chapter 5, Parking`,
        sourceUrl: hb(70),
      },
      {
        id: "la_s1_24",
        topic: "rightOfWay",
        question:
          "An ambulance behind you has its siren and lights on. What does Louisiana require?",
        choices: [
          "Speed up until you find a wide spot to let it by",
          "Pull to the right edge of the road, clear of intersections, and stop",
          "Move to the left lane and keep going",
          "Stop exactly where you are, in your lane",
        ],
        correctIndex: 1,
        explanation:
          "Right edge, clear of the intersection, and stop until it has passed. The statute is specific about clearing intersections, because an emergency vehicle needs the junction empty.",
        context:
          "The duty runs in both directions of travel, not just the lane the ambulance is in, and the guide tells you to keep watching, because a second emergency vehicle often follows the first. Once it has passed you may not follow it closer than 500 feet or park in the block where it has stopped.",
        trap: "Stopping dead in the middle of an intersection is the worst response. Clear the junction first, then pull right and stop.",
        excerptKey: "stat-emergency-approach",
        sourceLabel: `${RS} 32:125 - Approach of an authorized emergency vehicle`,
        sourceUrl: stat(88033),
      },
      {
        id: "la_s1_25",
        topic: "signals",
        question: "A green arrow points left as you reach the intersection. What does it mean?",
        choices: [
          "Turn left only after yielding to oncoming traffic",
          "Left turns are prohibited from this lane",
          "Wait for the circular green before turning",
          "You may turn left, and crossing traffic should be stopped for you",
        ],
        correctIndex: 3,
        explanation:
          "A green arrow is a protected turn. Oncoming and crossing traffic have a red, so the movement in the arrow's direction is yours provided the intersection is clear.",
        context:
          "Protected does not mean unwatched. The guide warns about drivers turning right on red from the cross street into the path of your arrow, and about pedestrians crossing in front or from the side. A steady yellow arrow means the protection is ending; a red arrow means the movement is barred until the green arrow returns.",
        trap: "A flashing yellow arrow looks similar and is the opposite: it permits the turn only after you yield to oncoming traffic.",
        excerptKey: "signal-green-arrow",
        sourceLabel: `${GUIDE} - Chapter 3, Traffic Signals`,
        sourceUrl: hb(33),
      },
      {
        id: "la_s1_26",
        topic: "rules",
        question:
          "The traffic signal at a busy intersection is completely dead. How do you treat the intersection?",
        choices: [
          "As if the main road had the right of way",
          "As an uncontrolled intersection where you keep moving",
          "As an all-way or four-way stop",
          "As a yield for everyone approaching",
        ],
        correctIndex: 2,
        explanation:
          "A dead signal converts the intersection into an all-way stop. Every approach stops, and then the ordinary stop-sign rules of arrival order and the right-hand tie-break take over.",
        context:
          "The guide states this twice, in the traffic control section and again in its right of way list, because it is the situation most likely to produce a collision after a storm. Treat a signal that is dark, stuck or flashing red on every head the same way.",
        trap: "The bigger road does not automatically win. There is no main road once the signal is out.",
        excerptKey: "signal-out-four-way",
        sourceLabel: `${GUIDE} - Chapter 6, Traffic Control`,
        sourceUrl: hb(86),
        commonlyMissed: true,
      },
      {
        id: "la_s1_27",
        topic: "safety",
        question: "It has started to rain. What does the guide say about your following distance?",
        choices: [
          "Stretch it to four seconds",
          "Keep three seconds and slow down instead",
          "Halve your speed and keep the same gap",
          "Two seconds is enough if your tires are new",
        ],
        correctIndex: 0,
        explanation:
          "Wet pavement is the first situation on Louisiana's four-second list. The extra second buys back the traction the water takes away.",
        context:
          "The guide adds a separate warning about the first few minutes of rain, when oil and grease on the pavement have not washed away yet and the surface is at its most slippery. In those conditions it tells you to allow twice the normal following distance.",
        trap: "Three seconds is the fair-weather number. Rain, a motorcycle ahead, a trailer behind you or poor visibility all push it to four.",
        excerptKey: "four-second-rule",
        sourceLabel: `${GUIDE} - Chapter 5, Following Distances`,
        sourceUrl: hb(66),
      },
      {
        id: "la_s1_28",
        topic: "sharing",
        question: "How much room must you leave when passing a bicycle in Louisiana?",
        choices: [
          "At least two feet",
          "At least three feet",
          "At least four feet",
          "A full lane width in every case",
        ],
        correctIndex: 1,
        explanation:
          "Three feet is the statutory minimum, and you have to hold that clearance until you are safely past. Louisiana names the rule the Colin Goodier Protection Act.",
        context:
          "The same section lets you pass a bicycle in a no-passing zone when it is safe to do so, which is the one place Louisiana relaxes the yellow line. The guide adds the surrounding habits: do not squeeze between a bicycle and an oncoming car, give the whole lane when a cyclist is passing parked cars, and never turn right across one you have just overtaken.",
        trap: "Three feet is a floor, not a target. A cyclist swerving around a pothole needs more, and a wind blast from your vehicle can move them.",
        excerptKey: "bicycle-three-feet",
        sourceLabel: `${GUIDE} - Chapter 5, Sharing the Road with Bicycles`,
        sourceUrl: hb(80),
      },
      {
        id: "la_s1_29",
        topic: "licensing",
        question: "Where does Louisiana law require your proof of insurance to be?",
        choices: [
          "Filed with the OMV, so you need not carry it",
          "In the vehicle at all times, as evidence of insurance",
          "At your home address, produced within 30 days if asked",
          "On your person, in paper form only",
        ],
        correctIndex: 1,
        explanation:
          "The card lives in the vehicle. The guide says so in one sentence, and the statute makes operating without it an offense in its own right.",
        context:
          "An acceptable card names the insurance company, the policy number, the effective dates, the vehicle, the insured, and the NAIC number that shows the insurer may do business in Louisiana. An image on a phone counts. Get stopped without proof and the plate can be seized, leaving you three working days to produce it.",
        trap: "Having insurance and being able to prove it are two different offenses. The three-day grace applies to producing proof, not to being uninsured.",
        excerptKey: "proof-of-insurance-card",
        sourceLabel: `${GUIDE} - Chapter 1, Proof of Insurance`,
        sourceUrl: hb(7),
      },
      {
        id: "la_s1_30",
        topic: "speed",
        question:
          "Heavy fog has cut visibility on a road posted at 55 mph. What speed does Louisiana's General Speed Law require?",
        choices: [
          "Whatever is reasonable and prudent for the conditions, below 55",
          "Fifty-five, because that is what the sign says",
          "Half the posted limit, as a rule of thumb",
          "Any speed, as long as your hazard lights are on",
        ],
        correctIndex: 0,
        explanation:
          "The posted number is a ceiling for ideal conditions, never a floor for bad ones. The General Speed Law makes reasonable and prudent the operative test.",
        context:
          "The guide is explicit that you can be cited for traveling too fast for conditions while under the legal limit, and gives the example of 55 mph in a snowstorm. The statute pairs that with the opposite duty: you may not drive so slowly that you impede the normal and reasonable movement of traffic.",
        trap: "Sticking to the posted limit is not a defense. Weather, traffic and light all pull the lawful speed down.",
        excerptKey: "general-speed-law",
        sourceLabel: `${GUIDE} - Chapter 6, Speed`,
        sourceUrl: hb(87),
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Core Rules of the Road",
    difficulty: "easy",
    description:
      "Turning, signaling, lane markings, parking and the right-of-way ladder: the everyday rules the Class D & E Driver's Guide spends most of its pages on.",
    questions: [
      {
        id: "la_s2_01",
        topic: "rules",
        question:
          "You are turning right at an intersection. Which lane should you turn from and into?",
        choices: [
          "Any lane, so long as you signal",
          "From the right-most lane, finishing in the proper lane",
          "From the lane nearest the centerline, swinging wide",
          "From whichever lane is emptiest",
        ],
        correctIndex: 1,
        explanation:
          "Right turns start and finish as close to the right as practicable. The guide adds the instruction people forget: avoid swinging left before making the turn.",
        context:
          "Where lane markings show that more than one lane may turn right at the same time, you may use either of the marked lanes. Otherwise it is the right-most lane in, and the corresponding lane out. Signal and be in position 100 feet before the corner.",
        trap: "Swinging left to set up a tighter right turn invites the driver behind to pass you on the right, which is where you are about to go.",
        excerptKey: "right-turn-rightmost",
        sourceLabel: `${GUIDE} - Chapter 6, Right Turn`,
        sourceUrl: hb(90),
      },
      {
        id: "la_s2_02",
        topic: "rules",
        question:
          "You are turning left from a two-lane street onto a four-lane road. Which lane do you finish in?",
        choices: [
          "The lane nearest the centerline of the road you are entering",
          "Whichever lane is clear when you complete the turn",
          "The far right lane, so faster traffic can pass",
          "Either lane, since both are going your way",
        ],
        correctIndex: 0,
        explanation:
          "You leave the intersection to the right of the centerline of the road you are entering, which on a four-lane road is the inside lane. The guide's version is shorter: always finish your turn in the proper lane.",
        context:
          "The statute describes the whole path. You approach in the portion of the right half of the road nearest the centerline, pass to the right of that centerline as you enter, and turn to the left of the center of the intersection where that is practicable. Changing lanes afterwards is a separate decision made with a mirror check and a signal.",
        trap: "Drifting into the outside lane as you come out of the turn cuts across anyone turning right from the cross street into that same lane.",
        excerptKey: "finish-turn-proper-lane",
        sourceLabel: `${GUIDE} - Chapter 6, Rules for Turning`,
        sourceUrl: hb(90),
        commonlyMissed: true,
      },
      {
        id: "la_s2_03",
        topic: "signals",
        question:
          "You are waiting in the intersection to turn left on a steady green light. Where should your wheels point?",
        choices: [
          "Angled left, ready to complete the turn quickly",
          "Angled slightly right, to protect the turn",
          "Straight ahead",
          "It makes no difference while you are stopped",
        ],
        correctIndex: 2,
        explanation:
          "Wheels straight. If you are hit from behind with the wheels turned, your car is pushed into the oncoming lane instead of straight forward.",
        context:
          "A steady green permits the left turn but does not protect it. You yield to oncoming traffic and to pedestrians, and you may only complete the turn when the intersection is clear. Where two drivers face each other and both signal left, the guide says each should turn to the left of the center of the intersection.",
        trap: "Pre-turning the wheels feels efficient. It converts a rear-end shunt into a head-on collision.",
        excerptKey: "left-turn-wheels-straight",
        sourceLabel: `${GUIDE} - Chapter 6, Left Turn`,
        sourceUrl: hb(90),
      },
      {
        id: "la_s2_04",
        topic: "signs",
        question: "A solid yellow line runs along your side of a two-lane road. What does it mean?",
        choices: [
          "You may pass if the way is clear",
          "The road narrows ahead",
          "Passing is prohibited on your side",
          "The lane is reserved for turning",
        ],
        correctIndex: 2,
        explanation:
          "A solid yellow on your side is a no-passing line. You may still cross it to turn, or if the dashed line happens to be on your side of travel.",
        context:
          "Yellow always separates opposing traffic. A single broken yellow marks the center of a two-lane road and may be crossed to turn or pass when it is safe. Double solid yellow marks the center where there are four or more lanes: no passing, but a turn is allowed across it.",
        trap: "No-passing lines are not decoration. They are drawn where sight distance runs out over a crest or around a bend.",
        excerptKey: "marking-no-passing-line",
        sourceLabel: `${GUIDE} - Chapter 3, Lane Markings`,
        sourceUrl: hb(34),
      },
      {
        id: "la_s2_05",
        topic: "parking",
        question:
          "How far from a crosswalk at an intersection may you park in Louisiana?",
        choices: [
          "10 feet",
          "15 feet",
          "20 feet",
          "30 feet",
        ],
        correctIndex: 2,
        explanation:
          "Twenty feet. The same number covers a stop sign, yield sign, flashing beacon or traffic signal placed at the side of the roadway.",
        context:
          "R.S. 32:143 sets out the full list of places you may not stand or park: on a sidewalk, in front of a driveway, in an intersection, within 15 feet of a hydrant, on a crosswalk, within 20 feet of a crosswalk at an intersection, within 50 feet of the nearest rail, alongside a parked vehicle, on a bridge or in a tunnel, and anywhere signs prohibit it.",
        trap: "Fifteen feet is the hydrant. Twenty is the crosswalk and the signal. Fifty is the railroad.",
        excerptKey: "parking-crosswalk-20",
        sourceLabel: `${GUIDE} - Chapter 5, Parking (R.S. 32:143)`,
        sourceUrl: hb(70),
      },
      {
        id: "la_s2_06",
        topic: "rightOfWay",
        question:
          "You are pulling out of a shopping center driveway onto a busy street. Who has the right of way?",
        choices: [
          "You do, once your front wheels reach the roadway",
          "Traffic already on the street, and any pedestrian on the sidewalk",
          "Whichever vehicle is moving slower",
          "You do, if you signal before you move",
        ],
        correctIndex: 1,
        explanation:
          "Coming off private property you yield to everything. The statute makes you stop before crossing the sidewalk, give way to pedestrians, and then give way to approaching vehicles close enough to be a hazard.",
        context:
          "The guide's right-of-way list groups the same idea several ways: yield when entering a road from a driveway, alley or roadside, when returning to the roadway after parking, and when driving on an unpaved road that meets a paved one. At a T intersection you yield to the through road.",
        trap: "A gap that is big enough for you to fit into is not the same as a gap that is big enough for you to accelerate into without anyone braking.",
        excerptKey: "stat-driveway-yield",
        sourceLabel: `${RS} 32:124 - Vehicle entering highway from private road`,
        sourceUrl: stat(88032),
      },
      {
        id: "la_s2_07",
        topic: "signs",
        question:
          "A white rectangular sign with black lettering is posted beside the road. What kind of sign is it?",
        choices: [
          "A regulatory sign stating a law you must obey",
          "A warning about a hazard ahead",
          "A guide sign showing distances",
          "A temporary work zone sign",
        ],
        correctIndex: 0,
        explanation:
          "White with black lettering is Louisiana's regulatory format. Speed limits, lane use control, one way and do not pass all use it, and each one states a law rather than advice.",
        context:
          "The guide describes regulatory signs as square, rectangular or a special shape, white with black, red or green lettering. Some carry a red circle and slash over a symbol, which prohibits the action shown. The stop octagon and the yield triangle are regulatory too, given their own shapes so they are recognizable from any angle.",
        trap: "A white sign looks mild next to a red or orange one. It still carries a law, and the speed limit is on one of them.",
        excerptKey: "shape-rectangle-regulatory",
        sourceLabel: `${GUIDE} - Chapter 3, Traffic Signs`,
        sourceUrl: hb(23),
      },
      {
        id: "la_s2_08",
        topic: "safety",
        question:
          "You are about to back out of a parking space. What does the guide say is the best way to see behind you?",
        choices: [
          "Rely on the backup camera, which has the widest view",
          "Use the center rearview mirror and both side mirrors",
          "Reverse slowly and listen for the parking sensors",
          "Turn your head and look out the rear window",
        ],
        correctIndex: 3,
        explanation:
          "Turn your head and look. The guide names mirrors as the thing not to depend on, and adds that a walk around the car first is a good habit before you get in.",
        context:
          "The same section covers the mechanics: hand at the top of the wheel, back slowly, be ready to stop, and turn the wheel in the direction you want the rear of the car to go. Backing is also prohibited on the shoulder or roadway of any controlled-access highway, and anywhere else unless it can be done without interfering with traffic.",
        trap: "Cameras and sensors have blind spots of their own, and a small child is exactly the size they miss.",
        excerptKey: "backing-turn-head",
        sourceLabel: `${GUIDE} - Chapter 4, Starting and Stopping`,
        sourceUrl: hb(46),
      },
      {
        id: "la_s2_09",
        topic: "rules",
        question:
          "A center lane marked with a solid yellow line outside and a broken yellow line inside runs down the middle of the road. What is it for?",
        choices: [
          "Left turns from either direction, and nothing else",
          "Passing slower traffic in either direction",
          "Emergency vehicles only",
          "Through traffic when the outside lanes back up",
        ],
        correctIndex: 0,
        explanation:
          "It is a two-way left turn lane. Drivers from both directions use it to turn left, and the guide says it must never be used for travel or passing.",
        context:
          "Louisiana caps how long you may sit in it: 200 feet. You check ahead, check your mirrors, signal left, check the blind spot, steer in smoothly, and wait for a gap. Because oncoming drivers may be using the same lane for their own turns, moving into it too early is what causes head-on conflicts.",
        trap: "It looks like a free lane when the through lanes are jammed. Using it that way is both illegal and the reason it fills with head-on near misses.",
        excerptKey: "two-way-left-turn-lane",
        sourceLabel: `${GUIDE} - Chapter 3, Lane Markings`,
        sourceUrl: hb(36),
        commonlyMissed: true,
      },
      {
        id: "la_s2_10",
        topic: "signals",
        question:
          "The light turns steady yellow as you approach and you are still well short of the stop bar. What should you do?",
        choices: [
          "Accelerate to clear the intersection",
          "Sound your horn and continue at the same speed",
          "Slow down and stop before the stop bar",
          "Stop only if a vehicle is waiting on the cross street",
        ],
        correctIndex: 2,
        explanation:
          "Steady yellow warns that red is next. If you can stop before the stop bar, that is what the guide tells you to do.",
        context:
          "The one exception is being already inside the intersection when the yellow appears, in which case you continue through safely. The statute puts the outer limit on it: you may not enter the intersection once the red is showing.",
        trap: "Treating yellow as a signal to hurry is how intersection collisions happen, and the cross traffic gets its green a moment later.",
        excerptKey: "signal-steady-yellow",
        sourceLabel: `${GUIDE} - Chapter 3, Traffic Signals`,
        sourceUrl: hb(33),
      },
      {
        id: "la_s2_11",
        topic: "sharing",
        question:
          "A motorcycle is traveling in the lane ahead of you. How much of the lane is the rider entitled to?",
        choices: [
          "The right half, so cars can share the left",
          "The full width of the lane",
          "Only as much as the machine physically occupies",
          "The center third, with cars allowed either side",
        ],
        correctIndex: 1,
        explanation:
          "The whole lane. The guide says motorcycles are allowed the full width of a lane to maneuver, and tells you to pass one exactly as you would pass a car.",
        context:
          "Riders change position within the lane on purpose, moving left to be seen, center to avoid a hazard, or right to make room. Those movements can be sudden. Following distance behind a motorcycle is four seconds, more in the wet, because a rider who goes down leaves an obstacle you have to steer around.",
        trap: "Sharing a lane with a motorcycle feels harmless because there is space. It removes the room the rider needs to avoid a pothole.",
        excerptKey: "motorcycle-full-lane",
        sourceLabel: `${GUIDE} - Chapter 5, Sharing the Road with Motorcycles`,
        sourceUrl: hb(82),
      },
      {
        id: "la_s2_12",
        topic: "signs",
        question: "What does a blue background on a highway sign mean?",
        choices: [
          "A construction zone ahead",
          "A warning about the road surface",
          "A recreational or historic site",
          "Traveler services and information",
        ],
        correctIndex: 3,
        explanation:
          "Blue marks services: rest areas, fuel, food, lodging, hospitals. Light blue also appears on disability parking signs.",
        context:
          "Green covers guide and information signs, including destinations and distances, and appears as the legend color on permissive parking signs. Brown is reserved for points of recreational or cultural interest. Both use white lettering, so the background color is the thing to read first.",
        trap: "Brown and blue both point you somewhere. Brown is a park or a monument, blue is a service you need on the trip.",
        excerptKey: "color-blue",
        sourceLabel: `${GUIDE} - Chapter 3, Traffic Signs`,
        sourceUrl: hb(24),
      },
      {
        id: "la_s2_13",
        topic: "speed",
        question:
          "A Louisiana highway is posted with a minimum speed limit. What does that mean for you?",
        choices: [
          "You are legally required to travel at least that fast",
          "It is advisory in good weather only",
          "It applies only to trucks and buses",
          "It sets the speed for the right lane alone",
        ],
        correctIndex: 0,
        explanation:
          "A posted minimum is enforceable. The guide says you are legally required to travel at least that fast so as not to be a hazard to other drivers.",
        context:
          "The General Speed Law adds the unposted version of the same duty: no one may drive so slowly as to impede the normal and reasonable movement of traffic, except where a special hazard makes the slow speed necessary. Minimum speeds are posted on Louisiana's interstates.",
        trap: "Weather is the escape hatch, not preference. If conditions demand it you may go under the minimum, but not because you feel safer at 40.",
        excerptKey: "minimum-speed-required",
        sourceLabel: `${GUIDE} - Chapter 3, Regulatory Signs`,
        sourceUrl: hb(27),
      },
      {
        id: "la_s2_14",
        topic: "emergencies",
        question:
          "Your car begins to skid on a wet road and the rear end slides to the right. What do you do?",
        choices: [
          "Brake hard and hold the wheel straight",
          "Steer the front wheels to the right",
          "Accelerate gently to pull the car straight",
          "Steer the front wheels to the left",
        ],
        correctIndex: 1,
        explanation:
          "Steer into the skid. If the rear is sliding right, the front wheels go right, and you ease off the gas rather than braking.",
        context:
          "The guide's full sequence is foot off the gas, no brakes, look and steer where you want the front of the car to go, and be ready to counter-steer as the car comes back. Over-correcting starts a second skid the other way, so the steering input is small and repeated rather than large.",
        trap: "Braking in a skid locks the wheels and takes away the steering that would have saved you.",
        excerptKey: "skid-steer-direction",
        sourceLabel: `${GUIDE} - Chapter 8, Other Vehicle Emergencies`,
        sourceUrl: hb(115),
      },
      {
        id: "la_s2_15",
        topic: "rules",
        question:
          "You are about to pass a slower car on a two-lane road. How soon must you be back in your own lane?",
        choices: [
          "Before you reach the next intersection",
          "As soon as the passed car is visible in your mirror",
          "Before coming within 100 feet of any oncoming vehicle",
          "Before the next solid yellow line begins",
        ],
        correctIndex: 2,
        explanation:
          "One hundred feet. The pass has to be complete, and you back on your own side, before you are that close to anything coming the other way.",
        context:
          "Louisiana also bars passing on the left within 100 feet of an intersection or railroad crossing, within 100 feet of a bridge or tunnel where the view is obstructed, approaching a crest or a curve where you cannot see far enough, and on the shoulder. Passing on the right is allowed only where there are two or more lanes going your way.",
        trap: "Getting back in your lane as the oncoming car arrives is not the standard. The 100 feet is the margin the law requires you to leave.",
        excerptKey: "passing-100-feet",
        sourceLabel: `${GUIDE} - Chapter 5, Passing on the Left`,
        sourceUrl: hb(71),
      },
      {
        id: "la_s2_16",
        topic: "licensing",
        question:
          "You have just moved to Louisiana from another state with a valid licence. How long do you have to get a Louisiana one?",
        choices: [
          "30 days from establishing residency",
          "60 days from establishing residency",
          "90 days from establishing residency",
          "Until the out-of-state licence expires",
        ],
        correctIndex: 0,
        explanation:
          "Thirty days once you are a resident. The guide states it twice, in the licensing chapter and again under out-of-state transfers.",
        context:
          "The 90-day figure people remember is a different rule: it is how long a non-resident may drive here on a licence from their home state. Once you become a resident the shorter clock applies, you surrender the out-of-state licence, and you show proof of insurance on any vehicle you have registered in Louisiana.",
        trap: "Ninety days and 30 days sit two lines apart in the guide. Ninety is for visitors, 30 is for residents.",
        excerptKey: "new-resident-30-days",
        sourceLabel: `${GUIDE} - Chapter 1, Who Must Have a Driver's License?`,
        sourceUrl: hb(1),
        commonlyMissed: true,
      },
      {
        id: "la_s2_17",
        topic: "parking",
        question:
          "You are parking facing downhill at a curb. Which way do you turn the front wheels?",
        choices: [
          "Away from the curb",
          "Straight ahead, and set the parking brake",
          "Toward the curb",
          "It does not matter if the brake is set",
        ],
        correctIndex: 2,
        explanation:
          "Downhill, wheels toward the curb, and shift into reverse or park. If the brakes let go the curb stops the car instead of the traffic lane.",
        context:
          "Uphill at a curb, the wheels go away from the curb and you shift into low gear or park, so the car rolls back against the curb. Where there is no curb at all the wheels go toward the edge of the road either way. In every case you set the parking brake first.",
        trap: "The two hill positions are mirror images and easy to swap. Downhill is toward, uphill is away.",
        excerptKey: "parking-on-hills",
        sourceLabel: `${GUIDE} - Chapter 5, Parking on Hills`,
        sourceUrl: hb(68),
      },
      {
        id: "la_s2_18",
        topic: "signals",
        question:
          "You want to turn left on red from a one-way street onto another one-way street. Is that allowed in Louisiana?",
        choices: [
          "No, left on red is never permitted",
          "Yes, after stopping and yielding to all traffic and pedestrians",
          "Only where a sign expressly permits it",
          "Only between 9 p.m. and 6 a.m.",
        ],
        correctIndex: 1,
        explanation:
          "Louisiana permits it, on the same terms as right on red: a complete stop first, then yield to everything lawfully using the intersection.",
        context:
          "The statutory version adds a third movement to the list, a U-turn at a signalized U-turn, on the same conditions. A sign prohibiting the turn overrides all of them, and pedestrians in the adjacent crosswalk always come first.",
        trap: "The one-way onto one-way condition is the whole point. Turning left on red onto a two-way street is not permitted.",
        excerptKey: "signal-left-on-red",
        sourceLabel: `${GUIDE} - Chapter 3, Traffic Signals`,
        sourceUrl: hb(34),
      },
      {
        id: "la_s2_19",
        topic: "safety",
        question:
          "Where does the guide say a child under 13 should ride when a rear seat is available?",
        choices: [
          "In the front seat, where you can watch them",
          "Wherever there is a working shoulder belt",
          "In the front seat, if the airbag is switched off",
          "In the rear seat, properly restrained",
        ],
        correctIndex: 3,
        explanation:
          "Rear seat, properly restrained, whenever one is available. The guide adds that the middle of the back seat is safer than the front.",
        context:
          "Louisiana's restraint stages run rear-facing from birth to at least two, forward-facing with a harness from two, a booster from four, and an adult lap and shoulder belt from nine. The statute keys each step to the manufacturer's height and weight limits as well as the age, and a child who falls into two categories takes the more protective one.",
        trap: "Front airbags have killed children. The on-off switch exists for vehicles with no usable rear seat, not as permission to move a child forward.",
        excerptKey: "child-restraint-stages",
        sourceLabel: `${GUIDE} - Chapter 4, Young Children`,
        sourceUrl: hb(40),
      },
      {
        id: "la_s2_20",
        topic: "rightOfWay",
        question:
          "You are entering a roundabout in Louisiana. Who has the right of way?",
        choices: [
          "Traffic already circulating inside the roundabout",
          "Whoever reaches the give-way line first",
          "The vehicle on the wider approach road",
          "Traffic entering, because circulating drivers can go round again",
        ],
        correctIndex: 0,
        explanation:
          "Entering traffic yields to circulating traffic. Once you are inside, the guide's instruction is equally short: never stop in the roundabout.",
        context:
          "You slow to about 15 to 20 mph on the approach, yield to the left before entering, and yield to pedestrians and bicyclists as well. Signal right as you approach if you are taking the first exit, no signal if you are going straight through, and left on approach then right once you are three quarters of the way round for a left turn.",
        trap: "Stopping inside the circle to let someone in is the classic Louisiana roundabout error. It backs the whole ring up and causes rear-end collisions.",
        excerptKey: "roundabout-yield-right",
        sourceLabel: `${GUIDE} - Chapter 6, Roundabouts and Traffic Circles`,
        sourceUrl: hb(92),
        commonlyMissed: true,
      },
      {
        id: "la_s2_21",
        topic: "sharing",
        question:
          "A tractor-trailer ahead of you is signaling right but has swung wide to the left. What should you do?",
        choices: [
          "Move up on its right, into the gap it has opened",
          "Pass on its left while it is turning",
          "Sound your horn to tell the driver they are in the wrong lane",
          "Stay back and let it complete the turn",
        ],
        correctIndex: 3,
        explanation:
          "That is the squeeze play. A long vehicle swings left to clear the corner, and the space it opens on the right closes again as the trailer comes round.",
        context:
          "The guide's general rule with trucks is space. Do not linger alongside one, do not cut in front of the gap it leaves, and remember that if you cannot see the driver's face in a mirror the driver cannot see you. A loaded tractor-trailer at 55 mph needs a minimum of 290 feet to stop.",
        trap: "The gap on the right looks like an invitation. It is the path the trailer is about to sweep through.",
        excerptKey: "truck-squeeze-play",
        sourceLabel: `${GUIDE} - Chapter 5, Avoid Squeeze Play`,
        sourceUrl: hb(85),
      },
      {
        id: "la_s2_22",
        topic: "signs",
        question:
          "Two solid white lines separate the lanes on an interstate. What are you allowed to do?",
        choices: [
          "Cross them with care if the lane beside you is empty",
          "Cross them only to exit",
          "Nothing - crossing a double solid white line is prohibited",
          "Cross them at any time, since white lines are advisory",
        ],
        correctIndex: 2,
        explanation:
          "Double solid white means do not cross, and the guide notes it is most often seen on interstates where a lane split makes a lane change dangerous.",
        context:
          "White separates traffic going the same way. A single dashed white line may be crossed when it is safe. A single solid white line marks a lane change as hazardous, and the wider the line the greater the hazard, so it may be crossed only with great care. Double solid removes the choice.",
        trap: "White lines feel less serious than yellow ones. The double solid white is the one that is simply prohibited.",
        excerptKey: "marking-double-white",
        sourceLabel: `${GUIDE} - Chapter 3, Lane Markings`,
        sourceUrl: hb(35),
      },
      {
        id: "la_s2_23",
        topic: "impairment",
        question: "How long does the body take to clear one normal alcoholic drink?",
        choices: [
          "About 20 minutes",
          "About half an hour",
          "About an hour",
          "About two hours",
        ],
        correctIndex: 2,
        explanation:
          "About an hour per drink. The guide follows the arithmetic through: after four drinks you should wait four hours or more before driving.",
        context:
          "The body processes roughly 0.015 percent of blood alcohol per hour, which is why the guide's own worked example has a driver still over 0.05 at noon after a 0.20 reading at two in the morning. Nothing speeds it up. Coffee, a cold shower and exercise change how awake you feel, not what is in your blood.",
        trap: "Feeling sober is not being sober. The clock is the only thing that lowers a blood alcohol concentration.",
        excerptKey: "bac-one-hour",
        sourceLabel: `${GUIDE} - Chapter 9, Blood Alcohol Concentration`,
        sourceUrl: hb(123),
      },
      {
        id: "la_s2_24",
        topic: "rules",
        question:
          "Your car is stopped and unattended on a Louisiana street. What does the law require you to have done?",
        choices: [
          "Left the engine running so the alarm stays armed",
          "Stopped the motor, removed the key, locked the ignition and set the brake",
          "Turned the wheels toward the curb and left the key in the ignition",
          "Left the hazard lights on",
        ],
        correctIndex: 1,
        explanation:
          "Four steps, and Louisiana lists them together: motor off, key out, ignition locked, brake set.",
        context:
          "The same section of the statute carries the state's Move It, Move It, Move It rule for crashes: if you are not injured and the vehicle still drives, you move it out of the travel lane to the nearest safe shoulder, and doing so is not treated as leaving the scene.",
        trap: "Leaving the engine running to keep the air conditioning on is one of the most common ways a car is stolen, and the guide lists it under Park Smart.",
        excerptKey: "leaving-vehicle-unattended",
        sourceLabel: `${GUIDE} - Chapter 5, Parking`,
        sourceUrl: hb(70),
      },
      {
        id: "la_s2_25",
        topic: "safety",
        question: "How far ahead does the guide tell you to be looking as you drive?",
        choices: [
          "As far as your headlights reach",
          "About five seconds ahead",
          "To the end of the block",
          "Twenty to thirty seconds ahead",
        ],
        correctIndex: 3,
        explanation:
          "Twenty to thirty seconds. The guide calls that your visual lead, and it is what lets you change speed or lane early instead of braking hard.",
        context:
          "You measure it by picking a fixed object as far ahead as you can see and counting one-thousand-one, one-thousand-two until you reach it. If a curve, a hill or a truck blocks that view, you slow down until the view comes back, because you can no longer see far enough to act on what is coming.",
        trap: "Watching the bumper in front feels attentive. It is the habit that produces last-second braking and lane weaving.",
        excerptKey: "visual-lead-20-30",
        sourceLabel: `${GUIDE} - Chapter 5, Looking and Scanning Ahead`,
        sourceUrl: hb(61),
      },
      {
        id: "la_s2_26",
        topic: "emergencies",
        question:
          "You are involved in a crash with injuries. What does Louisiana require of you first?",
        choices: [
          "Photograph the damage before anything is moved",
          "Call your insurance company",
          "Stop immediately if it is clear and safe, and identify yourself",
          "Move both vehicles to a parking lot",
        ],
        correctIndex: 2,
        explanation:
          "Stop, and do not leave without identifying yourself. Then check the people involved, call police, and ask for an ambulance if there is any doubt.",
        context:
          "The statute sets the reporting threshold at injury, death, or property damage over $500. You give your name, address and vehicle registration number, and show your licence on request to anyone injured or to the driver of any damaged vehicle. If you damage an unattended vehicle you notify police and leave a note with your details.",
        trap: "Moving a drivable car out of the travel lane is required, but leaving the scene is a separate and much more serious offense.",
        excerptKey: "crash-duties",
        sourceLabel: `${GUIDE} - Chapter 8, Traffic Crashes`,
        sourceUrl: hb(120),
      },
      {
        id: "la_s2_27",
        topic: "signals",
        question:
          "Your left arm is out the window, bent upward at the elbow with the hand open. What are you signaling?",
        choices: [
          "A left turn",
          "A right turn",
          "That you are slowing or stopping",
          "That the driver behind may pass",
        ],
        correctIndex: 1,
        explanation:
          "Arm bent up means right turn. Arm straight out means left, and arm bent down means slowing or stopping.",
        context:
          "All hand signals are given from the left side of the vehicle. The statute requires signal lamps rather than hand signals whenever the vehicle is built, loaded or driven in a way that hides the arm from the front or the rear, which covers most loaded pickups. A bicyclist may also signal a right turn with the right arm held out.",
        trap: "Bent up and bent down are a small physical difference with opposite meanings. Up is a turn, down is a stop.",
        excerptKey: "hand-signals",
        sourceLabel: `${GUIDE} - Chapter 6, Signaling`,
        sourceUrl: hb(93),
      },
      {
        id: "la_s2_28",
        topic: "sharing",
        question:
          "How much following distance does the guide want behind a large truck in good conditions?",
        choices: [
          "Two seconds",
          "Three seconds",
          "Four to five seconds",
          "Six seconds",
        ],
        correctIndex: 2,
        explanation:
          "Four to five seconds, and longer when conditions are poor. The gap keeps road spray off your windshield and gives you a view past the trailer.",
        context:
          "A truck also blocks your sight of whatever is happening ahead of it, so hanging back widens your field of vision as well as your stopping room. If you cannot see the truck's side mirrors, you are too close for the driver to know you are there at all.",
        trap: "Three seconds is the car number. Trucks need more because their stopping distance is longer and they hide the road ahead.",
        excerptKey: "truck-following-4-5",
        sourceLabel: `${GUIDE} - Chapter 5, Following trucks`,
        sourceUrl: hb(84),
      },
      {
        id: "la_s2_29",
        topic: "parking",
        question: "What does a yellow painted curb indicate in Louisiana?",
        choices: [
          "A loading zone or some other restriction",
          "Short stops only",
          "A fire zone",
          "Accessible parking",
        ],
        correctIndex: 0,
        explanation:
          "Yellow marks a loading zone or another restriction. White is for short stops, red is a fire zone, and blue is accessibility.",
        context:
          "Accessible spaces need a proper plate, hang tag or accessibility card, and the striped area beside some of them is an access aisle rather than a parking space. Blocking that aisle, including with a shopping cart or a motorcycle, is itself a violation and the vehicle can be towed.",
        trap: "Four colors, four meanings. Red is the one that is never about parking duration at all.",
        excerptKey: "painted-curbs",
        sourceLabel: `${GUIDE} - Chapter 5, Parking`,
        sourceUrl: hb(70),
      },
      {
        id: "la_s2_30",
        topic: "licensing",
        question:
          "You have moved house. How long does Louisiana give you to correct the address on your licence?",
        choices: [
          "10 days",
          "20 days",
          "30 days",
          "60 days",
        ],
        correctIndex: 0,
        explanation:
          "Ten days, and the same 10 days applies to the address on your vehicle registration. The guide warns that failing to do it can produce a violation if you are stopped.",
        context:
          "Louisiana keeps a public record of traffic convictions and collisions for five years, and DWI convictions for ten. Licences expire six years from your nearest birthday and can be renewed any time within 180 days before that date.",
        trap: "The 30-day figure belongs to new residents getting a Louisiana licence. Changing an address on an existing one is 10 days.",
        excerptKey: "address-change-10-days",
        sourceLabel: `${GUIDE} - Chapter 1, Change of Address`,
        sourceUrl: hb(10),
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Real Test Difficulty",
    difficulty: "medium",
    description:
      "Thirty-five questions pitched where the OMV's own test sits: exact distances, the statutory numbers the guide leaves out, and the situations where two rules meet.",
    questions: [
      {
        id: "la_s3_01",
        topic: "speed",
        question:
          "A Louisiana road carries no speed limit sign at all and is not an interstate or a divided highway. What is the maximum?",
        choices: [
          "45 mph",
          "50 mph",
          "55 mph",
          "65 mph",
        ],
        correctIndex: 2,
        explanation:
          "Fifty-five is the statutory default. R.S. 32:61 opens with it, and everything above 55 is an exception the section then lists.",
        context:
          "The exceptions are 70 mph on an interstate or controlled-access highway and 65 mph on a multi-lane divided highway with partial or no control of access. The Department of Transportation and Development can post a higher figure inside a declared speed zone, which is how part of I-49 carries 75.",
        trap: "The guide only prints the 70 mph maximum, so it is easy to assume 70 applies everywhere unposted. Away from the interstate the default drops to 55.",
        excerptKey: "stat-max-speed",
        sourceLabel: `${RS} 32:61 - Maximum speed limit`,
        sourceUrl: stat(88480),
        commonlyMissed: true,
      },
      {
        id: "la_s3_02",
        topic: "sharing",
        question:
          "You are meeting a school bus stopped with red lights flashing on a four-lane road with no median or barrier. What must you do?",
        choices: [
          "Stop, because the road is not divided",
          "Slow to 15 mph and pass with care",
          "Continue, because there are two lanes each way",
          "Continue if you are in the outside lane",
        ],
        correctIndex: 0,
        explanation:
          "Lane count does not release you. The guide states it directly: drivers must stop on a four-lane roadway when it is not separated by a barrier.",
        context:
          "What releases you is a physical separation - a ditch, a grassy median, an elevated concrete barrier or a similar obstacle that traffic cannot drive across. The statute adds one more case: on a four or five lane road split by a dedicated two-way left turn lane, oncoming drivers need not stop, and a one-lane-each-way road with such a lane is not a divided highway at all.",
        trap: "Wide roads feel divided. The test is whether something physical stops a child from walking into your lane.",
        excerptKey: "school-bus-four-lane",
        sourceLabel: `${GUIDE} - Chapter 6, Stopped School Buses`,
        sourceUrl: hb(89),
        commonlyMissed: true,
      },
      {
        id: "la_s3_03",
        topic: "rules",
        question:
          "How long may you drive in a shared center left-turn lane in Louisiana before making your turn?",
        choices: [
          "100 feet",
          "150 feet",
          "200 feet",
          "300 feet",
        ],
        correctIndex: 2,
        explanation:
          "Two hundred feet, and the guide gives the reason: the longer you sit there, the more likely you are to meet someone coming the other way in the same lane.",
        context:
          "The lane is for turning left only, from either direction, and may not be used for travel or passing. You approach it with a mirror check, a left signal and a shoulder check, steer in smoothly, and then wait for a gap in oncoming traffic.",
        trap: "It is a two-way lane. Treating it as a private acceleration lane puts you head-on with a driver turning left from the opposite direction.",
        excerptKey: "shared-lane-200-feet",
        sourceLabel: `${GUIDE} - Chapter 6, Shared Center Left Turn Lane`,
        sourceUrl: hb(91),
      },
      {
        id: "la_s3_04",
        topic: "emergencies",
        question:
          "A patrol car is stopped on the shoulder of an interstate with its lights flashing, and you are in the lane beside it. What does the move over law require?",
        choices: [
          "Sound your horn as you pass",
          "Change into a lane not next to it, or slow to a safe speed if you cannot",
          "Stop until an officer waves you past",
          "Maintain your speed and stay in your lane",
        ],
        correctIndex: 1,
        explanation:
          "Move over if you can, slow down if you cannot. The statute frames it as yielding the right of way by making a lane change into a lane that is not adjacent to the parked vehicle.",
        context:
          "The rule covers any vehicle displaying authorized visual signals parked on or near the highway, including alternately flashing green, amber or yellow warning lights, so a tow truck or a utility crew counts. On a two-lane road, or where a lane change is unsafe, you keep a safe speed for the conditions. A violation carries a fine of up to $200.",
        trap: "Slowing down is the fallback, not the first choice. Where a second lane is available and safe, moving over is what the law asks for.",
        excerptKey: "stat-move-over",
        sourceLabel: `${RS} 32:125 - Passing a parked emergency vehicle`,
        sourceUrl: stat(88033),
        commonlyMissed: true,
      },
      {
        id: "la_s3_05",
        topic: "licensing",
        question:
          "How many questions are on the Louisiana Class E knowledge test, and how many must you get right?",
        choices: [
          "20 of 25",
          "25 of 30",
          "32 of 40",
          "40 of 50",
        ],
        correctIndex: 2,
        explanation:
          "Forty questions, 80 percent to pass, which is 32 correct. The OMV's own Class E handouts give the figure; the driver's guide only gives the percentage.",
        context:
          "The questions come from the Class D & E Driver's Guide and are usually delivered on a computer. In most cases your driver education provider gives both the knowledge test and the road skills test; only students at a secondary school that does not test can ask the OMV to do it.",
        trap: "Eighty percent sounds like a soft margin. On 40 questions it means eight wrong answers end the attempt.",
        excerptKey: "omv-knowledge-40",
        sourceLabel: "Louisiana OMV - Class E Learner's Permit Requirements",
        sourceUrl: PERMITS,
      },
      {
        id: "la_s3_06",
        topic: "signals",
        question:
          "You are facing a flashing yellow left-turn arrow. What are you permitted to do?",
        choices: [
          "Turn left without stopping, because oncoming traffic has a red",
          "Wait for a green arrow before turning",
          "Turn left after yielding to oncoming traffic and pedestrians",
          "Turn left only if no sign prohibits it at that hour",
        ],
        correctIndex: 2,
        explanation:
          "A flashing yellow arrow is permission to turn after yielding. The oncoming traffic is looking at a green, so the gap is yours to find.",
        context:
          "The statute spells out both duties: yield to vehicles approaching from the opposite direction, and yield to pedestrians lawfully in the associated crosswalk and to other vehicles already lawfully in the intersection. The same rule covers a U-turn made on the flashing yellow arrow.",
        trap: "A yellow arrow that flashes and a yellow arrow that is steady mean different things. Steady means the protected turn is ending; flashing means it was never protected.",
        excerptKey: "stat-flashing-yellow-arrow",
        sourceLabel: `${RS} 32:232 - Traffic-control signals`,
        sourceUrl: stat(88198),
        commonlyMissed: true,
      },
      {
        id: "la_s3_07",
        topic: "parking",
        question:
          "How close to the nearest rail of a railroad crossing may you park in Louisiana?",
        choices: [
          "15 feet",
          "20 feet",
          "30 feet",
          "50 feet",
        ],
        correctIndex: 3,
        explanation:
          "Fifty feet from the nearest rail. It is the largest of Louisiana's parking distances, and it exists because a train overhangs its rails.",
        context:
          "The same 50-foot figure appears again in the stopping rule: when you must stop for a crossing you do it within 50 feet but not less than 15 feet from the nearest rail. Parking within 50 feet of the rail is prohibited outright.",
        trap: "Fifteen feet is the near edge of the stopping band, not a parking distance. Parking is 50.",
        excerptKey: "stat-parking-railroad-50",
        sourceLabel: `${RS} 32:143 - Stopping, standing or parking prohibited`,
        sourceUrl: stat(88071),
      },
      {
        id: "la_s3_08",
        topic: "safety",
        question:
          "At what point do your low beam headlights stop showing you far enough to stop at your speed?",
        choices: [
          "About 35 mph",
          "About 45 mph",
          "About 55 mph",
          "About 65 mph",
        ],
        correctIndex: 1,
        explanation:
          "Low beams light about 150 to 200 feet, and the guide puts the matching safe speed at about 45 mph. High beams reach 350 to 400 feet, which supports about 65.",
        context:
          "The principle behind both numbers is that at night you must be able to stop within the distance you can see. That is why the guide tells you to reduce speed based on headlight distance, add a second of following distance for darkness, and add two on an unfamiliar road at night.",
        trap: "Sixty-five is the high beam figure. On low beams in traffic or rain, the honest limit is much lower than the posted one.",
        excerptKey: "headlight-beam-distances",
        sourceLabel: `${GUIDE} - Chapter 5, Night Driving`,
        sourceUrl: hb(75),
      },
      {
        id: "la_s3_09",
        topic: "impairment",
        question:
          "You are arrested for DWI in Louisiana and refuse the breath test. What happens to your licence on a first refusal?",
        choices: [
          "Nothing, since refusal cannot be punished",
          "A 90-day suspension",
          "A 180-day suspension",
          "A 365-day suspension",
        ],
        correctIndex: 3,
        explanation:
          "One year. Refusing is its own penalty, and it is longer than the 180 days a first-time failed test at 0.08 would cost.",
        context:
          "Driving in Louisiana is treated as consent to a chemical test, so refusal is a choice with a fixed price. A second refusal within ten years costs two years. Before you can be reinstated you must file an SR-22 and keep it for three years.",
        trap: "Refusing to blow does not make the problem go away. It produces a longer suspension than the test result would have.",
        excerptKey: "refusal-suspension",
        sourceLabel: `${GUIDE} - Chapter 9, Administrative Per Se`,
        sourceUrl: hb(126),
        commonlyMissed: true,
      },
      {
        id: "la_s3_10",
        topic: "signs",
        question:
          "You see a fluorescent yellow-green diamond sign. What is it warning you about?",
        choices: [
          "Pedestrians, bicycles or a school",
          "A crash or road closure ahead",
          "A construction zone",
          "A slow-moving farm vehicle",
        ],
        correctIndex: 0,
        explanation:
          "Fluorescent yellow-green is reserved for pedestrian, bicycle and school warning signs. The color is chosen because it stands out against foliage and grey pavement.",
        context:
          "Louisiana's warning family is mostly amber diamonds. The two color departures are worth knowing: fluorescent yellow-green for people on foot or on bicycles and for school zones, and fluorescent pink for incident management signs after a crash or a hurricane closure.",
        trap: "It is easy to lump the bright colors together. Pink is an incident, yellow-green is people.",
        excerptKey: "color-fluorescent-yellow-green",
        sourceLabel: `${GUIDE} - Chapter 3, Traffic Signs`,
        sourceUrl: hb(24),
      },
      {
        id: "la_s3_11",
        topic: "rightOfWay",
        question:
          "You are turning left at a green light and an oncoming car is close enough to be a hazard. Who yields?",
        choices: [
          "Whoever entered the intersection first",
          "You do, as the driver turning left",
          "The oncoming driver, because you are already in the intersection",
          "Neither - both should stop and wave the other through",
        ],
        correctIndex: 1,
        explanation:
          "The left-turning driver yields. Being in the intersection already does not change it: the statute puts the duty on the driver intending to turn left.",
        context:
          "The same duty runs against bicyclists in the oncoming stream, which the guide points out specifically because a bicycle's speed is hard to judge. It only lifts when the turn is protected by a green arrow, and even then you still yield to pedestrians in the crosswalk.",
        trap: "Nosing into the intersection is how you position for the turn, not how you claim priority.",
        excerptKey: "stat-left-turn-yield",
        sourceLabel: `${RS} 32:122 - Vehicle turning left at intersection`,
        sourceUrl: stat(88030),
      },
      {
        id: "la_s3_12",
        topic: "rules",
        question:
          "You are following an emergency vehicle that is responding to a call. How far back must you stay?",
        choices: [
          "100 feet",
          "200 feet",
          "300 feet",
          "500 feet",
        ],
        correctIndex: 3,
        explanation:
          "Five hundred feet. Louisiana also forbids driving into or parking in the block where that vehicle has stopped for the call.",
        context:
          "The rule exists because a following driver blocks the second and third units, and because bystander vehicles turn the scene into a second collision. It is separate from the duty to pull right and stop when an emergency vehicle is approaching you.",
        trap: "Following a fire truck through the traffic it has cleared is illegal, not clever.",
        excerptKey: "following-emergency-500",
        sourceLabel: `${GUIDE} - Chapter 6, Other Laws You Should Know`,
        sourceUrl: hb(97),
      },
      {
        id: "la_s3_13",
        topic: "emergencies",
        question:
          "A tire blows out at highway speed. What is the first thing to do?",
        choices: [
          "Brake firmly and pull onto the shoulder",
          "Hold the wheel firmly and keep the car in its lane",
          "Steer hard toward the shoulder before you lose control",
          "Switch on the hazard lights and coast to a stop in your lane",
        ],
        correctIndex: 1,
        explanation:
          "Grip the wheel and hold your lane. The car pulls hard toward the failed tire, and the correction has to come from steering, not braking.",
        context:
          "The guide's sequence continues from there: let the car slow itself, do not touch the brakes until you are down to about 30 mph, then brake gently and pull off into a safe area. Losing a wheel outright is handled the same way.",
        trap: "Braking in a blowout is the instinct that puts the car sideways. Speed comes off on its own first.",
        excerptKey: "tire-blowout",
        sourceLabel: `${GUIDE} - Chapter 8, Tire blowout`,
        sourceUrl: hb(117),
      },
      {
        id: "la_s3_14",
        topic: "licensing",
        question:
          "How long must a Louisiana learner's permit be held before you can move up to an intermediate licence?",
        choices: [
          "60 days",
          "90 days",
          "180 days",
          "One year",
        ],
        correctIndex: 2,
        explanation:
          "One hundred and eighty days, and you must also have reached 16. The two conditions run together, so an early birthday does not shorten the 180 days.",
        context:
          "On top of the time you need 50 hours of supervised driving with a licensed parent, guardian or adult over 21, at least 15 of them at night, attested to in writing by a parent or guardian. You must also have stayed accident-free and free of moving, seat belt, curfew, drug and alcohol convictions.",
        trap: "The 180 days is a floor, not a countdown that starts at your sixteenth birthday. It runs from the day the permit was issued.",
        excerptKey: "omv-permit-180-days",
        sourceLabel: "Louisiana OMV - Class E Learner's Permit Requirements",
        sourceUrl: PERMITS,
      },
      {
        id: "la_s3_15",
        topic: "signals",
        question:
          "What must a driver do at a steady circular red before making any permitted turn?",
        choices: [
          "Slow to walking pace and check both ways",
          "Stop at the stop line, or the crosswalk, or before entering the intersection",
          "Flash the headlights to warn cross traffic",
          "Wait for the light to begin changing",
        ],
        correctIndex: 1,
        explanation:
          "The stop comes first, and the statute names the place in order of preference: the marked stop line, then the near-side crosswalk, then the edge of the intersection.",
        context:
          "Having stopped, you may cautiously enter to turn right, to turn left from a one-way street onto a one-way street, or to make a U-turn at a signalized U-turn, unless a sign prohibits the turn. In every case you then yield to pedestrians in the adjacent crosswalk and to traffic lawfully using the intersection.",
        trap: "Creeping past the stop line to see round a parked truck and then turning is still a failure to stop where the law requires.",
        excerptKey: "stat-signal-red-turn",
        sourceLabel: `${RS} 32:232 - Traffic-control signals`,
        sourceUrl: stat(88198),
      },
      {
        id: "la_s3_16",
        topic: "sharing",
        question:
          "An orange and red reflective triangle is fixed to the back of a vehicle ahead. What does it tell you?",
        choices: [
          "The vehicle is carrying a wide load",
          "The vehicle is disabled",
          "The vehicle is traveling less than 25 mph",
          "The vehicle is a school activity bus",
        ],
        correctIndex: 2,
        explanation:
          "It is the slow-moving vehicle emblem and it means under 25 mph. Farm equipment, construction equipment and animal-drawn vehicles all carry it.",
        context:
          "Closing speed is what catches drivers out: at 55 mph you cover the gap to a 15 mph tractor in a few seconds. Farm machinery may be wider than a lane, often has no turn signals, and may swing left before turning right. The operator usually cannot hear you.",
        trap: "The triangle is a speed warning, not a hazard light. Treating it as a slow-moving obstacle you can drift up to is how rear-end collisions on rural roads happen.",
        excerptKey: "slow-moving-emblem",
        sourceLabel: `${GUIDE} - Chapter 7, Slow Moving Vehicles`,
        sourceUrl: hb(105),
      },
      {
        id: "la_s3_17",
        topic: "speed",
        question:
          "What is the maximum speed in Louisiana when your vehicle is pulling or towing another motor vehicle?",
        choices: [
          "35 mph",
          "45 mph",
          "55 mph",
          "The posted limit, whatever it is",
        ],
        correctIndex: 1,
        explanation:
          "Forty-five miles per hour. It is one of three exceptions the guide lists to the 70 mph maximum, alongside school buses loading at 35 and any lower posted limit.",
        context:
          "Towing changes more than the legal speed. The combined weight lengthens your stopping distance, so the guide tells you to add following distance, and any trailer with a gross weight of 3,000 pounds or more must have its own brakes that apply automatically if it breaks away.",
        trap: "The posted limit is a ceiling, not a permission. Towing lowers your own legal maximum below it.",
        excerptKey: "max-speed-70",
        sourceLabel: `${GUIDE} - Chapter 10, Driving`,
        sourceUrl: hb(128),
      },
      {
        id: "la_s3_18",
        topic: "parking",
        question:
          "You want to park on the opposite side of the street from a fire station driveway. How far away must you be?",
        choices: [
          "20 feet",
          "50 feet",
          "75 feet",
          "100 feet",
        ],
        correctIndex: 2,
        explanation:
          "Seventy-five feet on the far side, where the sign is posted. On the same side of the street as the driveway the distance is 20 feet.",
        context:
          "The larger far-side figure exists because a fire truck swings across the road as it comes out. The same asymmetry does not apply to hydrants, crosswalks or signals, all of which use a single distance from the object.",
        trap: "Both numbers describe the same driveway. Twenty is your side, 75 is theirs.",
        excerptKey: "parking-fire-station",
        sourceLabel: `${GUIDE} - Chapter 5, Parking (R.S. 32:143)`,
        sourceUrl: hb(70),
      },
      {
        id: "la_s3_19",
        topic: "safety",
        question:
          "Water is standing on the road and your steering suddenly goes light. What should you do?",
        choices: [
          "Ease off the gas and keep looking where you want to go",
          "Brake firmly to regain contact with the road",
          "Accelerate to push the water out from under the tires",
          "Steer sharply toward the shoulder",
        ],
        correctIndex: 0,
        explanation:
          "You are hydroplaning. Ease off the gas, avoid the brakes, keep steering where you want to go, and let the tires find the road again.",
        context:
          "Partial hydroplaning begins around 35 mph and by about 55 the tires can lose contact altogether, at which point you cannot brake, accelerate or turn. Good tread, correct inflation, lower speed and steering around standing water are what prevent it.",
        trap: "Braking is the reflex and it starts a skid. The recovery is entirely about doing less, not more.",
        excerptKey: "hydroplaning-speeds",
        sourceLabel: `${GUIDE} - Chapter 5, Hydroplaning`,
        sourceUrl: hb(74),
      },
      {
        id: "la_s3_20",
        topic: "signs",
        question:
          "A sideways-pointing triangle sign faces you on a two-lane road. What does it mark?",
        choices: [
          "A yield ahead",
          "A merge point",
          "A pennant marking a no-passing zone",
          "A one-lane bridge",
        ],
        correctIndex: 2,
        explanation:
          "The sideways triangle is used exclusively for no-passing zones. It is posted on the left side of the road, facing the driver who is being told not to pass.",
        context:
          "Louisiana gives the point-down triangle exclusively to yield signs and the sideways triangle exclusively to no-passing zones, so the orientation is the whole message. A DO NOT PASS rectangle and a solid yellow line on your side carry the same instruction, and a PASS WITH CARE sign marks the end of the zone.",
        trap: "Both triangles are the same shape. Point down means yield; point sideways means do not pass.",
        excerptKey: "shape-no-passing",
        sourceLabel: `${GUIDE} - Chapter 3, Traffic Signs`,
        sourceUrl: hb(23),
      },
      {
        id: "la_s3_21",
        topic: "impairment",
        question:
          "An unopened but partly consumed bottle of wine is in the passenger footwell of your car. Is that lawful in Louisiana?",
        choices: [
          "Yes, as long as the driver has not been drinking",
          "Yes, if the passenger is over 21",
          "Only in a vehicle without a trunk",
          "No - an open container in the passenger area is prohibited",
        ],
        correctIndex: 3,
        explanation:
          "A broken seal makes it an open container, and the passenger area is where it may not be. The offense covers possession as well as consumption.",
        context:
          "The statute defines the passenger area as everywhere the driver or a passenger can reach from their seat, including the glove compartment. A locked glove compartment, the area behind the last upright seat, or the trunk are outside it. The guide warns that the driver is exposed to the penalty even when only a passenger is drinking.",
        trap: "Not drinking is not a defense. The offense is having the open container within reach.",
        excerptKey: "stat-open-container",
        sourceLabel: `${RS} 32:300 - Possession of alcoholic beverages in motor vehicles`,
        sourceUrl: stat(410591),
      },
      {
        id: "la_s3_22",
        topic: "rules",
        question:
          "Where does Louisiana forbid you to turn around and go back the way you came?",
        choices: [
          "Anywhere on a road with a centerline",
          "On any curve or crest where you cannot be seen from 500 feet",
          "Within 100 feet of any intersection",
          "On any road with more than two lanes",
        ],
        correctIndex: 1,
        explanation:
          "Five hundred feet of visibility, both directions. If an approaching driver cannot see you from that far away, the turn is prohibited.",
        context:
          "The guide covers the same ground under three-point turns, which it calls the most difficult and dangerous kind of turnabout and reserves for a two-lane road too narrow for a U-turn where you cannot simply go around the block.",
        trap: "The rule is about sight lines, not about the type of road. A wide straight road with a blind crest still fails the test.",
        excerptKey: "stat-uturn-500-feet",
        sourceLabel: `${RS} 32:102 - Turning on curve or crest of grade prohibited`,
        sourceUrl: stat(88018),
      },
      {
        id: "la_s3_23",
        topic: "rightOfWay",
        question:
          "You are on an unpaved side road that meets a paved highway with no signs at the junction. Who yields?",
        choices: [
          "You do, because you are on the unpaved road",
          "Traffic on the paved road, because you arrived first",
          "Whoever is on the right",
          "Neither, until one driver signals",
        ],
        correctIndex: 0,
        explanation:
          "Louisiana puts the unpaved road on the yielding side of its right-of-way list, so you give way to traffic on the paved highway.",
        context:
          "The list runs through the whole set: emergency vehicles, pedestrians lawfully crossing, guide dog and white cane users, vehicles already in an uncontrolled intersection, the through road at a T intersection, the paved road where an unpaved one meets it, traffic already on the road when you leave a driveway or a parking space, and circulating traffic at a roundabout.",
        trap: "The right-hand rule is the tie-break for equal roads. It does not apply when one of them is the through road or the paved one.",
        excerptKey: "row-list",
        sourceLabel: `${GUIDE} - Chapter 6, Right of Way`,
        sourceUrl: hb(93),
      },
      {
        id: "la_s3_24",
        topic: "emergencies",
        question:
          "You are stopped in a line of cars approaching a railroad crossing. When may you drive onto the tracks?",
        choices: [
          "As soon as the crossing gates finish rising",
          "Only when you are certain you can clear the far side completely",
          "When the vehicle ahead of you starts to move",
          "Whenever no train is visible from the crossing",
        ],
        correctIndex: 1,
        explanation:
          "Never enter a crossing you cannot leave. Stopping on the tracks is an offense in its own right in Louisiana, and traffic ahead is what traps people there.",
        context:
          "If you do get pinned or stall on the tracks with a train coming, everyone gets out and walks toward the train, off to the side, so the debris from the impact travels away from you rather than into you. If there is time and no immediate danger you may move the vehicle off the tracks.",
        trap: "The gap ahead looks like enough until the car in front of that one stops. Measure the whole line, not the next vehicle.",
        excerptKey: "railroad-no-stopping-on-tracks",
        sourceLabel: `${GUIDE} - Chapter 6, Railroad Grade Crossing`,
        sourceUrl: hb(94),
        commonlyMissed: true,
      },
      {
        id: "la_s3_25",
        topic: "signals",
        question:
          "Which of these uses of your turn signals does Louisiana specifically make illegal?",
        choices: [
          "Signaling for longer than 100 feet before a turn",
          "Flashing them on one side of a parked vehicle as a do-pass signal",
          "Signaling when you pull away from a curb",
          "Signaling before changing lanes on an interstate",
        ],
        correctIndex: 1,
        explanation:
          "Waving a following driver past with your signal is prohibited, and so is flashing one side only on a parked or disabled vehicle.",
        context:
          "The statute lists what the signals are for: turning, changing lanes and moving off from a parked position. The guide adds that the left signal should always be used when pulling out of a curbside space or moving left to pass, and that a signal before slowing or stopping is required when there is a chance to give one.",
        trap: "Waving someone past feels courteous. It transfers your judgment of an oncoming gap to a driver who cannot see it, which is why the law forbids it.",
        excerptKey: "signal-illegal-uses",
        sourceLabel: `${GUIDE} - Chapter 6, Signaling`,
        sourceUrl: hb(92),
      },
      {
        id: "la_s3_26",
        topic: "safety",
        question:
          "How far can a car at 60 mph travel before it comes to a stop, from the moment a hazard appears?",
        choices: [
          "About 123 feet",
          "About 200 feet",
          "About 268 feet",
          "About 359 feet",
        ],
        correctIndex: 3,
        explanation:
          "About 359 feet, which the guide describes as four to five seconds of reacting and braking. At 30 mph the same sequence takes about 123 feet.",
        context:
          "The guide turns those numbers into a visibility rule: at 60 mph, if you cannot see at least 400 feet ahead you are driving too fast for your visibility, and at 30 mph the threshold is 150 feet. Doubling speed from 20 to 40 quadruples both the impact and the braking distance.",
        trap: "Braking distance is only part of it. Perception and reaction happen at full speed before the brakes do anything.",
        excerptKey: "stopping-60-and-30",
        sourceLabel: `${GUIDE} - Chapter 5, Looking and Scanning Ahead`,
        sourceUrl: hb(62),
      },
      {
        id: "la_s3_27",
        topic: "sharing",
        question:
          "A bicycle is riding well out from the curb, near the middle of the lane. What should you assume?",
        choices: [
          "The rider is avoiding a hazard or preparing to turn",
          "The rider is breaking the law and should be passed closely",
          "The rider wants you to pass on the right",
          "The lane is about to end",
        ],
        correctIndex: 0,
        explanation:
          "Cyclists move out for reasons you often cannot see: gravel, a sewer grate, broken pavement, or an upcoming left turn. The guide tells you to expect it.",
        context:
          "Louisiana requires cyclists to ride as near the right as is safely possible, but that duty bends around hazards, stationary vehicles and turns. Cyclists may ride two abreast, and a bicycle's speed ranges from under 10 mph to over 35, which is why judging a gap by eye goes wrong.",
        trap: "A rider in the middle of the lane is not being obstructive. Passing them close in the same lane leaves nowhere for them to go.",
        excerptKey: "bicycle-two-abreast",
        sourceLabel: `${GUIDE} - Chapter 6, Other Laws You Should Know`,
        sourceUrl: hb(97),
      },
      {
        id: "la_s3_28",
        topic: "licensing",
        question:
          "Which of these will cost you your Louisiana driving privileges outright?",
        choices: [
          "Two parking tickets in a year",
          "Letting your inspection sticker expire",
          "Three reckless driving convictions within 12 months",
          "A single speeding ticket over the limit",
        ],
        correctIndex: 2,
        explanation:
          "Three reckless driving convictions inside 12 months is on Louisiana's revocation list, alongside DWI, refusing the chemical test and failing to stop for a school bus.",
        context:
          "The list also covers failing to stop and render aid at an injury crash, any felony committed while driving, driving on a suspended licence, failing to answer a traffic charge, driving in violation of a licence restriction, failing to pay child support or state income taxes, and withdrawing from school between 15 and 18.",
        trap: "Each conviction for driving under suspension extends the suspension by another year, so the hole gets deeper rather than running out.",
        excerptKey: "revocation-reckless-three",
        sourceLabel: `${GUIDE} - Chapter 1, Revocation of Your License`,
        sourceUrl: hb(12),
      },
      {
        id: "la_s3_29",
        topic: "rules",
        question:
          "You are in a right-turn-only lane but you meant to go straight ahead. What does the guide tell you to do?",
        choices: [
          "Stop and wait for a gap to change lanes",
          "Signal and merge across the arrow markings",
          "Go ahead and make the turn, then drive around the block",
          "Sound your horn and continue straight",
        ],
        correctIndex: 2,
        explanation:
          "Make the turn. Directional markings mean you must move only in the direction shown, and the guide's answer to a wrong lane is to turn and come back around.",
        context:
          "The reasons it gives are all about the drivers behind: they do not expect a sudden lane change, they do not expect a sudden stop, and a car waiting for a gap is blocking the lane. The safe recovery costs a block of driving and nothing else.",
        trap: "Stopping to wait for a gap feels like the cautious choice. In a turn lane it is the one that creates a rear-end collision.",
        excerptKey: "wrong-lane-must-turn",
        sourceLabel: `${GUIDE} - Chapter 3, Lane Markings`,
        sourceUrl: hb(37),
      },
      {
        id: "la_s3_30",
        topic: "speed",
        question:
          "What happens to traffic fines in a Louisiana construction zone?",
        choices: [
          "They are doubled",
          "They are increased by half",
          "They carry an automatic licence suspension",
          "They are the same as anywhere else",
        ],
        correctIndex: 0,
        explanation:
          "Doubled. The guide states it plainly, immediately after telling you to reduce speed and be prepared to stop in work zones.",
        context:
          "Work zones change day to day, with lane shifts and alternating closures, so the guide warns against tuning out the signs on a long project. Since 2025 a hands-free phone violation in a work zone or school zone is also a primary offense carrying a $250 fine.",
        trap: "The doubling applies whether or not workers are present, so an empty-looking work zone at night is still a work zone.",
        excerptKey: "work-zone-fines-double",
        sourceLabel: `${GUIDE} - Chapter 3, Highway Work Zones`,
        sourceUrl: hb(31),
      },
      {
        id: "la_s3_31",
        topic: "parking",
        question:
          "Which of these is prohibited by Louisiana's parking statute even where there is no sign?",
        choices: [
          "Parking facing against the direction of traffic on a one-way street",
          "Parking within 30 feet of a bus stop",
          "Parking on the roadway side of another parked vehicle",
          "Parking with two wheels on the grass verge",
        ],
        correctIndex: 2,
        explanation:
          "Double parking is on the statutory list. Stopping on the roadway side of a vehicle already parked at the curb is prohibited outright.",
        context:
          "The same list bars parking on a bridge or elevated structure, inside a highway tunnel, alongside a street excavation where it would obstruct traffic, and anywhere that would hide a traffic control device from view. The guide's version adds a bicycle lane and a construction area where you would block traffic.",
        trap: "Hazard lights do not convert double parking into a lawful stop.",
        excerptKey: "stat-double-parking",
        sourceLabel: `${RS} 32:143 - Stopping, standing or parking prohibited`,
        sourceUrl: stat(88071),
      },
      {
        id: "la_s3_32",
        topic: "emergencies",
        question:
          "Your car has left the road and gone into deep water. What does the guide tell you to do first?",
        choices: [
          "Wait for the pressure to equalize before opening a door",
          "Break the windshield with a headrest",
          "Call 911 and describe your location",
          "Release your seat belt and get a window open",
        ],
        correctIndex: 3,
        explanation:
          "Belt off, window down or broken, and out. The car floats for only 30 to 60 seconds, and electric windows usually still work in that time.",
        context:
          "The guide gives the sequence the acronym POGO: pop the seat belt, open the windows, get out. Kick out a side window rather than the windshield, which is laminated and will not shatter, and if there are children release the oldest first because they need the least help.",
        trap: "Waiting for the car to fill so the doors open is a last resort, not a plan. The first minute is when the exit is easy.",
        excerptKey: "submerged-30-60-seconds",
        sourceLabel: `${GUIDE} - Chapter 8, Becoming Submerged in Water`,
        sourceUrl: hb(119),
      },
      {
        id: "la_s3_33",
        topic: "signs",
        question:
          "Diagonal stripes on a work zone barricade slope downward to the right. What are they telling you?",
        choices: [
          "Bear to the right",
          "Bear to the left",
          "Stop and wait for a flagger",
          "The lane ahead is closed entirely",
        ],
        correctIndex: 0,
        explanation:
          "The stripes point the way through. Sloping down to the right means bear right; sloping down to the left means bear left.",
        context:
          "Barricades, vertical panels, drums, cones and tubes are all channelizing devices, orange by default and often lit at night. A large flashing or sequential arrow panel does the same job on a larger scale, moving you out of a closed lane.",
        trap: "The stripes are read as an arrow, not as decoration, and the two slopes mean opposite things.",
        excerptKey: "channelizing-stripes",
        sourceLabel: `${GUIDE} - Chapter 3, Channelizing Devices`,
        sourceUrl: hb(32),
      },
      {
        id: "la_s3_34",
        topic: "safety",
        question:
          "Where does the guide say your hands belong on a steering wheel fitted with an airbag?",
        choices: [
          "Ten and two",
          "Twelve and six",
          "Nine and three, or eight and four",
          "One hand at twelve, the other free",
        ],
        correctIndex: 2,
        explanation:
          "Nine and three, or eight and four. The old ten and two position puts your hands where a deploying airbag throws them into your own face.",
        context:
          "An airbag comes out at 150 to 200 mph. The guide's related advice follows from the same physics: sit at least 10 inches back from a wheel with an airbag, tilt the wheel toward your chest rather than your head, and keep children 12 and under in the back seat.",
        trap: "Ten and two is what an older driver was taught and may still be teaching. Airbags changed the answer.",
        excerptKey: "airbag-hand-position",
        sourceLabel: `${GUIDE} - Chapter 4, Air Bags`,
        sourceUrl: hb(41),
      },
      {
        id: "la_s3_35",
        topic: "impairment",
        question:
          "How long does the guide say the effects of smoking one marijuana cigarette take to wear off?",
        choices: [
          "About an hour",
          "Two to three hours",
          "Five to six hours",
          "A full 24 hours",
        ],
        correctIndex: 2,
        explanation:
          "Five to six hours, against about an hour for a single drink. That mismatch is why the guide singles out the combination as especially dangerous.",
        context:
          "Louisiana provides the same penalty for driving under the influence of drugs as for alcohol, and that includes prescription and over-the-counter medicines. Implied consent covers a test for any drug in your blood, not just alcohol.",
        trap: "Waiting an hour is the alcohol arithmetic. It does not transfer.",
        excerptKey: "marijuana-five-six-hours",
        sourceLabel: `${GUIDE} - Chapter 9, Marijuana`,
        sourceUrl: hb(125),
      },
    ],
  },
];
