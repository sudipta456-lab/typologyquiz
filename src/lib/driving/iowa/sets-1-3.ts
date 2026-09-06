import type { DrivingTestSet } from "../types";

// Every fact below was checked against the Iowa Driver's License Manual, form
// MM1170, dated 07/23/2026 on its own back cover and published by the Iowa
// Department of Transportation, plus the sections of Iowa Code chapters 321 and
// 321J that carry rules the manual states incompletely or not at all, plus 761
// Iowa Administrative Code chapter 604 and six iowadot.gov pages for the test
// format and the graduated licence.
//
// Iowa's manual is 68 pages and unusually practical - eight pages of it are a
// catalogue of driver-assistance technology - but it leaves real gaps, and the
// DOT writes its test from the book:
//
// 1. The manual never once describes the knowledge test. Not its length, not
//    its pass mark, not what happens when you fail. All of that is in 761 IAC
//    604.9 and on the DOT's own practice-test page.
// 2. The manual has no graduated licensing section at all. Page 5 tells you to
//    "VISIT IOWADOT.GOV TO LEARN ABOUT: ... The Graduated Driver's License
//    Program". The 14-year-old start, the 12 months on a permit, the 20 hours
//    of supervised driving with 2 after dark, the 12:30 a.m. curfew and the
//    one-unrelated-minor passenger rule are in Iowa Code Section 321.180B.
// 3. The manual gives no signalling distance in Chapter 2 and states 100/300
//    feet in Chapter 4; Section 321.315 is the operative wording.
// 4. The manual's parking list omits the safety-zone and curb-cut entries that
//    Section 321.358 carries, and prints its distances in words rather than as
//    the statute's numbered list.
//
// One genuine conflict is flagged where it arises. Page 42's list of unposted
// speed limits prints 60 mph for primary roads, urban interstates and secondary
// roads by day; Iowa Code Section 321.285(3) sets the statutory fall-back at 55
// and Section 321.285(5)(a) sets 70 on the interstate system with no urban and
// rural split. Every speed question in this bank is built on the four district
// figures the manual and the statute state identically - 20 business, 25
// residence or school, 45 suburban, and the 40 mph interstate minimum - so both
// readings give the same answer. See the research note.
//
// Questions are original. Explanations, context notes and trap notes are written
// from scratch; the deep link is there so the learner reads the Iowa DOT's own
// authoritative wording on the government's site.
const HB = "https://iowadot.gov/media/7308/download?inline=";
/** The manual's printed page number is also its PDF page number throughout. */
const hb = (page: number) => `${HB}#page=${page}`;
const code = (section: string) => `https://www.legis.iowa.gov/docs/code/${section}.pdf`;
const IAC = "https://www.legis.iowa.gov/docs/iac/chapter/761.604.pdf";
const PERMIT =
  "https://iowadot.gov/drivers-licenses-ids/get-or-renew-drivers-licenses-ids-permits/under-18-permit-license-or-id/instruction-permit-under-age-18";
const INTERMEDIATE =
  "https://iowadot.gov/drivers-licenses-ids/get-or-renew-drivers-licenses-ids-permits/under-18-permit-license-or-id/intermediate-license";

