import type { DrivingTestSet } from "../types";

// Every fact below was checked against the Arkansas Driver License Study Guide,
// Volume 1 - Edition 10, July 2026, published by the Arkansas State Police and
// served from media.ark.org.
//
// Arkansas is unusual among the states this site covers in how narrow the
// testable material is, and that shaped the bank. The Arkansas State Police
// write and administer the knowledge exam, and their own official practice test
// says the study guide "is the exclusive fundamental source of information
// needed to pass the driver license written test". So the guide is the source
// here, front to back - including the parts other states leave to the statute
// book. The guide reprints the operative text of 27-16-606 (residency),
// 27-51-216 (county road speed limits) and 27-51-301 (left lane) itself, and
// those are quoted from the guide's own reproduction.
//
// What the guide does NOT give, and this bank therefore does not ask for:
//
// 1. Any general statutory speed limit. The one number the guide prints is the
//    40 mph default on an unposted county road, from 27-51-216. There is no
//    urban-district figure, no rural default and no interstate maximum
//    anywhere in the book, so every speed question here is built on a posted
//    limit or on the conditions rules the guide does state.
// 2. The school-zone speed limit. The guide illustrates the School Zone warning
//    sign and says nothing about a number.
// 3. Parking distances beyond its own Do Not Park list - which, unusually, is
//    complete: 20 feet from a crosswalk, 30 feet from a signal or stop or yield
//    sign, 15 feet from a hydrant, 50 feet from a railroad crossing.
//
// One genuine internal conflict is flagged where it arises. Page 11 sets the
// fine for failing to move over for a stopped law enforcement vehicle at up to
// $1,000; page 15 states the same rule at up to $500. No question asks for that
// number, and the research note records the conflict.
//
// Questions are original. Explanations, context notes and trap notes are
// written from scratch; the deep link is there so the learner reads the
// Arkansas State Police's own authoritative wording.
const HB = "https://media.ark.org/dps/Arkansas-DL-Manual-English-1.pdf";
/** Printed page number to a PDF page anchor - the book's page 1 is PDF page 13. */
const hb = (page: number) => `${HB}#page=${page + 12}`;

