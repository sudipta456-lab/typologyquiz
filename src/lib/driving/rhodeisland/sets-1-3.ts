import type { DrivingTestSet } from "../types";

// Every fact below was checked against the Rhode Island Driver's Manual,
// April 2024 edition, published by the Rhode Island Division of Motor Vehicles,
// plus Title 31 of the Rhode Island General Laws and five dmv.ri.gov pages that
// carry rules the manual states incompletely or not at all.
//
// Rhode Island's manual is 87 pages and unusually chatty, but it is thin in
// four places the 40-question exam still draws on:
//
// 1. Speed. The manual states exactly one sentence of numbers - "25 miles per
//    hour (mph) in residential areas and 50-65 mph on most highways" - and
//    nothing else. The prima facie limits, including the 45 mph unposted NIGHT
//    limit and the 20 mph school zone within 300 feet, are in 31-14-2.
// 2. Railroad crossings. The manual says to stop when signals flash but never
//    says where. The 50-feet-to-15-feet band is in 31-20-1.
// 3. School buses. The manual gives the duty but not the 50-foot minimum
//    following distance behind a bus, which is in 31-20-12.
// 4. The knowledge exam's pass mark, which the DMV never publishes anywhere.
//
// One rule in the manual is simply out of date. Its cell-phone section frames
// the adult rule as a texting ban, which was correct when the April 2024
// edition went to press. Section 31-22-30 was amended effective 2 July 2025 to
// prohibit using a wireless handset while driving "for any other purpose" as
// well, with a hands-free exception, and to define driving so that it covers
// sitting at a red light. Questions on that rule follow the LAW, and say so.
//
// One genuine conflict is flagged where it arises. On school-bus penalties the
// manual says "a fine between $250 to $500 and/or suspension of your driver's
// license for a period up to thirty (30) days" for a FIRST violation, while
// 31-20-12 sets the first offense at a fine "not to exceed three hundred
// dollars ($300)" and puts the $300-to-$500 mandatory band on subsequent
// offenses. No question here asks for that number; the school-bus questions
// are built on the duty, which both sources state identically.
//
// Questions are original. Explanations, context notes and trap notes are
// written from scratch; the deep link is there so the learner reads the DMV's
// own authoritative wording on the government's site.
const HB = "https://dmv.ri.gov/media/966/download?language=en";
const hb = (page: number) => `${HB}#page=${page}`;
const rigl = (section: string) => {
  const parts = section.split("-");
  return `https://webserver.rilegislature.gov/Statutes/TITLE31/${parts[0]}-${parts[1]}/${section}.htm`;
};
const KNOWLEDGE = "https://dmv.ri.gov/licenses-permits-ids/permits-tests/knowledge-exams";
const NEWPERMIT = "https://dmv.ri.gov/licenses-permits-ids/permits-tests/new-license-permits";
const ROADTEST = "https://dmv.ri.gov/licenses-permits-ids/permits-tests/road-tests";

