import type { DrivingTestSet } from "../types";

// Every fact below was checked against the New Hampshire Driver's Manual,
// DSMV 360 (Rev. 11/25), published by the NH Department of Safety, Division of
// Motor Vehicles, plus the sections of Title XXI of the Revised Statutes
// Annotated and the six dmv.nh.gov pages that carry rules the manual states
// incompletely or not at all.
//
// New Hampshire is the one state in this bank with NO learner's permit. A
// person of 15 1/2 may practice drive with a licensed adult of 25 or older and
// nothing else; the knowledge test is taken once, at 16 or later, as one of the
// three tests that produce the license itself. That changes the shape of the
// whole bank - there is no permit stage to ask about, and the Youth Operator
// License (16 up to 21, printed vertically) is what a teenager actually walks
// out with.
//
// Four things the manual leaves out, and where they come from:
//
// 1. The manual gives no pass mark. It says the test is 40 questions in 40
//    minutes and ends automatically after more than 8 wrong; the 80 percent
//    figure appears only on the DMV's Driver Licensing Testing Requirements
//    page. Eight wrong out of 40 is exactly 80 percent, so the two agree.
// 2. The manual's speed table reads "45 or 55 miles per hour in other
//    locations", collapsing two separate statutory figures. RSA 265:60, II
//    separates them: 45 on an unimproved rural highway, 55 everywhere else.
//    No question here turns on that ambiguity; the 55 question names an
//    ordinary paved two-lane road, where both readings give 55.
// 3. The manual never states how long a U-turn sight line must be, what
//    following too closely costs, or what the Move Over and school-bus fines
//    are. RSA 265:43 gives 500 feet, 265:25 gives $100, 265:37-a gives
//    $75/$250, and 265:54 gives $150 and a separate $500 for passing a stopped
//    school bus on the right.
// 4. The manual says nothing about a dead traffic signal. RSA 265:9, V says to
//    treat it as an uncontrolled intersection or a four-way stop.
//
// Two genuine conflicts are flagged where they arise. The manual's no-parking
// list says "within 30 feet of a stop sign, yield sign or traffic control
// signal", while RSA 265:69, II(d) says 30 feet "upon the approach to any
// flashing signal, stop sign, or traffic control signal" and never mentions a
// yield sign; the question here is built on a stop sign, where both agree.
// Separately, the manual says a permanent license is mailed within 45 days
// while the DMV's own minors page says 60; no question turns on it.
//
// Questions are original. Explanations, context notes and trap notes are
// written from scratch; the deep link is there so the learner reads the DMV's
// own authoritative wording on the government's site.
const HB = "https://www.dmv.nh.gov/sites/g/files/ehbemt416/files/inline-documents/nhdm.pdf";
const hb = (printedPage: number) => `${HB}#page=${printedPage + 6}`;
const rsa = (section: string) => {
  const [chapter, num] = section.split(":");
  return `https://www.gencourt.state.nh.us/rsa/html/XXI/${chapter}/${chapter}-${num}.htm`;
};
export const newhampshireSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "New Hampshire Basics",
    difficulty: "starter",
    description:
      "The rules you meet on your first drive in New Hampshire: what the shapes and colors mean, who goes first, and the handful of numbers the DMV's 40-question knowledge test expects you to know cold.",
    questions: [
      {
        id: "nh_s1_01",
        topic: "signs",
        question:
          "You reach a red eight-sided sign at an intersection. What does the New Hampshire Driver's Manual require?",
        choices: [
          "Slow to a crawl and roll through if nothing is coming",
          "Stop only when another vehicle is close enough to matter",
          "Yield to traffic on the busier road, then continue",
          "A full stop, wheels no longer turning, behind the stop line or crosswalk",
        ],
        correctIndex: 3,
        explanation:
          "The octagon means a complete stop, and the manual spells out that the wheels must completely stop moving. Where you stop matters too: behind the stop line, or the crosswalk if there is no line, or before entering the intersection if there is neither.",
        context:
          "New Hampshire teaches signs by shape and color before words, because a shape is readable in fog, glare, or a language you do not read. The octagon is reserved for STOP and nothing else, the downward triangle for YIELD, and a yellow diamond warns of a hazard ahead. After stopping you still have to look for crossing vehicles and pedestrians in all directions and give way before moving.",
        trap:
          "A rolling stop is not a stop. The manual puts the test in the wheels, not in whether the cross street looked clear.",
        excerptKey: "stop-sign",
        sourceLabel: "New Hampshire Driver's Manual - Section 6 Rules of the Road, Traffic Signs",
        sourceUrl: hb(21),
      },
      {
        id: "nh_s1_02",
        topic: "signals",
        question:
          "You are stopped at a steady red light in New Hampshire and want to turn right. What does the manual allow?",
        choices: [
          "Turn right without stopping if the way is clear",
          "Turn right after stopping, unless a sign prohibits the turn",
          "Turn right only when a green arrow appears",
          "Turn right only where a sign expressly permits it",
        ],
        correctIndex: 1,
        explanation:
          "Right on red is New Hampshire's default rather than a special permission. Two conditions attach to it: red still means stop first, and a posted sign forbidding the turn overrides the default.",
        context:
          "The manual treats a solid red as stop and stay stopped behind the stop line, crosswalk or intersection until the light turns green, and then carves out one exception for a right turn. A red arrow is different: it bars you from entering the intersection at all unless another indication shown at the same time permits it.",
        trap:
          "\"It looked clear\" is not the standard. If you never actually stopped, the turn is unlawful on an empty road at three in the morning.",
        excerptKey: "right-on-red",
        sourceLabel: "New Hampshire Driver's Manual - Section 6 Rules of the Road, Traffic Signals",
        sourceUrl: hb(20),
        commonlyMissed: true,
      },
      {
        id: "nh_s1_03",
        topic: "rightOfWay",
        question:
          "Two cars reach an intersection with no signs or signals at the same moment, at right angles. Under RSA 265:28, who yields?",
        choices: [
          "Whichever driver signals first",
          "The driver going straight yields to the driver turning",
          "The driver on the left yields to the driver on the right",
          "The driver on the right yields, because they have the shorter path",
        ],
        correctIndex: 2,
        explanation:
          "New Hampshire's tie-breaker is the vehicle on the right. The statute puts the duty on the driver approaching or entering on the left, and the manual quotes it directly.",
        context:
          "The rule only settles a genuine tie. If one driver clearly arrived first, that driver goes, and the manual lists the driver who is at or arrives at the intersection first ahead of the right-hand rule. An official traffic control device or a police officer directing traffic overrides both.",
        trap:
          "Going straight does not outrank turning here. Order of arrival decides it, and the right-hand rule is only the tiebreak.",
        excerptKey: "row-right",
        sourceLabel: "New Hampshire Driver's Manual - Section 5 Basic Driving, Yielding Right-of-Way",
        sourceUrl: hb(14),
        commonlyMissed: true,
      },
      {
        id: "nh_s1_04",
        topic: "safety",
        question: "What minimum following distance does the New Hampshire manual teach?",
        choices: ["Four seconds", "Two seconds", "Three seconds", "One car length for every 10 mph"],
        correctIndex: 0,
        explanation:
          "New Hampshire teaches four seconds, not the two or three seconds many neighboring states use. You start counting when the rear of the car ahead passes a fixed object and you should still be counting when you reach it.",
        context:
          "The manual gives the count in words: one-thousand-one through one-thousand-four, and you should not reach the object before you finish. Four seconds is the floor in good conditions. It grows on slippery roads, behind large vehicles, at night, in fog and bad weather, and behind anything that has to stop at railroad crossings.",
        trap:
          "Three seconds is the answer people bring in from another state's book. New Hampshire's own figure is four, and it appears twice - once for cars and again for motorcycles.",
        excerptKey: "following-four-seconds",
        sourceLabel: "New Hampshire Driver's Manual - Section 8 Driving Safely, Space Management",
        sourceUrl: hb(30),
        commonlyMissed: true,
      },
      {
        id: "nh_s1_05",
        topic: "speed",
        question:
          "There is no speed limit sign on a street in a business district in downtown Concord. What is the maximum?",
        choices: [
          "25 mph",
          "30 mph",
          "35 mph",
          "45 mph",
        ],
        correctIndex: 1,
        explanation:
          "New Hampshire's statutory maximum in any business or urban residence district is 30 mph. The figure applies whether or not a sign is posted, because it is the default the legislature set.",
        context:
          "The manual prints the whole table: 30 in a business or urban residence district, 35 in a rural residence district and on a Class V highway outside the compact part of a town, 45 or 55 in other locations, 65 on the interstates and turnpikes where they are divided with four or more lanes, and 70 on I-93 north of mile marker 45. A posted limit that differs from the default is the one that governs.",
        trap:
          "25 mph is the figure many states use downtown, and it is what a local authority may lower a limit to in New Hampshire - but the state default is 30.",
        excerptKey: "speed-ideal",
        sourceLabel: "New Hampshire Driver's Manual - Section 5 Basic Driving, Speed Management",
        sourceUrl: hb(15),
      },
      {
        id: "nh_s1_06",
        topic: "licensing",
        question:
          "You are 15 and a half and want to start learning to drive in New Hampshire. What do you need first?",
        choices: [
          "Nothing but a licensed adult of 25 or older beside you, and proof of your age",
          "A learner's permit, but only after driver education",
          "A learner's permit from any DMV office",
          "A signed practice log stamped by a driving school",
        ],
        correctIndex: 0,
        explanation:
          "New Hampshire does not issue permits to learn to drive. The law lets a person of at least 15 and a half who holds no license drive while being taught, as long as a parent, legal guardian, or other licensed responsible adult aged 25 or older is with them.",
        context:
          "The DMV adds the details the manual leaves out: the learner must carry proof of age in the vehicle, the vehicle must be non-commercial, and the supervising adult must sit in the front seat and hold a current valid license. That adult is liable for any motor vehicle violation the unlicensed driver commits. The exception does not apply to anyone whose driving privileges are suspended or revoked in any state.",
        trap:
          "Coming from a state with permits, people assume theirs transfers. The DMV says plainly that New Hampshire does not honor or transfer driving permits from other states.",
        excerptKey: "no-permits",
        sourceLabel: "New Hampshire Driver's Manual - Section 1 Driving in New Hampshire, Practice Driving",
        sourceUrl: hb(2),
        commonlyMissed: true,
      },
      {
        id: "nh_s1_07",
        topic: "signs",
        question: "A yellow five-sided sign shaped roughly like a house tells you what?",
        choices: [
          "A railroad crossing is ahead",
          "No passing for the next stretch",
          "A hospital or emergency service is nearby",
          "You are entering a school zone or approaching a school crossing",
        ],
        correctIndex: 3,
        explanation:
          "The pentagon is reserved for school zones and school crossings. New Hampshire assigns one meaning to each shape so you can read the sign before you can read the words on it.",
        context:
          "The manual's shape list runs: octagon for stop, downward triangle for yield, pennant for a no-passing zone, diamond for warning, rectangle for traffic regulations or directions, pentagon for school zone and school crossing, circle for advance warning of a railroad crossing, and crossbuck for the crossing itself.",
        trap:
          "The round sign is the one that warns of a railroad crossing ahead. The crossbuck marks where the crossing actually is.",
        excerptKey: "sign-rectangle",
        sourceLabel: "New Hampshire Driver's Manual - Section 6 Rules of the Road, Traffic Signs",
        sourceUrl: hb(21),
      },
      {
        id: "nh_s1_08",
        topic: "rules",
        question: "When does New Hampshire law require your headlights to be on?",
        choices: [
          "From half an hour after sunset to half an hour before sunrise, and whenever rain, snow or fog hides people and vehicles at 1,000 feet",
          "From sunset to sunrise only",
          "Only when you cannot see 500 feet ahead",
          "Whenever the wipers are running, and at no other time",
        ],
        correctIndex: 0,
        explanation:
          "Two triggers, and either one is enough. The clock trigger runs from half an hour after sunset to half an hour before sunrise; the weather trigger is rain, snow or fog thick enough that people and vehicles are not clearly discernible 1,000 feet ahead.",
        context:
          "The manual states the rule in one sentence and adds that at least two lighted lamps must show on the front, with one enough for a motorcycle. RSA 265:109 repeats the same half-hour window for lights visible front and rear. Wipers-on-lights-on is a good habit and is the law in some states, but New Hampshire writes its weather trigger as a visibility distance.",
        trap:
          "Sunset is not the trigger. The window opens half an hour after sunset and closes half an hour before sunrise, which is longer than most people guess.",
        excerptKey: "headlights-period",
        sourceLabel: "New Hampshire Driver's Manual - Section 5 Basic Driving, Communicating and Signaling",
        sourceUrl: hb(15),
      },
      {
        id: "nh_s1_09",
        topic: "parking",
        question: "How close to a fire hydrant may you park in New Hampshire?",
        choices: ["10 feet", "No closer than 15 feet", "No closer than 20 feet", "No closer than 25 feet"],
        correctIndex: 1,
        explanation:
          "Fifteen feet is the figure, and it appears in both places that matter: the manual's list of places you may not park even where nothing is marked, and RSA 265:69, II(b).",
        context:
          "The same list gives 20 feet from a crosswalk at an intersection, 30 feet from a stop sign or traffic control signal, 20 feet from the driveway of a fire station, 75 feet from that driveway on the opposite side of the street when it is signposted, and 50 feet from the nearest rail of a railroad crossing. None of these need a sign to be enforceable.",
        trap:
          "Ten and twenty feet are both hydrant distances in other states. New Hampshire's is 15, and painted curbs do not change it.",
        excerptKey: "no-parking-distances",
        sourceLabel: "New Hampshire Driver's Manual - Section 7 General Driving and Parking, Parking",
        sourceUrl: hb(28),
        commonlyMissed: true,
      },
      {
        id: "nh_s1_10",
        topic: "impairment",
        question:
          "A 19-year-old driver in New Hampshire is stopped and tests at 0.04 blood alcohol concentration. What is the legal position?",
        choices: [
          "Legal, because 0.04 is below the 0.08 limit",
          "Legal, but the vehicle may be impounded",
          "Illegal only if the driver appears visibly impaired",
          "Illegal, because the limit for a driver under 21 is 0.02",
        ],
        correctIndex: 3,
        explanation:
          "New Hampshire runs two limits. For a driver 21 or over the threshold is 0.08; for anyone under 21 it is 0.02, and 0.04 is double that.",
        context:
          "The manual states both figures in its loss-of-driving-privileges list, and RSA 265-A:2 sets them in law. The under-21 rule is broader than a number: it is illegal for a driver under 21 to have physical control of a vehicle while impaired by liquor, controlled drugs, prescription drugs, over-the-counter drugs or any other chemical substance. A driver under 21 also may not transport liquor in any part of a vehicle unless a parent, legal guardian or legal-age spouse is along.",
        trap:
          "0.02 is roughly one drink for many people, so \"I only had one\" is not a defense under 21. The manual notes that vision is measurably impaired at 0.02 for every driver, whatever their age.",
        excerptKey: "bac-limits",
        sourceLabel: "New Hampshire Driver's Manual - Section 2 Loss of Driving Privileges",
        sourceUrl: hb(6),
        commonlyMissed: true,
      },
      {
        id: "nh_s1_11",
        topic: "sharing",
        question:
          "A school bus ahead of you stops on a two-lane road with its red lights flashing. What does New Hampshire require?",
        choices: [
          "Stop at least 25 feet away, in either direction, and stay stopped until the lights stop or the bus moves",
          "Stop 10 feet away and go once the children are off the road",
          "Slow to 20 mph and pass carefully on the left",
          "Stop only if you are behind the bus, not if you are meeting it",
        ],
        correctIndex: 0,
        explanation:
          "New Hampshire's distance is 25 feet, and the duty runs in both directions on an undivided road. You stay stopped until the bus resumes motion or the flashing red lights stop operating, and then proceed slowly, still watching for children.",
        context:
          "The manual makes one exception: a roadway separated by a physical barrier. RSA 265:54, III words it as a divided highway with separate roadways, where you need not stop for a bus on the other half. The penalty is $150 for a first offense and $250 to $1,000 after that, and passing a stopped bus on the right is a separate $500 offense with a license suspension attached.",
        trap:
          "The oncoming direction is not excused on an ordinary road. Only a physical barrier or a separate roadway lets meeting traffic keep moving.",
        excerptKey: "school-bus-25",
        sourceLabel: "New Hampshire Driver's Manual - Section 7 General Driving and Parking, Rules for School Buses",
        sourceUrl: hb(27),
        commonlyMissed: true,
      },
      {
        id: "nh_s1_12",
        topic: "signals",
        question: "What must you do at a flashing red traffic light?",
        choices: [
          "Come to a complete stop, then yield before proceeding",
          "Slow down and proceed with caution",
          "Stop only if a vehicle is approaching from the side",
          "Treat it as a green light for the main road",
        ],
        correctIndex: 0,
        explanation:
          "A flashing red is a stop sign in light form. You stop completely behind the stop line, crosswalk or intersection, and then give way to anything with the right of way before you move.",
        context:
          "Its partner is the flashing yellow, which means slow down and proceed with caution, prepared to stop for traffic entering the intersection. A signal that has gone dark is a different case again: RSA 265:9, V says to fall back on the rules for an intersection with no control or a four-way stop, which puts you back on the yield-to-the-right rule.",
        trap:
          "Flashing red and flashing yellow are easy to blur under pressure. Only the yellow lets you keep rolling.",
        excerptKey: "flashing-red",
        sourceLabel: "New Hampshire Driver's Manual - Section 6 Rules of the Road, Traffic Signals",
        sourceUrl: hb(20),
      },
      {
        id: "nh_s1_13",
        topic: "emergencies",
        question:
          "An ambulance comes up behind you with its siren on. What does the manual tell you to do?",
        choices: [
          "Brake hard and stop where you are",
          "Move left so the ambulance can use the right lane",
          "Speed up to clear the intersection ahead of it",
          "Drive immediately to the right side of the road and stop until it has passed",
        ],
        correctIndex: 3,
        explanation:
          "Right side, then stop, and stay stopped until the emergency has passed. Right of way must be given to an emergency vehicle approaching from any direction when it is sounding a siren or running its flashing lights.",
        context:
          "The manual adds two refinements. Do not stop in a way that blocks an intersection, since that traps the vehicle you are trying to help. And when it has gone, signal and merge back into the roadway only when it is safe - pulling out blind is how the second crash happens.",
        trap:
          "Stopping dead in the travel lane feels obedient and is not. The instruction is to get to the right first, then stop.",
        excerptKey: "emergency-vehicle-pull-right",
        sourceLabel: "New Hampshire Driver's Manual - Section 11 Sharing the Road, Emergency Vehicles",
        sourceUrl: hb(40),
      },
      {
        id: "nh_s1_14",
        topic: "signs",
        question: "A yellow diamond-shaped sign means what?",
        choices: [
          "A law you must obey",
          "Directions to a town or service",
          "A warning that a hazard or special situation is ahead",
          "Road work is in progress",
        ],
        correctIndex: 2,
        explanation:
          "Yellow is the general warning color and the diamond is the warning shape. Together they tell you something ahead needs your attention - a curve, an intersection, a change in the road - with a picture or a few words naming it.",
        context:
          "The manual's color key is worth memorizing whole: red for prohibition, green for direction or guidance, blue for driver services, yellow for general warning, white for a law or rule of the road, orange for road repair work, brown for tourist and recreation guidance, pink for incident management, and purple for E-ZPass.",
        trap:
          "Orange, not yellow, is the work-zone color. A yellow diamond in a construction area is warning you about something else.",
        excerptKey: "warning-signs",
        sourceLabel: "New Hampshire Driver's Manual - Section 6 Rules of the Road, Warning Signs",
        sourceUrl: hb(21),
      },
      {
        id: "nh_s1_15",
        topic: "rules",
        question: "How far before a turn does New Hampshire tell you to signal?",
        choices: ["50 feet", "3 seconds, whatever the distance", "As you begin the turn", "At least 100 feet"],
        correctIndex: 3,
        explanation:
          "One hundred feet before the turn. The manual says it and RSA 265:45, II makes it a legal requirement that the signal run continuously through the last 100 feet before turning.",
        context:
          "There is a second figure for highways: signal at least 500 feet before changing lanes or leaving the roadway. The manual also tells you to start the signal sooner when rain, snow or fog means other drivers need more room to stop. Signals are required for changing lanes, turning at an intersection, entering or leaving a highway, turning into a driveway, merging, pulling away from a curb, pulling over, and passing.",
        trap:
          "Three seconds is the rule of thumb in several other states' books. New Hampshire measures in feet, and 100 is the number the exam wants.",
        excerptKey: "signal-100-500",
        sourceLabel: "New Hampshire Driver's Manual - Section 5 Basic Driving, Communicating and Signaling",
        sourceUrl: hb(15),
        commonlyMissed: true,
      },
      {
        id: "nh_s1_16",
        topic: "speed",
        question:
          "You pass a posted school zone 20 minutes before the school opens, on a road normally posted at 35 mph. What is the limit?",
        choices: [
          "15 mph",
          "20 mph",
          "25 mph",
          "35 mph, because no children are outside",
        ],
        correctIndex: 2,
        explanation:
          "The school-zone rule is a subtraction, not a fixed number: 10 mph below the usual posted limit. Below 35 that gives 25.",
        context:
          "The window is defined by the school day, not by whether you can see children. It runs from 45 minutes before each school opening until the opening, and again from each school closing until 45 minutes after. The manual also tells you to obey the school zone limit whenever the lights are flashing or children are present, and to stop when a crossing guard signals you.",
        trap:
          "There is no single statewide school-zone number to memorize. Read the posted limit, subtract 10, and remember the window opens 45 minutes early.",
        excerptKey: "school-zone-speed",
        sourceLabel: "New Hampshire Driver's Manual - Section 5 Basic Driving, Speed Management",
        sourceUrl: hb(15),
      },
      {
        id: "nh_s1_17",
        topic: "licensing",
        question: "What is the New Hampshire knowledge test?",
        choices: [
          "40 multiple-choice questions in 40 minutes, on a touch screen",
          "25 questions with no time limit",
          "50 questions in an hour, half of them about signs",
          "30 questions, taken on paper at any DMV office",
        ],
        correctIndex: 0,
        explanation:
          "Forty multiple-choice questions and 40 minutes to answer them, delivered on a touch screen monitor with four choices per question. The manual states the format; no computer experience is needed.",
        context:
          "The DMV adds the pass mark the manual omits: 80 percent, which on 40 questions means 32 right. The two agree, because the manual also says the test ends automatically once more than 8 questions have been answered incorrectly. Every exam is randomly generated, so a retake is a different paper, and a failed test cannot be retaken for ten calendar days.",
        trap:
          "New Hampshire learners often repeat a figure of 30 out of 40 from memory. The DMV's own page says 80 percent, and 80 percent of 40 is 32.",
        excerptKey: "test-40-questions",
        sourceLabel: "New Hampshire Driver's Manual - Section 1 Required Driver's License Tests",
        sourceUrl: hb(2),
        commonlyMissed: true,
      },
      {
        id: "nh_s1_18",
        topic: "safety",
        question: "Who must wear a safety belt in New Hampshire?",
        choices: [
          "Everyone in the vehicle, front and back",
          "Only the driver and front-seat passengers",
          "Anyone under 18",
          "Nobody - New Hampshire has no belt law at all",
        ],
        correctIndex: 2,
        explanation:
          "The requirement stops at 18. New Hampshire law requires safety restraints for anyone under 18, and the manual immediately adds that everyone else is strongly encouraged to buckle up anyway.",
        context:
          "The under-18 duty runs both ways. RSA 265:107-a makes it an offense to drive while carrying a passenger under 18 who is not belted, and separately makes it an offense for a driver under 18 not to be belted. A child under 7 who is also under 57 inches tall must be in a federally approved child restraint, and a child under 2 must be rear-facing.",
        trap:
          "New Hampshire is the one state with no adult seat belt requirement, which is why people assume there is no belt law at all. There is, and it covers everyone in the car who is under 18.",
        excerptKey: "belts-under-18",
        sourceLabel: "New Hampshire Driver's Manual - Section 4 Before Driving, Using Safety Belts",
        sourceUrl: hb(11),
        commonlyMissed: true,
      },
      {
        id: "nh_s1_19",
        topic: "rightOfWay",
        question:
          "You are waiting at a green light to turn left and a car is coming the other way. Who goes first?",
        choices: [
          "You do, because you arrived at the line first",
          "You do, because the oncoming driver has no turn to make",
          "Whoever moves first, since the green applies to both",
          "The oncoming driver, and you wait for a safe gap",
        ],
        correctIndex: 3,
        explanation:
          "A green light gives you permission to enter the intersection, not priority over oncoming traffic. RSA 265:29 makes the left-turning driver yield to any vehicle approaching from the opposite direction that is in the intersection or close enough to be an immediate hazard.",
        context:
          "The manual quotes the statute and lists drivers in the opposing lane among the people you yield to when turning left. It also warns against a related mistake: do not pull out in front of a car simply because its turn signal is on. The driver may be turning past you, or may have left the signal running from an earlier turn.",
        trap:
          "\"I had a green\" is the sentence people say after this crash. Green means go if the way is clear, and an oncoming car means it is not.",
        excerptKey: "row-left-turn",
        sourceLabel: "New Hampshire Driver's Manual - Section 5 Basic Driving, Yielding Right-of-Way",
        sourceUrl: hb(14),
      },
      {
        id: "nh_s1_20",
        topic: "signs",
        question: "A brown sign carries what kind of message?",
        choices: [
          "Tourist and recreation guidance",
          "A driver service such as fuel or lodging",
          "A prohibition",
          "A temporary detour",
        ],
        correctIndex: 0,
        explanation:
          "Brown is reserved for tourist and recreation guidance - state parks, historic sites, scenic areas. In a state with as many of them as New Hampshire, brown signs are everywhere.",
        context:
          "Blue is the color for driver services: hospitals, fuel, food, lodging. Green is general direction and guidance. Getting the three apart matters on the exam, because the test asks what a color means rather than what a particular sign says.",
        trap:
          "Blue and brown both look like helpful information from the driver's seat. Blue is services you need, brown is places you might want to visit.",
        excerptKey: "sign-colors",
        sourceLabel: "New Hampshire Driver's Manual - Section 6 Rules of the Road, Traffic Signs",
        sourceUrl: hb(21),
      },
      {
        id: "nh_s1_21",
        topic: "parking",
        question: "What does New Hampshire law require when you leave a vehicle unattended?",
        choices: [
          "Nothing beyond setting the parking brake",
          "Turn off the engine and remove the key",
          "Leave the hazard lights on",
          "Leave the transmission in neutral so it can be pushed",
        ],
        correctIndex: 1,
        explanation:
          "The manual puts it plainly as a legal requirement: turn off the engine and remove the key. RSA 265:72 adds locking the ignition and setting the brake.",
        context:
          "The statute also says that on a grade you must turn the front wheels to the curb or the side of the way, which the manual repeats as advice for parking on a hill along with setting the parking brake and leaving an automatic in park or a manual in gear. The one carve-out is a vehicle started by remote control, whose doors must stay locked until the driver reaches it.",
        trap:
          "Idling for two minutes outside a store is exactly the situation the rule covers. Unattended means unattended, whatever the engine is doing.",
        excerptKey: "parking-secure",
        sourceLabel: "New Hampshire Driver's Manual - Section 7 General Driving and Parking, Parking",
        sourceUrl: hb(28),
      },
      {
        id: "nh_s1_22",
        topic: "rules",
        question: "What does a solid white line between two lanes going the same way mean?",
        choices: [
          "Passing is allowed if you signal",
          "The lane on the right ends soon",
          "You may not change lanes or pass across it",
          "It marks the edge of the pavement",
        ],
        correctIndex: 2,
        explanation:
          "A solid white line prohibits changing lanes or passing another vehicle across it. White separates traffic moving in the same direction; the line being solid rather than broken is what removes the permission.",
        context:
          "The manual's line vocabulary is short. White means same direction, yellow means opposite directions. Broken means you may cross when it is safe. Where lines are doubled, what matters is the line on your side: solid and you may not pass, broken and you may. Edge markings are white on two-way roads and on the right edge of a one-way, and yellow on the left edge of a one-way.",
        trap:
          "Broken and solid white both mark lanes going your way, so people read only the color. The solidity carries the rule.",
        excerptKey: "solid-white-lines",
        sourceLabel: "New Hampshire Driver's Manual - Section 6 Rules of the Road, Pavement Markings",
        sourceUrl: hb(23),
      },
      {
        id: "nh_s1_23",
        topic: "sharing",
        question:
          "You are passing a bicyclist at 30 mph on a New Hampshire road. How much space does the law presume is reasonable?",
        choices: ["1 foot", "2 feet", "5 feet", "At least 3 feet"],
        correctIndex: 3,
        explanation:
          "Three feet at 30 mph or less, and one extra foot for every 10 mph above 30. At 50 mph that means five feet.",
        context:
          "The manual and RSA 265:143-a word it the same way: the driver owes the cyclist a reasonable and prudent distance, and the three-foot figure is what the law presumes is reasonable. Bicycles are vehicles on New Hampshire roads with the same rights and duties as any driver, so you also yield to them at intersections and where a bike lane crosses a road.",
        trap:
          "Three feet is a floor, not a ceiling, and it only applies at 30 mph or less. Passing at 50 without widening the gap is short by two feet.",
        excerptKey: "bicycle-3-feet",
        sourceLabel: "New Hampshire Driver's Manual - Section 11 Sharing the Road, Bicyclists",
        sourceUrl: hb(37),
        commonlyMissed: true,
      },
      {
        id: "nh_s1_24",
        topic: "signals",
        question: "A green arrow appears for your direction. What does it mean?",
        choices: [
          "You may turn that way after yielding to traffic and pedestrians",
          "You have an absolute right of way and need not yield",
          "You must turn that way, whatever lane you are in",
          "Prepare to stop, the arrow is about to change",
        ],
        correctIndex: 0,
        explanation:
          "A green arrow permits the movement in the direction of the arrow. It is still a permission, and the manual attaches yielding to traffic and pedestrians to it.",
        context:
          "The arrow family is worth knowing as a set. A yellow arrow means slow down and proceed in that direction with caution. A red arrow means you may not enter the intersection for that movement unless some other indication shown at the same time allows it, and pedestrians facing a steady red arrow are told not to step into the roadway.",
        trap:
          "A protected green arrow usually does clear the conflicting traffic, but the pedestrian in the crosswalk is still there. The manual keeps the yield attached.",
        excerptKey: "green-arrow",
        sourceLabel: "New Hampshire Driver's Manual - Section 6 Rules of the Road, Traffic Signals",
        sourceUrl: hb(20),
      },
      {
        id: "nh_s1_25",
        topic: "emergencies",
        question: "The back of your car starts sliding out on an icy corner. What does the manual tell you to do?",
        choices: [
          "Brake hard and hold the wheel straight",
          "Steer the opposite way from the slide and pump the brakes",
          "Accelerate to pull the car straight",
          "Ease off the accelerator and steer in the direction the rear of the vehicle is sliding",
        ],
        correctIndex: 3,
        explanation:
          "Two moves, in order: ease up on the accelerator, then steer where the back of the car is going. That is what turns the car straight instead of letting it come around sideways.",
        context:
          "The manual then tells you to expect a second swing the other way and be ready to steer into that too, and to straighten the front wheels and resume your original direction once the skid stops. It also names the causes - too fast for conditions, stopping too suddenly, or tires that can no longer grip - which is why the real fix happens before the skid starts.",
        trap:
          "Braking is the instinct and it is what keeps the tires from gripping. Getting off the accelerator comes first.",
        excerptKey: "skid-steer",
        sourceLabel: "New Hampshire Driver's Manual - Section 10 Driving Emergencies, Dealing with Skids",
        sourceUrl: hb(34),
      },
      {
        id: "nh_s1_26",
        topic: "speed",
        question:
          "You are on I-95 in New Hampshire where it is a four-lane divided highway with no posted limit in sight. What is the maximum?",
        choices: ["55 mph", "60 mph", "65 mph", "70 mph"],
        correctIndex: 2,
        explanation:
          "Sixty-five is the interstate figure. It applies on the interstate system and on the central and eastern New Hampshire turnpikes wherever those roads are divided highways of four or more lanes.",
        context:
          "One stretch is faster: I-93 from mile marker 45 to the Vermont border is posted at 70. The interstates also carry a minimum - 45 mph - unless road and weather conditions make that speed unsafe. The manual warns that driving far slower than the flow of traffic creates its own hazard by forcing other drivers to change lanes or take chances passing.",
        trap:
          "Seventy is right for one stretch of I-93 and wrong for every other New Hampshire interstate. Fifty-five is the default for roads that are not interstates or turnpikes.",
        excerptKey: "speed-65-70",
        sourceLabel: "New Hampshire Driver's Manual - Section 5 Basic Driving, Speed Management",
        sourceUrl: hb(15),
      },
      {
        id: "nh_s1_27",
        topic: "impairment",
        question: "According to the manual, what actually reduces the effects of alcohol?",
        choices: ["Strong coffee", "A cold shower", "Fresh air and exercise", "Time, and nothing else"],
        correctIndex: 3,
        explanation:
          "Only time. The manual is explicit that coffee, food, fresh air, exercise and cold showers might make a person feel more alert but do nothing to counter the alcohol itself.",
        context:
          "It gives a rough clock: each ounce of alcohol consumed takes about an hour to work through the body. Impairment starts with the first drink, and the manual notes that with one or more drinks in the bloodstream a person can be impaired and can be arrested. Alcohol and other impairing drugs cut judgment, vision and reaction time, and are involved in roughly 40 percent of fatal crashes each year.",
        trap:
          "Feeling more awake is not the same as being less impaired. That gap between how sober you feel and how sober you are is exactly what the coffee myth exploits.",
        excerptKey: "alcohol-time-only",
        sourceLabel: "New Hampshire Driver's Manual - Section 3 Dangerous Driving, Alcohol, Other Drugs and Driving",
        sourceUrl: hb(9),
      },
      {
        id: "nh_s1_28",
        topic: "licensing",
        question: "What is a New Hampshire Youth Operator License?",
        choices: [
          "The license issued to anyone 16 or older and under 21, printed vertically and expiring on their 21st birthday",
          "A permit that lets a 15-year-old drive to and from school",
          "A restricted license for drivers who have failed the road test once",
          "A license issued only to students enrolled in driver education",
        ],
        correctIndex: 0,
        explanation:
          "It is the ordinary license for a young driver. Anyone 16 or older and under 21 who qualifies gets one, printed vertically rather than horizontally, and it expires on their 21st birthday.",
        context:
          "The DMV adds that the card reads \"Under 21 until (date)\" on its face, and that at 21 the holder applies for a renewal and gets a horizontal license. The extra restrictions on it apply only while the holder is under 18, but the Youth Operator suspension rules for motor vehicle violations run all the way to 20.",
        trap:
          "The vertical card is not a permit and not a probationary stage that ends at 18. It is a full license with a birthday attached, and the violation penalties follow it to 21.",
        excerptKey: "youth-operator-license",
        sourceLabel: "New Hampshire Driver's Manual - Section 2 Types of Driver Licenses",
        sourceUrl: hb(4),
      },
      {
        id: "nh_s1_29",
        topic: "safety",
        question: "What does the manual say about the blind spots your mirrors do not cover?",
        choices: [
          "A properly adjusted set of mirrors removes them",
          "Even properly adjusted mirrors leave blind spots, so head checks are still needed",
          "They only matter on vehicles longer than a car",
          "A blind spot monitor removes the need to look",
        ],
        correctIndex: 1,
        explanation:
          "Adjusting the mirrors well is worth doing and does not finish the job. The manual says that even properly adjusted mirrors will not eliminate all blind spots and that head checks should be worked in whenever possible.",
        context:
          "The same warning attaches to technology. A blind spot monitor helps you notice traffic, but the manual still tells you to check the mirrors and look over your shoulder before changing lanes. Most of these systems are passive: they warn, they do not act, and the manual cautions drivers not to become complacent and depend on them.",
        trap:
          "A clean mirror sweep feels thorough. The car sitting just off your rear quarter is exactly where a mirror cannot show it.",
        excerptKey: "mirrors-blind-spots",
        sourceLabel: "New Hampshire Driver's Manual - Section 4 Before Driving, Adjusting Vehicle Mirrors",
        sourceUrl: hb(11),
      },
      {
        id: "nh_s1_30",
        topic: "rules",
        question:
          "A train is approaching a crossing with no gate. Where must you stop?",
        choices: [
          "Anywhere before the crossbuck",
          "Exactly 20 feet from the near rail",
          "Behind the stop line, or between 15 and 50 feet from the nearest rail",
          "At least 100 feet from the nearest rail",
        ],
        correctIndex: 2,
        explanation:
          "The window is 15 to 50 feet from the nearest rail, or behind the stop line if there is one. Closer than 15 feet puts you in the path of the train's overhang; further than 50 and you cannot see down the track.",
        context:
          "The manual tells you not to move until the lights stop flashing or the train has passed, and where there is more than one track, not to cross until you have a clear view both ways. When the crossing is clear you look both ways and cross without stopping on the tracks. Buses carrying passengers and trucks carrying flammable or hazardous material must stop at every crossing, so leave room when you are behind one.",
        trap:
          "A car does not stop at every crossing in New Hampshire. It stops when a train, a signal, a gate or a stop sign requires it - and then the 15-to-50-foot window applies.",
        excerptKey: "railroad-15-50",
        sourceLabel: "New Hampshire Driver's Manual - Section 6 Rules of the Road, Railroad Crossing Warning Signs",
        sourceUrl: hb(22),
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Core Rules of the Road",
    difficulty: "easy",
    description:
      "The everyday decisions the manual spends most of its pages on: lanes and markings, passing, turning, intersections, and the numbers behind them.",
    questions: [
      {
        id: "nh_s2_01",
        topic: "rules",
        question:
          "On a two-lane road the center line on your side is solid yellow and the other side is broken. What may you do?",
        choices: [
          "Pass, because one of the two lines is broken",
          "Pass only if the oncoming lane is empty for 500 feet",
          "Pass, since yellow lines never prohibit passing",
          "You may not pass, because the line on your side is solid",
        ],
        correctIndex: 3,
        explanation:
          "With doubled lines you read the one on your side of the road. Solid on your side means no passing; the broken line belongs to the drivers coming the other way, and it is their permission, not yours.",
        context:
          "RSA 265:22 gives the same rule with teeth: crossing an unbroken painted line in your own lane is a $100 violation, subject to a short list of exceptions that includes an emergency, getting into or out of a side road or driveway, having an unobstructed view to the end of the line, and moving over for a highway emergency. A 2021 amendment added passing a pedestrian, wheelchair, scooter or bicycle when it can be done safely.",
        trap:
          "\"There was a dashed line right there\" is the usual account. It was the other direction's dashed line.",
        excerptKey: "double-lines",
        sourceLabel: "New Hampshire Driver's Manual - Section 6 Rules of the Road, Pavement Markings",
        sourceUrl: hb(23),
        commonlyMissed: true,
      },
      {
        id: "nh_s2_02",
        topic: "rightOfWay",
        question: "You are pulling out of a private driveway onto a public road. Who has the right of way?",
        choices: [
          "You do, if you got to the edge of the roadway first",
          "Traffic already on the public road",
          "Whoever is traveling faster",
          "Traffic from the left only",
        ],
        correctIndex: 1,
        explanation:
          "Traffic on the public road goes first. The manual lists drivers on a public highway among those you yield to when entering from a driveway or a private road, without qualification.",
        context:
          "RSA 265:53 is stricter still inside a business or residence district: you must stop before driving across the sidewalk, yield to any pedestrian, and then yield to all vehicles on the roadway before entering it. The same yield-to-the-through-road logic covers an entrance ramp, where RSA 265:30, III makes you give way to highway traffic whether or not a yield sign is posted.",
        trap:
          "The sidewalk crossing is the part people forget. A pedestrian on it has priority over you before you even reach the road.",
        excerptKey: "row-driveway",
        sourceLabel: "New Hampshire Driver's Manual - Section 5 Basic Driving, Yielding Right-of-Way",
        sourceUrl: hb(14),
      },
      {
        id: "nh_s2_03",
        topic: "signs",
        question: "What does a pennant-shaped sign on the left side of the road warn you about?",
        choices: [
          "A no-passing zone ahead",
          "A narrow bridge",
          "A school crossing",
          "The end of a divided highway",
        ],
        correctIndex: 0,
        explanation:
          "The pennant is a sideways triangle and it means no passing. The manual notes that it sits on the left side of the road, which is unusual enough to be a clue in itself.",
        context:
          "It is one of eight standard shapes: octagon for stop, downward triangle for yield, pennant for no passing, diamond for warning, rectangle for regulations or directions, pentagon for school zone and crossing, circle for advance railroad warning, and crossbuck for the crossing itself. Learning the system beats memorizing signs, because the exam draws on signs the manual never pictures.",
        trap:
          "Almost every other sign is on the right. A driver scanning only the right shoulder never sees this one.",
        excerptKey: "sign-shapes",
        sourceLabel: "New Hampshire Driver's Manual - Section 6 Rules of the Road, Traffic Signs",
        sourceUrl: hb(21),
      },
      {
        id: "nh_s2_04",
        topic: "safety",
        question:
          "At 50 mph on dry pavement with good brakes, roughly how far does the manual say braking takes?",
        choices: [
          "About 60 feet",
          "About 158 feet",
          "About 250 feet",
          "About 400 feet",
        ],
        correctIndex: 1,
        explanation:
          "About 158 feet, and that is the braking distance alone. Perception and reaction time each add three quarters of a second to a full second, so the total stopping distance is longer again.",
        context:
          "The manual breaks total stopping distance into four parts: speed, perception time, reaction time and braking distance. It also gives the relationship that matters most, which is not linear - doubling your speed multiplies the stopping distance by about four. That is why a 20 mph difference feels small and is not.",
        trap:
          "The number people picture is the whole stop, not the brakes alone. Add the roughly 110 feet you cover while noticing and reacting at 50 mph.",
        excerptKey: "braking-158-feet",
        sourceLabel: "New Hampshire Driver's Manual - Section 5 Basic Driving, Stopping Distance",
        sourceUrl: hb(16),
      },
      {
        id: "nh_s2_05",
        topic: "sharing",
        question:
          "A person carrying a white cane with a red tip is waiting to cross. What does New Hampshire law require of you?",
        choices: [
          "Slow down and pass behind them",
          "Sound the horn so they know you are there",
          "Come to a complete stop",
          "Yield only if they have already stepped into the road",
        ],
        correctIndex: 2,
        explanation:
          "A complete stop, not a slow-down. New Hampshire law requires drivers to stop whenever a person carrying a white cane or using a harnessed guide dog is attempting to cross a roadway.",
        context:
          "The manual explains why the stop has to be complete. A blind pedestrian listens for the traffic to stop moving before stepping off the curb, so a car that merely slows is telling them the road is still busy. It adds that you should use extra caution when you do move off, and should never sound the horn or shout at a person who is visually impaired.",
        trap:
          "Honking feels helpful and is the opposite. The manual singles it out as something never to do here, and the same warning covers horses.",
        excerptKey: "white-cane-stop",
        sourceLabel: "New Hampshire Driver's Manual - Section 11 Sharing the Road, Visually Impaired/Blind Pedestrians",
        sourceUrl: hb(36),
        commonlyMissed: true,
      },
      {
        id: "nh_s2_06",
        topic: "rules",
        question: "When may you legally pass another vehicle on the right in New Hampshire?",
        choices: [
          "Whenever the vehicle ahead is going below the speed limit",
          "Never, in any circumstance",
          "Only by using the shoulder, and only briefly",
          "When the vehicle ahead is turning left, or where the road has two or more lanes your way",
        ],
        correctIndex: 3,
        explanation:
          "RSA 265:19 permits it in two situations: when the vehicle you are overtaking is making or about to make a left turn, and on a road wide enough for two or more lines of traffic going your way. Both need conditions that make the move safe.",
        context:
          "The statute closes the obvious loophole in the same breath: the movement may not be made by driving off the roadway. The manual says the same thing in plainer words - never pass on the shoulder, whether it is paved or not. On multi-lane roads the left-most lane is meant for passing slower traffic.",
        trap:
          "A wide paved shoulder looks like a lane and is not one. Using it to get around a left-turning car is the version of this that gets ticketed.",
        excerptKey: "rsa-pass-right",
        sourceLabel: "New Hampshire RSA 265:19 - When Overtaking on the Right is Permitted",
        sourceUrl: rsa("265:19"),
      },
      {
        id: "nh_s2_07",
        topic: "parking",
        question: "How close to a crosswalk at an intersection may you park?",
        choices: ["10 feet", "No closer than 15 feet", "No closer than 20 feet", "No closer than 30 feet"],
        correctIndex: 2,
        explanation:
          "Twenty feet. The distance exists so a driver approaching the intersection can see someone stepping into the crosswalk, which a parked car directly beside it would hide.",
        context:
          "The manual lists it alongside the other unmarked prohibitions: 15 feet from a hydrant, 30 feet from a stop sign, yield sign or traffic control signal, 20 feet from a fire station driveway, 75 feet from that driveway on the opposite side of the street, and 50 feet from the nearest rail of a railroad crossing. RSA 265:69 also bars parking on a sidewalk, in an intersection, on a crosswalk, on a bridge and in a tunnel.",
        trap:
          "Fifteen and twenty are easy to swap. Fifteen is the hydrant, twenty is the crosswalk, thirty is the stop sign or signal.",
        excerptKey: "no-parking-distances",
        sourceLabel: "New Hampshire Driver's Manual - Section 7 General Driving and Parking, Parking",
        sourceUrl: hb(28),
      },
      {
        id: "nh_s2_08",
        topic: "signals",
        question: "What does a solid yellow traffic light mean?",
        choices: [
          "Speed up to clear the intersection",
          "Proceed with caution, the signal is malfunctioning",
          "Stop unless you are already in the intersection",
          "The light is about to turn red",
        ],
        correctIndex: 3,
        explanation:
          "The manual defines it as a warning light telling you the signal is about to change to red. That warning is the whole of its content, and what you do with it depends on whether you can stop safely.",
        context:
          "The solid red that follows means stop before entering the intersection and wait behind the stop line, crosswalk or intersection until the light turns green. The flashing version of yellow means something different again: slow down, proceed with caution, and be ready to stop for traffic entering the intersection.",
        trap:
          "Treating yellow as \"go faster\" is the reading that produces the crash. It is a warning that your permission is expiring.",
        excerptKey: "yellow-light",
        sourceLabel: "New Hampshire Driver's Manual - Section 6 Rules of the Road, Traffic Signals",
        sourceUrl: hb(20),
      },
      {
        id: "nh_s2_09",
        topic: "licensing",
        question:
          "You move to New Hampshire from another state. How long do you have to get a New Hampshire license?",
        choices: ["30 days", "60 days", "90 days", "Six months"],
        correctIndex: 1,
        explanation:
          "Sixty days from moving into the state. The manual states it as a hard deadline for new residents, not a grace period that stretches.",
        context:
          "New Hampshire also runs a one-license rule: RSA 263:4 requires new residents to surrender every valid license issued by any other jurisdiction when they apply here. If your out-of-state license is current, only a vision test is required. If it has been expired for more than a year, you take the vision, knowledge and road tests as though you had never been licensed.",
        trap:
          "Letting an out-of-state license lapse past a year turns a vision test into all three tests. The 60-day clock is what people ignore until it costs them.",
        excerptKey: "new-residents-60",
        sourceLabel: "New Hampshire Driver's Manual - Section 1 Driving in New Hampshire, New Residents to NH",
        sourceUrl: hb(1),
        commonlyMissed: true,
      },
      {
        id: "nh_s2_10",
        topic: "speed",
        question:
          "What is the minimum speed on a New Hampshire interstate highway in good conditions?",
        choices: ["30 mph", "40 mph", "45 mph", "There is no minimum"],
        correctIndex: 2,
        explanation:
          "Forty-five mph, unless road and weather conditions make that speed unsafe. The interstate is the one place New Hampshire sets a floor as well as a ceiling.",
        context:
          "The manual explains the reasoning right after it: a driver going far slower than the flow of traffic blocks the people behind, pushes them into lane changes, and tempts them into passes that are not safe. RSA 265:16 backs this with a duty to keep a slower vehicle in the right-hand lane, and adds that no vehicle should sit continuously in the left lane of a multilane road when that impedes traffic.",
        trap:
          "The exception swallows the rule in bad weather. Forty-five is the minimum in good conditions, not a speed you must hold through a snow squall.",
        excerptKey: "speed-minimum-45",
        sourceLabel: "New Hampshire Driver's Manual - Section 5 Basic Driving, Speed Management",
        sourceUrl: hb(15),
      },
      {
        id: "nh_s2_11",
        topic: "emergencies",
        question:
          "You are in a crash with injuries. What does the manual tell you to do about the injured?",
        choices: [
          "Move them off the road immediately",
          "Move them only if they ask you to",
          "Wait for police before approaching anyone",
          "Give aid but do not move them unless it is necessary, and be sure an ambulance is called",
        ],
        correctIndex: 3,
        explanation:
          "Give aid, but leave them where they are unless moving them is necessary, and make certain an ambulance has been called. Moving an injured person can turn a survivable injury into a permanent one.",
        context:
          "The manual's crash sequence is: stop; move the vehicle off the road if you can so traffic is not blocked; call 911 if anyone is hurt; give aid; and exchange names, addresses, license numbers and states, plate numbers, vehicle make, model and year, and insurance details. Get the names and addresses of witnesses too.",
        trap:
          "Dragging someone clear looks like the heroic option. Unless the scene is actively dangerous, it is the one the manual warns against.",
        excerptKey: "crash-aid",
        sourceLabel: "New Hampshire Driver's Manual - Section 9 Accidents and Financial Responsibility",
        sourceUrl: hb(32),
      },
      {
        id: "nh_s2_12",
        topic: "signs",
        question: "What does a white rectangular sign carry?",
        choices: [
          "A warning about the road ahead",
          "Tourist information",
          "A law or rule of the road you must obey",
          "A recommended speed for a curve",
        ],
        correctIndex: 2,
        explanation:
          "White is the color for a law or rule of the road, and the rectangle is the regulatory shape. A speed limit sign is the everyday example: black on white, and binding.",
        context:
          "The manual describes regulatory signs as square or rectangular, carrying letters or symbols, telling drivers about specific laws on traffic direction, lane use, turning, speed and parking. Some add a red circle with a red slash over a symbol, which prohibits the action shown. Speed limit signs give the maximum legal speed in ideal conditions, not a target for any condition.",
        trap:
          "A yellow sign with a number on it beneath a curve warning is an advisory speed, not a limit. The black-on-white rectangle is the enforceable one.",
        excerptKey: "regulatory-signs",
        sourceLabel: "New Hampshire Driver's Manual - Section 6 Rules of the Road, Regulatory Signs",
        sourceUrl: hb(22),
      },
      {
        id: "nh_s2_13",
        topic: "impairment",
        question:
          "The manual compares 24 hours without sleep to what blood alcohol concentration?",
        choices: ["0.02", "0.05", "0.08", "0.10"],
        correctIndex: 3,
        explanation:
          "About 0.10, which is above the legal limit for every driver in New Hampshire. The manual gives the whole ladder: 18 hours awake looks like 0.05, 21 hours like 0.08, and 24 hours like 0.10.",
        context:
          "The point the manual is making is that there is no test for it. Unlike drunk driving, there is no sleep breathalyzer to tell an officer that fatigue caused a crash, so the decision not to drive is entirely the driver's. Its remedies are practical: seven to nine hours of sleep, a stop every two hours on a long trip, a 15 to 20 minute nap before you get too tired, and avoiding late-night driving.",
        trap:
          "Tiredness feels like something you can push through, and alcohol does not. The manual's whole point is that the impairment is comparable even when the feeling is not.",
        excerptKey: "fatigue-18-hours",
        sourceLabel: "New Hampshire Driver's Manual - Section 3 Dangerous Driving, Fatigue",
        sourceUrl: hb(7),
      },
      {
        id: "nh_s2_14",
        topic: "rightOfWay",
        question: "How do you enter a multi-lane roundabout in New Hampshire?",
        choices: [
          "Yield to traffic in both lanes, then enter on a gap",
          "Stop at the entry, whether or not traffic is coming",
          "Enter at speed and merge, since traffic inside must let you in",
          "Yield only to the outer lane",
        ],
        correctIndex: 0,
        explanation:
          "You yield to traffic already circulating, in both lanes, and enter when there is an appropriate gap. Traffic in the circle keeps moving; the driver entering waits.",
        context:
          "The manual's other roundabout rules matter as much. Choose your exit lane before you enter, using the signs and pavement markings. Hold your lane all the way round and avoid changing lanes inside. Do not overtake anyone in the circle, because large trucks and trailers may need to straddle both lanes.",
        trap:
          "Stopping at the entry when nothing is coming is its own hazard, and so is entering on a gap that is only in one lane. The yield covers both.",
        excerptKey: "roundabout-yield",
        sourceLabel: "New Hampshire Driver's Manual - Section 7 Multi-lane Roundabouts (Traffic Circles)",
        sourceUrl: hb(27),
      },
      {
        id: "nh_s2_15",
        topic: "safety",
        question:
          "Which child must be in a federally approved child passenger restraint in New Hampshire?",
        choices: [
          "Any child under 12",
          "A child under 7 who is also under 57 inches tall",
          "Any child under 8, whatever their height",
          "Only children under 4",
        ],
        correctIndex: 1,
        explanation:
          "The test is age and height together: under 7 years old and under 57 inches. A child who is under 7 but 57 inches or taller falls outside the child-restraint requirement, though the belt requirement for anyone under 18 still applies.",
        context:
          "RSA 265:107-a adds a rule the manual does not print: a passenger under 2 must be in a rear-facing restraint. It also lists the narrow exceptions to the belt requirement - a vehicle used to carry passengers for hire, a school bus over 10,000 pounds or one under that weight built without belts, an antique vehicle without restraints, a motorcycle, and a child with an individualized education program stating that restraints are unsafe.",
        trap:
          "Height alone or age alone is not the test. Both conditions have to be true for the child-restraint rule to bite.",
        excerptKey: "child-seat-7-57",
        sourceLabel: "New Hampshire Driver's Manual - Section 4 Before Driving, Child Passenger Safety Laws",
        sourceUrl: hb(12),
      },
      {
        id: "nh_s2_16",
        topic: "rules",
        question:
          "You are on a two-lane road with a lane down the middle marked with both broken and solid yellow lines on each side. What is that lane for?",
        choices: [
          "Passing slower traffic in either direction",
          "Emergency vehicles only",
          "A breakdown lane",
          "Left turns from either direction, and nothing else",
        ],
        correctIndex: 3,
        explanation:
          "It is a shared center turn lane, reserved for vehicles turning left from either direction. The manual is explicit that it is not for through traffic and not for passing.",
        context:
          "Because both directions use it, you enter it only for the turn itself and only close to where you intend to turn. The signs above it show the same thing - a left-turn arrow curving from each side. Treating it as a running lane puts you head-on with someone doing the same from the other direction.",
        trap:
          "It looks like a free lane on a busy road. Every driver who uses it to get ahead is closing on someone using it correctly.",
        excerptKey: "shared-center-turn-lane",
        sourceLabel: "New Hampshire Driver's Manual - Section 6 Rules of the Road, Pavement Markings",
        sourceUrl: hb(24),
      },
      {
        id: "nh_s2_17",
        topic: "sharing",
        question:
          "What does an orange and red reflective triangle on the back of a vehicle tell you?",
        choices: [
          "The vehicle is carrying hazardous material",
          "The vehicle travels at less than 25 mph",
          "The vehicle is disabled",
          "The vehicle is wider than a normal lane",
        ],
        correctIndex: 1,
        explanation:
          "It is the slow-moving vehicle emblem, and it means the vehicle travels at less than 25 mph. On animal-drawn vehicles, farm equipment and construction equipment it is often the only warning you get.",
        context:
          "The manual tells you to use caution approaching one and to be sure it is safe before passing, and adds a detail that matters on a farm road: the operator of farm machinery often cannot hear you coming. Horse-drawn vehicles and horseback riders have the same rights to the road, and drivers approaching a horse must take every precaution not to frighten it, which means slowing, not sounding the horn, and not revving the engine.",
        trap:
          "The closing speed is the danger. At 55 mph you are gaining on a 20 mph tractor at nearly 52 feet a second.",
        excerptKey: "slow-moving-triangle",
        sourceLabel: "New Hampshire Driver's Manual - Section 11 Sharing the Road, Slow Moving Vehicles",
        sourceUrl: hb(38),
      },
      {
        id: "nh_s2_18",
        topic: "licensing",
        question:
          "You are 17 and want a New Hampshire driver's license. What must you complete first?",
        choices: [
          "Nothing beyond the three tests",
          "A defensive driving class of your choosing",
          "An approved driver education program",
          "Six months holding a permit",
        ],
        correctIndex: 2,
        explanation:
          "RSA 263:19 requires everyone 16 or 17 to complete an approved driver education program before applying. There is no permit stage in New Hampshire, so the course is the gate.",
        context:
          "The course is 30 hours of classroom instruction, 10 hours of practice driving with a certified instructor and 6 hours of observation. On top of that a student must log 40 hours of supervised driving with a parent, guardian or other responsible adult, of which at least 10 must be at night. Logged hours may begin at 15 and a half. A parent or guardian must also give written permission before a license is issued to anyone under 18.",
        trap:
          "The 40 hours are additional to the course, not part of it. Students who count their instructor hours toward the 40 arrive at the DMV short.",
        excerptKey: "driver-ed-required",
        sourceLabel: "New Hampshire Driver's Manual - Section 1 Driving in New Hampshire, Licensing Requirements",
        sourceUrl: hb(1),
      },
      {
        id: "nh_s2_19",
        topic: "parking",
        question:
          "You must leave your car partly on a rural road because there is no shoulder. What does the manual require?",
        choices: [
          "Nothing, as long as the hazard lights are on",
          "A clear view of the vehicle for 200 feet in each direction, and room for others to pass",
          "A clear view for 100 feet in each direction",
          "That you stay with the vehicle until it is moved",
        ],
        correctIndex: 1,
        explanation:
          "Two hundred feet of clear view in each direction, and enough space left for other vehicles to get by. The manual's first instruction is to get the vehicle off the paved or main travelled portion altogether; the 200-foot rule is what applies when that is impossible.",
        context:
          "It also warns that police often tow vehicles abandoned along the roadway even when they are well clear of the travelled portion, and suggests leaving a note on the windshield with the problem, when the vehicle will be moved and how to reach the owner. RSA 265:37-b adds that a movable vehicle stopped in the roadway must be moved to the shoulder or another safe area as soon as the driver is able.",
        trap:
          "Hazard lights do not substitute for sight distance. The 200 feet is about whether an approaching driver can see you in time.",
        excerptKey: "parking-rural-200",
        sourceLabel: "New Hampshire Driver's Manual - Section 7 General Driving and Parking, Parking",
        sourceUrl: hb(27),
      },
      {
        id: "nh_s2_20",
        topic: "signals",
        question:
          "The traffic signal at a busy intersection is completely dark after a power cut. What do you do?",
        choices: [
          "Treat the intersection as though it had no controls or a four-way stop",
          "Proceed as though you had a green, since the light is not showing red",
          "Wait for a police officer before entering",
          "Yield only to vehicles on the wider road",
        ],
        correctIndex: 0,
        explanation:
          "RSA 265:9, V says exactly this: when a traffic control device is not operational, fall back on the rules for an intersection without controls or one with four-way stop signs.",
        context:
          "The statute then lists which rules those are - yield to the vehicle on your right, yield when turning left, yield to a vehicle already in the intersection, yield when entering from a private road or driveway, yield to emergency vehicles, and yield to pedestrians in crosswalks. In practice that means stop, look, and let the driver on your right go.",
        trap:
          "A dark light is not a green. Nor is it a free-for-all: the yield-to-the-right rule reappears the moment the signal stops working.",
        excerptKey: "rsa-dead-signal",
        sourceLabel: "New Hampshire RSA 265:9 - Obedience to Any Required Traffic Control Devices",
        sourceUrl: rsa("265:9"),
      },
      {
        id: "nh_s2_21",
        topic: "speed",
        question:
          "You are on a paved two-lane state road outside any village, with no limit posted. What is the default maximum?",
        choices: ["35 mph", "45 mph", "55 mph", "65 mph"],
        correctIndex: 2,
        explanation:
          "Fifty-five mph. RSA 265:60, II(e) sets it as the limit in locations that are not districts, not unimproved rural highways, and not interstates or turnpikes.",
        context:
          "The manual compresses the statute into \"45 or 55 miles per hour in other locations\" without saying which applies where. The statute separates the two: 45 belongs to an unimproved rural highway as defined in RSA 259:116-a, and 55 is the general default. A district changes the answer - 30 in a business or urban residence district, 35 in a rural residence district or on a Class V highway outside a town's compact part.",
        trap:
          "The basic rule outranks the number. RSA 265:60, I still forbids any speed greater than is reasonable and prudent for the conditions, so 55 in fog is unlawful even where 55 is posted.",
        excerptKey: "rsa-speed-55-default",
        sourceLabel: "New Hampshire RSA 265:60 - Basic Rule and Maximum Limits",
        sourceUrl: rsa("265:60"),
      },
      {
        id: "nh_s2_22",
        topic: "emergencies",
        question:
          "A front tire blows out at speed. What does the manual tell you to do first?",
        choices: [
          "Brake hard to slow before the car pulls",
          "Grip the wheel firmly and keep the vehicle going straight",
          "Steer for the shoulder immediately",
          "Shift into neutral and coast",
        ],
        correctIndex: 1,
        explanation:
          "Hold the wheel and keep the car straight. A front blowout pulls sharply toward the failed tire, and the steering correction has to come before anything else.",
        context:
          "After that, slow down gradually by easing off the accelerator, let the vehicle lose speed on its own or brake gently if you must, and then pull off in a safe place and put the flashers on. A rear blowout behaves differently - the car wobbles, shakes and pulls somewhat toward the blown tire - but the response is the same.",
        trap:
          "Braking hard is the reflex and it makes the pull worse. The car needs the tires it still has doing the steering, not the stopping.",
        excerptKey: "blowout-response",
        sourceLabel: "New Hampshire Driver's Manual - Section 10 Driving Emergencies, Tire Blowout",
        sourceUrl: hb(35),
      },
      {
        id: "nh_s2_23",
        topic: "signs",
        question:
          "You see a round yellow sign with a black X and two black R's. What is it telling you?",
        choices: [
          "You are at the railroad crossing itself",
          "A railroad crossing is ahead - slow down, look and listen",
          "Trains are not running on this line",
          "The crossing is closed to traffic",
        ],
        correctIndex: 1,
        explanation:
          "The round sign is advance warning: a railroad crossing is coming. The manual says it cautions the driver to slow down or stop and to look and listen for a train before proceeding.",
        context:
          "The crossbuck - the white X reading RAILROAD CROSSING - is the different sign that marks where the crossing actually is. Where the crossing is active, lights and signals do the warning, and when a train is approaching you stop behind the stop line or between 15 and 50 feet from the nearest rail.",
        trap:
          "The round sign and the crossbuck get confused because both carry the X. Round means ahead; the crossbuck means here.",
        excerptKey: "crossbuck-advance",
        sourceLabel: "New Hampshire Driver's Manual - Section 6 Railroad Crossing Warning Signs",
        sourceUrl: hb(22),
      },
      {
        id: "nh_s2_24",
        topic: "safety",
        question:
          "How much extra following distance does the manual want at night on a road you do not know?",
        choices: [
          "None, if the headlights are on high beam",
          "One extra second",
          "At least two extra seconds on top of the four",
          "Double the daytime distance in every case",
        ],
        correctIndex: 2,
        explanation:
          "Night driving alone earns at least one extra second. An unfamiliar road at night earns at least two, on top of the four-second baseline.",
        context:
          "The manual's other night rules build on the same idea that you cannot see as far. Use high beams where there is no oncoming traffic and dim them for everyone approaching. Use low beams when following another vehicle and in fog, rain or snow, because high beams bounce glare back at you. When someone else leaves their high beams on, look toward the right edge of the road rather than into the light.",
        trap:
          "Bright headlights make the road look normal and do not extend how far you can react. The manual adds seconds, not lumens.",
        excerptKey: "night-following-extra",
        sourceLabel: "New Hampshire Driver's Manual - Section 5 Basic Driving, Night Driving",
        sourceUrl: hb(18),
      },
      {
        id: "nh_s2_25",
        topic: "rules",
        question: "Where does the manual tell you to position the car before a right turn?",
        choices: [
          "In the middle of the lane, to give yourself room",
          "Swing left first to square up the corner",
          "As close as practical to the right-most portion of the lane",
          "Wherever the following traffic allows",
        ],
        correctIndex: 2,
        explanation:
          "Turn right from the right-most portion of the lane, and avoid swinging wide to the left before you start. Sitting right removes the gap a cyclist or a motorcyclist would otherwise ride into.",
        context:
          "The mirror-image rule applies to left turns: enter and hold the left-most portion of the lane. Where more than one lane can make the turn, pick your lane, enter it, and stay in it until the turn is finished. Before any turn the manual wants you searching all corners for traffic controls, pedestrians and other vehicles, and looking through the turn to the farthest point on your intended path.",
        trap:
          "Swinging left before a right turn reads to the driver behind as a left turn. Trucks need that space for real; cars do not.",
        excerptKey: "right-turns",
        sourceLabel: "New Hampshire Driver's Manual - Section 7 General Driving and Parking, Turning and U-Turns",
        sourceUrl: hb(25),
      },
      {
        id: "nh_s2_26",
        topic: "impairment",
        question:
          "You are 20 and driving friends home. Someone has left a sealed bottle of wine in the trunk. What is your position under New Hampshire law?",
        choices: [
          "Fine, because the bottle is sealed and in the trunk",
          "Fine, as long as you are not drinking",
          "Illegal, because a driver under 21 may not transport liquor in any part of a vehicle",
          "Illegal only if a passenger is also under 21",
        ],
        correctIndex: 2,
        explanation:
          "The manual states the rule without a container or location exception: no driver under 21 may transport any liquor or alcoholic beverage in any part of a vehicle. The trunk is part of the vehicle.",
        context:
          "There is one exception, and it is narrow: when the driver is accompanied by a parent, legal guardian or legal-age spouse. The rule sits beside the 0.02 concentration limit and the broader ban on a driver under 21 having physical control of a vehicle while impaired by liquor or any drug, prescribed or otherwise.",
        trap:
          "\"Sealed and out of reach\" is the open-container rule from other states. New Hampshire's under-21 rule is about transporting it at all.",
        excerptKey: "under-21-transport",
        sourceLabel: "New Hampshire Driver's Manual - Section 3 Operators under 21 years of age",
        sourceUrl: hb(8),
        commonlyMissed: true,
      },
      {
        id: "nh_s2_27",
        topic: "sharing",
        question:
          "How far behind a fire truck responding to an alarm may you follow?",
        choices: [
          "No closer than 500 feet",
          "No closer than 200 feet",
          "No closer than 100 feet",
          "There is no set distance, only the four-second rule",
        ],
        correctIndex: 0,
        explanation:
          "Five hundred feet, whenever the fire truck is sounding its siren or running its flashing lights. RSA 265:100 sets the distance and the manual repeats it.",
        context:
          "The same rule bars you from driving or parking within the block where a fire truck has stopped to answer an alarm. That is not just courtesy: the space is where hose lines, ladders and crews go. For other emergencies, Sherrill's Law - RSA 265:37-a - requires a reduced speed and a wide berth, and vacating any blocked lane as soon as you safely can.",
        trap:
          "Slipstreaming an emergency vehicle through traffic feels efficient and is a separate offense. It also puts you in the space the crew needs when it stops.",
        excerptKey: "fire-truck-500",
        sourceLabel: "New Hampshire Driver's Manual - Section 11 Sharing the Road, Emergency Vehicles",
        sourceUrl: hb(40),
      },
      {
        id: "nh_s2_28",
        topic: "rightOfWay",
        question:
          "A pedestrian is crossing in a marked crosswalk with no signal. A car in the next lane has stopped for them. What must you do?",
        choices: [
          "Pass the stopped car carefully, watching for the pedestrian",
          "Sound your horn and continue",
          "Proceed if the pedestrian is still on the far side of the road",
          "Stop as well, and do not overtake the stopped vehicle",
        ],
        correctIndex: 3,
        explanation:
          "RSA 265:35, IV bars a driver approaching from behind from overtaking a vehicle that has stopped at a crosswalk to let a pedestrian cross. The stopped car is hiding the person from you, which is exactly why the rule exists.",
        context:
          "The underlying duty is in the same section: where signals are not in place or not operating, you yield to a pedestrian in a crosswalk who is on your half of the road, or approaching closely enough from the other half to be in danger. The manual goes further and tells you to yield to pedestrians crossing at intersections even where no crosswalk lines are painted.",
        trap:
          "The stopped car in the next lane looks like an obstacle to get around. It is a warning that someone you cannot see is walking into your lane.",
        excerptKey: "rsa-no-pass-stopped-crosswalk",
        sourceLabel: "New Hampshire RSA 265:35 - Pedestrian's Right of Way in Crosswalks",
        sourceUrl: rsa("265:35"),
        commonlyMissed: true,
      },
      {
        id: "nh_s2_29",
        topic: "licensing",
        question:
          "You fail the New Hampshire knowledge test. How soon may you retest?",
        choices: [
          "The same day, at another office",
          "After 24 hours",
          "After seven days",
          "No sooner than ten calendar days",
        ],
        correctIndex: 3,
        explanation:
          "Ten days. The manual says the applicant is given an appointment to retest not sooner than ten days from the failed test, and the DMV's testing page words it as ten calendar days.",
        context:
          "The same ten-day wait applies to a failed road test. Missing a scheduled road test or cancelling it with less than 24 hours notice is worse: that carries a 30-day wait. Every knowledge exam is randomly generated, so the retake is a different set of questions rather than a second run at the same one.",
        trap:
          "There is no walk-in retry at a different office. The wait is on your record, not on the building.",
        excerptKey: "retest-ten-days",
        sourceLabel: "New Hampshire Driver's Manual - Section 1 Pass/Fail of Tests",
        sourceUrl: hb(3),
      },
      {
        id: "nh_s2_30",
        topic: "safety",
        question: "What does the manual say about how far your chest should be from the steering wheel?",
        choices: [
          "As close as is comfortable",
          "About 10 inches",
          "About 6 inches",
          "It does not matter if the belt is fastened",
        ],
        correctIndex: 1,
        explanation:
          "Ten inches. The figure is about the air bag, which deploys fast enough that sitting closer turns a safety device into an injury.",
        context:
          "The rest of the seating checklist matters for the same reason. Sit upright with your feet on the floor, able to pivot from brake to accelerator with the heel down. The top of the wheel should be no higher than your shoulders and below chin level. Do not recline excessively, and set the head restraint so it touches the back of your head rather than sitting below your ears.",
        trap:
          "Slouching or reclining feels harmless and reduces how well the restraint system works. The manual names it directly.",
        excerptKey: "chest-10-inches",
        sourceLabel: "New Hampshire Driver's Manual - Section 4 Before Driving, Adjusting Seat",
        sourceUrl: hb(11),
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Real Test Difficulty",
    difficulty: "medium",
    description:
      "Thirty-five questions at the level the DMV's own 40-question exam sits at, drawing on every section of the manual and on the statutes behind it.",
    questions: [
      {
        id: "nh_s3_01",
        topic: "licensing",
        question:
          "What happens on the New Hampshire knowledge test once you have answered nine questions wrong?",
        choices: [
          "You are warned and may continue",
          "The test ends automatically",
          "The remaining questions are scored double",
          "Nothing - you may miss up to twelve",
        ],
        correctIndex: 1,
        explanation:
          "It stops. The manual says that if more than 8 questions are answered incorrectly the test will automatically end, which makes 8 wrong the most you can afford on a 40-question exam.",
        context:
          "That matches the DMV's published pass mark of 80 percent: 32 right out of 40 is exactly 80 percent, and a ninth wrong answer puts you below it whatever you do with the rest. The exam runs on a touch screen with four choices per question, and there is a 40-minute limit; exceeding the time ends the test as well.",
        trap:
          "Learners repeat 30 out of 40 from memory. The DMV's own page says 80 percent, and 30 of 40 is 75.",
        excerptKey: "test-8-wrong",
        sourceLabel: "New Hampshire Driver's Manual - Section 1 Required Driver's License Tests",
        sourceUrl: hb(2),
      },
      {
        id: "nh_s3_02",
        topic: "rules",
        question:
          "Under RSA 265:20, when must an overtaking vehicle be back in its own lane after passing?",
        choices: [
          "Before coming within 200 feet of any approaching vehicle",
          "Before coming within 100 feet of any approaching vehicle",
          "As soon as the passed vehicle is out of the blind spot",
          "There is no fixed distance, only a duty of care",
        ],
        correctIndex: 0,
        explanation:
          "Two hundred feet. Where a pass uses the lane meant for oncoming traffic, the statute requires the overtaking vehicle to be back in an authorized lane before it closes to within 200 feet of any approaching vehicle.",
        context:
          "The manual's version is a visual cue rather than a distance: keep passing until you can see the whole front of the passed vehicle in your rear-view mirror, then signal and steer smoothly back in. RSA 265:21 adds where you may not cross the center line at all, including within 100 feet of an intersection or a railroad grade crossing.",
        trap:
          "Two hundred feet closes in under two seconds when both cars are doing 55. The decision has to be made long before the gap looks tight.",
        excerptKey: "rsa-pass-return-200",
        sourceLabel: "New Hampshire RSA 265:20 - Limitations on Overtaking on the Left",
        sourceUrl: rsa("265:20"),
      },
      {
        id: "nh_s3_03",
        topic: "sharing",
        question:
          "How far behind a large truck does its rear blind spot extend, according to the manual?",
        choices: ["About 30 feet", "About 75 feet", "Up to 200 feet", "About 500 feet"],
        correctIndex: 2,
        explanation:
          "Up to 200 feet. That is far enough that a car following at what feels like a normal distance is invisible to the driver in front of it.",
        context:
          "The manual's No-Zone covers the sides, rear and front of a large vehicle. Its side rule is the practical one: if you cannot see the truck driver's face in the mirror, the truck driver cannot see you. Its front rule is a number - a loaded truck at 55 mph needs at least 335 feet to stop, more than one and a half times what a car needs - which is why cutting in front of one is the dangerous move.",
        trap:
          "Tucking in behind a truck to draft or to see less rain puts you exactly where the driver cannot find you, and where you cannot see what is ahead.",
        excerptKey: "rear-no-zone-200",
        sourceLabel: "New Hampshire Driver's Manual - Section 11 Sharing the Road, The No-Zone",
        sourceUrl: hb(39),
      },
      {
        id: "nh_s3_04",
        topic: "impairment",
        question:
          "A first conviction for driving under the influence in New Hampshire carries what, according to the manual?",
        choices: [
          "A warning and a license restriction",
          "A $250 fine and three demerit points",
          "A mandatory 30-day jail term",
          "A fine of not less than $500 and a possible loss of privileges of 9 months to 2 years",
        ],
        correctIndex: 3,
        explanation:
          "A first offense is a Class B misdemeanor with a fine of not less than $500, a possible loss of driving privileges of 9 months to 2 years, and a required impaired driver education program before privileges are restored.",
        context:
          "Second and subsequent convictions bring higher fines, longer suspensions and stronger penalties. Separately, anyone who drives in New Hampshire is treated as having consented to blood, breath or urine testing if arrested for an alcohol or drug offense, and refusing that testing can cost you your privileges on its own.",
        trap:
          "The education program is not optional and not a substitute for the suspension. It is a condition of getting the license back afterwards.",
        excerptKey: "dui-first-offense",
        sourceLabel: "New Hampshire Driver's Manual - Section 3 Impaired Driving and the Law",
        sourceUrl: hb(9),
      },
      {
        id: "nh_s3_05",
        topic: "signs",
        question:
          "A three-digit interstate route number beginning with an odd digit tells you what?",
        choices: [
          "It is a route into a city",
          "It goes through or around a city",
          "It runs east and west",
          "It is a state route rather than an interstate",
        ],
        correctIndex: 0,
        explanation:
          "An odd first digit on a three-digit route means a spur into a city. An even first digit means a route that goes through or around one.",
        context:
          "The two-digit system is a separate rule: even numbers run west and east, odd numbers run north and south. The manual gives both because the shape and color of a route marker tell you the class of road - interstate, US route, state route, or local - and the number tells you where it goes.",
        trap:
          "The odd-even rule for two-digit routes is about direction, and the one for three-digit routes is about cities. Same digits, different question.",
        excerptKey: "route-numbers",
        sourceLabel: "New Hampshire Driver's Manual - Section 6 Rules of the Road, Route Number Signs",
        sourceUrl: hb(22),
      },
      {
        id: "nh_s3_06",
        topic: "safety",
        question:
          "How much does stopping distance grow when a vehicle's speed doubles, according to the manual?",
        choices: ["It doubles", "It roughly triples", "It increases about four times", "It stays about the same"],
        correctIndex: 2,
        explanation:
          "About four times. The manual gives the relationship directly: the stopping distance of a vehicle increases 4 times when the speed of the vehicle is doubled.",
        context:
          "That is why the manual splits total stopping distance into perception time, reaction time and braking distance. Perception and reaction each run three quarters of a second to a second for an alert driver, and both scale with speed. Braking distance is the part that grows with the square, which is what produces the fourfold figure.",
        trap:
          "Intuition says double the speed, double the distance. It is the braking component that betrays that guess, and it is the largest part at highway speed.",
        excerptKey: "stopping-doubles",
        sourceLabel: "New Hampshire Driver's Manual - Section 5 Basic Driving, Stopping Distance",
        sourceUrl: hb(16),
      },
      {
        id: "nh_s3_07",
        topic: "licensing",
        question:
          "A 17-year-old with a New Hampshire Youth Operator License is convicted of a first motor vehicle offense. What is the suspension range?",
        choices: [
          "No suspension for a first offense",
          "10 to 20 days",
          "A minimum of 20 days and not more than 40",
          "A flat 90 days",
        ],
        correctIndex: 2,
        explanation:
          "Twenty to 40 days for a first conviction. The ladder then runs 45 to 90 days for a second and 90 to 180 for a third or subsequent, with a driver attitude program required for reinstatement after the third.",
        context:
          "The authority is RSA 263:14, and it reaches anyone under 20 who holds an original license, after a hearing. A youth operator convicted of driving under the influence, reckless operation or speeding more than 30 mph over the limit faces additional penalties. Two or more speeding tickets in the first two years of the license also trigger a three-year SR-22 insurance requirement.",
        trap:
          "Paying the fine does not end it. New Hampshire learners consistently report that the ticket still produces a separate hearing, and that the suspension arrives from the DMV rather than the court.",
        excerptKey: "youth-suspension-ladder",
        sourceLabel: "New Hampshire Driver's Manual - Section 2 Youth Operator \"Under 20\" Law",
        sourceUrl: hb(6),
      },
      {
        id: "nh_s3_08",
        topic: "parking",
        question: "How close to a stop sign may you park in New Hampshire?",
        choices: ["10 feet", "15 feet", "20 feet", "No closer than 30 feet"],
        correctIndex: 3,
        explanation:
          "Thirty feet. The manual lists it among the places you may not park even where nothing is marked, and RSA 265:69, II(d) gives 30 feet on the approach to any flashing signal, stop sign or traffic control signal.",
        context:
          "The distance exists so the sign stays visible and so a driver stopped at it can see across the intersection. Note that the manual's list also names a yield sign while the statute's does not, so on a yield sign the two differ; on a stop sign, a flashing signal or a traffic light they agree on 30 feet.",
        trap:
          "Thirty feet is about two car lengths back from the sign, further than instinct suggests. Parking level with the sign is already inside the zone.",
        excerptKey: "rsa-park-stop-sign",
        sourceLabel: "New Hampshire RSA 265:69 - Stopping, Standing or Parking Prohibited in Specified Places",
        sourceUrl: rsa("265:69"),
      },
      {
        id: "nh_s3_09",
        topic: "rules",
        question:
          "Where does New Hampshire law prohibit crossing the center line to pass, whatever the markings show?",
        choices: [
          "On any road with a posted limit above 45 mph",
          "Only where a solid line is painted",
          "Within 50 feet of a driveway",
          "Within 100 feet of an intersection or railroad grade crossing",
        ],
        correctIndex: 3,
        explanation:
          "RSA 265:21 bars driving to the left of center within 100 feet of, or across, any intersection or railroad grade crossing unless otherwise indicated. The same section bars it approaching the crest of a grade or a curve where the view is obstructed.",
        context:
          "A third clause covers bridges: no left of center within 100 feet of a bridge, viaduct or tunnel when the view is obstructed. The manual gives the plain-language version - do not pass when an oncoming vehicle is approaching, when a curve or hill blocks your view, at intersections, or before a highway-railroad crossing or bridge - and none of it depends on the paint.",
        trap:
          "An unmarked rural road is not permission. The prohibitions here run on geometry, not on whether anyone painted a line.",
        excerptKey: "rsa-no-left-of-center",
        sourceLabel: "New Hampshire RSA 265:21 - Further Limitations on Driving to Left of Center of Roadway",
        sourceUrl: rsa("265:21"),
      },
      {
        id: "nh_s3_10",
        topic: "signals",
        question:
          "A police officer is directing traffic and waves you through a red light. What do you do?",
        choices: [
          "Wait for the light to turn green",
          "Follow the officer's direction",
          "Stop and ask for confirmation",
          "Follow the light, since a signal outranks a person",
        ],
        correctIndex: 1,
        explanation:
          "You follow the officer. The manual puts it among its basic rules of the road: a police officer directing traffic overrules any traffic light or sign and must be obeyed.",
        context:
          "RSA 265:9, I says the same thing from the other side - obey any traffic control device unless otherwise directed by a traffic or police officer. Traffic control devices include signals, signs, pavement markings and the directions of law enforcement, highway personnel and school crossing guards, and a flagger in a work zone carries the same authority.",
        trap:
          "Sitting at a red while an officer waves is the safe-feeling choice and blocks the intersection they are trying to clear.",
        excerptKey: "police-overrules",
        sourceLabel: "New Hampshire Driver's Manual - Section 6 New Hampshire Rules of the Road",
        sourceUrl: hb(20),
      },
      {
        id: "nh_s3_11",
        topic: "emergencies",
        question:
          "You must report a crash to the New Hampshire DMV within 15 days when what is true?",
        choices: [
          "Any two vehicles were involved",
          "The other driver was uninsured",
          "Combined property damage exceeded $500",
          "There was a fatality, injuries, or combined property damage over $1,000",
        ],
        correctIndex: 3,
        explanation:
          "Death, injury, or combined property damage totalling more than $1,000 triggers the report, and the deadline is 15 days.",
        context:
          "If a police officer investigated the crash, that report satisfies the requirement and you need not file separately, though you may. The form is the Operator Accident Report, DSMV 400, available at any DMV office, on the DMV website, or at a police department. If you cannot complete it because of injury, a passenger or the vehicle's owner may file it. The manual suggests filing when in doubt about the damage total.",
        trap:
          "The threshold is combined damage across all vehicles, not just yours. Two lightly damaged cars can pass $1,000 easily.",
        excerptKey: "crash-report-15-days",
        sourceLabel: "New Hampshire Driver's Manual - Section 9 Reporting an accident",
        sourceUrl: hb(32),
      },
      {
        id: "nh_s3_12",
        topic: "speed",
        question:
          "You are driving through a work zone where crews are on the roadway and no new limit is posted. What speed does RSA 265:60 set?",
        choices: [
          "The normal posted limit still applies",
          "At least 10 mph below the usual posted limit",
          "25 mph regardless of the usual limit",
          "Half the usual posted limit",
        ],
        correctIndex: 1,
        explanation:
          "At least 10 mph below the usual posted limit, wherever workers or contractors are on the roadway or close enough to be endangered by passing traffic. The reduced speed is displayed on signs.",
        context:
          "The manual's advice is broader and does not wait for a sign: always reduce speed in a work zone even if no changed limit is posted, because narrower lanes and rough pavement create the hazard by themselves. Fines may be doubled in a work zone, and that will be clearly marked before you enter. Do not resume normal speed until the End Road Work sign is in sight.",
        trap:
          "The doubled fine applies whether or not workers are present. So does the instruction to slow down at night through a work zone.",
        excerptKey: "rsa-work-zone-speed",
        sourceLabel: "New Hampshire RSA 265:60 - Basic Rule and Maximum Limits",
        sourceUrl: rsa("265:60"),
      },
      {
        id: "nh_s3_13",
        topic: "rightOfWay",
        question:
          "You are on an entrance ramp joining a highway. There is no yield sign. Who yields?",
        choices: [
          "Highway traffic, because you are merging",
          "Nobody - the acceleration lane resolves it",
          "Whoever is going slower",
          "You do, whether or not a sign is posted",
        ],
        correctIndex: 3,
        explanation:
          "You do. RSA 265:30, III makes the driver using an entrance ramp yield to vehicles already on the highway regardless of whether a yield sign is there.",
        context:
          "The manual lists drivers already on a limited access or interstate highway among the people you yield to when you are on an entrance or acceleration ramp. Its practical advice is to use the acceleration lane to reach the speed of the traffic you are joining, find a gap, and merge with the flow rather than forcing your way into it.",
        trap:
          "Merging at 40 into 65 mph traffic is what turns a yield into a conflict. The acceleration lane exists so you do not have to.",
        excerptKey: "rsa-ramp-yield",
        sourceLabel: "New Hampshire RSA 265:30 - Vehicle Entering Stop or Yield Intersection or Highway",
        sourceUrl: rsa("265:30"),
      },
      {
        id: "nh_s3_14",
        topic: "safety",
        question:
          "What does New Hampshire's Jessica's Law require of drivers?",
        choices: [
          "That headlights are on whenever wipers are running",
          "That all snow and ice are cleared from the vehicle before driving",
          "That winter tires are fitted between November and April",
          "That a snow brush is carried in the vehicle",
        ],
        correctIndex: 1,
        explanation:
          "Since 2002 New Hampshire drivers have been legally required to clear snow and ice off the vehicle before getting on the road. The law is named for Jessica Smith, who was killed when ice came off a tractor-trailer and struck her car.",
        context:
          "The manual gives two reasons: snow and ice on the vehicle block the driver's view, and they come loose at speed and endanger everyone behind. The enforcement route is RSA 265:79-b, negligent driving, which carries $250 to $500 for a first offense and more after that.",
        trap:
          "Clearing a windshield-sized porthole is the version that gets ticketed. The duty covers the roof and hood, which is where the airborne slab comes from.",
        excerptKey: "jessicas-law",
        sourceLabel: "New Hampshire Driver's Manual - Section 4 Before Driving, Snow and Ice Removal",
        sourceUrl: hb(13),
        commonlyMissed: true,
      },
      {
        id: "nh_s3_15",
        topic: "sharing",
        question:
          "A truck ahead of you signals right and swings wide to the left before turning. What should you do?",
        choices: [
          "Move up on the right, into the space it has left",
          "Pass on the left while it is turning",
          "Stay back and do not turn until the truck has completed its turn",
          "Sound the horn to signal that it is in the wrong lane",
        ],
        correctIndex: 2,
        explanation:
          "Wait. A truck or bus often needs to swing left to get a right turn round the curb, and the gap it opens on the right is the space its trailer is about to sweep through.",
        context:
          "The manual is blunt about the outcome: a driver who slips between the truck and the curb gets squeezed between them and can suffer a serious crash. It tells you to watch large-vehicle turn signals closely, give them room to maneuver, and not turn until the truck or bus has finished.",
        trap:
          "The wide swing looks like the truck is changing lanes or making a mistake. The right-hand gap is the trap, not an invitation.",
        excerptKey: "truck-squeeze",
        sourceLabel: "New Hampshire Driver's Manual - Section 11 Sharing the Road, Turning",
        sourceUrl: hb(39),
      },
      {
        id: "nh_s3_16",
        topic: "licensing",
        question:
          "What vision standard must you meet to pass the New Hampshire vision test?",
        choices: [
          "20/20 in at least one eye",
          "20/50 in both eyes",
          "20/60 with corrective lenses",
          "20/40 in both eyes, or 20/30 with sight in one eye only",
        ],
        correctIndex: 3,
        explanation:
          "Twenty-forty with both eyes. An applicant with sight in only one eye must reach 20/30, a stricter standard, because there is no second eye to compensate.",
        context:
          "If you need glasses or contacts to pass, they must be worn while driving and a B restriction for corrective lenses goes on the license. Failing the vision test does not end the process: you get an eye examination with a doctor's recommendation of visual capability, and testing continues once that is in hand. A vision test is also all that is required of a new resident holding a current out-of-state license.",
        trap:
          "The one-eye standard is tighter, not looser. People expect the requirement to relax and it goes the other way.",
        excerptKey: "vision-2040",
        sourceLabel: "New Hampshire Driver's Manual - Section 1 Required Driver's License Tests",
        sourceUrl: hb(2),
      },
      {
        id: "nh_s3_17",
        topic: "rules",
        question:
          "Under RSA 265:43, where may you not make a U-turn?",
        choices: [
          "Anywhere outside a business district",
          "On any road with a center line",
          "On a curve or near the crest of a hill where you cannot be seen for 500 feet",
          "Within 100 feet of any intersection",
        ],
        correctIndex: 2,
        explanation:
          "The statute frames it as a sight-distance rule: no turning to proceed in the opposite direction on a curve, or on the approach to or near the crest of a grade, where an approaching driver from either direction cannot see you within 500 feet.",
        context:
          "The manual is less specific and more cautionary - U-turns are extremely dangerous and are not legal everywhere, so check first for signs prohibiting them. Where a U-turn is not practical it offers alternatives: on a divided highway drive to the next exit rather than stopping or backing up, and on a narrow two-lane road use a three-point turn.",
        trap:
          "Five hundred feet is roughly a tenth of a mile. A blind crest that looks like it has plenty of room usually does not.",
        excerptKey: "rsa-uturn-500",
        sourceLabel: "New Hampshire RSA 265:43 - Turning on Curve or Crest of Grade Prohibited",
        sourceUrl: rsa("265:43"),
      },
      {
        id: "nh_s3_18",
        topic: "impairment",
        question:
          "What does New Hampshire's implied consent rule mean for a driver arrested for an alcohol or drug offense?",
        choices: [
          "They are treated as having already consented to blood, breath or urine testing",
          "They may refuse testing without consequence",
          "Testing requires a court order first",
          "Only a breath test may be demanded",
        ],
        correctIndex: 0,
        explanation:
          "Driving in New Hampshire is itself the consent. Anyone who operates a motor vehicle here is considered to have agreed to having blood, breath, urine or a combination tested if arrested for an alcohol or drug offense.",
        context:
          "Refusing that testing can cost you your driving privileges on its own, separately from whatever happens on the underlying charge. RSA 265-A:4 extends the same consent to operating an off-highway recreational vehicle and to operating a boat on the state's public waters.",
        trap:
          "Refusing is not a way to avoid evidence without cost. The refusal is its own route to losing the license.",
        excerptKey: "implied-consent",
        sourceLabel: "New Hampshire Driver's Manual - Section 2 Loss of Driving Privileges",
        sourceUrl: hb(6),
      },
      {
        id: "nh_s3_19",
        topic: "signs",
        question:
          "You see a pink sign on the highway. What is it about?",
        choices: [
          "Incident management",
          "A school bus route",
          "Recreational areas",
          "An electronic toll lane",
        ],
        correctIndex: 0,
        explanation:
          "Pink is the incident management color - crashes, emergencies and the temporary routing around them. It is one of the newer additions to the manual's color key.",
        context:
          "The full key runs red for prohibition, green for direction or guidance, blue for driver services, yellow for general warning, white for a law or rule of the road, orange for road repair work warning, brown for tourist and recreation guidance, pink for incident management, and purple for E-ZPass. Purple is the one specific to toll lanes.",
        trap:
          "Pink and orange both show up around disruption. Orange means planned road work; pink means an unplanned incident.",
        excerptKey: "sign-colors",
        sourceLabel: "New Hampshire Driver's Manual - Section 6 Rules of the Road, Traffic Signs",
        sourceUrl: hb(21),
      },
      {
        id: "nh_s3_20",
        topic: "parking",
        question:
          "What is the crosshatched striped area beside an accessible parking space for?",
        choices: [
          "The space a person with a walking disability needs to open the door and use a lift or ramp",
          "A loading zone for any vehicle",
          "Motorcycle parking",
          "Snow storage in winter",
        ],
        correctIndex: 0,
        explanation:
          "It is an access aisle. The striped area is the room a person needs to open their door fully and get in and out, and a van with a lift or ramp can need the whole eight feet of it.",
        context:
          "Parking in or overlapping into an access aisle is its own offense with a fine for the first and an increased fine after that, quite apart from the minimum $500 for occupying the accessible space itself. New Hampshire law also lets a person with a walking disability, or their driver, submit a photo of an illegally parked vehicle with a sworn statement to the local police department.",
        trap:
          "The stripes look like empty pavement rather than a marked space. Overlapping into them by a foot is enough to strand someone.",
        excerptKey: "access-aisle",
        sourceLabel: "New Hampshire Driver's Manual - Section 7 Spaces and Access Aisles Reserved For Persons with Walking Disabilities",
        sourceUrl: hb(28),
      },
      {
        id: "nh_s3_21",
        topic: "signals",
        question:
          "What does a steady red arrow mean for the movement it points to?",
        choices: [
          "Stop, then turn when clear",
          "You may not enter the intersection for that movement",
          "Yield to oncoming traffic, then turn",
          "The arrow will turn green shortly, so hold your position in the intersection",
        ],
        correctIndex: 1,
        explanation:
          "A red arrow removes the permission entirely. You may not enter the intersection for that movement unless some other indication shown at the same time allows it.",
        context:
          "That is what separates it from a solid red, where New Hampshire's default allows a right turn after a full stop unless a sign prohibits it. The manual adds a pedestrian rule to the same paragraph: unless a pedestrian signal directs otherwise, a person facing a steady red arrow must not step into the roadway.",
        trap:
          "Right on red after stopping is the reflex, and a red arrow is the case where it does not apply.",
        excerptKey: "red-arrow",
        sourceLabel: "New Hampshire Driver's Manual - Section 6 Rules of the Road, Traffic Signals",
        sourceUrl: hb(20),
      },
      {
        id: "nh_s3_22",
        topic: "speed",
        question:
          "What does RSA 265:60, I require of your speed even where you are under the posted limit?",
        choices: [
          "Nothing - the posted limit is the only test",
          "That it never falls below the minimum",
          "That it is reasonable and prudent for the actual and potential hazards then existing",
          "That it matches the flow of traffic exactly",
        ],
        correctIndex: 2,
        explanation:
          "The basic rule sits above the numbers. Whatever is posted, no one may drive faster than is reasonable and prudent under the conditions, having regard to the actual and potential hazards then existing.",
        context:
          "The statute then makes the relationship explicit: a speed within the posted limit is prima facie lawful only where no hazard requires a lower one, and any speed above the limit is prima facie evidence that it was not reasonable. The manual says the same thing in one line - speed limits are the maximum you may travel under ideal conditions - and lists what changes the answer: road conditions, visibility, heavy traffic, fast-moving traffic and the condition of the vehicle.",
        trap:
          "\"I was doing the limit\" is not a defense in fog, ice or heavy rain. The posted number describes the best case, not every case.",
        excerptKey: "rsa-basic-rule",
        sourceLabel: "New Hampshire RSA 265:60 - Basic Rule and Maximum Limits",
        sourceUrl: rsa("265:60"),
      },
      {
        id: "nh_s3_23",
        topic: "emergencies",
        question:
          "Your accelerator sticks open. What sequence does the manual give?",
        choices: [
          "Turn off the engine, then steer to the shoulder",
          "Brake hard and hold the wheel",
          "Pump the accelerator until it frees",
          "Shift to neutral, brake firmly, then pull off and stop the engine",
        ],
        correctIndex: 3,
        explanation:
          "Neutral first, because it disconnects the engine from the wheels while you keep steering and braking. Then brake firmly, pull off when it is safe, stop, and turn off the engine.",
        context:
          "The manual's first instruction is the easiest to forget: keep your eyes on the road. Turning the key off while moving is the wrong first move because it can lock the steering and always kills the power assistance - the same reason the brake-failure procedure tries the parking brake before shutting the engine down.",
        trap:
          "Killing the ignition feels decisive and takes away the steering you still need. Neutral leaves you in control.",
        excerptKey: "stuck-accelerator",
        sourceLabel: "New Hampshire Driver's Manual - Section 10 Driving Emergencies, Stuck Accelerator",
        sourceUrl: hb(35),
      },
      {
        id: "nh_s3_24",
        topic: "rightOfWay",
        question:
          "A funeral procession with headlights on is following a hearse through an intersection. What does the manual say?",
        choices: [
          "Let the procession pass as a group",
          "Take your turn between vehicles as normal",
          "Follow the procession until it disperses",
          "Sound the horn and proceed if you have a green",
        ],
        correctIndex: 0,
        explanation:
          "The manual lists funeral processions among those you yield to, and says specifically to allow vehicles following a hearse with their headlights on to pass as a group.",
        context:
          "The reasoning is practical rather than ceremonial: splitting a procession leaves drivers who have been following the car in front with no idea where the route goes, and produces sudden stops at the next junction. The same list covers emergency vehicles, drivers already at the intersection, oncoming traffic when you are turning left, the driver on your right at a four-way stop, and pedestrians and cyclists still in the intersection.",
        trap:
          "A green light does not entitle you to cut into the line. Being right about the signal does not undo the mess it creates.",
        excerptKey: "row-funeral",
        sourceLabel: "New Hampshire Driver's Manual - Section 5 Basic Driving, Yielding Right-of-Way",
        sourceUrl: hb(14),
      },
      {
        id: "nh_s3_25",
        topic: "rules",
        question:
          "What does New Hampshire law say about following another vehicle too closely?",
        choices: [
          "It is only an offense if a crash follows",
          "It is discouraged but not unlawful",
          "It carries a mandatory license suspension",
          "It is an offense with a $100 fine",
        ],
        correctIndex: 3,
        explanation:
          "RSA 265:25 makes it unlawful to follow more closely than is reasonable and prudent, given the speeds involved and the traffic and condition of the road, and sets the fine at $100.",
        context:
          "The manual states the offense without the figure and adds the practical response: if someone is tailgating you unsafely, find a safe place to pull over and let them pass rather than trying to teach them anything. The statute also requires trucks and vehicles towing trailers outside a business or residence district to leave enough space for an overtaking vehicle to occupy.",
        trap:
          "Reasonable and prudent is judged against the conditions, not against the four-second guideline. In heavy rain even four seconds can be too close.",
        excerptKey: "rsa-following-fine-100",
        sourceLabel: "New Hampshire RSA 265:25 - Following Too Closely",
        sourceUrl: rsa("265:25"),
      },
      {
        id: "nh_s3_26",
        topic: "safety",
        question:
          "How does the manual want you to check your intended following distance?",
        choices: [
          "Estimate two car lengths for every 10 mph",
          "Watch when the vehicle ahead passes a fixed point and count to one-thousand-four before you reach it",
          "Keep the vehicle ahead's rear bumper at the bottom of your windshield",
          "Match the gap the vehicle behind is leaving you",
        ],
        correctIndex: 1,
        explanation:
          "Pick a sign, pole or other stationary point. Start counting when the rear of the vehicle ahead passes it, and you should not reach that point before you finish counting one-thousand-four.",
        context:
          "The manual tells you to repeat the check at another fixed point after adjusting, and to practice by guessing the gap first and then counting to see how close the guess was. The reason it uses seconds rather than car lengths is that seconds scale with speed automatically and car lengths do not.",
        trap:
          "Car lengths are the version people carry from driver education elsewhere. At 60 mph a two-car-length gap is under half a second.",
        excerptKey: "following-count",
        sourceLabel: "New Hampshire Driver's Manual - Section 8 Driving Safely, Space Management",
        sourceUrl: hb(30),
      },
      {
        id: "nh_s3_27",
        topic: "sharing",
        question:
          "Why does the manual warn against turning left in front of an oncoming motorcycle?",
        choices: [
          "Motorcycles always have right of way",
          "Motorcycles cannot brake as hard as cars",
          "A motorcycle is narrow, easily hidden and hard to judge the speed of",
          "Motorcycles are not required to signal",
        ],
        correctIndex: 2,
        explanation:
          "Most motorcycles are about two feet wide, which makes them hard to pick out in traffic, easy to lose in a blind spot, and difficult to judge the closing speed of. The manual asks you to check oncoming traffic carefully for motorcycles and know the speed before you turn.",
        context:
          "It adds a related warning: most motorcycles do not have self-cancelling turn signals, so a rider approaching with a signal on may not be turning at all. Motorcycles are entitled to the same full lane width as any vehicle, so never try to share a lane with one, and the following distance behind a motorcycle is four seconds like any other.",
        trap:
          "The gap that looks big enough is a judgment about distance made on a narrow object. That is the specific illusion the manual is naming.",
        excerptKey: "motorcycle-left-turn",
        sourceLabel: "New Hampshire Driver's Manual - Section 11 Sharing the Road, Motorcycles",
        sourceUrl: hb(37),
      },
      {
        id: "nh_s3_28",
        topic: "licensing",
        question:
          "Which drivers may not use a phone at all in New Hampshire, hands-free or otherwise?",
        choices: [
          "Drivers under 21",
          "Drivers under 18",
          "Youth Operator License holders of any age",
          "Only drivers in their first six months of licensure",
        ],
        correctIndex: 1,
        explanation:
          "Under 18. RSA 265:79-c, IV bars anyone under 18 from using a cellular or mobile telephone or any other mobile electronic device, hands-free or not, while driving or temporarily stopped in traffic.",
        context:
          "The only exception is reporting an emergency to the enhanced 911 system or a public safety agency. The penalty runs on the same ladder as the general phone offense - $100 for a first offense, $250 for a second, $500 for any further offense within 24 months - with license suspension or revocation under RSA 263:14 on top. Drivers over 18 may use a genuine hands-free device.",
        trap:
          "Being stopped at a light does not lift the ban. The statute names being temporarily stopped in traffic as still covered.",
        excerptKey: "under-18-phone",
        sourceLabel: "New Hampshire Driver's Manual - Section 2 Specific Restrictions for Youth Operators",
        sourceUrl: hb(4),
        commonlyMissed: true,
      },
      {
        id: "nh_s3_29",
        topic: "signs",
        question:
          "What are you being told by a diamond or rectangular orange sign with black symbols?",
        choices: [
          "A hazard specific to winter driving",
          "A construction, maintenance or emergency operation is ahead",
          "The road is closed to through traffic",
          "A detour is mandatory",
        ],
        correctIndex: 1,
        explanation:
          "Orange is the work-zone color. These signs alert drivers to construction, maintenance or emergency operations and to people working on or near the roadway.",
        context:
          "The warnings they carry include workers ahead, reduced speed, detours, slow-moving construction equipment and poor or suddenly changing road surfaces. Traffic in a work zone may also be directed by a flagger with a sign, and drivers must follow those instructions. Barriers such as drums, cones and tubes guide you through and keep you out of the working area.",
        trap:
          "The orange sign is often the only warning before the lane narrows. Slowing when you see the sign, not when you see the cones, is what the manual asks for.",
        excerptKey: "work-zone-signs",
        sourceLabel: "New Hampshire Driver's Manual - Section 6 Rules of the Road, Work Zone Signs",
        sourceUrl: hb(23),
      },
      {
        id: "nh_s3_30",
        topic: "impairment",
        question:
          "At what blood alcohol concentration does the manual say vision is affected, for every driver?",
        choices: ["0.02", "0.05", "0.08", "0.10"],
        correctIndex: 0,
        explanation:
          "0.02 - the same figure as the under-21 legal limit. The manual says a BAC as low as .02% can affect a driver's ability to drive and that vision is impacted at .02 BAC for all drivers.",
        context:
          "Alcohol works on three things the manual names: judgment, vision and reaction time. Vision blurs, focusing slows, double vision appears, and the ability to judge distance, speed and the movement of other vehicles degrades. That is a poor combination for the one task where all three matter at once.",
        trap:
          "0.08 is the arrest threshold, not the point at which impairment starts. The manual puts the first measurable effect four times lower.",
        excerptKey: "alcohol-vision",
        sourceLabel: "New Hampshire Driver's Manual - Section 3 Effects of Alcohol and Other Impairing Drugs",
        sourceUrl: hb(9),
      },
      {
        id: "nh_s3_31",
        topic: "rules",
        question:
          "Where must you stop at a stop sign when there is no crosswalk and no stop line?",
        choices: [
          "At the point nearest the intersecting road where you can see approaching traffic",
          "Level with the sign itself",
          "One car length back from the corner",
          "Anywhere within 20 feet of the intersection",
        ],
        correctIndex: 0,
        explanation:
          "RSA 265:31, II gives the order of preference: the crosswalk on the near side first, a clearly marked stop line if there is no crosswalk, and failing both, the point nearest the intersecting roadway where you can actually see traffic coming before you enter.",
        context:
          "Stopping is not the end of the duty. RSA 265:30, I requires you then to yield to any vehicle already in the intersection or approaching closely enough to be an immediate hazard while you are crossing. The manual says the same in plainer words: look for crossing vehicles and pedestrians in all directions and yield before proceeding.",
        trap:
          "Stopping level with the sign satisfies the sign and not the law. The stop has to be somewhere you can see from.",
        excerptKey: "rsa-stop-sign-where",
        sourceLabel: "New Hampshire RSA 265:31 - Stop Signs; Yield Signs",
        sourceUrl: rsa("265:31"),
      },
      {
        id: "nh_s3_32",
        topic: "rightOfWay",
        question:
          "You are approaching an uncontrolled intersection on a rural New Hampshire road. What does the manual advise?",
        choices: [
          "Maintain speed, since the main road has priority",
          "Sound the horn on the approach",
          "Slow down and be prepared to stop for crossing or oncoming traffic",
          "Assume the other driver will stop, since you have no sign",
        ],
        correctIndex: 2,
        explanation:
          "Slow down and be ready to stop. The manual names uncontrolled rural intersections as particularly dangerous precisely because nothing tells either driver who goes first.",
        context:
          "Underneath is the yield-to-the-right rule of RSA 265:28, but the manual's broader warning applies: no one should assume they automatically have the right of way, and the circumstances at the intersection must always be considered. On rural roads the manual also flags reduced-visibility corners created by woods, crops and steep hills.",
        trap:
          "Being on what feels like the main road confers nothing. Without a sign or signal, the wider, faster road has no legal priority.",
        excerptKey: "uncontrolled-rural",
        sourceLabel: "New Hampshire Driver's Manual - Section 5 Basic Driving, Rural Road Driving",
        sourceUrl: hb(18),
      },
      {
        id: "nh_s3_33",
        topic: "speed",
        question:
          "A rural residence district in New Hampshire has what default speed limit?",
        choices: ["25 mph", "30 mph", "35 mph", "45 mph"],
        correctIndex: 2,
        explanation:
          "Thirty-five mph. The same figure covers any Class V highway outside the compact part of a city or town.",
        context:
          "RSA 259:93 defines a rural residence district by the buildings rather than by the town line: territory beside a way, outside a business or urban residence district, where the frontage for half a mile or more on any one side is mainly occupied by dwellings, or by dwellings and buildings in use for business. An urban residence district uses the same idea over a shorter run - 300 feet - and carries the 30 mph limit.",
        trap:
          "The word rural suggests a higher limit than the town center. It is 35 against 30, a narrower gap than instinct suggests, and the boundary is set by houses, not by signs.",
        excerptKey: "speed-rural-35",
        sourceLabel: "New Hampshire Driver's Manual - Section 5 Basic Driving, Speed Management",
        sourceUrl: hb(15),
      },
      {
        id: "nh_s3_34",
        topic: "emergencies",
        question:
          "Your car breaks down on a highway shoulder at night with no phone. What does the manual suggest?",
        choices: [
          "Walk to the nearest exit for help",
          "Stand behind the vehicle to flag down traffic",
          "Leave the headlights on high beam and sleep in the car",
          "Raise the hood and tie a white cloth to the door handle or antenna, and stay with the vehicle",
        ],
        correctIndex: 3,
        explanation:
          "Raise the hood and tie a white cloth - red in a snowstorm - to the driver's door handle or the antenna, so passing drivers can see you need help, and stay with the vehicle if you can.",
        context:
          "The steps before that are the flashers, getting the vehicle off the road and away from traffic, and where you have them, placing emergency flares or reflectors 200 feet in front of and behind the vehicle. The one exception to staying with the car is a hazardous location, where the manual tells you to get everyone out and well away from traffic.",
        trap:
          "Walking down a highway shoulder at night is more dangerous than waiting. The manual's default is to stay put and make the car visible.",
        excerptKey: "breakdown-white-cloth",
        sourceLabel: "New Hampshire Driver's Manual - Section 10 Driving Emergencies, Vehicle Breakdown",
        sourceUrl: hb(35),
      },
      {
        id: "nh_s3_35",
        topic: "signals",
        question:
          "What is required of you at a yield sign in New Hampshire?",
        choices: [
          "A complete stop in every case",
          "Slow to a speed reasonable for the conditions and yield to traffic in or close to the intersection",
          "Nothing, if the intersecting road looks clear",
          "Yield only to vehicles on your left",
        ],
        correctIndex: 1,
        explanation:
          "Slow down to a reasonable speed and give way to any vehicle in the intersection or approaching closely enough to be an immediate hazard. RSA 265:31, III adds that you must stop if stopping is required for safety.",
        context:
          "The statute puts a sharp edge on it. If a driver who passed a yield sign without yielding then collides with a vehicle in the intersection, the collision is prima facie evidence of failure to yield. The manual describes the sign itself - a red and white downward-pointing triangle with red letters - and says the driver must slow and let traffic with the right of way cross first.",
        trap:
          "A yield is not a stop, and it is not a suggestion either. When there is anything to yield to, it becomes a stop.",
        excerptKey: "rsa-yield-collision",
        sourceLabel: "New Hampshire RSA 265:30 - Vehicle Entering Stop or Yield Intersection or Highway",
        sourceUrl: rsa("265:30"),
      },
    ],
  },
];