export const arkansasSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Arkansas Basics",
    difficulty: "starter",
    description:
      "The rules you meet on your first drive in Arkansas: what the shapes and colors mean, who goes first, and the handful of numbers the Arkansas State Police expect you to know cold before they hand you an instruction permit.",
    questions: [
      {
        id: "ar_s1_01",
        topic: "signs",
        question:
          "A red eight-sided sign faces you at an intersection in Arkansas. What must you do?",
        choices: [
          "Slow down and roll through if nothing is coming",
          "Stop only if another vehicle is already waiting",
          "Yield to the wider road and keep moving",
          "Come to a complete stop and wait until crossing traffic and pedestrians have cleared",
        ],
        correctIndex: 3,
        explanation:
          "The octagon is reserved for STOP and nothing else. Arkansas asks for a complete stop, and then for you to wait until both vehicles and people on foot are out of the intersection before you move.",
        context:
          "The study guide teaches signs by shape and color first, because the shape stays readable in glare, fog or a language you do not read. Eight sides means stop, a downward triangle means yield, a yellow diamond warns of something ahead, and a white square or rectangle carries a rule you must obey.",
        trap: "An empty cross street changes nothing. A rolling stop is not a stop, and it is one of the two things examiners fail people for on the skills test.",
        excerptKey: "stop-sign-rule",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 2, Stop Signs",
        sourceUrl: hb(25),
      },
      {
        id: "ar_s1_02",
        topic: "signals",
        question:
          "You are stopped at a steady red light in Arkansas and want to turn right. What does the study guide require?",
        choices: [
          "Turn without stopping if the way is clear",
          "Wait for a green arrow before turning",
          "Turn only where a sign expressly allows it",
          "Come to a complete stop, check for traffic and pedestrians, then turn unless a sign forbids it",
        ],
        correctIndex: 3,
        explanation:
          "Right on red is the Arkansas default, not a special permission. Two conditions ride with it: the stop has to be a real one, and a sign prohibiting the turn overrides the default.",
        context:
          "The guide gives the right-on-red rule its own heading and then repeats it in the Stay Alert chapter, which tells you how much weight it carries. Having stopped, you still owe the crosswalk everything - the guide tells you to look for pedestrians in or about the crosswalk, and never to stop your vehicle inside one.",
        trap: "\"Clear enough to go\" is not the test. If you never actually stopped, the turn is unlawful on an empty street at three in the morning.",
        excerptKey: "right-on-red",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 2, Right on Red Rule",
        sourceUrl: hb(25),
        commonlyMissed: true,
      },
      {
        id: "ar_s1_03",
        topic: "rightOfWay",
        question:
          "Two cars reach an intersection with no stop sign and no traffic signal at the same moment. Who has the right of way?",
        choices: [
          "The driver on the right",
          "The driver on the left",
          "Whoever is going straight rather than turning",
          "Whoever signals first",
        ],
        correctIndex: 0,
        explanation:
          "With nothing controlling the intersection, Arkansas hands it to the vehicle on your right. You yield to the driver approaching from that side.",
        context:
          "The guide splits right of way into two short rules that people mix up. At an uncontrolled intersection you yield to the vehicle on your right. At an intersection with stop signs on every corner it is order of arrival that decides, not position.",
        trap: "Going straight does not outrank turning here. The rule is about which side the other car is on, nothing else.",
        excerptKey: "uncontrolled-intersection",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 3, Right of Way at Stop Signs",
        sourceUrl: hb(39),
      },
      {
        id: "ar_s1_04",
        topic: "safety",
        question: "What following-distance rule does the Arkansas study guide teach?",
        choices: [
          "One car length for every 10 mph",
          "Three seconds",
          "A fixed 100 feet",
          "The two-second rule, stretched to four seconds when you need more room",
        ],
        correctIndex: 3,
        explanation:
          "Arkansas teaches two seconds as the baseline and tells you to move to four when conditions call for more space. You count from the moment the vehicle ahead passes a fixed object until you reach it.",
        context:
          "The guide names rear-end crashes as very common and blames following too closely. The counting words it gives you are one-thousand-one, one-thousand-two. Slippery roads, towing, poor visibility, following a motorcycle or a truck that cannot see you are all listed as reasons to open the gap further.",
        trap: "Three seconds is the number a lot of neighboring states print. Arkansas starts at two.",
        excerptKey: "two-second-rule",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 5, Following Distance",
        sourceUrl: hb(59),
        commonlyMissed: true,
      },
      {
        id: "ar_s1_05",
        topic: "licensing",
        question:
          "How old must you be to apply for an Arkansas instruction permit?",
        choices: ["14", "15", "16", "18"],
        correctIndex: 0,
        explanation:
          "Fourteen is the age. You pass the knowledge exam and a vision test, and the permit is then issued for two years from the date you passed.",
        context:
          "Arkansas has run a graduated system since July 2001, and it starts younger than most states. The instruction permit at 14 leads to a Learner's License between 14 and 16, an Intermediate License between 16 and 18, and an unrestricted Class D at 18.",
        trap: "Sixteen is the age at which the Intermediate License becomes available, not the age at which testing starts.",
        excerptKey: "permit-age-and-term",
        sourceLabel: "Arkansas Driver License Study Guide - Instruction Permit",
        sourceUrl: hb(3),
      },
      {
        id: "ar_s1_06",
        topic: "signals",
        question: "A traffic signal is showing a flashing red light. What does it mean?",
        choices: [
          "Slow down and proceed with caution",
          "The signal has failed, so treat it as a green",
          "Treat it exactly as you would a stop sign",
          "Stop and wait for it to turn green",
        ],
        correctIndex: 2,
        explanation:
          "A flashing red is a stop sign in light form. You stop completely, then go when it is safe. It never turns green.",
        context:
          "Arkansas pairs the two flashing colors so you learn them together. Flashing red means stop and then proceed when safe; flashing yellow means slow down and proceed with caution. The difference between them is whether you are required to stop at all.",
        trap: "Waiting for green at a flashing red leaves you sitting there. The signal is doing what it was set to do.",
        excerptKey: "flashing-red",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 2, Flashing Lights",
        sourceUrl: hb(24),
      },
      {
        id: "ar_s1_07",
        topic: "impairment",
        question:
          "At what alcohol concentration will an adult driver in Arkansas be arrested for driving while intoxicated?",
        choices: ["0.10%", "0.05%", "0.02%", "0.08% or more"],
        correctIndex: 3,
        explanation:
          "Arkansas sets adult DWI at 0.08% or more, measured in the breath or the blood. Below 21 the figure is far lower.",
        context:
          "The guide gives three numbers and they do different jobs. Adults are arrested at 0.08%. A driver involved in a crash or a serious traffic offense can be charged between 0.04% and 0.08%. Anyone under 21 can be arrested for Underage Driving Under the Influence at 0.02%.",
        trap: "0.10% is a historic figure from other decades and other states. Arkansas is at 0.08%.",
        excerptKey: "dwi-008",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 8, Alcohol and the Law",
        sourceUrl: hb(74),
      },
      {
        id: "ar_s1_08",
        topic: "sharing",
        question:
          "A school bus ahead of you stops and switches on its flashing red lights. You are in the opposing lane on an undivided road. What must you do?",
        choices: [
          "Make a complete stop until the lights are turned off",
          "Slow to 20 mph and pass carefully",
          "Keep going, because opposing traffic is not affected",
          "Stop only if you can see children on the road",
        ],
        correctIndex: 0,
        explanation:
          "Arkansas is blunt about this. It does not matter which lane you are in, whether you are behind the bus, opposite it, or at an intersection. You stop, and you stay stopped until the red lights go off.",
        context:
          "There is exactly one escape, and it is narrow: you are not required to stop when the bus is on the far side of a median twenty feet or more wide. Below twenty feet, every lane stops. Passing a stopped bus with its red lights on is a misdemeanor carrying a fine of at least $250, and causing a death that way is a felony.",
        trap: "\"The other side of the road\" is not an exception. Only a median of at least twenty feet is.",
        excerptKey: "bus-any-position",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 1, School Bus Law and Rules",
        sourceUrl: hb(12),
        commonlyMissed: true,
      },
      {
        id: "ar_s1_09",
        topic: "signs",
        question:
          "What does a yellow diamond-shaped sign with black symbols tell an Arkansas driver?",
        choices: [
          "A rule you must obey, with a penalty attached",
          "Road work is under way ahead",
          "Directions to a service or facility",
          "Something ahead calls for caution, and you may need to slow or stop",
        ],
        correctIndex: 3,
        explanation:
          "Yellow diamonds are warnings. They tell you a hazard or an unusual situation is coming and that you should be ready to slow down, and to stop if you have to.",
        context:
          "The guide sorts roadway signs into two families. Warning signs are yellow with black lettering and mostly diamond-shaped. Regulation signs sit on a white square or rectangle with black or red letters, and those carry the rules on direction, lane use, turning and parking.",
        trap: "Orange, not yellow, is the work-zone color. A yellow diamond warns; it does not by itself mean people are working on the road.",
        excerptKey: "warning-signs",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 2, Warning Signs",
        sourceUrl: hb(27),
      },
      {
        id: "ar_s1_10",
        topic: "rules",
        question:
          "How far ahead of a turn or lane change does the Arkansas guide tell you to signal?",
        choices: ["50 feet", "100 feet", "200 feet", "Three seconds, whatever the distance"],
        correctIndex: 1,
        explanation:
          "One hundred feet, and the guide gives the same figure twice - once for lane changes and once for turns, merging and pulling into a parking space.",
        context:
          "Signaling in Arkansas is about timing as well as distance. If your turn is beyond an intersection, start the signal only after you have passed through it, or the driver waiting there will read you as turning at the intersection. And once the maneuver is done, switch it off; the guide calls a false turn signal unsafe.",
        trap: "Signaling as you begin to turn is too late for the driver behind you, who is the person the rule exists to protect.",
        excerptKey: "signal-100-feet",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 5, Signaling to Change Directions",
        sourceUrl: hb(53),
      },
      {
        id: "ar_s1_11",
        topic: "parking",
        question: "How close to a fire hydrant may you park in Arkansas?",
        choices: [
          "No closer than 10 feet",
          "No closer than 15 feet",
          "No closer than 20 feet",
          "No closer than 30 feet",
        ],
        correctIndex: 1,
        explanation:
          "Fifteen feet. It is one of the numbers on the guide's Do Not Park list, and that list is the whole of what Arkansas asks you to memorize about parking distances.",
        context:
          "The full set is worth learning as a block: 20 feet from a crosswalk at an intersection, 30 feet from a traffic signal or stop or yield sign, 30 feet from a pedestrian safety zone, 15 feet from a hydrant, 50 feet from a railroad crossing, and no more than 18 inches from the curb.",
        trap: "Ten feet is the hydrant figure in several other states' handbooks. Arkansas says fifteen.",
        excerptKey: "no-parking-distances",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 3, Do Not Park",
        sourceUrl: hb(42),
        commonlyMissed: true,
      },
      {
        id: "ar_s1_12",
        topic: "safety",
        question:
          "Arkansas law requires you to turn your headlights on in one situation that catches drivers out. Which is it?",
        choices: [
          "Whenever you are on an interstate highway",
          "Whenever you are driving in a work zone",
          "Whenever you are towing a trailer",
          "Whenever your windshield wipers are needed",
        ],
        correctIndex: 3,
        explanation:
          "Wipers on means headlights on. Arkansas ties the two together by law, so the rain that makes you reach for the wiper stalk is the same rain that makes your lights compulsory.",
        context:
          "The guide gives three headlight triggers. Half an hour after sunset until half an hour before sunrise. Any time you cannot see a person or object clearly at 500 feet. And any time the wipers are needed. It also warns that parking lights are for parked cars, and that driving on them alone is illegal in Arkansas.",
        trap: "Daytime rain feels bright enough to skip the lights. The rule is about being seen, not about seeing.",
        excerptKey: "headlights-with-wipers",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 5, External Vehicle Lights",
        sourceUrl: hb(51),
        commonlyMissed: true,
      },
      {
        id: "ar_s1_13",
        topic: "rules",
        question:
          "A solid double yellow line runs down the center of the road. What does it mean?",
        choices: [
          "Passing is prohibited for traffic in either direction",
          "Passing is allowed from the right-hand lane only",
          "The lane may be used by traffic in both directions",
          "Passing is allowed when no oncoming traffic is visible",
        ],
        correctIndex: 0,
        explanation:
          "Double solid yellow separates opposing traffic and closes passing to both sides. Neither direction may cross it to overtake.",
        context:
          "Arkansas builds the whole marking system on two colors. Yellow separates traffic going opposite ways; white separates traffic going the same way. A broken yellow line means you may cross to pass when nothing is coming; a solid line paired with a broken one lets you pass from the broken side. And you may cross a solid yellow line to turn into a driveway when the way is clear.",
        trap: "\"Nothing is coming\" is the rule for a broken yellow line, not a double solid one. The driveway turn is the only crossing the guide allows here.",
        excerptKey: "yellow-double-solid",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 3, Yellow Lane Markings",
        sourceUrl: hb(31),
      },
      {
        id: "ar_s1_14",
        topic: "emergencies",
        question:
          "Your vehicle starts to skid on a wet Arkansas road. What does the guide tell you to do first?",
        choices: [
          "Brake hard and hold the wheel straight",
          "Shift into neutral and coast",
          "Stay off the brake",
          "Steer in the opposite direction to the skid",
        ],
        correctIndex: 2,
        explanation:
          "Stay off the brake. The guide is direct about it: your brakes will not work until the vehicle slows down, and braking mid-skid can make the slide worse.",
        context:
          "The sequence is stay off the brake, steer where you want the vehicle to go, then correct back the other way as it straightens - and keep correcting left and right until you have it. If you do not turn the wheel back, the car swings the other way and starts a fresh skid. Almost every skid, the guide says, comes from driving too fast for the conditions.",
        trap: "The instinct is to stamp on the brake. That is the one thing the guide rules out first.",
        excerptKey: "skid-stay-off-brake",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 9, Skids",
        sourceUrl: hb(79),
      },
      {
        id: "ar_s1_15",
        topic: "licensing",
        question:
          "Who must be with you in the car while you drive on an Arkansas instruction permit?",
        choices: [
          "Any licensed driver aged 18 or older",
          "A parent or legal guardian",
          "A licensed driver aged 21 or older, in the seat beside you",
          "A certified driving instructor",
        ],
        correctIndex: 2,
        explanation:
          "A licensed driver who is at least 21, and the guide is specific that they occupy the seat beside the driver. Not the back seat, and not 18.",
        context:
          "The same 21-and-over supervisor requirement carries through the Learner's License, and through the restricted period of an Intermediate License. Everyone in the vehicle must be belted while a permit holder is driving, which is a stricter rule than the general seat belt law.",
        trap: "Eighteen is the age at which someone can hold an unrestricted Arkansas license. It is not the age at which they can supervise you.",
        excerptKey: "permit-supervisor",
        sourceLabel: "Arkansas Driver License Study Guide - Instruction Permit",
        sourceUrl: hb(3),
      },
      {
        id: "ar_s1_16",
        topic: "signs",
        question:
          "You see a reflective orange triangle with a red border on the back of a vehicle ahead. What is it telling you?",
        choices: [
          "The vehicle is carrying hazardous material",
          "The vehicle is part of a road maintenance crew",
          "The vehicle is being towed",
          "The vehicle travels slower than the normal speed of traffic",
        ],
        correctIndex: 3,
        explanation:
          "It is the slow-moving vehicle emblem. It warns that the machine in front of you cannot keep up with traffic, which is why you meet it on tractors and farm equipment.",
        context:
          "The guide puts a figure on it elsewhere: farm tractors, animal-drawn vehicles and roadway maintenance vehicles usually travel at 25 mph or less. On a rural Arkansas highway that is a closing speed of 30 or 40 mph, and the triangle is your only warning.",
        trap: "Orange in a work zone means people are working. This orange triangle is about one vehicle's speed.",
        excerptKey: "slow-moving-vehicle",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 2, Slow Moving Vehicle Sign",
        sourceUrl: hb(26),
      },
      {
        id: "ar_s1_17",
        topic: "rightOfWay",
        question:
          "You are turning left at a green light. An oncoming car is coming straight through. Who goes first?",
        choices: [
          "The oncoming car, because you must yield when turning left",
          "You, because you arrived at the intersection first",
          "Whoever is closer to the center of the intersection",
          "You, because the green light protects your turn",
        ],
        correctIndex: 0,
        explanation:
          "A plain green is permission to proceed, not a protected turn. The driver turning left yields to oncoming traffic going straight.",
        context:
          "Only a green arrow protects a left turn - that is the signal the guide describes as making opposing traffic stop. A flashing yellow arrow permits the turn but keeps the duty to yield on you, because the oncoming driver is looking at a green.",
        trap: "Arriving first means nothing at a signalized intersection. The light, and the direction of travel, decide it.",
        excerptKey: "left-turn-yield",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 3, Right of Way, Left Turns",
        sourceUrl: hb(35),
      },
      {
        id: "ar_s1_18",
        topic: "speed",
        question:
          "You are on an Arkansas county road with no speed limit signs posted. What speed applies?",
        choices: ["30 mph", "40 mph", "45 mph", "55 mph"],
        correctIndex: 1,
        explanation:
          "Forty. Each county judge may set limits on the county roads in their county, and where none has been set the statutory default is 40 mph.",
        context:
          "This is one of the very few speed numbers the study guide prints, and it reprints the statute to do it. A county road is one that is not a state highway, not an interstate and not a city street. Exceeding a county road limit by more than 15 mph is a Class C misdemeanor, not just a fine.",
        trap: "Unposted does not mean unlimited, and it does not mean the same as the nearest town's limit.",
        excerptKey: "county-road-default",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 2, 27-51-216 County Roads",
        sourceUrl: hb(26),
        commonlyMissed: true,
      },
      {
        id: "ar_s1_19",
        topic: "safety",
        question:
          "How far ahead does the Arkansas guide tell you to be looking while you drive?",
        choices: [
          "As far as your headlights reach",
          "About five seconds ahead",
          "At least fifteen seconds ahead",
          "To the end of the block, no further",
        ],
        correctIndex: 2,
        explanation:
          "Fifteen seconds. In town that works out at roughly a city block; on a highway or interstate it is about a quarter of a mile.",
        context:
          "The guide gives you a way to check it. Pick a fixed object as far ahead as you can clearly see, count one-one-thousand, two-one-thousand as you approach, and the count when you reach it is how far ahead you were looking. Looking that far out is what stops the last-second braking that causes rear-end crashes.",
        trap: "Watching the bumper in front of you feels attentive and is the opposite. Inattention is what the guide names as the leading cause of crashes.",
        excerptKey: "look-ahead-15-seconds",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 4, Looking ahead",
        sourceUrl: hb(48),
      },
      {
        id: "ar_s1_20",
        topic: "rules",
        question:
          "You have missed your exit on an Arkansas highway. What does the guide tell you to do?",
        choices: [
          "Back up along the shoulder to reach it",
          "Stop and wait for a gap, then reverse in the travel lane",
          "Use the shoulder to drive back to the exit",
          "Keep going and turn around at a safe place",
        ],
        correctIndex: 3,
        explanation:
          "Keep going. Backing in any travel lane is both illegal and unsafe in Arkansas, and the guide tells you to carry on to a safe turnaround instead.",
        context:
          "The same short list of general driving rules bans stopping in a travel lane for any reason - confusion, a breakdown, dropping someone off - and bans driving on the shoulder of any street or road unless a police officer directs you onto it.",
        trap: "The shoulder looks like a legal escape and is not one. Other drivers pull off without looking, precisely because nobody expects a moving vehicle there.",
        excerptKey: "never-back-in-lane",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 3, Unmarked Lanes",
        sourceUrl: hb(32),
      },
      {
        id: "ar_s1_21",
        topic: "impairment",
        question:
          "How fast does the human body get rid of alcohol, according to the Arkansas guide?",
        choices: [
          "About one drink per hour",
          "About two drinks per hour",
          "It depends on body weight and cannot be generalized",
          "About one drink every two hours",
        ],
        correctIndex: 0,
        explanation:
          "One drink an hour, and nothing speeds it up. Coffee, fresh air, exercise and a cold shower are all named in the guide and all ruled out.",
        context:
          "A single drink, as Arkansas counts it, is 1.5 ounces of 80-proof liquor, a 6-ounce glass of wine, or a 12-ounce beer. The guide warns that specialty drinks can hold several of those at once, and that food only slows how fast alcohol enters the blood - it does not stop you getting drunk.",
        trap: "Feeling sober is not being sober. The first ability alcohol takes is judgment, which is the very thing you would use to make the call.",
        excerptKey: "alcohol-one-per-hour",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 8, Body Metabolism",
        sourceUrl: hb(74),
      },
      {
        id: "ar_s1_22",
        topic: "parking",
        question:
          "When you parallel park in Arkansas, how far from the curb may your vehicle sit?",
        choices: [
          "No more than 6 inches",
          "No more than 12 inches",
          "No more than 18 inches",
          "No more than 2 feet",
        ],
        correctIndex: 2,
        explanation:
          "Eighteen inches or less. The guide states it as a parking tip and then repeats it on the Do Not Park list, where sitting more than 18 inches out is itself a parking offense.",
        context:
          "The other parking habits Arkansas wants are mechanical: set the parking brake every time, leave an automatic in park or a manual in gear, check traffic before you open the door, and get out on the curb side whenever you can.",
        trap: "Close enough is not a standard. The figure is written down, and it is a violation on both counts.",
        excerptKey: "parallel-18-inches",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 3, Parking Tips",
        sourceUrl: hb(41),
      },
      {
        id: "ar_s1_23",
        topic: "sharing",
        question:
          "An emergency vehicle is approaching with its siren and flashing lights on, and you are in the middle of an intersection. What should you do?",
        choices: [
          "Stop immediately where you are",
          "Drive through the intersection first, then pull over to the right",
          "Turn right at once to clear the junction",
          "Reverse out of the intersection",
        ],
        correctIndex: 1,
        explanation:
          "Clear the intersection, then pull over. Stopping inside it blocks the very space the emergency vehicle may need to use.",
        context:
          "The Arkansas move over law covers police cars, fire trucks and ambulances using a siren or air horn together with a red or blue flashing light. The instruction is to pull to the right edge of the road, or as near to it as you can get, and the guide adds that you should not hesitate whichever direction the sirens are coming from.",
        trap: "\"Stop immediately\" is the right instinct in the wrong place. Inside an intersection you are an obstacle, not a courtesy.",
        excerptKey: "move-over-intersection",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 1, Move Over Law",
        sourceUrl: hb(11),
      },
      {
        id: "ar_s1_24",
        topic: "signals",
        question:
          "A steady yellow light appears as you approach an intersection. What does the Arkansas guide tell you?",
        choices: [
          "Speed up to clear the intersection before it turns red",
          "Treat it as a caution and continue at the same speed",
          "Stop, without exception",
          "The signal is changing to red, and you must stop if it is safe to do so",
        ],
        correctIndex: 3,
        explanation:
          "Yellow means the signal is going from green to red, and the guide asks you to stop if stopping is safe. Whether you can stop safely is the judgment it leaves you.",
        context:
          "The guide adds a line people skip: if you are already stopped at the intersection or at the stop line, a yellow does not let you go. It is not a second chance to move; it is the tail end of the green you already missed.",
        trap: "Yellow is not an invitation to accelerate. It is the last of the green, not the first of the next one.",
        excerptKey: "signal-yellow",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 2, Lighted Traffic Signals",
        sourceUrl: hb(23),
      },
      {
        id: "ar_s1_25",
        topic: "rules",
        question:
          "On an Arkansas road with three or more lanes running in your direction, which lane should you normally use?",
        choices: [
          "The center lane, to stay clear of both edges",
          "Whichever lane is moving fastest",
          "The right lane, moving out only to pass",
          "The left lane, so exiting traffic can use the right",
        ],
        correctIndex: 2,
        explanation:
          "Stay right and use the other lanes to pass. Arkansas makes one allowance: where a lot of traffic is merging, move to the center lane.",
        context:
          "This joins up with the state's left-lane law. Arkansas Code 27-51-301, reprinted in the guide, says a vehicle shall not be driven in the left lane of a multilane highway except to overtake and pass, when the other lanes are closed for construction, when the other lanes are in unsafe repair, or when preparing to exit on the left.",
        trap: "Cruising in the left lane at the speed limit is still a violation in Arkansas. The lane is defined by purpose, not by pace.",
        excerptKey: "three-lanes-right",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 3, Unmarked Lanes",
        sourceUrl: hb(32),
      },
      {
        id: "ar_s1_26",
        topic: "emergencies",
        question:
          "You are in a crash in Arkansas. At what point must you notify the police immediately?",
        choices: [
          "When anyone is injured or killed, or property damage exceeds $1000",
          "Only when someone has been killed",
          "Whenever any two vehicles are involved",
          "Only when a vehicle has to be towed",
        ],
        correctIndex: 0,
        explanation:
          "Injury, death, or damage over $1000 all trigger an immediate call to the police. Below that, the duty to stop and exchange details still applies.",
        context:
          "There is a second, separate duty that uses a different number. You must report the crash to the Office of Driver Services at the Department of Finance and Administration if there is injury, death, or more than $3000 of damage to one person's property, and you have thirty days to file it.",
        trap: "The two figures are easy to swap. $1000 is when you call the police; $3000 is when you file the written report.",
        excerptKey: "crash-notify-police",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 9, Traffic Crashes",
        sourceUrl: hb(80),
        commonlyMissed: true,
      },
      {
        id: "ar_s1_27",
        topic: "signs",
        question:
          "What shape and colors does an Arkansas yield sign use?",
        choices: [
          "A downward triangle, red and white or yellow and black",
          "A yellow diamond with black lettering",
          "A white rectangle with red lettering",
          "An orange pennant",
        ],
        correctIndex: 0,
        explanation:
          "A triangle, in red and white or in yellow and black, carrying the word YIELD or YIELD RIGHT OF WAY.",
        context:
          "Yielding is not the same as stopping. The guide says you slow down or give way to traffic in the intersection you are crossing or entering, and you stop when stopping is necessary. Failing to yield can cost up to $1000 and a 180-day license suspension.",
        trap: "A yield sign does not require a stop every time, and it does not permit rolling through when a stop is what safety demands.",
        excerptKey: "yield-sign-shape",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 2, Yield Sign",
        sourceUrl: hb(26),
      },
      {
        id: "ar_s1_28",
        topic: "safety",
        question:
          "Arkansas seat belt law is enforced how?",
        choices: [
          "As a secondary offense, so you must be stopped for something else first",
          "As a primary offense, so an officer may stop you for the belt alone",
          "Only for drivers under 18",
          "Only on state highways and interstates",
        ],
        correctIndex: 1,
        explanation:
          "Primary. Since June 30, 2009 an Arkansas officer may make the stop on the belt violation by itself, for the driver or the front-seat passenger.",
        context:
          "The fine is small - not more than $25 plus court costs - but the reach is wide. Children under 15 must be in appropriate restraints while the vehicle is moving, and a child under six who weighs under sixty pounds must be in a child passenger safety seat secured to the vehicle.",
        trap: "Several neighboring states enforce belts only as a secondary offense. Arkansas does not.",
        excerptKey: "belt-primary-offence",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 1, Arkansas Seat Belt Law",
        sourceUrl: hb(9),
      },
      {
        id: "ar_s1_29",
        topic: "rightOfWay",
        question:
          "You are entering a traffic circle or roundabout in Arkansas. Who has the right of way?",
        choices: [
          "Whoever signals first",
          "Vehicles entering from the right",
          "The larger vehicle",
          "Drivers already in the circle",
        ],
        correctIndex: 3,
        explanation:
          "The traffic already going round has it. You wait at the entry until there is a gap, then join.",
        context:
          "A roundabout is a circular intersection built around a central island, and Arkansas is adding them. The rule that makes them work is the one about yielding on entry - it is what keeps the circulating traffic moving instead of locking up.",
        trap: "The yield-to-the-right rule from uncontrolled intersections does not transfer here. In a circle, position beats direction.",
        excerptKey: "traffic-circle-yield",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 3, Right of Way",
        sourceUrl: hb(35),
      },
      {
        id: "ar_s1_30",
        topic: "licensing",
        question:
          "You have just moved to Arkansas and become a resident. How long do you have to get an Arkansas driver's license?",
        choices: [
          "60 days",
          "30 calendar days",
          "6 months",
          "Until your out-of-state license expires",
        ],
        correctIndex: 1,
        explanation:
          "Thirty calendar days from becoming a resident. The guide reprints the statute, 27-16-606, to say so.",
        context:
          "There is a second clock for people who never become residents. Any nonresident who has been physically present in Arkansas for six months must obtain an Arkansas license to keep driving here. Military members and out-of-state students are the named exceptions.",
        trap: "Six months is the nonresident figure. If you have actually moved here, the number is thirty days.",
        excerptKey: "lic-new-resident",
        sourceLabel: "Arkansas Driver License Study Guide - The Driver's License, Proof of Residency",
        sourceUrl: hb(2),
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Core Rules of the Road",
    difficulty: "easy",
    description:
      "Lane markings, signals, right of way and the everyday rules the Arkansas State Police draw most of their knowledge-exam questions from. Nothing exotic - just the material the study guide spends the most pages on.",
    questions: [
      {
        id: "ar_s2_01",
        topic: "signals",
        question:
          "A flashing yellow arrow appears in your left-turn lane. What may you do?",
        choices: [
          "Turn left with priority over oncoming traffic",
          "Turn left after yielding to oncoming traffic and pedestrians",
          "Wait, because the turn is not yet permitted",
          "Turn left only if no vehicle is in sight in either direction",
        ],
        correctIndex: 1,
        explanation:
          "A flashing yellow arrow permits the turn but gives you no priority. You yield to oncoming traffic and to people crossing, then go when the gap is real.",
        context:
          "Arkansas uses four lighted arrows and they form a ladder. Red arrow means stop. Steady yellow arrow means the signal is about to go red, so stop if you can. Flashing yellow arrow means turn after yielding. Green arrow is the only protected one, and the guide says opposing traffic must stop for it.",
        trap: "The word yellow makes people wait. The flashing version is permission, and holding up the lane behind you is its own hazard.",
        excerptKey: "arrow-flashing-yellow",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 2, Lighted Arrows",
        sourceUrl: hb(24),
      },
      {
        id: "ar_s2_02",
        topic: "rules",
        question:
          "In Arkansas, may you use a center left-turn lane to build up speed as you merge into traffic?",
        choices: [
          "Yes, that is what the lane is for",
          "Yes, but only for a short distance",
          "Only when turning left out of a private driveway",
          "No - it may be used as part of a left turn, but never as an acceleration lane",
        ],
        correctIndex: 3,
        explanation:
          "Arkansas lets you use the shared center lane while making a left turn out of a street or driveway, and then draws a hard line: it is not an acceleration lane.",
        context:
          "The shared center lane is marked with left-turn arrows for each direction, alternating, and is available to traffic going either way. Because both directions can be in it at once, treating it as a running lane puts you head-on with somebody doing the same thing from the other end.",
        trap: "This one shows up in real Arkansas collisions, not just on the test. Sitting in the lane and picking up speed feels helpful and is exactly what the rule bans.",
        excerptKey: "shared-center-lane",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 3, Shared Center Lane",
        sourceUrl: hb(32),
        commonlyMissed: true,
      },
      {
        id: "ar_s2_03",
        topic: "rightOfWay",
        question:
          "Three cars are stopped at a four-way stop. Who goes first?",
        choices: [
          "The driver who arrived first, after making a complete stop",
          "The driver on the far right of the group",
          "The driver going straight",
          "The driver of the largest vehicle",
        ],
        correctIndex: 0,
        explanation:
          "Order of arrival decides it. At 3 WAY, 4 WAY and ALL WAY stops the first driver to reach the intersection goes first, once that driver has actually stopped.",
        context:
          "Arkansas states this twice, once as a rule and once as a caption to a diagram, which tells you it is examined. It is a different rule from the uncontrolled intersection, where you yield to the vehicle on your right, and from the signalized intersection, where the light decides.",
        trap: "The yield-to-the-right rule is the wrong tool here. It belongs to intersections with no signs at all.",
        excerptKey: "all-way-signs",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 3, Right of Way at Stop Signs",
        sourceUrl: hb(40),
      },
      {
        id: "ar_s2_04",
        topic: "signs",
        question:
          "A round yellow sign with a black X and two Rs stands beside the road ahead. What is it?",
        choices: [
          "A crossroads warning",
          "A no-passing zone marker",
          "A sign marking an exempt crossing",
          "A railroad advance warning sign",
        ],
        correctIndex: 3,
        explanation:
          "It is the advance warning for a highway-rail crossing. It tells you to slow, look and listen for a train, and to be ready to stop at the tracks.",
        context:
          "The crossing itself is marked by the crossbuck, the white X-shaped sign with black letters, and that one requires you to yield the right of way to the train. Pavement markings carrying an X and the letters RR mean the same as the advance warning sign, and on two-lane roads they come with a no-passing marking.",
        trap: "The advance warning sign is round, not diamond. It is the only common round sign on an Arkansas roadside, which is what makes it recognizable at distance.",
        excerptKey: "rr-advance-warning",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 2, Round Yellow Advance Warning Sign",
        sourceUrl: hb(28),
      },
      {
        id: "ar_s2_05",
        topic: "safety",
        question:
          "How far from an oncoming vehicle must you dim your high beams in Arkansas?",
        choices: ["200 feet", "300 feet", "500 feet", "1000 feet"],
        correctIndex: 2,
        explanation:
          "Five hundred feet. That is the distance at which your high beams stop helping you and start blinding the person coming the other way.",
        context:
          "There is a second distance that people mix up with it. When you are following another vehicle, you drop to low beams once you are closer than 200 feet. High beams otherwise let you see about twice as far as low beams, so the guide wants them on whenever nothing is oncoming.",
        trap: "The two figures do different jobs: 500 feet for a vehicle coming toward you, 200 feet for one you are behind.",
        excerptKey: "high-beam-dim-500",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 5, High and Low Beam Headlights",
        sourceUrl: hb(51),
      },
      {
        id: "ar_s2_06",
        topic: "parking",
        question:
          "How close to a traffic signal, stop sign or yield sign may you park?",
        choices: [
          "No closer than 15 feet",
          "No closer than 20 feet",
          "No closer than 30 feet",
          "No closer than 50 feet",
        ],
        correctIndex: 2,
        explanation:
          "Thirty feet. Parking nearer hides the sign or the light from the drivers who need to read it.",
        context:
          "Arkansas groups its distances in a way that is worth learning as a shape: 15 feet from a hydrant, 20 feet from a crosswalk and from a fire station driveway, 30 feet from a signal or a stop or yield sign and from a pedestrian safety zone, 50 feet from a railroad crossing.",
        trap: "Twenty feet is the crosswalk figure. The sign and signal figure is larger, because a sign has to be visible from further back than a crossing.",
        excerptKey: "no-parking-distances",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 3, Do Not Park",
        sourceUrl: hb(42),
      },
      {
        id: "ar_s2_07",
        topic: "impairment",
        question:
          "An Arkansas officer asks a driver to take a breath test. What happens if the driver refuses?",
        choices: [
          "The driver can lose their license",
          "Nothing, until a warrant is obtained",
          "The driver may choose a blood test instead",
          "A refusal is treated as a 0.08% result",
        ],
        correctIndex: 0,
        explanation:
          "Refusing costs you the license. The guide says you are compelled by law to take the test when an officer instructs you to.",
        context:
          "The choice of test is not yours either. The guide is explicit that the law enforcement officer decides which test - breath, urine or saliva - to request. Blood alcohol concentration itself can be determined from a blood or urine test.",
        trap: "Refusing is not a way of avoiding evidence. It is its own consequence, and it arrives before any court date.",
        excerptKey: "implied-consent",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 8, Alcohol and the Law",
        sourceUrl: hb(74),
        commonlyMissed: true,
      },
      {
        id: "ar_s2_08",
        topic: "sharing",
        question:
          "A tractor-trailer ahead of you swings out to the left before turning right. What is happening?",
        choices: [
          "The driver is changing lanes and has signaled wrongly",
          "The driver is about to make a U-turn",
          "The driver is letting you pass on the right",
          "The driver is making room for the trailer's rear wheels, which cut inside the turn",
        ],
        correctIndex: 3,
        explanation:
          "A turning vehicle's rear wheels follow a tighter path than the front, and the longer the vehicle the bigger the difference. Truck drivers swing wide left to keep the trailer off the corner.",
        context:
          "This is why the guide tells you to watch a truck's turn signals before you try to pass. The gap that opens on the truck's right during that maneuver is not a lane; it is the space the trailer is about to sweep through.",
        trap: "Reading the swing as a lane change and slipping up the inside puts you exactly where the trailer is going.",
        excerptKey: "truck-right-turn",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 6, Turning",
        sourceUrl: hb(64),
      },
      {
        id: "ar_s2_09",
        topic: "speed",
        question:
          "You are driving through an Arkansas work zone and get a speeding ticket. What happens to the fine?",
        choices: [
          "It is the standard fine",
          "It is reduced if no workers were present",
          "It doubles",
          "It is replaced by a mandatory court appearance",
        ],
        correctIndex: 2,
        explanation:
          "Fines double for any moving violation in a work zone, and the guide warns that a doubled fine can reach $5,000 depending on the offense.",
        context:
          "That covers more than speed: reckless driving and distracted driving are named too, and holding your phone to take a call, send a text, look up directions or scroll counts as a moving violation. Mobile work zones - a crew painting stripes or patching potholes - are treated exactly the same as a fixed one.",
        trap: "The doubling is not limited to the moments when a worker is standing beside you. The zone is the zone.",
        excerptKey: "work-zone-fines-double",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 2, Fines Double",
        sourceUrl: hb(19),
        commonlyMissed: true,
      },
      {
        id: "ar_s2_10",
        topic: "rules",
        question:
          "A dashed white line separates your lane from the one beside it. What does it tell you?",
        choices: [
          "Traffic beside you is moving the opposite way",
          "You may not cross under any circumstances",
          "The lane beside you is for turning only",
          "You may cross to change lanes when it is safe",
        ],
        correctIndex: 3,
        explanation:
          "White marks lanes going the same way, and a dashed white line means crossing is allowed once you have checked it is safe.",
        context:
          "Arkansas also uses a solid white line along the edge of the roadway as the fog line, which tells you where the outer edge is. Yellow, by contrast, always means traffic on the far side is coming toward you.",
        trap: "Colors carry the meaning before the pattern does. White never separates opposing traffic in Arkansas.",
        excerptKey: "white-dashed",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 3, White Lane Markings",
        sourceUrl: hb(31),
      },
      {
        id: "ar_s2_11",
        topic: "safety",
        question:
          "You are driving in fog and cannot see more than 200 feet ahead. What is the fastest the Arkansas guide says you should go?",
        choices: ["20 mph", "30 mph", "40 mph", "The posted limit, if traffic is light"],
        correctIndex: 1,
        explanation:
          "Thirty miles an hour. Rain, fog or snow that cuts you to 200 feet of sight distance means 30 mph is the ceiling regardless of the posted limit.",
        context:
          "The guide builds a whole chain from this idea. Your headlights show about 400 feet, which supports roughly 50 mph at night. A wet road calls for a 10 mph reduction, packed snow for half your speed, ice for slowing to a coast. And you can be ticketed for driving too fast for the conditions even at the posted limit.",
        trap: "The posted limit is set for ideal conditions. In fog it is a maximum you are nowhere near entitled to use.",
        excerptKey: "rain-fog-200-feet",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 5, Rain, Fog, or Snow",
        sourceUrl: hb(58),
      },
      {
        id: "ar_s2_12",
        topic: "licensing",
        question:
          "An Arkansas driver holds an Intermediate License. How many unrelated minor passengers may they carry unsupervised?",
        choices: ["One", "None", "Two", "As many as there are seat belts"],
        correctIndex: 0,
        explanation:
          "One. More than that requires a licensed driver aged 21 or over in the front passenger seat.",
        context:
          "The Intermediate License is the 16-to-18 stage, and it comes with a curfew as well. Between 11:00 pm and 4:00 am the holder needs that same 21-year-old alongside, unless the trip is to or from a school activity, a church activity, a job, or an emergency.",
        trap: "\"Unrelated\" is doing the work in that sentence. Siblings are not what the rule is aimed at.",
        excerptKey: "intermediate-passengers",
        sourceLabel: "Arkansas Driver License Study Guide - Intermediate License",
        sourceUrl: hb(4),
      },
      {
        id: "ar_s2_13",
        topic: "emergencies",
        question:
          "Your brakes fail as you are driving. What does the Arkansas guide tell you to try first?",
        choices: [
          "Pull the parking brake hard",
          "Shift straight into the lowest gear",
          "Pump the brake pedal several times",
          "Switch the engine off",
        ],
        correctIndex: 2,
        explanation:
          "Pump the pedal. That will often build enough pressure to stop the car, and it is the least disruptive thing to try.",
        context:
          "The order matters. Pump first; if that fails, apply the parking brake slowly so you do not lock the rear wheels into a skid, and be ready to release it if the car starts to slide; if that fails, shift down and look for a safe place to stop clear of the roadway.",
        trap: "Yanking the parking brake straight away is what locks the rear wheels. The guide says slowly, for exactly that reason.",
        excerptKey: "brake-failure-pump",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 9, Brake Failure",
        sourceUrl: hb(77),
      },
      {
        id: "ar_s2_14",
        topic: "signs",
        question:
          "What does a white square or rectangular sign with black or red lettering carry?",
        choices: [
          "A rule you must follow",
          "A warning about the road ahead",
          "Directions to a service",
          "Information about a work zone",
        ],
        correctIndex: 0,
        explanation:
          "These are regulation signs. They set out the rules on traffic direction, lane usage, turning, parking and other specific instructions.",
        context:
          "Some of them carry a red circle with a red slash across a symbol, and that combination always means the maneuver shown is prohibited - a turn in a particular direction, or a U-turn. The do-not-enter sign uses the same red-circle logic.",
        trap: "Warning signs are yellow diamonds and they advise. White rectangles command, and ignoring one is an offense.",
        excerptKey: "regulation-signs",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 2, Regulation Signs",
        sourceUrl: hb(27),
      },
      {
        id: "ar_s2_15",
        topic: "rightOfWay",
        question:
          "You are pulling out of a shopping center onto the main road and your path crosses a sidewalk. Who has priority?",
        choices: [
          "Pedestrians on the sidewalk",
          "You, once you have signaled",
          "Whoever moves first",
          "Traffic on the main road only",
        ],
        correctIndex: 0,
        explanation:
          "Pedestrians. Arkansas requires drivers crossing a sidewalk to enter or leave a driveway, alley or parking lot to yield to people on foot.",
        context:
          "The same passage says it is illegal to drive on a sidewalk at all, except to cross it. And once you reach the road, a second rule applies: a driver entering from a driveway, alley or roadside yields to the vehicles already on the main road.",
        trap: "The sidewalk feels like part of your driveway. Legally it belongs to the person walking on it.",
        excerptKey: "sidewalk-yield",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 3, Right of Way, Pedestrians",
        sourceUrl: hb(35),
      },
      {
        id: "ar_s2_16",
        topic: "safety",
        question:
          "Where are a vehicle's blind spots, as the Arkansas guide defines them?",
        choices: [
          "Directly in front of the hood",
          "The area behind the rear bumper only",
          "Anywhere beyond 200 feet",
          "The rear corners of the vehicle, which the mirrors do not show",
        ],
        correctIndex: 3,
        explanation:
          "The rear corners. Those are the spots your rearview and side mirrors cannot reach, and where another vehicle can sit unseen.",
        context:
          "That is why the guide insists on the shoulder check. Before a lane change you use the rearview mirror, the side mirrors, and then a quick glance over your shoulder in the direction you are moving - quick, because traffic ahead can stop while you are looking away.",
        trap: "Mirrors alone feel thorough. Motorcycles, bicycles and pedestrians entering from a curb are exactly what they miss.",
        excerptKey: "blind-spot-definition",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 4, Changing Lanes",
        sourceUrl: hb(49),
      },
      {
        id: "ar_s2_17",
        topic: "sharing",
        question:
          "You are following a motorcycle in Arkansas. How much following distance does the guide ask for?",
        choices: [
          "The usual two seconds",
          "Three seconds",
          "At least four to six seconds",
          "Ten seconds",
        ],
        correctIndex: 2,
        explanation:
          "Four to six seconds at least. The slightest contact can put a rider down, so the guide wants a bigger cushion than for a car.",
        context:
          "There is a counterintuitive reason the gap matters. In dry conditions a motorcycle can stop more quickly than your car can - so a rider braking hard in front of you closes the gap faster than your instincts expect.",
        trap: "A motorcycle looks small and easy to stop behind. The stopping-distance advantage runs the other way.",
        excerptKey: "motorcycle-four-to-six",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 7, Following a Motorcycle",
        sourceUrl: hb(70),
        commonlyMissed: true,
      },
      {
        id: "ar_s2_18",
        topic: "rules",
        question:
          "You approach a stop sign with a white line painted across the road in front of it. Where must you stop?",
        choices: [
          "Level with the sign",
          "Before your vehicle reaches the line",
          "Anywhere you can see cross traffic",
          "With your front wheels on the line",
        ],
        correctIndex: 1,
        explanation:
          "Before the line. The stop line marks the point, and your vehicle must come to a complete stop short of it.",
        context:
          "If the line leaves you unable to see cross traffic, the guide gives you the next move: make the complete stop first, then ease forward until you can see, and proceed when it is safe. Two stops, in that order.",
        trap: "Creeping up to see is fine. Skipping the first stop to do it is not.",
        excerptKey: "stop-line",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 3, Crosswalks and Stop Lines",
        sourceUrl: hb(34),
      },
      {
        id: "ar_s2_19",
        topic: "impairment",
        question:
          "A 19-year-old Arkansas driver is stopped and tests at 0.03%. What can happen?",
        choices: [
          "Nothing - the adult limit is 0.08%",
          "A warning only",
          "A fine, but no effect on the license",
          "Arrest for Underage Driving Under the Influence",
        ],
        correctIndex: 3,
        explanation:
          "Under 21 the trigger is 0.02%, so 0.03% is over it. That is an arrest for Underage Driving Under the Influence.",
        context:
          "The consequences are steep for a young driver. A conviction can mean the license is revoked until the driver turns 21, plus a fine of up to $2000. Buying or possessing alcohol under 21 carries its own suspension of driving privileges.",
        trap: "0.08% is the adult figure and does not apply here. Below 21 the practical answer is that almost any drink is over the line.",
        excerptKey: "underage-002",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 8, Alcohol and the Law",
        sourceUrl: hb(75),
        commonlyMissed: true,
      },
      {
        id: "ar_s2_20",
        topic: "parking",
        question: "In Arkansas, what does a red-painted curb mean?",
        choices: [
          "A fire zone",
          "A loading zone",
          "Accessible parking",
          "Parking is metered",
        ],
        correctIndex: 0,
        explanation:
          "Red means fire zone. The guide gives two curb colors and that is one of them.",
        context:
          "Yellow is the other: a loading zone or some other restriction. Beyond the colors, the guide simply tells you to read the signs, since a restricted parking area may be marked by signs, by curb paint, or by both.",
        trap: "Curb colors are not standardized across states. Arkansas defines exactly two, and guessing at the rest is how tickets happen.",
        excerptKey: "curb-colors",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 3, Restricted Parking Zones",
        sourceUrl: hb(42),
      },
      {
        id: "ar_s2_21",
        topic: "signals",
        question:
          "You are stopped at a controlled intersection on a green light, and a vehicle is still in the intersection clearing from the previous phase. What must you do?",
        choices: [
          "Proceed, since your light is green",
          "Sound the horn to move them along",
          "Let the opposing traffic already in the intersection clear before you go",
          "Move up into the intersection and wait there",
        ],
        correctIndex: 2,
        explanation:
          "Green permits you to proceed when there is no opposing traffic. Where a vehicle is already in the intersection, you let it clear first.",
        context:
          "The guide states this as part of the definition of a green light, not as an exception to it. It reinforces the point in another chapter: even with a green, do not start across until traffic is clear, or you end up caught in the intersection when the light changes, and drivers can be ticketed for blocking one.",
        trap: "A green light is a permission, not a guarantee that the box is empty.",
        excerptKey: "signal-green",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 2, Lighted Traffic Signals",
        sourceUrl: hb(23),
      },
      {
        id: "ar_s2_22",
        topic: "speed",
        question:
          "You enter an Arkansas work zone and see no reduced speed limit posted. What speed applies?",
        choices: [
          "The normally posted speed limit",
          "An automatic 45 mph",
          "10 mph below the normal limit",
          "Whatever speed the traffic ahead is doing",
        ],
        correctIndex: 0,
        explanation:
          "The normal posted limit. Work zones often carry a reduced limit and, when they do, it is clearly posted; where it is not, the usual limit stands.",
        context:
          "The guide still wants you slowing as you enter. Its advice is to begin slowing when you see the work zone signs and stay at the reduced speed until you see a posted limit sign telling you otherwise. Speed enforcement cameras are used in interstate work zones, with the officer stationed at the far end.",
        trap: "There is no invisible statewide work-zone speed. If a lower limit applies, Arkansas puts it on a sign.",
        excerptKey: "work-zone-no-posted",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 2, Work Zone Safety",
        sourceUrl: hb(17),
      },
      {
        id: "ar_s2_23",
        topic: "emergencies",
        question:
          "A front tire blows out at highway speed. What does the Arkansas guide tell you to do?",
        choices: [
          "Brake hard and pull straight off the road",
          "Steer toward the shoulder immediately and coast",
          "Accelerate briefly to regain control",
          "Hold the wheel tightly, keep straight, ease off the gas and brake lightly",
        ],
        correctIndex: 3,
        explanation:
          "Grip the wheel, keep the car going straight, come off the gas and use the brakes lightly. Slow gradually and pull off somewhere safe rather than stopping in the road.",
        context:
          "The theme runs through the whole emergencies chapter: sudden inputs make a bad situation worse. Engine failure, headlight failure and a stuck accelerator all get the same shape of answer - keep control, deal with the fault, get off the roadway.",
        trap: "Hard braking on a blown tire is what turns a puncture into a spin.",
        excerptKey: "blowout",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 9, Blowouts",
        sourceUrl: hb(77),
      },
      {
        id: "ar_s2_24",
        topic: "signs",
        question:
          "You reach a railroad crossing where the gates are down and the red lights are flashing, but no train is visible. What must you do?",
        choices: [
          "Wait - do not cross",
          "Cross if you can see clearly in both directions",
          "Drive around the gate carefully",
          "Wait 30 seconds, then cross",
        ],
        correctIndex: 0,
        explanation:
          "Gates down means a train is present and the road is closed. The guide adds that even if the lights keep flashing and no train appears, you do not cross.",
        context:
          "There is one instruction that surprises people. If the gates start coming down while you are already crossing, the guide says keep going, even if that means breaking the gate. Never park or stop on the tracks, and never try to beat a train.",
        trap: "Going around a lowered gate is the classic fatal mistake. A second train on another track is a common reason nothing is visible yet.",
        excerptKey: "rr-gates-down",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 2, Gates and Lights",
        sourceUrl: hb(29),
        commonlyMissed: true,
      },
      {
        id: "ar_s2_25",
        topic: "safety",
        question:
          "How does the Arkansas guide say you should grip the steering wheel when making a sharp turn at an intersection?",
        choices: [
          "Palm the wheel with one hand",
          "Keep both hands fixed at the bottom of the wheel",
          "Use the hand-over-hand technique",
          "Let the wheel slide back through your fingers",
        ],
        correctIndex: 2,
        explanation:
          "Hand over hand, and the guide specifically tells you not to turn the wheel in the palm of your hand.",
        context:
          "It also asks you to bring the wheel back to the right position for the direction you are traveling once the turn is finished. For normal driving, hands go on opposite sides of the wheel so you can turn without lifting them off.",
        trap: "Palming the wheel is a habit examiners watch for on the skills test, and it costs you control at exactly the moment you need it.",
        excerptKey: "hand-over-hand",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 4, Steering the Vehicle",
        sourceUrl: hb(44),
      },
      {
        id: "ar_s2_26",
        topic: "licensing",
        question:
          "Arkansas charges a $5.00 fee for each written examination. Who collects it?",
        choices: [
          "The Arkansas State Police, before the test",
          "The Department of Finance and Administration, added to the cost of your license",
          "Nobody - the fee was repealed",
          "The county revenue office, on the day of the skills test",
        ],
        correctIndex: 1,
        explanation:
          "The fee exists under Act 1289 of 2015, but it is added to the cost of your driver's license and collected by the Department of Finance and Administration, not paid at the testing site.",
        context:
          "That split confuses people constantly, because two agencies are involved. The Arkansas State Police write and administer the exams; DFA's revenue offices issue the license and take the money. There is no cap on the number of exam fees charged at the time of licensing, and the exam fee is separate from the duplicate fee.",
        trap: "Turning up with $5 in cash for the examiner is looking for the fee in the wrong building.",
        excerptKey: "exam-fee",
        sourceLabel: "Arkansas Driver License Study Guide - Introduction, Act 1289 of 2015",
        sourceUrl: hb(1),
        commonlyMissed: true,
      },
      {
        id: "ar_s2_27",
        topic: "rules",
        question:
          "There are no signs or lane markings to tell you where to turn. Which lane should you turn into?",
        choices: [
          "The lane closest to the direction you are traveling",
          "Always the right-hand lane",
          "Whichever lane has least traffic",
          "The center lane",
        ],
        correctIndex: 0,
        explanation:
          "The lane closest to the direction of travel. It keeps you predictable, which is the whole point of the rule.",
        context:
          "The guide adds a warning for each direction. Turning right, do not swing wide across the opposite lane, or the driver behind will read you as changing lanes and try to pass on your right. Turning left, do not cut the corner, and leave room for oncoming traffic to turn left in front of you.",
        trap: "Wide turns feel safer and are the thing that invites a driver up your inside.",
        excerptKey: "turn-lane-closest",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 3, Turning",
        sourceUrl: hb(33),
      },
      {
        id: "ar_s2_28",
        topic: "sharing",
        question:
          "A cyclist ahead of you moves out toward the middle of the lane as they pass a line of parked cars. What is going on?",
        choices: [
          "The cyclist is riding carelessly",
          "The cyclist is preparing to turn right",
          "The cyclist is avoiding opening car doors, which is correct riding",
          "The cyclist is signaling you to pass",
        ],
        correctIndex: 2,
        explanation:
          "That is proper riding. Cyclists move away from parked cars to stay clear of doors opening into them, and the guide says the rider is operating the bicycle properly to avoid injury.",
        context:
          "Arkansas gives cyclists the same rights and responsibilities as other vehicles, and requires them to ride with traffic on the right-hand side, never facing it. The guide asks you to give a cyclist the whole lane when you can, and to pass with extreme caution when road conditions make that impossible.",
        trap: "A cyclist who is not hugging the edge is usually reading the road, not ignoring you.",
        excerptKey: "bicycle-rights",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 7, Sharing the Road with Bicycles",
        sourceUrl: hb(67),
      },
      {
        id: "ar_s2_29",
        topic: "rightOfWay",
        question:
          "You are overtaking a car that suddenly begins to slow. What does Arkansas require of you?",
        choices: [
          "Complete the pass quickly before it stops",
          "Sound your horn and hold your position",
          "Yield to the vehicle you are passing",
          "Move back behind it and wait for a signal",
        ],
        correctIndex: 2,
        explanation:
          "The overtaking driver yields to the vehicle being passed. It may be about to turn left, or reacting to a hazard you have not seen yet.",
        context:
          "The guide illustrates it with a diagram of a red vehicle yielding to the blue one it is passing. The wider point is that Arkansas does not give any vehicle an absolute right of way - the rules say who must yield, and you are still required to do everything possible to avoid a collision.",
        trap: "Having committed to a pass does not buy you priority. The car ahead is doing something for a reason.",
        excerptKey: "passing-yield",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 3, General Right of Way Rules",
        sourceUrl: hb(40),
      },
      {
        id: "ar_s2_30",
        topic: "safety",
        question:
          "Arkansas prohibits smoking in a vehicle when a child under what age is a passenger?",
        choices: ["Under 6", "Under 10", "Under 14", "Under 18"],
        correctIndex: 2,
        explanation:
          "Under fourteen. The Protection from Secondhand Smoke for Children Act makes it an offense to knowingly smoke tobacco in a vehicle carrying a child that young.",
        context:
          "It sits alongside two other child rules in the same section. A child under six who weighs under sixty pounds must be in a child passenger safety seat properly secured to the vehicle, and all children under fifteen must be in appropriate restraints while the vehicle is moving.",
        trap: "The three ages - six, fourteen, fifteen - belong to three different rules and get shuffled constantly.",
        excerptKey: "smoking-under-14",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 1, Protection from Secondhand Smoke",
        sourceUrl: hb(9),
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Real Test Difficulty",
    difficulty: "medium",
    description:
      "Thirty-five questions pitched where the Arkansas State Police pitch theirs - drawing on the numbers, the penalties and the safe-driving detail scattered right across the study guide, not just the chapters people revise.",
    questions: [
      {
        id: "ar_s3_01",
        topic: "speed",
        question:
          "A passenger car traveling at 55 mph needs roughly how much total stopping distance, according to the Arkansas guide?",
        choices: ["124 feet", "225 feet", "335 feet", "400 feet"],
        correctIndex: 1,
        explanation:
          "About 225 feet at 55 mph. The guide pairs it with 124 feet at 40 mph, so you can feel how sharply the distance climbs with speed.",
        context:
          "It uses the same 225-foot figure again in the truck chapter as a comparison: a fully loaded tractor-trailer at the same 55 mph may need more than 335 feet, which the guide calls the length of a football field.",
        trap: "335 feet is the truck figure and 400 feet is how far your headlights reach at night. Three numbers, three different jobs.",
        excerptKey: "stop-225-feet",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 5, Adjusting the Vehicle Speed",
        sourceUrl: hb(54),
      },
      {
        id: "ar_s3_02",
        topic: "sharing",
        question:
          "How large a gap should you leave in oncoming traffic before passing at 55 mph on a two-lane road?",
        choices: [
          "About four seconds",
          "About six seconds",
          "About ten seconds",
          "About fifteen seconds",
        ],
        correctIndex: 2,
        explanation:
          "Ten seconds. At 55 mph you and the oncoming vehicle cover over 800 feet each in that time, so the guide works it out to more than 1600 feet - about a third of a mile - of clear road.",
        context:
          "The guide also warns how badly people judge this. A vehicle far enough away looks stationary; if you can see it getting closer, it may already be moving too fast for you to pass safely. When you are unsure, its instruction is simply to wait.",
        trap: "Four seconds is the merging gap, not the passing gap. Passing needs more than double it.",
        excerptKey: "pass-ten-second-gap",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 5, Oncoming Vehicles",
        sourceUrl: hb(62),
      },
      {
        id: "ar_s3_03",
        topic: "licensing",
        question:
          "What visual acuity does Arkansas require for an unrestricted driver's license?",
        choices: [
          "20/40 uncorrected",
          "20/20 corrected",
          "20/70 uncorrected",
          "20/100 corrected",
        ],
        correctIndex: 0,
        explanation:
          "A minimum uncorrected acuity of 20/40 gets you an unrestricted license. A minimum corrected acuity of 20/70 gets you a restricted one, meaning you must wear glasses or contacts when driving.",
        context:
          "There is a field-of-vision requirement too: 140 degrees with two functional eyes, 105 degrees with one. A vision test and the ASP-90 referral form are good for a year, and referral forms have to be completed by an Arkansas optometrist - out-of-state and online optometrists are not accepted.",
        trap: "The two numbers sit either side of the same line. 20/40 without correction is unrestricted; 20/70 with correction is restricted.",
        excerptKey: "vision-acuity",
        sourceLabel: "Arkansas Driver License Study Guide - Vision Requirements",
        sourceUrl: hb(5),
      },
      {
        id: "ar_s3_04",
        topic: "rules",
        question:
          "Under Arkansas Code 27-51-301, when may you drive in the left lane of a multilane highway?",
        choices: [
          "Any time you are at or above the speed limit",
          "Only when overtaking, when the other lanes are closed or unsafe, or when preparing to exit on the left",
          "Only between sunrise and sunset",
          "Any time, provided you signal on entry",
        ],
        correctIndex: 1,
        explanation:
          "The statute, which the guide reprints in full, lists four exceptions and nothing else: passing, other lanes closed for construction or repair, other lanes in disrepair or otherwise unsafe, and preparing to exit on the left.",
        context:
          "The guide reinforces it in plain language elsewhere - on multilane roads the leftmost lane is intended for passing slower vehicles, and on a road with three or more lanes you stay right except to pass.",
        trap: "Doing the limit is not one of the four exceptions. Arkansas defines the lane by what you are doing, not how fast.",
        excerptKey: "left-lane-passing-only",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 5, Left Lane for Passing Only",
        sourceUrl: hb(63),
        commonlyMissed: true,
      },
      {
        id: "ar_s3_05",
        topic: "safety",
        question:
          "How does the Arkansas guide describe the size of a tractor-trailer's blind spots?",
        choices: [
          "Up to 20 feet in front and 200 feet behind",
          "Up to 10 feet in front and 100 feet behind",
          "Up to 50 feet on each side only",
          "The same as a passenger car's",
        ],
        correctIndex: 0,
        explanation:
          "A car can disappear up to 20 feet ahead of the cab, along either side, and up to 200 feet behind the truck.",
        context:
          "The rule of thumb the guide gives is easier to use than the numbers: if you cannot see the truck driver in the tractor's side mirror, the driver cannot see you. Sitting in those zones takes away the truck driver's ability to do anything about a hazard.",
        trap: "Two hundred feet behind is far further back than it feels. Following a truck at a normal car distance puts you inside it.",
        excerptKey: "truck-no-zone",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 6, Avoiding the No Zone",
        sourceUrl: hb(65),
      },
      {
        id: "ar_s3_06",
        topic: "impairment",
        question:
          "What penalties does the Arkansas guide list for a first conviction for an alcohol violation?",
        choices: [
          "A fine of $150 to $1000, up to a year in jail, and a 120-day suspension",
          "A fine of $500 and a 30-day suspension",
          "A mandatory ignition interlock only",
          "A fine of up to $2000 and revocation until age 21",
        ],
        correctIndex: 0,
        explanation:
          "A first conviction carries a fine of $150 to $1000 plus court costs, up to one year in jail, and a license suspension of 120 days.",
        context:
          "The guide notes the penalties get much worse for second and subsequent convictions, up to a prison sentence. Alongside the criminal penalty come higher insurance rates, possible ignition interlock devices, and loss of the license.",
        trap: "The $2000 fine and revocation to 21 belong to the underage offence, not the adult first conviction.",
        excerptKey: "dwi-first-conviction",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 8, Alcohol and the Law",
        sourceUrl: hb(74),
      },
      {
        id: "ar_s3_07",
        topic: "signs",
        question:
          "You see a sign reading EXEMPT beneath a crossbuck at a railroad crossing. What does it mean?",
        choices: [
          "Only commercial vehicles need to stop",
          "The crossing has been abandoned or its use discontinued",
          "The crossing is exempt from speed limits",
          "Trains do not run at night",
        ],
        correctIndex: 1,
        explanation:
          "An EXEMPT sign means the crossing has been abandoned or is no longer in use. The guide tells you to follow your local procedure about stopping.",
        context:
          "There are two versions: a yellow sign with black letters below the advance warning sign, and a white one with black letters below the crossbuck. Neither changes the rule that school buses stop at all railroad crossings.",
        trap: "Exempt refers to the crossing, not to you. It is not permission to stop looking.",
        excerptKey: "rr-exempt",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 2, Railroad (Exempt) Signs",
        sourceUrl: hb(29),
      },
      {
        id: "ar_s3_08",
        topic: "parking",
        question:
          "You are parking on a hill on an Arkansas street. Which way should the front wheels point?",
        choices: [
          "Straight ahead, with the parking brake on",
          "Sharply toward traffic",
          "Sharply away from traffic",
          "It makes no difference on a paved road",
        ],
        correctIndex: 2,
        explanation:
          "Away from traffic. If the car rolls, the wheels take it toward the curb or the roadside rather than out into the road.",
        context:
          "The guide backs this with a rule about leaving a vehicle at all: no driver standing on a distinct grade may leave a vehicle unattended without first effectively setting the parking brake and turning the wheels to the curb or side of the highway.",
        trap: "The parking brake alone is not the whole answer. The wheel position is the backup for when the brake fails.",
        excerptKey: "parking-hill-wheels",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 3, Parking Tips",
        sourceUrl: hb(41),
      },
      {
        id: "ar_s3_09",
        topic: "emergencies",
        question:
          "The Arkansas guide names three options for avoiding a collision. What are they?",
        choices: [
          "Brake, signal, sound the horn",
          "Stop, reverse, turn",
          "Slow, swerve, brace",
          "Stop, turn, speed up",
        ],
        correctIndex: 3,
        explanation:
          "Stop, turn, and speed up. The third one surprises people, but accelerating is sometimes the way out when a vehicle is about to hit you from the side or behind.",
        context:
          "The guide points out that in most cases you can turn faster than you can stop, which is why turning is a real option rather than a last resort. Whichever you choose, it wants you ready to keep control afterwards - drivers steer away from one collision and into another.",
        trap: "Braking is not always the answer, and treating it as the only answer is what leaves drivers frozen.",
        excerptKey: "collision-three-options",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 9, Avoiding Collisions",
        sourceUrl: hb(78),
      },
      {
        id: "ar_s3_10",
        topic: "rightOfWay",
        question:
          "A pedestrian carrying a white cane is waiting to cross ahead of you. What does Arkansas require?",
        choices: [
          "Give them absolute right of way, and do not use your horn",
          "Sound your horn to let them know you are there",
          "Yield only if they are already in the crosswalk",
          "Flash your headlights to signal them across",
        ],
        correctIndex: 0,
        explanation:
          "Absolute right of way. Arkansas uses that phrase for pedestrians with a white cane or a guide dog, and it goes further by telling you not to sound the horn, which can confuse or frighten a blind pedestrian.",
        context:
          "It is the one place the guide grants an absolute right of way at all. Everywhere else its position is that traffic laws only decide who must yield, and no vehicle ever has an absolute right of way.",
        trap: "Sounding the horn feels like a courtesy. Here it is specifically ruled out.",
        excerptKey: "horn-blind-pedestrian",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 3, Right of Way, Pedestrians",
        sourceUrl: hb(35),
      },
      {
        id: "ar_s3_11",
        topic: "safety",
        question:
          "When should you use low beams rather than high beams in fog, heavy rain or snow?",
        choices: [
          "High beams, so you can see further",
          "Low beams, because high beams reflect and create glare",
          "Parking lights, to reduce glare entirely",
          "Hazard lights instead of headlights",
        ],
        correctIndex: 1,
        explanation:
          "Low beams. The light from high beams bounces back off the fog or precipitation and makes the road harder to see, not easier.",
        context:
          "The guide notes that some vehicles have fog lights better suited to those conditions. Away from fog it wants high beams used whenever nothing is oncoming, since they show roughly twice the distance.",
        trap: "More light is the instinct and the wrong move. In fog you are lighting up the fog.",
        excerptKey: "low-beams-fog",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 5, High and Low Beam Headlights",
        sourceUrl: hb(51),
      },
      {
        id: "ar_s3_12",
        topic: "licensing",
        question:
          "How long is an Arkansas instruction permit valid?",
        choices: [
          "Six months",
          "One year",
          "Two years from the date the knowledge exam was passed",
          "Until the holder turns 18",
        ],
        correctIndex: 2,
        explanation:
          "Two years, running from the date you passed the knowledge exam rather than the date the permit was printed.",
        context:
          "That is not the same clock as the motorcycle side of the system. For a Class M or Class MD license the knowledge exam is valid for one year, and the motorcycle skills exam can be waived by a Motorcycle Safety Foundation course certificate returned to an Arkansas State Police examiner within 90 days.",
        trap: "Older Arkansas drivers remember a six-month permit. It is two years now, and the date it runs from is the exam, not the issue.",
        excerptKey: "permit-age-and-term",
        sourceLabel: "Arkansas Driver License Study Guide - Instruction Permit",
        sourceUrl: hb(3),
      },
      {
        id: "ar_s3_13",
        topic: "speed",
        question:
          "The road is wet. By how much does the Arkansas guide say you should reduce your speed?",
        choices: ["By 5 mph", "By 10 mph", "By half", "To a slow coast"],
        correctIndex: 1,
        explanation:
          "Ten miles an hour on a wet road. The guide then escalates: cut your speed in half on packed snow, and slow to a coast on ice.",
        context:
          "It also tells you when to start. Decrease speed at the first sign of rain, snow or sleet, because that is when the surface is most treacherous - heat brings oil to the surface of asphalt, and the first few minutes of rain on a hot day are particularly slippery.",
        trap: "The three conditions have three different answers. Halving your speed belongs to snow, not to rain.",
        excerptKey: "slippery-speeds",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 5, Adjust to Slippery Roads",
        sourceUrl: hb(55),
        commonlyMissed: true,
      },
      {
        id: "ar_s3_14",
        topic: "sharing",
        question:
          "According to the Arkansas guide, what proportion of motorcycle crashes happen at intersections?",
        choices: ["About 10%", "About 25%", "Over 40%", "Over 70%"],
        correctIndex: 2,
        explanation:
          "Over 40 percent. And nearly 60 percent of those were caused by another vehicle turning left in front of the rider.",
        context:
          "The guide gives four reasons drivers miss motorcycles: they are looking for cars, a bike's profile is much smaller, distance and speed are harder to judge, and riders move within the lane to deal with road conditions. Its answer is to look twice before turning at an intersection.",
        trap: "The rider is usually not the one who caused it. The crash pattern is a car turning across a motorcycle it never registered.",
        excerptKey: "motorcycle-left-turns",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 7, Sharing the Road with Motorcyclists",
        sourceUrl: hb(69),
      },
      {
        id: "ar_s3_15",
        topic: "rules",
        question:
          "You want to turn left beyond an intersection you are about to pass through. When should you signal?",
        choices: [
          "100 feet before the intersection",
          "Just after you have passed through the intersection",
          "As soon as you can see the turning",
          "Only once you begin the turn",
        ],
        correctIndex: 1,
        explanation:
          "Wait until you are through the intersection. Signal earlier and a driver waiting there reads you as turning at the intersection and pulls out.",
        context:
          "The guide gives the same logic for a driveway: if another vehicle is about to enter the street between you and your turn, wait until you have passed it before signaling. And it wants the signal cancelled after the maneuver - a false turn signal is unsafe.",
        trap: "Early signaling looks like good practice. Here it is a message to the wrong driver.",
        excerptKey: "signal-beyond-intersection",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 5, Signaling to Change Directions",
        sourceUrl: hb(53),
        commonlyMissed: true,
      },
      {
        id: "ar_s3_16",
        topic: "signals",
        question:
          "A steady red arrow is showing for your left-turn lane. What may you do?",
        choices: [
          "Turn after stopping, as with a right on red",
          "Turn if oncoming traffic is clear",
          "Stop - you may not turn in the direction of the arrow",
          "Proceed straight ahead instead",
        ],
        correctIndex: 2,
        explanation:
          "A red arrow means stop, and the guide is direct: you may not turn in the direction the arrow points.",
        context:
          "Arkansas's right-on-red rule is written for a red light, not a red arrow, and the arrow signals in the guide are described separately for exactly that reason. When a turn arrow governs your lane, you make the turn after the green arrow appears and it is safe.",
        trap: "Treating a red arrow like a red ball light is the mistake. The arrow removes the right-on-red option.",
        excerptKey: "arrow-red",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 2, Lighted Arrows",
        sourceUrl: hb(24),
        commonlyMissed: true,
      },
      {
        id: "ar_s3_17",
        topic: "safety",
        question:
          "Your car begins to hydroplane. What does the Arkansas guide tell you to do?",
        choices: [
          "Brake firmly to slow the wheels",
          "Accelerate to push through the water",
          "Turn sharply toward the shoulder",
          "Ease off the gas and keep the steering wheel straight",
        ],
        correctIndex: 3,
        explanation:
          "Come off the gas slowly and hold the wheel straight. Do not try to stop or turn until the tires are gripping the road again.",
        context:
          "The guide puts numbers on when it starts. Most tires hold good traction up to about 35 mph on a wet road; in heavy rain they can lose it entirely at 50 mph. Worn tires bring both figures down, which is why the tread check matters.",
        trap: "Braking or steering during a hydroplane does nothing while the tires are riding on water, and does everything the moment they touch down.",
        excerptKey: "hydroplane-response",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 5, Water Over the Roadway",
        sourceUrl: hb(55),
      },
      {
        id: "ar_s3_18",
        topic: "impairment",
        question:
          "Arkansas allows a DWI charge below 0.08% in one situation. Which?",
        choices: [
          "Any time the driver is under 25",
          "When the driver is involved in a crash or a serious traffic offense, between 0.04% and 0.08%",
          "When the driver refuses a test",
          "Only for commercial drivers",
        ],
        correctIndex: 1,
        explanation:
          "The guide says a driver involved in a traffic crash or a serious traffic offense can be charged with DWI with a blood alcohol content between 0.08% and 0.04%.",
        context:
          "Read the three thresholds as a set: 0.08% for an adult in ordinary circumstances, 0.04% to 0.08% where a crash or serious offence is in the picture, and 0.02% for any driver under 21.",
        trap: "\"Under the limit\" is not a defense in Arkansas once a crash is involved.",
        excerptKey: "dwi-004-crash",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 8, Alcohol and the Law",
        sourceUrl: hb(74),
      },
      {
        id: "ar_s3_19",
        topic: "parking",
        question:
          "How close to a railroad crossing may you park in Arkansas?",
        choices: [
          "No closer than 20 feet",
          "No closer than 30 feet",
          "No closer than 50 feet",
          "There is no distance, provided you are clear of the rails",
        ],
        correctIndex: 2,
        explanation:
          "Fifty feet, and it is the largest distance on the Arkansas Do Not Park list.",
        context:
          "Parking or stopping on the tracks themselves is listed separately, both as a parking prohibition and in the railroad safety tips. The guide's other rail advice is unambiguous: never underestimate the speed and distance of a train, and always expect one.",
        trap: "The 50-foot figure is bigger than most of the list, which is why people default to 20 or 30 and get it wrong.",
        excerptKey: "no-parking-distances",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 3, Do Not Park",
        sourceUrl: hb(42),
      },
      {
        id: "ar_s3_20",
        topic: "emergencies",
        question:
          "Someone is injured in a crash you have stopped at. What does the guide say about giving them a drink?",
        choices: [
          "Give nothing to drink, even water, until medical personnel arrive",
          "Give water only",
          "Give a warm drink to prevent shock",
          "Give a drink only if they ask for one",
        ],
        correctIndex: 0,
        explanation:
          "Nothing at all, water included, until medical personnel are on the scene.",
        context:
          "The rest of the first-aid guidance is just as tightly drawn: check breathing then bleeding, apply direct pressure to a wound, cover the person to prevent shock, and do not move an injured person unless they are trapped in a burning vehicle or in some other immediate danger.",
        trap: "Water feels like the kindest thing to offer, and it is the specific thing the guide rules out.",
        excerptKey: "crash-nothing-to-drink",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 9, Assisting the Injured",
        sourceUrl: hb(81),
      },
      {
        id: "ar_s3_21",
        topic: "signs",
        question:
          "What must you do when you meet a crossbuck sign at a railroad crossing?",
        choices: [
          "Stop, always",
          "Yield the right of way to the train",
          "Sound your horn before crossing",
          "Cross only at under 15 mph",
        ],
        correctIndex: 1,
        explanation:
          "The crossbuck marks the grade crossing and requires you to yield the right of way to the train. It is a yield sign in a distinctive shape, not a stop sign.",
        context:
          "Where there is more than one set of tracks, a small sign below the crossbuck gives the number of tracks, and the guide warns to watch for a second train from either direction. When crossing more than one set, cross only when the train you can see is well down the tracks.",
        trap: "A crossbuck alone does not require a stop for an ordinary vehicle. School buses stop at all crossings, but that is a rule about buses.",
        excerptKey: "crossbuck",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 2, Cross Buck Sign",
        sourceUrl: hb(28),
      },
      {
        id: "ar_s3_22",
        topic: "rightOfWay",
        question:
          "Traffic ahead is heavy and you can see you will not clear the intersection. The light is green. What should you do?",
        choices: [
          "Enter anyway and wait for space",
          "Enter and stop halfway across",
          "Enter and turn right to escape",
          "Wait behind the line until traffic clears",
        ],
        correctIndex: 3,
        explanation:
          "Wait. Arkansas says a driver may not enter an intersection unless they can get through it without having to stop, and drivers can be ticketed for blocking one.",
        context:
          "The guide repeats the point in its safety cushion chapter - even with a green light, do not start across until traffic is clear, or the light changes while you are stranded in the box.",
        trap: "A green light reads as an instruction to move. It is not, when the space on the far side does not exist.",
        excerptKey: "no-blocking-intersection",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 3, General Right of Way Rules",
        sourceUrl: hb(40),
      },
      {
        id: "ar_s3_23",
        topic: "rules",
        question:
          "A flagger in an Arkansas work zone holds up a STOP paddle while the traffic signal ahead of you is green. Which do you obey?",
        choices: [
          "The traffic signal, because it is a legal control device",
          "The flagger, whose instructions overrule other traffic signals and devices",
          "Whichever you reached first",
          "Neither - proceed with caution",
        ],
        correctIndex: 1,
        explanation:
          "The flagger. The guide states plainly that a flagger's instructions overrule any other traffic signal or device.",
        context:
          "Flaggers are legally authorized to direct traffic through work zones. The guide asks you to stop at the designated point or at least a car length back, keep your distance from workers and equipment, and expect one-way working with traffic held in each direction in turn.",
        trap: "A green light does not outrank a person with a paddle. Traffic controls also include law enforcement, highway personnel and school crossing guards.",
        excerptKey: "flagger-authority",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 2, Work Zone Questions and Answers",
        sourceUrl: hb(22),
        commonlyMissed: true,
      },
      {
        id: "ar_s3_24",
        topic: "safety",
        question:
          "How does the Arkansas guide tell you to check whether your tire tread is still safe?",
        choices: [
          "Look for the wear bars between the treads",
          "Measure the tread with a ruler at three points",
          "Check the tire pressure when warm",
          "Place a penny in the tread with Lincoln's head upside down and facing you",
        ],
        correctIndex: 3,
        explanation:
          "The penny test. If you can see the top of Lincoln's head, the tread is down to about 1/16 of an inch and the tire needs replacing.",
        context:
          "The guide also explains what a cold tire means for pressure: not the outside temperature, but a tire that has not been driven on for at least three hours. Driving warms the air inside and raises the reading.",
        trap: "Checking pressure after a drive gives a high reading and a false sense of safety.",
        excerptKey: "penny-test",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 10, Tires",
        sourceUrl: hb(84),
      },
      {
        id: "ar_s3_25",
        topic: "licensing",
        question:
          "Which cell phone use is allowed for an Arkansas driver under 18?",
        choices: [
          "Hands-free calls only",
          "Hands-free calls and voice-to-text",
          "None - hands-free devices are not allowed either",
          "Calls to a parent or guardian",
        ],
        correctIndex: 2,
        explanation:
          "None. Under 18, cell phone use is not allowed and the guide adds that the use of hands-free devices is not allowed either.",
        context:
          "The ladder runs by age. Under 18, nothing. From 18 to 20, a hands-free device is allowed and a hand-held phone only for emergencies. From 21, a cell phone may be used, though the guide says it is never safe to talk and drive. Text messages are not allowed at any age.",
        trap: "Hands-free is the loophole everyone assumes exists for teenagers. In Arkansas it does not.",
        excerptKey: "cell-under-18",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 4, Distracted Driving Law",
        sourceUrl: hb(46),
        commonlyMissed: true,
      },
      {
        id: "ar_s3_26",
        topic: "speed",
        question:
          "At night your headlights show about 400 feet of road. What speed does the guide say that supports?",
        choices: ["Around 30 mph", "Around 50 mph", "Around 65 mph", "The posted limit"],
        correctIndex: 1,
        explanation:
          "Around 50 mph. You need to be able to stop inside the distance your headlights light up, and 400 feet works out at roughly that.",
        context:
          "This is the sight-distance principle applied to darkness. The guide's general test is the Four Second Sight Distance Rule: pick a fixed object as far ahead as you can clearly see, and if you reach it before you finish counting to four-one-thousand, you are going too fast.",
        trap: "The posted limit assumes ideal conditions. Darkness is not one of them, and the ticket for driving too fast for the conditions exists for exactly this.",
        excerptKey: "darkness-400-feet",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 5, Darkness",
        sourceUrl: hb(58),
      },
      {
        id: "ar_s3_27",
        topic: "sharing",
        question:
          "You see a cyclist with a red or orange pennant flag on the back of their bike. What does it indicate?",
        choices: [
          "The rider is a child",
          "The rider is part of an organized group ride",
          "The rider has impaired hearing",
          "The bicycle has no lights fitted",
        ],
        correctIndex: 2,
        explanation:
          "Impaired hearing. The guide tells you to slow down, because the rider will not hear you coming.",
        context:
          "It sits with the rest of the bicycle-awareness material. Cyclists must have proper illumination, a front light and a rear reflector, and the guide points out that lights from approaching traffic make riders even harder to pick out at night.",
        trap: "A flag reads as visibility equipment, and here it is telling you something specific about the rider.",
        excerptKey: "bicycle-pennant-flag",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 7, Residential Areas Are Danger Zones",
        sourceUrl: hb(68),
      },
      {
        id: "ar_s3_28",
        topic: "signals",
        question:
          "What does a green arrow on a traffic light give you?",
        choices: [
          "Permission to turn after yielding to oncoming traffic",
          "A protected turn - opposing traffic must stop",
          "A warning that the signal is about to change",
          "Permission to turn only when no pedestrians are present",
        ],
        correctIndex: 1,
        explanation:
          "A green arrow is the protected turn. The guide says opposing traffic must stop, so you may turn in the direction the arrow points.",
        context:
          "It is the only one of Arkansas's four lighted arrows that protects you. The flashing yellow arrow permits a left turn but leaves you yielding; the steady yellow arrow is a warning that red is coming; the red arrow forbids the turn entirely.",
        trap: "The protection is real but not total. If you are in a turn lane with an arrow, you still wait for the green arrow and for the turn to be safe.",
        excerptKey: "arrow-green",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 2, Lighted Arrows",
        sourceUrl: hb(24),
      },
      {
        id: "ar_s3_29",
        topic: "emergencies",
        question:
          "You come across a crash that emergency services have already reached. What does the Arkansas guide tell you to do?",
        choices: [
          "Stop and offer help",
          "Keep moving and focus on your driving",
          "Slow to a crawl and check for people you know",
          "Park on the shoulder until directed onward",
        ],
        correctIndex: 1,
        explanation:
          "Keep going. The guide says not to stop at a crash unless you are involved or help has not arrived, and to watch for people in or near the road as you pass.",
        context:
          "The reason is space. Driving to the scene of an accident, fire or other disaster puts your vehicle in the way of police, firefighters, ambulances and tow trucks. If you are involved in the crash, the opposite applies: you must stop.",
        trap: "Stopping to help is the generous instinct and the wrong one once responders are there.",
        excerptKey: "crash-do-not-stop",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 9, Traffic Crashes",
        sourceUrl: hb(80),
      },
      {
        id: "ar_s3_30",
        topic: "parking",
        question:
          "Who may use an Arkansas accessible parking space marked for a Special Certificate holder?",
        choices: [
          "Anyone dropping off a passenger with a disability",
          "The certificate holder, who must be present in the vehicle",
          "Any vehicle displaying a certificate, whoever is driving",
          "Anyone, for up to fifteen minutes",
        ],
        correctIndex: 1,
        explanation:
          "The person the certificate belongs to has to be in the vehicle. The certificate is registered to the individual, not to the car, which is why it can travel between vehicles.",
        context:
          "The guide adds three conditions: the certificate hangs from the rearview mirror or sits on the dashboard, the certificate holder or plate holder must get out of the vehicle when using the space, and the endorsed photo identification card must be carried. Misusing someone else's certificate is fraud and a Class A misdemeanor.",
        trap: "Borrowing a relative's hang tag while they wait at home is the exact conduct the fraud provision covers.",
        excerptKey: "accessible-parking-present",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 1, Accessible Parking",
        sourceUrl: hb(14),
      },
      {
        id: "ar_s3_31",
        topic: "rules",
        question:
          "How large a gap should you look for when merging onto a road with traffic?",
        choices: [
          "About two seconds",
          "About six seconds",
          "One car length for every 10 mph",
          "About four seconds",
        ],
        correctIndex: 3,
        explanation:
          "About four seconds. The guide explains why: slot into the middle of a four-second gap and you and the driver behind you each end up with the two seconds the following-distance rule asks for.",
        context:
          "The same four seconds applies when changing lanes or merging with another travel lane. If you have to cross more than one lane, take them one at a time rather than sweeping across.",
        trap: "A gap that is only two seconds long leaves nothing for the driver behind you, and small gaps shrink as you approach them.",
        excerptKey: "merge-four-second-gap",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 5, The Safety Cushion, Merging",
        sourceUrl: hb(61),
      },
      {
        id: "ar_s3_32",
        topic: "impairment",
        question:
          "Which driving ability does alcohol affect first, according to the Arkansas guide?",
        choices: [
          "Reaction time",
          "Judgment",
          "Vision",
          "Steering control",
        ],
        correctIndex: 1,
        explanation:
          "Judgment, and the guide says so twice. That matters because judgment is the faculty you would use to decide whether to stop drinking or whether to drive.",
        context:
          "Alcohol reaches the brain in fifteen to forty minutes after it is absorbed. It then slows reflexes and reaction time, reduces how clearly you see, and makes you less alert - but by the time you feel any of that, the guide says, judgment is already severely affected.",
        trap: "Reaction time is the answer people expect. It comes after the one that lets you notice anything is wrong.",
        excerptKey: "alcohol-judgment-first",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 8, Alcohol Impairment",
        sourceUrl: hb(73),
      },
      {
        id: "ar_s3_33",
        topic: "safety",
        question:
          "The Arkansas guide gives a distance to sit back from the driver's airbag. What is it?",
        choices: [
          "6 inches from the steering wheel",
          "As far back as you can still reach the pedals",
          "18 inches from the dashboard",
          "10 inches, measured from the center of the wheel to your breastbone",
        ],
        correctIndex: 3,
        explanation:
          "Ten inches, measured from the center of the steering wheel to your breastbone. The risk zone is the first two to three inches of the bag inflating, so ten gives a clear margin.",
        context:
          "The guide puts this in its vehicle inspection chapter alongside mirror settings, because seat position is part of setting the car up before you move. The seat should be far enough from the steering wheel to be comfortable and let you see out of all the windows.",
        trap: "Sitting close feels like control. It puts your chest inside the part of the deployment that does the damage.",
        excerptKey: "airbag-10-inches",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 10, Vehicle Seats",
        sourceUrl: hb(82),
      },
      {
        id: "ar_s3_34",
        topic: "signs",
        question:
          "A red circle with a diagonal line through a symbol appears on a white sign. What does it mean?",
        choices: [
          "The maneuver shown is prohibited",
          "The maneuver shown requires extra care",
          "The maneuver is allowed only at certain hours",
          "A warning of a hazard ahead",
        ],
        correctIndex: 0,
        explanation:
          "It prohibits whatever the symbol shows - a turn in a particular direction, or a U-turn. The red circle and slash is the standard prohibition mark on Arkansas regulation signs.",
        context:
          "The do-not-enter sign uses the same logic: a red circle with a line running across it, meaning something is not allowed. Regulation signs are the white square or rectangular family, and they carry rules rather than warnings.",
        trap: "Red and white does not always mean stop. Here it means a specific movement is closed to you.",
        excerptKey: "regulation-signs",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 2, Regulation Signs",
        sourceUrl: hb(27),
      },
      {
        id: "ar_s3_35",
        topic: "rightOfWay",
        question:
          "An oncoming driver has their left turn signal flashing as you wait to pull out. What should you do?",
        choices: [
          "Wait until the driver actually begins to turn",
          "Pull out - they have signalled their intention",
          "Flash your headlights to confirm",
          "Pull out slowly while watching them",
        ],
        correctIndex: 0,
        explanation:
          "Wait for the turn to start. The driver may be turning beyond your street, or may have left the signal on from an earlier turn.",
        context:
          "The guide singles out motorcycles here, because a motorcycle's turn signal does not cancel automatically and riders forget to switch them off. It repeats the same warning in the motorcycle chapter under the heading Signal Your Intentions.",
        trap: "A signal is a statement of intent, not a commitment. Treating it as a promise is a common way to be hit side-on.",
        excerptKey: "turn-signal-not-a-promise",
        sourceLabel: "Arkansas Driver License Study Guide - Chapter 5, Intersecting Traffic",
        sourceUrl: hb(61),
        commonlyMissed: true,
      },
    ],
  },
];
