import type { DrivingTestSet } from "../types";

// Every fact below was checked against the Vermont Driver's Manual, 2025
// edition, form VN-007, published by the Vermont Department of Motor Vehicles
// (Agency of Transportation), plus the sections of Title 23 of the Vermont
// Statutes that carry rules the manual states incompletely or not at all.
//
// The manual is 76 pages and unusually complete on the rules of the road, but
// four gaps matter, because the DMV writes a 20-question test from it:
//
// 1. The manual lists where you may not park but prints no distances at all -
//    the six-foot hydrant, the 20-foot crosswalk, the 30-foot stop sign and
//    the 50-foot railroad crossing all come from 23 V.S.A. 1104.
// 2. The manual gives the 100-foot signalling distance in one clause and never
//    returns to it; 23 V.S.A. 1064(d) is the operative rule.
// 3. The manual says a stop is required at a school bus with red lights but
//    never gives a distance, a fine or the exact exception. 23 V.S.A. 1075
//    supplies the rule, and its exception is a separate roadway, not a painted
//    line.
// 4. The manual never states the DUI suspension lengths, the liability
//    minimums beyond one sentence, or the motorcycle helmet requirement.
//    23 V.S.A. 1206, 23 V.S.A. 800 and 23 V.S.A. 1256 do.
//
// Two genuine conflicts are flagged where they arise. On the move-over law the
// manual tells a driver who cannot change lanes to slow to 20 mph below the
// speed limit, while 23 V.S.A. 1050(b) requires only a reasonable, safe and
// prudent speed with no figure; the questions here are built on the duty both
// state, and the 20 mph figure is asked as the manual's own instruction.
// Separately, 23 V.S.A. 1022 permits a left on red from a one-way street into
// a one-way street after stopping, which the manual never mentions; no
// question turns on that permission.
//
// Questions are original. Explanations, context notes and trap notes are
// written from scratch; the deep link is there so the learner reads the DMV's
// own authoritative wording on the state's site.
const HB = "https://dmv.vermont.gov/sites/dmv/files/documents/VN-007-Drivers_Manual.pdf";
const hb = (page: number) => `${HB}#page=${page}`;
const vsa = (section: string) =>
  `https://legislature.vermont.gov/statutes/section/23/013/${section}`;

