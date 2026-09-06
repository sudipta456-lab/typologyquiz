import type { DrivingTestSet } from "../types";

// Every fact below was checked against the Oklahoma Driver Manual published by
// Service Oklahoma (the PDF's own footer reads "Updated 11/24/25", and page 73
// carries a 2025 Service Oklahoma copyright line), plus the sections of Title 47
// of the Oklahoma Statutes published by the Oklahoma State Courts Network and
// the Service Oklahoma web pages that carry the test format and the graduated
// licensing rules.
//
// The manual runs 74 pages and is unusually complete on numbers for a state
// handbook - it prints the statutory speed table, the full unlawful-parking
// list and the point schedule, all of which many states leave to the statute.
// The gaps that do exist are narrow and specific:
//
// 1. The manual never states the written test's length, pass mark or time
//    limit. The 20 questions, 15 correct and 60 minutes come from Service
//    Oklahoma's Written Knowledge Test page.
// 2. The manual gives no distance for stopping behind a school bus, and no
//    penalty figure beyond the one-year revocation. 47 O.S. Section 11-705
//    supplies the duty and the fine, and it is the statute, not the manual,
//    that spells out the divided-highway exception.
// 3. The manual describes the graduated licence in prose but never lists the
//    50 hours of supervised driving (10 at night) or the 180-day permit hold.
//    Those are on Service Oklahoma's Intermediate License page.
//
// One conflict is flagged where it arises. The manual's Table 1 (page 6) says a
// 16-year-old's driving test "can be taken 180 days after the permit is issued",
// while Table 2 on page 10 says "Must be 16 years old and have had your permit
// for at least 6 months". Service Oklahoma's Intermediate License page states
// 180 days. Questions here use the 180-day figure, which satisfies every
// reading. Separately, the manual's own liability-insurance box on page 16 has a
// typographical slip - it prints "$25,000 for injury or death of two or more
// persons" where page 72 correctly prints "$25,000 for injury or death of one
// person". Questions use the page 72 wording, which matches the statute.
//
// Questions are original. Explanations, context notes and trap notes are
// written from scratch; the deep link is there so the learner reads Service
// Oklahoma's own authoritative wording on the state's site.
const HB =
  "https://oklahoma.gov/content/dam/service-oklahoma/Documents/OklahomaDriverManual.pdf";
const WRITTEN = "https://oklahoma.gov/service/popular-services/written-test.html";
const PERMIT = "https://oklahoma.gov/service/all-pages/learner-permit.html";
const INTERMEDIATE = "https://oklahoma.gov/service/all-pages/intermediate-license.html";
const stat = (id: string) =>
  `https://www.oscn.net/applications/oscn/DeliverDocument.asp?CiteID=${id}`;