export const iowaSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Iowa Basics",
    difficulty: "starter",
    description:
      "The rules you meet on your first drive in Iowa: what the shapes and colors mean, who goes first, and the handful of numbers the DOT expects a 14-year-old to know before it will hand over an instruction permit.",
    questions: [
      {
        id: "ia_s1_01",
        topic: "signs",
        question: "A red eight-sided sign faces you at an Iowa intersection. What does it require?",
        choices: [
          "Slow down and roll through if nothing is coming",
          "Stop only when another vehicle is approaching",
          "Come to a full stop and wait until the crossing traffic and crosswalk are clear",
          "Yield to the wider road, then keep going",
        ],
        correctIndex: 2,
        explanation:
          "The octagon is reserved for the stop sign and for nothing else, so the shape alone tells you what to do. Iowa's manual asks for a full stop and for the crosswalk to be clear as well as the roadway.",
        context:
          "Iowa teaches signs by shape and color first, because a shape is readable in fog, in glare, and in a language you do not read. Eight sides means stop, an equilateral triangle means yield, a diamond warns of a hazard, a pentagon marks a school crossing and orange means road work. If a stop line is painted, you stop at the line, then edge forward for a view if you need one.",
        trap: "A rolling stop is not a stop. An empty cross street changes nothing about what the sign requires.",
        excerptKey: "stop-sign-full-stop",
        sourceLabel: "Iowa Driver's License Manual - 2.2 Regulatory Signs",
        sourceUrl: hb(8),
      },
      {
        id: "ia_s1_02",
        topic: "signals",
        question: "You are stopped at a steady red light in Iowa and want to turn right. What does the manual allow?",
        choices: [
          "Turn after a complete stop unless a sign prohibits it, yielding to all other traffic",
          "Turn without stopping as long as the way is clear",
          "Turn only where a sign expressly permits it",
          "Wait for a green arrow before turning",
        ],
        correctIndex: 0,
        explanation:
          "Right on red is Iowa's default rather than a special permission. Two conditions ride with it: you must actually stop first, and a NO TURN ON RED sign overrides the default wherever one is posted.",
        context:
          "Iowa treats red as stop and stay stopped, with two movements carved out of it. Right on red is allowed after a full stop unless a sign says otherwise, and a left on red is allowed from the left lane of a one-way street onto another one-way street on the same terms. Having stopped, you still yield to everyone lawfully using the intersection, pedestrians included.",
        trap: "\"Clear enough to go\" is not the test. If you never stopped, the turn is unlawful on an empty street at 3 a.m.",
        excerptKey: "turn-on-red",
        sourceLabel: "Iowa Driver's License Manual - 4.8 Proper Turning Techniques",
        sourceUrl: hb(43),
      },
      {
        id: "ia_s1_03",
        topic: "rightOfWay",
        question: "Two drivers reach an Iowa all-way stop at exactly the same moment, at right angles. Who goes first?",
        choices: [
          "Whoever signals first",
          "The driver going straight, ahead of anyone turning",
          "The driver on the right",
          "The driver on the left, who is further from the crossing traffic",
        ],
        correctIndex: 2,
        explanation:
          "Iowa's tie-breaker at an all-way stop is the driver on the right. It only comes into play when the arrival really is simultaneous, because whoever clearly got there first goes first.",
        context:
          "The manual sets the rule out in two halves: at an all-way stop the driver reaching the intersection first gets to go first, after coming to a complete stop, and for vehicles arriving at the same time the vehicle to the right gets to go first. Iowa Code Section 321.319 puts the same rule the other way round, as a duty on the driver on the left to yield.",
        trap: "Going straight does not outrank turning at an all-way stop. Order of arrival decides it and the right-hand rule only breaks a tie.",
        excerptKey: "all-way-stop-order",
        sourceLabel: "Iowa Driver's License Manual - 2.22 Intersections",
        sourceUrl: hb(19),
        commonlyMissed: true,
      },
      {
        id: "ia_s1_04",
        topic: "rules",
        question: "What following distance does the Iowa Driver's License Manual teach?",
        choices: [
          "One car length for every 10 mph",
          "A flat two seconds at every speed",
          "Five seconds in all conditions",
          "A three- to four-second rule",
        ],
        correctIndex: 3,
        explanation:
          "Iowa names it the 3- to 4-second rule. A beginner should hold at least three seconds in normal conditions, and the gap grows from there as speed and conditions get worse.",
        context:
          "The manual gives you a way to count it: watch the vehicle ahead pass a fixed landmark, start counting, and your front bumper should not reach that landmark before you get to three. Two seconds may be enough for an experienced driver in good conditions, at 40 mph the book asks for four to five, and on a slippery road or behind something that blocks your view it asks for six or more.",
        trap: "The DOT's drive-test page mentions a two-second rule, which is the minimum for an experienced driver. The manual's figure, and the one the written test is drawn from, is three to four.",
        excerptKey: "following-3-4-second",
        sourceLabel: "Iowa Driver's License Manual - 4.4 Braking and Stopping",
        sourceUrl: hb(41),
        commonlyMissed: true,
      },
      {
        id: "ia_s1_05",
        topic: "speed",
        question: "An Iowa residential street carries no speed limit sign at all. What is the limit?",
        choices: ["20 mph", "25 mph", "30 mph", "35 mph"],
        correctIndex: 1,
        explanation:
          "Unless a sign says otherwise, a residence district in Iowa is 25 mph, and so is a school district. The absence of a sign is not the absence of a limit.",
        context:
          "Iowa fills in four unposted figures that the manual and the statute state identically: 20 mph in a business district, 25 in a residence or school district, 45 in a suburban district, and 45 for any vehicle towing another. Above those, the numbers depend on the class of road, and page 42 of the manual and Iowa Code Section 321.285 do not agree on them, so a posted sign is what you go by.",
        trap: "A missing sign does not make the speed a guess. Iowa fills the silence with a statutory number and holds you to it.",
        excerptKey: "speed-unposted-list",
        sourceLabel: "Iowa Driver's License Manual - 4.5 Appropriate Speed",
        sourceUrl: hb(42),
      },
      {
        id: "ia_s1_06",
        topic: "signs",
        question: "A downward-pointing red and white triangle faces you. What must you do?",
        choices: [
          "Come to a full stop, then go",
          "Keep your speed, since the sign is only advisory",
          "Sound your horn before entering",
          "Slow down and give way to traffic in the intersection or on the road you are entering",
        ],
        correctIndex: 3,
        explanation:
          "A yield sign means other traffic goes first. You are not required to stop automatically, but if there is no safe gap then stopping is exactly what yielding takes.",
        context:
          "The equilateral triangle is Iowa's only three-sided sign, so its shape alone identifies it. Yield is the lighter cousin of stop: no automatic halt, but no right to push in either. Iowa Code Section 321.322(2) puts it in terms of a duty - slow to a speed reasonable for the conditions and, if safety requires it, stop at the stop line, before the crosswalk or before the intersection.",
        trap: "Yield is not stop, but it is also not carry on regardless. No gap means you wait for one.",
        excerptKey: "yield-sign-meaning",
        sourceLabel: "Iowa Driver's License Manual - 2.2 Regulatory Signs",
        sourceUrl: hb(8),
      },
      {
        id: "ia_s1_07",
        topic: "sharing",
        question:
          "You are following a school bus on a two-lane Iowa road. It stops and puts out its stop arm. How far back must you stop?",
        choices: [
          "10 feet",
          "No closer than 15 feet from the rear of the bus",
          "20 feet",
          "25 feet",
        ],
        correctIndex: 1,
        explanation:
          "Iowa's figure behind a stopped school bus is 15 feet, and you hold that position until the stop arm is retracted and the bus starts moving again.",
        context:
          "Approaching from the rear, the rule is the same on every road in the state, whatever the lane count. As soon as you see red or amber warning lights flashing you may not pass the bus, and once it stops with the arm out you stop no closer than 15 feet behind it. Iowa Code Section 321.372(3)(b) states the same 15 feet as a duty on the overtaking driver.",
        trap: "Fifteen feet is a minimum distance, not the whole rule. Stopping correctly and then creeping forward before the arm retracts is still the offence.",
        excerptKey: "bus-rear-15-feet",
        sourceLabel: "Iowa Driver's License Manual - 2.24 School Buses",
        sourceUrl: hb(20),
        commonlyMissed: true,
      },
      {
        id: "ia_s1_08",
        topic: "impairment",
        question: "You are 17 and driving in Iowa. At what blood alcohol concentration are you treated as operating while intoxicated?",
        choices: [".02 or more", ".05 or more", ".08 or more", "Any measurable amount at all"],
        correctIndex: 0,
        explanation:
          "Iowa sets an underage threshold of .02, a quarter of the adult figure. Hitting it costs an underage driver at least 60 days of driving privileges.",
        context:
          "The adult offence is a BAC of .08 or higher, or operating with any amount of a controlled substance in your system, and it revokes your privileges for a minimum of 180 days whether or not a criminal court convicts you. Under 21 the number drops to .02, the minimum revocation is 60 days, and it rises to 180 days if you blow .08 or more. An offender under 18 cannot get a temporary restricted licence during the revocation.",
        trap: ".02 is a threshold, not a licence to drink up to it. It is roughly one drink for a small person, and it is measured, not estimated.",
        excerptKey: "under-21-02",
        sourceLabel: "Iowa Driver's License Manual - 3.8 Alcohol and Drugs",
        sourceUrl: hb(37),
        commonlyMissed: true,
      },
      {
        id: "ia_s1_09",
        topic: "signals",
        question: "An Iowa traffic signal shows a flashing red light. How do you treat it?",
        choices: [
          "The same as a stop sign",
          "The same as a yield sign",
          "As a warning to proceed with caution without stopping",
          "As a signal that is out of order, so nobody has right of way",
        ],
        correctIndex: 0,
        explanation:
          "A flashing red is a stop sign in light form. You stop, then go when the way is clear.",
        context:
          "Iowa's signal table pairs each flashing colour with a sign you already know. Flashing red is a stop sign; flashing yellow means proceed with caution, yielding to vehicles and pedestrians and going when it is safe. Iowa Code Section 321.257(2)(e) states the flashing red rule as stop, then proceed cautiously, yielding to anything already in the intersection or approaching closely.",
        trap: "Flashing red and flashing yellow are not two shades of the same instruction. Only one of them requires you to stop.",
        excerptKey: "signal-flashing-red",
        sourceLabel: "Iowa Driver's License Manual - 2.9 Traffic Signals",
        sourceUrl: hb(11),
      },
      {
        id: "ia_s1_10",
        topic: "signs",
        question: "What does a fluorescent orange sign on an Iowa road tell you?",
        choices: [
          "A recreation area or historical site is ahead",
          "A pedestrian or school crossing is ahead",
          "Road work or temporary traffic control is ahead",
          "A crash is being cleared ahead",
        ],
        correctIndex: 2,
        explanation:
          "Orange is Iowa's road work colour, covering construction, maintenance and temporary traffic control. Watch for changing speed limits and for workers on the road.",
        context:
          "The manual assigns nine colours. Red is stop or yield, green gives direction, blue points to traveler services, yellow is a general warning, fluorescent yellow-green marks pedestrian, bicycle and school warnings, white is regulatory, orange is road work, brown is recreation and culture, and fluorescent pink is reserved for incident management such as a crash being cleared.",
        trap: "Fluorescent pink also appears at temporary hazards, but it means an incident is being managed, not that a work zone has been set up.",
        excerptKey: "colour-orange",
        sourceLabel: "Iowa Driver's License Manual - 2.1 Traffic Signs",
        sourceUrl: hb(6),
      },
      {
        id: "ia_s1_11",
        topic: "safety",
        question: "When does Iowa law require you to have your headlights on?",
        choices: [
          "Only between sunset and sunrise",
          "Only when it is dark enough that you cannot read a road sign",
          "Whenever the vehicle is moving",
          "From sunset to sunrise, and whenever visibility is 500 feet or less",
        ],
        correctIndex: 3,
        explanation:
          "Two triggers, and either one is enough: the clock, from sunset to sunrise, and the conditions, whenever fog, heavy rain or snow cuts visibility to 500 feet or less.",
        context:
          "The manual adds a rule of thumb worth keeping: turn the headlights on whenever you turn the windshield wipers on. It also warns that automatic headlights read ambient light rather than visibility, so in a bright daytime snowstorm they may never come on and you have to switch them on by hand.",
        trap: "Automatic headlights are not a defence. In a daytime whiteout the sensor sees plenty of light while nobody can see you.",
        excerptKey: "headlight-law-500",
        sourceLabel: "Iowa Driver's License Manual - 4.13 Communicating",
        sourceUrl: hb(49),
      },
      {
        id: "ia_s1_12",
        topic: "parking",
        question: "How close to a fire hydrant may you park in Iowa?",
        choices: ["No closer than five feet", "No closer than 10 feet", "No closer than 15 feet", "No closer than 20 feet"],
        correctIndex: 0,
        explanation:
          "Iowa's hydrant distance is five feet, which is shorter than most states use. A designated red hydrant zone is off limits regardless of the measurement.",
        context:
          "Iowa's own parking numbers are worth memorising as a set, because they are not the ones a neighbouring state teaches: five feet from a hydrant, 10 feet on the approach to a stop sign or traffic signal, 20 feet from a fire station entrance, and 50 feet from the nearest rail of a railroad crossing. Iowa Code Section 321.358 carries the full list.",
        trap: "Ten feet is the Iowa figure for a stop sign, not for a hydrant. Swapping the two is the easiest mistake on this rule.",
        excerptKey: "no-park-hydrant-5",
        sourceLabel: "Iowa Driver's License Manual - 2.26 Parking Not Allowed",
        sourceUrl: hb(21),
        commonlyMissed: true,
      },
      {
        id: "ia_s1_13",
        topic: "rightOfWay",
        question: "You are turning left at a green light in Iowa and a car is coming straight toward you. Who has the right of way?",
        choices: [
          "You do, because you arrived at the intersection first",
          "Whoever is already inside the intersection",
          "The oncoming car going straight",
          "Neither, so the first to move takes it",
        ],
        correctIndex: 2,
        explanation:
          "A driver turning left yields to oncoming traffic that is going straight. A circular green permits the turn; it does not protect it.",
        context:
          "Iowa Code Section 321.320 puts the duty in the driver's own hands: before turning left you yield to every vehicle approaching from the opposite direction that is within the intersection or so close as to be an immediate hazard, and only then, having signalled, do you make the turn. A steady green arrow is the exception, since it stops the oncoming traffic for you.",
        trap: "Getting to the line first buys you nothing on a left turn. Only a green arrow, or a genuine gap, does.",
        excerptKey: "left-turn-yield",
        sourceLabel: "Iowa Driver's License Manual - 2.22 Intersections",
        sourceUrl: hb(19),
      },
      {
        id: "ia_s1_14",
        topic: "signs",
        question: "A yellow diamond-shaped sign appears beside an Iowa road. What is it telling you?",
        choices: [
          "A rule you must obey is in force",
          "A service such as fuel or a rest area is ahead",
          "The route number is changing",
          "A special road hazard is ahead, so slow down and be ready to stop",
        ],
        correctIndex: 3,
        explanation:
          "The diamond is Iowa's warning shape. The words or picture inside it tell you what the hazard is and why you should slow down.",
        context:
          "Warning signs are yellow with black lettering or symbols and are almost always diamond-shaped. Iowa uses the same shape in orange for work zones and in fluorescent yellow-green for pedestrian, bicycle and school warnings. The exceptions to the diamond are worth knowing too: the pennant that warns of a no passing zone sits on the left side of the road, and the circle warns of a railroad crossing ahead.",
        trap: "A diamond is a warning, not a regulation. The regulatory shape in Iowa is the white rectangle.",
        excerptKey: "shape-diamond",
        sourceLabel: "Iowa Driver's License Manual - 2.1 Traffic Signs",
        sourceUrl: hb(7),
      },
      {
        id: "ia_s1_15",
        topic: "safety",
        question: "Which passengers must wear a seat belt in an Iowa vehicle?",
        choices: [
          "Everyone in the front seats, and everyone under 18 wherever they sit",
          "The driver only",
          "Everyone in the vehicle, at every age and in every seat",
          "Only passengers under 16",
        ],
        correctIndex: 0,
        explanation:
          "Iowa requires belts in the front seats for everyone, and it extends the requirement to the back seats for anyone under 18.",
        context:
          "Not wearing a belt is a primary offence in Iowa, which means an officer can stop you for that alone rather than needing another reason. The fine runs up to $50 per passenger, and up to $100 per passenger under 18. Child restraints layer on top: a rear-facing seat under one year and under 20 pounds, a child restraint under six, and a restraint or a belt from six up to 18.",
        trap: "An adult in the back seat is the gap in this rule. Everyone under 18 is covered wherever they sit.",
        excerptKey: "seatbelt-back-under-18",
        sourceLabel: "Iowa Driver's License Manual - 3.5 Seat Belts and Child Restraints",
        sourceUrl: hb(34),
      },
      {
        id: "ia_s1_16",
        topic: "signals",
        question: "A flashing yellow arrow appears in your left-turn signal at an Iowa intersection. What does it mean?",
        choices: [
          "Turn left; oncoming traffic has been stopped for you",
          "Stop and wait for a green arrow",
          "Yield to oncoming traffic and pedestrians, then turn left with caution",
          "The signal has failed, so treat the intersection as an all-way stop",
        ],
        correctIndex: 2,
        explanation:
          "A flashing yellow arrow is permission to turn after yielding, not a protected turn. The manual spells out why it matters: oncoming traffic has a green light.",
        context:
          "Iowa's arrow signals form a ladder. A steady green arrow is protected and stops the oncoming traffic. A flashing yellow arrow is unprotected and asks you to find your own gap. A steady yellow arrow warns that the turn phase is ending, so you do not enter the intersection if you can stop safely, and you complete the turn if you are already in it. A steady red arrow stops you.",
        trap: "Any arrow can read as permission to go. The flashing yellow one hands you the decision instead of making it for you.",
        excerptKey: "signal-flashing-yellow-arrow",
        sourceLabel: "Iowa Driver's License Manual - 2.9 Traffic Signals",
        sourceUrl: hb(11),
        commonlyMissed: true,
      },
      {
        id: "ia_s1_17",
        topic: "rules",
        question: "How far ahead of a turn does Iowa law require you to signal on a 35 mph street?",
        choices: ["50 feet", "100 feet", "200 feet", "300 feet"],
        correctIndex: 1,
        explanation:
          "At 45 mph or less the signal has to run continuously for the last 100 feet before the turn. Above 45 mph the requirement becomes 300 feet.",
        context:
          "Iowa Code Section 321.315 sets the two distances and the manual repeats them. The manual adds a practical warning that trips people up: do not signal too early. If there is a driveway or a side street between you and where you mean to turn, wait until you have passed it, or the driver waiting there may pull out expecting you.",
        trap: "Three hundred feet is the figure for roads posted above 45 mph. On a 35 mph street it is 100.",
        excerptKey: "signal-100-300",
        sourceLabel: "Iowa Driver's License Manual - 4.8 Proper Turning Techniques",
        sourceUrl: hb(43),
      },
      {
        id: "ia_s1_18",
        topic: "sharing",
        question: "An ambulance approaches with lights and siren while you are driving on an undivided Iowa street. What should you do?",
        choices: [
          "Stop immediately where you are",
          "Speed up to clear the road ahead of it",
          "Pull over to the right edge of the road, or as near to it as possible, and stop",
          "Move to the left lane so it can pass on the right",
        ],
        correctIndex: 2,
        explanation:
          "Iowa asks you to pull to the right edge of the road and stop, whichever direction the emergency vehicle is coming from. Iowa Code Section 321.324 makes it a duty to drive parallel to the right-hand edge and stay there until the vehicle has passed.",
        context:
          "Two refinements ride with the rule. If you are already inside an intersection, including a roundabout, drive through it before you pull over rather than stopping in the middle of it. And if a median separates you from an emergency vehicle on the other side of the road, you do not have to stop. Once it has passed, stay at least 500 feet behind it.",
        trap: "Stopping on the spot is the instinct and it is wrong. Blocking an intersection is worse for the ambulance than clearing it first.",
        excerptKey: "emergency-pull-right",
        sourceLabel: "Iowa Driver's License Manual - 2.23 Emergency Vehicles",
        sourceUrl: hb(19),
      },
      {
        id: "ia_s1_19",
        topic: "speed",
        question: "What is the unposted speed limit in an Iowa business district?",
        choices: ["15 mph", "20 mph", "25 mph", "30 mph"],
        correctIndex: 1,
        explanation:
          "A business district with no posted limit is 20 mph in Iowa, the lowest of the four district figures the manual lists.",
        context:
          "The four unposted figures the manual and Iowa Code Section 321.285(2) both state are 20 mph in a business district, 25 in a residence or school district, 45 in a suburban district, and 45 for any vehicle towing another. Above those the numbers turn on the class of road and on a posted sign.",
        trap: "Twenty-five is the residential figure. A business district is lower still, because of what is walking across it.",
        excerptKey: "code-speed-unposted",
        sourceLabel: "Iowa Code Section 321.285(2)(a) - Speed restrictions",
        sourceUrl: code("321.285"),
      },
      {
        id: "ia_s1_20",
        topic: "safety",
        question: "What does the Iowa manual say about using cruise control in rain or snow?",
        choices: [
          "Use it, because it holds a steadier speed than a nervous driver can",
          "Use it only on the interstate",
          "Use it, but set it 5 mph below the posted limit",
          "Do not use it during inclement weather",
        ],
        correctIndex: 3,
        explanation:
          "Iowa's instruction is flat: do not use cruise control during inclement weather. Cruise control keeps feeding power when the tires lose grip, which is exactly when you want the engine backing off.",
        context:
          "The manual repeats the point three times - in the inclement weather section, in the wet and slippery roads list, and in the ice and snow list - and extends it to adaptive cruise control in the driver-assistance chapter. In wet conditions it also asks you to turn on the wipers and the low-beam headlights and stretch your following distance to five or six seconds.",
        trap: "Adaptive cruise control does not escape this. The manual names it and advises against any cruise control in bad weather.",
        excerptKey: "inclement-no-cruise",
        sourceLabel: "Iowa Driver's License Manual - 5.13 Inclement Weather Driving",
        sourceUrl: hb(59),
      },
      {
        id: "ia_s1_21",
        topic: "signs",
        question: "What does a reflective orange triangle on the back of a vehicle mean in Iowa?",
        choices: [
          "The vehicle is carrying hazardous materials",
          "The vehicle is being towed",
          "The vehicle travels at 35 mph or less",
          "The vehicle is a farm vehicle exempt from registration",
        ],
        correctIndex: 2,
        explanation:
          "The slow-moving vehicle emblem tells you the vehicle ahead cannot exceed 35 mph. On an Iowa county road that gap closes faster than most drivers expect.",
        context:
          "The manual tells you where you will see it: road maintenance equipment, farm vehicles and horse-drawn wagons. On rural roads the manual asks you to identify these vehicles early, slow down, and take extreme care passing, because some farm equipment is wider than the road, may turn into an unmarked field entrance, and may carry a turn signal you cannot pick out.",
        trap: "The triangle is not a warning that a vehicle is stopped. It is a statement about the fastest it can go.",
        excerptKey: "smv-sign-35",
        sourceLabel: "Iowa Driver's License Manual - 2.5 Slow-Moving Vehicle Sign",
        sourceUrl: hb(11),
      },
      {
        id: "ia_s1_22",
        topic: "rules",
        question: "On an Iowa road with three lanes running in your direction, where should you normally drive?",
        choices: [
          "In the left lane, keeping the right lanes clear for entering traffic",
          "Wherever the traffic is thinnest",
          "In the center lane at all times",
          "In the right or center lane, using the left lane to pass",
        ],
        correctIndex: 3,
        explanation:
          "Iowa reserves the left lane for passing. On a road with three or more lanes you stay right or center, and the manual suggests the center lane where there is a lot of entering traffic.",
        context:
          "The manual pairs this with an absolute rule about the shoulder: unless a traffic control device or an official tells you to, never drive on it and never pass on it, paved or not, because other drivers will not expect you there and may pull off without looking.",
        trap: "\"Thinnest traffic\" is not a lane rule. Sitting in the left lane on a multilane road is the manual's example of what not to do.",
        excerptKey: "lane-use-left-passing",
        sourceLabel: "Iowa Driver's License Manual - 2.18 General Lane Use",
        sourceUrl: hb(16),
      },
      {
        id: "ia_s1_23",
        topic: "impairment",
        question: "What happens in Iowa if you refuse a breath test after being stopped for OWI?",
        choices: [
          "Nothing, because you cannot be compelled to give evidence",
          "You are given a 30-day warning period",
          "A refusal is treated exactly the same as failing the test",
          "Your licence is revoked for one year and you face a fine of at least $1,250",
        ],
        correctIndex: 3,
        explanation:
          "Iowa makes refusal worse than failing. It brings an automatic one-year revocation and a minimum $1,250 fine, and it still does not prevent an OWI conviction.",
        context:
          "Holding an Iowa licence carries implied consent under Iowa Code Section 321J.6, and the manual notes that this applies to non-resident drivers travelling in the state as well. A court may add a mandatory substance use disorder evaluation or an ignition interlock at your own expense on top of the revocation.",
        trap: "Refusing does not make the case go away. It adds a separate penalty on top of whatever the OWI charge does.",
        excerptKey: "test-refusal",
        sourceLabel: "Iowa Driver's License Manual - 3.8 Alcohol and Drugs",
        sourceUrl: hb(37),
      },
      {
        id: "ia_s1_24",
        topic: "parking",
        question: "You are parking beside a curb on an Iowa street. How close to the curb must the vehicle be?",
        choices: [
          "Within 18 inches of the curb or closer",
          "Within 12 inches",
          "Within two feet",
          "Any distance, as long as the vehicle is out of the travel lane",
        ],
        correctIndex: 0,
        explanation:
          "Iowa's figure is 18 inches or closer. The point is to keep the vehicle out of the traffic stream rather than merely out of the way.",
        context:
          "The manual frames parking as the driver's responsibility for what the vehicle does after it is left: park in a designated area where you can, park as far from traffic as possible on a roadway, keep clear of any travel lane, and check traffic before opening the door, getting out on the curb side if that is what it takes.",
        trap: "\"Out of the travel lane\" is not the standard. Iowa gives a measurement, and a parking enforcement officer can use a tape.",
        excerptKey: "park-18-inches",
        sourceLabel: "Iowa Driver's License Manual - 2.25 Parking",
        sourceUrl: hb(21),
      },
      {
        id: "ia_s1_25",
        topic: "rightOfWay",
        question: "You are pulling out of a shopping-centre parking lot onto an Iowa street. What is required?",
        choices: [
          "You yield to vehicles already on the street, and to anyone on the sidewalk you cross",
          "Traffic on the street must slow to let you in",
          "You have right of way once your front wheels reach the street",
          "You may enter without stopping if the street has no stop line",
        ],
        correctIndex: 0,
        explanation:
          "Traffic already on the main road goes first, and the pedestrians on the sidewalk you cross to reach it go first as well. Both are separate rules and both apply here.",
        context:
          "Iowa's manual lists an outright stop when you enter a public road from a private drive, and that includes parking lots, businesses, schools and gas stations. Crossing a sidewalk on the way out, you yield to pedestrians. Driving along a sidewalk is illegal in Iowa except to cross it.",
        trap: "Nosing out until traffic has to react is not yielding. The duty is on you, both to the road and to the sidewalk.",
        excerptKey: "driveway-yield",
        sourceLabel: "Iowa Driver's License Manual - 2.22 Intersections",
        sourceUrl: hb(19),
      },
      {
        id: "ia_s1_26",
        topic: "sharing",
        question: "You want to pass a bicyclist on an Iowa road. What does the manual require?",
        choices: [
          "Give three feet of space and stay in your lane",
          "Sound your horn, then pass close and slowly",
          "Completely change lanes, giving the bicyclist the entire lane",
          "Follow until the bicyclist moves onto the shoulder",
        ],
        correctIndex: 2,
        explanation:
          "Iowa asks for a full lane change. The manual treats a bicyclist as a vehicle entitled to the whole lane while you go around.",
        context:
          "The manual adds when you may come back: not until you can see the bicyclist or bicyclists in your rearview mirror. It also notes that people on bikes have the right to be on the road and are often barred from riding on the sidewalk, and that bike lanes are for turning movements only when you are in a car, crossed with care after looking beside and behind you.",
        trap: "A measured gap inside your own lane is what several other states require. Iowa's rule is a whole lane, changed into and changed back out of.",
        excerptKey: "bicycle-change-lanes",
        sourceLabel: "Iowa Driver's License Manual - 5.11 Sharing the Road with Bicyclists and Pedestrians",
        sourceUrl: hb(58),
        commonlyMissed: true,
      },
      {
        id: "ia_s1_27",
        topic: "emergencies",
        question: "You are in a minor Iowa crash with no injuries and your car still drives. What does Iowa law require?",
        choices: [
          "Leave the vehicles exactly where they stopped until police arrive",
          "Push the vehicles onto the shoulder only if a police officer tells you to",
          "Move only if the crash happened on an interstate",
          "Move your vehicle out of the driving lanes if it is operable and can be moved safely",
        ],
        correctIndex: 3,
        explanation:
          "Iowa's Steer It - Clear It law puts a duty on you to clear the traffic lanes after a crash with no injuries, provided the vehicle works and can be moved safely.",
        context:
          "The manual gives the reason in a number: for every minute a lane of interstate traffic is blocked, the risk of a second crash rises by roughly 2.8 percent. After clearing the lanes you call 911, and you must report a crash involving injury, death, or more than $1,500 of property damage - failing to do so within 72 hours costs you your driving privileges.",
        trap: "Preserving the scene is what television teaches. Iowa's law says the opposite when nobody is hurt and the vehicle drives.",
        excerptKey: "steer-it-clear-it",
        sourceLabel: "Iowa Driver's License Manual - 2.28 Steer It-Clear It",
        sourceUrl: hb(22),
      },
      {
        id: "ia_s1_28",
        topic: "licensing",
        question: "How old must you be to get an Iowa instruction permit?",
        choices: ["14", "15", "15 and a half", "16"],
        correctIndex: 0,
        explanation:
          "Iowa starts at 14, younger than almost every other state. You need to pass the knowledge and vision tests and have a parent or guardian sign written consent.",
        context:
          "The permit is the first of three graduated steps. From there an intermediate licence becomes available at 16, after 12 months on the permit and 20 hours of supervised driving with two of them after dark, and a full licence at 17 after 12 months on the intermediate licence and a further 10 hours. Consent has to be signed again each time a permit or licence is issued.",
        trap: "Fifteen is the common starting age elsewhere and 14 and a half is Iowa's threshold for the school or work permit, not for the instruction permit.",
        excerptKey: "dot-permit-requirements",
        sourceLabel: "Iowa DOT - Instruction Permit for Under Age 18",
        sourceUrl: PERMIT,
      },
      {
        id: "ia_s1_29",
        topic: "safety",
        question: "What are the three kinds of distraction the Iowa manual names?",
        choices: [
          "Visual, manual and cognitive",
          "Visual, audible and mechanical",
          "Passengers, phones and food",
          "Physical, emotional and environmental",
        ],
        correctIndex: 0,
        explanation:
          "Iowa sorts distractions by what they take away from you: your eyes, your hands, or your attention. Most of the things people do behind the wheel take more than one.",
        context:
          "The manual gives an example of each - looking at a GPS is visual, eating or putting on makeup is manual, and listening to music or holding a conversation is cognitive. It then notes that a distracted driving conviction is a primary offence in Iowa, so an officer can stop you for it alone, and that causing a death while distracted can mean more than $1,000 in fines and a vehicular homicide charge.",
        trap: "The categories are about the driver, not about the object. A phone can be all three at once.",
        excerptKey: "distraction-three-kinds",
        sourceLabel: "Iowa Driver's License Manual - 3.7 Eliminating Distractions",
        sourceUrl: hb(36),
      },
      {
        id: "ia_s1_30",
        topic: "signals",
        question: "What does a solid yellow traffic light mean in Iowa?",
        choices: [
          "Speed up to clear the intersection before the red",
          "Stop immediately, whatever is behind you",
          "Do not enter the intersection if you can stop safely",
          "The light is about to turn green",
        ],
        correctIndex: 2,
        explanation:
          "A steady yellow asks a question rather than giving an order: can you stop safely? If yes, stop. If not, continue through with caution.",
        context:
          "Iowa Code Section 321.257(2)(b) frames it as a warning that the green movement is ending, with the same escape clause - if the stop cannot be made in safety, the vehicle may be driven cautiously through the intersection. That escape exists for the driver already too close to stop, not for the driver who sees an opportunity.",
        trap: "Treating yellow as a signal to accelerate is what puts a car in the intersection when the cross traffic gets its green.",
        excerptKey: "signal-solid-yellow",
        sourceLabel: "Iowa Driver's License Manual - 2.9 Traffic Signals",
        sourceUrl: hb(11),
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Core Rules of the Road",
    difficulty: "easy",
    description:
      "The everyday rules an Iowa examiner assumes you already have: markings and lane controls, parking distances, passing, weather, and the graduated licence you are actually applying for.",
    questions: [
      {
        id: "ia_s2_01",
        topic: "signals",
        question: "What do yellow lines painted on an Iowa roadway separate?",
        choices: [
          "Traffic moving in the same direction",
          "The roadway from the shoulder",
          "Parking spaces from travel lanes",
          "Traffic moving in opposite directions",
        ],
        correctIndex: 3,
        explanation:
          "Yellow separates opposing traffic; white separates traffic going the same way. Once you have that pair, most of Iowa's markings decode themselves.",
        context:
          "On a two-way road you will often see a solid yellow line with a dashed line beside it. Passing is not allowed on the side with the solid line, and vehicles on the dashed side may pass when it is safe. A double yellow means no passing in either direction, and a solid yellow paired with a dashed yellow on both edges marks a shared left-turn lane.",
        trap: "The colour tells you about direction of travel, not about permission. It is the solid or dashed pattern that says whether you may cross it.",
        excerptKey: "markings-white-yellow",
        sourceLabel: "Iowa Driver's License Manual - 2.12 Pavement Markings",
        sourceUrl: hb(15),
      },
      {
        id: "ia_s2_02",
        topic: "parking",
        question: "How close to the nearest rail of an Iowa railroad crossing may you park?",
        choices: ["10 feet", "25 feet", "50 feet", "100 feet"],
        correctIndex: 2,
        explanation:
          "Fifty feet from the nearest rail. It is the longest distance on Iowa's parking list, and it exists because a train is wider than its track.",
        context:
          "Iowa Code Section 321.358(8) adds an exception the manual leaves out: a vehicle parked parallel with the rail and not showing a red light is not caught by the rule. The manual's own list is the practical one - crosswalk, driveway, bridge outside city limits, tunnel, double parking, five feet from a hydrant, 10 feet from a stop sign, 20 feet from a fire station entrance, 50 feet from a crossing.",
        trap: "Twenty-five feet is the railroad figure in several neighbouring states. Iowa's is double that.",
        excerptKey: "code-parking-railroad-50",
        sourceLabel: "Iowa Code Section 321.358(8) - Stopping, standing, or parking",
        sourceUrl: code("321.358"),
      },
      {
        id: "ia_s2_03",
        topic: "rules",
        question: "Where does the Iowa manual say passing is illegal?",
        choices: [
          "Only where a solid yellow line is painted in your lane",
          "Within 500 feet of any intersection",
          "Anywhere outside a city",
          "Within 100 feet of an intersection, a railroad crossing, or a signed narrow bridge or tunnel",
        ],
        correctIndex: 3,
        explanation:
          "One hundred feet is Iowa's recurring passing distance, and it applies at intersections, at railroad crossings, and at a narrow bridge, viaduct or tunnel that carries a sign.",
        context:
          "The manual's list runs longer than that. You may not pass approaching the top of a hill, or around a curve where your view along the road is obstructed, or on the right, or when oncoming traffic is close enough to make the manoeuvre dangerous. Passing is permitted only where signs or markings allow it and you have judged there is room.",
        trap: "The markings are a permission, not the whole rule. A dashed line 50 feet from an intersection still does not make the pass legal.",
        excerptKey: "passing-illegal-list",
        sourceLabel: "Iowa Driver's License Manual - 4.10 Passing",
        sourceUrl: hb(46),
      },
      {
        id: "ia_s2_04",
        topic: "licensing",
        question: "You hold an Iowa instruction permit. Who may supervise you while you drive?",
        choices: [
          "Any licensed driver over 18",
          "Only a parent or a driver education instructor",
          "A parent, guardian, custodian, immediate family member aged at least 21, a driver education instructor, or someone aged 25 or over with your parent's written permission",
          "Anyone in the front passenger seat who has held a licence for a year",
        ],
        correctIndex: 2,
        explanation:
          "Iowa names the supervisors rather than setting a single age. All of them must hold a valid driver's licence for the vehicle you are driving and sit in the seat beside you.",
        context:
          "The 25-and-over route is the one people forget: a friend's older sibling or a neighbour can supervise you, but only with written permission from your own parent, guardian or custodian. An immediate family member qualifies at 21 without any paperwork. Iowa Code Section 321.180B(1)(c) is the statutory list.",
        trap: "\"Any licensed adult\" is the rule in some states and not in Iowa. A licensed 23-year-old who is not family and has no written permission does not count.",
        excerptKey: "dot-permit-can-do",
        sourceLabel: "Iowa DOT - Instruction Permit for Under Age 18",
        sourceUrl: PERMIT,
      },
      {
        id: "ia_s2_05",
        topic: "signs",
        question: "A pennant-shaped sign sits on the left-hand side of an Iowa road. What does it warn of?",
        choices: [
          "A no passing zone",
          "A divided highway beginning",
          "A school crossing",
          "A railroad crossing ahead",
        ],
        correctIndex: 0,
        explanation:
          "The pennant is the no passing zone sign, and it is the only Iowa sign that is deliberately placed on the left side of the road, where the driver who might pass will see it.",
        context:
          "Iowa's shape vocabulary is small and worth memorising whole: octagon for stop, equilateral triangle for yield, rectangle for regulatory, guide and warning signs, pennant for no passing, diamond for warning, circle for a railroad crossing ahead, pentagon for a school crossing, and the crossbuck at the crossing itself.",
        trap: "A sign on the left feels like it belongs to the other direction of traffic. This one is aimed at you.",
        excerptKey: "shape-pennant",
        sourceLabel: "Iowa Driver's License Manual - 2.1 Traffic Signs",
        sourceUrl: hb(7),
      },
      {
        id: "ia_s2_06",
        topic: "sharing",
        question:
          "You are meeting a school bus travelling the other way on a two-lane Iowa road, and its amber warning lights start flashing. What must you do?",
        choices: [
          "Slow to no more than 20 mph and be prepared to stop",
          "Keep your speed but move toward the right edge",
          "Stop at once, before the bus stops",
          "Nothing until the stop arm comes out",
        ],
        correctIndex: 0,
        explanation:
          "Amber lights on an oncoming bus are the cue to slow to 20 mph or less. When the bus stops and the stop arm extends, you stop too and stay stopped until it retracts.",
        context:
          "Iowa Code Section 321.372(1) tells you what the amber lights mean from the bus driver's side: they come on 300 to 500 feet ahead of the stop where the limit is 45 mph or more, and at least 150 feet ahead where it is lower. So the amber phase is your warning, and it is deliberately long enough for you to shed speed.",
        trap: "Waiting for the stop arm is too late at 55 mph. The amber phase is the part of the rule that carries a number.",
        excerptKey: "bus-meeting-20-mph",
        sourceLabel: "Iowa Driver's License Manual - 2.24 School Buses",
        sourceUrl: hb(20),
        commonlyMissed: true,
      },
      {
        id: "ia_s2_07",
        topic: "safety",
        question: "The Iowa manual gives a stopping distance table. At 60 mph, what total distance does it show?",
        choices: ["189 feet", "268 feet", "359 feet", "464 feet"],
        correctIndex: 2,
        explanation:
          "At 60 mph the manual adds 132 feet of reaction distance to 227 feet of braking distance for a total of 359 feet, which is longer than a football field.",
        context:
          "The table runs from 20 mph at 69 feet to 70 mph at 464 feet, and the shape of it matters more than any single row: reaction distance grows in a straight line with speed while braking distance grows far faster. The manual puts the same point another way - a vehicle at 60 mph travels three times further before stopping than one at 30 mph.",
        trap: "Braking distance alone is not stopping distance. The reaction half is more than a third of the total at 60 mph.",
        excerptKey: "stopping-distance-table",
        sourceLabel: "Iowa Driver's License Manual - 4.4 Braking and Stopping",
        sourceUrl: hb(40),
      },
      {
        id: "ia_s2_08",
        topic: "rightOfWay",
        question: "You approach an Iowa gravel-road intersection with no stop or yield signs in any direction, and another car arrives from your right at about the same time. Who yields?",
        choices: [
          "The driver on the right",
          "Whoever is on the wider road",
          "Neither, because uncontrolled intersections have no right-of-way rule",
          "The driver on the left - you",
        ],
        correctIndex: 3,
        explanation:
          "At an uncontrolled intersection the driver on the left yields. Since the other car is on your right, that driver is you.",
        context:
          "Iowa Code Section 321.319 states the rule for any intersection where two vehicles arrive at approximately the same time, and the manual repeats it in capital letters in its rural driving section because uncontrolled intersections are common on gravel. The same section adds a warning: never assume the intersection is clear, or that the other vehicle will stop.",
        trap: "The rule sounds like the all-way-stop tie-breaker and it is the same principle stated from the other side. Work out which car is on the right before you answer.",
        excerptKey: "gravel-left-yields",
        sourceLabel: "Iowa Driver's License Manual - 5.6 Rural/Gravel Road Driving",
        sourceUrl: hb(55),
        commonlyMissed: true,
      },
      {
        id: "ia_s2_09",
        topic: "impairment",
        question: "Where may an open container of alcohol legally be carried in an Iowa vehicle?",
        choices: [
          "Anywhere, as long as no one is drinking from it",
          "On the back seat, out of the driver's reach",
          "In the glove compartment if it is closed",
          "In the trunk",
        ],
        correctIndex: 3,
        explanation:
          "The trunk is the answer. Iowa bans transporting an open or unsealed container of alcohol anywhere a driver or passenger can reach it.",
        context:
          "Iowa Code Section 321.284A defines the passenger area as everywhere the driver and passengers sit plus anything readily accessible from those seats, and it names the glove compartment specifically. In a vehicle with no trunk the container may go behind the last upright seat. The fine runs up to $200 for each driver and each passenger in the vehicle.",
        trap: "The glove compartment is written into the statute as part of the passenger area, so closing it changes nothing.",
        excerptKey: "open-container",
        sourceLabel: "Iowa Driver's License Manual - 3.8 Alcohol and Drugs",
        sourceUrl: hb(37),
      },
      {
        id: "ia_s2_10",
        topic: "signs",
        question: "You see a blue rectangular sign on an Iowa highway. What kind of information does it carry?",
        choices: [
          "A regulation you must obey",
          "A recreational or cultural point of interest",
          "Services for travelers, such as fuel, lodging or a hospital",
          "A warning about the road ahead",
        ],
        correctIndex: 2,
        explanation:
          "Blue is the services colour in Iowa, pointing to rest areas, tourist sites, hospitals, lodging, fuel stations and restaurants.",
        context:
          "Blue and brown are the two easily confused colours here. Brown is recreation and culture, directing you to historical sites, parks and recreational areas, while blue is the practical stuff you need on a trip. Green is different again: it is direction, telling you where a place is or how far away it is.",
        trap: "Brown also appears on signs pointing at destinations. The difference is whether the destination is a service or an attraction.",
        excerptKey: "colour-blue",
        sourceLabel: "Iowa Driver's License Manual - 2.1 Traffic Signs",
        sourceUrl: hb(6),
      },
      {
        id: "ia_s2_11",
        topic: "rules",
        question: "What is a shared left-turn lane in Iowa used for?",
        choices: [
          "Passing slower traffic in either direction",
          "Emergency vehicles only",
          "Overtaking on the left where the road narrows",
          "Left turns made by traffic from either direction",
        ],
        correctIndex: 3,
        explanation:
          "Both directions of traffic use the centre lane to make left turns. You may enter it and stop there before turning, but you may not use it to pass.",
        context:
          "You can recognise the lane from the pavement: left-turn arrows for one direction alternate with left-turn arrows for the other, and it is bounded on each side by a solid yellow line paired with a dashed yellow one. Reserved lanes look different - they carry a sign and often a white diamond, and you may not travel in one unless you are driving that type of vehicle.",
        trap: "It is the only lane on the road that both directions share, which makes it look like a free lane. Using it to pass is the mistake the manual singles out.",
        excerptKey: "shared-left-turn",
        sourceLabel: "Iowa Driver's License Manual - 2.16 Shared Left-Turn Lane",
        sourceUrl: hb(16),
      },
      {
        id: "ia_s2_12",
        topic: "emergencies",
        question: "Your vehicle stalls on a railroad crossing in Iowa and a train is approaching. What does the manual tell you to do?",
        choices: [
          "Get everyone out immediately and move away at a 45-degree angle toward the train",
          "Stay in the vehicle and brace for impact",
          "Get out and run directly away from the tracks, at right angles",
          "Keep trying to restart until the train is 100 feet away",
        ],
        correctIndex: 0,
        explanation:
          "Everyone leaves the vehicle at once, and you move away at 45 degrees in the direction the train is coming from. That angle keeps you clear of the debris the impact throws forward.",
        context:
          "The manual also tells you what to do before it gets to that: call the number on the blue and white Emergency Notification System sign posted at every crossing, give the dispatcher the crossing ID number, and if there is no sign call 911. Get out even if you cannot see a train.",
        trap: "Running straight away from the tracks puts you in the path of whatever the train pushes ahead of it. The angle is toward the train, not away.",
        excerptKey: "rr-stalled-on-tracks",
        sourceLabel: "Iowa Driver's License Manual - 2.10 Railroad Crossings",
        sourceUrl: hb(12),
      },
      {
        id: "ia_s2_13",
        topic: "speed",
        question: "What is the minimum speed on the Iowa interstate system?",
        choices: ["30 mph", "40 mph", "45 mph", "There is no minimum"],
        correctIndex: 1,
        explanation:
          "Iowa keeps vehicles off the interstate if they cannot attain and maintain 40 mph. The manual and Iowa Code Section 321.285(5)(e) both state it.",
        context:
          "The manual explains the reasoning in the same paragraph: driving too slowly causes crashes as well as driving too fast, so you should try to travel with the general flow of traffic on any road. A separate rule tells you what to do if a posted minimum on a high-speed road is faster than you are comfortable driving - take another route.",
        trap: "The 40 mph figure is about the vehicle's capability, not just the driver's choice. A machine that cannot reach it is barred from the road entirely.",
        excerptKey: "speed-interstate-min-40",
        sourceLabel: "Iowa Driver's License Manual - 4.5 Appropriate Speed",
        sourceUrl: hb(42),
      },
      {
        id: "ia_s2_14",
        topic: "safety",
        question: "How far behind you must an Iowa driver be able to see in the rearview mirror?",
        choices: ["100 feet", "150 feet", "200 feet", "500 feet"],
        correctIndex: 2,
        explanation:
          "Two hundred feet. If a load blocks that view, Iowa requires an outside mirror instead, and vans must have outside mirrors on both sides.",
        context:
          "The manual's equipment list has several numbers of this kind, and an examiner can fail a drive test on any of them: two headlights, at least one red rear light visible from 500 feet, a white light over the rear plate, working turn signals on any vehicle equipped with them, and windshield wipers, which are required.",
        trap: "Five hundred feet is the visibility figure for the rear lamp, not for what you can see in the mirror.",
        excerptKey: "mirror-200-feet",
        sourceLabel: "Iowa Driver's License Manual - 3.1 Maintaining Your Vehicle",
        sourceUrl: hb(25),
      },
      {
        id: "ia_s2_15",
        topic: "sharing",
        question: "What does Iowa's Move Over or Slow Down law cover?",
        choices: [
          "Any emergency, tow, recovery, maintenance, construction, solid waste or recycling vehicle with flashing lights, and any stopped vehicle showing hazard lights",
          "Police cars and ambulances only",
          "Only vehicles stopped on an interstate",
          "Any vehicle stopped on the shoulder, whether or not its lights are on",
        ],
        correctIndex: 0,
        explanation:
          "Iowa's law reaches much further than emergency vehicles. It covers a whole list of working vehicles, and since it was broadened it covers an ordinary car sitting on the shoulder with its hazard lights on.",
        context:
          "The instruction is to change lanes to one not adjacent to the stopped vehicle. If a lane change is impossible, prohibited by law, or unsafe, you slow down and prepare to stop instead - Iowa Code Section 321.323A requires a speed below the posted limit and reasonable for the conditions. Violating the law can suspend your licence for up to a year.",
        trap: "Hazard lights on a family sedan are not a lesser case. They put that car inside the same law as a fire truck.",
        excerptKey: "move-over-list",
        sourceLabel: "Iowa Driver's License Manual - 2.27 Approaching Stopped Vehicles",
        sourceUrl: hb(22),
        commonlyMissed: true,
      },
      {
        id: "ia_s2_16",
        topic: "signals",
        question: "An overhead lane signal above an Iowa reversible lane shows a steady yellow X. What does it mean?",
        choices: [
          "The lane is open to you",
          "The lane is for turning only",
          "The lane's direction is changing, so move out of it as soon as it is safe",
          "The lane is closed permanently",
        ],
        correctIndex: 2,
        explanation:
          "A steady yellow X is a transition warning. The lane is about to serve traffic from the other direction, so you move out of it at the first safe opportunity.",
        context:
          "The set of four is worth learning together: a green arrow means the lane beneath it is yours, a red X means it is not, a flashing yellow X means the lane is for turning only, and a steady yellow X means the use of the lane is changing. Reversible lanes in Iowa are usually marked by double-dashed yellow lines.",
        trap: "A flashing yellow X and a steady yellow X mean different things. One is a turn lane, the other is a lane you have to leave.",
        excerptKey: "reversible-lanes",
        sourceLabel: "Iowa Driver's License Manual - 2.15 Reversible Lanes",
        sourceUrl: hb(15),
      },
      {
        id: "ia_s2_17",
        topic: "licensing",
        question: "What restriction does an Iowa intermediate licence place on driving at night?",
        choices: [
          "No driving between midnight and 6 a.m. under any circumstances",
          "No driving after sunset in the first six months",
          "No restriction, as long as a passenger is over 21",
          "No unsupervised driving between 12:30 a.m. and 5 a.m., unless a waiver form is carried for school or work",
        ],
        correctIndex: 3,
        explanation:
          "The intermediate curfew runs from 12:30 a.m. to 5 a.m., and it is a supervision requirement rather than an outright ban. A parent can waive it for school or work purposes on a DOT form that has to be carried in the vehicle.",
        context:
          "The intermediate licence is Iowa's middle step, available at 16 after 12 months on a permit, a completed driver education course, 20 hours of supervised driving with two of them after dark, and six clean months. For its first six months it also limits you to one unrelated minor passenger unless a parent waived that restriction when the licence was issued.",
        trap: "Midnight is the intuitive number and it is not Iowa's. The curfew starts at 12:30 a.m.",
        excerptKey: "dot-intermediate-waiver",
        sourceLabel: "Iowa DOT - Intermediate License",
        sourceUrl: INTERMEDIATE,
        commonlyMissed: true,
      },
      {
        id: "ia_s2_18",
        topic: "signs",
        question: "What does a crossbuck sign at an Iowa railroad crossing mean, and what does a number beneath it mean?",
        choices: [
          "The crossing is closed, and the number is the closure order",
          "There is a crossing here, and the number is the speed limit over it",
          "A train is due, and the number is how many minutes away it is",
          "There is a crossing here, and the number is how many sets of tracks you must cross",
        ],
        correctIndex: 3,
        explanation:
          "A crossbuck marks the crossing itself. A number sign under it counts the sets of tracks, which matters because a second track can hide a second train.",
        context:
          "Iowa splits crossings into two kinds. Actively protected crossings have lights or gates, and flashing lights or lowered gates mean a train is coming - you do not cross and you do not drive around a gate. Passively protected crossings have neither, just a crossbuck and a stop or yield sign, and there you slow down, look for a train, and always expect one.",
        trap: "A crossbuck with no lights can read as an inactive crossing. It is the type of crossing where you have to do the looking yourself.",
        excerptKey: "shape-crossbuck",
        sourceLabel: "Iowa Driver's License Manual - 2.1 Traffic Signs",
        sourceUrl: hb(7),
      },
      {
        id: "ia_s2_19",
        topic: "rules",
        question: "How does the Iowa manual say you should make a turn where no signs or markings control it?",
        choices: [
          "Turn from the lane closest to the direction you want to go, into the lane closest to the one you came from",
          "Turn from any lane, then move to the correct lane afterwards",
          "Always turn from and into the outside lane",
          "Always turn into the far lane so following traffic can also turn",
        ],
        correctIndex: 0,
        explanation:
          "Nearest lane to nearest lane. You go from one to the other as directly as you can, without crossing lane lines or interfering with other traffic.",
        context:
          "The manual adds that once the turn is complete you can change lanes if you need to, which is the part people miss. It also asks you to plan the turn ahead, decide where you want to end up, avoid cutting the corner and avoid swinging wide - both increase your chances of a crash.",
        trap: "Sorting the lane out afterwards is what causes the collision. The lane choice belongs before the turn, not after it.",
        excerptKey: "turn-lane-closest",
        sourceLabel: "Iowa Driver's License Manual - 2.18 General Lane Use",
        sourceUrl: hb(16),
      },
      {
        id: "ia_s2_20",
        topic: "safety",
        question: "How does the Iowa manual tell you to check whether a tire is worn out?",
        choices: [
          "Look for cracks in the sidewall",
          "Press a thumbnail into the tread",
          "Measure the tire pressure when the tires are warm",
          "Stick a penny into the tread head first and see whether the tread reaches the top of Lincoln's head",
        ],
        correctIndex: 3,
        explanation:
          "The penny test. Insert the coin head first, and if the tread does not reach the top of Lincoln's head the tire is unsafe and should be replaced.",
        context:
          "The manual pairs this with a pressure check made when the tires are cold, using the figure on the sticker inside the driver's door or in the owner's manual. Worn or badly inflated tires lengthen stopping distance, cause hydroplaning, and make the vehicle harder to steer and stop.",
        trap: "Checking pressure when the tires are warm reads high, which is why the manual specifies cold.",
        excerptKey: "tire-penny-test",
        sourceLabel: "Iowa Driver's License Manual - 3.1 Maintaining Your Vehicle",
        sourceUrl: hb(24),
      },
      {
        id: "ia_s2_21",
        topic: "impairment",
        question: "How long does the Iowa manual say you can be awake before you are as impaired as a legally drunk driver?",
        choices: ["12 hours", "16 hours", "18 hours", "24 hours"],
        correctIndex: 2,
        explanation:
          "Eighteen hours awake is the manual's comparison to a BAC of 0.08. It leaves you at equal risk of a crash.",
        context:
          "The manual gives you a list of symptoms to act on rather than push through: daydreaming, not remembering the last few miles, yawning repeatedly, trouble keeping your head up, drifting out of your lane, tailgating, hitting a rumble strip, and feeling restless or irritable. The response is to take a break, pull over somewhere safe, or swap drivers.",
        trap: "Being awake since early morning is not remarkable, which is exactly what makes this figure easy to reach without noticing.",
        excerptKey: "drowsy-18-hours",
        sourceLabel: "Iowa Driver's License Manual - 3.9 Drowsy Driving",
        sourceUrl: hb(37),
      },
      {
        id: "ia_s2_22",
        topic: "rightOfWay",
        question: "A pedestrian is crossing an Iowa street at a corner where no crosswalk is painted. What do you owe them?",
        choices: [
          "The right of way, because Iowa recognises unmarked crosswalks",
          "Nothing, because a crosswalk has to be marked",
          "The right of way only if they started before you arrived",
          "A warning on the horn, then you may proceed",
        ],
        correctIndex: 0,
        explanation:
          "Iowa requires you to yield or stop for pedestrians in marked and unmarked crosswalks alike. An intersection has a crosswalk whether or not anyone painted one.",
        context:
          "A 2024 change widened this further. Vehicles must yield to pedestrians on foot and to anyone using a pedestrian conveyance - any human-powered device such as a wheelchair, stroller, skateboard, scooter or electric personal assistive mobility device. Everywhere the manual says pedestrian, it means both.",
        trap: "Paint is what makes the crosswalk visible, not what makes it exist. The manual asks you to be especially alert where there is no paint.",
        excerptKey: "crosswalk-marked-unmarked",
        sourceLabel: "Iowa Driver's License Manual - 2.22 Intersections",
        sourceUrl: hb(19),
        commonlyMissed: true,
      },
      {
        id: "ia_s2_23",
        topic: "emergencies",
        question: "Your brakes fail on an Iowa road. What does the manual tell you to try first?",
        choices: [
          "Pull the parking brake hard",
          "Shift straight into a low gear",
          "Pump the brake pedal several times",
          "Turn off the engine",
        ],
        correctIndex: 2,
        explanation:
          "Pumping the pedal often builds enough pressure to stop the vehicle, so it comes first. The parking brake is next, applied slowly, and lower gears after that.",
        context:
          "The manual's emergency section is a set of ordered responses. For a stuck accelerator you shift quickly to neutral, keep your eyes on the road, and turn the engine off only after you have stopped. For a blowout you grip the wheel, come off the gas, brake lightly and stay on the road until you can pull off safely. For a stall the brakes and steering both still work but need far more effort.",
        trap: "Yanking the parking brake locks the rear wheels and puts you into a skid. It is the second step, applied gently.",
        excerptKey: "brake-failure",
        sourceLabel: "Iowa Driver's License Manual - 5.14 Equipment Failure Emergencies",
        sourceUrl: hb(62),
      },
      {
        id: "ia_s2_24",
        topic: "speed",
        question: "The posted limit on an Iowa road is 55 mph and freezing rain is falling. What speed does the law expect?",
        choices: [
          "55 mph, since that is what the sign says",
          "Exactly 10 mph below the posted limit",
          "Whatever the vehicle in front is doing",
          "A speed low enough to stop within the distance you can see to be clear",
        ],
        correctIndex: 3,
        explanation:
          "A posted limit is a maximum for ideal conditions. Iowa Code Section 321.285(1) requires a speed that lets you stop within the assured clear distance ahead, which in freezing rain is far less than 55.",
        context:
          "The manual states the same principle in plain words: the posted speed limit is the maximum you can legally drive under ideal conditions, and your speed should depend on the limit, the road conditions and the weather together. Reaching the posted number in bad conditions is not compliance.",
        trap: "The sign is a ceiling, not a target. Driving the posted limit on ice is still a speed offence in Iowa.",
        excerptKey: "code-assured-clear-distance",
        sourceLabel: "Iowa Code Section 321.285(1) - Speed restrictions",
        sourceUrl: code("321.285"),
      },
      {
        id: "ia_s2_25",
        topic: "sharing",
        question: "Why does the Iowa manual warn you about staying beside a large truck?",
        choices: [
          "Trucks are more likely to have mechanical failures",
          "Truck drivers are legally allowed to change lanes without signalling",
          "Trucks throw debris from their tires",
          "Trucks have large blind spots, so if you cannot see the driver's face in the mirror the driver cannot see you",
        ],
        correctIndex: 3,
        explanation:
          "The manual calls them no-zones - blind areas around the front, back and sides of a truck. Its test is simple: if you cannot see the truck driver in the truck's mirror, the truck driver cannot see you.",
        context:
          "Two more truck rules go with it. Truck drivers often swing wide to the left to make a right turn, so squeezing between the truck and the curb is dangerous. And when you pass, wait until you can see the front of the truck in your rearview mirror before moving back in - trucks take much longer to stop than cars.",
        trap: "It is not the truck's behaviour that creates the risk here. It is that you have placed yourself somewhere the driver has no way of seeing.",
        excerptKey: "truck-no-zones",
        sourceLabel: "Iowa Driver's License Manual - 5.9 Sharing the Road with Large Trucks",
        sourceUrl: hb(57),
      },
      {
        id: "ia_s2_26",
        topic: "parking",
        question: "Which of these is on the Iowa manual's list of places you may not park?",
        choices: [
          "Any bridge outside city limits, or inside a highway tunnel",
          "Any bridge anywhere in the state",
          "Within 25 feet of a bus stop",
          "On any road with a posted limit above 35 mph",
        ],
        correctIndex: 0,
        explanation:
          "The bridge rule is limited to bridges outside city limits, plus highway tunnels. Iowa Code Section 321.358(12) uses the same wording.",
        context:
          "The rest of the list is worth reading as a whole: crosswalks, in front of a public or private driveway, alongside another parked car, within an intersection, on a sidewalk, in a marked no parking zone, and on interstates and highways. The measured distances are five feet from a hydrant, 10 from a stop sign, 20 from a fire station entrance and 50 from the nearest rail.",
        trap: "\"No parking on bridges\" is the version most people remember. Iowa's rule turns on whether the bridge is inside a city.",
        excerptKey: "no-park-tail",
        sourceLabel: "Iowa Driver's License Manual - 2.26 Parking Not Allowed",
        sourceUrl: hb(21),
      },
      {
        id: "ia_s2_27",
        topic: "safety",
        question: "How does the Iowa manual tell you to brake in a vehicle with ABS when you need to stop quickly?",
        choices: [
          "Pump the pedal rapidly",
          "Brake gently to stop the system engaging",
          "Press hard, then release when you feel the pedal push back",
          "Press as hard as you can and keep pressing",
        ],
        correctIndex: 3,
        explanation:
          "With ABS you press hard and hold. The pedal may push back against your foot while the system is working, and easing off is exactly what stops it working.",
        context:
          "ABS lets you stop without skidding, which means you can steer while braking hard. The manual asks you to read the owner's manual for your particular vehicle, because the feel varies. Its other braking advice applies whatever the system: loose gravel, snow, ice and even dry pavement can all put a vehicle into a skid if the brakes go on too hard.",
        trap: "Pumping the pedal is the technique for a car without ABS. In a car with it, pumping defeats the system.",
        excerptKey: "abs-press-hard",
        sourceLabel: "Iowa Driver's License Manual - 4.4 Braking and Stopping",
        sourceUrl: hb(41),
      },
      {
        id: "ia_s2_28",
        topic: "signals",
        question: "What are the rows of solid white triangles painted across an Iowa travel lane?",
        choices: [
          "A yield line, marking where vehicles should yield",
          "A stop line",
          "A crosswalk",
          "The edge of a bicycle box",
        ],
        correctIndex: 0,
        explanation:
          "Triangles pointing back at you are a yield line. They mark the point at which you give way, and they go with a Yield or Yield Here To Pedestrians sign.",
        context:
          "Iowa uses several markings at the same kind of location, so it is worth separating them. A stop line is a solid bar you must stop behind. A crosswalk defines where pedestrians cross. A yield line is the row of triangles. A bicycle box is a solid green rectangle with a bicycle symbol at a signalised intersection, covering the whole width of the lane.",
        trap: "Both a stop line and a yield line tell you where the decision point is, but only one of them makes stopping automatic.",
        excerptKey: "yield-lines",
        sourceLabel: "Iowa Driver's License Manual - 2.13 Yield Lines",
        sourceUrl: hb(15),
      },
      {
        id: "ia_s2_29",
        topic: "rules",
        question: "You are driving in an Iowa work zone. What does the manual warn about the penalties?",
        choices: [
          "Fines may double in work area zones",
          "Fines are the same as anywhere else",
          "A first offence brings only a warning",
          "Fines double only when workers are present",
        ],
        correctIndex: 0,
        explanation:
          "Iowa warns that fines may double in a work area zone. That applies to the zone, not to whether anyone happens to be standing in it at the moment.",
        context:
          "The manual asks four things of you in a work zone: adjust your speed to the traffic conditions, obey all instructions from signs, signals and flaggers, increase your following distance, and give driving your full attention. Flaggers wear fluorescent yellow-green or orange and normally carry stop and slow paddles, occasionally red flags, and their instructions are binding.",
        trap: "\"Only when workers are present\" is the rule for school zone speed limits in some states. Iowa's work zone warning does not carry that qualifier.",
        excerptKey: "workzone-fines-double",
        sourceLabel: "Iowa Driver's License Manual - 2.11 Work Zones",
        sourceUrl: hb(14),
      },
      {
        id: "ia_s2_30",
        topic: "licensing",
        question: "You pass the Iowa knowledge test. How long is that result good for?",
        choices: ["30 days", "90 days", "180 days", "One year"],
        correctIndex: 2,
        explanation:
          "A knowledge test score is valid for 180 days under 761 IAC 604.9(3). If you do not complete the rest of the process in that window, you sit it again.",
        context:
          "The same rule chapter covers the rest of the process. An examination includes a vision screening if you have not filed a vision report, the knowledge test, and a driving test. An applicant who cannot read or understand the written test may ask for an oral one, given by an examiner or by an automated device. Failing the knowledge test allows a retest at the examiner's discretion.",
        trap: "Passing the test is not the same as being issued the permit. The clock on the score keeps running while you gather documents.",
        excerptKey: "iac-test-score-180",
        sourceLabel: "761 IAC 604.9(3) - Knowledge test",
        sourceUrl: IAC,
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Real Test Difficulty",
    difficulty: "medium",
    description:
      "Thirty-five questions pitched where the real Iowa knowledge test sits: the exact numbers, the exceptions that hide inside a rule, and the situations where two rules meet.",
    questions: [
      {
        id: "ia_s3_01",
        topic: "sharing",
        question:
          "You are meeting a stopped school bus with its stop arm out, on a four-lane Iowa road, travelling in the opposite direction. What must you do?",
        choices: [
          "Stop until the arm retracts",
          "Slow to 20 mph and continue",
          "You do not need to stop",
          "Stop only if children are visible",
        ],
        correctIndex: 2,
        explanation:
          "This is the single case in Iowa where you may pass a stopped school bus with its arm extended. You are meeting it on a road of four or more lanes, so you keep going.",
        context:
          "Note what does the work here: lane count, not a median or a barrier. Iowa Code Section 321.372(4) frames it as a highway providing two or more lanes in each direction. Coming up behind a bus, the exception never applies - you stop 15 feet back whatever the road is, and you stay there until the arm retracts and the bus moves.",
        trap: "The exception is meeting only. On the same four-lane road, following the bus, you stop.",
        excerptKey: "bus-four-lane-exception",
        sourceLabel: "Iowa Driver's License Manual - 2.24 School Buses",
        sourceUrl: hb(20),
        commonlyMissed: true,
      },
      {
        id: "ia_s3_02",
        topic: "licensing",
        question: "How many hours of supervised driving does Iowa require before an intermediate licence, and how many must be at night?",
        choices: [
          "20 hours total, of which 2 after sunset and before sunrise",
          "30 hours total, of which 5 at night",
          "40 hours total, of which 10 at night",
          "10 hours total, with no night requirement",
        ],
        correctIndex: 0,
        explanation:
          "Twenty hours on the permit, with two of them after sunset and before sunrise. A parent, guardian or custodian signs an affidavit saying they were completed.",
        context:
          "The requirement is in Iowa Code Section 321.180B(2) and nowhere on the DOT's intermediate licence page, which lists the 12-month permit period and the clean six-month record but not the hours. The person supervising those hours has to be one of the people who may supervise a permit holder in the first place. Moving to a full licence needs a further 10 hours, again with two at night.",
        trap: "Fifty hours is the common figure in other states. Iowa's is 20, and it splits into 20 then 10 across the two stages.",
        excerptKey: "code-intermediate-20-hours",
        sourceLabel: "Iowa Code Section 321.180B(2)(a) - Graduated driver's licenses",
        sourceUrl: code("321.180B"),
        commonlyMissed: true,
      },
      {
        id: "ia_s3_03",
        topic: "rules",
        question: "Which vehicles must stop at every Iowa railroad crossing, and where?",
        choices: [
          "All vehicles, within 50 feet of the tracks",
          "Only school buses, within 15 feet",
          "Any vehicle towing a trailer, within 25 feet",
          "School buses, charter buses, drivers carrying passengers for hire, and placarded hazardous materials vehicles, within 15 to 50 feet of the tracks",
        ],
        correctIndex: 3,
        explanation:
          "Four categories of vehicle stop at every crossing, and the stop has to land in a window between 15 and 50 feet from the tracks. Rideshare drivers carrying a passenger are covered by the passengers-for-hire limb.",
        context:
          "Two exceptions release even those drivers: a police officer or a highway traffic signal directing traffic to proceed, and a crossing marked with an EXEMPT sign. For everyone else the rule is not a stop but a clearance one - before you cross, make sure you can get entirely over, and when you are stopped leave at least 15 feet between your vehicle and the nearest rail.",
        trap: "Ordinary cars are not on this list, which is why a stopped bus at a crossing surprises the driver behind it.",
        excerptKey: "rr-required-to-stop",
        sourceLabel: "Iowa Driver's License Manual - 2.10 Railroad Crossings",
        sourceUrl: hb(12),
      },
      {
        id: "ia_s3_04",
        topic: "signals",
        question: "You reach an Iowa intersection where the traffic signal is dark and a police officer is directing traffic by hand. Whose instruction governs?",
        choices: [
          "The officer's",
          "Nobody's, so the intersection becomes an all-way stop",
          "Whatever the signal showed before it failed",
          "The first driver to enter has the right of way",
        ],
        correctIndex: 0,
        explanation:
          "Iowa's manual puts law enforcement, highway personnel and school crossing guards above the hardware. You must follow directions from these persons.",
        context:
          "The same rule sits at the top of the traffic signals section, before any colour is explained, because it decides which instruction wins whenever they conflict. A flagger in a work zone carries the same authority - the manual lists obeying a construction work zone flagger among the situations where you must always stop.",
        trap: "A dark signal invites drivers to invent a rule. When somebody is directing traffic, there is no gap to fill.",
        excerptKey: "signals-follow-persons",
        sourceLabel: "Iowa Driver's License Manual - 2.9 Traffic Signals",
        sourceUrl: hb(11),
      },
      {
        id: "ia_s3_05",
        topic: "safety",
        question: "How much light must an Iowa windshield and the windows beside the driver let through?",
        choices: ["At least 50 percent", "At least 60 percent", "At least 70 percent", "There is no state standard"],
        correctIndex: 2,
        explanation:
          "Seventy percent light transmission, on the windshield and on the windows immediately to the driver's right and left. Iowa allows no medical exemption from it.",
        context:
          "The manual gathers the vision rules in one place: replace damaged glass because it breaks more easily and obscures your view, keep the windshield clean, keep washer fluid topped up with antifreeze wash in winter, clear snow and ice from every window before you drive, and keep the view unobstructed by things hanging from the mirror.",
        trap: "Several states grant a medical exemption for darker tint. The manual says in terms that Iowa does not.",
        excerptKey: "window-tint-70",
        sourceLabel: "Iowa Driver's License Manual - 3.1 Maintaining Your Vehicle",
        sourceUrl: hb(24),
      },
      {
        id: "ia_s3_06",
        topic: "rightOfWay",
        question:
          "A rectangular rapid flashing beacon starts flashing at an Iowa mid-block crosswalk as you approach. What must you do?",
        choices: [
          "Slow down and look for pedestrians",
          "Continue if nobody has stepped off the curb",
          "Stop only if the crosswalk is marked with a stop line",
          "Stop for anyone within the crosswalk, and watch for anyone about to enter it",
        ],
        correctIndex: 3,
        explanation:
          "When the amber lights are flashing, Iowa requires a stop for anyone in the crosswalk and alertness for anyone about to enter it. Somebody has pressed the button, which is why the beacon is running.",
        context:
          "A pedestrian hybrid beacon works differently and its sequence is worth knowing: dark means proceed with caution, flashing yellow means slow down, steady yellow means prepare to stop, steady red means stop, and flashing red means stop if you have not already and then proceed with caution once the crosswalk is clear.",
        trap: "The beacon flashing is itself the signal that someone wants to cross. Waiting until you see them step out is waiting too long.",
        excerptKey: "rrfb",
        sourceLabel: "Iowa Driver's License Manual - 2.20 Bicycle and Pedestrian Signals",
        sourceUrl: hb(18),
      },
      {
        id: "ia_s3_07",
        topic: "speed",
        question: "What is the unposted speed limit in an Iowa suburban district?",
        choices: ["25 mph", "35 mph", "45 mph", "55 mph"],
        correctIndex: 2,
        explanation:
          "Forty-five mph. It is the same figure Iowa applies to any vehicle towing another vehicle, whatever the road.",
        context:
          "The four district figures - 20 business, 25 residence or school, 45 suburban, 45 towing - are the ones the manual on page 42 and Iowa Code Section 321.285(2) state identically, and they are the ones to memorise. Above them the class of road decides, and the manual and the statute do not agree, so a posted sign governs.",
        trap: "A suburban district sounds residential and is not. Iowa treats it as its own category with its own number.",
        excerptKey: "speed-unposted-list",
        sourceLabel: "Iowa Driver's License Manual - 4.5 Appropriate Speed",
        sourceUrl: hb(42),
      },
      {
        id: "ia_s3_08",
        topic: "impairment",
        question:
          "An Iowa driver is stopped and found to have a controlled substance in their system, but a zero blood alcohol reading. What is the position?",
        choices: [
          "No offence, because the BAC is zero",
          "It is a lesser offence with a fine only",
          "It depends on whether the driver was visibly impaired",
          "It is operating while intoxicated, because any amount of a controlled substance qualifies",
        ],
        correctIndex: 3,
        explanation:
          "Iowa's OWI definition has two independent limbs: a BAC of .08 or higher, or operating with any amount of a controlled substance in your system. Either one is the offence.",
        context:
          "The consequences do not depend on which limb was met. Driving privileges are revoked for a minimum of 180 days whether or not a criminal court convicts, repeat offences bring longer revocations and harsher criminal penalties, and testing may be by breathalyzer, urine sample or blood test.",
        trap: "\"Intoxicated\" reads like a description of a state. In Iowa it is a definition, and one half of it is measured in substances rather than degrees.",
        excerptKey: "owi-definition",
        sourceLabel: "Iowa Driver's License Manual - 3.8 Alcohol and Drugs",
        sourceUrl: hb(37),
      },
      {
        id: "ia_s3_09",
        topic: "parking",
        question: "How close to a stop sign may you park in Iowa?",
        choices: [
          "No closer than 10 feet on the approach to it",
          "No closer than 20 feet",
          "No closer than 30 feet",
          "There is no distance, only a no parking sign",
        ],
        correctIndex: 0,
        explanation:
          "Ten feet on the approach. Iowa Code Section 321.358(6) applies the same 10 feet to a flashing beacon and to a traffic-control signal at the side of the roadway.",
        context:
          "The reason is sight lines rather than obstruction: a car parked right up to a stop sign hides the approaching traffic from the driver who has stopped at it. Iowa's other measured distances are five feet from a hydrant, 20 from a fire station entrance, 50 from the nearest rail, and 10 feet from the ends of a safety zone.",
        trap: "Thirty feet is the figure in a number of other states. Iowa's is 10, and the same 10 covers a signal.",
        excerptKey: "code-parking-stop-sign-10",
        sourceLabel: "Iowa Code Section 321.358 - Stopping, standing, or parking",
        sourceUrl: code("321.358"),
      },
      {
        id: "ia_s3_10",
        topic: "signs",
        question: "What is the difference between a fluorescent yellow-green sign and a plain yellow one in Iowa?",
        choices: [
          "Fluorescent yellow-green marks pedestrian, bicycle and school warnings",
          "Fluorescent yellow-green is used only at night",
          "Plain yellow signs are advisory and fluorescent ones are mandatory",
          "There is no difference; it is a printing variation",
        ],
        correctIndex: 0,
        explanation:
          "Iowa reserves the fluorescent yellow-green colour for the warnings about people: pedestrians, bicycles and schools. Plain yellow is the general warning colour.",
        context:
          "The colour is a category, not an emphasis. The manual notes that the advance school crossing sign may be either colour, so the shape does the identifying there - a pentagon marks school areas and crossings whatever colour it is printed in.",
        trap: "The brighter colour looks like an urgency marker. In Iowa's scheme it is telling you what kind of hazard, not how serious.",
        excerptKey: "colour-yellow-green",
        sourceLabel: "Iowa Driver's License Manual - 2.1 Traffic Signs",
        sourceUrl: hb(6),
      },
      {
        id: "ia_s3_11",
        topic: "rules",
        question: "Iowa's hands-free law took effect in 2025. What does it prohibit?",
        choices: [
          "Holding a phone at all, including scrolling, typing or entering an address",
          "Writing, sending or reading a text message only",
          "Any phone use, even hands-free",
          "Phone use only by drivers under 18",
        ],
        correctIndex: 0,
        explanation:
          "The current law reaches holding the device for any purpose. You cannot hold it, scroll it, type on it, enter a destination while moving, stream video, or make a video call.",
        context:
          "That is a real change from the law it replaced, which only covered writing, sending or viewing an electronic message. Iowa Code Section 321.276 now bans using an electronic device while driving unless the vehicle is stopped off the traveled portion of the roadway, with an exception for voice-activated or hands-free mode. That exception expressly does not cover video content, video calls, gaming data, or reading a message or notification.",
        trap: "\"I was only changing the music\" used to be a defence, because music is not an electronic message. Under the current wording, holding the phone is the offence.",
        excerptKey: "code-electronic-device",
        sourceLabel: "Iowa Code Section 321.276(2) - Use of electronic device while driving",
        sourceUrl: code("321.276"),
        commonlyMissed: true,
      },
      {
        id: "ia_s3_12",
        topic: "emergencies",
        question:
          "Water is running across an Iowa road ahead of you and you cannot judge its depth. What does the manual say?",
        choices: [
          "Cross slowly in a low gear",
          "Cross if it looks under a foot deep",
          "Never drive through a flooded road or bridge; turn around and find another route",
          "Follow another vehicle across to see how deep it is",
        ],
        correctIndex: 2,
        explanation:
          "The manual's instruction is absolute. Six inches of moving water can sweep away a vehicle, including an SUV or a pickup, and the road surface underneath may already have washed out.",
        context:
          "Almost half of all flash flood deaths happen in vehicles. If you are stalled in floodwater, the manual says to abandon the vehicle and move to higher ground rather than staying in it. If the car is swept in and submerged, wait for it to fill, because the doors open more easily once the pressure equalises, then hold your breath and swim up.",
        trap: "Depth is not the only variable and you cannot see the one that matters. The road under the water may not be there.",
        excerptKey: "flood-six-inches",
        sourceLabel: "Iowa Driver's License Manual - 5.13 Inclement Weather Driving",
        sourceUrl: hb(60),
      },
      {
        id: "ia_s3_13",
        topic: "sharing",
        question: "How far behind a motorcycle does the Iowa manual ask you to stay?",
        choices: [
          "The same two seconds you would leave behind a car",
          "One second, because a motorcycle stops faster",
          "Six seconds in all conditions",
          "At least three to four seconds",
        ],
        correctIndex: 3,
        explanation:
          "Three to four seconds, and further back when the road is wet or slippery. With only two wheels touching the pavement a motorcycle can be very unstable in a fast stop.",
        context:
          "The manual's motorcycle advice is mostly about intersections, where car and motorcycle collisions are most likely. Turn signals do not cancel themselves on a motorcycle, so a blinking indicator is not proof of what the rider intends. Make sure you have seen the motorcycle and judged its speed before you turn across its path, and give it a full lane when you pass.",
        trap: "A motorcycle looks small and far away, which is exactly the misjudgement the rule is protecting against.",
        excerptKey: "motorcycle-following",
        sourceLabel: "Iowa Driver's License Manual - 5.10 Sharing the Road with Motorcycles",
        sourceUrl: hb(58),
      },
      {
        id: "ia_s3_14",
        topic: "licensing",
        question: "You are 15, hold an Iowa instruction permit, and your phone rings while you are driving with your mother beside you. What may you do?",
        choices: [
          "Answer it, since an adult is supervising",
          "Answer it on speaker",
          "Not answer it at all unless you are stopped off the traveled portion of the roadway",
          "Answer it if the call is from a parent",
        ],
        correctIndex: 2,
        explanation:
          "Drivers under 18 on a permit, an intermediate licence or a special minor's restricted licence may not make or receive calls or talk on the phone at all while driving. Supervision does not change it.",
        context:
          "This restriction sits on top of the hands-free law that applies to everyone. For an adult, a hands-free call is lawful. For a driver under 18 in the graduated system, it is not - the only lawful position is stopped off the traveled part of the road. Equipment permanently installed in the vehicle is outside the rule.",
        trap: "Hands-free is the exception that saves an adult driver. It does not save a permit holder.",
        excerptKey: "under-18-no-calls",
        sourceLabel: "Iowa Driver's License Manual - 3.7 Eliminating Distractions",
        sourceUrl: hb(36),
        commonlyMissed: true,
      },
      {
        id: "ia_s3_15",
        topic: "safety",
        question: "How does the Iowa manual say you should hold the steering wheel?",
        choices: [
          "At 10 and 2 o'clock",
          "One hand at 12 o'clock",
          "Wherever is comfortable, since airbags make hand position irrelevant",
          "At 9 and 3 o'clock, or slightly lower at 7 and 5",
        ],
        correctIndex: 3,
        explanation:
          "Nine and three, or lower at seven and five. The reason is the airbag: hands high on the wheel are in the path of one that deploys.",
        context:
          "The seating advice goes with it. Sit with your back against the seat, at least 10 inches between your chest and the steering wheel with the airbag pointed at your chest, the top of the wheel no higher than your shoulders, and the head restraint at the centre of your head. Shorter drivers may need a cushion or pedal extenders to keep that 10 inches.",
        trap: "Ten and two is what an older generation was taught, and it is the position that puts your forearms across a deploying airbag.",
        excerptKey: "hand-position",
        sourceLabel: "Iowa Driver's License Manual - 4.6 Steering",
        sourceUrl: hb(42),
      },
      {
        id: "ia_s3_16",
        topic: "rightOfWay",
        question: "How does an Iowa reduced-conflict intersection expect a side-road driver to turn left onto the highway?",
        choices: [
          "Wait for a gap in both directions and cross straight over",
          "Turn left across the near lanes and wait in the median",
          "Use the signal phase reserved for side-road traffic",
          "Turn right onto the highway, merge left, and make a U-turn at a designated median opening",
        ],
        correctIndex: 3,
        explanation:
          "The design removes the left turn entirely. You turn right, merge to the left lane, and use a designated median opening to double back.",
        context:
          "The manual explains the safety logic: you only ever deal with one direction of highway traffic at a time, so you do not have to find a gap in both at once. That is the opposite of the advice for an ordinary rural four-lane crossing, where you stop, look left, move into the median, stop again, look right, and then complete the movement.",
        trap: "Crossing straight over is what the layout is designed to prevent. The median opening for the U-turn is somewhere further along, not at the intersection.",
        excerptKey: "reduced-conflict",
        sourceLabel: "Iowa Driver's License Manual - 5.3 Reduced-Conflict Intersection",
        sourceUrl: hb(52),
      },
      {
        id: "ia_s3_17",
        topic: "signals",
        question: "A steady green arrow points left at an Iowa intersection. What does it tell you?",
        choices: [
          "You may turn left; oncoming traffic must stop",
          "You may turn left after yielding to oncoming traffic",
          "You may go straight or turn left",
          "The left turn phase is ending",
        ],
        correctIndex: 0,
        explanation:
          "A steady green arrow is a protected movement. Oncoming traffic has been stopped for you, and you drive only in the direction the arrow points.",
        context:
          "You still yield to anything already lawfully inside the intersection when the arrow appears - a vehicle or a pedestrian caught by the change gets time to clear. The manual is explicit about the other half too: on a green arrow you do not go straight, because the arrow is the only movement being permitted.",
        trap: "Protected is not the same as empty. The arrow stops the oncoming traffic, but it cannot remove what is already in the box.",
        excerptKey: "signal-steady-green-arrow",
        sourceLabel: "Iowa Driver's License Manual - 2.9 Traffic Signals",
        sourceUrl: hb(11),
      },
      {
        id: "ia_s3_18",
        topic: "speed",
        question: "What speed do Iowa snowplows typically work at, according to the manual?",
        choices: ["10 to 15 mph", "25 to 35 mph", "40 to 45 mph", "The posted limit"],
        correctIndex: 1,
        explanation:
          "Twenty-five to 35 mph. The manual notes that many drivers do not realise this and hit the plow from behind.",
        context:
          "Three more rules go with it. Never pass on the shoulder side of a plow, because that is where it is throwing the snow. Allow plenty of room when you do pass, since the blade may stick out further than the vehicle. And expect large blind spots and a cloud of snow that hides you from the operator as much as it hides the plow from you.",
        trap: "A plow on an interstate looks like slow-moving traffic in a fast lane. It is working at roughly half the speed of everything around it.",
        excerptKey: "snowplow-speed",
        sourceLabel: "Iowa Driver's License Manual - 5.13 Sharing the road with snowplows",
        sourceUrl: hb(61),
      },
      {
        id: "ia_s3_19",
        topic: "rules",
        question: "The Iowa manual lists situations where you must always stop. Which of these is on the list?",
        choices: [
          "Before crossing a sidewalk when leaving a private roadway, driveway or alley",
          "At every intersection with more than two lanes",
          "Whenever a vehicle ahead brakes",
          "At the top of every hill on a gravel road",
        ],
        correctIndex: 0,
        explanation:
          "Leaving a private roadway, driveway or alley you stop before crossing the sidewalk. Iowa lists it alongside stop signs and red lights as an absolute requirement.",
        context:
          "The full list is worth reading once: all stop signs, before crossing a sidewalk when leaving a private roadway, entering a public road from a private drive including a parking lot or gas station, at the request of any law officer, when a work zone flagger instructs you, at a flashing red then go when clear, at every red light including where right on red is permitted, and for a visually impaired person with a cane or guide dog near your path.",
        trap: "Rolling across a sidewalk feels like part of leaving the driveway. Iowa makes it a required stop in its own right.",
        excerptKey: "required-stops",
        sourceLabel: "Iowa Driver's License Manual - 4.4 Braking and Stopping",
        sourceUrl: hb(41),
      },
      {
        id: "ia_s3_20",
        topic: "sharing",
        question: "You are approaching a person walking with a white cane on an Iowa street. What must you do?",
        choices: [
          "Stop when they are in front of you or close enough to be in danger",
          "Sound your horn to let them know you are there",
          "Slow to 20 mph and continue past",
          "Nothing special unless they are in a marked crosswalk",
        ],
        correctIndex: 0,
        explanation:
          "Iowa lists stopping for a visually impaired person with a cane or a guide dog among the situations where you must always stop. Being close enough to be in danger is the trigger, with or without a crosswalk.",
        context:
          "The manual describes the two signals to look for: a person being led by a harnessed service animal, or walking with a cane that is white or white with a red tip. It asks for extra caution to prevent injury. A horn is not part of the response, and the manual's list of proper horn uses is about warning drivers, not pedestrians who cannot see you.",
        trap: "A crosswalk is not needed for this rule. It follows the person, not the paint.",
        excerptKey: "required-stop-blind",
        sourceLabel: "Iowa Driver's License Manual - 4.4 Braking and Stopping",
        sourceUrl: hb(41),
      },
      {
        id: "ia_s3_21",
        topic: "parking",
        question: "You are parking on an Iowa street with no curb. What does the manual ask?",
        choices: [
          "Park within 18 inches of the pavement edge",
          "Park facing the direction of travel only",
          "Park at least 20 feet from the roadway",
          "Park in a designated area if possible, and otherwise as far from traffic as you can, clear of any travel lane",
        ],
        correctIndex: 3,
        explanation:
          "With no curb to measure from, Iowa's requirement becomes a judgement: get as far from the traffic as you can, and far enough from any travel lane not to interfere with it.",
        context:
          "The 18-inch rule applies only where there is a curb. The framing sentence in the manual is the one to remember - drivers are responsible for making sure their vehicles do not become a hazard after they have been parked, which is a standard the measurements only illustrate.",
        trap: "The 18 inches is a curb rule, so quoting it on a rural shoulder answers a question that was not asked.",
        excerptKey: "park-responsibility",
        sourceLabel: "Iowa Driver's License Manual - 2.25 Parking",
        sourceUrl: hb(21),
      },
      {
        id: "ia_s3_22",
        topic: "signs",
        question: "You see a sign reading DIVIDED HIGHWAY ENDS on an Iowa road. What does it mean?",
        choices: [
          "The road is about to narrow to one lane",
          "The road becomes a one-way street",
          "You are leaving a highway and entering a city street",
          "Two-way traffic will no longer be divided by a centre strip, so watch for oncoming vehicles",
        ],
        correctIndex: 3,
        explanation:
          "The centre strip is about to disappear and traffic from the other direction will be beside you again. It is a warning sign, not a lane closure.",
        context:
          "Its opposite number, DIVIDED HIGHWAY BEGINS, warns that two-way traffic is about to be separated by a centre strip. LANE ENDS is the one people confuse with it: that means two lanes going the same way become one and traffic must yield when merging.",
        trap: "\"Ends\" reads as though a lane is closing. What ends is the separation between the directions.",
        excerptKey: "warning-divided-ends",
        sourceLabel: "Iowa Driver's License Manual - 2.3 Warning Signs",
        sourceUrl: hb(9),
      },
      {
        id: "ia_s3_23",
        topic: "impairment",
        question: "How long does the manual say an Iowa driver's privileges are revoked for a first operating while intoxicated incident?",
        choices: [
          "30 days",
          "90 days",
          "A minimum of 180 days, even without a criminal conviction",
          "Only after the criminal case concludes",
        ],
        correctIndex: 2,
        explanation:
          "The minimum is 180 days, and the revocation does not wait for a criminal court. The manual is explicit that it applies even if you are not convicted.",
        context:
          "Iowa runs two tracks in parallel: the criminal case and the administrative loss of driving privileges. Repeat offences bring longer revocations and harsher criminal penalties. An underage driver at .02 loses privileges for a minimum of 60 days, rising to 180 if the reading is .08 or above, and cannot get a temporary restricted licence at all if under 18.",
        trap: "Beating the charge does not restore the licence. The two decisions are made separately and on different standards.",
        excerptKey: "owi-revocation-180",
        sourceLabel: "Iowa Driver's License Manual - 3.8 Alcohol and Drugs",
        sourceUrl: hb(37),
      },
      {
        id: "ia_s3_24",
        topic: "safety",
        question: "How far ahead does the Iowa manual ask you to scan while driving defensively?",
        choices: ["Five seconds", "10 seconds", "20 to 30 seconds", "As far as your headlights reach"],
        correctIndex: 2,
        explanation:
          "Twenty to 30 seconds ahead, with your mirrors checked frequently and your eyes moving. That is far enough to see a problem developing rather than arriving.",
        context:
          "The manual's seven defensive driving points build on each other: think safety first, be aware of your surroundings, do not depend on other drivers, follow the 3- to 4-second rule, keep your speed down because posted limits assume ideal conditions, always leave yourself an escape route, and eliminate distractions. It backs the whole list with a figure - 94 percent of serious crashes come from choices or errors people make behind the wheel.",
        trap: "Scanning is not the same as following distance. One is about where you look, the other about where you are.",
        excerptKey: "defensive-scan-20-30",
        sourceLabel: "Iowa Driver's License Manual - 4.11 Defensive Driving",
        sourceUrl: hb(47),
      },
      {
        id: "ia_s3_25",
        topic: "rightOfWay",
        question: "You are entering a single-lane Iowa roundabout. What do you yield to?",
        choices: [
          "Traffic already in the roundabout, and anyone in the crosswalk",
          "Traffic already in the roundabout only",
          "Traffic approaching from your left only",
          "Nothing, because roundabouts keep moving",
        ],
        correctIndex: 0,
        explanation:
          "Two yields, in order: pedestrians in the crosswalk as you approach, then traffic already circulating as you reach the yield line.",
        context:
          "The manual's four-step sequence is approach, enter, proceed and exit. You slow to the posted advisory speed on approach, yield at the yield line and merge counterclockwise, avoid stopping once you are inside, and signal before exiting to the right, yielding again to anyone in the exit crosswalk. In a multilane roundabout you also pick your lane before the yield line and never change lanes inside.",
        trap: "The crosswalk yield comes before the circulating traffic yield, and it is the one drivers forget while they are looking left for a gap.",
        excerptKey: "roundabout-enter",
        sourceLabel: "Iowa Driver's License Manual - 5.5 Roundabouts",
        sourceUrl: hb(54),
      },
      {
        id: "ia_s3_26",
        topic: "emergencies",
        question: "A tornado warning is issued while you are driving in Iowa and you cannot reach a building. What does the manual advise?",
        choices: [
          "Shelter under a bridge or overpass",
          "Keep driving at right angles to the storm",
          "Pull over, duck below the windows with your seat belt fastened, and cover your head",
          "Stop on the shoulder and stand beside the vehicle",
        ],
        correctIndex: 2,
        explanation:
          "Pull over, get below window level with the belt still on, and cover your head. If you can get out safely, a low-lying ditch or ravine is the alternative, again with your head covered.",
        context:
          "The manual distinguishes the two alerts: a watch means a severe thunderstorm may produce tornado-like conditions and a tornado is possible, while a warning means one is imminent and everyone should seek shelter immediately. It also names what to stay away from - bridges and overpasses.",
        trap: "An overpass looks like shelter and is the one place the manual tells you to avoid.",
        excerptKey: "tornado-driving",
        sourceLabel: "Iowa Driver's License Manual - 5.13 Inclement Weather Driving",
        sourceUrl: hb(60),
      },
      {
        id: "ia_s3_27",
        topic: "rules",
        question: "You are on an Iowa entrance ramp joining an interstate. What does the acceleration and merge area exist for?",
        choices: [
          "To let you stop and wait for a gap",
          "To let you check your mirrors before stopping at the end of the ramp",
          "To give you room to signal",
          "To bring your vehicle up to the speed of traffic and merge when it is safe",
        ],
        correctIndex: 3,
        explanation:
          "The middle segment of the ramp is there to match your speed to the traffic. The manual is explicit that you should not stop on the ramp unless it is absolutely necessary.",
        context:
          "Iowa splits the ramp into three: an entrance area to scan the road and judge your space, the acceleration and merge area, and the travel portion of the interstate itself. The manual asks traffic already on the interstate to move over, slow down or speed up to let ramp traffic in, which is an expectation rather than a right of way you can rely on.",
        trap: "Stopping at the end of a ramp is the instinct of a nervous driver and it is the most dangerous thing you can do there.",
        excerptKey: "on-ramp-segments",
        sourceLabel: "Iowa Driver's License Manual - 5.2 Interstate and Highway Driving",
        sourceUrl: hb(51),
      },
      {
        id: "ia_s3_28",
        topic: "licensing",
        question: "What happens on a second offence while holding an Iowa instruction permit?",
        choices: [
          "The permit is suspended for 30 days",
          "A warning letter only",
          "The permit is cancelled and you start again at 14",
          "Nothing, until a third offence",
        ],
        correctIndex: 0,
        explanation:
          "A first moving conviction, crash or restriction violation brings a warning letter and possible suspension. A second brings a 30-day suspension.",
        context:
          "The bigger cost is the delay. Every conviction, crash or restriction violation on a permit pushes your move to the next stage back by six months, and on an intermediate licence by twelve. Iowa Code Section 321.180B(3) frames it as needing to complete remedial driver improvement action and then be accident and violation free for six clean months before an intermediate licence can be issued.",
        trap: "The suspension is the visible penalty and the smaller one. The upgrade delay is what actually costs a teenager a year.",
        excerptKey: "dot-permit-consequences",
        sourceLabel: "Iowa DOT - Instruction Permit for Under Age 18",
        sourceUrl: PERMIT,
      },
      {
        id: "ia_s3_29",
        topic: "signals",
        question: "What does a solid green traffic light require of you in Iowa?",
        choices: [
          "Go, provided the intersection is clear and you yield to anyone already in it",
          "Go without qualification, since the light is yours",
          "Slow and prepare to stop",
          "Yield to all traffic on the cross street",
        ],
        correctIndex: 0,
        explanation:
          "Green means go only when the intersection is clear. When the light changes, traffic can be caught inside, and the manual says you must give them time to clear it.",
        context:
          "Iowa Code Section 321.257(2)(c) says the same thing in statutory terms: a steady circular green permits you to go straight, turn right or turn left unless something specifically prohibits it, and you yield the right-of-way to other vehicles and pedestrians lawfully within the intersection.",
        trap: "Entering on green while somebody is still clearing the box is the classic intersection crash, and the light is no defence.",
        excerptKey: "signal-solid-green",
        sourceLabel: "Iowa Driver's License Manual - 2.9 Traffic Signals",
        sourceUrl: hb(11),
      },
      {
        id: "ia_s3_30",
        topic: "sharing",
        question: "A car ahead of you in the next lane stops for a pedestrian at an Iowa crosswalk. What may you do?",
        choices: [
          "Pass carefully, since the pedestrian is in the other lane",
          "Pass if you sound your horn first",
          "Never pass a vehicle that has stopped or is slowing for a pedestrian",
          "Pass at no more than 20 mph",
        ],
        correctIndex: 2,
        explanation:
          "Iowa's rule is a flat prohibition. The stopped vehicle is hiding the pedestrian from you, and passing it puts your car exactly where they are about to step.",
        context:
          "The manual groups this with its other advice on people outside vehicles: scan for pedestrians, bicyclists, skaters and wheelchair users before turning at intersections and driveways, watch the pedestrian signal, and check your blind spots for a bicyclist coming up behind you before you turn right.",
        trap: "It looks like the other driver is being courteous rather than obeying a rule. Either way, what the stopped car is hiding is the reason not to pass it.",
        excerptKey: "never-pass-stopped-for-ped",
        sourceLabel: "Iowa Driver's License Manual - 5.11 Sharing the Road with Bicyclists and Pedestrians",
        sourceUrl: hb(58),
      },
      {
        id: "ia_s3_31",
        topic: "speed",
        question: "How much further does a vehicle at 60 mph travel before stopping than one at 30 mph, according to the Iowa manual?",
        choices: ["Twice as far", "Four times as far", "The same distance, but it takes twice as long", "Three times as far"],
        correctIndex: 3,
        explanation:
          "Three times as far. Doubling your speed does not double the distance, which is the whole point of the manual's stopping distance table.",
        context:
          "The table behind that claim runs from 69 feet at 20 mph to 464 feet at 70 mph. Reaction distance grows in proportion to speed - it is just how far you travel while you decide - but braking distance grows much faster, from 25 feet at 20 mph to 310 feet at 70.",
        trap: "The intuition is that distance scales with speed. It scales with roughly the square of it, which is why the gap you leave has to grow faster than your speed does.",
        excerptKey: "speed-60-vs-30",
        sourceLabel: "Iowa Driver's License Manual - 4.5 Appropriate Speed",
        sourceUrl: hb(42),
      },
      {
        id: "ia_s3_32",
        topic: "safety",
        question: "What does the Iowa manual say about backing a vehicle?",
        choices: [
          "Use the backup camera, which shows more than mirrors do",
          "Reverse quickly to spend less time exposed",
          "Rely on the rear cross-traffic alert if the vehicle has one",
          "Turn your head and look through the rear window; do not depend on mirrors or cameras alone",
        ],
        correctIndex: 3,
        explanation:
          "Iowa asks you to shift your hips, drape your right arm over the seat back and look over your right shoulder through the rear window. Mirrors and cameras do not give a full view and mislead on depth.",
        context:
          "That fits the manual's whole treatment of driver-assistance technology across eight pages: back-up warnings, cameras, blind spot monitors and rear cross-traffic alerts are all useful and none of them replaces mirrors, head checks and your own judgement. On the drive test you may use safety technologies such as a backup camera, but you have to demonstrate you can drive without them.",
        trap: "A camera is permitted equipment on the Iowa drive test, which is not the same as being enough on its own.",
        excerptKey: "backing-turn-head",
        sourceLabel: "Iowa Driver's License Manual - 4.7 Backing",
        sourceUrl: hb(43),
      },
      {
        id: "ia_s3_33",
        topic: "signs",
        question: "What is the blue sign posted on both sides of every Iowa railroad crossing for?",
        choices: [
          "It gives the crossing's speed limit",
          "It identifies the railroad company for insurance purposes",
          "It marks a crossing exempt from the stop requirement",
          "It is the Emergency Notification System sign, carrying a phone number and a crossing ID for reporting problems",
        ],
        correctIndex: 3,
        explanation:
          "The blue ENS sign is how you report a stalled vehicle, a malfunctioning signal, track damage or any other hazard directly to the railroad. It carries the number to call and a unique crossing identification number.",
        context:
          "It is the fastest way to stop a train, faster than 911, because it reaches the railroad's own dispatcher. The manual tells you to give the dispatcher the crossing ID, and to call 911 instead if there is no sign at all.",
        trap: "An EXEMPT sign is a different sign with a different job - it releases buses and hazmat vehicles from the stop requirement.",
        excerptKey: "ens-sign",
        sourceLabel: "Iowa Driver's License Manual - 2.2 Regulatory Signs",
        sourceUrl: hb(8),
      },
      {
        id: "ia_s3_34",
        topic: "impairment",
        question: "Under Iowa's implied consent law, who has agreed to testing?",
        choices: [
          "Only holders of an Iowa driver's licence",
          "Only drivers who have a previous OWI conviction",
          "Nobody; consent must be given at the roadside each time",
          "Iowa licence holders and non-resident drivers travelling in the state",
        ],
        correctIndex: 3,
        explanation:
          "Holding an Iowa licence carries implied consent under Iowa Code Section 321J.6, and the manual notes the same law reaches non-resident drivers travelling in the state.",
        context:
          "That is why refusal is treated as a breach of an agreement rather than as silence: the consequence is administrative, an automatic one-year revocation and a minimum $1,250 fine, and it lands whether or not the OWI charge succeeds. A court may add a substance use disorder evaluation or an ignition interlock at your expense.",
        trap: "An out-of-state licence does not put you outside the law. Driving on Iowa roads is what brings you inside it.",
        excerptKey: "implied-consent",
        sourceLabel: "Iowa Driver's License Manual - 3.8 Alcohol and Drugs",
        sourceUrl: hb(37),
      },
      {
        id: "ia_s3_35",
        topic: "rules",
        question: "In an Iowa bicycle lane marked by a solid white line, when may a motorist drive?",
        choices: [
          "Only when making a turning movement, after looking beside and behind for bicyclists",
          "Whenever the lane is empty",
          "When traffic in the main lane is stopped",
          "Never, under any circumstances",
        ],
        correctIndex: 0,
        explanation:
          "Turning movements are the only permitted use, and even then you look beside and behind your vehicle for bicyclists and cross with care.",
        context:
          "Iowa's bike lanes are marked by solid white lines with bicycle symbols, and some are separated further by double white lines, curbs, posts or planters. Where a lane is filled with green paint, drivers should pay close attention before crossing it and should not stop on it. Shared lane markings, or sharrows, are different again - they do not reserve any part of the road for bicycles.",
        trap: "\"Never\" is the neat answer and it is wrong. Turning across a bike lane is exactly what the exception is for.",
        excerptKey: "bike-lane-driving",
        sourceLabel: "Iowa Driver's License Manual - 2.19 Bicycle Lanes and Pavement Markings",
        sourceUrl: hb(17),
      },
    ],
  },
];