export const vermontSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Vermont Basics",
    difficulty: "starter",
    description:
      "The rules you meet on your first drive in Vermont: what the shapes and colours mean, who goes first, and the handful of numbers the DMV's 20-question online permit test expects you to know cold.",
    questions: [
      {
        id: "vt_s1_01",
        topic: "signs",
        question:
          "You come to a red eight-sided sign at an intersection. What does Vermont require?",
        choices: [
          "Slow to a crawl and continue if nothing is coming",
          "Stop only when another vehicle is close enough to matter",
          "Come to a full stop at the stop line, or at the crosswalk or intersecting road if there is no line",
          "Yield to traffic on the busier road, then proceed",
        ],
        correctIndex: 2,
        explanation:
          "The octagon means a complete stop, and the manual is specific about where: the stop line first, then the crosswalk whether it is painted or not, then the intersecting road. Once stopped you scan the intersection and give way before moving.",
        context:
          "Vermont teaches signs by shape and colour before wording, because the shape is readable in snow, glare or a language you do not read. The octagon is reserved for STOP and nothing else, the upside-down triangle for YIELD, and a yellow diamond warns of something ahead. Learning the system beats memorising pictures, since the test draws on signs the manual never illustrates.",
        trap:
          "A rolling stop is not a stop. Vermont also counts an UNMARKED crosswalk as a stopping point, so an intersection with no paint still has a line you must stop behind.",
        excerptKey: "sign-stop-where",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Road Signs",
        sourceUrl: hb(33),
      },
      {
        id: "vt_s1_02",
        topic: "signals",
        question:
          "You are stopped at a steady red light in Vermont and want to turn right. What does the manual allow?",
        choices: [
          "Turn right after a complete stop, unless a sign forbids it, yielding to pedestrians and other vehicles",
          "Turn right without stopping if the way is clear",
          "Turn right only where a sign expressly permits it",
          "Turn right only once a green arrow appears",
        ],
        correctIndex: 0,
        explanation:
          "Right on red is the Vermont default rather than a special permission, and two things attach to it. You must actually stop first, and a sign or symbol banning the turn overrides the default. Having stopped, you still give way to everyone already there.",
        context:
          "The manual describes the turn as usually allowed, which is its way of saying the permission can be taken away sign by sign. Many signalised intersections carry a No Turn On Red sign that lights up only while pedestrians are crossing, and a red ARROW removes the permission entirely rather than merely restricting it.",
        trap:
          "\"Nothing was coming\" is not the test. If the wheels never stopped turning, the turn was unlawful even on an empty street at 3am.",
        excerptKey: "signal-right-on-red",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Traffic Lights",
        sourceUrl: hb(32),
        commonlyMissed: true,
      },
      {
        id: "vt_s1_03",
        topic: "rightOfWay",
        question:
          "Two vehicles reach a four-way stop at about the same moment, at right angles to each other. Who yields?",
        choices: [
          "Whoever signals first",
          "The driver on the left yields to the driver on the right",
          "The driver going straight, ahead of anyone turning",
          "The driver on the right yields, because they have the shorter path",
        ],
        correctIndex: 1,
        explanation:
          "Vermont's tie-breaker is the driver on the right. It only comes into play when arrival is genuinely simultaneous, because the manual's first rule is that the vehicle which arrives first has the right of way.",
        context:
          "The manual sets right of way out as a short numbered list, and the first four entries handle intersections: yield to anyone already in it, slow enough at a yield sign to stop if needed, first to arrive goes, and the driver on the left gives way when two arrive together. 23 V.S.A. 1046 states the same right-hand rule in law for any intersection, not just a four-way stop.",
        trap:
          "Going straight does not outrank turning at a four-way stop. Order of arrival decides it, and the right-hand rule only breaks a tie.",
        excerptKey: "row-four-way-tie",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Right-of-way",
        sourceUrl: hb(29),
        commonlyMissed: true,
      },
      {
        id: "vt_s1_04",
        topic: "rules",
        question:
          "What following distance does the Vermont Driver's Manual teach in good conditions?",
        choices: [
          "Two seconds",
          "Three seconds",
          "One car length for every 10 mph",
          "Four seconds",
        ],
        correctIndex: 3,
        explanation:
          "Vermont's figure is four seconds, not the three seconds most neighbouring states teach. You pick a fixed object ahead, start counting when the vehicle in front passes it, and you should still be counting when your own front bumper gets there.",
        context:
          "The manual spells the count out step by step and then repeats the four-second figure everywhere it matters: work zones, motorcycles, slow-moving farm equipment, horses on the road, and winter driving. In rain, snow, poor visibility or at higher speeds it tells you to allow more than four.",
        trap:
          "Three seconds is the answer almost every other state's handbook gives, which is exactly why it is the tempting wrong answer here. Vermont teaches four.",
        excerptKey: "follow-four-seconds",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Four Seconds - A Safe Following Distance",
        sourceUrl: hb(28),
        commonlyMissed: true,
      },
      {
        id: "vt_s1_05",
        topic: "speed",
        question:
          "You are on a rural Vermont road with no speed limit sign anywhere in sight. What is the maximum?",
        choices: ["55 mph", "50 mph", "45 mph", "65 mph"],
        correctIndex: 1,
        explanation:
          "Vermont's statewide maximum is 50 mph unless a sign says otherwise. The manual states it in one line and 23 V.S.A. 1081 sets the same number in law, so an unposted road is a 50 mph road.",
        context:
          "Vermont's default sits below almost every other state's, which catches out drivers who arrive expecting 55. The only higher figure the manual gives is 65 mph on the Interstate, again unless posted otherwise. Underneath both sits the basic rule: whatever the sign says, you must still drive at a speed that is reasonable for the conditions in front of you.",
        trap:
          "55 mph is the rural default in most of the country and is wrong here. Vermont is a 50 mph state.",
        excerptKey: "speed-50-default",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Speed Limits and Safe Speeds",
        sourceUrl: hb(29),
        commonlyMissed: true,
      },
      {
        id: "vt_s1_06",
        topic: "safety",
        question: "When does Vermont law require your headlights to be on?",
        choices: [
          "Only when it is fully dark",
          "From sunset to sunrise",
          "From half an hour after sunset to half an hour before sunrise",
          "Only when street lights are lit",
        ],
        correctIndex: 2,
        explanation:
          "The manual gives the window as a half hour after sunset to a half hour before sunrise, and 23 V.S.A. 1243 states the same period in law. The dimmest, most dangerous part of dusk falls inside that window.",
        context:
          "There is a second trigger that has nothing to do with the clock: any time people or vehicles are not clearly visible 500 feet ahead, headlights are required. That is what covers fog, heavy rain and snow squalls in the middle of the afternoon. The manual's own advice goes further and tells you to drive on low beams in daylight too.",
        trap:
          "Daytime running lights are not headlights. They light the front only, leave your tail lights dark, and the manual warns they give drivers the false impression the headlights are on.",
        excerptKey: "light-half-hour-rule",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Night Driving",
        sourceUrl: hb(50),
      },
      {
        id: "vt_s1_07",
        topic: "signs",
        question: "What does an upside-down triangle sign mean in Vermont?",
        choices: [
          "Stop and wait for a signal",
          "Merging traffic ahead",
          "No entry for the vehicle you are driving",
          "Slow down, search, and enter only when the way is clear",
        ],
        correctIndex: 3,
        explanation:
          "The downward-pointing triangle is YIELD. The manual asks for three things in order: slow down, look, and enter only if the way is clear of pedestrians, bicyclists and vehicles.",
        context:
          "Yielding is not the same as stopping. Vermont's rule is that you approach slowly enough to stop if you have to, and 23 V.S.A. 1048 adds a sharp consequence: if you drive past a yield sign without stopping and then collide with someone in the intersection, that collision is treated as evidence you failed to yield.",
        trap:
          "A yield sign does not always mean stop, and it never means keep your speed up. It means arrive slow enough that stopping is still an option.",
        excerptKey: "sign-yield-shape",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Road Signs",
        sourceUrl: hb(33),
      },
      {
        id: "vt_s1_08",
        topic: "signals",
        question: "A traffic signal ahead is flashing red. What must you do?",
        choices: [
          "Treat it as a stop sign: stop, then proceed after yielding",
          "Slow down and pass through without stopping",
          "Stop and wait for the light to turn green",
          "Treat it as a yield sign",
        ],
        correctIndex: 0,
        explanation:
          "The manual says a flashing circular red is like a stop sign. You come to a full stop, then move off only after yielding to every pedestrian, bicyclist and vehicle with a prior claim.",
        context:
          "Flashing signals come in two flavours and they are not interchangeable. Flashing red is stop-then-yield; flashing yellow means slow down, scan, and proceed with caution, yielding to oncoming traffic before any left turn. A signal that has gone completely dark in a power cut is different again: the manual tells you to treat the intersection as if it had stop signs on every approach.",
        trap:
          "A flashing red never turns green on its own. Waiting for green there means sitting at an intersection nobody is going to release you from.",
        excerptKey: "signal-flashing-red",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Traffic Lights",
        sourceUrl: hb(33),
      },
      {
        id: "vt_s1_09",
        topic: "parking",
        question:
          "You are parking on a two-lane Vermont street with a curb. How close to the curb must your wheels be?",
        choices: [
          "Within 18 inches",
          "Within 12 inches",
          "Within 6 inches",
          "Close enough not to obstruct traffic",
        ],
        correctIndex: 1,
        explanation:
          "The manual gives 12 inches for the right wheels on a two-lane road, and the same 12 inches on a one-way street. Your vehicle also has to face the same direction as the traffic flow beside it.",
        context:
          "Vermont's parking rules are split between two documents. The manual gives the positioning - 12 inches from the curb, facing with traffic, all four wheels off the traveled portion on a rural highway, and never where you cannot be seen for 150 feet in either direction. The distances from hydrants, crosswalks and crossings come from 23 V.S.A. 1104 instead.",
        trap:
          "Facing the wrong way is a violation even when the wheels are tucked in perfectly. Parking against the flow of traffic means crossing the centre line to get there, which the manual forbids outright.",
        excerptKey: "park-12-inches",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Parking Your Vehicle",
        sourceUrl: hb(30),
      },
      {
        id: "vt_s1_10",
        topic: "sharing",
        question:
          "A school bus ahead of you stops and switches on its alternately flashing RED lights. What must you do?",
        choices: [
          "Pass slowly on the left if no children are visible",
          "Sound your horn and pass with care",
          "Stop, and stay stopped while the red lights are flashing",
          "Slow to 20 mph and continue past",
        ],
        correctIndex: 2,
        explanation:
          "Red flashing lights mean stop, from either direction, and stay stopped until they go out. 23 V.S.A. 1075 puts it plainly: stop immediately and keep the vehicle stationary while the red lights are operating.",
        context:
          "The lights work in a sequence, and the yellow half is the useful warning. Alternately flashing yellow lights mean the bus is about to stop and you should be preparing to stop too; once the red lights come on, stopping is compulsory. The manual notes that the rule applies even inside a school yard, and that passing a stopped bus with its lights on costs a substantial fine and five points.",
        trap:
          "Amber lights are not a green light to hurry past. They are your notice that a red-light stop is seconds away.",
        excerptKey: "bus-red-means-stop",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Sharing the Road with School Buses",
        sourceUrl: hb(41),
      },
      {
        id: "vt_s1_11",
        topic: "impairment",
        question:
          "At what blood alcohol concentration does Vermont law treat a driver aged 21 or over as under the influence?",
        choices: ["0.05", "0.10", "0.02", "0.08"],
        correctIndex: 3,
        explanation:
          "Vermont's legal threshold is .08. The manual states it directly and then adds the point people miss: a driver is genuinely impaired well below .08, and even one drink affects judgment.",
        context:
          "There is a much lower number for younger drivers. Anyone under 21 who operates with an alcohol concentration of .02 or more can be given a civil traffic violation, have the licence suspended, and be required to complete an alcohol and driving education course at their own expense. Commercial drivers and school bus drivers face their own lower limits under 23 V.S.A. 1201.",
        trap:
          "Being under .08 is not a defence. Vermont can prosecute for being under the influence on the evidence of your driving alone, whatever a breath figure says.",
        excerptKey: "dui-bac-08",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Impaired Driving",
        sourceUrl: hb(53),
      },
      {
        id: "vt_s1_12",
        topic: "licensing",
        question: "What is the minimum age to take the Vermont Learner's Permit test?",
        choices: ["14", "15", "16", "15 and a half"],
        correctIndex: 1,
        explanation:
          "You must be at least 15 to take the permit test. If you are 15, 16 or 17 a parent or legal guardian has to sign the application before you are allowed to sit it.",
        context:
          "Vermont then makes the permit do real work before it turns into anything else. An applicant under 18 needs a clean driving record for the previous two years to get the permit at all, and must hold it for a full year before a Junior Driver's License is possible. The permit test itself is no longer taken at a DMV counter; it runs online through mydmv.vermont.gov.",
        trap:
          "Turning 15 is not the same as being ready to drive alone. A permit only lets you drive with a licensed, unimpaired parent, guardian, driver education instructor or someone 25 or over in the front seat.",
        excerptKey: "permit-age-15",
        sourceLabel: "Vermont Driver's Manual - Chapter 4 Questions and Answers about Learner's Permits",
        sourceUrl: hb(13),
      },
      {
        id: "vt_s1_13",
        topic: "rules",
        question: "How far ahead of a turn or lane change does Vermont law require you to signal?",
        choices: [
          "Not less than 100 feet",
          "Not less than 50 feet",
          "Not less than 200 feet",
          "Whenever it feels safe to do so",
        ],
        correctIndex: 0,
        explanation:
          "The legal distance is 100 feet, stated in the manual and set out in 23 V.S.A. 1064. The manual then translates it into something you can actually judge at the wheel: signalling three to five seconds ahead covers the requirement.",
        context:
          "The signal is a warning, not a running commentary, so it goes on before you start slowing down. The same section of the statute requires a signal before you materially slacken speed, and if your indicators or brake lights have failed you must use hand signals until they are repaired - the manual says such lights must be fixed immediately.",
        trap:
          "Signalling as you begin the turn is too late. By then the driver behind is already reacting to your brake lights rather than your intention.",
        excerptKey: "signal-100-feet",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Signals",
        sourceUrl: hb(27),
      },
      {
        id: "vt_s1_14",
        topic: "signs",
        question: "You see a yellow diamond-shaped sign beside a Vermont road. What is it telling you?",
        choices: [
          "A law you must obey at that exact point",
          "A service or facility is available ahead",
          "There is a hazard ahead and you should slow down",
          "The road ahead is closed",
        ],
        correctIndex: 2,
        explanation:
          "Diamond-shaped signs, usually yellow or green, are warnings. The manual says they are placed where danger exists at all times and that a driver needs to slow down for what is coming.",
        context:
          "Warning signs often carry extra detail: a safe speed for a curve, or a distance such as a deer crossing running for the next three miles. A downward arrow underneath a school or pedestrian sign marks the crossing point itself. Regulatory signs are the other family - rectangular with a white background, telling you what you must or must not do.",
        trap:
          "A yellow diamond is advice about a hazard, not an order about behaviour. The rectangular white signs are the ones that carry legal commands like speed limits and turn restrictions.",
        excerptKey: "sign-warning-purpose",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Warning Signs",
        sourceUrl: hb(34),
      },
      {
        id: "vt_s1_15",
        topic: "rightOfWay",
        question:
          "You are waiting in an intersection to turn left. A car is coming towards you and a cyclist is riding behind it. Who has the right of way?",
        choices: [
          "You, because you arrived at the intersection first",
          "The car, but not the cyclist",
          "You, once the oncoming car has passed",
          "Both the oncoming car and the cyclist",
        ],
        correctIndex: 3,
        explanation:
          "A left turn yields to everything coming the other way. The manual is explicit that any vehicle coming toward you, whether a motor vehicle or a bicyclist, has the right of way.",
        context:
          "Vermont singles the cyclist out because turning left across an oncoming bike is one of the four collision types the manual lists as most often caused by drivers. Cyclists close faster than people expect and are easy to lose against a background of parked cars. 23 V.S.A. 1047 adds a second duty: a left turn must be made at a safe distance from any vulnerable user, with a civil penalty of at least $200 for getting it wrong.",
        trap:
          "Arriving first buys you nothing on a left turn. The rule is about direction of travel, not order of arrival.",
        excerptKey: "row-oncoming-bicyclist",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Right-of-way",
        sourceUrl: hb(29),
        commonlyMissed: true,
      },
      {
        id: "vt_s1_16",
        topic: "safety",
        question: "Who must be restrained in a vehicle under Vermont law?",
        choices: [
          "Front-seat occupants only",
          "Everyone under 18",
          "All occupants of the vehicle",
          "The driver, and any passenger who is not asleep",
        ],
        correctIndex: 2,
        explanation:
          "The manual states the rule without exceptions: all occupants of a motor vehicle must be restrained by a safety belt or a federally approved child restraint. Back seat included.",
        context:
          "Two statutes sit behind that one sentence. 23 V.S.A. 1259 covers everyone 18 and over and is enforced only after a stop for something else, with a $25 penalty for a first violation. 23 V.S.A. 1258 covers everyone under 18 and steps through the child seat ages. A learner or junior driver has a third rule on top: never more passengers than there are belts.",
        trap:
          "Tucking the shoulder belt behind your back or under your arm is not wearing it. The manual says the belt is designed to cross the strongest points of your body and only works there.",
        excerptKey: "belt-all-occupants",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Safety Belts",
        sourceUrl: hb(63),
      },
      {
        id: "vt_s1_17",
        topic: "speed",
        question: "What is the maximum speed on a Vermont Interstate unless a sign says otherwise?",
        choices: ["70 mph", "60 mph", "55 mph", "65 mph"],
        correctIndex: 3,
        explanation:
          "The manual gives 65 mph as the Interstate maximum, or whatever is posted. It is the only figure above the statewide 50 mph default anywhere in the book.",
        context:
          "The Interstate has its own chapter in the manual because the mistakes it invites are different: entering without matching speed, stopping in a live lane, backing up after a missed exit. The 4-second rule still applies, and the manual tells you to stay in the right lane unless you are passing or a sign says otherwise.",
        trap:
          "Nothing in Vermont is signed at 70. Assuming the Interstate matches a neighbouring state's limit is how out-of-state drivers collect tickets here.",
        excerptKey: "speed-interstate-65",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Speed Limits and Safe Speeds",
        sourceUrl: hb(29),
      },
      {
        id: "vt_s1_18",
        topic: "signals",
        question:
          "The light turns green and you want to turn left. Oncoming traffic also has a green. What do you do?",
        choices: [
          "Yield to the oncoming vehicles, then turn when there is a safe gap",
          "Turn immediately, because a green light gives you the right of way",
          "Wait until the light turns yellow, then turn",
          "Move into the intersection and force a gap",
        ],
        correctIndex: 0,
        explanation:
          "A green light gives permission to proceed, not priority over oncoming traffic. The manual says that if you are turning left you must yield the right of way to oncoming vehicles, and then turn when it is genuinely safe.",
        context:
          "Vermont marks the confusing intersections with a left turn yield on green light sign hung near the signal. A flashing yellow ARROW carries the same meaning in signal form: you may turn left after yielding to all oncoming traffic and any pedestrians, because the oncoming side has a green. Only a solid green arrow means the oncoming side is held on red.",
        trap:
          "Green does not mean go. It means go if it is safe, and on a left turn that decision belongs to the gap in oncoming traffic, not the colour of the lamp.",
        excerptKey: "signal-green-left-yield",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Traffic Lights",
        sourceUrl: hb(32),
      },
      {
        id: "vt_s1_19",
        topic: "emergencies",
        question:
          "You hear a siren and see flashing blue lights approaching from behind. What does Vermont's Move Over Law require?",
        choices: [
          "Speed up until you find a side street to turn into",
          "Slow down and stay in your lane so the vehicle can pass on the left",
          "Pull to the right side of the road and stop until it has gone by",
          "Move to the left lane and continue at the same speed",
        ],
        correctIndex: 2,
        explanation:
          "For an emergency vehicle that is moving, the rule is pull right and stop. The manual says you must remain stopped until the emergency or law enforcement vehicle has gone by, whichever direction it came from.",
        context:
          "There is a second, separate rule for a vehicle already stopped at the roadside with its lights on. There you proceed with caution and, on a four-lane road such as the Interstate, change lanes away from it if you safely can. The manual adds that if you cannot change lanes you must slow to 20 mph below the speed limit to get past, and the same care applies to snowploughs, maintenance vehicles and amber-lit tow trucks.",
        trap:
          "Stopping in the middle of an intersection to let a siren through blocks the route it needs. Clear the intersection first, then pull right and stop.",
        excerptKey: "moveover-pull-right-stop",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Move Over Law",
        sourceUrl: hb(32),
      },
      {
        id: "vt_s1_20",
        topic: "sharing",
        question: "How much space must you leave when passing a bicyclist in Vermont?",
        choices: ["At least three feet", "At least four feet", "At least two feet", "One full lane"],
        correctIndex: 1,
        explanation:
          "Vermont's figure is four feet. The manual asks for at least four feet of passing space between the right side of your vehicle and the bicyclist, and 23 V.S.A. 1033 makes it a legal duty carrying a civil penalty of at least $200.",
        context:
          "If the road is too narrow to leave four feet, the rule is not to squeeze through: you wait until it is safe to pass without forcing the rider off the edge. Two cyclists may lawfully ride side by side in Vermont so long as they do not impede traffic, and a rider may take the centre of the lane when hazards make the edge unsafe. The same four-foot clearance appears again in the manual's general passing rules.",
        trap:
          "Three feet is the figure most states use and is the wrong answer here. Vermont asks for four, and the statute attaches a penalty to it.",
        excerptKey: "bike-four-feet",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Sharing the Road with Bicyclists",
        sourceUrl: hb(41),
        commonlyMissed: true,
      },
      {
        id: "vt_s1_21",
        topic: "rules",
        question: "On a Vermont road with two lanes running in your direction, which lane should you normally use?",
        choices: [
          "Either lane, as long as you keep a steady speed",
          "The left lane, keeping the right free for slower traffic",
          "Whichever lane has fewer vehicles in it",
          "The right lane, unless you are passing or turning",
        ],
        correctIndex: 3,
        explanation:
          "The manual states the basic rule of multilane driving in one line: drive to the right unless you are passing or turning. 23 V.S.A. 1031 says the same thing in law.",
        context:
          "The rule follows you onto the Interstate, where the manual repeats that you should be in the right lane unless passing or a sign directs otherwise. It also shapes turns: turning from one multilane road onto another, you enter the nearest lane going your way, and you stay in your own turning path all the way through rather than drifting across.",
        trap:
          "Cruising in the left lane at the limit is still wrong. The lane is for passing and turning, not for sitting in because you are already at the posted speed.",
        excerptKey: "turn-drive-right-basic-rule",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Right Turns",
        sourceUrl: hb(28),
      },
      {
        id: "vt_s1_22",
        topic: "signs",
        question: "What does a white X-shaped sign with the words RAILROAD CROSSING mark?",
        choices: [
          "The point where the tracks cross the road",
          "A place where trains have priority only at night",
          "A crossing that has been closed to traffic",
          "A siding where trains are stored",
        ],
        correctIndex: 0,
        explanation:
          "The crossbuck marks where the tracks are, and the manual says crossbucks are at all railroad crossings. Approaching one you slow down, look both ways and listen before crossing.",
        context:
          "A small sign under the crossbuck counts the tracks, and it matters: with two or more, one passing train can hide another coming the other way. Vermont law requires a full stop not less than 15 feet from the nearest rail when lights are flashing, a gate is down, a flagman signals, you see or hear a train, or there is a stop sign at the crossing. Driving around a closed gate is a separate offence.",
        trap:
          "The round yellow sign with the black X and two Rs is a different sign. That one warns you a crossing is ahead; the crossbuck marks the tracks themselves.",
        excerptKey: "sign-crossbuck",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Road Signs",
        sourceUrl: hb(34),
      },
      {
        id: "vt_s1_23",
        topic: "safety",
        question: "Your car begins to skid on an icy Vermont road. What does the manual tell you to do?",
        choices: [
          "Brake hard to stop the vehicle as quickly as possible",
          "Steer in the direction you want the vehicle to go, without braking",
          "Turn the wheel the opposite way to the skid and hold it",
          "Pull the parking brake to slow the rear wheels",
        ],
        correctIndex: 1,
        explanation:
          "The manual gives one recovery for both front and rear-wheel drive: do not hit the brakes, and steer where you want the vehicle to go. You may need to steer left and right a few times before it settles.",
        context:
          "Vermont's advice on avoiding the skid in the first place is just as testable. Slow down before the slippery stretch, make no sudden changes in speed or direction, lift off the accelerator to shed speed, and if you need more, squeeze the brakes with slow steady pressure and ease off if the wheels start to lock. With anti-lock brakes it is the opposite instinct: hold steady pressure and do not pump.",
        trap:
          "Braking hard is the reflex and it makes the skid worse. The manual's first instruction is not to hit the brakes at all.",
        excerptKey: "skid-recover-steer",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 How to Control a Vehicle in a Skid",
        sourceUrl: hb(49),
      },
      {
        id: "vt_s1_24",
        topic: "parking",
        question: "You are parking on a hill in Vermont. What does the manual require?",
        choices: [
          "Leave the vehicle in neutral so it can be pushed if needed",
          "Park with the wheels straight and rely on the transmission",
          "Turn the front wheels and set the parking brake",
          "Chock a wheel with anything to hand",
        ],
        correctIndex: 2,
        explanation:
          "Two actions, every time: turn the front wheels and set the parking brake. The point is that if anything lets go, the vehicle rolls into the kerb rather than into traffic.",
        context:
          "Which way the wheels point depends on the slope and whether there is a kerb, and the manual illustrates the cases for parking on the right-hand side. The same parking brake gets tested on the road test itself, where the examiner has you stop and start on a hill and the brake must hold the vehicle from rolling back.",
        trap:
          "Relying on Park or on the gears alone is what the manual is written against. The brake and the wheel angle are the two things that stop a rollaway becoming somebody else's crash.",
        excerptKey: "park-hills-wheels-and-brake",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Parking on Hills",
        sourceUrl: hb(30),
      },
      {
        id: "vt_s1_25",
        topic: "rightOfWay",
        question:
          "A pedestrian is crossing in a marked crosswalk at an intersection with no traffic signal. What does Vermont law require of you?",
        choices: [
          "Sound your horn to warn them and continue",
          "Continue if you can pass behind them",
          "Yield, slowing down or stopping if necessary",
          "Yield only if they are already past the centre line",
        ],
        correctIndex: 2,
        explanation:
          "23 V.S.A. 1051 puts the duty on the driver: where signals are not in operation, you yield to a pedestrian crossing within a crosswalk, slowing down or stopping if that is what it takes.",
        context:
          "The statute adds a rule that catches out drivers in the second lane. If any vehicle is stopped at a crosswalk to let someone cross, a driver approaching from behind may not overtake and pass it. The manual calls that manoeuvre a frequent cause of pedestrian deaths and tells you not to do it even where two lanes are available.",
        trap:
          "Even a pedestrian who stepped out carelessly still has to be given way to. The manual says so in as many words: even when pedestrians cross the street carelessly, the driver must yield.",
        excerptKey: "ped-statute-crosswalk-yield",
        sourceLabel: "23 V.S.A. 1051 - Pedestrians' right of way in crosswalks",
        sourceUrl: vsa("01051"),
        commonlyMissed: true,
      },
      {
        id: "vt_s1_26",
        topic: "impairment",
        question: "What is the only thing that reduces the effects of alcohol?",
        choices: ["Coffee", "A cold shower", "Time", "Food and exercise"],
        correctIndex: 2,
        explanation:
          "The manual says it twice, in almost the same words: time is the only way to reduce the effects of alcohol. Coffee, a shower and exercise change how awake you feel and nothing else.",
        context:
          "The manual attaches a rough figure so you can plan: at least an hour per drink for the alcohol and its effects to be processed out of your body, which can mean waiting several hours. That is why the advice is to decide before you start drinking - a designated driver who does not drink at all, a ride home arranged in advance, or your keys left with someone who will not give them back.",
        trap:
          "Feeling sober and being sober are different states. Alcohol suppresses your sense of speed and your judgment first, so the driver who feels fine is exactly the one who cannot assess it.",
        excerptKey: "dui-time-only-way",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Impaired Driving",
        sourceUrl: hb(54),
      },
      {
        id: "vt_s1_27",
        topic: "rules",
        question:
          "You reach a stop sign at an intersection where the crosswalk is not painted. Where do you stop?",
        choices: [
          "Level with the stop sign post",
          "Before the unmarked crosswalk, or the intersecting road if there is none",
          "Wherever you can see both ways along the cross street",
          "At the edge of the pavement, since there is no crosswalk to protect",
        ],
        correctIndex: 1,
        explanation:
          "Vermont counts an unmarked crosswalk as a real stopping point. The manual's order is the stop line first, then the crosswalk whether marked or unmarked, then the intersecting road, whichever comes first.",
        context:
          "23 V.S.A. 1048 adds what happens after the stop. Having stopped where you should, you then yield to any vehicle already in the intersection or close enough to be an immediate hazard while you are crossing it. Stopping in the right place and yielding afterwards are two separate duties, and passing the first does not excuse the second.",
        trap:
          "Rolling forward to the corner for a better view undoes the stop. If you need a second look, stop where the rule says, then edge out from there.",
        excerptKey: "sign-stop-where",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Road Signs",
        sourceUrl: hb(33),
      },
      {
        id: "vt_s1_28",
        topic: "signals",
        question: "A steady yellow light appears as you approach an intersection. What is it telling you?",
        choices: [
          "Speed up to clear the intersection before the red",
          "The light is about to turn red",
          "Traffic from the side street is being released",
          "Stop immediately wherever you are",
        ],
        correctIndex: 1,
        explanation:
          "Yellow is a warning that red is coming. The manual's instruction is to stop if you can do so safely, and to proceed with caution through the intersection only if you are already too close to stop safely.",
        context:
          "The yellow ARROW carries the same message for a left turn: the turn signal is about to go red, so prepare to stop, or complete the turn if you are already legally inside the intersection and nothing is in the way. A red arrow that follows means stop and wait, and unlike a circular red it never permits a turn.",
        trap:
          "Accelerating on yellow is the manoeuvre the phase exists to prevent. It puts you into the intersection exactly when the cross traffic is being released.",
        excerptKey: "signal-yellow",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Traffic Lights",
        sourceUrl: hb(32),
      },
      {
        id: "vt_s1_29",
        topic: "safety",
        question: "Fog closes in on a Vermont road in daylight. Which lights should you use?",
        choices: [
          "High beams, for the extra reach",
          "Hazard lights while you keep moving",
          "Parking lights",
          "Low beam headlights",
        ],
        correctIndex: 3,
        explanation:
          "Low beams. The manual says to use low beam headlights when visibility is poor in fog, heavy rain or heavy snow, and the law requires headlights any time you cannot clearly see people or vehicles 500 feet ahead.",
        context:
          "High beams make fog worse rather than better, because the light bounces back off the water droplets in front of you. The manual reserves high beam for open country with few other vehicles, and tells you to drop to low beam when approaching or following anyone, near street lights, or in fog. Parking lights are for a parked vehicle and nothing else.",
        trap:
          "Hazard lights on a moving vehicle hide your brake lights and your indicators. They belong on a vehicle that has stopped, not one still travelling.",
        excerptKey: "hazard-low-beams-fog",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Floods and Storms",
        sourceUrl: hb(47),
      },
      {
        id: "vt_s1_30",
        topic: "speed",
        question:
          "Rain has made a 50 mph Vermont road slick and visibility poor. What speed does the law expect?",
        choices: [
          "The posted 50 mph, since that is the legal limit",
          "A speed that is reasonable for the conditions, which may be well below 50",
          "Exactly 10 mph under the posted limit",
          "Whatever the traffic around you is doing",
        ],
        correctIndex: 1,
        explanation:
          "A posted limit is a ceiling for good conditions, not a target. The manual requires a speed that is reasonable for the dangers that exist, and 23 V.S.A. 1081 makes driving faster than is reasonable and prudent an offence in itself.",
        context:
          "The manual lists where this bites: intersections, curves, heavy traffic, construction zones, bad weather, and anywhere pedestrians or bicyclists are present. It then makes the point bluntly - sometimes even 10 miles per hour can be an unsafe speed. The statute adds the same list of places where you must drive at an appropriate reduced speed.",
        trap:
          "\"I was under the limit\" is not a defence in Vermont. You can be ticketed for driving too fast for conditions at a speed the sign allows.",
        excerptKey: "speed-statute-basic-rule",
        sourceLabel: "23 V.S.A. 1081 - Basic rule and maximum limits",
        sourceUrl: vsa("01081"),
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Core Rules of the Road",
    difficulty: "easy",
    description:
      "Lane discipline, signals and markings, parking distances, and the sharing-the-road rules Vermont writes down but most drivers only half remember.",
    questions: [
      {
        id: "vt_s2_01",
        topic: "parking",
        question: "How far from a fire hydrant may you park in Vermont?",
        choices: [
          "No closer than 15 feet",
          "No closer than 10 feet",
          "No closer than 6 feet",
          "No closer than 25 feet",
        ],
        correctIndex: 2,
        explanation:
          "Vermont's distance is six feet, set by 23 V.S.A. 1104. That is far shorter than the 15 feet almost every other state uses, and the manual's own parking list repeats the six-foot figure.",
        context:
          "The same statute holds the rest of the distances the test asks for: 20 feet from a crosswalk at an intersection, 30 feet on the approach to a flashing signal, stop sign or traffic light, 50 feet from the nearest rail of a railroad crossing, and 20 feet from a fire station driveway with 75 feet on the opposite side where signposted.",
        trap:
          "15 feet is the figure carried over from almost everywhere else and it is wrong here. Vermont's hydrant distance is six.",
        excerptKey: "park-statute-hydrant",
        sourceLabel: "23 V.S.A. 1104 - Stopping prohibited",
        sourceUrl: vsa("01104"),
        commonlyMissed: true,
      },
      {
        id: "vt_s2_02",
        topic: "rules",
        question:
          "There is a solid yellow line on your side of the centre and a broken yellow line on the other side. What does that mean for you?",
        choices: [
          "You may pass if the way ahead is clear",
          "You should not pass, but the driver on the other side may",
          "Neither side may pass",
          "Both sides may pass with care",
        ],
        correctIndex: 1,
        explanation:
          "The line on YOUR side governs you. A solid line in your lane means you should not pass; the broken line opposite means the traffic coming the other way is allowed to.",
        context:
          "The manual states the whole system in three sentences. Two solid lines, or a solid line, means do not pass. A solid line with a broken line in your lane means you may pass if it is clear ahead. A solid line in your lane with a broken line opposite means you stay put while the other side may go. 23 V.S.A. 1036 makes the signed no-passing zone a legal prohibition rather than advice.",
        trap:
          "People read the pair of lines as one instruction. It is two instructions, one for each direction, and only the one nearest you applies.",
        excerptKey: "marking-solid-in-your-lane",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Highway Markings",
        sourceUrl: hb(35),
        commonlyMissed: true,
      },
      {
        id: "vt_s2_03",
        topic: "signs",
        question: "What do rectangular signs with a white background tell a Vermont driver?",
        choices: [
          "A hazard is coming up",
          "Services are available at the next exit",
          "Something you must or must not do",
          "The road is under construction",
        ],
        correctIndex: 2,
        explanation:
          "White rectangles are regulatory signs. The manual says they indicate what things a driver must or must not do, and lists speed limits, turning rules and passing rules as their content.",
        context:
          "The families are worth learning as a set, because the test asks about signs the manual never pictures. Octagon means stop, downward triangle means yield, yellow or green diamond warns of a hazard, white rectangle carries a law, and orange diamonds and rectangles belong to work zones. If snow or dirt hides the wording, the shape still tells you which family you are looking at.",
        trap:
          "Orange rectangles are not the same family. Orange means a work zone, where the rules are temporary and the fines for speeding are doubled.",
        excerptKey: "sign-regulatory",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Regulatory Signs",
        sourceUrl: hb(35),
      },
      {
        id: "vt_s2_04",
        topic: "rightOfWay",
        question:
          "You are pulling out of a supermarket car park onto a Vermont road. Who yields?",
        choices: [
          "You yield to everything already on the road",
          "The road traffic yields, since you were there first",
          "Whoever is travelling more slowly yields",
          "Nobody: it is a shared-use area",
        ],
        correctIndex: 0,
        explanation:
          "Coming out of a driveway, alley, car park or T-intersection you give way to all traffic on the road. 23 V.S.A. 1049 extends that to vulnerable users, so cyclists and pedestrians on the highway are included.",
        context:
          "The manual lists this as one of its seven right-of-way rules, sitting alongside the duty to yield to anything already in an intersection and the rule that a left turn yields to everything oncoming. The unifying idea is that the traffic already established on the road keeps its priority and the driver joining it gives way.",
        trap:
          "A gap in the cars is not the whole picture. The statute names vulnerable users specifically, which means the cyclist on the shoulder and the pedestrian on the sidewalk you are crossing count too.",
        excerptKey: "row-statute-private-road",
        sourceLabel: "23 V.S.A. 1049 - Vehicle entering from private road",
        sourceUrl: vsa("01049"),
      },
      {
        id: "vt_s2_05",
        topic: "safety",
        question: "What minimum tyre tread depth does the Vermont Driver's Manual require?",
        choices: ["1/32 of an inch", "4/32 of an inch", "2/32 of an inch", "3/32 of an inch"],
        correctIndex: 2,
        explanation:
          "At least 2/32 of an inch. The manual adds that it is neither safe nor legal to keep using tyres once the tread is worn off or worn down to the wear bars.",
        context:
          "The manual gives you a field test for it: hold a penny with Lincoln's head pointing down into the deepest groove, and if you can see all of his head the tyre is finished. Vermont inspects every registered vehicle once a year, and a vehicle must also be inspected within 15 days of registration unless it already carries a valid Vermont sticker.",
        trap:
          "Tread that looks fine across most of the tyre can still be illegal. The measurement is the deepest groove, and the wear bars are the manufacturer's own warning that you have reached the limit.",
        excerptKey: "vehicle-tread-2-32",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Tires",
        sourceUrl: hb(61),
      },
      {
        id: "vt_s2_06",
        topic: "sharing",
        question:
          "You are following a motorcycle on a Vermont road. What following distance does the manual ask for?",
        choices: [
          "The same four seconds you would leave behind a car",
          "At least four seconds, and more than four where you can",
          "Two seconds, since motorcycles stop quickly",
          "One full car length for every 10 mph",
        ],
        correctIndex: 1,
        explanation:
          "The manual asks for at least a four-second space cushion behind a motorcycle and, in a separate line, tells you to allow more than four seconds. The reason is that riders often slow by downshifting or rolling off the throttle, which never lights a brake lamp.",
        context:
          "Several motorcycle habits look like carelessness and are not. Turn signals usually do not self-cancel, so a blinking indicator may be left over from a turn two blocks back. Riders move around within the lane to stay visible and to dodge debris. A motorcycle is entitled to a full lane, and passing one means changing lanes completely rather than sharing.",
        trap:
          "A motorcycle's stopping distance is roughly the same as a car's, so the extra space is not about braking power. It is about the warning you do not get.",
        excerptKey: "moto-four-second-cushion",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Sharing the Road with Motorcycles",
        sourceUrl: hb(43),
      },
      {
        id: "vt_s2_07",
        topic: "signals",
        question:
          "You approach a signal displaying a flashing yellow ARROW for your left turn. What does it permit?",
        choices: [
          "Turn left after yielding to oncoming traffic and pedestrians",
          "Turn left with priority over oncoming traffic",
          "Stop and wait for a green arrow before turning",
          "Turn left only if you have already entered the intersection",
        ],
        correctIndex: 0,
        explanation:
          "A flashing yellow arrow allows the turn but gives you no priority. The oncoming side has a green light, so you wait for a safe gap and yield to any pedestrian in the crosswalk before you go.",
        context:
          "The four arrow states form a ladder. Solid green arrow: you have priority and the oncoming side is stopped. Flashing yellow arrow: you may turn after yielding. Solid yellow arrow: the turn phase is ending, so stop or finish a turn you are legally committed to. Solid red arrow: stop and wait, and do not enter the intersection at all.",
        trap:
          "The flashing yellow arrow feels like a protected turn because a signal is pointing your way. It is the opposite: the arrow exists to tell you the oncoming traffic is not being held.",
        excerptKey: "signal-flashing-yellow-arrow",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Arrows",
        sourceUrl: hb(33),
      },
      {
        id: "vt_s2_08",
        topic: "licensing",
        question:
          "You have moved to Vermont from another state with a valid licence. How long do you have to get a Vermont one?",
        choices: ["30 days", "90 days", "60 days", "Six months"],
        correctIndex: 2,
        explanation:
          "Sixty days. The manual says a person who moves into the state with a valid licence from elsewhere must obtain a Vermont licence within 60 days of moving in.",
        context:
          "The vehicle has its own clock and it happens to be the same one: a vehicle brought in from another state must be registered within 60 days. A commercial driver's licence is faster, at 30 days. A new resident with a valid out-of-state licence, or one expired three years or less, needs an eye examination but not the written and road tests; beyond three years, all three come back.",
        trap:
          "Holding a perfectly valid licence from another state does not pause the clock. The 60 days run from the day you become a Vermont resident.",
        excerptKey: "licence-new-resident-60-days",
        sourceLabel: "Vermont Driver's Manual - Chapter 4 General License Information",
        sourceUrl: hb(13),
      },
      {
        id: "vt_s2_09",
        topic: "rules",
        question: "What is a continuous two-way left turn lane in the middle of a road for?",
        choices: [
          "Overtaking slower traffic in either direction",
          "Making left turns from either direction",
          "Emergency vehicles only",
          "Travelling in whichever direction has more traffic",
        ],
        correctIndex: 1,
        explanation:
          "It is a shared turning lane, not a travel lane. The manual says it is not designed to be used as a travel lane because traffic moving in both directions may want to use it to turn left.",
        context:
          "The technique matters as much as the purpose. You signal, move into the lane a short distance before your turn, and get the whole vehicle inside it so you do not block the through lane behind you. Then you wait for a gap and turn.",
        trap:
          "Using it as a running lane to get past a queue is the classic misuse. Someone coming the other way is entitled to be in that same lane, waiting to turn.",
        excerptKey: "marking-two-way-left-turn",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Highway Markings",
        sourceUrl: hb(35),
      },
      {
        id: "vt_s2_10",
        topic: "emergencies",
        question:
          "You have had a crash in Vermont. When must you file a written report with the DMV?",
        choices: [
          "For any crash, within 30 days",
          "Only when the police did not attend",
          "If anyone is injured or damage exceeds $3,000, within 72 hours",
          "Only if you were found at fault",
        ],
        correctIndex: 2,
        explanation:
          "Injury or total property damage over $3,000 triggers a written report to the DMV within 72 hours. The manual gives both the threshold and the deadline, and 23 V.S.A. 1129 states them in law.",
        context:
          "The report is separate from what you must do at the scene. There you stop, give any assistance that is reasonably necessary, call 911 if anyone is hurt, and show your licence to the police and to anyone injured or whose property you damaged. If you hit a parked car and cannot find the owner, you leave your name, address and phone number on the vehicle.",
        trap:
          "A crash in another state is not reported to Vermont. The manual is explicit that it is reported in the state where it happened.",
        excerptKey: "crash-report-3000-72-hours",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 What to Do After a Crash",
        sourceUrl: hb(59),
        commonlyMissed: true,
      },
      {
        id: "vt_s2_11",
        topic: "speed",
        question: "What happens to the fine for speeding through a Vermont work zone?",
        choices: [
          "It is doubled",
          "It is unchanged, but points are added",
          "It carries an automatic suspension",
          "It is increased by $100",
        ],
        correctIndex: 0,
        explanation:
          "Doubled. The manual prints it as a heading in capitals at the end of its work zone section, so it is hard to miss and easy to forget.",
        context:
          "Work zone rules apply around the clock, not only when crews are visible, and most crashes there are rear-end collisions caused by following too closely and driving too fast for conditions. The manual asks for a four-second following distance through a work zone and tells you to merge as soon as it is safe rather than running to the front of the queue.",
        trap:
          "The doubling does not wait for workers to be present. The manual's own tip list opens by saying the rules apply 24/7, not just during daylight hours.",
        excerptKey: "speed-workzone-fines-doubled",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Work Zone Safety",
        sourceUrl: hb(36),
      },
      {
        id: "vt_s2_12",
        topic: "sharing",
        question:
          "A slow-moving vehicle displays an orange triangle with a red border. What is it telling you?",
        choices: [
          "The vehicle is oversized and needs the whole road",
          "The vehicle is carrying hazardous material",
          "The vehicle is broken down",
          "The vehicle cannot travel at highway speed",
        ],
        correctIndex: 3,
        explanation:
          "The orange and red triangle marks a vehicle that cannot keep up with highway speed - a tractor or other large farm machine. Spotting it early is the point, because it buys you the time to shed speed.",
        context:
          "Farm equipment behaves in ways cars do not. It makes wide turns into unmarked field entrances on either side, it can be wider than the lane, and towed wagons sway. The manual says agricultural operators have a right to use the road, asks you to keep a safe following distance and sometimes more than four seconds, and to pass only when it is clearly safe.",
        trap:
          "Assuming a slow-moving vehicle is about to pull over for you is a good way to be beside it when it turns left. It may pull over when it can, but it is not required to disappear.",
        excerptKey: "slow-vehicle-emblem",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Sharing the Road with Slow Moving Vehicles",
        sourceUrl: hb(45),
      },
      {
        id: "vt_s2_13",
        topic: "parking",
        question:
          "You must leave your car beside a rural Vermont highway. What does the manual require?",
        choices: [
          "Park with two wheels on the pavement so you stay visible",
          "Get all wheels off the traveled portion of the road",
          "Park facing oncoming traffic so you can be seen",
          "Leave the hazard lights on and park in the lane",
        ],
        correctIndex: 1,
        explanation:
          "All wheels off the traveled portion. The manual then adds where not to do it: not on a hill or curve, and not anywhere your vehicle cannot be seen for at least 150 feet in either direction.",
        context:
          "23 V.S.A. 1101 backs this up from the other side, forbidding stopping or parking on the paved or main-traveled part of a highway and requiring a clear view of any stopped vehicle from 200 feet in each direction where parking is permitted. The only relief is for a vehicle disabled where it is genuinely impractical to move it.",
        trap:
          "Facing into oncoming traffic to be seen is wrong twice over: the manual requires you to park in the same direction as the flow, and getting there means crossing the centre line.",
        excerptKey: "park-rural-all-wheels-off",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Parking Your Vehicle",
        sourceUrl: hb(30),
      },
      {
        id: "vt_s2_14",
        topic: "safety",
        question:
          "The Vermont manual says the average driver takes about how long to move a foot to the brake after seeing danger?",
        choices: ["About 3/4 of a second", "About 2 seconds", "About 1/4 of a second", "About 4 seconds"],
        correctIndex: 0,
        explanation:
          "About three-quarters of a second. That interval is reaction distance - the ground you cover before the brakes have done anything at all - and it stretches with speed.",
        context:
          "Braking distance is the second half and depends on the road. The manual points out that wet, icy or gravel surfaces lengthen it badly, and that a road is at its most slippery when rain first starts and lifts the oil and rubber off the surface. Its work zone section gives the arithmetic: 240 feet to stop from 60 mph on dry pavement, against 75 feet from 30 mph.",
        trap:
          "Doubling your speed does not double your stopping distance. Reaction distance doubles, but braking distance grows far faster than that.",
        excerptKey: "react-three-quarters-second",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Stopping Your Vehicle",
        sourceUrl: hb(27),
      },
      {
        id: "vt_s2_15",
        topic: "rightOfWay",
        question: "You are entering a Vermont roundabout. What is the rule?",
        choices: [
          "Traffic already in the roundabout yields to you",
          "You yield to traffic already in the roundabout",
          "Whoever arrives at the give-way line first goes",
          "Vehicles turning right have priority over those going straight",
        ],
        correctIndex: 1,
        explanation:
          "Traffic already circulating has priority. The manual says drivers must yield the right of way to traffic in the roundabout and enter only when there is a safe gap.",
        context:
          "Vermont roundabouts run counter-clockwise and you enter and leave through right turns only. You also yield to pedestrians and bicyclists on the way in and the way out, and you signal your intention to exit. On a two-lane roundabout, lane choice is made before you enter, because changing lanes once inside is not allowed.",
        trap:
          "Stopping inside the circle to let a waiting car in is the wrong courtesy. It reverses the priority the whole design depends on and invites a rear-end collision.",
        excerptKey: "roundabout-yield",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Roundabouts",
        sourceUrl: hb(31),
      },
      {
        id: "vt_s2_16",
        topic: "signs",
        question: "What colour and shape are Vermont's work zone signs?",
        choices: [
          "Yellow diamonds only",
          "White rectangles with black lettering",
          "Orange diamonds or rectangles",
          "Red octagons and triangles",
        ],
        correctIndex: 2,
        explanation:
          "Orange, in diamond or rectangular form. The manual says they warn of closed lanes, detours, rough pavement and flaggers, which is exactly the information you need before the queue starts.",
        context:
          "Other work zone devices carry their own meaning. Cones, drums and barricades channel you away from the hazard. Flashing arrow panels guide you into the correct lane, and when they show a straight line of lights or four blinking corners they are in caution mode and you should slow. A flagger with a stop or slow paddle has legal authority to control traffic and must be obeyed.",
        trap:
          "A flagger is not a helpful volunteer whose signals are advisory. The manual gives the flagger legal authority, so ignoring one is a traffic offence.",
        excerptKey: "sign-workzone-orange",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Work Zone Signs",
        sourceUrl: hb(37),
      },
      {
        id: "vt_s2_17",
        topic: "impairment",
        question: "What is Vermont's Implied Consent law?",
        choices: [
          "Passengers consent to a search when they enter a vehicle",
          "Holding a licence means agreeing to take a test for alcohol or drugs when asked",
          "You consent to a roadside sobriety test only after arrest",
          "Consent is implied only for drivers under 21",
        ],
        correctIndex: 1,
        explanation:
          "The manual puts it simply: when a person gets a licence, that person is agreeing to say yes when asked to take a test for alcohol or other drugs in their body. An officer may ask when they think a driver is impaired.",
        context:
          "The consequence of saying no is the part people misjudge. Refusing costs the licence for at least six months, which can be longer than the suspension for a first conviction, and 23 V.S.A. 1202 lets the refusal itself be put in evidence at a criminal trial. Vermont also has an administrative process, so the DMV can suspend before any criminal case is decided.",
        trap:
          "Refusing does not leave the state with nothing. It hands them a six-month suspension plus a refusal that can be used against you in court.",
        excerptKey: "dui-implied-consent",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Impaired Driving",
        sourceUrl: hb(54),
        commonlyMissed: true,
      },
      {
        id: "vt_s2_18",
        topic: "rules",
        question:
          "Traffic is backing up behind you because you are driving more slowly than the flow. What does Vermont law require?",
        choices: [
          "Nothing, as long as you are at or under the limit",
          "Turn on your hazard lights and keep going",
          "Pull over when it is safe and let the following vehicles by",
          "Move to the left lane so they can pass on the right",
        ],
        correctIndex: 2,
        explanation:
          "The manual tells a slower driver they are required by law to pull over to the side of the road when it is safe and let following vehicles go by. 23 V.S.A. 1082 puts the same duty on anyone impeding traffic.",
        context:
          "The manual raises this in the learner's own chapter, because a new driver naturally travels slower than the traffic around them and may not realise that itself creates a hazard. The statute goes further and requires a slow-moving vehicle to keep as close to the right-hand side of the highway as is reasonably practicable.",
        trap:
          "Being under the speed limit does not settle it. The offence is impeding the traffic behind you, not exceeding a number.",
        excerptKey: "permit-pull-over-if-slow",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Where Should I Start Driving",
        sourceUrl: hb(26),
      },
      {
        id: "vt_s2_19",
        topic: "signals",
        question: "The signal at a Vermont intersection has gone completely dark in a power cut. What do you do?",
        choices: [
          "Treat the intersection as if it had stop signs in all directions",
          "Proceed as if you had a green, since your road is the main one",
          "Wait for a police officer before entering",
          "Treat it as a flashing yellow and continue with caution",
        ],
        correctIndex: 0,
        explanation:
          "A dark signal is an all-way stop. The manual's instruction is to stop as if there are stop signs in all directions and then work it out on the ordinary right-of-way rules.",
        context:
          "That is different from a signal which is out of order but still flashing: there you obey whatever it is showing, red as a stop sign and yellow as a caution. And whatever a signal is doing, a police officer directing traffic overrides it - the manual says an officer may direct you through a red light and you should follow their directions with caution.",
        trap:
          "Being on the wider or busier road gives you nothing when the signal is dark. Both roads face the same all-way stop.",
        excerptKey: "signal-dark-signal",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Traffic Lights",
        sourceUrl: hb(32),
      },
      {
        id: "vt_s2_20",
        topic: "sharing",
        question:
          "A vehicle ahead of you in the right lane stops at a crosswalk for a pedestrian. There is a second lane. What may you do?",
        choices: [
          "Pass in the second lane, since the pedestrian is not in front of you",
          "Pass slowly with your hand on the horn",
          "Wait: you may not overtake the stopped vehicle",
          "Pass only if the pedestrian has not started crossing",
        ],
        correctIndex: 2,
        explanation:
          "You wait. 23 V.S.A. 1051 forbids a driver approaching from behind from overtaking a vehicle stopped at a crosswalk to let someone cross, and the manual says the same in plain words.",
        context:
          "The reason is the sight line. The stopped vehicle hides the pedestrian from you and hides you from the pedestrian, so the person steps out of a blind spot into a moving lane. The manual calls this a frequent cause of death for pedestrians and tells you not to pass even where two lanes are provided.",
        trap:
          "Two lanes feel like permission. They are the exact circumstance the rule was written for.",
        excerptKey: "ped-no-pass-stopped-vehicle",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Sharing the Road with Pedestrians",
        sourceUrl: hb(39),
        commonlyMissed: true,
      },
      {
        id: "vt_s2_21",
        topic: "licensing",
        question:
          "Your Vermont licence expired three weeks ago and you have not renewed it. May you drive?",
        choices: [
          "Yes, there is a 30-day grace period",
          "Yes, if you carry the renewal notice with you",
          "Yes, but only to and from the DMV",
          "No: after 14 days an expired Vermont licence is not valid",
        ],
        correctIndex: 3,
        explanation:
          "The manual is blunt about it: a Vermont licence that has expired for more than 14 days is not a valid licence, and you may not drive with it.",
        context:
          "There is a second, longer deadline behind that one. If the licence has been expired more than three years you must be tested again to get a new one, and the same three-year rule applies to a learner's permit before a road test. Renewals can be done online at mydmv.vermont.gov, and a licence photo stays valid for eight years.",
        trap:
          "The renewal notice arriving in the post is not a permit to drive. It is a reminder, and the 14 days run whether or not it reached you.",
        excerptKey: "licence-expired-14-days",
        sourceLabel: "Vermont Driver's Manual - Chapter 6 Permit/License Renewals",
        sourceUrl: hb(25),
      },
      {
        id: "vt_s2_22",
        topic: "safety",
        question: "A child aged three is riding in your car in Vermont. What is required?",
        choices: [
          "A booster seat with the adult belt",
          "A rear-facing or forward-facing car seat with a harness",
          "The adult seat belt is enough at that age",
          "A rear-facing seat only",
        ],
        correctIndex: 1,
        explanation:
          "Between two and five, Vermont requires a federally approved rear-facing or forward-facing car seat with a harness. The booster stage only comes later.",
        context:
          "The ladder in 23 V.S.A. 1258 runs: under two, rear-facing with a harness; two to under five, rear or forward-facing with a harness; under eight and out of a harnessed seat, a booster; under 18 and out of a seat or booster, a seat belt. Two more rules run alongside it - a child under 13 rides in the back where practical, and a rear-facing seat never goes in front of an active airbag.",
        trap:
          "Moving a child up a stage early is the common mistake. The booster is for a child under eight who is no longer in a harnessed seat, not a substitute for one at three.",
        excerptKey: "child-two-to-five",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Child Restraint Systems",
        sourceUrl: hb(63),
      },
      {
        id: "vt_s2_23",
        topic: "speed",
        question:
          "A Vermont school zone sign carries the words \"when children are present\". When does the lower limit apply?",
        choices: [
          "Only between 8am and 3pm on weekdays",
          "Only when a crossing guard is on duty",
          "Whenever children are present, including after school and at weekends",
          "All day, every day, regardless of the wording",
        ],
        correctIndex: 2,
        explanation:
          "The wording is the switch. The lower limit applies whenever the stated condition is true, and the manual warns that regular school hours are not the only time children are at a school.",
        context:
          "Vermont school zones are signed either \"when flashing\" or \"when children are present\", and the two behave differently: one is tied to a beacon, the other to what you can see. After-school and weekend activities put children at schools outside the timetable. 23 V.S.A. 1017 doubles the civil penalty for a speed limit violation in a signed school zone.",
        trap:
          "Treating the school day as the boundary is the trap the manual writes against. The condition is the presence of children, not the hour on the clock.",
        excerptKey: "speed-school-not-only-hours",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 School Zones",
        sourceUrl: hb(39),
      },
      {
        id: "vt_s2_24",
        topic: "rules",
        question:
          "You are turning right from one road onto a multilane road. Which lane must you enter?",
        choices: [
          "The right lane",
          "Whichever lane is clear",
          "The left lane, so you do not block traffic behind you",
          "The centre lane, then move across",
        ],
        correctIndex: 0,
        explanation:
          "Right turning drivers turn into the right lane. The manual states it as a rule of the road markings, and the matching rule for a left turn is that you turn into the left lane.",
        context:
          "Once you are in the turn you stay in your own path. Where two lanes turn in the same direction, each must keep to its own arc all the way through, and lane changes wait until the turn is complete. The manual calls changing lanes mid-turn an illegal manoeuvre that leads to crashes.",
        trap:
          "Swinging wide into the far lane because it looks emptier is the manoeuvre this rule exists to prevent. It puts you across the path of anyone turning beside you.",
        excerptKey: "marking-lane-use-right",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Highway Markings",
        sourceUrl: hb(35),
      },
      {
        id: "vt_s2_25",
        topic: "emergencies",
        question:
          "Your car breaks down on a Vermont Interstate. What does the manual tell you to do?",
        choices: [
          "Stand behind the vehicle to warn approaching traffic",
          "Walk to the nearest exit for help",
          "Move to the breakdown lane, raise the hood, and stay in the vehicle",
          "Stop in the right lane and put on your hazard lights",
        ],
        correctIndex: 2,
        explanation:
          "Get off the traffic lanes, as far right as possible. The manual then says to raise the hood, tie a white cloth to the vehicle, and stay in it while you wait.",
        context:
          "Stopping on an Interstate is illegal unless it is an emergency, and the manual's other Interstate rules run in the same direction: never stop in a traffic lane, never back up for a missed exit, and never use the emergency turnaround, which is reserved for emergency and maintenance vehicles. If you miss your exit, you go on to the next one.",
        trap:
          "Standing outside to flag people down puts you in the most dangerous place on the road. The raised hood and the white cloth are how you signal without leaving the car.",
        excerptKey: "inter-raise-hood",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Safe Driving on the Interstate",
        sourceUrl: hb(52),
      },
      {
        id: "vt_s2_26",
        topic: "parking",
        question:
          "Where does Vermont law forbid you to stand or park, even briefly, other than to pick up or drop off a passenger?",
        choices: [
          "Within 10 feet of a crosswalk at an intersection",
          "Within 20 feet of a crosswalk at an intersection",
          "Within 25 feet of any crosswalk",
          "Within 15 feet of a crosswalk at an intersection",
        ],
        correctIndex: 1,
        explanation:
          "Twenty feet. 23 V.S.A. 1104 lists it alongside the six-foot hydrant and the 30-foot approach to a stop sign or signal in the group of places you may not stand or park.",
        context:
          "The statute separates three levels of restriction. Some places you may not stop at all, such as on a crosswalk, in an intersection, on a sidewalk or on railroad tracks. Some you may not stand or park except momentarily for a passenger, which covers the hydrant, the crosswalk and the signal approach. Some you may not park except while actually loading, which covers the 50 feet from the nearest rail of a crossing.",
        trap:
          "Keeping the engine running does not change anything. The restriction is on standing as well as parking, so waiting at the wheel is still covered.",
        excerptKey: "park-statute-crosswalk",
        sourceLabel: "23 V.S.A. 1104 - Stopping prohibited",
        sourceUrl: vsa("01104"),
      },
      {
        id: "vt_s2_27",
        topic: "signs",
        question:
          "A yellow diamond sign shows a deer, with a plate underneath reading NEXT 3 MILES. What is that telling you?",
        choices: [
          "Deer are fed at this spot and will be beside the road",
          "The hazard continues for the next three miles",
          "You must reduce speed for three miles",
          "A wildlife crossing tunnel is three miles ahead",
        ],
        correctIndex: 1,
        explanation:
          "The plate gives the extent of the hazard. The manual uses this exact example when explaining that some warning signs carry extra information such as a safe speed or a distance.",
        context:
          "Vermont takes deer and moose seriously enough to give them their own section. Both are most active in the late evening, at night and in the early morning. Headlights can freeze a deer or send it bolting across the road toward its habitat, and where you see one you should expect a second. Moose are worse: taller, darker, over a thousand pounds, and their eyes often do not reflect your headlights at all.",
        trap:
          "A distance plate does not set a speed limit. It tells you how far to stay alert, and the speed you choose is the reasonable-and-prudent judgment the basic rule always demands.",
        excerptKey: "sign-warning-extra-info",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Warning Signs",
        sourceUrl: hb(34),
      },
      {
        id: "vt_s2_28",
        topic: "rightOfWay",
        question:
          "You want to turn left across a Vermont road into a driveway. Traffic is coming the other way. What must you do?",
        choices: [
          "Turn as soon as the nearest oncoming vehicle slows",
          "Yield to any oncoming vehicle that is close enough to be an immediate hazard",
          "Signal and turn: oncoming traffic must give way to a turning vehicle",
          "Wait until the road is completely empty in both directions",
        ],
        correctIndex: 1,
        explanation:
          "23 V.S.A. 1047 sets the standard: a driver turning left into an intersection, alley, private road or driveway yields to any vehicle approaching from the opposite direction that is within the intersection or so close as to constitute an immediate hazard.",
        context:
          "The immediate-hazard test is the practical one. You are not required to wait for an empty road, but you are required to judge whether the gap is genuinely enough, and the statute adds that a left turn must be made at a safe distance from a vulnerable user. The manual reinforces it: keep your wheels straight while you wait, so a rear-end shunt does not push you into oncoming traffic.",
        trap:
          "A slowing oncoming car may be slowing for something else entirely. Their brake lights are not your invitation.",
        excerptKey: "row-statute-left-turn",
        sourceLabel: "23 V.S.A. 1047 - Vehicle turning left",
        sourceUrl: vsa("01047"),
      },
      {
        id: "vt_s2_29",
        topic: "impairment",
        question:
          "How much alcohol may a Vermont driver under 21 have in their system before facing a civil traffic violation?",
        choices: [
          "The same .08 as everyone else",
          ".05",
          "Less than .02",
          "Any amount at all is an automatic criminal charge",
        ],
        correctIndex: 2,
        explanation:
          "The threshold is .02. The manual says a person under 21 who operates with an alcohol concentration of .02 or more can receive a civil traffic violation, so anything below that figure is where the rule bites.",
        context:
          "The consequences are not just the ticket. The licence is suspended and the driver must complete an alcohol and driving education programme at their own expense. On top of that, a learner's permit or junior licence is provisional and recallable, and a recall makes the holder ineligible for any licence while it runs.",
        trap:
          "Assuming the .08 figure covers everyone is the mistake. Vermont sets a separate, far lower line for drivers under 21.",
        excerptKey: "dui-under-21-02",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Impaired Driving",
        sourceUrl: hb(53),
      },
      {
        id: "vt_s2_30",
        topic: "safety",
        question: "What does the Vermont manual say about hanging objects from your rearview mirror?",
        choices: [
          "Nothing may hang from the rearview mirror or sun visors",
          "Objects are allowed if they are smaller than a hand",
          "It is a matter for the annual inspection, not the road",
          "Objects are allowed as long as they do not swing",
        ],
        correctIndex: 0,
        explanation:
          "The manual states the rule flatly: there shall not be anything hanging from the rearview mirror or sun visors. It sits in the same paragraph as the requirement to have a rearview mirror and a horn at all.",
        context:
          "The reason is the same one behind the load and passenger rules: the driver has to see clearly to the front and sides, so nothing carried in the vehicle, and no passenger or pet, should be in the way. 23 V.S.A. 1125 states the tighter legal test, applying the prohibition where a hanging item materially obstructs the driver's view.",
        trap:
          "A small air freshener seems harmless until you realise the mirror hangs exactly where an approaching cyclist appears. The manual's rule is about the sight line, not the size of the object.",
        excerptKey: "vehicle-nothing-hanging",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Other Things to Keep In Mind",
        sourceUrl: hb(62),
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Real Test Difficulty",
    difficulty: "medium",
    description:
      "Thirty-five questions pitched where the real Vermont permit test sits: the exact numbers, the exceptions, and the rules that only make sense once you know why they exist.",
    questions: [
      {
        id: "vt_s3_01",
        topic: "sharing",
        question:
          "You are on a divided highway with a median. A school bus on the other roadway stops with red lights flashing. What must you do?",
        choices: [
          "Stop, because red lights bind traffic in both directions",
          "Stop only if children are visible",
          "Slow to 20 mph and continue",
          "You need not stop, because the bus is on a different roadway",
        ],
        correctIndex: 3,
        explanation:
          "A divided highway is the one exception. The manual says you do not have to stop on a divided highway if the bus is travelling in the opposite direction, and 23 V.S.A. 1075 frames it as a highway with separate roadways where the bus is on the other one.",
        context:
          "On every other layout the stop is compulsory from both directions, and the manual makes the point that it applies even inside a school yard. Passing a stopped bus with its red warning lights on costs a substantial fine and five points on your record - the same five points the manual lists for failing to yield to an ambulance, fire truck or police officer.",
        trap:
          "A painted centre line, however wide, is not a divided highway. The exception turns on separate roadways, and the manual gives a concrete barrier as its example.",
        excerptKey: "bus-divided-highway-exception",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Sharing the Road with School Buses",
        sourceUrl: hb(41),
        commonlyMissed: true,
      },
      {
        id: "vt_s3_02",
        topic: "licensing",
        question:
          "A 16-year-old has just been issued a Junior Driver's License. What passenger rule applies for the first three months?",
        choices: [
          "Only immediate family members may ride along",
          "One passenger under 18 is allowed",
          "They must drive alone unless a qualifying supervising adult is in the front seat",
          "No restriction, as long as everyone is belted",
        ],
        correctIndex: 2,
        explanation:
          "The first three months are solo. Passengers are permitted only when a licensed and unimpaired parent or guardian, a driver education instructor, or a licensed unimpaired adult aged 25 or over is riding in the front seat.",
        context:
          "The stages are three months apart. Months four to six add immediate family only - the manual's graduated licensing chapter spells that out as siblings and parents. After six months the passenger limit falls away entirely, subject to one hard ceiling that never lifts: never more passengers than there are safety belts.",
        trap:
          "Friends do not count as family in month four. The second stage is siblings and parents, and nothing else.",
        excerptKey: "junior-first-three-months",
        sourceLabel: "Vermont Driver's Manual - Chapter 4 What restrictions are on a Junior Driver's License",
        sourceUrl: hb(16),
        commonlyMissed: true,
      },
      {
        id: "vt_s3_03",
        topic: "rules",
        question:
          "When may you legally pass another vehicle on the RIGHT in Vermont?",
        choices: [
          "Whenever the right lane is moving faster",
          "On a multilane road, or when the vehicle ahead is turning or preparing to turn left",
          "Never: passing is always on the left",
          "Only on the Interstate",
        ],
        correctIndex: 1,
        explanation:
          "Two situations. The manual allows passing on the right on a multilane road, and on a road that is not multilane when the vehicle ahead is turning or preparing to turn left and there is room to go by safely.",
        context:
          "23 V.S.A. 1034 sets out the same permissions and adds the hard limit that the manual repeats: under no conditions may a vehicle be passed by driving off the pavement or main-traveled part of the road. That rules out using the shoulder or the verge to get around a car waiting to turn.",
        trap:
          "Slipping onto the shoulder to get past a left-turning car is the manoeuvre both sources ban outright, and it is the one people believe is allowed.",
        excerptKey: "pass-right-turning-left",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Passing",
        sourceUrl: hb(53),
      },
      {
        id: "vt_s3_04",
        topic: "parking",
        question:
          "How close to a railroad crossing may you park a vehicle in Vermont, other than while actually loading?",
        choices: [
          "No closer than 25 feet from the nearest rail",
          "No closer than 50 feet from the nearest rail",
          "No closer than 15 feet from the nearest rail",
          "No closer than 100 feet from the nearest rail",
        ],
        correctIndex: 1,
        explanation:
          "Fifty feet from the nearest rail. 23 V.S.A. 1104 puts it in the group you may not park in except temporarily while actually loading or unloading merchandise or a passenger.",
        context:
          "Do not confuse it with the stopping distance at a crossing, which is a different number for a different purpose. When you must stop for a train, the manual says stop not less than 15 feet from the nearest rail, and 23 V.S.A. 1071 gives the window as within 50 feet but not nearer than 15.",
        trap:
          "The 15-foot figure is the closest you may stop when a train is coming, not the closest you may leave a parked car. Parking is 50 feet.",
        excerptKey: "park-statute-railroad",
        sourceLabel: "23 V.S.A. 1104 - Stopping prohibited",
        sourceUrl: vsa("01104"),
      },
      {
        id: "vt_s3_05",
        topic: "safety",
        question:
          "You are driving at 40 mph at night on low beams. The manual says you are doing what?",
        choices: [
          "Driving at the safest speed for low beams",
          "Overdriving your headlights",
          "Complying with the night speed rule",
          "Using the wrong beam for that speed",
        ],
        correctIndex: 1,
        explanation:
          "The manual calls it overdriving your headlights: at 40 mph on low beam you cannot see far enough ahead to stop within the distance you can actually see.",
        context:
          "The manual pairs this with a rule of thumb it uses everywhere else - you always need to be able to see four seconds ahead. Its other night advice runs the same way: high beam for open country with few vehicles, still at a lower speed than by day; low beam when meeting or following anyone, near street lights, or in fog; and when oncoming lights dazzle you, look toward the right edge of the road until they pass.",
        trap:
          "It is not a rule about which beam is legal at 40 mph. It is a warning that your stopping distance has outrun your sight distance, whatever the sign says.",
        excerptKey: "light-overdriving",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Night Driving",
        sourceUrl: hb(50),
        commonlyMissed: true,
      },
      {
        id: "vt_s3_06",
        topic: "signals",
        question:
          "Your brake lights and indicators have both stopped working on a Vermont road. What does the manual require?",
        choices: [
          "Drive straight home and repair them",
          "Use hand signals to show that you intend to stop or turn",
          "Turn on your hazard lights and continue as normal",
          "Nothing, provided you drive in daylight",
        ],
        correctIndex: 1,
        explanation:
          "Hand signals. The manual says that if your directional lights or brake lights are not working you must use hand signals to let other drivers know you are planning to stop or turn, and that the lights must be fixed immediately.",
        context:
          "23 V.S.A. 1065 fixes what the signals look like, and they are given from the left side of the vehicle: left turn is the hand and arm extended horizontally; right turn is the hand and arm extended upward; stop or decrease speed is the hand and arm extended downward. A cyclist may signal a right turn instead by extending the right arm horizontally.",
        trap:
          "Hazard lights are not a substitute. They flash on both sides, so they cannot tell anyone which way you are turning, and they mask the brake lights you still need.",
        excerptKey: "signal-hand-signals-required",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Signals",
        sourceUrl: hb(27),
      },
      {
        id: "vt_s3_07",
        topic: "speed",
        question:
          "You are approaching a stopped police cruiser with blue lights flashing on a two-lane Vermont road, and there is no lane to move into. What does the manual say you must do?",
        choices: [
          "Slow to 20 mph below the speed limit to go by",
          "Stop until an officer waves you through",
          "Maintain your speed but move as far right as possible",
          "Slow to 10 mph below the speed limit",
        ],
        correctIndex: 0,
        explanation:
          "The manual's figure is 20 mph below the speed limit when you are unable to change lanes. The first duty is always to change lanes away from the vehicle if you safely can; the speed reduction is what covers you when you cannot.",
        context:
          "23 V.S.A. 1050 imposes the same two-step duty - proceed with caution, change lanes away where the road is multilane and it is safe, otherwise slow down - but states the speed as a reasonable, safe and prudent one rather than fixing a number. Learn the manual's 20 mph figure as the DMV's own instruction, and the duty underneath it as the law.",
        trap:
          "The rule is not limited to police cars. Ambulances, fire apparatus, rescue vehicles, tow trucks with amber lights and highway maintenance vehicles all get the same treatment.",
        excerptKey: "moveover-20-below",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Safe Driving on the Interstate",
        sourceUrl: hb(52),
        commonlyMissed: true,
      },
      {
        id: "vt_s3_08",
        topic: "rightOfWay",
        question:
          "You are entering a Vermont Interstate from an on-ramp. Who has the right of way?",
        choices: [
          "You, because merging traffic has priority",
          "Whichever vehicle is travelling faster",
          "The drivers already on the Interstate",
          "Neither: the merge is a shared responsibility",
        ],
        correctIndex: 2,
        explanation:
          "The traffic already on the Interstate. The manual states it without qualification: the entering driver must yield to drivers already on the interstate.",
        context:
          "Yielding does not mean crawling. The ramp leads into an acceleration lane whose purpose is to get you to Interstate speed before you join, and the manual's sequence is to stay right, signal left, speed up, check the blind spot over your left shoulder, and change lanes when the travel lane is clear. Leaving works in reverse: signal, move to the deceleration lane, then slow to the posted exit speed.",
        trap:
          "Stopping at the end of the ramp is the worst outcome. It leaves you trying to join 65 mph traffic from a standstill, with a queue behind you.",
        excerptKey: "inter-entering-must-yield",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Entrance Ramp",
        sourceUrl: hb(51),
      },
      {
        id: "vt_s3_09",
        topic: "impairment",
        question:
          "A Vermont driver refuses the breath test when an officer asks for it. What is the licence consequence?",
        choices: [
          "A warning on a first refusal",
          "Loss of the licence for at least six months",
          "A 30-day suspension",
          "No licence consequence unless there is a conviction",
        ],
        correctIndex: 1,
        explanation:
          "At least six months. The manual states it directly as the consequence of refusing under the Implied Consent law.",
        context:
          "The refusal does not buy silence either. 23 V.S.A. 1202 allows a refusal to take a breath test to be introduced as evidence in a criminal proceeding, and Vermont's administrative suspension process means the DMV can act before any criminal case concludes. On a first DUI conviction, 23 V.S.A. 1206 has the Commissioner suspend for 90 days and until the driver completes the statutory requirements.",
        trap:
          "Refusing can cost more licence time than the offence. Six months for the refusal against 90 days for a first conviction is the arithmetic most people never do.",
        excerptKey: "dui-refusal-six-months",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Impaired Driving",
        sourceUrl: hb(54),
        commonlyMissed: true,
      },
      {
        id: "vt_s3_10",
        topic: "signs",
        question:
          "A crossbuck at a Vermont crossing has a small sign beneath it reading \"2 TRACKS\". Why does that matter?",
        choices: [
          "Trains on the second track always run more slowly",
          "One passing train can hide another coming the other way",
          "You must stop twice, once for each track",
          "The second track is disused and can be ignored",
        ],
        correctIndex: 1,
        explanation:
          "The count is a warning about sight lines. The manual says that when there are two or more tracks, one train passing might hide a train coming the other way.",
        context:
          "Everything else about a crossing follows from not being able to see or stop in time. Vermont requires a stop not less than 15 feet from the nearest rail when lights flash, a gate is down, a flagman signals, you see or hear a train, or a stop sign is posted. Driving through, around or under a closed gate is illegal, and so is passing another vehicle at a crossing.",
        trap:
          "Watching the train that just went by is exactly the mistake. The danger is the one you have not seen yet, on the track it was hiding.",
        excerptKey: "sign-two-tracks",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Road Signs",
        sourceUrl: hb(34),
      },
      {
        id: "vt_s3_11",
        topic: "rules",
        question:
          "You are making a left turn from a two-way Vermont street. Where should your vehicle be positioned as you wait?",
        choices: [
          "In the middle of your lane, wheels turned left ready to go",
          "Within one foot of the centre line, wheels straight",
          "Hard against the left kerb",
          "Just past the centre line, in the oncoming lane",
        ],
        correctIndex: 1,
        explanation:
          "Within one foot of the centre line, with the wheels straight. The manual asks for both, and gives the reason for the second: with the wheels straight, being hit from behind pushes you forward rather than into oncoming traffic.",
        context:
          "The rest of the turn is scripted too. Signal three to five seconds ahead, check the mirror to see that the driver behind has understood, make sure no cyclist or vehicle is trying to pass on your left, and on a multilane road be in the left lane well in advance rather than moving across at the last moment. When you go, keep to the right of the centre line of the road you are entering.",
        trap:
          "Turning the wheels early feels like being ready. It turns a rear-end shunt into a head-on collision.",
        excerptKey: "turn-left-wheels-straight",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Left Turns",
        sourceUrl: hb(27),
        commonlyMissed: true,
      },
      {
        id: "vt_s3_12",
        topic: "emergencies",
        question:
          "How many points does Vermont put on your record for failing to stop for a school bus displaying flashing red lights?",
        choices: ["2 points", "3 points", "5 points", "8 points"],
        correctIndex: 2,
        explanation:
          "Five points, plus a substantial fine. The manual lists it in the point system alongside failing to yield to an ambulance, fire truck or police officer, which also carries five.",
        context:
          "Vermont suspends at a total of 10 points, so two school-bus offences would do it on their own. The published examples run: speeding 2 to 8 points depending on how far over, texting 2 to 5, driving without a licence 2, failing to stop for a stop sign or red light 2, failing to obey a police officer 4, and failing to yield to a pedestrian in a crosswalk 4. Points are not assessed for parking or defective equipment.",
        trap:
          "Points are not the same as the fine. Ten points suspends the licence regardless of what you paid, and how long depends on how many you collected inside two years.",
        excerptKey: "bus-five-points",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Sharing the Road with School Buses",
        sourceUrl: hb(41),
      },
      {
        id: "vt_s3_13",
        topic: "sharing",
        question:
          "A large truck ahead of you swings to the LEFT before making a right turn. What should you do?",
        choices: [
          "Overtake on the right while the gap is there",
          "Stay back: never cut between the truck and the kerb",
          "Sound your horn to tell the driver they are in the wrong lane",
          "Move up beside the cab so the driver can see you",
        ],
        correctIndex: 1,
        explanation:
          "Stay back. The manual says truck drivers often need to swing wide to the left to make a right turn, that they cannot see vehicles directly behind or beside them, and that cutting in between the truck and the kerb or shoulder increases the chance of a crash.",
        context:
          "The blind spots have a name in the manual: the No-Zones, around the front, back and both sides of the truck. The rule of thumb it gives is that if you cannot see the truck's side mirrors, the driver cannot see you. Passing a truck takes longer than passing a car, and you should be able to see the whole cab in your inside rearview mirror before moving back in front.",
        trap:
          "The gap the truck opens on its right is not a lane. It is the space the trailer is about to sweep through.",
        excerptKey: "truck-no-cut-in-curb",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Sharing the Road with Large Trucks",
        sourceUrl: hb(45),
      },
      {
        id: "vt_s3_14",
        topic: "licensing",
        question:
          "How many hours of supervised practice must a Vermont teenager complete before a Junior Driver's License, and how many must be at night?",
        choices: [
          "40 hours, with at least 10 at night",
          "50 hours, with at least 10 at night",
          "30 hours, with at least 6 at night",
          "40 hours, with at least 6 at night",
        ],
        correctIndex: 0,
        explanation:
          "Forty hours of practice, at least ten of them at night. The manual defines nighttime driving precisely: the period from 30 minutes after sunset to 30 minutes before sunrise.",
        context:
          "The 40 hours are extra. The manual states that the law requires them in addition to the six hours of behind-the-wheel time inside a driver education course, and the course itself is 30 hours of classroom, six behind the wheel and six of observation. A parent or guardian certifies the practice, and the DMV suggests the VN-219 log sheet or the RoadReady app for tracking it.",
        trap:
          "The six hours of instruction from driver education do not count toward the 40. That is the arithmetic families get wrong most often.",
        excerptKey: "junior-40-in-addition",
        sourceLabel: "Vermont Driver's Manual - Chapter 4 Questions and Answers about Junior Driver's Licenses",
        sourceUrl: hb(15),
        commonlyMissed: true,
      },
      {
        id: "vt_s3_15",
        topic: "safety",
        question:
          "Your car is fitted with anti-lock brakes and you need to stop hard on a wet Vermont road. What should you do with the pedal?",
        choices: [
          "Pump the pedal rapidly to keep the wheels turning",
          "Press hard, then release as soon as you feel vibration",
          "Hold steady, firm pressure and steer",
          "Apply the parking brake at the same time",
        ],
        correctIndex: 2,
        explanation:
          "Steady pressure, and steer. The manual says ABS lets you brake and steer at the same time, tells you to expect noise and vibration in the pedal, and warns that pumping or lifting off will disengage the system.",
        context:
          "That is the opposite of the technique for a car without ABS, where the manual has you squeeze the brakes with slow steady pressure and ease off if the wheels start to lock up. Knowing which car you are in matters, and the manual points out the ABS light on the instrument panel: if it stays on once you are moving, the anti-lock system is not working, though the ordinary brakes still are.",
        trap:
          "The noise and the pedal pulsing feel like a fault, and lifting off is the instinctive reaction. That is exactly what switches the system off when you need it.",
        excerptKey: "abs-brake-and-steer",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Anti-lock Brakes",
        sourceUrl: hb(49),
      },
      {
        id: "vt_s3_16",
        topic: "signals",
        question:
          "A No Turn On Red sign at a Vermont intersection lights up only at certain times. What does that mean?",
        choices: [
          "The sign is faulty and can be ignored when unlit",
          "Right on red is banned while the sign is lit",
          "Right on red is banned at all times at that intersection",
          "The sign applies only to left turns from a one-way street",
        ],
        correctIndex: 1,
        explanation:
          "The prohibition follows the sign. The manual says many signalised intersections have No Turn On Red signs that light up during pedestrian crossing times, and that you must not turn right on red while they are lit.",
        context:
          "That is one of three ways the right-on-red default can be taken away. A permanent sign or symbol removes it altogether. A lit sign removes it for the moment. And a red ARROW removes it outright - the manual says in capitals not to turn right on a red arrow, because an arrow controls a specific movement rather than the whole approach.",
        trap:
          "An unlit sign is not a broken sign. It is a sign that is currently switched off, and the ordinary right-on-red rules apply until it comes on.",
        excerptKey: "signal-no-turn-on-red-lit",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Sharing the Road with Pedestrians",
        sourceUrl: hb(39),
      },
      {
        id: "vt_s3_17",
        topic: "speed",
        question:
          "At what point does speeding stop being a civil violation and become a criminal offence in Vermont?",
        choices: [
          "At 20 mph over any posted limit",
          "At 80 mph anywhere in the state",
          "At 60 mph or more, and at least 30 mph over the limit",
          "At any speed over 65 mph",
        ],
        correctIndex: 2,
        explanation:
          "23 V.S.A. 1097 makes it an offence to drive at 60 mph or more AND at least 30 mph over the state speed zone or local limit. Both conditions have to be met at once.",
        context:
          "The penalties are criminal rather than civil: imprisonment for up to three months or a fine of up to $300 on a first conviction, and up to six months or $500 on a second. On top of that, the point system charges speeding at 2 to 8 points depending on how far over the limit you were, and 10 points suspends the licence.",
        trap:
          "Thirty over on its own is not enough. On a 25 mph street, 55 mph is 30 over but under 60, so the criminal section does not reach it - which does not stop it being an expensive civil ticket.",
        excerptKey: "speed-statute-excessive",
        sourceLabel: "23 V.S.A. 1097 - Excessive speed",
        sourceUrl: vsa("01097"),
      },
      {
        id: "vt_s3_18",
        topic: "parking",
        question:
          "How far back from a stop sign or traffic light may you stand or park in Vermont?",
        choices: [
          "You must stay 30 feet back on the approach",
          "You must stay 20 feet back on the approach",
          "You must stay 15 feet back on the approach",
          "There is no distance, only the no-parking signs",
        ],
        correctIndex: 0,
        explanation:
          "Thirty feet on the approach. 23 V.S.A. 1104 forbids standing or parking within 30 feet upon the approach to any flashing signal, stop sign or traffic control light at the side of a roadway.",
        context:
          "The word approach carries the weight. The restriction is about a parked car hiding the sign or the signal from the driver coming up behind it, so it applies on the side you drive toward the control, not beyond it. The same subsection holds the six-foot hydrant and the 20-foot crosswalk figures.",
        trap:
          "The figure is not tied to a painted box or a sign. It is a measured distance from the control itself, whether or not the kerb is marked.",
        excerptKey: "park-statute-stop-sign",
        sourceLabel: "23 V.S.A. 1104 - Stopping prohibited",
        sourceUrl: vsa("01104"),
      },
      {
        id: "vt_s3_19",
        topic: "rightOfWay",
        question:
          "You are turning right at a Vermont intersection and a cyclist is riding straight ahead on your right. Who goes first?",
        choices: [
          "You, because a turning vehicle clears the intersection faster",
          "The cyclist, and you must yield",
          "Whoever entered the intersection first",
          "You, provided you signal",
        ],
        correctIndex: 1,
        explanation:
          "The cyclist. The manual's right-turn instruction is explicit that you must yield to any pedestrian or bicyclist, and it lists turning right across a cyclist continuing straight as one of the four errors that cause driver-at-fault collisions with bikes.",
        context:
          "The search pattern is what prevents it. For a right turn the manual has you look left, front, then right, and then quickly left again just before you start, while moving over to the right side of your lane well in advance. The other three listed errors are turning left across an oncoming cyclist, pulling out without checking for a rider, and opening a door into a rider's path.",
        trap:
          "Signalling is not yielding. The indicator tells the cyclist what you intend; it does not transfer the right of way to you.",
        excerptKey: "turn-right-yield-vulnerable",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Right Turns",
        sourceUrl: hb(28),
        commonlyMissed: true,
      },
      {
        id: "vt_s3_20",
        topic: "rules",
        question:
          "You are in a lane marked with a straight-ahead arrow and realise you need to turn right. What does the manual say?",
        choices: [
          "Turn anyway if it is safe, since arrows are advisory",
          "Signal and change lanes inside the intersection",
          "Follow the arrow and find another route to your destination",
          "Stop and wait for a gap, then reverse into the correct lane",
        ],
        correctIndex: 2,
        explanation:
          "You go straight on. The manual says drivers must follow through on the direction indicated in the lane they are in, that turning from a straight-arrow lane is illegal and unsafe, and that it is safer to drive around the block and find an alternate route.",
        context:
          "The same principle covers turns generally: where two lanes turn in the same direction each stays in its own path, lane changes wait until the turn is finished, and changing lanes while turning is called out as an illegal manoeuvre that leads to crashes. 23 V.S.A. 1038 backs it up, requiring drivers to obey lane-use control devices.",
        trap:
          "A sudden lane change to fix a missed turn is exactly the manoeuvre that causes the crash. Missing a turn costs a few minutes; taking it from the wrong lane can cost far more.",
        excerptKey: "marking-follow-arrow",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Highway Markings",
        sourceUrl: hb(36),
      },
      {
        id: "vt_s3_21",
        topic: "impairment",
        question:
          "How long does the Vermont manual say it takes for one drink to be processed out of your body?",
        choices: ["About 20 minutes", "At least an hour", "About 30 minutes", "It depends entirely on body weight"],
        correctIndex: 1,
        explanation:
          "At least an hour per drink, which is why the manual warns you may have to wait several hours before it is safe to drive at all.",
        context:
          "The figure matters because it is the only lever you have. The manual repeats twice that time is the only way to reduce the effects of alcohol, and names the things that do not work: coffee, a cold shower, exercise and running around. None of them changes your blood alcohol concentration; they only change how alert you feel, which is worse than useless behind the wheel.",
        trap:
          "Feeling more awake is not being less impaired. Alcohol takes judgment and your sense of speed first, so the driver who feels recovered is the one least able to assess it.",
        excerptKey: "dui-hour-per-drink",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Impaired Driving",
        sourceUrl: hb(54),
      },
      {
        id: "vt_s3_22",
        topic: "emergencies",
        question:
          "You are caught in a blizzard on a Vermont road and your vehicle becomes stuck. What does the manual advise?",
        choices: [
          "Set out on foot toward the nearest visible building",
          "Run the engine continuously to stay warm",
          "Stay in the vehicle and run the engine about 10 minutes each hour",
          "Sleep to conserve energy until help arrives",
        ],
        correctIndex: 2,
        explanation:
          "Stay put and ration the heat. The manual says to remain in the vehicle where rescuers are most likely to find you, and to run the engine and heater about 10 minutes each hour.",
        context:
          "Two details go with it. Keep snow clear of the exhaust pipe and crack a downwind window while the engine runs, because carbon monoxide is the real danger of sitting in a running car in a drift. And take turns sleeping - one person stays awake to watch for rescue crews. The manual also warns that blowing snow distorts distance, so a building that looks close may be far beyond walking range.",
        trap:
          "Walking to a building you can see is the decision that kills people. The manual says not to set out unless you can see shelter close by and know you can reach it.",
        excerptKey: "stranded-engine-ten-minutes",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 If you are caught in a blizzard or stranded",
        sourceUrl: hb(48),
      },
      {
        id: "vt_s3_23",
        topic: "signs",
        question:
          "A sign has been covered by snow so you cannot read the wording. What does the manual say you should still be able to work out?",
        choices: [
          "Nothing: an unreadable sign has no effect",
          "The general meaning of the sign from its shape",
          "The speed limit, from the sign's height",
          "Only whether it is a Vermont or a federal sign",
        ],
        correctIndex: 1,
        explanation:
          "The shape survives the snow. The manual says that if a sign is covered by dirt, snow or anything else you should know its general meaning - regulatory, warning or information - from its shape.",
        context:
          "That is why the shape system is worth learning in its own right rather than as a memory aid. Octagon for stop, downward triangle for yield, diamond for a warning, rectangle for a rule, and the orange family for work zones. It also explains why the octagon is reserved for one message and nothing else.",
        trap:
          "Waiting until you can read the words means reacting to the sign far too late, particularly in a Vermont winter where the words are exactly what the snow covers first.",
        excerptKey: "sign-covered",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Road Signs",
        sourceUrl: hb(33),
      },
      {
        id: "vt_s3_24",
        topic: "sharing",
        question:
          "You are following a horse and rider on a Vermont road. What does the manual require?",
        choices: [
          "Sound the horn once so the rider knows you are there",
          "Pass quickly to minimise the time you are alongside",
          "Leave at least a 4 second following distance and reduce speed",
          "Wait for the rider to leave the roadway before proceeding",
        ],
        correctIndex: 2,
        explanation:
          "Four seconds, and slower. A person riding an animal has all the rights of a driver, and the manual requires you to reduce speed and take every reasonable precaution to avoid frightening the animal.",
        context:
          "The manual is specific about what frightens a horse: the horn and a revved engine, especially from a motorcycle. When you do pass, use the full traffic lane to get completely by and do not cut back in quickly. 23 V.S.A. 1127 adds a duty to yield to any animals being herded on or across a highway, and negligent driving around them can be punished by fine or imprisonment.",
        trap:
          "A friendly toot to warn the rider is the exact thing the manual tells you not to do. It is what starts the bolt.",
        excerptKey: "animals-four-seconds",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Sharing the Road with Domestic Animals",
        sourceUrl: hb(46),
      },
      {
        id: "vt_s3_25",
        topic: "licensing",
        question:
          "How does the Vermont Learner's Permit knowledge test work, and what does it take to pass?",
        choices: [
          "20 questions online, four answers each, 16 correct to pass",
          "25 questions at a DMV office, 20 correct to pass",
          "30 questions online, 24 correct to pass",
          "20 questions at a DMV office, 15 correct to pass",
        ],
        correctIndex: 0,
        explanation:
          "Twenty questions, four answers each, only one correct, and at least 16 right to pass. The manual also notes the test is online, and elsewhere says plainly that it is no longer taken in a DMV office.",
        context:
          "Fail and you wait at least one day before taking another, and you pay the knowledge test fee each time. The manual publishes no time limit and neither does the DMV website. The examination fee and the permit together come to $63, made up of a $39 knowledge test and a $24 permit.",
        trap:
          "Passing the test does not get you the permit on its own. The manual warns that the permit will not be issued unless every other requirement is met and every required document provided.",
        excerptKey: "test-20-questions",
        sourceLabel: "Vermont Driver's Manual - Chapter 4 What are the Tests Like",
        sourceUrl: hb(19),
      },
      {
        id: "vt_s3_26",
        topic: "safety",
        question:
          "You are driving on a Vermont road when your right wheels drop off the pavement onto a low shoulder. What does the manual tell you to do?",
        choices: [
          "Brake hard and steer back onto the pavement at once",
          "Reduce speed without braking, then ease back on at slow speed",
          "Accelerate to lift the vehicle back onto the surface",
          "Steer sharply left to climb the edge before you lose control",
        ],
        correctIndex: 1,
        explanation:
          "Slow without braking, then come back on carefully at a low speed. The manual gives this under low shoulders, which it says are common where road level sits above the shoulder, particularly in construction zones.",
        context:
          "The reason the technique is counter-intuitive is the height of the pavement edge. Steering back at speed makes the tyre climb the lip suddenly and throws the car across the road. The same principle runs through the manual's slippery-surface advice: shed speed first, make no sudden change of direction, and get the car settled before you do anything else.",
        trap:
          "Yanking the wheel back onto the pavement is the reflex, and it is the one that puts you into oncoming traffic.",
        excerptKey: "workzone-low-shoulder",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Low Shoulders",
        sourceUrl: hb(38),
      },
      {
        id: "vt_s3_27",
        topic: "signals",
        question:
          "What does a solid GREEN arrow at a Vermont intersection tell you about oncoming traffic?",
        choices: [
          "Oncoming traffic also has a green and you must yield",
          "Oncoming traffic is being held on a red light",
          "Oncoming traffic has a flashing yellow arrow",
          "Oncoming traffic must yield to you but still has a green",
        ],
        correctIndex: 1,
        explanation:
          "A solid green arrow is a protected turn. The manual says left turns have the right of way and that oncoming traffic has a red light.",
        context:
          "It is the only arrow state that gives you priority. The flashing yellow arrow means you may turn after yielding, because the oncoming side has a green. The solid yellow arrow means the phase is ending. The solid red arrow means stop and wait, and unlike a circular red it never permits the turn.",
        trap:
          "Protected does not mean uncontested. Pedestrians can still be in the crosswalk you are turning across, and the manual has you look for them on every turn.",
        excerptKey: "signal-green-arrow",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Arrows",
        sourceUrl: hb(33),
      },
      {
        id: "vt_s3_28",
        topic: "rules",
        question:
          "You are on a divided Vermont highway and notice the line along the right edge is YELLOW. What does that mean?",
        choices: [
          "You are in a passing lane",
          "The shoulder is closed ahead",
          "You are going the wrong way",
          "A left exit is coming up",
        ],
        correctIndex: 2,
        explanation:
          "Yellow on your right means you are travelling the wrong way. The manual poses the question itself and answers it in capitals: on a divided highway the line to your right should be white.",
        context:
          "The logic runs through every marking on the road. Yellow separates traffic moving in opposite directions and white separates lanes moving the same way, which is why a yellow line belongs on your LEFT. The manual repeats the same test for temporary work zone markings: the yellow markings will be on your left, and if they are not you are in the wrong lane.",
        trap:
          "The instinct is to look at the centre of the road for the answer. The edge line is the faster tell, and at night it is often the only line you can see.",
        excerptKey: "marking-yellow-right-wrong-way",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Interstate Driving",
        sourceUrl: hb(52),
        commonlyMissed: true,
      },
      {
        id: "vt_s3_29",
        topic: "speed",
        question:
          "The Vermont manual says stopping a passenger car from 60 mph on dry pavement takes roughly how far?",
        choices: ["About 120 feet", "About 75 feet", "About 400 feet", "About 240 feet"],
        correctIndex: 3,
        explanation:
          "About 240 feet. The manual gives the figure in its work zone section and pairs it with 75 feet for the same car stopping from 30 mph.",
        context:
          "The pairing is the point. Doubling the speed from 30 to 60 does not double the distance, it more than triples it, which is why the manual builds its work zone advice around slowing early and holding a four-second gap. Add reaction distance to both figures - about three-quarters of a second before your foot even reaches the pedal - and the real numbers are longer again.",
        trap:
          "Assuming stopping distance scales with speed is the arithmetic error behind most rear-end crashes. It scales with speed squared.",
        excerptKey: "follow-stopping-distances",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Work Zone Safety",
        sourceUrl: hb(36),
      },
      {
        id: "vt_s3_30",
        topic: "parking",
        question:
          "The manual says not to stop or park where your vehicle cannot be seen for at least how far in either direction?",
        choices: ["100 feet", "150 feet", "200 feet", "300 feet"],
        correctIndex: 1,
        explanation:
          "One hundred and fifty feet. The manual gives it as part of the rural parking rule, alongside not stopping on a hill or a curve.",
        context:
          "23 V.S.A. 1101 approaches the same problem from the other side with a larger number: where parking is permitted, a stopped vehicle must be visible from 200 feet in each direction along the highway, and an unobstructed width must be left for other traffic to pass. Both rules exist because a car that appears without warning on a rural road is a crash waiting to be reported.",
        trap:
          "A wide shoulder does not solve it. The test is sight distance, and a wide shoulder just over a crest is exactly the place that fails it.",
        excerptKey: "park-150-feet-visibility",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Parking Your Vehicle",
        sourceUrl: hb(30),
      },
      {
        id: "vt_s3_31",
        topic: "rightOfWay",
        question:
          "You are already inside a Vermont roundabout when an ambulance with lights and siren approaches. What should you do?",
        choices: [
          "Stop where you are and let it pass through",
          "Reverse out of the roundabout to clear the way",
          "Carry on and pull over once you have safely exited",
          "Change lanes to the outside and stop",
        ],
        correctIndex: 2,
        explanation:
          "Keep going and pull over after you are out. The manual says that if you are already in the roundabout you pull over once you have safely exited; if you have not entered yet, you pull over and let the emergency vehicle pass.",
        context:
          "It is a deliberate exception to the general move-over rule, and it exists because stopping inside a circulating lane blocks the only path the ambulance has. The same reasoning drives the other roundabout rules: no lane changes once inside, choose your lane before you enter, and signal your exit.",
        trap:
          "Stopping dead the moment you hear the siren is the reflex the manual carves out an exception for. Inside a roundabout it makes the blockage worse.",
        excerptKey: "roundabout-emergency",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Roundabouts",
        sourceUrl: hb(31),
      },
      {
        id: "vt_s3_32",
        topic: "sharing",
        question:
          "Two cyclists are riding side by side on a narrow Vermont road ahead of you. What is the position?",
        choices: [
          "They may legally ride two abreast, and you wait until it is safe to pass",
          "Riding two abreast is illegal and you may pass",
          "You may pass between them if there is room",
          "They must ride single file whenever a vehicle approaches",
        ],
        correctIndex: 0,
        explanation:
          "Riding two abreast is lawful in Vermont so long as the riders do not impede the normal and reasonable flow of traffic. The manual tells drivers to slow down until it is safe to pass or to give them time to adjust their position.",
        context:
          "The rest of the passing rule still applies: at least four feet of clearance, and if the road is too narrow to give it, you wait rather than forcing anyone off the edge. The manual also notes that a cyclist may lawfully take the centre of the lane where hazards make the edge unsafe, and may move as far left as needed when that is what safety requires.",
        trap:
          "Even when the riders should move over, that is not your decision to enforce. The manual's instruction to you is to slow down and wait for a safe gap.",
        excerptKey: "bike-two-abreast-rule",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Bicyclists Responsibilities",
        sourceUrl: hb(42),
      },
      {
        id: "vt_s3_33",
        topic: "impairment",
        question:
          "Which of these does the Vermont manual identify as a sign of drowsy driving?",
        choices: [
          "Feeling unusually alert on a familiar road",
          "Not remembering the last few miles you drove",
          "Choosing a slower route than usual",
          "Turning the radio up",
        ],
        correctIndex: 1,
        explanation:
          "Losing the last few miles is one of the manual's listed signs, alongside trouble focusing or keeping your eyes open, repeated yawning, drifting out of the lane and missing traffic signs.",
        context:
          "The manual's remedy is short: find a safe place to pull over and stop. It specifically rules out the two things people try instead - opening a window and turning the radio up - and makes a sharp observation, that the moment you start looking for a way to stay awake is itself the sign you need to stop. It also notes drowsy drivers can drive so poorly they appear drunk.",
        trap:
          "Almost home is when this bites hardest. The familiar last stretch is where attention lapses and the miles stop registering.",
        excerptKey: "drowsy-signs",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Drowsy Driving",
        sourceUrl: hb(55),
      },
      {
        id: "vt_s3_34",
        topic: "emergencies",
        question:
          "You hit a parked car in a Vermont street and cannot find the owner. What must you do?",
        choices: [
          "Report it to the police within 72 hours and take no other step",
          "Leave your name, address and phone number in or on the vehicle",
          "Nothing, if the damage is only cosmetic",
          "Wait at the scene until the owner returns",
        ],
        correctIndex: 1,
        explanation:
          "Leave your details on the car. The manual says to write your name, address and phone number and leave it in or on the vehicle so the owner knows whom to contact.",
        context:
          "23 V.S.A. 1128 makes the duty to stop and identify yourself a criminal one where injury or damage to another's property results, and the penalties climb steeply where there is serious injury or death. The written DMV report is separate again, required within 72 hours where anyone is injured or total damage exceeds $3,000.",
        trap:
          "Deciding the damage looks minor is not your call to make. The duty attaches to damage to property other than your own vehicle, not to your estimate of the repair bill.",
        excerptKey: "crash-parked-vehicle-note",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 What to Do After a Crash",
        sourceUrl: hb(59),
      },
      {
        id: "vt_s3_35",
        topic: "safety",
        question:
          "The manual says driving with low beam headlights on during the day reduces the risk of head-on collisions by roughly how much?",
        choices: ["More than 20%", "About 5%", "About 50%", "About 10%"],
        correctIndex: 0,
        explanation:
          "More than 20 percent, according to the studies the manual cites. That is why its stated best practice is to drive with at least low beams on even in daylight.",
        context:
          "The manual is careful to separate daytime running lights from headlights. Running lights come on automatically, light only the front, and it warns they should not be confused with your headlights - a driver relying on them at dusk has no tail lights showing at all. Parking lights are for a parked vehicle and nothing else.",
        trap:
          "Automatic lights are not the same as your lights being on. In fog and heavy rain the manual requires headlights, and a dashboard that lit itself is not proof they are lit.",
        excerptKey: "light-daytime-20-percent",
        sourceLabel: "Vermont Driver's Manual - Chapter 7 Daytime Driving",
        sourceUrl: hb(50),
      },
    ],
  },
];