export const rhodeislandSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Rhode Island Basics",
    difficulty: "starter",
    description:
      "The rules you meet on your first drive in Rhode Island: what the shapes and colors mean, who goes first, and the handful of numbers the DMV's 40-question knowledge exam expects you to know cold.",
    questions: [
      {
        id: "ri_s1_01",
        topic: "signs",
        question:
          "You reach a red eight-sided sign at an intersection. What does Rhode Island's manual say a stop actually involves?",
        choices: [
          "Slowing to walking pace and rolling through if nothing is coming",
          "Stopping only when another vehicle is close enough to matter",
          "Completely ceasing all forward motion for at least three seconds",
          "Stopping for one second, which is long enough to check both ways",
        ],
        correctIndex: 2,
        explanation:
          "Rhode Island puts a clock on the stop. The manual asks you to cease all forward motion for a minimum of three seconds, which is roughly how long it takes to look left, right, center and left again before you move.",
        context:
          "The octagon is reserved for STOP and nothing else, so the shape alone tells you what to do even when the word is covered in snow. Where you stop is set separately: the crosswalk on the near side, or a marked stop line if there is one, or the point nearest the intersecting road where you can actually see. Only after the stop do you look at who has the right of way.",
        trap:
          "Almost every other state teaches \"a complete stop\" and stops there. Rhode Island prints a number, and its examiners watch for it - a rolling stop is the failure people report most often.",
        excerptKey: "stop-three-seconds",
        sourceLabel: "Rhode Island Driver's Manual - Section III Stopping and Parking",
        sourceUrl: hb(31),
        commonlyMissed: true,
      },
      {
        id: "ri_s1_02",
        topic: "signals",
        question:
          "You are stopped at a steady red light in Rhode Island and want to turn right. What does the manual allow?",
        choices: [
          "Turn without stopping as long as the way is clear",
          "Turn after a complete stop, unless a sign prohibits it, yielding to pedestrians and other traffic",
          "Turn only when a green arrow appears for your lane",
          "Turn only where a sign expressly permits a right on red",
        ],
        correctIndex: 1,
        explanation:
          "Right on red is Rhode Island's default rather than a special permission. Two things attach to it: you must actually stop first, and a posted sign forbidding the turn overrides the default. Having stopped, you give way to pedestrians and to everyone else.",
        context:
          "The manual is careful to add that the turn is permitted, not required - nobody can lawfully make you turn right on red if you would rather wait for green. Rhode Island does not carve out a left on red from one one-way street onto another the way some states do; the statute's only turn-on-red permission is the right turn.",
        trap:
          "\"Clear enough to go\" is not the test. If you never came to a stop, the turn is unlawful on an empty street at 3 am.",
        excerptKey: "right-on-red",
        sourceLabel: "Rhode Island Driver's Manual - Section IV Traffic Lights/Signals",
        sourceUrl: hb(41),
        commonlyMissed: true,
      },
      {
        id: "ri_s1_03",
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
          "Rhode Island's tie-breaker is the driver on your right. It only comes into play when arrival is genuinely simultaneous - if one of you clearly stopped first, that driver goes first.",
        context:
          "The manual sets out four-way stops as an order of arrival: you yield to everyone who stopped before you arrived, everyone arriving after you yields to you, and the right-hand rule breaks the tie. The same rule appears in the statute for uncontrolled intersections, so it is worth learning once and applying everywhere.",
        trap:
          "Going straight does not outrank turning at a four-way stop. Order of arrival decides it, and the right-hand rule is only the tie-break.",
        excerptKey: "four-way-stop-tie",
        sourceLabel: "Rhode Island Driver's Manual - Section III Four-Way Stops",
        sourceUrl: hb(32),
      },
      {
        id: "ri_s1_04",
        topic: "rules",
        question: "What following distance does the Rhode Island manual teach in good conditions?",
        choices: [
          "Three seconds",
          "One car length for every 10 mph",
          "Two seconds",
          "Four seconds",
        ],
        correctIndex: 0,
        explanation:
          "Rhode Island teaches the three-second rule. You pick a fixed object ahead, start counting when the vehicle in front passes it, and if your front bumper reaches the object before you finish counting to three you are too close.",
        context:
          "The manual is explicit that three seconds works in most situations but cannot guarantee you the room to stop. Bad weather or a poor road surface each add a second, so a wet night behind a truck is four or five seconds, not three. Behind a motorcycle the manual sets a separate minimum of four seconds.",
        trap:
          "Car lengths are useless at speed, because the gap you need grows with speed and the car does not. Rhode Island counts in seconds for exactly that reason.",
        excerptKey: "three-second-count",
        sourceLabel: "Rhode Island Driver's Manual - Section VII The Three Second Rule",
        sourceUrl: hb(51),
      },
      {
        id: "ri_s1_05",
        topic: "safety",
        question:
          "It is raining in the middle of the afternoon and you switch your windshield wipers on. What does Rhode Island law require?",
        choices: [
          "Nothing, because headlights are only required after dark",
          "Parking lights, which are enough in daylight",
          "Hazard flashers, so you can be seen from behind",
          "Your headlights on as well",
        ],
        correctIndex: 3,
        explanation:
          "Rhode Island ties the wipers to the headlights by law. Once the wipers are running because of weather, the headlights go on, whatever the clock says.",
        context:
          "The manual gives you three separate headlight triggers, and any one of them is enough: sunset to sunrise, any time you cannot see 500 feet ahead, and any time the wipers are in use because of rain, sleet or snow. The statute adds that in reduced visibility you use LOW beams, because high beams bounce back off rain, snow and fog and shorten your view.",
        trap:
          "Some states offer the wipers-and-headlights link as friendly advice. In Rhode Island it is in section 31-24-1, so \"only after dark\" is wrong here.",
        excerptKey: "headlights-when-required",
        sourceLabel: "Rhode Island Driver's Manual - Section VIII Night Driving",
        sourceUrl: hb(52),
        commonlyMissed: true,
      },
      {
        id: "ri_s1_06",
        topic: "signs",
        question: "A downward-pointing triangle with a red border faces you. What must you do?",
        choices: [
          "Stop completely, then proceed when clear",
          "Slow to a speed reasonable for the conditions, and stop if safety requires it",
          "Maintain speed, since the sign is only advisory",
          "Sound your horn before entering the intersection",
        ],
        correctIndex: 1,
        explanation:
          "A yield sign asks you to slow down and give way. Stopping is required only when safety demands it - but the moment it does, stopping is compulsory rather than optional.",
        context:
          "The triangle is the only three-sided sign on the road, so its shape alone identifies it. Yield is the lighter cousin of stop: no automatic halt, but no right to push in either. Rhode Island applies the same logic to an intersection with no signs or signals at all, which the manual tells you to treat as though a yield sign were standing there.",
        trap:
          "Yield does not mean \"stop\", and it does not mean \"carry on regardless\". If a gap does not exist, you have to stop and wait for one.",
        excerptKey: "rigl-yield-sign",
        sourceLabel: "Rhode Island General Laws 31-17-4 - Vehicle entering stop or yield intersection",
        sourceUrl: rigl("31-17-4"),
      },
      {
        id: "ri_s1_07",
        topic: "speed",
        question:
          "There is no speed limit sign anywhere on a residential street in Providence. What speed does Rhode Island law treat as the limit?",
        choices: ["20 mph", "30 mph", "25 mph", "35 mph"],
        correctIndex: 2,
        explanation:
          "Rhode Island's prima facie limit in any business or residence district is 25 mph. The manual states the same figure for residential areas, and it applies whether or not a sign is posted.",
        context:
          "Prima facie means the number is presumed reasonable rather than absolute: exceed it and the burden shifts to you to show your speed was safe, and drive under it in bad conditions and you can still be cited for driving too fast. Away from business and residence districts the unposted figures change with the light - 50 mph in the daytime and 45 mph at night.",
        trap:
          "A missing sign is not a missing limit. Rhode Island supplies one by statute, and 25 is the number for anywhere built up.",
        excerptKey: "rigl-prima-facie-limits",
        sourceLabel: "Rhode Island General Laws 31-14-2 - Prima facie limits",
        sourceUrl: rigl("31-14-2"),
        commonlyMissed: true,
      },
      {
        id: "ri_s1_08",
        topic: "parking",
        question: "How close to a fire hydrant may you legally park in Rhode Island?",
        choices: [
          "No closer than 8 feet",
          "No closer than 10 feet",
          "No closer than 15 feet",
          "No closer than 20 feet",
        ],
        correctIndex: 0,
        explanation:
          "Rhode Island uses 8 feet. The manual and section 31-21-4 both state it, and it is one of the few numbers where Rhode Island is out of step with almost every neighboring state.",
        context:
          "The rest of the parking list is just as specific and just as worth memorizing: 20 feet from a crosswalk at an intersection, 30 feet from a stop sign, traffic light or flashing beacon, 50 feet from the nearest rail of a railroad crossing, and 20 feet from a fire station driveway - or 75 feet if you are on the opposite side of the street and it is signed.",
        trap:
          "Fifteen feet is the figure most of the country uses and the one generic practice tests give. In Rhode Island it is 8, and answering 15 costs you the mark.",
        excerptKey: "no-park-hydrant-crosswalk",
        sourceLabel: "Rhode Island Driver's Manual - Section III Where you may not park or stop",
        sourceUrl: hb(33),
        commonlyMissed: true,
      },
      {
        id: "ri_s1_09",
        topic: "licensing",
        question:
          "You are 16 and have just been issued a Limited Instruction Permit. How long must you hold it before you can take the driving skills test?",
        choices: ["Three months", "Six months", "Nine months", "Twelve months"],
        correctIndex: 1,
        explanation:
          "Six months. The manual and the DMV's road test page agree: an under-18 permit holder must hold the permit for at least six months before the first scheduled skills test.",
        context:
          "That six months runs alongside two other requirements. You must not have been convicted of a moving violation or a seat belt infraction during it, and you must log 50 hours of supervised driving with 10 of them at night. Applicants who are 18 or over follow a different clock entirely - they need only hold the permit 30 days.",
        trap:
          "The 30-day figure is real, but it belongs to adults. If you are under 18 it is six months, and being close to your eighteenth birthday does not shorten it.",
        excerptKey: "permit-hold-six-months",
        sourceLabel: "Rhode Island Driver's Manual - Section I Applying For a License",
        sourceUrl: hb(12),
      },
      {
        id: "ri_s1_10",
        topic: "impairment",
        question:
          "At what blood alcohol concentration is a driver of any age in Rhode Island charged with driving under the influence?",
        choices: ["0.05 percent", "0.02 percent", "0.08 percent", "0.10 percent"],
        correctIndex: 2,
        explanation:
          "0.08 percent is the figure at which any driver, whatever their age, is treated as intoxicated and charged with DUI. It is stated in the manual and in section 31-27-2.",
        context:
          "That is a ceiling rather than a safe level. Rhode Island can convict on other evidence - an officer's observations or a drug recognition expert - without any number at all, and a driver under 21 is already committing an offense at 0.02 percent. The manual's blunt summary is that a drink or two multiplies your collision risk sevenfold.",
        trap:
          "0.10 was the national threshold decades ago and still turns up in old study material. Rhode Island's figure has been 0.08 for years.",
        excerptKey: "bac-08-any-age",
        sourceLabel: "Rhode Island Driver's Manual - Section X Blood Alcohol Concentration",
        sourceUrl: hb(61),
      },
      {
        id: "ri_s1_11",
        topic: "sharing",
        question:
          "A school bus ahead of you switches on its flashing red lights on an undivided two-lane road. What must you do?",
        choices: [
          "Slow to 20 mph and pass with care",
          "Stop only if you are behind the bus, because oncoming traffic is exempt",
          "Pass on the left once the children have crossed",
          "Stop and stay stopped until the red lights stop flashing, whichever direction you came from",
        ],
        correctIndex: 3,
        explanation:
          "Rhode Island requires traffic approaching from either direction to come to a full stop and remain stopped until the bus's red lights stop flashing. There is no allowance for passing slowly.",
        context:
          "This duty is wider than most drivers assume. The manual says it applies not only on public highways but also on private roads and in parking lots, so a bus loading in a supermarket lot commands the same stop as one on a state road. The only exception is a divided highway when the bus is on the other roadway.",
        trap:
          "Oncoming traffic is not excused on an ordinary two-lane road. The exemption applies only where a physical divider separates the roadways.",
        excerptKey: "school-bus-stop",
        sourceLabel: "Rhode Island Driver's Manual - Section VIII School Buses",
        sourceUrl: hb(54),
        commonlyMissed: true,
      },
      {
        id: "ri_s1_12",
        topic: "signals",
        question: "You approach a traffic light showing a flashing red signal. How should you treat it?",
        choices: [
          "As a stop sign",
          "As a yield sign",
          "As a green light, since the intersection is unregulated",
          "As a signal that the light is broken and should be ignored",
        ],
        correctIndex: 0,
        explanation:
          "A flashing red is a stop sign in lamp form. You make a full stop, yield to traffic on your right and left, and move off only when it is safe.",
        context:
          "Flashing signals come in a pair and mean different things. Flashing red is a stop; flashing yellow tells you to slow down, cover the brake and proceed with caution. The manual defines covering the brake precisely - foot off the accelerator and hovering over the brake pedal without touching it.",
        trap:
          "A flashing yellow arrow is a different animal again. It lets you turn, but only after yielding to oncoming traffic, which has a steady green.",
        excerptKey: "flashing-red",
        sourceLabel: "Rhode Island Driver's Manual - Section IV Traffic Lights/Signals",
        sourceUrl: hb(42),
      },
      {
        id: "ri_s1_13",
        topic: "rules",
        question:
          "How far ahead does Rhode Island law require you to signal before a turn or a lane change?",
        choices: [
          "50 feet",
          "At least 100 feet",
          "200 feet",
          "Whatever distance feels safe, since no figure is set",
        ],
        correctIndex: 1,
        explanation:
          "At least 100 feet. The manual states it twice, and section 31-16-6 requires the signal to run continuously through the last 100 feet before you turn.",
        context:
          "The same 100 feet turns up in two other places worth knowing. A lane change on the highway is signaled within 100 feet, and you may not enter a center two-way left-turn lane unless you intend to turn within 100 feet. Rhode Island also expects a signal when you pull out of a parking space.",
        trap:
          "\"When you start braking\" is too late. The signal exists to warn the driver behind you before you slow down, not while you are already slowing.",
        excerptKey: "signal-100-feet",
        sourceLabel: "Rhode Island Driver's Manual - Section IV Signals",
        sourceUrl: hb(38),
        commonlyMissed: true,
      },
      {
        id: "ri_s1_14",
        topic: "emergencies",
        question:
          "You have been in a minor collision on a Rhode Island street. Nobody appears hurt. What does the manual tell you to do first?",
        choices: [
          "Exchange details by text and drive on, since nobody was injured",
          "Wait in your car for the other driver to call the police",
          "Stop your vehicle immediately and stay at the scene, making your identity known",
          "Move both vehicles to a parking lot before speaking to anyone",
        ],
        correctIndex: 2,
        explanation:
          "Stopping and staying is the first duty in Rhode Island. You remain at the scene and make your identity known to anyone with an interest, and the manual warns that severe penalties follow for drivers who leave without identifying themselves.",
        context:
          "Once you have stopped, the manual asks you to report the collision to the nearest state or local police and to call for rescue if anyone is hurt. A police report is required if someone is injured, if damage exceeds $1,000, if you hit an unattended vehicle, or if you hit a domesticated animal. Moving a lightly damaged car out of the traffic lane is allowed once those steps are underway.",
        trap:
          "\"No injuries\" does not turn a collision into a private matter. Leaving before identifying yourself is a hit and run whatever the damage looks like.",
        excerptKey: "collision-steps",
        sourceLabel: "Rhode Island Driver's Manual - Section XI In Case of a Collision",
        sourceUrl: hb(65),
      },
      {
        id: "ri_s1_15",
        topic: "safety",
        question:
          "A police officer sees an unbelted passenger in the back seat of your car. What can they do in Rhode Island?",
        choices: [
          "Nothing, because the rear seat is exempt",
          "Nothing unless they have already stopped you for something else",
          "Warn you, but no fine can be issued for a rear-seat passenger",
          "Pull you over for that alone, because the seat belt law is a primary law for all ages",
        ],
        correctIndex: 3,
        explanation:
          "Rhode Island's seat belt law is primary for every age and every seating position. An unbuckled occupant is on its own a lawful reason to stop the car, and the fine runs at $40 per occupant.",
        context:
          "The driver carries the responsibility. The statute makes the operator answerable for every passenger aged 18 or over as well as for themselves, and separately for every passenger under 18 in any seat. On a learner permit the manual repeats it: all passengers must be belted or in a child restraint.",
        trap:
          "Rhode Island used to enforce this only as a secondary offense, and plenty of older drivers still believe that. The manual states plainly that it is a primary law now.",
        excerptKey: "seatbelt-primary-law",
        sourceLabel: "Rhode Island Driver's Manual - Section III Safety Belt/Child Restraint Law",
        sourceUrl: hb(26),
        commonlyMissed: true,
      },
      {
        id: "ri_s1_16",
        topic: "signs",
        question:
          "A single solid yellow line runs along your side of the centerline on a two-lane road. What does it mean for you?",
        choices: [
          "You may not pass or cross the line, apart from exceptions such as a legal turn or an obstruction",
          "You may pass if you can complete the maneuver within 100 feet",
          "You may pass only between sunrise and sunset",
          "The line is advisory and carries no restriction",
        ],
        correctIndex: 0,
        explanation:
          "Yellow separates traffic moving in opposite directions, and a solid yellow line on your side prohibits passing. The manual allows crossing it only for things like a legal turn, an object in the road or a breakdown.",
        context:
          "On a road marked solid on one side and broken on the other, the driver with the broken line may pass with care while the driver with the solid line may not. Broken yellow on both sides means passing is permitted from either direction. White lines separate traffic going the same way, and there the broken lines are the ones that allow a lane change.",
        trap:
          "The color tells you the direction of travel, not whether you may pass. It is the solid-or-broken part that governs passing.",
        excerptKey: "yellow-lines",
        sourceLabel: "Rhode Island Driver's Manual - Section IV Roadway Markings",
        sourceUrl: hb(38),
      },
      {
        id: "ri_s1_17",
        topic: "rightOfWay",
        question:
          "A pedestrian steps into a marked crosswalk on your half of the road, with no traffic signal in place. What must you do?",
        choices: [
          "Sound your horn and continue, since they entered without warning",
          "Yield, slowing down or stopping as needed to let them cross",
          "Continue if you can pass behind them without contact",
          "Yield only if they are already past the centerline",
        ],
        correctIndex: 1,
        explanation:
          "Where no signal is operating you yield to a pedestrian in a crosswalk on your half of the road, slowing or stopping as needed. The duty also applies when they are approaching from the other half closely enough to be in danger.",
        context:
          "The manual goes further than the statute in one respect worth remembering: even where a pedestrian crosses carelessly, the driver must always yield. It also reminds you that any intersection of public roads is a legal crosswalk whether it is painted or not, so the absence of white stripes does not mean the absence of a crosswalk.",
        trap:
          "\"They stepped out without looking\" changes nothing about your duty. The exception in the statute is narrow - a pedestrian who leaves the curb so suddenly that yielding is impossible.",
        excerptKey: "rigl-crosswalk-yield",
        sourceLabel: "Rhode Island General Laws 31-18-3 - Right-of-way in crosswalk",
        sourceUrl: rigl("31-18-3"),
      },
      {
        id: "ri_s1_18",
        topic: "speed",
        question:
          "The sign says 45 mph, but freezing rain has turned the road slick. How fast may you drive under Rhode Island's Basic Speed Law?",
        choices: [
          "45 mph, because the posted limit is what governs",
          "40 mph, since 5 mph under the limit is the recognized allowance",
          "Only as fast as the road conditions safely allow, which may be far below 45",
          "Any speed, provided your hazard lights are on",
        ],
        correctIndex: 2,
        explanation:
          "The Basic Speed Law requires you to drive only as fast as conditions allow. The posted number is the maximum for ideal conditions, not a promise that it is safe today.",
        context:
          "Section 31-14-1 states the same principle as a duty to drive at a speed that is reasonable and prudent given the hazards, and 31-14-3 lists the places you must slow down regardless of the sign: approaching intersections and railroad crossings, going around curves, coming to a hill crest, on narrow or winding roads, and near emergency vehicles with their lights on.",
        trap:
          "You can be cited for speeding while under the posted limit. That is exactly what the Basic Speed Law is for.",
        excerptKey: "speed-ideal-conditions",
        sourceLabel: "Rhode Island Driver's Manual - Section III Safe Driving on the Highway",
        sourceUrl: hb(36),
      },
      {
        id: "ri_s1_19",
        topic: "rules",
        question:
          "You are driving on a multi-lane Rhode Island highway and not passing anyone. Which lane should you be in?",
        choices: [
          "Whichever lane is moving fastest",
          "The center lane, so you can move either way",
          "The far-left lane, which keeps you clear of merging traffic",
          "The right lane, unless signs say otherwise",
        ],
        correctIndex: 3,
        explanation:
          "Rhode Island keeps the left lane for passing and the right for through traffic. Unless a sign says otherwise or you are actually overtaking, you belong on the right.",
        context:
          "On a wider highway the manual splits the lanes three ways: far left for passing, the middle lanes for through traffic, and the right lane for slower traffic and for anyone entering or leaving the freeway. The statute puts it as a duty on the slower driver - anyone moving below the normal speed of traffic drives in the right-hand lane.",
        trap:
          "Camping in the left lane at the speed limit is still an offense. Blocking the passing lane is also on the manual's list of behaviors that provoke aggressive driving.",
        excerptKey: "keep-right-unless-passing",
        sourceLabel: "Rhode Island Driver's Manual - Section III Safe Driving on the Highway",
        sourceUrl: hb(36),
      },
      {
        id: "ri_s1_20",
        topic: "licensing",
        question:
          "Who may sit beside you in the front seat while you drive on a Rhode Island Limited Instruction Permit?",
        choices: [
          "A licensed driver at least 21 years old who has held a license for at least five years",
          "Any licensed driver over 18",
          "Any licensed driver who has held a license for one year",
          "A licensed driver at least 25 years old",
        ],
        correctIndex: 0,
        explanation:
          "Rhode Island sets two conditions on the supervising driver and you need both: at least 21 years old, and licensed for at least five years.",
        context:
          "That person must be seated beside you at all times and ready to take over in an emergency, and the manual makes them legally responsible for any driving violation you commit. Nobody other than the supervising driver may sit in the front seat, and everyone in the car must be belted or in a child restraint.",
        trap:
          "A parent who does not hold a valid Rhode Island license can sign your application but cannot supervise you. The manual says they must sit in the back seat during practice driving.",
        excerptKey: "supervising-driver",
        sourceLabel: "Rhode Island Driver's Manual - Section I Limited Learner Permit",
        sourceUrl: hb(11),
      },
      {
        id: "ri_s1_21",
        topic: "sharing",
        question: "How does Rhode Island law treat a bicycle on the roadway?",
        choices: [
          "As a pedestrian, which means it always has the right of way",
          "As a vehicle with the same rights and duties as any other vehicle",
          "As a permitted obstruction that traffic must simply drive around",
          "As a vehicle only where a bicycle lane has been marked",
        ],
        correctIndex: 1,
        explanation:
          "Rhode Island treats a bicycle as a vehicle. Riders get the same rights and carry the same duties as drivers of motor vehicles, which is why they stop at stop signs and you yield to them as you would to a car.",
        context:
          "Some specific rules follow from that. Riders keep as near to the right as practicable and cross the travel lane only to turn left, no more than two may ride side by side, and anyone 15 or younger must wear a certified helmet. When passing, the manual asks for 3 to 5 feet of clearance and warns against sounding the horn, which can startle a rider into swerving.",
        trap:
          "A bicycle's right to the lane does not depend on a painted bike lane. Where the road is too narrow to share safely, the manual expects you to slow down while the rider takes the travel lane.",
        excerptKey: "bicycle-same-rights",
        sourceLabel: "Rhode Island Driver's Manual - Section VIII Bicycle Riders",
        sourceUrl: hb(54),
      },
      {
        id: "ri_s1_22",
        topic: "signals",
        question: "The light ahead turns steady yellow as you approach. What does Rhode Island expect?",
        choices: [
          "Speed up to clear the intersection before the red",
          "Stop immediately, wherever your vehicle happens to be",
          "Slow down and prepare to stop, proceeding only if a stop cannot be made safely",
          "Treat it as a flashing yellow and continue at the same speed",
        ],
        correctIndex: 2,
        explanation:
          "Yellow warns that red is next. You slow and prepare to stop, and you continue through only when stopping safely is no longer possible.",
        context:
          "The manual gives the deciding idea its own name, the point of no return: the distance at which braking would no longer keep you out of the intersection. Judge that before the light changes, not after. The statute puts it from the other side - once yellow shows, the movement that was permitted on green is ending.",
        trap:
          "Accelerating on yellow is how people arrive at a red light at speed. The manual asks you to clear the intersection with caution, not to beat the change.",
        excerptKey: "steady-yellow",
        sourceLabel: "Rhode Island Driver's Manual - Section IV Traffic Lights/Signals",
        sourceUrl: hb(41),
      },
      {
        id: "ri_s1_23",
        topic: "licensing",
        question:
          "What vision standard must you meet at the Rhode Island DMV when you apply for a permit?",
        choices: [
          "20/20 without correction",
          "20/30 with corrective lenses",
          "20/50 with corrective lenses",
          "At least 20/40 with corrective lenses",
        ],
        correctIndex: 3,
        explanation:
          "20/40 with corrective lenses is the standard. The vision test is given at the same appointment as the knowledge exam, or you can bring a Vision Examination Card signed by an ophthalmologist or optometrist.",
        context:
          "If you normally wear glasses or contacts for distance you must wear them for the test, and the DMV will note the restriction on the license. The manual is clear that the screening is part of getting the permit rather than an optional extra.",
        trap:
          "Passing with glasses does not mean the glasses are optional afterwards. The corrective lens restriction follows onto the license.",
        excerptKey: "vision-standard",
        sourceLabel: "Rhode Island Driver's Manual - Section I Limited Learner Permit",
        sourceUrl: hb(11),
      },
      {
        id: "ri_s1_24",
        topic: "parking",
        question:
          "You park on a two-lane Rhode Island street. How far from the curb may your right wheels be?",
        choices: [
          "A maximum of twelve inches",
          "A maximum of eighteen inches",
          "A maximum of two feet",
          "Any distance, provided traffic can still pass",
        ],
        correctIndex: 0,
        explanation:
          "Twelve inches is the limit. The manual sets it for the right wheels on a two-lane road, and the same twelve inches applies on a one-way street, where either side may be used.",
        context:
          "Parking on a one-way street carries a second condition: the vehicle must be headed in the direction traffic goes. Away from town, the statute adds that you should not stop on the traveled part of an open highway at all when it is practical to pull off it, and that a stopped vehicle must be visible for 200 feet in each direction.",
        trap:
          "Being close enough not to block traffic is not the test. Rhode Island prints a number, and it is the number the exam asks for.",
        excerptKey: "park-12-inches",
        sourceLabel: "Rhode Island Driver's Manual - Section III Where you may not park or stop",
        sourceUrl: hb(33),
      },
      {
        id: "ri_s1_25",
        topic: "impairment",
        question:
          "A 19-year-old driver is tested at 0.04 percent blood alcohol concentration in Rhode Island. What happens?",
        choices: [
          "Nothing, because 0.04 is under the legal limit",
          "They are charged with Driving While Impaired, which starts at 0.02 percent under 21",
          "They receive a written warning only",
          "They are charged with DUI on the same terms as an adult",
        ],
        correctIndex: 1,
        explanation:
          "Rhode Island sets a separate threshold for drivers under 21. At 0.02 percent or more but under 0.08 the charge is Driving While Impaired, and it applies to anyone below 21 regardless of how sober they feel.",
        context:
          "A first DWI for an 18-to-21-year-old brings a one-to-three-month license suspension, a $250 fine, community restitution and a special course on driving while intoxicated. Under 18 the suspension runs six to twelve months. At 0.08 or above the charge becomes DUI at any age.",
        trap:
          "0.02 is about one drink for most people. Under 21 the practical rule is zero, because the legal margin is not big enough to plan around.",
        excerptKey: "bac-02-under-21",
        sourceLabel: "Rhode Island Driver's Manual - Section X Blood Alcohol Concentration",
        sourceUrl: hb(61),
        commonlyMissed: true,
      },
      {
        id: "ri_s1_26",
        topic: "emergencies",
        question: "Your car begins to skid on a wet Rhode Island road. What does the manual tell you to do?",
        choices: [
          "Brake hard and hold the wheel straight",
          "Steer away from the skid to counteract it",
          "Ease off the gas, keep off the brake and steer where you want the vehicle to go",
          "Pull the parking brake to slow the rear wheels",
        ],
        correctIndex: 2,
        explanation:
          "Rhode Island's skid recovery is: off the gas, foot away from the brake and the clutch, let the car slow, and look and steer in the direction you want to go. Be ready to correct left and right more than once.",
        context:
          "Most skids start with a driver failing to adjust speed to the road, so the real fix happens earlier. On a slippery road with conventional brakes the manual asks for very gentle pumping; with anti-lock brakes you do the opposite, pressing firmly and holding, because pumping cancels the system. The pedal pulsing under your foot is ABS working, not failing.",
        trap:
          "Braking mid-skid is the instinct and the mistake. It locks the wheels you are trying to steer with.",
        excerptKey: "skid-control",
        sourceLabel: "Rhode Island Driver's Manual - Section V How to Control a Vehicle in a Skid",
        sourceUrl: hb(43),
      },
      {
        id: "ri_s1_27",
        topic: "rules",
        question: "When may you make a U-turn in Rhode Island?",
        choices: [
          "Only at an intersection controlled by a traffic signal",
          "Never on a public road",
          "At any time, provided you signal",
          "Where it is allowed and it does not interfere with the free flow of traffic in either direction",
        ],
        correctIndex: 3,
        explanation:
          "Rhode Island permits a U-turn where it is allowed and where it does not interfere with traffic moving in either direction. A No U-Turn sign or a solid yellow line removes the permission.",
        context:
          "The manual treats a U-turn as one of four kinds of turnabout and sets conditions before any of them: 500 feet of clear visibility in each direction, at least 200 feet from an intersection, no hills or curves blocking your view, no heavy traffic and no pedestrians in your path. You also cannot cross a solid yellow line to do it.",
        trap:
          "\"It looked clear\" is not the standard. The manual's 500-foot visibility and 200-foot distance from an intersection are what an examiner is measuring against.",
        excerptKey: "u-turn-rule",
        sourceLabel: "Rhode Island Driver's Manual - Section III Turnabouts",
        sourceUrl: hb(30),
      },
      {
        id: "ri_s1_28",
        topic: "signs",
        question: "Which colors mark a Rhode Island construction or work zone sign?",
        choices: [
          "Fluorescent yellow-green, orange or pink",
          "Blue and white only",
          "Brown and white, as for recreational areas",
          "Red and white, as for regulatory signs",
        ],
        correctIndex: 0,
        explanation:
          "Work zone signs use high-visibility colors - fluorescent yellow-green, orange or pink - on a diamond or rectangular shape, and they are posted before, within and after the zone.",
        context:
          "Rhode Island backs the signs with money. Speeding fines are doubled inside a designated work zone 24 hours a day, whether or not anyone is working, and the statute requires signs saying so. Flaggers in the zone have legal authority to control traffic, so their hand signals carry the same weight as an officer's.",
        trap:
          "The doubled fine does not switch off overnight or at the weekend. The manual says 24 hours a day.",
        excerptKey: "work-zone-sign-colors",
        sourceLabel: "Rhode Island Driver's Manual - Appendix, Construction and Work Zone Safety",
        sourceUrl: hb(72),
      },
      {
        id: "ri_s1_29",
        topic: "rightOfWay",
        question:
          "An ambulance approaches with lights and siren while you are driving on a two-way street. What must you do?",
        choices: [
          "Speed up to clear the intersection ahead",
          "Pull over to the right, clear of any intersection, stop and stay stopped until it has passed",
          "Move to the left lane so the ambulance can use the right",
          "Slow to 20 mph and continue in your lane",
        ],
        correctIndex: 1,
        explanation:
          "You yield, pull as close as possible to the right-hand edge or curb clear of any intersection, stop, and remain stopped until the emergency vehicle has gone by.",
        context:
          "Stopping inside an intersection is what the statute is guarding against - it blocks the very route the ambulance needs. When you rejoin, the manual asks you to signal, glance over your shoulder to check that a second emergency vehicle is not following, and only then move off. Once it has passed, stay 500 feet back.",
        trap:
          "Pulling left is a natural instinct on a wide road and the wrong one. Emergency drivers plan for everyone moving right.",
        excerptKey: "rigl-emergency-vehicle",
        sourceLabel: "Rhode Island General Laws 31-17-6 - Yielding to emergency vehicle",
        sourceUrl: rigl("31-17-6"),
      },
      {
        id: "ri_s1_30",
        topic: "sharing",
        question: "What following distance does the Rhode Island manual set behind a motorcycle?",
        choices: ["Two seconds", "Three seconds", "At least four seconds", "Six seconds"],
        correctIndex: 2,
        explanation:
          "At least four seconds. The manual sets a longer cushion behind motorcycles than behind cars because riders often slow by downshifting or rolling off the throttle, which never lights the brake lamp.",
        context:
          "The rest of the motorcycle section is about perception rather than distance. A motorcycle's small size makes it look farther away and slower than it is, it hides easily behind a door post or a mirror, and riders shift position within the lane for visibility rather than because they are wandering. The manual's summary is to look twice before you change lanes or turn.",
        trap:
          "Three seconds is the general rule and not enough here. The motorcycle number is four, and the manual states it twice.",
        excerptKey: "motorcycle-four-seconds",
        sourceLabel: "Rhode Island Driver's Manual - Section VI Motorcycles",
        sourceUrl: hb(48),
        commonlyMissed: true,
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Core Rules of the Road",
    difficulty: "easy",
    description:
      "Signals, markings, right of way and the everyday decisions the exam keeps coming back to - passing, parking, sharing the road, and the parts of Rhode Island law the manual states as plain duties.",
    questions: [
      {
        id: "ri_s2_01",
        topic: "signals",
        question:
          "A flashing yellow arrow shows for your left-turn lane while oncoming traffic has a steady green. What may you do?",
        choices: [
          "Turn immediately, because the arrow gives you a protected turn",
          "Wait for a green arrow, since a flashing yellow never permits a turn",
          "Turn only after yielding to oncoming traffic and pedestrians",
          "Stop and wait for the light to cycle again",
        ],
        correctIndex: 2,
        explanation:
          "A flashing yellow arrow permits the turn but protects nothing. You may go once you have yielded to oncoming traffic and to pedestrians, and the manual points out that the oncoming drivers have a steady green.",
        context:
          "The green arrow is the one that protects you: it holds oncoming traffic and gives you the intersection. A red arrow forbids the movement entirely until it goes out. Rhode Island uses the flashing yellow arrow specifically to let left-turners use gaps that a purely protected phase would waste.",
        trap:
          "Yellow of any kind is a warning, not a permission slip. The flashing yellow arrow means \"your turn is allowed, the risk is yours\".",
        excerptKey: "flashing-yellow-arrow",
        sourceLabel: "Rhode Island Driver's Manual - Section IV Traffic Lights/Signals",
        sourceUrl: hb(41),
        commonlyMissed: true,
      },
      {
        id: "ri_s2_02",
        topic: "rules",
        question: "In Rhode Island, when may you pass another vehicle on the right?",
        choices: [
          "Whenever the right lane is moving faster",
          "When the vehicle ahead is turning left, or on a road wide enough for two or more lanes in your direction",
          "Only on a one-way street",
          "Never, under any circumstances",
        ],
        correctIndex: 1,
        explanation:
          "Rhode Island allows a pass on the right in two situations: when the vehicle ahead is making or about to make a left turn, and where the roadway is wide enough for two or more lanes in your direction and free of obstructions and parked cars.",
        context:
          "The same permission covers a one-way street of sufficient width. What it never covers is leaving the pavement: the manual and section 31-15-5 both say the movement may not be made by driving off the main traveled portion of the road, so using the shoulder to get past a left-turner is unlawful.",
        trap:
          "\"The right lane is moving faster\" is not one of the conditions. It is a description of traffic, not a legal permission.",
        excerptKey: "passing-right-conditions",
        sourceLabel: "Rhode Island Driver's Manual - Section III Passing a vehicle on the right",
        sourceUrl: hb(34),
      },
      {
        id: "ri_s2_03",
        topic: "parking",
        question:
          "How close to a stop sign or traffic signal may you park in Rhode Island?",
        choices: [
          "No closer than 15 feet",
          "No closer than 20 feet",
          "No closer than 30 feet",
          "No closer than 50 feet",
        ],
        correctIndex: 2,
        explanation:
          "Thirty feet. The manual and section 31-21-4 both prohibit parking within 30 feet of the approach to a flashing beacon, a stop sign or a traffic control signal.",
        context:
          "The distance exists to protect sight lines and the visibility of the sign itself, which is why it is measured on the approach rather than all round. It sits alongside the 20-foot crosswalk figure and the 8-foot hydrant figure - three different numbers that the exam likes to shuffle.",
        trap:
          "The 20-foot figure belongs to crosswalks and fire station driveways, not to stop signs. Learn the three as a set or they blur together.",
        excerptKey: "rigl-no-parking-30-feet",
        sourceLabel: "Rhode Island General Laws 31-21-4 - Places where parking or stopping prohibited",
        sourceUrl: rigl("31-21-4"),
        commonlyMissed: true,
      },
      {
        id: "ri_s2_04",
        topic: "safety",
        question:
          "You are following a car at night on a dark Rhode Island road. At what distance must you drop your high beams?",
        choices: [
          "When you are 200 feet or less behind the vehicle ahead",
          "When you are 100 feet or less behind the vehicle ahead",
          "Only if the driver ahead flashes their brake lights",
          "There is no distance rule for following, only for oncoming traffic",
        ],
        correctIndex: 0,
        explanation:
          "Two hundred feet is the following figure. The manual calls it the 500/200 rule: dim at 500 feet when you are approaching an oncoming vehicle, and at 200 feet or less when you are following one.",
        context:
          "High beams reflecting off a mirror blind the driver in front just as effectively as they blind an oncoming driver, which is why the two distances exist. If you are blinded by someone else's lights, the manual tells you to glance at the right edge of the road or the fog line until your vision returns, which also keeps you watching for pedestrians near the shoulder.",
        trap:
          "The two numbers are easy to swap. The bigger distance goes with the bigger risk - oncoming traffic at 500 feet.",
        excerptKey: "dim-500-200",
        sourceLabel: "Rhode Island Driver's Manual - Section VIII Dimming your headlights",
        sourceUrl: hb(53),
        commonlyMissed: true,
      },
      {
        id: "ri_s2_05",
        topic: "rightOfWay",
        question:
          "You are entering a single-lane roundabout in Rhode Island with no signs or signals at the entry. Who has the right of way?",
        choices: [
          "You, because traffic already circulating must give way to entering vehicles",
          "Whoever arrives at the entry line first",
          "Traffic entering from the largest road",
          "Vehicles already in the roundabout",
        ],
        correctIndex: 3,
        explanation:
          "Traffic already circulating has the right of way. Section 31-17-8 puts it plainly: a driver about to enter a rotary yields to all vehicles already in it, whatever direction they came from.",
        context:
          "The manual's sequence is enter, proceed, exit. You slow to the posted speed, yield to pedestrians and circulating traffic, wait for a gap, merge counterclockwise, keep moving unless there is an emergency, then signal and exit to the right while yielding to pedestrians again. Roundabouts have no stop signs or signals by design - the yield sign does the work.",
        trap:
          "Stopping inside the circle to let someone in is the wrong kindness. The manual says never stop in a roundabout except in an emergency.",
        excerptKey: "rotary-right-of-way",
        sourceLabel: "Rhode Island Driver's Manual - Section IV Rotary/Roundabout",
        sourceUrl: hb(41),
      },
      {
        id: "ri_s2_06",
        topic: "sharing",
        question:
          "How far back should you stay behind a tractor-trailer according to the Rhode Island manual?",
        choices: [
          "At least 20 feet",
          "At least 50 feet",
          "At least 100 feet",
          "Two car lengths",
        ],
        correctIndex: 1,
        explanation:
          "At least 50 feet. The manual gives you a practical test as well: if you cannot see the truck's side mirrors, the driver cannot see you.",
        context:
          "The blind spots behind a trailer run more than 50 feet, and there are two more in front and along both front sides. The manual calls them no zones and tells you to clear them quickly, pulling ahead or dropping back rather than sitting alongside. Grip the wheel firmly when you do pass, because the airflow between the vehicles pulls them together.",
        trap:
          "Car lengths again fail at speed. The manual's mirror test is the one that works in the moment.",
        excerptKey: "truck-50-feet",
        sourceLabel: "Rhode Island Driver's Manual - Section VIII Sharing The Road With Large Trucks",
        sourceUrl: hb(52),
      },
      {
        id: "ri_s2_07",
        topic: "signs",
        question:
          "A solid white line runs along the far right of the roadway. What does the Rhode Island manual say about it?",
        choices: [
          "It separates opposing traffic and may never be crossed",
          "It marks a lane you may use only during rush hour",
          "It separates traffic moving the same way, and passing or changing lanes across it is restricted",
          "It has no meaning unless a sign accompanies it",
        ],
        correctIndex: 2,
        explanation:
          "White lines separate traffic moving in the same direction. Solid white lines usually sit at the far right or left of the roadway and restrict passing and lane changes; broken white lines allow both.",
        context:
          "Rhode Island's marking system is two-dimensional. The color tells you the directions of travel - yellow for opposing, white for same-way - while solid or broken tells you whether you may cross. A solid line on your side of a two-lane road forbids passing; the driver with the broken line on their side may pass with care.",
        trap:
          "Solid does not mean \"never\". The manual lists exceptions for emergencies, breakdowns, objects in the road, legal turns and parking.",
        excerptKey: "white-lines",
        sourceLabel: "Rhode Island Driver's Manual - Section IV Roadway Markings",
        sourceUrl: hb(38),
      },
      {
        id: "ri_s2_08",
        topic: "impairment",
        question:
          "A Rhode Island officer asks a driver to take a breath test and the driver refuses. What is the minimum license suspension?",
        choices: [
          "30 days",
          "Three months",
          "One year",
          "Six months",
        ],
        correctIndex: 3,
        explanation:
          "Six months is the minimum for a first refusal. The manual also lists a fine, a highway safety assessment, community service, a course on driving while intoxicated and possible referral to treatment.",
        context:
          "Refusal is a separate matter from the drinking. Under implied consent, anyone who operates a motor vehicle in Rhode Island is deemed to have consented to chemical tests of breath, blood, saliva or urine, so the refusal is itself the offense and it can be punished even if the driver was under the limit.",
        trap:
          "Refusing does not make the problem go away. A refusal costs a minimum of six months, longer than the 30-to-180 day suspension a first low-range DUI can carry.",
        excerptKey: "refusal-six-months",
        sourceLabel: "Rhode Island Driver's Manual - Section X Refusal to Take the Breathalyzer Test",
        sourceUrl: hb(61),
        commonlyMissed: true,
      },
      {
        id: "ri_s2_09",
        topic: "rules",
        question:
          "You are backing your car more than 30 feet along a Rhode Island street. What does the manual recommend?",
        choices: [
          "Turning on your hazard lights to warn other motorists",
          "Sounding your horn continuously",
          "Backing at night only",
          "Nothing extra, since backing is always permitted",
        ],
        correctIndex: 0,
        explanation:
          "Beyond about 30 feet the manual recommends switching on the hazard lights so other drivers understand what you are doing.",
        context:
          "The technique matters more than the lights. Rhode Island asks you to look over your right shoulder, turning your body partly around while keeping control of the wheel, and to check the mirrors periodically when backing in a straight line. Learners report that examiners want to see the shoulder check rather than a screen.",
        trap:
          "A backup camera does not replace looking. On the skills test the examiner is watching your head and shoulders, not the display.",
        excerptKey: "backing-30-feet",
        sourceLabel: "Rhode Island Driver's Manual - Section III Proper Backing Procedures",
        sourceUrl: hb(34),
      },
      {
        id: "ri_s2_10",
        topic: "emergencies",
        question:
          "Your brake pedal sinks to the floor while you are driving. What does the Rhode Island manual tell you to try first?",
        choices: [
          "Turn the ignition off immediately",
          "Pump the brake pedal, even if the car has anti-lock brakes",
          "Pull the parking brake up as hard as you can",
          "Shift into a higher gear to slow the engine",
        ],
        correctIndex: 1,
        explanation:
          "Pump the pedal first. The manual says to do it even in a car with anti-lock brakes, because pumping may restore enough fluid pressure to slow you, and three or four pumps will tell you whether the brakes are going to hold.",
        context:
          "The rest of the sequence is downshift to use engine braking, then engage the parking brake, releasing it briefly if the car starts to skid, and look for an open escape route. As a last resort you can rub the wheels against a curb, and if a collision is unavoidable the manual asks you to steer for a sideswipe rather than hit something solid head-on.",
        trap:
          "This is the one time pumping is right in an ABS car. In an ordinary emergency stop, pumping cancels the system - here the system has nothing to work with.",
        excerptKey: "brake-failure-pump",
        sourceLabel: "Rhode Island Driver's Manual - Section V Total Brake Failure",
        sourceUrl: hb(43),
      },
      {
        id: "ri_s2_11",
        topic: "speed",
        question:
          "It is 9 pm on an unlit Rhode Island road outside any town, and no speed limit sign has been posted. What is the prima facie limit?",
        choices: ["25 mph", "45 mph", "50 mph", "55 mph"],
        correctIndex: 1,
        explanation:
          "Forty-five. Away from business and residence districts Rhode Island sets 50 mph in the daytime and 45 mph at night, and 9 pm is nighttime under the statute's definition.",
        context:
          "Section 31-14-2 defines daytime as half an hour before sunrise to half an hour after sunset, and nighttime as any other hour. The manual never prints the 45 at all - its only speed sentence gives 25 mph for residential areas and 50 to 65 mph for most highways - so this is a number the exam can ask about and the book cannot answer.",
        trap:
          "Fifty-five is the figure most states use for unposted rural roads and it is wrong here twice over: Rhode Island's daytime figure is 50 and its night figure is 45.",
        excerptKey: "rigl-daytime-nighttime",
        sourceLabel: "Rhode Island General Laws 31-14-2 - Prima facie limits",
        sourceUrl: rigl("31-14-2"),
        commonlyMissed: true,
      },
      {
        id: "ri_s2_12",
        topic: "licensing",
        question:
          "You fail the Rhode Island computerized knowledge exam. How soon can you take it again?",
        choices: [
          "The same day, at a different DMV location",
          "After 90 days",
          "After 30 days",
          "After at least 8 days",
        ],
        correctIndex: 3,
        explanation:
          "At least 8 days. The DMV's Knowledge Exams page sets the wait, and a new reservation is required for the retest.",
        context:
          "The road test runs on a longer ladder and it is worth not confusing the two: 30 days after a first skills-test failure, 90 days after a second, and 180 days after a third or later one. Reservations are the practical bottleneck at either stage, and Rhode Island learners consistently report checking early on weekday mornings to find slots.",
        trap:
          "Eight days is oddly specific and easy to round to a week or a month. It is 8.",
        excerptKey: "dmv-exam-retest-8-days",
        sourceLabel: "RI DMV - Knowledge Exams",
        sourceUrl: KNOWLEDGE,
      },
      {
        id: "ri_s2_13",
        topic: "safety",
        question:
          "Rhode Island snow has settled on the roof of your car. What does state law require before you drive?",
        choices: [
          "Nothing, provided the windshield is clear",
          "Clearing only the windows and mirrors",
          "Clearing snow and ice that limit vision, and any roof snow that could blow onto other vehicles",
          "Fitting winter tires",
        ],
        correctIndex: 2,
        explanation:
          "Rhode Island makes the motorist responsible for removing snow and ice that limit vision, and for clearing snow from the roof that might blow down onto the windshield or windows of other vehicles.",
        context:
          "The roof half of that rule is the part drivers forget. A slab of ice leaving a roof at highway speed is a projectile, and the manual lists this among the laws you must know rather than among its safety tips. Section 31-22-9 separately makes it an offense to leave snow you have cleared in a condition that creates a hazard on the highway.",
        trap:
          "A clear windshield is not compliance. The law is explicitly about what your snow does to other people.",
        excerptKey: "snow-removal-law",
        sourceLabel: "Rhode Island Driver's Manual - Section IX Laws You Must Know",
        sourceUrl: hb(58),
        commonlyMissed: true,
      },
      {
        id: "ri_s2_14",
        topic: "rightOfWay",
        question:
          "You are turning left at an intersection on a green light while a car approaches from the opposite direction. Who yields?",
        choices: [
          "The oncoming driver, because you entered the intersection first",
          "Neither, since a green light gives both drivers the right of way",
          "The oncoming driver, if they are still more than one car length away",
          "You, because a left-turning driver yields to oncoming traffic close enough to be a hazard",
        ],
        correctIndex: 3,
        explanation:
          "The left-turning driver yields. Section 31-13-6 says traffic turning left on a circular green must give way to oncoming vehicles that are close enough to be an immediate hazard, and 31-17-2 states the same rule for intersections generally.",
        context:
          "The green ball permits the turn without protecting it. Only a green arrow holds the oncoming traffic. You also yield to any pedestrian crossing in the crosswalk you must drive through to complete the turn, and once you have yielded and signaled, the drivers behind the oncoming vehicle must let you finish.",
        trap:
          "There is a persistent local belief that the first car through on a fresh green owns the left turn. Rhode Island drivers joke about it, but the statute does not: straight-through traffic keeps the right of way.",
        excerptKey: "rigl-green-left-turn-yield",
        sourceLabel: "Rhode Island General Laws 31-13-6 - Meaning of traffic control signals",
        sourceUrl: rigl("31-13-6"),
        commonlyMissed: true,
      },
      {
        id: "ri_s2_15",
        topic: "signals",
        question:
          "Your turn signals have failed and you need to turn left. What is the correct hand signal in Rhode Island?",
        choices: [
          "Left hand and arm straight out",
          "Left hand and arm pointing up",
          "Left hand and arm pointing down",
          "Left hand waved up and down",
        ],
        correctIndex: 0,
        explanation:
          "Arm straight out to the left means a left turn. Arm up means right, and arm down means stopping or slowing.",
        context:
          "Rhode Island lets you signal by hand or by lamp, and the statute treats them as equivalent. The same 100-foot rule applies either way, and the manual adds that signals should be given in time for drivers behind you to react - the point is the warning, not the gesture.",
        trap:
          "The up and down signals are the pair that get swapped. Up is right; down is stop.",
        excerptKey: "hand-signals",
        sourceLabel: "Rhode Island Driver's Manual - Section IV Signals",
        sourceUrl: hb(38),
      },
      {
        id: "ri_s2_16",
        topic: "rules",
        question:
          "You are pulling out of a driveway onto a Rhode Island street. What does the manual say you must do?",
        choices: [
          "Sound the horn and proceed slowly",
          "Stop at the sidewalk, then stop again at the curb line",
          "Stop once, at the curb line only",
          "Yield only to vehicles, since pedestrians must watch for you",
        ],
        correctIndex: 1,
        explanation:
          "Two stops. The manual requires a stop at the sidewalk so you can check for people walking, and a second stop at the curb line so you can check for traffic.",
        context:
          "Section 31-17-5 puts the duty in yielding terms: a driver entering a highway from a private road or driveway yields to all vehicles on the highway and to all pedestrians crossing the driveway. Section 31-18-18 adds that anyone crossing a sidewalk yields to traffic already on it.",
        trap:
          "One long look is not two stops. Rhode Island's examiners are checking for the sidewalk stop specifically, because that is where people appear.",
        excerptKey: "driveway-two-stops",
        sourceLabel: "Rhode Island Driver's Manual - Section III Entering the Roadway",
        sourceUrl: hb(33),
      },
      {
        id: "ri_s2_17",
        topic: "sharing",
        question:
          "A pedestrian carrying a white cane is about to cross the street ahead of you. What does Rhode Island require?",
        choices: [
          "Sound your horn to let them know you are there",
          "Slow down and pass behind them",
          "Come to a complete stop before arriving at the intersection and yield",
          "Continue if they have not yet left the curb",
        ],
        correctIndex: 2,
        explanation:
          "You bring the vehicle to a complete stop before you reach the intersection and yield. The duty applies to a pedestrian using a white cane or a guide dog, whether they are crossing or attempting to cross.",
        context:
          "The reason for stopping short is that pedestrians who are visually impaired navigate by the sound of traffic, including your engine. The manual warns that they will not expect you to turn right on red after stopping, and that an electric or hybrid vehicle gives them almost nothing to hear. Failing to yield can bring a fine of up to $1,000.",
        trap:
          "A horn is worse than useless here. It masks the traffic sounds the pedestrian is using to decide when to step off.",
        excerptKey: "visually-impaired-stop",
        sourceLabel: "Rhode Island Driver's Manual - Section VIII Pedestrians with a Visual Impairment",
        sourceUrl: hb(54),
        commonlyMissed: true,
      },
      {
        id: "ri_s2_18",
        topic: "parking",
        question:
          "Which of these is on the Rhode Island manual's list of places you may never park or stop?",
        choices: [
          "On any street with a posted speed limit above 30 mph",
          "Within 100 feet of a school entrance",
          "On any railroad tracks",
          "On any street between midnight and 6 am",
        ],
        correctIndex: 2,
        explanation:
          "Railroad tracks are on the list, along with sidewalks, intersections, bridges and tunnels, driveways, double-parking alongside another parked car, and the traveled portion of the highway itself.",
        context:
          "Rhode Island separates the flat prohibitions from the measured ones. The flat list covers places that are dangerous whatever the distance; the measured list covers hydrants at 8 feet, crosswalks at 20, stop signs and signals at 30, and railroad crossings at 50 feet from the nearest rail. Curb cuts and ramps for people with disabilities are on the flat list too.",
        trap:
          "Parking near a railroad crossing has two different numbers attached. The tracks themselves are forbidden outright; 50 feet is the distance from the nearest rail.",
        excerptKey: "no-park-basic-list",
        sourceLabel: "Rhode Island Driver's Manual - Section III Where you may not park or stop",
        sourceUrl: hb(33),
      },
      {
        id: "ri_s2_19",
        topic: "impairment",
        question:
          "Which of these actually reduces a driver's blood alcohol concentration in Rhode Island?",
        choices: [
          "Strong coffee",
          "A large meal",
          "Fresh air and a brisk walk",
          "Time",
        ],
        correctIndex: 3,
        explanation:
          "Only time. The manual says outright that nothing reduces the effects of alcohol except time, and that coffee, food, fresh air or exercise might wake an intoxicated person up but will not sober them up.",
        context:
          "The body clears alcohol three ways - breathing, perspiring, and oxidation in the liver - and none of them speeds up on demand. That is also why a 12-ounce beer, a 4-to-5-ounce glass of wine and a 1 to 1 1/2 ounce shot of spirits count the same: the alcohol per serving is about equal, so switching drinks changes nothing.",
        trap:
          "\"Awake\" and \"sober\" are not the same state. A wide-awake impaired driver is arguably more dangerous, because they feel capable.",
        excerptKey: "only-time-sobers",
        sourceLabel: "Rhode Island Driver's Manual - Section X Effects of Alcohol",
        sourceUrl: hb(60),
      },
      {
        id: "ri_s2_20",
        topic: "safety",
        question:
          "Rhode Island law sets a minimum tire tread depth. What is it, and how does the manual suggest checking?",
        choices: [
          "4/32 of an inch, checked with a penny",
          "2/32 of an inch, checked with a quarter",
          "1/16 of an inch, checked by eye",
          "3/32 of an inch, checked with a tread gauge only",
        ],
        correctIndex: 1,
        explanation:
          "Two thirty-seconds of an inch, and the manual suggests measuring the depth with a quarter. Section 31-23-45 sets the same figure and lets the DMV suspend a registration until the vehicle complies.",
        context:
          "Tread is only half of tire care. The manual adds that pressure must be measured while the tire is cold to be accurate, and warns against mixing tire types on the same vehicle. On the skills test the examiner inspects tires along with lights, signals, horn, windows and window tint before you drive.",
        trap:
          "The penny test is the American folk method and uses a different coin and a different depth. Rhode Island's manual says a quarter.",
        excerptKey: "tire-tread-manual",
        sourceLabel: "Rhode Island Driver's Manual - Section XIII Equipment You Must Inspect",
        sourceUrl: hb(68),
      },
      {
        id: "ri_s2_21",
        topic: "rules",
        question:
          "A Rhode Island road has a center lane marked with solid yellow lines on the outside and broken yellow lines inside, with turn arrows painted on it. What is it for?",
        choices: [
          "Passing slower traffic in either direction",
          "Emergency vehicles only",
          "Parking outside of rush hour",
          "Left turns in and out of side streets and driveways, entered no more than 100 feet before the turn",
        ],
        correctIndex: 3,
        explanation:
          "It is a shared left-turn lane. Traffic from both directions uses it to turn left, and the manual says you may not enter it unless you intend to turn within 100 feet.",
        context:
          "The markings are the giveaway: solid yellow on the outside because you cannot cross into oncoming traffic, broken yellow inside because both directions share the lane. It is never a passing lane and never a travel lane, so drifting into it early to wait your turn is exactly what the 100-foot rule forbids.",
        trap:
          "Using it as a merge or acceleration lane after turning out of a driveway is the common misuse, and it puts you head-on with someone waiting to turn the other way.",
        excerptKey: "shared-turn-lane-100",
        sourceLabel: "Rhode Island Driver's Manual - Section IV Roadway Markings",
        sourceUrl: hb(38),
        commonlyMissed: true,
      },
      {
        id: "ri_s2_22",
        topic: "emergencies",
        question:
          "A front tire blows out at speed on a Rhode Island highway. What does the manual tell you to do?",
        choices: [
          "Brake hard and steer for the shoulder",
          "Grip the wheel with both hands, ease off the accelerator and let the vehicle slow without braking",
          "Accelerate briefly to regain stability",
          "Pull the parking brake to slow the vehicle evenly",
        ],
        correctIndex: 1,
        explanation:
          "Both hands on the wheel, ease off the accelerator, and do not brake - braking can make the vehicle swerve. Let it slow, turn on the hazard lights, and work your way off the highway.",
        context:
          "The manual's framing is useful: the tire is already a total loss, so your only job is to get to safety. Once you are off the road it repeats the general rule for a disabled vehicle - all four wheels off the main pavement, hazard flashers on, and flares or reflectors if you have them.",
        trap:
          "Braking is the reflex and the danger. A blown front tire is already dragging one side of the car; adding brake force makes the pull worse.",
        excerptKey: "blowout",
        sourceLabel: "Rhode Island Driver's Manual - Section V Blowout or Flat Tire",
        sourceUrl: hb(43),
      },
      {
        id: "ri_s2_23",
        topic: "signs",
        question:
          "Which of these appears on the warning signs page of the Rhode Island Driver's Manual?",
        choices: [
          "Entering Divided Highway",
          "Hospital",
          "Speed Limit",
          "Interstate Route",
        ],
        correctIndex: 0,
        explanation:
          "Entering Divided Highway is a warning sign. The manual's warning page also pictures Yield Sign Ahead, Railroad Crossing Here and Ahead, Traffic Signal Ahead, Road Alignment, Stop Sign Ahead, School Crossing, No Passing Zone, Detour and Slow Moving Vehicle.",
        context:
          "Rhode Island groups its signs into three families on the inside covers. Regulatory signs tell you what the law requires - Stop, Yield, Do Not Enter, No Parking, Speed Limit, No Right Turn On Red. Guide signs help you navigate - exits, mile markers, route shields, hospital, food. Warning signs prepare you for something ahead, and they are the diamond-shaped yellow ones.",
        trap:
          "Speed Limit and Hospital are real signs but they are regulatory and guide signs. Warning signs are about what is coming, not what is required or where things are.",
        excerptKey: "signs-warning-list",
        sourceLabel: "Rhode Island Driver's Manual - Signs, Warning Signs",
        sourceUrl: hb(86),
      },
      {
        id: "ri_s2_24",
        topic: "licensing",
        question:
          "Under a Rhode Island Learner Provisional License, when may you drive without a supervising driver?",
        choices: [
          "At any time, since the road test has been passed",
          "Only between 6 am and 10 pm",
          "Between 5 am and 1 am, plus to and from work or volunteer emergency service",
          "Only when driving to or from school",
        ],
        correctIndex: 2,
        explanation:
          "The provisional license permits unsupervised driving between 5 am and 1 am, and outside those hours only when you are going to or from work, or to or from an activity of a volunteer fire department, rescue squad or emergency medical service you belong to.",
        context:
          "There is a fourth carve-out that catches people out: between 4 am and 5 am you may drive between home and a school-sponsored athletic activity for which the school provides no transportation. During the first twelve months of the provisional license you may also carry no more than one passenger under 21, with immediate family and household members exempt.",
        trap:
          "The blocked hours are 1 am to 5 am, not midnight to 5 am. Rhode Island's window is unusual and worth memorizing as a pair of numbers.",
        excerptKey: "provisional-unsupervised",
        sourceLabel: "Rhode Island Driver's Manual - Section I Learner Provisional License",
        sourceUrl: hb(14),
        commonlyMissed: true,
      },
      {
        id: "ri_s2_25",
        topic: "signals",
        question:
          "A HAWK signal is installed over a Rhode Island crosswalk. What is it for?",
        choices: [
          "Warning drivers of a school bus stop ahead",
          "Marking a reversible lane",
          "Metering traffic onto a freeway ramp",
          "Letting pedestrians cross a street safely",
        ],
        correctIndex: 3,
        explanation:
          "HAWK stands for High-Intensity Activated Crosswalk, and the manual describes it as a signal used to let pedestrians cross a street safely.",
        context:
          "It sits alongside two other signal ideas the manual names. A stale green light is one that has been green a while and may change; a fresh green has just turned. Both are cues to cover the brake, which the manual defines as lifting off the accelerator and hovering over the brake without touching it.",
        trap:
          "Reversible lanes use overhead green arrows and red crosses instead. A HAWK is about people on foot.",
        excerptKey: "hawk-crosswalk",
        sourceLabel: "Rhode Island Driver's Manual - Section IV Traffic Lights/Signals",
        sourceUrl: hb(42),
      },
      {
        id: "ri_s2_26",
        topic: "rightOfWay",
        question:
          "You approach an intersection in Rhode Island with no stop sign, no yield sign and no traffic light. How should you treat it?",
        choices: [
          "As though a yield sign were posted",
          "As though a stop sign were posted",
          "As a through highway on which you have priority",
          "As a right of way for whoever is on the wider road",
        ],
        correctIndex: 0,
        explanation:
          "Rhode Island calls these uncontrolled intersections and tells you to treat them as though a yield sign were present. You slow, look and give way rather than assuming priority.",
        context:
          "The statutory rules fill in the rest. A driver approaching an intersection yields to a vehicle that has already entered from a different road, and where two arrive at about the same time the driver on the left yields to the driver on the right. The manual's own advice for every intersection is to slow down, cover the brake and proceed with caution.",
        trap:
          "\"Wider road wins\" is a folk rule with no basis in the statute. Priority comes from a posted through highway, not from the width of the pavement.",
        excerptKey: "uncontrolled-intersection",
        sourceLabel: "Rhode Island Driver's Manual - Section IV Traffic Lights/Signals",
        sourceUrl: hb(41),
      },
      {
        id: "ri_s2_27",
        topic: "sharing",
        question:
          "You are about to open your driver's door after parking on a Rhode Island street. What does the manual recommend?",
        choices: [
          "Opening the door quickly so you are exposed for less time",
          "Checking the mirror only, since it shows the traffic lane",
          "Waiting until no vehicle is in sight",
          "Opening the door with your right hand, which turns your head toward the traffic",
        ],
        correctIndex: 3,
        explanation:
          "The manual calls it the Dutch Reach: open the driver's door with your right hand, which naturally turns your head and lets you look out of the side and rear windows before the door moves.",
        context:
          "Dooring is the collision this prevents - a door opened into the path of a passing cyclist. Section 31-21-14 makes it an offense to open a door into moving traffic before it is reasonably safe, and to leave a door open longer than loading or unloading requires. The duty covers pedestrians and cyclists on sidewalks, shoulders and bike lanes as well as vehicles.",
        trap:
          "Mirrors have blind spots at exactly the angle a cyclist arrives from. The reach exists to force the head turn that the mirror cannot replace.",
        excerptKey: "dutch-reach",
        sourceLabel: "Rhode Island Driver's Manual - Section VIII Dooring",
        sourceUrl: hb(56),
      },
      {
        id: "ri_s2_28",
        topic: "rules",
        question:
          "How many vehicles may you pass at once on a Rhode Island two-lane road?",
        choices: [
          "One",
          "Two, if the road is clear for 500 feet",
          "As many as fit in the gap you can see",
          "Three, on a road with a broken centerline",
        ],
        correctIndex: 0,
        explanation:
          "One. The manual's passing rules state it flatly - never pass more than one vehicle - alongside the rule that you never exceed the posted speed to complete a pass.",
        context:
          "Rhode Island frames passing as three questions you must answer yes to before you begin: is it legal, is it safe, and is it worth it. Section 31-15-6 adds a hard distance: you must be back on the right-hand side of the road before you come within 100 feet of an oncoming vehicle.",
        trap:
          "Speeding up to shorten your time in the oncoming lane feels safer and is expressly forbidden. If you need to exceed the limit to finish the pass, you should not have started.",
        excerptKey: "passing-limits",
        sourceLabel: "Rhode Island Driver's Manual - Section III Passing Another Vehicle",
        sourceUrl: hb(34),
      },
      {
        id: "ri_s2_29",
        topic: "speed",
        question:
          "Rhode Island doubles the fine for speeding in a designated work zone. When does the doubling apply?",
        choices: [
          "Only when workers are present",
          "Only during daylight hours",
          "Twenty-four hours a day",
          "Only on interstate highways",
        ],
        correctIndex: 2,
        explanation:
          "Twenty-four hours a day. The manual says so directly, and section 31-14-12.1 requires signs to be erected declaring that the fine for a traffic violation in the temporary traffic control zone is doubled.",
        context:
          "The zone is defined by the signs, not by activity, which is why an empty work zone at 2 am is still a doubled-fine zone. The manual also asks you to merge early, keep your lane inside the zone, and expect the layout to change from hour to hour - and it notes that most work zone crashes are rear-end collisions.",
        trap:
          "\"No workers, no penalty\" is the assumption that generates the tickets. The sign is the trigger.",
        excerptKey: "work-zone-fines-doubled",
        sourceLabel: "Rhode Island Driver's Manual - Appendix, Construction and Work Zone Safety",
        sourceUrl: hb(73),
        commonlyMissed: true,
      },
      {
        id: "ri_s2_30",
        topic: "safety",
        question:
          "In which of these situations does the Rhode Island manual tell you to use low beams rather than high beams?",
        choices: [
          "On an unlit rural road with no other traffic",
          "In snow, rain or fog",
          "When you are being tailgated",
          "When approaching a hill crest",
        ],
        correctIndex: 1,
        explanation:
          "Low beams in snow, rain and fog. High beams reflect off the water or snow in the air and shorten the distance you can see, so more light makes the view worse.",
        context:
          "That sits inside the wider headlight rule: lights on from sunset to sunrise, any time you cannot see 500 feet ahead, and any time the wipers are running because of weather. High beams are for open unlit road with nobody around, and you drop them at 500 feet from oncoming traffic and 200 feet behind a vehicle you are following.",
        trap:
          "Fog especially tempts drivers to use high beams. It is the one condition where they most reliably make things worse.",
        excerptKey: "low-beams-weather",
        sourceLabel: "Rhode Island Driver's Manual - Section VIII Night Driving",
        sourceUrl: hb(52),
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Real Test Difficulty",
    difficulty: "medium",
    description:
      "Thirty-five questions pitched at the level of the real 40-question exam, drawing on the whole manual plus the parts of Rhode Island law it summarizes rather than states.",
    questions: [
      {
        id: "ri_s3_01",
        topic: "speed",
        question:
          "Signs mark a school zone on a Rhode Island street. What speed does state law set inside it, and when?",
        choices: [
          "15 mph, at all times",
          "20 mph, in the daytime on days when school is open",
          "25 mph, whenever children are present",
          "20 mph, at all times year round",
        ],
        correctIndex: 1,
        explanation:
          "Twenty miles per hour, within 300 feet of a school's entrances and exits, in the daytime, on days when schools are open. Section 31-14-2 sets it, and it applies only where the warning signs are actually posted.",
        context:
          "Daytime for this purpose means half an hour before sunrise to half an hour after sunset, the same definition the statute uses for the 50 and 45 mph unposted limits. The 300 feet is measured from the school grounds' entrances and exits rather than from the property line.",
        trap:
          "The manual never mentions a school-zone speed at all - it only tells you to slow down and use extra caution near schools. The number comes from the statute, and 20 is it.",
        excerptKey: "rigl-school-zone-20",
        sourceLabel: "Rhode Island General Laws 31-14-2 - Prima facie limits",
        sourceUrl: rigl("31-14-2"),
        commonlyMissed: true,
      },
      {
        id: "ri_s3_02",
        topic: "rules",
        question:
          "A crossing gate is coming down at a Rhode Island railroad crossing. Where does the law require you to stop?",
        choices: [
          "Within 50 feet but not less than 15 feet from the nearest rail",
          "Anywhere before the gate",
          "Within 20 feet but not less than 5 feet from the nearest rail",
          "At least 100 feet from the nearest rail",
        ],
        correctIndex: 0,
        explanation:
          "Section 31-20-1 sets a band: no closer than 15 feet and no farther than 50 feet from the nearest rail. The same band applies when signals flash, when a flagman signals, when a train is close enough to be an immediate hazard, or when a train is plainly visible.",
        context:
          "The manual gives the duty without the distances - stop, look and listen when signals flash or gates lower, never try to beat a train, never drive around a lowered gate. It adds the sobering figure that a train may need a mile and a half to stop, and warns against assuming a track is abandoned.",
        trap:
          "Stopping too close is as much a violation as not stopping. Fifteen feet is the minimum, and it exists because trains overhang the rails.",
        excerptKey: "rigl-railroad-50-15",
        sourceLabel: "Rhode Island General Laws 31-20-1 - Railroad crossing stops",
        sourceUrl: rigl("31-20-1"),
        commonlyMissed: true,
      },
      {
        id: "ri_s3_03",
        topic: "sharing",
        question:
          "You are following a school bus in the same lane on a Rhode Island highway. What minimum gap does the statute require?",
        choices: [
          "25 feet",
          "100 feet",
          "50 feet",
          "No minimum is set",
        ],
        correctIndex: 2,
        explanation:
          "Fifty feet. Section 31-20-12 bars any driver except an emergency vehicle on official business from traveling in the same lane behind a school bus at less than 50 feet.",
        context:
          "That is a separate rule from stopping for the flashing red lights, and it applies while the bus is moving. The manual never prints it, which makes it a good example of the exam being able to test something the book does not cover - the DMV says the questions come from the motor vehicle laws as well as the rules of the road.",
        trap:
          "The three-second following rule would put you far closer than 50 feet in slow traffic. Behind a school bus the fixed distance governs.",
        excerptKey: "rigl-school-bus-50-feet",
        sourceLabel: "Rhode Island General Laws 31-20-12 - Stopping for school bus required",
        sourceUrl: rigl("31-20-12"),
        commonlyMissed: true,
      },
      {
        id: "ri_s3_04",
        topic: "safety",
        question:
          "Rhode Island law on using a phone while driving changed in 2025. What does section 31-22-30 now prohibit for an adult driver?",
        choices: [
          "Only composing, reading or sending text messages",
          "Using a wireless handset for any purpose, unless it is used hands-free",
          "Nothing, provided the vehicle is moving under 25 mph",
          "Only holding the phone to the ear during a call",
        ],
        correctIndex: 1,
        explanation:
          "As amended effective 2 July 2025, the statute bars using a wireless handset or personal wireless communication device to compose, read or send texts or for any other purpose while driving, with a hands-free exception.",
        context:
          "The definition of driving is the part that surprises people: it covers operating the vehicle while temporarily stationary because of traffic, a traffic light or a stop sign. You are only outside the rule once you have pulled over and stopped somewhere it is safe to remain. Fines run $100, then $150, then $250.",
        trap:
          "The April 2024 manual still frames the adult rule as a texting ban, because it went to press before the amendment. Follow the statute - the exam is drawn from the motor vehicle laws.",
        excerptKey: "rigl-handsfree-2025",
        sourceLabel: "Rhode Island General Laws 31-22-30 - Distracted driving prohibited",
        sourceUrl: rigl("31-22-30"),
        commonlyMissed: true,
      },
      {
        id: "ri_s3_05",
        topic: "licensing",
        question:
          "A 17-year-old Rhode Island driver on a permit wants to use a hands-free speakerphone. What does the law say?",
        choices: [
          "It is permitted, since hands-free is always lawful",
          "It is permitted on roads with a limit of 35 mph or below",
          "It is prohibited, and so is any other phone use except an emergency",
          "It is permitted with a parent in the car",
        ],
        correctIndex: 2,
        explanation:
          "Under 18 there is no lawful phone use at the wheel in Rhode Island except an emergency, and the manual says explicitly that the ban includes hands-free devices and speakerphones.",
        context:
          "Section 31-22-11.9 sets the penalties: $100 for a first conviction, $150 for a second, and $250 plus loss of license until the driver's eighteenth birthday for a third or later one. If there is a genuine emergency the manual's advice is to pull to a safe location and call 911.",
        trap:
          "The adult hands-free exception does not reach minors. For a driver under 18 the device is off, whatever mode it is in.",
        excerptKey: "minor-phone-ban",
        sourceLabel: "Rhode Island Driver's Manual - Section III Cellular Phone Usage",
        sourceUrl: hb(36),
        commonlyMissed: true,
      },
      {
        id: "ri_s3_06",
        topic: "rightOfWay",
        question:
          "You have stopped at a stop sign in Rhode Island. What does the statute require next?",
        choices: [
          "Yield to pedestrians crossing and to any vehicle already in or closely approaching the intersection",
          "Proceed as soon as your three seconds are up",
          "Yield only to vehicles on your right",
          "Wait for any vehicle in sight to pass, however far away",
        ],
        correctIndex: 0,
        explanation:
          "After stopping, you yield to any pedestrian crossing the lane in a crosswalk and to any vehicle that has entered the intersection or is approaching closely enough to be an immediate hazard.",
        context:
          "The stop and the yield are two separate duties, and the exam likes to test them apart. The stop happens at the marked stop line, or the crosswalk on the near side, or the nearest point where you can see - in that order. The yield happens afterwards and lasts as long as the hazard does.",
        trap:
          "Counting to three does not buy you the right of way. The three seconds is the length of the stop; the yield is a separate judgment about traffic.",
        excerptKey: "rigl-stop-sign-yield",
        sourceLabel: "Rhode Island General Laws 31-17-4 - Vehicle entering stop or yield intersection",
        sourceUrl: rigl("31-17-4"),
      },
      {
        id: "ri_s3_07",
        topic: "emergencies",
        question:
          "Your car stalls on a Rhode Island railroad crossing and a train is coming. Which way should you and your passengers run?",
        choices: [
          "Straight away from the tracks at right angles",
          "Toward the train, in a line parallel to the tracks",
          "Away from the train, in a line parallel to the tracks",
          "Stay in the vehicle and brace",
        ],
        correctIndex: 1,
        explanation:
          "Toward the train, parallel to the tracks. The manual explains why: debris from a train striking a car travels in the direction the train is moving, so running the other way keeps you in the debris field.",
        context:
          "The first instruction is simply to get everyone out and off the tracks. This is the one piece of emergency advice in the manual that reads backwards until you understand the physics, and it is exactly the sort of counterintuitive rule a knowledge exam likes.",
        trap:
          "Running away from an oncoming train is the instinct, and it puts you exactly where the wreckage goes.",
        excerptKey: "stalled-on-tracks",
        sourceLabel: "Rhode Island Driver's Manual - Section V Vehicle Stalls on Railroad Tracks",
        sourceUrl: hb(45),
        commonlyMissed: true,
      },
      {
        id: "ri_s3_08",
        topic: "parking",
        question:
          "A fire station driveway is on the opposite side of the street from where you want to park, and the area is signed. How far away must you be?",
        choices: ["20 feet", "30 feet", "50 feet", "75 feet"],
        correctIndex: 3,
        explanation:
          "Seventy-five feet when you are across the street and the area is signed. Directly in front of the driveway the distance is 20 feet.",
        context:
          "The pairing is deliberate: a fire truck swinging out of a bay needs the far side of the street clear across a wider arc than the near side. Both figures appear in the manual's list and in section 31-21-4, and the 75-foot figure is conditional on the signs being posted.",
        trap:
          "Twenty feet is the figure people remember because it is the one they see written on the curb. The opposite side is nearly four times that.",
        excerptKey: "no-park-fire-station",
        sourceLabel: "Rhode Island Driver's Manual - Section III Where you may not park or stop",
        sourceUrl: hb(33),
      },
      {
        id: "ri_s3_09",
        topic: "signals",
        question:
          "What does the Rhode Island manual mean by covering the brake?",
        choices: [
          "Resting your foot lightly on the brake pedal",
          "Applying the brake gently and continuously",
          "Taking your foot off the accelerator and holding it over the brake without touching it",
          "Pressing the brake with the left foot while accelerating with the right",
        ],
        correctIndex: 2,
        explanation:
          "Foot off the accelerator, hovering over the brake pedal without touching it, ready to press if a hazard appears. It removes the reaction time it takes to move your foot across.",
        context:
          "The manual asks you to cover the brake when approaching any intersection and when a flashing yellow signal shows. It matters because reaction time is a real distance: about three-quarters of a second passes between seeing a danger and touching the pedal, and the faster you are going the farther you travel in it.",
        trap:
          "Resting your foot on the pedal is riding the brake, which heats the brakes and confuses the driver behind you with lit brake lamps.",
        excerptKey: "covering-brake",
        sourceLabel: "Rhode Island Driver's Manual - Section IV Traffic Lights/Signals",
        sourceUrl: hb(41),
      },
      {
        id: "ri_s3_10",
        topic: "safety",
        question:
          "The Rhode Island manual breaks total stopping distance into three parts. What are they?",
        choices: [
          "Thinking distance, swerving distance and braking distance",
          "Perception distance, reaction distance and braking distance",
          "Following distance, reaction distance and skid distance",
          "Sight distance, braking distance and stopping margin",
        ],
        correctIndex: 1,
        explanation:
          "Perception distance plus reaction distance plus braking distance equals total stopping distance. Perception is the ground covered while you recognize the danger, reaction is the ground covered while your foot moves, and braking is the rest.",
        context:
          "The manual puts an average driver's reaction at about three-quarters of a second on dry level pavement, and notes that braking distance grows sharply on wet or icy roads because traction falls. That is why the same speed needs far more room in the rain - two of the three components stay the same and the third stretches.",
        trap:
          "Only the last of the three shortens when you fit better brakes. The first two are about you, not the car.",
        excerptKey: "total-stopping-distance",
        sourceLabel: "Rhode Island Driver's Manual - Section III Stopping Your Vehicle",
        sourceUrl: hb(28),
      },
      {
        id: "ri_s3_11",
        topic: "impairment",
        question:
          "Research quoted in the Rhode Island manual compares being awake for 20 hours to a specific blood alcohol concentration. Which one?",
        choices: [
          "0.05 percent",
          "0.02 percent",
          "0.08 percent",
          "0.10 percent",
        ],
        correctIndex: 0,
        explanation:
          "Twenty hours awake produces impairment equal to a BAC of 0.05 percent. After 24 hours awake the manual puts the equivalent at 0.10 percent.",
        context:
          "The drowsy-driving section is unusually detailed for a driver's manual because fatigue is invisible to the person suffering it - half of the drivers who crashed after falling asleep detected no warning signs beforehand. Drivers under 30 are involved in more than two-thirds of all fall-asleep crashes.",
        trap:
          "Nothing on the manual's ineffective-actions list will fix this: not caffeine, not loud music, not opening the windows, not turning up the air conditioning. Only rest works.",
        excerptKey: "drowsy-20-hours",
        sourceLabel: "Rhode Island Driver's Manual - Section II Drowsy Driving",
        sourceUrl: hb(21),
      },
      {
        id: "ri_s3_12",
        topic: "rules",
        question:
          "You are on a two-lane Rhode Island road and want to pass. How close may you get to an oncoming vehicle before you must be back on your own side?",
        choices: [
          "You must be back before coming within 100 feet of it",
          "You must be back before coming within 50 feet of it",
          "You must be back before coming within 200 feet of it",
          "No distance is fixed, provided the pass is completed safely",
        ],
        correctIndex: 0,
        explanation:
          "One hundred feet. Section 31-15-6 requires the overtaking vehicle to return to the right-hand side before coming within 100 feet of any vehicle approaching from the opposite direction.",
        context:
          "The same statute sets the entry condition: you may not cross the centerline to pass unless the left side is clearly visible and free of oncoming traffic far enough ahead to complete the pass without interfering with anyone. Section 31-15-7 lists the places you may not cross at all, including within 100 feet of an intersection or a railroad grade crossing.",
        trap:
          "One hundred feet at 50 mph is about a second and a half. Judging it by eye is why the manual asks you to be certain before you start, not while you are alongside.",
        excerptKey: "rigl-passing-return-100",
        sourceLabel: "Rhode Island General Laws 31-15-6 - Clearance for overtaking",
        sourceUrl: rigl("31-15-6"),
      },
      {
        id: "ri_s3_13",
        topic: "signs",
        question:
          "Which of these is a regulatory sign on the Rhode Island manual's sign pages?",
        choices: [
          "School Crossing",
          "Mile Marker",
          "No Right Turn On Red",
          "Slow Moving Vehicle",
        ],
        correctIndex: 2,
        explanation:
          "No Right Turn On Red is regulatory - it removes the default permission to turn right after stopping at a red light. School Crossing and Slow Moving Vehicle are warning signs, and Mile Marker is a guide sign.",
        context:
          "Regulatory signs state a legal requirement, and section 31-13-4 makes disobeying any official traffic control device an offense in itself. The manual's regulatory page also includes Stop, Yield, Do Not Enter, Wrong Way, No Parking, No Passing Zone, One Way, Speed Limit, Keep Right and the lane-use arrows.",
        trap:
          "A right on red is permitted by default in Rhode Island, so the sign that matters is the one taking the permission away. Learners look for a sign granting it and find none.",
        excerptKey: "signs-regulatory-list",
        sourceLabel: "Rhode Island Driver's Manual - Signs, Regulatory Signs",
        sourceUrl: hb(85),
      },
      {
        id: "ri_s3_14",
        topic: "sharing",
        question:
          "How much clearance does the Rhode Island manual ask you to leave when passing a bicyclist?",
        choices: ["1 to 2 feet", "3 to 5 feet", "6 to 8 feet", "A full lane, always"],
        correctIndex: 1,
        explanation:
          "Three to five feet. The manual asks for as much clearance as possible within that range and tells you to be ready to stop suddenly if the rider falls into your lane.",
        context:
          "Two related rules come with it. Do not pass a bicyclist when oncoming traffic is near - wait for a clear road - and after passing, do not slow or stop abruptly in front of them. Section 31-17-9 separately requires you to yield to anyone in a bicycle lane before you turn across it.",
        trap:
          "Squeezing past inside your lane is what the clearance figure is aimed at. If you cannot leave three feet, you do not pass yet.",
        excerptKey: "bicycle-3-5-feet",
        sourceLabel: "Rhode Island Driver's Manual - Section VIII Sharing the Road with Bicyclists",
        sourceUrl: hb(55),
      },
      {
        id: "ri_s3_15",
        topic: "licensing",
        question:
          "How long is a Rhode Island Limited Instruction Permit valid, and how often may it be renewed?",
        choices: [
          "Until the holder turns 18, renewable a maximum of twice",
          "One year, renewable once",
          "Two years, not renewable",
          "Six months, renewable indefinitely",
        ],
        correctIndex: 0,
        explanation:
          "The manual says the permit runs until the holder turns 18 and may be renewed a maximum of two times. Once it has been renewed twice, you retake the permit test.",
        context:
          "The DMV's own page states it slightly differently - valid for one year or until the applicant turns 18, whichever is greater - and adds that a permit expired for more than two years cannot be renewed at all. Renewals can be done by mail, by drop box or in person with a reservation, but not online.",
        trap:
          "Renewal is not automatic and it is not unlimited. Two renewals is the ceiling, after which the knowledge exam comes round again.",
        excerptKey: "permit-validity",
        sourceLabel: "Rhode Island Driver's Manual - Section I Limited Learner Permit",
        sourceUrl: hb(12),
      },
      {
        id: "ri_s3_16",
        topic: "rightOfWay",
        question:
          "A driver ahead of you has already entered an uncontrolled intersection when you arrive. What does Rhode Island law say?",
        choices: [
          "You have the right of way if you are on the wider road",
          "The driver on the right always goes, regardless of who entered first",
          "You yield to the vehicle that entered the intersection first",
          "Both vehicles must stop and proceed alternately",
        ],
        correctIndex: 2,
        explanation:
          "You yield. Section 31-17-1 makes a driver approaching an intersection give way to a vehicle that has already entered it from a different road.",
        context:
          "The right-hand rule in the same section is the tie-break for simultaneous arrival, not a general priority. Order of entry comes first, and only when two vehicles arrive at about the same time does the driver on the left yield to the driver on the right.",
        trap:
          "The right-hand rule gets over-applied. It does not let you push in ahead of someone who is already in the intersection.",
        excerptKey: "rigl-row-already-entered",
        sourceLabel: "Rhode Island General Laws 31-17-1 - Right-of-way in absence of signs or signals",
        sourceUrl: rigl("31-17-1"),
      },
      {
        id: "ri_s3_17",
        topic: "safety",
        question:
          "The Rhode Island manual describes velocitizing. What is it?",
        choices: [
          "Losing steering when tires lift off a wet surface",
          "Temporary blindness after oncoming headlights pass",
          "The delay between seeing a hazard and braking",
          "Beginning to feel that you are going slower than you actually are",
        ],
        correctIndex: 3,
        explanation:
          "Velocitizing is the sensation of going slower than you really are, which builds up after a long stretch at steady highway speed. The manual's remedy is to vary your speed slightly on long drives.",
        context:
          "It matters most where you leave the highway. The manual warns to watch for it when you approach an exit, because the ramp speed feels absurdly slow after an hour at 65. Hydroplaning is the separate hazard - front tires losing contact with a wet surface and taking your steering with them.",
        trap:
          "Velocitizing and highway hypnosis both come from monotony, but the first distorts your speed judgment while the second dulls your attention.",
        excerptKey: "velocitizing",
        sourceLabel: "Rhode Island Driver's Manual - Section III Stopping Your Vehicle",
        sourceUrl: hb(28),
      },
      {
        id: "ri_s3_18",
        topic: "rules",
        question:
          "The Rhode Island manual sets conditions before any turnabout. Which of these is one of them?",
        choices: [
          "At least 200 feet from an intersection",
          "At least 100 feet from a driveway",
          "At least 300 feet of clear visibility",
          "Between 9 am and 4 pm only",
        ],
        correctIndex: 0,
        explanation:
          "At least 200 feet from an intersection, along with 500 feet of clear visibility in each direction and no hills or curves blocking your view of oncoming traffic.",
        context:
          "The manual lists four kinds of turnabout: a U-turn, backing into a driveway or side street on the right, pulling into a street or driveway on the left, and the three-point turn. It rates the one on the left as the most hazardous, because you end up backing into the travel lane.",
        trap:
          "The two distances are easy to swap. Visibility is 500 feet; the intersection clearance is 200.",
        excerptKey: "turnabout-visibility",
        sourceLabel: "Rhode Island Driver's Manual - Section III Turnabouts",
        sourceUrl: hb(30),
      },
      {
        id: "ri_s3_19",
        topic: "emergencies",
        question:
          "You are threatened with a head-on collision on a Rhode Island road. Which way does the manual tell you to steer?",
        choices: [
          "Left, into the lane the other driver has left",
          "Right, toward the shoulder or curb line",
          "Straight, braking as hard as possible",
          "Whichever way gives more room, left or right",
        ],
        correctIndex: 1,
        explanation:
          "Right, toward the shoulder or curb line. The manual is explicit that you do not steer left, because the other driver will most likely try to correct back into their own lane - which is where you would be.",
        context:
          "The sequence before that is brake hard without locking the wheels, sound the horn and flash the headlights to alert the other driver, and keep braking while moving right. Be prepared to leave the roadway entirely to the right if you have to.",
        trap:
          "Steering into the gap the other car has vacated is the instinct that turns a near miss into an impact. Their correction and your evasion meet in the middle.",
        excerptKey: "head-on-steer-right",
        sourceLabel: "Rhode Island Driver's Manual - Section V Threat of a Head-on Collision",
        sourceUrl: hb(44),
        commonlyMissed: true,
      },
      {
        id: "ri_s3_20",
        topic: "parking",
        question:
          "You have stopped on the shoulder of an open Rhode Island highway outside any town. What does the statute require?",
        choices: [
          "Pulling off the traveled part of the road when practical, leaving a clear view for 200 feet each way",
          "Nothing beyond turning on your hazard lights",
          "Parking within 12 inches of the edge line",
          "Displaying a warning triangle 100 feet behind the vehicle",
        ],
        correctIndex: 0,
        explanation:
          "Section 31-21-1 requires you to get off the paved or main traveled part of the highway when it is practical, to leave an unobstructed width for other traffic, and to be visible from 200 feet in each direction.",
        context:
          "The manual makes the same point in practical terms for a breakdown: move so all four wheels are off the main pavement, turn on the hazard flashers, and use flares, reflectors or triangles if you carry them. On a freeway it asks you to signal into the breakdown lane, and section 31-15-16 bans traveling in that lane.",
        trap:
          "\"Far enough over\" is not the standard when a crest or a curve hides you. The 200-foot sight line is what the statute measures.",
        excerptKey: "rigl-open-highway-200-feet",
        sourceLabel: "Rhode Island General Laws 31-21-1 - Stopping on traveled portion of open highway",
        sourceUrl: rigl("31-21-1"),
      },
      {
        id: "ri_s3_21",
        topic: "signals",
        question:
          "What does a steady red arrow mean at a Rhode Island intersection?",
        choices: [
          "Stop, then turn in the direction of the arrow when clear",
          "Yield to oncoming traffic and then turn",
          "Stop, and do not make the movement the arrow indicates until it changes",
          "The signal is out of service",
        ],
        correctIndex: 2,
        explanation:
          "A red arrow forbids the movement it points to. You stop and wait; you may not treat it as a red ball and turn after stopping.",
        context:
          "Rhode Island's right-on-red permission is expressly switched off by a red arrow as well as by a No Turn On Red sign. When the red arrow goes out it will be followed by a green arrow, a steady green, or a flashing yellow arrow, each of which changes what you may do.",
        trap:
          "The right-on-red habit is exactly what a red arrow exists to stop. The statute says the permission does not apply when a steady red arrow is displayed.",
        excerptKey: "rigl-red-arrow",
        sourceLabel: "Rhode Island General Laws 31-13-6 - Meaning of traffic control signals",
        sourceUrl: rigl("31-13-6"),
        commonlyMissed: true,
      },
      {
        id: "ri_s3_22",
        topic: "impairment",
        question:
          "A 19-year-old in Rhode Island is stopped with unopened beer in the trunk, driving alone. What can happen to their license?",
        choices: [
          "Nothing, because the containers are unopened",
          "Suspension for up to 30 days",
          "Suspension until they turn 21",
          "Nothing unless they have been drinking",
        ],
        correctIndex: 1,
        explanation:
          "Rhode Island law lets the DMV administrator suspend a driver under 21 for up to 30 days for knowingly carrying alcohol in any part of the vehicle, opened or unopened, unless a parent or legal guardian is with them.",
        context:
          "There is a narrow employment exception for 16-to-21-year-olds transporting unopened alcohol in the course of their work. Separately, possession of alcohol by anyone under 21 carries a fine of $150 to $750 for a first offense and a minimum 60-day license suspension.",
        trap:
          "\"Unopened\" is not a defense in Rhode Island. The statute says opened or unopened, in any part of the vehicle.",
        excerptKey: "underage-transport-alcohol",
        sourceLabel: "Rhode Island Driver's Manual - Section X, R.I.G.L. 3-8-9",
        sourceUrl: hb(64),
        commonlyMissed: true,
      },
      {
        id: "ri_s3_23",
        topic: "rules",
        question:
          "You are driving a car on a Rhode Island road and reach a railroad crossing with no signals, no gates and no train in sight. What must you do?",
        choices: [
          "Stop within 50 feet of the nearest rail",
          "Stop, look and listen at every crossing regardless",
          "Slow, look and listen, and cross without stopping if no train is approaching",
          "Sound your horn before crossing",
        ],
        correctIndex: 2,
        explanation:
          "An ordinary car is not required to stop at every crossing. The statutory stop applies when signals are flashing, gates are down, a flagman signals, a train sounds close enough to be an immediate hazard, or a train is plainly visible and close.",
        context:
          "Buses and trucks carrying hazardous materials are the vehicles that must always stop, and the manual asks you to be patient behind them rather than swinging out. The manual also warns never to assume a track is abandoned - treat every set of rails as live.",
        trap:
          "Stopping when nothing requires it is its own hazard, because the driver behind you does not expect it. Rhode Island learners report failing skills tests for stops that were not required.",
        excerptKey: "rigl-railroad-when",
        sourceLabel: "Rhode Island General Laws 31-20-1 - Railroad crossing stops",
        sourceUrl: rigl("31-20-1"),
        commonlyMissed: true,
      },
      {
        id: "ri_s3_24",
        topic: "sharing",
        question:
          "Rhode Island law requires a bicycle helmet for riders of what age?",
        choices: [
          "Under 12",
          "No helmet law applies to bicycles",
          "Under 18",
          "15 or younger",
        ],
        correctIndex: 3,
        explanation:
          "Fifteen or younger. The requirement covers operators and passengers on bicycles, and it also reaches skateboards, roller skates, inline skates and scooters.",
        context:
          "The helmet must fit and be strapped on, and it must meet the Consumer Product Safety Commission standard. Motorcycles run on a different set of rules: all passengers must wear helmets, any operator under 21 must, and every new operator must for the first year of their license whatever their age.",
        trap:
          "\"Under 16\" and \"15 or younger\" describe the same group, but the motorcycle figures - 21 for operators, one year for new riders - are a separate set and get mixed in.",
        excerptKey: "rigl-bicycle-helmet",
        sourceLabel: "Rhode Island General Laws 31-19-2.1 - Helmets required",
        sourceUrl: rigl("31-19-2.1"),
      },
      {
        id: "ri_s3_25",
        topic: "safety",
        question:
          "Rhode Island's manual teaches the Smith System. What does Aim High In Steering ask you to do?",
        choices: [
          "Look 4 to 6 seconds ahead and 12 to 15 seconds ahead, at the middle of your lane",
          "Hold the wheel at the ten and two positions",
          "Sit high enough to see over the vehicle in front",
          "Keep your eyes on the vehicle immediately ahead",
        ],
        correctIndex: 0,
        explanation:
          "Aim High In Steering means looking well down the road rather than at your own hood: 4 to 6 seconds ahead for immediate changes and 12 to 15 seconds ahead for what is developing.",
        context:
          "The same two ranges structure the manual's orderly visual search pattern - scan the 12-to-15-second target area, glance at the mirrors, check the 4-to-6-second range, look far ahead again. The other Smith keys are Leave Yourself an Out, Get The Overall Picture, Keep Your Eyes Moving and Make Sure They See You.",
        trap:
          "It is not about hand position or seat height. The word aim refers to where your eyes are pointed.",
        excerptKey: "smith-aim-high",
        sourceLabel: "Rhode Island Driver's Manual - Section VII Mr. Smith",
        sourceUrl: hb(50),
      },
      {
        id: "ri_s3_26",
        topic: "licensing",
        question:
          "What happens at a Rhode Island skills test if you run over a curb or a cone with one wheel?",
        choices: [
          "You lose points but may continue",
          "It is an immediate failure",
          "It is allowed once per test",
          "It counts only if the examiner is in the vehicle",
        ],
        correctIndex: 1,
        explanation:
          "Running over a curb or a cone with one or more wheels is on the manual's list of reasons for immediate failure, along with a seat belt violation, a stop sign violation, intervention by a passenger, a collision with a barrier, and any dangerous action.",
        context:
          "Since June 2020 the Rhode Island skills test has been run on a closed course with the examiner outside the vehicle, so the whole test is maneuvering, stopping and observation against a cone layout. Rhode Island learners describe hitting a cone in the first minutes as the most common way it ends.",
        trap:
          "A passenger speaking up to help you is also an immediate failure. The examiner tells whoever is in the car with you not to talk, and means it.",
        excerptKey: "skills-test-immediate-failure",
        sourceLabel: "Rhode Island Driver's Manual - Section I What is covered on the driving skills test",
        sourceUrl: hb(12),
        commonlyMissed: true,
      },
      {
        id: "ri_s3_27",
        topic: "rightOfWay",
        question:
          "A car is waiting to pull out of a private driveway as you approach on the main road. Who yields?",
        choices: [
          "You, because the driveway user has been waiting",
          "Whoever moves first",
          "The driveway user, who yields to all traffic on the highway and to pedestrians",
          "Neither, since a driveway is not an intersection",
        ],
        correctIndex: 2,
        explanation:
          "The driver leaving the driveway yields. Section 31-17-5 requires them to give way to all vehicles approaching on the highway and to all pedestrians crossing the driveway or the highway.",
        context:
          "The manual adds the mechanics for the driveway driver: stop at the sidewalk to look for people, then again at the curb line to look for traffic. Waving someone out is a courtesy, not a transfer of right of way, and it does not protect either of you if a collision follows.",
        trap:
          "Having waited a long time creates no priority. The duty to yield runs until the road is genuinely clear.",
        excerptKey: "rigl-driveway-yield",
        sourceLabel: "Rhode Island General Laws 31-17-5 - Entering from private road or driveway",
        sourceUrl: rigl("31-17-5"),
      },
      {
        id: "ri_s3_28",
        topic: "signs",
        question:
          "What does a shared-lane marking, a bicycle symbol with two chevrons above it, painted in the middle of a Rhode Island travel lane mean?",
        choices: [
          "Bicycles must ride to the right of the marking",
          "The lane is for bicycles only",
          "A bicyclist may use the full lane, and drivers should expect one there",
          "Cars may park in the lane outside rush hour",
        ],
        correctIndex: 2,
        explanation:
          "A shared-lane marking is installed in the center of a travel lane to indicate that a bicyclist may use the full lane, and to alert drivers to where riders are likely to be.",
        context:
          "The marking does several jobs at once: it keeps riders out of the door zone beside parked cars, positions them in lanes too narrow to share side by side, encourages safer passing, and cuts down wrong-way riding. It is not a bicycle lane - a bicycle lane is marked with a solid white line, the words Bicycle Lane and bicycle symbols.",
        trap:
          "Seeing the bicycle symbol and treating the lane as reserved is the mistake in one direction; treating it as advisory and squeezing past is the mistake in the other.",
        excerptKey: "shared-lane-marking",
        sourceLabel: "Rhode Island Driver's Manual - Section IV Roadway Markings",
        sourceUrl: hb(38),
      },
      {
        id: "ri_s3_29",
        topic: "emergencies",
        question:
          "You are threatened by a rear-end collision and a crash is now unavoidable. What does the Rhode Island manual advise in the last moment?",
        choices: [
          "Release your brakes just before impact, then brake immediately afterwards",
          "Brake as hard as you can to reduce closing speed",
          "Turn the wheel sharply to the left",
          "Switch off the ignition",
        ],
        correctIndex: 0,
        explanation:
          "Release the brakes just before impact, which softens the blow, then brake immediately afterwards so you are not pushed into another lane.",
        context:
          "Everything before that is about avoidance: flash your brake lights early to warn the driver behind, look for open space ahead and move into it, and accelerate through a clear intersection to give them more room to stop. Turning right is the fallback if the path ahead is not clear.",
        trap:
          "Holding the brake hard makes your car a rigid target and transfers more force into it. The release is counterintuitive and it is what the manual says.",
        excerptKey: "rear-end-release-brakes",
        sourceLabel: "Rhode Island Driver's Manual - Section V Threat of a Rear-End Collision",
        sourceUrl: hb(45),
      },
      {
        id: "ri_s3_30",
        topic: "speed",
        question:
          "Rhode Island's manual says nothing about a minimum speed, but the statute does. What does section 31-14-9 prohibit?",
        choices: [
          "Driving below 40 mph on any highway",
          "Driving so slowly as to impede or block the normal and reasonable movement of traffic",
          "Driving below the posted limit at any time",
          "Driving below 25 mph in a residence district",
        ],
        correctIndex: 1,
        explanation:
          "The statute bans driving at a speed so slow that it impedes or blocks the normal and reasonable movement of traffic, unless the slow speed is needed for safe operation or required by law.",
        context:
          "It is enforced by direction in the first instance - an officer can tell a driver to speed up, and continued slow driving after that becomes a civil violation. Section 31-15-2 works alongside it by requiring anyone moving below the normal speed of traffic to use the right-hand lane.",
        trap:
          "There is no fixed minimum number attached. The test is the effect on traffic, not a figure on a sign.",
        excerptKey: "rigl-minimum-speed",
        sourceLabel: "Rhode Island General Laws 31-14-9 - Minimum speed",
        sourceUrl: rigl("31-14-9"),
      },
      {
        id: "ri_s3_31",
        topic: "rules",
        question:
          "A police officer at night has pulled you over in Rhode Island. What does state law require you to do with your lights?",
        choices: [
          "Switch off the headlights entirely",
          "Nothing is required by law",
          "Turn on the hazard flashers only",
          "Turn on the interior lights and leave them on until the officer says otherwise",
        ],
        correctIndex: 3,
        explanation:
          "Section 31-22-24 requires the interior lights on from half an hour after sunset to half an hour before sunrise, left on until the officer allows you to drive off. The manual lists it among the laws you must know.",
        context:
          "The manual's wider guidance for a stop is to pull as far right as you safely can, turn the engine off, put the window down, keep both hands visible on the wheel, leave your seat belt fastened until told otherwise, and not reach for documents until asked. You must produce license, registration and proof of insurance on request.",
        trap:
          "Reaching for the glovebox while the officer walks up is well meant and reads badly. The manual asks you to wait until you are asked.",
        excerptKey: "police-stop-interior-lights",
        sourceLabel: "Rhode Island Driver's Manual - Section IX Laws You Must Know",
        sourceUrl: hb(58),
      },
      {
        id: "ri_s3_32",
        topic: "safety",
        question:
          "The Rhode Island manual names three lane positions within a single lane. Where is lane position 2?",
        choices: [
          "In the middle of the lane",
          "Straddling the centerline while preparing to turn",
          "Three to six inches from the right line or curb",
          "Three to six inches from the left line of the lane",
        ],
        correctIndex: 3,
        explanation:
          "Lane position 2 is three to six inches from the left line. You use it when hazards are on your right or when you are about to turn left.",
        context:
          "Position 1 is the middle of the lane and the default when nothing threatens from either side. Position 3 is three to six inches from the right line or curb, for hazards on the left or a coming right turn. The manual uses the same numbering when it describes setting up a left turn.",
        trap:
          "The positions are about where the hazard is, not where you are going. You move away from the danger, which usually happens to be toward the direction you will turn.",
        excerptKey: "lane-position-2",
        sourceLabel: "Rhode Island Driver's Manual - Section VII Lane Positions",
        sourceUrl: hb(51),
      },
      {
        id: "ri_s3_33",
        topic: "parking",
        question:
          "Rhode Island added bicycle infrastructure to its no-parking list. Which of these is prohibited by section 31-21-4?",
        choices: [
          "Parking within 5 feet of a bicycle rack",
          "Parking within 20 feet of a bicycle crossing",
          "Parking on any street with a shared-lane marking",
          "Parking on any bicycle lane, trail or path",
        ],
        correctIndex: 3,
        explanation:
          "Parking, stopping or standing on a bicycle lane, trail or path is prohibited outright, along with parking on a crosshatched access aisle beside a disability parking space.",
        context:
          "That completes a set of bicycle protections in Rhode Island law: yield to riders in a bike lane before turning across it, do not drive in a bike lane except to cross it for a turn or a driveway, do not open a door into one, and do not park in one.",
        trap:
          "\"Just for a minute\" is what the statute is aimed at. A blocked bike lane forces a rider into the traffic lane at the worst possible moment.",
        excerptKey: "rigl-no-parking-bike-lane",
        sourceLabel: "Rhode Island General Laws 31-21-4 - Places where parking or stopping prohibited",
        sourceUrl: rigl("31-21-4"),
      },
      {
        id: "ri_s3_34",
        topic: "sharing",
        question:
          "Rhode Island bans one thing outright that many drivers assume is legal. Which is it?",
        choices: [
          "Driving with a pet on the passenger seat",
          "Eating while driving",
          "Driving barefoot",
          "Driving while wearing earphones or a headset",
        ],
        correctIndex: 3,
        explanation:
          "Earphones and headsets are prohibited while operating a motor vehicle or a bicycle on any highway. The manual lists it among the laws you must know, and section 31-23-51 sets the fines at $100, then $110, then $140.",
        context:
          "The statute carves out narrow exceptions: emergency vehicle intercoms, a motorcycle helmet headset that does not touch the ears, a single-ear cell phone headset that leaves the other ear open, and hearing aids. The reason is the same as for the white-cane rule - drivers navigate by sound as well as sight.",
        trap:
          "One earbud is a common workaround and it is lawful only in the specific single-ear phone or base-radio cases the statute names. Two earbuds never are.",
        excerptKey: "earphones-banned",
        sourceLabel: "Rhode Island Driver's Manual - Section IX Laws You Must Know",
        sourceUrl: hb(58),
        commonlyMissed: true,
      },
      {
        id: "ri_s3_35",
        topic: "signals",
        question:
          "What is the last thing the Rhode Island manual tells you to do when you exit a roundabout?",
        choices: [
          "Accelerate to merge with traffic",
          "Stop before the crosswalk in every case",
          "Check the center island for cyclists",
          "Signal, exit to the right, and yield to pedestrians",
        ],
        correctIndex: 3,
        explanation:
          "Signal, exit to the right and yield to pedestrians. Roundabouts have crosswalks on every leg, and the exit is where a driver watching for a gap in circulating traffic is most likely to miss someone on foot.",
        context:
          "The full sequence is slow to the posted speed, yield to pedestrians and circulating traffic, wait for a gap, merge counterclockwise, keep moving through, then signal and exit. The manual notes it is describing single-lane roundabouts, and warns that many states use multi-lane ones.",
        trap:
          "Signaling on the way in is the habit drivers bring from ordinary intersections. In a roundabout the signal that matters is the one on the way out.",
        excerptKey: "roundabout-exit",
        sourceLabel: "Rhode Island Driver's Manual - Section IV Rotary/Roundabout",
        sourceUrl: hb(40),
      },
    ],
  },
];
