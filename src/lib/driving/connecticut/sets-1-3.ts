import type { DrivingTestSet } from "../types";

// Every fact below was checked against the Connecticut Driver's Manual,
// Revised March 2023, published by the Connecticut Department of Motor
// Vehicles, plus the sections of Connecticut General Statutes Title 14
// (chapters 246, 248 and 249) that carry rules the manual states incompletely
// or not at all, plus three portal.ct.gov pages for the test format, the
// permit requirements and the 16-17 licensing rules.
//
// Connecticut's manual is 60 pages and the DMV writes a 25-question knowledge
// test from it. The gaps matter, because the test still asks for numbers the
// book never prints:
//
// 1. The manual gives NO speed limit anywhere. Not one figure. The 55 mph
//    general maximum and the 65 mph maximum on highways posted at 65 are in
//    section 14-219, and the "greater than is reasonable" rule that catches
//    you even at the posted limit is section 14-218a.
// 2. The manual tells you to stop for a school bus but never says how far
//    back. Ten feet, front and rear, is section 14-279, and so is the $450
//    first-offense fine.
// 3. The manual says signal "at least three seconds" before you move. The
//    statutory rule, section 14-242(b), is a flat 100 feet.
// 4. The manual gives the under-21 limit (.02) and never gives the adult one.
//    The 0.08 figure is section 14-227a.
// 5. Parking distances are in the manual (25 feet from a stop sign, 10 feet
//    from a hydrant, one foot from the curb) but the statute adds 25 feet from
//    the approach to a marked crosswalk and 150 feet of clear view on a curve
//    or crest, both in section 14-251.
//
// One documented lag is flagged where it arises. Since 1 January 2026 every
// permit applicant must complete the free Connecticut Work Zone Safety Course,
// which the March 2023 manual predates and does not mention. The DMV's own
// knowledge-test page carries it, so the questions follow the DMV page and the
// research note records the lag.
//
// Questions are original. Explanations, context notes and trap notes are
// written from scratch; the deep link is there so the learner reads the DMV's
// own authoritative wording on the state's site.
const HB =
  "https://portal.ct.gov/dmv/-/media/dmv/dmv-pdfs/drivers-manual-english.pdf";
/** PDF page anchor. The book's printed page 1 is PDF page 3. */
const hb = (page: number) => `${HB}#page=${page}`;
const stat = (chapter: string, sec: string) =>
  `https://www.cga.ct.gov/current/pub/chap_${chapter}.htm#sec_${sec}`;
const KNOWLEDGE =
  "https://portal.ct.gov/dmv/licenses-permits-ids/take-knowledge-vision-test";

