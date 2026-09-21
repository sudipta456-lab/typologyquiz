import type { DrivingTestSet } from "../types";

// Every fact below was checked against "Rules of the Road", the State of
// Wyoming Driver License Manual, 2021 edition, produced by the WYDOT Driver
// Services Program in August 2021, plus Wyoming Statutes Title 31 (Motor
// Vehicles) on the Wyoming Legislature's own site and four dot.state.wy.us
// Driver Services pages.
//
// Wyoming's manual is 98 pages and unusually candid about its own limits: it
// says outright that it "covers only the basic require ments" and that "The
// language of the Wyoming Motor Vehicle Law is not used in this manual, which
// therefore cannot be used as an actual expression of the law." Four gaps
// matter for a learner:
//
// 1. The manual prints one parking distance - 15 feet from a fire hydrant. The
//    20-foot crosswalk and stop-sign figures, the 50-foot railroad figure and
//    the 20-foot fire-station figure are all in W.S. 31-5-504.
// 2. The manual's speed table lists five categories and stops. The statutory
//    defaults for a paved road that is not an interstate or a state highway
//    (65 mph) and for an unpaved one (55 mph) are in W.S. 31-5-301(b)(iv).
// 3. The manual never gives the railroad-crossing stop distance. W.S.
//    31-5-510(a) sets it at within 50 feet but not less than 15 feet.
// 4. The manual gives no liability insurance minimums and no texting fine.
//    Those are W.S. 31-9-102(a)(xi) (25/50/20) and W.S. 31-5-237(c) ($75).
//
// Three genuine handbook-versus-statute conflicts are flagged in the research
// note and handled the same way each time: the question is built on a scenario
// where both readings give the same answer.
//
//  - Uncontrolled intersections. The manual (page 42) says to yield to the
//    driver on your right "regardless of who first reaches and enters" the
//    intersection. W.S. 31-5-220(a) gives the right of way to whoever entered
//    first, and applies the right-hand rule only to a tie. Every question here
//    is set at a simultaneous arrival, where both say the same thing.
//  - Red arrows. The manual (page 97) says "A RED arrow prohibits turning in
//    the direction of the arrow." W.S. 31-5-403(a)(iii)(C) permits a right
//    turn after a full stop on ANY steady red signal unless a sign forbids it.
//    The questions here are set at a circular red, or at a red arrow with a
//    posted NO TURN ON RED sign, where both readings agree.
//  - Crash reporting. The manual (page 67) says to contact police at "$1,000
//    or more" of property damage. W.S. 31-5-1105(b) sets the trigger at injury,
//    death, or damage that disables the vehicle - no dollar figure at all. The
//    questions use crashes that clear both thresholds.
//
// Questions are original. Explanations, context notes and trap notes are
// written from scratch; the deep link is there so the learner reads WYDOT's
// own authoritative wording on the state's site.

const HB =
  "https://www.dot.state.wy.us/files/live/sites/wydot/files/shared/Driver_Services/Help%20Documents%20and%20Manuals/2021_DriverManual_web_ClassC_w%20cover.pdf";
const hb = (page: number) => `${HB}#page=${page}`;
const ws = (page: number) => `https://www.wyoleg.gov/statutes/compress/title31.pdf#page=${page}`;
const PERMITS =
  "https://www.dot.state.wy.us/home/driver_license_records/driver-license/learner-permits.html";
const TESTING =
  "https://www.dot.state.wy.us/home/driver_license_records/driver-license/testing.html";