export const oklahomaSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Oklahoma Basics",
    difficulty: "starter",
    description:
      "The rules you meet on your first drive in Oklahoma: what the shapes and colors mean, who goes first, and the handful of numbers Service Oklahoma's 20-question written test expects you to know cold.",
    questions: [
      {
        id: "ok_s1_01",
        topic: "signs",
        question:
          "You reach a red eight-sided sign at an intersection with no painted stop line. Where does the Oklahoma Driver Manual say you must stop?",
        choices: [
          "Anywhere you can see cross traffic clearly",
          "Level with the near edge of the cross street",
          "Before the pedestrian crosswalk, even if the crosswalk is not marked",
          "Only if another vehicle is approaching",
        ],
        correctIndex: 2,
        explanation:
          "The octagon means a full stop, and Oklahoma is specific about the place: you stop short of the pedestrian crosswalk whether or not anyone has painted one. Then you stay stopped until the way is clear in every direction, not just the direction you plan to go.",
        context:
          "Oklahoma teaches signs by shape and color before words, because a shape is readable in glare, snow or a language you do not read. The octagon is reserved for STOP and nothing else. The manual makes the point directly: a stop sign caked in dirt or bent double is still a stop sign, because the shape and the color already told you.",
        trap:
          "A rolling stop is not a stop, and stopping level with the corner is too late. The crosswalk line, marked or imaginary, is where the front of your car belongs.",
        excerptKey: "stop-sign-octagon",
        sourceLabel: "Oklahoma Driver Manual - Chapter 4: Signs, Signals and Markings",
        sourceUrl: HB,
      },
      {
        id: "ok_s1_02",
        topic: "signals",
        question:
          "You are stopped at a steady red light in Oklahoma and want to turn right. What does the manual allow?",
        choices: [
          "Turn right without stopping if the way is clear",
          "Turn right after a complete stop, unless a sign forbids it, yielding to pedestrians, vehicles and bicycles",
          "Turn right only when a green arrow appears",
          "Turn right only where a sign expressly permits it",
        ],
        correctIndex: 1,
        explanation:
          "Right on red is Oklahoma's default rather than a special permission. Two things ride along with it: the stop has to be complete first, and a posted sign forbidding the turn overrides the default. Once stopped, you give way to everyone already using the intersection.",
        context:
          "Oklahoma treats red as stop and stay stopped, with two movements carved out after that stop. Right on red is one. The other is a left on red from a one-way street into another one-way street, on exactly the same terms. The manual names bicycles alongside pedestrians and vehicles in the list of who you yield to.",
        trap:
          "\"Nothing was coming\" is not the test. If you never came to a full stop, the turn is unlawful on an empty road at three in the morning.",
        excerptKey: "turn-on-red",
        sourceLabel: "Oklahoma Driver Manual - Chapter 4: Traffic Signals",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ok_s1_03",
        topic: "rightOfWay",
        question:
          "Two cars reach a four-way stop at exactly the same moment, at right angles to each other. What is Oklahoma's tie-breaker?",
        choices: [
          "The driver on the left yields to the driver on the right",
          "The driver on the right yields to the driver on the left",
          "The driver going straight goes ahead of the driver turning",
          "Whoever signals first goes first",
        ],
        correctIndex: 0,
        explanation:
          "Order of arrival settles most four-way stops: whoever entered the intersection first goes first. The right-hand rule only breaks a genuine tie, and when it does, the driver on the left is the one who waits.",
        context:
          "The manual applies the same pair of rules to four-way stops and to intersections with no signs or signals at all. First to enter has the right of way; simultaneous arrival goes to the driver on the right. Sitting under both is Oklahoma's framing of right of way as something to be given rather than taken.",
        trap:
          "Going straight does not outrank turning here. Arrival order decides it, and the right-hand rule is only the fallback.",
        excerptKey: "row-intersections",
        sourceLabel: "Oklahoma Driver Manual - Chapter 5: Right-of-Way",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ok_s1_04",
        topic: "speed",
        question:
          "You are on an Oklahoma turnpike and there is no speed limit sign in sight. What is the state maximum?",
        choices: ["65 mph", "70 mph", "75 mph", "80 mph"],
        correctIndex: 3,
        explanation:
          "Turnpikes carry Oklahoma's highest statutory default at 80 mph. Controlled-access highways that are not turnpikes default to 75, so the two are easy to swap if you learn only one of them.",
        context:
          "The manual prints a short table of state limits that apply unless a sign says otherwise: 80 on turnpikes, 75 on controlled-access highways, 65 on undivided state highways, 55 on county roads, 35 inside state parks and wildlife refuges, and 25 in a properly marked school zone on a highway outside a municipality. Cities and towns set their own limits separately.",
        trap:
          "75 is the controlled-access figure, not the turnpike figure. Oklahoma is one of the few states where the toll road is faster than the free interstate.",
        excerptKey: "speed-table",
        sourceLabel: "Oklahoma Driver Manual - Chapter 7: Speed Limits",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ok_s1_05",
        topic: "signs",
        question: "A downward-pointing red and white triangle faces you. What does it require?",
        choices: [
          "Stop completely, then proceed",
          "Slow down, be ready to stop, and let oncoming vehicles pass before you cross or enter the traffic flow",
          "Keep your speed, since the sign is only advisory",
          "Sound your horn before entering",
        ],
        correctIndex: 1,
        explanation:
          "A yield sign asks you to slow and give way. Stopping is required only when safety demands it, but the moment it does, stopping stops being optional.",
        context:
          "The triangle is the only three-sided sign on Oklahoma roads, so the shape alone identifies it. Yield is the lighter cousin of stop: no automatic halt, but no right to push in either. Crossbucks at railroad crossings are treated the same way, which is why the manual tells you to slow, look and listen at every one.",
        trap:
          "Yield is not \"carry on regardless\". If there is no gap, you have to stop and wait for one.",
        excerptKey: "yield-triangle",
        sourceLabel: "Oklahoma Driver Manual - Chapter 4: Regulatory Signs",
        sourceUrl: HB,
      },
      {
        id: "ok_s1_06",
        topic: "safety",
        question:
          "Which following distance does the Oklahoma Driver Manual give as its rule of thumb in good conditions?",
        choices: [
          "Two seconds",
          "Half a car length for every 10 mph",
          "One car length for every 10 mph of speed, or the three-second rule",
          "Four seconds at every speed",
        ],
        correctIndex: 2,
        explanation:
          "Oklahoma offers two ways to measure the same gap: a car length for every 10 mph, or the three-second count. Either is acceptable, and the count is easier to use at speed because it does not need you to judge lengths.",
        context:
          "You pick a fixed object ahead, start counting when the car in front passes it, and you should still be counting as you reach it. In bad weather or on poor surfaces the manual moves you to four seconds, and it tells you to stretch it further behind trucks and motorcycles, at night, and in fog.",
        trap:
          "Two seconds is the figure several other states teach. Oklahoma's baseline is three, moving to four when conditions are poor.",
        excerptKey: "following-three-second",
        sourceLabel: "Oklahoma Driver Manual - Chapter 8: Following",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ok_s1_07",
        topic: "sharing",
        question:
          "A school bus ahead of you on a two-lane street switches on its flashing red lights and swings out its stop sign. What must you do?",
        choices: [
          "Stop, and stay stopped until the bus moves, the driver waves you on, or the red lights go off",
          "Slow to 20 mph and pass with caution",
          "Stop only if you can see children on the road",
          "Stop, count to five, then continue if nobody is crossing",
        ],
        correctIndex: 0,
        explanation:
          "Flashing red lights and the extended stop arm mean children are getting on or off, and the stop lasts until one of three things happens: the bus starts moving, the driver motions you past, or the lights go off and the arm folds back.",
        context:
          "Oklahoma backs this with the heaviest routine penalty in the manual. Failing to stop for a school bus with its red loading lights flashing carries a mandatory one-year revocation of your driver licence, and the offense is worth four points on the mandatory point system, the same as reckless driving.",
        trap:
          "Waiting a few seconds and moving off is still a violation. The signal to go is the bus, the driver or the lights, never your own count.",
        excerptKey: "schoolbus-must-stop",
        sourceLabel: "Oklahoma Driver Manual - Chapter 5: Yield to a School or Church Bus",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ok_s1_08",
        topic: "parking",
        question: "How close to a fire hydrant may you legally park in Oklahoma?",
        choices: [
          "No closer than 10 feet",
          "No closer than 15 feet",
          "No closer than 20 feet",
          "No closer than 25 feet",
        ],
        correctIndex: 1,
        explanation:
          "Fifteen feet is Oklahoma's hydrant figure. It is one of a short list of distances the manual prints outright, so it is fair game on the test in a way that many states' parking rules are not.",
        context:
          "The unlawful-parking list runs to thirteen entries and the numbers are all different: 15 feet from a hydrant, 20 feet from a crosswalk at an intersection, 30 feet from a stop sign, signal or flashing beacon, 50 feet from the nearest rail of a railroad crossing, and 20 feet from a fire station driveway. Learn them as a set, because the test can ask about any of them.",
        trap:
          "20 feet is the crosswalk figure and 30 feet is the stop-sign figure. Mixing the list up is the usual way people lose this question.",
        excerptKey: "parking-hydrant-15",
        sourceLabel: "Oklahoma Driver Manual - Chapter 9: Unlawful Parking",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ok_s1_09",
        topic: "impairment",
        question:
          "You are 17 and a trooper tests your breath after a stop. At what alcohol level does Oklahoma revoke your licence?",
        choices: [
          "0.08 or more, the same as an adult",
          "0.05 or more",
          "0.02 or more",
          "Any measurable amount of alcohol at all",
        ],
        correctIndex: 3,
        explanation:
          "Under 21, Oklahoma's line is zero. Any measurable quantity of alcohol in your blood or breath triggers the revocation, and there is no small allowance underneath it.",
        context:
          "The zero-tolerance law also covers evidence of being under the influence of any other intoxicating substance, or of a combination. A first offense revokes the licence for six months and a second for twelve. If you are under 16 when it happens, Service Oklahoma extends the cancellation until you turn 16.",
        trap:
          "0.08 is the adult number. Quoting it for a teenager is the single most common error on this rule, and the real answer has no number in it.",
        excerptKey: "zero-tolerance-under-21",
        sourceLabel: "Oklahoma Driver Manual - Chapter 12: Zero Tolerance for Drivers Under 21",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ok_s1_10",
        topic: "licensing",
        question:
          "You hold an Oklahoma learner permit. When may you drive, and who has to be with you?",
        choices: [
          "Any hour, with any licensed driver in the car",
          "Any hour, with a licensed driver at least 21 beside you",
          "Between 5 a.m. and 10 p.m., with a licensed driver at least 21 beside you",
          "Between 6 a.m. and midnight, alone once you have held the permit 30 days",
        ],
        correctIndex: 2,
        explanation:
          "A learner permit buys you a window, not a licence: 5 a.m. to 10 p.m., and only while a licensed driver of at least 21 is sitting beside you. Both halves apply at once.",
        context:
          "That accompanied-driver rule is printed on your licence as restriction 9, and the daytime window carries over to the intermediate licence as restriction T. At the intermediate stage the hours relax for school, church and work trips, and disappear entirely when a licensed driver over 21 is in the front passenger seat.",
        trap:
          "An older sibling with a fresh licence does not count. The supervising driver has to be 21 or older, and has to be in the front seat.",
        excerptKey: "permit-privileges",
        sourceLabel: "Service Oklahoma - Learner Permit",
        sourceUrl: PERMIT,
      },
      {
        id: "ok_s1_11",
        topic: "signs",
        question: "A yellow diamond-shaped sign with a black symbol on it is telling you what?",
        choices: [
          "Something ahead that you need to prepare for",
          "A law you must obey exactly as written",
          "The route number of the highway you are on",
          "A service such as fuel or lodging at the next exit",
        ],
        correctIndex: 0,
        explanation:
          "Diamond plus yellow means warning. The sign is not itself a law; it is telling you a curve, a merge, a crossing or a hazard is coming and that you should adjust before you get there.",
        context:
          "Oklahoma sorts signs by color as much as by shape. Yellow diamonds warn, black-and-white rectangles regulate, orange marks a work zone, green and white guide you, blue lists services, brown points to recreation and history, and fluorescent yellow-green is reserved for high-emphasis school, pedestrian and bicycle warnings.",
        trap:
          "Regulatory signs are rectangles, not diamonds. Speed limit signs are the everyday example, and they are white rectangles for exactly that reason.",
        excerptKey: "warning-signs-diamond",
        sourceLabel: "Oklahoma Driver Manual - Chapter 4: Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "ok_s1_12",
        topic: "signals",
        question: "A traffic light at a crossroads is showing a steady flashing red. What does it mean?",
        choices: [
          "The signal has failed, so treat the intersection as uncontrolled",
          "Slow down and look, but you need not stop",
          "Stop and wait for the light to change to green",
          "It means the same as a stop sign: stop, then go when it is safe to cross",
        ],
        correctIndex: 3,
        explanation:
          "A flashing red is a stop sign in light form. You come to a complete stop, then proceed when the crossing is genuinely clear. Nothing is going to turn green, so waiting for it is waiting forever.",
        context:
          "The manual pairs it with a flashing yellow, which is the lighter instruction: slow down, look both ways and drive through carefully, ready to stop. Oklahoma notes that flashing reds are used at intersections it considers dangerous, precisely because the crossing traffic may or may not be stopping.",
        trap:
          "Sitting and waiting for green is the classic beginner's error at a flashing red, and it is exactly the kind of thing an examiner watches for on the drive test.",
        excerptKey: "flashing-red-light",
        sourceLabel: "Oklahoma Driver Manual - Chapter 4: Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "ok_s1_13",
        topic: "rules",
        question: "How far ahead of a turn does the Oklahoma Driver Manual say you should signal?",
        choices: [
          "50 feet",
          "At least 100 feet, or one third of a block",
          "At least three seconds before the turn",
          "Two car lengths",
        ],
        correctIndex: 1,
        explanation:
          "Oklahoma states the distance twice over: at least 100 feet, or a third of a block, whichever way you prefer to think about it. The same distance applies when you are signalling that you will slow down or stop.",
        context:
          "The manual is blunt that turning without signalling is illegal, not merely rude. The statute adds the same 100-foot figure for a lane change, and the diagrams of right and left turns both start the signal and the slowing at least 100 feet from the corner.",
        trap:
          "\"Signal as you start to turn\" is far too late. The point of the distance is to give the driver behind you time to react before your speed drops.",
        excerptKey: "signal-100-feet",
        sourceLabel: "Oklahoma Driver Manual - Chapter 6: Turning",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ok_s1_14",
        topic: "emergencies",
        question:
          "An ambulance comes up behind you with its siren on and its lights flashing. What does Oklahoma require?",
        choices: [
          "Speed up to clear the road ahead of it",
          "Stop immediately, wherever you are",
          "Pull over to the right edge of the roadway, clear of intersections, and stop until it has passed",
          "Move one lane to the left and keep going",
        ],
        correctIndex: 2,
        explanation:
          "Right edge, clear of intersections, and stopped until it has gone by. The words \"clear of intersections\" matter: stopping inside a junction bottles up the very route the ambulance needs.",
        context:
          "The obligation attaches to lights or a siren, so an emergency vehicle running dark and quiet gets no special claim on the road. If traffic is too heavy to pull over at all, the manual asks you to clear a path instead of freezing. And an officer signalling you to stop while you are in the left lane still expects you on the right shoulder, across however many lanes that takes.",
        trap:
          "Stopping on the spot in the middle of an intersection is worse than useless. Get through it first, then pull right.",
        excerptKey: "yield-emergency",
        sourceLabel: "Oklahoma Driver Manual - Chapter 5: You Must Always Yield",
        sourceUrl: HB,
      },
      {
        id: "ok_s1_15",
        topic: "speed",
        question:
          "You pass a properly marked school zone on a highway outside a town, and no other limit is posted. What speed does state law set?",
        choices: ["25 mph", "20 mph", "30 mph", "35 mph"],
        correctIndex: 0,
        explanation:
          "Twenty-five is the statutory school-zone figure for a properly marked zone on a highway outside a municipality. Inside city limits the town sets its own number and posts it.",
        context:
          "A school zone sign with a flashing yellow beacon works differently again: when the beacon is flashing you must reduce to the limit shown on the sign. Fines are doubled for speeding in a school zone when workers or equipment are present, the same doubling that applies in construction zones.",
        trap:
          "35 mph is the state park and wildlife refuge figure. The two low numbers in the table are easy to swap.",
        excerptKey: "speed-table",
        sourceLabel: "Oklahoma Driver Manual - Chapter 7: Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "ok_s1_16",
        topic: "signs",
        question: "You see orange signs, orange barrels and orange cones ahead. What are they telling you?",
        choices: [
          "A detour onto a marked scenic route",
          "A section of road maintained by a private company",
          "An emergency scene that police have closed",
          "You are approaching or already in a work zone",
        ],
        correctIndex: 3,
        explanation:
          "Orange is Oklahoma's work-zone color, on signs, barricades and channeling devices alike. Seeing it means slowing to the posted work-zone speed and expecting workers, equipment and sudden lane shifts.",
        context:
          "Two penalties sit behind that color. Speeding fines are doubled in a construction or maintenance zone when workers or equipment are present, and failing to obey construction signs, signals or markings is a misdemeanor carrying a fine of $100 to $1,000 and up to 30 days in jail, plus liability for any damage or injury.",
        trap:
          "Orange is not advisory. The work-zone limit is a posted limit like any other, and it is the one where the fine doubles.",
        excerptKey: "orange-work-zone",
        sourceLabel: "Oklahoma Driver Manual - Chapter 4: Construction and Maintenance Signs",
        sourceUrl: HB,
      },
      {
        id: "ok_s1_17",
        topic: "signals",
        question:
          "There is a solid yellow line on your side of the center of a two-lane road. What does it tell you?",
        choices: [
          "Passing is allowed if you can complete it before the line ends",
          "Do not pass, though you may still cross the line to turn left",
          "Traffic on the far side is moving in the same direction as you",
          "The road narrows ahead",
        ],
        correctIndex: 1,
        explanation:
          "A solid yellow line in your lane means no passing, single or double. Crossing it to make a left turn into a driveway or side street is still allowed, which is the one exception people forget.",
        context:
          "Yellow always separates traffic moving in opposite directions in Oklahoma, and white separates traffic moving the same way. Yellow dashes mean passing is permitted when safe; a solid yellow on your side means it is not. The manual's shorthand is that a solid yellow to your left tells you two things at once: you are on the correct side of the road, and crossing it is dangerous.",
        trap:
          "\"I can finish before the line ends\" is not the rule. If the solid line is in your lane at the moment you pull out, the pass is unlawful.",
        excerptKey: "solid-yellow-no-pass",
        sourceLabel: "Oklahoma Driver Manual - Chapter 6: Lane Usage and Maneuvers",
        sourceUrl: HB,
      },
      {
        id: "ok_s1_18",
        topic: "safety",
        question: "When does the Oklahoma Driver Manual say your headlights must be on?",
        choices: [
          "Only between midnight and dawn",
          "Whenever the sun is below the horizon",
          "From 30 minutes after sunset until 30 minutes before sunrise",
          "From one hour after sunset until one hour before sunrise",
        ],
        correctIndex: 2,
        explanation:
          "The clock Oklahoma uses runs from half an hour after sunset to half an hour before sunrise. The manual adds a second trigger: whenever a road sign says headlights must be used.",
        context:
          "Beam choice has its own numbers. You dim from high to low within 1,000 feet of an oncoming vehicle and within 600 feet of a vehicle you are following. High beams belong in open country with no other cars nearby, and low beams belong wherever there are streetlights, fog, rain or snow, since high beams reflect back off fog and make things worse.",
        trap:
          "\"When it gets dark\" is not a legal standard. The manual attaches the duty to sunset and sunrise plus 30 minutes, and dusk is exactly when a grey car disappears.",
        excerptKey: "headlight-times",
        sourceLabel: "Oklahoma Driver Manual - Chapter 11: Using High and Low Headlight Beams",
        sourceUrl: HB,
      },
      {
        id: "ok_s1_19",
        topic: "rightOfWay",
        question:
          "Someone steps into the road at a corner where no crosswalk has been painted. What is your duty?",
        choices: [
          "Yield to them, because a crosswalk does not have to be marked to exist",
          "Sound your horn and continue, since only marked crosswalks count",
          "Continue at your speed if you can pass safely behind them",
          "Yield only if they reached the road before you did",
        ],
        correctIndex: 0,
        explanation:
          "Oklahoma gives pedestrians in a crosswalk the right of way over most vehicles whether or not the crosswalk is painted. An unmarked crossing at a corner is still a crossing.",
        context:
          "The manual's definition of \"pedestrian\" is broad: people on foot, skateboarders, in-line and roller skaters, and people using wheelchairs, walkers or similar supports. It also asks you not to honk, gun the engine or otherwise rush somebody crossing in front of you even when the law is on your side.",
        trap:
          "The paint is not what creates the crossing. Waiting for a marked crosswalk before you yield is how people hit pedestrians at quiet corners.",
        excerptKey: "ped-crosswalk-right",
        sourceLabel: "Oklahoma Driver Manual - Chapter 10: Sharing the Road with Pedestrians",
        sourceUrl: HB,
      },
      {
        id: "ok_s1_20",
        topic: "parking",
        question: "How close to the curb must you finish a parallel park in Oklahoma?",
        choices: ["Within 6 inches", "Within 12 inches", "Within 18 inches", "Within 2 feet"],
        correctIndex: 2,
        explanation:
          "Eighteen inches is the figure for an ordinary parallel park, and the drive test measures it. On a hill the manual tightens it to six inches, because the curb has to be close enough to catch the tire if the car rolls.",
        context:
          "You may park parallel to any curb unless a sign forbids it or the curb is painted yellow. The manual walks through the maneuver step by step: pull level with the car ahead and about two feet out, turn the wheel hard left as your front wheels reach its rear bumper, then straighten and back slowly into position.",
        trap:
          "Six inches is the hill figure, not the everyday one. If a question mentions an incline, the tighter number applies.",
        excerptKey: "parallel-18-inches",
        sourceLabel: "Oklahoma Driver Manual - Chapter 9: Parallel Parking",
        sourceUrl: HB,
      },
      {
        id: "ok_s1_21",
        topic: "signs",
        question:
          "You approach a crossbuck at a railroad crossing with no lights or gates. How should you treat it?",
        choices: [
          "As a stop sign, requiring a full stop every time",
          "As a yield sign: slow down, look and listen, and be ready to stop",
          "As advisory only, since no train is signalled",
          "As a speed limit of 15 mph across the tracks",
        ],
        correctIndex: 1,
        explanation:
          "The manual tells you to treat a crossbuck exactly as you would a yield sign. You slow, look and listen, and you prepare to stop if a train is anywhere in sight or hearing.",
        context:
          "The round yellow advance warning sign earlier on the approach asks you to slow and be ready to stop within 15 to 50 feet of the first track. If a sign under the crossbuck names a number of tracks, that number matters: after one train has passed you have to be sure nothing is coming on the other tracks before you move.",
        trap:
          "A crossbuck is not a stop sign, but it is nothing like a green light either. Rolling across without looking is how most car and train collisions happen.",
        excerptKey: "crossbuck-yield",
        sourceLabel: "Oklahoma Driver Manual - Chapter 10: Warning Devices for Highway-Rail Crossings",
        sourceUrl: HB,
      },
      {
        id: "ok_s1_22",
        topic: "licensing",
        question: "How many questions are on Oklahoma's Class D written knowledge test, and how many must you get right?",
        choices: [
          "50 questions, 40 correct",
          "40 questions, 32 correct",
          "25 questions, 20 correct",
          "20 questions, 15 correct",
        ],
        correctIndex: 3,
        explanation:
          "Twenty questions, fifteen correct, which works out at 75 percent. You get 60 minutes, and the result comes back immediately.",
        context:
          "Service Oklahoma lets you take the exam online through KnowTo Drive on a desktop or laptop with a webcam and microphone, or in person at a Service Oklahoma or licensed operator location. Online you get two attempts before you have to come in. Fail and you wait until the next day, and a $4 fee is added to your account for each failed attempt, payable when the permit is issued.",
        trap:
          "The retest wait is a full day, not an hour. Turning up twice in one afternoon does not work.",
        excerptKey: "written-test-format",
        sourceLabel: "Service Oklahoma - Written Knowledge Test",
        sourceUrl: WRITTEN,
        commonlyMissed: true,
      },
      {
        id: "ok_s1_23",
        topic: "sharing",
        question: "How much room must an Oklahoma driver leave when overtaking a bicycle?",
        choices: [
          "Not less than 3 feet",
          "Not less than 2 feet",
          "Not less than 5 feet",
          "Whatever the lane allows, since bicycles must ride at the edge",
        ],
        correctIndex: 0,
        explanation:
          "Three feet is the statutory minimum, and it has to be held until you are safely past the rider, not just at the moment you draw level.",
        context:
          "The manual reminds you that a cyclist can be forced to swerve without warning by a pothole, a car door, gravel or a dog. If the road is too narrow to give three feet, you wait. It also asks you not to pass between a cyclist and oncoming traffic on a two-lane road, which is the pinch that produces most of these collisions.",
        trap:
          "Three feet is not a suggestion in Oklahoma. It is written into Title 47, and the manual cites the section number in the text.",
        excerptKey: "bicycle-three-feet",
        sourceLabel: "Oklahoma Driver Manual - Chapter 10: Sharing the Road with Bicycles",
        sourceUrl: HB,
      },
      {
        id: "ok_s1_24",
        topic: "impairment",
        question: "At what blood alcohol concentration is an adult driver over Oklahoma's DUI limit?",
        choices: ["0.05", "0.06", "0.08", "0.10"],
        correctIndex: 2,
        explanation:
          "Point zero eight is the DUI threshold for a driver 21 or over. Hit it and Service Oklahoma revokes your licence whether or not a court ever convicts you.",
        context:
          "There is a second, lower line below it. An alcohol concentration above 0.05 is relevant evidence that your ability to drive was impaired, and driving while impaired between 0.05 and 0.08 carries a fine of $100 to $500, up to six months in jail, or both. The manual's own point is that impairment starts well below the legal limit.",
        trap:
          "Being under 0.08 is not a free pass. The 0.05 impairment rule is a separate offense with its own penalty.",
        excerptKey: "bac-08-revocation",
        sourceLabel: "Oklahoma Driver Manual - Chapter 12: Oklahoma Implied Consent Laws",
        sourceUrl: HB,
      },
      {
        id: "ok_s1_25",
        topic: "signals",
        question:
          "You are in a left-turn-only lane at a red light and a green left arrow lights up. What may you do?",
        choices: [
          "Wait for the main signal to turn green as well",
          "Turn left in the direction of the arrow, even though the red light is still lit",
          "Turn left only after yielding to oncoming traffic",
          "Go straight ahead if the lane markings allow it",
        ],
        correctIndex: 1,
        explanation:
          "A green arrow authorizes the movement it points to, and it does so even while the round red is still showing. Because the arrow is protected, oncoming traffic is being held.",
        context:
          "The manual adds the flip side: if you are sitting in a turning-only lane, you must wait for the arrow rather than turning on the round green. And a green arrow only ever permits the movement it draws, so you cannot use a left arrow to go straight.",
        trap:
          "Do not confuse this with a flashing yellow arrow, which is permission to turn only after yielding, because oncoming traffic is looking at a green.",
        excerptKey: "green-arrow",
        sourceLabel: "Oklahoma Driver Manual - Chapter 4: Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "ok_s1_26",
        topic: "rules",
        question: "What does the Oklahoma Driver Manual say about using your rearview mirror to back up?",
        choices: [
          "Use it as your main reference, checking over your shoulder occasionally",
          "Use it together with the reversing camera",
          "Use whichever gives the clearest view of the space behind you",
          "Never use the rearview mirror for backing up: turn and look through the rear window",
        ],
        correctIndex: 3,
        explanation:
          "Oklahoma's instruction is flat. You put your left hand at the top of the wheel, your right arm along the back of the seat, and you look directly through the rear window. The mirror is not the tool for this job.",
        context:
          "Backing is harder than driving forward because your own car blocks the view and speed is harder to control. The manual asks you to keep looking to the rear until you have come to a complete stop, to check the front and sides quickly if you are turning as you back, and never to back into an intersection to turn around.",
        trap:
          "This is a wording question as much as a driving one. Examiners in Oklahoma have failed people for relying on the mirror, so the answer really is \"never\".",
        excerptKey: "backing-rear-window",
        sourceLabel: "Oklahoma Driver Manual - Chapter 6: Backing",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ok_s1_27",
        topic: "emergencies",
        question:
          "You are in a collision that damages another car. What does the manual say you must do first?",
        choices: [
          "Stop and call 911 or local law enforcement",
          "Photograph the damage before anything moves",
          "Exchange insurance details and leave",
          "Move both vehicles off the road before doing anything else",
        ],
        correctIndex: 0,
        explanation:
          "Stop and call for help. Everything else on the list, from hazard lights to photographs to swapping details, comes after the call has been made.",
        context:
          "The rest of the sequence is turn on your hazard lights, get help for anyone hurt without moving them unless their life depends on it, move the vehicle if the crash is minor and it is blocking traffic, exchange vehicle, driver, witness and insurance information, take photographs, and say nothing about fault. If you hit a parked car and cannot find the owner, you leave your name, address and insurance information where they will find it.",
        trap:
          "Do not discuss blame at the scene, in either direction. The manual asks you to answer the officer's questions truthfully and leave the fault-finding to them.",
        excerptKey: "after-crash-steps",
        sourceLabel: "Oklahoma Driver Manual - Chapter 11: Your Responsibilities After a Crash",
        sourceUrl: HB,
      },
      {
        id: "ok_s1_28",
        topic: "safety",
        question: "Who must wear a seat belt under Oklahoma's mandatory safety requirements?",
        choices: [
          "The driver only",
          "Everyone in the vehicle, in every seat",
          "Every driver and front-seat passenger",
          "Only occupants under 18",
        ],
        correctIndex: 2,
        explanation:
          "Oklahoma's belt requirement names the driver and every front-seat passenger, and the belt has to be factory-installed and meet federal safety standards.",
        context:
          "Children are covered separately and more strictly. A child under 8 must be in a child passenger restraint system, rear-facing until age 2 or until they outgrow the seat's limits. A child at least 4 but under 8 who is not taller than 4 feet 9 inches must be in a restraint or a seat belt. The manual points out that the back seat is at least 26 percent safer than the front.",
        trap:
          "The belt law and the child-restraint law are different rules. Answering \"everyone, every seat\" describes the safe habit but not what Oklahoma's seat belt requirement actually says.",
        excerptKey: "seat-belt-front",
        sourceLabel: "Oklahoma Driver Manual - Chapter 3: Mandatory Safety Requirements",
        sourceUrl: HB,
      },
      {
        id: "ok_s1_29",
        topic: "speed",
        question:
          "The posted limit is 65 mph, but heavy fog has cut visibility to a few car lengths. What does Oklahoma's Basic Speed Rule require?",
        choices: [
          "You may keep 65, since that is the posted limit",
          "Slow to a speed that is safe for the conditions and lets you stop within the distance you can see",
          "Slow to exactly half the posted limit",
          "Turn on hazard lights and keep pace with the traffic around you",
        ],
        correctIndex: 1,
        explanation:
          "The posted number is a ceiling for ideal conditions, not a promise. The Basic Speed Rule requires a speed that is careful, prudent and reasonable for what is actually happening on the road.",
        context:
          "The manual lists the conditions that feed into it: traffic volume and speed, pedestrians, road surface, width and structure, visibility, weather and your own ability. It also runs the other way. You must not drive so slowly that you block or interfere with other traffic moving at normal speeds.",
        trap:
          "Doing the posted limit is not automatically legal. If you rear-end the car in front, you have broken either the Basic Speed Rule or the following-distance rule, whatever your speedometer said.",
        excerptKey: "basic-speed-rule",
        sourceLabel: "Oklahoma Driver Manual - Chapter 7: The Basic Speed Rule",
        sourceUrl: HB,
      },
      {
        id: "ok_s1_30",
        topic: "sharing",
        question:
          "You come over a rise and find a vehicle displaying an orange triangle with a red border. What does that emblem tell you?",
        choices: [
          "The vehicle is carrying hazardous material",
          "The vehicle is a farm vehicle exempt from traffic law",
          "The driver holds a learner permit",
          "The vehicle travels at 25 mph or less",
        ],
        correctIndex: 3,
        explanation:
          "The slow-moving vehicle emblem marks equipment that travels at 25 mph or less: tractors, combines, and highway construction and maintenance machinery.",
        context:
          "The manual warns that this is a rural hazard above all. Farm equipment can be wide enough to need more than one lane, and cresting a hill at 65 to find a tractor doing 15 leaves very little room. In some parts of Oklahoma you will also meet animal-drawn vehicles, which have the same right to the road and follow the same rules.",
        trap:
          "The emblem is about speed, not cargo. A placard for hazardous materials is a different sign entirely.",
        excerptKey: "smv-emblem",
        sourceLabel: "Oklahoma Driver Manual - Chapter 10: Slow-Moving Vehicles",
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
      "Lane markings, turns, passing, parking and the yielding rules that make up most of the Oklahoma Driver Manual. Everything here is stated plainly in the book, and most of it turns up on the drive test as well as the written one.",
    questions: [
      {
        id: "ok_s2_01",
        topic: "rules",
        question:
          "You are about to change lanes on an Oklahoma highway. Which check does the manual insist on beyond your mirrors?",
        choices: [
          "A glance at the vehicle's blind spot monitor",
          "Looking over your shoulder in the direction you will be moving",
          "Sounding the horn once",
          "Flashing your headlights at the driver behind",
        ],
        correctIndex: 1,
        explanation:
          "Mirrors do not cover the blind spot, so Oklahoma asks for a shoulder check in the direction you are moving before the wheel goes anywhere.",
        context:
          "The full sequence is watch for clearance ahead and behind, check the mirrors, signal, look over your shoulder, look behind you to both sides again, then check your blind spots. The manual also asks you to stay clear of the blind spots of the vehicle ahead of you, and to make room when the driver ahead signals a change of their own.",
        trap:
          "Signalling and moving is only half the maneuver. The signal tells others what you intend; the shoulder check tells you whether the space is actually empty.",
        excerptKey: "changing-lanes",
        sourceLabel: "Oklahoma Driver Manual - Chapter 6: Changing Lanes",
        sourceUrl: HB,
      },
      {
        id: "ok_s2_02",
        topic: "rules",
        question:
          "How much clear roadway does the manual tell you to check for before pulling out to pass on a two-lane road?",
        choices: ["At least 100 feet", "At least 200 feet", "At least 300 feet", "At least 500 feet"],
        correctIndex: 1,
        explanation:
          "Two hundred feet of clear road with no no-passing zone in it, checked before you move left. That is the manual's first step in the passing sequence.",
        context:
          "The rest of the sequence: do not sit so close behind a truck or bus that it blocks your view of the road ahead, make sure nobody is already passing you, signal left, pass, and do not come back right until you can see the car you passed in your rearview mirror. And you may not exceed the speed limit to complete the pass.",
        trap:
          "The 100-foot figure belongs to a different rule: do not pass within 100 feet of an obstructed view, a bridge, a tunnel, a railroad crossing, an intersection or a crosswalk.",
        excerptKey: "passing-200-feet",
        sourceLabel: "Oklahoma Driver Manual - Chapter 6: Passing",
        sourceUrl: HB,
      },
      {
        id: "ok_s2_03",
        topic: "rules",
        question: "When is passing on the right permitted in Oklahoma?",
        choices: [
          "Never, under any circumstances",
          "Whenever the vehicle ahead is going below the speed limit",
          "When the vehicle ahead is turning left, on a one-way road, or where there are two or more lanes each way and no obstructions",
          "Only on a divided highway with three or more lanes",
        ],
        correctIndex: 2,
        explanation:
          "Oklahoma allows it in three defined situations, and in all of them you must still be able to do it safely. Passing on the right is legal in the marked lanes, never off the edge of the road.",
        context:
          "The statute and the manual agree on the list: when the vehicle in front is making or about to make a left turn, on a road wide enough for two or more lines of moving vehicles in each direction with nothing parked in the way, or on a one-way road. The absolute limit is the pavement. You can never legally pass on the right by driving off the main travelled portion of the highway.",
        trap:
          "Swinging onto the shoulder to get around a left-turning car is the exact move the rule forbids, however tempting it is on a country road.",
        excerptKey: "passing-on-right",
        sourceLabel: "Oklahoma Driver Manual - Chapter 6: Passing on the Right",
        sourceUrl: HB,
      },
      {
        id: "ok_s2_04",
        topic: "rules",
        question:
          "A lane is marked with a solid yellow line on each side and yellow dashes inside those lines. What is it for?",
        choices: [
          "Passing slower traffic in either direction",
          "Left turns only, from either direction, and no passing",
          "Vehicles waiting to enter the highway",
          "High-occupancy vehicles",
        ],
        correctIndex: 1,
        explanation:
          "That is Oklahoma's center two-way left-turn lane. Drivers from both directions use it to make left turns, and it is not a passing lane or a travel lane.",
        context:
          "The statute adds a limit the manual does not: a driver turning left off the roadway may not run along the two-way left-turn lane for more than 200 feet while preparing for the turn. A driver turning onto the roadway may pause in it as a staging area and wait for a gap before merging.",
        trap:
          "Using it to overtake, or to drive along until your turn comes up, is the misuse the markings are designed to prevent.",
        excerptKey: "center-turn-lane",
        sourceLabel: "Oklahoma Driver Manual - Chapter 6: Lane Usage",
        sourceUrl: HB,
      },
      {
        id: "ok_s2_05",
        topic: "rightOfWay",
        question:
          "You are turning left at a green light with no arrow, and traffic is coming the other way. Who yields?",
        choices: [
          "The oncoming traffic, because you were first at the line",
          "Whichever driver is closer to the center of the intersection",
          "You do, to all oncoming traffic, and you go only when the gap is genuinely big enough",
          "Neither, as long as you both slow down",
        ],
        correctIndex: 2,
        explanation:
          "A round green permits the turn but protects nothing. You yield to all oncoming traffic and move only when there is enough clear distance to complete the turn without interfering with it.",
        context:
          "The manual pairs this with a practical warning: do not turn your steering wheel to the left while you are waiting. If you are hit from behind with the wheels already turned, the impact pushes you straight into the oncoming lane. Keep the wheels straight until you are sure you can complete the turn.",
        trap:
          "A flashing yellow arrow means exactly the same thing. It permits the turn and hands the right of way to oncoming traffic, which is looking at a green.",
        excerptKey: "yield-left-turn",
        sourceLabel: "Oklahoma Driver Manual - Chapter 5: You Must Always Yield",
        sourceUrl: HB,
      },
      {
        id: "ok_s2_06",
        topic: "rightOfWay",
        question:
          "You are pulling out of a supermarket parking lot onto a public street. What does Oklahoma require?",
        choices: [
          "Stop before the sidewalk or crosswalk, then go when it is safe",
          "Yield only to vehicles, since pedestrians on the sidewalk must give way to exiting cars",
          "Sound your horn and edge out slowly",
          "Proceed without stopping if the sidewalk is clear",
        ],
        correctIndex: 0,
        explanation:
          "Coming out of a private road, alley, driveway or building, you stop before the sidewalk or crosswalk and then go when it is safe. The stop comes before the footway, not before the road.",
        context:
          "The same rule works in reverse. When you are entering or leaving a driveway or alley, you yield to pedestrians already using the sidewalk. Oklahoma's list of always-yield situations also covers entering or crossing a highway that has no signs or signals: stop, yield to approaching traffic, and go only when it is safe.",
        trap:
          "Stopping with your bumper over the sidewalk is the everyday version of getting this wrong, and it puts you exactly where somebody walking cannot see you coming.",
        excerptKey: "yield-private-road",
        sourceLabel: "Oklahoma Driver Manual - Chapter 5: You Must Always Yield",
        sourceUrl: HB,
      },
      {
        id: "ok_s2_07",
        topic: "signs",
        question: "What do green highway signs in Oklahoma tell you?",
        choices: [
          "A regulation you must obey",
          "A hazard ahead",
          "Travel information: routes, distances, exits and destinations",
          "Services such as fuel, food and lodging",
        ],
        correctIndex: 2,
        explanation:
          "Green is guidance. Those signs identify highways, give distances, mark exits and point to places, and the arrows on overhead interstate signs show which lanes lead where.",
        context:
          "Blue signs cover services such as service stations, restaurants and motels. Brown covers recreation, cultural and historical destinations. Business route signs mark an officially designated highway that branches off the numbered route and runs through a town's business district.",
        trap:
          "Green does not mean \"go\" on a sign. Color coding on signs is a different system from the traffic light.",
        excerptKey: "guide-signs",
        sourceLabel: "Oklahoma Driver Manual - Chapter 4: Guide Signs",
        sourceUrl: HB,
      },
      {
        id: "ok_s2_08",
        topic: "parking",
        question:
          "You are parking downhill against a curb. Which way do the front wheels go, and why?",
        choices: [
          "Away from the curb, so the car swings out if it rolls",
          "Toward the curb, so the curb blocks the front wheel if the car rolls",
          "Straight ahead, with the parking brake taking the load",
          "Toward the curb only if the car has a manual transmission",
        ],
        correctIndex: 1,
        explanation:
          "Downhill, the wheels turn toward the curb and you roll gently forward until the tire touches it. Then the transmission goes into reverse or park. If anything gives, the curb stops the car.",
        context:
          "The uphill cases are the mirror image. Facing uphill against a curb, turn the wheels away from the curb and back up until the rear of the tire rests against it, then shift into low gear or park. Facing uphill with no curb at all, turn the wheels sharply to the right so that a rolling car heads away from traffic. Every case starts with setting the parking brake.",
        trap:
          "\"Wheels in going down, wheels out going up\" is the memory hook, and reversing it is the single most common parking error on Oklahoma's drive test.",
        excerptKey: "hill-parking-downhill",
        sourceLabel: "Oklahoma Driver Manual - Chapter 9: Parking and Starting on a Hill",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ok_s2_09",
        topic: "parking",
        question: "How far from a stop sign, traffic signal or flashing beacon may you not park?",
        choices: ["Within 15 feet", "Within 20 feet", "Within 30 feet", "Within 50 feet"],
        correctIndex: 2,
        explanation:
          "Thirty feet on the approach to any flashing beacon, stop sign or traffic control signal at the side of the road. The point is sight lines: a car parked closer hides the sign from the driver behind.",
        context:
          "The list around it uses different numbers on purpose. Fifteen feet from a hydrant, 20 feet from a crosswalk at an intersection, 20 feet from a fire station driveway, 75 feet opposite one where it is signposted, and 50 feet from the nearest rail of a railroad crossing.",
        trap:
          "The 30 feet is measured on the approach to the sign, not all round it. Parking just past a stop sign is a different question from parking in front of one.",
        excerptKey: "parking-30-stop-sign",
        sourceLabel: "Oklahoma Driver Manual - Chapter 9: Unlawful Parking",
        sourceUrl: HB,
      },
      {
        id: "ok_s2_10",
        topic: "parking",
        question: "Which of these does the Oklahoma Driver Manual list as unlawful parking?",
        choices: [
          "On the roadway side of a vehicle already parked at the curb",
          "On a residential street after dark",
          "Facing against the flow of traffic on a two-way street",
          "Within 100 feet of a school entrance",
        ],
        correctIndex: 0,
        explanation:
          "Double parking is on Oklahoma's unlawful list explicitly: parking on the roadway side of any vehicle already stopped or parked at the curb.",
        context:
          "The list also names sidewalks, the space in front of a public or private driveway, the inside of an intersection, crosswalks, any bridge or elevated structure, any highway underpass, and any spot where signs prohibit stopping. Blocking traffic beside a street excavation or obstruction is on it too.",
        trap:
          "Hazard lights and a running engine do not make double parking legal. The manual treats it as a parking offense whether or not you stay with the car.",
        excerptKey: "parking-unlawful-list",
        sourceLabel: "Oklahoma Driver Manual - Chapter 9: Unlawful Parking",
        sourceUrl: HB,
      },
      {
        id: "ok_s2_11",
        topic: "signals",
        question: "What does a flashing yellow arrow for a left turn mean in Oklahoma?",
        choices: [
          "The turn is protected and oncoming traffic is stopped",
          "You may turn left after yielding to oncoming traffic and pedestrians",
          "Left turns are prohibited at this intersection",
          "Turn left only if you are already in the intersection",
        ],
        correctIndex: 1,
        explanation:
          "The flashing yellow arrow is permission without protection. You reduce speed, yield to oncoming traffic and pedestrians, and then turn. The oncoming drivers are looking at a green.",
        context:
          "The manual sets it against the green arrow, which is protected, and the flashing red arrow, which prohibits every turn in the direction the arrow points until a green signal appears. Reading which of the three you are looking at is the whole skill.",
        trap:
          "Yellow of any kind never gives you the right of way. Treating a flashing yellow arrow as a protected turn is how head-on turning collisions happen.",
        excerptKey: "flashing-yellow-arrow",
        sourceLabel: "Oklahoma Driver Manual - Chapter 4: Traffic Signals",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ok_s2_12",
        topic: "signals",
        question:
          "The walk signal starts flashing DON'T WALK while you are already halfway across the street. What is a pedestrian supposed to do?",
        choices: [
          "Turn back to the curb they started from",
          "Stop and wait on the center line",
          "Continue across, since the flashing signal only stops people who have not left the curb",
          "Run, because the light is about to change",
        ],
        correctIndex: 2,
        explanation:
          "A flashing signal is an instruction to people still on the curb, not to people already crossing. If you are in the intersection you keep going and finish the crossing.",
        context:
          "The manual puts pedestrian signals above the traffic signal for people on foot: where a walk signal exists, pedestrians obey it rather than the vehicle light. Drivers should read the flashing phase as a warning that somebody is still out there, not as a cue to move off.",
        trap:
          "Turning back into the road you have already cleared is the more dangerous choice, and it is not what the signal is asking for.",
        excerptKey: "ped-signal-flashing",
        sourceLabel: "Oklahoma Driver Manual - Chapter 4: Pedestrian Signals",
        sourceUrl: HB,
      },
      {
        id: "ok_s2_13",
        topic: "safety",
        question:
          "Your car starts to skid on an icy Oklahoma bridge. What does the manual tell you to do?",
        choices: [
          "Brake hard and hold the wheel straight",
          "Take your foot off the brake and steer in the direction of the skid, unless that steers you into danger",
          "Press the clutch and coast until the tires grip",
          "Steer opposite to the skid to bring the back end round",
        ],
        correctIndex: 1,
        explanation:
          "Foot off the brake, steer where the car is going. Oklahoma adds a caveat most handbooks leave out: not if steering that way would run you off the road, into something, or into oncoming traffic.",
        context:
          "The manual is candid that once a skid has started there is very little you can do, so prevention is the real answer. Test your brakes gently once the car is moving to feel how much traction you have, and watch for black ice on bridges and in shaded spots where the road looks clear.",
        trap:
          "Sudden braking makes the skid worse, and the manual tells you not to use the clutch either. On loose surfaces with standard brakes you tap about a second apart, and you never tap antilock brakes.",
        excerptKey: "skid-steer-into",
        sourceLabel: "Oklahoma Driver Manual - Chapter 8: Stopping in Icy and Rainy Conditions",
        sourceUrl: HB,
      },
      {
        id: "ok_s2_14",
        topic: "safety",
        question: "When is a wet Oklahoma road at its most slippery?",
        choices: [
          "After several hours of steady rain",
          "In the first few minutes, when the rain lifts grease and dirt off the surface",
          "Only once standing water has collected",
          "It is equally slippery throughout the storm",
        ],
        correctIndex: 1,
        explanation:
          "The first drops are the dangerous ones. They loosen built-up grease and dirt and spread it across the surface as a slippery film, before enough water arrives to wash it away.",
        context:
          "Once the surface is wet, hydroplaning becomes the risk: the tires ride up on a film of water, traction drops away and stopping distances stretch. Wide tires can hydroplane even at reduced speed, which is why the manual asks you to slow down or pull off entirely in a heavy downpour.",
        trap:
          "Assuming a light shower is harmless gets it backwards. That is exactly the moment the road is most treacherous.",
        excerptKey: "rain-first-drops",
        sourceLabel: "Oklahoma Driver Manual - Chapter 8: Stopping in Icy and Rainy Conditions",
        sourceUrl: HB,
      },
      {
        id: "ok_s2_15",
        topic: "sharing",
        question:
          "You are following a large truck and cannot see either of its side mirrors. What does that tell you?",
        choices: [
          "The truck's mirrors are badly adjusted",
          "You are in the correct position to be seen",
          "The truck driver cannot see you",
          "You are far enough back to be safe",
        ],
        correctIndex: 2,
        explanation:
          "The manual's rule of thumb is exact: if you cannot see the truck's mirror, the driver cannot see you. Being invisible directly behind a trailer is the most dangerous place on the road.",
        context:
          "A truck's blind spots reach up to 200 feet behind it and cover both sides of the cab. With a long hood the driver may not see the first 10 to 20 feet of pavement in front of the bumper, which is plenty of room for a car to slip in unnoticed. Stopped behind a truck on an uphill grade, stay to the left of your lane so the driver can see you, and leave space in case it rolls back.",
        trap:
          "Tucking in close behind a truck feels sheltered and is the opposite. Sitting there means the driver has no idea you exist.",
        excerptKey: "truck-blind-spots",
        sourceLabel: "Oklahoma Driver Manual - Chapter 10: Sharing the Road with Trucks",
        sourceUrl: HB,
      },
      {
        id: "ok_s2_16",
        topic: "sharing",
        question:
          "A truck ahead of you signals a right turn but swings wide to the left first. What should you do?",
        choices: [
          "Move up the right side into the space it has left",
          "Overtake on the left while it is turning",
          "Sound your horn to tell the driver they are in the wrong lane",
          "Stay back and leave the space alone",
        ],
        correctIndex: 3,
        explanation:
          "Trucks need that space to get the trailer round the corner. Filling it puts your car between the truck and the curb, in the one place the driver cannot see, and the trailer closes the gap as the turn comes round.",
        context:
          "The manual calls it the right turn squeeze and lists it beside the other high-risk truck situation, a truck reversing into a loading dock. Never cross behind a truck that is preparing to back up: you will be in the driver's blind spot at exactly the wrong moment.",
        trap:
          "The wide swing looks like an invitation to pass on the inside. It is the opposite, and it produces some of the worst car-truck collisions there are.",
        excerptKey: "truck-right-turn",
        sourceLabel: "Oklahoma Driver Manual - Chapter 10: Risky Situations with Trucks",
        sourceUrl: HB,
      },
      {
        id: "ok_s2_17",
        topic: "emergencies",
        question: "A front tire blows out at highway speed. What does Oklahoma's manual tell you to do?",
        choices: [
          "Brake hard and pull straight onto the shoulder",
          "Take your foot off the gas and apply the brakes cautiously, never suddenly",
          "Accelerate briefly to straighten the car",
          "Pull the parking brake and steer to the right",
        ],
        correctIndex: 1,
        explanation:
          "Foot off the gas, brakes applied cautiously. The manual's emphasis is on the word never: braking suddenly on a blown tire is what turns a scare into a spin.",
        context:
          "Two related emergencies get the same gentle treatment. If you run off the pavement, hold the wheel firmly, brake lightly, and steer back only once you have slowed and checked traffic in both directions. The underlying warning is that sudden over-correction is what loses control of a car.",
        trap:
          "Instinct says stamp on the brake. That is precisely the instruction the manual writes in capital letters against.",
        excerptKey: "blowout-braking",
        sourceLabel: "Oklahoma Driver Manual - Chapter 8: Braking Under Emergency Conditions",
        sourceUrl: HB,
      },
      {
        id: "ok_s2_18",
        topic: "emergencies",
        question:
          "Your car stalls on a railroad crossing and the warning lights start flashing. What does the manual tell you to do?",
        choices: [
          "Stay in the car and keep trying to restart it",
          "Get out, run at a 45-degree angle toward the direction the train is coming from, and call 911",
          "Get out and run straight down the tracks away from the train",
          "Get out and stand beside the crossing to wave the train down",
        ],
        correctIndex: 1,
        explanation:
          "Get out first, then run at 45 degrees toward the oncoming train, and call 911. Running toward the train sounds wrong and is right: it takes you away from the debris the impact will throw down the line.",
        context:
          "The manual gives you a number to make it real. Once the warning lights activate you may have only 20 seconds before the train arrives. If you are stuck with no lights flashing yet, get out and call 911 plus the ENS number on the blue and white sign at the crossing post, giving the crossing number and the road that meets the tracks.",
        trap:
          "Trying to restart the engine is what kills people here. The manual's memory hook for the moment is GO, as in get out of your vehicle.",
        excerptKey: "stalled-on-tracks",
        sourceLabel: "Oklahoma Driver Manual - Chapter 10: Safety Rules for Highway-Railway Crossings",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ok_s2_19",
        topic: "impairment",
        question:
          "A trooper asks you to take a breath test in Oklahoma and you refuse. What happens to your licence?",
        choices: [
          "Nothing, unless you are later convicted of DUI",
          "A 30-day suspension while the case is investigated",
          "Automatic revocation of your driving privilege, even if you have not been drinking",
          "A fine, with the licence untouched",
        ],
        correctIndex: 2,
        explanation:
          "Driving in Oklahoma is treated as consent to the test. Refusing revokes your driving privilege automatically, and the revocation stands whether or not there was any alcohol in you.",
        context:
          "The revocation under the Implied Consent Law runs from 180 days to 2 years depending on your record, and it applies to residents and non-residents alike. The manual's other point is that the test is not the whole case: an officer's observations of your behavior, appearance and manner are evidence that can convict without any BAC reading at all.",
        trap:
          "Refusing is not a way to avoid the consequences. It substitutes a certain administrative revocation for an uncertain criminal one.",
        excerptKey: "implied-consent-refusal",
        sourceLabel: "Oklahoma Driver Manual - Chapter 12: Oklahoma Implied Consent Laws",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ok_s2_20",
        topic: "impairment",
        question:
          "You hold a valid Oklahoma medical marijuana licence. What does the Driver Manual say about driving?",
        choices: [
          "You may drive as long as you are not visibly impaired",
          "You may drive if your last dose was more than four hours earlier",
          "The 0.08 standard applies to cannabis in the same way it does to alcohol",
          "It is illegal for anyone to drive with any detectable level of cannabis in their system",
        ],
        correctIndex: 3,
        explanation:
          "Legal to hold is not legal to drive on. The manual is explicit that despite legalization for some medical purposes, driving with any detectable level of cannabis in your system is illegal for anyone.",
        context:
          "Oklahoma treats other drugs the same way. Prescription and over-the-counter medicines can slow reaction time, cause dizziness and blur vision, and mixing any of them with alcohol multiplies the effect. The manual's advice is to read the label for drowsiness warnings and ask a pharmacist or doctor before you drive.",
        trap:
          "There is no threshold to stay under. \"Detectable\" means detectable, which is a far lower bar than impaired.",
        excerptKey: "cannabis-detectable",
        sourceLabel: "Oklahoma Driver Manual - Chapter 12: Other Drugs and Driving",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ok_s2_21",
        topic: "licensing",
        question:
          "Oklahoma law requires you to show your driver licence to certain people. Which of these is on that list?",
        choices: [
          "Anyone you are involved in a collision with",
          "Any driver who asks after a near miss",
          "The owner of a car park where you have parked",
          "A tow truck operator",
        ],
        correctIndex: 0,
        explanation:
          "The manual lists two duties together: show your licence to a trooper, police officer, sheriff or judge when asked, and show it to anyone you are in a collision with.",
        context:
          "Your proof of insurance travels with it. At a collision or a traffic stop you have to produce a current security verification form, and after a crash you show it to the other driver and to the other people involved. The manual advises writing down the other driver's name, licence number and date of birth for your own protection.",
        trap:
          "The duty at a collision is not conditional on whose fault it was, or on how minor the damage looks.",
        excerptKey: "show-licence-collision",
        sourceLabel: "Oklahoma Driver Manual - Chapter 2: License Responsibilities",
        sourceUrl: HB,
      },
      {
        id: "ok_s2_22",
        topic: "licensing",
        question: "You move house within Oklahoma. How long do you have to tell Service Oklahoma?",
        choices: ["10 days", "30 days", "60 days", "Before your next renewal"],
        correctIndex: 0,
        explanation:
          "Ten days, and it is a legal requirement rather than a courtesy. You can report the move to a licensed operator, do it online, or write to Service Oklahoma.",
        context:
          "The reason is that all official correspondence goes to the address on file, and legal notice is served by first-class mail to that address. If notice cannot reach you because the address is wrong, your licence can be suspended without you ever hearing about it. The same 10-day duty applies to a name change, with a certified document to prove it.",
        trap:
          "Never receiving the letter is not a defence. That is precisely the situation the 10-day rule exists to prevent.",
        excerptKey: "address-change-10-days",
        sourceLabel: "Oklahoma Driver Manual - Chapter 2: Changing Your Name and Address",
        sourceUrl: HB,
      },
      {
        id: "ok_s2_23",
        topic: "rules",
        question:
          "You are entering an Oklahoma expressway from an on-ramp. Who has the right of way?",
        choices: [
          "You do, because merging traffic is joining the flow",
          "The vehicles already on the expressway",
          "Whichever vehicle is travelling faster",
          "Neither, so both should slow to the same speed",
        ],
        correctIndex: 1,
        explanation:
          "Traffic already on the expressway has it. You use the acceleration lane to match their speed, signal left, and merge into a gap when one appears.",
        context:
          "The manual asks you to stay to the right in the acceleration lane while you build speed and watch the traffic, and never to enter at a sharp angle. Leaving works the same way in reverse: move to the exit lane early, hold your speed until you reach the exit, signal right at least 100 feet before it, then slow in the deceleration lane.",
        trap:
          "Stopping at the end of an on-ramp because there is no gap is dangerous. The acceleration lane exists so that you can arrive at highway speed and slot in.",
        excerptKey: "expressway-yield-entering",
        sourceLabel: "Oklahoma Driver Manual - Chapter 6: Expressway Driving",
        sourceUrl: HB,
      },
      {
        id: "ok_s2_24",
        topic: "rules",
        question:
          "You have missed your exit on an Oklahoma turnpike. What does the manual say about turning around?",
        choices: [
          "Use the next official crossover in the median",
          "Reverse along the shoulder if the road behind is clear",
          "Never turn around, and never cross the median: drive to the next exit and re-enter in the other direction",
          "Turn around only where a break in the barrier allows it",
        ],
        correctIndex: 2,
        explanation:
          "The instruction is absolute. Never turn around on the expressway, and do not under any conditions cross the median or divider to do it. You carry on to the next exit and come back.",
        context:
          "The statute backs this up: on a divided highway, no vehicle may be driven over, across or within the dividing space or barrier except through a permanent opening or crossover, and temporary crossovers need specific authority or a peace officer's direction. The crossovers you can see in the median are for exactly those people.",
        trap:
          "A gap in the median is not an invitation. Those openings exist for emergency and maintenance vehicles, and using one costs you far more than the extra miles.",
        excerptKey: "expressway-no-uturn",
        sourceLabel: "Oklahoma Driver Manual - Chapter 6: Expressway Driving",
        sourceUrl: HB,
      },
      {
        id: "ok_s2_25",
        topic: "signs",
        question:
          "A yellow diamond shows two arrows pointing in opposite directions on a single line. What is ahead?",
        choices: [
          "A divided highway begins",
          "Two-way traffic: drive in the right-hand lane and expect oncoming traffic in the left",
          "A crossroads with traffic from both sides",
          "A lane merging from the left",
        ],
        correctIndex: 1,
        explanation:
          "That is the two-way traffic warning. It usually appears where a one-way section or a divided highway ends and cars start coming toward you again.",
        context:
          "Its close relative is the divided-highway-ends sign, which asks you to be careful as you approach the point where two-way driving begins again. The opposite sign, divided highway ahead, warns of a center median and tells you to keep right.",
        trap:
          "Confusing this with the divided-highway sign gets the lane discipline backwards at the worst moment, which is the moment the median disappears.",
        excerptKey: "two-way-traffic-sign",
        sourceLabel: "Oklahoma Driver Manual - Chapter 4: Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "ok_s2_26",
        topic: "signs",
        question:
          "You are approaching a barricade striped with diagonal lines that slope downward to the right. What are the stripes telling you?",
        choices: [
          "Bear to the right",
          "Bear to the left",
          "Stop and wait for a flagperson",
          "The road ahead is closed entirely",
        ],
        correctIndex: 0,
        explanation:
          "The slope points the way past. Stripes sloping down to the right mean bear right; stripes sloping down to the left mean bear left.",
        context:
          "Oklahoma uses reflectors and striped panels around road hazards for the same purpose: they mark culverts, bridge end-rails, center piers on divided highways and short changes in road alignment, and they show which side to pass. At night these may be all you can see of the obstruction.",
        trap:
          "Reading the stripes as decoration and guessing a side is a real risk on an unlit rural road, where the barricade may be the only thing between you and a culvert.",
        excerptKey: "diagonal-stripes",
        sourceLabel: "Oklahoma Driver Manual - Chapter 4: Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "ok_s2_27",
        topic: "safety",
        question:
          "Water is running across a low crossing on a country road in Oklahoma. What does the manual say?",
        choices: [
          "Cross slowly in a low gear if the water looks shallow",
          "Cross only if another vehicle has just made it through",
          "Do not drive into or across flowing water, and turn around",
          "Cross quickly to keep the engine dry",
        ],
        correctIndex: 2,
        explanation:
          "Turn around, do not drown. The manual is unequivocal: never drive into water crossing the roadway, because you cannot judge the depth or the force of the flow.",
        context:
          "The numbers are startling. Six inches of moving water can take control of your car away, and six inches can knock you off your feet if you get out. Most vehicles, SUVs included, will float in about two feet of water, and for each foot the water rises the car displaces 1,500 pounds. The roadbed underneath may already have washed away.",
        trap:
          "Watching another vehicle cross tells you nothing. It is heavier, or the flow shifted, or the road under it was still there a minute ago.",
        excerptKey: "flood-turn-around",
        sourceLabel: "Oklahoma Driver Manual - Chapter 11: Flood Dynamics",
        sourceUrl: HB,
      },
      {
        id: "ok_s2_28",
        topic: "sharing",
        question:
          "Why does the Oklahoma Driver Manual say most car and motorcycle collisions happen?",
        choices: [
          "Motorcyclists ride too fast for the conditions",
          "A driver turned in front of the motorcycle, having not seen it or seen it too late",
          "Motorcycles brake more slowly than cars",
          "Motorcyclists change lanes without signalling",
        ],
        correctIndex: 1,
        explanation:
          "Two-thirds of them are caused by the car driver who turned in front of the motorcycle, not by the rider. The driver either never saw the bike or spotted it too late to stop.",
        context:
          "The manual explains why: drivers are looking for other cars, and a motorcycle's narrow profile and short body make it both hard to see and hard to judge for distance and speed. At intersections, where most of these crashes happen, wait until the rider's intentions are unmistakable before you move across their path.",
        trap:
          "Blaming the rider's speed is the comfortable answer and the wrong one. The manual puts the responsibility squarely on the turning driver.",
        excerptKey: "motorcycle-turned-in-front",
        sourceLabel: "Oklahoma Driver Manual - Chapter 10: Sharing the Road with Motorcycles",
        sourceUrl: HB,
      },
      {
        id: "ok_s2_29",
        topic: "rightOfWay",
        question:
          "A funeral procession with headlights on is passing through an intersection ahead of you. What does Oklahoma require?",
        choices: [
          "Treat each vehicle separately at the traffic signal",
          "Yield to the procession and let it through as a unit",
          "Join the end of the procession if you are travelling the same way",
          "Proceed once the lead vehicle has cleared the intersection",
        ],
        correctIndex: 1,
        explanation:
          "The procession moves as one. Once the lead vehicle enters the intersection, the rest may follow it through regardless of the traffic control devices, and you yield.",
        context:
          "The headlights are the signal that a group of vehicles is travelling together and that you should not drive between them or interfere. Outside a business or residential district, vehicles in a caravan or motorcade normally leave at least 200 feet between them so that others can enter the line safely, but the statute exempts funeral processions from that spacing.",
        trap:
          "A green light for you does not override the procession. Cutting into the line is both unlawful and, in the manual's framing, unforgivable.",
        excerptKey: "funeral-procession",
        sourceLabel: "Oklahoma Driver Manual - Chapter 5: Yield to a Funeral Procession",
        sourceUrl: HB,
      },
      {
        id: "ok_s2_30",
        topic: "speed",
        question:
          "What does the Oklahoma Driver Manual say about driving too slowly on a highway?",
        choices: [
          "It is always safe, because slower speeds reduce crash severity",
          "It is permitted as long as you use hazard lights",
          "It is against the law to drive so slowly that you block, hinder or interfere with normal traffic",
          "It is only a problem on turnpikes with a posted minimum",
        ],
        correctIndex: 2,
        explanation:
          "The Basic Speed Rule cuts both ways. Speed has to be reasonable and proper, not too fast and not too slow, and blocking traffic moving at normal speeds is unlawful.",
        context:
          "On expressways the manual gets specific: drive between the minimum, usually 40 mph, and the maximum, 55 to 75 depending on the road. If your car cannot manage the minimum, or you do not want to, the manual tells you not to use the expressway at all. Slower traffic keeps to the right-hand lane.",
        trap:
          "Hazard lights do not license a rolling roadblock. If your speed is forcing others to brake and swerve, you are the hazard.",
        excerptKey: "too-slow-illegal",
        sourceLabel: "Oklahoma Driver Manual - Chapter 7: The Basic Speed Rule",
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
      "Written at the level Service Oklahoma actually asks: exact numbers, close distinctions between similar signals, and the rules that sit in the statute rather than the manual.",
    questions: [
      {
        id: "ok_s3_01",
        topic: "parking",
        question:
          "How close to the nearest rail of a railroad crossing may you park in Oklahoma?",
        choices: ["15 feet", "30 feet", "50 feet", "100 feet"],
        correctIndex: 2,
        explanation:
          "Fifty feet from the nearest rail. It is the largest distance on Oklahoma's unlawful-parking list, because a train that has to stop for a parked car is a train that will not stop.",
        context:
          "Do not confuse it with the approach numbers. When you are driving toward a crossing and a signal or gate tells you to stop, the statute requires you to stop within 50 feet but not less than 15 feet from the nearest rail. Same road, same 50 feet, entirely different rule.",
        trap:
          "The 15 feet in the approach rule is a minimum for stopping, not a parking allowance. Parking at 15 feet from the rail is unlawful.",
        excerptKey: "parking-50-railroad",
        sourceLabel: "Oklahoma Driver Manual - Chapter 9: Unlawful Parking",
        sourceUrl: HB,
      },
      {
        id: "ok_s3_02",
        topic: "rules",
        question:
          "The statute sets a signalling distance for a lane change on an Oklahoma roadway divided into lanes. What is it?",
        choices: [
          "Not less than the last 50 feet travelled",
          "Not less than the last 100 feet travelled",
          "Not less than the last 200 feet travelled",
          "No fixed distance, only \"in good time\"",
        ],
        correctIndex: 1,
        explanation:
          "One hundred feet, and the statute frames it as the last 100 feet travelled before the move. You also have to have satisfied yourself the change can be made safely before the signal goes on.",
        context:
          "That is the same 100 feet the manual gives for signalling a turn, which makes it easy to remember as one number for every deliberate change of direction. On an expressway exit the manual asks for the same distance: signal right at least 100 feet before the exit.",
        trap:
          "Signalling and moving in the same motion misses the point of the rule. The distance exists so the driver beside you learns your plan before you act on it.",
        excerptKey: "stat-lane-change-signal",
        sourceLabel: "47 O.S. Section 11-309 - Additional Rules for Driving on Roadways Laned for Traffic",
        sourceUrl: stat("82287"),
      },
      {
        id: "ok_s3_03",
        topic: "sharing",
        question:
          "Which vehicles does the Oklahoma Driver Manual say are required by law to stop at every railroad crossing?",
        choices: [
          "All vehicles towing a trailer",
          "School buses, church buses, motor coaches and vehicles hauling explosives or flammable liquids",
          "Any vehicle over 10,000 pounds",
          "Only school buses carrying passengers",
        ],
        correctIndex: 1,
        explanation:
          "Those four categories stop at the tracks every time, loaded or empty. If you are behind one, expect the stop and leave room for it.",
        context:
          "The related rule catches people out: you must not pass a vehicle that is required to stop at a railroad crossing, except when you are driving on a multi-lane highway. On a two-lane road you wait behind the bus while it stops, opens its door and listens.",
        trap:
          "The exception is about the road, not about your patience. On anything other than a multi-lane highway, going around the stopped bus is unlawful.",
        excerptKey: "rr-must-stop-vehicles",
        sourceLabel: "Oklahoma Driver Manual - Chapter 4: Railroad Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "ok_s3_04",
        topic: "impairment",
        question:
          "A driver under 21 is convicted for the second time under Oklahoma's zero tolerance law. How long is the revocation?",
        choices: ["6 months", "12 months", "18 months", "2 years"],
        correctIndex: 1,
        explanation:
          "Twelve months for a second offense, against six months for the first. The clock runs on the revocation of the driving privilege itself, on top of any fine.",
        context:
          "The fines run alongside: $100 to $500 for a first conviction, $100 to $1,000 for a second or subsequent one, or community service, or a treatment program, or any combination of those. If the driver is under 16 at the time or would still be under 16 when the cancellation ends, Service Oklahoma extends it until they turn 16.",
        trap:
          "The 180-day and 2-year figures belong to the Implied Consent Law's revocation range, which is a separate ladder from the zero tolerance one.",
        excerptKey: "zero-tolerance-revocations",
        sourceLabel: "Oklahoma Driver Manual - Chapter 12: Lengths of License Revocation",
        sourceUrl: HB,
      },
      {
        id: "ok_s3_05",
        topic: "licensing",
        question:
          "How many points does Oklahoma assess for failing to stop for a school bus loading or unloading?",
        choices: ["1 point", "2 points", "3 points", "4 points"],
        correctIndex: 3,
        explanation:
          "Four points, the joint heaviest entry on the schedule alongside reckless driving. It sits beside a mandatory one-year revocation, so the points are the smaller half of the penalty.",
        context:
          "The rest of the schedule: 3 points for speeding more than 25 mph above the posted limit, 2 for ordinary speeding, careless driving, following too closely, failing to obey a stop sign or traffic light, failing to yield, driving left of center or the wrong way on a one-way, and violating a licence restriction; 1 for a defective vehicle and for everything else. Ten points in five years suspends the licence.",
        trap:
          "Points fall off slowly. Two come off for each clean 12-month period, and the total only reaches zero after three consecutive years with no pointable convictions.",
        excerptKey: "point-system",
        sourceLabel: "Oklahoma Driver Manual - Chapter 13: Oklahoma Mandatory Point System",
        sourceUrl: HB,
      },
      {
        id: "ok_s3_06",
        topic: "safety",
        question:
          "The Oklahoma Driver Manual breaks stopping into three stages. Roughly how long does the reaction stage take?",
        choices: [
          "About 0.5 seconds",
          "About 0.66 seconds",
          "About 1.5 seconds",
          "It depends entirely on speed",
        ],
        correctIndex: 1,
        explanation:
          "About two thirds of a second for your brain to tell your foot to brake. Perception, the stage before it, takes about half a second, and only braking itself depends on speed.",
        context:
          "Put together, that is well over a second before the brakes have done anything at all, and at 60 mph the car has covered around 110 feet in that time. The manual's table shows a total stopping distance at 60 mph of roughly 193 to 277 feet depending on conditions.",
        trap:
          "The 0.5 seconds is the perception figure, not the reaction figure. The question turns on which of the two stages is being named.",
        excerptKey: "perception-reaction",
        sourceLabel: "Oklahoma Driver Manual - Chapter 8: Stopping Distances",
        sourceUrl: HB,
      },
      {
        id: "ok_s3_07",
        topic: "signals",
        question: "What does a red X over a lane on an overhead lane control signal mean?",
        choices: [
          "The lane is open only to buses",
          "The lane is closed to you: do not use it",
          "The lane is about to close, so clear it",
          "The lane is open for left turns only",
        ],
        correctIndex: 1,
        explanation:
          "A red X closes the lane outright. It is not a warning about the future; it is an instruction about now.",
        context:
          "The rest of the set: a green arrow means the lane is open for traffic, a steady yellow X means clear the lane, and a flashing yellow X means the lane is available for left turns. Lane control signals appear where the direction of a lane changes through the day.",
        trap:
          "The yellow X is the one that means \"get out\". Treating the red X as a warning rather than a prohibition puts you head-on into traffic using the lane the other way.",
        excerptKey: "lane-control-signals",
        sourceLabel: "Oklahoma Driver Manual - Chapter 4: Lane Control Signals",
        sourceUrl: HB,
      },
      {
        id: "ok_s3_08",
        topic: "rightOfWay",
        question:
          "A person with a white cane tipped in red is crossing the street ahead of you. What does Oklahoma law require?",
        choices: [
          "Slow to walking pace and pass behind them",
          "Sound the horn so they know you are there",
          "Stop 15 feet away, outside the crosswalk, and let them pass",
          "Yield only if they are inside a marked crosswalk",
        ],
        correctIndex: 2,
        explanation:
          "Stop immediately and let them pass, and stop outside the crosswalk rather than in it. Oklahoma names a distance: a vehicle must stop 15 feet from a blind person in the roadway or at an intersection.",
        context:
          "The manual describes the cane as all white, white with a red tip, or chrome, and notes that the person will normally be tapping it on the pavement ahead of them. A guide dog does the same job. This is a separate, stronger duty than the ordinary pedestrian right of way.",
        trap:
          "Sounding the horn is worse than useless here. A blind pedestrian is navigating by sound, and a horn blast destroys the information they are using.",
        excerptKey: "yield-blind-15-feet",
        sourceLabel: "Oklahoma Driver Manual - Chapter 5: You Must Yield to Blind Persons",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ok_s3_09",
        topic: "rules",
        question:
          "Two drivers are facing each other at an intersection and both want to turn left. How does the Oklahoma Driver Manual say they should do it?",
        choices: [
          "Each turns in front of the other, passing right side to right side",
          "Each turns to the left of the other, leaving from the left lane and entering the left lane",
          "The driver on the wider road goes first, the other waits",
          "Both wait for a gap and turn one at a time",
        ],
        correctIndex: 1,
        explanation:
          "Each driver turns to the left of the other, which keeps both paths apart and both drivers visible. You leave from the left lane and you arrive in the left lane.",
        context:
          "The manual's turning instructions are built around lane discipline. Get into the correct lane early, keep close to the centerline for a left turn without crossing it, enter the new street just to the right of its center, and finish in the proper lane. For a right turn, stay as close to the right as you can and do not swing left first.",
        trap:
          "Turning in front of each other feels faster and puts both cars in the middle of the intersection at once, blind to whatever is coming through.",
        excerptKey: "two-left-turns",
        sourceLabel: "Oklahoma Driver Manual - Chapter 6: When to Turn Left of Center",
        sourceUrl: HB,
      },
      {
        id: "ok_s3_10",
        topic: "speed",
        question:
          "Under state law and unless a sign says otherwise, what is the limit on an Oklahoma county road?",
        choices: ["45 mph", "50 mph", "55 mph", "65 mph"],
        correctIndex: 2,
        explanation:
          "Fifty-five on county roads. The undivided state highway figure just above it is 65, and the two are the pair most often swapped.",
        context:
          "The complete table: turnpikes 80, controlled-access highways 75, undivided state highways 65, county roads 55, highways within state parks or wildlife refuges 35, and properly marked school zones on a highway outside a municipality 25. Cities and towns set and post their own limits inside their boundaries.",
        trap:
          "A dirt or gravel county road still has the 55 default, which does not mean 55 is a safe speed on it. The Basic Speed Rule is what actually governs.",
        excerptKey: "speed-table",
        sourceLabel: "Oklahoma Driver Manual - Chapter 7: Speed Limits",
        sourceUrl: HB,
      },
      {
        id: "ok_s3_11",
        topic: "emergencies",
        question:
          "You are driving on a four-lane road and pass a police car stopped on the shoulder with its lights flashing. What does the Bernardo-Mills Law require?",
        choices: [
          "Slow to 20 mph below the posted limit",
          "Change into a lane that is not next to the stopped vehicle if it is safe, and otherwise slow down and proceed with caution",
          "Stop until the officer waves you past",
          "Nothing, unless the vehicle is blocking a lane",
        ],
        correctIndex: 1,
        explanation:
          "Move over a lane if you can do it safely; if you cannot, slow down and drive carefully. On a road with only one lane your way, slowing down is the whole duty.",
        context:
          "The law covers far more than police cars: any stationary authorized emergency vehicle, Department of Transportation and Turnpike Authority maintenance vehicles, licensed wreckers showing amber, red or blue lights, and any stationary vehicle displaying flashing lights, which includes an ordinary car on its hazards. Breaking it is the offense of endangerment of an emergency worker, carrying a $1,000 fine for a first offense and $2,500 for a second.",
        trap:
          "There is no fixed speed reduction in the law. \"Reduce the speed of the motor vehicle to a safe speed\" is the standard, and safe depends on the scene.",
        excerptKey: "move-over-law",
        sourceLabel: "Oklahoma Driver Manual - Chapter 5: Move Over Law or Bernardo-Mills Law",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ok_s3_12",
        topic: "licensing",
        question:
          "How long must an Oklahoma teenager hold a learner permit before taking the drive test for an intermediate licence?",
        choices: ["30 days", "90 days", "180 days", "One year"],
        correctIndex: 2,
        explanation:
          "One hundred and eighty days. With driver education completed you can then test at 16; without it, you wait until 16 and a half.",
        context:
          "The permit hold is only one of the conditions. You also need at least 50 hours of behind-the-wheel training, 10 of them at night, supervised by a licensed driver at least 21 who has held a licence for two years, evidenced by an Affidavit of Driver Training. You need a certificate from the free Oklahoma Work Zone Safe course if you are under 18, and no traffic convictions in the 180 days before the drive test.",
        trap:
          "The 30-day figure belongs to adults. An applicant of 18 or over holds a permit for 30 days before the drive test, and the teenage route is six times longer.",
        excerptKey: "intermediate-eligibility",
        sourceLabel: "Service Oklahoma - Intermediate License",
        sourceUrl: INTERMEDIATE,
        commonlyMissed: true,
      },
      {
        id: "ok_s3_13",
        topic: "signs",
        question:
          "A rectangular yellow sign at the roadside carries a black number and the word MINIMUM. What is it doing there?",
        choices: [
          "Warning of slow-moving farm traffic",
          "Setting the lowest speed you may lawfully travel on that road",
          "Suggesting a comfortable cruising speed",
          "Marking the start of a work zone",
        ],
        correctIndex: 1,
        explanation:
          "A posted minimum is a legal floor, not advice. Oklahoma's controlled-access highways commonly post a 40 mph minimum alongside the maximum.",
        context:
          "The manual pairs the two limits when it describes expressway driving: drive between the minimum, usually 40, and the maximum, 55 to 75. If your vehicle is not in good enough condition to hold the minimum, or you would rather not, the manual's advice is to stay off the expressway.",
        trap:
          "A minimum speed sign is also what disqualifies certain small motorcycles from a road. A restricted rider under 16 may not use a highway where a minimum speed limit is posted.",
        excerptKey: "expressway-speed-range",
        sourceLabel: "Oklahoma Driver Manual - Chapter 6: Expressway Driving",
        sourceUrl: HB,
      },
      {
        id: "ok_s3_14",
        topic: "sharing",
        question:
          "Under Oklahoma's bicycle safety rules, what may a cyclist do at a red traffic light?",
        choices: [
          "Ride through without stopping if the way looks clear",
          "Stop, yield to any oncoming traffic that poses an immediate hazard, then proceed if it is safe",
          "Dismount and walk across as a pedestrian only",
          "Wait for the light in every case, exactly as a car must",
        ],
        correctIndex: 1,
        explanation:
          "Cyclists stop at the red, yield to anything approaching that is an immediate hazard, and may then proceed through if it is safe. Oklahoma also lets them turn right on red after slowing and yielding, and turn left onto a one-way street after stopping and yielding.",
        context:
          "The stop sign rule is looser again. A cyclist must slow on the approach and must stop if there is a risk of danger, but if no danger is present they may proceed without stopping. \"Immediate hazard\" is defined as a vehicle approaching at a speed or distance that could lead to a collision.",
        trap:
          "This is a rule about bicycles, not about you. As a driver, the useful conclusion is that a legally ridden bicycle may enter an intersection where you would expect a car to wait.",
        excerptKey: "bicycle-red-light",
        sourceLabel: "Oklahoma Driver Manual - Chapter 10: Bicycle Safety Rules for Stop Signs and Red Traffic Signals",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ok_s3_15",
        topic: "safety",
        question:
          "You are driving a car with standard, non-antilock brakes on packed snow and need to slow down. What does the manual tell you to do?",
        choices: [
          "Press the pedal firmly and hold it",
          "Tap the brakes slightly, about one second apart",
          "Pump the brakes as fast as you can",
          "Use the parking brake to avoid locking the front wheels",
        ],
        correctIndex: 1,
        explanation:
          "Light taps roughly a second apart on ice, snow, sleet, gravel, sand and other loose surfaces. Braking suddenly on those surfaces is what starts the skid.",
        context:
          "The manual attaches a capitalized caution: never tap antilock brakes. With ABS you hold firm pressure and let the system do the work, and the owner's manual is where you look for the details of maximum braking on your particular car. With standard brakes, maximum braking comes just before the wheels lock.",
        trap:
          "The tapping advice and the ABS advice are opposites, and applying the wrong one to your car costs you the stop. Know which system you are driving.",
        excerptKey: "braking-loose-surfaces",
        sourceLabel: "Oklahoma Driver Manual - Chapter 8: Braking Under Emergency Conditions",
        sourceUrl: HB,
      },
      {
        id: "ok_s3_16",
        topic: "rules",
        question:
          "On an Oklahoma highway of four or more lanes, when does the statute allow you to drive in the left lane?",
        choices: [
          "Any time, as long as you are at the speed limit",
          "Only when overtaking, though traffic conditions, flow or road configuration can also require it",
          "Only between sunrise and sunset",
          "Never, except to turn left",
        ],
        correctIndex: 1,
        explanation:
          "The left lane is for overtaking. The statute writes in real exceptions for traffic conditions, flow and road configuration, such as merging traffic, but cruising there because you like the view is not one of them.",
        context:
          "The manual puts the same rule in plainer terms: on a road divided into four or more lanes, a vehicle cannot impede the normal flow of traffic by driving in the left lane. The statute also excludes roads inside a municipality's city limits and county roads, as long as they are not part of the interstate system or a turnpike.",
        trap:
          "Sitting in the left lane at exactly the limit is still impeding traffic. The rule is about the lane's purpose, not about your speedometer.",
        excerptKey: "left-lane-passing",
        sourceLabel: "Oklahoma Driver Manual - Chapter 6: Passing",
        sourceUrl: HB,
      },
      {
        id: "ok_s3_17",
        topic: "impairment",
        question:
          "What is the penalty for a first DUI conviction in Oklahoma with a BAC of 0.08 or more?",
        choices: [
          "A fine only, with no jail time possible",
          "A felony carrying at least one year in prison",
          "A misdemeanor: not less than ten days nor more than one year in jail, and a fine of not more than $1,000",
          "A 30-day licence suspension and a $500 fine",
        ],
        correctIndex: 2,
        explanation:
          "A first offense is a misdemeanor, but it carries a jail term of at least ten days and up to a year, plus a fine of up to $1,000. Both the imprisonment and the fine apply.",
        context:
          "The ladder climbs steeply. A second offense within ten years is a felony carrying one to five years and up to $2,500; a second felony offense runs one to seven years and up to $5,000; a third or subsequent offense runs one to ten years and up to $5,000. Alongside all of that, Service Oklahoma suspends or revokes the licence for 180 days on a first revocation, one year with a prior within ten years, and two years with two or more.",
        trap:
          "There is no fine-only outcome for a first DUI. The minimum jail term is written into the penalty.",
        excerptKey: "dui-first-offense",
        sourceLabel: "Oklahoma Driver Manual - Chapter 12: Penalties for DUI",
        sourceUrl: HB,
      },
      {
        id: "ok_s3_18",
        topic: "signals",
        question:
          "You are approaching a green light that has been green since before you could see it. What does the manual ask you to do?",
        choices: [
          "Speed up to clear the intersection before it changes",
          "Adjust your speed on the approach so you could stop smoothly if the light changes",
          "Cover the horn in case cross traffic moves",
          "Change to the left lane so you are not caught behind a turning car",
        ],
        correctIndex: 1,
        explanation:
          "The manual asks you to adjust speed on the approach to any intersection so that you can slow or stop if the light changes. A green you have been watching for a while is a green about to end.",
        context:
          "It is direct about the alternative: do not speed up to beat the light. On a steady yellow you must stop if you can do so safely before entering the crosswalk, and the manual notes that collisions often happen right there, as people gamble on the last second.",
        trap:
          "\"Stale green\" is not a legal term but it is a real hazard, and it is the reason the manual writes about approach speed rather than about the light itself.",
        excerptKey: "approach-speed-signals",
        sourceLabel: "Oklahoma Driver Manual - Chapter 4: Traffic Signals",
        sourceUrl: HB,
      },
      {
        id: "ok_s3_19",
        topic: "rightOfWay",
        question:
          "A school bus with flashing red lights has stopped on the opposite roadway of a divided highway. Do you have to stop?",
        choices: [
          "Yes, all traffic in both directions must stop",
          "No, because the bus is on a different roadway",
          "Yes, unless you are more than 100 feet away",
          "Only if children are visible",
        ],
        correctIndex: 1,
        explanation:
          "A bus on a different roadway does not stop you. Oklahoma's exception turns on the road being divided into separate roadways, not on the number of lanes.",
        context:
          "The manual lists three situations where you need not stop: the bus is on a different roadway, the bus is stopped in a loading zone by a controlled-access highway where pedestrians are not allowed to cross, and approaching traffic on a divided highway. On an undivided road, however many lanes it has, everyone stops.",
        trap:
          "A wide undivided road with a painted center line is not a divided highway. Four lanes and a stripe is exactly the road where people wrongly assume they can drive on.",
        excerptKey: "schoolbus-exceptions",
        sourceLabel: "47 O.S. Section 11-705 - Meeting or Overtaking Stopped School Bus",
        sourceUrl: stat("439096"),
        commonlyMissed: true,
      },
      {
        id: "ok_s3_20",
        topic: "parking",
        question:
          "You are leaving your car parked on a street. Which sequence does the Oklahoma Driver Manual give?",
        choices: [
          "Turn off the motor, remove the key, then set the parking brake",
          "Set the parking brake, put the gear in low, reverse or park, turn off the motor, lock the ignition and remove the key",
          "Put the gear in neutral, set the parking brake and leave the key in the ignition",
          "Turn the wheels to the curb and leave the car in neutral",
        ],
        correctIndex: 1,
        explanation:
          "Parking brake first, then the transmission into low, reverse or park, then the motor off, then the ignition locked and the key out. The order matters because the brake takes the load before the gear does.",
        context:
          "The manual's reason is bluntly put: an improperly parked car can roll, gain speed, destroy property or kill someone. On a hill you add the wheel-turning step and the six-inch spacing from the curb, so that the car is braced physically as well as mechanically.",
        trap:
          "Leaving the transmission in neutral removes the second line of defence. Neutral plus a parking brake that is slipping is how a parked car ends up in a shopfront.",
        excerptKey: "parking-leaving-car",
        sourceLabel: "Oklahoma Driver Manual - Chapter 9: Parking",
        sourceUrl: HB,
      },
      {
        id: "ok_s3_21",
        topic: "speed",
        question:
          "What is the maximum penalty the manual gives for violating Oklahoma's Basic Speed Rule?",
        choices: [
          "A $200 fine",
          "A fine of up to $654.00 and 30 days in jail",
          "A fine of up to $1,000 and 90 days in jail",
          "Licence suspension for 30 days",
        ],
        correctIndex: 1,
        explanation:
          "Up to $654.00 and 30 days in jail. The oddly precise figure is what the manual prints, and it is the maximum rather than the usual outcome.",
        context:
          "Fines double in school and construction zones when workers or equipment are present. Speeding also earns 2 points on the mandatory point system, or 3 points if you were more than 25 mph above the posted limit, and 10 points inside five years suspends the licence.",
        trap:
          "The doubling in a work zone is conditioned on workers or equipment being present, not merely on the orange signs being up.",
        excerptKey: "speeding-penalty",
        sourceLabel: "Oklahoma Driver Manual - Chapter 7: The Basic Speed Rule",
        sourceUrl: HB,
      },
      {
        id: "ok_s3_22",
        topic: "safety",
        question:
          "How far ahead should you dim your high beams for a vehicle you are following, according to the Oklahoma Driver Manual?",
        choices: ["300 feet", "500 feet", "600 feet", "1,000 feet"],
        correctIndex: 2,
        explanation:
          "Six hundred feet when you are following. The figure for an oncoming vehicle is longer, at 1,000 feet, because the glare hits their eyes directly rather than via a mirror.",
        context:
          "High beams belong in open country with no other cars nearby, and the manual asks you to drive slower at night than by day even then. Low beams are the setting for streetlights, fog, rain, snow and adverse weather, because high beams in fog reflect straight back at you.",
        trap:
          "The two distances are easy to swap. The larger number, 1,000 feet, is for oncoming traffic; the smaller one is for the car in front.",
        excerptKey: "high-beam-distances",
        sourceLabel: "Oklahoma Driver Manual - Chapter 11: Using High and Low Headlight Beams",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ok_s3_23",
        topic: "licensing",
        question:
          "What are Oklahoma's minimum liability insurance limits for a private vehicle?",
        choices: [
          "$15,000 / $30,000 / $10,000",
          "$25,000 for injury or death of one person, $50,000 for two or more, and $25,000 for property damage",
          "$50,000 / $100,000 / $50,000",
          "$30,000 for injury or death and $15,000 for property damage",
        ],
        correctIndex: 1,
        explanation:
          "Twenty-five, fifty and twenty-five, all per accident. You have to carry a current security verification form and produce it on request.",
        context:
          "Failing to comply with the Compulsory Insurance Law, or failing to produce proof when an officer or a Service Oklahoma representative asks, can bring a fine of up to $250, 30 days in jail, or both, plus suspension of both licence and registration. Service Oklahoma also suspends the licence of an uninsured driver or owner involved in a collision with any injury or $500 or more of property damage.",
        trap:
          "A photograph of an expired card is not proof. The manual advises checking that a current verification form is in any vehicle you drive, whoever owns it.",
        excerptKey: "insurance-minimums",
        sourceLabel: "Oklahoma Driver Manual - Chapter 13: Financial Responsibility",
        sourceUrl: HB,
      },
      {
        id: "ok_s3_24",
        topic: "signs",
        question:
          "What is the first thing an advance warning sign for a railroad crossing asks you to be ready to do?",
        choices: [
          "Stop within 15 to 50 feet of the first track",
          "Change to the left lane",
          "Sound your horn on the approach",
          "Cross the tracks without changing gear",
        ],
        correctIndex: 0,
        explanation:
          "Slow down and be prepared to stop within 15 to 50 feet of the first track. If your view down the line is blocked, you creep until you can see.",
        context:
          "The statute makes that stopping duty binding in four situations: a visible electric or mechanical signal is warning of an approaching train, a gate is down or a flagman is signalling, a train within about 1,500 feet is sounding an audible warning and is an immediate hazard, or an approaching train is plainly visible and in hazardous proximity.",
        trap:
          "The 15 to 50 feet is a band, not a single number. Stopping right on the rail is as wrong as stopping so far back you cannot see.",
        excerptKey: "rr-advance-warning",
        sourceLabel: "Oklahoma Driver Manual - Chapter 4: Railroad Warning Signs",
        sourceUrl: HB,
      },
      {
        id: "ok_s3_25",
        topic: "sharing",
        question:
          "When may an Oklahoma cyclist lawfully take the whole lane rather than riding to the right?",
        choices: [
          "Only when there is no traffic behind them",
          "Only on roads posted at 25 mph or less",
          "When passing another vehicle, preparing to turn left, avoiding hazards, or when the lane is too narrow to share",
          "Never: bicycles must always ride as far right as possible",
        ],
        correctIndex: 2,
        explanation:
          "The duty to keep right applies only when a car and a bicycle can safely share the lane side by side. Where they cannot, or where the rider is overtaking, turning left or avoiding a hazard, the whole lane is theirs.",
        context:
          "The manual lists the hazards that justify it: parked cars, moving vehicles or machinery, fixed obstacles, pedestrians, animals, potholes and debris. Its own conclusion about a narrow lane is that letting the bicycle take the full lane is the safest outcome for everybody.",
        trap:
          "\"As far right as possible\" is a conditional rule in Oklahoma, not an absolute one. Squeezing past a rider in a narrow lane is the behaviour the exception exists to prevent.",
        excerptKey: "bicycle-full-lane",
        sourceLabel: "Oklahoma Driver Manual - Chapter 10: Sharing the Road with Bicycles",
        sourceUrl: HB,
      },
      {
        id: "ok_s3_26",
        topic: "emergencies",
        question:
          "Your engine dies on a turnpike. What does the Oklahoma Driver Manual tell you to do?",
        choices: [
          "Stay in the left lane and wait for help so you are visible",
          "Signal, pull off to the extreme right shoulder away from moving traffic, and turn on your emergency flashers",
          "Stop where you are and open the hood",
          "Walk back along the shoulder to warn approaching drivers",
        ],
        correctIndex: 1,
        explanation:
          "Signal, get to the extreme right shoulder, away from the traffic lanes, and put the flashers on. The shoulder is only a refuge if you are properly off the road.",
        context:
          "Once you are out of the car, the manual asks you never to walk near the roadway and to keep children well away from traffic. The move-over law then works in your favour: any stationary vehicle displaying flashing lights, including yours on hazards, requires approaching drivers to change lanes or slow down.",
        trap:
          "Stopping in a lane because it is where the car gave up is how a breakdown becomes a collision. Coast as far right as the car will carry you.",
        excerptKey: "expressway-breakdown",
        sourceLabel: "Oklahoma Driver Manual - Chapter 6: Expressway Driving",
        sourceUrl: HB,
      },
      {
        id: "ok_s3_27",
        topic: "rules",
        question:
          "On a one-way street with three lanes, you want to turn right. Which lane does the manual tell you to use?",
        choices: [
          "Any lane, since one-way streets have no lane discipline",
          "The middle lane, to keep the curb lane clear",
          "The lane nearest the curb on the side you are turning toward",
          "The left lane, then cross as you turn",
        ],
        correctIndex: 2,
        explanation:
          "On one-way or divided streets you always turn from the lane nearest the curb on the side you are turning toward. That is the right-hand lane for a right turn and the left-hand lane for a left.",
        context:
          "Driving straight through, you may use any lane on a one-way street, but the manual asks you to leave the extreme right and left lanes for turning traffic and not to weave between lanes. Signs marked NO TURNS FROM THESE LANES make the same point where the geometry needs spelling out.",
        trap:
          "The left-hand lane of a one-way street is a legitimate place to start a left turn, which surprises people used to two-way streets where you turn from beside the centerline.",
        excerptKey: "one-way-turns",
        sourceLabel: "Oklahoma Driver Manual - Chapter 6: Turning on One-Way Streets",
        sourceUrl: HB,
      },
      {
        id: "ok_s3_28",
        topic: "signals",
        question:
          "You are giving an arm signal out of the driver's window. What does an arm bent upward at the elbow mean?",
        choices: ["Left turn", "Right turn", "Slowing or stopping", "Overtake me"],
        correctIndex: 1,
        explanation:
          "Arm and hand pointed upward is a right turn. Straight out is a left turn, and pointed down with the palm facing back is slowing or stopping.",
        context:
          "Arm signals are a lawful substitute for indicators in Oklahoma, and the manual tells you to extend your arm well clear of the window so the signal is unmistakable. It also asks you to bring the arm back in during the actual turn, so that you have both hands available for the wheel.",
        trap:
          "Bent upward and straight out are the pair people reverse. Straight out points where you are going, which is the way to remember it.",
        excerptKey: "arm-signals",
        sourceLabel: "Oklahoma Driver Manual - Chapter 6: Turning",
        sourceUrl: HB,
      },
      {
        id: "ok_s3_29",
        topic: "impairment",
        question:
          "How much alcohol is in a 12-ounce can of beer compared with a 5-ounce glass of wine, according to the manual?",
        choices: [
          "The beer has roughly twice as much",
          "The wine has roughly twice as much",
          "The same amount, as does a cocktail with 1.5 ounces of 80-proof spirits",
          "It depends entirely on the brand",
        ],
        correctIndex: 2,
        explanation:
          "All three carry the same amount of alcohol. The manual's phrasing is that it is not what you drink, it is how much.",
        context:
          "Alcohol reaches the blood quickly, and judgment is among the first things affected, which is why the manual says you do not know when you have had too much until it is too late. As the concentration rises, reflexes slow, vision blurs, and judging distance, speed and the movement of other vehicles gets harder.",
        trap:
          "Switching from spirits to beer changes nothing about the arithmetic. A standard drink is a standard drink.",
        excerptKey: "standard-drink",
        sourceLabel: "Oklahoma Driver Manual - Chapter 12: Alcohol and Driving",
        sourceUrl: HB,
      },
      {
        id: "ok_s3_30",
        topic: "safety",
        question:
          "An animal runs into the road in front of you on a rural Oklahoma highway. What does the manual advise?",
        choices: [
          "Swerve into the opposite lane if it is empty",
          "Do not swerve, because swerving can cause a worse crash than the impact",
          "Brake hard and steer for the shoulder",
          "Sound the horn and hold your speed",
        ],
        correctIndex: 1,
        explanation:
          "Do not swerve. The manual's reasoning is arithmetic rather than sentiment: hitting a deer is usually less severe than hitting a tree, a ditch or an oncoming car.",
        context:
          "Its prevention advice is specific to Oklahoma's conditions. Animals are most active at dawn and dusk, deer and vehicle crashes peak from October to December, and scanning the verges for the reflection of your headlights in an animal's eyes buys you time. Slow down when you see an animal standing near the road.",
        trap:
          "The instinct to swerve is strong and is what turns an animal strike into a fatal collision. It is also the reason the manual sets the rule out in capitals.",
        excerptKey: "animals-do-not-swerve",
        sourceLabel: "Oklahoma Driver Manual - Chapter 11: Animals",
        sourceUrl: HB,
        commonlyMissed: true,
      },
      {
        id: "ok_s3_31",
        topic: "licensing",
        question:
          "An Oklahoma driver under 18 is convicted of a moving violation while at the learner stage. What happens to their progress through the graduated licence?",
        choices: [
          "Nothing, provided no points are assessed",
          "They stay at their current level until six months have passed since the conviction",
          "They restart the graduated licence from the beginning",
          "They must retake the written test",
        ],
        correctIndex: 1,
        explanation:
          "The clock stops. You remain at your current graduated licence level, learner or intermediate, until six months have elapsed from the date of conviction.",
        context:
          "Service Oklahoma's intermediate licence conditions bite the same way from the other end: you need no traffic convictions on your record for the 180 days immediately before the drive test. A licence issued to anyone under 18 is probationary in any case, and can be cancelled or suspended for any moving traffic violation.",
        trap:
          "The six months run from the conviction, not from the offense. A case that takes months to reach court pushes the date out with it.",
        excerptKey: "gdl-conviction-hold",
        sourceLabel: "Oklahoma Driver Manual - Chapter 1: New Graduated Driver License",
        sourceUrl: HB,
      },
      {
        id: "ok_s3_32",
        topic: "rightOfWay",
        question:
          "Traffic ahead is stopped and has backed up across the intersection you are about to enter, though your light is green. What should you do?",
        choices: [
          "Move into the intersection so you are first away when it clears",
          "Stop before the crosswalk and wait for the traffic to move",
          "Turn right to get out of the queue",
          "Sound your horn and edge forward",
        ],
        correctIndex: 1,
        explanation:
          "You stop before the crosswalk and wait. A green light is permission to go only if there is somewhere to go, and blocking the box stops the cross traffic getting their own green.",
        context:
          "The manual's other intersection instructions run the same way: slow down before you enter, look both ways and look left again, then hold your speed until you have cleared, rather than slowing while you are in the middle of it. And do not stop in intersections.",
        trap:
          "Creeping in to hold your place is the exact behaviour that gridlocks a junction, and it leaves you stranded when the cross traffic gets its green.",
        excerptKey: "dont-block-intersection",
        sourceLabel: "Oklahoma Driver Manual - Chapter 5: Crossing an Intersection",
        sourceUrl: HB,
      },
      {
        id: "ok_s3_33",
        topic: "parking",
        question:
          "You are backing out of an angle parking space in a busy supermarket lot. What does the manual add to the usual checks?",
        choices: [
          "Sound the horn continuously until you are clear",
          "Reverse quickly to minimize the time you block the lane",
          "Tap the horn to warn pedestrians nearby",
          "Reverse only when a passenger can direct you",
        ],
        correctIndex: 2,
        explanation:
          "A tap on the horn warns people who cannot see you coming. The manual pairs it with moving back slowly and checking both ways twice, because oncoming traffic in a parking lane is genuinely hard to see.",
        context:
          "It asks you to check for carts before you start, to be especially careful when a truck or van parked beside you blocks the view, and to stop and look again once you can see past the tops of the neighbouring cars. Coming into an angle space, the check is that the rear of your car will clear the car you are passing.",
        trap:
          "A tap is a warning. Leaning on the horn is a different message and one the manual specifically discourages elsewhere as a way of rushing pedestrians.",
        excerptKey: "angle-parking-horn",
        sourceLabel: "Oklahoma Driver Manual - Chapter 9: Angle Parking",
        sourceUrl: HB,
      },
      {
        id: "ok_s3_34",
        topic: "signs",
        question: "What does the fluorescent yellow-green background on a sign mean in Oklahoma?",
        choices: [
          "A temporary detour",
          "A high-emphasis warning about schools, pedestrians or bicycling",
          "An environmental protection zone",
          "A route reserved for slow-moving vehicles",
        ],
        correctIndex: 1,
        explanation:
          "That bright yellow-green is reserved for high-emphasis warnings: school areas, pedestrian crossings and bicycle activity. The color exists to be noticed before the symbol is read.",
        context:
          "It sits in the manual's color key alongside red for stop or not allowed, orange for construction and maintenance, yellow for general warnings, white and black for regulations and instructions, green for guidance, blue for driver services and brown for recreation, culture and history.",
        trap:
          "It is not the same as ordinary yellow. When you see the greener shade, the hazard is people rather than road geometry.",
        excerptKey: "sign-color-key",
        sourceLabel: "Oklahoma Driver Manual - Chapter 4: Signs, Signals and Markings",
        sourceUrl: HB,
      },
      {
        id: "ok_s3_35",
        topic: "rules",
        question:
          "You are on a three-lane road with a marked center lane. What does the manual say that center lane is for?",
        choices: [
          "Overtaking in either direction",
          "Left turns from either direction, and nothing else",
          "The faster of the two directions during rush hour",
          "Emergency vehicles only",
        ],
        correctIndex: 1,
        explanation:
          "Drivers from either direction use the center lane to make left turns. You enter it only to turn left, and you must not pass in it.",
        context:
          "The markings tell you which lane it is: one solid yellow line on each side with yellow dashes on the inside of those solid lines. The manual's own summary of a three-lane highway is that it has two lanes for traffic flowing in opposite directions plus that shared turning lane.",
        trap:
          "Using it as a merging or acceleration lane is the common misuse, and it puts you nose to nose with somebody using it correctly from the other direction.",
        excerptKey: "center-turn-lane",
        sourceLabel: "Oklahoma Driver Manual - Chapter 6: Lane Usage and Maneuvers",
        sourceUrl: HB,
      },
    ],
  },
];