export const connecticutSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Connecticut Basics",
    difficulty: "starter",
    description:
      "The rules you meet on your first drive in Connecticut: what the shapes and colors mean, who goes first, and the handful of numbers the DMV's 25-question knowledge test expects you to know cold.",
    questions: [
      {
        id: "ct_s1_01",
        topic: "signs",
        question:
          "A red eight-sided sign faces you at an intersection. What does Connecticut require?",
        choices: [
          "Come to a complete stop, then yield to anything already coming",
          "Slow to a crawl and roll through if the way looks clear",
          "Stop only if another vehicle is approaching",
          "Yield to the wider road, then continue",
        ],
        correctIndex: 0,
        explanation:
          "The octagon is reserved for STOP and nothing else. Connecticut's manual is blunt about it: the wheels stop turning at the sign, stop line, crosswalk or curb, and you stay put until the way is genuinely clear.",
        context:
          "Connecticut teaches signs by shape first, because the shape is readable in fog, glare or a language you do not read. Eight sides means stop, a downward triangle means yield, a yellow diamond warns of something ahead, a five-sided sign means school, and a circle means a railroad crossing is coming. Learning the system beats memorizing pictures.",
        trap: "A rolling stop is not a stop. An empty cross street changes nothing about the requirement.",
        excerptKey: "shape-octagon",
        sourceLabel: "Connecticut Driver's Manual - Chapter 5, Traffic Signs",
        sourceUrl: hb(48),
      },
      {
        id: "ct_s1_02",
        topic: "licensing",
        question:
          "How many questions are on Connecticut's learner's permit knowledge test, and how many must you get right?",
        choices: [
          "25 questions, 20 correct",
          "20 questions, 16 correct",
          "30 questions, 24 correct",
          "40 questions, 32 correct",
        ],
        correctIndex: 0,
        explanation:
          "The DMV test is 25 questions and the pass mark is 20, which is 80 percent. Four wrong answers still passes; the fifth does not.",
        context:
          "The test is drawn straight from the Connecticut Driver's Manual and taken in person at a DMV office, by appointment only. You take the vision screening at the same appointment. If you fail the knowledge test you wait seven days and pay the $40 exam fee again.",
        trap: "People repeat a \"20 questions, five wrong\" version of this from memory. The DMV's own page says 25 and 20.",
        excerptKey: "knowledge-test-25-20",
        sourceLabel: "CT DMV - Take the knowledge and vision tests",
        sourceUrl: KNOWLEDGE,
        commonlyMissed: true,
      },
      {
        id: "ct_s1_03",
        topic: "rightOfWay",
        question:
          "Two drivers reach a four-way stop at exactly the same moment, at right angles to each other. Who goes first?",
        choices: [
          "Whoever signals first",
          "The driver going straight, ahead of any turning driver",
          "The driver on the left, who is further from the crossing traffic",
          "The driver on the right",
        ],
        correctIndex: 3,
        explanation:
          "Connecticut's tie-breaker is the driver on the right. It only comes into play when the arrival really is simultaneous, because whoever clearly got there first goes first.",
        context:
          "The manual sets out right of way as a list of people you give way to, and the intersection entries head it: at a four-way stop the first to arrive goes first, and if two arrive together the vehicle on the right goes. Section 14-245 says the same thing for any intersection where vehicles arrive at approximately the same time.",
        trap: "Going straight does not outrank turning at a four-way stop. Order of arrival decides it, and the right-hand rule only breaks a tie.",
        excerptKey: "four-way-stop-manual",
        sourceLabel: "Connecticut Driver's Manual - Chapter 4, Right-of-Way",
        sourceUrl: hb(38),
        commonlyMissed: true,
      },
      {
        id: "ct_s1_04",
        topic: "signals",
        question:
          "You are stopped at a steady red light in Connecticut and want to turn right. What does the manual allow?",
        choices: [
          "Turn without stopping if nothing is coming",
          "Stop completely first, then turn if it is safe and no sign forbids it",
          "Turn only when a green arrow appears",
          "Turn only where a sign expressly permits it",
        ],
        correctIndex: 1,
        explanation:
          "Right on red is Connecticut's default, not a special permission. Two conditions ride with it: you must actually come to a full stop, and any sign forbidding the turn overrides the default.",
        context:
          "Red means stop and stay stopped until the light turns green and the crossing traffic has cleared. The one carve-out is the right turn, allowed after a full stop unless a sign prohibits it. Having stopped, you still yield to everyone lawfully in the intersection, pedestrians included.",
        trap: "\"Clear enough to go\" is not the test. If you never stopped, the turn is unlawful even on an empty street at 3 a.m.",
        excerptKey: "right-on-red-full-stop",
        sourceLabel: "Connecticut Driver's Manual - Chapter 5, Traffic Lights and Signals",
        sourceUrl: hb(47),
      },
      {
        id: "ct_s1_05",
        topic: "speed",
        question:
          "You are on a Connecticut highway with no speed limit sign anywhere in sight and no 65 mph limit posted for that road. What is the maximum?",
        choices: ["35 mph", "45 mph", "55 mph", "65 mph"],
        correctIndex: 2,
        explanation:
          "Fifty-five is the statutory ceiling on any Connecticut highway that has not been signed for 65. The absence of a sign is not the absence of a limit.",
        context:
          "The Connecticut Driver's Manual prints no speed figure at all, which surprises people. The numbers live in section 14-219: over 55 mph is speeding on an ordinary highway, and over 65 is speeding on the limited-access highways where a 65 limit has been established. Underneath both sits section 14-218a, which makes any speed unreasonable for the conditions an offense on its own.",
        trap: "A missing sign does not make the road a guess. The statute fills the silence and you are held to it.",
        excerptKey: "statute-speed-55",
        sourceLabel: "Connecticut General Statutes - Section 14-219, Speeding",
        sourceUrl: stat("248", "14-219"),
        commonlyMissed: true,
      },
      {
        id: "ct_s1_06",
        topic: "signs",
        question: "A downward-pointing red and white triangle faces you. What must you do?",
        choices: [
          "Give way to traffic already there, slowing or stopping if that is what it takes",
          "Come to a full stop every time, then proceed",
          "Keep your speed, since the sign is only advisory",
          "Sound your horn before entering",
        ],
        correctIndex: 0,
        explanation:
          "A yield sign means other traffic goes first. You do not have to stop automatically, but if there is no safe gap then stopping is exactly what yielding requires.",
        context:
          "The triangle is Connecticut's only three-sided regulatory sign, so the shape alone identifies it. The manual describes it as slowing to a speed reasonable for the conditions and yielding to traffic in the intersection you are crossing or the roadway you are entering. Stop if necessary is part of the definition, not an extra.",
        trap: "Yield is not stop, but it is also not carry on regardless. No gap means you wait for one.",
        excerptKey: "yield-sign",
        sourceLabel: "Connecticut Driver's Manual - Chapter 5, Regulatory Signs",
        sourceUrl: hb(49),
      },
      {
        id: "ct_s1_07",
        topic: "sharing",
        question:
          "A school bus ahead of you stops with its red lights flashing. How far back does Connecticut law require you to stop?",
        choices: [
          "At least 5 feet",
          "At least 10 feet",
          "At least 20 feet",
          "At least 30 feet",
        ],
        correctIndex: 1,
        explanation:
          "Ten feet, and it applies both ways: ten feet behind if you are following the bus, ten feet in front if you are meeting it. The manual tells you to stop but never prints the distance, so this one comes from section 14-279.",
        context:
          "The stop lasts until the red lights go out, and even then you watch for children until they have completely left the road. The only escape is a roadway split by a safety island or a physical barrier, and you have to be on the far side of it. A first offense costs $450.",
        trap: "Extra lanes do not release you. On an undivided four-lane road every direction stops, which is exactly the situation that produces most of Connecticut's tickets.",
        excerptKey: "statute-school-bus-10-feet",
        sourceLabel: "Connecticut General Statutes - Section 14-279, Vehicles to stop for school bus",
        sourceUrl: stat("248", "14-279"),
        commonlyMissed: true,
      },
      {
        id: "ct_s1_08",
        topic: "impairment",
        question:
          "You are 17 and hold a Connecticut driver's license. What blood alcohol level puts you over the limit?",
        choices: [
          "0.08 percent, the same as an adult",
          "0.05 percent",
          "0.04 percent",
          "0.02 percent",
        ],
        correctIndex: 3,
        explanation:
          "Connecticut's zero-tolerance law sets .02 percent for every driver under 21, on public roads and on private property alike. That is roughly one drink, and it applies to you until your twenty-first birthday.",
        context:
          "The 0.08 figure everyone memorizes is the adult threshold in section 14-227a. For a driver under 21 the number is .02 under section 14-227g, and testing at or above it means a license suspension of at least 45 days plus an ignition interlock device as a condition of getting the license back.",
        trap: "0.08 is the answer to a different question. Under 21 you are held to a quarter of it.",
        excerptKey: "zero-tolerance-manual",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Alcohol and the Law",
        sourceUrl: hb(35),
      },
      {
        id: "ct_s1_09",
        topic: "parking",
        question: "How close to a fire hydrant may you park in Connecticut?",
        choices: [
          "No closer than 10 feet",
          "No closer than 15 feet",
          "No closer than 20 feet",
          "No closer than 25 feet",
        ],
        correctIndex: 0,
        explanation:
          "Ten feet. Connecticut's figure is shorter than the fifteen feet several neighboring states use, which is why people who learned elsewhere get it wrong.",
        context:
          "The manual's no-parking list is worth memorizing as a block: 25 feet from a stop sign, 25 feet from a pedestrian safety zone, 10 feet from a hydrant, and never more than one foot out from the curb. Section 14-251 adds 25 feet from the approach to a marked crosswalk.",
        trap: "Fifteen feet is the common answer from other states' books. Connecticut prints ten.",
        excerptKey: "no-parking-distances",
        sourceLabel: "Connecticut Driver's Manual - Chapter 4, No-Parking Zones",
        sourceUrl: hb(39),
      },
      {
        id: "ct_s1_10",
        topic: "safety",
        question:
          "Your front-seat passenger refuses to buckle up on a short trip across town. Under Connecticut law, what happens?",
        choices: [
          "Nothing, because the belt law only applies on highways",
          "Only the driver can be ticketed",
          "Both of you can be cited, and the fine is $75 each",
          "Nothing, because the car has airbags",
        ],
        correctIndex: 2,
        explanation:
          "Connecticut makes it illegal to drive or to ride without a belt. The manual says each of you could be cited and fined $75, so the passenger's choice is not free.",
        context:
          "The belt requirement stands even in a car full of airbags: an airbag does nothing for a side impact, a rear impact or a rollover, and it cannot keep you behind the wheel. Drivers also have to make sure every passenger from age 7 up to 16 is belted, and children under 16 must be in the proper restraint for their age and weight.",
        trap: "\"It is a short trip\" and \"the car has airbags\" are the two excuses the manual answers directly. Over half of all traffic deaths happen within 25 miles of home.",
        excerptKey: "seatbelt-fine-75",
        sourceLabel: "Connecticut Driver's Manual - Chapter 2, Connecticut Seat Belt Laws",
        sourceUrl: hb(14),
      },
      {
        id: "ct_s1_11",
        topic: "licensing",
        question: "What is the minimum age to get a learner's permit in Connecticut?",
        choices: ["15", "16", "17", "18"],
        correctIndex: 1,
        explanation:
          "Sixteen, for the permit and for the license alike. Connecticut has no 15-year-old permit stage.",
        context:
          "The permit lasts until you get your license or two years from issue, whichever comes first, and you have to carry it whenever you drive. A 16 or 17 year old also needs driver training and a parent or guardian who has done the two-hour training course before the license can be issued.",
        trap: "Several nearby states start at 15 or 15 and a half. Connecticut does not.",
        excerptKey: "permit-age-and-test",
        sourceLabel: "Connecticut Driver's Manual - Chapter 1, Obtaining a Learner's Permit",
        sourceUrl: hb(7),
      },
      {
        id: "ct_s1_12",
        topic: "signals",
        question: "A traffic light ahead is flashing red. What does it mean?",
        choices: [
          "The signal is broken and you may treat the intersection as uncontrolled",
          "Slow down and proceed with caution",
          "Stop only if a vehicle is crossing",
          "It means the same as a stop sign",
        ],
        correctIndex: 3,
        explanation:
          "A flashing red is a stop sign in light form. You come to a full stop, then go when it is safe.",
        context:
          "Connecticut pairs the two flashing signals in one place: flashing red means the same as a stop sign, flashing yellow means slow down and proceed with caution. A signal that is completely dead is different again - state law makes you treat a dark intersection as if it were controlled by a stop sign.",
        trap: "A flashing red is not a flashing yellow. Rolling through one is the same violation as rolling through a stop sign.",
        excerptKey: "flashing-red",
        sourceLabel: "Connecticut Driver's Manual - Chapter 5, Flashing Lights",
        sourceUrl: hb(47),
      },
      {
        id: "ct_s1_13",
        topic: "rules",
        question:
          "What following distance does the Connecticut manual teach for normal, dry conditions?",
        choices: [
          "One second",
          "Two seconds",
          "Three seconds",
          "Four seconds",
        ],
        correctIndex: 2,
        explanation:
          "Three seconds, counted from the moment the vehicle ahead passes a fixed object until you reach it. The manual says it works at any speed, which is the point of counting time instead of car lengths.",
        context:
          "Three seconds is the baseline. The manual then lists the situations where you stretch it to four: slippery roads, following a motorcycle, following a vehicle whose driver cannot see you, low visibility, towing a trailer, being tailgated, and following an emergency vehicle. Behind a truck, three seconds is a hard floor.",
        trap: "Car lengths are useless because they do not scale with speed. Connecticut counts seconds.",
        excerptKey: "three-second-rule",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Space Ahead",
        sourceUrl: hb(23),
      },
      {
        id: "ct_s1_14",
        topic: "emergencies",
        question:
          "An ambulance comes up behind you with its siren on. What does Connecticut require?",
        choices: [
          "Speed up to get out of its way",
          "Stop immediately, wherever you are",
          "Pull over to the right edge of the road and stop until it has passed",
          "Move to the left lane and keep going",
        ],
        correctIndex: 2,
        explanation:
          "Pull as far right as you safely can and stop, then stay stopped until the emergency vehicle has passed. The rule applies whichever direction it is coming from.",
        context:
          "The one refinement is what to do if you are already in an intersection when you hear it: drive through the intersection first, then pull over. Stopping dead in the middle of the junction blocks the vehicle you are trying to help. Only a police officer or a firefighter can direct you to move sooner.",
        trap: "Stopping on the spot is the instinctive answer and the wrong one if you are inside an intersection.",
        excerptKey: "emergency-vehicle-pull-right",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Emergency Vehicles",
        sourceUrl: hb(18),
      },
      {
        id: "ct_s1_15",
        topic: "signs",
        question: "What does a five-sided sign mean in Connecticut?",
        choices: [
          "A railroad crossing is ahead",
          "You are in a school zone or approaching a school crossing",
          "A no-passing zone begins",
          "A divided highway begins",
        ],
        correctIndex: 1,
        explanation:
          "The pentagon marks school zones and school crossings. It is the only five-sided sign in the system, so the shape by itself tells you children may be about.",
        context:
          "A downward-pointing arrow plaque under the sign marks the exact crosswalk. Speed limits in a school zone are posted lower and, under section 14-212b, the court adds a fee equal to the whole fine for speeding inside a signed school zone - the doubling those SCHOOL ZONE AHEAD FINES DOUBLED signs advertise.",
        trap: "The circle, not the pentagon, is the railroad shape. Both are unusual shapes and people swap them.",
        excerptKey: "shape-pentagon-school",
        sourceLabel: "Connecticut Driver's Manual - Chapter 5, Traffic Signs",
        sourceUrl: hb(48),
      },
      {
        id: "ct_s1_16",
        topic: "sharing",
        question:
          "You are overtaking a cyclist on a two-lane Connecticut road. How much space must you leave?",
        choices: [
          "At least three feet",
          "At least two feet",
          "Half a lane width",
          "Whatever feels comfortable, since no distance is set",
        ],
        correctIndex: 0,
        explanation:
          "Three feet is the legal minimum, and it is measured from the widest part of your vehicle including any load or trailer. Section 14-232 calls it the safe distance.",
        context:
          "The same three feet applies to a whole list of vulnerable users: pedestrians, wheelchair users, someone riding or leading an animal, highway workers, garbage trucks, tank vehicles, mail vehicles and delivery carriers. Connecticut also lets you cross a double yellow line to give a cyclist that room, provided you can see far enough ahead to complete the pass safely.",
        trap: "Squeezing past inside your own lane is not passing safely. If three feet does not fit, you wait.",
        excerptKey: "bicycle-three-feet",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Bicyclists",
        sourceUrl: hb(19),
      },
      {
        id: "ct_s1_17",
        topic: "rules",
        question:
          "Rain starts and you switch on your wipers on a Connecticut road. What else must you do?",
        choices: [
          "Nothing, as long as it is daylight",
          "Turn on your parking lights",
          "Turn on your hazard flashers",
          "Turn on your headlights",
        ],
        correctIndex: 3,
        explanation:
          "Wipers on means headlights on. The manual states it flatly and adds \"It's the law\", and section 14-96a backs it up by requiring lights during any period of precipitation.",
        context:
          "The statute gives three separate triggers: from half an hour after sunset to half an hour before sunrise, whenever people and vehicles are not clearly visible at 500 feet, and during snow, rain or fog. Parking lights never satisfy any of them - the manual says parking lights are for parked vehicles only.",
        trap: "Daytime running lights are not headlights, and they usually leave your tail lights dark. That is exactly the car nobody sees in a downpour.",
        excerptKey: "headlights-with-wipers",
        sourceLabel: "Connecticut Driver's Manual - Chapter 4, Lights",
        sourceUrl: hb(40),
      },
      {
        id: "ct_s1_18",
        topic: "signs",
        question: "An orange diamond-shaped sign appears ahead. What is it telling you?",
        choices: [
          "A recreation area is nearby",
          "You are leaving a divided highway",
          "You are approaching road construction or maintenance work",
          "A speed limit change is coming",
        ],
        correctIndex: 2,
        explanation:
          "Orange is the work-zone color. Every temporary sign in a Connecticut work zone is orange with black letters or symbols.",
        context:
          "Yellow warns of a permanent road condition, orange warns of a temporary one caused by people working. Inside a signed work zone the penalties climb hard: fines of up to $1,000, points, possible driver retraining, and doubled fines for using a hand-held phone.",
        trap: "Yellow and orange are both warning colors, so people treat them as interchangeable. Orange specifically means workers may be present.",
        excerptKey: "color-orange",
        sourceLabel: "Connecticut Driver's Manual - Chapter 5, Traffic Signs, Colors",
        sourceUrl: hb(49),
      },
      {
        id: "ct_s1_19",
        topic: "rightOfWay",
        question:
          "You are waiting at a green light to turn left. An oncoming car is coming straight through. Who has the right of way?",
        choices: [
          "You do, because you arrived at the intersection first",
          "The oncoming driver going straight",
          "Whichever driver signals first",
          "You do, because a steady green is a protected turn",
        ],
        correctIndex: 1,
        explanation:
          "Straight-through traffic goes first. A steady green permits the left turn but protects nothing, so you wait for a gap large enough to clear the whole intersection.",
        context:
          "Section 14-242(e) puts the duty on the turning driver: yield to any vehicle approaching from the opposite direction that is in the intersection or close enough to be an immediate hazard. Only a green arrow protects a left turn, and even then the manual reminds you the arrow means there should be no crossing traffic, not that there definitely is none.",
        trap: "A green ball is not a green arrow. Turning across a gap that is too small is the single most common cause of left-turn collisions with motorcycles.",
        excerptKey: "left-turn-yield-manual",
        sourceLabel: "Connecticut Driver's Manual - Chapter 4, Right-of-Way",
        sourceUrl: hb(38),
      },
      {
        id: "ct_s1_20",
        topic: "speed",
        question:
          "You are caught speeding inside a marked Connecticut school zone. What happens to the penalty?",
        choices: [
          "The court adds a fee equal to 100 percent of the fine",
          "Nothing changes unless children were present",
          "The fine is reduced if school is out for the summer",
          "The fine is tripled",
        ],
        correctIndex: 0,
        explanation:
          "Section 14-212b makes the court add a fee equal to the entire fine, which is what the FINES DOUBLED signs mean. It applies to speeding and to traveling unreasonably fast alike.",
        context:
          "The zone is defined by the signs, not by the timetable. A school zone is marked SCHOOL ZONE AHEAD FINES DOUBLED at the start and END SCHOOL ZONE at the finish, and the doubling applies inside those markers. The manual reminds you that school hours are not the only time children are present.",
        trap: "\"No children about\" and \"it is a Saturday\" do not switch the zone off. The signs do that.",
        excerptKey: "statute-school-zone-fines-doubled",
        sourceLabel: "Connecticut General Statutes - Section 14-212b, School zones",
        sourceUrl: stat("248", "14-212b"),
      },
      {
        id: "ct_s1_21",
        topic: "parking",
        question: "How close to a stop sign may you leave a parked car in Connecticut?",
        choices: [
          "No closer than 5 feet",
          "No closer than 10 feet",
          "No closer than 15 feet",
          "No closer than 25 feet",
        ],
        correctIndex: 3,
        explanation:
          "Twenty-five feet. The same figure covers a pedestrian safety zone, and section 14-251 extends it to the approach to a marked crosswalk.",
        context:
          "The reason is sight lines. A car parked tight to a stop sign hides the sign from the driver behind and hides crossing traffic from the driver who stopped. The statute also bans stopping anywhere on a curve or the crest of a grade where your car cannot be seen from 150 feet in either direction.",
        trap: "Ten feet is the hydrant figure, not the stop-sign figure. The two numbers get swapped constantly.",
        excerptKey: "statute-parking-stop-sign",
        sourceLabel: "Connecticut General Statutes - Section 14-251, Parking vehicles",
        sourceUrl: stat("248", "14-251"),
      },
      {
        id: "ct_s1_22",
        topic: "signals",
        question:
          "The light turns yellow just as you reach the intersection and you are already past the stop line. What does the manual tell you to do?",
        choices: [
          "Brake hard and stop where you are",
          "Reverse back behind the stop line",
          "Keep going and clear the intersection",
          "Stop in the middle and wait for the next green",
        ],
        correctIndex: 2,
        explanation:
          "If you are already in the intersection when the yellow appears, you continue through. Stopping inside the junction leaves you across the path of traffic that is about to get a green.",
        context:
          "Yellow means the light is about to turn red and you stop if it is safe to do so. \"Safe\" carries the weight: a hard stop that puts the car behind you into your trunk is not safe. The decision point is whether you can stop before the line without slamming on the brakes.",
        trap: "Panic braking on yellow causes more crashes in Connecticut than running the light does. The manual's own wording is do not stop, continue through.",
        excerptKey: "yellow-light",
        sourceLabel: "Connecticut Driver's Manual - Chapter 5, Traffic Lights and Signals",
        sourceUrl: hb(47),
      },
      {
        id: "ct_s1_23",
        topic: "licensing",
        question:
          "You are 17 with a Connecticut driver's license. Your phone is mounted on the dash and paired to the car. May you take a call?",
        choices: [
          "No - drivers aged 16 and 17 may not use any phone or mobile device, hands-free included",
          "Yes, because hands-free use is legal for all drivers",
          "Yes, as long as the call lasts under a minute",
          "Yes, but only when a licensed adult is in the car",
        ],
        correctIndex: 0,
        explanation:
          "Sixteen and seventeen year olds are banned from every kind of phone use at the wheel, hands-free included. Drivers 18 and over may use a hands-free accessory; you may not.",
        context:
          "A violation is charged as a moving violation, and for a driver under 18 a conviction suspends the license. The only exception, at any age, is a genuine emergency call to 911, a hospital, a doctor's office, a clinic, an ambulance company or the fire or police department.",
        trap: "The hands-free rule that lets your parents talk while driving does not extend to you. This is the single most common misunderstanding of Connecticut's teen rules.",
        excerptKey: "cellphone-teen-total-ban",
        sourceLabel: "Connecticut Driver's Manual - Chapter 2, Connecticut Cell Phone Laws",
        sourceUrl: hb(15),
        commonlyMissed: true,
      },
      {
        id: "ct_s1_24",
        topic: "safety",
        question: "Before changing lanes, what does the Connecticut manual tell you to do?",
        choices: [
          "Check your mirrors, which show everything you need",
          "Check your mirrors and then look over your shoulder into the blind spot",
          "Sound your horn to warn anyone alongside",
          "Flash your headlights and move over",
        ],
        correctIndex: 1,
        explanation:
          "Mirrors first, then a head check. The rear corners of your car are the blind spots, and no mirror shows them.",
        context:
          "The manual adds two refinements people skip. Check the far lane as well, because someone over there may be aiming for the same gap. And take multiple lanes one at a time, the way you take stairs, rather than crossing several at once.",
        trap: "A blind-spot warning light is an aid, not a substitute. The manual's answer to its own study question is to look over your shoulder.",
        excerptKey: "lane-change-look-over-shoulder",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Changing Lanes",
        sourceUrl: hb(25),
      },
      {
        id: "ct_s1_25",
        topic: "signs",
        question: "What kind of information does a green highway sign carry?",
        choices: [
          "A rule you must obey",
          "A warning about a hazard ahead",
          "Services such as fuel or a hospital",
          "Guidance about where you are and how to get where you are going",
        ],
        correctIndex: 3,
        explanation:
          "Green is the guide color: place names, distances, exits and route directions. It never carries a rule.",
        context:
          "Connecticut's color system is worth learning as a set. Red is regulatory and must be obeyed, yellow warns of road conditions, orange warns of construction, green guides, blue points to services, brown points to parks and recreation, and fluorescent yellow-green marks pedestrian, bicycle and school warnings.",
        trap: "Blue is the services color, not green. The manual's own study question keys this exact pair.",
        excerptKey: "color-green",
        sourceLabel: "Connecticut Driver's Manual - Chapter 5, Traffic Signs, Colors",
        sourceUrl: hb(49),
      },
      {
        id: "ct_s1_26",
        topic: "rules",
        question:
          "How far before a turn does Connecticut law require your signal to be showing?",
        choices: [
          "25 feet",
          "50 feet",
          "100 feet",
          "200 feet",
        ],
        correctIndex: 2,
        explanation:
          "One hundred feet, continuously, before the vehicle turns. The manual talks about three seconds; the statute sets a fixed distance, and section 14-242(b) is what an officer measures against.",
        context:
          "The manual adds the other half of good signaling: do not signal too early. If there is a driveway or a side street between you and your turn, wait until you have passed it, or the driver waiting there will think you are turning in and pull out. Turn the signal off afterwards if it has not canceled itself.",
        trap: "Signalling as you begin the turn is not signaling. The whole point is the warning arriving before the maneuver does.",
        excerptKey: "statute-signal-100-feet",
        sourceLabel: "Connecticut General Statutes - Section 14-242, Signals before turning",
        sourceUrl: stat("248", "14-242"),
        commonlyMissed: true,
      },
      {
        id: "ct_s1_27",
        topic: "emergencies",
        question:
          "You clip a parked car in a Connecticut lot and there is visible damage. Nobody is around. What must you do?",
        choices: [
          "Try to find the owner, and if you cannot, leave a note with the date, time and how to reach you",
          "Nothing, since the other driver was not present",
          "Wait fifteen minutes and then drive away",
          "Report it to your insurer only",
        ],
        correctIndex: 0,
        explanation:
          "Connecticut requires you to stop and try to locate the owner. If you cannot find them, a note left where it will be seen, carrying the date, time and your contact details, is what the manual requires.",
        context:
          "Leaving the scene is a crime where anyone is injured or killed. Beyond that, you must report the crash to police if there is an injury, a death or property damage, and exchange names, addresses, license numbers, vehicle details and insurance information with everyone involved.",
        trap: "\"No one saw it\" is not a defense. The obligation attaches to the damage, not to whether anyone is watching.",
        excerptKey: "crash-leave-a-note",
        sourceLabel: "Connecticut Driver's Manual - Chapter 4, Traffic Crashes",
        sourceUrl: hb(43),
      },
      {
        id: "ct_s1_28",
        topic: "sharing",
        question:
          "A motorcycle is riding in the middle of the lane ahead of you and there is room at the edge. May you share the lane and pass?",
        choices: [
          "Yes, if you leave three feet",
          "No - a motorcycle is entitled to the full lane and you may not pass it within that lane",
          "Yes, but only under 30 mph",
          "Yes, if the rider waves you through",
        ],
        correctIndex: 1,
        explanation:
          "A motorcycle gets the whole traffic lane. Passing one inside its own lane is prohibited, because the rider needs that space to swerve around a pothole or a patch of gravel.",
        context:
          "Two motorcycles may share a lane with each other, but a car may not share with either. Motorcyclists also disappear easily into your blind spots, and the manual notes that nearly 40 percent of the crashes between a motorcycle and another vehicle were caused by that other vehicle turning left across the rider's path.",
        trap: "The three-foot passing rule is about giving room to a cyclist in an adjacent space, not permission to squeeze past a motorcycle in one lane.",
        excerptKey: "motorcycle-full-lane",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Motorcycles",
        sourceUrl: hb(20),
      },
      {
        id: "ct_s1_29",
        topic: "rightOfWay",
        question: "You are approaching a Connecticut roundabout. Who has the right of way?",
        choices: [
          "You do, because entering traffic goes first",
          "Whichever driver is going straight through",
          "Traffic already circulating in the roundabout",
          "The larger vehicle",
        ],
        correctIndex: 2,
        explanation:
          "Traffic already going round has it. Every approach to a Connecticut roundabout is marked with a yield sign, and you enter only when there is a real gap.",
        context:
          "The manual's other roundabout instructions matter as much: pick the correct lane on the approach if there is more than one, signal right as you reach your exit, yield to pedestrians in the crosswalk on the way out, and never stop inside the circle to let somebody else in. A traffic circle or rotary follows the same rule.",
        trap: "Stopping inside a roundabout to be polite is the classic learner error. It creates the queue it is trying to prevent.",
        excerptKey: "roundabout-yield-circulating",
        sourceLabel: "Connecticut Driver's Manual - Chapter 4, Roundabouts",
        sourceUrl: hb(39),
      },
      {
        id: "ct_s1_30",
        topic: "impairment",
        question:
          "A friend has been drinking and wants black coffee and a cold shower before driving home. What does the manual say about that?",
        choices: [
          "Coffee restores judgment within about twenty minutes",
          "A cold shower brings the blood alcohol level down",
          "Fresh air and exercise both help significantly",
          "None of those work - only time sobers you up",
        ],
        correctIndex: 3,
        explanation:
          "Coffee, fresh air, exercise and cold showers do nothing to the alcohol in the blood. The manual is explicit that time is the only thing that sobers you up.",
        context:
          "The reason drinking and driving is so dangerous is that alcohol attacks judgment first, so you cannot feel how impaired you are. The manual compares it to sunburn: by the time you notice, the damage is already done. A standard drink is 1.5 ounces of 80-proof spirits, a 12 ounce beer, or a 5 ounce glass of wine, and specialty cocktails often count as several.",
        trap: "A coffee makes a drunk person a wide-awake drunk person. It changes alertness, not blood alcohol.",
        excerptKey: "no-way-to-sober-up",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Alcohol and You",
        sourceUrl: hb(35),
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Core Rules of the Road",
    difficulty: "easy",
    description:
      "Lane markings, lights, turns, parking and the everyday right-of-way calls. These are the rules the DMV test returns to most often, and the ones a nervous driver forgets first.",
    questions: [
      {
        id: "ct_s2_01",
        topic: "signals",
        question:
          "Two solid yellow lines run down the center of the road. When may you cross them?",
        choices: [
          "Never, under any circumstances",
          "To turn left into a driveway, alley, private road or street",
          "To pass a slower car when the road ahead is clear",
          "Only where a police officer directs you",
        ],
        correctIndex: 1,
        explanation:
          "Double solid yellow means no passing, but Connecticut allows you to cross them to make a left turn into or out of a driveway, alley, private road or street.",
        context:
          "There is a second, narrower exception. State law lets you cross a double yellow to get around slow-moving traffic, pedestrians, parked or standing vehicles, animals, bicycles, mopeds and scooters, provided you can see far enough ahead to complete the maneuver safely.",
        trap: "\"Never cross a double yellow\" is the version most people carry. It is close enough for passing and wrong for turning.",
        excerptKey: "double-yellow-left-turn",
        sourceLabel: "Connecticut Driver's Manual - Chapter 5, Center Lines",
        sourceUrl: hb(46),
      },
      {
        id: "ct_s2_02",
        topic: "rules",
        question:
          "You are on a Connecticut road with two lanes in your direction. Where does the law say you should be driving?",
        choices: [
          "Either lane, as long as you keep up with traffic",
          "The left lane, keeping the right free for entering traffic",
          "The right lane, except when passing",
          "The lane with the fewest vehicles in it",
        ],
        correctIndex: 2,
        explanation:
          "With fewer than three lanes in your direction, Connecticut law puts you in the right lane and lets you into the left only to pass, to turn left or to exit on the left.",
        context:
          "Section 14-230 says the same thing from the other side: anything moving slower than the flow belongs in the right-hand lane or as close to the right edge as practicable. The manual's aggressive-driving section repeats it as etiquette - stay out of the far left lane and yield right for anyone who wants to pass.",
        trap: "Sitting in the left lane at the speed limit is still an offense. The lane rule is about position, not speed.",
        excerptKey: "right-lane-law-manual",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, On Multi-Lane roads",
        sourceUrl: hb(25),
      },
      {
        id: "ct_s2_03",
        topic: "parking",
        question: "How far from the curb may a parked car sit in Connecticut?",
        choices: [
          "No more than one foot",
          "No more than 18 inches",
          "No more than two feet",
          "Any distance, as long as traffic can pass",
        ],
        correctIndex: 0,
        explanation:
          "One foot. The manual's no-parking list bans leaving a car more than a foot out from the curb, and section 14-251 sets the same limit as twelve inches.",
        context:
          "The statute frames it as a positioning rule: on the traveled portion of a highway you park on the right-hand side, headed in the direction of travel, with the right-hand wheels within twelve inches of the curb where there is one. Where a bike lane or its buffer sits between the parking lane and the curb, you measure from the edge of that instead.",
        trap: "Learners fail road tests on this exact measurement, and it is a parking offense on any street with a curb.",
        excerptKey: "statute-parking-hydrant",
        sourceLabel: "Connecticut General Statutes - Section 14-251, Parking vehicles",
        sourceUrl: stat("248", "14-251"),
      },
      {
        id: "ct_s2_04",
        topic: "signs",
        question: "A round yellow sign with a large X and the letters RR is ahead. What is it?",
        choices: [
          "A rest area sign",
          "A rural route marker",
          "A warning that a railroad crossing is coming",
          "A sign marking a private road",
        ],
        correctIndex: 2,
        explanation:
          "The circle is Connecticut's railroad shape, and the yellow round sign with the X and RR is the advance warning. Slow down, look and listen.",
        context:
          "At the crossing itself you meet the crossbuck, the white X-shaped sign reading RAILROAD CROSSING. The manual gives it the same meaning as a yield sign, so you give way to any train. Where there are gates, you stop when the lights start flashing, before the gate comes down, and you stay stopped until the gates are up and the lights are off.",
        trap: "The crossbuck looks passive, so people treat it as decoration. It carries a yield duty.",
        excerptKey: "railroad-round-yellow-sign",
        sourceLabel: "Connecticut Driver's Manual - Chapter 5, Railroad Crossing Sign",
        sourceUrl: hb(54),
      },
      {
        id: "ct_s2_05",
        topic: "rightOfWay",
        question:
          "You are pulling out of a shopping center driveway onto a main road. Who yields?",
        choices: [
          "Traffic on the main road, because you are already moving",
          "You do - traffic already on the main road has the right of way",
          "Whoever is closer to the intersection",
          "Nobody, since a driveway is not an intersection",
        ],
        correctIndex: 1,
        explanation:
          "Coming out of a driveway, alley or private road, you yield to everything already on the highway. Section 14-247 puts the whole duty on you.",
        context:
          "In a business or residence area section 14-247a goes further: you stop before you cross the sidewalk, yield to any pedestrian on it, and only then yield again to traffic on the roadway. Two separate duties, in that order.",
        trap: "The right-hand rule people memorize for intersections does not apply here. A driveway never earns right of way.",
        excerptKey: "statute-driveway-yield",
        sourceLabel: "Connecticut General Statutes - Section 14-247, Right-of-way at driveway",
        sourceUrl: stat("248", "14-247"),
      },
      {
        id: "ct_s2_06",
        topic: "safety",
        question:
          "You are following a car at three seconds on a dry road and it starts to rain hard. What should the gap become?",
        choices: [
          "Three seconds is enough in any weather",
          "Two seconds, so you do not hold up traffic",
          "About four seconds",
          "Ten seconds",
        ],
        correctIndex: 2,
        explanation:
          "Three seconds is the dry-road baseline. The manual lists slippery roads first among the situations where you stretch it to four.",
        context:
          "The other four-second situations are worth knowing as a set: following a motorcycle, following a driver who cannot see you such as a truck or van, low visibility from darkness or weather, towing a trailer, being tailgated, following an emergency vehicle, and sitting behind a vehicle that has to stop at railroad crossings. On a wet road you also reduce speed by about 10 mph.",
        trap: "Shortening the gap in rain to \"stay with traffic\" removes the only margin you have when the car ahead brakes.",
        excerptKey: "four-second-following",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Space Ahead",
        sourceUrl: hb(23),
      },
      {
        id: "ct_s2_07",
        topic: "signals",
        question: "What does a flashing yellow arrow mean at a Connecticut intersection?",
        choices: [
          "Stop and wait for a green arrow",
          "The protection of a green arrow has ended and you should prepare to stop",
          "You may proceed without yielding",
          "The signal is out of service",
        ],
        correctIndex: 1,
        explanation:
          "A yellow arrow means the protected phase is finishing. If you are turning in that direction, get ready to stop.",
        context:
          "Connecticut's arrows read as a set. A green arrow means a protected turn with no crossing or oncoming traffic. A yellow arrow means that protection is ending. A red arrow means you may not go that way at all until it goes out and a green arrow or ball appears.",
        trap: "A yellow arrow is not an invitation to hurry through. It is the same warning as a yellow ball, aimed at your turn.",
        excerptKey: "yellow-arrow",
        sourceLabel: "Connecticut Driver's Manual - Chapter 5, Arrows",
        sourceUrl: hb(47),
      },
      {
        id: "ct_s2_08",
        topic: "sharing",
        question:
          "An ice cream truck ahead has its lights flashing and its stop arm out. What does Connecticut require?",
        choices: [
          "Nothing, since the stop rule only covers school buses",
          "Stop at least 10 feet away, then pass at no more than 5 mph",
          "Slow to 20 mph and continue",
          "Sound your horn and pass on the left",
        ],
        correctIndex: 1,
        explanation:
          "Connecticut treats an ice cream truck much like a school bus. You stop at least ten feet from the front or back, and once you go you creep past at up to 5 mph, yielding to any pedestrian crossing to or from the truck.",
        context:
          "The exception mirrors the school bus rule: you do not have to stop if the truck is in another lane separated from you by a safety island or a physical barrier. This rule surprises out-of-state drivers, since most states have nothing like it.",
        trap: "\"Up to 5 mph\" is a crawl, not a slow roll. Children come out from in front of the truck where you cannot see them.",
        excerptKey: "ice-cream-truck-10-feet",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Ice Cream Trucks",
        sourceUrl: hb(20),
        commonlyMissed: true,
      },
      {
        id: "ct_s2_09",
        topic: "rules",
        question:
          "You have missed your exit on a Connecticut highway. What does the manual tell you to do?",
        choices: [
          "Back up along the shoulder to the ramp",
          "Stop and wait for a gap, then reverse",
          "Cross the gore area to reach the ramp",
          "Carry on to somewhere you can safely turn around",
        ],
        correctIndex: 3,
        explanation:
          "You keep going. Backing in a travel lane is illegal in Connecticut except to parallel park or to perform a three-point turn, and the manual tells you to go on to where you can safely turn around.",
        context:
          "The same section bans stopping in travel lanes for any reason at all, including confusion, a breakdown or letting a passenger out. Keep moving until you can pull off the road. Where you do have to back up, you turn and look through the rear window over your right shoulder rather than relying on mirrors.",
        trap: "Reversing on a shoulder feels like a small cheat. Drivers behind you are not looking for a car moving toward them.",
        excerptKey: "missed-exit-do-not-back",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Backing",
        sourceUrl: hb(26),
      },
      {
        id: "ct_s2_10",
        topic: "parking",
        question:
          "You are parking facing downhill on a Connecticut street with a curb. Which way do the front wheels go?",
        choices: [
          "Turned toward the curb",
          "Turned away from the curb",
          "Straight ahead, with the parking brake on",
          "It makes no difference on a curbed street",
        ],
        correctIndex: 0,
        explanation:
          "Turn the wheels sharply toward the side of the road or curb. If the car ever starts to roll it rolls into the curb and away from traffic, which is the whole point of the rule.",
        context:
          "The manual's parking routine also has you set the parking brake every time, leave an automatic in park or a manual in gear, and check for traffic before opening the door. Get out on the curb side where you can.",
        trap: "The old \"uphill away, downhill toward\" mnemonic only holds where there is a curb. Connecticut's manual simplifies it: wheels toward the side of the road.",
        excerptKey: "park-on-hill-wheels",
        sourceLabel: "Connecticut Driver's Manual - Chapter 4, Parking",
        sourceUrl: hb(39),
      },
      {
        id: "ct_s2_11",
        topic: "signs",
        question: "A three-sided sign shaped like a pennant sits on the left side of the road. What is it?",
        choices: [
          "A yield sign for the opposing direction",
          "The start of a no-passing zone",
          "A warning of a narrow bridge",
          "A route marker for a scenic road",
        ],
        correctIndex: 1,
        explanation:
          "The pennant is the no-passing zone marker, and it is the only sign Connecticut posts on the left. It sits at the beginning of the zone where the no-passing pavement markings also start.",
        context:
          "No-passing zones are set by sight distance: the highway authority looks at how far you can see ahead and marks the road where you cannot see far enough to pass. The manual's other rule of thumb is one-third of a mile - do not begin a pass within that distance of a hill or a curve.",
        trap: "A left-side sign feels like it belongs to the oncoming traffic. This one is for you.",
        excerptKey: "shape-pennant-no-passing",
        sourceLabel: "Connecticut Driver's Manual - Chapter 5, Traffic Signs, Shapes",
        sourceUrl: hb(48),
      },
      {
        id: "ct_s2_12",
        topic: "emergencies",
        question:
          "Your brakes go soft and the pedal sinks to the floor. What does the manual tell you to try first?",
        choices: [
          "Switch off the engine straight away",
          "Steer into the curb to scrub off speed",
          "Pump the brake pedal several times",
          "Shift into reverse",
        ],
        correctIndex: 2,
        explanation:
          "Pumping the pedal will often build enough pressure to stop the car. It is the first thing to try because it costs nothing and takes a second.",
        context:
          "If pumping fails, pull the parking brake on slowly so you do not lock the rear wheels, and be ready to release it if the car starts to skid. If that fails too, shift down through the gears and look for a safe place off the roadway. Never keep driving a car with no brakes.",
        trap: "Yanking the parking brake first is what people imagine doing. Done hard it locks the rear wheels and puts you into a spin.",
        excerptKey: "brake-failure",
        sourceLabel: "Connecticut Driver's Manual - Chapter 4, Equipment Failure",
        sourceUrl: hb(41),
      },
      {
        id: "ct_s2_13",
        topic: "rightOfWay",
        question:
          "A pedestrian steps to the curb at an unmarked corner and raises a hand toward the traffic. What must you do?",
        choices: [
          "Carry on, because the crosswalk is not painted",
          "Slow or stop and let them cross",
          "Sound your horn to acknowledge them",
          "Wave them across only if the road is otherwise empty",
        ],
        correctIndex: 1,
        explanation:
          "Connecticut has a crosswalk at every intersection whether it is painted or not, and raising a hand toward oncoming traffic is one of the ways the law says a pedestrian indicates intent to cross. You slow or stop and grant the right of way.",
        context:
          "The other way to indicate intent is to move any body part, or an extension of one, into the crosswalk entrance - a cane, a stroller, a wheelchair, a bicycle wheel, a leashed dog. To find an unmarked crosswalk, imagine the sidewalk continuing straight across the road to the sidewalk opposite. Once a pedestrian has started across, section 14-300 gives them right of way over all vehicles, turning ones included, until they reach the far curb.",
        trap: "\"No paint, no crosswalk\" is wrong in Connecticut and it is the belief behind a lot of pedestrian collisions.",
        excerptKey: "pedestrian-intent-hand",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Pedestrians",
        sourceUrl: hb(18),
        commonlyMissed: true,
      },
      {
        id: "ct_s2_14",
        topic: "speed",
        question:
          "You are doing the posted 45 mph in freezing drizzle when a trooper pulls you over for your speed. Can that stick in Connecticut?",
        choices: [
          "No, the posted limit is a complete defense",
          "Only if you were also weaving",
          "Yes - speed limits are set for ideal conditions and you can be ticketed for driving too fast for them",
          "Only on a limited-access highway",
        ],
        correctIndex: 2,
        explanation:
          "Section 14-218a makes any speed greater than is reasonable for the width, traffic, intersections and weather an offense on its own. The manual says the same in plain words: even at the posted limit you can be ticketed for traveling too fast for road conditions.",
        context:
          "Limits are calculated for a dry road, clear air and normal traffic. When any of that changes, the safe number drops and the legal one drops with it. The manual's own guidance is about 10 mph off on a wet road, half your speed on packed snow, and a crawl on ice.",
        trap: "The posted number is a ceiling, never a floor and never a promise. This is one of the few rules the manual states twice.",
        excerptKey: "statute-reasonable-speed",
        sourceLabel: "Connecticut General Statutes - Section 14-218a, Traveling unreasonably fast",
        sourceUrl: stat("248", "14-218a"),
      },
      {
        id: "ct_s2_15",
        topic: "signals",
        question:
          "A single dashed white line separates you from the next lane. What does it tell you?",
        choices: [
          "You may change lanes when it is safe to do so",
          "Traffic in that lane moves in the opposite direction",
          "You must stay in your lane",
          "The lane is reserved for buses",
        ],
        correctIndex: 0,
        explanation:
          "White separates traffic going the same way, and a dashed white line means crossing is allowed when it is safe.",
        context:
          "The color tells you the direction. White lines separate lanes moving the same way; yellow lines separate opposing directions. Solid white between lanes means stay put unless a special situation requires the change, and a double solid white line bans lane changing outright.",
        trap: "White versus yellow is the first thing to read, before dashed versus solid. Get the color wrong and you are picturing the wrong road.",
        excerptKey: "dashed-white-lines",
        sourceLabel: "Connecticut Driver's Manual - Chapter 5, Lane Lines",
        sourceUrl: hb(45),
      },
      {
        id: "ct_s2_16",
        topic: "licensing",
        question:
          "You hold a Connecticut learner's permit at 16. Who is allowed to be in the car with you?",
        choices: [
          "Any licensed adult, plus friends if a seat belt is free for each",
          "Your qualified instructor, and nobody else except a parent or guardian accompanying a driving instructor",
          "Any two family members",
          "Anyone at all, as long as you are not on a highway",
        ],
        correctIndex: 1,
        explanation:
          "For the entire life of the permit a 16 or 17 year old carries one qualified instructor and no one else. A licensed driving instructor may bring the people accompanying that instructor, and a parent or legal guardian may accompany them - that is the whole list.",
        context:
          "The qualified trainer is a licensed driving instructor, or a person at least 20 years old who has held a license for four or more consecutive years without a suspension in those four years. They must sit in the front passenger seat, alert and ready to take the wheel, and the manual makes the safe operation of the car their responsibility as much as yours.",
        trap: "\"One adult plus siblings\" is a widely repeated version of this rule and it is wrong. Breaking it can suspend the permit.",
        excerptKey: "permit-no-passengers",
        sourceLabel: "Connecticut Driver's Manual - Chapter 1, Learner's Permit Passenger Restrictions",
        sourceUrl: hb(8),
        commonlyMissed: true,
      },
      {
        id: "ct_s2_17",
        topic: "safety",
        question:
          "Night driving on an unlit Connecticut road, no oncoming traffic. What should your headlights be on?",
        choices: [
          "Low beam, because high beams are for highways only",
          "Parking lights, to save glare",
          "High beam, dimming when a vehicle approaches",
          "Fog lights alone",
        ],
        correctIndex: 2,
        explanation:
          "Use high beams whenever nothing is coming. They let you see about twice as far, which on an unlit road is the difference between seeing a hazard and hitting it.",
        context:
          "The dimming point is about one block from an oncoming vehicle, and you also drop to low beam when following another car or driving in heavy traffic. High beams in fog, heavy snow or heavy rain make things worse, because the light reflects straight back at you. Parking lights are never a driving light.",
        trap: "People leave low beams on all night out of habit. The manual says high beams see twice as far and names unfamiliar roads as exactly where to use them.",
        excerptKey: "high-beams-twice-as-far",
        sourceLabel: "Connecticut Driver's Manual - Chapter 4, Lights",
        sourceUrl: hb(40),
      },
      {
        id: "ct_s2_18",
        topic: "rules",
        question:
          "Traffic ahead is backed up through the intersection you are approaching, and your light is green. What does Connecticut say?",
        choices: [
          "Enter on the green - the light gives you the right to be there",
          "Enter, then reverse out if the light changes",
          "Wait behind the line until there is room to clear the intersection",
          "Enter and sound your horn to move the queue along",
        ],
        correctIndex: 2,
        explanation:
          "You may not enter an intersection unless you can get all the way through without stopping. Sitting in the box when the light changes blocks the crossing traffic, and Connecticut will ticket you for it.",
        context:
          "The manual calls it blocking the box or causing gridlock, and section 14-250b lets municipalities designate, post and mark specific intersections where it is enforced. The rule applies even when you have a green: the green is permission to proceed, not permission to stop halfway across.",
        trap: "\"But my light was green\" is the exact defense the rule was written to defeat.",
        excerptKey: "blocking-the-box",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Intersections",
        sourceUrl: hb(17),
      },
      {
        id: "ct_s2_19",
        topic: "sharing",
        question:
          "You are about to turn right and a cyclist is riding just ahead of you in the same direction. What does Connecticut require?",
        choices: [
          "Pass the cyclist first, then turn across in front of them",
          "Slow down and let the cyclist clear the intersection before you turn",
          "Turn wide to the left, then cut back across",
          "Sound your horn so the cyclist gives way",
        ],
        correctIndex: 1,
        explanation:
          "You must not pass a cyclist immediately before a right turn. Slow down, let them clear the intersection, then turn behind them.",
        context:
          "The maneuver being banned is the right hook - passing a bike and immediately turning across its path. The manual also has you yield to cyclists in a bike lane or on a sidewalk before turning across it, and it notes that fines are doubled for failing to yield to a cyclist.",
        trap: "Getting past first feels efficient. A bicycle carries far more speed than drivers estimate, and the turn closes the gap you thought you had.",
        excerptKey: "bicycle-no-right-turn-after-passing",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Bicyclists",
        sourceUrl: hb(19),
      },
      {
        id: "ct_s2_20",
        topic: "impairment",
        question:
          "You are stopped and arrested for driving under the influence in Connecticut and you refuse the breath test. What happens to your license?",
        choices: [
          "Nothing, because refusing is not itself an offense",
          "It is suspended for at least 45 days, whatever your age",
          "It is suspended only if you are later convicted",
          "It is suspended for 24 hours",
        ],
        correctIndex: 1,
        explanation:
          "Refusal carries its own suspension of at least 45 days, regardless of age, plus an ignition interlock device for at least a year as a condition of reinstatement.",
        context:
          "Driving in Connecticut counts as consenting to a blood, breath or urine test and to the non-testimonial part of a drug influence evaluation. That is what implied consent means. Failing the test suspends the license for at least 45 days as well, so refusing does not avoid the penalty; it usually lengthens the interlock period.",
        trap: "\"They cannot prove anything if I refuse\" is exactly backwards. Refusal is admissible evidence and carries the suspension anyway.",
        excerptKey: "refusal-suspension",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Alcohol and the Law",
        sourceUrl: hb(35),
      },
      {
        id: "ct_s2_21",
        topic: "signs",
        question: "A white square sign shows a red circle with a white horizontal bar. What does it mean?",
        choices: [
          "No stopping",
          "Road closed to trucks",
          "Do not enter",
          "One way, straight ahead",
        ],
        correctIndex: 2,
        explanation:
          "That is DO NOT ENTER. It marks the openings you must never drive into: exit ramps taken the wrong way, crossovers on divided highways, and the wrong end of one-way streets.",
        context:
          "It usually travels with WRONG WAY, which is the sign you meet if you have already made the mistake. The manual's instruction there is not to keep going and look for a place to turn around - it is to stop and turn around before you pass the sign.",
        trap: "Red always means a rule you must obey, never a warning. Every red sign in Connecticut is regulatory.",
        excerptKey: "do-not-enter",
        sourceLabel: "Connecticut Driver's Manual - Chapter 5, Regulatory Signs",
        sourceUrl: hb(49),
      },
      {
        id: "ct_s2_22",
        topic: "safety",
        question:
          "A police car has someone pulled over on the shoulder of a Connecticut highway ahead of you. What does the Move Over law require?",
        choices: [
          "Sound your horn as you pass",
          "Stop completely until the stop is over",
          "Slow to below the posted limit and move over one lane if it is safe",
          "Maintain your speed and stay in your lane",
        ],
        correctIndex: 2,
        explanation:
          "Both halves are required: slow down below the posted speed limit, and move over a lane when it is safe to do so.",
        context:
          "Connecticut's law reaches further than most people expect. Section 14-283b covers police, fire, ambulance, maintenance vehicles and wreckers, and subsection (c) extends the move-over duty to ordinary stationary vehicles on the shoulder. On an undivided two-lane road where you cannot move over, the duty is simply to slow down until you are safely clear.",
        trap: "Moving over without slowing down is only half the rule, and slowing down without moving over is the other half. The statute asks for both.",
        excerptKey: "move-over-law",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Move Over Law",
        sourceUrl: hb(18),
      },
      {
        id: "ct_s2_23",
        topic: "rightOfWay",
        question:
          "Two roads meet with no signs, no signals and no stop lines. Another car arrives from your right at the same moment. What do you do?",
        choices: [
          "Proceed, because the driver on the left has priority",
          "Yield to the vehicle on your right",
          "Whoever is on the wider road goes first",
          "Sound your horn and proceed",
        ],
        correctIndex: 1,
        explanation:
          "At an uncontrolled intersection Connecticut gives way to the right. Section 14-245 makes it an infraction to do anything else when two vehicles arrive at approximately the same time.",
        context:
          "Uncontrolled intersections are common on Connecticut's residential grids. The rule only settles a tie - a vehicle that is clearly already in the intersection goes first regardless of which side it came from, and any signal from a police officer overrides everything.",
        trap: "People carry a vague sense that the bigger or busier road wins. Nothing in the statute mentions road size.",
        excerptKey: "uncontrolled-intersection-right",
        sourceLabel: "Connecticut Driver's Manual - Chapter 4, Right-of-Way",
        sourceUrl: hb(38),
      },
      {
        id: "ct_s2_24",
        topic: "emergencies",
        question:
          "Your car breaks down and you cannot get it off a Connecticut highway. What should you do?",
        choices: [
          "Stand in the lane and wave traffic around",
          "Leave the car and walk along the travel lane for help",
          "Change the tire quickly, even if you have to kneel in the lane",
          "Turn on the emergency flashers and warn traffic from off the roadway",
        ],
        correctIndex: 3,
        explanation:
          "Flashers on, then get yourself somewhere safe. The manual is emphatic that you never stand in the roadway and never change a tire if it puts you in a traffic lane.",
        context:
          "If you cannot move the car, at least stop where drivers have a clear view of it - not just over a crest or around a curve. Flares or warning devices go behind the vehicle so following drivers have time to change lanes. Lifting the hood or tying a white cloth to the antenna, mirror or door handle signals that the car is disabled.",
        trap: "Waving traffic around from the lane feels helpful and is how people get killed on the shoulder.",
        excerptKey: "breakdown-never-stand-in-road",
        sourceLabel: "Connecticut Driver's Manual - Chapter 4, Vehicle Emergencies",
        sourceUrl: hb(41),
      },
      {
        id: "ct_s2_25",
        topic: "rules",
        question: "When may you make a U-turn on a Connecticut expressway?",
        choices: [
          "Never",
          "When there is a gap in the median and no sign forbids it",
          "Between midnight and 5 a.m.",
          "When you are following police direction only",
        ],
        correctIndex: 0,
        explanation:
          "Never on an expressway. The manual states it as an absolute, and the NO U-TURN signs at median openings on divided highways exist because people try.",
        context:
          "Elsewhere, U-turns are legal unless signed otherwise, but section 14-242(d) bans them on any curve or near the crest of a hill where you cannot be seen from 500 feet in either direction. The technique is a left signal, a stop, a check for approaching traffic, and then a turn into the outside or right-hand lane of the opposite direction.",
        trap: "A gap in the median looks like an invitation. Those openings are for maintenance and emergency vehicles.",
        excerptKey: "uturn-never-on-expressway",
        sourceLabel: "Connecticut Driver's Manual - Chapter 4, U-Turns",
        sourceUrl: hb(39),
      },
      {
        id: "ct_s2_26",
        topic: "speed",
        question:
          "You are 17 and are caught doing 25 mph over the limit on a Connecticut road posted at 40. Beyond the fine, what does the DMV do?",
        choices: [
          "Nothing until a second offense",
          "Adds points but takes no other action",
          "Suspends your license, starting at 60 days for a first offense",
          "Requires a retest of the knowledge exam",
        ],
        correctIndex: 2,
        explanation:
          "Speeding 20 mph or more over the limit is one of the offenses that suspends a 16 or 17 year old's license. The manual's table sets a 60-day suspension for a first offense, then 90 days, then six months, with a $175 restoration fee each time.",
        context:
          "The statute behind it, section 14-219(a)(4), makes 20 mph over the limit a specific offense for anyone under 18 on any road posted below 65. The wider point is that Connecticut treats teen violations as license matters and not just fines: cell phone use, curfew, passenger limits, reckless driving and street racing all carry their own suspensions.",
        trap: "It is easy to assume the penalty is just a bigger ticket. For a driver under 18 it is time off the road.",
        excerptKey: "statute-teen-20-over",
        sourceLabel: "Connecticut General Statutes - Section 14-219, Speeding",
        sourceUrl: stat("248", "14-219"),
        commonlyMissed: true,
      },
      {
        id: "ct_s2_27",
        topic: "parking",
        question: "Which of these is legal parking in Connecticut?",
        choices: [
          "Two feet from the curb on a quiet street",
          "In a marked bike lane while you run into a shop",
          "On the wrong side of a two-way street facing traffic",
          "Alongside a curb, headed the way traffic moves, twenty feet from the corner",
        ],
        correctIndex: 3,
        explanation:
          "Right-hand side, headed the way you are going, close to the curb and clear of the 25-foot zones is exactly what the rules describe. The other three are all on the manual's no-parking list.",
        context:
          "The list is worth reading as a whole: no parking in an intersection, on a crosswalk or sidewalk, within 25 feet of a stop sign or a pedestrian safety zone, within 10 feet of a hydrant, more than a foot from the curb, blocking a driveway or a curb cut, on a bridge or in a tunnel, on the wrong side of the street, in a disabled space without a placard, double parked, on railroad tracks, or in a bike lane.",
        trap: "Facing the wrong way is the one people think is merely untidy. It is a parking violation in its own right.",
        excerptKey: "no-parking-places",
        sourceLabel: "Connecticut Driver's Manual - Chapter 4, No-Parking Zones",
        sourceUrl: hb(39),
      },
      {
        id: "ct_s2_28",
        topic: "signals",
        question:
          "A center lane is marked on both sides with a solid yellow line outside a dashed yellow line, with left-turn arrows painted in it. What is it for?",
        choices: [
          "Passing slower traffic in either direction",
          "Left turns, and U-turns where they are permitted, from either direction",
          "Emergency vehicles only",
          "High-occupancy vehicles",
        ],
        correctIndex: 1,
        explanation:
          "That is a shared center turn lane. Both directions of traffic use it to make left turns, and for U-turns where those are allowed - never to travel in or to pass.",
        context:
          "You can read it from the paint: the arrows alternate, pointing left for one direction and then the other. In some places the same lane becomes a reversible lane during rush hour, controlled by overhead lights - a green arrow means the lane is yours, a red X means it is not, a steady yellow X means get out of it, and a flashing yellow X means it is for turning only.",
        trap: "Treating a center turn lane as a running lane, even for a few hundred feet, sets up a head-on collision with someone using it correctly from the other side.",
        excerptKey: "shared-center-lane",
        sourceLabel: "Connecticut Driver's Manual - Chapter 5, Shared Center Lane",
        sourceUrl: hb(46),
      },
      {
        id: "ct_s2_29",
        topic: "sharing",
        question:
          "You are following a tractor-trailer on a Connecticut highway at night. What must you not do?",
        choices: [
          "Use your high beams",
          "Stay in the same lane as the truck",
          "Signal before you change lanes",
          "Leave more than three seconds of space",
        ],
        correctIndex: 0,
        explanation:
          "Never run high beams behind a truck. The glare bounces out of those big flat side mirrors straight into the driver's eyes.",
        context:
          "Three seconds is a hard minimum behind a truck, and the manual's reasoning is that if you cannot see around it you are driving blind. The rear No-Zone stretches a long way back, and the blind spots can run 20 feet ahead of the cab and roughly 200 feet behind the trailer.",
        trap: "High beams feel safer at night because you see more. Behind a truck they take away the one person whose vision matters most.",
        excerptKey: "truck-no-high-beams",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Following Distance Behind Trucks",
        sourceUrl: hb(22),
      },
      {
        id: "ct_s2_30",
        topic: "licensing",
        question:
          "Since 1 January 2026, what extra step does Connecticut require before you can take the permit knowledge test?",
        choices: [
          "A 30-hour classroom course",
          "A doctor's fitness certificate",
          "A road-sign identification test",
          "The free online Connecticut Work Zone Safety Course, with the certificate handed in",
        ],
        correctIndex: 3,
        explanation:
          "Every permit applicant now completes the free Connecticut Work Zone Safety Course and brings the printed completion certificate to the DMV appointment along with the other documents.",
        context:
          "The course takes under an hour and is done online. It sits alongside the older requirements: acceptable identity documents, the signed R-229 application, the $40 exam fee, and a Connecticut non-driver ID surrendered if you hold one. The March 2023 driver's manual predates this rule and does not mention it, so the DMV's own knowledge-test page is the source.",
        trap: "The printed manual is not a complete checklist any more. Turning up without the certificate means being turned away.",
        excerptKey: "workzone-orange-signs",
        sourceLabel: "CT DMV - Take the knowledge and vision tests",
        sourceUrl: KNOWLEDGE,
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Real Test Difficulty",
    difficulty: "medium",
    description:
      "Thirty-five questions pitched where the real DMV test sits: numbers you have to know exactly, distinctions that look alike on paper, and the situations the manual spends a whole page on.",
    questions: [
      {
        id: "ct_s3_01",
        topic: "sharing",
        question:
          "You are on an undivided four-lane road. A school bus on the other side stops and puts on its red flashing lights. What must you do?",
        choices: [
          "Carry on, because there are two lanes between you",
          "Slow to 15 mph and keep going",
          "Stop only if children are visible",
          "Stop, and stay stopped until the red lights go out",
        ],
        correctIndex: 3,
        explanation:
          "Extra lanes do not release you. On an undivided road every direction stops, and the stop lasts until the red lights stop flashing.",
        context:
          "The only exemption is a roadway split by a safety island or a physical barrier, with you on the far side of it. A painted line is not a barrier and a four-lane road is not automatically divided. After the lights go out you still wait until the children have completely left the road.",
        trap: "This is the exact scenario behind most Connecticut school-bus citations: a driver on a wide road, going the other way, who assumed the width was enough.",
        excerptKey: "school-bus-stop-manual",
        sourceLabel: "Connecticut Driver's Manual - Chapter 4, Right-of-Way",
        sourceUrl: hb(39),
        commonlyMissed: true,
      },
      {
        id: "ct_s3_02",
        topic: "speed",
        question:
          "At 55 mph on a two-lane road, how much clear road does the manual say you need to pass safely?",
        choices: [
          "About 400 feet",
          "About 800 feet",
          "About 1,200 feet",
          "Over 1,600 feet, roughly a third of a mile",
        ],
        correctIndex: 3,
        explanation:
          "You need about ten seconds to complete the pass. In ten seconds you travel over 800 feet and so does the oncoming car, so the gap you actually need is over 1,600 feet.",
        context:
          "The manual's warning is about perception. A vehicle that far away looks stationary, and if you can see it visibly getting closer it is probably already too close to pass. The companion rule is the one-third of a mile limit on hills and curves - never begin a pass within that distance of either.",
        trap: "People judge the gap by how the oncoming car looks rather than by arithmetic, and at these distances the eye is simply not reliable.",
        excerptKey: "pass-1600-feet",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Rules of Passing",
        sourceUrl: hb(25),
      },
      {
        id: "ct_s3_03",
        topic: "safety",
        question:
          "Your car has anti-lock brakes and you need to stop as fast as possible. What do you do with the pedal?",
        choices: [
          "Press hard and keep pressing, even when it pushes back",
          "Pump it rapidly",
          "Press until the wheels lock, then release",
          "Press lightly and steer around the hazard",
        ],
        correctIndex: 0,
        explanation:
          "Firm, constant pressure. The pedal will vibrate and push back against your foot when the ABS is working, and that is the signal to keep pressing, not to ease off.",
        context:
          "The system only works while the pedal is held down. Without ABS the procedure is different: brake as hard as you can without locking the wheels, release the moment they lock and you feel the skid, then reapply. ABS also lets you steer while braking, which is why the manual pairs it with turning to avoid a collision.",
        trap: "Pumping is the pre-ABS technique and it defeats the system. The vibration convinces a lot of drivers something is broken.",
        excerptKey: "abs-do-not-let-up",
        sourceLabel: "Connecticut Driver's Manual - Chapter 4, Stopping Quickly",
        sourceUrl: hb(42),
      },
      {
        id: "ct_s3_04",
        topic: "licensing",
        question:
          "A 16 year old has held a Connecticut driver's license for four months. Who may ride with them?",
        choices: [
          "One friend of the same age",
          "Any two members of the immediate family",
          "Anyone, as long as there are enough seat belts",
          "A licensed driving instructor, or a parent or legal guardian, or one qualified adult",
        ],
        correctIndex: 3,
        explanation:
          "In the first six months after the license is issued, the only passengers allowed are a licensed driving instructor, the driver's parents or legal guardian with at least one holding a license, or one person aged 20 or over who has held a license for four consecutive years without suspension.",
        context:
          "In months seven through twelve, immediate family members are added. Friends are not permitted until the license is a full year old. On top of that, a 16 or 17 year old may never carry more passengers than the car has seat belts, and the curfew from 11 p.m. to 5 a.m. runs alongside the passenger rule.",
        trap: "The second-six-months relaxation is about family, not friends. Several people online confidently describe it the other way round.",
        excerptKey: "gdl-first-six-months",
        sourceLabel: "Connecticut Driver's Manual - Chapter 1, Restrictions for 16- and 17-Year-Old Drivers",
        sourceUrl: hb(10),
        commonlyMissed: true,
      },
      {
        id: "ct_s3_05",
        topic: "signs",
        question:
          "A yellow diamond sign shows an arrow bending sharply right, with a small square sign under it reading 25. What is the 25?",
        choices: [
          "The legal speed limit through the curve",
          "The advisory speed for the curve",
          "The distance in yards to the curve",
          "The road number",
        ],
        correctIndex: 1,
        explanation:
          "It is an advisory speed plaque - the safe speed for that condition, not a regulatory limit. It sits under a warning sign rather than standing on its own.",
        context:
          "A regulatory speed limit is a white rectangle reading SPEED LIMIT and it applies whatever the conditions. The advisory number applies to the hazard the warning sign describes. Ignoring one is not automatically speeding, but taking a curve faster than the advisory speed straight into a skid is still traveling unreasonably fast under section 14-218a.",
        trap: "Both are numbers on a small sign, so people read them as the same thing. Color and shape separate them: white rectangle regulates, yellow warns.",
        excerptKey: "advisory-speed-plaque",
        sourceLabel: "Connecticut Driver's Manual - Chapter 5, Warning Signs",
        sourceUrl: hb(51),
      },
      {
        id: "ct_s3_06",
        topic: "rules",
        question:
          "Connecticut allows you to overtake on the right in a few situations. Which of these is one?",
        choices: [
          "When the vehicle ahead is turning or has signaled a left turn",
          "On any road with a paved shoulder",
          "Whenever the driver ahead is under the speed limit",
          "On any two-lane road in daylight",
        ],
        correctIndex: 0,
        explanation:
          "Section 14-233 permits passing on the right when the vehicle ahead is making or has signaled a left turn, and only when conditions allow it safely.",
        context:
          "The other permitted cases are lines of traffic in adjoining lanes that have stopped or slowed, a one-way street wide enough for two lines of moving vehicles, and a limited-access highway or parkway with three or more lanes in your direction. In every case the move must stay on the pavement - you may not drop onto the shoulder to do it.",
        trap: "Undertaking on the shoulder is specifically excluded, and the manual adds that a driver you pass on the right may not see you at all.",
        excerptKey: "statute-passing-on-right",
        sourceLabel: "Connecticut General Statutes - Section 14-233, Passing on right",
        sourceUrl: stat("248", "14-233"),
      },
      {
        id: "ct_s3_07",
        topic: "emergencies",
        question:
          "Your car starts to skid on a wet Connecticut road. What is the first thing to do?",
        choices: [
          "Brake hard to slow the car",
          "Stay off the brake and steer where you want the car to go",
          "Pull the parking brake",
          "Shift into a lower gear",
        ],
        correctIndex: 1,
        explanation:
          "Off the brake, and steer toward where you want to end up. Until the car slows the brakes are not going to help and are likely to make the skid worse.",
        context:
          "The correction comes in two parts. Steer into the direction you want to travel, then as the car straightens turn the wheel back the other way, otherwise you swing through and start a second skid the opposite way. Keep correcting left and right until the car is tracking again.",
        trap: "Forgetting the counter-steer is what turns one skid into a spin. The manual spells out both halves.",
        excerptKey: "skid-stay-off-brake",
        sourceLabel: "Connecticut Driver's Manual - Chapter 4, Dealing with Skids",
        sourceUrl: hb(42),
      },
      {
        id: "ct_s3_08",
        topic: "parking",
        question:
          "Section 14-251 bans stopping on the traveled part of a highway at a curve or the crest of a hill unless your car can be seen from how far away?",
        choices: [
          "50 feet",
          "100 feet",
          "150 feet",
          "300 feet",
        ],
        correctIndex: 2,
        explanation:
          "One hundred and fifty feet, in either direction. Below that, a stationary car on the traveled way is a hazard nobody can react to in time.",
        context:
          "This one is purely statutory - the manual says only that a parked vehicle must be far enough from any travel lane to avoid interfering with traffic and visible to vehicles approaching from either direction. The statute puts a number on visible.",
        trap: "Blind crests feel like fine places to stop because you can see plenty in front of you. The measurement is about who can see you.",
        excerptKey: "statute-parking-150-feet",
        sourceLabel: "Connecticut General Statutes - Section 14-251, Parking vehicles",
        sourceUrl: stat("248", "14-251"),
      },
      {
        id: "ct_s3_09",
        topic: "signals",
        question:
          "A HAWK pedestrian signal above the road is showing a flashing red. What must you do?",
        choices: [
          "Treat it as a green and proceed",
          "Slow down and proceed with caution",
          "Stop and wait for the signal to go dark",
          "Stop, then proceed once the pedestrians have cleared the crosswalk",
        ],
        correctIndex: 3,
        explanation:
          "A flashing red on a HAWK means the signal is about to switch off. You still stop, but you may go once the pedestrians are clear of the crosswalk.",
        context:
          "The whole sequence runs dark, flashing yellow when someone presses the button, solid yellow as a warning, solid red while the pedestrian crosses, then flashing red as it winds down. The head is unusual - one round yellow below two round reds side by side - so it does not look like an ordinary signal.",
        trap: "Flashing red on a HAWK is not the same as waiting out a solid red. Sitting there once the crosswalk is clear blocks traffic behind you.",
        excerptKey: "hawk-flashing-red",
        sourceLabel: "Connecticut Driver's Manual - Chapter 5, HAWK Signals",
        sourceUrl: hb(47),
      },
      {
        id: "ct_s3_10",
        topic: "impairment",
        question:
          "Under Connecticut law, what blood alcohol concentration counts as an elevated blood alcohol content for a driver aged 21 or over in an ordinary car?",
        choices: [
          "0.02 percent",
          "0.05 percent",
          "0.08 percent",
          "0.10 percent",
        ],
        correctIndex: 2,
        explanation:
          "Eight hundredths of one per cent by weight. Section 14-227a sets it, and a commercial driver is held to half that at 0.04.",
        context:
          "Being under the number is not a defense in itself. The offense has two limbs: operating while under the influence, and operating with an elevated blood alcohol content. A driver plainly impaired at 0.06 is still committing the first. Failing the test brings a suspension of at least 45 days plus an ignition interlock device for at least six months.",
        trap: "The manual never prints 0.08 anywhere, because it is aimed at teenagers held to .02. That leaves a gap the test still asks about.",
        excerptKey: "statute-bac-08",
        sourceLabel: "Connecticut General Statutes - Section 14-227a, Operation while under the influence",
        sourceUrl: stat("248", "14-227a"),
      },
      {
        id: "ct_s3_11",
        topic: "rightOfWay",
        question:
          "A city bus at the curb ahead of you signals to pull back into traffic. What does Connecticut require?",
        choices: [
          "Nothing, since a bus yields like any other vehicle",
          "Yield to the bus",
          "Sound your horn and pass",
          "Stop completely until the bus has left",
        ],
        correctIndex: 1,
        explanation:
          "Connecticut gives a signaling bus the right of way to rejoin traffic. Both the manual and section 14-247b say so, and the duty is yours.",
        context:
          "It is one of the small, easily missed entries on the manual's right-of-way list, alongside yielding to trains, to emergency vehicles and to pedestrians in marked and unmarked crosswalks. The bus has to give the appropriate signal first.",
        trap: "The usual rule is that a vehicle entering traffic yields. This is a deliberate exception and the test likes it for that reason.",
        excerptKey: "yield-to-bus-signalling",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Slow Moving Vehicles",
        sourceUrl: hb(20),
      },
      {
        id: "ct_s3_12",
        topic: "safety",
        question:
          "The manual says a safe driver looks how far ahead in city traffic?",
        choices: [
          "About one block, which is roughly 12 seconds",
          "About two car lengths",
          "About four blocks",
          "As far as the headlights reach",
        ],
        correctIndex: 0,
        explanation:
          "Twelve seconds of travel, which in a city works out to about one block. On the highway the same twelve seconds is about four blocks, or a quarter of a mile.",
        context:
          "The point is to see the problem while you still have choices. Looking well ahead means fewer sudden stops, less weaving, better fuel economy and more time for the drivers behind you. You measure it the same way as following distance: pick a fixed object and count.",
        trap: "Watching the bumper in front is the instinct under pressure, and it is exactly when the twelve-second habit matters most.",
        excerptKey: "twelve-seconds-city-highway",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Scanning",
        sourceUrl: hb(16),
      },
      {
        id: "ct_s3_13",
        topic: "sharing",
        question:
          "You come up behind a horse and rider on a Connecticut road. What does the law require?",
        choices: [
          "Sound your horn so the rider knows you are there",
          "Pass quickly to minimize the time alongside",
          "Wait for the rider to leave the roadway",
          "Reduce speed, or stop if necessary, and pass at a reasonable distance",
        ],
        correctIndex: 3,
        explanation:
          "Slow down, and stop if that is what it takes to avoid striking, endangering or frightening the animal. Pass at a reasonable speed and a reasonable distance.",
        context:
          "Horseback riders are subject to and protected by the rules of the road, and must ride single file near the right edge. The horn is specifically prohibited here: it is illegal to sound your horn or make loud or unusual noises when approaching or passing a horse.",
        trap: "The horn is the wrong instinct twice over in Connecticut - around horses and around blind pedestrians, where the manual also bans it.",
        excerptKey: "horses-no-horn",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Horses",
        sourceUrl: hb(20),
      },
      {
        id: "ct_s3_14",
        topic: "rules",
        question:
          "Connecticut's manual says you should be able to stop within the distance you can see with your headlights. At high beam that is about 400 feet, which corresponds to what speed?",
        choices: [
          "About 30 mph",
          "About 40 mph",
          "About 50 mph",
          "About 65 mph",
        ],
        correctIndex: 2,
        explanation:
          "About 50 mph. High beams show you roughly 400 feet, and 400 feet is roughly the reaction-plus-braking distance from 50 mph on dry pavement.",
        context:
          "The manual gives the pair explicitly: about 400 feet to stop from 50 mph, about 200 feet from 30 mph. It then turns them around - if you cannot see 400 feet ahead you should not be doing 50, and if you cannot see 200 feet you should not be doing 30. In heavy rain, snow or thick fog you may not see much more than 200 feet at all.",
        trap: "Overdriving your headlights is invisible until something is in the beam, which is why the manual converts the distance into a speed.",
        excerptKey: "high-beam-400-feet",
        sourceLabel: "Connecticut Driver's Manual - Chapter 4, Lights",
        sourceUrl: hb(40),
      },
      {
        id: "ct_s3_15",
        topic: "signs",
        question: "What does a blue rectangular highway sign point you to?",
        choices: [
          "A park or recreation area",
          "Services such as fuel, food, lodging or a hospital",
          "A place name and the distance to it",
          "A construction detour",
        ],
        correctIndex: 1,
        explanation:
          "Blue is the services color. Rest areas, gas, campgrounds and hospitals all sit on blue signs with white letters or symbols.",
        context:
          "Blue and green are both guide colors and are easy to confuse. Green tells you where you are and how far away things are; blue tells you what is available at the next exit. Brown, a third guide color, marks parks and recreation.",
        trap: "The manual's own study questions key on the color families, so knowing red-yellow-orange-green-blue-brown as a set is worth more than memorizing individual signs.",
        excerptKey: "service-signs",
        sourceLabel: "Connecticut Driver's Manual - Chapter 5, Guide Signs",
        sourceUrl: hb(53),
      },
      {
        id: "ct_s3_16",
        topic: "licensing",
        question:
          "You finish driver education at a Connecticut commercial or secondary school. How long after your permit was issued must you wait to take the road test?",
        choices: [
          "60 days",
          "90 days",
          "120 days",
          "180 days",
        ],
        correctIndex: 2,
        explanation:
          "One hundred and twenty days for anyone who completed driver education at a commercial or secondary school. Everyone else waits 180 days.",
        context:
          "The 120-day route also requires at least eight hours of behind-the-wheel training from a Connecticut commercial driving school on top of the 30 hours of classroom work. Either way a 16 or 17 year old needs 40 hours of behind-the-wheel practice in total, and a parent or guardian has to complete the two-hour training course. An applicant of 18 or over holds the permit at least 90 days.",
        trap: "Three different waiting periods sit within a few lines of each other, and the test likes asking which applies to whom.",
        excerptKey: "wait-120-or-180-days",
        sourceLabel: "Connecticut Driver's Manual - Chapter 1, Driver Education Requirements",
        sourceUrl: hb(8),
      },
      {
        id: "ct_s3_17",
        topic: "speed",
        question:
          "The road is covered in packed snow. What speed adjustment does the manual call for?",
        choices: [
          "Reduce by about 5 mph",
          "Reduce by about 10 mph",
          "Cut your speed in half",
          "No change if you have winter tires",
        ],
        correctIndex: 2,
        explanation:
          "Half. Wet gets about 10 mph off, packed snow halves your speed, and ice means slowing to a crawl.",
        context:
          "Connecticut allows studded tires from November 15 through April 30 and nowhere else in the year - the manual and section 14-98 agree on both dates. The manual also flags where the ice hides: shady spots, bridges and overpasses that freeze first because there is no ground underneath them, and ice near the freezing point that gets wet and more slippery than colder ice.",
        trap: "Winter tires change grip, not physics. The manual's reductions are not conditional on equipment.",
        excerptKey: "wet-snow-ice-speeds",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Slippery Roads",
        sourceUrl: hb(27),
      },
      {
        id: "ct_s3_18",
        topic: "emergencies",
        question:
          "You are first at a crash scene where someone is bleeding heavily. What does the manual tell you to do?",
        choices: [
          "Move them clear of the vehicle first",
          "Give them water while you wait for help",
          "Elevate the vehicle and wait",
          "Apply direct pressure to the wound with your hand or a cloth",
        ],
        correctIndex: 3,
        explanation:
          "Direct pressure on the wound. The manual says even severe bleeding can almost always be stopped or slowed that way.",
        context:
          "The order matters. Make sure police and emergency medical services have been called, and mention a fire if there is one. Do not move an injured person unless the vehicle is burning or they are about to be hit. Help anyone who is not already walking and talking first, check breathing, then check bleeding. Do not give an injured person anything to drink, not even water, and cover them to help prevent shock.",
        trap: "Moving people and offering water are the two well-meant instincts the manual specifically warns against.",
        excerptKey: "crash-do-not-move-injured",
        sourceLabel: "Connecticut Driver's Manual - Chapter 4, Traffic Crashes",
        sourceUrl: hb(43),
      },
      {
        id: "ct_s3_19",
        topic: "signals",
        question:
          "A signal at a Connecticut intersection is completely dead - no lights at all. How do you treat it?",
        choices: [
          "As if it were controlled by a stop sign",
          "As if it were a yield sign",
          "As uncontrolled, so the vehicle on the right goes first",
          "As a green in the direction of the busier road",
        ],
        correctIndex: 0,
        explanation:
          "State law makes you stop as though the intersection were controlled by a stop sign. Every approach stops, then normal right-of-way rules sort out the order.",
        context:
          "The manual states this twice, once under intersections and again under hazardous conditions, which is a fair signal of how often it is tested. Section 14-299b covers inoperative traffic control signals. The rule turns a dangerous free-for-all into an ordinary four-way stop.",
        trap: "Treating a dark signal as uncontrolled and applying the yield-to-the-right rule is the wrong answer, because it skips the required stop.",
        excerptKey: "inoperative-signal-stop-sign",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Stop Light Not Working",
        sourceUrl: hb(27),
        commonlyMissed: true,
      },
      {
        id: "ct_s3_20",
        topic: "safety",
        question:
          "You are merging onto a Connecticut highway from an entrance ramp. What size gap does the manual say you need?",
        choices: [
          "About two seconds",
          "About three seconds",
          "About four seconds",
          "One car length per 10 mph",
        ],
        correctIndex: 2,
        explanation:
          "About four seconds. Slot into the middle of it and both you and the driver behind you end up with a two-second gap, which is the arithmetic the manual is working from.",
        context:
          "The ramp exists so you can reach the speed of traffic before you join. Driving to the end of it and stopping is the mistake the manual names: you have no room left to accelerate and the driver behind is not expecting a stationary car. If you have to wait, slow on the ramp rather than stopping at its end.",
        trap: "A gap that looks fine at 30 mph is not a gap at 60. Judge it in seconds, not by eye.",
        excerptKey: "merge-four-second-opening",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Space to Merge",
        sourceUrl: hb(22),
      },
      {
        id: "ct_s3_21",
        topic: "parking",
        question:
          "Which of these does Connecticut treat as double parking?",
        choices: [
          "Parking two cars nose to tail in one metered bay",
          "Parking on the roadside of another parked vehicle",
          "Parking with two wheels on the sidewalk",
          "Parking in two adjoining spaces",
        ],
        correctIndex: 1,
        explanation:
          "Double parking is stopping alongside a car that is already parked at the curb, leaving your vehicle out in the traffic lane. Connecticut's no-parking list bans it outright.",
        context:
          "Putting wheels on the sidewalk is a separate offense under section 14-250a, which bans driving, parking, standing or stopping on any public sidewalk except to cross it into an adjacent property or to do construction, maintenance or snow clearing.",
        trap: "\"Just for a minute with the flashers on\" is not an exception anywhere in the statute.",
        excerptKey: "no-parking-handicapped-and-tracks",
        sourceLabel: "Connecticut Driver's Manual - Chapter 4, No-Parking Zones",
        sourceUrl: hb(39),
      },
      {
        id: "ct_s3_22",
        topic: "sharing",
        question:
          "What is the largest No-Zone around a tractor-trailer, and how do you know you are in a side one?",
        choices: [
          "The sides, and you know because you cannot see the driver's face in the side mirror",
          "The front, and you know because you cannot see the trailer",
          "The rear, and you know because the trailer fills your windshield",
          "There is no reliable way to tell",
        ],
        correctIndex: 0,
        explanation:
          "The side No-Zones are much larger than a car's blind spots, and the manual gives a test anyone can apply: if you cannot see the driver's face in the side mirror, the driver cannot see you.",
        context:
          "Trucks have No-Zones front, rear and both sides. The blind spots can run up to 20 feet ahead of the cab and about 200 feet behind the trailer. A truck may be 65 feet long and take more than half a mile of clear road to pass, so cutting back in too soon puts you in the front No-Zone of a vehicle that needs nearly twice a car's stopping distance.",
        trap: "The mirror test is the answer the manual keys in its own study questions, and it works from the driving seat with no measurement at all.",
        excerptKey: "truck-mirror-face",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Sharing the Road with Trucks",
        sourceUrl: hb(21),
      },
      {
        id: "ct_s3_23",
        topic: "rules",
        question:
          "You are turning left from a two-lane road into a two-lane road. Which lane should you finish in?",
        choices: [
          "Whichever lane is clear",
          "The right-hand lane, to keep left clear for passing",
          "Either, provided you signal afterwards",
          "The lane closest to the one you came from",
        ],
        correctIndex: 3,
        explanation:
          "You turn from the lane closest to the direction you are going and into the lane closest to the one you came from. That way you cross the fewest lanes of traffic.",
        context:
          "Once you are round and it is safe you can change lanes normally. The manual's warnings sit either side of this: on a right turn do not swing wide to the left first, because the driver behind will read it as a lane change and try to pass on the right; on a left turn do not cut the corner so sharply that you meet someone coming the other way.",
        trap: "Sweeping into the far lane out of a turn is a common road-test failure and it puts you across traffic that never saw you coming.",
        excerptKey: "turning-lane-choice",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Turning",
        sourceUrl: hb(25),
      },
      {
        id: "ct_s3_24",
        topic: "impairment",
        question:
          "Which of these does the manual identify as a group at particular risk of a fatigue-related crash?",
        choices: [
          "People aged 16 to 24",
          "Drivers over 65",
          "People who drive fewer than 5,000 miles a year",
          "Drivers of automatic transmission vehicles",
        ],
        correctIndex: 0,
        explanation:
          "Sixteen to twenty-four year olds need more sleep than the average adult, and the manual singles them out as regularly sleep-deprived and at special risk.",
        context:
          "The other named groups are people with untreated sleep disorders and shift workers. Fatigue impairs vision and judgment the way alcohol does, and the manual's remedies are specific: stop driving, take a 15 to 20 minute nap, use caffeine but do not rely on it, and avoid driving between midnight and 6 a.m. The best fix is sleep.",
        trap: "Fatigue does not feel like impairment, it feels like being tired, so drivers negotiate with it in a way they would not with alcohol.",
        excerptKey: "fatigue-young-adults",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Fatigue",
        sourceUrl: hb(30),
      },
      {
        id: "ct_s3_25",
        topic: "signs",
        question:
          "You pass a sign reading DIVIDED HIGHWAY BEGINS. What does it mean for you?",
        choices: [
          "The road ahead splits into two one-way roadways and you keep right",
          "The road ahead narrows to one lane",
          "You are joining a limited-access highway",
          "Passing is now permitted",
        ],
        correctIndex: 0,
        explanation:
          "A median or divider is about to separate the two directions, each becoming one-way. You keep right of the divider.",
        context:
          "Its opposite number is the two-way roadway sign, which tells you the divider is ending and oncoming traffic will be sharing the pavement again. Missing that transition is how drivers end up head-on, which is why WRONG WAY and DO NOT ENTER signs cluster around divided-highway crossovers.",
        trap: "Divided is not the same as limited access. A divided highway can still have driveways, crossings and traffic lights on it.",
        excerptKey: "divided-highway-begins",
        sourceLabel: "Connecticut Driver's Manual - Chapter 5, Warning Signs",
        sourceUrl: hb(52),
      },
      {
        id: "ct_s3_26",
        topic: "rightOfWay",
        question:
          "A pedestrian with a white cane is standing at the curb, and you have a green light. What must you do?",
        choices: [
          "Proceed, because the green light gives you the right of way",
          "Stop and stay stopped until they are out of the road",
          "Sound the horn once to let them know you are there",
          "Edge forward slowly past them",
        ],
        correctIndex: 1,
        explanation:
          "A pedestrian with a white cane or a guide dog has absolute right of way in Connecticut. At a signalized intersection you stay stopped until they are clear of the road, green light or not.",
        context:
          "The manual pairs the duty with a prohibition: do not use your horn, because it can confuse or frighten someone navigating by sound. The white cane may have a colored tip or none - the rule is the same either way.",
        trap: "\"Absolute\" is doing real work here. This is one of the few right-of-way rules in the manual that a green light does not modify.",
        excerptKey: "white-cane-green-light",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, White Canes and Guide Dogs",
        sourceUrl: hb(18),
        commonlyMissed: true,
      },
      {
        id: "ct_s3_27",
        topic: "licensing",
        question:
          "A 17 year old is convicted of a second graduated-license violation, such as breaking the passenger rule twice. What does the DMV do?",
        choices: [
          "Issues a warning letter",
          "Suspends the license for 30 days",
          "Suspends the license for 90 days",
          "Suspends the license for six months, or until age 18 if that is longer",
        ],
        correctIndex: 3,
        explanation:
          "A first graduated-license violation costs 30 days. A second, and every one after, costs six months or until the driver turns 18, whichever is longer, plus a $175 restoration fee.",
        context:
          "The graduated-license offenses are grouped together under section 14-36g: passenger restrictions, the curfew, operating a public service or vanpool vehicle, carrying more passengers than seat belts, and carrying a passenger on a motorcycle within six months of the endorsement. Cell phone use, speeding 20 over, reckless driving and street racing carry their own separate ladders.",
        trap: "The jump from 30 days to six months on the second offense surprises people, and it is exactly the kind of exact penalty Connecticut's test asks about.",
        excerptKey: "statute-gdl-30-day-suspension",
        sourceLabel: "Connecticut General Statutes - Section 14-36g, Penalties",
        sourceUrl: stat("246", "14-36g"),
        commonlyMissed: true,
      },
      {
        id: "ct_s3_28",
        topic: "safety",
        question:
          "You feel the steering go light and the car begins to float on standing water. What does the manual tell you to do?",
        choices: [
          "Brake firmly to break through the water",
          "Accelerate to push the water aside",
          "Steer hard toward the shoulder",
          "Ease off the gas and keep the wheel straight",
        ],
        correctIndex: 3,
        explanation:
          "Ease off the accelerator and hold the wheel straight. Do not try to stop or turn until the tires are gripping again.",
        context:
          "Most tires hold on wet pavement up to about 35 mph. Past that they start to ride up on the water like water skis, and worn tires lose grip at much lower speeds. The only real prevention is slowing down in the rain, and the penny test on tread depth is the manual's way of checking whether your tires are still up to it.",
        trap: "Braking is the reflex and it is precisely wrong: with the tires floating there is nothing for the brakes to work against.",
        excerptKey: "hydroplaning-response",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Water on the Roadway",
        sourceUrl: hb(27),
      },
      {
        id: "ct_s3_29",
        topic: "signals",
        question:
          "What does a solid white line painted between two lanes going the same direction tell you?",
        choices: [
          "Lane changing is banned outright",
          "Stay in your lane unless a special situation requires the change",
          "The lane to your right is for buses",
          "Passing is permitted on that side only",
        ],
        correctIndex: 1,
        explanation:
          "A single solid white line discourages the change rather than banning it: stay in your lane unless a special situation requires you to move.",
        context:
          "The outright ban belongs to the double solid white line, which prohibits lane changing. A dashed white line means change freely when it is safe. Getting the three straight is worth doing, because they appear together at highway exits where the decision has to be made quickly.",
        trap: "Single solid white and double solid white are treated as the same by most drivers. The manual distinguishes them, and so does the test.",
        excerptKey: "solid-white-lines",
        sourceLabel: "Connecticut Driver's Manual - Chapter 5, Lane Lines",
        sourceUrl: hb(45),
      },
      {
        id: "ct_s3_30",
        topic: "emergencies",
        question:
          "The accelerator sticks wide open on a Connecticut highway. What is the correct sequence?",
        choices: [
          "Turn off the ignition first, then coast to the shoulder",
          "Brake hard and hold it until the car stops",
          "Shift to neutral, pull off the road, then turn off the engine",
          "Pull the parking brake and steer toward the median",
        ],
        correctIndex: 2,
        explanation:
          "Eyes on the road, shift quickly to neutral, get off the road when it is safe, then switch off the engine. Neutral disconnects the engine from the wheels while you keep steering and braking.",
        context:
          "The reason the engine goes off last is the same reason the manual warns against turning the ignition to lock while moving: doing that locks the steering column and you lose control of the car entirely.",
        trap: "Killing the engine first feels decisive. It costs you the power steering and, if you turn it a notch too far, the steering itself.",
        excerptKey: "gas-pedal-sticks",
        sourceLabel: "Connecticut Driver's Manual - Chapter 4, Equipment Failure",
        sourceUrl: hb(42),
      },
      {
        id: "ct_s3_31",
        topic: "speed",
        question:
          "Which of these is the manual's four-second sight-distance rule for?",
        choices: [
          "Checking whether you are driving too fast for how far you can see",
          "Measuring the gap you need to merge",
          "Setting your following distance in the rain",
          "Timing how long a yellow light lasts",
        ],
        correctIndex: 0,
        explanation:
          "It tests your speed against your sight distance. Pick the furthest thing you can see clearly and count to four one-thousands; if you reach it first, you are outrunning your own vision.",
        context:
          "The manual puts it under slow-moving vehicles and repeats it under night driving, where it is the check on whether you are overdriving your headlights. It is a different tool from the three-second following rule, which measures the gap to the car ahead rather than the distance to the furthest thing you can see.",
        trap: "Three seconds and four seconds each mean two different things in this manual. The sight-distance rule is about how fast, not how close.",
        excerptKey: "four-second-sight-distance",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Slow Moving Vehicles",
        sourceUrl: hb(28),
      },
      {
        id: "ct_s3_32",
        topic: "rules",
        question:
          "Connecticut's statute requires lighted lamps at night, in precipitation, and in one more circumstance. What is it?",
        choices: [
          "Whenever you are on a limited-access highway",
          "Whenever people and vehicles are not clearly visible at 500 feet ahead",
          "Whenever you are within a school zone",
          "Whenever the temperature is below freezing",
        ],
        correctIndex: 1,
        explanation:
          "Five hundred feet is the statutory test. If insufficient light or unfavorable atmospheric conditions mean you cannot clearly make out people and vehicles at that distance, the lamps go on.",
        context:
          "The three triggers in section 14-96a are the clock, the visibility test and precipitation. The clock rule runs from half an hour after sunset to half an hour before sunrise, which is wider than most people assume and covers the dusk when a dark car genuinely disappears.",
        trap: "Drivers wait for it to look dark. The statute uses a measured distance precisely because the eye adapts and does not notice.",
        excerptKey: "statute-lights-precipitation",
        sourceLabel: "Connecticut General Statutes - Section 14-96a, Lighted lamps required",
        sourceUrl: stat("246", "14-96a"),
      },
      {
        id: "ct_s3_33",
        topic: "sharing",
        question:
          "A cyclist is riding in the middle of a narrow Connecticut lane instead of hugging the edge. What should you assume?",
        choices: [
          "They are riding illegally and should be passed at once",
          "They are taking the lane because it is too narrow to share safely",
          "They intend to turn left",
          "They want you to sound your horn",
        ],
        correctIndex: 1,
        explanation:
          "Where a lane is too narrow for a car and a bike side by side, the cyclist takes the travel lane. That is a legitimate and expected position, not a provocation.",
        context:
          "Cyclists are treated as vehicles on Connecticut roadways with the same rights and duties as you. They may also use the full lane where the shoulder or bike lane is unsafe because of sand, gravel or debris, and they may use the left edge of a right-turn lane when going straight. You still owe them three feet when you pass.",
        trap: "Honking at a rider who has taken the lane is both unsafe and the wrong reading of the rule. The manual warns that a horn can startle a rider into your path.",
        excerptKey: "bicyclist-takes-the-lane",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Bicyclists",
        sourceUrl: hb(19),
      },
      {
        id: "ct_s3_34",
        topic: "parking",
        question:
          "Which of these is a legal reason to drive in a marked Connecticut bicycle lane?",
        choices: [
          "Entering or leaving a driveway or alley",
          "Passing a slow-moving car ahead",
          "Waiting to make a right turn",
          "Letting a passenger out",
        ],
        correctIndex: 0,
        explanation:
          "Crossing a bike lane to enter or leave an alley or driveway is one of the listed exceptions, along with official duties, police direction and an emergency. Nothing else qualifies.",
        context:
          "You may turn across a bike lane but you may not drive along it while approaching a turn, and you must yield to any cyclist in it. Stopping or parking there is on the manual's no-parking list, and fines are doubled for failing to yield the right of way to a cyclist.",
        trap: "Merging into the bike lane early to set up a right turn is standard practice in some states. Connecticut's manual specifically forbids it.",
        excerptKey: "bike-lane-no-parking",
        sourceLabel: "Connecticut Driver's Manual - Chapter 3, Bicyclists",
        sourceUrl: hb(19),
      },
      {
        id: "ct_s3_35",
        topic: "signs",
        question:
          "You see a fluorescent yellow-green diamond sign. What sort of warning is it?",
        choices: [
          "Construction ahead",
          "A change in road surface",
          "A pedestrian, bicycle or school warning",
          "An emergency vehicle crossing",
        ],
        correctIndex: 2,
        explanation:
          "Fluorescent yellow-green is reserved in Connecticut for pedestrian, bicycle and school warnings. The unusual color exists to make those signs stand out from ordinary yellow ones.",
        context:
          "It slots into the color system beside the six main colors. Regular yellow warns about the road itself; the fluorescent shade warns about vulnerable people using it. If you see it, expect someone on foot or on two wheels rather than a bend or a bump.",
        trap: "It reads as \"a brighter yellow\" and gets treated as an ordinary warning. The color is the whole message.",
        excerptKey: "color-fluorescent-yellow-green",
        sourceLabel: "Connecticut Driver's Manual - Chapter 5, Traffic Signs, Colors",
        sourceUrl: hb(49),
      },
    ],
  },
];