export const wyomingSets1to3: DrivingTestSet[] = [
  {
    id: "set-1",
    setNumber: 1,
    title: "Wyoming Basics",
    difficulty: "starter",
    description:
      "The rules you meet on your first drive in Wyoming: what the shapes and colors mean, who yields, and the handful of numbers WYDOT's automated knowledge test expects you to know cold.",
    questions: [
      {
        id: "wy_s1_01",
        topic: "signs",
        question:
          "You come to a red eight-sided sign at an intersection. What does the Wyoming manual say this shape requires?",
        choices: [
          "Slow down and continue if nothing is coming",
          "Yield to traffic on the busier road, then proceed",
          "Come to a complete stop",
          "Stop only when a pedestrian is waiting",
        ],
        correctIndex: 2,
        explanation:
          "Wyoming reserves the octagon for one message and one only. The manual lists it first among the regulatory shapes and says a full stop is required, with no conditions attached to it.",
        context:
          "The manual teaches signs by shape before words, because a shape stays readable in fog, glare, blowing snow or a language you do not read. Octagon means stop, a downward-pointing triangle means yield, a yellow diamond warns of something ahead, and a rectangle carries regulatory information about speed and direction. Learning the system beats memorizing individual signs, since the test draws on signs the manual never pictures.",
        trap:
          "A rolling stop is not a stop. The wheels have to stop turning, however empty the cross street looks at 6am on a Wyoming county road.",
        excerptKey: "sign-octagon",
        sourceLabel: "Wyoming Driver License Manual - Traffic signs, Regulatory signs",
        sourceUrl: hb(95),
      },
      {
        id: "wy_s1_02",
        topic: "signals",
        question:
          "You are stopped at a steady round red light in Cheyenne and want to turn right. What does the manual allow?",
        choices: [
          "Turn right without stopping if the way is clear",
          "Turn right after a complete stop, unless a sign prohibits the turn, yielding to people and other vehicles",
          "Turn right only when a green arrow appears",
          "Turn right only where a sign expressly permits it",
        ],
        correctIndex: 1,
        explanation:
          "Right on red is Wyoming's default rather than a special permission. Two conditions ride with it: you must actually stop first, and any posted sign forbidding the turn overrides the default. Having stopped, you still give way to everyone already there.",
        context:
          "Wyoming treats a steady red as stop and stay stopped, with two carve-outs. Right on red is allowed after a full stop unless signed otherwise, and a left on red is allowed on the same terms when you are turning from a one-way street onto another one-way street. The statute behind both is W.S. 31-5-403.",
        trap:
          "\"Clear enough to go\" is not the test. If you never came to a stop, the turn is unlawful even on an empty street at midnight.",
        excerptKey: "signal-red",
        sourceLabel: "Wyoming Driver License Manual - Traffic signals, Red light",
        sourceUrl: hb(97),
        commonlyMissed: true,
      },
      {
        id: "wy_s1_03",
        topic: "rightOfWay",
        question:
          "You and another driver reach an intersection with no signs and no signals at exactly the same moment, at right angles. Who goes first?",
        choices: [
          "Whoever signals first",
          "The driver going straight, ahead of any turning driver",
          "The driver on the right",
          "The driver on the left, who is farther from the crossing traffic",
        ],
        correctIndex: 2,
        explanation:
          "When two drivers arrive together at an uncontrolled intersection, the tie-breaker is the driver on the right. The manual is blunt about it, and W.S. 31-5-220(b) puts the same rule in law: the driver on the left yields.",
        context:
          "Uncontrolled intersections are common on Wyoming's grid streets and county roads, so this rule matters more here than in states where nearly every junction is signed. The manual also warns you never to insist on the right of way at the risk of a crash - laws only say who must yield, they do not hand anyone a guarantee.",
        trap:
          "Going straight does not outrank turning. Nothing in Wyoming's rule mentions your intended direction; only position and arrival order matter.",
        excerptKey: "row-statute-same-time",
        sourceLabel: "Wyoming Statutes 31-5-220(b) - Approaching or entering intersection",
        sourceUrl: ws(163),
        commonlyMissed: true,
      },
      {
        id: "wy_s1_04",
        topic: "speed",
        question:
          "What does the Wyoming manual give as the absolute speed limit in a school zone?",
        choices: ["20 mph", "15 mph", "25 mph", "30 mph"],
        correctIndex: 0,
        explanation:
          "Twenty is the figure, and the manual calls it absolute rather than advisory. W.S. 31-5-301(b)(i) sets the same 20 mph limit for passing a school building, its grounds, a signed school zone or a school crossing.",
        context:
          "Wyoming's other unposted defaults sit around this one: 30 mph in a residence or urban district, 70 mph on non-interstate state highways, 75 mph on interstates and 80 where the superintendent has designated it. The statute also fills in what the manual leaves out - 65 mph on any other paved road, 55 mph on an unpaved one.",
        trap:
          "The word absolute is doing real work. In a school zone there is no room to argue that a higher speed was reasonable for the conditions.",
        excerptKey: "school-zone-absolute",
        sourceLabel: "Wyoming Driver License Manual - Traffic signs, Pentagon",
        sourceUrl: hb(96),
      },
      {
        id: "wy_s1_05",
        topic: "licensing",
        question: "At what age may a person apply for a Wyoming instruction permit?",
        choices: ["14", "15", "16", "16 and a half"],
        correctIndex: 1,
        explanation:
          "Fifteen is the age for a regular instruction permit, stated in the manual and in W.S. 31-7-110(a). The 14-year-old option is a different thing entirely - a restricted permit for household hardship, approved by the Wyoming Highway Patrol.",
        context:
          "Wyoming's ladder runs instruction permit at 15, intermediate license at 16, and full driving privileges at 17 - or at 16 and a half with an approved driver education course and six months on an intermediate license. WYDOT's Driver Services pages add a rule the manual omits: the learner's permit must be held at least 10 days before you may apply for full driving privileges.",
        trap:
          "The hardship route makes people answer 14. That is the restricted license for a household where an extreme inconvenience exists, and the Highway Patrol has to approve it.",
        excerptKey: "permit-at-15",
        sourceLabel: "Wyoming Driver License Manual - Getting your license, Age requirements",
        sourceUrl: hb(7),
      },
      {
        id: "wy_s1_06",
        topic: "rules",
        question:
          "How far ahead of an intersection does the Wyoming manual require you to signal a turn?",
        choices: [
          "50 feet",
          "As soon as you enter the turn lane",
          "Three car lengths",
          "At least 100 feet",
        ],
        correctIndex: 3,
        explanation:
          "One hundred feet is the manual's figure, and W.S. 31-5-217(b) requires the signal to run continuously for at least the last 100 feet before the turn. The manual adds that four to five seconds is better at higher speeds.",
        context:
          "Wyoming asks for a signal both when turning and when changing lanes. If your signals fail, hand and arm signals from the left side are the fallback: arm out horizontally for left, arm up from the elbow for right, arm down from the elbow to slow or stop.",
        trap:
          "Signaling as you start the turn is too late. The rule is a distance run before the turn, not a gesture during it.",
        excerptKey: "signal-100-feet",
        sourceLabel: "Wyoming Driver License Manual - Turning, Turn signaling",
        sourceUrl: hb(51),
      },
      {
        id: "wy_s1_07",
        topic: "safety",
        question:
          "Driving a car in good weather on a dry Wyoming highway, what following distance does the manual teach?",
        choices: [
          "At least two seconds",
          "At least one car length for every 10 mph",
          "At least four seconds",
          "Half the length of a football field",
        ],
        correctIndex: 0,
        explanation:
          "Two seconds is Wyoming's baseline for a car in good conditions. The manual prefers a time count to a guess at car lengths because it is easier to use and more accurate, and because it works at any speed.",
        context:
          "You measure it by picking a fixed point - a pole, a shadow, a pavement marking - and counting from when the vehicle ahead passes it until you do. Wyoming then scales the count for conditions: double it when wet or at night, triple it on snow and slush, quadruple it on ice. Longer vehicles need more, at two seconds for every 20 feet of length.",
        trap:
          "Four seconds is the wet-road and night figure, not the baseline. Answering four for a dry sunny day is the most common way to miss this.",
        excerptKey: "two-second-rule",
        sourceLabel: "Wyoming Driver License Manual - Isolate your vehicle in traffic",
        sourceUrl: hb(75),
      },
      {
        id: "wy_s1_08",
        topic: "parking",
        question:
          "How close to a fire hydrant does the Wyoming manual allow you to park?",
        choices: [
          "You may park beside it if you stay with the vehicle",
          "5 feet",
          "No closer than 15 feet",
          "No closer than 30 feet",
        ],
        correctIndex: 2,
        explanation:
          "Fifteen feet, and this is the one parking distance the manual actually prints. W.S. 31-5-504(a)(ii)(B) states the same figure, so there is no conflict to worry about here.",
        context:
          "The statute carries the rest of the distances the manual leaves out: 20 feet from a crosswalk at an intersection, 20 feet on the approach to a stop sign, yield sign or signal, 20 feet from a fire station driveway, and 50 feet from the nearest rail of a railroad crossing. The manual's own list is about places rather than distances - sidewalks, intersections, crosswalks, bridges, tunnels and driveways.",
        trap:
          "Staying in the car does not help. The hydrant rule bans standing and parking, not just leaving the vehicle unattended.",
        excerptKey: "parking-hydrant",
        sourceLabel: "Wyoming Driver License Manual - Parking restrictions",
        sourceUrl: hb(59),
      },
      {
        id: "wy_s1_09",
        topic: "impairment",
        question:
          "At what alcohol concentration does an adult driver in Wyoming face an immediate 90-day suspension after a chemical test?",
        choices: ["0.05 percent", "0.08 percent", "0.10 percent", "0.02 percent"],
        correctIndex: 1,
        explanation:
          "Blow 0.08 or more and the manual says your license and driving privileges are suspended for 90 days, on top of any criminal penalties. That administrative action is separate from whatever the court later decides.",
        context:
          "Wyoming calls the offense DWUI - Driving While Under the Influence. The 0.08 threshold is in W.S. 31-5-233(b), and the administrative side is called an Administrative Per Se suspension. Under 21, the trigger drops to 0.02 percent.",
        trap:
          "0.10 is an old national figure and no longer Wyoming's. And 0.08 is not a safe harbor below it - the manual says you can still be convicted at 0.05 with other supporting evidence.",
        excerptKey: "bac-008-suspension",
        sourceLabel: "Wyoming Driver License Manual - Drinking and driving, Is it worth it?",
        sourceUrl: hb(37),
      },
      {
        id: "wy_s1_10",
        topic: "sharing",
        question:
          "A school bus ahead of you on an ordinary two-lane road stops and its red lights begin flashing. What does Wyoming require?",
        choices: [
          "Slow to 20 mph and pass with care",
          "Stop only if you are behind the bus, not if you are meeting it",
          "Sound your horn and pass on the left",
          "Stop, and stay stopped until the bus moves or the red lights go off",
        ],
        correctIndex: 3,
        explanation:
          "On an undivided road both directions stop. The manual and W.S. 31-5-507(a) agree on when you may go again: the bus resumes motion, or the flashing red lights stop.",
        context:
          "The only excuse is a physical barrier or separate roadways between you and the bus, in which case only vehicles on the bus's side must stop. Wyoming also allows a school bus camera to make the case: if the driver cannot be identified, the registered owner is fined $195 under W.S. 31-5-507(e).",
        trap:
          "Meeting the bus does not excuse you. The rule says from either direction, and on a two-lane road oncoming traffic stops too.",
        excerptKey: "school-bus-stop",
        sourceLabel: "Wyoming Driver License Manual - Required stops",
        sourceUrl: hb(50),
        commonlyMissed: true,
      },
      {
        id: "wy_s1_11",
        topic: "signs",
        question: "What does a yellow diamond-shaped sign mean in Wyoming?",
        choices: [
          "It warns of a possible danger ahead",
          "It marks the start of a no-passing zone",
          "It gives directions to a town or service",
          "It is a regulation you must obey exactly",
        ],
        correctIndex: 0,
        explanation:
          "Yellow diamonds warn. The manual describes them as yellow with black letters, alerting you to a possible danger ahead so you can adjust before you reach it.",
        context:
          "Color carries information alongside shape in Wyoming's system. Most warning signs are yellow, but construction and maintenance warning signs are orange - same diamond, different message about who is ahead of you. Regulatory rectangles direct your speed and direction, and guide signs tell you where you are.",
        trap:
          "Warning is not the same as regulation. A diamond tells you what is coming; a rectangle tells you what you must do.",
        excerptKey: "sign-diamond",
        sourceLabel: "Wyoming Driver License Manual - Traffic signs, Warning signs",
        sourceUrl: hb(95),
      },
      {
        id: "wy_s1_12",
        topic: "emergencies",
        question:
          "You hear a siren and see flashing lights behind you on a Wyoming street. What does the manual tell you to do?",
        choices: [
          "Speed up until you find a wide spot",
          "Stop where you are, even if you are in an intersection",
          "Pull as close as possible to the right edge of the roadway and stop, clear of any intersection",
          "Move to the left lane and keep going",
        ],
        correctIndex: 2,
        explanation:
          "Right and stop is the answer, and the manual is specific that you must not stop in an intersection. W.S. 31-5-224(a) says the same: pull parallel and as close as possible to the right edge, clear of any intersection, and stay there.",
        context:
          "The manual adds two touches most drivers forget. Keep your foot on the brake so the emergency driver can see you are actually stopped, and watch for a second emergency vehicle before you move off - they often travel in pairs. If you are already inside a roundabout, finish your exit first and pull over after leaving it.",
        trap:
          "Stopping inside the intersection blocks the very path the emergency vehicle needs. Clear the intersection first, then stop.",
        excerptKey: "emergency-pull-right",
        sourceLabel: "Wyoming Driver License Manual - Right-of-way involving emergency vehicles",
        sourceUrl: hb(49),
      },
      {
        id: "wy_s1_13",
        topic: "signals",
        question: "What does a flashing red traffic light mean in Wyoming?",
        choices: [
          "The same as a stop sign - come to a complete stop before entering",
          "Slow down and proceed with caution",
          "The signal is broken and should be treated as green",
          "Stop only if traffic is approaching from the side",
        ],
        correctIndex: 0,
        explanation:
          "The manual puts it plainly: a flashing red has the same meaning as a STOP sign, so you come to a complete stop before entering the intersection. W.S. 31-5-405(a)(i) then applies the ordinary post-stop rules about yielding.",
        context:
          "Its partner is the flashing amber, which means proceed with caution because the intersection or location ahead is dangerous. A flashing red is the stronger of the two, and a driver who blends the two together is the one who gets hit.",
        trap:
          "Caution belongs to the flashing amber. Rolling through a flashing red because nothing is coming is the same offense as rolling a stop sign.",
        excerptKey: "signal-flashing-red",
        sourceLabel: "Wyoming Driver License Manual - Traffic signals",
        sourceUrl: hb(97),
      },
      {
        id: "wy_s1_14",
        topic: "rules",
        question:
          "There is a solid yellow line on your side of the center of a two-lane Wyoming highway. What does it tell you?",
        choices: [
          "You may pass if the way ahead is clear",
          "Traffic on the other side is going the same direction as you",
          "The road is about to become one-way",
          "No passing or lane changing, unless you are turning left into or from an alley, private road or driveway",
        ],
        correctIndex: 3,
        explanation:
          "A solid yellow line in your lane forbids passing and lane changing. The manual builds in one narrow exception: a left turn into or out of an alley, private road or driveway.",
        context:
          "Wyoming's marking grammar is simple once you separate the two variables. Yellow separates opposing directions, white separates traffic going the same way. Broken means the maneuver is permitted if the way is clear; solid means it is prohibited or hazardous.",
        trap:
          "The turn exception is not a passing permit. Crossing a solid yellow to get around a slow truck is still a violation even if you can see a mile ahead.",
        excerptKey: "markings-solid-yellow",
        sourceLabel: "Wyoming Driver License Manual - Pavement markings",
        sourceUrl: hb(63),
      },
      {
        id: "wy_s1_15",
        topic: "licensing",
        question:
          "You hold a Wyoming instruction permit. Who must be in the vehicle with you, and where?",
        choices: [
          "Any licensed driver, anywhere in the vehicle",
          "A licensed driver 18 or older, holding a license for the type of vehicle being driven, in the front passenger seat",
          "A parent or legal guardian, in any seat",
          "A driver over 21, in the front passenger seat",
        ],
        correctIndex: 1,
        explanation:
          "Three things have to line up: the supervisor is at least 18, holds a valid license for the type of vehicle you are driving, and is sitting in the front passenger seat. The manual and W.S. 31-7-110(a) state all three.",
        context:
          "The seat requirement is not a formality - the statute says the supervising driver must be fit and capable of exercising control over the vehicle, which is only possible from beside you. WYDOT's own permit page adds that the permit is valid one year, may be renewed as often as needed, and must be held at least 10 days before you apply for full driving privileges.",
        trap:
          "It is 18, not 21, and it is not limited to a parent. But the supervisor sitting in the back seat breaks the rule no matter who they are.",
        excerptKey: "permit-supervisor",
        sourceLabel: "Wyoming Driver License Manual - License services, Instruction permits",
        sourceUrl: hb(10),
      },
      {
        id: "wy_s1_16",
        topic: "speed",
        question:
          "There is no speed limit sign on a residential street in Casper. What is the statutory maximum?",
        choices: ["20 mph", "25 mph", "30 mph", "35 mph"],
        correctIndex: 2,
        explanation:
          "Thirty is Wyoming's default for a residence district, and the same figure covers any urban district. The manual's speed table gives 30 for residential and business areas, and W.S. 31-5-301(b)(ii) puts it in law.",
        context:
          "An unposted limit is a maximum, not a target. The basic speed rule in W.S. 31-5-301(a) sits above every number in the table: you may not drive faster than is reasonable and prudent for the conditions, whatever the sign says. Local authorities may also set their own limits within their jurisdiction.",
        trap:
          "Twenty-five is the residential default in a lot of states and is the answer people import from elsewhere. Wyoming's figure is 30.",
        excerptKey: "speed-urban-residence",
        sourceLabel: "Wyoming Statutes 31-5-301(b)(ii) - Maximum speed limits",
        sourceUrl: ws(181),
      },
      {
        id: "wy_s1_17",
        topic: "rightOfWay",
        question:
          "At a four-way stop in Wyoming, three cars arrive at clearly different times. Who goes first?",
        choices: [
          "The driver who stopped first",
          "The driver on the far right of the group",
          "The driver going straight",
          "The driver in the largest vehicle",
        ],
        correctIndex: 0,
        explanation:
          "First to stop goes first. The manual describes it as common courtesy and then adds the tie-breaker for when arrival order is genuinely unclear: if in doubt, yield to the driver on your right.",
        context:
          "Order of arrival settles most four-way stops; the right-hand rule only exists to break a tie. The manual also carries a rule people forget - if you enter an intersection while breaking the speed law, you forfeit any right of way you might otherwise have had.",
        trap:
          "The right-hand rule is the fallback, not the first rule. Applying it when someone plainly arrived before you causes the argument, and sometimes the collision.",
        excerptKey: "row-four-way",
        sourceLabel: "Wyoming Driver License Manual - Right of way, Intersections with four-way stops",
        sourceUrl: hb(47),
      },
      {
        id: "wy_s1_18",
        topic: "safety",
        question: "Who has to wear a safety belt in a moving vehicle under Wyoming law?",
        choices: [
          "The driver only",
          "The driver and front-seat passengers",
          "Everyone under 18",
          "All occupants of the vehicle, including the driver",
        ],
        correctIndex: 3,
        explanation:
          "The manual states the rule as all occupants of the vehicle, including the driver, and adds that it is the driver's responsibility to see that the law is obeyed.",
        context:
          "Wyoming has a serious reason to press the point: the manual reports that an average of 100 people died on the state's roads each year from 2015 to 2019, and more than half of them were not belted. Children who have not reached their ninth birthday need a proper child restraint rather than a belt.",
        trap:
          "Rear-seat passengers are not exempt. The manual's wording is all occupants, and the driver is the person the law leans on to make it happen.",
        excerptKey: "seat-belt-law",
        sourceLabel: "Wyoming Driver License Manual - Safety laws/issues, Safety belt law",
        sourceUrl: hb(29),
      },
      {
        id: "wy_s1_19",
        topic: "signs",
        question: "You see a diamond-shaped sign with black lettering on an orange background. What is it?",
        choices: [
          "A detour marker for a closed highway",
          "A construction or maintenance warning sign",
          "A sign marking a wildlife crossing",
          "A temporary speed limit sign",
        ],
        correctIndex: 1,
        explanation:
          "Orange means work zone in Wyoming. The manual says construction signs have black lettering on an orange background and warn of temporarily dangerous or unusual conditions on construction or maintenance projects.",
        context:
          "The manual asks for extra care through a work zone even when no work appears to be happening, since equipment and workers can enter the traffic stream without warning. A flag person's directions must be obeyed, and you do not move until you are told to.",
        trap:
          "Orange does not mean a lower speed by itself. The warning is about the conditions ahead; any speed change comes from a posted regulatory sign.",
        excerptKey: "sign-construction",
        sourceLabel: "Wyoming Driver License Manual - Traffic signs, Construction",
        sourceUrl: hb(96),
      },
      {
        id: "wy_s1_20",
        topic: "sharing",
        question:
          "You are passing a bicyclist on a Wyoming road. How much space does the manual ask you to leave when space allows?",
        choices: ["1 foot", "2 feet", "At least 3 feet", "At least 6 feet"],
        correctIndex: 2,
        explanation:
          "Three feet is the figure in both the manual and W.S. 31-5-203(c), which measures it from the right side of your vehicle including mirrors and any other projection.",
        context:
          "The manual asks for more than a measurement. If you do not have a clear and empty lane, do not attempt the pass at all; if you lack room, slow to the cyclist's speed and follow until you have it. Bicyclists are classified as vehicles in Wyoming with the same rights and responsibilities as any other driver.",
        trap:
          "Three feet is a floor, not a target. The manual also tells you to reduce speed while passing, which people skip entirely.",
        excerptKey: "passing-bicycle-three-feet",
        sourceLabel: "Wyoming Driver License Manual - Passing bicyclists",
        sourceUrl: hb(56),
      },
      {
        id: "wy_s1_21",
        topic: "rules",
        question:
          "On a Wyoming road, what do white lines separate from what?",
        choices: [
          "Traffic going the same direction",
          "Traffic flowing in opposite directions",
          "The roadway from the shoulder only",
          "Parking lanes from travel lanes only",
        ],
        correctIndex: 0,
        explanation:
          "White separates traffic going the same direction. Yellow is the color reserved for separating opposing flows, and getting the two the wrong way round is how drivers end up in the oncoming lane on an unfamiliar road.",
        context:
          "Wyoming's markings pair color with pattern. A broken white line means lane changing is permitted if the way is clear; a solid white line signals that passing or lane changing is hazardous. On the yellow side, broken means passing is allowed and solid means it is not.",
        trap:
          "Both colors can appear broken or solid, so the pattern alone tells you nothing about direction. Read the color first.",
        excerptKey: "markings-white-vs-yellow",
        sourceLabel: "Wyoming Driver License Manual - Pavement markings",
        sourceUrl: hb(63),
      },
      {
        id: "wy_s1_22",
        topic: "impairment",
        question:
          "According to the Wyoming manual, what actually lowers your blood alcohol concentration?",
        choices: [
          "A cold shower",
          "Strong coffee",
          "Vigorous exercise",
          "Time, and nothing else",
        ],
        correctIndex: 3,
        explanation:
          "The manual puts it in capital letters: time is the only significant factor in reducing BAC levels. Showering, drinking coffee and exercising to sober up are, in the manual's own word, useless.",
        context:
          "The liver eliminates about 90 percent of the alcohol in your body, at a roughly constant rate of about one drink per hour, and that rate is about the same for everyone. It cannot be sped up. That is why the manual's advice is to plan the ride home before the first drink rather than to manage the aftermath.",
        trap:
          "Coffee makes an impaired driver alert, not sober. A wide-awake driver with a 0.10 BAC is still a driver with a 0.10 BAC.",
        excerptKey: "time-only-factor",
        sourceLabel: "Wyoming Driver License Manual - How alcohol and drugs affect you, Effects of time",
        sourceUrl: hb(34),
      },
      {
        id: "wy_s1_23",
        topic: "parking",
        question:
          "You are parking facing uphill on a Wyoming street that has a curb. Which way do the wheels go, and what else does the manual require?",
        choices: [
          "Wheels toward the curb, parking brake off",
          "Set the parking brake and turn the wheels away from the curb",
          "Wheels straight ahead, parking brake set",
          "Wheels away from the curb, parking brake off",
        ],
        correctIndex: 1,
        explanation:
          "Uphill with a curb is the one case where the wheels point away from the curb, so that if the car rolls back the tire catches the curb. The parking brake goes on in every case.",
        context:
          "The manual's rule is short: uphill with a curb, wheels away; in any other situation, wheels toward the curb or the edge of the road. W.S. 31-5-509 backs it up by requiring you to set the brake and, on any grade, turn the front wheels to the curb or side of the highway before leaving the vehicle.",
        trap:
          "Away from the curb applies only to uphill parking beside a curb. Downhill, and anywhere with no curb, the wheels turn toward the edge.",
        excerptKey: "parking-hills",
        sourceLabel: "Wyoming Driver License Manual - Parking on hills",
        sourceUrl: hb(59),
      },
      {
        id: "wy_s1_24",
        topic: "emergencies",
        question:
          "You are involved in a crash on a Wyoming road in which someone is injured. What does the manual require first?",
        choices: [
          "Stop at or near the scene and stay there until police arrive and question everyone involved",
          "Move both vehicles to the nearest parking lot before doing anything",
          "Exchange details and leave if the other driver agrees",
          "Call your insurance company before speaking to anyone",
        ],
        correctIndex: 0,
        explanation:
          "Stopping and staying is the first duty. The manual's list of required stops includes being in any way involved in a traffic crash, and the crash section tells you to remain until the police have arrived and questioned everyone involved.",
        context:
          "After stopping you give aid to the injured and send for an ambulance, without moving an injured person unless another crash threatens. W.S. 31-5-1105 requires immediate notice to the local police, the highway patrol or the county sheriff whenever a crash causes injury or death, or leaves a vehicle too damaged to drive safely.",
        trap:
          "A private agreement with the other driver does not release you. Leaving an injury crash is one of the offenses that can revoke a Wyoming license outright.",
        excerptKey: "crash-must-stop",
        sourceLabel: "Wyoming Driver License Manual - Traffic crashes",
        sourceUrl: hb(67),
      },
      {
        id: "wy_s1_25",
        topic: "signals",
        question:
          "The light turns green as you reach a Wyoming intersection. What does the manual say you must still do?",
        choices: [
          "Nothing, a green light gives you the right of way over everyone",
          "Sound your horn before entering",
          "Yield the right of way to vehicles and people already in the intersection",
          "Wait three seconds before moving",
        ],
        correctIndex: 2,
        explanation:
          "Green means you may enter when the way is clear, and the manual attaches a duty to it: you must yield to vehicles and people already in the intersection. W.S. 31-5-403(a)(i)(A) says the same about pedestrians in an adjacent crosswalk.",
        context:
          "Wyoming's manual repeats a theme all the way through the right-of-way chapter - laws do not give anyone the right of way, they only say who must yield. A green light is permission to proceed, not a guarantee that the intersection is empty.",
        trap:
          "Treating green as absolute is exactly what causes crashes with drivers still clearing the intersection on the tail of an amber.",
        excerptKey: "signal-green",
        sourceLabel: "Wyoming Driver License Manual - Traffic signals",
        sourceUrl: hb(97),
      },
      {
        id: "wy_s1_26",
        topic: "speed",
        question:
          "Trees and a building block your view of the cross street as you approach an intersection. What speed does the Wyoming manual give for a blind intersection?",
        choices: ["30 mph", "25 mph", "20 mph", "No more than 15 mph"],
        correctIndex: 3,
        explanation:
          "Fifteen is the manual's figure for approaching a blind intersection - one where trees, bushes or buildings block your view of vehicles coming from the side.",
        context:
          "This sits inside the manual's advice on adjusting speed for road conditions, alongside slowing before a curve rather than in it, and cutting 5 to 10 mph on a wet road, half on packed snow and down to a crawl on ice. None of these are posted limits; they are what the manual expects you to do on your own.",
        trap:
          "Fifteen is lower than any posted limit you will find on that street, and that is the point. The posted number is a maximum for ideal conditions, not a promise about a blind corner.",
        excerptKey: "blind-intersection-15",
        sourceLabel: "Wyoming Driver License Manual - Adjust speed for road conditions",
        sourceUrl: hb(41),
      },
      {
        id: "wy_s1_27",
        topic: "licensing",
        question:
          "What visual acuity does Wyoming require, with or without glasses, to be licensed to drive?",
        choices: ["20/40 with both eyes", "20/20 with both eyes", "20/60 with both eyes", "20/100 with both eyes"],
        correctIndex: 0,
        explanation:
          "Twenty over forty with both eyes, with or without glasses, plus a combined horizontal field of at least 120 degrees. Those are the manual's two vision standards.",
        context:
          "If you need glasses or contacts to pass the screening, they become a condition of driving and a B restriction goes on the license. Worse than 20/40 but at least 20/100 does not end the application - it means a driving skills test is required. Worse than that, and a vision statement from an eye specialist is needed.",
        trap:
          "20/100 appears in the manual, but as the lower bound that triggers a skills test, not as the licensing standard.",
        excerptKey: "vision-standard",
        sourceLabel: "Wyoming Driver License Manual - Required tests, Vision screening",
        sourceUrl: hb(8),
      },
      {
        id: "wy_s1_28",
        topic: "rightOfWay",
        question:
          "A pedestrian is crossing in a marked crosswalk on your side of the road, with no signal at the intersection. What must you do?",
        choices: [
          "Sound your horn and proceed slowly",
          "Yield the right of way, slowing down or stopping if you need to",
          "Continue if you can pass behind them",
          "Yield only if the pedestrian is a child or elderly",
        ],
        correctIndex: 1,
        explanation:
          "You yield, and W.S. 31-5-602(a) spells out what that means in practice: slow down or stop if need be, for any pedestrian within or entering the crosswalk at either edge of the roadway.",
        context:
          "The manual lists three situations where statutes require you to yield to a pedestrian: in a marked crosswalk on your side of the road, when making a lawful turn on red after stopping, and whenever a blind pedestrian is carrying a white cane or working with a guide dog. Pedestrians account for nearly 20 percent of all traffic deaths.",
        trap:
          "A crosswalk does not need paint. The manual defines a crosswalk as where imaginary lines would connect the sidewalks, marked or not.",
        excerptKey: "row-crosswalk-statute",
        sourceLabel: "Wyoming Statutes 31-5-602(a) - Right-of-way in crosswalks",
        sourceUrl: ws(199),
      },
      {
        id: "wy_s1_29",
        topic: "safety",
        question: "When must headlights be switched on in Wyoming?",
        choices: [
          "Only between midnight and 5 a.m.",
          "From sunset to sunrise",
          "From one-half hour after sunset until one-half hour before sunrise, and whenever people and vehicles are not clearly visible at 1,000 feet",
          "Whenever the wipers are running",
        ],
        correctIndex: 2,
        explanation:
          "Wyoming states the rule twice, in the manual and in W.S. 31-5-910, and both halves matter: the half-hour window around sunset and sunrise, plus any time visibility of people and vehicles drops below 1,000 feet.",
        context:
          "The 1,000-foot clause is what covers a Wyoming ground blizzard, heavy rain or thick dust in the middle of the afternoon. The manual also bans driving on parking lights alone when headlights are required, because parking lights cannot be seen until your vehicle is already visible anyway.",
        trap:
          "Sunset itself is not the trigger, and neither is a wiper rule - Wyoming has no wipers-on, lights-on statute. Learn the two conditions the law actually names.",
        excerptKey: "headlights-when",
        sourceLabel: "Wyoming Driver License Manual - Special driving conditions, Reduced light",
        sourceUrl: hb(77),
      },
      {
        id: "wy_s1_30",
        topic: "signs",
        question: "What is a five-sided pentagon-shaped sign used for in Wyoming?",
        choices: [
          "A no-passing zone",
          "A railroad crossing ahead",
          "A hospital or emergency service",
          "A school zone ahead or a school crossing",
        ],
        correctIndex: 3,
        explanation:
          "The pentagon is Wyoming's school shape. The manual says it warns of a school zone ahead or marks a school crossing, and immediately adds the number that goes with it: the absolute speed limit in a school zone is 20 mph.",
        context:
          "Two other shapes in the same list are worth learning together. The pennant marks the beginning of a no-passing zone, and a round sign warns of a railroad crossing ahead. Wyoming may also mark that crossing with a stop line or an RXR painted on the pavement instead.",
        trap:
          "The pentagon and the pennant are the two shapes people mix up, because neither is a rectangle, a diamond or a circle. Pentagon means school; pennant means no passing.",
        excerptKey: "sign-pentagon",
        sourceLabel: "Wyoming Driver License Manual - Traffic signs, Pentagon",
        sourceUrl: hb(96),
      },
    ],
  },
  {
    id: "set-2",
    setNumber: 2,
    title: "Core Rules of the Road",
    difficulty: "easy",
    description:
      "Lane discipline, yielding, passing and the parts of the manual that turn into everyday habits. These are the rules most Wyoming drivers get right, and the ones the automated test asks about most often.",
    questions: [
      {
        id: "wy_s2_01",
        topic: "rules",
        question:
          "What does the Wyoming manual list as the steps for changing lanes safely?",
        choices: [
          "Signal, then move over as soon as the signal has flashed three times",
          "Check the mirrors, check over your shoulder for blind spots, check for other drivers moving into the same lane, then signal and change",
          "Check the mirrors and change lanes; a shoulder check is only needed on the interstate",
          "Sound the horn, signal, then change lanes",
        ],
        correctIndex: 1,
        explanation:
          "Mirrors, shoulder, other traffic, then signal and move. The manual puts the shoulder check in the middle of the sequence precisely because mirrors alone cannot show you the blind spot.",
        context:
          "The manual defines the blind spot as the area near the right and left rear corners of the vehicle that cannot be seen through the rearview mirrors, and says the driver must turn their head to see it. It also names a step people skip: checking whether another driver is moving into the same gap from the far side.",
        trap:
          "Signaling is not the same as being allowed in. A signal tells others what you intend; it does not create space or clear the blind spot.",
        excerptKey: "lane-change-steps",
        sourceLabel: "Wyoming Driver License Manual - Changing lanes",
        sourceUrl: hb(51),
      },
      {
        id: "wy_s2_02",
        topic: "rightOfWay",
        question:
          "You are turning left at an intersection and a car is coming toward you, close enough to be a hazard. Who yields?",
        choices: [
          "The oncoming driver, because you signaled first",
          "Whoever entered the intersection first",
          "Neither - you both proceed with caution",
          "You do, as the driver turning left",
        ],
        correctIndex: 3,
        explanation:
          "The turning driver yields. W.S. 31-5-221 requires a driver intending to turn left to give way to any vehicle approaching from the opposite direction that is within the intersection or close enough to be an immediate hazard.",
        context:
          "This is the same rule that protects motorcyclists, and the manual says so directly: drivers turning left in front of an oncoming rider cause a large percentage of car-cycle crashes, usually because they failed to see the rider or misjudged the rider's speed. The advice is to look, and then look again.",
        trap:
          "A green light does not change this. A circular green permits the turn; it does not give it priority over oncoming traffic.",
        excerptKey: "row-left-turn",
        sourceLabel: "Wyoming Statutes 31-5-221 - Turning left at intersection",
        sourceUrl: ws(163),
      },
      {
        id: "wy_s2_03",
        topic: "signs",
        question: "What does a pennant-shaped sign mark in Wyoming?",
        choices: [
          "The beginning of a no-passing zone",
          "A sharp curve ahead",
          "The end of a divided highway",
          "A weigh station for commercial vehicles",
        ],
        correctIndex: 0,
        explanation:
          "The manual gives the pennant one job: it is located at the beginning of a no-passing zone. It sits on the left side of the road facing you, paired with the solid yellow line on the pavement.",
        context:
          "Wyoming's manual teaches a small set of dedicated shapes - octagon for stop, downward triangle for yield, pentagon for school, round for a railroad crossing ahead, pennant for a no-passing zone. Everything else is diamond, rectangle or a guide-sign shape.",
        trap:
          "A curve warning is a yellow diamond, not a pennant. The pennant is about what you may not do, not about what the road does next.",
        excerptKey: "sign-pennant",
        sourceLabel: "Wyoming Driver License Manual - Traffic signs, Pennant",
        sourceUrl: hb(96),
      },
      {
        id: "wy_s2_04",
        topic: "safety",
        question:
          "The Wyoming manual says you are \"boxed in\". What does that mean?",
        choices: [
          "You are following too closely behind a truck",
          "You are stopped in an intersection you cannot clear",
          "There are vehicles, bicycles, pedestrians or objects in the space on both sides of you",
          "You are driving in another driver's blind spot",
        ],
        correctIndex: 2,
        explanation:
          "Boxed in means both side spaces are occupied. When that happens, the manual says your ability to respond to something ahead shrinks to speeding up or slowing down, because you have nowhere sideways to go.",
        context:
          "This sits inside the manual's space-cushion idea: isolate your vehicle with room ahead, behind and to both sides, so you have distance to absorb someone else's mistake. Its practical advice is to avoid driving alongside other vehicles on multilane streets, avoid lingering beside a bicyclist, and keep space between yourself and parked cars.",
        trap:
          "Being in someone's blind spot is a related problem but a different one. Boxed in is about your own escape routes, not about whether you can be seen.",
        excerptKey: "boxed-in",
        sourceLabel: "Wyoming Driver License Manual - Space to the sides",
        sourceUrl: hb(76),
      },
      {
        id: "wy_s2_05",
        topic: "speed",
        question:
          "What are the two interstate speed limits Wyoming's manual lists for its highways?",
        choices: [
          "65 mph and 70 mph",
          "80 mph and 75 mph",
          "70 mph and 75 mph",
          "75 mph and 85 mph",
        ],
        correctIndex: 1,
        explanation:
          "The manual's table gives interstates as 80 mph and 75 mph. The statute explains the pair: 75 is the general interstate limit, and 80 applies on interstate highways the superintendent has specifically designated.",
        context:
          "Wyoming is one of a small group of states with an 80 mph limit, and it is not blanket - it applies where designated and posted. The rest of the statutory table runs 70 on non-interstate state highways, 65 on any other paved road, 55 on unpaved roads, 30 in urban and residence districts and 20 in a school zone.",
        trap:
          "Eighty is not automatic on every interstate mile. Watch the posted signs, because the limit changes through towns, work zones and grades.",
        excerptKey: "speed-interstate-80",
        sourceLabel: "Wyoming Statutes 31-5-301(b)(vi) - Maximum speed limits",
        sourceUrl: ws(181),
      },
      {
        id: "wy_s2_06",
        topic: "licensing",
        question:
          "You hold a Wyoming intermediate license. How many passengers under 18 who are not immediate family may you carry?",
        choices: ["Any number, if all are belted", "Three", "Two", "One"],
        correctIndex: 3,
        explanation:
          "One. The manual's wording is that an intermediate license holder may not transport more than one passenger under 18 who is not an immediate family member, unless a licensed driver 18 or older is also along.",
        context:
          "Two other restrictions ride with it. Every occupant must be belted, and the holder may not drive between 11 p.m. and 5 a.m. without a completed exception form. WYDOT's permit page adds that none of the restrictions apply when a fully licensed adult of 18 or over is sitting in the front passenger seat.",
        trap:
          "Immediate family members do not count toward the limit, so a car full of siblings is fine. It is the friends that are capped at one.",
        excerptKey: "intermediate-passengers",
        sourceLabel: "Wyoming Driver License Manual - Holders of Intermediate licenses",
        sourceUrl: hb(14),
        commonlyMissed: true,
      },
      {
        id: "wy_s2_07",
        topic: "parking",
        question:
          "How close to a crosswalk at an intersection may you stand or park a vehicle in Wyoming?",
        choices: [
          "No closer than 20 feet",
          "No closer than 10 feet",
          "No closer than 30 feet",
          "There is no set distance",
        ],
        correctIndex: 0,
        explanation:
          "Twenty feet, from W.S. 31-5-504(a)(ii)(C). The manual never prints this figure - it bans parking in a crosswalk but says nothing about the approach to one - so the statute is the only place to get it.",
        context:
          "The same subsection sets 20 feet on the approach to a flashing signal, stop sign, yield sign or traffic-control signal at the side of the road, and 20 feet from a fire station driveway. The reason is sight lines: a vehicle parked right up against a crosswalk hides a pedestrian from the driver and the driver from the pedestrian.",
        trap:
          "The manual's list is about places, not distances, so a learner who studied only the book will guess here. Fifteen feet is the hydrant figure, not the crosswalk one.",
        excerptKey: "parking-hydrant-statute",
        sourceLabel: "Wyoming Statutes 31-5-504(a)(ii) - Specific places where prohibited",
        sourceUrl: ws(191),
        commonlyMissed: true,
      },
      {
        id: "wy_s2_08",
        topic: "signals",
        question: "The light ahead of you turns amber. What does the Wyoming manual require?",
        choices: [
          "Speed up to clear the intersection",
          "Stop immediately, wherever you are",
          "Stop before entering the intersection if you can do so safely; if you cannot, go carefully through",
          "Treat it as a flashing amber and proceed with caution",
        ],
        correctIndex: 2,
        explanation:
          "Amber is a stop signal with a safety valve. The manual says you must stop before entering the intersection if possible, and if you cannot stop safely you should carefully continue through.",
        context:
          "The statute frames amber as a warning that the green movement is ending and red is about to appear. The judgment call is about stopping distance and what is behind you, not about whether you can beat the light.",
        trap:
          "Accelerating on amber is the single most common misreading of this signal. Amber is not a bonus green.",
        excerptKey: "signal-amber",
        sourceLabel: "Wyoming Driver License Manual - Traffic signals",
        sourceUrl: hb(97),
      },
      {
        id: "wy_s2_09",
        topic: "sharing",
        question:
          "A motorcycle is riding near the right edge of its lane on a Wyoming highway, leaving room beside it. May you share the lane?",
        choices: [
          "Yes, if the lane is wide enough",
          "No - motorcycles are entitled to the same full lane width as any other vehicle",
          "Yes, but only to pass",
          "Only if the rider waves you through",
        ],
        correctIndex: 1,
        explanation:
          "No. The manual says motorcycles are entitled to the same full lane width as all other vehicles, and calls moving into the same lane alongside a rider not only illegal but a way of boxing both of you in with no way out.",
        context:
          "A skilled rider constantly changes position within the lane to see and be seen and to dodge objects in the road, so the empty space is being used even when it looks free. Wyoming does permit two motorcycles abreast in one lane, but only by consent of both riders, and a motorcycle may not overtake any vehicle in the same lane except another motorcycle.",
        trap:
          "The lane looking wide enough is not the test. The rider's position within the lane is deliberate, and the space you would take is their escape route.",
        excerptKey: "motorcycle-never-share-lane",
        sourceLabel: "Wyoming Driver License Manual - Sharing the road safely, Motorcycles",
        sourceUrl: hb(69),
      },
      {
        id: "wy_s2_10",
        topic: "rules",
        question:
          "Under Wyoming law, when may you overtake and pass another vehicle on the right?",
        choices: [
          "Whenever the right lane is moving faster",
          "Only on an interstate highway",
          "Never - passing on the right is prohibited",
          "When the vehicle ahead is making or about to make a left turn, or where the pavement is wide enough for two or more lines of vehicles going your way",
        ],
        correctIndex: 3,
        explanation:
          "W.S. 31-5-206(a) gives exactly two conditions, and the manual gives the same two in plainer words: the vehicle you are overtaking is turning left, or two or more lanes of traffic are moving your direction. Outside those, passing on the right is not permitted.",
        context:
          "The statute adds a hard limit that the manual repeats in a parenthesis: the movement may not be made by driving off the roadway. Cutting onto the shoulder or the verge to slip past a left-turning car is unlawful in Wyoming even though the pass itself would have been.",
        trap:
          "The pass must also be safe. The statute allows it only under conditions permitting the movement in safety, so a legal reason is not by itself a green light.",
        excerptKey: "passing-on-right-statute",
        sourceLabel: "Wyoming Statutes 31-5-206 - Overtaking on the right",
        sourceUrl: ws(157),
      },
      {
        id: "wy_s2_11",
        topic: "impairment",
        question: "What is Wyoming's Implied Consent law?",
        choices: [
          "By driving on a public street or highway you are deemed to have consented to chemical testing for BAC",
          "You consent to a vehicle search whenever you are stopped",
          "You agree to carry proof of insurance at all times",
          "Your passengers consent to being questioned separately",
        ],
        correctIndex: 0,
        explanation:
          "The consent attaches to driving itself. The manual says drivers on a public street or highway are deemed to have given their consent to chemical tests of BAC when arrested for driving under the influence.",
        context:
          "Refusing does not end the matter. The manual says law enforcement may obtain a warrant to have the test administered by an approved tester, and the refusal itself carries its own administrative consequences alongside the criminal case.",
        trap:
          "Implied consent is about chemical testing, not about searches of the car. The manual covers vehicle searches separately, and there you may politely decline unless probable cause exists.",
        excerptKey: "implied-consent",
        sourceLabel: "Wyoming Driver License Manual - Drinking and driving, Is it worth it?",
        sourceUrl: hb(37),
      },
      {
        id: "wy_s2_12",
        topic: "emergencies",
        question:
          "Your car begins to skid on a Wyoming road. What does the manual tell you to do first?",
        choices: [
          "Brake hard and hold the wheel straight",
          "Shift into neutral and coast",
          "Stop doing whatever started the skid - ease off the brakes if you slammed them, ease off the gas if you accelerated too hard",
          "Steer sharply the opposite way",
        ],
        correctIndex: 2,
        explanation:
          "Undo the cause. The manual's instruction is to keep calm, not overreact, and stop doing whatever started the skid, then steer to keep going straight down the road without oversteering.",
        context:
          "Its winter section adds the steering half: gently turn into the skid and ease your foot off the gas until you regain control. The manual is emphatic about brakes here and prints \"DO NOT APPLY THE BRAKES\" in capitals, because braking mid-skid removes what little steering you have left.",
        trap:
          "Braking feels like the obvious response and is the wrong one. You have no steering control unless the wheels are turning.",
        excerptKey: "skid-stop-what-caused-it",
        sourceLabel: "Wyoming Driver License Manual - Emergency situations, Skids",
        sourceUrl: hb(81),
      },
      {
        id: "wy_s2_13",
        topic: "safety",
        question:
          "Rain has been falling on I-80 and it is dark. What following distance does the Wyoming manual want from a car?",
        choices: ["Two seconds", "Four seconds", "Six seconds", "Eight seconds"],
        correctIndex: 1,
        explanation:
          "Double the baseline. The manual says to double the number of seconds when the roads are wet, when carrying a heavier than normal load, or at night, which puts a car at four seconds.",
        context:
          "The whole ladder is worth memorizing because Wyoming will use all of it: two seconds dry, four when wet or at night, six on snow and slush, eight on ice. Buses start at four seconds and tractor-trailers at six, and the underlying rule is two seconds for every 20 feet of vehicle length.",
        trap:
          "Wet and dark are both on the list, but they do not stack into eight. Eight seconds is the ice figure.",
        excerptKey: "following-double-wet",
        sourceLabel: "Wyoming Driver License Manual - It makes sense to INCREASE your following distance",
        sourceUrl: hb(75),
      },
      {
        id: "wy_s2_14",
        topic: "signs",
        question: "What does a round sign warn of in Wyoming?",
        choices: [
          "A roundabout ahead",
          "A rest area ahead",
          "A hospital zone",
          "A railroad crossing ahead",
        ],
        correctIndex: 3,
        explanation:
          "Round means railroad in Wyoming's shape system. The manual says a round sign warns of a railroad crossing ahead, and notes that a stop line or an RXR painted on the pavement may be used instead, or in addition.",
        context:
          "The crossbuck at the crossing itself is a different sign with a different force: the manual says crossbuck signs are yield signs and you are legally required to yield the right of way to trains. If there is more than one track, a small sign below the crossbuck tells you how many.",
        trap:
          "Roundabouts are marked with ordinary regulatory and warning signs in Wyoming, not with a round sign. The circle belongs to the railroad.",
        excerptKey: "sign-round",
        sourceLabel: "Wyoming Driver License Manual - Traffic signs, Round",
        sourceUrl: hb(96),
      },
      {
        id: "wy_s2_15",
        topic: "rightOfWay",
        question:
          "You are approaching a roundabout in Wyoming. What does the manual tell you to do?",
        choices: [
          "Slow down and yield to pedestrians and to traffic already in the roundabout",
          "Stop at the entry, then proceed in turn",
          "Enter at speed and merge with the flow",
          "Yield only to vehicles entering from your left",
        ],
        correctIndex: 0,
        explanation:
          "Slow and yield, to two groups at once - pedestrians in the crosswalks and any traffic already circulating. That is step one of the manual's five-step sequence.",
        context:
          "The rest of the sequence: look to the left and wait for a gap, merge, keep moving once you are in rather than stopping, then signal your exit and yield again to pedestrians as you leave. Traffic in a Wyoming roundabout moves counterclockwise at slow speeds and is constantly moving except when yielding.",
        trap:
          "Stopping inside the circle is the classic error. The manual says keep moving, because a stopped car in the circle is the thing a roundabout is designed to avoid.",
        excerptKey: "roundabout-yield",
        sourceLabel: "Wyoming Driver License Manual - Roundabouts",
        sourceUrl: hb(48),
      },
      {
        id: "wy_s2_16",
        topic: "rules",
        question:
          "Where does the Wyoming manual say you must not change lanes?",
        choices: [
          "Within 100 feet of a bridge",
          "On any road with a posted limit over 55 mph",
          "Before or while in an intersection",
          "Within a mile of an interstate exit",
        ],
        correctIndex: 2,
        explanation:
          "The manual ends its lane-changing section with a one-line prohibition: do not change lanes before or while in an intersection. Lane position through an intersection is what other drivers read to predict your path.",
        context:
          "The rule pairs with the turning advice a page later - be in the proper lane well before the turn, following the ordinary lane-change steps. Deciding late and swerving across at the junction is what turns a missed turn into a collision.",
        trap:
          "There is no Wyoming rule about changing lanes near bridges or high-speed roads. The intersection is the specific place the manual names.",
        excerptKey: "no-lane-change-in-intersection",
        sourceLabel: "Wyoming Driver License Manual - Changing lanes",
        sourceUrl: hb(51),
      },
      {
        id: "wy_s2_17",
        topic: "speed",
        question:
          "You are on a two-lane Wyoming highway posted at 65 mph and a patrol car is parked ahead with its lights flashing. What does the law require?",
        choices: [
          "Stop until an officer waves you past",
          "Slow to 20 mph below the posted limit, so 45 mph here",
          "Slow to 20 mph",
          "Move onto the shoulder and continue",
        ],
        correctIndex: 1,
        explanation:
          "Twenty mph below the posted limit, not down to 20 mph. On a 65 mph road that means 45. W.S. 31-5-224(a)(ii) sets the rule for two-lane roads posted at 45 mph or more, and the manual states it as reducing your speed by at least 20 mph.",
        context:
          "The other half of Wyoming's move-over law applies where there are two or more lanes going your way: there you merge into the lane farthest from the stopped vehicle, or at least one lane apart from it. The law covers not only emergency vehicles but municipal, public utility and highway construction or maintenance vehicles with lights activated.",
        trap:
          "Reading it as slow to 20 mph is the mistake, and on an 80 mph interstate it would be dangerous. The number is a reduction, not a destination.",
        excerptKey: "move-over-statute-two-lane",
        sourceLabel: "Wyoming Statutes 31-5-224(a)(ii) - Approach of authorized emergency vehicles",
        sourceUrl: ws(164),
        commonlyMissed: true,
      },
      {
        id: "wy_s2_18",
        topic: "sharing",
        question:
          "An orange triangle with a red border is displayed on the back of a vehicle ahead. What does it tell you?",
        choices: [
          "The vehicle is carrying hazardous material",
          "The vehicle is disabled and is being towed",
          "The vehicle is student-driven",
          "The vehicle cannot travel faster than 25 miles per hour",
        ],
        correctIndex: 3,
        explanation:
          "It is the slow-moving vehicle emblem, and the manual attaches a number to it: the vehicle cannot travel faster than 25 mph. Seeing it should make you slow down well before you reach it.",
        context:
          "The manual adds a note about attitude as much as law: do not be impatient behind one of these, because they have the legal right to be there. On a rural Wyoming highway the closing speed between an 80 mph car and a 25 mph tractor is enormous, which is why the emblem exists.",
        trap:
          "It is not a hazard placard and not a learner marker. The triangle is about speed, and specifically about a top speed of 25 mph.",
        excerptKey: "slow-moving-emblem",
        sourceLabel: "Wyoming Driver License Manual - Farm and slow-moving vehicles",
        sourceUrl: hb(71),
      },
      {
        id: "wy_s2_19",
        topic: "licensing",
        question:
          "You fail Wyoming's written knowledge test on your first attempt. What does the manual say about trying again?",
        choices: [
          "You may take the written test twice in one day",
          "You must wait 30 days",
          "You get unlimited attempts on the same day",
          "You must complete a driver education course first",
        ],
        correctIndex: 0,
        explanation:
          "Twice in one day is the limit. The manual states it, and WYDOT's Testing page repeats it: if you fail the written test, you may only take the same written test twice in one day.",
        context:
          "The manual also sets waiting periods that surprise people. Applicants who fail wait 24 hours before testing again, and applicants who miss 13 or more questions must wait three days. The test itself runs on WYDOT's automated testing system and can be heard orally through a phone system if you have difficulty reading, provided you choose that option when the test is set up.",
        trap:
          "Two attempts in a day is not two attempts ever. Beyond that the waiting periods take over, and a very bad score costs you three days rather than one.",
        excerptKey: "test-twice-a-day",
        sourceLabel: "Wyoming Driver License Manual - Required tests, Written test",
        sourceUrl: hb(9),
      },
      {
        id: "wy_s2_20",
        topic: "parking",
        question:
          "What does Wyoming law require before you leave a motor vehicle standing unattended?",
        choices: [
          "Lock the doors and remove all valuables",
          "Leave the transmission in neutral",
          "Effectively set the brake, and on any grade turn the front wheels to the curb or side of the highway",
          "Leave the hazard lights on",
        ],
        correctIndex: 2,
        explanation:
          "W.S. 31-5-509 requires two things: the brake effectively set, and on any grade the front wheels turned to the curb or the side of the highway. The manual's parking-on-hills advice is the practical version of the same rule.",
        context:
          "The manual adds turning off the engine, taking the keys and locking the car. The wheel direction depends on the situation - away from the curb when facing uphill beside a curb, toward the curb or edge in every other case.",
        trap:
          "Neutral is exactly wrong. The statute wants the brake set, and a vehicle left out of gear on a Wyoming grade is a vehicle that leaves without you.",
        excerptKey: "parking-unattended-statute",
        sourceLabel: "Wyoming Statutes 31-5-509 - Leaving motor vehicle unattended",
        sourceUrl: ws(196),
      },
      {
        id: "wy_s2_21",
        topic: "signals",
        question: "A green arrow appears at a Wyoming intersection. What does it mean?",
        choices: [
          "You have an absolute right to turn and nobody may be in your way",
          "You may turn in the direction of the arrow without stopping if the way is clear, still yielding to people and traffic already in the intersection",
          "You must turn in the direction of the arrow",
          "You may turn only after stopping first",
        ],
        correctIndex: 1,
        explanation:
          "A green arrow is a protected movement, not a magic one. The manual says you may turn in the direction shown without stopping if the way is clear, and that you must still yield to persons and other traffic within the intersection.",
        context:
          "The three arrows work as a set in Wyoming: red prohibits the turn, amber may follow a green arrow to warn you to clear the intersection, and green permits the movement. The statute lets a green arrow appear alone or alongside another indication.",
        trap:
          "Within the intersection is the phrase that matters. A pedestrian halfway across or a car finishing a movement still has priority over your protected turn.",
        excerptKey: "signal-green-arrow",
        sourceLabel: "Wyoming Driver License Manual - Traffic signals, Turn arrows",
        sourceUrl: hb(97),
      },
      {
        id: "wy_s2_22",
        topic: "safety",
        question:
          "Your Wyoming car has anti-lock brakes and you need to stop hard in an emergency. What does the manual tell you to do?",
        choices: [
          "Pump the pedal once every second",
          "Brake gently to avoid triggering the system",
          "Use the parking brake instead",
          "Press down hard on the pedal, hold it, and steer out of danger",
        ],
        correctIndex: 3,
        explanation:
          "Press, hold, steer. The manual says ABS pumps the brakes for the driver far faster than a person can, so all the driver has to do is press hard, keep the pressure on and steer.",
        context:
          "The warning that goes with it matters just as much: removing steady pressure or pumping the pedal disengages or turns off the ABS system. Conventional brakes are the opposite case - the manual says to pump those about once a second, because holding them down locks the wheels and starts a skid.",
        trap:
          "Pumping is the right answer for conventional brakes and the wrong one for ABS. Know which system your car has before you need it.",
        excerptKey: "abs-use",
        sourceLabel: "Wyoming Driver License Manual - Emergency situations, Skids",
        sourceUrl: hb(82),
      },
      {
        id: "wy_s2_23",
        topic: "impairment",
        question:
          "A 19-year-old is in actual physical control of a vehicle in Wyoming with an alcohol concentration of 0.03 percent. What happens?",
        choices: [
          "A DWUI suspension, because the limit under 21 is 0.02 percent",
          "Nothing, because 0.03 is below the 0.08 adult limit",
          "A warning only, for a first occurrence",
          "A fine, but no effect on the license",
        ],
        correctIndex: 0,
        explanation:
          "Under 21, the number is 0.02. The manual says a driver younger than 21 in actual physical control of a vehicle with an alcohol concentration of 0.02 percent or more will be suspended for DWUI - and 0.03 is over that line.",
        context:
          "The first youthful-driver suspension runs 90 days; a second or subsequent one within two years runs six months. Note the phrase actual physical control, which is broader than driving - sitting behind the wheel of a stationary car can be enough.",
        trap:
          "The 0.08 figure is the adult threshold and does not protect a driver under 21. Two hundredths of a percent is a very small amount of alcohol.",
        excerptKey: "youthful-driver",
        sourceLabel: "Wyoming Driver License Manual - Youthful Driver Suspension",
        sourceUrl: hb(22),
        commonlyMissed: true,
      },
      {
        id: "wy_s2_24",
        topic: "emergencies",
        question:
          "Your brakes fail on a Wyoming highway. What does the manual tell you to do?",
        choices: [
          "Turn off the ignition to stop the engine",
          "Steer onto the shoulder and coast until you stop",
          "Pump the brake pedal rapidly, use the parking brake while holding the release, and shift to a lower gear",
          "Use the parking brake at full force immediately",
        ],
        correctIndex: 2,
        explanation:
          "Three things at once: pump the pedal rapidly, apply the parking brake while holding the release so you can ease off if the rear wheels lock, and shift down. Then look for somewhere off the roadway to stop.",
        context:
          "The manual ends the list with an instruction people ignore: do not try to drive the car to a garage. A vehicle whose brakes have failed once has no business continuing under its own power.",
        trap:
          "Turning off the ignition is actively dangerous. The manual warns separately that turning the key to lock while moving can lock the steering and cost you control of the vehicle.",
        excerptKey: "brake-failure",
        sourceLabel: "Wyoming Driver License Manual - Emergency situations, Brake failure",
        sourceUrl: hb(82),
      },
      {
        id: "wy_s2_25",
        topic: "rules",
        question:
          "You realize you have just passed your exit on a Wyoming interstate. What does the manual tell you to do?",
        choices: [
          "Back up along the shoulder to the exit",
          "Go on to the next exit",
          "Cross the median at the next opening and double back",
          "Stop on the shoulder and wait for a gap to reverse",
        ],
        correctIndex: 1,
        explanation:
          "Carry on to the next exit. The manual says so directly, and adds the reason in the same breath: backing up on the interstate is dangerous, and crossing the median is prohibited.",
        context:
          "The manual's wider interstate advice is about staying predictable. Maintain a steady speed with the flow, stay in the right lane unless overtaking, signal every lane change, and plan the exit a mile or more ahead so you never slow on the interstate itself - the deceleration lane is where you slow down.",
        trap:
          "The median looks like a shortcut on an empty Wyoming interstate and it is illegal everywhere on one. The manual bans it in capitals.",
        excerptKey: "interstate-missed-exit",
        sourceLabel: "Wyoming Driver License Manual - Proper driving techniques on Interstates",
        sourceUrl: hb(61),
      },
      {
        id: "wy_s2_26",
        topic: "signs",
        question:
          "An overhead lane sign shows a left arrow with the word ONLY beneath it. What does that mean for your lane?",
        choices: [
          "You may turn left or continue straight",
          "Left turns are permitted only during posted hours",
          "The lane is reserved for buses turning left",
          "You must go in the direction the arrow points, with no other option",
        ],
        correctIndex: 3,
        explanation:
          "ONLY removes the choice. The manual says that when the word ONLY is used you must go in the direction the arrow points, and that there is no other option.",
        context:
          "The manual also notes that arrows painted on the roadway and arrows on overhead signs mean the same thing, so a lane arrow underfoot carries the same force as one above your head. This is a case where reading the lane late leaves you committed to a turn you did not want.",
        trap:
          "Without ONLY, an arrow can permit more than one movement. The word is the difference between an option and an instruction.",
        excerptKey: "overhead-only",
        sourceLabel: "Wyoming Driver License Manual - Overhead signs",
        sourceUrl: hb(63),
      },
      {
        id: "wy_s2_27",
        topic: "rightOfWay",
        question:
          "You are pulling out of a supermarket parking lot onto a Wyoming street. Who has the right of way?",
        choices: [
          "All vehicles already on the roadway you are entering",
          "You do, once your front wheels are past the curb line",
          "Whichever vehicle is moving slower",
          "Nobody - it is a courtesy situation with no rule",
        ],
        correctIndex: 0,
        explanation:
          "You yield to everything on the road you are joining. W.S. 31-5-223 states it flatly for any driver entering or crossing a roadway from somewhere that is not another roadway.",
        context:
          "The manual reinforces it from a different angle by listing the required stops: you must stop when entering a street from a driveway, alley, building or parking lot, and when entering a business district from a side road. W.S. 31-5-506 adds where the stop happens, which is before the sidewalk area.",
        trap:
          "Nosing out to claim a gap does not create priority. The duty to yield does not shrink as your bumper advances.",
        excerptKey: "row-entering-roadway",
        sourceLabel: "Wyoming Statutes 31-5-223 - Entering or crossing roadway",
        sourceUrl: ws(164),
      },
      {
        id: "wy_s2_28",
        topic: "safety",
        question:
          "You are driving with high beams on a dark Wyoming highway and a car appears coming toward you. When must you dim?",
        choices: [
          "As soon as you can see its headlights, whatever the distance",
          "Within 200 feet",
          "Before you come within 500 feet of it",
          "Only if the other driver flashes you first",
        ],
        correctIndex: 2,
        explanation:
          "Five hundred feet, which the manual translates into about four to five seconds at highway speed. W.S. 31-5-924(a)(i) sets the same distance for an oncoming vehicle.",
        context:
          "The rule has a second half for the vehicle in front of you: within 300 feet of the rear of a vehicle you are approaching, dim to the lowest beam. High beams belong on rural highways; low beams belong when following, when meeting, and in town.",
        trap:
          "Three hundred feet is the following distance for dimming, not the meeting distance. Mixing the two up is the usual error.",
        excerptKey: "dim-500-feet",
        sourceLabel: "Wyoming Driver License Manual - Special driving conditions, Reduced light",
        sourceUrl: hb(78),
      },
      {
        id: "wy_s2_29",
        topic: "sharing",
        question: "What is a No-Zone, in the Wyoming manual's language?",
        choices: [
          "A stretch of highway where passing is prohibited",
          "An area on either side or directly behind a heavy vehicle where another vehicle is not visible to its driver",
          "The gap between a truck and its trailer",
          "A parking area reserved for commercial vehicles",
        ],
        correctIndex: 1,
        explanation:
          "The No-Zone is a truck's blind spot. The manual defines it as an area on either side or directly behind a heavy vehicle in which another vehicle is not visible to the driver.",
        context:
          "Heavy vehicles have a large blind area directly behind them that cars do not have, and much larger blind spots on both sides. The manual warns specifically about lingering there because your cruise control is set slightly faster than the truck's, and about the right-turn squeeze that happens when you sit in the blind spot on the right of a turning truck.",
        trap:
          "It is not a no-passing zone. The word sounds like a road marking and describes a moving hazard that travels with the truck.",
        excerptKey: "no-zone-definition",
        sourceLabel: "Wyoming Driver License Manual - Definitions",
        sourceUrl: hb(93),
      },
      {
        id: "wy_s2_30",
        topic: "rules",
        question: "What does Wyoming law say about text messaging while driving?",
        choices: [
          "It is allowed at speeds under 25 mph",
          "It is banned only for drivers under 18",
          "It is discouraged but not illegal",
          "It is prohibited to write, send or read a text-based communication on a handheld device while driving",
        ],
        correctIndex: 3,
        explanation:
          "Wyoming bans it outright. The manual says the law prohibits reading or sending a text message from a cell phone or other device while operating a vehicle, and W.S. 31-5-237(a) covers writing, sending and reading.",
        context:
          "The statute carves out a lawfully parked vehicle, contacting an emergency response vehicle, entering a phone number or name to place or receive a call, and voice-operated or hands-free technology. The fine is not more than $75. Some Wyoming cities and towns go further with ordinances against using a phone at all inside city limits.",
        trap:
          "Hands-free is legal but not safe, and the manual says so - federal research it cites found hands-free provides little safety benefit, because the conversation itself is the distraction.",
        excerptKey: "texting-statute",
        sourceLabel: "Wyoming Statutes 31-5-237 - Electronic messaging prohibited",
        sourceUrl: ws(179),
      },
    ],
  },
  {
    id: "set-3",
    setNumber: 3,
    title: "Real Test Difficulty",
    difficulty: "medium",
    description:
      "Written at the level of the real WYDOT knowledge test, drawing on the numbers the manual prints, the ones it leaves to Wyoming Statutes Title 31, and the winter driving Wyoming expects you to have thought about.",
    questions: [
      {
        id: "wy_s3_01",
        topic: "rules",
        question:
          "You are overtaking a slow vehicle on a two-lane Wyoming highway posted at 65 mph. What does the law allow?",
        choices: [
          "Nothing extra - the posted limit applies during the pass",
          "You may exceed the limit by up to 15 mph while passing",
          "You may exceed the limit by up to 10 mph while passing a vehicle traveling below the legal maximum",
          "You may exceed the limit by whatever is needed to complete the pass safely",
        ],
        correctIndex: 2,
        explanation:
          "Ten mph, and only while passing a vehicle that is itself travelling below the legal maximum. W.S. 31-5-203(b) allows it for a car, motorcycle, autocycle or pickup that is not towing anything.",
        context:
          "The statute fences the allowance in tightly. It applies only on a two-lane, two-way road where the posted limit is 50 mph or greater, it does not apply in construction zones, and you must return to the right lane and drop back to the posted limit as soon as practicable. Go beyond 10 over and the full speeding penalty applies for your actual speed.",
        trap:
          "The manual states the 10 mph allowance without the qualifiers, so a learner who studied only the book will apply it on a 35 mph street or in a work zone, where it does not exist.",
        excerptKey: "passing-ten-over-limits",
        sourceLabel: "Wyoming Statutes 31-5-203(b) - Rules governing overtaking on the left",
        sourceUrl: ws(155),
        commonlyMissed: true,
      },
      {
        id: "wy_s3_02",
        topic: "safety",
        question:
          "The Winter Wheelin' section of the Wyoming manual gives a count for checking your following distance on snow and ice. What is it?",
        choices: [
          "Count one-thousand-one through one-thousand-four after the car ahead passes a landmark",
          "Count one-thousand-one through one-thousand-two",
          "Count to ten seconds",
          "Leave one car length for every 5 mph",
        ],
        correctIndex: 0,
        explanation:
          "Four seconds, counted as one-thousand-one through one-thousand-four. If you reach the landmark before you finish counting, the manual says you are following too closely.",
        context:
          "That four-second count is the winter minimum, not the maximum. Elsewhere the manual scales the ordinary two-second rule to six seconds on snow and slush and eight on ice, so treat four as the moment to start opening the gap rather than the finish line.",
        trap:
          "Two seconds is the dry-road baseline and is nowhere near enough on a Wyoming road in January, where the manual warns that black ice hides under pavement that merely looks wet.",
        excerptKey: "winter-four-second-count",
        sourceLabel: "Wyoming Driver License Manual - Winter Wheelin', Be prepared to stop",
        sourceUrl: hb(45),
      },
      {
        id: "wy_s3_03",
        topic: "rightOfWay",
        question:
          "You approach a yield sign in Wyoming and there is cross traffic close enough to be dangerous. What does the law require?",
        choices: [
          "Come to a complete stop every time, then proceed",
          "Sound your horn and merge",
          "Maintain speed and time your entry into the gap",
          "Slow to a speed reasonable for the conditions, stop if safety requires it, and yield to any vehicle close enough to be an immediate hazard",
        ],
        correctIndex: 3,
        explanation:
          "A yield sign asks for a speed reduction first and a stop only if safety demands one. W.S. 31-5-222(c) sets it out in that order, and the duty to yield applies to any vehicle already in the intersection or so close as to be an immediate hazard.",
        context:
          "The statute adds a consequence with real bite: if you drive past a yield sign without stopping and then collide with a vehicle in the intersection or a pedestrian in a crosswalk, the collision itself is prima facie evidence that you failed to yield. The manual's version is simpler - check for cross traffic before you reach the intersection.",
        trap:
          "Yield is not stop. Treating every yield sign as a stop sign is safe but wrong on the test, and stopping unnecessarily on a merge lane creates its own hazard.",
        excerptKey: "row-yield-collision-evidence",
        sourceLabel: "Wyoming Statutes 31-5-222(c) - Stop signs and yield signs",
        sourceUrl: ws(163),
      },
      {
        id: "wy_s3_04",
        topic: "impairment",
        question:
          "A driver is convicted of a first DWUI in Wyoming and the department's administrative action shows a BAC of 0.16 percent at arrest. What extra requirement follows?",
        choices: [
          "A three-year revocation",
          "A six-month ignition interlock requirement",
          "A lifetime ban from driving",
          "No extra requirement on a first offense",
        ],
        correctIndex: 1,
        explanation:
          "Six months of ignition interlock. The trigger is a BAC of 0.15 percent or greater on a first DWUI, whether by conviction or deferred prosecution, and 0.16 clears it.",
        context:
          "The ladder climbs from there: one year of interlock for a second DWUI involving alcohol, two years for a third on top of the three-year revocation, and a lifetime requirement for a fourth, with a right to petition the court for removal five years after conviction. Interlock drivers also file an SR-22 and pay a $50 reinstatement fee and a $100 interlock fee.",
        trap:
          "It is 0.15, not 0.20, and it applies to a first offense. A driver who assumes interlock only follows repeat convictions is reading another state's law.",
        excerptKey: "interlock-15",
        sourceLabel: "Wyoming Driver License Manual - Ignition Interlock Devices",
        sourceUrl: hb(28),
      },
      {
        id: "wy_s3_05",
        topic: "signals",
        question:
          "You are at a Wyoming intersection facing a red arrow, and a sign beside the signal reads NO TURN ON RED. May you turn?",
        choices: [
          "Yes, after a complete stop",
          "Yes, if no pedestrians are present",
          "No - the posted sign prohibits the turn",
          "Yes, but only between the hours the sign specifies",
        ],
        correctIndex: 2,
        explanation:
          "The sign settles it. Wherever a sign prohibits the turn, no turn on red is permitted regardless of what the signal head shows, and the manual separately treats a red arrow as prohibiting the turn in the direction of the arrow.",
        context:
          "This is one place where the manual and the statute do not quite line up. The manual says a red arrow prohibits turning; W.S. 31-5-403(a)(iii)(C) permits a right turn after a stop on any steady red unless a sign is in place prohibiting it. A posted NO TURN ON RED removes the disagreement, because both readings then forbid the turn.",
        trap:
          "Stopping first does not unlock a turn the sign has closed. The stop is a precondition for a permitted turn, not a workaround.",
        excerptKey: "signal-turn-on-red-statute",
        sourceLabel: "Wyoming Statutes 31-5-403(a)(iii) - Signal legend generally",
        sourceUrl: ws(186),
      },
      {
        id: "wy_s3_06",
        topic: "speed",
        question:
          "You turn off a paved Wyoming highway onto an unpaved county road with no speed limit signs. What is the statutory maximum?",
        choices: ["55 mph", "45 mph", "65 mph", "35 mph"],
        correctIndex: 0,
        explanation:
          "Fifty-five on an unpaved road. W.S. 31-5-301(b)(iv) sets 65 mph for any other paved location the table does not name and 55 mph where the roadway is unpaved.",
        context:
          "The manual's speed table never mentions unpaved roads at all, which is a real gap in a state with tens of thousands of miles of them. A local authority may drop an unpaved limit to as low as 35 mph without first conducting a speed study, so a posted lower figure is entirely possible.",
        trap:
          "Fifty-five is a ceiling, not a recommendation. The basic speed rule still requires a speed that is reasonable and prudent, and a washboarded gravel road rarely justifies anything near 55.",
        excerptKey: "speed-other-roads",
        sourceLabel: "Wyoming Statutes 31-5-301(b)(iv) - Maximum speed limits",
        sourceUrl: ws(181),
        commonlyMissed: true,
      },
      {
        id: "wy_s3_07",
        topic: "sharing",
        question:
          "Where does the Wyoming manual say a bicyclist must ride on a public road?",
        choices: [
          "On the shoulder at all times",
          "As close to the right side of the pavement as is practical and safe",
          "In the center of the lane",
          "Facing traffic, like a pedestrian",
        ],
        correctIndex: 1,
        explanation:
          "As close to the right side of the pavement as is practical and safe. The words practical and safe matter, because they let a rider move out for a grate, a pothole or a car door.",
        context:
          "The manual is careful to say that bicyclists share their lane in a way motor vehicles do not, while still holding the same rights and duties as any other driver. It notes that while it is legal to drive beside a bicyclist in the same lane, you are safer if you do not.",
        trap:
          "Facing traffic is the rule for a pedestrian walking where there is no sidewalk, not for a cyclist. A bicycle is a vehicle in Wyoming and rides with traffic.",
        excerptKey: "bicycle-position",
        sourceLabel: "Wyoming Driver License Manual - Sharing the road safely, Bicycles",
        sourceUrl: hb(70),
      },
      {
        id: "wy_s3_08",
        topic: "licensing",
        question:
          "You completed an approved Wyoming driver education course. Which test can that waive?",
        choices: [
          "Both the written knowledge test and the driving skills test",
          "The written knowledge test only",
          "The vision screening",
          "The driving skills test only",
        ],
        correctIndex: 3,
        explanation:
          "The skills test, and only the skills test. The manual says the skills test may be waived for an applicant who presents a certification card proving completion of an approved driver education class.",
        context:
          "The card has to carry the student's name, date of birth, driver license number and the original signatures of the instructor and school administrator, and it has to state that the student completed 30 hours of classroom instruction and six hours behind the wheel. It is honored for no longer than two years.",
        trap:
          "Wyoming learners report assuming driver education gets them out of the written test as well. It does not - the knowledge test is required, and the manual is the syllabus it is written from.",
        excerptKey: "skills-test-waiver",
        sourceLabel: "Wyoming Driver License Manual - Required tests, Skills test",
        sourceUrl: hb(9),
        commonlyMissed: true,
      },
      {
        id: "wy_s3_09",
        topic: "parking",
        question:
          "How close to the nearest rail of a railroad crossing may you park in Wyoming?",
        choices: [
          "No closer than 50 feet",
          "No closer than 15 feet",
          "No closer than 25 feet",
          "Anywhere clear of the tracks themselves",
        ],
        correctIndex: 0,
        explanation:
          "Fifty feet from the nearest rail, from W.S. 31-5-504(a)(iii)(A). The prohibition covers parking, with a narrow exception only while you are actually loading or unloading property or passengers.",
        context:
          "The statute also bans stopping, standing or parking on railroad tracks outright. Do not confuse the parking figure with the stopping figure: when a train is coming, W.S. 31-5-510(a) requires you to stop within 50 feet but not less than 15 feet from the nearest rail, which is a different rule about a different situation.",
        trap:
          "Fifteen feet is the near edge of the stopping band at a crossing, not a parking distance. The manual gives neither number, so both come from Title 31.",
        excerptKey: "parking-railroad-50-feet",
        sourceLabel: "Wyoming Statutes 31-5-504(a)(iii) - Specific places where prohibited",
        sourceUrl: ws(191),
      },
      {
        id: "wy_s3_10",
        topic: "rules",
        question:
          "A Wyoming street has a center lane marked for left turns by drivers going in both directions. What may you use it for?",
        choices: [
          "Passing slower traffic on the left",
          "Travelling in it until your turn comes up, up to half a mile",
          "Preparing for a left turn from or onto the roadway, or a lawful U-turn",
          "Any maneuver, provided you signal",
        ],
        correctIndex: 2,
        explanation:
          "Turns only. W.S. 31-5-214(a)(iii) says a vehicle may not be driven in a two-way left turn lane except when preparing to make a left turn from or onto the roadway, or preparing for a U-turn where one is otherwise permitted.",
        context:
          "The same subsection closes the other half of the loophole: where such a lane is marked, a left turn may not be made from any other lane. So the center lane is compulsory for the turn and forbidden for anything else.",
        trap:
          "Using it as a running start toward a distant turn is the common misuse, and it puts you head-on with a driver doing the same thing from the other direction.",
        excerptKey: "two-way-left-turn-lane",
        sourceLabel: "Wyoming Statutes 31-5-214(a)(iii) - Two-way left turn lanes",
        sourceUrl: ws(161),
      },
      {
        id: "wy_s3_11",
        topic: "emergencies",
        question:
          "A crash on a Wyoming highway leaves one car too damaged to drive and causes about $4,000 of damage. Nobody is hurt. What is required?",
        choices: [
          "Nothing, because there is no injury",
          "An exchange of details only",
          "A report to your insurer within 10 days",
          "Immediate notice of the crash to the police, the highway patrol or the county sheriff",
        ],
        correctIndex: 3,
        explanation:
          "Report it. W.S. 31-5-1105 requires immediate notice by the quickest means of communication whenever a crash leaves a vehicle so disabled as to prevent its normal and safe operation, and the manual's own threshold of $1,000 or more in property damage is also cleared here.",
        context:
          "Notice goes to the local police department if the crash is inside a municipality, otherwise to the nearest office of the state highway patrol or to the county sheriff. The manual also tells you what to gather while you wait: the other driver's name and address, license number, insurance company, vehicle details and plate number, plus the names of any witnesses.",
        trap:
          "The manual's $1,000 figure and the statute's disabled-vehicle test are two different triggers, and the statute names no dollar amount at all. This crash trips both, which is why the answer is not in doubt.",
        excerptKey: "crash-notice-statute",
        sourceLabel: "Wyoming Statutes 31-5-1105 - Notice required of driver",
        sourceUrl: ws(235),
      },
      {
        id: "wy_s3_12",
        topic: "safety",
        question:
          "How far ahead does the Wyoming manual say a defensive driver should be scanning?",
        choices: ["2 to 3 seconds", "5 seconds", "At least 10 to 15 seconds", "As far as the headlights reach"],
        correctIndex: 2,
        explanation:
          "Ten to fifteen seconds. The manual says most of what you do as a driver is a response to what you see, and defensive drivers scan at least that far ahead.",
        context:
          "There is a self-test built into the section. Pick a fixed object beside the road and count one thousand and one, one thousand and two, until you reach it - if you are watching far enough ahead you will pass one thousand and ten before you get there. Drivers who find themselves reacting to surprises are usually not looking far enough out.",
        trap:
          "Two seconds is the following distance, not the scanning distance. They are different measurements answering different questions.",
        excerptKey: "scan-10-to-15",
        sourceLabel: "Wyoming Driver License Manual - Scan ahead",
        sourceUrl: hb(74),
      },
      {
        id: "wy_s3_13",
        topic: "signs",
        question:
          "What does a downward-pointing triangle require of you in Wyoming?",
        choices: [
          "Yield the right of way to cross traffic or to merging traffic",
          "Stop and wait to be waved through",
          "Merge left immediately",
          "Reduce speed to 20 mph",
        ],
        correctIndex: 0,
        explanation:
          "The downward triangle is Wyoming's yield shape. The manual lists it among regulatory signs - the ones that tell you what to do and must always be obeyed - and says it requires you to yield to cross traffic or merging traffic.",
        context:
          "The crossbuck at a railroad crossing is a yield sign too, which is easy to miss: the manual says crossbuck signs are yield signs and you are legally required to yield the right of way to trains. Shape is the fastest way to read either one at distance.",
        trap:
          "Regulatory does not always mean stop. The octagon is the only shape reserved for a full stop.",
        excerptKey: "sign-triangle",
        sourceLabel: "Wyoming Driver License Manual - Traffic signs, Regulatory signs",
        sourceUrl: hb(95),
      },
      {
        id: "wy_s3_14",
        topic: "rightOfWay",
        question:
          "A funeral procession with flashing lights is coming toward you on a Wyoming road. What does the law require?",
        choices: [
          "Stop completely until the last vehicle passes",
          "Nothing - a procession has no special status",
          "Yield the right of way to the procession",
          "Fall in behind the last vehicle",
        ],
        correctIndex: 2,
        explanation:
          "Yield. W.S. 31-5-123(b) requires drivers of oncoming vehicles to yield the right of way to a funeral procession that is led by a funeral car or escorted by a police vehicle and displaying flashing lights.",
        context:
          "The procession has its own internal rules: the lead vehicle obeys every traffic control device, but vehicles behind it displaying headlamps may follow through stop signs and signals without stopping. The whole procession still yields to authorized emergency vehicles, and it travels in the right-hand lane.",
        trap:
          "Yielding is not the same as stopping dead. The requirement is to give way to the procession, not to halt the road.",
        excerptKey: "funeral-procession",
        sourceLabel: "Wyoming Statutes 31-5-123 - Funeral processions; right-of-way",
        sourceUrl: ws(152),
      },
      {
        id: "wy_s3_15",
        topic: "impairment",
        question:
          "At roughly what rate does the Wyoming manual say the body eliminates alcohol?",
        choices: [
          "About three drinks per hour",
          "About one drink per hour",
          "It varies enormously by person, with no usable average",
          "About half a drink every two hours",
        ],
        correctIndex: 1,
        explanation:
          "About one drink per hour, and the manual notes the rate is roughly the same for everyone because the liver does around 90 percent of the work at a constant rate.",
        context:
          "The manual uses this to explain why waiting is the only strategy. It also defines what a drink is: 12 ounces of beer, three to five ounces of wine, and one and a half ounces of 86-proof spirits each contain about half an ounce of alcohol. Time, quantity and body weight are the three factors that move BAC.",
        trap:
          "Body weight changes the BAC you reach, not the speed at which you clear it. A heavier person reaches a lower peak from the same drinks but eliminates it no faster.",
        excerptKey: "one-drink-per-hour",
        sourceLabel: "Wyoming Driver License Manual - How alcohol and drugs affect you, Effects of time",
        sourceUrl: hb(34),
      },
      {
        id: "wy_s3_16",
        topic: "rules",
        question:
          "You are on the acceleration lane joining I-25 and there is no gap in the traffic. What does the manual say?",
        choices: [
          "Stop at the end of the ramp and wait",
          "Force your way in - interstate traffic must let you merge",
          "Drive on the shoulder until a gap appears",
          "Do not stop unless there is genuinely no gap, and merge at about the same speed as the traffic",
        ],
        correctIndex: 3,
        explanation:
          "Stopping on an acceleration lane is a last resort, not a plan. The manual's sequence is check over your shoulder for a gap, adjust speed to meet it and signal, do not stop unless there is no gap in traffic, and merge at about the same speed as the traffic already there.",
        context:
          "The manual is explicit about priority: traffic on the interstate has the right of way, and you cannot count on other drivers seeing you or moving over. The acceleration lane exists so you can match speed, which is why entering slowly is more dangerous than entering at pace.",
        trap:
          "Treating the ramp end as a stop sign is the habit that causes rear-end collisions on Wyoming's interstate on-ramps, where the traffic you are joining may be doing 80.",
        excerptKey: "interstate-merge",
        sourceLabel: "Wyoming Driver License Manual - Interstate driving, Entering the Interstate",
        sourceUrl: hb(60),
      },
      {
        id: "wy_s3_17",
        topic: "safety",
        question:
          "According to the Wyoming manual, roughly how far does a passenger vehicle traveling 55 mph need to stop once the brakes are applied?",
        choices: [
          "About 130 to 140 feet, half the length of a football field",
          "About 60 feet",
          "About 250 feet",
          "About 400 feet",
        ],
        correctIndex: 0,
        explanation:
          "About half a football field, which the manual puts at 130 to 140 feet. That is braking distance alone, on top of the time you spend identifying, predicting, deciding and moving your foot.",
        context:
          "The manual gives the comparison that makes the point: a heavy vehicle with a loaded trailer needs over two-thirds of a football field, about 190 to 200 feet, and in heavy traffic with hot brakes that can double to about 400 feet. Add roughly three-quarters of a second just to move your foot from the accelerator to the brake.",
        trap:
          "Four hundred feet is the hot-brake figure for a loaded truck, not a car. Applying it to your own vehicle understates how differently the truck behind you stops.",
        excerptKey: "stopping-distance-car",
        sourceLabel: "Wyoming Driver License Manual - Braking/stopping",
        sourceUrl: hb(50),
      },
      {
        id: "wy_s3_18",
        topic: "sharing",
        question:
          "You have just overtaken a semi on a Wyoming highway. When does the manual say you may move back into the right lane?",
        choices: [
          "As soon as your rear bumper clears the truck's front bumper",
          "After counting three seconds",
          "When you can see both headlights and the entire cab of the truck in your rearview mirror",
          "When the truck flashes its lights at you",
        ],
        correctIndex: 2,
        explanation:
          "Both headlights and the whole cab in your mirror. That is the manual's cue, and it exists because a truck needs far more stopping distance than the gap that merely looks adequate from your seat.",
        context:
          "The manual explains the consequence of getting it wrong: a car that cuts in too soon and then slows forces the truck driver to compensate with very little time or room. It also warns against loitering in the No-Zone alongside, which happens when your cruise control is set only slightly faster than the truck's.",
        trap:
          "Clearing the front bumper is nowhere near enough. Some rigs with double trailers run up to 100 feet long, and the manual tells you to account for the whole length.",
        excerptKey: "passing-truck-mirror",
        sourceLabel: "Wyoming Driver License Manual - Passing heavy vehicles",
        sourceUrl: hb(57),
      },
      {
        id: "wy_s3_19",
        topic: "signals",
        question:
          "A police officer at a Wyoming intersection waves you through while the signal is showing red. What do you do?",
        choices: [
          "Wait for green - the signal governs",
          "Follow the officer's direction, which outweighs traffic lights and signs",
          "Stop, then proceed only if the officer repeats the signal",
          "Sound your horn to acknowledge, then wait",
        ],
        correctIndex: 1,
        explanation:
          "The officer wins. The manual's list of required stops includes stopping when directed by a police officer and states the principle plainly: a police officer's directions outweigh traffic lights or signs.",
        context:
          "The same precedence runs through the statutes, which repeatedly begin a rule with a phrase like except when directed to proceed by a police officer. It matters most at a failed signal, a crash scene or a work zone where a flag person is controlling traffic.",
        trap:
          "Sitting at the red while an officer waves is not the cautious choice - it obstructs whatever the officer is managing, and the manual makes the hierarchy explicit.",
        excerptKey: "officer-outranks-signals",
        sourceLabel: "Wyoming Driver License Manual - Required stops",
        sourceUrl: hb(50),
      },
      {
        id: "wy_s3_20",
        topic: "speed",
        question:
          "Fog has settled over a stretch of Wyoming highway. What does the manual warn about speed differences in fog?",
        choices: [
          "A difference of more than 5 mph between vehicles is dangerous",
          "Speed differences do not matter in fog, only headlight use",
          "A difference of more than 25 mph is dangerous",
          "The chance of a crash is extremely high when your speed differs from other traffic by more than 15 mph",
        ],
        correctIndex: 3,
        explanation:
          "Fifteen mph is the manual's figure. The danger in fog is not just your own visibility - it is the closing speed between you and a vehicle moving at a very different pace in the same murk.",
        context:
          "The manual's fog advice is a package: low beam headlights, rear fog lights only in seriously reduced visibility and switched off once it improves, reduce your normal speed but not so far that you become the hazard, and stop at the nearest safe place when you cannot see at least 10 seconds ahead.",
        trap:
          "Crawling can be as dangerous as speeding here. The manual says to stop at the nearest safe place when there is potential for a great difference in speed, rather than continuing very slowly.",
        excerptKey: "fog-15-mph-difference",
        sourceLabel: "Wyoming Driver License Manual - Weather conditions, Fog",
        sourceUrl: hb(78),
      },
      {
        id: "wy_s3_21",
        topic: "parking",
        question:
          "You have to leave your car on the roadway outside a business or residence district in Wyoming. What does the law require?",
        choices: [
          "A clear view of the stopped vehicle must be available for 200 feet in each direction",
          "The hazard lights must be left flashing",
          "The vehicle must be within 100 feet of a crossroad",
          "The vehicle may not be left for more than one hour",
        ],
        correctIndex: 0,
        explanation:
          "Two hundred feet of clear view in each direction, from W.S. 31-5-505(a). The same subsection says you may not leave the vehicle on the roadway at all when it is practicable to get it off the roadway, and requires an unobstructed width to be left for other traffic.",
        context:
          "This is the statute that matters on a rural Wyoming highway with a crest or a curve. Its exception is narrow: it does not apply to a vehicle disabled so badly that stopping and leaving it there is unavoidable. The manual's parallel advice for an emergency stop is to get all four wheels off the pavement and turn on the flashers.",
        trap:
          "Hazard lights do not cure a bad position. Stopping just over a rise with flashers on still leaves an approaching driver no time.",
        excerptKey: "parking-rural-200-feet",
        sourceLabel: "Wyoming Statutes 31-5-505(a) - Roadways outside of business or residence districts",
        sourceUrl: ws(193),
      },
      {
        id: "wy_s3_22",
        topic: "rightOfWay",
        question:
          "A pedestrian with a white cane is stepping into the roadway ahead of you in Wyoming. What is required?",
        choices: [
          "Sound the horn to warn them",
          "Yield the right of way",
          "Proceed if you can pass safely behind",
          "Yield only inside a marked crosswalk",
        ],
        correctIndex: 1,
        explanation:
          "Yield, without qualification. W.S. 31-5-611 requires a driver to yield the right of way to any blind pedestrian carrying a clearly visible white cane or accompanied by a guide dog, and the manual's list of required stops includes stopping for them.",
        context:
          "The manual names this alongside two other pedestrian duties: yielding to anyone in a marked crosswalk on your side of the road, and yielding when making a lawful turn on red after stopping. None of the three depend on paint being present.",
        trap:
          "Sounding the horn can startle rather than help, and it does not discharge the duty. The requirement is to yield.",
        excerptKey: "row-blind-pedestrian",
        sourceLabel: "Wyoming Statutes 31-5-611 - Blind pedestrian right-of-way",
        sourceUrl: ws(201),
      },
      {
        id: "wy_s3_23",
        topic: "rules",
        question:
          "What does a solid white line on a Wyoming road tell you?",
        choices: [
          "Traffic on the far side is coming toward you",
          "You may cross it freely to change lanes",
          "Passing or lane changing is hazardous",
          "The lane is reserved for buses",
        ],
        correctIndex: 2,
        explanation:
          "Hazardous is the manual's word. A solid white line separates traffic going the same direction and signals that passing or changing lanes across it is dangerous.",
        context:
          "Contrast the two solids. A solid yellow line means no passing or lane changing at all, with a narrow exception for a left turn into or from an alley, private road or driveway. A solid white is a strong discouragement about a same-direction maneuver rather than a same-direction prohibition on turning.",
        trap:
          "White never separates opposing traffic. If the line beside you is white, everything on the far side of it is going your way.",
        excerptKey: "markings-solid-white",
        sourceLabel: "Wyoming Driver License Manual - Pavement markings",
        sourceUrl: hb(63),
      },
      {
        id: "wy_s3_24",
        topic: "emergencies",
        question:
          "A vehicle is coming straight at you in your lane on a Wyoming two-lane highway and a collision looks likely. What does the manual say to do?",
        choices: [
          "Brake hard and hold your lane",
          "Swerve left into the oncoming lane, which the other driver has left",
          "Accelerate to get past them",
          "Slow down, flash your headlights, pull as far right as possible, and steer off the road to the right if necessary",
        ],
        correctIndex: 3,
        explanation:
          "Right, every time. The manual's sequence is slow and warn with your headlights, then pull as far right as possible, then steer off the road to the right if there is still danger of a collision.",
        context:
          "The manual's rule of thumb for any avoidance maneuver is to turn right, and it explains why: if the other driver does the same, the crash may be avoided entirely. Two drivers who both go left meet in the middle. Running off the road on the right is better than a head-on impact.",
        trap:
          "Swerving into their lane is the instinct that turns a near miss into a head-on. The other driver is probably correcting back at the same moment.",
        excerptKey: "oncoming-in-your-lane",
        sourceLabel: "Wyoming Driver License Manual - Emergency situations, Oncoming car in your lane",
        sourceUrl: hb(82),
      },
      {
        id: "wy_s3_25",
        topic: "signs",
        question: "What is the job of a guide sign in Wyoming?",
        choices: [
          "To tell you where you are, what road you are on and how to get where you want to go",
          "To warn of a hazard ahead",
          "To state a rule you must obey",
          "To mark the boundary of a construction zone",
        ],
        correctIndex: 0,
        explanation:
          "Guide signs orient you. The manual says they tell you where you are, what road you are on and how to get where you want to go, and that most of them are rectangular.",
        context:
          "Two shapes break that pattern and the manual flags them: guide signs for county roads and route markers on freeways have different shapes. Color also carries meaning here, since the type of information given determines the color of the sign.",
        trap:
          "Rectangular is not automatically regulatory. Both regulatory and guide signs use rectangles, and the content tells them apart.",
        excerptKey: "sign-guide",
        sourceLabel: "Wyoming Driver License Manual - Traffic signs, Guide signs",
        sourceUrl: hb(96),
      },
      {
        id: "wy_s3_26",
        topic: "safety",
        question:
          "The Wyoming manual describes a penny test. What does it check?",
        choices: [
          "Tire pressure",
          "Tire tread depth",
          "Windshield wiper wear",
          "Brake pad thickness",
        ],
        correctIndex: 1,
        explanation:
          "Tread depth. Hold a penny with Lincoln's body between your fingers and put his head into the lowest-looking groove; if any part of his head is covered, the manual says you have a safe amount of tread.",
        context:
          "The manual pairs it with a separate pressure check against the psi printed in the owner's manual or on the driver's side door jamb, and asks you to check tires for wear and damage once a month or before a long trip. On Wyoming roads in winter, the tread is what stands between you and a spin on black ice.",
        trap:
          "Pressure and tread are two different checks. A tire can be perfectly inflated and bald.",
        excerptKey: "penny-test",
        sourceLabel: "Wyoming Driver License Manual - Tire safety",
        sourceUrl: hb(69),
      },
      {
        id: "wy_s3_27",
        topic: "impairment",
        question:
          "What does the Wyoming manual say about driving after taking allergy pills or cold remedies?",
        choices: [
          "They are harmless because they are sold without prescription",
          "They affect only drivers who also drink alcohol",
          "They can contain antihistamines, bromides, codeine and alcohol, and can make you sleepy and impair clear thinking",
          "They improve alertness for several hours",
        ],
        correctIndex: 2,
        explanation:
          "Over the counter does not mean over the risk. The manual lists what these remedies can contain - antihistamines, bromides, codeine and alcohol - and says they can make a person sleepy and impair the ability to think clearly.",
        context:
          "The manual runs the same warning through sleeping pills, tranquilizers and stay-awake pills, all measured against the IPDE skills. It also states the legal point: driving while under the influence of any controlled drug is not legal, and you may be charged and convicted of DWUI.",
        trap:
          "A prescription is not a defense either. The statute says being lawfully entitled to use a controlled substance is not a defense to a DWUI charge.",
        excerptKey: "allergy-pills",
        sourceLabel: "Wyoming Driver License Manual - Other drugs",
        sourceUrl: hb(38),
      },
      {
        id: "wy_s3_28",
        topic: "licensing",
        question:
          "You move to a new address within Wyoming. How long do you have to tell the department?",
        choices: ["30 days", "60 days", "Before your next renewal", "10 days, in writing"],
        correctIndex: 3,
        explanation:
          "Ten days, in writing. The manual says licensees who change their address must notify the department in writing within 10 days of the change, and address-change forms are available at every exam station and on the WYDOT website.",
        context:
          "The deadline is short because so much of Wyoming's licensing machinery runs by mail. Suspension orders, renewal applications and notices of contested case hearings all go to the address on record, and the clock on a 20-day deadline to request a hearing starts from the date of the notice, not the date you happened to read it.",
        trap:
          "Waiting for renewal is the natural assumption and the wrong one. A notice sent to an old address is still legally served.",
        excerptKey: "address-change",
        sourceLabel: "Wyoming Driver License Manual - Acceptable legal identification",
        sourceUrl: hb(8),
      },
      {
        id: "wy_s3_29",
        topic: "rules",
        question:
          "You find yourself heading the wrong way up an exit ramp in Wyoming. What does the manual tell you to do?",
        choices: [
          "Pull onto the shoulder, stop, and only turn around when there is no oncoming traffic",
          "Reverse back down the ramp immediately",
          "Continue to the top and turn around on the interstate",
          "Stop where you are and switch on your hazard lights",
        ],
        correctIndex: 0,
        explanation:
          "Shoulder, stop, then turn around only when nothing is coming. The manual gives that exact sequence right after telling you to watch for DO NOT ENTER and WRONG WAY signs at every ramp.",
        context:
          "Wrong-way entries usually start with a ramp that looks like the one you wanted. The signs are the warning system, and the manual puts them at the head of its interstate section for that reason. Stopping in the traffic lane of a ramp is not a safe outcome either.",
        trap:
          "Reversing feels like undoing the mistake and puts you moving backwards into a blind convergence. Get out of the lane first.",
        excerptKey: "interstate-wrong-way",
        sourceLabel: "Wyoming Driver License Manual - Interstate driving, Entering the Interstate",
        sourceUrl: hb(60),
      },
      {
        id: "wy_s3_30",
        topic: "sharing",
        question:
          "Your car has broken down on a Wyoming road with no sidewalks and you must walk. Which side do you walk on?",
        choices: [
          "The right side, with traffic",
          "The left side, facing traffic",
          "Either side, as long as you stay on the shoulder",
          "Down the center of the roadway where drivers can see you",
        ],
        correctIndex: 1,
        explanation:
          "Left side, facing traffic. The manual gives this for a disabled vehicle where there are no sidewalks, and adds that at night you should wear light-colored clothing.",
        context:
          "There is one important exception in the same manual: if you break down on the interstate, do not walk for help at all. Stay with the vehicle, get all four wheels off the road, use the four-way flashers, and raise the hood or tie a white cloth to the antenna.",
        trap:
          "The with-traffic answer comes from cycling, where a bicycle is a vehicle and rides with traffic. On foot the rule reverses, so you can see what is coming.",
        excerptKey: "pedestrian-walk-facing",
        sourceLabel: "Wyoming Driver License Manual - Sharing the road safely, Pedestrians",
        sourceUrl: hb(70),
      },
      {
        id: "wy_s3_31",
        topic: "safety",
        question:
          "You feel drowsy, dizzy and slightly nauseous with a headache while driving. What does the Wyoming manual suggest this may be?",
        choices: [
          "Normal highway fatigue that a coffee stop will fix",
          "Altitude sickness, common on Wyoming passes",
          "Carbon monoxide poisoning - stop the engine and open the windows for fresh air",
          "Dehydration, which needs no immediate action",
        ],
        correctIndex: 2,
        explanation:
          "Those are the manual's listed signs of carbon monoxide poisoning: weariness, yawning, dizziness, nausea, headache and ringing in the ears. Its instruction is to stop the engine and open the windows to get fresh air.",
        context:
          "The gas is colorless, odorless and poisonous, so the symptoms are the only warning you get. The manual's prevention list is short: have the exhaust system checked regularly, avoid long periods parked with the engine running, and never start or warm up a vehicle in a closed garage.",
        trap:
          "Waiting it out is the dangerous response, because the same symptoms are also what makes you too impaired to notice they are getting worse.",
        excerptKey: "carbon-monoxide-signs",
        sourceLabel: "Wyoming Driver License Manual - Hazardous situations, Carbon monoxide",
        sourceUrl: hb(84),
      },
      {
        id: "wy_s3_32",
        topic: "speed",
        question:
          "The road ahead is covered in packed snow. By how much does the Wyoming manual say to reduce your speed?",
        choices: [
          "By 5 to 10 mph",
          "To a crawl",
          "By a quarter",
          "By at least half",
        ],
        correctIndex: 3,
        explanation:
          "By at least half on packed snow. The manual gives a three-step scale: at least 5 to 10 mph off on a wet road, at least half on packed snow, and down to a crawl on ice.",
        context:
          "These reductions are not posted anywhere, and the manual expects you to apply them without being told. Its reasoning is about grip - the only contact your car has with the road is four patches of rubber roughly the size of a hand, and how much those patches can do depends entirely on the surface.",
        trap:
          "Five to 10 mph is the wet-road figure. Carrying it onto packed snow leaves you at roughly double the speed the manual asks for.",
        excerptKey: "speed-slippery-scale",
        sourceLabel: "Wyoming Driver License Manual - Adjust speed for road conditions",
        sourceUrl: hb(41),
      },
      {
        id: "wy_s3_33",
        topic: "rightOfWay",
        question:
          "The car ahead of you has stopped at a marked crosswalk to let a pedestrian cross. What does Wyoming law say you may do?",
        choices: [
          "You may not overtake and pass the stopped vehicle",
          "You may pass on the right if the lane is clear",
          "You may pass once the pedestrian has reached the center line",
          "You may pass at any time, since the stopped vehicle is not signaling",
        ],
        correctIndex: 0,
        explanation:
          "No passing. W.S. 31-5-602(e) forbids any driver approaching from the rear to overtake and pass a vehicle stopped at a marked or unmarked crosswalk to let a pedestrian cross.",
        context:
          "The reason is a sight line. The stopped car hides the pedestrian from you and hides you from the pedestrian, so a pass at that moment is a blind pass into an occupied crosswalk. This is one of the most common ways pedestrians are killed at crossings.",
        trap:
          "Reaching the center line does not release you. The prohibition is about passing the stopped vehicle, not about where the pedestrian has got to.",
        excerptKey: "row-no-passing-stopped-vehicle",
        sourceLabel: "Wyoming Statutes 31-5-602(e) - Right-of-way in crosswalks",
        sourceUrl: ws(199),
        commonlyMissed: true,
      },
      {
        id: "wy_s3_34",
        topic: "signs",
        question:
          "You reach a railroad crossing marked with a crossbuck and a small sign reading 3 beneath it. What does the number tell you?",
        choices: [
          "The crossing is three miles from the next town",
          "There are three sets of tracks at this crossing",
          "Trains pass three times a day",
          "The speed limit across the tracks is 3 mph",
        ],
        correctIndex: 1,
        explanation:
          "Three tracks. The manual says that when a crossing has more than one set of tracks there will be a sign below the crossbuck indicating how many.",
        context:
          "That number is a warning about a specific danger. The manual tells you to make sure all tracks are clear before crossing, and to stay alert at a multiple-track crossing because a second train can be coming from either direction behind the first. Never start across unless you can clear the far side without stopping.",
        trap:
          "The crossbuck itself is a yield sign in Wyoming, so a driver who treats the number as decoration and the crossbuck as decoration too has ignored two instructions at once.",
        excerptKey: "crossbuck-is-yield",
        sourceLabel: "Wyoming Driver License Manual - Railroad crossings",
        sourceUrl: hb(66),
      },
      {
        id: "wy_s3_35",
        topic: "signals",
        question:
          "A traffic signal at a Wyoming intersection is dark because of a power failure, and no officer is present. How should you treat it?",
        choices: [
          "As a green light in the direction of the busier road",
          "As though the intersection does not exist",
          "Continue at the posted speed and sound your horn",
          "The manual gives no rule for a dark signal, so drive to the general right-of-way and speed rules and treat the intersection with caution",
        ],
        correctIndex: 3,
        explanation:
          "The 2021 manual has no instruction for a dark signal, which is worth knowing rather than guessing about. What it does give you is the framework: right-of-way laws say who must yield, you must never insist on the right of way at the risk of a crash, and you forfeit any right of way you had if you enter while breaking the speed law.",
        context:
          "In practice this means treating the crossing as one where nobody has been given priority and everybody has a duty to yield. The manual's uncontrolled-intersection guidance is the nearest applicable rule: watch for the driver on your right, and W.S. 31-5-220 gives priority to whoever entered first and to the vehicle on the right in a tie.",
        trap:
          "Assuming the bigger road keeps priority is the dangerous guess, because the driver on the smaller road is often assuming the same thing about themselves.",
        excerptKey: "row-never-insist",
        sourceLabel: "Wyoming Driver License Manual - Right of way",
        sourceUrl: hb(47),
      },
    ],
  },
];
